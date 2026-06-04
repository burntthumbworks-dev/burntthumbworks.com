(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const As="169",zc=0,co=1,Hc=2,Sl=1,Gc=2,sn=3,bn=0,bt=1,Bt=2,yn=0,fi=1,ho=2,uo=3,fo=4,Vc=5,kn=100,Wc=101,Xc=102,qc=103,$c=104,Yc=200,Kc=201,jc=202,Zc=203,Ua=204,Na=205,Jc=206,Qc=207,ed=208,td=209,nd=210,id=211,rd=212,ad=213,sd=214,Fa=0,ka=1,Oa=2,gi=3,Ba=4,za=5,Ha=6,Ga=7,bl=0,od=1,ld=2,Mn=0,cd=1,dd=2,hd=3,ud=4,fd=5,pd=6,md=7,El=300,_i=301,vi=302,Va=303,Wa=304,zr=306,Xa=1e3,zn=1001,qa=1002,Lt=1003,gd=1004,$i=1005,zt=1006,Qr=1007,Hn=1008,dn=1009,wl=1010,Tl=1011,Fi=1012,Rs=1013,Gn=1014,on=1015,Bi=1016,Cs=1017,Ps=1018,xi=1020,Al=35902,Rl=1021,Cl=1022,Gt=1023,Pl=1024,Il=1025,pi=1026,yi=1027,Ll=1028,Is=1029,Dl=1030,Ls=1031,Ds=1033,xr=33776,yr=33777,Mr=33778,Sr=33779,$a=35840,Ya=35841,Ka=35842,ja=35843,Za=36196,Ja=37492,Qa=37496,es=37808,ts=37809,ns=37810,is=37811,rs=37812,as=37813,ss=37814,os=37815,ls=37816,cs=37817,ds=37818,hs=37819,us=37820,fs=37821,br=36492,ps=36494,ms=36495,Ul=36283,gs=36284,_s=36285,vs=36286,_d=3200,vd=3201,Nl=0,xd=1,xn="",Xt="srgb",An="srgb-linear",Us="display-p3",Hr="display-p3-linear",Pr="linear",tt="srgb",Ir="rec709",Lr="p3",jn=7680,po=519,yd=512,Md=513,Sd=514,Fl=515,bd=516,Ed=517,wd=518,Td=519,mo=35044,go="300 es",ln=2e3,Dr=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ea=Math.PI/180,xs=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Ad(i,e){return(i%e+e)%e}function ta(i,e,t){return(1-t)*i+t*e}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,r,a,s,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],f=n[2],m=n[5],g=n[8],x=r[0],u=r[3],h=r[6],M=r[1],v=r[4],E=r[7],L=r[2],A=r[5],T=r[8];return a[0]=s*x+o*M+l*L,a[3]=s*u+o*v+l*A,a[6]=s*h+o*E+l*T,a[1]=c*x+d*M+p*L,a[4]=c*u+d*v+p*A,a[7]=c*h+d*E+p*T,a[2]=f*x+m*M+g*L,a[5]=f*u+m*v+g*A,a[8]=f*h+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*a*d+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,f=o*l-d*a,m=c*a-s*l,g=t*p+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=p*x,e[1]=(r*c-d*n)*x,e[2]=(o*n-r*s)*x,e[3]=f*x,e[4]=(d*t-r*l)*x,e[5]=(r*a-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(s*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Pe;function kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){const i=Ur("canvas");return i.style.display="block",i}const _o={};function Er(i){i in _o||(_o[i]=!0,console.warn(i))}function Cd(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Pd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Id(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vo=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xo=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ai={[An]:{transfer:Pr,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Xt]:{transfer:tt,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Hr]:{transfer:Pr,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(xo),fromReference:i=>i.applyMatrix3(vo)},[Us]:{transfer:tt,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(xo),fromReference:i=>i.applyMatrix3(vo).convertLinearToSRGB()}},Ld=new Set([An,Hr]),Xe={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ld.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ai[e].toReference,r=Ai[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ai[i].primaries},getTransfer:function(i){return i===xn?Pr:Ai[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ai[e].luminanceCoefficients)}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class Dd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Ur("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=mi(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ud=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ra(r[s].image)):a.push(ra(r[s]))}else a=ra(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;class Et extends bi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=zn,r=zn,a=zt,s=Hn,o=Gt,l=dn,c=Et.DEFAULT_ANISOTROPY,d=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=zi(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=El;Et.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],m=l[5],g=l[9],x=l[2],u=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,L=(h+1)/2,A=(d+f)/4,T=(p+x)/4,C=(g+u)/4;return v>E&&v>L?v<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(v),r=A/n,a=T/n):E>L?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=A/r,a=C/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=T/a,r=C/a),this.set(n,r,a,t),this}let M=Math.sqrt((u-g)*(u-g)+(p-x)*(p-x)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(u-g)/M,this.y=(p-x)/M,this.z=(f-d)/M,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bl extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3];const f=a[s+0],m=a[s+1],g=a[s+2],x=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(p!==x||l!==f||c!==m||d!==g){let u=1-o;const h=l*f+c*m+d*g+p*x,M=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const L=Math.sqrt(v),A=Math.atan2(L,h*M);u=Math.sin(u*A)/L,o=Math.sin(o*A)/L}const E=o*M;if(l=l*u+f*E,c=c*u+m*E,d=d*u+g*E,p=p*u+x*E,u===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=L,c*=L,d*=L,p*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=a[s],f=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+d*p+l*m-c*f,e[t+1]=l*g+d*f+c*p-o*m,e[t+2]=c*g+d*m+o*f-l*p,e[t+3]=d*g-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),p=o(a/2),f=l(n/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=f*d*p+c*m*g,this._y=c*m*p-f*d*g,this._z=c*d*g+f*m*p,this._w=c*d*p-f*m*g;break;case"YXZ":this._x=f*d*p+c*m*g,this._y=c*m*p-f*d*g,this._z=c*d*g-f*m*p,this._w=c*d*p+f*m*g;break;case"ZXY":this._x=f*d*p-c*m*g,this._y=c*m*p+f*d*g,this._z=c*d*g+f*m*p,this._w=c*d*p-f*m*g;break;case"ZYX":this._x=f*d*p-c*m*g,this._y=c*m*p+f*d*g,this._z=c*d*g-f*m*p,this._w=c*d*p+f*m*g;break;case"YZX":this._x=f*d*p+c*m*g,this._y=c*m*p+f*d*g,this._z=c*d*g-f*m*p,this._w=c*d*p-f*m*g;break;case"XZY":this._x=f*d*p-c*m*g,this._y=c*m*p-f*d*g,this._z=c*d*g+f*m*p,this._w=c*d*p+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-n*c,this._z=a*d+s*c+n*l-r*o,this._w=s*d-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*p+this._w*f,this._x=n*p+this._x*f,this._y=r*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),d=2*(o*t-a*r),p=2*(a*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-a*p,this.z=r+l*p+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new I,yo=new Hi;class Gi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ft):Ft.fromBufferAttribute(a,s),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),Ki.subVectors(this.max,Ri),Jn.subVectors(e.a,Ri),Qn.subVectors(e.b,Ri),ei.subVectors(e.c,Ri),fn.subVectors(Qn,Jn),pn.subVectors(ei,Qn),Cn.subVectors(Jn,ei);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Cn.z,Cn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Cn.z,0,-Cn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Cn.y,Cn.x,0];return!sa(t,Jn,Qn,ei,Ki)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Jn,Qn,ei,Ki))?!1:(ji.crossVectors(fn,pn),t=[ji.x,ji.y,ji.z],sa(t,Jn,Qn,ei,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new I,new I,new I,new I,new I,new I,new I,new I],Ft=new I,Yi=new Gi,Jn=new I,Qn=new I,ei=new I,fn=new I,pn=new I,Cn=new I,Ri=new I,Ki=new I,ji=new I,Pn=new I;function sa(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Pn.fromArray(i,a);const o=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),d=n.dot(Pn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Od=new Gi,Ci=new I,oa=new I;class Vi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Od.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(oa)),this.expandByPoint(Ci.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new I,la=new I,Zi=new I,mn=new I,ca=new I,Ji=new I,da=new I;class Ns{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){la.copy(e).add(t).multiplyScalar(.5),Zi.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(la);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Zi),o=mn.dot(this.direction),l=-mn.dot(Zi),c=mn.lengthSq(),d=Math.abs(1-s*s);let p,f,m,g;if(d>0)if(p=s*l-o,f=s*o-l,g=a*d,p>=0)if(f>=-g)if(f<=g){const x=1/d;p*=x,f*=x,m=p*(p+s*f+2*o)+f*(s*p+f+2*l)+c}else f=a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+c;else f=-a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-s*a+o)),f=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(p=Math.max(0,-(s*a+o)),f=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+f*(f+2*l)+c);else f=s>0?-a:a,p=Math.max(0,-(s*f+o)),m=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(la).addScaledVector(Zi,f),m}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),r=tn.dot(tn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(a=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,r,a){ca.subVectors(t,e),Ji.subVectors(n,e),da.crossVectors(ca,Ji);let s=this.direction.dot(da),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mn.subVectors(this.origin,e);const l=o*this.direction.dot(Ji.crossVectors(mn,Ji));if(l<0)return null;const c=o*this.direction.dot(ca.cross(mn));if(c<0||l+c>s)return null;const d=-o*mn.dot(da);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,r,a,s,o,l,c,d,p,f,m,g,x,u){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,d,p,f,m,g,x,u)}set(e,t,n,r,a,s,o,l,c,d,p,f,m,g,x,u){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=f,h[3]=m,h[7]=g,h[11]=x,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),a=1/ti.setFromMatrixColumn(e,1).length(),s=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const f=s*d,m=s*p,g=o*d,x=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,g=c*d,x=c*p;t[0]=f+x*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,g=c*d,x=c*p;t[0]=f-x*o,t[4]=-s*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*d,t[9]=x-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,m=s*p,g=o*d,x=o*p;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*p,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-f*p,t[8]=g*p+m,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+g,t[10]=f-x*p}else if(e.order==="XZY"){const f=s*l,m=s*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=f*p+x,t[5]=s*d,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*d,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,zd)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),gn.crossVectors(n,Rt),gn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),gn.crossVectors(n,Rt)),gn.normalize(),Qi.crossVectors(Rt,gn),r[0]=gn.x,r[4]=Qi.x,r[8]=Rt.x,r[1]=gn.y,r[5]=Qi.y,r[9]=Rt.y,r[2]=gn.z,r[6]=Qi.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],f=n[9],m=n[13],g=n[2],x=n[6],u=n[10],h=n[14],M=n[3],v=n[7],E=n[11],L=n[15],A=r[0],T=r[4],C=r[8],G=r[12],_=r[1],S=r[5],k=r[9],N=r[13],V=r[2],q=r[6],P=r[10],W=r[14],H=r[3],te=r[7],re=r[11],ge=r[15];return a[0]=s*A+o*_+l*V+c*H,a[4]=s*T+o*S+l*q+c*te,a[8]=s*C+o*k+l*P+c*re,a[12]=s*G+o*N+l*W+c*ge,a[1]=d*A+p*_+f*V+m*H,a[5]=d*T+p*S+f*q+m*te,a[9]=d*C+p*k+f*P+m*re,a[13]=d*G+p*N+f*W+m*ge,a[2]=g*A+x*_+u*V+h*H,a[6]=g*T+x*S+u*q+h*te,a[10]=g*C+x*k+u*P+h*re,a[14]=g*G+x*N+u*W+h*ge,a[3]=M*A+v*_+E*V+L*H,a[7]=M*T+v*S+E*q+L*te,a[11]=M*C+v*k+E*P+L*re,a[15]=M*G+v*N+E*W+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],f=e[10],m=e[14],g=e[3],x=e[7],u=e[11],h=e[15];return g*(+a*l*p-r*c*p-a*o*f+n*c*f+r*o*m-n*l*m)+x*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*d-a*l*d)+u*(+t*c*p-t*o*m-a*s*p+n*s*m+a*o*d-n*c*d)+h*(-r*o*d-t*l*p+t*o*f+r*s*p-n*s*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],f=e[10],m=e[11],g=e[12],x=e[13],u=e[14],h=e[15],M=p*u*c-x*f*c+x*l*m-o*u*m-p*l*h+o*f*h,v=g*f*c-d*u*c-g*l*m+s*u*m+d*l*h-s*f*h,E=d*x*c-g*p*c+g*o*m-s*x*m-d*o*h+s*p*h,L=g*p*l-d*x*l-g*o*f+s*x*f+d*o*u-s*p*u,A=t*M+n*v+r*E+a*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(x*f*a-p*u*a-x*r*m+n*u*m+p*r*h-n*f*h)*T,e[2]=(o*u*a-x*l*a+x*r*c-n*u*c-o*r*h+n*l*h)*T,e[3]=(p*l*a-o*f*a-p*r*c+n*f*c+o*r*m-n*l*m)*T,e[4]=v*T,e[5]=(d*u*a-g*f*a+g*r*m-t*u*m-d*r*h+t*f*h)*T,e[6]=(g*l*a-s*u*a-g*r*c+t*u*c+s*r*h-t*l*h)*T,e[7]=(s*f*a-d*l*a+d*r*c-t*f*c-s*r*m+t*l*m)*T,e[8]=E*T,e[9]=(g*p*a-d*x*a-g*n*m+t*x*m+d*n*h-t*p*h)*T,e[10]=(s*x*a-g*o*a+g*n*c-t*x*c-s*n*h+t*o*h)*T,e[11]=(d*o*a-s*p*a-d*n*c+t*p*c+s*n*m-t*o*m)*T,e[12]=L*T,e[13]=(d*x*r-g*p*r+g*n*f-t*x*f-d*n*u+t*p*u)*T,e[14]=(g*o*r-s*x*r-g*n*l+t*x*l+s*n*u-t*o*u)*T,e[15]=(s*p*r-d*o*r+d*n*l-t*p*l-s*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,p=o+o,f=a*c,m=a*d,g=a*p,x=s*d,u=s*p,h=o*p,M=l*c,v=l*d,E=l*p,L=n.x,A=n.y,T=n.z;return r[0]=(1-(x+h))*L,r[1]=(m+E)*L,r[2]=(g-v)*L,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(f+h))*A,r[6]=(u+M)*A,r[7]=0,r[8]=(g+v)*T,r[9]=(u-M)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ti.set(r[0],r[1],r[2]).length();const s=ti.set(r[4],r[5],r[6]).length(),o=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/a,d=1/s,p=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=d,kt.elements[5]*=d,kt.elements[6]*=d,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,t.setFromRotationMatrix(kt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=ln){const l=this.elements,c=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(o===ln)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Dr)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=ln){const l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(s-a),f=(t+e)*c,m=(n+r)*d;let g,x;if(o===ln)g=(s+a)*p,x=-2*p;else if(o===Dr)g=a*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new I,kt=new nt,Bd=new I(0,0,0),zd=new I(1,1,1),gn=new I,Qi=new I,Rt=new I,Mo=new nt,So=new Hi;class Jt{constructor(e=0,t=0,n=0,r=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const bo=new I,ni=new Hi,nn=new nt,er=new I,Pi=new I,Gd=new I,Vd=new Hi,Eo=new I(1,0,0),wo=new I(0,1,0),To=new I(0,0,1),Ao={type:"added"},Wd={type:"removed"},ii={type:"childadded",child:null},ha={type:"childremoved",child:null};class ot extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new I,t=new Jt,n=new Hi,r=new I(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return bo.copy(e).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Pi,er,this.up):nn.lookAt(er,Pi,this.up),this.quaternion.setFromRotationMatrix(nn),r&&(nn.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(nn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ao),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ao),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),f=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ot.DEFAULT_UP=new I(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new I,rn=new I,ua=new I,an=new I,ri=new I,ai=new I,Ro=new I,fa=new I,pa=new I,ma=new I,ga=new Ke,_a=new Ke,va=new Ke;class Ht{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ot.subVectors(r,t),rn.subVectors(n,t),ua.subVectors(e,t);const s=Ot.dot(Ot),o=Ot.dot(rn),l=Ot.dot(ua),c=rn.dot(rn),d=rn.dot(ua),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const f=1/p,m=(c*l-o*d)*f,g=(s*d-o*l)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,an.x),l.addScaledVector(s,an.y),l.addScaledVector(o,an.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),va.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ga,a.x),s.addScaledVector(_a,a.y),s.addScaledVector(va,a.z),s}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),rn.subVectors(e,t),Ot.cross(rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ot.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;ri.subVectors(r,n),ai.subVectors(a,n),fa.subVectors(e,n);const l=ri.dot(fa),c=ai.dot(fa);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,r);const d=ri.dot(pa),p=ai.dot(pa);if(d>=0&&p<=d)return t.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(ri,s);ma.subVectors(e,a);const m=ri.dot(ma),g=ai.dot(ma);if(g>=0&&m<=g)return t.copy(a);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ai,o);const u=d*g-m*p;if(u<=0&&p-d>=0&&m-g>=0)return Ro.subVectors(a,r),o=(p-d)/(p-d+(m-g)),t.copy(r).addScaledVector(Ro,o);const h=1/(u+x+f);return s=x*h,o=f*h,t.copy(n).addScaledVector(ri,s).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},tr={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Ad(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=xa(s,a,e+1/3),this.g=xa(s,a,e),this.b=xa(s,a,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Xe.fromWorkingColorSpace(pt.copy(this),e),Math.round(St(pt.r*255,0,255))*65536+Math.round(St(pt.g*255,0,255))*256+Math.round(St(pt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,r=pt.g,a=pt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-n)/p+2;break;case a:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Xt){Xe.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,r=pt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(tr);const n=ta(_n.h,tr.h,t),r=ta(_n.s,tr.s,t),a=ta(_n.l,tr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Ie;Ie.NAMES=Hl;let Xd=0;class $n extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=fi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new I,nr=new De;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),e}}class Gl extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vl extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qd=0;const It=new nt,ya=new ot,si=new I,Ct=new Gi,Ii=new Gi,dt=new I;class ut extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kl(e)?Vl:Gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ct.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Ct.min,Ii.min),Ct.expandByPoint(dt),dt.addVectors(Ct.max,Ii.max),Ct.expandByPoint(dt)):(Ct.expandByPoint(Ii.min),Ct.expandByPoint(Ii.max))}Ct.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)dt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)dt.fromBufferAttribute(o,c),l&&(si.fromBufferAttribute(e,c),dt.add(si)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,d=new I,p=new I,f=new De,m=new De,g=new De,x=new I,u=new I;function h(C,G,_){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,G),p.fromBufferAttribute(n,_),f.fromBufferAttribute(a,C),m.fromBufferAttribute(a,G),g.fromBufferAttribute(a,_),d.sub(c),p.sub(c),m.sub(f),g.sub(f);const S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(S),u.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(S),o[C].add(x),o[G].add(x),o[_].add(x),l[C].add(u),l[G].add(u),l[_].add(u))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,G=M.length;C<G;++C){const _=M[C],S=_.start,k=_.count;for(let N=S,V=S+k;N<V;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new I,E=new I,L=new I,A=new I;function T(C){L.fromBufferAttribute(r,C),A.copy(L);const G=o[C];v.copy(G),v.sub(L.multiplyScalar(L.dot(G))).normalize(),E.crossVectors(A,G);const S=E.dot(l[C])<0?-1:1;s.setXYZW(C,v.x,v.y,v.z,S)}for(let C=0,G=M.length;C<G;++C){const _=M[C],S=_.start,k=_.count;for(let N=S,V=S+k;N<V;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,a=new I,s=new I,o=new I,l=new I,c=new I,d=new I,p=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),u=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,u),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,u),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let x=0,u=l.length;x<u;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let h=0;h<d;h++)f[g++]=c[m++]}return new Kt(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],p=a[c];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new nt,In=new Ns,ir=new Vi,Po=new I,rr=new I,ar=new I,sr=new I,Ma=new I,or=new I,Io=new I,lr=new I;class Le extends ot{constructor(e=new ut,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){or.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],p=a[l];d!==0&&(Ma.fromBufferAttribute(p,e),s?or.addScaledVector(Ma,d):or.addScaledVector(Ma.sub(t),d))}t.add(or)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(a),In.copy(e.ray).recast(e.near),!(ir.containsPoint(In.origin)===!1&&(In.intersectSphere(ir,Po)===null||In.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Co.copy(a).invert(),In.copy(e.ray).applyMatrix4(Co),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){const u=f[g],h=s[u.materialIndex],M=Math.max(u.start,m.start),v=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let E=M,L=v;E<L;E+=3){const A=o.getX(E),T=o.getX(E+1),C=o.getX(E+2);r=cr(this,h,e,n,c,d,p,A,T,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let u=g,h=x;u<h;u+=3){const M=o.getX(u),v=o.getX(u+1),E=o.getX(u+2);r=cr(this,s,e,n,c,d,p,M,v,E),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){const u=f[g],h=s[u.materialIndex],M=Math.max(u.start,m.start),v=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let E=M,L=v;E<L;E+=3){const A=E,T=E+1,C=E+2;r=cr(this,h,e,n,c,d,p,A,T,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let u=g,h=x;u<h;u+=3){const M=u,v=u+1,E=u+2;r=cr(this,s,e,n,c,d,p,M,v,E),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function $d(i,e,t,n,r,a,s,o){let l;if(e.side===bt?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===bn,o),l===null)return null;lr.copy(o),lr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:i}}function cr(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,rr),i.getVertexPosition(l,ar),i.getVertexPosition(c,sr);const d=$d(i,e,t,n,rr,ar,sr,Io);if(d){const p=new I;Ht.getBarycoord(Io,rr,ar,sr,p),r&&(d.uv=Ht.getInterpolatedAttribute(r,o,l,c,p,new De)),a&&(d.uv1=Ht.getInterpolatedAttribute(a,o,l,c,p,new De)),s&&(d.normal=Ht.getInterpolatedAttribute(s,o,l,c,p,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Ht.getNormal(rr,ar,sr,f.normal),d.face=f,d.barycoord=p}return d}class Dt extends ut{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],p=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function g(x,u,h,M,v,E,L,A,T,C,G){const _=E/T,S=L/C,k=E/2,N=L/2,V=A/2,q=T+1,P=C+1;let W=0,H=0;const te=new I;for(let re=0;re<P;re++){const ge=re*S-N;for(let He=0;He<q;He++){const qe=He*_-k;te[x]=qe*M,te[u]=ge*v,te[h]=V,c.push(te.x,te.y,te.z),te[x]=0,te[u]=0,te[h]=A>0?1:-1,d.push(te.x,te.y,te.z),p.push(He/T),p.push(1-re/C),W+=1}}for(let re=0;re<C;re++)for(let ge=0;ge<T;ge++){const He=f+ge+q*re,qe=f+ge+q*(re+1),$=f+(ge+1)+q*(re+1),J=f+(ge+1)+q*re;l.push(He,qe,J),l.push(qe,$,J),H+=6}o.addGroup(m,H,G),m+=H,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gt(i){const e={};for(let t=0;t<i.length;t++){const n=Mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Yd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Kd={clone:Mi,merge:gt};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xl extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new I,Lo=new De,Do=new De;class _t extends Xl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,Lo,Do),t.subVectors(Do,Lo)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class Jd extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _t(oi,li,e,t);r.layers=this.layers,this.add(r);const a=new _t(oi,li,e,t);a.layers=this.layers,this.add(a);const s=new _t(oi,li,e,t);s.layers=this.layers,this.add(s);const o=new _t(oi,li,e,t);o.layers=this.layers,this.add(o);const l=new _t(oi,li,e,t);l.layers=this.layers,this.add(l);const c=new _t(oi,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ql extends Et{constructor(e,t,n,r,a,s,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qd extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ql(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dt(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:yn});a.uniforms.tEquirect.value=t;const s=new Le(r,a),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=zt),new Jd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Sa=new I,eh=new I,th=new Pe;class Nn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Sa.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||th.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Vi,dr=new I;class Fs{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,a=new Nn,s=new Nn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],p=r[6],f=r[7],m=r[8],g=r[9],x=r[10],u=r[11],h=r[12],M=r[13],v=r[14],E=r[15];if(n[0].setComponents(l-a,f-c,u-m,E-h).normalize(),n[1].setComponents(l+a,f+c,u+m,E+h).normalize(),n[2].setComponents(l+s,f+d,u+g,E+M).normalize(),n[3].setComponents(l-s,f-d,u-g,E-M).normalize(),n[4].setComponents(l-o,f-p,u-x,E-v).normalize(),t===ln)n[5].setComponents(l+o,f+p,u+x,E+v).normalize();else if(t===Dr)n[5].setComponents(o,p,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(dr.x=r.normal.x>0?e.max.x:e.min.x,dr.y=r.normal.y>0?e.max.y:e.min.y,dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $l(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function nh(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){const g=p[f],x=p[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){const x=p[m];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Ei extends ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,p=e/o,f=t/l,m=[],g=[],x=[],u=[];for(let h=0;h<d;h++){const M=h*f-s;for(let v=0;v<c;v++){const E=v*p-a;g.push(E,-M,0),x.push(0,0,1),u.push(v/o),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const v=M+c*h,E=M+c*(h+1),L=M+1+c*(h+1),A=M+1+c*h;m.push(v,E,A),m.push(E,L,A)}this.setIndex(m),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rh=`#ifdef USE_ALPHAHASH
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
#endif`,ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
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
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
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
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gh=`#ifdef USE_IRIDESCENCE
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
#endif`,_h=`#ifdef USE_BUMPMAP
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
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Th=`#define PI 3.141592653589793
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
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`
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
}`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
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
}`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
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
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
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
#endif`,tu=`struct PhysicalMaterial {
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
}`,nu=`
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,su=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uu=`#if defined( USE_POINTS_UV )
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
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wu=`#ifdef USE_NORMALMAP
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
#endif`,Tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hu=`float getShadowMask() {
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
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
#endif`,Wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xu=`#ifdef USE_SKINNING
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
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ku=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,hf=`#define DISTANCE
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
}`,uf=`#define DISTANCE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
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
}`,gf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,vf=`uniform vec3 diffuse;
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
}`,xf=`#define LAMBERT
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
}`,yf=`#define LAMBERT
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
}`,Mf=`#define MATCAP
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
}`,Sf=`#define MATCAP
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
}`,bf=`#define NORMAL
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
}`,Ef=`#define NORMAL
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
}`,wf=`#define PHONG
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
}`,Tf=`#define PHONG
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
}`,Af=`#define STANDARD
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
}`,Rf=`#define STANDARD
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
}`,Cf=`#define TOON
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
}`,Pf=`#define TOON
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
}`,If=`uniform float size;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Df=`#include <common>
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
}`,Uf=`uniform vec3 color;
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
}`,Nf=`uniform float rotation;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:ih,alphahash_pars_fragment:rh,alphamap_fragment:ah,alphamap_pars_fragment:sh,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:dh,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:_h,clipping_planes_fragment:vh,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:bh,color_pars_vertex:Eh,color_vertex:wh,common:Th,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Ph,emissivemap_fragment:Ih,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Uh,envmap_fragment:Nh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:kh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:Kh,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:Gh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:$h,lights_pars_begin:Yh,lights_toon_fragment:jh,lights_toon_pars_fragment:Zh,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:eu,lights_physical_pars_fragment:tu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:ru,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:su,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:du,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphinstance_vertex:mu,morphcolor_vertex:gu,morphnormal_vertex:_u,morphtarget_pars_vertex:vu,morphtarget_vertex:xu,normal_fragment_begin:yu,normal_fragment_maps:Mu,normal_pars_fragment:Su,normal_pars_vertex:bu,normal_vertex:Eu,normalmap_pars_fragment:wu,clearcoat_normal_fragment_begin:Tu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:Ru,iridescence_pars_fragment:Cu,opaque_fragment:Pu,packing:Iu,premultiplied_alpha_fragment:Lu,project_vertex:Du,dithering_fragment:Uu,dithering_pars_fragment:Nu,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:ku,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:Bu,shadowmap_vertex:zu,shadowmask_pars_fragment:Hu,skinbase_vertex:Gu,skinning_pars_vertex:Vu,skinning_vertex:Wu,skinnormal_vertex:Xu,specularmap_fragment:qu,specularmap_pars_fragment:$u,tonemapping_fragment:Yu,tonemapping_pars_fragment:Ku,transmission_fragment:ju,transmission_pars_fragment:Zu,uv_pars_fragment:Ju,uv_pars_vertex:Qu,uv_vertex:ef,worldpos_vertex:tf,background_vert:nf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:sf,cube_vert:of,cube_frag:lf,depth_vert:cf,depth_frag:df,distanceRGBA_vert:hf,distanceRGBA_frag:uf,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:_f,meshbasic_frag:vf,meshlambert_vert:xf,meshlambert_frag:yf,meshmatcap_vert:Mf,meshmatcap_frag:Sf,meshnormal_vert:bf,meshnormal_frag:Ef,meshphong_vert:wf,meshphong_frag:Tf,meshphysical_vert:Af,meshphysical_frag:Rf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:If,points_frag:Lf,shadow_vert:Df,shadow_frag:Uf,sprite_vert:Nf,sprite_frag:Ff},ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},qt={basic:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:gt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:gt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:gt([ne.points,ne.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:gt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:gt([ne.common,ne.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:gt([ne.sprite,ne.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:gt([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:gt([ne.lights,ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};qt.physical={uniforms:gt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const hr={r:0,b:0,g:0},Dn=new Jt,kf=new nt;function Of(i,e,t,n,r,a,s){const o=new Ie(0);let l=a===!0?0:1,c,d,p=null,f=0,m=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function x(M){let v=!1;const E=g(M);E===null?h(o,l):E&&E.isColor&&(h(E,1),v=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(M,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===zr)?(d===void 0&&(d=new Le(new Dt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Mi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Dn.copy(v.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(Dn)),d.material.toneMapped=Xe.getTransfer(E.colorSpace)!==tt,(p!==E||f!==E.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=E,f=E.version,m=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Le(new Ei(2,2),new En({name:"BackgroundMaterial",uniforms:Mi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=E,f=E.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,v){M.getRGB(hr,Wl(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(o,l)},render:x,addToRenderList:u}}function Bf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(_,S,k,N,V){let q=!1;const P=p(N,k,S);a!==P&&(a=P,c(a.object)),q=m(_,N,k,V),q&&g(_,N,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,E(_,S,k,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function p(_,S,k){const N=k.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let q=V[S.id];q===void 0&&(q={},V[S.id]=q);let P=q[N];return P===void 0&&(P=f(l()),q[N]=P),P}function f(_){const S=[],k=[],N=[];for(let V=0;V<t;V++)S[V]=0,k[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:N,object:_,attributes:{},index:null}}function m(_,S,k,N){const V=a.attributes,q=S.attributes;let P=0;const W=k.getAttributes();for(const H in W)if(W[H].location>=0){const re=V[H];let ge=q[H];if(ge===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),re===void 0||re.attribute!==ge||ge&&re.data!==ge.data)return!0;P++}return a.attributesNum!==P||a.index!==N}function g(_,S,k,N){const V={},q=S.attributes;let P=0;const W=k.getAttributes();for(const H in W)if(W[H].location>=0){let re=q[H];re===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));const ge={};ge.attribute=re,re&&re.data&&(ge.data=re.data),V[H]=ge,P++}a.attributes=V,a.attributesNum=P,a.index=N}function x(){const _=a.newAttributes;for(let S=0,k=_.length;S<k;S++)_[S]=0}function u(_){h(_,0)}function h(_,S){const k=a.newAttributes,N=a.enabledAttributes,V=a.attributeDivisors;k[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),V[_]!==S&&(i.vertexAttribDivisor(_,S),V[_]=S)}function M(){const _=a.newAttributes,S=a.enabledAttributes;for(let k=0,N=S.length;k<N;k++)S[k]!==_[k]&&(i.disableVertexAttribArray(k),S[k]=0)}function v(_,S,k,N,V,q,P){P===!0?i.vertexAttribIPointer(_,S,k,V,q):i.vertexAttribPointer(_,S,k,N,V,q)}function E(_,S,k,N){x();const V=N.attributes,q=k.getAttributes(),P=S.defaultAttributeValues;for(const W in q){const H=q[W];if(H.location>=0){let te=V[W];if(te===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),te!==void 0){const re=te.normalized,ge=te.itemSize,He=e.get(te);if(He===void 0)continue;const qe=He.buffer,$=He.type,J=He.bytesPerElement,pe=$===i.INT||$===i.UNSIGNED_INT||te.gpuType===Rs;if(te.isInterleavedBufferAttribute){const ce=te.data,Ae=ce.stride,Me=te.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)h(H.location+Fe,ce.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)u(H.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Fe=0;Fe<H.locationSize;Fe++)v(H.location+Fe,ge/H.locationSize,$,re,Ae*J,(Me+ge/H.locationSize*Fe)*J,pe)}else{if(te.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)h(H.location+ce,te.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<H.locationSize;ce++)u(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ce=0;ce<H.locationSize;ce++)v(H.location+ce,ge/H.locationSize,$,re,ge*J,ge/H.locationSize*ce*J,pe)}}else if(P!==void 0){const re=P[W];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(H.location,re);break;case 3:i.vertexAttrib3fv(H.location,re);break;case 4:i.vertexAttrib4fv(H.location,re);break;default:i.vertexAttrib1fv(H.location,re)}}}}M()}function L(){C();for(const _ in n){const S=n[_];for(const k in S){const N=S[k];for(const V in N)d(N[V].object),delete N[V];delete S[k]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const k in S){const N=S[k];for(const V in N)d(N[V].object),delete N[V];delete S[k]}delete n[_.id]}function T(_){for(const S in n){const k=n[S];if(k[_.id]===void 0)continue;const N=k[_.id];for(const V in N)d(N[V].object),delete N[V];delete k[_.id]}}function C(){G(),s=!0,a!==r&&(a=r,c(a.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:G,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:u,disableUnusedAttributes:M}}function zf(i,e,t){let n;function r(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,p){p!==0&&(i.drawArraysInstanced(n,c,d,p),t.update(d,n,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function l(c,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Gt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==on&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:L,maxSamples:A}}function Gf(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Nn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,m){const g=p.clippingPlanes,x=p.clipIntersection,u=p.clipShadows,h=i.get(p);if(!r||g===null||g.length===0||a&&!u)a?d(null):c();else{const M=a?0:n,v=M*4;let E=h.clippingState||null;l.value=E,E=d(g,f,v,m);for(let L=0;L!==v;++L)E[L]=t[L];h.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,m,g){const x=p!==null?p.length:0;let u=null;if(x!==0){if(u=l.value,g!==!0||u===null){const h=m+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(u===null||u.length<h)&&(u=new Float32Array(h));for(let v=0,E=m;v!==x;++v,E+=4)s.copy(p[v]).applyMatrix4(M,o),s.normal.toArray(u,E),u[E+3]=s.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,u}}function Vf(i){let e=new WeakMap;function t(s,o){return o===Va?s.mapping=_i:o===Wa&&(s.mapping=vi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Va||o===Wa)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Qd(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Yl extends Xl{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,Uo=[.125,.215,.35,.446,.526,.582],On=20,ba=new Yl,No=new Ie;let Ea=null,wa=0,Ta=0,Aa=!1;const Fn=(1+Math.sqrt(5))/2,ci=1/Fn,Fo=[new I(-Fn,ci,0),new I(Fn,ci,0),new I(-ci,0,Fn),new I(ci,0,Fn),new I(0,Fn,-ci),new I(0,Fn,ci),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,wa,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Bi,format:Gt,colorSpace:An,depthBuffer:!1},r=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(a)),this._blurMaterial=Xf(a,e,t)}return r}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,r){const o=new _t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(No),d.toneMapping=Mn,d.autoClear=!1;const m=new Wn({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new Le(new Dt,m);let x=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,x=!0):(m.color.copy(No),x=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):M===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const v=this._cubeSize;ur(r,M*v,h>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_i||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Le(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Fo[(r-a-1)%Fo.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Le(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*On-1),x=a/g,u=isFinite(a)?1+Math.floor(d*x):On;u>On&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${On}`);const h=[];let M=0;for(let T=0;T<On;++T){const C=T/x,G=Math.exp(-C*C/2);h.push(G),T===0?M+=G:T<u&&(M+=2*G)}for(let T=0;T<h.length;T++)h[T]=h[T]/M;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const E=this._sizeLods[r],L=3*E*(r>v-ui?r-v+ui:0),A=4*(this._cubeSize-E);ur(t,L,A,3*E,2*E),l.setRenderTarget(t),l.render(p,ba)}}function Wf(i){const e=[],t=[],n=[];let r=i;const a=i-ui+1+Uo.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-ui?l=Uo[s-i+ui-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,x=3,u=2,h=1,M=new Float32Array(x*g*m),v=new Float32Array(u*g*m),E=new Float32Array(h*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,C=A>2?0:-1,G=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(G,x*g*A),v.set(f,u*g*A);const _=[A,A,A,A,A,A];E.set(_,h*g*A)}const L=new ut;L.setAttribute("position",new Kt(M,x)),L.setAttribute("uv",new Kt(v,u)),L.setAttribute("faceIndex",new Kt(E,h)),e.push(L),r>ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xf(i,e,t){const n=new Float32Array(On),r=new I(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Bo(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function zo(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ks(){return`

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
	`}function qf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Va||l===Wa,d=l===_i||l===vi;if(c||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ko(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new ko(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function $f(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yf(i,e,t,n){const r={},a=new WeakMap;function s(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let u=0,h=x.length;u<h;u++)e.remove(x[u])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const x=m[g];for(let u=0,h=x.length;u<h;u++)e.update(x[u],i.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,g=p.attributes.position;let x=0;if(m!==null){const M=m.array;x=m.version;for(let v=0,E=M.length;v<E;v+=3){const L=M[v+0],A=M[v+1],T=M[v+2];f.push(L,A,A,T,T,L)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const L=v+0,A=v+1,T=v+2;f.push(L,A,A,T,T,L)}}else return;const u=new(kl(f)?Vl:Gl)(f,1);u.version=x;const h=a.get(p);h&&e.remove(h),a.set(p,u)}function d(p){const f=a.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Kf(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,a,f*s),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,f*s,g),t.update(m,n,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,g);let u=0;for(let h=0;h<g;h++)u+=m[h];t.update(u,n,1)}function p(f,m,g,x){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<f.length;h++)c(f[h]/s,m[h],x[h]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,x,0,g);let h=0;for(let M=0;M<g;M++)h+=m[M];for(let M=0;M<x.length;M++)t.update(h,n,x[M])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function jf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zf(i,e,t){const n=new WeakMap,r=new Ke;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),u===!0&&(E=3);let L=o.attributes.position.count*E,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*p),C=new Bl(T,L,A,p);C.type=on,C.needsUpdate=!0;const G=E*4;for(let S=0;S<p;S++){const k=h[S],N=M[S],V=v[S],q=L*A*4*S;for(let P=0;P<k.count;P++){const W=P*G;g===!0&&(r.fromBufferAttribute(k,P),T[q+W+0]=r.x,T[q+W+1]=r.y,T[q+W+2]=r.z,T[q+W+3]=0),x===!0&&(r.fromBufferAttribute(N,P),T[q+W+4]=r.x,T[q+W+5]=r.y,T[q+W+6]=r.z,T[q+W+7]=0),u===!0&&(r.fromBufferAttribute(V,P),T[q+W+8]=r.x,T[q+W+9]=r.y,T[q+W+10]=r.z,T[q+W+11]=V.itemSize===4?r.w:1)}}f={count:p,texture:C,size:new De(L,A)},n.set(o,f),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let u=0;u<c.length;u++)g+=c[u];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Jf(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Kl extends Et{constructor(e,t,n,r,a,s,o,l,c,d=pi){if(d!==pi&&d!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===pi&&(n=Gn),n===void 0&&d===yi&&(n=xi),super(null,r,a,s,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jl=new Et,Ho=new Kl(1,1),Zl=new Bl,Jl=new kd,Ql=new ql,Go=[],Vo=[],Wo=new Float32Array(16),Xo=new Float32Array(9),qo=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Go[r];if(a===void 0&&(a=new Float32Array(r),Go[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gr(i,e){let t=Vo[e];t===void 0&&(t=new Int32Array(e),Vo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;qo.set(n),i.uniformMatrix2fv(this.addr,!1,qo),ct(t,n)}}function rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Xo.set(n),i.uniformMatrix3fv(this.addr,!1,Xo),ct(t,n)}}function ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Wo.set(n),i.uniformMatrix4fv(this.addr,!1,Wo),ct(t,n)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=Fl,a=Ho):a=jl,t.setTexture2D(e||a,r)}function mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jl,r)}function gp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ql,r)}function _p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zl,r)}function vp(i){switch(i){case 5126:return Qf;case 35664:return ep;case 35665:return tp;case 35666:return np;case 35674:return ip;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return sp;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return dp;case 36294:return hp;case 36295:return up;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}function xp(i,e){i.uniform1fv(this.addr,e)}function yp(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Mp(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Sp(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function bp(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ep(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wp(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tp(i,e){i.uniform1iv(this.addr,e)}function Ap(i,e){i.uniform2iv(this.addr,e)}function Rp(i,e){i.uniform3iv(this.addr,e)}function Cp(i,e){i.uniform4iv(this.addr,e)}function Pp(i,e){i.uniform1uiv(this.addr,e)}function Ip(i,e){i.uniform2uiv(this.addr,e)}function Lp(i,e){i.uniform3uiv(this.addr,e)}function Dp(i,e){i.uniform4uiv(this.addr,e)}function Up(i,e,t){const n=this.cache,r=e.length,a=Gr(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||jl,a[s])}function Np(i,e,t){const n=this.cache,r=e.length,a=Gr(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Jl,a[s])}function Fp(i,e,t){const n=this.cache,r=e.length,a=Gr(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ql,a[s])}function kp(i,e,t){const n=this.cache,r=e.length,a=Gr(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Zl,a[s])}function Op(i){switch(i){case 5126:return xp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return bp;case 35675:return Ep;case 35676:return wp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Ip;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return kp}}class Bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vp(t.type)}}class zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Op(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function $o(i,e){i.seq.push(e),i.map[e.id]=e}function Gp(i,e,t){const n=i.name,r=n.length;for(Ra.lastIndex=0;;){const a=Ra.exec(n),s=Ra.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){$o(t,c===void 0?new Bp(o,i,e):new zp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Hp(o),$o(t,p)),t=p}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Gp(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Vp=37297;let Wp=0;function Xp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function qp(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===Lr&&t===Ir?n="LinearDisplayP3ToLinearSRGB":e===Ir&&t===Lr&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case Hr:return[n,"LinearTransferOETF"];case Xt:case Us:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ko(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xp(i.getShaderSource(e),s)}else return r}function $p(i,e){const t=qp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yp(i,e){let t;switch(e){case cd:t="Linear";break;case dd:t="Reinhard";break;case hd:t="Cineon";break;case ud:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new I;function Kp(){Xe.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function Zp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ui(i){return i!==""}function jo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ys(i){return i.replace(Qp,tm)}const em=new Map;function tm(i,e){let t=Ce[e];if(t===void 0){const n=em.get(e);if(n!==void 0)t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ys(t)}const nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(i){return i.replace(nm,im)}function im(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Qo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function rm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function am(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function om(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bl:e="ENVMAP_BLENDING_MULTIPLY";break;case od:e="ENVMAP_BLENDING_MIX";break;case ld:e="ENVMAP_BLENDING_ADD";break}return e}function lm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cm(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=rm(t),c=am(t),d=sm(t),p=om(t),f=lm(t),m=jp(t),g=Zp(a),x=r.createProgram();let u,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ui).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ui).join(`
`),h.length>0&&(h+=`
`)):(u=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),h=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),Kp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),s=ys(s),s=jo(s,t),s=Zo(s,t),o=ys(o),o=jo(o,t),o=Zo(o,t),s=Jo(s),o=Jo(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=M+u+s,E=M+h+o,L=Yo(r,r.VERTEX_SHADER,v),A=Yo(r,r.FRAGMENT_SHADER,E);r.attachShader(x,L),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(S){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(L).trim(),V=r.getShaderInfoLog(A).trim();let q=!0,P=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,A);else{const W=Ko(r,L,"vertex"),H=Ko(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+W+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||V==="")&&(P=!1);P&&(S.diagnostics={runnable:q,programLog:k,vertexShader:{log:N,prefix:u},fragmentShader:{log:V,prefix:h}})}r.deleteShader(L),r.deleteShader(A),C=new wr(r,x),G=Jp(r,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let G;this.getAttributes=function(){return G===void 0&&T(this),G};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Vp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}let dm=0;class hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new um(e),t.set(e,n)),n}}class um{constructor(e){this.id=dm++,this.code=e,this.usedTimes=0}}function fm(i,e,t,n,r,a,s){const o=new zl,l=new hm,c=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,S,k,N,V){const q=N.fog,P=V.geometry,W=_.isMeshStandardMaterial?N.environment:null,H=(_.isMeshStandardMaterial?t:e).get(_.envMap||W),te=H&&H.mapping===zr?H.image.height:null,re=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ge=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,He=ge!==void 0?ge.length:0;let qe=0;P.morphAttributes.position!==void 0&&(qe=1),P.morphAttributes.normal!==void 0&&(qe=2),P.morphAttributes.color!==void 0&&(qe=3);let $,J,pe,ce;if(re){const yt=qt[re];$=yt.vertexShader,J=yt.fragmentShader}else $=_.vertexShader,J=_.fragmentShader,l.update(_),pe=l.getVertexShaderID(_),ce=l.getFragmentShaderID(_);const Ae=i.getRenderTarget(),Me=V.isInstancedMesh===!0,Fe=V.isBatchedMesh===!0,Ye=!!_.map,ke=!!_.matcap,R=!!H,wt=!!_.aoMap,Ue=!!_.lightMap,Be=!!_.bumpMap,be=!!_.normalMap,Qe=!!_.displacementMap,Te=!!_.emissiveMap,w=!!_.metalnessMap,y=!!_.roughnessMap,O=_.anisotropy>0,K=_.clearcoat>0,Z=_.dispersion>0,Y=_.iridescence>0,_e=_.sheen>0,ie=_.transmission>0,de=O&&!!_.anisotropyMap,ze=K&&!!_.clearcoatMap,Q=K&&!!_.clearcoatNormalMap,he=K&&!!_.clearcoatRoughnessMap,Ee=Y&&!!_.iridescenceMap,we=Y&&!!_.iridescenceThicknessMap,ue=_e&&!!_.sheenColorMap,Ne=_e&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Je=!!_.specularColorMap,D=!!_.specularIntensityMap,oe=ie&&!!_.transmissionMap,X=ie&&!!_.thicknessMap,j=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,Oe=!!_.alphaHash,at=!!_.extensions;let xt=Mn;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Ge={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:J,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&V._colorsTexture!==null,instancing:Me,instancingColor:Me&&V.instanceColor!==null,instancingMorph:Me&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:An,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:ke,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:te,aoMap:wt,lightMap:Ue,bumpMap:Be,normalMap:be,displacementMap:m&&Qe,emissiveMap:Te,normalMapObjectSpace:be&&_.normalMapType===xd,normalMapTangentSpace:be&&_.normalMapType===Nl,metalnessMap:w,roughnessMap:y,anisotropy:O,anisotropyMap:de,clearcoat:K,clearcoatMap:ze,clearcoatNormalMap:Q,clearcoatRoughnessMap:he,dispersion:Z,iridescence:Y,iridescenceMap:Ee,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:ue,sheenRoughnessMap:Ne,specularMap:Re,specularColorMap:Je,specularIntensityMap:D,transmission:ie,transmissionMap:oe,thicknessMap:X,gradientMap:j,opaque:_.transparent===!1&&_.blending===fi&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Oe,combine:_.combine,mapUv:Ye&&u(_.map.channel),aoMapUv:wt&&u(_.aoMap.channel),lightMapUv:Ue&&u(_.lightMap.channel),bumpMapUv:Be&&u(_.bumpMap.channel),normalMapUv:be&&u(_.normalMap.channel),displacementMapUv:Qe&&u(_.displacementMap.channel),emissiveMapUv:Te&&u(_.emissiveMap.channel),metalnessMapUv:w&&u(_.metalnessMap.channel),roughnessMapUv:y&&u(_.roughnessMap.channel),anisotropyMapUv:de&&u(_.anisotropyMap.channel),clearcoatMapUv:ze&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&u(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&u(_.sheenRoughnessMap.channel),specularMapUv:Re&&u(_.specularMap.channel),specularColorMapUv:Je&&u(_.specularColorMap.channel),specularIntensityMapUv:D&&u(_.specularIntensityMap.channel),transmissionMapUv:oe&&u(_.transmissionMap.channel),thicknessMapUv:X&&u(_.thicknessMap.channel),alphaMapUv:ae&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(be||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!P.attributes.uv&&(Ye||ae),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bt,flipSided:_.side===bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function M(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)S.push(k),S.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(S,_),E(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function E(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const S=x[_.type];let k;if(S){const N=qt[S];k=Kd.clone(N.uniforms)}else k=_.uniforms;return k}function A(_,S){let k;for(let N=0,V=d.length;N<V;N++){const q=d[N];if(q.cacheKey===S){k=q,++k.usedTimes;break}}return k===void 0&&(k=new cm(i,S,_,a),d.push(k)),k}function T(_){if(--_.usedTimes===0){const S=d.indexOf(_);d[S]=d[d.length-1],d.pop(),_.destroy()}}function C(_){l.remove(_)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:M,getUniforms:L,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:d,dispose:G}}function pm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(p,f,m,g,x,u){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:f,material:m,groupOrder:g,renderOrder:p.renderOrder,z:x,group:u},i[e]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=x,h.group=u),e++,h}function o(p,f,m,g,x,u){const h=s(p,f,m,g,x,u);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(p,f,m,g,x,u){const h=s(p,f,m,g,x,u);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(p,f){t.length>1&&t.sort(p||mm),n.length>1&&n.sort(f||el),r.length>1&&r.sort(f||el)}function d(){for(let p=e,f=i.length;p<f;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function gm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new tl,i.set(n,[s])):r>=a.length?(s=new tl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function _m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function vm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xm=0;function ym(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mm(i){const e=new _m,t=vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,a=new nt,s=new nt;function o(c){let d=0,p=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,g=0,x=0,u=0,h=0,M=0,v=0,E=0,L=0,A=0,T=0;c.sort(ym);for(let G=0,_=c.length;G<_;G++){const S=c[G],k=S.color,N=S.intensity,V=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=k.r*N,p+=k.g*N,f+=k.b*N;else if(S.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(S.sh.coefficients[P],N);T++}else if(S.isDirectionalLight){const P=e.get(S);if(P.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const W=S.shadow,H=t.get(S);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=S.shadow.matrix,M++}n.directional[m]=P,m++}else if(S.isSpotLight){const P=e.get(S);P.position.setFromMatrixPosition(S.matrixWorld),P.color.copy(k).multiplyScalar(N),P.distance=V,P.coneCos=Math.cos(S.angle),P.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),P.decay=S.decay,n.spot[x]=P;const W=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,W.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[x]=W.matrix,S.castShadow){const H=t.get(S);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=q,E++}x++}else if(S.isRectAreaLight){const P=e.get(S);P.color.copy(k).multiplyScalar(N),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),n.rectArea[u]=P,u++}else if(S.isPointLight){const P=e.get(S);if(P.color.copy(S.color).multiplyScalar(S.intensity),P.distance=S.distance,P.decay=S.decay,S.castShadow){const W=S.shadow,H=t.get(S);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=P,g++}else if(S.isHemisphereLight){const P=e.get(S);P.skyColor.copy(S.color).multiplyScalar(N),P.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[h]=P,h++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==u||C.hemiLength!==h||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==E||C.numSpotMaps!==L||C.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=u,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=m,C.pointLength=g,C.spotLength=x,C.rectAreaLength=u,C.hemiLength=h,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=E,C.numSpotMaps=L,C.numLightProbes=T,n.version=xm++)}function l(c,d){let p=0,f=0,m=0,g=0,x=0;const u=d.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const v=c[h];if(v.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),p++}else if(v.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),m++}else if(v.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(u),s.identity(),a.copy(v.matrixWorld),a.premultiply(u),s.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(u),f++}else if(v.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(u),x++}}}return{setup:o,setupView:l,state:n}}function nl(i){const e=new Mm(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Sm(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new nl(i),e.set(r,[o])):a>=s.length?(o=new nl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class bm extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Em extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`;function Am(i,e,t){let n=new Fs;const r=new De,a=new De,s=new Ke,o=new bm({depthPacking:vd}),l=new Em,c={},d=t.maxTextureSize,p={[bn]:bt,[bt]:bn,[Bt]:Bt},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:wm,fragmentShader:Tm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ut;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Le(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let h=this.type;this.render=function(A,T,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||A.length===0)return;const G=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),k=i.state;k.setBlending(yn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=h!==sn&&this.type===sn,V=h===sn&&this.type!==sn;for(let q=0,P=A.length;q<P;q++){const W=A[q],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const te=H.getFrameExtents();if(r.multiply(te),a.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/te.x),r.x=a.x*te.x,H.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/te.y),r.y=a.y*te.y,H.mapSize.y=a.y)),H.map===null||N===!0||V===!0){const ge=this.type!==sn?{minFilter:Lt,magFilter:Lt}:{};H.map!==null&&H.map.dispose(),H.map=new Vn(r.x,r.y,ge),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const re=H.getViewportCount();for(let ge=0;ge<re;ge++){const He=H.getViewport(ge);s.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),k.viewport(s),H.updateMatrices(W,ge),n=H.getFrustum(),E(T,C,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===sn&&M(H,C),H.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(G,_,S)};function M(A,T){const C=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,C,m,x,null)}function v(A,T,C,G){let _=null;const S=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)_=S;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=_.uuid,N=T.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let q=V[N];q===void 0&&(q=_.clone(),V[N]=q,T.addEventListener("dispose",L)),_=q}if(_.visible=T.visible,_.wireframe=T.wireframe,G===sn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:p[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=i.properties.get(_);k.light=C}return _}function E(A,T,C,G,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=e.update(A),V=A.material;if(Array.isArray(V)){const q=N.groups;for(let P=0,W=q.length;P<W;P++){const H=q[P],te=V[H.materialIndex];if(te&&te.visible){const re=v(A,te,G,_);A.onBeforeShadow(i,A,T,C,N,re,H),i.renderBufferDirect(C,null,N,re,A,H),A.onAfterShadow(i,A,T,C,N,re,H)}}}else if(V.visible){const q=v(A,V,G,_);A.onBeforeShadow(i,A,T,C,N,q,null),i.renderBufferDirect(C,null,N,q,A,null),A.onAfterShadow(i,A,T,C,N,q,null)}}const k=A.children;for(let N=0,V=k.length;N<V;N++)E(k[N],T,C,G,_)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const G=c[C],_=A.target.uuid;_ in G&&(G[_].dispose(),delete G[_])}}}const Rm={[Fa]:ka,[Oa]:Ha,[Ba]:Ga,[gi]:za,[ka]:Fa,[Ha]:Oa,[Ga]:Ba,[za]:gi};function Cm(i){function e(){let D=!1;const oe=new Ke;let X=null;const j=new Ke(0,0,0,0);return{setMask:function(ae){X!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){D=ae},setClear:function(ae,le,Oe,at,xt){xt===!0&&(ae*=at,le*=at,Oe*=at),oe.set(ae,le,Oe,at),j.equals(oe)===!1&&(i.clearColor(ae,le,Oe,at),j.copy(oe))},reset:function(){D=!1,X=null,j.set(-1,0,0,0)}}}function t(){let D=!1,oe=!1,X=null,j=null,ae=null;return{setReversed:function(le){oe=le},setTest:function(le){le?pe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(le){X!==le&&!D&&(i.depthMask(le),X=le)},setFunc:function(le){if(oe&&(le=Rm[le]),j!==le){switch(le){case Fa:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case gi:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=le}},setLocked:function(le){D=le},setClear:function(le){ae!==le&&(i.clearDepth(le),ae=le)},reset:function(){D=!1,X=null,j=null,ae=null}}}function n(){let D=!1,oe=null,X=null,j=null,ae=null,le=null,Oe=null,at=null,xt=null;return{setTest:function(Ge){D||(Ge?pe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Ge){oe!==Ge&&!D&&(i.stencilMask(Ge),oe=Ge)},setFunc:function(Ge,yt,Qt){(X!==Ge||j!==yt||ae!==Qt)&&(i.stencilFunc(Ge,yt,Qt),X=Ge,j=yt,ae=Qt)},setOp:function(Ge,yt,Qt){(le!==Ge||Oe!==yt||at!==Qt)&&(i.stencilOp(Ge,yt,Qt),le=Ge,Oe=yt,at=Qt)},setLocked:function(Ge){D=Ge},setClear:function(Ge){xt!==Ge&&(i.clearStencil(Ge),xt=Ge)},reset:function(){D=!1,oe=null,X=null,j=null,ae=null,le=null,Oe=null,at=null,xt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,l=new WeakMap;let c={},d={},p=new WeakMap,f=[],m=null,g=!1,x=null,u=null,h=null,M=null,v=null,E=null,L=null,A=new Ie(0,0,0),T=0,C=!1,G=null,_=null,S=null,k=null,N=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,P=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=P>=1):W.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=P>=2);let H=null,te={};const re=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),He=new Ke().fromArray(re),qe=new Ke().fromArray(ge);function $(D,oe,X,j){const ae=new Uint8Array(4),le=i.createTexture();i.bindTexture(D,le),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<X;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(oe+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return le}const J={};J[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),pe(i.DEPTH_TEST),a.setFunc(gi),Ue(!1),Be(co),pe(i.CULL_FACE),R(yn);function pe(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Ae(D,oe){return d[D]!==oe?(i.bindFramebuffer(D,oe),d[D]=oe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Me(D,oe){let X=f,j=!1;if(D){X=p.get(oe),X===void 0&&(X=[],p.set(oe,X));const ae=D.textures;if(X.length!==ae.length||X[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Oe=ae.length;le<Oe;le++)X[le]=i.COLOR_ATTACHMENT0+le;X.length=ae.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function Fe(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Ye={[kn]:i.FUNC_ADD,[Wc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT};Ye[qc]=i.MIN,Ye[$c]=i.MAX;const ke={[Yc]:i.ZERO,[Kc]:i.ONE,[jc]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[Jc]:i.DST_ALPHA,[Zc]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[sd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,oe,X,j,ae,le,Oe,at,xt,Ge){if(D===yn){g===!0&&(ce(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),D!==Vc){if(D!==x||Ge!==C){if((u!==kn||v!==kn)&&(i.blendEquation(i.FUNC_ADD),u=kn,v=kn),Ge)switch(D){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.ONE,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,M=null,E=null,L=null,A.set(0,0,0),T=0,x=D,C=Ge}return}ae=ae||oe,le=le||X,Oe=Oe||j,(oe!==u||ae!==v)&&(i.blendEquationSeparate(Ye[oe],Ye[ae]),u=oe,v=ae),(X!==h||j!==M||le!==E||Oe!==L)&&(i.blendFuncSeparate(ke[X],ke[j],ke[le],ke[Oe]),h=X,M=j,E=le,L=Oe),(at.equals(A)===!1||xt!==T)&&(i.blendColor(at.r,at.g,at.b,xt),A.copy(at),T=xt),x=D,C=!1}function wt(D,oe){D.side===Bt?ce(i.CULL_FACE):pe(i.CULL_FACE);let X=D.side===bt;oe&&(X=!X),Ue(X),D.blending===fi&&D.transparent===!1?R(yn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;s.setTest(j),j&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Qe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){G!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),G=D)}function Be(D){D!==zc?(pe(i.CULL_FACE),D!==_&&(D===co?i.cullFace(i.BACK):D===Hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),_=D}function be(D){D!==S&&(q&&i.lineWidth(D),S=D)}function Qe(D,oe,X){D?(pe(i.POLYGON_OFFSET_FILL),(k!==oe||N!==X)&&(i.polygonOffset(oe,X),k=oe,N=X)):ce(i.POLYGON_OFFSET_FILL)}function Te(D){D?pe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+V-1),H!==D&&(i.activeTexture(D),H=D)}function y(D,oe,X){X===void 0&&(H===null?X=i.TEXTURE0+V-1:X=H);let j=te[X];j===void 0&&(j={type:void 0,texture:void 0},te[X]=j),(j.type!==D||j.texture!==oe)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(D,oe||J[D]),j.type=D,j.texture=oe)}function O(){const D=te[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){He.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function ue(D){qe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qe.copy(D))}function Ne(D,oe){let X=l.get(oe);X===void 0&&(X=new WeakMap,l.set(oe,X));let j=X.get(D);j===void 0&&(j=i.getUniformBlockIndex(oe,D.name),X.set(D,j))}function Re(D,oe){const j=l.get(oe).get(D);o.get(oe)!==j&&(i.uniformBlockBinding(oe,j,D.__bindingPointIndex),o.set(oe,j))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,te={},d={},p=new WeakMap,f=[],m=null,g=!1,x=null,u=null,h=null,M=null,v=null,E=null,L=null,A=new Ie(0,0,0),T=0,C=!1,G=null,_=null,S=null,k=null,N=null,He.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:pe,disable:ce,bindFramebuffer:Ae,drawBuffers:Me,useProgram:Fe,setBlending:R,setMaterial:wt,setFlipSided:Ue,setCullFace:Be,setLineWidth:be,setPolygonOffset:Qe,setScissorTest:Te,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ee,updateUBOMapping:Ne,uniformBlockBinding:Re,texStorage2D:ze,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:we,viewport:ue,reset:Je}}function il(i,e,t,n){const r=Pm(n);switch(t){case Rl:return i*e;case Pl:return i*e;case Il:return i*e*2;case Ll:return i*e/r.components*r.byteLength;case Is:return i*e/r.components*r.byteLength;case Dl:return i*e*2/r.components*r.byteLength;case Ls:return i*e*2/r.components*r.byteLength;case Cl:return i*e*3/r.components*r.byteLength;case Gt:return i*e*4/r.components*r.byteLength;case Ds:return i*e*4/r.components*r.byteLength;case xr:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:case ja:return Math.max(i,16)*Math.max(e,8)/4;case $a:case Ka:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ts:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ns:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case is:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case as:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ss:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case os:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ls:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ds:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case us:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case br:case ps:case ms:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ul:case gs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _s:case vs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pm(i){switch(i){case dn:case wl:return{byteLength:1,components:1};case Fi:case Tl:case Bi:return{byteLength:2,components:1};case Cs:case Ps:return{byteLength:2,components:4};case Gn:case Rs:case on:return{byteLength:4,components:1};case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Im(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return m?new OffscreenCanvas(w,y):Ur("canvas")}function x(w,y,O){let K=1;const Z=Te(w);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*Z.width),_e=Math.floor(K*Z.height);p===void 0&&(p=g(Y,_e));const ie=y?g(Y,_e):p;return ie.width=Y,ie.height=_e,ie.getContext("2d").drawImage(w,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function u(w){return w.generateMipmaps&&w.minFilter!==Lt&&w.minFilter!==zt}function h(w){i.generateMipmap(w)}function M(w,y,O,K,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=y;if(y===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const _e=Z?Pr:Xe.getTransfer(K);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=_e===tt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(w,y){let O;return w?y===null||y===Gn||y===xi?O=i.DEPTH24_STENCIL8:y===on?O=i.DEPTH32F_STENCIL8:y===Fi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===xi?O=i.DEPTH_COMPONENT24:y===on?O=i.DEPTH_COMPONENT32F:y===Fi&&(O=i.DEPTH_COMPONENT16),O}function E(w,y){return u(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){const y=w.target;y.removeEventListener("dispose",L),T(y),y.isVideoTexture&&d.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),G(y)}function T(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,K=f.get(O);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(w),Object.keys(K).length===0&&f.delete(O)}n.remove(w)}function C(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const O=w.source,K=f.get(O);delete K[y.__cacheKey],s.memory.textures--}function G(w){const y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,Z=O.length;K<Z;K++){const Y=n.get(O[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),s.memory.textures--),n.remove(O[K])}n.remove(w)}let _=0;function S(){_=0}function k(){const w=_;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),_+=1,w}function N(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function V(w,y){const O=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(O,w,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function q(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){qe(O,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function P(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){qe(O,w,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function W(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){$(O,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const H={[Xa]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},te={[Lt]:i.NEAREST,[gd]:i.NEAREST_MIPMAP_NEAREST,[$i]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},re={[yd]:i.NEVER,[Td]:i.ALWAYS,[Md]:i.LESS,[Fl]:i.LEQUAL,[Sd]:i.EQUAL,[wd]:i.GEQUAL,[bd]:i.GREATER,[Ed]:i.NOTEQUAL};function ge(w,y){if(y.type===on&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===Qr||y.magFilter===$i||y.magFilter===Hn||y.minFilter===zt||y.minFilter===Qr||y.minFilter===$i||y.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,H[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,te[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,te[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Lt||y.minFilter!==$i&&y.minFilter!==Hn||y.type===on&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function He(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",L));const K=y.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const Y=N(y);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Z[Y].usedTimes++;const _e=Z[w.__cacheKey];_e!==void 0&&(Z[w.__cacheKey].usedTimes--,_e.usedTimes===0&&C(y)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return O}function qe(w,y,O){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const Z=He(w,y),Y=y.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const ie=Xe.getPrimaries(Xe.workingColorSpace),de=y.colorSpace===xn?null:Xe.getPrimaries(y.colorSpace),ze=y.colorSpace===xn||ie===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=x(y.image,!1,r.maxTextureSize);Q=Qe(y,Q);const he=a.convert(y.format,y.colorSpace),Ee=a.convert(y.type);let we=M(y.internalFormat,he,Ee,y.colorSpace,y.isVideoTexture);ge(K,y);let ue;const Ne=y.mipmaps,Re=y.isVideoTexture!==!0,Je=_e.__version===void 0||Z===!0,D=Y.dataReady,oe=E(y,Q);if(y.isDepthTexture)we=v(y.format===yi,y.type),Je&&(Re?t.texStorage2D(i.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,he,Ee,null));else if(y.isDataTexture)if(Ne.length>0){Re&&Je&&t.texStorage2D(i.TEXTURE_2D,oe,we,Ne[0].width,Ne[0].height);for(let X=0,j=Ne.length;X<j;X++)ue=Ne[X],Re?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ue.width,ue.height,he,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,X,we,ue.width,ue.height,0,he,Ee,ue.data);y.generateMipmaps=!1}else Re?(Je&&t.texStorage2D(i.TEXTURE_2D,oe,we,Q.width,Q.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Ee,Q.data)):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,he,Ee,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Re&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,we,Ne[0].width,Ne[0].height,Q.depth);for(let X=0,j=Ne.length;X<j;X++)if(ue=Ne[X],y.format!==Gt)if(he!==null)if(Re){if(D)if(y.layerUpdates.size>0){const ae=il(ue.width,ue.height,y.format,y.type);for(const le of y.layerUpdates){const Oe=ue.data.subarray(le*ae/ue.data.BYTES_PER_ELEMENT,(le+1)*ae/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,le,ue.width,ue.height,1,he,Oe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ue.width,ue.height,Q.depth,he,ue.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,we,ue.width,ue.height,Q.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ue.width,ue.height,Q.depth,he,Ee,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,we,ue.width,ue.height,Q.depth,0,he,Ee,ue.data)}else{Re&&Je&&t.texStorage2D(i.TEXTURE_2D,oe,we,Ne[0].width,Ne[0].height);for(let X=0,j=Ne.length;X<j;X++)ue=Ne[X],y.format!==Gt?he!==null?Re?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,X,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ue.width,ue.height,he,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,X,we,ue.width,ue.height,0,he,Ee,ue.data)}else if(y.isDataArrayTexture)if(Re){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,we,Q.width,Q.height,Q.depth),D)if(y.layerUpdates.size>0){const X=il(Q.width,Q.height,y.format,y.type);for(const j of y.layerUpdates){const ae=Q.data.subarray(j*X/Q.data.BYTES_PER_ELEMENT,(j+1)*X/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,he,Ee,ae)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Ee,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,he,Ee,Q.data);else if(y.isData3DTexture)Re?(Je&&t.texStorage3D(i.TEXTURE_3D,oe,we,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,he,Ee,Q.data);else if(y.isFramebufferTexture){if(Je)if(Re)t.texStorage2D(i.TEXTURE_2D,oe,we,Q.width,Q.height);else{let X=Q.width,j=Q.height;for(let ae=0;ae<oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,we,X,j,0,he,Ee,null),X>>=1,j>>=1}}else if(Ne.length>0){if(Re&&Je){const X=Te(Ne[0]);t.texStorage2D(i.TEXTURE_2D,oe,we,X.width,X.height)}for(let X=0,j=Ne.length;X<j;X++)ue=Ne[X],Re?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he,Ee,ue):t.texImage2D(i.TEXTURE_2D,X,we,he,Ee,ue);y.generateMipmaps=!1}else if(Re){if(Je){const X=Te(Q);t.texStorage2D(i.TEXTURE_2D,oe,we,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ee,Q)}else t.texImage2D(i.TEXTURE_2D,0,we,he,Ee,Q);u(y)&&h(K),_e.__version=Y.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function $(w,y,O){if(y.image.length!==6)return;const K=He(w,y),Z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const _e=Xe.getPrimaries(Xe.workingColorSpace),ie=y.colorSpace===xn?null:Xe.getPrimaries(y.colorSpace),de=y.colorSpace===xn||_e===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ze=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,he=[];for(let j=0;j<6;j++)!ze&&!Q?he[j]=x(y.image[j],!0,r.maxCubemapSize):he[j]=Q?y.image[j].image:y.image[j],he[j]=Qe(y,he[j]);const Ee=he[0],we=a.convert(y.format,y.colorSpace),ue=a.convert(y.type),Ne=M(y.internalFormat,we,ue,y.colorSpace),Re=y.isVideoTexture!==!0,Je=Y.__version===void 0||K===!0,D=Z.dataReady;let oe=E(y,Ee);ge(i.TEXTURE_CUBE_MAP,y);let X;if(ze){Re&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ne,Ee.width,Ee.height);for(let j=0;j<6;j++){X=he[j].mipmaps;for(let ae=0;ae<X.length;ae++){const le=X[ae];y.format!==Gt?we!==null?Re?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,Ne,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,le.width,le.height,we,ue,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,Ne,le.width,le.height,0,we,ue,le.data)}}}else{if(X=y.mipmaps,Re&&Je){X.length>0&&oe++;const j=Te(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ne,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,he[j].width,he[j].height,we,ue,he[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,he[j].width,he[j].height,0,we,ue,he[j].data);for(let ae=0;ae<X.length;ae++){const Oe=X[ae].image[j].image;Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Oe.width,Oe.height,we,ue,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,Ne,Oe.width,Oe.height,0,we,ue,Oe.data)}}else{Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,ue,he[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,we,ue,he[j]);for(let ae=0;ae<X.length;ae++){const le=X[ae];Re?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,we,ue,le.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,Ne,we,ue,le.image[j])}}}u(y)&&h(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function J(w,y,O,K,Z,Y){const _e=a.convert(O.format,O.colorSpace),ie=a.convert(O.type),de=M(O.internalFormat,_e,ie,O.colorSpace);if(!n.get(y).__hasExternalTextures){const Q=Math.max(1,y.width>>Y),he=Math.max(1,y.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,de,Q,he,y.depth,0,_e,ie,null):t.texImage2D(Z,Y,de,Q,he,0,_e,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,0,Ue(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(w,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=v(y.stencilBuffer,Z),_e=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=Ue(y);Be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Y,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,w)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],_e=a.convert(Y.format,Y.colorSpace),ie=a.convert(Y.type),de=M(Y.internalFormat,_e,ie,Y.colorSpace),ze=Ue(y);O&&Be(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,de,y.width,y.height):Be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,de,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,de,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,Z=Ue(y);if(y.depthTexture.format===pi)Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===yi)Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),pe(y.__webglDepthbuffer[K],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pe(y.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(w,y,O){const K=n.get(w);y!==void 0&&J(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ae(w)}function Fe(w){const y=w.texture,O=n.get(w),K=n.get(y);w.addEventListener("dispose",A);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,s.memory.textures++),Y){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let de=0;de<y.mipmaps.length;de++)O.__webglFramebuffer[ie][de]=i.createFramebuffer()}else O.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)O.__webglFramebuffer[ie]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ie=0,de=Z.length;ie<de;ie++){const ze=n.get(Z[ie]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&Be(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const de=Z[ie];O.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const ze=a.convert(de.format,de.colorSpace),Q=a.convert(de.type),he=M(de.internalFormat,ze,Q,de.colorSpace,w.isXRRenderTarget===!0),Ee=Ue(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)J(O.__webglFramebuffer[ie][de],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else J(O.__webglFramebuffer[ie],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);u(y)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ie=0,de=Z.length;ie<de;ie++){const ze=Z[ie],Q=n.get(ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ge(i.TEXTURE_2D,ze),J(O.__webglFramebuffer,w,ze,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),u(ze)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),ge(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)J(O.__webglFramebuffer[de],w,y,i.COLOR_ATTACHMENT0,ie,de);else J(O.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ie,0);u(y)&&h(ie),t.unbindTexture()}w.depthBuffer&&Ae(w)}function Ye(w){const y=w.textures;for(let O=0,K=y.length;O<K;O++){const Z=y[O];if(u(Z)){const Y=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),h(Y),t.unbindTexture()}}}const ke=[],R=[];function wt(w){if(w.samples>0){if(Be(w)===!1){const y=w.textures,O=w.width,K=w.height;let Z=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(w),ie=y.length>1;if(ie)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<y.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ze=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,Z,i.NEAREST),l===!0&&(ke.length=0,R.length=0,ke.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ke.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ze=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ue(w){return Math.min(r.maxSamples,w.samples)}function Be(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(w){const y=s.render.frame;d.get(w)!==y&&(d.set(w,y),w.update())}function Qe(w,y){const O=w.colorSpace,K=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==An&&O!==xn&&(Xe.getTransfer(O)===tt?(K!==Gt||Z!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=P,this.setTextureCube=W,this.rebindTextures=Me,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Be}function Lm(i,e){function t(n,r=xn){let a;const s=Xe.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Cs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ps)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.BYTE;if(n===Tl)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===Rs)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===Gt)return i.RGBA;if(n===Pl)return i.LUMINANCE;if(n===Il)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Is)return i.RED_INTEGER;if(n===Dl)return i.RG;if(n===Ls)return i.RG_INTEGER;if(n===Ds)return i.RGBA_INTEGER;if(n===xr||n===yr||n===Mr||n===Sr)if(s===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ya||n===Ka||n===ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===$a)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Za||n===Ja)return s===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Qa)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===es||n===ts||n===ns||n===is||n===rs||n===as||n===ss||n===os||n===ls||n===cs||n===ds||n===hs||n===us||n===fs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===es)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ts)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ns)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===is)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rs)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===as)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ss)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===os)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ls)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cs)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ds)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hs)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===us)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fs)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===ps||n===ms)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===br)return s===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ps)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ms)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===gs||n===_s||n===vs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===br)return a.COMPRESSED_RED_RGTC1_EXT;if(n===gs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_s)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Dm extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Um={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const u=t.getJointPose(x,n),h=this._getHandJoint(c,x);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
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

}`;class km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Et,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:Nm,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Om extends bi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,m=null,g=null;const x=new km,u=t.getContextAttributes();let h=null,M=null;const v=[],E=[],L=new De;let A=null;const T=new _t;T.layers.enable(1),T.viewport=new Ke;const C=new _t;C.layers.enable(2),C.viewport=new Ke;const G=[T,C],_=new Dm;_.layers.enable(1),_.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=v[$];return J===void 0&&(J=new Ca,v[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=v[$];return J===void 0&&(J=new Ca,v[$]=J),J.getGripSpace()},this.getHand=function($){let J=v[$];return J===void 0&&(J=new Ca,v[$]=J),J.getHandSpace()};function N($){const J=E.indexOf($.inputSource);if(J===-1)return;const pe=v[J];pe!==void 0&&(pe.update($.inputSource,$.frame,c||s),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",q);for(let $=0;$<v.length;$++){const J=E[$];J!==null&&(E[$]=null,v[$].disconnect(J))}S=null,k=null,x.reset(),e.setRenderTarget(h),m=null,f=null,p=null,r=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",V),r.addEventListener("inputsourceschange",q),u.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const J={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let J=null,pe=null,ce=null;u.depth&&(ce=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=u.stencil?yi:pi,pe=u.stencil?xi:Gn);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Vn(f.textureWidth,f.textureHeight,{format:Gt,type:dn,depthTexture:new Kl(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q($){for(let J=0;J<$.removed.length;J++){const pe=$.removed[J],ce=E.indexOf(pe);ce>=0&&(E[ce]=null,v[ce].disconnect(pe))}for(let J=0;J<$.added.length;J++){const pe=$.added[J];let ce=E.indexOf(pe);if(ce===-1){for(let Me=0;Me<v.length;Me++)if(Me>=E.length){E.push(pe),ce=Me;break}else if(E[Me]===null){E[Me]=pe,ce=Me;break}if(ce===-1)break}const Ae=v[ce];Ae&&Ae.connect(pe)}}const P=new I,W=new I;function H($,J,pe){P.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(pe.matrixWorld);const ce=P.distanceTo(W),Ae=J.projectionMatrix.elements,Me=pe.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),Ye=Ae[14]/(Ae[10]+1),ke=(Ae[9]+1)/Ae[5],R=(Ae[9]-1)/Ae[5],wt=(Ae[8]-1)/Ae[0],Ue=(Me[8]+1)/Me[0],Be=Fe*wt,be=Fe*Ue,Qe=ce/(-wt+Ue),Te=Qe*-wt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Te),$.translateZ(Qe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=Fe+Qe,y=Ye+Qe,O=Be-Te,K=be+(ce-Te),Z=ke*Ye/y*w,Y=R*Ye/y*w;$.projectionMatrix.makePerspective(O,K,Z,Y,w,y),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,pe=$.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),_.near=C.near=T.near=J,_.far=C.far=T.far=pe,(S!==_.near||k!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,k=_.far);const ce=$.parent,Ae=_.cameras;te(_,ce);for(let Me=0;Me<Ae.length;Me++)te(Ae[Me],ce);Ae.length===2?H(_,T,C):_.projectionMatrix.copy(T.projectionMatrix),re($,_,ce)};function re($,J,pe){pe===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ge=null;function He($,J){if(d=J.getViewerPose(c||s),g=J,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ce=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let Me=0;Me<pe.length;Me++){const Fe=pe[Me];let Ye=null;if(m!==null)Ye=m.getViewport(Fe);else{const R=p.getViewSubImage(f,Fe);Ye=R.viewport,Me===0&&(e.setRenderTargetTextures(M,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(M))}let ke=G[Me];ke===void 0&&(ke=new _t,ke.layers.enable(Me),ke.viewport=new Ke,G[Me]=ke),ke.matrix.fromArray(Fe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Fe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Me===0&&(_.matrix.copy(ke.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(ke)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Me=p.getDepthInformation(pe[0]);Me&&Me.isValid&&Me.texture&&x.init(e,Me,r.renderState)}}for(let pe=0;pe<v.length;pe++){const ce=E[pe],Ae=v[pe];ce!==null&&Ae!==void 0&&Ae.update(ce,J,c||s)}ge&&ge($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const qe=new $l;qe.setAnimationLoop(He),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const Un=new Jt,Bm=new nt;function zm(i,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,Wl(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function r(u,h,M,v,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(u,h):h.isMeshToonMaterial?(a(u,h),p(u,h)):h.isMeshPhongMaterial?(a(u,h),d(u,h)):h.isMeshStandardMaterial?(a(u,h),f(u,h),h.isMeshPhysicalMaterial&&m(u,h,E)):h.isMeshMatcapMaterial?(a(u,h),g(u,h)):h.isMeshDepthMaterial?a(u,h):h.isMeshDistanceMaterial?(a(u,h),x(u,h)):h.isMeshNormalMaterial?a(u,h):h.isLineBasicMaterial?(s(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?l(u,h,M,v):h.isSpriteMaterial?c(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===bt&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===bt&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const M=e.get(h),v=M.envMap,E=M.envMapRotation;v&&(u.envMap.value=v,Un.copy(E),Un.x*=-1,Un.y*=-1,Un.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Un)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function s(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,M,v){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*M,u.scale.value=v*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function c(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function p(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function f(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,M){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bt&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=M.texture,u.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,h){h.matcap&&(u.matcap.value=h.matcap)}function x(u,h){const M=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(M.matrixWorld),u.nearDistance.value=M.shadow.camera.near,u.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hm(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const E=v.program;n.uniformBlockBinding(M,E)}function c(M,v){let E=r[M.id];E===void 0&&(g(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",u));const L=v.program;n.updateUBOMapping(M,L);const A=e.render.frame;a[M.id]!==A&&(f(M),a[M.id]=A)}function d(M){const v=p();M.__bindingPointIndex=v;const E=i.createBuffer(),L=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function p(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=r[M.id],E=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=E.length;A<T;A++){const C=Array.isArray(E[A])?E[A]:[E[A]];for(let G=0,_=C.length;G<_;G++){const S=C[G];if(m(S,A,G,L)===!0){const k=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let q=0;q<N.length;q++){const P=N[q],W=x(P);typeof P=="number"||typeof P=="boolean"?(S.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,k+V,S.__data)):P.isMatrix3?(S.__data[0]=P.elements[0],S.__data[1]=P.elements[1],S.__data[2]=P.elements[2],S.__data[3]=0,S.__data[4]=P.elements[3],S.__data[5]=P.elements[4],S.__data[6]=P.elements[5],S.__data[7]=0,S.__data[8]=P.elements[6],S.__data[9]=P.elements[7],S.__data[10]=P.elements[8],S.__data[11]=0):(P.toArray(S.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,v,E,L){const A=M.value,T=v+"_"+E;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const C=L[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){const v=M.uniforms;let E=0;const L=16;for(let T=0,C=v.length;T<C;T++){const G=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,S=G.length;_<S;_++){const k=G[_],N=Array.isArray(k.value)?k.value:[k.value];for(let V=0,q=N.length;V<q;V++){const P=N[V],W=x(P),H=E%L,te=H%W.boundary,re=H+te;E+=te,re!==0&&L-re<W.storage&&(E+=L-re),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=W.storage}}}const A=E%L;return A>0&&(E+=L-A),M.__size=E,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function u(M){const v=M.target;v.removeEventListener("dispose",u);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Os{constructor(e={}){const{canvas:t=Rd(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,u=null;const h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Mn,this.toneMappingExposure=1;const v=this;let E=!1,L=0,A=0,T=null,C=-1,G=null;const _=new Ke,S=new Ke;let k=null;const N=new Ie(0);let V=0,q=t.width,P=t.height,W=1,H=null,te=null;const re=new Ke(0,0,q,P),ge=new Ke(0,0,q,P);let He=!1;const qe=new Fs;let $=!1,J=!1;const pe=new nt,ce=new nt,Ae=new I,Me=new Ke,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function ke(){return T===null?W:1}let R=n;function wt(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",le,!1),R===null){const U="webgl2";if(R=wt(U,b),R===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Be,be,Qe,Te,w,y,O,K,Z,Y,_e,ie,de,ze,Q,he,Ee,we,ue,Ne,Re,Je,D;function oe(){Ue=new $f(R),Ue.init(),Re=new Lm(R,Ue),Be=new Hf(R,Ue,e,Re),be=new Cm(R),Be.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Qe=new jf(R),Te=new pm,w=new Im(R,Ue,be,Te,Be,Re,Qe),y=new Vf(v),O=new qf(v),K=new nh(R),Je=new Bf(R,K),Z=new Yf(R,K,Qe,Je),Y=new Jf(R,Z,K,Qe),we=new Zf(R,Be,w),Q=new Gf(Te),_e=new fm(v,y,O,Ue,Be,Je,Q),ie=new zm(v,Te),de=new gm,ze=new Sm(Ue),Ee=new Of(v,y,O,be,Y,f,l),he=new Am(v,Y,Be),D=new Hm(R,Qe,Be,be),ue=new zf(R,Ue,Qe),Ne=new Kf(R,Ue,Qe),Qe.programs=_e.programs,v.capabilities=Be,v.extensions=Ue,v.properties=Te,v.renderLists=de,v.shadowMap=he,v.state=be,v.info=Qe}oe();const X=new Om(v,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(q,P,!1))},this.getSize=function(b){return b.set(q,P)},this.setSize=function(b,U,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,P=U,t.width=Math.floor(b*W),t.height=Math.floor(U*W),B===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(q*W,P*W).floor()},this.setDrawingBufferSize=function(b,U,B){q=b,P=U,W=B,t.width=Math.floor(b*B),t.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,U,B,z){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,U,B,z),be.viewport(_.copy(re).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,U,B,z){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,U,B,z),be.scissor(S.copy(ge).multiplyScalar(W).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){be.setScissorTest(He=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(b=!0,U=!0,B=!0){let z=0;if(b){let F=!1;if(T!==null){const ee=T.texture.format;F=ee===Ds||ee===Ls||ee===Is}if(F){const ee=T.texture.type,se=ee===dn||ee===Gn||ee===Fi||ee===xi||ee===Cs||ee===Ps,fe=Ee.getClearColor(),me=Ee.getClearAlpha(),ye=fe.r,Se=fe.g,ve=fe.b;se?(m[0]=ye,m[1]=Se,m[2]=ve,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=ye,g[1]=Se,g[2]=ve,g[3]=me,R.clearBufferiv(R.COLOR,0,g))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),ze.dispose(),Te.dispose(),y.dispose(),O.dispose(),Y.dispose(),Je.dispose(),D.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",to),X.removeEventListener("sessionend",no),Rn.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Qe.autoReset,U=he.enabled,B=he.autoUpdate,z=he.needsUpdate,F=he.type;oe(),Qe.autoReset=b,he.enabled=U,he.autoUpdate=B,he.needsUpdate=z,he.type=F}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){const U=b.target;U.removeEventListener("dispose",Oe),at(U)}function at(b){xt(b),Te.remove(b)}function xt(b){const U=Te.get(b).programs;U!==void 0&&(U.forEach(function(B){_e.releaseProgram(B)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,z,F,ee){U===null&&(U=Fe);const se=F.isMesh&&F.matrixWorld.determinant()<0,fe=Fc(b,U,B,z,F);be.setMaterial(z,se);let me=B.index,ye=1;if(z.wireframe===!0){if(me=Z.getWireframeAttribute(B),me===void 0)return;ye=2}const Se=B.drawRange,ve=B.attributes.position;let $e=Se.start*ye,et=(Se.start+Se.count)*ye;ee!==null&&($e=Math.max($e,ee.start*ye),et=Math.min(et,(ee.start+ee.count)*ye)),me!==null?($e=Math.max($e,0),et=Math.min(et,me.count)):ve!=null&&($e=Math.max($e,0),et=Math.min(et,ve.count));const it=et-$e;if(it<0||it===1/0)return;Je.setup(F,z,fe,B,me);let Tt,Ve=ue;if(me!==null&&(Tt=K.get(me),Ve=Ne,Ve.setIndex(Tt)),F.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*ke()),Ve.setMode(R.LINES)):Ve.setMode(R.TRIANGLES);else if(F.isLine){let xe=z.linewidth;xe===void 0&&(xe=1),be.setLineWidth(xe*ke()),F.isLineSegments?Ve.setMode(R.LINES):F.isLineLoop?Ve.setMode(R.LINE_LOOP):Ve.setMode(R.LINE_STRIP)}else F.isPoints?Ve.setMode(R.POINTS):F.isSprite&&Ve.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ve.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Ve.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const xe=F._multiDrawStarts,ht=F._multiDrawCounts,We=F._multiDrawCount,Nt=me?K.get(me).bytesPerElement:1,Kn=Te.get(z).currentProgram.getUniforms();for(let At=0;At<We;At++)Kn.setValue(R,"_gl_DrawID",At),Ve.render(xe[At]/Nt,ht[At])}else if(F.isInstancedMesh)Ve.renderInstances($e,it,F.count);else if(B.isInstancedBufferGeometry){const xe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ht=Math.min(B.instanceCount,xe);Ve.renderInstances($e,it,ht)}else Ve.render($e,it)};function Ge(b,U,B){b.transparent===!0&&b.side===Bt&&b.forceSinglePass===!1?(b.side=bt,b.needsUpdate=!0,qi(b,U,B),b.side=bn,b.needsUpdate=!0,qi(b,U,B),b.side=Bt):qi(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),u=ze.get(B),u.init(U),M.push(u),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const z=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let se=0;se<ee.length;se++){const fe=ee[se];Ge(fe,B,F),z.add(fe)}else Ge(ee,B,F),z.add(ee)}),M.pop(),u=null,z},this.compileAsync=function(b,U,B=null){const z=this.compile(b,U,B);return new Promise(F=>{function ee(){if(z.forEach(function(se){Te.get(se).currentProgram.isReady()&&z.delete(se)}),z.size===0){F(b);return}setTimeout(ee,10)}Ue.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let yt=null;function Qt(b){yt&&yt(b)}function to(){Rn.stop()}function no(){Rn.start()}const Rn=new $l;Rn.setAnimationLoop(Qt),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(b){yt=b,X.setAnimationLoop(b),b===null?Rn.stop():Rn.start()},X.addEventListener("sessionstart",to),X.addEventListener("sessionend",no),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,T),u=ze.get(b,M.length),u.init(U),M.push(u),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),qe.setFromProjectionMatrix(ce),J=this.localClippingEnabled,$=Q.init(this.clippingPlanes,J),x=de.get(b,h.length),x.init(),h.push(x),X.enabled===!0&&X.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Kr(ee,U,-1/0,v.sortObjects)}Kr(b,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(H,te),Ye=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ye&&Ee.addToRenderList(x,b),this.info.render.frame++,$===!0&&Q.beginShadows();const B=u.state.shadowsArray;he.render(B,b,U),$===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,F=x.transmissive;if(u.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let se=0,fe=ee.length;se<fe;se++){const me=ee[se];ro(z,F,b,me)}Ye&&Ee.render(b);for(let se=0,fe=ee.length;se<fe;se++){const me=ee[se];io(x,b,me,me.viewport)}}else F.length>0&&ro(z,F,b,U),Ye&&Ee.render(b),io(x,b,U);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,U),Je.resetDefaultState(),C=-1,G=null,M.pop(),M.length>0?(u=M[M.length-1],$===!0&&Q.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Kr(b,U,B,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||qe.intersectsSprite(b)){z&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const se=Y.update(b),fe=b.material;fe.visible&&x.push(b,se,fe,B,Me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||qe.intersectsObject(b))){const se=Y.update(b),fe=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Me.copy(se.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=se.groups;for(let ye=0,Se=me.length;ye<Se;ye++){const ve=me[ye],$e=fe[ve.materialIndex];$e&&$e.visible&&x.push(b,se,$e,B,Me.z,ve)}}else fe.visible&&x.push(b,se,fe,B,Me.z,null)}}const ee=b.children;for(let se=0,fe=ee.length;se<fe;se++)Kr(ee[se],U,B,z)}function io(b,U,B,z){const F=b.opaque,ee=b.transmissive,se=b.transparent;u.setupLightsView(B),$===!0&&Q.setGlobalState(v.clippingPlanes,B),z&&be.viewport(_.copy(z)),F.length>0&&Xi(F,U,B),ee.length>0&&Xi(ee,U,B),se.length>0&&Xi(se,U,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ro(b,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Vn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Bi:dn,minFilter:Hn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=u.state.transmissionRenderTarget[z.id],se=z.viewport||_;ee.setSize(se.z,se.w);const fe=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(N),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ye&&Ee.render(B);const me=v.toneMapping;v.toneMapping=Mn;const ye=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),$===!0&&Q.setGlobalState(v.clippingPlanes,z),Xi(b,B,z),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let ve=0,$e=U.length;ve<$e;ve++){const et=U[ve],it=et.object,Tt=et.geometry,Ve=et.material,xe=et.group;if(Ve.side===Bt&&it.layers.test(z.layers)){const ht=Ve.side;Ve.side=bt,Ve.needsUpdate=!0,ao(it,B,z,Tt,Ve,xe),Ve.side=ht,Ve.needsUpdate=!0,Se=!0}}Se===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}v.setRenderTarget(fe),v.setClearColor(N,V),ye!==void 0&&(z.viewport=ye),v.toneMapping=me}function Xi(b,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=b.length;F<ee;F++){const se=b[F],fe=se.object,me=se.geometry,ye=z===null?se.material:z,Se=se.group;fe.layers.test(B.layers)&&ao(fe,U,B,me,ye,Se)}}function ao(b,U,B,z,F,ee){b.onBeforeRender(v,U,B,z,F,ee),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,U,B,z,b,ee),F.transparent===!0&&F.side===Bt&&F.forceSinglePass===!1?(F.side=bt,F.needsUpdate=!0,v.renderBufferDirect(B,U,z,F,b,ee),F.side=bn,F.needsUpdate=!0,v.renderBufferDirect(B,U,z,F,b,ee),F.side=Bt):v.renderBufferDirect(B,U,z,F,b,ee),b.onAfterRender(v,U,B,z,F,ee)}function qi(b,U,B){U.isScene!==!0&&(U=Fe);const z=Te.get(b),F=u.state.lights,ee=u.state.shadowsArray,se=F.state.version,fe=_e.getParameters(b,F.state,ee,U,B),me=_e.getProgramCacheKey(fe);let ye=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,ye===void 0&&(b.addEventListener("dispose",Oe),ye=new Map,z.programs=ye);let Se=ye.get(me);if(Se!==void 0){if(z.currentProgram===Se&&z.lightsStateVersion===se)return oo(b,fe),Se}else fe.uniforms=_e.getUniforms(b),b.onBeforeCompile(fe,v),Se=_e.acquireProgram(fe,me),ye.set(me,Se),z.uniforms=fe.uniforms;const ve=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ve.clippingPlanes=Q.uniform),oo(b,fe),z.needsLights=Oc(b),z.lightsStateVersion=se,z.needsLights&&(ve.ambientLightColor.value=F.state.ambient,ve.lightProbe.value=F.state.probe,ve.directionalLights.value=F.state.directional,ve.directionalLightShadows.value=F.state.directionalShadow,ve.spotLights.value=F.state.spot,ve.spotLightShadows.value=F.state.spotShadow,ve.rectAreaLights.value=F.state.rectArea,ve.ltc_1.value=F.state.rectAreaLTC1,ve.ltc_2.value=F.state.rectAreaLTC2,ve.pointLights.value=F.state.point,ve.pointLightShadows.value=F.state.pointShadow,ve.hemisphereLights.value=F.state.hemi,ve.directionalShadowMap.value=F.state.directionalShadowMap,ve.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ve.spotShadowMap.value=F.state.spotShadowMap,ve.spotLightMatrix.value=F.state.spotLightMatrix,ve.spotLightMap.value=F.state.spotLightMap,ve.pointShadowMap.value=F.state.pointShadowMap,ve.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Se,z.uniformsList=null,Se}function so(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=wr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function oo(b,U){const B=Te.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Fc(b,U,B,z,F){U.isScene!==!0&&(U=Fe),w.resetTextureUnits();const ee=U.fog,se=z.isMeshStandardMaterial?U.environment:null,fe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,me=(z.isMeshStandardMaterial?O:y).get(z.envMap||se),ye=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Se=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ve=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,et=!!B.morphAttributes.color;let it=Mn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(it=v.toneMapping);const Tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ve=Tt!==void 0?Tt.length:0,xe=Te.get(z),ht=u.state.lights;if($===!0&&(J===!0||b!==G)){const Pt=b===G&&z.id===C;Q.setState(z,b,Pt)}let We=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ht.state.version||xe.outputColorSpace!==fe||F.isBatchedMesh&&xe.batching===!1||!F.isBatchedMesh&&xe.batching===!0||F.isBatchedMesh&&xe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&xe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&xe.instancing===!1||!F.isInstancedMesh&&xe.instancing===!0||F.isSkinnedMesh&&xe.skinning===!1||!F.isSkinnedMesh&&xe.skinning===!0||F.isInstancedMesh&&xe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&xe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&xe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&xe.instancingMorph===!1&&F.morphTexture!==null||xe.envMap!==me||z.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==ye||xe.vertexTangents!==Se||xe.morphTargets!==ve||xe.morphNormals!==$e||xe.morphColors!==et||xe.toneMapping!==it||xe.morphTargetsCount!==Ve)&&(We=!0):(We=!0,xe.__version=z.version);let Nt=xe.currentProgram;We===!0&&(Nt=qi(z,U,F));let Kn=!1,At=!1,jr=!1;const rt=Nt.getUniforms(),un=xe.uniforms;if(be.useProgram(Nt.program)&&(Kn=!0,At=!0,jr=!0),z.id!==C&&(C=z.id,At=!0),Kn||G!==b){Be.reverseDepthBuffer?(pe.copy(b.projectionMatrix),Pd(pe),Id(pe),rt.setValue(R,"projectionMatrix",pe)):rt.setValue(R,"projectionMatrix",b.projectionMatrix),rt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Pt=rt.map.cameraPosition;Pt!==void 0&&Pt.setValue(R,Ae.setFromMatrixPosition(b.matrixWorld)),Be.logarithmicDepthBuffer&&rt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,At=!0,jr=!0)}if(F.isSkinnedMesh){rt.setOptional(R,F,"bindMatrix"),rt.setOptional(R,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),rt.setValue(R,"boneTexture",Pt.boneTexture,w))}F.isBatchedMesh&&(rt.setOptional(R,F,"batchingTexture"),rt.setValue(R,"batchingTexture",F._matricesTexture,w),rt.setOptional(R,F,"batchingIdTexture"),rt.setValue(R,"batchingIdTexture",F._indirectTexture,w),rt.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&rt.setValue(R,"batchingColorTexture",F._colorsTexture,w));const Zr=B.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&we.update(F,B,Nt),(At||xe.receiveShadow!==F.receiveShadow)&&(xe.receiveShadow=F.receiveShadow,rt.setValue(R,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=me,un.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),At&&(rt.setValue(R,"toneMappingExposure",v.toneMappingExposure),xe.needsLights&&kc(un,jr),ee&&z.fog===!0&&ie.refreshFogUniforms(un,ee),ie.refreshMaterialUniforms(un,z,W,P,u.state.transmissionRenderTarget[b.id]),wr.upload(R,so(xe),un,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wr.upload(R,so(xe),un,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(R,"center",F.center),rt.setValue(R,"modelViewMatrix",F.modelViewMatrix),rt.setValue(R,"normalMatrix",F.normalMatrix),rt.setValue(R,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Pt=z.uniformsGroups;for(let Jr=0,Bc=Pt.length;Jr<Bc;Jr++){const lo=Pt[Jr];D.update(lo,Nt),D.bind(lo,Nt)}}return Nt}function kc(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Oc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,U,B){Te.get(b.texture).__webglTexture=U,Te.get(b.depthTexture).__webglTexture=B;const z=Te.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=Te.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){T=b,L=U,A=B;let z=!0,F=null,ee=!1,se=!1;if(b){const me=Te.get(b);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(me.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(me.__hasExternalTextures)w.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ve=b.depthTexture;if(me.__boundDepthTexture!==ve){if(ve!==null&&Te.has(ve)&&(b.width!==ve.image.width||b.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const ye=b.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(se=!0);const Se=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Se[U])?F=Se[U][B]:F=Se[U],ee=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Se)?F=Se[B]:F=Se,_.copy(b.viewport),S.copy(b.scissor),k=b.scissorTest}else _.copy(re).multiplyScalar(W).floor(),S.copy(ge).multiplyScalar(W).floor(),k=He;if(be.bindFramebuffer(R.FRAMEBUFFER,F)&&z&&be.drawBuffers(b,F),be.viewport(_),be.scissor(S),be.setScissorTest(k),ee){const me=Te.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,B)}else if(se){const me=Te.get(b.texture),ye=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,B||0,ye)}C=-1},this.readRenderTargetPixels=function(b,U,B,z,F,ee,se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){be.bindFramebuffer(R.FRAMEBUFFER,fe);try{const me=b.texture,ye=me.format,Se=me.type;if(!Be.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&B>=0&&B<=b.height-F&&R.readPixels(U,B,z,F,Re.convert(ye),Re.convert(Se),ee)}finally{const me=T!==null?Te.get(T).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,z,F,ee,se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){const me=b.texture,ye=me.format,Se=me.type;if(!Be.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-z&&B>=0&&B<=b.height-F){be.bindFramebuffer(R.FRAMEBUFFER,fe);const ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(U,B,z,F,Re.convert(ye),Re.convert(Se),0);const $e=T!==null?Te.get(T).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,$e);const et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cd(R,et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(ve),R.deleteSync(et),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-B),F=Math.floor(b.image.width*z),ee=Math.floor(b.image.height*z),se=U!==null?U.x:0,fe=U!==null?U.y:0;w.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,se,fe,F,ee),be.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,z=null,F=0){b.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,B=null);let ee,se,fe,me,ye,Se;B!==null?(ee=B.max.x-B.min.x,se=B.max.y-B.min.y,fe=B.min.x,me=B.min.y):(ee=b.image.width,se=b.image.height,fe=0,me=0),z!==null?(ye=z.x,Se=z.y):(ye=0,Se=0);const ve=Re.convert(U.format),$e=Re.convert(U.type);w.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const et=R.getParameter(R.UNPACK_ROW_LENGTH),it=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tt=R.getParameter(R.UNPACK_SKIP_PIXELS),Ve=R.getParameter(R.UNPACK_SKIP_ROWS),xe=R.getParameter(R.UNPACK_SKIP_IMAGES),ht=b.isCompressedTexture?b.mipmaps[F]:b.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ht.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ht.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,ye,Se,ee,se,ve,$e,ht.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,ye,Se,ht.width,ht.height,ve,ht.data):R.texSubImage2D(R.TEXTURE_2D,F,ye,Se,ee,se,ve,$e,ht),R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xe),F===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,z=null,F=0){b.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let ee,se,fe,me,ye,Se,ve,$e,et;const it=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(ee=B.max.x-B.min.x,se=B.max.y-B.min.y,fe=B.max.z-B.min.z,me=B.min.x,ye=B.min.y,Se=B.min.z):(ee=it.width,se=it.height,fe=it.depth,me=0,ye=0,Se=0),z!==null?(ve=z.x,$e=z.y,et=z.z):(ve=0,$e=0,et=0);const Tt=Re.convert(U.format),Ve=Re.convert(U.type);let xe;if(U.isData3DTexture)w.setTexture3D(U,0),xe=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)w.setTexture2DArray(U,0),xe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=R.getParameter(R.UNPACK_ROW_LENGTH),We=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Nt=R.getParameter(R.UNPACK_SKIP_PIXELS),Kn=R.getParameter(R.UNPACK_SKIP_ROWS),At=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,it.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se),b.isDataTexture||b.isData3DTexture?R.texSubImage3D(xe,F,ve,$e,et,ee,se,fe,Tt,Ve,it.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,F,ve,$e,et,ee,se,fe,Tt,it.data):R.texSubImage3D(xe,F,ve,$e,et,ee,se,fe,Tt,Ve,it),R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,We),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Kn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,At),F===0&&U.generateMipmaps&&R.generateMipmap(xe),be.unbindTexture()},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,be.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Us?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Hr?"display-p3":"srgb"}}class Vr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Vr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bs extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ec extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nr=new I,Fr=new I,rl=new nt,Li=new Ns,pr=new Vi,Pa=new I,al=new I;class Gm extends ot{constructor(e=new ut,t=new ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Nr.fromBufferAttribute(t,r-1),Fr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),pr.radius+=a,e.ray.intersectsSphere(pr)===!1)return;rl.copy(r).invert(),Li.copy(e.ray).applyMatrix4(rl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let x=m,u=g-1;x<u;x+=c){const h=d.getX(x),M=d.getX(x+1),v=mr(this,e,Li,l,h,M);v&&t.push(v)}if(this.isLineLoop){const x=d.getX(g-1),u=d.getX(m),h=mr(this,e,Li,l,x,u);h&&t.push(h)}}else{const m=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let x=m,u=g-1;x<u;x+=c){const h=mr(this,e,Li,l,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=mr(this,e,Li,l,g-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function mr(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(Nr.fromBufferAttribute(s,r),Fr.fromBufferAttribute(s,a),t.distanceSqToSegment(Nr,Fr,Pa,al)>n)return;Pa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pa);if(!(l<e.near||l>e.far))return{distance:l,point:al.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const sl=new I,ol=new I;class Vm extends Gm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)sl.fromBufferAttribute(t,r),ol.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+sl.distanceTo(ol);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tc extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ll=new nt,Ms=new Ns,gr=new Vi,_r=new I;class Wm extends ot{constructor(e=new ut,t=new tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),gr.radius+=a,e.ray.intersectsSphere(gr)===!1)return;ll.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(ll);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=f,x=m;g<x;g++){const u=c.getX(g);_r.fromBufferAttribute(p,u),cl(_r,u,l,r,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let g=f,x=m;g<x;g++)_r.fromBufferAttribute(p,g),cl(_r,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function cl(i,e,t,n,r,a,s){const o=Ms.distanceSqToPoint(i);if(o<t){const l=new I;Ms.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Wr extends ut{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new I,d=new De;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){const m=n+p/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[f]/e+1)/2,d.y=(s[f+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wn extends ut{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const d=[],p=[],f=[],m=[];let g=0;const x=[],u=n/2;let h=0;M(),s===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(m,2));function M(){const E=new I,L=new I;let A=0;const T=(t-e)/n;for(let C=0;C<=a;C++){const G=[],_=C/a,S=_*(t-e)+e;for(let k=0;k<=r;k++){const N=k/r,V=N*l+o,q=Math.sin(V),P=Math.cos(V);L.x=S*q,L.y=-_*n+u,L.z=S*P,p.push(L.x,L.y,L.z),E.set(q,T,P).normalize(),f.push(E.x,E.y,E.z),m.push(N,1-_),G.push(g++)}x.push(G)}for(let C=0;C<r;C++)for(let G=0;G<a;G++){const _=x[G][C],S=x[G+1][C],k=x[G+1][C+1],N=x[G][C+1];e>0&&(d.push(_,S,N),A+=3),t>0&&(d.push(S,k,N),A+=3)}c.addGroup(h,A,0),h+=A}function v(E){const L=g,A=new De,T=new I;let C=0;const G=E===!0?e:t,_=E===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,u*_,0),f.push(0,_,0),m.push(.5,.5),g++;const S=g;for(let k=0;k<=r;k++){const V=k/r*l+o,q=Math.cos(V),P=Math.sin(V);T.x=G*P,T.y=u*_,T.z=G*q,p.push(T.x,T.y,T.z),f.push(0,_,0),A.x=q*.5+.5,A.y=P*.5*_+.5,m.push(A.x,A.y),g++}for(let k=0;k<r;k++){const N=L+k,V=S+k;E===!0?d.push(V,V+1,N):d.push(V+1,V,N),C+=3}c.addGroup(h,C,E===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends wn{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Wi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends ut{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),c(n),d(),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(a.slice(),3)),this.setAttribute("uv",new Ze(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new I,E=new I,L=new I;for(let A=0;A<t.length;A+=3)m(t[A+0],v),m(t[A+1],E),m(t[A+2],L),l(v,E,L,M)}function l(M,v,E,L){const A=L+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const G=M.clone().lerp(E,C/A),_=v.clone().lerp(E,C/A),S=A-C;for(let k=0;k<=S;k++)k===0&&C===A?T[C][k]=G:T[C][k]=G.clone().lerp(_,k/S)}for(let C=0;C<A;C++)for(let G=0;G<2*(A-C)-1;G++){const _=Math.floor(G/2);G%2===0?(f(T[C][_+1]),f(T[C+1][_]),f(T[C][_])):(f(T[C][_+1]),f(T[C+1][_+1]),f(T[C+1][_]))}}function c(M){const v=new I;for(let E=0;E<a.length;E+=3)v.x=a[E+0],v.y=a[E+1],v.z=a[E+2],v.normalize().multiplyScalar(M),a[E+0]=v.x,a[E+1]=v.y,a[E+2]=v.z}function d(){const M=new I;for(let v=0;v<a.length;v+=3){M.x=a[v+0],M.y=a[v+1],M.z=a[v+2];const E=u(M)/2/Math.PI+.5,L=h(M)/Math.PI+.5;s.push(E,1-L)}g(),p()}function p(){for(let M=0;M<s.length;M+=6){const v=s[M+0],E=s[M+2],L=s[M+4],A=Math.max(v,E,L),T=Math.min(v,E,L);A>.9&&T<.1&&(v<.2&&(s[M+0]+=1),E<.2&&(s[M+2]+=1),L<.2&&(s[M+4]+=1))}}function f(M){a.push(M.x,M.y,M.z)}function m(M,v){const E=M*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function g(){const M=new I,v=new I,E=new I,L=new I,A=new De,T=new De,C=new De;for(let G=0,_=0;G<a.length;G+=9,_+=6){M.set(a[G+0],a[G+1],a[G+2]),v.set(a[G+3],a[G+4],a[G+5]),E.set(a[G+6],a[G+7],a[G+8]),A.set(s[_+0],s[_+1]),T.set(s[_+2],s[_+3]),C.set(s[_+4],s[_+5]),L.copy(M).add(v).add(E).divideScalar(3);const S=u(L);x(A,_+0,M,S),x(T,_+2,v,S),x(C,_+4,E,S)}}function x(M,v,E,L){L<0&&M.x===1&&(s[v]=M.x-1),E.x===0&&E.z===0&&(s[v]=L/2/Math.PI+.5)}function u(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.vertices,e.indices,e.radius,e.details)}}class qr extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qr(e.radius,e.detail)}}class Xn extends Xr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xn(e.radius,e.detail)}}class kr extends ut{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const d=[],p=new I,f=new I,m=[],g=[],x=[],u=[];for(let h=0;h<=n;h++){const M=[],v=h/n;let E=0;h===0&&s===0?E=.5/t:h===n&&l===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const A=L/t;p.x=-e*Math.cos(r+A*a)*Math.sin(s+v*o),p.y=e*Math.cos(s+v*o),p.z=e*Math.sin(r+A*a)*Math.sin(s+v*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),u.push(A+E,1-v),M.push(c++)}d.push(M)}for(let h=0;h<n;h++)for(let M=0;M<t;M++){const v=d[h][M+1],E=d[h][M],L=d[h+1][M],A=d[h+1][M+1];(h!==0||s>0)&&m.push(v,E,A),(h!==n-1||l<Math.PI)&&m.push(E,L,A)}this.setIndex(m),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hn extends ut{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],l=[],c=[],d=new I,p=new I,f=new I;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const x=g/r*a,u=m/n*Math.PI*2;p.x=(e+t*Math.cos(u))*Math.cos(x),p.y=(e+t*Math.cos(u))*Math.sin(x),p.z=t*Math.sin(u),o.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(p,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const x=(r+1)*m+g-1,u=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,M=(r+1)*m+g;s.push(x,u,M),s.push(u,h,M)}this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xm extends ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new I,a=new I;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const p=l[c],f=p.start,m=p.count;for(let g=f,x=f+m;g<x;g+=3)for(let u=0;u<3;u++){const h=o.getX(g+u),M=o.getX(g+(u+1)%3);r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,M),dl(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,p=3*o+(c+1)%3;r.fromBufferAttribute(s,d),a.fromBufferAttribute(s,p),dl(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function dl(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class mt extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $r extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zs extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ia=new nt,hl=new I,ul=new I;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ul),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fl=new nt,Di=new I,La=new I;class qm extends nc{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Di.setFromMatrixPosition(e.matrixWorld),n.position.copy(Di),La.copy(n.position),La.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(La),n.updateMatrixWorld(),r.makeTranslation(-Di.x,-Di.y,-Di.z),fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl)}}class $m extends $r{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new qm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ym extends nc{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hs extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Ym}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ic extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);const qn=[{id:"hansel",name:"Hansel",tale:"Hansel and Gretel",role:"resourceful survivor",signatureKartId:"breadcrumb_buggy",homeTrackId:"candy_cottage_circuit",palette:{primary:2792847,secondary:15320170},stats:{speed:6,acceleration:7,handling:6,weight:4,luck:8},aiStyle:"balanced"},{id:"gretel",name:"Gretel",tale:"Hansel and Gretel",role:"quick-witted escapist",signatureKartId:"candy_oven_cart",homeTrackId:"candy_cottage_circuit",palette:{primary:15167313,secondary:16032353},stats:{speed:6,acceleration:7,handling:7,weight:3,luck:8},aiStyle:"cunning"},{id:"little_red_cap",name:"Little Red Cap",tale:"Little Red Cap",role:"fearless wanderer",signatureKartId:"red_hood_runner",homeTrackId:"grandmothers_hollow",palette:{primary:14034984,secondary:6947855},stats:{speed:7,acceleration:8,handling:6,weight:3,luck:6},aiStyle:"reckless"},{id:"cinderella",name:"Cinderella",tale:"Aschenputtel",role:"midnight contender",signatureKartId:"pumpkin_coach",homeTrackId:"pumpkin_palace_promenade",palette:{primary:9480387,secondary:14730236},stats:{speed:7,acceleration:6,handling:8,weight:4,luck:9},aiStyle:"steady"},{id:"snow_white",name:"Snow White",tale:"Snow White",role:"glass-coffin revenant",signatureKartId:"glass_coffin_glide",homeTrackId:"mirrorwood_pass",palette:{primary:15858414,secondary:11868062},stats:{speed:6,acceleration:6,handling:7,weight:5,luck:7},aiStyle:"defensive"},{id:"rapunzel",name:"Rapunzel",tale:"Rapunzel",role:"tower-bound climber",signatureKartId:"tower_tress_racer",homeTrackId:"rapunzel_tower_climb",palette:{primary:16765286,secondary:9279918},stats:{speed:6,acceleration:6,handling:9,weight:3,luck:7},aiStyle:"cunning"},{id:"rumpelstiltskin",name:"Rumpelstiltskin",tale:"Rumpelstiltskin",role:"bargain-spinning trickster",signatureKartId:"golden_straw_spinner",homeTrackId:"millers_goldworks",palette:{primary:13214247,secondary:4401176},stats:{speed:7,acceleration:7,handling:6,weight:4,luck:5},aiStyle:"aggressive"},{id:"frog_prince",name:"The Frog Prince",tale:"The Frog Prince",role:"amphibian royal",signatureKartId:"lily_pond_hopper",homeTrackId:"frog_pond_causeway",palette:{primary:5420936,secondary:16766474},stats:{speed:5,acceleration:8,handling:7,weight:3,luck:7},aiStyle:"reckless"},{id:"briar_rose",name:"Briar Rose",tale:"Little Briar Rose",role:"slumbering thorn-heir",signatureKartId:"spindle_spark_kart",homeTrackId:"moonlit_briar_ring",palette:{primary:16740502,secondary:3427905},stats:{speed:6,acceleration:5,handling:8,weight:4,luck:8},aiStyle:"steady"},{id:"pied_piper",name:"The Pied Piper",tale:"The Pied Piper of Hamelin",role:"rat-leading minstrel",signatureKartId:"rat_piper_roadster",homeTrackId:"ratcatchers_run",palette:{primary:10309341,secondary:16556817},stats:{speed:8,acceleration:7,handling:6,weight:3,luck:6},aiStyle:"cunning"},{id:"brave_tailor",name:"The Brave Little Tailor",tale:"The Brave Little Tailor",role:"boastful giant-slayer",signatureKartId:"needle_belt_racer",homeTrackId:"seven_at_one_blow_speedway",palette:{primary:4553629,secondary:15087942},stats:{speed:8,acceleration:8,handling:5,weight:4,luck:6},aiStyle:"aggressive"},{id:"dancing_princess",name:"The Twelfth Dancing Princess",tale:"The Twelve Dancing Princesses",role:"midnight ballroom drifter",signatureKartId:"moon_slipper_carriage",homeTrackId:"moon_slipper_ballroom_drift",palette:{primary:6893763,secondary:12647935},stats:{speed:6,acceleration:6,handling:9,weight:3,luck:7},aiStyle:"steady"},{id:"fisherman",name:"The Fisherman",tale:"The Fisherman and His Wife",role:"wish-haunted angler",signatureKartId:"storm_net_skiff_kart",homeTrackId:"storm_shore_sprint",palette:{primary:30646,secondary:13299960},stats:{speed:6,acceleration:6,handling:6,weight:6,luck:5},aiStyle:"defensive"},{id:"fishermans_wife",name:"The Fisherman's Wife",tale:"The Fisherman and His Wife",role:"insatiable wish-monarch",signatureKartId:"wishfish_royal_cart",homeTrackId:"wishfish_kingdom_road",palette:{primary:147082,secondary:16765286},stats:{speed:7,acceleration:6,handling:6,weight:5,luck:4},aiStyle:"aggressive"},{id:"golden_goose_boy",name:"The Golden Goose Boy",tale:"The Golden Goose",role:"lucky simpleton",signatureKartId:"feathered_fortune_wagon",homeTrackId:"golden_goose_parade_route",palette:{primary:16766720,secondary:16775909},stats:{speed:6,acceleration:6,handling:6,weight:4,luck:10},aiStyle:"balanced"},{id:"iron_hans",name:"Iron Hans",tale:"Iron Hans",role:"wild forest warden",signatureKartId:"forest_crown_hauler",homeTrackId:"iron_forest_descent",palette:{primary:7100492,secondary:10914404},stats:{speed:6,acceleration:5,handling:5,weight:8,luck:6},aiStyle:"aggressive"},{id:"jorinda",name:"Jorinda",tale:"Jorinda and Joringel",role:"songbird-cursed maiden",signatureKartId:"nightingale_sleigh",homeTrackId:"songbird_grove",palette:{primary:11887990,secondary:15379595},stats:{speed:6,acceleration:7,handling:7,weight:3,luck:7},aiStyle:"steady"},{id:"joringel",name:"Joringel",tale:"Jorinda and Joringel",role:"devoted rescuer",signatureKartId:"cage_key_cart",homeTrackId:"stone_castle_of_silence",palette:{primary:4869737,secondary:15919588},stats:{speed:6,acceleration:6,handling:7,weight:4,luck:7},aiStyle:"balanced"},{id:"six_swans_prince",name:"The Six Swans Prince",tale:"The Six Swans",role:"feather-cursed royal",signatureKartId:"swanwing_chariot",homeTrackId:"swan_marsh_glideway",palette:{primary:15330543,secondary:9358054},stats:{speed:7,acceleration:7,handling:7,weight:3,luck:6},aiStyle:"cunning"},{id:"goose_girl",name:"The Goose Girl",tale:"The Goose Girl",role:"hidden true princess",signatureKartId:"goosefeather_coach",homeTrackId:"goose_meadow_road",palette:{primary:11066076,secondary:15858414},stats:{speed:6,acceleration:6,handling:8,weight:4,luck:8},aiStyle:"steady"},{id:"mother_holle",name:"Mother Holle",tale:"Mother Holle",role:"snow-bringing matron",signatureKartId:"snow_pillow_sled",homeTrackId:"mother_holle_skyfall",palette:{primary:13299960,secondary:9494767},stats:{speed:5,acceleration:5,handling:7,weight:6,luck:9},aiStyle:"defensive"},{id:"bearskin",name:"Bearskin",tale:"Bearskin",role:"cursed soldier",signatureKartId:"bearhide_bruiser",homeTrackId:"bearskin_warpath",palette:{primary:3810840,secondary:12348453},stats:{speed:6,acceleration:5,handling:4,weight:9,luck:6},aiStyle:"reckless"},{id:"brother",name:"Brother",tale:"Brother and Sister",role:"enchanted-stag kin",signatureKartId:"river_stag_racer",homeTrackId:"enchanted_brook_crossing",palette:{primary:8435992,secondary:5613104},stats:{speed:8,acceleration:7,handling:6,weight:4,luck:5},aiStyle:"reckless"},{id:"sister",name:"Sister",tale:"Brother and Sister",role:"steadfast guardian",signatureKartId:"silver_fawn_buggy",homeTrackId:"enchanted_brook_crossing",palette:{primary:12040100,secondary:14532265},stats:{speed:6,acceleration:6,handling:8,weight:4,luck:7},aiStyle:"defensive"},{id:"white_snake_servant",name:"The White Snake Servant",tale:"The White Snake",role:"beast-tongued knight",signatureKartId:"serpent_court_kart",homeTrackId:"white_snake_court_circuit",palette:{primary:2976335,secondary:14218204},stats:{speed:7,acceleration:7,handling:7,weight:4,luck:8},aiStyle:"cunning"},{id:"juniper_boy",name:"The Juniper Tree Boy",tale:"The Juniper Tree",role:"reborn bird-spirit",signatureKartId:"juniper_dream_cart",homeTrackId:"juniper_graveyard_garden",palette:{primary:3096134,secondary:13292229},stats:{speed:7,acceleration:6,handling:6,weight:4,luck:6},aiStyle:"defensive"},{id:"king_thrushbeard",name:"King Thrushbeard",tale:"King Thrushbeard",role:"disguised humbler",signatureKartId:"thistle_crown_coupe",homeTrackId:"thorn_crown_ridge",palette:{primary:7473591,secondary:16196997},stats:{speed:7,acceleration:6,handling:7,weight:5,luck:6},aiStyle:"aggressive"},{id:"faithful_john",name:"Faithful John",tale:"Faithful John",role:"loyal sworn servant",signatureKartId:"oathbound_royal_wagon",homeTrackId:"faithful_john_harbor_run",palette:{primary:2575479,secondary:15199471},stats:{speed:6,acceleration:6,handling:6,weight:6,luck:9},aiStyle:"defensive"},{id:"devils_sooty_brother",name:"The Devil's Sooty Brother",tale:"The Devil's Sooty Brother",role:"ash-bound bargainer",signatureKartId:"ashen_devil_dray",homeTrackId:"soot_and_ember_mine",palette:{primary:1776414,secondary:15228164},stats:{speed:7,acceleration:7,handling:5,weight:6,luck:5},aiStyle:"aggressive"},{id:"maid_maleen",name:"Maid Maleen",tale:"Maid Maleen",role:"walled-away survivor",signatureKartId:"tower_escape_carriage",homeTrackId:"maid_maleen_ruin_road",palette:{primary:9077116,secondary:12368049},stats:{speed:6,acceleration:6,handling:7,weight:5,luck:8},aiStyle:"steady"},{id:"eldest_kid",name:"The Eldest Kid",tale:"The Wolf and the Seven Young Kids",role:"clever survivor goat",signatureKartId:"goatbell_scamper_kart",homeTrackId:"wolfwood_panic_trail",palette:{primary:16170336,secondary:16248290},stats:{speed:7,acceleration:9,handling:7,weight:2,luck:7},aiStyle:"reckless"},{id:"elves_shoemaker",name:"The Elves' Shoemaker",tale:"The Elves and the Shoemaker",role:"midnight craftsman",signatureKartId:"cobblers_midnight_cart",homeTrackId:"cobblers_midnight_workshop",palette:{primary:7170165,secondary:16763604},stats:{speed:6,acceleration:7,handling:8,weight:3,luck:7},aiStyle:"balanced"}],Gs=Object.fromEntries(qn.map(i=>[i.id,i])),Km="hansel",cn=[{id:"breadcrumb_buggy",name:"Breadcrumb Buggy",tale:"Hansel and Gretel",type:"woodland",modelHint:"small wooden buggy with bread-wheel motifs and a trail-marker lantern",palette:{primary:14263654,secondary:8344889},stats:{speed:5,acceleration:7,handling:7,weight:4}},{id:"candy_oven_cart",name:"Candy Oven Cart",tale:"Hansel and Gretel",type:"confection",modelHint:"rolling sugar oven with peppermint trim and ember glow",palette:{primary:15167313,secondary:16757922},stats:{speed:6,acceleration:6,handling:6,weight:5}},{id:"red_hood_runner",name:"Red Hood Runner",tale:"Little Red Cap",type:"roadster",modelHint:"hooded scarlet roadster with basket and wolf-claw rims",palette:{primary:14034984,secondary:6947855},stats:{speed:7,acceleration:8,handling:6,weight:3}},{id:"pumpkin_coach",name:"Pumpkin Coach",tale:"Aschenputtel",type:"carriage",modelHint:"round pumpkin carriage with vine-spoke wheels and lantern eyes",palette:{primary:16026630,secondary:6966419},stats:{speed:6,acceleration:6,handling:8,weight:5}},{id:"glass_coffin_glide",name:"Glass Coffin Glide",tale:"Snow White",type:"glider",modelHint:"low crystal glider shaped like a glass casket with frost trail",palette:{primary:13495038,secondary:11868062},stats:{speed:7,acceleration:5,handling:7,weight:5}},{id:"tower_tress_racer",name:"Tower Tress Racer",tale:"Rapunzel",type:"racer",modelHint:"tall slim racer with braided-rope grapple coil",palette:{primary:16765286,secondary:9279918},stats:{speed:6,acceleration:6,handling:9,weight:3}},{id:"golden_straw_spinner",name:"Golden Straw Spinner",tale:"Rumpelstiltskin",type:"spinner",modelHint:"spinning-wheel-cored cart trailing golden thread",palette:{primary:13214247,secondary:4401176},stats:{speed:7,acceleration:7,handling:6,weight:4}},{id:"lily_pond_hopper",name:"Lily Pond Hopper",tale:"The Frog Prince",type:"hopper",modelHint:"lily-pad hopper that bounces on frog-leg suspension",palette:{primary:5420936,secondary:16766474},stats:{speed:5,acceleration:8,handling:7,weight:3}},{id:"spindle_spark_kart",name:"Spindle Spark Kart",tale:"Little Briar Rose",type:"racer",modelHint:"thorn-wrapped kart with a single glinting spindle prow",palette:{primary:16740502,secondary:3427905},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"rat_piper_roadster",name:"Rat Piper Roadster",tale:"The Pied Piper",type:"roadster",modelHint:"pied-painted roadster with pipe organ exhaust and rat tail",palette:{primary:10309341,secondary:16556817},stats:{speed:8,acceleration:7,handling:6,weight:3}},{id:"needle_belt_racer",name:"Needle & Belt Racer",tale:"The Brave Little Tailor",type:"racer",modelHint:"patchwork racer stitched with giant needle prow and belt buckle",palette:{primary:4553629,secondary:15087942},stats:{speed:8,acceleration:8,handling:5,weight:4}},{id:"moon_slipper_carriage",name:"Moon Slipper Carriage",tale:"The Twelve Dancing Princesses",type:"carriage",modelHint:"silver ballroom carriage with worn-dancing-slipper wheels",palette:{primary:6893763,secondary:12647935},stats:{speed:6,acceleration:6,handling:9,weight:4}},{id:"storm_net_skiff_kart",name:"Storm Net Skiff Kart",tale:"The Fisherman and His Wife",type:"skiff",modelHint:"fishing-skiff kart draped in storm nets and floats",palette:{primary:30646,secondary:13299960},stats:{speed:6,acceleration:6,handling:6,weight:6}},{id:"wishfish_royal_cart",name:"Wishfish Royal Cart",tale:"The Fisherman and His Wife",type:"carriage",modelHint:"gilded royal cart crowned with a wish-granting flounder",palette:{primary:147082,secondary:16765286},stats:{speed:7,acceleration:6,handling:6,weight:5}},{id:"feathered_fortune_wagon",name:"Feathered Fortune Wagon",tale:"The Golden Goose",type:"wagon",modelHint:"golden-goose wagon that everyone seems stuck to",palette:{primary:16766720,secondary:16775909},stats:{speed:6,acceleration:6,handling:6,weight:5}},{id:"forest_crown_hauler",name:"Forest Crown Hauler",tale:"Iron Hans",type:"hauler",modelHint:"heavy iron hauler antlered with a wild-forest crown",palette:{primary:7100492,secondary:10914404},stats:{speed:6,acceleration:5,handling:5,weight:8}},{id:"nightingale_sleigh",name:"Nightingale Sleigh",tale:"Jorinda and Joringel",type:"sleigh",modelHint:"songbird sleigh with feathered runners and cage chimes",palette:{primary:11887990,secondary:15379595},stats:{speed:6,acceleration:7,handling:7,weight:3}},{id:"cage_key_cart",name:"Cage-Key Cart",tale:"Jorinda and Joringel",type:"cart",modelHint:"iron-cage cart with an oversized enchanted key crank",palette:{primary:4869737,secondary:15919588},stats:{speed:6,acceleration:6,handling:7,weight:4}},{id:"swanwing_chariot",name:"Swanwing Chariot",tale:"The Six Swans",type:"chariot",modelHint:"white chariot with sweeping swan-wing fenders",palette:{primary:15330543,secondary:9358054},stats:{speed:7,acceleration:7,handling:7,weight:3}},{id:"goosefeather_coach",name:"Goosefeather Coach",tale:"The Goose Girl",type:"coach",modelHint:"meadow coach trimmed in goose feathers and a talking-horse charm",palette:{primary:11066076,secondary:15858414},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"snow_pillow_sled",name:"Snow Pillow Sled",tale:"Mother Holle",type:"sled",modelHint:"plush snow sled that shakes down feather flurries",palette:{primary:13299960,secondary:9494767},stats:{speed:5,acceleration:5,handling:7,weight:6}},{id:"bearhide_bruiser",name:"Bearhide Bruiser",tale:"Bearskin",type:"bruiser",modelHint:"hulking bear-pelt bruiser with coin-pouch saddlebags",palette:{primary:3810840,secondary:12348453},stats:{speed:6,acceleration:5,handling:4,weight:9}},{id:"river_stag_racer",name:"River Stag Racer",tale:"Brother and Sister",type:"racer",modelHint:"antlered racer that bounds like an enchanted stag",palette:{primary:8435992,secondary:5613104},stats:{speed:8,acceleration:7,handling:6,weight:4}},{id:"silver_fawn_buggy",name:"Silver Fawn Buggy",tale:"Brother and Sister",type:"buggy",modelHint:"gentle silver-fawn buggy with a protective brook charm",palette:{primary:12040100,secondary:14532265},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"serpent_court_kart",name:"Serpent Court Kart",tale:"The White Snake",type:"kart",modelHint:"courtly kart coiled with a white-snake hood ornament",palette:{primary:2976335,secondary:14218204},stats:{speed:7,acceleration:7,handling:7,weight:4}},{id:"juniper_dream_cart",name:"Juniper Dream Cart",tale:"The Juniper Tree",type:"cart",modelHint:"shadowy cart sprouting juniper boughs and bird bones",palette:{primary:3096134,secondary:13292229},stats:{speed:7,acceleration:6,handling:6,weight:4}},{id:"thistle_crown_coupe",name:"Thistle Crown Coupe",tale:"King Thrushbeard",type:"coupe",modelHint:"humble-disguised coupe hiding a thistle crown",palette:{primary:7473591,secondary:16196997},stats:{speed:7,acceleration:6,handling:7,weight:5}},{id:"oathbound_royal_wagon",name:"Oathbound Royal Wagon",tale:"Faithful John",type:"wagon",modelHint:"oath-marked royal wagon armored against three curses",palette:{primary:2575479,secondary:15199471},stats:{speed:6,acceleration:6,handling:6,weight:6}},{id:"ashen_devil_dray",name:"Ashen Devil Dray",tale:"The Devil's Sooty Brother",type:"dray",modelHint:"soot-caked dray belching ember sparks from a furnace core",palette:{primary:1776414,secondary:15228164},stats:{speed:7,acceleration:7,handling:5,weight:6}},{id:"tower_escape_carriage",name:"Tower Escape Carriage",tale:"Maid Maleen",type:"carriage",modelHint:"rubble-scarred carriage with a wall-breaking ram prow",palette:{primary:9077116,secondary:12368049},stats:{speed:6,acceleration:6,handling:7,weight:5}},{id:"goatbell_scamper_kart",name:"Goatbell Scamper Kart",tale:"The Wolf and the Seven Young Kids",type:"kart",modelHint:"tiny nimble kart strung with warning goat-bells",palette:{primary:16170336,secondary:16248290},stats:{speed:7,acceleration:9,handling:7,weight:2}},{id:"cobblers_midnight_cart",name:"Cobbler's Midnight Cart",tale:"The Elves and the Shoemaker",type:"cart",modelHint:"tidy workshop cart finished overnight by unseen elf hands",palette:{primary:7170165,secondary:16763604},stats:{speed:6,acceleration:7,handling:8,weight:3}}],ki=Object.fromEntries(cn.map(i=>[i.id,i])),jm="breadcrumb_buggy",Ss=[{id:"black_forest_loop",name:"Black Forest Loop",tale:"General Grimm",biome:"forest",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:110,width:22,segments:160,elevationStyle:"flat"},pickupPattern:"balanced_ring",hazardPattern:"forest_basic",decorationSet:"dark_forest",visualTheme:{sky:328706,fog:658695,road:4010278,border:2635288,light:16444877},hazards:["fallen_logs","fog_banks"],futureRallyPoints:[]},{id:"candy_cottage_circuit",name:"Candy Cottage Circuit",tale:"Hansel and Gretel",biome:"confection",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:96,width:24,segments:140,elevationStyle:"flat"},pickupPattern:"dense_inner",hazardPattern:"sticky_basic",decorationSet:"sweets",visualTheme:{sky:3808299,fog:4858675,road:9067076,border:14711391,light:16766629},hazards:["toffee_slick","gumdrop_bumps"],futureRallyPoints:[]},{id:"grandmothers_hollow",name:"Grandmother's Hollow",tale:"Little Red Cap",biome:"forest",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:100,width:16,segments:150,elevationStyle:"gentle"},pickupPattern:"outer_lane",hazardPattern:"forest_basic",decorationSet:"dark_forest",visualTheme:{sky:724744,fog:1317390,road:4864810,border:6947855,light:15320170},hazards:["wolf_dens","bramble_walls"],futureRallyPoints:[]},{id:"pumpkin_palace_promenade",name:"Pumpkin Palace Promenade",tale:"Aschenputtel",biome:"palace",difficulty:2,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:120,width:26,segments:170,elevationStyle:"banked"},pickupPattern:"twin_arcs",hazardPattern:"none_light",decorationSet:"gilded_palace",visualTheme:{sky:2365236,fog:2891071,road:5917290,border:16032353,light:16771266},hazards:["midnight_chime_zone"],futureRallyPoints:[]},{id:"mirrorwood_pass",name:"Mirrorwood Pass",tale:"Snow White",biome:"mirror_forest",difficulty:3,laps:3,variation:"foggy_outer_ring",layout:{type:"circular",radius:108,width:18,segments:160,elevationStyle:"rolling"},pickupPattern:"mirror_pairs",hazardPattern:"glare_fog",decorationSet:"mirror_glass",visualTheme:{sky:1053466,fog:1778224,road:4608092,border:11868062,light:14744572},hazards:["mirror_glare","fog_banks"],futureRallyPoints:[]},{id:"rapunzel_tower_climb",name:"Rapunzel Tower Climb",tale:"Rapunzel",biome:"tower",difficulty:3,laps:3,variation:"spiral_climb_ring",layout:{type:"circular",radius:88,width:16,segments:180,elevationStyle:"climb"},pickupPattern:"spiral_ascending",hazardPattern:"edge_drop",decorationSet:"stone_tower",visualTheme:{sky:1709872,fog:2302019,road:7041116,border:16765286,light:16774064},hazards:["ledge_drops","falling_braids"],futureRallyPoints:[]},{id:"millers_goldworks",name:"Miller's Goldworks",tale:"Rumpelstiltskin",biome:"mill",difficulty:3,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:80,width:18,segments:150,elevationStyle:"gentle"},pickupPattern:"gold_clusters",hazardPattern:"spindle_traps",decorationSet:"spinning_mill",visualTheme:{sky:1840136,fog:2497292,road:5982767,border:13214247,light:16769162},hazards:["spindle_pits","straw_bales"],futureRallyPoints:[]},{id:"frog_pond_causeway",name:"Frog Pond Causeway",tale:"The Frog Prince",biome:"wetland",difficulty:2,laps:3,variation:"swamp_slick_ring",layout:{type:"circular",radius:102,width:20,segments:150,elevationStyle:"flat"},pickupPattern:"lilypad_hops",hazardPattern:"slick_water",decorationSet:"pond_reeds",visualTheme:{sky:794394,fog:1191974,road:3824202,border:16766474,light:14218204},hazards:["water_slicks","reed_walls"],futureRallyPoints:[]},{id:"moonlit_briar_ring",name:"Moonlit Briar Ring",tale:"Little Briar Rose",biome:"thornwood",difficulty:3,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:106,width:17,segments:165,elevationStyle:"rolling"},pickupPattern:"thorn_gaps",hazardPattern:"thorn_walls",decorationSet:"briar_thorns",visualTheme:{sky:1313567,fog:1905200,road:4142160,border:16740502,light:13154047},hazards:["thorn_walls","sleep_pollen"],futureRallyPoints:[]},{id:"ratcatchers_run",name:"Ratcatcher's Run",tale:"The Pied Piper",biome:"town",difficulty:3,laps:4,variation:"small_chaotic_ring",layout:{type:"circular",radius:84,width:16,segments:160,elevationStyle:"gentle"},pickupPattern:"alley_scatter",hazardPattern:"rat_swarm",decorationSet:"old_town",visualTheme:{sky:1708832,fog:2300460,road:4867154,border:16556817,light:15325350},hazards:["rat_swarms","narrow_alleys"],futureRallyPoints:[]},{id:"seven_at_one_blow_speedway",name:"Seven-at-One-Blow Speedway",tale:"The Brave Little Tailor",biome:"meadow",difficulty:2,laps:4,variation:"large_fast_ring",layout:{type:"circular",radius:145,width:26,segments:180,elevationStyle:"banked"},pickupPattern:"speed_lane",hazardPattern:"giant_stomps",decorationSet:"bright_meadow",visualTheme:{sky:1714746,fog:2373706,road:4873066,border:15087942,light:11066076},hazards:["giant_footprints","belt_signs"],futureRallyPoints:[]},{id:"moon_slipper_ballroom_drift",name:"Moon Slipper Ballroom Drift",tale:"The Twelve Dancing Princesses",biome:"underground_palace",difficulty:4,laps:3,variation:"double_lane_ring",layout:{type:"circular",radius:116,width:28,segments:175,elevationStyle:"banked"},pickupPattern:"paired_lanes",hazardPattern:"polish_slick",decorationSet:"silver_ballroom",visualTheme:{sky:920095,fog:1511985,road:3814736,border:12647935,light:14730236},hazards:["polished_slicks","worn_slippers"],futureRallyPoints:[]},{id:"storm_shore_sprint",name:"Storm Shore Sprint",tale:"The Fisherman and His Wife",biome:"coast",difficulty:3,laps:3,variation:"foggy_outer_ring",layout:{type:"circular",radius:124,width:20,segments:165,elevationStyle:"rolling"},pickupPattern:"tide_line",hazardPattern:"wave_surge",decorationSet:"stormy_shore",visualTheme:{sky:660508,fog:1188400,road:4282986,border:30646,light:13299960},hazards:["wave_surges","wreck_debris"],futureRallyPoints:[]},{id:"wishfish_kingdom_road",name:"Wishfish Kingdom Road",tale:"The Fisherman and His Wife",biome:"palace",difficulty:3,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:130,width:24,segments:170,elevationStyle:"banked"},pickupPattern:"royal_arcs",hazardPattern:"none_light",decorationSet:"sea_palace",visualTheme:{sky:464686,fog:795200,road:3820138,border:16765286,light:15199471},hazards:["greed_quakes"],futureRallyPoints:[]},{id:"golden_goose_parade_route",name:"Golden Goose Parade Route",tale:"The Golden Goose",biome:"town",difficulty:2,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:118,width:24,segments:160,elevationStyle:"flat"},pickupPattern:"parade_line",hazardPattern:"stuck_crowd",decorationSet:"festival_town",visualTheme:{sky:2761744,fog:3484948,road:5984816,border:16766720,light:16775909},hazards:["stuck_crowds","feather_drifts"],futureRallyPoints:[]},{id:"iron_forest_descent",name:"Iron Forest Descent",tale:"Iron Hans",biome:"iron_forest",difficulty:4,laps:3,variation:"large_fast_ring",layout:{type:"circular",radius:140,width:22,segments:180,elevationStyle:"descent"},pickupPattern:"downhill_scatter",hazardPattern:"iron_roots",decorationSet:"iron_woods",visualTheme:{sky:1315084,fog:1906706,road:4866102,border:10914404,light:14524766},hazards:["iron_roots","wild_man_traps"],futureRallyPoints:[]},{id:"songbird_grove",name:"Songbird Grove",tale:"Jorinda and Joringel",biome:"grove",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:98,width:17,segments:150,elevationStyle:"gentle"},pickupPattern:"birdsong_arcs",hazardPattern:"cage_snares",decorationSet:"song_grove",visualTheme:{sky:1448466,fog:2107162,road:4868662,border:15379595,light:15919588},hazards:["cage_snares","thicket_walls"],futureRallyPoints:[]},{id:"stone_castle_of_silence",name:"Stone Castle of Silence",tale:"Jorinda and Joringel",biome:"castle",difficulty:4,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:112,width:20,segments:170,elevationStyle:"flat"},pickupPattern:"corridor_line",hazardPattern:"silence_zones",decorationSet:"silent_stone",visualTheme:{sky:1053206,fog:1579810,road:4212046,border:15919588,light:13225430},hazards:["silence_zones","stone_statues"],futureRallyPoints:[]},{id:"swan_marsh_glideway",name:"Swan Marsh Glideway",tale:"The Six Swans",biome:"wetland",difficulty:3,laps:3,variation:"swamp_slick_ring",layout:{type:"circular",radius:122,width:22,segments:165,elevationStyle:"flat"},pickupPattern:"feather_drift",hazardPattern:"slick_water",decorationSet:"swan_marsh",visualTheme:{sky:1186338,fog:1713712,road:4477532,border:9358054,light:15330543},hazards:["water_slicks","nettle_shirts"],futureRallyPoints:[]},{id:"goose_meadow_road",name:"Goose Meadow Road",tale:"The Goose Girl",biome:"meadow",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:126,width:26,segments:160,elevationStyle:"flat"},pickupPattern:"meadow_line",hazardPattern:"none_light",decorationSet:"open_meadow",visualTheme:{sky:1911316,fog:2570267,road:5925434,border:11066076,light:15858414},hazards:["windy_gusts"],futureRallyPoints:[]},{id:"mother_holle_skyfall",name:"Mother Holle Skyfall",tale:"Mother Holle",biome:"sky",difficulty:4,laps:3,variation:"snow_drift_ring",layout:{type:"circular",radius:134,width:24,segments:175,elevationStyle:"rolling"},pickupPattern:"cloud_scatter",hazardPattern:"snow_drifts",decorationSet:"sky_clouds",visualTheme:{sky:2767434,fog:3821407,road:6978186,border:9494767,light:16777215},hazards:["snow_drifts","pitch_patches"],futureRallyPoints:[]},{id:"bearskin_warpath",name:"Bearskin Warpath",tale:"Bearskin",biome:"battlefield",difficulty:4,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:90,width:18,segments:160,elevationStyle:"rolling"},pickupPattern:"coin_scatter",hazardPattern:"mud_pits",decorationSet:"war_camp",visualTheme:{sky:1577484,fog:2234641,road:4864554,border:12348453,light:14524766},hazards:["mud_pits","coin_traps"],futureRallyPoints:[]},{id:"enchanted_brook_crossing",name:"Enchanted Brook Crossing",tale:"Brother and Sister",biome:"brookland",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:104,width:18,segments:155,elevationStyle:"gentle"},pickupPattern:"brook_line",hazardPattern:"cursed_streams",decorationSet:"green_brook",visualTheme:{sky:1054734,fog:1581587,road:4608559,border:5613104,light:14218204},hazards:["cursed_streams","stag_crossings"],futureRallyPoints:[]},{id:"white_snake_court_circuit",name:"White Snake Court Circuit",tale:"The White Snake",biome:"palace",difficulty:3,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:114,width:22,segments:168,elevationStyle:"banked"},pickupPattern:"court_arcs",hazardPattern:"serpent_coils",decorationSet:"green_court",visualTheme:{sky:858642,fog:1320731,road:3821370,border:14218204,light:15269872},hazards:["serpent_coils","riddle_gates"],futureRallyPoints:[]},{id:"juniper_graveyard_garden",name:"Juniper Graveyard Garden",tale:"The Juniper Tree",biome:"graveyard",difficulty:4,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:98,width:18,segments:165,elevationStyle:"rolling"},pickupPattern:"grave_scatter",hazardPattern:"bone_walls",decorationSet:"juniper_graves",visualTheme:{sky:790288,fog:1317146,road:3555130,border:13292229,light:11121836},hazards:["bone_walls","falling_apples"],futureRallyPoints:[]},{id:"thorn_crown_ridge",name:"Thorn Crown Ridge",tale:"King Thrushbeard",biome:"highland",difficulty:4,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:100,width:17,segments:170,elevationStyle:"climb"},pickupPattern:"ridge_line",hazardPattern:"thorn_walls",decorationSet:"thistle_ridge",visualTheme:{sky:1707812,fog:2364721,road:4601935,border:16196997,light:14723839},hazards:["thorn_walls","cliff_winds"],futureRallyPoints:[]},{id:"faithful_john_harbor_run",name:"Faithful John Harbor Run",tale:"Faithful John",biome:"harbor",difficulty:3,laps:3,variation:"large_fast_ring",layout:{type:"circular",radius:138,width:24,segments:175,elevationStyle:"flat"},pickupPattern:"dock_line",hazardPattern:"crate_stacks",decorationSet:"royal_harbor",visualTheme:{sky:1055270,fog:1582644,road:4477278,border:15199471,light:13358561},hazards:["crate_stacks","gull_swarms"],futureRallyPoints:[]},{id:"soot_and_ember_mine",name:"Soot and Ember Mine",tale:"The Devil's Sooty Brother",biome:"mine",difficulty:5,laps:3,variation:"ember_mine_ring",layout:{type:"circular",radius:86,width:16,segments:170,elevationStyle:"descent"},pickupPattern:"ember_scatter",hazardPattern:"fire_bursts",decorationSet:"ember_mine",visualTheme:{sky:1181704,fog:1903626,road:3810336,border:15228164,light:16752212},hazards:["fire_bursts","soot_clouds"],futureRallyPoints:[]},{id:"maid_maleen_ruin_road",name:"Maid Maleen Ruin Road",tale:"Maid Maleen",biome:"ruins",difficulty:4,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:92,width:18,segments:165,elevationStyle:"rolling"},pickupPattern:"rubble_scatter",hazardPattern:"collapsing_walls",decorationSet:"broken_ruins",visualTheme:{sky:1315599,fog:1907734,road:4473402,border:12368049,light:14078664},hazards:["collapsing_walls","rubble_piles"],futureRallyPoints:[]},{id:"wolfwood_panic_trail",name:"Wolfwood Panic Trail",tale:"The Wolf and the Seven Young Kids",biome:"forest",difficulty:3,laps:4,variation:"narrow_forest_ring",layout:{type:"circular",radius:94,width:15,segments:175,elevationStyle:"rolling"},pickupPattern:"panic_scatter",hazardPattern:"wolf_ambush",decorationSet:"dark_forest",visualTheme:{sky:658696,fog:1185293,road:4340010,border:16170336,light:16248290},hazards:["wolf_ambush","clock_hideouts"],futureRallyPoints:[]},{id:"cobblers_midnight_workshop",name:"Cobbler's Midnight Workshop",tale:"The Elves and the Shoemaker",biome:"workshop",difficulty:2,laps:3,variation:"workshop_tiny_ring",layout:{type:"circular",radius:72,width:16,segments:150,elevationStyle:"flat"},pickupPattern:"bench_scatter",hazardPattern:"tool_clutter",decorationSet:"cobbler_shop",visualTheme:{sky:1446688,fog:2038316,road:4867154,border:16763604,light:16638692},hazards:["tool_clutter","thread_spools"],futureRallyPoints:[]},{id:"grimm_castle_grand_prix",name:"Grimm Castle Grand Prix",tale:"General Grimm",biome:"castle",difficulty:5,laps:4,variation:"large_fast_ring",layout:{type:"circular",radius:150,width:28,segments:200,elevationStyle:"banked"},pickupPattern:"grand_arcs",hazardPattern:"mixed_finale",decorationSet:"grimm_castle",visualTheme:{sky:657170,fog:1183007,road:3814480,border:11868062,light:14723839},hazards:["portcullis_gates","fog_banks","fire_bursts"],futureRallyPoints:[]}],ml=Object.fromEntries(Ss.map(i=>[i.id,i])),Zm="black_forest_loop";function Jm(i){switch(i){case"gentle":return e=>Math.sin(e)*2.2;case"rolling":return e=>Math.sin(e*3)*4+Math.sin(e*1.5)*2;case"climb":return e=>(1-Math.cos(e))*7;case"descent":return e=>(Math.cos(e)-1)*7;case"banked":return e=>Math.sin(e*2)*1.4;case"flat":default:return()=>0}}function Qm(i,e,t){const n=[],r=t,a=(s,o)=>n.push({theta:s,laneOffset:o});for(let s=0;s<e;s++){const o=s/e*Math.PI*2;switch(i){case"dense_inner":a(o,-r*.28);break;case"outer_lane":a(o,r*.32);break;case"twin_arcs":case"royal_arcs":case"court_arcs":case"grand_arcs":a(o,-r*.22),a(o+.06,r*.22);break;case"mirror_pairs":case"paired_lanes":a(o,-r*.25),a(o,r*.25);break;case"spiral_ascending":a(o,-r*.3+s/e*r*.6);break;case"speed_lane":case"parade_line":case"meadow_line":case"dock_line":case"brook_line":case"ridge_line":case"corridor_line":case"tide_line":a(o,0);break;default:a(o,(s%2===0?-1:1)*r*.2)}}return n}function eg(i,e,t){if(i==="none_light")return[];const n=[];for(let r=0;r<e;r++){const a=(r+.5)/e*Math.PI*2,s=(r%3-1)*t*.28;n.push({theta:a,laneOffset:s})}return n}function tg(i,e){const t=e.layout,n=t.radius,r=t.width,a=t.segments,s=e.visualTheme,o=Jm(t.elevationStyle),l=(N,V=0)=>{const q=n+V;return new I(Math.cos(N)*q,o(N),Math.sin(N)*q)},c=N=>new I(-Math.sin(N),0,Math.cos(N)).normalize(),d=new Yt;d.name=`track:${e.id}`,i.background=new Ie(s.sky);const p=.0035+(e.difficulty||1)*7e-4;i.fog=new Vr(s.fog,p);const f=new zs(s.light,s.road,.85);d.add(f);const m=new Hs(s.light,.9);m.position.set(n*.6,80,n*.4),d.add(m);const g=new ic(s.sky,.35);d.add(g);const x=[],u=r/2;for(let N=0;N<=a;N++){const V=N/a*Math.PI*2,q=l(V,-u),P=l(V,u);x.push(q,P)}const h=new ut,M=[],v=[];x.forEach(N=>M.push(N.x,N.y+.02,N.z));for(let N=0;N<a;N++){const V=N*2,q=N*2+1,P=N*2+2,W=N*2+3;v.push(V,q,W,V,W,P)}h.setAttribute("position",new Ze(M,3)),h.setIndex(v),h.computeVertexNormals();const E=new mt({color:s.road,roughness:.92,metalness:.04,side:Bt});d.add(new Le(h,E));const L=new mt({color:s.border,emissive:s.border,emissiveIntensity:.25,roughness:.6});for(const N of[-1,1]){const V=new hn(n+N*u,.9,8,Math.max(48,Math.floor(a/2))),q=new Le(V,L);q.rotation.x=Math.PI/2,d.add(q)}const A=new Ie(s.fog).lerp(new Ie(s.road),.4),T=new Le(new Wr(n-u,48),new mt({color:A,roughness:1}));T.rotation.x=-Math.PI/2,T.position.y=-.5,d.add(T);const C=new Le(new Ei(n*4,n*4),new mt({color:new Ie(s.sky).lerp(A,.5),roughness:1}));C.rotation.x=-Math.PI/2,C.position.y=-1.2,d.add(C);const G=26+(e.difficulty||1)*4,_=new mt({color:s.border,roughness:.8});for(let N=0;N<G;N++){const V=N/G*Math.PI*2+.04,P=Math.random()<.5?u+6+Math.random()*18:-u-6-Math.random()*(n*.4),W=l(V,P),H=4+Math.random()*12,te=N%3===0?new Wi(1.6,H,6):N%3===1?new wn(.8,1.2,H,6):new Dt(2.5,H*.6,2.5),re=new Le(te,_);re.position.set(W.x,W.y+H/2-.5,W.z),d.add(re)}i.add(d);const S=Qm(e.pickupPattern,8+Math.floor(n/24),r),k=eg(e.hazardPattern,(e.hazards||[]).length*2,r);return{id:e.id,config:e,radius:n,width:r,laps:e.laps,toWorld:l,headingAt:c,elevationAt:o,pickupSpawns:S,hazardSpawns:k,bounds:{radius:n,width:r,halfWidth:u},group:d,visualTheme:s}}function Vs(i,e){const t=new Yt,n=(i.palette&&i.palette.primary)??13421772,r=(e&&e.palette&&e.palette.primary)??(i.palette&&i.palette.secondary)??2236962,a=new mt({color:n,roughness:.55,metalness:.15}),s=new mt({color:r,roughness:.4,metalness:.2,emissive:r,emissiveIntensity:.12}),o=new mt({color:1710618,roughness:.8}),l=i.stats&&i.stats.weight||4,c=2.2+l*.12,d=3.4+l*.08,p=1+l*.06,f=new Le(new Dt(c,p,d),a);f.position.y=.9,t.add(f);const m=new Le(new Dt(c*.7,p*.7,d*.45),s);m.position.set(0,1.5,-d*.12),t.add(m);let g;switch(i.type){case"sleigh":case"sled":case"glider":g=new Le(new Dt(c*1.1,.2,d*1.1),s),g.position.y=.35;break;case"chariot":case"carriage":case"coach":case"wagon":case"dray":case"hauler":g=new Le(new wn(.4,.4,c*1.2,6),s),g.rotation.z=Math.PI/2,g.position.set(0,1.9,d*.4);break;case"spinner":g=new Le(new hn(.9,.18,6,12),s),g.position.set(0,1.6,d*.4);break;case"hopper":g=new Le(new kr(.7,8,6),s),g.position.set(0,1.7,d*.4);break;default:g=new Le(new Wi(.6,1.2,6),s),g.position.set(0,1.7,d*.45),g.rotation.x=Math.PI/2}t.add(g);const x=new wn(.55,.55,.4,10),u=[[-c/2,.55,d/2-.6,!0],[c/2,.55,d/2-.6,!0],[-c/2,.55,-d/2+.6,!1],[c/2,.55,-d/2+.6,!1]],h=[],M=[];for(const[E,L,A,T]of u){const C=new Yt;C.position.set(E,L,A);const G=new Le(x,o);G.rotation.z=Math.PI/2,C.add(G),t.add(C),h.push(G),T&&M.push(C)}const v=new Le(new kr(Math.max(c,d)*.62,16,12),new Wn({color:9358054,transparent:!0,opacity:.22,depthWrite:!1}));return v.position.y=1.1,v.visible=!1,t.add(v),t.userData.length=d,t.userData.bodyMat=a,t.userData.accentMat=s,t.userData.wheels=h,t.userData.frontWheels=M,t.userData.shieldMesh=v,t.userData.bodyBaseEmissive=0,t}const Ws=15,ac=26,sc=1.6,oc=.9,ng=.06,lc=1.55,Da=6,cc=.5,dc=2.4,hc=1.4,bs=70,uc=5,fc=8,Es=6;function Xs(i,e){return i+Math.random()*(e-i)}function Si(i,e,t){return Math.max(e,Math.min(t,i))}let pc=0;function ig({character:i,kart:e,isPlayer:t,startTheta:n,laneOffset:r}){const a=Vs(e,i),s=i.stats,o=e.stats,l=(s.speed+o.speed)/2,c=(s.acceleration+o.acceleration)/2,d=(s.handling+o.handling)/2;return{id:`racer_${pc++}`,isPlayer:!!t,character:i,kart:e,aiStyle:i.aiStyle||"balanced",label:t?`${i.name}`:i.name,theta:n,laneOffset:r||0,speed:0,progress:n,lap:0,maxSpeed:ac+l*sc,accel:8+c*oc,handling:.6+d*ng,luck:s.luck??6,alive:!0,rank:0,finishedAt:null,heldItem:null,effects:{boostUntil:0,shieldUntil:0,slowUntil:0,spinUntil:0},mesh:a}}function rg({character:i,kart:e,isPlayer:t,start:n,stocks:r}){const a=Vs(e,i),s=i.stats,o=e.stats,l=(s.speed+o.speed)/2,c=(s.acceleration+o.acceleration)/2,d=(s.handling+o.handling)/2;return{id:`fighter_${pc++}`,isPlayer:!!t,character:i,kart:e,aiStyle:i.aiStyle||"balanced",label:i.name,pos:{x:n.x,z:n.z},heading:n.heading||0,speed:0,maxSpeed:(ac+l*sc)*.7,accel:9+c*oc,turn:1.4+d*.16,luck:s.luck??6,stocks:r??3,alive:!0,invulnUntil:0,kos:0,score:0,rank:0,heldItem:null,effects:{boostUntil:0,shieldUntil:0,slowUntil:0,spinUntil:0},mesh:a}}function ag(i,e){const t=new Yt;t.name="environment";const n=e.visualTheme,r=320,a=new Float32Array(r*3),s=e.radius;for(let c=0;c<r;c++){const d=Math.random()*Math.PI*2,p=s*(1.2+Math.random()*1.6);a[c*3]=Math.cos(d)*p,a[c*3+1]=20+Math.random()*120,a[c*3+2]=Math.sin(d)*p}const o=new ut;o.setAttribute("position",new Ze(a,3));const l=new tc({color:n.light,size:1.4,transparent:!0,opacity:.55,depthWrite:!1});return t.add(new Wm(o,l)),i.add(t),t}function mc(i=13495038){const e=new Yt,t=new mt({color:i,transparent:!0,opacity:.45,roughness:.1,metalness:.1,emissive:i,emissiveIntensity:.4}),n=new Le(new Xn(1.6,0),t);e.add(n);const r=new Vm(new Xm(new Xn(1.7,0)),new ec({color:16777215,transparent:!0,opacity:.8}));e.add(r);const a=new Le(new wn(.28,.28,26,6,1,!0),new Wn({color:i,transparent:!0,opacity:.13,depthWrite:!1,side:Bt}));a.position.y=9,e.add(a);const s=new $m(i,.8,22);return e.add(s),e.userData.spin=.9+Math.random()*.6,e.userData.bobPhase=Math.random()*Math.PI*2,e.userData.glassMat=t,e}function gc(i,e,t){i.rotation.y+=i.userData.spin*t,i.position.y=i.userData.baseY+Math.sin(e*2+i.userData.bobPhase)*.6}const Tr=[{id:"glass_slipper_shard",name:"Glass Slipper Shard",icon:"💎",category:"offense",rarity:"common",effect:"homing_projectile",implemented:!0,weight:{front:5,middle:8,back:10}},{id:"spinning_wheel_curse",name:"Spinning Wheel Curse",icon:"🧵",category:"trap",rarity:"common",effect:"track_trap",implemented:!0,weight:{front:6,middle:8,back:9}},{id:"wolfs_charge",name:"Wolf's Charge",icon:"🐺",category:"offense",rarity:"uncommon",effect:"forward_dash",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"witchs_oven_blast",name:"Witch's Oven Blast",icon:"🔥",category:"offense",rarity:"uncommon",effect:"fire_burst",implemented:!1,weight:{front:3,middle:6,back:8}},{id:"raven_message_hex",name:"Raven Message Hex",icon:"🐦",category:"disruption",rarity:"rare",effect:"control_scramble",implemented:!1,weight:{front:2,middle:5,back:8}},{id:"thorn_vines",name:"Thorn Vines",icon:"🌿",category:"trap",rarity:"common",effect:"slow_zone",implemented:!0,weight:{front:6,middle:8,back:8}},{id:"magic_mirror_shield",name:"Magic Mirror Shield",icon:"🪞",category:"defense",rarity:"common",effect:"shield",implemented:!0,weight:{front:10,middle:7,back:4}},{id:"mother_holle_snow_veil",name:"Mother Holle Snow Veil",icon:"❄️",category:"disruption",rarity:"uncommon",effect:"visibility_fog",implemented:!1,weight:{front:4,middle:6,back:7}},{id:"white_swan_feather",name:"White Swan Feather",icon:"🪶",category:"defense",rarity:"uncommon",effect:"cleanse",implemented:!1,weight:{front:7,middle:6,back:5}},{id:"faithful_john_ward",name:"Faithful John Ward",icon:"🛡️",category:"defense",rarity:"rare",effect:"invulnerability",implemented:!1,weight:{front:8,middle:5,back:3}},{id:"gingerbread_rush",name:"Gingerbread Rush",icon:"🍪",category:"boost",rarity:"common",effect:"speed_boost",implemented:!0,weight:{front:7,middle:8,back:8}},{id:"seven_league_boots",name:"Seven-League Boots",icon:"👢",category:"boost",rarity:"rare",effect:"strong_boost",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"golden_goose_luck",name:"Golden Goose Luck",icon:"🦢",category:"utility",rarity:"rare",effect:"luck_buff",implemented:!1,weight:{front:4,middle:6,back:7}},{id:"rapunzel_hair_grapple",name:"Rapunzel Hair Grapple",icon:"🦳",category:"utility",rarity:"uncommon",effect:"slingshot_recovery",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"frog_prince_leap",name:"Frog Prince Leap",icon:"🐸",category:"utility",rarity:"uncommon",effect:"hop_traps",implemented:!1,weight:{front:5,middle:6,back:7}},{id:"breadcrumb_trail",name:"Breadcrumb Trail",icon:"🍞",category:"utility",rarity:"common",effect:"steer_assist",implemented:!1,weight:{front:6,middle:6,back:6}}],Yr=Object.fromEntries(Tr.map(i=>[i.id,i]));function di(i,e,t,n){i.effects.boostUntil=e+n,i.effects.boostMult=t}function _c(i,e,t,n){if(!t)return null;const r=i.time,a=e.mesh.position,s=i.fx,o=i.audio,l=(p,f=14)=>s&&s.burst(a,p,f),c=p=>s&&s.ring(a,p),d=p=>o&&o.play(p);switch(t.effect){case"speed_boost":di(e,r,1.55,2.2),l(10217471),d("boost");break;case"strong_boost":di(e,r,1.9,2),l(16765286,18),c(16765286),d("boost");break;case"forward_dash":di(e,r,1.85,1),l(16739179,18),c(16739179),d("boost");break;case"slingshot_recovery":di(e,r,1.7,1.6),l(16740502,16),d("boost");break;case"luck_buff":e.effects.luckUntil=r+6,di(e,r,1.2,1),l(16766720,18),c(16766720),d("pickup");break;case"shield":e.effects.shieldUntil=r+Da,c(9358054),d("shield");break;case"invulnerability":e.effects.invulnUntil=r+Da,e.effects.shieldUntil=r+Da,l(16769162,16),c(16766720),d("shield");break;case"cleanse":e.effects.slowUntil=0,e.effects.spinUntil=0,e.effects.scrambleUntil=0,l(15858414,16),d("shield");break;case"hop_traps":e.effects.trapImmuneUntil=r+3,e.effects.hopUntil=r+.5,l(5420936),d("ui");break;case"steer_assist":e.effects.steerAssistUntil=r+4,l(14263654),d("ui");break;case"homing_projectile":n.spawnProjectile(e),l(13495038),d("offense");break;case"track_trap":n.spawnTrap(e,"spin"),l(13214247),d("trap");break;case"fire_burst":n.spawnTrap(e,"fire"),l(15228164,18),d("trap");break;case"slow_zone":n.spawnTrap(e,"slow"),l(5613104),d("trap");break;case"visibility_fog":n.spawnTrap(e,"fog"),l(15267071,18),d("trap");break;case"control_scramble":n.scrambleEnemies(e),l(10309341,16),d("offense");break;default:di(e,r,1.3,1),l(16777215),d("item")}return`${t.name}!`}const sg=.32,og=.16,lg=1.7;function vc(i,e=1){i._hitFlash=Math.max(i._hitFlash||0,e)}function xc(i,{dt:e,time:t,steer:n=0}){const r=i.mesh.userData,a=Math.max(0,Math.min(1,i.speed/(i.maxSpeed||1))),s=Math.min(1,e*8),o=-n*a*sg,l=-n*a*og;if(i._bank=(i._bank||0)+(o-(i._bank||0))*s,i._slip=(i._slip||0)+(l-(i._slip||0))*s,i.mesh.rotation.z=i._bank,i.mesh.rotation.y+=i._slip,r.wheels)for(const c of r.wheels)c.rotation.x+=i.speed*e*(lg/6);if(r.frontWheels)for(const c of r.frontWheels)c.rotation.y=n*.5;if(i._hitFlash>0?(i._hitFlash=Math.max(0,i._hitFlash-e*2.6),r.bodyMat&&(i._hitFlash>0?(r.bodyMat.emissive.setHex(16734794),r.bodyMat.emissiveIntensity=i._hitFlash):(r.bodyMat.emissive.setHex(0),r.bodyMat.emissiveIntensity=0))):r.bodyMat&&r.bodyMat.emissiveIntensity&&(r.bodyMat.emissive.setHex(0),r.bodyMat.emissiveIntensity=0),r.shieldMesh){const c=(i.effects.shieldUntil||0)>t||(i.effects.invulnUntil||0)>t;if(r.shieldMesh.visible=c,c){const d=(i.effects.invulnUntil||0)>t;r.shieldMesh.material.color.setHex(d?16766720:9358054),r.shieldMesh.material.opacity=.18+.1*(.5+.5*Math.sin(t*8))}}}function yc(i,e){const t=Math.max(1,e/3),n=i<=t?"front":i<=t*2?"middle":"back";let r=0;for(const s of Tr)r+=s.weight[n];let a=Math.random()*r;for(const s of Tr)if(a-=s.weight[n],a<=0)return s.id;return Tr[0].id}function Oi(i,e){let t=(e-i)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t}function cg(i,e){if(!e.heldItem)return null;const t=Yr[e.heldItem];return e.heldItem=null,_c(i,e,t,{spawnProjectile:r=>fg(i,r),spawnTrap:(r,a)=>ug(i,r,a,r.theta,r.laneOffset),scrambleEnemies:r=>dg(i,r)})}function dg(i,e){for(const t of i.racers){if(t===e||!t.alive)continue;const n=Oi(e.theta,t.theta);n>0&&n<.9&&(t.effects.scrambleUntil=i.time+2.2)}}function hg(i){return i==="slow"?5613104:i==="fog"?15267071:i==="fire"?15228164:13214247}function ug(i,e,t,n,r){const a=hg(t),s=t==="slow"||t==="fog"?new qr(1.4,0):new hn(1.3,.35,6,10),o=new Le(s,new mt({color:a,emissive:a,emissiveIntensity:.4})),l=i.track.toWorld(n,r);o.position.set(l.x,l.y+1,l.z),i.scene.add(o),i.traps.push({mesh:o,theta:n,laneOffset:r,kind:t,ownerId:e.id,life:12,armedAt:i.time+.4})}function fg(i,e){let t=null,n=1/0;for(const o of i.racers){if(o===e||!o.alive)continue;const l=Oi(e.theta,o.theta);l>.02&&l<n&&(n=l,t=o)}const r=new Xn(.8,0),a=new Le(r,new mt({color:13495038,emissive:13495038,emissiveIntensity:.7})),s=i.track.toWorld(e.theta,e.laneOffset);a.position.set(s.x,s.y+1.2,s.z),i.scene.add(a),i.projectiles.push({mesh:a,theta:e.theta,laneOffset:e.laneOffset,ownerId:e.id,targetId:t?t.id:null})}function Mc(i,e){const t=i.time;return e.effects.invulnUntil>t?!1:e.effects.shieldUntil>t?(e.effects.shieldUntil=0,i.fx&&i.fx.ring(e.mesh.position,9358054),i.audio&&i.audio.play("shield"),e.isPlayer&&(i.lastItemMsg={text:"Blocked!",until:t+1.4,kind:"block"},i.fx&&i.fx.flash("#8ecae6",.35)),!1):(e.effects.spinUntil=t+hc,e.speed*=.4,vc(e,1),i.audio&&i.audio.play("hit"),i.fx&&i.fx.burst(e.mesh.position,16765286,12),e.isPlayer&&(i.shake=Math.max(i.shake||0,1.1)),!0)}function pg(i,e){const t=i.track.radius;i.incomingOnPlayer=!1;for(let n=i.projectiles.length-1;n>=0;n--){const r=i.projectiles[n];r.theta+=bs/t*e;const a=r.targetId?i.racers.find(l=>l.id===r.targetId&&l.alive):null;a&&a.isPlayer&&(i.incomingOnPlayer=!0,r.warned||(i.audio&&i.audio.play("warn"),r.warned=!0)),a&&(r.laneOffset+=(a.laneOffset-r.laneOffset)*Math.min(1,e*3));const s=i.track.toWorld(r.theta,r.laneOffset);r.mesh.position.set(s.x,s.y+1.2,s.z);let o=!1;a&&Oi(r.theta,a.theta)<.05&&(Mc(i,a)&&a.isPlayer&&i.fx&&i.fx.flash("#ff8aa0",.5),o=!0),r.life=(r.life??4)-e,(o||r.life<=0||!r.targetId)&&(r.targetId,(o||r.life<=0)&&(i.scene.remove(r.mesh),i.projectiles.splice(n,1)))}}function mg(i,e){for(let t=i.traps.length-1;t>=0;t--){const n=i.traps[t];if(n.life-=e,n.mesh.rotation.y+=e*2,i.time>=n.armedAt)for(const r of i.racers){if(!r.alive)continue;const a=Oi(n.theta,r.theta)<.05||Oi(r.theta,n.theta)<.05,s=Math.abs(r.laneOffset-n.laneOffset)<4;if(a&&s){if(r.effects.trapImmuneUntil>i.time)continue;n.kind==="slow"||n.kind==="fog"?r.effects.slowUntil=Math.max(r.effects.slowUntil||0,i.time+dc):Mc(i,r)}}n.life<=0&&(i.scene.remove(n.mesh),i.traps.splice(t,1))}}function gg(i,e){for(const t of i.track.pickupSpawns){const n=e(i.track.visualTheme.light),r=i.track.toWorld(t.theta,t.laneOffset);n.position.set(r.x,r.y+2.2,r.z),n.userData.baseY=r.y+2.2,i.scene.add(n),i.reliquaries.push({group:n,theta:t.theta,laneOffset:t.laneOffset,baseY:r.y+2.2,active:!0,respawnAt:0})}}function _g(i,e,t){const n=i.time;for(const r of i.reliquaries)if(r.active){t(r.group,n,e);for(const a of i.racers){if(!a.alive||a.heldItem)continue;const s=Math.abs((a.theta-r.theta+Math.PI)%(Math.PI*2)-Math.PI)<.06,o=Math.abs(a.laneOffset-r.laneOffset)<Es;if(s&&o){a.heldItem=yc(a.rank,i.aliveCount),r.active=!1,r.group.visible=!1,r.respawnAt=n+Xs(uc,fc),i.fx&&i.fx.burst(r.group.position,i.track.visualTheme.light,10),i.audio&&a.isPlayer&&i.audio.play("pickup");break}}}else n>=r.respawnAt&&(r.active=!0,r.group.visible=!0)}function vg(){return{timer:Ws,lastEliminatedId:null}}function xg(i,e){const t=i.elimination,n=i.racers.filter(a=>a.alive);if(n.length<=1||(t.timer-=e,t.timer>0))return null;t.timer=Ws;let r=n[0];for(const a of n)a.progress<r.progress&&(r=a);return r.alive=!1,r.eliminatedAt=i.time,r.mesh&&(r.mesh.visible=!1),t.lastEliminatedId=r.id,i.aliveCount=i.racers.filter(a=>a.alive).length,r}const gl={aggressive:{throttle:1,useBias:1.4,wander:.6},reckless:{throttle:1,useBias:1.1,wander:1.2},balanced:{throttle:.93,useBias:1,wander:.7},cunning:{throttle:.95,useBias:1.2,wander:.5},defensive:{throttle:.88,useBias:.9,wander:.4},steady:{throttle:.9,useBias:.8,wander:.3}};function yg(i,e){let t=null,n=1/0;for(const r of i.reliquaries){if(!r.active)continue;let a=(r.theta-e.theta)%(Math.PI*2);a<0&&(a+=Math.PI*2),a<n&&a<.8&&(n=a,t=r)}return t?t.laneOffset:null}function Mg(i,e,t){const n=gl[e.aiStyle]||gl.balanced;e._wander===void 0&&(e._wander=Math.random()*Math.PI*2),e._wander+=t*(.6+Math.random()*.4);let r;const a=e.heldItem?null:yg(i,e);a!==null?r=a:r=Math.sin(e._wander)*(i.track.width*.3)*n.wander;const s=Si((r-e.laneOffset)*.25,-1,1);let o=!1;if(e.heldItem){const c=t*.6*n.useBias;Math.random()<c&&(o=!0)}return{throttle:n.throttle*(e.effects.spinUntil>i.time?.3:1),steer:s,useItem:o}}function ws(i,e){const t=i.track.bounds.halfWidth*.88;e.laneOffset=Si(e.laneOffset,-t,t)}function Sg(i){const e=i.racers.filter(t=>t.alive);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){const r=e[t],a=e[n];let s=Math.abs(r.theta-a.theta)%(Math.PI*2);s>Math.PI&&(s=Math.PI*2-s),s<.025&&Math.abs(r.laneOffset-a.laneOffset)<2.6&&(r.laneOffset<=a.laneOffset?(r.laneOffset-=1.3,a.laneOffset+=1.3):(r.laneOffset+=1.3,a.laneOffset-=1.3),ws(i,r),ws(i,a))}}const _l=Math.PI*2;function bg(i,e,t,n){const r=i.time;let a=e.maxSpeed*Si(t.throttle,0,1.2);e.effects.boostUntil>r&&(a*=e.effects.boostMult||lc),e.effects.slowUntil>r&&(a*=cc);const s=e.effects.spinUntil>r;s&&(a*=.35),e.speed+=(a-e.speed)*Math.min(1,n*(e.accel*.22)),e.speed=Math.max(0,e.speed);let o=Si(t.steer,-1,1);e.effects.scrambleUntil>r&&(o=-o),e._steer=o;const l=e.effects.steerAssistUntil>r,c=(8+e.handling*10)*(s?.2:1)*(l?1.4:1);if(e.laneOffset+=o*c*n,l&&(e.laneOffset+=(0-e.laneOffset)*Math.min(1,n*1.1)),ws(i,e),t.useItem&&e.heldItem){const d=cg(i,e);d&&e.isPlayer&&(i.lastItemMsg={text:d,until:r+2})}}function Eg(i,e,t){const n=Math.max(8,i.track.radius+e.laneOffset),r=e.speed/n*t;e.theta=(e.theta+r)%_l,e.progress+=r,e.lap=Math.floor(e.progress/_l);const a=i.track.toWorld(e.theta,e.laneOffset),s=e.effects.hopUntil>i.time?Math.sin((e.effects.hopUntil-i.time)/.5*Math.PI)*2.2:0;e.mesh.position.set(a.x,a.y+Math.max(0,s),a.z);const o=i.track.headingAt(e.theta);e.mesh.rotation.y=Math.atan2(o.x,o.z),e.effects.spinUntil>i.time&&(e.mesh.rotation.y+=Math.sin(i.time*20)*.3),xc(e,{dt:t,time:i.time,steer:e._steer||0})}function wg(i){const e=[...i.racers].sort((t,n)=>t.alive!==n.alive?t.alive?-1:1:n.progress-t.progress);e.forEach((t,n)=>{t.rank=n+1}),i.ranked=e}function Tg(i,e,t){if(i.status!=="racing")return;i.time+=e;for(const a of i.racers){if(!a.alive)continue;const s=a.isPlayer?t:Mg(i,a,e);bg(i,a,s,e),Eg(i,a,e)}Sg(i),wg(i),_g(i,e,gc),pg(i,e),mg(i,e);const n=xg(i,e);n&&(i.elimNotice={text:`${n.label} eliminated`,until:i.time+2.5,kind:"elim"},i.audio&&i.audio.play(n.isPlayer?"lose":"eliminate"),i.fx&&(i.fx.burst(n.mesh.position,14715498,18),i.fx.ring(n.mesh.position,14715498)),i.shake=Math.max(i.shake||0,n.isPlayer?1.6:.7),n.isPlayer&&(i.status="lost",i.endRank=n.rank));const r=i.racers.filter(a=>a.alive);r.length===1&&i.status==="racing"&&(i.status=r[0].isPlayer?"won":"lost",i.endRank=1)}function Ag(i){const e=i.state;return{throttle:e.accel?1:e.brake?0:.5,steer:(e.right?1:0)-(e.left?1:0),useItem:e.useItem}}function Rg(i){const e=i.player,t=e.heldItem?Yr[e.heldItem]:null,n=i.aliveCount,r=(i.ranked||i.racers).slice(0,6).map(c=>({name:c.label,rank:c.rank,alive:c.alive,isPlayer:c.isPlayer,lap:c.lap,danger:c.alive&&c.rank===n&&n>1}));let a="",s="";i.elimNotice&&i.time<i.elimNotice.until&&(a=i.elimNotice.text,s=i.elimNotice.kind||""),i.lastItemMsg&&i.time<i.lastItemMsg.until&&(a=i.lastItemMsg.text,s=i.lastItemMsg.kind||"");const o=Math.max(0,Math.ceil(i.elimination.timer)),l=e.alive&&n>1&&e.rank===n&&o<=6;return{title:"GrimmKart.io",mode:"race",speed:Math.round(e.speed),pace:e.alive?`${e.rank} / ${i.racers.length}`:"OUT",timerText:e.alive?`next out: ${o}s`:"OUT",timerUrgent:e.alive&&o<=5,aliveLabel:"alive",subline:`pos ${e.alive?`${e.rank}/${i.racers.length}`:"OUT"} · lap ${e.lap}`,alive:i.aliveCount,total:i.racers.length,elimTimer:o,elimInterval:Ws,lap:e.lap,item:t?{name:t.name,icon:t.icon}:null,fps:i.fps,showFps:i.showFps,speedRatio:Math.min(1,e.speed/(e.maxSpeed||1)),boosting:(e.effects.boostUntil||0)>i.time,incoming:!!i.incomingOnPlayer&&e.alive,danger:l,dangerText:"You're last — speed up!",leaderboard:r,message:a,messageKind:s,status:i.status}}function Cg(i){const e=i.player,t=e.heldItem?Yr[e.heldItem]:null,n=(i.ranked||i.fighters).slice(0,6).map(o=>({name:o.label,rank:o.rank,alive:o.alive,isPlayer:o.isPlayer,lap:o.stocks,danger:o.alive&&o.isPlayer&&o.stocks===1}));let r="",a="";i.koNotice&&i.time<i.koNotice.until&&(r=i.koNotice.text,a=i.koNotice.kind||""),i.lastItemMsg&&i.time<i.lastItemMsg.until&&(r=i.lastItemMsg.text,a=i.lastItemMsg.kind||"");const s=Math.max(0,e.stocks);return{title:"GrimmKart.io",mode:"arena",speed:Math.round(e.speed),pace:e.alive?`${e.rank} / ${i.fighters.length}`:"OUT",timerText:`★ ${e.kos} KO${e.kos===1?"":"s"}`,timerUrgent:!1,aliveLabel:"left",subline:e.alive?`pos ${e.rank}/${i.fighters.length} · ${"♥".repeat(Math.min(s,5))||"—"}`:"OUT",alive:i.aliveCount,total:i.fighters.length,item:t?{name:t.name,icon:t.icon}:null,fps:i.fps,showFps:i.showFps,speedRatio:Math.min(1,e.speed/(e.maxSpeed||1)),boosting:(e.effects.boostUntil||0)>i.time,incoming:!!i.incomingOnPlayer&&e.alive,danger:e.alive&&s===1,dangerText:"Last stock!",leaderboard:n,message:r,messageKind:a,status:i.status}}function Sc(i){const e=document.createElement("div");e.className="hud",e.innerHTML=`
    <div class="hud-top-left"><span class="hud-title">GrimmKart<span class="hud-io">.io</span></span></div>
    <div class="hud-top-right">
      <div class="hud-alive"><span data-alive>10</span><span class="hud-sub" data-alive-label>alive</span></div>
      <div class="hud-elim" data-timer>next out: 15s</div>
    </div>
    <div class="hud-bottom-left">
      <div class="hud-speed"><span data-speed>0</span><span class="hud-sub">pace</span></div>
      <div class="hud-pace" data-subline>pos — · lap 0</div>
    </div>
    <div class="hud-item empty" data-item-wrap>
      <span class="hud-item-icon" data-item-icon>✦</span>
      <span class="hud-item-text">
        <span class="hud-item-name" data-item-name>No item</span>
        <span class="hud-item-hint" data-item-hint>grab a reliquary</span>
      </span>
    </div>
    <div class="hud-board"><ol data-board></ol></div>
    <div class="hud-message" data-message></div>
    <div class="hud-warn hud-incoming" data-incoming hidden>⚠ Incoming!</div>
    <div class="hud-warn hud-danger" data-danger hidden>⚠ Speed up!</div>
    <div class="hud-debug" data-debug hidden></div>
    <div class="speed-lines" data-speedlines></div>
  `,i.appendChild(e);const t=a=>e.querySelector(a),n=t("[data-board]");function r(a){t("[data-alive]").textContent=`${a.alive}`,a.aliveLabel&&(t("[data-alive-label]").textContent=a.aliveLabel);const s=t("[data-timer]");s.textContent=a.timerText,s.classList.toggle("urgent",!!a.timerUrgent),t("[data-speed]").textContent=`${a.speed}`,t("[data-subline]").textContent=a.subline;const o=t("[data-item-wrap]");a.item?(o.classList.remove("empty"),o.classList.add("ready"),t("[data-item-icon]").textContent=a.item.icon,t("[data-item-name]").textContent=a.item.name,t("[data-item-hint]").textContent="READY — press Space"):(o.classList.remove("ready"),o.classList.add("empty"),t("[data-item-icon]").textContent="✦",t("[data-item-name]").textContent="No item",t("[data-item-hint]").textContent="grab a reliquary"),n.innerHTML=a.leaderboard.map(m=>`<li class="${m.isPlayer?"me":""} ${m.alive?"":"out"} ${m.danger?"danger":""}"><span class="bp">${m.rank}</span> ${m.name}${m.alive?"":" ✕"}</li>`).join("");const l=t("[data-message]");l.textContent=a.message||"",l.className=`hud-message ${a.message?"show":""} ${a.messageKind?"kind-"+a.messageKind:""}`,t("[data-incoming]").hidden=!a.incoming;const c=t("[data-danger]");c.hidden=!a.danger,a.danger&&a.dangerText&&(c.textContent=`⚠ ${a.dangerText}`);const d=t("[data-speedlines]"),p=a.speedRatio||0;d.style.opacity=String(a.boosting?.85:p>.55?(p-.55)/.45*.5:0),d.classList.toggle("boost",!!a.boosting);const f=t("[data-debug]");a.showFps?(f.hidden=!1,f.textContent=`${a.fps||0} FPS · ${a.mode} · ${a.alive}/${a.total} alive`):f.hidden=!0}return{el:e,update:r,show(){e.style.display=""},hide(){e.style.display="none"},destroy(){e.remove()}}}class bc{constructor(){this.state={accel:!1,brake:!1,left:!1,right:!1,useItem:!1},this._onKey=this._onKey.bind(this),this._bound=!1,this._touch=null}attach(){this._bound||(window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._bound=!0)}detach(){window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this._touch&&this._touch.el&&this._touch.el.remove(),this._touch=null,this._bound=!1,this.state={accel:!1,brake:!1,left:!1,right:!1,useItem:!1}}_onKey(e){const t=e.type==="keydown";switch(e.code){case"ArrowUp":case"KeyW":this.state.accel=t;break;case"ArrowDown":case"KeyS":this.state.brake=t;break;case"ArrowLeft":case"KeyA":this.state.left=t;break;case"ArrowRight":case"KeyD":this.state.right=t;break;case"Space":case"KeyE":this.state.useItem=t,t&&e.preventDefault();break;default:return}}attachTouch(e){if(!("ontouchstart"in window))return;const t=document.createElement("div");t.className="touch-controls",t.innerHTML=`
      <button data-k="left" class="tc tc-left">◀</button>
      <button data-k="right" class="tc tc-right">▶</button>
      <button data-k="accel" class="tc tc-accel">▲</button>
      <button data-k="brake" class="tc tc-brake">▼</button>
      <button data-k="useItem" class="tc tc-item">✦</button>`;const n=(r,a)=>{r in this.state&&(this.state[r]=a)};t.querySelectorAll("button").forEach(r=>{const a=r.dataset.k,s=l=>{l.preventDefault(),n(a,!0)},o=l=>{l.preventDefault(),n(a,!1)};r.addEventListener("touchstart",s,{passive:!1}),r.addEventListener("touchend",o),r.addEventListener("touchcancel",o),r.addEventListener("mousedown",s),r.addEventListener("mouseup",o),r.addEventListener("mouseleave",o)}),e.appendChild(t),this._touch={el:t}}}class Ec{constructor(e){this.camera=e,this._pos=new I,this._look=new I,this._tmp=new I,this._initialized=!1,this._shake=0}addShake(e){this._shake=Math.min(2.5,Math.max(this._shake,e))}update(e,t){if(!e)return;const n=this._tmp.copy(e.heading).multiplyScalar(-14),r=this._pos.copy(e.position).add(n);r.y=e.position.y+9;const a=this._initialized?Math.min(1,t*4.5):1;if(this.camera.position.lerp(r,a),this._shake>0){const s=this._shake;this.camera.position.x+=(Math.random()-.5)*s,this.camera.position.y+=(Math.random()-.5)*s,this.camera.position.z+=(Math.random()-.5)*s,this._shake=Math.max(0,this._shake-t*6)}this._look.copy(e.position).add(this._tmp.copy(e.heading).multiplyScalar(10)),this._look.y=e.position.y+2,this.camera.lookAt(this._look),this._initialized=!0}reset(){this._initialized=!1}}class wc{constructor(e,t){this.scene=e,this.particles=[],this.rings=[],this._geo=new Xn(.45,0),this.flashEl=document.createElement("div"),this.flashEl.className="fx-flash",t&&t.appendChild(this.flashEl),this._flash=0,this._flashColor="#ffffff"}burst(e,t=16777215,n=14,r=9){for(let a=0;a<n;a++){const s=new Le(this._geo,new Wn({color:t,transparent:!0,opacity:1}));s.position.set(e.x,(e.y??1)+1,e.z);const o=Math.random()*Math.PI*2,l=2+Math.random()*6;s.userData={vx:Math.cos(o)*r*(.4+Math.random()),vy:l,vz:Math.sin(o)*r*(.4+Math.random()),life:0,maxLife:.5+Math.random()*.4},this.scene.add(s),this.particles.push(s)}}ring(e,t=16777215){const n=new hn(1,.18,6,24),r=new Le(n,new Wn({color:t,transparent:!0,opacity:.9}));r.position.set(e.x,(e.y??1)+.6,e.z),r.rotation.x=Math.PI/2,r.userData={life:0,maxLife:.5},this.scene.add(r),this.rings.push(r)}flash(e="#ffffff",t=.5){this._flash=Math.max(this._flash,t),this._flashColor=e}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t],r=n.userData;r.life+=e,r.vy-=16*e,n.position.x+=r.vx*e,n.position.y+=r.vy*e,n.position.z+=r.vz*e;const a=1-r.life/r.maxLife;n.material.opacity=Math.max(0,a),n.scale.setScalar(Math.max(.05,a)),(r.life>=r.maxLife||n.position.y<0)&&(this.scene.remove(n),n.material.dispose(),this.particles.splice(t,1))}for(let t=this.rings.length-1;t>=0;t--){const n=this.rings[t],r=n.userData;r.life+=e;const a=r.life/r.maxLife;n.scale.setScalar(1+a*6),n.material.opacity=Math.max(0,.9*(1-a)),r.life>=r.maxLife&&(this.scene.remove(n),n.material.dispose(),n.geometry.dispose(),this.rings.splice(t,1))}this._flash>0&&(this._flash=Math.max(0,this._flash-e*2.2),this.flashEl.style.background=this._flashColor,this.flashEl.style.opacity=String(this._flash))}dispose(){this.particles.forEach(e=>{this.scene.remove(e),e.material.dispose()}),this.rings.forEach(e=>{this.scene.remove(e),e.material.dispose(),e.geometry.dispose()}),this.particles=[],this.rings=[],this._geo.dispose(),this.flashEl&&this.flashEl.parentNode&&this.flashEl.remove()}}class Pg{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.volume=.5,this._ready=!1}resume(){if(this._ready){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(this.ctx.destination),this._ready=!0}catch{}}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.master&&!this.muted&&(this.master.gain.value=this.volume)}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:this.volume)}toggleMute(){return this.setMuted(!this.muted),this.muted}_tone(e,t,n="sine",r=.5,a=null,s=0){if(!this._ready||this.muted)return;const o=this.ctx.currentTime+s,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(e,o),a&&l.frequency.exponentialRampToValueAtTime(a,o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(r,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+t+.02)}_noise(e,t=.4,n=0){if(!this._ready||this.muted)return;const r=this.ctx.currentTime+n,a=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(1,a,this.ctx.sampleRate),o=s.getChannelData(0);for(let d=0;d<a;d++)o[d]=(Math.random()*2-1)*(1-d/a);const l=this.ctx.createBufferSource();l.buffer=s;const c=this.ctx.createGain();c.gain.value=t,l.connect(c),c.connect(this.master),l.start(r)}play(e){if(!(!this._ready||this.muted))switch(e){case"ui":this._tone(520,.06,"square",.2);break;case"start":this._tone(440,.12,"square",.3),this._tone(440,.12,"square",.3,null,.16),this._tone(660,.22,"square",.35,null,.32);break;case"pickup":this._tone(680,.1,"sine",.3,1100);break;case"boost":this._tone(300,.25,"sawtooth",.3,900);break;case"shield":this._tone(330,.18,"sine",.3),this._tone(495,.22,"sine",.25,null,.04);break;case"offense":case"item":this._tone(820,.1,"square",.25,280);break;case"trap":this._tone(180,.16,"square",.3,90);break;case"hit":this._noise(.18,.4),this._tone(160,.16,"square",.25,70);break;case"ko":this._tone(440,.3,"sawtooth",.35,110),this._noise(.2,.3);break;case"eliminate":this._tone(220,.35,"triangle",.3,80);break;case"warn":this._tone(900,.08,"square",.22,680),this._tone(900,.08,"square",.22,680,.13);break;case"win":[523,659,784,1047].forEach((t,n)=>this._tone(t,.25,"square",.3,null,n*.12));break;case"lose":[392,330,262].forEach((t,n)=>this._tone(t,.3,"sawtooth",.3,null,n*.16));break;default:this._tone(600,.06,"sine",.2)}}}const je=new Pg,qs="grimmkart_stats_v2",$s=2;function Ar(){return{schemaVersion:$s,matches:[],totals:{played:0,wins:0,races:0,arenas:0,kos:0,bestPlacement:null}}}function Tc(){try{const i=localStorage.getItem(qs);if(!i)return Ar();const e=JSON.parse(i);return!e||e.schemaVersion!==$s?Ar():e}catch{return Ar()}}let Ig=0;function Lg(i){const e={schemaVersion:$s,id:`m_${Date.now()}_${Ig++}`,at:new Date().toISOString(),...i};let t;try{t=Tc(),t.matches.push(e),t.matches.length>200&&(t.matches=t.matches.slice(-200));const n=t.totals;n.played+=1,e.result?.won&&(n.wins+=1),e.mode==="race"?n.races+=1:e.mode==="arena"&&(n.arenas+=1),n.kos+=e.kos||0;const r=e.result?.placement;r&&(n.bestPlacement===null||r<n.bestPlacement)&&(n.bestPlacement=r),localStorage.setItem(qs,JSON.stringify(t))}catch{return e}return e}function Dg(){try{localStorage.removeItem(qs)}catch{}return Ar()}const Ac="grimmkart_settings_v1",vl={sound:!0,volume:.5,quality:"high",showFps:!1};let hi=null;function jt(){if(hi)return hi;try{const i=localStorage.getItem(Ac);hi={...vl,...i?JSON.parse(i):{}}}catch{hi={...vl}}return hi}function Ni(i){const e={...jt(),...i};hi=e;try{localStorage.setItem(Ac,JSON.stringify(e))}catch{}return e}function Ug(i,e){const t={mode:i.mode||"race",characterId:e.playerCharacterId,kartId:e.playerKartId,result:{won:!!i.won,placement:i.rank,total:i.total}};return t.mode==="arena"?(t.arenaId=i.arenaId||e.arenaId,t.arenaType="stock",t.kos=i.kos||0,t.stocksLeft=i.stocksLeft??0):(t.trackId=e.trackId,t.raceType=e.raceType||"elimination"),t}function Ng(i,{canvas:e,uiRoot:t,onRaceEnd:n}){const r=jt().quality||"high",a=r==="low"?1:r==="medium"?1.5:2,s=new Os({canvas:e,antialias:r!=="low"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,a)),s.setSize(window.innerWidth,window.innerHeight);const o=new Bs,l=new _t(62,window.innerWidth/window.innerHeight,.1,2e3),c=ml[i.trackId]||ml.black_forest_loop,d=tg(o,c);ag(o,d);const p=Math.max(2,Math.min(16,i.racerCount||10)),f=Gs[i.playerCharacterId]||qn[0],m=ki[i.playerKartId]||cn[0],g=qn.filter(P=>P.id!==f.id).sort(()=>Math.random()-.5),x=[],u=P=>(P%5-2)*d.width*.16;for(let P=0;P<p;P++){let W,H;P===0?(W=f,H=m):(W=g[(P-1)%g.length],H=ki[W.signatureKartId]||cn[P*7%cn.length]);const te=ig({character:W,kart:H,isPlayer:P===0,startTheta:P*.035,laneOffset:u(P)});te.progress=P*.035,x.push(te),o.add(te.mesh)}const h=x[0],M={scene:o,track:d,racers:x,player:h,time:0,status:"racing",aliveCount:p,elimination:vg(),reliquaries:[],projectiles:[],traps:[],ranked:x.slice(),elimNotice:null,lastItemMsg:null,endRank:null,fps:0,showFps:jt().showFps,shake:0,incomingOnPlayer:!1};gg(M,mc),M.elimNotice={text:"Don't be last — a racer is culled every 15s!",until:3.6},M.audio=je,M.fx=new wc(o,t),je.resume(),je.play("start");const v=Sc(t),E=new bc;E.attach(),E.attachTouch(t);const L=new Ec(l),A=d.toWorld(h.theta,h.laneOffset);l.position.set(A.x,A.y+9,A.z-14);let T=!1,C=!1,G=!1,_=0,S=0;const k=new rc;let N=0;function V(){s.setSize(window.innerWidth,window.innerHeight),l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix()}window.addEventListener("resize",V);function q(){N=requestAnimationFrame(q);const P=Math.min(.05,k.getDelta());if(G){s.render(o,l);return}_++,S+=P,S>=.5&&(M.fps=Math.round(_/S),_=0,S=0),M.showFps=jt().showFps;const W=Ag(E);W.useItem=E.state.useItem&&!T,T=E.state.useItem,Tg(M,P,W),M.fx.update(P),M.shake&&(L.addShake(M.shake),M.shake=0);const H={position:h.mesh.position,heading:d.headingAt(h.theta)};L.update(H,P);const re=62+Math.min(1,h.speed/(h.maxSpeed||1))*5+(h.effects.boostUntil>M.time?4:0);l.fov+=(re-l.fov)*Math.min(1,P*5),l.updateProjectionMatrix(),v.update(Rg(M)),s.render(o,l),M.status!=="racing"&&!C&&(C=!0,M.status==="won"&&je.play("win"),setTimeout(()=>{typeof n=="function"&&n({won:M.status==="won",rank:M.endRank||h.rank,total:x.length,characterName:f.name})},900))}return q(),{mode:"race",isPaused(){return G},pause(){C||(G=!0,je.play("ui"))},resume(){G=!1,k.getDelta()},dispose(){cancelAnimationFrame(N),window.removeEventListener("resize",V),E.detach(),v.destroy(),M.fx&&M.fx.dispose(),o.traverse(P=>{P.geometry&&P.geometry.dispose?.(),P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.dispose?.()):P.material.dispose?.())});try{s.forceContextLoss()}catch{}s.dispose()}}}const Vt=i=>({enabled:!1,shrinkTo:0,note:i||"Battle-royale shrinking cursed zone — next batch."}),Ts=[{id:"gingerbread_colosseum",name:"Gingerbread Colosseum",tale:"Hansel and Gretel",biome:"confection",bounds:{shape:"circle",radius:110},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"ring_and_center",decorationSet:"sweets",visualTheme:{sky:2757408,fog:3808299,ground:8014392,wall:14711391,light:16766629},hazards:["oven_vents","gumdrop_bumpers"],futureCursedZone:Vt()},{id:"mirror_hall_arena",name:"Mirror Hall",tale:"Snow White",biome:"mirror",bounds:{shape:"rect",width:180,depth:140},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"grid",decorationSet:"mirror_glass",visualTheme:{sky:987680,fog:1778224,ground:3752271,wall:11868062,light:14744572},hazards:["glare_panels","shard_fields"],futureCursedZone:Vt()},{id:"thorn_garden_arena",name:"Thorn Garden",tale:"Little Briar Rose",biome:"thornwood",bounds:{shape:"circle",radius:100},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"briar_thorns",visualTheme:{sky:1313567,fog:1905200,ground:3551306,wall:16740502,light:13154047},hazards:["thorn_walls","sleep_pollen"],futureCursedZone:Vt()},{id:"ratcatcher_square",name:"Ratcatcher's Square",tale:"The Pied Piper",biome:"town",bounds:{shape:"rect",width:160,depth:160},stocks:4,matchType:"stock",pickupCount:11,scatterPattern:"perimeter",decorationSet:"old_town",visualTheme:{sky:1708832,fog:2300460,ground:4604494,wall:16556817,light:15325350},hazards:["rat_swarms","market_stalls"],futureCursedZone:Vt()},{id:"iron_forest_pit",name:"Iron Forest Pit",tale:"Iron Hans",biome:"iron_forest",bounds:{shape:"circle",radius:120},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"ring_and_center",decorationSet:"iron_woods",visualTheme:{sky:1315084,fog:1906706,ground:4340272,wall:10914404,light:14524766},hazards:["iron_roots","cage_traps"],futureCursedZone:Vt()},{id:"frozen_skyfall_arena",name:"Frozen Skyfall",tale:"Mother Holle",biome:"sky",bounds:{shape:"circle",radius:130},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"scatter",decorationSet:"sky_clouds",visualTheme:{sky:2241349,fog:3360858,ground:6978186,wall:9494767,light:16777215},hazards:["snow_drifts","pitch_patches"],futureCursedZone:Vt()},{id:"ember_forge_arena",name:"Ember Forge",tale:"The Devil's Sooty Brother",biome:"mine",bounds:{shape:"rect",width:150,depth:120},stocks:2,matchType:"stock",pickupCount:9,scatterPattern:"grid",decorationSet:"ember_mine",visualTheme:{sky:1181704,fog:1903626,ground:3810336,wall:15228164,light:16752212},hazards:["fire_vents","soot_clouds"],futureCursedZone:Vt()},{id:"swan_marsh_basin",name:"Swan Marsh Basin",tale:"The Six Swans",biome:"wetland",bounds:{shape:"circle",radius:115},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"swan_marsh",visualTheme:{sky:1186338,fog:1713712,ground:4345948,wall:9358054,light:15330543},hazards:["water_slicks","reed_walls"],futureCursedZone:Vt()},{id:"juniper_graveyard_arena",name:"Juniper Graveyard",tale:"The Juniper Tree",biome:"graveyard",bounds:{shape:"circle",radius:105},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"juniper_graves",visualTheme:{sky:790288,fog:1317146,ground:3423544,wall:13292229,light:11121836},hazards:["bone_walls","falling_apples"],futureCursedZone:Vt()},{id:"grimm_castle_courtyard",name:"Grimm Castle Courtyard",tale:"General Grimm",biome:"castle",bounds:{shape:"rect",width:190,depth:190},stocks:4,matchType:"stock",pickupCount:12,scatterPattern:"ring_and_center",decorationSet:"grimm_castle",visualTheme:{sky:657170,fog:1183007,ground:3683408,wall:11868062,light:14723839},hazards:["portcullis_gates","fire_vents","fog_banks"],futureCursedZone:Vt("Finale arena — prime candidate for the first shrinking cursed-zone battle royale.")}],xl=Object.fromEntries(Ts.map(i=>[i.id,i])),Fg="gingerbread_colosseum",$t=7;function kg(i){if(i.shape==="rect"){const t=i.width/2,n=i.depth/2;return{shape:"rect",hw:t,hd:n,clamp(r,a){const s=Math.max(-t+$t,Math.min(t-$t,r)),o=Math.max(-n+$t,Math.min(n-$t,a));return{x:s,z:o,hit:s!==r||o!==a}},extent:Math.max(t,n)}}const e=i.radius;return{shape:"circle",radius:e,clamp(t,n){const r=Math.hypot(t,n),a=e-$t;if(r>a){const s=a/(r||1);return{x:t*s,z:n*s,hit:!0}}return{x:t,z:n,hit:!1}},extent:e}}function Og(i,e,t){const n=[],r=e.extent-$t-6;for(let a=0;a<t;a++){let s,o;const l=a/t*Math.PI*2;switch(i){case"ring_and_center":a%4===0?(s=a%8===0?r*.18:-r*.18,o=a%3===0?r*.18:-r*.18):(s=Math.cos(l)*r*.6,o=Math.sin(l)*r*.6);break;case"grid":{const d=Math.ceil(Math.sqrt(t)),p=a%d/(d-1||1)-.5,f=Math.floor(a/d)/(d-1||1)-.5;s=p*r*1.5,o=f*r*1.5;break}case"perimeter":s=Math.cos(l)*r*.82,o=Math.sin(l)*r*.82;break;default:s=Math.cos(l*1.7)*r*(.3+.55*(a*37%100/100)),o=Math.sin(l*1.3)*r*(.3+.55*(a*53%100/100))}const c=e.clamp(s,o);n.push({x:c.x,z:c.z})}return n}function Bg(i,e){const t=e.visualTheme,n=kg(e.bounds);i.background=new Ie(t.sky),i.fog=new Vr(t.fog,.0035);const r=new Yt;r.name=`arena:${e.id}`,r.add(new zs(t.light,t.ground,.9));const a=new Hs(t.light,.9);a.position.set(40,90,30),r.add(a),r.add(new ic(t.sky,.4));const s=new mt({color:t.ground,roughness:.95});let o;n.shape==="circle"?(o=new Le(new Wr(n.radius,64),s),o.rotation.x=-Math.PI/2):(o=new Le(new Ei(n.hw*2,n.hd*2),s),o.rotation.x=-Math.PI/2),r.add(o);const l=new mt({color:t.wall,emissive:t.wall,emissiveIntensity:.28,roughness:.6});if(n.shape==="circle"){const g=new Le(new hn(n.radius,1.6,8,96),l);g.rotation.x=Math.PI/2,g.position.y=2,r.add(g)}else{const g=(x,u,h,M)=>{const v=new Le(new Dt(x,5,u),l);v.position.set(h,2.5,M),r.add(v)};g(n.hw*2+4,3,0,-n.hd),g(n.hw*2+4,3,0,n.hd),g(3,n.hd*2+4,-n.hw,0),g(3,n.hd*2+4,n.hw,0)}const c=new Wn({color:t.light,transparent:!0,opacity:.5});if(n.shape==="circle"){const g=new Le(new hn(Math.max(2,n.radius-$t),.35,6,90),c);g.rotation.x=Math.PI/2,g.position.y=.3,r.add(g)}else{const g=n.hw-$t,x=n.hd-$t,u=(h,M,v,E)=>{const L=new Le(new Dt(h,.4,M),c);L.position.set(v,.3,E),r.add(L)};u(g*2,.6,0,-x),u(g*2,.6,0,x),u(.6,x*2,-g,0),u(.6,x*2,g,0)}const d=new mt({color:t.wall,roughness:.8}),p=22;for(let g=0;g<p;g++){const x=g/p*Math.PI*2,u=n.extent-$t-2,h=4+g%4*3,M=g%3===0?new Wi(1.4,h,6):g%3===1?new Dt(2.4,h,2.4):new wn(.8,1.1,h,6),v=new Le(M,d);v.position.set(Math.cos(x)*u,h/2-.4,Math.sin(x)*u),r.add(v)}i.add(r);const f=Og(e.scatterPattern,n,e.pickupCount||9),m=g=>{const x=[],u=n.extent*.45;for(let h=0;h<g;h++){const M=h/g*Math.PI*2;x.push({x:Math.cos(M)*u,z:Math.sin(M)*u,heading:M+Math.PI})}return x};return{id:e.id,config:e,bounds:n,visualTheme:t,stocks:e.stocks??3,pickupSpawns:f,startPositions:m,group:r}}const zg=2,Or=4.5;function Yn(i,e,t,n){const r=i-t,a=e-n;return r*r+a*a}function Rc(i,e){let t=null,n=1/0;for(const r of i.fighters){if(r===e||!r.alive)continue;const a=Yn(e.pos.x,e.pos.z,r.pos.x,r.pos.z);a<n&&(n=a,t=r)}return t?{e:t,d:Math.sqrt(n)}:null}function Hg(i,e){let t=null,n=1/0;for(const r of i.reliquaries){if(!r.active)continue;const a=Yn(e.pos.x,e.pos.z,r.x,r.z);a<n&&(n=a,t=r)}return t}function Cc(i,e,t){return Math.atan2(e-i.pos.x,t-i.pos.z)}function Gg(i,e){let t=(e-i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function Ys(i,e,t){const n=i.time;if(!e.alive||e.invulnUntil>n)return!1;if(e.effects.shieldUntil>n)return e.effects.shieldUntil=0,i.fx&&i.fx.ring(e.mesh.position,9358054),i.audio&&i.audio.play("shield"),e.isPlayer&&(i.koNotice={text:"Blocked!",until:n+1.4,kind:"block"},i.fx&&i.fx.flash("#8ecae6",.4)),!1;if(e.stocks-=1,e.effects.spinUntil=n+hc,e.speed*=.2,vc(e,1),t&&t!==e&&(t.kos+=1,t.score+=1),i.fx&&i.fx.burst(e.mesh.position,16765286,16),e.isPlayer&&i.fx&&i.fx.flash("#ff8aa0",.55),i.audio&&i.audio.play(e.stocks<=0?"ko":"hit"),i.shake=Math.max(i.shake||0,e.stocks<=0?e.isPlayer?1.9:1:e.isPlayer?1.4:.6),e.stocks<=0)e.alive=!1,e.mesh.visible=!1,i.fx&&i.fx.ring(e.mesh.position,14715498),i.aliveCount=i.fighters.filter(r=>r.alive).length,i.koNotice={text:`${e.label} is out!`,until:n+2.4,kind:"ko"};else{const r=i.arena.startPositions(i.fighters.length)[Math.floor(Xs(0,i.fighters.length))]||{x:0,z:0,heading:0};e.pos.x=r.x,e.pos.z=r.z,e.heading=r.heading,e.speed=0,e.invulnUntil=n+zg,e.isPlayer&&(i.koNotice={text:`KO! ${e.stocks} stock${e.stocks===1?"":"s"} left`,until:n+2})}return!0}function Vg(i,e){const t=Rc(i,e),n=new Xn(.8,0),r=new Le(n,new mt({color:13495038,emissive:13495038,emissiveIntensity:.7}));r.position.set(e.pos.x,1.4,e.pos.z),i.scene.add(r),i.projectiles.push({mesh:r,x:e.pos.x,z:e.pos.z,heading:e.heading,ownerId:e.id,targetId:t?t.e.id:null,life:3.5})}function Wg(i){return i==="slow"?5613104:i==="fog"?15267071:i==="fire"?15228164:13214247}function Xg(i,e,t){const n=Wg(t),r=t==="slow"||t==="fog"?new qr(1.5,0):new hn(1.4,.35,6,10),a=new Le(r,new mt({color:n,emissive:n,emissiveIntensity:.4}));a.position.set(e.pos.x,1,e.pos.z),i.scene.add(a),i.traps.push({mesh:a,x:e.pos.x,z:e.pos.z,kind:t,ownerId:e.id,life:12,armedAt:i.time+.4})}function qg(i,e){if(!e.heldItem)return null;const t=Yr[e.heldItem];return e.heldItem=null,_c(i,e,t,{spawnProjectile:r=>Vg(i,r),spawnTrap:(r,a)=>Xg(i,r,a),scrambleEnemies:r=>$g(i,r)})}function $g(i,e){for(const t of i.fighters)t===e||!t.alive||Yn(e.pos.x,e.pos.z,t.pos.x,t.pos.z)<70*70&&(t.effects.scrambleUntil=i.time+2.2)}function Yg(i,e,t,n){const r=i.time,a=e.effects.spinUntil>r;let s=Si(t.steer,-1,1);e.effects.scrambleUntil>r&&(s=-s),e._steer=s;const o=e.effects.steerAssistUntil>r;e.heading+=s*e.turn*(a?.3:1)*(o?1.25:1)*n;let l=e.maxSpeed*t.throttle;e.effects.boostUntil>r&&(l*=e.effects.boostMult||lc),e.effects.slowUntil>r&&(l*=cc),a&&(l*=.3),e.speed+=(l-e.speed)*Math.min(1,n*(e.accel*.25));const c=Math.sin(e.heading),d=Math.cos(e.heading);let p=e.pos.x+c*e.speed*n,f=e.pos.z+d*e.speed*n;const m=i.arena.bounds.clamp(p,f);if(m.hit&&(e.speed*=.4,e.isPlayer&&(i.shake=Math.max(i.shake||0,.6),i.fx&&i.fx.burst({x:m.x,y:1,z:m.z},12107976,6,5))),e.pos.x=m.x,e.pos.z=m.z,t.useItem&&e.heldItem){const g=qg(i,e);g&&e.isPlayer&&(i.lastItemMsg={text:g,until:r+2})}if(e.effects.boostUntil>r&&e.alive)for(const g of i.fighters)g===e||!g.alive||Yn(e.pos.x,e.pos.z,g.pos.x,g.pos.z)<Or*Or&&Ys(i,g,e)}function Kg(i,e,t){e._wander===void 0&&(e._wander=Math.random()*6.28),e._wander+=t;let n,r,a=!1;if(!e.heldItem){const c=Hg(i,e);c&&(n=c.x,r=c.z)}const s=Rc(i,e);n===void 0&&s&&(n=s.e.pos.x,r=s.e.pos.z,e.heldItem&&s.d<60&&Math.random()<t*.9&&(a=!0)),n===void 0&&(n=Math.cos(e._wander)*30,r=Math.sin(e._wander)*30);const o=Cc(e,n,r);return{steer:Si(Gg(e.heading,o)*1.6,-1,1),throttle:e.effects.spinUntil>i.time?.3:.95,useItem:a}}function jg(i,e){i.incomingOnPlayer=!1;for(let t=i.projectiles.length-1;t>=0;t--){const n=i.projectiles[t],r=n.targetId?i.fighters.find(o=>o.id===n.targetId&&o.alive):null;r&&r.isPlayer&&(i.incomingOnPlayer=!0,n.warned||(i.audio&&i.audio.play("warn"),n.warned=!0)),r&&(n.heading=Cc({pos:{x:n.x,z:n.z}},r.pos.x,r.pos.z)),n.x+=Math.sin(n.heading)*bs*e,n.z+=Math.cos(n.heading)*bs*e,n.mesh.position.set(n.x,1.4,n.z),n.life-=e;let a=n.life<=0;r&&Yn(n.x,n.z,r.pos.x,r.pos.z)<Or*Or&&(Ys(i,r,i.fighters.find(o=>o.id===n.ownerId)),a=!0),i.arena.bounds.clamp(n.x,n.z).hit&&(a=!0),a&&(i.scene.remove(n.mesh),i.projectiles.splice(t,1))}}function Zg(i,e){for(let t=i.traps.length-1;t>=0;t--){const n=i.traps[t];if(n.life-=e,n.mesh.rotation.y+=e*2,i.time>=n.armedAt){for(const r of i.fighters)if(!(!r.alive||r.id===n.ownerId)&&Yn(n.x,n.z,r.pos.x,r.pos.z)<16){if(r.effects.trapImmuneUntil>i.time)continue;n.kind==="slow"||n.kind==="fog"?r.effects.slowUntil=Math.max(r.effects.slowUntil||0,i.time+dc):(Ys(i,r,i.fighters.find(a=>a.id===n.ownerId)),n.life=0)}}n.life<=0&&(i.scene.remove(n.mesh),i.traps.splice(t,1))}}function Jg(i,e){const t=i.time;for(const n of i.reliquaries)if(n.active){gc(n.group,t,e);for(const r of i.fighters)if(!(!r.alive||r.heldItem)&&Yn(n.x,n.z,r.pos.x,r.pos.z)<Es*Es){r.heldItem=yc(r.rank,i.aliveCount),n.active=!1,n.group.visible=!1,n.respawnAt=t+Xs(uc,fc),i.fx&&i.fx.burst(n.group.position,i.arena.visualTheme.light,10),i.audio&&r.isPlayer&&i.audio.play("pickup");break}}else t>=n.respawnAt&&(n.active=!0,n.group.visible=!0)}function Qg(i){const e=[...i.fighters].sort((t,n)=>t.alive!==n.alive?t.alive?-1:1:n.stocks!==t.stocks?n.stocks-t.stocks:n.score-t.score);e.forEach((t,n)=>{t.rank=n+1}),i.ranked=e}function e_(i,e,t){if(i.status!=="battle")return;i.time+=e;for(const a of i.fighters){if(!a.alive)continue;const s=a.isPlayer?t:Kg(i,a,e);Yg(i,a,s,e);const o=a.effects.hopUntil>i.time?Math.max(0,Math.sin((a.effects.hopUntil-i.time)/.5*Math.PI)*2.2):0;a.mesh.position.set(a.pos.x,o,a.pos.z),a.mesh.rotation.y=a.heading,xc(a,{dt:e,time:i.time,steer:a._steer||0}),a.invulnUntil>i.time?a.mesh.visible=Math.floor(i.time*12)%2===0:a.mesh.visible=!0}jg(i,e),Zg(i,e),Jg(i,e),Qg(i);const n=i.fighters.filter(a=>a.alive);i.aliveCount=n.length;const r=i.status;!i.player.alive&&i.status==="battle"?(i.status="lost",i.endRank=i.player.rank):n.length===1&&i.status==="battle"&&(i.status=n[0].isPlayer?"won":"lost",i.endRank=1),r==="battle"&&i.status!=="battle"&&i.audio&&i.audio.play(i.status==="won"?"win":"lose")}function t_(i){const e=i.state;return{throttle:e.accel?1:e.brake?-.6:0,steer:(e.right?1:0)-(e.left?1:0),useItem:e.useItem}}function n_(i,{canvas:e,uiRoot:t,onMatchEnd:n}){const r=jt().quality||"high",a=r==="low"?1:r==="medium"?1.5:2,s=new Os({canvas:e,antialias:r!=="low"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,a)),s.setSize(window.innerWidth,window.innerHeight);const o=new Bs,l=new _t(64,window.innerWidth/window.innerHeight,.1,2e3),c=xl[i.arenaId]||xl.gingerbread_colosseum,d=Bg(o,c),p=Math.max(2,Math.min(16,i.racerCount||8)),f=Gs[i.playerCharacterId]||qn[0],m=ki[i.playerKartId]||cn[0],g=qn.filter(P=>P.id!==f.id).sort(()=>Math.random()-.5),x=d.startPositions(p),u=[];for(let P=0;P<p;P++){let W,H;P===0?(W=f,H=m):(W=g[(P-1)%g.length],H=ki[W.signatureKartId]||cn[P*7%cn.length]);const te=rg({character:W,kart:H,isPlayer:P===0,start:x[P],stocks:d.stocks});u.push(te),o.add(te.mesh)}const h=u[0],M={scene:o,arena:d,fighters:u,player:h,time:0,status:"battle",aliveCount:p,reliquaries:[],projectiles:[],traps:[],ranked:u.slice(),koNotice:null,lastItemMsg:null,endRank:null,fps:0,showFps:jt().showFps,shake:0,incomingOnPlayer:!1};M.koNotice={text:"Last fable standing — knock rivals out!",until:3.6};for(const P of d.pickupSpawns){const W=mc(d.visualTheme.light);W.position.set(P.x,2.2,P.z),W.userData.baseY=2.2,o.add(W),M.reliquaries.push({group:W,x:P.x,z:P.z,baseY:2.2,active:!0,respawnAt:0})}M.audio=je,M.fx=new wc(o,t),je.resume(),je.play("start");const v=Sc(t),E=new bc;E.attach(),E.attachTouch(t);const L=new Ec(l);l.position.set(h.pos.x,12,h.pos.z-16);let A=!1,T=!1,C=0,G=!1,_=0,S=0;const k=new rc,N=new I;function V(){s.setSize(window.innerWidth,window.innerHeight),l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix()}window.addEventListener("resize",V);function q(){C=requestAnimationFrame(q);const P=Math.min(.05,k.getDelta());if(G){s.render(o,l);return}_++,S+=P,S>=.5&&(M.fps=Math.round(_/S),_=0,S=0),M.showFps=jt().showFps;const W=t_(E);W.useItem=E.state.useItem&&!A,A=E.state.useItem,e_(M,P,W),M.fx.update(P),M.shake&&(L.addShake(M.shake),M.shake=0),N.set(Math.sin(h.heading),0,Math.cos(h.heading)),L.update({position:h.mesh.position,heading:N},P);const te=64+Math.min(1,h.speed/(h.maxSpeed||1))*5+(h.effects.boostUntil>M.time?4:0);l.fov+=(te-l.fov)*Math.min(1,P*5),l.updateProjectionMatrix(),v.update(Cg(M)),s.render(o,l),M.status!=="battle"&&!T&&(T=!0,setTimeout(()=>{typeof n=="function"&&n({mode:"arena",won:M.status==="won",rank:M.endRank||h.rank,total:u.length,characterName:f.name,kos:h.kos,stocksLeft:Math.max(0,h.stocks),arenaId:c.id})},900))}return q(),{mode:"arena",isPaused(){return G},pause(){T||(G=!0,je.play("ui"))},resume(){G=!1,k.getDelta()},dispose(){cancelAnimationFrame(C),window.removeEventListener("resize",V),E.detach(),v.destroy(),M.fx&&M.fx.dispose(),o.traverse(P=>{P.geometry&&P.geometry.dispose?.(),P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.dispose?.()):P.material.dispose?.())});try{s.forceContextLoss()}catch{}s.dispose()}}}const vr={headline:"Back the tale",sub:"You're playing the free prototype. Premium content is on the way — no payment is taken yet.",note:"Presentation only — no checkout, no payment is processed in this build.",tiers:[{id:"free",name:"Free Prototype",price:"$0",period:"",blurb:"The full elimination prototype, free in your browser.",features:["All 32 tracks","All 32 characters & karts","Elimination Royale mode"],cta:"Playing now",ctaState:"active"},{id:"supporter",name:"Supporter",price:"$4.99",period:"one-time",blurb:"Support development + cosmetic extras when they land.",features:["Supporter cosmetic skins","Name in credits","Early access to new cups"],cta:"Coming soon",ctaState:"soon"},{id:"premium",name:"Full Game",price:"$9.99",period:"one-time",blurb:"The complete game: progression, leaderboards, all cups.",features:["Account + progression","Online leaderboards","Premium cups & unlocks"],cta:"Coming soon",ctaState:"soon"}]},Ks="https://burntthumbworks.com/games/",Pc="https://burntthumbworks.com/";function js(i){const e=document.createElement("div");e.className=`overlay ${i}`;const t=document.createElement("div");return t.className="overlay-card",e.appendChild(t),{el:e,card:t}}function Bn(i,e=""){const t=document.createElement("button");return t.className=`ov-btn ${e}`.trim(),t.innerHTML=i,t.addEventListener("click",()=>{je.resume(),je.play("ui")}),t}function Ic(){const i=document.createElement("div");return i.className="ov-links",i.innerHTML=`<a href="${Ks}">🎮 Games Hub</a><a href="${Pc}">↩ Burnt Thumb Works</a>`,i}function i_(i,e){const{el:t,card:n}=js("overlay--pause"),r=document.createElement("h2");r.className="ov-title",r.textContent="Paused",n.appendChild(r);const a=document.createElement("div");a.className="ov-actions";const s=Bn("▶ Resume","primary"),o=Bn("↻ Restart Match"),l=Bn("⚙ Settings"),c=Bn("❔ How to Play"),d=Bn("⌂ Main Menu","ghost");s.addEventListener("click",()=>e.onResume&&e.onResume()),o.addEventListener("click",()=>e.onRestart&&e.onRestart()),l.addEventListener("click",()=>e.onSettings&&e.onSettings()),c.addEventListener("click",()=>e.onHowTo&&e.onHowTo()),d.addEventListener("click",()=>e.onMenu&&e.onMenu()),[s,o,l,c,d].forEach(f=>a.appendChild(f)),n.appendChild(a);const p=document.createElement("p");return p.className="ov-hint",p.textContent="“Main Menu” leaves this match and returns to selection. Esc resumes.",n.appendChild(p),n.appendChild(Ic()),t.addEventListener("click",f=>{f.target===t&&e.onResume&&e.onResume()}),i.appendChild(t),{el:t,destroy(){t.remove()}}}function r_(i,{onClose:e,mode:t}={}){const{el:n,card:r}=js("overlay--howto");r.innerHTML=`
    <h2 class="ov-title">How to Play</h2>
    <div class="howto-grid">
      <section class="howto-sec">
        <h3>Controls</h3>
        <ul>
          <li><b>Drive:</b> ↑ / W accelerate · ↓ / S brake</li>
          <li><b>Steer:</b> ← → or A / D</li>
          <li><b>Use item:</b> Space (or E)</li>
          <li><b>Pause:</b> Esc — or tap the ⏸ button</li>
          <li><b>Touch:</b> on-screen buttons appear on phones &amp; tablets</li>
        </ul>
      </section>
      <section class="howto-sec">
        <h3>🏁 Race Mode</h3>
        <ul>
          <li>Race the cursed circular track.</li>
          <li>Every <b>15 seconds</b> the racer in <b>last place</b> is culled.</li>
          <li>Grab items off the course and use them to climb.</li>
          <li>Be the <b>last tale standing</b> to win.</li>
        </ul>
      </section>
      <section class="howto-sec">
        <h3>⚔️ Battle Arena</h3>
        <ul>
          <li>Free-drive a contained folklore arena.</li>
          <li>Grab glowing <b>reliquaries</b> for items &amp; weapons.</li>
          <li>Knock rivals out — you each have <b>stocks (♥)</b>.</li>
          <li>Last <b>fable standing</b> wins.</li>
        </ul>
      </section>
      <section class="howto-sec">
        <h3>Items</h3>
        <ul>
          <li>Hold one item at a time — shown bottom-center.</li>
          <li>When it says <b>READY</b>, press <b>Space</b>.</li>
          <li>Boosts, shields, traps, projectiles &amp; trickier magic.</li>
        </ul>
      </section>
    </div>`;const a=Bn("Got it ▶","primary");return a.addEventListener("click",()=>e&&e()),r.appendChild(a),r.appendChild(Ic()),n.addEventListener("click",s=>{s.target===n&&e&&e()}),i.appendChild(n),{el:n,destroy(){n.remove()}}}function a_(i,{onClose:e}={}){const t=jt(),{el:n,card:r}=js("overlay--settings");r.innerHTML='<h2 class="ov-title">Settings</h2>';const a=document.createElement("div");a.className="settings-list";const s=g("Sound",`
    <label class="switch"><input type="checkbox" data-sound ${t.sound?"checked":""}><span></span></label>`),o=g("Volume",`
    <input type="range" min="0" max="100" value="${Math.round(t.volume*100)}" data-volume>`),l=g("Graphics",`
    <select data-quality>
      <option value="low" ${t.quality==="low"?"selected":""}>Low (fastest)</option>
      <option value="medium" ${t.quality==="medium"?"selected":""}>Medium</option>
      <option value="high" ${t.quality==="high"?"selected":""}>High</option>
    </select>
    <span class="settings-note">applies next match</span>`),c=g("Show FPS / debug",`
    <label class="switch"><input type="checkbox" data-fps ${t.showFps?"checked":""}><span></span></label>`),d=g("Local progress",`
    <button class="ov-btn danger" data-reset>Reset local progress</button>
    <span class="settings-note" data-reset-note></span>`);[s,o,l,c,d].forEach(x=>a.appendChild(x)),r.appendChild(a);const p=Bn("Done ▶","primary");p.addEventListener("click",()=>e&&e()),r.appendChild(p),i.appendChild(n);const f=x=>r.querySelector(x);f("[data-sound]").addEventListener("change",x=>{const u=x.target.checked;Ni({sound:u}),je.resume(),je.setMuted(!u),u&&je.play("ui")}),f("[data-volume]").addEventListener("input",x=>{const u=parseInt(x.target.value,10)/100;Ni({volume:u}),je.resume(),je.setVolume(u)}),f("[data-volume]").addEventListener("change",()=>je.play("pickup")),f("[data-quality]").addEventListener("change",x=>Ni({quality:x.target.value})),f("[data-fps]").addEventListener("change",x=>Ni({showFps:x.target.checked}));let m=!1;return f("[data-reset]").addEventListener("click",()=>{const x=f("[data-reset-note]");if(!m){m=!0,f("[data-reset]").textContent="Tap again to confirm",x.textContent="This clears your local match history.";return}Dg(),f("[data-reset]").textContent="Reset local progress",x.textContent="Cleared ✓",m=!1}),n.addEventListener("click",x=>{x.target===n&&e&&e()}),{el:n,destroy(){n.remove()}};function g(x,u){const h=document.createElement("div");return h.className="settings-row",h.innerHTML=`<span class="settings-label">${x}</span><span class="settings-control">${u}</span>`,h}}function s_(){const i=Tc().totals||{},e=i.played||0;return e?`Played ${e} · Wins ${i.wins||0} · KOs ${i.kos||0}`:"No matches yet — jump in!"}function o_(){const i=document.createElement("div");i.className="garage",i.innerHTML=`
    <div class="garage-stage"><canvas data-gcanvas></canvas></div>
    <div class="garage-info">
      <div class="garage-name" data-gname>—</div>
      <div class="garage-sub" data-gsub></div>
      <div class="garage-stats" data-gstats></div>
      <div class="garage-note">Cosmetic preview · more karts &amp; skins coming · no purchases.</div>
    </div>`;const e=i.querySelector("[data-gcanvas]");let t=null,n=null,r=null,a=null,s=0,o=!1;try{t=new Os({canvas:e,antialias:!0,alpha:!0}),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n=new Bs,r=new _t(42,1.2,.1,100),r.position.set(5.5,4,7.5),r.lookAt(0,1,0),n.add(new zs(16777215,4210784,1.15));const f=new Hs(16777215,.75);f.position.set(5,10,6),n.add(f),o=!0}catch{o=!1}function l(){a&&(n.remove(a),a.traverse(f=>{f.geometry&&f.geometry.dispose?.(),f.material&&(Array.isArray(f.material)?f.material.forEach(m=>m.dispose?.()):f.material.dispose?.())}),a=null)}function c(f,m){const g=Gs[f],x=ki[m];if(!g||!x)return;i.querySelector("[data-gname]").textContent=g.name,i.querySelector("[data-gsub]").textContent=`${x.name} · ${x.type} · ${g.tale}`;const u=(E,L)=>Math.round((E+L)/2),h=g.stats,M=x.stats,v=[["Speed",u(h.speed,M.speed)],["Accel",u(h.acceleration,M.acceleration)],["Handling",u(h.handling,M.handling)],["Weight",u(h.weight,M.weight)],["Luck",h.luck??6]];i.querySelector("[data-gstats]").innerHTML=v.map(([E,L])=>`<div class="gstat"><span>${E}</span><div class="gbar"><i style="width:${Math.min(100,L*10)}%"></i></div></div>`).join(""),o&&(l(),a=Vs(x,g),n.add(a))}function d(){if(!o)return;const f=i.querySelector(".garage-stage").getBoundingClientRect(),m=Math.max(160,Math.floor(f.width)||240),g=Math.max(150,Math.floor(f.height)||190);t.setSize(m,g,!1),r.aspect=m/g,r.updateProjectionMatrix()}function p(){s=requestAnimationFrame(p),o&&(a&&(a.rotation.y+=.012),t.render(n,r))}return{el:i,setSelection:c,mount(){d(),o&&p()},destroy(){if(cancelAnimationFrame(s),l(),t){try{t.forceContextLoss()}catch{}t.dispose()}i.remove()}}}const yl=i=>"#"+i.toString(16).padStart(6,"0");function l_(i,e,t={}){const n={mode:"race",raceType:"elimination",playerCharacterId:Km,playerKartId:jm,trackId:Zm,arenaId:Fg,racerCount:10},r=document.createElement("div");r.className="menu",r.innerHTML=`
    <div class="menu-inner">
      <div class="menu-topbar">
        <a class="btw-link" href="https://burntthumbworks.com/">↩ Burnt Thumb Works</a>
        <div class="menu-topbar-actions">
          <a class="btw-link" href="${Ks}">🎮 Games Hub</a>
          <button class="mini-btn" data-howto>❔ How to Play</button>
          <button class="mini-btn" data-settings>⚙ Settings</button>
          <button class="mute-btn" data-mute aria-label="Toggle sound" aria-pressed="false">🔊</button>
        </div>
      </div>
      <header class="menu-head">
        <h1>GrimmKart<span class="io">.io</span></h1>
        <p class="tagline">A public-domain Grimm folklore kart game — <b>Race</b> the cursed tracks or do <b>Battle</b> in the arenas. Last tale standing wins.</p>
        <p class="menu-stats" data-stats></p>
      </header>

      <div class="mode-toggle" role="tablist" aria-label="Game mode">
        <button class="mode-btn" data-mode="race" role="tab">🏁 Race Mode</button>
        <button class="mode-btn" data-mode="arena" role="tab">⚔️ Battle Arena</button>
      </div>
      <p class="mode-desc" data-mode-desc></p>

      <section class="garage-wrap"><h2 class="garage-title">Garage</h2><div data-garage></div></section>

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
      <p class="byline">A <a href="https://burntthumbworks.com/"><b>Burnt Thumb Works</b></a> game · public-domain Grimm folklore · original storybook interpretation.</p>
    </div>
  `,i.appendChild(r);const a=o_();r.querySelector("[data-garage]").appendChild(a.el);const s={char:r.querySelector('[data-list="char"]'),kart:r.querySelector('[data-list="kart"]'),track:r.querySelector('[data-list="track"]'),arena:r.querySelector('[data-list="arena"]')},o={char:r.querySelector('[data-pick="char"]'),kart:r.querySelector('[data-pick="kart"]'),track:r.querySelector('[data-pick="track"]'),arena:r.querySelector('[data-pick="arena"]')};function l(v,E,L,A,T,C){const G=document.createElement("button");return G.className="card",G.dataset.id=E,G.dataset.kind=v,G.innerHTML=`<span class="swatch" style="background:linear-gradient(135deg, ${yl(T)}, ${yl(C)})"></span>
      <span class="card-name">${L}</span><span class="card-sub">${A}</span>`,G.addEventListener("click",()=>p(v,E)),G}qn.forEach(v=>s.char.appendChild(l("char",v.id,v.name,v.tale,v.palette.primary,v.palette.secondary))),cn.forEach(v=>s.kart.appendChild(l("kart",v.id,v.name,v.type,v.palette.primary,v.palette.secondary))),Ss.forEach(v=>s.track.appendChild(l("track",v.id,v.name,`${v.biome} · ${v.variation.replace(/_/g," ")}`,v.visualTheme.border,v.visualTheme.road))),Ts.forEach(v=>s.arena.appendChild(l("arena",v.id,v.name,`${v.biome} · ${v.bounds.shape} · ${v.stocks} stocks`,v.visualTheme.wall,v.visualTheme.ground)));const c={char:qn,kart:cn,track:Ss,arena:Ts},d={char:"playerCharacterId",kart:"playerKartId",track:"trackId",arena:"arenaId"};function p(v,E){n[d[v]]=E,s[v].querySelectorAll(".card").forEach(A=>A.classList.toggle("on",A.dataset.id===E));const L=c[v].find(A=>A.id===E);o[v].textContent=L?`— ${L.name}`:"",(v==="char"||v==="kart")&&a.setSelection(n.playerCharacterId,n.playerKartId)}["char","kart","track","arena"].forEach(v=>p(v,n[d[v]]));const f=r.querySelector("[data-mode-desc]"),m=r.querySelector("[data-foot]"),g=r.querySelector("[data-start]"),x=r.querySelector("[data-count-label]");function u(v){n.mode=v,r.querySelectorAll(".mode-btn").forEach(E=>E.classList.toggle("on",E.dataset.mode===v)),r.querySelectorAll("[data-show]").forEach(E=>{E.style.display=E.dataset.show===v?"":"none"}),v==="arena"?(f.textContent="Free-drive combat in a contained folklore arena. Grab reliquaries, sling items, knock rivals out of their stocks. Last fable standing wins.",g.textContent="Start Battle ⚔️",x.textContent="Fighters",m.innerHTML="Controls: <b>Arrows / WASD</b> drive & turn · <b>Space</b> use item/weapon · boost-ram or hit rivals to take a stock."):(f.textContent="Race varied circular Grimm tracks with items on the course. Elimination: don't be last when the cull comes.",g.textContent="Start Race ▶",x.textContent="Racers",m.innerHTML="Controls: <b>Arrows / WASD</b> steer · <b>Space</b> use item · avoid being last every 15s.")}r.querySelectorAll(".mode-btn").forEach(v=>v.addEventListener("click",()=>u(v.dataset.mode))),u("race"),r.querySelector("[data-racers]").addEventListener("change",v=>{n.racerCount=parseInt(v.target.value,10)}),g.addEventListener("click",()=>{je.resume(),je.play("ui"),e({...n})}),r.querySelector("[data-stats]").textContent=s_(),r.querySelector("[data-howto]").addEventListener("click",()=>{je.resume(),je.play("ui"),t.onHowTo&&t.onHowTo()}),r.querySelector("[data-settings]").addEventListener("click",()=>{je.resume(),je.play("ui"),t.onSettings&&t.onSettings()});const h=r.querySelector("[data-mute]"),M=!jt().sound;return h.textContent=M?"🔇":"🔊",h.classList.toggle("off",M),h.setAttribute("aria-pressed",String(M)),h.addEventListener("click",()=>{je.resume();const v=je.toggleMute();Ni({sound:!v}),h.textContent=v?"🔇":"🔊",h.classList.toggle("off",v),h.setAttribute("aria-pressed",String(v))}),r.querySelector("[data-pricing]").innerHTML=`
    <h2 class="pricing-head">${vr.headline}</h2>
    <p class="pricing-sub">${vr.sub}</p>
    <div class="tiers">
      ${vr.tiers.map(v=>`
        <div class="tier tier--${v.id}">
          <div class="tier-name">${v.name}</div>
          <div class="tier-price">${v.price}${v.period?`<span> / ${v.period}</span>`:""}</div>
          <div class="tier-blurb">${v.blurb}</div>
          <ul class="tier-feats">${v.features.map(E=>`<li>${E}</li>`).join("")}</ul>
          <button class="tier-cta ${v.ctaState==="soon"?"soon":"on"}" ${v.ctaState==="soon"?'disabled aria-disabled="true"':""}>${v.cta}</button>
        </div>`).join("")}
    </div>
    <p class="pricing-note">${vr.note}</p>`,a.mount(),{el:r,show(){r.style.display=""},hide(){r.style.display="none"},destroy(){a.destroy(),r.remove()}}}function c_(i,{mode:e,won:t,rank:n,total:r,characterName:a,kos:s,onReplay:o,onMenu:l,onHowTo:c}){const d=e==="arena",p=t?d?"Last Fable Standing!":"Last Tale Standing!":d?"Knocked Out":"Eliminated";let f;d?f=t?`${a} outlasted ${r-1} rivals — ${s||0} KO${s===1?"":"s"}.`:`${a} fell at ${n} of ${r} · ${s||0} KO${s===1?"":"s"}.`:f=t?`${a} outlasted ${r-1} rivals.`:`${a} finished ${n} of ${r}.`;const m=document.createElement("div");return m.className=`end-screen ${t?"win":"lose"}`,m.innerHTML=`
    <div class="end-card">
      <h1>${p}</h1>
      <p class="end-sub">${f}</p>
      <div class="end-actions">
        <button data-replay>${d?"⚔️ Battle Again":"▶ Race Again"}</button>
        <button data-menu class="ghost">⌂ Main Menu</button>
        <button data-howto class="ghost">❔ How to Play</button>
      </div>
      <div class="ov-links end-links">
        <a href="${Ks}">🎮 Games Hub</a>
        <a href="${Pc}">↩ Burnt Thumb Works</a>
      </div>
    </div>`,i.appendChild(m),m.querySelector("[data-replay]").addEventListener("click",()=>{m.remove(),o&&o()}),m.querySelector("[data-menu]").addEventListener("click",()=>{m.remove(),l&&l()}),m.querySelector("[data-howto]").addEventListener("click",()=>{c&&c()}),{destroy(){m.remove()}}}const Rr=document.getElementById("game-canvas"),Zt=document.getElementById("ui-root"),Lc=jt();je.setVolume(Lc.volume);je.setMuted(!Lc.sound);let vt=null,Cr=null,Br=null,Wt=null,Ut=null,Sn=null;function Zs(){vt&&(vt.dispose(),vt=null),Zt.innerHTML="",Wt=Ut=Sn=null}function d_(){Wt=document.createElement("button"),Wt.className="pause-btn",Wt.setAttribute("aria-label","Pause"),Wt.innerHTML="⏸",Wt.addEventListener("mousedown",i=>i.preventDefault()),Wt.addEventListener("click",()=>{Dc(),Wt&&Wt.blur()}),Zt.appendChild(Wt)}function Js(i){Br=i,Cr&&(Cr.destroy(),Cr=null),Zt.innerHTML="",Ut=Sn=null,Rr.style.display="",i.mode==="arena"?vt=n_(i,{canvas:Rr,uiRoot:Zt,onMatchEnd:Ml}):vt=Ng(i,{canvas:Rr,uiRoot:Zt,onRaceEnd:e=>Ml({mode:"race",...e})}),d_()}function Ml(i){try{Lg(Ug(i,Br))}catch{}Zs(),c_(Zt,{...i,onReplay:()=>Js(Br),onMenu:()=>Qs(),onHowTo:()=>eo()})}function Qs(){Zs(),Rr.style.display="none",Cr=l_(Zt,i=>Js(i),{onHowTo:()=>eo(),onSettings:()=>Nc()})}function Dc(){vt&&(vt.isPaused()?Uc():h_())}function h_(){!vt||vt.isPaused()||(vt.pause(),Ut=i_(Zt,{onResume:Uc,onRestart:u_,onMenu:f_,onHowTo:eo,onSettings:Nc}))}function Uc(){Tn(),Ut&&(Ut.destroy(),Ut=null),vt&&vt.resume()}function u_(){const i=Br;Tn(),Ut&&(Ut.destroy(),Ut=null),Zs(),i&&Js(i)}function f_(){Tn(),Ut&&(Ut.destroy(),Ut=null),Qs()}function eo(){Tn(),Sn=r_(Zt,{onClose:Tn,mode:vt?vt.mode:null})}function Nc(){Tn(),Sn=a_(Zt,{onClose:Tn})}function Tn(){Sn&&(Sn.destroy(),Sn=null)}window.addEventListener("keydown",i=>{if(i.code==="Escape"){if(Sn){Tn(),i.preventDefault();return}vt&&(Dc(),i.preventDefault())}});Qs();
