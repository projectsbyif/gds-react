'use client'

import type { ReactNode } from 'react'

export interface TextInputProps {
  id: string
  name: string
  label: string | ReactNode
  labelAsHeading?: boolean
  labelSize?: 'l' | 'm' | 's'
  hint?: string
  error?: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'search'
  inputMode?: 'numeric' | 'decimal' | 'tel' | 'email' | 'url' | 'search'
  width?:
    | number
    | 'full'
    | 'three-quarters'
    | 'two-thirds'
    | 'one-half'
    | 'one-third'
    | 'one-quarter'
  prefix?: string
  suffix?: string
  extraLetterSpacing?: boolean
  spellcheck?: boolean
  autocomplete?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function TextInput({
  id,
  name,
  label,
  labelAsHeading = false,
  labelSize = 'l',
  hint,
  error,
  type = 'text',
  inputMode,
  width,
  prefix,
  suffix,
  extraLetterSpacing = false,
  spellcheck,
  autocomplete,
  value,
  defaultValue,
  onChange,
  className = '',
}: TextInputProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  // Build aria-describedby string
  const ariaDescribedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  // Build class names
  const formGroupClass = `govuk-form-group${error ? ' govuk-form-group--error' : ''}`
  const labelClass = labelAsHeading ? `govuk-label govuk-label--${labelSize}` : 'govuk-label'

  // Width classes
  let widthClass = ''
  if (width) {
    if (typeof width === 'number') {
      widthClass = ` govuk-input--width-${width}`
    } else if (width === 'full') {
      widthClass = ' govuk-!-width-full'
    } else {
      widthClass = ` govuk-!-width-${width}`
    }
  }

  const inputClass = `govuk-input${widthClass}${extraLetterSpacing ? ' govuk-input--extra-letter-spacing' : ''}${error ? ' govuk-input--error' : ''}${className ? ` ${className}` : ''}`

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

  // Render input (with or without prefix/suffix wrapper)
  const inputElement = (
    <input
      className={inputClass}
      id={id}
      name={name}
      type={type}
      inputMode={inputMode}
      spellCheck={spellcheck}
      autoComplete={autocomplete}
      value={value}
      defaultValue={defaultValue}
      aria-describedby={ariaDescribedBy}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )

  const inputWithWrapper =
    prefix || suffix ? (
      <div className="govuk-input__wrapper">
        {prefix && (
          <div className="govuk-input__prefix" aria-hidden="true">
            {prefix}
          </div>
        )}
        {inputElement}
        {suffix && (
          <div className="govuk-input__suffix" aria-hidden="true">
            {suffix}
          </div>
        )}
      </div>
    ) : (
      inputElement
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

      {inputWithWrapper}
    </div>
  )
}
