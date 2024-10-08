export const form = document.getElementById('filter-form');
export const timeTrigger = document.getElementById('time-trigger');
export const areaTrigger = document.getElementById('area-trigger');
export const ingrTrigger = document.getElementById('ingr-trigger');
export const timeOptions = document.getElementById('time-options');
export const areaOptions = document.getElementById('area-options');
export const ingrOptions = document.getElementById('ingr-options');

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
