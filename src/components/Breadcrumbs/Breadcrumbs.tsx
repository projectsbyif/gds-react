'use client'

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
}

export function Breadcrumbs({
  items,
  collapseOnMobile = false,
  inverse = false,
  ariaLabel = 'Breadcrumb',
  className = '',
}: BreadcrumbsProps) {
  const collapseClass = collapseOnMobile ? ' govuk-breadcrumbs--collapse-on-mobile' : ''
  const inverseClass = inverse ? ' govuk-breadcrumbs--inverse' : ''
  const breadcrumbsClass = `govuk-breadcrumbs${collapseClass}${inverseClass}${className ? ` ${className}` : ''}`

  return (
    <nav className={breadcrumbsClass} aria-label={ariaLabel}>
      <ol className="govuk-breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="govuk-breadcrumbs__list-item">
            <a href={item.href} className="govuk-breadcrumbs__link">
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
