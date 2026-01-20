import { useEffect, type ReactNode } from "react";

import "govuk-frontend/dist/govuk/components/checkboxes/_checkboxes.scss";

export interface CheckboxOption {
  label: string;
  value: string;
  hint?: string;
  id?: string;
  disabled?: boolean;
  exclusive?: boolean;
  conditionalContent?: ReactNode;
}

export interface CheckboxesProps {
  name: string;
  legend: string | ReactNode;
  hint?: string;
  options: CheckboxOption[];
  error?: string;
  legendSize?: "xl" | "l" | "m" | "s";
  small?: boolean;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  checkboxesClassName?: string;
  labelClassName?: string;
}

export function Checkboxes({
  name,
  legend,
  hint,
  options,
  error,
  legendSize = "l",
  small = false,
  onChange,
  defaultValue = [],
  checkboxesClassName = "",
  labelClassName = "",
}: CheckboxesProps) {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { Checkboxes, createAll } = await import("govuk-frontend");
    createAll(Checkboxes);
  };

  useEffect(() => {
    initialise();
  }, []);

  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  // Build aria-describedby string
  const ariaDescribedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const legendClass = `govuk-fieldset__legend govuk-fieldset__legend--${legendSize}`;
  const checkboxesClass = `govuk-checkboxes${
    small ? " govuk-checkboxes--small" : ""
  } ${checkboxesClassName}`;
  const formGroupClass = `govuk-form-group${
    error ? " govuk-form-group--error" : ""
  }`;

  // Generate IDs for options
  const optionsWithIds = options.map((option, index) => ({
    ...option,
    id: option.id || (index === 0 ? name : `${name}-${index + 1}`),
  }));

  // Find exclusive options for divider
  const exclusiveIndex = optionsWithIds.findIndex((opt) => opt.exclusive);
  const hasExclusive = exclusiveIndex !== -1;

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

        <div className={checkboxesClass} data-module="govuk-checkboxes">
          {optionsWithIds.map((option, index) => {
            const itemHintId = option.hint
              ? `${option.id}-item-hint`
              : undefined;
            const conditionalId = option.conditionalContent
              ? `conditional-${option.id}`
              : undefined;
            const itemAriaDescribedBy = itemHintId || undefined;

            return (
              <div key={option.id}>
                {hasExclusive && index === exclusiveIndex && (
                  <div className="govuk-checkboxes__divider">or</div>
                )}

                <div className={`govuk-checkboxes__item`}>
                  <input
                    className="govuk-checkboxes__input"
                    id={option.id}
                    name={name}
                    type="checkbox"
                    value={option.value}
                    defaultChecked={defaultValue.includes(option.value)}
                    disabled={option.disabled}
                    aria-describedby={itemAriaDescribedBy}
                    data-behaviour={option.exclusive ? "exclusive" : undefined}
                    data-aria-controls={conditionalId}
                    onChange={(_e) => {
                      if (onChange) {
                        const checkboxes =
                          document.querySelectorAll<HTMLInputElement>(
                            `input[name="${name}"]:checked`
                          );
                        const values = Array.from(checkboxes).map(
                          (cb) => cb.value
                        );
                        onChange(values);
                      }
                    }}
                  />
                  <label
                    className={`govuk-label govuk-checkboxes__label ${labelClassName}`}
                    htmlFor={option.id}
                  >
                    {option.label}
                  </label>

                  {option.hint && (
                    <div
                      id={itemHintId}
                      className="govuk-hint govuk-checkboxes__hint"
                    >
                      {option.hint}
                    </div>
                  )}
                </div>

                {option.conditionalContent && (
                  <div
                    className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
                    id={conditionalId}
                  >
                    {option.conditionalContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
