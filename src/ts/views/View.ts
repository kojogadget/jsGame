export default class View {
  _parentElement: any;
  _generateMarkup: any;
  _textBox = document.querySelector('.text-box')! as HTMLElement;
  _responseForm = document.querySelector('.response')! as HTMLElement;
  _responseInput = document.querySelector(
    '.response__text'
  )! as HTMLInputElement;

  render(data: string = '') {
    const markUp = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _clearInput() {
    this._responseInput.value = '';
  }
}
