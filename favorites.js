import"./assets/styles-CUHzzICJ.js";function i(){const s=localStorage.getItem("favArr");let t=[];try{t=s?JSON.parse(s):[]}catch(r){console.error("Error parsing favArr from localStorage:",r),t=[]}const e=document.getElementById("message-container");return e&&(e.innerHTML=""),t.length===0&&e&&(e.innerHTML=`
        <div class="fav-message-container">
        <svg class="fav-chefs-hat" type="fav-chefs-hat-svg" width="68" height="58">
            <use href="./svg/sprite.svg#icon-chef-hat">
        </svg> <br><br><br>
    <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
        </div>
        `),t}async function o(s){const t=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${s}`);if(!t.ok)throw new Error("Network response was not ok");return await t.json()}async function c(){const s=i();try{return await Promise.all(s.map(e=>o(e)))}catch(t){return console.error("Error fetching favorite recipes:",t),[]}}async function d(){const s=await c();if(s.length!==0){const t=document.getElementById("message-container");t.innerHTML="",s.forEach(e=>{const r=Math.round(e.rating),a=5-r,n=`
      <li class="cards-listing" style="background-image: url(${e.preview});">

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
                      </svg>`.repeat(r)}

                    ${`<svg class="card-star-svg">
                    <use href="./svg/sprite.svg#icon-emptystar"></use>
                    </svg>`.repeat(a)}
                  </div>    
                </div>
              
            <button class="recipe-button" data-id="${e._id}">See recipe</button>
        </div>      
      </li>
    `;t.innerHTML+=n})}}document.addEventListener("DOMContentLoaded",d);
//# sourceMappingURL=favorites.js.map
