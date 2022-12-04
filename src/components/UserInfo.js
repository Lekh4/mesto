export default class UserInfo {
  constructor(authorProfileSelector, authorProfProfileSelector) {
    this._authorProfileSelector = authorProfileSelector;
    this._authorProfProfileSelector = authorProfProfileSelector;
  }

  getUserInfo() {
    return this._userInfoValues = {
      name: this._authorProfileSelector.textContent,
      about: this._authorProfProfileSelector.textContent,
    };
  }

  setUserInfo(data) {
      this._authorProfileSelector.textContent = data.author;
      this._authorProfProfileSelector.textContent = data.about;
  }
}
