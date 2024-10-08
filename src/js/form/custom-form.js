const form = document.getElementById('filter-form');
const timeTrigger = document.getElementById('time-trigger');
const areaTrigger = document.getElementById('area-trigger');
const ingrTrigger = document.getElementById('ingr-trigger');
const timeOptions = document.getElementById('time-options');
const areaOptions = document.getElementById('area-options');
const ingrOptions = document.getElementById('ingr-options');

form.addEventListener('click', e => {
  let targetId = e.target.id;

  if (e.target.tagName === 'svg' || e.target.tagName === 'SPAN') {
    targetId = e.target.parentElement.id;
  }

  switch (targetId) {
    case 'time-trigger':
      timeOptions.classList.toggle('hidden-dropdown');
      break;
    case 'area-trigger':
      areaOptions.classList.toggle('hidden-dropdown');
      break;
    case 'ingr-trigger':
      ingrOptions.classList.toggle('hidden-dropdown');
      break;
  }
});

for (let i = 5; i <= 160; i += 5) {
  const html = `<li data-time="${i}" class="option">${i} min</li>`;
  timeOptions.insertAdjacentHTML('beforeend', html);
}
