# Contributing

Thank you for helping improve `frontend_for_intermediates`. This repository teaches intermediate frontend development through 10 progressive projects, so contributions should protect the learning path as much as the code.

## Environment Prerequisites

- Node.js current supported LTS for future project work.
- npm unless a project documents another package manager.
- Git and GitHub basics.
- A browser for responsive, keyboard, console, and accessibility checks.

There is no root dependency installation on Day 0. Future projects should be independently runnable from their own folders.

## Issue Workflow

- Use the relevant issue template for bugs, project feedback, or documentation problems.
- Include the project number and name when applicable.
- Describe expected behavior, actual behavior, reproduction steps, and verification already performed.
- Do not include real secrets, private tokens, or personal data in issues.

## Branch Naming

Use descriptive branch names such as:

- `docs/day-0-foundation`
- `project-03-filter-url-state`
- `fix/project-05-discount-rounding`

## Commit Messages

Prefer concise messages that name the area changed:

- `docs: add accessibility standards`
- `project-04: validate imported CSV rows`
- `project-09: test cart reducer totals`

## Project Conventions

- Preserve the project sequence in [ROADMAP.md](ROADMAP.md).
- Keep starter and solution versions separate.
- Do not leak the solution through starter comments.
- Keep projects independently runnable.
- Avoid adding root dependencies that make all projects inseparable unless a workspace strategy is explicitly documented.
- Use original fictional content unless live public API data is required.

## Test Expectations

- Run relevant checks before opening a pull request.
- Report exact commands and results.
- Include failure-state testing where relevant.
- Check important behavior at narrow viewport widths, including approximately 320px.
- Check keyboard-only usage and browser console errors.
- Do not claim a build, test, browser check, or deployment was performed if it was not.

## Accessibility Expectations

- Use semantic HTML and visible focus states.
- Support keyboard interaction.
- Respect reduced-motion preferences.
- Do not rely on color alone for meaning.
- Provide accessible labels, error messages, and status updates.
- Follow [docs/accessibility-standards.md](docs/accessibility-standards.md).

## Dependency Policy

- Avoid unnecessary libraries.
- Add dependencies only when they have clear educational or technical value.
- Document why significant dependencies exist.
- Commit real generated lockfiles when dependencies are installed.
- Never manually invent a lockfile.
- Review package scripts before adding them.

## Screenshot And Preview Policy

- Do not create fake preview images.
- Add `preview.png` only when it is a truthful screenshot of the current solution.
- Update screenshots after meaningful visual changes.

## Pull Request Expectations

Every pull request should include:

- Summary.
- Project affected or documentation area affected.
- Type of change.
- Screenshots where relevant.
- Accessibility checks.
- Tests performed.
- Responsive checks.
- Dependency changes.
- Security considerations.
- Documentation updates.
- Confirmation that no secrets were committed.

## Security

- Never commit credentials, API keys, tokens, or real `.env` files.
- Use `.env.example` for documented environment variables.
- Explain frontend-only security limitations honestly.

## Respectful Collaboration

Keep discussion specific, constructive, and learner-centered. This repository is educational; clarity and patience are part of the work.
