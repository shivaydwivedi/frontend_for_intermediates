export function createToastRegion(root) {
  if (!root) throw new Error('Toast region requires a root element.');

  // TODO: Render messages with document.createElement and textContent, choose
  // polite/assertive semantics, support dismissal, and avoid stealing focus.
  return {
    showToast(message) {
      const placeholder = document.createElement('p');
      placeholder.textContent = `Exercise: render toast for "${message}" here.`;
      root.append(placeholder);
      return { dismiss() {} };
    },
    dismiss() {},
    clear() {},
    destroy() {},
  };
}
