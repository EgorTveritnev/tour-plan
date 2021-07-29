const hotelSlider = new Swiper('.hotel-slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});


