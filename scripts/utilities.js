export const btnOpenPopupAddCard = document.querySelector('.profile__add-button');
export const btnOpenPopupEditAuthor = document.querySelector('.profile__edit-button');
export const btnsClosePopup = document.querySelectorAll('.popup__close-button');
export const btnLikeCard = document.querySelector('element__like');
export const btnDeleteCard = document.querySelector('.element__trash');

export const popups = document.querySelectorAll('.popup');

export const btnSubmitFormProfile = document.querySelector('.form_edit_profile');
export const popupFormProfile = document.querySelector('.popup_profile');
export const btnSubmitFormCard = document.querySelector('.form_add_card');
export const popupFormAddCard = document.querySelector('.popup_card');

export const placeForCards = document.querySelector('.elements');
export const cardContainer = document.querySelector('element');

export const zoomImagePopup = document.querySelector('.popup__image');
export const zoomImageTitlePopup = document.querySelector('.popup__image-title');
export const zoomPopup = document.querySelector('.popup_zoom');

export const authorNameInForm = document.querySelector('.form__input_info_author-name');
export const authorProfile = document.querySelector('.profile__name');
export const authorProfInform = document.querySelector('.form__input_info_author-name-profession');
export const authorProfProfile = document.querySelector('.profile__profession');

export const cardNameForm = document.querySelector('.form__input_info_card-name');
export const cardRefForm = document.querySelector('.form__input_info_card-reference');

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const valSettings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

export function openPopup(element) {
  element.classList.add('popup_visible');
  document.addEventListener('keydown', closePopupEsc);
};

export function closePopup(element) {
    element.classList.remove('popup_visible');
    document.removeEventListener('keydown', closePopupEsc);
  };
  
export function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_visible'));
    };
  };

