import View from './views';
import icons from 'url:./../../img/icons.svg';

class NavLinks extends View {
  _parentContainer = document.querySelector('.nav-list');
  _generateMarkups() {
    // console.log(this._data);
    return this._data.map(user => this._generateMarkup(user));
  }

  _generateMarkup(user) {
    return user.active
      ? `
    <li class="nav-item ${user.active ? '' : ''}">
    <button class="nav-btn nav-btn">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
      <span>${user.name}</span>
    </button>
    <div class='user-options'>
        <ul>
            <li class='logout'>
                Logout
            </li>
        </ul>
    </div>
  </li>
    `
      : ``;
  }

  _addEvents() {
    this.addClickHandler();
  }

  addClickHandler(loginHandler) {
    this._parentContainer.addEventListener('click', function (event) {
      const navLink = event.target.closest('.user-options');
      if (!navLink) return;
      loginHandler();
    });
  }
}

export default new NavLinks();
