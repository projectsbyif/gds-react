import type { Preview } from '@storybook/react-vite'
import { GDSReactProvider } from '../src/components/GDSReactProvider/GDSReactProvider.js';

const preview: Preview = {
  parameters: {
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
      test: 'todo'
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      document.documentElement.className += ' govuk-template govuk-template--rebranded'
      document.body.className += ' govuk-template__body js-enabled govuk-frontend-supported'

      return (
        <>
          <Story />
          <GDSReactProvider />
        </>
      )
    },
  ],
};

export default preview;