const popupAddCardOpenBtn = document.querySelector('.profile__add-button');
const popupEditAuthorOpenBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelectorAll('.popup__close-button');
const cardLikeBtn = document.querySelector('element__like');
const cardDeleteBtn = document.querySelector('.element__trash');

const popups = document.querySelectorAll('.popup');

const formProfileSubmitBtn = document.querySelector('.form_edit_profile');
const formProfilePopup = document.querySelector('.popup__profile');
const formCardSubmitBtn = document.querySelector('.form_add_card');
const formAddCardPopup = document.querySelector('.popup__card');

const placeForCards = document.querySelector('.elements');
const cardContainer = document.querySelector('element');
const templateCard = document.querySelector('#card').content;

const popupZoom = document.querySelector('.popup__zoom');
const popupZoomImage = document.querySelector('.popup__image');
const popupZoomImageTitle = document.querySelector('.popup__image-title');

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
};

function closePopup(element) {
  element.classList.remove('popup_visible');
};

function openProfilePopup() {
  authorNameInForm.value = authorProfile.textContent;
  authorProfInform.value = authorProfProfile.textContent;
  openPopup(formProfilePopup);
};

function openFormAddCardPopup() {
  openPopup(formAddCardPopup)
};

function formProfileSubmit(evt) {
  evt.preventDefault();
  authorProfile.textContent = authorNameInForm.value;
  authorProfProfile.textContent = authorProfInform.value;
  closePopup(formProfilePopup);
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
  imageItem.addEventListener('click', () => popupZoomOpen(imageItem));
  card.querySelector('.element__like').addEventListener('click', cardLike);
  card.querySelector('.element__trash').addEventListener('click', deleteCard);

  return card;
};

function addCard(places, element) {
  places.prepend(element);
};

function cardLike(evt) {
  evt.target.classList.toggle('element__like_active');
};

function popupZoomOpen(element) {
  openPopup(popupZoom);
  popupZoomImage.src = element.src;
  popupZoomImage.alt = element.alt;
  popupZoomImageTitle.textContent = element.alt;
};

function submitAddCard(evt) {
  evt.preventDefault();
  const item = createCard(cardRefForm.value, cardNameForm.value);
  addCard(placeForCards, item);
  formCardSubmitBtn.reset();
  closePopup(formAddCardPopup);
};

popupAddCardOpenBtn.addEventListener('click', () => openPopup(formAddCardPopup));

popupEditAuthorOpenBtn.addEventListener('click', openProfilePopup);

formProfileSubmitBtn.addEventListener('submit', formProfileSubmit);

formCardSubmitBtn.addEventListener('submit', submitAddCard);

popupCloseBtn.forEach((item) => {
  item.addEventListener('click', () => closePopup(item.closest('.popup')));
});