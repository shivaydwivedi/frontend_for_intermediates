import { on, requireElement } from './dom.js';

let activeMenu = null;

export function createMenuButton(root, options = {}) {
  if (!root) {
    throw new Error('Menu button requires a root element.');
  }

  const button = requireElement(root, '[data-menu-trigger]', 'Menu button');
  const menu = requireElement(root, '[role="menu"]', 'Menu button');
  const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
  const status = options.statusElement ?? null;

  if (!items.length) {
    throw new Error('Menu button requires at least one menu item.');
  }

  let isOpen = false;

  const setExpanded = (expanded) => {
    isOpen = expanded;
    button.setAttribute('aria-expanded', String(expanded));
    menu.hidden = !expanded;
  };

  const focusItem = (index) => {
    const enabledItems = items.filter((item) => item.getAttribute('aria-disabled') !== 'true');
    const target = enabledItems[(index + enabledItems.length) % enabledItems.length];
    target?.focus();
  };

  const open = (focusTarget = 'first') => {
    if (activeMenu && activeMenu !== api) {
      activeMenu.close({ restoreFocus: false });
    }
    activeMenu = api;
    setExpanded(true);
    if (focusTarget === 'last') {
      focusItem(items.length - 1);
    } else if (focusTarget === 'first') {
      focusItem(0);
    }
  };

  const close = ({ restoreFocus = true } = {}) => {
    setExpanded(false);
    if (activeMenu === api) activeMenu = null;
    if (restoreFocus) button.focus();
  };

  const move = (direction) => {
    const currentIndex = items.indexOf(document.activeElement);
    focusItem(currentIndex + direction);
  };

  const handleButtonKeydown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      open('first');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      open('last');
    }
  };

  const handleButtonClick = () => {
    if (isOpen) close();
    else open(false);
  };

  const handleMenuKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusItem(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusItem(items.length - 1);
    } else if (event.key === 'Tab') {
      close({ restoreFocus: false });
    }
  };

  const handleMenuClick = (event) => {
    const item = event.target.closest('[role="menuitem"]');
    if (!item || item.getAttribute('aria-disabled') === 'true') return;
    if (status) {
      status.textContent = `${item.textContent.trim()} action selected.`;
    }
    close();
  };

  const handleDocumentPointer = (event) => {
    if (isOpen && !root.contains(event.target)) {
      close({ restoreFocus: false });
    }
  };

  const removers = [
    on(button, 'click', handleButtonClick),
    on(button, 'keydown', handleButtonKeydown),
    on(menu, 'keydown', handleMenuKeydown),
    on(menu, 'click', handleMenuClick),
    on(document, 'pointerdown', handleDocumentPointer),
  ];

  setExpanded(false);

  const api = {
    open,
    close,
    destroy() {
      removers.forEach((remove) => remove());
      if (activeMenu === api) activeMenu = null;
    },
  };

  return api;
}
