const responseInput = document.getElementById('command');
const responseSection = document.querySelector('.response');
const optionsSection = document.querySelector('.options');
const exitBtn = document.querySelector('.exit');
import { game } from './game.js';
export const m8b = {
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
    play: function () {
        game.state = 'm8b';
        optionsSection.classList.toggle('hidden');
        responseSection.classList.toggle('hidden');
        exitBtn.classList.toggle('hidden');
        responseInput.placeholder = `Question`;
        game.addLineEmpty();
        game.addHeading('Magic 8 Ball');
        game.addLine('Ask me a question!');
    },
    action: function () {
        if (responseInput.value === '') {
            return game.addLine('You need to type something...');
        }
        responseInput.value = '';
        const response = Math.trunc(Math.random() * m8b.answers.length);
        game.addLine(m8b.answers[response]);
    },
};
