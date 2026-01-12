import type { Meta, StoryObj } from '@storybook/react'
import { Panel } from './Panel.js'

const meta: Meta<typeof Panel> = {
  title: 'GDS/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title content',
    },
    children: {
      control: 'text',
      description: 'Panel body content',
    },
    headingLevel: {
      control: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level for the title',
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
    title: 'Application complete',
    children: 'Your reference number is HDJ2123F',
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Case submitted successfully',
  },
}

export const H2Heading: Story = {
  args: {
    title: 'Form completed',
    children: 'Thank you for providing the requested information',
    headingLevel: 'h2',
  },
}

export const PaymentComplete: Story = {
  args: {
    title: 'Payment successful',
    children:
      'Payment reference: PAY123456789\nAmount: £150.00\nReceipt has been sent to your email',
    headingLevel: 'h2',
  },
}
