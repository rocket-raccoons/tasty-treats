
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    let currentIndex = 0;
    let slideWidth = 100; // Default to 100% for all screen sizes
  
    // Create indicators
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  
    const indicators = document.querySelectorAll('.indicator');
  
    // Function to update slider position
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      updateIndicators();
    }
  
    // Function to update the active indicator
    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  
    // Function to navigate to a specific slide
    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }
    
    // Function to update the width of the slides based on window size
    function updateSlideWidth() {
      if (window.innerWidth >= 1280) {
        // For desktop, adjust slide width based on slider container size
        slideWidth = (602 / slider.offsetWidth) * 100;
      } 

      else {
        // For mobile/tablet, slide width will be 100%
        slideWidth = 100;
      }
      updateSlider();
    }
  
    // Initialize slider width and position
    updateSlideWidth();
    updateSlider();
  
    // Update slide width when the window is resized
    window.addEventListener('resize', updateSlideWidth);
  
    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }, 5000);
  });
