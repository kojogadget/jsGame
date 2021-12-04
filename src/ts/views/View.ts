export default class View {
  _parentElement: 

  renderLine(markUp: string) {
    this._parentElement.insertAdjacentHTML('beforeend', markUp);
  }
}
