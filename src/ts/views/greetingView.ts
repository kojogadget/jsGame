import View from './View';

class GreetingView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateMarkup = function (data: object) {
      return `> Welcome, ${
        data ? data : 'Mr X'
      }! What program do you want to try?`;
    };
  }

  addHandlerName(handler: any) {
    this._interaction.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getName() {
    const form = this._interaction.querySelector(
      '.response__text'
    )! as HTMLInputElement;
    const name = form.value;
    this._clearInput();
    return name;
  }
}

export default new GreetingView();
