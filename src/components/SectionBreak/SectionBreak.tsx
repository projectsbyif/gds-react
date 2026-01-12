export interface SectionBreakProps {
  size?: 'xl' | 'l' | 'm' | 'default'
  visible?: boolean
  className?: string
}

export function SectionBreak({
  size = 'default',
  visible = false,
  className = '',
}: SectionBreakProps) {
  const sizeClass = size !== 'default' ? ` govuk-section-break--${size}` : ''
  const visibleClass = visible ? ' govuk-section-break--visible' : ''
  const breakClass = `govuk-section-break${sizeClass}${visibleClass}${className ? ` ${className}` : ''}`

  return <hr className={breakClass} />
}
