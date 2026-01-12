'use client'

import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'default' | 'start' | 'secondary' | 'warning' | 'inverse'
  href?: string
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  preventDoubleClick?: boolean
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  variant = 'default',
  href,
  type = 'submit',
  disabled = false,
  preventDoubleClick = false,
  onClick,
  className = '',
}: ButtonProps) {
  // Build class names
  const variantClass = variant !== 'default' ? ` govuk-button--${variant}` : ''
  const buttonClasses = `govuk-button${variantClass}${className ? ` ${className}` : ''}`

  // Common props for both button and link
  const dataModule = 'govuk-button'
  const preventDoubleClickAttr = preventDoubleClick ? 'true' : undefined

  // Render start button icon
  const startIcon = variant === 'start' && (
    <svg
      className="govuk-button__start-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  )

  // Render as Link for start buttons with href
  if (href) {
    return (
      <a
        href={href}
        role="button"
        draggable={false}
        className={buttonClasses}
        data-module={dataModule}
        data-prevent-double-click={preventDoubleClickAttr}
        onClick={onClick}
      >
        {children}
        {startIcon}
      </a>
    )
  }

  // Render as button
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={buttonClasses}
      data-module={dataModule}
      data-prevent-double-click={preventDoubleClickAttr}
      onClick={onClick}
    >
      {children}
      {startIcon}
    </button>
  )
}
