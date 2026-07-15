# Testing Standards

Testing should prove important behavior and risky logic. Do not chase maximum coverage as a vanity metric. Each project should use tests that match its complexity and learning goals.

## Required Reporting

Every completion report must include:

- Exact commands run.
- Exact results.
- Checks not performed.
- Whether verification was source inspection, automated testing, browser testing, or deployment verification.
- Any known limitations.

Never claim tests, browser checks, builds, or deployments were performed if they were not.

## Projects 01-03

Use a lightweight but real verification strategy:

- JavaScript syntax checks.
- Linting where configured.
- Manual accessibility checks.
- Keyboard testing.
- Responsive testing.
- Focused interaction tests for complex components.
- Failure-state testing for async or validation flows.

## Projects 04-07

Add stronger logic and DOM verification:

- Unit tests for data transformations and business logic.
- DOM interaction tests.
- Import validation tests.
- Storage failure tests.
- Manual accessibility checks.
- Critical browser-flow tests where tooling supports them.
- Production build checks.

## Project 08

TypeScript work must include:

- TypeScript compilation.
- Strict type checking.
- Unit tests.
- Runtime-data validation tests.
- DOM behavior tests.
- No unexplained `any`.

## Projects 09-10

React work should include:

- Component tests.
- Route tests.
- State and reducer tests.
- User-event tests.
- Error-boundary tests.
- Selected end-to-end flows for critical paths where justified.
- Production build checks.

## Manual Verification Checklist

For each project, check the relevant items:

- Approximately 320px viewport.
- 200% zoom.
- Keyboard-only usage.
- Visible focus states.
- Loading, empty, partial, success, and error states.
- Browser console errors.
- Reduced-motion behavior where animation exists.
- Production build.
- No real secrets or `.env` files.

## Failure States

Test failure states that users can realistically encounter:

- Invalid form data.
- Empty search results.
- Network failures.
- Aborted or stale requests.
- Invalid imports.
- Storage unavailable or full.
- API rate limits where relevant.
- Route-level errors in React projects.

## Source Inspection Vs Runtime Verification

Source inspection can identify likely issues, but it is not the same as running the app. Completion reports must be explicit:

- "Inspected source for..." means code was reviewed.
- "Ran..." means a command was executed.
- "Verified in browser..." means the app was opened and behavior was checked.
- "Deployment verified..." means the live site was checked after deployment.
