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
