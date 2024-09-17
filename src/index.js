import './styles/reset.css';
import './styles/style.css';
import inbox from './tabs/inbox';

document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-visible');
});

document.querySelector('#menu-btn').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('rotated-180');
});

document.querySelector('#inbox-btn').addEventListener('click', () => {
  document.querySelector('main').appendChild(inbox);
});
