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
  greetingView.setWindow();
};

const controlPickGame = function (chosenGame: string) {
  const game = model.games.find(g => g.id === chosenGame);

  if (!game) return;

  gameView.render(game.heading, 'heading');
  gameView.render(game.intro);

  interactionView.setInteraction(chosenGame);
  gameView.setWindow();
};

const controlExit = function () {
  interactionView.renderOption();

  resetView.render('', 'empty');
  resetView.render(model.state.name);
  resetView.setWindow();
};

const init = function () {
  introView.addHandlerIntro(controlInit);
  greetingView.addHandlerName(controlName);
  gameView.addHandlerOptions(controlPickGame);
  gameView.addHandlerExit(controlExit);
};
init();
