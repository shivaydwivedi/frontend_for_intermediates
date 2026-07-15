export function requireElement(root, selector, componentName) {
  const element = root.querySelector(selector);
  if (!element) {
    throw new Error(`${componentName} requires ${selector}.`);
  }
  return element;
}

export function getFocusable(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hidden);
}

export function on(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  return () => target.removeEventListener(type, handler, options);
}

export function isInDocument(element) {
  return Boolean(element && element.ownerDocument?.contains(element));
}
