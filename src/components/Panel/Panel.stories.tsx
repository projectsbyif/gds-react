import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./Panel.js";

const meta: Meta<typeof Panel> = {
  title: "Components/Panel",
  component: Panel,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `The panel component is a visible container used on confirmation or results pages to highlight important content.

[Read more about how to use this component on the GOV.UK Design System](https://design-system.service.gov.uk/components/panel/)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The panel heading text",
    },
    children: {
      description: "The panel body content",
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
    title: "Application complete",
    children: (
      <>
        Your reference number
        <br />
        <strong>HDJ2123F</strong>
      </>
    ),
  },
};
