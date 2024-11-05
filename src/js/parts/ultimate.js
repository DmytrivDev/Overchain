import Splide from '@splidejs/splide';

const ultCont = document.querySelectorAll('.ultimate__container');

ultCont?.forEach(el => {
  checkTop(el);

  window.addEventListener('resize', () => {
    checkTop(el);
  });

  const carousell = el.querySelector('.ultimate__car');
  const sliderOptions = {
    gap: '2rem',
    speed: 800,
    pagination: false,
    arrows: false,
    updateOnMove: true,
    autoWidth: true,
    drag: false,
    breakpoints: {
      1024: {
        gap: '1rem',
      },
    },
  };

  if (carousell) {
    const splide = new Splide(carousell, sliderOptions);

    splide.mount();

    document.addEventListener('scroll', () => {
      const section = el.closest('.section__ultimate');
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Перевірка видимості секції в межах екрану
      if (sectionRect.top <= 0 && sectionRect.bottom >= viewportHeight) {
        const scrollableHeight = sectionRect.height - viewportHeight;
        const scrolledInSection = Math.abs(sectionRect.top);
        const scrollPercent = (scrolledInSection / scrollableHeight) * 100;

        // Обмежуємо обчислення між 10% та 90% прокрутки
        const totalSlides = splide.Components.Slides.getLength() + 1; // Отримуємо кількість слайдів
        const normalizedScrollPercent = (scrollPercent - 10) / 80; // Нормалізуємо між 0 і 1
        const targetSlide = Math.floor(
          normalizedScrollPercent * (totalSlides - 1)
        );

        // Перемикання на відповідний слайд
        console.log(normalizedScrollPercent);
        splide.go(targetSlide);
      }
    });
  }
});

function checkTop(cont) {
  const ww = window.innerHeight;
  const contH = cont.getBoundingClientRect().height;
  const diff = ww - contH;

  console.log(diff);

  if (diff >= 0) {
    cont.classList.add('higher');
  } else {
    cont.classList.remove('higher');
  }

  cont.style.top = diff + 'px';
}
