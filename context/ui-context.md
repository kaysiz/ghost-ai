# UI Context

## Theme

Dark only. `<html>` has the `dark` class, so the `.dark` tokens in `app/globals.css` are what the UI renders. Do not introduce a light theme.

## Colors

Use the shadcn semantic tokens in `app/globals.css`. Do not hardcode hex values.

| Role            | CSS Variable   |
| --------------- | -------------- |
| Page background | `--background` |
| Surface         | `--card`       |
| Primary text    | `--foreground` |
| Muted text      | `--muted-foreground` |
| Primary accent  | `--primary`    |
| Border          | `--border`     |
| Error           | `--destructive` |

## Typography

| Role      | Font       | Variable      |
| --------- | ---------- | ------------- |
| UI text   | Geist Sans | `--font-sans` |
| Code/mono | Geist Mono | `--font-mono` |

## Border Radius

Base radius is `--radius: 0.625rem` in `app/globals.css`. Controls use `rounded-lg`. Cards and dialogs use `rounded-xl`.

## Component Library

shadcn/ui on Tailwind, style `base-nova`, primitives from Base UI. Components live in `components/ui/`. Add new ones with the CLI. Do not edit generated files in that folder after installation.

## Layout Patterns

- [Pattern — e.g. Editor: full-viewport split with
  left sidebar, center canvas, right sidebar]
- [Pattern — e.g. Sidebars: fixed width with border separator]
- [Pattern — e.g. Modals: centered overlay with backdrop blur]
- [Pattern — e.g. Navbar: top bar with bottom border]

## Icons

Lucide React (`lucide-react`). Stroke icons. Default control icon size in the generated components is `size-4`.
