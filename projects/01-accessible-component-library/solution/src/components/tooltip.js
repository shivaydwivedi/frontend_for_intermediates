import { on, requireElement } from './dom.js';

export function createTooltip(root) {
  if (!root) {
    throw new Error('Tooltip requires a root element.');
  }

  const trigger = requireElement(root, '[data-tooltip-trigger]', 'Tooltip');
  const tooltip = requireElement(root, '[role="tooltip"]', 'Tooltip');
  let focusVisible = false;
  let hoverVisible = false;

  const render = () => {
    tooltip.hidden = !(focusVisible || hoverVisible);
  };

  const show = () => {
    focusVisible = true;
    render();
  };

  const hide = () => {
    focusVisible = false;
    hoverVisible = false;
    render();
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      hide();
    }
  };

  const removers = [
    on(trigger, 'focus', show),
    on(trigger, 'blur', () => {
      focusVisible = false;
      render();
    }),
    on(trigger, 'pointerenter', () => {
      hoverVisible = true;
      render();
    }),
    on(trigger, 'pointerleave', () => {
      hoverVisible = false;
      render();
    }),
    on(trigger, 'keydown', handleKeydown),
  ];

  render();

  return {
    show,
    hide,
    destroy() {
      removers.forEach((remove) => remove());
    },
  };
}
