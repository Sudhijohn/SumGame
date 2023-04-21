import Question from './question';
import tick from 'url:../../img/tick.png';

class AddQuestion extends Question {
  _generateMarkup(que) {
    return `
      <div data-id=${que.id} data-ans=${que.ans} 
       class="que-container ${que.correct ? 'complete' : ''}">
        <span class="number">${que.number1}</span>
        <span class="number">+</span>
        <span class="number">${que.number2}</span>
        <span class="number">=</span>
        <div class="answer ${que.correct ? 'hide' : ''}">
          <input
            type="number"
            min=0
            class="answer__field"
            show=${!que.correct}
            placeholder="Answer here..."
          />
        </div>
        <div class="ans-container" ${que.correct ? '' : 'hidden'}>
            <span class="ans-number">${que.ans}</span>
            <img src="${tick}" alt="Success" class="tick-logo" />
        </div>
      </div>`;
  }
}

export default new AddQuestion();
