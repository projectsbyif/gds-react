import type { ReactNode, HTMLAttributes } from 'react'

import '../../styles/objects.scss'

export type ColumnWidth =
  | 'full'
  | 'one-half'
  | 'one-third'
  | 'two-thirds'
  | 'one-quarter'
  | 'three-quarters'

export type ColumnWidthFromDesktop =
  | 'one-half-from-desktop'
  | 'one-third-from-desktop'
  | 'two-thirds-from-desktop'
  | 'one-quarter-from-desktop'
  | 'three-quarters-from-desktop'

export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function GridRow({ children, className = '', ...props }: GridRowProps) {
  return (
    <div className={`govuk-grid-row${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  )
}

export interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
  width?: ColumnWidth
  widthFromDesktop?: ColumnWidthFromDesktop
  children?: ReactNode
  className?: string
}

export function GridColumn({
  width = 'full',
  widthFromDesktop,
  children,
  className = '',
  ...props
}: GridColumnProps) {
  const baseClass = `govuk-grid-column-${width}`
  const desktopClass = widthFromDesktop ? ` govuk-grid-column-${widthFromDesktop}` : ''
  const customClass = className ? ` ${className}` : ''

  return (
    <div className={`${baseClass}${desktopClass}${customClass}`} {...props}>
      {children}
    </div>
  )
}

export interface WidthContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function WidthContainer({ children, className = '', ...props }: WidthContainerProps) {
  return (
    <div className={`govuk-width-container${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  )
}

export interface MainWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  autoSpacing?: boolean
  largeSpacing?: boolean
  id?: string
}

export function MainWrapper({
  children,
  className = '',
  autoSpacing,
  largeSpacing,
  id = 'main-content',
  ...props
}: MainWrapperProps) {
  const baseClass = 'govuk-main-wrapper'
  const autoClass = autoSpacing ? ' govuk-main-wrapper--auto-spacing' : ''
  const largeClass = largeSpacing ? ' govuk-main-wrapper--l' : ''
  const customClass = className ? ` ${className}` : ''

  return (
    <main className={`${baseClass}${autoClass}${largeClass}${customClass}`} id={id} {...props}>
      {children}
    </main>
  )
}
