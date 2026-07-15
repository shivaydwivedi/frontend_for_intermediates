# Project 01 - Accessible Component Library

Difficulty: Intermediate

Estimated time: 12-18 hours

Technology: semantic HTML, modern CSS, vanilla JavaScript, ES modules, Vite, Vitest, jsdom.

## Overview

Build a small documentation-style component library that demonstrates eight accessible interaction patterns. The goal is not to ship a production component package. The goal is to learn how state, semantics, keyboard behavior, focus management, progressive enhancement, and cleanup fit together in reusable browser components.

The starter is a guided exercise. The solution is an educational reference implementation.

## Prerequisites

- Semantic HTML and landmarks.
- Responsive CSS with Flexbox and Grid.
- JavaScript modules, functions, arrays, objects, and events.
- DOM querying and DOM updates.
- Basic accessibility vocabulary.
- npm and Vite basics.

## Learning Objectives

- Design small public component APIs.
- Keep component state synchronized with DOM attributes and visibility.
- Implement roving tabindex for tabs and action menus.
- Trap and restore focus for modal dialogs.
- Use live regions without stealing focus.
- Preserve native browser editing and scrolling keys.
- Validate required DOM structure before initialization.
- Clean up event listeners with `destroy()`.
- Test behavior through roles, labels, focus, and visible state.

## Components

1. Modal dialog.
2. Tabs.
3. Accordion.
4. Menu button/dropdown action menu.
5. Toast notifications.
6. Tooltip.
7. Editable combobox/autocomplete.
8. Disclosure navigation.

## Component Architecture

Each solution module exports one factory function:

- `createModal(element, options)`
- `createTabs(element, options)`
- `createAccordion(element, options)`
- `createMenuButton(element, options)`
- `createToastRegion(element, options)`
- `createTooltip(element, options)`
- `createCombobox(element, options)`
- `createDisclosureNavigation(element, options)`

Factories validate required elements, scope queries to their root, add only the listeners they need, and return a small public API. Every API includes `destroy()` where listeners are attached.

## Public APIs

| Component | Main methods | Notes |
|---|---|---|
| Modal | `open(opener)`, `close()`, `destroy()` | Uses native `<dialog>` plus explicit focus containment and restoration. |
| Tabs | `select(index)`, `destroy()` | Manual activation; arrows move focus, Enter/Space activates. |
| Accordion | `open(index)`, `close(index)`, `toggle(index)`, `destroy()` | Multiple sections may be open. |
| Menu button | `open(focusTarget)`, `close(options)`, `destroy()` | Action menu, not site navigation. |
| Toast | `showToast(message, options)`, `dismiss(id)`, `clear()`, `destroy()` | Uses safe text rendering, not HTML injection. |
| Tooltip | `show()`, `hide()`, `destroy()` | Supplemental text only; focus remains on trigger. |
| Combobox | `open()`, `close()`, `select(value)`, `destroy()` | Custom text is permitted; suggestions are local static data. |
| Disclosure navigation | `open()`, `close()`, `toggle()`, `sync()`, `destroy()` | Progressive enhancement for narrow-screen navigation. |

## Per-Component Semantics

| Component | Semantics |
|---|---|
| Modal | Native `<dialog>`, accessible name, description, explicit close controls. |
| Tabs | `tablist`, `tab`, `tabpanel`, `aria-selected`, roving `tabindex`. |
| Accordion | Native headings containing native buttons, `aria-expanded`, `aria-controls`. |
| Menu button | Native trigger button, `aria-haspopup="menu"`, action items with menu semantics. |
| Toast | Polite status region by default; assertive only for error messages in this demo. |
| Tooltip | Trigger has `aria-describedby`; popup has `role="tooltip"`. |
| Combobox | Labelled input with `role="combobox"`, listbox popup, `aria-activedescendant`. |
| Disclosure navigation | Semantic `<nav>` with ordinary links and a native disclosure button. |

## Keyboard Behavior

