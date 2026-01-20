import "govuk-frontend/dist/govuk/components/exit-this-page/_exit-this-page.scss";
import { useEffect } from "react";

export interface ExitThisPageProps {
  href?: string;
  text?: string;
  emergencyText?: string;
  variant?: "button" | "skipLink";
  className?: string;
}

export function ExitThisPage({
  href = "https://www.bbc.co.uk/weather",
  text = "Exit this page",
  emergencyText = "Emergency",
  variant = "button",
  className = "",
}: ExitThisPageProps) {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { ExitThisPage, createAll } = await import("govuk-frontend");
    createAll(ExitThisPage);
  };

  useEffect(() => {
    initialise();
  }, []);

  if (variant === "skipLink") {
    return (
      <a
        href={href}
        className={`govuk-skip-link govuk-js-exit-this-page-skiplink${
          className ? ` ${className}` : ""
        }`}
        rel="nofollow noreferrer"
        data-module="govuk-skip-link"
      >
        {text}
      </a>
    );
  }

  const wrapperClass = `govuk-exit-this-page${
    className ? ` ${className}` : ""
  }`;

  return (
    <div className={wrapperClass} data-module="govuk-exit-this-page">
      <a
        href={href}
        role="button"
        draggable={false}
        className="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button"
        data-module="govuk-button"
        rel="nofollow noreferrer"
      >
        <span className="govuk-visually-hidden">{emergencyText}</span> {text}
      </a>
    </div>
  );
}
