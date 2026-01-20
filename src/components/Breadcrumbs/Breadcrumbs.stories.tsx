import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs.js";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `The breadcrumbs component helps users to understand where they are within a website's structure and move between levels.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/breadcrumbs/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of breadcrumb items with text and href",
    },
    collapseOnMobile: {
      control: "boolean",
      description: "Show only first and last items on mobile",
    },
    inverse: {
      control: "boolean",
      description: "Use inverse style for dark backgrounds",
    },
    ariaLabel: {
      control: "text",
      description: "Aria label for the navigation",
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
    items: [
      { text: "Home", href: "#" },
      { text: "Passports, travel and living abroad", href: "#" },
      { text: "Travel abroad", href: "#" },
    ],
  },
};

export const CollapseOnMobile: Story = {
  args: {
    items: [
      { text: "Home", href: "#" },
      { text: "Environment", href: "#" },
      { text: "Rural and countryside", href: "#" },
      { text: "Rural development and land management", href: "#" },
      { text: "Economic growth in rural areas", href: "#" },
    ],
    collapseOnMobile: true,
  },
};

export const Inverse: Story = {
  args: {
    items: [
      { text: "Home", href: "#" },
      { text: "Passports, travel and living abroad", href: "#" },
      { text: "Travel abroad", href: "#" },
    ],
    inverse: true,
  },
  globals: {
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
    items: [
      { text: "Home", href: "/" },
      { text: "Passports, travel and living abroad", href: "/passports" },
      { text: "Travel abroad", href: "/travel" },
    ],
    renderLink: (item, className) => (
      <MockRouterLink href={item.href} className={className}>
        {item.text}
      </MockRouterLink>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`renderLink\` prop to integrate with your router.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<Breadcrumbs
  items={items}
  renderLink={(item, className) => (
    <NextLink href={item.href} className={className}>
      {item.text}
    </NextLink>
  )}
/>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<Breadcrumbs
  items={items}
  renderLink={(item, className) => (
    <RouterLink to={item.href} className={className}>
      {item.text}
    </RouterLink>
  )}
/>
\`\`\`

The pink dashed outline in this example indicates the custom router is being used.`,
      },
    },
  },
};
