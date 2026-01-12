import type { Meta, StoryObj } from '@storybook/react'
import { WarningText } from './WarningText.js'
import { Link } from '../Link/Link.js'

const meta: Meta<typeof WarningText> = {
  title: 'GDS/WarningText',
  component: WarningText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Warning message content',
    },
    iconFallbackText: {
      control: 'text',
      description: 'Fallback text for the warning icon',
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
    children: 'You can be fined up to £5,000 if you do not register.',
  },
}

export const WithLink: Story = {
  args: {
    children: (
      <>
        Failure to comply with court orders may result in prosecution.{" "}
        <Link href="/legal/contempt-of-court">Read more about contempt of court</Link>.
      </>
    ),
  },
}
