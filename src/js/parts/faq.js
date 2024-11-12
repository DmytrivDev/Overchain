import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faq = document.querySelector('.faq__list');

if(faq) {
    const ww = window.innerWidth;

    let options = {
        openOnInit: [0]
    };

    new Accordion(faq, options);
}
