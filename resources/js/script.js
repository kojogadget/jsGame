const player = {};

const command = document.getElementById("command");
const welcomeMessage = document.querySelector(".message__line--2");
const welcomeMessageText = document.querySelector(".message__text--2");

command.addEventListener("keydown", function (e) {
  if (
    e.key === "Enter" &&
    command.value !== "" &&
    Object.keys(player).length === 0
  ) {
    player.name = command.value;

    welcomeMessageText.textContent = `Welcome, ${player.name}! What program do you want to try?`;
    welcomeMessage.classList.remove("hidden");
  }
});
