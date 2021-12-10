export const state = {
  name: '',
  active: '',
};

export const games = [
  {
    heading: 'Tic Tac Toe',
    id: 'tictactoe',
    intro: 'GAME NOT READY!',
    error: '',
    renderType: '',

    interaction: '',
    inputType: '',
    placeholder: ['Question', 'Another question'],

    play: function () {
      return 'NOT READY!';
    },
  },
  {
    heading: 'Inventory Check',
    id: 'inventorycheck',
    intro: 'GAME NOT READY!',
    error: '',
    renderType: '',

    interaction: '',
    inputType: '',
    placeholder: ['Question', 'Another question'],

    play: function () {
      return 'NOT READY!';
    },
  },
  {
    heading: 'Magic 8 Ball',
    id: 'magic8Ball',
    intro: 'Ask me a question!',
    error: '> You need to type something...',
    renderType: '',

    interaction: 'response',
    inputType: 'text',
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
    inputOption: ['min', '1'],
    placeholder: ['Number', 'Try again :)'],

    play: function (int: string) {
      let num = +int;
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
    intro: 'GAME NOT READY!',
    error: '',
    renderType: '',

    interaction: '',
    inputType: '',
    placeholder: ['Question', 'Another question'],

    play: function () {
      return 'NOT READY!';
    },
  },
];
