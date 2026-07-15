import { on } from './dom.js';

export function createAccordion(root) {
  if (!root) {
    throw new Error('Accordion requires a root element.');
  }

  const items = Array.from(root.querySelectorAll('[data-accordion-item]')).map((item, index) => {
    const button = item.querySelector('button[aria-controls]');
    if (!button) {
      throw new Error('Accordion items require a button with aria-controls.');
    }
    const panel = root.querySelector(`#${CSS.escape(button.getAttribute('aria-controls'))}`);
    if (!panel) {
      throw new Error(`Accordion panel missing for item ${index}.`);
    }
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(expanded));
    panel.hidden = !expanded;
    return { button, panel };
  });

  const setExpanded = (index, expanded) => {
    const item = items[index];
    if (!item) return;
    item.button.setAttribute('aria-expanded', String(expanded));
    item.panel.hidden = !expanded;
  };

  const removers = items.map((item, index) =>
    on(item.button, 'click', () => {
      setExpanded(index, item.button.getAttribute('aria-expanded') !== 'true');
    }),
  );

  return {
    open(index) {
      setExpanded(index, true);
    },
    close(index) {
      setExpanded(index, false);
    },
    toggle(index) {
      const expanded = items[index]?.button.getAttribute('aria-expanded') === 'true';
      setExpanded(index, !expanded);
    },
    destroy() {
      removers.forEach((remove) => remove());
    },
  };
}
