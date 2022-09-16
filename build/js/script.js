let nav = document.querySelector('.navigation__container');
let toggle = document.querySelector('.header__toggle');

nav.classList.remove('navigation__container--nojs');

toggle.addEventListener('click', function (){
  if (nav.classList.contains('navigation__container--close')) {
    nav.classList.remove('navigation__container--close');
    nav.classList.add('navigation__container--open');
    toggle.classList.remove('header__toggle--open');
    toggle.classList.add('header__toggle--close');

  } else {
    nav.classList.add('navigation__container--close');
    nav.classList.remove('navigation__container--open');
    toggle.classList.add('header__toggle--open');
    toggle.classList.remove('header__toggle--close');
  }
})
