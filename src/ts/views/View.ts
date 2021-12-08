import icon from '../../img/SVG/cross.svg';

export default class View {
  _parentElement: any;
  _generateMarkup: any;
  _generateHeading: any;
  _textBox = document.querySelector('.text-box')! as HTMLElement;
  _responseForm = document.querySelector('.response')! as HTMLElement;
  _responseInput = document.querySelector(
    '.response__text'
  )! as HTMLInputElement;

  render(data: string = '', type: string = '') {
    if (type === 'heading') {
      const markUp = this._generateHeading(data);
      return this._parentElement.insertAdjacentHTML('beforeend', markUp);
    }

    if (type === 'empty') {
      const markUp = `
        <li class="message__text">&nbsp;</li>
        <li class="message__text">&nbsp;</li>
            `;
      return this._parentElement.insertAdjacentHTML('beforeend', markUp);
    }

    const markUp = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }

  setWindow() {
    const container = document.querySelector(
      '.text-box__container'
    )! as HTMLElement;

    container.scrollTo(0, container.scrollHeight);
  }

  _renderExit() {
    const markUp = `
              <button class="exit hidden">
                <svg class="exit__icon">
                  ${icon}
                </svg>
              </button>
            `;
    document
      .querySelector('.text-box')
      ?.insertAdjacentHTML('afterbegin', markUp);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _clearInput() {
    this._responseInput.value = '';
  }
}
