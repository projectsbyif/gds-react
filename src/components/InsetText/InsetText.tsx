import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/inset-text/_inset-text.scss'

export interface InsetTextProps {
  children: ReactNode
  className?: string
}

export function InsetText({ children, className = '' }: InsetTextProps) {
  const insetClass = `govuk-inset-text${className ? ` ${className}` : ''}`

  return <div className={insetClass}>{children}</div>
}
