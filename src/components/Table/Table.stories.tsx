import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table.js'
import { Tag } from '../Tag/Tag.js'
import { Link } from '../Link/Link.js'

const meta: Meta<typeof Table> = {
  title: 'GDS/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    caption: {
      control: 'text',
      description: 'Table caption',
    },
    captionSize: {
      control: 'radio',
      options: ['s', 'm', 'l', 'xl'],
      description: 'Size of the caption',
    },
    headers: {
      control: 'object',
      description: 'Array of table headers',
    },
    rows: {
      control: 'object',
      description: 'Array of table rows with cells',
    },
    firstCellIsHeader: {
      control: 'boolean',
      description: 'Whether first cell in each row is a header',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicHeaders = [
  { text: 'Month' },
  { text: 'Sales', format: 'numeric' as const },
  { text: 'Profit', format: 'numeric' as const },
]

const basicRows = [
  {
    cells: [
      { text: 'January' },
      { text: '£85', format: 'numeric' as const },
      { text: '£12', format: 'numeric' as const },
    ],
  },
  {
    cells: [
      { text: 'February' },
      { text: '£165', format: 'numeric' as const },
      { text: '£34', format: 'numeric' as const },
    ],
  },
  {
    cells: [
      { text: 'March' },
      { text: '£215', format: 'numeric' as const },
      { text: '£55', format: 'numeric' as const },
    ],
  },
]

export const Default: Story = {
  args: {
    caption: 'Sales data',
    headers: basicHeaders,
    rows: basicRows,
  },
}

export const WithoutCaption: Story = {
  args: {
    headers: basicHeaders,
    rows: basicRows,
  },
}

export const CasesList: Story = {
  args: {
    caption: 'Active cases',
    captionSize: 'l',
    headers: [
      { text: 'Case reference', width: 'one-quarter' },
      { text: 'Defendant', width: 'one-quarter' },
      { text: 'Offence', width: 'one-quarter' },
      { text: 'Status', width: 'one-quarter' },
    ],
    rows: [
      {
        cells: [
          { text: <Link href="/cases/2024-001234">2024/001234</Link> },
          { text: 'John Smith' },
          { text: 'Criminal damage' },
          { text: <Tag colour="green">Active</Tag> },
        ],
      },
      {
        cells: [
          { text: <Link href="/cases/2024-001235">2024/001235</Link> },
          { text: 'Jane Doe' },
          { text: 'Theft' },
          { text: <Tag colour="blue">In progress</Tag> },
        ],
      },
      {
        cells: [
          { text: <Link href="/cases/2024-001236">2024/001236</Link> },
          { text: 'Bob Wilson' },
          { text: 'Fraud' },
          { text: <Tag colour="red">Urgent</Tag> },
        ],
      },
    ],
  },
}