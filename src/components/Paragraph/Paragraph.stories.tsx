import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './Paragraph.js'
import { Link } from '../Link/Link.js'

const meta: Meta<typeof Paragraph> = {
  title: 'GDS/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content to display in the paragraph',
    },
    size: {
      control: 'radio',
      options: ['l', 'm', 's'],
      description: 'Size of the paragraph text',
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
    children: 'This is a standard paragraph of text that provides information to the user.',
  },
}

export const Small: Story = {
  args: {
    size: 's',
    children: 'This is a small paragraph of text for footnotes.',
  },
}

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'This is a medium paragraph of text for normal written text.',
  },
}

export const Large: Story = {
  args: {
    size: 'l',
    children: 'This is a large paragraph of text for emphasis.',
  },
}

export const WithLink: Story = {
  args: {
    children: (
      <>
        For more information about criminal damage proceedings, see the {" "}
        <Link href="#">criminal damage guidance</Link>.
      </>
    ),
  },
}
