import Splide from '@splidejs/splide';

const ultCont = document.querySelectorAll('.accept__container');

ultCont?.forEach(el => {
  const carousell = el.querySelector('.accept__car');
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
        gap: '1rem',
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

    document.addEventListener('scroll', () => {
      const section = el.closest('.section__accept');
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
