import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs.js'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'GDS/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with text and href',
    },
    collapseOnMobile: {
      control: 'boolean',
      description: 'Whether to collapse breadcrumbs on mobile devices',
    },
    inverse: {
      control: 'boolean',
      description: 'Use inverse styling (for dark backgrounds)',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the breadcrumb navigation',
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
    items: [
      { text: 'Home', href: '/' },
      { text: 'Passports, travel and living abroad', href: '/passports' },
      { text: 'Travel abroad', href: '/travel-abroad' },
    ],
  },
}

export const TwoLevels: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Section', href: '/section' },
    ],
  },
}

export const FourLevels: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Legal guidance', href: '/legal' },
      { text: 'Criminal law', href: '/legal/criminal' },
      { text: 'Criminal damage', href: '/legal/criminal/damage' },
    ],
  },
}

export const CollapseOnMobile: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Legal guidance', href: '/legal' },
      { text: 'Criminal procedure', href: '/legal/procedure' },
      { text: 'Court proceedings', href: '/legal/procedure/court' },
    ],
    collapseOnMobile: true,
  },
}

export const Inverse: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Section', href: '/section' },
    ],
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'govuk-grey' },
  },
}
