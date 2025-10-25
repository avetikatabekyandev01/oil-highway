const container = document.querySelector('.faq__container');

if (container) {
  const items = container.querySelectorAll('.faq__item');

  // Ставим стартовое состояние
  items.forEach((item) => {
    const panel = item.querySelector('.faq__item-text');
    if (panel) panel.style.maxHeight = '0px';
  });

  function toggle(item) {
    const panel = item.querySelector('.faq__item-text');
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
