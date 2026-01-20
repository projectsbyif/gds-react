import type { ReactNode, JSX } from 'react'
import { Link } from '../Link/Link.js'

import 'govuk-frontend/dist/govuk/components/cookie-banner/_cookie-banner.scss'

export interface CookieBannerAction {
  text: string
  type: 'button' | 'link'
  href?: string
  onClick?: () => void
  name?: string
  value?: string
  buttonType?: 'submit' | 'button'
}

export interface CookieBannerMessage {
  heading?: string
  headingLevel?: 2 | 3 | 4 | 5 | 6
  content: ReactNode
  actions?: CookieBannerAction[]
  hidden?: boolean
  role?: 'alert' | 'region'
}

export interface CookieBannerProps {
  serviceName: string
  messages: CookieBannerMessage[]
  ariaLabel?: string | undefined
  className?: string
  /** Custom render function for action links */
  renderActionLink?: (action: CookieBannerAction, className: string) => ReactNode
}

export function CookieBanner({
  serviceName,
  messages,
  ariaLabel,
  className = '',
  renderActionLink,
}: CookieBannerProps) {
  const label = ariaLabel || `Cookies on ${serviceName}`
  const bannerClass = `govuk-cookie-banner${className ? ` ${className}` : ''}`

  const linkClassName = 'govuk-link'

  return (
    <div className={bannerClass} data-nosnippet role="region" aria-label={label}>
      {messages.map((message, index) => {
        const HeadingTag = message.headingLevel
          ? (`h${message.headingLevel}` as keyof JSX.IntrinsicElements)
          : 'h2'

        return (
          <div
            key={index}
            className="govuk-cookie-banner__message govuk-width-container"
            hidden={message.hidden}
            role={message.role}
          >
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                {message.heading && (
                  <HeadingTag className="govuk-cookie-banner__heading govuk-heading-m">
                    {message.heading}
                  </HeadingTag>
                )}
                <div className="govuk-cookie-banner__content">
                  <p className="govuk-body">{message.content}</p>
                </div>
              </div>
            </div>

            {message.actions && message.actions.length > 0 && (
              <div className="govuk-button-group">
                {message.actions.map((action, actionIndex) => {
                  if (action.type === 'link') {
                    return renderActionLink ? (
                      <span key={actionIndex}>{renderActionLink(action, linkClassName)}</span>
                    ) : (
                      <Link key={actionIndex} className={linkClassName} href={action.href || '#'}>
                        {action.text}
                      </Link>
                    )
                  }

                  // Render button
                  return (
                    <button
                      key={actionIndex}
                      type={action.buttonType || 'button'}
                      className="govuk-button"
                      data-module="govuk-button"
                      name={action.name}
                      value={action.value}
                      onClick={action.onClick}
                    >
                      {action.text}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
