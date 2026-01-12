import type { Meta, StoryObj } from '@storybook/react'
import { PhaseBanner } from './PhaseBanner.js'
import { Link } from '../Link/Link.js'

const meta: Meta<typeof PhaseBanner> = {
  title: 'GDS/PhaseBanner',
  component: PhaseBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'text',
      description: 'Phase tag text (alpha, beta, or custom)',
    },
    children: {
      control: false,
      description: 'Content of the phase banner',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Alpha: Story = {
  args: {
    tag: 'alpha',
    children: (
      <>
        This is a new service – your <Link href="/feedback">feedback</Link> will help us to improve
        it.
      </>
    ),
  },
}

export const Beta: Story = {
  args: {
    tag: 'beta',
    children: (
      <>
        This is a new service – your <Link href="/feedback">feedback</Link> will help us to improve
        it.
      </>
    ),
  },
}

export const CustomPhase: Story = {
  args: {
    tag: 'pilot',
    children: (
      <>
        This service is currently being piloted with selected users.
        <Link href="/about-pilot">Learn more about the pilot</Link>.
      </>
    ),
  },
}
