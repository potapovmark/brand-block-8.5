document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.brand-block__toggle');
  const grid = document.querySelector('.brand-block__grid');
  const indicatorDots = document.querySelectorAll('.slider-indicator__dot');

  // DESKTOP & TABLET: TOGGLE COLLAPSED CLASS
  if (toggleButton && grid) {
    toggleButton.addEventListener('click', () => {
      const isCollapsed = grid.classList.toggle('brand-block__grid--collapsed');
      toggleButton.setAttribute('aria-expanded', !isCollapsed);
      toggleButton.innerHTML = isCollapsed
        ? '<img src="assets/expand.svg" alt=""> Показать все'
        : '<img src="assets/expand.svg" alt=""> Скрыть';
    });
  }

  // MOBILE: SLIDER INDICATOR SYNC
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });
});