'use strict';

// Objects
const player = {};

// Variables
let response = 0;
let line = 1;

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

// Message section
const messageSection = document.querySelector('.message');
const messageActive = document.querySelector('.text-box');

// Magic 8 Ball section
const m8bSection = document.querySelector('.magic8ball');
const m8bText = document.querySelector('.magic__text');

// Exit button
const exitBtn = document.querySelector('.exit');
