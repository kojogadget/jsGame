const responseInput = document.getElementById('command')! as HTMLInputElement;
const responseSection = document.querySelector(
  '.response'
)! as HTMLInputElement;
const optionsSection = document.querySelector('.options')! as HTMLInputElement;

export const player: {
  name?: string;
  age?: number;
} = {
  name: '',
};

export const addName = function (addLine: any) {
  player.name = responseInput.value;
  responseInput.value = '';

  addLine(`Welcome, ${player.name}! What program do you want to try?`);
  responseSection.classList.add('hidden');
  optionsSection.classList.remove('hidden');
};
