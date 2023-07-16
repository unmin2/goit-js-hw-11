export default class LoadMoreBtn {
  constructor({ selector, isHidden = false }) {
    this.button = document.querySelector(selector);
    isHidden && this.hide();
  }

  enable() {
    this.button.disabled = false;
    this.button.textContent = 'Load more';
  }
  disable() {
    this.button.disabled = true;
    this.button.textContent = 'Loading...';
  }
  show() {
    this.button.classList.remove('hidden');
  }
  hide() {
    this.button.classList.add('hidden');
  }
}