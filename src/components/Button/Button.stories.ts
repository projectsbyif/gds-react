import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button.js'

const meta: Meta<typeof Button> = {
  title: 'GDS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'start', 'secondary', 'warning', 'inverse'],
      description: 'Button style variant',
    },
    href: {
      control: 'text',
      description: 'If provided, renders as a link with this href',
    },
    type: {
      control: 'radio',
      options: ['submit', 'button', 'reset'],
      description: 'Button type (only applies when not using href)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    preventDoubleClick: {
      control: 'boolean',
      description: 'Prevent double-click interactions',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onClick: () => console.log('Button clicked'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Continue',
  },
}

export const Start: Story = {
  args: {
    children: 'Start now',
    variant: 'start',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Find address',
    variant: 'secondary',
  },
}

export const Warning: Story = {
  args: {
    children: 'Delete account',
    variant: 'warning',
  },
}

export const Inverse: Story = {
  args: {
    children: 'Start now',
    variant: 'inverse',
  },
  parameters: {
    backgrounds: { default: 'govuk-grey' },
  },
}

export const AsLink: Story = {
  args: {
    children: 'Continue',
    href: '#',
  },
}

export const StartLink: Story = {
  args: {
    children: 'Start now',
    variant: 'start',
    href: '#start',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled button',
    disabled: true,
  },
}

export const WithCustomClass: Story = {
  args: {
    children: 'Custom styled button',
    className: 'govuk-!-margin-bottom-3',
  },
}
