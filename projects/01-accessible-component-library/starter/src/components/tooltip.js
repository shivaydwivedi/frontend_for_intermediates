export function createTooltip(root) {
  if (!root) throw new Error('Tooltip requires a root element.');

  // TODO: Show on focus and hover, hide on blur/pointer leave/Escape, and keep
  // focus on the trigger.
  const tooltip = root.querySelector('[role="tooltip"]');
  if (tooltip) tooltip.hidden = true;

  return {
    show() {},
    hide() {},
    destroy() {},
  };
}
