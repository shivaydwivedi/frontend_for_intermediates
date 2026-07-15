import { describe, expect, it, beforeEach } from 'vitest';
import { createToastRegion } from '../src/components/toast.js';
import { click, element, resetDom } from './helpers.js';

beforeEach(resetDom);

describe('toast region', () => {
  it('renders safe text messages and does not steal focus', () => {
    const root = element('div');
    const button = element('button', { text: 'Before' });
    document.body.append(button, root);
    button.focus();
    const region = createToastRegion(root);
    region.showToast('<strong>Saved</strong>', { tone: 'success' });
    expect(root.textContent).toContain('<strong>Saved</strong>');
    expect(root.querySelector('strong')).toBeNull();
    expect(document.activeElement).toBe(button);
  });

  it('uses polite and assertive semantics, handles dismissal and multiple messages', () => {
    const root = element('div');
    document.body.append(root);
    const region = createToastRegion(root);
    region.showToast('Saved', { tone: 'success' });
    region.showToast('Failed', { tone: 'error' });
    const toasts = root.querySelectorAll('.toast');
    expect(toasts).toHaveLength(2);
    expect(toasts[0].getAttribute('role')).toBe('status');
    expect(toasts[1].getAttribute('role')).toBe('alert');
    click(toasts[0].querySelector('button'));
    expect(root.querySelectorAll('.toast')).toHaveLength(1);
  });
});
