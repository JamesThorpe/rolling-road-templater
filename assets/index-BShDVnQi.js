(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ct={},Zr=[],Hn=()=>{},f_=()=>!1,Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),iu=t=>t.startsWith("onUpdate:"),Ct=Object.assign,ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d_=Object.prototype.hasOwnProperty,rt=(t,e)=>d_.call(t,e),Be=Array.isArray,Jr=t=>Aa(t)==="[object Map]",Nh=t=>Aa(t)==="[object Set]",He=t=>typeof t=="function",bt=t=>typeof t=="string",Ni=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",Uh=t=>(ht(t)||He(t))&&He(t.then)&&He(t.catch),Fh=Object.prototype.toString,Aa=t=>Fh.call(t),h_=t=>Aa(t).slice(8,-1),Oh=t=>Aa(t)==="[object Object]",su=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cs=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},p_=/-(\w)/g,fn=wa(t=>t.replace(p_,(e,n)=>n?n.toUpperCase():"")),m_=/\B([A-Z])/g,_r=wa(t=>t.replace(m_,"-$1").toLowerCase()),Ui=wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=wa(t=>t?`on${Ui(t)}`:""),Ri=(t,e)=>!Object.is(t,e),Ka=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},g_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},__=t=>{const e=bt(t)?Number(t):NaN;return isNaN(e)?t:e};let lf;const Ca=()=>lf||(lf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ou(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=bt(i)?S_(i):ou(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(t)||ht(t))return t}const v_=/;(?![^(]*\))/g,x_=/:([^]+)/,y_=/\/\*[^]*?\*\//g;function S_(t){const e={};return t.replace(y_,"").split(v_).forEach(n=>{if(n){const i=n.split(x_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function au(t){let e="";if(bt(t))e=t;else if(Be(t))for(let n=0;n<t.length;n++){const i=au(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const M_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b_=nu(M_);function kh(t){return!!t||t===""}const zh=t=>!!(t&&t.__v_isRef===!0),Vh=t=>bt(t)?t:t==null?"":Be(t)||ht(t)&&(t.toString===Fh||!He(t.toString))?zh(t)?Vh(t.value):JSON.stringify(t,Hh,2):String(t),Hh=(t,e)=>zh(e)?Hh(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Za(i,s)+" =>"]=r,n),{})}:Nh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Za(n))}:Ni(e)?Za(e):ht(e)&&!Be(e)&&!Oh(e)?String(e):e,Za=(t,e="")=>{var n;return Ni(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Gh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function E_(t){return new Gh(t)}function T_(){return $t}function A_(t,e=!1){$t&&$t.cleanups.push(t)}let ft;const Ja=new WeakSet;class Wh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$h(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cf(this),Yh(this);const e=ft,n=Pn;ft=this,Pn=!0;try{return this.fn()}finally{qh(this),ft=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,cf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$l(this)&&this.run()}get dirty(){return $l(this)}}let Xh=0,Rs,Ps;function $h(t,e=!1){if(t.flags|=8,e){t.next=Ps,Ps=t;return}t.next=Rs,Rs=t}function lu(){Xh++}function cu(){if(--Xh>0)return;if(Ps){let e=Ps;for(Ps=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Rs;){let e=Rs;for(Rs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Yh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),uu(i),w_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function $l(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zs))return;t.globalVersion=zs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!$l(t)){t.flags&=-3;return}const n=ft,i=Pn;ft=t,Pn=!0;try{Yh(t);const r=t.fn(t._value);(e.version===0||Ri(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=n,Pn=i,qh(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)uu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function w_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const Kh=[];function Fi(){Kh.push(Pn),Pn=!1}function Oi(){const t=Kh.pop();Pn=t===void 0?!0:t}function cf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let zs=0;class C_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!Pn||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new C_(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,Zh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=i)}return n}trigger(e){this.version++,zs++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cu()}}}function Zh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const aa=new WeakMap,or=Symbol(""),Yl=Symbol(""),Vs=Symbol("");function Bt(t,e,n){if(Pn&&ft){let i=aa.get(t);i||aa.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new fu),r.map=i,r.key=n),r.track()}}function ii(t,e,n,i,r,s){const o=aa.get(t);if(!o){zs++;return}const a=l=>{l&&l.trigger()};if(lu(),e==="clear")o.forEach(a);else{const l=Be(t),c=l&&su(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Vs||!Ni(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Vs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(or)),Jr(t)&&a(o.get(Yl)));break;case"delete":l||(a(o.get(or)),Jr(t)&&a(o.get(Yl)));break;case"set":Jr(t)&&a(o.get(or));break}}cu()}function R_(t,e){const n=aa.get(t);return n&&n.get(e)}function Tr(t){const e=Ze(t);return e===t?e:(Bt(e,"iterate",Vs),yn(t)?e:e.map(kt))}function Ra(t){return Bt(t=Ze(t),"iterate",Vs),t}const P_={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,kt)},concat(...t){return Tr(this).concat(...t.map(e=>Be(e)?Tr(e):e))},entries(){return Qa(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return jn(this,"every",t,e,void 0,arguments)},filter(t,e){return jn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return jn(this,"find",t,e,kt,arguments)},findIndex(t,e){return jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return el(this,"includes",t)},indexOf(...t){return el(this,"indexOf",t)},join(t){return Tr(this).join(t)},lastIndexOf(...t){return el(this,"lastIndexOf",t)},map(t,e){return jn(this,"map",t,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...t){return xs(this,"push",t)},reduce(t,...e){return uf(this,"reduce",t,e)},reduceRight(t,...e){return uf(this,"reduceRight",t,e)},shift(){return xs(this,"shift")},some(t,e){return jn(this,"some",t,e,void 0,arguments)},splice(...t){return xs(this,"splice",t)},toReversed(){return Tr(this).toReversed()},toSorted(t){return Tr(this).toSorted(t)},toSpliced(...t){return Tr(this).toSpliced(...t)},unshift(...t){return xs(this,"unshift",t)},values(){return Qa(this,"values",kt)}};function Qa(t,e,n){const i=Ra(t),r=i[e]();return i!==t&&!yn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const D_=Array.prototype;function jn(t,e,n,i,r,s){const o=Ra(t),a=o!==t&&!yn(t),l=o[e];if(l!==D_[e]){const f=l.apply(t,s);return a?kt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,kt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function uf(t,e,n,i){const r=Ra(t);let s=n;return r!==t&&(yn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,kt(a),l,t)}),r[e](s,...i)}function el(t,e,n){const i=Ze(t);Bt(i,"iterate",Vs);const r=i[e](...n);return(r===-1||r===!1)&&pu(n[0])?(n[0]=Ze(n[0]),i[e](...n)):r}function xs(t,e,n=[]){Fi(),lu();const i=Ze(t)[e].apply(t,n);return cu(),Oi(),i}const L_=nu("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ni));function I_(t){Ni(t)||(t=String(t));const e=Ze(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Qh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?G_:ip:s?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){let l;if(o&&(l=P_[n]))return l;if(n==="hasOwnProperty")return I_}const a=Reflect.get(e,n,mt(e)?e:i);return(Ni(n)?Jh.has(n):L_(n))||(r||Bt(e,"get",n),s)?a:mt(a)?o&&su(n)?a:a.value:ht(a)?r?Pa(a):qt(a):a}}class ep extends Qh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=cr(s);if(!yn(i)&&!cr(i)&&(s=Ze(s),i=Ze(i)),!Be(e)&&mt(s)&&!mt(i))return l?!1:(s.value=i,!0)}const o=Be(e)&&su(n)?Number(n)<e.length:rt(e,n),a=Reflect.set(e,n,i,mt(e)?e:r);return e===Ze(r)&&(o?Ri(i,s)&&ii(e,"set",n,i):ii(e,"add",n,i)),a}deleteProperty(e,n){const i=rt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ii(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ni(n)||!Jh.has(n))&&Bt(e,"has",n),i}ownKeys(e){return Bt(e,"iterate",Be(e)?"length":or),Reflect.ownKeys(e)}}class N_ extends Qh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const U_=new ep,F_=new N_,O_=new ep(!0);const ql=t=>t,po=t=>Reflect.getPrototypeOf(t);function B_(t,e,n){return function(...i){const r=this.__v_raw,s=Ze(r),o=Jr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?ql:e?jl:kt;return!e&&Bt(s,"iterate",l?Yl:or),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function k_(t,e){const n={get(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);t||(Ri(r,a)&&Bt(o,"get",r),Bt(o,"get",a));const{has:l}=po(o),c=e?ql:t?jl:kt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Bt(Ze(r),"iterate",or),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);return t||(Ri(r,a)&&Bt(o,"has",r),Bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ze(a),c=e?ql:t?jl:kt;return!t&&Bt(l,"iterate",or),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ct(n,t?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(r){!e&&!yn(r)&&!cr(r)&&(r=Ze(r));const s=Ze(this);return po(s).has.call(s,r)||(s.add(r),ii(s,"add",r,r)),this},set(r,s){!e&&!yn(s)&&!cr(s)&&(s=Ze(s));const o=Ze(this),{has:a,get:l}=po(o);let c=a.call(o,r);c||(r=Ze(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ri(s,u)&&ii(o,"set",r,s):ii(o,"add",r,s),this},delete(r){const s=Ze(this),{has:o,get:a}=po(s);let l=o.call(s,r);l||(r=Ze(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ii(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,o=r.clear();return s&&ii(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=B_(r,t,e)}),n}function du(t,e){const n=k_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(rt(n,r)&&r in i?n:i,r,s)}const z_={get:du(!1,!1)},V_={get:du(!1,!0)},H_={get:du(!0,!1)};const tp=new WeakMap,np=new WeakMap,ip=new WeakMap,G_=new WeakMap;function W_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X_(t){return t.__v_skip||!Object.isExtensible(t)?0:W_(h_(t))}function qt(t){return cr(t)?t:hu(t,!1,U_,z_,tp)}function $_(t){return hu(t,!1,O_,V_,np)}function Pa(t){return hu(t,!0,F_,H_,ip)}function hu(t,e,n,i,r){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=X_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Qr(t){return cr(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function cr(t){return!!(t&&t.__v_isReadonly)}function yn(t){return!!(t&&t.__v_isShallow)}function pu(t){return t?!!t.__v_raw:!1}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function Y_(t){return!rt(t,"__v_skip")&&Object.isExtensible(t)&&Bh(t,"__v_skip",!0),t}const kt=t=>ht(t)?qt(t):t,jl=t=>ht(t)?Pa(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function dt(t){return rp(t,!1)}function Sn(t){return rp(t,!0)}function rp(t,e){return mt(t)?t:new q_(t,e)}class q_{constructor(e,n){this.dep=new fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ze(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||yn(e)||cr(e);e=i?e:Ze(e),Ri(e,n)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function Bn(t){return mt(t)?t.value:t}const j_={get:(t,e,n)=>e==="__v_raw"?t:Bn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return mt(r)&&!mt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function sp(t){return Qr(t)?t:new Proxy(t,j_)}function mu(t){const e=Be(t)?new Array(t.length):{};for(const n in t)e[n]=op(t,n);return e}class K_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return R_(Ze(this._object),this._key)}}class Z_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function on(t,e,n){return mt(t)?t:He(t)?new Z_(t):ht(t)&&arguments.length>1?op(t,e,n):dt(t)}function op(t,e,n){const i=t[e];return mt(i)?i:new K_(t,e,n)}class J_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return $h(this,!0),!0}get value(){const e=this.dep.track();return jh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Q_(t,e,n=!1){let i,r;return He(t)?i=t:(i=t.get,r=t.set),new J_(i,r,n)}const go={},la=new WeakMap;let Qi;function ev(t,e=!1,n=Qi){if(n){let i=la.get(n);i||la.set(n,i=[]),i.push(t)}}function tv(t,e,n=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=S=>r?S:yn(S)||r===!1||r===0?ri(S,1):ri(S);let u,f,d,h,g=!1,_=!1;if(mt(t)?(f=()=>t.value,g=yn(t)):Qr(t)?(f=()=>c(t),g=!0):Be(t)?(_=!0,g=t.some(S=>Qr(S)||yn(S)),f=()=>t.map(S=>{if(mt(S))return S.value;if(Qr(S))return c(S);if(He(S))return l?l(S,2):S()})):He(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Fi();try{d()}finally{Oi()}}const S=Qi;Qi=u;try{return l?l(t,3,[h]):t(h)}finally{Qi=S}}:f=Hn,e&&r){const S=f,N=r===!0?1/0:r;f=()=>ri(S(),N)}const m=T_(),p=()=>{u.stop(),m&&m.active&&ru(m.effects,u)};if(s&&e){const S=e;e=(...N)=>{S(...N),p()}}let R=_?new Array(t.length).fill(go):go;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const N=u.run();if(r||g||(_?N.some((P,D)=>Ri(P,R[D])):Ri(N,R))){d&&d();const P=Qi;Qi=u;try{const D=[N,R===go?void 0:_&&R[0]===go?[]:R,h];l?l(e,3,D):e(...D),R=N}finally{Qi=P}}}else u.run()};return a&&a(E),u=new Wh(f),u.scheduler=o?()=>o(E,!1):E,h=S=>ev(S,!1,u),d=u.onStop=()=>{const S=la.get(u);if(S){if(l)l(S,4);else for(const N of S)N();la.delete(u)}},e?i?E(!0):R=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ri(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,mt(t))ri(t.value,e,n);else if(Be(t))for(let i=0;i<t.length;i++)ri(t[i],e,n);else if(Nh(t)||Jr(t))t.forEach(i=>{ri(i,e,n)});else if(Oh(t)){for(const i in t)ri(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ri(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(t,e,n,i){try{return i?t(...i):t()}catch(r){Da(r,e,n)}}function Ln(t,e,n,i){if(He(t)){const r=to(t,e,n,i);return r&&Uh(r)&&r.catch(s=>{Da(s,e,n)}),r}if(Be(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Ln(t[s],e,n,i));return r}}function Da(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Fi(),to(s,null,10,[t,l,c]),Oi();return}}nv(t,n,r,i,o)}function nv(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Yt=[];let Un=-1;const es=[];let Ei=null,Hr=0;const ap=Promise.resolve();let ca=null;function ur(t){const e=ca||ap;return t?e.then(this?t.bind(this):t):e}function iv(t){let e=Un+1,n=Yt.length;for(;e<n;){const i=e+n>>>1,r=Yt[i],s=Hs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function gu(t){if(!(t.flags&1)){const e=Hs(t),n=Yt[Yt.length-1];!n||!(t.flags&2)&&e>=Hs(n)?Yt.push(t):Yt.splice(iv(e),0,t),t.flags|=1,lp()}}function lp(){ca||(ca=ap.then(up))}function rv(t){Be(t)?es.push(...t):Ei&&t.id===-1?Ei.splice(Hr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),lp()}function ff(t,e,n=Un+1){for(;n<Yt.length;n++){const i=Yt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Yt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function cp(t){if(es.length){const e=[...new Set(es)].sort((n,i)=>Hs(n)-Hs(i));if(es.length=0,Ei){Ei.push(...e);return}for(Ei=e,Hr=0;Hr<Ei.length;Hr++){const n=Ei[Hr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ei=null,Hr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function up(t){try{for(Un=0;Un<Yt.length;Un++){const e=Yt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<Yt.length;Un++){const e=Yt[Un];e&&(e.flags&=-2)}Un=-1,Yt.length=0,cp(),ca=null,(Yt.length||es.length)&&up()}}let Zt=null,fp=null;function ua(t){const e=Zt;return Zt=t,fp=t&&t.type.__scopeId||null,e}function Gr(t,e=Zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Mf(-1);const s=ua(e);let o;try{o=t(...r)}finally{ua(s),i._d&&Mf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function La(t,e){if(Zt===null)return t;const n=Fa(Zt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&ri(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Fi(),Ln(l,n,8,[t.el,a,t,e]),Oi())}}const sv=Symbol("_vte"),dp=t=>t.__isTeleport,Ti=Symbol("_leaveCb"),_o=Symbol("_enterCb");function hp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bi(()=>{t.isMounted=!0}),vr(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],pp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},mp=t=>{const e=t.subTree;return e.component?mp(e.component):e},ov={name:"BaseTransition",props:pp,setup(t,{slots:e}){const n=Tu(),i=hp();return()=>{const r=e.default&&_u(e.default(),!0);if(!r||!r.length)return;const s=gp(r),o=Ze(t),{mode:a}=o;if(i.isLeaving)return tl(s);const l=df(s);if(!l)return tl(s);let c=Gs(l,o,i,n,f=>c=f);l.type!==xn&&fr(l,c);let u=n.subTree&&df(n.subTree);if(u&&u.type!==xn&&!tr(l,u)&&mp(n).type!==xn){let f=Gs(u,o,i,n);if(fr(u,f),a==="out-in"&&l.type!==xn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},tl(s);a==="in-out"&&l.type!==xn?f.delayLeave=(d,h,g)=>{const _=_p(i,u);_[String(u.key)]=u,d[Ti]=()=>{h(),d[Ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function gp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==xn){e=n;break}}return e}const av=ov;function _p(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Gs(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:R,onAppearCancelled:E}=e,S=String(t.key),N=_p(n,t),P=(b,v)=>{b&&Ln(b,i,9,v)},D=(b,v)=>{const w=v[1];P(b,v),Be(b)?b.every(U=>U.length<=1)&&w():b.length<=1&&w()},L={mode:o,persisted:a,beforeEnter(b){let v=l;if(!n.isMounted)if(s)v=m||l;else return;b[Ti]&&b[Ti](!0);const w=N[S];w&&tr(t,w)&&w.el[Ti]&&w.el[Ti](),P(v,[b])},enter(b){let v=c,w=u,U=f;if(!n.isMounted)if(s)v=p||c,w=R||u,U=E||f;else return;let O=!1;const W=b[_o]=Z=>{O||(O=!0,Z?P(U,[b]):P(w,[b]),L.delayedLeave&&L.delayedLeave(),b[_o]=void 0)};v?D(v,[b,W]):W()},leave(b,v){const w=String(t.key);if(b[_o]&&b[_o](!0),n.isUnmounting)return v();P(d,[b]);let U=!1;const O=b[Ti]=W=>{U||(U=!0,v(),W?P(_,[b]):P(g,[b]),b[Ti]=void 0,N[w]===t&&delete N[w])};N[w]=t,h?D(h,[b,O]):O()},clone(b){const v=Gs(b,e,n,i,r);return r&&r(v),v}};return L}function tl(t){if(Ia(t))return t=fi(t),t.children=null,t}function df(t){if(!Ia(t))return dp(t.type)&&t.children?gp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&He(n.default))return n.default()}}function fr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _u(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===gt?(o.patchFlag&128&&r++,i=i.concat(_u(o.children,e,a))):(e||o.type!==xn)&&i.push(a!=null?fi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function vu(t,e){return He(t)?Ct({name:t.name},e,{setup:t}):t}function vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fa(t,e,n,i,r=!1){if(Be(t)){t.forEach((g,_)=>fa(g,e&&(Be(e)?e[_]:e),n,i,r));return}if(Ds(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fa(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Fa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,d=Ze(f),h=f===ct?()=>!1:g=>rt(d,g);if(c!=null&&c!==l&&(bt(c)?(u[c]=null,h(c)&&(f[c]=null)):mt(c)&&(c.value=null)),He(l))to(l,a,12,[o,u]);else{const g=bt(l),_=mt(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Be(p)&&ru(p,s):Be(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,rn(m,n)):m()}}}Ca().requestIdleCallback;Ca().cancelIdleCallback;const Ds=t=>!!t.type.__asyncLoader,Ia=t=>t.type.__isKeepAlive;function lv(t,e){xp(t,"a",e)}function cv(t,e){xp(t,"da",e)}function xp(t,e,n=It){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Na(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ia(r.parent.vnode)&&uv(i,e,n,r),r=r.parent}}function uv(t,e,n,i){const r=Na(e,t,i,!0);Sp(()=>{ru(i[e],r)},n)}function Na(t,e,n=It,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Fi();const a=ro(n),l=Ln(e,n,t,o);return a(),Oi(),l});return i?r.unshift(s):r.push(s),s}}const hi=t=>(e,n=It)=>{(!Xs||t==="sp")&&Na(t,(...i)=>e(...i),n)},yp=hi("bm"),Bi=hi("m"),fv=hi("bu"),xu=hi("u"),vr=hi("bum"),Sp=hi("um"),dv=hi("sp"),hv=hi("rtg"),pv=hi("rtc");function mv(t,e=It){Na("ec",t,e)}const yu="components",gv="directives";function _v(t,e){return Su(yu,t,!0,e)||t}const vv=Symbol.for("v-ndc");function xv(t){return bt(t)&&Su(yu,t,!1)||t}function yv(t){return Su(gv,t)}function Su(t,e,n=!0,i=!1){const r=Zt||It;if(r){const s=r.type;if(t===yu){const a=l0(s,!1);if(a&&(a===e||a===fn(e)||a===Ui(fn(e))))return s}const o=hf(r[t]||s[t],e)||hf(r.appContext[t],e);return!o&&i?s:o}}function hf(t,e){return t&&(t[e]||t[fn(e)]||t[Ui(fn(e))])}function Sv(t,e,n,i){let r;const s=n,o=Be(t);if(o||bt(t)){const a=o&&Qr(t);let l=!1;a&&(l=!yn(t),t=Ra(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?kt(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Kl=t=>t?Vp(t)?Fa(t):Kl(t.parent):null,Ls=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bp(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=ur.bind(t.proxy)),$watch:t=>Hv.bind(t)}),nl=(t,e)=>t!==ct&&!t.__isScriptSetup&&rt(t,e),Mv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(nl(i,e))return o[e]=1,i[e];if(r!==ct&&rt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(n!==ct&&rt(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const u=Ls[e];let f,d;if(u)return e==="$attrs"&&Bt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ct&&rt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,rt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return nl(r,e)?(r[e]=n,!0):i!==ct&&rt(i,e)?(i[e]=n,!0):rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ct&&rt(t,o)||nl(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(Ls,o)||rt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pf(t){return Be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zl=!0;function bv(t){const e=bp(t),n=t.proxy,i=t.ctx;Zl=!1,e.beforeCreate&&mf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:E,unmounted:S,render:N,renderTracked:P,renderTriggered:D,errorCaptured:L,serverPrefetch:b,expose:v,inheritAttrs:w,components:U,directives:O,filters:W}=e;if(c&&Ev(c,i,null),o)for(const Q in o){const V=o[Q];He(V)&&(i[Q]=V.bind(n))}if(r){const Q=r.call(n,n);ht(Q)&&(t.data=qt(Q))}if(Zl=!0,s)for(const Q in s){const V=s[Q],ue=He(V)?V.bind(n,n):He(V.get)?V.get.bind(n,n):Hn,fe=!He(V)&&He(V.set)?V.set.bind(n):Hn,me=se({get:ue,set:fe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>me.value,set:xe=>me.value=xe})}if(a)for(const Q in a)Mp(a[Q],i,n,Q);if(l){const Q=He(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{xr(V,Q[V])})}u&&mf(u,t,"c");function X(Q,V){Be(V)?V.forEach(ue=>Q(ue.bind(n))):V&&Q(V.bind(n))}if(X(yp,f),X(Bi,d),X(fv,h),X(xu,g),X(lv,_),X(cv,m),X(mv,L),X(pv,P),X(hv,D),X(vr,R),X(Sp,S),X(dv,b),Be(v))if(v.length){const Q=t.exposed||(t.exposed={});v.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:ue=>n[V]=ue})})}else t.exposed||(t.exposed={});N&&t.render===Hn&&(t.render=N),w!=null&&(t.inheritAttrs=w),U&&(t.components=U),O&&(t.directives=O),b&&vp(t)}function Ev(t,e,n=Hn){Be(t)&&(t=Jl(t));for(const i in t){const r=t[i];let s;ht(r)?"default"in r?s=un(r.from||i,r.default,!0):s=un(r.from||i):s=un(r),mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function mf(t,e,n){Ln(Be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mp(t,e,n,i){let r=i.includes(".")?Fp(n,i):()=>n[i];if(bt(t)){const s=e[t];He(s)&&At(r,s)}else if(He(t))At(r,t.bind(n));else if(ht(t))if(Be(t))t.forEach(s=>Mp(s,e,n,i));else{const s=He(t.handler)?t.handler.bind(n):e[t.handler];He(s)&&At(r,s,t)}}function bp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>da(l,c,o,!0)),da(l,e,o)),ht(e)&&s.set(e,l),l}function da(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&da(t,s,n,!0),r&&r.forEach(o=>da(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tv={data:gf,props:_f,emits:_f,methods:As,computed:As,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:As,directives:As,watch:wv,provide:gf,inject:Av};function gf(t,e){return e?t?function(){return Ct(He(t)?t.call(this,this):t,He(e)?e.call(this,this):e)}:e:t}function Av(t,e){return As(Jl(t),Jl(e))}function Jl(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?Ct(Object.create(null),t,e):e}function _f(t,e){return t?Be(t)&&Be(e)?[...new Set([...t,...e])]:Ct(Object.create(null),pf(t),pf(e??{})):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const i in e)n[i]=Gt(t[i],e[i]);return n}function Ep(){return{app:null,config:{isNativeTag:f_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Rv(t,e){return function(i,r=null){He(i)||(i=Ct({},i)),r!=null&&!ht(r)&&(r=null);const s=Ep(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Cv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:u0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||ne(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Fa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ln(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ts;ts=c;try{return u()}finally{ts=f}}};return c}}let ts=null;function xr(t,e){if(It){let n=It.provides;const i=It.parent&&It.parent.provides;i===n&&(n=It.provides=Object.create(i)),n[t]=e}}function un(t,e,n=!1){const i=It||Zt;if(i||ts){const r=ts?ts._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&He(e)?e.call(i&&i.proxy):e}}const Tp={},Ap=()=>Object.create(Tp),wp=t=>Object.getPrototypeOf(t)===Tp;function Pv(t,e,n,i=!1){const r={},s=Ap();t.propsDefaults=Object.create(null),Cp(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:$_(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Dv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ze(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ua(t.emitsOptions,d))continue;const h=e[d];if(l)if(rt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=fn(d);r[g]=Ql(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Cp(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=_r(f))===f||!rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ql(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&ii(t.attrs,"set","")}function Cp(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Cs(l))continue;const c=e[l];let u;r&&rt(r,u=fn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ua(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(n),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ql(r,l,f,c[f],t,!rt(c,f))}}return o}function Ql(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=ro(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===_r(n))&&(i=!0))}return i}const Lv=new WeakMap;function Rp(t,e,n=!1){const i=n?Lv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!He(t)){const u=f=>{l=!0;const[d,h]=Rp(f,e,!0);Ct(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ht(t)&&i.set(t,Zr),Zr;if(Be(s))for(let u=0;u<s.length;u++){const f=fn(s[u]);vf(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=fn(u);if(vf(f)){const d=s[u],h=o[f]=Be(d)||He(d)?{type:d}:Ct({},d),g=h.type;let _=!1,m=!0;if(Be(g))for(let p=0;p<g.length;++p){const R=g[p],E=He(R)&&R.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=He(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||rt(h,"default"))&&a.push(f)}}const c=[o,a];return ht(t)&&i.set(t,c),c}function vf(t){return t[0]!=="$"&&!Cs(t)}const Pp=t=>t[0]==="_"||t==="$stable",Mu=t=>Be(t)?t.map(Fn):[Fn(t)],Iv=(t,e,n)=>{if(e._n)return e;const i=Gr((...r)=>Mu(e(...r)),n);return i._c=!1,i},Dp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Pp(r))continue;const s=t[r];if(He(s))e[r]=Iv(r,s,i);else if(s!=null){const o=Mu(s);e[r]=()=>o}}},Lp=(t,e)=>{const n=Mu(e);t.slots.default=()=>n},Ip=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Nv=(t,e,n)=>{const i=t.slots=Ap();if(t.vnode.shapeFlag&32){const r=e._;r?(Ip(i,e,n),n&&Bh(i,"_",r,!0)):Dp(e,i)}else e&&Lp(t,e)},Uv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ip(r,e,n):(s=!e.$stable,Dp(e,r)),o=e}else e&&(Lp(t,e),o={default:1});if(s)for(const a in r)!Pp(a)&&o[a]==null&&delete r[a]},rn=jv;function Fv(t){return Ov(t)}function Ov(t,e){const n=Ca();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Hn,insertStaticContent:g}=t,_=(A,C,y,j=null,F=null,$=null,Y=void 0,ie=null,q=!!C.dynamicChildren)=>{if(A===C)return;A&&!tr(A,C)&&(j=de(A),xe(A,F,$,!0),A=null),C.patchFlag===-2&&(q=!1,C.dynamicChildren=null);const{type:M,ref:x,shapeFlag:I}=C;switch(M){case io:m(A,C,y,j);break;case xn:p(A,C,y,j);break;case rl:A==null&&R(C,y,j,Y);break;case gt:U(A,C,y,j,F,$,Y,ie,q);break;default:I&1?N(A,C,y,j,F,$,Y,ie,q):I&6?O(A,C,y,j,F,$,Y,ie,q):(I&64||I&128)&&M.process(A,C,y,j,F,$,Y,ie,q,Ie)}x!=null&&F&&fa(x,A&&A.ref,$,C||A,!C)},m=(A,C,y,j)=>{if(A==null)i(C.el=a(C.children),y,j);else{const F=C.el=A.el;C.children!==A.children&&c(F,C.children)}},p=(A,C,y,j)=>{A==null?i(C.el=l(C.children||""),y,j):C.el=A.el},R=(A,C,y,j)=>{[A.el,A.anchor]=g(A.children,C,y,j,A.el,A.anchor)},E=({el:A,anchor:C},y,j)=>{let F;for(;A&&A!==C;)F=d(A),i(A,y,j),A=F;i(C,y,j)},S=({el:A,anchor:C})=>{let y;for(;A&&A!==C;)y=d(A),r(A),A=y;r(C)},N=(A,C,y,j,F,$,Y,ie,q)=>{C.type==="svg"?Y="svg":C.type==="math"&&(Y="mathml"),A==null?P(C,y,j,F,$,Y,ie,q):b(A,C,F,$,Y,ie,q)},P=(A,C,y,j,F,$,Y,ie)=>{let q,M;const{props:x,shapeFlag:I,transition:G,dirs:J}=A;if(q=A.el=o(A.type,$,x&&x.is,x),I&8?u(q,A.children):I&16&&L(A.children,q,null,j,F,il(A,$),Y,ie),J&&Gi(A,null,j,"created"),D(q,A,A.scopeId,Y,j),x){for(const ge in x)ge!=="value"&&!Cs(ge)&&s(q,ge,null,x[ge],$,j);"value"in x&&s(q,"value",null,x.value,$),(M=x.onVnodeBeforeMount)&&In(M,j,A)}J&&Gi(A,null,j,"beforeMount");const K=Bv(F,G);K&&G.beforeEnter(q),i(q,C,y),((M=x&&x.onVnodeMounted)||K||J)&&rn(()=>{M&&In(M,j,A),K&&G.enter(q),J&&Gi(A,null,j,"mounted")},F)},D=(A,C,y,j,F)=>{if(y&&h(A,y),j)for(let $=0;$<j.length;$++)h(A,j[$]);if(F){let $=F.subTree;if(C===$||Bp($.type)&&($.ssContent===C||$.ssFallback===C)){const Y=F.vnode;D(A,Y,Y.scopeId,Y.slotScopeIds,F.parent)}}},L=(A,C,y,j,F,$,Y,ie,q=0)=>{for(let M=q;M<A.length;M++){const x=A[M]=ie?Ai(A[M]):Fn(A[M]);_(null,x,C,y,j,F,$,Y,ie)}},b=(A,C,y,j,F,$,Y)=>{const ie=C.el=A.el;let{patchFlag:q,dynamicChildren:M,dirs:x}=C;q|=A.patchFlag&16;const I=A.props||ct,G=C.props||ct;let J;if(y&&Wi(y,!1),(J=G.onVnodeBeforeUpdate)&&In(J,y,C,A),x&&Gi(C,A,y,"beforeUpdate"),y&&Wi(y,!0),(I.innerHTML&&G.innerHTML==null||I.textContent&&G.textContent==null)&&u(ie,""),M?v(A.dynamicChildren,M,ie,y,j,il(C,F),$):Y||V(A,C,ie,null,y,j,il(C,F),$,!1),q>0){if(q&16)w(ie,I,G,y,F);else if(q&2&&I.class!==G.class&&s(ie,"class",null,G.class,F),q&4&&s(ie,"style",I.style,G.style,F),q&8){const K=C.dynamicProps;for(let ge=0;ge<K.length;ge++){const le=K[ge],ve=I[le],Ue=G[le];(Ue!==ve||le==="value")&&s(ie,le,ve,Ue,F,y)}}q&1&&A.children!==C.children&&u(ie,C.children)}else!Y&&M==null&&w(ie,I,G,y,F);((J=G.onVnodeUpdated)||x)&&rn(()=>{J&&In(J,y,C,A),x&&Gi(C,A,y,"updated")},j)},v=(A,C,y,j,F,$,Y)=>{for(let ie=0;ie<C.length;ie++){const q=A[ie],M=C[ie],x=q.el&&(q.type===gt||!tr(q,M)||q.shapeFlag&70)?f(q.el):y;_(q,M,x,null,j,F,$,Y,!0)}},w=(A,C,y,j,F)=>{if(C!==y){if(C!==ct)for(const $ in C)!Cs($)&&!($ in y)&&s(A,$,C[$],null,F,j);for(const $ in y){if(Cs($))continue;const Y=y[$],ie=C[$];Y!==ie&&$!=="value"&&s(A,$,ie,Y,F,j)}"value"in y&&s(A,"value",C.value,y.value,F)}},U=(A,C,y,j,F,$,Y,ie,q)=>{const M=C.el=A?A.el:a(""),x=C.anchor=A?A.anchor:a("");let{patchFlag:I,dynamicChildren:G,slotScopeIds:J}=C;J&&(ie=ie?ie.concat(J):J),A==null?(i(M,y,j),i(x,y,j),L(C.children||[],y,x,F,$,Y,ie,q)):I>0&&I&64&&G&&A.dynamicChildren?(v(A.dynamicChildren,G,y,F,$,Y,ie),(C.key!=null||F&&C===F.subTree)&&Np(A,C,!0)):V(A,C,y,x,F,$,Y,ie,q)},O=(A,C,y,j,F,$,Y,ie,q)=>{C.slotScopeIds=ie,A==null?C.shapeFlag&512?F.ctx.activate(C,y,j,Y,q):W(C,y,j,F,$,Y,q):Z(A,C,q)},W=(A,C,y,j,F,$,Y)=>{const ie=A.component=i0(A,j,F);if(Ia(A)&&(ie.ctx.renderer=Ie),r0(ie,!1,Y),ie.asyncDep){if(F&&F.registerDep(ie,X,Y),!A.el){const q=ie.subTree=ne(xn);p(null,q,C,y)}}else X(ie,A,C,y,F,$,Y)},Z=(A,C,y)=>{const j=C.component=A.component;if(Yv(A,C,y))if(j.asyncDep&&!j.asyncResolved){Q(j,C,y);return}else j.next=C,j.update();else C.el=A.el,j.vnode=C},X=(A,C,y,j,F,$,Y)=>{const ie=()=>{if(A.isMounted){let{next:I,bu:G,u:J,parent:K,vnode:ge}=A;{const Me=Up(A);if(Me){I&&(I.el=ge.el,Q(A,I,Y)),Me.asyncDep.then(()=>{A.isUnmounted||ie()});return}}let le=I,ve;Wi(A,!1),I?(I.el=ge.el,Q(A,I,Y)):I=ge,G&&Ka(G),(ve=I.props&&I.props.onVnodeBeforeUpdate)&&In(ve,K,I,ge),Wi(A,!0);const Ue=yf(A),ce=A.subTree;A.subTree=Ue,_(ce,Ue,f(ce.el),de(ce),A,F,$),I.el=Ue.el,le===null&&qv(A,Ue.el),J&&rn(J,F),(ve=I.props&&I.props.onVnodeUpdated)&&rn(()=>In(ve,K,I,ge),F)}else{let I;const{el:G,props:J}=C,{bm:K,m:ge,parent:le,root:ve,type:Ue}=A,ce=Ds(C);Wi(A,!1),K&&Ka(K),!ce&&(I=J&&J.onVnodeBeforeMount)&&In(I,le,C),Wi(A,!0);{ve.ce&&ve.ce._injectChildStyle(Ue);const Me=A.subTree=yf(A);_(null,Me,y,j,A,F,$),C.el=Me.el}if(ge&&rn(ge,F),!ce&&(I=J&&J.onVnodeMounted)){const Me=C;rn(()=>In(I,le,Me),F)}(C.shapeFlag&256||le&&Ds(le.vnode)&&le.vnode.shapeFlag&256)&&A.a&&rn(A.a,F),A.isMounted=!0,C=y=j=null}};A.scope.on();const q=A.effect=new Wh(ie);A.scope.off();const M=A.update=q.run.bind(q),x=A.job=q.runIfDirty.bind(q);x.i=A,x.id=A.uid,q.scheduler=()=>gu(x),Wi(A,!0),M()},Q=(A,C,y)=>{C.component=A;const j=A.vnode.props;A.vnode=C,A.next=null,Dv(A,C.props,j,y),Uv(A,C.children,y),Fi(),ff(A),Oi()},V=(A,C,y,j,F,$,Y,ie,q=!1)=>{const M=A&&A.children,x=A?A.shapeFlag:0,I=C.children,{patchFlag:G,shapeFlag:J}=C;if(G>0){if(G&128){fe(M,I,y,j,F,$,Y,ie,q);return}else if(G&256){ue(M,I,y,j,F,$,Y,ie,q);return}}J&8?(x&16&&be(M,F,$),I!==M&&u(y,I)):x&16?J&16?fe(M,I,y,j,F,$,Y,ie,q):be(M,F,$,!0):(x&8&&u(y,""),J&16&&L(I,y,j,F,$,Y,ie,q))},ue=(A,C,y,j,F,$,Y,ie,q)=>{A=A||Zr,C=C||Zr;const M=A.length,x=C.length,I=Math.min(M,x);let G;for(G=0;G<I;G++){const J=C[G]=q?Ai(C[G]):Fn(C[G]);_(A[G],J,y,null,F,$,Y,ie,q)}M>x?be(A,F,$,!0,!1,I):L(C,y,j,F,$,Y,ie,q,I)},fe=(A,C,y,j,F,$,Y,ie,q)=>{let M=0;const x=C.length;let I=A.length-1,G=x-1;for(;M<=I&&M<=G;){const J=A[M],K=C[M]=q?Ai(C[M]):Fn(C[M]);if(tr(J,K))_(J,K,y,null,F,$,Y,ie,q);else break;M++}for(;M<=I&&M<=G;){const J=A[I],K=C[G]=q?Ai(C[G]):Fn(C[G]);if(tr(J,K))_(J,K,y,null,F,$,Y,ie,q);else break;I--,G--}if(M>I){if(M<=G){const J=G+1,K=J<x?C[J].el:j;for(;M<=G;)_(null,C[M]=q?Ai(C[M]):Fn(C[M]),y,K,F,$,Y,ie,q),M++}}else if(M>G)for(;M<=I;)xe(A[M],F,$,!0),M++;else{const J=M,K=M,ge=new Map;for(M=K;M<=G;M++){const ye=C[M]=q?Ai(C[M]):Fn(C[M]);ye.key!=null&&ge.set(ye.key,M)}let le,ve=0;const Ue=G-K+1;let ce=!1,Me=0;const De=new Array(Ue);for(M=0;M<Ue;M++)De[M]=0;for(M=J;M<=I;M++){const ye=A[M];if(ve>=Ue){xe(ye,F,$,!0);continue}let ze;if(ye.key!=null)ze=ge.get(ye.key);else for(le=K;le<=G;le++)if(De[le-K]===0&&tr(ye,C[le])){ze=le;break}ze===void 0?xe(ye,F,$,!0):(De[ze-K]=M+1,ze>=Me?Me=ze:ce=!0,_(ye,C[ze],y,null,F,$,Y,ie,q),ve++)}const Oe=ce?kv(De):Zr;for(le=Oe.length-1,M=Ue-1;M>=0;M--){const ye=K+M,ze=C[ye],We=ye+1<x?C[ye+1].el:j;De[M]===0?_(null,ze,y,We,F,$,Y,ie,q):ce&&(le<0||M!==Oe[le]?me(ze,y,We,2):le--)}}},me=(A,C,y,j,F=null)=>{const{el:$,type:Y,transition:ie,children:q,shapeFlag:M}=A;if(M&6){me(A.component.subTree,C,y,j);return}if(M&128){A.suspense.move(C,y,j);return}if(M&64){Y.move(A,C,y,Ie);return}if(Y===gt){i($,C,y);for(let I=0;I<q.length;I++)me(q[I],C,y,j);i(A.anchor,C,y);return}if(Y===rl){E(A,C,y);return}if(j!==2&&M&1&&ie)if(j===0)ie.beforeEnter($),i($,C,y),rn(()=>ie.enter($),F);else{const{leave:I,delayLeave:G,afterLeave:J}=ie,K=()=>i($,C,y),ge=()=>{I($,()=>{K(),J&&J()})};G?G($,K,ge):ge()}else i($,C,y)},xe=(A,C,y,j=!1,F=!1)=>{const{type:$,props:Y,ref:ie,children:q,dynamicChildren:M,shapeFlag:x,patchFlag:I,dirs:G,cacheIndex:J}=A;if(I===-2&&(F=!1),ie!=null&&fa(ie,null,y,A,!0),J!=null&&(C.renderCache[J]=void 0),x&256){C.ctx.deactivate(A);return}const K=x&1&&G,ge=!Ds(A);let le;if(ge&&(le=Y&&Y.onVnodeBeforeUnmount)&&In(le,C,A),x&6)pe(A.component,y,j);else{if(x&128){A.suspense.unmount(y,j);return}K&&Gi(A,null,C,"beforeUnmount"),x&64?A.type.remove(A,C,y,Ie,j):M&&!M.hasOnce&&($!==gt||I>0&&I&64)?be(M,C,y,!1,!0):($===gt&&I&384||!F&&x&16)&&be(q,C,y),j&&ke(A)}(ge&&(le=Y&&Y.onVnodeUnmounted)||K)&&rn(()=>{le&&In(le,C,A),K&&Gi(A,null,C,"unmounted")},y)},ke=A=>{const{type:C,el:y,anchor:j,transition:F}=A;if(C===gt){oe(y,j);return}if(C===rl){S(A);return}const $=()=>{r(y),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(A.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:ie}=F,q=()=>Y(y,$);ie?ie(A.el,$,q):q()}else $()},oe=(A,C)=>{let y;for(;A!==C;)y=d(A),r(A),A=y;r(C)},pe=(A,C,y)=>{const{bum:j,scope:F,job:$,subTree:Y,um:ie,m:q,a:M}=A;xf(q),xf(M),j&&Ka(j),F.stop(),$&&($.flags|=8,xe(Y,A,C,y)),ie&&rn(ie,C),rn(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},be=(A,C,y,j=!1,F=!1,$=0)=>{for(let Y=$;Y<A.length;Y++)xe(A[Y],C,y,j,F)},de=A=>{if(A.shapeFlag&6)return de(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),y=C&&C[sv];return y?d(y):C};let Ce=!1;const Le=(A,C,y)=>{A==null?C._vnode&&xe(C._vnode,null,null,!0):_(C._vnode||null,A,C,null,null,null,y),C._vnode=A,Ce||(Ce=!0,ff(),cp(),Ce=!1)},Ie={p:_,um:xe,m:me,r:ke,mt:W,mc:L,pc:V,pbc:v,n:de,o:t};return{render:Le,hydrate:void 0,createApp:Rv(Le)}}function il({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Bv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Np(t,e,n=!1){const i=t.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ai(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Np(o,a)),a.type===io&&(a.el=o.el)}}function kv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Up(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Up(e)}function xf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zv=Symbol.for("v-scx"),Vv=()=>un(zv);function no(t,e){return bu(t,null,e)}function At(t,e,n){return bu(t,e,n)}function bu(t,e,n=ct){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ct({},n),l=e&&i||!e&&s!=="post";let c;if(Xs){if(s==="sync"){const h=Vv();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Hn,h.resume=Hn,h.pause=Hn,h}}const u=It;a.call=(h,g,_)=>Ln(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{rn(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():gu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=tv(t,e,a);return Xs&&(c?c.push(d):l&&d()),d}function Hv(t,e,n){const i=this.proxy,r=bt(t)?t.includes(".")?Fp(i,t):()=>i[t]:t.bind(i,i);let s;He(e)?s=e:(s=e.handler,n=e);const o=ro(this),a=bu(r,s.bind(i),n);return o(),a}function Fp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${fn(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function Wv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),o=s&&Gv(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>bt(u)?u.trim():u)),o.number&&(r=n.map(g_)));let a,l=i[a=ja(e)]||i[a=ja(fn(e))];!l&&s&&(l=i[a=ja(_r(e))]),l&&Ln(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ln(c,t,6,r)}}function Op(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!He(t)){const l=c=>{const u=Op(c,e,!0);u&&(a=!0,Ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ht(t)&&i.set(t,null),null):(Be(s)?s.forEach(l=>o[l]=null):Ct(o,s),ht(t)&&i.set(t,o),o)}function Ua(t,e){return!t||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(t,e[0].toLowerCase()+e.slice(1))||rt(t,_r(e))||rt(t,e))}function yf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=ua(t);let p,R;try{if(n.shapeFlag&4){const S=r||i,N=S;p=Fn(c.call(N,S,u,f,h,d,g)),R=a}else{const S=e;p=Fn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),R=e.props?a:Xv(a)}}catch(S){Is.length=0,Da(S,t,1),p=ne(xn)}let E=p;if(R&&_!==!1){const S=Object.keys(R),{shapeFlag:N}=E;S.length&&N&7&&(s&&S.some(iu)&&(R=$v(R,s)),E=fi(E,R,!1,!0))}return n.dirs&&(E=fi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&fr(E,n.transition),p=E,ua(m),p}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ta(n))&&((e||(e={}))[n]=t[n]);return e},$v=(t,e)=>{const n={};for(const i in t)(!iu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Yv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Sf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ua(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sf(i,o,c):!0:!!o;return!1}function Sf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ua(n,s))return!0}return!1}function qv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bp=t=>t.__isSuspense;function jv(t,e){e&&e.pendingBranch?Be(t)?e.effects.push(...t):e.effects.push(t):rv(t)}const gt=Symbol.for("v-fgt"),io=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),Is=[];let an=null;function jo(t=!1){Is.push(an=t?null:[])}function Kv(){Is.pop(),an=Is[Is.length-1]||null}let Ws=1;function Mf(t,e=!1){Ws+=t,t<0&&an&&e&&(an.hasOnce=!0)}function kp(t){return t.dynamicChildren=Ws>0?an||Zr:null,Kv(),Ws>0&&an&&an.push(t),t}function ec(t,e,n,i,r,s){return kp($r(t,e,n,i,r,s,!0))}function Zv(t,e,n,i,r){return kp(ne(t,e,n,i,r,!0))}function ha(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const zp=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||mt(t)||He(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function $r(t,e=null,n=null,i=0,r=null,s=t===gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zp(e),ref:e&&Ko(e),scopeId:fp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zt};return a?(Eu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),Ws>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const ne=Jv;function Jv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===vv)&&(t=xn),ha(t)){const a=fi(t,e,!0);return n&&Eu(a,n),Ws>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag=-2,a}if(c0(t)&&(t=t.__vccOpts),e){e=Qv(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=au(a)),ht(l)&&(pu(l)&&!Be(l)&&(l=Ct({},l)),e.style=ou(l))}const o=bt(t)?1:Bp(t)?128:dp(t)?64:ht(t)?4:He(t)?2:0;return $r(t,e,n,i,r,o,s,!0)}function Qv(t){return t?pu(t)||wp(t)?Ct({},t):t:null}function fi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Gn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&zp(c),ref:e&&e.ref?n&&s?Be(s)?s.concat(Ko(e)):[s,Ko(e)]:Ko(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fi(t.ssContent),ssFallback:t.ssFallback&&fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&fr(u,l.clone(u)),u}function e0(t=" ",e=0){return ne(io,null,t,e)}function Fn(t){return t==null||typeof t=="boolean"?ne(xn):Be(t)?ne(gt,null,t.slice()):ha(t)?Ai(t):ne(io,null,String(t))}function Ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fi(t)}function Eu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Be(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Eu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!wp(e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),i&64?(n=16,e=[e0(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=au([e.class,i.class]));else if(r==="style")e.style=ou([e.style,i.style]);else if(Ta(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function In(t,e,n,i=null){Ln(t,e,7,[n,i])}const t0=Ep();let n0=0;function i0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||t0,s={uid:n0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rp(i,r),emitsOptions:Op(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wv.bind(null,s),t.ce&&t.ce(s),s}let It=null;const Tu=()=>It||Zt;let pa,tc;{const t=Ca(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};pa=e("__VUE_INSTANCE_SETTERS__",n=>It=n),tc=e("__VUE_SSR_SETTERS__",n=>Xs=n)}const ro=t=>{const e=It;return pa(t),t.scope.on(),()=>{t.scope.off(),pa(e)}},bf=()=>{It&&It.scope.off(),pa(null)};function Vp(t){return t.vnode.shapeFlag&4}let Xs=!1;function r0(t,e=!1,n=!1){e&&tc(e);const{props:i,children:r}=t.vnode,s=Vp(t);Pv(t,i,s,e),Nv(t,r,n);const o=s?s0(t,e):void 0;return e&&tc(!1),o}function s0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mv);const{setup:i}=n;if(i){Fi();const r=t.setupContext=i.length>1?a0(t):null,s=ro(t),o=to(i,t,0,[t.props,r]),a=Uh(o);if(Oi(),s(),(a||t.sp)&&!Ds(t)&&vp(t),a){if(o.then(bf,bf),e)return o.then(l=>{Ef(t,l)}).catch(l=>{Da(l,t,0)});t.asyncDep=o}else Ef(t,o)}else Hp(t)}function Ef(t,e,n){He(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=sp(e)),Hp(t)}function Hp(t,e,n){const i=t.type;t.render||(t.render=i.render||Hn);{const r=ro(t);Fi();try{bv(t)}finally{Oi(),r()}}}const o0={get(t,e){return Bt(t,"get",""),t[e]}};function a0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,o0),slots:t.slots,emit:t.emit,expose:e}}function Fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sp(Y_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function l0(t,e=!0){return He(t)?t.displayName||t.name:t.name||e&&t.__name}function c0(t){return He(t)&&"__vccOpts"in t}const se=(t,e)=>Q_(t,e,Xs);function yr(t,e,n){const i=arguments.length;return i===2?ht(e)&&!Be(e)?ha(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ha(n)&&(n=[n]),ne(t,e,n))}const u0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nc;const Tf=typeof window<"u"&&window.trustedTypes;if(Tf)try{nc=Tf.createPolicy("vue",{createHTML:t=>t})}catch{}const Gp=nc?t=>nc.createHTML(t):t=>t,f0="http://www.w3.org/2000/svg",d0="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,Af=ni&&ni.createElement("template"),h0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ni.createElementNS(f0,t):e==="mathml"?ni.createElementNS(d0,t):n?ni.createElement(t,{is:n}):ni.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Af.innerHTML=Gp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Af.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gi="transition",ys="animation",as=Symbol("_vtc"),Wp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xp=Ct({},pp,Wp),p0=t=>(t.displayName="Transition",t.props=Xp,t),Oa=p0((t,{slots:e})=>yr(av,$p(t),e)),Xi=(t,e=[])=>{Be(t)?t.forEach(n=>n(...e)):t&&t(...e)},wf=t=>t?Be(t)?t.some(e=>e.length>1):t.length>1:!1;function $p(t){const e={};for(const U in t)U in Wp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=m0(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:E,onLeave:S,onLeaveCancelled:N,onBeforeAppear:P=p,onAppear:D=R,onAppearCancelled:L=E}=e,b=(U,O,W,Z)=>{U._enterCancelled=Z,bi(U,O?u:a),bi(U,O?c:o),W&&W()},v=(U,O)=>{U._isLeaving=!1,bi(U,f),bi(U,h),bi(U,d),O&&O()},w=U=>(O,W)=>{const Z=U?D:R,X=()=>b(O,U,W);Xi(Z,[O,X]),Cf(()=>{bi(O,U?l:s),Nn(O,U?u:a),wf(Z)||Rf(O,i,_,X)})};return Ct(e,{onBeforeEnter(U){Xi(p,[U]),Nn(U,s),Nn(U,o)},onBeforeAppear(U){Xi(P,[U]),Nn(U,l),Nn(U,c)},onEnter:w(!1),onAppear:w(!0),onLeave(U,O){U._isLeaving=!0;const W=()=>v(U,O);Nn(U,f),U._enterCancelled?(Nn(U,d),ic()):(ic(),Nn(U,d)),Cf(()=>{U._isLeaving&&(bi(U,f),Nn(U,h),wf(S)||Rf(U,i,m,W))}),Xi(S,[U,W])},onEnterCancelled(U){b(U,!1,void 0,!0),Xi(E,[U])},onAppearCancelled(U){b(U,!0,void 0,!0),Xi(L,[U])},onLeaveCancelled(U){v(U),Xi(N,[U])}})}function m0(t){if(t==null)return null;if(ht(t))return[sl(t.enter),sl(t.leave)];{const e=sl(t);return[e,e]}}function sl(t){return __(t)}function Nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[as]||(t[as]=new Set)).add(e)}function bi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[as];n&&(n.delete(e),n.size||(t[as]=void 0))}function Cf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let g0=0;function Rf(t,e,n,i){const r=t._endId=++g0,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Yp(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function Yp(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${gi}Delay`),s=i(`${gi}Duration`),o=Pf(r,s),a=i(`${ys}Delay`),l=i(`${ys}Duration`),c=Pf(a,l);let u=null,f=0,d=0;e===gi?o>0&&(u=gi,f=o,d=s.length):e===ys?c>0&&(u=ys,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?gi:ys:null,d=u?u===gi?s.length:l.length:0);const h=u===gi&&/\b(transform|all)(,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Pf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Df(n)+Df(t[i])))}function Df(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ic(){return document.body.offsetHeight}function _0(t,e,n){const i=t[as];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ma=Symbol("_vod"),qp=Symbol("_vsh"),jp={beforeMount(t,{value:e},{transition:n}){t[ma]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ss(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ss(t,!0),i.enter(t)):i.leave(t,()=>{Ss(t,!1)}):Ss(t,e))},beforeUnmount(t,{value:e}){Ss(t,e)}};function Ss(t,e){t.style.display=e?t[ma]:"none",t[qp]=!e}const v0=Symbol(""),x0=/(^|;)\s*display\s*:/;function y0(t,e,n){const i=t.style,r=bt(n);let s=!1;if(n&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Zo(i,a,"")}else for(const o in e)n[o]==null&&Zo(i,o,"");for(const o in n)o==="display"&&(s=!0),Zo(i,o,n[o])}else if(r){if(e!==n){const o=i[v0];o&&(n+=";"+o),i.cssText=n,s=x0.test(n)}}else e&&t.removeAttribute("style");ma in t&&(t[ma]=s?i.display:"",t[qp]&&(i.display="none"))}const Lf=/\s*!important$/;function Zo(t,e,n){if(Be(n))n.forEach(i=>Zo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=S0(t,e);Lf.test(n)?t.setProperty(_r(i),n.replace(Lf,""),"important"):t[i]=n}}const If=["Webkit","Moz","ms"],ol={};function S0(t,e){const n=ol[e];if(n)return n;let i=fn(e);if(i!=="filter"&&i in t)return ol[e]=i;i=Ui(i);for(let r=0;r<If.length;r++){const s=If[r]+i;if(s in t)return ol[e]=s}return e}const Nf="http://www.w3.org/1999/xlink";function Uf(t,e,n,i,r,s=b_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nf,e.slice(6,e.length)):t.setAttributeNS(Nf,e,n):n==null||s&&!kh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ni(n)?String(n):n)}function Ff(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Gp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=kh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function M0(t,e,n,i){t.addEventListener(e,n,i)}function b0(t,e,n,i){t.removeEventListener(e,n,i)}const Of=Symbol("_vei");function E0(t,e,n,i,r=null){const s=t[Of]||(t[Of]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=T0(e);if(i){const c=s[e]=C0(i,r);M0(t,a,c,l)}else o&&(b0(t,a,o,l),s[e]=void 0)}}const Bf=/(?:Once|Passive|Capture)$/;function T0(t){let e;if(Bf.test(t)){e={};let i;for(;i=t.match(Bf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let al=0;const A0=Promise.resolve(),w0=()=>al||(A0.then(()=>al=0),al=Date.now());function C0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ln(R0(i,n.value),e,5,[i])};return n.value=t,n.attached=w0(),n}function R0(t,e){if(Be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,P0=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?_0(t,i,o):e==="style"?y0(t,n,i):Ta(e)?iu(e)||E0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D0(t,e,i,o))?(Ff(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?Ff(t,fn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Uf(t,e,i,o))};function D0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&kf(e)&&He(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return kf(e)&&bt(n)?!1:e in t}const Kp=new WeakMap,Zp=new WeakMap,ga=Symbol("_moveCb"),zf=Symbol("_enterCb"),L0=t=>(delete t.props.mode,t),I0=L0({name:"TransitionGroup",props:Ct({},Xp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Tu(),i=hp();let r,s;return xu(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!O0(r[0].el,n.vnode.el,o))return;r.forEach(N0),r.forEach(U0);const a=r.filter(F0);ic(),a.forEach(l=>{const c=l.el,u=c.style;Nn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[ga]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[ga]=null,bi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Ze(t),a=$p(o);let l=o.tag||gt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),fr(u,Gs(u,a,i,n)),Kp.set(u,u.el.getBoundingClientRect()))}s=e.default?_u(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&fr(u,Gs(u,a,i,n))}return ne(l,null,s)}}}),Au=I0;function N0(t){const e=t.el;e[ga]&&e[ga](),e[zf]&&e[zf]()}function U0(t){Zp.set(t,t.el.getBoundingClientRect())}function F0(t){const e=Kp.get(t),n=Zp.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function O0(t,e,n){const i=t.cloneNode(),r=t[as];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Yp(i);return s.removeChild(i),o}const B0=Ct({patchProp:P0},h0);let Vf;function k0(){return Vf||(Vf=Fv(B0))}const z0=(...t)=>{const e=k0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=H0(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,V0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function V0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function H0(t){return bt(t)?document.querySelector(t):t}function rc(t,e){let n;function i(){n=E_(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}At(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),A_(()=>{n==null||n.stop()})}const ln=typeof window<"u",Jp=ln&&"IntersectionObserver"in window,G0=ln&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function W0(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function wu(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>wu(t[i],e[i]))}function Hf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),W0(t,e.split("."),n))}function Qp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function at(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function X0(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Gf(t){let e;return t!==null&&typeof t=="object"&&((e=Object.getPrototypeOf(t))===Object.prototype||e===null)}function $0(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const Wf=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function ll(t,e){return e.every(n=>t.hasOwnProperty(n))}function em(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function Xf(t,e,n){const i=Object.create(null),r=Object.create(null);for(const s in t)e.some(o=>o instanceof RegExp?o.test(s):o===s)?i[s]=t[s]:r[s]=t[s];return[i,r]}function tm(t,e){const n={...t};return e.forEach(i=>delete n[i]),n}function Y0(t,e){const n={};return e.forEach(i=>n[i]=t[i]),n}const nm=/^on[^a-z]/,q0=t=>nm.test(t),j0=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function K0(t){const[e,n]=Xf(t,[nm]),i=tm(e,j0),[r,s]=Xf(n,["class","style","id",/^data-/]);return Object.assign(r,e),Object.assign(s,i),[r,s]}function Ns(t){return t==null?[]:Array.isArray(t)?t:[t]}function $s(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function $f(t){const e=t.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0}function Yf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function qf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function Z0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function cn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(Gf(s)&&Gf(o)){i[r]=cn(s,o,n);continue}if(n&&Array.isArray(s)&&Array.isArray(o)){i[r]=n(s,o);continue}i[r]=o}return i}function im(t){return t.map(e=>e.type===gt?im(e.children):e).flat()}function ar(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ar.cache.has(t))return ar.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ar.cache.set(t,e),e}ar.cache=new Map;function Yr(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Yr(t,n)).flat(1);if(e.suspense)return Yr(t,e.ssContent);if(Array.isArray(e.children))return e.children.map(n=>Yr(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Yr(t,e.component.subTree).flat(1)}return[]}function rm(t){const e=qt({}),n=se(t);return no(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),mu(e)}function sc(t,e){return t.includes(e)}const lr=()=>[Function,Array];function jf(t,e){return e="on"+Ui(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function J0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(Array.isArray(t))for(const r of t)r(...n);else typeof t=="function"&&t(...n)}function Q0(){const t=Sn(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>$0(t.value)}),e}const ex=["top","bottom"],tx=["start","end","left","right"];function nx(t,e){let[n,i]=t.split(" ");return i||(i=sc(ex,n)?"start":sc(tx,n)?"top":"center"),{side:Kf(n,e),align:Kf(i,e)}}function Kf(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class cl{constructor(e){let{x:n,y:i,width:r,height:s}=e;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ix(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new cl(e);const c=n.transformOrigin,u=e.x-a-(1-s)*parseFloat(c),f=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=s?e.width/s:t.offsetWidth+1,h=o?e.height/o:t.offsetHeight+1;return new cl({x:u,y:f,width:d,height:h})}else return new cl(e)}function rx(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let i;try{i=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const Ar=2.4,Zf=.2126729,Jf=.7151522,Qf=.072175,sx=.55,ox=.58,ax=.57,lx=.62,vo=.03,ed=1.45,cx=5e-4,ux=1.25,fx=1.25,dx=.078,td=12.82051282051282,xo=.06,hx=.001;function nd(t,e){const n=(t.r/255)**Ar,i=(t.g/255)**Ar,r=(t.b/255)**Ar,s=(e.r/255)**Ar,o=(e.g/255)**Ar,a=(e.b/255)**Ar;let l=n*Zf+i*Jf+r*Qf,c=s*Zf+o*Jf+a*Qf;if(l<=vo&&(l+=(vo-l)**ed),c<=vo&&(c+=(vo-c)**ed),Math.abs(c-l)<cx)return 0;let u;if(c>l){const f=(c**sx-l**ox)*ux;u=f<hx?0:f<dx?f-f*td*xo:f-xo}else{const f=(c**lx-l**ax)*fx;u=f>-.001?0:f>-.078?f-f*td*xo:f+xo}return u*100}const _a=.20689655172413793,px=t=>t>_a**3?Math.cbrt(t):t/(3*_a**2)+4/29,mx=t=>t>_a?t**3:3*_a**2*(t-4/29);function sm(t){const e=px,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function om(t){const e=mx,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const gx=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],_x=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,vx=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],xx=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function am(t){const e=Array(3),n=_x,i=gx;for(let r=0;r<3;++r)e[r]=Math.round($s(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Cu(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=xx,o=vx;e=s(e/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*i;return r}function oc(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function yx(t){return oc(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const id=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Sx={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>rd({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>rd({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>Ys({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>Ys({h:t,s:e,v:n,a:i})};function kn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&id.test(t)){const{groups:e}=t.match(id),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return Sx[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),bx(e)}else if(typeof t=="object"){if(ll(t,["r","g","b"]))return t;if(ll(t,["h","s","l"]))return Ys(lm(t));if(ll(t,["h","s","v"]))return Ys(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ys(t){const{h:e,s:n,v:i,a:r}=t,s=a=>{const l=(a+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function rd(t){return Ys(lm(t))}function lm(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:e,s:o,v:s,a:r}}function yo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function Mx(t){let{r:e,g:n,b:i,a:r}=t;return`#${[yo(e),yo(n),yo(i),r!==void 0?yo(Math.round(r*255)):""].join("")}`}function bx(t){t=Ex(t);let[e,n,i,r]=Z0(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function Ex(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Yf(Yf(t,6),8,"F")),t}function Tx(t,e){const n=sm(Cu(t));return n[0]=n[0]+e*10,am(om(n))}function Ax(t,e){const n=sm(Cu(t));return n[0]=n[0]-e*10,am(om(n))}function wx(t){const e=kn(t);return Cu(e)[1]}function cm(t){const e=Math.abs(nd(kn(0),kn(t)));return Math.abs(nd(kn(16777215),kn(t)))>Math.min(e,50)?"#fff":"#000"}function Xe(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&!i[r].source&&(i[r].source=e),i},{})}const Vt=Xe({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Mn(t,e){const n=Tu();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function pi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Mn(t).type;return ar((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let um=0,Jo=new WeakMap;function gs(){const t=Mn("getUid");if(Jo.has(t))return Jo.get(t);{const e=um++;return Jo.set(t,e),e}}gs.reset=()=>{um=0,Jo=new WeakMap};function Cx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Mn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const ls=Symbol.for("vuetify:defaults");function Rx(t){return dt(t)}function Ru(){const t=un(ls);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function fm(t,e){const n=Ru(),i=dt(t),r=se(()=>{if(Bn(e==null?void 0:e.disabled))return n.value;const o=Bn(e==null?void 0:e.scoped),a=Bn(e==null?void 0:e.reset),l=Bn(e==null?void 0:e.root);if(i.value==null&&!(o||a||l))return n.value;let c=cn(i.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=cn(cn(c,{prev:c}),c[l])),c}return c.prev?cn(c.prev,c):c});return xr(ls,r),r}function Px(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[ar(e)])<"u"}function Dx(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ru();const i=Mn("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=se(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,h,g,_,m,p;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(R=>R!=null):typeof c=="string"&&!Px(i.vnode,c)?((d=r.value)==null?void 0:d[c])!==void 0?(h=r.value)==null?void 0:h[c]:((_=(g=n.value)==null?void 0:g.global)==null?void 0:_[c])!==void 0?(p=(m=n.value)==null?void 0:m.global)==null?void 0:p[c]:u:u}}),o=Sn();no(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=Cx(ls,i);xr(ls,se(()=>o.value?cn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function so(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Xe(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return em(i,e)},t.props._as=String,t.setup=function(i,r){const s=Ru();if(!s.value)return t._setup(i,r);const{props:o,provideSubDefaults:a}=Dx(i,i._as??t.name,s),l=t._setup(o,r);return a(),l}}return t}function xt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?so:vu)(e)}const Lx="cubic-bezier(0.4, 0, 0.2, 1)";function Nt(t){const e=Mn("useRender");e.render=t}function Sr(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Mn("useProxiedModel"),o=dt(t[e]!==void 0?t[e]:n),a=ar(e),c=se(a!==e?()=>{var f,d,h,g;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(a))&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});rc(()=>!c.value,()=>{At(()=>t[e],f=>{o.value=f})});const u=se({get(){const f=t[e];return i(c.value?f:o.value)},set(f){const d=r(f),h=Ze(c.value?t[e]:o.value);h===d||i(h)===f||(o.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const Ix={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},sd="$vuetify.",od=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),dm=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(sd))return od(i,s);const a=i.replace(sd,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Hf(l,a,null);return u||(`${i}${t.value}`,u=Hf(c,a,null)),u||(u=i),typeof u!="string"&&(u=i),od(u,s)};function hm(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function ul(t,e,n){const i=Sr(t,e,t[e]??n.value);return i.value=t[e]??n.value,At(n,r=>{t[e]==null&&(i.value=n.value)}),i}function pm(t){return e=>{const n=ul(e,"locale",t.current),i=ul(e,"fallback",t.fallback),r=ul(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:dm(n,i,r),n:hm(n,i),provide:pm({current:n,fallback:i,messages:r})}}}function Nx(t){const e=Sn((t==null?void 0:t.locale)??"en"),n=Sn((t==null?void 0:t.fallback)??"en"),i=dt({en:Ix,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:dm(e,n,i),n:hm(e,n),provide:pm({current:e,fallback:n,messages:i})}}const va=Symbol.for("vuetify:locale");function Ux(t){return t.name!=null}function Fx(t){const e=t!=null&&t.adapter&&Ux(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:Nx(t),n=kx(e,t);return{...e,...n}}function Ox(){const t=un(va);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function Bx(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function kx(t,e){const n=dt((e==null?void 0:e.rtl)??Bx()),i=se(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:se(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function oo(){const t=un(va);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Ba={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function zx(t,e,n){const i=[];let r=[];const s=mm(t),o=gm(t),a=n??Ba[e.slice(-2).toUpperCase()]??0,l=(s.getDay()-a+7)%7,c=(o.getDay()-a+7)%7;for(let u=0;u<l;u++){const f=new Date(s);f.setDate(f.getDate()-(l-u)),r.push(f)}for(let u=1;u<=o.getDate();u++){const f=new Date(t.getFullYear(),t.getMonth(),u);r.push(f),r.length===7&&(i.push(r),r=[])}for(let u=1;u<7-c;u++){const f=new Date(o);f.setDate(f.getDate()+u),r.push(f)}return r.length>0&&i.push(r),i}function Vx(t,e,n){const i=n??Ba[e.slice(-2).toUpperCase()]??0,r=new Date(t);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function Hx(t,e){const n=new Date(t),i=((Ba[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function mm(t){return new Date(t.getFullYear(),t.getMonth(),1)}function gm(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Gx(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const Wx=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function _m(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(Wx.test(t))return Gx(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const ad=new Date(2e3,0,2);function Xx(t,e){const n=e??Ba[t.slice(-2).toUpperCase()]??0;return Qp(7).map(i=>{const r=new Date(ad);return r.setDate(ad.getDate()+n+i),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function $x(t,e,n,i){const r=_m(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function Yx(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=qf(String(n.getMonth()+1),2,"0"),s=qf(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function qx(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function jx(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function Kx(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function Zx(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function Jx(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function Qx(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function ey(t){return t.getFullYear()}function ty(t){return t.getMonth()}function ny(t){return t.getDate()}function iy(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function ry(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function sy(t){return t.getHours()}function oy(t){return t.getMinutes()}function ay(t){return new Date(t.getFullYear(),0,1)}function ly(t){return new Date(t.getFullYear(),11,31)}function cy(t,e){return xa(t,e[0])&&dy(t,e[1])}function uy(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function xa(t,e){return t.getTime()>e.getTime()}function fy(t,e){return xa(ac(t),ac(e))}function dy(t,e){return t.getTime()<e.getTime()}function ld(t,e){return t.getTime()===e.getTime()}function hy(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function py(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function my(t,e){return t.getFullYear()===e.getFullYear()}function gy(t,e,n){const i=new Date(t),r=new Date(e);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function _y(t,e){const n=new Date(t);return n.setHours(e),n}function vy(t,e){const n=new Date(t);return n.setMinutes(e),n}function xy(t,e){const n=new Date(t);return n.setMonth(e),n}function yy(t,e){const n=new Date(t);return n.setDate(e),n}function Sy(t,e){const n=new Date(t);return n.setFullYear(e),n}function ac(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function My(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class by{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return _m(e)}toJsDate(e){return e}toISO(e){return Yx(this,e)}parseISO(e){return qx(e)}addMinutes(e,n){return jx(e,n)}addHours(e,n){return Kx(e,n)}addDays(e,n){return Zx(e,n)}addWeeks(e,n){return Jx(e,n)}addMonths(e,n){return Qx(e,n)}getWeekArray(e,n){return zx(e,this.locale,n?Number(n):void 0)}startOfWeek(e,n){return Vx(e,this.locale,n?Number(n):void 0)}endOfWeek(e){return Hx(e,this.locale)}startOfMonth(e){return mm(e)}endOfMonth(e){return gm(e)}format(e,n){return $x(e,n,this.locale,this.formats)}isEqual(e,n){return ld(e,n)}isValid(e){return uy(e)}isWithinRange(e,n){return cy(e,n)}isAfter(e,n){return xa(e,n)}isAfterDay(e,n){return fy(e,n)}isBefore(e,n){return!xa(e,n)&&!ld(e,n)}isSameDay(e,n){return hy(e,n)}isSameMonth(e,n){return py(e,n)}isSameYear(e,n){return my(e,n)}setMinutes(e,n){return vy(e,n)}setHours(e,n){return _y(e,n)}setMonth(e,n){return xy(e,n)}setDate(e,n){return yy(e,n)}setYear(e,n){return Sy(e,n)}getDiff(e,n,i){return gy(e,n,i)}getWeekdays(e){return Xx(this.locale,e?Number(e):void 0)}getYear(e){return ey(e)}getMonth(e){return ty(e)}getDate(e){return ny(e)}getNextMonth(e){return iy(e)}getPreviousMonth(e){return ry(e)}getHours(e){return sy(e)}getMinutes(e){return oy(e)}startOfDay(e){return ac(e)}endOfDay(e){return My(e)}startOfYear(e){return ay(e)}endOfYear(e){return ly(e)}}const Ey=Symbol.for("vuetify:date-options"),cd=Symbol.for("vuetify:date-adapter");function Ty(t,e){const n=cn({adapter:by,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:Ay(n,e)}}function Ay(t,e){const n=qt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return At(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const ka=["sm","md","lg","xl","xxl"],ud=Symbol.for("vuetify:display"),fd={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},wy=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fd;return cn(fd,t)};function dd(t){return ln&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function hd(t){return ln&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function pd(t){const e=ln&&!t?window.navigator.userAgent:"ssr";function n(g){return!!e.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),h=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:f,mac:d,linux:h,touch:G0,ssr:e==="ssr"}}function Cy(t,e){const{thresholds:n,mobileBreakpoint:i}=wy(t),r=Sn(hd(e)),s=Sn(pd(e)),o=qt({}),a=Sn(dd(e));function l(){r.value=hd(),a.value=dd()}function c(){l(),s.value=pd()}return no(()=>{const u=a.value<n.sm,f=a.value<n.md&&!u,d=a.value<n.lg&&!(f||u),h=a.value<n.xl&&!(d||f||u),g=a.value<n.xxl&&!(h||d||f||u),_=a.value>=n.xxl,m=u?"xs":f?"sm":d?"md":h?"lg":g?"xl":"xxl",p=typeof i=="number"?i:n[i],R=a.value<p;o.xs=u,o.sm=f,o.md=d,o.lg=h,o.xl=g,o.xxl=_,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||d),o.xlAndUp=!(u||f||d||h),o.smAndDown=!(d||h||g||_),o.mdAndDown=!(h||g||_),o.lgAndDown=!(g||_),o.xlAndDown=!_,o.name=m,o.height=r.value,o.width=a.value,o.mobile=R,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),ln&&window.addEventListener("resize",l,{passive:!0}),{...mu(o),update:c,ssr:!!e}}const Ry=Symbol.for("vuetify:goto");function Py(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function Dy(t,e){return{rtl:e.isRtl,options:cn(Py(),t)}}const Ly={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload"},Iy={component:t=>yr(xm,{...t,class:"mdi"})},li=[String,Function,Object,Array],lc=Symbol.for("vuetify:icons"),za=Xe({icon:{type:li},tag:{type:String,required:!0}},"icon"),md=xt()({name:"VComponentIcon",props:za(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return ne(t.tag,null,{default:()=>{var r;return[t.icon?ne(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),vm=so({name:"VSvgIcon",inheritAttrs:!1,props:za(),setup(t,e){let{attrs:n}=e;return()=>ne(t.tag,Gn(n,{style:null}),{default:()=>[ne("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?ne("path",{d:i[0],"fill-opacity":i[1]},null):ne("path",{d:i},null)):ne("path",{d:t.icon},null)])]})}});so({name:"VLigatureIcon",props:za(),setup(t){return()=>ne(t.tag,null,{default:()=>[t.icon]})}});const xm=so({name:"VClassIcon",props:za(),setup(t){return()=>ne(t.tag,{class:t.icon},null)}});function Ny(){return{svg:{component:vm},class:{component:xm}}}function Uy(t){const e=Ny(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=Iy),cn({defaultSet:n,sets:e,aliases:{...Ly,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const Fy=t=>{const e=un(lc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:se(()=>{var l;const i=Bn(t);if(!i)return{component:md};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:vm,icon:r};if(typeof r!="string")return{component:md,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),o=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:o}})}},ya=Symbol.for("vuetify:theme"),$n=Xe({theme:String},"theme");function gd(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function Oy(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gd();const e=gd();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,o]of Object.entries(t.themes??{})){const a=o.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=cn(a,o)}return cn(e,{...t,themes:n})}function By(t){const e=Oy(t),n=dt(e.defaultTheme),i=dt(e.themes),r=se(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const h=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const g of e.variations.colors){const _=h.colors[g];if(_)for(const m of["lighten","darken"]){const p=m==="lighten"?Tx:Ax;for(const R of Qp(e.variations[m],1))h.colors[`${g}-${m}-${R}`]=Mx(p(kn(_),R))}}for(const g of Object.keys(h.colors)){if(/^on-[a-z]/.test(g)||h.colors[`on-${g}`])continue;const _=`on-${g}`,m=kn(h.colors[g]);h.colors[_]=cm(m)}}return u}),s=se(()=>r.value[n.value]),o=se(()=>{var g;const u=[];(g=s.value)!=null&&g.dark&&$i(u,":root",["color-scheme: dark"]),$i(u,":root",_d(s.value));for(const[_,m]of Object.entries(r.value))$i(u,`.v-theme--${_}`,[`color-scheme: ${m.dark?"dark":"normal"}`,..._d(m)]);const f=[],d=[],h=new Set(Object.values(r.value).flatMap(_=>Object.keys(_.colors)));for(const _ of h)/^on-[a-z]/.test(_)?$i(d,`.${_}`,[`color: rgb(var(--v-theme-${_})) !important`]):($i(f,`.bg-${_}`,[`--v-theme-overlay-multiplier: var(--v-theme-${_}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${_})) !important`,`color: rgb(var(--v-theme-on-${_})) !important`]),$i(d,`.text-${_}`,[`color: rgb(var(--v-theme-${_})) !important`]),$i(d,`.border-${_}`,[`--v-border-color: var(--v-theme-${_})`]));return u.push(...f,...d),u.map((_,m)=>m===0?_:`    ${_}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const h=f.push(a);ln&&At(o,()=>{h.patch(a)})}else ln?(f.addHeadObjs(se(a)),no(()=>f.updateDOM())):f.addHeadObjs(a());else{let g=function(){if(typeof document<"u"&&!h){const _=document.createElement("style");_.type="text/css",_.id="vuetify-theme-stylesheet",e.cspNonce&&_.setAttribute("nonce",e.cspNonce),h=_,document.head.appendChild(h)}h&&(h.innerHTML=o.value)};var d=g;let h=ln?document.getElementById("vuetify-theme-stylesheet"):null;ln?At(o,g,{immediate:!0}):g()}}const c=se(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:o,global:{name:n,current:s}}}function mi(t){Mn("provideTheme");const e=un(ya,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=se(()=>t.theme??e.name.value),i=se(()=>e.themes.value[n.value]),r=se(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return xr(ya,s),s}function $i(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function _d(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=kn(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${wx(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const o=typeof s=="string"&&s.startsWith("#")?kn(s):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;i.push(`--v-${r}: ${a??s}`)}return i}function ym(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Q0(),i=dt();if(ln){const r=new ResizeObserver(s=>{s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});vr(()=>{r.disconnect()}),At(()=>n.el,(s,o)=>{o&&(r.unobserve(o),i.value=void 0),s&&r.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:Pa(i)}}const cc=Symbol.for("vuetify:layout"),ky=Symbol.for("vuetify:layout-item"),vd=1e3,zy=Xe({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function Vy(){const t=un(cc);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}const Hy=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function Gy(t){const e=un(cc,null),n=se(()=>e?e.rootZIndex.value-100:vd),i=dt([]),r=qt(new Map),s=qt(new Map),o=qt(new Map),a=qt(new Map),l=qt(new Map),{resizeRef:c,contentRect:u}=ym(),f=se(()=>{const P=new Map,D=t.overlaps??[];for(const L of D.filter(b=>b.includes(":"))){const[b,v]=L.split(":");if(!i.value.includes(b)||!i.value.includes(v))continue;const w=r.get(b),U=r.get(v),O=s.get(b),W=s.get(v);!w||!U||!O||!W||(P.set(v,{position:w.value,amount:parseInt(O.value,10)}),P.set(b,{position:U.value,amount:-parseInt(W.value,10)}))}return P}),d=se(()=>{const P=[...new Set([...o.values()].map(L=>L.value))].sort((L,b)=>L-b),D=[];for(const L of P){const b=i.value.filter(v=>{var w;return((w=o.get(v))==null?void 0:w.value)===L});D.push(...b)}return Hy(D,r,s,a)}),h=se(()=>!Array.from(l.values()).some(P=>P.value)),g=se(()=>d.value[d.value.length-1].layer),_=se(()=>({"--v-layout-left":at(g.value.left),"--v-layout-right":at(g.value.right),"--v-layout-top":at(g.value.top),"--v-layout-bottom":at(g.value.bottom),...h.value?void 0:{transition:"none"}})),m=se(()=>d.value.slice(1).map((P,D)=>{let{id:L}=P;const{layer:b}=d.value[D],v=s.get(L),w=r.get(L);return{id:L,...b,size:Number(v.value),position:w.value}})),p=P=>m.value.find(D=>D.id===P),R=Mn("createLayout"),E=Sn(!1);Bi(()=>{E.value=!0}),xr(cc,{register:(P,D)=>{let{id:L,order:b,position:v,layoutSize:w,elementSize:U,active:O,disableTransitions:W,absolute:Z}=D;o.set(L,b),r.set(L,v),s.set(L,w),a.set(L,O),W&&l.set(L,W);const Q=Yr(ky,R==null?void 0:R.vnode).indexOf(P);Q>-1?i.value.splice(Q,0,L):i.value.push(L);const V=se(()=>m.value.findIndex(xe=>xe.id===L)),ue=se(()=>n.value+d.value.length*2-V.value*2),fe=se(()=>{const xe=v.value==="left"||v.value==="right",ke=v.value==="right",oe=v.value==="bottom",pe=U.value??w.value,be=pe===0?"%":"px",de={[v.value]:0,zIndex:ue.value,transform:`translate${xe?"X":"Y"}(${(O.value?0:-(pe===0?100:pe))*(ke||oe?-1:1)}${be})`,position:Z.value||n.value!==vd?"absolute":"fixed",...h.value?void 0:{transition:"none"}};if(!E.value)return de;const Ce=m.value[V.value];if(!Ce)throw new Error(`[Vuetify] Could not find layout item "${L}"`);const Le=f.value.get(L);return Le&&(Ce[Le.position]+=Le.amount),{...de,height:xe?`calc(100% - ${Ce.top}px - ${Ce.bottom}px)`:U.value?`${U.value}px`:void 0,left:ke?void 0:`${Ce.left}px`,right:ke?`${Ce.right}px`:void 0,top:v.value!=="bottom"?`${Ce.top}px`:void 0,bottom:v.value!=="top"?`${Ce.bottom}px`:void 0,width:xe?U.value?`${U.value}px`:void 0:`calc(100% - ${Ce.left}px - ${Ce.right}px)`}}),me=se(()=>({zIndex:ue.value-1}));return{layoutItemStyles:fe,layoutItemScrimStyles:me,zIndex:ue}},unregister:P=>{o.delete(P),r.delete(P),s.delete(P),a.delete(P),l.delete(P),i.value=i.value.filter(D=>D!==P)},mainRect:g,mainStyles:_,getLayoutItem:p,items:m,layoutRect:u,rootZIndex:n});const S=se(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),N=se(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:S,layoutStyles:N,getLayoutItem:p,items:m,layoutRect:u,layoutRef:c}}function Sm(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=cn(e,n),{aliases:r={},components:s={},directives:o={}}=i,a=Rx(i.defaults),l=Cy(i.display,i.ssr),c=By(i.theme),u=Uy(i.icons),f=Fx(i.locale),d=Ty(i.date,f),h=Dy(i.goTo,f);return{install:_=>{for(const m in o)_.directive(m,o[m]);for(const m in s)_.component(m,s[m]);for(const m in r)_.component(m,so({...r[m],name:m,aliasName:r[m].name}));if(c.install(_),_.provide(ls,a),_.provide(ud,l),_.provide(ya,c),_.provide(lc,u),_.provide(va,f),_.provide(Ey,d.options),_.provide(cd,d.instance),_.provide(Ry,h),ln&&i.ssr)if(_.$nuxt)_.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=_;_.mount=function(){const p=m(...arguments);return ur(()=>l.update()),_.mount=m,p}}gs.reset(),_.mixin({computed:{$vuetify(){return qt({defaults:wr.call(this,ls),display:wr.call(this,ud),theme:wr.call(this,ya),icons:wr.call(this,lc),locale:wr.call(this,va),date:wr.call(this,cd)})}}})},defaults:a,display:l,theme:c,icons:u,locale:f,date:d,goTo:h}}const Wy="3.7.6";Sm.version=Wy;function wr(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const Mm=Xe({border:[Boolean,Number,String]},"border");function bm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();return{borderClasses:se(()=>{const i=mt(t)?t.value:t.border,r=[];if(i===!0||i==="")r.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const Xy=[null,"default","comfortable","compact"],Pu=Xe({density:{type:String,default:"default",validator:t=>Xy.includes(t)}},"density");function Du(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();return{densityClasses:se(()=>`${e}--density-${t.density}`)}}const Em=Xe({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Tm(t){return{elevationClasses:se(()=>{const n=mt(t)?t.value:t.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const Va=Xe({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();return{roundedClasses:se(()=>{const i=mt(t)?t.value:t.rounded,r=mt(t)?t.value:t.tile,s=[];if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const o of String(i).split(" "))s.push(`rounded-${o}`);else(r||i===!1)&&s.push("rounded-0");return s})}}const ki=Xe({tag:{type:String,default:"div"}},"tag");function Lu(t){return rm(()=>{const e=[],n={};if(t.value.background)if(oc(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&yx(t.value.background)){const i=kn(t.value.background);if(i.a==null||i.a===1){const r=cm(i);n.color=r,n.caretColor=r}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(oc(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function dr(t,e){const n=se(()=>({text:mt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Lu(n);return{textColorClasses:i,textColorStyles:r}}function Qo(t,e){const n=se(()=>({background:mt(t)?t.value:e?t[e]:null})),{colorClasses:i,colorStyles:r}=Lu(n);return{backgroundColorClasses:i,backgroundColorStyles:r}}const $y=["elevated","flat","tonal","outlined","text","plain"];function Yy(t,e){return ne(gt,null,[ne("span",{key:"overlay",class:`${e}__overlay`},null),ne("span",{key:"underlay",class:`${e}__underlay`},null)])}const Am=Xe({color:String,variant:{type:String,default:"elevated",validator:t=>$y.includes(t)}},"variant");function qy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();const n=se(()=>{const{variant:s}=Bn(t);return`${e}--variant-${s}`}),{colorClasses:i,colorStyles:r}=Lu(se(()=>{const{variant:s,color:o}=Bn(t);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const wm=Xe({baseColor:String,divided:Boolean,...Mm(),...Vt(),...Pu(),...Em(),...Va(),...ki(),...$n(),...Am()},"VBtnGroup"),xd=xt()({name:"VBtnGroup",props:wm(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=mi(t),{densityClasses:r}=Du(t),{borderClasses:s}=bm(t),{elevationClasses:o}=Tm(t),{roundedClasses:a}=Ha(t);fm({VBtn:{height:"auto",baseColor:on(t,"baseColor"),color:on(t,"color"),density:on(t,"density"),flat:!0,variant:on(t,"variant")}}),Nt(()=>ne(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,s.value,r.value,o.value,a.value,t.class],style:t.style},n))}}),jy=Xe({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ky=Xe({value:null,disabled:Boolean,selectedClass:String},"group-item");function Zy(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=Mn("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=gs();xr(Symbol.for(`${e.description}:id`),r);const s=un(e,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=on(t,"value"),a=se(()=>!!(s.disabled.value||t.disabled));s.register({id:r,value:o,disabled:a},i),vr(()=>{s.unregister(r)});const l=se(()=>s.isSelected(r)),c=se(()=>s.items.value[0].id===r),u=se(()=>s.items.value[s.items.value.length-1].id===r),f=se(()=>l.value&&[s.selectedClass.value,t.selectedClass]);return At(l,d=>{i.emit("group:selected",{value:d})},{flush:"sync"}),{id:r,isSelected:l,isFirst:c,isLast:u,toggle:()=>s.select(r,!l.value),select:d=>s.select(r,d),selectedClass:f,value:o,disabled:a,group:s}}function Jy(t,e){let n=!1;const i=qt([]),r=Sr(t,"modelValue",[],d=>d==null?[]:Cm(i,Ns(d)),d=>{const h=eS(i,d);return t.multiple?h:h[0]}),s=Mn("useGroup");function o(d,h){const g=d,_=Symbol.for(`${e.description}:id`),p=Yr(_,s==null?void 0:s.vnode).indexOf(h);Bn(g.value)==null&&(g.value=p,g.useIndexAsValue=!0),p>-1?i.splice(p,0,g):i.push(g)}function a(d){if(n)return;l();const h=i.findIndex(g=>g.id===d);i.splice(h,1)}function l(){const d=i.find(h=>!h.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}Bi(()=>{l()}),vr(()=>{n=!0}),xu(()=>{for(let d=0;d<i.length;d++)i[d].useIndexAsValue&&(i[d].value=d)});function c(d,h){const g=i.find(_=>_.id===d);if(!(h&&(g!=null&&g.disabled)))if(t.multiple){const _=r.value.slice(),m=_.findIndex(R=>R===d),p=~m;if(h=h??!p,p&&t.mandatory&&_.length<=1||!p&&t.max!=null&&_.length+1>t.max)return;m<0&&h?_.push(d):m>=0&&!h&&_.splice(m,1),r.value=_}else{const _=r.value.includes(d);if(t.mandatory&&_)return;r.value=h??!_?[d]:[]}}function u(d){if(t.multiple,r.value.length){const h=r.value[0],g=i.findIndex(p=>p.id===h);let _=(g+d)%i.length,m=i[_];for(;m.disabled&&_!==g;)_=(_+d)%i.length,m=i[_];if(m.disabled)return;r.value=[i[_].id]}else{const h=i.find(g=>!g.disabled);h&&(r.value=[h.id])}}const f={register:o,unregister:a,selected:r,select:c,disabled:on(t,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:se(()=>t.selectedClass),items:se(()=>i),getItemIndex:d=>Qy(i,d)};return xr(e,f),f}function Qy(t,e){const n=Cm(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function Cm(t,e){const n=[];return e.forEach(i=>{const r=t.find(o=>wu(i,o.value)),s=t[i];(r==null?void 0:r.value)!=null?n.push(r.id):s!=null&&n.push(s.id)}),n}function eS(t,e){const n=[];return e.forEach(i=>{const r=t.findIndex(s=>s.id===i);if(~r){const s=t[r];n.push(s.value!=null?s.value:r)}}),n}const Rm=Symbol.for("vuetify:v-btn-toggle"),tS=Xe({...wm(),...jy()},"VBtnToggle");xt()({name:"VBtnToggle",props:tS(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:r,prev:s,select:o,selected:a}=Jy(t,Rm);return Nt(()=>{const l=xd.filterProps(t);return ne(xd,Gn({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:r,prev:s,select:o,selected:a})]}})}),{next:r,prev:s,select:o}}});const nS=Xe({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ns=xt(!1)({name:"VDefaultsProvider",props:nS(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:r,reset:s,root:o,scoped:a}=mu(t);return fm(i,{reset:s,root:o,scoped:a,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),iS=["x-small","small","default","large","x-large"],Iu=Xe({size:{type:[String,Number],default:"default"}},"size");function Nu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();return rm(()=>{let n,i;return sc(iS,t.size)?n=`${e}--size-${t.size}`:t.size&&(i={width:at(t.size),height:at(t.size)}),{sizeClasses:n,sizeStyles:i}})}const rS=Xe({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:li,...Vt(),...Iu(),...ki({tag:"i"}),...$n()},"VIcon"),ea=xt()({name:"VIcon",props:rS(),setup(t,e){let{attrs:n,slots:i}=e;const r=dt(),{themeClasses:s}=mi(t),{iconData:o}=Fy(se(()=>r.value||t.icon)),{sizeClasses:a}=Nu(t),{textColorClasses:l,textColorStyles:c}=dr(on(t,"color"));return Nt(()=>{var d,h;const u=(d=i.default)==null?void 0:d.call(i);u&&(r.value=(h=im(u).filter(g=>g.type===io&&g.children&&typeof g.children=="string")[0])==null?void 0:h.children);const f=!!(n.onClick||n.onClickOnce);return ne(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,a.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:at(t.size),height:at(t.size),width:at(t.size)},c.value,t.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function Pm(t,e){const n=dt(),i=Sn(!1);if(Jp){const r=new IntersectionObserver(s=>{i.value=!!s.find(o=>o.isIntersecting)},e);vr(()=>{r.disconnect()}),At(n,(s,o)=>{o&&(r.unobserve(o),i.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const sS=Xe({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Vt(),...Iu(),...ki({tag:"div"}),...$n()},"VProgressCircular"),oS=xt()({name:"VProgressCircular",props:sS(),setup(t,e){let{slots:n}=e;const i=20,r=2*Math.PI*i,s=dt(),{themeClasses:o}=mi(t),{sizeClasses:a,sizeStyles:l}=Nu(t),{textColorClasses:c,textColorStyles:u}=dr(on(t,"color")),{textColorClasses:f,textColorStyles:d}=dr(on(t,"bgColor")),{intersectionRef:h,isIntersecting:g}=Pm(),{resizeRef:_,contentRect:m}=ym(),p=se(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),R=se(()=>Number(t.width)),E=se(()=>l.value?Number(t.size):m.value?m.value.width:Math.max(R.value,32)),S=se(()=>i/(1-R.value/E.value)*2),N=se(()=>R.value/E.value*S.value),P=se(()=>at((100-p.value)/100*r));return no(()=>{h.value=s.value,_.value=s.value}),Nt(()=>ne(t.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:p.value},{default:()=>[ne("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${S.value} ${S.value}`},[ne("circle",{class:["v-progress-circular__underlay",f.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":N.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),ne("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":N.value,"stroke-dasharray":r,"stroke-dashoffset":P.value},null)]),n.default&&ne("div",{class:"v-progress-circular__content"},[n.default({value:p.value})])]})),{}}}),Uu=Xe({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Fu(t){return{dimensionStyles:se(()=>{const n={},i=at(t.height),r=at(t.maxHeight),s=at(t.maxWidth),o=at(t.minHeight),a=at(t.minWidth),l=at(t.width);return i!=null&&(n.height=i),r!=null&&(n.maxHeight=r),s!=null&&(n.maxWidth=s),o!=null&&(n.minHeight=o),a!=null&&(n.minWidth=a),l!=null&&(n.width=l),n})}}const yd={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Dm=Xe({location:String},"location");function Lm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=oo();return{locationStyles:se(()=>{if(!t.location)return{};const{side:s,align:o}=nx(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return s!=="center"&&(e?l[yd[s]]=`calc(100% - ${a(s)}px)`:l[s]=0),o!=="center"?e?l[yd[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const aS=Xe({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Vt(),...Dm({location:"top"}),...Va(),...ki(),...$n()},"VProgressLinear"),lS=xt()({name:"VProgressLinear",props:aS(),emits:{"update:modelValue":t=>!0},setup(t,e){var w;let{slots:n}=e;const i=Sr(t,"modelValue"),{isRtl:r,rtlClasses:s}=oo(),{themeClasses:o}=mi(t),{locationStyles:a}=Lm(t),{textColorClasses:l,textColorStyles:c}=dr(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:f}=Qo(se(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:h}=Qo(se(()=>t.bufferColor||t.bgColor||t.color)),{backgroundColorClasses:g,backgroundColorStyles:_}=Qo(t,"color"),{roundedClasses:m}=Ha(t),{intersectionRef:p,isIntersecting:R}=Pm(),E=se(()=>parseFloat(t.max)),S=se(()=>parseFloat(t.height)),N=se(()=>$s(parseFloat(t.bufferValue)/E.value*100,0,100)),P=se(()=>$s(parseFloat(i.value)/E.value*100,0,100)),D=se(()=>r.value!==t.reverse),L=se(()=>t.indeterminate?"fade-transition":"slide-x-transition"),b=ln&&((w=window.matchMedia)==null?void 0:w.call(window,"(forced-colors: active)").matches);function v(U){if(!p.value)return;const{left:O,right:W,width:Z}=p.value.getBoundingClientRect(),X=D.value?Z-U.clientX+(W-Z):U.clientX-O;i.value=Math.round(X/Z*E.value)}return Nt(()=>ne(t.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&R.value,"v-progress-linear--reverse":D.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},m.value,o.value,s.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?at(S.value):0,"--v-progress-linear-height":at(S.value),...t.absolute?a.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:P.value,onClick:t.clickable&&v},{default:()=>[t.stream&&ne("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[D.value?"left":"right"]:at(-S.value),borderTop:`${at(S.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${at(S.value/4)})`,width:at(100-N.value,"%"),"--v-progress-linear-stream-to":at(S.value*(D.value?1:-1))}},null),ne("div",{class:["v-progress-linear__background",b?void 0:u.value],style:[f.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),ne("div",{class:["v-progress-linear__buffer",b?void 0:d.value],style:[h.value,{opacity:parseFloat(t.bufferOpacity),width:at(N.value,"%")}]},null),ne(Oa,{name:L.value},{default:()=>[t.indeterminate?ne("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(U=>ne("div",{key:U,class:["v-progress-linear__indeterminate",U,b?void 0:g.value],style:_.value},null))]):ne("div",{class:["v-progress-linear__determinate",b?void 0:g.value],style:[_.value,{width:at(P.value,"%")}]},null)]}),n.default&&ne("div",{class:"v-progress-linear__content"},[n.default({value:P.value,buffer:N.value})])]})),{}}}),Im=Xe({loading:[Boolean,String]},"loader");function Nm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();return{loaderClasses:se(()=>({[`${e}--loading`]:t.loading}))}}function cS(t,e){var i;let{slots:n}=e;return ne("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||ne(lS,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const uS=["static","relative","fixed","absolute","sticky"],fS=Xe({position:{type:String,validator:t=>uS.includes(t)}},"position");function dS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();return{positionClasses:se(()=>t.position?`${e}--${t.position}`:void 0)}}function hS(){const t=Mn("useRoute");return se(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function pS(t,e){var f,d;const n=xv("RouterLink"),i=se(()=>!!(t.href||t.to)),r=se(()=>(i==null?void 0:i.value)||jf(e,"click")||jf(t,"click"));if(typeof n=="string"||!("useLink"in n)){const h=on(t,"href");return{isLink:i,isClickable:r,href:h,linkProps:qt({href:h})}}const s=se(()=>({...t,to:on(()=>t.to||"")})),o=n.useLink(s.value),a=se(()=>t.to?o:void 0),l=hS(),c=se(()=>{var h,g,_;return a.value?t.exact?l.value?((_=a.value.isExactActive)==null?void 0:_.value)&&wu(a.value.route.value.query,l.value.query):((g=a.value.isExactActive)==null?void 0:g.value)??!1:((h=a.value.isActive)==null?void 0:h.value)??!1:!1}),u=se(()=>{var h;return t.to?(h=a.value)==null?void 0:h.route.value.href:t.href});return{isLink:i,isClickable:r,isActive:c,route:(f=a.value)==null?void 0:f.route,navigate:(d=a.value)==null?void 0:d.navigate,href:u,linkProps:qt({href:u,"aria-current":se(()=>c.value?"page":void 0)})}}const mS=Xe({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function gS(t,e){At(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&ur(()=>{e(!0)})},{immediate:!0})}const uc=Symbol("rippleStop"),_S=80;function Sd(t,e){t.style.transform=e,t.style.webkitTransform=e}function fc(t){return t.constructor.name==="TouchEvent"}function Um(t){return t.constructor.name==="KeyboardEvent"}const vS=function(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!Um(t)){const d=e.getBoundingClientRect(),h=fc(t)?t.touches[t.touches.length-1]:t;i=h.clientX-d.left,r=h.clientY-d.top}let s=0,o=.3;(f=e._ripple)!=null&&f.circle?(o=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-s*2)/2}px`,l=`${(e.clientHeight-s*2)/2}px`,c=n.center?a:`${i-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:o,x:c,y:u,centerX:a,centerY:l}},Sa={show(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=e==null?void 0:e._ripple)!=null&&h.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:o,x:a,y:l,centerX:c,centerY:u}=vS(t,e,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),Sd(r,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),Sd(r,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var s;if(!((s=t==null?void 0:t._ripple)!=null&&s.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},r)}};function Fm(t){return typeof t>"u"||!!t}function qs(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[uc])){if(t[uc]=!0,fc(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Um(t),n._ripple.class&&(e.class=n._ripple.class),fc(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Sa.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},_S)}else Sa.show(t,n,e)}}function Md(t){t[uc]=!0}function sn(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{sn(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Sa.hide(e)}}function Om(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let js=!1;function Bm(t){!js&&(t.keyCode===Wf.enter||t.keyCode===Wf.space)&&(js=!0,qs(t))}function km(t){js=!1,sn(t)}function zm(t){js&&(js=!1,sn(t))}function Vm(t,e,n){const{value:i,modifiers:r}=e,s=Fm(i);if(s||Sa.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=s,t._ripple.centered=r.center,t._ripple.circle=r.circle,X0(i)&&i.class&&(t._ripple.class=i.class),s&&!n){if(r.stop){t.addEventListener("touchstart",Md,{passive:!0}),t.addEventListener("mousedown",Md);return}t.addEventListener("touchstart",qs,{passive:!0}),t.addEventListener("touchend",sn,{passive:!0}),t.addEventListener("touchmove",Om,{passive:!0}),t.addEventListener("touchcancel",sn),t.addEventListener("mousedown",qs),t.addEventListener("mouseup",sn),t.addEventListener("mouseleave",sn),t.addEventListener("keydown",Bm),t.addEventListener("keyup",km),t.addEventListener("blur",zm),t.addEventListener("dragstart",sn,{passive:!0})}else!s&&n&&Hm(t)}function Hm(t){t.removeEventListener("mousedown",qs),t.removeEventListener("touchstart",qs),t.removeEventListener("touchend",sn),t.removeEventListener("touchmove",Om),t.removeEventListener("touchcancel",sn),t.removeEventListener("mouseup",sn),t.removeEventListener("mouseleave",sn),t.removeEventListener("keydown",Bm),t.removeEventListener("keyup",km),t.removeEventListener("dragstart",sn),t.removeEventListener("blur",zm)}function xS(t,e){Vm(t,e,!1)}function yS(t){delete t._ripple,Hm(t)}function SS(t,e){if(e.value===e.oldValue)return;const n=Fm(e.oldValue);Vm(t,e,n)}const MS={mounted:xS,unmounted:yS,updated:SS},bS=Xe({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Rm},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:li,appendIcon:li,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Mm(),...Vt(),...Pu(),...Uu(),...Em(),...Ky(),...Im(),...Dm(),...fS(),...Va(),...mS(),...Iu(),...ki({tag:"button"}),...$n(),...Am({variant:"elevated"})},"VBtn"),bd=xt()({name:"VBtn",props:bS(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=mi(t),{borderClasses:s}=bm(t),{densityClasses:o}=Du(t),{dimensionStyles:a}=Fu(t),{elevationClasses:l}=Tm(t),{loaderClasses:c}=Nm(t),{locationStyles:u}=Lm(t),{positionClasses:f}=dS(t),{roundedClasses:d}=Ha(t),{sizeClasses:h,sizeStyles:g}=Nu(t),_=Zy(t,t.symbol,!1),m=pS(t,n),p=se(()=>{var w;return t.active!==void 0?t.active:m.isLink.value?(w=m.isActive)==null?void 0:w.value:_==null?void 0:_.isSelected.value}),R=se(()=>p.value?t.activeColor??t.color:t.color),E=se(()=>{var U,O;return{color:(_==null?void 0:_.isSelected.value)&&(!m.isLink.value||((U=m.isActive)==null?void 0:U.value))||!_||((O=m.isActive)==null?void 0:O.value)?R.value??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:S,colorStyles:N,variantClasses:P}=qy(E),D=se(()=>(_==null?void 0:_.disabled.value)||t.disabled),L=se(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),b=se(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function v(w){var U;D.value||m.isLink.value&&(w.metaKey||w.ctrlKey||w.shiftKey||w.button!==0||n.target==="_blank")||((U=m.navigate)==null||U.call(m,w),_==null||_.toggle())}return gS(m,_==null?void 0:_.select),Nt(()=>{const w=m.isLink.value?"a":t.tag,U=!!(t.prependIcon||i.prepend),O=!!(t.appendIcon||i.append),W=!!(t.icon&&t.icon!==!0);return La(ne(w,Gn({type:w==="a"?void 0:"button",class:["v-btn",_==null?void 0:_.selectedClass.value,{"v-btn--active":p.value,"v-btn--block":t.block,"v-btn--disabled":D.value,"v-btn--elevated":L.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},r.value,s.value,S.value,o.value,l.value,c.value,f.value,d.value,h.value,P.value,t.class],style:[N.value,a.value,u.value,g.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:D.value||void 0,tabindex:t.loading||t.readonly?-1:void 0,onClick:v,value:b.value},m.linkProps),{default:()=>{var Z;return[Yy(!0,"v-btn"),!t.icon&&U&&ne("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?ne(ns,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):ne(ea,{key:"prepend-icon",icon:t.prependIcon},null)]),ne("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&W?ne(ea,{key:"content-icon",icon:t.icon},null):ne(ns,{key:"content-defaults",disabled:!W,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var X;return[((X=i.default)==null?void 0:X.call(i))??t.text]}})]),!t.icon&&O&&ne("span",{key:"append",class:"v-btn__append"},[i.append?ne(ns,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):ne(ea,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&ne("span",{key:"loader",class:"v-btn__loader"},[((Z=i.loader)==null?void 0:Z.call(i))??ne(oS,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[MS,!D.value&&t.ripple,"",{center:!!t.icon}]])}),{group:_}}}),ES=Xe({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...Vt(),...$n()},"VDivider"),So=xt()({name:"VDivider",props:ES(),setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:r}=mi(t),{textColorClasses:s,textColorStyles:o}=dr(on(t,"color")),a=se(()=>{const l={};return t.length&&(l[t.vertical?"height":"width"]=at(t.length)),t.thickness&&(l[t.vertical?"borderRightWidth":"borderTopWidth"]=at(t.thickness)),l});return Nt(()=>{const l=ne("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},r.value,s.value,t.class],style:[a.value,o.value,{"--v-border-opacity":t.opacity},t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return i.default?ne("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":t.vertical,"v-divider__wrapper--inset":t.inset}]},[l,ne("div",{class:"v-divider__content"},[i.default()]),l]):l}),{}}}),TS=Xe({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function dn(t,e,n){return xt()({name:t,props:TS({mode:n,origin:e}),setup(i,r){let{slots:s}=r;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${f}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:f,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=f||"",a.style.height=d||""}}};return()=>{const a=i.group?Au:Oa;return yr(a,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},s.default)}}})}function Gm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return xt()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,r){let{slots:s}=r;const o=i.group?Au:Oa;return()=>yr(o,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},s.default)}})}function Wm(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=fn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),s(o)}function s(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}dn("fab-transition","center center","out-in");dn("dialog-bottom-transition");dn("dialog-top-transition");dn("fade-transition");dn("scale-transition");dn("scroll-x-transition");dn("scroll-x-reverse-transition");dn("scroll-y-transition");dn("scroll-y-reverse-transition");dn("slide-x-transition");dn("slide-x-reverse-transition");const Xm=dn("slide-y-transition");dn("slide-y-reverse-transition");Gm("expand-transition",Wm());const AS=Gm("expand-x-transition",Wm("",!0)),$m=Xe({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Ym=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:r,group:s,...o}=t,{component:a=s?Au:Oa,...l}=typeof i=="object"?i:{};return yr(a,Gn(typeof i=="string"?{name:r?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[u,f]=c;return f!==void 0})),o),n)},wS=Xe({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Vt(),...$m({transition:{component:Xm}})},"VCounter"),CS=xt()({name:"VCounter",functional:!0,props:wS(),setup(t,e){let{slots:n}=e;const i=se(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return Nt(()=>ne(Ym,{transition:t.transition},{default:()=>[La(ne("div",{class:["v-counter",{"text-error":t.max&&!t.disabled&&parseFloat(t.value)>parseFloat(t.max)},t.class],style:t.style},[n.default?n.default({counter:i.value,max:t.max,value:t.value}):i.value]),[[jp,t.active]])]})),{}}}),RS=Xe({text:String,onClick:lr(),...Vt(),...$n()},"VLabel"),PS=xt()({name:"VLabel",props:RS(),setup(t,e){let{slots:n}=e;return Nt(()=>{var i;return ne("label",{class:["v-label",{"v-label--clickable":!!t.onClick},t.class],style:t.style,onClick:t.onClick},[t.text,(i=n.default)==null?void 0:i.call(n)])}),{}}}),DS=Xe({floating:Boolean,...Vt()},"VFieldLabel"),Mo=xt()({name:"VFieldLabel",props:DS(),setup(t,e){let{slots:n}=e;return Nt(()=>ne(PS,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}});function qm(t){const{t:e}=Ox();function n(i){let{name:r}=i;const s={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[r],o=t[`onClick:${r}`],a=o&&s?e(`$vuetify.input.${s}`,t.label??""):void 0;return ne(ea,{icon:t[`${r}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}const jm=Xe({focused:Boolean,"onUpdate:focused":lr()},"focus");function Km(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi();const n=Sr(t,"focused"),i=se(()=>({[`${e}--focused`]:n.value}));function r(){n.value=!0}function s(){n.value=!1}return{focusClasses:i,isFocused:n,focus:r,blur:s}}const LS=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Zm=Xe({appendInnerIcon:li,bgColor:String,clearable:Boolean,clearIcon:{type:li,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:li,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>LS.includes(t)},"onClick:clear":lr(),"onClick:appendInner":lr(),"onClick:prependInner":lr(),...Vt(),...Im(),...Va(),...$n()},"VField"),Jm=xt()({name:"VField",inheritAttrs:!1,props:{id:String,...jm(),...Zm()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:r}=e;const{themeClasses:s}=mi(t),{loaderClasses:o}=Nm(t),{focusClasses:a,isFocused:l,focus:c,blur:u}=Km(t),{InputIcon:f}=qm(t),{roundedClasses:d}=Ha(t),{rtlClasses:h}=oo(),g=se(()=>t.dirty||t.active),_=se(()=>!t.singleLine&&!!(t.label||r.label)),m=gs(),p=se(()=>t.id||`input-${m}`),R=se(()=>`${p.value}-messages`),E=dt(),S=dt(),N=dt(),P=se(()=>["plain","underlined"].includes(t.variant)),{backgroundColorClasses:D,backgroundColorStyles:L}=Qo(on(t,"bgColor")),{textColorClasses:b,textColorStyles:v}=dr(se(()=>t.error||t.disabled?void 0:g.value&&l.value?t.color:t.baseColor));At(g,W=>{if(_.value){const Z=E.value.$el,X=S.value.$el;requestAnimationFrame(()=>{const Q=ix(Z),V=X.getBoundingClientRect(),ue=V.x-Q.x,fe=V.y-Q.y-(Q.height/2-V.height/2),me=V.width/.75,xe=Math.abs(me-Q.width)>1?{maxWidth:at(me)}:void 0,ke=getComputedStyle(Z),oe=getComputedStyle(X),pe=parseFloat(ke.transitionDuration)*1e3||150,be=parseFloat(oe.getPropertyValue("--v-field-label-scale")),de=oe.getPropertyValue("color");Z.style.visibility="visible",X.style.visibility="hidden",rx(Z,{transform:`translate(${ue}px, ${fe}px) scale(${be})`,color:de,...xe},{duration:pe,easing:Lx,direction:W?"normal":"reverse"}).finished.then(()=>{Z.style.removeProperty("visibility"),X.style.removeProperty("visibility")})})}},{flush:"post"});const w=se(()=>({isActive:g,isFocused:l,controlRef:N,blur:u,focus:c}));function U(W){W.target!==document.activeElement&&W.preventDefault()}function O(W){var Z;W.key!=="Enter"&&W.key!==" "||(W.preventDefault(),W.stopPropagation(),(Z=t["onClick:clear"])==null||Z.call(t,new MouseEvent("click")))}return Nt(()=>{var ue,fe,me;const W=t.variant==="outlined",Z=!!(r["prepend-inner"]||t.prependInnerIcon),X=!!(t.clearable||r.clear),Q=!!(r["append-inner"]||t.appendInnerIcon||X),V=()=>r.label?r.label({...w.value,label:t.label,props:{for:p.value}}):t.label;return ne("div",Gn({class:["v-field",{"v-field--active":g.value,"v-field--appended":Q,"v-field--center-affix":t.centerAffix??!P.value,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":Z,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!V(),[`v-field--variant-${t.variant}`]:!0},s.value,D.value,a.value,o.value,d.value,h.value,t.class],style:[L.value,t.style],onClick:U},n),[ne("div",{class:"v-field__overlay"},null),ne(cS,{name:"v-field",active:!!t.loading,color:t.error?"error":typeof t.loading=="string"?t.loading:t.color},{default:r.loader}),Z&&ne("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&ne(f,{key:"prepend-icon",name:"prependInner"},null),(ue=r["prepend-inner"])==null?void 0:ue.call(r,w.value)]),ne("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&_.value&&ne(Mo,{key:"floating-label",ref:S,class:[b.value],floating:!0,for:p.value,style:v.value},{default:()=>[V()]}),_.value&&ne(Mo,{key:"label",ref:E,for:p.value},{default:()=>[V()]}),(fe=r.default)==null?void 0:fe.call(r,{...w.value,props:{id:p.value,class:"v-field__input","aria-describedby":R.value},focus:c,blur:u})]),X&&ne(AS,{key:"clear"},{default:()=>[La(ne("div",{class:"v-field__clearable",onMousedown:xe=>{xe.preventDefault(),xe.stopPropagation()}},[ne(ns,{defaults:{VIcon:{icon:t.clearIcon}}},{default:()=>[r.clear?r.clear({...w.value,props:{onKeydown:O,onFocus:c,onBlur:u,onClick:t["onClick:clear"]}}):ne(f,{name:"clear",onKeydown:O,onFocus:c,onBlur:u},null)]})]),[[jp,t.dirty]])]}),Q&&ne("div",{key:"append",class:"v-field__append-inner"},[(me=r["append-inner"])==null?void 0:me.call(r,w.value),t.appendInnerIcon&&ne(f,{key:"append-icon",name:"appendInner"},null)]),ne("div",{class:["v-field__outline",b.value],style:v.value},[W&&ne(gt,null,[ne("div",{class:"v-field__outline__start"},null),_.value&&ne("div",{class:"v-field__outline__notch"},[ne(Mo,{ref:S,floating:!0,for:p.value},{default:()=>[V()]})]),ne("div",{class:"v-field__outline__end"},null)]),P.value&&_.value&&ne(Mo,{ref:S,floating:!0,for:p.value},{default:()=>[V()]})])])}),{controlRef:N}}});function IS(t){const e=Object.keys(Jm.props).filter(n=>!q0(n)&&n!=="class"&&n!=="style");return em(t,e)}const NS=Xe({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Vt(),...$m({transition:{component:Xm,leaveAbsolute:!0,group:!0}})},"VMessages"),US=xt()({name:"VMessages",props:NS(),setup(t,e){let{slots:n}=e;const i=se(()=>Ns(t.messages)),{textColorClasses:r,textColorStyles:s}=dr(se(()=>t.color));return Nt(()=>ne(Ym,{transition:t.transition,tag:"div",class:["v-messages",r.value,t.class],style:[s.value,t.style],role:"alert","aria-live":"polite"},{default:()=>[t.active&&i.value.map((o,a)=>ne("div",{class:"v-messages__message",key:`${a}-${i.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),FS=Symbol.for("vuetify:form");function Qm(t){const e=un(FS,null);return{...e,isReadonly:se(()=>!!((t==null?void 0:t.readonly)??(e==null?void 0:e.isReadonly.value))),isDisabled:se(()=>!!((t==null?void 0:t.disabled)??(e==null?void 0:e.isDisabled.value)))}}const OS=Xe({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...jm()},"validation");function BS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pi(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gs();const i=Sr(t,"modelValue"),r=se(()=>t.validationValue===void 0?i.value:t.validationValue),s=Qm(t),o=dt([]),a=Sn(!0),l=se(()=>!!(Ns(i.value===""?null:i.value).length||Ns(r.value===""?null:r.value).length)),c=se(()=>{var E;return(E=t.errorMessages)!=null&&E.length?Ns(t.errorMessages).concat(o.value).slice(0,Math.max(0,+t.maxErrors)):o.value}),u=se(()=>{var N;let E=(t.validateOn??((N=s.validateOn)==null?void 0:N.value))||"input";E==="lazy"&&(E="input lazy"),E==="eager"&&(E="input eager");const S=new Set((E==null?void 0:E.split(" "))??[]);return{input:S.has("input"),blur:S.has("blur")||S.has("input")||S.has("invalid-input"),invalidInput:S.has("invalid-input"),lazy:S.has("lazy"),eager:S.has("eager")}}),f=se(()=>{var E;return t.error||(E=t.errorMessages)!=null&&E.length?!1:t.rules.length?a.value?o.value.length||u.value.lazy?null:!0:!o.value.length:!0}),d=Sn(!1),h=se(()=>({[`${e}--error`]:f.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:s.isDisabled.value,[`${e}--readonly`]:s.isReadonly.value})),g=Mn("validation"),_=se(()=>t.name??Bn(n));yp(()=>{var E;(E=s.register)==null||E.call(s,{id:_.value,vm:g,validate:R,reset:m,resetValidation:p})}),vr(()=>{var E;(E=s.unregister)==null||E.call(s,_.value)}),Bi(async()=>{var E;u.value.lazy||await R(!u.value.eager),(E=s.update)==null||E.call(s,_.value,f.value,c.value)}),rc(()=>u.value.input||u.value.invalidInput&&f.value===!1,()=>{At(r,()=>{if(r.value!=null)R();else if(t.focused){const E=At(()=>t.focused,S=>{S||R(),E()})}})}),rc(()=>u.value.blur,()=>{At(()=>t.focused,E=>{E||R()})}),At([f,c],()=>{var E;(E=s.update)==null||E.call(s,_.value,f.value,c.value)});async function m(){i.value=null,await ur(),await p()}async function p(){a.value=!0,u.value.lazy?o.value=[]:await R(!u.value.eager)}async function R(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const S=[];d.value=!0;for(const N of t.rules){if(S.length>=+(t.maxErrors??1))break;const D=await(typeof N=="function"?N:()=>N)(r.value);if(D!==!0){if(D!==!1&&typeof D!="string"){console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);continue}S.push(D||"")}}return o.value=S,d.value=!1,a.value=E,o.value}return{errorMessages:c,isDirty:l,isDisabled:s.isDisabled,isReadonly:s.isReadonly,isPristine:a,isValid:f,isValidating:d,reset:m,resetValidation:p,validate:R,validationClasses:h}}const eg=Xe({id:String,appendIcon:li,centerAffix:{type:Boolean,default:!0},prependIcon:li,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":lr(),"onClick:append":lr(),...Vt(),...Pu(),...Y0(Uu(),["maxWidth","minWidth","width"]),...$n(),...OS()},"VInput"),Ed=xt()({name:"VInput",props:{...eg()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i,emit:r}=e;const{densityClasses:s}=Du(t),{dimensionStyles:o}=Fu(t),{themeClasses:a}=mi(t),{rtlClasses:l}=oo(),{InputIcon:c}=qm(t),u=gs(),f=se(()=>t.id||`input-${u}`),d=se(()=>`${f.value}-messages`),{errorMessages:h,isDirty:g,isDisabled:_,isReadonly:m,isPristine:p,isValid:R,isValidating:E,reset:S,resetValidation:N,validate:P,validationClasses:D}=BS(t,"v-input",f),L=se(()=>({id:f,messagesId:d,isDirty:g,isDisabled:_,isReadonly:m,isPristine:p,isValid:R,isValidating:E,reset:S,resetValidation:N,validate:P})),b=se(()=>{var v;return(v=t.errorMessages)!=null&&v.length||!p.value&&h.value.length?h.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages});return Nt(()=>{var W,Z,X,Q;const v=!!(i.prepend||t.prependIcon),w=!!(i.append||t.appendIcon),U=b.value.length>0,O=!t.hideDetails||t.hideDetails==="auto"&&(U||!!i.details);return ne("div",{class:["v-input",`v-input--${t.direction}`,{"v-input--center-affix":t.centerAffix,"v-input--hide-spin-buttons":t.hideSpinButtons},s.value,a.value,l.value,D.value,t.class],style:[o.value,t.style]},[v&&ne("div",{key:"prepend",class:"v-input__prepend"},[(W=i.prepend)==null?void 0:W.call(i,L.value),t.prependIcon&&ne(c,{key:"prepend-icon",name:"prepend"},null)]),i.default&&ne("div",{class:"v-input__control"},[(Z=i.default)==null?void 0:Z.call(i,L.value)]),w&&ne("div",{key:"append",class:"v-input__append"},[t.appendIcon&&ne(c,{key:"append-icon",name:"append"},null),(X=i.append)==null?void 0:X.call(i,L.value)]),O&&ne("div",{class:"v-input__details"},[ne(US,{id:d.value,active:U,messages:b.value},{message:i.message}),(Q=i.details)==null?void 0:Q.call(i,L.value)])])}),{reset:S,resetValidation:N,validate:P,isValid:R,errorMessages:h}}}),fl=Symbol("Forwarded refs");function dl(t,e){let n=t;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function tg(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t[fl]=n,new Proxy(t,{get(r,s){if(Reflect.has(r,s))return Reflect.get(r,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,s)){const a=Reflect.get(o.value,s);return typeof a=="function"?a.bind(o.value):a}}},has(r,s){if(Reflect.has(r,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,s))return!0;return!1},set(r,s,o){if(Reflect.has(r,s))return Reflect.set(r,s,o);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,s))return Reflect.set(a.value,s,o);return!1},getOwnPropertyDescriptor(r,s){var a;const o=Reflect.getOwnPropertyDescriptor(r,s);if(o)return o;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=dl(l.value,s)??("_"in l.value?dl((a=l.value._)==null?void 0:a.setupState,s):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[fl];if(!c)continue;const u=c.slice();for(;u.length;){const f=u.shift(),d=dl(f.value,s);if(d)return d;const h=f.value&&f.value[fl];h&&u.push(...h)}}}}})}function kS(t,e){if(!Jp)return;const n=e.modifiers||{},i=e.value,{handler:r,options:s}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var f;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(f=t._observe)==null?void 0:f[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&r(u,a,l),u&&n.once?ng(t,e):c.init=!0},s);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function ng(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const zS={mounted:kS,unmounted:ng},VS=["color","file","time","date","datetime-local","week","month"],ig=Xe({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...eg(),...Zm()},"VTextField"),Td=xt()({name:"VTextField",directives:{Intersect:zS},inheritAttrs:!1,props:ig(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:r}=e;const s=Sr(t,"modelValue"),{isFocused:o,focus:a,blur:l}=Km(t),c=se(()=>typeof t.counterValue=="function"?t.counterValue(s.value):typeof t.counterValue=="number"?t.counterValue:(s.value??"").toString().length),u=se(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter}),f=se(()=>["plain","underlined"].includes(t.variant));function d(P,D){var L,b;!t.autofocus||!P||(b=(L=D[0].target)==null?void 0:L.focus)==null||b.call(L)}const h=dt(),g=dt(),_=dt(),m=se(()=>VS.includes(t.type)||t.persistentPlaceholder||o.value||t.active);function p(){var P;_.value!==document.activeElement&&((P=_.value)==null||P.focus()),o.value||a()}function R(P){i("mousedown:control",P),P.target!==_.value&&(p(),P.preventDefault())}function E(P){p(),i("click:control",P)}function S(P){P.stopPropagation(),p(),ur(()=>{s.value=null,J0(t["onClick:clear"],P)})}function N(P){var L;const D=P.target;if(s.value=D.value,(L=t.modelModifiers)!=null&&L.trim&&["text","search","password","tel","url"].includes(t.type)){const b=[D.selectionStart,D.selectionEnd];ur(()=>{D.selectionStart=b[0],D.selectionEnd=b[1]})}}return Nt(()=>{const P=!!(r.counter||t.counter!==!1&&t.counter!=null),D=!!(P||r.details),[L,b]=K0(n),{modelValue:v,...w}=Ed.filterProps(t),U=IS(t);return ne(Ed,Gn({ref:h,modelValue:s.value,"onUpdate:modelValue":O=>s.value=O,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-input--plain-underlined":f.value},t.class],style:t.style},L,w,{centerAffix:!f.value,focused:o.value}),{...r,default:O=>{let{id:W,isDisabled:Z,isDirty:X,isReadonly:Q,isValid:V}=O;return ne(Jm,Gn({ref:g,onMousedown:R,onClick:E,"onClick:clear":S,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:t.role},U,{id:W.value,active:m.value||X.value,dirty:X.value||t.dirty,disabled:Z.value,focused:o.value,error:V.value===!1}),{...r,default:ue=>{let{props:{class:fe,...me}}=ue;const xe=La(ne("input",Gn({ref:_,value:s.value,onInput:N,autofocus:t.autofocus,readonly:Q.value,disabled:Z.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:p,onBlur:l},me,b),null),[[yv("intersect"),{handler:d},null,{once:!0}]]);return ne(gt,null,[t.prefix&&ne("span",{class:"v-text-field__prefix"},[ne("span",{class:"v-text-field__prefix__text"},[t.prefix])]),r.default?ne("div",{class:fe,"data-no-activator":""},[r.default(),xe]):fi(xe,{class:fe}),t.suffix&&ne("span",{class:"v-text-field__suffix"},[ne("span",{class:"v-text-field__suffix__text"},[t.suffix])])])}})},details:D?O=>{var W;return ne(gt,null,[(W=r.details)==null?void 0:W.call(r,O),P&&ne(gt,null,[ne("span",null,null),ne(CS,{active:t.persistentCounter||o.value,value:c.value,max:u.value,disabled:t.disabled},r.counter)])])}:void 0})}),tg({},h,g,_)}}),HS=Xe({controlVariant:{type:String,default:"default"},inset:Boolean,hideInput:Boolean,modelValue:{type:Number,default:null},min:{type:Number,default:Number.MIN_SAFE_INTEGER},max:{type:Number,default:Number.MAX_SAFE_INTEGER},step:{type:Number,default:1},...tm(ig({}),["appendInnerIcon","modelValue","prependInnerIcon"])},"VNumberInput"),GS=xt()({name:"VNumberInput",props:{...HS()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Sr(t,"modelValue"),r=se({get:()=>i.value,set(v){if(v===null||v===""){i.value=null;return}const w=Number(v);!isNaN(w)&&w<=t.max&&w>=t.min&&(i.value=w)}}),s=dt(),o=se(()=>$f(t.step)),a=se(()=>typeof r.value=="number"?$f(r.value):0),l=Qm(t),c=se(()=>l.isDisabled.value||l.isReadonly.value),u=se(()=>c.value?!1:(r.value??0)+t.step<=t.max),f=se(()=>c.value?!1:(r.value??0)-t.step>=t.min),d=se(()=>t.hideInput?"stacked":t.controlVariant),h=se(()=>d.value==="split"?"$plus":"$collapse"),g=se(()=>d.value==="split"?"$minus":"$expand"),_=se(()=>d.value==="split"?"default":"small"),m=se(()=>d.value==="stacked"?"auto":"100%"),p=se(()=>({click:S})),R=se(()=>({click:N}));Bi(()=>{c.value||b()});function E(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(c.value)return;if(r.value==null){r.value=$s(0,t.min,t.max);return}const w=Math.max(a.value,o.value);v?u.value&&(r.value=+(r.value+t.step).toFixed(w)):f.value&&(r.value=+(r.value-t.step).toFixed(w))}function S(v){v.stopPropagation(),E()}function N(v){v.stopPropagation(),E(!1)}function P(v){var Z,X,Q;if(!v.data)return;const w=(Z=v.target)==null?void 0:Z.value,U=(X=v.target)==null?void 0:X.selectionStart,O=(Q=v.target)==null?void 0:Q.selectionEnd,W=w?w.slice(0,U)+v.data+w.slice(O):v.data;/^-?(\d+(\.\d*)?|(\.\d+)|\d*|\.)$/.test(W)||v.preventDefault()}async function D(v){["Enter","ArrowLeft","ArrowRight","Backspace","Delete","Tab"].includes(v.key)||v.ctrlKey||["ArrowDown","ArrowUp"].includes(v.key)&&(v.preventDefault(),b(),await ur(),v.key==="ArrowDown"?E(!1):E())}function L(v){v.stopPropagation()}function b(){if(!s.value)return;const v=s.value.value;v&&!isNaN(+v)?r.value=$s(+v,t.min,t.max):r.value=null}return Nt(()=>{const{modelValue:v,...w}=Td.filterProps(t);function U(){return n.increment?ne(ns,{key:"increment-defaults",defaults:{VBtn:{disabled:!u.value,flat:!0,height:m.value,size:_.value,icon:h.value}}},{default:()=>[n.increment(p.value)]}):ne(bd,{disabled:!u.value,flat:!0,key:"increment-btn",height:m.value,"data-testid":"increment","aria-hidden":"true",icon:h.value,onClick:S,onMousedown:L,size:_.value,tabindex:"-1"},null)}function O(){return n.decrement?ne(ns,{key:"decrement-defaults",defaults:{VBtn:{disabled:!f.value,flat:!0,height:m.value,size:_.value,icon:g.value}}},{default:()=>[n.decrement(R.value)]}):ne(bd,{disabled:!f.value,flat:!0,key:"decrement-btn",height:m.value,"data-testid":"decrement","aria-hidden":"true",icon:g.value,size:_.value,tabindex:"-1",onClick:N,onMousedown:L},null)}function W(){return ne("div",{class:"v-number-input__control"},[O(),ne(So,{vertical:d.value!=="stacked"},null),U()])}function Z(){return!t.hideInput&&!t.inset?ne(So,{vertical:!0},null):void 0}const X=d.value==="split"?ne("div",{class:"v-number-input__control"},[ne(So,{vertical:!0},null),U()]):t.reverse?void 0:ne(gt,null,[Z(),W()]),Q=n["append-inner"]||X,V=d.value==="split"?ne("div",{class:"v-number-input__control"},[O(),ne(So,{vertical:!0},null)]):t.reverse?ne(gt,null,[W(),Z()]):void 0,ue=n["prepend-inner"]||V;return ne(Td,Gn({ref:s,modelValue:r.value,"onUpdate:modelValue":fe=>r.value=fe,onBeforeinput:P,onChange:b,onKeydown:D,class:["v-number-input",{"v-number-input--default":d.value==="default","v-number-input--hide-input":t.hideInput,"v-number-input--inset":t.inset,"v-number-input--reverse":t.reverse,"v-number-input--split":d.value==="split","v-number-input--stacked":d.value==="stacked"},t.class]},w,{style:t.style,inputmode:"decimal"}),{...n,"append-inner":Q?function(){var ke;for(var fe=arguments.length,me=new Array(fe),xe=0;xe<fe;xe++)me[xe]=arguments[xe];return ne(gt,null,[(ke=n["append-inner"])==null?void 0:ke.call(n,...me),X])}:void 0,"prepend-inner":ue?function(){var ke;for(var fe=arguments.length,me=new Array(fe),xe=0;xe<fe;xe++)me[xe]=arguments[xe];return ne(gt,null,[V,(ke=n["prepend-inner"])==null?void 0:ke.call(n,...me)])}:void 0})}),tg({},s)}}),WS=Sm({theme:{defaultTheme:"dark"},components:{VNumberInput:GS}});function XS(t){t.use(WS)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ou="172",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$S=0,Ad=1,YS=2,rg=1,qS=2,ti=3,Li=0,Jt=1,si=2,Pi=0,rs=1,wd=2,Cd=3,Rd=4,jS=5,nr=100,KS=101,ZS=102,JS=103,QS=104,eM=200,tM=201,nM=202,iM=203,dc=204,hc=205,rM=206,sM=207,oM=208,aM=209,lM=210,cM=211,uM=212,fM=213,dM=214,pc=0,mc=1,gc=2,cs=3,_c=4,vc=5,xc=6,yc=7,sg=0,hM=1,pM=2,Di=0,mM=1,gM=2,_M=3,vM=4,xM=5,yM=6,SM=7,og=300,us=301,fs=302,Sc=303,Mc=304,Ga=306,bc=1e3,rr=1001,Ec=1002,Dn=1003,MM=1004,bo=1005,zn=1006,hl=1007,sr=1008,di=1009,ag=1010,lg=1011,Ks=1012,Bu=1013,hr=1014,oi=1015,ao=1016,ku=1017,zu=1018,ds=1020,cg=35902,ug=1021,fg=1022,Rn=1023,dg=1024,hg=1025,ss=1026,hs=1027,pg=1028,Vu=1029,mg=1030,Hu=1031,Gu=1033,ta=33776,na=33777,ia=33778,ra=33779,Tc=35840,Ac=35841,wc=35842,Cc=35843,Rc=36196,Pc=37492,Dc=37496,Lc=37808,Ic=37809,Nc=37810,Uc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Vc=37817,Hc=37818,Gc=37819,Wc=37820,Xc=37821,sa=36492,$c=36494,Yc=36495,gg=36283,qc=36284,jc=36285,Kc=36286,bM=3200,EM=3201,_g=0,TM=1,Ci="",_n="srgb",ps="srgb-linear",Ma="linear",ot="srgb",Cr=7680,Pd=519,AM=512,wM=513,CM=514,vg=515,RM=516,PM=517,DM=518,LM=519,Dd=35044,Ld="300 es",ai=2e3,ba=2001;class Mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Id=1234567;const Us=Math.PI/180,Zs=180/Math.PI;function br(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function Wu(t,e){return(t%e+e)%e}function IM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function NM(t,e,n){return t!==e?(n-t)/(e-t):0}function Fs(t,e,n){return(1-n)*t+n*e}function UM(t,e,n,i){return Fs(t,e,1-Math.exp(-n*i))}function FM(t,e=1){return e-Math.abs(Wu(t,e*2)-e)}function OM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function BM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function kM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function zM(t,e){return t+Math.random()*(e-t)}function VM(t){return t*(.5-Math.random())}function HM(t){t!==void 0&&(Id=t);let e=Id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GM(t){return t*Us}function WM(t){return t*Zs}function XM(t){return(t&t-1)===0&&t!==0}function $M(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function YM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function qM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const jM={DEG2RAD:Us,RAD2DEG:Zs,generateUUID:br,clamp:je,euclideanModulo:Wu,mapLinear:IM,inverseLerp:NM,lerp:Fs,damp:UM,pingpong:FM,smoothstep:OM,smootherstep:BM,randInt:kM,randFloat:zM,randFloatSpread:VM,seededRandom:HM,degToRad:GM,radToDeg:WM,isPowerOfTwo:XM,ceilPowerOfTwo:$M,floorPowerOfTwo:YM,setQuaternionFromProperEuler:qM,normalize:Wt,denormalize:Wr};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],R=r[1],E=r[4],S=r[7],N=r[2],P=r[5],D=r[8];return s[0]=o*_+a*R+l*N,s[3]=o*m+a*E+l*P,s[6]=o*p+a*S+l*D,s[1]=c*_+u*R+f*N,s[4]=c*m+u*E+f*P,s[7]=c*p+u*S+f*D,s[2]=d*_+h*R+g*N,s[5]=d*m+h*E+g*P,s[8]=d*p+h*S+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pl.makeScale(e,n)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,n){return this.premultiply(pl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new Ye;function xg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KM(){const t=Ea("canvas");return t.style.display="block",t}const Nd={};function Xr(t){t in Nd||(Nd[t]=!0,console.warn(t))}function ZM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function JM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function QM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ud=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eb(){const t={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?Ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ps]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const et=eb();function ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class tb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=Ea("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ea("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ci(n[i]/255)*255):n[i]=ci(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nb=0;class yg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ml(r[o].image)):s.push(ml(r[o]))}else s=ml(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ml(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ib=0;class Qt extends Mr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=rr,r=rr,s=zn,o=sr,a=Rn,l=di,c=Qt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=br(),this.name="",this.source=new yg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=og;Qt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,S=(h+1)/2,N=(p+1)/2,P=(u+d)/4,D=(f+_)/4,L=(g+m)/4;return E>S&&E>N?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=D/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=L/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=D/s,r=L/s),this.set(i,r,s,n),this}let R=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(f-_)/R,this.z=(d-u)/R,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rb extends Mr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new yg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends rb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sg extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sb extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,R=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const N=Math.sqrt(E),P=Math.atan2(N,p*R);m=Math.sin(m*P)/N,a=Math.sin(a*P)/N}const S=a*R;if(l=l*m+d*S,c=c*m+h*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Od.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new z,Od=new mr;class lo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),To.subVectors(this.max,Ms),Pr.subVectors(e.a,Ms),Dr.subVectors(e.b,Ms),Lr.subVectors(e.c,Ms),_i.subVectors(Dr,Pr),vi.subVectors(Lr,Dr),Yi.subVectors(Pr,Lr);let n=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Yi.z,Yi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Yi.z,0,-Yi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Yi.y,Yi.x,0];return!_l(n,Pr,Dr,Lr,To)||(n=[1,0,0,0,1,0,0,0,1],!_l(n,Pr,Dr,Lr,To))?!1:(Ao.crossVectors(_i,vi),n=[Ao.x,Ao.y,Ao.z],_l(n,Pr,Dr,Lr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Tn=new z,Eo=new lo,Pr=new z,Dr=new z,Lr=new z,_i=new z,vi=new z,Yi=new z,Ms=new z,To=new z,Ao=new z,qi=new z;function _l(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qi.fromArray(t,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),c=n.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ob=new lo,bs=new z,vl=new z;class Xu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ob.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const n=bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(vl)),this.expandByPoint(bs.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new z,xl=new z,wo=new z,xi=new z,yl=new z,Co=new z,Sl=new z;class Mg{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xl.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(xl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wo),a=xi.dot(this.direction),l=-xi.dot(wo),c=xi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xl).addScaledVector(wo,d),h}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){yl.subVectors(n,e),Co.subVectors(i,e),Sl.crossVectors(yl,Co);let o=this.direction.dot(Sl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(Co.crossVectors(xi,Co));if(l<0)return null;const c=a*this.direction.dot(yl.cross(xi));if(c<0||l+c>o)return null;const u=-a*xi.dot(Sl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ab,e,lb)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),yi.crossVectors(i,tn),yi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),yi.crossVectors(i,tn)),yi.normalize(),Ro.crossVectors(tn,yi),r[0]=yi.x,r[4]=Ro.x,r[8]=tn.x,r[1]=yi.y,r[5]=Ro.y,r[9]=tn.y,r[2]=yi.z,r[6]=Ro.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],R=i[3],E=i[7],S=i[11],N=i[15],P=r[0],D=r[4],L=r[8],b=r[12],v=r[1],w=r[5],U=r[9],O=r[13],W=r[2],Z=r[6],X=r[10],Q=r[14],V=r[3],ue=r[7],fe=r[11],me=r[15];return s[0]=o*P+a*v+l*W+c*V,s[4]=o*D+a*w+l*Z+c*ue,s[8]=o*L+a*U+l*X+c*fe,s[12]=o*b+a*O+l*Q+c*me,s[1]=u*P+f*v+d*W+h*V,s[5]=u*D+f*w+d*Z+h*ue,s[9]=u*L+f*U+d*X+h*fe,s[13]=u*b+f*O+d*Q+h*me,s[2]=g*P+_*v+m*W+p*V,s[6]=g*D+_*w+m*Z+p*ue,s[10]=g*L+_*U+m*X+p*fe,s[14]=g*b+_*O+m*Q+p*me,s[3]=R*P+E*v+S*W+N*V,s[7]=R*D+E*w+S*Z+N*ue,s[11]=R*L+E*U+S*X+N*fe,s[15]=R*b+E*O+S*Q+N*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],R=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,E=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,S=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,N=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,P=n*R+i*E+r*S+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=R*D,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*D,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*D,e[4]=E*D,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*D,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*D,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*D,e[8]=S*D,e[9]=(g*f*s-u*_*s-g*i*h+n*_*h+u*i*p-n*f*p)*D,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*D,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*D,e[12]=N*D,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*D,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*D,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,R=l*c,E=l*u,S=l*f,N=i.x,P=i.y,D=i.z;return r[0]=(1-(_+p))*N,r[1]=(h+S)*N,r[2]=(g-E)*N,r[3]=0,r[4]=(h-S)*P,r[5]=(1-(d+p))*P,r[6]=(m+R)*P,r[7]=0,r[8]=(g+E)*D,r[9]=(m-R)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/s,u=1/o,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===ai)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ba)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,_;if(a===ai)g=(o+s)*f,_=-2*f;else if(a===ba)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new z,An=new vt,ab=new z(0,0,0),lb=new z(1,1,1),yi=new z,Ro=new z,tn=new z,Bd=new vt,kd=new mr;class Xn{constructor(e=0,n=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cb=0;const zd=new z,Nr=new mr,Jn=new vt,Po=new z,Es=new z,ub=new z,fb=new mr,Vd=new z(1,0,0),Hd=new z(0,1,0),Gd=new z(0,0,1),Wd={type:"added"},db={type:"removed"},Ur={type:"childadded",child:null},Ml={type:"childremoved",child:null};class zt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new z,n=new Xn,i=new mr,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,n){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Po.copy(e):Po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Es,Po,this.up):Jn.lookAt(Po,Es,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(db),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new z,Qn=new z,bl=new z,ei=new z,Fr=new z,Or=new z,Xd=new z,El=new z,Tl=new z,Al=new z,wl=new Mt,Cl=new Mt,Rl=new Mt;class Cn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wn.subVectors(r,n),Qn.subVectors(i,n),bl.subVectors(e,n);const o=wn.dot(wn),a=wn.dot(Qn),l=wn.dot(bl),c=Qn.dot(Qn),u=Qn.dot(bl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return wl.setScalar(0),Cl.setScalar(0),Rl.setScalar(0),wl.fromBufferAttribute(e,n),Cl.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wl,s.x),o.addScaledVector(Cl,s.y),o.addScaledVector(Rl,s.z),o}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),Qn.subVectors(e,n),wn.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),wn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Or.subVectors(s,i),El.subVectors(e,i);const l=Fr.dot(El),c=Or.dot(El);if(l<=0&&c<=0)return n.copy(i);Tl.subVectors(e,r);const u=Fr.dot(Tl),f=Or.dot(Tl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Fr,o);Al.subVectors(e,s);const h=Fr.dot(Al),g=Or.dot(Al);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Or,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Xd.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Xd,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Pl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Wu(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pl(o,s,e+1/3),this.g=Pl(o,s,e),this.b=Pl(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=Eg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return et.fromWorkingColorSpace(Ot.copy(this),e),Math.round(je(Ot.r*255,0,255))*65536+Math.round(je(Ot.g*255,0,255))*256+Math.round(je(Ot.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=_n){et.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(Do);const i=Fs(Si.h,Do.h,n),r=Fs(Si.s,Do.s,n),s=Fs(Si.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new tt;tt.NAMES=Eg;let hb=0;class co extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=br(),this.name="",this.type="Material",this.blending=rs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=hc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tg extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new z,Lo=new _e;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dd,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lo.fromBufferAttribute(this,n),Lo.applyMatrix3(e),this.setXY(n,Lo.x,Lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dd&&(e.usage=this.usage),e}}class Ag extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wg extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pb=0;const gn=new vt,Dl=new zt,Br=new z,nn=new lo,Ts=new lo,Dt=new z;class zi extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?wg:Ag)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(nn.min,Ts.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,Ts.max),nn.expandByPoint(Dt)):(nn.expandByPoint(Ts.min),nn.expandByPoint(Ts.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),Dt.add(Br)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new z,l[L]=new z;const c=new z,u=new z,f=new z,d=new _e,h=new _e,g=new _e,_=new z,m=new z;function p(L,b,v){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,L),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(w),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),a[L].add(_),a[b].add(_),a[v].add(_),l[L].add(m),l[b].add(m),l[v].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,b=R.length;L<b;++L){const v=R[L],w=v.start,U=v.count;for(let O=w,W=w+U;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new z,S=new z,N=new z,P=new z;function D(L){N.fromBufferAttribute(r,L),P.copy(N);const b=a[L];E.copy(b),E.sub(N.multiplyScalar(N.dot(b))).normalize(),S.crossVectors(P,b);const w=S.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,w)}for(let L=0,b=R.length;L<b;++L){const v=R[L],w=v.start,U=v.count;for(let O=w,W=w+U;O<W;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Wn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $d=new vt,ji=new Mg,Io=new Xu,Yd=new z,No=new z,Uo=new z,Fo=new z,Ll=new z,Oo=new z,qd=new z,Bo=new z;class Vn extends zt{constructor(e=new zi,n=new Tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ll.fromBufferAttribute(f,e),o?Oo.addScaledVector(Ll,u):Oo.addScaledVector(Ll.sub(n),u))}n.add(Oo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Io.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Io,Yd)===null||ji.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&($d.copy(s).invert(),ji.copy(e.ray).applyMatrix4($d),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],R=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=R,N=E;S<N;S+=3){const P=a.getX(S),D=a.getX(S+1),L=a.getX(S+2);r=ko(this,p,e,i,c,u,f,P,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const R=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=ko(this,o,e,i,c,u,f,R,E,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],R=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=R,N=E;S<N;S+=3){const P=S,D=S+1,L=S+2;r=ko(this,p,e,i,c,u,f,P,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const R=m,E=m+1,S=m+2;r=ko(this,o,e,i,c,u,f,R,E,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mb(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bo);return c<n.near||c>n.far?null:{distance:c,point:Bo.clone(),object:t}}function ko(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,No),t.getVertexPosition(l,Uo),t.getVertexPosition(c,Fo);const u=mb(t,e,n,i,No,Uo,Fo,qd);if(u){const f=new z;Cn.getBarycoord(qd,No,Uo,Fo,f),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,f,new _e)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,f,new _e)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Cn.getNormal(No,Uo,Fo,d.normal),u.face=d,u.barycoord=f}return u}class uo extends zi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(f,2));function g(_,m,p,R,E,S,N,P,D,L,b){const v=S/D,w=N/L,U=S/2,O=N/2,W=P/2,Z=D+1,X=L+1;let Q=0,V=0;const ue=new z;for(let fe=0;fe<X;fe++){const me=fe*w-O;for(let xe=0;xe<Z;xe++){const ke=xe*v-U;ue[_]=ke*R,ue[m]=me*E,ue[p]=W,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=P>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(xe/D),f.push(1-fe/L),Q+=1}}for(let fe=0;fe<L;fe++)for(let me=0;me<D;me++){const xe=d+me+Z*fe,ke=d+me+Z*(fe+1),oe=d+(me+1)+Z*(fe+1),pe=d+(me+1)+Z*fe;l.push(xe,ke,pe),l.push(ke,oe,pe),V+=6}a.addGroup(h,V,b),h+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=ms(t[n]);for(const r in i)e[r]=i[r]}return e}function gb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const _b={clone:ms,merge:Xt};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rg extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new z,jd=new _e,Kd=new _e;class vn extends Rg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,jd,Kd),n.subVectors(Kd,jd)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class yb extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(kr,zr,e,n);r.layers=this.layers,this.add(r);const s=new vn(kr,zr,e,n);s.layers=this.layers,this.add(s);const o=new vn(kr,zr,e,n);o.layers=this.layers,this.add(o);const a=new vn(kr,zr,e,n);a.layers=this.layers,this.add(a);const l=new vn(kr,zr,e,n);l.layers=this.layers,this.add(l);const c=new vn(kr,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pg extends Qt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:us,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sb extends pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new uo(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Pi});s.uniforms.tEquirect.value=n;const o=new Vn(r,s),a=n.minFilter;return n.minFilter===sr&&(n.minFilter=zn),new yb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Mb extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Il=new z,bb=new z,Eb=new Ye;class wi{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Il.subVectors(i,n).cross(bb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Eb.getNormalMatrix(e),r=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Xu,zo=new z;class $u{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],R=r[13],E=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-h,S-p).normalize(),i[1].setComponents(l+s,d+c,m+h,S+p).normalize(),i[2].setComponents(l+o,d+u,m+g,S+R).normalize(),i[3].setComponents(l-o,d-u,m-g,S-R).normalize(),i[4].setComponents(l-a,d-f,m-_,S-E).normalize(),n===ai)i[5].setComponents(l+a,d+f,m+_,S+E).normalize();else if(n===ba)i[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vo extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Dg extends Qt{constructor(e,n,i,r,s,o,a,l,c,u=ss){if(u!==ss&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ss&&(i=hr),i===void 0&&u===hs&&(i=ds),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new _e:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new z,r=[],s=[],o=[],a=new z,l=new vt;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(je(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(n===!0){let h=Math.acos(je(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yu extends Yn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new _e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tb extends Yu{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qu(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Ho=new z,Nl=new qu,Ul=new qu,Fl=new qu;class Ab extends Yn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new z){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ho.subVectors(r[0],r[1]).add(r[0]),c=Ho);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ho.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Nl.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,_,m),Ul.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,_,m),Fl.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Ul.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Fl.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Nl.calc(l),Ul.calc(l),Fl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zd(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function wb(t,e){const n=1-t;return n*n*e}function Cb(t,e){return 2*(1-t)*t*e}function Rb(t,e){return t*t*e}function Os(t,e,n,i){return wb(t,e)+Cb(t,n)+Rb(t,i)}function Pb(t,e){const n=1-t;return n*n*n*e}function Db(t,e){const n=1-t;return 3*n*n*t*e}function Lb(t,e){return 3*(1-t)*t*t*e}function Ib(t,e){return t*t*t*e}function Bs(t,e,n,i,r){return Pb(t,e)+Db(t,n)+Lb(t,i)+Ib(t,r)}class Lg extends Yn{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bs(e,r.x,s.x,o.x,a.x),Bs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nb extends Yn{constructor(e=new z,n=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bs(e,r.x,s.x,o.x,a.x),Bs(e,r.y,s.y,o.y,a.y),Bs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ig extends Yn{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ub extends Yn{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ng extends Yn{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Os(e,r.x,s.x,o.x),Os(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fb extends Yn{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Os(e,r.x,s.x,o.x),Os(e,r.y,s.y,o.y),Os(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ug extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Zd(a,l.x,c.x,u.x,f.x),Zd(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var Zc=Object.freeze({__proto__:null,ArcCurve:Tb,CatmullRomCurve3:Ab,CubicBezierCurve:Lg,CubicBezierCurve3:Nb,EllipseCurve:Yu,LineCurve:Ig,LineCurve3:Ub,QuadraticBezierCurve:Ng,QuadraticBezierCurve3:Fb,SplineCurve:Ug});class Ob extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Zc[r.type]().fromJSON(r))}return this}}class Jc extends Ob{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Ig(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Ng(this.currentPoint.clone(),new _e(e,n),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Lg(this.currentPoint.clone(),new _e(e,n),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Ug(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Yu(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fg extends Jc{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Jc().fromJSON(r))}return this}}const Bb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Og(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,d,h;if(i&&(s=Gb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)f=t[g],d=t[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return Js(s,o,n,a,l,h,0),o}};function Og(t,e,n,i,r){let s,o;if(r===eE(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Jd(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Jd(s,t[s],t[s+1],o);return o&&Wa(o,o.next)&&(eo(o),o=o.next),o}function gr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Wa(n,n.next)||_t(n.prev,n,n.next)===0)){if(eo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Js(t,e,n,i,r,s,o){if(!t)return;!o&&s&&qb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?zb(t,i,r,s):kb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),eo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Vb(gr(t),e,n),Js(t,e,n,i,r,s,2)):o===2&&Hb(t,e,n,i,r,s):Js(gr(t),e,n,i,r,s,1);break}}}function kb(t){const e=t.prev,n=t,i=t.next;if(_t(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,h=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&jr(r,a,s,l,o,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(_t(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,h=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,p=Qc(h,g,e,n,i),R=Qc(_,m,e,n,i);let E=t.prevZ,S=t.nextZ;for(;E&&E.z>=p&&S&&S.z<=R;){if(E.x>=h&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&jr(a,u,l,f,c,d,E.x,E.y)&&_t(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=h&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&jr(a,u,l,f,c,d,S.x,S.y)&&_t(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=p;){if(E.x>=h&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&jr(a,u,l,f,c,d,E.x,E.y)&&_t(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=R;){if(S.x>=h&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&jr(a,u,l,f,c,d,S.x,S.y)&&_t(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Vb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Wa(r,s)&&Bg(r,i,i.next,s)&&Qs(r,s)&&Qs(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),eo(i),eo(i.next),i=t=s),i=i.next}while(i!==t);return gr(i)}function Hb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zb(o,a)){let l=kg(o,a);o=gr(o,o.next),l=gr(l,l.next),Js(o,e,n,i,r,s,0),Js(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Gb(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Og(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Kb(c));for(r.sort(Wb),s=0;s<r.length;s++)n=Xb(r[s],n);return n}function Wb(t,e){return t.x-e.x}function Xb(t,e){const n=$b(t,e);if(!n)return e;const i=kg(n,t);return gr(i,i.next),gr(n,n.next)}function $b(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&jr(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Qs(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&Yb(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function Yb(t,e){return _t(t.prev,t,e.prev)<0&&_t(e.next,t,t.next)<0}function qb(t,e,n,i){let r=t;do r.z===0&&(r.z=Qc(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,jb(r)}function jb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Qc(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Kb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function jr(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Zb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Jb(t,e)&&(Qs(t,e)&&Qs(e,t)&&Qb(t,e)&&(_t(t.prev,t,e.prev)||_t(t,e.prev,e))||Wa(t,e)&&_t(t.prev,t,t.next)>0&&_t(e.prev,e,e.next)>0)}function _t(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Wa(t,e){return t.x===e.x&&t.y===e.y}function Bg(t,e,n,i){const r=Wo(_t(t,e,n)),s=Wo(_t(t,e,i)),o=Wo(_t(n,i,t)),a=Wo(_t(n,i,e));return!!(r!==s&&o!==a||r===0&&Go(t,n,e)||s===0&&Go(t,i,e)||o===0&&Go(n,t,i)||a===0&&Go(n,e,i))}function Go(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Wo(t){return t>0?1:t<0?-1:0}function Jb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Bg(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Qs(t,e){return _t(t.prev,t,t.next)<0?_t(t,e,t.next)>=0&&_t(t,t.prev,e)>=0:_t(t,e,t.prev)<0||_t(t,t.next,e)<0}function Qb(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function kg(t,e){const n=new eu(t.i,t.x,t.y),i=new eu(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Jd(t,e,n,i){const r=new eu(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function eo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function eu(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eE(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ks{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ks.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Qd(e),eh(i,e);let o=e.length;n.forEach(Qd);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,eh(i,n[l]);const a=Bb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Qd(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function eh(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ju extends zi{constructor(e=new Fg([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ui(r,3)),this.setAttribute("uv",new ui(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,h=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:h-.1,_=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,R=n.UVGenerator!==void 0?n.UVGenerator:tE;let E,S=!1,N,P,D,L;p&&(E=p.getSpacedPoints(u),S=!0,d=!1,N=p.computeFrenetFrames(u,!1),P=new z,D=new z,L=new z),d||(m=0,h=0,g=0,_=0);const b=a.extractPoints(c);let v=b.shape;const w=b.holes;if(!ks.isClockWise(v)){v=v.reverse();for(let A=0,C=w.length;A<C;A++){const y=w[A];ks.isClockWise(y)&&(w[A]=y.reverse())}}const O=ks.triangulateShape(v,w),W=v;for(let A=0,C=w.length;A<C;A++){const y=w[A];v=v.concat(y)}function Z(A,C,y){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(C,y)}const X=v.length,Q=O.length;function V(A,C,y){let j,F,$;const Y=A.x-C.x,ie=A.y-C.y,q=y.x-A.x,M=y.y-A.y,x=Y*Y+ie*ie,I=Y*M-ie*q;if(Math.abs(I)>Number.EPSILON){const G=Math.sqrt(x),J=Math.sqrt(q*q+M*M),K=C.x-ie/G,ge=C.y+Y/G,le=y.x-M/J,ve=y.y+q/J,Ue=((le-K)*M-(ve-ge)*q)/(Y*M-ie*q);j=K+Y*Ue-A.x,F=ge+ie*Ue-A.y;const ce=j*j+F*F;if(ce<=2)return new _e(j,F);$=Math.sqrt(ce/2)}else{let G=!1;Y>Number.EPSILON?q>Number.EPSILON&&(G=!0):Y<-Number.EPSILON?q<-Number.EPSILON&&(G=!0):Math.sign(ie)===Math.sign(M)&&(G=!0),G?(j=-ie,F=Y,$=Math.sqrt(x)):(j=Y,F=ie,$=Math.sqrt(x/2))}return new _e(j/$,F/$)}const ue=[];for(let A=0,C=W.length,y=C-1,j=A+1;A<C;A++,y++,j++)y===C&&(y=0),j===C&&(j=0),ue[A]=V(W[A],W[y],W[j]);const fe=[];let me,xe=ue.concat();for(let A=0,C=w.length;A<C;A++){const y=w[A];me=[];for(let j=0,F=y.length,$=F-1,Y=j+1;j<F;j++,$++,Y++)$===F&&($=0),Y===F&&(Y=0),me[j]=V(y[j],y[$],y[Y]);fe.push(me),xe=xe.concat(me)}for(let A=0;A<m;A++){const C=A/m,y=h*Math.cos(C*Math.PI/2),j=g*Math.sin(C*Math.PI/2)+_;for(let F=0,$=W.length;F<$;F++){const Y=Z(W[F],ue[F],j);de(Y.x,Y.y,-y)}for(let F=0,$=w.length;F<$;F++){const Y=w[F];me=fe[F];for(let ie=0,q=Y.length;ie<q;ie++){const M=Z(Y[ie],me[ie],j);de(M.x,M.y,-y)}}}const ke=g+_;for(let A=0;A<X;A++){const C=d?Z(v[A],xe[A],ke):v[A];S?(D.copy(N.normals[0]).multiplyScalar(C.x),P.copy(N.binormals[0]).multiplyScalar(C.y),L.copy(E[0]).add(D).add(P),de(L.x,L.y,L.z)):de(C.x,C.y,0)}for(let A=1;A<=u;A++)for(let C=0;C<X;C++){const y=d?Z(v[C],xe[C],ke):v[C];S?(D.copy(N.normals[A]).multiplyScalar(y.x),P.copy(N.binormals[A]).multiplyScalar(y.y),L.copy(E[A]).add(D).add(P),de(L.x,L.y,L.z)):de(y.x,y.y,f/u*A)}for(let A=m-1;A>=0;A--){const C=A/m,y=h*Math.cos(C*Math.PI/2),j=g*Math.sin(C*Math.PI/2)+_;for(let F=0,$=W.length;F<$;F++){const Y=Z(W[F],ue[F],j);de(Y.x,Y.y,f+y)}for(let F=0,$=w.length;F<$;F++){const Y=w[F];me=fe[F];for(let ie=0,q=Y.length;ie<q;ie++){const M=Z(Y[ie],me[ie],j);S?de(M.x,M.y+E[u-1].y,E[u-1].x+y):de(M.x,M.y,f+y)}}}oe(),pe();function oe(){const A=r.length/3;if(d){let C=0,y=X*C;for(let j=0;j<Q;j++){const F=O[j];Ce(F[2]+y,F[1]+y,F[0]+y)}C=u+m*2,y=X*C;for(let j=0;j<Q;j++){const F=O[j];Ce(F[0]+y,F[1]+y,F[2]+y)}}else{for(let C=0;C<Q;C++){const y=O[C];Ce(y[2],y[1],y[0])}for(let C=0;C<Q;C++){const y=O[C];Ce(y[0]+X*u,y[1]+X*u,y[2]+X*u)}}i.addGroup(A,r.length/3-A,0)}function pe(){const A=r.length/3;let C=0;be(W,C),C+=W.length;for(let y=0,j=w.length;y<j;y++){const F=w[y];be(F,C),C+=F.length}i.addGroup(A,r.length/3-A,1)}function be(A,C){let y=A.length;for(;--y>=0;){const j=y;let F=y-1;F<0&&(F=A.length-1);for(let $=0,Y=u+m*2;$<Y;$++){const ie=X*$,q=X*($+1),M=C+j+ie,x=C+F+ie,I=C+F+q,G=C+j+q;Le(M,x,I,G)}}}function de(A,C,y){l.push(A),l.push(C),l.push(y)}function Ce(A,C,y){Ie(A),Ie(C),Ie(y);const j=r.length/3,F=R.generateTopUV(i,r,j-3,j-2,j-1);Ke(F[0]),Ke(F[1]),Ke(F[2])}function Le(A,C,y,j){Ie(A),Ie(C),Ie(j),Ie(C),Ie(y),Ie(j);const F=r.length/3,$=R.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);Ke($[0]),Ke($[1]),Ke($[3]),Ke($[1]),Ke($[2]),Ke($[3])}function Ie(A){r.push(l[A*3+0]),r.push(l[A*3+1]),r.push(l[A*3+2])}function Ke(A){s.push(A.x),s.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return nE(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Zc[r.type]().fromJSON(r)),new ju(i,e.options)}}const tE={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new _e(s,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],h=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-f),new _e(d,1-g),new _e(_,1-p)]:[new _e(a,1-l),new _e(u,1-f),new _e(h,1-g),new _e(m,1-p)]}};function nE(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Xa extends zi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const R=p*d-o;for(let E=0;E<c;E++){const S=E*f-s;g.push(S,-R,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const E=R+c*p,S=R+c*(p+1),N=R+1+c*(p+1),P=R+1+c*p;h.push(E,S,P),h.push(S,N,P)}this.setIndex(h),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class iE extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_g,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rE extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zg extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ol=new vt,th=new z,nh=new z;class oE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;th.setFromMatrixPosition(e.matrixWorld),n.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(nh),n.updateMatrixWorld(),Ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vg extends Rg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class aE extends oE{constructor(){super(new Vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lE extends zg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new aE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cE extends zg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class uE extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ih{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fE extends Mr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function rh(t,e,n,i){const r=dE(i);switch(n){case ug:return t*e;case dg:return t*e;case hg:return t*e*2;case pg:return t*e/r.components*r.byteLength;case Vu:return t*e/r.components*r.byteLength;case mg:return t*e*2/r.components*r.byteLength;case Hu:return t*e*2/r.components*r.byteLength;case fg:return t*e*3/r.components*r.byteLength;case Rn:return t*e*4/r.components*r.byteLength;case Gu:return t*e*4/r.components*r.byteLength;case ta:case na:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ia:case ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(t,16)*Math.max(e,8)/4;case Tc:case wc:return Math.max(t,8)*Math.max(e,8)/2;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sa:case $c:case Yc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gg:case qc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jc:case Kc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dE(t){switch(t){case di:case ag:return{byteLength:1,components:1};case Ks:case lg:case ao:return{byteLength:2,components:1};case ku:case zu:return{byteLength:2,components:4};case hr:case Bu:case oi:return{byteLength:4,components:1};case cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_T=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ST=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:_E,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:bE,begin_vertex:EE,beginnormal_vertex:TE,bsdfs:AE,iridescence_fragment:wE,bumpmap_pars_fragment:CE,clipping_planes_fragment:RE,clipping_planes_pars_fragment:PE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:LE,color_fragment:IE,color_pars_fragment:NE,color_pars_vertex:UE,color_vertex:FE,common:OE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:kE,displacementmap_pars_vertex:zE,displacementmap_vertex:VE,emissivemap_fragment:HE,emissivemap_pars_fragment:GE,colorspace_fragment:WE,colorspace_pars_fragment:XE,envmap_fragment:$E,envmap_common_pars_fragment:YE,envmap_pars_fragment:qE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:oT,envmap_vertex:KE,fog_vertex:ZE,fog_pars_vertex:JE,fog_fragment:QE,fog_pars_fragment:eT,gradientmap_pars_fragment:tT,lightmap_pars_fragment:nT,lights_lambert_fragment:iT,lights_lambert_pars_fragment:rT,lights_pars_begin:sT,lights_toon_fragment:aT,lights_toon_pars_fragment:lT,lights_phong_fragment:cT,lights_phong_pars_fragment:uT,lights_physical_fragment:fT,lights_physical_pars_fragment:dT,lights_fragment_begin:hT,lights_fragment_maps:pT,lights_fragment_end:mT,logdepthbuf_fragment:gT,logdepthbuf_pars_fragment:_T,logdepthbuf_pars_vertex:vT,logdepthbuf_vertex:xT,map_fragment:yT,map_pars_fragment:ST,map_particle_fragment:MT,map_particle_pars_fragment:bT,metalnessmap_fragment:ET,metalnessmap_pars_fragment:TT,morphinstance_vertex:AT,morphcolor_vertex:wT,morphnormal_vertex:CT,morphtarget_pars_vertex:RT,morphtarget_vertex:PT,normal_fragment_begin:DT,normal_fragment_maps:LT,normal_pars_fragment:IT,normal_pars_vertex:NT,normal_vertex:UT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:BT,clearcoat_pars_fragment:kT,iridescence_pars_fragment:zT,opaque_fragment:VT,packing:HT,premultiplied_alpha_fragment:GT,project_vertex:WT,dithering_fragment:XT,dithering_pars_fragment:$T,roughnessmap_fragment:YT,roughnessmap_pars_fragment:qT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:KT,shadowmap_vertex:ZT,shadowmask_pars_fragment:JT,skinbase_vertex:QT,skinning_pars_vertex:eA,skinning_vertex:tA,skinnormal_vertex:nA,specularmap_fragment:iA,specularmap_pars_fragment:rA,tonemapping_fragment:sA,tonemapping_pars_fragment:oA,transmission_fragment:aA,transmission_pars_fragment:lA,uv_pars_fragment:cA,uv_pars_vertex:uA,uv_vertex:fA,worldpos_vertex:dA,background_vert:hA,background_frag:pA,backgroundCube_vert:mA,backgroundCube_frag:gA,cube_vert:_A,cube_frag:vA,depth_vert:xA,depth_frag:yA,distanceRGBA_vert:SA,distanceRGBA_frag:MA,equirect_vert:bA,equirect_frag:EA,linedashed_vert:TA,linedashed_frag:AA,meshbasic_vert:wA,meshbasic_frag:CA,meshlambert_vert:RA,meshlambert_frag:PA,meshmatcap_vert:DA,meshmatcap_frag:LA,meshnormal_vert:IA,meshnormal_frag:NA,meshphong_vert:UA,meshphong_frag:FA,meshphysical_vert:OA,meshphysical_frag:BA,meshtoon_vert:kA,meshtoon_frag:zA,points_vert:VA,points_frag:HA,shadow_vert:GA,shadow_frag:WA,sprite_vert:XA,sprite_frag:$A},Se={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Xt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Xt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Xt([Se.points,Se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Xt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Xt([Se.common,Se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Xt([Se.sprite,Se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Xt([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Xt([Se.lights,Se.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};On.physical={uniforms:Xt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Xo={r:0,b:0,g:0},Zi=new Xn,YA=new vt;function qA(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?n:e).get(S)),S}function _(E){let S=!1;const N=g(E);N===null?p(a,l):N&&N.isColor&&(p(N,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,S){const N=g(S);N&&(N.isCubeTexture||N.mapping===Ga)?(u===void 0&&(u=new Vn(new uo(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ms(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zi.copy(S.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Zi)),u.material.toneMapped=et.getTransfer(N.colorSpace)!==ot,(f!==N||d!==N.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=N,d=N.version,h=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Vn(new Xa(2,2),new Ii({name:"BackgroundMaterial",uniforms:ms(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(N.colorSpace)!==ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||d!==N.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=N,d=N.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(Xo,Cg(t)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,S,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:R}}function jA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(v,w,U,O,W){let Z=!1;const X=f(O,U,w);s!==X&&(s=X,c(s.object)),Z=h(v,O,U,W),Z&&g(v,O,U,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(v,w,U,O),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function u(v){return t.deleteVertexArray(v)}function f(v,w,U){const O=U.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let Z=W[w.id];Z===void 0&&(Z={},W[w.id]=Z);let X=Z[O];return X===void 0&&(X=d(l()),Z[O]=X),X}function d(v){const w=[],U=[],O=[];for(let W=0;W<n;W++)w[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:O,object:v,attributes:{},index:null}}function h(v,w,U,O){const W=s.attributes,Z=w.attributes;let X=0;const Q=U.getAttributes();for(const V in Q)if(Q[V].location>=0){const fe=W[V];let me=Z[V];if(me===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function g(v,w,U,O){const W={},Z=w.attributes;let X=0;const Q=U.getAttributes();for(const V in Q)if(Q[V].location>=0){let fe=Z[V];fe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),W[V]=me,X++}s.attributes=W,s.attributesNum=X,s.index=O}function _(){const v=s.newAttributes;for(let w=0,U=v.length;w<U;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){const U=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;U[v]=1,O[v]===0&&(t.enableVertexAttribArray(v),O[v]=1),W[v]!==w&&(t.vertexAttribDivisor(v,w),W[v]=w)}function R(){const v=s.newAttributes,w=s.enabledAttributes;for(let U=0,O=w.length;U<O;U++)w[U]!==v[U]&&(t.disableVertexAttribArray(U),w[U]=0)}function E(v,w,U,O,W,Z,X){X===!0?t.vertexAttribIPointer(v,w,U,W,Z):t.vertexAttribPointer(v,w,U,O,W,Z)}function S(v,w,U,O){_();const W=O.attributes,Z=U.getAttributes(),X=w.defaultAttributeValues;for(const Q in Z){const V=Z[Q];if(V.location>=0){let ue=W[Q];if(ue===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){const fe=ue.normalized,me=ue.itemSize,xe=e.get(ue);if(xe===void 0)continue;const ke=xe.buffer,oe=xe.type,pe=xe.bytesPerElement,be=oe===t.INT||oe===t.UNSIGNED_INT||ue.gpuType===Bu;if(ue.isInterleavedBufferAttribute){const de=ue.data,Ce=de.stride,Le=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)p(V.location+Ie,de.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)m(V.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Ie=0;Ie<V.locationSize;Ie++)E(V.location+Ie,me/V.locationSize,oe,fe,Ce*pe,(Le+me/V.locationSize*Ie)*pe,be)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)p(V.location+de,ue.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let de=0;de<V.locationSize;de++)E(V.location+de,me/V.locationSize,oe,fe,me*pe,me/V.locationSize*de*pe,be)}}else if(X!==void 0){const fe=X[Q];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(V.location,fe);break;case 3:t.vertexAttrib3fv(V.location,fe);break;case 4:t.vertexAttrib4fv(V.location,fe);break;default:t.vertexAttrib1fv(V.location,fe)}}}}R()}function N(){L();for(const v in i){const w=i[v];for(const U in w){const O=w[U];for(const W in O)u(O[W].object),delete O[W];delete w[U]}delete i[v]}}function P(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const U in w){const O=w[U];for(const W in O)u(O[W].object),delete O[W];delete w[U]}delete i[v.id]}function D(v){for(const w in i){const U=i[w];if(U[v.id]===void 0)continue;const O=U[v.id];for(const W in O)u(O[W].object),delete O[W];delete U[v.id]}}function L(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:R}}function KA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Rn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const L=D===ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==di&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==oi&&!L)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),R=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:N,maxSamples:P}}function JA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,E=R*4;let S=p.clippingState||null;l.value=S,S=u(g,d,E,h);for(let N=0;N!==E;++N)S[N]=n[N];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=h;E!==_;++E,S+=4)o.copy(f[E]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function QA(t){let e=new WeakMap;function n(o,a){return a===Sc?o.mapping=us:a===Mc&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sc||a===Mc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sb(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Kr=4,sh=[.125,.215,.35,.446,.526,.582],ir=20,Bl=new Vg,oh=new tt;let kl=null,zl=0,Vl=0,Hl=!1;const er=(1+Math.sqrt(5))/2,Vr=1/er,ah=[new z(-er,Vr,0),new z(er,Vr,0),new z(-Vr,0,er),new z(Vr,0,er),new z(0,er,-Vr),new z(0,er,Vr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,zl,Vl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ao,format:Rn,colorSpace:ps,depthBuffer:!1},r=ch(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(s)),this._blurMaterial=tw(s,e,n)}return r}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,Bl)}_sceneToCubeUV(e,n,i,r){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(oh),u.toneMapping=Di,u.autoClear=!1;const h=new Tg({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new Vn(new uo,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(oh),_=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;$o(r,R*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ah[(r-s-1)%ah.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ir-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const p=[];let R=0;for(let D=0;D<ir;++D){const L=D/_,b=Math.exp(-L*L/2);p.push(b),D===0?R+=b:D<m&&(R+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const S=this._sizeLods[r],N=3*S*(r>E-Kr?r-E+Kr:0),P=4*(this._cubeSize-S);$o(n,N,P,3*S,2*S),l.setRenderTarget(n),l.render(f,Bl)}}function ew(t){const e=[],n=[],i=[];let r=t;const s=t-Kr+1+sh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Kr?l=sh[o-t+Kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,R=new Float32Array(_*g*h),E=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let P=0;P<h;P++){const D=P%3*2/3-1,L=P>2?0:-1,b=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];R.set(b,_*g*P),E.set(d,m*g*P);const v=[P,P,P,P,P,P];S.set(v,p*g*P)}const N=new zi;N.setAttribute("position",new Wn(R,_)),N.setAttribute("uv",new Wn(E,m)),N.setAttribute("faceIndex",new Wn(S,p)),e.push(N),r>Kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ch(t,e,n){const i=new pr(t,e,n);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tw(t,e,n){const i=new Float32Array(ir),r=new z(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function uh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function fh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sc||l===Mc,u=l===us||l===fs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new lh(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new lh(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rw(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const R=h.array;_=h.version;for(let E=0,S=R.length;E<S;E+=3){const N=R[E+0],P=R[E+1],D=R[E+2];d.push(N,P,P,D,D,N)}}else if(g!==void 0){const R=g.array;_=g.version;for(let E=0,S=R.length/3-1;E<S;E+=3){const N=E+0,P=E+1,D=E+2;d.push(N,P,P,D,D,N)}}else return;const m=new(xg(d)?wg:Ag)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let R=0;R<g;R++)p+=h[R]*_[R];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ow(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aw(t,e,n){const i=new WeakMap,r=new Mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let v=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var h=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let N=a.attributes.position.count*S,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*P*4*f),L=new Sg(D,N,P,f);L.type=oi,L.needsUpdate=!0;const b=S*4;for(let w=0;w<f;w++){const U=p[w],O=R[w],W=E[w],Z=N*P*4*w;for(let X=0;X<U.count;X++){const Q=X*b;g===!0&&(r.fromBufferAttribute(U,X),D[Z+Q+0]=r.x,D[Z+Q+1]=r.y,D[Z+Q+2]=r.z,D[Z+Q+3]=0),_===!0&&(r.fromBufferAttribute(O,X),D[Z+Q+4]=r.x,D[Z+Q+5]=r.y,D[Z+Q+6]=r.z,D[Z+Q+7]=0),m===!0&&(r.fromBufferAttribute(W,X),D[Z+Q+8]=r.x,D[Z+Q+9]=r.y,D[Z+Q+10]=r.z,D[Z+Q+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new _e(N,P)},i.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function lw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Gg=new Qt,dh=new Dg(1,1),Wg=new Sg,Xg=new sb,$g=new Pg,hh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hh[r];if(s===void 0&&(s=new Float32Array(r),hh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $a(t,e){let n=ph[e];n===void 0&&(n=new Int32Array(e),ph[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;_h.set(i),t.uniformMatrix2fv(this.addr,!1,_h),Pt(n,i)}}function pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;gh.set(i),t.uniformMatrix3fv(this.addr,!1,gh),Pt(n,i)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;mh.set(i),t.uniformMatrix4fv(this.addr,!1,mh),Pt(n,i)}}function gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(dh.compareFunction=vg,s=dh):s=Gg,n.setTexture2D(e||s,r)}function Tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xg,r)}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$g,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wg,r)}function Cw(t){switch(t){case 5126:return cw;case 35664:return uw;case 35665:return fw;case 35666:return dw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return _w;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return ww}}function Rw(t,e){t.uniform1fv(this.addr,e)}function Pw(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function Dw(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function Lw(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function Iw(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Nw(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Uw(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Fw(t,e){t.uniform1iv(this.addr,e)}function Ow(t,e){t.uniform2iv(this.addr,e)}function Bw(t,e){t.uniform3iv(this.addr,e)}function kw(t,e){t.uniform4iv(this.addr,e)}function zw(t,e){t.uniform1uiv(this.addr,e)}function Vw(t,e){t.uniform2uiv(this.addr,e)}function Hw(t,e){t.uniform3uiv(this.addr,e)}function Gw(t,e){t.uniform4uiv(this.addr,e)}function Ww(t,e,n){const i=this.cache,r=e.length,s=$a(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Gg,s[o])}function Xw(t,e,n){const i=this.cache,r=e.length,s=$a(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Xg,s[o])}function $w(t,e,n){const i=this.cache,r=e.length,s=$a(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$g,s[o])}function Yw(t,e,n){const i=this.cache,r=e.length,s=$a(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Wg,s[o])}function qw(t){switch(t){case 5126:return Rw;case 35664:return Pw;case 35665:return Dw;case 35666:return Lw;case 35674:return Iw;case 35675:return Nw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return Bw;case 35669:case 35673:return kw;case 5125:return zw;case 36294:return Vw;case 36295:return Hw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return Yw}}class jw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Cw(n.type)}}class Kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qw(n.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function vh(t,e){t.seq.push(e),t.map[e.id]=e}function Jw(t,e,n){const i=t.name,r=i.length;for(Gl.lastIndex=0;;){const s=Gl.exec(i),o=Gl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vh(n,c===void 0?new jw(a,t,e):new Kw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Zw(a),vh(n,f)),n=f}}}class oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Jw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Qw=37297;let eC=0;function tC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const yh=new Ye;function nC(t){et._getMatrix(yh,et.workingColorSpace,t);const e=`mat3( ${yh.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Ma:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tC(t.getShaderSource(e),o)}else return r}function iC(t,e){const n=nC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rC(t,e){let n;switch(e){case mM:n="Linear";break;case gM:n="Reinhard";break;case _M:n="Cineon";break;case vM:n="ACESFilmic";break;case yM:n="AgX";break;case SM:n="Neutral";break;case xM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yo=new z;function sC(){et.getLuminanceCoefficients(Yo);const t=Yo.x.toFixed(4),e=Yo.y.toFixed(4),n=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function aC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ws(t){return t!==""}function Mh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cC=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(t){return t.replace(cC,fC)}const uC=new Map;function fC(t,e){let n=qe[e];if(n===void 0){const i=uC.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(n)}const dC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(t){return t.replace(dC,hC)}function hC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Th(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function mC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case us:case fs:e="ENVMAP_TYPE_CUBE";break;case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function _C(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sg:e="ENVMAP_BLENDING_MULTIPLY";break;case hM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function vC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pC(n),c=mC(n),u=gC(n),f=_C(n),d=vC(n),h=oC(n),g=aC(s),_=r.createProgram();let m,p,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[Th(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?qe.tonemapping_pars_fragment:"",n.toneMapping!==Di?rC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,iC("linearToOutputTexel",n.outputColorSpace),sC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ws).join(`
`)),o=tu(o),o=Mh(o,n),o=bh(o,n),a=tu(a),a=Mh(a,n),a=bh(a,n),o=Eh(o),a=Eh(a),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=R+m+o,S=R+p+a,N=xh(r,r.VERTEX_SHADER,E),P=xh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,N),r.attachShader(_,P),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(w){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(N).trim(),W=r.getShaderInfoLog(P).trim();let Z=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,N,P);else{const Q=Sh(r,N,"vertex"),V=Sh(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+Q+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(X=!1);X&&(w.diagnostics={runnable:Z,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(N),r.deleteShader(P),L=new oa(r,_),b=lC(r,_)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Qw)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=P,this}let yC=0;class SC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MC(e),n.set(e,i)),i}}class MC{constructor(e){this.id=yC++,this.code=e,this.usedTimes=0}}function bC(t,e,n,i,r,s,o){const a=new bg,l=new SC,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,w,U,O){const W=U.fog,Z=O.geometry,X=b.isMeshStandardMaterial?U.environment:null,Q=(b.isMeshStandardMaterial?n:e).get(b.envMap||X),V=Q&&Q.mapping===Ga?Q.image.height:null,ue=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,me=fe!==void 0?fe.length:0;let xe=0;Z.morphAttributes.position!==void 0&&(xe=1),Z.morphAttributes.normal!==void 0&&(xe=2),Z.morphAttributes.color!==void 0&&(xe=3);let ke,oe,pe,be;if(ue){const st=On[ue];ke=st.vertexShader,oe=st.fragmentShader}else ke=b.vertexShader,oe=b.fragmentShader,l.update(b),pe=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const de=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,Ke=!!b.map,A=!!b.matcap,C=!!Q,y=!!b.aoMap,j=!!b.lightMap,F=!!b.bumpMap,$=!!b.normalMap,Y=!!b.displacementMap,ie=!!b.emissiveMap,q=!!b.metalnessMap,M=!!b.roughnessMap,x=b.anisotropy>0,I=b.clearcoat>0,G=b.dispersion>0,J=b.iridescence>0,K=b.sheen>0,ge=b.transmission>0,le=x&&!!b.anisotropyMap,ve=I&&!!b.clearcoatMap,Ue=I&&!!b.clearcoatNormalMap,ce=I&&!!b.clearcoatRoughnessMap,Me=J&&!!b.iridescenceMap,De=J&&!!b.iridescenceThicknessMap,Oe=K&&!!b.sheenColorMap,ye=K&&!!b.sheenRoughnessMap,ze=!!b.specularMap,We=!!b.specularColorMap,ut=!!b.specularIntensityMap,B=ge&&!!b.transmissionMap,Ee=ge&&!!b.thicknessMap,re=!!b.gradientMap,ae=!!b.alphaMap,we=b.alphaTest>0,Ae=!!b.alphaHash,$e=!!b.extensions;let yt=Di;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Ut={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:oe,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ps,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:A,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:V,aoMap:y,lightMap:j,bumpMap:F,normalMap:$,displacementMap:d&&Y,emissiveMap:ie,normalMapObjectSpace:$&&b.normalMapType===TM,normalMapTangentSpace:$&&b.normalMapType===_g,metalnessMap:q,roughnessMap:M,anisotropy:x,anisotropyMap:le,clearcoat:I,clearcoatMap:ve,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ce,dispersion:G,iridescence:J,iridescenceMap:Me,iridescenceThicknessMap:De,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:ze,specularColorMap:We,specularIntensityMap:ut,transmission:ge,transmissionMap:B,thicknessMap:Ee,gradientMap:re,opaque:b.transparent===!1&&b.blending===rs&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:we,alphaHash:Ae,combine:b.combine,mapUv:Ke&&_(b.map.channel),aoMapUv:y&&_(b.aoMap.channel),lightMapUv:j&&_(b.lightMap.channel),bumpMapUv:F&&_(b.bumpMap.channel),normalMapUv:$&&_(b.normalMap.channel),displacementMapUv:Y&&_(b.displacementMap.channel),emissiveMapUv:ie&&_(b.emissiveMap.channel),metalnessMapUv:q&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:le&&_(b.anisotropyMap.channel),clearcoatMapUv:ve&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(b.sheenRoughnessMap.channel),specularMapUv:ze&&_(b.specularMap.channel),specularColorMapUv:We&&_(b.specularColorMap.channel),specularIntensityMapUv:ut&&_(b.specularIntensityMap.channel),transmissionMapUv:B&&_(b.transmissionMap.channel),thicknessMapUv:Ee&&_(b.thicknessMap.channel),alphaMapUv:ae&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&($||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Ke||ae),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:ie&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===si,flipSided:b.side===Jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const w in b.defines)v.push(w),v.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(R(v,b),E(v,b),v.push(t.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function R(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const v=g[b.type];let w;if(v){const U=On[v];w=_b.clone(U.uniforms)}else w=b.uniforms;return w}function N(b,v){let w;for(let U=0,O=u.length;U<O;U++){const W=u[U];if(W.cacheKey===v){w=W,++w.usedTimes;break}}return w===void 0&&(w=new xC(t,v,b,s),u.push(w)),w}function P(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:N,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:L}}function EC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ah(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||TC),i.length>1&&i.sort(d||Ah),r.length>1&&r.sort(d||Ah)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function AC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wh,t.set(i,[o])):r>=s.length?(o=new wh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new tt};break;case"SpotLight":n={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function CC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RC=0;function PC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DC(t){const e=new wC,n=CC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new vt,o=new vt;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,R=0,E=0,S=0,N=0,P=0,D=0;c.sort(PC);for(let b=0,v=c.length;b<v;b++){const w=c[b],U=w.color,O=w.intensity,W=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=U.r*O,f+=U.g*O,d+=U.b*O;else if(w.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(w.sh.coefficients[X],O);D++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,V=n.get(w);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=w.shadow.matrix,R++}i.directional[h]=X,h++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(U).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,i.spot[_]=X;const Q=w.shadow;if(w.map&&(i.spotLightMap[N]=w.map,N++,Q.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[_]=Q.matrix,w.castShadow){const V=n.get(w);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Z,S++}_++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(U).multiplyScalar(O),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=X,m++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const Q=w.shadow,V=n.get(w);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=w.shadow.matrix,E++}i.point[g]=X,g++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(O),X.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[p]=X,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==R||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==N||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,L.directionalLength=h,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=R,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=N,L.numLightProbes=D,i.version=RC++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const E=c[p];if(E.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ch(t){const e=new DC(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ch(t),e.set(r,[a])):s>=o.length?(a=new Ch(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const IC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UC(t,e,n){let i=new $u;const r=new _e,s=new _e,o=new Mt,a=new rE({depthPacking:EM}),l=new sE,c={},u=n.maxTextureSize,f={[Li]:Jt,[Jt]:Li,[si]:si},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:IC,fragmentShader:NC}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new zi;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg;let p=this.type;this.render=function(P,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=t.getRenderTarget(),v=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Pi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==ti&&this.type===ti,W=p===ti&&this.type!==ti;for(let Z=0,X=P.length;Z<X;Z++){const Q=P[Z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ue=V.getFrameExtents();if(r.multiply(ue),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||O===!0||W===!0){const me=this.type!==ti?{minFilter:Dn,magFilter:Dn}:{};V.map!==null&&V.map.dispose(),V.map=new pr(r.x,r.y,me),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const fe=V.getViewportCount();for(let me=0;me<fe;me++){const xe=V.getViewport(me);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o),V.updateMatrices(Q,me),i=V.getFrustum(),S(D,L,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&R(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,v,w)};function R(P,D){const L=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(D,null,L,d,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(D,null,L,h,_,null)}function E(P,D,L,b){let v=null;const w=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)v=w;else if(v=L.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const U=v.uuid,O=D.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let Z=W[O];Z===void 0&&(Z=v.clone(),W[O]=Z,D.addEventListener("dispose",N)),v=Z}if(v.visible=D.visible,v.wireframe=D.wireframe,b===ti?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:f[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=t.properties.get(v);U.light=L}return v}function S(P,D,L,b,v){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===ti)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const O=e.update(P),W=P.material;if(Array.isArray(W)){const Z=O.groups;for(let X=0,Q=Z.length;X<Q;X++){const V=Z[X],ue=W[V.materialIndex];if(ue&&ue.visible){const fe=E(P,ue,b,v);P.onBeforeShadow(t,P,D,L,O,fe,V),t.renderBufferDirect(L,null,O,fe,P,V),P.onAfterShadow(t,P,D,L,O,fe,V)}}}else if(W.visible){const Z=E(P,W,b,v);P.onBeforeShadow(t,P,D,L,O,Z,null),t.renderBufferDirect(L,null,O,Z,P,null),P.onAfterShadow(t,P,D,L,O,Z,null)}}const U=P.children;for(let O=0,W=U.length;O<W;O++)S(U[O],D,L,b,v)}function N(P){P.target.removeEventListener("dispose",N);for(const L in c){const b=c[L],v=P.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const FC={[pc]:mc,[gc]:xc,[_c]:yc,[cs]:vc,[mc]:pc,[xc]:gc,[yc]:_c,[vc]:cs};function OC(t,e){function n(){let B=!1;const Ee=new Mt;let re=null;const ae=new Mt(0,0,0,0);return{setMask:function(we){re!==we&&!B&&(t.colorMask(we,we,we,we),re=we)},setLocked:function(we){B=we},setClear:function(we,Ae,$e,yt,Ut){Ut===!0&&(we*=yt,Ae*=yt,$e*=yt),Ee.set(we,Ae,$e,yt),ae.equals(Ee)===!1&&(t.clearColor(we,Ae,$e,yt),ae.copy(Ee))},reset:function(){B=!1,re=null,ae.set(-1,0,0,0)}}}function i(){let B=!1,Ee=!1,re=null,ae=null,we=null;return{setReversed:function(Ae){if(Ee!==Ae){const $e=e.get("EXT_clip_control");Ee?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const yt=we;we=null,this.setClear(yt)}Ee=Ae},getReversed:function(){return Ee},setTest:function(Ae){Ae?de(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Ae){re!==Ae&&!B&&(t.depthMask(Ae),re=Ae)},setFunc:function(Ae){if(Ee&&(Ae=FC[Ae]),ae!==Ae){switch(Ae){case pc:t.depthFunc(t.NEVER);break;case mc:t.depthFunc(t.ALWAYS);break;case gc:t.depthFunc(t.LESS);break;case cs:t.depthFunc(t.LEQUAL);break;case _c:t.depthFunc(t.EQUAL);break;case vc:t.depthFunc(t.GEQUAL);break;case xc:t.depthFunc(t.GREATER);break;case yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){we!==Ae&&(Ee&&(Ae=1-Ae),t.clearDepth(Ae),we=Ae)},reset:function(){B=!1,re=null,ae=null,we=null,Ee=!1}}}function r(){let B=!1,Ee=null,re=null,ae=null,we=null,Ae=null,$e=null,yt=null,Ut=null;return{setTest:function(st){B||(st?de(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(st){Ee!==st&&!B&&(t.stencilMask(st),Ee=st)},setFunc:function(st,bn,qn){(re!==st||ae!==bn||we!==qn)&&(t.stencilFunc(st,bn,qn),re=st,ae=bn,we=qn)},setOp:function(st,bn,qn){(Ae!==st||$e!==bn||yt!==qn)&&(t.stencilOp(st,bn,qn),Ae=st,$e=bn,yt=qn)},setLocked:function(st){B=st},setClear:function(st){Ut!==st&&(t.clearStencil(st),Ut=st)},reset:function(){B=!1,Ee=null,re=null,ae=null,we=null,Ae=null,$e=null,yt=null,Ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,R=null,E=null,S=null,N=null,P=null,D=new tt(0,0,0),L=0,b=!1,v=null,w=null,U=null,O=null,W=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Q>=2);let ue=null,fe={};const me=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),ke=new Mt().fromArray(me),oe=new Mt().fromArray(xe);function pe(B,Ee,re,ae){const we=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(B,Ae),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<re;$e++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(Ee+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Ae}const be={};be[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(t.DEPTH_TEST),o.setFunc(cs),F(!1),$(Ad),de(t.CULL_FACE),y(Pi);function de(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function Le(B,Ee){return f[B]!==Ee?(t.bindFramebuffer(B,Ee),f[B]=Ee,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ee),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ie(B,Ee){let re=h,ae=!1;if(B){re=d.get(Ee),re===void 0&&(re=[],d.set(Ee,re));const we=B.textures;if(re.length!==we.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,$e=we.length;Ae<$e;Ae++)re[Ae]=t.COLOR_ATTACHMENT0+Ae;re.length=we.length,ae=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,ae=!0);ae&&t.drawBuffers(re)}function Ke(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const A={[nr]:t.FUNC_ADD,[KS]:t.FUNC_SUBTRACT,[ZS]:t.FUNC_REVERSE_SUBTRACT};A[JS]=t.MIN,A[QS]=t.MAX;const C={[eM]:t.ZERO,[tM]:t.ONE,[nM]:t.SRC_COLOR,[dc]:t.SRC_ALPHA,[lM]:t.SRC_ALPHA_SATURATE,[oM]:t.DST_COLOR,[rM]:t.DST_ALPHA,[iM]:t.ONE_MINUS_SRC_COLOR,[hc]:t.ONE_MINUS_SRC_ALPHA,[aM]:t.ONE_MINUS_DST_COLOR,[sM]:t.ONE_MINUS_DST_ALPHA,[cM]:t.CONSTANT_COLOR,[uM]:t.ONE_MINUS_CONSTANT_COLOR,[fM]:t.CONSTANT_ALPHA,[dM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(B,Ee,re,ae,we,Ae,$e,yt,Ut,st){if(B===Pi){_===!0&&(Ce(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),B!==jS){if(B!==m||st!==b){if((p!==nr||S!==nr)&&(t.blendEquation(t.FUNC_ADD),p=nr,S=nr),st)switch(B){case rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wd:t.blendFunc(t.ONE,t.ONE);break;case Cd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,E=null,N=null,P=null,D.set(0,0,0),L=0,m=B,b=st}return}we=we||Ee,Ae=Ae||re,$e=$e||ae,(Ee!==p||we!==S)&&(t.blendEquationSeparate(A[Ee],A[we]),p=Ee,S=we),(re!==R||ae!==E||Ae!==N||$e!==P)&&(t.blendFuncSeparate(C[re],C[ae],C[Ae],C[$e]),R=re,E=ae,N=Ae,P=$e),(yt.equals(D)===!1||Ut!==L)&&(t.blendColor(yt.r,yt.g,yt.b,Ut),D.copy(yt),L=Ut),m=B,b=!1}function j(B,Ee){B.side===si?Ce(t.CULL_FACE):de(t.CULL_FACE);let re=B.side===Jt;Ee&&(re=!re),F(re),B.blending===rs&&B.transparent===!1?y(Pi):y(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ae=B.stencilWrite;a.setTest(ae),ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){v!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),v=B)}function $(B){B!==$S?(de(t.CULL_FACE),B!==w&&(B===Ad?t.cullFace(t.BACK):B===YS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),w=B}function Y(B){B!==U&&(X&&t.lineWidth(B),U=B)}function ie(B,Ee,re){B?(de(t.POLYGON_OFFSET_FILL),(O!==Ee||W!==re)&&(t.polygonOffset(Ee,re),O=Ee,W=re)):Ce(t.POLYGON_OFFSET_FILL)}function q(B){B?de(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function M(B){B===void 0&&(B=t.TEXTURE0+Z-1),ue!==B&&(t.activeTexture(B),ue=B)}function x(B,Ee,re){re===void 0&&(ue===null?re=t.TEXTURE0+Z-1:re=ue);let ae=fe[re];ae===void 0&&(ae={type:void 0,texture:void 0},fe[re]=ae),(ae.type!==B||ae.texture!==Ee)&&(ue!==re&&(t.activeTexture(re),ue=re),t.bindTexture(B,Ee||be[B]),ae.type=B,ae.texture=Ee)}function I(){const B=fe[ue];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function G(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){ke.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),ke.copy(B))}function ye(B){oe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),oe.copy(B))}function ze(B,Ee){let re=c.get(Ee);re===void 0&&(re=new WeakMap,c.set(Ee,re));let ae=re.get(B);ae===void 0&&(ae=t.getUniformBlockIndex(Ee,B.name),re.set(B,ae))}function We(B,Ee){const ae=c.get(Ee).get(B);l.get(Ee)!==ae&&(t.uniformBlockBinding(Ee,ae,B.__bindingPointIndex),l.set(Ee,ae))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ue=null,fe={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,R=null,E=null,S=null,N=null,P=null,D=new tt(0,0,0),L=0,b=!1,v=null,w=null,U=null,O=null,W=null,ke.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Ce,bindFramebuffer:Le,drawBuffers:Ie,useProgram:Ke,setBlending:y,setMaterial:j,setFlipSided:F,setCullFace:$,setLineWidth:Y,setPolygonOffset:ie,setScissorTest:q,activeTexture:M,bindTexture:x,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:J,texImage2D:Me,texImage3D:De,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:Ue,texStorage3D:ce,texSubImage2D:K,texSubImage3D:ge,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:Oe,viewport:ye,reset:ut}}function BC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return h?new OffscreenCanvas(M,x):Ea("canvas")}function _(M,x,I){let G=1;const J=q(M);if((J.width>I||J.height>I)&&(G=I/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const K=Math.floor(G*J.width),ge=Math.floor(G*J.height);f===void 0&&(f=g(K,ge));const le=x?g(K,ge):f;return le.width=K,le.height=ge,le.getContext("2d").drawImage(M,0,0,K,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ge+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){t.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,x,I,G,J=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=x;if(x===t.RED&&(I===t.FLOAT&&(K=t.R32F),I===t.HALF_FLOAT&&(K=t.R16F),I===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(K=t.R8UI),I===t.UNSIGNED_SHORT&&(K=t.R16UI),I===t.UNSIGNED_INT&&(K=t.R32UI),I===t.BYTE&&(K=t.R8I),I===t.SHORT&&(K=t.R16I),I===t.INT&&(K=t.R32I)),x===t.RG&&(I===t.FLOAT&&(K=t.RG32F),I===t.HALF_FLOAT&&(K=t.RG16F),I===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(K=t.RG8UI),I===t.UNSIGNED_SHORT&&(K=t.RG16UI),I===t.UNSIGNED_INT&&(K=t.RG32UI),I===t.BYTE&&(K=t.RG8I),I===t.SHORT&&(K=t.RG16I),I===t.INT&&(K=t.RG32I)),x===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(K=t.RGB8UI),I===t.UNSIGNED_SHORT&&(K=t.RGB16UI),I===t.UNSIGNED_INT&&(K=t.RGB32UI),I===t.BYTE&&(K=t.RGB8I),I===t.SHORT&&(K=t.RGB16I),I===t.INT&&(K=t.RGB32I)),x===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),I===t.UNSIGNED_INT&&(K=t.RGBA32UI),I===t.BYTE&&(K=t.RGBA8I),I===t.SHORT&&(K=t.RGBA16I),I===t.INT&&(K=t.RGBA32I)),x===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const ge=J?Ma:et.getTransfer(G);I===t.FLOAT&&(K=t.RGBA32F),I===t.HALF_FLOAT&&(K=t.RGBA16F),I===t.UNSIGNED_BYTE&&(K=ge===ot?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(M,x){let I;return M?x===null||x===hr||x===ds?I=t.DEPTH24_STENCIL8:x===oi?I=t.DEPTH32F_STENCIL8:x===Ks&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hr||x===ds?I=t.DEPTH_COMPONENT24:x===oi?I=t.DEPTH_COMPONENT32F:x===Ks&&(I=t.DEPTH_COMPONENT16),I}function N(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Dn&&M.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function P(M){const x=M.target;x.removeEventListener("dispose",P),L(x),x.isVideoTexture&&u.delete(x)}function D(M){const x=M.target;x.removeEventListener("dispose",D),v(x)}function L(M){const x=i.get(M);if(x.__webglInit===void 0)return;const I=M.source,G=d.get(I);if(G){const J=G[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(M),Object.keys(G).length===0&&d.delete(I)}i.remove(M)}function b(M){const x=i.get(M);t.deleteTexture(x.__webglTexture);const I=M.source,G=d.get(I);delete G[x.__cacheKey],o.memory.textures--}function v(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let J=0;J<x.__webglFramebuffer[G].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[G][J]);else t.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)t.deleteFramebuffer(x.__webglFramebuffer[G]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=M.textures;for(let G=0,J=I.length;G<J;G++){const K=i.get(I[G]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(M)}let w=0;function U(){w=0}function O(){const M=w;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),w+=1,M}function W(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Z(M,x){const I=i.get(M);if(M.isVideoTexture&&Y(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(I,M,x);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+x)}function X(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){oe(I,M,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+x)}function Q(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){oe(I,M,x);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+x)}function V(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){pe(I,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+x)}const ue={[bc]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[Ec]:t.MIRRORED_REPEAT},fe={[Dn]:t.NEAREST,[MM]:t.NEAREST_MIPMAP_NEAREST,[bo]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[hl]:t.LINEAR_MIPMAP_NEAREST,[sr]:t.LINEAR_MIPMAP_LINEAR},me={[AM]:t.NEVER,[LM]:t.ALWAYS,[wM]:t.LESS,[vg]:t.LEQUAL,[CM]:t.EQUAL,[DM]:t.GEQUAL,[RM]:t.GREATER,[PM]:t.NOTEQUAL};function xe(M,x){if(x.type===oi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===hl||x.magFilter===bo||x.magFilter===sr||x.minFilter===zn||x.minFilter===hl||x.minFilter===bo||x.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ue[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ue[x.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ue[x.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,fe[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dn||x.minFilter!==bo&&x.minFilter!==sr||x.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ke(M,x){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",P));const G=x.source;let J=d.get(G);J===void 0&&(J={},d.set(G,J));const K=W(x);if(K!==M.__cacheKey){J[K]===void 0&&(J[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[K].usedTimes++;const ge=J[M.__cacheKey];ge!==void 0&&(J[M.__cacheKey].usedTimes--,ge.usedTimes===0&&b(x)),M.__cacheKey=K,M.__webglTexture=J[K].texture}return I}function oe(M,x,I){let G=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=t.TEXTURE_3D);const J=ke(M,x),K=x.source;n.bindTexture(G,M.__webglTexture,t.TEXTURE0+I);const ge=i.get(K);if(K.version!==ge.__version||J===!0){n.activeTexture(t.TEXTURE0+I);const le=et.getPrimaries(et.workingColorSpace),ve=x.colorSpace===Ci?null:et.getPrimaries(x.colorSpace),Ue=x.colorSpace===Ci||le===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ce=_(x.image,!1,r.maxTextureSize);ce=ie(x,ce);const Me=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let Oe=E(x.internalFormat,Me,De,x.colorSpace,x.isVideoTexture);xe(G,x);let ye;const ze=x.mipmaps,We=x.isVideoTexture!==!0,ut=ge.__version===void 0||J===!0,B=K.dataReady,Ee=N(x,ce);if(x.isDepthTexture)Oe=S(x.format===hs,x.type),ut&&(We?n.texStorage2D(t.TEXTURE_2D,1,Oe,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Oe,ce.width,ce.height,0,Me,De,null));else if(x.isDataTexture)if(ze.length>0){We&&ut&&n.texStorage2D(t.TEXTURE_2D,Ee,Oe,ze[0].width,ze[0].height);for(let re=0,ae=ze.length;re<ae;re++)ye=ze[re],We?B&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ye.width,ye.height,Me,De,ye.data):n.texImage2D(t.TEXTURE_2D,re,Oe,ye.width,ye.height,0,Me,De,ye.data);x.generateMipmaps=!1}else We?(ut&&n.texStorage2D(t.TEXTURE_2D,Ee,Oe,ce.width,ce.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Me,De,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,ce.width,ce.height,0,Me,De,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Oe,ze[0].width,ze[0].height,ce.depth);for(let re=0,ae=ze.length;re<ae;re++)if(ye=ze[re],x.format!==Rn)if(Me!==null)if(We){if(B)if(x.layerUpdates.size>0){const we=rh(ye.width,ye.height,x.format,x.type);for(const Ae of x.layerUpdates){const $e=ye.data.subarray(Ae*we/ye.data.BYTES_PER_ELEMENT,(Ae+1)*we/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Ae,ye.width,ye.height,1,Me,$e)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,ce.depth,Me,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Oe,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,ce.depth,Me,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Oe,ye.width,ye.height,ce.depth,0,Me,De,ye.data)}else{We&&ut&&n.texStorage2D(t.TEXTURE_2D,Ee,Oe,ze[0].width,ze[0].height);for(let re=0,ae=ze.length;re<ae;re++)ye=ze[re],x.format!==Rn?Me!==null?We?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ye.width,ye.height,Me,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ye.width,ye.height,Me,De,ye.data):n.texImage2D(t.TEXTURE_2D,re,Oe,ye.width,ye.height,0,Me,De,ye.data)}else if(x.isDataArrayTexture)if(We){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Oe,ce.width,ce.height,ce.depth),B)if(x.layerUpdates.size>0){const re=rh(ce.width,ce.height,x.format,x.type);for(const ae of x.layerUpdates){const we=ce.data.subarray(ae*re/ce.data.BYTES_PER_ELEMENT,(ae+1)*re/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,ce.width,ce.height,1,Me,De,we)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,De,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,ce.width,ce.height,ce.depth,0,Me,De,ce.data);else if(x.isData3DTexture)We?(ut&&n.texStorage3D(t.TEXTURE_3D,Ee,Oe,ce.width,ce.height,ce.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,De,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,ce.width,ce.height,ce.depth,0,Me,De,ce.data);else if(x.isFramebufferTexture){if(ut)if(We)n.texStorage2D(t.TEXTURE_2D,Ee,Oe,ce.width,ce.height);else{let re=ce.width,ae=ce.height;for(let we=0;we<Ee;we++)n.texImage2D(t.TEXTURE_2D,we,Oe,re,ae,0,Me,De,null),re>>=1,ae>>=1}}else if(ze.length>0){if(We&&ut){const re=q(ze[0]);n.texStorage2D(t.TEXTURE_2D,Ee,Oe,re.width,re.height)}for(let re=0,ae=ze.length;re<ae;re++)ye=ze[re],We?B&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Me,De,ye):n.texImage2D(t.TEXTURE_2D,re,Oe,Me,De,ye);x.generateMipmaps=!1}else if(We){if(ut){const re=q(ce);n.texStorage2D(t.TEXTURE_2D,Ee,Oe,re.width,re.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,De,ce)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Me,De,ce);m(x)&&p(G),ge.__version=K.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function pe(M,x,I){if(x.image.length!==6)return;const G=ke(M,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);const K=i.get(J);if(J.version!==K.__version||G===!0){n.activeTexture(t.TEXTURE0+I);const ge=et.getPrimaries(et.workingColorSpace),le=x.colorSpace===Ci?null:et.getPrimaries(x.colorSpace),ve=x.colorSpace===Ci||ge===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!Ue&&!ce?Me[ae]=_(x.image[ae],!0,r.maxCubemapSize):Me[ae]=ce?x.image[ae].image:x.image[ae],Me[ae]=ie(x,Me[ae]);const De=Me[0],Oe=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),ze=E(x.internalFormat,Oe,ye,x.colorSpace),We=x.isVideoTexture!==!0,ut=K.__version===void 0||G===!0,B=J.dataReady;let Ee=N(x,De);xe(t.TEXTURE_CUBE_MAP,x);let re;if(Ue){We&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ze,De.width,De.height);for(let ae=0;ae<6;ae++){re=Me[ae].mipmaps;for(let we=0;we<re.length;we++){const Ae=re[we];x.format!==Rn?Oe!==null?We?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Ae.width,Ae.height,Oe,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Ae.width,Ae.height,Oe,ye,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,ze,Ae.width,Ae.height,0,Oe,ye,Ae.data)}}}else{if(re=x.mipmaps,We&&ut){re.length>0&&Ee++;const ae=q(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ce){We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,Oe,ye,Me[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Me[ae].width,Me[ae].height,0,Oe,ye,Me[ae].data);for(let we=0;we<re.length;we++){const $e=re[we].image[ae].image;We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,$e.width,$e.height,Oe,ye,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,ze,$e.width,$e.height,0,Oe,ye,$e.data)}}else{We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,ye,Me[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Oe,ye,Me[ae]);for(let we=0;we<re.length;we++){const Ae=re[we];We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,Oe,ye,Ae.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,ze,Oe,ye,Ae.image[ae])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function be(M,x,I,G,J,K){const ge=s.convert(I.format,I.colorSpace),le=s.convert(I.type),ve=E(I.internalFormat,ge,le,I.colorSpace),Ue=i.get(x),ce=i.get(I);if(ce.__renderTarget=x,!Ue.__hasExternalTextures){const Me=Math.max(1,x.width>>K),De=Math.max(1,x.height>>K);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,K,ve,Me,De,x.depth,0,ge,le,null):n.texImage2D(J,K,ve,Me,De,0,ge,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),$(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,J,ce.__webglTexture,0,F(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,J,ce.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(M,x,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer){const G=x.depthTexture,J=G&&G.isDepthTexture?G.type:null,K=S(x.stencilBuffer,J),ge=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=F(x);$(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,K,x.width,x.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,M)}else{const G=x.textures;for(let J=0;J<G.length;J++){const K=G[J],ge=s.convert(K.format,K.colorSpace),le=s.convert(K.type),ve=E(K.internalFormat,ge,le,K.colorSpace),Ue=F(x);I&&$(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ve,x.width,x.height):$(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ve,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ve,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const J=G.__webglTexture,K=F(x);if(x.depthTexture.format===ss)$(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(x.depthTexture.format===hs)$(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(M){const x=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=G}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ce(x.__webglFramebuffer,M)}else if(I){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=t.createRenderbuffer(),de(x.__webglDepthbuffer[G],M,!1);else{const J=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),de(x.__webglDepthbuffer,M,!1);else{const G=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,G,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(M,x,I){const G=i.get(M);x!==void 0&&be(G.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Le(M)}function Ke(M){const x=M.texture,I=i.get(M),G=i.get(x);M.addEventListener("dispose",D);const J=M.textures,K=M.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=x.version,o.memory.textures++),K){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let ve=0;ve<x.mipmaps.length;ve++)I.__webglFramebuffer[le][ve]=t.createFramebuffer()}else I.__webglFramebuffer[le]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)I.__webglFramebuffer[le]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ge)for(let le=0,ve=J.length;le<ve;le++){const Ue=i.get(J[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&$(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const ve=J[le];I.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Ue=s.convert(ve.format,ve.colorSpace),ce=s.convert(ve.type),Me=E(ve.internalFormat,Ue,ce,ve.colorSpace,M.isXRRenderTarget===!0),De=F(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Me,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,I.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),de(I.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),xe(t.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)be(I.__webglFramebuffer[le][ve],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else be(I.__webglFramebuffer[le],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let le=0,ve=J.length;le<ve;le++){const Ue=J[le],ce=i.get(Ue);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),xe(t.TEXTURE_2D,Ue),be(I.__webglFramebuffer,M,Ue,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Ue)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,G.__webglTexture),xe(le,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)be(I.__webglFramebuffer[ve],M,x,t.COLOR_ATTACHMENT0,le,ve);else be(I.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,le,0);m(x)&&p(le),n.unbindTexture()}M.depthBuffer&&Le(M)}function A(M){const x=M.textures;for(let I=0,G=x.length;I<G;I++){const J=x[I];if(m(J)){const K=R(M),ge=i.get(J).__webglTexture;n.bindTexture(K,ge),p(K),n.unbindTexture()}}}const C=[],y=[];function j(M){if(M.samples>0){if($(M)===!1){const x=M.textures,I=M.width,G=M.height;let J=t.COLOR_BUFFER_BIT;const K=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(M),le=x.length>1;if(le)for(let ve=0;ve<x.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const Ue=i.get(x[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,I,G,0,0,I,G,J,t.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(t.COLOR_ATTACHMENT0+ve),M.depthBuffer&&M.resolveDepthBuffer===!1&&(C.push(K),y.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,C))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<x.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const Ue=i.get(x[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function F(M){return Math.min(r.maxSamples,M.samples)}function $(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Y(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function ie(M,x){const I=M.colorSpace,G=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==ps&&I!==Ci&&(et.getTransfer(I)===ot?(G!==Rn||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function q(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ie,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=be,this.useMultisampledRTT=$}function kC(t,e){function n(i,r=Ci){let s;const o=et.getTransfer(r);if(i===di)return t.UNSIGNED_BYTE;if(i===ku)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ag)return t.BYTE;if(i===lg)return t.SHORT;if(i===Ks)return t.UNSIGNED_SHORT;if(i===Bu)return t.INT;if(i===hr)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===ao)return t.HALF_FLOAT;if(i===ug)return t.ALPHA;if(i===fg)return t.RGB;if(i===Rn)return t.RGBA;if(i===dg)return t.LUMINANCE;if(i===hg)return t.LUMINANCE_ALPHA;if(i===ss)return t.DEPTH_COMPONENT;if(i===hs)return t.DEPTH_STENCIL;if(i===pg)return t.RED;if(i===Vu)return t.RED_INTEGER;if(i===mg)return t.RG;if(i===Hu)return t.RG_INTEGER;if(i===Gu)return t.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===ra)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===Ac||i===wc||i===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Pc||i===Dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Pc)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Ic||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Vc||i===Hc||i===Gc||i===Wc||i===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===$c||i===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sa)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gg||i===qc||i===jc||i===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const zC={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const VC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ii({vertexShader:VC,fragmentShader:HC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WC extends Mr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new GC,m=n.getContextAttributes();let p=null,R=null;const E=[],S=[],N=new _e;let P=null;const D=new vn;D.viewport=new Mt;const L=new vn;L.viewport=new Mt;const b=[D,L],v=new uE;let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let pe=E[oe];return pe===void 0&&(pe=new Wl,E[oe]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(oe){let pe=E[oe];return pe===void 0&&(pe=new Wl,E[oe]=pe),pe.getGripSpace()},this.getHand=function(oe){let pe=E[oe];return pe===void 0&&(pe=new Wl,E[oe]=pe),pe.getHandSpace()};function O(oe){const pe=S.indexOf(oe.inputSource);if(pe===-1)return;const be=E[pe];be!==void 0&&(be.update(oe.inputSource,oe.frame,c||o),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<E.length;oe++){const pe=S[oe];pe!==null&&(S[oe]=null,E[oe].disconnect(pe))}w=null,U=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,R=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let be=null,de=null,Ce=null;m.depth&&(Ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?hs:ss,de=m.stencil?ds:hr);const Le={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new pr(d.textureWidth,d.textureHeight,{format:Rn,type:di,depthTexture:new Dg(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new pr(h.framebufferWidth,h.framebufferHeight,{format:Rn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(oe){for(let pe=0;pe<oe.removed.length;pe++){const be=oe.removed[pe],de=S.indexOf(be);de>=0&&(S[de]=null,E[de].disconnect(be))}for(let pe=0;pe<oe.added.length;pe++){const be=oe.added[pe];let de=S.indexOf(be);if(de===-1){for(let Le=0;Le<E.length;Le++)if(Le>=S.length){S.push(be),de=Le;break}else if(S[Le]===null){S[Le]=be,de=Le;break}if(de===-1)break}const Ce=E[de];Ce&&Ce.connect(be)}}const X=new z,Q=new z;function V(oe,pe,be){X.setFromMatrixPosition(pe.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const de=X.distanceTo(Q),Ce=pe.projectionMatrix.elements,Le=be.projectionMatrix.elements,Ie=Ce[14]/(Ce[10]-1),Ke=Ce[14]/(Ce[10]+1),A=(Ce[9]+1)/Ce[5],C=(Ce[9]-1)/Ce[5],y=(Ce[8]-1)/Ce[0],j=(Le[8]+1)/Le[0],F=Ie*y,$=Ie*j,Y=de/(-y+j),ie=Y*-y;if(pe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ie),oe.translateZ(Y),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ce[10]===-1)oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const q=Ie+Y,M=Ke+Y,x=F-ie,I=$+(de-ie),G=A*Ke/M*q,J=C*Ke/M*q;oe.projectionMatrix.makePerspective(x,I,G,J,q,M),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ue(oe,pe){pe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(pe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let pe=oe.near,be=oe.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(be=_.depthFar)),v.near=L.near=D.near=pe,v.far=L.far=D.far=be,(w!==v.near||U!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,U=v.far),D.layers.mask=oe.layers.mask|2,L.layers.mask=oe.layers.mask|4,v.layers.mask=D.layers.mask|L.layers.mask;const de=oe.parent,Ce=v.cameras;ue(v,de);for(let Le=0;Le<Ce.length;Le++)ue(Ce[Le],de);Ce.length===2?V(v,D,L):v.projectionMatrix.copy(D.projectionMatrix),fe(oe,v,de)};function fe(oe,pe,be){be===null?oe.matrix.copy(pe.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(pe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Zs*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let me=null;function xe(oe,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const be=u.views;h!==null&&(e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R));let de=!1;be.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let Le=0;Le<be.length;Le++){const Ie=be[Le];let Ke=null;if(h!==null)Ke=h.getViewport(Ie);else{const C=f.getViewSubImage(d,Ie);Ke=C.viewport,Le===0&&(e.setRenderTargetTextures(R,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(R))}let A=b[Le];A===void 0&&(A=new vn,A.layers.enable(Le),A.viewport=new Mt,b[Le]=A),A.matrix.fromArray(Ie.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ie.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Le===0&&(v.matrix.copy(A.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(A)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Le=f.getDepthInformation(be[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let be=0;be<E.length;be++){const de=S[be],Ce=E[be];de!==null&&Ce!==void 0&&Ce.update(de,pe,c||o)}me&&me(oe,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const ke=new Hg;ke.setAnimationLoop(xe),this.setAnimationLoop=function(oe){me=oe},this.dispose=function(){}}}const Ji=new Xn,XC=new vt;function $C(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,R,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),E=R.envMap,S=R.envMapRotation;E&&(m.envMap.value=E,Ji.copy(S),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(XC.makeRotationFromEuler(Ji)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,E){const S=E.program;i.uniformBlockBinding(R,S)}function c(R,E){let S=r[R.id];S===void 0&&(g(R),S=u(R),r[R.id]=S,R.addEventListener("dispose",m));const N=E.program;i.updateUBOMapping(R,N);const P=e.render.frame;s[R.id]!==P&&(d(R),s[R.id]=P)}function u(R){const E=f();R.__bindingPointIndex=E;const S=t.createBuffer(),N=R.__size,P=R.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,S),S}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const E=r[R.id],S=R.uniforms,N=R.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let P=0,D=S.length;P<D;P++){const L=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,v=L.length;b<v;b++){const w=L[b];if(h(w,P,b,N)===!0){const U=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let Z=0;Z<O.length;Z++){const X=O[Z],Q=_(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,U+W,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(R,E,S,N){const P=R.value,D=E+"_"+S;if(N[D]===void 0)return typeof P=="number"||typeof P=="boolean"?N[D]=P:N[D]=P.clone(),!0;{const L=N[D];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return N[D]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(R){const E=R.uniforms;let S=0;const N=16;for(let D=0,L=E.length;D<L;D++){const b=Array.isArray(E[D])?E[D]:[E[D]];for(let v=0,w=b.length;v<w;v++){const U=b[v],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Z=O.length;W<Z;W++){const X=O[W],Q=_(X),V=S%N,ue=V%Q.boundary,fe=V+ue;S+=ue,fe!==0&&N-fe<Q.storage&&(S+=N-fe),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Q.storage}}}const P=S%N;return P>0&&(S+=N-P),R.__size=S,R.__cache={},this}function _(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function m(R){const E=R.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const R in r)t.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class qC{constructor(e={}){const{canvas:n=KM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const R=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Di,this.toneMappingExposure=1;const S=this;let N=!1,P=0,D=0,L=null,b=-1,v=null;const w=new Mt,U=new Mt;let O=null;const W=new tt(0);let Z=0,X=n.width,Q=n.height,V=1,ue=null,fe=null;const me=new Mt(0,0,X,Q),xe=new Mt(0,0,X,Q);let ke=!1;const oe=new $u;let pe=!1,be=!1;this.transmissionResolutionScale=1;const de=new vt,Ce=new vt,Le=new z,Ie=new Mt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return L===null?V:1}let y=i;function j(T,k){return n.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ou}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),y===null){const k="webgl2";if(y=j(k,T),y===null)throw j(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let F,$,Y,ie,q,M,x,I,G,J,K,ge,le,ve,Ue,ce,Me,De,Oe,ye,ze,We,ut,B;function Ee(){F=new iw(y),F.init(),We=new kC(y,F),$=new ZA(y,F,e,We),Y=new OC(y,F),$.reverseDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),ie=new ow(y),q=new EC,M=new BC(y,F,Y,q,$,We,ie),x=new QA(S),I=new nw(S),G=new hE(y),ut=new jA(y,G),J=new rw(y,G,ie,ut),K=new lw(y,J,G,ie),Oe=new aw(y,$,M),ce=new JA(q),ge=new bC(S,x,I,F,$,ut,ce),le=new $C(S,q),ve=new AC,Ue=new LC(F),De=new qA(S,x,I,Y,K,h,l),Me=new UC(S,K,$),B=new YC(y,ie,$,Y),ye=new KA(y,F,ie),ze=new sw(y,F,ie),ie.programs=ge.programs,S.capabilities=$,S.extensions=F,S.properties=q,S.renderLists=ve,S.shadowMap=Me,S.state=Y,S.info=ie}Ee();const re=new WC(S,y);this.xr=re,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=F.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=F.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(X,Q,!1))},this.getSize=function(T){return T.set(X,Q)},this.setSize=function(T,k,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Q=k,n.width=Math.floor(T*V),n.height=Math.floor(k*V),ee===!0&&(n.style.width=T+"px",n.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(X*V,Q*V).floor()},this.setDrawingBufferSize=function(T,k,ee){X=T,Q=k,V=ee,n.width=Math.floor(T*ee),n.height=Math.floor(k*ee),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,k,ee,te){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,k,ee,te),Y.viewport(w.copy(me).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,k,ee,te){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,k,ee,te),Y.scissor(U.copy(xe).multiplyScalar(V).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){Y.setScissorTest(ke=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,k=!0,ee=!0){let te=0;if(T){let H=!1;if(L!==null){const he=L.texture.format;H=he===Gu||he===Hu||he===Vu}if(H){const he=L.texture.type,Te=he===di||he===hr||he===Ks||he===ds||he===ku||he===zu,Re=De.getClearColor(),Pe=De.getClearAlpha(),Ve=Re.r,Ge=Re.g,Ne=Re.b;Te?(g[0]=Ve,g[1]=Ge,g[2]=Ne,g[3]=Pe,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Ve,_[1]=Ge,_[2]=Ne,_[3]=Pe,y.clearBufferiv(y.COLOR,0,_))}else te|=y.COLOR_BUFFER_BIT}k&&(te|=y.DEPTH_BUFFER_BIT),ee&&(te|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),De.dispose(),ve.dispose(),Ue.dispose(),q.dispose(),x.dispose(),I.dispose(),K.dispose(),ut.dispose(),B.dispose(),ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",ef),re.removeEventListener("sessionend",tf),Vi.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const T=ie.autoReset,k=Me.enabled,ee=Me.autoUpdate,te=Me.needsUpdate,H=Me.type;Ee(),ie.autoReset=T,Me.enabled=k,Me.autoUpdate=ee,Me.needsUpdate=te,Me.type=H}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const k=T.target;k.removeEventListener("dispose",$e),yt(k)}function yt(T){Ut(T),q.remove(T)}function Ut(T){const k=q.get(T).programs;k!==void 0&&(k.forEach(function(ee){ge.releaseProgram(ee)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,ee,te,H,he){k===null&&(k=Ke);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Re=s_(T,k,ee,te,H);Y.setMaterial(te,Te);let Pe=ee.index,Ve=1;if(te.wireframe===!0){if(Pe=J.getWireframeAttribute(ee),Pe===void 0)return;Ve=2}const Ge=ee.drawRange,Ne=ee.attributes.position;let Je=Ge.start*Ve,nt=(Ge.start+Ge.count)*Ve;he!==null&&(Je=Math.max(Je,he.start*Ve),nt=Math.min(nt,(he.start+he.count)*Ve)),Pe!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Pe.count)):Ne!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Ne.count));const Et=nt-Je;if(Et<0||Et===1/0)return;ut.setup(H,te,Re,ee,Pe);let St,Qe=ye;if(Pe!==null&&(St=G.get(Pe),Qe=ze,Qe.setIndex(St)),H.isMesh)te.wireframe===!0?(Y.setLineWidth(te.wireframeLinewidth*C()),Qe.setMode(y.LINES)):Qe.setMode(y.TRIANGLES);else if(H.isLine){let Fe=te.linewidth;Fe===void 0&&(Fe=1),Y.setLineWidth(Fe*C()),H.isLineSegments?Qe.setMode(y.LINES):H.isLineLoop?Qe.setMode(y.LINE_LOOP):Qe.setMode(y.LINE_STRIP)}else H.isPoints?Qe.setMode(y.POINTS):H.isSprite&&Qe.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Qe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))Qe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,Lt=H._multiDrawCounts,it=H._multiDrawCount,En=Pe?G.get(Pe).bytesPerElement:1,Er=q.get(te).currentProgram.getUniforms();for(let en=0;en<it;en++)Er.setValue(y,"_gl_DrawID",en),Qe.render(Fe[en]/En,Lt[en])}else if(H.isInstancedMesh)Qe.renderInstances(Je,Et,H.count);else if(ee.isInstancedBufferGeometry){const Fe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,Fe);Qe.renderInstances(Je,Et,Lt)}else Qe.render(Je,Et)};function st(T,k,ee){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,ho(T,k,ee),T.side=Li,T.needsUpdate=!0,ho(T,k,ee),T.side=si):ho(T,k,ee)}this.compile=function(T,k,ee=null){ee===null&&(ee=T),p=Ue.get(ee),p.init(k),E.push(p),ee.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==ee&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const te=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let Te=0;Te<he.length;Te++){const Re=he[Te];st(Re,ee,H),te.add(Re)}else st(he,ee,H),te.add(he)}),E.pop(),p=null,te},this.compileAsync=function(T,k,ee=null){const te=this.compile(T,k,ee);return new Promise(H=>{function he(){if(te.forEach(function(Te){q.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){H(T);return}setTimeout(he,10)}F.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let bn=null;function qn(T){bn&&bn(T)}function ef(){Vi.stop()}function tf(){Vi.start()}const Vi=new Hg;Vi.setAnimationLoop(qn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(T){bn=T,re.setAnimationLoop(T),T===null?Vi.stop():Vi.start()},re.addEventListener("sessionstart",ef),re.addEventListener("sessionend",tf),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,k,L),p=Ue.get(T,E.length),p.init(k),E.push(p),Ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),oe.setFromProjectionMatrix(Ce),be=this.localClippingEnabled,pe=ce.init(this.clippingPlanes,be),m=ve.get(T,R.length),m.init(),R.push(m),re.enabled===!0&&re.isPresenting===!0){const he=S.xr.getDepthSensingMesh();he!==null&&Ya(he,k,-1/0,S.sortObjects)}Ya(T,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ue,fe),A=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,A&&De.addToRenderList(m,T),this.info.render.frame++,pe===!0&&ce.beginShadows();const ee=p.state.shadowsArray;Me.render(ee,T,k),pe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const he=k.cameras;if(H.length>0)for(let Te=0,Re=he.length;Te<Re;Te++){const Pe=he[Te];rf(te,H,T,Pe)}A&&De.render(T);for(let Te=0,Re=he.length;Te<Re;Te++){const Pe=he[Te];nf(m,T,Pe,Pe.viewport)}}else H.length>0&&rf(te,H,T,k),A&&De.render(T),nf(m,T,k);L!==null&&D===0&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(S,T,k),ut.resetDefaultState(),b=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],pe===!0&&ce.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ya(T,k,ee,te){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||oe.intersectsSprite(T)){te&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ce);const Te=K.update(T),Re=T.material;Re.visible&&m.push(T,Te,Re,ee,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||oe.intersectsObject(T))){const Te=K.update(T),Re=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ie.copy(Te.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(Ce)),Array.isArray(Re)){const Pe=Te.groups;for(let Ve=0,Ge=Pe.length;Ve<Ge;Ve++){const Ne=Pe[Ve],Je=Re[Ne.materialIndex];Je&&Je.visible&&m.push(T,Te,Je,ee,Ie.z,Ne)}}else Re.visible&&m.push(T,Te,Re,ee,Ie.z,null)}}const he=T.children;for(let Te=0,Re=he.length;Te<Re;Te++)Ya(he[Te],k,ee,te)}function nf(T,k,ee,te){const H=T.opaque,he=T.transmissive,Te=T.transparent;p.setupLightsView(ee),pe===!0&&ce.setGlobalState(S.clippingPlanes,ee),te&&Y.viewport(w.copy(te)),H.length>0&&fo(H,k,ee),he.length>0&&fo(he,k,ee),Te.length>0&&fo(Te,k,ee),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function rf(T,k,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new pr(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?ao:di,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const he=p.state.transmissionRenderTarget[te.id],Te=te.viewport||w;he.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);const Re=S.getRenderTarget();S.setRenderTarget(he),S.getClearColor(W),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),A&&De.render(ee);const Pe=S.toneMapping;S.toneMapping=Di;const Ve=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),pe===!0&&ce.setGlobalState(S.clippingPlanes,te),fo(T,ee,te),M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he),F.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ne=0,Je=k.length;Ne<Je;Ne++){const nt=k[Ne],Et=nt.object,St=nt.geometry,Qe=nt.material,Fe=nt.group;if(Qe.side===si&&Et.layers.test(te.layers)){const Lt=Qe.side;Qe.side=Jt,Qe.needsUpdate=!0,sf(Et,ee,te,St,Qe,Fe),Qe.side=Lt,Qe.needsUpdate=!0,Ge=!0}}Ge===!0&&(M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he))}S.setRenderTarget(Re),S.setClearColor(W,Z),Ve!==void 0&&(te.viewport=Ve),S.toneMapping=Pe}function fo(T,k,ee){const te=k.isScene===!0?k.overrideMaterial:null;for(let H=0,he=T.length;H<he;H++){const Te=T[H],Re=Te.object,Pe=Te.geometry,Ve=te===null?Te.material:te,Ge=Te.group;Re.layers.test(ee.layers)&&sf(Re,k,ee,Pe,Ve,Ge)}}function sf(T,k,ee,te,H,he){T.onBeforeRender(S,k,ee,te,H,he),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(S,k,ee,te,T,he),H.transparent===!0&&H.side===si&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,S.renderBufferDirect(ee,k,te,H,T,he),H.side=Li,H.needsUpdate=!0,S.renderBufferDirect(ee,k,te,H,T,he),H.side=si):S.renderBufferDirect(ee,k,te,H,T,he),T.onAfterRender(S,k,ee,te,H,he)}function ho(T,k,ee){k.isScene!==!0&&(k=Ke);const te=q.get(T),H=p.state.lights,he=p.state.shadowsArray,Te=H.state.version,Re=ge.getParameters(T,H.state,he,k,ee),Pe=ge.getProgramCacheKey(Re);let Ve=te.programs;te.environment=T.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(T.isMeshStandardMaterial?I:x).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",$e),Ve=new Map,te.programs=Ve);let Ge=Ve.get(Pe);if(Ge!==void 0){if(te.currentProgram===Ge&&te.lightsStateVersion===Te)return af(T,Re),Ge}else Re.uniforms=ge.getUniforms(T),T.onBeforeCompile(Re,S),Ge=ge.acquireProgram(Re,Pe),Ve.set(Pe,Ge),te.uniforms=Re.uniforms;const Ne=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),af(T,Re),te.needsLights=a_(T),te.lightsStateVersion=Te,te.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=Ge,te.uniformsList=null,Ge}function of(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=oa.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function af(T,k){const ee=q.get(T);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function s_(T,k,ee,te,H){k.isScene!==!0&&(k=Ke),M.resetTextureUnits();const he=k.fog,Te=te.isMeshStandardMaterial?k.environment:null,Re=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ps,Pe=(te.isMeshStandardMaterial?I:x).get(te.envMap||Te),Ve=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ge=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ne=!!ee.morphAttributes.position,Je=!!ee.morphAttributes.normal,nt=!!ee.morphAttributes.color;let Et=Di;te.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=S.toneMapping);const St=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Qe=St!==void 0?St.length:0,Fe=q.get(te),Lt=p.state.lights;if(pe===!0&&(be===!0||T!==v)){const Ht=T===v&&te.id===b;ce.setState(te,T,Ht)}let it=!1;te.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Lt.state.version||Fe.outputColorSpace!==Re||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==Pe||te.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ce.numPlanes||Fe.numIntersection!==ce.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ne||Fe.morphNormals!==Je||Fe.morphColors!==nt||Fe.toneMapping!==Et||Fe.morphTargetsCount!==Qe)&&(it=!0):(it=!0,Fe.__version=te.version);let En=Fe.currentProgram;it===!0&&(En=ho(te,k,H));let Er=!1,en=!1,vs=!1;const pt=En.getUniforms(),hn=Fe.uniforms;if(Y.useProgram(En.program)&&(Er=!0,en=!0,vs=!0),te.id!==b&&(b=te.id,en=!0),Er||v!==T){Y.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),JM(de),QM(de),pt.setValue(y,"projectionMatrix",de)):pt.setValue(y,"projectionMatrix",T.projectionMatrix),pt.setValue(y,"viewMatrix",T.matrixWorldInverse);const jt=pt.map.cameraPosition;jt!==void 0&&jt.setValue(y,Le.setFromMatrixPosition(T.matrixWorld)),$.logarithmicDepthBuffer&&pt.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&pt.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,en=!0,vs=!0)}if(H.isSkinnedMesh){pt.setOptional(y,H,"bindMatrix"),pt.setOptional(y,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),pt.setValue(y,"boneTexture",Ht.boneTexture,M))}H.isBatchedMesh&&(pt.setOptional(y,H,"batchingTexture"),pt.setValue(y,"batchingTexture",H._matricesTexture,M),pt.setOptional(y,H,"batchingIdTexture"),pt.setValue(y,"batchingIdTexture",H._indirectTexture,M),pt.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(y,"batchingColorTexture",H._colorsTexture,M));const pn=ee.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Oe.update(H,ee,En),(en||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,pt.setValue(y,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(hn.envMap.value=Pe,hn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(hn.envMapIntensity.value=k.environmentIntensity),en&&(pt.setValue(y,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&o_(hn,vs),he&&te.fog===!0&&le.refreshFogUniforms(hn,he),le.refreshMaterialUniforms(hn,te,V,Q,p.state.transmissionRenderTarget[T.id]),oa.upload(y,of(Fe),hn,M)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(oa.upload(y,of(Fe),hn,M),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&pt.setValue(y,"center",H.center),pt.setValue(y,"modelViewMatrix",H.modelViewMatrix),pt.setValue(y,"normalMatrix",H.normalMatrix),pt.setValue(y,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Ht=te.uniformsGroups;for(let jt=0,qa=Ht.length;jt<qa;jt++){const Hi=Ht[jt];B.update(Hi,En),B.bind(Hi,En)}}return En}function o_(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function a_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,k,ee){q.get(T.texture).__webglTexture=k,q.get(T.depthTexture).__webglTexture=ee;const te=q.get(T);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const ee=q.get(T);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0};const l_=y.createFramebuffer();this.setRenderTarget=function(T,k=0,ee=0){L=T,P=k,D=ee;let te=!0,H=null,he=!1,Te=!1;if(T){const Pe=q.get(T);if(Pe.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(y.FRAMEBUFFER,null),te=!1;else if(Pe.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Pe.__hasExternalTextures)M.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Pe.__boundDepthTexture!==Ne){if(Ne!==null&&q.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const Ge=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?H=Ge[k][ee]:H=Ge[k],he=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?H=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[ee]:H=Ge,w.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else w.copy(me).multiplyScalar(V).floor(),U.copy(xe).multiplyScalar(V).floor(),O=ke;if(ee!==0&&(H=l_),Y.bindFramebuffer(y.FRAMEBUFFER,H)&&te&&Y.drawBuffers(T,H),Y.viewport(w),Y.scissor(U),Y.setScissorTest(O),he){const Pe=q.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,ee)}else if(Te){const Pe=q.get(T.texture),Ve=k;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Pe.__webglTexture,ee,Ve)}else if(T!==null&&ee!==0){const Pe=q.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Pe.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(T,k,ee,te,H,he,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){Y.bindFramebuffer(y.FRAMEBUFFER,Re);try{const Pe=T.texture,Ve=Pe.format,Ge=Pe.type;if(!$.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-te&&ee>=0&&ee<=T.height-H&&y.readPixels(k,ee,te,H,We.convert(Ve),We.convert(Ge),he)}finally{const Pe=L!==null?q.get(L).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,k,ee,te,H,he,Te){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){const Pe=T.texture,Ve=Pe.format,Ge=Pe.type;if(!$.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-te&&ee>=0&&ee<=T.height-H){Y.bindFramebuffer(y.FRAMEBUFFER,Re);const Ne=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ne),y.bufferData(y.PIXEL_PACK_BUFFER,he.byteLength,y.STREAM_READ),y.readPixels(k,ee,te,H,We.convert(Ve),We.convert(Ge),0);const Je=L!==null?q.get(L).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,Je);const nt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await ZM(y,nt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ne),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,he),y.deleteBuffer(Ne),y.deleteSync(nt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,ee=0){T.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const te=Math.pow(2,-ee),H=Math.floor(T.image.width*te),he=Math.floor(T.image.height*te),Te=k!==null?k.x:0,Re=k!==null?k.y:0;M.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,ee,0,0,Te,Re,H,he),Y.unbindTexture()};const c_=y.createFramebuffer(),u_=y.createFramebuffer();this.copyTextureToTexture=function(T,k,ee=null,te=null,H=0,he=null){T.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,T=arguments[1],k=arguments[2],he=arguments[3]||0,ee=null),he===null&&(H!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let Te,Re,Pe,Ve,Ge,Ne,Je,nt,Et;const St=T.isCompressedTexture?T.mipmaps[he]:T.image;if(ee!==null)Te=ee.max.x-ee.min.x,Re=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,Ve=ee.min.x,Ge=ee.min.y,Ne=ee.isBox3?ee.min.z:0;else{const pn=Math.pow(2,-H);Te=Math.floor(St.width*pn),Re=Math.floor(St.height*pn),T.isDataArrayTexture?Pe=St.depth:T.isData3DTexture?Pe=Math.floor(St.depth*pn):Pe=1,Ve=0,Ge=0,Ne=0}te!==null?(Je=te.x,nt=te.y,Et=te.z):(Je=0,nt=0,Et=0);const Qe=We.convert(k.format),Fe=We.convert(k.type);let Lt;k.isData3DTexture?(M.setTexture3D(k,0),Lt=y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(M.setTexture2DArray(k,0),Lt=y.TEXTURE_2D_ARRAY):(M.setTexture2D(k,0),Lt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,k.unpackAlignment);const it=y.getParameter(y.UNPACK_ROW_LENGTH),En=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Er=y.getParameter(y.UNPACK_SKIP_PIXELS),en=y.getParameter(y.UNPACK_SKIP_ROWS),vs=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ne);const pt=T.isDataArrayTexture||T.isData3DTexture,hn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const pn=q.get(T),Ht=q.get(k),jt=q.get(pn.__renderTarget),qa=q.get(Ht.__renderTarget);Y.bindFramebuffer(y.READ_FRAMEBUFFER,jt.__webglFramebuffer),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Hi=0;Hi<Pe;Hi++)pt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,q.get(T).__webglTexture,H,Ne+Hi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,q.get(k).__webglTexture,he,Et+Hi)),y.blitFramebuffer(Ve,Ge,Te,Re,Je,nt,Te,Re,y.DEPTH_BUFFER_BIT,y.NEAREST);Y.bindFramebuffer(y.READ_FRAMEBUFFER,null),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||q.has(T)){const pn=q.get(T),Ht=q.get(k);Y.bindFramebuffer(y.READ_FRAMEBUFFER,c_),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,u_);for(let jt=0;jt<Pe;jt++)pt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,pn.__webglTexture,H,Ne+jt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,pn.__webglTexture,H),hn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ht.__webglTexture,he,Et+jt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ht.__webglTexture,he),H!==0?y.blitFramebuffer(Ve,Ge,Te,Re,Je,nt,Te,Re,y.COLOR_BUFFER_BIT,y.NEAREST):hn?y.copyTexSubImage3D(Lt,he,Je,nt,Et+jt,Ve,Ge,Te,Re):y.copyTexSubImage2D(Lt,he,Je,nt,Ve,Ge,Te,Re);Y.bindFramebuffer(y.READ_FRAMEBUFFER,null),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else hn?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(Lt,he,Je,nt,Et,Te,Re,Pe,Qe,Fe,St.data):k.isCompressedArrayTexture?y.compressedTexSubImage3D(Lt,he,Je,nt,Et,Te,Re,Pe,Qe,St.data):y.texSubImage3D(Lt,he,Je,nt,Et,Te,Re,Pe,Qe,Fe,St):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,he,Je,nt,Te,Re,Qe,Fe,St.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,he,Je,nt,St.width,St.height,Qe,St.data):y.texSubImage2D(y.TEXTURE_2D,he,Je,nt,Te,Re,Qe,Fe,St);y.pixelStorei(y.UNPACK_ROW_LENGTH,it),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,En),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Er),y.pixelStorei(y.UNPACK_SKIP_ROWS,en),y.pixelStorei(y.UNPACK_SKIP_IMAGES,vs),he===0&&k.generateMipmaps&&y.generateMipmap(Lt),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,k,ee=null,te=null,H=0){return T.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,ee,te,H)},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,Y.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const Rh={type:"change"},Zu={type:"start"},Yg={type:"end"},qo=new Mg,Ph=new wi,jC=Math.cos(70*jM.DEG2RAD),wt=new z,Kt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class KC extends fE{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new mr,this._lastTargetPosition=new z,this._quat=new mr().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ih,this._sphericalDelta=new ih,this._scale=1,this._panOffset=new z,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new z,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JC.bind(this),this._onPointerDown=ZC.bind(this),this._onPointerUp=QC.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=n1.bind(this),this._onKeyDown=i1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=a1.bind(this),this._interceptControlUp=l1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rh),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;wt.copy(n).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),r<-Math.PI?r+=Kt:r>Math.PI&&(r-=Kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<jC?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(Rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wt.setFromMatrixColumn(n,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,n){this.screenSpacePanning===!0?wt.setFromMatrixColumn(n,1):(wt.setFromMatrixColumn(n,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new _e,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ZC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function JC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function QC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yg),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function e1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case is.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case is.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Zu)}function t1(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function n1(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(Zu),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Yg))}function i1(t){this.enabled!==!1&&this._handleKeyDown(t)}function r1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Zu)}function s1(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function o1(t){this.enabled!==!1&&t.preventDefault()}function a1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const c1=vu({__name:"ModelViewer",props:{offsets:{},rrWidth:{},rrLength:{}},setup(t){const e=t;At(e,()=>{s()},{deep:!0});let n=null,i;const r=dt(null);Bi(()=>{if(!r.value)return;i=new Mb;const o=new vn(75,window.innerWidth/window.innerHeight,.1,1e3),a=new qC,l=new KC(o,a.domElement);l.enableDamping=!0,l.dampingFactor=.05,l.enablePan=!0,l.enableZoom=!0,l.target.set(0,0,0),a.setSize(window.innerWidth,window.innerHeight),r.value.appendChild(a.domElement),o.position.set(30,50,0),o.lookAt(0,0,0);const c=new lE(16777215,1);c.position.set(0,10,10),i.add(c);const u=new cE(16777215,.5);i.add(u),s();function f(){requestAnimationFrame(f),l.update(),a.render(i,o)}f()});function s(){n!=null&&i.remove(n);const o=e.offsets.reduce((_,m)=>_+m,0),a=e.rrWidth+10,l=o+e.rrLength+10,c=new Fg;c.moveTo(0,0),c.lineTo(0,a),c.lineTo(l,a),c.lineTo(l,0),c.lineTo(0,0);function u(_){const m=new Jc;m.moveTo(_-e.rrLength/2,5),m.lineTo(_+e.rrLength/2,5),m.lineTo(_+e.rrLength/2,e.rrWidth+5),m.lineTo(_-e.rrLength/2,e.rrWidth+5),m.lineTo(_-e.rrLength/2,5),c.holes.push(m)}let f=e.rrLength/2+5;u(f);for(let _=0;_<e.offsets.length;_++)f+=e.offsets[_],u(f);const d={depth:1,bevelEnabled:!0},h=new ju(c,d),g=new iE({color:8947848});n=new Vn(h,g),n.rotation.x=Math.PI/2,i.add(n)}return(o,a)=>(jo(),ec("div",{ref_key:"threeContainer",ref:r,class:"three-container"},null,512))}}),u1=Xe({...Vt(),...zy({fullHeight:!0}),...$n()},"VApp"),f1=xt()({name:"VApp",props:u1(),setup(t,e){let{slots:n}=e;const i=mi(t),{layoutClasses:r,getLayoutItem:s,items:o,layoutRef:a}=Gy(t),{rtlClasses:l}=oo();return Nt(()=>{var c;return ne("div",{ref:a,class:["v-application",i.themeClasses.value,r.value,l.value,t.class],style:[t.style]},[ne("div",{class:"v-application__wrap"},[(c=n.default)==null?void 0:c.call(n)])])}),{getLayoutItem:s,items:o,theme:i}}}),qg=ka.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),jg=ka.reduce((t,e)=>{const n="offset"+Ui(e);return t[n]={type:[String,Number],default:null},t},{}),Kg=ka.reduce((t,e)=>{const n="order"+Ui(e);return t[n]={type:[String,Number],default:null},t},{}),Dh={col:Object.keys(qg),offset:Object.keys(jg),order:Object.keys(Kg)};function d1(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const r=e.replace(t,"");i+=`-${r}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const h1=["auto","start","end","center","baseline","stretch"],p1=Xe({cols:{type:[Boolean,String,Number],default:!1},...qg,offset:{type:[String,Number],default:null},...jg,order:{type:[String,Number],default:null},...Kg,alignSelf:{type:String,default:null,validator:t=>h1.includes(t)},...Vt(),...ki()},"VCol"),Lh=xt()({name:"VCol",props:p1(),setup(t,e){let{slots:n}=e;const i=se(()=>{const r=[];let s;for(s in Dh)Dh[s].forEach(a=>{const l=t[a],c=d1(s,a,l);c&&r.push(c)});const o=r.some(a=>a.startsWith("v-col-"));return r.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),r});return()=>{var r;return yr(t.tag,{class:[i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}}),Ju=["start","end","center"],Zg=["space-between","space-around","space-evenly"];function Qu(t,e){return ka.reduce((n,i)=>{const r=t+Ui(i);return n[r]=e(),n},{})}const m1=[...Ju,"baseline","stretch"],Jg=t=>m1.includes(t),Qg=Qu("align",()=>({type:String,default:null,validator:Jg})),g1=[...Ju,...Zg],e_=t=>g1.includes(t),t_=Qu("justify",()=>({type:String,default:null,validator:e_})),_1=[...Ju,...Zg,"stretch"],n_=t=>_1.includes(t),i_=Qu("alignContent",()=>({type:String,default:null,validator:n_})),Ih={align:Object.keys(Qg),justify:Object.keys(t_),alignContent:Object.keys(i_)},v1={align:"align",justify:"justify",alignContent:"align-content"};function x1(t,e,n){let i=v1[t];if(n!=null){if(e){const r=e.replace(t,"");i+=`-${r}`}return i+=`-${n}`,i.toLowerCase()}}const y1=Xe({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Jg},...Qg,justify:{type:String,default:null,validator:e_},...t_,alignContent:{type:String,default:null,validator:n_},...i_,...Vt(),...ki()},"VRow"),S1=xt()({name:"VRow",props:y1(),setup(t,e){let{slots:n}=e;const i=se(()=>{const r=[];let s;for(s in Ih)Ih[s].forEach(o=>{const a=t[o],l=x1(s,o,a);l&&r.push(l)});return r.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),r});return()=>{var r;return yr(t.tag,{class:["v-row",i.value,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}});function M1(){const t=Sn(!1);return Bi(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:se(()=>t.value?void 0:{transition:"none !important"}),isBooted:Pa(t)}}const b1=Xe({scrollable:Boolean,...Vt(),...Uu(),...ki({tag:"main"})},"VMain"),E1=xt()({name:"VMain",props:b1(),setup(t,e){let{slots:n}=e;const{dimensionStyles:i}=Fu(t),{mainStyles:r}=Vy(),{ssrBootStyles:s}=M1();return Nt(()=>ne(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[r.value,s.value,i.value,t.style]},{default:()=>{var o,a;return[t.scrollable?ne("div",{class:"v-main__scroller"},[(o=n.default)==null?void 0:o.call(n)]):(a=n.default)==null?void 0:a.call(n)]}})),{}}}),T1=vu({__name:"App",setup(t){const e=dt(3),n=dt([30,30]);At(e,s=>{for(e.value!==Math.floor(s)&&(e.value=Math.floor(s));e.value-1>n.value.length;)n.value.push(30);e.value-1<n.value.length&&n.value.splice(e.value-1)});const i=dt(24.5),r=dt(11.2);return(s,o)=>{const a=_v("v-number-input"),l=c1;return jo(),Zv(f1,null,{default:Gr(()=>[ne(E1,null,{default:Gr(()=>[ne(S1,null,{default:Gr(()=>[ne(Lh,{cols:"4"},{default:Gr(()=>[o[3]||(o[3]=$r("h5",null,"Rolling Road Width",-1)),ne(a,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=c=>i.value=c),density:"compact","control-variant":"split"},null,8,["modelValue"]),o[4]||(o[4]=$r("h5",null,"Rolling Road Length",-1)),ne(a,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=c=>r.value=c),density:"compact","control-variant":"split"},null,8,["modelValue"]),o[5]||(o[5]=$r("h5",null,"Axle count",-1)),ne(a,{step:1,min:2,modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=c=>e.value=c),density:"compact","control-variant":"split"},null,8,["modelValue"]),(jo(!0),ec(gt,null,Sv(n.value,(c,u)=>(jo(),ec(gt,null,[$r("h5",null,"Offset "+Vh(u+1),1),ne(a,{modelValue:n.value[u],"onUpdate:modelValue":f=>n.value[u]=f,density:"compact","control-variant":"split"},null,8,["modelValue","onUpdate:modelValue"])],64))),256))]),_:1}),ne(Lh,{cols:"8"},{default:Gr(()=>[ne(l,{offsets:n.value,rrWidth:i.value,rrLength:r.value},null,8,["offsets","rrWidth","rrLength"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),r_=z0(T1);XS(r_);r_.mount("#app");
