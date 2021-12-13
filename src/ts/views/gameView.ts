import View from './View';

class GameView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateHeading = function (data: string) {
      return `
                <td class="header--2">${data}</td>
          `;
    };

    this._generateMarkup = function (data: string) {
      return `> ${data}`;
    };
  }

  addHandlerOptions(handler: any) {
    this._interaction.addEventListener('click', function (e) {
      const press = e.target! as HTMLElement;
      const btn = press.closest('.interaction__btn')! as HTMLElement;

      if (!btn) return;

      const { game } = btn.dataset;

      const exitBtn = document.querySelector('.exit')! as HTMLElement;
      if (exitBtn.classList.contains('hidden'))
        exitBtn.classList.remove('hidden');

      handler(game);
    });
  }

  addHandlerPlay(handler: any) {
    this._interaction.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerExit(handler: any) {
    this._textBox.addEventListener('click', function (e) {
      const press = e.target! as HTMLElement;
      const btn = press.closest('.exit')! as HTMLElement;
      if (!btn) return;
      btn.classList.toggle('hidden');

      handler();
    });
  }

  gameResponse(game: any) {
    const input = this._interaction.querySelector(
      '.response__text'
    )! as HTMLInputElement;

    const response = input.value;
    if (!response) return this.render(game.error, 'custom');
    this._clearInput();

    return response;
  }
}

export default new GameView();
