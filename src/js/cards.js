import { openModal, initModal } from './modal.js';

export const cardsList = document.querySelector('.cards-list');
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
    return 'hata';
  }
}

export function displayRecipes(recipes) {
  // Mevcut kartları temizleme (eğer gerekirse)
  cardsList.innerHTML = '';
  if (recipes.length === 0) {
    cardsList.innerHTML = `<img class="no-results" src="./img/nothing.gif"></img>
                                    <h1 class="no-results-text">Sorry! No results were found that match your filters.</h1>`;
  }

  recipes.forEach(recipe => {
    // Rating için yıldızları oluşturma
    const filledStars = Math.round(recipe.rating);
    const emptyStars = 5 - filledStars;

    const cardHTML = `
      <li class="cards-listing" style="background-image: url(${
        recipe.preview
      });">
      <button class="heard-button add-to-fav" data-id="${
        recipe._id
      }" aria-label="like-btn">
         <svg class="svg-heard add-to-fav" data-id="${
           recipe._id
         }" width="22px" height="22px">
            <use class="add-to-fav svguse" href="./svg/sprite.svg#icon-heart"></use>
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

  addRecipeButtonListeners();
  // Tüm recipe-button öğelerine tıklama olayı ekleyelim
  const recipeButtons = document.querySelectorAll('.recipe-button');
}

// Update the event listener for recipe buttons
function addRecipeButtonListeners() {
  const recipeButtons = document.querySelectorAll('.recipe-button');
  recipeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const recipeId = this.getAttribute('data-id');
      openModal(recipeId);
    });
  });
}

function updateLocalStorage() {
  localStorage.setItem('favArr', JSON.stringify(favArr));
}

function initFavorites() {
  const storedFavArr = localStorage.getItem('favArr');
  if (storedFavArr) {
    favArr = JSON.parse(storedFavArr);
  }
}

cardsList.addEventListener('click', e => {
  const favButton = e.target.closest('.heard-button');

  if (favButton) {
    const id = favButton.dataset.id;
    const emptyHeart = favButton.querySelector('.svguse');

    if (favArr.includes(id)) {
      favArr.splice(favArr.indexOf(id), 1);
      emptyHeart.setAttribute('href', './svg/sprite.svg#icon-heart');
    } else {
      favArr.push(id);
      emptyHeart.setAttribute('href', './svg/sprite.svg#icon-heart-filled');
    }

    updateLocalStorage(); // Update localStorage after changing favArr
  }
});

// Sayfa yüklendiğinde tarifleri çek
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    fetchRecipes().then(() => {
      addRecipeButtonListeners(); // Add listeners after recipes are loaded
      initModal(); // Initialize modal functionality
    });
  }, 100);

  // Initialize favArr from localStorage if it exists
  const storedFavArr = localStorage.getItem('favArr');
  if (storedFavArr) {
    favArr.push(...JSON.parse(storedFavArr));
  }
});

// EXPORT FAV PAGE FUNCTION
export function getCardHTML(recipe) {
  const filledStars = Math.round(recipe.rating);
  const emptyStars = 5 - filledStars;
  return `
    <li class="cards-listing" style="background-image: url(${recipe.preview})">
      <!-- ... (rest of the card HTML) ... -->
    </li>
  `;
} //to export fav page
