const responseBtn = document.querySelector(
  '.response__btn'
)! as HTMLInputElement;
const exitBtn = document.querySelector('.exit')! as HTMLInputElement;

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
  if (game.state === 'm8b') {
    m8b.action();
  }
  if (game.state === 'collatz') {
    collatz.action();
  }
});

exitBtn.addEventListener('click', game.exit);

document.documentElement.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && game.state !== 'options' && game.state !== 'name')
    game.exit();

  if (e.key === '1' && game.state === 'options') ttt.play();
  if (e.key === '2' && game.state === 'options') inventory.play();
  if (e.key === '3' && game.state === 'options') m8b.play();
  if (e.key === '4' && game.state === 'options') birthdays.play();
  if (e.key === '5' && game.state === 'options') collatz.play();
  if (e.key === '6' && game.state === 'options') guess.play();
  if (e.key === '7' && game.state === 'options') draw.play();
});

Object.entries(game.options).forEach(([key, option]) => {
  option.addEventListener('click', function (e) {
    if (key === 'ttt') ttt.play();

    if (key === 'inventory') inventory.play();

    if (key === 'm8b') m8b.play();

    if (key === 'birthdays') birthdays.play();

    if (key === 'collatz') collatz.play();

    if (key === 'guess') guess.play();

    if (key === 'draw') draw.play();
  });
});
