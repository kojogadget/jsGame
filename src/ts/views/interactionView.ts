import View from './View';

class InteractionView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.interaction');
  }

  toggleInteraction() {
    this._parentElement.querySelector('.response').classList.toggle('hidden');
    this._parentElement.querySelector('.options').classList.toggle('hidden');
  }
}

export default new InteractionView();
