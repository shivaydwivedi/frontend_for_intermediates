import { describe, expect, it, beforeEach, vi } from 'vitest';
import { createDisclosureNavigation } from '../src/components/disclosure-navigation.js';
import { click, element, key, resetDom } from './helpers.js';

function mockMedia(matches = false) {
  const listeners = new Set();
  window.matchMedia = vi.fn(() => ({
    matches,
    addEventListener: (_type, listener) => listeners.add(listener),
    removeEventListener: (_type, listener) => listeners.delete(listener),
  }));
}

function fixture() {
  const button = element('button', {
    type: 'button',
    'data-nav-toggle': '',
    'aria-expanded': 'true',
    'aria-controls': 'links',
    text: 'Browse',
  });
  const panel = element('div', { id: 'links', 'data-nav-panel': '' }, [
    element('a', { href: '#one', text: 'One' }),
  ]);
  const root = element('nav', { 'aria-label': 'Demo' }, [button, panel]);
  document.body.append(root);
  return { root, button, panel };
}

beforeEach(() => {
  resetDom();
  mockMedia(false);
});

describe('disclosure navigation', () => {
  it('adds enhancement state and toggles expanded state', () => {
    const { root, button, panel } = fixture();
    createDisclosureNavigation(root);
    expect(root.dataset.enhanced).toBe('true');
    expect(panel.hidden).toBe(true);
    click(button);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(panel.hidden).toBe(false);
  });

  it('closes with Escape and restores focus to the button', () => {
    const { root, button, panel } = fixture();
    createDisclosureNavigation(root);
    click(button);
    key(root, 'Escape');
    expect(panel.hidden).toBe(true);
    expect(document.activeElement).toBe(button);
  });
});
