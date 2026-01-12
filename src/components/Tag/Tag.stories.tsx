import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag.js'

const meta: Meta<typeof Tag> = {
  title: 'GDS/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Tag text content',
    },
    colour: {
      control: 'radio',
      options: [
        'grey',
        'green',
        'turquoise',
        'blue',
        'light-blue',
        'purple',
        'pink',
        'red',
        'orange',
        'yellow',
      ],
      description: 'Tag colour variant',
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
    children: 'Draft',
  },
}

export const Grey: Story = {
  args: {
    children: 'Inactive',
    colour: 'grey',
  },
}

export const Green: Story = {
  args: {
    children: 'Completed',
    colour: 'green',
  },
}

export const Red: Story = {
  args: {
    children: 'Urgent',
    colour: 'red',
  },
}

export const Blue: Story = {
  args: {
    children: 'In progress',
    colour: 'blue',
  },
}

export const Orange: Story = {
  args: {
    children: 'Warning',
    colour: 'orange',
  },
}

export const Purple: Story = {
  args: {
    children: 'Review',
    colour: 'purple',
  },
}

export const AllColours: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Tag colour="grey">Grey</Tag>
      <Tag colour="green">Green</Tag>
      <Tag colour="turquoise">Turquoise</Tag>
      <Tag colour="blue">Blue</Tag>
      <Tag colour="light-blue">Light blue</Tag>
      <Tag colour="purple">Purple</Tag>
      <Tag colour="pink">Pink</Tag>
      <Tag colour="red">Red</Tag>
      <Tag colour="orange">Orange</Tag>
      <Tag colour="yellow">Yellow</Tag>
    </div>
  ),
}
