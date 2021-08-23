'use strict';
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
  }
});
