import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/panel/_panel.scss'


export interface PanelProps {
  title: ReactNode
  children?: ReactNode
  className?: string
}

export function Panel({ title, children, className = '' }: PanelProps) {
  const panelClasses = `govuk-panel govuk-panel--confirmation${className ? ` ${className}` : ''}`
  
  return (
    <div className={panelClasses}>
      <h1 className="govuk-panel__title">{title}</h1>
      {children && <div className="govuk-panel__body">{children}</div>}
    </div>
  )
}
