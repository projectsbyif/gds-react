import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/phase-banner/_phase-banner.scss'

export interface PhaseBannerProps {
  tag: 'alpha' | 'beta' | string
  children: ReactNode
  className?: string
}

export function PhaseBanner({ tag, children, className = '' }: PhaseBannerProps) {
  const bannerClass = `govuk-phase-banner${className ? ` ${className}` : ''}`

  // Capitalize first letter of tag
  const tagText = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()

  return (
    <div className={bannerClass}>
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">{tagText}</strong>
        <span className="govuk-phase-banner__text">{children}</span>
      </p>
    </div>
  )
}
