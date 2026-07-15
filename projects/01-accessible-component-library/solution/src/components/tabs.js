import { on } from './dom.js';

export function createTabs(root) {
  if (!root) {
    throw new Error('Tabs requires a root element.');
  }

  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  const panels = tabs.map((tab) => {
    const panelId = tab.getAttribute('aria-controls');
    const panel = root.querySelector(`#${CSS.escape(panelId)}`);
    if (!panel) {
      throw new Error(`Tabs requires panel ${panelId}.`);
    }
    return panel;
  });

  if (!tabs.length) {
    throw new Error('Tabs requires at least one tab.');
  }

  let activeIndex = Math.max(0, tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));

  const render = () => {
    tabs.forEach((tab, index) => {
      const active = index === activeIndex;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[index].hidden = !active;
    });
  };

  const focusTab = (index) => {
    const nextIndex = (index + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
  };

  const select = (index) => {
    if (!tabs[index]) return;
    activeIndex = index;
    render();
  };

  const handleKeydown = (event) => {
    const currentIndex = tabs.indexOf(event.target);
    if (currentIndex === -1) return;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusTab(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusTab(currentIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusTab(tabs.length - 1);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      select(currentIndex);
    }
  };

  const removeKeydown = on(root, 'keydown', handleKeydown);
  render();

  return {
    select,
    destroy() {
      removeKeydown();
    },
  };
}
