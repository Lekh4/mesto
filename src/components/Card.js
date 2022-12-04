export default class Card {
    constructor(data, templateSelector, handlePopupWithImage) {
        this._title = data.name;
        this._imageLink = data.link;
        this._handlePopupWithImage = handlePopupWithImage;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__image');
        this._like = this._element.querySelector('.element__like');
        this._trash = this._element.querySelector('.element__trash');
        this._setEventListeners();

        this._image.src = this._imageLink;
        this._image.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;

        return this._element;
    }

    _setEventListeners() {

        this._image.addEventListener('click', () => {
            this._handlePopupWithImage({src: this._imageLink, alt: this._title});
        });

        this._like.addEventListener('click', () => {
            this._handleLike();
        });

        this._trash.addEventListener('click', () => {
            this.delete();
        });

    };

    _handleLike() {
        this._like.classList.toggle('element__like_active');
    }

    delete() {
        this._element.remove();
    }
};