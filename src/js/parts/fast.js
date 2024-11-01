import Splide from '@splidejs/splide';

const carousell = document.querySelector('.fast__car');

const sliderOptions = {
  perPage: 1,
  perMove: 1,
  gap: '1rem',
  drag: true,
  pagination: true,
  arrows: false,
};

if (carousell) {
  const splide = new Splide(carousell, sliderOptions);

  checkWidthCases(carousell, splide);

  window.addEventListener('resize', function () {
    checkWidthCases(carousell, splide);
  });
}

function checkWidthCases(carousell, splide) {
  const ww = window.innerWidth;
  const carList = carousell.querySelector('.fast__list');

  if (ww < 761) {
    carList.classList.add('splide__list');
    splide.mount();
  } else {
    carList.classList.remove('splide__list');
    splide.destroy();
  }
}
