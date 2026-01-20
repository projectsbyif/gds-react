import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer.js";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The footer provides copyright, licensing and other information about your service.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/footer/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    navigation: {
      control: "object",
      description: "Navigation sections with links",
    },
    meta: {
      control: "object",
      description: "Meta section with inline links and custom content",
    },
    contentLicence: {
      control: "object",
      description: "Custom content licence text or HTML",
    },
    copyright: {
      control: "object",
      description: "Custom copyright text or HTML",
    },
    containerClassName: {
      control: "text",
      description: "Class name for the container",
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
  args: {},
};

export const WithMetaLinks: Story = {
  args: {
    meta: {
      items: [
        { text: "Item 1", href: "#" },
        { text: "Item 2", href: "#" },
        { text: "Item 3", href: "#" },
      ],
    },
  },
};

export const WithNavigation: Story = {
  args: {
    navigation: [
      {
        title: "Two column list",
        width: "two-thirds",
        columns: 2,
        items: [
          { text: "Navigation item 1", href: "#" },
          { text: "Navigation item 2", href: "#" },
          { text: "Navigation item 3", href: "#" },
          { text: "Navigation item 4", href: "#" },
          { text: "Navigation item 5", href: "#" },
          { text: "Navigation item 6", href: "#" },
        ],
      },
      {
        title: "Single column list",
        width: "one-third",
        items: [
          { text: "Navigation item 1", href: "#" },
          { text: "Navigation item 2", href: "#" },
          { text: "Navigation item 3", href: "#" },
        ],
      },
    ],
  },
};

export const Full: Story = {
  args: {
    navigation: [
      {
        title: "Services and information",
        width: "two-thirds",
        columns: 2,
        items: [
          { text: "Benefits", href: "#" },
          { text: "Births, deaths, marriages and care", href: "#" },
          { text: "Business and self-employed", href: "#" },
          { text: "Childcare and parenting", href: "#" },
          { text: "Citizenship and living in the UK", href: "#" },
          { text: "Crime, justice and the law", href: "#" },
          { text: "Disabled people", href: "#" },
          { text: "Driving and transport", href: "#" },
          { text: "Education and learning", href: "#" },
          { text: "Employing people", href: "#" },
          { text: "Environment and countryside", href: "#" },
          { text: "Housing and local services", href: "#" },
          { text: "Money and tax", href: "#" },
          { text: "Passports, travel and living abroad", href: "#" },
          { text: "Visas and immigration", href: "#" },
          { text: "Working, jobs and pensions", href: "#" },
        ],
      },
      {
        title: "Departments and policy",
        width: "one-third",
        items: [
          { text: "How government works", href: "#" },
          { text: "Departments", href: "#" },
          { text: "Worldwide", href: "#" },
          { text: "Policies", href: "#" },
          { text: "Publications", href: "#" },
          { text: "Announcements", href: "#" },
        ],
      },
    ],
    meta: {
      items: [
        { text: "Help", href: "#" },
        { text: "Cookies", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Terms and conditions", href: "#" },
        { text: "Rhestr o Wasanaethau Cymraeg", href: "#" },
      ],
      visuallyHiddenTitle: "Support links",
    },
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
    navigation: [
      {
        title: "Services and information",
        width: "two-thirds",
        columns: 2,
        items: [
          { text: "Benefits", href: "/benefits" },
          { text: "Business and self-employed", href: "/business" },
          { text: "Education and learning", href: "/education" },
          { text: "Driving and transport", href: "/driving" },
        ],
      },
      {
        title: "Departments",
        width: "one-third",
        items: [
          { text: "How government works", href: "/government" },
          { text: "Departments", href: "/departments" },
        ],
      },
    ],
    meta: {
      items: [
        { text: "Help", href: "/help" },
        { text: "Cookies", href: "/cookies" },
        { text: "Contact", href: "/contact" },
      ],
      visuallyHiddenTitle: "Support links",
    },
    renderNavLink: (item, className) => (
      <MockRouterLink href={item.href} className={className}>
        {item.text}
      </MockRouterLink>
    ),
    renderMetaLink: (item, className) => (
      <MockRouterLink href={item.href} className={className}>
        {item.text}
      </MockRouterLink>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`renderNavLink\` prop for navigation section links and \`renderMetaLink\` prop for meta links to integrate with your router.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<Footer
  navigation={navigation}
  meta={meta}
  renderNavLink={(item, className) => (
    <NextLink href={item.href} className={className}>
      {item.text}
    </NextLink>
  )}
  renderMetaLink={(item, className) => (
    <NextLink href={item.href} className={className}>
      {item.text}
    </NextLink>
  )}
/>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<Footer
  navigation={navigation}
  meta={meta}
  renderNavLink={(item, className) => (
    <RouterLink to={item.href} className={className}>
      {item.text}
    </RouterLink>
  )}
  renderMetaLink={(item, className) => (
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
