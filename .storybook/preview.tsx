import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        dark: { name: "Dark", value: "#1d70b8" },
      },
    },
    options: {
      storySort: {
        order: [
          "Guides",
            ["Welcome - Read me first", "Router Integration"],
          "Core",
          "Page Structure",
          "Components",
          "*",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.className +=
        " govuk-template govuk-template--rebranded";
      document.body.className +=
        " govuk-template__body js-enabled govuk-frontend-supported";

      return <Story />;
    },
  ],
};

export default preview;
