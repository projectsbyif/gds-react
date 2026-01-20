# gds-react

A React component library implementing the [GOV.UK Design System](https://design-system.service.gov.uk/).

> **Note:** This library is NOT maintained, endorsed, or supported by the UK Government. It is a community implementation of the GOV.UK Design System patterns.


## Components

View the full documentation and component examples in [Storybook](https://projectsbyif.github.io/gds-react/).


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
- `sass` or `sass-embedded` (for your bundler to process GOV.UK Frontend styles)

## Setup

Components load GOV.UK Frontend styles and JavaScript automatically. For styling to work correctly, add these CSS classes to your HTML document:

```html
<!DOCTYPE html>
<html lang="en" class="govuk-template govuk-template--rebranded">
  <head>...</head>
  <body class="govuk-template__body js-enabled govuk-frontend-supported">
    <!-- Your React app -->
  </body>
</html>
```

**Required classes:**
- `govuk-template` and `govuk-template--rebranded` on `<html>` - Base template styles and refreshed GOV.UK branding (v5.10.0+)
- `govuk-template__body` on `<body>` - Body template styles
- `js-enabled` on `<body>` - Required for JS-dependent components (Accordion, Tabs, etc.)
- `govuk-frontend-supported` on `<body>` - Indicates modern JavaScript support

If you are approved to use GOV.UK assets, follow [this guide](https://frontend.design-system.service.gov.uk/import-font-and-images-assets/) to set up font and image assets.

## Router Integration

Use the `asChild` prop on Link components to integrate with your router (Next.js, React Router, TanStack Router, etc.):

### Next.js App Router

```tsx
import { Link } from "@projectsbyif/gds-react";
import NextLink from "next/link";

<Link href="/dashboard" asChild>
  <NextLink>Dashboard</NextLink>
</Link>
```

### React Router

```tsx
import { Link } from "@projectsbyif/gds-react";
import { Link as RouterLink } from "react-router-dom";

<Link href="/users" asChild>
  <RouterLink to="/users">View users</RouterLink>
</Link>
```

### Multi-link Components

For components with multiple links (Breadcrumbs, Footer, etc.), use the `renderLink` prop:

```tsx
import { Breadcrumbs } from "@projectsbyif/gds-react";
import NextLink from "next/link";

<Breadcrumbs
  items={[
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
  ]}
  renderLink={(item, className) => (
    <NextLink href={item.href} className={className}>
      {item.text}
    </NextLink>
  )}
/>
```

See the [Router Integration guide](https://projectsbyif.github.io/gds-react/?path=/docs/guides-router-integration--docs) for more examples with different frameworks.

## GDS Transport Font Usage

The GDS Transport font is only licensed for use on gov.uk subdomains. If you're not building for gov.uk, the library will fall back to Arial.

[Read more about GDS Transport usage](https://design-system.service.gov.uk/styles/typeface/)

## License

ISC
