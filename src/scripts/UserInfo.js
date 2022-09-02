export default class UserInfo {
    constructor(data) {
      this._nameAuthor = data.name;
      this._infoAuthor = data.about;
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
  