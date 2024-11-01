const items = document.querySelectorAll('.convers__item');

items.forEach(el => {
    el.addEventListener('click', evt => {
        const evtCur = evt.currentTarget;
        const innerH = evtCur.querySelector('.convers__inner').offsetHeight;
        evtCur.style.height = innerH+'px';
        evtCur.classList.add('opening');
        setTimeout(() => {
            console.log(evtCur)
            evtCur.classList.add('opened');
        }, 300);
    });
});
