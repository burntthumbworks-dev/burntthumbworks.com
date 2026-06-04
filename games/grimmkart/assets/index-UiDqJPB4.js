(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ms="169",_c=0,Bs=1,vc=2,Qo=1,xc=2,Zt=3,pn=0,yt=1,Gt=2,un=0,Qn=1,zs=2,Hs=3,Gs=4,Mc=5,Tn=100,yc=101,Sc=102,Ec=103,bc=104,wc=200,Tc=201,Ac=202,Rc=203,ya=204,Sa=205,Cc=206,Pc=207,Ic=208,Lc=209,Dc=210,Uc=211,Nc=212,Fc=213,Oc=214,Ea=0,ba=1,wa=2,ii=3,Ta=4,Aa=5,Ra=6,Ca=7,el=0,kc=1,Bc=2,fn=0,zc=1,Hc=2,Gc=3,Vc=4,Wc=5,Xc=6,qc=7,tl=300,ri=301,ai=302,Pa=303,Ia=304,Ar=306,La=1e3,Cn=1001,Da=1002,Pt=1003,Yc=1004,Ui=1005,Nt=1006,zr=1007,Pn=1008,nn=1009,nl=1010,il=1011,wi=1012,gs=1013,In=1014,Jt=1015,Ti=1016,_s=1017,vs=1018,si=1020,rl=35902,al=1021,sl=1022,Ot=1023,ol=1024,ll=1025,ei=1026,oi=1027,cl=1028,xs=1029,dl=1030,Ms=1031,ys=1033,sr=33776,or=33777,lr=33778,cr=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,ka=36196,Ba=37492,za=37496,Ha=37808,Ga=37809,Va=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,Ka=37815,$a=37816,ja=37817,Za=37818,Ja=37819,Qa=37820,es=37821,dr=36492,ts=36494,ns=36495,hl=36283,is=36284,rs=36285,as=36286,Kc=3200,$c=3201,ul=0,jc=1,hn="",zt="srgb",gn="srgb-linear",Ss="display-p3",Rr="display-p3-linear",gr="linear",et="srgb",_r="rec709",vr="p3",kn=7680,Vs=519,Zc=512,Jc=513,Qc=514,fl=515,ed=516,td=517,nd=518,id=519,Ws=35044,Xs="300 es",Qt=2e3,xr=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,ss=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function rd(i,e){return(i%e+e)%e}function Gr(i,e,t){return(1-t)*i+t*e}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,r,a,s,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],f=n[2],m=n[5],v=n[8],g=r[0],h=r[3],u=r[6],E=r[1],S=r[4],b=r[7],L=r[2],A=r[5],T=r[8];return a[0]=s*g+o*E+l*L,a[3]=s*h+o*S+l*A,a[6]=s*u+o*b+l*T,a[1]=c*g+d*E+p*L,a[4]=c*h+d*S+p*A,a[7]=c*u+d*b+p*T,a[2]=f*g+m*E+v*L,a[5]=f*h+m*S+v*A,a[8]=f*u+m*b+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*a*d+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,f=o*l-d*a,m=c*a-s*l,v=t*p+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=p*g,e[1]=(r*c-d*n)*g,e[2]=(o*n-r*s)*g,e[3]=f*g,e[4]=(d*t-r*l)*g,e[5]=(r*a-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Pe;function pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ad(){const i=Mr("canvas");return i.style.display="block",i}const qs={};function hr(i){i in qs||(qs[i]=!0,console.warn(i))}function sd(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function od(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ld(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ys=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ks=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gi={[gn]:{transfer:gr,primaries:_r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[zt]:{transfer:et,primaries:_r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:gr,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ks),fromReference:i=>i.applyMatrix3(Ys)},[Ss]:{transfer:et,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ks),fromReference:i=>i.applyMatrix3(Ys).convertLinearToSRGB()}},cd=new Set([gn,Rr]),Xe={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=gi[e].toReference,r=gi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return gi[i].primaries},getTransfer:function(i){return i===hn?gr:gi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(gi[e].luminanceCoefficients)}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class dd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=Mr("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ti(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hd=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Xr(r[s].image)):a.push(Xr(r[s]))}else a=Xr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class St extends hi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Cn,r=Cn,a=Nt,s=Pn,o=Ot,l=nn,c=St.DEFAULT_ANISOTROPY,d=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ai(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=tl;St.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],m=l[5],v=l[9],g=l[2],h=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-g)<.01&&Math.abs(v-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+g)<.1&&Math.abs(v+h)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(m+1)/2,L=(u+1)/2,A=(d+f)/4,T=(p+g)/4,P=(v+h)/4;return S>b&&S>L?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=A/n,a=T/n):b>L?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=A/r,a=P/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=T/a,r=P/a),this.set(n,r,a,t),this}let E=Math.sqrt((h-v)*(h-v)+(p-g)*(p-g)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(h-v)/E,this.y=(p-g)/E,this.z=(f-d)/E,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3];const f=a[s+0],m=a[s+1],v=a[s+2],g=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(p!==g||l!==f||c!==m||d!==v){let h=1-o;const u=l*f+c*m+d*v+p*g,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const L=Math.sqrt(S),A=Math.atan2(L,u*E);h=Math.sin(h*A)/L,o=Math.sin(o*A)/L}const b=o*E;if(l=l*h+f*b,c=c*h+m*b,d=d*h+v*b,p=p*h+g*b,h===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=L,c*=L,d*=L,p*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=a[s],f=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+d*p+l*m-c*f,e[t+1]=l*v+d*f+c*p-o*m,e[t+2]=c*v+d*m+o*f-l*p,e[t+3]=d*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),p=o(a/2),f=l(n/2),m=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=f*d*p+c*m*v,this._y=c*m*p-f*d*v,this._z=c*d*v+f*m*p,this._w=c*d*p-f*m*v;break;case"YXZ":this._x=f*d*p+c*m*v,this._y=c*m*p-f*d*v,this._z=c*d*v-f*m*p,this._w=c*d*p+f*m*v;break;case"ZXY":this._x=f*d*p-c*m*v,this._y=c*m*p+f*d*v,this._z=c*d*v+f*m*p,this._w=c*d*p-f*m*v;break;case"ZYX":this._x=f*d*p-c*m*v,this._y=c*m*p+f*d*v,this._z=c*d*v-f*m*p,this._w=c*d*p+f*m*v;break;case"YZX":this._x=f*d*p+c*m*v,this._y=c*m*p+f*d*v,this._z=c*d*v-f*m*p,this._w=c*d*p-f*m*v;break;case"XZY":this._x=f*d*p-c*m*v,this._y=c*m*p-f*d*v,this._z=c*d*v+f*m*p,this._w=c*d*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-n*c,this._z=a*d+s*c+n*l-r*o,this._w=s*d-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*p+this._w*f,this._x=n*p+this._x*f,this._y=r*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($s.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($s.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),d=2*(o*t-a*r),p=2*(a*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-a*p,this.z=r+l*p+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new C,$s=new Ri;class Ci{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Lt):Lt.fromBufferAttribute(a,s),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Fi.subVectors(this.max,_i),zn.subVectors(e.a,_i),Hn.subVectors(e.b,_i),Gn.subVectors(e.c,_i),an.subVectors(Hn,zn),sn.subVectors(Gn,Hn),vn.subVectors(zn,Gn);let t=[0,-an.z,an.y,0,-sn.z,sn.y,0,-vn.z,vn.y,an.z,0,-an.x,sn.z,0,-sn.x,vn.z,0,-vn.x,-an.y,an.x,0,-sn.y,sn.x,0,-vn.y,vn.x,0];return!Yr(t,zn,Hn,Gn,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,zn,Hn,Gn,Fi))?!1:(Oi.crossVectors(an,sn),t=[Oi.x,Oi.y,Oi.z],Yr(t,zn,Hn,Gn,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new C,new C,new C,new C,new C,new C,new C,new C],Lt=new C,Ni=new Ci,zn=new C,Hn=new C,Gn=new C,an=new C,sn=new C,vn=new C,_i=new C,Fi=new C,Oi=new C,xn=new C;function Yr(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){xn.fromArray(i,a);const o=r.x*Math.abs(xn.x)+r.y*Math.abs(xn.y)+r.z*Math.abs(xn.z),l=e.dot(xn),c=t.dot(xn),d=n.dot(xn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const md=new Ci,vi=new C,Kr=new C;class Pi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Kr)),this.expandByPoint(vi.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new C,$r=new C,ki=new C,on=new C,jr=new C,Bi=new C,Zr=new C;class Es{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$r.copy(e).add(t).multiplyScalar(.5),ki.copy(t).sub(e).normalize(),on.copy(this.origin).sub($r);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ki),o=on.dot(this.direction),l=-on.dot(ki),c=on.lengthSq(),d=Math.abs(1-s*s);let p,f,m,v;if(d>0)if(p=s*l-o,f=s*o-l,v=a*d,p>=0)if(f>=-v)if(f<=v){const g=1/d;p*=g,f*=g,m=p*(p+s*f+2*o)+f*(s*p+f+2*l)+c}else f=a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+c;else f=-a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-s*a+o)),f=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(p=Math.max(0,-(s*a+o)),f=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+c);else f=s>0?-a:a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy($r).addScaledVector(ki,f),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),r=Yt.dot(Yt)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(a=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,r,a){jr.subVectors(t,e),Bi.subVectors(n,e),Zr.crossVectors(jr,Bi);let s=this.direction.dot(Zr),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;on.subVectors(this.origin,e);const l=o*this.direction.dot(Bi.crossVectors(on,Bi));if(l<0)return null;const c=o*this.direction.dot(jr.cross(on));if(c<0||l+c>s)return null;const d=-o*on.dot(Zr);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,a,s,o,l,c,d,p,f,m,v,g,h){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,d,p,f,m,v,g,h)}set(e,t,n,r,a,s,o,l,c,d,p,f,m,v,g,h){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=f,u[3]=m,u[7]=v,u[11]=g,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vn.setFromMatrixColumn(e,0).length(),a=1/Vn.setFromMatrixColumn(e,1).length(),s=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const f=s*d,m=s*p,v=o*d,g=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,v=c*d,g=c*p;t[0]=f+g*o,t[4]=v*o-m,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=m*o-v,t[6]=g+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,v=c*d,g=c*p;t[0]=f-g*o,t[4]=-s*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*d,t[9]=g-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,m=s*p,v=o*d,g=o*p;t[0]=l*d,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*p,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=o*l,g=o*c;t[0]=l*d,t[4]=g-f*p,t[8]=v*p+m,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+v,t[10]=f-g*p}else if(e.order==="XZY"){const f=s*l,m=s*c,v=o*l,g=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=f*p+g,t[5]=s*d,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*d,t[10]=g*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),ln.crossVectors(n,Tt),ln.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),ln.crossVectors(n,Tt)),ln.normalize(),zi.crossVectors(Tt,ln),r[0]=ln.x,r[4]=zi.x,r[8]=Tt.x,r[1]=ln.y,r[5]=zi.y,r[9]=Tt.y,r[2]=ln.z,r[6]=zi.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],f=n[9],m=n[13],v=n[2],g=n[6],h=n[10],u=n[14],E=n[3],S=n[7],b=n[11],L=n[15],A=r[0],T=r[4],P=r[8],W=r[12],_=r[1],x=r[5],F=r[9],U=r[13],z=r[2],X=r[6],H=r[10],$=r[14],G=r[3],le=r[7],ae=r[11],ge=r[15];return a[0]=s*A+o*_+l*z+c*G,a[4]=s*T+o*x+l*X+c*le,a[8]=s*P+o*F+l*H+c*ae,a[12]=s*W+o*U+l*$+c*ge,a[1]=d*A+p*_+f*z+m*G,a[5]=d*T+p*x+f*X+m*le,a[9]=d*P+p*F+f*H+m*ae,a[13]=d*W+p*U+f*$+m*ge,a[2]=v*A+g*_+h*z+u*G,a[6]=v*T+g*x+h*X+u*le,a[10]=v*P+g*F+h*H+u*ae,a[14]=v*W+g*U+h*$+u*ge,a[3]=E*A+S*_+b*z+L*G,a[7]=E*T+S*x+b*X+L*le,a[11]=E*P+S*F+b*H+L*ae,a[15]=E*W+S*U+b*$+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],f=e[10],m=e[14],v=e[3],g=e[7],h=e[11],u=e[15];return v*(+a*l*p-r*c*p-a*o*f+n*c*f+r*o*m-n*l*m)+g*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*d-a*l*d)+h*(+t*c*p-t*o*m-a*s*p+n*s*m+a*o*d-n*c*d)+u*(-r*o*d-t*l*p+t*o*f+r*s*p-n*s*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],f=e[10],m=e[11],v=e[12],g=e[13],h=e[14],u=e[15],E=p*h*c-g*f*c+g*l*m-o*h*m-p*l*u+o*f*u,S=v*f*c-d*h*c-v*l*m+s*h*m+d*l*u-s*f*u,b=d*g*c-v*p*c+v*o*m-s*g*m-d*o*u+s*p*u,L=v*p*l-d*g*l-v*o*f+s*g*f+d*o*h-s*p*h,A=t*E+n*S+r*b+a*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=E*T,e[1]=(g*f*a-p*h*a-g*r*m+n*h*m+p*r*u-n*f*u)*T,e[2]=(o*h*a-g*l*a+g*r*c-n*h*c-o*r*u+n*l*u)*T,e[3]=(p*l*a-o*f*a-p*r*c+n*f*c+o*r*m-n*l*m)*T,e[4]=S*T,e[5]=(d*h*a-v*f*a+v*r*m-t*h*m-d*r*u+t*f*u)*T,e[6]=(v*l*a-s*h*a-v*r*c+t*h*c+s*r*u-t*l*u)*T,e[7]=(s*f*a-d*l*a+d*r*c-t*f*c-s*r*m+t*l*m)*T,e[8]=b*T,e[9]=(v*p*a-d*g*a-v*n*m+t*g*m+d*n*u-t*p*u)*T,e[10]=(s*g*a-v*o*a+v*n*c-t*g*c-s*n*u+t*o*u)*T,e[11]=(d*o*a-s*p*a-d*n*c+t*p*c+s*n*m-t*o*m)*T,e[12]=L*T,e[13]=(d*g*r-v*p*r+v*n*f-t*g*f-d*n*h+t*p*h)*T,e[14]=(v*o*r-s*g*r-v*n*l+t*g*l+s*n*h-t*o*h)*T,e[15]=(s*p*r-d*o*r+d*n*l-t*p*l-s*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,p=o+o,f=a*c,m=a*d,v=a*p,g=s*d,h=s*p,u=o*p,E=l*c,S=l*d,b=l*p,L=n.x,A=n.y,T=n.z;return r[0]=(1-(g+u))*L,r[1]=(m+b)*L,r[2]=(v-S)*L,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(f+u))*A,r[6]=(h+E)*A,r[7]=0,r[8]=(v+S)*T,r[9]=(h-E)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Vn.set(r[0],r[1],r[2]).length();const s=Vn.set(r[4],r[5],r[6]).length(),o=Vn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const c=1/a,d=1/s,p=1/o;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=d,Dt.elements[5]*=d,Dt.elements[6]*=d,Dt.elements[8]*=p,Dt.elements[9]*=p,Dt.elements[10]*=p,t.setFromRotationMatrix(Dt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=Qt){const l=this.elements,c=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(o===Qt)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===xr)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Qt){const l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(s-a),f=(t+e)*c,m=(n+r)*d;let v,g;if(o===Qt)v=(s+a)*p,g=-2*p;else if(o===xr)v=a*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vn=new C,Dt=new tt,gd=new C(0,0,0),_d=new C(1,1,1),ln=new C,zi=new C,Tt=new C,js=new tt,Zs=new Ri;class Wt{constructor(e=0,t=0,n=0,r=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zs.setFromEuler(this),this.setFromQuaternion(Zs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const Js=new C,Wn=new Ri,Kt=new tt,Hi=new C,xi=new C,xd=new C,Md=new Ri,Qs=new C(1,0,0),eo=new C(0,1,0),to=new C(0,0,1),no={type:"added"},yd={type:"removed"},Xn={type:"childadded",child:null},Jr={type:"childremoved",child:null};class st extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new C,t=new Wt,n=new Ri,r=new C(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(Qs,e)}rotateY(e){return this.rotateOnAxis(eo,e)}rotateZ(e){return this.rotateOnAxis(to,e)}translateOnAxis(e,t){return Js.copy(e).applyQuaternion(this.quaternion),this.position.add(Js.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qs,e)}translateY(e){return this.translateOnAxis(eo,e)}translateZ(e){return this.translateOnAxis(to,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(xi,Hi,this.up):Kt.lookAt(Hi,xi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Wn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(no),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(no),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}st.DEFAULT_UP=new C(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new C,$t=new C,Qr=new C,jt=new C,qn=new C,Yn=new C,io=new C,ea=new C,ta=new C,na=new C,ia=new $e,ra=new $e,aa=new $e;class Ft{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ut.subVectors(r,t),$t.subVectors(n,t),Qr.subVectors(e,t);const s=Ut.dot(Ut),o=Ut.dot($t),l=Ut.dot(Qr),c=$t.dot($t),d=$t.dot(Qr),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const f=1/p,m=(c*l-o*d)*f,v=(s*d-o*l)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,jt.x),l.addScaledVector(s,jt.y),l.addScaledVector(o,jt.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return ia.setScalar(0),ra.setScalar(0),aa.setScalar(0),ia.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,n),aa.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ia,a.x),s.addScaledVector(ra,a.y),s.addScaledVector(aa,a.z),s}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),$t.subVectors(e,t),Ut.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Ut.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Ft.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;qn.subVectors(r,n),Yn.subVectors(a,n),ea.subVectors(e,n);const l=qn.dot(ea),c=Yn.dot(ea);if(l<=0&&c<=0)return t.copy(n);ta.subVectors(e,r);const d=qn.dot(ta),p=Yn.dot(ta);if(d>=0&&p<=d)return t.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(qn,s);na.subVectors(e,a);const m=qn.dot(na),v=Yn.dot(na);if(v>=0&&m<=v)return t.copy(a);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Yn,o);const h=d*v-m*p;if(h<=0&&p-d>=0&&m-v>=0)return io.subVectors(a,r),o=(p-d)/(p-d+(m-v)),t.copy(r).addScaledVector(io,o);const u=1/(h+g+f);return s=g*u,o=f*u,t.copy(n).addScaledVector(qn,s).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=rd(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=sa(s,a,e+1/3),this.g=sa(s,a,e),this.b=sa(s,a,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Xe.fromWorkingColorSpace(ft.copy(this),e),Math.round(xt(ft.r*255,0,255))*65536+Math.round(xt(ft.g*255,0,255))*256+Math.round(xt(ft.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,a=ft.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-n)/p+2;break;case a:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=zt){Xe.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Gi);const n=Gr(cn.h,Gi.h,t),r=Gr(cn.s,Gi.s,t),a=Gr(cn.l,Gi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Ie;Ie.NAMES=vl;let Sd=0;class Nn extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Qn,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Sa,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xl extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new C,Vi=new Le;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ws,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXY(t,Vi.x,Vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),a=vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ws&&(e.usage=this.usage),e}}class Ml extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ed=0;const Ct=new tt,oa=new st,Kn=new C,At=new Ci,Mi=new Ci,ct=new C;class ht extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?yl:Ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];At.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(At.min,Mi.min),At.expandByPoint(ct),ct.addVectors(At.max,Mi.max),At.expandByPoint(ct)):(At.expandByPoint(Mi.min),At.expandByPoint(Mi.max))}At.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)ct.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ct.fromBufferAttribute(o,c),l&&(Kn.fromBufferAttribute(e,c),ct.add(Kn)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,d=new C,p=new C,f=new Le,m=new Le,v=new Le,g=new C,h=new C;function u(P,W,_){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,W),p.fromBufferAttribute(n,_),f.fromBufferAttribute(a,P),m.fromBufferAttribute(a,W),v.fromBufferAttribute(a,_),d.sub(c),p.sub(c),m.sub(f),v.sub(f);const x=1/(m.x*v.y-v.x*m.y);isFinite(x)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(x),h.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(x),o[P].add(g),o[W].add(g),o[_].add(g),l[P].add(h),l[W].add(h),l[_].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,W=E.length;P<W;++P){const _=E[P],x=_.start,F=_.count;for(let U=x,z=x+F;U<z;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const S=new C,b=new C,L=new C,A=new C;function T(P){L.fromBufferAttribute(r,P),A.copy(L);const W=o[P];S.copy(W),S.sub(L.multiplyScalar(L.dot(W))).normalize(),b.crossVectors(A,W);const x=b.dot(l[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,x)}for(let P=0,W=E.length;P<W;++P){const _=E[P],x=_.start,F=_.count;for(let U=x,z=x+F;U<z;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new C,a=new C,s=new C,o=new C,l=new C,c=new C,d=new C,p=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,h),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let m=0,v=0;for(let g=0,h=l.length;g<h;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*d;for(let u=0;u<d;u++)f[v++]=c[m++]}return new Vt(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],p=a[c];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new tt,Mn=new Es,Wi=new Pi,ao=new C,Xi=new C,qi=new C,Yi=new C,la=new C,Ki=new C,so=new C,$i=new C;class ze extends st{constructor(e=new ht,t=new xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ki.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],p=a[l];d!==0&&(la.fromBufferAttribute(p,e),s?Ki.addScaledVector(la,d):Ki.addScaledVector(la.sub(t),d))}t.add(Ki)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(a),Mn.copy(e.ray).recast(e.near),!(Wi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Wi,ao)===null||Mn.origin.distanceToSquared(ao)>(e.far-e.near)**2))&&(ro.copy(a).invert(),Mn.copy(e.ray).applyMatrix4(ro),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const h=f[v],u=s[h.materialIndex],E=Math.max(h.start,m.start),S=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let b=E,L=S;b<L;b+=3){const A=o.getX(b),T=o.getX(b+1),P=o.getX(b+2);r=ji(this,u,e,n,c,d,p,A,T,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let h=v,u=g;h<u;h+=3){const E=o.getX(h),S=o.getX(h+1),b=o.getX(h+2);r=ji(this,s,e,n,c,d,p,E,S,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const h=f[v],u=s[h.materialIndex],E=Math.max(h.start,m.start),S=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let b=E,L=S;b<L;b+=3){const A=b,T=b+1,P=b+2;r=ji(this,u,e,n,c,d,p,A,T,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let h=v,u=g;h<u;h+=3){const E=h,S=h+1,b=h+2;r=ji(this,s,e,n,c,d,p,E,S,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function bd(i,e,t,n,r,a,s,o){let l;if(e.side===yt?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===pn,o),l===null)return null;$i.copy(o),$i.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($i);return c<t.near||c>t.far?null:{distance:c,point:$i.clone(),object:i}}function ji(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,qi),i.getVertexPosition(c,Yi);const d=bd(i,e,t,n,Xi,qi,Yi,so);if(d){const p=new C;Ft.getBarycoord(so,Xi,qi,Yi,p),r&&(d.uv=Ft.getInterpolatedAttribute(r,o,l,c,p,new Le)),a&&(d.uv1=Ft.getInterpolatedAttribute(a,o,l,c,p,new Le)),s&&(d.normal=Ft.getInterpolatedAttribute(s,o,l,c,p,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};Ft.getNormal(Xi,qi,Yi,f.normal),d.face=f,d.barycoord=p}return d}class kt extends ht{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(p,2));function v(g,h,u,E,S,b,L,A,T,P,W){const _=b/T,x=L/P,F=b/2,U=L/2,z=A/2,X=T+1,H=P+1;let $=0,G=0;const le=new C;for(let ae=0;ae<H;ae++){const ge=ae*x-U;for(let He=0;He<X;He++){const qe=He*_-F;le[g]=qe*E,le[h]=ge*S,le[u]=z,c.push(le.x,le.y,le.z),le[g]=0,le[h]=0,le[u]=A>0?1:-1,d.push(le.x,le.y,le.z),p.push(He/T),p.push(1-ae/P),$+=1}}for(let ae=0;ae<P;ae++)for(let ge=0;ge<T;ge++){const He=f+ge+X*ae,qe=f+ge+X*(ae+1),q=f+(ge+1)+X*(ae+1),J=f+(ge+1)+X*ae;l.push(He,qe,J),l.push(qe,q,J),G+=6}o.addGroup(m,G,W),m+=G,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const r in n)e[r]=n[r]}return e}function wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Td={clone:li,merge:mt};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class El extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new C,oo=new Le,lo=new Le;class Mt extends El{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dn.x,dn.y).multiplyScalar(-e/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-e/dn.z)}getViewSize(e,t){return this.getViewBounds(e,oo,lo),t.subVectors(lo,oo)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,jn=1;class Cd extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mt($n,jn,e,t);r.layers=this.layers,this.add(r);const a=new Mt($n,jn,e,t);a.layers=this.layers,this.add(a);const s=new Mt($n,jn,e,t);s.layers=this.layers,this.add(s);const o=new Mt($n,jn,e,t);o.layers=this.layers,this.add(o);const l=new Mt($n,jn,e,t);l.layers=this.layers,this.add(l);const c=new Mt($n,jn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class bl extends St{constructor(e,t,n,r,a,s,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pd extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kt(5,5,5),a=new mn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:un});a.uniforms.tEquirect.value=t;const s=new ze(r,a),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Nt),new Cd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const ca=new C,Id=new C,Ld=new Pe;class bn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ca.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ld.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Pi,Zi=new C;class bs{constructor(e=new bn,t=new bn,n=new bn,r=new bn,a=new bn,s=new bn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],p=r[6],f=r[7],m=r[8],v=r[9],g=r[10],h=r[11],u=r[12],E=r[13],S=r[14],b=r[15];if(n[0].setComponents(l-a,f-c,h-m,b-u).normalize(),n[1].setComponents(l+a,f+c,h+m,b+u).normalize(),n[2].setComponents(l+s,f+d,h+v,b+E).normalize(),n[3].setComponents(l-s,f-d,h-v,b-E).normalize(),n[4].setComponents(l-o,f-p,h-g,b-S).normalize(),t===Qt)n[5].setComponents(l+o,f+p,h+g,b+S).normalize();else if(t===xr)n[5].setComponents(o,p,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zi.x=r.normal.x>0?e.max.x:e.min.x,Zi.y=r.normal.y>0?e.max.y:e.min.y,Zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Dd(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],g=p[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,p[f]=g)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const g=p[m];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class ui extends ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,p=e/o,f=t/l,m=[],v=[],g=[],h=[];for(let u=0;u<d;u++){const E=u*f-s;for(let S=0;S<c;S++){const b=S*p-a;v.push(b,-E,0),g.push(0,0,1),h.push(S/o),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const S=E+c*u,b=E+c*(u+1),L=E+1+c*(u+1),A=E+1+c*u;m.push(S,b,A),m.push(b,L,A)}this.setIndex(m),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,rh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ah=`vec3 transformedNormal = objectNormal;
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
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",hh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ih=`PhysicalMaterial material;
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
#endif`,Lh=`struct PhysicalMaterial {
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
}`,Dh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
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
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,su=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vu=`float getShadowMask() {
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
}`,xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
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
#endif`,yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Su=`#ifdef USE_SKINNING
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
#endif`,Eu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,Ru=`#ifdef USE_TRANSMISSION
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uu=`uniform sampler2D t2D;
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
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`#include <common>
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
}`,zu=`#if DEPTH_PACKING == 3200
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
}`,Hu=`#define DISTANCE
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
}`,Gu=`#define DISTANCE
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`uniform float scale;
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
}`,qu=`uniform vec3 diffuse;
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
}`,Yu=`#include <common>
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
}`,Ku=`uniform vec3 diffuse;
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
}`,$u=`#define LAMBERT
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
}`,ju=`#define LAMBERT
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
}`,Zu=`#define MATCAP
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
}`,Ju=`#define MATCAP
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
}`,Qu=`#define NORMAL
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
}`,ef=`#define NORMAL
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
}`,tf=`#define PHONG
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
}`,nf=`#define PHONG
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
}`,rf=`#define STANDARD
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
}`,af=`#define STANDARD
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
}`,sf=`#define TOON
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
}`,of=`#define TOON
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
}`,lf=`uniform float size;
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
}`,cf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,hf=`uniform vec3 color;
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
}`,uf=`uniform float rotation;
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
}`,ff=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:Fd,alphamap_pars_fragment:Od,alphatest_fragment:kd,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:Hd,batching_pars_vertex:Gd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:eh,color_pars_vertex:th,color_vertex:nh,common:ih,cube_uv_reflection_fragment:rh,defaultnormal_vertex:ah,displacementmap_pars_vertex:sh,displacementmap_vertex:oh,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,colorspace_fragment:dh,colorspace_pars_fragment:hh,envmap_fragment:uh,envmap_common_pars_fragment:fh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Th,envmap_vertex:gh,fog_vertex:_h,fog_pars_vertex:vh,fog_fragment:xh,fog_pars_fragment:Mh,gradientmap_pars_fragment:yh,lightmap_pars_fragment:Sh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:bh,lights_pars_begin:wh,lights_toon_fragment:Ah,lights_toon_pars_fragment:Rh,lights_phong_fragment:Ch,lights_phong_pars_fragment:Ph,lights_physical_fragment:Ih,lights_physical_pars_fragment:Lh,lights_fragment_begin:Dh,lights_fragment_maps:Uh,lights_fragment_end:Nh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:kh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:Hh,map_particle_fragment:Gh,map_particle_pars_fragment:Vh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:Xh,morphinstance_vertex:qh,morphcolor_vertex:Yh,morphnormal_vertex:Kh,morphtarget_pars_vertex:$h,morphtarget_vertex:jh,normal_fragment_begin:Zh,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:eu,normal_vertex:tu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:ru,clearcoat_pars_fragment:au,iridescence_pars_fragment:su,opaque_fragment:ou,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:du,dithering_fragment:hu,dithering_pars_fragment:uu,roughnessmap_fragment:fu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:_u,shadowmask_pars_fragment:vu,skinbase_vertex:xu,skinning_pars_vertex:Mu,skinning_vertex:yu,skinnormal_vertex:Su,specularmap_fragment:Eu,specularmap_pars_fragment:bu,tonemapping_fragment:wu,tonemapping_pars_fragment:Tu,transmission_fragment:Au,transmission_pars_fragment:Ru,uv_pars_fragment:Cu,uv_pars_vertex:Pu,uv_vertex:Iu,worldpos_vertex:Lu,background_vert:Du,background_frag:Uu,backgroundCube_vert:Nu,backgroundCube_frag:Fu,cube_vert:Ou,cube_frag:ku,depth_vert:Bu,depth_frag:zu,distanceRGBA_vert:Hu,distanceRGBA_frag:Gu,equirect_vert:Vu,equirect_frag:Wu,linedashed_vert:Xu,linedashed_frag:qu,meshbasic_vert:Yu,meshbasic_frag:Ku,meshlambert_vert:$u,meshlambert_frag:ju,meshmatcap_vert:Zu,meshmatcap_frag:Ju,meshnormal_vert:Qu,meshnormal_frag:ef,meshphong_vert:tf,meshphong_frag:nf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:sf,meshtoon_frag:of,points_vert:lf,points_frag:cf,shadow_vert:df,shadow_frag:hf,sprite_vert:uf,sprite_frag:ff},te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Ht={basic:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:mt([te.points,te.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:mt([te.common,te.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:mt([te.sprite,te.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:mt([te.common,te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:mt([te.lights,te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ht.physical={uniforms:mt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ji={r:0,b:0,g:0},Sn=new Wt,pf=new tt;function mf(i,e,t,n,r,a,s){const o=new Ie(0);let l=a===!0?0:1,c,d,p=null,f=0,m=null;function v(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function g(E){let S=!1;const b=v(E);b===null?u(o,l):b&&b.isColor&&(u(b,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(E,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===Ar)?(d===void 0&&(d=new ze(new kt(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:li(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Sn.copy(S.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pf.makeRotationFromEuler(Sn)),d.material.toneMapped=Xe.getTransfer(b.colorSpace)!==et,(p!==b||f!==b.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=b,f=b.version,m=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ze(new ui(2,2),new mn({name:"BackgroundMaterial",uniforms:li(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==et,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||f!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=b,f=b.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,S){E.getRGB(Ji,Sl(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,S,s)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:g,addToRenderList:h}}function gf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(_,x,F,U,z){let X=!1;const H=p(U,F,x);a!==H&&(a=H,c(a.object)),X=m(_,U,F,z),X&&v(_,U,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,b(_,x,F,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function p(_,x,F){const U=F.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let X=z[x.id];X===void 0&&(X={},z[x.id]=X);let H=X[U];return H===void 0&&(H=f(l()),X[U]=H),H}function f(_){const x=[],F=[],U=[];for(let z=0;z<t;z++)x[z]=0,F[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:F,attributeDivisors:U,object:_,attributes:{},index:null}}function m(_,x,F,U){const z=a.attributes,X=x.attributes;let H=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){const ae=z[G];let ge=X[G];if(ge===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;H++}return a.attributesNum!==H||a.index!==U}function v(_,x,F,U){const z={},X=x.attributes;let H=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){let ae=X[G];ae===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),z[G]=ge,H++}a.attributes=z,a.attributesNum=H,a.index=U}function g(){const _=a.newAttributes;for(let x=0,F=_.length;x<F;x++)_[x]=0}function h(_){u(_,0)}function u(_,x){const F=a.newAttributes,U=a.enabledAttributes,z=a.attributeDivisors;F[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),z[_]!==x&&(i.vertexAttribDivisor(_,x),z[_]=x)}function E(){const _=a.newAttributes,x=a.enabledAttributes;for(let F=0,U=x.length;F<U;F++)x[F]!==_[F]&&(i.disableVertexAttribArray(F),x[F]=0)}function S(_,x,F,U,z,X,H){H===!0?i.vertexAttribIPointer(_,x,F,z,X):i.vertexAttribPointer(_,x,F,U,z,X)}function b(_,x,F,U){g();const z=U.attributes,X=F.getAttributes(),H=x.defaultAttributeValues;for(const $ in X){const G=X[$];if(G.location>=0){let le=z[$];if(le===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){const ae=le.normalized,ge=le.itemSize,He=e.get(le);if(He===void 0)continue;const qe=He.buffer,q=He.type,J=He.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||le.gpuType===gs;if(le.isInterleavedBufferAttribute){const ce=le.data,Ae=ce.stride,ye=le.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)u(G.location+Ne,ce.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)h(G.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ne=0;Ne<G.locationSize;Ne++)S(G.location+Ne,ge/G.locationSize,q,ae,Ae*J,(ye+ge/G.locationSize*Ne)*J,pe)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)u(G.location+ce,le.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<G.locationSize;ce++)h(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ce=0;ce<G.locationSize;ce++)S(G.location+ce,ge/G.locationSize,q,ae,ge*J,ge/G.locationSize*ce*J,pe)}}else if(H!==void 0){const ae=H[$];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(G.location,ae);break;case 3:i.vertexAttrib3fv(G.location,ae);break;case 4:i.vertexAttrib4fv(G.location,ae);break;default:i.vertexAttrib1fv(G.location,ae)}}}}E()}function L(){P();for(const _ in n){const x=n[_];for(const F in x){const U=x[F];for(const z in U)d(U[z].object),delete U[z];delete x[F]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const x=n[_.id];for(const F in x){const U=x[F];for(const z in U)d(U[z].object),delete U[z];delete x[F]}delete n[_.id]}function T(_){for(const x in n){const F=n[x];if(F[_.id]===void 0)continue;const U=F[_.id];for(const z in U)d(U[z].object),delete U[z];delete F[_.id]}}function P(){W(),s=!0,a!==r&&(a=r,c(a.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:h,disableUnusedAttributes:E}}function _f(i,e,t){let n;function r(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,p){p!==0&&(i.drawArraysInstanced(n,c,d,p),t.update(d,n,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v];t.update(m,n,1)}function l(c,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,p);let v=0;for(let g=0;g<p;g++)v+=d[g];for(let g=0;g<f.length;g++)t.update(v,n,f[g])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Ot&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jt&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:L,maxSamples:A}}function xf(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new bn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,g=p.clipIntersection,h=p.clipShadows,u=i.get(p);if(!r||v===null||v.length===0||a&&!h)a?d(null):c();else{const E=a?0:n,S=E*4;let b=u.clippingState||null;l.value=b,b=d(v,f,S,m);for(let L=0;L!==S;++L)b[L]=t[L];u.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,m,v){const g=p!==null?p.length:0;let h=null;if(g!==0){if(h=l.value,v!==!0||h===null){const u=m+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<u)&&(h=new Float32Array(u));for(let S=0,b=m;S!==g;++S,b+=4)s.copy(p[S]).applyMatrix4(E,o),s.normal.toArray(h,b),h[b+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function Mf(i){let e=new WeakMap;function t(s,o){return o===Pa?s.mapping=ri:o===Ia&&(s.mapping=ai),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Pa||o===Ia)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Pd(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Tl extends El{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jn=4,co=[.125,.215,.35,.446,.526,.582],An=20,da=new Tl,ho=new Ie;let ha=null,ua=0,fa=0,pa=!1;const wn=(1+Math.sqrt(5))/2,Zn=1/wn,uo=[new C(-wn,Zn,0),new C(wn,Zn,0),new C(-Zn,0,wn),new C(Zn,0,wn),new C(0,wn,-Zn),new C(0,wn,Zn),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha,ua,fa),this._renderer.xr.enabled=pa,e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ti,format:Ot,colorSpace:gn,depthBuffer:!1},r=po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yf(a)),this._blurMaterial=Sf(a,e,t)}return r}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,r){const o=new Mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(ho),d.toneMapping=fn,d.autoClear=!1;const m=new xl({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),v=new ze(new kt,m);let g=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,g=!0):(m.color.copy(ho),g=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):E===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const S=this._cubeSize;Qi(r,E*S,u>2?S:0,S,S),d.setRenderTarget(r),g&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ri||e.mapping===ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ze(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=uo[(r-a-1)%uo.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new ze(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*An-1),g=a/v,h=isFinite(a)?1+Math.floor(d*g):An;h>An&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${An}`);const u=[];let E=0;for(let T=0;T<An;++T){const P=T/g,W=Math.exp(-P*P/2);u.push(W),T===0?E+=W:T<h&&(E+=2*W)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const b=this._sizeLods[r],L=3*b*(r>S-Jn?r-S+Jn:0),A=4*(this._cubeSize-b);Qi(t,L,A,3*b,2*b),l.setRenderTarget(t),l.render(p,da)}}function yf(i){const e=[],t=[],n=[];let r=i;const a=i-Jn+1+co.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-Jn?l=co[s-i+Jn-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,v=6,g=3,h=2,u=1,E=new Float32Array(g*v*m),S=new Float32Array(h*v*m),b=new Float32Array(u*v*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,P=A>2?0:-1,W=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(W,g*v*A),S.set(f,h*v*A);const _=[A,A,A,A,A,A];b.set(_,u*v*A)}const L=new ht;L.setAttribute("position",new Vt(E,g)),L.setAttribute("uv",new Vt(S,h)),L.setAttribute("faceIndex",new Vt(b,u)),e.push(L),r>Jn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function po(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sf(i,e,t){const n=new Float32Array(An),r=new C(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ws(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function mo(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ws(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function go(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function ws(){return`

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
	`}function Ef(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pa||l===Ia,d=l===ri||l===ai;if(c||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fo(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new fo(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wf(i,e,t,n){const r={},a=new WeakMap;function s(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let h=0,u=g.length;h<u;h++)e.remove(g[h])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const g=m[v];for(let h=0,u=g.length;h<u;h++)e.update(g[h],i.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,v=p.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let S=0,b=E.length;S<b;S+=3){const L=E[S+0],A=E[S+1],T=E[S+2];f.push(L,A,A,T,T,L)}}else if(v!==void 0){const E=v.array;g=v.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const L=S+0,A=S+1,T=S+2;f.push(L,A,A,T,T,L)}}else return;const h=new(pl(f)?yl:Ml)(f,1);h.version=g;const u=a.get(p);u&&e.remove(u),a.set(p,h)}function d(p){const f=a.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Tf(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,a,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,a,f*s,v),t.update(m,n,v))}function d(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,v);let h=0;for(let u=0;u<v;u++)h+=m[u];t.update(h,n,1)}function p(f,m,v,g){if(v===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<f.length;u++)c(f[u]/s,m[u],g[u]);else{h.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,g,0,v);let u=0;for(let E=0;E<v;E++)u+=m[E];for(let E=0;E<g.length;E++)t.update(u,n,g[E])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Af(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rf(i,e,t){const n=new WeakMap,r=new $e;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),g===!0&&(b=2),h===!0&&(b=3);let L=o.attributes.position.count*b,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*p),P=new gl(T,L,A,p);P.type=Jt,P.needsUpdate=!0;const W=b*4;for(let x=0;x<p;x++){const F=u[x],U=E[x],z=S[x],X=L*A*4*x;for(let H=0;H<F.count;H++){const $=H*W;v===!0&&(r.fromBufferAttribute(F,H),T[X+$+0]=r.x,T[X+$+1]=r.y,T[X+$+2]=r.z,T[X+$+3]=0),g===!0&&(r.fromBufferAttribute(U,H),T[X+$+4]=r.x,T[X+$+5]=r.y,T[X+$+6]=r.z,T[X+$+7]=0),h===!0&&(r.fromBufferAttribute(z,H),T[X+$+8]=r.x,T[X+$+9]=r.y,T[X+$+10]=r.z,T[X+$+11]=z.itemSize===4?r.w:1)}}f={count:p,texture:P,size:new Le(L,A)},n.set(o,f),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let h=0;h<c.length;h++)v+=c[h];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Cf(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Al extends St{constructor(e,t,n,r,a,s,o,l,c,d=ei){if(d!==ei&&d!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ei&&(n=In),n===void 0&&d===oi&&(n=si),super(null,r,a,s,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rl=new St,_o=new Al(1,1),Cl=new gl,Pl=new pd,Il=new bl,vo=[],xo=[],Mo=new Float32Array(16),yo=new Float32Array(9),So=new Float32Array(4);function fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=vo[r];if(a===void 0&&(a=new Float32Array(r),vo[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cr(i,e){let t=xo[e];t===void 0&&(t=new Int32Array(e),xo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),lt(t,n)}}function Nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;yo.set(n),i.uniformMatrix3fv(this.addr,!1,yo),lt(t,n)}}function Ff(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Mo.set(n),i.uniformMatrix4fv(this.addr,!1,Mo),lt(t,n)}}function Of(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function Xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(_o.compareFunction=fl,a=_o):a=Rl,t.setTexture2D(e||a,r)}function qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pl,r)}function Yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Il,r)}function Kf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cl,r)}function $f(i){switch(i){case 5126:return Pf;case 35664:return If;case 35665:return Lf;case 35666:return Df;case 35674:return Uf;case 35675:return Nf;case 35676:return Ff;case 5124:case 35670:return Of;case 35667:case 35671:return kf;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return Gf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Kf}}function jf(i,e){i.uniform1fv(this.addr,e)}function Zf(i,e){const t=fi(e,this.size,2);i.uniform2fv(this.addr,t)}function Jf(i,e){const t=fi(e,this.size,3);i.uniform3fv(this.addr,t)}function Qf(i,e){const t=fi(e,this.size,4);i.uniform4fv(this.addr,t)}function ep(i,e){const t=fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tp(i,e){const t=fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function np(i,e){const t=fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ip(i,e){i.uniform1iv(this.addr,e)}function rp(i,e){i.uniform2iv(this.addr,e)}function ap(i,e){i.uniform3iv(this.addr,e)}function sp(i,e){i.uniform4iv(this.addr,e)}function op(i,e){i.uniform1uiv(this.addr,e)}function lp(i,e){i.uniform2uiv(this.addr,e)}function cp(i,e){i.uniform3uiv(this.addr,e)}function dp(i,e){i.uniform4uiv(this.addr,e)}function hp(i,e,t){const n=this.cache,r=e.length,a=Cr(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Rl,a[s])}function up(i,e,t){const n=this.cache,r=e.length,a=Cr(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Pl,a[s])}function fp(i,e,t){const n=this.cache,r=e.length,a=Cr(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Il,a[s])}function pp(i,e,t){const n=this.cache,r=e.length,a=Cr(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Cl,a[s])}function mp(i){switch(i){case 5126:return jf;case 35664:return Zf;case 35665:return Jf;case 35666:return Qf;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return sp;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$f(t.type)}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mp(t.type)}}class vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Eo(i,e){i.seq.push(e),i.map[e.id]=e}function xp(i,e,t){const n=i.name,r=n.length;for(ma.lastIndex=0;;){const a=ma.exec(n),s=ma.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Eo(t,c===void 0?new gp(o,i,e):new _p(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new vp(o),Eo(t,p)),t=p}}}class ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);xp(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function bo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mp=37297;let yp=0;function Sp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Ep(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===_r?n="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case Rr:return[n,"LinearTransferOETF"];case zt:case Ss:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sp(i.getShaderSource(e),s)}else return r}function bp(i,e){const t=Ep(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wp(i,e){let t;switch(e){case zc:t="Linear";break;case Hc:t="Reinhard";break;case Gc:t="Cineon";break;case Vc:t="ACESFilmic";break;case Xc:t="AgX";break;case qc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const er=new C;function Tp(){Xe.getLuminanceCoefficients(er);const i=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ap(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function Rp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ei(i){return i!==""}function To(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(i){return i.replace(Pp,Lp)}const Ip=new Map;function Lp(i,e){let t=Ce[e];if(t===void 0){const n=Ip.get(e);if(n!==void 0)t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return os(t)}const Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(i){return i.replace(Dp,Up)}function Up(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Co(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Np(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Fp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Op(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case kc:e="ENVMAP_BLENDING_MIX";break;case Bc:e="ENVMAP_BLENDING_ADD";break}return e}function Bp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zp(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Np(t),c=Fp(t),d=Op(t),p=kp(t),f=Bp(t),m=Ap(t),v=Rp(a),g=r.createProgram();let h,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ei).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ei).join(`
`),u.length>0&&(u+=`
`)):(h=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),u=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==fn?wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,bp("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),s=os(s),s=To(s,t),s=Ao(s,t),o=os(o),o=To(o,t),o=Ao(o,t),s=Ro(s),o=Ro(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",t.glslVersion===Xs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+h+s,b=E+u+o,L=bo(r,r.VERTEX_SHADER,S),A=bo(r,r.FRAGMENT_SHADER,b);r.attachShader(g,L),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(x){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(L).trim(),z=r.getShaderInfoLog(A).trim();let X=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,A);else{const $=wo(r,L,"vertex"),G=wo(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+F+`
`+$+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||z==="")&&(H=!1);H&&(x.diagnostics={runnable:X,programLog:F,vertexShader:{log:U,prefix:h},fragmentShader:{log:z,prefix:u}})}r.deleteShader(L),r.deleteShader(A),P=new ur(r,g),W=Cp(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(g,Mp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=A,this}let Hp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vp(e),t.set(e,n)),n}}class Vp{constructor(e){this.id=Hp++,this.code=e,this.usedTimes=0}}function Wp(i,e,t,n,r,a,s){const o=new _l,l=new Gp,c=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return c.add(_),_===0?"uv":`uv${_}`}function u(_,x,F,U,z){const X=U.fog,H=z.geometry,$=_.isMeshStandardMaterial?U.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),le=G&&G.mapping===Ar?G.image.height:null,ae=g[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,He=ge!==void 0?ge.length:0;let qe=0;H.morphAttributes.position!==void 0&&(qe=1),H.morphAttributes.normal!==void 0&&(qe=2),H.morphAttributes.color!==void 0&&(qe=3);let q,J,pe,ce;if(ae){const _t=Ht[ae];q=_t.vertexShader,J=_t.fragmentShader}else q=_.vertexShader,J=_.fragmentShader,l.update(_),pe=l.getVertexShaderID(_),ce=l.getFragmentShaderID(_);const Ae=i.getRenderTarget(),ye=z.isInstancedMesh===!0,Ne=z.isBatchedMesh===!0,Ke=!!_.map,Fe=!!_.matcap,R=!!G,Et=!!_.aoMap,De=!!_.lightMap,ke=!!_.bumpMap,Ee=!!_.normalMap,Je=!!_.displacementMap,Te=!!_.emissiveMap,w=!!_.metalnessMap,M=!!_.roughnessMap,O=_.anisotropy>0,K=_.clearcoat>0,Z=_.dispersion>0,Y=_.iridescence>0,_e=_.sheen>0,ne=_.transmission>0,de=O&&!!_.anisotropyMap,Be=K&&!!_.clearcoatMap,Q=K&&!!_.clearcoatNormalMap,he=K&&!!_.clearcoatRoughnessMap,be=Y&&!!_.iridescenceMap,we=Y&&!!_.iridescenceThicknessMap,ue=_e&&!!_.sheenColorMap,Ue=_e&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Ze=!!_.specularColorMap,I=!!_.specularIntensityMap,se=ne&&!!_.transmissionMap,V=ne&&!!_.thicknessMap,j=!!_.gradientMap,ie=!!_.alphaMap,oe=_.alphaTest>0,Oe=!!_.alphaHash,rt=!!_.extensions;let gt=fn;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ge={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:J,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:Ne,batchingColor:Ne&&z._colorsTexture!==null,instancing:ye,instancingColor:ye&&z.instanceColor!==null,instancingMorph:ye&&z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:gn,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:Fe,envMap:R,envMapMode:R&&G.mapping,envMapCubeUVHeight:le,aoMap:Et,lightMap:De,bumpMap:ke,normalMap:Ee,displacementMap:m&&Je,emissiveMap:Te,normalMapObjectSpace:Ee&&_.normalMapType===jc,normalMapTangentSpace:Ee&&_.normalMapType===ul,metalnessMap:w,roughnessMap:M,anisotropy:O,anisotropyMap:de,clearcoat:K,clearcoatMap:Be,clearcoatNormalMap:Q,clearcoatRoughnessMap:he,dispersion:Z,iridescence:Y,iridescenceMap:be,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:ue,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Ze,specularIntensityMap:I,transmission:ne,transmissionMap:se,thicknessMap:V,gradientMap:j,opaque:_.transparent===!1&&_.blending===Qn&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:oe,alphaHash:Oe,combine:_.combine,mapUv:Ke&&h(_.map.channel),aoMapUv:Et&&h(_.aoMap.channel),lightMapUv:De&&h(_.lightMap.channel),bumpMapUv:ke&&h(_.bumpMap.channel),normalMapUv:Ee&&h(_.normalMap.channel),displacementMapUv:Je&&h(_.displacementMap.channel),emissiveMapUv:Te&&h(_.emissiveMap.channel),metalnessMapUv:w&&h(_.metalnessMap.channel),roughnessMapUv:M&&h(_.roughnessMap.channel),anisotropyMapUv:de&&h(_.anisotropyMap.channel),clearcoatMapUv:Be&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&h(_.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&h(_.sheenRoughnessMap.channel),specularMapUv:Re&&h(_.specularMap.channel),specularColorMapUv:Ze&&h(_.specularColorMap.channel),specularIntensityMapUv:I&&h(_.specularIntensityMap.channel),transmissionMapUv:se&&h(_.transmissionMap.channel),thicknessMapUv:V&&h(_.thicknessMap.channel),alphaMapUv:ie&&h(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ee||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Ke||ie),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function E(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)x.push(F),x.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(S(x,_),b(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function S(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function b(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const x=g[_.type];let F;if(x){const U=Ht[x];F=Td.clone(U.uniforms)}else F=_.uniforms;return F}function A(_,x){let F;for(let U=0,z=d.length;U<z;U++){const X=d[U];if(X.cacheKey===x){F=X,++F.usedTimes;break}}return F===void 0&&(F=new zp(i,x,_,a),d.push(F)),F}function T(_){if(--_.usedTimes===0){const x=d.indexOf(_);d[x]=d[d.length-1],d.pop(),_.destroy()}}function P(_){l.remove(_)}function W(){l.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:L,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:d,dispose:W}}function Xp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Io(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(p,f,m,v,g,h){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:g,group:h},i[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=p.renderOrder,u.z=g,u.group=h),e++,u}function o(p,f,m,v,g,h){const u=s(p,f,m,v,g,h);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(p,f,m,v,g,h){const u=s(p,f,m,v,g,h);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(p,f){t.length>1&&t.sort(p||qp),n.length>1&&n.sort(f||Po),r.length>1&&r.sort(f||Po)}function d(){for(let p=e,f=i.length;p<f;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function Yp(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Io,i.set(n,[s])):r>=a.length?(s=new Io,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jp=0;function Zp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jp(i){const e=new Kp,t=$p(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,a=new tt,s=new tt;function o(c){let d=0,p=0,f=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let m=0,v=0,g=0,h=0,u=0,E=0,S=0,b=0,L=0,A=0,T=0;c.sort(Zp);for(let W=0,_=c.length;W<_;W++){const x=c[W],F=x.color,U=x.intensity,z=x.distance,X=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)d+=F.r*U,p+=F.g*U,f+=F.b*U;else if(x.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(x.sh.coefficients[H],U);T++}else if(x.isDirectionalLight){const H=e.get(x);if(H.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const $=x.shadow,G=t.get(x);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=x.shadow.matrix,E++}n.directional[m]=H,m++}else if(x.isSpotLight){const H=e.get(x);H.position.setFromMatrixPosition(x.matrixWorld),H.color.copy(F).multiplyScalar(U),H.distance=z,H.coneCos=Math.cos(x.angle),H.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),H.decay=x.decay,n.spot[g]=H;const $=x.shadow;if(x.map&&(n.spotLightMap[L]=x.map,L++,$.updateMatrices(x),x.castShadow&&A++),n.spotLightMatrix[g]=$.matrix,x.castShadow){const G=t.get(x);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=X,b++}g++}else if(x.isRectAreaLight){const H=e.get(x);H.color.copy(F).multiplyScalar(U),H.halfWidth.set(x.width*.5,0,0),H.halfHeight.set(0,x.height*.5,0),n.rectArea[h]=H,h++}else if(x.isPointLight){const H=e.get(x);if(H.color.copy(x.color).multiplyScalar(x.intensity),H.distance=x.distance,H.decay=x.decay,x.castShadow){const $=x.shadow,G=t.get(x);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=x.shadow.matrix,S++}n.point[v]=H,v++}else if(x.isHemisphereLight){const H=e.get(x);H.skyColor.copy(x.color).multiplyScalar(U),H.groundColor.copy(x.groundColor).multiplyScalar(U),n.hemi[u]=H,u++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==h||P.hemiLength!==u||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==b||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=h,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=h,P.hemiLength=u,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=b,P.numSpotMaps=L,P.numLightProbes=T,n.version=jp++)}function l(c,d){let p=0,f=0,m=0,v=0,g=0;const h=d.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const S=c[u];if(S.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),p++}else if(S.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),m++}else if(S.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),s.identity(),a.copy(S.matrixWorld),a.premultiply(h),s.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),f++}else if(S.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:n}}function Lo(i){const e=new Jp(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Qp(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Lo(i),e.set(r,[o])):a>=s.length?(o=new Lo(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class em extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tm extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`;function rm(i,e,t){let n=new bs;const r=new Le,a=new Le,s=new $e,o=new em({depthPacking:$c}),l=new tm,c={},d=t.maxTextureSize,p={[pn]:yt,[yt]:pn,[Gt]:Gt},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:nm,fragmentShader:im}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new ht;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ze(v,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let u=this.type;this.render=function(A,T,P){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;const W=i.getRenderTarget(),_=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),F=i.state;F.setBlending(un),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=u!==Zt&&this.type===Zt,z=u===Zt&&this.type!==Zt;for(let X=0,H=A.length;X<H;X++){const $=A[X],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const le=G.getFrameExtents();if(r.multiply(le),a.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/le.x),r.x=a.x*le.x,G.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/le.y),r.y=a.y*le.y,G.mapSize.y=a.y)),G.map===null||U===!0||z===!0){const ge=this.type!==Zt?{minFilter:Pt,magFilter:Pt}:{};G.map!==null&&G.map.dispose(),G.map=new Ln(r.x,r.y,ge),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ae=G.getViewportCount();for(let ge=0;ge<ae;ge++){const He=G.getViewport(ge);s.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),F.viewport(s),G.updateMatrices($,ge),n=G.getFrustum(),b(T,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Zt&&E(G,P),G.needsUpdate=!1}u=this.type,h.needsUpdate=!1,i.setRenderTarget(W,_,x)};function E(A,T){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ln(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,m,g,null)}function S(A,T,P,W){let _=null;const x=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(x!==void 0)_=x;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=_.uuid,U=T.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let X=z[U];X===void 0&&(X=_.clone(),z[U]=X,T.addEventListener("dispose",L)),_=X}if(_.visible=T.visible,_.wireframe=T.wireframe,W===Zt?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:p[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=P}return _}function b(A,T,P,W,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Zt)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const U=e.update(A),z=A.material;if(Array.isArray(z)){const X=U.groups;for(let H=0,$=X.length;H<$;H++){const G=X[H],le=z[G.materialIndex];if(le&&le.visible){const ae=S(A,le,W,_);A.onBeforeShadow(i,A,T,P,U,ae,G),i.renderBufferDirect(P,null,U,ae,A,G),A.onAfterShadow(i,A,T,P,U,ae,G)}}}else if(z.visible){const X=S(A,z,W,_);A.onBeforeShadow(i,A,T,P,U,X,null),i.renderBufferDirect(P,null,U,X,A,null),A.onAfterShadow(i,A,T,P,U,X,null)}}const F=A.children;for(let U=0,z=F.length;U<z;U++)b(F[U],T,P,W,_)}function L(A){A.target.removeEventListener("dispose",L);for(const P in c){const W=c[P],_=A.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const am={[Ea]:ba,[wa]:Ra,[Ta]:Ca,[ii]:Aa,[ba]:Ea,[Ra]:wa,[Ca]:Ta,[Aa]:ii};function sm(i){function e(){let I=!1;const se=new $e;let V=null;const j=new $e(0,0,0,0);return{setMask:function(ie){V!==ie&&!I&&(i.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){I=ie},setClear:function(ie,oe,Oe,rt,gt){gt===!0&&(ie*=rt,oe*=rt,Oe*=rt),se.set(ie,oe,Oe,rt),j.equals(se)===!1&&(i.clearColor(ie,oe,Oe,rt),j.copy(se))},reset:function(){I=!1,V=null,j.set(-1,0,0,0)}}}function t(){let I=!1,se=!1,V=null,j=null,ie=null;return{setReversed:function(oe){se=oe},setTest:function(oe){oe?pe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(oe){V!==oe&&!I&&(i.depthMask(oe),V=oe)},setFunc:function(oe){if(se&&(oe=am[oe]),j!==oe){switch(oe){case Ea:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case ii:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=oe}},setLocked:function(oe){I=oe},setClear:function(oe){ie!==oe&&(i.clearDepth(oe),ie=oe)},reset:function(){I=!1,V=null,j=null,ie=null}}}function n(){let I=!1,se=null,V=null,j=null,ie=null,oe=null,Oe=null,rt=null,gt=null;return{setTest:function(Ge){I||(Ge?pe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!I&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,_t,Xt){(V!==Ge||j!==_t||ie!==Xt)&&(i.stencilFunc(Ge,_t,Xt),V=Ge,j=_t,ie=Xt)},setOp:function(Ge,_t,Xt){(oe!==Ge||Oe!==_t||rt!==Xt)&&(i.stencilOp(Ge,_t,Xt),oe=Ge,Oe=_t,rt=Xt)},setLocked:function(Ge){I=Ge},setClear:function(Ge){gt!==Ge&&(i.clearStencil(Ge),gt=Ge)},reset:function(){I=!1,se=null,V=null,j=null,ie=null,oe=null,Oe=null,rt=null,gt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,l=new WeakMap;let c={},d={},p=new WeakMap,f=[],m=null,v=!1,g=null,h=null,u=null,E=null,S=null,b=null,L=null,A=new Ie(0,0,0),T=0,P=!1,W=null,_=null,x=null,F=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),X=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=H>=2);let G=null,le={};const ae=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),He=new $e().fromArray(ae),qe=new $e().fromArray(ge);function q(I,se,V,j){const ie=new Uint8Array(4),oe=i.createTexture();i.bindTexture(I,oe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<V;Oe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return oe}const J={};J[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),pe(i.DEPTH_TEST),a.setFunc(ii),De(!1),ke(Bs),pe(i.CULL_FACE),R(un);function pe(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function ce(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Ae(I,se){return d[I]!==se?(i.bindFramebuffer(I,se),d[I]=se,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function ye(I,se){let V=f,j=!1;if(I){V=p.get(se),V===void 0&&(V=[],p.set(se,V));const ie=I.textures;if(V.length!==ie.length||V[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Oe=ie.length;oe<Oe;oe++)V[oe]=i.COLOR_ATTACHMENT0+oe;V.length=ie.length,j=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,j=!0);j&&i.drawBuffers(V)}function Ne(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Ke={[Tn]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};Ke[Ec]=i.MIN,Ke[bc]=i.MAX;const Fe={[wc]:i.ZERO,[Tc]:i.ONE,[Ac]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Ic]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Lc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Uc]:i.CONSTANT_COLOR,[Nc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Oc]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,se,V,j,ie,oe,Oe,rt,gt,Ge){if(I===un){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),I!==Mc){if(I!==g||Ge!==P){if((h!==Tn||S!==Tn)&&(i.blendEquation(i.FUNC_ADD),h=Tn,S=Tn),Ge)switch(I){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case Hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,E=null,b=null,L=null,A.set(0,0,0),T=0,g=I,P=Ge}return}ie=ie||se,oe=oe||V,Oe=Oe||j,(se!==h||ie!==S)&&(i.blendEquationSeparate(Ke[se],Ke[ie]),h=se,S=ie),(V!==u||j!==E||oe!==b||Oe!==L)&&(i.blendFuncSeparate(Fe[V],Fe[j],Fe[oe],Fe[Oe]),u=V,E=j,b=oe,L=Oe),(rt.equals(A)===!1||gt!==T)&&(i.blendColor(rt.r,rt.g,rt.b,gt),A.copy(rt),T=gt),g=I,P=!1}function Et(I,se){I.side===Gt?ce(i.CULL_FACE):pe(i.CULL_FACE);let V=I.side===yt;se&&(V=!V),De(V),I.blending===Qn&&I.transparent===!1?R(un):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;s.setTest(j),j&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){W!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),W=I)}function ke(I){I!==_c?(pe(i.CULL_FACE),I!==_&&(I===Bs?i.cullFace(i.BACK):I===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),_=I}function Ee(I){I!==x&&(X&&i.lineWidth(I),x=I)}function Je(I,se,V){I?(pe(i.POLYGON_OFFSET_FILL),(F!==se||U!==V)&&(i.polygonOffset(se,V),F=se,U=V)):ce(i.POLYGON_OFFSET_FILL)}function Te(I){I?pe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+z-1),G!==I&&(i.activeTexture(I),G=I)}function M(I,se,V){V===void 0&&(G===null?V=i.TEXTURE0+z-1:V=G);let j=le[V];j===void 0&&(j={type:void 0,texture:void 0},le[V]=j),(j.type!==I||j.texture!==se)&&(G!==V&&(i.activeTexture(V),G=V),i.bindTexture(I,se||J[I]),j.type=I,j.texture=se)}function O(){const I=le[G];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){He.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),He.copy(I))}function ue(I){qe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),qe.copy(I))}function Ue(I,se){let V=l.get(se);V===void 0&&(V=new WeakMap,l.set(se,V));let j=V.get(I);j===void 0&&(j=i.getUniformBlockIndex(se,I.name),V.set(I,j))}function Re(I,se){const j=l.get(se).get(I);o.get(se)!==j&&(i.uniformBlockBinding(se,j,I.__bindingPointIndex),o.set(se,j))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,le={},d={},p=new WeakMap,f=[],m=null,v=!1,g=null,h=null,u=null,E=null,S=null,b=null,L=null,A=new Ie(0,0,0),T=0,P=!1,W=null,_=null,x=null,F=null,U=null,He.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:pe,disable:ce,bindFramebuffer:Ae,drawBuffers:ye,useProgram:Ne,setBlending:R,setMaterial:Et,setFlipSided:De,setCullFace:ke,setLineWidth:Ee,setPolygonOffset:Je,setScissorTest:Te,activeTexture:w,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:he,texImage3D:be,updateUBOMapping:Ue,uniformBlockBinding:Re,texStorage2D:Be,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:we,viewport:ue,reset:Ze}}function Do(i,e,t,n){const r=om(n);switch(t){case al:return i*e;case ol:return i*e;case ll:return i*e*2;case cl:return i*e/r.components*r.byteLength;case xs:return i*e/r.components*r.byteLength;case dl:return i*e*2/r.components*r.byteLength;case Ms:return i*e*2/r.components*r.byteLength;case sl:return i*e*3/r.components*r.byteLength;case Ot:return i*e*4/r.components*r.byteLength;case ys:return i*e*4/r.components*r.byteLength;case sr:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(e,8)/2;case ka:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case es:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dr:case ts:case ns:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hl:case is:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rs:case as:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(i){switch(i){case nn:case nl:return{byteLength:1,components:1};case wi:case il:case Ti:return{byteLength:2,components:1};case _s:case vs:return{byteLength:2,components:4};case In:case gs:case Jt:return{byteLength:4,components:1};case rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lm(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return m?new OffscreenCanvas(w,M):Mr("canvas")}function g(w,M,O){let K=1;const Z=Te(w);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*Z.width),_e=Math.floor(K*Z.height);p===void 0&&(p=v(Y,_e));const ne=M?v(Y,_e):p;return ne.width=Y,ne.height=_e,ne.getContext("2d").drawImage(w,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function h(w){return w.generateMipmaps&&w.minFilter!==Pt&&w.minFilter!==Nt}function u(w){i.generateMipmap(w)}function E(w,M,O,K,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),M===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const _e=Z?gr:Xe.getTransfer(K);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=_e===et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(w,M){let O;return w?M===null||M===In||M===si?O=i.DEPTH24_STENCIL8:M===Jt?O=i.DEPTH32F_STENCIL8:M===wi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===In||M===si?O=i.DEPTH_COMPONENT24:M===Jt?O=i.DEPTH_COMPONENT32F:M===wi&&(O=i.DEPTH_COMPONENT16),O}function b(w,M){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Nt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function L(w){const M=w.target;M.removeEventListener("dispose",L),T(M),M.isVideoTexture&&d.delete(M)}function A(w){const M=w.target;M.removeEventListener("dispose",A),W(M)}function T(w){const M=n.get(w);if(M.__webglInit===void 0)return;const O=w.source,K=f.get(O);if(K){const Z=K[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(w),Object.keys(K).length===0&&f.delete(O)}n.remove(w)}function P(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const O=w.source,K=f.get(O);delete K[M.__cacheKey],s.memory.textures--}function W(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Z=0;Z<M.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,Z=O.length;K<Z;K++){const Y=n.get(O[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),s.memory.textures--),n.remove(O[K])}n.remove(w)}let _=0;function x(){_=0}function F(){const w=_;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),_+=1,w}function U(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function z(w,M){const O=n.get(w);if(w.isVideoTexture&&Ee(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(O,w,M);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function X(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){qe(O,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function H(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){qe(O,w,M);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function $(w,M){const O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const G={[La]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},le={[Pt]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[Ui]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},ae={[Zc]:i.NEVER,[id]:i.ALWAYS,[Jc]:i.LESS,[fl]:i.LEQUAL,[Qc]:i.EQUAL,[nd]:i.GEQUAL,[ed]:i.GREATER,[td]:i.NOTEQUAL};function ge(w,M){if(M.type===Jt&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nt||M.magFilter===zr||M.magFilter===Ui||M.magFilter===Pn||M.minFilter===Nt||M.minFilter===zr||M.minFilter===Ui||M.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pt||M.minFilter!==Ui&&M.minFilter!==Pn||M.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function He(w,M){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",L));const K=M.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const Y=U(M);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Z[Y].usedTimes++;const _e=Z[w.__cacheKey];_e!==void 0&&(Z[w.__cacheKey].usedTimes--,_e.usedTimes===0&&P(M)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return O}function qe(w,M,O){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const Z=He(w,M),Y=M.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const ne=Xe.getPrimaries(Xe.workingColorSpace),de=M.colorSpace===hn?null:Xe.getPrimaries(M.colorSpace),Be=M.colorSpace===hn||ne===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Q=g(M.image,!1,r.maxTextureSize);Q=Je(M,Q);const he=a.convert(M.format,M.colorSpace),be=a.convert(M.type);let we=E(M.internalFormat,he,be,M.colorSpace,M.isVideoTexture);ge(K,M);let ue;const Ue=M.mipmaps,Re=M.isVideoTexture!==!0,Ze=_e.__version===void 0||Z===!0,I=Y.dataReady,se=b(M,Q);if(M.isDepthTexture)we=S(M.format===oi,M.type),Ze&&(Re?t.texStorage2D(i.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,he,be,null));else if(M.isDataTexture)if(Ue.length>0){Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,se,we,Ue[0].width,Ue[0].height);for(let V=0,j=Ue.length;V<j;V++)ue=Ue[V],Re?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ue.width,ue.height,he,be,ue.data):t.texImage2D(i.TEXTURE_2D,V,we,ue.width,ue.height,0,he,be,ue.data);M.generateMipmaps=!1}else Re?(Ze&&t.texStorage2D(i.TEXTURE_2D,se,we,Q.width,Q.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,he,be,Q.data)):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,he,be,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Re&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,we,Ue[0].width,Ue[0].height,Q.depth);for(let V=0,j=Ue.length;V<j;V++)if(ue=Ue[V],M.format!==Ot)if(he!==null)if(Re){if(I)if(M.layerUpdates.size>0){const ie=Do(ue.width,ue.height,M.format,M.type);for(const oe of M.layerUpdates){const Oe=ue.data.subarray(oe*ie/ue.data.BYTES_PER_ELEMENT,(oe+1)*ie/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,oe,ue.width,ue.height,1,he,Oe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ue.width,ue.height,Q.depth,he,ue.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,we,ue.width,ue.height,Q.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ue.width,ue.height,Q.depth,he,be,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,we,ue.width,ue.height,Q.depth,0,he,be,ue.data)}else{Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,se,we,Ue[0].width,Ue[0].height);for(let V=0,j=Ue.length;V<j;V++)ue=Ue[V],M.format!==Ot?he!==null?Re?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,V,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ue.width,ue.height,he,be,ue.data):t.texImage2D(i.TEXTURE_2D,V,we,ue.width,ue.height,0,he,be,ue.data)}else if(M.isDataArrayTexture)if(Re){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,we,Q.width,Q.height,Q.depth),I)if(M.layerUpdates.size>0){const V=Do(Q.width,Q.height,M.format,M.type);for(const j of M.layerUpdates){const ie=Q.data.subarray(j*V/Q.data.BYTES_PER_ELEMENT,(j+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,he,be,ie)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,be,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,he,be,Q.data);else if(M.isData3DTexture)Re?(Ze&&t.texStorage3D(i.TEXTURE_3D,se,we,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,be,Q.data)):t.texImage3D(i.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,he,be,Q.data);else if(M.isFramebufferTexture){if(Ze)if(Re)t.texStorage2D(i.TEXTURE_2D,se,we,Q.width,Q.height);else{let V=Q.width,j=Q.height;for(let ie=0;ie<se;ie++)t.texImage2D(i.TEXTURE_2D,ie,we,V,j,0,he,be,null),V>>=1,j>>=1}}else if(Ue.length>0){if(Re&&Ze){const V=Te(Ue[0]);t.texStorage2D(i.TEXTURE_2D,se,we,V.width,V.height)}for(let V=0,j=Ue.length;V<j;V++)ue=Ue[V],Re?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,he,be,ue):t.texImage2D(i.TEXTURE_2D,V,we,he,be,ue);M.generateMipmaps=!1}else if(Re){if(Ze){const V=Te(Q);t.texStorage2D(i.TEXTURE_2D,se,we,V.width,V.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,be,Q)}else t.texImage2D(i.TEXTURE_2D,0,we,he,be,Q);h(M)&&u(K),_e.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function q(w,M,O){if(M.image.length!==6)return;const K=He(w,M),Z=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const _e=Xe.getPrimaries(Xe.workingColorSpace),ne=M.colorSpace===hn?null:Xe.getPrimaries(M.colorSpace),de=M.colorSpace===hn||_e===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,he=[];for(let j=0;j<6;j++)!Be&&!Q?he[j]=g(M.image[j],!0,r.maxCubemapSize):he[j]=Q?M.image[j].image:M.image[j],he[j]=Je(M,he[j]);const be=he[0],we=a.convert(M.format,M.colorSpace),ue=a.convert(M.type),Ue=E(M.internalFormat,we,ue,M.colorSpace),Re=M.isVideoTexture!==!0,Ze=Y.__version===void 0||K===!0,I=Z.dataReady;let se=b(M,be);ge(i.TEXTURE_CUBE_MAP,M);let V;if(Be){Re&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,be.width,be.height);for(let j=0;j<6;j++){V=he[j].mipmaps;for(let ie=0;ie<V.length;ie++){const oe=V[ie];M.format!==Ot?we!==null?Re?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,Ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,oe.width,oe.height,we,ue,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,Ue,oe.width,oe.height,0,we,ue,oe.data)}}}else{if(V=M.mipmaps,Re&&Ze){V.length>0&&se++;const j=Te(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,he[j].width,he[j].height,we,ue,he[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,he[j].width,he[j].height,0,we,ue,he[j].data);for(let ie=0;ie<V.length;ie++){const Oe=V[ie].image[j].image;Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,Oe.width,Oe.height,we,ue,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,Ue,Oe.width,Oe.height,0,we,ue,Oe.data)}}else{Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,ue,he[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,we,ue,he[j]);for(let ie=0;ie<V.length;ie++){const oe=V[ie];Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,we,ue,oe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,Ue,we,ue,oe.image[j])}}}h(M)&&u(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function J(w,M,O,K,Z,Y){const _e=a.convert(O.format,O.colorSpace),ne=a.convert(O.type),de=E(O.internalFormat,_e,ne,O.colorSpace);if(!n.get(M).__hasExternalTextures){const Q=Math.max(1,M.width>>Y),he=Math.max(1,M.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,de,Q,he,M.depth,0,_e,ne,null):t.texImage2D(Z,Y,de,Q,he,0,_e,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,0,De(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(w,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const K=M.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=S(M.stencilBuffer,Z),_e=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=De(M);ke(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Y,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,w)}else{const K=M.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],_e=a.convert(Y.format,Y.colorSpace),ne=a.convert(Y.type),de=E(Y.internalFormat,_e,ne,Y.colorSpace),Be=De(M);O&&ke(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,de,M.width,M.height):ke(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,de,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,Z=De(M);if(M.depthTexture.format===ei)ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===oi)ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(w){const M=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,w)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),pe(M.__webglDepthbuffer[K],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),pe(M.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,M,O){const K=n.get(w);M!==void 0&&J(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ae(w)}function Ne(w){const M=w.texture,O=n.get(w),K=n.get(M);w.addEventListener("dispose",A);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,s.memory.textures++),Y){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let de=0;de<M.mipmaps.length;de++)O.__webglFramebuffer[ne][de]=i.createFramebuffer()}else O.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)O.__webglFramebuffer[ne]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ne=0,de=Z.length;ne<de;ne++){const Be=n.get(Z[ne]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&ke(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const de=Z[ne];O.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const Be=a.convert(de.format,de.colorSpace),Q=a.convert(de.type),he=E(de.internalFormat,Be,Q,de.colorSpace,w.isXRRenderTarget===!0),be=De(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)J(O.__webglFramebuffer[ne][de],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else J(O.__webglFramebuffer[ne],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);h(M)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ne=0,de=Z.length;ne<de;ne++){const Be=Z[ne],Q=n.get(Be);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ge(i.TEXTURE_2D,Be),J(O.__webglFramebuffer,w,Be,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),h(Be)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),ge(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)J(O.__webglFramebuffer[de],w,M,i.COLOR_ATTACHMENT0,ne,de);else J(O.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ne,0);h(M)&&u(ne),t.unbindTexture()}w.depthBuffer&&Ae(w)}function Ke(w){const M=w.textures;for(let O=0,K=M.length;O<K;O++){const Z=M[O];if(h(Z)){const Y=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),u(Y),t.unbindTexture()}}}const Fe=[],R=[];function Et(w){if(w.samples>0){if(ke(w)===!1){const M=w.textures,O=w.width,K=w.height;let Z=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(w),ne=M.length>1;if(ne)for(let de=0;de<M.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<M.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const Be=n.get(M[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,Z,i.NEAREST),l===!0&&(Fe.length=0,R.length=0,Fe.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let de=0;de<M.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const Be=n.get(M[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function De(w){return Math.min(r.maxSamples,w.samples)}function ke(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(w){const M=s.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}function Je(w,M){const O=w.colorSpace,K=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==gn&&O!==hn&&(Xe.getTransfer(O)===et?(K!==Ot||Z!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=x,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=ye,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ke}function cm(i,e){function t(n,r=hn){let a;const s=Xe.getTransfer(r);if(n===nn)return i.UNSIGNED_BYTE;if(n===_s)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===gs)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Jt)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===sl)return i.RGB;if(n===Ot)return i.RGBA;if(n===ol)return i.LUMINANCE;if(n===ll)return i.LUMINANCE_ALPHA;if(n===ei)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===xs)return i.RED_INTEGER;if(n===dl)return i.RG;if(n===Ms)return i.RG_INTEGER;if(n===ys)return i.RGBA_INTEGER;if(n===sr||n===or||n===lr||n===cr)if(s===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ua)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ba||n===za)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ka||n===Ba)return s===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===za)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===$a||n===ja||n===Za||n===Ja||n===Qa||n===es)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ha)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===es)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===ts||n===ns)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===dr)return s===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ts)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ns)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===is||n===rs||n===as)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===dr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===is)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===as)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class dm extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class en extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,n),u=this._getHandJoint(c,g);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
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

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:um,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mm extends hi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,m=null,v=null;const g=new pm,h=t.getContextAttributes();let u=null,E=null;const S=[],b=[],L=new Le;let A=null;const T=new Mt;T.layers.enable(1),T.viewport=new $e;const P=new Mt;P.layers.enable(2),P.viewport=new $e;const W=[T,P],_=new dm;_.layers.enable(1),_.layers.enable(2);let x=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=S[q];return J===void 0&&(J=new ga,S[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=S[q];return J===void 0&&(J=new ga,S[q]=J),J.getGripSpace()},this.getHand=function(q){let J=S[q];return J===void 0&&(J=new ga,S[q]=J),J.getHandSpace()};function U(q){const J=b.indexOf(q.inputSource);if(J===-1)return;const pe=S[J];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||s),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",X);for(let q=0;q<S.length;q++){const J=b[q];J!==null&&(b[q]=null,S[q].disconnect(J))}x=null,F=null,g.reset(),e.setRenderTarget(u),m=null,f=null,p=null,r=null,E=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",X),h.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const J={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ln(m.framebufferWidth,m.framebufferHeight,{format:Ot,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let J=null,pe=null,ce=null;h.depth&&(ce=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=h.stencil?oi:ei,pe=h.stencil?si:In);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Ln(f.textureWidth,f.textureHeight,{format:Ot,type:nn,depthTexture:new Al(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(q){for(let J=0;J<q.removed.length;J++){const pe=q.removed[J],ce=b.indexOf(pe);ce>=0&&(b[ce]=null,S[ce].disconnect(pe))}for(let J=0;J<q.added.length;J++){const pe=q.added[J];let ce=b.indexOf(pe);if(ce===-1){for(let ye=0;ye<S.length;ye++)if(ye>=b.length){b.push(pe),ce=ye;break}else if(b[ye]===null){b[ye]=pe,ce=ye;break}if(ce===-1)break}const Ae=S[ce];Ae&&Ae.connect(pe)}}const H=new C,$=new C;function G(q,J,pe){H.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const ce=H.distanceTo($),Ae=J.projectionMatrix.elements,ye=pe.projectionMatrix.elements,Ne=Ae[14]/(Ae[10]-1),Ke=Ae[14]/(Ae[10]+1),Fe=(Ae[9]+1)/Ae[5],R=(Ae[9]-1)/Ae[5],Et=(Ae[8]-1)/Ae[0],De=(ye[8]+1)/ye[0],ke=Ne*Et,Ee=Ne*De,Je=ce/(-Et+De),Te=Je*-Et;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Te),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=Ne+Je,M=Ke+Je,O=ke-Te,K=Ee+(ce-Te),Z=Fe*Ke/M*w,Y=R*Ke/M*w;q.projectionMatrix.makePerspective(O,K,Z,Y,w,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let J=q.near,pe=q.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),_.near=P.near=T.near=J,_.far=P.far=T.far=pe,(x!==_.near||F!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),x=_.near,F=_.far);const ce=q.parent,Ae=_.cameras;le(_,ce);for(let ye=0;ye<Ae.length;ye++)le(Ae[ye],ce);Ae.length===2?G(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),ae(q,_,ce)};function ae(q,J,pe){pe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let ge=null;function He(q,J){if(d=J.getViewerPose(c||s),v=J,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ce=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let ye=0;ye<pe.length;ye++){const Ne=pe[ye];let Ke=null;if(m!==null)Ke=m.getViewport(Ne);else{const R=p.getViewSubImage(f,Ne);Ke=R.viewport,ye===0&&(e.setRenderTargetTextures(E,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(E))}let Fe=W[ye];Fe===void 0&&(Fe=new Mt,Fe.layers.enable(ye),Fe.viewport=new $e,W[ye]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ye===0&&(_.matrix.copy(Fe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(Fe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ye=p.getDepthInformation(pe[0]);ye&&ye.isValid&&ye.texture&&g.init(e,ye,r.renderState)}}for(let pe=0;pe<S.length;pe++){const ce=b[pe],Ae=S[pe];ce!==null&&Ae!==void 0&&Ae.update(ce,J,c||s)}ge&&ge(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const qe=new wl;qe.setAnimationLoop(He),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}}const En=new Wt,gm=new tt;function _m(i,e){function t(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function n(h,u){u.color.getRGB(h.fogColor.value,Sl(i)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,E,S,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(h,u):u.isMeshToonMaterial?(a(h,u),p(h,u)):u.isMeshPhongMaterial?(a(h,u),d(h,u)):u.isMeshStandardMaterial?(a(h,u),f(h,u),u.isMeshPhysicalMaterial&&m(h,u,b)):u.isMeshMatcapMaterial?(a(h,u),v(h,u)):u.isMeshDepthMaterial?a(h,u):u.isMeshDistanceMaterial?(a(h,u),g(h,u)):u.isMeshNormalMaterial?a(h,u):u.isLineBasicMaterial?(s(h,u),u.isLineDashedMaterial&&o(h,u)):u.isPointsMaterial?l(h,u,E,S):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,t(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===yt&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,t(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===yt&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,t(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,t(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const E=e.get(u),S=E.envMap,b=E.envMapRotation;S&&(h.envMap.value=S,En.copy(b),En.x*=-1,En.y*=-1,En.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.envMapRotation.value.setFromMatrix4(gm.makeRotationFromEuler(En)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,h.aoMapTransform))}function s(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform))}function o(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,E,S){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*E,h.scale.value=S*.5,u.map&&(h.map.value=u.map,t(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function p(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function f(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,E){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,u){u.matcap&&(h.matcap.value=u.matcap)}function g(h,u){const E=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vm(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const b=S.program;n.uniformBlockBinding(E,b)}function c(E,S){let b=r[E.id];b===void 0&&(v(E),b=d(E),r[E.id]=b,E.addEventListener("dispose",h));const L=S.program;n.updateUBOMapping(E,L);const A=e.render.frame;a[E.id]!==A&&(f(E),a[E.id]=A)}function d(E){const S=p();E.__bindingPointIndex=S;const b=i.createBuffer(),L=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function p(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],b=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,T=b.length;A<T;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let W=0,_=P.length;W<_;W++){const x=P[W];if(m(x,A,W,L)===!0){const F=x.__offset,U=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let X=0;X<U.length;X++){const H=U[X],$=g(H);typeof H=="number"||typeof H=="boolean"?(x.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+z,x.__data)):H.isMatrix3?(x.__data[0]=H.elements[0],x.__data[1]=H.elements[1],x.__data[2]=H.elements[2],x.__data[3]=0,x.__data[4]=H.elements[3],x.__data[5]=H.elements[4],x.__data[6]=H.elements[5],x.__data[7]=0,x.__data[8]=H.elements[6],x.__data[9]=H.elements[7],x.__data[10]=H.elements[8],x.__data[11]=0):(H.toArray(x.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,b,L){const A=E.value,T=S+"_"+b;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const P=L[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(E){const S=E.uniforms;let b=0;const L=16;for(let T=0,P=S.length;T<P;T++){const W=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,x=W.length;_<x;_++){const F=W[_],U=Array.isArray(F.value)?F.value:[F.value];for(let z=0,X=U.length;z<X;z++){const H=U[z],$=g(H),G=b%L,le=G%$.boundary,ae=G+le;b+=le,ae!==0&&L-ae<$.storage&&(b+=L-ae),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=$.storage}}}const A=b%L;return A>0&&(b+=L-A),E.__size=b,E.__cache={},this}function g(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function h(E){const S=E.target;S.removeEventListener("dispose",h);const b=s.indexOf(S.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function u(){for(const E in r)i.deleteBuffer(r[E]);s=[],r={},a={}}return{bind:l,update:c,dispose:u}}class Ll{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,h=null;const u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=fn,this.toneMappingExposure=1;const S=this;let b=!1,L=0,A=0,T=null,P=-1,W=null;const _=new $e,x=new $e;let F=null;const U=new Ie(0);let z=0,X=t.width,H=t.height,$=1,G=null,le=null;const ae=new $e(0,0,X,H),ge=new $e(0,0,X,H);let He=!1;const qe=new bs;let q=!1,J=!1;const pe=new tt,ce=new tt,Ae=new C,ye=new $e,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Fe(){return T===null?$:1}let R=n;function Et(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ms}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",oe,!1),R===null){const D="webgl2";if(R=Et(D,y),R===null)throw Et(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let De,ke,Ee,Je,Te,w,M,O,K,Z,Y,_e,ne,de,Be,Q,he,be,we,ue,Ue,Re,Ze,I;function se(){De=new bf(R),De.init(),Re=new cm(R,De),ke=new vf(R,De,e,Re),Ee=new sm(R),ke.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),Je=new Af(R),Te=new Xp,w=new lm(R,De,Ee,Te,ke,Re,Je),M=new Mf(S),O=new Ef(S),K=new Dd(R),Ze=new gf(R,K),Z=new wf(R,K,Je,Ze),Y=new Cf(R,Z,K,Je),we=new Rf(R,ke,w),Q=new xf(Te),_e=new Wp(S,M,O,De,ke,Ze,Q),ne=new _m(S,Te),de=new Yp,Be=new Qp(De),be=new mf(S,M,O,Ee,Y,f,l),he=new rm(S,Y,ke),I=new vm(R,Je,ke,Ee),ue=new _f(R,De,Je),Ue=new Tf(R,De,Je),Je.programs=_e.programs,S.capabilities=ke,S.extensions=De,S.properties=Te,S.renderLists=de,S.shadowMap=he,S.state=Ee,S.info=Je}se();const V=new mm(S,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=De.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=De.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(X,H,!1))},this.getSize=function(y){return y.set(X,H)},this.setSize=function(y,D,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,H=D,t.width=Math.floor(y*$),t.height=Math.floor(D*$),k===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(X*$,H*$).floor()},this.setDrawingBufferSize=function(y,D,k){X=y,H=D,$=k,t.width=Math.floor(y*k),t.height=Math.floor(D*k),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,D,k,B){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,D,k,B),Ee.viewport(_.copy(ae).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(ge)},this.setScissor=function(y,D,k,B){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,D,k,B),Ee.scissor(x.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(y){Ee.setScissorTest(He=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(y=!0,D=!0,k=!0){let B=0;if(y){let N=!1;if(T!==null){const ee=T.texture.format;N=ee===ys||ee===Ms||ee===xs}if(N){const ee=T.texture.type,re=ee===nn||ee===In||ee===wi||ee===si||ee===_s||ee===vs,fe=be.getClearColor(),me=be.getClearAlpha(),Me=fe.r,Se=fe.g,ve=fe.b;re?(m[0]=Me,m[1]=Se,m[2]=ve,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=Me,v[1]=Se,v[2]=ve,v[3]=me,R.clearBufferiv(R.COLOR,0,v))}else B|=R.COLOR_BUFFER_BIT}D&&(B|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),Be.dispose(),Te.dispose(),M.dispose(),O.dispose(),Y.dispose(),Ze.dispose(),I.dispose(),_e.dispose(),V.dispose(),V.removeEventListener("sessionstart",Is),V.removeEventListener("sessionend",Ls),_n.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=Je.autoReset,D=he.enabled,k=he.autoUpdate,B=he.needsUpdate,N=he.type;se(),Je.autoReset=y,he.enabled=D,he.autoUpdate=k,he.needsUpdate=B,he.type=N}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Oe(y){const D=y.target;D.removeEventListener("dispose",Oe),rt(D)}function rt(y){gt(y),Te.remove(y)}function gt(y){const D=Te.get(y).programs;D!==void 0&&(D.forEach(function(k){_e.releaseProgram(k)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,k,B,N,ee){D===null&&(D=Ne);const re=N.isMesh&&N.matrixWorld.determinant()<0,fe=fc(y,D,k,B,N);Ee.setMaterial(B,re);let me=k.index,Me=1;if(B.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;Me=2}const Se=k.drawRange,ve=k.attributes.position;let Ye=Se.start*Me,Qe=(Se.start+Se.count)*Me;ee!==null&&(Ye=Math.max(Ye,ee.start*Me),Qe=Math.min(Qe,(ee.start+ee.count)*Me)),me!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,me.count)):ve!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,ve.count));const nt=Qe-Ye;if(nt<0||nt===1/0)return;Ze.setup(N,B,fe,k,me);let bt,Ve=ue;if(me!==null&&(bt=K.get(me),Ve=Ue,Ve.setIndex(bt)),N.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Fe()),Ve.setMode(R.LINES)):Ve.setMode(R.TRIANGLES);else if(N.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),Ee.setLineWidth(xe*Fe()),N.isLineSegments?Ve.setMode(R.LINES):N.isLineLoop?Ve.setMode(R.LINE_LOOP):Ve.setMode(R.LINE_STRIP)}else N.isPoints?Ve.setMode(R.POINTS):N.isSprite&&Ve.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ve.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ve.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const xe=N._multiDrawStarts,dt=N._multiDrawCounts,We=N._multiDrawCount,It=me?K.get(me).bytesPerElement:1,On=Te.get(B).currentProgram.getUniforms();for(let wt=0;wt<We;wt++)On.setValue(R,"_gl_DrawID",wt),Ve.render(xe[wt]/It,dt[wt])}else if(N.isInstancedMesh)Ve.renderInstances(Ye,nt,N.count);else if(k.isInstancedBufferGeometry){const xe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dt=Math.min(k.instanceCount,xe);Ve.renderInstances(Ye,nt,dt)}else Ve.render(Ye,nt)};function Ge(y,D,k){y.transparent===!0&&y.side===Gt&&y.forceSinglePass===!1?(y.side=yt,y.needsUpdate=!0,Di(y,D,k),y.side=pn,y.needsUpdate=!0,Di(y,D,k),y.side=Gt):Di(y,D,k)}this.compile=function(y,D,k=null){k===null&&(k=y),h=Be.get(k),h.init(D),E.push(h),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const fe=ee[re];Ge(fe,k,N),B.add(fe)}else Ge(ee,k,N),B.add(ee)}),E.pop(),h=null,B},this.compileAsync=function(y,D,k=null){const B=this.compile(y,D,k);return new Promise(N=>{function ee(){if(B.forEach(function(re){Te.get(re).currentProgram.isReady()&&B.delete(re)}),B.size===0){N(y);return}setTimeout(ee,10)}De.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _t=null;function Xt(y){_t&&_t(y)}function Is(){_n.stop()}function Ls(){_n.start()}const _n=new wl;_n.setAnimationLoop(Xt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(y){_t=y,V.setAnimationLoop(y),y===null?_n.stop():_n.start()},V.addEventListener("sessionstart",Is),V.addEventListener("sessionend",Ls),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,D,T),h=Be.get(y,E.length),h.init(D),E.push(h),ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),qe.setFromProjectionMatrix(ce),J=this.localClippingEnabled,q=Q.init(this.clippingPlanes,J),g=de.get(y,u.length),g.init(),u.push(g),V.enabled===!0&&V.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Fr(ee,D,-1/0,S.sortObjects)}Fr(y,D,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(G,le),Ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ke&&be.addToRenderList(g,y),this.info.render.frame++,q===!0&&Q.beginShadows();const k=h.state.shadowsArray;he.render(k,y,D),q===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,N=g.transmissive;if(h.setupLights(),D.isArrayCamera){const ee=D.cameras;if(N.length>0)for(let re=0,fe=ee.length;re<fe;re++){const me=ee[re];Us(B,N,y,me)}Ke&&be.render(y);for(let re=0,fe=ee.length;re<fe;re++){const me=ee[re];Ds(g,y,me,me.viewport)}}else N.length>0&&Us(B,N,y,D),Ke&&be.render(y),Ds(g,y,D);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(S,y,D),Ze.resetDefaultState(),P=-1,W=null,E.pop(),E.length>0?(h=E[E.length-1],q===!0&&Q.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Fr(y,D,k,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||qe.intersectsSprite(y)){B&&ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);const re=Y.update(y),fe=y.material;fe.visible&&g.push(y,re,fe,k,ye.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||qe.intersectsObject(y))){const re=Y.update(y),fe=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ye.copy(y.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),ye.copy(re.boundingSphere.center)),ye.applyMatrix4(y.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=re.groups;for(let Me=0,Se=me.length;Me<Se;Me++){const ve=me[Me],Ye=fe[ve.materialIndex];Ye&&Ye.visible&&g.push(y,re,Ye,k,ye.z,ve)}}else fe.visible&&g.push(y,re,fe,k,ye.z,null)}}const ee=y.children;for(let re=0,fe=ee.length;re<fe;re++)Fr(ee[re],D,k,B)}function Ds(y,D,k,B){const N=y.opaque,ee=y.transmissive,re=y.transparent;h.setupLightsView(k),q===!0&&Q.setGlobalState(S.clippingPlanes,k),B&&Ee.viewport(_.copy(B)),N.length>0&&Li(N,D,k),ee.length>0&&Li(ee,D,k),re.length>0&&Li(re,D,k),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Us(y,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Ln(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ti:nn,minFilter:Pn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=h.state.transmissionRenderTarget[B.id],re=B.viewport||_;ee.setSize(re.z,re.w);const fe=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(U),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),Ke&&be.render(k);const me=S.toneMapping;S.toneMapping=fn;const Me=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),q===!0&&Q.setGlobalState(S.clippingPlanes,B),Li(y,k,B),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let ve=0,Ye=D.length;ve<Ye;ve++){const Qe=D[ve],nt=Qe.object,bt=Qe.geometry,Ve=Qe.material,xe=Qe.group;if(Ve.side===Gt&&nt.layers.test(B.layers)){const dt=Ve.side;Ve.side=yt,Ve.needsUpdate=!0,Ns(nt,k,B,bt,Ve,xe),Ve.side=dt,Ve.needsUpdate=!0,Se=!0}}Se===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}S.setRenderTarget(fe),S.setClearColor(U,z),Me!==void 0&&(B.viewport=Me),S.toneMapping=me}function Li(y,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=y.length;N<ee;N++){const re=y[N],fe=re.object,me=re.geometry,Me=B===null?re.material:B,Se=re.group;fe.layers.test(k.layers)&&Ns(fe,D,k,me,Me,Se)}}function Ns(y,D,k,B,N,ee){y.onBeforeRender(S,D,k,B,N,ee),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(S,D,k,B,y,ee),N.transparent===!0&&N.side===Gt&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,S.renderBufferDirect(k,D,B,N,y,ee),N.side=pn,N.needsUpdate=!0,S.renderBufferDirect(k,D,B,N,y,ee),N.side=Gt):S.renderBufferDirect(k,D,B,N,y,ee),y.onAfterRender(S,D,k,B,N,ee)}function Di(y,D,k){D.isScene!==!0&&(D=Ne);const B=Te.get(y),N=h.state.lights,ee=h.state.shadowsArray,re=N.state.version,fe=_e.getParameters(y,N.state,ee,D,k),me=_e.getProgramCacheKey(fe);let Me=B.programs;B.environment=y.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(y.isMeshStandardMaterial?O:M).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",Oe),Me=new Map,B.programs=Me);let Se=Me.get(me);if(Se!==void 0){if(B.currentProgram===Se&&B.lightsStateVersion===re)return Os(y,fe),Se}else fe.uniforms=_e.getUniforms(y),y.onBeforeCompile(fe,S),Se=_e.acquireProgram(fe,me),Me.set(me,Se),B.uniforms=fe.uniforms;const ve=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ve.clippingPlanes=Q.uniform),Os(y,fe),B.needsLights=mc(y),B.lightsStateVersion=re,B.needsLights&&(ve.ambientLightColor.value=N.state.ambient,ve.lightProbe.value=N.state.probe,ve.directionalLights.value=N.state.directional,ve.directionalLightShadows.value=N.state.directionalShadow,ve.spotLights.value=N.state.spot,ve.spotLightShadows.value=N.state.spotShadow,ve.rectAreaLights.value=N.state.rectArea,ve.ltc_1.value=N.state.rectAreaLTC1,ve.ltc_2.value=N.state.rectAreaLTC2,ve.pointLights.value=N.state.point,ve.pointLightShadows.value=N.state.pointShadow,ve.hemisphereLights.value=N.state.hemi,ve.directionalShadowMap.value=N.state.directionalShadowMap,ve.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ve.spotShadowMap.value=N.state.spotShadowMap,ve.spotLightMatrix.value=N.state.spotLightMatrix,ve.spotLightMap.value=N.state.spotLightMap,ve.pointShadowMap.value=N.state.pointShadowMap,ve.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Se,B.uniformsList=null,Se}function Fs(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=ur.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Os(y,D){const k=Te.get(y);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function fc(y,D,k,B,N){D.isScene!==!0&&(D=Ne),w.resetTextureUnits();const ee=D.fog,re=B.isMeshStandardMaterial?D.environment:null,fe=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gn,me=(B.isMeshStandardMaterial?O:M).get(B.envMap||re),Me=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Se=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ve=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,Qe=!!k.morphAttributes.color;let nt=fn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(nt=S.toneMapping);const bt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ve=bt!==void 0?bt.length:0,xe=Te.get(B),dt=h.state.lights;if(q===!0&&(J===!0||y!==W)){const Rt=y===W&&B.id===P;Q.setState(B,y,Rt)}let We=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==dt.state.version||xe.outputColorSpace!==fe||N.isBatchedMesh&&xe.batching===!1||!N.isBatchedMesh&&xe.batching===!0||N.isBatchedMesh&&xe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&xe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&xe.instancing===!1||!N.isInstancedMesh&&xe.instancing===!0||N.isSkinnedMesh&&xe.skinning===!1||!N.isSkinnedMesh&&xe.skinning===!0||N.isInstancedMesh&&xe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&xe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&xe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&xe.instancingMorph===!1&&N.morphTexture!==null||xe.envMap!==me||B.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Me||xe.vertexTangents!==Se||xe.morphTargets!==ve||xe.morphNormals!==Ye||xe.morphColors!==Qe||xe.toneMapping!==nt||xe.morphTargetsCount!==Ve)&&(We=!0):(We=!0,xe.__version=B.version);let It=xe.currentProgram;We===!0&&(It=Di(B,D,N));let On=!1,wt=!1,Or=!1;const it=It.getUniforms(),rn=xe.uniforms;if(Ee.useProgram(It.program)&&(On=!0,wt=!0,Or=!0),B.id!==P&&(P=B.id,wt=!0),On||W!==y){ke.reverseDepthBuffer?(pe.copy(y.projectionMatrix),od(pe),ld(pe),it.setValue(R,"projectionMatrix",pe)):it.setValue(R,"projectionMatrix",y.projectionMatrix),it.setValue(R,"viewMatrix",y.matrixWorldInverse);const Rt=it.map.cameraPosition;Rt!==void 0&&Rt.setValue(R,Ae.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&it.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,wt=!0,Or=!0)}if(N.isSkinnedMesh){it.setOptional(R,N,"bindMatrix"),it.setOptional(R,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),it.setValue(R,"boneTexture",Rt.boneTexture,w))}N.isBatchedMesh&&(it.setOptional(R,N,"batchingTexture"),it.setValue(R,"batchingTexture",N._matricesTexture,w),it.setOptional(R,N,"batchingIdTexture"),it.setValue(R,"batchingIdTexture",N._indirectTexture,w),it.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&it.setValue(R,"batchingColorTexture",N._colorsTexture,w));const kr=k.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&we.update(N,k,It),(wt||xe.receiveShadow!==N.receiveShadow)&&(xe.receiveShadow=N.receiveShadow,it.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(rn.envMap.value=me,rn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(rn.envMapIntensity.value=D.environmentIntensity),wt&&(it.setValue(R,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&pc(rn,Or),ee&&B.fog===!0&&ne.refreshFogUniforms(rn,ee),ne.refreshMaterialUniforms(rn,B,$,H,h.state.transmissionRenderTarget[y.id]),ur.upload(R,Fs(xe),rn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ur.upload(R,Fs(xe),rn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(R,"center",N.center),it.setValue(R,"modelViewMatrix",N.modelViewMatrix),it.setValue(R,"normalMatrix",N.normalMatrix),it.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Rt=B.uniformsGroups;for(let Br=0,gc=Rt.length;Br<gc;Br++){const ks=Rt[Br];I.update(ks,It),I.bind(ks,It)}}return It}function pc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function mc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,D,k){Te.get(y.texture).__webglTexture=D,Te.get(y.depthTexture).__webglTexture=k;const B=Te.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const k=Te.get(y);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,k=0){T=y,L=D,A=k;let B=!0,N=null,ee=!1,re=!1;if(y){const me=Te.get(y);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(me.__hasExternalTextures)w.rebindTextures(y,Te.get(y.texture).__webglTexture,Te.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ve=y.depthTexture;if(me.__boundDepthTexture!==ve){if(ve!==null&&Te.has(ve)&&(y.width!==ve.image.width||y.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(re=!0);const Se=Te.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Se[D])?N=Se[D][k]:N=Se[D],ee=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?N=Te.get(y).__webglMultisampledFramebuffer:Array.isArray(Se)?N=Se[k]:N=Se,_.copy(y.viewport),x.copy(y.scissor),F=y.scissorTest}else _.copy(ae).multiplyScalar($).floor(),x.copy(ge).multiplyScalar($).floor(),F=He;if(Ee.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&Ee.drawBuffers(y,N),Ee.viewport(_),Ee.scissor(x),Ee.setScissorTest(F),ee){const me=Te.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,k)}else if(re){const me=Te.get(y.texture),Me=D||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,k||0,Me)}P=-1},this.readRenderTargetPixels=function(y,D,k,B,N,ee,re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){Ee.bindFramebuffer(R.FRAMEBUFFER,fe);try{const me=y.texture,Me=me.format,Se=me.type;if(!ke.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&k>=0&&k<=y.height-N&&R.readPixels(D,k,B,N,Re.convert(Me),Re.convert(Se),ee)}finally{const me=T!==null?Te.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,D,k,B,N,ee,re){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){const me=y.texture,Me=me.format,Se=me.type;if(!ke.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-B&&k>=0&&k<=y.height-N){Ee.bindFramebuffer(R.FRAMEBUFFER,fe);const ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(D,k,B,N,Re.convert(Me),Re.convert(Se),0);const Ye=T!==null?Te.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,Ye);const Qe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await sd(R,Qe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(ve),R.deleteSync(Qe),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,k=0){y.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(y.image.width*B),ee=Math.floor(y.image.height*B),re=D!==null?D.x:0,fe=D!==null?D.y:0;w.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,re,fe,N,ee),Ee.unbindTexture()},this.copyTextureToTexture=function(y,D,k=null,B=null,N=0){y.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],D=arguments[2],N=arguments[3]||0,k=null);let ee,re,fe,me,Me,Se;k!==null?(ee=k.max.x-k.min.x,re=k.max.y-k.min.y,fe=k.min.x,me=k.min.y):(ee=y.image.width,re=y.image.height,fe=0,me=0),B!==null?(Me=B.x,Se=B.y):(Me=0,Se=0);const ve=Re.convert(D.format),Ye=Re.convert(D.type);w.setTexture2D(D,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),bt=R.getParameter(R.UNPACK_SKIP_PIXELS),Ve=R.getParameter(R.UNPACK_SKIP_ROWS),xe=R.getParameter(R.UNPACK_SKIP_IMAGES),dt=y.isCompressedTexture?y.mipmaps[N]:y.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Me,Se,ee,re,ve,Ye,dt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Me,Se,dt.width,dt.height,ve,dt.data):R.texSubImage2D(R.TEXTURE_2D,N,Me,Se,ee,re,ve,Ye,dt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xe),N===0&&D.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,D,k=null,B=null,N=0){y.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,y=arguments[2],D=arguments[3],N=arguments[4]||0);let ee,re,fe,me,Me,Se,ve,Ye,Qe;const nt=y.isCompressedTexture?y.mipmaps[N]:y.image;k!==null?(ee=k.max.x-k.min.x,re=k.max.y-k.min.y,fe=k.max.z-k.min.z,me=k.min.x,Me=k.min.y,Se=k.min.z):(ee=nt.width,re=nt.height,fe=nt.depth,me=0,Me=0,Se=0),B!==null?(ve=B.x,Ye=B.y,Qe=B.z):(ve=0,Ye=0,Qe=0);const bt=Re.convert(D.format),Ve=Re.convert(D.type);let xe;if(D.isData3DTexture)w.setTexture3D(D,0),xe=R.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)w.setTexture2DArray(D,0),xe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const dt=R.getParameter(R.UNPACK_ROW_LENGTH),We=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),On=R.getParameter(R.UNPACK_SKIP_ROWS),wt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,Me),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se),y.isDataTexture||y.isData3DTexture?R.texSubImage3D(xe,N,ve,Ye,Qe,ee,re,fe,bt,Ve,nt.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,N,ve,Ye,Qe,ee,re,fe,bt,nt.data):R.texSubImage3D(xe,N,ve,Ye,Qe,ee,re,fe,bt,Ve,nt),R.pixelStorei(R.UNPACK_ROW_LENGTH,dt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,We),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,On),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wt),N===0&&D.generateMipmaps&&R.generateMipmap(xe),Ee.unbindTexture()},this.initRenderTarget=function(y){Te.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,Ee.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ss?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Rr?"display-p3":"srgb"}}class Pr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Pr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dl extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ul extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yr=new C,Sr=new C,Uo=new tt,yi=new Es,tr=new Pi,_a=new C,No=new C;class xm extends st{constructor(e=new ht,t=new Ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)yr.fromBufferAttribute(t,r-1),Sr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=yr.distanceTo(Sr);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),tr.radius+=a,e.ray.intersectsSphere(tr)===!1)return;Uo.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Uo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,s.start),v=Math.min(d.count,s.start+s.count);for(let g=m,h=v-1;g<h;g+=c){const u=d.getX(g),E=d.getX(g+1),S=nr(this,e,yi,l,u,E);S&&t.push(S)}if(this.isLineLoop){const g=d.getX(v-1),h=d.getX(m),u=nr(this,e,yi,l,g,h);u&&t.push(u)}}else{const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let g=m,h=v-1;g<h;g+=c){const u=nr(this,e,yi,l,g,g+1);u&&t.push(u)}if(this.isLineLoop){const g=nr(this,e,yi,l,v-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function nr(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(yr.fromBufferAttribute(s,r),Sr.fromBufferAttribute(s,a),t.distanceSqToSegment(yr,Sr,_a,No)>n)return;_a.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_a);if(!(l<e.near||l>e.far))return{distance:l,point:No.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Fo=new C,Oo=new C;class Mm extends xm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Fo.fromBufferAttribute(t,r),Oo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fo.distanceTo(Oo);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nl extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ko=new tt,ls=new Es,ir=new Pi,rr=new C;class ym extends st{constructor(e=new ht,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ir.radius+=a,e.ray.intersectsSphere(ir)===!1)return;ko.copy(r).invert(),ls.copy(e.ray).applyMatrix4(ko);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let v=f,g=m;v<g;v++){const h=c.getX(v);rr.fromBufferAttribute(p,h),Bo(rr,h,l,r,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let v=f,g=m;v<g;v++)rr.fromBufferAttribute(p,v),Bo(rr,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Bo(i,e,t,n,r,a,s){const o=ls.distanceSqToPoint(i);if(o<t){const l=new C;ls.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ir extends ht{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new C,d=new Le;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){const m=n+p/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[f]/e+1)/2,d.y=(s[f+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dn extends ht{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const d=[],p=[],f=[],m=[];let v=0;const g=[],h=n/2;let u=0;E(),s===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(m,2));function E(){const b=new C,L=new C;let A=0;const T=(t-e)/n;for(let P=0;P<=a;P++){const W=[],_=P/a,x=_*(t-e)+e;for(let F=0;F<=r;F++){const U=F/r,z=U*l+o,X=Math.sin(z),H=Math.cos(z);L.x=x*X,L.y=-_*n+h,L.z=x*H,p.push(L.x,L.y,L.z),b.set(X,T,H).normalize(),f.push(b.x,b.y,b.z),m.push(U,1-_),W.push(v++)}g.push(W)}for(let P=0;P<r;P++)for(let W=0;W<a;W++){const _=g[W][P],x=g[W+1][P],F=g[W+1][P+1],U=g[W][P+1];e>0&&(d.push(_,x,U),A+=3),t>0&&(d.push(x,F,U),A+=3)}c.addGroup(u,A,0),u+=A}function S(b){const L=v,A=new Le,T=new C;let P=0;const W=b===!0?e:t,_=b===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,h*_,0),f.push(0,_,0),m.push(.5,.5),v++;const x=v;for(let F=0;F<=r;F++){const z=F/r*l+o,X=Math.cos(z),H=Math.sin(z);T.x=W*H,T.y=h*_,T.z=W*X,p.push(T.x,T.y,T.z),f.push(0,_,0),A.x=X*.5+.5,A.y=H*.5*_+.5,m.push(A.x,A.y),v++}for(let F=0;F<r;F++){const U=L+F,z=x+F;b===!0?d.push(z,z+1,U):d.push(z+1,z,U),P+=3}c.addGroup(u,P,b===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ii extends Dn{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),c(n),d(),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(a.slice(),3)),this.setAttribute("uv",new je(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new C,b=new C,L=new C;for(let A=0;A<t.length;A+=3)m(t[A+0],S),m(t[A+1],b),m(t[A+2],L),l(S,b,L,E)}function l(E,S,b,L){const A=L+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const W=E.clone().lerp(b,P/A),_=S.clone().lerp(b,P/A),x=A-P;for(let F=0;F<=x;F++)F===0&&P===A?T[P][F]=W:T[P][F]=W.clone().lerp(_,F/x)}for(let P=0;P<A;P++)for(let W=0;W<2*(A-P)-1;W++){const _=Math.floor(W/2);W%2===0?(f(T[P][_+1]),f(T[P+1][_]),f(T[P][_])):(f(T[P][_+1]),f(T[P+1][_+1]),f(T[P+1][_]))}}function c(E){const S=new C;for(let b=0;b<a.length;b+=3)S.x=a[b+0],S.y=a[b+1],S.z=a[b+2],S.normalize().multiplyScalar(E),a[b+0]=S.x,a[b+1]=S.y,a[b+2]=S.z}function d(){const E=new C;for(let S=0;S<a.length;S+=3){E.x=a[S+0],E.y=a[S+1],E.z=a[S+2];const b=h(E)/2/Math.PI+.5,L=u(E)/Math.PI+.5;s.push(b,1-L)}v(),p()}function p(){for(let E=0;E<s.length;E+=6){const S=s[E+0],b=s[E+2],L=s[E+4],A=Math.max(S,b,L),T=Math.min(S,b,L);A>.9&&T<.1&&(S<.2&&(s[E+0]+=1),b<.2&&(s[E+2]+=1),L<.2&&(s[E+4]+=1))}}function f(E){a.push(E.x,E.y,E.z)}function m(E,S){const b=E*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function v(){const E=new C,S=new C,b=new C,L=new C,A=new Le,T=new Le,P=new Le;for(let W=0,_=0;W<a.length;W+=9,_+=6){E.set(a[W+0],a[W+1],a[W+2]),S.set(a[W+3],a[W+4],a[W+5]),b.set(a[W+6],a[W+7],a[W+8]),A.set(s[_+0],s[_+1]),T.set(s[_+2],s[_+3]),P.set(s[_+4],s[_+5]),L.copy(E).add(S).add(b).divideScalar(3);const x=h(L);g(A,_+0,E,x),g(T,_+2,S,x),g(P,_+4,b,x)}}function g(E,S,b,L){L<0&&E.x===1&&(s[S]=E.x-1),b.x===0&&b.z===0&&(s[S]=L/2/Math.PI+.5)}function h(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.vertices,e.indices,e.radius,e.details)}}class Dr extends Lr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dr(e.radius,e.detail)}}class ci extends Lr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ci(e.radius,e.detail)}}class Ts extends ht{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const d=[],p=new C,f=new C,m=[],v=[],g=[],h=[];for(let u=0;u<=n;u++){const E=[],S=u/n;let b=0;u===0&&s===0?b=.5/t:u===n&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const A=L/t;p.x=-e*Math.cos(r+A*a)*Math.sin(s+S*o),p.y=e*Math.cos(s+S*o),p.z=e*Math.sin(r+A*a)*Math.sin(s+S*o),v.push(p.x,p.y,p.z),f.copy(p).normalize(),g.push(f.x,f.y,f.z),h.push(A+b,1-S),E.push(c++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const S=d[u][E+1],b=d[u][E],L=d[u+1][E],A=d[u+1][E+1];(u!==0||s>0)&&m.push(S,b,A),(u!==n-1||l<Math.PI)&&m.push(b,L,A)}this.setIndex(m),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fn extends ht{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],l=[],c=[],d=new C,p=new C,f=new C;for(let m=0;m<=n;m++)for(let v=0;v<=r;v++){const g=v/r*a,h=m/n*Math.PI*2;p.x=(e+t*Math.cos(h))*Math.cos(g),p.y=(e+t*Math.cos(h))*Math.sin(g),p.z=t*Math.sin(h),o.push(p.x,p.y,p.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),f.subVectors(p,d).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const g=(r+1)*m+v-1,h=(r+1)*(m-1)+v-1,u=(r+1)*(m-1)+v,E=(r+1)*m+v;s.push(g,h,E),s.push(h,u,E)}this.setIndex(s),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sm extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new C,a=new C;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const p=l[c],f=p.start,m=p.count;for(let v=f,g=f+m;v<g;v+=3)for(let h=0;h<3;h++){const u=o.getX(v+h),E=o.getX(v+(h+1)%3);r.fromBufferAttribute(s,u),a.fromBufferAttribute(s,E),zo(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,p=3*o+(c+1)%3;r.fromBufferAttribute(s,d),a.fromBufferAttribute(s,p),zo(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function zo(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class pt extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ur extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Fl extends Ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const va=new tt,Ho=new C,Go=new C;class Ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ho),Go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Go),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new tt,Si=new C,xa=new C;class Em extends Ol{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Si.setFromMatrixPosition(e.matrixWorld),n.position.copy(Si),xa.copy(n.position),xa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xa),n.updateMatrixWorld(),r.makeTranslation(-Si.x,-Si.y,-Si.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo)}}class bm extends Ur{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wm extends Ol{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kl extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new wm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bl extends Ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ms}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ms);const Un=[{id:"hansel",name:"Hansel",tale:"Hansel and Gretel",role:"resourceful survivor",signatureKartId:"breadcrumb_buggy",homeTrackId:"candy_cottage_circuit",palette:{primary:2792847,secondary:15320170},stats:{speed:6,acceleration:7,handling:6,weight:4,luck:8},aiStyle:"balanced"},{id:"gretel",name:"Gretel",tale:"Hansel and Gretel",role:"quick-witted escapist",signatureKartId:"candy_oven_cart",homeTrackId:"candy_cottage_circuit",palette:{primary:15167313,secondary:16032353},stats:{speed:6,acceleration:7,handling:7,weight:3,luck:8},aiStyle:"cunning"},{id:"little_red_cap",name:"Little Red Cap",tale:"Little Red Cap",role:"fearless wanderer",signatureKartId:"red_hood_runner",homeTrackId:"grandmothers_hollow",palette:{primary:14034984,secondary:6947855},stats:{speed:7,acceleration:8,handling:6,weight:3,luck:6},aiStyle:"reckless"},{id:"cinderella",name:"Cinderella",tale:"Aschenputtel",role:"midnight contender",signatureKartId:"pumpkin_coach",homeTrackId:"pumpkin_palace_promenade",palette:{primary:9480387,secondary:14730236},stats:{speed:7,acceleration:6,handling:8,weight:4,luck:9},aiStyle:"steady"},{id:"snow_white",name:"Snow White",tale:"Snow White",role:"glass-coffin revenant",signatureKartId:"glass_coffin_glide",homeTrackId:"mirrorwood_pass",palette:{primary:15858414,secondary:11868062},stats:{speed:6,acceleration:6,handling:7,weight:5,luck:7},aiStyle:"defensive"},{id:"rapunzel",name:"Rapunzel",tale:"Rapunzel",role:"tower-bound climber",signatureKartId:"tower_tress_racer",homeTrackId:"rapunzel_tower_climb",palette:{primary:16765286,secondary:9279918},stats:{speed:6,acceleration:6,handling:9,weight:3,luck:7},aiStyle:"cunning"},{id:"rumpelstiltskin",name:"Rumpelstiltskin",tale:"Rumpelstiltskin",role:"bargain-spinning trickster",signatureKartId:"golden_straw_spinner",homeTrackId:"millers_goldworks",palette:{primary:13214247,secondary:4401176},stats:{speed:7,acceleration:7,handling:6,weight:4,luck:5},aiStyle:"aggressive"},{id:"frog_prince",name:"The Frog Prince",tale:"The Frog Prince",role:"amphibian royal",signatureKartId:"lily_pond_hopper",homeTrackId:"frog_pond_causeway",palette:{primary:5420936,secondary:16766474},stats:{speed:5,acceleration:8,handling:7,weight:3,luck:7},aiStyle:"reckless"},{id:"briar_rose",name:"Briar Rose",tale:"Little Briar Rose",role:"slumbering thorn-heir",signatureKartId:"spindle_spark_kart",homeTrackId:"moonlit_briar_ring",palette:{primary:16740502,secondary:3427905},stats:{speed:6,acceleration:5,handling:8,weight:4,luck:8},aiStyle:"steady"},{id:"pied_piper",name:"The Pied Piper",tale:"The Pied Piper of Hamelin",role:"rat-leading minstrel",signatureKartId:"rat_piper_roadster",homeTrackId:"ratcatchers_run",palette:{primary:10309341,secondary:16556817},stats:{speed:8,acceleration:7,handling:6,weight:3,luck:6},aiStyle:"cunning"},{id:"brave_tailor",name:"The Brave Little Tailor",tale:"The Brave Little Tailor",role:"boastful giant-slayer",signatureKartId:"needle_belt_racer",homeTrackId:"seven_at_one_blow_speedway",palette:{primary:4553629,secondary:15087942},stats:{speed:8,acceleration:8,handling:5,weight:4,luck:6},aiStyle:"aggressive"},{id:"dancing_princess",name:"The Twelfth Dancing Princess",tale:"The Twelve Dancing Princesses",role:"midnight ballroom drifter",signatureKartId:"moon_slipper_carriage",homeTrackId:"moon_slipper_ballroom_drift",palette:{primary:6893763,secondary:12647935},stats:{speed:6,acceleration:6,handling:9,weight:3,luck:7},aiStyle:"steady"},{id:"fisherman",name:"The Fisherman",tale:"The Fisherman and His Wife",role:"wish-haunted angler",signatureKartId:"storm_net_skiff_kart",homeTrackId:"storm_shore_sprint",palette:{primary:30646,secondary:13299960},stats:{speed:6,acceleration:6,handling:6,weight:6,luck:5},aiStyle:"defensive"},{id:"fishermans_wife",name:"The Fisherman's Wife",tale:"The Fisherman and His Wife",role:"insatiable wish-monarch",signatureKartId:"wishfish_royal_cart",homeTrackId:"wishfish_kingdom_road",palette:{primary:147082,secondary:16765286},stats:{speed:7,acceleration:6,handling:6,weight:5,luck:4},aiStyle:"aggressive"},{id:"golden_goose_boy",name:"The Golden Goose Boy",tale:"The Golden Goose",role:"lucky simpleton",signatureKartId:"feathered_fortune_wagon",homeTrackId:"golden_goose_parade_route",palette:{primary:16766720,secondary:16775909},stats:{speed:6,acceleration:6,handling:6,weight:4,luck:10},aiStyle:"balanced"},{id:"iron_hans",name:"Iron Hans",tale:"Iron Hans",role:"wild forest warden",signatureKartId:"forest_crown_hauler",homeTrackId:"iron_forest_descent",palette:{primary:7100492,secondary:10914404},stats:{speed:6,acceleration:5,handling:5,weight:8,luck:6},aiStyle:"aggressive"},{id:"jorinda",name:"Jorinda",tale:"Jorinda and Joringel",role:"songbird-cursed maiden",signatureKartId:"nightingale_sleigh",homeTrackId:"songbird_grove",palette:{primary:11887990,secondary:15379595},stats:{speed:6,acceleration:7,handling:7,weight:3,luck:7},aiStyle:"steady"},{id:"joringel",name:"Joringel",tale:"Jorinda and Joringel",role:"devoted rescuer",signatureKartId:"cage_key_cart",homeTrackId:"stone_castle_of_silence",palette:{primary:4869737,secondary:15919588},stats:{speed:6,acceleration:6,handling:7,weight:4,luck:7},aiStyle:"balanced"},{id:"six_swans_prince",name:"The Six Swans Prince",tale:"The Six Swans",role:"feather-cursed royal",signatureKartId:"swanwing_chariot",homeTrackId:"swan_marsh_glideway",palette:{primary:15330543,secondary:9358054},stats:{speed:7,acceleration:7,handling:7,weight:3,luck:6},aiStyle:"cunning"},{id:"goose_girl",name:"The Goose Girl",tale:"The Goose Girl",role:"hidden true princess",signatureKartId:"goosefeather_coach",homeTrackId:"goose_meadow_road",palette:{primary:11066076,secondary:15858414},stats:{speed:6,acceleration:6,handling:8,weight:4,luck:8},aiStyle:"steady"},{id:"mother_holle",name:"Mother Holle",tale:"Mother Holle",role:"snow-bringing matron",signatureKartId:"snow_pillow_sled",homeTrackId:"mother_holle_skyfall",palette:{primary:13299960,secondary:9494767},stats:{speed:5,acceleration:5,handling:7,weight:6,luck:9},aiStyle:"defensive"},{id:"bearskin",name:"Bearskin",tale:"Bearskin",role:"cursed soldier",signatureKartId:"bearhide_bruiser",homeTrackId:"bearskin_warpath",palette:{primary:3810840,secondary:12348453},stats:{speed:6,acceleration:5,handling:4,weight:9,luck:6},aiStyle:"reckless"},{id:"brother",name:"Brother",tale:"Brother and Sister",role:"enchanted-stag kin",signatureKartId:"river_stag_racer",homeTrackId:"enchanted_brook_crossing",palette:{primary:8435992,secondary:5613104},stats:{speed:8,acceleration:7,handling:6,weight:4,luck:5},aiStyle:"reckless"},{id:"sister",name:"Sister",tale:"Brother and Sister",role:"steadfast guardian",signatureKartId:"silver_fawn_buggy",homeTrackId:"enchanted_brook_crossing",palette:{primary:12040100,secondary:14532265},stats:{speed:6,acceleration:6,handling:8,weight:4,luck:7},aiStyle:"defensive"},{id:"white_snake_servant",name:"The White Snake Servant",tale:"The White Snake",role:"beast-tongued knight",signatureKartId:"serpent_court_kart",homeTrackId:"white_snake_court_circuit",palette:{primary:2976335,secondary:14218204},stats:{speed:7,acceleration:7,handling:7,weight:4,luck:8},aiStyle:"cunning"},{id:"juniper_boy",name:"The Juniper Tree Boy",tale:"The Juniper Tree",role:"reborn bird-spirit",signatureKartId:"juniper_dream_cart",homeTrackId:"juniper_graveyard_garden",palette:{primary:3096134,secondary:13292229},stats:{speed:7,acceleration:6,handling:6,weight:4,luck:6},aiStyle:"defensive"},{id:"king_thrushbeard",name:"King Thrushbeard",tale:"King Thrushbeard",role:"disguised humbler",signatureKartId:"thistle_crown_coupe",homeTrackId:"thorn_crown_ridge",palette:{primary:7473591,secondary:16196997},stats:{speed:7,acceleration:6,handling:7,weight:5,luck:6},aiStyle:"aggressive"},{id:"faithful_john",name:"Faithful John",tale:"Faithful John",role:"loyal sworn servant",signatureKartId:"oathbound_royal_wagon",homeTrackId:"faithful_john_harbor_run",palette:{primary:2575479,secondary:15199471},stats:{speed:6,acceleration:6,handling:6,weight:6,luck:9},aiStyle:"defensive"},{id:"devils_sooty_brother",name:"The Devil's Sooty Brother",tale:"The Devil's Sooty Brother",role:"ash-bound bargainer",signatureKartId:"ashen_devil_dray",homeTrackId:"soot_and_ember_mine",palette:{primary:1776414,secondary:15228164},stats:{speed:7,acceleration:7,handling:5,weight:6,luck:5},aiStyle:"aggressive"},{id:"maid_maleen",name:"Maid Maleen",tale:"Maid Maleen",role:"walled-away survivor",signatureKartId:"tower_escape_carriage",homeTrackId:"maid_maleen_ruin_road",palette:{primary:9077116,secondary:12368049},stats:{speed:6,acceleration:6,handling:7,weight:5,luck:8},aiStyle:"steady"},{id:"eldest_kid",name:"The Eldest Kid",tale:"The Wolf and the Seven Young Kids",role:"clever survivor goat",signatureKartId:"goatbell_scamper_kart",homeTrackId:"wolfwood_panic_trail",palette:{primary:16170336,secondary:16248290},stats:{speed:7,acceleration:9,handling:7,weight:2,luck:7},aiStyle:"reckless"},{id:"elves_shoemaker",name:"The Elves' Shoemaker",tale:"The Elves and the Shoemaker",role:"midnight craftsman",signatureKartId:"cobblers_midnight_cart",homeTrackId:"cobblers_midnight_workshop",palette:{primary:7170165,secondary:16763604},stats:{speed:6,acceleration:7,handling:8,weight:3,luck:7},aiStyle:"balanced"}],Hl=Object.fromEntries(Un.map(i=>[i.id,i])),Tm="hansel",tn=[{id:"breadcrumb_buggy",name:"Breadcrumb Buggy",tale:"Hansel and Gretel",type:"woodland",modelHint:"small wooden buggy with bread-wheel motifs and a trail-marker lantern",palette:{primary:14263654,secondary:8344889},stats:{speed:5,acceleration:7,handling:7,weight:4}},{id:"candy_oven_cart",name:"Candy Oven Cart",tale:"Hansel and Gretel",type:"confection",modelHint:"rolling sugar oven with peppermint trim and ember glow",palette:{primary:15167313,secondary:16757922},stats:{speed:6,acceleration:6,handling:6,weight:5}},{id:"red_hood_runner",name:"Red Hood Runner",tale:"Little Red Cap",type:"roadster",modelHint:"hooded scarlet roadster with basket and wolf-claw rims",palette:{primary:14034984,secondary:6947855},stats:{speed:7,acceleration:8,handling:6,weight:3}},{id:"pumpkin_coach",name:"Pumpkin Coach",tale:"Aschenputtel",type:"carriage",modelHint:"round pumpkin carriage with vine-spoke wheels and lantern eyes",palette:{primary:16026630,secondary:6966419},stats:{speed:6,acceleration:6,handling:8,weight:5}},{id:"glass_coffin_glide",name:"Glass Coffin Glide",tale:"Snow White",type:"glider",modelHint:"low crystal glider shaped like a glass casket with frost trail",palette:{primary:13495038,secondary:11868062},stats:{speed:7,acceleration:5,handling:7,weight:5}},{id:"tower_tress_racer",name:"Tower Tress Racer",tale:"Rapunzel",type:"racer",modelHint:"tall slim racer with braided-rope grapple coil",palette:{primary:16765286,secondary:9279918},stats:{speed:6,acceleration:6,handling:9,weight:3}},{id:"golden_straw_spinner",name:"Golden Straw Spinner",tale:"Rumpelstiltskin",type:"spinner",modelHint:"spinning-wheel-cored cart trailing golden thread",palette:{primary:13214247,secondary:4401176},stats:{speed:7,acceleration:7,handling:6,weight:4}},{id:"lily_pond_hopper",name:"Lily Pond Hopper",tale:"The Frog Prince",type:"hopper",modelHint:"lily-pad hopper that bounces on frog-leg suspension",palette:{primary:5420936,secondary:16766474},stats:{speed:5,acceleration:8,handling:7,weight:3}},{id:"spindle_spark_kart",name:"Spindle Spark Kart",tale:"Little Briar Rose",type:"racer",modelHint:"thorn-wrapped kart with a single glinting spindle prow",palette:{primary:16740502,secondary:3427905},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"rat_piper_roadster",name:"Rat Piper Roadster",tale:"The Pied Piper",type:"roadster",modelHint:"pied-painted roadster with pipe organ exhaust and rat tail",palette:{primary:10309341,secondary:16556817},stats:{speed:8,acceleration:7,handling:6,weight:3}},{id:"needle_belt_racer",name:"Needle & Belt Racer",tale:"The Brave Little Tailor",type:"racer",modelHint:"patchwork racer stitched with giant needle prow and belt buckle",palette:{primary:4553629,secondary:15087942},stats:{speed:8,acceleration:8,handling:5,weight:4}},{id:"moon_slipper_carriage",name:"Moon Slipper Carriage",tale:"The Twelve Dancing Princesses",type:"carriage",modelHint:"silver ballroom carriage with worn-dancing-slipper wheels",palette:{primary:6893763,secondary:12647935},stats:{speed:6,acceleration:6,handling:9,weight:4}},{id:"storm_net_skiff_kart",name:"Storm Net Skiff Kart",tale:"The Fisherman and His Wife",type:"skiff",modelHint:"fishing-skiff kart draped in storm nets and floats",palette:{primary:30646,secondary:13299960},stats:{speed:6,acceleration:6,handling:6,weight:6}},{id:"wishfish_royal_cart",name:"Wishfish Royal Cart",tale:"The Fisherman and His Wife",type:"carriage",modelHint:"gilded royal cart crowned with a wish-granting flounder",palette:{primary:147082,secondary:16765286},stats:{speed:7,acceleration:6,handling:6,weight:5}},{id:"feathered_fortune_wagon",name:"Feathered Fortune Wagon",tale:"The Golden Goose",type:"wagon",modelHint:"golden-goose wagon that everyone seems stuck to",palette:{primary:16766720,secondary:16775909},stats:{speed:6,acceleration:6,handling:6,weight:5}},{id:"forest_crown_hauler",name:"Forest Crown Hauler",tale:"Iron Hans",type:"hauler",modelHint:"heavy iron hauler antlered with a wild-forest crown",palette:{primary:7100492,secondary:10914404},stats:{speed:6,acceleration:5,handling:5,weight:8}},{id:"nightingale_sleigh",name:"Nightingale Sleigh",tale:"Jorinda and Joringel",type:"sleigh",modelHint:"songbird sleigh with feathered runners and cage chimes",palette:{primary:11887990,secondary:15379595},stats:{speed:6,acceleration:7,handling:7,weight:3}},{id:"cage_key_cart",name:"Cage-Key Cart",tale:"Jorinda and Joringel",type:"cart",modelHint:"iron-cage cart with an oversized enchanted key crank",palette:{primary:4869737,secondary:15919588},stats:{speed:6,acceleration:6,handling:7,weight:4}},{id:"swanwing_chariot",name:"Swanwing Chariot",tale:"The Six Swans",type:"chariot",modelHint:"white chariot with sweeping swan-wing fenders",palette:{primary:15330543,secondary:9358054},stats:{speed:7,acceleration:7,handling:7,weight:3}},{id:"goosefeather_coach",name:"Goosefeather Coach",tale:"The Goose Girl",type:"coach",modelHint:"meadow coach trimmed in goose feathers and a talking-horse charm",palette:{primary:11066076,secondary:15858414},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"snow_pillow_sled",name:"Snow Pillow Sled",tale:"Mother Holle",type:"sled",modelHint:"plush snow sled that shakes down feather flurries",palette:{primary:13299960,secondary:9494767},stats:{speed:5,acceleration:5,handling:7,weight:6}},{id:"bearhide_bruiser",name:"Bearhide Bruiser",tale:"Bearskin",type:"bruiser",modelHint:"hulking bear-pelt bruiser with coin-pouch saddlebags",palette:{primary:3810840,secondary:12348453},stats:{speed:6,acceleration:5,handling:4,weight:9}},{id:"river_stag_racer",name:"River Stag Racer",tale:"Brother and Sister",type:"racer",modelHint:"antlered racer that bounds like an enchanted stag",palette:{primary:8435992,secondary:5613104},stats:{speed:8,acceleration:7,handling:6,weight:4}},{id:"silver_fawn_buggy",name:"Silver Fawn Buggy",tale:"Brother and Sister",type:"buggy",modelHint:"gentle silver-fawn buggy with a protective brook charm",palette:{primary:12040100,secondary:14532265},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"serpent_court_kart",name:"Serpent Court Kart",tale:"The White Snake",type:"kart",modelHint:"courtly kart coiled with a white-snake hood ornament",palette:{primary:2976335,secondary:14218204},stats:{speed:7,acceleration:7,handling:7,weight:4}},{id:"juniper_dream_cart",name:"Juniper Dream Cart",tale:"The Juniper Tree",type:"cart",modelHint:"shadowy cart sprouting juniper boughs and bird bones",palette:{primary:3096134,secondary:13292229},stats:{speed:7,acceleration:6,handling:6,weight:4}},{id:"thistle_crown_coupe",name:"Thistle Crown Coupe",tale:"King Thrushbeard",type:"coupe",modelHint:"humble-disguised coupe hiding a thistle crown",palette:{primary:7473591,secondary:16196997},stats:{speed:7,acceleration:6,handling:7,weight:5}},{id:"oathbound_royal_wagon",name:"Oathbound Royal Wagon",tale:"Faithful John",type:"wagon",modelHint:"oath-marked royal wagon armored against three curses",palette:{primary:2575479,secondary:15199471},stats:{speed:6,acceleration:6,handling:6,weight:6}},{id:"ashen_devil_dray",name:"Ashen Devil Dray",tale:"The Devil's Sooty Brother",type:"dray",modelHint:"soot-caked dray belching ember sparks from a furnace core",palette:{primary:1776414,secondary:15228164},stats:{speed:7,acceleration:7,handling:5,weight:6}},{id:"tower_escape_carriage",name:"Tower Escape Carriage",tale:"Maid Maleen",type:"carriage",modelHint:"rubble-scarred carriage with a wall-breaking ram prow",palette:{primary:9077116,secondary:12368049},stats:{speed:6,acceleration:6,handling:7,weight:5}},{id:"goatbell_scamper_kart",name:"Goatbell Scamper Kart",tale:"The Wolf and the Seven Young Kids",type:"kart",modelHint:"tiny nimble kart strung with warning goat-bells",palette:{primary:16170336,secondary:16248290},stats:{speed:7,acceleration:9,handling:7,weight:2}},{id:"cobblers_midnight_cart",name:"Cobbler's Midnight Cart",tale:"The Elves and the Shoemaker",type:"cart",modelHint:"tidy workshop cart finished overnight by unseen elf hands",palette:{primary:7170165,secondary:16763604},stats:{speed:6,acceleration:7,handling:8,weight:3}}],Er=Object.fromEntries(tn.map(i=>[i.id,i])),Am="breadcrumb_buggy",cs=[{id:"black_forest_loop",name:"Black Forest Loop",tale:"General Grimm",biome:"forest",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:110,width:22,segments:160,elevationStyle:"flat"},pickupPattern:"balanced_ring",hazardPattern:"forest_basic",decorationSet:"dark_forest",visualTheme:{sky:328706,fog:658695,road:4010278,border:2635288,light:16444877},hazards:["fallen_logs","fog_banks"],futureRallyPoints:[]},{id:"candy_cottage_circuit",name:"Candy Cottage Circuit",tale:"Hansel and Gretel",biome:"confection",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:96,width:24,segments:140,elevationStyle:"flat"},pickupPattern:"dense_inner",hazardPattern:"sticky_basic",decorationSet:"sweets",visualTheme:{sky:3808299,fog:4858675,road:9067076,border:14711391,light:16766629},hazards:["toffee_slick","gumdrop_bumps"],futureRallyPoints:[]},{id:"grandmothers_hollow",name:"Grandmother's Hollow",tale:"Little Red Cap",biome:"forest",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:100,width:16,segments:150,elevationStyle:"gentle"},pickupPattern:"outer_lane",hazardPattern:"forest_basic",decorationSet:"dark_forest",visualTheme:{sky:724744,fog:1317390,road:4864810,border:6947855,light:15320170},hazards:["wolf_dens","bramble_walls"],futureRallyPoints:[]},{id:"pumpkin_palace_promenade",name:"Pumpkin Palace Promenade",tale:"Aschenputtel",biome:"palace",difficulty:2,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:120,width:26,segments:170,elevationStyle:"banked"},pickupPattern:"twin_arcs",hazardPattern:"none_light",decorationSet:"gilded_palace",visualTheme:{sky:2365236,fog:2891071,road:5917290,border:16032353,light:16771266},hazards:["midnight_chime_zone"],futureRallyPoints:[]},{id:"mirrorwood_pass",name:"Mirrorwood Pass",tale:"Snow White",biome:"mirror_forest",difficulty:3,laps:3,variation:"foggy_outer_ring",layout:{type:"circular",radius:108,width:18,segments:160,elevationStyle:"rolling"},pickupPattern:"mirror_pairs",hazardPattern:"glare_fog",decorationSet:"mirror_glass",visualTheme:{sky:1053466,fog:1778224,road:4608092,border:11868062,light:14744572},hazards:["mirror_glare","fog_banks"],futureRallyPoints:[]},{id:"rapunzel_tower_climb",name:"Rapunzel Tower Climb",tale:"Rapunzel",biome:"tower",difficulty:3,laps:3,variation:"spiral_climb_ring",layout:{type:"circular",radius:88,width:16,segments:180,elevationStyle:"climb"},pickupPattern:"spiral_ascending",hazardPattern:"edge_drop",decorationSet:"stone_tower",visualTheme:{sky:1709872,fog:2302019,road:7041116,border:16765286,light:16774064},hazards:["ledge_drops","falling_braids"],futureRallyPoints:[]},{id:"millers_goldworks",name:"Miller's Goldworks",tale:"Rumpelstiltskin",biome:"mill",difficulty:3,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:80,width:18,segments:150,elevationStyle:"gentle"},pickupPattern:"gold_clusters",hazardPattern:"spindle_traps",decorationSet:"spinning_mill",visualTheme:{sky:1840136,fog:2497292,road:5982767,border:13214247,light:16769162},hazards:["spindle_pits","straw_bales"],futureRallyPoints:[]},{id:"frog_pond_causeway",name:"Frog Pond Causeway",tale:"The Frog Prince",biome:"wetland",difficulty:2,laps:3,variation:"swamp_slick_ring",layout:{type:"circular",radius:102,width:20,segments:150,elevationStyle:"flat"},pickupPattern:"lilypad_hops",hazardPattern:"slick_water",decorationSet:"pond_reeds",visualTheme:{sky:794394,fog:1191974,road:3824202,border:16766474,light:14218204},hazards:["water_slicks","reed_walls"],futureRallyPoints:[]},{id:"moonlit_briar_ring",name:"Moonlit Briar Ring",tale:"Little Briar Rose",biome:"thornwood",difficulty:3,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:106,width:17,segments:165,elevationStyle:"rolling"},pickupPattern:"thorn_gaps",hazardPattern:"thorn_walls",decorationSet:"briar_thorns",visualTheme:{sky:1313567,fog:1905200,road:4142160,border:16740502,light:13154047},hazards:["thorn_walls","sleep_pollen"],futureRallyPoints:[]},{id:"ratcatchers_run",name:"Ratcatcher's Run",tale:"The Pied Piper",biome:"town",difficulty:3,laps:4,variation:"small_chaotic_ring",layout:{type:"circular",radius:84,width:16,segments:160,elevationStyle:"gentle"},pickupPattern:"alley_scatter",hazardPattern:"rat_swarm",decorationSet:"old_town",visualTheme:{sky:1708832,fog:2300460,road:4867154,border:16556817,light:15325350},hazards:["rat_swarms","narrow_alleys"],futureRallyPoints:[]},{id:"seven_at_one_blow_speedway",name:"Seven-at-One-Blow Speedway",tale:"The Brave Little Tailor",biome:"meadow",difficulty:2,laps:4,variation:"large_fast_ring",layout:{type:"circular",radius:145,width:26,segments:180,elevationStyle:"banked"},pickupPattern:"speed_lane",hazardPattern:"giant_stomps",decorationSet:"bright_meadow",visualTheme:{sky:1714746,fog:2373706,road:4873066,border:15087942,light:11066076},hazards:["giant_footprints","belt_signs"],futureRallyPoints:[]},{id:"moon_slipper_ballroom_drift",name:"Moon Slipper Ballroom Drift",tale:"The Twelve Dancing Princesses",biome:"underground_palace",difficulty:4,laps:3,variation:"double_lane_ring",layout:{type:"circular",radius:116,width:28,segments:175,elevationStyle:"banked"},pickupPattern:"paired_lanes",hazardPattern:"polish_slick",decorationSet:"silver_ballroom",visualTheme:{sky:920095,fog:1511985,road:3814736,border:12647935,light:14730236},hazards:["polished_slicks","worn_slippers"],futureRallyPoints:[]},{id:"storm_shore_sprint",name:"Storm Shore Sprint",tale:"The Fisherman and His Wife",biome:"coast",difficulty:3,laps:3,variation:"foggy_outer_ring",layout:{type:"circular",radius:124,width:20,segments:165,elevationStyle:"rolling"},pickupPattern:"tide_line",hazardPattern:"wave_surge",decorationSet:"stormy_shore",visualTheme:{sky:660508,fog:1188400,road:4282986,border:30646,light:13299960},hazards:["wave_surges","wreck_debris"],futureRallyPoints:[]},{id:"wishfish_kingdom_road",name:"Wishfish Kingdom Road",tale:"The Fisherman and His Wife",biome:"palace",difficulty:3,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:130,width:24,segments:170,elevationStyle:"banked"},pickupPattern:"royal_arcs",hazardPattern:"none_light",decorationSet:"sea_palace",visualTheme:{sky:464686,fog:795200,road:3820138,border:16765286,light:15199471},hazards:["greed_quakes"],futureRallyPoints:[]},{id:"golden_goose_parade_route",name:"Golden Goose Parade Route",tale:"The Golden Goose",biome:"town",difficulty:2,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:118,width:24,segments:160,elevationStyle:"flat"},pickupPattern:"parade_line",hazardPattern:"stuck_crowd",decorationSet:"festival_town",visualTheme:{sky:2761744,fog:3484948,road:5984816,border:16766720,light:16775909},hazards:["stuck_crowds","feather_drifts"],futureRallyPoints:[]},{id:"iron_forest_descent",name:"Iron Forest Descent",tale:"Iron Hans",biome:"iron_forest",difficulty:4,laps:3,variation:"large_fast_ring",layout:{type:"circular",radius:140,width:22,segments:180,elevationStyle:"descent"},pickupPattern:"downhill_scatter",hazardPattern:"iron_roots",decorationSet:"iron_woods",visualTheme:{sky:1315084,fog:1906706,road:4866102,border:10914404,light:14524766},hazards:["iron_roots","wild_man_traps"],futureRallyPoints:[]},{id:"songbird_grove",name:"Songbird Grove",tale:"Jorinda and Joringel",biome:"grove",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:98,width:17,segments:150,elevationStyle:"gentle"},pickupPattern:"birdsong_arcs",hazardPattern:"cage_snares",decorationSet:"song_grove",visualTheme:{sky:1448466,fog:2107162,road:4868662,border:15379595,light:15919588},hazards:["cage_snares","thicket_walls"],futureRallyPoints:[]},{id:"stone_castle_of_silence",name:"Stone Castle of Silence",tale:"Jorinda and Joringel",biome:"castle",difficulty:4,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:112,width:20,segments:170,elevationStyle:"flat"},pickupPattern:"corridor_line",hazardPattern:"silence_zones",decorationSet:"silent_stone",visualTheme:{sky:1053206,fog:1579810,road:4212046,border:15919588,light:13225430},hazards:["silence_zones","stone_statues"],futureRallyPoints:[]},{id:"swan_marsh_glideway",name:"Swan Marsh Glideway",tale:"The Six Swans",biome:"wetland",difficulty:3,laps:3,variation:"swamp_slick_ring",layout:{type:"circular",radius:122,width:22,segments:165,elevationStyle:"flat"},pickupPattern:"feather_drift",hazardPattern:"slick_water",decorationSet:"swan_marsh",visualTheme:{sky:1186338,fog:1713712,road:4477532,border:9358054,light:15330543},hazards:["water_slicks","nettle_shirts"],futureRallyPoints:[]},{id:"goose_meadow_road",name:"Goose Meadow Road",tale:"The Goose Girl",biome:"meadow",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:126,width:26,segments:160,elevationStyle:"flat"},pickupPattern:"meadow_line",hazardPattern:"none_light",decorationSet:"open_meadow",visualTheme:{sky:1911316,fog:2570267,road:5925434,border:11066076,light:15858414},hazards:["windy_gusts"],futureRallyPoints:[]},{id:"mother_holle_skyfall",name:"Mother Holle Skyfall",tale:"Mother Holle",biome:"sky",difficulty:4,laps:3,variation:"snow_drift_ring",layout:{type:"circular",radius:134,width:24,segments:175,elevationStyle:"rolling"},pickupPattern:"cloud_scatter",hazardPattern:"snow_drifts",decorationSet:"sky_clouds",visualTheme:{sky:2767434,fog:3821407,road:6978186,border:9494767,light:16777215},hazards:["snow_drifts","pitch_patches"],futureRallyPoints:[]},{id:"bearskin_warpath",name:"Bearskin Warpath",tale:"Bearskin",biome:"battlefield",difficulty:4,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:90,width:18,segments:160,elevationStyle:"rolling"},pickupPattern:"coin_scatter",hazardPattern:"mud_pits",decorationSet:"war_camp",visualTheme:{sky:1577484,fog:2234641,road:4864554,border:12348453,light:14524766},hazards:["mud_pits","coin_traps"],futureRallyPoints:[]},{id:"enchanted_brook_crossing",name:"Enchanted Brook Crossing",tale:"Brother and Sister",biome:"brookland",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:104,width:18,segments:155,elevationStyle:"gentle"},pickupPattern:"brook_line",hazardPattern:"cursed_streams",decorationSet:"green_brook",visualTheme:{sky:1054734,fog:1581587,road:4608559,border:5613104,light:14218204},hazards:["cursed_streams","stag_crossings"],futureRallyPoints:[]},{id:"white_snake_court_circuit",name:"White Snake Court Circuit",tale:"The White Snake",biome:"palace",difficulty:3,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:114,width:22,segments:168,elevationStyle:"banked"},pickupPattern:"court_arcs",hazardPattern:"serpent_coils",decorationSet:"green_court",visualTheme:{sky:858642,fog:1320731,road:3821370,border:14218204,light:15269872},hazards:["serpent_coils","riddle_gates"],futureRallyPoints:[]},{id:"juniper_graveyard_garden",name:"Juniper Graveyard Garden",tale:"The Juniper Tree",biome:"graveyard",difficulty:4,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:98,width:18,segments:165,elevationStyle:"rolling"},pickupPattern:"grave_scatter",hazardPattern:"bone_walls",decorationSet:"juniper_graves",visualTheme:{sky:790288,fog:1317146,road:3555130,border:13292229,light:11121836},hazards:["bone_walls","falling_apples"],futureRallyPoints:[]},{id:"thorn_crown_ridge",name:"Thorn Crown Ridge",tale:"King Thrushbeard",biome:"highland",difficulty:4,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:100,width:17,segments:170,elevationStyle:"climb"},pickupPattern:"ridge_line",hazardPattern:"thorn_walls",decorationSet:"thistle_ridge",visualTheme:{sky:1707812,fog:2364721,road:4601935,border:16196997,light:14723839},hazards:["thorn_walls","cliff_winds"],futureRallyPoints:[]},{id:"faithful_john_harbor_run",name:"Faithful John Harbor Run",tale:"Faithful John",biome:"harbor",difficulty:3,laps:3,variation:"large_fast_ring",layout:{type:"circular",radius:138,width:24,segments:175,elevationStyle:"flat"},pickupPattern:"dock_line",hazardPattern:"crate_stacks",decorationSet:"royal_harbor",visualTheme:{sky:1055270,fog:1582644,road:4477278,border:15199471,light:13358561},hazards:["crate_stacks","gull_swarms"],futureRallyPoints:[]},{id:"soot_and_ember_mine",name:"Soot and Ember Mine",tale:"The Devil's Sooty Brother",biome:"mine",difficulty:5,laps:3,variation:"ember_mine_ring",layout:{type:"circular",radius:86,width:16,segments:170,elevationStyle:"descent"},pickupPattern:"ember_scatter",hazardPattern:"fire_bursts",decorationSet:"ember_mine",visualTheme:{sky:1181704,fog:1903626,road:3810336,border:15228164,light:16752212},hazards:["fire_bursts","soot_clouds"],futureRallyPoints:[]},{id:"maid_maleen_ruin_road",name:"Maid Maleen Ruin Road",tale:"Maid Maleen",biome:"ruins",difficulty:4,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:92,width:18,segments:165,elevationStyle:"rolling"},pickupPattern:"rubble_scatter",hazardPattern:"collapsing_walls",decorationSet:"broken_ruins",visualTheme:{sky:1315599,fog:1907734,road:4473402,border:12368049,light:14078664},hazards:["collapsing_walls","rubble_piles"],futureRallyPoints:[]},{id:"wolfwood_panic_trail",name:"Wolfwood Panic Trail",tale:"The Wolf and the Seven Young Kids",biome:"forest",difficulty:3,laps:4,variation:"narrow_forest_ring",layout:{type:"circular",radius:94,width:15,segments:175,elevationStyle:"rolling"},pickupPattern:"panic_scatter",hazardPattern:"wolf_ambush",decorationSet:"dark_forest",visualTheme:{sky:658696,fog:1185293,road:4340010,border:16170336,light:16248290},hazards:["wolf_ambush","clock_hideouts"],futureRallyPoints:[]},{id:"cobblers_midnight_workshop",name:"Cobbler's Midnight Workshop",tale:"The Elves and the Shoemaker",biome:"workshop",difficulty:2,laps:3,variation:"workshop_tiny_ring",layout:{type:"circular",radius:72,width:16,segments:150,elevationStyle:"flat"},pickupPattern:"bench_scatter",hazardPattern:"tool_clutter",decorationSet:"cobbler_shop",visualTheme:{sky:1446688,fog:2038316,road:4867154,border:16763604,light:16638692},hazards:["tool_clutter","thread_spools"],futureRallyPoints:[]},{id:"grimm_castle_grand_prix",name:"Grimm Castle Grand Prix",tale:"General Grimm",biome:"castle",difficulty:5,laps:4,variation:"large_fast_ring",layout:{type:"circular",radius:150,width:28,segments:200,elevationStyle:"banked"},pickupPattern:"grand_arcs",hazardPattern:"mixed_finale",decorationSet:"grimm_castle",visualTheme:{sky:657170,fog:1183007,road:3814480,border:11868062,light:14723839},hazards:["portcullis_gates","fog_banks","fire_bursts"],futureRallyPoints:[]}],Xo=Object.fromEntries(cs.map(i=>[i.id,i])),Rm="black_forest_loop";function Cm(i){switch(i){case"gentle":return e=>Math.sin(e)*2.2;case"rolling":return e=>Math.sin(e*3)*4+Math.sin(e*1.5)*2;case"climb":return e=>(1-Math.cos(e))*7;case"descent":return e=>(Math.cos(e)-1)*7;case"banked":return e=>Math.sin(e*2)*1.4;case"flat":default:return()=>0}}function Pm(i,e,t){const n=[],r=t,a=(s,o)=>n.push({theta:s,laneOffset:o});for(let s=0;s<e;s++){const o=s/e*Math.PI*2;switch(i){case"dense_inner":a(o,-r*.28);break;case"outer_lane":a(o,r*.32);break;case"twin_arcs":case"royal_arcs":case"court_arcs":case"grand_arcs":a(o,-r*.22),a(o+.06,r*.22);break;case"mirror_pairs":case"paired_lanes":a(o,-r*.25),a(o,r*.25);break;case"spiral_ascending":a(o,-r*.3+s/e*r*.6);break;case"speed_lane":case"parade_line":case"meadow_line":case"dock_line":case"brook_line":case"ridge_line":case"corridor_line":case"tide_line":a(o,0);break;default:a(o,(s%2===0?-1:1)*r*.2)}}return n}function Im(i,e,t){if(i==="none_light")return[];const n=[];for(let r=0;r<e;r++){const a=(r+.5)/e*Math.PI*2,s=(r%3-1)*t*.28;n.push({theta:a,laneOffset:s})}return n}function Lm(i,e){const t=e.layout,n=t.radius,r=t.width,a=t.segments,s=e.visualTheme,o=Cm(t.elevationStyle),l=(U,z=0)=>{const X=n+z;return new C(Math.cos(U)*X,o(U),Math.sin(U)*X)},c=U=>new C(-Math.sin(U),0,Math.cos(U)).normalize(),d=new en;d.name=`track:${e.id}`,i.background=new Ie(s.sky);const p=.0035+(e.difficulty||1)*7e-4;i.fog=new Pr(s.fog,p);const f=new Fl(s.light,s.road,.85);d.add(f);const m=new kl(s.light,.9);m.position.set(n*.6,80,n*.4),d.add(m);const v=new Bl(s.sky,.35);d.add(v);const g=[],h=r/2;for(let U=0;U<=a;U++){const z=U/a*Math.PI*2,X=l(z,-h),H=l(z,h);g.push(X,H)}const u=new ht,E=[],S=[];g.forEach(U=>E.push(U.x,U.y+.02,U.z));for(let U=0;U<a;U++){const z=U*2,X=U*2+1,H=U*2+2,$=U*2+3;S.push(z,X,$,z,$,H)}u.setAttribute("position",new je(E,3)),u.setIndex(S),u.computeVertexNormals();const b=new pt({color:s.road,roughness:.92,metalness:.04,side:Gt});d.add(new ze(u,b));const L=new pt({color:s.border,emissive:s.border,emissiveIntensity:.25,roughness:.6});for(const U of[-1,1]){const z=new Fn(n+U*h,.9,8,Math.max(48,Math.floor(a/2))),X=new ze(z,L);X.rotation.x=Math.PI/2,d.add(X)}const A=new Ie(s.fog).lerp(new Ie(s.road),.4),T=new ze(new Ir(n-h,48),new pt({color:A,roughness:1}));T.rotation.x=-Math.PI/2,T.position.y=-.5,d.add(T);const P=new ze(new ui(n*4,n*4),new pt({color:new Ie(s.sky).lerp(A,.5),roughness:1}));P.rotation.x=-Math.PI/2,P.position.y=-1.2,d.add(P);const W=26+(e.difficulty||1)*4,_=new pt({color:s.border,roughness:.8});for(let U=0;U<W;U++){const z=U/W*Math.PI*2+.04,H=Math.random()<.5?h+6+Math.random()*18:-h-6-Math.random()*(n*.4),$=l(z,H),G=4+Math.random()*12,le=U%3===0?new Ii(1.6,G,6):U%3===1?new Dn(.8,1.2,G,6):new kt(2.5,G*.6,2.5),ae=new ze(le,_);ae.position.set($.x,$.y+G/2-.5,$.z),d.add(ae)}i.add(d);const x=Pm(e.pickupPattern,8+Math.floor(n/24),r),F=Im(e.hazardPattern,(e.hazards||[]).length*2,r);return{id:e.id,config:e,radius:n,width:r,laps:e.laps,toWorld:l,headingAt:c,elevationAt:o,pickupSpawns:x,hazardSpawns:F,bounds:{radius:n,width:r,halfWidth:h},group:d,visualTheme:s}}function Gl(i,e){const t=new en,n=(i.palette&&i.palette.primary)??13421772,r=(e&&e.palette&&e.palette.primary)??(i.palette&&i.palette.secondary)??2236962,a=new pt({color:n,roughness:.55,metalness:.15}),s=new pt({color:r,roughness:.4,metalness:.2,emissive:r,emissiveIntensity:.12}),o=new pt({color:1710618,roughness:.8}),l=i.stats&&i.stats.weight||4,c=2.2+l*.12,d=3.4+l*.08,p=1+l*.06,f=new ze(new kt(c,p,d),a);f.position.y=.9,t.add(f);const m=new ze(new kt(c*.7,p*.7,d*.45),s);m.position.set(0,1.5,-d*.12),t.add(m);let v;switch(i.type){case"sleigh":case"sled":case"glider":v=new ze(new kt(c*1.1,.2,d*1.1),s),v.position.y=.35;break;case"chariot":case"carriage":case"coach":case"wagon":case"dray":case"hauler":v=new ze(new Dn(.4,.4,c*1.2,6),s),v.rotation.z=Math.PI/2,v.position.set(0,1.9,d*.4);break;case"spinner":v=new ze(new Fn(.9,.18,6,12),s),v.position.set(0,1.6,d*.4);break;case"hopper":v=new ze(new Ts(.7,8,6),s),v.position.set(0,1.7,d*.4);break;default:v=new ze(new Ii(.6,1.2,6),s),v.position.set(0,1.7,d*.45),v.rotation.x=Math.PI/2}t.add(v);const g=new Dn(.55,.55,.4,10),h=[[-c/2,.55,d/2-.6],[c/2,.55,d/2-.6],[-c/2,.55,-d/2+.6],[c/2,.55,-d/2+.6]];for(const[u,E,S]of h){const b=new ze(g,o);b.rotation.z=Math.PI/2,b.position.set(u,E,S),t.add(b)}return t.userData.length=d,t}const As=15,Vl=26,Wl=1.6,Xl=.9,Dm=.06,ql=1.55,br=2.2,Yl=6,Kl=.5,$l=2.4,jl=1.4,ds=70,Zl=5,Jl=8,hs=6;function Rs(i,e){return i+Math.random()*(e-i)}function di(i,e,t){return Math.max(e,Math.min(t,i))}let Ql=0;function Um({character:i,kart:e,isPlayer:t,startTheta:n,laneOffset:r}){const a=Gl(e,i),s=i.stats,o=e.stats,l=(s.speed+o.speed)/2,c=(s.acceleration+o.acceleration)/2,d=(s.handling+o.handling)/2;return{id:`racer_${Ql++}`,isPlayer:!!t,character:i,kart:e,aiStyle:i.aiStyle||"balanced",label:t?`${i.name}`:i.name,theta:n,laneOffset:r||0,speed:0,progress:n,lap:0,maxSpeed:Vl+l*Wl,accel:8+c*Xl,handling:.6+d*Dm,luck:s.luck??6,alive:!0,rank:0,finishedAt:null,heldItem:null,effects:{boostUntil:0,shieldUntil:0,slowUntil:0,spinUntil:0},mesh:a}}function Nm({character:i,kart:e,isPlayer:t,start:n,stocks:r}){const a=Gl(e,i),s=i.stats,o=e.stats,l=(s.speed+o.speed)/2,c=(s.acceleration+o.acceleration)/2,d=(s.handling+o.handling)/2;return{id:`fighter_${Ql++}`,isPlayer:!!t,character:i,kart:e,aiStyle:i.aiStyle||"balanced",label:i.name,pos:{x:n.x,z:n.z},heading:n.heading||0,speed:0,maxSpeed:(Vl+l*Wl)*.7,accel:9+c*Xl,turn:1.4+d*.16,luck:s.luck??6,stocks:r??3,alive:!0,invulnUntil:0,kos:0,score:0,rank:0,heldItem:null,effects:{boostUntil:0,shieldUntil:0,slowUntil:0,spinUntil:0},mesh:a}}function Fm(i,e){const t=new en;t.name="environment";const n=e.visualTheme,r=320,a=new Float32Array(r*3),s=e.radius;for(let c=0;c<r;c++){const d=Math.random()*Math.PI*2,p=s*(1.2+Math.random()*1.6);a[c*3]=Math.cos(d)*p,a[c*3+1]=20+Math.random()*120,a[c*3+2]=Math.sin(d)*p}const o=new ht;o.setAttribute("position",new je(a,3));const l=new Nl({color:n.light,size:1.4,transparent:!0,opacity:.55,depthWrite:!1});return t.add(new ym(o,l)),i.add(t),t}function ec(i=13495038){const e=new en,t=new pt({color:i,transparent:!0,opacity:.45,roughness:.1,metalness:.1,emissive:i,emissiveIntensity:.4}),n=new ze(new ci(1.6,0),t);e.add(n);const r=new Mm(new Sm(new ci(1.7,0)),new Ul({color:16777215,transparent:!0,opacity:.8}));e.add(r);const a=new bm(i,.6,16);return e.add(a),e.userData.spin=.9+Math.random()*.6,e.userData.bobPhase=Math.random()*Math.PI*2,e}function tc(i,e,t){i.rotation.y+=i.userData.spin*t,i.position.y=i.userData.baseY+Math.sin(e*2+i.userData.bobPhase)*.6}const fr=[{id:"glass_slipper_shard",name:"Glass Slipper Shard",icon:"💎",category:"offense",rarity:"common",effect:"homing_projectile",implemented:!0,weight:{front:5,middle:8,back:10}},{id:"spinning_wheel_curse",name:"Spinning Wheel Curse",icon:"🧵",category:"trap",rarity:"common",effect:"track_trap",implemented:!0,weight:{front:6,middle:8,back:9}},{id:"wolfs_charge",name:"Wolf's Charge",icon:"🐺",category:"offense",rarity:"uncommon",effect:"forward_dash",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"witchs_oven_blast",name:"Witch's Oven Blast",icon:"🔥",category:"offense",rarity:"uncommon",effect:"fire_burst",implemented:!1,weight:{front:3,middle:6,back:8}},{id:"raven_message_hex",name:"Raven Message Hex",icon:"🐦",category:"disruption",rarity:"rare",effect:"control_scramble",implemented:!1,weight:{front:2,middle:5,back:8}},{id:"thorn_vines",name:"Thorn Vines",icon:"🌿",category:"trap",rarity:"common",effect:"slow_zone",implemented:!0,weight:{front:6,middle:8,back:8}},{id:"magic_mirror_shield",name:"Magic Mirror Shield",icon:"🪞",category:"defense",rarity:"common",effect:"shield",implemented:!0,weight:{front:10,middle:7,back:4}},{id:"mother_holle_snow_veil",name:"Mother Holle Snow Veil",icon:"❄️",category:"disruption",rarity:"uncommon",effect:"visibility_fog",implemented:!1,weight:{front:4,middle:6,back:7}},{id:"white_swan_feather",name:"White Swan Feather",icon:"🪶",category:"defense",rarity:"uncommon",effect:"cleanse",implemented:!1,weight:{front:7,middle:6,back:5}},{id:"faithful_john_ward",name:"Faithful John Ward",icon:"🛡️",category:"defense",rarity:"rare",effect:"invulnerability",implemented:!1,weight:{front:8,middle:5,back:3}},{id:"gingerbread_rush",name:"Gingerbread Rush",icon:"🍪",category:"boost",rarity:"common",effect:"speed_boost",implemented:!0,weight:{front:7,middle:8,back:8}},{id:"seven_league_boots",name:"Seven-League Boots",icon:"👢",category:"boost",rarity:"rare",effect:"strong_boost",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"golden_goose_luck",name:"Golden Goose Luck",icon:"🦢",category:"utility",rarity:"rare",effect:"luck_buff",implemented:!1,weight:{front:4,middle:6,back:7}},{id:"rapunzel_hair_grapple",name:"Rapunzel Hair Grapple",icon:"🦳",category:"utility",rarity:"uncommon",effect:"slingshot_recovery",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"frog_prince_leap",name:"Frog Prince Leap",icon:"🐸",category:"utility",rarity:"uncommon",effect:"hop_traps",implemented:!1,weight:{front:5,middle:6,back:7}},{id:"breadcrumb_trail",name:"Breadcrumb Trail",icon:"🍞",category:"utility",rarity:"common",effect:"steer_assist",implemented:!1,weight:{front:6,middle:6,back:6}}],Nr=Object.fromEntries(fr.map(i=>[i.id,i]));function nc(i,e){const t=Math.max(1,e/3),n=i<=t?"front":i<=t*2?"middle":"back";let r=0;for(const s of fr)r+=s.weight[n];let a=Math.random()*r;for(const s of fr)if(a-=s.weight[n],a<=0)return s.id;return fr[0].id}function wr(i,e){let t=(e-i)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t}function Om(i,e){if(!e.heldItem)return null;const t=Nr[e.heldItem];if(e.heldItem=null,!t)return null;const n=i.time;switch(t.effect){case"speed_boost":return e.effects.boostUntil=n+br,`${t.name}!`;case"shield":return e.effects.shieldUntil=n+Yl,`${t.name} up`;case"slow_zone":return qo(i,e,"slow",e.theta,e.laneOffset),`${t.name} dropped`;case"track_trap":return qo(i,e,"spin",e.theta-.04,e.laneOffset),`${t.name} set`;case"homing_projectile":return km(i,e),`${t.name} fired`;default:return e.effects.boostUntil=n+br*.5,`${t.name} (effect coming soon)`}}function qo(i,e,t,n,r){const a=t==="slow"?5613104:13214247,s=t==="slow"?new Dr(1.4,0):new Fn(1.3,.35,6,10),o=new ze(s,new pt({color:a,emissive:a,emissiveIntensity:.4})),l=i.track.toWorld(n,r);o.position.set(l.x,l.y+1,l.z),i.scene.add(o),i.traps.push({mesh:o,theta:n,laneOffset:r,kind:t,ownerId:e.id,life:12,armedAt:i.time+.4})}function km(i,e){let t=null,n=1/0;for(const o of i.racers){if(o===e||!o.alive)continue;const l=wr(e.theta,o.theta);l>.02&&l<n&&(n=l,t=o)}const r=new ci(.8,0),a=new ze(r,new pt({color:13495038,emissive:13495038,emissiveIntensity:.7})),s=i.track.toWorld(e.theta,e.laneOffset);a.position.set(s.x,s.y+1.2,s.z),i.scene.add(a),i.projectiles.push({mesh:a,theta:e.theta,laneOffset:e.laneOffset,ownerId:e.id,targetId:t?t.id:null})}function ic(i,e){return e.effects.shieldUntil>i.time?(e.effects.shieldUntil=0,!1):(e.effects.spinUntil=i.time+jl,e.speed*=.4,!0)}function Bm(i,e){const t=i.track.radius;for(let n=i.projectiles.length-1;n>=0;n--){const r=i.projectiles[n];r.theta+=ds/t*e;const a=r.targetId?i.racers.find(l=>l.id===r.targetId&&l.alive):null;a&&(r.laneOffset+=(a.laneOffset-r.laneOffset)*Math.min(1,e*3));const s=i.track.toWorld(r.theta,r.laneOffset);r.mesh.position.set(s.x,s.y+1.2,s.z);let o=!1;a&&wr(r.theta,a.theta)<.05&&(ic(i,a)&&a.isPlayer&&(i.flash=i.time+.3),o=!0),r.life=(r.life??4)-e,(o||r.life<=0||!r.targetId)&&(r.targetId,(o||r.life<=0)&&(i.scene.remove(r.mesh),i.projectiles.splice(n,1)))}}function zm(i,e){for(let t=i.traps.length-1;t>=0;t--){const n=i.traps[t];if(n.life-=e,n.mesh.rotation.y+=e*2,i.time>=n.armedAt)for(const r of i.racers){if(!r.alive)continue;const a=wr(n.theta,r.theta)<.05||wr(r.theta,n.theta)<.05,s=Math.abs(r.laneOffset-n.laneOffset)<4;a&&s&&(n.kind==="slow"?r.effects.slowUntil=Math.max(r.effects.slowUntil,i.time+$l):ic(i,r))}n.life<=0&&(i.scene.remove(n.mesh),i.traps.splice(t,1))}}function Hm(i,e){for(const t of i.track.pickupSpawns){const n=e(i.track.visualTheme.light),r=i.track.toWorld(t.theta,t.laneOffset);n.position.set(r.x,r.y+2.2,r.z),n.userData.baseY=r.y+2.2,i.scene.add(n),i.reliquaries.push({group:n,theta:t.theta,laneOffset:t.laneOffset,baseY:r.y+2.2,active:!0,respawnAt:0})}}function Gm(i,e,t){const n=i.time;for(const r of i.reliquaries)if(r.active){t(r.group,n,e);for(const a of i.racers){if(!a.alive||a.heldItem)continue;const s=Math.abs((a.theta-r.theta+Math.PI)%(Math.PI*2)-Math.PI)<.06,o=Math.abs(a.laneOffset-r.laneOffset)<hs;if(s&&o){a.heldItem=nc(a.rank,i.aliveCount),r.active=!1,r.group.visible=!1,r.respawnAt=n+Rs(Zl,Jl);break}}}else n>=r.respawnAt&&(r.active=!0,r.group.visible=!0)}function Vm(){return{timer:As,lastEliminatedId:null}}function Wm(i,e){const t=i.elimination,n=i.racers.filter(a=>a.alive);if(n.length<=1||(t.timer-=e,t.timer>0))return null;t.timer=As;let r=n[0];for(const a of n)a.progress<r.progress&&(r=a);return r.alive=!1,r.eliminatedAt=i.time,r.mesh&&(r.mesh.visible=!1),t.lastEliminatedId=r.id,i.aliveCount=i.racers.filter(a=>a.alive).length,r}const Yo={aggressive:{throttle:1,useBias:1.4,wander:.6},reckless:{throttle:1,useBias:1.1,wander:1.2},balanced:{throttle:.93,useBias:1,wander:.7},cunning:{throttle:.95,useBias:1.2,wander:.5},defensive:{throttle:.88,useBias:.9,wander:.4},steady:{throttle:.9,useBias:.8,wander:.3}};function Xm(i,e){let t=null,n=1/0;for(const r of i.reliquaries){if(!r.active)continue;let a=(r.theta-e.theta)%(Math.PI*2);a<0&&(a+=Math.PI*2),a<n&&a<.8&&(n=a,t=r)}return t?t.laneOffset:null}function qm(i,e,t){const n=Yo[e.aiStyle]||Yo.balanced;e._wander===void 0&&(e._wander=Math.random()*Math.PI*2),e._wander+=t*(.6+Math.random()*.4);let r;const a=e.heldItem?null:Xm(i,e);a!==null?r=a:r=Math.sin(e._wander)*(i.track.width*.3)*n.wander;const s=di((r-e.laneOffset)*.25,-1,1);let o=!1;if(e.heldItem){const c=t*.6*n.useBias;Math.random()<c&&(o=!0)}return{throttle:n.throttle*(e.effects.spinUntil>i.time?.3:1),steer:s,useItem:o}}function us(i,e){const t=i.track.bounds.halfWidth*.88;e.laneOffset=di(e.laneOffset,-t,t)}function Ym(i){const e=i.racers.filter(t=>t.alive);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){const r=e[t],a=e[n];let s=Math.abs(r.theta-a.theta)%(Math.PI*2);s>Math.PI&&(s=Math.PI*2-s),s<.025&&Math.abs(r.laneOffset-a.laneOffset)<2.6&&(r.laneOffset<=a.laneOffset?(r.laneOffset-=1.3,a.laneOffset+=1.3):(r.laneOffset+=1.3,a.laneOffset-=1.3),us(i,r),us(i,a))}}const Ko=Math.PI*2;function Km(i,e,t,n){const r=i.time;let a=e.maxSpeed*di(t.throttle,0,1.2);e.effects.boostUntil>r&&(a*=ql),e.effects.slowUntil>r&&(a*=Kl);const s=e.effects.spinUntil>r;s&&(a*=.35),e.speed+=(a-e.speed)*Math.min(1,n*(e.accel*.22)),e.speed=Math.max(0,e.speed);const o=(8+e.handling*10)*(s?.2:1);if(e.laneOffset+=di(t.steer,-1,1)*o*n,us(i,e),t.useItem&&e.heldItem){const l=Om(i,e);l&&e.isPlayer&&(i.lastItemMsg={text:l,until:r+2})}}function $m(i,e,t){const n=Math.max(8,i.track.radius+e.laneOffset),r=e.speed/n*t;e.theta=(e.theta+r)%Ko,e.progress+=r,e.lap=Math.floor(e.progress/Ko);const a=i.track.toWorld(e.theta,e.laneOffset);e.mesh.position.set(a.x,a.y,a.z);const s=i.track.headingAt(e.theta);e.mesh.rotation.y=Math.atan2(s.x,s.z),e.effects.spinUntil>i.time&&(e.mesh.rotation.y+=Math.sin(i.time*20)*.3)}function jm(i){const e=[...i.racers].sort((t,n)=>t.alive!==n.alive?t.alive?-1:1:n.progress-t.progress);e.forEach((t,n)=>{t.rank=n+1}),i.ranked=e}function Zm(i,e,t){if(i.status!=="racing")return;i.time+=e;for(const a of i.racers){if(!a.alive)continue;const s=a.isPlayer?t:qm(i,a,e);Km(i,a,s,e),$m(i,a,e)}Ym(i),jm(i),Gm(i,e,tc),Bm(i,e),zm(i,e);const n=Wm(i,e);n&&(i.elimNotice={text:`${n.label} eliminated`,until:i.time+2.5},n.isPlayer&&(i.status="lost",i.endRank=n.rank));const r=i.racers.filter(a=>a.alive);r.length===1&&i.status==="racing"&&(i.status=r[0].isPlayer?"won":"lost",i.endRank=1)}function Jm(i){const e=i.state;return{throttle:e.accel?1:e.brake?0:.5,steer:(e.right?1:0)-(e.left?1:0),useItem:e.useItem}}function Qm(i){const e=i.player,t=e.heldItem?Nr[e.heldItem]:null,n=(i.ranked||i.racers).slice(0,6).map(s=>({name:s.label,rank:s.rank,alive:s.alive,isPlayer:s.isPlayer,lap:s.lap}));let r="";i.elimNotice&&i.time<i.elimNotice.until&&(r=i.elimNotice.text),i.lastItemMsg&&i.time<i.lastItemMsg.until&&(r=i.lastItemMsg.text);const a=Math.max(0,Math.ceil(i.elimination.timer));return{title:"GrimmKart.io",speed:Math.round(e.speed),pace:e.alive?`${e.rank} / ${i.racers.length}`:"OUT",timerText:`next out in ${a}s`,subline:`pos ${e.alive?e.rank:"OUT"} · lap ${e.lap}`,alive:i.aliveCount,total:i.racers.length,elimTimer:a,elimInterval:As,lap:e.lap,item:t?{name:t.name,icon:t.icon}:null,leaderboard:n,message:r,status:i.status}}function eg(i){const e=i.player,t=e.heldItem?Nr[e.heldItem]:null,n=(i.ranked||i.fighters).slice(0,6).map(s=>({name:s.label,rank:s.rank,alive:s.alive,isPlayer:s.isPlayer,lap:s.stocks}));let r="";i.koNotice&&i.time<i.koNotice.until&&(r=i.koNotice.text),i.lastItemMsg&&i.time<i.lastItemMsg.until&&(r=i.lastItemMsg.text);const a=Math.max(0,e.stocks);return{title:"GrimmKart.io",speed:Math.round(e.speed),pace:e.alive?`${e.rank} / ${i.fighters.length}`:"OUT",timerText:`★ ${e.kos} KO${e.kos===1?"":"s"}`,subline:e.alive?`pos ${e.rank} · ♥ ${a}`:"OUT",alive:i.aliveCount,total:i.fighters.length,item:t?{name:t.name,icon:t.icon}:null,leaderboard:n,message:r,status:i.status}}function rc(i){const e=document.createElement("div");e.className="hud",e.innerHTML=`
    <div class="hud-top-left"><span class="hud-title">GrimmKart<span class="hud-io">.io</span></span></div>
    <div class="hud-top-right">
      <div class="hud-alive"><span data-alive>10</span><span class="hud-sub">alive</span></div>
      <div class="hud-elim" data-timer>next out in 15s</div>
    </div>
    <div class="hud-bottom-left">
      <div class="hud-speed"><span data-speed>0</span><span class="hud-sub">pace</span></div>
      <div class="hud-pace" data-subline>pos — · lap 0</div>
    </div>
    <div class="hud-item" data-item-wrap hidden>
      <span class="hud-item-icon" data-item-icon>✦</span>
      <span class="hud-item-name" data-item-name></span>
      <span class="hud-item-hint">[Space]</span>
    </div>
    <div class="hud-board"><ol data-board></ol></div>
    <div class="hud-message" data-message></div>
  `,i.appendChild(e);const t=a=>e.querySelector(a),n=t("[data-board]");function r(a){t("[data-alive]").textContent=`${a.alive}`,t("[data-timer]").textContent=a.timerText,t("[data-speed]").textContent=`${a.speed}`,t("[data-subline]").textContent=a.subline;const s=t("[data-item-wrap]");a.item?(s.hidden=!1,t("[data-item-icon]").textContent=a.item.icon,t("[data-item-name]").textContent=a.item.name):s.hidden=!0,n.innerHTML=a.leaderboard.map(l=>`<li class="${l.isPlayer?"me":""} ${l.alive?"":"out"}"><span class="bp">${l.rank}</span> ${l.name}${l.alive?"":" ✕"}</li>`).join("");const o=t("[data-message]");o.textContent=a.message||"",o.classList.toggle("show",!!a.message)}return{el:e,update:r,show(){e.style.display=""},hide(){e.style.display="none"},destroy(){e.remove()}}}class ac{constructor(){this.state={accel:!1,brake:!1,left:!1,right:!1,useItem:!1},this._onKey=this._onKey.bind(this),this._bound=!1,this._touch=null}attach(){this._bound||(window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._bound=!0)}detach(){window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this._touch&&this._touch.el&&this._touch.el.remove(),this._touch=null,this._bound=!1,this.state={accel:!1,brake:!1,left:!1,right:!1,useItem:!1}}_onKey(e){const t=e.type==="keydown";switch(e.code){case"ArrowUp":case"KeyW":this.state.accel=t;break;case"ArrowDown":case"KeyS":this.state.brake=t;break;case"ArrowLeft":case"KeyA":this.state.left=t;break;case"ArrowRight":case"KeyD":this.state.right=t;break;case"Space":case"KeyE":this.state.useItem=t,t&&e.preventDefault();break;default:return}}attachTouch(e){if(!("ontouchstart"in window))return;const t=document.createElement("div");t.className="touch-controls",t.innerHTML=`
      <button data-k="left" class="tc tc-left">◀</button>
      <button data-k="right" class="tc tc-right">▶</button>
      <button data-k="accel" class="tc tc-accel">▲</button>
      <button data-k="brake" class="tc tc-brake">▼</button>
      <button data-k="useItem" class="tc tc-item">✦</button>`;const n=(r,a)=>{r in this.state&&(this.state[r]=a)};t.querySelectorAll("button").forEach(r=>{const a=r.dataset.k,s=l=>{l.preventDefault(),n(a,!0)},o=l=>{l.preventDefault(),n(a,!1)};r.addEventListener("touchstart",s,{passive:!1}),r.addEventListener("touchend",o),r.addEventListener("touchcancel",o),r.addEventListener("mousedown",s),r.addEventListener("mouseup",o),r.addEventListener("mouseleave",o)}),e.appendChild(t),this._touch={el:t}}}class sc{constructor(e){this.camera=e,this._pos=new C,this._look=new C,this._tmp=new C,this._initialized=!1}update(e,t){if(!e)return;const n=this._tmp.copy(e.heading).multiplyScalar(-14),r=this._pos.copy(e.position).add(n);r.y=e.position.y+9;const a=this._initialized?Math.min(1,t*4.5):1;this.camera.position.lerp(r,a),this._look.copy(e.position).add(this._tmp.copy(e.heading).multiplyScalar(10)),this._look.y=e.position.y+2,this.camera.lookAt(this._look),this._initialized=!0}reset(){this._initialized=!1}}function tg(i,{canvas:e,uiRoot:t,onRaceEnd:n}){const r=new Ll({canvas:e,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(window.innerWidth,window.innerHeight);const a=new Dl,s=new Mt(62,window.innerWidth/window.innerHeight,.1,2e3),o=Xo[i.trackId]||Xo.black_forest_loop,l=Lm(a,o);Fm(a,l);const c=Math.max(2,Math.min(16,i.racerCount||10)),d=Hl[i.playerCharacterId]||Un[0],p=Er[i.playerKartId]||tn[0],f=Un.filter(x=>x.id!==d.id).sort(()=>Math.random()-.5),m=[],v=x=>(x%5-2)*l.width*.16;for(let x=0;x<c;x++){let F,U;x===0?(F=d,U=p):(F=f[(x-1)%f.length],U=Er[F.signatureKartId]||tn[x*7%tn.length]);const z=Um({character:F,kart:U,isPlayer:x===0,startTheta:x*.035,laneOffset:v(x)});z.progress=x*.035,m.push(z),a.add(z.mesh)}const g=m[0],h={scene:a,track:l,racers:m,player:g,time:0,status:"racing",aliveCount:c,elimination:Vm(),reliquaries:[],projectiles:[],traps:[],ranked:m.slice(),elimNotice:null,lastItemMsg:null,endRank:null};Hm(h,ec);const u=rc(t),E=new ac;E.attach(),E.attachTouch(t);const S=new sc(s),b=l.toWorld(g.theta,g.laneOffset);s.position.set(b.x,b.y+9,b.z-14);let L=!1,A=!1;const T=new zl;let P=0;function W(){r.setSize(window.innerWidth,window.innerHeight),s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()}window.addEventListener("resize",W);function _(){P=requestAnimationFrame(_);const x=Math.min(.05,T.getDelta()),F=Jm(E);F.useItem=E.state.useItem&&!L,L=E.state.useItem,Zm(h,x,F);const U={position:g.mesh.position,heading:l.headingAt(g.theta)};S.update(U,x),u.update(Qm(h)),r.render(a,s),h.status!=="racing"&&!A&&(A=!0,setTimeout(()=>{typeof n=="function"&&n({won:h.status==="won",rank:h.endRank||g.rank,total:m.length,characterName:d.name})},900))}return _(),{dispose(){cancelAnimationFrame(P),window.removeEventListener("resize",W),E.detach(),u.destroy(),a.traverse(x=>{x.geometry&&x.geometry.dispose?.(),x.material&&(Array.isArray(x.material)?x.material.forEach(F=>F.dispose?.()):x.material.dispose?.())}),r.dispose()}}}const Bt=i=>({enabled:!1,shrinkTo:0,note:i||"Battle-royale shrinking cursed zone — next batch."}),fs=[{id:"gingerbread_colosseum",name:"Gingerbread Colosseum",tale:"Hansel and Gretel",biome:"confection",bounds:{shape:"circle",radius:110},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"ring_and_center",decorationSet:"sweets",visualTheme:{sky:2757408,fog:3808299,ground:8014392,wall:14711391,light:16766629},hazards:["oven_vents","gumdrop_bumpers"],futureCursedZone:Bt()},{id:"mirror_hall_arena",name:"Mirror Hall",tale:"Snow White",biome:"mirror",bounds:{shape:"rect",width:180,depth:140},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"grid",decorationSet:"mirror_glass",visualTheme:{sky:987680,fog:1778224,ground:3752271,wall:11868062,light:14744572},hazards:["glare_panels","shard_fields"],futureCursedZone:Bt()},{id:"thorn_garden_arena",name:"Thorn Garden",tale:"Little Briar Rose",biome:"thornwood",bounds:{shape:"circle",radius:100},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"briar_thorns",visualTheme:{sky:1313567,fog:1905200,ground:3551306,wall:16740502,light:13154047},hazards:["thorn_walls","sleep_pollen"],futureCursedZone:Bt()},{id:"ratcatcher_square",name:"Ratcatcher's Square",tale:"The Pied Piper",biome:"town",bounds:{shape:"rect",width:160,depth:160},stocks:4,matchType:"stock",pickupCount:11,scatterPattern:"perimeter",decorationSet:"old_town",visualTheme:{sky:1708832,fog:2300460,ground:4604494,wall:16556817,light:15325350},hazards:["rat_swarms","market_stalls"],futureCursedZone:Bt()},{id:"iron_forest_pit",name:"Iron Forest Pit",tale:"Iron Hans",biome:"iron_forest",bounds:{shape:"circle",radius:120},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"ring_and_center",decorationSet:"iron_woods",visualTheme:{sky:1315084,fog:1906706,ground:4340272,wall:10914404,light:14524766},hazards:["iron_roots","cage_traps"],futureCursedZone:Bt()},{id:"frozen_skyfall_arena",name:"Frozen Skyfall",tale:"Mother Holle",biome:"sky",bounds:{shape:"circle",radius:130},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"scatter",decorationSet:"sky_clouds",visualTheme:{sky:2241349,fog:3360858,ground:6978186,wall:9494767,light:16777215},hazards:["snow_drifts","pitch_patches"],futureCursedZone:Bt()},{id:"ember_forge_arena",name:"Ember Forge",tale:"The Devil's Sooty Brother",biome:"mine",bounds:{shape:"rect",width:150,depth:120},stocks:2,matchType:"stock",pickupCount:9,scatterPattern:"grid",decorationSet:"ember_mine",visualTheme:{sky:1181704,fog:1903626,ground:3810336,wall:15228164,light:16752212},hazards:["fire_vents","soot_clouds"],futureCursedZone:Bt()},{id:"swan_marsh_basin",name:"Swan Marsh Basin",tale:"The Six Swans",biome:"wetland",bounds:{shape:"circle",radius:115},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"swan_marsh",visualTheme:{sky:1186338,fog:1713712,ground:4345948,wall:9358054,light:15330543},hazards:["water_slicks","reed_walls"],futureCursedZone:Bt()},{id:"juniper_graveyard_arena",name:"Juniper Graveyard",tale:"The Juniper Tree",biome:"graveyard",bounds:{shape:"circle",radius:105},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"juniper_graves",visualTheme:{sky:790288,fog:1317146,ground:3423544,wall:13292229,light:11121836},hazards:["bone_walls","falling_apples"],futureCursedZone:Bt()},{id:"grimm_castle_courtyard",name:"Grimm Castle Courtyard",tale:"General Grimm",biome:"castle",bounds:{shape:"rect",width:190,depth:190},stocks:4,matchType:"stock",pickupCount:12,scatterPattern:"ring_and_center",decorationSet:"grimm_castle",visualTheme:{sky:657170,fog:1183007,ground:3683408,wall:11868062,light:14723839},hazards:["portcullis_gates","fire_vents","fog_banks"],futureCursedZone:Bt("Finale arena — prime candidate for the first shrinking cursed-zone battle royale.")}],$o=Object.fromEntries(fs.map(i=>[i.id,i])),ng="gingerbread_colosseum",Rn=7;function ig(i){if(i.shape==="rect"){const t=i.width/2,n=i.depth/2;return{shape:"rect",hw:t,hd:n,clamp(r,a){const s=Math.max(-t+Rn,Math.min(t-Rn,r)),o=Math.max(-n+Rn,Math.min(n-Rn,a));return{x:s,z:o,hit:s!==r||o!==a}},extent:Math.max(t,n)}}const e=i.radius;return{shape:"circle",radius:e,clamp(t,n){const r=Math.hypot(t,n),a=e-Rn;if(r>a){const s=a/(r||1);return{x:t*s,z:n*s,hit:!0}}return{x:t,z:n,hit:!1}},extent:e}}function rg(i,e,t){const n=[],r=e.extent-Rn-6;for(let a=0;a<t;a++){let s,o;const l=a/t*Math.PI*2;switch(i){case"ring_and_center":a%4===0?(s=a%8===0?r*.18:-r*.18,o=a%3===0?r*.18:-r*.18):(s=Math.cos(l)*r*.6,o=Math.sin(l)*r*.6);break;case"grid":{const d=Math.ceil(Math.sqrt(t)),p=a%d/(d-1||1)-.5,f=Math.floor(a/d)/(d-1||1)-.5;s=p*r*1.5,o=f*r*1.5;break}case"perimeter":s=Math.cos(l)*r*.82,o=Math.sin(l)*r*.82;break;default:s=Math.cos(l*1.7)*r*(.3+.55*(a*37%100/100)),o=Math.sin(l*1.3)*r*(.3+.55*(a*53%100/100))}const c=e.clamp(s,o);n.push({x:c.x,z:c.z})}return n}function ag(i,e){const t=e.visualTheme,n=ig(e.bounds);i.background=new Ie(t.sky),i.fog=new Pr(t.fog,.0035);const r=new en;r.name=`arena:${e.id}`,r.add(new Fl(t.light,t.ground,.9));const a=new kl(t.light,.9);a.position.set(40,90,30),r.add(a),r.add(new Bl(t.sky,.4));const s=new pt({color:t.ground,roughness:.95});let o;n.shape==="circle"?(o=new ze(new Ir(n.radius,64),s),o.rotation.x=-Math.PI/2):(o=new ze(new ui(n.hw*2,n.hd*2),s),o.rotation.x=-Math.PI/2),r.add(o);const l=new pt({color:t.wall,emissive:t.wall,emissiveIntensity:.28,roughness:.6});if(n.shape==="circle"){const m=new ze(new Fn(n.radius,1.6,8,96),l);m.rotation.x=Math.PI/2,m.position.y=2,r.add(m)}else{const m=(v,g,h,u)=>{const E=new ze(new kt(v,5,g),l);E.position.set(h,2.5,u),r.add(E)};m(n.hw*2+4,3,0,-n.hd),m(n.hw*2+4,3,0,n.hd),m(3,n.hd*2+4,-n.hw,0),m(3,n.hd*2+4,n.hw,0)}const c=new pt({color:t.wall,roughness:.8}),d=22;for(let m=0;m<d;m++){const v=m/d*Math.PI*2,g=n.extent-Rn-2,h=4+m%4*3,u=m%3===0?new Ii(1.4,h,6):m%3===1?new kt(2.4,h,2.4):new Dn(.8,1.1,h,6),E=new ze(u,c);E.position.set(Math.cos(v)*g,h/2-.4,Math.sin(v)*g),r.add(E)}i.add(r);const p=rg(e.scatterPattern,n,e.pickupCount||9),f=m=>{const v=[],g=n.extent*.45;for(let h=0;h<m;h++){const u=h/m*Math.PI*2;v.push({x:Math.cos(u)*g,z:Math.sin(u)*g,heading:u+Math.PI})}return v};return{id:e.id,config:e,bounds:n,visualTheme:t,stocks:e.stocks??3,pickupSpawns:p,startPositions:f,group:r}}const sg=2,Tr=4.5;function pi(i,e,t,n){const r=i-t,a=e-n;return r*r+a*a}function oc(i,e){let t=null,n=1/0;for(const r of i.fighters){if(r===e||!r.alive)continue;const a=pi(e.pos.x,e.pos.z,r.pos.x,r.pos.z);a<n&&(n=a,t=r)}return t?{e:t,d:Math.sqrt(n)}:null}function og(i,e){let t=null,n=1/0;for(const r of i.reliquaries){if(!r.active)continue;const a=pi(e.pos.x,e.pos.z,r.x,r.z);a<n&&(n=a,t=r)}return t}function lc(i,e,t){return Math.atan2(e-i.pos.x,t-i.pos.z)}function lg(i,e){let t=(e-i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function Cs(i,e,t){const n=i.time;if(!e.alive||e.invulnUntil>n)return!1;if(e.effects.shieldUntil>n)return e.effects.shieldUntil=0,!1;if(e.stocks-=1,e.effects.spinUntil=n+jl,e.speed*=.2,t&&t!==e&&(t.kos+=1,t.score+=1),e.stocks<=0)e.alive=!1,e.mesh.visible=!1,i.aliveCount=i.fighters.filter(r=>r.alive).length,i.koNotice={text:`${e.label} is out!`,until:n+2.4};else{const r=i.arena.startPositions(i.fighters.length)[Math.floor(Rs(0,i.fighters.length))]||{x:0,z:0,heading:0};e.pos.x=r.x,e.pos.z=r.z,e.heading=r.heading,e.speed=0,e.invulnUntil=n+sg,e.isPlayer&&(i.koNotice={text:`KO! ${e.stocks} stock${e.stocks===1?"":"s"} left`,until:n+2})}return!0}function cg(i,e){const t=oc(i,e),n=new ci(.8,0),r=new ze(n,new pt({color:13495038,emissive:13495038,emissiveIntensity:.7}));r.position.set(e.pos.x,1.4,e.pos.z),i.scene.add(r),i.projectiles.push({mesh:r,x:e.pos.x,z:e.pos.z,heading:e.heading,ownerId:e.id,targetId:t?t.e.id:null,life:3.5})}function jo(i,e,t){const n=t==="slow"?5613104:13214247,r=t==="slow"?new Dr(1.5,0):new Fn(1.4,.35,6,10),a=new ze(r,new pt({color:n,emissive:n,emissiveIntensity:.4}));a.position.set(e.pos.x,1,e.pos.z),i.scene.add(a),i.traps.push({mesh:a,x:e.pos.x,z:e.pos.z,kind:t,ownerId:e.id,life:12,armedAt:i.time+.4})}function dg(i,e){if(!e.heldItem)return null;const t=Nr[e.heldItem];if(e.heldItem=null,!t)return null;const n=i.time;switch(t.effect){case"speed_boost":return e.effects.boostUntil=n+br,`${t.name}!`;case"shield":return e.effects.shieldUntil=n+Yl,`${t.name} up`;case"slow_zone":return jo(i,e,"slow"),`${t.name} dropped`;case"track_trap":return jo(i,e,"spin"),`${t.name} set`;case"homing_projectile":return cg(i,e),`${t.name} fired`;default:return e.effects.boostUntil=n+br*.5,`${t.name} (effect coming soon)`}}function hg(i,e,t,n){const r=i.time,a=e.effects.spinUntil>r;e.heading+=di(t.steer,-1,1)*e.turn*(a?.3:1)*n;let s=e.maxSpeed*t.throttle;e.effects.boostUntil>r&&(s*=ql),e.effects.slowUntil>r&&(s*=Kl),a&&(s*=.3),e.speed+=(s-e.speed)*Math.min(1,n*(e.accel*.25));const o=Math.sin(e.heading),l=Math.cos(e.heading);let c=e.pos.x+o*e.speed*n,d=e.pos.z+l*e.speed*n;const p=i.arena.bounds.clamp(c,d);if(p.hit&&(e.speed*=.4),e.pos.x=p.x,e.pos.z=p.z,t.useItem&&e.heldItem){const f=dg(i,e);f&&e.isPlayer&&(i.lastItemMsg={text:f,until:r+2})}if(e.effects.boostUntil>r&&e.alive)for(const f of i.fighters)f===e||!f.alive||pi(e.pos.x,e.pos.z,f.pos.x,f.pos.z)<Tr*Tr&&Cs(i,f,e)}function ug(i,e,t){e._wander===void 0&&(e._wander=Math.random()*6.28),e._wander+=t;let n,r,a=!1;if(!e.heldItem){const c=og(i,e);c&&(n=c.x,r=c.z)}const s=oc(i,e);n===void 0&&s&&(n=s.e.pos.x,r=s.e.pos.z,e.heldItem&&s.d<60&&Math.random()<t*.9&&(a=!0)),n===void 0&&(n=Math.cos(e._wander)*30,r=Math.sin(e._wander)*30);const o=lc(e,n,r);return{steer:di(lg(e.heading,o)*1.6,-1,1),throttle:e.effects.spinUntil>i.time?.3:.95,useItem:a}}function fg(i,e){for(let t=i.projectiles.length-1;t>=0;t--){const n=i.projectiles[t],r=n.targetId?i.fighters.find(o=>o.id===n.targetId&&o.alive):null;r&&(n.heading=lc({pos:{x:n.x,z:n.z}},r.pos.x,r.pos.z)),n.x+=Math.sin(n.heading)*ds*e,n.z+=Math.cos(n.heading)*ds*e,n.mesh.position.set(n.x,1.4,n.z),n.life-=e;let a=n.life<=0;r&&pi(n.x,n.z,r.pos.x,r.pos.z)<Tr*Tr&&(Cs(i,r,i.fighters.find(o=>o.id===n.ownerId)),a=!0),i.arena.bounds.clamp(n.x,n.z).hit&&(a=!0),a&&(i.scene.remove(n.mesh),i.projectiles.splice(t,1))}}function pg(i,e){for(let t=i.traps.length-1;t>=0;t--){const n=i.traps[t];if(n.life-=e,n.mesh.rotation.y+=e*2,i.time>=n.armedAt)for(const r of i.fighters)!r.alive||r.id===n.ownerId||pi(n.x,n.z,r.pos.x,r.pos.z)<16&&(n.kind==="slow"?r.effects.slowUntil=Math.max(r.effects.slowUntil,i.time+$l):(Cs(i,r,i.fighters.find(a=>a.id===n.ownerId)),n.life=0));n.life<=0&&(i.scene.remove(n.mesh),i.traps.splice(t,1))}}function mg(i,e){const t=i.time;for(const n of i.reliquaries)if(n.active){tc(n.group,t,e);for(const r of i.fighters)if(!(!r.alive||r.heldItem)&&pi(n.x,n.z,r.pos.x,r.pos.z)<hs*hs){r.heldItem=nc(r.rank,i.aliveCount),n.active=!1,n.group.visible=!1,n.respawnAt=t+Rs(Zl,Jl);break}}else t>=n.respawnAt&&(n.active=!0,n.group.visible=!0)}function gg(i){const e=[...i.fighters].sort((t,n)=>t.alive!==n.alive?t.alive?-1:1:n.stocks!==t.stocks?n.stocks-t.stocks:n.score-t.score);e.forEach((t,n)=>{t.rank=n+1}),i.ranked=e}function _g(i,e,t){if(i.status!=="battle")return;i.time+=e;for(const r of i.fighters){if(!r.alive)continue;const a=r.isPlayer?t:ug(i,r,e);hg(i,r,a,e),r.mesh.position.set(r.pos.x,0,r.pos.z),r.mesh.rotation.y=r.heading,r.invulnUntil>i.time?r.mesh.visible=Math.floor(i.time*12)%2===0:r.mesh.visible=!0}fg(i,e),pg(i,e),mg(i,e),gg(i);const n=i.fighters.filter(r=>r.alive);i.aliveCount=n.length,!i.player.alive&&i.status==="battle"?(i.status="lost",i.endRank=i.player.rank):n.length===1&&i.status==="battle"&&(i.status=n[0].isPlayer?"won":"lost",i.endRank=1)}function vg(i){const e=i.state;return{throttle:e.accel?1:e.brake?-.6:0,steer:(e.right?1:0)-(e.left?1:0),useItem:e.useItem}}function xg(i,{canvas:e,uiRoot:t,onMatchEnd:n}){const r=new Ll({canvas:e,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(window.innerWidth,window.innerHeight);const a=new Dl,s=new Mt(64,window.innerWidth/window.innerHeight,.1,2e3),o=$o[i.arenaId]||$o.gingerbread_colosseum,l=ag(a,o),c=Math.max(2,Math.min(16,i.racerCount||8)),d=Hl[i.playerCharacterId]||Un[0],p=Er[i.playerKartId]||tn[0],f=Un.filter(x=>x.id!==d.id).sort(()=>Math.random()-.5),m=l.startPositions(c),v=[];for(let x=0;x<c;x++){let F,U;x===0?(F=d,U=p):(F=f[(x-1)%f.length],U=Er[F.signatureKartId]||tn[x*7%tn.length]);const z=Nm({character:F,kart:U,isPlayer:x===0,start:m[x],stocks:l.stocks});v.push(z),a.add(z.mesh)}const g=v[0],h={scene:a,arena:l,fighters:v,player:g,time:0,status:"battle",aliveCount:c,reliquaries:[],projectiles:[],traps:[],ranked:v.slice(),koNotice:null,lastItemMsg:null,endRank:null};for(const x of l.pickupSpawns){const F=ec(l.visualTheme.light);F.position.set(x.x,2.2,x.z),F.userData.baseY=2.2,a.add(F),h.reliquaries.push({group:F,x:x.x,z:x.z,baseY:2.2,active:!0,respawnAt:0})}const u=rc(t),E=new ac;E.attach(),E.attachTouch(t);const S=new sc(s);s.position.set(g.pos.x,12,g.pos.z-16);let b=!1,L=!1,A=0;const T=new zl,P=new C;function W(){r.setSize(window.innerWidth,window.innerHeight),s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()}window.addEventListener("resize",W);function _(){A=requestAnimationFrame(_);const x=Math.min(.05,T.getDelta()),F=vg(E);F.useItem=E.state.useItem&&!b,b=E.state.useItem,_g(h,x,F),P.set(Math.sin(g.heading),0,Math.cos(g.heading)),S.update({position:g.mesh.position,heading:P},x),u.update(eg(h)),r.render(a,s),h.status!=="battle"&&!L&&(L=!0,setTimeout(()=>{typeof n=="function"&&n({mode:"arena",won:h.status==="won",rank:h.endRank||g.rank,total:v.length,characterName:d.name,kos:g.kos,stocksLeft:Math.max(0,g.stocks),arenaId:o.id})},900))}return _(),{dispose(){cancelAnimationFrame(A),window.removeEventListener("resize",W),E.detach(),u.destroy(),a.traverse(x=>{x.geometry&&x.geometry.dispose?.(),x.material&&(Array.isArray(x.material)?x.material.forEach(F=>F.dispose?.()):x.material.dispose?.())}),r.dispose()}}}const ar={headline:"Back the tale",sub:"You're playing the free prototype. Premium content is on the way — no payment is taken yet.",note:"Presentation only — no checkout, no payment is processed in this build.",tiers:[{id:"free",name:"Free Prototype",price:"$0",period:"",blurb:"The full elimination prototype, free in your browser.",features:["All 32 tracks","All 32 characters & karts","Elimination Royale mode"],cta:"Playing now",ctaState:"active"},{id:"supporter",name:"Supporter",price:"$4.99",period:"one-time",blurb:"Support development + cosmetic extras when they land.",features:["Supporter cosmetic skins","Name in credits","Early access to new cups"],cta:"Coming soon",ctaState:"soon"},{id:"premium",name:"Full Game",price:"$9.99",period:"one-time",blurb:"The complete game: progression, leaderboards, all cups.",features:["Account + progression","Online leaderboards","Premium cups & unlocks"],cta:"Coming soon",ctaState:"soon"}]},Zo=i=>"#"+i.toString(16).padStart(6,"0");function Mg(i,e){const t={mode:"race",raceType:"elimination",playerCharacterId:Tm,playerKartId:Am,trackId:Rm,arenaId:ng,racerCount:10},n=document.createElement("div");n.className="menu",n.innerHTML=`
    <div class="menu-inner">
      <header class="menu-head">
        <h1>GrimmKart<span class="io">.io</span></h1>
        <p class="tagline">A public-domain Grimm folklore kart game — <b>Race</b> the cursed tracks or do <b>Battle</b> in the arenas. Last tale standing wins.</p>
      </header>

      <div class="mode-toggle" role="tablist" aria-label="Game mode">
        <button class="mode-btn" data-mode="race" role="tab">🏁 Race Mode</button>
        <button class="mode-btn" data-mode="arena" role="tab">⚔️ Battle Arena</button>
      </div>
      <p class="mode-desc" data-mode-desc></p>

      <section class="picker">
        <h2>Character <span class="picked" data-pick="char"></span></h2>
        <div class="cards" data-list="char"></div>
      </section>
      <section class="picker">
        <h2>Kart <span class="picked" data-pick="kart"></span></h2>
        <div class="cards" data-list="kart"></div>
      </section>
      <section class="picker" data-show="race">
        <h2>Track <span class="picked" data-pick="track"></span></h2>
        <div class="cards" data-list="track"></div>
      </section>
      <section class="picker" data-show="arena" style="display:none;">
        <h2>Arena <span class="picked" data-pick="arena"></span></h2>
        <div class="cards" data-list="arena"></div>
      </section>

      <section class="controls-row">
        <label><span data-count-label>Racers</span>
          <select data-racers>
            <option>6</option><option>8</option><option selected>10</option><option>12</option><option>16</option>
          </select>
        </label>
        <button class="start-btn" data-start>Start Race ▶</button>
      </section>
      <p class="menu-foot" data-foot></p>

      <section class="pricing" data-pricing></section>
      <p class="byline">A <b>Burnt Thumb Works</b> game · public-domain Grimm folklore · original storybook interpretation.</p>
    </div>
  `,i.appendChild(n);const r={char:n.querySelector('[data-list="char"]'),kart:n.querySelector('[data-list="kart"]'),track:n.querySelector('[data-list="track"]'),arena:n.querySelector('[data-list="arena"]')},a={char:n.querySelector('[data-pick="char"]'),kart:n.querySelector('[data-pick="kart"]'),track:n.querySelector('[data-pick="track"]'),arena:n.querySelector('[data-pick="arena"]')};function s(g,h,u,E,S,b){const L=document.createElement("button");return L.className="card",L.dataset.id=h,L.dataset.kind=g,L.innerHTML=`<span class="swatch" style="background:linear-gradient(135deg, ${Zo(S)}, ${Zo(b)})"></span>
      <span class="card-name">${u}</span><span class="card-sub">${E}</span>`,L.addEventListener("click",()=>c(g,h)),L}Un.forEach(g=>r.char.appendChild(s("char",g.id,g.name,g.tale,g.palette.primary,g.palette.secondary))),tn.forEach(g=>r.kart.appendChild(s("kart",g.id,g.name,g.type,g.palette.primary,g.palette.secondary))),cs.forEach(g=>r.track.appendChild(s("track",g.id,g.name,`${g.biome} · ${g.variation.replace(/_/g," ")}`,g.visualTheme.border,g.visualTheme.road))),fs.forEach(g=>r.arena.appendChild(s("arena",g.id,g.name,`${g.biome} · ${g.bounds.shape} · ${g.stocks} stocks`,g.visualTheme.wall,g.visualTheme.ground)));const o={char:Un,kart:tn,track:cs,arena:fs},l={char:"playerCharacterId",kart:"playerKartId",track:"trackId",arena:"arenaId"};function c(g,h){t[l[g]]=h,r[g].querySelectorAll(".card").forEach(E=>E.classList.toggle("on",E.dataset.id===h));const u=o[g].find(E=>E.id===h);a[g].textContent=u?`— ${u.name}`:""}["char","kart","track","arena"].forEach(g=>c(g,t[l[g]]));const d=n.querySelector("[data-mode-desc]"),p=n.querySelector("[data-foot]"),f=n.querySelector("[data-start]"),m=n.querySelector("[data-count-label]");function v(g){t.mode=g,n.querySelectorAll(".mode-btn").forEach(h=>h.classList.toggle("on",h.dataset.mode===g)),n.querySelectorAll("[data-show]").forEach(h=>{h.style.display=h.dataset.show===g?"":"none"}),g==="arena"?(d.textContent="Free-drive combat in a contained folklore arena. Grab reliquaries, sling items, knock rivals out of their stocks. Last fable standing wins.",f.textContent="Start Battle ⚔️",m.textContent="Fighters",p.innerHTML="Controls: <b>Arrows / WASD</b> drive & turn · <b>Space</b> use item/weapon · boost-ram or hit rivals to take a stock."):(d.textContent="Race varied circular Grimm tracks with items on the course. Elimination: don't be last when the cull comes.",f.textContent="Start Race ▶",m.textContent="Racers",p.innerHTML="Controls: <b>Arrows / WASD</b> steer · <b>Space</b> use item · avoid being last every 15s.")}return n.querySelectorAll(".mode-btn").forEach(g=>g.addEventListener("click",()=>v(g.dataset.mode))),v("race"),n.querySelector("[data-racers]").addEventListener("change",g=>{t.racerCount=parseInt(g.target.value,10)}),f.addEventListener("click",()=>e({...t})),n.querySelector("[data-pricing]").innerHTML=`
    <h2 class="pricing-head">${ar.headline}</h2>
    <p class="pricing-sub">${ar.sub}</p>
    <div class="tiers">
      ${ar.tiers.map(g=>`
        <div class="tier tier--${g.id}">
          <div class="tier-name">${g.name}</div>
          <div class="tier-price">${g.price}${g.period?`<span> / ${g.period}</span>`:""}</div>
          <div class="tier-blurb">${g.blurb}</div>
          <ul class="tier-feats">${g.features.map(h=>`<li>${h}</li>`).join("")}</ul>
          <button class="tier-cta ${g.ctaState==="soon"?"soon":"on"}" ${g.ctaState==="soon"?'disabled aria-disabled="true"':""}>${g.cta}</button>
        </div>`).join("")}
    </div>
    <p class="pricing-note">${ar.note}</p>`,{el:n,show(){n.style.display=""},hide(){n.style.display="none"},destroy(){n.remove()}}}function yg(i,{mode:e,won:t,rank:n,total:r,characterName:a,kos:s,stocksLeft:o,onReplay:l,onMenu:c}){const d=e==="arena",p=t?d?"Last Fable Standing!":"Last Tale Standing!":d?"Knocked Out":"Eliminated";let f;d?f=t?`${a} outlasted ${r-1} rivals — ${s||0} KO${s===1?"":"s"}.`:`${a} fell at ${n} of ${r} · ${s||0} KO${s===1?"":"s"}.`:f=t?`${a} outlasted ${r-1} rivals.`:`${a} finished ${n} of ${r}.`;const m=document.createElement("div");return m.className=`end-screen ${t?"win":"lose"}`,m.innerHTML=`
    <div class="end-card">
      <h1>${p}</h1>
      <p class="end-sub">${f}</p>
      <div class="end-actions">
        <button data-replay>${d?"Battle Again ⚔️":"Race Again ▶"}</button>
        <button data-menu class="ghost">Change Selection</button>
      </div>
    </div>`,i.appendChild(m),m.querySelector("[data-replay]").addEventListener("click",()=>{m.remove(),l()}),m.querySelector("[data-menu]").addEventListener("click",()=>{m.remove(),c()}),{destroy(){m.remove()}}}const cc="grimmkart_stats_v2",Ps=2;function Ma(){return{schemaVersion:Ps,matches:[],totals:{played:0,wins:0,races:0,arenas:0,kos:0,bestPlacement:null}}}function Sg(){try{const i=localStorage.getItem(cc);if(!i)return Ma();const e=JSON.parse(i);return!e||e.schemaVersion!==Ps?Ma():e}catch{return Ma()}}let Eg=0;function bg(i){const e={schemaVersion:Ps,id:`m_${Date.now()}_${Eg++}`,at:new Date().toISOString(),...i};let t;try{t=Sg(),t.matches.push(e),t.matches.length>200&&(t.matches=t.matches.slice(-200));const n=t.totals;n.played+=1,e.result?.won&&(n.wins+=1),e.mode==="race"?n.races+=1:e.mode==="arena"&&(n.arenas+=1),n.kos+=e.kos||0;const r=e.result?.placement;r&&(n.bestPlacement===null||r<n.bestPlacement)&&(n.bestPlacement=r),localStorage.setItem(cc,JSON.stringify(t))}catch{return e}return e}function wg(i,e){const t={mode:i.mode||"race",characterId:e.playerCharacterId,kartId:e.playerKartId,result:{won:!!i.won,placement:i.rank,total:i.total}};return t.mode==="arena"?(t.arenaId=i.arenaId||e.arenaId,t.arenaType="stock",t.kos=i.kos||0,t.stocksLeft=i.stocksLeft??0):(t.trackId=e.trackId,t.raceType=e.raceType||"elimination"),t}const pr=document.getElementById("game-canvas"),ni=document.getElementById("ui-root");let bi=null,mr=null,ps=null;function dc(){bi&&(bi.dispose(),bi=null),ni.innerHTML=""}function hc(i){ps=i,mr&&(mr.destroy(),mr=null),ni.innerHTML="",pr.style.display="",i.mode==="arena"?bi=xg(i,{canvas:pr,uiRoot:ni,onMatchEnd:Jo}):bi=tg(i,{canvas:pr,uiRoot:ni,onRaceEnd:e=>Jo({mode:"race",...e})})}function Jo(i){try{bg(wg(i,ps))}catch{}dc(),yg(ni,{...i,onReplay:()=>hc(ps),onMenu:()=>uc()})}function uc(){dc(),pr.style.display="none",mr=Mg(ni,i=>hc(i))}uc();
