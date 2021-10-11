const responseInput = document.getElementById('command')! as HTMLInputElement;
const responseBtn = document.querySelector(
  '.response__btn'
)! as HTMLInputElement;
const responseSection = document.querySelector(
  '.response'
)! as HTMLInputElement;
const optionsSection = document.querySelector('.options')! as HTMLInputElement;
const exitBtn = document.querySelector('.exit')! as HTMLInputElement;
import { game } from './game.js';
import { player } from './player.js';

export const collatz = {
  number: 0,
  equation: '',

  play: function () {
    game.state = 'collatz';
    optionsSection.classList.toggle('hidden');
    responseSection.classList.toggle('hidden');
    exitBtn.classList.toggle('hidden');

    game.addHeading('Collatz');
    game.addHeading(`Math's simplest impossible problem!`);
    game.addLineMore(
      `If you take a number through this equation the output will always become 1, whatever positive number.
      The equation will take a even number en divide it by 2, and a odd number will be multiplied by 3 and be added a 1.
      The result will go through the same process and finally give us 1 as the final result.`
    );
    game.addLineEmpty();
    game.addLine('Try it out:');
    responseInput.placeholder = `Number`;
    responseInput.type = 'number';

    responseBtn.addEventListener('click', function (e) {
      e.preventDefault();

      collatz.action();
    });

    exitBtn.addEventListener('click', collatz.exit);
  },

  action: function () {
    if (+responseInput.value > 0) {
      collatz.equation = '';
      collatz.number = 0;
      collatz.number = +responseInput.value;
      collatz.equation += String(collatz.number);
      responseInput.value = '';

      while (collatz.number !== 1) {
        if (collatz.number % 2 === 0) {
          collatz.number = collatz.number / 2;
          collatz.equation += ' -> ';
          collatz.equation += String(collatz.number);
        } else {
          collatz.number = collatz.number * 3 + 1;
          collatz.equation += ' -> ';
          collatz.equation += String(collatz.number);
        }
      }
      return game.addLineCollatz(collatz.equation);
    } else {
      return game.addLine('The number must be positive..');
    }
  },

  exit: function () {
    responseInput.placeholder = `Command`;
    optionsSection.classList.toggle('hidden');
    responseSection.classList.toggle('hidden');
    exitBtn.classList.toggle('hidden');

    const exitText = [
      `Do you wish to try something else?`,
      `Okay ${player.name}, what's next?`,
      `Lets do another one!`,
      `Are you done?`,
    ];
    const response = Math.trunc(Math.random() * exitText.length);

    game.addLineEmpty();
    game.addLineEmpty();
    game.addLineEmpty();
    game.addLine(exitText[response]);
  },
};
