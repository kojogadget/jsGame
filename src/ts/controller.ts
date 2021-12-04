import '../sass/main.scss';
import * as model from './model';
import greetingView from './views/greetingView';

const controlTextBox = function () {
  if (!model.state.name) greetingView.renderLine();
};

const init = function () {
  controlTextBox();
};
init();
