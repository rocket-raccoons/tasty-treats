import"./assets/footer-mascot-T9mK7Qjj.js";const n="/tasty-treats/assets/sprite-B_ptjhEe.svg",i=document.getElementById("message-container");function d(){const a=localStorage.getItem("favArr");let e=[];try{e=a?JSON.parse(a):[]}catch(r){console.error("Error parsing favArr from localStorage:",r),e=[]}const t=document.querySelector(".favoriteCards");return t&&(t.innerHTML=""),e.length===0&&(i.innerHTML="",i.innerHTML=`
        <div class="fav-message-container">

        <img  src="./img/raccoon-sad-fav.png" class="fav-raccoon">
        
        <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>


        <img  src="./img/raccoon-sad-fav.png" class="fav-chefs-hat">
        </div>
        `),e}async function l(a){const e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${a}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}async function f(){const a=d();try{return await Promise.all(a.map(t=>l(t)))}catch(e){return console.error("Error fetching favorite recipes:",e),[]}}async function o(){const a=await f();if(a.length!==0){const e=document.querySelector(".favorite-cards");e.innerHTML="",a.forEach(t=>{const r=Math.round(t.rating),s=5-r,c=`
      <li class="cards-listing" style="background-image: url(${t.preview});">
        <button class="heard-button" data-id="${t._id}" aria-label="like-btn"><svg class="svg-heard add-to-fav" data-id="${t._id}" width="22px" height="22px"><use href="${n}#icon-heart-filled"></use></svg></button>
      <div class="card-content-container">
         <div class="text-container">
            <h3 class="card-title">${t.title}</h3>
              <p class="specification-text">${t.description}</p>
          </div>

          <div class="card-rating-container">
              <div class="rating-container">
                  <p class="rating-text">${t.rating.toFixed(1)}</p>
                  <div class="star-container">
                    ${`<svg class="card-star-svg">
                    <use href="${n}#icon-star"></use>
                      </svg>`.repeat(r)}

                    ${`<svg class="card-star-svg">
                    <use href="${n}#icon-emptystar"></use>
                    </svg>`.repeat(s)}
                  </div>    
                </div>
              
            <button class="recipe-button" data-id="${t._id}">See recipe</button>
        </div>      
      </li>
    `;e.innerHTML+=c}),v()}}function v(){document.querySelectorAll(".heard-button").forEach(e=>{e.addEventListener("click",function(){const t=e.dataset.id,r=localStorage.getItem("favArr");if(r.includes(t)){let s=JSON.parse(r);s.splice(s.indexOf(t),1),localStorage.setItem("favArr",JSON.stringify(s))}o()})})}document.addEventListener("DOMContentLoaded",o);
//# sourceMappingURL=favorites.js.map
