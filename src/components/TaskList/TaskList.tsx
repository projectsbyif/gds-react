import { Tag, type TagColour } from '../Tag/Tag.js'

import 'govuk-frontend/dist/govuk/components/task-list/_task-list.scss'

export interface TaskListStatus {
  text: string
  colour?: TagColour
}

export interface TaskListItem {
  title: string
  href: string
  hint?: string
  status: TaskListStatus | string
  id?: string
}

export interface TaskListProps {
  items: TaskListItem[]
  className?: string
}

export function TaskList({ items, className = '' }: TaskListProps) {
  const listClass = `govuk-task-list${className ? ` ${className}` : ''}`

  return (
    <ul className={listClass}>
      {items.map((item, index) => {
        const itemId = item.id || `task-list-${index}`
        const statusId = `${itemId}-status`
        const hintId = item.hint ? `${itemId}-hint` : undefined

        // Build aria-describedby
        const ariaDescribedBy = [hintId, statusId].filter(Boolean).join(' ')

        // Determine if status is a tag or plain text
        const isStatusTag = typeof item.status === 'object'
        const statusText = typeof item.status === 'string' ? item.status : item.status.text
        const statusColour = typeof item.status === 'object' ? item.status.colour : undefined

        return (
          <li key={itemId} className="govuk-task-list__item govuk-task-list__item--with-link">
            <div className="govuk-task-list__name-and-hint">
              <a
                className="govuk-link govuk-task-list__link"
                href={item.href}
                aria-describedby={ariaDescribedBy}
              >
                {item.title}
              </a>
              {item.hint && (
                <div id={hintId} className="govuk-task-list__hint">
                  {item.hint}
                </div>
              )}
            </div>
            <div className="govuk-task-list__status" id={statusId}>
              {isStatusTag ? <Tag colour={statusColour}>{statusText}</Tag> : statusText}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export interface TaskListGroupProps {
  heading?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  items: TaskListItem[]
  className?: string
}

export function TaskListGroup({
  heading,
  headingLevel = 'h2',
  items,
  className = '',
}: TaskListGroupProps) {
  const HeadingTag = headingLevel

  return (
    <div className={className}>
      {heading && <HeadingTag className="govuk-heading-m">{heading}</HeadingTag>}
      <TaskList items={items} />
    </div>
  )
}
