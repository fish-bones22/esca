/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@simonwep/pickr/dist/pickr.es5.min.js":
/*!************************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/pickr.es5.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Pickr 1.6.0 MIT | https://github.com/Simonwep/pickr */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=89)}([function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(57))},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(1),o=n(41),i=n(3),s=n(42),a=n(49),c=n(69),l=o("wks"),u=r.Symbol,p=c?u:u&&u.withoutSetter||s;t.exports=function(t){return i(l,t)||(a&&i(u,t)?l[t]=u[t]:l[t]=p("Symbol."+t)),l[t]}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(7),o=n(12),i=n(21);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(1),o=n(73),i=n(74),s=n(6),a=n(4),c=a("iterator"),l=a("toStringTag"),u=i.values;for(var p in o){var f=r[p],h=f&&f.prototype;if(h){if(h[c]!==u)try{s(h,c,u)}catch(t){h[c]=u}if(h[l]||s(h,l,p),o[p])for(var d in i)if(h[d]!==i[d])try{s(h,d,i[d])}catch(t){h[d]=i[d]}}}},function(t,e,n){var r=n(1),o=n(20).f,i=n(6),s=n(16),a=n(22),c=n(59),l=n(65);t.exports=function(t,e){var n,u,p,f,h,d=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[d]||a(d,{}):(r[d]||{}).prototype)for(u in e){if(f=e[u],p=t.noTargetGet?(h=o(n,u))&&h.value:n[u],!l(v?u:d+(g?".":"#")+u,t.forced)&&void 0!==p){if(typeof f==typeof p)continue;c(f,p)}(t.sham||p&&p.sham)&&i(f,"sham",!0),s(n,u,f,t)}}},function(t,e,n){var r=n(7),o=n(36),i=n(2),s=n(35),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=s(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(34),o=n(5);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(1),o=n(6),i=n(3),s=n(22),a=n(38),c=n(40),l=c.get,u=c.enforce,p=String(String).split("String");(t.exports=function(t,e,n,a){var c=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),u(n).source=p.join("string"==typeof e?e:"")),t!==r?(c?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a(this)}))},function(t,e){t.exports=!1},function(t,e,n){"use strict";var r,o,i=n(47),s=n(68),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,u=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=s.UNSUPPORTED_Y||s.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(u||f||p)&&(l=function(t){var e,n,r,o,s=this,l=p&&s.sticky,h=i.call(s),d=s.source,v=0,g=t;return l&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),g=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",h)),f&&(n=new RegExp("^"+d+"$(?!\\s)",h)),u&&(e=s.lastIndex),r=a.call(l?n:s,g),l?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=s.lastIndex,s.lastIndex+=r[0].length):s.lastIndex=0:u&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),f&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,e,n){var r=n(11),o=n(66);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,n){var r=n(7),o=n(33),i=n(21),s=n(14),a=n(35),c=n(3),l=n(36),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=s(t),e=a(e,!0),l)try{return u(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(41),o=n(42),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(16),o=n(2),i=n(0),s=n(47),a=RegExp.prototype,c=a.toString,l=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u="toString"!=c.name;(l||u)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in a)?s.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";n(67);var r=n(16),o=n(0),i=n(4),s=n(18),a=n(6),c=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u="$0"==="a".replace(/./,"$0"),p=i("replace"),f=!!/./[p]&&""===/./[p]("a","$0"),h=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var d=i(t),v=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!h){var y=/./[d],b=n(d,""[t],(function(t,e,n,r,o){return e.exec===s?v&&!o?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=b[0],_=b[1];r(String.prototype,t,m),r(RegExp.prototype,d,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}p&&a(RegExp.prototype[d],"sham",!0)}},function(t,e,n){"use strict";var r=n(70).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(15),o=n(18);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(28),o=n(51),i=n(2),s=n(5),a=n(84),c=n(29),l=n(13),u=n(30),p=n(18),f=n(0),h=[].push,d=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var a,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,f+"g");(a=p.call(v,r))&&!((c=v.lastIndex)>d&&(u.push(r.slice(d,a.index)),a.length>1&&a.index<r.length&&h.apply(u,a.slice(1)),l=a[0].length,d=c,u.length>=i));)v.lastIndex===a.index&&v.lastIndex++;return d===r.length?!l&&v.test("")||u.push(""):u.push(r.slice(d)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var s=n(r,t,this,o,r!==e);if(s.done)return s.value;var p=i(t),f=String(this),h=a(p,RegExp),g=p.unicode,y=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),b=new h(v?p:"^(?:"+p.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===f.length)return null===u(b,f)?[f]:[];for(var _=0,x=0,w=[];x<f.length;){b.lastIndex=v?x:0;var S,O=u(b,v?f:f.slice(x));if(null===O||(S=d(l(b.lastIndex+(v?0:x)),f.length))===_)x=c(f,x,g);else{if(w.push(f.slice(_,x)),w.length===m)return w;for(var A=1;A<=O.length-1;A++)if(w.push(O[A]),w.length===m)return w;x=_=S}}return w.push(f.slice(_)),w}]}),!v)},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(15),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(7),o=n(0),i=n(37);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(8),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,n){var r=n(39),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(1),o=n(22),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r,o,i,s=n(58),a=n(1),c=n(8),l=n(6),u=n(3),p=n(23),f=n(24),h=a.WeakMap;if(s){var d=new h,v=d.get,g=d.has,y=d.set;r=function(t,e){return y.call(d,t,e),e},o=function(t){return v.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var b=p("state");f[b]=!0,r=function(t,e){return l(t,b,e),e},o=function(t){return u(t,b)?t[b]:{}},i=function(t){return u(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(17),o=n(39);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(61),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(3),o=n(14),i=n(63).indexOf,s=n(24);t.exports=function(t,e){var n,a=o(t),c=0,l=[];for(n in a)!r(s,n)&&r(a,n)&&l.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(44),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(28),o=n(2),i=n(13),s=n(5),a=n(29),c=n(30);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=o(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;for(var p,f=[],h=0;null!==(p=c(s,l));){var d=String(p[0]);f[h]=d,""===d&&(s.lastIndex=a(l,i(s.lastIndex),u)),h++}return 0===h?null:f}]}))},function(t,e,n){var r=n(0);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r,o=n(11),i=n(20).f,s=n(13),a=n(71),c=n(5),l=n(72),u=n(17),p="".startsWith,f=Math.min,h=l("startsWith");o({target:"String",proto:!0,forced:!!(u||h||(r=i(String.prototype,"startsWith"),!r||r.writable))&&!h},{startsWith:function(t){var e=String(c(this));a(t);var n=s(f(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return p?p.call(e,r,n):e.slice(n,n+r.length)===r}})},function(t,e,n){var r=n(8),o=n(15),i=n(4)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r,o=n(2),i=n(76),s=n(25),a=n(24),c=n(77),l=n(37),u=n(23),p=u("IE_PROTO"),f=function(){},h=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var n=s.length;n--;)delete d.prototype[s[n]];return d()};a[p]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=o(t),n=new f,f.prototype=null,n[p]=t):n=d(),void 0===e?n:i(n,e)}},function(t,e,n){"use strict";var r,o,i,s=n(54),a=n(6),c=n(3),l=n(4),u=n(17),p=l("iterator"),f=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(r=o):f=!0),null==r&&(r={}),u||c(r,p)||a(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},function(t,e,n){var r=n(3),o=n(26),i=n(23),s=n(80),a=i("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(12).f,o=n(3),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t){t.exports=JSON.parse('{"a":"1.6.0"}')},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(1),o=n(38),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(3),o=n(60),i=n(20),s=n(12);t.exports=function(t,e){for(var n=o(e),a=s.f,c=i.f,l=0;l<n.length;l++){var u=n[l];r(t,u)||a(t,u,c(e,u))}}},function(t,e,n){var r=n(43),o=n(62),i=n(45),s=n(2);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(1);t.exports=r},function(t,e,n){var r=n(44),o=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(14),o=n(13),i=n(64),s=function(t){return function(e,n,s){var a,c=r(e),l=o(c.length),u=i(s,l);if(t&&n!=n){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var r=n(9),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(0),o=/#|\.prototype\./,i=function(t,e){var n=a[s(t)];return n==l||n!=c&&("function"==typeof e?r(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(7),o=n(0),i=n(46),s=n(45),a=n(33),c=n(26),l=n(34),u=Object.assign,p=Object.defineProperty;t.exports=!u||o((function(){if(r&&1!==u({b:1},u(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||"abcdefghijklmnopqrst"!=i(u({},e)).join("")}))?function(t,e){for(var n=c(t),o=arguments.length,u=1,p=s.f,f=a.f;o>u;)for(var h,d=l(arguments[u++]),v=p?i(d).concat(p(d)):i(d),g=v.length,y=0;g>y;)h=v[y++],r&&!f.call(d,h)||(n[h]=d[h]);return n}:u},function(t,e,n){"use strict";var r=n(11),o=n(18);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r=n(0);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r=n(49);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(9),o=n(5),i=function(t){return function(e,n){var i,s,a=String(o(e)),c=r(n),l=a.length;return c<0||c>=l?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):i:t?a.slice(c,c+2):s-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(51);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var r=n(4)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(14),o=n(75),i=n(31),s=n(40),a=n(78),c=s.set,l=s.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(4),o=n(52),i=n(12),s=r("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},function(t,e,n){var r=n(7),o=n(12),i=n(2),s=n(46);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=s(e),a=r.length,c=0;a>c;)o.f(t,n=r[c++],e[n]);return t}},function(t,e,n){var r=n(43);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(11),o=n(79),i=n(54),s=n(81),a=n(55),c=n(6),l=n(16),u=n(4),p=n(17),f=n(31),h=n(53),d=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,g=u("iterator"),y=function(){return this};t.exports=function(t,e,n,u,h,b,m){o(n,e,u);var _,x,w,S=function(t){if(t===h&&C)return C;if(!v&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},O=e+" Iterator",A=!1,E=t.prototype,k=E[g]||E["@@iterator"]||h&&E[h],C=!v&&k||S(h),j="Array"==e&&E.entries||k;if(j&&(_=i(j.call(new t)),d!==Object.prototype&&_.next&&(p||i(_)===d||(s?s(_,d):"function"!=typeof _[g]&&c(_,g,y)),a(_,O,!0,!0),p&&(f[O]=y))),"values"==h&&k&&"values"!==k.name&&(A=!0,C=function(){return k.call(this)}),p&&!m||E[g]===C||c(E,g,C),f[e]=C,h)if(x={values:S("values"),keys:b?C:S("keys"),entries:S("entries")},m)for(w in x)(v||A||!(w in E))&&l(E,w,x[w]);else r({target:e,proto:!0,forced:v||A},x);return x}},function(t,e,n){"use strict";var r=n(53).IteratorPrototype,o=n(52),i=n(21),s=n(55),a=n(31),c=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),s(t,l,!1,!0),a[l]=c,t}},function(t,e,n){var r=n(0);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(2),o=n(82);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(28),o=n(2),i=n(26),s=n(13),a=n(9),c=n(5),l=n(29),u=n(30),p=Math.max,f=Math.min,h=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(n,r){var o=c(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!g&&y||"string"==typeof r&&-1===r.indexOf(b)){var i=n(e,t,this,r);if(i.done)return i.value}var c=o(t),h=String(this),d="function"==typeof r;d||(r=String(r));var v=c.global;if(v){var _=c.unicode;c.lastIndex=0}for(var x=[];;){var w=u(c,h);if(null===w)break;if(x.push(w),!v)break;""===String(w[0])&&(c.lastIndex=l(h,s(c.lastIndex),_))}for(var S,O="",A=0,E=0;E<x.length;E++){w=x[E];for(var k=String(w[0]),C=p(f(a(w.index),h.length),0),j=[],P=1;P<w.length;P++)j.push(void 0===(S=w[P])?S:String(S));var R=w.groups;if(d){var L=[k].concat(j,C,h);void 0!==R&&L.push(R);var T=String(r.apply(void 0,L))}else T=m(k,h,C,j,R,r);C>=A&&(O+=h.slice(A,C)+T,A=C+k.length)}return O+h.slice(A)}];function m(t,n,r,o,s,a){var c=r+t.length,l=o.length,u=v;return void 0!==s&&(s=i(s),u=d),e.call(a,u,(function(e,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":a=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var p=h(u/10);return 0===p?e:p<=l?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):e}a=o[u-1]}return void 0===a?"":a}))}}))},function(t,e,n){var r=n(2),o=n(85),i=n(4)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[i])?e:o(n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(11),o=n(9),i=n(87),s=n(88),a=n(0),c=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2==1?u(t,e-1,n*t):u(t*t,e/2,n)};r({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}))},{toFixed:function(t){var e,n,r,a,c=i(this),p=o(t),f=[0,0,0,0,0,0],h="",d="0",v=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*f[n],f[n]=r%1e7,r=l(r/1e7)},g=function(t){for(var e=6,n=0;--e>=0;)n+=f[e],f[e]=l(n/t),n=n%t*1e7},y=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==f[t]){var n=String(f[t]);e=""===e?n:e+s.call("0",7-n.length)+n}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*u(2,69,1))-69)<0?c*u(2,-e,1):c/u(2,e,1),n*=4503599627370496,(e=52-e)>0){for(v(0,n),r=p;r>=7;)v(1e7,0),r-=7;for(v(u(10,r,1),0),r=e-1;r>=23;)g(1<<23),r-=23;g(1<<r),v(1,1),g(2),d=y()}else v(0,n),v(1<<-e,0),d=y()+s.call("0",p);return d=p>0?h+((a=d.length)<=p?"0."+s.call("0",p-a)+d:d.slice(0,a-p)+"."+d.slice(a-p)):h+d}})},function(t,e,n){var r=n(15);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},function(t,e,n){"use strict";var r=n(9),o=n(5);t.exports="".repeat||function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"on",(function(){return c})),n.d(r,"off",(function(){return l})),n.d(r,"createElementFromString",(function(){return u})),n.d(r,"createFromTemplate",(function(){return p})),n.d(r,"eventPath",(function(){return f})),n.d(r,"resolveElement",(function(){return h})),n.d(r,"adjustableInputNumbers",(function(){return d}));n(19),n(27),n(48),n(50),n(10),n(83),n(32);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n,r,o={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);for(const s of e)for(const e of n)s[t](e,r,i({capture:!1},o));return Array.prototype.slice.call(arguments,1)}const c=a.bind(null,"addEventListener"),l=a.bind(null,"removeEventListener");function u(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function p(t){const e=(t,e)=>{const n=t.getAttribute(e);return t.removeAttribute(e),n},n=(t,r={})=>{const o=e(t,":obj"),i=e(t,":ref"),s=o?r[o]={}:r;i&&(r[i]=t);for(const r of Array.from(t.children)){const t=e(r,":arr"),o=n(r,t?{}:s);t&&(s[t]||(s[t]=[])).push(Object.keys(o).length?o:r)}return r};return n(u(t))}function f(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let n=t.target.parentElement;for(e=[t.target,n];n=n.parentElement;)e.push(n);return e.push(document,window),e}function h(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((t,e,n,r)=>(t=t.querySelector(e),n<r.length-1?t.shadowRoot:t),document):null}function d(t,e=(t=>t)){function n(n){const r=[.001,.01,.1][Number(n.shiftKey||2*n.ctrlKey)]*(n.deltaY<0?1:-1);let o=0,i=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(t,n)=>n<=i&&n+t.length>=i?(i=n,e(Number(t),r,o)):(o++,t)),t.focus(),t.setSelectionRange(i,i),n.preventDefault(),t.dispatchEvent(new Event("input"))}c(t,"focus",()=>c(window,"wheel",n,{passive:!1})),c(t,"blur",()=>l(window,"wheel",n))}var v=n(56);const{min:g,max:y,floor:b,round:m}=Math;function _(t,e,n){e/=100,n/=100;const r=b(t=t/360*6),o=t-r,i=n*(1-e),s=n*(1-o*e),a=n*(1-(1-o)*e),c=r%6;return[255*[n,s,i,i,a,n][c],255*[a,n,n,s,i,i][c],255*[i,i,a,n,n,s][c]]}function x(t,e,n){const r=(2-(e/=100))*(n/=100)/2;return 0!==r&&(e=1===r?0:r<.5?e*n/(2*r):e*n/(2-2*r)),[t,100*e,100*r]}function w(t,e,n){const r=g(t/=255,e/=255,n/=255),o=y(t,e,n),i=o-r;let s,a;if(0===i)s=a=0;else{a=i/o;const r=((o-t)/6+i/2)/i,c=((o-e)/6+i/2)/i,l=((o-n)/6+i/2)/i;t===o?s=l-c:e===o?s=1/3+r-l:n===o&&(s=2/3+c-r),s<0?s+=1:s>1&&(s-=1)}return[360*s,100*a,100*o]}function S(t,e,n,r){return e/=100,n/=100,[...w(255*(1-g(1,(t/=100)*(1-(r/=100))+r)),255*(1-g(1,e*(1-r)+r)),255*(1-g(1,n*(1-r)+r)))]}function O(t,e,n){e/=100;const r=2*(e*=(n/=100)<.5?n:1-n)/(n+e)*100,o=100*(n+e);return[t,isNaN(r)?0:r,o]}function A(t){return w(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function E(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},n=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let r;t:for(const o in e){if(!(r=e[o].exec(t)))continue;const i=t=>!!r[2]==("number"==typeof t);switch(o){case"cmyk":{const[,t,e,i,s]=n(r);if(t>100||e>100||i>100||s>100)break t;return{values:S(t,e,i,s),type:o}}case"rgba":{const[,,,t,e,s,a]=n(r);if(t>255||e>255||s>255||a<0||a>1||!i(a))break t;return{values:[...w(t,e,s),a],a:a,type:o}}case"hexa":{let[,t]=r;4!==t.length&&3!==t.length||(t=t.split("").map(t=>t+t).join(""));const e=t.substring(0,6);let n=t.substring(6);return n=n?parseInt(n,16)/255:void 0,{values:[...A(e),n],a:n,type:o}}case"hsla":{const[,,,t,e,s,a]=n(r);if(t>360||e>100||s>100||a<0||a>1||!i(a))break t;return{values:[...O(t,e,s),a],a:a,type:o}}case"hsva":{const[,,,t,e,s,a]=n(r);if(t>360||e>100||s>100||a<0||a>1||!i(a))break t;return{values:[t,e,s,a],a:a,type:o}}}}return{values:null,type:null}}n(86);function k(t=0,e=0,n=0,r=1){const o=(t,e)=>(n=-1)=>e(~n?t.map(t=>Number(t.toFixed(n))):t),i={h:t,s:e,v:n,a:r,toHSVA(){const t=[i.h,i.s,i.v,i.a];return t.toString=o(t,t=>"hsva("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"),t},toHSLA(){const t=[...x(i.h,i.s,i.v),i.a];return t.toString=o(t,t=>"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"),t},toRGBA(){const t=[..._(i.h,i.s,i.v),i.a];return t.toString=o(t,t=>"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+i.a+")"),t},toCMYK(){const t=function(t,e,n){const r=_(t,e,n),o=r[0]/255,i=r[1]/255,s=r[2]/255,a=g(1-o,1-i,1-s);return[100*(1===a?0:(1-o-a)/(1-a)),100*(1===a?0:(1-i-a)/(1-a)),100*(1===a?0:(1-s-a)/(1-a)),100*a]}(i.h,i.s,i.v);return t.toString=o(t,t=>"cmyk("+t[0]+"%, "+t[1]+"%, "+t[2]+"%, "+t[3]+"%)"),t},toHEXA(){const t=function(t,e,n){return _(t,e,n).map(t=>m(t).toString(16).padStart(2,"0"))}(i.h,i.s,i.v),e=i.a>=1?"":Number((255*i.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>"#"+t.join("").toUpperCase(),t},clone:()=>k(i.h,i.s,i.v,i.a)};return i}const C=t=>Math.max(Math.min(t,1),0);function j(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{options:n}=e,{type:r,key:o}=t;if(document.activeElement===n.wrapper){const{lock:n}=e.options,i="ArrowUp"===o,s="ArrowRight"===o,a="ArrowDown"===o,c="ArrowLeft"===o;if("keydown"===r&&(i||s||a||c)){let r=0,o=0;"v"===n?r=i||s?1:-1:"h"===n?r=i||s?-1:1:(o=i?-1:a?1:0,r=c?-1:s?1:0),e.update(C(e.cache.x+.01*r),C(e.cache.y+.01*o)),t.preventDefault()}else o.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){c(document,["mouseup","touchend","touchcancel"],e._tapstop),c(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:n,cache:r}=e,{lock:o,element:i,wrapper:s}=n,a=s.getBoundingClientRect();let c=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];c=t?(e||t).clientX:0,l=t?(e||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),l<a.top?l=a.top:l>a.top+a.height&&(l=a.top+a.height),c-=a.left,l-=a.top}else r&&(c=r.x*a.width,l=r.y*a.height);"h"!==o&&(i.style.left="calc("+c/a.width*100+"% - "+i.offsetWidth/2+"px)"),"v"!==o&&(i.style.top="calc("+l/a.height*100+"% - "+i.offsetHeight/2+"px)"),e.cache={x:c/a.width,y:l/a.height};const u=C(c/a.width),p=C(l/a.height);switch(o){case"v":return n.onchange(u);case"h":return n.onchange(p);default:return n.onchange(u,p)}},_tapstop(){e.options.onstop(),l(document,["mouseup","touchend","touchcancel"],e._tapstop),l(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,n=0){const{left:r,top:o,width:i,height:s}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(n=t),e._tapmove({clientX:r+i*t,clientY:o+s*n})},destroy(){const{options:t,_tapstart:n,_keyboard:r}=e;l(document,["keydown","keyup"],r),l([t.wrapper,t.element],"mousedown",n),l([t.wrapper,t.element],"touchstart",n,{passive:!1})}},{options:n,_tapstart:r,_keyboard:o}=e;return c([n.wrapper,n.element],"mousedown",r),c([n.wrapper,n.element],"touchstart",r,{passive:!1}),c(document,["keydown","keyup"],o),e}function P(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=c(t.elements,"click",e=>{t.elements.forEach(n=>n.classList[e.target===n?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>l(...e)}}function R({el:t,reference:e,padding:n=8}){const r={start:"sme",middle:"mse",end:"ems"},o={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},i=((t={})=>(e,n=t[e])=>{if(n)return n;const[r,o="middle"]=e.split("-"),i="top"===r||"bottom"===r;return t[e]={position:r,variant:o,isVertical:i}})();return{update(s,a=!1){const{position:c,variant:l,isVertical:u}=i(s),p=e.getBoundingClientRect(),f=t.getBoundingClientRect(),h=t=>t?{t:p.top-f.height-n,b:p.bottom+n}:{r:p.right+n,l:p.left-f.width-n},d=t=>t?{s:p.left+p.width-f.width,m:-f.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-f.height,m:p.bottom-p.height/2-f.height/2,e:p.bottom-p.height},v={},g=(t,e,n)=>{const r="top"===n,o=r?f.height:f.width,i=window[r?"innerHeight":"innerWidth"];for(const r of t){const t=e[r],s=v[n]=t+"px";if(t>0&&t+o<i)return s}return null};for(const e of[u,!u]){const n=e?"top":"left",i=e?"left":"top",s=g(o[c],h(e),n),a=g(r[l],d(e),i);if(s&&a)return t.style[i]=a,void(t.style[n]=s)}a?(t.style.top=(window.innerHeight-f.height)/2+"px",t.style.left=(window.innerWidth-f.width)/2+"px"):(t.style.left=v.left,t.style.top=v.top)}}}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class T{constructor(t){L(this,"_initializingActive",!0),L(this,"_recalc",!0),L(this,"_nanopop",null),L(this,"_root",null),L(this,"_color",k()),L(this,"_lastColor",k()),L(this,"_swatchColors",[]),L(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const{swatches:e,components:n,theme:r,sliders:o,lockOpacity:i,padding:s}=t;["nano","monolith"].includes(r)&&!o&&(t.sliders="h"),n.interaction||(n.interaction={});const{preview:a,opacity:c,hue:l,palette:u}=n;n.opacity=!i&&c,n.palette=u||a||c||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(t=>this.addSwatch(t));const{button:p,app:f}=this._root;this._nanopop=R({reference:p,padding:s,el:f}),p.setAttribute("role","button"),p.setAttribute("aria-label",this._t("btn:toggle"));const h=this;requestAnimationFrame((function e(){if(!f.offsetWidth&&f.parentElement!==t.container)return requestAnimationFrame(e);h.setColor(t.default),h._rePositioningPicker(),t.defaultRepresentation&&(h._representation=t.defaultRepresentation,h.setColorRepresentation(h._representation)),t.showAlways&&h.show(),h._initializingActive=!1,h._emit("init")}))}_preBuild(){const{options:t}=this;for(const e of["el","container"])t[e]=h(t[e]);this._root=(t=>{const{components:e,useAsButton:n,inline:r,appClass:o,theme:i,lockOpacity:s}=t.options,a=t=>t?"":'style="display:none" hidden',c=e=>t._t(e),l=p('\n      <div :ref="root" class="pickr">\n\n        '+(n?"":'<button type="button" :ref="button" class="pcr-button"></button>')+'\n\n        <div :ref="app" class="pcr-app '+(o||"")+'" data-theme="'+i+'" '+(r?'style="position: unset"':"")+' aria-label="'+c("ui:dialog")+'" role="window">\n          <div class="pcr-selection" '+a(e.palette)+'>\n            <div :obj="preview" class="pcr-color-preview" '+a(e.preview)+'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="'+c("btn:last-color")+'"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="'+c("aria:palette")+'" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" '+a(e.hue)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="'+c("aria:hue")+'" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" '+a(e.opacity)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="'+c("aria:opacity")+'" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches '+(e.palette?"":"pcr-last")+'" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" '+a(Object.keys(e.interaction).length)+'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" '+a(e.interaction.input)+' aria-label="'+c("aria:input")+'">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="'+(s?"HEX":"HEXA")+'" type="button" '+a(e.interaction.hex)+'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="'+(s?"RGB":"RGBA")+'" type="button" '+a(e.interaction.rgba)+'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="'+(s?"HSL":"HSLA")+'" type="button" '+a(e.interaction.hsla)+'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="'+(s?"HSV":"HSVA")+'" type="button" '+a(e.interaction.hsva)+'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" '+a(e.interaction.cmyk)+'>\n\n            <input :ref="save" class="pcr-save" value="'+c("btn:save")+'" type="button" '+a(e.interaction.save)+' aria-label="'+c("aria:btn:save")+'">\n            <input :ref="cancel" class="pcr-cancel" value="'+c("btn:cancel")+'" type="button" '+a(e.interaction.cancel)+' aria-label="'+c("aria:btn:cancel")+'">\n            <input :ref="clear" class="pcr-clear" value="'+c("btn:clear")+'" type="button" '+a(e.interaction.clear)+' aria-label="'+c("aria:btn:clear")+'">\n          </div>\n        </div>\n      </div>\n    '),u=l.interaction;return u.options.find(t=>!t.hidden&&!t.classList.add("active")),u.type=()=>u.options.find(t=>t.classList.contains("active")),l})(this),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const n=t.el.parentElement;t.el.nextSibling?n.insertBefore(e.app,t.el.nextSibling):n.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,n=(t.options.sliders||"v").repeat(2),[r,o]=n.match(/^[vh]+$/g)?n:[],i=()=>this._color||(this._color=this._lastColor.clone()),s={palette:j({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop",t),onchange(n,r){if(!e.palette)return;const o=i(),{_root:s,options:a}=t,{lastColor:c,currentColor:l}=s.preview;t._recalc&&(o.s=100*n,o.v=100-100*r,o.v<0&&(o.v=0),t._updateOutput());const u=o.toRGBA().toString(0);this.element.style.background=u,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, "+o.a+"), transparent),\n                        linear-gradient(to left, hsla("+o.h+", 100%, 50%, "+o.a+"), rgba(255, 255, 255, "+o.a+"))\n                    ",a.comparison?a.useAsButton||t._lastColor||(c.style.color=u):(s.button.style.color=u,s.button.classList.remove("clear"));const p=o.toHEXA().toString();for(const{el:e,color:n}of t._swatchColors)e.classList[p===n.toHEXA().toString()?"add":"remove"]("pcr-active");l.style.color=u}}),hue:j({lock:"v"===o?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop",t),onchange(n){if(!e.hue||!e.palette)return;const r=i();t._recalc&&(r.h=360*n),this.element.style.backgroundColor="hsl("+r.h+", 100%, 50%)",s.palette.trigger()}}),opacity:j({lock:"v"===r?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop",t),onchange(n){if(!e.opacity||!e.palette)return;const r=i();t._recalc&&(r.a=Math.round(100*n)/100),this.element.style.background="rgba(0, 0, 0, "+r.a+")",s.palette.trigger()}}),selectable:P({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput()}})};this._components=s}_bindEvents(){const{_root:t,options:e}=this,n=[c(t.interaction.clear,"click",()=>this._clearColor()),c([t.interaction.cancel,t.preview.lastColor],"click",()=>{this._emit("cancel",this),this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0)}),c(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),c(t.interaction.result,["keyup","input"],t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),c(t.interaction.result,["focus","blur"],t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput()}),c([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!e.showAlways){const r=e.closeWithKey;n.push(c(t.button,"click",()=>this.isOpen()?this.hide():this.show()),c(document,"keyup",t=>this.isOpen()&&(t.key===r||t.code===r)&&this.hide()),c(document,["touchstart","mousedown"],e=>{this.isOpen()&&!f(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};d(t.interaction.result,(t,n,r)=>{const o=e[this.getColorRepresentation().toLowerCase()];if(o){const e=o[r],i=t+(e>=100?1e3*n:n);return i<=0?0:Number((i<e?i:e).toPrecision(3))}return t})}if(e.autoReposition&&!e.inline){let t=null;const r=this;n.push(c(window,["scroll","resize"],()=>{r.isOpen()&&(e.closeOnScroll&&r.hide(),null===t?(t=setTimeout(()=>t=null,100),requestAnimationFrame((function e(){r._rePositioningPicker(),null!==t&&requestAnimationFrame(e)}))):(clearTimeout(t),t=setTimeout(()=>t=null,100)))},{capture:!0}))}this._eventBindings=n}_rePositioningPicker(){const{options:t}=this;t.inline||this._nanopop.update(t.position,!this._recalc)}_updateOutput(){const{_root:t,_color:e,options:n}=this;if(t.interaction.type()){const r="to"+t.interaction.type().getAttribute("data-type");t.interaction.result.value="function"==typeof e[r]?e[r]().toString(n.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}_clearColor(t=!1){const{_root:e,options:n}=this;n.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),n.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}_parseLocalColor(t){const{values:e,type:n,a:r}=E(t),{lockOpacity:o}=this.options,i=void 0!==r&&1!==r;return e&&3===e.length&&(e[3]=void 0),{values:!e||o&&i?null:e,type:n}}_emit(t,...e){this._eventListener[t].forEach(t=>t(...e,this))}_t(t){return this.options.i18n[t]||T.I18N_DEFAULTS[t]}on(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this}off(t,e){const n=this._eventListener[t];if(n){const t=n.indexOf(e);~t&&n.splice(t,1)}return this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:n}=this,r=k(...e),o=u('<button type="button" style="color: '+r.toRGBA().toString(0)+'" aria-label="'+this._t("btn:swatch")+'"/>');return n.swatches.appendChild(o),t.push({el:o,color:r}),this._eventBindings.push(c(o,"click",()=>{this.setHSVA(...r.toHSVA(),!0),this._emit("swatchselect",r),this._emit("change",r)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:n}=e;return this._root.swatches.removeChild(n),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:n}=this._root,r=this._color.toRGBA().toString(0);return e.lastColor.style.color=r,this.options.useAsButton||(n.style.color=r),n.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){this._eventBindings.forEach(t=>l(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(t=>this[t]=null)}hide(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}show(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,n=0,r=1,o=!1){const i=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||n<0||n>100||r<0||r>1)return!1;this._color=k(t,e,n,r);const{hue:s,opacity:a,palette:c}=this._components;return s.update(t/360),a.update(r),c.update(e/100,1-n/100),o||this.applyColor(),i&&this._updateOutput(),this._recalc=i,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:n,type:r}=this._parseLocalColor(t);if(n){const t=r.toUpperCase(),{options:o}=this._root.interaction,i=o.find(e=>e.getAttribute("data-type")===t);if(i&&!i.hidden)for(const t of o)t.classList[t===i?"add":"remove"]("active");return!!this.setHSVA(...n,e)&&this.setColorRepresentation(t)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}L(T,"utils",r),L(T,"libs",{HSVaColor:k,Moveable:j,Nanopop:R,Selectable:P}),L(T,"version",v.a),L(T,"I18N_DEFAULTS",{"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"}),L(T,"create",t=>new T(t));e.default=T}]).default}));
//# sourceMappingURL=pickr.es5.min.js.map

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./resources/js/common/dynamicPanel.js":
/*!*********************************************!*\
  !*** ./resources/js/common/dynamicPanel.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    key: "panel",
    panelAction: ".panel-actions",
    startCount: 1,
    navigateByArrowKeys: true,
    newPanelKeys: [13],
    isDraggable: true,
    draggable: {},
    autoformatPaste: false,
    getChildOfTemplate: true
  };
  var panelSelector = ".panel-item";
  var panelClass = panelSelector.replace(/[.,#]*/g, '');
  /**
   * Initialize the options
   * @param {Object} options
   */

  function initOptions(options) {
    if (!options.hasOwnProperty('panelAction') || options['panelAction'] == '') {
      options['panelAction'] = options.hasOwnProperty('key') ? "." + options.key + "-actions" : defaults.panelAction;
    }

    return options;
  }
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */


  function getOption(object, key) {
    var options = $(object).data('dynamicPanel-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('dynamicPanel-options');
    options[key] = value;
    $(object).data('dynamicPanel-options', options);
  }
  /**
   * Insert a panel from a position
   * @param {object} obj Target DOM
   * @param {int} index Position where to insert the panel
   */


  function insertPanel(obj, index) {
    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // Get current count of panels
    var panelCount = getOption(obj, 'panelCount');

    if (index == undefined) {
      index = panelCount > 0 ? panelCount : 0;
    }

    if (index > panelCount) {
      index = panelCount;
    } // Get next sibling panel


    var nextPanel = $(obj).children(panelSelector + '[data-order="' + (index + 1) + '"]').first();
    var firstSibling = nextPanel; // Adjust order of succeeding panels first

    while (nextPanel.length > 0) {
      var currOrder = nextPanel.attr('data-order') * 1;
      nextPanel.attr('data-order', currOrder + 1);
      nextPanel = nextPanel.next(panelSelector);
    } // Get panel template selector


    var panelTemplateSelector = getOption(obj, 'panelTemplate');
    var panel;

    if (getOption(obj, 'getChildOfTemplate')) {
      panel = $($(panelTemplateSelector).html());
    } else {
      panel = $(panelTemplateSelector).clone();
    } // Set up attributes


    panel.attr('data-order', index + 1).addClass(panelClass); // Get delete selector from options
    // then set event listener for delete

    var removerSelector = getOption(obj, 'removerSelector');

    if (removerSelector != '' && removerSelector != undefined) {
      panel.find(removerSelector).bind('click', function () {
        var index = $(this).closest(panelSelector).attr('data-order') * 1 - 1;
        removePanel(obj, index);
      });
    } // Event listener for keys


    panel.find('input[type="text"]').keyup(function (event) {
      focusPanelByKey(obj, panel, event.which);

      if (getOption(obj, 'navigateByArrowKeys') && event.which == 38 || event.which == 40) {
        navigatePanelByKey(panel, event.which == 38 ? 'up' : 'down');
      }
    }); // Draggable

    var draggable = getOption(obj, 'isDraggable');

    if (draggable) {
      panel.draggable({
        addClasses: false,
        connectToSortable: '#' + $(obj).attr('id'),
        handle: panel.find('.move-handle'),
        revert: true,
        revertDuration: 0
      });
    } // Add to panel container


    if (firstSibling.length <= 0) {
      // Get container selector from options
      var container = getOption(obj, 'container');

      if (container == undefined) {
        $(obj).append(panel);
      } else {
        $(obj).find(container).append(panel);
      }
    } else {
      firstSibling.before(panel);
    } // Set panel count


    setOption(obj, 'panelCount', ++panelCount); // Set id if given

    if (id != null && typeof id == 'string') {
      panel.attr('data-id', id);
    }

    $(obj).trigger('dynamicPanel:insert' + getOption(obj, 'key'), [panel]);
    return panel;
  }

  function focusPanelByKey(obj, panel, key) {
    // Get inlcuded keys to activate
    var newPanelKeys = getOption(obj, 'newPanelKeys');
    if (newPanelKeys == undefined || _typeof(newPanelKeys) != 'object' || newPanelKeys.length <= 0) return false; // Key not on defined keys

    if (!newPanelKeys.includes(key)) return false; // Get closest input from the next panel

    panel = panel.next(panelSelector); // If no next panel, create new

    if (panel.length <= 0) {
      panel = insertPanel(obj);
    } // Focus to this panel


    panel.find('input[type="text"]').focus();
  }

  function navigatePanelByKey(panel, direction) {
    switch (direction.toLowerCase()) {
      case 'up':
        panel = panel.prev(panelSelector);
        break;

      case 'down':
        panel = panel.next(panelSelector);
        break;

      default:
        return false;
    }

    if (panel.length <= 0) return false; // Focus to this panel

    panel.find('input[type="text"]').focus();
  }
  /**
   * Remove target panel and reorder succeeding sibling panels
   * @param {object} obj Target object
   * @param {int} index panel position to remove
   */


  function removePanel(obj, index) {
    // Set panel count
    var panelCount = getOption(obj, 'panelCount');

    if (panelCount <= 0) {
      console.error("dynamicPanel.deletePanel() => No panels to delete");
    }

    if (index == undefined || index > panelCount) {
      index = panelCount - 1;
    }

    var panel = $(obj).children(panelSelector + '[data-order="' + (index + 1) + '"]').first(); // Get next sibling item

    var next = panel.next(panelSelector);
    panel.remove();
    panel = next;

    while (panel.length > 0) {
      // Get current order of the next sibling panel
      currentOrder = panel.attr('data-order') * 1 - 1; // Set order of the item

      panel.attr('data-order', currentOrder); // Get next sibling item

      panel = panel.next(panelSelector);
    }

    setOption(obj, 'panelCount', --panelCount);
  }
  /**
   * Remove all panels
   * @param {object} obj
   */


  function removeAll(obj) {
    if ($(obj).children('.panel-item').length <= 0) return;
    $(obj).children('.panel-item').each(function () {
      removePanel(obj, $(this).attr('data-order') * 1 - 1);
    });
  }

  $.fn.dynamicPanel = function (command, option, val) {
    /** INIT */
    if (_typeof(command) === 'object') {
      return this.each(function () {
        var self = this; // Get data attributes and add them to settings
        // data-remover

        if ($(self).attr('data-remover') != undefined) {
          command['removerSelector'] = $(self).attr('data-remover');
        } // data-adder


        if ($(self).attr('data-adder') != undefined) {
          command['adderSelector'] = $(self).attr('data-adder');
        } // data-template


        if ($(self).attr('data-template') != undefined) {
          command['panelTemplate'] = $(self).attr('data-template');
        } // Set settings


        var settings = $.extend({}, defaults, initOptions(command));
        $(self).data('dynamicPanel-options', settings);
        $(self).addClass('dynamicPanel');

        if (typeof settings.panelTemplate == 'string' && settings.panelTemplate == $(self).html() || _typeof(settings.panelTemplate) == 'object' && $(self).children().is(settings.panelTemplate)) {
          setOption(self, 'getChildOfTemplate', false);
          settings.panelTemplate = $(settings.panelTemplate).clone();
          $(self).empty();
        } // Set draggable


        var dragOpt = settings.draggable;
        var cancelOpt = dragOpt != undefined && dragOpt.hasOwnProperty('cancel') ? dragOpt.cancel : [];

        if (settings.isDraggable) {
          $(self).sortable({
            addClasses: false,
            cancel: ['input', 'a', 'select', 'button:not(.move-handle)'].concat(cancelOpt).join(','),
            cursor: 'grabbing',
            stop: function stop(event, ui) {
              // Resort panel after sorting
              var index = 1;
              $(self).children(panelSelector).each(function () {
                if (index !== $(this).attr('data-order') * 1) {
                  $(this).attr('data-order', index);
                }

                index++;
              }); //$(ui.item).removeAttr('style');
            }
          });
        }
        /** Event listeners **/
        // Add panels button


        $(document).on('click', '[data-target="#' + $(self).attr('id') + '"]', function () {
          // Create panel then focus on the closest text input
          insertPanel(self).find('input[type="text"]').focus();
        }); // paste event

        if (settings.autoformatPaste) {
          $(document).on('paste', '#' + $(self).attr('id') + '>' + panelSelector + ' input[type="text"]', function (event) {
            // Get clipboard data
            var clipboardData = event.originalEvent.clipboardData.getData('text');
            if (clipboardData == undefined) return true; // Split clipboard data by newline

            var lines = clipboardData.split('\n');
            if (lines == undefined || lines.length <= 1) return true;
            event.preventDefault(); // Process clipboard data, creating new panel per line of text

            var panelInput = $(this);
            panelInput.val(lines[0].trim()).trigger('change');

            for (var i = 1; i < lines.length; i++) {
              panelInput = panelInput.closest(panelSelector).next(panelSelector).find('input[type="text"]');

              if (panelInput.length <= 0) {
                panelInput = insertPanel(self).find('input[type="text"]');
              }

              panelInput.val(lines[i].trim());
              panelInput.trigger('change');
            }
          });
        }
        /** Custom events */
        // onInsert


        if (settings.hasOwnProperty('onInsert') && settings.onInsert != undefined) {
          $(self).on('dynamicPanel:insert' + settings.key, settings.onInsert);
        } // Create panels


        for (var i = 0; i < settings.startCount; i++) {
          insertPanel(self);
        }
      });
    }
    /** ACTIONS */


    if (typeof command === 'string') {
      switch (command.toLowerCase()) {
        case 'option':
          return getOption(this, option);

        case 'insert':
          var panel;
          this.each(function () {
            panel = insertPanel(this, option, val);
          });
          return panel;

        case 'remove':
          return this.each(function () {
            removePanel(this, option);
          });

        case 'removeall':
          return this.each(function () {
            removeAll(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/options.js":
/*!********************************************!*\
  !*** ./resources/js/songViewer/options.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr/dist/pickr.es5.min */ "./node_modules/@simonwep/pickr/dist/pickr.es5.min.js");
/* harmony import */ var _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function ($) {
  var defaults = {
    'toggler': '.options-toggler',
    'options': {
      'mode': '',
      'performancefontsize': '',
      'performancefontfamily': '',
      'displayfontsize': '',
      'displayfontfamily': '',
      'displayfontcolor': '',
      'displayalignment': '',
      'simplefontsize': ''
    }
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('optionsPanel-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('optionsPanel-options');
    options[key] = value;
    $(object).data('optionsPanel-options', options);
  }

  function show(obj) {
    $(obj).addClass('shown');
  }

  function hide(obj) {
    $(obj).removeClass('shown');
  }

  function setOptionValue(obj, key, value) {
    var options = getOption(obj, 'options');
    if (options == null || _typeof(options) != 'object' || !options.hasOwnProperty(key)) return;
    options[key] = value;
    setOption(obj, 'options', options);
  }

  function serialize(obj) {
    var options = getOption(obj, 'options');
    if (options == null || _typeof(options) != 'object') return;
    window.localStorage.setItem('songvieweroptions', JSON.stringify(options));
  }

  function deserialize(obj) {
    var strOptions = window.localStorage.getItem('songvieweroptions');
    var defaultOptions = getOption(obj, 'options');
    if (strOptions == null) return defaultOptions;
    var options = JSON.parse(strOptions);
    setOption(obj, 'options', options);
    return options;
  }

  $.fn.optionsPanel = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('optionsPanel-options', settings); // Options panel toggler

        $(document).find(settings.toggler).on('click', function () {
          if ($(self).hasClass('shown')) {
            hide(self);
          } else {
            show(self);
          }
        }); // Options panel close

        $(self).find('.close').on('click', function () {
          hide(self);
        }); // Options panel items

        $(self).find('.option-item.group').on('click', function () {
          if (!$(this).hasClass('selected')) {
            $(this).siblings('.selected').removeClass('selected');
            $(this).addClass('selected');
            $($(this).attr('data-target')).val($(this).attr('data-value')).trigger('change');
          }
        }); // Options panel section toggler

        $(self).find('.fold').on('click', function () {
          $(this).closest('.section').removeClass('expanded');
        });
        $(self).find('.expand').on('click', function () {
          $(this).closest('.section').addClass('expanded');
        }); // Custom event listeners

        settings.listeners.forEach(function (listener) {
          $(self).find(listener.target).on(listener.event, listener.action);
        }); // Color picker

        var pickr = _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0___default.a.create({
          'el': '#optionColorPicker',
          'theme': 'monolith',
          'swatches': ['rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 1)', 'rgba(216, 101, 96, 1)', 'rgba(83, 172, 138, 1)', 'rgba(80, 113, 180, 1)'],
          'components': {
            // Main components
            'preview': true,
            'opacity': true,
            'hue': true,
            // Input / output Options
            'interaction': {
              'input': true,
              'save': true
            }
          },
          'i18n': {
            'btn:save': 'Set'
          }
        });
        pickr.on('save', function (color, instance) {
          $(self).find('#optionAudienceFontColor').val(color.toRGBA().toString(0)).trigger('change');
          pickr.hide();
        });
        $(self).removeClass('performance').removeClass('simple').removeClass('audience').addClass($(self).find('#optionView').val()); // Set default values

        var defaultOptions = deserialize(self);
        $(self).find('#optionView').val(defaultOptions.mode == '' ? settings.options.mode : defaultOptions.mode).trigger('change');
        $(self).find('#optionPerformanceFontSize').children('option[value="' + (defaultOptions.performancefontsize == '' ? settings.options.performancefontsize : defaultOptions.performancefontsize) + '"]').prop('selected', true);
        $(self).find('#optionPerformanceFontFamily').children('option[value="' + (defaultOptions.performancefontfamily == '' ? settings.options.performancefontfamily : defaultOptions.performancefontfamily) + '"]').prop('selected', true);
        $(self).find('#optionAudienceFontSize').children('option[value="' + (defaultOptions.displayfontsize == '' ? settings.options.displayfontsize : defaultOptions.displayfontsize) + '"]').prop('selected', true);
        $(self).find('#optionAudienceFontFamily').children('option[value="' + (defaultOptions.displayfontfamily == '' ? settings.options.displayfontfamily : defaultOptions.displayfontfamily) + '"]').prop('selected', true);
        $(self).find('#optionAudienceFontColor').val(defaultOptions.displayfontcolor == '' ? settings.options.displayfontcolor : defaultOptions.displayfontcolor);
        window.setTimeout(function () {
          pickr.setColor(defaultOptions.displayfontcolor == '' ? settings.options.displayfontcolor : defaultOptions.displayfontcolor);
        }, 500);
        $(self).find('#optionAudienceAlignment').val(defaultOptions.displayalignment == '' ? settings.options.displayalignment : defaultOptions.displayalignment);
        $(self).find('#optionSimpleFontSize').children('option[value="' + (defaultOptions.simplefontsize == '' ? settings.options.simplefontsize : defaultOptions.simplefontsize) + '"]').prop('selected', true);
        $(self).find('.section-content').each(function () {
          var section = this;
          var inp = $(this).find('input[type="hidden"]');
          inp.each(function () {
            var val = $(this).val();
            var id = $(this).attr('id');
            $(section).find('.option-item[data-target="#' + id + '"][data-value="' + val + '"]').trigger('click');
          });
        });
      });
    }

    if (typeof command == 'string') {
      switch (command.toLocaleLowerCase()) {
        case 'option':
          if (typeof option != 'string') return this;
          return getOption(this, option);

        case 'hide':
          return $(this).each(function () {
            hide(this);
          });

        case 'show':
          return $(this).each(function () {
            show(this);
          });

        case 'setoptionvalue':
          if (option == undefined || value == undefined) return this;
          return $(this).each(function () {
            setOptionValue(this, option, value);
          });

        case 'serialize':
          return $(this).each(function () {
            serialize(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songItem.js":
/*!*********************************************!*\
  !*** ./resources/js/songViewer/songItem.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'keySelector': '',
    'key': 'C',
    'scale': 'major',
    'modulation': 0,
    'songTitlePanel': '',
    'songArtistPanel': '',
    'songPartsContainer': '',
    'songLinesContainer': '',
    'songPartTemplate': '',
    'songLineTemplate': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': '',
    'fontSize': '',
    'fontFamily': '',
    'mode': 'performance',
    'sequenceListPanel': '',
    'sequenceList': '',
    'sequenceListToggler': '',
    'sequences': [],
    'currentSequenceIndex': 0,
    'scrollDuration': 500,
    'minScrollDuration': 100,
    'songParts': [],
    'sequenceObject': []
  };
  var changeSongpartOffset = 100;
  var isAutoScrolling = false;
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songItem-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songItem-options');
    options[key] = value;
    $(object).data('songItem-options', options);
  }
  /**
   * Set the value of the song
   * @param {object} obj
   * @param {object} song song object
   */


  function setValue(obj, song) {
    var mode = getOption(obj, 'mode'); // Set details

    if (song.hasOwnProperty('title')) {
      var elem = $(obj).find(getOption(obj, 'songTitlePanel')).text(song.title);

      if (mode == 'audience') {
        setDisplayCss(obj, elem.parent());
      }
    }

    if (song.details.hasOwnProperty('artist')) {
      elem = $(obj).find(getOption(obj, 'songArtistPanel')).text(song.details.artist);
    }

    if (song.hasOwnProperty('key')) {
      setOption(obj, 'key', song.key);
      $(obj).find(getOption(obj, 'keySelector')).children('[value="' + song.key + '"]').prop('selected', true);
    }

    if (song.hasOwnProperty('scale')) {
      setOption(obj, 'scale', song.scale);
      $(obj).find(getOption(obj, 'scaleSelector')).html(song.scale);
    } // Show the sequence list if hidden


    var sequencePanel = $(getOption(obj, 'sequenceControl'));

    if (sequencePanel.length > 0 && sequencePanel.is(':hidden')) {
      sequencePanel.show();
    }

    setSongParts(obj, song.songParts, song.sequence);
  }

  function setDisplayCss(obj, element) {
    var fontFamily = getOption(obj, 'displayFontFamily');
    var displayColor = getOption(obj, 'displayColor');
    element.css('font-family', fontFamily).css('color', displayColor);
  }
  /**
   * Fill song parts for the song based on the sequence
   * @param {object} obj
   * @param {array} songParts Collection of song parts object
   * @param {array} sequences Collection of sequence objects
   */


  function setSongParts(obj) {
    var songParts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var sequences = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var sequencesArr = [];
    var songPartsContainer = $(obj).find(getOption(obj, 'songPartsContainer')); // Remove panels first

    songPartsContainer.dynamicPanel('removeAll'); // Set up song parts with regards to eats sequence

    sequences.forEach(function (sequence) {
      // Set up only the first sequence with song part attribute in it
      if (!sequence.hasOwnProperty('songParts')) {
        return;
      } // Iterate song part reference from the sequence


      sequence.songParts.forEach(function (songPartRef) {
        // Get song part from the song's songpart object based on the reference's ID
        var songPart = songParts.find(function (o) {
          return o.id == songPartRef.songPart;
        });
        if (songPart == undefined) return; // Set up song part with repetitions

        for (var i = 0; i < songPartRef.repeat * 1; i++) {
          var songPartPanel = songPartsContainer.dynamicPanel('insert');
          songPartPanel.songPart('option', 'sequenceModulation', songPartRef.referenceKey);
          songPartPanel.songPart('setValue', songPart);
          sequencesArr.push(songPartRef.name);
        }
      });
      return;
    });
    songParts.forEach(function (songPart) {
      var songPartPanel = songPartsContainer.dynamicPanel('insert');
      songPartPanel.songPart('setValue', songPart);
      songPartPanel.attr('data-simple', '');
    });
    setOption(obj, 'sequences', sequencesArr);
  }
  /**
   * Set the current song part
   * @param {obect} obj
   * @param {number} index Location of the song part from the sequence array (0-based)
   * @param {boolean} scroll ill engage auto scrolling
   */


  function setCurrentSongPart(obj, index) {
    var scroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    // Get the song part from the sequence order
    var songParts = $(obj).find(getOption(obj, 'songPartsContainer'));
    if (songParts.length <= 0) return;
    var songPartTarget = songParts.children('[data-order="' + (index + 1) + '"]:not([data-simple])').first();
    if (songPartTarget.length <= 0) return;
    var songPartCurrent = songParts.children('.current');
    var sequenceListBody = $(getOption(obj, 'sequenceList'));
    var sequences = getOption(obj, 'sequences');
    var mode = getOption(obj, 'mode'); // On performance mode, scroll to the songpart

    if (scroll && mode == 'performance') {
      var currentSequenceIndex = getOption(obj, 'currentSequenceIndex');

      if (index != currentSequenceIndex) {
        isAutoScrolling = true;
        var scrollDuration = getOption(obj, 'scrollDuration');
        var minScrollDuration = getOption(obj, 'minScrollDuration');
        var factor = index > currentSequenceIndex ? index - currentSequenceIndex : currentSequenceIndex - index;
        var scrollSpeed = minScrollDuration + (scrollDuration - minScrollDuration) * (factor - 1) / (sequences.length - 1);
        $('html, body').animate({
          scrollTop: songPartTarget.offset().top - changeSongpartOffset + 5
        }, scrollSpeed, function () {
          isAutoScrolling = false;
        });
      }
    } // Remove currently selected songpart


    if (songPartCurrent.length > 0) songPartCurrent.removeClass('current'); // Set this song part as the current one

    songPartTarget.addClass('current');
    $(getOption(obj, 'currentSequenceDisplay')).html(sequences[index]); //$(getOption(obj, 'totalSequences')).html(sequences.length);

    $(getOption(obj, 'currentSequenceOrder')).html(index + 1); // Set sequence list selected

    sequenceListBody.children('.current').removeClass('current');
    sequenceListBody.children('[data-order="' + (index + 1) + '"]:not([data-simple])').addClass('current');
    var par = sequenceListBody.parent();
    var scrollDistance = sequenceListBody.height() - par.height() + 6;
    par.scrollTop(scrollDistance / (sequences.length - 1) * index); // Set quick controls

    $(getOption(obj, 'nextSequenceControl')).attr('data-target-index', index < sequences.length - 1 ? index + 1 : 0);
    $(getOption(obj, 'prevSequenceControl')).attr('data-target-index', index > 0 ? index - 1 : sequences.length - 1);
    setOption(obj, 'currentSequenceIndex', index);
    update(obj);
  }

  function update(obj) {
    var sequenceControl = $(getOption(obj, 'sequencesQuickControl'));
    var sequenceControl = $(getOption(obj, 'sequencesQuickControl'));
    var sequenceListPanel = $(getOption(obj, 'sequenceListPanel'));
    var mode = getOption(obj, 'mode');

    if (mode == 'performance' || mode == 'simple') {
      if (sequenceListPanel.length > 0 && sequenceListPanel.hasClass('expanded')) {
        sequenceListPanel.addClass('expanded');
      }

      if (sequenceControl.length > 0 && sequenceControl.is(':hidden')) {
        sequenceControl.show();
      }
    } else if (mode == 'audience') {
      if (sequenceListPanel.length > 0 && sequenceListPanel.hasClass('expanded')) {
        sequenceListPanel.removeClass('expanded');
      }

      if (sequenceControl.length > 0 && sequenceControl.is(':visible')) {
        sequenceControl.hide();
      }
    }

    var fontSize = getOption(obj, 'fontSize');
    var simpleFontSize = getOption(obj, 'simpleFontSize');
    var fontFamily = getOption(obj, 'fontFamily');
    var displayFontSize = getOption(obj, 'displayFontSize');
    var displayFontFamily = getOption(obj, 'displayFontFamily');
    var displayAlignment = getOption(obj, 'displayAlignment');
    var displayColor = getOption(obj, 'displayColor');
    var lineHeight = getOption(obj, 'lineHeight');
    var cursorWidth = getOption(obj, 'cursorWidth');
    $(obj).find('.songpart-item').each(function () {
      $(this).songPart('option', 'mode', mode);
      $(this).songPart('option', 'lineHeight', lineHeight);
      $(this).songPart('option', 'cursorWidth', cursorWidth);
      $(this).songPart('option', 'fontSize', fontSize);
      $(this).songPart('option', 'fontFamily', fontFamily);
      $(this).songPart('option', 'simpleFontSize', simpleFontSize);
      $(this).songPart('option', 'displayFontSize', displayFontSize);
      $(this).songPart('option', 'displayFontFamily', displayFontFamily);
      $(this).songPart('option', 'displayAlignment', displayAlignment);
      $(this).songPart('option', 'displayColor', displayColor);
      $(this).songPart('updateDisplay');
    });

    if (mode == 'audience') {
      setDisplayCss(obj, $(obj).find('.basic-details'));
    } else {
      $(obj).find('.basic-details').removeAttr('style');
    }
  }

  function setSequenceListPanel(obj) {
    var sequenceList = $(getOption(obj, 'sequenceList'));
    var sequences = getOption(obj, 'sequences');
    if (sequenceList.length <= 0) return;
    if (sequences == null || sequences.length <= 0) return;
    sequenceList.dynamicPanel('removeAll');
    sequences.forEach(function (sequence) {
      var panel = sequenceList.dynamicPanel('insert');
      panel.html(sequence);
    });
    $(document).scrollTop(0);
  }

  $.fn.songItem = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).find(settings.songPartsContainer).dynamicPanel({
          'key': 'songpart',
          'panelTemplate': settings.songPartTemplate,
          'onInsert': function onInsert(event, songPartPanel) {
            $(songPartPanel).songPart({
              'key': function key() {
                return getOption(self, 'key');
              },
              'songScale': function songScale() {
                return getOption(self, 'scale');
              },
              'songPartName': settings.songPartName,
              'songPartModulationInfo': settings.songPartModulationInfo,
              'songLinesContainer': settings.songLinesContainer,
              'songLineTemplate': settings.songLineTemplate,
              'songLineModulationInfo': settings.songLineModulationInfo,
              'chordsLine': settings.chordsLine,
              'lyricsContentLine': settings.lyricsContentLine,
              'lyricsDisplayLine': settings.lyricsDisplayLine,
              'fontSize': settings.fontSize,
              'fontFamily': settings.fontFamily,
              'displayFontSize': settings.displayFontSize,
              'displayFontFamily': settings.displayFontFamily,
              'displayAlignment': settings.displayAlignment,
              'displayColor': settings.displayColor,
              'simpleFontSize': settings.simpleFontSize,
              'lineHeight': settings.lineHeight,
              'cursorWidth': settings.cursorWidth,
              'songModulation': function songModulation() {
                return getOption(self, 'modulation');
              },
              'sequenceModulation': 0
            });
          }
        }); // Key selector from the song item

        $(self).find(settings.keySelector).on('change', function () {
          var key = $(this).val();
          setOption(self, 'key', key);
          $(self).find('.songpart-item').each(function () {
            $(this).songPart('update');
          });
        }); // Get window height value

        $(window).on('resize', function () {
          changeSongpartOffset = $(window).height() * 0.2;
        }).trigger('resize'); // Scroll event listener.
        // Change selected sequence based on scrolling

        $(document).on('scroll', function () {
          if (isAutoScrolling) return false;
          if (!$(self).hasClass('current')) return false;
          if (getOption(self, 'mode') == 'simple') return false;
          var docScroll = $(document).scrollTop();
          $(self).find('.songpart-item.current').each(function () {
            var posTop = $(this).offset().top;
            var sib = null; // Scroll down, get the next sequence

            if (docScroll + changeSongpartOffset > posTop + $(this).height()) {
              sib = $(this).next('.songpart-item:not([data-simple])');
            } // Scroll up, get the previous sequence
            else if (posTop > docScroll + changeSongpartOffset) {
                sib = $(this).prev('.songpart-item:not([data-simple])');
              } // Set the selected sequence as current


            if (sib != null && sib.length > 0) {
              setCurrentSongPart(self, sib.attr('data-order') * 1 - 1, false);
              return false; // Stop loop
            }
          });
        });
        $(self).data('songItem-options', settings);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'option':
          if (typeof option != 'string') return this;

          if (value != undefined) {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'setvalue':
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'setcurrentsongpart':
          return $(this).each(function () {
            setCurrentSongPart(this, option, true);
          });

        case 'setsequencelist':
          return $(this).each(function () {
            setSequenceListPanel(this);
          });

        case 'update':
          return $(this).each(function () {
            update(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songLine.js":
/*!*********************************************!*\
  !*** ./resources/js/songViewer/songLine.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  var defaults = {
    'key': 'C',
    'scale': 'major',
    'songScale': 'major',
    'songModulation': 0,
    'songPartModulation': 0,
    'sequenceModulation': 0,
    'modulation': 0,
    'songLineTemplate': '',
    'songLinesContainer': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': ''
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songLine-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songLine-options');
    options[key] = value;
    $(object).data('songLine-options', options);
  }
  /**
   * Set value of the song line (lyrics and chords)
   * @param {object} obj
   * @param {array} songLine Pair of chords and lyrics, at index 0 and index 1 respectively
   */


  function setValue(obj, songLine) {
    $(obj).find(getOption(obj, 'lyricsContentLine')).lyricsLine({
      'editable': false,
      'value': songLine[1],
      'fontSize': getOption(obj, 'fontSize'),
      'fontFamily': getOption(obj, 'fontFamily')
    });
    $(obj).find(getOption(obj, 'chordsLine')).chordsLine(_defineProperty({
      'editable': false,
      'key': getOption(obj, 'key'),
      'scale': getOption(obj, 'songPartScale'),
      'songPartScale': getOption(obj, 'songPartScale'),
      'modulationInfo': getOption(obj, 'songLineModulationInfo'),
      'value': songLine[0],
      'fontSize': getOption(obj, 'fontSize'),
      'fontFamily': getOption(obj, 'fontFamily'),
      'height': getOption(obj, 'lineHeight'),
      'cursorWidth': getOption(obj, 'cursorWidth'),
      'songModulation': getOption(obj, 'songModulation'),
      'songPartModulation': getOption(obj, 'songPartModulation'),
      'sequenceModulation': getOption(obj, 'sequenceModulation'),
      'modulation': function modulation() {
        return getOption(obj, 'modulation');
      }
    }, "editable", false));
    $(obj).find(getOption(obj, 'lyricsDisplayLine')).html(songLine[2]).css('font-size', getOption(obj, 'displayFontSize')).css('font-family', getOption(obj, 'displayFontFamily')).css('text-align', getOption(obj, 'displayAlignment')).css('color', getOption(obj, 'displayColor'));
  }

  function updateDisplay(obj) {
    var mode = getOption(obj, 'mode');
    var fontSize = getOption(obj, 'fontSize');
    var simpleFontSize = getOption(obj, 'simpleFontSize');
    var fontFamily = getOption(obj, 'fontFamily');
    var displayFontSize = getOption(obj, 'displayFontSize');
    var displayFontFamily = getOption(obj, 'displayFontFamily');
    var displayAlignment = getOption(obj, 'displayAlignment');
    var displayColor = getOption(obj, 'displayColor');
    var lineHeight = getOption(obj, 'lineHeight');
    var cursorWidth = getOption(obj, 'cursorWidth');
    var lyricsContentLine = $(obj).find(getOption(obj, 'lyricsContentLine'));
    lyricsContentLine.lyricsLine('option', 'fontSize', mode == 'performance' ? fontSize : simpleFontSize);
    lyricsContentLine.lyricsLine('option', 'fontFamily', fontFamily);
    lyricsContentLine.lyricsLine('option', 'cursorWidth', cursorWidth);
    lyricsContentLine.lyricsLine('updateDisplay');
    var chordsLine = $(obj).find(getOption(obj, 'chordsLine'));
    chordsLine.chordsLine('option', 'fontSize', mode == 'performance' ? fontSize : simpleFontSize);
    chordsLine.chordsLine('option', 'fontFamily', fontFamily);
    chordsLine.chordsLine('option', 'height', lineHeight);
    chordsLine.chordsLine('option', 'cursorWidth', cursorWidth);
    chordsLine.chordsLine('updateDisplay');
    $(obj).find(getOption(obj, 'lyricsDisplayLine')).css('font-size', displayFontSize).css('font-family', displayFontFamily).css('text-align', displayAlignment).css('color', displayColor);
  }

  $.fn.songLine = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songLine-options', settings);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalue':
          if (!Array.isArray(option)) return this;
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'option':
          if (typeof option != 'string') return this;

          if (value != undefined) {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'update':
          return $(this).each(function () {
            $(this).find('.chords').chordsLine('updatechords').chordsLine('update');
          });

        case 'updatemodulation':
          return $(this).each(function () {
            $(this).find('.chords').chordsLine('update');
          });

        case 'updatedisplay':
          return $(this).each(function () {
            updateDisplay(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songPart.js":
/*!*********************************************!*\
  !*** ./resources/js/songViewer/songPart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'key': 'C',
    'scale': 'major',
    'songScale': 'major',
    'songModulation': 0,
    'sequenceModulation': 0,
    'modulation': 0,
    'songPartName': '',
    'songPartModulationInfo': '',
    'songLineTemplate': '',
    'songLinesContainer': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': '',
    'fontSize': '',
    'fontFamily': '',
    'lineHeight': '',
    'cursorWidth': ''
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songPart-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songPart-options');
    options[key] = value;
    $(object).data('songPart-options', options);
  }
  /**
   * Fill song part
   * @param {object} obj
   * @param {array} songPart collection of song parts
   */


  function setValue(obj, songPart) {
    if (_typeof(songPart) != 'object') {
      console.error('Invalid song part object supplied');
    }

    if (songPart.hasOwnProperty('name')) {
      $(obj).find(getOption(obj, 'songPartName')).html(songPart.name);
    }

    var songLinesContainer = $(obj).find(getOption(obj, 'songLinesContainer'));
    songLinesContainer.dynamicPanel('removeAll'); // Get chords and lyrics

    var strChords = songPart.chords.content;
    var strLyricsContent = songPart.lyrics.content || '';
    var strLyricsDisplay = songPart.lyrics.display || '';
    var arrChords = strChords.split('{newline}');
    var arrLyricsContent = strLyricsContent.split('{newline}');
    var arrLyricsDisplay = strLyricsDisplay.split('{newline}');
    setOption(obj, 'modulation', songPart.referenceKey);
    setOption(obj, 'scale', songPart.scale);

    if (arrChords.length == arrLyricsContent.length && arrChords.length == arrLyricsDisplay.length) {
      for (var i = 0; i < arrChords.length; i++) {
        var songLinePanel = songLinesContainer.dynamicPanel('insert');
        songLinePanel.songLine('setValue', [arrChords[i], arrLyricsContent[i], arrLyricsDisplay[i]]);
      }
    }

    updateModulationInfo(obj);
  }
  /**
   * Get the modulation value from the song, sequence and the song part
   * @param {object} obj
   */


  function getModulations(obj) {
    // Get modulation value
    var songModulation = getOption(obj, 'songModulation');
    songModulation = typeof songModulation == 'function' ? songModulation() : songModulation || 0;
    var sequenceModulation = getOption(obj, 'sequenceModulation');
    sequenceModulation = typeof sequenceModulation == 'function' ? sequenceModulation() : sequenceModulation || 0;
    var modulation = getOption(obj, 'modulation');
    modulation = typeof modulation == 'function' ? modulation() : modulation || 0;
    return [modulation * 1, songModulation * 1, sequenceModulation * 1];
  }
  /**
   * Update the modulation information of this song part
   * @param {object} obj
   */


  function updateModulationInfo(obj) {
    // Get the main scale of the song
    var songScale = getOption(obj, 'songScale');
    songScale = typeof songScale == 'function' ? songScale() : songScale; // Get the current scale of this song part

    var scale = getOption(obj, 'scale');
    scale = typeof scale == 'function' ? scale() : scale; // Get total modulation for this song part

    var modulation = getModulations(obj); // Set modulation info display

    if (modulation[0] + modulation[2] == 0 && songScale == scale) {
      $(obj).find(getOption(obj, 'songPartModulationInfo')).hide();
    } else {
      // Get main key
      var mainKey = getOption(obj, 'key');
      mainKey = typeof mainKey == 'function' ? mainKey() : mainKey;
      var display = window.ChordProcessor.processChord('no/1/M//', mainKey, scale, modulation[0] + modulation[1] + modulation[2]);
      $(obj).find(getOption(obj, 'songPartModulationInfo')).show().children('span').html('Key of ' + display + (scale != 'major' ? ' ' + scale : ''));
    }
  }

  function update(obj) {
    $(obj).find('.songline-item').each(function () {
      $(this).songLine('update');
    });
    updateModulationInfo(obj);
  }

  function updateDisplay(obj) {
    var mode = getOption(obj, 'mode');
    var fontSize = getOption(obj, 'fontSize');
    var simpleFontSize = getOption(obj, 'simpleFontSize');
    var fontFamily = getOption(obj, 'fontFamily');
    var displayFontSize = getOption(obj, 'displayFontSize');
    var displayFontFamily = getOption(obj, 'displayFontFamily');
    var displayAlignment = getOption(obj, 'displayAlignment');
    var displayColor = getOption(obj, 'displayColor');
    var lineHeight = getOption(obj, 'lineHeight');
    var cursorWidth = getOption(obj, 'cursorWidth');
    $(obj).find('.songline-item').each(function () {
      $(this).songLine('option', 'mode', mode);
      $(this).songLine('option', 'lineHeight', lineHeight);
      $(this).songLine('option', 'cursorWidth', cursorWidth);
      $(this).songLine('option', 'fontSize', fontSize);
      $(this).songLine('option', 'fontFamily', fontFamily);
      $(this).songLine('option', 'simpleFontSize', simpleFontSize);
      $(this).songLine('option', 'displayFontSize', displayFontSize);
      $(this).songLine('option', 'displayFontFamily', displayFontFamily);
      $(this).songLine('option', 'displayAlignment', displayAlignment);
      $(this).songLine('option', 'displayColor', displayColor);
      $(this).songLine('updateDisplay');
    });
  }

  $.fn.songPart = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).find(settings.songLinesContainer).dynamicPanel({
          'key': 'songLine',
          'panelTemplate': settings.songLineTemplate,
          'isDraggable': false,
          'onInsert': function onInsert(event, panel) {
            panel.songLine({
              'key': settings.key,
              'scale': settings.scale,
              'songScale': settings.songScale,
              'songPartScale': function songPartScale() {
                return getOption(self, 'scale');
              },
              'songLineModulationInfo': settings.songLineModulationInfo,
              'chordsLine': settings.chordsLine,
              'lyricsContentLine': settings.lyricsContentLine,
              'lyricsDisplayLine': settings.lyricsDisplayLine,
              'fontSize': settings.fontSize,
              'fontFamily': settings.fontFamily,
              'displayFontSize': settings.displayFontSize,
              'displayFontFamily': settings.displayFontFamily,
              'displayAlignment': settings.displayAlignment,
              'displayColor': settings.displayColor,
              'simpleFontSize': settings.simpleFontSize,
              'lineHeight': settings.lineHeight,
              'cursorWidth': settings.cursorWidth,
              'songModulation': settings.songModulation,
              'songPartModulation': function songPartModulation() {
                return getOption(self, 'modulation');
              },
              'sequenceModulation': function sequenceModulation() {
                return getOption(self, 'sequenceModulation');
              }
            });
          }
        });
        $(self).data('songPart-options', settings);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalue':
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'option':
          if (value != undefined) {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'update':
          return $(this).each(function () {
            update(this);
          });

        case 'updatedisplay':
          return $(this).each(function () {
            updateDisplay(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songsContainer.js":
/*!***************************************************!*\
  !*** ./resources/js/songViewer/songsContainer.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function ($) {
  var defaults = {
    'keySelector': '',
    'songItemTemplate': '',
    'songPartTemplate': '',
    'songLineTemplate': '',
    'songTitlePanel': '',
    'songArtistPanel': '',
    'songPartsContainer': '',
    'songPartName': '',
    'songPartModulationInfo': '',
    'songLinesContainer': '',
    'songLineModulationInfo': '',
    'chordsLine': '',
    'lyricsContentLine': '',
    'lyricsDisplayLine': '',
    'fontSize': '',
    'fontFamily': '',
    'isDraggable': false,
    'mode': 'performance',
    'nextSongControl': '',
    'previousSongControl': '',
    'sequenceListPanel': '',
    'sequenceList': '',
    'sequenceListToggler': ''
  };
  var songValues = [];
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('songsContainer-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} object
   * @param {String} key
   * @param {String} value
   */


  function setOption(object, key, value) {
    var options = $(object).data('songsContainer-options');
    options[key] = value;
    $(object).data('songsContainer-options', options);
  }
  /**
   * Set song as selected
   * @param {object} obj
   * @param {number} index Index of the song from the set (0-based)
   */


  function setCurrent(obj, index) {
    // Find selected song
    var selectedSong = $('.song-item[data-order="' + (index + 1) + '"]'); // Get control buttons

    var nextSongControl = $(getOption(obj, 'nextSongControl'));
    var previousSongControl = $(getOption(obj, 'previousSongControl'));
    if (nextSongControl.length > 0) nextSongControl.hide();
    if (previousSongControl.length > 0) previousSongControl.hide();
    if (selectedSong.length <= 0) return; // Set the song from the song list as selected

    var allSongsPanel = $(getOption(obj, 'allSongsList'));
    allSongsPanel.find('.songlist-item.current').removeClass('current');
    allSongsPanel.find('.songlist-item[data-order="' + (index + 1) + '"]').addClass('current'); // Remove current

    $('.song-item.current').removeClass('current'); // Display song navigation only for more than 1 song

    selectedSong.addClass('current'); // Get previous song
    // Display previous song navigation only for more than 2 songs

    setSongControl(previousSongControl, index > 0 ? index - 1 : songValues.length - 1, songValues.length > 2); // Get next song

    setSongControl(nextSongControl, index < songValues.length - 1 ? index + 1 : 0, songValues.length > 1); // Set the first song-part from the song as selected

    selectedSong.songItem('setSequenceList');
    selectedSong.songItem('setCurrentSongPart', 0);
    update(obj);
  }
  /**
   * Set element to toggle the song via song ID
   * @param {jQuery object} control Element to set
   * @param {string} index Pointer of the location of the song from the set array (0-based)
   */


  function setSongControl(control, index) {
    var show = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var songDetails = songValues[index];

    if (songDetails != undefined) {
      control.find('.trigger').attr('data-target-index', index);
      control.find('.song-title').html(songDetails.title);
      control.find('.song-artist').html(songDetails.artist);
    }

    if (show) control.show();
  }
  /**
   * Populate the All-Songs Panel
   * @param {object} obj
   */


  function setAllSongsPanel(obj) {
    var allSongsPanel = $(getOption(obj, 'allSongsList'));
    allSongsPanel.dynamicPanel('removeAll');
    songValues.forEach(function (song) {
      var panel = allSongsPanel.dynamicPanel('insert');
      panel.find('.song-title').html(song.title);
      panel.find('.song-artist').html(song.artist);
    });
  }
  /**
   * Populate container with songs
   * @param {object} obj
   * @param {array} songs Collection of song object
   */


  function setValues(obj, songs) {
    if (songs.length <= 0) return;
    var first = ''; // Empty the container first

    $(obj).dynamicPanel('removeAll'); // Create panel foreach song

    songs.forEach(function (song) {
      var panel = $(obj).dynamicPanel('insert', null, song.id);
      panel.songItem('setValue', song);
      songValues.push({
        'id': song.id,
        'title': song.title,
        'artist': song.hasOwnProperty('details') && song.details.hasOwnProperty('artist') ? song.details.artist : ''
      });
    });
    setAllSongsPanel(obj); // Set first song from the list

    setCurrent(obj, 0);
  }

  function update(obj) {
    var mode = getOption(obj, 'mode');
    $(obj).parent().removeClass('performance').removeClass('audience').removeClass('simple').addClass(mode); // Show song list controls

    var songControl = $(getOption(obj, 'songControl'));

    if (mode == 'performance' || mode == 'simple' && songControl.length > 0) {
      songControl.show();
    } else if (songControl.is(':visible')) {
      songControl.hide();
    }

    getDimensions(obj); // Set new values

    $(obj).find('.song-item').songItem('option', 'mode', mode);
    $(obj).find('.song-item').songItem('option', 'lineHeight', getOption(obj, 'lineHeight'));
    $(obj).find('.song-item').songItem('option', 'cursorWidth', getOption(obj, 'cursorWidth'));
    $(obj).find('.song-item').songItem('option', 'fontFamily', getOption(obj, 'fontFamily'));
    $(obj).find('.song-item').songItem('option', 'fontSize', getOption(obj, 'fontSize'));
    $(obj).find('.song-item').songItem('option', 'simpleFontSize', getOption(obj, 'simpleFontSize'));
    $(obj).find('.song-item').songItem('option', 'displayFontSize', getOption(obj, 'displayFontSize'));
    $(obj).find('.song-item').songItem('option', 'displayFontFamily', getOption(obj, 'displayFontFamily'));
    $(obj).find('.song-item').songItem('option', 'displayAlignment', getOption(obj, 'displayAlignment'));
    $(obj).find('.song-item').songItem('option', 'displayColor', getOption(obj, 'displayColor'));
    $(obj).find('.song-item').songItem('update');
  }

  function getDimensions(obj) {
    var mode = getOption(obj, 'mode'); // Get width of a single monospace

    var unique = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    var spanTest = $('<span>').addClass(unique).css('font-family', getOption(obj, 'fontFamily')).css('font-size', mode == 'performance' ? getOption(obj, 'fontSize') : getOption(obj, 'simpleFontSize')).css('position', 'absolute').html('&nbsp;');
    $('body').append(spanTest);
    setOption(obj, 'cursorWidth', spanTest.width());
    setOption(obj, 'lineHeight', spanTest.height());
    $('.' + unique).remove();
  }

  $.fn.songsContainer = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('songsContainer-options', settings); // Set up options panel listeners

        $(settings.optionsPanel).optionsPanel({
          'toggler': settings.optionsToggler,
          'options': {
            'mode': settings.mode,
            'performancefontsize': settings.fontSize,
            'performancefontfamily': settings.fontFamily,
            'displayfontsize': settings.displayFontSize,
            'displayfontfamily': settings.displayFontFamily,
            'displayfontcolor': settings.displayColor,
            'displayalignment': settings.displayAlignment,
            'simplefontsize': settings.simpleFontSize
          },
          'listeners': [{
            'event': 'change',
            'target': '#optionView',
            'action': function action(event) {
              var mode = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'mode', mode);
              update(self);
              $(settings.optionsPanel).removeClass('performance').removeClass('simple').removeClass('audience').addClass(mode);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'mode', mode);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.optionsPanel).optionsPanel('hide');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionPerformanceFontFamily',
            'action': function action(event) {
              var fontFamily = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'fontFamily', fontFamily);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'performancefontfamily', fontFamily);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionPerformanceFontSize',
            'action': function action(event) {
              var fontSize = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'fontSize', fontSize);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'performancefontsize', fontSize);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionSimpleFontSize',
            'action': function action(event) {
              var fontSize = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'simpleFontSize', fontSize);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'simplefontsize', fontSize);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionAudienceFontFamily',
            'action': function action(event) {
              var fontFamily = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'displayFontFamily', fontFamily);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayfontfamily', fontFamily);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionAudienceFontColor',
            'action': function action(event) {
              var color = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'displayColor', color);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayfontcolor', color);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionAudienceFontSize',
            'action': function action(event) {
              var fontSize = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'displayFontSize', fontSize);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayfontsize', fontSize);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }, {
            'event': 'change',
            'target': '#optionAudienceAlignment',
            'action': function action(event) {
              var alignment = $(event.target).val();
              $(settings.loadingScreen).loadingScreen('show');
              setOption(self, 'displayAlignment', alignment);
              update(self);
              $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayalignment', alignment);
              $(settings.optionsPanel).optionsPanel('serialize');
              $(settings.loadingScreen).loadingScreen('hide');
            }
          }]
        }); // Get saved settings

        var savedOptions = $(settings.optionsPanel).optionsPanel('option', 'options');
        settings.fontSize = savedOptions.performancefontsize;
        settings.fontFamily = savedOptions.performancefontfamily;
        settings.displayFontSize = savedOptions.displayfontsize;
        settings.displayFontFamily = savedOptions.displayfontfamily;
        settings.displayColor = savedOptions.displayfontcolor;
        settings.displayAlignment = savedOptions.displayalignment;
        settings.simpleFontSize = savedOptions.simplefontsize;
        getDimensions(self);
        settings = $(self).data('songsContainer-options'); // Initialize dynamicpanel

        $(self).dynamicPanel({
          'key': 'song',
          'panelTemplate': settings.songItemTemplate,
          'isDraggable': settings.isDraggable,
          'onInsert': function onInsert(event, panel) {
            // Initialize song panels
            panel.songItem({
              'keySelector': settings.keySelector,
              'scaleSelector': settings.scaleSelector,
              'songTitlePanel': settings.songTitlePanel,
              'songArtistPanel': settings.songArtistPanel,
              'songPartsContainer': settings.songPartsContainer,
              'songPartTemplate': settings.songPartTemplate,
              'songPartName': settings.songPartName,
              'songPartModulationInfo': settings.songPartModulationInfo,
              'songLinesContainer': settings.songLinesContainer,
              'songLineTemplate': settings.songLineTemplate,
              'songLineModulationInfo': settings.songLineModulationInfo,
              'chordsLine': settings.chordsLine,
              'lyricsContentLine': settings.lyricsContentLine,
              'lyricsDisplayLine': settings.lyricsDisplayLine,
              'fontSize': settings.fontSize,
              'fontFamily': settings.fontFamily,
              'displayFontSize': settings.displayFontSize,
              'displayFontFamily': settings.displayFontFamily,
              'displayAlignment': settings.displayAlignment,
              'displayColor': settings.displayColor,
              'simpleFontSize': settings.simpleFontSize,
              'lineHeight': settings.lineHeight,
              'cursorWidth': settings.cursorWidth,
              'mode': settings.mode,
              'sequenceControl': settings.sequenceControl,
              'sequenceListPanel': settings.sequenceListPanel,
              'sequenceList': settings.sequenceList,
              'sequenceListToggler': settings.sequenceListToggler,
              'currentSequenceDisplay': settings.currentSequenceDisplay,
              'nextSequenceControl': settings.nextSequenceControl,
              'prevSequenceControl': settings.prevSequenceControl,
              'sequencesQuickControl': settings.sequencesQuickControl,
              'totalSequences': settings.totalSequences,
              'currentSequenceOrder': settings.currentSequenceOrder
            });
          }
        });
        $(settings.allSongsList).dynamicPanel({
          'panelTemplate': $(settings.allSongsList).html(),
          'key': 'all-songs',
          'isDraggable': false,
          'onInsert': function onInsert(event, panel) {
            $(panel).on('click', function () {
              setCurrent(self, $(this).attr('data-order') * 1 - 1);
              $(settings.allSongsPanel).contextMenu('hide');
            });
          }
        });
        $(settings.sequenceList).dynamicPanel({
          'key': 'sequenceList',
          'isDraggable': false,
          'panelTemplate': $(settings.sequenceList).html(),
          'onInsert': function onInsert(event, panel) {
            panel.on('click', function () {
              $(self).find('.song-item.current').songItem('setCurrentSongPart', panel.attr('data-order') * 1 - 1, false);
            });
          }
        }); // Set keyboard

        $(document).on('keyup', function (event) {
          if (event.which == 37 || event.which == 65) {
            event.preventDefault();
            event.stopPropagation();
            $(settings.previousSongControl).find('.trigger').trigger('click');
          } else if (event.which == 39 || event.which == 68) {
            event.preventDefault();
            event.stopPropagation();
            $(settings.nextSongControl).find('.trigger').trigger('click');
          } else if (event.which == 38 || event.which == 87) {
            event.preventDefault();
            event.stopPropagation();
            $(settings.prevSequenceControl).trigger('click');
          } else if (event.which == 40 || event.which == 83) {
            event.preventDefault();
            event.stopPropagation();
            $(settings.nextSequenceControl).trigger('click');
          }
        }); // Set next/prev song actions

        $(document).on('click', [settings.nextSongControl + ' .trigger', settings.previousSongControl + ' .trigger'].join(','), function () {
          var songIndex = $(this).attr('data-target-index') * 1;
          if (songIndex == NaN) return;
          setCurrent(self, songIndex);
        }); // Set next/prev sequence actions

        $(document).on('click', [settings.nextSequenceControl, settings.prevSequenceControl].join(','), function () {
          var songIndex = $(this).attr('data-target-index') * 1;
          if (songIndex == NaN) return;
          $(self).find('.song-item.current').songItem('setCurrentSongPart', songIndex);
        }); // Scrolling event

        var timeout;
        $(document).on('scroll', function () {
          var songDetails = $(self).find('.song-item.current .song-details');

          if (songDetails.length > 0 && !songDetails.hasClass('scrolling')) {
            songDetails.addClass('scrolling');
          }

          clearTimeout(timeout);
          timeout = setTimeout(function () {
            if (songDetails.hasClass('scrolling')) songDetails.removeClass('scrolling');
          }, 250);
        }); // All songs panel

        $(settings.allSongsPanel).contextMenu({
          'top': 'unset',
          'bottom': '44px',
          'left': 'unset'
        });
        $(settings.allSongsButton).on('click', function () {
          $(settings.allSongsPanel).contextMenu('show', this);
        });
        $(settings.sequenceListToggler).on('click', function () {
          if ($(settings.sequenceListPanel).hasClass('expanded')) {
            $(settings.sequenceListPanel).removeClass('expanded');
          } else {
            $(settings.sequenceListPanel).addClass('expanded');
          }
        });
        $(settings.sequenceListPanel).find('.close').on('click', function () {
          $(settings.sequenceListPanel).removeClass('expanded');
        });
        $(self).addClass(settings.mode);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'setvalues':
          return $(this).each(function () {
            setValues(this, option);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/songViewer/songviewer.js":
/*!***********************************************!*\
  !*** ./resources/js/songViewer/songviewer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.musicReference = __webpack_require__(/*! ../utilities/_musicReference.json */ "./resources/js/utilities/_musicReference.json");

__webpack_require__(/*! ../common/dynamicPanel */ "./resources/js/common/dynamicPanel.js");

__webpack_require__(/*! ./songsContainer */ "./resources/js/songViewer/songsContainer.js");

__webpack_require__(/*! ./songItem */ "./resources/js/songViewer/songItem.js");

__webpack_require__(/*! ./songPart */ "./resources/js/songViewer/songPart.js");

__webpack_require__(/*! ./songLine */ "./resources/js/songViewer/songLine.js");

__webpack_require__(/*! ../utilities/chordProcessor */ "./resources/js/utilities/chordProcessor.js");

__webpack_require__(/*! ../utilities/lyricsLine */ "./resources/js/utilities/lyricsLine.js");

__webpack_require__(/*! ../utilities/chordsLine */ "./resources/js/utilities/chordsLine.js");

__webpack_require__(/*! ../utilities/chordMarker */ "./resources/js/utilities/chordMarker.js");

__webpack_require__(/*! ./options */ "./resources/js/songViewer/options.js");

var songMainKey = '.songkey';
var songMainScale = '.songscale';
var songsContainer = '.songs-container';
var songItemTemplate = '.song-item-template';
var songTitlePanel = '.song-name';
var songArtistPanel = '.song-artist';
var songPartsContainer = '.songparts-container';
var songLinesContainer = '.songlines-container';
var songPartTemplate = '.songpart-template';
var songLineTemplate = '.songline-template';
var songPartName = '.songpart-name';
var songPartModulationInfo = '.songpart-modulation-info';
var songLineModulationInfo = '.songline-modulation-info';
var chordsLine = '.chords';
var lyricsContentLine = '.lyrics-content';
var lyricsDisplayLine = '.lyrics-display';
var songControl = '.songs-control';
var nextSongControl = '.next-song-container';
var previousSongControl = '.prev-song-container';
var allSongsPanel = '.songlist-expanded';
var allSongsButton = '.songs-control-options button';
var allSongsList = '.songlist-body';
var sequenceListPanel = '.sequence-list';
var sequenceList = '.sequence-list-body';
var sequenceListToggler = '.sequence-list-options';
var currentSequenceDisplay = '.current-sequence-display';
var sequencesQuickControl = '.quick-control';
var nextSequenceControl = '.quick-control .next';
var prevSequenceControl = '.quick-control .prev';
var sequenceControl = '.sequence-controls';
var totalSequences = '.total-sequences';
var currentSequenceOrder = '.current-sequence-order';
var loadingScreen = '.loading-panel';
var optionsToggler = '.options-toggler';
var optionsPanel = '.options-panel';
var imageSelector = '.image-selector';
var simpleFontSize = '16px';
var monospaceFontSize = '26px';
var monospaceFontFamily = '\'Consolas\', \'Courier New\', Courier, monospace';
var monospaceWidth = 0;
var monospaceHeight = 0;
var displayFontSize = '36px';
var displayFontFamily = '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif';
var displayAlignment = 'center';
var displayColor = 'rgb(83, 172, 138)';
$(function () {
  // Loading screen
  $(loadingScreen).loadingScreen();
  $(imageSelector).imageSelector({});
  $(songsContainer).songsContainer({
    'keySelector': songMainKey,
    'scaleSelector': songMainScale,
    'key': 'C',
    'scale': 'major',
    'songItemTemplate': songItemTemplate,
    'songPartTemplate': songPartTemplate,
    'songLineTemplate': songLineTemplate,
    'songTitlePanel': songTitlePanel,
    'songArtistPanel': songArtistPanel,
    'songPartsContainer': songPartsContainer,
    'songPartName': songPartName,
    'songPartModulationInfo': songPartModulationInfo,
    'songLinesContainer': songLinesContainer,
    'songLineModulationInfo': songLineModulationInfo,
    'chordsLine': chordsLine,
    'lyricsContentLine': lyricsContentLine,
    'lyricsDisplayLine': lyricsDisplayLine,
    'lineHeight': monospaceHeight,
    'cursorWidth': monospaceWidth,
    'fontSize': monospaceFontSize,
    'fontFamily': monospaceFontFamily,
    'displayFontSize': displayFontSize,
    'displayFontFamily': displayFontFamily,
    'displayAlignment': displayAlignment,
    'displayColor': displayColor,
    'simpleFontSize': simpleFontSize,
    'mode': 'performance',
    'nextSongControl': nextSongControl,
    'previousSongControl': previousSongControl,
    'songControl': songControl,
    'allSongsPanel': allSongsPanel,
    'allSongsButton': allSongsButton,
    'allSongsList': allSongsList,
    'sequenceControl': sequenceControl,
    'sequenceListPanel': sequenceListPanel,
    'sequenceList': sequenceList,
    'sequenceListToggler': sequenceListToggler,
    'sequencesQuickControl': sequencesQuickControl,
    'currentSequenceDisplay': currentSequenceDisplay,
    'totalSequences': totalSequences,
    'currentSequenceOrder': currentSequenceOrder,
    'nextSequenceControl': nextSequenceControl,
    'prevSequenceControl': prevSequenceControl,
    'optionsPanel': optionsPanel,
    'optionsToggler': optionsToggler,
    'loadingScreen': loadingScreen
  });
  getSongs(['0e987bb3-5e32-41c7-b0a8-4e5b4866420b', '611c3248-7326-448b-b66c-5199f9009dc8']);
});

function getSongs(songIds) {
  $(loadingScreen).loadingScreen('show');
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $.ajax({
    'url': '/songs',
    'method': 'post',
    'contentType': 'application/json',
    'dataType': 'json',
    'data': JSON.stringify({
      'songIds': songIds
    })
  }).done(function (response) {
    console.log(response);

    if ('error' in response) {
      return;
    }

    $(songsContainer).songsContainer('setValues', response);
  }).fail(function (response) {
    console.error(response);
  }).then(function () {
    $(loadingScreen).loadingScreen('hide');
  });
}

/***/ }),

/***/ "./resources/js/utilities/_musicReference.json":
/*!*****************************************************!*\
  !*** ./resources/js/utilities/_musicReference.json ***!
  \*****************************************************/
/*! exports provided: measures, notes, scale, variations, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"measures\":[{\"name\":\"whole\",\"displayName\":\"|\",\"default\":true},{\"name\":\"half\",\"displayName\":\"'\"},{\"name\":\"quarter\",\"displayName\":\"-\"},{\"name\":\"eightth\",\"displayName\":\"·\"},{\"name\":\"no\",\"displayName\":\"\"}],\"notes\":[{\"name\":\"C\",\"displayName\":\"C\"},{\"name\":\"C#\",\"displayName\":\"C♯\",\"altName\":\"D♭\"},{\"name\":\"D\",\"displayName\":\"D\"},{\"name\":\"D#\",\"displayName\":\"D♯\",\"altName\":\"E♭\"},{\"name\":\"E\",\"displayName\":\"E\"},{\"name\":\"F\",\"displayName\":\"F\"},{\"name\":\"F#\",\"displayName\":\"F♯\",\"altName\":\"G♭\"},{\"name\":\"G\",\"displayName\":\"G\"},{\"name\":\"G#\",\"displayName\":\"G♯\",\"altName\":\"A♭\"},{\"name\":\"A\",\"displayName\":\"A\"},{\"name\":\"A#\",\"displayName\":\"A♯\",\"altName\":\"B♭\"},{\"name\":\"B\",\"displayName\":\"B\"}],\"scale\":[{\"name\":\"major\",\"pattern\":[{\"name\":\"1\",\"noteIndex\":0},{\"name\":\"2\",\"noteIndex\":2},{\"name\":\"3\",\"noteIndex\":4},{\"name\":\"4\",\"noteIndex\":5},{\"name\":\"5\",\"noteIndex\":7},{\"name\":\"6\",\"noteIndex\":9},{\"name\":\"7\",\"noteIndex\":11},{\"name\":\"1s\",\"noteIndex\":1},{\"name\":\"2s\",\"noteIndex\":3},{\"name\":\"4s\",\"noteIndex\":6},{\"name\":\"5s\",\"noteIndex\":8},{\"name\":\"6s\",\"noteIndex\":10}],\"family\":[{\"name\":\"1\",\"variationIndex\":0},{\"name\":\"2\",\"variationIndex\":1},{\"name\":\"3\",\"variationIndex\":1},{\"name\":\"4\",\"variationIndex\":0},{\"name\":\"5\",\"variationIndex\":0},{\"name\":\"6\",\"variationIndex\":1},{\"name\":\"7\",\"variationIndex\":2}]}],\"variations\":[{\"name\":\"M\",\"display\":\"M\",\"html\":\"\",\"fullName\":\"Major\",\"precedence\":0,\"order\":0,\"default\":true},{\"name\":\"m\",\"display\":\"m\",\"html\":\"m\",\"fullName\":\"Minor\",\"precedence\":0,\"order\":0},{\"name\":\"dim\",\"display\":\"dim\",\"html\":\"<sup>dim</sup>\",\"fullName\":\"Diminished\",\"precedence\":0,\"order\":1},{\"name\":\"aug\",\"display\":\"aug\",\"html\":\"<sup>aug</sup>\",\"fullName\":\"Augmented\",\"precedence\":0,\"order\":1},{\"name\":\"dom7\",\"display\":\"7\",\"html\":\"<sup>7</sup>\",\"fullName\":\"Dominant seventh\",\"precedence\":1,\"order\":2},{\"name\":\"maj7\",\"display\":\"M7\",\"html\":\"<sup>M7</sup>\",\"fullName\":\"Major seventh\",\"precedence\":1,\"order\":2},{\"name\":\"5\",\"display\":\"5\",\"html\":\"<sup>5</sup>\",\"fullName\":\"Fifth/Power chord\",\"precedence\":1},{\"name\":\"flat5\",\"display\":\"♭5\",\"html\":\"<sup>♭5</sup>\",\"fullName\":\"Flat fifth\",\"precedence\":1},{\"name\":\"6\",\"display\":\"6\",\"html\":\"<sup>6</sup>\",\"fullName\":\"Sixth\",\"precedence\":1},{\"name\":\"9\",\"display\":\"9\",\"html\":\"<sup>9</sup>\",\"fullName\":\"Ninth\",\"precedence\":1},{\"name\":\"maj9\",\"display\":\"M9\",\"html\":\"<sup>M9</sup>\",\"fullName\":\"Major ninth\",\"precedence\":1},{\"name\":\"11\",\"display\":\"11\",\"html\":\"<sup>11</sup>\",\"fullName\":\"Eleventh\",\"precedence\":1},{\"name\":\"13\",\"display\":\"13\",\"html\":\"<sup>13</sup>\",\"fullName\":\"Thirteenth\",\"precedence\":1},{\"name\":\"sus2\",\"display\":\"sus2\",\"html\":\"<sup>sus2</sup>\",\"fullName\":\"Suspended second\",\"precedence\":2},{\"name\":\"sus4\",\"display\":\"sus4\",\"html\":\"<sup>sus4</sup>\",\"fullName\":\"Suspended fourth\",\"precedence\":2},{\"name\":\"add6\",\"display\":\"add6\",\"html\":\"<sup>add6</sup>\",\"fullName\":\"Add sixth\",\"precedence\":2},{\"name\":\"add9\",\"display\":\"add9\",\"html\":\"<sup>add9</sup>\",\"fullName\":\"Add ninth\",\"precedence\":2}]}");

/***/ }),

/***/ "./resources/js/utilities/chordMarker.js":
/*!***********************************************!*\
  !*** ./resources/js/utilities/chordMarker.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'dragSnap': 0,
    'leftOffset': 0,
    'scale': '',
    'mainKey': 'C',
    'mainScale': 'Major',
    'parent': undefined,
    'selectOnCreate': true,
    'remainSelected': false,
    'songModulation': 0,
    'songPartModulation': 0,
    'sequenceModulation': 0,
    'songLineModulation': 0,
    'modulation': 0,
    'value': null,
    'spacing': 'css',
    'editable': true,
    onDragStop: function onDragStop() {}
  };
  var ChordProcessor = window.ChordProcessor;

  function getOption(obj, name) {
    var option = $(obj).data('chordMarker-options');

    if (option == undefined || !option.hasOwnProperty(name)) {
      return undefined;
    }

    return option[name];
  }

  function setOption(obj, name, value) {
    var option = $(obj).data('chordMarker-options');

    if (option == undefined || !option.hasOwnProperty(name)) {
      return;
    }

    option[name] = value;
    $(obj).data('chordMarker-options', option);
  }
  /**
   * Update each chord
   * @param {object} obj
   */


  function updateChord(obj) {
    if ($(obj).attr('data-value') == '') {
      $(obj).html('&nbsp;');
      return;
    }

    var mainRoot = getOption(obj, 'key');
    var scale = getOption(obj, 'scale');
    mainRoot = typeof mainRoot == 'function' ? mainRoot() : mainRoot;
    scale = typeof scale == 'function' ? scale() : scale;
    var modulationAmount = getModulationAmount(obj);
    var disp = ChordProcessor.processChord($(obj).attr('data-value'), mainRoot, scale, modulationAmount);
    $(obj).html(disp);
  }
  /**
   * Set value of chord
   * @param {object} obj
   * @param {string} value Value of chord
   */


  function setValue(obj, value) {
    $(obj).attr('data-value', value);
    updateChord(obj);

    if (!getOption(obj, 'remainSelected') && value != '') {
      unselectMarker(obj);
    }
  }
  /**
   * Modulate the chord
   * @param {object} obj
   * @param {number} amount Amount of modulation
   */


  function modulate(obj, amount) {
    setOption(obj, 'modulation', amount);
  }
  /**
   * Get total modulation (song + song part + song line) of the chord
   * @param {object} obj
   */


  function getModulationAmount(obj) {
    var _songModulation = getOption(obj, 'songModulation');

    var _songPartModulation = getOption(obj, 'songPartModulation');

    var _sequenceModulation = getOption(obj, 'sequenceModulation');

    var _songLineModulation = getOption(obj, 'songLineModulation');

    var songModulation = typeof _songModulation == 'function' ? _songModulation() : _songModulation;
    var songPartModulation = typeof _songPartModulation == 'function' ? _songPartModulation() : _songPartModulation;
    var sequenceModulation = typeof _sequenceModulation == 'function' ? _sequenceModulation() : _sequenceModulation;
    var songLineModulation = typeof _songLineModulation == 'function' ? _songLineModulation() : _songLineModulation;
    var modulation = getOption(obj, 'modulation');
    return modulation * 1 + songModulation * 1 + songPartModulation * 1 + sequenceModulation * 1 + songLineModulation * 1;
  }
  /**
   * Toggle this chord marker as selected
   * @param {object} obj
   * @param {object} marker Target chord marker
   */


  function selectMarker(obj) {
    var chordBuilder = getOption(obj, 'chordBuilder');

    if ($(obj).hasClass('selected')) {
      unselectMarker(obj, chordBuilder);
      if (chordBuilder == '') return;
      $(chordBuilder).chordBuilder('setTarget', null);
    } else {
      unselectAllMarkers();
      $(obj).addClass('selected');
      if (chordBuilder == '') return;
      $(chordBuilder).chordBuilder('setTarget', obj);
    }
  }
  /**
   * Unselect this chord marker
   * @param {object} obj
   */


  function unselectMarker(obj) {
    var chordBuilder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    if ($(obj).length <= 0) return;
    $(obj).removeClass('selected'); // Remove if empty on unselect

    if ($(obj).attr('data-value') == '') {
      $(obj).remove();
    }

    if (chordBuilder == undefined) {
      chordBuilder = getOption(obj, 'chordBuilder');
    }

    if (chordBuilder == '') return;
    $(chordBuilder).chordBuilder('setTarget', null);
    setOption(obj, 'remainSelected', false);
  }

  function updatePosition(obj) {
    $(obj).css('left', getOption(obj, 'leftOffset'));
  }
  /**
   * Unselect all selected chords markers
   */


  function unselectAllMarkers() {
    $('.chord.selected').each(function () {
      unselectMarker(this);
      remainSelected = true;
    });
  }

  $.fn.chordMarker = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var settings = $.extend({}, defaults, command);
        var self = this; // Save settings

        $(self).data('chordMarker-options', settings); // Set up attributes

        $(self).addClass('chord').html('&nbsp;');
        var position = settings.position;

        if (settings.position != null) {
          position = Math.round(settings.leftOffset / settings.dragSnap);
          setOption(self, 'position', position);
        } // Set up draggable


        $(self).draggable({
          axis: 'x',
          addClasses: false,
          containment: 'parent',
          grid: [settings.dragSnap, 0],
          disabled: !settings.editable,
          create: function create(ev, ui) {
            $(self).removeAttr('style').css('left', settings.leftOffset).css('position', 'absolute').attr('data-position', position);
          },
          stop: function stop(ev, ui) {
            var diff = $(self).position().left;
            var snapPos = Math.round(diff / settings.dragSnap);
            $(self).removeAttr('style').css('left', snapPos * settings.dragSnap).attr('data-position', snapPos);
            $(self).trigger('chordMarker:dragstop', [$(self)]);
          }
        });

        if (settings.editable) {
          // Events
          $(self).on('click', function (ev) {
            selectMarker(self);
            settings.remainSelected = true;
          }); // Set-up context menu

          $(self).on('contextmenu', function (ev) {
            ev.preventDefault();
            $(settings.contextMenu).contextMenu('toggle', this);
          });

          if (settings.chordBuilder != '') {
            // Set-up double click
            $(self).on('dblclick', function () {
              $(settings.chordBuilder).chordBuilder('show', this);
            }); // Remove selection when clicked outside chord markers

            $(document).on('click', function (ev) {
              if ($(ev.target).closest('.chords').length <= 0 && $(ev.target).closest(settings.contextMenu).length <= 0 && $(ev.target).closest(settings.chordBuilder).length <= 0) {
                unselectMarker(self);
              }
            });
          } // Custom events


          $(self).on('chordMarker:dragstop', settings.onDragStop);
        } // Append marker to parent


        $(settings.parent).append($(self)); // Run on init

        if (settings.value == null) {
          var chordValue = $(settings.chordBuilder).chordBuilder('getChord', self);

          if (settings.selectOnCreate) {
            unselectAllMarkers();
            selectMarker(self);
          }

          setValue(self, chordValue.value);
        } else {
          setValue(self, settings.value);
          settings.value = null;
        }
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'update':
          return $(this).each(function () {
            updateChord(this);
          });

        case 'chordvalue':
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'select':
          return $(this).each(function () {
            selectMarker(this);
          });

        case 'unselect':
          return $(this).each(function () {
            unselectMarker(this);
          });

        case 'unselectall':
          unselectAllMarkers();
          return this;

        case 'modulate':
          if (typeof option != 'number') return this;
          return $(this).each(function () {
            modulate(this, option);
          });

        case 'option':
          if (typeof option != 'string') return null;

          if (value != undefined) {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'getmodulationamount':
          return getModulationAmount(this);

        case 'updateposition':
          return $(this).each(function () {
            updatePosition(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/utilities/chordProcessor.js":
/*!**************************************************!*\
  !*** ./resources/js/utilities/chordProcessor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.ChordProcessor = {
  musicReference: window.musicReference || {},
  processChord: function processChord(value, key, scale) {
    var modulation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (typeof value == 'string' && typeof scale == 'string' && typeof key == 'string') {
      var musicReference = ChordProcessor.musicReference;
      var rootKey = key;
      var rootScale = scale;
      var parts = value.split('/');
      var measure = parts[0];
      var root = parts[1];
      var variation = parts[2];
      var variation2 = parts[3];
      var bass = parts[4];
      if (measure == '' || root == '' || variation == '') return ''; // Get measure

      var measureDisplay = musicReference.measures.find(function (o) {
        return o.name == measure;
      }).displayName; // IF custom

      if (root == 'custom') {
        return [measureDisplay, variation].join('');
      } //** Get root and bass note **//
      // Get scale


      var scaleReference = musicReference.scale.find(function (o) {
        return o.name == rootScale;
      }) || musicReference.scale[0]; // Get position of root note

      modulation = modulation >= 0 ? modulation : 12 + modulation % 12;
      var keyNoteIndex = musicReference.notes.indexOf(musicReference.notes.find(function (note) {
        return note.name == rootKey;
      })) + modulation;
      var rootNoteIndex = (scaleReference.pattern.find(function (o) {
        return o.name == root;
      }).noteIndex + keyNoteIndex) % musicReference.notes.length;
      var noteRef = musicReference.notes[rootNoteIndex];
      var rootDisplay = noteRef.displayName;
      var bassDisplay = '';

      if (bass != '') {
        var bassNoteIndex = (scaleReference.pattern.find(function (o) {
          return o.name == bass;
        }).noteIndex + keyNoteIndex) % musicReference.notes.length;
        var bassNoteRef = musicReference.notes[bassNoteIndex];
        bassDisplay = "<sub>/" + bassNoteRef.displayName + '</sub>';
      } //** Get Variations */


      var variationDisplay = variation != '' ? musicReference.variations.find(function (o) {
        return o.name == variation;
      }).html : '';
      var variation2Display = variation2 != '' ? musicReference.variations.find(function (o) {
        return o.name == variation2;
      }).html : '';
      return [measureDisplay, rootDisplay, variationDisplay, variation2Display, bassDisplay].join('');
    }
  }
};

/***/ }),

/***/ "./resources/js/utilities/chordsLine.js":
/*!**********************************************!*\
  !*** ./resources/js/utilities/chordsLine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'spacing': 'css',
    'height': 10,
    'cursorWidth': 10,
    'contextMenu': '.chord-context-menu',
    'chordBuilder': '',
    'mainScale': '',
    'songModulation': 0,
    'songPartScale': '',
    'scale': '',
    'key': '',
    'songPartModulation': 0,
    'modulation': 0,
    'modulationInfo': '.song-line-modulation-info',
    'value': '',
    'fontSize': '',
    'fontFamily': '',
    'editable': true
  };
  /**
   * Get option from DOM data
   * @param {object} obj
   * @param {string} name option name/key
   */

  function getOption(obj, name) {
    var option = $(obj).data('chordsLine-options');

    if (option == undefined || !option.hasOwnProperty(name)) {
      return undefined;
    }

    return option[name];
  }
  /**
   * Set option value
   * @param {Object} obj
   * @param {String} option
   * @param {any} value
   */


  function setOption(obj, option, value) {
    var options = $(obj).data('chordsLine-options');
    options[option] = value;
    $(obj).data('chordsLine-options', options);
  }
  /**
   * Sort chord markers within the parent chord line
   * @param {Jquery Object} chordMarker
   */


  function sortChordMarkers(chordMarker) {
    var parent;
    var markers;

    if ($(chordMarker).hasClass('chord')) {
      parent = $(chordMarker).parent();
      markers = parent.children('.chord');
    } else if ($(chordMarker).hasClass('chords')) {
      markers = $(chordMarker).children('.chord');
      parent = chordMarker;
    } // Sort chords line


    markers.sort(function (elem1, elem2) {
      return $(elem1).offset().left > $(elem2).offset().left ? 1 : -1;
    }).appendTo(parent);
  }
  /**
   * Instantiate a new chord marker inside obj
   * @param {object} obj
   * @param {number} width the snap width of the marker
   * @param {number} position the left offset of the marker from the left edge of the document
   * @param {string} scale scale reference of the chord
   * @param {number} modulation modulation of the chord
   * @param {string} value chord value with parts delimited by /
   */


  function insertChordMarker(obj, width, leftOffset, position, scale) {
    var modulation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var value = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    $('<span>').chordMarker({
      'spacing': getOption(obj, 'spacing'),
      'chordBuilder': getOption(obj, 'chordBuilder'),
      'contextMenu': getOption(obj, 'contextMenu'),
      'dragSnap': width,
      'leftOffset': leftOffset,
      'position': position,
      'key': getOption(obj, 'key'),
      'mainScale': getOption(obj, 'mainScale'),
      'songPartScale': getOption(obj, 'songPartScale'),
      'songLineScale': function songLineScale() {
        getOption(obj, 'scale');
      },
      'scale': scale,
      'parent': obj,
      'songModulation': getOption(obj, 'songModulation'),
      'songLineModulation': function songLineModulation() {
        return getOption(obj, 'modulation');
      },
      'songPartModulation': getOption(obj, 'songPartModulation'),
      'sequenceModulation': getOption(obj, 'sequenceModulation'),
      'modulation': modulation,
      'value': value,
      'onDragStop': function onDragStop() {
        sortChordMarkers(obj);
      },
      'editable': getOption(obj, 'editable')
    });
  }
  /**
   * Set value of this chords line
   * @param {object} obj
   * @param {string} values Chords values. String delimited by |
   */


  function setValue(obj, values) {
    $(obj).children('.chord').remove();
    var chords = values.split('|');

    if (chords.length < 1) {
      console.error('Error at chordsLine.setValue() => Invalid chords data');
      return;
    } // Set chord line details


    var details = chords.splice(0, 1)[0].split('/');

    if (details.length < 2) {
      console.error('Error at chordsLine.setValue() => Invalid chords metadata');
      return;
    } // Set modulation and scale details for this line


    var modulation = details[0] * 1;
    var scale = details[1];
    modulate(obj, modulation);
    changeScale(obj, scale); // Don't show chords line when no chords to show

    if (chords.length <= 0) {
      $(obj).hide();
      return;
    } // Create a chord marker for each chord


    chords.forEach(function (chord) {
      // Get chord parts
      var chordPart = chord.split('/');
      if (chordPart.length != 8) return;
      var keyReference = chordPart[0] * 1;
      var scale = chordPart[1];
      var position = chordPart[2] * 1;
      var measure = chordPart[3];
      var root = chordPart[4];
      var variation = chordPart[5];
      var variation2 = chordPart[6];
      var bass = chordPart[7];
      insertChordMarker(obj, getOption(obj, 'cursorWidth'), position * getOption(obj, 'cursorWidth'), position, scale, keyReference, [measure, root, variation, variation2, bass].join('/'));
    });
  }
  /**
   * Get the value of chords in this chord line in array form
   * @param {object} obj
   */


  function getValue(obj) {
    var chords = []; // Get details

    var modulation = getOption(obj, 'modulation');
    var scale = getOption(obj, 'scale');
    modulation = typeof modulation == 'function' ? modulation() : modulation;
    scale = typeof scale == 'function' ? scale() : scale;
    chords.push([modulation, scale].join('/')); // Get chords in the line

    $(obj).find('.chord').each(function () {
      var modulation = $(this).chordMarker('option', 'modulation');
      var scale = $(this).chordMarker('option', 'scale');
      modulation = typeof modulation == 'function' ? modulation() : modulation;
      scale = typeof scale == 'function' ? scale() : scale;
      var position = $(this).attr('data-position');
      var value = $(this).attr('data-value');
      chords.push([modulation, scale, position, value].join('/'));
    });
    return chords;
  }
  /**
   * Modulate the song line
   * @param {object} obj
   * @param {number} amount Amount of modulation
   */


  function modulate(obj, amount) {
    $(obj).closest('.song-line').attr('data-modulation', amount);
    setOption(obj, 'modulation', amount);
    setModulationInfo(obj);
  }
  /**
   * Change the scale of the song line
   * @param {object} obj
   * @param {string} scale Name of the new scale
   */


  function changeScale(obj, scale) {
    $(obj).closest('.song-line').attr('data-scale', scale);
    setOption(obj, 'scale', scale);
    setModulationInfo(obj);
  }

  function updateChords(obj) {
    $(obj).find('.chord').each(function () {
      $(this).chordMarker('update');
    });
  }

  function setModulationInfo(obj) {
    // Get the song's modulation
    var songModulation = getOption(obj, 'songModulation');
    songModulation = typeof songModulation == 'function' ? songModulation() : songModulation; // Get the song part modulation

    var songPartModulation = getOption(obj, 'songPartModulation');
    songPartModulation = typeof songPartModulation == 'function' ? songPartModulation() : songPartModulation; // Get the sequence modulation

    var sequenceModulation = getOption(obj, 'sequenceModulation');
    sequenceModulation = typeof sequenceModulation == 'function' ? sequenceModulation() : sequenceModulation || 0; // Get this line's modulation

    var modulation = getOption(obj, 'modulation');
    modulation = typeof modulation == 'function' ? modulation() : modulation || 0; // Get the scale of the song part

    var songPartScale = getOption(obj, 'songPartScale');
    songPartScale = typeof songPartScale == 'function' ? songPartScale() : songPartScale; // Get this line's current scale

    var scale = getOption(obj, 'scale');
    scale = typeof scale == 'function' ? scale() : scale; // Get the song's main key

    var mainKey = getOption(obj, 'key');
    mainKey = typeof mainKey == 'function' ? mainKey() : mainKey; // Hide the modulation info if no changes to key and scale in relation with it's parent song part

    if (modulation == 0 && scale == songPartScale) {
      $(obj).siblings(getOption(obj, 'modulationInfo')).hide();
    } else {
      // Get the reference key given modulation and display
      var display = window.ChordProcessor.processChord('no/1/M//', mainKey, scale, modulation + songModulation * 1 + songPartModulation * 1 + sequenceModulation * 1);
      $(obj).siblings(getOption(obj, 'modulationInfo')).show().children('span').html('Key of ' + display + (scale != 'major' ? ' ' + scale : ''));
    }
  }

  function updateDisplay(obj) {
    var fontFamily = getOption(obj, 'fontFamily');
    var fontSize = getOption(obj, 'fontSize');
    var height = getOption(obj, 'height');
    var cursorWidth = getOption(obj, 'cursorWidth') * 1;

    if (fontFamily != null) {
      $(obj).css('font-family', fontFamily);
    }

    if (fontSize != null) {
      $(obj).css('font-size', fontSize);
    }

    if (fontSize != null) {
      $(obj).css('font-size', fontSize);
    }

    if (height != null) {
      $(obj).css('height', height);
    }

    $(obj).find('.chord').each(function () {
      var pos = $(this).chordMarker('option', 'position');
      $(this).chordMarker('option', 'leftOffset', pos * cursorWidth);
      $(this).chordMarker('option', 'dragSnap', cursorWidth);
      $(this).chordMarker('updatePosition');
    });
  }

  $.fn.chordsLine = function (command, option, value) {
    if (_typeof(command) === 'object' || command == undefined) {
      return $(this).each(function () {
        var self = this; // Skip if this element is already processed

        if ($(self).hasClass('chordsLine-processed')) return true; // Set up settings

        var settings = $.extend({}, defaults, command); // Save settings to DOM

        $(self).data('chordsLine-options', settings); // Initialize chord cursor

        if ($(self).children('.chord-cursor').length > 0) {
          return false;
        }

        var cursor = $('<span>').addClass('chord-cursor').html('&nbsp;'); // Click event for cursor

        cursor.on('click', function () {
          // Get position of cursor
          var position = cursor.position().left;
          var parent = cursor.parent();
          insertChordMarker(self, settings.cursorWidth, position, null, typeof settings.scale == 'function' ? settings.scale() : settings.scale); // Sort chords line

          sortChordMarkers(parent[0]);
        }); // Add chord cursor to chords line

        $(self).append(cursor); // Mouseover event for chords line to make chord cursor follow the mouse cursor

        $(self).on('mouseover', function () {
          // When mouse is hovered to chord view, track mouse position
          $(self).on('mousemove', function (event) {
            if (!$(self).is(event.target)) return true; // Get new position based on mouse cursor position and offsets.

            var diff = event.offsetX; // Get remainder and remove from difference for snapping

            var remainder = diff % settings.cursorWidth;
            cursor.css('left', diff - remainder + 'px');
          }); // Unbind mousemove event
        }).on('mouseout', function () {
          $(self).off('mousemove');
        });
        $(self).addClass('chordsLine-processed');
        changeScale(self, typeof settings.songPartScale == 'function' ? settings.songPartScale() : settings.songPartScale);

        if (settings.value != '') {
          setValue(self, settings.value);
        }

        updateDisplay(self);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLocaleLowerCase()) {
        case 'option':
          if (typeof option != 'string') return this;

          if (value != undefined) {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'setvalue':
          if (typeof option != 'string') return this;
          return $(this).each(function () {
            setValue(this, option);
          });

        case 'getvalue':
          return getValue(this);

        case 'setscale':
          return getValue(this);

        case 'modulate':
          if (typeof option != 'number') return; // NaN

          return $(this).each(function () {
            modulate(this, option);
          });

        case 'changescale':
          return $(this).each(function () {
            changeScale(this, option);
          });

        case 'updatechords':
          return $(this).each(function () {
            updateChords(this);
          });

        case 'update':
          return $(this).each(function () {
            setModulationInfo(this);
          });

        case 'updatedisplay':
          return $(this).each(function () {
            updateDisplay(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/utilities/lyricsLine.js":
/*!**********************************************!*\
  !*** ./resources/js/utilities/lyricsLine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  var defaults = {
    'dataSource': undefined,
    'editable': true,
    'contextMenu': '',
    'spacerContextMenu': '',
    'value': '',
    'fontSize': '',
    'fontFamily': '',
    'cursorWidth': 10,
    'offset': 4
  };
  /**
   * Get option value
   * @param {Object} object
   * @param {String} key
   */

  function getOption(object, key) {
    var options = $(object).data('lyricsLine-options');
    if (options == undefined || !options.hasOwnProperty(key)) return null;
    return options[key];
  }
  /**
   * Set option value
   * @param {Object} obj
   * @param {String} option
   * @param {any} value
   */


  function setOption(obj, option, value) {
    var options = $(obj).data('lyricsLine-options');
    options[option] = value;
    $(obj).data('lyricsLine-options', options);
  }
  /**
   * Add spacer next to this character
   * @param {object} obj
   * @param {number} width Width of the spacer
   */


  function addSpacer(obj, target, width) {
    if (width == undefined || width == '') width = 1;
    var i = width;
    var arr = [];

    while (--i) {
      arr[i] = '&nbsp;';
    }

    var sibPrevCount = $(target).prevAll('.character').length + 1;
    var spacer = $('<span>').addClass('spacer').attr('data-width', width).attr('data-position', sibPrevCount).html(arr.join('') + '-' + arr.join(''));
    spacer.on('contextmenu', function (ev) {
      ev.preventDefault();
      $(getOption(obj, 'spacerContextMenu')).contextMenu('show', this);
    });
    $(target).after(spacer);
  }
  /**
   * Remove temporary spacers
   */


  function cleanLine() {
    $('.lyrics .temp-spacer').remove();
  }
  /**
   * Get lyrics line value
   */


  function getValue(obj) {
    var lyrics = [];
    $(obj).children('span').each(function () {
      if ($(this).hasClass('character')) lyrics.push($(this).text());else if ($(this).hasClass('spacer')) {
        lyrics.push('{spacer-' + $(this).attr('data-width') + '}');
      }
    });
    return lyrics.join('');
  }
  /**
   *
   * @param {object} obj
   */


  function processLine(obj) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var settings = $(obj).data('lyricsLine-options');

    if (value != '') {
      settings.value = value;
    } // Get data


    var preDefSpacers = []; // Get predefined spacers

    if (settings.value.indexOf('{spacer-') >= 0) {
      var content = settings.value;
      var spacers = content.match(/\{spacer-[0-9]+\}/g);
      spacers.forEach(function (spacer) {
        // Get position and width of the spacer
        var position = content.indexOf(spacer);
        var width = spacer.match(/\d+/g)[0];
        preDefSpacers.push({
          'position': position,
          'width': width
        }); // Remove the spacer from the content

        content = content.replace(/\{spacer-[0-9]+\}/, '');
      });
      settings.value = content;
    }

    var data = '';

    if (settings.dataSource != undefined && $(settings.dataSource).hasClass('changed')) {
      data = $(settings.dataSource).val();
      $(settings.dataSource).removeClass('changed');
    } else {
      data = settings.value;
    }

    settings.value = '';
    $(obj).data('lyricsLine-options', settings);

    if (data == '') {
      return;
    }

    if (settings.editable || preDefSpacers.length > 0) {
      var charArr = data.split('');
      var formattedData = '';
      charArr.forEach(function (_char) {
        formattedData += '<span class="character">' + _char + '</span>';
      });
      $(obj).html(formattedData); // Set predefined spacers

      preDefSpacers.reverse().forEach(function (spacer) {
        addSpacer(obj, $(obj).children('.character')[spacer.position - 1], spacer.width);
      });
    } else {
      $(obj).html(data);
    } // Set event listener


    if (settings.editable) {
      $(obj).find('.character').on('mouseover', function () {
        $(this).css('border-right', '2.5px solid lightgray');
      }).on('mouseleave', function () {
        $(this).css('border-right', 'none');
      }).on('contextmenu', function (ev) {
        ev.preventDefault();
        $(this).css('border-right', 'none');
        $(settings.contextMenu).contextMenu('show', this);
      });
    }
  }

  function updateDisplay(obj) {
    var fontFamily = getOption(obj, 'fontFamily');
    var fontSize = getOption(obj, 'fontSize');
    var cursorWidth = getOption(obj, 'cursorWidth');
    var offset = getOption(obj, 'offset');

    if (fontFamily != null) {
      $(obj).css('font-family', fontFamily);
    }

    if (fontSize != null) {
      $(obj).css('font-size', fontSize);
    }

    if (cursorWidth != NaN && offset != NaN) {
      $(obj).css('margin-left', cursorWidth * offset);
    }
  }

  $.fn.lyricsLine = function (command, option, value) {
    if (command == undefined || _typeof(command) == 'object') {
      return $(this).each(function () {
        var self = this;
        var settings = $.extend({}, defaults, command);
        $(self).data('lyricsLine-options', settings);
        processLine(self);
        updateDisplay(self);
      });
    }

    if (typeof command == 'string') {
      switch (command.toLowerCase()) {
        case 'option':
          if (typeof option != 'string') return this;

          if (value != undefined) {
            return $(this).each(function () {
              setOption(this, option, value);
            });
          }

          return getOption(this, option);

        case 'addspacer':
          return $(this).each(function () {
            addSpacer(this, option, value);
          });

        case 'clean':
          return $(this).each(function () {
            cleanLine();
          });

        case 'setvalue':
          return $(this).each(function () {
            processLine(this, option);
          });

        case 'getvalue':
          return getValue(this);

        case 'processline':
          return $(this).each(function () {
            processLine(this);
          });

        case 'updatedisplay':
          return $(this).each(function () {
            updateDisplay(this);
          });
      }
    }
  };
})(jQuery);

/***/ }),

/***/ 2:
/*!*****************************************************!*\
  !*** multi ./resources/js/songViewer/songviewer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PrjFiles\Prj\eska\Source\eska\resources\js\songViewer\songviewer.js */"./resources/js/songViewer/songviewer.js");


/***/ })

/******/ });