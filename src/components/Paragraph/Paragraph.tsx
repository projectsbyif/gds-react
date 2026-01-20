import type { ReactNode } from 'react'

import '../../styles/core.scss'

export interface ParagraphProps {
  size?: 'l' | 'm' | 's'
  children: ReactNode
  className?: string
}

export function Paragraph({ size = 'm', children, className = '' }: ParagraphProps) {
  // Map size to GOV.UK classes: l = body-l (lead), m = body (default), s = body-s (small)
  const sizeClass = size === 'l' ? 'govuk-body-l' : size === 's' ? 'govuk-body-s' : 'govuk-body'
  const paragraphClass = `${sizeClass}${className ? ` ${className}` : ''}`

  return <p className={paragraphClass}>{children}</p>
}
