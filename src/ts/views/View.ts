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

  render(data: string = '') {
    const markUp = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }

  renderHeading(data: string = '') {
    const markUp = this._generateHeading(data);
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
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
