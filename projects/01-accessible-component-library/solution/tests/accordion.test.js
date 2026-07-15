import { describe, expect, it, beforeEach } from 'vitest';
import { createAccordion } from '../src/components/accordion.js';
import { click, element, resetDom } from './helpers.js';

function fixture() {
  const root = element('div', { 'data-component': 'accordion' });
  [0, 1, 2].forEach((index) => {
    const button = element('button', {
      type: 'button',
      'aria-expanded': index === 0 ? 'true' : 'false',
      'aria-controls': `panel-${index}`,
      text: `Section ${index + 1}`,
    });
    const item = element('div', { 'data-accordion-item': '' }, [
      element('h3', {}, [button]),
      element('div', { id: `panel-${index}` }, [element('p', { text: `Panel ${index + 1}` })]),
    ]);
    root.append(item);
  });
  document.body.append(root);
  return root;
}

beforeEach(resetDom);

describe('accordion', () => {
  it('synchronizes initial state and toggles independently', () => {
    const root = fixture();
    createAccordion(root);
    const buttons = root.querySelectorAll('button');
    const panels = root.querySelectorAll('[id^="panel-"]');

    expect(panels[0].hidden).toBe(false);
    expect(panels[1].hidden).toBe(true);

    click(buttons[1]);
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true');
    expect(panels[1].hidden).toBe(false);
    expect(panels[0].hidden).toBe(false);
  });

  it('exposes open, close, and toggle methods', () => {
    const root = fixture();
    const accordion = createAccordion(root);
    const buttons = root.querySelectorAll('button');

    accordion.close(0);
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
    accordion.open(2);
    expect(buttons[2].getAttribute('aria-expanded')).toBe('true');
    accordion.toggle(2);
    expect(buttons[2].getAttribute('aria-expanded')).toBe('false');
  });
});
