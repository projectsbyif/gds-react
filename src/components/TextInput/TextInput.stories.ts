import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput.js'

const meta: Meta<typeof TextInput> = {
  title: 'GDS/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the input',
    },
    name: {
      control: 'text',
      description: 'Form field name',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
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
      description: 'Helper text for the input',
    },
    error: {
      control: 'text',
      description: 'Error message text',
    },
    type: {
      control: 'radio',
      options: ['text', 'email', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    inputMode: {
      control: 'radio',
      options: ['numeric', 'decimal', 'tel', 'email', 'url', 'search'],
      description: 'Input mode hint for mobile keyboards',
    },
    width: {
      control: 'select',
      options: [
        'full',
        'three-quarters',
        'two-thirds',
        'one-half',
        'one-third',
        'one-quarter',
        2,
        3,
        4,
        5,
        10,
        20,
        30,
      ],
      description: 'Input width',
    },
    prefix: {
      control: 'text',
      description: 'Text to show before the input',
    },
    suffix: {
      control: 'text',
      description: 'Text to show after the input',
    },
    extraLetterSpacing: {
      control: 'boolean',
      description: 'Add extra letter spacing (for reference numbers, etc.)',
    },
    spellcheck: {
      control: 'boolean',
      description: 'Enable spell checking',
    },
    autocomplete: {
      control: 'text',
      description: 'Autocomplete attribute value',
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default uncontrolled value',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: (value: string) => console.log('Input changed:', value),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'event-name',
    name: 'event-name',
    label: 'Event name',
  },
}

export const WithHint: Story = {
  args: {
    id: 'event-name-hint',
    name: 'event-name',
    label: 'Event name',
    hint: 'The name you will use on promotional material',
  },
}

export const WithError: Story = {
  args: {
    id: 'event-name-error',
    name: 'event-name',
    label: 'Event name',
    hint: 'The name you will use on promotional material',
    error: 'Enter an event name',
    value: '',
  },
}

export const AsHeading: Story = {
  args: {
    id: 'full-name',
    name: 'full-name',
    label: 'What is your full name?',
    labelAsHeading: true,
    labelSize: 'l',
  },
}

export const Email: Story = {
  args: {
    id: 'email',
    name: 'email',
    label: 'Email address',
    type: 'email',
    inputMode: 'email',
    autocomplete: 'email',
    width: 'two-thirds',
  },
}

export const Phone: Story = {
  args: {
    id: 'phone',
    name: 'phone',
    label: 'UK telephone number',
    type: 'tel',
    inputMode: 'tel',
    autocomplete: 'tel',
    width: 'one-third',
  },
}

export const WithPrefix: Story = {
  args: {
    id: 'account-number',
    name: 'account-number',
    label: 'Sort code',
    prefix: '£',
    width: 5,
  },
}

export const WithSuffix: Story = {
  args: {
    id: 'weight',
    name: 'weight',
    label: 'Weight',
    suffix: 'kg',
    width: 5,
  },
}

export const ExtraLetterSpacing: Story = {
  args: {
    id: 'reference',
    name: 'reference',
    label: 'Reference number',
    hint: 'This could be an application, policy or account reference number',
    extraLetterSpacing: true,
    width: 'one-third',
  },
}

export const FixedWidth: Story = {
  args: {
    id: 'postcode',
    name: 'postcode',
    label: 'Postcode',
    autocomplete: 'postal-code',
    width: 10,
  },
}

export const FullWidth: Story = {
  args: {
    id: 'address-line-1',
    name: 'address-line-1',
    label: 'Building and street',
    autocomplete: 'address-line1',
    width: 'full',
  },
}
