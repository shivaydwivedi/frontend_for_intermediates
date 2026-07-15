import { describe, expect, it, beforeEach } from 'vitest';
import { createModal } from '../src/components/modal.js';
import { click, element, key, resetDom } from './helpers.js';

function fixture() {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function close() {
    this.open = false;
    this.dispatchEvent(new Event('close'));
  };
  const opener = element('button', { text: 'Open' });
  const dialog = element('dialog', { 'aria-labelledby': 'title' }, [
    element('h2', { id: 'title', 'data-modal-title': '', text: 'Preferences' }),
    element('button', { type: 'button', id: 'first', text: 'First' }),
    element('button', { type: 'button', 'data-modal-close': '', text: 'Close' }),
  ]);
  document.body.append(opener, dialog);
  return { opener, dialog };
}

beforeEach(resetDom);

describe('modal', () => {
  it('opens and moves focus to the first useful control', () => {
    const { opener, dialog } = fixture();
    const modal = createModal(dialog, { initialFocus: '#first' });
    opener.focus();
    modal.open(opener);
    expect(dialog.open).toBe(true);
    expect(document.activeElement.id).toBe('first');
  });

  it('closes explicitly and restores focus', () => {
    const { opener, dialog } = fixture();
    const modal = createModal(dialog);
    modal.open(opener);
    click(dialog.querySelector('[data-modal-close]'));
    expect(dialog.open).toBe(false);
    expect(document.activeElement).toBe(opener);
  });

  it('contains Tab and Shift+Tab focus movement', () => {
    const { opener, dialog } = fixture();
    const modal = createModal(dialog, { initialFocus: '#first' });
    const buttons = dialog.querySelectorAll('button');
    modal.open(opener);
    buttons[1].focus();
    key(buttons[1], 'Tab');
    expect(document.activeElement).toBe(buttons[0]);
    key(buttons[0], 'Tab', { shiftKey: true });
    expect(document.activeElement).toBe(buttons[1]);
  });
});
