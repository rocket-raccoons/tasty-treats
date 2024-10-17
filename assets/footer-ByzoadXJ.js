(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("themeToggle"),t=document.getElementById("sideMenuThemeToggle"),n=document.getElementById("mobileMenuToggle"),i=document.getElementById("closeSideMenu"),e=document.getElementById("sideMenu"),s=document.querySelectorAll(".sunSide"),d=document.querySelectorAll(".moonSide"),c=document.body;function l(){s.forEach(a=>{a&&a.classList.toggle("show")}),d.forEach(a=>{a&&a.classList.toggle("show")})}function m(){c.classList.toggle("dark-mode"),o.classList.toggle("active"),t.classList.toggle("active"),l();const a=c.classList.contains("dark-mode");localStorage.setItem("darkMode",a)}function g(){e.classList.contains("showSide")?e.classList.remove("showSide"):e.classList.add("showSide")}o.addEventListener("click",m),t.addEventListener("click",m),n.addEventListener("click",g),i.addEventListener("click",g),localStorage.getItem("darkMode")==="true"&&(c.classList.add("dark-mode"),o.classList.add("active"),t.classList.add("active"),l()),document.addEventListener("click",a=>{e.classList.contains("active")&&!e.contains(a.target)&&a.target!==n&&e.classList.remove("active")})});const u="/tasty-treats/assets/sprite-BPCn2-Kf.svg";function v(){const o=document.getElementById("recipeModal"),t=o.querySelector(".modal-close-button");t.onclick=r,window.onclick=function(n){n.target===o&&r()},document.addEventListener("keydown",function(n){n.key==="Escape"&&o.style.display==="block"&&r()})}async function L(o){const t=document.getElementById("recipeModal"),n=t.querySelector(".modal-content");n.innerHTML="<p>Loading recipe details...</p>",t.style.display="block";try{const e=await(await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${o}`)).json(),s=e.instructions.split(".").join("<br>"),d=Math.round(e.rating),c=5-d;n.innerHTML=`
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
                      </svg>`.repeat(d)}

                    ${`<svg class="card-star-svg modal-empty-star">
                    <use href="${u}#icon-emptystar-modal"></use>
                    </svg>`.repeat(c)}
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
      `,f(o)}catch(i){console.error("Error fetching recipe details:",i),n.innerHTML="<p>Error loading recipe details. Please try again.</p>"}}function r(){const o=document.getElementById("recipeModal");o.style.display="none"}function f(o){const t=JSON.parse(localStorage.getItem("favArr")),n=document.querySelector(".addToFavoriteButton");t!==null&&t.includes(o)?n.textContent="Added to Favorites":n.addEventListener("click",function(){document.querySelector(`svg[data-id="${o}"]`).querySelector(".svguse").setAttribute("href",`${u}#icon-heart-filled`),t.push(o),localStorage.setItem("favArr",JSON.stringify(t)),n.textContent="Added to Favorites"})}document.addEventListener("DOMContentLoaded",function(){function o(){let e=document.getElementById("myModal");e&&(e.style.display="block")}function t(){let e=document.getElementById("myModal");e&&(e.style.display="none")}window.addEventListener("click",function(e){let s=document.getElementById("myModal");s&&e.target===s&&t()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&t()});let n=document.getElementById("openModalBtn"),i=document.getElementById("closeModalBtn");n&&n.addEventListener("click",o),i&&i.addEventListener("click",t)});export{y as a,v as i,L as o,u as s};
//# sourceMappingURL=footer-ByzoadXJ.js.map
