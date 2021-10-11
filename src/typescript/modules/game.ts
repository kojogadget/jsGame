export const game = {
  state: 'name',
  options: {
    ttt: document.getElementById('tictactoe')! as HTMLInputElement,
    inventory: document.getElementById('inventorycheck')! as HTMLInputElement,
    m8b: document.getElementById('magic8ball')! as HTMLInputElement,
    birthdays: document.getElementById('birthdays')! as HTMLInputElement,
    collatz: document.getElementById('collatz')! as HTMLInputElement,
    guess: document.getElementById('guessthenumber')! as HTMLInputElement,
    draw: document.getElementById('drawsomething')! as HTMLInputElement,
  },

  addHeading: function (text: string) {
    let ul = document.querySelector('.message__list')! as HTMLInputElement;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text));
    li.setAttribute('class', 'header--2');
    ul.appendChild(li);
  },

  addLine: function (text: string) {
    const ul = document.querySelector('.message__list')! as HTMLInputElement;
    const li = document.createElement('li');

    li.appendChild(document.createTextNode('> ' + text));
    li.setAttribute('class', 'message__text');
    ul.appendChild(li);
  },

  addLineMore: function (text: string) {
    let ul = document.querySelector('.message__list')! as HTMLInputElement;
    let li = document.createElement('li');

    text !== ' '
      ? li.appendChild(document.createTextNode('  ' + text))
      : li.appendChild(document.createTextNode(text));
    li.setAttribute('class', 'message__text--2');
    ul.appendChild(li);
  },

  addLineEmpty: function () {
    const ul = document.querySelector('.message__list')! as HTMLInputElement;
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(' '));
    li.setAttribute('class', 'message__text');
    ul.appendChild(li);
  },

  addLineCollatz: function (text: string) {
    let ul = document.querySelector('.message__list')! as HTMLInputElement;
    let li = document.createElement('li');

    text !== ' '
      ? li.appendChild(document.createTextNode('  ' + text))
      : li.appendChild(document.createTextNode(text));
    li.setAttribute('class', 'message__text--3');
    ul.appendChild(li);
  },
};
