!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);var o={div:document.getElementById("timer-1"),days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]'),start:document.querySelector('[data-action ="start"]'),stop:document.querySelector('[data-action ="stop"]')};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return{days:Math.floor(e/1e3/60/60/24),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}}//! На классе
var u=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.date=t,this.refs=n}var t,n,o;return t=e,(n=[{key:"count",value:function(){var e=a(new Date(this.date)-Date.now());this.refs.days.textContent=e.days,this.refs.hours.textContent=e.hours,this.refs.mins.textContent=e.mins,this.refs.secs.textContent=e.seconds}},{key:"start",value:function(){var e=this;setInterval((function(){e.count()}),1e3)}}])&&r(t.prototype,n),o&&r(t,o),e}())("Dec 31 2020",o);console.log(u),u.start();var c={startChange:document.querySelector('[data-action="set-start"]'),stopChange:document.querySelector('[data-action="set-stop"]'),body:document.querySelector("body")};console.log(c);var s=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];function i(){var e,t=s[(e=s.length-1,Math.floor(Math.random()*(e+1)))];console.log(t),document.body.style.backgroundColor=t}console.log(s);var l=void 0;c.startChange.addEventListener("click",(function(e){return l=l||setInterval((function(){return i()}),1e3)})),c.stopChange.addEventListener("click",(function(e){return clearInterval(l)}));n(0)}]);
//# sourceMappingURL=main.bundle.js.map