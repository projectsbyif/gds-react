import { type Pagination } from './types.js';

interface GdsPaginationProps {
  pagination: Pagination
  onPageChange: (page: number) => void
  ariaLabel: string
  useSmallLayout?: boolean // For forcing mobile/desktop layout in testing
}

export const GdsPagination = ({
  pagination,
  onPageChange,
  ariaLabel,
  useSmallLayout,
}: GdsPaginationProps) => {
  if (!pagination) {
    return null
  }
  const { page: currentPage, totalPages, hasPreviousPage, hasNextPage } = pagination

  // Calculate which page numbers to show based on current page and total pages
  const getPageNumbers = (isSmallScreen: boolean): (number | 'ellipsis')[] => {
    if (totalPages <= 1) return []

    // For very small page counts, show all pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const pages: (number | 'ellipsis')[] = []

    if (isSmallScreen) {
      // Small screen: current, prev, next, first, last
      pages.push(1)

      if (currentPage > 3) {
        pages.push('ellipsis')
      }

      if (currentPage > 2 && currentPage < totalPages) {
        pages.push(currentPage - 1)
      }

      if (currentPage !== 1 && currentPage !== totalPages) {
        pages.push(currentPage)
      }

      if (currentPage < totalPages - 1 && currentPage >= 1) {
        pages.push(currentPage + 1)
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis')
      }

      if (totalPages > 1) {
        pages.push(totalPages)
      }
    } else {
      // Large screen: current, at least one before/after, first, last
      pages.push(1)

      if (currentPage > 3) {
        pages.push('ellipsis')
      }

      // Show pages around current
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis')
      }

      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    // Remove duplicates while preserving ellipsis
    const uniquePages: (number | 'ellipsis')[] = []
    let lastItem: number | 'ellipsis' | null = null

    for (const item of pages) {
      if (item === 'ellipsis' && lastItem === 'ellipsis') continue
      if (typeof item === 'number' && item === lastItem) continue
      uniquePages.push(item)
      lastItem = item
    }

    return uniquePages
  }

  const handlePageClick = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    onPageChange(page)
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault()
    if (hasPreviousPage) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    if (hasNextPage) {
      onPageChange(currentPage + 1)
    }
  }

  // Determine layout - in real app, use media query hook
  const isSmallScreen = useSmallLayout ?? false
  const pageNumbers = getPageNumbers(isSmallScreen)

  if (totalPages <= 1) {
    return null
  }

  return (
    <nav className="govuk-pagination" aria-label={ariaLabel}>
      {hasPreviousPage && (
        <div className="govuk-pagination__prev">
          <a
            className="govuk-link govuk-pagination__link"
            href="javascript:void(0);"
            rel="prev"
            onClick={handlePrevious}
          >
            <svg
              className="govuk-pagination__icon govuk-pagination__icon--prev"
              xmlns="http://www.w3.org/2000/svg"
              height="13"
              width="15"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 15 13"
            >
              <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
            </svg>
            <span className="govuk-pagination__link-title">
              Previous<span className="govuk-visually-hidden"> page</span>
            </span>
          </a>
        </div>
      )}

      <ul className="govuk-pagination__list">
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === 'ellipsis') {
            return (
              <li
                key={`ellipsis-${index}`}
                className="govuk-pagination__item govuk-pagination__item--ellipsis"
              >
                &#x2026;
              </li>
            )
          }

          const isCurrent = pageNum === currentPage

          return (
            <li
              key={pageNum}
              className={`govuk-pagination__item ${
                isCurrent ? 'govuk-pagination__item--current' : ''
              }`}
            >
              <a
                className="govuk-link govuk-pagination__link"
                href="javascript:void(0);"
                aria-label={`Page ${pageNum}`}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={handlePageClick(pageNum)}
              >
                {pageNum}
              </a>
            </li>
          )
        })}
      </ul>

      {hasNextPage && (
        <div className="govuk-pagination__next">
          <a
            className="govuk-link govuk-pagination__link"
            href="javascript:void(0);"
            rel="next"
            onClick={handleNext}
          >
            <span className="govuk-pagination__link-title">
              Next<span className="govuk-visually-hidden"> page</span>
            </span>
            <svg
              className="govuk-pagination__icon govuk-pagination__icon--next"
              xmlns="http://www.w3.org/2000/svg"
              height="13"
              width="15"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 15 13"
            >
              <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
            </svg>
          </a>
        </div>
      )}
    </nav>
  )
}
