import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link.js";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

[Read more about how to use links on the GOV.UK Design System](https://design-system.service.gov.uk/styles/links/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "URL to navigate to",
    },
    children: {
      control: "text",
      description: "Link text content",
    },
    noVisitedState: {
      control: "boolean",
      description: "Remove visited state styling",
    },
    inverse: {
      control: "boolean",
      description: "Use inverse styling (for dark backgrounds)",
    },
    noUnderline: {
      control: "boolean",
      description: "Remove underline from link",
    },
    opensInNewTab: {
      control: "boolean",
      description: "Open link in new tab/window",
    },
    external: {
      control: "boolean",
      description: "Mark as external link with icon",
    },
    hreflang: {
      control: "text",
      description: "Language of the linked resource",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    asChild: {
      control: "boolean",
      description: "Render child element with merged props instead of an anchor",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "This is a link",
  },
};

export const NoVisitedState: Story = {
  args: {
    href: "#",
    children: "Link with no visited state",
    noVisitedState: true,
  },
};

export const OpensInNewTab: Story = {
  args: {
    href: "https://www.gov.uk",
    children: "Read more about the GOV.UK Design System (opens in new tab)",
    opensInNewTab: true,
  },
};

export const Inverse: Story = {
  args: {
    href: "#",
    children: "Inverse link for dark backgrounds",
    inverse: true,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const NoUnderline: Story = {
  args: {
    href: "#",
    children: "Link without underline",
    noUnderline: true,
  },
};

export const LanguageSwitching: Story = {
  render: () => (
    <ul className="govuk-list">
      <li>
        <Link href="#" hreflang="en">
          English
        </Link>
      </li>
      <li>
        <Link href="#" hreflang="cy">
          Cymraeg (Welsh)
        </Link>
      </li>
    </ul>
  ),
};

// asChild pattern stories - demonstrating router integration

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

export const AsChild: Story = {
  args: {
    href: "/dashboard",
    asChild: true,
    children: <MockRouterLink>Go to dashboard (custom router)</MockRouterLink>,
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`asChild\` prop to render a custom router link component. The Link component merges its props (className, href, etc.) onto the child element.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<Link href="/dashboard" asChild>
  <NextLink>Dashboard</NextLink>
</Link>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<Link href="/dashboard" asChild>
  <RouterLink to="/dashboard">Dashboard</RouterLink>
</Link>
\`\`\`

The pink dashed outline in this example indicates the custom router is being used.`,
      },
    },
  },
};

/**
 * Mock Next.js-style link with conditional prefetch.
 * Green outline = prefetch enabled, orange = prefetch disabled.
 */
const MockNextLink = ({
  href,
  children,
  ...props
}: React.ComponentProps<"a">) => {
  const shouldPrefetch = !href?.includes("logout");

  return (
    <a
      {...props}
      href={href}
      data-prefetch={shouldPrefetch}
      style={{
        outline: `2px dashed ${shouldPrefetch ? "limegreen" : "orange"}`,
        outlineOffset: "2px",
      }}
      onClick={(e) => {
        e.preventDefault();
        console.log(
          "[MockNextLink] Navigating to:",
          href,
          "| Prefetch:",
          shouldPrefetch
        );
      }}
    >
      {children}
    </a>
  );
};

export const WithNextJsLink: Story = {
  render: () => (
    <div className="govuk-body">
      <p>
        <Link href="/settings" asChild>
          <MockNextLink>Settings (prefetch enabled)</MockNextLink>
        </Link>
      </p>
      <p>
        <Link href="/logout" asChild>
          <MockNextLink>Logout (prefetch disabled)</MockNextLink>
        </Link>
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Demonstrates conditional prefetch control for Next.js-style routers. Orange outline = prefetch disabled (e.g. logout links), green = prefetch enabled.

\`\`\`tsx
import NextLink from 'next/link'

// You can wrap NextLink to add custom logic
const AppLink = ({ href, children, ...props }) => {
  const shouldPrefetch = !href?.includes('logout')
  return (
    <NextLink href={href} prefetch={shouldPrefetch} {...props}>
      {children}
    </NextLink>
  )
}

// Then use with asChild
<Link href="/logout" asChild>
  <AppLink>Logout</AppLink>
</Link>
\`\`\``,
      },
    },
  },
};

/**
 * Mock React Router link component.
 */
const MockReactRouterLink = ({
  href,
  children,
  ...props
}: React.ComponentProps<"a">) => (
  <a
    {...props}
    href={href}
    style={{ outline: "2px dashed dodgerblue", outlineOffset: "2px" }}
    onClick={(e) => {
      e.preventDefault();
      console.log("[ReactRouter] Navigating to:", href);
    }}
  >
    {children}
  </a>
);

export const WithReactRouterLink: Story = {
  args: {
    href: "/users",
    asChild: true,
    children: <MockReactRouterLink>View users (React Router)</MockReactRouterLink>,
  },
  parameters: {
    docs: {
      description: {
        story: `Use with React Router's Link component. The blue dashed outline indicates React Router is being used.

\`\`\`tsx
import { Link as RouterLink } from 'react-router-dom'

<Link href="/users" asChild>
  <RouterLink to="/users">View users</RouterLink>
</Link>
\`\`\``,
      },
    },
  },
};
