import{i as A,s as v,o as L}from"./assets/footer-DO3GSXYl.js";const h="/tasty-treats/assets/raccoon-sad-fav-CduDKH6i.png",k=document.getElementById("message-container");let g="All Categories",i=null;const y=12;function E(){const r=localStorage.getItem("favArr");return r?JSON.parse(r):[]}async function $(r){try{const e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${r}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){return console.error("Error fetching recipe by ID:",e),null}}async function b(){const r=E();try{return(await Promise.all(r.map(t=>$(t)))).filter(t=>t!==null)}catch(e){return console.error("Error fetching favorite recipes:",e),[]}}function q(){document.querySelectorAll(".recipe-button").forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-id");L(t)})})}async function l(r=1){const e=await b();if(e.length===0){k.innerHTML=`
        <div class="fav-message-container">
            <img src="${h}" class="fav-raccoon">
            <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
            <img src="${h}" class="fav-chefs-hat">
        </div>
        `;const t=document.querySelector(".pagination");t.innerHTML=""}else{const t=[...new Set(e.map(a=>a.category))];localStorage.setItem("favArrCategory",JSON.stringify(t)),S(),m(e,r),C(e.length,r),q()}}function m(r,e){const t=document.querySelector(".favorite-cards");t.innerHTML="";const a=(e-1)*y,o=a+y;r.slice(a,o).forEach(n=>{const s=Math.round(n.rating),u=5-s,f=`
        <li class="cards-listing" style="background-image: url(${n.preview});">
            <button class="heard-button" data-category="${n.category}" data-id="${n._id}" aria-label="like-btn">
                <svg class="svg-heard add-to-fav" data-id="${n._id}" width="22px" height="22px">
                    <use href="${v}#icon-heart-filled"></use>
                </svg>
            </button>
            <div class="card-content-container">
                <div class="text-container">
                    <h3 class="card-title">${n.title}</h3>
                    <p class="specification-text">${n.description}</p>
                </div>
                <div class="card-rating-container">
                    <div class="rating-container">
                        <p class="rating-text">${n.rating.toFixed(1)}</p>
                        <div class="star-container">
                            ${`<svg class="card-star-svg">
                            <use href="${v}#icon-star"></use>
                            </svg>`.repeat(s)}
                            ${`<svg class="card-star-svg">
                            <use href="${v}#icon-emptystar"></use>
                            </svg>`.repeat(u)}
                        </div>    
                    </div>
                    <button class="recipe-button" data-id="${n._id}">See recipe</button>
                </div>      
            </div>
        </li>
        `;t.innerHTML+=f}),w(),B()}function C(r,e,t="All Categories"){const a=Math.ceil(r/y),o=document.querySelector(".pagination");o.innerHTML=`
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
    `;const c=o.querySelector(".number-container");for(let n=1;n<=a;n++){const s=document.createElement("button");s.textContent=n,s.classList.add("pagination-btn","page-number"),n===e&&s.classList.add("active-page"),s.addEventListener("click",()=>{t==="All Categories"?l(n):d(t,n)}),c.appendChild(s)}o.querySelector("#doubleLeft").addEventListener("click",()=>{t==="All Categories"?l(1):d(t,1)}),o.querySelector("#singleLeft").addEventListener("click",()=>{t==="All Categories"?l(e-1):d(t,e-1)}),o.querySelector("#singleRight").addEventListener("click",()=>{t==="All Categories"?l(e+1):d(t,e+1)}),o.querySelector("#doubleRight").addEventListener("click",()=>{t==="All Categories"?l(a):d(t,a)})}function w(){document.querySelectorAll(".heard-button").forEach(e=>{e.addEventListener("click",async function(){const t=e.dataset.id,a=e.dataset.category,o=localStorage.getItem("favArr");let c=o?JSON.parse(o):[];if(c.includes(t)&&(c.splice(c.indexOf(t),1),localStorage.setItem("favArr",JSON.stringify(c))),(await b()).filter(u=>u.category===a).length===0){const u=localStorage.getItem("favArrCategory");let f=u?JSON.parse(u):[];f.includes(a)&&(f.splice(f.indexOf(a),1),localStorage.setItem("favArrCategory",JSON.stringify(f))),g="All Categories",i&&(i.style.backgroundColor="",i.style.color="",i.style.border="");const p=document.querySelector(".fav-categories-list button:first-child");p.style.backgroundColor="var(--primary-color)",p.style.color="#fff",p.style.border="1px solid var(--primary-color)",i=p}S(),g==="All Categories"?l():d(g)})})}function B(){const r=document.querySelectorAll(".heard-button");let e=[];r.forEach(t=>{e.includes(t.dataset.category)||e.push(t.dataset.category)}),e.sort()}function S(){const r=document.querySelector(".fav-categories-list"),e=localStorage.getItem("favArrCategory");let t=e?JSON.parse(e):[];r.innerHTML="";const a=document.createElement("li"),o=document.createElement("button");o.textContent="All Categories",o.classList.add("category-button"),o.addEventListener("click",()=>{g="All Categories",i&&(i.style.backgroundColor="",i.style.color="",i.style.border=""),o.style.backgroundColor="var(--primary-color)",o.style.color="#fff",o.style.border="1px solid var(--primary-color)",i=o,l()}),a.appendChild(o),r.appendChild(a),t.forEach(c=>{const n=document.createElement("li"),s=document.createElement("button");s.textContent=c,s.classList.add("category-button"),s.addEventListener("click",()=>{g=c,i&&(i.style.backgroundColor="",i.style.color="",i.style.border=""),s.style.backgroundColor="var(--primary-color)",s.style.color="#fff",s.style.border="1px solid var(--primary-color)",i=s,d(c)}),n.appendChild(s),r.appendChild(n)})}async function d(r,e=1){const a=(await b()).filter(o=>o.category===r);m(a,e),C(a.length,e,r)}document.addEventListener("DOMContentLoaded",()=>l().then(()=>{A()}));
//# sourceMappingURL=favorites.js.map
