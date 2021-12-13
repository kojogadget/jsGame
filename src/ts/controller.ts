import '../sass/main.scss';
import * as model from './model';
import introView from './views/introView';
import interactionView from './views/interactionView';
import greetingView from './views/greetingView';
import gameView from './views/gameView';
import resetView from './views/resetView';

const controlInit = async function () {
  introView.render();
  interactionView.renderOption(model.games);
  interactionView.renderResponse(null);
};

const controlName = function () {
  if (model.state.name) return;

  const name = greetingView.getName();
  if (!name) return;
  model.state.name = name;

  greetingView.render(model.state.name);
  interactionView.renderOption(model.games);
};

const controlPickGame = function (chosenGame: string) {
  const game = model.games.find(g => g.id === chosenGame);
  if (!game) {
    const playing = model.state.active;
    const gameActive = model.games.find(g => g.id === playing);
    if (!gameActive) return;

    gameView.render(gameActive.intro);
    if (gameActive.init) gameActive.init();

    if (gameActive.interaction === 'response')
      interactionView.renderResponse(gameActive);

    return;
  }

  model.state.active = chosenGame;

  gameView.render(game.heading, 'heading');
  if (game.subHeading) gameView.render(game.subHeading, 'subHeading');
  gameView.render(game.intro);
  if (game.init) game.init();

  if (game.interaction === 'response') interactionView.renderResponse(game);
};

const controlPlay = function () {
  const game = model.games.find(g => g.id === model.state.active);
  if (!game) return;
  const response = gameView.gameResponse(game);
  if (!response) return;

  gameView.render(game.play(response), game.renderType);

  if (game.interaction === 'response') interactionView.renderResponse(game, 1);
  if (game.game?.complete) {
    interactionView.renderOption(game.game.reset);
  }
};

const controlExit = function () {
  interactionView.renderOption(model.games);
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
