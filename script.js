function tilt(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();

  const x = e.clientX - (rect.left + rect.width  / 2);
  const y = e.clientY - (rect.top  + rect.height / 2);

  const rotX = (y / rect.height) * 10;
  const rotY = (-x / rect.width) * 10;

  el.style.transform  = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
  el.style.transition = 'transform 0.1s ease';
  el.style.willChange = 'transform';
}

function mouseEnter(e) {
  const el = e.currentTarget;
  el.addEventListener('mousemove', tilt);
}

function disableMovement(e) {
  const el = e.currentTarget;
  el.removeEventListener('mousemove', tilt);
  el.style.transform  = 'rotateX(0deg) rotateY(0deg) scale(1)';
  el.style.transition = 'transform 0.6s ease';
}