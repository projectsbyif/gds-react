# gds-react

A React component library implementing the [GOV.UK Design System](https://design-system.service.gov.uk/).

> **Note:** This library is NOT maintained, endorsed, or supported by the UK Government. It is a community implementation of the GOV.UK Design System patterns.

## Installation

Install using your preferred package manager.
```bash
pnpm add @projectsbyif/gds-react govuk-frontend
npm i @projectsbyif/gds-react govuk-frontend
yarn add @projectsbyif/gds-react govuk-frontend
```

## Requirements

- React 19+
- react-dom 19+
- govuk-frontend 5+

## Quick Start

Wrap your application with `GDSReactProvider`:

```tsx
import { GDSReactProvider } from "@projectsbyif/gds-react";

function App() {
  return (
    <GDSReactProvider assets="/assets">
      <YourApplication />
    </GDSReactProvider>
  );
}
```

If you are approved to use GOV.UK assets, follow [this guide](https://frontend.design-system.service.gov.uk/import-font-and-images-assets/) to set up font and image assets.

## Components

View the full documentation and component examples in [Storybook](https://projectsbyif.github.io/gds-react/).

## Font Usage

The GDS Transport font is only licensed for use on gov.uk subdomains. If you're not building for gov.uk, the library will fall back to Arial.

[Read more about GDS Transport usage](https://design-system.service.gov.uk/styles/typeface/)

## License

ISC
