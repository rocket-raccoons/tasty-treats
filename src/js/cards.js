// API'den tarifleri çeken fonksiyon
async function fetchRecipes() {
    try {
      // API'den verileri çekme
      const response = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes');
      const data = await response.json();
  
      // Sadece ilk 9 tarifi kullanmak üzere sınırla
      const limitedRecipes = data.slice(0, 9);
  
      // Kartları oluştur
      createCards(limitedRecipes);
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu:', error);
    }
  }
  
  // Kartları oluşturma fonksiyonu
  function createCards(recipes) {
    const cardList = document.querySelector('.cards-list');
  
    recipes.forEach(recipe => {
      // Yeni kart listesi öğesi oluşturma
      const cardListing = document.createElement('li');
      cardListing.classList.add('cards-listing');
  
      // Kalp düğmesi oluşturma
      const heartButton = document.createElement('button');
      heartButton.classList.add('heard-button');
  
      const heartImg = document.createElement('img');
      heartImg.classList.add('heart-svg');
      heartImg.src = 'svg/heart.svg';
      heartImg.alt = 'heart';
  
      heartButton.appendChild(heartImg);
  
      // Kart resmi oluşturma
      const cardImg = document.createElement('img');
      cardImg.classList.add('cards-img');
      cardImg.src = recipe.preview; // API'den resim URL'sini alıyoruz
      cardImg.alt = recipe.title;
  
      // Kart metin ve rating kısmı oluşturma
      const cardTextRatingContainer = document.createElement('div');
      cardTextRatingContainer.classList.add('card-text-rating-container');
  
      const textContainer = document.createElement('div');
      textContainer.classList.add('text-container');
      textContainer.textContent = recipe.title; // Ürün ismi başlığı
  
      const ratingContainer = document.createElement('div');
      ratingContainer.classList.add('rating-container');
  
      const recipeButton = document.createElement('button');
      recipeButton.classList.add('recipe-button');
      recipeButton.textContent = 'See recipe';
  
      // Rating kısmı oluşturma
      const ratingStar = document.createElement('div');
      ratingStar.classList.add('rating-star');
  
      const ratingText = document.createElement('p');
      ratingText.classList.add('rating-text');
      ratingText.textContent = `Rating: ${recipe.rating}`; // API'den puan bilgisini alıyoruz
  
      ratingStar.appendChild(ratingText);
      ratingContainer.appendChild(recipeButton);
      ratingContainer.appendChild(ratingStar);
  
      cardTextRatingContainer.appendChild(textContainer);
      cardTextRatingContainer.appendChild(ratingContainer);
  
      // Kartın tüm parçalarını birleştirme
      cardListing.appendChild(heartButton);
      cardListing.appendChild(cardImg);
      cardListing.appendChild(cardTextRatingContainer);
  
      // Kartı ana listeye ekleme
      cardList.appendChild(cardListing);
    });
  }
  
  // Sayfa yüklendiğinde tarifleri çek
  document.addEventListener('DOMContentLoaded', fetchRecipes);
  