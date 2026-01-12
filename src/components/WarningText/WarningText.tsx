'use client'

import type { ReactNode } from 'react'

export interface WarningTextProps {
  children: ReactNode
  iconFallbackText?: string
  className?: string
}

export function WarningText({
  children,
  iconFallbackText = 'Warning',
  className = '',
}: WarningTextProps) {
  const warningClass = `govuk-warning-text${className ? ` ${className}` : ''}`

  return (
    <div className={warningClass}>
      <span className="govuk-warning-text__icon" aria-hidden="true">
        !
      </span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-visually-hidden">{iconFallbackText}</span>
        {children}
      </strong>
    </div>
  )
}
