"use client";

import { Fragment, type ReactNode, useEffect, useState } from "react";

import "govuk-frontend/dist/govuk/components/radios/_radios.scss";

export interface RadioOption {
  label: string;
  value: string;
  hint?: string;
  id?: string;
  disabled?: boolean;
  divider?: boolean;
  conditionalContent?: ReactNode;
}

export interface RadiosProps {
  name: string;
  legend?: string | ReactNode;
  hint?: string;
  options: RadioOption[];
  error?: string;
  legendSize?: "xl" | "l" | "m" | "s";
  inline?: boolean;
  small?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
}

export function Radios({
  name,
  legend,
  hint,
  options,
  error,
  legendSize = "l",
  inline = false,
  small = false,
  onChange,
  value,
  defaultValue,
}: RadiosProps) {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { Radios, createAll } = await import("govuk-frontend");
    createAll(Radios);
  };

  useEffect(() => {
    initialise();
  }, []);
  
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue
  );

  // Determine if controlled or uncontrolled
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  // Build aria-describedby string
  const ariaDescribedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const legendClass = `govuk-fieldset__legend govuk-fieldset__legend--${legendSize}`;
  const radiosClass = `govuk-radios${inline ? " govuk-radios--inline" : ""}${
    small ? " govuk-radios--small" : ""
  }`;
  const formGroupClass = `govuk-form-group${
    error ? " govuk-form-group--error" : ""
  }`;

  // Generate IDs for options
  const optionsWithIds = options.map((option, index) => ({
    ...option,
    id: option.id || (index === 0 ? name : `${name}-${index + 1}`),
  }));

  return (
    <div className={formGroupClass}>
      <fieldset className="govuk-fieldset" aria-describedby={ariaDescribedBy}>
        <legend className={legendClass}>
          {typeof legend === "string" ? (
            <h1 className="govuk-fieldset__heading">{legend}</h1>
          ) : (
            legend
          )}
        </legend>

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

        <div className={radiosClass} data-module="govuk-radios">
          {optionsWithIds.map((option) => {
            const itemHintId = option.hint
              ? `${option.id}-item-hint`
              : undefined;
            const conditionalId = option.conditionalContent
              ? `conditional-${option.id}`
              : undefined;
            const itemAriaDescribedBy = itemHintId || undefined;

            return (
              <Fragment key={option.id}>
                {option.divider && (
                  <div className="govuk-radios__divider">or</div>
                )}

                <div className="govuk-radios__item">
                  <input
                    className="govuk-radios__input"
                    id={option.id}
                    name={name}
                    type="radio"
                    value={option.value}
                    checked={currentValue === option.value}
                    disabled={option.disabled}
                    aria-describedby={itemAriaDescribedBy}
                    data-aria-controls={conditionalId}
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (!isControlled) {
                          setInternalValue(option.value);
                        }
                        onChange?.(option.value);
                      }
                    }}
                  />
                  <label
                    className="govuk-label govuk-radios__label"
                    htmlFor={option.id}
                  >
                    {option.label}
                  </label>

                  {option.hint && (
                    <div
                      id={itemHintId}
                      className="govuk-hint govuk-radios__hint"
                    >
                      {option.hint}
                    </div>
                  )}
                </div>

                {option.conditionalContent && (
                  <div
                    className={`govuk-radios__conditional${
                      currentValue === option.value
                        ? ""
                        : " govuk-radios__conditional--hidden"
                    }`}
                    id={conditionalId}
                  >
                    {option.conditionalContent}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
