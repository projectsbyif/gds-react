import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/tag/_tag.scss'

export type TagColour =
  | 'grey'
  | 'green'
  | 'turquoise'
  | 'blue'
  | 'light-blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'

export interface TagProps {
  children: ReactNode
  colour?: TagColour | undefined
  className?: string
}

export function Tag({ children, colour = 'blue', className = '' }: TagProps) {
  const colourClass = colour ? ` govuk-tag--${colour}` : ''
  const tagClass = `govuk-tag${colourClass}${className ? ` ${className}` : ''}`

  return <strong className={tagClass}>{children}</strong>
}
