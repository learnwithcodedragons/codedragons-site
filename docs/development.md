# Development guide

## Prerequisites and setup

Use npm; `package-lock.json` is the repository's only lockfile. CI pins Node.js `20.11.1`, which is also the version used for the validated local workflow. The repository does not declare an `engines` range, so compatibility with other Node.js versions is not documented.

```sh
npm ci
npm run dev
```

The development server defaults to <http://localhost:3000>. No runtime environment variables are referenced, so no local `.env` file is required for the current application.

## Commands

| Purpose | Command | Repository support |
| --- | --- | --- |
| Install | `npm ci` | Uses the committed npm lockfile |
| Develop | `npm run dev` | Next.js development server |
| Lint | `npm run lint` | Next.js Core Web Vitals rules |
| Type-check | `npx tsc --noEmit` | Supported by installed TypeScript; no npm script exists |
| Test | — | No test script, runner, configuration, or test files exist |
| Build | `npm run build` | Produces the static site in `out/` |
| Production preview | — | No static preview script exists; `next start` is not representative of `output: "export"` |

Do not manually edit `node_modules/`, `.next/`, `out/`, `next-env.d.ts`, or `*.tsbuildinfo`. Do not replace the package manager or hand-edit `package-lock.json`; let npm update it only as part of an intentional dependency change.

## Testing strategy

There is currently no automated testing strategy in the repository. Until one is introduced, validation consists of linting, TypeScript checking, a production build, and a focused manual check of the affected static route. Do not exercise the production deletion endpoint during testing.

For application changes, run:

```sh
npm run lint
npx tsc --noEmit
npm run build
```

If a change introduces tests, add a documented npm script and run the relevant tests. Prefer tests that mock the deletion API rather than making external requests.

Known validation warnings:

- ESLint reports a native `<img>` in `src/app/nav/nav.tsx`.
- The build reports stale Browserslist metadata.
- In restricted Codex environments, Next.js worker creation may initially fail with `spawn EPERM`; the build needs permission to spawn its local worker processes.

## Environment and secrets

The frontend has no environment-variable references. The deletion endpoint is currently hard-coded in the client component and is therefore public.

Deployment uses GitHub Actions secrets named:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDFRONT_DISTRIBUTION_ID`

Never place secret values in source, `.env` files committed to Git, client-side variables, logs, tests, or documentation. Local development and validation do not require these deployment secrets. Do not run the deployment workflow, modify AWS resources, or contact the production deletion service as part of ordinary development.

## Making changes

- Keep routes and shared layout under `src/app/` and static assets under `public/`.
- Use Server Components by default and add `'use client'` only for client hooks, event handlers, or browser APIs.
- Keep route/component styles in colocated CSS Modules; reserve `globals.css` for global behavior.
- Preserve static-export compatibility. A feature requiring server execution needs an explicit deployment/architecture change.
- See [Architecture](../ARCHITECTURE.md) for route, data-flow, integration, and deployment details.
