import {
    zoomImagePopup,
    zoomImageTitlePopup,
    zoomPopup,
    openPopup,
} from './utilities.js';

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._element = this._getTemplate();
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
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleZoomCard()
        });

        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLike();
        });

        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this.delete();
        });
    }

    _handleLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    _handleZoomCard() {
        openPopup(zoomPopup);
        zoomImagePopup.src = this._link;
        zoomImagePopup.alt = this._name;
        zoomImageTitlePopup.textContent = this._name;
    };

    delete() {
        this._element.remove()
    }
};