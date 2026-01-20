import type { ReactNode } from 'react'

import 'govuk-frontend/dist/govuk/components/table/_table.scss'

export interface TableHeader {
  text: ReactNode
  format?: 'numeric'
  width?: 'full' | 'three-quarters' | 'two-thirds' | 'one-half' | 'one-third' | 'one-quarter'
  className?: string
}

export interface TableCell {
  text: ReactNode
  format?: 'numeric'
  className?: string
}

export interface TableRow {
  header?: TableCell
  cells: TableCell[]
}

export interface TableProps {
  caption?: ReactNode
  captionSize?: 's' | 'm' | 'l' | 'xl'
  headers: TableHeader[]
  rows: TableRow[]
  firstCellIsHeader?: boolean
  smallTextUntilTablet?: boolean
  className?: string
}

export function Table({
  caption,
  captionSize = 'm',
  headers,
  rows,
  firstCellIsHeader = false,
  smallTextUntilTablet = false,
  className = '',
}: TableProps) {
  const tableClass = `govuk-table${smallTextUntilTablet ? ' govuk-table--small-text-until-tablet' : ''}${className ? ` ${className}` : ''}`
  const captionClass = `govuk-table__caption govuk-table__caption--${captionSize}`

  return (
    <table className={tableClass}>
      {caption && <caption className={captionClass}>{caption}</caption>}

      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          {headers.map((header, index) => {
            const headerClasses = [
              'govuk-table__header',
              header.format === 'numeric' ? 'govuk-table__header--numeric' : '',
              header.width ? `govuk-!-width-${header.width}` : '',
              header.className || '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <th key={`header-${index}`} scope="col" className={headerClasses}>
                {header.text}
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody className="govuk-table__body">
        {rows.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`} className="govuk-table__row">
            {firstCellIsHeader && row.cells[0] && (
              <th
                scope="row"
                className={`govuk-table__header${row.cells[0].format === 'numeric' ? ' govuk-table__header--numeric' : ''}${row.cells[0].className ? ` ${row.cells[0].className}` : ''}`}
              >
                {row.cells[0].text}
              </th>
            )}

            {row.cells.slice(firstCellIsHeader ? 1 : 0).map((cell, cellIndex) => {
              const cellClasses = [
                'govuk-table__cell',
                cell.format === 'numeric' ? 'govuk-table__cell--numeric' : '',
                cell.className || '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <td key={`cell-${rowIndex}-${cellIndex}`} className={cellClasses}>
                  {cell.text}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
