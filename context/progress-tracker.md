# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Complete

## Current Goal

- Design system and UI primitive components (`context/feature-specs/01-design-system.md`)

## Completed

- Installed and configured shadcn/ui (base-nova, Base UI, neutral tokens, CSS variables).
- Added Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea in `components/ui/`. Generated files were not edited after install.
- Installed lucide-react (also the configured icon library).
- Added `lib/utils.ts`, which re-exports `cn()` for merging Tailwind classes.
- Dark theme is the active theme: `dark` is set on `<html>`, so the `.dark` tokens in `app/globals.css` apply. `color-scheme: dark` is set with those tokens.

## In Progress

- None yet.

## Next Up

- Next feature spec after the design system.

## Open Questions

- `context/ui-context.md` still has placeholder color, radius, and layout tokens. The running theme is shadcn's neutral `.dark` palette in `app/globals.css` until those values are filled in.

## Architecture Decisions

- UI primitives come from shadcn/ui via the CLI and live in `components/ui/`. They stay unmodified after install.
- The component base is Base UI (`@base-ui/react`), style `base-nova`, icon library lucide.
- Tailwind classes are merged with `cn()` from `lib/utils.ts` (the `cn` package). Generated components import `cn` from that package directly.
- The app is dark by default. Light `:root` tokens remain in `globals.css` for the shadcn theme file, and the `dark` class on `<html>` is what the UI uses.
- Geist Sans and Geist Mono are wired as `--font-sans` and `--font-mono`, which the shadcn theme expects.

## Session Notes

- Home page is still the centered "Ghost AI" text, now on the dark background.
- Checked in the browser: primitives render dark on desktop and mobile, dialog opens, tabs switch, input accepts text, scroll area scrolls, and `cn("px-2 py-1 text-sm", "px-4")` resolves to `py-1 text-sm px-4`.
