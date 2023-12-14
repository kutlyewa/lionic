document.addEventListener("DOMContentLoaded", function() {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = document.querySelectorAll('.nav__link');
  const btnMore = document.querySelector('.articles-more');
  const articlesItem = document.querySelectorAll('.articles__item');
  const buttonMore = document.querySelector('.clients-more');
  const clientsItem = document.querySelectorAll('.clients__item');

  //burger
  burger.addEventListener('click',
    function() {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('header__nav--active');
      document.body.classList.toggle('stop-scroll');
  });

  menuLinks.forEach(function(element) {
    element.addEventListener('click', function() {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    });
  });

  //показать ещё artickes
  btnMore.addEventListener('click', () => {
    articlesItem.forEach(el => {
      el.classList.add('articles__item--visible');
      btnMore.closest('.articles-center').classList.add('articles-center--hidden');
    });
  });

  //показать ещё clients
  buttonMore.addEventListener('click', () => {
    clientsItem.forEach(el => {
      el.classList.add('clients__item--visible');
      buttonMore.closest('.clients-center').classList.add('clients-center--hidden');
    });
  });
});