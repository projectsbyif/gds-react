import type { Meta, StoryObj } from '@storybook/react'
import { SummaryList } from './SummaryList.js'
import { Tag } from '../Tag/Tag.js'

const meta: Meta<typeof SummaryList> = {
  title: 'GDS/SummaryList',
  component: SummaryList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'object',
      description: 'Array of summary list rows',
    },
    noBorder: {
      control: 'boolean',
      description: 'Remove borders from the list',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const personalDetails = [
  {
    key: 'Name',
    value: 'John Smith',
    actions: [
      {
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'name',
      },
    ],
  },
  {
    key: 'Date of birth',
    value: '15 March 1980',
    actions: [
      {
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'date of birth',
      },
    ],
  },
  {
    key: 'Address',
    value: (
      <>
        123 High Street
        <br />
        Manchester
        <br />
        M1 2AB
      </>
    ),
    actions: [
      {
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'address',
      },
    ],
  },
  {
    key: 'Contact number',
    value: '07700 900 123',
    actions: [
      {
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'contact number',
      },
    ],
  },
]

export const Default: Story = {
  args: {
    rows: personalDetails,
  },
}

export const WithoutActions: Story = {
  args: {
    rows: [
      { key: 'Name', value: 'John Smith' },
      { key: 'Date of birth', value: '15 March 1980' },
      { key: 'Email', value: 'john.smith@example.com' },
    ],
  },
}

export const NoBorder: Story = {
  args: {
    rows: [
      { key: 'Total', value: '156' },
      { key: 'Active', value: '89' },
      { key: 'Pending', value: '45' },
      { key: 'Closed', value: '22' },
    ],
    noBorder: true,
  },
}

export const Application: Story = {
  args: {
    rows: [
      {
        key: 'Application type',
        value: 'Legal aid application',
      },
      {
        key: 'Submitted',
        value: '15 March 2024',
      },
      {
        key: 'Status',
        value: <Tag colour="blue">Under review</Tag>,
      },
      {
        key: 'Reference number',
        value: 'LA-2024-001234',
      },
      {
        key: 'Supporting documents',
        value: '5 documents uploaded',
        actions: [
          {
            href: '#',
            text: 'View',
          },
          {
            href: '#',
            text: 'Add more',
          },
        ],
      },
    ],
  },
}

export const MixedContent: Story = {
  args: {
    rows: [
      {
        key: 'Court',
        value: (
          <>
            Manchester Crown Court
            <br />
            Court Room 3
          </>
        ),
      },
      {
        key: 'Judge',
        value: 'Hon. Mr Justice Williams',
      },
      {
        key: 'Legal representation',
        value: <Tag colour="green">Assigned</Tag>,
        actions: [
          {
            href: '#',
            text: 'View details',
          },
        ],
      },
      {
        key: 'Estimated duration',
        value: '2 hours',
      },
    ],
  },
}
