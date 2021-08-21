const player = {};

const command = document.getElementById("command");
const responsSection = document.querySelector(".respons");
const responsBtn = document.querySelector(".respons__btn");
const optionsSection = document.querySelector(".options");
const welcomeMessage = document.querySelector(".message__line--2");
const welcomeMessageText = document.querySelector(".message__text--2");

const addName = function () {
  player.name = command.value;

  welcomeMessageText.textContent = `Welcome, ${player.name}! What program do you want to try?`;
  welcomeMessage.classList.remove("hidden");
  responsSection.classList.add("hidden");
  optionsSection.classList.remove("hidden");
};

command.addEventListener("keydown", function (e) {
  if (
    e.key === "Enter" &&
    command.value !== "" &&
    Object.keys(player).length === 0
  ) {
    addName();
  }
});

responsBtn.addEventListener("click", function () {
  if (command.value !== "" && Object.keys(player).length === 0) {
    addName();
  }
});
