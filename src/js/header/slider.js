document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const lazyImages = document.querySelectorAll('.lazy-image');
  const indicatorsContainer = document.querySelector('.slider-indicators');
  let currentIndex = 0;
  let slideWidth = 100;
 
 
  const lazyLoad = () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;

          // Görselin src'yi data-src'den al
          image.src = image.dataset.src;

          // Lazy yükleme sınıfını kaldır
          image.classList.remove('lazy-image');

          // Observer'ı kaldır
          observer.unobserve(image);
        }
      });
    }, {
      threshold: 0.1 // Görselin %10'u ekranda göründüğünde yükleme başlaması için
    });
    lazyImages.forEach(image => observer.observe(image));
  };

  lazyLoad();

  slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll('.indicator');

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      updateIndicators();
  }

  function updateIndicators() {
      indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }

  function goToSlide(index) {
      currentIndex = index;
      updateSlider();
  }

  function updateSlideWidth() {
      const sliderContainerWidth = slider.offsetWidth;

      if (window.innerWidth >= 1280) {
          slideWidth = (602 / sliderContainerWidth) * 100;  
      } 
      else if (window.innerWidth >= 768 && window.innerWidth < 945) {
          slideWidth = (sliderContainerWidth / 1) / sliderContainerWidth * 100;
      } 
      else {
          slideWidth = 100;
      }
      updateSlider();
  }

  updateSlideWidth();
  updateSlider();

  window.addEventListener('resize', updateSlideWidth);

  setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  }, 5000);
});

