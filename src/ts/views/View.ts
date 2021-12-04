import greetingView from './greetingView';

export default class View {
  _parentElement: any;
  _generateMarkup: any;

  renderLine() {
    const markUp = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }
}
