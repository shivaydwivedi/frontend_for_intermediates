export function createMenuButton(root) {
  if (!root) throw new Error('Menu button requires a root element.');

  // TODO: Validate trigger/menu/items, synchronize aria-expanded, implement
  // arrow-key movement, Escape, outside click, action selection, and cleanup.
  const button = root.querySelector('[data-menu-trigger]');
  const menu = root.querySelector('[role="menu"]');
  if (button && menu) {
    button.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  }

  return {
    open() {},
    close() {},
    destroy() {},
  };
}
