import { getFocusable, isInDocument, on, requireElement } from './dom.js';

export function createModal(dialog, options = {}) {
  if (!(dialog instanceof HTMLDialogElement)) {
    throw new Error('Modal requires a dialog element.');
  }

  const closeButtons = Array.from(dialog.querySelectorAll('[data-modal-close]'));
  const initialFocus = options.initialFocus
    ? dialog.querySelector(options.initialFocus)
    : dialog.querySelector('[autofocus]') ?? closeButtons[0];
  let opener = null;

  const focusInitial = () => {
    const target = initialFocus ?? getFocusable(dialog)[0] ?? dialog;
    target.focus();
  };

  const open = (trigger = document.activeElement) => {
    opener = trigger;
    if (!dialog.open) {
      dialog.showModal();
    }
    focusInitial();
  };

  const close = () => {
    if (dialog.open) {
      dialog.close();
    }
  };

  const restoreFocus = () => {
    if (isInDocument(opener) && typeof opener.focus === 'function') {
      opener.focus();
    }
    opener = null;
  };

  const containFocus = (event) => {
    if (event.key !== 'Tab') return;
    const focusable = getFocusable(dialog);
    if (!focusable.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleCancel = () => {
    restoreFocus();
  };

  const removers = [
    on(dialog, 'keydown', containFocus),
    on(dialog, 'close', restoreFocus),
    on(dialog, 'cancel', handleCancel),
    ...closeButtons.map((button) => on(button, 'click', close)),
  ];

  requireElement(dialog, '[data-modal-title]', 'Modal');

  return {
    open,
    close,
    destroy() {
      removers.forEach((remove) => remove());
    },
  };
}
