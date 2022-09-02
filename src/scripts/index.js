import './styles/index.css';

import {
  btnOpenPopupAddCard,
  btnOpenPopupEditAuthor,
  popupFormProfile,
  popupFormAddCard,
  cardsPlace,
  authorNameInForm,
  authorProfile,
  authorProfInform,
  authorProfProfile,
  zoomPopup,
  btnSubmitFormProfile,
  btnSubmitFormCard,
  initialCards,
  validationSettings,
} from '../utils/utilities.js';

import Card from './Card.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import FormValidator from './FormValidator.js';

const validationFormCard = new FormValidator(validationSettings, btnSubmitFormCard);
const validationFormProfile = new FormValidator(validationSettings, btnSubmitFormProfile);

const cardList = new Section(
  {
  items: initialCards,
  renderer: (item) => {
    const cardItem = handleNewCard(item);
    cardList.addItem(cardItem);
  },
},
  cardsPlace
);

const userInfo = new UserInfo({
  name: authorProfile,
  about: authorProfProfile
});

const popupWithEditAuthor = new PopupWithForm(popupFormProfile, (data) => userInfo.setUserInfo(data));
const popupWithCard = new PopupWithForm(popupFormAddCard, (data) => {
  cardList.addItem(handleNewCard(data));
});

const popupWithImage = new PopupWithImage(zoomPopup);


function handleCardClick(data) {
  popupWithImage.open(data);
};

function handleNewCard(card) {
  const newCard = new Card(card, '#element', handleCardClick).generateCard();
  return newCard;
}

btnOpenPopupEditAuthor.addEventListener('click', () => {
  popupWithEditAuthor.open();
  const data = userInfo.getUserInfo();
  authorNameInForm.value = data.name;
  authorProfInform.value = data.about;
  validationFormProfile.resetValidation();
});

btnOpenPopupAddCard.addEventListener('click', () => {
  popupWithCard.open();
  validationFormCard.resetValidation();
});

cardList.renderItems();
popupWithEditAuthor.setEventListeners();
popupWithCard.setEventListeners();
popupWithImage.setEventListeners();
validationFormCard.resetValidation();
validationFormProfile.enableValidation();
validationFormCard.enableValidation();