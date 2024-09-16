import './styles/reset.css';
import './styles/style.css';

document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('aside').classList.toggle('aside-visible');
});

document.querySelector('#menu-btn').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('rotated-180');
});
