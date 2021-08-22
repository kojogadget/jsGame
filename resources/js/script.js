'use strict';

// Variables
let response = 0;
let line = 1;

// Objects
const player = {};

// Arrays
const magicAnswer = [
  'Ikke sånn som du ser ut i dag...',
  'Ta deg en runde.',
  'Ja!',
  'Nei..',
  'Dårlig spørsmål..next!',
  'Vi får se.',
  'Kanskje det.',
  'Vil du heller ha en klem?',
  'Tenk deg om..',
  'Hysj',
  'Æsj!',
  'Hva mener du egentlig? Dumme jævel..',
  'k',
];

// Text input section
const command = document.getElementById('command');
const responsSection = document.querySelector('.respons');
const responsBtn = document.querySelector('.respons__btn');

// Options buttons
const optionsSection = document.querySelector('.options');
const m8bBtn = document.getElementById('magic8ball');

// Message section
const messageSection = document.querySelector('.message');

const welcomeMessage = document.querySelector('.message__line--2');
const welcomeMessageText = document.querySelector('.message__text--2');

// Magic 8 Ball section
const m8bSection = document.querySelector('.magic8ball');
const m8bText = document.querySelector('.magic__text');

// Exit button
const exitBtn = document.querySelector('.exit');

const addHeading = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'header--2');
  ul.appendChild(li);
};

const addLine = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode('> ' + text));
  li.setAttribute('class', 'message__text');
  ul.appendChild(li);
};

const addName = function () {
  player.name = command.value;
  command.value = '';

  addLine(`Welcome, ${player.name}! What program do you want to try?`);
  responsSection.classList.add('hidden');
  optionsSection.classList.remove('hidden');
};

const exit = function () {
  command.value = '';
  addLine(`Do you wish to try something else?`);
  responsSection.classList.add('hidden');
  optionsSection.classList.remove('hidden');
  exitBtn.classList.add('hidden');
};

const question = function () {
  command.value = '';

  response = Math.trunc(Math.random() * magicAnswer.length);
  addLine(magicAnswer[response]);
};

const open = command.addEventListener('keydown', function (e) {
  if (
    e.key === 'Enter' &&
    command.value !== '' &&
    Object.keys(player).length === 0
  ) {
    addName();
  } else if (
    e.key === 'Enter' &&
    command.value !== '' &&
    messageSection.classList.contains('m8b')
  ) {
    question();
  }
});

responsBtn.addEventListener('click', function () {
  if (command.value !== '' && Object.keys(player).length === 0) {
    addName();
  } else if (command.value !== '' && messageSection.classList.contains('m8b')) {
    question();
  }
});

m8bBtn.addEventListener('click', function () {
  optionsSection.classList.add('hidden');
  responsSection.classList.remove('hidden');
  exitBtn.classList.remove('hidden');
  messageSection.classList.add('m8b');
  addHeading('Magic 8 Ball');
  addLine('Ask me a question!');
  command.placeholder = `Question`;
});

exitBtn.addEventListener('click', function () {
  exit();
});
