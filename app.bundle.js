"use strict";(self.webpackChunkwebpack_prettier_eslint_template=self.webpackChunkwebpack_prettier_eslint_template||[]).push([[524],{993:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"@layer reset {\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: unset;\n    min-height: 100dvh;\n    min-width: 100dvw;\n  }\n\n  ul {\n    list-style-type: none;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    font: inherit;\n    color: unset;\n    background: unset;\n  }\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  fieldset,\n  button {\n    border: none;\n  }\n\n  :focus {\n    outline: 0;\n  }\n\n  img,\n  picture,\n  svg,\n  canvas {\n    display: block;\n    max-inline-size: 100%;\n    block-size: auto;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: unset;\n    font-size: unset;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n}\n",""]);const s=a},919:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);"]),a.push([n.id,":root {\n  --color-dark: #1a1a1a;\n  --color-light: #f0f0f0;\n  --color-light-100: #e0e0e0;\n  --color-light-200: #d0d0d0;\n  --font-size-base: clamp(14px, calc(12px + 0.5vw), 18px);\n  --width-aside: 100dvw;\n}\n\nbody {\n  color: var(--color-dark);\n  font-family: Raleway, sans-serif;\n  font-size: var(--font-size-base);\n  display: flex;\n  flex-direction: column;\n}\n\nsvg {\n  height: 1.2em;\n  width: 1.2em;\n}\n\nheader {\n  background-color: var(--color-dark);\n  color: var(--color-light);\n  font-weight: 400;\n  padding: 0.8em;\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n  font-size: 1.5rem;\n  position: sticky;\n}\n\nheader svg {\n  stroke: var(--color-light);\n}\n\n#menu-btn {\n  margin-left: auto;\n  transition: transform 0.3s ease;\n}\n\n.rotated-180 {\n  transform: rotate(-180deg);\n}\n\nmain {\n  flex: 1;\n  background-color: var(--color-light);\n  position: relative;\n  display: flex;\n  overflow-x: hidden;\n}\n\nsection {\n  padding: 1.75em;\n  flex: 1;\n  font-size:  1rem;\n}\n\nsection h2 {\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\nnav {\n  background: var(--color-light-100);\n  font-size: 1rem;\n  font-weight: 500;\n  padding: 1.25em;\n  position: absolute;\n  top: 0;\n  right: -100dvw;\n  width: 100dvw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  transition: right 0.3s ease;\n  z-index: 99;\n}\n\n.nav-visible {\n  right: 0;\n}\n\nnav h2 {\n  font-size: 1.25em;\n  font-weight: 600;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2em;\n}\n\nnav button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 0.8em;\n  padding: 0.6em;\n  border-radius: 0.2em;\n  cursor: pointer;\n}\n\nnav button:hover {\n  background-color: var(--color-light-200);\n}\n\nnav svg {\n  stroke: var(--color-dark);\n}\n\n@media only screen and (min-width: 421px) {\n  nav {\n    padding: 1.5em;\n    width: max-content;\n    min-width: 17.5em;\n    max-width: 22.5em;\n  }\n}\n\n@media only screen and (min-width: 769px) {\n  header {\n    font-size: 1.75rem;\n    padding: 1em;\n    position: relative;\n  }\n\n  section {\n    padding: 2.25em;\n  }\n\n  nav {\n    position: relative;\n    right: unset;\n    height: unset;\n  }\n\n  #menu-btn {\n    display: none;\n  }\n}\n",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},16:(n,e,t)=>{var o=t(72),r=t.n(o),i=t(825),a=t.n(i),s=t(659),c=t.n(s),l=t(56),d=t.n(l),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(993),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;var g=t(919),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),r()(g.A,b),g.A&&g.A.locals&&g.A.locals;const y=document.createElement("div");y.classList.add("content"),y.innerHTML="<h2>Inbox</h2>";const x=y;document.querySelector("#menu-btn").addEventListener("click",(()=>{document.querySelector("nav").classList.toggle("nav-visible")})),document.querySelector("#menu-btn").addEventListener("click",(n=>{n.currentTarget.classList.toggle("rotated-180")})),document.querySelector("#inbox-btn").addEventListener("click",(()=>{document.querySelector("main").appendChild(x)}))}},n=>{n(n.s=16)}]);