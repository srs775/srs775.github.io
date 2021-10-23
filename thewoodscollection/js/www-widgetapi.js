(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function w(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
function qa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.G=this.j=null}
function ra(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
qa.prototype.B=function(a){this.i=a};
function sa(a,b){a.j={Fa:b,Ja:!0};a.h=a.s||a.m}
qa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function x(a,b,c){a.h=c;return{value:b}}
qa.prototype.o=function(a){this.h=a};
function ta(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function ua(a){a.s=0;var b=a.j.Fa;a.j=null;return b}
function va(a){a.G=[a.j];a.s=0;a.m=0}
function wa(a){var b=a.G.splice(0)[0];(b=a.j=a.j||b)?b.Ja?a.h=a.s||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function xa(a){this.h=new qa;this.i=a}
function ya(a,b){ra(a.h);var c=a.h.l;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,sa(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,sa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ja)throw b.Fa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){ra(a.h);a.h.l?b=za(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Aa(a));return b};
this.throw=function(b){ra(a.h);a.h.l?b=za(a,a.h.l["throw"],b,a.h.B):(sa(a.h,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function A(a,b){b=new Ba(new xa(b));pa&&a.prototype&&pa(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&Ca(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Da(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||pa});
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Wa),reject:g(this.m)}};
b.prototype.Wa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Ya(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.qa(g):this.s(g)}};
b.prototype.qa=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.Za(h,g):this.s(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.s=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Xa();this.G()};
b.prototype.Xa=function(){var g=this;e(function(){if(g.U()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.G=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Ya=function(g){var h=this.l();g.ga(h.resolve,h.reject)};
b.prototype.Za=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(z){m(z)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.ga(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ga=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ga(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(v){return function(z){r[v]=z;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ga(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Fa(this,function(b,c){return[b,c]})}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Fa(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Fa(this,function(b,c){return c})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Da(this,b,"includes").indexOf(b,c||0)}});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ga(){}
function Ha(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ia(a){var b=Ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Oa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Oa=Ma:Oa=Na;return Oa.apply(null,arguments)}
function E(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Hb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Pa(a){return a}
;function Qa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Qa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.bb=b)}
F(Qa,Error);Qa.prototype.name="CustomError";function Ra(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ua=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Va(a,b){b=Ta(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Wa(a){return Array.prototype.concat.apply([],arguments)}
function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ya(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Za(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function $a(a){var b=ab,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function bb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function cb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=cb(a[c]);return b}
var eb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<eb.length;f++)c=eb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var gb;function hb(a,b){this.h=a===ib&&b||""}
hb.prototype.ba=!0;hb.prototype.aa=function(){return this.h};
function jb(a){return new hb(ib,a)}
var ib={};jb("");var kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function lb(a,b){if(b)a=a.replace(mb,"&amp;").replace(nb,"&lt;").replace(ob,"&gt;").replace(pb,"&quot;").replace(qb,"&#39;").replace(rb,"&#0;");else{if(!sb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(mb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(nb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ob,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(pb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(qb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(rb,"&#0;"))}return a}
var mb=/&/g,nb=/</g,ob=/>/g,pb=/"/g,qb=/'/g,rb=/\x00/g,sb=/[\x00&<>"']/;function tb(a,b){this.h=b===ub?a:""}
n=tb.prototype;n.ba=!0;n.aa=function(){return this.h.toString()};
n.Ia=!0;n.Ga=function(){return 1};
n.toString=function(){return this.h.toString()};
var vb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),wb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ub={},yb=new tb("about:invalid#zClosurez",ub);var zb;a:{var Ab=B.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""}function I(a){return-1!=zb.indexOf(a)}
;function Cb(){return I("Firefox")||I("FxiOS")}
function Db(){return(I("Chrome")||I("CriOS"))&&!I("Edge")}
;var Eb={};function Fb(a,b,c){this.h=c===Eb?a:"";this.i=b;this.ba=this.Ia=!0}
Fb.prototype.Ga=function(){return this.i};
Fb.prototype.aa=function(){return this.h.toString()};
Fb.prototype.toString=function(){return this.h.toString()};
function Gb(a,b){if(void 0===gb){var c=null;var d=B.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:Pa,createScript:Pa,createScriptURL:Pa})}catch(e){B.console&&B.console.error(e.message)}gb=c}else gb=c}a=(c=gb)?c.createHTML(a):a;return new Fb(a,b,Eb)}
;var Hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ib(a){return a?decodeURI(a):a}
function Jb(a){return Ib(a.match(Hb)[3]||null)}
function Kb(a){var b=a.match(Hb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
var Nb=/#|$/;function Ob(a,b){var c=a.search(Nb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function J(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Pb(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Qb(a){Qb[" "](a);return a}
Qb[" "]=Ga;var Rb=I("Opera"),Sb=I("Trident")||I("MSIE"),Tb=I("Edge"),Ub=I("Gecko")&&!(-1!=zb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Vb=-1!=zb.toLowerCase().indexOf("webkit")&&!I("Edge");function Wb(){var a=B.document;return a?a.documentMode:void 0}
var Xb;a:{var Yb="",Zb=function(){var a=zb;if(Ub)return/rv:([^\);]+)(\)|;)/.exec(a);if(Tb)return/Edge\/([\d\.]+)/.exec(a);if(Sb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Vb)return/WebKit\/(\S+)/.exec(a);if(Rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Zb&&(Yb=Zb?Zb[1]:"");if(Sb){var $b=Wb();if(null!=$b&&$b>parseFloat(Yb)){Xb=String($b);break a}}Xb=Yb}var ac=Xb,bc;if(B.document&&Sb){var cc=Wb();bc=cc?cc:parseInt(ac,10)||void 0}else bc=void 0;var dc=bc;Cb();var ec=Pb()||I("iPod"),fc=I("iPad");!I("Android")||Db()||Cb();Db();var gc=I("Safari")&&!(Db()||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||Cb()||I("Silk")||I("Android"))&&!(Pb()||I("iPad")||I("iPod"));var hc={},ic=null;
function jc(a,b){Ia(a);void 0===b&&(b=0);if(!ic){ic={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));hc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ic[h]&&(ic[h]=g)}}}b=hc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var kc="function"===typeof Uint8Array;function lc(a,b,c){if(null!=a)return"object"===typeof a?kc&&a instanceof Uint8Array?c(a):mc(a,b,c):b(a)}
function mc(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),e=0;e<a.length;e++)d[e]=lc(a[e],b,c);Array.isArray(a)&&a.nb&&nc(d);return d}d={};for(e in a)d[e]=lc(a[e],b,c);return d}
function oc(a){return"number"===typeof a?isFinite(a)?a:String(a):a}
function pc(a){return new Uint8Array(a)}
function qc(a){return a}
var rc={nb:{value:!0,configurable:!0}};function nc(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,rc);return a}
;function sc(a,b){this.i=a;this.j=b;this.h={};this.l=!0;if(0<this.i.length){for(a=0;a<this.i.length;a++){b=this.i[a];var c=b[0];this.h[c.toString()]=new tc(c,b[1])}this.l=!0}}
n=sc.prototype;n.isFrozen=function(){return!1};
n.toJSON=function(){var a=this.L(!1);return mc(a,oc,jc)};
n.L=function(a){if(this.l){if(this.j){var b=this.h,c;for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var d=b[c].h;d&&d.L(a)}}}else{this.i.length=0;b=uc(this);b.sort();for(c=0;c<b.length;c++){d=this.h[b[c]];var e=d.h;e&&e.L(a);this.i.push([d.key,d.value])}this.l=!0}return this.i};
n.clear=function(){this.h={};this.l=!1};
n.entries=function(){var a=[],b=uc(this);b.sort();for(var c=0;c<b.length;c++){var d=this.h[b[c]];a.push([d.key,vc(this,d)])}return new wc(a)};
n.keys=function(){var a=[],b=uc(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.h[b[c]].key);return new wc(a)};
n.values=function(){var a=[],b=uc(this);b.sort();for(var c=0;c<b.length;c++)a.push(vc(this,this.h[b[c]]));return new wc(a)};
n.forEach=function(a,b){var c=uc(this);c.sort();for(var d=0;d<c.length;d++){var e=this.h[c[d]];a.call(b,vc(this,e),e.key,this)}};
n.set=function(a,b){var c=new tc(a);this.j?(c.h=b,c.value=b.L(!1)):c.value=b;this.h[a.toString()]=c;this.l=!1;return this};
function vc(a,b){return a.j?(b.h||(b.h=new a.j(b.value),a.isFrozen()&&null(b.h)),b.h):b.value}
n.get=function(a){if(a=this.h[a.toString()])return vc(this,a)};
n.has=function(a){return a.toString()in this.h};
function uc(a){a=a.h;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}
sc.prototype[Symbol.iterator]=function(){return this.entries()};
function tc(a,b){this.key=a;this.value=b;this.h=void 0}
function wc(a){this.i=0;this.h=a}
wc.prototype.next=function(){return this.i<this.h.length?{done:!1,value:this.h[this.i++]}:{done:!0,value:void 0}};
wc.prototype[Symbol.iterator]=function(){return this};var xc;function yc(a,b,c){var d=xc;xc=null;a||(a=d);d=this.constructor.Kb;a||(a=d?[d]:[]);this.l=d?0:-1;this.h=null;this.i=a;a:{d=this.i.length;a=d-1;if(d&&(d=this.i[a],!(null===d||"object"!=typeof d||Array.isArray(d)||kc&&d instanceof Uint8Array))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=null):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.m?(a+=this.l,(d=this.i[a])?nc(d):this.i[a]=zc):(Ac(this),(d=this.j[a])?nc(d):this.j[a]=zc)}
var zc=Object.freeze(nc([]));function Ac(a){var b=a.m+a.l;a.i[b]||(a.j=a.i[b]={})}
function Bc(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.m?a.j?a.j[b]:void 0:a.i[b+a.l]}
function Cc(a,b,c){a.h||(a.h={});if(b in a.h)return a.h[b];var d=Bc(a,b);d||(d=nc([]),Dc(a,b,d));c=new sc(d,c);return a.h[b]=c}
function Dc(a,b,c,d){(void 0===d?0:d)||b>=a.m?(Ac(a),a.j[b]=c):a.i[b+a.l]=c}
function Ec(a,b,c,d){if(-1===c)return null;a.h||(a.h={});a.h[c]||(d=Bc(a,c,void 0===d?!1:d))&&(a.h[c]=new b(d));return a.h[c]}
function Fc(a,b,c){a.h||(a.h={});var d=a.h[c];if(!d){var e=void 0===e?!1:e;d=Bc(a,c,e);null==d&&(d=zc);d===zc&&(d=nc([]),Dc(a,c,d,e));e=d;d=[];for(var f=0;f<e.length;f++)d[f]=new b(e[f]);a.h[c]=d}return d}
yc.prototype.toJSON=function(){var a=this.L(!1);return mc(a,oc,jc)};
yc.prototype.L=function(a){if(this.h)for(var b in this.h){var c=this.h[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].L(a);else c&&c.L(a)}return this.i};
yc.prototype.toString=function(){return this.L(!1).toString()};
yc.prototype.clone=function(){var a=this.constructor,b=mc(this.L(!1),qc,pc);xc=b;a=new a(b);xc=null;Gc(a,this);return a};
function Gc(a,b){b.s&&(a.s=b.s.slice());var c=b.h;if(c){b=b.j;var d={},e;for(e in c){var f=c[e];if(f){var g=!(!b||!b[e]),h=+e;if(Array.isArray(f)){if(f.length)for(g=Fc(a,f[0].constructor,h),h=0;h<Math.min(g.length,f.length);h++)Gc(g[h],f[h])}else f instanceof sc?f.j&&(d.pa=Cc(a,h,f.j),f.forEach(function(k){return function(l,m){return Gc(k.pa.get(m),l)}}(d))):(g=Ec(a,f.constructor,h,g))&&Gc(g,f)}d={pa:d.pa}}}}
;var Hc=window;jb("csi.gstatic.com");jb("googleads.g.doubleclick.net");jb("pagead2.googlesyndication.com");jb("partner.googleadservices.com");jb("pubads.g.doubleclick.net");jb("securepubads.g.doubleclick.net");jb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ic(a,b){this.width=a;this.height=b}
n=Ic.prototype;n.clone=function(){return new Ic(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jc(a,b){Za(b,function(c,d){c&&"object"==typeof c&&c.ba&&(c=c.aa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Kc.hasOwnProperty(d)?a.setAttribute(Kc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Kc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Lc(a,b,c){var d=arguments,e=document,f=d[1],g=Mc(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Jc(g,f));2<d.length&&Nc(e,g,d);return g}
function Nc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ia(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?Xa(f):f,d)}}}
function Mc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pc(a){var b=Qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Rc(){var a=[];Pc(function(b){a.push(b)});
return a}
var Qc={ub:"allow-forms",vb:"allow-modals",wb:"allow-orientation-lock",xb:"allow-pointer-lock",yb:"allow-popups",zb:"allow-popups-to-escape-sandbox",Ab:"allow-presentation",Bb:"allow-same-origin",Cb:"allow-scripts",Db:"allow-top-navigation",Eb:"allow-top-navigation-by-user-activation"},Sc=Sa(function(){return Rc()});
function Tc(){var a=Uc(),b={};H(Sc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Uc(){var a=void 0===a?document:a;var b="IFRAME";"application/xhtml+xml"===(null==a?void 0:a.contentType)&&(b=b.toLowerCase());return a.createElement(b)}
;var Vc=(new Date).getTime();function Wc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Xc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],z=e[2],y=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var L=y^v&(z^y);var G=1518500249}else L=v^z^y,G=1859775393;else 60>q?(L=v&z|y&(v|z),G=2400959708):(L=v^z^y,G=3395469782);L=((p<<5|p>>>27)&4294967295)+L+K+G+r[q]&4294967295;K=y;y=z;z=(v<<30|v>>>2)&4294967295;v=p;p=L}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+K&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],v=0,z=p.length;v<z;++v)q.push(p.charCodeAt(v));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)p[r++]=e[q]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,eb:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Yc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,Zc(Wc(d),a,c||null)].join(" "):null}
function Zc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),$c(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=$c(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $c(a){var b=Xc();b.update(a);return b.eb().toLowerCase()}
;var ad={};function bd(a){this.h=a||{cookie:""}}
n=bd.prototype;n.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ta:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Nb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ta}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=kb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ta:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var cd=new bd("undefined"==typeof document?null:document);function dd(a){return!!ad.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ed(a,b,c,d){(a=B[a])||(a=(new bd(document)).get(b));return a?Yc(a,c,d):null}
function fd(a){var b=void 0===b?!1:b;var c=Wc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;dd(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new bd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");dd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new bd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Yc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&dd(b)&&((b=ed("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ed("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function gd(){this.data_=[];this.h=-1}
gd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
gd.prototype.get=function(a){return!!this.data_[a]};
function hd(a){-1==a.h&&(a.h=Ua(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function id(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
id.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function jd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var kd;
function ld(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Mc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Oa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ca;c.Ca=null;e()}};
return function(e){d.next={Ca:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function md(a){B.setTimeout(function(){throw a;},0)}
;function nd(){this.i=this.h=null}
nd.prototype.add=function(a,b){var c=od.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
nd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var od=new id(function(){return new pd},function(a){return a.reset()});
function pd(){this.next=this.scope=this.h=null}
pd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
pd.prototype.reset=function(){this.next=this.scope=this.h=null};function qd(a,b){rd||sd();td||(rd(),td=!0);ud.add(a,b)}
var rd;function sd(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);rd=function(){a.then(vd)}}else rd=function(){var b=vd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!I("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(kd||(kd=ld()),kd(b)):B.setImmediate(b)}}
var td=!1,ud=new nd;function vd(){for(var a;a=ud.remove();){try{a.h.call(a.scope)}catch(b){md(b)}jd(od,a)}td=!1}
;function wd(a,b){this.h=a[B.Symbol.iterator]();this.i=b;this.j=0}
wd.prototype[Symbol.iterator]=function(){return this};
wd.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function xd(a,b){return new wd(a,b)}
;function yd(){this.blockSize=-1}
;function zd(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
F(zd,yd);zd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ad(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
zd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Ad(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ad(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ad(this,e);f=0;break}}this.i=f;this.l+=b}};
zd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Ad(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Bd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ed[c])c=Ed[c];else{c=String(c);if(!Ed[c]){var f=/function\s+([^\(]+)/m.exec(c);Ed[c]=f?f[1]:"[Anonymous]"}c=Ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cd(a,b){b||(b={});b[Fd(a)]=!0;var c=a.stack||"";(a=a.bb)&&!b[Fd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cd(a,b));return c}
function Fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ed={};function Gd(){this.j=this.j;this.m=this.m}
Gd.prototype.j=!1;Gd.prototype.dispose=function(){this.j||(this.j=!0,this.Z())};
Gd.prototype.Z=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Hd="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Id(){}
Id.prototype.N=function(){throw Hd;};
Id.prototype.H=function(){return this};function Jd(a){if(a instanceof Kd||a instanceof Ld||a instanceof Md)return a;if("function"==typeof a.N)return new Kd(function(){return Nd(a)});
if("function"==typeof a[Symbol.iterator])return new Kd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.H)return new Kd(function(){return Nd(a.H())});
throw Error("Not an iterator or iterable.");}
function Nd(a){if(!(a instanceof Id))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.N();break}catch(d){if(d!==Hd)throw d;b=!0}return{value:c,done:b}}}}
function Kd(a){this.i=a}
Kd.prototype.H=function(){return new Ld(this.i())};
Kd.prototype[Symbol.iterator]=function(){return new Md(this.i())};
Kd.prototype.h=function(){return new Md(this.i())};
function Ld(a){this.i=a}
w(Ld,Id);Ld.prototype.N=function(){var a=this.i.next();if(a.done)throw Hd;return a.value};
Ld.prototype[Symbol.iterator]=function(){return new Md(this.i)};
Ld.prototype.h=function(){return new Md(this.i)};
function Md(a){Kd.call(this,function(){return a});
this.j=a}
w(Md,Kd);Md.prototype.next=function(){return this.j.next()};function Od(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Od)for(c=Pd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Pd(a){Qd(a);return a.h.concat()}
n=Od.prototype;n.has=function(a){return Rd(this.i,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Sd;Qd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Sd(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.i={};this.j=this.size=this.h.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Rd(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Qd(this),!0):!1};
function Qd(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Rd(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Rd(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return Rd(this.i,a)?this.i[a]:b};
n.set=function(a,b){Rd(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
n.forEach=function(a,b){for(var c=Pd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Od(this)};
n.keys=function(){return Jd(this.H(!0)).h()};
n.values=function(){return Jd(this.H(!1)).h()};
n.entries=function(){var a=this;return xd(this.keys(),function(b){return[b,a.get(b)]})};
n.H=function(a){Qd(this);var b=0,c=this.j,d=this,e=new Id;e.N=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Hd;var f=d.h[b++];return a?f:d.i[f]};
return e};
function Rd(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Td(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Td.prototype.stopPropagation=function(){this.j=!0};
Td.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ud=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ga,b),B.removeEventListener("test",Ga,b)}catch(c){}return a}();function Vd(a,b){Td.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(Vd,Td);var Wd={2:"touch",3:"pen",4:"mouse"};
Vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Ub){a:{try{Qb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Vd.K.preventDefault.call(this)};
Vd.prototype.stopPropagation=function(){Vd.K.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Vd.prototype.preventDefault=function(){Vd.K.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xd="closure_listenable_"+(1E6*Math.random()|0);var Yd=0;function Zd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ka=e;this.key=++Yd;this.ca=this.fa=!1}
function $d(a){a.ca=!0;a.listener=null;a.proxy=null;a.src=null;a.ka=null}
;function ae(a){this.src=a;this.listeners={};this.h=0}
ae.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=be(a,b,d,e);-1<g?(b=a[g],c||(b.fa=!1)):(b=new Zd(b,this.src,f,!!d,e),b.fa=c,a.push(b));return b};
ae.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=be(e,b,c,d);return-1<b?($d(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ce(a,b){var c=b.type;c in a.listeners&&Va(a.listeners[c],b)&&($d(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function be(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ca&&f.listener==b&&f.capture==!!c&&f.ka==d)return e}return-1}
;var de="closure_lm_"+(1E6*Math.random()|0),ee={},fe=0;function ge(a,b,c,d,e){if(d&&d.once)he(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ge(a,b[f],c,d,e);else c=ie(c),a&&a[Xd]?a.X(b,c,D(d)?!!d.capture:!!d,e):je(a,b,c,!1,d,e)}
function je(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=ke(a);h||(a[de]=h=new ae(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=le();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ud||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(me(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fe++}}
function le(){function a(c){return b.call(a.src,a.listener,c)}
var b=ne;return a}
function he(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)he(a,b[f],c,d,e);else c=ie(c),a&&a[Xd]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):je(a,b,c,!0,d,e)}
function oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=ie(c),a&&a[Xd])?a.h.remove(String(b),c,d,e):a&&(a=ke(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=be(b,c,d,e)),(c=-1<a?b[a]:null)&&pe(c))}
function pe(a){if("number"!==typeof a&&a&&!a.ca){var b=a.src;if(b&&b[Xd])ce(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(me(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fe--;(c=ke(b))?(ce(c,a),0==c.h&&(c.src=null,b[de]=null)):$d(a)}}}
function me(a){return a in ee?ee[a]:ee[a]="on"+a}
function ne(a,b){if(a.ca)a=!0;else{b=new Vd(b,this);var c=a.listener,d=a.ka||a.src;a.fa&&pe(a);a=c.call(d,b)}return a}
function ke(a){a=a[de];return a instanceof ae?a:null}
var qe="__closure_events_fn_"+(1E9*Math.random()>>>0);function ie(a){if("function"===typeof a)return a;a[qe]||(a[qe]=function(b){return a.handleEvent(b)});
return a[qe]}
;function M(){Gd.call(this);this.h=new ae(this);this.qa=this;this.u=null}
F(M,Gd);M.prototype[Xd]=!0;M.prototype.addEventListener=function(a,b,c,d){ge(this,a,b,c,d)};
M.prototype.removeEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
function re(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.qa;c=b.type||b;"string"===typeof b?b=new Td(b,a):b instanceof Td?b.target=b.target||a:(e=b,b=new Td(c,a),fb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=se(g,c,!0,b)&&e}b.j||(g=b.h=a,e=se(g,c,!0,b)&&e,b.j||(e=se(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=se(g,c,!1,b)&&e}
M.prototype.Z=function(){M.K.Z.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,$d(d[e]);delete a.listeners[c];a.h--}}this.u=null};
M.prototype.X=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function se(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ca&&g.capture==c){var h=g.listener,k=g.ka||g.src;g.fa&&ce(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var te=B.JSON.stringify;function ue(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Ga)try{var b=this;a.call(void 0,function(c){ve(b,2,c)},function(c){ve(b,3,c)})}catch(c){ve(this,3,c)}}
function we(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
we.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var xe=new id(function(){return new we},function(a){a.reset()});
function ye(a,b,c){var d=xe.get();d.i=a;d.onRejected=b;d.context=c;return d}
ue.prototype.then=function(a,b,c){return ze(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ue.prototype.$goog_Thenable=!0;ue.prototype.cancel=function(a){if(0==this.h){var b=new Ae(a);qd(function(){Be(this,b)},this)}};
function Be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ce(c),De(c,e,3,b)))}a.j=null}else ve(a,3,b)}
function Ee(a,b){a.i||2!=a.h&&3!=a.h||Fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ze(a,b,c,d){var e=ye(null,null,null);e.h=new ue(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ae?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ee(a,e);return e.h}
ue.prototype.G=function(a){this.h=0;ve(this,2,a)};
ue.prototype.U=function(a){this.h=0;ve(this,3,a)};
function ve(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.G,f=a.U;if(d instanceof ue){Ee(d,ye(e||Ga,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,Fe(a),3!=b||c instanceof Ae||He(a,c))}}
function Ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fe(a){a.s||(a.s=!0,qd(a.B,a))}
function Ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ue.prototype.B=function(){for(var a;a=Ce(this);)De(this,a,this.h,this.u);this.s=!1};
function De(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Ie(b,c,d);else try{b.j?b.i.call(b.context):Ie(b,c,d)}catch(e){Je.call(null,e)}jd(xe,b)}
function Ie(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function He(a,b){a.m=!0;qd(function(){a.m&&Je.call(null,b)})}
var Je=md;function Ae(a){Qa.call(this,a)}
F(Ae,Qa);Ae.prototype.name="cancel";function N(a){Gd.call(this);this.u=1;this.l=[];this.s=0;this.h=[];this.i={};this.B=!!a}
F(N,Gd);n=N.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function Ke(a,b,c){var d=Le;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ea(a)}}
n.ea=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.l.push(a),this.h[a+1]=Ga):(c&&Va(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.Y=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Me(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.l.length&&0==this.s)for(;c=this.l.pop();)this.ea(c)}}return 0!=e}return!1};
function Me(a,b,c){qd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ea,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.Z=function(){N.K.Z.call(this);this.clear();this.l.length=0};function Ne(a){this.h=a}
Ne.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,te(b))};
Ne.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ne.prototype.remove=function(a){this.h.remove(a)};function Oe(a){this.h=a}
F(Oe,Ne);function Pe(a){this.data=a}
function Qe(a){return void 0===a||a instanceof Pe?a:new Pe(a)}
Oe.prototype.set=function(a,b){Oe.K.set.call(this,a,Qe(b))};
Oe.prototype.i=function(a){a=Oe.K.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Oe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Re(a){this.h=a}
F(Re,Oe);Re.prototype.set=function(a,b,c){if(b=Qe(b)){if(c){if(c<Date.now()){Re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Re.K.set.call(this,a,b)};
Re.prototype.i=function(a){var b=Re.K.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Re.prototype.remove.call(this,a);else return b}};function Se(){}
;function Te(){}
F(Te,Se);Te.prototype[Symbol.iterator]=function(){return Jd(this.H(!0)).h()};
Te.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ue(a){this.h=a}
F(Ue,Te);n=Ue.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.H=function(a){var b=0,c=this.h,d=new Id;d.N=function(){if(b>=c.length)throw Hd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function Ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(Ve,Ue);function We(a,b){this.i=a;this.h=null;var c;if(c=Sb)c=!(9<=Number(dc));if(c){Xe||(Xe=new Od);this.h=Xe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xe.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
F(We,Te);var Ye={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xe=null;function Ze(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ye[b]})}
n=We.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(Ze(a),b);$e(this)};
n.get=function(a){a=this.h.getAttribute(Ze(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(Ze(a));$e(this)};
n.H=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Id;d.N=function(){if(b>=c.length)throw Hd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$e(this)};
function $e(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function af(a,b){this.i=a;this.h=b+"::"}
F(af,Te);af.prototype.set=function(a,b){this.i.set(this.h+a,b)};
af.prototype.get=function(a){return this.i.get(this.h+a)};
af.prototype.remove=function(a){this.i.remove(this.h+a)};
af.prototype.H=function(a){var b=this.i.H(!0),c=this,d=new Id;d.N=function(){for(var e=b.N();e.substr(0,c.h.length)!=c.h;)e=b.N();return a?e.substr(c.h.length):c.i.get(e)};
return d};function bf(a){yc.call(this,a,92,cf)}
w(bf,yc);var cf=[82];var df,ef,ff,gf=B.window,hf=(null===(df=null===gf||void 0===gf?void 0:gf.yt)||void 0===df?void 0:df.config_)||(null===(ef=null===gf||void 0===gf?void 0:gf.ytcfg)||void 0===ef?void 0:ef.data_)||{},jf=(null===(ff=null===gf||void 0===gf?void 0:gf.ytcfg)||void 0===ff?void 0:ff.obfuscatedData_)||[];new bf(jf);E("yt.config_",hf);E("yt.configJspb_",jf);function kf(a){for(var b=0;b<arguments.length;++b);b=arguments;1<b.length?hf[b[0]]=b[1]:1===b.length&&Object.assign(hf,b[0])}
function O(a,b){return a in hf?hf[a]:b}
;var lf=[];function mf(a){lf.forEach(function(b){return b(a)})}
function nf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){of(b)}}:a}
function of(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=O("ERRORS",[]),e.push([a,"ERROR",b,c,d]),kf("ERRORS",e));mf(a)}
function pf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=O("ERRORS",[]),e.push([a,"WARNING",b,c,d]),kf("ERRORS",e))}
;var qf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++qf});var rf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function sf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in rf||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ab=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",ab);var tf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",tf);
function uf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return $a(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&bb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function vf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in ab){var c=ab[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?wf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ab[b]}}))}
var wf=Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=uf(a,b,c,d);if(!e){e=++tf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new sf(h);if(!Oc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new sf(h);
h.currentTarget=a;return c.call(a,h)};
g=nf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),wf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ab[e]=[a,b,c,g,d]}}}
;function yf(a,b){"function"===typeof a&&(a=nf(a));return window.setTimeout(a,b)}
function zf(a){"function"===typeof a&&(a=nf(a));return window.setInterval(a,250)}
;var Af=/^[\w.]*$/,Bf={q:!0,search_query:!0};function Cf(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Df(f[0]||""),h=Df(f[1]||"");g in c?Array.isArray(c[g])?Ya(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(Cf);k.args=[{key:l,value:f[1],query:a,method:Ef==m?"unchanged":m}];Bf.hasOwnProperty(l)||pf(k)}}return c}
var Ef=String(Cf);function Ff(a){var b=[];Za(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Gf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Cf(a,"&")}
function Hf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Gf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Mb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function If(a){if(!b)var b=window.location.href;var c=a.match(Hb)[1]||null,d=Jb(a);c&&d?(a=a.match(Hb),b=b.match(Hb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Jb(b)==d&&(Number(b.match(Hb)[4]||null)||null)==(Number(a.match(Hb)[4]||null)||null):!0;return a}
function Df(a){return a&&a.match(Af)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function P(a){a=Jf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Kf(a,b){a=Jf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Jf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function Lf(){}
function Mf(a,b){return Nf(a,0,b)}
function Of(a,b){return Nf(a,1,b)}
;function Pf(){Lf.apply(this,arguments)}
w(Pf,Lf);function Qf(){Pf.h||(Pf.h=new Pf);return Pf.h}
function Nf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):yf(a,c||0)}
function Rf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Pf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};Qf();function Sf(a){var b=Tf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Vc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Hc:g;try{var h=g.history.length}catch(oa){h=0}e.u_his=h;var k;e.u_h=null==(k=Hc.screen)?void 0:k.height;var l;e.u_w=null==(l=Hc.screen)?void 0:l.width;var m;e.u_ah=null==(m=Hc.screen)?void 0:m.availHeight;var p;e.u_aw=
null==(p=Hc.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Hc.screen)?void 0:r.colorDepth}catch(oa){}h=b.h;try{var q=h.screenX;var v=h.screenY}catch(oa){}try{var z=h.outerWidth;var y=h.outerHeight}catch(oa){}try{var K=h.innerWidth;var L=h.innerHeight}catch(oa){}try{var G=h.screenLeft;var U=h.screenTop}catch(oa){}try{K=h.innerWidth,L=h.innerHeight}catch(oa){}try{var Dd=h.screen.availWidth;var Ti=h.screen.availTop}catch(oa){}q=[G,U,q,v,Dd,Ti,z,y,K,L];v=b.h.top;try{var db=(v||window).document,ba=
"CSS1Compat"==db.compatMode?db.documentElement:db.body;var ha=(new Ic(ba.clientWidth,ba.clientHeight)).round()}catch(oa){ha=new Ic(-12245933,-12245933)}db=ha;ha={};ba=new gd;B.SVGElement&&B.document.createElementNS&&ba.set(0);v=Tc();v["allow-top-navigation-by-user-activation"]&&ba.set(1);v["allow-popups-to-escape-sandbox"]&&ba.set(2);B.crypto&&B.crypto.subtle&&ba.set(3);B.TextDecoder&&B.TextEncoder&&ba.set(4);ba=hd(ba);ha.bc=ba;ha.bih=db.height;ha.biw=db.width;ha.brdim=q.join();b=b.i;b=(ha.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ha.wgl=!!Hc.WebGLRenderingContext,ha);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Tf=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Ff(Sf(a))});Date.now();var Uf="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Vf(){if(!Uf)return null;var a=Uf();return"open"in a?a:null}
;var Wf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Xf="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),Yf=!1;
function Zf(a,b){b=void 0===b?{}:b;var c=If(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in Wf){var f=O(Wf[e]);!f||!c&&Jb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Jb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Jb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Jb(a))b["X-YouTube-Ad-Signals"]=Ff(Sf(void 0));return b}
function $f(a){var b=window.location.search,c=Jb(a);P("debug_handle_relative_url_for_query_forward_killswitch")||c||!If(a)||(c=document.location.hostname);var d=Ib(a.match(Hb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Gf(b),f={};H(Xf,function(g){e[g]&&(f[g]=e[g])});
return Hf(a,f||{},!1)}
function ag(a,b){var c=b.format||"JSON";a=bg(a,b);var d=cg(a,b),e=!1,f=dg(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)m=eg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||B;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=yf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function bg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Hf(a,b||{},!0);return a}
function cg(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Jb(a)&&!b.withCredentials&&Jb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Gf(e),fb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Mb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Yf&&a&&"POST"!=b.method&&(Yf=!0,of(Error("AJAX request with postData should use POST")));return e}
function eg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?fg(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=gg(g)})}d&&hg(e);
return e}
function hg(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;jb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Gb(a[b],null);a[c]=d}else hg(a[b])}}
function fg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function gg(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function dg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&nf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Vf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=$f(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Zf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ig=ec||fc;function jg(a){var b=zb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var kg={},lg=0;
function mg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!jg("cobalt"))a&&(a instanceof tb||(a="object"==typeof a&&a.ba?a.aa():String(a),xb.test(a)?a=new tb(a,ub):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(wb))&&vb.test(b[1])?new tb(a,ub):null)),a=a||yb,a instanceof tb&&a.constructor===tb?a=a.h:(Ha(a),a="type_error:SafeUrl"),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof Fb||(b="object"==typeof a,c=null,b&&a.Ia&&(c=a.Ga()),a=Gb(lb(b&&a.ba?a.aa():String(a)),c)),a instanceof
Fb&&a.constructor===Fb?a=a.h:(Ha(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(te(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=Lc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)));else if(e)dg(a,b,"POST",e,d);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)dg(a,b,"GET","",d);else{b:{try{var f=new Ra({url:a});if(f.j&&f.i||f.l){var g=Ib(a.match(Hb)[5]||null);var h=!(!g||!g.endsWith("/aclk")||
"1"!==Ob(a,"ri"));break b}}catch(k){}h=!1}h?ng(a)?(b&&b(),c=!0):c=!1:c=!1;c||og(a,b)}}
function pg(a,b,c){c=void 0===c?"":c;ng(a,c)?b&&b():mg(a,b,void 0,void 0,c)}
function ng(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function og(a,b){var c=new Image,d=""+lg++;kg[d]=c;c.onload=c.onerror=function(){b&&kg[d]&&b();delete kg[d]};
c.src=a}
;var qg=B.ytPubsubPubsubInstance||new N,rg=B.ytPubsubPubsubSubscribedKeys||{},sg=B.ytPubsubPubsubTopicToKeys||{},tg=B.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ea;N.prototype.publish=N.prototype.Y;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",qg);E("ytPubsubPubsubTopicToKeys",sg);E("ytPubsubPubsubIsSynchronous",tg);E("ytPubsubPubsubSubscribedKeys",rg);var ug=window,Q=ug.ytcsi&&ug.ytcsi.now?ug.ytcsi.now:ug.performance&&ug.performance.timing&&ug.performance.now&&ug.performance.timing.navigationStart?function(){return ug.performance.timing.navigationStart+ug.performance.now()}:function(){return(new Date).getTime()};var vg=Kf("initial_gel_batch_timeout",2E3),wg=Math.pow(2,16)-1,xg=void 0,yg=0,zg=0,Ag=0,Bg=!0,Cg=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Cg);var Dg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Dg);
function Eg(a,b){if("log_event"===a.endpoint){var c="";a.ia?c="visitorOnlyApprovedKey":a.M&&(Dg[a.M.token]=Fg(a.M),c=a.M.token);var d=Cg.get(c)||[];Cg.set(c,d);d.push(a.payload);b&&(xg=new b);a=Kf("tvhtml5_logging_max_batch")||Kf("web_logging_max_batch")||100;b=Q();d.length>=a?Gg({writeThenSend:!0},P("flush_only_full_queue")?c:void 0):10<=b-Ag&&(Hg(),Ag=b)}}
function Ig(a,b){if("log_event"===a.endpoint){var c="";a.ia?c="visitorOnlyApprovedKey":a.M&&(Dg[a.M.token]=Fg(a.M),c=a.M.token);var d=new Map;d.set(c,[a.payload]);b&&(xg=new b);return new ue(function(e){xg&&xg.isReady()?Jg(d,e,{bypassNetworkless:!0},!0):e()})}}
function Gg(a,b){a=void 0===a?{}:a;new ue(function(c){window.clearTimeout(yg);window.clearTimeout(zg);zg=0;if(xg&&xg.isReady())if(void 0!==b){var d=new Map,e=Cg.get(b)||[];d.set(b,e);Jg(d,c,a);Cg.delete(b)}else Jg(Cg,c,a),Cg.clear();else Hg(),c()})}
function Hg(){P("web_gel_timeout_cap")&&!zg&&(zg=yf(function(){Gg({writeThenSend:!0})},6E4));
window.clearTimeout(yg);var a=O("LOGGING_BATCH_TIMEOUT",Kf("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Bg&&(a=vg);yg=yf(function(){Gg({writeThenSend:!0})},a)}
function Jg(a,b,c,d){var e=xg;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=cb({context:Kg(e.config_||Lg())});k.events=l;(l=Dg[h])&&Mg(k,h,l);delete Dg[h];h="visitorOnlyApprovedKey"===h;Ng(k,f,h);P("always_send_and_write")&&(c.writeThenSend=!1);P("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&pg("/generate_204");Og(e,"log_event",k,{retry:!0,onSuccess:function(){g--;
g||b()},
onError:function(){g--;g||b()},
Na:c,ia:h,Ib:!!d});Bg=!1}}
function Ng(a,b,c){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID",void 0))&&((c=O("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*wg/2)),c++,c>wg&&(c=1),kf("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Mg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Fg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Pg=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Pg);function Qg(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;E("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Rg={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Sg={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Tg(){var a=B.navigator;return a?a.connection:void 0}
;function Ug(){return"INNERTUBE_API_KEY"in hf&&"INNERTUBE_API_VERSION"in hf}
function Lg(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),gb:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),hb:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),jb:O("INNERTUBE_CONTEXT_HL",void 0),ib:O("INNERTUBE_CONTEXT_GL",void 0),kb:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",mb:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),lb:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Kg(a){var b={client:{hl:a.jb,gl:a.ib,clientName:a.hb,clientVersion:a.innertubeContextClientVersion,configInfo:a.gb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!P("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Qg()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!P("music_web_display_mode_killswitch")){var h;b.client.Ma=null!=(h=b.client.Ma)?h:{};b.client.Ma.webDisplayMode=Qg()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a:{if(h=Tg()){a=Rg[h.type||"unknown"]||"CONN_UNKNOWN";h=Rg[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);P("web_log_effective_connection_type")&&
(a=Tg(),a=null!==a&&void 0!==a&&a.effectiveType?Sg.hasOwnProperty(a.effectiveType)?Sg[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Gf(O("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Vg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Gb||O("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Fb:b=fd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function Wg(a){a=Object.assign({},a);delete a.Authorization;var b=fd();if(b){var c=new zd;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=jc(c.digest(),3)}return a}
;function Xg(a){var b=new Ve;(b=b.isAvailable()?a?new af(b,a):b:null)||(a=new We(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Re(a):null;this.i=document.domain||window.location.hostname}
Xg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(te(b))}catch(f){return}else e=escape(b);b=this.i;cd.set(""+a,e,{ta:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Xg.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=cd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Xg.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;cd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Yg;function Zg(){Yg||(Yg=new Xg("yt.innertube"));return Yg}
function $g(a,b,c,d){if(d)return null;d=Zg().get("nextId",!0)||1;var e=Zg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wg(c),requestTime:Math.round(Q())};Zg().set("nextId",d+1,86400,!0);Zg().set("requests",e,86400,!0);return d}
function ah(a){var b=Zg().get("requests",!0)||{};delete b[a];Zg().set("requests",b,86400,!0)}
function bh(a){var b=Zg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Wg(Vg(!1));bb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),Og(a,d.method,e,{}));delete b[c]}}Zg().set("requests",b,86400,!0)}}
;var ch=function(){var a;return function(){a||(a=new Xg("ytidb"));return a}}();
function dh(){var a;return null===(a=ch())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function eh(a){var b=dh();this.result={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a};var c,d;null!==(c=ch())&&void 0!==c&&c.h&&(null===(d=ch())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",this.result,2592E3,!0))}
eh.prototype.isSupported=function(){return this.result.hasSucceededOnce};var fh=[],gh=!1;function hh(a){gh||(fh.push({type:"ERROR",payload:a}),10<fh.length&&fh.shift())}
function ih(a,b){gh||(fh.push({type:"EVENT",eventType:a,payload:b}),10<fh.length&&fh.shift())}
;function jh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ia(c))}
w(jh,Error);function kh(){try{return lh(),!0}catch(a){return!1}}
function lh(){if(void 0!==O("DATASYNC_ID",void 0))return O("DATASYNC_ID",void 0);throw new jh("Datasync ID not set","unknown");}
;function mh(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function nh(a){return a.substr(0,a.indexOf(":"))||a}
;var R={},oh=(R.AUTH_INVALID="No user identifier specified.",R.EXPLICIT_ABORT="Transaction was explicitly aborted.",R.IDB_NOT_SUPPORTED="IndexedDB is not supported.",R.MISSING_INDEX="Index not created.",R.MISSING_OBJECT_STORE="Object store not created.",R.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",R.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",R.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",R.QUOTA_MAYBE_EXCEEDED=
"The current transaction may have failed because of exceeding quota limitations.",R.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",R.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",R),S={},ph=(S.AUTH_INVALID="ERROR",S.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",S.EXPLICIT_ABORT="IGNORED",S.IDB_NOT_SUPPORTED="ERROR",S.MISSING_INDEX="WARNING",S.MISSING_OBJECT_STORE="ERROR",S.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",S.QUOTA_EXCEEDED=
"WARNING",S.QUOTA_MAYBE_EXCEEDED="WARNING",S.UNKNOWN_ABORT="WARNING",S.INCOMPATIBLE_DB_VERSION="WARNING",S),qh={},rh=(qh.AUTH_INVALID=!1,qh.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,qh.EXPLICIT_ABORT=!1,qh.IDB_NOT_SUPPORTED=!1,qh.MISSING_INDEX=!1,qh.MISSING_OBJECT_STORE=!1,qh.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,qh.QUOTA_EXCEEDED=!1,qh.QUOTA_MAYBE_EXCEEDED=!0,qh.UNKNOWN_ABORT=!0,qh.INCOMPATIBLE_DB_VERSION=!1,qh);
function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?oh[a]:c;d=void 0===d?ph[a]:d;e=void 0===e?rh[a]:e;jh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}
w(T,jh);function sh(a){T.call(this,"MISSING_OBJECT_STORE",{pb:a},oh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,sh.prototype)}
w(sh,T);function th(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,th.prototype)}
w(th,Error);var uh=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function vh(a,b,c,d){b=nh(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(gc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof th)return new T("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&uh.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Mb:e.name})];e.level="WARNING";return e}
function wh(a,b,c){return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function xh(a){if(!a)throw Error();throw a;}
function yh(a){return a}
function zh(a){this.h=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new zh(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={T:0};f.T<a.length;f={T:f.T},++f.T)Ah(V.resolve(a[f.T]).then(function(g){return function(h){d[g.T]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new zh(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new zh(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:yh,e=null!==b&&void 0!==b?b:xh;return new V(new zh(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Bh(c,c,d,f,g)}),c.onRejected.push(function(){Ch(c,c,e,f,g)})):"FULFILLED"===c.state.status?Bh(c,c,d,f,g):"REJECTED"===c.state.status&&Ch(c,c,e,f,g)}))};
function Ah(a,b){a.then(void 0,b)}
function Bh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Dh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ch(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Dh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Dh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Dh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Eh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Fh(a){return new Promise(function(b,c){Eh(a,b,c)})}
function W(a){return new V(new zh(function(b,c){Eh(a,b,c)}))}
;function Gh(a,b){return new V(new zh(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Hh(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
n=Hh.prototype;n.add=function(a,b,c){return X(this,[a],{mode:"readwrite",F:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return X(this,[a],{mode:"readwrite",F:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return X(this,[a],{mode:"readonly",F:!0},function(c){return c.objectStore(a).count(b)})};
function Ih(a,b,c){a=a.h.createObjectStore(b,c);return new Jh(a)}
n.delete=function(a,b){return X(this,[a],{mode:"readwrite",F:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return X(this,[a],{mode:"readonly",F:!0},function(c){return c.objectStore(a).get(b)})};
function Kh(a,b){return X(a,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(c){c=c.objectStore("LogsRequestsStore");return W(c.h.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function X(a,b,c,d){return J(a,function f(){var g=this,h,k,l,m,p,r,q,v,z,y,K,L;return A(f,function(G){switch(G.h){case 1:var U={mode:"readonly",F:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?U.mode=c:Object.assign(U,c);h=U;g.transactionCount++;k=h.F?3:1;l=0;case 2:if(m){G.o(3);break}l++;p=Math.round(Q());ta(G,4);r=g.h.transaction(b,h.mode);U=new Lh(r);U=Mh(U,d);return x(G,U,6);case 6:return q=G.i,v=Math.round(Q()),Nh(g,p,v,l,void 0,b.join(),h),G.return(q);case 4:z=ua(G);y=Math.round(Q());
K=vh(z,g.h.name,b.join(),g.h.version);if((L=K instanceof T&&!K.h)||l>=k)Nh(g,p,y,l,K,b.join(),h),m=K;G.o(2);break;case 3:return G.return(Promise.reject(m))}})})}
function Nh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ih("QUOTA_EXCEEDED",{dbName:nh(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),ih("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Oh(a,!1,d,f,b,g.tag),hh(e)):Oh(a,!0,d,f,b,g.tag)}
function Oh(a,b,c,d,e,f){ih("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function Jh(a){this.h=a}
n=Jh.prototype;n.add=function(a,b){return W(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return W(this.h.clear()).then(function(){})};
n.count=function(a){return W(this.h.count(a))};
function Ph(a,b){return Qh(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Ph(this,a):W(this.h.delete(a))};
n.get=function(a){return W(this.h.get(a))};
n.index=function(a){try{return new Rh(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new th(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function Qh(a,b,c){a=a.h.openCursor(b.query,b.direction);return Sh(a).then(function(d){return Gh(d,c)})}
function Lh(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=T;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Mh(a,b){var c=new Promise(function(d,e){try{Ah(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Lh.prototype.abort=function(){this.h.abort();this.i=!0;throw new T("EXPLICIT_ABORT");};
Lh.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Jh(a),this.j.set(a,b));return b};
function Rh(a){this.h=a}
n=Rh.prototype;n.count=function(a){return W(this.h.count(a))};
n.delete=function(a){return Th(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return W(this.h.get(a))};
n.getKey=function(a){return W(this.h.getKey(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function Th(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Sh(a).then(function(d){return Gh(d,c)})}
function Uh(a,b){this.request=a;this.cursor=b}
function Sh(a){return W(a).then(function(b){return b?new Uh(a,b):null})}
n=Uh.prototype;n.advance=function(a){this.cursor.advance(a);return Sh(this.request)};
n.continue=function(a){this.cursor.continue(a);return Sh(this.request)};
n.delete=function(){return W(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return W(this.cursor.update(a))};function Vh(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Hh(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.sb,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&ih("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:nh(a)});var v=f(),z=new Lh(g.transaction);
m&&m(v,function(y){return q.oldVersion<y&&q.newVersion>=y},z);
z.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){ih("IDB_UNEXPECTEDLY_CLOSED",{dbName:nh(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Wh(a,b,c){c=void 0===c?{}:c;return Vh(a,b,c)}
function Xh(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f,g;return A(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,Fh(e),0)})})}
;function Yh(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
Yh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Wh(a,b,c)};
Yh.prototype.delete=function(a){a=void 0===a?{}:a;return Xh(this.name,a)};
function Zh(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
Yh.prototype.open=function(){function a(){return J(c,function g(){var h,k,l,m=this,p,r,q,v,z;return A(g,function(y){switch(y.h){case 1:return l=null!==(h=Error().stack)&&void 0!==h?h:"",ta(y,2),x(y,m.i(m.name,m.options.version,e),4);case 4:p=y.i;a:{var K=m.options;for(var L=u(Object.keys(K.la)),G=L.next();!G.done;G=L.next()){G=G.value;var U=K.la[G],Dd=void 0===U.rb?Number.MAX_VALUE:U.rb;if(p.h.version>=U.ra&&!(p.h.version>=Dd)&&!p.h.objectStoreNames.contains(G)){K=G;break a}}K=void 0}r=K;if(void 0===
r){y.o(5);break}if(m.j){y.o(6);break}m.j=!0;return x(y,m.delete(),7);case 7:return hh(new T("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:m.name,pb:r})),y.return(a());case 6:throw new sh(r);case 5:return y.return(p);case 2:q=ua(y);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){y.o(8);break}return x(y,
m.i(m.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),9);case 9:v=y.i;z=v.h.version;if(void 0!==m.options.version&&z>m.options.version+1)throw v.close(),m.l=!1,Zh(m,z);return y.return(v);case 8:throw b(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+l.substring(l.indexOf("\n")+1)),vh(q,m.name,"",null!==(k=m.options.version)&&void 0!==k?k:-1);}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Zh(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,sb:b,upgrade:this.options.upgrade};return this.h=d=a()};var $h=new Yh("YtIdbMeta",{la:{databases:{ra:1}},upgrade:function(a,b){b(1)&&Ih(a,"databases",{keyPath:"actualName"})}});
function ai(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return x(e,$h.open(),2);d=e.i;return e.return(X(d,["databases"],{F:!0,mode:"readwrite"},function(f){var g=f.objectStore("databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function bi(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return a?x(e,$h.open(),2):e.return();d=e.i;return e.return(d.delete("databases",a))})})}
function ci(a){return J(this,function c(){var d,e;return A(c,function(f){return 1==f.h?(d=[],x(f,$h.open(),2)):3!=f.h?(e=f.i,x(f,X(e,["databases"],{F:!0,mode:"readonly"},function(g){d.length=0;return Qh(g.objectStore("databases"),{},function(h){a(h.cursor.value)&&d.push(h.cursor.value);return h.continue()})}),3)):f.return(d)})})}
function di(){return ci(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var ei,fi=new function(){}(new function(){});
function gi(){return J(this,function b(){var c,d,e;return A(b,function(f){switch(f.h){case 1:c=dh();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new eh(!0));var g;if(g=ig)g=/WebKit\/([0-9]+)/.exec(zb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(zb),g=!(g&&602<=parseInt(g[1],10)));if(g||Tb)return f.return(new eh(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new eh(!1))}catch(h){return f.return(new eh(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new eh(!1));ta(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(f,ai(e),4);case 4:return x(f,bi("yt-idb-test-do-not-use"),5);case 5:return f.return(new eh(!0));case 2:return ua(f),f.return(new eh(!1))}})})}
function hi(){if(void 0!==ei)return ei;gh=!0;return ei=gi().then(function(a){gh=!1;return a.isSupported()})}
function ii(){return hi().then(function(a){return a?fi:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function ji(a){if(!kh())throw a=new T("AUTH_INVALID",{dbName:a}),hh(a),a;var b=lh();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function ki(a,b,c,d){var e;return J(this,function g(){var h,k,l,m,p;return A(g,function(r){switch(r.h){case 1:return h=null!==(e=Error().stack)&&void 0!==e?e:"",x(r,ii(),2);case 2:k=r.i;if(!k)throw l=wh("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(l.stack=l.stack+"\n"+h.substring(h.indexOf("\n")+1)),hh(l),l;mh(a);m=c?{actualName:a,publicName:a,userIdentifier:void 0}:ji(a);ta(r,3);return x(r,ai(m),5);case 5:return x(r,Wh(m.actualName,b,d),6);case 6:return r.return(r.i);case 3:return p=ua(r),
ta(r,7),x(r,bi(m.actualName),9);case 9:r.h=8;r.s=0;break;case 7:ua(r);case 8:throw p;}})})}
function li(a,b,c){c=void 0===c?{}:c;return ki(a,b,!1,c)}
function mi(a,b,c){c=void 0===c?{}:c;return ki(a,b,!0,c)}
function ni(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f;return A(d,function(g){if(1==g.h)return x(g,ii(),2);if(3!=g.h){e=g.i;if(!e)return g.return();mh(a);f=ji(a);return x(g,Xh(f.actualName,b),3)}return x(g,bi(f.actualName),0)})})}
function oi(a,b){var c=this;a=a.map(function(d){return J(c,function f(){return A(f,function(g){return 1==g.h?x(g,Xh(d.actualName,b),2):x(g,bi(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function pi(){var a=void 0===a?{}:a;return J(this,function c(){var d,e;return A(c,function(f){if(1==f.h)return x(f,ii(),2);if(3!=f.h){d=f.i;if(!d)return f.return();mh("LogsDatabaseV2");return x(f,di(),3)}e=f.i;return x(f,oi(e,a),0)})})}
function qi(a,b){b=void 0===b?{}:b;return J(this,function d(){var e;return A(d,function(f){if(1==f.h)return x(f,ii(),2);if(3!=f.h){e=f.i;if(!e)return f.return();mh(a);return x(f,Xh(a,b),3)}return x(f,bi(a),0)})})}
;function ri(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.W=function(){};
this.now=Date.now;this.Ua=null!==(b=a.Ua)&&void 0!==b?b:100;this.Sa=null!==(c=a.Sa)&&void 0!==c?c:1;this.Qa=null!==(d=a.Qa)&&void 0!==d?d:2592E6;this.Pa=null!==(e=a.Pa)&&void 0!==e?e:12E4;this.Ra=null!==(f=a.Ra)&&void 0!==f?f:5E3;this.databaseToken=null!==(g=a.databaseToken)&&void 0!==g?g:void 0;this.ja=!!a.ja;this.ha=null!==(h=a.ha)&&void 0!==h?h:.1;this.na=null!==(k=a.na)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.W&&(this.W=a.W);this.v=a.v;this.Ka=a.Ka;this.A=a.A;this.C=
a.C;this.O=a.O;this.xa=a.xa;this.wa=a.wa;this.databaseToken&&(!this.v||this.v("networkless_logging"))&&si(this)}
function si(a){J(a,function c(){var d=this;return A(c,function(e){if(!d.databaseToken)return e.return();ti(d);d.C.D()&&d.da();d.C.X(d.xa,d.da.bind(d));d.C.X(d.wa,d.Ba.bind(d));d.h=!0;return d.ja&&Math.random()<=d.ha?x(e,d.A.cb(d.databaseToken),0):e.o(0)})})}
n=ri.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A.set(d,this.databaseToken).then(function(e){d.id=e;c.C.D()&&ui(c,d)}).catch(function(e){ui(c,d);
vi(c,e)})}else this.O(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.v&&this.v("nwl_skip_retry")&&(e.skipRetry=c);if(this.C.D()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return J(d,function l(){var m=this,p;return A(l,function(r){if(1==r.h)return p=m,x(r,m.A.set(e,m.databaseToken).catch(function(q){vi(p,q)}),2);
f(g,h);r.h=0})})}}this.O(a,b,e.skipRetry)}else this.A.set(e,this.databaseToken).catch(function(g){d.O(a,b,e.skipRetry);
vi(d,g)})}else this.O(a,b,this.v&&this.v("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.A.V(d.id,c.databaseToken):e=!0;c.C.S&&c.v&&c.v("vss_network_hint")&&c.C.S(!0);f(g,h)};
this.O(d.url,d.options);this.A.set(d,this.databaseToken).then(function(g){d.id=g;e&&c.A.V(d.id,c.databaseToken)}).catch(function(g){vi(c,g)})}else this.O(a,b)};
n.da=function(){var a=this;if(!this.databaseToken)throw wh("throttleSend");this.i||(this.i=Of(function(){return J(a,function c(){var d=this,e;return A(c,function(f){if(1==f.h)return x(f,d.A.Ha("NEW",d.databaseToken),2);if(3!=f.h)return e=f.i,e?x(f,ui(d,e),3):(d.Ba(),f.return());d.i&&(d.i=0,d.da());f.h=0})})},this.Ua))};
n.Ba=function(){Rf(this.i);this.i=0};
function ui(a,b){return J(a,function d(){var e=this,f,g;return A(d,function(h){switch(h.h){case 1:if(!e.databaseToken)throw f=wh("immediateSend"),f;if(void 0===b.id){h.o(2);break}return x(h,e.A.ob(b.id,e.databaseToken),3);case 3:(g=h.i)?b=g:e.W(Error("The request cannot be found in the database."));case 2:if(wi(e,b,e.Qa)){h.o(4);break}e.W(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){h.o(5);break}return x(h,e.A.V(b.id,e.databaseToken),5);case 5:return h.return();
case 4:b.skipRetry||(b=xi(e,b));if(!b){h.o(0);break}if(!b.skipRetry||void 0===b.id){h.o(8);break}return x(h,e.A.V(b.id,e.databaseToken),8);case 8:e.O(b.url,b.options,!!b.skipRetry),h.h=0}})})}
function xi(a,b){if(!a.databaseToken)throw wh("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){return J(a,function h(){var k=this,l,m;return A(h,function(p){switch(p.h){case 1:l=k;m=yi(f);if(!(k.v&&k.v("nwl_consider_error_code")&&m||k.v&&!k.v("nwl_consider_error_code")&&k.potentialEsfErrorCounter<=k.na)){p.o(2);break}if(!k.C.J){p.o(3);break}return x(p,k.C.J(),3);case 3:if(k.C.D()){p.o(2);break}c(e,f);if(!k.v||!k.v("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){p.o(6);break}return x(p,k.A.ya(b.id,k.databaseToken,!1),6);case 6:return p.return();
case 2:if(k.v&&k.v("nwl_consider_error_code")&&!m&&k.potentialEsfErrorCounter>k.na)return p.return();k.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){p.o(8);break}return b.sendCount<k.Sa?x(p,k.A.ya(b.id,k.databaseToken),12):x(p,k.A.V(b.id,k.databaseToken),8);case 12:Of(function(){l.C.D()&&l.da()},k.Ra);
case 8:c(e,f),p.h=0}})})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return J(a,function h(){var k=this;return A(h,function(l){if(1==l.h)return void 0===(null===b||void 0===b?void 0:b.id)?l.o(2):x(l,k.A.V(b.id,k.databaseToken),2);k.C.S&&k.v&&k.v("vss_network_hint")&&k.C.S(!0);d(e,f);l.h=0})})};
return b}
function wi(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ti(a){if(!a.databaseToken)throw wh("retryQueuedRequests");a.A.Ha("QUEUED",a.databaseToken).then(function(b){b&&!wi(a,b,a.Pa)?Of(function(){return J(a,function d(){var e=this;return A(d,function(f){if(1==f.h)return void 0===b.id?f.o(2):x(f,e.A.ya(b.id,e.databaseToken),2);ti(e);f.h=0})})}):a.C.D()&&a.da()})}
function vi(a,b){a.Va&&!a.C.D()?a.Va(b):a.handleError(b)}
function yi(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var zi=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ea;N.prototype.publish=N.prototype.Y;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",zi);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Ai(a,b){Yh.call(this,a,b);this.options=b;mh(a)}
w(Ai,Yh);function Bi(a,b){var c;return function(){c||(c=new Ai(a,b));return c}}
Ai.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.za?mi:li)(a,b,Object.assign({},c))};
Ai.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.za?qi:ni)(this.name,a)};
function Ci(a,b){return Bi(a,b)}
;var Di;
function Ei(){if(Di)return Di();var a={};Di=Ci("LogsDatabaseV2",{la:(a.LogsRequestsStore={ra:2},a),za:!1,upgrade:function(b,c,d){c(2)&&Ih(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Di()}
;function Fi(a){return J(this,function c(){var d,e,f,g;return A(c,function(h){if(1==h.h)return d={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(h,Ei().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(h,Kh(e,f),3);g=h.i;d.tb=Q();Gi(d);return h.return(g)})})}
function Hi(a){return J(this,function c(){var d,e,f,g,h,k,l;return A(c,function(m){if(1==m.h)return d={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(m,Ei().open(),2);if(3!=m.h)return e=m.i,f=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,Q()],k=IDBKeyRange.bound(g,h),l=void 0,x(m,X(e,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(p){return Th(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(r){r.cursor.value&&(l=r.cursor.value,
"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
d.tb=Q();Gi(d);return m.return(l)})})}
function Ii(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return x(e,Ei().open(),2);d=e.i;return e.return(X(d,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Ji(a,b,c){c=void 0===c?!0:c;return J(this,function e(){var f;return A(e,function(g){if(1==g.h)return x(g,Ei().open(),2);f=g.i;return g.return(X(f,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(h){var k=h.objectStore("LogsRequestsStore");return k.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),W(k.h.put(l,void 0)).then(function(){return l})):V.resolve(void 0)})}))})})}
function Ki(a){return J(this,function c(){var d;return A(c,function(e){if(1==e.h)return x(e,Ei().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Li(){return J(this,function b(){var c,d;return A(b,function(e){if(1==e.h)return x(e,Ei().open(),2);c=e.i;d=Q()-2592E6;return x(e,X(c,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(f){return Qh(f.objectStore("LogsRequestsStore"),{},function(g){if(g.cursor.value.timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Mi(){J(this,function b(){return A(b,function(c){return x(c,pi(),0)})})}
function Gi(a){if(!P("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Ni={},Oi=Ci("ServiceWorkerLogsDatabase",{la:(Ni.SWHealthLog={ra:1},Ni),za:!0,upgrade:function(a,b){b(1)&&Ih(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Pi(){J(this,function b(){var c,d;return A(b,function(e){if(1==e.h)return P("web_clean_sw_logs_store")?x(e,Oi().open(),3):e.o(0);c=e.i;d=Q()-2592E6;return x(e,X(c,["SWHealthLog"],{mode:"readwrite",F:!0},function(f){return Qh(f.objectStore("SWHealthLog"),{},function(g){if(g.cursor.value.timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Qi(){return J(this,function b(){var c;return A(b,function(d){if(1==d.h)return x(d,Oi().open(),2);c=d.i;return x(d,c.clear("SWHealthLog"),0)})})}
;var Ri;function Si(){Ri||(Ri=new Xg("yt.offline"));return Ri}
function Ui(a){if(P("offline_error_handling")){var b=Si().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Si().set("errors",b,2592E3,!0)}}
;var Vi=Kf("network_polling_interval",3E4);function Y(){M.call(this);this.G=0;this.U=this.l=!1;this.i=this.sa();Wi(this);Xi(this)}
w(Y,M);function Yi(){if(!Y.h){var a=C("yt.networkStatusManager.instance")||new Y;E("yt.networkStatusManager.instance",a);Y.h=a}return Y.h}
n=Y.prototype;n.D=function(){return this.i};
n.S=function(a,b){a!==this.i&&((void 0===b?0:b)?this.J():this.i=a)};
n.qb=function(a){this.l=!0;if(void 0===a?0:a)this.G||Zi(this)};
n.sa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.fb=function(){this.U=!0};
n.X=function(a,b){return M.prototype.X.call(this,a,b)};
function Xi(a){window.addEventListener("online",function(){return J(a,function c(){var d=this;return A(c,function(e){if(1==e.h)return x(e,d.J(),2);if(d.U&&P("offline_error_handling")){var f=Si().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new jh(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;of(h)}Si().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Wi(a){window.addEventListener("offline",function(){return J(a,function c(){var d=this;return A(c,function(e){return x(e,d.J(),0)})})})}
function Zi(a){a.G=Mf(function(){return J(a,function c(){var d=this;return A(c,function(e){if(1==e.h)return d.i?d.sa()||!d.l?e.o(3):x(e,d.J(),3):x(e,d.J(),3);Zi(d);e.h=0})})},Vi)}
n.J=function(a){var b=this;return this.s?this.s:this.s=new Promise(function(c){return J(b,function e(){var f,g,h,k=this;return A(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ta(l,2,3),f&&(k.B=Of(function(){f.abort()},a||2E4)),x(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:va(l);k.s=void 0;k.B&&Rf(k.B);h!==k.i&&(k.i=h,k.i&&k.l?re(k,"ytnetworkstatus-online"):k.l&&re(k,"ytnetworkstatus-offline"));c(h);wa(l);break;case 2:ua(l),h=!1,l.o(3)}})})})};
Y.prototype.sendNetworkCheckRequest=Y.prototype.J;Y.prototype.listen=Y.prototype.X;Y.prototype.enableErrorFlushing=Y.prototype.fb;Y.prototype.getWindowStatus=Y.prototype.sa;Y.prototype.monitorNetworkStatusChange=Y.prototype.qb;Y.prototype.networkStatusHint=Y.prototype.S;Y.prototype.isNetworkAvailable=Y.prototype.D;Y.getInstance=Yi;function $i(a){a=void 0===a?{}:a;M.call(this);var b=this;this.l=this.B=0;this.i=Yi();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ea);a.La&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.i))a.oa?(this.oa=a.oa,c("ytnetworkstatus-online",function(){aj(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){aj(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){re(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){re(b,"publicytnetworkstatus-offline")}))}
w($i,M);$i.prototype.D=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
$i.prototype.S=function(a,b){b=void 0===b?!1:b;var c=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);c&&c(a,b)};
$i.prototype.J=function(a){return J(this,function c(){var d=this,e;return A(c,function(f){return(e=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function aj(a,b){a.oa?a.l?(Rf(a.B),a.B=Of(function(){a.s!==b&&(re(a,b),a.s=b,a.l=Q())},a.oa-(Q()-a.l))):(re(a,b),a.s=b,a.l=Q()):re(a,b)}
;var bj=0,cj=0,dj,ej=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,databaseToken:void 0,potentialEsfErrorCounter:cj,isIdbSupported:!1};E("ytNetworklessLoggingInitializationOptions",ej);function fj(a,b){function c(d){var e=gj().D();if(!hj()||!d||e&&P("vss_networkless_bypass_write"))ij(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};Fi(f,d).then(function(g){f.id=g;gj().D()&&jj(f)}).catch(function(g){jj(f);
gj().D()?of(g):Ui(g)})}}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?ii().then(function(d){c(d)}):c(kj())}
function lj(a,b){function c(d){if(hj()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Ki(e.id,d):f=!0;P("vss_network_hint")&&gj().S(!0);g(h,k)};
ij(e.url,e.options);Fi(e,d).then(function(h){e.id=h;f&&Ki(e.id,d)}).catch(function(h){gj().D()?of(h):Ui(h)})}else ij(a,b)}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?ii().then(function(d){c(d)}):c(kj())}
function mj(){var a=this,b=kj();if(!b)throw wh("throttleSend");bj||(bj=Of(function(){return J(a,function d(){var e;return A(d,function(f){if(1==f.h)return x(f,Hi("NEW",b),2);if(3!=f.h)return e=f.i,e?x(f,jj(e),3):(Rf(bj),bj=0,f.return());bj&&(bj=0,mj());f.h=0})})},100))}
function jj(a){return J(this,function c(){var d,e,f;return A(c,function(g){switch(g.h){case 1:d=kj();if(!d)throw e=wh("immediateSend"),e;if(void 0===a.id){g.o(2);break}return x(g,Ii(a.id,d),3);case 3:(f=g.i)?a=f:pf(Error("The request cannot be found in the database."));case 2:var h=a.timestamp;if(!(2592E6<=Q()-h)){g.o(4);break}pf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.o(5);break}return x(g,Ki(a.id,d),5);case 5:return g.return();case 4:a.skipRetry||
(a=nj(a));h=a;var k,l;if(null===(l=null===(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(Q());a=h;if(!a){g.o(0);break}if(!a.skipRetry||void 0===a.id){g.o(8);break}return x(g,Ki(a.id,d),8);case 8:ij(a.url,a.options,!!a.skipRetry),g.h=0}})})}
function nj(a){var b=this,c=kj();if(!c)throw wh("updateRequestHandlers");var d=a.options.onError?a.options.onError:function(){};
a.options.onError=function(f,g){return J(b,function k(){var l;return A(k,function(m){switch(m.h){case 1:l=yi(g);if(!(P("nwl_consider_error_code")&&l||!P("nwl_consider_error_code")&&oj()<=Kf("potential_esf_error_limit",10))){m.o(2);break}return x(m,gj().J(),3);case 3:if(gj().D()){m.o(2);break}d(f,g);if(!P("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){m.o(5);break}return x(m,Ji(a.id,c,!1),5);case 5:return m.return();case 2:if(P("nwl_consider_error_code")&&!l&&oj()>Kf("potential_esf_error_limit",
10))return m.return();C("ytNetworklessLoggingInitializationOptions")&&ej.potentialEsfErrorCounter++;cj++;if(void 0===(null===a||void 0===a?void 0:a.id)){m.o(7);break}return 1>a.sendCount?x(m,Ji(a.id,c),11):x(m,Ki(a.id,c),7);case 11:Of(function(){gj().D()&&mj()},5E3);
case 7:d(f,g),m.h=0}})})};
var e=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(f,g){return J(b,function k(){return A(k,function(l){if(1==l.h)return void 0===(null===a||void 0===a?void 0:a.id)?l.o(2):x(l,Ki(a.id,c),2);P("vss_network_hint")&&gj().S(!0);e(f,g);l.h=0})})};
return a}
function gj(){dj||(dj=new $i({La:!0,Ea:!0}));return dj}
function ij(a,b,c){if(P("networkless_with_beacon")){var d=["method","postBody"];if(Object.keys(b).length>d.length)c=!0;else{c=0;d=u(d);for(var e=d.next();!e.done;e=d.next())b.hasOwnProperty(e.value)&&c++;c=Object.keys(b).length!==c}c?ag(a,b):pg(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?mg(a):ag(a,b)}
function hj(){return C("ytNetworklessLoggingInitializationOptions")?ej.isNwlInitialized:!1}
function kj(){return C("ytNetworklessLoggingInitializationOptions")?ej.databaseToken:void 0}
function oj(){return C("ytNetworklessLoggingInitializationOptions")?ej.potentialEsfErrorCounter:cj}
;function pj(){ri.call(this,{A:{cb:Li,V:Ki,Ha:Hi,ob:Ii,ya:Ji,set:Fi},C:new $i({La:!0,Ea:!0}),handleError:of,W:pf,O:qj,now:Q,Va:Ui,Ka:Qf(),xa:"publicytnetworkstatus-online",wa:"publicytnetworkstatus-offline",ja:!0,ha:.1,na:Kf("potential_esf_error_limit",10),v:P});this.ja&&Math.random()<=this.ha&&this.databaseToken&&Pi();P("networkless_immediately_drop_sw_health_store")&&rj(this);P("networkless_immediately_drop_all_requests")&&Mi();qi("LogsDatabaseV2")}
w(pj,ri);function sj(){var a=C("yt.networklessRequestController.instance");a||(a=new pj,E("yt.networklessRequestController.instance",a),P("networkless_logging")&&ii().then(function(b){a.databaseToken=b;si(a)}));
return a}
pj.prototype.writeThenSend=function(a,b){b||(b={});kh()||(this.h=!1);ri.prototype.writeThenSend.call(this,a,b)};
pj.prototype.sendThenWrite=function(a,b,c){b||(b={});kh()||(this.h=!1);ri.prototype.sendThenWrite.call(this,a,b,c)};
pj.prototype.sendAndWrite=function(a,b){b||(b={});kh()||(this.h=!1);ri.prototype.sendAndWrite.call(this,a,b)};
function rj(a){J(a,function c(){var d=this,e,f;return A(c,function(g){e=d;if(!d.databaseToken)throw f=wh("clearSWHealthLogsDb"),f;return g.return(Qi().catch(function(h){e.handleError(h)}))})})}
function qj(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());if(P("networkless_with_beacon")){c=b;var e=["method","postBody"];if(Object.keys(c).length>e.length)c=!0;else{d=0;e=u(e);for(var f=e.next();!f.done;f=e.next())c.hasOwnProperty(f.value)&&d++;c=Object.keys(c).length!==d}c?ag(a,b):pg(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?mg(a):ag(a,b)}
;function tj(a){var b=this;this.config_=null;a?this.config_=a:Ug()&&(this.config_=Lg());Mf(function(){bh(b)},5E3)}
tj.prototype.isReady=function(){!this.config_&&Ug()&&(this.config_=Lg());return!!this.config_};
function Og(a,b,c,d){function e(v){v=void 0===v?!1:v;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||P("skip_ls_gel_retry")||(z=$g(b,c,l,k)),z)){var y=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(L,G){ah(z);y(L,G)};
c.onFetchSuccess=function(L,G){ah(z);K(L,G)}}try{v&&d.retry&&!d.Na.bypassNetworkless?(g.method="POST",d.Na.writeThenSend?P("use_new_nwl")?sj().writeThenSend(q,g):fj(q,g):P("use_new_nwl")?sj().sendAndWrite(q,g):lj(q,g)):(g.method="POST",g.postParams||(g.postParams={}),ag(q,g))}catch(L){if("InvalidAccessError"==L.name)z&&(ah(z),z=0),pf(Error("An extension is blocking network request."));
else throw L;}z&&Mf(function(){bh(a)},5E3)}
!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&pf(new jh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new jh("innertube xhrclient not ready",b,c,d);of(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,z){if(d.onError)d.onError(z)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.kb)&&(h=f);var k=a.config_.mb||!1,l=Vg(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.lb&&f;P("omit_innertube_api_key_for_Bearer_auth_header")&&(r=r&&f.startsWith("Bearer"));r||(p.key=a.config_.innertubeApiKey);var q=Hf(""+h+m,p||{},!0);P("use_new_nwl")||hj()?hi().then(function(v){e(v)}):e(!1)}
;function uj(a,b){var c=void 0===c?{}:c;var d=tj;O("ytLoggingEventsDefaultDisabled",!1)&&tj==tj&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&c.Ta&&(a=e.context,b=c.Ta,Pg[b]=b in Pg?Pg[b]+1:0,a.sequence={index:Pg[b],groupKey:b},c.Jb&&delete Pg[c.Ta]);(c.Ob?Ig:Eg)({endpoint:"log_event",
payload:e,M:c.M,ia:c.ia},d)}
;var vj=[{va:function(a){return"Cannot read property '"+a.key+"'"},
ma:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{va:function(a){return"Cannot call '"+a.key+"'"},
ma:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{va:function(a){return a.key+" is not defined"},
ma:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xj={R:[],P:[{ab:wj,weight:500}]};function wj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function yj(){this.P=[];this.R=[]}
var zj;function Aj(){if(!zj){var a=zj=new yj;a.R.length=0;a.P.length=0;xj.R&&a.R.push.apply(a.R,xj.R);xj.P&&a.P.push.apply(a.P,xj.P)}return zj}
;var Bj=new N;function Cj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ej(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Cj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Fj(e+".ve",f,g,h):0;d+=g;d+=Fj(e,a[e],b,c);if(500<d)break}}else c[b]=Gj(a),d+=c[b].length;else c[b]=Gj(a),d+=c[b].length;return d}
function Fj(a,b,c,d){c+="."+a;a=Gj(b);d[c]=a;return c.length+a.length}
function Gj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Hj=new Set,Ij=0,Jj=0,Kj=0,Lj=[],Mj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Nj={};function Oj(a){return Nj[a]||(Nj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Pj={},Qj=[],Le=new N,Rj={};function Sj(){for(var a=u(Qj),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Tj(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Oj(b)]:a.getAttribute("data-"+b):null;return c}
function Uj(a,b){for(var c=1;c<arguments.length;++c);Le.Y.apply(Le,arguments)}
;function Vj(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Wj(a,b,c){Xj||(Xj={},xf(window,"message",function(d){a:{if(d.origin===Z(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Xj[e.id])d.u=!0,d.u&&(H(d.s,d.sendMessage,d),d.s.length=0),d.Aa(e)}e=void 0}return e}));
Xj[c]=b}
var Xj=null;function Yj(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.s=[];this.l=null;this.G={};if(!a)throw Error("YouTube player element ID required.");this.id=Ja(this);this.B=c;this.setup(a,b)}
n=Yj.prototype;n.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
n.getIframe=function(){return this.h};
n.Aa=function(a){Zj(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);ak(this,a);return this};
function bk(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&ak(a,c)}}
n.destroy=function(){this.h&&this.h.id&&(Pj[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Xj&&(Xj[this.id]=null);this.i=null;a=this.h;for(var c in ab)ab[c][0]==a&&vf(c);this.m=this.h=null};
n.Da=function(){return{}};
function ck(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.s.push(b)}
function Zj(a,b,c){a.l.j||(c={target:a,data:c},a.l.Y(b,c),Uj(a.B+"."+b,c))}
function dk(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.i,"title"));(b=Z(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Da();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&H(["debugjs","debugcss"],function(h){var k=Ob(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Z(a.i,"host")+("/embed/"+Z(a.i,"videoId"))+"?"+Mb(g);return c}
n.Oa=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function ek(a){Wj(a.i,a,a.id);a.j=zf(a.Oa.bind(a));xf(a.h,"load",function(){window.clearInterval(a.j);a.j=zf(a.Oa.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Kb(a.src):"https://www.youtube.com"),this.i=new Vj(b),c||(b=dk(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ja(this.h)),Pj[this.h.id]=this,window.postMessage){this.l=new N;ek(this);b=Z(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Rj)Rj.hasOwnProperty(e)&&
bk(this,e)}};
function ak(a,b){a.G[b]||(a.G[b]=!0,ck(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=te(a);var b=[Kb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(y){if(y.name&&"SyntaxError"===y.name){if(!(y.message&&0<y.message.indexOf("target origin ''"))){var d=void 0,e=y;d=void 0===d?{}:d;d.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&
e.level&&(d=e.level);if(P("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=Ij)){g=void 0;var k=f,l=Bd(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+
": "+f)){var p=m.split("\n");p.shift();m=p.join("\n")}p=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=Ej(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var q=e.params;if("object"===typeof e.params)for(g in q){if(q[g]){var v="params."+g,z=Gj(q[g]);k[v]=z;r+=v.length+z.length;if(500<r)break}}else k.params=Gj(q)}if(Lj.length)for(g=0;g<Lj.length&&!(r=Ej(Lj[g],"params.context."+
g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:p,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Aj();f=u(e.R);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Lb)){e=h.weight;break a}e=u(e.P);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.ab(g)){e=f.weight;break a}e=1}g.sampleWeight=
e;e=g;g=u(vj);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ma[e.name])for(p=u(f.ma[e.name]),h=p.next();!h.done;h=p.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];p=l.groups;l={};for(m=0;m<p.length;m++)l[p[m]]=h[m+1],e.params["params.error."+p[m]]=h[m+1];e.message=f.va(l);break}e.params||(e.params={});g=Aj();e.params["params.errorServiceSignature"]="msg="+g.R.length+"&cb="+g.P.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&
(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));jb("sample").constructor!==hb&&(e.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!Hj.has(e.message)){"ERROR"===d?(Bj.Y("handleError",e),P("record_app_crashed_web")&&0===Kj&&1===e.sampleWeight&&(Kj++,uj("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Jj++):"WARNING"===d&&Bj.Y("handleWarning",e);if(P("kevlar_gel_error_routing")){g=
d;l=e;b:{f=u(Mj);for(h=f.next();!h.done;h=f.next())if(jg(h.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{h={stackTrace:l.stack};l.fileName&&(h.filename=l.fileName);f=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(h.lineNumber=Number(f[0]),h.columnNumber=Number(f[1])):h.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};
"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};p={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(p.experimentIds=O("FEXP_EXPERIMENTS"));if(l=l.params)for(m=u(Object.keys(l)),k=m.next();!k.done;k=m.next())k=k.value,p.kvPairs.push({key:"client."+k,value:String(l[k])});l=O("SERVER_NAME",void 0);m=O("SERVER_VERSION",void 0);l&&m&&(p.kvPairs.push({key:"server.name",value:l}),p.kvPairs.push({key:"server.version",
value:m}));f={errorMetadata:p,stackTrace:h,logMessage:f}}f&&(uj("clientError",f),("ERROR"===g||P("errors_flush_gel_always_killswitch"))&&Gg())}if(!P("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:O("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);
f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=O("SERVER_NAME",void 0);f=O("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}ag(O("ECATCHER_REPORT_HOST","")+"/error_204",d)}try{Hj.add(e.message)}catch(K){}Ij++}}}}}else throw y;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function fk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function gk(a){return 0===a.search("get")||0===a.search("is")}
;function hk(a,b){Yj.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.I={};this.playerInfo={}}
w(hk,Yj);n=hk.prototype;n.Da=function(){var a=Z(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Aa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)a.hasOwnProperty(c)&&(this.I[c]=a[c]);break;case "infoDelivery":ik(this,a);break;case "initialDelivery":D(a)&&(window.clearInterval(this.j),this.playerInfo={},this.I={},jk(this,a.apiInterface),ik(this,a));break;default:Zj(this,b,a)}};
function ik(a,b){if(D(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function jk(a,b){H(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:fk(c)?this[c]=function(){this.playerInfo={};
this.I={};ck(this,c,arguments);return this}:gk(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ck(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Z(this.i,"host")+("/embed/"+Z(this.i,"videoId")),b=Number(Z(this.i,"width")),c=Number(Z(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);a=lb(a,void 0);return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.I.namespaces?a?this.I[a]?this.I[a].options||[]:[]:this.I.namespaces||[]:[]};
n.getOption=function(a,b){if(this.I.namespaces&&a&&b&&this.I[a])return this.I[a][b]};
function kk(a){if("iframe"!==a.tagName.toLowerCase()){var b=Tj(a,"videoid");b&&(b={videoId:b,width:Tj(a,"width"),height:Tj(a,"height")},new hk(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Pj[a]});
E("YT.scan",Sj);E("YT.subscribe",function(a,b,c){Le.subscribe(a,b,c);Rj[a]=!0;for(var d in Pj)Pj.hasOwnProperty(d)&&bk(Pj[d],a)});
E("YT.unsubscribe",function(a,b,c){Ke(a,b,c)});
E("YT.Player",hk);Yj.prototype.destroy=Yj.prototype.destroy;Yj.prototype.setSize=Yj.prototype.setSize;Yj.prototype.getIframe=Yj.prototype.getIframe;Yj.prototype.addEventListener=Yj.prototype.addEventListener;hk.prototype.getVideoEmbedCode=hk.prototype.getVideoEmbedCode;hk.prototype.getOptions=hk.prototype.getOptions;hk.prototype.getOption=hk.prototype.getOption;
Qj.push(function(a){var b=a;b||(b=document);a=Xa(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ta(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Xa(b);H(Wa(a,b),kk)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Sj();var lk=B.onYTReady;lk&&lk();var mk=B.onYouTubeIframeAPIReady;mk&&mk();var nk=B.onYouTubePlayerAPIReady;nk&&nk();}).call(this);
