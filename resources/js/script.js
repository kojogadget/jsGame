// Variables
let response = 0;

// Objects
const player = {};

// Arrays
const magicAnswer = [
  "Ikke sånn som du ser ut i dag...",
  "Ta deg en runde.",
  "Ja!",
  "Nei..",
  "Dårlig spørsmål..next!",
  "Vi får se.",
  "Kanskje det.",
  "Vil du heller ha en klem?",
  "Tenk deg om..",
  "Hysj",
  "Æsj!",
  "Hva mener du egentlig? Dumme jævel..",
  "k",
];

// Text input section
const command = document.getElementById("command");
const responsSection = document.querySelector(".respons");
const responsBtn = document.querySelector(".respons__btn");

// Options buttons
const optionsSection = document.querySelector(".options");
const m8bBtn = document.getElementById("magic8ball");

// Message section
const messageSection = document.querySelector(".message");
const welcomeMessage = document.querySelector(".message__line--2");
const welcomeMessageText = document.querySelector(".message__text--2");

// Magic 8 Ball section
const m8bSection = document.querySelector(".magic8ball");
const m8bText = document.querySelector(".magic__text");

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
  command.value = "";
  responsSection.classList.add("hidden");
  optionsSection.classList.remove("hidden");
  messageSection.classList.remove("hidden");
  exitBtn.classList.add("hidden");
};

const question = function () {
  command.value = "";

  response = Math.trunc(Math.random() * magicAnswer.length);
  m8bText.textContent = magicAnswer[response];
};

const open = command.addEventListener("keydown", function (e) {
  if (
    e.key === "Enter" &&
    command.value !== "" &&
    Object.keys(player).length === 0
  ) {
    addName();
  } else if (
    e.key === "Enter" &&
    command.value !== "" &&
    !m8bSection.classList.contains("hidden")
  ) {
    question();
  }
});

responsBtn.addEventListener("click", function () {
  if (command.value !== "" && Object.keys(player).length === 0) {
    addName();
  } else if (command.value !== "" && !m8bSection.classList.contains("hidden")) {
    question();
  }
});

m8bBtn.addEventListener("click", function () {
  messageSection.classList.add("hidden");
  m8bSection.classList.remove("hidden");
  optionsSection.classList.add("hidden");
  responsSection.classList.remove("hidden");
  exitBtn.classList.remove("hidden");
  command.placeholder = `Question`;
});

exitBtn.addEventListener("click", function () {
  m8bSection.classList.add("hidden");
  m8bText.textContent = "Ask me a question!";
  exit();
});
