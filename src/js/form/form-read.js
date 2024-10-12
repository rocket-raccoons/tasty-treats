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
  loader,
} from './custom-form.js';
import { changePage } from '../pagination.js';
import { clearFormLocal } from './form-init.js';
import { displayRecipes, cardsList } from '../cards.js';

import debounce from 'lodash/debounce';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let queryUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9`;

//functions
//urlden veri cekme
export async function getQueryData(url) {
  try {
    cardsList.innerHTML = '';
    loader.classList.remove('hidden');
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('An error occurred while fetching recipes');
    }
    const data = await response.json();
    localStorage.setItem('totalPage', data.totalPages);
    changePage(1, 'form-read');
    displayRecipes(data.results);
  } catch (error) {
    iziToast.error({
      title: '',
      message: `Sorry! An error occurred while fetching recipes please try again!`,
      position: 'topRight',
    });
    console.log(error.message);
  } finally {
    loader.classList.add('hidden');
  }
}

//select optiona göre url düzenleme
function handleSelect(inputName, e) {
  if (e.target.tagName !== 'LI') return;
  const category = localStorage.getItem('category');

  const triggerText = document.getElementById(`${inputName}-trigger-text`);
  const hiddenInput = document.getElementById(`${inputName}-hidden-input`);
  const options = document.getElementById(`${inputName}-options`);

  triggerText.textContent = e.target.textContent;
  hiddenInput.value = e.target.dataset[inputName];
  localStorage.setItem(`${inputName}`, hiddenInput.value);

  //input verisini urlye ekleme
  queryUrl = queryUrl.includes(inputName)
    ? queryUrl.replace(
        new RegExp(`${inputName}=[^&]*`),
        `${inputName}=${hiddenInput.value}`
      )
    : `${queryUrl}&${inputName}=${hiddenInput.value}`;

  //localden gelen category verisini urlye ekleme
  queryUrl = queryUrl.includes('category')
    ? queryUrl.replace(/category=[^&]*/, `category=${category}`)
    : `${queryUrl}&category=${category}`;

  options.classList.add('hidden-dropdown');
  triggerText.classList.add('trigger-active');
  getQueryData(queryUrl);
}

//inputa göre url düzenleme
const handleInput = debounce(function () {
  queryUrl = queryUrl.includes('title')
    ? queryUrl.replace(/title=[^&]*/, `title=${searchInput.value}`)
    : `${queryUrl}&title=${searchInput.value}`;
  localStorage.setItem('title', searchInput.value);
  getQueryData(queryUrl);
}, 300);

export function resetFilter() {
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
  clearFormLocal();
  getQueryData(queryUrl);
}

//event listeners
timeOptions.addEventListener('click', e => handleSelect('time', e));
areaOptions.addEventListener('click', e => handleSelect('area', e));
ingrOptions.addEventListener('click', e => handleSelect('ingredient', e));
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
