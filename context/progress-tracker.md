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
- Added `components/editor/editor-navbar.tsx`: fixed-height bar with left, center, and right sections. The left section toggles the sidebar with `PanelLeftOpen` / `PanelLeftClose`. The right section is empty. The component is not mounted.
- Added `components/editor/project-sidebar.tsx`: overlay sidebar with `isOpen` and `onClose`. Header is "Projects" plus a close button. Tabs are My Projects and Shared, both with an empty placeholder. A full-width New Project button with a Plus icon sits at the bottom. The component is not mounted.
- Dialog pattern stays the installed Dialog primitive: `DialogTitle`, `DialogDescription`, and `DialogFooter`, styled with the `globals.css` tokens. No product dialog was added.

## In Progress

- None.

## Next Up

- Next feature spec after the editor chrome.

## Open Questions

- `context/ui-context.md` still has placeholder layout pattern lines. The running theme is shadcn's neutral `.dark` palette in `app/globals.css`.

## Architecture Decisions

- UI primitives come from shadcn/ui via the CLI and live in `components/ui/`. They stay unmodified after install.
- The component base is Base UI (`@base-ui/react`), style `base-nova`, icon library lucide.
- Tailwind classes are merged with `cn()` from `lib/utils.ts` (the `cn` package). Generated components import `cn` from that package directly.
- The app is dark by default. Light `:root` tokens remain in `globals.css` for the shadcn theme file, and the `dark` class on `<html>` is what the UI uses.
- Geist Sans and Geist Mono are wired as `--font-sans` and `--font-mono`, which the shadcn theme expects.
- The project sidebar is a fixed overlay and slides with a transform, so opening it does not push page content. Nothing mounts these components until a later spec says to.

## Session Notes

- Home page is still the centered "Ghost AI" text. The navbar and project sidebar are not rendered.
- `app/(editor)/` was removed. The spec names only `components/editor/editor-navbar.tsx` and `components/editor/project-sidebar.tsx`.
