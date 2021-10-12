const responseInput = document.getElementById('command')! as HTMLInputElement;
const responseSection = document.querySelector(
  '.response'
)! as HTMLInputElement;
const optionsSection = document.querySelector('.options')! as HTMLInputElement;
const exitBtn = document.querySelector('.exit')! as HTMLInputElement;

import { player } from './player.js';

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

  exit: function () {
    responseInput.placeholder = `Command`;
    optionsSection.classList.toggle('hidden');
    responseSection.classList.toggle('hidden');
    exitBtn.classList.toggle('hidden');
    game.state = 'options';

    const exitText = [
      `Do you wish to try something else?`,
      `Okay ${player.name}, what's next?`,
      `Lets do another one!`,
      `Are you done?`,
    ];
    const response = Math.trunc(Math.random() * exitText.length);
    responseInput.type = 'string';

    game.addLineEmpty();
    game.addLineEmpty();
    game.addLineEmpty();
    game.addLine(exitText[response]);
  },
};
