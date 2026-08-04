# AGENTS.md

## Repository overview

CodeDragons' public site for the Raft Rush mobile game. It is a small Next.js App Router site built as a static export. Read [ARCHITECTURE.md](ARCHITECTURE.md) for system boundaries and flows and [docs/development.md](docs/development.md) for setup, testing, and environment guidance.

## Important paths

- `src/app/`: routes, root layout, global CSS, and shared UI.
- `public/`: static images and branding assets.
- `.github/workflows/main.yml`: build and AWS deployment workflow.
- `next.config.mjs`: static-export constraints.
- `tsconfig.json` and `.eslintrc.json`: TypeScript and lint rules.

No nested `AGENTS.md` files are currently needed; all source follows the same workflow.

## Working rules

- Follow the commands in [docs/development.md](docs/development.md#commands). Use npm and preserve `package-lock.json`; do not introduce another package manager or lockfile. Do not claim tests passed when none exist.
- Follow [ARCHITECTURE.md](ARCHITECTURE.md), especially its static-export boundary. Do not add server-dependent features without an explicit architecture/deployment decision.
- Match the existing App Router, narrow client-component, strict TypeScript, functional React, and colocated CSS Module patterns described in the documentation.
- Never contact the production deletion endpoint during tests or validation.
- Follow [the environment and secrets rules](docs/development.md#environment-and-secrets). Never expose deployment secrets or modify production AWS resources during routine work.
- Do not manually edit generated/installed content or the lockfile; npm may update the lockfile only for an authorized dependency change.
- Existing localized markup/style issues include the navigation `<img>` lint warning, mismatched form label targets, unusual navigation list markup, and an empty CSS `color` value. Treat these as known inconsistencies rather than conventions to copy, and avoid unrelated fixes.

## Validation before completion

Use the checks in [docs/development.md](docs/development.md#testing-strategy). Report every skipped check and why. Do not silently fix unrelated warnings.

## Final task summary

Keep the final response concise and include:

- what changed and the important files involved;
- validation commands and their pass/fail status;
- tests skipped because none exist, when applicable;
- remaining warnings, risks, assumptions, or follow-up work.
