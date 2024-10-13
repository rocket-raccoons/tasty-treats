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
//makes api call and calls displayRecipes function
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

//when click on select option it creates url and calls getQueryData function
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

//300ms after input stops it creates url calls getQueryData function
const handleInput = debounce(function () {
  //for display and hide cancel button
  if (searchInput.value !== '') {
    cancelBtn.classList.remove('hidden');
  } else {
    cancelBtn.classList.add('hidden');
  }

  //add inpt value to url
  queryUrl = queryUrl.includes('title')
    ? queryUrl.replace(/title=[^&]*/, `title=${searchInput.value}`)
    : `${queryUrl}&title=${searchInput.value}`;
  localStorage.setItem('title', searchInput.value);
  getQueryData(queryUrl);
}, 300);

//resets all filters on form
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

  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(button => {
    button.style.color = '';
  });
  cancelBtn.classList.add('hidden');
  clearFormLocal();
  getQueryData(queryUrl);
}

//clears input value and hides cancel button
function clearInput() {
  handleInput();
  searchInput.value = '';
  cancelBtn.classList.add('hidden');
}

//event listeners
timeOptions.addEventListener('click', e => handleSelect('time', e));
areaOptions.addEventListener('click', e => handleSelect('area', e));
ingrOptions.addEventListener('click', e => handleSelect('ingredient', e));
searchInput.addEventListener('input', handleInput);
cancelBtn.addEventListener('click', clearInput);
resetBtn.addEventListener('click', resetFilter);
