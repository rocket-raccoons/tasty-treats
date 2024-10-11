const cardsList = document.querySelector('.cards-list');
const favArr = [];

export async function fetchRecipes() {
  try {
    // API'den tarif verilerini çekiyoruz
    const response = await fetch(
      'https://tasty-treats-backend.p.goit.global/api/recipes?limit=9'
    );
    const data = await response.json();
    
    // Tarifleri gösterme fonksiyonunu çağır
    displayRecipes(data.results);
    return data.totalPages;
  } catch (error) {
    console.error('API verisi alınırken hata oluştu:', error);
    return "hata";
  }
}

export function displayRecipes(recipes) {
  // Mevcut kartları temizleme (eğer gerekirse)
  cardsList.innerHTML = '';

  recipes.forEach(recipe => {
    // Rating için yıldızları oluşturma
    const filledStars = Math.round(recipe.rating);
    const emptyStars = 5 - filledStars;

    const cardHTML = `
      <li class="cards-listing" style="background-image: url(${
        recipe.preview
      });">
      <button class="heard-button add-to-fav" data-id="${recipe._id}">
         <svg class="svg-heard add-to-fav" data-id="${
           recipe._id
         }" width="22px" height="22px">
            <use id="heard-use" class="add-to-fav" href="./svg/sprite.svg#icon-heart"></use>
        </svg></button>

      <div class="card-content-container">
         <div class="text-container">
            <h3 class="card-title">${recipe.title}</h3>
              <p class="specification-text">${recipe.description}</p>
          </div>

          <div class="card-rating-container">
              <div class="rating-container">
                  <p class="rating-text">${recipe.rating.toFixed(1)}</p>
                  <div class="star-container">
                    ${`<svg class="card-star-svg">
                    <use href="./svg/sprite.svg#icon-star"></use>
                      </svg>`.repeat(filledStars)}

                    ${`<svg class="card-star-svg">
                    <use href="./svg/sprite.svg#icon-emptystar"></use>
                    </svg>`.repeat(emptyStars)}
                  </div>    
                </div>
              
            <button class="recipe-button" data-id="${
              recipe._id
            }">See recipe</button>
        </div>      
      </li>
    `;

    // Oluşturulan HTML'i ekrana yerleştir
    cardsList.insertAdjacentHTML('beforeend', cardHTML);
  });

  // Tüm recipe-button öğelerine tıklama olayı ekleyelim
  const recipeButtons = document.querySelectorAll('.recipe-button');
  recipeButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Butona tıklandığında metin rengi siyah olacak
      button.style.color = '#000';
    });
  });
}

// Sayfa yüklendiğinde tarifleri çek
document.addEventListener('DOMContentLoaded', _ => {
  setTimeout(() => {
    fetchRecipes();
  }, 100);

  localStorage.setItem('favArr', favArr);
});

cardsList.addEventListener('click', e => {
  if (e.target.classList.contains('add-to-fav')) {
    const emptyHeart = document.querySelector('#heard-use');
    const id = e.target.dataset.id;

    if (favArr.includes(id)) {
      favArr.splice(favArr.indexOf(id), 1);
      emptyHeart.setAttribute('href', './svg/sprite.svg#icon-heart');
    } else {
      favArr.push(id);
      emptyHeart.setAttribute('href', './svg/sprite.svg#icon-heart-filled');
    }
  }

  localStorage.setItem('favArr', favArr);
});
