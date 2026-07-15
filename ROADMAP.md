# Roadmap

Status values: Planned, In Progress, Complete, Blocked.

Current repository status: Day 0 foundation complete when this file and related documentation are verified. All 10 projects are Planned. The repository is not complete until the final audit and release milestones pass after Project 10.

## Project 01 - Accessible Component Library

Status: Planned

Technology: semantic HTML, modern CSS, vanilla JavaScript, ES modules, Vite only if tooling is justified.

Prerequisites: semantic HTML, CSS layout, DOM events, modules, basic accessibility vocabulary.

Core learning objectives:
- Design reusable components with public APIs.
- Manage component state and lifecycle.
- Implement keyboard interaction, focus trapping, focus restoration, and accessible names.
- Use ARIA patterns only where native HTML is not enough.

Required features:
- Modal dialog.
- Tabs.
- Accordion.
- Dropdown menu.
- Toast notifications.
- Tooltip.
- Combobox or autocomplete.
- Disclosure navigation.

Accessibility focus: WAI-ARIA Authoring Practices, reduced motion, focus visibility, keyboard support, screen-reader announcements with restraint.

Testing focus: syntax checks, linting where configured, focused interaction tests, keyboard walkthroughs, responsive checks, manual accessibility checks.

Architectural focus: small component modules, public options, lifecycle cleanup, progressive enhancement, readable DOM utilities.

Optional stretch goals: theme tokens, component playground, automated accessibility smoke tests.

Relationship to previous projects: turns beginner DOM and accessibility work into reusable interactive patterns.

Completion criteria: starter and solution exist, project README is complete, components meet required behavior, tests and manual checks are reported, root README and roadmap are updated truthfully.

## Project 02 - Multi-Step Form

Status: Planned

Technology: HTML, CSS, modern vanilla JavaScript, ES modules, optional Vite.

Prerequisites: forms, validation, DOM events, localStorage, basic accessibility.

Core learning objectives:
- Manage cross-step form state.
- Build accessible validation, error summaries, progress indicators, and review flows.
- Persist drafts without implying real submission.

Required features:
- Personal information, contact details, plan selection, preferences, review, and confirmation stages.
- Conditional fields.
- Back and next navigation.
- Draft persistence.
- Prevent accidental data loss.
- Data serialization.

Accessibility focus: labels, instructions, error identification, focus movement, keyboard navigation, progress semantics.

Testing focus: validation paths, conditional fields, storage failure behavior, keyboard testing, responsive checks.

Architectural focus: form state model, validation boundaries, serialization, step controller, pure validation helpers.

Optional stretch goals: autosave status, restore prompt, printable review summary.

Relationship to previous projects: builds on component patterns and turns them into a guided workflow.

Completion criteria: starter and solution run independently, no real backend is implied, required paths are tested or manually verified, docs are updated.

## Project 03 - Product Explorer

Status: Planned

Technology: modern vanilla JavaScript, ES modules, Fetch API, URL and History APIs, local or public product data, Vite where appropriate.

Prerequisites: Fetch API basics, arrays, objects, DOM rendering, query strings.

Core learning objectives:
- Synchronize UI state with URL query parameters.
- Handle asynchronous data with loading, empty, and error states.
- Prevent stale responses and cancel obsolete requests.

Required features:
- Product search, category filters, price-range filtering, sorting, pagination, product detail view.
- URL-synchronized filters and deep linking.
- Loading, empty, and error states.
- Request cancellation.
- Responsive catalogue.

Accessibility focus: filter controls, result counts, focus after navigation, robust empty/error messaging.

Testing focus: query serialization, filter combinations, pagination, request cancellation, manual responsive and keyboard checks.

Architectural focus: data normalization, derived state, debounce boundaries, URL state synchronization.

Optional stretch goals: saved searches, compare view, offline fallback for local data.

Relationship to previous projects: extends form and component skills into URL-driven data interfaces.

Completion criteria: filters are linkable, edge states are visible, no API credentials are exposed, docs and status are current.

## Project 04 - Expense Analytics Dashboard

Status: Planned

Technology: modern JavaScript, ES modules, Vite, carefully selected chart library such as Chart.js, date and number formatting APIs, CSV processing.

Prerequisites: modules, array transformations, form handling, localStorage, basic data visualization concepts.

Core learning objectives:
- Model financial data using integer minor currency units.
- Aggregate and format date-based data.
- Present charts with accessible textual summaries.
- Validate imported CSV data.

