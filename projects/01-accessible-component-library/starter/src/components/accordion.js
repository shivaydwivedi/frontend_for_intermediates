export function createAccordion(root) {
  if (!root) throw new Error('Accordion requires a root element.');

  // TODO: Query each item, validate button/panel pairs, and keep aria-expanded
  // synchronized with panel visibility.
  root.querySelectorAll('[data-accordion-item]').forEach((item) => {
    const button = item.querySelector('button[aria-controls]');
    const panel = button ? root.querySelector(`#${button.getAttribute('aria-controls')}`) : null;
    if (button && panel) {
      panel.hidden = button.getAttribute('aria-expanded') !== 'true';
    }
  });

  return {
    open() {},
    close() {},
    toggle() {},
    destroy() {},
  };
}
