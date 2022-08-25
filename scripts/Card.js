export class Card {
    constructor(data, templateSelector, handleOpenPopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
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

        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleZoomCard();
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

   _handleZoomCard() {
    this._handleOpenPopup(this._name, this._link);
    }

    delete() {
        this._element.remove()
    }
};