document.addEventListener('DOMContentLoaded', () => {
const footerList =document.querySelector('.footer-list');
const modal = document.getElementById('myModal');
const btn = document.getElementById('openModalBtn');
const span = document.getElementsByClassName('close')[0];

const person1={ name:"Mete CİVELEK", role:"Team Leader, Developer", imgSrc: './img/footer-pic/mete-civelek.webp', github:"https://github.com/metlandus"}
const person2={ name:"Şubat YÜCEL", role:"Team Leader, Developer", imgSrc: './img/footer-pic/subat-yücel.webp', github:"https://github.com/subatyucel"}
const person3={ name:"Deniz Sofia ULUTAŞ", role:"Scrum Master, Developer", imgSrc: './img/footer-pic/deniz-sofia.webp', github:"https://github.com/sofia11244"}
const person4={ name:"Onur AKARSU", role:"Developer", imgSrc: './img/footer-pic/onur-akarsu.webp', github:"https://github.com/RiveTroy"}
const person5={ name:"Pınar ÜNLÜ", role:"Developer", imgSrc: './img/footer-pic/pınar-unlu.webp', github:"https://github.com/pinarunlu"}
const person6={ name:"Mehmet ARDIÇ", role:"Developer", imgSrc: './img/footer-pic/mehmet-ardıc.webp', github:"https://github.com/ArdicMehmet"}
const person7={ name:"Murat ÇOLAK", role:"Developer", imgSrc: './img/footer-pic/murat-colak.webp', github:"https://github.com/zipkaniar"}   

const createLi=({name,role,imgSrc,github})=>{
    const li=document.createElement('li');
    li.classList.add('footer-list-item');
    li.innerHTML=`
    <div class="footer-list-item-img-container">
        <img class="footer-list-item-img" src="${imgSrc}" alt="">
    </div>
   
    
    <div class="footer-list-item-info">    
        <h2 class="footer-list-item-name">${name}</h2>
        <p class="footer-list-item-text">${role}</p>
        <div class="footer-list-item-links">
        <a class="footer-list-item-link" href="${github}" target="_blank">GitHub 
            // <svg class="icon-github-logo" width="24" height="24">
            //     <use xlink:href="../svg/github-logo.svg.svg#icon-github-logo"></use>
            // </svg>
        </a>
        </div>
    </div>
     `;
        return li;
    };

    footerList.append( createLi(person1), createLi(person2), createLi(person3), createLi(person4), createLi(person5), createLi(person6), createLi(person7) );

    //   MODAL WINDOW
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

// to close the modal if clicked outside of it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});

