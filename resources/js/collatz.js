'use strict';

collatzBtn.addEventListener('click', function () {
  active();
  messageSection.classList.add('collatz');
  addHeading('Collatz');
  addHeading(`Math's simplest impossible problem!`);
  addLineMore(
    `If you take a number through this equation the output will always become 1, whatever the number. 
    The equation will take a even number en divide it by 2, and a odd number will be multiplied by 3 and be added a 1. 
    The result will go through the same process and finally give us 1 as the final result.`
  );
  addLine(' ');
  addLine('Try it out:');
  responsInput.placeholder = `Number`;
  responsInput.type = 'number';
});

const collatz = function () {
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
};
