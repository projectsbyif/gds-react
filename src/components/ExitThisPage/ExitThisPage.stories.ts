import type { Meta, StoryObj } from '@storybook/react'
import { ExitThisPage } from './ExitThisPage.js'

const meta: Meta<typeof ExitThisPage> = {
  title: 'GDS/ExitThisPage',
  component: ExitThisPage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Emergency exit component that allows users to quickly leave the page. Important for sensitive services.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL to redirect to when clicked',
    },
    text: {
      control: 'text',
      description: 'Text for the exit button',
    },
    emergencyText: {
      control: 'text',
      description: 'Emergency text shown on smaller screens',
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

export const CustomText: Story = {
  args: {
    text: 'Leave this site now',
    emergencyText: 'Exit',
  },
}