import View from './views';

class Login extends View {
  _parentContainer = document.querySelector('.question');

  _generateMarkups() {
    return `
    <div class='login'>
    <h2>Login</h2>
    <div class='users-container'>
      <ul class='users'>
        ${this._data.map(user => this._generateMarkup(user)).join()}
      </ul>
    </div>
    </div>
    `;
  }

  _generateMarkup(user) {
    return `
    <li data-user=${user.name} class='user'>
      <img src='${user.img}' alt='Loding...' />
      <p class='user-name'>${user.name}</p>
    </li>
    `;
  }

  addChangeHandler(loginHandler) {
    this._parentContainer.addEventListener('click', function (event) {
      const loginBtn = event.target.closest('.user');
      if (!loginBtn) return;
      const loggedInUser = loginBtn.dataset.user;
      loginHandler(true, loggedInUser);
    });
  }
}

export default new Login();
