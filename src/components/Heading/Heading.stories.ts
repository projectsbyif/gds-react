import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading.js'

const meta: Meta<typeof Heading> = {
  title: 'GDS/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'radio',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    size: {
      control: 'radio',
      options: ['xl', 'l', 'm', 's'],
      description: 'Visual size (overrides default level sizing)',
    },
    caption: {
      control: 'text',
      description: 'Optional caption text',
    },
    captionInside: {
      control: 'boolean',
      description: 'Whether caption appears inside the heading element',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const H1Default: Story = {
  args: {
    level: 1,
    children: 'Check your answers before sending your application',
  },
}

export const H1ExtraLarge: Story = {
  args: {
    level: 1,
    size: 'xl',
    children: 'Register to vote',
  },
}

export const H2Large: Story = {
  args: {
    level: 2,
    children: 'Your personal details',
  },
}

export const H3Medium: Story = {
  args: {
    level: 3,
    children: 'What is your address?',
  },
}

export const H4Small: Story = {
  args: {
    level: 4,
    children: 'Additional information',
  },
}

export const WithCaption: Story = {
  args: {
    level: 1,
    caption: 'Application summary',
    children: 'Check your answers before sending your application',
  },
}

export const WithCaptionInside: Story = {
  args: {
    level: 1,
    caption: 'Application summary',
    captionInside: true,
    children: 'Check your answers before sending your application',
  },
}

export const LargeCaptionMediumHeading: Story = {
  args: {
    level: 2,
    size: 'm',
    caption: 'Step 1 of 4',
    children: 'Personal details',
  },
}

export const WithCustomClass: Story = {
  args: {
    level: 2,
    children: 'Heading with custom margin',
    className: 'govuk-!-margin-bottom-6',
  },
}
