const messages = document.querySelectorAll('.complate__decor');

if (messages) {
  document.addEventListener('mousemove', event => {
    const currentMousePosition = { x: event.clientX, y: event.clientY };

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    messages.forEach(message => {
      const offsetX = -(currentMousePosition.x - centerX) / 100;
      let offsetY = -(currentMousePosition.y - centerY) / 100;

      if (message.classList.contains('solution')) {
        const messH = message.offsetHeight / 2;
        offsetY = -((currentMousePosition.y - centerY) / 100) - messH;
      }

      message.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}
