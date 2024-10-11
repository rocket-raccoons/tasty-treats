
const scrollBtn = document.getElementById('scrollBtn');


window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block'; 
  } else {
    scrollBtn.style.display = 'none'; 
  }
});


scrollBtn.addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});


