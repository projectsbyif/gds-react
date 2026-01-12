import type { Meta, StoryObj } from '@storybook/react'
import { GdsPagination } from './Pagination.js'
import type { Pagination } from './types.js'

const meta: Meta<typeof GdsPagination> = {
  title: 'GDS/Pagination',
  component: GdsPagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    pagination: {
      control: 'object',
      description: 'Pagination object with current page and total pages',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback when page is changed',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for pagination navigation',
    },
    useSmallLayout: {
      control: 'boolean',
      description: 'Force small/mobile layout for testing',
    },
  },
  args: {
    onPageChange: (page: number) => console.log('Page changed to:', page),
    ariaLabel: 'Search results pages',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const createPagination = (page: number, totalPages: number): Pagination => ({
  page,
  totalPages,
  pageSize: 10,
  totalItems: totalPages * 10,
  hasPreviousPage: page > 1,
  hasNextPage: page < totalPages,
})

export const FirstPage: Story = {
  args: {
    pagination: createPagination(1, 10),
  },
}

export const MiddlePage: Story = {
  args: {
    pagination: createPagination(5, 10),
  },
}

export const LastPage: Story = {
  args: {
    pagination: createPagination(10, 10),
  },
}

export const FewPages: Story = {
  args: {
    pagination: createPagination(2, 3),
  },
}

export const ManyPages: Story = {
  args: {
    pagination: createPagination(15, 50),
  },
}

export const SinglePage: Story = {
  args: {
    pagination: createPagination(1, 1),
  },
}

export const SearchResults: Story = {
  args: {
    pagination: createPagination(3, 25),
    ariaLabel: 'Legal guidance search results',
  },
}

export const CaseList: Story = {
  args: {
    pagination: createPagination(7, 15),
    ariaLabel: 'Case list pages',
  },
}

export const SmallLayout: Story = {
  args: {
    pagination: createPagination(5, 20),
    useSmallLayout: true,
  },
}

export const NearEnd: Story = {
  args: {
    pagination: createPagination(48, 50),
  },
}
