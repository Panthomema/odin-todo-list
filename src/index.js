import './styles/reset.css';
import './styles/style.css';
import inbox from './tabs/inbox';
import thisWeek from './tabs/thisWeek';
import today from './tabs/today';

document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-visible');
});

document.querySelector('#menu-btn').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('rotated-180');
});

document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('.overlay').classList.toggle('visible');
});

document.querySelector('#inbox-btn').addEventListener('click', (event) => {
  handleMenuClick(event, inbox);
});

document.querySelector('#today-btn').addEventListener('click', (event) => {
  handleMenuClick(event, today);
});

document.querySelector('#this-week-btn').addEventListener('click', (event) => {
  handleMenuClick(event, thisWeek);
});

function handleMenuClick(event, newContent) {
  clearActualStyles();
  event.currentTarget.classList.add('actual');
  handleViewTransition(newContent);
}

function clearActualStyles() {
  [...document.querySelectorAll('nav ul button')].forEach((btn) => {
    btn.classList.remove('actual');
  });
}

function handleViewTransition(newContent) {
  const main = document.querySelector('main')
  const actualContent = main.querySelector('section')
  main.replaceChild(newContent, actualContent);
}
