import isEmail from 'validator/lib/isEmail';
// import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmpty from 'validator/lib/isEmpty';
import axios from 'axios';

export const formFunc = async () => {
  const SEGMENTED_CONTROL_BASE_SELECTOR = '.form__switcher';
  const SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR =
    '.form__switcher .option input';
  const SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR =
    '.form__switcher .selection';

  document.addEventListener('DOMContentLoaded', setup);

  function setup() {
    forEachElement(SEGMENTED_CONTROL_BASE_SELECTOR, elem => {
      elem.addEventListener('change', updatePillPosition);
    });
    window.addEventListener('resize', updatePillPosition); // Prevent pill from detaching from element when window resized. Becuase this is rare I haven't bothered with throttling the event
  }
  function updatePillPosition() {
    forEachElement(
      SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR,
      (elem, index) => {
        if (elem.checked) moveBackgroundPillToElement(elem, index);
      }
    );
  }
  function moveBackgroundPillToElement(elem, index) {
    document.querySelector(
      SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR
    ).style.transform = 'translateX(' + elem.offsetWidth * index + 'px)';
  }

  function forEachElement(className, fn) {
    Array.from(document.querySelectorAll(className)).forEach(fn);
  }

  async function sendForm(form) {
    const ajaxurl = '/mail.php';
    const myFormData = new FormData(form);

    try {
      const response = await axios.post(ajaxurl, myFormData);
      if (response.data !== 'error') {
        formEnd(form, true);
      } else {
        formEnd(form, false);
      }
    } catch (error) {
      formEnd(form, false);
    }
  }

  function formEnd(form, status) {
    if(status) {
        document.getElementById('thanks').classList.add('opened');
        document.querySelector('body').classList.add('overhide');
    } else {
        document.getElementById('error').classList.add('opened');
        document.querySelector('body').classList.add('overhide');
    }

    setTimeout(() => {
      form.reset();
      updatePillPosition()
    }, 300);
  }

  const forms = document.querySelectorAll('.submitForm');

  forms.forEach(form => {
    form.addEventListener('submit', submitForm);
  });

  function submitForm(e) {
    e.preventDefault();

    removeErrors();

    const fileds = e.target.elements;
    let errors = 0;

    Array.from(fileds).forEach(field => {
      const isReq = field.dataset.required;

      if (isReq) {
        const type = field.type;
        const val = field.value;

        if (checkField(field, type, val)) {
          errors += 1;
        }
      }

      field.addEventListener('focus', removeErrors);
      field.addEventListener('change', removeErrors);
    });

    if (!errors) {
      sendForm(e.target);
    }
  }

  function checkField(field, type, val) {
    let errors = false;

    if (type === 'text') {
      if (isEmpty(val)) {
        errors = true;
        field.classList.add('error');
      }
    }

    if (type === 'email') {
      if (isEmpty(val) || !isEmail(val)) {
        errors = true;
        field.classList.add('error');
      }
    }

    if (type === 'tel') {
      if (isEmpty(val) || !isMobilePhone(val, ['uk-UA'])) {
        errors = true;
        field.classList.add('error');
      }
    }

    return errors;
  }

  function removeErrors() {
    const errors = document.querySelectorAll('.error');

    errors.forEach(el => {
      el.classList.remove('error');
    });
  }

  const closePopup = document.querySelectorAll('.closePopup');

  closePopup.forEach((btn) => {
    btn.addEventListener('click', () => {
      const openedPopup = document.querySelector('.popup.opened');
      openedPopup.classList.remove('opened');
    })
  })
};
