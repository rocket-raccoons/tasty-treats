document.addEventListener('DOMContentLoaded', () => {
    const footerList =document.querySelector('.footer-list');
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('openModalBtn');
    const span = document.getElementsByClassName('close')[0];
    
    const person1={ name:"Mete CİVELEK", role:"Team Leader, Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/metlandus"}
    const person2={ name:"Şubat YÜCEL", role:"Team Leader, Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/subatyucel"}
    const person3={ name:"Deniz Sofia ULUTAŞ", role:"Scrum Master, Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/sofia11244"}
    const person4={ name:"Onur AKARSU", role:"Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/RiveTroy"}
    const person5={ name:"Pınar ÜNLÜ", role:"Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/pinarunlu"}
    const person6={ name:"Mehmet ARDIÇ", role:"Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/ArdicMehmet"}
    const person7={ name:"Murat ÇOLAK", role:"Developer", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/zipkaniar"}
    const person8={ name:"Mr. Raccoon", role:"Mascot", imgSrc: 'https://via.placeholder.com/50', github:"https://github.com/rocket-racoons"}

    const createLi=({name,role,imgSrc,github})=>{
        const li=document.createElement('li');
        li.classList.add('footer-list-item');
        li.innerHTML=`
        <img class="footer-list-item-img" src="${imgSrc}" alt="">
        
        <div class="footer-list-item-info">    
            <h2 class="footer-list-item-name">${name}</h2>
            <p class="footer-list-item-text">${role}</p>
            <div class="footer-list-item-links">
            <a class="footer-list-item-link" href="${github}" target="_blank">
                <svg class="icon-github-logo" width="20" height="20">
                    <use xlink:href="./svg/github-icon.svg#icon-github-logo"></use>
                </svg>
                GitHub 
            </a>
            </div>
        </div>
         `;
            return li;
        };
    
        footerList.append( createLi(person1), createLi(person2), createLi(person3), createLi(person4), createLi(person5), createLi(person6), createLi(person7), createLi(person8) );
    
        //   MODAL WINDOW
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    span.onclick = function() {
        modal.style.display = "none";
    };
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    });
    