async function fetchRecipes() {
  try {
    // API'den tarif verilerini çekiyoruz
    const response = await fetch(
      'https://tasty-treats-backend.p.goit.global/api/recipes?limit=9'
    );
    const data = await response.json();

    // Tarifleri gösterme fonksiyonunu çağır
    displayRecipes(data.results);
  } catch (error) {
    console.error('API verisi alınırken hata oluştu:', error);
  }
}

// function displayRecipes(recipes) {
//   const cardsList = document.querySelector('.cards-list');

//   // Mevcut kartları temizleme (eğer gerekirse)
//   cardsList.innerHTML = '';

//   recipes.forEach(recipe => {
//     // Yeni kart elemanı oluştur
//     const card = document.createElement('li');
//     card.classList.add('cards-listing');

//     // Kartın arka plan resmini ekle
//     card.style.backgroundImage = `url(${recipe.preview})`;

//     // Metin ve rating ekle
//     const cardRatingContainer = document.createElement('div');
//     cardRatingContainer.classList.add('card-rating-container');

//     // Başlık ekle
//     const textContainer = document.createElement('div');
//     textContainer.classList.add('text-container');
//     textContainer.textContent = recipe.title;

//     // Tarif açıklaması ekle (specification-text)
//     const specificationText = document.createElement('div');
//     specificationText.classList.add('specification-text');
//     specificationText.textContent = recipe.description; // API'den gelen açıklama burada

//     // Rating ekle (Sadece puanı gösterecek şekilde)
//     const ratingContainer = document.createElement('div');
//     ratingContainer.classList.add('rating-container');

//     const recipeButton = document.createElement('button');
//     recipeButton.classList.add('recipe-button');
//     recipeButton.textContent = 'See recipe';

//     const ratingStar = document.createElement('div');
//     ratingStar.classList.add('rating-star');

//     const ratingText = document.createElement('p');
//     ratingText.classList.add('rating-text');
//     ratingText.textContent = `${recipe.rating}`; // Sadece puanı gösteriyoruz

//     ratingStar.appendChild(ratingText);
//     ratingContainer.appendChild(recipeButton);
//     ratingContainer.appendChild(ratingStar);

//     cardRatingContainer.appendChild(ratingContainer);

//     // Elemanları karta ekle
//     card.appendChild(textContainer); // Başlık
//     card.appendChild(specificationText); // Tarif açıklaması
//     card.appendChild(cardRatingContainer); // Rating ve buton

//     // Kartı listeye ekle
//     cardsList.appendChild(card);
//   });

//   // Tüm recipe-button öğelerine tıklama olayı ekleyelim
//   const recipeButtons = document.querySelectorAll('.recipe-button');
//   recipeButtons.forEach(button => {
//     button.addEventListener('click', function() {
//       // Butona tıklandığında metin rengi siyah olacak
//       button.style.color = '#000';
//     });
//   });
// }

// Sayfa yüklendiğinde tarifleri çek
document.addEventListener('DOMContentLoaded', fetchRecipes);

function displayRecipes(recipes) {
  const cardsList = document.querySelector('.cards-list');
  cardsList.innerHTML = '';

  recipes.forEach(recipe => {
    const html = `
      <li class="card-container" style="background-image: url(${
        recipe.preview
      })" data-id="recipe._id">
        <button class="favourite-button" data-id="${recipe._id}">
          <svg width="22px" height="22px">
            <use href="./svg/sprite.svg#icon-heart"></use>
          </svg>
        </button>
        
        <div class="card-content-container">
            <div class="card-text-content-container">
              <h2 class="card-title">${recipe.title}</h2>
              <p class="card-description">${recipe.description}</p>
            </div>
            <div class="card-footer-container">
                <div class="card-rating-container">
                    <p class="card-rating">${recipe.rating.toFixed(1)}</p>
                    <div class="star-container">
                    <svg class="star-svg">
                      <use href="./svg/sprite.svg#icon-star"></use>
                    </svg>

                    <svg class="star-svg">
                      <use href="./svg/sprite.svg#icon-star"></use>
                    </svg>

                   <svg class="star-svg">
                      <use href="./svg/sprite.svg#icon-star"></use>
                    </svg>

                    <svg class="star-svg">
                      <use href="./svg/sprite.svg#icon-star"></use>
                    </svg>

                   <svg class="star-svg">
                      <use href="./svg/sprite.svg#icon-star"></use>
                    </svg>
                      </div>
                </div>
                <button class="recipe-button" data-id="${
                  recipe._id
                }">See recipe</button>  
             </div>    
    `;

    cardsList.insertAdjacentHTML('beforeend', html);
  });
}
