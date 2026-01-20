import type { ReactNode } from 'react'
import { Link } from "../Link/Link.js"

import 'govuk-frontend/dist/govuk/components/breadcrumbs/_breadcrumbs.scss'

export interface BreadcrumbItem {
  text: string
  href: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  collapseOnMobile?: boolean
  inverse?: boolean
  ariaLabel?: string
  className?: string
  /** Custom render function for links */
  renderLink?: (item: BreadcrumbItem, className: string) => ReactNode
}

export function Breadcrumbs({
  items,
  collapseOnMobile = false,
  inverse = false,
  ariaLabel = 'Breadcrumb',
  className = '',
  renderLink,
}: BreadcrumbsProps) {
  const collapseClass = collapseOnMobile ? ' govuk-breadcrumbs--collapse-on-mobile' : ''
  const inverseClass = inverse ? ' govuk-breadcrumbs--inverse' : ''
  const breadcrumbsClass = `govuk-breadcrumbs${collapseClass}${inverseClass}${className ? ` ${className}` : ''}`

  const linkClassName = 'govuk-breadcrumbs__link'

  return (
    <nav className={breadcrumbsClass} aria-label={ariaLabel}>
      <ol className="govuk-breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="govuk-breadcrumbs__list-item">
            {renderLink ? (
              renderLink(item, linkClassName)
            ) : (
              <Link href={item.href} className={linkClassName}>
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
