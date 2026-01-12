import type { Meta, StoryObj } from '@storybook/react'
import { TaskList } from './TaskList.js'

const meta: Meta<typeof TaskList> = {
  title: 'GDS/TaskList',
  component: TaskList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of task list items',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const applicationTasks = [
  {
    title: 'Personal details',
    href: '#',
    hint: 'Provide your name, date of birth and National Insurance number',
    status: { text: 'Completed', colour: 'green' as const },
  },
  {
    title: 'Contact details',
    href: '#',
    hint: 'Provide your address, phone number and email',
    status: { text: 'Completed', colour: 'green' as const },
  },
  {
    title: 'Employment history',
    href: '#',
    hint: 'Tell us about your current and previous employment',
    status: { text: 'In progress', colour: 'blue' as const },
  },
  {
    title: 'Upload documents',
    href: '#',
    hint: 'Upload your passport, birth certificate and other required documents',
    status: 'Not started',
  },
]


export const Default: Story = {
  args: {
    items: [
      {
        title: 'Step 1',
        href: '#',
        status: { text: 'Completed', colour: 'green' },
      },
      {
        title: 'Step 2',
        href: '#',
        status: { text: 'In progress', colour: 'blue' },
      },
      {
        title: 'Step 3',
        href: '#',
        status: 'Not started',
      },
    ],
  },
}


export const Application: Story = {
  args: {
    items: applicationTasks,
  },
}

export const VariousStatuses: Story = {
  args: {
    items: [
      {
        title: 'Task completed',
        href: '#',
        status: { text: 'Completed', colour: 'green' },
      },
      {
        title: 'Task in progress',
        href: '#',
        status: { text: 'In progress', colour: 'blue' },
      },
      {
        title: 'Task not started',
        href: '#',
        status: 'Not started',
      },
      {
        title: 'Task cannot start yet',
        href: '#',
        status: { text: 'Cannot start yet', colour: 'grey' },
      },
      {
        title: 'Urgent task',
        href: '#',
        status: { text: 'Urgent', colour: 'red' },
      },
      {
        title: 'Task needs review',
        href: '#',
        status: { text: 'Needs review', colour: 'yellow' },
      },
    ],
  },
}
