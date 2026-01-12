'use client'

import { useState } from 'react'

export interface ServiceNavigationItem {
  text: string
  href: string
  active?: boolean
}

export interface ServiceNavigationProps {
  serviceName?: string
  serviceUrl?: string
  navigationItems?: ServiceNavigationItem[]
  navigationLabel?: string
  toggleLabel?: string
  ariaLabel?: string
  className?: string
}

export function ServiceNavigation({
  serviceName,
  serviceUrl,
  navigationItems = [],
  navigationLabel = 'Menu',
  toggleLabel = 'Menu',
  ariaLabel = 'Service information',
  className = '',
}: ServiceNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hasServiceName = serviceName && serviceUrl
  const hasNavigation = navigationItems.length > 0

  const navigationClasses = `govuk-service-navigation${className ? ` ${className}` : ''}`

  // Determine the appropriate semantic element
  const ContainerElement = hasServiceName ? 'section' : 'div'

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ContainerElement
      aria-label={hasServiceName ? ariaLabel : undefined}
      className={navigationClasses}
      data-module="govuk-service-navigation"
    >
      <div className="govuk-width-container">
        <div className="govuk-service-navigation__container">
          {hasServiceName && (
            <span className="govuk-service-navigation__service-name">
              <a href={serviceUrl} className="govuk-service-navigation__link">
                {serviceName}
              </a>
            </span>
          )}

          {hasNavigation && (
            <nav aria-label={navigationLabel} className="govuk-service-navigation__wrapper">
              <button
                type="button"
                className="govuk-service-navigation__toggle govuk-js-service-navigation-toggle"
                aria-controls="navigation"
                aria-expanded={isMenuOpen}
                hidden={!isMenuOpen}
                onClick={handleToggle}
              >
                {toggleLabel}
              </button>
              <ul
                className="govuk-service-navigation__list"
                id="navigation"
                style={isMenuOpen ? {} : undefined}
              >
                {navigationItems.map((item, index) => (
                  <li
                    key={`nav-item-${index}`}
                    className={`govuk-service-navigation__item${
                      item.active ? ' govuk-service-navigation__item--active' : ''
                    }`}
                  >
                    <a
                      className="govuk-service-navigation__link"
                      href={item.href}
                      aria-current={item.active ? 'true' : undefined}
                    >
                      {item.active ? (
                        <strong className="govuk-service-navigation__active-fallback">
                          {item.text}
                        </strong>
                      ) : (
                        item.text
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </ContainerElement>
  )
}
