module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,e,n){"use strict";var o=n(0);n.n(o).a},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function l(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],u=n[s]||0,d="".concat(s," ").concat(u);n[s]=u+1;var f=l(d),c={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(c)):a.push({identifier:d,updater:b(c,e),references:1}),o.push(d)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,f=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function c(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var g=null,h=0;function b(t,e){var n,o,r;if(e.singleton){var i=h++;n=g||(g=u(e)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else n=u(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--}for(var i=s(t,e),u=0;u<n.length;u++){var d=l(n[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(t,e,n){(t.exports=n(4)()).push([t.i,"/*! ========================================================================\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\n * http://www.bootstraptoggle.com\n * ========================================================================\n * Copyright 2014 Min Hur, The New York Times Company\n * Licensed under MIT\n * ======================================================================== */.checkbox-inline .toggle,.checkbox label .toggle{margin-left:-20px;margin-right:5px}.toggle{position:relative;overflow:hidden}.toggle input[type=checkbox]{display:none}.toggle-group{position:absolute;width:200%;top:0;bottom:0;left:0;transition:left .35s;-webkit-transition:left .35s;-moz-user-select:none;-webkit-user-select:none}.toggle.off .toggle-group{left:-100%}.toggle-on{left:0;right:50%}.toggle-off,.toggle-on{position:absolute;top:0;bottom:0;margin:0;border:0;border-radius:0}.toggle-off{left:50%;right:0}.toggle-handle{position:relative;margin:0 auto;padding-top:0;padding-bottom:0;height:100%;width:0;border-width:0 1px}.toggle.btn{min-width:59px;min-height:34px}.toggle-on.btn{padding-right:24px}.toggle-off.btn{padding-left:24px}.toggle.btn-lg{min-width:79px;min-height:45px}.toggle-on.btn-lg{padding-right:31px}.toggle-off.btn-lg{padding-left:31px}.toggle-handle.btn-lg{width:40px}.toggle.btn-sm{min-width:50px;min-height:30px}.toggle-on.btn-sm{padding-right:20px}.toggle-off.btn-sm{padding-left:20px}.toggle.btn-xs{min-width:35px;min-height:22px}.toggle-on.btn-xs{padding-right:12px}.toggle-off.btn-xs{padding-left:12px}\n\n\n/*! ========================================================================\n * Added Additional styles for use without bootstrap\n * ======================================================================== */.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.active,.btn-default:active,.btn-default:focus,.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){"use strict";n.r(e);var o={props:{options:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},initialValue:{type:Boolean,default:!1}},data:()=>({value:!1}),computed:{on(){return null!=this.options.on?this.options.on:"On"},off(){return null!=this.options.off?this.options.off:"Off"}},mounted(){this.value=this.initialValue},methods:{update(){this.disabled||(this.value=!this.value,this.$emit("update",this.value))}}};n(1);var r=function(t,e,n,o,r,i,a,l){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):r&&(s=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var d=u.render;u.render=function(t,e){return s.call(e),d(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toggle btn btn-default",class:{off:!t.value,disabled:t.disabled},attrs:{"data-toggle":"toggle"},on:{click:function(e){return t.update()}}},[n("div",{staticClass:"toggle-group"},[n("label",{staticClass:"btn btn-primary toggle-on"},[t._v(t._s(this.on))]),t._v(" "),n("label",{staticClass:"btn btn-default active toggle-off"},[t._v(t._s(this.off))]),t._v(" "),n("span",{staticClass:"toggle-handle btn btn-default"})])])}),[],!1,null,null,null);e.default=r.exports}]);
//# sourceMappingURL=index.js.map