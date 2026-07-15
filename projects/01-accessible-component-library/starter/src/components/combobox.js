export function createCombobox(root, options = {}) {
  if (!root) throw new Error('Combobox requires a root element.');

  // TODO: Filter options case-insensitively, render listbox options safely,
  // maintain aria-activedescendant, preserve text editing keys, and clean up.
  const input = root.querySelector('[role="combobox"]');
  const listbox = root.querySelector('[role="listbox"]');
  if (input && listbox) {
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-autocomplete', 'list');
    listbox.hidden = true;
  }

  return {
    open() {},
    close() {},
    select() {},
    destroy() {},
    suggestions: options.suggestions ?? [],
  };
}
