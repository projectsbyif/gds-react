import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from './PasswordInput.js'

const meta: Meta<typeof PasswordInput> = {
  title: 'GDS/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the password input',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input',
    },
    label: {
      control: 'text',
      description: 'Label text for the password input',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    showButtonText: {
      control: 'text',
      description: 'Text for show password button',
    },
    hideButtonText: {
      control: 'text',
      description: 'Text for hide password button',
    },
    showButtonAriaLabel: {
      control: 'text',
      description: 'ARIA label for show password button',
    },
    hideButtonAriaLabel: {
      control: 'text',
      description: 'ARIA label for hide password button',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when input value changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: (value: String) => console.log('Password changed:', value),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'password',
    name: 'password',
    label: 'Password',
  },
}

export const WithHint: Story = {
  args: {
    id: 'new-password',
    name: 'new-password',
    label: 'Create a password',
    hint: 'Your password must be at least 8 characters long and contain a mix of letters, numbers and symbols',
  },
}

export const WithError: Story = {
  args: {
    id: 'password-error',
    name: 'password',
    label: 'Password',
    error: 'Enter your password',
  },
}

export const WeakPasswordError: Story = {
  args: {
    id: 'weak-password',
    name: 'password',
    label: 'Create a password',
    hint: 'Your password must be at least 8 characters long',
    error: 'Password is too weak. Use a mix of letters, numbers and symbols',
  },
}

export const LoginForm: Story = {
  args: {
    id: 'login-password',
    name: 'login-password',
    label: 'Password',
    hint: 'Enter the password for your account',
  },
}

export const ConfirmPassword: Story = {
  args: {
    id: 'confirm-password',
    name: 'confirm-password',
    label: 'Confirm password',
    hint: 'Enter the same password as above',
  },
}

export const CustomButtonText: Story = {
  args: {
    id: 'custom-password',
    name: 'password',
    label: 'Password',
    showButtonText: 'Reveal',
    hideButtonText: 'Conceal',
    showButtonAriaLabel: 'Show password',
    hideButtonAriaLabel: 'Hide password',
  },
}
