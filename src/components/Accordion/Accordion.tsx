'use client'

import type { ReactNode, JSX } from 'react'

export interface AccordionSection {
  heading: string
  summary?: string
  content: ReactNode
  expanded?: boolean
}

export interface AccordionProps {
  id: string
  sections: AccordionSection[]
  headingLevel?: 2 | 3 | 4 | 5 | 6
  rememberExpanded?: boolean
  className?: string
}

export function Accordion({
  id,
  sections,
  headingLevel = 2,
  rememberExpanded = true,
  className = '',
}: AccordionProps) {
  const accordionClass = `govuk-accordion${className ? ` ${className}` : ''}`
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements

  // Data attribute to control remember expanded behavior
  const dataAttributes = {
    'data-module': 'govuk-accordion',
    ...(rememberExpanded === false && { 'data-remember-expanded': 'false' }),
  }

  return (
    <div className={accordionClass} id={id} {...dataAttributes}>
      {sections.map((section, index) => {
        const sectionNumber = index + 1
        const headingId = `${id}-heading-${sectionNumber}`
        const contentId = `${id}-content-${sectionNumber}`
        const summaryId = section.summary ? `${id}-summary-${sectionNumber}` : undefined

        const sectionClass = `govuk-accordion__section${section.expanded ? ' govuk-accordion__section--expanded' : ''}`

        return (
          <div key={index} className={sectionClass}>
            <div className="govuk-accordion__section-header">
              <HeadingTag className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button" id={headingId}>
                  {section.heading}
                </span>
              </HeadingTag>
              {section.summary && (
                <div className="govuk-accordion__section-summary govuk-body" id={summaryId}>
                  {section.summary}
                </div>
              )}
            </div>
            <div id={contentId} className="govuk-accordion__section-content">
              {section.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
