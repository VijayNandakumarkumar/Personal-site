!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n(1),n(2);var i=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;this.textElement=t,this.textwords=e,this.txt="",this.wordIndex=0,this.wait=parseInt(n,10),this.type(),this.isDeleting=!1};i.prototype.type=function(){var t=this,e=this.wordIndex%this.textwords.length,n=this.textwords[e];this.isDeleting?this.txt=n.substring(0,this.txt.length-1):this.txt=n.substring(0,this.txt.length+1),this.textElement.innerHTML='<span class="txt" id="cursor">'+this.txt+"</span>";var i=300;this.isDeleting&&(i/=5),this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,i=500):(i=this.wait,this.isDeleting=!0),"Developer"!=this.txt?myvar=setTimeout(function(){return t.type()},i):(document.querySelector(".txt").style.animation="blink-caret .75s step-end infinite",setTimeout(function(){window.location.href="index1.html"},3e3),window.addEventListener("click",function(t){window.location.href="index1.html"}))},document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".txt-typ"),e=JSON.parse(t.getAttribute("data-words")),n=t.getAttribute("data-wait");new i(t,e,n)})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.para=document.querySelector("#p1"),e.button=document.querySelector("#bt1")},function(t,e){}]);