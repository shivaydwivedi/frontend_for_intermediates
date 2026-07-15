import './styles/base.css';
import './styles/components.css';
import './styles/showcase.css';
import { suggestions } from './data/suggestions.js';
import { createAccordion } from './components/accordion.js';
import { createCombobox } from './components/combobox.js';
import { createDisclosureNavigation } from './components/disclosure-navigation.js';
import { createMenuButton } from './components/menu-button.js';
import { createModal } from './components/modal.js';
import { createTabs } from './components/tabs.js';
import { createToastRegion } from './components/toast.js';
import { createTooltip } from './components/tooltip.js';

const instances = [];

document.querySelectorAll('[data-component="accordion"]').forEach((root) => {
  instances.push(createAccordion(root));
});

document.querySelectorAll('[data-component="tabs"]').forEach((root) => {
  instances.push(createTabs(root));
});

document.querySelectorAll('[data-component="menu-button"]').forEach((root) => {
  instances.push(createMenuButton(root, {
    statusElement: document.querySelector('[data-menu-status]'),
  }));
});

document.querySelectorAll('[data-component="tooltip"]').forEach((root) => {
  instances.push(createTooltip(root));
});

document.querySelectorAll('[data-component="combobox"]').forEach((root) => {
  instances.push(createCombobox(root, { suggestions }));
});

document.querySelectorAll('[data-component="disclosure-navigation"]').forEach((root) => {
  instances.push(createDisclosureNavigation(root));
});

const modal = createModal(document.querySelector('#preferences-dialog'), {
  initialFocus: '#theme-select',
});
instances.push(modal);

document.querySelector('[data-open-modal]')?.addEventListener('click', (event) => {
  modal.open(event.currentTarget);
});

const toastRegion = createToastRegion(document.querySelector('[data-toast-region]'));
instances.push(toastRegion);

document.querySelectorAll('[data-toast-demo]').forEach((button) => {
  button.addEventListener('click', () => {
    toastRegion.showToast(button.dataset.toastMessage, { tone: button.dataset.toastDemo });
  });
});

window.componentShowcase = { instances };
