const responseInput = document.getElementById('command');
const responseSection = document.querySelector('.response');
const optionsSection = document.querySelector('.options');
const exitBtn = document.querySelector('.exit');
import { player } from './player.js';
export const game = {
    state: 'name',
    options: {
        ttt: document.getElementById('tictactoe'),
        inventory: document.getElementById('inventorycheck'),
        m8b: document.getElementById('magic8ball'),
        birthdays: document.getElementById('birthdays'),
        collatz: document.getElementById('collatz'),
        guess: document.getElementById('guessthenumber'),
        draw: document.getElementById('drawsomething'),
    },
    addHeading: function (text) {
        let ul = document.querySelector('.message__list');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        li.setAttribute('class', 'header--2');
        ul.appendChild(li);
    },
    addLine: function (text) {
        const ul = document.querySelector('.message__list');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('> ' + text));
        li.setAttribute('class', 'message__text');
        ul.appendChild(li);
    },
    addLineMore: function (text) {
        let ul = document.querySelector('.message__list');
        let li = document.createElement('li');
        text !== ' '
            ? li.appendChild(document.createTextNode('  ' + text))
            : li.appendChild(document.createTextNode(text));
        li.setAttribute('class', 'message__text--2');
        ul.appendChild(li);
    },
    addLineEmpty: function () {
        const ul = document.querySelector('.message__list');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(' '));
        li.setAttribute('class', 'message__text');
        ul.appendChild(li);
    },
    addLineCollatz: function (text) {
        let ul = document.querySelector('.message__list');
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
