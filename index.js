const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/footer-nXjezsFO.js","assets/footer-ChASpMAV.css"])))=>i.map(i=>d[i]);
import{i as t,s as e,o as a}from"./assets/footer-nXjezsFO.js";import{i as n,d as o}from"./assets/vendor-7fbXf6x8.js";const r={},s=["/tasty-treats/assets/1-rDOwHOuF.webp","/tasty-treats/assets/2-4skkltV-.webp","/tasty-treats/assets/3-D0-ZMNjm.webp","/tasty-treats/assets/4-BmSdx1zx.webp","/tasty-treats/assets/5-BCo80kwS.webp","/tasty-treats/assets/5-BCo80kwS.webp","/tasty-treats/assets/7-CqGGUQ5C.webp","/tasty-treats/assets/8-GawR9MF4.webp","/tasty-treats/assets/8-GawR9MF4.webp"];document.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{(function(t,e){let a=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(null==t?void 0:t.nonce)||(null==t?void 0:t.getAttribute("nonce"));a=Promise.allSettled(e.map((t=>{if((t=function(t){return"/tasty-treats/"+t}(t))in r)return;r[t]=!0;const e=t.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");return o.rel=e?"stylesheet":"modulepreload",e||(o.as="script"),o.crossOrigin="",o.href=t,n&&o.setAttribute("nonce",n),document.head.appendChild(o),e?new Promise(((e,a)=>{o.addEventListener("load",e),o.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}function n(t){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}return a.then((e=>{for(const t of e||[])"rejected"===t.status&&n(t.reason);return t().catch(n)}))})((()=>import("./assets/footer-nXjezsFO.js").then((t=>t.a))),__vite__mapDeps([0,1])).then((()=>{const t=document.querySelector(".slider"),e=document.querySelectorAll(".slide"),a=document.querySelectorAll(".lazy-image"),n=document.querySelector(".slider-indicators");let o=0,r=100;(()=>{const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const a=t.target;a.src=s[Number(a.dataset.src)-1],a.classList.remove("lazy-image"),e.unobserve(a)}}))}),{threshold:.1});a.forEach((e=>t.observe(e)))})(),e.forEach(((t,e)=>{const a=document.createElement("div");a.classList.add("indicator"),a.addEventListener("click",(()=>function(t){o=t,c()}(e))),n.appendChild(a)}));const i=document.querySelectorAll(".indicator");function c(){t.style.transform=`translateX(-${o*r}%)`,i.forEach(((t,e)=>{e===o?t.classList.add("active"):t.classList.remove("active")}))}function l(){const e=t.offsetWidth;r=window.innerWidth>=1280?602/e*100:window.innerWidth>=768&&window.innerWidth<945?e/1/e*100:100,c()}l(),c(),window.addEventListener("resize",l),setInterval((()=>{o=(o+1)%e.length,c()}),5e3)})).catch((t=>{}))}),100)}));const i=document.getElementById("filter-form"),c=document.getElementById("time-options"),l=document.getElementById("area-options"),d=document.getElementById("ingredient-options"),g=document.getElementById("time-trigger-text"),u=document.getElementById("area-trigger-text"),m=document.getElementById("ingredient-trigger-text"),p=document.getElementById("search"),h=document.getElementById("cancel-btn"),y=document.getElementById("reset-filter-btn"),f=document.getElementById("loader"),v=document.querySelector(".pagination"),b=document.querySelector(".cards-list"),E=JSON.parse(localStorage.getItem("favArr"))||[];function w(t){const a=localStorage.getItem("favArr")?JSON.parse(localStorage.getItem("favArr")):[];b.innerHTML="",0===t.length?(b.innerHTML='\n    <div class="no-results-container">\n      <p class="no-results-text">Sorry! No results were found that match your filters.</p>\n      <img class="no-results" src="/tasty-treats/assets/nothing-BxBcHaW7.gif"></img>\n    </div>',v.classList.add("hidden")):(v.classList.remove("hidden"),t.forEach((t=>{const n=Math.round(t.rating),o=5-n,r=`\n      <li class="cards-listing" style="background-image: url(${t.preview});">\n      <button class="heard-button add-to-fav" data-category="${t.category}" data-id="${t._id}" aria-label="like-btn">\n         <svg class="svg-heard add-to-fav" data-id="${t._id}" width="22px" height="22px">\n            <use class="add-to-fav svguse" href="${e}#${a.includes(t._id)?"icon-heart-filled":"icon-heart"}"></use>\n        </svg></button>\n\n      <div class="card-content-container">\n         <div class="text-container">\n            <h3 class="card-title">${t.title}</h3>\n              <p class="specification-text">${t.description}</p>\n          </div>\n\n          <div class="card-rating-container">\n              <div class="rating-container">\n                  <p class="rating-text">${t.rating.toFixed(1)}</p>\n                  <div class="star-container">\n                    ${`<svg class="card-star-svg">\n                    <use href="${e}#icon-star"></use>\n                      </svg>`.repeat(n)}\n\n                    ${`<svg class="card-star-svg">\n                    <use href="${e}#icon-emptystar"></use>\n                    </svg>`.repeat(o)}\n                  </div>    \n                </div>\n              \n            <button class="recipe-button" data-id="${t._id}">See recipe</button>\n        </div>      \n      </li>\n    `;b.insertAdjacentHTML("beforeend",r)})),L())}function L(){document.querySelectorAll(".recipe-button").forEach((t=>{t.addEventListener("click",(function(){const t=this.getAttribute("data-id");a(t)}))}))}b.addEventListener("click",(t=>function(t){const a=t.target.closest(".heard-button");if(JSON.parse(localStorage.getItem("favArr")),a){const t=a.dataset.id,n=a.querySelector(".svguse");E.includes(t)?(E.splice(E.indexOf(t),1),n.setAttribute("href",`${e}#icon-heart`)):(E.push(t),n.setAttribute("href",`${e}#icon-heart-filled`)),localStorage.setItem("favArr",JSON.stringify(E))}}(t))),document.addEventListener("DOMContentLoaded",(()=>{setTimeout((()=>{(async function(){try{const t=await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9"),e=await t.json();return w(e.results),e.totalPages}catch(t){return n.error({title:"",message:"Sorry! An error occured while fetching recipes. Please try again!",position:"topRight"}),"hata"}})().then((()=>{L(),t()}))}),100);const e=localStorage.getItem("favArr");e&&E.push(...JSON.parse(e))}));const S=document.getElementById("orderForm"),I=document.querySelector(".order"),$=document.querySelector(".close-button");function k(){document.getElementById("popupOverlay").style.display="none"}I.addEventListener("click",(t=>(document.getElementById("popupOverlay").style.display="block",void S.reset()))),$.addEventListener("click",(t=>k())),S.addEventListener("submit",(t=>{k()}));function A(t){t.forEach((t=>{const e=`<li data-area="${t.name}" data-name="area" class="option">${t.name}</li>`;l.insertAdjacentHTML("beforeend",e)}))}function B(t){t.forEach((t=>{const e=`<li data-ingredient="${t._id}" data-name="ingredient" class="option">${t.name}</li>`;d.insertAdjacentHTML("beforeend",e)}))}function C(){localStorage.setItem("time",""),localStorage.setItem("area",""),localStorage.setItem("ingredient",""),localStorage.setItem("title",""),localStorage.setItem("totalPage",""),localStorage.setItem("category","")}document.addEventListener("DOMContentLoaded",(()=>{!async function(){try{const t=await fetch("https://tasty-treats-backend.p.goit.global/api/areas");if(!t.ok)throw new Error("Failed to fetch areas");A(await t.json())}catch(t){A([{name:"Sorry no region to select"}])}}(),async function(){try{const t=await fetch("https://tasty-treats-backend.p.goit.global/api/ingredients");if(!t.ok)throw new Error("Failed to fetch ingredients");B(await t.json())}catch(t){B([{name:"Sorry no ingredients to select"}])}}(),function(){for(let t=5;t<=120;t+=5){const e=`<li data-time="${t}" data-name="time" class="option">${t} min</li>`;c.insertAdjacentHTML("beforeend",e)}}(),C()}));let x="https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9";async function q(t){try{b.innerHTML="",O();const e=await fetch(t);if(!e.ok)throw new Error("An error occurred while fetching recipes");const a=await e.json();localStorage.setItem("totalPage",a.totalPages?a.totalPages:1),V(1,"form-read"),w(a.results)}catch(e){n.error({title:"",message:"Sorry! An error occurred while fetching recipes please try again!",position:"topRight"})}finally{P()}}const M=o((function(){""!==p.value?h.classList.remove("hidden"):h.classList.add("hidden");const t=localStorage.getItem("category"),e=localStorage.getItem("time"),a=localStorage.getItem("area"),n=localStorage.getItem("ingredient"),o=p.value.trim();x=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${t}&page=1&limit=9&time=${e}&area=${a}&ingredient=${n}&title=${o}`,localStorage.setItem("title",p.value?o:""),q(x)}),300);function j(){x="https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9",[g,u,m].forEach((t=>{t.textContent="Select",t.classList.remove("trigger-active")})),p.value="";document.querySelectorAll(".category-btn").forEach((t=>{t.style.color=""})),h.classList.add("hidden"),C(),q(x)}function O(){f.classList.remove("hidden"),v.classList.add("hidden-pagination")}function P(){f.classList.add("hidden"),v.classList.remove("hidden-pagination")}function T(){[c,l,d].forEach((t=>t.classList.add("hidden-dropdown")))}function N(t){let e=t.target.id;switch("svg"!==t.target.tagName&&"SPAN"!==t.target.tagName||(e=t.target.parentElement.id),e){case"time-trigger":c.classList.toggle("hidden-dropdown");break;case"area-trigger":l.classList.toggle("hidden-dropdown");break;case"ingredient-trigger":d.classList.toggle("hidden-dropdown");break;default:if("LI"===t.target.tagName){!function(t,e){if("LI"!==e.target.tagName)return;const a=localStorage.getItem("category"),n=document.getElementById(`${t}-trigger-text`),o=document.getElementById(`${t}-options`),r=e.target.dataset[t];n.textContent=e.target.textContent,localStorage.setItem(`${t}`,r),x=x.includes(t)?x.replace(new RegExp(`${t}=[^&]*`),`${t}=${r}`):`${x}&${t}=${r}`,x=x.includes("category")?x.replace(/category=[^&]*/,`category=${a}`):`${x}&category=${a}`,o.classList.add("hidden-dropdown"),n.classList.add("trigger-active"),q(x)}(t.target.dataset.name,t)}else T()}}i.addEventListener("click",(t=>N(t))),p.addEventListener("input",M),h.addEventListener("click",(function(){p.value="",h.classList.add("hidden"),M()})),y.addEventListener("click",j),window.addEventListener("click",(t=>function(t){i&&!i.contains(t.target)&&T()}(t)));const H=document.querySelector(".pagination"),R=document.querySelectorAll(".page-number"),_=document.getElementById("singleLeft"),D=document.getElementById("singleRight"),F=document.getElementById("doubleLeft"),W=document.getElementById("doubleRight");let J=1,z=1,G=null;function U(){let t=-1;J==z&&1!=z&&(t=-2),J!=z&&1==J&&(t=0),R.forEach(((e,a)=>{const n=J+t+a;e.textContent=n,e.classList.toggle("active-page",n==J),e.style.display=n>0&&n<=z?"inline-block":"none"})),_.disabled=1==J,F.disabled=1==J,D.disabled=J==z,W.disabled=J==z}function V(t,e){z=localStorage.getItem("totalPage")?Number(localStorage.getItem("totalPage")):G,t>=1&&t<=z&&(J=t,U()),"page-number"==e&&function(t){const e=localStorage.getItem("time"),a=localStorage.getItem("category")?localStorage.getItem("category"):"",o=localStorage.getItem("area"),r=localStorage.getItem("ingredient"),s=localStorage.getItem("title");!async function(t){b.innerHTML="",O();try{const e=await fetch(t);if(!e.ok)throw new Error("An error occurred while fetching recipes");w((await e.json()).results)}catch(e){n.error({title:"",message:"Sorry! An error occurred while fetching recipes please try again!",position:"topRight"})}finally{P()}}(`https://tasty-treats-backend.p.goit.global/api/recipes?category=${a}&page=${t}&limit=9&time=${e}&area=${o}&ingredient=${r}&title=${s}`)}(t)}H.addEventListener("click",(t=>{t.target.classList.contains("page-number")?V(parseInt(t.target.textContent),"page-number"):"singleLeft"===t.target.id?V(J-1,"page-number"):"singleRight"===t.target.id?V(J+1,"page-number"):"doubleLeft"===t.target.id?V(1,"page-number"):"doubleRight"===t.target.id&&V(z,"page-number")})),document.addEventListener("DOMContentLoaded",(async function(){z=await async function(){try{const t=await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9");return(await t.json()).totalPages}catch(t){return 1}}(),G=z,U()}));const Q=document.querySelector(".category-items-list");document.querySelector(".categories-button").addEventListener("click",j),document.addEventListener("DOMContentLoaded",(async function(){localStorage.setItem("category","");try{const t=await fetch("https://tasty-treats-backend.p.goit.global/api/categories"),e=await t.json();!function(t){t.forEach((t=>{Q.innerHTML+=`\n            <li class="category-items"><button class="category-btn">${t}</button></li>\n        `}))}(e.map((t=>t.name))),function(){const t=document.querySelectorAll(".category-btn");t.forEach((e=>{e.addEventListener("click",(e=>{t.forEach((t=>{t.style.color=""})),e.target.style.color="var(--primary-color)";let a=e.target.innerText;localStorage.setItem("category",a),async function(t){const e=localStorage.getItem("time"),a=localStorage.getItem("area"),n=localStorage.getItem("ingredient"),o=localStorage.getItem("title"),r=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${t}&page=1&limit=9&time=${e}&area=${a}&ingredient=${n}&title=${o}`;try{b.innerHTML="",O();const e=await fetch(r),a=await e.json();localStorage.setItem("totalPage",a.totalPages?a.totalPages:1),localStorage.setItem("category",t);w(a.results)}catch(s){}finally{P(),V(1,"category-list")}}(a)}))}))}()}catch(t){}})),document.addEventListener("DOMContentLoaded",(()=>{t(),async function(){try{const t=await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular"),e=await t.json(),n=document.querySelector("#popular-recipes-gallery");n.innerHTML="";const o=document.createDocumentFragment();e.forEach(((t,e)=>{const n=document.createElement("li"),r=document.createElement("div");r.classList.add("recipe-container"),2!==e&&3!==e||r.classList.add("mobile-special");const s=document.createElement("img");s.src=t.preview||"default-image.jpg",s.alt=t.title||"Unknown Recipe",s.width=64,s.height=64,s.addEventListener("click",(()=>{t._id&&a(t._id)}));const i=document.createElement("div");i.classList.add("recipe-content");const c=document.createElement("h2");c.textContent=t.title||"Unknown Recipe",c.classList.add("recipe-content-title");const l=document.createElement("p");l.textContent=t.description||"No instructions provided",l.classList.add("recipe-content-instructions"),i.appendChild(c),i.appendChild(l),r.appendChild(s),r.appendChild(i),n.appendChild(r),o.appendChild(n)})),n.appendChild(o)}catch(t){}}()}));const X=document.getElementById("scrollBtn");window.addEventListener("scroll",(function(){window.scrollY>300?X.style.display="block":X.style.display="none"})),X.addEventListener("click",(t=>(t.preventDefault(),void window.scrollTo({top:0,behavior:"smooth"}))));
//# sourceMappingURL=index.js.map
