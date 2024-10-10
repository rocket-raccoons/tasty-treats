export async function fetchRecipes() {
  try {
    // API'den tarif verilerini çekiyoruz
    const response = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes?limit=9');
    const data = await response.json();

    // Tarifleri gösterme fonksiyonunu çağır
    displayRecipes(data.results);
  } catch (error) {
    console.error('API verisi alınırken hata oluştu:', error);
  }
}
const cardsList = document.querySelector('.cards-list');
export function displayRecipes(recipes) {


  // Mevcut kartları temizleme (eğer gerekirse)
  cardsList.innerHTML = '';

  recipes.forEach(recipe => {
    // Rating için yıldızları oluşturma
    const filledStars = Math.round(recipe.rating); // Kaç yıldız dolu olacağını hesapla
    const emptyStars = 5 - filledStars; // Kaç yıldız boş kalacak

    // Her kart için template literal oluşturuluyor
    const cardHTML = `
      <li class="cards-listing" style="background-image: url(${recipe.preview});">
        <div class="card-filter"></div>
        <button class="heard-button"><svg class="svg-reset" width="22px" height="22px">
          <use
            class="heard-svg"
            href="./svg/sprite.svg#icon-heart"
          ></use>
        </svg></button>
        <div class="text-container">${recipe.title}</div>
        <div class="specification-text">${recipe.description}</div>
        <div class="card-rating-container">
          <div class="rating-container">
            <button class="recipe-button">See recipe</button>
            <div class="rating-star">
            <p class="rating-text">${recipe.rating.toFixed(1)}</p>
              ${`<svg class="svg-reset" width="18px" height="18px">
          <use
            href="./svg/sprite.svg#icon-star  "
          ></use>
        </svg>`.repeat(filledStars)}${`<svg class="svg-reset" width="18px" height="18px">
          <use
            href="./svg/sprite.svg#icon-emptystar"
          ></use>
        </svg>`.repeat(emptyStars)}
            </div>
          </div>
        </div>
      </li>
    `;

    // Oluşturulan HTML'i ekrana yerleştir
    cardsList.insertAdjacentHTML('beforeend', cardHTML);
  });

  // Tüm recipe-button öğelerine tıklama olayı ekleyelim
  const recipeButtons = document.querySelectorAll('.recipe-button');
  recipeButtons.forEach(button => {
    button.addEventListener('click', function() {
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
});

