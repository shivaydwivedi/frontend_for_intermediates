import { describe, expect, it, beforeEach } from 'vitest';
import { createMenuButton } from '../src/components/menu-button.js';
import { click, element, key, pointerDown, resetDom } from './helpers.js';

function fixture() {
  const status = element('p');
  const root = element('div');
  const trigger = element('button', {
    type: 'button',
    'data-menu-trigger': '',
    'aria-haspopup': 'menu',
    'aria-expanded': 'false',
    'aria-controls': 'actions',
    text: 'Actions',
  });
  const menu = element('ul', { role: 'menu', id: 'actions' });
  ['Duplicate item', 'Rename item', 'Archive item'].forEach((label) => {
    menu.append(element('li', { role: 'none' }, [
      element('button', { type: 'button', role: 'menuitem', text: label }),
    ]));
  });
  root.append(trigger, menu);
  document.body.append(root, status);
  return { root, trigger, menu, status };
}

beforeEach(resetDom);

describe('menu button', () => {
  it('opens from click and focuses first item with ArrowDown', () => {
    const { root, trigger, menu, status } = fixture();
    createMenuButton(root, { statusElement: status });
    click(trigger);
    expect(menu.hidden).toBe(false);
    key(trigger, 'ArrowDown');
    expect(document.activeElement).toBe(menu.querySelector('[role="menuitem"]'));
  });

  it('moves focus, closes on Escape, and restores focus', () => {
    const { root, trigger, menu, status } = fixture();
    createMenuButton(root, { statusElement: status });
    key(trigger, 'ArrowDown');
    const items = menu.querySelectorAll('[role="menuitem"]');
    key(items[0], 'ArrowDown');
    expect(document.activeElement).toBe(items[1]);
    key(items[1], 'Escape');
    expect(menu.hidden).toBe(true);
    expect(document.activeElement).toBe(trigger);
  });

  it('selects an action and closes outside', () => {
    const { root, trigger, menu, status } = fixture();
    createMenuButton(root, { statusElement: status });
    key(trigger, 'ArrowDown');
    click(menu.querySelectorAll('[role="menuitem"]')[2]);
    expect(status.textContent).toContain('Archive item');
    expect(menu.hidden).toBe(true);
    click(trigger);
    pointerDown(document.body);
    expect(menu.hidden).toBe(true);
  });
});
