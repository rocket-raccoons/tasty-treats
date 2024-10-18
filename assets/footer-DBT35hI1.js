(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("themeToggle"),t=document.getElementById("sideMenuThemeToggle"),o=document.getElementById("mobileMenuToggle"),i=document.getElementById("closeSideMenu"),e=document.getElementById("sideMenu"),s=document.querySelectorAll(".sunSide"),c=document.querySelectorAll(".moonSide"),d=document.body;function l(){s.forEach(a=>{a&&a.classList.toggle("show")}),c.forEach(a=>{a&&a.classList.toggle("show")})}function m(){d.classList.toggle("dark-mode"),n.classList.toggle("active"),t.classList.toggle("active"),l();const a=d.classList.contains("dark-mode");localStorage.setItem("darkMode",a)}function g(){e.classList.contains("showSide")?e.classList.remove("showSide"):e.classList.add("showSide")}n.addEventListener("click",m),t.addEventListener("click",m),o.addEventListener("click",g),i.addEventListener("click",g),localStorage.getItem("darkMode")==="true"&&(d.classList.add("dark-mode"),n.classList.add("active"),t.classList.add("active"),l()),document.addEventListener("click",a=>{e.classList.contains("active")&&!e.contains(a.target)&&a.target!==o&&e.classList.remove("active")})});const u="/tasty-treats/assets/sprite-BPCn2-Kf.svg";JSON.parse(localStorage.getItem("favArr"));function y(){const n=document.getElementById("recipeModal"),t=n.querySelector(".modal-close-button");t.onclick=r,window.onclick=function(o){o.target===n&&r()},document.addEventListener("keydown",function(o){o.key==="Escape"&&n.style.display==="block"&&r()})}async function L(n){const t=document.getElementById("recipeModal"),o=t.querySelector(".modal-content");o.innerHTML="<p>Loading recipe details...</p>",t.style.display="block";try{const e=await(await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${n}`)).json(),s=e.instructions.split(".").join("<br>"),c=Math.round(e.rating),d=5-c;o.innerHTML=`
        <div class= "modal-heading">
          <div style="flex: 1;">
            <iframe class="modal-iframe" src="https://www.youtube.com/embed/${new URL(e.youtube).searchParams.get("v")}" frameborder="0" allowfullscreen></iframe>
          </div>
        <div class="modal-recipe-container" style="flex: 1;">
        <h2>${e.title}</h2>
        <div class="modal-rating-container">
        <div class="modal-star-container">
              <div class="rating-container">
                  <p class="rating-text">${e.rating.toFixed(1)}</p>
                  <div class="star-container">
                    ${`<svg class="card-star-svg">
                    <use href="${u}#icon-star"></use>
                      </svg>`.repeat(c)}

                    ${`<svg class="card-star-svg modal-empty-star">
                    <use href="${u}#icon-emptystar-modal"></use>
                    </svg>`.repeat(d)}
                  </div>    
                </div>
        </div>
        <p class="cooking-time">${e.time} min</p>
        </div>
        <div class="modal-recipe-ingredients-container">
        <!-- <h3>Ingredients:</h3> -->
        <ul class="modal-recipe-ingredients">
          ${e.ingredients.map(l=>`<li class="modal-recipe-ingredients-item"><p class="ingredient">${l.name}</p><p class="ingredient-portion"> ${l.measure}</p></li>`).join("")}
        </ul>
        </div>
        </div>
        </div>
        <p class="modal-recipe-instructions">${s}</p>
        <div style="display: flex; gap: 20px; margin-top: 20px;">
          <button class="addToFavoriteButton">Add to Favorite</button>
          <button class="giveRatingButton">Give a Rating</button>
        </div>
        </div>
      `,f(n)}catch(i){console.error("Error fetching recipe details:",i),o.innerHTML="<p>Error loading recipe details. Please try again.</p>"}}function r(){const n=document.getElementById("recipeModal");n.style.display="none"}function f(n){const t=document.querySelector(".addToFavoriteButton");localStorage.getItem("favArr")===null&&localStorage.setItem("favArr",JSON.stringify([]));let o=JSON.parse(localStorage.getItem("favArr"));console.log(o),o.includes(n)?(console.log("includes"),t.textContent="Added to Favorites"):t.addEventListener("click",function(){document.querySelector(`svg[data-id="${n}"]`).querySelector(".svguse").setAttribute("href",`${u}#icon-heart-filled`),o.push(n),localStorage.setItem("favArr",JSON.stringify(o)),t.textContent="Added to Favorites"})}document.addEventListener("DOMContentLoaded",function(){function n(){let e=document.getElementById("myModal");e&&(e.style.display="block")}function t(){let e=document.getElementById("myModal");e&&(e.style.display="none")}window.addEventListener("click",function(e){let s=document.getElementById("myModal");s&&e.target===s&&t()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&t()});let o=document.getElementById("openModalBtn"),i=document.getElementById("closeModalBtn");o&&o.addEventListener("click",n),i&&i.addEventListener("click",t)});export{v as a,y as i,L as o,u as s};
//# sourceMappingURL=footer-DBT35hI1.js.map
