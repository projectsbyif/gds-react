import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Link } from "../Link/Link.js";

import "govuk-frontend/dist/govuk/components/error-summary/_error-summary.scss";

export interface ErrorSummaryError {
  target: string;
  message: string;
}

export interface ErrorSummaryProps {
  title?: string;
  errors: ErrorSummaryError[];
  hideOnEmpty?: boolean;
  /** Custom render function for error links */
  renderLink?: (error: ErrorSummaryError, className: string) => ReactNode;
}

export const ErrorSummary = ({
  errors,
  title = "There is a problem",
  hideOnEmpty = true,
  renderLink,
}: ErrorSummaryProps) => {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { ErrorSummary, createAll } = await import("govuk-frontend");
    createAll(ErrorSummary);
  };

  useEffect(() => {
    initialise();
  }, []);

  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check each error target exists in the DOM
    errors.forEach(({ target }) => {
      const element = document.getElementById(target);
      if (!element) {
        console.warn(
          `ErrorSummary: Target element with id "${target}" not found in the DOM`
        );
      }
    });

    // Focus the error summary when errors are present
    if (errors.length > 0 && summaryRef.current) {
      summaryRef.current.focus();
    }
  }, [errors]);

  if (hideOnEmpty && !errors.length) return null;

  const linkClassName = "govuk-link";

  return (
    <div
      className="govuk-error-summary"
      data-module="govuk-error-summary"
      tabIndex={-1}
      ref={summaryRef}
    >
      <div role="alert">
        <h2 className="govuk-error-summary__title">{title}</h2>
        <div className="govuk-error-summary__body">
          <ul className="govuk-list govuk-error-summary__list">
            {errors.map((error) => {
              return (
                <li key={`error-list-item-${error.target}`}>
                  {renderLink ? (
                    renderLink(error, linkClassName)
                  ) : (
                    <Link href={`#${error.target}`}>{error.message}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
