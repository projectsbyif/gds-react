import type { Meta, StoryObj } from "@storybook/react";
import { CookieBanner } from "./CookieBanner.js";
import { Link } from "../Link/Link.js";

const meta: Meta<typeof CookieBanner> = {
  title: "Components/Cookie banner",
  component: CookieBanner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Allow users to accept or reject cookies which are not essential to making your service work.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/cookie-banner/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    serviceName: {
      control: "text",
      description: "Name of the service for the aria-label",
    },
    messages: {
      control: "object",
      description: "Array of messages to display in the banner",
    },
    ariaLabel: {
      control: "text",
      description: "Custom aria-label for the banner",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    serviceName: "[name of service]",
    messages: [
      {
        heading: "Cookies on [name of service]",
        content: (
          <>
            We use some essential cookies to make this service work.
            <br />
            <br />
            We'd also like to use analytics cookies so we can understand how you
            use the service and make improvements.
          </>
        ),
        actions: [
          { text: "Accept analytics cookies", type: "button" },
          { text: "Reject analytics cookies", type: "button" },
          { text: "View cookies", type: "link", href: "#" },
        ],
      },
    ],
  },
};

export const AcceptedConfirmation: Story = {
  args: {
    serviceName: "[name of service]",
    messages: [
      {
        content: (
          <>
            You've accepted analytics cookies. You can{" "}
            <Link href="#">change your cookie settings</Link> at any time.
          </>
        ),
        actions: [{ text: "Hide cookie message", type: "button" }],
        role: "alert",
      },
    ],
  },
};

export const RejectedConfirmation: Story = {
  args: {
    serviceName: "[name of service]",
    messages: [
      {
        content: (
          <>
            You've rejected analytics cookies. You can{" "}
            <Link href="#">change your cookie settings</Link> at any time.
          </>
        ),
        actions: [{ text: "Hide cookie message", type: "button" }],
        role: "alert",
      },
    ],
  },
};

export const ClientSideWithAllMessages: Story = {
  args: {
    serviceName: "[name of service]",
    messages: [
      {
        heading: "Cookies on [name of service]",
        content: (
          <>
            We use some essential cookies to make this service work.
            <br />
            <br />
            We'd also like to use analytics cookies so we can understand how you
            use the service and make improvements.
          </>
        ),
        actions: [
          { text: "Accept analytics cookies", type: "button" },
          { text: "Reject analytics cookies", type: "button" },
          { text: "View cookies", type: "link", href: "#" },
        ],
      },
      {
        content: (
          <>
            You've accepted analytics cookies. You can{" "}
            <Link href="#">change your cookie settings</Link> at any time.
          </>
        ),
        actions: [{ text: "Hide cookie message", type: "button" }],
        role: "alert",
        hidden: true,
      },
      {
        content: (
          <>
            You've rejected analytics cookies. You can{" "}
            <Link href="#">change your cookie settings</Link> at any time.
          </>
        ),
        actions: [{ text: "Hide cookie message", type: "button" }],
        role: "alert",
        hidden: true,
      },
    ],
  },
};

// Custom router integration stories

/**
 * Mock router link component that simulates Next.js Link behavior.
 * The pink dashed outline indicates the custom router is being used.
 */
const MockRouterLink = ({
  href,
  children,
  ...props
}: React.ComponentProps<"a">) => (
  <a
    {...props}
    href={href}
    style={{ outline: "2px dashed hotpink", outlineOffset: "2px" }}
    onClick={(e) => {
      e.preventDefault();
      console.log("[MockRouter] Navigating to:", href);
    }}
  >
    {children}
  </a>
);

export const WithCustomRouter: Story = {
  args: {
    serviceName: "[name of service]",
    messages: [
      {
        heading: "Cookies on [name of service]",
        content: (
          <>
            We use some essential cookies to make this service work.
            <br />
            <br />
            We'd also like to use analytics cookies so we can understand how you
            use the service and make improvements.
          </>
        ),
        actions: [
          { text: "Accept analytics cookies", type: "button" },
          { text: "Reject analytics cookies", type: "button" },
          { text: "View cookies", type: "link", href: "/cookies" },
        ],
      },
    ],
    renderActionLink: (action, className) => (
      <MockRouterLink href={action.href || "#"} className={className}>
        {action.text}
      </MockRouterLink>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`renderActionLink\` prop to integrate with your router for link-type actions.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<CookieBanner
  serviceName="My Service"
  messages={messages}
  renderActionLink={(action, className) => (
    <NextLink href={action.href || '#'} className={className}>
      {action.text}
    </NextLink>
  )}
/>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<CookieBanner
  serviceName="My Service"
  messages={messages}
  renderActionLink={(action, className) => (
    <RouterLink to={action.href || '#'} className={className}>
      {action.text}
    </RouterLink>
  )}
/>
\`\`\`

The pink dashed outline in this example indicates the custom router is being used.`,
      },
    },
  },
};
