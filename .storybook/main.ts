import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: "@storybook/react-vite",
  viteFinal: (config) => {
    return {
      ...config,
      css: {
        ...config.css,
        preprocessorOptions: {
          ...config.css?.preprocessorOptions,
          scss: {
            ...config.css?.preprocessorOptions?.scss,
            // Silence Dart Sass deprecation warnings from govuk-frontend
            // https://frontend.design-system.service.gov.uk/import-css/#silence-deprecation-warnings-from-dependencies-in-dart-sass
            quietDeps: true,
          },
        },
      },
    };
  },
};
export default config;