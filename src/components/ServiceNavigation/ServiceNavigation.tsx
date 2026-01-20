"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link } from "../Link/Link.js";

import "govuk-frontend/dist/govuk/components/service-navigation/_service-navigation.scss";

export interface ServiceNavigationItem {
  text: string;
  href: string;
  active?: boolean;
}

export interface ServiceNavigationProps {
  serviceName?: string | undefined;
  serviceUrl?: string;
  navigationItems?: ServiceNavigationItem[];
  navigationLabel?: string;
  toggleLabel?: string;
  ariaLabel?: string;
  className?: string;
  /** When true, renders child element for service name link with merged props */
  serviceNameAsChild?: boolean;
  /** Custom content for the service name link (used with serviceNameAsChild) */
  serviceNameChildren?: ReactNode;
  /** Custom render function for navigation links */
  renderNavLink?: (item: ServiceNavigationItem, className: string) => ReactNode;
}

export function ServiceNavigation({
  serviceName,
  serviceUrl,
  navigationItems = [],
  navigationLabel = "Menu",
  toggleLabel = "Menu",
  ariaLabel = "Service information",
  className = "",
  serviceNameAsChild = false,
  serviceNameChildren,
  renderNavLink,
}: ServiceNavigationProps) {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { ServiceNavigation, createAll } = await import("govuk-frontend");
    createAll(ServiceNavigation);
  };

  useEffect(() => {
    initialise();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hasServiceName = serviceName && serviceUrl;
  const hasNavigation = navigationItems.length > 0;

  const navigationClasses = `govuk-service-navigation${
    className ? ` ${className}` : ""
  }`;

  // Determine the appropriate semantic element
  const ContainerElement = hasServiceName ? "section" : "div";

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClassName = "govuk-service-navigation__link";

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
              <Link
                href={serviceUrl}
                className={linkClassName}
                asChild={serviceNameAsChild}
              >
                {serviceNameAsChild ? serviceNameChildren : serviceName}
              </Link>
            </span>
          )}

          {hasNavigation && (
            <nav
              aria-label={navigationLabel}
              className="govuk-service-navigation__wrapper"
            >
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
                      item.active
                        ? " govuk-service-navigation__item--active"
                        : ""
                    }`}
                  >
                    {renderNavLink ? (
                      renderNavLink(item, linkClassName)
                    ) : (
                      <Link
                        className={linkClassName}
                        href={item.href}
                        aria-current={item.active ? "true" : undefined}
                      >
                        {item.active ? (
                          <strong className="govuk-service-navigation__active-fallback">
                            {item.text}
                          </strong>
                        ) : (
                          item.text
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </ContainerElement>
  );
}
