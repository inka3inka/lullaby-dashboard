!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1);var o=n(6),r=n(7),i=document.querySelector(".select-list");window.addEventListener("DOMContentLoaded",(function(){var e=new Request("../configuration.json");fetch(e).then((function(e){return e.json()})).then((function(e){(0,o.loadVideo)(e),(0,o.loadList)(e,0),(0,o.select)(e),i.addEventListener("click",(function(){return(0,o.loadList)(e,i.options[i.selectedIndex].value)}))})),(0,r.showTime)()}))},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}:focus{outline:none}body{background-color:#000;position:relative;height:100vh}@media (orientation:landscape){body{overflow:hidden}}.container{display:flex;flex-direction:column-reverse;align-items:center;justify-content:flex-end;width:100%;min-height:100%;padding:5vw;color:#fff;font-family:Roboto,sans-serif}@media (orientation:landscape){.container{flex-direction:row;align-items:flex-start;justify-content:space-between}}.container>div{display:flex;flex-direction:column;align-items:center}@media (orientation:landscape){.container>div{width:40%;padding-left:2vw;height:50vh}}.container>div figure{height:0;padding-bottom:56.25%;position:relative;width:100%}.container>div iframe{border:1px solid #b2b2b2;width:100%;height:100%;left:0;position:absolute;top:0}.container>div .clock{padding:5vw;font-size:15vw;font-weight:700}@media (orientation:landscape){.container>div .clock{font-size:10vw}}.list{display:flex;flex-direction:column;justify-content:center;width:80%;font-size:26px;font-weight:700;text-transform:uppercase;padding-left:4vw}@media (orientation:landscape){.list{width:50%;overflow:auto;height:80vh;justify-content:flex-start}}.list-name{margin-bottom:3vh}li{font-size:18px;padding:1vw .5vw;text-transform:none;font-weight:400}@media (orientation:landscape){li{font-size:22px}}.list-element{display:flex;justify-content:space-between;padding-right:1vw;position:relative;cursor:pointer}.list-element:hover{background-color:#b2b2b2}.checked{text-decoration:line-through}.checked:before{content:"";position:absolute;border-color:#fff;border-style:solid;border-width:0 2px 2px 0;transform:rotate(45deg);height:15px;width:7px;left:-5vw}@media (orientation:landscape){.checked:before{left:-3vw}}.list-element__edit{display:flex;flex-direction:row}.checkbox{padding:2vw;width:18px;height:18px}@media (orientation:landscape){.checkbox{width:20px;height:20px}}.select{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:3vh}.select>*{margin:.5vw;font-size:16px;padding:5px 10px;border-radius:5px;cursor:pointer}.select>:hover{background-color:#b2b2b2}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=s.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),l=null,u=0,d=[],f=n(5);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function b(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertAt.before,n);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return g(t,e.attrs),b(e,t),t}function g(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=l||(l=m(t)),o=j.bind(null,n,a,!1),r=j.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),b(e,t),t}(t),o=L.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),o=k.bind(null,n),r=function(){v(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}e&&p(h(e,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function j(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function k(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function L(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadVideo=function(e){i.setAttribute("src",e.embeddedYoutubeVideo)},t.select=function(e){e.savedLists.map((function(e,t){var n=document.createElement("option");a.appendChild(n),n.setAttribute("value",t),n.innerHTML=e.label}))},t.loadList=function(e,t){r.innerText="",o.style.backgroundColor=e.savedLists[t].backgroundListColor,e.savedLists[t].toDos.map((function(e){var t=document.createElement("li");r.appendChild(t),t.style.color=e.color,t.classList.add("list-element"),t.innerHTML=e.name,t.addEventListener("click",(function(e){return e.target.classList.toggle("checked")}))}))};document.querySelector(".clock");var o=document.querySelector(".container"),r=(document.querySelector(".list"),document.querySelector(".list-elements")),i=document.querySelector(".video"),a=(document.querySelector(".list-name"),document.querySelector(".button__add-task"),document.querySelector(".list-input"),document.querySelector(".select-list"))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showTime=function(){setInterval((function(){var e=new Date,t=r(e.getHours()),n=r(e.getMinutes());o.innerText=t+":"+n}),1e3)};var o=document.querySelector(".clock");function r(e){return e.toString().padStart(2,"0")}}]);