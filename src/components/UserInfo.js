export default class UserInfo {
  constructor({ authorProfile, authorProfProfile }) {
    this._authorProfile = authorProfile;
    this._authorProfProfile = authorProfProfile;
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
