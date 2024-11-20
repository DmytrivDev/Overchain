import Splide from '@splidejs/splide';

const carouselles = document.querySelectorAll('.srtps__car');

carouselles?.forEach(carousell => {
  const sliderOptions = {
    perPage: 2,
    perMove: 1,
    gap: '1rem',
    drag: true,
    pagination: true,
    arrows: false,
    breakpoints: {
      760: {
        perPage: 1,
      },
    },
  };

  const splide = new Splide(carousell, sliderOptions);

  checkWidthCases(carousell, splide);

  window.addEventListener('resize', function () {
    checkWidthCases(carousell, splide);
  });
});


function checkWidthCases(carousell, splide) {
  const ww = window.innerWidth;
  const carList = carousell.querySelector('.steps__list');

  if (ww < 1025) {
    carList.classList.add('splide__list');
    splide.mount();
  } else {
    carList.classList.remove('splide__list');
    splide.destroy();
  }
}
