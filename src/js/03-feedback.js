import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

// добавляем ключ localStorage
const STORAGE = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// обновление страницы
getDataForm();

function onFormInput(evt) {
  // const emailEl = evt.currentTarget.elements.email.value;
  // const messageEl = evt.currentTarget.elements.message.value;
  const emailEl = input.value;
  const messageEl = textarea.value;
  const dataForm = { email: emailEl, message: messageEl };

  localStorage.setItem(STORAGE, JSON.stringify(dataForm));
}

// Добавление из localStorage
function getDataForm(evt) {
  const getData = JSON.parse(localStorage.getItem(STORAGE));
  if (getData) {
    input.value = getData.email;
    textarea.value = getData.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  const formData = JSON.parse(localStorage.getItem(STORAGE));
  console.log(formData);
  localStorage.removeItem(STORAGE);
}
