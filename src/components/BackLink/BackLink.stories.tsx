import type { Meta, StoryObj } from "@storybook/react";
import { BackLink } from "./BackLink.js";

const meta: Meta<typeof BackLink> = {
  title: "Components/Back link",
  component: BackLink,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Use the back link component to help users go back to the previous page in a multi-page transaction.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/back-link/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "The URL the back link points to",
    },
    children: {
      control: "text",
      description: 'The link text (defaults to "Back")',
    },
    inverse: {
      control: "boolean",
      description: "Use inverse style for dark backgrounds",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
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
    href: "#",
  },
};

export const Inverse: Story = {
  args: {
    href: "#",
    inverse: true,
  },
  globals: {
    // 👇 Override background value for this story
    backgrounds: { value: "dark" },
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
    href: "/previous-page",
    asChild: true,
    children: <MockRouterLink>Back</MockRouterLink>,
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`asChild\` prop to integrate with your router.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<BackLink href="/previous-page" asChild>
  <NextLink href="/previous-page">Back</NextLink>
</BackLink>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<BackLink href="/previous-page" asChild>
  <RouterLink to="/previous-page">Back</RouterLink>
</BackLink>
\`\`\`

The pink dashed outline in this example indicates the custom router is being used.`,
      },
    },
  },
};
