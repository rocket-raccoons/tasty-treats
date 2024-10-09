//prettier-ignore
import { timeOptions, areaOptions, ingrOptions, searchInput, } from './custom-form.js';

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

//event listeners
timeOptions.addEventListener('click', e => handleSelect('time', e));
areaOptions.addEventListener('click', e => handleSelect('area', e));
ingrOptions.addEventListener('click', e => handleSelect('ingr', e));
searchInput.addEventListener('input', handleInput);

// timeOptions.addEventListener('click', e => {
//   if (e.target.tagName !== 'LI') return;
//   timeTriggerText.textContent = e.target.textContent;
//   timeHiddenInput.value = e.target.dataset.time;
//   queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;

//   console.log(queryUrl);
//   getQueryData(queryUrl);
//   timeOptions.classList.toggle('hidden-dropdown');
// });

// areaOptions.addEventListener('click', e => {
//   if (e.target.tagName !== 'LI') return;
//   areaTriggerText.textContent = e.target.textContent;
//   areaHiddenInput.value = e.target.dataset.area;
//   queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;
//   areaOptions.classList.toggle('hidden-dropdown');
//   console.log(queryUrl);

//   getQueryData(queryUrl);
// });

// ingrOptions.addEventListener('click', e => {
//   if (e.target.tagName !== 'LI') return;
//   ingrTriggerText.textContent = e.target.textContent;
//   ingrHiddenInput.value = e.target.dataset.ingr;
//   ingrOptions.classList.toggle('hidden-dropdown');
//   console.log(ingrHiddenInput.value);
//   queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;
//   console.log(queryUrl);

//   getQueryData(queryUrl);
// });