Required features:
- Income and expense entries, categories, monthly summaries, budget targets, category breakdown, date filtering.
- CSV import and export.
- Charts and textual summaries.
- Persistent local data.

Accessibility focus: charts never as the only communication, table alternatives, color not as the only status signal.

Testing focus: data transformations, currency calculations, invalid CSV handling, storage failures, chart-adjacent summaries.

Architectural focus: immutable transformations, derived state, import validation, dashboard layout boundaries.

Optional stretch goals: recurring entries, category budgets, monthly comparison.

Relationship to previous projects: applies state, validation, and rendering skills to richer data analysis.

Completion criteria: calculations are correct, invalid imports are handled, charts have text equivalents, docs and verification are complete.

## Project 05 - Shopping Cart

Status: Planned

Technology: modern JavaScript, ES modules, Vite, local or public product data.

Prerequisites: product rendering, form validation, storage, array methods, currency basics.

Core learning objectives:
- Use centralized application state and reducer-like updates.
- Implement business rules for discounts, shipping, tax, and totals.
- Store money in integer minor units.

Required features:
- Product catalogue, variants, quantity controls, cart panel or drawer, discount-code rules, shipping calculation, tax calculation, order summary, checkout form, persistent cart, empty and error states.

Accessibility focus: cart updates, quantity controls, form labels and errors, drawer focus behavior if used.

Testing focus: calculation logic, reducer transitions, validation, persistence, failure states.

Architectural focus: state synchronization, derived totals, reusable modules, storage boundaries.

Optional stretch goals: saved carts, stock warnings, compare discounts.

Relationship to previous projects: combines product exploration and form validation with formal business logic.

Completion criteria: no real payment is processed, checkout is clearly a demonstration, calculations are tested, docs are updated.

## Project 06 - Movie Discovery App

Status: Planned

Technology: modern JavaScript, ES modules, Fetch API, Intersection Observer, carefully selected public movie API, Vite.

Prerequisites: Fetch API, async state, product explorer concepts, storage, basic performance awareness.

Core learning objectives:
- Orchestrate multiple API requests.
- Cache and deduplicate requests.
- Handle partial success and rate limits.
- Load images responsibly.

Required features:
- Debounced search, trending or popular section, genre filters, pagination or infinite loading, movie details, cast information where available, watchlist, recently viewed items, in-memory request caching, image loading and fallbacks, resilient error handling.

Accessibility focus: search results, loading announcements, image alternatives, infinite loading controls or fallback navigation.

Testing focus: stale-response prevention, cache behavior, API error states, image fallbacks, manual keyboard and responsive checks.

Architectural focus: API client layer, request cache, response normalization, rate-limit handling, Intersection Observer boundary.

Optional stretch goals: offline recent view, skeleton states with reduced motion, multiple list layouts.

Relationship to previous projects: deepens async interface work from Project 03 with multiple related resources.

Completion criteria: API-key requirements are evaluated before implementation, no real key is committed, `.env.example` exists if needed, docs and limitations are honest.

## Project 07 - Kanban Project Board

Status: Planned

Technology: modern JavaScript, ES modules, Vite, browser storage, native drag-and-drop or pointer interactions only when accessible.

Prerequisites: centralized state, form handling, storage, keyboard interaction, modular rendering.

Core learning objectives:
- Model normalized state.
- Implement complex transitions and undo.
- Make drag-and-drop optional rather than required.
- Validate imported board data.

Required features:
- Multiple columns, task creation, editing, deletion, moving tasks between columns, reordering, labels, priorities, due dates, search, filtering, undo, persistent state, import and export.
- Keyboard movement actions: Move left, Move right, Move to column, Move up, Move down.

Accessibility focus: full usability without drag-and-drop, clear movement controls, focus retention after state changes.

Testing focus: state transitions, undo, import validation, keyboard movement, storage failure behavior.

Architectural focus: normalized state, reducer-like updates, predictable rendering, import/export boundaries.

Optional stretch goals: board templates, compact mode, conflict-safe import preview.

Relationship to previous projects: extends cart-style state management into a larger productivity application.

Completion criteria: keyboard alternatives are complete, import validation is robust, state logic is verified, docs and roadmap are updated.

## Project 08 - TypeScript Task Manager

Status: Planned

Technology: TypeScript, Vite, typed browser APIs, Vitest or justified testing tool.

Prerequisites: modular JavaScript, state transitions, project board concepts, testing basics.

