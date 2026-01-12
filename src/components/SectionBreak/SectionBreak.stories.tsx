import type { Meta, StoryObj } from '@storybook/react'
import { SectionBreak } from './SectionBreak.js'
import { Paragraph } from '../Paragraph/Paragraph.js'
import { Heading } from '../Heading/Heading.js'

const meta: Meta<typeof SectionBreak> = {
  title: 'GDS/SectionBreak',
  component: SectionBreak,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['xl', 'l', 'm', 'default'],
      description: 'Size of the section break spacing',
    },
    visible: {
      control: 'boolean',
      description: 'Whether to show a visible line',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Paragraph>Content before the section break.</Paragraph>
        <Story />
        <Paragraph>Content after the section break.</Paragraph>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Medium: Story = {
  args: {
    size: 'm',
  },
}

export const Large: Story = {
  args: {
    size: 'l',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
}

export const Visible: Story = {
  args: {
    visible: true,
  },
}

export const VisibleLarge: Story = {
  args: {
    size: 'l',
    visible: true,
  },
}

export const VisibleExtraLarge: Story = {
  args: {
    size: 'xl',
    visible: true,
  },
}

export const BetweenSections: Story = {
  args: {
    size: 'l',
    visible: true,
  },
  decorators: [
    (Story) => (
      <div>
        <div>
          <Heading level={2}>Section 1</Heading>
          <Paragraph>This is the first section with some content.</Paragraph>
        </div>
        <Story />
        <div>
          <Heading level={2}>Section 2</Heading>
          <Paragraph>This is the second section with different content.</Paragraph>
        </div>
      </div>
    ),
  ],
}
