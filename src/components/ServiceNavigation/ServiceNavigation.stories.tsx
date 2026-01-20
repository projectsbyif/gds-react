import type { Meta, StoryObj } from "@storybook/react";
import { ServiceNavigation } from "./ServiceNavigation.js";
import { Header } from "../Header/Header.js";

const meta: Meta<typeof ServiceNavigation> = {
  title: "Components/Service navigation",
  component: ServiceNavigation,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The service navigation helps users understand that they're using your service and lets them navigate around your service.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/service-navigation/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    serviceName: {
      control: "text",
      description: "The name of the service",
    },
    serviceUrl: {
      control: "text",
      description: "The URL for the service name link",
    },
    navigationItems: {
      description: "Array of navigation items",
    },
    navigationLabel: {
      control: "text",
      description: "Aria label for the navigation",
    },
    toggleLabel: {
      control: "text",
      description: "Label for the mobile menu toggle button",
    },
    ariaLabel: {
      control: "text",
      description: "Aria label for the service section",
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
    navigationItems: [
      { text: "Navigation item 1", href: "#", active: true },
      { text: "Navigation item 2", href: "#" },
      { text: "Navigation item 3", href: "#" },
      { text: "Navigation item 4", href: "#" },
    ],
  },
};

export const WithHeader: Story = {
  render: (args) => (
    <>
      <Header fullWidthBorder />
      <ServiceNavigation {...args} />
    </>
  ),
  args: {
    navigationItems: [
      { text: "Navigation item 1", href: "#", active: true },
      { text: "Navigation item 2", href: "#" },
      { text: "Navigation item 3", href: "#" },
      { text: "Navigation item 4", href: "#" },
    ],
  },
};

export const ServiceNameOnly: Story = {
  args: {
    serviceName: "Service name",
    serviceUrl: "#",
  },
};

export const ServiceNameAndNavigation: Story = {
  args: {
    serviceName: "Service name",
    serviceUrl: "#",
    navigationItems: [
      { text: "Navigation item 1", href: "#", active: true },
      { text: "Navigation item 2", href: "#" },
      { text: "Navigation item 3", href: "#" },
      { text: "Navigation item 4", href: "#" },
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
    serviceName: "Service name",
    serviceUrl: "/service-home",
    serviceNameAsChild: true,
    serviceNameChildren: <MockRouterLink>Service name</MockRouterLink>,
    navigationItems: [
      { text: "Navigation item 1", href: "/nav-1", active: true },
      { text: "Navigation item 2", href: "/nav-2" },
      { text: "Navigation item 3", href: "/nav-3" },
    ],
    renderNavLink: (item, className) => (
      <MockRouterLink href={item.href} className={className}>
        {item.active ? (
          <strong className="govuk-service-navigation__active-fallback">
            {item.text}
          </strong>
        ) : (
          item.text
        )}
      </MockRouterLink>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`serviceNameAsChild\` prop with \`serviceNameChildren\` for the service name link, and \`renderNavLink\` for navigation items to integrate with your router.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<ServiceNavigation
  serviceName="Service name"
  serviceUrl="/service-home"
  serviceNameAsChild
  serviceNameChildren={<NextLink href="/service-home">Service name</NextLink>}
  navigationItems={navItems}
  renderNavLink={(item, className) => (
    <NextLink href={item.href} className={className}>
      {item.active ? (
        <strong className="govuk-service-navigation__active-fallback">
          {item.text}
        </strong>
      ) : (
        item.text
      )}
    </NextLink>
  )}
/>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<ServiceNavigation
  serviceName="Service name"
  serviceUrl="/service-home"
  serviceNameAsChild
  serviceNameChildren={<RouterLink to="/service-home">Service name</RouterLink>}
  navigationItems={navItems}
  renderNavLink={(item, className) => (
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
