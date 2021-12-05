import '../sass/main.scss';
import * as model from './model';
import introView from './views/introView';
import interactionView from './views/interactionView';
import greetingView from './views/greetingView';

const controlInit = async function () {
  introView.render();
};

const controlName = function () {
  if (model.state.name) return;

  const name = greetingView.getName();
  console.log(name);
  if (!name) return;
  model.state.name = name;

  greetingView.render(model.state.name);
  interactionView.toggleInteraction();
};

const init = function () {
  introView.addHandlerIntro(controlInit);
  greetingView.addHandlerName(controlName);
};
init();
