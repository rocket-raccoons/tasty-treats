import{i as F,s as I,o as _}from"./assets/modal-Cu_NdEq-.js";import{i as A,d as Z}from"./assets/vendor-BE0UidyL.js";const K="/tasty-treats/assets/1-rDOwHOuF.webp",tt="/tasty-treats/assets/2-4skkltV-.webp",et="/tasty-treats/assets/3-D0-ZMNjm.webp",at="/tasty-treats/assets/4-BmSdx1zx.webp",nt="/tasty-treats/assets/5-BCo80kwS.webp",ot="/tasty-treats/assets/5-BCo80kwS.webp",st="/tasty-treats/assets/7-CqGGUQ5C.webp",rt="/tasty-treats/assets/8-GawR9MF4.webp",it="/tasty-treats/assets/8-GawR9MF4.webp",ct=[K,tt,et,at,nt,ot,st,rt,it];document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".slider"),e=document.querySelectorAll(".slide"),a=document.querySelectorAll(".lazy-image"),n=document.querySelector(".slider-indicators");let o=0,s=100;(()=>{const r=new IntersectionObserver((m,E)=>{m.forEach(P=>{if(P.isIntersecting){const w=P.target;w.src=ct[Number(w.dataset.src)-1],w.classList.remove("lazy-image"),E.unobserve(w)}})},{threshold:.1});a.forEach(m=>r.observe(m))})(),e.forEach((r,m)=>{const E=document.createElement("div");E.classList.add("indicator"),E.addEventListener("click",()=>h(m)),n.appendChild(E)});const g=document.querySelectorAll(".indicator");function c(){t.style.transform=`translateX(-${o*s}%)`,y()}function y(){g.forEach((r,m)=>{m===o?r.classList.add("active"):r.classList.remove("active")})}function h(r){o=r,c()}function v(){const r=t.offsetWidth;window.innerWidth>=1280?s=602/r*100:window.innerWidth>=768&&window.innerWidth<945?s=r/1/r*100:s=100,c()}v(),c(),window.addEventListener("resize",v),setInterval(()=>{o=(o+1)%e.length,c()},5e3)});const lt="/tasty-treats/assets/nothing-BxBcHaW7.gif",B=document.getElementById("filter-form"),M=document.getElementById("time-options"),T=document.getElementById("area-options"),x=document.getElementById("ingredient-options"),dt=document.getElementById("time-trigger-text"),gt=document.getElementById("area-trigger-text"),mt=document.getElementById("ingredient-trigger-text"),L=document.getElementById("search"),S=document.getElementById("cancel-btn"),ut=document.getElementById("reset-filter-btn"),N=document.getElementById("loader"),$=document.querySelector(".pagination"),p=document.querySelector(".cards-list"),b=[];let H=[];async function pt(){try{const e=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9")).json();return k(e.results),e.totalPages}catch(t){return A.error({title:"",message:"Sorry! An error occured while fetching recipes. Please try again!",position:"topRight"}),console.error("API verisi alınırken hata oluştu:",t),"hata"}}function k(t){const e=localStorage.getItem("favArr")?JSON.parse(localStorage.getItem("favArr")):[];p.innerHTML="",t.length===0?(p.innerHTML=`
    <div class="no-results-container loader-container">
      <p class="no-results-text">Sorry! No results were found that match your filters.</p>
      <img class="no-results" src="${lt}"></img>
    </div>`,$.classList.add("hidden")):($.classList.remove("hidden"),t.forEach(a=>{const n=Math.round(a.rating),o=5-n,s=`
      <li class="cards-listing" style="background-image: url(${a.preview});">
      <button class="heard-button add-to-fav" data-category="${a.category}" data-id="${a._id}" aria-label="like-btn">
         <svg class="svg-heard add-to-fav" data-id="${a._id}" width="22px" height="22px">
            <use class="add-to-fav svguse" href="${I}#${e.includes(a._id)?"icon-heart-filled":"icon-heart"}"></use>
        </svg></button>

      <div class="card-content-container">
         <div class="text-container">
            <h3 class="card-title">${a.title}</h3>
              <p class="specification-text">${a.description}</p>
          </div>

          <div class="card-rating-container">
              <div class="rating-container">
                  <p class="rating-text">${a.rating.toFixed(1)}</p>
                  <div class="star-container">
                    ${`<svg class="card-star-svg">
                    <use href="${I}#icon-star"></use>
                      </svg>`.repeat(n)}

                    ${`<svg class="card-star-svg">
                    <use href="${I}#icon-emptystar"></use>
                    </svg>`.repeat(o)}
                  </div>    
                </div>
              
            <button class="recipe-button" data-id="${a._id}">See recipe</button>
        </div>      
      </li>
    `;p.insertAdjacentHTML("beforeend",s)}),z())}function z(){document.querySelectorAll(".recipe-button").forEach(e=>{e.addEventListener("click",function(){const a=this.getAttribute("data-id");_(a)})})}function ft(){localStorage.setItem("favArr",JSON.stringify(b)),localStorage.setItem("favArrCategory",JSON.stringify(H))&&JSON.stringify(H)}function yt(t){const e=t.target.closest(".heard-button");if(e){e.dataset.category;const a=e.dataset.id,n=e.querySelector(".svguse");b.includes(a)?(b.splice(b.indexOf(a),1),n.setAttribute("href",`${I}#icon-heart`)):(b.push(a),n.setAttribute("href",`${I}#icon-heart-filled`)),ft()}}p.addEventListener("click",t=>yt(t));document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{pt().then(()=>{z(),F()})},100);const t=localStorage.getItem("favArr");t&&b.push(...JSON.parse(t))});const W=document.getElementById("orderForm"),ht=document.querySelector(".order"),vt=document.querySelector(".close-button");ht.addEventListener("click",t=>bt());vt.addEventListener("click",t=>G());W.addEventListener("submit",t=>{G()});function bt(){document.getElementById("popupOverlay").style.display="block",W.reset()}function G(){document.getElementById("popupOverlay").style.display="none"}const Lt="https://tasty-treats-backend.p.goit.global/api/areas",Et="https://tasty-treats-backend.p.goit.global/api/ingredients";async function It(){try{const t=await fetch(Lt);if(!t.ok)throw new Error("Failed to fetch areas");const e=await t.json();j(e)}catch{j([{name:"Sorry no region to select"}])}}function j(t){t.forEach(e=>{const a=`<li data-area="${e.name}" data-name="area" class="option">${e.name}</li>`;T.insertAdjacentHTML("beforeend",a)})}async function St(){try{const t=await fetch(Et);if(!t.ok)throw new Error("Failed to fetch ingredients");const e=await t.json();D(e)}catch{D([{name:"Sorry no ingredients to select"}])}}function D(t){t.forEach(e=>{const a=`<li data-ingredient="${e._id}" data-name="ingredient" class="option">${e.name}</li>`;x.insertAdjacentHTML("beforeend",a)})}function wt(){for(let t=5;t<=120;t+=5){const e=`<li data-time="${t}" data-name="time" class="option">${t} min</li>`;M.insertAdjacentHTML("beforeend",e)}}function U(){localStorage.setItem("time",""),localStorage.setItem("area",""),localStorage.setItem("ingredient",""),localStorage.setItem("title",""),localStorage.setItem("totalPage",""),localStorage.setItem("category","")}document.addEventListener("DOMContentLoaded",()=>{It(),St(),wt(),U()});let i="https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9";async function R(t){try{p.innerHTML="",O();const e=await fetch(t);if(!e.ok)throw new Error("An error occurred while fetching recipes");const a=await e.json();localStorage.setItem("totalPage",a.totalPages?a.totalPages:1),u(1,"form-read"),k(a.results)}catch(e){A.error({title:"",message:"Sorry! An error occurred while fetching recipes please try again!",position:"topRight"}),console.log(e.message)}finally{q()}}function $t(t,e){if(e.target.tagName!=="LI")return;const a=localStorage.getItem("category"),n=document.getElementById(`${t}-trigger-text`),o=document.getElementById(`${t}-options`),s=e.target.dataset[t];n.textContent=e.target.textContent,localStorage.setItem(`${t}`,s),i=i.includes(t)?i.replace(new RegExp(`${t}=[^&]*`),`${t}=${s}`):`${i}&${t}=${s}`,i=i.includes("category")?i.replace(/category=[^&]*/,`category=${a}`):`${i}&category=${a}`,o.classList.add("hidden-dropdown"),n.classList.add("trigger-active"),console.log(i),R(i)}const J=Z(function(){L.value!==""?S.classList.remove("hidden"):S.classList.add("hidden");const t=localStorage.getItem("category"),e=localStorage.getItem("time"),a=localStorage.getItem("area"),n=localStorage.getItem("ingredient"),o=L.value.trim();i=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${t}&page=1&limit=9&time=${e}&area=${a}&ingredient=${n}&title=${o}`,localStorage.setItem("title",L.value?o:""),R(i)},300);function V(){i="https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=1&limit=9",[dt,gt,mt].forEach(e=>{e.textContent="Select",e.classList.remove("trigger-active")}),L.value="",document.querySelectorAll(".category-btn").forEach(e=>{e.style.color=""}),S.classList.add("hidden"),U(),R(i)}function kt(){L.value="",S.classList.add("hidden"),J()}function O(){N.classList.remove("hidden"),$.classList.add("hidden-pagination")}function q(){N.classList.add("hidden"),$.classList.remove("hidden-pagination")}function Q(){[M,T,x].forEach(t=>t.classList.add("hidden-dropdown"))}function Bt(t){B&&!B.contains(t.target)&&Q()}function Ct(t){let e=t.target.id;switch((t.target.tagName==="svg"||t.target.tagName==="SPAN")&&(e=t.target.parentElement.id),e){case"time-trigger":M.classList.toggle("hidden-dropdown");break;case"area-trigger":T.classList.toggle("hidden-dropdown");break;case"ingredient-trigger":x.classList.toggle("hidden-dropdown");break;default:if(t.target.tagName==="LI"){const a=t.target.dataset.name;$t(a,t)}else Q()}}B.addEventListener("click",t=>Ct(t));L.addEventListener("input",J);S.addEventListener("click",kt);ut.addEventListener("click",V);window.addEventListener("click",t=>Bt(t));const At=document.querySelector(".pagination"),Mt=document.querySelectorAll(".page-number"),Tt=document.getElementById("singleLeft"),xt=document.getElementById("singleRight"),Rt=document.getElementById("doubleLeft"),Ot=document.getElementById("doubleRight");let l=1,d=1,X=null;async function qt(){d=await Ht(),X=d,Y()}async function Pt(t){p.innerHTML="",O();try{const e=await fetch(t);if(!e.ok)throw new Error("An error occurred while fetching recipes");const a=await e.json();k(a.results)}catch{A.error({title:"",message:"Sorry! An error occurred while fetching recipes please try again!",position:"topRight"})}finally{q()}}async function Ht(){try{return(await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=9")).json()).totalPages}catch(t){return console.error("API verisi alınırken hata oluştu:",t),1}}function Y(){let t=-1;l==d&&d!=1&&(t=-2),l!=d&&l==1&&(t=0),Mt.forEach((e,a)=>{const n=l+t+a;e.textContent=n,e.classList.toggle("active-page",n==l),e.style.display=n>0&&n<=d?"inline-block":"none"}),Tt.disabled=l==1,Rt.disabled=l==1,xt.disabled=l==d,Ot.disabled=l==d}function u(t,e){d=localStorage.getItem("totalPage")?Number(localStorage.getItem("totalPage")):X,t>=1&&t<=d&&(l=t,Y()),e=="page-number"&&jt(t)}function jt(t){const e=localStorage.getItem("time"),a=localStorage.getItem("category")?localStorage.getItem("category"):"",n=localStorage.getItem("area"),o=localStorage.getItem("ingredient"),s=localStorage.getItem("title");Pt(`https://tasty-treats-backend.p.goit.global/api/recipes?category=${a}&page=${t}&limit=9&time=${e}&area=${n}&ingredient=${o}&title=${s}`)}At.addEventListener("click",t=>{t.target.classList.contains("page-number")?u(parseInt(t.target.textContent),"page-number"):t.target.id==="singleLeft"?u(l-1,"page-number"):t.target.id==="singleRight"?u(l+1,"page-number"):t.target.id==="doubleLeft"?u(1,"page-number"):t.target.id==="doubleRight"&&u(d,"page-number")});document.addEventListener("DOMContentLoaded",qt);const Dt=document.querySelector(".category-items-list"),Ft=document.querySelector(".categories-button");async function _t(){const t="https://tasty-treats-backend.p.goit.global/api/categories";localStorage.setItem("category","");try{const n=(await(await fetch(t)).json()).map(o=>o.name);Wt(n),zt()}catch(e){console.log(e+"fetching categories")}}async function Nt(t){const e=localStorage.getItem("time"),a=localStorage.getItem("area"),n=localStorage.getItem("ingredient"),o=localStorage.getItem("title");console.log("boş",e,a,n);const s=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${t}&page=1&limit=9&time=${e}&area=${a}&ingredient=${n}&title=${o}`;try{p.innerHTML="",O();const g=await(await fetch(s)).json();localStorage.setItem("totalPage",g.totalPages?g.totalPages:1),localStorage.setItem("category",t);const c=g.results;k(c)}catch(f){console.log(f+"fetching chosen category recipes")}finally{q(),u(1,"category-list")}}function zt(){const t=document.querySelectorAll(".category-btn");t.forEach(e=>{e.addEventListener("click",a=>{t.forEach(o=>{o.style.color=""}),a.target.style.color="var(--primary-color)";let n=a.target.innerText;localStorage.setItem("category",n),Nt(n)})})}function Wt(t){t.forEach(e=>{Dt.innerHTML+=`
            <li class="category-items"><button class="category-btn">${e}</button></li>
        `})}Ft.addEventListener("click",V);document.addEventListener("DOMContentLoaded",_t);document.addEventListener("DOMContentLoaded",()=>{F(),Gt()});async function Gt(){try{const a=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json(),n=document.querySelector("#popular-recipes-gallery");n.innerHTML="";const o=document.createDocumentFragment();a.forEach((s,f)=>{const g=document.createElement("li"),c=document.createElement("div");c.classList.add("recipe-container"),(f===2||f===3)&&c.classList.add("mobile-special");const y=document.createElement("img");y.src=s.preview||"default-image.jpg",y.alt=s.title||"Unknown Recipe",y.addEventListener("click",()=>{s._id?_(s._id):console.warn("Recipe ID is undefined!")});const h=document.createElement("div");h.classList.add("recipe-content");const v=document.createElement("h2");v.textContent=s.title||"Unknown Recipe",v.classList.add("recipe-content-title");const r=document.createElement("p");r.textContent=s.description||"No instructions provided",r.classList.add("recipe-content-instructions"),h.appendChild(v),h.appendChild(r),c.appendChild(y),c.appendChild(h),g.appendChild(c),o.appendChild(g)}),n.appendChild(o)}catch(t){console.error("Error fetching data:",t)}}const C=document.getElementById("scrollBtn");function Ut(){window.scrollY>300?C.style.display="block":C.style.display="none"}function Jt(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",Ut);C.addEventListener("click",t=>Jt(t));document.addEventListener("DOMContentLoaded",function(){function t(){let o=document.getElementById("myModal");o&&(o.style.display="block")}function e(){let o=document.getElementById("myModal");o&&(o.style.display="none")}let a=document.getElementById("openModalBtn"),n=document.getElementById("closeModelBtn");a&&a.addEventListener("click",t),n&&n.addEventListener("click",e)});
//# sourceMappingURL=index.js.map
