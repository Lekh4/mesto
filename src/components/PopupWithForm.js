import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._formContainer = this._popup.querySelector('.form');
        this._inputsList = this._formContainer.querySelectorAll('.form__input');
        this._submitForm = submitForm;
    }

    _getInputValues() {

        const values = {};

        this._inputsList.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formContainer.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._formContainer.reset();
    }
}