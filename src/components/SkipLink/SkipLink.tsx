'use client'

import type { ReactNode } from 'react'

export interface SkipLinkProps {
  href?: string
  children?: ReactNode
  className?: string
}

export function SkipLink({
  href = '#main-content',
  children = 'Skip to main content',
  className = '',
}: SkipLinkProps) {
  const skipLinkClass = `govuk-skip-link${className ? ` ${className}` : ''}`

  return (
    <a href={href} className={skipLinkClass} data-module="govuk-skip-link">
      {children}
    </a>
  )
}
