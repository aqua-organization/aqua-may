# aqua-may monorepo

This repository is a Turborepo-managed monorepo that contains the backend API and the web client for the project. It also hosts shared tooling packages so that the workspaces can evolve together.

## Workspaces

| Path | Description |
| --- | --- |
| `apps/api` | NestJS HTTP API. |
| `apps/web` | Vite + React client application. |
| `packages/ui` | Shared React component library. |
| `packages/typescript-config` | Shared `tsconfig` presets consumed by the workspaces. |

## Tooling

- **Biome** is the single source of truth for linting and formatting across the monorepo. Run `npm run lint` to check the entire repository or `npm run format` to apply fixes.
- **TypeScript** is available in every workspace and is configured through the shared presets in `@repo/typescript-config`.
- **Turbo** orchestrates all workspace scripts. Use `npm run <task> -- --filter=<workspace>` to target a specific package.

## Common tasks

```bash
# Install dependencies
npm install

# Start both applications locally
npm run dev

# Run lint checks across the repo
npm run lint

# Format files with Biome
npm run format

# Type-check every workspace
npm run check-types
```

To run a task for a specific workspace, append a Turbo filter. For example, to start only the API: `npm run dev -- --filter=api`.

## Project conventions

- All TypeScript projects extend the shared configuration in `@repo/typescript-config` to ensure consistent compiler options.
- No Prettier or ESLint configuration is required—Biome handles code style and linting everywhere.
- Keep documentation for each workspace up to date so that onboarding remains frictionless.
