# Clinique Dentaire Allard et Associés

Professional website for Clinique Dentaire Allard et Associés, a family and multidisciplinary dental clinic in Salaberry-de-Valleyfield, Quebec.

## Tech Stack

- Gatsby 5
- React 19
- TypeScript
- Gatsby Image / Sharp for optimized responsive images
- Gatsby Sitemap for SEO indexing support

## Getting Started

Install dependencies:

```bash
yarn install
```

Start the local development server:

```bash
yarn develop
```

The site will usually be available at `http://localhost:8000`.

## Available Scripts

```bash
yarn develop
yarn build
yarn serve
yarn typecheck
yarn format
yarn test
```

- `yarn develop` starts Gatsby in development mode.
- `yarn build` creates the production build in `public/`.
- `yarn serve` serves the production build locally.
- `yarn typecheck` runs TypeScript checks.
- `yarn format` formats source files with Prettier.
- `yarn test` runs type checks and a production build.

## Content Notes

- The homepage content is in French.
- SEO metadata and structured data are managed through the Gatsby Head API.
- The clinic address links to Maps, using Apple Maps on iOS and Google Maps on other platforms.
- The hero image is stored in `src/images/hero-clinique-allard.jpg` and processed by Gatsby.

## Production Build

To verify the production site locally:

```bash
yarn test
```

Then serve the generated build:

```bash
yarn serve
```
