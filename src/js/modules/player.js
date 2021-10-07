const responseInput = document.getElementById('command');
const responseSection = document.querySelector('.response');
const optionsSection = document.querySelector('.options');
export const player = {
    name: '',
    addName: function () {
        player.name = responseInput.value;
        responseInput.value = '';
        responseSection.classList.toggle('hidden');
        optionsSection.classList.toggle('hidden');
        return `Welcome, ${player.name}! What program do you want to try?`;
    },
};
