import type { Meta, StoryObj } from '@storybook/react'
import { ErrorSummary } from './ErrorSummary.js'

const meta: Meta<typeof ErrorSummary> = {
  title: 'GDS/ErrorSummary',
  component: ErrorSummary,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the error summary',
    },
    errors: {
      control: 'object',
      description: 'Array of error objects with target and message',
    },
    hideOnEmpty: {
      control: 'boolean',
      description: 'Whether to hide the summary when no errors',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    errors: [
      { target: '#full-name', message: 'Enter your full name' },
      { target: '#email', message: 'Enter a valid email address' },
    ],
  },
}

export const SingleError: Story = {
  args: {
    errors: [{ target: '#password', message: 'Password must be at least 8 characters' }],
  },
}
