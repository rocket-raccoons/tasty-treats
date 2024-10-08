document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const sideMenuThemeToggle = document.getElementById('sideMenuThemeToggle');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const closeSideMenu = document.getElementById('closeSideMenu');
    const sideMenu = document.getElementById('sideMenu');
    const sunSideList = document.querySelectorAll('.sunSide');
    const moonSideList = document.querySelectorAll('.moonSide');
    const body = document.body;
    function changedWeather(){
        sunSideList.forEach((sunSide) => {
            sunSide.classList.toggle('show');
        })
        moonSideList.forEach((moonSide) => {
            moonSide.classList.toggle('show');
        })
    }
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        themeToggle.classList.toggle('active');
        sideMenuThemeToggle.classList.toggle('active');
        changedWeather();
        
        // Save the user's preference
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    function toggleMobileMenu() {
        sideMenu.classList.toggle('active');
    }
    
    themeToggle.addEventListener('click', toggleDarkMode);
    sideMenuThemeToggle.addEventListener('click', toggleDarkMode);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    closeSideMenu.addEventListener('click', toggleMobileMenu);

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        themeToggle.classList.add('active');
        sideMenuThemeToggle.classList.add('active');
        changedWeather();
    }

    document.addEventListener('click', (event) => {
        if (sideMenu.classList.contains('active') && !sideMenu.contains(event.target) && event.target !== mobileMenuToggle) {
            sideMenu.classList.remove('active');
        }
    });
});