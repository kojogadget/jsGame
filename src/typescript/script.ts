// Text input section
const responseInput = document.getElementById('command')! as HTMLInputElement;
const responseSection = document.querySelector(
  '.response'
)! as HTMLInputElement;
const responseBtn = document.querySelector(
  '.response__btn'
)! as HTMLInputElement;

// Options buttons
const optionsSection = document.querySelector('.options')! as HTMLInputElement;
const m8bBtn = document.getElementById('magic8ball');
const collatzBtn = document.getElementById('collatz');

// Message section
const messageSection = document.querySelector('.message');
const messageActive = document.querySelector('.text-box');

// Exit button
const exitBtn = document.querySelector('.exit');

import { player } from './modules/player.js';
// import { addName } from './modules/player.js';
import { game } from './modules/game.js';

const addLine = function (text: string) {
  let ul = document.querySelector('.message__list')! as HTMLInputElement;
  let li = document.createElement('li');

  text !== ' '
    ? li.appendChild(document.createTextNode('> ' + text))
    : li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'message__text');
  ul.appendChild(li);
};

const addName = function () {
  player.name = responseInput.value;
  responseInput.value = '';

  addLine(`Welcome, ${player.name}! What program do you want to try?`);
  responseSection.classList.add('hidden');
  optionsSection.classList.remove('hidden');
};

responseBtn.addEventListener('click', function (e) {
  e.preventDefault();

  addName();
});
