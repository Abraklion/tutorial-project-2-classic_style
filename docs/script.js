!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t};var l=()=>{let e=!1;function t(t,n,l){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const s=document.querySelectorAll(t),a=document.querySelector(n),i=document.querySelector(l),d=document.querySelectorAll("[data-modal]"),u=document.documentElement.offsetWidth>991?o():0,m=()=>{d.forEach(e=>{e.style.display="none",e.classList.add("animated","fadeIn")})};s.forEach(t=>{t.addEventListener("click",n=>{n.target&&n.preventDefault(),e=!0,c&&t.remove(),m(),a.style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=u+"px"})}),i.addEventListener("click",()=>{m(),a.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px"}),a.addEventListener("click",e=>{e.target===a&&r&&(m(),a.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px")})}var n;t(".button-design",".popup-design",".popup-design .popup-close"),t(".button-consultation",".popup-consultation",".popup-consultation .popup-close"),t(".fixed-gift",".popup-gift",".popup-gift .popup-close",!0,!0),n=".fixed-gift",window.addEventListener("scroll",(function t(){let o=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);!e&&Math.ceil(window.scrollY+document.documentElement.clientHeight)>=o&&(document.querySelector(n).click(),window.removeEventListener("scroll",t))})),function(e,t){setTimeout((function(){let t,n=document.documentElement.offsetWidth>991?o():0;document.querySelectorAll("[data-modal]").forEach(e=>{"none"!==getComputedStyle(e).display&&(t="block")}),t||(document.querySelector(e).style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=n+"px")}),t)}(".popup-consultation",5e4)};var r=(e,t,n,o)=>{let l=1,r=!1;const c=document.querySelectorAll(e);function s(e){e>c.length&&(l=1),e<1&&(l=c.length),c.forEach(e=>{e.classList.add("animated","fadeIn"),e.style.display="none"}),c[l-1].style.display="block"}function a(e){s(l+=e)}s(l);try{const e=document.querySelector(n),t=document.querySelector(o);e.addEventListener("click",()=>{a(-1)}),t.addEventListener("click",()=>{a(1)})}catch(e){}function i(){r=setInterval((function(){a(1)}),5e3)}i(),c[0].parentNode.addEventListener("mouseenter",()=>{clearInterval(r)}),c[0].parentNode.addEventListener("mouseleave",()=>{i()})};var c=e=>{function t(e){let t=0,n="+7 (___) ___ __ __".replace(/\D/g,""),o=this.value.replace(/\D/g,"");n.length>=o.length&&(o=n),this.value="+7 (___) ___ __ __".replace(/./g,(function(e){return/[_\d]/.test(e)&&t<o.length?o.charAt(t++):t>=o.length?"":e})),"blur"===e.type?2===this.value.length&&(this.value=""):((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}})(this.value.length,this)}document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)})};var s=e=>{document.querySelectorAll(e).forEach(e=>{e.addEventListener("keypress",(function(e){e.key.match(/[^а-яё 0-9]/gi)&&e.preventDefault()}))})};var a=()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll("input"),n=document.querySelectorAll('[name="upload"]');c('[name="phone"]'),s('[name="name"]'),s('[name="message"]');const o="Загрузка...",l="Спасибо! Скоро мы с вами свяжемся",r="Что-то пошло не так...",a="assets/img/spinner.gif",i="assets/img/ok.png",d="assets/img/fail.png",u="assets/server.php",m="assets/question.php";n.forEach(e=>{e.addEventListener("input",()=>{let t;console.log(e.files[0]);const n=e.files[0].name.split(".");t=n[0].length>6?"...":".";const o=n[0].substring(0,6)+t+n[1];e.previousElementSibling.textContent=o})}),e.forEach(e=>{e.addEventListener("submit",c=>{c.preventDefault();let s=document.createElement("div");s.classList.add("status"),e.parentNode.appendChild(s),e.classList.add("animated","fadeOutUp"),setTimeout(()=>{e.style.display="none"},400);let p=document.createElement("img");p.setAttribute("src",a),p.classList.add("animated","fadeInUp"),s.appendChild(p);let y=document.createElement("div");y.textContent=o,s.appendChild(y);const f=new FormData(e);let v;console.log(f),v=e.closest(".popup-design")||e.classList.contains("calc_form")?u:m,console.log(v),(async(e,t)=>{let n=await fetch(e,{method:"POST",body:t});return await n.text()})(v,f).then(e=>{console.log(e),p.setAttribute("src",i),y.textContent=l}).catch(()=>{p.setAttribute("src",d),y.textContent=r}).finally(()=>{t.forEach(e=>{e.value=""}),n.forEach(e=>{e.previousElementSibling.textContent="Файл не выбран"}),setTimeout(()=>{s.remove(),e.style.display="block",e.classList.remove("fadeOutUp"),e.classList.add("fadeInUp")},5e3)})})})};var i=(e,t)=>{document.querySelector(e).addEventListener("click",(function(){(async e=>{let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("assets/db.json").then(e=>{e.styles.forEach(e=>{let{src:n,title:o,link:l}=e,r=document.createElement("div");r.classList.add("animated","fadeInUp","col-sm-3","col-sm-offset-0","col-xs-10","col-xs-offset-1"),r.innerHTML=`\n          <div class="styles-block">\n              <img src=${n} alt="style">\n              <h4>${o}</h4>\n              <a href=${l}>Подробнее</a>\n          </div>\n      `,document.querySelector(t).appendChild(r)})}).catch(e=>console.log(e)),this.remove()}))};var d=(e,t,n,o,l)=>{const r=document.querySelector(e),c=document.querySelector(t),s=document.querySelector(n),a=document.querySelector(o),i=document.querySelector(l);let d=0;const u=()=>{d=Math.round(+r.value*+c.value+ +s.value),r.value&&c.value?"IWANTPOPART"===a.value.trim()?i.textContent=Math.round(.7*d):i.textContent=d:i.textContent="Пожалуйста, выберите размер и материал картины"};r.addEventListener("change",u),c.addEventListener("change",u),s.addEventListener("change",u),a.addEventListener("input",u)};var u=()=>{const e=document.querySelector(".portfolio-menu"),t=e.querySelectorAll("li"),n=e.querySelector(".all"),o=e.querySelector(".lovers"),l=e.querySelector(".chef"),r=e.querySelector(".girl"),c=e.querySelector(".guy"),s=e.querySelector(".grandmother"),a=e.querySelector(".granddad"),i=document.querySelector(".portfolio-wrapper"),d=i.querySelectorAll(".all"),u=i.querySelectorAll(".girl"),m=i.querySelectorAll(".lovers"),p=i.querySelectorAll(".chef"),y=i.querySelectorAll(".guy"),f=document.querySelector(".portfolio-no"),v=e=>{d.forEach(e=>{e.style.display="none",e.classList.remove("animated","fadeIn")}),f.style.display="none",f.classList.remove("animated","fadeIn"),e?e.forEach(e=>{e.style.display="block",e.classList.add("animated","fadeIn")}):(f.style.display="block",f.classList.add("animated","fadeIn"))};n.addEventListener("click",()=>{v(d)}),o.addEventListener("click",()=>{v(m)}),l.addEventListener("click",()=>{v(p)}),c.addEventListener("click",()=>{v(y)}),r.addEventListener("click",()=>{v(u)}),s.addEventListener("click",()=>{v()}),a.addEventListener("click",()=>{v()}),e.addEventListener("click",e=>{let n=e.target;n&&"LI"===n.tagName&&(t.forEach(e=>e.classList.remove("active")),n.classList.add("active"))})};var m=e=>{document.querySelectorAll(e).forEach(e=>{e.addEventListener("mouseover",()=>{!function(e){const t=e.querySelector("img");t.src=t.src.slice(0,-4)+"-1.png",e.querySelectorAll("p:not(.sizes-hit)").forEach(e=>{e.style.display="none"})}(e)}),e.addEventListener("mouseout",()=>{!function(e){const t=e.querySelector("img");t.src=t.src.slice(0,-6)+".png",e.querySelectorAll("p:not(.sizes-hit)").forEach(e=>{e.style.display="block"})}(e)})})};var p=e=>{const t=document.querySelectorAll(e);t.forEach(e=>{e.addEventListener("click",(function(){t.forEach(e=>{this===e?(this.classList.toggle("active-style"),this.nextElementSibling.classList.toggle("active-content")):(e.classList.remove("active-style"),e.nextElementSibling.classList.remove("active-content"))})}))})};var y=(e,t)=>{const n=document.querySelector(e),o=document.querySelector(t);n.style.display="none",o.addEventListener("click",()=>{"none"===n.style.display&&window.screen.availWidth<993?n.style.display="block":n.style.display="none"}),window.addEventListener("resize",()=>{window.screen.availWidth>992&&(n.style.display="none")})};var f=e=>{const t=document.querySelector(e);window.addEventListener("scroll",()=>{document.documentElement.scrollTop>1650?(t.classList.add("animated","fadeIn"),t.classList.remove("fadeOut")):(t.classList.add("fadeOut"),t.classList.remove("fadeIn"))});let n=document.querySelectorAll('[href^="#"]');n.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=document.documentElement.scrollTop,n=this.hash,o=document.querySelector(n).getBoundingClientRect().top,l=null;requestAnimationFrame((function e(r){null===l&&(l=r);let c=r-l,s=o<0?Math.max(t-c/.15,t+o):Math.min(t+c/.15,t+o);document.documentElement.scrollTo(0,s),s!==t+o?requestAnimationFrame(e):location.hash=n}))}))})};var v=()=>{const e=document.querySelectorAll('[name="upload"]');function t(e){e.preventDefault(),e.stopPropagation()}["dragenter","dragleave","dragover","drop"].forEach(n=>{e.forEach(e=>{e.addEventListener(n,t,!1)})}),["dragenter","dragover"].forEach(t=>{e.forEach(e=>{e.addEventListener(t,()=>{return(t=e).closest(".file_upload").style.border="5px solid yellow",void(t.closest(".file_upload").style.backgroundColor="rgba(0,0,0, .7)");var t},!1)})}),["dragleave","drop"].forEach(t=>{e.forEach(e=>{e.addEventListener(t,()=>{return(t=e).closest(".file_upload").style.border="none",void(t.closest(".calc_form")?t.closest(".file_upload").style.backgroundColor="#fff":t.closest(".file_upload").style.backgroundColor="#ededed");var t},!1)})}),e.forEach(e=>{e.addEventListener("drop",t=>{let n;e.files=t.dataTransfer.files;const o=e.files[0].name.split(".");n=o[0].length>6?"...":".";const l=o[0].substring(0,6)+n+o[1];e.previousElementSibling.textContent=l})})};window.addEventListener("DOMContentLoaded",()=>{l(),r(".feedback-slider-item","horizontal",".main-prev-btn",".main-next-btn"),r(".main-slider-item","vertical"),a(),i(".button-styles","#styles .row"),d("#size","#material","#options",".promocode",".calc-price"),u(),m(".sizes-block"),p(".accordion-heading"),y(".burger-menu",".burger"),f(".pageup"),v()})}]);