//prettier-ignore
import {
  timeOptions,
  areaOptions,
  ingrOptions,
  searchInput,
  cancelBtn,
  resetBtn,
  timeTriggerText,
  areaTriggerText,
  ingrTriggerText,
  timeHiddenInput,
  areaHiddenInput,
  ingrHiddenInput,
} from './custom-form.js';

import debounce from 'lodash/debounce';

let queryUrl =
  'https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9';

//functions
//urlden veri cekme
async function getQueryData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch query data');
    }

    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error('Error fetching query data:', error);
  }
}

//select optiona göre url düzenleme
function handleSelect(inputName, e) {
  if (e.target.tagName !== 'LI') return;

  const triggerText = document.getElementById(`${inputName}-trigger-text`);
  const hiddenInput = document.getElementById(`${inputName}-hidden-input`);
  const options = document.getElementById(`${inputName}-options`);

  triggerText.textContent = e.target.textContent;
  hiddenInput.value = e.target.dataset[inputName];

  queryUrl = queryUrl.includes(inputName)
    ? queryUrl.replace(
        new RegExp(`${inputName}=[^&]*`),
        `${inputName}=${hiddenInput.value}`
      )
    : `${queryUrl}&${inputName}=${hiddenInput.value}`;
  console.log(queryUrl);

  options.classList.toggle('hidden-dropdown');
  triggerText.classList.add('trigger-active');
  getQueryData(queryUrl);
}

//inputa göre url düzenleme
const handleInput = debounce(function () {
  queryUrl = queryUrl.includes('title')
    ? queryUrl.replace(/title=[^&]*/, `title=${searchInput.value}`)
    : `${queryUrl}&title=${searchInput.value}`;
  console.log(queryUrl);
  getQueryData(queryUrl);
}, 300);

function resetFilter() {
  queryUrl =
    'https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9';

  [timeTriggerText, areaTriggerText, ingrTriggerText].forEach(trigger => {
    trigger.textContent = 'Select';
    trigger.classList.remove('trigger-active');
  });

  [timeHiddenInput, areaHiddenInput, ingrHiddenInput, searchInput].forEach(
    input => (input.value = '')
  );

  cancelBtn.classList.add('hidden');

  getQueryData(queryUrl);
}

//event listeners
timeOptions.addEventListener('click', e => handleSelect('time', e));
areaOptions.addEventListener('click', e => handleSelect('area', e));
ingrOptions.addEventListener('click', e => handleSelect('ingredients', e));
searchInput.addEventListener('input', () => {
  handleInput();
  if (searchInput.value !== '') {
    cancelBtn.classList.remove('hidden');
  } else {
    cancelBtn.classList.add('hidden');
  }
});
cancelBtn.addEventListener('click', () => {
  handleInput();
  searchInput.value = '';
  cancelBtn.classList.add('hidden');
});
resetBtn.addEventListener('click', resetFilter);
