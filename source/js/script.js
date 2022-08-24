let nav = document.querySelector('.navigation__container');
let toggle = document.querySelector('.header__toggle');

nav.classList.remove('navigation__container--nojs');

toggle.addEventListener('click', function (){
  if (nav.classList.contains('navigation__container--close')) {
    nav.classList.remove('navigation__container--close');
    nav.classList.add('navigation__container--open');
  } else {
    nav.classList.add('navigation__container--close');
    nav.classList.remove('navigation__container--open');
  }
})
