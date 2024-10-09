document.addEventListener('DOMContentLoaded', function() {
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
        if (window.innerWidth >= 1280) {
            slideWidth = (871 / slider.offsetWidth) * 100;
        } else {
            slideWidth = 100;
        }
        updateSlider();
    }

    // Initialize slider
    updateSlideWidth();
    updateSlider();

    // Update slide width on window resize
    window.addEventListener('resize', updateSlideWidth);

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000);
});