Core learning objectives:
- Use interfaces, type aliases, discriminated unions, type narrowing, and generics.
- Type DOM interaction and state transitions.
- Validate untrusted runtime data.
- Avoid `any`.

Required features:
- Projects, tasks, subtasks, tags, priorities, due dates, filtering, saved views, import and export, runtime validation, persistent state.

Accessibility focus: typed UI state should still produce semantic, keyboard-friendly, responsive interfaces.

Testing focus: TypeScript compilation, strict type checking, unit tests, runtime-data validation, DOM behavior.

Architectural focus: module boundaries, typed data models, validation boundaries, typed reducers or transitions.

Optional stretch goals: typed command palette, migration tests for stored data.

Relationship to previous projects: revisits productivity state with stronger type safety and validation.

Completion criteria: strict type checks pass, no unexplained `any`, untrusted data is narrowed, docs and verification are complete.

## Project 09 - React E-Commerce Store

Status: Planned

Technology: React, Vite, React Router, modern CSS, Vitest, React Testing Library, local or public product data.

Prerequisites: JavaScript architecture, shopping cart concepts, TypeScript awareness, testing basics.

Core learning objectives:
- Build with components, props, composition, hooks, routing, context, reducers, custom hooks, error boundaries, and code splitting.
- Test accessible React behavior with user-event patterns.

Required features:
- Product listing, product details, search, category and price filters, sorting, cart, wishlist, checkout demonstration, routing, route-level errors, persistent cart, responsive navigation, code splitting.

Accessibility focus: React rendering must preserve semantic HTML, focus behavior, route announcements where appropriate, form accessibility.

Testing focus: component tests, route tests, reducer tests, user-event tests, error boundary checks.

Architectural focus: route organization, state ownership, context boundaries, custom hooks, code splitting.

Optional stretch goals: recently viewed products, mock inventory warnings, route prefetching discussion.

Relationship to previous projects: translates vanilla cart and explorer concepts into React patterns.

Completion criteria: checkout is labelled as a demonstration, no real payment service exists, component tests cover key behavior, docs are updated.

## Project 10 - React Project Management App

Status: Planned

Technology: React, React Router, TypeScript where appropriate, Vite, server-state library only if educationally justified, Vitest, React Testing Library, optional Playwright for critical flows.

Prerequisites: React routing, TypeScript basics, complex state, testing, accessibility fundamentals.

Core learning objectives:
- Design a larger application shell with nested routing, reusable components, server-state simulation, optimistic updates, rollback behavior, error boundaries, and performance awareness.
- Explain mock authentication and frontend authorization limitations.

Required features:
- Mock authentication interface, projects, team members, task board, task details, comments, activity log, dashboard, search, filters, role-aware interface, optimistic updates, responsive application shell, loading, empty, partial, and error states.

Accessibility focus: route layouts, dialogs or panels, data tables/lists, comments, status updates, keyboard-friendly board interactions.

Testing focus: component and route tests, reducer/state tests, error-boundary tests, selected end-to-end flows if tooling supports them.

Architectural focus: application architecture, nested routes, server-state simulation, state ownership, rollback, performance optimization.

Optional stretch goals: mock latency controls, audit-log filtering, accessibility-focused E2E scenario.

Relationship to previous projects: acts as the bridge from intermediate frontend into the future beginner-backend repository.

Completion criteria: mock auth is never described as real security, optimistic updates roll back on failure, critical flows are verified, docs and roadmap are current.

## Final Milestones

These milestones occur after Project 10. The repository is not complete until they pass.

| Milestone | Status | Completion criteria |
|---|---|---|
| Cross-project consistency audit | Planned | Project structure, naming, scripts, docs, and progression are consistent. |
| Accessibility audit | Planned | Keyboard, screen-reader, contrast, reduced motion, responsive reflow, and pattern-specific behavior are reviewed. |
| Test verification | Planned | Relevant commands are run for every project and failures are resolved or documented. |
| Dependency and security review | Planned | Dependencies, lockfiles, API usage, `.env.example` files, and secret-handling practices are reviewed. |
| Documentation audit | Planned | Root docs, project READMEs, limitations, attribution, and status claims are accurate. |
| Deployment verification | Planned | Deployable projects have verified builds and live URLs only where checked. |
| Screenshot and preview verification | Planned | Preview images are real screenshots of current solutions and are not placeholders. |
| Final release `v1.0.0` | Planned | All projects and final audits are complete, release notes are prepared, and repository status is truthful. |
