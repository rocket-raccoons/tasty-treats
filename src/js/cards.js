const { preview } = require("vite");

async function fetchRecipePhoto() {
  try {
    const response = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes');
    const data = await response.json();
    const photoUrl = data[3].preview; 
    const cardImg = document.querySelector('.cards-img');
    cardImg.src = photoUrl; 
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
  }
}
// Sayfa yüklendiğinde fotoğrafı çek
document.addEventListener('DOMContentLoaded', fetchRecipePhoto);


// Sayfa yüklendiğinde fotoğrafı çek
document.addEventListener('DOMContentLoaded', fetchRecipePhoto);

document.addEventListener('DOMContentLoaded', function() {
  const recipeButton = document.querySelector('.recipe-button');
  
  recipeButton.addEventListener('click', function() {
      // Butona tıklandığında metin rengi siyah olacak
      recipeButton.style.color = '#000';
  });
});
