import Question from './question';
import tick from 'url:./../../img/tick.png';

class CountQuestions extends Question {
  _generateMarkup(que) {
    const count = new Array(que.number)
      .fill(this._displayImages(que.img))
      .join();
    return `
      <div data-id=${que.id} data-ans=${que.number} 
       class="count-container ${que.correct ? 'complete' : ''}">
       <div class="img-holder">
        ${count}
        </div>
       
        <span class="number">=</span>
        <div class="answer ${que.correct ? 'hide' : ''}">
          <input
            type="number"
            min=0
            class="answer__field"
            show=${!que.correct}
            placeholder="Answer"
          />
        </div>
        <div class="ans-container" ${que.correct ? '' : 'hidden'}>
            <span class="ans-number">${que.number}</span>
            <img src="${tick}" alt="Success" class="tick-logo" />
        </div>
      </div>`;
  }

  _displayImages(imgSrc) {
    return `
        <img class='count-img' src=${imgSrc} />
    `;
  }
}

export default new CountQuestions();
