import View from './View';

class GameView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.message__list');

    this._generateHeading = function (data: string) {
      return `
                <li class="header--2">${data}</li>
          `;
    };

    this._generateMarkup = function (data: string) {
      return `
                <li class="message__text">> ${data}</li>
          `;
    };
  }

  addHandlerOptions(handler: any) {
    document.querySelector('.options')?.addEventListener('click', function (e) {
      const press = e.target! as HTMLElement;
      const btn = press.closest('.options__btn')! as HTMLElement;
      const { game } = btn.dataset;
      handler(game);
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

  initGame(game: string) {
    const exitBtn = document.querySelector('.exit')! as HTMLElement;
    exitBtn.classList.toggle('hidden');

    if (game === 'magic8Ball') this._responseInput.placeholder = 'Question';
  }
}

export default new GameView();
