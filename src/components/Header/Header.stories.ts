import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header.js'

const meta: Meta<typeof Header> = {
  title: 'GDS/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    productName: {
      control: 'text',
      description: 'Name of the product/service to display',
    },
    homepageUrl: {
      control: 'text',
      description: 'URL for the homepage link',
    },
    fullWidthBorder: {
      control: 'boolean',
      description: 'Whether to show full-width border at bottom',
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

export const WithProductName: Story = {
  args: {
    productName: 'Product Name',
  },
}
