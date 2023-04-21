import View from './views';

class Question extends View {
  _parentContainer = document.querySelector('.question');

  _generateMarkups() {
    return this._data.map(question => this._generateMarkup(question)).join();
  }

  _focusInput() {
    const inputs = Array.from(
      this._parentContainer.getElementsByTagName('input')
    ).filter(ele => ele.getAttribute('show') === 'true');
    if (inputs.length === 0) return;
    inputs[0].focus();
  }

  _addEvents() {
    this._focusInput();
  }

  addChangeHandler(handler) {
    this._parentContainer.addEventListener('input', function (event) {
      const queContainer =
        event.target.closest('.que-container') ||
        event.target.closest('.count-container');
      const answer = event.target.value;
      const questionID = queContainer.dataset.id;
      const correctAnswer = queContainer.dataset.ans;
      if (correctAnswer === answer) handler(+questionID, +event.target.value);
    });
  }
}

export default Question;
