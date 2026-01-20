import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/details/_details.scss'

export interface DetailsProps {
  summary: string
  children: ReactNode
  open?: boolean
  className?: string
  onToggle?: (event: React.SyntheticEvent<HTMLDetailsElement>) => void
}

export function Details({
  summary,
  children,
  open = false,
  className = '',
  onToggle,
}: DetailsProps) {
  const detailsClass = `govuk-details${className ? ` ${className}` : ''}`

  return (
    <details className={detailsClass} open={open} onToggle={onToggle}>
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">{summary}</span>
      </summary>
      <div className="govuk-details__text">{children}</div>
    </details>
  )
}
