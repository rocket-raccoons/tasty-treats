import"./assets/footer-mascot-DQU0rhVr.js";import{i as T,d as Z}from"./assets/vendor-BE0UidyL.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".slider"),t=document.querySelectorAll(".slide"),n=document.querySelectorAll(".lazy-image"),a=document.querySelector(".slider-indicators");let o=0,r=100;(()=>{const s=new IntersectionObserver((u,E)=>{u.forEach(H=>{if(H.isIntersecting){const w=H.target;w.src=w.dataset.src,w.classList.remove("lazy-image"),E.unobserve(w)}})},{threshold:.1});n.forEach(u=>s.observe(u))})(),t.forEach((s,u)=>{const E=document.createElement("div");E.classList.add("indicator"),E.addEventListener("click",()=>h(u)),a.appendChild(E)});const g=document.querySelectorAll(".indicator");function c(){e.style.transform=`translateX(-${o*r}%)`,f()}function f(){g.forEach((s,u)=>{u===o?s.classList.add("active"):s.classList.remove("active")})}function h(s){o=s,c()}function v(){const s=e.offsetWidth;window.innerWidth>=1280?r=602/s*100:window.innerWidth>=768&&window.innerWidth<945?r=s/1/s*100:r=100,c()}v(),c(),window.addEventListener("resize",v),setInterval(()=>{o=(o+1)%t.length,c()},5e3)});function D(){const e=document.getElementById("recipeModal"),t=e.querySelector(".modal-close-button");t.onclick=k,window.onclick=function(n){n.target===e&&k()},document.addEventListener("keydown",function(n){n.key==="Escape"&&e.style.display==="block"&&k()})}async function N(e){const t=document.getElementById("recipeModal"),n=t.querySelector(".modal-content");n.innerHTML="<p>Loading recipe details...</p>",t.style.display="block";try{const o=await(await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`)).json();console.log(o.time),n.innerHTML=`
        <div class= "modal-heading">
          <div style="flex: 1;">
            <iframe class="modal-iframe" src="https://www.youtube.com/embed/${new URL(o.youtube).searchParams.get("v")}" frameborder="0" allowfullscreen></iframe>
          </div>
        <div class="modal-recipe-container" style="flex: 1;">
        <h2>${o.title}</h2>
        <div class="modal-rating-container">
        <div class="modal-star-container">
        <p class="rating star_rating">${"★".repeat(Math.round(o.rating))}☆</p>
        </div>
        <p class="cooking-time">${o.time} min</p>
        </div>
        <div class="modal-recipe-ingredients-container">
        <!-- <h3>Ingredients:</h3> -->
        <ul class="modal-recipe-ingredients">
          ${o.ingredients.map(r=>`<li class="modal-recipe-ingredients-item"><p class="ingredient">${r.name}</p><p class="ingredient-portion"> ${r.measure}</p></li>`).join("")}
        </ul>
        </div>
        </div>
        </div>
        <p>${o.instructions}</p>
        <div style="display: flex; gap: 20px; margin-top: 20px;">
          <button class="addToFavoriteButton">Add to Favorite</button>
          <button class="giveRatingButton">Give a Rating</button>
        </div>
        </div>
      `}catch(a){console.error("Error fetching recipe details:",a),n.innerHTML="<p>Error loading recipe details. Please try again.</p>"}}function k(){const e=document.getElementById("recipeModal");e.style.display="none"}const I="/tasty-treats/assets/sprite-mAtqh765.svg",ee="/tasty-treats/assets/nothing-BxBcHaW7.gif",B=document.getElementById("filter-form"),x=document.getElementById("time-options"),M=document.getElementById("area-options"),R=document.getElementById("ingredient-options"),te=document.getElementById("time-trigger-text"),ne=document.getElementById("area-trigger-text"),ae=document.getElementById("ingredient-trigger-text"),L=document.getElementById("search"),S=document.getElementById("cancel-btn"),oe=document.getElementById("reset-filter-btn"),W=document.getElementById("loader"),A=document.querySelector(".pagination"),m=document.querySelector(".cards-list"),b=[];let j=[];async function re(){try{const t=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9")).json();return $(t.results),t.totalPages}catch(e){return T.error({title:"",message:"Sorry! An error occured while fetching recipes. Please try again!",position:"topRight"}),console.error("API verisi alınırken hata oluştu:",e),"hata"}}function $(e){const t=localStorage.getItem("favArr")?JSON.parse(localStorage.getItem("favArr")):[];m.innerHTML="",e.length===0?(m.innerHTML=`
    <div class="no-results-container loader-container">
      <p class="no-results-text">Sorry! No results were found that match your filters.</p>
      <img class="no-results" src="${ee}"></img>
    </div>`,A.style.display="none"):(A.style.display="flex",e.forEach(n=>{const a=Math.round(n.rating),o=5-a,r=`
      <li class="cards-listing" style="background-image: url(${n.preview});">
      <button class="heard-button add-to-fav" data-category="${n.category}" data-id="${n._id}" aria-label="like-btn">
         <svg class="svg-heard add-to-fav" data-id="${n._id}" width="22px" height="22px">
            <use class="add-to-fav svguse" href="${I}#${t.includes(n._id)?"icon-heart-filled":"icon-heart"}"></use>
        </svg></button>

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
                    <use href="${I}#icon-star"></use>
                      </svg>`.repeat(a)}

                    ${`<svg class="card-star-svg">
                    <use href="${I}#icon-emptystar"></use>
                    </svg>`.repeat(o)}
                  </div>    
                </div>
              
            <button class="recipe-button" data-id="${n._id}">See recipe</button>
        </div>      
      </li>
    `;m.insertAdjacentHTML("beforeend",r)}),z())}function z(){document.querySelectorAll(".recipe-button").forEach(t=>{t.addEventListener("click",function(){const n=this.getAttribute("data-id");N(n)})})}function se(){localStorage.setItem("favArr",JSON.stringify(b)),localStorage.setItem("favArrCategory",JSON.stringify(j))&&JSON.stringify(j)}function ie(e){const t=e.target.closest(".heard-button");if(t){t.dataset.category;const n=t.dataset.id,a=t.querySelector(".svguse");b.includes(n)?(b.splice(b.indexOf(n),1),a.setAttribute("href",`${I}#icon-heart`)):(b.push(n),a.setAttribute("href",`${I}#icon-heart-filled`)),se()}}m.addEventListener("click",e=>ie(e));document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{re().then(()=>{z(),D()})},100);const e=localStorage.getItem("favArr");e&&b.push(...JSON.parse(e))});const U=document.getElementById("orderForm"),ce=document.querySelector(".order"),le=document.querySelector(".close-button");ce.addEventListener("click",e=>de());le.addEventListener("click",e=>J());U.addEventListener("submit",e=>{J()});function de(){document.getElementById("popupOverlay").style.display="block",U.reset()}function J(){document.getElementById("popupOverlay").style.display="none"}const ge="https://tasty-treats-backend.p.goit.global/api/areas",ue="https://tasty-treats-backend.p.goit.global/api/ingredients";async function pe(){try{const e=await fetch(ge);if(!e.ok)throw new Error("Failed to fetch areas");const t=await e.json();_(t)}catch{_([{name:"Sorry no region to select"}])}}function _(e){e.forEach(t=>{const n=`<li data-area="${t.name}" data-name="area" class="option">${t.name}</li>`;M.insertAdjacentHTML("beforeend",n)})}async function me(){try{const e=await fetch(ue);if(!e.ok)throw new Error("Failed to fetch ingredients");const t=await e.json();F(t)}catch{F([{name:"Sorry no ingredients to select"}])}}function F(e){e.forEach(t=>{const n=`<li data-ingredient="${t._id}" data-name="ingredient" class="option">${t.name}</li>`;R.insertAdjacentHTML("beforeend",n)})}function ye(){for(let e=5;e<=120;e+=5){const t=`<li data-time="${e}" data-name="time" class="option">${e} min</li>`;x.insertAdjacentHTML("beforeend",t)}}function G(){localStorage.setItem("time",""),localStorage.setItem("area",""),localStorage.setItem("ingredient",""),localStorage.setItem("title",""),localStorage.setItem("totalPage",""),localStorage.setItem("category","")}document.addEventListener("DOMContentLoaded",()=>{pe(),me(),ye(),G()});let i="https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9";async function q(e){try{m.innerHTML="",P();const t=await fetch(e);if(!t.ok)throw new Error("An error occurred while fetching recipes");const n=await t.json();localStorage.setItem("totalPage",n.totalPages?n.totalPages:1),p(1,"form-read"),$(n.results)}catch(t){T.error({title:"",message:"Sorry! An error occurred while fetching recipes please try again!",position:"topRight"}),console.log(t.message)}finally{O()}}function fe(e,t){if(t.target.tagName!=="LI")return;const n=localStorage.getItem("category"),a=document.getElementById(`${e}-trigger-text`),o=document.getElementById(`${e}-options`),r=t.target.dataset[e];a.textContent=t.target.textContent,localStorage.setItem(`${e}`,r),i=i.includes(e)?i.replace(new RegExp(`${e}=[^&]*`),`${e}=${r}`):`${i}&${e}=${r}`,i=i.includes("category")?i.replace(/category=[^&]*/,`category=${n}`):`${i}&category=${n}`,o.classList.add("hidden-dropdown"),a.classList.add("trigger-active"),console.log(i),q(i)}const V=Z(function(){L.value!==""?S.classList.remove("hidden"):S.classList.add("hidden");const e=localStorage.getItem("category"),t=localStorage.getItem("time"),n=localStorage.getItem("area"),a=localStorage.getItem("ingredient"),o=L.value.trim();i=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${e}&page=1&limit=9&time=${t}&area=${n}&ingredient=${a}&title=${o}`,localStorage.setItem("title",L.value?o:""),q(i)},300);function Q(){i="https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9",[te,ne,ae].forEach(t=>{t.textContent="Select",t.classList.remove("trigger-active")}),L.value="",document.querySelectorAll(".category-btn").forEach(t=>{t.style.color=""}),S.classList.add("hidden"),G(),q(i)}function he(){L.value="",S.classList.add("hidden"),V()}function P(){W.classList.remove("hidden"),A.style.display="none"}function O(){W.classList.add("hidden")}function X(){[x,M,R].forEach(e=>e.classList.add("hidden-dropdown"))}function ve(e){B&&!B.contains(e.target)&&X()}function be(e){let t=e.target.id;switch((e.target.tagName==="svg"||e.target.tagName==="SPAN")&&(t=e.target.parentElement.id),t){case"time-trigger":x.classList.toggle("hidden-dropdown");break;case"area-trigger":M.classList.toggle("hidden-dropdown");break;case"ingredient-trigger":R.classList.toggle("hidden-dropdown");break;default:if(e.target.tagName==="LI"){const n=e.target.dataset.name;fe(n,e)}else X()}}B.addEventListener("click",e=>be(e));L.addEventListener("input",V);S.addEventListener("click",he);oe.addEventListener("click",Q);window.addEventListener("click",e=>ve(e));const Le=document.querySelector(".pagination"),Ee=document.querySelectorAll(".page-number"),Ie=document.getElementById("singleLeft"),Se=document.getElementById("singleRight"),we=document.getElementById("doubleLeft"),$e=document.getElementById("doubleRight");let l=1,d=1,Y=null;async function ke(){d=await Ae(),Y=d,K()}async function Be(e){m.innerHTML="",P();try{const t=await fetch(e);if(!t.ok)throw new Error("An error occurred while fetching recipes");const n=await t.json();$(n.results)}catch{T.error({title:"",message:"Sorry! An error occurred while fetching recipes please try again!",position:"topRight"})}finally{O()}}async function Ae(){try{return(await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9")).json()).totalPages}catch(e){return console.error("API verisi alınırken hata oluştu:",e),1}}function K(){let e=-1;l==d&&d!=1&&(e=-2),l!=d&&l==1&&(e=0),Ee.forEach((t,n)=>{const a=l+e+n;t.textContent=a,t.classList.toggle("active-page",a==l),t.style.display=a>0&&a<=d?"inline-block":"none"}),Ie.disabled=l==1,we.disabled=l==1,Se.disabled=l==d,$e.disabled=l==d}function p(e,t){console.log("page : ",e),d=localStorage.getItem("totalPage")?Number(localStorage.getItem("totalPage")):Y,console.log("total page : ",d),e>=1&&e<=d&&(l=e,K()),t=="page-number"&&Ce(e)}function Ce(e){const t=localStorage.getItem("time"),n=localStorage.getItem("category")?localStorage.getItem("category"):"",a=localStorage.getItem("area"),o=localStorage.getItem("ingredient"),r=localStorage.getItem("title");Be(`https://tasty-treats-backend.p.goit.global/api/recipes?category=${n}&page=${e}&limit=9&time=${t}&area=${a}&ingredient=${o}&title=${r}`)}Le.addEventListener("click",e=>{e.target.classList.contains("page-number")?p(parseInt(e.target.textContent),"page-number"):e.target.id==="singleLeft"?p(l-1,"page-number"):e.target.id==="singleRight"?p(l+1,"page-number"):e.target.id==="doubleLeft"?p(1,"page-number"):e.target.id==="doubleRight"&&p(d,"page-number")});document.addEventListener("DOMContentLoaded",ke);const Te=document.querySelector(".category-items-list"),xe=document.querySelector(".categories-button");async function Me(){const e="https://tasty-treats-backend.p.goit.global/api/categories";localStorage.setItem("category","");try{const a=(await(await fetch(e)).json()).map(o=>o.name);Pe(a),qe()}catch(t){console.log(t+"fetching categories")}}async function Re(e){const t=localStorage.getItem("time"),n=localStorage.getItem("area"),a=localStorage.getItem("ingredient"),o=localStorage.getItem("title");console.log("boş",t,n,a);const r=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${e}&page=1&limit=9&time=${t}&area=${n}&ingredient=${a}&title=${o}`;try{m.innerHTML="",P();const g=await(await fetch(r)).json();localStorage.setItem("totalPage",g.totalPages?g.totalPages:1),localStorage.setItem("category",e);const c=g.results;$(c)}catch(y){console.log(y+"fetching chosen category recipes")}finally{O(),p(1,"category-list")}}function qe(){const e=document.querySelectorAll(".category-btn");e.forEach(t=>{t.addEventListener("click",n=>{e.forEach(o=>{o.style.color=""}),n.target.style.color="var(--primary-color)";let a=n.target.innerText;localStorage.setItem("category",a),Re(a)})})}function Pe(e){e.forEach(t=>{Te.innerHTML+=`
            <li class="category-items"><button class="category-btn">${t}</button></li>
        `})}xe.addEventListener("click",Q);document.addEventListener("DOMContentLoaded",Me);document.addEventListener("DOMContentLoaded",()=>{D(),Oe()});async function Oe(){try{const n=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json(),a=document.querySelector("#popular-recipes-gallery");a.innerHTML="";const o=document.createDocumentFragment();n.forEach((r,y)=>{const g=document.createElement("li"),c=document.createElement("div");c.classList.add("recipe-container"),(y===2||y===3)&&c.classList.add("mobile-special");const f=document.createElement("img");f.src=r.preview||"default-image.jpg",f.alt=r.title||"Unknown Recipe",f.addEventListener("click",()=>{r._id?N(r._id):console.warn("Recipe ID is undefined!")});const h=document.createElement("div");h.classList.add("recipe-content");const v=document.createElement("h2");v.textContent=r.title||"Unknown Recipe",v.classList.add("recipe-content-title");const s=document.createElement("p");s.textContent=r.description||"No instructions provided",s.classList.add("recipe-content-instructions"),h.appendChild(v),h.appendChild(s),c.appendChild(f),c.appendChild(h),g.appendChild(c),o.appendChild(g)}),a.appendChild(o)}catch(e){console.error("Error fetching data:",e)}}const C=document.getElementById("scrollBtn");function He(){window.scrollY>300?C.style.display="block":C.style.display="none"}function je(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",He);C.addEventListener("click",e=>je(e));
//# sourceMappingURL=index.js.map
