UI components

This folder exposes the project's UI primitives and composed components.

- `atoms/` — tiny, presentational building blocks (see `atoms/README.md`).
- `molecules/` — composed components that combine atoms with labels, helpers, and behaviour.
- `organisms/` — larger sections that compose molecules and atoms into UX patterns.

Testing & accessibility

- Add unit tests under `web/test/ui/*` for each component.
- Prefer role-based queries in tests (getByRole) and assert accessibility attributes explicitly.

If you update the public API (export names) update `web/src/ui/index.ts` accordingly.
This folder is now scaffolded as a standalone package: `@projectSproud/ui`.

Local development notes

- This package uses `tsup` to build ESM/CJS bundles and emits type declarations to `dist/`.
- Install dev deps and build from the package folder. Example (from repo root):

```bash
# using pnpm (recommended for this workspace)
cd web/src/ui
pnpm install
pnpm run build
```

Publishing

- Update `package.json` fields (author, repository, version) before publishing to npm or GitHub Packages.
- The package has `react` and `react-dom` as peerDependencies; consumers must provide them.

Notes

- For now tests, storybook, and CI are intentionally omitted — they can be added later.
- The root repo `.gitignore` now ignores `web/src/ui/` to allow this folder to be managed by the new package's repo if you decide to split it out.
