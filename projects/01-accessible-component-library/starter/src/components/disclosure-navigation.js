export function createDisclosureNavigation(root) {
  if (!root) throw new Error('Disclosure navigation requires a root element.');

  // TODO: Add the enhancement marker only after setup, synchronize narrow and
  // wide layouts, close with Escape, and keep links as ordinary links.
  root.dataset.enhanced = 'pending-exercise';

  return {
    open() {},
    close() {},
    toggle() {},
    sync() {},
    destroy() {},
  };
}
