const container = document.querySelector('.faq__container');

if (container) {
  const items = container.querySelectorAll('.faq__item');

  items.forEach((item) => {
    const panel = item.querySelector('.faq__item-content');
    if (panel) panel.style.maxHeight = '0px';
  });

  function toggle(item) {
    const panel = item.querySelector('.faq__item-content');
    if (!panel) return;

    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
      panel.style.maxHeight = '0px';
    } else {
      item.classList.add('is-open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  container.addEventListener('click', (e) => {
    const header = e.target.closest('.faq__item-header');
    if (!header) return;
    toggle(header.closest('.faq__item'));
  });
}

const winners = document.querySelectorAll('.winners__item');
const showBtn = document.getElementById('showWinnersBtn');
const hideBtn = document.getElementById('hideWinnersBtn');

winners.forEach((item, index) => {
  if (index >= 5) item.classList.add('hidden');
});

showBtn.addEventListener('click', () => {
  winners.forEach(item => item.classList.remove('hidden'));
  showBtn.disabled = true;
  showBtn.classList.add('button-disabled');
  hideBtn.disabled = false;
  hideBtn.classList.remove('button-disabled');
});

hideBtn.addEventListener('click', () => {
  winners.forEach((item, index) => {
    if (index >= 5) item.classList.add('hidden');
  });
  showBtn.disabled = false;
  showBtn.classList.remove('button-disabled');
  hideBtn.disabled = true;
  hideBtn.classList.add('button-disabled');
});

