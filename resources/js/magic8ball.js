'use strict';

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
