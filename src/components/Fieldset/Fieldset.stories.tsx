import type { Meta, StoryObj } from '@storybook/react'
import { Fieldset } from './Fieldset.js'
import { Radios } from '../Radios/Radios.js'
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup.js'
import { Paragraph } from '../Paragraph/Paragraph.js'

const meta: Meta<typeof Fieldset> = {
  title: 'GDS/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
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
    children: {
      control: false,
      description: 'Child content to display within fieldset',
    },
    ariaDescribedBy: {
      control: 'text',
      description: 'IDs of elements that describe this fieldset',
    },
    role: {
      control: 'text',
      description: 'ARIA role attribute',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    legend: 'What is your address?',
    children: (
      <div>
        <Paragraph>This fieldset groups related form fields together.</Paragraph>
      </div>
    ),
  },
}

export const AsHeading: Story = {
  args: {
    legend: 'Personal details',
    legendAsHeading: true,
    legendSize: 'xl',
    children: (
      <div>
        <Paragraph>Please provide your personal information below.</Paragraph>
      </div>
    ),
  },
}

export const WithRadios: Story = {
  args: {
    legend: 'Where do you live?',
    legendSize: 'l',
    children: (
      <Radios
        name="address"
        options={[
          { label: 'England', value: 'england' },
          { label: 'Scotland', value: 'scotland' },
          { label: 'Wales', value: 'wales' },
          { label: 'Northern Ireland', value: 'northern-ireland' },
        ]}
        legend={undefined}
      />
    ),
  },
}

export const WithCheckboxes: Story = {
  args: {
    legend: 'Which types of waste do you transport?',
    children: (
      <CheckboxGroup
        name="waste-types"
        legend=""
        options={[
          { label: 'Waste from animal carcasses', value: 'animal' },
          { label: 'Waste from mines or quarries', value: 'mining' },
          { label: 'Farm or agricultural waste', value: 'farm' },
          { label: 'None of these', value: 'none', exclusive: true },
        ]}
      />
    ),
  },
}

export const SmallLegend: Story = {
  args: {
    legend: 'Additional information',
    legendSize: 's',
    children: <Paragraph>This is a fieldset with a small legend.</Paragraph>,
  },
}

export const MediumLegend: Story = {
  args: {
    legend: 'Contact preferences',
    legendSize: 'm',
    children: (
      <CheckboxGroup
        name="contact"
        legend=""
        options={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
          { label: 'Post', value: 'post' },
        ]}
      />
    ),
  },
}
