'use client'

import type { ReactNode } from 'react'

export interface FileUploadProps {
  id: string
  name: string
  label: string | ReactNode
  hint?: string
  error?: string
  accept?: string
  multiple?: boolean
  onChange?: (files: FileList | null) => void
  className?: string
}

export function FileUpload({
  id,
  name,
  label,
  hint,
  error,
  accept,
  multiple = false,
  onChange,
  className = '',
}: FileUploadProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  // Build aria-describedby string
  const ariaDescribedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  // Build class names
  const formGroupClass = `govuk-form-group${error ? ' govuk-form-group--error' : ''}`
  const inputClass = `govuk-file-upload${error ? ' govuk-file-upload--error' : ''}${className ? ` ${className}` : ''}`

  return (
    <div className={formGroupClass}>
      <label className="govuk-label" htmlFor={id}>
        {label}
      </label>

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

      <input
        className={inputClass}
        id={id}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        aria-describedby={ariaDescribedBy}
        onChange={(e) => onChange?.(e.target.files)}
      />
    </div>
  )
}
