# Accessibility Standards

Accessibility is a core requirement for every project in this repository. Projects should be usable with keyboard, pointer, touch, screen readers, zoom, and reduced-motion preferences.

Use authoritative references such as MDN, W3C WAI, WAI-ARIA Authoring Practices, and WebAIM. Do not copy large passages from external documentation.

## Semantic HTML And Landmarks

- Start with native elements before adding ARIA.
- Use `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` when they match the content.
- Provide one primary `main` landmark.
- Use buttons for actions and links for navigation.
- Keep heading levels logical. Do not skip levels for visual size alone.

## Accessible Names

- Every interactive control needs a clear accessible name.
- Prefer visible labels.
- Use `aria-label` or `aria-labelledby` only when visible text is not sufficient.
- Icon-only buttons need accessible names and visible focus states.

## Forms

- Associate every input with a label.
- Provide field instructions before they are needed.
- Identify required fields consistently.
- Connect errors to fields with accessible descriptions.
- Provide an error summary for multi-field or multi-step forms.
- Move focus to the error summary or first invalid field when appropriate.

## Keyboard Interaction

- All functionality must be available without a mouse.
- Preserve expected browser behavior for native controls.
- Use established keyboard patterns for custom widgets.
- Avoid keyboard traps except intentional modal focus trapping.
- Provide explicit keyboard alternatives for drag-and-drop actions.

## Focus Management

- Make focus visible.
- Move focus intentionally after route changes, modal openings, destructive actions, and validation failures.
- Trap focus inside modal dialogs.
- Restore focus to the triggering control when a modal closes.
- Avoid moving focus unexpectedly during ordinary typing or reading.

## Status Announcements

- Use screen-reader status announcements for important asynchronous changes.
- Keep live regions restrained. Do not announce every small visual change.
- Loading, empty, partial, success, and error states should be expressed in text, not only color or motion.

## Visual Accessibility

- Meet WCAG color contrast expectations for text and meaningful UI.
- Do not rely on color alone for status or validation.
- Use comfortable touch targets, generally at least 44 by 44 CSS pixels when practical.
- Support text scaling and 200% zoom.
- Ensure responsive reflow without horizontal scrolling for ordinary content.
- Avoid hiding essential content at narrow widths.

## Motion

- Respect `prefers-reduced-motion`.
- Avoid required motion for understanding or operation.
- Keep animations short and purposeful.

## Tables And Charts

- Use real tables for tabular data.
- Provide table captions or clear surrounding context.
- Charts must not be the only way information is communicated.
- Include textual summaries for trends, totals, and important comparisons.
- Do not use color alone to distinguish chart series.

## Complex Widgets

### Modal Dialogs

- Use semantic dialog behavior where possible.
- Trap focus while open.
- Restore focus when closed.
- Close with Escape unless doing so would cause data loss, in which case warn clearly.
- Prevent background interaction while the modal is active.

### Tabs

- Use the WAI-ARIA tabs pattern when building custom tabs.
- Keep tab order predictable.
- Connect tabs to panels.
- Support arrow-key navigation where appropriate.

### Menus And Dropdowns

- Do not use menu roles for ordinary site navigation unless the interaction truly behaves like an application menu.
- Support Escape to close.
- Manage focus when opening and closing.

### Comboboxes

- Follow WAI-ARIA Authoring Practices.
- Keep text input, listbox, option state, and keyboard behavior consistent.
- Announce result counts or empty results when useful.

### Drag And Drop

- Drag-and-drop must never be the only way to complete a task.
- Provide keyboard-accessible controls such as Move left, Move right, Move up, Move down, and Move to column.
- Announce movement results in text.

## React Accessibility

- Use semantic HTML inside components.
- Keep labels and IDs stable.
- Manage focus after route changes, dialogs, and validation.
- Do not hide accessibility concerns inside component abstraction.
- Test with user interactions rather than implementation details.

## Testing Approach

Every project should include:

- Keyboard-only walkthrough.
- Focus order check.
- Visible focus check.
- Narrow viewport check around 320px.
- 200% zoom check.
- Reduced-motion check where animation exists.
- Console error check.
- Screen-reader-oriented source inspection and, when possible, manual assistive technology checks.

Recommended references:

- MDN Accessibility documentation.
- W3C WAI fundamentals.
- WAI-ARIA Authoring Practices.
- WebAIM articles and contrast tools.
