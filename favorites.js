import"./assets/footer-mascot-I8Gc8f89.js";const y=document.getElementById("message-container");let l="All Categories",c=null;function m(){const r=localStorage.getItem("favArr");let t=[];try{t=r?JSON.parse(r):[]}catch(a){console.error("Error parsing favArr from localStorage:",a),t=[]}const e=document.querySelector(".favorite-cards");return e&&(e.innerHTML=""),t.length===0&&(y.innerHTML=`
        <div class="fav-message-container">
            <img src="./img/raccoon-sad-fav.png" class="fav-raccoon">
            <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
            <img src="./img/raccoon-sad-fav.png" class="fav-chefs-hat">
        </div>
        `),t}async function h(r){try{const t=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${r}`);if(!t.ok)throw new Error("Network response was not ok");const e=await t.json();return localStorage.setItem(`recipe_${r}`,JSON.stringify(e)),e}catch(t){return console.error("Error fetching recipe by ID:",t),null}}async function f(){const r=m();try{return(await Promise.all(r.map(e=>h(e)))).filter(e=>e!==null)}catch(t){return console.error("Error fetching favorite recipes:",t),[]}}async function g(){const r=await f();if(r.length!==0){const t=[...new Set(r.map(e=>e.category))];localStorage.setItem("favArrCategory",JSON.stringify(t)),u(),p(r)}}function C(){document.querySelectorAll(".heard-button").forEach(t=>{t.addEventListener("click",function(){const e=t.dataset.id,a=t.dataset.category,o=localStorage.getItem("favArr");let n=o?JSON.parse(o):[];if(n.includes(e)&&(n.splice(n.indexOf(e),1),localStorage.setItem("favArr",JSON.stringify(n))),n.filter(s=>{const i=JSON.parse(localStorage.getItem(`recipe_${s}`));return i&&i.category===a}).length===0){const s=localStorage.getItem("favArrCategory");let i=s?JSON.parse(s):[];i.includes(a)&&(i.splice(i.indexOf(a),1),localStorage.setItem("favArrCategory",JSON.stringify(i)))}u(),l==="All Categories"?g():v(l)})})}function S(){const r=document.querySelectorAll(".heard-button");let t=[];r.forEach(e=>{t.includes(e.dataset.category)||t.push(e.dataset.category)}),t.sort()}function u(){const r=document.querySelector(".fav-categories-list"),t=localStorage.getItem("favArrCategory");let e=t?JSON.parse(t):[];r.innerHTML="";const a=document.createElement("li"),o=document.createElement("button");o.textContent="All Categories",o.classList.add("category-button"),o.addEventListener("click",()=>{l="All Categories",c&&(c.style.backgroundColor="",c.style.color="",c.style.border=""),o.style.backgroundColor="var(--primary-color)",o.style.color="#fff",o.style.border="1px solid var(--primary-color)",c=o,g()}),a.appendChild(o),r.appendChild(a),e.forEach(n=>{const d=document.createElement("li"),s=document.createElement("button");s.textContent=n,s.classList.add("category-button"),s.addEventListener("click",()=>{l=n,c&&(c.style.backgroundColor="",c.style.color="",c.style.border=""),s.style.backgroundColor="var(--primary-color)",s.style.color="#fff",s.style.border="1px solid var(--primary-color)",c=s,v(n)}),d.appendChild(s),r.appendChild(d)})}function v(r){f().then(t=>{const e=t.filter(a=>a.category===r);p(e)})}function p(r){const t=document.querySelector(".favorite-cards");t.innerHTML="",r.forEach(e=>{const a=Math.round(e.rating),o=5-a,n=`
        <li class="cards-listing" style="background-image: url(${e.preview});">
            <button class="heard-button" data-category="${e.category}" data-id="${e._id}" aria-label="like-btn">
                <svg class="svg-heard add-to-fav" data-id="${e._id}" width="22px" height="22px">
                    <use href="./svg/sprite.svg#icon-heart-filled"></use>
                </svg>
            </button>
            <div class="card-content-container">
                <div class="text-container">
                    <h3 class="card-title">${e.title}</h3>
                    <p class="specification-text">${e.description}</p>
                </div>
                <div class="card-rating-container">
                    <div class="rating-container">
                        <p class="rating-text">${e.rating.toFixed(1)}</p>
                        <div class="star-container">
                            ${`<svg class="card-star-svg">
                            <use href="./svg/sprite.svg#icon-star"></use>
                            </svg>`.repeat(a)}
                            ${`<svg class="card-star-svg">
                            <use href="./svg/sprite.svg#icon-emptystar"></use>
                            </svg>`.repeat(o)}
                        </div>    
                    </div>
                    <button class="recipe-button" data-id="${e._id}">See recipe</button>
                </div>      
            </div>
        </li>
        `;t.innerHTML+=n}),C(),S()}document.addEventListener("DOMContentLoaded",g);
//# sourceMappingURL=favorites.js.map
