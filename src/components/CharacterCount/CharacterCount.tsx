'use client'

import type { ReactNode } from 'react'

export interface CharacterCountProps {
  id: string
  name: string
  label: string | ReactNode
  labelAsHeading?: boolean
  labelSize?: 'l' | 'm' | 's'
  hint?: string
  error?: string
  maxLength?: number
  maxWords?: number
  threshold?: number
  rows?: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function CharacterCount({
  id,
  name,
  label,
  labelAsHeading = false,
  labelSize = 'l',
  hint,
  error,
  maxLength,
  maxWords,
  threshold,
  rows = 5,
  value,
  defaultValue,
  onChange,
  className = '',
}: CharacterCountProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const infoId = `${id}-info`

  // Build aria-describedby string
  const ariaDescribedBy = [infoId, hintId, errorId].filter(Boolean).join(' ')

  // Build class names
  const formGroupClass = `govuk-form-group govuk-character-count${error ? ' govuk-form-group--error' : ''}`
  const labelClass = labelAsHeading ? `govuk-label govuk-label--${labelSize}` : 'govuk-label'
  const textareaClass = `govuk-textarea govuk-js-character-count${error ? ' govuk-textarea--error' : ''}${className ? ` ${className}` : ''}`

  // Build data attributes
  const dataAttributes: Record<string, string> = {
    'data-module': 'govuk-character-count',
  }

  if (maxLength) {
    dataAttributes['data-maxlength'] = maxLength.toString()
  } else if (maxWords) {
    dataAttributes['data-maxwords'] = maxWords.toString()
  }

  if (threshold) {
    dataAttributes['data-threshold'] = threshold.toString()
  }

  // Generate static message for non-JS users
  const countType = maxWords ? 'words' : 'characters'
  const limit = maxLength || maxWords || 0
  const staticMessage = `You can enter up to ${limit} ${countType}`

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
    <div className={formGroupClass} {...dataAttributes}>
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
        aria-describedby={ariaDescribedBy}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
      />

      <div id={infoId} className="govuk-hint govuk-character-count__message">
        {staticMessage}
      </div>
    </div>
  )
}
