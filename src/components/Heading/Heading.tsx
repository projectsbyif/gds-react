import type { ReactNode, JSX } from 'react'

import '../../styles/core.scss'

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'xl' | 'l' | 'm' | 's'
  caption?: string
  captionInside?: boolean
  children: ReactNode
  className?: string
}

export function Heading({
  level,
  size,
  caption,
  captionInside = false,
  children,
  className = '',
}: HeadingProps) {
  // Default size based on heading level if not specified
  const defaultSize = size || (level === 1 ? 'xl' : level === 2 ? 'l' : level === 3 ? 'm' : 's')

  const headingClass = `govuk-heading-${defaultSize}${className ? ` ${className}` : ''}`
  const captionClass = `govuk-caption-${defaultSize}`

  // Create the heading element
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  // Render caption inside heading
  if (caption && captionInside) {
    return (
      <Tag className={headingClass}>
        <span className={captionClass}>{caption}</span>
        {children}
      </Tag>
    )
  }

  // Render caption before heading
  if (caption) {
    return (
      <>
        <span className={captionClass}>{caption}</span>
        <Tag className={headingClass}>{children}</Tag>
      </>
    )
  }

  // Render heading without caption
  return <Tag className={headingClass}>{children}</Tag>
}
