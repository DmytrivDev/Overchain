import Splide from '@splidejs/splide';

const carousell = document.querySelector('.related__car');

const sliderOptions = {
  perPage: 2,
  perMove: 1,
  gap: '1rem',
  drag: true,
  pagination: false,
  arrows: true,
  breakpoints: {
		760: {
			perPage: 1,
		},
  }
};

if (carousell) {
  const splide = new Splide(carousell, sliderOptions);

  splide.mount();
}

