import type { ReactNode } from 'react'

import '../../styles/objects.scss'

export interface ButtonGroupProps {
  children: ReactNode
  className?: string
}

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  const groupClass = `govuk-button-group${className ? ` ${className}` : ''}`

  return <div className={groupClass}>{children}</div>
}
