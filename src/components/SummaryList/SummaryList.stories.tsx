import type { Meta, StoryObj } from "@storybook/react";
import { SummaryList } from "./SummaryList.js";

const meta: Meta<typeof SummaryList> = {
  title: "Components/Summary list",
  component: SummaryList,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Use the summary list to summarise information, for example, a user's responses at the end of a form.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/summary-list/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    rows: {
      description: "Array of key-value rows",
    },
    noBorder: {
      control: "boolean",
      description: "Remove borders from the summary list",
    },
    card: {
      description: "Wrap the summary list in a card with a title",
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
    rows: [
      {
        key: "Name",
        value: "Sarah Philips",
        actions: [{ href: "#", text: "Change", visuallyHiddenText: "name" }],
      },
      {
        key: "Date of birth",
        value: "5 January 1978",
        actions: [
          { href: "#", text: "Change", visuallyHiddenText: "date of birth" },
        ],
      },
      {
        key: "Address",
        value: (
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        ),
        actions: [{ href: "#", text: "Change", visuallyHiddenText: "address" }],
      },
      {
        key: "Contact details",
        value: (
          <>
            07700 900457
            <br />
            sarah.phillips@example.com
          </>
        ),
        actions: [
          { href: "#", text: "Change", visuallyHiddenText: "contact details" },
        ],
      },
    ],
  },
};

export const WithoutActions: Story = {
  args: {
    rows: [
      {
        key: "Name",
        value: "Sarah Philips",
      },
      {
        key: "Date of birth",
        value: "5 January 1978",
      },
      {
        key: "Address",
        value: (
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        ),
      },
      {
        key: "Contact details",
        value: (
          <>
            07700 900457
            <br />
            sarah.phillips@example.com
          </>
        ),
      },
    ],
  },
};

export const MixedActions: Story = {
  args: {
    rows: [
      {
        key: "Name",
        value: "Sarah Philips",
        actions: [{ href: "#", text: "Change", visuallyHiddenText: "name" }],
      },
      {
        key: "Date of birth",
        value: "5 January 1978",
        actions: [
          { href: "#", text: "Change", visuallyHiddenText: "date of birth" },
        ],
      },
      {
        key: "Address",
        value: (
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        ),
        actions: [{ href: "#", text: "Change", visuallyHiddenText: "address" }],
      },
      {
        key: "Contact details",
        value: (
          <>
            07700 900457
            <br />
            sarah.phillips@example.com
          </>
        ),
      },
    ],
  },
};

export const WithoutBorders: Story = {
  args: {
    noBorder: true,
    rows: [
      {
        key: "Name",
        value: "Sarah Philips",
      },
      {
        key: "Date of birth",
        value: "5 January 1978",
      },
      {
        key: "Address",
        value: (
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        ),
      },
      {
        key: "Contact details",
        value: (
          <>
            07700 900457
            <br />
            sarah.phillips@example.com
          </>
        ),
      },
    ],
  },
};

export const WithMissingInformation: Story = {
  args: {
    rows: [
      {
        key: "Name",
        value: "Sarah Philips",
        actions: [{ href: "#", text: "Change", visuallyHiddenText: "name" }],
      },
      {
        key: "Date of birth",
        value: "5 January 1978",
        actions: [
          { href: "#", text: "Change", visuallyHiddenText: "date of birth" },
        ],
      },
      {
        key: "Address",
        value: (
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        ),
        actions: [{ href: "#", text: "Change", visuallyHiddenText: "address" }],
      },
      {
        key: "Contact details",
        value: <span className="govuk-hint">No contact details provided</span>,
        actions: [
          { href: "#", text: "Enter", visuallyHiddenText: "contact details" },
        ],
      },
    ],
  },
};

export const SummaryCard: Story = {
  args: {
    card: {
      title: "Lead tenant",
    },
    rows: [
      {
        key: "Age",
        value: "38",
      },
      {
        key: "Nationality",
        value: "UK national resident in UK",
      },
      {
        key: "Working situation",
        value: "Part time – Loss of hours",
      },
    ],
  },
};

export const SummaryCardWithActions: Story = {
  args: {
    card: {
      title: "Lead tenant",
      actions: [
        { href: "#", text: "Delete", visuallyHiddenText: "lead tenant" },
        { href: "#", text: "Change", visuallyHiddenText: "lead tenant" },
      ],
    },
    rows: [
      {
        key: "Age",
        value: "38",
      },
      {
        key: "Nationality",
        value: "UK national resident in UK",
      },
      {
        key: "Working situation",
        value: "Part time – Loss of hours",
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
    card: {
      title: "Lead tenant",
      actions: [
        { href: "/delete/tenant", text: "Delete", visuallyHiddenText: "lead tenant" },
        { href: "/change/tenant", text: "Change", visuallyHiddenText: "lead tenant" },
      ],
    },
    rows: [
      {
        key: "Name",
        value: "Sarah Philips",
        actions: [{ href: "/change/name", text: "Change", visuallyHiddenText: "name" }],
      },
      {
        key: "Date of birth",
        value: "5 January 1978",
        actions: [
          { href: "/change/dob", text: "Change", visuallyHiddenText: "date of birth" },
        ],
      },
      {
        key: "Address",
        value: (
          <>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </>
        ),
        actions: [{ href: "/change/address", text: "Change", visuallyHiddenText: "address" }],
      },
    ],
    renderRowActionLink: (action, className) => (
      <MockRouterLink href={action.href} className={className}>
        {action.text}
        {action.visuallyHiddenText && (
          <span className="govuk-visually-hidden"> {action.visuallyHiddenText}</span>
        )}
      </MockRouterLink>
    ),
    renderCardActionLink: (action, className) => (
      <MockRouterLink href={action.href} className={className}>
        {action.text}
        {action.visuallyHiddenText && (
          <span className="govuk-visually-hidden"> {action.visuallyHiddenText}</span>
        )}
      </MockRouterLink>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`renderRowActionLink\` prop for row action links and \`renderCardActionLink\` prop for card action links to integrate with your router.

\`\`\`tsx
// With Next.js
import NextLink from 'next/link'

<SummaryList
  rows={rows}
  card={card}
  renderRowActionLink={(action, className) => (
    <NextLink href={action.href} className={className}>
      {action.text}
      {action.visuallyHiddenText && (
        <span className="govuk-visually-hidden"> {action.visuallyHiddenText}</span>
      )}
    </NextLink>
  )}
  renderCardActionLink={(action, className) => (
    <NextLink href={action.href} className={className}>
      {action.text}
      {action.visuallyHiddenText && (
        <span className="govuk-visually-hidden"> {action.visuallyHiddenText}</span>
      )}
    </NextLink>
  )}
/>

// With React Router
import { Link as RouterLink } from 'react-router-dom'

<SummaryList
  rows={rows}
  card={card}
  renderRowActionLink={(action, className) => (
    <RouterLink to={action.href} className={className}>
      {action.text}
    </RouterLink>
  )}
  renderCardActionLink={(action, className) => (
    <RouterLink to={action.href} className={className}>
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
