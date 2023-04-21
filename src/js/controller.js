import * as model from './model';
import Login from './views/login';
import NavLinks from './views/navListView';
import AddQuestion from './views/addQuestion';
import Status from './views/status';
import countQuestion from './views/countQuestion';

const controlAddAnswers = (id, ans) => {
  model.updateStatus(id, ans);
  AddQuestion.display(model.state.addQuestions);
  Status.displayView(model.state.progress);
  Status.addClickHandler(controlAddReset);
};

const controlAddReset = () => {
  model.reset();
  AddQuestion.display(model.state.addQuestions);
};

const controlCountAnswers = (id, ans) => {
  model.updateCountState(id, ans);
  countQuestion.display(model.state.countQuestions);
  Status.displayView(model.state.progress);
  Status.addClickHandler(controlCountReset);
};

const controlCountReset = () => {
  model.reset('COUNT');
  countQuestion.display(model.state.countQuestions);
};

const controlLogin = (isLoggedIn, loggedInUser) => {
  model.login(isLoggedIn, loggedInUser);
  if (!isLoggedIn) window.location.reload();
  launchApp();
};

const loginHandler = userData => {
  Login.displayView(userData);
  Login.addChangeHandler(controlLogin);
};

const launchGameForJewel = () => {
  model.createInitalState();

  NavLinks.displayView(model.state.users);
  NavLinks.addClickHandler(controlLogin);

  AddQuestion.display(model.state.addQuestions);
  AddQuestion.addChangeHandler(controlAddAnswers);
};

const launchGameForJaiden = () => {
  model.createCountState();

  NavLinks.displayView(model.state.users);
  NavLinks.addClickHandler(controlLogin);

  countQuestion.display(model.state.countQuestions);
  countQuestion.addChangeHandler(controlCountAnswers);
};

const launchApp = () => {
  if (!model.isLoggedIn()) {
    NavLinks.displayView(model.state.users);
    loginHandler(model.state.users);
    return;
  }
  switch (model.getLoggedInUser()) {
    case 'Jewel':
      launchGameForJewel();
      break;
    case 'Jaiden':
      launchGameForJaiden();
      break;
  }
};

(function init() {
  launchApp();
})();
