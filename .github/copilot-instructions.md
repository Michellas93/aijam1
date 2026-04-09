# Project Guidelines

## Code Style

- Use TypeScript and React function components. See [src/App.tsx](../src/App.tsx) for the main app structure and [src/components/](../src/components/) for component patterns.
- Tailwind CSS is used for styling. Custom colors are defined in [tailwind.config.js](../tailwind.config.js). Use utility classes and reference the config for color tokens.
- Prefer composition via components (see [Layout.tsx](../src/components/Layout.tsx), [TopAppBar.tsx](../src/components/TopAppBar.tsx)).
- Use PascalCase for components and camelCase for variables/functions.

## Architecture

- Main entry: [src/App.tsx](../src/App.tsx)
- Components are in [src/components/](../src/components/)
- App layout: `<Layout>` wraps the app, with sections for hero, competencies, portfolio, philosophy, contact, and footer.
- Vite is used for development and build ([vite.config.ts](../vite.config.ts)).

## Build and Test

- Install: `npm install`
- Start dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview build: `npm run preview`

## Project Conventions

- All UI is built with React and styled using Tailwind utility classes. Avoid inline styles.
- Custom colors and themes are defined in [tailwind.config.js](../tailwind.config.js).
- Example section structure: see [HeroSection.tsx](../src/components/HeroSection.tsx), [PortfolioSection.tsx](../src/components/PortfolioSection.tsx)
- Skills are documented in [docs/skills/](../../docs/skills/)

## Integration Points

- No backend integration by default; all data is static or local.
- For agent-browser CLI and Google Stitch MCP, see [docs/guides/agent-browser.md](../../docs/guides/agent-browser.md) and [docs/guides/stitch.md](../../docs/guides/stitch.md)

## Security

- No authentication or sensitive data handling in this template.
- If integrating with external APIs, do not commit secrets. Use environment variables and `.env` files (not present by default).
