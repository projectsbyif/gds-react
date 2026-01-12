import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select.js'

const meta: Meta<typeof Select> = {
  title: 'GDS/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the select',
    },
    name: {
      control: 'text',
      description: 'Form field name',
    },
    label: {
      control: 'text',
      description: 'Label text for the select',
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
      description: 'Helper text for the select',
    },
    error: {
      control: 'text',
      description: 'Error message text',
    },
    options: {
      control: 'object',
      description: 'Array of options to display',
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
    onChange: (value: string) => console.log('Select changed:', value),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = [
  { value: '', text: 'Choose option' },
  { value: 'england', text: 'England' },
  { value: 'scotland', text: 'Scotland' },
  { value: 'wales', text: 'Wales' },
  { value: 'northern-ireland', text: 'Northern Ireland' },
]

export const Default: Story = {
  args: {
    id: 'location',
    name: 'location',
    label: 'Where do you live?',
    options: basicOptions,
  },
}

export const WithHint: Story = {
  args: {
    id: 'location-hint',
    name: 'location',
    label: 'Where do you live?',
    hint: 'Select the country where you spend most of your time',
    options: basicOptions,
  },
}

export const WithError: Story = {
  args: {
    id: 'location-error',
    name: 'location',
    label: 'Where do you live?',
    hint: 'Select the country where you spend most of your time',
    error: 'Select where you live',
    options: basicOptions,
    value: '',
  },
}

export const AsHeading: Story = {
  args: {
    id: 'country',
    name: 'country',
    label: 'What country are you from?',
    labelAsHeading: true,
    labelSize: 'l',
    options: basicOptions,
  },
}

export const WithSelectedOption: Story = {
  args: {
    id: 'location-selected',
    name: 'location',
    label: 'Where do you live?',
    options: [
      { value: '', text: 'Choose option' },
      { value: 'england', text: 'England', selected: true },
      { value: 'scotland', text: 'Scotland' },
      { value: 'wales', text: 'Wales' },
      { value: 'northern-ireland', text: 'Northern Ireland' },
    ],
  },
}

export const WithDisabledOptions: Story = {
  args: {
    id: 'service-level',
    name: 'service-level',
    label: 'Choose service level',
    hint: 'Premium options require additional verification',
    options: [
      { value: '', text: 'Select service level' },
      { value: 'basic', text: 'Basic' },
      { value: 'standard', text: 'Standard' },
      { value: 'premium', text: 'Premium (Coming Soon)', disabled: true },
      { value: 'enterprise', text: 'Enterprise (Contact us)', disabled: true },
    ],
  },
}

export const LongOptions: Story = {
  args: {
    id: 'qualification',
    name: 'qualification',
    label: 'Highest qualification',
    options: [
      { value: '', text: 'Select your highest qualification' },
      { value: 'no-qualifications', text: 'No qualifications' },
      { value: 'gcse', text: 'GCSE or equivalent' },
      { value: 'a-level', text: 'A-Level or equivalent' },
      { value: 'bachelor', text: "Bachelor's  degree" },
      { value: 'master', text: "Master's  degree" },
      { value: 'doctorate', text: 'Doctorate or equivalent professional qualification' },
      { value: 'other', text: 'Other professional qualification' },
      { value: 'prefer-not-to-say', text: 'Prefer not to say' },
    ],
  },
}

export const ManyOptions: Story = {
  args: {
    id: 'birth-year',
    name: 'birth-year',
    label: 'Year of birth',
    hint: 'For example, 1980',
    options: [
      { value: '', text: 'Select year' },
      ...Array.from({ length: 100 }, (_, i) => {
        const year = new Date().getFullYear() - i
        return { value: year.toString(), text: year.toString() }
      }),
    ],
  },
}
