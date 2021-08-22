'use strict';

// Objects
const player = {};

// Variables
let response = 0;
let line = 1;

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
const responsInput = document.getElementById('command');
const responsSection = document.querySelector('.respons');
const responsBtn = document.querySelector('.respons__btn');

// Options buttons
const optionsSection = document.querySelector('.options');
const m8bBtn = document.getElementById('magic8ball');

// Message section
const messageSection = document.querySelector('.message');

// Magic 8 Ball section
const m8bSection = document.querySelector('.magic8ball');
const m8bText = document.querySelector('.magic__text');

// Exit button
const exitBtn = document.querySelector('.exit');
