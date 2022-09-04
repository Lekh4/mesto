export default class UserInfo {
  constructor({ authorProfileSelector, authorProfProfileSelector }) {
    this._authorProfile = document.querySelector(authorProfileSelector);
    this._authorProfProfile = document.querySelector(authorProfProfileSelector);
  }

  getUserInfo() {
    this._userInfoValues = {
      name: this._authorProfile.textContent,
      about: this._authorProfProfile.textContent,
    };
    return this._userInfoValues;
  }

  setUserInfo(data) {
    this._authorProfile.textContent = data.author;
    this._authorProfProfile.textContent = data.about;
  }
}
