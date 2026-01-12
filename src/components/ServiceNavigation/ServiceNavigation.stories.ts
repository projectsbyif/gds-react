import type { Meta, StoryObj } from '@storybook/react'
import { ServiceNavigation } from './ServiceNavigation.js'

const meta: Meta<typeof ServiceNavigation> = {
  title: 'GDS/ServiceNavigation',
  component: ServiceNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    serviceName: {
      control: 'text',
      description: 'Name of the service',
    },
    serviceUrl: {
      control: 'text',
      description: 'URL for the service name link',
    },
    navigationItems: {
      control: 'object',
      description: 'Array of navigation items',
    },
    navigationLabel: {
      control: 'text',
      description: 'Label for the navigation section',
    },
    toggleLabel: {
      control: 'text',
      description: 'Label for mobile menu toggle',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the navigation',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicNavItems = [
  { text: 'Home', href: '#', active: false },
  { text: 'Search', href: '#', active: true },
  { text: 'Cases', href: '#', active: false },
  { text: 'Reports', href: '#', active: false },
]

export const Default: Story = {
  args: {
    serviceName: 'Example Tool',
    serviceUrl: '#',
    navigationItems: basicNavItems,
  },
}

export const WithoutServiceLink: Story = {
  args: {
    serviceName: 'Management System',
    navigationItems: basicNavItems,
  },
}

export const MinimalNavigation: Story = {
  args: {
    serviceName: 'Minimal Service',
    serviceUrl: '/',
    navigationItems: [
      { text: 'Home', href: '#', active: true },
      { text: 'Search', href: '#', active: false },
    ],
  },
}

export const ExtensiveNavigation: Story = {
  args: {
    serviceName: 'Extensive Service',
    serviceUrl: '#',
    navigationItems: [
      { text: 'Dashboard', href: '#', active: false },
      { text: 'Search', href: '#', active: true },
      { text: 'Management', href: '#', active: false },
      { text: 'Document Library', href: '#', active: false },
      { text: 'Reports', href: '#', active: false },
      { text: 'Administration', href: '#', active: false },
    ],
  },
}

export const CustomLabels: Story = {
  args: {
    serviceName: 'Research Hub',
    serviceUrl: '#',
    navigationItems: basicNavItems,
    navigationLabel: 'Primary navigation',
    toggleLabel: 'Show or hide primary navigation',
    ariaLabel: 'Primary navigation',
  },
}
