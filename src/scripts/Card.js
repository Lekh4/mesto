export default class Card {
    constructor(data, templateSelector, popupWithImage) {
        this._title = data.name;
        this._imageLink = data.link;
        this._popupWithImage = popupWithImage;
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

        this._image.addEventListener('click', (evt) => this._popupWithImage(evt.target));

        this._like.addEventListener('click', () => {
            this._handleLike();
        });

        this._trash.addEventListener('click', (evt) => {
            this.delete(evt);
        });

    };

    _handleLike() {
        this._like.classList.toggle('element__like_active');
    }

    delete(evt) {
        evt.target.closest('.element').remove();
    }
};