import type { Meta, StoryObj } from '@storybook/react'
import { NotificationBanner } from './NotificationBanner.js'
import { Link } from '../Link/Link.js'
import { Paragraph } from '../Paragraph/Paragraph.js'

const meta: Meta<typeof NotificationBanner> = {
  title: 'GDS/NotificationBanner',
  component: NotificationBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Banner title (shown in header)',
    },
    type: {
      control: 'radio',
      options: ['neutral', 'success'],
      description: 'Type of notification banner',
    },
    heading: {
      control: 'text',
      description: 'Content heading',
    },
    children: {
      control: false,
      description: 'Banner content',
    },
    titleId: {
      control: 'text',
      description: 'ID for the title element',
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
    title: 'Important',
    heading: 'You have 7 days left to send your application',
    children: <Paragraph>Your application will be cancelled if you do not respond.</Paragraph>,
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    heading: 'Email sent to John Smith',
    children: (
      <Paragraph>
        We sent them an email to let them know that you want to add them to your application.
      </Paragraph>
    ),
  },
}

export const WithLink: Story = {
  args: {
    title: 'Important',
    heading: 'New guidance published',
    children: (
      <Paragraph>
        Updated guidelines for criminal damage cases are now available.
        <br />
        <Link href="/guidance/criminal-damage">Read the new guidance</Link>
      </Paragraph>
    ),
  },
}

export const SystemMaintenance: Story = {
  args: {
    title: 'Information',
    heading: 'Planned system maintenance',
    children: (
      <Paragraph>
        The service will be unavailable on Saturday 16 March from 2am to 6am for essential
        maintenance. You will not be able to access cases or submit evidence during this time.
      </Paragraph>
    ),
  },
}

export const MinimalContent: Story = {
  args: {
    heading: 'Settings updated',
    children: <Paragraph>Your notification preferences have been saved.</Paragraph>,
  },
}
