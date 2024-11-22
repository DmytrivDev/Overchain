const messages = document.querySelectorAll('.coindec');

if (messages) {
  document.addEventListener('mousemove', event => {
    const ww = window.innerWidth;

    if (ww > 1024) {
      const currentMousePosition = { x: event.clientX, y: event.clientY };

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      messages.forEach(message => {
        let offsetX = (currentMousePosition.x - centerX) / 100;
        let offsetY = (currentMousePosition.y - centerY) / 100;

        if (message.classList.contains('type1')) {
          offsetX = -(currentMousePosition.x - centerX) / 100;
          offsetY = -(currentMousePosition.y - centerY) / 100;
        }

        message.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    }
  });
}
