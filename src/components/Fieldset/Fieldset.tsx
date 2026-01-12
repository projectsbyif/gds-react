import type { ReactNode } from 'react'

export interface FieldsetProps {
  legend: string | ReactNode
  legendAsHeading?: boolean
  legendSize?: 'xl' | 'l' | 'm' | 's'
  children: ReactNode
  ariaDescribedBy?: string
  role?: string
  className?: string
}

export function Fieldset({
  legend,
  legendAsHeading = false,
  legendSize = 'l',
  children,
  ariaDescribedBy,
  role,
  className = '',
}: FieldsetProps) {
  const fieldsetClass = `govuk-fieldset${className ? ` ${className}` : ''}`
  const legendClass = `govuk-fieldset__legend govuk-fieldset__legend--${legendSize}`

  // Render legend
  const legendElement = legendAsHeading ? (
    <legend className={legendClass}>
      <h1 className="govuk-fieldset__heading">{legend}</h1>
    </legend>
  ) : (
    <legend className={legendClass}>{legend}</legend>
  )

  return (
    <fieldset className={fieldsetClass} role={role} aria-describedby={ariaDescribedBy}>
      {legendElement}
      {children}
    </fieldset>
  )
}
