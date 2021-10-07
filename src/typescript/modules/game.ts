export const game = {
  addLine: function (text: string) {
    let ul = document.querySelector('.message__list')! as HTMLInputElement;
    let li = document.createElement('li');

    text !== ' '
      ? li.appendChild(document.createTextNode('> ' + text))
      : li.appendChild(document.createTextNode(text));
    li.setAttribute('class', 'message__text');
    ul.appendChild(li);
  },
};
