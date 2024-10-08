import { areaOptions, ingrOptions } from './custom-form.js';

const AREA_URL = 'https://tasty-treats-backend.p.goit.global/api/areas';
const INGR_URL = 'https://tasty-treats-backend.p.goit.global/api/ingredients';

async function getInsertAreas() {
  try {
    const response = await fetch(AREA_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch areas');
    }

    const data = await response.json();
    insertArea(data);
  } catch (error) {
    console.error('Error fetching areas:', error);
  }
}

function insertArea(data) {
  data.forEach(area => {
    const html = `<li data-area="${area.name}" class="option">${area.name}</li>`;
    areaOptions.insertAdjacentHTML('beforeend', html);
  });
}

async function getInsertIngr() {
  try {
    const response = await fetch(INGR_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch ingredients');
    }

    const data = await response.json();
    insertIngr(data);
  } catch (error) {
    console.error('Error fetching ingredients:', error);
  }
}

function insertIngr(data) {
  console.log(data);
  data.forEach(ingr => {
    const html = `<li data-ingr="${ingr._id}" class="option">${ingr.name}</li>`;
    ingrOptions.insertAdjacentHTML('beforeend', html);
  });
}

document.addEventListener('DOMContentLoaded', getInsertAreas);
document.addEventListener('DOMContentLoaded', getInsertIngr);
