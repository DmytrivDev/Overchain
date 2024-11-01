const items = document.querySelectorAll('.getway__item');

items.forEach(el => {
    el.addEventListener('click', evt => {
        const evtCur = evt.currentTarget;
        const innerH = evtCur.querySelector('.getway__inner').offsetHeight;
        evtCur.style.height = innerH+'px';
        evtCur.classList.add('opening');
        setTimeout(() => {
            evtCur.classList.add('opened');
        }, 300);
    });
});
