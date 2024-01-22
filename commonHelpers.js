import{a as v,S as w}from"./assets/vendor-fb3f8fa5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m=document.querySelector(".picture-search-form"),q=document.querySelector(".picture-search-name"),g=document.querySelector(".loader-container"),n=document.querySelector(".load-more-button"),S="41936326-90791e165aae4a5a35ea2cbc6";let a=1;const y=40;let p="";function k(){g.style.display="block"}function h(){g.style.display="none"}async function L(l,o){p=l;const c={key:S,q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:y},i=new URLSearchParams(c);k();try{const e=await v.get(`https://pixabay.com/api/?${i}`);h();const{hits:t,totalHits:r}=e.data,d=document.querySelector(".gallery"),f=new w(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});f.refresh(),o===1&&(d.innerHTML="");const b=t.reduce((u,s)=>u+`<a class="gallery-link" href="${s.largeImageURL}">
            <img
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${s.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${s.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${s.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${s.downloads}</p>
              </li>
            </ul>
        </a>`,"");if(d.insertAdjacentHTML("beforeend",b),f.refresh(),o*y>=r)n.style.display="none",iziToast.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{n.style.display="block";const u=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:u*2,behavior:"smooth"})}}catch(e){h(),iziToast.error({title:"Error",message:e.message,position:"topRight"})}}m.addEventListener("submit",l=>{l.preventDefault();const o=q.value.trim();a=1,n.style.display="none",L(o,a),m.reset()});n.addEventListener("click",()=>{a+=1,L(p,a)});
//# sourceMappingURL=commonHelpers.js.map
