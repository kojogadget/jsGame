import View from './View';

class InteractionView extends View {
  _options = document.querySelector('.options') as HTMLElement;
  constructor() {
    super();
    this._parentElement = document.querySelector('.interaction');
  }

  _toggleOptionResponse() {
    this._responseForm.classList.toggle('hidden');
    this._options.classList.toggle('hidden');
  }

  renderOption() {
    if (!this._responseForm.classList.contains('hidden'))
      this._responseForm.classList.toggle('hidden');
    if (this._options.classList.contains('hidden'))
      this._options.classList.toggle('hidden');
  }

  _hideInteraction() {
    if (!this._responseForm.classList.contains('hidden'))
      this._responseForm.classList.toggle('hidden');
    if (!this._options.classList.contains('hidden'))
      this._options.classList.toggle('hidden');
  }

  setInteraction(mode: string) {
    if (mode === 'magic8Ball') {
      this._responseInput.placeholder = 'Question';
      this._toggleOptionResponse();
      this._responseInput.focus();
      return;
    }
    this._hideInteraction();
  }
}

export default new InteractionView();
