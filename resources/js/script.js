'use strict';

///////////////////////////////////////////////
// VARIABLES

// Objects
const player = {};

// Variables
let response = 0;
let line = 1;
let collatzNumber = 0;
let collatzEquation = '';

// Arrays
const magicAnswer = [
  'Not with that look...',
  'Get out of here',
  'Yes!',
  'No..',
  'Dum question..next!',
  `We'll see`,
  'Maybe',
  'Do you need a hug?',
  'Think about it..',
  'Hysj',
  'Ew!',
  'What is your point? Stupid..',
  'k',
];

// Text input section
const responsInput = document.getElementById('command');
const responsSection = document.querySelector('.respons');
const responsBtn = document.querySelector('.respons__btn');

// Options buttons
const optionsSection = document.querySelector('.options');
const m8bBtn = document.getElementById('magic8ball');
const collatzBtn = document.getElementById('collatz');

// Message section
const messageSection = document.querySelector('.message');
const messageActive = document.querySelector('.text-box');

// Exit button
const exitBtn = document.querySelector('.exit');

///////////////////////////////////////////////
// MESSAGES

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

  text !== ' '
    ? li.appendChild(document.createTextNode('> ' + text))
    : li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'message__text');
  ul.appendChild(li);
};

const addLineMore = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');

  text !== ' '
    ? li.appendChild(document.createTextNode('  ' + text))
    : li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'message__text--2');
  ul.appendChild(li);
};

const addLineCollatz = function (text) {
  let ul = document.querySelector('.message__list');
  let li = document.createElement('li');

  text !== ' '
    ? li.appendChild(document.createTextNode('  ' + text))
    : li.appendChild(document.createTextNode(text));
  li.setAttribute('class', 'message__text--3');
  ul.appendChild(li);
};

///////////////////////////////////////////////
// MIXINS

const exit = function () {
  if (messageSection.classList.contains('m8b')) {
    messageSection.classList.remove('m8b');
  } else if (messageSection.classList.contains('collatz')) {
    messageSection.classList.remove('collatz');
    responsInput.type = 'text';
  }

  let exitText = [
    `Do you wish to try something else?`,
    `Okay ${player.name}, what's next?`,
    `Lets do another one!`,
    `Are you done?`,
  ];

  responsInput.value = '';
  response = Math.trunc(Math.random() * exitText.length);
  addLine(` `);
  addLine(` `);
  addLine(` `);
  addLine(exitText[response]);
  responsInput.placeholder = `Command`;
  responsSection.classList.add('hidden');
  optionsSection.classList.remove('hidden');
  messageSection.classList.remove('active');
  exitBtn.classList.add('hidden');
};

const active = function () {
  optionsSection.classList.add('hidden');
  responsSection.classList.remove('hidden');
  messageSection.classList.add('active');
  exitBtn.classList.remove('hidden');
};

exitBtn.addEventListener('click', function () {
  exit();
});

document.addEventListener('keydown', function (e) {
  if (messageSection.classList.contains('active') && e.key === 'Escape') {
    exit();
  }
});

///////////////////////////////////////////////
// PLAYER

const addName = function () {
  player.name = responsInput.value;
  responsInput.value = '';

  addLine(`Welcome, ${player.name}! What program do you want to try?`);
  responsSection.classList.add('hidden');
  optionsSection.classList.remove('hidden');
};

///////////////////////////////////////////////
// MAGIC 8 BALL

const question = function () {
  responsInput.value = '';

  response = Math.trunc(Math.random() * magicAnswer.length);
  addLine(magicAnswer[response]);
};

m8bBtn.addEventListener('click', function () {
  active();
  messageSection.classList.add('m8b');
  addHeading('Magic 8 Ball');
  addLine('Ask me a question!');
  responsInput.placeholder = `Question`;
});

///////////////////////////////////////////////
// COLLATZ

collatzBtn.addEventListener('click', function () {
  active();
  messageSection.classList.add('collatz');
  addHeading('Collatz');
  addHeading(`Math's simplest impossible problem!`);
  addLineMore(
    `If you take a number through this equation the output will always become 1, whatever positive number. 
    The equation will take a even number en divide it by 2, and a odd number will be multiplied by 3 and be added a 1. 
    The result will go through the same process and finally give us 1 as the final result.`
  );
  addLine(' ');
  addLine('Try it out:');
  responsInput.placeholder = `Number`;
  responsInput.type = 'number';
});

const collatz = function () {
  if (Number(responsInput.value) > 0) {
    collatzNumber = Number(responsInput.value);
    collatzEquation += String(collatzNumber);

    while (collatzNumber !== 1) {
      if (collatzNumber % 2 === 0) {
        collatzNumber = collatzNumber / 2;
        collatzEquation += ' -> ';
        collatzEquation += String(collatzNumber);
      } else {
        collatzNumber = collatzNumber * 3 + 1;
        collatzEquation += ' -> ';
        collatzEquation += String(collatzNumber);
      }
    }
    addLineCollatz(collatzEquation);
    collatzEquation = '';
  } else {
    addLine('The number must be positive..');
  }
};

///////////////////////////////////////////////
// RESPONSE

// Controlling by keyboard
responsInput.addEventListener('keydown', function (e) {
  if (
    e.key === 'Enter' &&
    responsInput.value !== '' &&
    Object.keys(player).length === 0
  ) {
    addName();
  } else if (
    e.key === 'Enter' &&
    responsInput.value !== '' &&
    messageSection.classList.contains('m8b')
  ) {
    question();
  } else if (
    e.key === 'Enter' &&
    responsInput.value !== '' &&
    messageSection.classList.contains('collatz')
  ) {
    collatz();
  }
});

// Controlling by button
responsBtn.addEventListener('click', function () {
  if (responsInput.value !== '' && Object.keys(player).length === 0) {
    addName();
  } else if (
    responsInput.value !== '' &&
    messageSection.classList.contains('m8b')
  ) {
    question();
  } else if (
    responsInput.value !== '' &&
    messageSection.classList.contains('collatz')
  ) {
    collatz();
  }
});
