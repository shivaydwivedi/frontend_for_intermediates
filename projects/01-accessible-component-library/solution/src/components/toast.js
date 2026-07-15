import { on } from './dom.js';

let toastId = 0;

export function createToastRegion(root) {
  if (!root) {
    throw new Error('Toast region requires a root element.');
  }

  const toasts = new Map();

  const showToast = (message, options = {}) => {
    const id = `toast-${++toastId}`;
    const tone = options.tone ?? 'info';
    const toast = document.createElement('div');
    toast.className = `toast toast--${tone}`;
    toast.dataset.toastId = id;
    toast.setAttribute('role', tone === 'error' ? 'alert' : 'status');
    toast.setAttribute('aria-live', tone === 'error' ? 'assertive' : 'polite');

    const text = document.createElement('p');
    text.textContent = message;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'toast__dismiss';
    button.textContent = 'Dismiss';
    button.setAttribute('aria-label', `Dismiss notification: ${message}`);

    toast.append(text, button);
    root.append(toast);

    const removeClick = on(button, 'click', () => dismiss(id));
    toasts.set(id, { element: toast, removeClick });

    return {
      id,
      dismiss: () => dismiss(id),
    };
  };

  const dismiss = (id) => {
    const toast = toasts.get(id);
    if (!toast) return;
    toast.removeClick();
    toast.element.remove();
    toasts.delete(id);
  };

  const clear = () => {
    Array.from(toasts.keys()).forEach((id) => dismiss(id));
  };

  return {
    showToast,
    dismiss,
    clear,
    destroy: clear,
  };
}
