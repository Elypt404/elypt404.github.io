// JavaScript used to set randomness for particles.
// Could be done via SSR
const button = document.querySelector('.sparkle-button button');
button.addEventListener('click', () => {
  window.location.href = 'Realindex.html';
});
const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const PARTICLES = document.querySelectorAll('.particle');
PARTICLES.forEach(P => {
  P.setAttribute('style', `
		--x: ${RANDOM(20, 80)};
		--y: ${RANDOM(20, 80)};
		--duration: ${RANDOM(6, 20)};
		--delay: ${RANDOM(1, 10)};
		--alpha: ${RANDOM(40, 90) / 100};
		--origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--size: ${RANDOM(40, 90) / 100};
	`);
});
