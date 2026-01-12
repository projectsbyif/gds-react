'use client'

import { useEffect, useRef } from 'react'

export interface ErrorSummaryError {
  target: string
  message: string
}

// Legacy export for backwards compatibility
export type ErrorMessage = ErrorSummaryError

interface ErrorSummaryProps {
  title?: string
  errors: ErrorSummaryError[]
  hideOnEmpty?: boolean
}

export const ErrorSummary = ({
  errors,
  title = 'There is a problem', // TODO translations
  hideOnEmpty = true,
}: ErrorSummaryProps) => {
  const summaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check each error target exists in the DOM
    errors.forEach(({ target }) => {
      const element = document.getElementById(target)
      if (!element) {
        console.warn(`ErrorSummary: Target element with id "${target}" not found in the DOM`)
      }
    })

    // Focus the error summary when errors are present
    if (errors.length > 0 && summaryRef.current) {
      summaryRef.current.focus()
    }
  }, [errors])

  if (hideOnEmpty && !errors.length) return null

  return (
    <div
      className="govuk-error-summary"
      data-module="govuk-error-summary"
      tabIndex={-1}
      ref={summaryRef}
    >
      <div role="alert">
        <h2 className="govuk-error-summary__title">{title}</h2>
        <div className="govuk-error-summary__body">
          <ul className="govuk-list govuk-error-summary__list">
            {errors.map(({ target, message }) => {
              return (
                <li key={`error-list-item-${target}`}>
                  <a href={`#${target}`}>{message}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
