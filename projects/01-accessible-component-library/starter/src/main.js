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

document.querySelectorAll('[data-component="accordion"]').forEach(createAccordion);
document.querySelectorAll('[data-component="tabs"]').forEach(createTabs);
document.querySelectorAll('[data-component="menu-button"]').forEach(createMenuButton);
document.querySelectorAll('[data-component="tooltip"]').forEach(createTooltip);
document.querySelectorAll('[data-component="combobox"]').forEach((root) => createCombobox(root, { suggestions }));
document.querySelectorAll('[data-component="disclosure-navigation"]').forEach(createDisclosureNavigation);

const modal = createModal(document.querySelector('#preferences-dialog'));
document.querySelector('[data-open-modal]')?.addEventListener('click', () => modal.open());
document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => modal.close());
});

const toastRegion = createToastRegion(document.querySelector('[data-toast-region]'));
document.querySelectorAll('[data-toast-demo]').forEach((button) => {
  button.addEventListener('click', () => toastRegion.showToast(button.dataset.toastMessage));
});
