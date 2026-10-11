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

- Editor: a full-height column in `app/(editor)/`. A fixed-height navbar sits on top. The canvas fills the remaining height.
- Navbar: left, center, and right sections in a three-column grid. Dark background (`--background`) and a subtle bottom border (`--border`). The right section stays empty until a later spec fills it.
- Project sidebar: fixed overlay from the left, above the canvas. Opening it does not push page content. It slides in with a transform. Surface uses the sidebar tokens (`--sidebar`, `--sidebar-foreground`, `--sidebar-border`).
- Dialogs: the shadcn Dialog primitive. Style with the color tokens in `app/globals.css`. A dialog supports a title, a description, and footer actions. Do not add a product dialog until a spec asks for one.

## Icons

Lucide React (`lucide-react`). Stroke icons. Default control icon size in the generated components is `size-4`.
