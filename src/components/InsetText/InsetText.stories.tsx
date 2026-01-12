import type { Meta, StoryObj } from '@storybook/react'
import { InsetText } from './InsetText.js'
import { Paragraph } from '../Paragraph/Paragraph.js'
import { Link } from '../Link/Link.js'

const meta: Meta<typeof InsetText> = {
  title: 'GDS/InsetText',
  component: InsetText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Content to display within the inset text block',
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
    children:
      'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
  },
}

export const WithParagraph: Story = {
  args: {
    children: (
      <Paragraph>
        You must tell us immediately if your circumstances change, as this could affect your
        entitlement to benefits.
      </Paragraph>
    ),
  },
}

export const WithLink: Story = {
  args: {
    children: (
      <>
        You may be entitled to legal aid.
        <Link href="#">Check if you qualify for legal aid</Link>.
      </>
    ),
  },
}
