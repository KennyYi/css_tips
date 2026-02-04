(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $u={exports:{}},tl={},Qu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Oo=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Gu={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Ku}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xu(){}Xu.prototype=ln.prototype;function Bi(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Ku}var Ai=Bi.prototype=new Xu;Ai.constructor=Bi;Yu(Ai,ln.prototype);Ai.isPureReactComponent=!0;var Fo=Array.isArray,Zu=Object.prototype.hasOwnProperty,Hi={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Zu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Gn,type:e,key:i,ref:o,props:l,_owner:Hi.current}}function hc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Do=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gn:case lc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+xl(o,0):r,Fo(l)?(n="",e!=null&&(n=e.replace(Do,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Vi(l)&&(l=hc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Do,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Fo(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+xl(i,u);o+=wr(i,t,n,a,l)}else if(a=mc(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+xl(i,u++),o+=wr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},xr={transition:null},yc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Hi};function qu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ln;L.Fragment=ic;L.Profiler=uc;L.PureComponent=Bi;L.StrictMode=oc;L.Suspense=dc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;L.act=qu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Hi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Zu.call(t,a)&&!Ju.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Gn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};L.createElement=bu;L.createFactory=function(e){var t=bu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:cc,render:e}};L.isValidElement=Vi;L.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:gc}};L.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};L.unstable_act=qu;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Qu.exports=L;var je=Qu.exports;const wc=rc(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=je,kc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,Ec=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function ea(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cc.call(t,r)&&!_c.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:kc,type:e,key:i,ref:o,props:l,_owner:Ec.current}}tl.Fragment=Sc;tl.jsx=ea;tl.jsxs=ea;$u.exports=tl;var N=$u.exports,Kl={},ta={exports:{}},ye={},na={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,z){var T=C.length;C.push(z);e:for(;0<T;){var $=T-1>>>1,X=C[$];if(0<l(X,z))C[$]=z,C[T]=X,T=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var z=C[0],T=C.pop();if(T!==z){C[0]=T;e:for(var $=0,X=C.length,qn=X>>>1;$<qn;){var vt=2*($+1)-1,wl=C[vt],gt=vt+1,er=C[gt];if(0>l(wl,T))gt<X&&0>l(er,wl)?(C[$]=er,C[gt]=T,$=gt):(C[$]=wl,C[vt]=T,$=vt);else if(gt<X&&0>l(er,T))C[$]=er,C[gt]=T,$=gt;else break e}}return z}function l(C,z){var T=C.sortIndex-z.sortIndex;return T!==0?T:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],c=[],h=1,m=null,p=3,y=!1,w=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=C)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function v(C){if(x=!1,f(C),!w)if(n(a)!==null)w=!0,gl(S);else{var z=n(c);z!==null&&yl(v,z.startTime-C)}}function S(C,z){w=!1,x&&(x=!1,d(P),P=-1),y=!0;var T=p;try{for(f(z),m=n(a);m!==null&&(!(m.expirationTime>z)||C&&!Pe());){var $=m.callback;if(typeof $=="function"){m.callback=null,p=m.priorityLevel;var X=$(m.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(a)&&r(a),f(z)}else r(a);m=n(a)}if(m!==null)var qn=!0;else{var vt=n(c);vt!==null&&yl(v,vt.startTime-z),qn=!1}return qn}finally{m=null,p=T,y=!1}}var E=!1,_=null,P=-1,W=5,j=-1;function Pe(){return!(e.unstable_now()-j<W)}function an(){if(_!==null){var C=e.unstable_now();j=C;var z=!0;try{z=_(!0,C)}finally{z?sn():(E=!1,_=null)}}else E=!1}var sn;if(typeof s=="function")sn=function(){s(an)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,nc=Mo.port2;Mo.port1.onmessage=an,sn=function(){nc.postMessage(null)}}else sn=function(){D(an,0)};function gl(C){_=C,E||(E=!0,sn())}function yl(C,z){P=D(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,gl(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var T=p;p=z;try{return C()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=p;p=C;try{return z()}finally{p=T}},e.unstable_scheduleCallback=function(C,z,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=T+X,C={id:h++,callback:z,priorityLevel:C,startTime:T,expirationTime:X,sortIndex:-1},T>$?(C.sortIndex=T,t(c,C),n(a)===null&&C===n(c)&&(x?(d(P),P=-1):x=!0,yl(v,T-$))):(C.sortIndex=X,t(a,C),w||y||(w=!0,gl(S))),C},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(C){var z=p;return function(){var T=p;p=z;try{return C.apply(this,arguments)}finally{p=T}}}})(ra);na.exports=ra;var Pc=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=je,ge=Pc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,jn={};function Lt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(jn[e]=t,e=0;e<t.length;e++)la.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,Nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},Bo={};function Tc(e){return Yl.call(Bo,e)?!0:Yl.call(Uo,e)?!1:Nc.test(e)?Bo[e]=!0:(Uo[e]=!0,!1)}function Lc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jc(e,t,n,r){if(t===null||typeof t>"u"||Lc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function $i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,$i);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,$i);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,$i);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jc(t,n,l,r)&&(n=null),r||l===null?Tc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),oa=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,kl;function yn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function Cl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Rc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case It:return"Portal";case Gl:return"Profiler";case Ki:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oa:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Ic(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mc(e){var t=aa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Mc(e))}function sa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=aa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ca(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function ql(e,t){ca(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(wn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function da(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $o(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,pa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function ma(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ha(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ma(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Fc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Fc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Kt=null,Yt=null;function Qo(e){if(e=Jn(e)){if(typeof oi!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ol(t),oi(e.stateNode,e.type,t))}}function va(e){Kt?Yt?Yt.push(e):Yt=[e]:Kt=e}function ga(){if(Kt){var e=Kt,t=Yt;if(Yt=Kt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function ya(e,t){return e(t)}function wa(){}var El=!1;function xa(e,t,n){if(El)return e(t,n);El=!0;try{return ya(e,t,n)}finally{El=!1,(Kt!==null||Yt!==null)&&(wa(),ga())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var ui=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ui=!1}function Dc(e,t,n,r,l,i,o,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Cn=!1,Rr=null,Ir=!1,ai=null,Uc={onError:function(e){Cn=!0,Rr=e}};function Bc(e,t,n,r,l,i,o,u,a){Cn=!1,Rr=null,Dc.apply(Uc,arguments)}function Ac(e,t,n,r,l,i,o,u,a){if(Bc.apply(this,arguments),Cn){if(Cn){var c=Rr;Cn=!1,Rr=null}else throw Error(g(198));Ir||(Ir=!0,ai=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ka(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(jt(e)!==e)throw Error(g(188))}function Hc(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Sa(e){return e=Hc(e),e!==null?Ca(e):null}function Ca(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ca(e);if(t!==null)return t;e=e.sibling}return null}var Ea=ge.unstable_scheduleCallback,Yo=ge.unstable_cancelCallback,Vc=ge.unstable_shouldYield,Wc=ge.unstable_requestPaint,Q=ge.unstable_now,$c=ge.unstable_getCurrentPriorityLevel,Zi=ge.unstable_ImmediatePriority,_a=ge.unstable_UserBlockingPriority,Mr=ge.unstable_NormalPriority,Qc=ge.unstable_LowPriority,Pa=ge.unstable_IdlePriority,nl=null,Ue=null;function Kc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Xc,Yc=Math.log,Gc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Yc(e)/Gc|0)|0}var ir=64,or=4194304;function xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=xn(u):(i&=o,i!==0&&(r=xn(i)))}else o=n&~l,o!==0?r=xn(o):i!==0&&(r=xn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function Zc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Re(i),u=1<<o,a=l[o];a===-1?(!(u&n)||u&r)&&(l[o]=Zc(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function za(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function bc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ji(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ta,bi,La,ja,Ra,ci=!1,ur=[],rt=null,lt=null,it=null,Mn=new Map,On=new Map,qe=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function fn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ed(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return it=fn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Mn.set(i,fn(Mn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,fn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Ia(e){var t=xt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=ka(n),t!==null){e.blockedOn=t,Ra(e.priority,function(){La(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=Jn(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){kr(e)&&n.delete(t)}function td(){ci=!1,rt!==null&&kr(rt)&&(rt=null),lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),Mn.forEach(Xo),On.forEach(Xo)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,td)))}function Fn(e){function t(l){return pn(l,e)}if(0<ur.length){pn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),Mn.forEach(t),On.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)Ia(n),n.blockedOn===null&&qe.shift()}var Gt=Xe.ReactCurrentBatchConfig,Fr=!0;function nd(e,t,n,r){var l=I,i=Gt.transition;Gt.transition=null;try{I=1,qi(e,t,n,r)}finally{I=l,Gt.transition=i}}function rd(e,t,n,r){var l=I,i=Gt.transition;Gt.transition=null;try{I=4,qi(e,t,n,r)}finally{I=l,Gt.transition=i}}function qi(e,t,n,r){if(Fr){var l=di(e,t,n,r);if(l===null)Ol(e,t,r,Dr,n),Go(e,r);else if(ed(l,e,t,n,r))r.stopPropagation();else if(Go(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&Ta(i),i=di(e,t,n,r),i===null&&Ol(e,t,r,Dr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Dr=null;function di(e,t,n,r){if(Dr=null,e=Xi(r),e=xt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ka(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($c()){case Zi:return 1;case _a:return 4;case Mr:case Qc:return 16;case Pa:return 536870912;default:return 16}default:return 16}}var tt=null,eo=null,Sr=null;function Oa(){if(Sr)return Sr;var e,t=eo,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Zo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Zo,this.isPropagationStopped=Zo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=we(on),Zn=H({},on,{view:0,detail:0}),ld=we(Zn),Pl,zl,mn,rl=H({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Pl=e.screenX-mn.screenX,zl=e.screenY-mn.screenY):zl=Pl=0,mn=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Jo=we(rl),id=H({},rl,{dataTransfer:0}),od=we(id),ud=H({},Zn,{relatedTarget:0}),Nl=we(ud),ad=H({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=we(ad),cd=H({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=we(cd),fd=H({},on,{data:0}),bo=we(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function no(){return vd}var gd=H({},Zn,{key:function(e){if(e.key){var t=pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=we(gd),wd=H({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=we(wd),xd=H({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),kd=we(xd),Sd=H({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=we(Sd),Ed=H({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=we(Ed),Pd=[9,13,27,32],ro=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var zd=Qe&&"TextEvent"in window&&!En,Fa=Qe&&(!ro||En&&8<En&&11>=En),eu=" ",tu=!1;function Da(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ua(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Nd(e,t){switch(e){case"compositionend":return Ua(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function Td(e,t){if(Ot)return e==="compositionend"||!ro&&Da(e,t)?(e=Oa(),Sr=eo=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fa&&t.locale!=="ko"?null:t.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ld[e.type]:t==="textarea"}function Ba(e,t,n,r){va(r),t=Ur(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Dn=null;function jd(e){Za(e,0)}function ll(e){var t=Ut(e);if(sa(t))return e}function Rd(e,t){if(e==="change")return t}var Aa=!1;if(Qe){var Tl;if(Qe){var Ll="oninput"in document;if(!Ll){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Ll=typeof ru.oninput=="function"}Tl=Ll}else Tl=!1;Aa=Tl&&(!document.documentMode||9<document.documentMode)}function lu(){_n&&(_n.detachEvent("onpropertychange",Ha),Dn=_n=null)}function Ha(e){if(e.propertyName==="value"&&ll(Dn)){var t=[];Ba(t,Dn,e,Xi(e)),xa(jd,t)}}function Id(e,t,n){e==="focusin"?(lu(),_n=t,Dn=n,_n.attachEvent("onpropertychange",Ha)):e==="focusout"&&lu()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Dn)}function Od(e,t){if(e==="click")return ll(t)}function Fd(e,t){if(e==="input"||e==="change")return ll(t)}function Dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Dd;function Un(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function Va(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Va(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ud(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Va(n.ownerDocument.documentElement,n)){if(r!==null&&lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ou(n,i);var o=ou(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Qe&&"documentMode"in document&&11>=document.documentMode,Ft=null,fi=null,Pn=null,pi=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Ft==null||Ft!==jr(r)||(r=Ft,"selectionStart"in r&&lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Un(Pn,r)||(Pn=r,r=Ur(fi,"onSelect"),0<r.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dt={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},jl={},$a={};Qe&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function il(e){if(jl[e])return jl[e];if(!Dt[e])return e;var t=Dt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $a)return jl[e]=t[n];return e}var Qa=il("animationend"),Ka=il("animationiteration"),Ya=il("animationstart"),Ga=il("transitionend"),Xa=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Xa.set(e,t),Lt(t,[e])}for(var Rl=0;Rl<au.length;Rl++){var Il=au[Rl],Ad=Il.toLowerCase(),Hd=Il[0].toUpperCase()+Il.slice(1);pt(Ad,"on"+Hd)}pt(Qa,"onAnimationEnd");pt(Ka,"onAnimationIteration");pt(Ya,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ga,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ac(r,t,void 0,e),e.currentTarget=null}function Za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;su(l,u,c),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;su(l,u,c),i=a}}}if(Ir)throw e=ai,Ir=!1,ai=null,e}function O(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(Ja(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),Ja(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[cr]){e[cr]=!0,la.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Ml("selectionchange",!1,t))}}function Ja(e,t,n,r){switch(Ma(t)){case 1:var l=nd;break;case 4:l=rd;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=xt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}xa(function(){var c=i,h=Xi(n),m=[];e:{var p=Xa.get(e);if(p!==void 0){var y=to,w=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":y=yd;break;case"focusin":w="focus",y=Nl;break;case"focusout":w="blur",y=Nl;break;case"beforeblur":case"afterblur":y=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kd;break;case Qa:case Ka:case Ya:y=sd;break;case Ga:y=Cd;break;case"scroll":y=ld;break;case"wheel":y=_d;break;case"copy":case"cut":case"paste":y=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo}var x=(t&4)!==0,D=!x&&e==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var s=c,f;s!==null;){f=s;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=In(s,d),v!=null&&x.push(An(s,v,f)))),D)break;s=s.return}0<x.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==ii&&(w=n.relatedTarget||n.fromElement)&&(xt(w)||w[Ke]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?xt(w):null,w!==null&&(D=jt(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=Jo,v="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=qo,v="onPointerLeave",d="onPointerEnter",s="pointer"),D=y==null?p:Ut(y),f=w==null?p:Ut(w),p=new x(v,s+"leave",y,n,h),p.target=D,p.relatedTarget=f,v=null,xt(h)===c&&(x=new x(d,s+"enter",w,n,h),x.target=f,x.relatedTarget=D,v=x),D=v,y&&w)t:{for(x=y,d=w,s=0,f=x;f;f=Rt(f))s++;for(f=0,v=d;v;v=Rt(v))f++;for(;0<s-f;)x=Rt(x),s--;for(;0<f-s;)d=Rt(d),f--;for(;s--;){if(x===d||d!==null&&x===d.alternate)break t;x=Rt(x),d=Rt(d)}x=null}else x=null;y!==null&&cu(m,p,y,x,!1),w!==null&&D!==null&&cu(m,D,w,x,!0)}}e:{if(p=c?Ut(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Rd;else if(nu(p))if(Aa)S=Fd;else{S=Md;var E=Id}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Od);if(S&&(S=S(e,c))){Ba(m,S,n,h);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&ei(p,"number",p.value)}switch(E=c?Ut(c):window,e){case"focusin":(nu(E)||E.contentEditable==="true")&&(Ft=E,fi=c,Pn=null);break;case"focusout":Pn=fi=Ft=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,uu(m,n,h);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":uu(m,n,h)}var _;if(ro)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ot?Da(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Fa&&n.locale!=="ko"&&(Ot||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ot&&(_=Oa()):(tt=h,eo="value"in tt?tt.value:tt.textContent,Ot=!0)),E=Ur(c,P),0<E.length&&(P=new bo(P,e,null,n,h),m.push({event:P,listeners:E}),_?P.data=_:(_=Ua(n),_!==null&&(P.data=_)))),(_=zd?Nd(e,n):Td(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(h=new bo("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=_))}Za(m,t)})}function An(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=In(e,n),i!=null&&r.unshift(An(e,i,l)),i=In(e,t),i!=null&&r.push(An(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=In(n,i),a!=null&&o.unshift(An(n,a,u))):l||(a=In(n,i),a!=null&&o.push(An(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,$d=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace($d,"")}function dr(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(g(425))}function Br(){}var mi=null,hi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Yd)}:gi;function Yd(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),De="__reactFiber$"+un,Hn="__reactProps$"+un,Ke="__reactContainer$"+un,yi="__reactEvents$"+un,Gd="__reactListeners$"+un,Xd="__reactHandles$"+un;function xt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pu(e);e!==null;){if(n=e[De])return n;e=pu(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[De]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ol(e){return e[Hn]||null}var wi=[],Bt=-1;function mt(e){return{current:e}}function F(e){0>Bt||(e.current=wi[Bt],wi[Bt]=null,Bt--)}function M(e,t){Bt++,wi[Bt]=e.current,e.current=t}var ft={},le=mt(ft),de=mt(!1),_t=ft;function bt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Ar(){F(de),F(le)}function mu(e,t,n){if(le.current!==ft)throw Error(g(168));M(le,t),M(de,n)}function ba(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Ic(e)||"Unknown",l));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,_t=le.current,M(le,e),M(de,de.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=ba(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,F(de),F(le),M(le,e)):F(de),M(de,n)}var He=null,ul=!1,Dl=!1;function qa(e){He===null?He=[e]:He.push(e)}function Zd(e){ul=!0,qa(e)}function ht(){if(!Dl&&He!==null){Dl=!0;var e=0,t=I;try{var n=He;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,ul=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),Ea(Zi,ht),l}finally{I=t,Dl=!1}}return null}var At=[],Ht=0,Vr=null,Wr=0,xe=[],ke=0,Pt=null,Ve=1,We="";function yt(e,t){At[Ht++]=Wr,At[Ht++]=Vr,Vr=e,Wr=t}function es(e,t,n){xe[ke++]=Ve,xe[ke++]=We,xe[ke++]=Pt,Pt=e;var r=Ve;e=We;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var i=32-Re(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Re(t)+l|n<<l|r,We=i+e}else Ve=1<<i|n<<l|r,We=e}function io(e){e.return!==null&&(yt(e,1),es(e,1,0))}function oo(e){for(;e===Vr;)Vr=At[--Ht],At[Ht]=null,Wr=At[--Ht],At[Ht]=null;for(;e===Pt;)Pt=xe[--ke],xe[ke]=null,We=xe[--ke],xe[ke]=null,Ve=xe[--ke],xe[ke]=null}var ve=null,he=null,U=!1,Le=null;function ts(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,he=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(U){var t=he;if(t){var n=t;if(!vu(e,t)){if(xi(e))throw Error(g(418));t=ot(n.nextSibling);var r=ve;t&&vu(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,U=!1,ve=e)}}else{if(xi(e))throw Error(g(418));e.flags=e.flags&-4097|2,U=!1,ve=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!U)return gu(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=he)){if(xi(e))throw ns(),Error(g(418));for(;t;)ts(e,t),t=ot(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ve?ot(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=he;e;)e=ot(e.nextSibling)}function qt(){he=ve=null,U=!1}function uo(e){Le===null?Le=[e]:Le.push(e)}var Jd=Xe.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function rs(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function l(d,s){return d=ct(d,s),d.index=0,d.sibling=null,d}function i(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,s,f,v){return s===null||s.tag!==6?(s=$l(f,d.mode,v),s.return=d,s):(s=l(s,f),s.return=d,s)}function a(d,s,f,v){var S=f.type;return S===Mt?h(d,s,f.props.children,v,f.key):s!==null&&(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&yu(S)===s.type)?(v=l(s,f.props),v.ref=hn(d,s,f),v.return=d,v):(v=Lr(f.type,f.key,f.props,null,d.mode,v),v.ref=hn(d,s,f),v.return=d,v)}function c(d,s,f,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Ql(f,d.mode,v),s.return=d,s):(s=l(s,f.children||[]),s.return=d,s)}function h(d,s,f,v,S){return s===null||s.tag!==7?(s=Et(f,d.mode,v,S),s.return=d,s):(s=l(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=$l(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case nr:return f=Lr(s.type,s.key,s.props,null,d.mode,f),f.ref=hn(d,null,s),f.return=d,f;case It:return s=Ql(s,d.mode,f),s.return=d,s;case Je:var v=s._init;return m(d,v(s._payload),f)}if(wn(s)||cn(s))return s=Et(s,d.mode,f,null),s.return=d,s;pr(d,s)}return null}function p(d,s,f,v){var S=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:u(d,s,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===S?a(d,s,f,v):null;case It:return f.key===S?c(d,s,f,v):null;case Je:return S=f._init,p(d,s,S(f._payload),v)}if(wn(f)||cn(f))return S!==null?null:h(d,s,f,v,null);pr(d,f)}return null}function y(d,s,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(s,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nr:return d=d.get(v.key===null?f:v.key)||null,a(s,d,v,S);case It:return d=d.get(v.key===null?f:v.key)||null,c(s,d,v,S);case Je:var E=v._init;return y(d,s,f,E(v._payload),S)}if(wn(v)||cn(v))return d=d.get(f)||null,h(s,d,v,S,null);pr(s,v)}return null}function w(d,s,f,v){for(var S=null,E=null,_=s,P=s=0,W=null;_!==null&&P<f.length;P++){_.index>P?(W=_,_=null):W=_.sibling;var j=p(d,_,f[P],v);if(j===null){_===null&&(_=W);break}e&&_&&j.alternate===null&&t(d,_),s=i(j,s,P),E===null?S=j:E.sibling=j,E=j,_=W}if(P===f.length)return n(d,_),U&&yt(d,P),S;if(_===null){for(;P<f.length;P++)_=m(d,f[P],v),_!==null&&(s=i(_,s,P),E===null?S=_:E.sibling=_,E=_);return U&&yt(d,P),S}for(_=r(d,_);P<f.length;P++)W=y(_,d,P,f[P],v),W!==null&&(e&&W.alternate!==null&&_.delete(W.key===null?P:W.key),s=i(W,s,P),E===null?S=W:E.sibling=W,E=W);return e&&_.forEach(function(Pe){return t(d,Pe)}),U&&yt(d,P),S}function x(d,s,f,v){var S=cn(f);if(typeof S!="function")throw Error(g(150));if(f=S.call(f),f==null)throw Error(g(151));for(var E=S=null,_=s,P=s=0,W=null,j=f.next();_!==null&&!j.done;P++,j=f.next()){_.index>P?(W=_,_=null):W=_.sibling;var Pe=p(d,_,j.value,v);if(Pe===null){_===null&&(_=W);break}e&&_&&Pe.alternate===null&&t(d,_),s=i(Pe,s,P),E===null?S=Pe:E.sibling=Pe,E=Pe,_=W}if(j.done)return n(d,_),U&&yt(d,P),S;if(_===null){for(;!j.done;P++,j=f.next())j=m(d,j.value,v),j!==null&&(s=i(j,s,P),E===null?S=j:E.sibling=j,E=j);return U&&yt(d,P),S}for(_=r(d,_);!j.done;P++,j=f.next())j=y(_,d,P,j.value,v),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?P:j.key),s=i(j,s,P),E===null?S=j:E.sibling=j,E=j);return e&&_.forEach(function(an){return t(d,an)}),U&&yt(d,P),S}function D(d,s,f,v){if(typeof f=="object"&&f!==null&&f.type===Mt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var S=f.key,E=s;E!==null;){if(E.key===S){if(S=f.type,S===Mt){if(E.tag===7){n(d,E.sibling),s=l(E,f.props.children),s.return=d,d=s;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&yu(S)===E.type){n(d,E.sibling),s=l(E,f.props),s.ref=hn(d,E,f),s.return=d,d=s;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===Mt?(s=Et(f.props.children,d.mode,v,f.key),s.return=d,d=s):(v=Lr(f.type,f.key,f.props,null,d.mode,v),v.ref=hn(d,s,f),v.return=d,d=v)}return o(d);case It:e:{for(E=f.key;s!==null;){if(s.key===E)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=l(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=Ql(f,d.mode,v),s.return=d,d=s}return o(d);case Je:return E=f._init,D(d,s,E(f._payload),v)}if(wn(f))return w(d,s,f,v);if(cn(f))return x(d,s,f,v);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=l(s,f),s.return=d,d=s):(n(d,s),s=$l(f,d.mode,v),s.return=d,d=s),o(d)):n(d,s)}return D}var en=rs(!0),ls=rs(!1),$r=mt(null),Qr=null,Vt=null,ao=null;function so(){ao=Vt=Qr=null}function co(e){var t=$r.current;F($r),e._currentValue=t}function Si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Qr=e,ao=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Qr===null)throw Error(g(308));Vt=e,Qr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var kt=null;function fo(e){kt===null?kt=[e]:kt.push(e)}function is(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ji(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;be=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,h=c=a=null,u=i;do{var p=u.lane,y=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,x=u;switch(p=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=H({},m,p);break e;case 2:be=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,a=m):h=h.next=y,o|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Nt|=o,e.lanes=o,e.memoizedState=m}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var bn={},Be=mt(bn),Vn=mt(bn),Wn=mt(bn);function St(e){if(e===bn)throw Error(g(174));return e}function mo(e,t){switch(M(Wn,t),M(Vn,e),M(Be,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}F(Be),M(Be,t)}function tn(){F(Be),F(Vn),F(Wn)}function us(e){St(Wn.current);var t=St(Be.current),n=ni(t,e.type);t!==n&&(M(Vn,e),M(Be,n))}function ho(e){Vn.current===e&&(F(Be),F(Vn))}var B=mt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function vo(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var _r=Xe.ReactCurrentDispatcher,Bl=Xe.ReactCurrentBatchConfig,zt=0,A=null,Y=null,Z=null,Gr=!1,zn=!1,$n=0,bd=0;function te(){throw Error(g(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,l,i){if(zt=i,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?nf:rf,e=n(r,l),zn){i=0;do{if(zn=!1,$n=0,25<=i)throw Error(g(301));i+=1,Z=Y=null,t.updateQueue=null,_r.current=lf,e=n(r,l)}while(zn)}if(_r.current=Xr,t=Y!==null&&Y.next!==null,zt=0,Z=Y=A=null,Gr=!1,t)throw Error(g(300));return e}function wo(){var e=$n!==0;return $n=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?A.memoizedState=Z=e:Z=Z.next=e,Z}function _e(){if(Y===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?A.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(g(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?A.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=_e(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,c=i;do{var h=c.lane;if((zt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,A.lanes|=h,Nt|=h}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=u,Me(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,A.lanes|=i,Nt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=_e(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Me(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function as(){}function ss(e,t){var n=A,r=_e(),l=t(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,xo(fs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,ds.bind(null,n,r,l,t),void 0,null),J===null)throw Error(g(349));zt&30||cs(n,t,l)}return l}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ds(e,t,n,r){t.value=n,t.getSnapshot=r,ps(t)&&ms(e)}function fs(e,t,n){return n(function(){ps(t)&&ms(e)})}function ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function ms(e){var t=Ye(e,1);t!==null&&Ie(t,e,1,-1)}function ku(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=tf.bind(null,A,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hs(){return _e().memoizedState}function Pr(e,t,n,r){var l=Fe();A.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&go(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}A.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function Su(e,t){return Pr(8390656,8,e,t)}function xo(e,t){return al(2048,8,e,t)}function vs(e,t){return al(4,2,e,t)}function gs(e,t){return al(4,4,e,t)}function ys(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ws(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,ys.bind(null,t,e),n)}function ko(){}function xs(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ks(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ss(e,t,n){return zt&21?(Me(n,t)||(n=za(),A.lanes|=n,Nt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function qd(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{I=n,Bl.transition=r}}function Cs(){return _e().memoizedState}function ef(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e))_s(t,n);else if(n=is(e,t,n,r),n!==null){var l=oe();Ie(n,e,r,l),Ps(n,t,r)}}function tf(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))_s(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Me(u,o)){var a=t.interleaved;a===null?(l.next=l,fo(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=is(e,t,l,r),n!==null&&(l=oe(),Ie(n,e,r,l),Ps(n,t,r))}}function Es(e){var t=e.alternate;return e===A||t!==null&&t===A}function _s(e,t){zn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ji(e,n)}}var Xr={readContext:Ee,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nf={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ef.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:ku,useDebugValue:ko,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=ku(!1),t=e[0];return e=qd.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,l=Fe();if(U){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),J===null)throw Error(g(349));zt&30||cs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Su(fs.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,ds.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=J.identifierPrefix;if(U){var n=We,r=Ve;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:xs,useContext:Ee,useEffect:xo,useImperativeHandle:ws,useInsertionEffect:vs,useLayoutEffect:gs,useMemo:ks,useReducer:Al,useRef:hs,useState:function(){return Al(Qn)},useDebugValue:ko,useDeferredValue:function(e){var t=_e();return Ss(t,Y.memoizedState,e)},useTransition:function(){var e=Al(Qn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:ss,useId:Cs,unstable_isNewReconciler:!1},lf={readContext:Ee,useCallback:xs,useContext:Ee,useEffect:xo,useImperativeHandle:ws,useInsertionEffect:vs,useLayoutEffect:gs,useMemo:ks,useReducer:Hl,useRef:hs,useState:function(){return Hl(Qn)},useDebugValue:ko,useDeferredValue:function(e){var t=_e();return Y===null?t.memoizedState=e:Ss(t,Y.memoizedState,e)},useTransition:function(){var e=Hl(Qn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:ss,useId:Cs,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=$e(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Ie(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=$e(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Ie(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=st(e),l=$e(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Ie(t,e,r,n),Er(t,e,r))}};function Cu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function zs(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=fe(t)?_t:le.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},po(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=fe(t)?_t:le.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Rc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function Ns(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Oi=r),_i(e,t)},n}function Ts(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=xf.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var uf=Xe.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?ls(t,null,n,r):en(t,e.child,n,r)}function Nu(e,t,n,r,l){n=n.render;var i=t.ref;return Xt(t,l),r=yo(e,t,n,r,i,l),n=wo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(U&&n&&io(t),t.flags|=1,ie(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ls(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Pi(e,t,n,r,l)}function js(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M($t,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M($t,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,M($t,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,M($t,me),me|=r;return ie(e,t,l,n),t.child}function Rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,l){var i=fe(n)?_t:le.current;return i=bt(t,i),Xt(t,l),n=yo(e,t,n,r,i,l),r=wo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(U&&r&&io(t),t.flags|=1,ie(e,t,n,l),t.child)}function Lu(e,t,n,r,l){if(fe(n)){var i=!0;Hr(t)}else i=!1;if(Xt(t,l),t.stateNode===null)zr(e,t),zs(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=fe(n)?_t:le.current,c=bt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Eu(t,o,r,c),be=!1;var p=t.memoizedState;o.state=p,Kr(t,r,o,l),a=t.memoizedState,u!==r||p!==a||de.current||be?(typeof h=="function"&&(Ci(t,n,h,r),a=t.memoizedState),(u=be||Cu(t,n,u,r,p,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,os(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ne(t.type,u),o.props=c,m=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=fe(n)?_t:le.current,a=bt(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==a)&&Eu(t,o,r,a),be=!1,p=t.memoizedState,o.state=p,Kr(t,r,o,l);var w=t.memoizedState;u!==m||p!==w||de.current||be?(typeof y=="function"&&(Ci(t,n,y,r),w=t.memoizedState),(c=be||Cu(t,n,c,r,p,w,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zi(e,t,n,r,i,l)}function zi(e,t,n,r,l,i){Rs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&hu(t,n,!1),Ge(e,t,i);r=t.stateNode,uf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,u,i)):ie(e,t,u,i),t.memoizedState=r.state,l&&hu(t,n,!0),t.child}function Is(e){var t=e.stateNode;t.pendingContext?mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mu(e,t.context,!1),mo(e,t.containerInfo)}function ju(e,t,n,r,l){return qt(),uo(l),t.flags|=256,ie(e,t,n,r),t.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ms(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(B,l&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ti(n),t.memoizedState=Ni,e):So(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return af(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ct(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ct(u,i):(i=Et(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ti(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ni,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function So(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&uo(r),en(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(g(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=Ti(o),t.memoizedState=Ni,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(g(419)),r=Vl(i,r,void 0),mr(e,t,o,r)}if(u=(o&e.childLanes)!==0,ce||u){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Ie(r,e,l,-1))}return No(),r=Vl(Error(g(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ve=t,U=!0,Le=null,e!==null&&(xe[ke++]=Ve,xe[ke++]=We,xe[ke++]=Pt,Ve=e.id,We=e.overflow,Pt=t),t=So(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Si(e.return,t,n)}function Wl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Os(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Is(t),qt();break;case 5:us(t);break;case 1:fe(t.type)&&Hr(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M($r,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ms(e,t,n):(M(B,B.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);M(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Os(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Ge(e,t,n)}var Fs,Li,Ds,Us;Fs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};Ds=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Be.current);var i=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=ti(e,l),r=ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}ri(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&O("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Us=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cf(e,t,n){var r=t.pendingProps;switch(oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Ar(),ne(t),null;case 3:return r=t.stateNode,tn(),F(de),F(le),vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ui(Le),Le=null))),Li(e,t),ne(t),null;case 5:ho(t);var l=St(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ds(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=St(Be.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[De]=t,r[Hn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ho(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Wo(r,i),O("invalid",r)}ri(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",""+u]):jn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":rr(r),Vo(r,i,!0);break;case"textarea":rr(r),$o(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Br)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[De]=t,e[Hn]=r,Fs(e,t,!1,!1),t.stateNode=e;e:{switch(o=li(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)O(kn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ho(e,r),l=bl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Wo(e,r),l=ti(e,r),O("invalid",e);break;default:l=r}ri(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?ha(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pa(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Rn(e,a):typeof a=="number"&&Rn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&O("scroll",e):a!=null&&Qi(e,i,a,o))}switch(n){case"input":rr(e),Vo(e,r,!1);break;case"textarea":rr(e),$o(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Us(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=St(Wn.current),St(Be.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return ne(t),null;case 13:if(F(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&he!==null&&t.mode&1&&!(t.flags&128))ns(),qt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[De]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Le!==null&&(Ui(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?G===0&&(G=3):No())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Li(e,t),e===null&&Bn(t.stateNode.containerInfo),ne(t),null;case 10:return co(t.type._context),ne(t),null;case 17:return fe(t.type)&&Ar(),ne(t),null;case 19:if(F(B),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>rn&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ne(t),null}else 2*Q()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=B.current,M(B,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function df(e,t){switch(oo(t),t.tag){case 1:return fe(t.type)&&Ar(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),F(de),F(le),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return tn(),null;case 10:return co(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var hr=!1,re=!1,ff=typeof WeakSet=="function"?WeakSet:Set,k=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ji(e,t,n){try{n()}catch(r){V(e,t,r)}}var Iu=!1;function pf(e,t){if(mi=Fr,e=Wa(),lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===l&&(u=o),p===i&&++h===r&&(a=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Fr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,D=w.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ne(t.type,x),D);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=Iu,Iu=!1,w}function Nn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ji(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bs(e){var t=e.alternate;t!==null&&(e.alternate=null,Bs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[Hn],delete t[yi],delete t[Gd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function As(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||As(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}var b=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Hs(e,t,n),n=n.sibling}function Hs(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:re||Wt(n,t);case 6:var r=b,l=Te;b=null,Ze(e,t,n),b=r,Te=l,b!==null&&(Te?(e=b,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):b.removeChild(n.stateNode));break;case 18:b!==null&&(Te?(e=b,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),Fn(e)):Fl(b,n.stateNode));break;case 4:r=b,l=Te,b=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),b=r,Te=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ji(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ff),t.forEach(function(r){var l=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:b=u.stateNode,Te=!1;break e;case 3:b=u.stateNode.containerInfo,Te=!0;break e;case 4:b=u.stateNode.containerInfo,Te=!0;break e}u=u.return}if(b===null)throw Error(g(160));Hs(i,o,l),b=null,Te=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vs(t,e),t=t.sibling}function Vs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Oe(e),r&4){try{Nn(3,e,e.return),cl(3,e)}catch(x){V(e,e.return,x)}try{Nn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:ze(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(ze(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(x){V(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ca(l,i),li(u,o);var c=li(u,i);for(o=0;o<a.length;o+=2){var h=a[o],m=a[o+1];h==="style"?ha(l,m):h==="dangerouslySetInnerHTML"?pa(l,m):h==="children"?Rn(l,m):Qi(l,h,m,c)}switch(u){case"input":ql(l,i);break;case"textarea":da(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qt(l,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Hn]=i}catch(x){V(e,e.return,x)}}break;case 6:if(ze(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){V(e,e.return,x)}}break;case 3:if(ze(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:ze(t,e),Oe(e);break;case 13:ze(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=Q())),r&4&&Ou(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,ze(t,e),re=c):ze(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(m=k=h;k!==null;){switch(p=k,y=p.child,p.tag){case 0:case 11:case 14:case 15:Nn(4,p,p.return);break;case 1:Wt(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){V(r,n,x)}}break;case 5:Wt(p,p.return);break;case 22:if(p.memoizedState!==null){Du(m);continue}}y!==null?(y.return=p,k=y):Du(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ma("display",o))}catch(x){V(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){V(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(t,e),Oe(e),r&4&&Ou(e);break;case 21:break;default:ze(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(As(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var i=Mu(e);Mi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Mu(e);Ii(e,u,o);break;default:throw Error(g(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mf(e,t,n){k=e,Ws(e)}function Ws(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||re;u=hr;var c=re;if(hr=o,(re=a)&&!c)for(k=l;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Uu(l):a!==null?(a.return=o,k=a):Uu(l);for(;i!==null;)k=i,Ws(i),i=i.sibling;k=l,hr=u,re=c}Fu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):Fu(e)}}function Fu(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||t.flags&512&&Ri(t)}catch(p){V(t,t.return,p)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Du(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Uu(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){V(t,l,a)}}var i=t.return;try{Ri(t)}catch(a){V(t,i,a)}break;case 5:var o=t.return;try{Ri(t)}catch(a){V(t,o,a)}}}catch(a){V(t,t.return,a)}if(t===e){k=null;break}var u=t.sibling;if(u!==null){u.return=t.return,k=u;break}k=t.return}}var hf=Math.ceil,Zr=Xe.ReactCurrentDispatcher,Co=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,R=0,J=null,K=null,q=0,me=0,$t=mt(0),G=0,Yn=null,Nt=0,dl=0,Eo=0,Tn=null,se=null,_o=0,rn=1/0,Ae=null,Jr=!1,Oi=null,at=null,vr=!1,nt=null,br=0,Ln=0,Fi=null,Nr=-1,Tr=0;function oe(){return R&6?Q():Nr!==-1?Nr:Nr=Q()}function st(e){return e.mode&1?R&2&&q!==0?q&-q:Jd.transition!==null?(Tr===0&&(Tr=za()),Tr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e):1}function Ie(e,t,n,r){if(50<Ln)throw Ln=0,Fi=null,Error(g(185));Xn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(dl|=n),G===4&&et(e,q)),pe(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=Q()+500,ul&&ht()))}function pe(e,t){var n=e.callbackNode;Jc(e,t);var r=Or(e,e===J?q:0);if(r===0)n!==null&&Yo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yo(n),t===1)e.tag===0?Zd(Bu.bind(null,e)):qa(Bu.bind(null,e)),Kd(function(){!(R&6)&&ht()}),n=null;else{switch(Na(r)){case 1:n=Zi;break;case 4:n=_a;break;case 16:n=Mr;break;case 536870912:n=Pa;break;default:n=Mr}n=Js(n,$s.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $s(e,t){if(Nr=-1,Tr=0,R&6)throw Error(g(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Or(e,e===J?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=R;R|=2;var i=Ks();(J!==e||q!==t)&&(Ae=null,rn=Q()+500,Ct(e,t));do try{yf();break}catch(u){Qs(e,u)}while(!0);so(),Zr.current=i,R=l,K!==null?t=0:(J=null,q=0,t=G)}if(t!==0){if(t===2&&(l=si(e),l!==0&&(r=l,t=Di(e,l))),t===1)throw n=Yn,Ct(e,0),et(e,r),pe(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!vf(l)&&(t=qr(e,r),t===2&&(i=si(e),i!==0&&(r=i,t=Di(e,i))),t===1))throw n=Yn,Ct(e,0),et(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:wt(e,se,Ae);break;case 3:if(et(e,r),(r&130023424)===r&&(t=_o+500-Q(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(wt.bind(null,e,se,Ae),t);break}wt(e,se,Ae);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Re(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=gi(wt.bind(null,e,se,Ae),r);break}wt(e,se,Ae);break;case 5:wt(e,se,Ae);break;default:throw Error(g(329))}}}return pe(e,Q()),e.callbackNode===n?$s.bind(null,e):null}function Di(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=qr(e,t),e!==2&&(t=se,se=n,t!==null&&Ui(t)),e}function Ui(e){se===null?se=e:se.push.apply(se,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Eo,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Bu(e){if(R&6)throw Error(g(327));Zt();var t=Or(e,0);if(!(t&1))return pe(e,Q()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=si(e);r!==0&&(t=r,n=Di(e,r))}if(n===1)throw n=Yn,Ct(e,0),et(e,t),pe(e,Q()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,se,Ae),pe(e,Q()),null}function Po(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=Q()+500,ul&&ht())}}function Tt(e){nt!==null&&nt.tag===0&&!(R&6)&&Zt();var t=R;R|=1;var n=Ce.transition,r=I;try{if(Ce.transition=null,I=1,e)return e()}finally{I=r,Ce.transition=n,R=t,!(R&6)&&ht()}}function zo(){me=$t.current,F($t)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(oo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:tn(),F(de),F(le),vo();break;case 5:ho(r);break;case 4:tn();break;case 13:F(B);break;case 19:F(B);break;case 10:co(r.type._context);break;case 22:case 23:zo()}n=n.return}if(J=e,K=e=ct(e.current,null),q=me=t,G=0,Yn=null,Eo=dl=Nt=0,se=Tn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}kt=null}return e}function Qs(e,t){do{var n=K;try{if(so(),_r.current=Xr,Gr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(zt=0,Z=Y=A=null,zn=!1,$n=0,Co.current=null,n===null||n.return===null){G=1,Yn=t,K=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=q,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Pu(o);if(y!==null){y.flags&=-257,zu(y,o,u,i,t),y.mode&1&&_u(i,c,t),t=y,a=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(a),t.updateQueue=x}else w.add(a);break e}else{if(!(t&1)){_u(i,c,t),No();break e}a=Error(g(426))}}else if(U&&u.mode&1){var D=Pu(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),zu(D,o,u,i,t),uo(nn(a,u));break e}}i=a=nn(a,u),G!==4&&(G=2),Tn===null?Tn=[i]:Tn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ns(i,a,t);wu(i,d);break e;case 1:u=a;var s=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(at===null||!at.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ts(i,u,t);wu(i,v);break e}}i=i.return}while(i!==null)}Gs(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Ks(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function No(){(G===0||G===3||G===2)&&(G=4),J===null||!(Nt&268435455)&&!(dl&268435455)||et(J,q)}function qr(e,t){var n=R;R|=2;var r=Ks();(J!==e||q!==t)&&(Ae=null,Ct(e,t));do try{gf();break}catch(l){Qs(e,l)}while(!0);if(so(),R=n,Zr.current=r,K!==null)throw Error(g(261));return J=null,q=0,G}function gf(){for(;K!==null;)Ys(K)}function yf(){for(;K!==null&&!Vc();)Ys(K)}function Ys(e){var t=Zs(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Gs(e):K=t,Co.current=null}function Gs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(n=cf(n,t,me),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);G===0&&(G=5)}function wt(e,t,n){var r=I,l=Ce.transition;try{Ce.transition=null,I=1,wf(e,t,n,r)}finally{Ce.transition=l,I=r}return null}function wf(e,t,n,r){do Zt();while(nt!==null);if(R&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bc(e,i),e===J&&(K=J=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Js(Mr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=I;I=1;var u=R;R|=4,Co.current=null,pf(e,n),Vs(n,e),Ud(hi),Fr=!!mi,hi=mi=null,e.current=n,mf(n),Wc(),R=u,I=o,Ce.transition=i}else e.current=n;if(vr&&(vr=!1,nt=e,br=l),i=e.pendingLanes,i===0&&(at=null),Kc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Oi,Oi=null,e;return br&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Fi?Ln++:(Ln=0,Fi=e):Ln=0,ht(),null}function Zt(){if(nt!==null){var e=Na(br),t=Ce.transition,n=I;try{if(Ce.transition=null,I=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,br=0,R&6)throw Error(g(331));var l=R;for(R|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(k=c;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Nn(8,h,i)}var m=h.child;if(m!==null)m.return=h,k=m;else for(;k!==null;){h=k;var p=h.sibling,y=h.return;if(Bs(h),h===c){k=null;break}if(p!==null){p.return=y,k=p;break}k=y}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var s=e.current;for(k=s;k!==null;){o=k;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,k=f;else e:for(o=s;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch(S){V(u,u.return,S)}if(u===o){k=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,k=v;break e}k=u.return}}if(R=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{I=n,Ce.transition=t}}return!1}function Au(e,t,n){t=nn(n,t),t=Ns(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(Xn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=nn(n,e),e=Ts(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(q&n)===n&&(G===4||G===3&&(q&130023424)===q&&500>Q()-_o?Ct(e,0):Eo|=n),pe(e,t)}function Xs(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=oe();e=Ye(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xs(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Xs(e,n)}var Zs;Zs=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,sf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,U&&t.flags&1048576&&es(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=bt(t,le.current);Xt(t,n),l=yo(null,t,r,e,l,n);var i=wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,po(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=zi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&io(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ef(r),e=Ne(r,e),l){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,Ne(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Pi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Lu(e,t,r,l,n);case 3:e:{if(Is(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,l=i.element,os(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(g(423)),t),t=ju(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(g(424)),t),t=ju(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ve=t,U=!0,Le=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ge(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&ki(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,vi(r,l)?o=null:i!==null&&vi(r,i)&&(t.flags|=32),Rs(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Ms(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Nu(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,M($r,r._currentValue),r._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===l.children&&!de.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=$e(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Si(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(g(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Si(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ee(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Ne(r,t.pendingProps),l=Ne(r.type,l),Tu(e,t,r,l,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),zr(e,t),t.tag=1,fe(r)?(e=!0,Hr(t)):e=!1,Xt(t,n),zs(t,r,l),Ei(t,r,l,n),zi(null,t,r,!0,e,n);case 19:return Os(e,t,n);case 22:return js(e,t,n)}throw Error(g(156,t.tag))};function Js(e,t){return Ea(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Cf(e,t,n,r)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return To(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Gi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")To(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return Et(n.children,l,i,t);case Ki:o=8,l|=8;break;case Gl:return e=Se(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Xl:return e=Se(13,n,t,l),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Se(19,n,t,l),e.elementType=Zl,e.lanes=i,e;case ua:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:o=10;break e;case oa:o=9;break e;case Yi:o=11;break e;case Gi:o=14;break e;case Je:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Se(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,l,i,o,u,a){return e=new _f(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},po(i),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bs(e){if(!e)return ft;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(fe(n))return ba(e,n,t)}return t}function qs(e,t,n,r,l,i,o,u,a){return e=Lo(n,r,!0,e,l,i,o,u,a),e.context=bs(null),n=e.current,r=oe(),l=st(n),i=$e(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Xn(e,l,r),pe(e,r),e}function pl(e,t,n,r){var l=t.current,i=oe(),o=st(l);return n=bs(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,o),e!==null&&(Ie(e,l,o,i),Er(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jo(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function zf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}ml.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));pl(e,t,null,null)};ml.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){pl(null,e,null,null)}),t[Ke]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=ja();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&Ia(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Nf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=el(o);i.call(c)}}var o=qs(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=o,e[Ke]=o.current,Bn(e.nodeType===8?e.parentNode:e),Tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=el(a);u.call(c)}}var a=Lo(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=a,e[Ke]=a.current,Bn(e.nodeType===8?e.parentNode:e),Tt(function(){pl(t,a,n,r)}),a}function vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=el(o);u.call(a)}}pl(t,o,e,l)}else o=Nf(n,t,e,l,r);return el(o)}Ta=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xn(t.pendingLanes);n!==0&&(Ji(t,n|1),pe(t,Q()),!(R&6)&&(rn=Q()+500,ht()))}break;case 13:Tt(function(){var r=Ye(e,1);if(r!==null){var l=oe();Ie(r,e,1,l)}}),jo(e,1)}};bi=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=oe();Ie(t,e,134217728,n)}jo(e,134217728)}};La=function(e){if(e.tag===13){var t=st(e),n=Ye(e,t);if(n!==null){var r=oe();Ie(n,e,t,r)}jo(e,t)}};ja=function(){return I};Ra=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};oi=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(g(90));sa(r),ql(r,l)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};ya=Po;wa=Tt;var Tf={usingClientEntryPoint:!1,Events:[Jn,Ut,ol,va,ga,Po]},gn={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lf={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{nl=gr.inject(Lf),Ue=gr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(t))throw Error(g(200));return Pf(e,t,null,n)};ye.createRoot=function(e,t){if(!Io(e))throw Error(g(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Ro(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Sa(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Tt(e)};ye.hydrate=function(e,t,n){if(!hl(t))throw Error(g(200));return vl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Io(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qs(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};ye.render=function(e,t,n){if(!hl(t))throw Error(g(200));return vl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!hl(e))throw Error(g(40));return e._reactRootContainer?(Tt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=Po;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return vl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=ye;var jf=ta.exports,Wu=jf;Kl.createRoot=Wu.createRoot,Kl.hydrateRoot=Wu.hydrateRoot;const yr=[{id:"simple-border",title:"Custom Border",description:"Simple border radius and styling.",category:"easy",initialCode:`.preview-box {
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
}`,htmlSnippet:`<div class="preview-box">
  <h3>Hover me!</h3>
  <p>I move up and get a deeper shadow.</p>
</div>`},{id:"gradient-text",title:"Gradient Text",description:"Text with a gradient fill.",category:"normal",initialCode:`.preview-text {
  font-size: 60px;
  font-weight: 900;
  background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.preview-container {
  background: #fff;
}`,htmlSnippet:'<h1 class="preview-text">Gradient Text</h1>'},{id:"floating-label-input",title:"Input Focus Animation",description:"Floating label animation on focus.",category:"normal",initialCode:`.input-group {
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
</div>`},{id:"custom-toggle",title:"Custom Toggle",description:"Pure CSS toggle switch.",category:"normal",initialCode:`.toggle-checkbox {
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
  <input type="checkbox" id="toggle" class="toggle-checkbox">
  <label for="toggle" class="toggle-label"></label>
</div>`},{id:"custom-scrollbar",title:"Custom Scrollbar",description:"Styling the browser scrollbar (Webkit).",category:"normal",initialCode:`/* The scroll content container */
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
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>More content to make it scroll...</p>
</div>`},{id:"css-accordion",title:"Pure CSS Accordion",description:"Expandable accordion using checkbox hack.",category:"normal",initialCode:`.accordion-item {
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
}`,htmlSnippet:`<div class="accordion-item">
  <input type="checkbox" id="acc1" class="accordion-input" checked>
  <label for="acc1" class="accordion-label">Section 1</label>
  <div class="accordion-content">
    <div class="accordion-content-inner">
      This is the content for section 1.
    </div>
  </div>
</div>
<div class="accordion-item">
  <input type="checkbox" id="acc2" class="accordion-input">
  <label for="acc2" class="accordion-label">Section 2</label>
  <div class="accordion-content">
    <div class="accordion-content-inner">
      This is the content for section 2.
    </div>
  </div>
</div>`},{id:"css-tabs",title:"Pure CSS Tabs",description:"Tab navigation using radio buttons.",category:"normal",initialCode:`.tabs {
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
</div>`},{id:"hover-tooltip",title:"Hover Tooltip",description:"Tooltip that appears on hover.",category:"normal",initialCode:`.tooltip-wrapper {
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
</div>`},{id:"dropdown-menu",title:"Dropdown Menu",description:"Hover-activated dropdown menu.",category:"normal",initialCode:`.dropdown {
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
</div>`},{id:"glassmorphism",title:"Glassmorphism",description:"Modern frosted glass effect.",category:"hard",initialCode:`.preview-box {
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
</nav>`}],Rf=["easy","normal","hard","animation"],If={easy:"Easy",normal:"Normal",hard:"Hard",animation:"Animation"},Mf=({effects:e,selectedId:t,onSelect:n})=>{const r=je.useMemo(()=>{const u={easy:[],normal:[],hard:[],animation:[]};return e.forEach(a=>{u[a.category].push(a)}),u},[e]),[l,i]=je.useState({easy:!0,normal:!0,hard:!0,animation:!0}),o=u=>{i(a=>({...a,[u]:!a[u]}))};return N.jsxs("div",{style:{width:"240px",borderRight:"1px solid #333",background:"#1a1a1a",height:"100vh",overflowY:"auto",display:"flex",flexDirection:"column"},children:[N.jsx("h2",{style:{padding:"1.5rem 1rem",borderBottom:"1px solid #333",margin:0,fontSize:"1.2rem",background:"#111"},children:"CSS Tips"}),N.jsx("div",{style:{flex:1},children:Rf.map(u=>N.jsxs("div",{style:{borderBottom:"1px solid #2a2a2a"},children:[N.jsxs("div",{onClick:()=>o(u),style:{padding:"0.8rem 1rem",background:"#222",cursor:"pointer",fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#ddd",fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:[N.jsx("span",{children:If[u]}),N.jsx("span",{style:{fontSize:"0.8em",color:"#666"},children:l[u]?"▼":"▶"})]}),l[u]&&N.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:r[u].map(a=>N.jsx("li",{onClick:()=>n(a.id),style:{padding:"0.8rem 1rem 0.8rem 1.5rem",cursor:"pointer",background:a.id===t?"#2c3e50":"transparent",color:a.id===t?"#fff":"#aaa",borderLeft:a.id===t?"3px solid #3498db":"3px solid transparent",transition:"all 0.2s",fontSize:"0.9rem"},children:N.jsx("div",{style:{fontWeight:a.id===t?"600":"400"},children:a.title})},a.id))})]},u))})]})},Of=({htmlSnippet:e,cssCode:t})=>N.jsxs("div",{className:"preview-container",children:[N.jsx("style",{children:t}),N.jsx("div",{dangerouslySetInnerHTML:{__html:e},style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})]}),Ff=({code:e,onChange:t,format:n,onFormatChange:r,readOnly:l=!1})=>{const[i,o]=je.useState(!1),u=async()=>{try{await navigator.clipboard.writeText(e),o(!0),setTimeout(()=>o(!1),2e3)}catch(a){console.error("Failed to copy:",a)}};return N.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[N.jsxs("div",{style:{background:"#111",padding:"0.5rem 1rem",borderBottom:"1px solid #444",fontSize:"0.9rem",fontWeight:"bold",color:"#888",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[N.jsx("span",{children:"CSS Editor"}),N.jsxs("select",{value:n,onChange:a=>r(a.target.value),style:{background:"#333",color:"#ddd",border:"1px solid #444",borderRadius:"4px",padding:"2px 8px",fontSize:"0.8rem",outline:"none",cursor:"pointer"},children:[N.jsx("option",{value:"pure-css",children:"Pure CSS"}),N.jsx("option",{value:"tailwind",children:"Tailwind CSS"}),N.jsx("option",{value:"styled-components",children:"Styled Components"}),N.jsx("option",{value:"vanilla-extract",children:"Vanilla Extract"})]})]}),N.jsx("button",{onClick:u,style:{background:i?"#27ae60":"#444",color:i?"white":"#ddd",border:"none",padding:"0.4rem 0.8rem",borderRadius:"4px",cursor:"pointer",fontSize:"0.8rem",fontWeight:"normal",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"0.3rem"},onMouseEnter:a=>{i||(a.currentTarget.style.background="#555")},onMouseLeave:a=>{i||(a.currentTarget.style.background="#444")},children:i?N.jsxs(N.Fragment,{children:[N.jsx("span",{children:"✓"}),N.jsx("span",{children:"Copied!"})]}):N.jsxs(N.Fragment,{children:[N.jsx("span",{children:"📋"}),N.jsx("span",{children:"Copy"})]})})]}),N.jsx("textarea",{value:e,onChange:a=>!l&&t(a.target.value),readOnly:l,spellCheck:!1,style:{flex:1,width:"100%",background:l?"#1a1a1a":"#1e1e1e",color:l?"#aaa":"#d4d4d4",border:"none",padding:"1rem",fontFamily:"monospace",fontSize:"14px",resize:"none",outline:"none",lineHeight:"1.5"}})]})};function Df(){const[e,t]=je.useState({}),[n,r]=je.useState(yr[0].id),[l,i]=je.useState("pure-css"),o=je.useMemo(()=>yr.find(h=>h.id===n)||yr[0],[n]),u=je.useMemo(()=>{if(l==="pure-css")return e[n]!==void 0?e[n]:o.initialCode;switch(l){case"tailwind":return o.tailwindCode||"/* Tailwind version coming soon... */";case"styled-components":return o.styledComponentCode||"/* Styled Components version coming soon... */";case"vanilla-extract":return o.vanillaExtractCode||"/* Vanilla Extract version coming soon... */";default:return""}},[l,e,n,o]),a=l!=="pure-css",c=h=>{l==="pure-css"&&t(m=>({...m,[n]:h}))};return N.jsxs("div",{style:{display:"flex",height:"100vh",width:"100vw",overflow:"hidden"},children:[N.jsx(Mf,{effects:yr,selectedId:n,onSelect:r}),N.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[N.jsx("div",{style:{flex:"1 1 60%",minHeight:0},children:N.jsx(Of,{htmlSnippet:o.htmlSnippet,cssCode:e[n]??o.initialCode})}),N.jsx("div",{style:{flex:"1 1 40%",minHeight:0,borderTop:"1px solid #444"},children:N.jsx(Ff,{code:u,onChange:c,format:l,onFormatChange:i,readOnly:a})})]})]})}Kl.createRoot(document.getElementById("root")).render(N.jsx(wc.StrictMode,{children:N.jsx(Df,{})}));
