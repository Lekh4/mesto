import {
  btnOpenPopupAddCard,
  btnOpenPopupEditAuthor,
  btnsClosePopup,
  popups,
  btnSubmitFormProfile,
  popupFormProfile,
  btnSubmitFormCard,
  popupFormAddCard,
  placeForCards,
  authorNameInForm,
  authorProfile,
  authorProfInform,
  authorProfProfile,
  cardNameForm,
  cardRefForm,
  initialCards,
  valSettings,
  openPopup,
  closePopup,
  closePopupEsc,
} from './utilities.js';

import { Card } from './Card.js';

import FormValidator from './FormValidator.js';

function createCard(item) {
  const card = new Card(item, '.card');
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(item) {
  const newCard = createCard(item);
  placeForCards.prepend(newCard);
};

initialCards.forEach((item) => {
  addCard(item);
});

function submitAddCard(evt) {
  evt.preventDefault();
  
  const item = {
    name: cardNameForm.value,
    link: cardRefForm.value,
  };
  validationFormCard.enableValidation();
  addCard(item);
  evt.target.reset();
  resetFormCard.resetValidation();
  closePopup(popupFormAddCard);
};

function openFormAddCardPopup() {
  openPopup(popupFormAddCard)
};

function openProfilePopup() {
  authorNameInForm.value = authorProfile.textContent;
  authorProfInform.value = authorProfProfile.textContent;
  openPopup(popupFormProfile);
};

function submitFormProfile(evt) {
  evt.preventDefault();
  authorProfile.textContent = authorNameInForm.value;
  authorProfProfile.textContent = authorProfInform.value;
  closePopup(popupFormProfile);
};

popups.forEach((item) => {
  item.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_visible')) {
      closePopup(item);
    }
  })
});

const validationFormCard = new FormValidator(valSettings, btnSubmitFormCard);
validationFormCard.enableValidation();

const validationFormProfile = new FormValidator(valSettings, btnSubmitFormProfile);
validationFormProfile.enableValidation();

const resetFormCard = new FormValidator(valSettings, btnSubmitFormCard);

btnOpenPopupAddCard.addEventListener('click', () => openPopup(popupFormAddCard));

btnOpenPopupEditAuthor.addEventListener('click', openProfilePopup);

btnSubmitFormProfile.addEventListener('submit', submitFormProfile);

btnSubmitFormCard.addEventListener('submit', submitAddCard);
btnsClosePopup.forEach((item) => {
  item.addEventListener('click', () => closePopup(item.closest('.popup')));
});