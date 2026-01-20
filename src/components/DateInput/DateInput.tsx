import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/date-input/_date-input.scss'

export type DateInputOnChangeProps = {
  day: string
  month: string
  year: string
}

export interface DateInputProps {
  id: string
  namePrefix: string
  legend: string | ReactNode
  legendAsHeading?: boolean
  legendSize?: 'xl' | 'l' | 'm' | 's'
  hint?: string
  error?: string
  errorFields?: ('day' | 'month' | 'year')[]
  dayValue?: string
  monthValue?: string
  yearValue?: string
  onChange?: (values: DateInputOnChangeProps) => void
  autocomplete?: 'bday' | string
  className?: string
}

export function DateInput({
  id,
  namePrefix,
  legend,
  legendAsHeading = false,
  legendSize = 'l',
  hint,
  error,
  errorFields,
  dayValue,
  monthValue,
  yearValue,
  onChange,
  autocomplete,
  className = '',
}: DateInputProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  // Build aria-describedby string
  const ariaDescribedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  // Determine which fields should show error styling
  const hasError = !!error
  const allFieldsError = hasError && (!errorFields || errorFields.length === 0)
  const dayError = allFieldsError || errorFields?.includes('day')
  const monthError = allFieldsError || errorFields?.includes('month')
  const yearError = allFieldsError || errorFields?.includes('year')

  // Build class names
  const formGroupClass = `govuk-form-group${hasError ? ' govuk-form-group--error' : ''}`
  const legendClass = legendAsHeading
    ? `govuk-fieldset__legend govuk-fieldset__legend--${legendSize}`
    : 'govuk-fieldset__legend'

  // Autocomplete values
  const dayAutocomplete = autocomplete === 'bday' ? 'bday-day' : undefined
  const monthAutocomplete = autocomplete === 'bday' ? 'bday-month' : undefined
  const yearAutocomplete = autocomplete === 'bday' ? 'bday-year' : undefined

  // Handle change events
  const handleChange = (field: 'day' | 'month' | 'year', value: string) => {
    if (onChange) {
      onChange({
        day: field === 'day' ? value : dayValue || '',
        month: field === 'month' ? value : monthValue || '',
        year: field === 'year' ? value : yearValue || '',
      })
    }
  }

  // Render legend
  const legendElement = legendAsHeading ? (
    <legend className={legendClass}>
      <h1 className="govuk-fieldset__heading">{legend}</h1>
    </legend>
  ) : (
    <legend className={legendClass}>{legend}</legend>
  )

  return (
    <div className={formGroupClass}>
      <fieldset className="govuk-fieldset" role="group" aria-describedby={ariaDescribedBy}>
        {legendElement}

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

        <div className={`govuk-date-input${className ? ` ${className}` : ''}`} id={id}>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={`${namePrefix}-day`}>
                Day
              </label>
              <input
                className={`govuk-input govuk-date-input__input govuk-input--width-2${dayError ? ' govuk-input--error' : ''}`}
                id={`${namePrefix}-day`}
                name={`${namePrefix}-day`}
                type="text"
                inputMode="numeric"
                autoComplete={dayAutocomplete}
                value={dayValue}
                onChange={(e) => handleChange('day', e.target.value)}
              />
            </div>
          </div>

          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label
                className="govuk-label govuk-date-input__label"
                htmlFor={`${namePrefix}-month`}
              >
                Month
              </label>
              <input
                className={`govuk-input govuk-date-input__input govuk-input--width-2${monthError ? ' govuk-input--error' : ''}`}
                id={`${namePrefix}-month`}
                name={`${namePrefix}-month`}
                type="text"
                inputMode="numeric"
                autoComplete={monthAutocomplete}
                value={monthValue}
                onChange={(e) => handleChange('month', e.target.value)}
              />
            </div>
          </div>

          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={`${namePrefix}-year`}>
                Year
              </label>
              <input
                className={`govuk-input govuk-date-input__input govuk-input--width-4${yearError ? ' govuk-input--error' : ''}`}
                id={`${namePrefix}-year`}
                name={`${namePrefix}-year`}
                type="text"
                inputMode="numeric"
                autoComplete={yearAutocomplete}
                value={yearValue}
                onChange={(e) => handleChange('year', e.target.value)}
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
