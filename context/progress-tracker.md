# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Complete

## Current Goal

- Editor chrome: top navbar and project sidebar (`context/feature-specs/02-editor.md`)

## Completed

- Installed and configured shadcn/ui (base-nova, Base UI, neutral tokens, CSS variables).
- Added Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea in `components/ui/`. Generated files were not edited after install.
- Installed lucide-react (also the configured icon library).
- Added `lib/utils.ts`, which re-exports `cn()` for merging Tailwind classes.
- Dark theme is the active theme: `dark` is set on `<html>`, so the `.dark` tokens in `app/globals.css` apply. `color-scheme: dark` is set with those tokens.
- Added `components/editor/editor-navbar.tsx`: fixed-height bar (`h-12`) with left, center, and right sections. The left section toggles the sidebar with `PanelLeftOpen` / `PanelLeftClose`. The center and right sections are empty.
- Added `components/editor/project-sidebar.tsx`: fixed overlay that slides in from the left and does not push the canvas. Header is "Projects" plus a close button. Tabs are My Projects and Shared, both with an empty placeholder. A full-width New Project button with a Plus icon sits at the bottom.
- Dialog pattern stays the installed Dialog primitive: `DialogTitle`, `DialogDescription`, and `DialogFooter`, styled with the `globals.css` tokens. No product dialog was added. New Project does not open one.

## In Progress

- None.

## Next Up

- Next feature spec after the editor chrome.

## Open Questions

- None.

## Architecture Decisions

- UI primitives come from shadcn/ui via the CLI and live in `components/ui/`. They stay unmodified after install.
- The component base is Base UI (`@base-ui/react`), style `base-nova`, icon library lucide.
- Tailwind classes are merged with `cn()` from `lib/utils.ts` (the `cn` package). Generated components import `cn` from that package directly.
- The app is dark by default. Light `:root` tokens remain in `globals.css` for the shadcn theme file, and the `dark` class on `<html>` is what the UI uses.
- Geist Sans and Geist Mono are wired as `--font-sans` and `--font-mono`, which the shadcn theme expects.
- Editor screens live in the `app/(editor)/` route group. `app/(editor)/layout.tsx` owns sidebar open state and frames every page in that group with the navbar and the project sidebar. `/` is `app/(editor)/page.tsx`.
- The project sidebar is `position: fixed` and slides with a transform. It overlays the canvas. Opening or closing it does not change the canvas size or position.

## Session Notes

- Home screen is the editor chrome around the centered "Ghost AI" canvas.
- Checked in the browser on desktop (1280×800) and mobile (390×844): the navbar toggle and the sidebar close button open and close the panel, the canvas stays full width, both tabs show their empty states, New Project is full width with a Plus icon and does not open a dialog, and the closed sidebar is off-screen with no horizontal scroll.
- `npm run build` passes. ESLint and `tsc --noEmit` pass for the new editor files.
