export const state = {
  name: '',
  active: '',
};

export const games = [
  {
    heading: 'Tic Tac Toe',
    id: 'tictactoe',
    intro: 'GAME NOT READY!',
  },
  {
    heading: 'Inventory Check',
    id: 'inventorycheck',
    intro: 'GAME NOT READY!',
  },
  {
    heading: 'Magic 8 Ball',
    id: 'magic8Ball',
    intro: 'Ask me a question!',
    answers: [
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
    ],
  },
  {
    heading: 'Collatz',
    id: 'collatz',
    intro: 'GAME NOT READY!',
  },
  {
    heading: 'Guess The Number',
    id: 'guessthenumber',
    intro: 'GAME NOT READY!',
  },
];
