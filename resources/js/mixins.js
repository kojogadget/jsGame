'use strict';

const exit = function () {
  if (messageSection.classList.contains('m8b')) {
    messageSection.classList.remove('m8b');
  } else if (messageSection.classList.contains('collatz')) {
    messageSection.classList.remove('collatz');
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
