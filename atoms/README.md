Atoms in web/src/ui/atoms

Purpose

- Small, focused presentational components (Icon, Input, Button, Spinner, etc.).
- Provide a consistent, accessible API: prefer explicit `title`/`decorative` flags for icons and ensure inputs expose standard HTML props.

Guidelines

- Accessibility
  - Icons must support being decorative (hidden from AT) or labelled (role="img" + accessible name).
  - Use the provided `VisuallyHidden` component for visually-hidden helper text when needed.
- Tests
  - Each atom should have a unit test in `web/test/ui/atoms/` verifying render, accessibility attributes, and keyboard behaviour where applicable.

Size API

- `Icon` and `Spinner` support a `size` prop: `'sm' | 'md' | 'lg'` or a numeric pixel value. The default is `md`.

Examples

- Decorative icon
  <Icon />

- Accessible icon
  <Icon title="Close" />

- Custom inline SVG
  <Icon title="Logo"><svg ... /></Icon>

Notes

- Keep atoms unopinionated about layout; molecules should compose atoms with labels, helpers and validation UI.
