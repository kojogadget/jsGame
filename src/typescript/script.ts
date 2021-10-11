// Text input section
const responseInput = document.getElementById('command')! as HTMLInputElement;
const responseSection = document.querySelector(
  '.response'
)! as HTMLInputElement;
const responseBtn = document.querySelector(
  '.response__btn'
)! as HTMLInputElement;

// Message section
const messageSection = document.querySelector('.message');
const messageActive = document.querySelector('.text-box');

// Exit button
const exitBtn = document.querySelector('.exit');

import { game } from './modules/game.js';
import { player } from './modules/player.js';
import { ttt } from './modules/tic_tac_toe.js';
import { inventory } from './modules/inventory_check.js';
import { m8b } from './modules/magic_8_ball.js';
import { birthdays } from './modules/birthdays.js';
import { collatz } from './modules/collatz.js';
import { guess } from './modules/guess_the_number.js';
import { draw } from './modules/draw_something.js';

responseBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (game.state === 'name') {
    game.addLine(player.addName());
    game.state = 'options';
  }
});

Object.entries(game.options).forEach(([key, option]) => {
  option.addEventListener('click', function (e) {
    if (key === 'ttt') {
      ttt.play();
    }
    if (key === 'inventory') {
      inventory.play();
    }
    if (key === 'm8b') {
      m8b.play();
    }
    if (key === 'birthdays') {
      birthdays.play();
    }
    if (key === 'collatz') {
      collatz.play();
    }
    if (key === 'guess') {
      guess.play();
    }
    if (key === 'draw') {
      draw.play();
    }
  });
});
