'use client'

import { type ReactNode, useEffect, useState } from 'react'

export interface Tab {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  title?: string
  tabs: Tab[]
  defaultTabId?: string
  className?: string
}

export function Tabs({ title = 'Contents', tabs, defaultTabId, className = '' }: TabsProps) {
  const [selectedTabId, setSelectedTabId] = useState<string>(defaultTabId || tabs[0]?.id || '')

  // Update selected tab based on URL hash on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove the #
      if (hash && tabs.some((tab) => tab.id === hash)) {
        setSelectedTabId(hash)
      }
    }

    // Check hash on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [tabs])

  const handleTabClick = (tabId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setSelectedTabId(tabId)

    // Update URL hash
    window.history.pushState(null, '', `#${tabId}`)
  }

  const tabsClass = `govuk-tabs${className ? ` ${className}` : ''}`

  return (
    <div className={tabsClass} data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">{title}</h2>

      <ul className="govuk-tabs__list" role="tablist">
        {tabs.map((tab) => {
          const isSelected = tab.id === selectedTabId

          return (
            <li
              key={tab.id}
              className={`govuk-tabs__list-item${isSelected ? ' govuk-tabs__list-item--selected' : ''}`}
              role="presentation"
            >
              <a
                className="govuk-tabs__tab"
                href={`#${tab.id}`}
                role="tab"
                aria-controls={tab.id}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={(e) => handleTabClick(tab.id, e)}
              >
                {tab.label}
              </a>
            </li>
          )
        })}
      </ul>

      {tabs.map((tab) => {
        const isSelected = tab.id === selectedTabId

        return (
          <div
            key={`panel-${tab.id}`}
            className={`govuk-tabs__panel${!isSelected ? ' govuk-tabs__panel--hidden' : ''}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`tab_${tab.id}`}
          >
            {tab.content}
          </div>
        )
      })}
    </div>
  )
}
