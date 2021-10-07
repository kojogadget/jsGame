const responseInput = document.getElementById('command');
const responseSection = document.querySelector('.response');
const responseBtn = document.querySelector('.response__btn');
const optionsSection = document.querySelector('.options');
const m8bBtn = document.getElementById('magic8ball');
const collatzBtn = document.getElementById('collatz');
const messageSection = document.querySelector('.message');
const messageActive = document.querySelector('.text-box');
const exitBtn = document.querySelector('.exit');
import { addName } from './modules/player.js';
import { game } from './modules/game.js';
responseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addName(game.addLine);
});
