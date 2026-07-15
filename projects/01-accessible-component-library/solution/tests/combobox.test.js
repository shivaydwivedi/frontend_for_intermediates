import { describe, expect, it, beforeEach } from 'vitest';
import { createCombobox } from '../src/components/combobox.js';
import { element, key, pointerDown, resetDom } from './helpers.js';

const suggestions = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

function fixture() {
  const input = element('input', {
    id: 'tech',
    role: 'combobox',
    'aria-expanded': 'false',
    'aria-controls': 'tech-list',
  });
  const list = element('ul', { id: 'tech-list', role: 'listbox', hidden: true });
  const status = element('p', { 'data-combobox-status': '' });
  const root = element('div', {}, [element('label', { for: 'tech', text: 'Technology' }), input, list, status]);
  document.body.append(root);
  return { root, input, list, status };
}

beforeEach(resetDom);

describe('combobox', () => {
  it('filters case-insensitively and exposes active descendant', () => {
    const { root, input, list } = fixture();
    createCombobox(root, { suggestions });
    input.value = 'script';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    expect(list.hidden).toBe(false);
    expect(list.textContent).toContain('JavaScript');
    expect(list.textContent).toContain('TypeScript');
    expect(input.getAttribute('aria-activedescendant')).toBe('tech-list-option-0');
  });

  it('navigates options and selects with Enter', () => {
    const { root, input } = fixture();
    createCombobox(root, { suggestions });
    input.focus();
    key(input, 'ArrowDown');
    key(input, 'ArrowDown');
    key(input, 'Enter');
    expect(input.value).toBe('CSS');
    expect(input.getAttribute('aria-expanded')).toBe('false');
  });

  it('supports Escape, click selection, no-result state, and custom values', () => {
    const { root, input, list } = fixture();
    createCombobox(root, { suggestions });
    input.value = 'zz';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    expect(list.textContent).toContain('No suggestions');
    expect(input.value).toBe('zz');
    key(input, 'Escape');
    expect(list.hidden).toBe(true);
    input.value = 'rea';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    pointerDown(list.querySelector('[role="option"]'));
    expect(input.value).toBe('React');
  });
});
