import View from './View';

class InteractionView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.interaction');
  }

  renderOption(data: any) {
    const markUp = data
      .map(
        (game: any) => `<li class="interaction__item">
                          <button class="interaction__btn btn" data-game="${game.id}">${game.heading}</button>
                        </li>`
      )
      .join('');
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }

  renderResponse(
    data: any,
    placeholderOption: number = 0,
    btnText: boolean = false
  ) {
    const input = this._parentElement.querySelector(
      '.response__text'
    )! as HTMLInputElement;

    if (!data) {
      const markUp = `
      <div class="response">
      <input
          type="text"
          class="response__text"
          placeholder="Name"
          autocomplete="off"
        />
      <input type="submit" class="response__btn btn" value="&rarr;"></input>
      </div>
      `;

      this._clear();
      this._parentElement.insertAdjacentHTML('beforeend', markUp);
      this._focusInput();
      return;
    }

    const markUp = `
    <div class="response">
      <input
          type="${data.inputType}"
          class="response__text"
          placeholder="${data.placeholder[placeholderOption]}"
          autocomplete="off"
          ${data.inputOption.min ? `min="${data.inputOption.min}"` : ''}
          ${data.inputOption.max ? `max="${data.inputOption.max}"` : ''}
        />
      <input type="submit" class="response__btn btn" value="${
        btnText ? data.btnValue : '&rarr;'
      }"></input>
      </div>
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
    this._focusInput();
  }

  _focusInput() {
    const input = this._parentElement.querySelector(
      '.response__text'
    )! as HTMLInputElement;
    input.focus();
  }
}

export default new InteractionView();
