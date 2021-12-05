import View from './View';

class IntroView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateMarkup = function () {
      this._clear();

      return `
                <li class="message__text">> Hi! What is your name?</li>
          `;
    };
  }

  addHandlerIntro(handler: any) {
    window.addEventListener('load', function () {
      handler();
    });
  }
}

export default new IntroView();
