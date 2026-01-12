import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer.js'

const meta: Meta<typeof Footer> = {
  title: 'GDS/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    navigation: {
      control: 'object',
      description: 'Footer navigation with title and links',
    },
    meta: {
      control: 'object',
      description: 'Footer meta links (privacy, cookies, etc)',
    },
    contentLicence: {
      control: 'text',
      description: 'Content licence text',
    },
    copyright: {
      control: 'text',
      description: 'Copyright text',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicNavigation = {
  title: 'Services and information',
  columns: 1,
  items: [
    { text: 'Legal guidance', href: '/legal' },
    { text: 'Case management', href: '/cases' },
    { text: 'Evidence portal', href: '/evidence' },
    { text: 'Training resources', href: '/training' },
  ],
}

const metaLinks = {
  items: [
    { text: 'Privacy policy', href: '/privacy' },
    { text: 'Cookies', href: '/cookies' },
    { text: 'Contact', href: '/contact' },
    { text: 'Terms and conditions', href: '/terms' },
  ],
}

export const Default: Story = {
  args: {
    meta: metaLinks,
  },
}

export const WithNavigation: Story = {
  args: {
    navigation: [basicNavigation],
    meta: metaLinks,
  },
}

export const MinimalFooter: Story = {
  args: {
    meta: {
      items: [
        { text: 'Privacy', href: '/privacy' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  },
}
