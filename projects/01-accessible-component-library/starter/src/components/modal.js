export function createModal(dialog) {
  if (!(dialog instanceof HTMLDialogElement)) {
    throw new Error('Modal requires a dialog element.');
  }

  // TODO: Move focus inside on open, trap Tab/Shift+Tab, close on Escape,
  // restore focus to the opener, and remove listeners in destroy().
  return {
    open() {
      dialog.showModal();
    },
    close() {
      if (dialog.open) dialog.close();
    },
    destroy() {},
  };
}
