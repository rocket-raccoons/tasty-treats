// API'den fotoğraf çeken ve HTML'deki img'ye ekleyen fonksiyon
async function fetchRecipePhoto() {
  try {
    // API'den veriyi çekiyoruz
    const response = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes');
    const data = await response.json();

    // API'nin array döndürdüğünü biliyoruz, ilk öğeyi alıyoruz
    const photoUrl = data[0].preview; // İlk tarifin 'preview' alanını alıyoruz

    // HTML'deki img etiketini seçip fotoğrafı ekliyoruz
    const cardImg = document.querySelector('.cards-img');
    cardImg.src = photoUrl; // Fotoğraf URL'sini img etiketine ekliyoruz

  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
  }
}

// Sayfa yüklendiğinde fotoğrafı çek
document.addEventListener('DOMContentLoaded', fetchRecipePhoto);