const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalCloseBtn = document.querySelector('.modal__close');


// Открытие модалки
modalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('is-active');
    overlay.classList.add('is-active');
  });
});


// Скрипт закрытия модалки при клике вне модального окна
overlay.addEventListener('click', () => {
  if (modal.classList.contains('is-active')) {
    modal.classList.remove('is-active');
    overlay.classList.remove('is-active');
  }
})


// Скрипт закрытия модального окна по клику на крестик
modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
  overlay.classList.remove('is-active');
})