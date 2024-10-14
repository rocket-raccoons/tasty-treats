import"./assets/footer-mascot-BeIFrD4u.js";const n=document.getElementById("message-container");function c(){const r=localStorage.getItem("favArr");let e=[];try{e=r?JSON.parse(r):[]}catch(a){console.error("Error parsing favArr from localStorage:",a),e=[]}const t=document.querySelector(".favoriteCards");return t&&(t.innerHTML=""),e.length===0&&(n.innerHTML="",n.innerHTML=`
        <div class="fav-message-container">

        <img  src="./img/raccoon-sad-fav.png" class="fav-raccoon">
        
        <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>


        <img  src="./img/raccoon-sad-fav.png" class="fav-chefs-hat">
        </div>
        `),e}async function d(r){const e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${r}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}async function l(){const r=c();try{return await Promise.all(r.map(t=>d(t)))}catch(e){return console.error("Error fetching favorite recipes:",e),[]}}async function i(){const r=await l();if(r.length!==0){const e=document.querySelector(".favorite-cards");e.innerHTML="",r.forEach(t=>{const a=Math.round(t.rating),s=5-a,o=`
      <li class="cards-listing" style="background-image: url(${t.preview});">
        <button class="heard-button" data-id="${t._id}" aria-label="like-btn"><svg class="svg-heard add-to-fav" data-id="${t._id}" width="22px" height="22px"><use href="./svg/sprite.svg#icon-heart-filled"></use></svg></button>
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
                    <use href="./svg/sprite.svg#icon-star"></use>
                      </svg>`.repeat(a)}

                    ${`<svg class="card-star-svg">
                    <use href="./svg/sprite.svg#icon-emptystar"></use>
                    </svg>`.repeat(s)}
                  </div>    
                </div>
              
            <button class="recipe-button" data-id="${t._id}">See recipe</button>
        </div>      
      </li>
    `;e.innerHTML+=o}),v()}}function v(){document.querySelectorAll(".heard-button").forEach(e=>{e.addEventListener("click",function(){const t=e.dataset.id,a=localStorage.getItem("favArr");if(a.includes(t)){let s=JSON.parse(a);s.splice(s.indexOf(t),1),localStorage.setItem("favArr",JSON.stringify(s))}i()})})}document.addEventListener("DOMContentLoaded",i);
//# sourceMappingURL=favorites.js.map
