export const state = {
  name: '',
  active: '',
};

export const games = [
  // TODO
  // {
  //   heading: 'Tic Tac Toe',
  //   id: 'tictactoe',
  //   intro: 'GAME NOT READY!',
  //   error: '',
  //   renderType: '',

  //   interaction: '',
  //   inputType: '',
  //   placeholder: ['Question', 'Another question'],

  //   play: function () {
  //     return 'NOT READY!';
  //   },
  // },
  // {
  //   heading: 'Inventory Check',
  //   id: 'inventorycheck',
  //   intro: 'GAME NOT READY!',
  //   error: '',
  //   renderType: '',

  //   interaction: '',
  //   inputType: '',
  //   placeholder: ['Question', 'Another question'],

  //   play: function () {
  //     return 'NOT READY!';
  //   },
  // },
  {
    heading: 'Magic 8 Ball',
    id: 'magic8Ball',
    intro: 'Ask me a question!',
    error: '> You need to type something...',
    renderType: '',

    interaction: 'response',
    inputType: 'text',
    inputOption: {},
    placeholder: ['Question', 'Another question?'],

    play: function () {
      const answers = [
        'Not with that look...',
        'Get out of here',
        'Yes!',
        'No..',
        'Dum question..next!',
        `We'll see`,
        'Maybe',
        'Do you need a hug?',
        'Think about it..',
        'Hush!',
        'Ew!',
        'What is your point? Stupid..',
        'k',
      ];
      const index = Math.trunc(Math.random() * answers.length);

      return answers[index]! as string;
    },
  },
  {
    heading: 'Collatz',
    subHeading: `Math's simplest impossible problem!<br>If you take a number through this equation the output will always become 1, whatever positive number. The equation will take a even number en divide it by 2, and a odd number will be multiplied by 3 and be added a 1. The result will go through the same process and finally give us 1 as the final result`,
    id: 'collatz',
    intro: `Try it out :)`,
    error: '> You need to give a number...',
    renderType: 'quick',

    interaction: 'response',
    inputType: 'number',
    inputOption: { min: '1' },
    placeholder: ['Number', 'Try again :)'],

    play: function (input: string) {
      let num = +input;
      const result = [num];

      while (num !== 1) {
        if (num % 2 === 0) {
          num /= 2;
        } else {
          num = num * 3 + 1;
        }
        result.push(num);
      }

      return result.join(' -> ');
    },
  },
  {
    heading: 'Guess The Number',
    id: 'guessthenumber',
    intro: `I'm thinking of a number between 1 and 20. Can you guess the number with 6 attempts? :)`,
    error: 'You need to give a number...',
    renderType: '',

    interaction: 'response',
    inputType: 'number',
    inputOption: { min: '1', max: '20' },
    placeholder: ['Guess', 'Guess again :)'],

    game: {
      answer: 1,
      complete: false,
      attempt: 0,
      reset: [{ heading: 'PLAY AGAIN', id: 'play' }],
    },

    init: function () {
      this.game.answer = Math.ceil(Math.random() * 20);
      this.game.complete = false;
      this.game.attempt = 0;
    },

    play: function (input: string) {
      const guess = +input;

      if (guess === this.game.answer) {
        this.game.complete = true;
        return 'Correct! Do you want to try again?';
      }

      this.game.attempt++;

      if (this.game.attempt === 6) {
        this.game.complete = true;
        return `No, the answer is ${this.game.answer}... Do you want to try again?`;
      }

      return guess < this.game.answer ? 'Too low...' : 'Too high...';
    },
  },
];
