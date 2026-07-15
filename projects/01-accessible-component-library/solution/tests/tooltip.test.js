import { describe, expect, it, beforeEach } from 'vitest';
import { createTooltip } from '../src/components/tooltip.js';
import { element, key, resetDom } from './helpers.js';

function fixture() {
  const tooltip = element('span', { role: 'tooltip', id: 'tip', hidden: true, text: 'Helpful context' });
  const trigger = element('button', {
    type: 'button',
    'data-tooltip-trigger': '',
    'aria-describedby': 'tip',
    text: 'Help',
  });
  const root = element('span', { 'data-component': 'tooltip' }, [trigger, tooltip]);
  document.body.append(root);
  return { root, trigger, tooltip };
}

beforeEach(resetDom);

describe('tooltip', () => {
  it('shows on focus and hides on Escape', () => {
    const { root, trigger, tooltip } = fixture();
    createTooltip(root);
    trigger.dispatchEvent(new FocusEvent('focus'));
    expect(tooltip.hidden).toBe(false);
    key(trigger, 'Escape');
    expect(tooltip.hidden).toBe(true);
    expect(trigger.getAttribute('aria-describedby')).toBe('tip');
  });

  it('shows on hover and hides on pointer leave', () => {
    const { root, trigger, tooltip } = fixture();
    createTooltip(root);
    trigger.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }));
    expect(tooltip.hidden).toBe(false);
    trigger.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }));
    expect(tooltip.hidden).toBe(true);
  });
});
