// API'den tariflerin fotoğrafını çeken ve HTML'deki img'ye ekleyen fonksiyon
async function fetchRecipePhoto() {
    try {
      // API'den veriyi çekiyoruz
      const response = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes');
      const data = await response.json();
  
      // İlk tarifin fotoğrafını seçiyoruz
      const photoUrl = data[0].preview; // API'den gelen verinin 'preview' kısmı fotoğraf URL'sidir
  
      // HTML'deki img etiketini seçip fotoğrafı ekliyoruz
      const cardImg = document.querySelector('.cards-img');
      cardImg.src = photoUrl;
  
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu:', error);
    }
  }
  
  // Sayfa yüklendiğinde fotoğrafı çek
  document.addEventListener('DOMContentLoaded', fetchRecipePhoto);