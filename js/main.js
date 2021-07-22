const swiper = new Swiper('.swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },
});

