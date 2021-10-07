const responseInput = document.getElementById('command')! as HTMLInputElement;
const responseSection = document.querySelector(
  '.response'
)! as HTMLInputElement;
const optionsSection = document.querySelector('.options')! as HTMLInputElement;

/////////////////////////////////////////////////////////////////////////////////////

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
