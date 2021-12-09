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
    render: '',

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
    render: '',

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
    render: '',

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
    id: 'collatz',
    intro: `
    Math's simplest impossible problem! If you take a number through this equation the output will always become 1, whatever positive number. Try it out :)`,
    error: '> You need to give a number...',
    render: 'quick',

    interaction: 'response',
    inputType: 'number',
    inputOption: ['min', '1'],
    placeholder: ['Number', 'Try again :)'],

    play: function (int: string) {
      let input = +int;
      const arr = [input];

      while (input !== 1) {
        if (input % 2 === 0) {
          input /= 2;
        } else {
          input = input * 3 + 1;
        }
        arr.push(input);
      }

      return arr.join(' -> ');
    },
  },
  {
    heading: 'Guess The Number',
    id: 'guessthenumber',
    intro: 'GAME NOT READY!',
    error: '',
    render: '',

    interaction: '',
    inputType: '',
    placeholder: ['Question', 'Another question'],

    play: function () {
      return 'NOT READY!';
    },
  },
];