| Component | Keyboard behavior |
|---|---|
| Modal | Enter/Space on opener opens; Tab and Shift+Tab remain inside; Escape closes; close buttons restore focus. |
| Tabs | Tab enters active tab; Left/Right move focus; Home/End move to edges; Enter/Space activates. |
| Accordion | Enter/Space toggle through native button behavior; Tab order is unchanged. |
| Menu button | Enter/Space opens; Down opens first item; Up opens last item; arrows move; Home/End jump; Escape closes. |
| Toast | Toasts do not steal focus; dismiss buttons are reachable in normal Tab order. |
| Tooltip | Focus or hover shows; Escape hides; focus stays on trigger. |
| Combobox | Typing filters; Down/Up moves active option; Enter accepts; Escape closes; text-editing Home/End remain native. |
| Disclosure navigation | Enter/Space toggle the button; Escape closes and restores focus to the button. |

## Focus Management

Only components that create a temporary interaction context move focus. The modal moves focus inside and restores it to the opener if the opener still exists. The menu restores focus to the trigger after Escape or action selection. Tabs use roving tabindex without activating until Enter or Space. Tooltip and toast never take focus automatically.

## Progressive Enhancement

The page is readable before JavaScript loads. Disclosure navigation starts as ordinary visible navigation. Components that need JavaScript add behavior after successful initialization. The starter marks incomplete demos as exercises rather than pretending they work.

## Project Structure

```text
projects/01-accessible-component-library/
|-- README.md
|-- starter/
|   |-- index.html
|   |-- package.json
|   |-- vite.config.js
|   `-- src/
`-- solution/
    |-- index.html
    |-- package.json
    |-- vite.config.js
    |-- src/
    `-- tests/
```

No `preview.png` exists yet because no browser screenshot was captured for this project.

## Setup Commands

Install each version independently:

```bash
cd projects/01-accessible-component-library/starter
npm install
npm run dev
```

```bash
cd projects/01-accessible-component-library/solution
npm install
npm run dev
```

## Starter Commands

```bash
npm run dev
npm run build
```

The starter intentionally does not include a full test suite because the component behavior is the learner's task.

## Solution Commands

```bash
npm run dev
npm run build
npm test
```

## Testing Approach

The solution uses Vitest with jsdom for observable DOM behavior: ARIA state, visibility, focus movement, event handling, and safe text rendering. jsdom does not prove real browser focus behavior completely, so manual browser testing is still required.

## Manual Accessibility Checklist

- Navigate the full page with keyboard only.
- Check visible focus at 320px, 768px, and desktop widths.
- Check browser zoom at 200%.
- Check reduced-motion preference.
- Confirm no horizontal page overflow.
- Confirm the browser console has no errors.
- Exercise each component with the keyboard behavior table above.
- Confirm tooltip content is supplemental and not required.
- Confirm the combobox preserves normal text editing.

## Responsive Checklist

- Navigation remains usable at 320px.
- Dialog content remains reachable.
- Menu and combobox popups stay inside the layout.
- Buttons wrap without clipping text.
- Code snippets scroll horizontally inside their own boxes.
- Component demos reflow without fixed-height clipping.

## Known Limitations

- This is an educational reference, not a packaged production library.
- Tooltip positioning is intentionally simple.
- Combobox supports a local static dataset and custom text; it does not perform remote search.
- Tests run in jsdom and must be supplemented by real browser checks.
- No automated accessibility checker is included; manual accessibility review is required.

## Dependencies

- Vite provides the development server and production build.
- Vitest provides behavior tests.
- jsdom provides a browser-like DOM environment for unit tests.

No runtime component library is used.

## Suggested Implementation Order

1. Accordion.
2. Disclosure navigation.
3. Tabs.
4. Tooltip.
5. Toast.
6. Menu button.
7. Modal.
8. Combobox.

This sequence moves from simpler state synchronization to more complex keyboard and focus behavior.

## Bonus Challenges

- Automatic-activation tabs.
- Vertical tabs.
- Nested dialogs.
- Toast queue limits.
- Tooltip placement variants.
- Multiselect combobox.
- Theme switcher.
- Visual regression tests.
- Selected Playwright flows.
- Packaged library build.

Do not implement these until the required project is complete.

## Official Documentation

- [WAI-ARIA APG patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [APG accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [APG combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [APG dialog modal pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [APG disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [APG menu button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [APG tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [APG tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [MDN HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
