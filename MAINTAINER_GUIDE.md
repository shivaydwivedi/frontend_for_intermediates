# Maintainer Guide

This repository is the intermediate frontend phase of a larger learning path:

```text
Beginner frontend -> Intermediate frontend -> Beginner backend -> Full-stack development
```

The repository contains, or will contain, 10 progressively challenging frontend projects. Do not implement a project unless that project or task is explicitly in scope.

## Required Reading Before Editing

Before making changes, contributors and maintainers should:

1. Read this file.
2. Read [README.md](README.md).
3. Read [ROADMAP.md](ROADMAP.md).
4. Read relevant files in [docs/](docs/) for the task.
5. Inspect Git status.
6. Inspect previous projects for established conventions when working on a later project.

## Scope And Git Safety

- Preserve unrelated user changes.
- Work only on the project or documentation area explicitly requested.
- Avoid modifying completed projects without authorization.
- Never commit or push unless explicitly authorized.
- Never force-push, rewrite history, rebase, reset, or discard changes without explicit authorization.
- Stop and ask when a decision would materially change scope, architecture, cost, external-service use, security, legal identity, repository ownership, or license choice.

## Educational Code Principles

- Prefer understandable educational code over clever code.
- Teach browser fundamentals before hiding them behind abstractions.
- Avoid unnecessary dependencies.
- Verify the purpose, maintenance state, and educational value of a dependency before adding it.
- Keep starter and solution versions separate.
- Do not create starter and solution folders as identical copies.
- Do not leak the solution through starter comments.
- Give every project an educational README.
- Explain meaningful deviations from the standard structure in the project README.

## Security And Data Rules

- Never add a credential, token, real API key, or real secret.
- Use `.env.example` for documented variables when needed.
- Never commit an actual `.env`.
- Render untrusted data safely.
- Avoid unsafe `innerHTML`.
- Validate imported, stored, and API data.
- Explain frontend-only security limitations clearly.
- Mock authentication and frontend role checks must never be described as real security.

## Accessibility And UI Rules

- Use semantic HTML.
- Follow [docs/accessibility-standards.md](docs/accessibility-standards.md).
- Build mobile-first responsive layouts.
- Support keyboard interaction.
- Provide visible focus states.
- Respect reduced-motion preferences.
- Handle loading, empty, partial, success, and error states where relevant.
- Use ARIA only when it improves semantics that native HTML cannot provide.
- Follow relevant WAI-ARIA Authoring Practices for complex widgets.

## Testing And Verification

- Add meaningful tests proportional to project complexity.
- Run relevant verification before claiming completion.
- Report exact commands run and exact results.
- Distinguish source inspection from runtime verification.
- Never claim browser tests ran if they did not.
- Never claim deployment succeeded without verifying the live site.
- Never create fake preview images.
- Update root README and ROADMAP truthfully.

## Standard Project Structure

These are defaults. Do not create empty folders just to show planned structure.

### Vanilla JavaScript Projects

```text
projects/NN-project-name/
|-- README.md
|-- preview.png
|-- starter/
|   |-- index.html
|   |-- package.json
|   |-- src/
|   |   |-- styles/
|   |   `-- scripts/
|   `-- public/
`-- solution/
    |-- index.html
    |-- package.json
    |-- src/
    |   |-- styles/
    |   `-- scripts/
    |-- public/
    `-- tests/
```

### TypeScript Projects

```text
projects/NN-project-name/
|-- README.md
|-- preview.png
|-- starter/
|   |-- index.html
|   |-- package.json
|   |-- tsconfig.json
|   `-- src/
`-- solution/
    |-- index.html
    |-- package.json
    |-- tsconfig.json
    |-- src/
    `-- tests/
```

### React Projects

```text
projects/NN-project-name/
|-- README.md
|-- preview.png
|-- starter/
|   |-- package.json
|   |-- vite.config.*
|   |-- index.html
|   |-- public/
|   `-- src/
`-- solution/
    |-- package.json
    |-- vite.config.*
    |-- index.html
    |-- public/
    |-- src/
    `-- tests/
```

Do not add `preview.png` unless it is a truthful screenshot of the real solution.

## Project README Standard

Every future project README must contain:

- Project title.
- Difficulty.
- Estimated completion time.
- Technology.
- Prerequisites.
- Overview.
- Learning objectives.
- Required features.
- Application states.
- Data model where relevant.
- Architecture overview.
- Accessibility requirements.
- Responsive requirements.
- Testing requirements.
- Security and privacy notes.
- API or dependency attribution.
- Starter instructions.
- Solution instructions.
- Installation and run commands.
- Build commands.
- Project structure.
- Suggested implementation workflow.
- Manual testing checklist.
- Automated testing instructions.
- Edge cases.
- Known limitations.
- Bonus challenges.
- Helpful official documentation.
- Guidance to attempt the starter before reading the solution.

Do not turn a project README into a line-by-line answer key.

## Starter Policy

The starter must:

- Run or build successfully.
- Contain useful semantic structure.
- Contain required configuration.
- Contain accessible foundational markup.
- Include concise TODO guidance.
- Provide an ordered path through the challenge.
- Leave substantial work for the learner.
- Avoid containing the completed implementation.
- Avoid syntax errors.
- Avoid fake functionality.

## Solution Policy

The solution must:

- Satisfy required features.
- Be independently runnable.
- Be responsive.
- Be accessible.
- Handle relevant edge cases.
- Include meaningful tests.
- Contain no accidental TODOs.
- Contain no debugging output.
- Contain no credentials.
- Avoid unnecessary abstraction.
- Document important architectural decisions.

## Required Final Report For Repository Work

When finishing a task, report:

- Files changed.
- Checks run and results.
- Limitations or checks not performed.
- Assumptions made.
- Any decisions requiring user attention.
- Confirmation that no commit or push occurred unless one was explicitly requested.
