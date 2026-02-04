(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Va={exports:{}},tl={},Wa={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Oi=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Oi&&e[Oi]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ya=Object.assign,Ka={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Ka,this.updater=n||Qa}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ga(){}Ga.prototype=ln.prototype;function Bo(e,t,n){this.props=e,this.context=t,this.refs=Ka,this.updater=n||Qa}var Ao=Bo.prototype=new Ga;Ao.constructor=Bo;Ya(Ao,ln.prototype);Ao.isPureReactComponent=!0;var Mi=Array.isArray,Xa=Object.prototype.hasOwnProperty,Ho={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Xa.call(t,r)&&!Za.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Kn,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function mc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fi=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kn:case lc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,Mi(l)?(n="",e!=null&&(n=e.replace(Fi,"$&/")+"/"),xr(l,t,n,"",function(c){return c})):l!=null&&($o(l)&&(l=mc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Fi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Mi(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+wl(o,a);i+=xr(o,t,n,u,l)}else if(u=hc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+wl(o,a++),i+=xr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},wr={transition:null},yc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Ho};function qa(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ln;N.Fragment=oc;N.Profiler=ac;N.PureComponent=Bo;N.StrictMode=ic;N.Suspense=dc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;N.act=qa;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ya({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ho.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Xa.call(t,u)&&!Za.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Kn,type:e.type,key:l,ref:o,props:r,_owner:i}};N.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};N.createElement=Ja;N.createFactory=function(e){var t=Ja.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:cc,render:e}};N.isValidElement=$o;N.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:vc}};N.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};N.unstable_act=qa;N.useCallback=function(e,t){return ae.current.useCallback(e,t)};N.useContext=function(e){return ae.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};N.useEffect=function(e,t){return ae.current.useEffect(e,t)};N.useId=function(){return ae.current.useId()};N.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ae.current.useMemo(e,t)};N.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};N.useRef=function(e){return ae.current.useRef(e)};N.useState=function(e){return ae.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return ae.current.useTransition()};N.version="18.3.1";Wa.exports=N;var Le=Wa.exports;const xc=rc(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc=Le,kc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,Ec=wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Cc.call(t,r)&&!_c.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:kc,type:e,key:o,ref:i,props:l,_owner:Ec.current}}tl.Fragment=Sc;tl.jsx=eu;tl.jsxs=eu;Va.exports=tl;var z=Va.exports,Ql={},tu={exports:{}},ye={},nu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var P=C.length;C.push(T);e:for(;0<P;){var V=P-1>>>1,G=C[V];if(0<l(G,T))C[V]=T,C[P]=G,P=V;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],P=C.pop();if(P!==T){C[0]=P;e:for(var V=0,G=C.length,qn=G>>>1;V<qn;){var gt=2*(V+1)-1,xl=C[gt],vt=gt+1,er=C[vt];if(0>l(xl,P))vt<G&&0>l(er,xl)?(C[V]=er,C[vt]=P,V=vt):(C[V]=xl,C[gt]=P,V=gt);else if(vt<G&&0>l(er,P))C[V]=er,C[vt]=P,V=vt;else break e}}return T}function l(C,T){var P=C.sortIndex-T.sortIndex;return P!==0?P:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],m=1,h=null,p=3,y=!1,x=!1,w=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function g(C){if(w=!1,f(C),!x)if(n(u)!==null)x=!0,vl(S);else{var T=n(c);T!==null&&yl(g,T.startTime-C)}}function S(C,T){x=!1,w&&(w=!1,d(b),b=-1),y=!0;var P=p;try{for(f(T),h=n(u);h!==null&&(!(h.expirationTime>T)||C&&!be());){var V=h.callback;if(typeof V=="function"){h.callback=null,p=h.priorityLevel;var G=V(h.expirationTime<=T);T=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(u)&&r(u),f(T)}else r(u);h=n(u)}if(h!==null)var qn=!0;else{var gt=n(c);gt!==null&&yl(g,gt.startTime-T),qn=!1}return qn}finally{h=null,p=P,y=!1}}var E=!1,_=null,b=-1,$=5,L=-1;function be(){return!(e.unstable_now()-L<$)}function un(){if(_!==null){var C=e.unstable_now();L=C;var T=!0;try{T=_(!0,C)}finally{T?sn():(E=!1,_=null)}}else E=!1}var sn;if(typeof s=="function")sn=function(){s(un)};else if(typeof MessageChannel<"u"){var Ii=new MessageChannel,nc=Ii.port2;Ii.port1.onmessage=un,sn=function(){nc.postMessage(null)}}else sn=function(){F(un,0)};function vl(C){_=C,E||(E=!0,sn())}function yl(C,T){b=F(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,vl(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var P=p;p=T;try{return C()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=p;p=C;try{return T()}finally{p=P}},e.unstable_scheduleCallback=function(C,T,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,C={id:m++,callback:T,priorityLevel:C,startTime:P,expirationTime:G,sortIndex:-1},P>V?(C.sortIndex=P,t(c,C),n(u)===null&&C===n(c)&&(w?(d(b),b=-1):w=!0,yl(g,P-V))):(C.sortIndex=G,t(u,C),x||y||(x=!0,vl(S))),C},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(C){var T=p;return function(){var P=p;p=T;try{return C.apply(this,arguments)}finally{p=P}}}})(ru);nu.exports=ru;var bc=nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=Le,ve=bc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,Ln={};function Nt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Di={},Ui={};function Pc(e){return Yl.call(Ui,e)?!0:Yl.call(Di,e)?!1:zc.test(e)?Ui[e]=!0:(Di[e]=!0,!1)}function Nc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,n,r){if(t===null||typeof t>"u"||Nc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vo=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vo,Wo);ee[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vo,Wo);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vo,Wo);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,n,l,r)&&(n=null),r||l===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),jt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),iu=Symbol.for("react.context"),Ko=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,kl;function yn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function Cl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Rc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case jt:return"Portal";case Kl:return"Profiler";case Yo:return"StrictMode";case Gl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iu:return(e.displayName||"Context")+".Consumer";case ou:return(e._context.displayName||"Context")+".Provider";case Ko:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function jc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ic(e){var t=uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Ic(e))}function su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ai(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function ql(e,t){cu(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Wt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $i(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(xn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function du(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function hu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function mu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=hu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Mc=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Mc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Qt=null,Yt=null;function Wi(e){if(e=Zn(e)){if(typeof io!="function")throw Error(v(280));var t=e.stateNode;t&&(t=il(t),io(e.stateNode,e.type,t))}}function gu(e){Qt?Yt?Yt.push(e):Yt=[e]:Qt=e}function vu(){if(Qt){var e=Qt,t=Yt;if(Yt=Qt=null,Wi(e),t)for(e=0;e<t.length;e++)Wi(t[e])}}function yu(e,t){return e(t)}function xu(){}var El=!1;function wu(e,t,n){if(El)return e(t,n);El=!0;try{return yu(e,t,n)}finally{El=!1,(Qt!==null||Yt!==null)&&(xu(),vu())}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var ao=!1;if(We)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ao=!1}function Fc(e,t,n,r,l,o,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Cn=!1,Rr=null,jr=!1,uo=null,Dc={onError:function(e){Cn=!0,Rr=e}};function Uc(e,t,n,r,l,o,i,a,u){Cn=!1,Rr=null,Fc.apply(Dc,arguments)}function Bc(e,t,n,r,l,o,i,a,u){if(Uc.apply(this,arguments),Cn){if(Cn){var c=Rr;Cn=!1,Rr=null}else throw Error(v(198));jr||(jr=!0,uo=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(Lt(e)!==e)throw Error(v(188))}function Ac(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Qi(l),e;if(o===r)return Qi(l),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Su(e){return e=Ac(e),e!==null?Cu(e):null}function Cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cu(e);if(t!==null)return t;e=e.sibling}return null}var Eu=ve.unstable_scheduleCallback,Yi=ve.unstable_cancelCallback,Hc=ve.unstable_shouldYield,$c=ve.unstable_requestPaint,W=ve.unstable_now,Vc=ve.unstable_getCurrentPriorityLevel,Zo=ve.unstable_ImmediatePriority,_u=ve.unstable_UserBlockingPriority,Ir=ve.unstable_NormalPriority,Wc=ve.unstable_LowPriority,bu=ve.unstable_IdlePriority,nl=null,De=null;function Qc(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Gc,Yc=Math.log,Kc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Yc(e)/Kc|0)|0}var or=64,ir=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=wn(a):(o&=i,o!==0&&(r=wn(o)))}else i=n&~l,i!==0?r=wn(i):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Re(o),a=1<<i,u=l[i];u===-1?(!(a&n)||a&r)&&(l[i]=Xc(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tu(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var j=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,qo,Nu,Lu,Ru,co=!1,ar=[],rt=null,lt=null,ot=null,In=new Map,On=new Map,qe=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ki(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function fn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ed(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return ot=fn(ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return In.set(o,fn(In.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,On.set(o,fn(On.get(o)||null,e,t,n,r,l)),!0}return!1}function ju(e){var t=wt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=ku(n),t!==null){e.blockedOn=t,Ru(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=Zn(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Gi(e,t,n){kr(e)&&n.delete(t)}function td(){co=!1,rt!==null&&kr(rt)&&(rt=null),lt!==null&&kr(lt)&&(lt=null),ot!==null&&kr(ot)&&(ot=null),In.forEach(Gi),On.forEach(Gi)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,td)))}function Mn(e){function t(l){return pn(l,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),ot!==null&&pn(ot,e),In.forEach(t),On.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)ju(n),n.blockedOn===null&&qe.shift()}var Kt=Ge.ReactCurrentBatchConfig,Mr=!0;function nd(e,t,n,r){var l=j,o=Kt.transition;Kt.transition=null;try{j=1,ei(e,t,n,r)}finally{j=l,Kt.transition=o}}function rd(e,t,n,r){var l=j,o=Kt.transition;Kt.transition=null;try{j=4,ei(e,t,n,r)}finally{j=l,Kt.transition=o}}function ei(e,t,n,r){if(Mr){var l=fo(e,t,n,r);if(l===null)Ol(e,t,r,Fr,n),Ki(e,r);else if(ed(l,e,t,n,r))r.stopPropagation();else if(Ki(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var o=Zn(l);if(o!==null&&Pu(o),o=fo(e,t,n,r),o===null&&Ol(e,t,r,Fr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Fr=null;function fo(e,t,n,r){if(Fr=null,e=Xo(r),e=wt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ku(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Zo:return 1;case _u:return 4;case Ir:case Wc:return 16;case bu:return 536870912;default:return 16}default:return 16}}var tt=null,ti=null,Sr=null;function Ou(){if(Sr)return Sr;var e,t=ti,n=t.length,r,l="value"in tt?tt.value:tt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Xi(){return!1}function xe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Xi,this.isPropagationStopped=Xi,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=xe(on),Xn=A({},on,{view:0,detail:0}),ld=xe(Xn),bl,Tl,hn,rl=A({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(bl=e.screenX-hn.screenX,Tl=e.screenY-hn.screenY):Tl=bl=0,hn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),Zi=xe(rl),od=A({},rl,{dataTransfer:0}),id=xe(od),ad=A({},Xn,{relatedTarget:0}),zl=xe(ad),ud=A({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=xe(ud),cd=A({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=xe(cd),fd=A({},on,{data:0}),Ji=xe(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function ri(){return gd}var vd=A({},Xn,{key:function(e){if(e.key){var t=pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=xe(vd),xd=A({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qi=xe(xd),wd=A({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),kd=xe(wd),Sd=A({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=xe(Sd),Ed=A({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=xe(Ed),bd=[9,13,27,32],li=We&&"CompositionEvent"in window,En=null;We&&"documentMode"in document&&(En=document.documentMode);var Td=We&&"TextEvent"in window&&!En,Mu=We&&(!li||En&&8<En&&11>=En),ea=" ",ta=!1;function Fu(e,t){switch(e){case"keyup":return bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function zd(e,t){switch(e){case"compositionend":return Du(t);case"keypress":return t.which!==32?null:(ta=!0,ea);case"textInput":return e=t.data,e===ea&&ta?null:e;default:return null}}function Pd(e,t){if(Ot)return e==="compositionend"||!li&&Fu(e,t)?(e=Ou(),Sr=ti=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mu&&t.locale!=="ko"?null:t.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nd[e.type]:t==="textarea"}function Uu(e,t,n,r){gu(r),t=Dr(t,"onChange"),0<t.length&&(n=new ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Fn=null;function Ld(e){Xu(e,0)}function ll(e){var t=Dt(e);if(su(t))return e}function Rd(e,t){if(e==="change")return t}var Bu=!1;if(We){var Pl;if(We){var Nl="oninput"in document;if(!Nl){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Nl=typeof ra.oninput=="function"}Pl=Nl}else Pl=!1;Bu=Pl&&(!document.documentMode||9<document.documentMode)}function la(){_n&&(_n.detachEvent("onpropertychange",Au),Fn=_n=null)}function Au(e){if(e.propertyName==="value"&&ll(Fn)){var t=[];Uu(t,Fn,e,Xo(e)),wu(Ld,t)}}function jd(e,t,n){e==="focusin"?(la(),_n=t,Fn=n,_n.attachEvent("onpropertychange",Au)):e==="focusout"&&la()}function Id(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Fn)}function Od(e,t){if(e==="click")return ll(t)}function Md(e,t){if(e==="input"||e==="change")return ll(t)}function Fd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Fd;function Dn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oa(n)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $u(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dd(e){var t=$u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hu(n.ownerDocument.documentElement,n)){if(r!==null&&oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ia(n,o);var i=ia(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=We&&"documentMode"in document&&11>=document.documentMode,Mt=null,po=null,bn=null,ho=!1;function aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||Mt==null||Mt!==Lr(r)||(r=Mt,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Dn(bn,r)||(bn=r,r=Dr(po,"onSelect"),0<r.length&&(t=new ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mt)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Ll={},Vu={};We&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ol(e){if(Ll[e])return Ll[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vu)return Ll[e]=t[n];return e}var Wu=ol("animationend"),Qu=ol("animationiteration"),Yu=ol("animationstart"),Ku=ol("transitionend"),Gu=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Gu.set(e,t),Nt(t,[e])}for(var Rl=0;Rl<ua.length;Rl++){var jl=ua[Rl],Bd=jl.toLowerCase(),Ad=jl[0].toUpperCase()+jl.slice(1);pt(Bd,"on"+Ad)}pt(Wu,"onAnimationEnd");pt(Qu,"onAnimationIteration");pt(Yu,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ku,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;sa(l,a,c),o=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;sa(l,a,c),o=u}}}if(jr)throw e=uo,jr=!1,uo=null,e}function O(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var r=e+"__bubble";n.has(r)||(Zu(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),Zu(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[cr]){e[cr]=!0,lu.forEach(function(n){n!=="selectionchange"&&(Hd.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Il("selectionchange",!1,t))}}function Zu(e,t,n,r){switch(Iu(t)){case 1:var l=nd;break;case 4:l=rd;break;default:l=ei}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=wt(a),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}a=a.parentNode}}r=r.return}wu(function(){var c=o,m=Xo(n),h=[];e:{var p=Gu.get(e);if(p!==void 0){var y=ni,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":y=yd;break;case"focusin":x="focus",y=zl;break;case"focusout":x="blur",y=zl;break;case"beforeblur":case"afterblur":y=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kd;break;case Wu:case Qu:case Yu:y=sd;break;case Ku:y=Cd;break;case"scroll":y=ld;break;case"wheel":y=_d;break;case"copy":case"cut":case"paste":y=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qi}var w=(t&4)!==0,F=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var s=c,f;s!==null;){f=s;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=jn(s,d),g!=null&&w.push(Bn(s,g,f)))),F)break;s=s.return}0<w.length&&(p=new y(p,x,null,n,m),h.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==oo&&(x=n.relatedTarget||n.fromElement)&&(wt(x)||x[Qe]))break e;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?wt(x):null,x!==null&&(F=Lt(x),x!==F||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=Zi,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(w=qi,g="onPointerLeave",d="onPointerEnter",s="pointer"),F=y==null?p:Dt(y),f=x==null?p:Dt(x),p=new w(g,s+"leave",y,n,m),p.target=F,p.relatedTarget=f,g=null,wt(m)===c&&(w=new w(d,s+"enter",x,n,m),w.target=f,w.relatedTarget=F,g=w),F=g,y&&x)t:{for(w=y,d=x,s=0,f=w;f;f=Rt(f))s++;for(f=0,g=d;g;g=Rt(g))f++;for(;0<s-f;)w=Rt(w),s--;for(;0<f-s;)d=Rt(d),f--;for(;s--;){if(w===d||d!==null&&w===d.alternate)break t;w=Rt(w),d=Rt(d)}w=null}else w=null;y!==null&&ca(h,p,y,w,!1),x!==null&&F!==null&&ca(h,F,x,w,!0)}}e:{if(p=c?Dt(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Rd;else if(na(p))if(Bu)S=Md;else{S=Id;var E=jd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Od);if(S&&(S=S(e,c))){Uu(h,S,n,m);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&eo(p,"number",p.value)}switch(E=c?Dt(c):window,e){case"focusin":(na(E)||E.contentEditable==="true")&&(Mt=E,po=c,bn=null);break;case"focusout":bn=po=Mt=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,aa(h,n,m);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":aa(h,n,m)}var _;if(li)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ot?Fu(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Mu&&n.locale!=="ko"&&(Ot||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ot&&(_=Ou()):(tt=m,ti="value"in tt?tt.value:tt.textContent,Ot=!0)),E=Dr(c,b),0<E.length&&(b=new Ji(b,e,null,n,m),h.push({event:b,listeners:E}),_?b.data=_:(_=Du(n),_!==null&&(b.data=_)))),(_=Td?zd(e,n):Pd(e,n))&&(c=Dr(c,"onBeforeInput"),0<c.length&&(m=new Ji("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=_))}Xu(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=jn(e,n),o!=null&&r.unshift(Bn(e,o,l)),o=jn(e,t),o!=null&&r.push(Bn(e,o,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ca(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=jn(n,o),u!=null&&i.unshift(Bn(n,u,a))):l||(u=jn(n,o),u!=null&&i.push(Bn(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $d=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Vd,"")}function dr(e,t,n){if(t=da(t),da(e)!==t&&n)throw Error(v(425))}function Ur(){}var mo=null,go=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Yd)}:yo;function Yd(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Mn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Mn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,An="__reactProps$"+an,Qe="__reactContainer$"+an,xo="__reactEvents$"+an,Kd="__reactListeners$"+an,Gd="__reactHandles$"+an;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pa(e);e!==null;){if(n=e[Fe])return n;e=pa(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Fe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function il(e){return e[An]||null}var wo=[],Ut=-1;function ht(e){return{current:e}}function M(e){0>Ut||(e.current=wo[Ut],wo[Ut]=null,Ut--)}function I(e,t){Ut++,wo[Ut]=e.current,e.current=t}var ft={},le=ht(ft),de=ht(!1),_t=ft;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Br(){M(de),M(le)}function ha(e,t,n){if(le.current!==ft)throw Error(v(168));I(le,t),I(de,n)}function Ju(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,jc(e)||"Unknown",l));return A({},n,r)}function Ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,_t=le.current,I(le,e),I(de,de.current),!0}function ma(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Ju(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,M(de),M(le),I(le,e)):M(de),I(de,n)}var Ae=null,al=!1,Fl=!1;function qu(e){Ae===null?Ae=[e]:Ae.push(e)}function Xd(e){al=!0,qu(e)}function mt(){if(!Fl&&Ae!==null){Fl=!0;var e=0,t=j;try{var n=Ae;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ae=null,al=!1}catch(l){throw Ae!==null&&(Ae=Ae.slice(e+1)),Eu(Zo,mt),l}finally{j=t,Fl=!1}}return null}var Bt=[],At=0,Hr=null,$r=0,we=[],ke=0,bt=null,He=1,$e="";function yt(e,t){Bt[At++]=$r,Bt[At++]=Hr,Hr=e,$r=t}function es(e,t,n){we[ke++]=He,we[ke++]=$e,we[ke++]=bt,bt=e;var r=He;e=$e;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var o=32-Re(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,He=1<<32-Re(t)+l|n<<l|r,$e=o+e}else He=1<<o|n<<l|r,$e=e}function ii(e){e.return!==null&&(yt(e,1),es(e,1,0))}function ai(e){for(;e===Hr;)Hr=Bt[--At],Bt[At]=null,$r=Bt[--At],Bt[At]=null;for(;e===bt;)bt=we[--ke],we[ke]=null,$e=we[--ke],we[ke]=null,He=we[--ke],we[ke]=null}var ge=null,me=null,D=!1,Ne=null;function ts(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ga(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,me=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:He,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,me=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(D){var t=me;if(t){var n=t;if(!ga(e,t)){if(ko(e))throw Error(v(418));t=it(n.nextSibling);var r=ge;t&&ga(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(ko(e))throw Error(v(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fr(e){if(e!==ge)return!1;if(!D)return va(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=me)){if(ko(e))throw ns(),Error(v(418));for(;t;)ts(e,t),t=it(t.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ge?it(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=me;e;)e=it(e.nextSibling)}function qt(){me=ge=null,D=!1}function ui(e){Ne===null?Ne=[e]:Ne.push(e)}var Zd=Ge.ReactCurrentBatchConfig;function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){var t=e._init;return t(e._payload)}function rs(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function l(d,s){return d=ct(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,g){return s===null||s.tag!==6?(s=Vl(f,d.mode,g),s.return=d,s):(s=l(s,f),s.return=d,s)}function u(d,s,f,g){var S=f.type;return S===It?m(d,s,f.props.children,g,f.key):s!==null&&(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&ya(S)===s.type)?(g=l(s,f.props),g.ref=mn(d,s,f),g.return=d,g):(g=Nr(f.type,f.key,f.props,null,d.mode,g),g.ref=mn(d,s,f),g.return=d,g)}function c(d,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Wl(f,d.mode,g),s.return=d,s):(s=l(s,f.children||[]),s.return=d,s)}function m(d,s,f,g,S){return s===null||s.tag!==7?(s=Et(f,d.mode,g,S),s.return=d,s):(s=l(s,f),s.return=d,s)}function h(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Vl(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case nr:return f=Nr(s.type,s.key,s.props,null,d.mode,f),f.ref=mn(d,null,s),f.return=d,f;case jt:return s=Wl(s,d.mode,f),s.return=d,s;case Ze:var g=s._init;return h(d,g(s._payload),f)}if(xn(s)||cn(s))return s=Et(s,d.mode,f,null),s.return=d,s;pr(d,s)}return null}function p(d,s,f,g){var S=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===S?u(d,s,f,g):null;case jt:return f.key===S?c(d,s,f,g):null;case Ze:return S=f._init,p(d,s,S(f._payload),g)}if(xn(f)||cn(f))return S!==null?null:m(d,s,f,g,null);pr(d,f)}return null}function y(d,s,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(s,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nr:return d=d.get(g.key===null?f:g.key)||null,u(s,d,g,S);case jt:return d=d.get(g.key===null?f:g.key)||null,c(s,d,g,S);case Ze:var E=g._init;return y(d,s,f,E(g._payload),S)}if(xn(g)||cn(g))return d=d.get(f)||null,m(s,d,g,S,null);pr(s,g)}return null}function x(d,s,f,g){for(var S=null,E=null,_=s,b=s=0,$=null;_!==null&&b<f.length;b++){_.index>b?($=_,_=null):$=_.sibling;var L=p(d,_,f[b],g);if(L===null){_===null&&(_=$);break}e&&_&&L.alternate===null&&t(d,_),s=o(L,s,b),E===null?S=L:E.sibling=L,E=L,_=$}if(b===f.length)return n(d,_),D&&yt(d,b),S;if(_===null){for(;b<f.length;b++)_=h(d,f[b],g),_!==null&&(s=o(_,s,b),E===null?S=_:E.sibling=_,E=_);return D&&yt(d,b),S}for(_=r(d,_);b<f.length;b++)$=y(_,d,b,f[b],g),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?b:$.key),s=o($,s,b),E===null?S=$:E.sibling=$,E=$);return e&&_.forEach(function(be){return t(d,be)}),D&&yt(d,b),S}function w(d,s,f,g){var S=cn(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var E=S=null,_=s,b=s=0,$=null,L=f.next();_!==null&&!L.done;b++,L=f.next()){_.index>b?($=_,_=null):$=_.sibling;var be=p(d,_,L.value,g);if(be===null){_===null&&(_=$);break}e&&_&&be.alternate===null&&t(d,_),s=o(be,s,b),E===null?S=be:E.sibling=be,E=be,_=$}if(L.done)return n(d,_),D&&yt(d,b),S;if(_===null){for(;!L.done;b++,L=f.next())L=h(d,L.value,g),L!==null&&(s=o(L,s,b),E===null?S=L:E.sibling=L,E=L);return D&&yt(d,b),S}for(_=r(d,_);!L.done;b++,L=f.next())L=y(_,d,b,L.value,g),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?b:L.key),s=o(L,s,b),E===null?S=L:E.sibling=L,E=L);return e&&_.forEach(function(un){return t(d,un)}),D&&yt(d,b),S}function F(d,s,f,g){if(typeof f=="object"&&f!==null&&f.type===It&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var S=f.key,E=s;E!==null;){if(E.key===S){if(S=f.type,S===It){if(E.tag===7){n(d,E.sibling),s=l(E,f.props.children),s.return=d,d=s;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&ya(S)===E.type){n(d,E.sibling),s=l(E,f.props),s.ref=mn(d,E,f),s.return=d,d=s;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===It?(s=Et(f.props.children,d.mode,g,f.key),s.return=d,d=s):(g=Nr(f.type,f.key,f.props,null,d.mode,g),g.ref=mn(d,s,f),g.return=d,d=g)}return i(d);case jt:e:{for(E=f.key;s!==null;){if(s.key===E)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=l(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=Wl(f,d.mode,g),s.return=d,d=s}return i(d);case Ze:return E=f._init,F(d,s,E(f._payload),g)}if(xn(f))return x(d,s,f,g);if(cn(f))return w(d,s,f,g);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=l(s,f),s.return=d,d=s):(n(d,s),s=Vl(f,d.mode,g),s.return=d,d=s),i(d)):n(d,s)}return F}var en=rs(!0),ls=rs(!1),Vr=ht(null),Wr=null,Ht=null,si=null;function ci(){si=Ht=Wr=null}function di(e){var t=Vr.current;M(Vr),e._currentValue=t}function Co(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Wr=e,si=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Wr===null)throw Error(v(308));Ht=e,Wr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var kt=null;function fi(e){kt===null?kt=[e]:kt.push(e)}function os(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,fi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}function xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;Je=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==i&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,m=c=u=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(p=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){h=x.call(y,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(y,h,p):x,p==null)break e;h=A({},h,p);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,u=h):m=m.next=y,i|=p;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;p=a,a=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(m===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);zt|=i,e.lanes=i,e.memoizedState=h}}function wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Jn={},Ue=ht(Jn),Hn=ht(Jn),$n=ht(Jn);function St(e){if(e===Jn)throw Error(v(174));return e}function hi(e,t){switch(I($n,t),I(Hn,e),I(Ue,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}M(Ue),I(Ue,t)}function tn(){M(Ue),M(Hn),M($n)}function as(e){St($n.current);var t=St(Ue.current),n=no(t,e.type);t!==n&&(I(Hn,e),I(Ue,n))}function mi(e){Hn.current===e&&(M(Ue),M(Hn))}var U=ht(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function gi(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var _r=Ge.ReactCurrentDispatcher,Ul=Ge.ReactCurrentBatchConfig,Tt=0,B=null,Y=null,X=null,Kr=!1,Tn=!1,Vn=0,Jd=0;function te(){throw Error(v(321))}function vi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function yi(e,t,n,r,l,o){if(Tt=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?nf:rf,e=n(r,l),Tn){o=0;do{if(Tn=!1,Vn=0,25<=o)throw Error(v(301));o+=1,X=Y=null,t.updateQueue=null,_r.current=lf,e=n(r,l)}while(Tn)}if(_r.current=Gr,t=Y!==null&&Y.next!==null,Tt=0,X=Y=B=null,Kr=!1,t)throw Error(v(300));return e}function xi(){var e=Vn!==0;return Vn=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?B.memoizedState=X=e:X=X.next=e,X}function _e(){if(Y===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=X===null?B.memoizedState:X.next;if(t!==null)X=t,Y=e;else{if(e===null)throw Error(v(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},X===null?B.memoizedState=X=e:X=X.next=e}return X}function Wn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=_e(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,u=null,c=o;do{var m=c.lane;if((Tt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,i=r):u=u.next=h,B.lanes|=m,zt|=m}c=c.next}while(c!==null&&c!==o);u===null?i=r:u.next=a,Ie(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,B.lanes|=o,zt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=_e(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ie(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function us(){}function ss(e,t){var n=B,r=_e(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,wi(fs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Qn(9,ds.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(v(349));Tt&30||cs(n,t,l)}return l}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ds(e,t,n,r){t.value=n,t.getSnapshot=r,ps(t)&&hs(e)}function fs(e,t,n){return n(function(){ps(t)&&hs(e)})}function ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function hs(e){var t=Ye(e,1);t!==null&&je(t,e,1,-1)}function ka(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t.queue=e,e=e.dispatch=tf.bind(null,B,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ms(){return _e().memoizedState}function br(e,t,n,r){var l=Me();B.flags|=e,l.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=_e();r=r===void 0?null:r;var o=void 0;if(Y!==null){var i=Y.memoizedState;if(o=i.destroy,r!==null&&vi(r,i.deps)){l.memoizedState=Qn(t,n,o,r);return}}B.flags|=e,l.memoizedState=Qn(1|t,n,o,r)}function Sa(e,t){return br(8390656,8,e,t)}function wi(e,t){return ul(2048,8,e,t)}function gs(e,t){return ul(4,2,e,t)}function vs(e,t){return ul(4,4,e,t)}function ys(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,ys.bind(null,t,e),n)}function ki(){}function ws(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ks(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ss(e,t,n){return Tt&21?(Ie(n,t)||(n=Tu(),B.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function qd(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{j=n,Ul.transition=r}}function Cs(){return _e().memoizedState}function ef(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e))_s(t,n);else if(n=os(e,t,n,r),n!==null){var l=ie();je(n,e,r,l),bs(n,t,r)}}function tf(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))_s(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ie(a,i)){var u=t.interleaved;u===null?(l.next=l,fi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=os(e,t,l,r),n!==null&&(l=ie(),je(n,e,r,l),bs(n,t,r))}}function Es(e){var t=e.alternate;return e===B||t!==null&&t===B}function _s(e,t){Tn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}var Gr={readContext:Ee,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nf={readContext:Ee,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ef.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:ka,useDebugValue:ki,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=ka(!1),t=e[0];return e=qd.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Me();if(D){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Z===null)throw Error(v(349));Tt&30||cs(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Sa(fs.bind(null,r,o,e),[e]),r.flags|=2048,Qn(9,ds.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Me(),t=Z.identifierPrefix;if(D){var n=$e,r=He;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:ws,useContext:Ee,useEffect:wi,useImperativeHandle:xs,useInsertionEffect:gs,useLayoutEffect:vs,useMemo:ks,useReducer:Bl,useRef:ms,useState:function(){return Bl(Wn)},useDebugValue:ki,useDeferredValue:function(e){var t=_e();return Ss(t,Y.memoizedState,e)},useTransition:function(){var e=Bl(Wn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:us,useSyncExternalStore:ss,useId:Cs,unstable_isNewReconciler:!1},lf={readContext:Ee,useCallback:ws,useContext:Ee,useEffect:wi,useImperativeHandle:xs,useInsertionEffect:gs,useLayoutEffect:vs,useMemo:ks,useReducer:Al,useRef:ms,useState:function(){return Al(Wn)},useDebugValue:ki,useDeferredValue:function(e){var t=_e();return Y===null?t.memoizedState=e:Ss(t,Y.memoizedState,e)},useTransition:function(){var e=Al(Wn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:us,useSyncExternalStore:ss,useId:Cs,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),l=st(e),o=Ve(r,l);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(je(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),l=st(e),o=Ve(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(je(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=st(e),l=Ve(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(je(t,e,r,n),Er(t,e,r))}};function Ca(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Dn(n,r)||!Dn(l,o):!0}function Ts(e,t,n){var r=!1,l=ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(l=fe(t)?_t:le.current,r=t.contextTypes,o=(r=r!=null)?Jt(e,l):ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function _o(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},pi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ee(o):(o=fe(t)?_t:le.current,l.context=Jt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Rc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function zs(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Mo=r),bo(e,t)},n}function Ps(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function _a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wf.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ta(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var af=Ge.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?ls(t,null,n,r):en(t,e.child,n,r)}function za(e,t,n,r,l){n=n.render;var o=t.ref;return Gt(t,l),r=yi(e,t,n,r,o,l),n=xi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(D&&n&&ii(t),t.flags|=1,oe(e,t,r,l),t.child)}function Pa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Pi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ns(e,t,o,r,l)):(e=Nr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dn,n(i,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ns(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Dn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return To(e,t,n,r,l)}function Ls(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Vt,he),he|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Vt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(Vt,he),he|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(Vt,he),he|=r;return oe(e,t,l,n),t.child}function Rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function To(e,t,n,r,l){var o=fe(n)?_t:le.current;return o=Jt(t,o),Gt(t,l),n=yi(e,t,n,r,o,l),r=xi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(D&&r&&ii(t),t.flags|=1,oe(e,t,n,l),t.child)}function Na(e,t,n,r,l){if(fe(n)){var o=!0;Ar(t)}else o=!1;if(Gt(t,l),t.stateNode===null)Tr(e,t),Ts(t,n,r),_o(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=fe(n)?_t:le.current,c=Jt(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ea(t,i,r,c),Je=!1;var p=t.memoizedState;i.state=p,Qr(t,r,i,l),u=t.memoizedState,a!==r||p!==u||de.current||Je?(typeof m=="function"&&(Eo(t,n,m,r),u=t.memoizedState),(a=Je||Ca(t,n,a,r,p,u,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,is(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ze(t.type,a),i.props=c,h=t.pendingProps,p=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=fe(n)?_t:le.current,u=Jt(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||p!==u)&&Ea(t,i,r,u),Je=!1,p=t.memoizedState,i.state=p,Qr(t,r,i,l);var x=t.memoizedState;a!==h||p!==x||de.current||Je?(typeof y=="function"&&(Eo(t,n,y,r),x=t.memoizedState),(c=Je||Ca(t,n,c,r,p,x,u)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zo(e,t,n,r,o,l)}function zo(e,t,n,r,l,o){Rs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ma(t,n,!1),Ke(e,t,o);r=t.stateNode,af.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,o),t.child=en(t,null,a,o)):oe(e,t,a,o),t.memoizedState=r.state,l&&ma(t,n,!0),t.child}function js(e){var t=e.stateNode;t.pendingContext?ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ha(e,t.context,!1),hi(e,t.containerInfo)}function La(e,t,n,r,l){return qt(),ui(l),t.flags|=256,oe(e,t,n,r),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(U,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=fl(i,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=No(n),t.memoizedState=Po,e):Si(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return uf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=ct(a,o):(o=Et(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Po,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ui(r),en(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(v(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),o=Et(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&en(t,e.child,null,i),t.child.memoizedState=No(i),t.memoizedState=Po,o);if(!(t.mode&1))return hr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Hl(o,r,void 0),hr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ce||a){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),je(r,e,l,-1))}return zi(),r=Hl(Error(v(421))),hr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,me=it(l.nextSibling),ge=t,D=!0,Ne=null,e!==null&&(we[ke++]=He,we[ke++]=$e,we[ke++]=bt,He=e.id,$e=e.overflow,bt=t),t=Si(t,r.children),t.flags|=4096,t)}function Ra(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Co(e.return,t,n)}function $l(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Os(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ra(e,n,t);else if(e.tag===19)Ra(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$l(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:js(t),qt();break;case 5:as(t);break;case 1:fe(t.type)&&Ar(t);break;case 4:hi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Is(e,t,n):(I(U,U.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Os(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ls(e,t,n)}return Ke(e,t,n)}var Ms,Lo,Fs,Ds;Ms=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lo=function(){};Fs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ue.current);var o=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),o=[];break;case"select":l=A({},l,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ro(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ln.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&O("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cf(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Br(),ne(t),null;case 3:return r=t.stateNode,tn(),M(de),M(le),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ne!==null&&(Uo(Ne),Ne=null))),Lo(e,t),ne(t),null;case 5:mi(t);var l=St($n.current);if(n=t.type,e!==null&&t.stateNode!=null)Fs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=St(Ue.current),fr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Fe]=t,r[An]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ai(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":$i(r,o),O("invalid",r)}ro(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):Ln.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&O("scroll",r)}switch(n){case"input":rr(r),Hi(r,o,!0);break;case"textarea":rr(r),Vi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Fe]=t,e[An]=r,Ms(e,t,!1,!1),t.stateNode=e;e:{switch(i=lo(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ai(e,r),l=Jl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=A({},r,{value:void 0}),O("invalid",e);break;case"textarea":$i(e,r),l=to(e,r),O("invalid",e);break;default:l=r}ro(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?mu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Rn(e,u):typeof u=="number"&&Rn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ln.hasOwnProperty(o)?u!=null&&o==="onScroll"&&O("scroll",e):u!=null&&Qo(e,o,u,i))}switch(n){case"input":rr(e),Hi(e,r,!1);break;case"textarea":rr(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Ds(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=St($n.current),St(Ue.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(M(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&me!==null&&t.mode&1&&!(t.flags&128))ns(),qt(),t.flags|=98560,o=!1;else if(o=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Fe]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Ne!==null&&(Uo(Ne),Ne=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):zi())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Lo(e,t),e===null&&Un(t.stateNode.containerInfo),ne(t),null;case 10:return di(t.type._context),ne(t),null;case 17:return fe(t.type)&&Br(),ne(t),null;case 19:if(M(U),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)gn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&W()>rn&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!D)return ne(t),null}else 2*W()-o.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=W(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ti(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function df(e,t){switch(ai(t),t.tag){case 1:return fe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),M(de),M(le),gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mi(t),null;case 13:if(M(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(U),null;case 4:return tn(),null;case 10:return di(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var mr=!1,re=!1,ff=typeof WeakSet=="function"?WeakSet:Set,k=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){H(e,t,r)}}var ja=!1;function pf(e,t){if(mo=Mr,e=$u(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var y;h!==n||l!==0&&h.nodeType!==3||(a=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++c===l&&(a=i),p===o&&++m===r&&(u=i),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Mr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,F=x.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:ze(t.type,w),F);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return x=ja,ja=!1,x}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ro(t,n,o)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Us(e){var t=e.alternate;t!==null&&(e.alternate=null,Us(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[An],delete t[xo],delete t[Kd],delete t[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function Ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var J=null,Pe=!1;function Xe(e,t,n){for(n=n.child;n!==null;)As(e,t,n),n=n.sibling}function As(e,t,n){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:re||$t(n,t);case 6:var r=J,l=Pe;J=null,Xe(e,t,n),J=r,Pe=l,J!==null&&(Pe?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Pe?(e=J,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Mn(e)):Ml(J,n.stateNode));break;case 4:r=J,l=Pe,J=n.stateNode.containerInfo,Pe=!0,Xe(e,t,n),J=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ro(n,t,i),l=l.next}while(l!==r)}Xe(e,t,n);break;case 1:if(!re&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Oa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ff),t.forEach(function(r){var l=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Pe=!1;break e;case 3:J=a.stateNode.containerInfo,Pe=!0;break e;case 4:J=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(J===null)throw Error(v(160));As(o,i,l),J=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hs(t,e),t=t.sibling}function Hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Oe(e),r&4){try{zn(3,e,e.return),cl(3,e)}catch(w){H(e,e.return,w)}try{zn(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Te(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(Te(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(w){H(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cu(l,o),lo(a,i);var c=lo(a,o);for(i=0;i<u.length;i+=2){var m=u[i],h=u[i+1];m==="style"?mu(l,h):m==="dangerouslySetInnerHTML"?pu(l,h):m==="children"?Rn(l,h):Qo(l,m,h,c)}switch(a){case"input":ql(l,o);break;case"textarea":du(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Wt(l,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Wt(l,!!o.multiple,o.defaultValue,!0):Wt(l,!!o.multiple,o.multiple?[]:"",!1))}l[An]=o}catch(w){H(e,e.return,w)}}break;case 6:if(Te(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){H(e,e.return,w)}}break;case 3:if(Te(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Te(t,e),Oe(e);break;case 13:Te(t,e),Oe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(_i=W())),r&4&&Oa(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||m,Te(t,e),re=c):Te(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(k=e,m=e.child;m!==null;){for(h=k=m;k!==null;){switch(p=k,y=p.child,p.tag){case 0:case 11:case 14:case 15:zn(4,p,p.return);break;case 1:$t(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:$t(p,p.return);break;case 22:if(p.memoizedState!==null){Fa(h);continue}}y!==null?(y.return=p,k=y):Fa(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=hu("display",i))}catch(w){H(e,e.return,w)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){H(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Te(t,e),Oe(e),r&4&&Oa(e);break;case 21:break;default:Te(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bs(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var o=Ia(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ia(e);Io(e,a,i);break;default:throw Error(v(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hf(e,t,n){k=e,$s(e)}function $s(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||mr;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||re;a=mr;var c=re;if(mr=i,(re=u)&&!c)for(k=l;k!==null;)i=k,u=i.child,i.tag===22&&i.memoizedState!==null?Da(l):u!==null?(u.return=i,k=u):Da(l);for(;o!==null;)k=o,$s(o),o=o.sibling;k=l,mr=a,re=c}Ma(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):Ma(e)}}function Ma(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wa(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Mn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&jo(t)}catch(p){H(t,t.return,p)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Fa(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Da(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var o=t.return;try{jo(t)}catch(u){H(t,o,u)}break;case 5:var i=t.return;try{jo(t)}catch(u){H(t,i,u)}}}catch(u){H(t,t.return,u)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var mf=Math.ceil,Xr=Ge.ReactCurrentDispatcher,Ci=Ge.ReactCurrentOwner,Ce=Ge.ReactCurrentBatchConfig,R=0,Z=null,Q=null,q=0,he=0,Vt=ht(0),K=0,Yn=null,zt=0,dl=0,Ei=0,Pn=null,se=null,_i=0,rn=1/0,Be=null,Zr=!1,Mo=null,ut=null,gr=!1,nt=null,Jr=0,Nn=0,Fo=null,zr=-1,Pr=0;function ie(){return R&6?W():zr!==-1?zr:zr=W()}function st(e){return e.mode&1?R&2&&q!==0?q&-q:Zd.transition!==null?(Pr===0&&(Pr=Tu()),Pr):(e=j,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function je(e,t,n,r){if(50<Nn)throw Nn=0,Fo=null,Error(v(185));Gn(e,n,r),(!(R&2)||e!==Z)&&(e===Z&&(!(R&2)&&(dl|=n),K===4&&et(e,q)),pe(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=W()+500,al&&mt()))}function pe(e,t){var n=e.callbackNode;Zc(e,t);var r=Or(e,e===Z?q:0);if(r===0)n!==null&&Yi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yi(n),t===1)e.tag===0?Xd(Ua.bind(null,e)):qu(Ua.bind(null,e)),Qd(function(){!(R&6)&&mt()}),n=null;else{switch(zu(r)){case 1:n=Zo;break;case 4:n=_u;break;case 16:n=Ir;break;case 536870912:n=bu;break;default:n=Ir}n=Zs(n,Vs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vs(e,t){if(zr=-1,Pr=0,R&6)throw Error(v(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Or(e,e===Z?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=R;R|=2;var o=Qs();(Z!==e||q!==t)&&(Be=null,rn=W()+500,Ct(e,t));do try{yf();break}catch(a){Ws(e,a)}while(!0);ci(),Xr.current=o,R=l,Q!==null?t=0:(Z=null,q=0,t=K)}if(t!==0){if(t===2&&(l=so(e),l!==0&&(r=l,t=Do(e,l))),t===1)throw n=Yn,Ct(e,0),et(e,r),pe(e,W()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!gf(l)&&(t=qr(e,r),t===2&&(o=so(e),o!==0&&(r=o,t=Do(e,o))),t===1))throw n=Yn,Ct(e,0),et(e,r),pe(e,W()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:xt(e,se,Be);break;case 3:if(et(e,r),(r&130023424)===r&&(t=_i+500-W(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(xt.bind(null,e,se,Be),t);break}xt(e,se,Be);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Re(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=yo(xt.bind(null,e,se,Be),r);break}xt(e,se,Be);break;case 5:xt(e,se,Be);break;default:throw Error(v(329))}}}return pe(e,W()),e.callbackNode===n?Vs.bind(null,e):null}function Do(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=qr(e,t),e!==2&&(t=se,se=n,t!==null&&Uo(t)),e}function Uo(e){se===null?se=e:se.push.apply(se,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ei,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Ua(e){if(R&6)throw Error(v(327));Xt();var t=Or(e,0);if(!(t&1))return pe(e,W()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=so(e);r!==0&&(t=r,n=Do(e,r))}if(n===1)throw n=Yn,Ct(e,0),et(e,t),pe(e,W()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,se,Be),pe(e,W()),null}function bi(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=W()+500,al&&mt())}}function Pt(e){nt!==null&&nt.tag===0&&!(R&6)&&Xt();var t=R;R|=1;var n=Ce.transition,r=j;try{if(Ce.transition=null,j=1,e)return e()}finally{j=r,Ce.transition=n,R=t,!(R&6)&&mt()}}function Ti(){he=Vt.current,M(Vt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:tn(),M(de),M(le),gi();break;case 5:mi(r);break;case 4:tn();break;case 13:M(U);break;case 19:M(U);break;case 10:di(r.type._context);break;case 22:case 23:Ti()}n=n.return}if(Z=e,Q=e=ct(e.current,null),q=he=t,K=0,Yn=null,Ei=dl=zt=0,se=Pn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}kt=null}return e}function Ws(e,t){do{var n=Q;try{if(ci(),_r.current=Gr,Kr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(Tt=0,X=Y=B=null,Tn=!1,Vn=0,Ci.current=null,n===null||n.return===null){K=1,Yn=t,Q=null;break}e:{var o=e,i=n.return,a=n,u=t;if(t=q,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=ba(i);if(y!==null){y.flags&=-257,Ta(y,i,a,o,t),y.mode&1&&_a(o,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if(!(t&1)){_a(o,c,t),zi();break e}u=Error(v(426))}}else if(D&&a.mode&1){var F=ba(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ta(F,i,a,o,t),ui(nn(u,a));break e}}o=u=nn(u,a),K!==4&&(K=2),Pn===null?Pn=[o]:Pn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=zs(o,u,t);xa(o,d);break e;case 1:a=u;var s=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Ps(o,a,t);xa(o,g);break e}}o=o.return}while(o!==null)}Ks(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Qs(){var e=Xr.current;return Xr.current=Gr,e===null?Gr:e}function zi(){(K===0||K===3||K===2)&&(K=4),Z===null||!(zt&268435455)&&!(dl&268435455)||et(Z,q)}function qr(e,t){var n=R;R|=2;var r=Qs();(Z!==e||q!==t)&&(Be=null,Ct(e,t));do try{vf();break}catch(l){Ws(e,l)}while(!0);if(ci(),R=n,Xr.current=r,Q!==null)throw Error(v(261));return Z=null,q=0,K}function vf(){for(;Q!==null;)Ys(Q)}function yf(){for(;Q!==null&&!Hc();)Ys(Q)}function Ys(e){var t=Xs(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Ks(e):Q=t,Ci.current=null}function Ks(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(n=cf(n,t,he),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function xt(e,t,n){var r=j,l=Ce.transition;try{Ce.transition=null,j=1,xf(e,t,n,r)}finally{Ce.transition=l,j=r}return null}function xf(e,t,n,r){do Xt();while(nt!==null);if(R&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jc(e,o),e===Z&&(Q=Z=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Zs(Ir,function(){return Xt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=j;j=1;var a=R;R|=4,Ci.current=null,pf(e,n),Hs(n,e),Dd(go),Mr=!!mo,go=mo=null,e.current=n,hf(n),$c(),R=a,j=i,Ce.transition=o}else e.current=n;if(gr&&(gr=!1,nt=e,Jr=l),o=e.pendingLanes,o===0&&(ut=null),Qc(n.stateNode),pe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Mo,Mo=null,e;return Jr&1&&e.tag!==0&&Xt(),o=e.pendingLanes,o&1?e===Fo?Nn++:(Nn=0,Fo=e):Nn=0,mt(),null}function Xt(){if(nt!==null){var e=zu(Jr),t=Ce.transition,n=j;try{if(Ce.transition=null,j=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Jr=0,R&6)throw Error(v(331));var l=R;for(R|=4,k=e.current;k!==null;){var o=k,i=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:zn(8,m,o)}var h=m.child;if(h!==null)h.return=m,k=h;else for(;k!==null;){m=k;var p=m.sibling,y=m.return;if(Us(m),m===c){k=null;break}if(p!==null){p.return=y,k=p;break}k=y}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var F=w.sibling;w.sibling=null,w=F}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,k=i;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,k=d;break e}k=o.return}}var s=e.current;for(k=s;k!==null;){i=k;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,k=f;else e:for(i=s;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(S){H(a,a.return,S)}if(a===i){k=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,k=g;break e}k=a.return}}if(R=l,mt(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{j=n,Ce.transition=t}}return!1}function Ba(e,t,n){t=nn(n,t),t=zs(e,t,1),e=at(e,t,1),t=ie(),e!==null&&(Gn(e,1,t),pe(e,t))}function H(e,t,n){if(e.tag===3)Ba(e,e,n);else for(;t!==null;){if(t.tag===3){Ba(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=nn(n,e),e=Ps(t,e,1),t=at(t,e,1),e=ie(),t!==null&&(Gn(t,1,e),pe(t,e));break}}t=t.return}}function wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(q&n)===n&&(K===4||K===3&&(q&130023424)===q&&500>W()-_i?Ct(e,0):Ei|=n),pe(e,t)}function Gs(e,t){t===0&&(e.mode&1?(t=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):t=1);var n=ie();e=Ye(e,t),e!==null&&(Gn(e,t,n),pe(e,n))}function kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gs(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Gs(e,n)}var Xs;Xs=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,sf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,D&&t.flags&1048576&&es(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var l=Jt(t,le.current);Gt(t,n),l=yi(null,t,r,e,l,n);var o=xi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Ar(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,pi(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,_o(t,r,e,n),t=zo(null,t,r,!0,o,n)):(t.tag=0,D&&o&&ii(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ef(r),e=ze(r,e),l){case 0:t=To(null,t,r,e,n);break e;case 1:t=Na(null,t,r,e,n);break e;case 11:t=za(null,t,r,e,n);break e;case 14:t=Pa(null,t,r,ze(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),To(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Na(e,t,r,l,n);case 3:e:{if(js(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,l=o.element,is(e,t),Qr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=nn(Error(v(423)),t),t=La(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(v(424)),t),t=La(e,t,r,n,l);break e}else for(me=it(t.stateNode.containerInfo.firstChild),ge=t,D=!0,Ne=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return as(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,vo(r,l)?i=null:o!==null&&vo(r,o)&&(t.flags|=32),Rs(e,t),oe(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Is(e,t,n);case 4:return hi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),za(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,I(Vr,r._currentValue),r._currentValue=i,o!==null)if(Ie(o.value,i)){if(o.children===l.children&&!de.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ve(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Co(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Co(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ee(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),Pa(e,t,r,l,n);case 15:return Ns(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Tr(e,t),t.tag=1,fe(r)?(e=!0,Ar(t)):e=!1,Gt(t,n),Ts(t,r,l),_o(t,r,l,n),zo(null,t,r,!0,e,n);case 19:return Os(e,t,n);case 22:return Ls(e,t,n)}throw Error(v(156,t.tag))};function Zs(e,t){return Eu(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Cf(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return Pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ko)return 11;if(e===Go)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Pi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case It:return Et(n.children,l,o,t);case Yo:i=8,l|=8;break;case Kl:return e=Se(12,n,t,l|2),e.elementType=Kl,e.lanes=o,e;case Gl:return e=Se(13,n,t,l),e.elementType=Gl,e.lanes=o,e;case Xl:return e=Se(19,n,t,l),e.elementType=Xl,e.lanes=o,e;case au:return fl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ou:i=10;break e;case iu:i=9;break e;case Ko:i=11;break e;case Go:i=14;break e;case Ze:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Se(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=au,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ni(e,t,n,r,l,o,i,a,u){return e=new _f(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Se(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(o),e}function bf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Js(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(fe(n))return Ju(e,n,t)}return t}function qs(e,t,n,r,l,o,i,a,u){return e=Ni(n,r,!0,e,l,o,i,a,u),e.context=Js(null),n=e.current,r=ie(),l=st(n),o=Ve(r,l),o.callback=t??null,at(n,o,l),e.current.lanes=l,Gn(e,l,r),pe(e,r),e}function pl(e,t,n,r){var l=t.current,o=ie(),i=st(l);return n=Js(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,i),e!==null&&(je(e,l,i,o),Er(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Aa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Li(e,t){Aa(e,t),(e=e.alternate)&&Aa(e,t)}function Tf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ri(e){this._internalRoot=e}hl.prototype.render=Ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));pl(e,t,null,null)};hl.prototype.unmount=Ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){pl(null,e,null,null)}),t[Qe]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&ju(e)}};function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ha(){}function zf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=el(i);o.call(c)}}var i=qs(t,r,e,0,null,!1,!1,"",Ha);return e._reactRootContainer=i,e[Qe]=i.current,Un(e.nodeType===8?e.parentNode:e),Pt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=el(u);a.call(c)}}var u=Ni(e,0,!1,null,null,!1,!1,"",Ha);return e._reactRootContainer=u,e[Qe]=u.current,Un(e.nodeType===8?e.parentNode:e),Pt(function(){pl(t,u,n,r)}),u}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var u=el(i);a.call(u)}}pl(t,i,e,l)}else i=zf(n,t,e,l,r);return el(i)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Jo(t,n|1),pe(t,W()),!(R&6)&&(rn=W()+500,mt()))}break;case 13:Pt(function(){var r=Ye(e,1);if(r!==null){var l=ie();je(r,e,1,l)}}),Li(e,1)}};qo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ie();je(t,e,134217728,n)}Li(e,134217728)}};Nu=function(e){if(e.tag===13){var t=st(e),n=Ye(e,t);if(n!==null){var r=ie();je(n,e,t,r)}Li(e,t)}};Lu=function(){return j};Ru=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};io=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(v(90));su(r),ql(r,l)}}}break;case"textarea":du(e,n);break;case"select":t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}};yu=bi;xu=Pt;var Pf={usingClientEntryPoint:!1,Events:[Zn,Dt,il,gu,vu,bi]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{nl=vr.inject(Nf),De=vr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ji(t))throw Error(v(200));return bf(e,t,null,n)};ye.createRoot=function(e,t){if(!ji(e))throw Error(v(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ni(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Un(e.nodeType===8?e.parentNode:e),new Ri(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Su(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Pt(e)};ye.hydrate=function(e,t,n){if(!ml(t))throw Error(v(200));return gl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!ji(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qs(t,null,e,1,n??null,l,!1,o,i),e[Qe]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};ye.render=function(e,t,n){if(!ml(t))throw Error(v(200));return gl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(v(40));return e._reactRootContainer?(Pt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ye.unstable_batchedUpdates=bi;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),tu.exports=ye;var Lf=tu.exports,$a=Lf;Ql.createRoot=$a.createRoot,Ql.hydrateRoot=$a.hydrateRoot;const yr=[{id:"simple-border",title:"Custom Border",description:"Simple border radius and styling.",category:"easy",initialCode:`.preview-box {
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border: 4px dashed #ff6b6b;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: bold;
}

.preview-container {
  background: #fff;
}`,htmlSnippet:'<div class="preview-box">Border Box</div>',tailwindCode:`<div class="w-52 h-52 bg-gray-100 border-4 border-dashed border-red-400 rounded-2xl flex justify-center items-center text-gray-800 font-bold">
  Border Box
</div>`,styledComponentCode:`import styled from 'styled-components';

const BorderBox = styled.div\`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border: 4px dashed #ff6b6b;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: bold;
\`;

// Usage: <BorderBox>Border Box</BorderBox>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const borderBox = style({
  width: '200px',
  height: '200px',
  backgroundColor: '#f0f0f0',
  border: '4px dashed #ff6b6b',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#333',
  fontWeight: 'bold'
});

// Usage: <div className={borderBox}>Border Box</div>`},{id:"shadow-box",title:"Box Shadow",description:"Basic drop shadow for depth.",category:"easy",initialCode:`.preview-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #333;
}

.preview-container {
  background: #eee;
}`,htmlSnippet:'<div class="preview-box">I have a shadow</div>',tailwindCode:`<div class="bg-white p-8 rounded-lg shadow-2xl text-gray-800">
  I have a shadow
</div>`,styledComponentCode:`import styled from 'styled-components';

const ShadowBox = styled.div\`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #333;
\`;

// Usage: <ShadowBox>I have a shadow</ShadowBox>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const shadowBox = style({
  background: 'white',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  color: '#333'
});

// Usage: <div className={shadowBox}>I have a shadow</div>`},{id:"absolute-centering",title:"Absolute Centering",description:"Center an element perfectly using Flexbox.",category:"easy",initialCode:`.preview-box {
  background: #ff4757;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
}

/* The container does the centering work here */
.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe4ea;
  width: 100%;
  height: 100%;
}`,htmlSnippet:'<div class="preview-box">I am Centered!</div>',tailwindCode:`<div class="flex justify-center items-center w-full h-full bg-gray-200">
  <div class="bg-red-500 text-white p-8 rounded-lg font-bold">
    I am Centered!
  </div>
</div>`,styledComponentCode:`import styled from 'styled-components';

const Container = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe4ea;
  width: 100%;
  height: 100%;
\`;

const CenteredBox = styled.div\`
  background: #ff4757;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  font-weight: bold;
\`;

// Usage: 
// <Container>
//   <CenteredBox>I am Centered!</CenteredBox>
// </Container>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#dfe4ea',
  width: '100%',
  height: '100%'
});

export const centeredBox = style({
  background: '#ff4757',
  color: 'white',
  padding: '2rem',
  borderRadius: '8px',
  fontWeight: 'bold'
});`},{id:"circular-image",title:"Circular Image",description:"Make any image a perfect circle.",category:"easy",initialCode:`.preview-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.preview-container {
  background: #2f3542;
}`,htmlSnippet:'<img class="preview-image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="User Profile" />',tailwindCode:`<img 
  class="w-36 h-36 object-cover rounded-full border-4 border-white shadow-md" 
  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
  alt="User Profile" 
/>`,styledComponentCode:`import styled from 'styled-components';

const CircularImage = styled.img\`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
\`;

// Usage: <CircularImage src="..." alt="..." />`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const circularImage = style({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '4px solid #fff',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
});

// Usage: <img className={circularImage} src="..." />`},{id:"text-truncation",title:"Text Truncation",description:"Truncate text with an ellipsis (...)",category:"easy",initialCode:`.preview-box {
  width: 200px;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  color: #333;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-container {
  background: #f1f2f6;
}`,htmlSnippet:`<div class="preview-box">
  <div class="truncate">
    This is a very long text that needs to be cut off because it is too long.
  </div>
</div>`},{id:"custom-radio",title:"Custom Radio Buttons",description:"Styled radio buttons with custom appearance.",category:"easy",initialCode:`.radio-group {
  display: flex;
  gap: 1rem;
}

.radio-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-wrapper input[type="radio"] {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #3498db;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  transition: 0.2s;
}

.radio-wrapper input[type="radio"]:checked + .radio-custom {
  border-color: #3498db;
}

.radio-wrapper input[type="radio"]:checked + .radio-custom::after {
  content: '';
  width: 10px;
  height: 10px;
  background: #3498db;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.preview-container {
  background: #ecf0f1;
}`,htmlSnippet:`<div class="radio-group">
  <label class="radio-wrapper">
    <input type="radio" name="option" checked>
    <span class="radio-custom"></span>
    <span>Option 1</span>
  </label>
  <label class="radio-wrapper">
    <input type="radio" name="option">
    <span class="radio-custom"></span>
    <span>Option 2</span>
  </label>
</div>`},{id:"custom-checkbox-styled",title:"Styled Checkbox",description:"Custom checkbox with checkmark animation.",category:"easy",initialCode:`.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-wrapper input[type="checkbox"] {
  display: none;
}

.checkbox-custom {
  width: 22px;
  height: 22px;
  border: 2px solid #555;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.2s;
}

.checkbox-wrapper input[type="checkbox"]:checked + .checkbox-custom {
  background: #2ecc71;
  border-color: #2ecc71;
}

.checkbox-wrapper input[type="checkbox"]:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: -2px;
  left: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.preview-container {
  background: #fff;
}`,htmlSnippet:`<label class="checkbox-wrapper">
  <input type="checkbox" checked>
  <span class="checkbox-custom"></span>
  <span>Accept terms and conditions</span>
</label>`},{id:"hover-card",title:"Hover Card",description:"Scale and shadow change on hover.",category:"normal",initialCode:`.preview-box {
  width: 250px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #333;
}

.preview-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.preview-container {
  background: #f3f4f6;
}`,htmlSnippet:`  <p>I move up and get a deeper shadow.</p>
</div>`,tailwindCode:`<div class="w-64 p-5 bg-white rounded-xl transition-all duration-300 cursor-pointer text-gray-800 hover:-translate-y-2 hover:shadow-lg">
  <h3 class="font-bold text-lg mb-2">Hover me!</h3>
  <p>I move up and get a deeper shadow.</p>
</div>`,styledComponentCode:`import styled from 'styled-components';

const Card = styled.div\`
  width: 250px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #333;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
\`;

// Usage: 
// <Card>
//   <h3>Hover me!</h3>
//   <p>...</p>
// </Card>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const card = style({
  width: '250px',
  padding: '20px',
  background: 'white',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  color: '#333',
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
});`},{id:"gradient-text",title:"Gradient Text",description:"Text with a gradient fill.",category:"normal",initialCode:`.preview-text {
  font-size: 60px;
  font-weight: 900;
  background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.preview-container {
  background: #fff;
}`,htmlSnippet:'<h1 class="preview-text">Gradient Text</h1>',tailwindCode:`<h1 class="text-6xl font-black bg-gradient-to-r from-[#30CFD0] to-[#330867] bg-clip-text text-transparent">
  Gradient Text
</h1>`,styledComponentCode:`import styled from 'styled-components';

const GradientText = styled.h1\`
  font-size: 60px;
  font-weight: 900;
  background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
\`;`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const gradientText = style({
  fontSize: '60px',
  fontWeight: 900,
  background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});`},{id:"floating-label-input",title:"Input Focus Animation",description:"Floating label animation on focus.",category:"normal",initialCode:`.input-group {
  position: relative;
  margin: 20px 0;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 2px solid #999;
  outline: none;
  background: transparent;
  transition: 0.2s;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: 0.2s;
}

.input-field:focus ~ .input-label,
.input-field:valid ~ .input-label {
  top: -20px;
  font-size: 12px;
  color: #03e9f4;
}

.input-field:focus {
  border-bottom: 2px solid #03e9f4;
}

.preview-container {
  background: #222;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}`,htmlSnippet:`<div class="input-group">
  <input type="text" class="input-field" required>
  <label class="input-label">Username</label>
</div>`,tailwindCode:`<div class="relative my-5 w-64">
  <input type="text" required class="peer w-full py-2 text-white bg-transparent border-b-2 border-gray-400 outline-none focus:border-[#03e9f4] transition-colors" />
  <label class="absolute left-0 top-0 py-2 text-gray-400 transition-all pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#03e9f4] peer-valid:-top-5 peer-valid:text-xs peer-valid:text-[#03e9f4]">
    Username
  </label>
</div>`,styledComponentCode:`import styled from 'styled-components';

const Group = styled.div\`
  position: relative;
  margin: 20px 0;
  width: 100%;
\`;

const Label = styled.label\`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: 0.2s;
\`;

const Input = styled.input\`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 2px solid #999;
  outline: none;
  background: transparent;
  transition: 0.2s;

  &:focus {
    border-bottom: 2px solid #03e9f4;
  }

  &:focus ~ \${Label},
  &:valid ~ \${Label} {
    top: -20px;
    font-size: 12px;
    color: #03e9f4;
  }
\`;

// Usage:
// <Group>
//   <Input type="text" required />
//   <Label>Username</Label>
// </Group>`,vanillaExtractCode:`import { style, globalStyle } from '@vanilla-extract/css';

export const group = style({
  position: 'relative',
  margin: '20px 0'
});

export const inputField = style({
  width: '100%',
  padding: '10px 0',
  fontSize: '16px',
  color: '#fff',
  border: 'none',
  borderBottom: '2px solid #999',
  outline: 'none',
  background: 'transparent',
  transition: '0.2s',
  selectors: {
    '&:focus': {
      borderBottom: '2px solid #03e9f4'
    }
  }
});

export const inputLabel = style({
  position: 'absolute',
  top: '0',
  left: '0',
  padding: '10px 0',
  fontSize: '16px',
  color: '#999',
  pointerEvents: 'none',
  transition: '0.2s'
});

globalStyle(\`\${inputField}:focus ~ \${inputLabel}, \${inputField}:valid ~ \${inputLabel}\`, {
  top: '-20px',
  fontSize: '12px',
  color: '#03e9f4'
});`},{id:"custom-toggle",title:"Custom Toggle",description:"Pure CSS toggle switch.",category:"normal",initialCode:`.toggle-checkbox {
  display: none;
}

.toggle-label {
  width: 60px;
  height: 30px;
  background: #ccc;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.toggle-label::after {
  content: '';
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.toggle-checkbox:checked + .toggle-label {
  background: #4cd137;
}

.toggle-checkbox:checked + .toggle-label::after {
  left: 32px;
}

.preview-container {
  background: #f5f6fa;
}`,htmlSnippet:`<div class="toggle-wrapper">
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div class="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-md"></div>
  </label>
</div>`,tailwindCode:`<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-md"></div>
</label>`,styledComponentCode:`import styled from 'styled-components';

const Checkbox = styled.input\`
  display: none;
\`;

const ToggleLabel = styled.label\`
  width: 60px;
  height: 30px;
  background: #ccc;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  display: inline-block;

  &::after {
    content: '';
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: 0.3s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  \${Checkbox}:checked + & {
    background: #4cd137;
  }

  \${Checkbox}:checked + &::after {
    left: 32px;
  }
\`;

// Usage: 
// <Checkbox type="checkbox" id="toggle" />
// <ToggleLabel htmlFor="toggle" />`,vanillaExtractCode:`import { style, globalStyle } from '@vanilla-extract/css';

export const toggleCheckbox = style({
  display: 'none'
});

export const toggleLabel = style({
  width: '60px',
  height: '30px',
  background: '#ccc',
  borderRadius: '30px',
  position: 'relative',
  cursor: 'pointer',
  transition: '0.3s',
  display: 'inline-block',
  ':after': {
    content: "''",
    width: '26px',
    height: '26px',
    background: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '2px',
    left: '2px',
    transition: '0.3s',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  }
});

globalStyle(\`\${toggleCheckbox}:checked + \${toggleLabel}\`, {
  background: '#4cd137'
});

globalStyle(\`\${toggleCheckbox}:checked + \${toggleLabel}:after\`, {
  left: '32px'
});`},{id:"custom-scrollbar",title:"Custom Scrollbar",description:"Styling the browser scrollbar (Webkit).",category:"normal",initialCode:`/* The scroll content container */
.scroll-content {
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  background: #fff;
  padding: 1rem;
  color: #333;
  border-radius: 8px;
}

/* Scrollbar width */
.scroll-content::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.scroll-content::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 8px;
}
 
/* Handle */
.scroll-content::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 8px;
}

/* Handle on hover */
.scroll-content::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.preview-container {
  background: #333;
}`,htmlSnippet:`<div class="scroll-content">
  <h3>Scroll Me!</h3>
</div>`,tailwindCode:`<div class="w-80 h-52 overflow-y-scroll bg-white p-4 rounded-lg text-gray-800 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-lg hover:[&::-webkit-scrollbar-thumb]:bg-gray-600">
  <h3 class="font-bold mb-2">Scroll Me! (Tailwind)</h3>
  <p>Tailwind uses arbitrary variants like [&::-webkit-scrollbar] to style scrollbars without plugins.</p>
  <p class="mt-4">Lorem ipsum...</p>
</div>`,styledComponentCode:`import styled from 'styled-components';

const ScrollBox = styled.div\`
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  background: #fff;
  padding: 1rem;
  color: #333;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
\`;

// Usage: <ScrollBox>Content...</ScrollBox>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const scrollBox = style({
  width: '300px',
  height: '200px',
  overflowY: 'scroll',
  background: '#fff',
  padding: '1rem',
  color: '#333',
  borderRadius: '8px',
  '::-webkit-scrollbar': {
    width: '10px'
  },
  '::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '8px'
  },
  '::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '8px'
  },
  'selectors': {
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555'
    }
  }
});`},{id:"css-accordion",title:"Pure CSS Accordion",description:"Expandable accordion using checkbox hack.",category:"normal",initialCode:`.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 4px;
}

.accordion-input {
  display: none;
}

.accordion-label {
  display: block;
  padding: 15px;
  background: #f7f7f7;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
}

.accordion-label:hover {
  background: #e8e8e8;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: white;
}

.accordion-content-inner {
  padding: 15px;
}

.accordion-input:checked ~ .accordion-content {
  max-height: 200px;
}

.preview-container {
  background: #f0f0f0;
}`,htmlSnippet:`    <div class="accordion-content-inner">
      This is the content for section 2.
    </div>
  </div>
</div>`,tailwindCode:`<div class="mb-2 border border-gray-300 rounded overflow-hidden">
  <input type="checkbox" id="acc1" class="peer hidden" checked>
  <label for="acc1" class="block p-4 bg-gray-100 cursor-pointer font-bold hover:bg-gray-200">Section 1</label>
  <div class="max-h-0 overflow-hidden transition-all duration-300 bg-white peer-checked:max-h-48">
    <div class="p-4">This is the content for section 1.</div>
  </div>
</div>
<div class="mb-2 border border-gray-300 rounded overflow-hidden">
  <input type="checkbox" id="acc2" class="peer hidden">
  <label for="acc2" class="block p-4 bg-gray-100 cursor-pointer font-bold hover:bg-gray-200">Section 2</label>
  <div class="max-h-0 overflow-hidden transition-all duration-300 bg-white peer-checked:max-h-48">
    <div class="p-4">This is the content for section 2.</div>
  </div>
</div>`,styledComponentCode:`import styled from 'styled-components';

const AccordionItem = styled.div\`
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 4px;
\`;

const Input = styled.input\`
  display: none;
\`;

const Label = styled.label\`
  display: block;
  padding: 15px;
  background: #f7f7f7;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  &:hover { background: #e8e8e8; }
\`;

const Content = styled.div\`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: white;

  \${Input}:checked ~ & {
    max-height: 200px;
  }
\`;

const Inner = styled.div\` padding: 15px; \`;

// Usage:
// <AccordionItem>
//   <Input type="checkbox" id="a1" />
//   <Label htmlFor="a1">Section 1</Label>
//   <Content><Inner>...</Inner></Content>
// </AccordionItem>`,vanillaExtractCode:`import { style, globalStyle } from '@vanilla-extract/css';

export const accordionItem = style({
  border: '1px solid #ddd',
  marginBottom: '5px',
  borderRadius: '4px'
});

export const input = style({ display: 'none' });

export const label = style({
  display: 'block',
  padding: '15px',
  background: '#f7f7f7',
  cursor: 'pointer',
  fontWeight: 'bold',
  ':hover': { background: '#e8e8e8' }
});

export const content = style({
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'maxHeight 0.3s ease',
  background: 'white'
});

globalStyle(\`\${input}:checked ~ \${content}\`, {
  maxHeight: '200px'
});

export const inner = style({ padding: '15px' });`},{id:"css-tabs",title:"Pure CSS Tabs",description:"Tab navigation using radio buttons.",category:"normal",initialCode:`.tabs {
  width: 100%;
}

.tab-input {
  display: none;
}

.tab-labels {
  display: flex;
  border-bottom: 2px solid #ddd;
}

.tab-label {
  padding: 10px 20px;
  cursor: pointer;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-bottom: none;
  margin-right: 2px;
  transition: 0.2s;
}

.tab-label:hover {
  background: #e0e0e0;
}

.tab-input:checked + .tab-label {
  background: white;
  border-bottom: 2px solid white;
  margin-bottom: -2px;
}

.tab-content {
  display: none;
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
}

#tab1:checked ~ .tab-contents #content1,
#tab2:checked ~ .tab-contents #content2,
#tab3:checked ~ .tab-contents #content3 {
  display: block;
}

.preview-container {
  background: #f5f5f5;
}`,htmlSnippet:`<div class="tabs">
  <div class="tab-labels">
    <input type="radio" name="tabs" id="tab1" class="tab-input" checked>
    <label for="tab1" class="tab-label">Tab 1</label>
    
    <input type="radio" name="tabs" id="tab2" class="tab-input">
    <label for="tab2" class="tab-label">Tab 2</label>
    
    <input type="radio" name="tabs" id="tab3" class="tab-input">
    <label for="tab3" class="tab-label">Tab 3</label>
  </div>
  
  <div class="tab-contents">
    <div id="content1" class="tab-content">Content for Tab 1</div>
    <div id="content2" class="tab-content">Content for Tab 2</div>
    <div id="content3" class="tab-content">Content for Tab 3</div>
  </div>
</div>`,tailwindCode:`<div class="w-full">
  <div class="flex border-b-2 border-gray-300">
    <!-- Tab 1 -->
    <label class="px-5 py-2 cursor-pointer bg-gray-100 mr-0.5 hover:bg-gray-200 has-[:checked]:bg-white has-[:checked]:border-b-2 has-[:checked]:border-white has-[:checked]:-mb-0.5">
      <input type="radio" name="t" checked class="hidden peer">
      Tab 1
    </label>
    <!-- Tab 2 -->
    <label class="px-5 py-2 cursor-pointer bg-gray-100 mr-0.5 hover:bg-gray-200 has-[:checked]:bg-white has-[:checked]:border-b-2 has-[:checked]:border-white has-[:checked]:-mb-0.5">
      <input type="radio" name="t" class="hidden peer">
      Tab 2
    </label>
  </div>
  <!-- Content Area (Naive JS-less approach is hard in Tailwind flat structure. 
       Usually this requires specific structure or 'peer' targeting siblings. 
       Here we simulate the appearance.) 
  -->
  <div class="p-5 bg-white border border-t-0 border-gray-300">
    Content for selected tab... (Requires structure adjustment for pure CSS behavior)
  </div>
</div>`,styledComponentCode:`import styled from 'styled-components';

const Tabs = styled.div\` width: 100%; \`;
const Input = styled.input\` display: none; \`;
const Labels = styled.div\` display: flex; border-bottom: 2px solid #ddd; \`;

const Label = styled.label\`
  padding: 10px 20px;
  cursor: pointer;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-bottom: none;
  margin-right: 2px;
  transition: 0.2s;
  &:hover { background: #e0e0e0; }
  
  \${Input}:checked + & {
    background: white;
    border-bottom: 2px solid white;
    margin-bottom: -2px;
  }
\`;

const Content = styled.div\`
  display: none;
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
\`;

// Note: The sibling selector logic for showing specific content 
// requires a specific DOM structure or additional GlobalStyles.
// Simplification shown.`,vanillaExtractCode:"// Vanilla Extract follows the same structural pattern as pure CSS."},{id:"hover-tooltip",title:"Hover Tooltip",description:"Tooltip that appears on hover.",category:"normal",initialCode:`.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-trigger {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border-radius: 4px;
  cursor: help;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  transition: opacity 0.3s;
  font-size: 14px;
}

.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.tooltip-wrapper:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.preview-container {
  background: #ecf0f1;
  padding-top: 80px !important;
}`,htmlSnippet:`<div class="tooltip-wrapper">
  <div class="tooltip-trigger">Hover over me</div>
  <span class="tooltip-text">This is a tooltip message!</span>
</div>`,tailwindCode:`<div class="relative inline-block group">
  <div class="px-5 py-2.5 bg-blue-500 text-white rounded cursor-help">Hover over me</div>
  <span class="invisible opacity-0 w-48 bg-gray-800 text-white text-center rounded p-2 absolute bottom-[125%] left-1/2 -ml-24 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-[5px] after:border-[5px] after:border-solid after:border-t-gray-800 after:border-x-transparent after:border-b-transparent">
    This is a tooltip message!
  </span>
</div>`,styledComponentCode:`import styled from 'styled-components';

const Wrapper = styled.div\`
  position: relative;
  display: inline-block;
\`;

const Text = styled.span\`
  visibility: hidden;
  opacity: 0;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  transition: opacity 0.3s;
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
  
  \${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
\`;

const Trigger = styled.div\`
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border-radius: 4px;
  cursor: help;
\`;

// Usage: <Wrapper><Trigger>Hover me</Trigger><Text>Tooltip</Text></Wrapper>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  display: 'inline-block'
});

export const text = style({
  visibility: 'hidden',
  opacity: 0,
  // ... other styles
  selectors: {
    [\`\${wrapper}:hover &\`]: {
      visibility: 'visible',
      opacity: 1
    }
  }
});
// (Simplified for brevity)`},{id:"dropdown-menu",title:"Dropdown Menu",description:"Hover-activated dropdown menu.",category:"normal",initialCode:`.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 5px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.2s;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropdown-button {
  background-color: #45a049;
}

.preview-container {
  background: #fff;
  padding-top: 20px !important;
}`,htmlSnippet:`<div class="dropdown">
  <div class="dropdown-button">Menu ▼</div>
  <div class="dropdown-content">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
</div>`,tailwindCode:`<div class="relative inline-block group">
  <div class="bg-green-500 text-white px-5 py-3 text-base border-none cursor-pointer rounded group-hover:bg-green-600">Menu ▼</div>
  <div class="hidden absolute bg-gray-50 min-w-[160px] shadow-lg z-10 rounded overflow-hidden mt-1 group-hover:block">
    <a href="#" class="block text-black px-4 py-3 no-underline transition hover:bg-gray-200">Option 1</a>
    <a href="#" class="block text-black px-4 py-3 no-underline transition hover:bg-gray-200">Option 2</a>
    <a href="#" class="block text-black px-4 py-3 no-underline transition hover:bg-gray-200">Option 3</a>
  </div>
</div>`,styledComponentCode:`import styled from 'styled-components';

const DropdownContent = styled.div\`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
\`;

const Dropdown = styled.div\`
  position: relative;
  display: inline-block;
  
  &:hover \${DropdownContent} {
    display: block;
  }
\`;

// Usage: <Dropdown>...</Dropdown>`,vanillaExtractCode:`import { style } from '@vanilla-extract/css';

export const dropdown = style({ position: 'relative', display: 'inline-block' });
export const content = style({ display: 'none', position: 'absolute' });
// Logic same as Pure CSS.`},{id:"glassmorphism",title:"Glassmorphism",description:"Modern frosted glass effect.",category:"hard",initialCode:`.preview-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  padding: 3rem;
  color: white;
  width: 350px;
}

.preview-container {
  background: linear-gradient(45deg, #FC466B, #3F5EFB);
  background-size: cover;
}`,htmlSnippet:`<div class="preview-box">
  <h2>Glass Card</h2>
  <p>Notice the blur behind me?</p>
</div>`},{id:"neon-glow",title:"Neon Glow",description:"Complex layered shadows for neon look.",category:"hard",initialCode:`.preview-box {
  color: #fff;
  border: 4px solid #fff;
  padding: 20px 40px;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 10px;
  box-shadow: 
    0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem #bc13fe,
    0 0 0.8rem #bc13fe,
    0 0 2.8rem #bc13fe,
    inset 0 0 1.3rem #bc13fe;
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #bc13fe,
    0 0 80px #bc13fe,
    0 0 90px #bc13fe,
    0 0 100px #bc13fe,
    0 0 150px #bc13fe;
}

.preview-container {
  background: #050505;
}`,htmlSnippet:'<div class="preview-box">Neon</div>'},{id:"3d-card-flip",title:"3D Card Flip",description:"Hover to flip the card and reveal the back.",category:"hard",initialCode:`.flip-card {
  background-color: transparent;
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.preview-container {
  background: #f1f1f1;
}`,htmlSnippet:`<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Front</h2>
    </div>
    <div class="flip-card-back">
      <h2>Back</h2>
      <p>Content goes here</p>
    </div>
  </div>
</div>`},{id:"glitch-effect",title:"Glitch Text",description:"Cyberpunk glitch animation using clip-path.",category:"hard",initialCode:`.glitch {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}

.preview-container {
  background: #111;
  color: white;
}`,htmlSnippet:`<h1 class="glitch">
  <span aria-hidden="true">Glitch</span>
  Glitch
  <span aria-hidden="true">Glitch</span>
</h1>`},{id:"css-modal",title:"Pure CSS Modal",description:"Modal dialog using :target pseudo-class.",category:"hard",initialCode:`.modal-link {
  display: inline-block;
  padding: 12px 24px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.2s;
}

.modal-link:hover {
  background: #2980b9;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.modal:target {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s;
}

.modal:target .modal-content {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  color: #333;
  font-size: 24px;
  text-decoration: none;
  line-height: 30px;
  text-align: center;
}

.modal-close:hover {
  color: #e74c3c;
}

.preview-container {
  background: #ecf0f1;
}`,htmlSnippet:`<a href="#modal1" class="modal-link">Open Modal</a>

<div id="modal1" class="modal">
  <div class="modal-content">
    <a href="#" class="modal-close">×</a>
    <h2>Modal Title</h2>
    <p>This is a pure CSS modal using the :target pseudo-class!</p>
  </div>
</div>`},{id:"loading-spinner",title:"Loading Spinner",description:"Classic rotating spinner.",category:"animation",initialCode:`.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.preview-container {
  background: #333;
}`,htmlSnippet:'<div class="spinner"></div>'},{id:"bouncing-ball",title:"Bouncing Ball",description:"Keyframe animation simulating physics.",category:"animation",initialCode:`.ball {
  width: 50px;
  height: 50px;
  background: #ff5252;
  border-radius: 50%;
  position: relative;
  animation: bounce 0.6s cubic-bezier(0.6, 0.05, 0.4, 1.45) infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-150px); }
}

.preview-container {
  background: #222;
  display: flex !important;
  align-items: flex-end !important;
  padding-bottom: 50px;
}`,htmlSnippet:'<div class="ball"></div>'},{id:"typing-effect",title:"Typing Effect",description:"Typewriter text reveal animation.",category:"animation",initialCode:`.typing {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  color: lime;
}

@keyframes typing {
  from { width: 0 }
}

@keyframes blink {
  50% { border-color: transparent }
}

.preview-container {
  background: #000;
}`,htmlSnippet:'<div class="typing">Typing effect demo...</div>'},{id:"pulse-animation",title:"Pulse (Heartbeat)",description:"Attention-grabbing pulse animation.",category:"animation",initialCode:`.pulse {
  width: 100px;
  height: 100px;
  background: #e74c3c;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.preview-container {
  background: #ecf0f1;
}`,htmlSnippet:'<div class="pulse"></div>'},{id:"shimmer-loading",title:"Shimmer Loading",description:"Skeleton screen shimmer effect.",category:"animation",initialCode:`.skeleton {
  width: 300px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
}

.skeleton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  height: 100%;
  width: 150%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
}

.preview-container {
  background: #f5f5f5;
}`,htmlSnippet:`<div>
  <div class="skeleton"></div>
  <div class="skeleton"></div>
  <div class="skeleton"></div>
</div>`},{id:"shake-animation",title:"Shake Animation",description:"Error or attention shake effect.",category:"animation",initialCode:`.shake-box {
  background: #e74c3c;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
  font-weight: bold;
}

.shake-box:hover {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

.preview-container {
  background: #2c3e50;
}`,htmlSnippet:'<div class="shake-box">Hover to Shake!</div>'},{id:"fade-in-animation",title:"Fade In Entry",description:"Smooth fade in and up animation.",category:"animation",initialCode:`.fade-in {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  color: #333;
}

.preview-container {
  background: #34495e;
}`,htmlSnippet:`<div class="fade-in fade-box">
  <h3>Fade In Content</h3>
  <p>I smoothly appear from below!</p>
</div>`},{id:"progress-bar-animation",title:"Progress Bar",description:"Animated progress bar with fill animation.",category:"animation",initialCode:`.progress-container {
  width: 300px;
  height: 30px;
  background: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.progress-bar {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  animation: fillBar 2s ease-out forwards;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

@keyframes fillBar {
  from {
    width: 0%;
  }
  to {
    width: 75%;
  }
}

.preview-container {
  background: #f5f5f5;
}`,htmlSnippet:`<div class="progress-container">
  <div class="progress-bar">75%</div>
</div>`},{id:"slide-in-menu",title:"Slide-in Menu",description:"Hamburger menu with slide-in animation.",category:"animation",initialCode:`.menu-toggle {
  display: none;
}

.hamburger {
  display: inline-block;
  cursor: pointer;
  padding: 10px;
}

.hamburger-line {
  width: 30px;
  height: 3px;
  background: white;
  margin: 6px 0;
  transition: 0.3s;
}

.side-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #2c3e50;
  transition: left 0.3s ease;
  padding: 60px 20px 20px;
}

.menu-toggle:checked ~ .side-menu {
  left: 0;
}

.menu-toggle:checked ~ .hamburger .line1 {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.menu-toggle:checked ~ .hamburger .line2 {
  opacity: 0;
}

.menu-toggle:checked ~ .hamburger .line3 {
  transform: rotate(45deg) translate(-6px, -6px);
}

.menu-item {
  padding: 15px;
  color: white;
  text-decoration: none;
  display: block;
  transition: 0.2s;
}

.menu-item:hover {
  background: #34495e;
  padding-left: 25px;
}

.preview-container {
  background: #34495e;
  position: relative !important;
}`,htmlSnippet:`<input type="checkbox" id="menu-toggle" class="menu-toggle">
<label for="menu-toggle" class="hamburger">
  <div class="hamburger-line line1"></div>
  <div class="hamburger-line line2"></div>
  <div class="hamburger-line line3"></div>
</label>
<nav class="side-menu">
  <a href="#" class="menu-item">Home</a>
  <a href="#" class="menu-item">About</a>
  <a href="#" class="menu-item">Services</a>
  <a href="#" class="menu-item">Contact</a>
</nav>`}],Rf=["easy","normal","hard","animation"],jf={easy:"Easy",normal:"Normal",hard:"Hard",animation:"Animation"},If=({effects:e,selectedId:t,onSelect:n})=>{const r=Le.useMemo(()=>{const a={easy:[],normal:[],hard:[],animation:[]};return e.forEach(u=>{a[u.category].push(u)}),a},[e]),[l,o]=Le.useState({easy:!0,normal:!0,hard:!0,animation:!0}),i=a=>{o(u=>({...u,[a]:!u[a]}))};return z.jsxs("div",{style:{width:"240px",borderRight:"1px solid #333",background:"#1a1a1a",height:"100vh",overflowY:"auto",display:"flex",flexDirection:"column"},children:[z.jsx("h2",{style:{padding:"1.5rem 1rem",borderBottom:"1px solid #333",margin:0,fontSize:"1.2rem",background:"#111"},children:"CSS Tips"}),z.jsx("div",{style:{flex:1},children:Rf.map(a=>z.jsxs("div",{style:{borderBottom:"1px solid #2a2a2a"},children:[z.jsxs("div",{onClick:()=>i(a),style:{padding:"0.8rem 1rem",background:"#222",cursor:"pointer",fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#ddd",fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:[z.jsx("span",{children:jf[a]}),z.jsx("span",{style:{fontSize:"0.8em",color:"#666"},children:l[a]?"▼":"▶"})]}),l[a]&&z.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:r[a].map(u=>z.jsx("li",{onClick:()=>n(u.id),style:{padding:"0.8rem 1rem 0.8rem 1.5rem",cursor:"pointer",background:u.id===t?"#2c3e50":"transparent",color:u.id===t?"#fff":"#aaa",borderLeft:u.id===t?"3px solid #3498db":"3px solid transparent",transition:"all 0.2s",fontSize:"0.9rem"},children:z.jsx("div",{style:{fontWeight:u.id===t?"600":"400"},children:u.title})},u.id))})]},a))})]})},Of=({htmlSnippet:e,cssCode:t})=>z.jsxs("div",{className:"preview-container",children:[z.jsx("style",{children:t}),z.jsx("div",{dangerouslySetInnerHTML:{__html:e},style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})]}),Mf=({code:e,onChange:t,format:n,onFormatChange:r,readOnly:l=!1})=>{const[o,i]=Le.useState(!1),a=async()=>{try{await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),2e3)}catch(u){console.error("Failed to copy:",u)}};return z.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[z.jsxs("div",{style:{background:"#111",padding:"0.5rem 1rem",borderBottom:"1px solid #444",fontSize:"0.9rem",fontWeight:"bold",color:"#888",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[z.jsx("span",{children:"CSS Editor"}),z.jsxs("select",{value:n,onChange:u=>r(u.target.value),style:{background:"#333",color:"#ddd",border:"1px solid #444",borderRadius:"4px",padding:"2px 8px",fontSize:"0.8rem",outline:"none",cursor:"pointer"},children:[z.jsx("option",{value:"pure-css",children:"Pure CSS"}),z.jsx("option",{value:"tailwind",children:"Tailwind CSS"}),z.jsx("option",{value:"styled-components",children:"Styled Components"}),z.jsx("option",{value:"vanilla-extract",children:"Vanilla Extract"})]})]}),z.jsx("button",{onClick:a,style:{background:o?"#27ae60":"#444",color:o?"white":"#ddd",border:"none",padding:"0.4rem 0.8rem",borderRadius:"4px",cursor:"pointer",fontSize:"0.8rem",fontWeight:"normal",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"0.3rem"},onMouseEnter:u=>{o||(u.currentTarget.style.background="#555")},onMouseLeave:u=>{o||(u.currentTarget.style.background="#444")},children:o?z.jsxs(z.Fragment,{children:[z.jsx("span",{children:"✓"}),z.jsx("span",{children:"Copied!"})]}):z.jsxs(z.Fragment,{children:[z.jsx("span",{children:"📋"}),z.jsx("span",{children:"Copy"})]})})]}),z.jsx("textarea",{value:e,onChange:u=>!l&&t(u.target.value),readOnly:l,spellCheck:!1,style:{flex:1,width:"100%",background:l?"#1a1a1a":"#1e1e1e",color:l?"#aaa":"#d4d4d4",border:"none",padding:"1rem",fontFamily:"monospace",fontSize:"14px",resize:"none",outline:"none",lineHeight:"1.5"}})]})};function Ff(){const[e,t]=Le.useState({}),[n,r]=Le.useState(yr[0].id),[l,o]=Le.useState("pure-css"),i=Le.useMemo(()=>yr.find(m=>m.id===n)||yr[0],[n]),a=Le.useMemo(()=>{if(l==="pure-css")return e[n]!==void 0?e[n]:i.initialCode;switch(l){case"tailwind":return i.tailwindCode||"/* Tailwind version coming soon... */";case"styled-components":return i.styledComponentCode||"/* Styled Components version coming soon... */";case"vanilla-extract":return i.vanillaExtractCode||"/* Vanilla Extract version coming soon... */";default:return""}},[l,e,n,i]),u=l!=="pure-css",c=m=>{l==="pure-css"&&t(h=>({...h,[n]:m}))};return z.jsxs("div",{style:{display:"flex",height:"100vh",width:"100vw",overflow:"hidden"},children:[z.jsx(If,{effects:yr,selectedId:n,onSelect:r}),z.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[z.jsx("div",{style:{flex:"1 1 60%",minHeight:0},children:z.jsx(Of,{htmlSnippet:i.htmlSnippet,cssCode:e[n]??i.initialCode})}),z.jsx("div",{style:{flex:"1 1 40%",minHeight:0,borderTop:"1px solid #444"},children:z.jsx(Mf,{code:a,onChange:c,format:l,onFormatChange:o,readOnly:u})})]})]})}Ql.createRoot(document.getElementById("root")).render(z.jsx(xc.StrictMode,{children:z.jsx(Ff,{})}));
