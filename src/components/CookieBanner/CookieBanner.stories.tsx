import type { Meta, StoryObj } from '@storybook/react'
import { CookieBanner } from './CookieBanner.js'

const meta: Meta<typeof CookieBanner> = {
  title: 'GDS/CookieBanner',
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the banner',
    },
    messages: {
      control: 'object',
      description: 'Array of cookie banner messages',
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
    messages: [
      {
        heading: 'Cookies on [name of service]',
        content: (
          <>
            We use some essential cookies to make this service work.
            <br />
            <br />
            We would also like to use analytics cookies so we can understand how you use the service
            and make improvements.
          </>
        ),
        actions: [
          {
            text: 'Accept analytics cookies',
            type: 'button',
            onClick: () => console.log('Accept clicked'),
          },
          {
            text: 'Reject analytics cookies',
            type: 'button',
            onClick: () => console.log('Reject clicked'),
          },
          {
            text: 'View cookies',
            type: 'link',
            href: '/cookies',
          },
        ],
      },
    ],
  },
}

export const Simple: Story = {
  args: {
    messages: [
      {
        content: 'This website uses cookies to improve your experience.',
        actions: [
          {
            text: 'Accept',
            type: 'button',
            onClick: () => console.log('Accept clicked'),
          },
          {
            text: 'Learn more',
            type: 'link',
            href: '/privacy',
          },
        ],
      },
    ],
  },
}

export const Accepted: Story = {
  args: {
    messages: [
      {
        heading: 'Cookie preferences saved',
        content:
          'You have accepted analytics cookies. You can change your preferences at any time.',
        actions: [
          {
            text: 'Hide this message',
            type: 'button',
            onClick: () => console.log('Hide clicked'),
          },
          {
            text: 'Change cookie settings',
            type: 'link',
            href: '/cookies',
          },
        ],
      },
    ],
  },
}

export const Rejected: Story = {
  args: {
    messages: [
      {
        heading: 'Cookie preferences saved',
        content: 'You have rejected analytics cookies. We will only use essential cookies.',
        actions: [
          {
            text: 'Hide this message',
            type: 'button',
            onClick: () => console.log('Hide clicked'),
          },
          {
            text: 'Change cookie settings',
            type: 'link',
            href: '/cookies',
          },
        ],
      },
    ],
  },
}

export const MultipleBanners: Story = {
  args: {
    messages: [
      {
        heading: 'Cookies on [Service name]',
        content: (
          <>
            We use essential cookies to make our services work. We would like to set additional
            cookies to understand how you use our services, remember your settings and improve our
            services.
          </>
        ),
        actions: [
          {
            text: 'Accept all cookies',
            type: 'button',
            onClick: () => console.log('Accept all clicked'),
          },
          {
            text: 'Set cookie preferences',
            type: 'link',
            href: '/cookie-preferences',
          },
        ],
      },
      {
        heading: 'Important update',
        content: 'Our privacy policy has been updated. Please review the changes.',
        actions: [
          {
            text: 'Review privacy policy',
            type: 'link',
            href: '/privacy-policy',
          },
        ],
      },
    ],
  },
}


export const Hidden: Story = {
  args: {
    messages: [
      {
        content: 'This banner is hidden',
        hidden: true,
        actions: [
          {
            text: 'Accept',
            type: 'button',
            onClick: () => console.log('Accept clicked'),
          },
        ],
      },
    ],
  },
}
