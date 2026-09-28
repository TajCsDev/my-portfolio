# Taj Almusawi — Portfolio

A responsive React + TypeScript portfolio styled with Tailwind CSS v4.

## Run locally

From this directory, run `npm install`, then `npm run dev`.

`npm run build` creates the production site in `dist`. `npm run lint` checks the code.

## Where to make changes

- `src/data/portfolio.ts`: personal details, skills, projects, screenshots, and contact links.
- `src/components/ProjectCard.tsx`: typed cards, screenshot selection, expandable contributions.
- `src/components/SectionHeading.tsx`: reusable heading with typed props.
- `src/App.tsx`: sections, mobile navigation, project filter, theme, and email-copy action.
- `src/index.css`: Tailwind import, theme variables, shared component styles.

## How it works

Arrays are rendered with `.map()`. Stable IDs identify cards. Props pass each project into its card. `useState` tracks the theme, menu, category, and screenshot. `useEffect` persists the theme and clears the copy message. Filters derive the visible list without modifying project data.

CSS uses `@layer base` and `@layer components`, so Tailwind utilities can override component defaults. Responsive prefixes adapt grids and navigation to wider screens. Both themes share semantic color variables. Keyboard focus, skip navigation, descriptive image text, and reduced-motion support are included.

## Content notes

Information and screenshots come from the supplied local portfolio. Vista is a team project with an inactive live API. The industrial system is in progress. TruthGuard uses AI-assisted development. Contact opens an email client; there is no message-sending backend. No live demo or resume link was invented.
