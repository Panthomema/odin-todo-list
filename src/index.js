import './styles/reset.css';
import './styles/style.css';
import inbox from './tabs/inbox';

document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-visible');
});

document.querySelector('#menu-btn').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('rotated-180');
});

document.querySelector('#menu-btn').addEventListener('click', () => {
  const overlay = document.querySelector('.overlay');

  if (overlay.classList.contains('visible')) {
    overlay.addEventListener('transitionend', () => {
      overlay.classList.remove('displayed');
    }, { once: true });
    overlay.classList.remove('visible');
  } else {
    overlay.classList.add('displayed');
    setTimeout(() => {
      overlay.classList.add('visible');
    }, 1);
  }
});

document.querySelector('#inbox-btn').addEventListener('click', () => {
  document.querySelector('main').appendChild(inbox);
});
