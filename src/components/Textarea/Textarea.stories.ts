import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea.js'

const meta: Meta<typeof Textarea> = {
  title: 'GDS/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the textarea',
    },
    name: {
      control: 'text',
      description: 'Form field name',
    },
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    labelAsHeading: {
      control: 'boolean',
      description: 'Render label as a heading',
    },
    labelSize: {
      control: 'radio',
      options: ['l', 'm', 's'],
      description: 'Label size (when used as heading)',
    },
    hint: {
      control: 'text',
      description: 'Helper text for the textarea',
    },
    error: {
      control: 'text',
      description: 'Error message text',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
      min: 1,
      max: 20,
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default uncontrolled value',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    spellcheck: {
      control: 'boolean',
      description: 'Enable spell checking',
    },
    autocomplete: {
      control: 'text',
      description: 'Autocomplete attribute value',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: (value: string) => console.log('Textarea changed:', value),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'more-detail',
    name: 'more-detail',
    label: 'Can you provide more detail?',
    rows: 5,
  },
}

export const WithHint: Story = {
  args: {
    id: 'more-detail-hint',
    name: 'more-detail',
    label: 'Can you provide more detail?',
    hint: "Don't include personal or financial information, eg your National Insurance number or credit card details.",
    rows: 5,
  },
}

export const WithError: Story = {
  args: {
    id: 'more-detail-error',
    name: 'more-detail',
    label: 'Can you provide more detail?',
    hint: "Don't not include personal or financial information, eg your National Insurance number or credit card details.",
    error: 'Enter more detail',
    rows: 5,
    value: '',
  },
}

export const AsHeading: Story = {
  args: {
    id: 'description',
    name: 'description',
    label: 'Description of what you saw',
    labelAsHeading: true,
    labelSize: 'l',
    rows: 6,
  },
}

export const WithMaxLength: Story = {
  args: {
    id: 'tweet',
    name: 'tweet',
    label: "What's  happening?",
    hint: 'Maximum 280 characters',
    maxLength: 280,
    rows: 3,
  },
}

export const LargeTextarea: Story = {
  args: {
    id: 'full-description',
    name: 'full-description',
    label: 'Full description',
    hint: 'Include as much detail as possible',
    rows: 10,
  },
}

export const SmallTextarea: Story = {
  args: {
    id: 'summary',
    name: 'summary',
    label: 'Brief summary',
    rows: 2,
  },
}

export const WithDefaultValue: Story = {
  args: {
    id: 'comments',
    name: 'comments',
    label: 'Additional comments',
    defaultValue: 'This is some default content that appears when the form loads.',
    rows: 4,
  },
}

export const NoSpellcheck: Story = {
  args: {
    id: 'code',
    name: 'code',
    label: 'Code snippet',
    hint: 'Paste your code here',
    spellcheck: false,
    rows: 8,
    className: 'govuk-!-font-family-monospace',
  },
}
