import type { Meta, StoryObj } from '@storybook/react'
import { BackLink } from './BackLink.js'

const meta: Meta<typeof BackLink> = {
  title: 'GDS/BackLink',
  component: BackLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL to navigate to when clicked',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
    inverse: {
      control: 'boolean',
      description: 'Use inverse styling (for dark backgrounds)',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when link is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onClick: () => console.log('Back link clicked'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '#',
  },
}

export const CustomText: Story = {
  args: {
    href: '#',
    children: 'Back to previous page',
  },
}

export const WithoutHref: Story = {
  args: {
    children: 'Back',
  },
}

export const Inverse: Story = {
  args: {
    href: '#',
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'govuk-grey' },
  },
}

export const BackToSearch: Story = {
  args: {
    href: '/search',
    children: 'Back to search results',
  },
}
