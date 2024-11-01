import { toggle, up } from "slide-element";
import scrollToElement  from 'scroll-to-element';

export const headerFunc = () => {
    const body = document.querySelector('body');
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;
  
    window.addEventListener('scroll', () => {
      if (!header.classList.contains('stopProg')) {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
          body.classList.remove(scrollUp);
          return;
        }
  
        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
          body.classList.remove(scrollUp);
          body.classList.add(scrollDown);
        } else if (
          currentScroll < lastScroll &&
          body.classList.contains(scrollDown)
        ) {
          body.classList.remove(scrollDown);
          body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
      } else {
        lastScroll = 0;
      }
    });
  
    const header = document.querySelector('.header');
    const navMenu = document.querySelector('.mobile__navcont');
  
    const hamburgerButton = document.querySelector('.hamburger');
    hamburgerButton.addEventListener('click', showNavBox);
  
    function showNavBox(e) {
      e.preventDefault();
  
      hamburgerButton.classList.toggle('active');
      body.classList.toggle('overhideMob');
      toggle(navMenu);
    }
  
    const ankors = document.querySelectorAll('.ankor > a, a.ankor');
  
    if (ankors) {
      ankors.forEach(el => {
        el.addEventListener('click', e => {
          e.preventDefault();
  
          const width = window.innerWidth;
          const targ = e.target.getAttribute('href');
          const targetH = document.querySelector(targ);
          let offset = 0;
  
          if (targ && targetH) {
            if(width <= 1024 && !e.target.closest('.menu-item-has-children') || width > 1024) {
              header.classList.add('stopProg');
              body.classList.remove(scrollUp);
              body.classList.add(scrollDown);
            }
  
            if (!targetH.classList.contains('noOffset')) {
              if (width > 1024) {
                header.classList.remove('fixedDubble');
                header.classList.remove('hoveredHeader');
                body.classList.remove('bodyOverlay');
  
                const subNavs = header.querySelectorAll('.sub-menu');
                subNavs.forEach(el => {
                  el.classList.remove('hovered');
                });
                }
            }
  
            if (width <= 1024) {
              if(!e.target.closest('.menu-item-has-children')) {
                hamburgerButton.classList.remove('active');
                body.classList.remove('overhideMob');
                up(navMenu);
              }
            }
  
            if(width <= 1024 && !e.target.closest('.menu-item-has-children') || width > 1024) {
              const options = {
                offset: offset,
                duration: 700,
              };
              
              scrollToElement(targetH, options);
  
              setTimeout(() => {
                header.classList.remove('stopProg');
              }, '1000');
            }
          } else {
            const protocol = window.location.protocol;
            const host = document.location.host;
            const fullUrl = window.location.href;
            const languageCodeRegex = /\/([a-z]{2})\//;
            const match = fullUrl.match(languageCodeRegex);
            const languageCode = match ? `/${match[1]}` : '';
  
            const url = protocol + '//' + host + languageCode + targ;
  
            console.log(url);
  
            window.location.href = url;
          }
        });
      });
    }
  };
  