import type { Meta, StoryObj } from '@storybook/react'
import { Details } from './Details.js'
import { Paragraph } from '../Paragraph/Paragraph.js'
import { List } from '../List/List.js'

const meta: Meta<typeof Details> = {
  title: 'GDS/Details',
  component: Details,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    summary: {
      control: 'text',
      description: 'Summary text that acts as the toggle button',
    },
    children: {
      control: false,
      description: 'Content to show/hide',
    },
    open: {
      control: 'boolean',
      description: 'Whether details should be open by default',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onToggle: {
      action: 'ontoggle',
      description: 'Callback when details is opened/closed',
    },
  },
  args: {
    onToggle: (event) => console.log('Details toggled:', event.currentTarget.open),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'Help with nationality',
    children: (
      <Paragraph>
        We need to know your nationality so we can work out which elections you are entitled to vote
        in. If you cannot provide your nationality, you will have to send copies of identity
        documents through the post.
      </Paragraph>
    ),
  },
}

export const OpenByDefault: Story = {
  args: {
    summary: 'What happens next',
    open: true,
    children: (
      <div>
        <Paragraph>
          We will send you an email to let you know the outcome. You will usually get a decision
          within 5 working days.
        </Paragraph>
        <Paragraph>
          If your application is successful, you will get your new passport within 3 weeks.
        </Paragraph>
      </div>
    ),
  },
}

export const WithList: Story = {
  args: {
    summary: 'What you will need',
    children: (
      <div>
        <Paragraph>You will need to provide:</Paragraph>
        <List
          items={[
            'your current passport',
            '2 identical passport photos',
            'supporting documents',
            'payment',
          ]}
        />
      </div>
    ),
  },
}
