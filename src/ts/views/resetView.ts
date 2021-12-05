import View from './View';

class ResetView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateMarkup = function (data: string) {
      const reset = [
        `Do you wish to try something else?`,
        `Okay ${data}, what's next?`,
        `Lets do another one!`,
        `Are you done?`,
      ];
      const resetNumber = Math.trunc(Math.random() * reset.length);

      return `
                <li class="message__text">> ${reset[resetNumber]}</li>
          `;
    };
  }
}

export default new ResetView();
