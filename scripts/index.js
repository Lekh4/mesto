const btnOpenPopupAddCard = document.querySelector('.profile__add-button');
const btnOpenPopupEditAuthor = document.querySelector('.profile__edit-button');
const btnsClosePopup = document.querySelectorAll('.popup__close-button');
const btnLikeCard = document.querySelector('element__like');
const btnDeleteCard = document.querySelector('.element__trash');

const popups = document.querySelectorAll('.popup');

const btnSubmitFormProfile = document.querySelector('.form_edit_profile');
const popupFormProfile = document.querySelector('.popup_profile');
const btnSubmitFormCard = document.querySelector('.form_add_card');
const popupFormAddCard = document.querySelector('.popup_card');

const placeForCards = document.querySelector('.elements');
const cardContainer = document.querySelector('element');
const templateCard = document.querySelector('#card').content;

const zoomPopup = document.querySelector('.popup_zoom');
const zoomImagePopup = document.querySelector('.popup__image');
const zoomImageTitlePopup = document.querySelector('.popup__image-title');

const authorNameInForm = document.querySelector('.form__input_info_author-name');
const authorProfile = document.querySelector('.profile__name');
const authorProfInform = document.querySelector('.form__input_info_author-name-profession');
const authorProfProfile = document.querySelector('.profile__profession');

const cardNameForm = document.querySelector('.form__input_info_card-name');
const cardRefForm = document.querySelector('.form__input_info_card-reference');

const initialCards = [
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

function openPopup(element) {
  element.classList.add('popup_visible');
  document.addEventListener('keydown', closePopupEsc);
};

function closePopup(element) {
  element.classList.remove('popup_visible');
  document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_visible'));
  };
};

function openProfilePopup() {
  authorNameInForm.value = authorProfile.textContent;
  authorProfInform.value = authorProfProfile.textContent;
  openPopup(popupFormProfile);
};

function openFormAddCardPopup() {
  openPopup(popupFormAddCard)
};

function submitFormProfile(evt) {
  evt.preventDefault();
  authorProfile.textContent = authorNameInForm.value;
  authorProfProfile.textContent = authorProfInform.value;
  closePopup(popupFormProfile);
};

initialCards.forEach((item) => {
  const card = createCard(item.link, item.name);
  addCard(placeForCards, card);
});

function deleteCard(evt) {
  evt.target.closest('.element').remove();
};

function createCard(image, title) {
  const card = templateCard.querySelector('.element').cloneNode(true);
  const imageItem = card.querySelector('.element__image');
  imageItem.src = image;
  imageItem.alt = title;

  card.querySelector('.element__title').textContent = title;
  imageItem.addEventListener('click', () => openZoomPopup(imageItem));
  card.querySelector('.element__like').addEventListener('click', likeCard);
  card.querySelector('.element__trash').addEventListener('click', deleteCard);

  return card;
};

function addCard(places, element) {
  places.prepend(element);
};

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
};

function openZoomPopup(element) {
  openPopup(zoomPopup);
  zoomImagePopup.src = element.src;
  zoomImagePopup.alt = element.alt;
  zoomImageTitlePopup.textContent = element.alt;
};

function submitAddCard(evt) {
  evt.preventDefault();
  const item = createCard(cardRefForm.value, cardNameForm.value);
  addCard(placeForCards, item);

  btnSubmitFormCard.reset();
  
  closePopup(popupFormAddCard);
  buttonDisabled(evt.target.querySelector('.form__save'), valSettings);

  /* Вопрос: при выведении функции enableValidation(valSettings) тоже работает. 
  Этот вариант выглядит более изящно и универсально, хотя вариант, 
  который я использую в коде, более точечный для поставленной задачи. 
  Вопрос, можно ли использовать закомментированный вариант в таких случаях? */

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