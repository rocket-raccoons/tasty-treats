import {
  timeOptions,
  areaOptions,
  ingrOptions,
  timeTriggerText,
  timeHiddenInput,
  areaTriggerText,
  areaHiddenInput,
  ingrTriggerText,
  ingrHiddenInput,
  searchInput,
} from './custom-form.js';

import debounce from 'lodash/debounce';

let queryUrl;

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

timeOptions.addEventListener('click', e => {
  if (e.target.tagName !== 'LI') return;
  timeTriggerText.textContent = e.target.textContent;
  timeHiddenInput.value = e.target.dataset.time;
  queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;

  console.log(queryUrl);
  getQueryData(queryUrl);
  timeOptions.classList.toggle('hidden-dropdown');
});

areaOptions.addEventListener('click', e => {
  if (e.target.tagName !== 'LI') return;
  areaTriggerText.textContent = e.target.textContent;
  areaHiddenInput.value = e.target.dataset.area;
  queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;
  areaOptions.classList.toggle('hidden-dropdown');
  console.log(queryUrl);

  getQueryData(queryUrl);
});

ingrOptions.addEventListener('click', e => {
  if (e.target.tagName !== 'LI') return;
  ingrTriggerText.textContent = e.target.textContent;
  ingrHiddenInput.value = e.target.dataset.ingr;
  ingrOptions.classList.toggle('hidden-dropdown');
  console.log(ingrHiddenInput.value);
  queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;
  console.log(queryUrl);

  getQueryData(queryUrl);
});

function inputHandler() {
  queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9&time=${timeHiddenInput.value}&area=${areaHiddenInput.value}&ingredients=${ingrHiddenInput.value}&title=${searchInput.value}`;

  console.log(queryUrl);
  getQueryData(queryUrl);
}

const debounceInput = debounce(inputHandler, 300);

searchInput.addEventListener('input', debounceInput);
