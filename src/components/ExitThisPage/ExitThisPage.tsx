'use client'

export interface ExitThisPageProps {
  href?: string
  text?: string
  emergencyText?: string
  className?: string
}

export function ExitThisPage({
  href = 'https://www.bbc.co.uk/weather',
  text = 'Exit this page',
  emergencyText = 'Emergency',
  className = '',
}: ExitThisPageProps) {
  const wrapperClass = `govuk-exit-this-page${className ? ` ${className}` : ''}`

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
  )
}
