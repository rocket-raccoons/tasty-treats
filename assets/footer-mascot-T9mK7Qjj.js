(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("themeToggle"),s=document.getElementById("sideMenuThemeToggle"),n=document.getElementById("mobileMenuToggle"),r=document.getElementById("closeSideMenu"),e=document.getElementById("sideMenu"),o=document.querySelectorAll(".sunSide"),i=document.querySelectorAll(".moonSide"),l=document.body;function a(){o.forEach(t=>{t&&t.classList.toggle("show")}),i.forEach(t=>{t&&t.classList.toggle("show")})}function d(){l.classList.toggle("dark-mode"),c.classList.toggle("active"),s.classList.toggle("active"),a();const t=l.classList.contains("dark-mode");localStorage.setItem("darkMode",t)}function m(){e.classList.contains("showSide")?e.classList.remove("showSide"):e.classList.add("showSide")}c.addEventListener("click",d),s.addEventListener("click",d),n.addEventListener("click",m),r.addEventListener("click",m),localStorage.getItem("darkMode")==="true"&&(l.classList.add("dark-mode"),c.classList.add("active"),s.classList.add("active"),a()),document.addEventListener("click",t=>{e.classList.contains("active")&&!e.contains(t.target)&&t.target!==n&&e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".footer-list"),s=document.getElementById("myModal"),n=document.getElementById("openModalBtn"),r=document.getElementsByClassName("close")[0],e={name:"Mete CİVELEK",role:"Team Leader, Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/metlandus"},o={name:"Şubat YÜCEL",role:"Team Leader, Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/subatyucel"},i={name:"Deniz Sofia ULUTAŞ",role:"Scrum Master, Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/sofia11244"},l={name:"Onur AKARSU",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/RiveTroy"},a={name:"Pınar ÜNLÜ",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/pinarunlu"},d={name:"Mehmet ARDIÇ",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/ArdicMehmet"},m={name:"Murat ÇOLAK",role:"Developer",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/zipkaniar"},h={name:"Mr. Raccoon",role:"Mascot",imgSrc:"https://via.placeholder.com/50",github:"https://github.com/rocket-racoons"},t=({name:u,role:p,imgSrc:f,github:v})=>{const g=document.createElement("li");return g.classList.add("footer-list-item"),g.innerHTML=`
        <img class="footer-list-item-img" src="${f}" alt="">
        
        <div class="footer-list-item-info">    
            <h2 class="footer-list-item-name">${u}</h2>
            <p class="footer-list-item-text">${p}</p>
            <div class="footer-list-item-links">
            <a class="footer-list-item-link" href="${v}" target="_blank">
                <svg class="icon-github-logo" width="20" height="20">
                    <use xlink:href="./svg/github-icon.svg#icon-github-logo"></use>
                </svg>
                GitHub 
            </a>
            </div>
        </div>
         `,g};c.append(t(e),t(o),t(i),t(l),t(a),t(d),t(m),t(h)),n.onclick=function(){s.style.display="block"},r.onclick=function(){s.style.display="none"},window.onclick=function(u){u.target===s&&(s.style.display="none")}});
//# sourceMappingURL=footer-mascot-T9mK7Qjj.js.map