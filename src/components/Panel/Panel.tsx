'use client'

import type { ReactNode } from 'react'

export interface PanelProps {
  title: ReactNode
  children?: ReactNode
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export function Panel({ title, children, headingLevel = 'h1', className = '' }: PanelProps) {
  const panelClasses = `govuk-panel govuk-panel--confirmation${className ? ` ${className}` : ''}`

  const HeadingTag = headingLevel

  return (
    <div className={panelClasses}>
      <HeadingTag className="govuk-panel__title">{title}</HeadingTag>
      {children && <div className="govuk-panel__body">{children}</div>}
    </div>
  )
}
