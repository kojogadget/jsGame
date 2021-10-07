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
import { game } from './modules/game.js';

responseBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (game.state === 'name') {
    game.addLine(player.addName());
    game.state = 'options';
  }
});
