'use client'

import type { ReactNode } from 'react'

export interface BackLinkProps {
  href?: string
  children?: ReactNode
  inverse?: boolean
  onClick?: () => void
  className?: string
}

export function BackLink({
  href,
  children = 'Back',
  inverse = false,
  onClick,
  className = '',
}: BackLinkProps) {
  const inverseClass = inverse ? ' govuk-back-link--inverse' : ''
  const linkClass = `govuk-back-link${inverseClass}${className ? ` ${className}` : ''}`

  // If href is provided, use Next.js Link
  if (href) {
    return (
      <a href={href} className={linkClass} onClick={onClick}>
        {children}
      </a>
    )
  }

  // Otherwise render as anchor with onClick handler
  return (
    <a
      href="#"
      className={linkClass}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}
