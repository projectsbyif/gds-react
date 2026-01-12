import type { Meta, StoryObj } from '@storybook/react'
import { SkipLink } from './SkipLink.js'

const meta: Meta<typeof SkipLink> = {
  title: 'GDS/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Skip link allows keyboard users to jump to main content. Focus on the story to see the skip link.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Target anchor for the skip link',
    },
    children: {
      control: 'text',
      description: 'Skip link text content',
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
  args: {},
}

export const CustomTarget: Story = {
  args: {
    href: '#search-results',
    children: 'Skip to search results',
  },
}

export const CustomText: Story = {
  args: {
    children: 'Jump to main content',
  },
}

export const ToNavigation: Story = {
  args: {
    href: '#navigation',
    children: 'Skip to navigation',
  },
}

export const ToFooter: Story = {
  args: {
    href: '#footer',
    children: 'Skip to footer',
  },
}
