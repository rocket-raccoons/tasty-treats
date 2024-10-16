(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("themeToggle"),o=document.getElementById("sideMenuThemeToggle"),i=document.getElementById("mobileMenuToggle"),c=document.getElementById("closeSideMenu"),e=document.getElementById("sideMenu"),t=document.querySelectorAll(".sunSide"),a=document.querySelectorAll(".moonSide"),r=document.body;function d(){t.forEach(n=>{n&&n.classList.toggle("show")}),a.forEach(n=>{n&&n.classList.toggle("show")})}function u(){r.classList.toggle("dark-mode"),s.classList.toggle("active"),o.classList.toggle("active"),d();const n=r.classList.contains("dark-mode");localStorage.setItem("darkMode",n)}function g(){e.classList.contains("showSide")?e.classList.remove("showSide"):e.classList.add("showSide")}s.addEventListener("click",u),o.addEventListener("click",u),i.addEventListener("click",g),c.addEventListener("click",g),localStorage.getItem("darkMode")==="true"&&(r.classList.add("dark-mode"),s.classList.add("active"),o.classList.add("active"),d()),document.addEventListener("click",n=>{e.classList.contains("active")&&!e.contains(n.target)&&n.target!==i&&e.classList.remove("active")})});const m="/tasty-treats/assets/sprite-mAtqh765.svg";function v(){const s=document.getElementById("recipeModal"),o=s.querySelector(".modal-close-button");o.onclick=l,window.onclick=function(i){i.target===s&&l()},document.addEventListener("keydown",function(i){i.key==="Escape"&&s.style.display==="block"&&l()})}async function y(s){const o=document.getElementById("recipeModal"),i=o.querySelector(".modal-content");i.innerHTML="<p>Loading recipe details...</p>",o.style.display="block";try{const e=await(await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${s}`)).json(),t=e.instructions.split(".").join("<br>"),a=Math.round(e.rating),r=5-a;i.innerHTML=`
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
                    <use href="${m}#icon-star"></use>
                      </svg>`.repeat(a)}

                    ${`<svg class="card-star-svg">
                    <use href="${m}#icon-emptystar"></use>
                    </svg>`.repeat(r)}
                  </div>    
                </div>
        </div>
        <p class="cooking-time">${e.time} min</p>
        </div>
        <div class="modal-recipe-ingredients-container">
        <!-- <h3>Ingredients:</h3> -->
        <ul class="modal-recipe-ingredients">
          ${e.ingredients.map(d=>`<li class="modal-recipe-ingredients-item"><p class="ingredient">${d.name}</p><p class="ingredient-portion"> ${d.measure}</p></li>`).join("")}
        </ul>
        </div>
        </div>
        </div>
        <p class="modal-recipe-instructions">${t}</p>
        <div style="display: flex; gap: 20px; margin-top: 20px;">
          <button class="addToFavoriteButton">Add to Favorite</button>
          <button class="giveRatingButton">Give a Rating</button>
        </div>
        </div>
      `}catch(c){console.error("Error fetching recipe details:",c),i.innerHTML="<p>Error loading recipe details. Please try again.</p>"}}function l(){const s=document.getElementById("recipeModal");s.style.display="none"}export{f as a,v as i,y as o,m as s};
//# sourceMappingURL=modal-CvRGhZQf.js.map
