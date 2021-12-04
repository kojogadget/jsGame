export default class View {
  _parentElement: any;
  _generateMarkup: any;

  renderLine() {
    const markUp = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
