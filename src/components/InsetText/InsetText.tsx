import type { ReactNode } from 'react'

export interface InsetTextProps {
  children: ReactNode
  className?: string
}

export function InsetText({ children, className = '' }: InsetTextProps) {
  const insetClass = `govuk-inset-text${className ? ` ${className}` : ''}`

  return <div className={insetClass}>{children}</div>
}
