// Scroll to top function
const scrollBtn = document.getElementById('scrollBtn');

// Butonun görünürlüğünü kontrol eden fonksiyon
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block'; // Sayfa 300px aşağıdaysa buton görünsün
  } else {
    scrollBtn.style.display = 'none'; // Yukarı çıktığında buton kaybolsun
  }
});

// Butona tıklandığında sayfanın yukarı kayması
scrollBtn.addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Yumuşak kaydırma efekti
  });
});


