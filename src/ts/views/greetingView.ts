import View from './View';

class GreetingView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateMarkup = function (data: object) {
      return `
          <li class="message__text">> Welcome, ${
            data ? data : 'Mr X'
          }! What program do you want to try?</li>
          `;
    };
  }

  addHandlerName(handler: any) {
    this._responseForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getName() {
    const name = this._responseInput.value;
    this._clearInput();
    return name;
  }
}

export default new GreetingView();
