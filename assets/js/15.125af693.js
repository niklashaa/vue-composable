(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{155:function(t,e,n){var r=n(10),i=n(73),o=n(3)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||null==(n=r(u)[o])?e:i(n)}},156:function(t,e,n){var r=n(4),i=n(111);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},157:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},158:function(t,e,n){"use strict";var r=n(105),i=n(10),o=n(16),u=n(17),l=n(106),c=n(107);r("match",1,(function(t,e,n){return[function(e){var n=u(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var u=i(t),a=String(this);if(!u.global)return c(u,a);var s=u.unicode;u.lastIndex=0;for(var f,p=[],v=0;null!==(f=c(u,a));){var d=String(f[0]);p[v]=d,""===d&&(u.lastIndex=l(a,o(u.lastIndex),s)),v++}return 0===v?null:p}]}))},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(157);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},160:function(t,e,n){n(2)({target:"Array",stat:!0},{isArray:n(48)})},161:function(t,e,n){"use strict";var r=n(2),i=n(50),o=n(13),u=n(34),l=[].join,c=i!=Object,a=u("join",",");r({target:"Array",proto:!0,forced:c||!a},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},162:function(t,e,n){"use strict";var r=n(2),i=n(110).trim;r({target:"String",proto:!0,forced:n(156)("trim")},{trim:function(){return i(this)}})},163:function(t,e,n){"use strict";var r=n(105),i=n(109),o=n(10),u=n(17),l=n(155),c=n(106),a=n(16),s=n(107),f=n(51),p=n(4),v=[].push,d=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(u(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var l,c,a,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,p+"g");(l=f.call(g,r))&&!((c=g.lastIndex)>d&&(s.push(r.slice(d,l.index)),l.length>1&&l.index<r.length&&v.apply(s,l.slice(1)),a=l[0].length,d=c,s.length>=o));)g.lastIndex===l.index&&g.lastIndex++;return d===r.length?!a&&g.test("")||s.push(""):s.push(r.slice(d)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=u(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var u=n(r,t,this,i,r!==e);if(u.done)return u.value;var f=o(t),p=String(this),v=l(f,RegExp),h=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),y=new v(g?f:"^(?:"+f.source+")",b),m=void 0===i?4294967295:i>>>0;if(0===m)return[];if(0===p.length)return null===s(y,p)?[p]:[];for(var w=0,O=0,x=[];O<p.length;){y.lastIndex=g?O:0;var j,S=s(y,g?p:p.slice(O));if(null===S||(j=d(a(y.lastIndex+(g?0:O)),p.length))===w)O=c(p,O,h);else{if(x.push(p.slice(w,O)),x.length===m)return x;for(var I=1;I<=S.length-1;I++)if(x.push(S[I]),x.length===m)return x;O=w=j}}return x.push(p.slice(w)),x}]}),!g)},164:function(t,e,n){"use strict";var r=n(2),i=n(4),o=n(48),u=n(9),l=n(18),c=n(16),a=n(70),s=n(108),f=n(49),p=n(3),v=n(112),d=p("isConcatSpreadable"),g=v>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=f("concat"),b=function(t){if(!u(t))return!1;var e=t[d];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!g||!h},{concat:function(t){var e,n,r,i,o,u=l(this),f=s(u,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?u:arguments[e],b(o)){if(p+(i=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,p++)n in o&&a(f,p,o[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(f,p++,o)}return f.length=p,f}})},165:function(t,e,n){"use strict";var r=n(2),i=n(72),o=n(35),u=n(16),l=n(18),c=n(108),a=n(70),s=n(49),f=n(15),p=s("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,e){var n,r,s,f,p,v,h=l(this),b=u(h.length),y=i(t,b),m=arguments.length;if(0===m?n=r=0:1===m?(n=0,r=b-y):(n=m-2,r=g(d(o(e),0),b-y)),b+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=c(h,r),f=0;f<r;f++)(p=y+f)in h&&a(s,f,h[p]);if(s.length=r,n<r){for(f=y;f<b-r;f++)v=f+n,(p=f+r)in h?h[v]=h[p]:delete h[v];for(f=b;f>b-r+n;f--)delete h[f-1]}else if(n>r)for(f=b-r;f>y;f--)v=f+n-1,(p=f+r-1)in h?h[v]=h[p]:delete h[v];for(f=0;f<n;f++)h[f+y]=arguments[f+2];return h.length=b-r+n,s}})},166:function(t,e,n){n(2)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},167:function(t,e,n){var r=n(14),i=Date.prototype,o=i.toString,u=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=u.call(this);return t==t?o.call(this):"Invalid Date"}))},168:function(t,e,n){var r=n(2),i=n(5),o=n(113),u=[].slice,l=function(t){return function(e,n){var r=arguments.length>2,i=r?u.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:l(i.setTimeout),setInterval:l(i.setInterval)})},169:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},171:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return r}))},336:function(t,e,n){"use strict";n.r(e);var r=n(206),i={name:"performance-now-example",setup:function(){return Object(r.x)()}},o=n(19),u=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    Performance.now : "),n("b",[t._v(t._s(t.now))])]),t._v(" "),n("p",[t._v("\n    Created "),n("b",[t._v(t._s(Math.floor(t.now/1e3)))]),t._v(" seconds ago\n  ")])])}),[],!1,null,null,null);e.default=u.exports}}]);