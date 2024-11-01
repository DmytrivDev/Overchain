import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faq = document.querySelector('.faq__list');

if(faq) {
    const ww = window.innerWidth;

    let options = {
        openOnInit: [0]
    };

    if(ww > 1024) {
        const indices = Array.from(faq.querySelectorAll('.faq__item'), (item, index) => index);

        options = {
            showMultiple: true,
            openOnInit: indices
    
        };
    }

    new Accordion(faq, options);
}
