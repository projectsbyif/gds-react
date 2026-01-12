import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link.js'

const meta: Meta<typeof Link> = {
  title: 'GDS/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL to navigate to',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
    noVisitedState: {
      control: 'boolean',
      description: 'Remove visited state styling',
    },
    inverse: {
      control: 'boolean',
      description: 'Use inverse styling (for dark backgrounds)',
    },
    noUnderline: {
      control: 'boolean',
      description: 'Remove underline from link',
    },
    opensInNewTab: {
      control: 'boolean',
      description: 'Open link in new tab/window',
    },
    external: {
      control: 'boolean',
      description: 'Mark as external link with icon',
    },
    hreflang: {
      control: 'text',
      description: 'Language of the linked resource',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when link is clicked',
    },
  },
  args: {
    onClick: (e:  React.MouseEvent<HTMLAnchorElement>) => console.log('Link clicked:', e.currentTarget.href),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '#',
    children: 'This is a link',
  },
}

export const External: Story = {
  args: {
    href: 'https://www.gov.uk',
    children: 'Visit GOV.UK',
    external: true,
  },
}

export const NewTab: Story = {
  args: {
    href: 'https://example.com',
    children: 'Open in new tab',
    opensInNewTab: true,
  },
}

export const NoVisitedState: Story = {
  args: {
    href: '#visited',
    children: 'Link with no visited state',
    noVisitedState: true,
  },
}

export const NoUnderline: Story = {
  args: {
    href: '#',
    children: 'Link without underline',
    noUnderline: true,
  },
}

export const Inverse: Story = {
  args: {
    href: '#',
    children: 'Inverse link',
    inverse: true,
  },
  parameters: {
    backgrounds: { default: 'govuk-grey' },
  },
}
