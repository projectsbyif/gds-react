import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/textarea/_textarea.scss'

export interface TextareaProps {
  id: string
  name: string
  label: string | ReactNode
  labelAsHeading?: boolean
  labelSize?: 'l' | 'm' | 's'
  hint?: string
  error?: string
  rows?: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  maxLength?: number
  spellcheck?: boolean
  autocomplete?: string
  className?: string
}

export function Textarea({
  id,
  name,
  label,
  labelAsHeading = false,
  labelSize = 'l',
  hint,
  error,
  rows = 5,
  value,
  defaultValue,
  onChange,
  maxLength,
  spellcheck,
  autocomplete,
  className = '',
}: TextareaProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  // Build aria-describedby string
  const ariaDescribedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  // Build class names
  const formGroupClass = `govuk-form-group${error ? ' govuk-form-group--error' : ''}`
  const labelClass = labelAsHeading ? `govuk-label govuk-label--${labelSize}` : 'govuk-label'
  const textareaClass = `govuk-textarea${error ? ' govuk-textarea--error' : ''}${className ? ` ${className}` : ''}`

  // Render label
  const labelElement = labelAsHeading ? (
    <h1 className="govuk-label-wrapper">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
    </h1>
  ) : (
    <label className={labelClass} htmlFor={id}>
      {label}
    </label>
  )

  return (
    <div className={formGroupClass}>
      {labelElement}

      {hint && (
        <div id={hintId} className="govuk-hint">
          {hint}
        </div>
      )}

      {error && (
        <p id={errorId} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {error}
        </p>
      )}

      <textarea
        className={textareaClass}
        id={id}
        name={name}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        maxLength={maxLength}
        spellCheck={spellcheck}
        autoComplete={autocomplete}
        aria-describedby={ariaDescribedBy}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}
