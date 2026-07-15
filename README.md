# frontend_for_intermediates

An intermediate frontend learning repository with 10 progressively challenging projects. It follows a beginner frontend collection and prepares learners for beginner backend work and, later, full-stack development.

This repository is for learners who already understand semantic HTML, modern CSS, responsive layouts, JavaScript fundamentals, DOM manipulation, form validation, localStorage, Fetch API basics, async/await, public API integration, accessible interactive interfaces, Git, and GitHub basics.

Current progress: Project 01 is complete. Projects 02-10 are Planned. No live demo, preview image, or deployment exists yet.

## Learning Path

```text
Beginner frontend
  -> Intermediate frontend
  -> Beginner backend
  -> Full-stack development
```

This repository covers only the intermediate frontend phase. It does not repeat beginner projects with a new visual skin. Each project introduces meaningful intermediate frontend concepts.

## Prerequisites

- Comfortable HTML and CSS fundamentals.
- Responsive layout experience with Flexbox and CSS Grid.
- Basic JavaScript syntax, arrays, objects, functions, and event listeners.
- DOM manipulation and form validation experience.
- Basic Fetch API, async/await, and localStorage experience.
- Git and GitHub basics.

## Learning Outcomes

By the end of the full repository, learners should be able to:

- Build accessible, keyboard-friendly interactive components.
- Manage application state across multi-step and data-heavy interfaces.
- Use browser APIs such as URL, History, AbortController, Intersection Observer, and storage APIs.
- Structure modular JavaScript applications with clear boundaries.
- Test important behavior without chasing vanity coverage.
- Evaluate dependencies and API risks before using them.
- Use TypeScript for safer browser applications.
- Build React applications with routing, state patterns, testing, and error handling.
- Explain limitations of frontend-only security, mock authentication, and client-side role checks.

## Project Roadmap

| # | Project | Primary technologies | Major concepts | Status | Directory |
|---|---|---|---|---|---|
| 01 | Accessible Component Library | HTML, CSS, vanilla JS, ES modules, Vite, Vitest | reusable components, public APIs, focus management, ARIA patterns, keyboard interaction | Complete | [projects/01-accessible-component-library](projects/01-accessible-component-library/) |
| 02 | Multi-Step Form | HTML, CSS, vanilla JS, ES modules, optional Vite | cross-step validation, form state, draft persistence, review flows, error summaries | Planned | Not created |
| 03 | Product Explorer | Vanilla JS, ES modules, Fetch API, URL and History APIs, optional Vite | search, filters, pagination, deep linking, debouncing, request cancellation | Planned | Not created |
| 04 | Expense Analytics Dashboard | JavaScript, ES modules, Vite, Chart.js or justified chart library, CSV processing | derived state, aggregation, charts, CSV import/export, accessible data summaries | Planned | Not created |
| 05 | Shopping Cart | JavaScript, ES modules, Vite, product data | centralized state, reducers, business rules, currency-safe arithmetic, persistence | Planned | Not created |
| 06 | Movie Discovery App | JavaScript, ES modules, Fetch API, Intersection Observer, Vite | API orchestration, caching, image performance, partial success, rate-limit handling | Planned | Not created |
| 07 | Kanban Project Board | JavaScript, ES modules, Vite, browser storage | normalized state, drag-and-drop, keyboard movement, undo, import/export | Planned | Not created |
| 08 | TypeScript Task Manager | TypeScript, Vite, typed browser APIs, Vitest | type narrowing, discriminated unions, runtime validation, typed state transitions | Planned | Not created |
| 09 | React E-Commerce Store | React, Vite, React Router, Vitest, React Testing Library | components, routing, context and reducers, custom hooks, code splitting, component tests | Planned | Not created |
| 10 | React Project Management App | React, React Router, TypeScript where appropriate, Vite, testing tools | architecture, nested routing, server-state simulation, optimistic updates, role-aware UI | Planned | Not created |

See [ROADMAP.md](ROADMAP.md) for the full project-by-project plan and final audit milestones.

## Technology Progression

- Projects 01-03: modern vanilla JavaScript, ES modules, browser APIs, and minimal tooling.
- Projects 04-07: modular JavaScript architecture, carefully selected libraries where they add educational value, Vite, stronger testing and data practices.
- Project 08: TypeScript, runtime validation, modular architecture, and unit testing.
- Projects 09-10: React, React Router, modern state patterns, component testing, TypeScript where appropriate, performance, and application architecture.

React begins at Project 09. TypeScript becomes the primary language at Project 08. Libraries should support learning, not replace the browser concepts being taught.

## Starter And Solution Versions

Each future project will include a genuine `starter/` and a complete `solution/`.

The starter should run or build successfully, contain useful semantic structure and configuration, include concise TODO guidance, and leave substantial work for the learner. It must not leak the completed solution.

The solution should satisfy required features, be responsive and accessible, handle edge cases, include meaningful tests, and avoid unnecessary abstraction.

Learners should attempt each starter before reading the solution.

## Repository Structure

```text
.
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   |-- workflows/
|   `-- PULL_REQUEST_TEMPLATE.md
|-- assets/
|   `-- project-previews/
|-- docs/
|-- projects/
|-- CONTRIBUTING.md
|-- MAINTAINER_GUIDE.md
|-- README.md
`-- ROADMAP.md
```

Empty future project directories are not created on Day 0. Preview images will be added only after real solutions exist and screenshots are verified.

## Local Setup Overview

There is no root application to install on Day 0. Future projects should be independently runnable from their own project folders.

Expected future workflow:

```bash
cd projects/NN-project-name/starter
npm install
npm run dev
```

Use Node.js current supported LTS and npm unless the repository later documents a different standard. Do not install all future project dependencies at the root.

## Testing Philosophy

Testing should focus on important behavior, risky logic, accessibility-critical interactions, failure states, and production builds. The repository does not require maximum coverage as a vanity metric.

Every completion report must distinguish source inspection from runtime verification and list exact commands run. Never claim tests, browser checks, builds, or deployments ran if they did not.

See [docs/testing-standards.md](docs/testing-standards.md).

## Accessibility Commitment

Every project must be responsive, keyboard usable, screen-reader considerate, and built on semantic HTML. Interactive patterns should follow relevant WAI-ARIA Authoring Practices while avoiding unnecessary ARIA where native HTML is sufficient.

See [docs/accessibility-standards.md](docs/accessibility-standards.md).

## API And Secret Handling

Never commit real credentials, tokens, API keys, or `.env` files. When a project needs environment variables, include `.env.example` with documented placeholder values.

Frontend-only authentication and role checks are demonstrations only. Real authorization must be enforced by a backend.

See [docs/api-and-security-guidelines.md](docs/api-and-security-guidelines.md).

## Deployment Approach

Projects should be independently deployable where practical. Deployment claims require production build verification and live-site checks. Demo URLs should be recorded only after they are verified.

See [docs/deployment-guide.md](docs/deployment-guide.md).

## Contributing

Contributions should preserve the educational progression, avoid unnecessary dependencies, follow accessibility and testing standards, and keep starter and solution versions separate.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This repository is licensed under the MIT License. See [LICENSE](LICENSE).
