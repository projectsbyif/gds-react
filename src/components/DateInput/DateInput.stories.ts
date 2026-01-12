import type { Meta, StoryObj } from '@storybook/react'
import { DateInput, type DateInputOnChangeProps } from './DateInput.js'

const meta: Meta<typeof DateInput> = {
  title: 'GDS/DateInput',
  component: DateInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the date input',
    },
    namePrefix: {
      control: 'text',
      description: 'Prefix for the input names (day, month, year)',
    },
    legend: {
      control: 'text',
      description: 'Legend text or JSX element',
    },
    legendAsHeading: {
      control: 'boolean',
      description: 'Whether legend should be rendered as a heading',
    },
    legendSize: {
      control: 'radio',
      options: ['xl', 'l', 'm', 's'],
      description: 'Size of the legend text',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    errorFields: {
      control: 'object',
      description: 'Array of field names with errors ("day", "month", "year")',
    },
    dayValue: {
      control: 'text',
      description: 'Default value for day field',
    },
    monthValue: {
      control: 'text',
      description: 'Default value for month field',
    },
    yearValue: {
      control: 'text',
      description: 'Default value for year field',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when date values change',
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
    onChange: (values: DateInputOnChangeProps) => console.log('Date changed:', values),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'passport-issued',
    namePrefix: 'passport',
    legend: 'When was your passport issued?',
    hint: 'For example, 12 11 2007',
  },
}

export const WithValues: Story = {
  args: {
    id: 'birth-date',
    namePrefix: 'birth',
    legend: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    dayValue: '31',
    monthValue: '03',
    yearValue: '1980',
  },
}

export const WithError: Story = {
  args: {
    id: 'dob-error',
    namePrefix: 'dob',
    legend: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    error: 'Enter your date of birth',
    dayValue: '',
    monthValue: '',
    yearValue: '',
  },
}

export const WithFieldSpecificErrors: Story = {
  args: {
    id: 'appointment-date',
    namePrefix: 'appointment',
    legend: 'When is your appointment?',
    error: 'Date of appointment must be in the future',
    errorFields: ['day', 'month'],
    dayValue: '15',
    monthValue: '02',
    yearValue: '2020',
  },
}

export const AsHeading: Story = {
  args: {
    id: 'heading-date',
    namePrefix: 'heading',
    legend: 'When did the incident occur?',
    legendAsHeading: true,
    legendSize: 'xl',
    hint: 'This must be the exact date of the incident',
  },
}

export const SmallLegend: Story = {
  args: {
    id: 'small-date',
    namePrefix: 'small',
    legend: 'Date of last update',
    legendSize: 's',
  },
}

export const WithAutocomplete: Story = {
  args: {
    id: 'birthday',
    namePrefix: 'birthday',
    legend: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    autocomplete: 'bday',
  },
}