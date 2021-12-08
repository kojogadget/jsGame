import View from './View';

class IntroView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateMarkup = function () {
      this._clear();

      return `> Hi! What is your name?`;
    };
  }

  addHandlerIntro(handler: any) {
    this._renderExit();
    window.addEventListener('load', function () {
      handler();
    });
  }
}

export default new IntroView();
