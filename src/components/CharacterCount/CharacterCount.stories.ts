import type { Meta, StoryObj } from '@storybook/react'
import { CharacterCount } from './CharacterCount.js'

const meta: Meta<typeof CharacterCount> = {
  title: 'GDS/CharacterCount',
  component: CharacterCount,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the textarea',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the textarea',
    },
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    labelAsHeading: {
      control: 'boolean',
      description: 'Whether label should be rendered as a heading',
    },
    labelSize: {
      control: 'radio',
      options: ['l', 'm', 's'],
      description: 'Size of the label text',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    maxWords: {
      control: 'number',
      description: 'Maximum number of words allowed',
    },
    threshold: {
      control: 'number',
      description: 'Threshold percentage when to show count (0-100)',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when text changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: (value: string) => console.log('Text changed:', value),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'more-detail',
    name: 'more-detail',
    label: 'Can you provide more detail?',
    hint: 'Do not include personal or financial information like your National Insurance number or credit card details.',
    maxLength: 200,
  },
}

export const WithWordCount: Story = {
  args: {
    id: 'word-count',
    name: 'word-count',
    label: 'Describe what happened',
    hint: 'Give a brief summary of the incident',
    maxWords: 150,
    rows: 8,
  },
}

export const WithThreshold: Story = {
  args: {
    id: 'feedback',
    name: 'feedback',
    label: 'Give us your feedback',
    hint: 'Tell us what you think about our service',
    maxLength: 500,
    threshold: 75,
    rows: 6,
  },
}

export const WithError: Story = {
  args: {
    id: 'error-example',
    name: 'statement',
    label: 'Your statement',
    error: 'Statement must be 10 characters or more',
    maxLength: 1000,
    defaultValue: 'Too short',
  },
}

export const LargeTextArea: Story = {
  args: {
    id: 'evidence-description',
    name: 'evidence',
    label: 'Describe the evidence',
    labelAsHeading: true,
    hint: 'Include details about what you saw, heard, and when it happened',
    maxLength: 2000,
    rows: 10,
    threshold: 50,
  },
}