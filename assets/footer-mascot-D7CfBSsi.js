(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".footer-list"),o=document.getElementById("myModal"),c=document.getElementById("openModalBtn"),s=document.getElementsByClassName("close")[0],e={name:"Mete CİVELEK",role:"Team Leader, Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/metlandus"},t={name:"Şubat YÜCEL",role:"Team Leader, Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/subatyucel"},i={name:"Deniz Sofia ULUTAŞ",role:"Scrum Master, Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/sofia11244"},m={name:"Onur AKARSU",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/RiveTroy"},u={name:"Pınar ÜNLÜ",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/pinarunlu"},p={name:"Mehmet ARDIÇ",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/ArdicMehmet"},d={name:"Murat ÇOLAK",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/zipkaniar"},h={name:"Mr. Raccoon",role:"Mascot",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/rocket-racoons"},r=({name:n,role:g,imgSrc:f,github:b})=>{const l=document.createElement("li");return l.classList.add("footer-list-item"),l.innerHTML=`
        <img class="footer-list-item-img" src="${f}" alt="">
        
        <div class="footer-list-item-info">    
            <h2 class="footer-list-item-name">${n}</h2>
            <p class="footer-list-item-text">${g}</p>
            <div class="footer-list-item-links">
            <a class="footer-list-item-link" href="${b}" target="_blank">
                <svg class="icon-github-logo" width="20" height="20">
                    <use xlink:href="./svg/github-icon.svg#icon-github-logo"></use>
                </svg>
                GitHub 
            </a>
            </div>
        </div>
         `,l};a.append(r(e),r(t),r(i),r(m),r(u),r(p),r(d),r(h)),c.onclick=function(){o.style.display="block"},s.onclick=function(){o.style.display="none"},window.onclick=function(n){n.target===o&&(o.style.display="none")}});
//# sourceMappingURL=footer-mascot-D7CfBSsi.js.map
