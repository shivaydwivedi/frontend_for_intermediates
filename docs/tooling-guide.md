# Tooling Guide

Tooling should help learners build, test, and understand projects without making the repository harder to use.

## Preferred Tools

- Node.js current supported LTS.
- npm unless the repository later standardizes another package manager.
- Vite for projects that need a dev server or build tooling.
- ESLint where linting adds useful feedback.
- Prettier only if it reduces inconsistency without creating noise.
- Vitest for unit and DOM-adjacent tests where appropriate.
- React Testing Library for React projects.
- Playwright only for selected critical flows.
- TypeScript beginning with Project 08.
- React beginning with Project 09.

## Dependency Rules

- Avoid unnecessary libraries.
- Add dependencies only when they provide clear educational or technical value.
- Pin or responsibly constrain dependency versions.
- Commit generated lockfiles when dependencies are installed.
- Never manually invent a lockfile.
- Document Node requirements.
- Avoid global-install requirements.
- Review package scripts.
- Use official scaffolding where appropriate.
- Record why significant dependencies exist.

## Repository Structure And Package Management

Do not add one root dependency tree that makes every project inseparable unless there is a clear documented workspace strategy. The default is independently runnable projects.

Day 0 does not install all future project dependencies. It establishes policy only.

## Vite

Use Vite when a project benefits from:

- Module development server behavior.
- Production builds.
- TypeScript support.
- React support.
- Test tooling integration.

Avoid introducing Vite only to make a simple static exercise look more advanced.

## ESLint And Prettier

Use ESLint to catch likely bugs and consistency issues. Add Prettier only when formatting inconsistency becomes a real problem or when a project scaffolding already includes it.

## TypeScript

TypeScript becomes the primary language in Project 08. Earlier projects may mention type-like thinking, but they should not turn TypeScript into the main implementation language.

Avoid `any`. Prefer `unknown` for untrusted data and narrow it promptly.

## React

React begins in Project 09. Earlier projects should teach browser fundamentals directly.

React projects should include routing, component testing, state patterns, and accessibility practices that fit React.
