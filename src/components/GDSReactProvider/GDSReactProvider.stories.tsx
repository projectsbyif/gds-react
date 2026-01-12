import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { GDSReactProvider, useGDSReact } from "./GDSReactProvider.js";

const meta: Meta<typeof GDSReactProvider> = {
  title: "Core/GDSReactProvider",
  component: GDSReactProvider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The GDSReactProvider initialises GOV.UK Frontend for your React application.

Wrap your application (or the GOV.UK-styled section) with this provider to:
- Load GOV.UK Frontend CSS
- Initialise JavaScript behaviours (accordions, character counts, etc.)
- Provide configuration to child components via context

## Setup

1. Install govuk-frontend as a peer dependency
2. Copy assets to your public folder
3. Wrap your app with GDSReactProvider
        `,
      },
    },
  },
  argTypes: {
    assetPath: {
      control: "text",
      description: "Path to GOV.UK Frontend assets",
    },
    autoInit: {
      control: "boolean",
      description: "Whether to auto-initialise on mount",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to show initialisation status
function InitStatus() {
  const { isInitialised, assetPath } = useGDSReact();
  return (
    <div className="govuk-inset-text">
      <p className="govuk-body">
        <strong>Initialised:</strong> {isInitialised ? "Yes ✓" : "No"}
      </p>
      <p className="govuk-body">
        <strong>Asset path:</strong> <code>{assetPath}</code>
      </p>
    </div>
  );
}

// Demo with GOV.UK components
function GovUKDemo() {
  return (
    <div>
      <h1 className="govuk-heading-xl">GOV.UK Frontend Demo</h1>

      <InitStatus />

      <h2 className="govuk-heading-l">Example Components</h2>

      <div className="govuk-form-group">
        <label className="govuk-label" htmlFor="input-example">
          Text input
        </label>
        <input
          className="govuk-input"
          id="input-example"
          name="input-example"
          type="text"
        />
      </div>

      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset">
          <legend className="govuk-fieldset__legend">
            Example radio buttons
          </legend>
          <div className="govuk-radios" data-module="govuk-radios">
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="radio-1"
                name="radio-group"
                type="radio"
                value="yes"
              />
              <label className="govuk-label govuk-radios__label" htmlFor="radio-1">
                Yes
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="radio-2"
                name="radio-group"
                type="radio"
                value="no"
              />
              <label className="govuk-label govuk-radios__label" htmlFor="radio-2">
                No
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <button type="submit" className="govuk-button" data-module="govuk-button">
        Submit
      </button>
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <GDSReactProvider {...args}>
      <GovUKDemo />
    </GDSReactProvider>
  ),
  args: {
    assetPath: "/assets",
    autoInit: true,
  },
};

export const CustomAssetPath: Story = {
  render: (args) => (
    <GDSReactProvider {...args}>
      <GovUKDemo />
    </GDSReactProvider>
  ),
  args: {
    assetPath: "/custom/govuk/assets",
    autoInit: true,
  },
};

// Demo showing manual reinitialisation
function DynamicContentDemo() {
  const { reinitialise } = useGDSReact();
  const [showAccordion, setShowAccordion] = useState(false);

  useEffect(() => {
    if (showAccordion) {
      // Reinitialise after dynamic content is added
      reinitialise();
    }
  }, [showAccordion, reinitialise]);

  return (
    <div>
      <h1 className="govuk-heading-xl">Dynamic Content Demo</h1>

      <p className="govuk-body">
        Click the button to dynamically add a GOV.UK accordion.
        The provider will reinitialise to enable its JavaScript behaviour.
      </p>

      <button
        type="button"
        className="govuk-button govuk-button--secondary"
        onClick={() => setShowAccordion(!showAccordion)}
      >
        {showAccordion ? "Hide" : "Show"} Accordion
      </button>

      {showAccordion && (
        <div
          className="govuk-accordion"
          data-module="govuk-accordion"
          id="accordion-demo"
          style={{ marginTop: "20px" }}
        >
          <div className="govuk-accordion__section">
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <span
                  className="govuk-accordion__section-button"
                  id="accordion-heading-1"
                >
                  Section 1
                </span>
              </h2>
            </div>
            <div
              id="accordion-content-1"
              className="govuk-accordion__section-content"
            >
              <p className="govuk-body">
                This accordion was added dynamically and initialised via
                reinitialise().
              </p>
            </div>
          </div>
          <div className="govuk-accordion__section">
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <span
                  className="govuk-accordion__section-button"
                  id="accordion-heading-2"
                >
                  Section 2
                </span>
              </h2>
            </div>
            <div
              id="accordion-content-2"
              className="govuk-accordion__section-content"
            >
              <p className="govuk-body">More content here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const DynamicContent: Story = {
  render: () => (
    <GDSReactProvider>
      <DynamicContentDemo />
    </GDSReactProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using `reinitialise()` when adding GOV.UK components dynamically.",
      },
    },
  },
};
