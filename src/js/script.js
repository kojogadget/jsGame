const responseInput = document.getElementById('command');
const responseSection = document.querySelector('.response');
const responseBtn = document.querySelector('.response__btn');
const optionsSection = document.querySelector('.options');
const m8bBtn = document.getElementById('magic8ball');
const collatzBtn = document.getElementById('collatz');
const messageSection = document.querySelector('.message');
const messageActive = document.querySelector('.text-box');
const exitBtn = document.querySelector('.exit');
import { player } from './modules/player.js';
const addLine = function (text) {
    let ul = document.querySelector('.message__list');
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
