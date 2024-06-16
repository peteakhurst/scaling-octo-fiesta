const glowingBall = document.querySelector('.glowing-ball');
const content = document.querySelector('.content');

function moveGlowingBall(event) {
  const x = (event.clientX / window.innerWidth) * 100 - 50;
  const y = (event.clientY / window.innerHeight) * 100 - 50;
  glowingBall.style.transform = `translate(-50%, -50%) translate(${x / 10}%, ${
    y / 10
  }%)`;
}

function springBackGlowingBall() {
  glowingBall.style.transition = 'transform 0.3s ease-out';
  glowingBall.style.transform = 'translate(-50%, -50%) translate(0, 0)';
}

document.addEventListener('mousemove', moveGlowingBall);
document.addEventListener('mouseleave', springBackGlowingBall);

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  setFlipClock('hours', hours);
  setFlipClock('minutes', minutes);
  setFlipClock('seconds', seconds);

  setTimeout(updateClock, 1000);
}

function setFlipClock(id, value) {
  const flip = document.getElementById(id);
  flip.innerHTML = `
    <div>${value[0]}</div>
    <div>${value[1]}</div>
    `;
}

updateClock();
