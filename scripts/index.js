import {
  btnOpenPopupAddCard,
  btnOpenPopupEditAuthor,
  btnsClosePopup,
  popups,
  btnSubmitFormProfile,
  popupFormProfile,
  btnSubmitFormCard,
  popupFormAddCard,
  cardsPlace,
  authorNameInForm,
  authorProfile,
  authorProfInform,
  authorProfProfile,
  cardNameForm,
  zoomImagePopup,
  zoomImageTitlePopup,
  zoomPopup,
  cardRefForm,
  initialCards,
  validationSettings,
  openPopup,
  closePopup,
  closePopupEsc,
} from './utilities.js';

import { Card } from './Card.js';

import FormValidator from './FormValidator.js';

function createCard(item) {
  const card = new Card(item, '.card', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(item) {
  const newCard = createCard(item);
  cardsPlace.prepend(newCard);
};

initialCards.forEach((item) => {
  addCard(item);
});

function handleOpenPopup(name, link) {
  zoomImagePopup.src = link;
  zoomImagePopup.alt= name;
  zoomImageTitlePopup.textContent = name;
  openPopup(zoomPopup);
};

const validationFormCard = new FormValidator(validationSettings, btnSubmitFormCard);
validationFormCard.enableValidation();
validationFormCard.resetValidation();
const validationFormProfile = new FormValidator(validationSettings, btnSubmitFormProfile);
validationFormProfile.enableValidation();

function submitAddCard(evt) {
  evt.preventDefault();

  const item = {
    name: cardNameForm.value,
    link: cardRefForm.value,
  };
  
  addCard(item);
  
  evt.target.reset();
  validationFormCard.enableValidation();
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

btnOpenPopupAddCard.addEventListener('click', () => openPopup(popupFormAddCard));

btnOpenPopupEditAuthor.addEventListener('click', openProfilePopup);

btnSubmitFormProfile.addEventListener('submit', submitFormProfile);

btnSubmitFormCard.addEventListener('submit', submitAddCard);

btnsClosePopup.forEach((item) => {
  item.addEventListener('click', () => closePopup(item.closest('.popup')));
});