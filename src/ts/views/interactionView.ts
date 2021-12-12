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

  _hideInteraction() {
    if (!this._responseForm.classList.contains('hidden'))
      this._responseForm.classList.toggle('hidden');
    if (!this._options.classList.contains('hidden'))
      this._options.classList.toggle('hidden');
  }

  renderOption() {
    if (!this._responseForm.classList.contains('hidden'))
      this._responseForm.classList.toggle('hidden');
    if (this._options.classList.contains('hidden'))
      this._options.classList.toggle('hidden');
  }

  // NEWrenderOption(data: any) {
  //   const markUp = data
  //     .map(
  //       (game: any) => `<li class="options__item">
  //   <button class="options__btn btn" data-game="${game.id}">${game.heading}</button>
  // </li>`
  //     )
  //     .join('');
  //   this._options.innerHTML = '';
  //   this._options.insertAdjacentHTML('beforeend', markUp);
  // }

  setInteraction(game: any) {
    if (game.interaction === 'response') {
      this._responseInput.placeholder = game.placeholder[0];
      this._responseInput.type = game.inputType;
      if (game.inputOption) {
        game.inputOption.forEach((_: any, i: number) => {
          if (i % 2 === 0) {
            this._responseInput.setAttribute(
              game.inputOption[i],
              game.inputOption[i + 1]
            );
          }
        });
      }

      this._toggleOptionResponse();
      this._responseInput.focus();
      return;
    }
    this._hideInteraction();
  }

  resetResponse() {
    const el = this._responseInput;
    el.value = '';
    while (el.attributes.length > 0) el.removeAttribute(el.attributes[0].name);
    el.setAttribute('type', 'text');
    el.setAttribute('class', 'response__text');
    el.setAttribute('placeholder', 'Reset');
    el.setAttribute('autocomplete', 'off');
  }
}

export default new InteractionView();
