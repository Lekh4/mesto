import './index.css';

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

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

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

function handleCardClick(data) {
  handlePopupWithImage.open(data);
};

function handleNewCard(card) {
  const newCard = new Card(card, '#element', handleCardClick).generateCard();
  return newCard;
}

const popupWithEditAuthor = new PopupWithForm(popupFormProfile, (data) => userInfo.setUserInfo(data));
const popupWithCard = new PopupWithForm(popupFormAddCard, (data) => {
  cardList.addItem(handleNewCard(data));
});

const handlePopupWithImage = new PopupWithImage(zoomPopup);

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
handlePopupWithImage.setEventListeners();
validationFormCard.resetValidation();
validationFormProfile.enableValidation();
validationFormCard.enableValidation();