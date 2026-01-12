import type { Meta, StoryObj } from '@storybook/react'
import { List } from './List.js'

const meta: Meta<typeof List> = {
  title: 'GDS/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['bullet', 'number', 'plain'],
      description: 'Type of list styling',
    },
    spaced: {
      control: 'boolean',
      description: 'Whether to add spacing between items',
    },
    items: {
      control: 'object',
      description: 'Array of list items (ReactNode)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicItems = ['Item 1', 'Item 2', 'Item 3']

const evidenceItems = [
  'Photographs of the damage',
  'Repair estimates or invoices',
  'Witness statements',
  'CCTV footage if available',
]

export const Plain: Story = {
  args: {
    type: 'plain',
    items: basicItems,
  },
}

export const Bullet: Story = {
  args: {
    type: 'bullet',
    items: basicItems,
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    items: [
      'Check your eligibility',
      'Gather your documents',
      'Fill in the application form',
      'Submit your application',
    ],
  },
}

export const Spaced: Story = {
  args: {
    type: 'bullet',
    spaced: true,
    items: [
      'This is the first item with more spacing',
      'This is the second item with more spacing',
      'This is the third item with more spacing',
    ],
  },
}
