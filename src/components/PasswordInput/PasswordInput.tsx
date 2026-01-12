'use client'

import { type ReactNode, useState } from 'react'

export interface PasswordInputProps {
  id: string
  name: string
  label: string | ReactNode
  labelAsHeading?: boolean
  labelSize?: 'l' | 'm' | 's'
  hint?: string
  error?: string
  autocomplete?: 'current-password' | 'new-password'
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  showButtonText?: string
  hideButtonText?: string
  showButtonAriaLabel?: string
  hideButtonAriaLabel?: string
}

export function PasswordInput({
  id,
  name,
  label,
  labelAsHeading = true,
  labelSize = 'l',
  hint,
  error,
  autocomplete = 'current-password',
  value,
  defaultValue,
  onChange,
  className = '',
  showButtonText = 'Show',
  hideButtonText = 'Hide',
  showButtonAriaLabel = 'Show password',
  hideButtonAriaLabel = 'Hide password',
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  // Build aria-describedby string
  const ariaDescribedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  // Build class names
  const formGroupClass = `govuk-form-group govuk-password-input${error ? ' govuk-form-group--error' : ''}`
  const labelClass = labelAsHeading ? `govuk-label govuk-label--${labelSize}` : 'govuk-label'
  const inputClass = `govuk-input govuk-password-input__input govuk-js-password-input-input${error ? ' govuk-input--error' : ''}${className ? ` ${className}` : ''}`

  // Toggle password visibility
  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

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
    <div className={formGroupClass} data-module="govuk-password-input">
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

      <div className="govuk-input__wrapper govuk-password-input__wrapper">
        <input
          className={inputClass}
          id={id}
          name={name}
          type={isPasswordVisible ? 'text' : 'password'}
          spellCheck={false}
          autoComplete={autocomplete}
          autoCapitalize="none"
          value={value}
          defaultValue={defaultValue}
          aria-describedby={ariaDescribedBy}
          onChange={(e) => onChange?.(e.target.value)}
        />
        <button
          type="button"
          className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
          data-module="govuk-button"
          aria-controls={id}
          aria-label={isPasswordVisible ? hideButtonAriaLabel : showButtonAriaLabel}
          onClick={handleToggle}
        >
          {isPasswordVisible ? hideButtonText : showButtonText}
        </button>
      </div>
    </div>
  )
}
