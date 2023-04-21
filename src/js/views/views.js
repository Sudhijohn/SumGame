class View {
  _data;

  display(data) {
    this._data = data;
    this.displayView(data);
    this._addEvents();
  }

  displayView(data) {
    this._data = data;
    const markup = this._generateMarkups();
    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentContainer.innerHTML = '';
  }
}

export default View;
