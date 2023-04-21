import { MAX_NO_PROBLEM, MAX_NUMBER, MAX_COUNT } from './config';
import { generateNumber } from './helper';
import users from './userConfig';
import { getImagePath } from './countConfig';
n;

export const state = {
  isLoggedIn: false,
  questionTypes: ['ADD', 'SUB', 'MUL', 'DIV', 'COUNT'],
  selectedQuestionType: 'ADD',
  addQuestions: [],
  countQuestions: [],
  progress: {
    remaining: 0,
    completed: 0,
  },
  users,
  loggedInUser: '',
};

export const createInitalState = () => {
  while (state.addQuestions.length < MAX_NO_PROBLEM) {
    const question = {
      id: state.addQuestions.length + 1,
      number1: generateNumber(MAX_NUMBER),
      number2: generateNumber(MAX_NUMBER),
    };
    question.ans = question.number1 + question.number2;
    state.addQuestions.push(question);
  }
};

export const updateStatus = (id, ans) => {
  const question = state.addQuestions.find(question => question.id === id);
  if (!question) return;
  if (question.ans === ans) question.correct = true;
  progressTracker();
};

export const progressTracker = (type = 'ADD') => {
  const questions = type === 'ADD' ? state.addQuestions : state.countQuestions;
  const completed = questions.filter(question => question.correct === true);
  state.progress.remaining = questions.length - completed.length;
  state.progress.completed = completed.length;
};

export const reset = (type = 'ADD') => {
  state.progress.completed = 0;
  state.progress.remaining = 0;
  if (type === 'ADD') {
    state.addQuestions.length = 0;
    createInitalState();
  } else {
    state.countQuestions.length = 0;
    createCountState();
  }
};

export const login = (isLoggedIn = false, loggedInUser) => {
  if (!loggedInUser) return;
  state.isLoggedIn = isLoggedIn;
  setUser(isLoggedIn, loggedInUser);
};

const setUser = (isLoggedIn, loggedInUser) => {
  const userIndex = state.users.findIndex(user => user.name === loggedInUser);
  state.users[userIndex].active = isLoggedIn;
  state.loggedInUser = loggedInUser;
};

export const isLoggedIn = () => {
  return state.isLoggedIn;
};

export const getLoggedInUser = () => {
  return state.loggedInUser;
};

export const createCountState = () => {
  while (state.countQuestions.length < MAX_NO_PROBLEM) {
    const question = {
      id: state.countQuestions.length + 1,
      number: generateNumber(9) + 1,
      img: getImagePath(),
    };
    question.ans = question.number;
    state.countQuestions.push(question);
  }
};

export const updateCountState = (id, ans) => {
  const question = state.countQuestions.find(question => question.id === id);
  if (!question) return;
  if (question.number === ans) question.correct = true;
  progressTracker('COUNT');
};
