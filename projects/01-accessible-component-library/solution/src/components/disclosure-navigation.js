import { on, requireElement } from './dom.js';

export function createDisclosureNavigation(root, options = {}) {
  if (!root) {
    throw new Error('Disclosure navigation requires a root element.');
  }

  const button = requireElement(root, '[data-nav-toggle]', 'Disclosure navigation');
  const panel = requireElement(root, '[data-nav-panel]', 'Disclosure navigation');
  const wideQuery = options.wideQuery ?? '(min-width: 48rem)';
  const media = window.matchMedia(wideQuery);
  let isOpen = false;

  root.dataset.enhanced = 'true';

  const render = () => {
    const wide = media.matches;
    button.hidden = wide;
    panel.hidden = !wide && !isOpen;
    button.setAttribute('aria-expanded', String(wide || isOpen));
  };

  const open = () => {
    isOpen = true;
    render();
  };

  const close = ({ restoreFocus = true } = {}) => {
    isOpen = false;
    render();
    if (restoreFocus && !button.hidden) button.focus();
  };

  const toggle = () => {
    if (isOpen) close();
    else open();
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape' && isOpen && !media.matches) {
      event.preventDefault();
      close();
    }
  };

  const mediaListener = () => render();
  const removers = [
    on(button, 'click', toggle),
    on(root, 'keydown', handleKeydown),
  ];

  media.addEventListener('change', mediaListener);
  render();

  return {
    open,
    close,
    toggle,
    sync: render,
    destroy() {
      removers.forEach((remove) => remove());
      media.removeEventListener('change', mediaListener);
      delete root.dataset.enhanced;
    },
  };
}
