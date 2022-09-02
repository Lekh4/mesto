export default class FormValidator {
    constructor(validationSettings, formElement) {
        this._formElement = formElement;
        this._validationSettings = validationSettings;
        this._inputErrorClass = this._formElement.querySelector(this._validationSettings.inputErrorClass);
        this._errorClass = this._validationSettings.errorClass;
        this._inputList = Array.from(formElement.querySelectorAll(this._validationSettings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _disableButton() {
        this._buttonElement.classList.add(this._validationSettings.inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    _enableButton() {
        this._buttonElement.classList.remove(this._validationSettings.inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    _stateToggleButton() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._stateToggleButton();
            });
        });
    }

    resetValidation() {
        this._stateToggleButton();
        this._disableButton();

        this._inputList.forEach((element) => {
            this._hideInputError(element);
        });
    }

    enableValidation() {
        this._setEventListeners();
    }
};