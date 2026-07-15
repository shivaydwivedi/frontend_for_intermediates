export function createTabs(root) {
  if (!root) throw new Error('Tabs requires a root element.');

  // TODO: Implement roving tabindex, manual activation, wrapping arrow keys,
  // Home/End behavior, panel visibility, and cleanup.
  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  tabs.forEach((tab) => {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
  });

  return {
    select() {},
    destroy() {},
  };
}
