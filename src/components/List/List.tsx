import type { ReactNode } from 'react'

export interface ListProps {
  type?: 'bullet' | 'number' | 'plain'
  spaced?: boolean
  items: ReactNode[]
  className?: string
}

export function List({ type = 'plain', spaced = false, items, className = '' }: ListProps) {
  // Build class names
  const typeClass =
    type === 'bullet' ? ' govuk-list--bullet' : type === 'number' ? ' govuk-list--number' : ''
  const spacedClass = spaced ? ' govuk-list--spaced' : ''
  const listClass = `govuk-list${typeClass}${spacedClass}${className ? ` ${className}` : ''}`

  // Use ol for numbered lists, ul for everything else
  const Tag = type === 'number' ? 'ol' : 'ul'

  return (
    <Tag className={listClass}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Tag>
  )
}
