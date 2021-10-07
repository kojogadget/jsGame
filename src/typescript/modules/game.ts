export const game = {
  state: 'name',
  addLine: function (text: string) {
    const ul = document.querySelector('.message__list')! as HTMLInputElement;
    const li = document.createElement('li');

    text !== ' '
      ? li.appendChild(document.createTextNode('> ' + text))
      : li.appendChild(document.createTextNode(text));
    li.setAttribute('class', 'message__text');
    ul.appendChild(li);
  },
};
