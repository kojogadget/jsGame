const responseInput = document.getElementById('command');
const responseSection = document.querySelector('.response');
const optionsSection = document.querySelector('.options');
export const player = {
    name: '',
};
export const addName = function (addLine) {
    player.name = responseInput.value;
    responseInput.value = '';
    addLine(`Welcome, ${player.name}! What program do you want to try?`);
    responseSection.classList.add('hidden');
    optionsSection.classList.remove('hidden');
};
