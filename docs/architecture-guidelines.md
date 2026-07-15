# Architecture Guidelines

The goal is understandable intermediate architecture, not enterprise ceremony. Architecture should make projects easier to reason about, test, and teach.

## Separation Of Concerns

Keep these responsibilities clear:

- Data access: fetching, parsing, importing, and storage.
- State: current application data and user choices.
- Derived state: filtered lists, totals, summaries, and validation results.
- Rendering: translating state into UI.
- Events: responding to user actions and browser events.

Small projects do not need heavy frameworks, but they still benefit from clear module boundaries.

## ES Modules

- Use ES modules for reusable functions and components.
- Avoid large files that mix unrelated data, rendering, and event logic.
- Export focused functions rather than broad utility bags.
- Keep browser side effects near the application entry point when practical.

## Pure Functions

Prefer pure functions for:

- Filtering.
- Sorting.
- Currency calculations.
- Date grouping.
- CSV row validation.
- State transitions.
- Data normalization.

Pure functions are easier to test and easier for learners to understand.

## State

- Use centralized state when multiple UI areas depend on the same data.
- Avoid duplicate sources of truth.
- Prefer immutable update patterns for complex state.
- Treat derived state as something computed from source state unless caching is justified.
- Document meaningful state shape decisions in project READMEs.

## Async Data

- Use `AbortController` for cancellable requests where relevant.
- Prevent stale responses from overwriting newer state.
- Handle `response.ok` and status-specific failures.
- Represent loading, empty, partial, success, and error states explicitly.
- Use cache invalidation rules when adding request caching.

## Storage And Validation Boundaries

- Treat localStorage, imported files, query parameters, and API responses as untrusted.
- Validate data at boundaries.
- Narrow unknown data before using it.
- Plan for storage failures.
- Version stored data when future migrations are likely.

## Dependencies

- Add dependencies only when they provide clear educational or technical value.
- Keep dependency-specific code behind small boundaries when practical.
- Do not use a library to avoid teaching the browser concept that the project is meant to teach.
- Record why significant dependencies exist.

## Components And Composition

- Components should have clear inputs, outputs, and responsibilities.
- Avoid components that directly own unrelated state.
- Prefer composition over large configuration objects when it improves readability.
- Keep public APIs small and documented.

## React Architecture

- Introduce React only in Projects 09-10.
- Keep state close to where it is used unless multiple branches need it.
- Use context for shared state, not as a default replacement for props.
- Use reducers for complex transitions.
- Use custom hooks to share behavior, not to hide unclear logic.
- Use error boundaries where route or feature failures should be contained.
- Organize routes around user workflows.

## Avoid Premature Abstractions

Do not add abstractions just because another project may need them later. Add them when they remove real duplication, clarify a concept, or support testing.

Good intermediate architecture should feel like labeled shelves, not a maze.
