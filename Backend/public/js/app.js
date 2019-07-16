!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.register=void 0;var r="second_minute_hour_day_week_month_year".split("_"),i="秒_分钟_小时_天_周_个月_年".split("_"),c=function(e,t){if(0===t)return["just now","right now"];var n=r[parseInt(t/2)];return e>1&&(n+="s"),["".concat(e," ").concat(n," ago"),"in ".concat(e," ").concat(n)]},a={en_US:c,zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var n=i[parseInt(t/2)];return["".concat(e," ").concat(n,"前"),"".concat(e," ").concat(n,"后")]}};t.register=function(e,t){a[e]=t};t.getLocale=function(e){return a[e]||c}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var r=[60,60,24,7,365/7/12,12],i=function(e){return parseInt(e)};t.toInt=i;var c=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(i(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))};t.toDate=c;t.formatDiff=function(e,t){for(var n=0,c=e<0?1:0,a=e=Math.abs(e);e>=r[n]&&n<r.length;n++)e/=r[n];return(e=i(e))>(0==(n*=2)?9:1)&&(n+=1),t(e,n,a)[c].replace("%s",e)};t.diffSec=function(e,t){return((t=t?c(t):new Date)-c(e))/1e3};t.nextInterval=function(e){for(var t=1,n=0,i=Math.abs(e);e>=r[n]&&n<r.length;n++)e/=r[n],t*=r[n];return i=(i%=t)?t-i:t,Math.ceil(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"format",{enumerable:!0,get:function(){return r.format}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return i.render}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return i.cancel}}),Object.defineProperty(t,"register",{enumerable:!0,get:function(){return c.register}}),t.version=void 0;var r=n(4),i=n(5),c=n(1);t.version="4.0.0-beta.2"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;var r=n(2),i=n(1);t.format=function(e,t,n){var c=(0,r.diffSec)(e,n);return(0,r.formatDiff)(c,(0,i.getLocale)(t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.cancel=void 0;var r=n(6),i=n(2),c=n(1),a={},o=function(e){clearTimeout(e),delete a[e]},s=function e(t,n,c,s){o((0,r.getTimerId)(t));var d=(0,i.diffSec)(n,s);t.innerHTML=(0,i.formatDiff)(d,c);var u=setTimeout(function(){e(t,n,c,s)},1e3*(0,i.nextInterval)(d),2147483647);a[u]=0,(0,r.saveTimerId)(t,u)};t.cancel=function(e){if(e)o((0,r.getTimerId)(e));else for(var t in a)o(t)};t.render=function(e,t,n){var i;void 0===e.length&&(e=[e]);for(var a=0;a<e.length;a++){i=e[a];var o=(0,r.getDateAttribute)(i),d=(0,c.getLocale)(t);s(i,o,d,n)}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimerId=t.saveTimerId=t.getDateAttribute=void 0;var r=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0};t.getDateAttribute=function(e){return r(e,"datetime")};t.saveTimerId=function(e,t){return e.setAttribute?e.setAttribute("timeago-tid",t):e.attr?e.attr("timeago-tid",t):void 0};t.getTimerId=function(e){return r(e,"timeago-tid")}},,,function(e,t,n){"use strict";n.r(t);var r=class{constructor(){this.URI="http://localhost:3000/api/recipes"}async getRecipe(){const e=await fetch(this.URI);return await e.json()}async postRecipe(e){const t=await fetch(this.URI,{method:"POST",body:e}),n=await t.json();console.log(n)}async deleteRecipe(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),n=await t.json();console.log(n)}},i=n(3);const c=new r;var a=class{async renderRecipes(){const e=await c.getRecipe(),t=document.getElementById("recipes-cards");t.innerHTML="",e.forEach(e=>{const n=document.createElement("div");n.className="",n.innerHTML=`\n                <div class="card m-2">\n                    <div class="row">\n                        <div class="col-md-4">\n                            <img src="http://localhost:3000${e.imagePath}" alt="" class="img-fluid" />\n                        </div>\n                        <div class="col-md-8">\n                            <div class="card-block px-2">\n                               <h3 class="card-title">${e.title}</h3> \n                               <h5>Ingredients:</h5>\n                               <p class="card-text">${e.ingredients}</p>\n                               <h5>Instructions:</h5>\n                               <p class="card-text">${e.instructions}</p>\n                               <a href="#" class="btn btn-primary delete" _id="${e._id}">\n                                <h3 class="delete" _id="${e._id}">🗑</h3>\n                               </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-footer">\n                        ${Object(i.format)(e.created_at)}\n                    </div>\n                </div>\n            `,t.appendChild(n)})}async addNewRecipe(e){await c.postRecipe(e),this.clearRecipeForm(),this.renderRecipes()}clearRecipeForm(){document.getElementById("recipe-form").reset()}renderMessage(e,t,n){const r=document.createElement("div");r.className=`alert alert-${t} message`,r.appendChild(document.createTextNode(e));const i=document.querySelector(".col-md-4"),c=document.querySelector("#recipe-form");i.insertBefore(r,c),setTimeout(()=>{document.querySelector(".message").remove()},n)}async deleteRecipe(e){await c.deleteRecipe(e),this.renderRecipes()}};n(0),document.addEventListener("DOMContentLoaded",()=>{(new a).renderRecipes()}),document.getElementById("recipe-form").addEventListener("submit",e=>{const t=document.getElementById("title").value,n=document.getElementById("ingredients").value,r=document.getElementById("instructions").value,i=document.getElementById("image").files;console.log(t,n,r,i);const c=new FormData;c.append("image",i[0]),c.append("title",t),c.append("ingredients",n),c.append("instructions",r);const o=new a;o.addNewRecipe(c),o.renderMessage("New Recipe Added","success",3e3),e.preventDefault()}),document.getElementById("recipes-cards").addEventListener("click",e=>{if(e.target.classList.contains("delete")){const t=new a;t.deleteRecipe(e.target.getAttribute("_id")),t.renderMessage("Recipe Removed","danger",2e3)}e.preventDefault()})}]);
//# sourceMappingURL=app.js.map