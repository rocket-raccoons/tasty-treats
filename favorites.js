import{i as S,o as A}from"./assets/modal-Bt34hITj.js";const b="/tasty-treats/assets/raccoon-sad-fav-CduDKH6i.png",L=document.getElementById("message-container");let f="All Categories",i=null;const v=12;function k(){const r=localStorage.getItem("favArr");return r?JSON.parse(r):[]}async function E(r){try{const e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${r}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){return console.error("Error fetching recipe by ID:",e),null}}async function y(){const r=k();try{return(await Promise.all(r.map(t=>E(t)))).filter(t=>t!==null)}catch(e){return console.error("Error fetching favorite recipes:",e),[]}}function q(){document.querySelectorAll(".recipe-button").forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-id");A(t)})})}async function l(r=1){const e=await y();if(e.length===0){L.innerHTML=`
        <div class="fav-message-container">
            <img src="${b}" class="fav-raccoon">
            <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
            <img src="${b}" class="fav-chefs-hat">
        </div>
        `;const t=document.querySelector(".pagination");t.innerHTML=""}else{const t=[...new Set(e.map(a=>a.category))];localStorage.setItem("favArrCategory",JSON.stringify(t)),C(),h(e,r),m(e.length,r),q()}}function h(r,e){const t=document.querySelector(".favorite-cards");t.innerHTML="";const a=(e-1)*v,o=a+v;r.slice(a,o).forEach(s=>{const n=Math.round(s.rating),u=5-n,g=`
        <li class="cards-listing" style="background-image: url(${s.preview});">
            <button class="heard-button" data-category="${s.category}" data-id="${s._id}" aria-label="like-btn">
                <svg class="svg-heard add-to-fav" data-id="${s._id}" width="22px" height="22px">
                    <use href="./svg/sprite.svg#icon-heart-filled"></use>
                </svg>
            </button>
            <div class="card-content-container">
                <div class="text-container">
                    <h3 class="card-title">${s.title}</h3>
                    <p class="specification-text">${s.description}</p>
                </div>
                <div class="card-rating-container">
                    <div class="rating-container">
                        <p class="rating-text">${s.rating.toFixed(1)}</p>
                        <div class="star-container">
                            ${`<svg class="card-star-svg">
                            <use href="./svg/sprite.svg#icon-star"></use>
                            </svg>`.repeat(n)}
                            ${`<svg class="card-star-svg">
                            <use href="./svg/sprite.svg#icon-emptystar"></use>
                            </svg>`.repeat(u)}
                        </div>    
                    </div>
                    <button class="recipe-button" data-id="${s._id}">See recipe</button>
                </div>      
            </div>
        </li>
        `;t.innerHTML+=g}),$(),w()}function m(r,e,t="All Categories"){const a=Math.ceil(r/v),o=document.querySelector(".pagination");o.innerHTML=`
        <div class="left-arrow-container">
            <button id="doubleLeft" class="pagination-btn left-end" ${e===1?"disabled":""}>
                &laquo;
            </button>
            <button id="singleLeft" class="pagination-btn left-one" ${e===1?"disabled":""}>
                &lsaquo;
            </button>
        </div>
        <div class="number-container">
        </div>
        <div class="right-arrow-container">
            <button id="singleRight" class="right-one pagination-btn" ${e===a?"disabled":""}>
                &rsaquo;
            </button>
            <button id="doubleRight" class="right-end pagination-btn" ${e===a?"disabled":""}>
                &raquo;
            </button>
        </div>
    `;const c=o.querySelector(".number-container");for(let s=1;s<=a;s++){const n=document.createElement("button");n.textContent=s,n.classList.add("pagination-btn","page-number"),s===e&&n.classList.add("active-page"),n.addEventListener("click",()=>{t==="All Categories"?l(s):d(t,s)}),c.appendChild(n)}o.querySelector("#doubleLeft").addEventListener("click",()=>{t==="All Categories"?l(1):d(t,1)}),o.querySelector("#singleLeft").addEventListener("click",()=>{t==="All Categories"?l(e-1):d(t,e-1)}),o.querySelector("#singleRight").addEventListener("click",()=>{t==="All Categories"?l(e+1):d(t,e+1)}),o.querySelector("#doubleRight").addEventListener("click",()=>{t==="All Categories"?l(a):d(t,a)})}function $(){document.querySelectorAll(".heard-button").forEach(e=>{e.addEventListener("click",async function(){const t=e.dataset.id,a=e.dataset.category,o=localStorage.getItem("favArr");let c=o?JSON.parse(o):[];if(c.includes(t)&&(c.splice(c.indexOf(t),1),localStorage.setItem("favArr",JSON.stringify(c))),(await y()).filter(u=>u.category===a).length===0){const u=localStorage.getItem("favArrCategory");let g=u?JSON.parse(u):[];g.includes(a)&&(g.splice(g.indexOf(a),1),localStorage.setItem("favArrCategory",JSON.stringify(g))),f="All Categories",i&&(i.style.backgroundColor="",i.style.color="",i.style.border="");const p=document.querySelector(".fav-categories-list button:first-child");p.style.backgroundColor="var(--primary-color)",p.style.color="#fff",p.style.border="1px solid var(--primary-color)",i=p}C(),f==="All Categories"?l():d(f)})})}function w(){const r=document.querySelectorAll(".heard-button");let e=[];r.forEach(t=>{e.includes(t.dataset.category)||e.push(t.dataset.category)}),e.sort()}function C(){const r=document.querySelector(".fav-categories-list"),e=localStorage.getItem("favArrCategory");let t=e?JSON.parse(e):[];r.innerHTML="";const a=document.createElement("li"),o=document.createElement("button");o.textContent="All Categories",o.classList.add("category-button"),o.addEventListener("click",()=>{f="All Categories",i&&(i.style.backgroundColor="",i.style.color="",i.style.border=""),o.style.backgroundColor="var(--primary-color)",o.style.color="#fff",o.style.border="1px solid var(--primary-color)",i=o,l()}),a.appendChild(o),r.appendChild(a),t.forEach(c=>{const s=document.createElement("li"),n=document.createElement("button");n.textContent=c,n.classList.add("category-button"),n.addEventListener("click",()=>{f=c,i&&(i.style.backgroundColor="",i.style.color="",i.style.border=""),n.style.backgroundColor="var(--primary-color)",n.style.color="#fff",n.style.border="1px solid var(--primary-color)",i=n,d(c)}),s.appendChild(n),r.appendChild(s)})}async function d(r,e=1){const a=(await y()).filter(o=>o.category===r);h(a,e),m(a.length,e,r)}document.addEventListener("DOMContentLoaded",()=>l().then(()=>{S()}));
//# sourceMappingURL=favorites.js.map
