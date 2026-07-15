import { on, requireElement } from './dom.js';

export function createCombobox(root, options = {}) {
  if (!root) {
    throw new Error('Combobox requires a root element.');
  }

  const input = requireElement(root, '[role="combobox"]', 'Combobox');
  const listbox = requireElement(root, '[role="listbox"]', 'Combobox');
  const status = root.querySelector('[data-combobox-status]');
  const source = options.suggestions ?? [];
  const baseId = listbox.id || `combobox-${Math.random().toString(36).slice(2)}`;
  listbox.id = baseId;
  input.setAttribute('aria-controls', baseId);
  input.setAttribute('aria-autocomplete', 'list');

  let filtered = [...source];
  let activeIndex = -1;
  let isOpen = false;

  const filter = () => {
    const query = input.value.trim().toLowerCase();
    filtered = source.filter((item) => item.toLowerCase().includes(query));
    activeIndex = filtered.length ? 0 : -1;
  };

  const render = () => {
    listbox.replaceChildren();
    filtered.forEach((item, index) => {
      const option = document.createElement('li');
      option.id = `${baseId}-option-${index}`;
      option.role = 'option';
      option.textContent = item;
      option.setAttribute('aria-selected', String(index === activeIndex));
      option.dataset.value = item;
      listbox.append(option);
    });

    if (!filtered.length) {
      const empty = document.createElement('li');
      empty.className = 'combobox__empty';
      empty.textContent = 'No suggestions. Custom text is allowed.';
      listbox.append(empty);
    }

    listbox.hidden = !isOpen;
    input.setAttribute('aria-expanded', String(isOpen));
    const activeOption = filtered[activeIndex] ? `${baseId}-option-${activeIndex}` : '';
    if (activeOption && isOpen) {
      input.setAttribute('aria-activedescendant', activeOption);
      document.getElementById(activeOption)?.scrollIntoView({ block: 'nearest' });
    } else {
      input.removeAttribute('aria-activedescendant');
    }
    if (status) {
      status.textContent = filtered.length
        ? `${filtered.length} suggestion${filtered.length === 1 ? '' : 's'} available.`
        : 'No suggestions. Custom text is allowed.';
    }
  };

  const open = () => {
    isOpen = true;
    render();
  };

  const close = () => {
    isOpen = false;
    activeIndex = -1;
    render();
  };

  const select = (value) => {
    input.value = value;
    close();
  };

  const move = (direction) => {
    if (!isOpen) open();
    if (!filtered.length) return;
    activeIndex = (activeIndex + direction + filtered.length) % filtered.length;
    render();
  };

  const handleInput = () => {
    filter();
    open();
  };

  const handleKeydown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'Enter' && isOpen && filtered[activeIndex]) {
      event.preventDefault();
      select(filtered[activeIndex]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
  };

  const handlePointerDown = (event) => {
    const option = event.target.closest('[role="option"]');
    if (!option) return;
    event.preventDefault();
    select(option.dataset.value);
    input.focus();
  };

  const handleDocumentPointer = (event) => {
    if (!root.contains(event.target)) {
      close();
    }
  };

  const removers = [
    on(input, 'input', handleInput),
    on(input, 'keydown', handleKeydown),
    on(listbox, 'pointerdown', handlePointerDown),
    on(document, 'pointerdown', handleDocumentPointer),
  ];

  filter();
  close();

  return {
    open,
    close,
    select,
    destroy() {
      removers.forEach((remove) => remove());
    },
  };
}
