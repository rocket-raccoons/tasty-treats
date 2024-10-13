export const form = document.getElementById('filter-form');
export const timeTrigger = document.getElementById('time-trigger');
export const areaTrigger = document.getElementById('area-trigger');
export const ingrTrigger = document.getElementById('ingredient-trigger');
export const timeOptions = document.getElementById('time-options');
export const areaOptions = document.getElementById('area-options');
export const ingrOptions = document.getElementById('ingredient-options');
export const timeTriggerText = document.getElementById('time-trigger-text');
export const areaTriggerText = document.getElementById('area-trigger-text');
export const ingrTriggerText = document.getElementById(
  'ingredient-trigger-text'
);
export const timeHiddenInput = document.getElementById('time-hidden-input');
export const areaHiddenInput = document.getElementById('area-hidden-input');
export const ingrHiddenInput = document.getElementById(
  'ingredient-hidden-input'
);
export const searchInput = document.getElementById('search');
export const cancelBtn = document.getElementById('cancel-btn');
export const resetBtn = document.getElementById('reset-filter-btn');
export const loader = document.getElementById('loader');
export const pagination = document.querySelector('.pagination');
//custom form functionality
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
    case 'ingredient-trigger':
      ingrOptions.classList.toggle('hidden-dropdown');
      break;
  }
});
