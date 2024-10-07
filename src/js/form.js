const areaSelect = document.getElementById('area');
const ingredientsSelect = document.getElementById('ingredients');
const AREA_URL = 'https://tasty-treats-backend.p.goit.global/api/areas';
const ING_URL = 'https://tasty-treats-backend.p.goit.global/api/ingredients';

async function getAreas() {
  try {
    const response = await fetch(AREA_URL);

    if (!response.ok) throw new Error('Failed to fetch areas');
    const data = await response.json();

    const areas = data.map(area => area.name);
    areas.map(area => {
      const html = `<option value="${area.toLowerCase()}">${area}</option>`;

      areaSelect.insertAdjacentHTML('beforeend', html);
    });
  } catch (error) {
    alert(error.message);
  }
}
getAreas();

async function getIngredients() {
  try {
    const response = await fetch(ING_URL);

    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();

    const allIngredients = data.map(ing => ing.name);
    allIngredients.map(ing => {
      const html = `<option value="${ing.toLowerCase()}">${ing}</option>`;

      ingredientsSelect.insertAdjacentHTML('beforeend', html);
    });
  } catch (error) {
    alert(error.message);
  }
}

getIngredients();
