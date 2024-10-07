const areaSelect = document.getElementById('area');

async function getAreas() {
  const response = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/areas'
  );
  const data = await response.json();

  const areas = data.map(area => area.name);
  areas.map(area => {
    const html = `<option value="${area.toLowerCase()}">${area}</option>`;

    areaSelect.insertAdjacentHTML('beforeend', html);
  });
}

console.log(areaSelect);
getAreas();
