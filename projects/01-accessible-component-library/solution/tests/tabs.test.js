import { describe, expect, it, beforeEach } from 'vitest';
import { createTabs } from '../src/components/tabs.js';
import { element, key, resetDom } from './helpers.js';

function fixture() {
  const root = element('div');
  const list = element('div', { role: 'tablist', 'aria-label': 'Demo tabs' });
  [0, 1, 2].forEach((index) => {
    list.append(element('button', {
      role: 'tab',
      id: `tab-${index}`,
      'aria-controls': `panel-${index}`,
      'aria-selected': index === 0 ? 'true' : 'false',
      text: `Tab ${index + 1}`,
    }));
  });
  root.append(list);
  [0, 1, 2].forEach((index) => {
    root.append(element('div', {
      role: 'tabpanel',
      id: `panel-${index}`,
      'aria-labelledby': `tab-${index}`,
      hidden: index !== 0,
      text: `Panel ${index + 1}`,
    }));
  });
  document.body.append(root);
  return root;
}

beforeEach(resetDom);

describe('tabs', () => {
  it('sets initial roving tabindex and panel visibility', () => {
    const root = fixture();
    createTabs(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    expect(tabs[0].tabIndex).toBe(0);
    expect(tabs[1].tabIndex).toBe(-1);
    expect(root.querySelector('#panel-1').hidden).toBe(true);
  });

  it('moves focus with arrows, wraps, and supports Home and End', () => {
    const root = fixture();
    createTabs(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    tabs[0].focus();
    key(tabs[0], 'ArrowLeft');
    expect(document.activeElement).toBe(tabs[2]);
    key(tabs[2], 'Home');
    expect(document.activeElement).toBe(tabs[0]);
    key(tabs[0], 'End');
    expect(document.activeElement).toBe(tabs[2]);
  });

  it('uses manual activation', () => {
    const root = fixture();
    createTabs(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    tabs[1].focus();
    key(tabs[1], 'Enter');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(root.querySelector('#panel-1').hidden).toBe(false);
  });
});
