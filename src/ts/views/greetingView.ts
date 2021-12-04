import View from './View';

class GreetingView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.text-box');

    this._generateMarkup = function () {
      return `
      <div class="message">
        <ul class="message__list">
          <li class="message__text">> Hi! What is your name?</li>
        </ul>
      </div>
    `;
    };
  }
}

export default new GreetingView();
