import Splide from '@splidejs/splide';

const carousell = document.querySelector('.accept__car');

const sliderOptions = {
  perPage: 1,
  perMove: 1,
  gap: '1rem',
  drag: true,
  pagination: true,
  arrows: false,
  height: '31.625rem',
  direction: 'ttb',
  breakpoints: {
    1024: {
      height: '38rem',
      direction: 'ltr',
    },
    768: {
      height: '50.875rem',
    },
  },
};

if (carousell) {
  const splide = new Splide(carousell, sliderOptions);

  splide.mount();
}
