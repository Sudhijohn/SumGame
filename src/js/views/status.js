import View from './views';
import dora from 'url:../../img/dora-didit.gif';
import celeb from 'url:../../img/celeb.gif';
import thumbsup from 'url:../../img/thumbs-up.gif';
import pepa from 'url:../../img/pepa.gif';

class Status extends View {
  _parentContainer = document.querySelector('.status');

  _selectImage() {
    const images = [dora, celeb, thumbsup, pepa];
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }

  _generateMarkups() {
    return `
                <span class="status-item red"> Remaining : ${
                  this._data.remaining
                }</span>
                <span class="status-item green"> Completed : ${
                  this._data.completed
                }</span>
                ${
                  this._data.remaining
                    ? ''
                    : `<div class="completed">
                          <img  src=${this._selectImage()} alt="Success" />
                          <button class="btn reset">Reset</button>
                       </div>`
                }
            `;
  }

  addClickHandler(handler) {
    this._parentContainer.addEventListener('click', event => {
      const btn = event.target.closest('.reset');
      if (!btn) return;
      handler();
      this._clear();
    });
  }

  _clear() {
    this._parentContainer.innerHTML = '';
  }
}

export default new Status();
