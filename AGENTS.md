# Project Overview

This project is a single-page React application template for rapid prototyping and agent-driven UI experiments.

**Tech stack:**

- React 19.2.4
- TypeScript ~6.0.2
- Vite ^8.0.4
- Tailwind CSS ^4.2.2

**App type:** SPA (Single Page Application)

# Commands

| Command         | Description              | When to use               |
| --------------- | ------------------------ | ------------------------- |
| npm install     | Install dependencies     | After cloning or updating |
| npm run dev     | Start development server | Local development         |
| npm run build   | Build for production     | Before deployment         |
| npm run lint    | Run ESLint on all files  | Before commit/review      |
| npm run preview | Preview production build | Final check before deploy |

# Project Structure

- /src/main.tsx — App entry point, renders <App />
- /src/App.tsx — Main app layout and section composition
- /src/components/ — All UI sections as React function components
- /src/assets/ — Static assets (images, icons)
- /public/ — Static files served as-is
- /docs/ — Project documentation, guides, skills
- /tailwind.config.js — Tailwind CSS config, custom colors
- /vite.config.ts — Vite build config
- /eslint.config.js — ESLint rules
- /tsconfig.json, /tsconfig.app.json — TypeScript config
- /package.json — Scripts, dependencies
- /README.md — User-facing project instructions

# Architecture

- Data flows from /src/main.tsx (React root) → /src/App.tsx (layout) → section components in /src/components/.
- No routing or state management libraries; all content is static or local state.
- UI is composed via React function components and styled with Tailwind utility classes.
- No backend integration by default; all data is static or local.
- No global state, context, or Redux/MobX.

# Conventions

- TypeScript strictness: enforced via tsconfig (noUnusedLocals, noUnusedParameters, etc.)
- Use PascalCase for components, camelCase for variables/functions.
- Tailwind CSS for all styling; custom colors in tailwind.config.js.
- No inline styles; use utility classes.
- Example preferred style:

```tsx
function Example() {
	return <div className="bg-surface p-4 rounded-md">Hello!</div>;
}
```

# Boundaries

✅ Always do:

- Run `npm run lint` before commit
- Use only utility classes for styling
- Keep all UI in /src/components/

⚠️ Ask first:

- Adding new dependencies or changing config files
- Introducing routing or global state

🚫 Never do:

- Commit secrets or .env files
- Delete config or vendor files
- Add inline styles or break component structure
