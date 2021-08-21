const player = {};

// Text input section
const command = document.getElementById("command");
const responsSection = document.querySelector(".respons");
const responsBtn = document.querySelector(".respons__btn");

// Options buttons
const optionsSection = document.querySelector(".options");
const magic8ballBtn = document.getElementById("magic8ball");

// Message section
const messageSection = document.querySelector(".message");
const welcomeMessage = document.querySelector(".message__line--2");
const welcomeMessageText = document.querySelector(".message__text--2");

// Magic 8 Ball section
const magic8ballSection = document.querySelector(".magic8ball");

// Exit button
const exitBtn = document.querySelector(".exit");

const addName = function () {
  player.name = command.value;
  command.value = "";

  welcomeMessageText.textContent = `Welcome, ${player.name}! What program do you want to try?`;
  welcomeMessage.classList.remove("hidden");
  responsSection.classList.add("hidden");
  optionsSection.classList.remove("hidden");
};

const exit = function () {
  responsSection.classList.add("hidden");
  optionsSection.classList.remove("hidden");
  messageSection.classList.remove("hidden");
  exitBtn.classList.add("hidden");
};

const open = command.addEventListener("keydown", function (e) {
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

magic8ballBtn.addEventListener("click", function () {
  messageSection.classList.add("hidden");
  magic8ballSection.classList.remove("hidden");
  optionsSection.classList.add("hidden");
  responsSection.classList.remove("hidden");
  exitBtn.classList.remove("hidden");
  command.placeholder = `Question`;
});

exitBtn.addEventListener("click", function () {
  magic8ballSection.classList.add("hidden");
  exit();
});
