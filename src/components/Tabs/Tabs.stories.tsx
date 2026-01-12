import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs.js'
import { Paragraph } from '../Paragraph/Paragraph.js'

const meta: Meta<typeof Tabs> = {
  title: 'GDS/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the tabs section',
    },
    tabs: {
      control: 'object',
      description: 'Array of tab objects with id, label, and content',
    },
    defaultTabId: {
      control: 'text',
      description: 'ID of the tab to show by default',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicTabs = [
  {
    id: 'past-day',
    label: 'Past day',
    content: <Paragraph>Recent activity from the last 24 hours.</Paragraph>,
  },
  {
    id: 'past-week',
    label: 'Past week',
    content: <Paragraph>Activity from the last 7 days.</Paragraph>,
  },
  {
    id: 'past-month',
    label: 'Past month',
    content: <Paragraph>Activity from the last 30 days.</Paragraph>,
  },
]

export const Default: Story = {
  args: {
    tabs: basicTabs,
  },
}

export const WithCustomTitle: Story = {
  args: {
    title: 'Activity timeline',
    tabs: basicTabs,
  },
}

export const WithDefaultTab: Story = {
  args: {
    tabs: basicTabs,
    defaultTabId: 'past-week',
  },
}

