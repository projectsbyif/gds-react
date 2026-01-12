'use client'

import type { ReactNode } from 'react'

export interface SelectOption {
  value: string
  text: string
  selected?: boolean
  disabled?: boolean
}

export interface SelectProps {
  id: string
  name: string
  label: string | ReactNode
  labelAsHeading?: boolean
  labelSize?: 'l' | 'm' | 's'
  hint?: string
  error?: string
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function Select({
  id,
  name,
  label,
  labelAsHeading = false,
  labelSize = 'l',
  hint,
  error,
  options,
  value,
  defaultValue,
  onChange,
  className = '',
}: SelectProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  // Build aria-describedby string
  const ariaDescribedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  // Build class names
  const formGroupClass = `govuk-form-group${error ? ' govuk-form-group--error' : ''}`
  const labelClass = labelAsHeading ? `govuk-label govuk-label--${labelSize}` : 'govuk-label'
  const selectClass = `govuk-select${error ? ' govuk-select--error' : ''}${className ? ` ${className}` : ''}`

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

      <select
        className={selectClass}
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        aria-describedby={ariaDescribedBy}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            {...(option.selected && !value && !defaultValue ? { defaultValue: option.value } : {})}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
