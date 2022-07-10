const popupEditAuthorBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-button');
const formAuthor = document.querySelector('.popup__edit');

const authorNameInForm = document.querySelector('.form__input_info_author-name');
const authorProfile = document.querySelector('.profile__name');
const authorProfInform = document.querySelector('.form__input_info_author-name-profession');
const authorProfProfile = document.querySelector('.profile__profession');

function openPopup(element) {
  element.classList.add('popup__visible');
};

function closePopup(element) {
  element.classList.remove('popup__visible');
};

function openProfilePopup() {
  authorNameInForm.value = authorProfile.textContent;
  authorProfInform.value = authorProfProfile.textContent;
  openPopup(formAuthor);
};

function submit(evt) {
  evt.preventDefault();
  authorProfile.textContent = authorNameInForm.value;
  authorProfProfile.textContent = authorProfInform.value;
  closePopup(formAuthor);
};

popupEditAuthorBtn.addEventListener('click', openProfilePopup);
popupCloseBtn.addEventListener('click', () => closePopup(formAuthor));
formAuthor.addEventListener('submit', submit);