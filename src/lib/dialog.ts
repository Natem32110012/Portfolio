export function showModal(selector: string) {
  const dialog = document.querySelector(selector);
  if (!(dialog instanceof HTMLDialogElement) || dialog.open) return;
  dialog.dataset.opened = String(Date.now());
  dialog.showModal();
}
