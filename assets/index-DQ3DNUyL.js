function v0(o,a){for(var s=0;s<a.length;s++){const f=a[s];if(typeof f!="string"&&!Array.isArray(f)){for(const u in f)if(u!=="default"&&!(u in o)){const d=Object.getOwnPropertyDescriptor(f,u);d&&Object.defineProperty(o,u,d.get?d:{enumerable:!0,get:()=>f[u]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))f(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();function g0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Na={exports:{}},Yr={},La={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function w0(){if(nf)return oe;nf=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),L=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=L&&x[L]||x["@@iterator"],typeof x=="function"?x:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function S(x,M,re){this.props=x,this.context=M,this.refs=_,this.updater=re||O}S.prototype.isReactComponent={},S.prototype.setState=function(x,M){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,M,"setState")},S.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function z(){}z.prototype=S.prototype;function I(x,M,re){this.props=x,this.context=M,this.refs=_,this.updater=re||O}var V=I.prototype=new z;V.constructor=I,T(V,S.prototype),V.isPureReactComponent=!0;var J=Array.isArray,$=Object.prototype.hasOwnProperty,ne={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function Ne(x,M,re){var ie,ae={},se=null,ye=null;if(M!=null)for(ie in M.ref!==void 0&&(ye=M.ref),M.key!==void 0&&(se=""+M.key),M)$.call(M,ie)&&!b.hasOwnProperty(ie)&&(ae[ie]=M[ie]);var me=arguments.length-2;if(me===1)ae.children=re;else if(1<me){for(var xe=Array(me),it=0;it<me;it++)xe[it]=arguments[it+2];ae.children=xe}if(x&&x.defaultProps)for(ie in me=x.defaultProps,me)ae[ie]===void 0&&(ae[ie]=me[ie]);return{$$typeof:o,type:x,key:se,ref:ye,props:ae,_owner:ne.current}}function Pe(x,M){return{$$typeof:o,type:x.type,key:M,ref:x.ref,props:x.props,_owner:x._owner}}function $e(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function Pt(x){var M={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(re){return M[re]})}var _t=/\/+/g;function ot(x,M){return typeof x=="object"&&x!==null&&x.key!=null?Pt(""+x.key):M.toString(36)}function vt(x,M,re,ie,ae){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ye=!1;if(x===null)ye=!0;else switch(se){case"string":case"number":ye=!0;break;case"object":switch(x.$$typeof){case o:case a:ye=!0}}if(ye)return ye=x,ae=ae(ye),x=ie===""?"."+ot(ye,0):ie,J(ae)?(re="",x!=null&&(re=x.replace(_t,"$&/")+"/"),vt(ae,M,re,"",function(it){return it})):ae!=null&&($e(ae)&&(ae=Pe(ae,re+(!ae.key||ye&&ye.key===ae.key?"":(""+ae.key).replace(_t,"$&/")+"/")+x)),M.push(ae)),1;if(ye=0,ie=ie===""?".":ie+":",J(x))for(var me=0;me<x.length;me++){se=x[me];var xe=ie+ot(se,me);ye+=vt(se,M,re,xe,ae)}else if(xe=P(x),typeof xe=="function")for(x=xe.call(x),me=0;!(se=x.next()).done;)se=se.value,xe=ie+ot(se,me++),ye+=vt(se,M,re,xe,ae);else if(se==="object")throw M=String(x),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ye}function Rt(x,M,re){if(x==null)return x;var ie=[],ae=0;return vt(x,ie,"","",function(se){return M.call(re,se,ae++)}),ie}function Je(x){if(x._status===-1){var M=x._result;M=M(),M.then(function(re){(x._status===0||x._status===-1)&&(x._status=1,x._result=re)},function(re){(x._status===0||x._status===-1)&&(x._status=2,x._result=re)}),x._status===-1&&(x._status=0,x._result=M)}if(x._status===1)return x._result.default;throw x._result}var _e={current:null},W={transition:null},ee={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:W,ReactCurrentOwner:ne};function Y(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Rt,forEach:function(x,M,re){Rt(x,function(){M.apply(this,arguments)},re)},count:function(x){var M=0;return Rt(x,function(){M++}),M},toArray:function(x){return Rt(x,function(M){return M})||[]},only:function(x){if(!$e(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=S,oe.Fragment=s,oe.Profiler=u,oe.PureComponent=I,oe.StrictMode=f,oe.Suspense=h,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,oe.act=Y,oe.cloneElement=function(x,M,re){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ie=T({},x.props),ae=x.key,se=x.ref,ye=x._owner;if(M!=null){if(M.ref!==void 0&&(se=M.ref,ye=ne.current),M.key!==void 0&&(ae=""+M.key),x.type&&x.type.defaultProps)var me=x.type.defaultProps;for(xe in M)$.call(M,xe)&&!b.hasOwnProperty(xe)&&(ie[xe]=M[xe]===void 0&&me!==void 0?me[xe]:M[xe])}var xe=arguments.length-2;if(xe===1)ie.children=re;else if(1<xe){me=Array(xe);for(var it=0;it<xe;it++)me[it]=arguments[it+2];ie.children=me}return{$$typeof:o,type:x.type,key:ae,ref:se,props:ie,_owner:ye}},oe.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:d,_context:x},x.Consumer=x},oe.createElement=Ne,oe.createFactory=function(x){var M=Ne.bind(null,x);return M.type=x,M},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:y,render:x}},oe.isValidElement=$e,oe.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:Je}},oe.memo=function(x,M){return{$$typeof:v,type:x,compare:M===void 0?null:M}},oe.startTransition=function(x){var M=W.transition;W.transition={};try{x()}finally{W.transition=M}},oe.unstable_act=Y,oe.useCallback=function(x,M){return _e.current.useCallback(x,M)},oe.useContext=function(x){return _e.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return _e.current.useDeferredValue(x)},oe.useEffect=function(x,M){return _e.current.useEffect(x,M)},oe.useId=function(){return _e.current.useId()},oe.useImperativeHandle=function(x,M,re){return _e.current.useImperativeHandle(x,M,re)},oe.useInsertionEffect=function(x,M){return _e.current.useInsertionEffect(x,M)},oe.useLayoutEffect=function(x,M){return _e.current.useLayoutEffect(x,M)},oe.useMemo=function(x,M){return _e.current.useMemo(x,M)},oe.useReducer=function(x,M,re){return _e.current.useReducer(x,M,re)},oe.useRef=function(x){return _e.current.useRef(x)},oe.useState=function(x){return _e.current.useState(x)},oe.useSyncExternalStore=function(x,M,re){return _e.current.useSyncExternalStore(x,M,re)},oe.useTransition=function(){return _e.current.useTransition()},oe.version="18.3.1",oe}var rf;function Ga(){return rf||(rf=1,La.exports=w0()),La.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function x0(){if(of)return Yr;of=1;var o=Ga(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function m(y,h,v){var E,L={},P=null,O=null;v!==void 0&&(P=""+v),h.key!==void 0&&(P=""+h.key),h.ref!==void 0&&(O=h.ref);for(E in h)f.call(h,E)&&!d.hasOwnProperty(E)&&(L[E]=h[E]);if(y&&y.defaultProps)for(E in h=y.defaultProps,h)L[E]===void 0&&(L[E]=h[E]);return{$$typeof:a,type:y,key:P,ref:O,props:L,_owner:u.current}}return Yr.Fragment=s,Yr.jsx=m,Yr.jsxs=m,Yr}var lf;function S0(){return lf||(lf=1,Na.exports=x0()),Na.exports}var j=S0(),R=Ga();const k0=g0(R),af=v0({__proto__:null,default:k0},[R]);var Kr={},sf;function E0(){if(sf)return Kr;sf=1,Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.parse=m,Kr.serialize=v;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,a=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,f=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,d=(()=>{const P=function(){};return P.prototype=Object.create(null),P})();function m(P,O){const T=new d,_=P.length;if(_<2)return T;const S=(O==null?void 0:O.decode)||E;let z=0;do{const I=P.indexOf("=",z);if(I===-1)break;const V=P.indexOf(";",z),J=V===-1?_:V;if(I>J){z=P.lastIndexOf(";",I-1)+1;continue}const $=y(P,z,I),ne=h(P,I,$),b=P.slice($,ne);if(T[b]===void 0){let Ne=y(P,I+1,J),Pe=h(P,J,Ne);const $e=S(P.slice(Ne,Pe));T[b]=$e}z=J+1}while(z<_);return T}function y(P,O,T){do{const _=P.charCodeAt(O);if(_!==32&&_!==9)return O}while(++O<T);return T}function h(P,O,T){for(;O>T;){const _=P.charCodeAt(--O);if(_!==32&&_!==9)return O+1}return T}function v(P,O,T){const _=(T==null?void 0:T.encode)||encodeURIComponent;if(!o.test(P))throw new TypeError(`argument name is invalid: ${P}`);const S=_(O);if(!a.test(S))throw new TypeError(`argument val is invalid: ${O}`);let z=P+"="+S;if(!T)return z;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);z+="; Max-Age="+T.maxAge}if(T.domain){if(!s.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);z+="; Domain="+T.domain}if(T.path){if(!f.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);z+="; Path="+T.path}if(T.expires){if(!L(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);z+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(z+="; HttpOnly"),T.secure&&(z+="; Secure"),T.partitioned&&(z+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return z}function E(P){if(P.indexOf("%")===-1)return P;try{return decodeURIComponent(P)}catch{return P}}function L(P){return u.call(P)==="[object Date]"}return Kr}E0();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uf="popstate";function C0(o={}){function a(f,u){let{pathname:d,search:m,hash:y}=f.location;return Ua("",{pathname:d,search:m,hash:y},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function s(f,u){return typeof u=="string"?u:Jr(u)}return _0(a,s,null,o)}function Ce(o,a){if(o===!1||o===null||typeof o>"u")throw new Error(a)}function Mt(o,a){if(!o){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function P0(){return Math.random().toString(36).substring(2,10)}function cf(o,a){return{usr:o.state,key:o.key,idx:a}}function Ua(o,a,s=null,f){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof a=="string"?or(a):a,state:s,key:a&&a.key||f||P0()}}function Jr({pathname:o="/",search:a="",hash:s=""}){return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function or(o){let a={};if(o){let s=o.indexOf("#");s>=0&&(a.hash=o.substring(s),o=o.substring(0,s));let f=o.indexOf("?");f>=0&&(a.search=o.substring(f),o=o.substring(0,f)),o&&(a.pathname=o)}return a}function _0(o,a,s,f={}){let{window:u=document.defaultView,v5Compat:d=!1}=f,m=u.history,y="POP",h=null,v=E();v==null&&(v=0,m.replaceState({...m.state,idx:v},""));function E(){return(m.state||{idx:null}).idx}function L(){y="POP";let S=E(),z=S==null?null:S-v;v=S,h&&h({action:y,location:_.location,delta:z})}function P(S,z){y="PUSH";let I=Ua(_.location,S,z);v=E()+1;let V=cf(I,v),J=_.createHref(I);try{m.pushState(V,"",J)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;u.location.assign(J)}d&&h&&h({action:y,location:_.location,delta:1})}function O(S,z){y="REPLACE";let I=Ua(_.location,S,z);v=E();let V=cf(I,v),J=_.createHref(I);m.replaceState(V,"",J),d&&h&&h({action:y,location:_.location,delta:0})}function T(S){let z=u.location.origin!=="null"?u.location.origin:u.location.href,I=typeof S=="string"?S:Jr(S);return I=I.replace(/ $/,"%20"),Ce(z,`No window.location.(origin|href) available to create URL for href: ${I}`),new URL(I,z)}let _={get action(){return y},get location(){return o(u,m)},listen(S){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(uf,L),h=S,()=>{u.removeEventListener(uf,L),h=null}},createHref(S){return a(u,S)},createURL:T,encodeLocation(S){let z=T(S);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:P,replace:O,go(S){return m.go(S)}};return _}function Mf(o,a,s="/"){return R0(o,a,s,!1)}function R0(o,a,s,f){let u=typeof a=="string"?or(a):a,d=yn(u.pathname||"/",s);if(d==null)return null;let m=Df(o);N0(m);let y=null;for(let h=0;y==null&&h<m.length;++h){let v=A0(d);y=M0(m[h],v,f)}return y}function Df(o,a=[],s=[],f=""){let u=(d,m,y)=>{let h={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};h.relativePath.startsWith("/")&&(Ce(h.relativePath.startsWith(f),`Absolute route path "${h.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(f.length));let v=Xt([f,h.relativePath]),E=s.concat(h);d.children&&d.children.length>0&&(Ce(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Df(d.children,a,E,v)),!(d.path==null&&!d.index)&&a.push({path:v,score:$0(v,d.index),routesMeta:E})};return o.forEach((d,m)=>{var y;if(d.path===""||!((y=d.path)!=null&&y.includes("?")))u(d,m);else for(let h of Af(d.path))u(d,m,h)}),a}function Af(o){let a=o.split("/");if(a.length===0)return[];let[s,...f]=a,u=s.endsWith("?"),d=s.replace(/\?$/,"");if(f.length===0)return u?[d,""]:[d];let m=Af(f.join("/")),y=[];return y.push(...m.map(h=>h===""?d:[d,h].join("/"))),u&&y.push(...m),y.map(h=>o.startsWith("/")&&h===""?"/":h)}function N0(o){o.sort((a,s)=>a.score!==s.score?s.score-a.score:F0(a.routesMeta.map(f=>f.childrenIndex),s.routesMeta.map(f=>f.childrenIndex)))}var L0=/^:[\w-]+$/,T0=3,z0=2,j0=1,O0=10,I0=-2,ff=o=>o==="*";function $0(o,a){let s=o.split("/"),f=s.length;return s.some(ff)&&(f+=I0),a&&(f+=z0),s.filter(u=>!ff(u)).reduce((u,d)=>u+(L0.test(d)?T0:d===""?j0:O0),f)}function F0(o,a){return o.length===a.length&&o.slice(0,-1).every((f,u)=>f===a[u])?o[o.length-1]-a[a.length-1]:0}function M0(o,a,s=!1){let{routesMeta:f}=o,u={},d="/",m=[];for(let y=0;y<f.length;++y){let h=f[y],v=y===f.length-1,E=d==="/"?a:a.slice(d.length)||"/",L=Ri({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},E),P=h.route;if(!L&&v&&s&&!f[f.length-1].route.index&&(L=Ri({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},E)),!L)return null;Object.assign(u,L.params),m.push({params:u,pathname:Xt([d,L.pathname]),pathnameBase:W0(Xt([d,L.pathnameBase])),route:P}),L.pathnameBase!=="/"&&(d=Xt([d,L.pathnameBase]))}return m}function Ri(o,a){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,f]=D0(o.path,o.caseSensitive,o.end),u=a.match(s);if(!u)return null;let d=u[0],m=d.replace(/(.)\/+$/,"$1"),y=u.slice(1);return{params:f.reduce((v,{paramName:E,isOptional:L},P)=>{if(E==="*"){let T=y[P]||"";m=d.slice(0,d.length-T.length).replace(/(.)\/+$/,"$1")}const O=y[P];return L&&!O?v[E]=void 0:v[E]=(O||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:m,pattern:o}}function D0(o,a=!1,s=!0){Mt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let f=[],u="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,h)=>(f.push({paramName:y,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(f.push({paramName:"*"}),u+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":o!==""&&o!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),f]}function A0(o){try{return o.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Mt(!1,`The URL path "${o}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),o}}function yn(o,a){if(a==="/")return o;if(!o.toLowerCase().startsWith(a.toLowerCase()))return null;let s=a.endsWith("/")?a.length-1:a.length,f=o.charAt(s);return f&&f!=="/"?null:o.slice(s)||"/"}function U0(o,a="/"){let{pathname:s,search:f="",hash:u=""}=typeof o=="string"?or(o):o;return{pathname:s?s.startsWith("/")?s:B0(s,a):a,search:H0(f),hash:Q0(u)}}function B0(o,a){let s=a.replace(/\/+$/,"").split("/");return o.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function Ta(o,a,s,f){return`Cannot include a '${o}' character in a manually specified \`to.${a}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function V0(o){return o.filter((a,s)=>s===0||a.route.path&&a.route.path.length>0)}function Uf(o){let a=V0(o);return a.map((s,f)=>f===a.length-1?s.pathname:s.pathnameBase)}function Bf(o,a,s,f=!1){let u;typeof o=="string"?u=or(o):(u={...o},Ce(!u.pathname||!u.pathname.includes("?"),Ta("?","pathname","search",u)),Ce(!u.pathname||!u.pathname.includes("#"),Ta("#","pathname","hash",u)),Ce(!u.search||!u.search.includes("#"),Ta("#","search","hash",u)));let d=o===""||u.pathname==="",m=d?"/":u.pathname,y;if(m==null)y=s;else{let L=a.length-1;if(!f&&m.startsWith("..")){let P=m.split("/");for(;P[0]==="..";)P.shift(),L-=1;u.pathname=P.join("/")}y=L>=0?a[L]:"/"}let h=U0(u,y),v=m&&m!=="/"&&m.endsWith("/"),E=(d||m===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(v||E)&&(h.pathname+="/"),h}var Xt=o=>o.join("/").replace(/\/\/+/g,"/"),W0=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),H0=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Q0=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Y0(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Vf=["POST","PUT","PATCH","DELETE"];new Set(Vf);var K0=["GET",...Vf];new Set(K0);var ir=R.createContext(null);ir.displayName="DataRouter";var Li=R.createContext(null);Li.displayName="DataRouterState";var Wf=R.createContext({isTransitioning:!1});Wf.displayName="ViewTransition";var X0=R.createContext(new Map);X0.displayName="Fetchers";var G0=R.createContext(null);G0.displayName="Await";var Dt=R.createContext(null);Dt.displayName="Navigation";var to=R.createContext(null);to.displayName="Location";var At=R.createContext({outlet:null,matches:[],isDataRoute:!1});At.displayName="Route";var Ja=R.createContext(null);Ja.displayName="RouteError";function J0(o,{relative:a}={}){Ce(no(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:f}=R.useContext(Dt),{hash:u,pathname:d,search:m}=ro(o,{relative:a}),y=d;return s!=="/"&&(y=d==="/"?s:Xt([s,d])),f.createHref({pathname:y,search:m,hash:u})}function no(){return R.useContext(to)!=null}function Gt(){return Ce(no(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(to).location}var Hf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qf(o){R.useContext(Dt).static||R.useLayoutEffect(o)}function Yf(){let{isDataRoute:o}=R.useContext(At);return o?cm():Z0()}function Z0(){Ce(no(),"useNavigate() may be used only in the context of a <Router> component.");let o=R.useContext(ir),{basename:a,navigator:s}=R.useContext(Dt),{matches:f}=R.useContext(At),{pathname:u}=Gt(),d=JSON.stringify(Uf(f)),m=R.useRef(!1);return Qf(()=>{m.current=!0}),R.useCallback((h,v={})=>{if(Mt(m.current,Hf),!m.current)return;if(typeof h=="number"){s.go(h);return}let E=Bf(h,JSON.parse(d),u,v.relative==="path");o==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:Xt([a,E.pathname])),(v.replace?s.replace:s.push)(E,v.state,v)},[a,s,d,u,o])}R.createContext(null);function q0(){let{matches:o}=R.useContext(At),a=o[o.length-1];return a?a.params:{}}function ro(o,{relative:a}={}){let{matches:s}=R.useContext(At),{pathname:f}=Gt(),u=JSON.stringify(Uf(s));return R.useMemo(()=>Bf(o,JSON.parse(u),f,a==="path"),[o,u,f,a])}function b0(o,a){return Kf(o,a)}function Kf(o,a,s,f){var z;Ce(no(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=R.useContext(Dt),{matches:d}=R.useContext(At),m=d[d.length-1],y=m?m.params:{},h=m?m.pathname:"/",v=m?m.pathnameBase:"/",E=m&&m.route;{let I=E&&E.path||"";Xf(h,!E||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let L=Gt(),P;if(a){let I=typeof a=="string"?or(a):a;Ce(v==="/"||((z=I.pathname)==null?void 0:z.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${I.pathname}" was given in the \`location\` prop.`),P=I}else P=L;let O=P.pathname||"/",T=O;if(v!=="/"){let I=v.replace(/^\//,"").split("/");T="/"+O.replace(/^\//,"").split("/").slice(I.length).join("/")}let _=Mf(o,{pathname:T});Mt(E||_!=null,`No routes matched location "${P.pathname}${P.search}${P.hash}" `),Mt(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=om(_&&_.map(I=>Object.assign({},I,{params:Object.assign({},y,I.params),pathname:Xt([v,u.encodeLocation?u.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?v:Xt([v,u.encodeLocation?u.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),d,s,f);return a&&S?R.createElement(to.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...P},navigationType:"POP"}},S):S}function em(){let o=um(),a=Y0(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,f="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:f},d={padding:"2px 4px",backgroundColor:f},m=null;return console.error("Error handled by React Router default ErrorBoundary:",o),m=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:d},"ErrorBoundary")," or"," ",R.createElement("code",{style:d},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},a),s?R.createElement("pre",{style:u},s):null,m)}var tm=R.createElement(em,null),nm=class extends R.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location||a.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:a.error,location:a.location,revalidation:o.revalidation||a.revalidation}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error!==void 0?R.createElement(At.Provider,{value:this.props.routeContext},R.createElement(Ja.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function rm({routeContext:o,match:a,children:s}){let f=R.useContext(ir);return f&&f.static&&f.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=a.route.id),R.createElement(At.Provider,{value:o},s)}function om(o,a=[],s=null,f=null){if(o==null){if(!s)return null;if(s.errors)o=s.matches;else if(a.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let u=o,d=s==null?void 0:s.errors;if(d!=null){let h=u.findIndex(v=>v.route.id&&(d==null?void 0:d[v.route.id])!==void 0);Ce(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let m=!1,y=-1;if(s)for(let h=0;h<u.length;h++){let v=u[h];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=h),v.route.id){let{loaderData:E,errors:L}=s,P=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!L||L[v.route.id]===void 0);if(v.route.lazy||P){m=!0,y>=0?u=u.slice(0,y+1):u=[u[0]];break}}}return u.reduceRight((h,v,E)=>{let L,P=!1,O=null,T=null;s&&(L=d&&v.route.id?d[v.route.id]:void 0,O=v.route.errorElement||tm,m&&(y<0&&E===0?(Xf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),P=!0,T=null):y===E&&(P=!0,T=v.route.hydrateFallbackElement||null)));let _=a.concat(u.slice(0,E+1)),S=()=>{let z;return L?z=O:P?z=T:v.route.Component?z=R.createElement(v.route.Component,null):v.route.element?z=v.route.element:z=h,R.createElement(rm,{match:v,routeContext:{outlet:h,matches:_,isDataRoute:s!=null},children:z})};return s&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?R.createElement(nm,{location:s.location,revalidation:s.revalidation,component:O,error:L,children:S(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):S()},null)}function Za(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function im(o){let a=R.useContext(ir);return Ce(a,Za(o)),a}function lm(o){let a=R.useContext(Li);return Ce(a,Za(o)),a}function am(o){let a=R.useContext(At);return Ce(a,Za(o)),a}function qa(o){let a=am(o),s=a.matches[a.matches.length-1];return Ce(s.route.id,`${o} can only be used on routes that contain a unique "id"`),s.route.id}function sm(){return qa("useRouteId")}function um(){var f;let o=R.useContext(Ja),a=lm("useRouteError"),s=qa("useRouteError");return o!==void 0?o:(f=a.errors)==null?void 0:f[s]}function cm(){let{router:o}=im("useNavigate"),a=qa("useNavigate"),s=R.useRef(!1);return Qf(()=>{s.current=!0}),R.useCallback(async(u,d={})=>{Mt(s.current,Hf),s.current&&(typeof u=="number"?o.navigate(u):await o.navigate(u,{fromRouteId:a,...d}))},[o,a])}var df={};function Xf(o,a,s){!a&&!df[o]&&(df[o]=!0,Mt(!1,s))}R.memo(fm);function fm({routes:o,future:a,state:s}){return Kf(o,void 0,s,a)}function Ot(o){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dm({basename:o="/",children:a=null,location:s,navigationType:f="POP",navigator:u,static:d=!1}){Ce(!no(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=o.replace(/^\/*/,"/"),y=R.useMemo(()=>({basename:m,navigator:u,static:d,future:{}}),[m,u,d]);typeof s=="string"&&(s=or(s));let{pathname:h="/",search:v="",hash:E="",state:L=null,key:P="default"}=s,O=R.useMemo(()=>{let T=yn(h,m);return T==null?null:{location:{pathname:T,search:v,hash:E,state:L,key:P},navigationType:f}},[m,h,v,E,L,P,f]);return Mt(O!=null,`<Router basename="${m}"> is not able to match the URL "${h}${v}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:R.createElement(Dt.Provider,{value:y},R.createElement(to.Provider,{children:a,value:O}))}function pf({children:o,location:a}){return b0(Ba(o),a)}function Ba(o,a=[]){let s=[];return R.Children.forEach(o,(f,u)=>{if(!R.isValidElement(f))return;let d=[...a,u];if(f.type===R.Fragment){s.push.apply(s,Ba(f.props.children,d));return}Ce(f.type===Ot,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!f.props.index||!f.props.children,"An index route cannot have child routes.");let m={id:f.props.id||d.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(m.children=Ba(f.props.children,d)),s.push(m)}),s}var ki="get",Ei="application/x-www-form-urlencoded";function Ti(o){return o!=null&&typeof o.tagName=="string"}function pm(o){return Ti(o)&&o.tagName.toLowerCase()==="button"}function mm(o){return Ti(o)&&o.tagName.toLowerCase()==="form"}function hm(o){return Ti(o)&&o.tagName.toLowerCase()==="input"}function ym(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function vm(o,a){return o.button===0&&(!a||a==="_self")&&!ym(o)}var yi=null;function gm(){if(yi===null)try{new FormData(document.createElement("form"),0),yi=!1}catch{yi=!0}return yi}var wm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function za(o){return o!=null&&!wm.has(o)?(Mt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ei}"`),null):o}function xm(o,a){let s,f,u,d,m;if(mm(o)){let y=o.getAttribute("action");f=y?yn(y,a):null,s=o.getAttribute("method")||ki,u=za(o.getAttribute("enctype"))||Ei,d=new FormData(o)}else if(pm(o)||hm(o)&&(o.type==="submit"||o.type==="image")){let y=o.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=o.getAttribute("formaction")||y.getAttribute("action");if(f=h?yn(h,a):null,s=o.getAttribute("formmethod")||y.getAttribute("method")||ki,u=za(o.getAttribute("formenctype"))||za(y.getAttribute("enctype"))||Ei,d=new FormData(y,o),!gm()){let{name:v,type:E,value:L}=o;if(E==="image"){let P=v?`${v}.`:"";d.append(`${P}x`,"0"),d.append(`${P}y`,"0")}else v&&d.append(v,L)}}else{if(Ti(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ki,f=null,u=Ei,m=o}return d&&u==="text/plain"&&(m=d,d=void 0),{action:f,method:s.toLowerCase(),encType:u,formData:d,body:m}}function ba(o,a){if(o===!1||o===null||typeof o>"u")throw new Error(a)}async function Sm(o,a){if(o.id in a)return a[o.id];try{let s=await import(o.module);return a[o.id]=s,s}catch(s){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function km(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Em(o,a,s){let f=await Promise.all(o.map(async u=>{let d=a.routes[u.route.id];if(d){let m=await Sm(d,s);return m.links?m.links():[]}return[]}));return Rm(f.flat(1).filter(km).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function mf(o,a,s,f,u,d){let m=(h,v)=>s[v]?h.route.id!==s[v].route.id:!0,y=(h,v)=>{var E;return s[v].pathname!==h.pathname||((E=s[v].route.path)==null?void 0:E.endsWith("*"))&&s[v].params["*"]!==h.params["*"]};return d==="assets"?a.filter((h,v)=>m(h,v)||y(h,v)):d==="data"?a.filter((h,v)=>{var L;let E=f.routes[h.route.id];if(!E||!E.hasLoader)return!1;if(m(h,v)||y(h,v))return!0;if(h.route.shouldRevalidate){let P=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((L=s[0])==null?void 0:L.params)||{},nextUrl:new URL(o,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function Cm(o,a){return Pm(o.map(s=>{let f=a.routes[s.route.id];if(!f)return[];let u=[f.module];return f.imports&&(u=u.concat(f.imports)),u}).flat(1))}function Pm(o){return[...new Set(o)]}function _m(o){let a={},s=Object.keys(o).sort();for(let f of s)a[f]=o[f];return a}function Rm(o,a){let s=new Set;return new Set(a),o.reduce((f,u)=>{let d=JSON.stringify(_m(u));return s.has(d)||(s.add(d),f.push({key:d,link:u})),f},[])}function Nm(o){let a=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return a.pathname==="/"?a.pathname="_root.data":a.pathname=`${a.pathname.replace(/\/$/,"")}.data`,a}function Lm(){let o=R.useContext(ir);return ba(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Tm(){let o=R.useContext(Li);return ba(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var es=R.createContext(void 0);es.displayName="FrameworkContext";function Gf(){let o=R.useContext(es);return ba(o,"You must render this element inside a <HydratedRouter> element"),o}function zm(o,a){let s=R.useContext(es),[f,u]=R.useState(!1),[d,m]=R.useState(!1),{onFocus:y,onBlur:h,onMouseEnter:v,onMouseLeave:E,onTouchStart:L}=a,P=R.useRef(null);R.useEffect(()=>{if(o==="render"&&m(!0),o==="viewport"){let _=z=>{z.forEach(I=>{m(I.isIntersecting)})},S=new IntersectionObserver(_,{threshold:.5});return P.current&&S.observe(P.current),()=>{S.disconnect()}}},[o]),R.useEffect(()=>{if(f){let _=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(_)}}},[f]);let O=()=>{u(!0)},T=()=>{u(!1),m(!1)};return s?o!=="intent"?[d,P,{}]:[d,P,{onFocus:Xr(y,O),onBlur:Xr(h,T),onMouseEnter:Xr(v,O),onMouseLeave:Xr(E,T),onTouchStart:Xr(L,O)}]:[!1,P,{}]}function Xr(o,a){return s=>{o&&o(s),s.defaultPrevented||a(s)}}function jm({page:o,...a}){let{router:s}=Lm(),f=R.useMemo(()=>Mf(s.routes,o,s.basename),[s.routes,o,s.basename]);return f?R.createElement(Im,{page:o,matches:f,...a}):(console.warn(`Tried to prefetch ${o} but no routes matched.`),null)}function Om(o){let{manifest:a,routeModules:s}=Gf(),[f,u]=R.useState([]);return R.useEffect(()=>{let d=!1;return Em(o,a,s).then(m=>{d||u(m)}),()=>{d=!0}},[o,a,s]),f}function Im({page:o,matches:a,...s}){let f=Gt(),{manifest:u,routeModules:d}=Gf(),{loaderData:m,matches:y}=Tm(),h=R.useMemo(()=>mf(o,a,y,u,f,"data"),[o,a,y,u,f]),v=R.useMemo(()=>mf(o,a,y,u,f,"assets"),[o,a,y,u,f]),E=R.useMemo(()=>{if(o===f.pathname+f.search+f.hash)return[];let O=new Set,T=!1;if(a.forEach(S=>{var I;let z=u.routes[S.route.id];!z||!z.hasLoader||(!h.some(V=>V.route.id===S.route.id)&&S.route.id in m&&((I=d[S.route.id])!=null&&I.shouldRevalidate)||z.hasClientLoader?T=!0:O.add(S.route.id))}),O.size===0)return[];let _=Nm(o);return T&&O.size>0&&_.searchParams.set("_routes",a.filter(S=>O.has(S.route.id)).map(S=>S.route.id).join(",")),[_.pathname+_.search]},[m,f,u,h,a,o,d]),L=R.useMemo(()=>Cm(v,u),[v,u]),P=Om(v);return R.createElement(R.Fragment,null,E.map(O=>R.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...s})),L.map(O=>R.createElement("link",{key:O,rel:"modulepreload",href:O,...s})),P.map(({key:O,link:T})=>R.createElement("link",{key:O,...T})))}function $m(...o){return a=>{o.forEach(s=>{typeof s=="function"?s(a):s!=null&&(s.current=a)})}}var Jf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jf&&(window.__reactRouterVersion="7.0.2")}catch{}function Fm({basename:o,children:a,window:s}){let f=R.useRef();f.current==null&&(f.current=C0({window:s,v5Compat:!0}));let u=f.current,[d,m]=R.useState({action:u.action,location:u.location}),y=R.useCallback(h=>{R.startTransition(()=>m(h))},[m]);return R.useLayoutEffect(()=>u.listen(y),[u,y]),R.createElement(dm,{basename:o,children:a,location:d.location,navigationType:d.action,navigator:u})}var Zf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zi=R.forwardRef(function({onClick:a,discover:s="render",prefetch:f="none",relative:u,reloadDocument:d,replace:m,state:y,target:h,to:v,preventScrollReset:E,viewTransition:L,...P},O){let{basename:T}=R.useContext(Dt),_=typeof v=="string"&&Zf.test(v),S,z=!1;if(typeof v=="string"&&_&&(S=v,Jf))try{let Pe=new URL(window.location.href),$e=v.startsWith("//")?new URL(Pe.protocol+v):new URL(v),Pt=yn($e.pathname,T);$e.origin===Pe.origin&&Pt!=null?v=Pt+$e.search+$e.hash:z=!0}catch{Mt(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=J0(v,{relative:u}),[V,J,$]=zm(f,P),ne=Am(v,{replace:m,state:y,target:h,preventScrollReset:E,relative:u,viewTransition:L});function b(Pe){a&&a(Pe),Pe.defaultPrevented||ne(Pe)}let Ne=R.createElement("a",{...P,...$,href:S||I,onClick:z||d?a:b,ref:$m(O,J),target:h,"data-discover":!_&&s==="render"?"true":void 0});return V&&!_?R.createElement(R.Fragment,null,Ne,R.createElement(jm,{page:I})):Ne});zi.displayName="Link";var Va=R.forwardRef(function({"aria-current":a="page",caseSensitive:s=!1,className:f="",end:u=!1,style:d,to:m,viewTransition:y,children:h,...v},E){let L=ro(m,{relative:v.relative}),P=Gt(),O=R.useContext(Li),{navigator:T,basename:_}=R.useContext(Dt),S=O!=null&&Hm(L)&&y===!0,z=T.encodeLocation?T.encodeLocation(L).pathname:L.pathname,I=P.pathname,V=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;s||(I=I.toLowerCase(),V=V?V.toLowerCase():null,z=z.toLowerCase()),V&&_&&(V=yn(V,_)||V);const J=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let $=I===z||!u&&I.startsWith(z)&&I.charAt(J)==="/",ne=V!=null&&(V===z||!u&&V.startsWith(z)&&V.charAt(z.length)==="/"),b={isActive:$,isPending:ne,isTransitioning:S},Ne=$?a:void 0,Pe;typeof f=="function"?Pe=f(b):Pe=[f,$?"active":null,ne?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let $e=typeof d=="function"?d(b):d;return R.createElement(zi,{...v,"aria-current":Ne,className:Pe,ref:E,style:$e,to:m,viewTransition:y},typeof h=="function"?h(b):h)});Va.displayName="NavLink";var Mm=R.forwardRef(({discover:o="render",fetcherKey:a,navigate:s,reloadDocument:f,replace:u,state:d,method:m=ki,action:y,onSubmit:h,relative:v,preventScrollReset:E,viewTransition:L,...P},O)=>{let T=Vm(),_=Wm(y,{relative:v}),S=m.toLowerCase()==="get"?"get":"post",z=typeof y=="string"&&Zf.test(y),I=V=>{if(h&&h(V),V.defaultPrevented)return;V.preventDefault();let J=V.nativeEvent.submitter,$=(J==null?void 0:J.getAttribute("formmethod"))||m;T(J||V.currentTarget,{fetcherKey:a,method:$,navigate:s,replace:u,state:d,relative:v,preventScrollReset:E,viewTransition:L})};return R.createElement("form",{ref:O,method:S,action:_,onSubmit:f?h:I,...P,"data-discover":!z&&o==="render"?"true":void 0})});Mm.displayName="Form";function Dm(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qf(o){let a=R.useContext(ir);return Ce(a,Dm(o)),a}function Am(o,{target:a,replace:s,state:f,preventScrollReset:u,relative:d,viewTransition:m}={}){let y=Yf(),h=Gt(),v=ro(o,{relative:d});return R.useCallback(E=>{if(vm(E,a)){E.preventDefault();let L=s!==void 0?s:Jr(h)===Jr(v);y(o,{replace:L,state:f,preventScrollReset:u,relative:d,viewTransition:m})}},[h,y,v,s,f,a,o,u,d,m])}var Um=0,Bm=()=>`__${String(++Um)}__`;function Vm(){let{router:o}=qf("useSubmit"),{basename:a}=R.useContext(Dt),s=sm();return R.useCallback(async(f,u={})=>{let{action:d,method:m,encType:y,formData:h,body:v}=xm(f,a);if(u.navigate===!1){let E=u.fetcherKey||Bm();await o.fetch(E,s,u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||m,formEncType:u.encType||y,flushSync:u.flushSync})}else await o.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||m,formEncType:u.encType||y,replace:u.replace,state:u.state,fromRouteId:s,flushSync:u.flushSync,viewTransition:u.viewTransition})},[o,a,s])}function Wm(o,{relative:a}={}){let{basename:s}=R.useContext(Dt),f=R.useContext(At);Ce(f,"useFormAction must be used inside a RouteContext");let[u]=f.matches.slice(-1),d={...ro(o||".",{relative:a})},m=Gt();if(o==null){d.search=m.search;let y=new URLSearchParams(d.search),h=y.getAll("index");if(h.some(E=>E==="")){y.delete("index"),h.filter(L=>L).forEach(L=>y.append("index",L));let E=y.toString();d.search=E?`?${E}`:""}}return(!o||o===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:Xt([s,d.pathname])),Jr(d)}function Hm(o,a={}){let s=R.useContext(Wf);Ce(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=qf("useViewTransitionState"),u=ro(o,{relative:a.relative});if(!s.isTransitioning)return!1;let d=yn(s.currentLocation.pathname,f)||s.currentLocation.pathname,m=yn(s.nextLocation.pathname,f)||s.nextLocation.pathname;return Ri(u.pathname,m)!=null||Ri(u.pathname,d)!=null}new TextEncoder;var ja={exports:{}},nt={},Oa={exports:{}},Ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function Qm(){return hf||(hf=1,function(o){function a(W,ee){var Y=W.length;W.push(ee);e:for(;0<Y;){var x=Y-1>>>1,M=W[x];if(0<u(M,ee))W[x]=ee,W[Y]=M,Y=x;else break e}}function s(W){return W.length===0?null:W[0]}function f(W){if(W.length===0)return null;var ee=W[0],Y=W.pop();if(Y!==ee){W[0]=Y;e:for(var x=0,M=W.length,re=M>>>1;x<re;){var ie=2*(x+1)-1,ae=W[ie],se=ie+1,ye=W[se];if(0>u(ae,Y))se<M&&0>u(ye,ae)?(W[x]=ye,W[se]=Y,x=se):(W[x]=ae,W[ie]=Y,x=ie);else if(se<M&&0>u(ye,Y))W[x]=ye,W[se]=Y,x=se;else break e}}return ee}function u(W,ee){var Y=W.sortIndex-ee.sortIndex;return Y!==0?Y:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();o.unstable_now=function(){return m.now()-y}}var h=[],v=[],E=1,L=null,P=3,O=!1,T=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(W){for(var ee=s(v);ee!==null;){if(ee.callback===null)f(v);else if(ee.startTime<=W)f(v),ee.sortIndex=ee.expirationTime,a(h,ee);else break;ee=s(v)}}function J(W){if(_=!1,V(W),!T)if(s(h)!==null)T=!0,Je($);else{var ee=s(v);ee!==null&&_e(J,ee.startTime-W)}}function $(W,ee){T=!1,_&&(_=!1,z(Ne),Ne=-1),O=!0;var Y=P;try{for(V(ee),L=s(h);L!==null&&(!(L.expirationTime>ee)||W&&!Pt());){var x=L.callback;if(typeof x=="function"){L.callback=null,P=L.priorityLevel;var M=x(L.expirationTime<=ee);ee=o.unstable_now(),typeof M=="function"?L.callback=M:L===s(h)&&f(h),V(ee)}else f(h);L=s(h)}if(L!==null)var re=!0;else{var ie=s(v);ie!==null&&_e(J,ie.startTime-ee),re=!1}return re}finally{L=null,P=Y,O=!1}}var ne=!1,b=null,Ne=-1,Pe=5,$e=-1;function Pt(){return!(o.unstable_now()-$e<Pe)}function _t(){if(b!==null){var W=o.unstable_now();$e=W;var ee=!0;try{ee=b(!0,W)}finally{ee?ot():(ne=!1,b=null)}}else ne=!1}var ot;if(typeof I=="function")ot=function(){I(_t)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,Rt=vt.port2;vt.port1.onmessage=_t,ot=function(){Rt.postMessage(null)}}else ot=function(){S(_t,0)};function Je(W){b=W,ne||(ne=!0,ot())}function _e(W,ee){Ne=S(function(){W(o.unstable_now())},ee)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){T||O||(T=!0,Je($))},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pe=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return P},o.unstable_getFirstCallbackNode=function(){return s(h)},o.unstable_next=function(W){switch(P){case 1:case 2:case 3:var ee=3;break;default:ee=P}var Y=P;P=ee;try{return W()}finally{P=Y}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=P;P=W;try{return ee()}finally{P=Y}},o.unstable_scheduleCallback=function(W,ee,Y){var x=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?x+Y:x):Y=x,W){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Y+M,W={id:E++,callback:ee,priorityLevel:W,startTime:Y,expirationTime:M,sortIndex:-1},Y>x?(W.sortIndex=Y,a(v,W),s(h)===null&&W===s(v)&&(_?(z(Ne),Ne=-1):_=!0,_e(J,Y-x))):(W.sortIndex=M,a(h,W),T||O||(T=!0,Je($))),W},o.unstable_shouldYield=Pt,o.unstable_wrapCallback=function(W){var ee=P;return function(){var Y=P;P=ee;try{return W.apply(this,arguments)}finally{P=Y}}}}(Ia)),Ia}var yf;function Ym(){return yf||(yf=1,Oa.exports=Qm()),Oa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function Km(){if(vf)return nt;vf=1;var o=Ga(),a=Ym();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,u={};function d(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(u[e]=t,e=0;e<t.length;e++)f.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},L={};function P(e){return h.call(L,e)?!0:h.call(E,e)?!1:v.test(e)?L[e]=!0:(E[e]=!0,!1)}function O(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,n,r){if(t===null||typeof t>"u"||O(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _(e,t,n,r,i,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new _(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(z,I);S[t]=new _(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(z,I);S[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(z,I);S[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function V(e,t,n,r){var i=S.hasOwnProperty(t)?S[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,n,i,r)&&(n=null),r||i===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),ne=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Pe=Symbol.for("react.profiler"),$e=Symbol.for("react.provider"),Pt=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),W=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,x;function M(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var re=!1;function ie(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var r=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){r=N}e.call(t.prototype)}else{try{throw Error()}catch(N){r=N}e()}}catch(N){if(N&&r&&typeof N.stack=="string"){for(var i=N.stack.split(`
`),l=r.stack.split(`
`),c=i.length-1,p=l.length-1;1<=c&&0<=p&&i[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(i[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||i[c]!==l[p]){var g=`
`+i[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=p);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function ae(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case ne:return"Portal";case Pe:return"Profiler";case Ne:return"StrictMode";case ot:return"Suspense";case vt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pt:return(e.displayName||"Context")+".Consumer";case $e:return(e._context.displayName||"Context")+".Provider";case _t:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rt:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function it(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function io(e){e._valueTracker||(e._valueTracker=it(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $i(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cs(e,t){t=t.checked,t!=null&&V(e,"checked",t,!1)}function Fi(e,t){cs(e,t);var n=me(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mi(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mi(e,t,n){(t!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(ar(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function ps(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function gs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(kd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,jn=null,On=null;function ws(e){if(e=zr(e)){if(typeof Hi!="function")throw Error(s(280));var t=e.stateNode;t&&(t=zo(t),Hi(e.stateNode,e.type,t))}}function xs(e){jn?On?On.push(e):On=[e]:jn=e}function Ss(){if(jn){var e=jn,t=On;if(On=jn=null,ws(e),t)for(e=0;e<t.length;e++)ws(t[e])}}function ks(e,t){return e(t)}function Es(){}var Qi=!1;function Cs(e,t,n){if(Qi)return e(t,n);Qi=!0;try{return ks(e,t,n)}finally{Qi=!1,(jn!==null||On!==null)&&(Es(),Ss())}}function cr(e,t){var n=e.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Yi=!1;if(y)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Yi=!1}function Ed(e,t,n,r,i,l,c,p,g){var N=Array.prototype.slice.call(arguments,3);try{t.apply(n,N)}catch(D){this.onError(D)}}var dr=!1,so=null,uo=!1,Ki=null,Cd={onError:function(e){dr=!0,so=e}};function Pd(e,t,n,r,i,l,c,p,g){dr=!1,so=null,Ed.apply(Cd,arguments)}function _d(e,t,n,r,i,l,c,p,g){if(Pd.apply(this,arguments),dr){if(dr){var N=so;dr=!1,so=null}else throw Error(s(198));uo||(uo=!0,Ki=N)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ps(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _s(e){if(vn(e)!==e)throw Error(s(188))}function Rd(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return _s(i),e;if(l===r)return _s(i),t;l=l.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=l;else{for(var c=!1,p=i.child;p;){if(p===n){c=!0,n=i,r=l;break}if(p===r){c=!0,r=i,n=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===n){c=!0,n=l,r=i;break}if(p===r){c=!0,r=l,n=i;break}p=p.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Rs(e){return e=Rd(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ns(e);if(t!==null)return t;e=e.sibling}return null}var Ls=a.unstable_scheduleCallback,Ts=a.unstable_cancelCallback,Nd=a.unstable_shouldYield,Ld=a.unstable_requestPaint,Le=a.unstable_now,Td=a.unstable_getCurrentPriorityLevel,Xi=a.unstable_ImmediatePriority,zs=a.unstable_UserBlockingPriority,co=a.unstable_NormalPriority,zd=a.unstable_LowPriority,js=a.unstable_IdlePriority,fo=null,Nt=null;function jd(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:$d,Od=Math.log,Id=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(Od(e)/Id|0)|0}var po=64,mo=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~i;p!==0?r=pr(p):(l&=c,l!==0&&(r=pr(l)))}else c=n&~i,c!==0?r=pr(c):l!==0&&(r=pr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-gt(l),p=1<<c,g=i[c];g===-1?(!(p&n)||p&r)&&(i[c]=Fd(p,t)):g<=t&&(e.expiredLanes|=p),l&=~p}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function Ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Dd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $s,qi,Fs,Ms,Ds,bi=!1,yo=[],Jt=null,Zt=null,qt=null,hr=new Map,yr=new Map,bt=[],Ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function vr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=zr(t),t!==null&&qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ud(e,t,n,r,i){switch(t){case"focusin":return Jt=vr(Jt,e,t,n,r,i),!0;case"dragenter":return Zt=vr(Zt,e,t,n,r,i),!0;case"mouseover":return qt=vr(qt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return hr.set(l,vr(hr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,yr.set(l,vr(yr.get(l)||null,e,t,n,r,i)),!0}return!1}function Us(e){var t=gn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ps(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Fs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vi=r,n.target.dispatchEvent(r),Vi=null}else return t=zr(n),t!==null&&qi(t),e.blockedOn=n,!1;t.shift()}return!0}function Bs(e,t,n){vo(e)&&n.delete(t)}function Bd(){bi=!1,Jt!==null&&vo(Jt)&&(Jt=null),Zt!==null&&vo(Zt)&&(Zt=null),qt!==null&&vo(qt)&&(qt=null),hr.forEach(Bs),yr.forEach(Bs)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,bi||(bi=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bd)))}function wr(e){function t(i){return gr(i,e)}if(0<yo.length){gr(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&gr(Jt,e),Zt!==null&&gr(Zt,e),qt!==null&&gr(qt,e),hr.forEach(t),yr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Us(n),n.blockedOn===null&&bt.shift()}var In=J.ReactCurrentBatchConfig,go=!0;function Vd(e,t,n,r){var i=he,l=In.transition;In.transition=null;try{he=1,el(e,t,n,r)}finally{he=i,In.transition=l}}function Wd(e,t,n,r){var i=he,l=In.transition;In.transition=null;try{he=4,el(e,t,n,r)}finally{he=i,In.transition=l}}function el(e,t,n,r){if(go){var i=tl(e,t,n,r);if(i===null)gl(e,t,r,wo,n),As(e,r);else if(Ud(i,e,t,n,r))r.stopPropagation();else if(As(e,r),t&4&&-1<Ad.indexOf(e)){for(;i!==null;){var l=zr(i);if(l!==null&&$s(l),l=tl(e,t,n,r),l===null&&gl(e,t,r,wo,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var wo=null;function tl(e,t,n,r){if(wo=null,e=Wi(r),e=gn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ps(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case Xi:return 1;case zs:return 4;case co:case zd:return 16;case js:return 536870912;default:return 16}default:return 16}}var en=null,nl=null,xo=null;function Ws(){if(xo)return xo;var e,t=nl,n=t.length,r,i="value"in en?en.value:en.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===i[l-r];r++);return xo=i.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Hs(){return!1}function lt(e){function t(n,r,i,l,c){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ko:Hs,this.isPropagationStopped=Hs,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=lt($n),xr=Y({},$n,{view:0,detail:0}),Hd=lt(xr),ol,il,Sr,Eo=Y({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(ol=e.screenX-Sr.screenX,il=e.screenY-Sr.screenY):il=ol=0,Sr=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:il}}),Qs=lt(Eo),Qd=Y({},Eo,{dataTransfer:0}),Yd=lt(Qd),Kd=Y({},xr,{relatedTarget:0}),ll=lt(Kd),Xd=Y({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=lt(Xd),Jd=Y({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=lt(Jd),qd=Y({},$n,{data:0}),Ys=lt(qd),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tp[e])?!!t[e]:!1}function al(){return np}var rp=Y({},xr,{key:function(e){if(e.key){var t=bd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),op=lt(rp),ip=Y({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=lt(ip),lp=Y({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),ap=lt(lp),sp=Y({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),up=lt(sp),cp=Y({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fp=lt(cp),dp=[9,13,27,32],sl=y&&"CompositionEvent"in window,kr=null;y&&"documentMode"in document&&(kr=document.documentMode);var pp=y&&"TextEvent"in window&&!kr,Xs=y&&(!sl||kr&&8<kr&&11>=kr),Gs=" ",Js=!1;function Zs(e,t){switch(e){case"keyup":return dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function mp(e,t){switch(e){case"compositionend":return qs(t);case"keypress":return t.which!==32?null:(Js=!0,Gs);case"textInput":return e=t.data,e===Gs&&Js?null:e;default:return null}}function hp(e,t){if(Fn)return e==="compositionend"||!sl&&Zs(e,t)?(e=Ws(),xo=nl=en=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yp[e.type]:t==="textarea"}function eu(e,t,n,r){xs(r),t=No(t,"onChange"),0<t.length&&(n=new rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Cr=null;function vp(e){gu(e,0)}function Co(e){var t=Bn(e);if(ss(t))return e}function gp(e,t){if(e==="change")return t}var tu=!1;if(y){var ul;if(y){var cl="oninput"in document;if(!cl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),cl=typeof nu.oninput=="function"}ul=cl}else ul=!1;tu=ul&&(!document.documentMode||9<document.documentMode)}function ru(){Er&&(Er.detachEvent("onpropertychange",ou),Cr=Er=null)}function ou(e){if(e.propertyName==="value"&&Co(Cr)){var t=[];eu(t,Cr,e,Wi(e)),Cs(vp,t)}}function wp(e,t,n){e==="focusin"?(ru(),Er=t,Cr=n,Er.attachEvent("onpropertychange",ou)):e==="focusout"&&ru()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Cr)}function Sp(e,t){if(e==="click")return Co(t)}function kp(e,t){if(e==="input"||e==="change")return Co(t)}function Ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Ep;function Pr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!h.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function su(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lo(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cp(e){var t=su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&au(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=lu(n,l);var c=lu(n,r);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pp=y&&"documentMode"in document&&11>=document.documentMode,Mn=null,dl=null,_r=null,pl=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pl||Mn==null||Mn!==lo(r)||(r=Mn,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Pr(_r,r)||(_r=r,r=No(dl,"onSelect"),0<r.length&&(t=new rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},ml={},cu={};y&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function _o(e){if(ml[e])return ml[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cu)return ml[e]=t[n];return e}var fu=_o("animationend"),du=_o("animationiteration"),pu=_o("animationstart"),mu=_o("transitionend"),hu=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){hu.set(e,t),d(t,[e])}for(var hl=0;hl<yu.length;hl++){var yl=yu[hl],_p=yl.toLowerCase(),Rp=yl[0].toUpperCase()+yl.slice(1);tn(_p,"on"+Rp)}tn(fu,"onAnimationEnd"),tn(du,"onAnimationIteration"),tn(pu,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(mu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function gu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var p=r[c],g=p.instance,N=p.currentTarget;if(p=p.listener,g!==l&&i.isPropagationStopped())break e;vu(i,p,N),l=g}else for(c=0;c<r.length;c++){if(p=r[c],g=p.instance,N=p.currentTarget,p=p.listener,g!==l&&i.isPropagationStopped())break e;vu(i,p,N),l=g}}}if(uo)throw e=Ki,uo=!1,Ki=null,e}function ge(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(wu(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),wu(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[Ro]){e[Ro]=!0,f.forEach(function(n){n!=="selectionchange"&&(Np.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,vl("selectionchange",!1,t))}}function wu(e,t,n,r){switch(Vs(t)){case 1:var i=Vd;break;case 4:i=Wd;break;default:i=el}n=i.bind(null,t,n,e),i=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(c===4)for(c=r.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;c=c.return}for(;p!==null;){if(c=gn(p),c===null)return;if(g=c.tag,g===5||g===6){r=l=c;continue e}p=p.parentNode}}r=r.return}Cs(function(){var N=l,D=Wi(n),A=[];e:{var F=hu.get(e);if(F!==void 0){var H=rl,K=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":H=op;break;case"focusin":K="focus",H=ll;break;case"focusout":K="blur",H=ll;break;case"beforeblur":case"afterblur":H=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=ap;break;case fu:case du:case pu:H=Gd;break;case mu:H=up;break;case"scroll":H=Hd;break;case"wheel":H=fp;break;case"copy":case"cut":case"paste":H=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Ks}var X=(t&4)!==0,Te=!X&&e==="scroll",k=X?F!==null?F+"Capture":null:F;X=[];for(var w=N,C;w!==null;){C=w;var U=C.stateNode;if(C.tag===5&&U!==null&&(C=U,k!==null&&(U=cr(w,k),U!=null&&X.push(Lr(w,U,C)))),Te)break;w=w.return}0<X.length&&(F=new H(F,K,null,n,D),A.push({event:F,listeners:X}))}}if(!(t&7)){e:{if(F=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",F&&n!==Vi&&(K=n.relatedTarget||n.fromElement)&&(gn(K)||K[Ut]))break e;if((H||F)&&(F=D.window===D?D:(F=D.ownerDocument)?F.defaultView||F.parentWindow:window,H?(K=n.relatedTarget||n.toElement,H=N,K=K?gn(K):null,K!==null&&(Te=vn(K),K!==Te||K.tag!==5&&K.tag!==6)&&(K=null)):(H=null,K=N),H!==K)){if(X=Qs,U="onMouseLeave",k="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(X=Ks,U="onPointerLeave",k="onPointerEnter",w="pointer"),Te=H==null?F:Bn(H),C=K==null?F:Bn(K),F=new X(U,w+"leave",H,n,D),F.target=Te,F.relatedTarget=C,U=null,gn(D)===N&&(X=new X(k,w+"enter",K,n,D),X.target=C,X.relatedTarget=Te,U=X),Te=U,H&&K)t:{for(X=H,k=K,w=0,C=X;C;C=An(C))w++;for(C=0,U=k;U;U=An(U))C++;for(;0<w-C;)X=An(X),w--;for(;0<C-w;)k=An(k),C--;for(;w--;){if(X===k||k!==null&&X===k.alternate)break t;X=An(X),k=An(k)}X=null}else X=null;H!==null&&xu(A,F,H,X,!1),K!==null&&Te!==null&&xu(A,Te,K,X,!0)}}e:{if(F=N?Bn(N):window,H=F.nodeName&&F.nodeName.toLowerCase(),H==="select"||H==="input"&&F.type==="file")var G=gp;else if(bs(F))if(tu)G=kp;else{G=xp;var Z=wp}else(H=F.nodeName)&&H.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(G=Sp);if(G&&(G=G(e,N))){eu(A,G,n,D);break e}Z&&Z(e,F,N),e==="focusout"&&(Z=F._wrapperState)&&Z.controlled&&F.type==="number"&&Mi(F,"number",F.value)}switch(Z=N?Bn(N):window,e){case"focusin":(bs(Z)||Z.contentEditable==="true")&&(Mn=Z,dl=N,_r=null);break;case"focusout":_r=dl=Mn=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,uu(A,n,D);break;case"selectionchange":if(Pp)break;case"keydown":case"keyup":uu(A,n,D)}var q;if(sl)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Fn?Zs(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Xs&&n.locale!=="ko"&&(Fn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Fn&&(q=Ws()):(en=D,nl="value"in en?en.value:en.textContent,Fn=!0)),Z=No(N,te),0<Z.length&&(te=new Ys(te,e,null,n,D),A.push({event:te,listeners:Z}),q?te.data=q:(q=qs(n),q!==null&&(te.data=q)))),(q=pp?mp(e,n):hp(e,n))&&(N=No(N,"onBeforeInput"),0<N.length&&(D=new Ys("onBeforeInput","beforeinput",null,n,D),A.push({event:D,listeners:N}),D.data=q))}gu(A,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=cr(e,n),l!=null&&r.unshift(Lr(e,l,i)),l=cr(e,t),l!=null&&r.push(Lr(e,l,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,t,n,r,i){for(var l=t._reactName,c=[];n!==null&&n!==r;){var p=n,g=p.alternate,N=p.stateNode;if(g!==null&&g===r)break;p.tag===5&&N!==null&&(p=N,i?(g=cr(n,l),g!=null&&c.unshift(Lr(n,g,p))):i||(g=cr(n,l),g!=null&&c.push(Lr(n,g,p)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Lp=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(Lp,`
`).replace(Tp,"")}function Lo(e,t,n){if(t=Su(t),Su(e)!==t&&n)throw Error(s(425))}function To(){}var wl=null,xl=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,zp=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(Op)}:kl;function Op(e){setTimeout(function(){throw e})}function El(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wr(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Un,Tr="__reactProps$"+Un,Ut="__reactContainer$"+Un,Cl="__reactEvents$"+Un,Ip="__reactListeners$"+Un,$p="__reactHandles$"+Un;function gn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[Lt])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[Lt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function zo(e){return e[Tr]||null}var Pl=[],Vn=-1;function rn(e){return{current:e}}function we(e){0>Vn||(e.current=Pl[Vn],Pl[Vn]=null,Vn--)}function ve(e,t){Vn++,Pl[Vn]=e.current,e.current=t}var on={},We=rn(on),Ze=rn(!1),wn=on;function Wn(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function jo(){we(Ze),we(We)}function Cu(e,t,n){if(We.current!==on)throw Error(s(168));ve(We,t),ve(Ze,n)}function Pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(s(108,ye(e)||"Unknown",i));return Y({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,wn=We.current,ve(We,e),ve(Ze,Ze.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Pu(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,we(Ze),we(We),ve(We,e)):we(Ze),ve(Ze,n)}var Bt=null,Io=!1,_l=!1;function Ru(e){Bt===null?Bt=[e]:Bt.push(e)}function Fp(e){Io=!0,Ru(e)}function ln(){if(!_l&&Bt!==null){_l=!0;var e=0,t=he;try{var n=Bt;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,Io=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),Ls(Xi,ln),i}finally{he=t,_l=!1}}return null}var Hn=[],Qn=0,$o=null,Fo=0,ft=[],dt=0,xn=null,Vt=1,Wt="";function Sn(e,t){Hn[Qn++]=Fo,Hn[Qn++]=$o,$o=e,Fo=t}function Nu(e,t,n){ft[dt++]=Vt,ft[dt++]=Wt,ft[dt++]=xn,xn=e;var r=Vt;e=Wt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var l=32-gt(t)+i;if(30<l){var c=i-i%5;l=(r&(1<<c)-1).toString(32),r>>=c,i-=c,Vt=1<<32-gt(t)+i|n<<i|r,Wt=l+e}else Vt=1<<l|n<<i|r,Wt=e}function Rl(e){e.return!==null&&(Sn(e,1),Nu(e,1,0))}function Nl(e){for(;e===$o;)$o=Hn[--Qn],Hn[Qn]=null,Fo=Hn[--Qn],Hn[Qn]=null;for(;e===xn;)xn=ft[--dt],ft[dt]=null,Wt=ft[--dt],ft[dt]=null,Vt=ft[--dt],ft[dt]=null}var at=null,st=null,Se=!1,xt=null;function Lu(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,st=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Vt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,st=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(Se){var t=st;if(t){var n=t;if(!Tu(e,t)){if(Ll(e))throw Error(s(418));t=nn(n.nextSibling);var r=at;t&&Tu(e,t)?Lu(r,n):(e.flags=e.flags&-4097|2,Se=!1,at=e)}}else{if(Ll(e))throw Error(s(418));e.flags=e.flags&-4097|2,Se=!1,at=e}}}function zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Mo(e){if(e!==at)return!1;if(!Se)return zu(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=st)){if(Ll(e))throw ju(),Error(s(418));for(;t;)Lu(e,t),t=nn(t.nextSibling)}if(zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=at?nn(e.stateNode.nextSibling):null;return!0}function ju(){for(var e=st;e;)e=nn(e.nextSibling)}function Yn(){st=at=null,Se=!1}function zl(e){xt===null?xt=[e]:xt.push(e)}var Mp=J.ReactCurrentBatchConfig;function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var p=i.refs;c===null?delete p[l]:p[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function Iu(e){function t(k,w){if(e){var C=k.deletions;C===null?(k.deletions=[w],k.flags|=16):C.push(w)}}function n(k,w){if(!e)return null;for(;w!==null;)t(k,w),w=w.sibling;return null}function r(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function i(k,w){return k=mn(k,w),k.index=0,k.sibling=null,k}function l(k,w,C){return k.index=C,e?(C=k.alternate,C!==null?(C=C.index,C<w?(k.flags|=2,w):C):(k.flags|=2,w)):(k.flags|=1048576,w)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function p(k,w,C,U){return w===null||w.tag!==6?(w=ka(C,k.mode,U),w.return=k,w):(w=i(w,C),w.return=k,w)}function g(k,w,C,U){var G=C.type;return G===b?D(k,w,C.props.children,U,C.key):w!==null&&(w.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Je&&Ou(G)===w.type)?(U=i(w,C.props),U.ref=jr(k,w,C),U.return=k,U):(U=si(C.type,C.key,C.props,null,k.mode,U),U.ref=jr(k,w,C),U.return=k,U)}function N(k,w,C,U){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=Ea(C,k.mode,U),w.return=k,w):(w=i(w,C.children||[]),w.return=k,w)}function D(k,w,C,U,G){return w===null||w.tag!==7?(w=Ln(C,k.mode,U,G),w.return=k,w):(w=i(w,C),w.return=k,w)}function A(k,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ka(""+w,k.mode,C),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $:return C=si(w.type,w.key,w.props,null,k.mode,C),C.ref=jr(k,null,w),C.return=k,C;case ne:return w=Ea(w,k.mode,C),w.return=k,w;case Je:var U=w._init;return A(k,U(w._payload),C)}if(ar(w)||ee(w))return w=Ln(w,k.mode,C,null),w.return=k,w;Do(k,w)}return null}function F(k,w,C,U){var G=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return G!==null?null:p(k,w,""+C,U);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $:return C.key===G?g(k,w,C,U):null;case ne:return C.key===G?N(k,w,C,U):null;case Je:return G=C._init,F(k,w,G(C._payload),U)}if(ar(C)||ee(C))return G!==null?null:D(k,w,C,U,null);Do(k,C)}return null}function H(k,w,C,U,G){if(typeof U=="string"&&U!==""||typeof U=="number")return k=k.get(C)||null,p(w,k,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case $:return k=k.get(U.key===null?C:U.key)||null,g(w,k,U,G);case ne:return k=k.get(U.key===null?C:U.key)||null,N(w,k,U,G);case Je:var Z=U._init;return H(k,w,C,Z(U._payload),G)}if(ar(U)||ee(U))return k=k.get(C)||null,D(w,k,U,G,null);Do(w,U)}return null}function K(k,w,C,U){for(var G=null,Z=null,q=w,te=w=0,De=null;q!==null&&te<C.length;te++){q.index>te?(De=q,q=null):De=q.sibling;var ue=F(k,q,C[te],U);if(ue===null){q===null&&(q=De);break}e&&q&&ue.alternate===null&&t(k,q),w=l(ue,w,te),Z===null?G=ue:Z.sibling=ue,Z=ue,q=De}if(te===C.length)return n(k,q),Se&&Sn(k,te),G;if(q===null){for(;te<C.length;te++)q=A(k,C[te],U),q!==null&&(w=l(q,w,te),Z===null?G=q:Z.sibling=q,Z=q);return Se&&Sn(k,te),G}for(q=r(k,q);te<C.length;te++)De=H(q,k,te,C[te],U),De!==null&&(e&&De.alternate!==null&&q.delete(De.key===null?te:De.key),w=l(De,w,te),Z===null?G=De:Z.sibling=De,Z=De);return e&&q.forEach(function(hn){return t(k,hn)}),Se&&Sn(k,te),G}function X(k,w,C,U){var G=ee(C);if(typeof G!="function")throw Error(s(150));if(C=G.call(C),C==null)throw Error(s(151));for(var Z=G=null,q=w,te=w=0,De=null,ue=C.next();q!==null&&!ue.done;te++,ue=C.next()){q.index>te?(De=q,q=null):De=q.sibling;var hn=F(k,q,ue.value,U);if(hn===null){q===null&&(q=De);break}e&&q&&hn.alternate===null&&t(k,q),w=l(hn,w,te),Z===null?G=hn:Z.sibling=hn,Z=hn,q=De}if(ue.done)return n(k,q),Se&&Sn(k,te),G;if(q===null){for(;!ue.done;te++,ue=C.next())ue=A(k,ue.value,U),ue!==null&&(w=l(ue,w,te),Z===null?G=ue:Z.sibling=ue,Z=ue);return Se&&Sn(k,te),G}for(q=r(k,q);!ue.done;te++,ue=C.next())ue=H(q,k,te,ue.value,U),ue!==null&&(e&&ue.alternate!==null&&q.delete(ue.key===null?te:ue.key),w=l(ue,w,te),Z===null?G=ue:Z.sibling=ue,Z=ue);return e&&q.forEach(function(y0){return t(k,y0)}),Se&&Sn(k,te),G}function Te(k,w,C,U){if(typeof C=="object"&&C!==null&&C.type===b&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case $:e:{for(var G=C.key,Z=w;Z!==null;){if(Z.key===G){if(G=C.type,G===b){if(Z.tag===7){n(k,Z.sibling),w=i(Z,C.props.children),w.return=k,k=w;break e}}else if(Z.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Je&&Ou(G)===Z.type){n(k,Z.sibling),w=i(Z,C.props),w.ref=jr(k,Z,C),w.return=k,k=w;break e}n(k,Z);break}else t(k,Z);Z=Z.sibling}C.type===b?(w=Ln(C.props.children,k.mode,U,C.key),w.return=k,k=w):(U=si(C.type,C.key,C.props,null,k.mode,U),U.ref=jr(k,w,C),U.return=k,k=U)}return c(k);case ne:e:{for(Z=C.key;w!==null;){if(w.key===Z)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(k,w.sibling),w=i(w,C.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else t(k,w);w=w.sibling}w=Ea(C,k.mode,U),w.return=k,k=w}return c(k);case Je:return Z=C._init,Te(k,w,Z(C._payload),U)}if(ar(C))return K(k,w,C,U);if(ee(C))return X(k,w,C,U);Do(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(k,w.sibling),w=i(w,C),w.return=k,k=w):(n(k,w),w=ka(C,k.mode,U),w.return=k,k=w),c(k)):n(k,w)}return Te}var Kn=Iu(!0),$u=Iu(!1),Ao=rn(null),Uo=null,Xn=null,jl=null;function Ol(){jl=Xn=Uo=null}function Il(e){var t=Ao.current;we(Ao),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){Uo=e,jl=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(jl!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Uo===null)throw Error(s(308));Xn=e,Uo.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var kn=null;function Fl(e){kn===null?kn=[e]:kn.push(e)}function Fu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ht(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function Du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vo(e,t,n,r){var i=e.updateQueue;an=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,N=g.next;g.next=null,c===null?l=N:c.next=N,c=g;var D=e.alternate;D!==null&&(D=D.updateQueue,p=D.lastBaseUpdate,p!==c&&(p===null?D.firstBaseUpdate=N:p.next=N,D.lastBaseUpdate=g))}if(l!==null){var A=i.baseState;c=0,D=N=g=null,p=l;do{var F=p.lane,H=p.eventTime;if((r&F)===F){D!==null&&(D=D.next={eventTime:H,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var K=e,X=p;switch(F=t,H=n,X.tag){case 1:if(K=X.payload,typeof K=="function"){A=K.call(H,A,F);break e}A=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=X.payload,F=typeof K=="function"?K.call(H,A,F):K,F==null)break e;A=Y({},A,F);break e;case 2:an=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,F=i.effects,F===null?i.effects=[p]:F.push(p))}else H={eventTime:H,lane:F,tag:p.tag,payload:p.payload,callback:p.callback,next:null},D===null?(N=D=H,g=A):D=D.next=H,c|=F;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;F=p,p=F.next,F.next=null,i.lastBaseUpdate=F,i.shared.pending=null}}while(!0);if(D===null&&(g=A),i.baseState=g,i.firstBaseUpdate=N,i.lastBaseUpdate=D,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Pn|=c,e.lanes=c,e.memoizedState=A}}function Au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var Or={},Tt=rn(Or),Ir=rn(Or),$r=rn(Or);function En(e){if(e===Or)throw Error(s(174));return e}function Dl(e,t){switch(ve($r,t),ve(Ir,e),ve(Tt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ai(t,e)}we(Tt),ve(Tt,t)}function Jn(){we(Tt),we(Ir),we($r)}function Uu(e){En($r.current);var t=En(Tt.current),n=Ai(t,e.type);t!==n&&(ve(Ir,e),ve(Tt,n))}function Al(e){Ir.current===e&&(we(Tt),we(Ir))}var ke=rn(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Bl(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Ho=J.ReactCurrentDispatcher,Vl=J.ReactCurrentBatchConfig,Cn=0,Ee=null,Oe=null,Fe=null,Qo=!1,Fr=!1,Mr=0,Dp=0;function He(){throw Error(s(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Hl(e,t,n,r,i,l){if(Cn=l,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?Vp:Wp,e=n(r,i),Fr){l=0;do{if(Fr=!1,Mr=0,25<=l)throw Error(s(301));l+=1,Fe=Oe=null,t.updateQueue=null,Ho.current=Hp,e=n(r,i)}while(Fr)}if(Ho.current=Xo,t=Oe!==null&&Oe.next!==null,Cn=0,Fe=Oe=Ee=null,Qo=!1,t)throw Error(s(300));return e}function Ql(){var e=Mr!==0;return Mr=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function mt(){if(Oe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Fe===null?Ee.memoizedState:Fe.next;if(t!==null)Fe=t,Oe=e;else{if(e===null)throw Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Ee.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Dr(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=mt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var p=c=null,g=null,N=l;do{var D=N.lane;if((Cn&D)===D)g!==null&&(g=g.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),r=N.hasEagerState?N.eagerState:e(r,N.action);else{var A={lane:D,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};g===null?(p=g=A,c=r):g=g.next=A,Ee.lanes|=D,Pn|=D}N=N.next}while(N!==null&&N!==l);g===null?c=r:g.next=p,wt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Ee.lanes|=l,Pn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=mt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);wt(l,t.memoizedState)||(be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Bu(){}function Vu(e,t){var n=Ee,r=mt(),i=t(),l=!wt(r.memoizedState,i);if(l&&(r.memoizedState=i,be=!0),r=r.queue,Xl(Qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Ar(9,Hu.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(s(349));Cn&30||Wu(n,t,i)}return i}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hu(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Ku(e)}function Qu(e,t,n){return n(function(){Yu(t)&&Ku(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Ku(e){var t=Ht(e,1);t!==null&&Ct(t,e,1,-1)}function Xu(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bp.bind(null,Ee,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return mt().memoizedState}function Yo(e,t,n,r){var i=zt();Ee.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Ko(e,t,n,r){var i=mt();r=r===void 0?null:r;var l=void 0;if(Oe!==null){var c=Oe.memoizedState;if(l=c.destroy,r!==null&&Wl(r,c.deps)){i.memoizedState=Ar(t,n,l,r);return}}Ee.flags|=e,i.memoizedState=Ar(1|t,n,l,r)}function Ju(e,t){return Yo(8390656,8,e,t)}function Xl(e,t){return Ko(2048,8,e,t)}function Zu(e,t){return Ko(4,2,e,t)}function qu(e,t){return Ko(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ec(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4,4,bu.bind(null,t,e),n)}function Gl(){}function tc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rc(e,t,n){return Cn&21?(wt(n,t)||(n=Os(),Ee.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function Ap(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{he=n,Vl.transition=r}}function oc(){return mt().memoizedState}function Up(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e))lc(t,n);else if(n=Fu(e,t,n,r),n!==null){var i=Ge();Ct(n,e,r,i),ac(n,t,r)}}function Bp(e,t,n){var r=dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))lc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,p=l(c,n);if(i.hasEagerState=!0,i.eagerState=p,wt(p,c)){var g=t.interleaved;g===null?(i.next=i,Fl(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}n=Fu(e,t,i,r),n!==null&&(i=Ge(),Ct(n,e,r,i),ac(n,t,r))}}function ic(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function lc(e,t){Fr=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Xo={readContext:pt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Vp={readContext:pt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Up.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Xu,useDebugValue:Gl,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Xu(!1),t=e[0];return e=Ap.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=zt();if(Se){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Me===null)throw Error(s(349));Cn&30||Wu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ju(Qu.bind(null,r,l,e),[e]),r.flags|=2048,Ar(9,Hu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=zt(),t=Me.identifierPrefix;if(Se){var n=Wt,r=Vt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wp={readContext:pt,useCallback:tc,useContext:pt,useEffect:Xl,useImperativeHandle:ec,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:nc,useReducer:Yl,useRef:Gu,useState:function(){return Yl(Dr)},useDebugValue:Gl,useDeferredValue:function(e){var t=mt();return rc(t,Oe.memoizedState,e)},useTransition:function(){var e=Yl(Dr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Vu,useId:oc,unstable_isNewReconciler:!1},Hp={readContext:pt,useCallback:tc,useContext:pt,useEffect:Xl,useImperativeHandle:ec,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:nc,useReducer:Kl,useRef:Gu,useState:function(){return Kl(Dr)},useDebugValue:Gl,useDeferredValue:function(e){var t=mt();return Oe===null?t.memoizedState=e:rc(t,Oe.memoizedState,e)},useTransition:function(){var e=Kl(Dr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Vu,useId:oc,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=dn(e),l=Qt(r,i);l.payload=t,n!=null&&(l.callback=n),t=sn(e,l,i),t!==null&&(Ct(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=dn(e),l=Qt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=sn(e,l,i),t!==null&&(Ct(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=dn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(Ct(t,e,r,n),Bo(t,e,r))}};function sc(e,t,n,r,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,l):!0}function uc(e,t,n){var r=!1,i=on,l=t.contextType;return typeof l=="object"&&l!==null?l=pt(l):(i=qe(t)?wn:We.current,r=t.contextTypes,l=(r=r!=null)?Wn(e,i):on),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ml(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=pt(l):(l=qe(t)?wn:We.current,i.context=Wn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Jl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Go.enqueueReplaceState(i,i.state,null),Vo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qp=typeof WeakMap=="function"?WeakMap:Map;function fc(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ni||(ni=!0,ma=r),bl(e,t)},n}function dc(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=i0.bind(null,e,t,n),t.then(e,e))}function mc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var Yp=J.ReactCurrentOwner,be=!1;function Xe(e,t,n,r){t.child=e===null?$u(t,null,n,r):Kn(t,e.child,n,r)}function yc(e,t,n,r,i){n=n.render;var l=t.ref;return Gn(t,i),r=Hl(e,t,n,r,l,i),n=Ql(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(Se&&n&&Rl(t),t.flags|=1,Xe(e,t,r,i),t.child)}function vc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Sa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,gc(e,t,l,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(c,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=mn(l,r),e.ref=t.ref,e.return=t,t.child=e}function gc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Pr(l,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return ea(e,t,n,r,i)}function wc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(bn,ut),ut|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(bn,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ve(bn,ut),ut|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ve(bn,ut),ut|=r;return Xe(e,t,i,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,i){var l=qe(n)?wn:We.current;return l=Wn(t,l),Gn(t,i),n=Hl(e,t,n,r,l,i),r=Ql(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(Se&&r&&Rl(t),t.flags|=1,Xe(e,t,n,i),t.child)}function Sc(e,t,n,r,i){if(qe(n)){var l=!0;Oo(t)}else l=!1;if(Gn(t,i),t.stateNode===null)Zo(e,t),uc(t,n,r),Zl(t,n,r,i),r=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var g=c.context,N=n.contextType;typeof N=="object"&&N!==null?N=pt(N):(N=qe(n)?wn:We.current,N=Wn(t,N));var D=n.getDerivedStateFromProps,A=typeof D=="function"||typeof c.getSnapshotBeforeUpdate=="function";A||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||g!==N)&&cc(t,c,r,N),an=!1;var F=t.memoizedState;c.state=F,Vo(t,r,c,i),g=t.memoizedState,p!==r||F!==g||Ze.current||an?(typeof D=="function"&&(Jl(t,n,D,r),g=t.memoizedState),(p=an||sc(t,n,p,r,F,g,N))?(A||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),c.props=r,c.state=g,c.context=N,r=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,Mu(e,t),p=t.memoizedProps,N=t.type===t.elementType?p:St(t.type,p),c.props=N,A=t.pendingProps,F=c.context,g=n.contextType,typeof g=="object"&&g!==null?g=pt(g):(g=qe(n)?wn:We.current,g=Wn(t,g));var H=n.getDerivedStateFromProps;(D=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==A||F!==g)&&cc(t,c,r,g),an=!1,F=t.memoizedState,c.state=F,Vo(t,r,c,i);var K=t.memoizedState;p!==A||F!==K||Ze.current||an?(typeof H=="function"&&(Jl(t,n,H,r),K=t.memoizedState),(N=an||sc(t,n,N,r,F,K,g)||!1)?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,K,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,K,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=K),c.props=r,c.state=K,c.context=g,r=N):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,l,i)}function ta(e,t,n,r,i,l){xc(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return i&&_u(t,n,!1),Yt(e,t,l);r=t.stateNode,Yp.current=t;var p=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Kn(t,e.child,null,l),t.child=Kn(t,null,p,l)):Xe(e,t,p,l),t.memoizedState=r.state,i&&_u(t,n,!0),t.child}function kc(e){var t=e.stateNode;t.pendingContext?Cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cu(e,t.context,!1),Dl(e,t.containerInfo)}function Ec(e,t,n,r,i){return Yn(),zl(i),t.flags|=256,Xe(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cc(e,t,n){var r=t.pendingProps,i=ke.current,l=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(ke,i&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=ui(c,r,0,null),e=Ln(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ra(n),t.memoizedState=na,e):oa(t,c));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Kp(e,t,c,r,p,i,n);if(l){l=r.fallback,c=t.mode,i=e.child,p=i.sibling;var g={mode:"hidden",children:r.children};return!(c&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=mn(i,g),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?l=mn(p,l):(l=Ln(l,c,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?ra(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=na,r}return l=e.child,e=l.sibling,r=mn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oa(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,n,r){return r!==null&&zl(r),Kn(t,e.child,null,n),e=oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kp(e,t,n,r,i,l,c){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(s(422))),Jo(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=ui({mode:"visible",children:r.children},i,0,null),l=Ln(l,i,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Kn(t,e.child,null,c),t.child.memoizedState=ra(c),t.memoizedState=na,l);if(!(t.mode&1))return Jo(e,t,c,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(s(419)),r=ql(l,r,void 0),Jo(e,t,c,r)}if(p=(c&e.childLanes)!==0,be||p){if(r=Me,r!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|c)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ht(e,i),Ct(r,e,i,-1))}return xa(),r=ql(Error(s(421))),Jo(e,t,c,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l0.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,st=nn(i.nextSibling),at=t,Se=!0,xt=null,e!==null&&(ft[dt++]=Vt,ft[dt++]=Wt,ft[dt++]=xn,Vt=e.id,Wt=e.overflow,xn=t),t=oa(t,r.children),t.flags|=4096,t)}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function ia(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function _c(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Xe(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ia(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ia(t,!0,n,null,l);break;case"together":ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xp(e,t,n){switch(t.tag){case 3:kc(t),Yn();break;case 5:Uu(t);break;case 1:qe(t.type)&&Oo(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?Cc(e,t,n):(ve(ke,ke.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,wc(e,t,n)}return Yt(e,t,n)}var Rc,la,Nc,Lc;Rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},la=function(){},Nc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,En(Tt.current);var l=null;switch(n){case"input":i=$i(e,i),r=$i(e,r),l=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":i=Di(e,i),r=Di(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=To)}Ui(n,r);var c;n=null;for(N in i)if(!r.hasOwnProperty(N)&&i.hasOwnProperty(N)&&i[N]!=null)if(N==="style"){var p=i[N];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(u.hasOwnProperty(N)?l||(l=[]):(l=l||[]).push(N,null));for(N in r){var g=r[N];if(p=i!=null?i[N]:void 0,r.hasOwnProperty(N)&&g!==p&&(g!=null||p!=null))if(N==="style")if(p){for(c in p)!p.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in g)g.hasOwnProperty(c)&&p[c]!==g[c]&&(n||(n={}),n[c]=g[c])}else n||(l||(l=[]),l.push(N,n)),n=g;else N==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(l=l||[]).push(N,g)):N==="children"?typeof g!="string"&&typeof g!="number"||(l=l||[]).push(N,""+g):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(u.hasOwnProperty(N)?(g!=null&&N==="onScroll"&&ge("scroll",e),l||p===g||(l=[])):(l=l||[]).push(N,g))}n&&(l=l||[]).push("style",n);var N=l;(t.updateQueue=N)&&(t.flags|=4)}},Lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gp(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return qe(t.type)&&jo(),Qe(t),null;case 3:return r=t.stateNode,Jn(),we(Ze),we(We),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(va(xt),xt=null))),la(e,t),Qe(t),null;case 5:Al(t);var i=En($r.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Qe(t),null}if(e=En(Tt.current),Mo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Lt]=t,r[Tr]=l,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)ge(Rr[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":us(r,l),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ge("invalid",r);break;case"textarea":ds(r,l),ge("invalid",r)}Ui(n,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&Lo(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&Lo(r.textContent,p,e),i=["children",""+p]):u.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&ge("scroll",r)}switch(n){case"input":io(r),fs(r,l,!0);break;case"textarea":io(r),ms(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=To)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Lt]=t,e[Tr]=r,Rc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Bi(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)ge(Rr[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":us(e,r),i=$i(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),ge("invalid",e);break;case"textarea":ds(e,r),i=Di(e,r),ge("invalid",e);break;default:i=r}Ui(n,i),p=i;for(l in p)if(p.hasOwnProperty(l)){var g=p[l];l==="style"?gs(e,g):l==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&ys(e,g)):l==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&sr(e,g):typeof g=="number"&&sr(e,""+g):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(u.hasOwnProperty(l)?g!=null&&l==="onScroll"&&ge("scroll",e):g!=null&&V(e,l,g,c))}switch(n){case"input":io(e),fs(e,r,!1);break;case"textarea":io(e),ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?zn(e,!!r.multiple,l,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)Lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=En($r.current),En(Tt.current),Mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(l=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Qe(t),null;case 13:if(we(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&st!==null&&t.mode&1&&!(t.flags&128))ju(),Yn(),t.flags|=98560,l=!1;else if(l=Mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Lt]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),l=!1}else xt!==null&&(va(xt),xt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Ie===0&&(Ie=3):xa())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Jn(),la(e,t),e===null&&Nr(t.stateNode.containerInfo),Qe(t),null;case 10:return Il(t.type._context),Qe(t),null;case 17:return qe(t.type)&&jo(),Qe(t),null;case 19:if(we(ke),l=t.memoizedState,l===null)return Qe(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)Ur(l,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Wo(e),c!==null){for(t.flags|=128,Ur(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),t.child}e=e.sibling}l.tail!==null&&Le()>er&&(t.flags|=128,r=!0,Ur(l,!1),t.lanes=4194304)}else{if(!r)if(e=Wo(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Se)return Qe(t),null}else 2*Le()-l.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,Ur(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Le(),t.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Jp(e,t){switch(Nl(t),t.tag){case 1:return qe(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),we(Ze),we(We),Bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Al(t),null;case 13:if(we(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(ke),null;case 4:return Jn(),null;case 10:return Il(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var qo=!1,Ye=!1,Zp=typeof WeakSet=="function"?WeakSet:Set,Q=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function aa(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Tc=!1;function qp(e,t){if(wl=go,e=su(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,p=-1,g=-1,N=0,D=0,A=e,F=null;t:for(;;){for(var H;A!==n||i!==0&&A.nodeType!==3||(p=c+i),A!==l||r!==0&&A.nodeType!==3||(g=c+r),A.nodeType===3&&(c+=A.nodeValue.length),(H=A.firstChild)!==null;)F=A,A=H;for(;;){if(A===e)break t;if(F===n&&++N===i&&(p=c),F===l&&++D===r&&(g=c),(H=A.nextSibling)!==null)break;A=F,F=A.parentNode}A=H}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},go=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var K=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var X=K.memoizedProps,Te=K.memoizedState,k=t.stateNode,w=k.getSnapshotBeforeUpdate(t.elementType===t.type?X:St(t.type,X),Te);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(U){Re(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return K=Tc,Tc=!1,K}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&aa(t,n,l)}i=i.next}while(i!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zc(e){var t=e.alternate;t!==null&&(e.alternate=null,zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[Tr],delete t[Cl],delete t[Ip],delete t[$p])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=To));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var Ue=null,kt=!1;function un(e,t,n){for(n=n.child;n!==null;)Ic(e,t,n),n=n.sibling}function Ic(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(fo,n)}catch{}switch(n.tag){case 5:Ye||qn(n,t);case 6:var r=Ue,i=kt;Ue=null,un(e,t,n),Ue=r,kt=i,Ue!==null&&(kt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(kt?(e=Ue,n=n.stateNode,e.nodeType===8?El(e.parentNode,n):e.nodeType===1&&El(e,n),wr(e)):El(Ue,n.stateNode));break;case 4:r=Ue,i=kt,Ue=n.stateNode.containerInfo,kt=!0,un(e,t,n),Ue=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&aa(n,t,c),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Ye&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Re(n,t,p)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,un(e,t,n),Ye=r):un(e,t,n);break;default:un(e,t,n)}}function $c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zp),t.forEach(function(r){var i=a0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:Ue=p.stateNode,kt=!1;break e;case 3:Ue=p.stateNode.containerInfo,kt=!0;break e;case 4:Ue=p.stateNode.containerInfo,kt=!0;break e}p=p.return}if(Ue===null)throw Error(s(160));Ic(l,c,i),Ue=null,kt=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(N){Re(i,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),jt(e),r&4){try{Br(3,e,e.return),bo(3,e)}catch(X){Re(e,e.return,X)}try{Br(5,e,e.return)}catch(X){Re(e,e.return,X)}}break;case 1:Et(t,e),jt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Et(t,e),jt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(X){Re(e,e.return,X)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&cs(i,l),Bi(p,c);var N=Bi(p,l);for(c=0;c<g.length;c+=2){var D=g[c],A=g[c+1];D==="style"?gs(i,A):D==="dangerouslySetInnerHTML"?ys(i,A):D==="children"?sr(i,A):V(i,D,A,N)}switch(p){case"input":Fi(i,l);break;case"textarea":ps(i,l);break;case"select":var F=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var H=l.value;H!=null?zn(i,!!l.multiple,H,!1):F!==!!l.multiple&&(l.defaultValue!=null?zn(i,!!l.multiple,l.defaultValue,!0):zn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Tr]=l}catch(X){Re(e,e.return,X)}}break;case 6:if(Et(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(X){Re(e,e.return,X)}}break;case 3:if(Et(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(X){Re(e,e.return,X)}break;case 4:Et(t,e),jt(e);break;case 13:Et(t,e),jt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(pa=Le())),r&4&&$c(e);break;case 22:if(D=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(N=Ye)||D,Et(t,e),Ye=N):Et(t,e),jt(e),r&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!D&&e.mode&1)for(Q=e,D=e.child;D!==null;){for(A=Q=D;Q!==null;){switch(F=Q,H=F.child,F.tag){case 0:case 11:case 14:case 15:Br(4,F,F.return);break;case 1:qn(F,F.return);var K=F.stateNode;if(typeof K.componentWillUnmount=="function"){r=F,n=F.return;try{t=r,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(X){Re(r,n,X)}}break;case 5:qn(F,F.return);break;case 22:if(F.memoizedState!==null){Ac(A);continue}}H!==null?(H.return=F,Q=H):Ac(A)}D=D.sibling}e:for(D=null,A=e;;){if(A.tag===5){if(D===null){D=A;try{i=A.stateNode,N?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=A.stateNode,g=A.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=vs("display",c))}catch(X){Re(e,e.return,X)}}}else if(A.tag===6){if(D===null)try{A.stateNode.nodeValue=N?"":A.memoizedProps}catch(X){Re(e,e.return,X)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;D===A&&(D=null),A=A.return}D===A&&(D=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Et(t,e),jt(e),r&4&&$c(e);break;case 21:break;default:Et(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jc(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sr(i,""),r.flags&=-33);var l=Oc(e);ca(e,l,i);break;case 3:case 4:var c=r.stateNode.containerInfo,p=Oc(e);ua(e,p,c);break;default:throw Error(s(161))}}catch(g){Re(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e,t,n){Q=e,Mc(e)}function Mc(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,l=i.child;if(i.tag===22&&r){var c=i.memoizedState!==null||qo;if(!c){var p=i.alternate,g=p!==null&&p.memoizedState!==null||Ye;p=qo;var N=Ye;if(qo=c,(Ye=g)&&!N)for(Q=i;Q!==null;)c=Q,g=c.child,c.tag===22&&c.memoizedState!==null?Uc(i):g!==null?(g.return=c,Q=g):Uc(i);for(;l!==null;)Q=l,Mc(l),l=l.sibling;Q=i,qo=p,Ye=N}Dc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,Q=l):Dc(e)}}function Dc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Au(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Au(t,c,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var D=N.memoizedState;if(D!==null){var A=D.dehydrated;A!==null&&wr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ye||t.flags&512&&sa(t)}catch(F){Re(t,t.return,F)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ac(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Uc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(g){Re(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(g){Re(t,i,g)}}var l=t.return;try{sa(t)}catch(g){Re(t,l,g)}break;case 5:var c=t.return;try{sa(t)}catch(g){Re(t,c,g)}}}catch(g){Re(t,t.return,g)}if(t===e){Q=null;break}var p=t.sibling;if(p!==null){p.return=t.return,Q=p;break}Q=t.return}}var e0=Math.ceil,ei=J.ReactCurrentDispatcher,fa=J.ReactCurrentOwner,ht=J.ReactCurrentBatchConfig,le=0,Me=null,ze=null,Be=0,ut=0,bn=rn(0),Ie=0,Vr=null,Pn=0,ti=0,da=0,Wr=null,et=null,pa=0,er=1/0,Kt=null,ni=!1,ma=null,cn=null,ri=!1,fn=null,oi=0,Hr=0,ha=null,ii=-1,li=0;function Ge(){return le&6?Le():ii!==-1?ii:ii=Le()}function dn(e){return e.mode&1?le&2&&Be!==0?Be&-Be:Mp.transition!==null?(li===0&&(li=Os()),li):(e=he,e!==0||(e=window.event,e=e===void 0?16:Vs(e.type)),e):1}function Ct(e,t,n,r){if(50<Hr)throw Hr=0,ha=null,Error(s(185));mr(e,n,r),(!(le&2)||e!==Me)&&(e===Me&&(!(le&2)&&(ti|=n),Ie===4&&pn(e,Be)),tt(e,r),n===1&&le===0&&!(t.mode&1)&&(er=Le()+500,Io&&ln()))}function tt(e,t){var n=e.callbackNode;Md(e,t);var r=ho(e,e===Me?Be:0);if(r===0)n!==null&&Ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ts(n),t===1)e.tag===0?Fp(Vc.bind(null,e)):Ru(Vc.bind(null,e)),jp(function(){!(le&6)&&ln()}),n=null;else{switch(Is(r)){case 1:n=Xi;break;case 4:n=zs;break;case 16:n=co;break;case 536870912:n=js;break;default:n=co}n=Jc(n,Bc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bc(e,t){if(ii=-1,li=0,le&6)throw Error(s(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=ho(e,e===Me?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ai(e,r);else{t=r;var i=le;le|=2;var l=Hc();(Me!==e||Be!==t)&&(Kt=null,er=Le()+500,Rn(e,t));do try{r0();break}catch(p){Wc(e,p)}while(!0);Ol(),ei.current=l,le=i,ze!==null?t=0:(Me=null,Be=0,t=Ie)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(r=i,t=ya(e,i))),t===1)throw n=Vr,Rn(e,0),pn(e,r),tt(e,Le()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!t0(i)&&(t=ai(e,r),t===2&&(l=Gi(e),l!==0&&(r=l,t=ya(e,l))),t===1))throw n=Vr,Rn(e,0),pn(e,r),tt(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Nn(e,et,Kt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=pa+500-Le(),10<t)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(Nn.bind(null,e,et,Kt),t);break}Nn(e,et,Kt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var c=31-gt(r);l=1<<c,c=t[c],c>i&&(i=c),r&=~l}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e0(r/1960))-r,10<r){e.timeoutHandle=kl(Nn.bind(null,e,et,Kt),r);break}Nn(e,et,Kt);break;case 5:Nn(e,et,Kt);break;default:throw Error(s(329))}}}return tt(e,Le()),e.callbackNode===n?Bc.bind(null,e):null}function ya(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=ai(e,t),e!==2&&(t=et,et=n,t!==null&&va(t)),e}function va(e){et===null?et=e:et.push.apply(et,e)}function t0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!wt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~da,t&=~ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Vc(e){if(le&6)throw Error(s(327));tr();var t=ho(e,0);if(!(t&1))return tt(e,Le()),null;var n=ai(e,t);if(e.tag!==0&&n===2){var r=Gi(e);r!==0&&(t=r,n=ya(e,r))}if(n===1)throw n=Vr,Rn(e,0),pn(e,t),tt(e,Le()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,et,Kt),tt(e,Le()),null}function ga(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(er=Le()+500,Io&&ln())}}function _n(e){fn!==null&&fn.tag===0&&!(le&6)&&tr();var t=le;le|=1;var n=ht.transition,r=he;try{if(ht.transition=null,he=1,e)return e()}finally{he=r,ht.transition=n,le=t,!(le&6)&&ln()}}function wa(){ut=bn.current,we(bn)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zp(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Jn(),we(Ze),we(We),Bl();break;case 5:Al(r);break;case 4:Jn();break;case 13:we(ke);break;case 19:we(ke);break;case 10:Il(r.type._context);break;case 22:case 23:wa()}n=n.return}if(Me=e,ze=e=mn(e.current,null),Be=ut=t,Ie=0,Vr=null,da=ti=Pn=0,et=Wr=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var c=l.next;l.next=i,r.next=c}n.pending=r}kn=null}return e}function Wc(e,t){do{var n=ze;try{if(Ol(),Ho.current=Xo,Qo){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(Cn=0,Fe=Oe=Ee=null,Fr=!1,Mr=0,fa.current=null,n===null||n.return===null){Ie=1,Vr=t,ze=null;break}e:{var l=e,c=n.return,p=n,g=t;if(t=Be,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var N=g,D=p,A=D.tag;if(!(D.mode&1)&&(A===0||A===11||A===15)){var F=D.alternate;F?(D.updateQueue=F.updateQueue,D.memoizedState=F.memoizedState,D.lanes=F.lanes):(D.updateQueue=null,D.memoizedState=null)}var H=mc(c);if(H!==null){H.flags&=-257,hc(H,c,p,l,t),H.mode&1&&pc(l,N,t),t=H,g=N;var K=t.updateQueue;if(K===null){var X=new Set;X.add(g),t.updateQueue=X}else K.add(g);break e}else{if(!(t&1)){pc(l,N,t),xa();break e}g=Error(s(426))}}else if(Se&&p.mode&1){var Te=mc(c);if(Te!==null){!(Te.flags&65536)&&(Te.flags|=256),hc(Te,c,p,l,t),zl(Zn(g,p));break e}}l=g=Zn(g,p),Ie!==4&&(Ie=2),Wr===null?Wr=[l]:Wr.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var k=fc(l,g,t);Du(l,k);break e;case 1:p=g;var w=l.type,C=l.stateNode;if(!(l.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(cn===null||!cn.has(C)))){l.flags|=65536,t&=-t,l.lanes|=t;var U=dc(l,p,t);Du(l,U);break e}}l=l.return}while(l!==null)}Yc(n)}catch(G){t=G,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Hc(){var e=ei.current;return ei.current=Xo,e===null?Xo:e}function xa(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Me===null||!(Pn&268435455)&&!(ti&268435455)||pn(Me,Be)}function ai(e,t){var n=le;le|=2;var r=Hc();(Me!==e||Be!==t)&&(Kt=null,Rn(e,t));do try{n0();break}catch(i){Wc(e,i)}while(!0);if(Ol(),le=n,ei.current=r,ze!==null)throw Error(s(261));return Me=null,Be=0,Ie}function n0(){for(;ze!==null;)Qc(ze)}function r0(){for(;ze!==null&&!Nd();)Qc(ze)}function Qc(e){var t=Gc(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Yc(e):ze=t,fa.current=null}function Yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jp(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,ze=null;return}}else if(n=Gp(n,t,ut),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ie===0&&(Ie=5)}function Nn(e,t,n){var r=he,i=ht.transition;try{ht.transition=null,he=1,o0(e,t,n,r)}finally{ht.transition=i,he=r}return null}function o0(e,t,n,r){do tr();while(fn!==null);if(le&6)throw Error(s(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Dd(e,l),e===Me&&(ze=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ri||(ri=!0,Jc(co,function(){return tr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ht.transition,ht.transition=null;var c=he;he=1;var p=le;le|=4,fa.current=null,qp(e,n),Fc(n,e),Cp(xl),go=!!wl,xl=wl=null,e.current=n,bp(n),Ld(),le=p,he=c,ht.transition=l}else e.current=n;if(ri&&(ri=!1,fn=e,oi=i),l=e.pendingLanes,l===0&&(cn=null),jd(n.stateNode),tt(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ni)throw ni=!1,e=ma,ma=null,e;return oi&1&&e.tag!==0&&tr(),l=e.pendingLanes,l&1?e===ha?Hr++:(Hr=0,ha=e):Hr=0,ln(),null}function tr(){if(fn!==null){var e=Is(oi),t=ht.transition,n=he;try{if(ht.transition=null,he=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,oi=0,le&6)throw Error(s(331));var i=le;for(le|=4,Q=e.current;Q!==null;){var l=Q,c=l.child;if(Q.flags&16){var p=l.deletions;if(p!==null){for(var g=0;g<p.length;g++){var N=p[g];for(Q=N;Q!==null;){var D=Q;switch(D.tag){case 0:case 11:case 15:Br(8,D,l)}var A=D.child;if(A!==null)A.return=D,Q=A;else for(;Q!==null;){D=Q;var F=D.sibling,H=D.return;if(zc(D),D===N){Q=null;break}if(F!==null){F.return=H,Q=F;break}Q=H}}}var K=l.alternate;if(K!==null){var X=K.child;if(X!==null){K.child=null;do{var Te=X.sibling;X.sibling=null,X=Te}while(X!==null)}}Q=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,Q=c;else e:for(;Q!==null;){if(l=Q,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Br(9,l,l.return)}var k=l.sibling;if(k!==null){k.return=l.return,Q=k;break e}Q=l.return}}var w=e.current;for(Q=w;Q!==null;){c=Q;var C=c.child;if(c.subtreeFlags&2064&&C!==null)C.return=c,Q=C;else e:for(c=w;Q!==null;){if(p=Q,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:bo(9,p)}}catch(G){Re(p,p.return,G)}if(p===c){Q=null;break e}var U=p.sibling;if(U!==null){U.return=p.return,Q=U;break e}Q=p.return}}if(le=i,ln(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(fo,e)}catch{}r=!0}return r}finally{he=n,ht.transition=t}}return!1}function Kc(e,t,n){t=Zn(n,t),t=fc(e,t,1),e=sn(e,t,1),t=Ge(),e!==null&&(mr(e,1,t),tt(e,t))}function Re(e,t,n){if(e.tag===3)Kc(e,e,n);else for(;t!==null;){if(t.tag===3){Kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Zn(n,e),e=dc(t,e,1),t=sn(t,e,1),e=Ge(),t!==null&&(mr(t,1,e),tt(t,e));break}}t=t.return}}function i0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Be&n)===n&&(Ie===4||Ie===3&&(Be&130023424)===Be&&500>Le()-pa?Rn(e,0):da|=n),tt(e,t)}function Xc(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=Ge();e=Ht(e,t),e!==null&&(mr(e,t,n),tt(e,n))}function l0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xc(e,n)}function a0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),Xc(e,n)}var Gc;Gc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,Xp(e,t,n);be=!!(e.flags&131072)}else be=!1,Se&&t.flags&1048576&&Nu(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var i=Wn(t,We.current);Gn(t,n),i=Hl(null,t,r,e,i,n);var l=Ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(l=!0,Oo(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ml(t),i.updater=Go,t.stateNode=i,i._reactInternals=t,Zl(t,r,e,n),t=ta(null,t,r,!0,l,n)):(t.tag=0,Se&&l&&Rl(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=u0(r),e=St(r,e),i){case 0:t=ea(null,t,r,e,n);break e;case 1:t=Sc(null,t,r,e,n);break e;case 11:t=yc(null,t,r,e,n);break e;case 14:t=vc(null,t,r,St(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ea(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Sc(e,t,r,i,n);case 3:e:{if(kc(t),e===null)throw Error(s(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Mu(e,t),Vo(t,r,null,n);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Zn(Error(s(423)),t),t=Ec(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(s(424)),t),t=Ec(e,t,r,n,i);break e}else for(st=nn(t.stateNode.containerInfo.firstChild),at=t,Se=!0,xt=null,n=$u(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=Yt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Uu(t),e===null&&Tl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,Sl(r,i)?c=null:l!==null&&Sl(r,l)&&(t.flags|=32),xc(e,t),Xe(e,t,c,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Cc(e,t,n);case 4:return Dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),yc(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,c=i.value,ve(Ao,r._currentValue),r._currentValue=c,l!==null)if(wt(l.value,c)){if(l.children===i.children&&!Ze.current){t=Yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var g=p.firstContext;g!==null;){if(g.context===r){if(l.tag===1){g=Qt(-1,n&-n),g.tag=2;var N=l.updateQueue;if(N!==null){N=N.shared;var D=N.pending;D===null?g.next=g:(g.next=D.next,D.next=g),N.pending=g}}l.lanes|=n,g=l.alternate,g!==null&&(g.lanes|=n),$l(l.return,n,t),p.lanes|=n;break}g=g.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),$l(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=pt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),vc(e,t,r,i,n);case 15:return gc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Zo(e,t),t.tag=1,qe(r)?(e=!0,Oo(t)):e=!1,Gn(t,n),uc(t,r,i),Zl(t,r,i,n),ta(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 22:return wc(e,t,n)}throw Error(s(156,t.tag))};function Jc(e,t){return Ls(e,t)}function s0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new s0(e,t,n,r)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u0(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_t)return 11;if(e===Rt)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,i,l){var c=2;if(r=e,typeof e=="function")Sa(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case b:return Ln(n.children,i,l,t);case Ne:c=8,i|=8;break;case Pe:return e=yt(12,n,t,i|2),e.elementType=Pe,e.lanes=l,e;case ot:return e=yt(13,n,t,i),e.elementType=ot,e.lanes=l,e;case vt:return e=yt(19,n,t,i),e.elementType=vt,e.lanes=l,e;case _e:return ui(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $e:c=10;break e;case Pt:c=9;break e;case _t:c=11;break e;case Rt:c=14;break e;case Je:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=yt(c,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ln(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function ui(e,t,n,r){return e=yt(22,e,r,t),e.elementType=_e,e.lanes=n,e.stateNode={isHidden:!1},e}function ka(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ji(0),this.expirationTimes=Ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ca(e,t,n,r,i,l,c,p,g){return e=new c0(e,t,n,p,g),t===1?(t=1,l===!0&&(t|=8)):t=0,l=yt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(l),e}function f0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zc(e){if(!e)return on;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(qe(n))return Pu(e,n,t)}return t}function qc(e,t,n,r,i,l,c,p,g){return e=Ca(n,r,!0,e,i,l,c,p,g),e.context=Zc(null),n=e.current,r=Ge(),i=dn(n),l=Qt(r,i),l.callback=t??null,sn(n,l,i),e.current.lanes=i,mr(e,i,r),tt(e,r),e}function ci(e,t,n,r){var i=t.current,l=Ge(),c=dn(i);return n=Zc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,c),e!==null&&(Ct(e,i,c,l),Bo(e,i,c)),c}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pa(e,t){bc(e,t),(e=e.alternate)&&bc(e,t)}function d0(){return null}var ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function _a(e){this._internalRoot=e}di.prototype.render=_a.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));ci(e,t,null,null)},di.prototype.unmount=_a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){ci(null,e,null,null)}),t[Ut]=null}};function di(e){this._internalRoot=e}di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ms();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Us(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tf(){}function p0(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var N=fi(c);l.call(N)}}var c=qc(t,r,e,0,null,!1,!1,"",tf);return e._reactRootContainer=c,e[Ut]=c.current,Nr(e.nodeType===8?e.parentNode:e),_n(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var N=fi(g);p.call(N)}}var g=Ca(e,0,!1,null,null,!1,!1,"",tf);return e._reactRootContainer=g,e[Ut]=g.current,Nr(e.nodeType===8?e.parentNode:e),_n(function(){ci(t,g,n,r)}),g}function mi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var p=i;i=function(){var g=fi(c);p.call(g)}}ci(t,c,e,i)}else c=p0(n,t,e,i,r);return fi(c)}$s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Zi(t,n|1),tt(t,Le()),!(le&6)&&(er=Le()+500,ln()))}break;case 13:_n(function(){var r=Ht(e,1);if(r!==null){var i=Ge();Ct(r,e,1,i)}}),Pa(e,1)}},qi=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Ge();Ct(t,e,134217728,n)}Pa(e,134217728)}},Fs=function(e){if(e.tag===13){var t=dn(e),n=Ht(e,t);if(n!==null){var r=Ge();Ct(n,e,t,r)}Pa(e,t)}},Ms=function(){return he},Ds=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},Hi=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zo(r);if(!i)throw Error(s(90));ss(r),Fi(r,i)}}}break;case"textarea":ps(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}},ks=ga,Es=_n;var m0={usingClientEntryPoint:!1,Events:[zr,Bn,zo,xs,Ss,ga]},Qr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h0={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rs(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{fo=hi.inject(h0),Nt=hi}catch{}}return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0,nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(s(200));return f0(e,t,null,n)},nt.createRoot=function(e,t){if(!Ra(e))throw Error(s(299));var n=!1,r="",i=ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ca(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Nr(e.nodeType===8?e.parentNode:e),new _a(t)},nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Rs(t),e=e===null?null:e.stateNode,e},nt.flushSync=function(e){return _n(e)},nt.hydrate=function(e,t,n){if(!pi(t))throw Error(s(200));return mi(null,e,t,!0,n)},nt.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",c=ef;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=qc(t,null,e,1,n??null,i,!1,l,c),e[Ut]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new di(t)},nt.render=function(e,t,n){if(!pi(t))throw Error(s(200));return mi(null,e,t,!1,n)},nt.unmountComponentAtNode=function(e){if(!pi(e))throw Error(s(40));return e._reactRootContainer?(_n(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1},nt.unstable_batchedUpdates=ga,nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return mi(e,t,n,!1,r)},nt.version="18.3.1-next-f1338f8080-20240426",nt}var gf;function Xm(){if(gf)return ja.exports;gf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),ja.exports=Km(),ja.exports}const bf=(o,a)=>{const[s,f]=R.useState([]),[u,d]=R.useState(!0),[m,y]=R.useState(!1),h=async()=>{try{d(!0);const v=await fetch(o);if(!v.ok)throw new Error(`Error al obtener datos principales: ${v.status}`);const E=await v.json();if(a&&E.results){const L=E.results.map(async O=>{const T=await fetch(O[a]);if(!T.ok)throw new Error(`Error al obtener detalle: ${T.status}`);return await T.json()}),P=await Promise.all(L);f(P)}else f(E.results||E);y(!1)}catch(v){console.error("Error al obtener los datos:",v),y(!0)}finally{d(!1)}};return R.useEffect(()=>{h()},[o,a]),{data:s,loading:u,error:m}};function Gm(o){return()=>{o(-1)}}function Jm(o,a){const[s,f]=R.useState(a),[u,d]=R.useState(!0),[m,y]=R.useState(!1);R.useEffect(()=>{try{const v=localStorage.getItem(o);let E;v?(E=JSON.parse(v),f(E)):(localStorage.setItem(o,JSON.stringify(a)),E=a),d(!1)}catch{d(!1),y(!0)}},[o]);async function h(v,E){E&&typeof E=="function"&&await new Promise(L=>{E(),L()}),await new Promise(L=>{localStorage.setItem(o,JSON.stringify(v)),f(v),L()})}return{item:s,saveItem:h,loading:u,error:m}}const Tn=R.createContext(),Zm=({children:o})=>{const a="https://pokeapi.co/api/v2/",s="pokemon?limit=20",f=Gm(Yf()),{data:u,loading:d,error:m}=bf(a+s,"url"),{item:y,saveItem:h,loading:v,error:E}=Jm("FavoritesPokemons",[]),L=T=>{try{return u.find(S=>S.id===T)||!1}catch(_){return console.error(`Error al buscar el Pokémon con ID ${T}:`,_),!1}},P={hp:0,attack:0,defense:0,"special-attack":0,"special-defense":0,speed:0};u.forEach(T=>{T.stats.forEach(_=>{_.base_stat>P[_.stat.name]&&(P[_.stat.name]=_.base_stat)})}),console.log(P);const O=T=>{y.includes(T)?h(y.filter(_=>_!==T)):h([...y,T])};return j.jsx(Tn.Provider,{value:{allPokemons:u,getPokemon:L,loadingPokemons:d,errorPokemons:m,favorites:y,toggleFavorite:O,loadingFavorites:v,errorFavorites:E,highestStats:P,handleGoBack:f},children:o})};var vi={},wf;function qm(){if(wf)return vi;wf=1;var o=Xm();return vi.createRoot=o.createRoot,vi.hydrateRoot=o.hydrateRoot,vi}var bm=qm();function eh(){const{handleGoBack:o}=R.useContext(Tn),a=Gt(),s=a.pathname.startsWith("/favorito"),f=a.pathname.startsWith("/pokemon");return j.jsx("header",{children:j.jsx("nav",{className:"navigation",children:j.jsxs("ul",{children:[j.jsx("button",{onClick:o,children:"Volver"}),j.jsx("li",{children:j.jsx(Va,{to:"/",className:({isActive:u})=>u||f?"active-link":"",children:"Home"})}),j.jsx("li",{children:j.jsx(Va,{to:"/favoritos",className:({isActive:u})=>u||s?"active-link":"",children:"Favoritos"})})]})})})}function th({isFavorite:o,onClick:a}){return j.jsx("button",{onClick:a,children:o?"Eliminar de Favoritos":"Agregar a Favorito"})}function ts({card:o,page:a,animated:s}){const{id:f,name:u,types:d,sprites:{front_default:m}}=o,{favorites:y,toggleFavorite:h}=R.useContext(Tn),v=y.includes(f),E=s||m,P=["CardPokemon","col-lg-4"].join(" ");return j.jsxs("li",{className:P,children:[a?j.jsxs(zi,{to:`${a}/${f}`,children:[j.jsxs("span",{children:["#",f]}),j.jsx("img",{src:E,alt:u}),j.jsx("h3",{children:u}),j.jsx("p",{children:d.map(O=>O.type.name).join(", ")})]}):j.jsxs(j.Fragment,{children:[j.jsxs("span",{children:["#",f]}),j.jsx("img",{src:E,alt:u}),j.jsx("h3",{children:u}),j.jsx("p",{children:d.map(O=>O.type.name).join(", ")})]}),j.jsx(th,{isFavorite:v,onClick:()=>h(f)})]})}function nh({text:o}){return j.jsxs("div",{children:[j.jsx("h3",{children:"Descripción"}),j.jsx("p",{children:o})]})}function rh({height:o,weight:a}){const f=["Size",""].join(" ");return j.jsxs("div",{className:f,children:[j.jsx("h3",{children:"Dimensiones"}),j.jsxs("div",{className:"row",children:[j.jsxs("div",{className:"col-6",children:[j.jsx("h4",{children:"Alto"}),j.jsx("p",{children:`${(o*.1).toFixed(2)}m`})]}),j.jsxs("div",{className:"col-6",children:[j.jsx("h4",{children:"Peso"}),j.jsx("p",{children:`${(a*.1).toFixed(1)}kg`})]})]})]})}function oh({stats:o}){const{highestStats:a}=R.useContext(Tn),s={hp:"HP",attack:"ATK",defense:"DEF","special-attack":"SpA","special-defense":"SpD",speed:"SPD"},f=o.map((y,h)=>j.jsxs("li",{className:"row",children:[j.jsx("h4",{className:"col-1",children:s[y.stat.name]}),j.jsx("div",{className:"col-10",children:j.jsx("span",{style:{width:`${y.base_stat/a[y.stat.name]*100}%`}})}),j.jsx("span",{className:"col-1",children:y.base_stat})]},h)),u=o.reduce((y,h)=>y+h.base_stat,0),m=["Stats",""].join(" ");return j.jsxs("div",{className:m,children:[j.jsx("h3",{children:"Estadísticas"}),j.jsxs("ul",{children:[f,j.jsx("li",{className:"col-1",children:j.jsx("strong",{children:u})})]})]})}function xf({card:o}){if(!o)return;const{id:a,sprites:s,species:{url:f},height:u,weight:d,stats:m}=o,y=s.versions["generation-v"]["black-white"].animated.front_default,{data:{flavor_text_entries:h}}=bf(f),v=h==null?void 0:h.filter(P=>P.language.name==="es").map(P=>P.flavor_text)[0],L=["CardPokemon",""].join(" ");return j.jsxs("div",{className:L,children:[j.jsx(ts,{card:o,animated:y},a),j.jsx(nh,{text:v}),j.jsx(rh,{height:u,weight:d}),j.jsx(oh,{stats:m})]})}function Sf({text:o}){const s=["WaitingPokemon"].join(" ");return j.jsx("div",{className:s,children:o})}function ih(){const a=["WaitingPokemon"].join(" ");return j.jsx("div",{className:a,children:"Selecciona un pokemon..."})}function gi(){const o=+q0().id,a=Gt(),{getPokemon:s,favorites:f}=R.useContext(Tn),u=a.pathname.startsWith("/pokemon/"),d=a.pathname.startsWith("/favorito/"),m=f.includes(o),y=!!s(o),h=s(o);return j.jsx(j.Fragment,{children:u&&(y&&j.jsx(xf,{card:h})||!y&&j.jsx(Sf,{text:"Pokemon no encontrado"}))||d&&(m&&j.jsx(xf,{card:h})||!m&&j.jsx(Sf,{text:"Pokemon en favoritos"}))||j.jsx(ih,{})})}function lh(){const a=["EmptyFavorite"].join(" ");return j.jsx(zi,{className:a,to:"/",children:"No tiene ningún pokemon como Favorito..."})}function kf(){const{getPokemon:o,favorites:a}=R.useContext(Tn),s=a.map(d=>{const m=o(d);return m?j.jsx(ts,{card:m,page:"/favorito"},m.id):null}),u=["AllPokemon","row"].join(" ");return j.jsxs(j.Fragment,{children:[j.jsx("h1",{children:"Favoritos"}),j.jsxs("ul",{className:u,children:[s,a.length===0&&j.jsx(lh,{})]})]})}function Ef(){const{allPokemons:o}=R.useContext(Tn),a=o.map(u=>j.jsx(ts,{card:u,page:"/pokemon"},u.id)),f=["AllPokemon","row"].join(" ");return j.jsxs(j.Fragment,{children:[j.jsx("h1",{children:"Home"}),j.jsx("ul",{className:f,children:a})]})}function ah(){return j.jsx("div",{children:"Página no encontrada"})}var sh=!1;function uh(o){if(o.sheet)return o.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===o)return document.styleSheets[a]}function ch(o){var a=document.createElement("style");return a.setAttribute("data-emotion",o.key),o.nonce!==void 0&&a.setAttribute("nonce",o.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}var fh=function(){function o(s){var f=this;this._insertTag=function(u){var d;f.tags.length===0?f.insertionPoint?d=f.insertionPoint.nextSibling:f.prepend?d=f.container.firstChild:d=f.before:d=f.tags[f.tags.length-1].nextSibling,f.container.insertBefore(u,d),f.tags.push(u)},this.isSpeedy=s.speedy===void 0?!sh:s.speedy,this.tags=[],this.ctr=0,this.nonce=s.nonce,this.key=s.key,this.container=s.container,this.prepend=s.prepend,this.insertionPoint=s.insertionPoint,this.before=null}var a=o.prototype;return a.hydrate=function(f){f.forEach(this._insertTag)},a.insert=function(f){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ch(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var d=uh(u);try{d.insertRule(f,d.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(f));this.ctr++},a.flush=function(){this.tags.forEach(function(f){var u;return(u=f.parentNode)==null?void 0:u.removeChild(f)}),this.tags=[],this.ctr=0},o}(),Ke="-ms-",Ni="-moz-",ce="-webkit-",ed="comm",ns="rule",rs="decl",dh="@import",td="@keyframes",ph="@layer",mh=Math.abs,ji=String.fromCharCode,hh=Object.assign;function yh(o,a){return Ve(o,0)^45?(((a<<2^Ve(o,0))<<2^Ve(o,1))<<2^Ve(o,2))<<2^Ve(o,3):0}function nd(o){return o.trim()}function vh(o,a){return(o=a.exec(o))?o[0]:o}function fe(o,a,s){return o.replace(a,s)}function Wa(o,a){return o.indexOf(a)}function Ve(o,a){return o.charCodeAt(a)|0}function Zr(o,a,s){return o.slice(a,s)}function It(o){return o.length}function os(o){return o.length}function wi(o,a){return a.push(o),o}function gh(o,a){return o.map(a).join("")}var Oi=1,rr=1,rd=0,rt=0,je=0,lr="";function Ii(o,a,s,f,u,d,m){return{value:o,root:a,parent:s,type:f,props:u,children:d,line:Oi,column:rr,length:m,return:""}}function Gr(o,a){return hh(Ii("",null,null,"",null,null,0),o,{length:-o.length},a)}function wh(){return je}function xh(){return je=rt>0?Ve(lr,--rt):0,rr--,je===10&&(rr=1,Oi--),je}function ct(){return je=rt<rd?Ve(lr,rt++):0,rr++,je===10&&(rr=1,Oi++),je}function Ft(){return Ve(lr,rt)}function Ci(){return rt}function oo(o,a){return Zr(lr,o,a)}function qr(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function od(o){return Oi=rr=1,rd=It(lr=o),rt=0,[]}function id(o){return lr="",o}function Pi(o){return nd(oo(rt-1,Ha(o===91?o+2:o===40?o+1:o)))}function Sh(o){for(;(je=Ft())&&je<33;)ct();return qr(o)>2||qr(je)>3?"":" "}function kh(o,a){for(;--a&&ct()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return oo(o,Ci()+(a<6&&Ft()==32&&ct()==32))}function Ha(o){for(;ct();)switch(je){case o:return rt;case 34:case 39:o!==34&&o!==39&&Ha(je);break;case 40:o===41&&Ha(o);break;case 92:ct();break}return rt}function Eh(o,a){for(;ct()&&o+je!==57;)if(o+je===84&&Ft()===47)break;return"/*"+oo(a,rt-1)+"*"+ji(o===47?o:ct())}function Ch(o){for(;!qr(Ft());)ct();return oo(o,rt)}function Ph(o){return id(_i("",null,null,null,[""],o=od(o),0,[0],o))}function _i(o,a,s,f,u,d,m,y,h){for(var v=0,E=0,L=m,P=0,O=0,T=0,_=1,S=1,z=1,I=0,V="",J=u,$=d,ne=f,b=V;S;)switch(T=I,I=ct()){case 40:if(T!=108&&Ve(b,L-1)==58){Wa(b+=fe(Pi(I),"&","&\f"),"&\f")!=-1&&(z=-1);break}case 34:case 39:case 91:b+=Pi(I);break;case 9:case 10:case 13:case 32:b+=Sh(T);break;case 92:b+=kh(Ci()-1,7);continue;case 47:switch(Ft()){case 42:case 47:wi(_h(Eh(ct(),Ci()),a,s),h);break;default:b+="/"}break;case 123*_:y[v++]=It(b)*z;case 125*_:case 59:case 0:switch(I){case 0:case 125:S=0;case 59+E:z==-1&&(b=fe(b,/\f/g,"")),O>0&&It(b)-L&&wi(O>32?Pf(b+";",f,s,L-1):Pf(fe(b," ","")+";",f,s,L-2),h);break;case 59:b+=";";default:if(wi(ne=Cf(b,a,s,v,E,u,y,V,J=[],$=[],L),d),I===123)if(E===0)_i(b,a,ne,ne,J,d,L,y,$);else switch(P===99&&Ve(b,3)===110?100:P){case 100:case 108:case 109:case 115:_i(o,ne,ne,f&&wi(Cf(o,ne,ne,0,0,u,y,V,u,J=[],L),$),u,$,L,y,f?J:$);break;default:_i(b,ne,ne,ne,[""],$,0,y,$)}}v=E=O=0,_=z=1,V=b="",L=m;break;case 58:L=1+It(b),O=T;default:if(_<1){if(I==123)--_;else if(I==125&&_++==0&&xh()==125)continue}switch(b+=ji(I),I*_){case 38:z=E>0?1:(b+="\f",-1);break;case 44:y[v++]=(It(b)-1)*z,z=1;break;case 64:Ft()===45&&(b+=Pi(ct())),P=Ft(),E=L=It(V=b+=Ch(Ci())),I++;break;case 45:T===45&&It(b)==2&&(_=0)}}return d}function Cf(o,a,s,f,u,d,m,y,h,v,E){for(var L=u-1,P=u===0?d:[""],O=os(P),T=0,_=0,S=0;T<f;++T)for(var z=0,I=Zr(o,L+1,L=mh(_=m[T])),V=o;z<O;++z)(V=nd(_>0?P[z]+" "+I:fe(I,/&\f/g,P[z])))&&(h[S++]=V);return Ii(o,a,s,u===0?ns:y,h,v,E)}function _h(o,a,s){return Ii(o,a,s,ed,ji(wh()),Zr(o,2,-2),0)}function Pf(o,a,s,f){return Ii(o,a,s,rs,Zr(o,0,f),Zr(o,f+1,-1),f)}function nr(o,a){for(var s="",f=os(o),u=0;u<f;u++)s+=a(o[u],u,o,a)||"";return s}function Rh(o,a,s,f){switch(o.type){case ph:if(o.children.length)break;case dh:case rs:return o.return=o.return||o.value;case ed:return"";case td:return o.return=o.value+"{"+nr(o.children,f)+"}";case ns:o.value=o.props.join(",")}return It(s=nr(o.children,f))?o.return=o.value+"{"+s+"}":""}function Nh(o){var a=os(o);return function(s,f,u,d){for(var m="",y=0;y<a;y++)m+=o[y](s,f,u,d)||"";return m}}function Lh(o){return function(a){a.root||(a=a.return)&&o(a)}}function Th(o){var a=Object.create(null);return function(s){return a[s]===void 0&&(a[s]=o(s)),a[s]}}var zh=function(a,s,f){for(var u=0,d=0;u=d,d=Ft(),u===38&&d===12&&(s[f]=1),!qr(d);)ct();return oo(a,rt)},jh=function(a,s){var f=-1,u=44;do switch(qr(u)){case 0:u===38&&Ft()===12&&(s[f]=1),a[f]+=zh(rt-1,s,f);break;case 2:a[f]+=Pi(u);break;case 4:if(u===44){a[++f]=Ft()===58?"&\f":"",s[f]=a[f].length;break}default:a[f]+=ji(u)}while(u=ct());return a},Oh=function(a,s){return id(jh(od(a),s))},_f=new WeakMap,Ih=function(a){if(!(a.type!=="rule"||!a.parent||a.length<1)){for(var s=a.value,f=a.parent,u=a.column===f.column&&a.line===f.line;f.type!=="rule";)if(f=f.parent,!f)return;if(!(a.props.length===1&&s.charCodeAt(0)!==58&&!_f.get(f))&&!u){_f.set(a,!0);for(var d=[],m=Oh(s,d),y=f.props,h=0,v=0;h<m.length;h++)for(var E=0;E<y.length;E++,v++)a.props[v]=d[h]?m[h].replace(/&\f/g,y[E]):y[E]+" "+m[h]}}},$h=function(a){if(a.type==="decl"){var s=a.value;s.charCodeAt(0)===108&&s.charCodeAt(2)===98&&(a.return="",a.value="")}};function ld(o,a){switch(yh(o,a)){case 5103:return ce+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+o+Ni+o+Ke+o+o;case 6828:case 4268:return ce+o+Ke+o+o;case 6165:return ce+o+Ke+"flex-"+o+o;case 5187:return ce+o+fe(o,/(\w+).+(:[^]+)/,ce+"box-$1$2"+Ke+"flex-$1$2")+o;case 5443:return ce+o+Ke+"flex-item-"+fe(o,/flex-|-self/,"")+o;case 4675:return ce+o+Ke+"flex-line-pack"+fe(o,/align-content|flex-|-self/,"")+o;case 5548:return ce+o+Ke+fe(o,"shrink","negative")+o;case 5292:return ce+o+Ke+fe(o,"basis","preferred-size")+o;case 6060:return ce+"box-"+fe(o,"-grow","")+ce+o+Ke+fe(o,"grow","positive")+o;case 4554:return ce+fe(o,/([^-])(transform)/g,"$1"+ce+"$2")+o;case 6187:return fe(fe(fe(o,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),o,"")+o;case 5495:case 3959:return fe(o,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return fe(fe(o,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+Ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+o+o;case 4095:case 3583:case 4068:case 2532:return fe(o,/(.+)-inline(.+)/,ce+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(o)-1-a>6)switch(Ve(o,a+1)){case 109:if(Ve(o,a+4)!==45)break;case 102:return fe(o,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Ni+(Ve(o,a+3)==108?"$3":"$2-$3"))+o;case 115:return~Wa(o,"stretch")?ld(fe(o,"stretch","fill-available"),a)+o:o}break;case 4949:if(Ve(o,a+1)!==115)break;case 6444:switch(Ve(o,It(o)-3-(~Wa(o,"!important")&&10))){case 107:return fe(o,":",":"+ce)+o;case 101:return fe(o,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ve(o,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+Ke+"$2box$3")+o}break;case 5936:switch(Ve(o,a+11)){case 114:return ce+o+Ke+fe(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return ce+o+Ke+fe(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return ce+o+Ke+fe(o,/[svh]\w+-[tblr]{2}/,"lr")+o}return ce+o+Ke+o+o}return o}var Fh=function(a,s,f,u){if(a.length>-1&&!a.return)switch(a.type){case rs:a.return=ld(a.value,a.length);break;case td:return nr([Gr(a,{value:fe(a.value,"@","@"+ce)})],u);case ns:if(a.length)return gh(a.props,function(d){switch(vh(d,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return nr([Gr(a,{props:[fe(d,/:(read-\w+)/,":"+Ni+"$1")]})],u);case"::placeholder":return nr([Gr(a,{props:[fe(d,/:(plac\w+)/,":"+ce+"input-$1")]}),Gr(a,{props:[fe(d,/:(plac\w+)/,":"+Ni+"$1")]}),Gr(a,{props:[fe(d,/:(plac\w+)/,Ke+"input-$1")]})],u)}return""})}},Mh=[Fh],Dh=function(a){var s=a.key;if(s==="css"){var f=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(f,function(_){var S=_.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var u=a.stylisPlugins||Mh,d={},m,y=[];m=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(_){for(var S=_.getAttribute("data-emotion").split(" "),z=1;z<S.length;z++)d[S[z]]=!0;y.push(_)});var h,v=[Ih,$h];{var E,L=[Rh,Lh(function(_){E.insert(_)})],P=Nh(v.concat(u,L)),O=function(S){return nr(Ph(S),P)};h=function(S,z,I,V){E=I,O(S?S+"{"+z.styles+"}":z.styles),V&&(T.inserted[z.name]=!0)}}var T={key:s,sheet:new fh({key:s,container:m,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:d,registered:{},insert:h};return T.sheet.hydrate(y),T},$a={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function Ah(){if(Rf)return de;Rf=1;var o=typeof Symbol=="function"&&Symbol.for,a=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,f=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,d=o?Symbol.for("react.profiler"):60114,m=o?Symbol.for("react.provider"):60109,y=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.async_mode"):60111,v=o?Symbol.for("react.concurrent_mode"):60111,E=o?Symbol.for("react.forward_ref"):60112,L=o?Symbol.for("react.suspense"):60113,P=o?Symbol.for("react.suspense_list"):60120,O=o?Symbol.for("react.memo"):60115,T=o?Symbol.for("react.lazy"):60116,_=o?Symbol.for("react.block"):60121,S=o?Symbol.for("react.fundamental"):60117,z=o?Symbol.for("react.responder"):60118,I=o?Symbol.for("react.scope"):60119;function V($){if(typeof $=="object"&&$!==null){var ne=$.$$typeof;switch(ne){case a:switch($=$.type,$){case h:case v:case f:case d:case u:case L:return $;default:switch($=$&&$.$$typeof,$){case y:case E:case T:case O:case m:return $;default:return ne}}case s:return ne}}}function J($){return V($)===v}return de.AsyncMode=h,de.ConcurrentMode=v,de.ContextConsumer=y,de.ContextProvider=m,de.Element=a,de.ForwardRef=E,de.Fragment=f,de.Lazy=T,de.Memo=O,de.Portal=s,de.Profiler=d,de.StrictMode=u,de.Suspense=L,de.isAsyncMode=function($){return J($)||V($)===h},de.isConcurrentMode=J,de.isContextConsumer=function($){return V($)===y},de.isContextProvider=function($){return V($)===m},de.isElement=function($){return typeof $=="object"&&$!==null&&$.$$typeof===a},de.isForwardRef=function($){return V($)===E},de.isFragment=function($){return V($)===f},de.isLazy=function($){return V($)===T},de.isMemo=function($){return V($)===O},de.isPortal=function($){return V($)===s},de.isProfiler=function($){return V($)===d},de.isStrictMode=function($){return V($)===u},de.isSuspense=function($){return V($)===L},de.isValidElementType=function($){return typeof $=="string"||typeof $=="function"||$===f||$===v||$===d||$===u||$===L||$===P||typeof $=="object"&&$!==null&&($.$$typeof===T||$.$$typeof===O||$.$$typeof===m||$.$$typeof===y||$.$$typeof===E||$.$$typeof===S||$.$$typeof===z||$.$$typeof===I||$.$$typeof===_)},de.typeOf=V,de}var Nf;function Uh(){return Nf||(Nf=1,$a.exports=Ah()),$a.exports}var Fa,Lf;function Bh(){if(Lf)return Fa;Lf=1;var o=Uh(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[o.ForwardRef]=f,d[o.Memo]=u;function m(T){return o.isMemo(T)?u:d[T.$$typeof]||a}var y=Object.defineProperty,h=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,E=Object.getOwnPropertyDescriptor,L=Object.getPrototypeOf,P=Object.prototype;function O(T,_,S){if(typeof _!="string"){if(P){var z=L(_);z&&z!==P&&O(T,z,S)}var I=h(_);v&&(I=I.concat(v(_)));for(var V=m(T),J=m(_),$=0;$<I.length;++$){var ne=I[$];if(!s[ne]&&!(S&&S[ne])&&!(J&&J[ne])&&!(V&&V[ne])){var b=E(_,ne);try{y(T,ne,b)}catch{}}}}return T}return Fa=O,Fa}Bh();var Vh=!0;function ad(o,a,s){var f="";return s.split(" ").forEach(function(u){o[u]!==void 0?a.push(o[u]+";"):u&&(f+=u+" ")}),f}var is=function(a,s,f){var u=a.key+"-"+s.name;(f===!1||Vh===!1)&&a.registered[u]===void 0&&(a.registered[u]=s.styles)},sd=function(a,s,f){is(a,s,f);var u=a.key+"-"+s.name;if(a.inserted[s.name]===void 0){var d=s;do a.insert(s===d?"."+u:"",d,a.sheet,!0),d=d.next;while(d!==void 0)}};function Wh(o){for(var a=0,s,f=0,u=o.length;u>=4;++f,u-=4)s=o.charCodeAt(f)&255|(o.charCodeAt(++f)&255)<<8|(o.charCodeAt(++f)&255)<<16|(o.charCodeAt(++f)&255)<<24,s=(s&65535)*1540483477+((s>>>16)*59797<<16),s^=s>>>24,a=(s&65535)*1540483477+((s>>>16)*59797<<16)^(a&65535)*1540483477+((a>>>16)*59797<<16);switch(u){case 3:a^=(o.charCodeAt(f+2)&255)<<16;case 2:a^=(o.charCodeAt(f+1)&255)<<8;case 1:a^=o.charCodeAt(f)&255,a=(a&65535)*1540483477+((a>>>16)*59797<<16)}return a^=a>>>13,a=(a&65535)*1540483477+((a>>>16)*59797<<16),((a^a>>>15)>>>0).toString(36)}var Hh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qh=!1,Yh=/[A-Z]|^ms/g,Kh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ud=function(a){return a.charCodeAt(1)===45},Tf=function(a){return a!=null&&typeof a!="boolean"},Ma=Th(function(o){return ud(o)?o:o.replace(Yh,"-$&").toLowerCase()}),zf=function(a,s){switch(a){case"animation":case"animationName":if(typeof s=="string")return s.replace(Kh,function(f,u,d){return $t={name:u,styles:d,next:$t},u})}return Hh[a]!==1&&!ud(a)&&typeof s=="number"&&s!==0?s+"px":s},Xh="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function br(o,a,s){if(s==null)return"";var f=s;if(f.__emotion_styles!==void 0)return f;switch(typeof s){case"boolean":return"";case"object":{var u=s;if(u.anim===1)return $t={name:u.name,styles:u.styles,next:$t},u.name;var d=s;if(d.styles!==void 0){var m=d.next;if(m!==void 0)for(;m!==void 0;)$t={name:m.name,styles:m.styles,next:$t},m=m.next;var y=d.styles+";";return y}return Gh(o,a,s)}case"function":{if(o!==void 0){var h=$t,v=s(o);return $t=h,br(o,a,v)}break}}var E=s;if(a==null)return E;var L=a[E];return L!==void 0?L:E}function Gh(o,a,s){var f="";if(Array.isArray(s))for(var u=0;u<s.length;u++)f+=br(o,a,s[u])+";";else for(var d in s){var m=s[d];if(typeof m!="object"){var y=m;a!=null&&a[y]!==void 0?f+=d+"{"+a[y]+"}":Tf(y)&&(f+=Ma(d)+":"+zf(d,y)+";")}else{if(d==="NO_COMPONENT_SELECTOR"&&Qh)throw new Error(Xh);if(Array.isArray(m)&&typeof m[0]=="string"&&(a==null||a[m[0]]===void 0))for(var h=0;h<m.length;h++)Tf(m[h])&&(f+=Ma(d)+":"+zf(d,m[h])+";");else{var v=br(o,a,m);switch(d){case"animation":case"animationName":{f+=Ma(d)+":"+v+";";break}default:f+=d+"{"+v+"}"}}}}return f}var jf=/label:\s*([^\s;{]+)\s*(;|$)/g,$t;function ls(o,a,s){if(o.length===1&&typeof o[0]=="object"&&o[0]!==null&&o[0].styles!==void 0)return o[0];var f=!0,u="";$t=void 0;var d=o[0];if(d==null||d.raw===void 0)f=!1,u+=br(s,a,d);else{var m=d;u+=m[0]}for(var y=1;y<o.length;y++)if(u+=br(s,a,o[y]),f){var h=d;u+=h[y]}jf.lastIndex=0;for(var v="",E;(E=jf.exec(u))!==null;)v+="-"+E[1];var L=Wh(u)+v;return{name:L,styles:u,next:$t}}var Jh=function(a){return a()},Zh=af.useInsertionEffect?af.useInsertionEffect:!1,cd=Zh||Jh,Qa=!1,fd=R.createContext(typeof HTMLElement<"u"?Dh({key:"css"}):null);fd.Provider;var dd=function(a){return R.forwardRef(function(s,f){var u=R.useContext(fd);return a(s,u,f)})},pd=R.createContext({}),as={}.hasOwnProperty,Ya="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",qh=function(a,s){var f={};for(var u in s)as.call(s,u)&&(f[u]=s[u]);return f[Ya]=a,f},bh=function(a){var s=a.cache,f=a.serialized,u=a.isStringTag;return is(s,f,u),cd(function(){return sd(s,f,u)}),null},e1=dd(function(o,a,s){var f=o.css;typeof f=="string"&&a.registered[f]!==void 0&&(f=a.registered[f]);var u=o[Ya],d=[f],m="";typeof o.className=="string"?m=ad(a.registered,d,o.className):o.className!=null&&(m=o.className+" ");var y=ls(d,void 0,R.useContext(pd));m+=a.key+"-"+y.name;var h={};for(var v in o)as.call(o,v)&&v!=="css"&&v!==Ya&&!Qa&&(h[v]=o[v]);return h.className=m,s&&(h.ref=s),R.createElement(R.Fragment,null,R.createElement(bh,{cache:a,serialized:y,isStringTag:typeof u=="string"}),R.createElement(u,h))}),t1=e1,n1=j.Fragment;function Ae(o,a,s){return as.call(a,"css")?j.jsx(t1,qh(o,a),s):j.jsx(o,a,s)}function md(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return ls(a)}var B=function(){var a=md.apply(void 0,arguments),s="animation-"+a.name;return{name:s,styles:"@keyframes "+s+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},r1=function o(a){for(var s=a.length,f=0,u="";f<s;f++){var d=a[f];if(d!=null){var m=void 0;switch(typeof d){case"boolean":break;case"object":{if(Array.isArray(d))m=o(d);else{m="";for(var y in d)d[y]&&y&&(m&&(m+=" "),m+=y)}break}default:m=d}m&&(u&&(u+=" "),u+=m)}}return u};function o1(o,a,s){var f=[],u=ad(o,f,s);return f.length<2?s:u+a(f)}var i1=function(a){var s=a.cache,f=a.serializedArr;return cd(function(){for(var u=0;u<f.length;u++)sd(s,f[u],!1)}),null},Da=dd(function(o,a){var s=!1,f=[],u=function(){if(s&&Qa)throw new Error("css can only be used during render");for(var v=arguments.length,E=new Array(v),L=0;L<v;L++)E[L]=arguments[L];var P=ls(E,a.registered);return f.push(P),is(a,P,!1),a.key+"-"+P.name},d=function(){if(s&&Qa)throw new Error("cx can only be used during render");for(var v=arguments.length,E=new Array(v),L=0;L<v;L++)E[L]=arguments[L];return o1(a.registered,u,r1(E))},m={css:u,cx:d,theme:R.useContext(pd)},y=o.children(m);return s=!0,R.createElement(R.Fragment,null,R.createElement(i1,{cache:a,serializedArr:f}),y)}),l1=Object.defineProperty,a1=(o,a,s)=>a in o?l1(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,xi=(o,a,s)=>a1(o,typeof a!="symbol"?a+"":a,s),Ka=new Map,Si=new WeakMap,Of=0,s1=void 0;function u1(o){return o?(Si.has(o)||(Of+=1,Si.set(o,Of.toString())),Si.get(o)):"0"}function c1(o){return Object.keys(o).sort().filter(a=>o[a]!==void 0).map(a=>`${a}_${a==="root"?u1(o.root):o[a]}`).toString()}function f1(o){const a=c1(o);let s=Ka.get(a);if(!s){const f=new Map;let u;const d=new IntersectionObserver(m=>{m.forEach(y=>{var h;const v=y.isIntersecting&&u.some(E=>y.intersectionRatio>=E);o.trackVisibility&&typeof y.isVisible>"u"&&(y.isVisible=v),(h=f.get(y.target))==null||h.forEach(E=>{E(v,y)})})},o);u=d.thresholds||(Array.isArray(o.threshold)?o.threshold:[o.threshold||0]),s={id:a,observer:d,elements:f},Ka.set(a,s)}return s}function hd(o,a,s={},f=s1){if(typeof window.IntersectionObserver>"u"&&f!==void 0){const h=o.getBoundingClientRect();return a(f,{isIntersecting:f,target:o,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:h,intersectionRect:h,rootBounds:h}),()=>{}}const{id:u,observer:d,elements:m}=f1(s),y=m.get(o)||[];return m.has(o)||m.set(o,y),y.push(a),d.observe(o),function(){y.splice(y.indexOf(a),1),y.length===0&&(m.delete(o),d.unobserve(o)),m.size===0&&(d.disconnect(),Ka.delete(u))}}function d1(o){return typeof o.children!="function"}var If=class extends R.Component{constructor(o){super(o),xi(this,"node",null),xi(this,"_unobserveCb",null),xi(this,"handleNode",a=>{this.node&&(this.unobserve(),!a&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=a||null,this.observeNode()}),xi(this,"handleChange",(a,s)=>{a&&this.props.triggerOnce&&this.unobserve(),d1(this.props)||this.setState({inView:a,entry:s}),this.props.onChange&&this.props.onChange(a,s)}),this.state={inView:!!o.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:o,root:a,rootMargin:s,trackVisibility:f,delay:u,fallbackInView:d}=this.props;this._unobserveCb=hd(this.node,this.handleChange,{threshold:o,root:a,rootMargin:s,trackVisibility:f,delay:u},d)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:o}=this.props;if(typeof o=="function"){const{inView:O,entry:T}=this.state;return o({inView:O,entry:T,ref:this.handleNode})}const{as:a,triggerOnce:s,threshold:f,root:u,rootMargin:d,onChange:m,skip:y,trackVisibility:h,delay:v,initialInView:E,fallbackInView:L,...P}=this.props;return R.createElement(a||"div",{ref:this.handleNode,...P},o)}};function yd({threshold:o,delay:a,trackVisibility:s,rootMargin:f,root:u,triggerOnce:d,skip:m,initialInView:y,fallbackInView:h,onChange:v}={}){var E;const[L,P]=R.useState(null),O=R.useRef(),[T,_]=R.useState({inView:!!y,entry:void 0});O.current=v,R.useEffect(()=>{if(m||!L)return;let V;return V=hd(L,(J,$)=>{_({inView:J,entry:$}),O.current&&O.current(J,$),$.isIntersecting&&d&&V&&(V(),V=void 0)},{root:u,rootMargin:f,threshold:o,trackVisibility:s,delay:a},h),()=>{V&&V()}},[Array.isArray(o)?o.toString():o,L,u,f,d,m,s,h,a]);const S=(E=T.entry)==null?void 0:E.target,z=R.useRef();!L&&S&&!d&&!m&&z.current!==S&&(z.current=S,_({inView:!!y,entry:void 0}));const I=[P,T.inView,T.entry];return I.ref=I[0],I.inView=I[1],I.entry=I[2],I}var Aa={exports:{}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function p1(){if($f)return pe;$f=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),m=Symbol.for("react.context"),y=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),T;T=Symbol.for("react.module.reference");function _(S){if(typeof S=="object"&&S!==null){var z=S.$$typeof;switch(z){case o:switch(S=S.type,S){case s:case u:case f:case v:case E:return S;default:switch(S=S&&S.$$typeof,S){case y:case m:case h:case P:case L:case d:return S;default:return z}}case a:return z}}}return pe.ContextConsumer=m,pe.ContextProvider=d,pe.Element=o,pe.ForwardRef=h,pe.Fragment=s,pe.Lazy=P,pe.Memo=L,pe.Portal=a,pe.Profiler=u,pe.StrictMode=f,pe.Suspense=v,pe.SuspenseList=E,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(S){return _(S)===m},pe.isContextProvider=function(S){return _(S)===d},pe.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===o},pe.isForwardRef=function(S){return _(S)===h},pe.isFragment=function(S){return _(S)===s},pe.isLazy=function(S){return _(S)===P},pe.isMemo=function(S){return _(S)===L},pe.isPortal=function(S){return _(S)===a},pe.isProfiler=function(S){return _(S)===u},pe.isStrictMode=function(S){return _(S)===f},pe.isSuspense=function(S){return _(S)===v},pe.isSuspenseList=function(S){return _(S)===E},pe.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===s||S===u||S===f||S===v||S===E||S===O||typeof S=="object"&&S!==null&&(S.$$typeof===P||S.$$typeof===L||S.$$typeof===d||S.$$typeof===m||S.$$typeof===h||S.$$typeof===T||S.getModuleId!==void 0)},pe.typeOf=_,pe}var Ff;function m1(){return Ff||(Ff=1,Aa.exports=p1()),Aa.exports}var h1=m1();B`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;B`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;B`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;B`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;B`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;B`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;B`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;B`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;B`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;B`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;B`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;B`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;B`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const vd=B`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function y1({duration:o=1e3,delay:a=0,timingFunction:s="ease",keyframes:f=vd,iterationCount:u=1}){return md`
    animation-duration: ${o}ms;
    animation-timing-function: ${s};
    animation-delay: ${a}ms;
    animation-name: ${f};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${u};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function v1(o){return o==null}function g1(o){return typeof o=="string"||typeof o=="number"||typeof o=="boolean"}function gd(o,a){return s=>s?o():a()}function eo(o){return gd(o,()=>null)}function Xa(o){return eo(()=>({opacity:0}))(o)}const wd=o=>{const{cascade:a=!1,damping:s=.5,delay:f=0,duration:u=1e3,fraction:d=0,keyframes:m=vd,triggerOnce:y=!1,className:h,style:v,childClassName:E,childStyle:L,children:P,onVisibilityChange:O}=o,T=R.useMemo(()=>y1({keyframes:m,duration:u}),[u,m]);return v1(P)?null:g1(P)?Ae(x1,{...o,animationStyles:T,children:String(P)}):h1.isFragment(P)?Ae(xd,{...o,animationStyles:T}):Ae(n1,{children:R.Children.map(P,(_,S)=>{if(!R.isValidElement(_))return null;const z=f+(a?S*u*s:0);switch(_.type){case"ol":case"ul":return Ae(Da,{children:({cx:I})=>Ae(_.type,{..._.props,className:I(h,_.props.className),style:Object.assign({},v,_.props.style),children:Ae(wd,{...o,children:_.props.children})})});case"li":return Ae(If,{threshold:d,triggerOnce:y,onChange:O,children:({inView:I,ref:V})=>Ae(Da,{children:({cx:J})=>Ae(_.type,{..._.props,ref:V,className:J(E,_.props.className),css:eo(()=>T)(I),style:Object.assign({},L,_.props.style,Xa(!I),{animationDelay:z+"ms"})})})});default:return Ae(If,{threshold:d,triggerOnce:y,onChange:O,children:({inView:I,ref:V})=>Ae("div",{ref:V,className:h,css:eo(()=>T)(I),style:Object.assign({},v,Xa(!I),{animationDelay:z+"ms"}),children:Ae(Da,{children:({cx:J})=>Ae(_.type,{..._.props,className:J(E,_.props.className),style:Object.assign({},L,_.props.style)})})})})}})})},w1={display:"inline-block",whiteSpace:"pre"},x1=o=>{const{animationStyles:a,cascade:s=!1,damping:f=.5,delay:u=0,duration:d=1e3,fraction:m=0,triggerOnce:y=!1,className:h,style:v,children:E,onVisibilityChange:L}=o,{ref:P,inView:O}=yd({triggerOnce:y,threshold:m,onChange:L});return gd(()=>Ae("div",{ref:P,className:h,style:Object.assign({},v,w1),children:E.split("").map((T,_)=>Ae("span",{css:eo(()=>a)(O),style:{animationDelay:u+_*d*f+"ms"},children:T},_))}),()=>Ae(xd,{...o,children:E}))(s)},xd=o=>{const{animationStyles:a,fraction:s=0,triggerOnce:f=!1,className:u,style:d,children:m,onVisibilityChange:y}=o,{ref:h,inView:v}=yd({triggerOnce:f,threshold:s,onChange:y});return Ae("div",{ref:h,className:u,css:eo(()=>a)(v),style:Object.assign({},d,Xa(!v)),children:m})};B`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;B`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;B`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;B`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;B`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;B`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;B`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;B`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;B`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;B`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;B`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;B`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;B`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;B`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;B`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;B`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const S1=B`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,k1=B`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,E1=B`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,C1=B`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,P1=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,_1=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,R1=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,N1=B`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function L1(o,a){switch(a){case"down":return o?P1:S1;case"right":return o?R1:E1;case"up":return o?N1:C1;case"left":default:return o?_1:k1}}const T1=o=>{const{direction:a,reverse:s=!1,...f}=o,u=R.useMemo(()=>L1(s,a),[a,s]);return Ae(wd,{keyframes:u,...f})};B`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;B`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;B`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;B`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function z1({src:o,link:a}){const f=["Logo","text-center text-lg-end flex-grow-0 mt-5 mt-lg-0",a?"Logo--link":""].join(" ");return j.jsx("div",{className:f,children:j.jsxs(T1,{direction:"up",duration:1e3,triggerOnce:!0,children:[a&&j.jsx("a",{href:a,target:"_blank",children:j.jsx("img",{src:o,alt:"Logo empresarial"})}),!a&&j.jsx("img",{src:o,alt:"Logo empresarial"})]})})}function j1(){return j.jsx(j.Fragment,{children:j.jsx("div",{className:"container",children:j.jsxs("div",{className:"row",children:[j.jsxs("div",{className:"col-lg-7",children:[j.jsx(eh,{}),j.jsxs(pf,{children:[j.jsx(Ot,{path:"/",element:j.jsx(Ef,{})}),j.jsx(Ot,{path:"/pokemon/:id",element:j.jsx(Ef,{})}),j.jsx(Ot,{path:"/favoritos",element:j.jsx(kf,{})}),j.jsx(Ot,{path:"/favorito/:id",element:j.jsx(kf,{})}),j.jsx(Ot,{path:"*",element:j.jsx(ah,{})})]}),j.jsx(z1,{src:"./logo-elan-sk.svg",link:"https://elan-sk.github.io/"})]}),j.jsx("div",{className:"col-lg-5",children:j.jsxs(pf,{children:[j.jsx(Ot,{path:"/",element:j.jsx(gi,{})}),j.jsx(Ot,{path:"/pokemon/:id",element:j.jsx(gi,{})}),j.jsx(Ot,{path:"/favoritos",element:j.jsx(gi,{})}),j.jsx(Ot,{path:"/favorito/:id",element:j.jsx(gi,{})})]})})]})})})}bm.createRoot(document.getElementById("root")).render(j.jsx(Fm,{children:j.jsx(Zm,{children:j.jsx(j1,{})})}));
