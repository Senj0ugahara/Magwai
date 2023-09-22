const form = document.querySelector('.form');
const formName = document.querySelector('.input[name="name"]');
const formPhone = document.querySelector('.input[name="phone"]');


// Валидация формы
function formValidated() {
  let validated = true;
  const regName = /[^а-яА-ЯёЁa-zA-Z0-9]+/g.test(formName.value);
  const regPhone = /^[\d\+7][\d\(\)\ -]{16,16}\d$/.test(formPhone.value);

  const errorUiForm = input => {
    input.classList.remove('correct');
    input.classList.remove('inCorrect');
    input.classList.add('inCorrect');
  }

  const successUiForm = input => {
    input.classList.remove('correct');
    input.classList.remove('inCorrect');
    input.classList.add('correct');
  }

  if (!regPhone && formPhone.value.length < 18) {
    errorUiForm(formPhone);
    validated = false;
  } else {
    successUiForm(formPhone);
  }

  if (!regName && formName.value.length != 0) {
    successUiForm(formName);
  } else {
    alert('Имя введено некорректно')
    errorUiForm(formName);
    validated = false;
  }

  return validated;
}


// Скрипт отправки формы на сервис
async function dataForm() {
  let formObj = {};
  let formData = new FormData(form);

  formData.forEach((value, key) => formObj[key] = value);
  formObj.phone = formObj.phone.replace(/[^0-9+]/g, '');

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(formObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))

  formName.value = '';
  formPhone.value = '';

  formName.classList.remove('correct');
  formPhone.classList.remove('correct');
}


// Отправка формы
form.addEventListener('submit', e => {
  e.preventDefault();

  let validated = formValidated();

  if (!validated) {
    alert('Не удалось отправить форму, проверьте правильность заполненных данных!');
    return;
  } else {
    alert('Форма успешна отправлена');
    dataForm();
  }
})