'use strict';

const question = function () {
  responsInput.value = '';

  response = Math.trunc(Math.random() * magicAnswer.length);
  addLine(magicAnswer[response]);
};

const open = responsInput.addEventListener('keydown', function (e) {
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
  }
});

responsBtn.addEventListener('click', function () {
  if (responsInput.value !== '' && Object.keys(player).length === 0) {
    addName();
  } else if (
    responsInput.value !== '' &&
    messageSection.classList.contains('m8b')
  ) {
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
  responsInput.placeholder = `Question`;
});

exitBtn.addEventListener('click', function () {
  exit();
});
