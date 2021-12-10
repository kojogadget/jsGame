import '../sass/main.scss';
import * as model from './model';
import introView from './views/introView';
import interactionView from './views/interactionView';
import greetingView from './views/greetingView';
import gameView from './views/gameView';
import resetView from './views/resetView';

const controlInit = async function () {
  introView.render();
};

const controlName = function () {
  if (model.state.name) return;

  const name = greetingView.getName();
  if (!name) return;
  model.state.name = name;

  greetingView.render(model.state.name);
  interactionView.renderOption();
};

const controlPickGame = function (chosenGame: string) {
  const game = model.games.find(g => g.id === chosenGame);
  if (!game) return;

  model.state.active = chosenGame;

  gameView.render(game.heading, 'heading');
  if (game.subHeading) gameView.render(game.subHeading, 'subHeading');
  gameView.render(game.intro);

  interactionView.setInteraction(game);
};

const controlPlay = function () {
  const game = model.games.find(g => g.id === model.state.active);
  if (!game) return;
  const response = gameView.gameResponse(game);
  if (!response) return;

  gameView.render(game.play(response), game.renderType);
};

const controlExit = function () {
  interactionView.renderOption();
  interactionView.resetResponse();
  model.state.active = '';

  resetView.render('', 'empty');
  resetView.render(model.state.name);
};

const init = function () {
  introView.addHandlerIntro(controlInit);
  greetingView.addHandlerName(controlName);
  gameView.addHandlerOptions(controlPickGame);
  gameView.addHandlerPlay(controlPlay);
  gameView.addHandlerExit(controlExit);
};
init();
