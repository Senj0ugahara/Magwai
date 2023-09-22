const burger = document.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const navbar = document.querySelector('.nav');

burger.addEventListener('click', navbarMenuMobile);


// Открытие навигационного меню через бургер
function navbarMenuMobile() {
  burgerLine.classList.toggle('is-active');

  if (burgerLine.classList.contains('is-active')) {
    navbar.classList.add('is-active');
  } else {
    navbar.classList.remove('is-active');
  }
}