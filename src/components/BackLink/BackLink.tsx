import type { ReactNode } from 'react'
import { Link } from '../Link/Link.js'

import 'govuk-frontend/dist/govuk/components/back-link/_back-link.scss'

export interface BackLinkProps {
  href?: string
  children?: ReactNode
  inverse?: boolean
  onClick?: () => void
  className?: string
  /** When true, renders child element with merged props instead of an anchor */
  asChild?: boolean
}

export function BackLink({
  href,
  children = 'Back',
  inverse = false,
  onClick = () => {},
  className = '',
  asChild = false,
}: BackLinkProps) {
  const inverseClass = inverse ? ' govuk-back-link--inverse' : ''
  const linkClass = `govuk-back-link${inverseClass}${className ? ` ${className}` : ''}`

  // If href is provided, use it
  if (href) {
    return (
      <Link href={href} className={linkClass} onClick={onClick} asChild={asChild}>
        {children}
      </Link>
    )
  }

  // Otherwise render as Link with onClick handler
  return (
    <Link
      href="#"
      className={linkClass}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
      asChild={asChild}
    >
      {children}
    </Link>
  )
}
