'use client'

import type { ReactNode } from 'react'
import { Link } from '../Link/Link.js'

export interface SummaryListAction {
  href: string
  text: string
  visuallyHiddenText?: string
}

export interface SummaryListRow {
  key: string | ReactNode
  value: ReactNode
  actions?: SummaryListAction[]
}

export interface SummaryCardAction {
  href: string
  text: string
  visuallyHiddenText?: string
}

export interface SummaryListProps {
  rows: SummaryListRow[]
  noBorder?: boolean
  card?: {
    title: string
    titleHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    actions?: SummaryCardAction[]
  }
  className?: string
}

export function SummaryList({ rows, noBorder = false, card, className = '' }: SummaryListProps) {
  const listClass = `govuk-summary-list${noBorder ? ' govuk-summary-list--no-border' : ''}${className ? ` ${className}` : ''}`

  // Check if there's a mix of rows with and without actions
  const hasActionsInSomeRows = rows.some((row) => row.actions && row.actions.length > 0)

  const summaryListContent = (
    <dl className={listClass}>
      {rows.map((row, index) => {
        const hasActions = row.actions && row.actions.length > 0
        const rowClass = `govuk-summary-list__row${
          hasActionsInSomeRows && !hasActions ? ' govuk-summary-list__row--no-actions' : ''
        }`

        return (
          <div key={`summary-row-${index}`} className={rowClass}>
            <dt className="govuk-summary-list__key">{row.key}</dt>
            <dd className="govuk-summary-list__value">{row.value}</dd>
            {hasActions && (
              <dd className="govuk-summary-list__actions">
                {row.actions && row.actions.length === 1 && row.actions[0] ? (
                  <a className="govuk-link" href={row.actions[0].href}>
                    {row.actions[0].text}
                    {row.actions[0].visuallyHiddenText && (
                      <span className="govuk-visually-hidden">
                        {' '}
                        {row.actions[0].visuallyHiddenText}
                      </span>
                    )}
                  </a>
                ) : (
                  <ul className="govuk-summary-list__actions-list">
                    {row.actions?.map((action, actionIndex) => (
                      <li
                        key={`action-${index}-${actionIndex}`}
                        className="govuk-summary-list__actions-list-item"
                      >
                        <Link className="govuk-link" href={action.href}>
                          {action.text}
                          {action.visuallyHiddenText && (
                            <span className="govuk-visually-hidden">
                              {' '}
                              {action.visuallyHiddenText}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </dd>
            )}
          </div>
        )
      })}
    </dl>
  )

  // If no card, return just the summary list
  if (!card) {
    return summaryListContent
  }

  // Otherwise, wrap in a summary card
  const TitleTag = card.titleHeadingLevel || 'h2'

  return (
    <div className="govuk-summary-card">
      <div className="govuk-summary-card__title-wrapper">
        <TitleTag className="govuk-summary-card__title">{card.title}</TitleTag>
        {card.actions && card.actions.length > 0 && (
          <ul className="govuk-summary-card__actions">
            {card.actions.map((action, index) => (
              <li key={`card-action-${index}`} className="govuk-summary-card__action">
                <Link className="govuk-link" href={action.href}>
                  {action.text}
                  {action.visuallyHiddenText && (
                    <span className="govuk-visually-hidden"> {action.visuallyHiddenText}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="govuk-summary-card__content">{summaryListContent}</div>
    </div>
  )
}
