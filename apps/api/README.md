# API service

This workspace contains the NestJS HTTP API that powers the project. It is configured to work alongside the other packages in this Turborepo monorepo.

## Available scripts

All commands are run from the repository root unless stated otherwise.

- `npm run dev -- --filter=api` – start the API in watch mode.
- `npm run build -- --filter=api` – build the production bundle into `dist/`.
- `npm run lint -- --filter=api` – lint the source and test files with Biome.
- `npm run check-types -- --filter=api` – run the strict TypeScript compiler checks.
- `npm run test -- --filter=api` – execute the Jest unit tests.

## Project layout

- `src/` – NestJS modules, controllers, and providers.
- `test/` – integration and end-to-end Jest tests.
- `tsconfig.json` – extends the shared `@repo/typescript-config` base settings to keep compiler options consistent with the rest of the monorepo.

## Tooling notes

The API uses Biome for both linting and formatting. ESLint and Prettier have been removed to reduce duplication between workspaces. TypeScript is configured to emit decorator metadata so that NestJS dependency injection continues to work as expected.
