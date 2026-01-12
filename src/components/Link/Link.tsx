'use client'

import type { ReactNode } from 'react'

export interface LinkProps {
  href: string
  children: ReactNode
  noVisitedState?: boolean
  inverse?: boolean
  noUnderline?: boolean
  opensInNewTab?: boolean
  external?: boolean
  hreflang?: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function Link({
  href,
  children,
  noVisitedState = false,
  inverse = false,
  noUnderline = false,
  opensInNewTab = false,
  external = false,
  hreflang,
  className = '',
  onClick = undefined,
}: LinkProps) {
  // External links should open in new tab
  const shouldOpenInNewTab = opensInNewTab || external

  // Build class names
  const noVisitedClass = noVisitedState ? ' govuk-link--no-visited-state' : ''
  const inverseClass = inverse ? ' govuk-link--inverse' : ''
  const noUnderlineClass = noUnderline ? ' govuk-link--no-underline' : ''
  const linkClass = `govuk-link${noVisitedClass}${inverseClass}${noUnderlineClass}${className ? ` ${className}` : ''}`

  // Props for new tab links
  const newTabProps = shouldOpenInNewTab
    ? {
        target: '_blank',
        rel: 'noreferrer noopener',
      }
    : {}

  const hreflangProp = hreflang ? { hrefLang: hreflang } : {}

  const onClickProp = onClick
    ? {
        onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
          onClick(event)
          event.preventDefault()
        },
      }
    : {}

  return (
    <a href={href} className={linkClass} {...newTabProps} {...hreflangProp} {...onClickProp}>
      {children}
      {shouldOpenInNewTab && <span className="govuk-visually-hidden"> (opens in new tab)</span>}
    </a>
  )
}
