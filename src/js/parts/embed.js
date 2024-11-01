import scrollToElement from 'scroll-to-element';

export const embedFunc = () => {
  const tabulCont = document.querySelector('.texttabs__list');

  if (tabulCont) {
    const embed = document.querySelector('.embed');
    const titles = embed.querySelectorAll('h3');
    let list = [];

    if (!titles) {
      titles = embed.querySelectorAll('h4');
    }

    console.log(titles)

    titles.forEach((el, i) => {
      const text = el.textContent;

      el.setAttribute('id', 'h' + i);
      if (i === 0) {
        list.push(
          `<li><a href="#" class="active" data-target="h${i}">${text}</a></li>`
        );
      } else {
        list.push(`<li><a href="#" data-target="h${i}">${text}</a></li>`);
      }
    });

    tabulCont.innerHTML = list.join('');

    tabulCont.addEventListener('click', e => {
      e.preventDefault();

      const isLink = e.target.tagName === 'A';
      const headH = document.querySelector('.header').offsetHeight;

      if (isLink) {
        const targ = e.target.dataset.target;
        const targetH = document.getElementById(targ);

        const options = {
          offset: -headH,
          duration: 500,
        };

        scrollToElement(targetH, options);
      }
    });
  }
};
