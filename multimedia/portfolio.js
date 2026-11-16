const filters = document.querySelector('.filters');
const buttons = Array.from(filters.querySelectorAll('button'));
const gallery = document.querySelector('#gallery');
const cards = Array.from(gallery.querySelectorAll('.project'));
const count = document.querySelector('#project-count');

function applyFilter(filter) {
  let visible = 0;
  filters.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
  buttons.find(button => button.dataset.filter === filter).setAttribute('aria-pressed', 'true');
  gallery.classList.toggle('filtered', filter !== 'all');
  for (const card of cards) {
    card.hidden = filter !== 'all' && card.dataset.group !== filter;
    if (!card.hidden) visible += 1;
  }
  count.textContent = visible === 1 ? '1 project' : visible + ' projects';
}

for (const button of buttons) {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
}
filters.hidden = false;
