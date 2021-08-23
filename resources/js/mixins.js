'use strict';

const exit = function () {
  responsInput.value = '';
  addLine(` `);
  addLine(` `);
  addLine(` `);
  addLine(`Do you wish to try something else?`);
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
