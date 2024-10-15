// import mete from '../img/footer-pic/mete-civelek.webp';
// import subat from '../img/footer-pic/subat-yucel.webp';
// import deniz from '../img/footer-pic/deniz-sofia.webp';
// import onur from '../img/footer-pic/onur-akarsu.webp';
// import pinar from '../img/footer-pic/pinar-unlu.webp';
// import mehmet from '../img/footer-pic/mehmet-ardic.webp';
// import murat from '../img/footer-pic/murat-colak.webp';
// import raccoon from '../img/footer-pic/mr-raccoon.webp';
// import githubLogo from '../svg/github-icon.svg';

// document.addEventListener('DOMContentLoaded', () => {
//   const footerList = document.querySelector('.footer-list');
//   const modal = document.getElementById('myModal');
//   const btn = document.getElementById('openModalBtn');
//   const span = document.getElementsByClassName('close')[0];

//   const person1 = {
//     name: 'Mete CİVELEK',
//     role: 'Team Leader, Developer',
//     imgSrc: `${mete}`,
//     github: 'https://github.com/metlandus',
//   };
//   const person2 = {
//     name: 'Şubat YÜCEL',
//     role: 'Team Leader, Developer',
//     imgSrc: `${subat}`,
//     github: 'https://github.com/subatyucel',
//   };
//   const person3 = {
//     name: 'Deniz Sofia ULUTAŞ',
//     role: 'Scrum Master, Developer',
//     imgSrc: `${deniz}`,
//     github: 'https://github.com/sofia11244',
//   };
//   const person4 = {
//     name: 'Onur AKARSU',
//     role: 'Developer',
//     imgSrc: `${onur}`,
//     github: 'https://github.com/RiveTroy',
//   };
//   const person5 = {
//     name: 'Pınar ÜNLÜ',
//     role: 'Developer',
//     imgSrc: `${pinar}`,
//     github: 'https://github.com/pinarunlu',
//   };
//   const person6 = {
//     name: 'Mehmet ARDIÇ',
//     role: 'Developer',
//     imgSrc: `${mehmet}`,
//     github: 'https://github.com/ArdicMehmet',
//   };
//   const person7 = {
//     name: 'Murat ÇOLAK',
//     role: 'Developer',
//     imgSrc: `${murat}`,
//     github: 'https://github.com/zipkaniar',
//   };
//   const person8 = {
//     name: 'Mr. Raccoon',
//     role: 'Mascot',
//     imgSrc: `${raccoon}`,
//     github: 'https://github.com/rocket-racoons',
//   };

//   const createLi = ({ name, role, imgSrc, github }) => {
//     const li = document.createElement('li');
//     li.classList.add('footer-list-item');
//     li.innerHTML = `
//             <img class="footer-list-item-img" src="${imgSrc}" alt="">
//         <div class="footer-list-item-info">    
//             <h2 class="footer-list-item-name">${name}</h2>
//             <p class="footer-list-item-text">${role}</p>
//             <div class="footer-list-item-links">
//             <a class="footer-list-item-link" href="${github}" target="_blank">
//                 <img class="icon-github-logo" src="${githubLogo}" width="20" height="20">
//                 </img>
//                 GitHub 
//             </a>
//             </div>
//         </div>
//          `;
//     return li;
//   };

//   footerList.append(
//     createLi(person1),
//     createLi(person2),
//     createLi(person3),
//     createLi(person4),
//     createLi(person5),
//     createLi(person6),
//     createLi(person7),
//     createLi(person8)
//   );

//   //   MODAL WINDOW
//   btn.onclick = function () {
//     modal.style.display = 'block';
//   };

//   span.onclick = function () {
//     modal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   };
// });
