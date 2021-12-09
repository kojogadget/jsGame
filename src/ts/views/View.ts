import icon from '../../img/SVG/cross.svg';
import { TYPING_SPEED } from '../config';

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
      this._parentElement.insertAdjacentHTML('beforeend', markUp);
      this._setWindow();
      return;
    }

    if (type === 'custom') {
      const id = new Date().toISOString().slice(-12);
      const markUp = data;
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `
      <li class="message__text" id="${id}"></li>
          `
      );
      const pos = document.getElementById(id)! as HTMLElement;

      this._setWindow();
      this._writingText(markUp, pos);
      return;
    }

    if (type === 'quick') {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `
      <li class="message__text">${data}</li>
          `
      );
      this._setWindow();
      return;
    }

    if (type === 'empty') {
      const markUp = `
        <li class="message__text">&nbsp;</li>
        <li class="message__text">&nbsp;</li>
            `;
      this._parentElement.insertAdjacentHTML('beforeend', markUp);
      this._setWindow();
      return;
    }

    const id = new Date().toISOString().slice(-12);
    const markUp = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML(
      'beforeend',
      `
      <li class="message__text" id="${id}"></li>
          `
    );
    const pos = document.getElementById(id)! as HTMLElement;

    this._setWindow();
    this._writingText(markUp, pos);
  }

  _setWindow() {
    const container = document.querySelector(
      '.text-box__container'
    )! as HTMLElement;

    container.scrollTo(0, container.scrollHeight);
  }

  _writingText(markUp: string, position: HTMLElement) {
    let textPosition = 0;
    const speed = TYPING_SPEED;

    function write() {
      if (textPosition < markUp.length) {
        position.innerHTML += markUp.charAt(textPosition);
        textPosition++;
        setTimeout(write, speed);
      }
    }
    write();
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
