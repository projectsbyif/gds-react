import type { Meta, StoryObj } from '@storybook/react'
import { Radios } from './Radios.js'
import { TextInput } from '../TextInput/TextInput.js'
import { Textarea } from '../Textarea/Textarea.js'

const meta: Meta<typeof Radios> = {
  title: 'GDS/Radios',
  component: Radios,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio group',
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
      description: 'Array of radio options',
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
    inline: {
      control: 'boolean',
      description: 'Display radios in a horizontal line',
    },
    small: {
      control: 'boolean',
      description: 'Use smaller radio styling',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
  },
  args: {
    onChange: (value: string) => console.log('Selected:', value),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = [
  { label: 'England', value: 'england' },
  { label: 'Scotland', value: 'scotland' },
  { label: 'Wales', value: 'wales' },
  { label: 'Northern Ireland', value: 'northern-ireland' },
]

export const Default: Story = {
  args: {
    name: 'where-do-you-live',
    legend: 'Where do you live?',
    options: basicOptions,
  },
}

export const WithHint: Story = {
  args: {
    name: 'passport-country',
    legend: 'What country issued your passport?',
    hint: 'This is the country that appears on your passport',
    options: basicOptions,
  },
}

export const WithError: Story = {
  args: {
    name: 'country-error',
    legend: 'What country do you live in?',
    options: basicOptions,
    error: 'Select the country where you live',
  },
}

export const WithHints: Story = {
  args: {
    name: 'contact-method',
    legend: 'How would you prefer to be contacted?',
    options: [
      {
        label: 'Email',
        value: 'email',
        hint: 'We will only use this to send you updates',
      },
      {
        label: 'Phone',
        value: 'phone',
        hint: 'We will call during office hours',
      },
      {
        label: 'Text message',
        value: 'text',
        hint: 'We will send you a text message',
      },
    ],
  },
}

export const Inline: Story = {
  args: {
    name: 'yes-no',
    legend: 'Do you have a driving licence?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    inline: true,
  },
}

export const Small: Story = {
  args: {
    name: 'small-radios',
    legend: 'Filter results',
    legendSize: 's',
    options: [
      { label: 'Most recent', value: 'recent' },
      { label: 'Most relevant', value: 'relevant' },
      { label: 'Alphabetical', value: 'alphabetical' },
    ],
    small: true,
  },
}

export const WithDivider: Story = {
  args: {
    name: 'organization-type',
    legend: 'What type of organization are you?',
    options: [
      { label: 'Government department', value: 'government' },
      { label: 'Local authority', value: 'local-authority' },
      { label: 'NHS trust', value: 'nhs' },
      { label: 'None of these', value: 'none', divider: true },
    ],
  },
}

export const WithConditionalContent: Story = {
  args: {
    name: 'contact-details',
    legend: 'How can we contact you?',
    options: [
      {
        label: 'Email',
        value: 'email',
        conditionalContent: (
          <TextInput
            id="email-address"
            name="email-address"
            label="Email address"
            type="email"
            hint="We'll only use this to send you updates"
            className="govuk-!-width-two-thirds"
          />
        ),
      },
      {
        label: 'Phone',
        value: 'phone',
        conditionalContent: (
          <TextInput
            id="phone-number"
            name="phone-number"
            label="Phone number"
            type="tel"
            hint="Include your country code if outside the UK"
            className="govuk-!-width-one-third"
          />
        ),
      },
      {
        label: 'Post',
        value: 'post',
        conditionalContent: (
          <Textarea
            id="postal-address"
            name="postal-address"
            label="Postal address"
            hint="Include your postcode"
            rows={5}
            className="govuk-!-width-two-thirds"
          />
        ),
      },
    ],
  },
}

export const WithDefault: Story = {
  args: {
    name: 'default-selected',
    legend: 'What is your employment status?',
    options: [
      { label: 'Employed', value: 'employed' },
      { label: 'Self-employed', value: 'self-employed' },
      { label: 'Unemployed', value: 'unemployed' },
      { label: 'Retired', value: 'retired' },
    ],
    defaultValue: 'employed',
  },
}
