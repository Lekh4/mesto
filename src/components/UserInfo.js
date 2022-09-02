export default class UserInfo {
  constructor(data) {
    this._nameAuthor = document.querySelector('.profile__name');
    this._infoAuthor = document.querySelector('.profile__profession');
  }

  getUserInfo() {
    this._userInfoValues = {
      name: this._nameAuthor.textContent,
      about: this._infoAuthor.textContent,
    };
    return this._userInfoValues;
  }

  setUserInfo(data) {
    this._nameAuthor.textContent = data.author;
    this._infoAuthor.textContent = data.about;
  }
}
