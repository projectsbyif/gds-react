import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from './CheckboxGroup.js'
import { TextInput } from '../TextInput/TextInput.js'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'GDS/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the checkbox group',
    },
    legend: {
      control: 'text',
      description: 'Legend text or JSX element',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    options: {
      control: 'object',
      description: 'Array of checkbox options',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    legendSize: {
      control: 'radio',
      options: ['xl', 'l', 'm', 's'],
      description: 'Size of the legend text',
    },
    small: {
      control: 'boolean',
      description: 'Use smaller checkbox styling',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
    },
    defaultValue: {
      control: 'object',
      description: 'Array of default selected values',
    },
    checkboxesClassName: {
      control: 'text',
      description: 'Additional CSS classes for checkboxes container',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional CSS classes for labels',
    },
  },
  args: {
    onChange: (values: string[]) => console.log('Selected:', values),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = [
  { label: 'British', value: 'british' },
  { label: 'Irish', value: 'irish' },
  { label: 'Other', value: 'other' },
]

export const Default: Story = {
  args: {
    name: 'nationality',
    legend: 'What is your nationality?',
    hint: 'If you have dual nationality, select all that apply',
    options: basicOptions,
  },
}

export const WithError: Story = {
  args: {
    name: 'nationality-error',
    legend: 'What is your nationality?',
    hint: 'If you have dual nationality, select all that apply',
    options: basicOptions,
    error: 'Select your nationality',
  },
}

export const SmallCheckboxes: Story = {
  args: {
    name: 'small-checkboxes',
    legend: 'Select categories',
    options: [
      { label: 'Legal guidance', value: 'legal' },
      { label: 'Case law', value: 'caselaw' },
      { label: 'Sentencing guidelines', value: 'sentencing' },
    ],
    small: true,
    legendSize: 'm',
  },
}

export const WithHints: Story = {
  args: {
    name: 'contact-preferences',
    legend: 'How would you like to be contacted?',
    hint: 'Select all that apply',
    options: [
      {
        label: 'Email',
        value: 'email',
        hint: 'We will only use this for official correspondence',
      },
      {
        label: 'Phone',
        value: 'phone',
        hint: 'Include your country code',
      },
      {
        label: 'Text message',
        value: 'texts',
        hint: 'We will send updates about your case',
      },
    ],
  },
}

export const WithConditionalContent: Story = {
  args: {
    name: 'contact-methods',
    legend: 'How can we contact you?',
    options: [
      { label: 'Email', value: 'email' },
      {
        label: 'Phone',
        value: 'phone',
        conditionalContent: (
          <TextInput
            id="phone-number"
            name="phone-number"
            label="Phone number"
            type="tel"
            className="govuk-!-width-one-third"
          />
        ),
      },
      { label: 'Text message', value: 'notext' },
    ],
  },
}

export const WithExclusive: Story = {
  args: {
    name: 'organisation',
    legend: 'Which types of waste do you transport?',
    hint: 'Select all that apply',
    options: [
      { label: 'Waste from animal carcasses', value: 'animal' },
      { label: 'Waste from mines or quarries', value: 'mining' },
      { label: 'Farm or agricultural waste', value: 'farm' },
      { label: 'None of these', value: 'none', exclusive: true },
    ],
  },
}

export const LegendSizes: Story = {
  args: {
    name: 'legend-sizes',
    legend: 'Extra large legend',
    legendSize: 'xl',
    options: [
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2', value: 'opt2' },
    ],
  },
}

export const WithDefaults: Story = {
  args: {
    name: 'with-defaults',
    legend: 'Select your preferences',
    options: [
      { label: 'Email notifications', value: 'email' },
      { label: 'SMS notifications', value: 'sms' },
      { label: 'Push notifications', value: 'push' },
    ],
    defaultValue: ['email', 'push'],
  },
}

export const DisabledOptions: Story = {
  args: {
    name: 'disabled-options',
    legend: 'Select available options',
    hint: 'Some options may not be available',
    options: [
      { label: 'Available option', value: 'available' },
      { label: 'Disabled option', value: 'disabled', disabled: true },
      { label: 'Another available option', value: 'available2' },
    ],
  },
}
