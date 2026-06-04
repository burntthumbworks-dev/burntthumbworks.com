(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xs="169",xc=0,Gs=1,vc=2,el=1,yc=2,Jt=3,mn=0,Mt=1,Vt=2,fn=0,ii=1,Vs=2,Ws=3,Xs=4,Mc=5,Rn=100,Sc=101,bc=102,Ec=103,wc=104,Tc=200,Ac=201,Rc=202,Cc=203,Ea=204,wa=205,Pc=206,Ic=207,Lc=208,Dc=209,Uc=210,Nc=211,Fc=212,Oc=213,kc=214,Ta=0,Aa=1,Ra=2,oi=3,Ca=4,Pa=5,Ia=6,La=7,tl=0,Bc=1,zc=2,pn=0,Hc=1,Gc=2,Vc=3,Wc=4,Xc=5,qc=6,Yc=7,nl=300,li=301,ci=302,Da=303,Ua=304,Cr=306,Na=1e3,In=1001,Fa=1002,Pt=1003,Kc=1004,Oi=1005,Nt=1006,Gr=1007,Ln=1008,rn=1009,il=1010,rl=1011,Ai=1012,vs=1013,Dn=1014,Qt=1015,Ci=1016,ys=1017,Ms=1018,di=1020,al=35902,sl=1021,ol=1022,Ot=1023,ll=1024,cl=1025,ri=1026,hi=1027,dl=1028,Ss=1029,hl=1030,bs=1031,Es=1033,cr=33776,dr=33777,hr=33778,ur=33779,Oa=35840,ka=35841,Ba=35842,za=35843,Ha=36196,Ga=37492,Va=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Ka=37812,$a=37813,ja=37814,Za=37815,Ja=37816,Qa=37817,es=37818,ts=37819,ns=37820,is=37821,fr=36492,rs=36494,as=36495,ul=36283,ss=36284,os=36285,ls=36286,$c=3200,jc=3201,fl=0,Zc=1,un="",Ht="srgb",_n="srgb-linear",ws="display-p3",Pr="display-p3-linear",vr="linear",et="srgb",yr="rec709",Mr="p3",Hn=7680,qs=519,Jc=512,Qc=513,ed=514,pl=515,td=516,nd=517,id=518,rd=519,Ys=35044,Ks="300 es",en=2e3,Sr=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,cs=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function ad(i,e){return(i%e+e)%e}function Wr(i,e,t){return(1-t)*i+t*e}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,r,a,s,o,l,d){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,d)}set(e,t,n,r,a,s,o,l,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=s,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],d=n[1],h=n[4],f=n[7],p=n[2],m=n[5],g=n[8],v=r[0],c=r[3],u=r[6],b=r[1],M=r[4],E=r[7],U=r[2],A=r[5],T=r[8];return a[0]=s*v+o*b+l*U,a[3]=s*c+o*M+l*A,a[6]=s*u+o*E+l*T,a[1]=d*v+h*b+f*U,a[4]=d*c+h*M+f*A,a[7]=d*u+h*E+f*T,a[2]=p*v+m*b+g*U,a[5]=p*c+m*M+g*A,a[8]=p*u+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],d=e[7],h=e[8];return t*s*h-t*o*d-n*a*h+n*o*l+r*a*d-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],d=e[7],h=e[8],f=h*s-o*d,p=o*l-h*a,m=d*a-s*l,g=t*f+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*d-h*n)*v,e[2]=(o*n-r*s)*v,e[3]=p*v,e[4]=(h*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=m*v,e[7]=(n*l-d*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),d=Math.sin(a);return this.set(n*l,n*d,-n*(l*s+d*o)+s+e,-r*d,r*l,-r*(-d*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Pe;function ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=br("canvas");return i.style.display="block",i}const $s={};function pr(i){i in $s||($s[i]=!0,console.warn(i))}function od(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function ld(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const js=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zs=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xi={[_n]:{transfer:vr,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ht]:{transfer:et,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Pr]:{transfer:vr,primaries:Mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Zs),fromReference:i=>i.applyMatrix3(js)},[ws]:{transfer:et,primaries:Mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zs),fromReference:i=>i.applyMatrix3(js).convertLinearToSRGB()}},dd=new Set([_n,Pr]),Xe={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xi[e].toReference,r=xi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xi[i].primaries},getTransfer:function(i){return i===un?vr:xi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(xi[e].luminanceCoefficients)}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class hd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=br("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ai(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Yr(r[s].image)):a.push(Yr(r[s]))}else a=Yr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class St extends pi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=In,r=In,a=Nt,s=Ln,o=Ot,l=rn,d=St.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Pi(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=nl;St.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,d=l[0],h=l[4],f=l[8],p=l[1],m=l[5],g=l[9],v=l[2],c=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-v)<.01&&Math.abs(g-c)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+v)<.1&&Math.abs(g+c)<.1&&Math.abs(d+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(d+1)/2,E=(m+1)/2,U=(u+1)/2,A=(h+p)/4,T=(f+v)/4,P=(g+c)/4;return M>E&&M>U?M<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(M),r=A/n,a=T/n):E>U?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=A/r,a=P/r):U<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(U),n=T/a,r=P/a),this.set(n,r,a,t),this}let b=Math.sqrt((c-g)*(c-g)+(f-v)*(f-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(c-g)/b,this.y=(f-v)/b,this.z=(p-h)/b,this.w=Math.acos((d+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends pd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _l extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],d=n[r+1],h=n[r+2],f=n[r+3];const p=a[s+0],m=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==p||d!==m||h!==g){let c=1-o;const u=l*p+d*m+h*g+f*v,b=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const U=Math.sqrt(M),A=Math.atan2(U,u*b);c=Math.sin(c*A)/U,o=Math.sin(o*A)/U}const E=o*b;if(l=l*c+p*E,d=d*c+m*E,h=h*c+g*E,f=f*c+v*E,c===1-o){const U=1/Math.sqrt(l*l+d*d+h*h+f*f);l*=U,d*=U,h*=U,f*=U}}e[t]=l,e[t+1]=d,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],d=n[r+2],h=n[r+3],f=a[s],p=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+h*f+l*m-d*p,e[t+1]=l*g+h*p+d*f-o*m,e[t+2]=d*g+h*m+o*p-l*f,e[t+3]=h*g-o*f-l*p-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,d=o(n/2),h=o(r/2),f=o(a/2),p=l(n/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=p*h*f+d*m*g,this._y=d*m*f-p*h*g,this._z=d*h*g+p*m*f,this._w=d*h*f-p*m*g;break;case"YXZ":this._x=p*h*f+d*m*g,this._y=d*m*f-p*h*g,this._z=d*h*g-p*m*f,this._w=d*h*f+p*m*g;break;case"ZXY":this._x=p*h*f-d*m*g,this._y=d*m*f+p*h*g,this._z=d*h*g+p*m*f,this._w=d*h*f-p*m*g;break;case"ZYX":this._x=p*h*f-d*m*g,this._y=d*m*f+p*h*g,this._z=d*h*g-p*m*f,this._w=d*h*f+p*m*g;break;case"YZX":this._x=p*h*f+d*m*g,this._y=d*m*f+p*h*g,this._z=d*h*g-p*m*f,this._w=d*h*f-p*m*g;break;case"XZY":this._x=p*h*f-d*m*g,this._y=d*m*f-p*h*g,this._z=d*h*g+p*m*f,this._w=d*h*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],d=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-d)*m,this._z=(s-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+d)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(a-d)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(s-r)/m,this._x=(a+d)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,d=t._z,h=t._w;return this._x=n*h+s*o+r*d-a*l,this._y=r*h+s*l+a*o-n*d,this._z=a*h+s*d+n*l-r*o,this._w=s*h-n*o-r*l-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const d=Math.sqrt(l),h=Math.atan2(d,o),f=Math.sin((1-t)*h)/d,p=Math.sin(t*h)/d;return this._w=s*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Js.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Js.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,d=2*(s*r-o*n),h=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+l*d+s*f-o*h,this.y=n+l*h+o*d-a*f,this.z=r+l*f+a*h-s*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new C,Js=new Ii;class Li{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Lt):Lt.fromBufferAttribute(a,s),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Bi.subVectors(this.max,vi),Vn.subVectors(e.a,vi),Wn.subVectors(e.b,vi),Xn.subVectors(e.c,vi),sn.subVectors(Wn,Vn),on.subVectors(Xn,Wn),yn.subVectors(Vn,Xn);let t=[0,-sn.z,sn.y,0,-on.z,on.y,0,-yn.z,yn.y,sn.z,0,-sn.x,on.z,0,-on.x,yn.z,0,-yn.x,-sn.y,sn.x,0,-on.y,on.x,0,-yn.y,yn.x,0];return!$r(t,Vn,Wn,Xn,Bi)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,Vn,Wn,Xn,Bi))?!1:(zi.crossVectors(sn,on),t=[zi.x,zi.y,zi.z],$r(t,Vn,Wn,Xn,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new C,new C,new C,new C,new C,new C,new C,new C],Lt=new C,ki=new Li,Vn=new C,Wn=new C,Xn=new C,sn=new C,on=new C,yn=new C,vi=new C,Bi=new C,zi=new C,Mn=new C;function $r(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Mn.fromArray(i,a);const o=r.x*Math.abs(Mn.x)+r.y*Math.abs(Mn.y)+r.z*Math.abs(Mn.z),l=e.dot(Mn),d=t.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>o)return!1}return!0}const gd=new Li,yi=new C,jr=new C;class Di{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(jr)),this.expandByPoint(yi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new C,Zr=new C,Hi=new C,ln=new C,Jr=new C,Gi=new C,Qr=new C;class Ts{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zr.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Zr);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Hi),o=ln.dot(this.direction),l=-ln.dot(Hi),d=ln.lengthSq(),h=Math.abs(1-s*s);let f,p,m,g;if(h>0)if(f=s*l-o,p=s*o-l,g=a*h,f>=0)if(p>=-g)if(p<=g){const v=1/h;f*=v,p*=v,m=f*(f+s*p+2*o)+p*(s*f+p+2*l)+d}else p=a,f=Math.max(0,-(s*p+o)),m=-f*f+p*(p+2*l)+d;else p=-a,f=Math.max(0,-(s*p+o)),m=-f*f+p*(p+2*l)+d;else p<=-g?(f=Math.max(0,-(-s*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+d):p<=g?(f=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+d):(f=Math.max(0,-(s*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+d);else p=s>0?-a:a,f=Math.max(0,-(s*p+o)),m=-f*f+p*(p+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zr).addScaledVector(Hi,p),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),r=Kt.dot(Kt)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const d=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,r=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,r=(e.min.x-p.x)*d),h>=0?(a=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,r,a){Jr.subVectors(t,e),Gi.subVectors(n,e),Qr.crossVectors(Jr,Gi);let s=this.direction.dot(Qr),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ln.subVectors(this.origin,e);const l=o*this.direction.dot(Gi.crossVectors(ln,Gi));if(l<0)return null;const d=o*this.direction.dot(Jr.cross(ln));if(d<0||l+d>s)return null;const h=-o*ln.dot(Qr);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,a,s,o,l,d,h,f,p,m,g,v,c){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,d,h,f,p,m,g,v,c)}set(e,t,n,r,a,s,o,l,d,h,f,p,m,g,v,c){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=d,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=g,u[11]=v,u[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),a=1/qn.setFromMatrixColumn(e,1).length(),s=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),d=Math.sin(r),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=s*h,m=s*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=d,t[1]=m+g*d,t[5]=p-v*d,t[9]=-o*l,t[2]=v-p*d,t[6]=g+m*d,t[10]=s*l}else if(e.order==="YXZ"){const p=l*h,m=l*f,g=d*h,v=d*f;t[0]=p+v*o,t[4]=g*o-m,t[8]=s*d,t[1]=s*f,t[5]=s*h,t[9]=-o,t[2]=m*o-g,t[6]=v+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*h,m=l*f,g=d*h,v=d*f;t[0]=p-v*o,t[4]=-s*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*h,t[9]=v-p*o,t[2]=-s*d,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*h,m=s*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*d-m,t[8]=p*d+v,t[1]=l*f,t[5]=v*d+p,t[9]=m*d-g,t[2]=-d,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,m=s*d,g=o*l,v=o*d;t[0]=l*h,t[4]=v-p*f,t[8]=g*f+m,t[1]=f,t[5]=s*h,t[9]=-o*h,t[2]=-d*h,t[6]=m*f+g,t[10]=p-v*f}else if(e.order==="XZY"){const p=s*l,m=s*d,g=o*l,v=o*d;t[0]=l*h,t[4]=-f,t[8]=d*h,t[1]=p*f+v,t[5]=s*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*h,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_d,e,xd)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),cn.crossVectors(n,Tt),cn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),cn.crossVectors(n,Tt)),cn.normalize(),Vi.crossVectors(Tt,cn),r[0]=cn.x,r[4]=Vi.x,r[8]=Tt.x,r[1]=cn.y,r[5]=Vi.y,r[9]=Tt.y,r[2]=cn.z,r[6]=Vi.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],d=n[12],h=n[1],f=n[5],p=n[9],m=n[13],g=n[2],v=n[6],c=n[10],u=n[14],b=n[3],M=n[7],E=n[11],U=n[15],A=r[0],T=r[4],P=r[8],W=r[12],_=r[1],x=r[5],F=r[9],D=r[13],z=r[2],X=r[6],H=r[10],$=r[14],G=r[3],le=r[7],ae=r[11],ge=r[15];return a[0]=s*A+o*_+l*z+d*G,a[4]=s*T+o*x+l*X+d*le,a[8]=s*P+o*F+l*H+d*ae,a[12]=s*W+o*D+l*$+d*ge,a[1]=h*A+f*_+p*z+m*G,a[5]=h*T+f*x+p*X+m*le,a[9]=h*P+f*F+p*H+m*ae,a[13]=h*W+f*D+p*$+m*ge,a[2]=g*A+v*_+c*z+u*G,a[6]=g*T+v*x+c*X+u*le,a[10]=g*P+v*F+c*H+u*ae,a[14]=g*W+v*D+c*$+u*ge,a[3]=b*A+M*_+E*z+U*G,a[7]=b*T+M*x+E*X+U*le,a[11]=b*P+M*F+E*H+U*ae,a[15]=b*W+M*D+E*$+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],d=e[13],h=e[2],f=e[6],p=e[10],m=e[14],g=e[3],v=e[7],c=e[11],u=e[15];return g*(+a*l*f-r*d*f-a*o*p+n*d*p+r*o*m-n*l*m)+v*(+t*l*m-t*d*p+a*s*p-r*s*m+r*d*h-a*l*h)+c*(+t*d*f-t*o*m-a*s*f+n*s*m+a*o*h-n*d*h)+u*(-r*o*h-t*l*f+t*o*p+r*s*f-n*s*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],d=e[7],h=e[8],f=e[9],p=e[10],m=e[11],g=e[12],v=e[13],c=e[14],u=e[15],b=f*c*d-v*p*d+v*l*m-o*c*m-f*l*u+o*p*u,M=g*p*d-h*c*d-g*l*m+s*c*m+h*l*u-s*p*u,E=h*v*d-g*f*d+g*o*m-s*v*m-h*o*u+s*f*u,U=g*f*l-h*v*l-g*o*p+s*v*p+h*o*c-s*f*c,A=t*b+n*M+r*E+a*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=b*T,e[1]=(v*p*a-f*c*a-v*r*m+n*c*m+f*r*u-n*p*u)*T,e[2]=(o*c*a-v*l*a+v*r*d-n*c*d-o*r*u+n*l*u)*T,e[3]=(f*l*a-o*p*a-f*r*d+n*p*d+o*r*m-n*l*m)*T,e[4]=M*T,e[5]=(h*c*a-g*p*a+g*r*m-t*c*m-h*r*u+t*p*u)*T,e[6]=(g*l*a-s*c*a-g*r*d+t*c*d+s*r*u-t*l*u)*T,e[7]=(s*p*a-h*l*a+h*r*d-t*p*d-s*r*m+t*l*m)*T,e[8]=E*T,e[9]=(g*f*a-h*v*a-g*n*m+t*v*m+h*n*u-t*f*u)*T,e[10]=(s*v*a-g*o*a+g*n*d-t*v*d-s*n*u+t*o*u)*T,e[11]=(h*o*a-s*f*a-h*n*d+t*f*d+s*n*m-t*o*m)*T,e[12]=U*T,e[13]=(h*v*r-g*f*r+g*n*p-t*v*p-h*n*c+t*f*c)*T,e[14]=(g*o*r-s*v*r-g*n*l+t*v*l+s*n*c-t*o*c)*T,e[15]=(s*f*r-h*o*r+h*n*l-t*f*l-s*n*p+t*o*p)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,d=a*s,h=a*o;return this.set(d*s+n,d*o-r*l,d*l+r*o,0,d*o+r*l,h*o+n,h*l-r*s,0,d*l-r*o,h*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,d=a+a,h=s+s,f=o+o,p=a*d,m=a*h,g=a*f,v=s*h,c=s*f,u=o*f,b=l*d,M=l*h,E=l*f,U=n.x,A=n.y,T=n.z;return r[0]=(1-(v+u))*U,r[1]=(m+E)*U,r[2]=(g-M)*U,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(p+u))*A,r[6]=(c+b)*A,r[7]=0,r[8]=(g+M)*T,r[9]=(c-b)*T,r[10]=(1-(p+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=qn.set(r[0],r[1],r[2]).length();const s=qn.set(r[4],r[5],r[6]).length(),o=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const d=1/a,h=1/s,f=1/o;return Dt.elements[0]*=d,Dt.elements[1]*=d,Dt.elements[2]*=d,Dt.elements[4]*=h,Dt.elements[5]*=h,Dt.elements[6]*=h,Dt.elements[8]*=f,Dt.elements[9]*=f,Dt.elements[10]*=f,t.setFromRotationMatrix(Dt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=en){const l=this.elements,d=2*a/(t-e),h=2*a/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let m,g;if(o===en)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Sr)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=en){const l=this.elements,d=1/(t-e),h=1/(n-r),f=1/(s-a),p=(t+e)*d,m=(n+r)*h;let g,v;if(o===en)g=(s+a)*f,v=-2*f;else if(o===Sr)g=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new C,Dt=new tt,_d=new C(0,0,0),xd=new C(1,1,1),cn=new C,Vi=new C,Tt=new C,Qs=new tt,eo=new Ii;class Xt{constructor(e=0,t=0,n=0,r=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],d=r[5],h=r[9],f=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const to=new C,Yn=new Ii,$t=new tt,Wi=new C,Mi=new C,yd=new C,Md=new Ii,no=new C(1,0,0),io=new C(0,1,0),ro=new C(0,0,1),ao={type:"added"},Sd={type:"removed"},Kn={type:"childadded",child:null},ea={type:"childremoved",child:null};class st extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new C,t=new Xt,n=new Ii,r=new C(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(ro,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wi.copy(e):Wi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Mi,Wi,this.up):$t.lookAt(Wi,Mi,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix($t),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ao),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ao),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){const f=l[d];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),d=s(e.textures),h=s(e.images),f=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(o){const l=[];for(const d in o){const h=o[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}st.DEFAULT_UP=new C(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new C,jt=new C,ta=new C,Zt=new C,$n=new C,jn=new C,so=new C,na=new C,ia=new C,ra=new C,aa=new $e,sa=new $e,oa=new $e;class Ft{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ut.subVectors(r,t),jt.subVectors(n,t),ta.subVectors(e,t);const s=Ut.dot(Ut),o=Ut.dot(jt),l=Ut.dot(ta),d=jt.dot(jt),h=jt.dot(ta),f=s*d-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,m=(d*l-o*h)*p,g=(s*h-o*l)*p;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zt)===null?!1:Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,Zt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Zt.x),l.addScaledVector(s,Zt.y),l.addScaledVector(o,Zt.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return aa.setScalar(0),sa.setScalar(0),oa.setScalar(0),aa.fromBufferAttribute(e,t),sa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(aa,a.x),s.addScaledVector(sa,a.y),s.addScaledVector(oa,a.z),s}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),jt.subVectors(e,t),Ut.cross(jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Ut.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Ft.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;$n.subVectors(r,n),jn.subVectors(a,n),na.subVectors(e,n);const l=$n.dot(na),d=jn.dot(na);if(l<=0&&d<=0)return t.copy(n);ia.subVectors(e,r);const h=$n.dot(ia),f=jn.dot(ia);if(h>=0&&f<=h)return t.copy(r);const p=l*f-h*d;if(p<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector($n,s);ra.subVectors(e,a);const m=$n.dot(ra),g=jn.dot(ra);if(g>=0&&m<=g)return t.copy(a);const v=m*d-l*g;if(v<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(n).addScaledVector(jn,o);const c=h*g-m*f;if(c<=0&&f-h>=0&&m-g>=0)return so.subVectors(a,r),o=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(so,o);const u=1/(c+v+p);return s=v*u,o=p*u,t.copy(n).addScaledVector($n,s).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function la(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=ad(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=la(s,a,e+1/3),this.g=la(s,a,e),this.b=la(s,a,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Ht){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Xe.fromWorkingColorSpace(ft.copy(this),e),Math.round(vt(ft.r*255,0,255))*65536+Math.round(vt(ft.g*255,0,255))*256+Math.round(vt(ft.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,a=ft.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,d;const h=(o+s)/2;if(o===s)l=0,d=0;else{const f=s-o;switch(d=h<=.5?f/(s+o):f/(2-s-o),s){case n:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-n)/f+2;break;case a:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Ht){Xe.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Xi);const n=Wr(dn.h,Xi.h,t),r=Wr(dn.s,Xi.s,t),a=Wr(dn.l,Xi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Ie;Ie.NAMES=vl;let bd=0;class kn extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=ii,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Er extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new C,qi=new Le;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ys,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),a=xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ys&&(e.usage=this.usage),e}}class yl extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ml extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ed=0;const Ct=new tt,ca=new st,Zn=new C,At=new Li,Si=new Li,ct=new C;class ht extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ml(e)?Ml:yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];At.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(At.min,Si.min),At.expandByPoint(ct),ct.addVectors(At.max,Si.max),At.expandByPoint(ct)):(At.expandByPoint(Si.min),At.expandByPoint(Si.max))}At.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)ct.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)ct.fromBufferAttribute(o,d),l&&(Zn.fromBufferAttribute(e,d),ct.add(Zn)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const d=new C,h=new C,f=new C,p=new Le,m=new Le,g=new Le,v=new C,c=new C;function u(P,W,_){d.fromBufferAttribute(n,P),h.fromBufferAttribute(n,W),f.fromBufferAttribute(n,_),p.fromBufferAttribute(a,P),m.fromBufferAttribute(a,W),g.fromBufferAttribute(a,_),h.sub(d),f.sub(d),m.sub(p),g.sub(p);const x=1/(m.x*g.y-g.x*m.y);isFinite(x)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(x),c.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(x),o[P].add(v),o[W].add(v),o[_].add(v),l[P].add(c),l[W].add(c),l[_].add(c))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,W=b.length;P<W;++P){const _=b[P],x=_.start,F=_.count;for(let D=x,z=x+F;D<z;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const M=new C,E=new C,U=new C,A=new C;function T(P){U.fromBufferAttribute(r,P),A.copy(U);const W=o[P];M.copy(W),M.sub(U.multiplyScalar(U.dot(W))).normalize(),E.crossVectors(A,W);const x=E.dot(l[P])<0?-1:1;s.setXYZW(P,M.x,M.y,M.z,x)}for(let P=0,W=b.length;P<W;++P){const _=b[P],x=_.start,F=_.count;for(let D=x,z=x+F;D<z;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new C,a=new C,s=new C,o=new C,l=new C,d=new C,h=new C,f=new C;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),c=e.getX(p+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,c),h.subVectors(s,a),f.subVectors(r,a),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,c),o.add(h),l.add(h),d.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(c,d.x,d.y,d.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),h.subVectors(s,a),f.subVectors(r,a),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const d=o.array,h=o.itemSize,f=o.normalized,p=new d.constructor(l.length*h);let m=0,g=0;for(let v=0,c=l.length;v<c;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let u=0;u<h;u++)p[g++]=d[m++]}return new Wt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],d=e(l,n);t.setAttribute(o,d)}const a=this.morphAttributes;for(const o in a){const l=[],d=a[o];for(let h=0,f=d.length;h<f;h++){const p=d[h],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const d=s[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const d=n[l];e.data.attributes[l]=d.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],h=[];for(let f=0,p=d.length;f<p;f++){const m=d[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(t))}const a=e.morphAttributes;for(const d in a){const h=[],f=a[d];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let d=0,h=s.length;d<h;d++){const f=s[d];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new tt,Sn=new Ts,Yi=new Di,lo=new C,Ki=new C,$i=new C,ji=new C,da=new C,Zi=new C,co=new C,Ji=new C;class Ne extends st{constructor(e=new ht,t=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Zi.set(0,0,0);for(let l=0,d=a.length;l<d;l++){const h=o[l],f=a[l];h!==0&&(da.fromBufferAttribute(f,e),s?Zi.addScaledVector(da,h):Zi.addScaledVector(da.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(a),Sn.copy(e.ray).recast(e.near),!(Yi.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(Yi,lo)===null||Sn.origin.distanceToSquared(lo)>(e.far-e.near)**2))&&(oo.copy(a).invert(),Sn.copy(e.ray).applyMatrix4(oo),!(n.boundingBox!==null&&Sn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,d=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const c=p[g],u=s[c.materialIndex],b=Math.max(c.start,m.start),M=Math.min(o.count,Math.min(c.start+c.count,m.start+m.count));for(let E=b,U=M;E<U;E+=3){const A=o.getX(E),T=o.getX(E+1),P=o.getX(E+2);r=Qi(this,u,e,n,d,h,f,A,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let c=g,u=v;c<u;c+=3){const b=o.getX(c),M=o.getX(c+1),E=o.getX(c+2);r=Qi(this,s,e,n,d,h,f,b,M,E),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const c=p[g],u=s[c.materialIndex],b=Math.max(c.start,m.start),M=Math.min(l.count,Math.min(c.start+c.count,m.start+m.count));for(let E=b,U=M;E<U;E+=3){const A=E,T=E+1,P=E+2;r=Qi(this,u,e,n,d,h,f,A,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let c=g,u=v;c<u;c+=3){const b=c,M=c+1,E=c+2;r=Qi(this,s,e,n,d,h,f,b,M,E),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}}}function wd(i,e,t,n,r,a,s,o){let l;if(e.side===Mt?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===mn,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ji);return d<t.near||d>t.far?null:{distance:d,point:Ji.clone(),object:i}}function Qi(i,e,t,n,r,a,s,o,l,d){i.getVertexPosition(o,Ki),i.getVertexPosition(l,$i),i.getVertexPosition(d,ji);const h=wd(i,e,t,n,Ki,$i,ji,co);if(h){const f=new C;Ft.getBarycoord(co,Ki,$i,ji,f),r&&(h.uv=Ft.getInterpolatedAttribute(r,o,l,d,f,new Le)),a&&(h.uv1=Ft.getInterpolatedAttribute(a,o,l,d,f,new Le)),s&&(h.normal=Ft.getInterpolatedAttribute(s,o,l,d,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:d,normal:new C,materialIndex:0};Ft.getNormal(Ki,$i,ji,p.normal),h.face=p,h.barycoord=f}return h}class Bt extends ht{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],d=[],h=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2));function g(v,c,u,b,M,E,U,A,T,P,W){const _=E/T,x=U/P,F=E/2,D=U/2,z=A/2,X=T+1,H=P+1;let $=0,G=0;const le=new C;for(let ae=0;ae<H;ae++){const ge=ae*x-D;for(let He=0;He<X;He++){const qe=He*_-F;le[v]=qe*b,le[c]=ge*M,le[u]=z,d.push(le.x,le.y,le.z),le[v]=0,le[c]=0,le[u]=A>0?1:-1,h.push(le.x,le.y,le.z),f.push(He/T),f.push(1-ae/P),$+=1}}for(let ae=0;ae<P;ae++)for(let ge=0;ge<T;ge++){const He=p+ge+X*ae,qe=p+ge+X*(ae+1),q=p+(ge+1)+X*(ae+1),J=p+(ge+1)+X*ae;l.push(He,qe,J),l.push(qe,q,J),G+=6}o.addGroup(m,G,W),m+=G,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ad={clone:ui,merge:mt};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bl extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=en}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new C,ho=new Le,uo=new Le;class yt extends bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,ho,uo),t.subVectors(uo,ho)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,d=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/d,r*=s.width/l,n*=s.height/d}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,Qn=1;class Pd extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yt(Jn,Qn,e,t);r.layers=this.layers,this.add(r);const a=new yt(Jn,Qn,e,t);a.layers=this.layers,this.add(a);const s=new yt(Jn,Qn,e,t);s.layers=this.layers,this.add(s);const o=new yt(Jn,Qn,e,t);o.layers=this.layers,this.add(o);const l=new yt(Jn,Qn,e,t);l.layers=this.layers,this.add(l);const d=new yt(Jn,Qn,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const d of t)this.remove(d);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,d,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class El extends St{constructor(e,t,n,r,a,s,o,l,d,h){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,r,a,s,o,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new El(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bt(5,5,5),a=new gn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:fn});a.uniforms.tEquirect.value=t;const s=new Ne(r,a),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Nt),new Pd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const ha=new C,Ld=new C,Dd=new Pe;class Tn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ha.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ha),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dd.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new Di,er=new C;class As{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,a=new Tn,s=new Tn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],d=r[4],h=r[5],f=r[6],p=r[7],m=r[8],g=r[9],v=r[10],c=r[11],u=r[12],b=r[13],M=r[14],E=r[15];if(n[0].setComponents(l-a,p-d,c-m,E-u).normalize(),n[1].setComponents(l+a,p+d,c+m,E+u).normalize(),n[2].setComponents(l+s,p+h,c+g,E+b).normalize(),n[3].setComponents(l-s,p-h,c-g,E-b).normalize(),n[4].setComponents(l-o,p-f,c-v,E-M).normalize(),t===en)n[5].setComponents(l+o,p+f,c+v,E+M).normalize();else if(t===Sr)n[5].setComponents(o,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(e){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(er.x=r.normal.x>0?e.max.x:e.min.x,er.y=r.normal.y>0?e.max.y:e.min.y,er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ud(i){const e=new WeakMap;function t(o,l){const d=o.array,h=o.usage,f=d.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,d,h),o.onUploadCallback();let m;if(d instanceof Float32Array)m=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=i.SHORT;else if(d instanceof Uint32Array)m=i.UNSIGNED_INT;else if(d instanceof Int32Array)m=i.INT;else if(d instanceof Int8Array)m=i.BYTE;else if(d instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,d){const h=l.array,f=l.updateRanges;if(i.bindBuffer(d,o),f.length===0)i.bufferSubData(d,0,h);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){const g=f[p],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,f[p]=v)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];i.bufferSubData(d,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,l));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,l),d.version=o.version}}return{get:r,remove:a,update:s}}class mi extends ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),d=o+1,h=l+1,f=e/o,p=t/l,m=[],g=[],v=[],c=[];for(let u=0;u<h;u++){const b=u*p-s;for(let M=0;M<d;M++){const E=M*f-a;g.push(E,-b,0),v.push(0,0,1),c.push(M/o),c.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const M=b+d*u,E=b+d*(u+1),U=b+1+d*(u+1),A=b+1+d*u;m.push(M,E,A),m.push(E,U,A)}this.setIndex(m),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
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
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,$d=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rh=`#define PI 3.141592653589793
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
} // validated`,ah=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`
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
}`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yh=`#ifdef USE_FOG
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
#endif`,Sh=`#ifdef USE_GRADIENTMAP
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
}`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Th=`uniform bool receiveShadow;
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
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Dh=`struct PhysicalMaterial {
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
}`,Uh=`
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wh=`#if defined( USE_POINTS_UV )
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
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iu=`#ifdef USE_NORMALMAP
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
#endif`,ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,yu=`#ifdef USE_SKINNING
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
#endif`,Su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Au=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ru=`#ifdef USE_TRANSMISSION
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
#endif`,Cu=`#ifdef USE_TRANSMISSION
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
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nu=`uniform sampler2D t2D;
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
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`#include <common>
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
}`,Hu=`#if DEPTH_PACKING == 3200
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
}`,Gu=`#define DISTANCE
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
}`,Vu=`#define DISTANCE
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
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qu=`uniform float scale;
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
}`,Yu=`uniform vec3 diffuse;
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
}`,Ku=`#include <common>
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
}`,$u=`uniform vec3 diffuse;
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
}`,ju=`#define LAMBERT
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
}`,Zu=`#define LAMBERT
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
}`,Ju=`#define MATCAP
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
}`,Qu=`#define MATCAP
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
}`,ef=`#define NORMAL
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
}`,tf=`#define NORMAL
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
}`,nf=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,af=`#define STANDARD
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
}`,sf=`#define STANDARD
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
}`,of=`#define TOON
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
}`,lf=`#define TOON
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
}`,cf=`uniform float size;
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
}`,df=`uniform vec3 diffuse;
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
}`,hf=`#include <common>
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
}`,uf=`uniform vec3 color;
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
}`,ff=`uniform float rotation;
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
}`,pf=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:Nd,alphahash_pars_fragment:Fd,alphamap_fragment:Od,alphamap_pars_fragment:kd,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:Hd,aomap_pars_fragment:Gd,batching_pars_vertex:Vd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:Kd,bumpmap_pars_fragment:$d,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Qd,color_fragment:eh,color_pars_fragment:th,color_pars_vertex:nh,color_vertex:ih,common:rh,cube_uv_reflection_fragment:ah,defaultnormal_vertex:sh,displacementmap_pars_vertex:oh,displacementmap_vertex:lh,emissivemap_fragment:ch,emissivemap_pars_fragment:dh,colorspace_fragment:hh,colorspace_pars_fragment:uh,envmap_fragment:fh,envmap_common_pars_fragment:ph,envmap_pars_fragment:mh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:Ah,envmap_vertex:_h,fog_vertex:xh,fog_pars_vertex:vh,fog_fragment:yh,fog_pars_fragment:Mh,gradientmap_pars_fragment:Sh,lightmap_pars_fragment:bh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:wh,lights_pars_begin:Th,lights_toon_fragment:Rh,lights_toon_pars_fragment:Ch,lights_phong_fragment:Ph,lights_phong_pars_fragment:Ih,lights_physical_fragment:Lh,lights_physical_pars_fragment:Dh,lights_fragment_begin:Uh,lights_fragment_maps:Nh,lights_fragment_end:Fh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:zh,map_fragment:Hh,map_pars_fragment:Gh,map_particle_fragment:Vh,map_particle_pars_fragment:Wh,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:qh,morphinstance_vertex:Yh,morphcolor_vertex:Kh,morphnormal_vertex:$h,morphtarget_pars_vertex:jh,morphtarget_vertex:Zh,normal_fragment_begin:Jh,normal_fragment_maps:Qh,normal_pars_fragment:eu,normal_pars_vertex:tu,normal_vertex:nu,normalmap_pars_fragment:iu,clearcoat_normal_fragment_begin:ru,clearcoat_normal_fragment_maps:au,clearcoat_pars_fragment:su,iridescence_pars_fragment:ou,opaque_fragment:lu,packing:cu,premultiplied_alpha_fragment:du,project_vertex:hu,dithering_fragment:uu,dithering_pars_fragment:fu,roughnessmap_fragment:pu,roughnessmap_pars_fragment:mu,shadowmap_pars_fragment:gu,shadowmap_pars_vertex:_u,shadowmap_vertex:xu,shadowmask_pars_fragment:vu,skinbase_vertex:yu,skinning_pars_vertex:Mu,skinning_vertex:Su,skinnormal_vertex:bu,specularmap_fragment:Eu,specularmap_pars_fragment:wu,tonemapping_fragment:Tu,tonemapping_pars_fragment:Au,transmission_fragment:Ru,transmission_pars_fragment:Cu,uv_pars_fragment:Pu,uv_pars_vertex:Iu,uv_vertex:Lu,worldpos_vertex:Du,background_vert:Uu,background_frag:Nu,backgroundCube_vert:Fu,backgroundCube_frag:Ou,cube_vert:ku,cube_frag:Bu,depth_vert:zu,depth_frag:Hu,distanceRGBA_vert:Gu,distanceRGBA_frag:Vu,equirect_vert:Wu,equirect_frag:Xu,linedashed_vert:qu,linedashed_frag:Yu,meshbasic_vert:Ku,meshbasic_frag:$u,meshlambert_vert:ju,meshlambert_frag:Zu,meshmatcap_vert:Ju,meshmatcap_frag:Qu,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:nf,meshphong_frag:rf,meshphysical_vert:af,meshphysical_frag:sf,meshtoon_vert:of,meshtoon_frag:lf,points_vert:cf,points_frag:df,shadow_vert:hf,shadow_frag:uf,sprite_vert:ff,sprite_frag:pf},te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Gt={basic:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:mt([te.points,te.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:mt([te.common,te.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:mt([te.sprite,te.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:mt([te.common,te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:mt([te.lights,te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Gt.physical={uniforms:mt([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const tr={r:0,b:0,g:0},En=new Xt,mf=new tt;function gf(i,e,t,n,r,a,s){const o=new Ie(0);let l=a===!0?0:1,d,h,f=null,p=0,m=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const E=g(b);E===null?u(o,l):E&&E.isColor&&(u(E,1),M=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function c(b,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===Cr)?(h===void 0&&(h=new Ne(new Bt(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ui(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),En.copy(M.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(En)),h.material.toneMapped=Xe.getTransfer(E.colorSpace)!==et,(f!==E||p!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,p=E.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new Ne(new mi(2,2),new gn({name:"BackgroundMaterial",uniforms:ui(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=E,p=E.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function u(b,M){b.getRGB(tr,Sl(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:v,addToRenderList:c}}function _f(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let a=r,s=!1;function o(_,x,F,D,z){let X=!1;const H=f(D,F,x);a!==H&&(a=H,d(a.object)),X=m(_,D,F,z),X&&g(_,D,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,E(_,x,F,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function d(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,x,F){const D=F.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let X=z[x.id];X===void 0&&(X={},z[x.id]=X);let H=X[D];return H===void 0&&(H=p(l()),X[D]=H),H}function p(_){const x=[],F=[],D=[];for(let z=0;z<t;z++)x[z]=0,F[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:F,attributeDivisors:D,object:_,attributes:{},index:null}}function m(_,x,F,D){const z=a.attributes,X=x.attributes;let H=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){const ae=z[G];let ge=X[G];if(ge===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;H++}return a.attributesNum!==H||a.index!==D}function g(_,x,F,D){const z={},X=x.attributes;let H=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){let ae=X[G];ae===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),z[G]=ge,H++}a.attributes=z,a.attributesNum=H,a.index=D}function v(){const _=a.newAttributes;for(let x=0,F=_.length;x<F;x++)_[x]=0}function c(_){u(_,0)}function u(_,x){const F=a.newAttributes,D=a.enabledAttributes,z=a.attributeDivisors;F[_]=1,D[_]===0&&(i.enableVertexAttribArray(_),D[_]=1),z[_]!==x&&(i.vertexAttribDivisor(_,x),z[_]=x)}function b(){const _=a.newAttributes,x=a.enabledAttributes;for(let F=0,D=x.length;F<D;F++)x[F]!==_[F]&&(i.disableVertexAttribArray(F),x[F]=0)}function M(_,x,F,D,z,X,H){H===!0?i.vertexAttribIPointer(_,x,F,z,X):i.vertexAttribPointer(_,x,F,D,z,X)}function E(_,x,F,D){v();const z=D.attributes,X=F.getAttributes(),H=x.defaultAttributeValues;for(const $ in X){const G=X[$];if(G.location>=0){let le=z[$];if(le===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){const ae=le.normalized,ge=le.itemSize,He=e.get(le);if(He===void 0)continue;const qe=He.buffer,q=He.type,J=He.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||le.gpuType===vs;if(le.isInterleavedBufferAttribute){const ce=le.data,Ae=ce.stride,Me=le.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)u(G.location+Fe,ce.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)c(G.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Fe=0;Fe<G.locationSize;Fe++)M(G.location+Fe,ge/G.locationSize,q,ae,Ae*J,(Me+ge/G.locationSize*Fe)*J,pe)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)u(G.location+ce,le.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<G.locationSize;ce++)c(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ce=0;ce<G.locationSize;ce++)M(G.location+ce,ge/G.locationSize,q,ae,ge*J,ge/G.locationSize*ce*J,pe)}}else if(H!==void 0){const ae=H[$];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(G.location,ae);break;case 3:i.vertexAttrib3fv(G.location,ae);break;case 4:i.vertexAttrib4fv(G.location,ae);break;default:i.vertexAttrib1fv(G.location,ae)}}}}b()}function U(){P();for(const _ in n){const x=n[_];for(const F in x){const D=x[F];for(const z in D)h(D[z].object),delete D[z];delete x[F]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const x=n[_.id];for(const F in x){const D=x[F];for(const z in D)h(D[z].object),delete D[z];delete x[F]}delete n[_.id]}function T(_){for(const x in n){const F=n[x];if(F[_.id]===void 0)continue;const D=F[_.id];for(const z in D)h(D[z].object),delete D[z];delete F[_.id]}}function P(){W(),s=!0,a!==r&&(a=r,d(a.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:W,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:c,disableUnusedAttributes:b}}function xf(i,e,t){let n;function r(d){n=d}function a(d,h){i.drawArrays(n,d,h),t.update(h,n,1)}function s(d,h,f){f!==0&&(i.drawArraysInstanced(n,d,h,f),t.update(h,n,f))}function o(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,n,1)}function l(d,h,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)s(d[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,d,0,h,0,p,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];for(let v=0;v<p.length;v++)t.update(g,n,p[v])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Ot&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qt&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=l(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:c,maxAttributes:u,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:U,maxSamples:A}}function yf(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Tn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||r;return r=p,n=f.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,v=f.clipIntersection,c=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||a&&!c)a?h(null):d();else{const b=a?0:n,M=b*4;let E=u.clippingState||null;l.value=E,E=h(g,p,M,m);for(let U=0;U!==M;++U)E[U]=t[U];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,g){const v=f!==null?f.length:0;let c=null;if(v!==0){if(c=l.value,g!==!0||c===null){const u=m+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(c===null||c.length<u)&&(c=new Float32Array(u));for(let M=0,E=m;M!==v;++M,E+=4)s.copy(f[M]).applyMatrix4(b,o),s.normal.toArray(c,E),c[E+3]=s.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,c}}function Mf(i){let e=new WeakMap;function t(s,o){return o===Da?s.mapping=li:o===Ua&&(s.mapping=ci),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Da||o===Ua)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const d=new Id(l.height);return d.fromEquirectangularTexture(i,s),e.set(s,d),s.addEventListener("dispose",r),t(d.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Tl extends bl{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,s=a+d*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,fo=[.125,.215,.35,.446,.526,.582],Cn=20,ua=new Tl,po=new Ie;let fa=null,pa=0,ma=0,ga=!1;const An=(1+Math.sqrt(5))/2,ei=1/An,mo=[new C(-An,ei,0),new C(An,ei,0),new C(-ei,0,An),new C(ei,0,An),new C(0,An,-ei),new C(0,An,ei),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=ga,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ci,format:Ot,colorSpace:_n,depthBuffer:!1},r=_o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_o(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(a)),this._blurMaterial=bf(a,e,t)}return r}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,r){const o=new yt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(po),h.toneMapping=pn,h.autoClear=!1;const m=new Er({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),g=new Ne(new Bt,m);let v=!1;const c=e.background;c?c.isColor&&(m.color.copy(c),e.background=null,v=!0):(m.color.copy(po),v=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(d[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,d[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,d[u]));const M=this._cubeSize;nr(r,b*M,u>2?M:0,M,M),h.setRenderTarget(r),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=c}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ne(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=mo[(r-a-1)%mo.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ne(this._lodPlanes[r],d),p=d.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),v=a/g,c=isFinite(a)?1+Math.floor(h*v):Cn;c>Cn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Cn}`);const u=[];let b=0;for(let T=0;T<Cn;++T){const P=T/v,W=Math.exp(-P*P/2);u.push(W),T===0?b+=W:T<c&&(b+=2*W)}for(let T=0;T<u.length;T++)u[T]=u[T]/b;p.envMap.value=e.texture,p.samples.value=c,p.weights.value=u,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const E=this._sizeLods[r],U=3*E*(r>M-ni?r-M+ni:0),A=4*(this._cubeSize-E);nr(t,U,A,3*E,2*E),l.setRenderTarget(t),l.render(f,ua)}}function Sf(i){const e=[],t=[],n=[];let r=i;const a=i-ni+1+fo.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-ni?l=fo[s-i+ni-1]:s===0&&(l=0),n.push(l);const d=1/(o-2),h=-d,f=1+d,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,v=3,c=2,u=1,b=new Float32Array(v*g*m),M=new Float32Array(c*g*m),E=new Float32Array(u*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,P=A>2?0:-1,W=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(W,v*g*A),M.set(p,c*g*A);const _=[A,A,A,A,A,A];E.set(_,u*g*A)}const U=new ht;U.setAttribute("position",new Wt(b,v)),U.setAttribute("uv",new Wt(M,c)),U.setAttribute("faceIndex",new Wt(E,u)),e.push(U),r>ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _o(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bf(i,e,t){const n=new Float32Array(Cn),r=new C(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function xo(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function vo(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Rs(){return`

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
	`}function Ef(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,d=l===Da||l===Ua,h=l===li||l===ci;if(d||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new go(i)),f=d?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return d&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new go(i)),f=d?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&l++;return l===d}function a(o){const l=o.target;l.removeEventListener("dispose",a);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function wf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tf(i,e,t,n){const r={},a=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let c=0,u=v.length;c<u;c++)e.remove(v[c])}p.removeEventListener("dispose",s),delete r[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let c=0,u=v.length;c<u;c++)e.update(v[c],i.ARRAY_BUFFER)}}function d(f){const p=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let M=0,E=b.length;M<E;M+=3){const U=b[M+0],A=b[M+1],T=b[M+2];p.push(U,A,A,T,T,U)}}else if(g!==void 0){const b=g.array;v=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const U=M+0,A=M+1,T=M+2;p.push(U,A,A,T,T,U)}}else return;const c=new(ml(p)?Ml:yl)(p,1);c.version=v;const u=a.get(f);u&&e.remove(u),a.set(f,c)}function h(f){const p=a.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&d(f)}else d(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Af(i,e,t){let n;function r(p){n=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,m){i.drawElements(n,m,a,p*s),t.update(m,n,1)}function d(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,p*s,g),t.update(m,n,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,p,0,g);let c=0;for(let u=0;u<g;u++)c+=m[u];t.update(c,n,1)}function f(p,m,g,v){if(g===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let u=0;u<p.length;u++)d(p[u]/s,m[u],v[u]);else{c.multiDrawElementsInstancedWEBGL(n,m,0,a,p,0,v,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b];for(let b=0;b<v.length;b++)t.update(u,n,v[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Rf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cf(i,e,t){const n=new WeakMap,r=new $e;function a(s,o,l){const d=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,c=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),c===!0&&(E=3);let U=o.attributes.position.count*E,A=1;U>e.maxTextureSize&&(A=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const T=new Float32Array(U*A*4*f),P=new _l(T,U,A,f);P.type=Qt,P.needsUpdate=!0;const W=E*4;for(let x=0;x<f;x++){const F=u[x],D=b[x],z=M[x],X=U*A*4*x;for(let H=0;H<F.count;H++){const $=H*W;g===!0&&(r.fromBufferAttribute(F,H),T[X+$+0]=r.x,T[X+$+1]=r.y,T[X+$+2]=r.z,T[X+$+3]=0),v===!0&&(r.fromBufferAttribute(D,H),T[X+$+4]=r.x,T[X+$+5]=r.y,T[X+$+6]=r.z,T[X+$+7]=0),c===!0&&(r.fromBufferAttribute(z,H),T[X+$+8]=r.x,T[X+$+9]=r.y,T[X+$+10]=r.z,T[X+$+11]=z.itemSize===4?r.w:1)}}p={count:f,texture:P,size:new Le(U,A)},n.set(o,p),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let c=0;c<d.length;c++)g+=d[c];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",d)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function Pf(i,e,t,n){let r=new WeakMap;function a(l){const d=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return f}function s(){r=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:s}}class Al extends St{constructor(e,t,n,r,a,s,o,l,d,h=ri){if(h!==ri&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ri&&(n=Dn),n===void 0&&h===hi&&(n=di),super(null,r,a,s,o,l,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rl=new St,yo=new Al(1,1),Cl=new _l,Pl=new md,Il=new El,Mo=[],So=[],bo=new Float32Array(16),Eo=new Float32Array(9),wo=new Float32Array(4);function gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Mo[r];if(a===void 0&&(a=new Float32Array(r),Mo[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ir(i,e){let t=So[e];t===void 0&&(t=new Int32Array(e),So[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function If(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;wo.set(n),i.uniformMatrix2fv(this.addr,!1,wo),lt(t,n)}}function Ff(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Eo.set(n),i.uniformMatrix3fv(this.addr,!1,Eo),lt(t,n)}}function Of(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;bo.set(n),i.uniformMatrix4fv(this.addr,!1,bo),lt(t,n)}}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Gf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(yo.compareFunction=pl,a=yo):a=Rl,t.setTexture2D(e||a,r)}function Yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pl,r)}function Kf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Il,r)}function $f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cl,r)}function jf(i){switch(i){case 5126:return If;case 35664:return Lf;case 35665:return Df;case 35666:return Uf;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return kf;case 35667:case 35671:return Bf;case 35668:case 35672:return zf;case 35669:case 35673:return Hf;case 5125:return Gf;case 36294:return Vf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return $f}}function Zf(i,e){i.uniform1fv(this.addr,e)}function Jf(i,e){const t=gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Qf(i,e){const t=gi(e,this.size,3);i.uniform3fv(this.addr,t)}function ep(i,e){const t=gi(e,this.size,4);i.uniform4fv(this.addr,t)}function tp(i,e){const t=gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function np(i,e){const t=gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ip(i,e){const t=gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rp(i,e){i.uniform1iv(this.addr,e)}function ap(i,e){i.uniform2iv(this.addr,e)}function sp(i,e){i.uniform3iv(this.addr,e)}function op(i,e){i.uniform4iv(this.addr,e)}function lp(i,e){i.uniform1uiv(this.addr,e)}function cp(i,e){i.uniform2uiv(this.addr,e)}function dp(i,e){i.uniform3uiv(this.addr,e)}function hp(i,e){i.uniform4uiv(this.addr,e)}function up(i,e,t){const n=this.cache,r=e.length,a=Ir(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Rl,a[s])}function fp(i,e,t){const n=this.cache,r=e.length,a=Ir(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Pl,a[s])}function pp(i,e,t){const n=this.cache,r=e.length,a=Ir(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Il,a[s])}function mp(i,e,t){const n=this.cache,r=e.length,a=Ir(t,r);ot(n,a)||(i.uniform1iv(this.addr,a),lt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Cl,a[s])}function gp(i){switch(i){case 5126:return Zf;case 35664:return Jf;case 35665:return Qf;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return sp;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return dp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jf(t.type)}}class xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gp(t.type)}}class vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function To(i,e){i.seq.push(e),i.map[e.id]=e}function yp(i,e,t){const n=i.name,r=n.length;for(_a.lastIndex=0;;){const a=_a.exec(n),s=_a.lastIndex;let o=a[1];const l=a[2]==="]",d=a[3];if(l&&(o=o|0),d===void 0||d==="["&&s+2===r){To(t,d===void 0?new _p(o,i,e):new xp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new vp(o),To(t,f)),t=f}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);yp(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Ao(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mp=37297;let Sp=0;function bp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Ep(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===Mr&&t===yr?n="LinearDisplayP3ToLinearSRGB":e===yr&&t===Mr&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case Pr:return[n,"LinearTransferOETF"];case Ht:case ws:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ro(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bp(i.getShaderSource(e),s)}else return r}function wp(i,e){const t=Ep(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Tp(i,e){let t;switch(e){case Hc:t="Linear";break;case Gc:t="Reinhard";break;case Vc:t="Cineon";break;case Wc:t="ACESFilmic";break;case qc:t="AgX";break;case Yc:t="Neutral";break;case Xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new C;function Ap(){Xe.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Cp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function wi(i){return i!==""}function Co(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function ds(i){return i.replace(Ip,Dp)}const Lp=new Map;function Dp(i,e){let t=Ce[e];if(t===void 0){const n=Lp.get(e);if(n!==void 0)t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ds(t)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(i){return i.replace(Up,Np)}function Np(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Lo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Fp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jt&&(e="SHADOWMAP_TYPE_VSM"),e}function Op(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Bp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Bc:e="ENVMAP_BLENDING_MIX";break;case zc:e="ENVMAP_BLENDING_ADD";break}return e}function zp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hp(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Fp(t),d=Op(t),h=kp(t),f=Bp(t),p=zp(t),m=Rp(t),g=Cp(a),v=r.createProgram();let c,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),c.length>0&&(c+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),u.length>0&&(u+=`
`)):(c=[Lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),u=[Lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==pn?Tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,wp("linearToOutputTexel",t.outputColorSpace),Ap(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),s=ds(s),s=Co(s,t),s=Po(s,t),o=ds(o),o=Co(o,t),o=Po(o,t),s=Io(s),o=Io(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,c=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,u=["#define varying in",t.glslVersion===Ks?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ks?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=b+c+s,E=b+u+o,U=Ao(r,r.VERTEX_SHADER,M),A=Ao(r,r.FRAGMENT_SHADER,E);r.attachShader(v,U),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(x){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(U).trim(),z=r.getShaderInfoLog(A).trim();let X=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,U,A);else{const $=Ro(r,U,"vertex"),G=Ro(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+F+`
`+$+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||z==="")&&(H=!1);H&&(x.diagnostics={runnable:X,programLog:F,vertexShader:{log:D,prefix:c},fragmentShader:{log:z,prefix:u}})}r.deleteShader(U),r.deleteShader(A),P=new mr(r,v),W=Pp(r,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,Mp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}let Gp=0;class Vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wp(e),t.set(e,n)),n}}class Wp{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}}function Xp(i,e,t,n,r,a,s){const o=new xl,l=new Vp,d=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(_){return d.add(_),_===0?"uv":`uv${_}`}function u(_,x,F,D,z){const X=D.fog,H=z.geometry,$=_.isMeshStandardMaterial?D.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),le=G&&G.mapping===Cr?G.image.height:null,ae=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,He=ge!==void 0?ge.length:0;let qe=0;H.morphAttributes.position!==void 0&&(qe=1),H.morphAttributes.normal!==void 0&&(qe=2),H.morphAttributes.color!==void 0&&(qe=3);let q,J,pe,ce;if(ae){const _t=Gt[ae];q=_t.vertexShader,J=_t.fragmentShader}else q=_.vertexShader,J=_.fragmentShader,l.update(_),pe=l.getVertexShaderID(_),ce=l.getFragmentShaderID(_);const Ae=i.getRenderTarget(),Me=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,Ke=!!_.map,Oe=!!_.matcap,R=!!G,bt=!!_.aoMap,De=!!_.lightMap,Be=!!_.bumpMap,be=!!_.normalMap,Je=!!_.displacementMap,Te=!!_.emissiveMap,w=!!_.metalnessMap,y=!!_.roughnessMap,O=_.anisotropy>0,K=_.clearcoat>0,Z=_.dispersion>0,Y=_.iridescence>0,_e=_.sheen>0,ne=_.transmission>0,de=O&&!!_.anisotropyMap,ze=K&&!!_.clearcoatMap,Q=K&&!!_.clearcoatNormalMap,he=K&&!!_.clearcoatRoughnessMap,Ee=Y&&!!_.iridescenceMap,we=Y&&!!_.iridescenceThicknessMap,ue=_e&&!!_.sheenColorMap,Ue=_e&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Ze=!!_.specularColorMap,I=!!_.specularIntensityMap,se=ne&&!!_.transmissionMap,V=ne&&!!_.thicknessMap,j=!!_.gradientMap,ie=!!_.alphaMap,oe=_.alphaTest>0,ke=!!_.alphaHash,rt=!!_.extensions;let gt=pn;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ge={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:J,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&z._colorsTexture!==null,instancing:Me,instancingColor:Me&&z.instanceColor!==null,instancingMorph:Me&&z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:_n,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:Oe,envMap:R,envMapMode:R&&G.mapping,envMapCubeUVHeight:le,aoMap:bt,lightMap:De,bumpMap:Be,normalMap:be,displacementMap:m&&Je,emissiveMap:Te,normalMapObjectSpace:be&&_.normalMapType===Zc,normalMapTangentSpace:be&&_.normalMapType===fl,metalnessMap:w,roughnessMap:y,anisotropy:O,anisotropyMap:de,clearcoat:K,clearcoatMap:ze,clearcoatNormalMap:Q,clearcoatRoughnessMap:he,dispersion:Z,iridescence:Y,iridescenceMap:Ee,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:ue,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Ze,specularIntensityMap:I,transmission:ne,transmissionMap:se,thicknessMap:V,gradientMap:j,opaque:_.transparent===!1&&_.blending===ii&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:oe,alphaHash:ke,combine:_.combine,mapUv:Ke&&c(_.map.channel),aoMapUv:bt&&c(_.aoMap.channel),lightMapUv:De&&c(_.lightMap.channel),bumpMapUv:Be&&c(_.bumpMap.channel),normalMapUv:be&&c(_.normalMap.channel),displacementMapUv:Je&&c(_.displacementMap.channel),emissiveMapUv:Te&&c(_.emissiveMap.channel),metalnessMapUv:w&&c(_.metalnessMap.channel),roughnessMapUv:y&&c(_.roughnessMap.channel),anisotropyMapUv:de&&c(_.anisotropyMap.channel),clearcoatMapUv:ze&&c(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&c(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&c(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&c(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&c(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&c(_.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&c(_.sheenRoughnessMap.channel),specularMapUv:Re&&c(_.specularMap.channel),specularColorMapUv:Ze&&c(_.specularColorMap.channel),specularIntensityMapUv:I&&c(_.specularIntensityMap.channel),transmissionMapUv:se&&c(_.transmissionMap.channel),thicknessMapUv:V&&c(_.thicknessMap.channel),alphaMapUv:ie&&c(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Ke||ie),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vt,flipSided:_.side===Mt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=d.has(1),Ge.vertexUv2s=d.has(2),Ge.vertexUv3s=d.has(3),d.clear(),Ge}function b(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)x.push(F),x.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(M(x,_),E(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function M(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function E(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),_.push(o.mask)}function U(_){const x=v[_.type];let F;if(x){const D=Gt[x];F=Ad.clone(D.uniforms)}else F=_.uniforms;return F}function A(_,x){let F;for(let D=0,z=h.length;D<z;D++){const X=h[D];if(X.cacheKey===x){F=X,++F.usedTimes;break}}return F===void 0&&(F=new Hp(i,x,_,a),h.push(F)),F}function T(_){if(--_.usedTimes===0){const x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function W(){l.dispose()}return{getParameters:u,getProgramCacheKey:b,getUniforms:U,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:W}}function qp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Do(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uo(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(f,p,m,g,v,c){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:c},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=c),e++,u}function o(f,p,m,g,v,c){const u=s(f,p,m,g,v,c);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,p,m,g,v,c){const u=s(f,p,m,g,v,c);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function d(f,p){t.length>1&&t.sort(f||Yp),n.length>1&&n.sort(p||Do),r.length>1&&r.sort(p||Do)}function h(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:h,sort:d}}function Kp(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Uo,i.set(n,[s])):r>=a.length?(s=new Uo,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zp=0;function Jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qp(i){const e=new $p,t=jp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new C);const r=new C,a=new tt,s=new tt;function o(d){let h=0,f=0,p=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let m=0,g=0,v=0,c=0,u=0,b=0,M=0,E=0,U=0,A=0,T=0;d.sort(Jp);for(let W=0,_=d.length;W<_;W++){const x=d[W],F=x.color,D=x.intensity,z=x.distance,X=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)h+=F.r*D,f+=F.g*D,p+=F.b*D;else if(x.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(x.sh.coefficients[H],D);T++}else if(x.isDirectionalLight){const H=e.get(x);if(H.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const $=x.shadow,G=t.get(x);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=x.shadow.matrix,b++}n.directional[m]=H,m++}else if(x.isSpotLight){const H=e.get(x);H.position.setFromMatrixPosition(x.matrixWorld),H.color.copy(F).multiplyScalar(D),H.distance=z,H.coneCos=Math.cos(x.angle),H.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),H.decay=x.decay,n.spot[v]=H;const $=x.shadow;if(x.map&&(n.spotLightMap[U]=x.map,U++,$.updateMatrices(x),x.castShadow&&A++),n.spotLightMatrix[v]=$.matrix,x.castShadow){const G=t.get(x);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,E++}v++}else if(x.isRectAreaLight){const H=e.get(x);H.color.copy(F).multiplyScalar(D),H.halfWidth.set(x.width*.5,0,0),H.halfHeight.set(0,x.height*.5,0),n.rectArea[c]=H,c++}else if(x.isPointLight){const H=e.get(x);if(H.color.copy(x.color).multiplyScalar(x.intensity),H.distance=x.distance,H.decay=x.decay,x.castShadow){const $=x.shadow,G=t.get(x);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=x.shadow.matrix,M++}n.point[g]=H,g++}else if(x.isHemisphereLight){const H=e.get(x);H.skyColor.copy(x.color).multiplyScalar(D),H.groundColor.copy(x.groundColor).multiplyScalar(D),n.hemi[u]=H,u++}}c>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==c||P.hemiLength!==u||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==U||P.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=c,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=c,P.hemiLength=u,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=U,P.numLightProbes=T,n.version=Zp++)}function l(d,h){let f=0,p=0,m=0,g=0,v=0;const c=h.matrixWorldInverse;for(let u=0,b=d.length;u<b;u++){const M=d[u];if(M.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(c),f++}else if(M.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(c),m++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(c),s.identity(),a.copy(M.matrixWorld),a.premultiply(c),s.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(c),p++}else if(M.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(c),v++}}}return{setup:o,setupView:l,state:n}}function No(i){const e=new Qp(i),t=[],n=[];function r(h){d.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function em(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new No(i),e.set(r,[o])):a>=s.length?(o=new No(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class tm extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nm extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
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
}`;function am(i,e,t){let n=new As;const r=new Le,a=new Le,s=new $e,o=new tm({depthPacking:jc}),l=new nm,d={},h=t.maxTextureSize,f={[mn]:Mt,[Mt]:mn,[Vt]:Vt},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:im,fragmentShader:rm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new ht;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ne(g,p),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let u=this.type;this.render=function(A,T,P){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||A.length===0)return;const W=i.getRenderTarget(),_=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),F=i.state;F.setBlending(fn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=u!==Jt&&this.type===Jt,z=u===Jt&&this.type!==Jt;for(let X=0,H=A.length;X<H;X++){const $=A[X],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const le=G.getFrameExtents();if(r.multiply(le),a.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/le.x),r.x=a.x*le.x,G.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/le.y),r.y=a.y*le.y,G.mapSize.y=a.y)),G.map===null||D===!0||z===!0){const ge=this.type!==Jt?{minFilter:Pt,magFilter:Pt}:{};G.map!==null&&G.map.dispose(),G.map=new Un(r.x,r.y,ge),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ae=G.getViewportCount();for(let ge=0;ge<ae;ge++){const He=G.getViewport(ge);s.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),F.viewport(s),G.updateMatrices($,ge),n=G.getFrustum(),E(T,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Jt&&b(G,P),G.needsUpdate=!1}u=this.type,c.needsUpdate=!1,i.setRenderTarget(W,_,x)};function b(A,T){const P=e.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Un(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,p,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,m,v,null)}function M(A,T,P,W){let _=null;const x=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(x!==void 0)_=x;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=_.uuid,D=T.uuid;let z=d[F];z===void 0&&(z={},d[F]=z);let X=z[D];X===void 0&&(X=_.clone(),z[D]=X,T.addEventListener("dispose",U)),_=X}if(_.visible=T.visible,_.wireframe=T.wireframe,W===Jt?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=P}return _}function E(A,T,P,W,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Jt)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=e.update(A),z=A.material;if(Array.isArray(z)){const X=D.groups;for(let H=0,$=X.length;H<$;H++){const G=X[H],le=z[G.materialIndex];if(le&&le.visible){const ae=M(A,le,W,_);A.onBeforeShadow(i,A,T,P,D,ae,G),i.renderBufferDirect(P,null,D,ae,A,G),A.onAfterShadow(i,A,T,P,D,ae,G)}}}else if(z.visible){const X=M(A,z,W,_);A.onBeforeShadow(i,A,T,P,D,X,null),i.renderBufferDirect(P,null,D,X,A,null),A.onAfterShadow(i,A,T,P,D,X,null)}}const F=A.children;for(let D=0,z=F.length;D<z;D++)E(F[D],T,P,W,_)}function U(A){A.target.removeEventListener("dispose",U);for(const P in d){const W=d[P],_=A.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const sm={[Ta]:Aa,[Ra]:Ia,[Ca]:La,[oi]:Pa,[Aa]:Ta,[Ia]:Ra,[La]:Ca,[Pa]:oi};function om(i){function e(){let I=!1;const se=new $e;let V=null;const j=new $e(0,0,0,0);return{setMask:function(ie){V!==ie&&!I&&(i.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){I=ie},setClear:function(ie,oe,ke,rt,gt){gt===!0&&(ie*=rt,oe*=rt,ke*=rt),se.set(ie,oe,ke,rt),j.equals(se)===!1&&(i.clearColor(ie,oe,ke,rt),j.copy(se))},reset:function(){I=!1,V=null,j.set(-1,0,0,0)}}}function t(){let I=!1,se=!1,V=null,j=null,ie=null;return{setReversed:function(oe){se=oe},setTest:function(oe){oe?pe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(oe){V!==oe&&!I&&(i.depthMask(oe),V=oe)},setFunc:function(oe){if(se&&(oe=sm[oe]),j!==oe){switch(oe){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=oe}},setLocked:function(oe){I=oe},setClear:function(oe){ie!==oe&&(i.clearDepth(oe),ie=oe)},reset:function(){I=!1,V=null,j=null,ie=null}}}function n(){let I=!1,se=null,V=null,j=null,ie=null,oe=null,ke=null,rt=null,gt=null;return{setTest:function(Ge){I||(Ge?pe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!I&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,_t,qt){(V!==Ge||j!==_t||ie!==qt)&&(i.stencilFunc(Ge,_t,qt),V=Ge,j=_t,ie=qt)},setOp:function(Ge,_t,qt){(oe!==Ge||ke!==_t||rt!==qt)&&(i.stencilOp(Ge,_t,qt),oe=Ge,ke=_t,rt=qt)},setLocked:function(Ge){I=Ge},setClear:function(Ge){gt!==Ge&&(i.clearStencil(Ge),gt=Ge)},reset:function(){I=!1,se=null,V=null,j=null,ie=null,oe=null,ke=null,rt=null,gt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,p=[],m=null,g=!1,v=null,c=null,u=null,b=null,M=null,E=null,U=null,A=new Ie(0,0,0),T=0,P=!1,W=null,_=null,x=null,F=null,D=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),X=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=H>=2);let G=null,le={};const ae=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),He=new $e().fromArray(ae),qe=new $e().fromArray(ge);function q(I,se,V,j){const ie=new Uint8Array(4),oe=i.createTexture();i.bindTexture(I,oe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<V;ke++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(se+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return oe}const J={};J[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),pe(i.DEPTH_TEST),a.setFunc(oi),De(!1),Be(Gs),pe(i.CULL_FACE),R(fn);function pe(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function ce(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ae(I,se){return h[I]!==se?(i.bindFramebuffer(I,se),h[I]=se,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Me(I,se){let V=p,j=!1;if(I){V=f.get(se),V===void 0&&(V=[],f.set(se,V));const ie=I.textures;if(V.length!==ie.length||V[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,ke=ie.length;oe<ke;oe++)V[oe]=i.COLOR_ATTACHMENT0+oe;V.length=ie.length,j=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,j=!0);j&&i.drawBuffers(V)}function Fe(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Ke={[Rn]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[bc]:i.FUNC_REVERSE_SUBTRACT};Ke[Ec]=i.MIN,Ke[wc]=i.MAX;const Oe={[Tc]:i.ZERO,[Ac]:i.ONE,[Rc]:i.SRC_COLOR,[Ea]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[Dc]:i.ONE_MINUS_DST_COLOR,[Ic]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Fc]:i.ONE_MINUS_CONSTANT_COLOR,[Oc]:i.CONSTANT_ALPHA,[kc]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,se,V,j,ie,oe,ke,rt,gt,Ge){if(I===fn){g===!0&&(ce(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),I!==Mc){if(I!==v||Ge!==P){if((c!==Rn||M!==Rn)&&(i.blendEquation(i.FUNC_ADD),c=Rn,M=Rn),Ge)switch(I){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.ONE,i.ONE);break;case Ws:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ws:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,b=null,E=null,U=null,A.set(0,0,0),T=0,v=I,P=Ge}return}ie=ie||se,oe=oe||V,ke=ke||j,(se!==c||ie!==M)&&(i.blendEquationSeparate(Ke[se],Ke[ie]),c=se,M=ie),(V!==u||j!==b||oe!==E||ke!==U)&&(i.blendFuncSeparate(Oe[V],Oe[j],Oe[oe],Oe[ke]),u=V,b=j,E=oe,U=ke),(rt.equals(A)===!1||gt!==T)&&(i.blendColor(rt.r,rt.g,rt.b,gt),A.copy(rt),T=gt),v=I,P=!1}function bt(I,se){I.side===Vt?ce(i.CULL_FACE):pe(i.CULL_FACE);let V=I.side===Mt;se&&(V=!V),De(V),I.blending===ii&&I.transparent===!1?R(fn):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;s.setTest(j),j&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){W!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),W=I)}function Be(I){I!==xc?(pe(i.CULL_FACE),I!==_&&(I===Gs?i.cullFace(i.BACK):I===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),_=I}function be(I){I!==x&&(X&&i.lineWidth(I),x=I)}function Je(I,se,V){I?(pe(i.POLYGON_OFFSET_FILL),(F!==se||D!==V)&&(i.polygonOffset(se,V),F=se,D=V)):ce(i.POLYGON_OFFSET_FILL)}function Te(I){I?pe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+z-1),G!==I&&(i.activeTexture(I),G=I)}function y(I,se,V){V===void 0&&(G===null?V=i.TEXTURE0+z-1:V=G);let j=le[V];j===void 0&&(j={type:void 0,texture:void 0},le[V]=j),(j.type!==I||j.texture!==se)&&(G!==V&&(i.activeTexture(V),G=V),i.bindTexture(I,se||J[I]),j.type=I,j.texture=se)}function O(){const I=le[G];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){He.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),He.copy(I))}function ue(I){qe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),qe.copy(I))}function Ue(I,se){let V=l.get(se);V===void 0&&(V=new WeakMap,l.set(se,V));let j=V.get(I);j===void 0&&(j=i.getUniformBlockIndex(se,I.name),V.set(I,j))}function Re(I,se){const j=l.get(se).get(I);o.get(se)!==j&&(i.uniformBlockBinding(se,j,I.__bindingPointIndex),o.set(se,j))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},G=null,le={},h={},f=new WeakMap,p=[],m=null,g=!1,v=null,c=null,u=null,b=null,M=null,E=null,U=null,A=new Ie(0,0,0),T=0,P=!1,W=null,_=null,x=null,F=null,D=null,He.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:pe,disable:ce,bindFramebuffer:Ae,drawBuffers:Me,useProgram:Fe,setBlending:R,setMaterial:bt,setFlipSided:De,setCullFace:Be,setLineWidth:be,setPolygonOffset:Je,setScissorTest:Te,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ee,updateUBOMapping:Ue,uniformBlockBinding:Re,texStorage2D:ze,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:we,viewport:ue,reset:Ze}}function Fo(i,e,t,n){const r=lm(n);switch(t){case sl:return i*e;case ll:return i*e;case cl:return i*e*2;case dl:return i*e/r.components*r.byteLength;case Ss:return i*e/r.components*r.byteLength;case hl:return i*e*2/r.components*r.byteLength;case bs:return i*e*2/r.components*r.byteLength;case ol:return i*e*3/r.components*r.byteLength;case Ot:return i*e*4/r.components*r.byteLength;case Es:return i*e*4/r.components*r.byteLength;case cr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case za:return Math.max(i,16)*Math.max(e,8)/4;case Oa:case Ba:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case es:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ts:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ns:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case is:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fr:case rs:case as:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ul:case ss:return Math.ceil(i/4)*Math.ceil(e/4)*8;case os:case ls:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lm(i){switch(i){case rn:case il:return{byteLength:1,components:1};case Ai:case rl:case Ci:return{byteLength:2,components:1};case ys:case Ms:return{byteLength:2,components:4};case Dn:case vs:case Qt:return{byteLength:4,components:1};case al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cm(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Le,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return m?new OffscreenCanvas(w,y):br("canvas")}function v(w,y,O){let K=1;const Z=Te(w);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*Z.width),_e=Math.floor(K*Z.height);f===void 0&&(f=g(Y,_e));const ne=y?g(Y,_e):f;return ne.width=Y,ne.height=_e,ne.getContext("2d").drawImage(w,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function c(w){return w.generateMipmaps&&w.minFilter!==Pt&&w.minFilter!==Nt}function u(w){i.generateMipmap(w)}function b(w,y,O,K,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=y;if(y===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const _e=Z?vr:Xe.getTransfer(K);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=_e===et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(w,y){let O;return w?y===null||y===Dn||y===di?O=i.DEPTH24_STENCIL8:y===Qt?O=i.DEPTH32F_STENCIL8:y===Ai&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Dn||y===di?O=i.DEPTH_COMPONENT24:y===Qt?O=i.DEPTH_COMPONENT32F:y===Ai&&(O=i.DEPTH_COMPONENT16),O}function E(w,y){return c(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Nt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function U(w){const y=w.target;y.removeEventListener("dispose",U),T(y),y.isVideoTexture&&h.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),W(y)}function T(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,K=p.get(O);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(w),Object.keys(K).length===0&&p.delete(O)}n.remove(w)}function P(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const O=w.source,K=p.get(O);delete K[y.__cacheKey],s.memory.textures--}function W(w){const y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,Z=O.length;K<Z;K++){const Y=n.get(O[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),s.memory.textures--),n.remove(O[K])}n.remove(w)}let _=0;function x(){_=0}function F(){const w=_;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),_+=1,w}function D(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function z(w,y){const O=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(O,w,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function X(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){qe(O,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function H(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){qe(O,w,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function $(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const G={[Na]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},le={[Pt]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},ae={[Jc]:i.NEVER,[rd]:i.ALWAYS,[Qc]:i.LESS,[pl]:i.LEQUAL,[ed]:i.EQUAL,[id]:i.GEQUAL,[td]:i.GREATER,[nd]:i.NOTEQUAL};function ge(w,y){if(y.type===Qt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nt||y.magFilter===Gr||y.magFilter===Oi||y.magFilter===Ln||y.minFilter===Nt||y.minFilter===Gr||y.minFilter===Oi||y.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,le[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pt||y.minFilter!==Oi&&y.minFilter!==Ln||y.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function He(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",U));const K=y.source;let Z=p.get(K);Z===void 0&&(Z={},p.set(K,Z));const Y=D(y);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Z[Y].usedTimes++;const _e=Z[w.__cacheKey];_e!==void 0&&(Z[w.__cacheKey].usedTimes--,_e.usedTimes===0&&P(y)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return O}function qe(w,y,O){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const Z=He(w,y),Y=y.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const ne=Xe.getPrimaries(Xe.workingColorSpace),de=y.colorSpace===un?null:Xe.getPrimaries(y.colorSpace),ze=y.colorSpace===un||ne===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=v(y.image,!1,r.maxTextureSize);Q=Je(y,Q);const he=a.convert(y.format,y.colorSpace),Ee=a.convert(y.type);let we=b(y.internalFormat,he,Ee,y.colorSpace,y.isVideoTexture);ge(K,y);let ue;const Ue=y.mipmaps,Re=y.isVideoTexture!==!0,Ze=_e.__version===void 0||Z===!0,I=Y.dataReady,se=E(y,Q);if(y.isDepthTexture)we=M(y.format===hi,y.type),Ze&&(Re?t.texStorage2D(i.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,he,Ee,null));else if(y.isDataTexture)if(Ue.length>0){Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,se,we,Ue[0].width,Ue[0].height);for(let V=0,j=Ue.length;V<j;V++)ue=Ue[V],Re?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ue.width,ue.height,he,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,V,we,ue.width,ue.height,0,he,Ee,ue.data);y.generateMipmaps=!1}else Re?(Ze&&t.texStorage2D(i.TEXTURE_2D,se,we,Q.width,Q.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Ee,Q.data)):t.texImage2D(i.TEXTURE_2D,0,we,Q.width,Q.height,0,he,Ee,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Re&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,we,Ue[0].width,Ue[0].height,Q.depth);for(let V=0,j=Ue.length;V<j;V++)if(ue=Ue[V],y.format!==Ot)if(he!==null)if(Re){if(I)if(y.layerUpdates.size>0){const ie=Fo(ue.width,ue.height,y.format,y.type);for(const oe of y.layerUpdates){const ke=ue.data.subarray(oe*ie/ue.data.BYTES_PER_ELEMENT,(oe+1)*ie/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,oe,ue.width,ue.height,1,he,ke,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ue.width,ue.height,Q.depth,he,ue.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,we,ue.width,ue.height,Q.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ue.width,ue.height,Q.depth,he,Ee,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,we,ue.width,ue.height,Q.depth,0,he,Ee,ue.data)}else{Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,se,we,Ue[0].width,Ue[0].height);for(let V=0,j=Ue.length;V<j;V++)ue=Ue[V],y.format!==Ot?he!==null?Re?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,V,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ue.width,ue.height,he,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,V,we,ue.width,ue.height,0,he,Ee,ue.data)}else if(y.isDataArrayTexture)if(Re){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,we,Q.width,Q.height,Q.depth),I)if(y.layerUpdates.size>0){const V=Fo(Q.width,Q.height,y.format,y.type);for(const j of y.layerUpdates){const ie=Q.data.subarray(j*V/Q.data.BYTES_PER_ELEMENT,(j+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,he,Ee,ie)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Ee,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,he,Ee,Q.data);else if(y.isData3DTexture)Re?(Ze&&t.texStorage3D(i.TEXTURE_3D,se,we,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,he,Ee,Q.data);else if(y.isFramebufferTexture){if(Ze)if(Re)t.texStorage2D(i.TEXTURE_2D,se,we,Q.width,Q.height);else{let V=Q.width,j=Q.height;for(let ie=0;ie<se;ie++)t.texImage2D(i.TEXTURE_2D,ie,we,V,j,0,he,Ee,null),V>>=1,j>>=1}}else if(Ue.length>0){if(Re&&Ze){const V=Te(Ue[0]);t.texStorage2D(i.TEXTURE_2D,se,we,V.width,V.height)}for(let V=0,j=Ue.length;V<j;V++)ue=Ue[V],Re?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,he,Ee,ue):t.texImage2D(i.TEXTURE_2D,V,we,he,Ee,ue);y.generateMipmaps=!1}else if(Re){if(Ze){const V=Te(Q);t.texStorage2D(i.TEXTURE_2D,se,we,V.width,V.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ee,Q)}else t.texImage2D(i.TEXTURE_2D,0,we,he,Ee,Q);c(y)&&u(K),_e.__version=Y.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function q(w,y,O){if(y.image.length!==6)return;const K=He(w,y),Z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const _e=Xe.getPrimaries(Xe.workingColorSpace),ne=y.colorSpace===un?null:Xe.getPrimaries(y.colorSpace),de=y.colorSpace===un||_e===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ze=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,he=[];for(let j=0;j<6;j++)!ze&&!Q?he[j]=v(y.image[j],!0,r.maxCubemapSize):he[j]=Q?y.image[j].image:y.image[j],he[j]=Je(y,he[j]);const Ee=he[0],we=a.convert(y.format,y.colorSpace),ue=a.convert(y.type),Ue=b(y.internalFormat,we,ue,y.colorSpace),Re=y.isVideoTexture!==!0,Ze=Y.__version===void 0||K===!0,I=Z.dataReady;let se=E(y,Ee);ge(i.TEXTURE_CUBE_MAP,y);let V;if(ze){Re&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,Ee.width,Ee.height);for(let j=0;j<6;j++){V=he[j].mipmaps;for(let ie=0;ie<V.length;ie++){const oe=V[ie];y.format!==Ot?we!==null?Re?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,Ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,oe.width,oe.height,we,ue,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,Ue,oe.width,oe.height,0,we,ue,oe.data)}}}else{if(V=y.mipmaps,Re&&Ze){V.length>0&&se++;const j=Te(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,he[j].width,he[j].height,we,ue,he[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,he[j].width,he[j].height,0,we,ue,he[j].data);for(let ie=0;ie<V.length;ie++){const ke=V[ie].image[j].image;Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,ke.width,ke.height,we,ue,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,Ue,ke.width,ke.height,0,we,ue,ke.data)}}else{Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,ue,he[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,we,ue,he[j]);for(let ie=0;ie<V.length;ie++){const oe=V[ie];Re?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,we,ue,oe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,Ue,we,ue,oe.image[j])}}}c(y)&&u(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function J(w,y,O,K,Z,Y){const _e=a.convert(O.format,O.colorSpace),ne=a.convert(O.type),de=b(O.internalFormat,_e,ne,O.colorSpace);if(!n.get(y).__hasExternalTextures){const Q=Math.max(1,y.width>>Y),he=Math.max(1,y.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,de,Q,he,y.depth,0,_e,ne,null):t.texImage2D(Z,Y,de,Q,he,0,_e,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,0,De(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(O).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(w,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=M(y.stencilBuffer,Z),_e=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=De(y);Be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Y,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,w)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],_e=a.convert(Y.format,Y.colorSpace),ne=a.convert(Y.type),de=b(Y.internalFormat,_e,ne,Y.colorSpace),ze=De(y);O&&Be(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,de,y.width,y.height):Be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,de,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,de,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,Z=De(y);if(y.depthTexture.format===ri)Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===hi)Be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),pe(y.__webglDepthbuffer[K],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pe(y.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(w,y,O){const K=n.get(w);y!==void 0&&J(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ae(w)}function Fe(w){const y=w.texture,O=n.get(w),K=n.get(y);w.addEventListener("dispose",A);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,s.memory.textures++),Y){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let de=0;de<y.mipmaps.length;de++)O.__webglFramebuffer[ne][de]=i.createFramebuffer()}else O.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)O.__webglFramebuffer[ne]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ne=0,de=Z.length;ne<de;ne++){const ze=n.get(Z[ne]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&Be(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const de=Z[ne];O.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const ze=a.convert(de.format,de.colorSpace),Q=a.convert(de.type),he=b(de.internalFormat,ze,Q,de.colorSpace,w.isXRRenderTarget===!0),Ee=De(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)J(O.__webglFramebuffer[ne][de],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else J(O.__webglFramebuffer[ne],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);c(y)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ne=0,de=Z.length;ne<de;ne++){const ze=Z[ne],Q=n.get(ze);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),ge(i.TEXTURE_2D,ze),J(O.__webglFramebuffer,w,ze,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),c(ze)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),ge(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)J(O.__webglFramebuffer[de],w,y,i.COLOR_ATTACHMENT0,ne,de);else J(O.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ne,0);c(y)&&u(ne),t.unbindTexture()}w.depthBuffer&&Ae(w)}function Ke(w){const y=w.textures;for(let O=0,K=y.length;O<K;O++){const Z=y[O];if(c(Z)){const Y=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),u(Y),t.unbindTexture()}}}const Oe=[],R=[];function bt(w){if(w.samples>0){if(Be(w)===!1){const y=w.textures,O=w.width,K=w.height;let Z=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(w),ne=y.length>1;if(ne)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<y.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ze=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,Z,i.NEAREST),l===!0&&(Oe.length=0,R.length=0,Oe.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Oe.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ze=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function De(w){return Math.min(r.maxSamples,w.samples)}function Be(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(w){const y=s.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Je(w,y){const O=w.colorSpace,K=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==_n&&O!==un&&(Xe.getTransfer(O)===et?(K!==Ot||Z!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=x,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Me,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Be}function dm(i,e){function t(n,r=un){let a;const s=Xe.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===ys)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ms)return i.UNSIGNED_SHORT_5_5_5_1;if(n===al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===il)return i.BYTE;if(n===rl)return i.SHORT;if(n===Ai)return i.UNSIGNED_SHORT;if(n===vs)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===ol)return i.RGB;if(n===Ot)return i.RGBA;if(n===ll)return i.LUMINANCE;if(n===cl)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===Ss)return i.RED_INTEGER;if(n===hl)return i.RG;if(n===bs)return i.RG_INTEGER;if(n===Es)return i.RGBA_INTEGER;if(n===cr||n===dr||n===hr||n===ur)if(s===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===ka||n===Ba||n===za)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Oa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Va)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ha||n===Ga)return s===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Va)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===$a||n===ja||n===Za||n===Ja||n===Qa||n===es||n===ts||n===ns||n===is)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Wa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===es)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ts)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ns)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===is)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===rs||n===as)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===fr)return s===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===as)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===ss||n===os||n===ls)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===fr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ss)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===os)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ls)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hm extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){s=!0;for(const v of e.hand.values()){const c=t.getJointPose(v,n),u=this._getHandJoint(d,v);c!==null&&(u.matrix.fromArray(c.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=c.radius),u.visible=c!==null}const h=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,g=.005;d.inputState.pinching&&p>m+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=m-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
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

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:fm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gm extends pi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,d=null,h=null,f=null,p=null,m=null,g=null;const v=new mm,c=t.getContextAttributes();let u=null,b=null;const M=[],E=[],U=new Le;let A=null;const T=new yt;T.layers.enable(1),T.viewport=new $e;const P=new yt;P.layers.enable(2),P.viewport=new $e;const W=[T,P],_=new hm;_.layers.enable(1),_.layers.enable(2);let x=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=M[q];return J===void 0&&(J=new xa,M[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=M[q];return J===void 0&&(J=new xa,M[q]=J),J.getGripSpace()},this.getHand=function(q){let J=M[q];return J===void 0&&(J=new xa,M[q]=J),J.getHandSpace()};function D(q){const J=E.indexOf(q.inputSource);if(J===-1)return;const pe=M[J];pe!==void 0&&(pe.update(q.inputSource,q.frame,d||s),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){const J=E[q];J!==null&&(E[q]=null,M[q].disconnect(J))}x=null,F=null,v.reset(),e.setRenderTarget(u),m=null,p=null,f=null,r=null,b=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",z),r.addEventListener("inputsourceschange",X),c.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const J={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Un(m.framebufferWidth,m.framebufferHeight,{format:Ot,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:c.stencil})}else{let J=null,pe=null,ce=null;c.depth&&(ce=c.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=c.stencil?hi:ri,pe=c.stencil?di:Dn);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Ae),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Un(p.textureWidth,p.textureHeight,{format:Ot,type:rn,depthTexture:new Al(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:c.stencil,colorSpace:e.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),d=null,s=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(q){for(let J=0;J<q.removed.length;J++){const pe=q.removed[J],ce=E.indexOf(pe);ce>=0&&(E[ce]=null,M[ce].disconnect(pe))}for(let J=0;J<q.added.length;J++){const pe=q.added[J];let ce=E.indexOf(pe);if(ce===-1){for(let Me=0;Me<M.length;Me++)if(Me>=E.length){E.push(pe),ce=Me;break}else if(E[Me]===null){E[Me]=pe,ce=Me;break}if(ce===-1)break}const Ae=M[ce];Ae&&Ae.connect(pe)}}const H=new C,$=new C;function G(q,J,pe){H.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const ce=H.distanceTo($),Ae=J.projectionMatrix.elements,Me=pe.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),Ke=Ae[14]/(Ae[10]+1),Oe=(Ae[9]+1)/Ae[5],R=(Ae[9]-1)/Ae[5],bt=(Ae[8]-1)/Ae[0],De=(Me[8]+1)/Me[0],Be=Fe*bt,be=Fe*De,Je=ce/(-bt+De),Te=Je*-bt;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Te),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=Fe+Je,y=Ke+Je,O=Be-Te,K=be+(ce-Te),Z=Oe*Ke/y*w,Y=R*Ke/y*w;q.projectionMatrix.makePerspective(O,K,Z,Y,w,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let J=q.near,pe=q.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),_.near=P.near=T.near=J,_.far=P.far=T.far=pe,(x!==_.near||F!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),x=_.near,F=_.far);const ce=q.parent,Ae=_.cameras;le(_,ce);for(let Me=0;Me<Ae.length;Me++)le(Ae[Me],ce);Ae.length===2?G(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),ae(q,_,ce)};function ae(q,J,pe){pe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ge=null;function He(q,J){if(h=J.getViewerPose(d||s),g=J,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ce=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let Me=0;Me<pe.length;Me++){const Fe=pe[Me];let Ke=null;if(m!==null)Ke=m.getViewport(Fe);else{const R=f.getViewSubImage(p,Fe);Ke=R.viewport,Me===0&&(e.setRenderTargetTextures(b,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(b))}let Oe=W[Me];Oe===void 0&&(Oe=new yt,Oe.layers.enable(Me),Oe.viewport=new $e,W[Me]=Oe),Oe.matrix.fromArray(Fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Me===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(Oe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Me=f.getDepthInformation(pe[0]);Me&&Me.isValid&&Me.texture&&v.init(e,Me,r.renderState)}}for(let pe=0;pe<M.length;pe++){const ce=E[pe],Ae=M[pe];ce!==null&&Ae!==void 0&&Ae.update(ce,J,d||s)}ge&&ge(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const qe=new wl;qe.setAnimationLoop(He),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}}const wn=new Xt,_m=new tt;function xm(i,e){function t(c,u){c.matrixAutoUpdate===!0&&c.updateMatrix(),u.value.copy(c.matrix)}function n(c,u){u.color.getRGB(c.fogColor.value,Sl(i)),u.isFog?(c.fogNear.value=u.near,c.fogFar.value=u.far):u.isFogExp2&&(c.fogDensity.value=u.density)}function r(c,u,b,M,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(c,u):u.isMeshToonMaterial?(a(c,u),f(c,u)):u.isMeshPhongMaterial?(a(c,u),h(c,u)):u.isMeshStandardMaterial?(a(c,u),p(c,u),u.isMeshPhysicalMaterial&&m(c,u,E)):u.isMeshMatcapMaterial?(a(c,u),g(c,u)):u.isMeshDepthMaterial?a(c,u):u.isMeshDistanceMaterial?(a(c,u),v(c,u)):u.isMeshNormalMaterial?a(c,u):u.isLineBasicMaterial?(s(c,u),u.isLineDashedMaterial&&o(c,u)):u.isPointsMaterial?l(c,u,b,M):u.isSpriteMaterial?d(c,u):u.isShadowMaterial?(c.color.value.copy(u.color),c.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(c,u){c.opacity.value=u.opacity,u.color&&c.diffuse.value.copy(u.color),u.emissive&&c.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(c.map.value=u.map,t(u.map,c.mapTransform)),u.alphaMap&&(c.alphaMap.value=u.alphaMap,t(u.alphaMap,c.alphaMapTransform)),u.bumpMap&&(c.bumpMap.value=u.bumpMap,t(u.bumpMap,c.bumpMapTransform),c.bumpScale.value=u.bumpScale,u.side===Mt&&(c.bumpScale.value*=-1)),u.normalMap&&(c.normalMap.value=u.normalMap,t(u.normalMap,c.normalMapTransform),c.normalScale.value.copy(u.normalScale),u.side===Mt&&c.normalScale.value.negate()),u.displacementMap&&(c.displacementMap.value=u.displacementMap,t(u.displacementMap,c.displacementMapTransform),c.displacementScale.value=u.displacementScale,c.displacementBias.value=u.displacementBias),u.emissiveMap&&(c.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,c.emissiveMapTransform)),u.specularMap&&(c.specularMap.value=u.specularMap,t(u.specularMap,c.specularMapTransform)),u.alphaTest>0&&(c.alphaTest.value=u.alphaTest);const b=e.get(u),M=b.envMap,E=b.envMapRotation;M&&(c.envMap.value=M,wn.copy(E),wn.x*=-1,wn.y*=-1,wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),c.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(wn)),c.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=u.reflectivity,c.ior.value=u.ior,c.refractionRatio.value=u.refractionRatio),u.lightMap&&(c.lightMap.value=u.lightMap,c.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,c.lightMapTransform)),u.aoMap&&(c.aoMap.value=u.aoMap,c.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,c.aoMapTransform))}function s(c,u){c.diffuse.value.copy(u.color),c.opacity.value=u.opacity,u.map&&(c.map.value=u.map,t(u.map,c.mapTransform))}function o(c,u){c.dashSize.value=u.dashSize,c.totalSize.value=u.dashSize+u.gapSize,c.scale.value=u.scale}function l(c,u,b,M){c.diffuse.value.copy(u.color),c.opacity.value=u.opacity,c.size.value=u.size*b,c.scale.value=M*.5,u.map&&(c.map.value=u.map,t(u.map,c.uvTransform)),u.alphaMap&&(c.alphaMap.value=u.alphaMap,t(u.alphaMap,c.alphaMapTransform)),u.alphaTest>0&&(c.alphaTest.value=u.alphaTest)}function d(c,u){c.diffuse.value.copy(u.color),c.opacity.value=u.opacity,c.rotation.value=u.rotation,u.map&&(c.map.value=u.map,t(u.map,c.mapTransform)),u.alphaMap&&(c.alphaMap.value=u.alphaMap,t(u.alphaMap,c.alphaMapTransform)),u.alphaTest>0&&(c.alphaTest.value=u.alphaTest)}function h(c,u){c.specular.value.copy(u.specular),c.shininess.value=Math.max(u.shininess,1e-4)}function f(c,u){u.gradientMap&&(c.gradientMap.value=u.gradientMap)}function p(c,u){c.metalness.value=u.metalness,u.metalnessMap&&(c.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,c.metalnessMapTransform)),c.roughness.value=u.roughness,u.roughnessMap&&(c.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,c.roughnessMapTransform)),u.envMap&&(c.envMapIntensity.value=u.envMapIntensity)}function m(c,u,b){c.ior.value=u.ior,u.sheen>0&&(c.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),c.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(c.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,c.sheenColorMapTransform)),u.sheenRoughnessMap&&(c.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,c.sheenRoughnessMapTransform))),u.clearcoat>0&&(c.clearcoat.value=u.clearcoat,c.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(c.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,c.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(c.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mt&&c.clearcoatNormalScale.value.negate())),u.dispersion>0&&(c.dispersion.value=u.dispersion),u.iridescence>0&&(c.iridescence.value=u.iridescence,c.iridescenceIOR.value=u.iridescenceIOR,c.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(c.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,c.iridescenceMapTransform)),u.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),u.transmission>0&&(c.transmission.value=u.transmission,c.transmissionSamplerMap.value=b.texture,c.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(c.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,c.transmissionMapTransform)),c.thickness.value=u.thickness,u.thicknessMap&&(c.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=u.attenuationDistance,c.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(c.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(c.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=u.specularIntensity,c.specularColor.value.copy(u.specularColor),u.specularColorMap&&(c.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,c.specularColorMapTransform)),u.specularIntensityMap&&(c.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,c.specularIntensityMapTransform))}function g(c,u){u.matcap&&(c.matcap.value=u.matcap)}function v(c,u){const b=e.get(u).light;c.referencePosition.value.setFromMatrixPosition(b.matrixWorld),c.nearDistance.value=b.shadow.camera.near,c.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vm(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const E=M.program;n.uniformBlockBinding(b,E)}function d(b,M){let E=r[b.id];E===void 0&&(g(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",c));const U=M.program;n.updateUBOMapping(b,U);const A=e.render.frame;a[b.id]!==A&&(p(b),a[b.id]=A)}function h(b){const M=f();b.__bindingPointIndex=M;const E=i.createBuffer(),U=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const M=r[b.id],E=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,T=E.length;A<T;A++){const P=Array.isArray(E[A])?E[A]:[E[A]];for(let W=0,_=P.length;W<_;W++){const x=P[W];if(m(x,A,W,U)===!0){const F=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let X=0;X<D.length;X++){const H=D[X],$=v(H);typeof H=="number"||typeof H=="boolean"?(x.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+z,x.__data)):H.isMatrix3?(x.__data[0]=H.elements[0],x.__data[1]=H.elements[1],x.__data[2]=H.elements[2],x.__data[3]=0,x.__data[4]=H.elements[3],x.__data[5]=H.elements[4],x.__data[6]=H.elements[5],x.__data[7]=0,x.__data[8]=H.elements[6],x.__data[9]=H.elements[7],x.__data[10]=H.elements[8],x.__data[11]=0):(H.toArray(x.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,E,U){const A=b.value,T=M+"_"+E;if(U[T]===void 0)return typeof A=="number"||typeof A=="boolean"?U[T]=A:U[T]=A.clone(),!0;{const P=U[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return U[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(b){const M=b.uniforms;let E=0;const U=16;for(let T=0,P=M.length;T<P;T++){const W=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,x=W.length;_<x;_++){const F=W[_],D=Array.isArray(F.value)?F.value:[F.value];for(let z=0,X=D.length;z<X;z++){const H=D[z],$=v(H),G=E%U,le=G%$.boundary,ae=G+le;E+=le,ae!==0&&U-ae<$.storage&&(E+=U-ae),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=$.storage}}}const A=E%U;return A>0&&(E+=U-A),b.__size=E,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function c(b){const M=b.target;M.removeEventListener("dispose",c);const E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:l,update:d,dispose:u}}class Ll{constructor(e={}){const{canvas:t=sd(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,c=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=pn,this.toneMappingExposure=1;const M=this;let E=!1,U=0,A=0,T=null,P=-1,W=null;const _=new $e,x=new $e;let F=null;const D=new Ie(0);let z=0,X=t.width,H=t.height,$=1,G=null,le=null;const ae=new $e(0,0,X,H),ge=new $e(0,0,X,H);let He=!1;const qe=new As;let q=!1,J=!1;const pe=new tt,ce=new tt,Ae=new C,Me=new $e,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Oe(){return T===null?$:1}let R=n;function bt(S,L){return t.getContext(S,L)}try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xs}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",oe,!1),R===null){const L="webgl2";if(R=bt(L,S),R===null)throw bt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let De,Be,be,Je,Te,w,y,O,K,Z,Y,_e,ne,de,ze,Q,he,Ee,we,ue,Ue,Re,Ze,I;function se(){De=new wf(R),De.init(),Re=new dm(R,De),Be=new vf(R,De,e,Re),be=new om(R),Be.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Je=new Rf(R),Te=new qp,w=new cm(R,De,be,Te,Be,Re,Je),y=new Mf(M),O=new Ef(M),K=new Ud(R),Ze=new _f(R,K),Z=new Tf(R,K,Je,Ze),Y=new Pf(R,Z,K,Je),we=new Cf(R,Be,w),Q=new yf(Te),_e=new Xp(M,y,O,De,Be,Ze,Q),ne=new xm(M,Te),de=new Kp,ze=new em(De),Ee=new gf(M,y,O,be,Y,p,l),he=new am(M,Y,Be),I=new vm(R,Je,Be,be),ue=new xf(R,De,Je),Ue=new Af(R,De,Je),Je.programs=_e.programs,M.capabilities=Be,M.extensions=De,M.properties=Te,M.renderLists=de,M.shadowMap=he,M.state=be,M.info=Je}se();const V=new gm(M,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=De.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=De.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(X,H,!1))},this.getSize=function(S){return S.set(X,H)},this.setSize=function(S,L,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,H=L,t.width=Math.floor(S*$),t.height=Math.floor(L*$),k===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(X*$,H*$).floor()},this.setDrawingBufferSize=function(S,L,k){X=S,H=L,$=k,t.width=Math.floor(S*k),t.height=Math.floor(L*k),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(ae)},this.setViewport=function(S,L,k,B){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,L,k,B),be.viewport(_.copy(ae).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(ge)},this.setScissor=function(S,L,k,B){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,L,k,B),be.scissor(x.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){be.setScissorTest(He=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(S=!0,L=!0,k=!0){let B=0;if(S){let N=!1;if(T!==null){const ee=T.texture.format;N=ee===Es||ee===bs||ee===Ss}if(N){const ee=T.texture.type,re=ee===rn||ee===Dn||ee===Ai||ee===di||ee===ys||ee===Ms,fe=Ee.getClearColor(),me=Ee.getClearAlpha(),ye=fe.r,Se=fe.g,xe=fe.b;re?(m[0]=ye,m[1]=Se,m[2]=xe,m[3]=me,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=ye,g[1]=Se,g[2]=xe,g[3]=me,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}L&&(B|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),ze.dispose(),Te.dispose(),y.dispose(),O.dispose(),Y.dispose(),Ze.dispose(),I.dispose(),_e.dispose(),V.dispose(),V.removeEventListener("sessionstart",Us),V.removeEventListener("sessionend",Ns),vn.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Je.autoReset,L=he.enabled,k=he.autoUpdate,B=he.needsUpdate,N=he.type;se(),Je.autoReset=S,he.enabled=L,he.autoUpdate=k,he.needsUpdate=B,he.type=N}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ke(S){const L=S.target;L.removeEventListener("dispose",ke),rt(L)}function rt(S){gt(S),Te.remove(S)}function gt(S){const L=Te.get(S).programs;L!==void 0&&(L.forEach(function(k){_e.releaseProgram(k)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,k,B,N,ee){L===null&&(L=Fe);const re=N.isMesh&&N.matrixWorld.determinant()<0,fe=pc(S,L,k,B,N);be.setMaterial(B,re);let me=k.index,ye=1;if(B.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;ye=2}const Se=k.drawRange,xe=k.attributes.position;let Ye=Se.start*ye,Qe=(Se.start+Se.count)*ye;ee!==null&&(Ye=Math.max(Ye,ee.start*ye),Qe=Math.min(Qe,(ee.start+ee.count)*ye)),me!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,me.count)):xe!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,xe.count));const nt=Qe-Ye;if(nt<0||nt===1/0)return;Ze.setup(N,B,fe,k,me);let Et,Ve=ue;if(me!==null&&(Et=K.get(me),Ve=Ue,Ve.setIndex(Et)),N.isMesh)B.wireframe===!0?(be.setLineWidth(B.wireframeLinewidth*Oe()),Ve.setMode(R.LINES)):Ve.setMode(R.TRIANGLES);else if(N.isLine){let ve=B.linewidth;ve===void 0&&(ve=1),be.setLineWidth(ve*Oe()),N.isLineSegments?Ve.setMode(R.LINES):N.isLineLoop?Ve.setMode(R.LINE_LOOP):Ve.setMode(R.LINE_STRIP)}else N.isPoints?Ve.setMode(R.POINTS):N.isSprite&&Ve.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ve.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ve.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ve=N._multiDrawStarts,dt=N._multiDrawCounts,We=N._multiDrawCount,It=me?K.get(me).bytesPerElement:1,zn=Te.get(B).currentProgram.getUniforms();for(let wt=0;wt<We;wt++)zn.setValue(R,"_gl_DrawID",wt),Ve.render(ve[wt]/It,dt[wt])}else if(N.isInstancedMesh)Ve.renderInstances(Ye,nt,N.count);else if(k.isInstancedBufferGeometry){const ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dt=Math.min(k.instanceCount,ve);Ve.renderInstances(Ye,nt,dt)}else Ve.render(Ye,nt)};function Ge(S,L,k){S.transparent===!0&&S.side===Vt&&S.forceSinglePass===!1?(S.side=Mt,S.needsUpdate=!0,Fi(S,L,k),S.side=mn,S.needsUpdate=!0,Fi(S,L,k),S.side=Vt):Fi(S,L,k)}this.compile=function(S,L,k=null){k===null&&(k=S),c=ze.get(k),c.init(L),b.push(c),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),c.setupLights();const B=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const fe=ee[re];Ge(fe,k,N),B.add(fe)}else Ge(ee,k,N),B.add(ee)}),b.pop(),c=null,B},this.compileAsync=function(S,L,k=null){const B=this.compile(S,L,k);return new Promise(N=>{function ee(){if(B.forEach(function(re){Te.get(re).currentProgram.isReady()&&B.delete(re)}),B.size===0){N(S);return}setTimeout(ee,10)}De.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _t=null;function qt(S){_t&&_t(S)}function Us(){vn.stop()}function Ns(){vn.start()}const vn=new wl;vn.setAnimationLoop(qt),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(S){_t=S,V.setAnimationLoop(S),S===null?vn.stop():vn.start()},V.addEventListener("sessionstart",Us),V.addEventListener("sessionend",Ns),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,L,T),c=ze.get(S,b.length),c.init(L),b.push(c),ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),qe.setFromProjectionMatrix(ce),J=this.localClippingEnabled,q=Q.init(this.clippingPlanes,J),v=de.get(S,u.length),v.init(),u.push(v),V.enabled===!0&&V.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&kr(ee,L,-1/0,M.sortObjects)}kr(S,L,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,le),Ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ke&&Ee.addToRenderList(v,S),this.info.render.frame++,q===!0&&Q.beginShadows();const k=c.state.shadowsArray;he.render(k,S,L),q===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,N=v.transmissive;if(c.setupLights(),L.isArrayCamera){const ee=L.cameras;if(N.length>0)for(let re=0,fe=ee.length;re<fe;re++){const me=ee[re];Os(B,N,S,me)}Ke&&Ee.render(S);for(let re=0,fe=ee.length;re<fe;re++){const me=ee[re];Fs(v,S,me,me.viewport)}}else N.length>0&&Os(B,N,S,L),Ke&&Ee.render(S),Fs(v,S,L);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(M,S,L),Ze.resetDefaultState(),P=-1,W=null,b.pop(),b.length>0?(c=b[b.length-1],q===!0&&Q.setGlobalState(M.clippingPlanes,c.state.camera)):c=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function kr(S,L,k,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)c.pushLight(S),S.castShadow&&c.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||qe.intersectsSprite(S)){B&&Me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const re=Y.update(S),fe=S.material;fe.visible&&v.push(S,re,fe,k,Me.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||qe.intersectsObject(S))){const re=Y.update(S),fe=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Me.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Me.copy(re.boundingSphere.center)),Me.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=re.groups;for(let ye=0,Se=me.length;ye<Se;ye++){const xe=me[ye],Ye=fe[xe.materialIndex];Ye&&Ye.visible&&v.push(S,re,Ye,k,Me.z,xe)}}else fe.visible&&v.push(S,re,fe,k,Me.z,null)}}const ee=S.children;for(let re=0,fe=ee.length;re<fe;re++)kr(ee[re],L,k,B)}function Fs(S,L,k,B){const N=S.opaque,ee=S.transmissive,re=S.transparent;c.setupLightsView(k),q===!0&&Q.setGlobalState(M.clippingPlanes,k),B&&be.viewport(_.copy(B)),N.length>0&&Ni(N,L,k),ee.length>0&&Ni(ee,L,k),re.length>0&&Ni(re,L,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Os(S,L,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[B.id]===void 0&&(c.state.transmissionRenderTarget[B.id]=new Un(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ci:rn,minFilter:Ln,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=c.state.transmissionRenderTarget[B.id],re=B.viewport||_;ee.setSize(re.z,re.w);const fe=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(D),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),Ke&&Ee.render(k);const me=M.toneMapping;M.toneMapping=pn;const ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),c.setupLightsView(B),q===!0&&Q.setGlobalState(M.clippingPlanes,B),Ni(S,k,B),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let xe=0,Ye=L.length;xe<Ye;xe++){const Qe=L[xe],nt=Qe.object,Et=Qe.geometry,Ve=Qe.material,ve=Qe.group;if(Ve.side===Vt&&nt.layers.test(B.layers)){const dt=Ve.side;Ve.side=Mt,Ve.needsUpdate=!0,ks(nt,k,B,Et,Ve,ve),Ve.side=dt,Ve.needsUpdate=!0,Se=!0}}Se===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}M.setRenderTarget(fe),M.setClearColor(D,z),ye!==void 0&&(B.viewport=ye),M.toneMapping=me}function Ni(S,L,k){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ee=S.length;N<ee;N++){const re=S[N],fe=re.object,me=re.geometry,ye=B===null?re.material:B,Se=re.group;fe.layers.test(k.layers)&&ks(fe,L,k,me,ye,Se)}}function ks(S,L,k,B,N,ee){S.onBeforeRender(M,L,k,B,N,ee),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,L,k,B,S,ee),N.transparent===!0&&N.side===Vt&&N.forceSinglePass===!1?(N.side=Mt,N.needsUpdate=!0,M.renderBufferDirect(k,L,B,N,S,ee),N.side=mn,N.needsUpdate=!0,M.renderBufferDirect(k,L,B,N,S,ee),N.side=Vt):M.renderBufferDirect(k,L,B,N,S,ee),S.onAfterRender(M,L,k,B,N,ee)}function Fi(S,L,k){L.isScene!==!0&&(L=Fe);const B=Te.get(S),N=c.state.lights,ee=c.state.shadowsArray,re=N.state.version,fe=_e.getParameters(S,N.state,ee,L,k),me=_e.getProgramCacheKey(fe);let ye=B.programs;B.environment=S.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,ye===void 0&&(S.addEventListener("dispose",ke),ye=new Map,B.programs=ye);let Se=ye.get(me);if(Se!==void 0){if(B.currentProgram===Se&&B.lightsStateVersion===re)return zs(S,fe),Se}else fe.uniforms=_e.getUniforms(S),S.onBeforeCompile(fe,M),Se=_e.acquireProgram(fe,me),ye.set(me,Se),B.uniforms=fe.uniforms;const xe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=Q.uniform),zs(S,fe),B.needsLights=gc(S),B.lightsStateVersion=re,B.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Se,B.uniformsList=null,Se}function Bs(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function zs(S,L){const k=Te.get(S);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function pc(S,L,k,B,N){L.isScene!==!0&&(L=Fe),w.resetTextureUnits();const ee=L.fog,re=B.isMeshStandardMaterial?L.environment:null,fe=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:_n,me=(B.isMeshStandardMaterial?O:y).get(B.envMap||re),ye=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Se=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xe=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,Qe=!!k.morphAttributes.color;let nt=pn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(nt=M.toneMapping);const Et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ve=Et!==void 0?Et.length:0,ve=Te.get(B),dt=c.state.lights;if(q===!0&&(J===!0||S!==W)){const Rt=S===W&&B.id===P;Q.setState(B,S,Rt)}let We=!1;B.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==dt.state.version||ve.outputColorSpace!==fe||N.isBatchedMesh&&ve.batching===!1||!N.isBatchedMesh&&ve.batching===!0||N.isBatchedMesh&&ve.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ve.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ve.instancing===!1||!N.isInstancedMesh&&ve.instancing===!0||N.isSkinnedMesh&&ve.skinning===!1||!N.isSkinnedMesh&&ve.skinning===!0||N.isInstancedMesh&&ve.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ve.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ve.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ve.instancingMorph===!1&&N.morphTexture!==null||ve.envMap!==me||B.fog===!0&&ve.fog!==ee||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==ye||ve.vertexTangents!==Se||ve.morphTargets!==xe||ve.morphNormals!==Ye||ve.morphColors!==Qe||ve.toneMapping!==nt||ve.morphTargetsCount!==Ve)&&(We=!0):(We=!0,ve.__version=B.version);let It=ve.currentProgram;We===!0&&(It=Fi(B,L,N));let zn=!1,wt=!1,Br=!1;const it=It.getUniforms(),an=ve.uniforms;if(be.useProgram(It.program)&&(zn=!0,wt=!0,Br=!0),B.id!==P&&(P=B.id,wt=!0),zn||W!==S){Be.reverseDepthBuffer?(pe.copy(S.projectionMatrix),ld(pe),cd(pe),it.setValue(R,"projectionMatrix",pe)):it.setValue(R,"projectionMatrix",S.projectionMatrix),it.setValue(R,"viewMatrix",S.matrixWorldInverse);const Rt=it.map.cameraPosition;Rt!==void 0&&Rt.setValue(R,Ae.setFromMatrixPosition(S.matrixWorld)),Be.logarithmicDepthBuffer&&it.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,wt=!0,Br=!0)}if(N.isSkinnedMesh){it.setOptional(R,N,"bindMatrix"),it.setOptional(R,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),it.setValue(R,"boneTexture",Rt.boneTexture,w))}N.isBatchedMesh&&(it.setOptional(R,N,"batchingTexture"),it.setValue(R,"batchingTexture",N._matricesTexture,w),it.setOptional(R,N,"batchingIdTexture"),it.setValue(R,"batchingIdTexture",N._indirectTexture,w),it.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&it.setValue(R,"batchingColorTexture",N._colorsTexture,w));const zr=k.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&we.update(N,k,It),(wt||ve.receiveShadow!==N.receiveShadow)&&(ve.receiveShadow=N.receiveShadow,it.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(an.envMap.value=me,an.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(an.envMapIntensity.value=L.environmentIntensity),wt&&(it.setValue(R,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&mc(an,Br),ee&&B.fog===!0&&ne.refreshFogUniforms(an,ee),ne.refreshMaterialUniforms(an,B,$,H,c.state.transmissionRenderTarget[S.id]),mr.upload(R,Bs(ve),an,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mr.upload(R,Bs(ve),an,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(R,"center",N.center),it.setValue(R,"modelViewMatrix",N.modelViewMatrix),it.setValue(R,"normalMatrix",N.normalMatrix),it.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Rt=B.uniformsGroups;for(let Hr=0,_c=Rt.length;Hr<_c;Hr++){const Hs=Rt[Hr];I.update(Hs,It),I.bind(Hs,It)}}return It}function mc(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function gc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,L,k){Te.get(S.texture).__webglTexture=L,Te.get(S.depthTexture).__webglTexture=k;const B=Te.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const k=Te.get(S);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,k=0){T=S,U=L,A=k;let B=!0,N=null,ee=!1,re=!1;if(S){const me=Te.get(S);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(me.__hasExternalTextures)w.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(me.__boundDepthTexture!==xe){if(xe!==null&&Te.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const ye=S.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(re=!0);const Se=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[L])?N=Se[L][k]:N=Se[L],ee=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=Te.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?N=Se[k]:N=Se,_.copy(S.viewport),x.copy(S.scissor),F=S.scissorTest}else _.copy(ae).multiplyScalar($).floor(),x.copy(ge).multiplyScalar($).floor(),F=He;if(be.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&be.drawBuffers(S,N),be.viewport(_),be.scissor(x),be.setScissorTest(F),ee){const me=Te.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,k)}else if(re){const me=Te.get(S.texture),ye=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.__webglTexture,k||0,ye)}P=-1},this.readRenderTargetPixels=function(S,L,k,B,N,ee,re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){be.bindFramebuffer(R.FRAMEBUFFER,fe);try{const me=S.texture,ye=me.format,Se=me.type;if(!Be.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&k>=0&&k<=S.height-N&&R.readPixels(L,k,B,N,Re.convert(ye),Re.convert(Se),ee)}finally{const me=T!==null?Te.get(T).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(S,L,k,B,N,ee,re){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){const me=S.texture,ye=me.format,Se=me.type;if(!Be.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-B&&k>=0&&k<=S.height-N){be.bindFramebuffer(R.FRAMEBUFFER,fe);const xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,xe),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(L,k,B,N,Re.convert(ye),Re.convert(Se),0);const Ye=T!==null?Te.get(T).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Ye);const Qe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await od(R,Qe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(xe),R.deleteSync(Qe),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,k=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(S.image.width*B),ee=Math.floor(S.image.height*B),re=L!==null?L.x:0,fe=L!==null?L.y:0;w.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,re,fe,N,ee),be.unbindTexture()},this.copyTextureToTexture=function(S,L,k=null,B=null,N=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let ee,re,fe,me,ye,Se;k!==null?(ee=k.max.x-k.min.x,re=k.max.y-k.min.y,fe=k.min.x,me=k.min.y):(ee=S.image.width,re=S.image.height,fe=0,me=0),B!==null?(ye=B.x,Se=B.y):(ye=0,Se=0);const xe=Re.convert(L.format),Ye=Re.convert(L.type);w.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Et=R.getParameter(R.UNPACK_SKIP_PIXELS),Ve=R.getParameter(R.UNPACK_SKIP_ROWS),ve=R.getParameter(R.UNPACK_SKIP_IMAGES),dt=S.isCompressedTexture?S.mipmaps[N]:S.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,me),S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,ye,Se,ee,re,xe,Ye,dt.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,ye,Se,dt.width,dt.height,xe,dt.data):R.texSubImage2D(R.TEXTURE_2D,N,ye,Se,ee,re,xe,Ye,dt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Et),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ve),N===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(S,L,k=null,B=null,N=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,S=arguments[2],L=arguments[3],N=arguments[4]||0);let ee,re,fe,me,ye,Se,xe,Ye,Qe;const nt=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(ee=k.max.x-k.min.x,re=k.max.y-k.min.y,fe=k.max.z-k.min.z,me=k.min.x,ye=k.min.y,Se=k.min.z):(ee=nt.width,re=nt.height,fe=nt.depth,me=0,ye=0,Se=0),B!==null?(xe=B.x,Ye=B.y,Qe=B.z):(xe=0,Ye=0,Qe=0);const Et=Re.convert(L.format),Ve=Re.convert(L.type);let ve;if(L.isData3DTexture)w.setTexture3D(L,0),ve=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)w.setTexture2DArray(L,0),ve=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const dt=R.getParameter(R.UNPACK_ROW_LENGTH),We=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),zn=R.getParameter(R.UNPACK_SKIP_ROWS),wt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se),S.isDataTexture||S.isData3DTexture?R.texSubImage3D(ve,N,xe,Ye,Qe,ee,re,fe,Et,Ve,nt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(ve,N,xe,Ye,Qe,ee,re,fe,Et,nt.data):R.texSubImage3D(ve,N,xe,Ye,Qe,ee,re,fe,Et,Ve,nt),R.pixelStorei(R.UNPACK_ROW_LENGTH,dt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,We),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,zn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wt),N===0&&L.generateMipmaps&&R.generateMipmap(ve),be.unbindTexture()},this.initRenderTarget=function(S){Te.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){U=0,A=0,T=null,be.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ws?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Pr?"display-p3":"srgb"}}class Lr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Lr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dl extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ul extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wr=new C,Tr=new C,Oo=new tt,bi=new Ts,rr=new Di,va=new C,ko=new C;class ym extends st{constructor(e=new ht,t=new Ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)wr.fromBufferAttribute(t,r-1),Tr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=wr.distanceTo(Tr);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),rr.radius+=a,e.ray.intersectsSphere(rr)===!1)return;Oo.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Oo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let v=m,c=g-1;v<c;v+=d){const u=h.getX(v),b=h.getX(v+1),M=ar(this,e,bi,l,u,b);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(g-1),c=h.getX(m),u=ar(this,e,bi,l,v,c);u&&t.push(u)}}else{const m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let v=m,c=g-1;v<c;v+=d){const u=ar(this,e,bi,l,v,v+1);u&&t.push(u)}if(this.isLineLoop){const v=ar(this,e,bi,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ar(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(wr.fromBufferAttribute(s,r),Tr.fromBufferAttribute(s,a),t.distanceSqToSegment(wr,Tr,va,ko)>n)return;va.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(va);if(!(l<e.near||l>e.far))return{distance:l,point:ko.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Bo=new C,zo=new C;class Mm extends ym{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Bo.fromBufferAttribute(t,r),zo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bo.distanceTo(zo);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nl extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ho=new tt,hs=new Ts,sr=new Di,or=new C;class Sm extends st{constructor(e=new ht,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),sr.radius+=a,e.ray.intersectsSphere(sr)===!1)return;Ho.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Ho);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=n.index,f=n.attributes.position;if(d!==null){const p=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=p,v=m;g<v;g++){const c=d.getX(g);or.fromBufferAttribute(f,c),Go(or,c,l,r,e,t,this)}}else{const p=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let g=p,v=m;g<v;g++)or.fromBufferAttribute(f,g),Go(or,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Go(i,e,t,n,r,a,s){const o=hs.distanceSqToPoint(i);if(o<t){const l=new C;hs.closestPointToPoint(i,l),l.applyMatrix4(n);const d=r.ray.origin.distanceTo(l);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Dr extends ht{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],d=new C,h=new Le;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){const m=n+f/t*r;d.x=e*Math.cos(m),d.y=e*Math.sin(m),s.push(d.x,d.y,d.z),o.push(0,0,1),h.x=(s[p]/e+1)/2,h.y=(s[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nn extends ht{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const d=this;r=Math.floor(r),a=Math.floor(a);const h=[],f=[],p=[],m=[];let g=0;const v=[],c=n/2;let u=0;b(),s===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(p,3)),this.setAttribute("uv",new je(m,2));function b(){const E=new C,U=new C;let A=0;const T=(t-e)/n;for(let P=0;P<=a;P++){const W=[],_=P/a,x=_*(t-e)+e;for(let F=0;F<=r;F++){const D=F/r,z=D*l+o,X=Math.sin(z),H=Math.cos(z);U.x=x*X,U.y=-_*n+c,U.z=x*H,f.push(U.x,U.y,U.z),E.set(X,T,H).normalize(),p.push(E.x,E.y,E.z),m.push(D,1-_),W.push(g++)}v.push(W)}for(let P=0;P<r;P++)for(let W=0;W<a;W++){const _=v[W][P],x=v[W+1][P],F=v[W+1][P+1],D=v[W][P+1];e>0&&(h.push(_,x,D),A+=3),t>0&&(h.push(x,F,D),A+=3)}d.addGroup(u,A,0),u+=A}function M(E){const U=g,A=new Le,T=new C;let P=0;const W=E===!0?e:t,_=E===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,c*_,0),p.push(0,_,0),m.push(.5,.5),g++;const x=g;for(let F=0;F<=r;F++){const z=F/r*l+o,X=Math.cos(z),H=Math.sin(z);T.x=W*H,T.y=c*_,T.z=W*X,f.push(T.x,T.y,T.z),p.push(0,_,0),A.x=X*.5+.5,A.y=H*.5*_+.5,m.push(A.x,A.y),g++}for(let F=0;F<r;F++){const D=U+F,z=x+F;E===!0?h.push(z,z+1,D):h.push(z+1,z,D),P+=3}d.addGroup(u,P,E===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ui extends Nn{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Ui(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ur extends ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),d(n),h(),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(a.slice(),3)),this.setAttribute("uv",new je(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new C,E=new C,U=new C;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],E),m(t[A+2],U),l(M,E,U,b)}function l(b,M,E,U){const A=U+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const W=b.clone().lerp(E,P/A),_=M.clone().lerp(E,P/A),x=A-P;for(let F=0;F<=x;F++)F===0&&P===A?T[P][F]=W:T[P][F]=W.clone().lerp(_,F/x)}for(let P=0;P<A;P++)for(let W=0;W<2*(A-P)-1;W++){const _=Math.floor(W/2);W%2===0?(p(T[P][_+1]),p(T[P+1][_]),p(T[P][_])):(p(T[P][_+1]),p(T[P+1][_+1]),p(T[P+1][_]))}}function d(b){const M=new C;for(let E=0;E<a.length;E+=3)M.x=a[E+0],M.y=a[E+1],M.z=a[E+2],M.normalize().multiplyScalar(b),a[E+0]=M.x,a[E+1]=M.y,a[E+2]=M.z}function h(){const b=new C;for(let M=0;M<a.length;M+=3){b.x=a[M+0],b.y=a[M+1],b.z=a[M+2];const E=c(b)/2/Math.PI+.5,U=u(b)/Math.PI+.5;s.push(E,1-U)}g(),f()}function f(){for(let b=0;b<s.length;b+=6){const M=s[b+0],E=s[b+2],U=s[b+4],A=Math.max(M,E,U),T=Math.min(M,E,U);A>.9&&T<.1&&(M<.2&&(s[b+0]+=1),E<.2&&(s[b+2]+=1),U<.2&&(s[b+4]+=1))}}function p(b){a.push(b.x,b.y,b.z)}function m(b,M){const E=b*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){const b=new C,M=new C,E=new C,U=new C,A=new Le,T=new Le,P=new Le;for(let W=0,_=0;W<a.length;W+=9,_+=6){b.set(a[W+0],a[W+1],a[W+2]),M.set(a[W+3],a[W+4],a[W+5]),E.set(a[W+6],a[W+7],a[W+8]),A.set(s[_+0],s[_+1]),T.set(s[_+2],s[_+3]),P.set(s[_+4],s[_+5]),U.copy(b).add(M).add(E).divideScalar(3);const x=c(U);v(A,_+0,b,x),v(T,_+2,M,x),v(P,_+4,E,x)}}function v(b,M,E,U){U<0&&b.x===1&&(s[M]=b.x-1),E.x===0&&E.z===0&&(s[M]=U/2/Math.PI+.5)}function c(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.vertices,e.indices,e.radius,e.details)}}class Nr extends Ur{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nr(e.radius,e.detail)}}class Fn extends Ur{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fn(e.radius,e.detail)}}class Cs extends ht{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let d=0;const h=[],f=new C,p=new C,m=[],g=[],v=[],c=[];for(let u=0;u<=n;u++){const b=[],M=u/n;let E=0;u===0&&s===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){const A=U/t;f.x=-e*Math.cos(r+A*a)*Math.sin(s+M*o),f.y=e*Math.cos(s+M*o),f.z=e*Math.sin(r+A*a)*Math.sin(s+M*o),g.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),c.push(A+E,1-M),b.push(d++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const M=h[u][b+1],E=h[u][b],U=h[u+1][b],A=h[u+1][b+1];(u!==0||s>0)&&m.push(M,E,A),(u!==n-1||l<Math.PI)&&m.push(E,U,A)}this.setIndex(m),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xn extends ht{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],l=[],d=[],h=new C,f=new C,p=new C;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const v=g/r*a,c=m/n*Math.PI*2;f.x=(e+t*Math.cos(c))*Math.cos(v),f.y=(e+t*Math.cos(c))*Math.sin(v),f.z=t*Math.sin(c),o.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),d.push(g/r),d.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,c=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,b=(r+1)*m+g;s.push(v,c,b),s.push(c,u,b)}this.setIndex(s),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bm extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new C,a=new C;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let d=0,h=l.length;d<h;++d){const f=l[d],p=f.start,m=f.count;for(let g=p,v=p+m;g<v;g+=3)for(let c=0;c<3;c++){const u=o.getX(g+c),b=o.getX(g+(c+1)%3);r.fromBufferAttribute(s,u),a.fromBufferAttribute(s,b),Vo(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let d=0;d<3;d++){const h=3*o+d,f=3*o+(d+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,f),Vo(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Vo(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class pt extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Fl extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ya=new tt,Wo=new C,Xo=new C;class Ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qo=new tt,Ei=new C,Ma=new C;class Em extends Ol{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),r.makeTranslation(-Ei.x,-Ei.y,-Ei.z),qo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo)}}class wm extends Fr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tm extends Ol{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kl extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bl extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xs);const On=[{id:"hansel",name:"Hansel",tale:"Hansel and Gretel",role:"resourceful survivor",signatureKartId:"breadcrumb_buggy",homeTrackId:"candy_cottage_circuit",palette:{primary:2792847,secondary:15320170},stats:{speed:6,acceleration:7,handling:6,weight:4,luck:8},aiStyle:"balanced"},{id:"gretel",name:"Gretel",tale:"Hansel and Gretel",role:"quick-witted escapist",signatureKartId:"candy_oven_cart",homeTrackId:"candy_cottage_circuit",palette:{primary:15167313,secondary:16032353},stats:{speed:6,acceleration:7,handling:7,weight:3,luck:8},aiStyle:"cunning"},{id:"little_red_cap",name:"Little Red Cap",tale:"Little Red Cap",role:"fearless wanderer",signatureKartId:"red_hood_runner",homeTrackId:"grandmothers_hollow",palette:{primary:14034984,secondary:6947855},stats:{speed:7,acceleration:8,handling:6,weight:3,luck:6},aiStyle:"reckless"},{id:"cinderella",name:"Cinderella",tale:"Aschenputtel",role:"midnight contender",signatureKartId:"pumpkin_coach",homeTrackId:"pumpkin_palace_promenade",palette:{primary:9480387,secondary:14730236},stats:{speed:7,acceleration:6,handling:8,weight:4,luck:9},aiStyle:"steady"},{id:"snow_white",name:"Snow White",tale:"Snow White",role:"glass-coffin revenant",signatureKartId:"glass_coffin_glide",homeTrackId:"mirrorwood_pass",palette:{primary:15858414,secondary:11868062},stats:{speed:6,acceleration:6,handling:7,weight:5,luck:7},aiStyle:"defensive"},{id:"rapunzel",name:"Rapunzel",tale:"Rapunzel",role:"tower-bound climber",signatureKartId:"tower_tress_racer",homeTrackId:"rapunzel_tower_climb",palette:{primary:16765286,secondary:9279918},stats:{speed:6,acceleration:6,handling:9,weight:3,luck:7},aiStyle:"cunning"},{id:"rumpelstiltskin",name:"Rumpelstiltskin",tale:"Rumpelstiltskin",role:"bargain-spinning trickster",signatureKartId:"golden_straw_spinner",homeTrackId:"millers_goldworks",palette:{primary:13214247,secondary:4401176},stats:{speed:7,acceleration:7,handling:6,weight:4,luck:5},aiStyle:"aggressive"},{id:"frog_prince",name:"The Frog Prince",tale:"The Frog Prince",role:"amphibian royal",signatureKartId:"lily_pond_hopper",homeTrackId:"frog_pond_causeway",palette:{primary:5420936,secondary:16766474},stats:{speed:5,acceleration:8,handling:7,weight:3,luck:7},aiStyle:"reckless"},{id:"briar_rose",name:"Briar Rose",tale:"Little Briar Rose",role:"slumbering thorn-heir",signatureKartId:"spindle_spark_kart",homeTrackId:"moonlit_briar_ring",palette:{primary:16740502,secondary:3427905},stats:{speed:6,acceleration:5,handling:8,weight:4,luck:8},aiStyle:"steady"},{id:"pied_piper",name:"The Pied Piper",tale:"The Pied Piper of Hamelin",role:"rat-leading minstrel",signatureKartId:"rat_piper_roadster",homeTrackId:"ratcatchers_run",palette:{primary:10309341,secondary:16556817},stats:{speed:8,acceleration:7,handling:6,weight:3,luck:6},aiStyle:"cunning"},{id:"brave_tailor",name:"The Brave Little Tailor",tale:"The Brave Little Tailor",role:"boastful giant-slayer",signatureKartId:"needle_belt_racer",homeTrackId:"seven_at_one_blow_speedway",palette:{primary:4553629,secondary:15087942},stats:{speed:8,acceleration:8,handling:5,weight:4,luck:6},aiStyle:"aggressive"},{id:"dancing_princess",name:"The Twelfth Dancing Princess",tale:"The Twelve Dancing Princesses",role:"midnight ballroom drifter",signatureKartId:"moon_slipper_carriage",homeTrackId:"moon_slipper_ballroom_drift",palette:{primary:6893763,secondary:12647935},stats:{speed:6,acceleration:6,handling:9,weight:3,luck:7},aiStyle:"steady"},{id:"fisherman",name:"The Fisherman",tale:"The Fisherman and His Wife",role:"wish-haunted angler",signatureKartId:"storm_net_skiff_kart",homeTrackId:"storm_shore_sprint",palette:{primary:30646,secondary:13299960},stats:{speed:6,acceleration:6,handling:6,weight:6,luck:5},aiStyle:"defensive"},{id:"fishermans_wife",name:"The Fisherman's Wife",tale:"The Fisherman and His Wife",role:"insatiable wish-monarch",signatureKartId:"wishfish_royal_cart",homeTrackId:"wishfish_kingdom_road",palette:{primary:147082,secondary:16765286},stats:{speed:7,acceleration:6,handling:6,weight:5,luck:4},aiStyle:"aggressive"},{id:"golden_goose_boy",name:"The Golden Goose Boy",tale:"The Golden Goose",role:"lucky simpleton",signatureKartId:"feathered_fortune_wagon",homeTrackId:"golden_goose_parade_route",palette:{primary:16766720,secondary:16775909},stats:{speed:6,acceleration:6,handling:6,weight:4,luck:10},aiStyle:"balanced"},{id:"iron_hans",name:"Iron Hans",tale:"Iron Hans",role:"wild forest warden",signatureKartId:"forest_crown_hauler",homeTrackId:"iron_forest_descent",palette:{primary:7100492,secondary:10914404},stats:{speed:6,acceleration:5,handling:5,weight:8,luck:6},aiStyle:"aggressive"},{id:"jorinda",name:"Jorinda",tale:"Jorinda and Joringel",role:"songbird-cursed maiden",signatureKartId:"nightingale_sleigh",homeTrackId:"songbird_grove",palette:{primary:11887990,secondary:15379595},stats:{speed:6,acceleration:7,handling:7,weight:3,luck:7},aiStyle:"steady"},{id:"joringel",name:"Joringel",tale:"Jorinda and Joringel",role:"devoted rescuer",signatureKartId:"cage_key_cart",homeTrackId:"stone_castle_of_silence",palette:{primary:4869737,secondary:15919588},stats:{speed:6,acceleration:6,handling:7,weight:4,luck:7},aiStyle:"balanced"},{id:"six_swans_prince",name:"The Six Swans Prince",tale:"The Six Swans",role:"feather-cursed royal",signatureKartId:"swanwing_chariot",homeTrackId:"swan_marsh_glideway",palette:{primary:15330543,secondary:9358054},stats:{speed:7,acceleration:7,handling:7,weight:3,luck:6},aiStyle:"cunning"},{id:"goose_girl",name:"The Goose Girl",tale:"The Goose Girl",role:"hidden true princess",signatureKartId:"goosefeather_coach",homeTrackId:"goose_meadow_road",palette:{primary:11066076,secondary:15858414},stats:{speed:6,acceleration:6,handling:8,weight:4,luck:8},aiStyle:"steady"},{id:"mother_holle",name:"Mother Holle",tale:"Mother Holle",role:"snow-bringing matron",signatureKartId:"snow_pillow_sled",homeTrackId:"mother_holle_skyfall",palette:{primary:13299960,secondary:9494767},stats:{speed:5,acceleration:5,handling:7,weight:6,luck:9},aiStyle:"defensive"},{id:"bearskin",name:"Bearskin",tale:"Bearskin",role:"cursed soldier",signatureKartId:"bearhide_bruiser",homeTrackId:"bearskin_warpath",palette:{primary:3810840,secondary:12348453},stats:{speed:6,acceleration:5,handling:4,weight:9,luck:6},aiStyle:"reckless"},{id:"brother",name:"Brother",tale:"Brother and Sister",role:"enchanted-stag kin",signatureKartId:"river_stag_racer",homeTrackId:"enchanted_brook_crossing",palette:{primary:8435992,secondary:5613104},stats:{speed:8,acceleration:7,handling:6,weight:4,luck:5},aiStyle:"reckless"},{id:"sister",name:"Sister",tale:"Brother and Sister",role:"steadfast guardian",signatureKartId:"silver_fawn_buggy",homeTrackId:"enchanted_brook_crossing",palette:{primary:12040100,secondary:14532265},stats:{speed:6,acceleration:6,handling:8,weight:4,luck:7},aiStyle:"defensive"},{id:"white_snake_servant",name:"The White Snake Servant",tale:"The White Snake",role:"beast-tongued knight",signatureKartId:"serpent_court_kart",homeTrackId:"white_snake_court_circuit",palette:{primary:2976335,secondary:14218204},stats:{speed:7,acceleration:7,handling:7,weight:4,luck:8},aiStyle:"cunning"},{id:"juniper_boy",name:"The Juniper Tree Boy",tale:"The Juniper Tree",role:"reborn bird-spirit",signatureKartId:"juniper_dream_cart",homeTrackId:"juniper_graveyard_garden",palette:{primary:3096134,secondary:13292229},stats:{speed:7,acceleration:6,handling:6,weight:4,luck:6},aiStyle:"defensive"},{id:"king_thrushbeard",name:"King Thrushbeard",tale:"King Thrushbeard",role:"disguised humbler",signatureKartId:"thistle_crown_coupe",homeTrackId:"thorn_crown_ridge",palette:{primary:7473591,secondary:16196997},stats:{speed:7,acceleration:6,handling:7,weight:5,luck:6},aiStyle:"aggressive"},{id:"faithful_john",name:"Faithful John",tale:"Faithful John",role:"loyal sworn servant",signatureKartId:"oathbound_royal_wagon",homeTrackId:"faithful_john_harbor_run",palette:{primary:2575479,secondary:15199471},stats:{speed:6,acceleration:6,handling:6,weight:6,luck:9},aiStyle:"defensive"},{id:"devils_sooty_brother",name:"The Devil's Sooty Brother",tale:"The Devil's Sooty Brother",role:"ash-bound bargainer",signatureKartId:"ashen_devil_dray",homeTrackId:"soot_and_ember_mine",palette:{primary:1776414,secondary:15228164},stats:{speed:7,acceleration:7,handling:5,weight:6,luck:5},aiStyle:"aggressive"},{id:"maid_maleen",name:"Maid Maleen",tale:"Maid Maleen",role:"walled-away survivor",signatureKartId:"tower_escape_carriage",homeTrackId:"maid_maleen_ruin_road",palette:{primary:9077116,secondary:12368049},stats:{speed:6,acceleration:6,handling:7,weight:5,luck:8},aiStyle:"steady"},{id:"eldest_kid",name:"The Eldest Kid",tale:"The Wolf and the Seven Young Kids",role:"clever survivor goat",signatureKartId:"goatbell_scamper_kart",homeTrackId:"wolfwood_panic_trail",palette:{primary:16170336,secondary:16248290},stats:{speed:7,acceleration:9,handling:7,weight:2,luck:7},aiStyle:"reckless"},{id:"elves_shoemaker",name:"The Elves' Shoemaker",tale:"The Elves and the Shoemaker",role:"midnight craftsman",signatureKartId:"cobblers_midnight_cart",homeTrackId:"cobblers_midnight_workshop",palette:{primary:7170165,secondary:16763604},stats:{speed:6,acceleration:7,handling:8,weight:3,luck:7},aiStyle:"balanced"}],Hl=Object.fromEntries(On.map(i=>[i.id,i])),Am="hansel",nn=[{id:"breadcrumb_buggy",name:"Breadcrumb Buggy",tale:"Hansel and Gretel",type:"woodland",modelHint:"small wooden buggy with bread-wheel motifs and a trail-marker lantern",palette:{primary:14263654,secondary:8344889},stats:{speed:5,acceleration:7,handling:7,weight:4}},{id:"candy_oven_cart",name:"Candy Oven Cart",tale:"Hansel and Gretel",type:"confection",modelHint:"rolling sugar oven with peppermint trim and ember glow",palette:{primary:15167313,secondary:16757922},stats:{speed:6,acceleration:6,handling:6,weight:5}},{id:"red_hood_runner",name:"Red Hood Runner",tale:"Little Red Cap",type:"roadster",modelHint:"hooded scarlet roadster with basket and wolf-claw rims",palette:{primary:14034984,secondary:6947855},stats:{speed:7,acceleration:8,handling:6,weight:3}},{id:"pumpkin_coach",name:"Pumpkin Coach",tale:"Aschenputtel",type:"carriage",modelHint:"round pumpkin carriage with vine-spoke wheels and lantern eyes",palette:{primary:16026630,secondary:6966419},stats:{speed:6,acceleration:6,handling:8,weight:5}},{id:"glass_coffin_glide",name:"Glass Coffin Glide",tale:"Snow White",type:"glider",modelHint:"low crystal glider shaped like a glass casket with frost trail",palette:{primary:13495038,secondary:11868062},stats:{speed:7,acceleration:5,handling:7,weight:5}},{id:"tower_tress_racer",name:"Tower Tress Racer",tale:"Rapunzel",type:"racer",modelHint:"tall slim racer with braided-rope grapple coil",palette:{primary:16765286,secondary:9279918},stats:{speed:6,acceleration:6,handling:9,weight:3}},{id:"golden_straw_spinner",name:"Golden Straw Spinner",tale:"Rumpelstiltskin",type:"spinner",modelHint:"spinning-wheel-cored cart trailing golden thread",palette:{primary:13214247,secondary:4401176},stats:{speed:7,acceleration:7,handling:6,weight:4}},{id:"lily_pond_hopper",name:"Lily Pond Hopper",tale:"The Frog Prince",type:"hopper",modelHint:"lily-pad hopper that bounces on frog-leg suspension",palette:{primary:5420936,secondary:16766474},stats:{speed:5,acceleration:8,handling:7,weight:3}},{id:"spindle_spark_kart",name:"Spindle Spark Kart",tale:"Little Briar Rose",type:"racer",modelHint:"thorn-wrapped kart with a single glinting spindle prow",palette:{primary:16740502,secondary:3427905},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"rat_piper_roadster",name:"Rat Piper Roadster",tale:"The Pied Piper",type:"roadster",modelHint:"pied-painted roadster with pipe organ exhaust and rat tail",palette:{primary:10309341,secondary:16556817},stats:{speed:8,acceleration:7,handling:6,weight:3}},{id:"needle_belt_racer",name:"Needle & Belt Racer",tale:"The Brave Little Tailor",type:"racer",modelHint:"patchwork racer stitched with giant needle prow and belt buckle",palette:{primary:4553629,secondary:15087942},stats:{speed:8,acceleration:8,handling:5,weight:4}},{id:"moon_slipper_carriage",name:"Moon Slipper Carriage",tale:"The Twelve Dancing Princesses",type:"carriage",modelHint:"silver ballroom carriage with worn-dancing-slipper wheels",palette:{primary:6893763,secondary:12647935},stats:{speed:6,acceleration:6,handling:9,weight:4}},{id:"storm_net_skiff_kart",name:"Storm Net Skiff Kart",tale:"The Fisherman and His Wife",type:"skiff",modelHint:"fishing-skiff kart draped in storm nets and floats",palette:{primary:30646,secondary:13299960},stats:{speed:6,acceleration:6,handling:6,weight:6}},{id:"wishfish_royal_cart",name:"Wishfish Royal Cart",tale:"The Fisherman and His Wife",type:"carriage",modelHint:"gilded royal cart crowned with a wish-granting flounder",palette:{primary:147082,secondary:16765286},stats:{speed:7,acceleration:6,handling:6,weight:5}},{id:"feathered_fortune_wagon",name:"Feathered Fortune Wagon",tale:"The Golden Goose",type:"wagon",modelHint:"golden-goose wagon that everyone seems stuck to",palette:{primary:16766720,secondary:16775909},stats:{speed:6,acceleration:6,handling:6,weight:5}},{id:"forest_crown_hauler",name:"Forest Crown Hauler",tale:"Iron Hans",type:"hauler",modelHint:"heavy iron hauler antlered with a wild-forest crown",palette:{primary:7100492,secondary:10914404},stats:{speed:6,acceleration:5,handling:5,weight:8}},{id:"nightingale_sleigh",name:"Nightingale Sleigh",tale:"Jorinda and Joringel",type:"sleigh",modelHint:"songbird sleigh with feathered runners and cage chimes",palette:{primary:11887990,secondary:15379595},stats:{speed:6,acceleration:7,handling:7,weight:3}},{id:"cage_key_cart",name:"Cage-Key Cart",tale:"Jorinda and Joringel",type:"cart",modelHint:"iron-cage cart with an oversized enchanted key crank",palette:{primary:4869737,secondary:15919588},stats:{speed:6,acceleration:6,handling:7,weight:4}},{id:"swanwing_chariot",name:"Swanwing Chariot",tale:"The Six Swans",type:"chariot",modelHint:"white chariot with sweeping swan-wing fenders",palette:{primary:15330543,secondary:9358054},stats:{speed:7,acceleration:7,handling:7,weight:3}},{id:"goosefeather_coach",name:"Goosefeather Coach",tale:"The Goose Girl",type:"coach",modelHint:"meadow coach trimmed in goose feathers and a talking-horse charm",palette:{primary:11066076,secondary:15858414},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"snow_pillow_sled",name:"Snow Pillow Sled",tale:"Mother Holle",type:"sled",modelHint:"plush snow sled that shakes down feather flurries",palette:{primary:13299960,secondary:9494767},stats:{speed:5,acceleration:5,handling:7,weight:6}},{id:"bearhide_bruiser",name:"Bearhide Bruiser",tale:"Bearskin",type:"bruiser",modelHint:"hulking bear-pelt bruiser with coin-pouch saddlebags",palette:{primary:3810840,secondary:12348453},stats:{speed:6,acceleration:5,handling:4,weight:9}},{id:"river_stag_racer",name:"River Stag Racer",tale:"Brother and Sister",type:"racer",modelHint:"antlered racer that bounds like an enchanted stag",palette:{primary:8435992,secondary:5613104},stats:{speed:8,acceleration:7,handling:6,weight:4}},{id:"silver_fawn_buggy",name:"Silver Fawn Buggy",tale:"Brother and Sister",type:"buggy",modelHint:"gentle silver-fawn buggy with a protective brook charm",palette:{primary:12040100,secondary:14532265},stats:{speed:6,acceleration:6,handling:8,weight:4}},{id:"serpent_court_kart",name:"Serpent Court Kart",tale:"The White Snake",type:"kart",modelHint:"courtly kart coiled with a white-snake hood ornament",palette:{primary:2976335,secondary:14218204},stats:{speed:7,acceleration:7,handling:7,weight:4}},{id:"juniper_dream_cart",name:"Juniper Dream Cart",tale:"The Juniper Tree",type:"cart",modelHint:"shadowy cart sprouting juniper boughs and bird bones",palette:{primary:3096134,secondary:13292229},stats:{speed:7,acceleration:6,handling:6,weight:4}},{id:"thistle_crown_coupe",name:"Thistle Crown Coupe",tale:"King Thrushbeard",type:"coupe",modelHint:"humble-disguised coupe hiding a thistle crown",palette:{primary:7473591,secondary:16196997},stats:{speed:7,acceleration:6,handling:7,weight:5}},{id:"oathbound_royal_wagon",name:"Oathbound Royal Wagon",tale:"Faithful John",type:"wagon",modelHint:"oath-marked royal wagon armored against three curses",palette:{primary:2575479,secondary:15199471},stats:{speed:6,acceleration:6,handling:6,weight:6}},{id:"ashen_devil_dray",name:"Ashen Devil Dray",tale:"The Devil's Sooty Brother",type:"dray",modelHint:"soot-caked dray belching ember sparks from a furnace core",palette:{primary:1776414,secondary:15228164},stats:{speed:7,acceleration:7,handling:5,weight:6}},{id:"tower_escape_carriage",name:"Tower Escape Carriage",tale:"Maid Maleen",type:"carriage",modelHint:"rubble-scarred carriage with a wall-breaking ram prow",palette:{primary:9077116,secondary:12368049},stats:{speed:6,acceleration:6,handling:7,weight:5}},{id:"goatbell_scamper_kart",name:"Goatbell Scamper Kart",tale:"The Wolf and the Seven Young Kids",type:"kart",modelHint:"tiny nimble kart strung with warning goat-bells",palette:{primary:16170336,secondary:16248290},stats:{speed:7,acceleration:9,handling:7,weight:2}},{id:"cobblers_midnight_cart",name:"Cobbler's Midnight Cart",tale:"The Elves and the Shoemaker",type:"cart",modelHint:"tidy workshop cart finished overnight by unseen elf hands",palette:{primary:7170165,secondary:16763604},stats:{speed:6,acceleration:7,handling:8,weight:3}}],Ar=Object.fromEntries(nn.map(i=>[i.id,i])),Rm="breadcrumb_buggy",us=[{id:"black_forest_loop",name:"Black Forest Loop",tale:"General Grimm",biome:"forest",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:110,width:22,segments:160,elevationStyle:"flat"},pickupPattern:"balanced_ring",hazardPattern:"forest_basic",decorationSet:"dark_forest",visualTheme:{sky:328706,fog:658695,road:4010278,border:2635288,light:16444877},hazards:["fallen_logs","fog_banks"],futureRallyPoints:[]},{id:"candy_cottage_circuit",name:"Candy Cottage Circuit",tale:"Hansel and Gretel",biome:"confection",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:96,width:24,segments:140,elevationStyle:"flat"},pickupPattern:"dense_inner",hazardPattern:"sticky_basic",decorationSet:"sweets",visualTheme:{sky:3808299,fog:4858675,road:9067076,border:14711391,light:16766629},hazards:["toffee_slick","gumdrop_bumps"],futureRallyPoints:[]},{id:"grandmothers_hollow",name:"Grandmother's Hollow",tale:"Little Red Cap",biome:"forest",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:100,width:16,segments:150,elevationStyle:"gentle"},pickupPattern:"outer_lane",hazardPattern:"forest_basic",decorationSet:"dark_forest",visualTheme:{sky:724744,fog:1317390,road:4864810,border:6947855,light:15320170},hazards:["wolf_dens","bramble_walls"],futureRallyPoints:[]},{id:"pumpkin_palace_promenade",name:"Pumpkin Palace Promenade",tale:"Aschenputtel",biome:"palace",difficulty:2,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:120,width:26,segments:170,elevationStyle:"banked"},pickupPattern:"twin_arcs",hazardPattern:"none_light",decorationSet:"gilded_palace",visualTheme:{sky:2365236,fog:2891071,road:5917290,border:16032353,light:16771266},hazards:["midnight_chime_zone"],futureRallyPoints:[]},{id:"mirrorwood_pass",name:"Mirrorwood Pass",tale:"Snow White",biome:"mirror_forest",difficulty:3,laps:3,variation:"foggy_outer_ring",layout:{type:"circular",radius:108,width:18,segments:160,elevationStyle:"rolling"},pickupPattern:"mirror_pairs",hazardPattern:"glare_fog",decorationSet:"mirror_glass",visualTheme:{sky:1053466,fog:1778224,road:4608092,border:11868062,light:14744572},hazards:["mirror_glare","fog_banks"],futureRallyPoints:[]},{id:"rapunzel_tower_climb",name:"Rapunzel Tower Climb",tale:"Rapunzel",biome:"tower",difficulty:3,laps:3,variation:"spiral_climb_ring",layout:{type:"circular",radius:88,width:16,segments:180,elevationStyle:"climb"},pickupPattern:"spiral_ascending",hazardPattern:"edge_drop",decorationSet:"stone_tower",visualTheme:{sky:1709872,fog:2302019,road:7041116,border:16765286,light:16774064},hazards:["ledge_drops","falling_braids"],futureRallyPoints:[]},{id:"millers_goldworks",name:"Miller's Goldworks",tale:"Rumpelstiltskin",biome:"mill",difficulty:3,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:80,width:18,segments:150,elevationStyle:"gentle"},pickupPattern:"gold_clusters",hazardPattern:"spindle_traps",decorationSet:"spinning_mill",visualTheme:{sky:1840136,fog:2497292,road:5982767,border:13214247,light:16769162},hazards:["spindle_pits","straw_bales"],futureRallyPoints:[]},{id:"frog_pond_causeway",name:"Frog Pond Causeway",tale:"The Frog Prince",biome:"wetland",difficulty:2,laps:3,variation:"swamp_slick_ring",layout:{type:"circular",radius:102,width:20,segments:150,elevationStyle:"flat"},pickupPattern:"lilypad_hops",hazardPattern:"slick_water",decorationSet:"pond_reeds",visualTheme:{sky:794394,fog:1191974,road:3824202,border:16766474,light:14218204},hazards:["water_slicks","reed_walls"],futureRallyPoints:[]},{id:"moonlit_briar_ring",name:"Moonlit Briar Ring",tale:"Little Briar Rose",biome:"thornwood",difficulty:3,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:106,width:17,segments:165,elevationStyle:"rolling"},pickupPattern:"thorn_gaps",hazardPattern:"thorn_walls",decorationSet:"briar_thorns",visualTheme:{sky:1313567,fog:1905200,road:4142160,border:16740502,light:13154047},hazards:["thorn_walls","sleep_pollen"],futureRallyPoints:[]},{id:"ratcatchers_run",name:"Ratcatcher's Run",tale:"The Pied Piper",biome:"town",difficulty:3,laps:4,variation:"small_chaotic_ring",layout:{type:"circular",radius:84,width:16,segments:160,elevationStyle:"gentle"},pickupPattern:"alley_scatter",hazardPattern:"rat_swarm",decorationSet:"old_town",visualTheme:{sky:1708832,fog:2300460,road:4867154,border:16556817,light:15325350},hazards:["rat_swarms","narrow_alleys"],futureRallyPoints:[]},{id:"seven_at_one_blow_speedway",name:"Seven-at-One-Blow Speedway",tale:"The Brave Little Tailor",biome:"meadow",difficulty:2,laps:4,variation:"large_fast_ring",layout:{type:"circular",radius:145,width:26,segments:180,elevationStyle:"banked"},pickupPattern:"speed_lane",hazardPattern:"giant_stomps",decorationSet:"bright_meadow",visualTheme:{sky:1714746,fog:2373706,road:4873066,border:15087942,light:11066076},hazards:["giant_footprints","belt_signs"],futureRallyPoints:[]},{id:"moon_slipper_ballroom_drift",name:"Moon Slipper Ballroom Drift",tale:"The Twelve Dancing Princesses",biome:"underground_palace",difficulty:4,laps:3,variation:"double_lane_ring",layout:{type:"circular",radius:116,width:28,segments:175,elevationStyle:"banked"},pickupPattern:"paired_lanes",hazardPattern:"polish_slick",decorationSet:"silver_ballroom",visualTheme:{sky:920095,fog:1511985,road:3814736,border:12647935,light:14730236},hazards:["polished_slicks","worn_slippers"],futureRallyPoints:[]},{id:"storm_shore_sprint",name:"Storm Shore Sprint",tale:"The Fisherman and His Wife",biome:"coast",difficulty:3,laps:3,variation:"foggy_outer_ring",layout:{type:"circular",radius:124,width:20,segments:165,elevationStyle:"rolling"},pickupPattern:"tide_line",hazardPattern:"wave_surge",decorationSet:"stormy_shore",visualTheme:{sky:660508,fog:1188400,road:4282986,border:30646,light:13299960},hazards:["wave_surges","wreck_debris"],futureRallyPoints:[]},{id:"wishfish_kingdom_road",name:"Wishfish Kingdom Road",tale:"The Fisherman and His Wife",biome:"palace",difficulty:3,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:130,width:24,segments:170,elevationStyle:"banked"},pickupPattern:"royal_arcs",hazardPattern:"none_light",decorationSet:"sea_palace",visualTheme:{sky:464686,fog:795200,road:3820138,border:16765286,light:15199471},hazards:["greed_quakes"],futureRallyPoints:[]},{id:"golden_goose_parade_route",name:"Golden Goose Parade Route",tale:"The Golden Goose",biome:"town",difficulty:2,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:118,width:24,segments:160,elevationStyle:"flat"},pickupPattern:"parade_line",hazardPattern:"stuck_crowd",decorationSet:"festival_town",visualTheme:{sky:2761744,fog:3484948,road:5984816,border:16766720,light:16775909},hazards:["stuck_crowds","feather_drifts"],futureRallyPoints:[]},{id:"iron_forest_descent",name:"Iron Forest Descent",tale:"Iron Hans",biome:"iron_forest",difficulty:4,laps:3,variation:"large_fast_ring",layout:{type:"circular",radius:140,width:22,segments:180,elevationStyle:"descent"},pickupPattern:"downhill_scatter",hazardPattern:"iron_roots",decorationSet:"iron_woods",visualTheme:{sky:1315084,fog:1906706,road:4866102,border:10914404,light:14524766},hazards:["iron_roots","wild_man_traps"],futureRallyPoints:[]},{id:"songbird_grove",name:"Songbird Grove",tale:"Jorinda and Joringel",biome:"grove",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:98,width:17,segments:150,elevationStyle:"gentle"},pickupPattern:"birdsong_arcs",hazardPattern:"cage_snares",decorationSet:"song_grove",visualTheme:{sky:1448466,fog:2107162,road:4868662,border:15379595,light:15919588},hazards:["cage_snares","thicket_walls"],futureRallyPoints:[]},{id:"stone_castle_of_silence",name:"Stone Castle of Silence",tale:"Jorinda and Joringel",biome:"castle",difficulty:4,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:112,width:20,segments:170,elevationStyle:"flat"},pickupPattern:"corridor_line",hazardPattern:"silence_zones",decorationSet:"silent_stone",visualTheme:{sky:1053206,fog:1579810,road:4212046,border:15919588,light:13225430},hazards:["silence_zones","stone_statues"],futureRallyPoints:[]},{id:"swan_marsh_glideway",name:"Swan Marsh Glideway",tale:"The Six Swans",biome:"wetland",difficulty:3,laps:3,variation:"swamp_slick_ring",layout:{type:"circular",radius:122,width:22,segments:165,elevationStyle:"flat"},pickupPattern:"feather_drift",hazardPattern:"slick_water",decorationSet:"swan_marsh",visualTheme:{sky:1186338,fog:1713712,road:4477532,border:9358054,light:15330543},hazards:["water_slicks","nettle_shirts"],futureRallyPoints:[]},{id:"goose_meadow_road",name:"Goose Meadow Road",tale:"The Goose Girl",biome:"meadow",difficulty:1,laps:3,variation:"wide_beginner_ring",layout:{type:"circular",radius:126,width:26,segments:160,elevationStyle:"flat"},pickupPattern:"meadow_line",hazardPattern:"none_light",decorationSet:"open_meadow",visualTheme:{sky:1911316,fog:2570267,road:5925434,border:11066076,light:15858414},hazards:["windy_gusts"],futureRallyPoints:[]},{id:"mother_holle_skyfall",name:"Mother Holle Skyfall",tale:"Mother Holle",biome:"sky",difficulty:4,laps:3,variation:"snow_drift_ring",layout:{type:"circular",radius:134,width:24,segments:175,elevationStyle:"rolling"},pickupPattern:"cloud_scatter",hazardPattern:"snow_drifts",decorationSet:"sky_clouds",visualTheme:{sky:2767434,fog:3821407,road:6978186,border:9494767,light:16777215},hazards:["snow_drifts","pitch_patches"],futureRallyPoints:[]},{id:"bearskin_warpath",name:"Bearskin Warpath",tale:"Bearskin",biome:"battlefield",difficulty:4,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:90,width:18,segments:160,elevationStyle:"rolling"},pickupPattern:"coin_scatter",hazardPattern:"mud_pits",decorationSet:"war_camp",visualTheme:{sky:1577484,fog:2234641,road:4864554,border:12348453,light:14524766},hazards:["mud_pits","coin_traps"],futureRallyPoints:[]},{id:"enchanted_brook_crossing",name:"Enchanted Brook Crossing",tale:"Brother and Sister",biome:"brookland",difficulty:2,laps:3,variation:"narrow_forest_ring",layout:{type:"circular",radius:104,width:18,segments:155,elevationStyle:"gentle"},pickupPattern:"brook_line",hazardPattern:"cursed_streams",decorationSet:"green_brook",visualTheme:{sky:1054734,fog:1581587,road:4608559,border:5613104,light:14218204},hazards:["cursed_streams","stag_crossings"],futureRallyPoints:[]},{id:"white_snake_court_circuit",name:"White Snake Court Circuit",tale:"The White Snake",biome:"palace",difficulty:3,laps:3,variation:"palace_clean_ring",layout:{type:"circular",radius:114,width:22,segments:168,elevationStyle:"banked"},pickupPattern:"court_arcs",hazardPattern:"serpent_coils",decorationSet:"green_court",visualTheme:{sky:858642,fog:1320731,road:3821370,border:14218204,light:15269872},hazards:["serpent_coils","riddle_gates"],futureRallyPoints:[]},{id:"juniper_graveyard_garden",name:"Juniper Graveyard Garden",tale:"The Juniper Tree",biome:"graveyard",difficulty:4,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:98,width:18,segments:165,elevationStyle:"rolling"},pickupPattern:"grave_scatter",hazardPattern:"bone_walls",decorationSet:"juniper_graves",visualTheme:{sky:790288,fog:1317146,road:3555130,border:13292229,light:11121836},hazards:["bone_walls","falling_apples"],futureRallyPoints:[]},{id:"thorn_crown_ridge",name:"Thorn Crown Ridge",tale:"King Thrushbeard",biome:"highland",difficulty:4,laps:3,variation:"cursed_thorn_ring",layout:{type:"circular",radius:100,width:17,segments:170,elevationStyle:"climb"},pickupPattern:"ridge_line",hazardPattern:"thorn_walls",decorationSet:"thistle_ridge",visualTheme:{sky:1707812,fog:2364721,road:4601935,border:16196997,light:14723839},hazards:["thorn_walls","cliff_winds"],futureRallyPoints:[]},{id:"faithful_john_harbor_run",name:"Faithful John Harbor Run",tale:"Faithful John",biome:"harbor",difficulty:3,laps:3,variation:"large_fast_ring",layout:{type:"circular",radius:138,width:24,segments:175,elevationStyle:"flat"},pickupPattern:"dock_line",hazardPattern:"crate_stacks",decorationSet:"royal_harbor",visualTheme:{sky:1055270,fog:1582644,road:4477278,border:15199471,light:13358561},hazards:["crate_stacks","gull_swarms"],futureRallyPoints:[]},{id:"soot_and_ember_mine",name:"Soot and Ember Mine",tale:"The Devil's Sooty Brother",biome:"mine",difficulty:5,laps:3,variation:"ember_mine_ring",layout:{type:"circular",radius:86,width:16,segments:170,elevationStyle:"descent"},pickupPattern:"ember_scatter",hazardPattern:"fire_bursts",decorationSet:"ember_mine",visualTheme:{sky:1181704,fog:1903626,road:3810336,border:15228164,light:16752212},hazards:["fire_bursts","soot_clouds"],futureRallyPoints:[]},{id:"maid_maleen_ruin_road",name:"Maid Maleen Ruin Road",tale:"Maid Maleen",biome:"ruins",difficulty:4,laps:3,variation:"small_chaotic_ring",layout:{type:"circular",radius:92,width:18,segments:165,elevationStyle:"rolling"},pickupPattern:"rubble_scatter",hazardPattern:"collapsing_walls",decorationSet:"broken_ruins",visualTheme:{sky:1315599,fog:1907734,road:4473402,border:12368049,light:14078664},hazards:["collapsing_walls","rubble_piles"],futureRallyPoints:[]},{id:"wolfwood_panic_trail",name:"Wolfwood Panic Trail",tale:"The Wolf and the Seven Young Kids",biome:"forest",difficulty:3,laps:4,variation:"narrow_forest_ring",layout:{type:"circular",radius:94,width:15,segments:175,elevationStyle:"rolling"},pickupPattern:"panic_scatter",hazardPattern:"wolf_ambush",decorationSet:"dark_forest",visualTheme:{sky:658696,fog:1185293,road:4340010,border:16170336,light:16248290},hazards:["wolf_ambush","clock_hideouts"],futureRallyPoints:[]},{id:"cobblers_midnight_workshop",name:"Cobbler's Midnight Workshop",tale:"The Elves and the Shoemaker",biome:"workshop",difficulty:2,laps:3,variation:"workshop_tiny_ring",layout:{type:"circular",radius:72,width:16,segments:150,elevationStyle:"flat"},pickupPattern:"bench_scatter",hazardPattern:"tool_clutter",decorationSet:"cobbler_shop",visualTheme:{sky:1446688,fog:2038316,road:4867154,border:16763604,light:16638692},hazards:["tool_clutter","thread_spools"],futureRallyPoints:[]},{id:"grimm_castle_grand_prix",name:"Grimm Castle Grand Prix",tale:"General Grimm",biome:"castle",difficulty:5,laps:4,variation:"large_fast_ring",layout:{type:"circular",radius:150,width:28,segments:200,elevationStyle:"banked"},pickupPattern:"grand_arcs",hazardPattern:"mixed_finale",decorationSet:"grimm_castle",visualTheme:{sky:657170,fog:1183007,road:3814480,border:11868062,light:14723839},hazards:["portcullis_gates","fog_banks","fire_bursts"],futureRallyPoints:[]}],Ko=Object.fromEntries(us.map(i=>[i.id,i])),Cm="black_forest_loop";function Pm(i){switch(i){case"gentle":return e=>Math.sin(e)*2.2;case"rolling":return e=>Math.sin(e*3)*4+Math.sin(e*1.5)*2;case"climb":return e=>(1-Math.cos(e))*7;case"descent":return e=>(Math.cos(e)-1)*7;case"banked":return e=>Math.sin(e*2)*1.4;case"flat":default:return()=>0}}function Im(i,e,t){const n=[],r=t,a=(s,o)=>n.push({theta:s,laneOffset:o});for(let s=0;s<e;s++){const o=s/e*Math.PI*2;switch(i){case"dense_inner":a(o,-r*.28);break;case"outer_lane":a(o,r*.32);break;case"twin_arcs":case"royal_arcs":case"court_arcs":case"grand_arcs":a(o,-r*.22),a(o+.06,r*.22);break;case"mirror_pairs":case"paired_lanes":a(o,-r*.25),a(o,r*.25);break;case"spiral_ascending":a(o,-r*.3+s/e*r*.6);break;case"speed_lane":case"parade_line":case"meadow_line":case"dock_line":case"brook_line":case"ridge_line":case"corridor_line":case"tide_line":a(o,0);break;default:a(o,(s%2===0?-1:1)*r*.2)}}return n}function Lm(i,e,t){if(i==="none_light")return[];const n=[];for(let r=0;r<e;r++){const a=(r+.5)/e*Math.PI*2,s=(r%3-1)*t*.28;n.push({theta:a,laneOffset:s})}return n}function Dm(i,e){const t=e.layout,n=t.radius,r=t.width,a=t.segments,s=e.visualTheme,o=Pm(t.elevationStyle),l=(D,z=0)=>{const X=n+z;return new C(Math.cos(D)*X,o(D),Math.sin(D)*X)},d=D=>new C(-Math.sin(D),0,Math.cos(D)).normalize(),h=new tn;h.name=`track:${e.id}`,i.background=new Ie(s.sky);const f=.0035+(e.difficulty||1)*7e-4;i.fog=new Lr(s.fog,f);const p=new Fl(s.light,s.road,.85);h.add(p);const m=new kl(s.light,.9);m.position.set(n*.6,80,n*.4),h.add(m);const g=new Bl(s.sky,.35);h.add(g);const v=[],c=r/2;for(let D=0;D<=a;D++){const z=D/a*Math.PI*2,X=l(z,-c),H=l(z,c);v.push(X,H)}const u=new ht,b=[],M=[];v.forEach(D=>b.push(D.x,D.y+.02,D.z));for(let D=0;D<a;D++){const z=D*2,X=D*2+1,H=D*2+2,$=D*2+3;M.push(z,X,$,z,$,H)}u.setAttribute("position",new je(b,3)),u.setIndex(M),u.computeVertexNormals();const E=new pt({color:s.road,roughness:.92,metalness:.04,side:Vt});h.add(new Ne(u,E));const U=new pt({color:s.border,emissive:s.border,emissiveIntensity:.25,roughness:.6});for(const D of[-1,1]){const z=new xn(n+D*c,.9,8,Math.max(48,Math.floor(a/2))),X=new Ne(z,U);X.rotation.x=Math.PI/2,h.add(X)}const A=new Ie(s.fog).lerp(new Ie(s.road),.4),T=new Ne(new Dr(n-c,48),new pt({color:A,roughness:1}));T.rotation.x=-Math.PI/2,T.position.y=-.5,h.add(T);const P=new Ne(new mi(n*4,n*4),new pt({color:new Ie(s.sky).lerp(A,.5),roughness:1}));P.rotation.x=-Math.PI/2,P.position.y=-1.2,h.add(P);const W=26+(e.difficulty||1)*4,_=new pt({color:s.border,roughness:.8});for(let D=0;D<W;D++){const z=D/W*Math.PI*2+.04,H=Math.random()<.5?c+6+Math.random()*18:-c-6-Math.random()*(n*.4),$=l(z,H),G=4+Math.random()*12,le=D%3===0?new Ui(1.6,G,6):D%3===1?new Nn(.8,1.2,G,6):new Bt(2.5,G*.6,2.5),ae=new Ne(le,_);ae.position.set($.x,$.y+G/2-.5,$.z),h.add(ae)}i.add(h);const x=Im(e.pickupPattern,8+Math.floor(n/24),r),F=Lm(e.hazardPattern,(e.hazards||[]).length*2,r);return{id:e.id,config:e,radius:n,width:r,laps:e.laps,toWorld:l,headingAt:d,elevationAt:o,pickupSpawns:x,hazardSpawns:F,bounds:{radius:n,width:r,halfWidth:c},group:h,visualTheme:s}}function Gl(i,e){const t=new tn,n=(i.palette&&i.palette.primary)??13421772,r=(e&&e.palette&&e.palette.primary)??(i.palette&&i.palette.secondary)??2236962,a=new pt({color:n,roughness:.55,metalness:.15}),s=new pt({color:r,roughness:.4,metalness:.2,emissive:r,emissiveIntensity:.12}),o=new pt({color:1710618,roughness:.8}),l=i.stats&&i.stats.weight||4,d=2.2+l*.12,h=3.4+l*.08,f=1+l*.06,p=new Ne(new Bt(d,f,h),a);p.position.y=.9,t.add(p);const m=new Ne(new Bt(d*.7,f*.7,h*.45),s);m.position.set(0,1.5,-h*.12),t.add(m);let g;switch(i.type){case"sleigh":case"sled":case"glider":g=new Ne(new Bt(d*1.1,.2,h*1.1),s),g.position.y=.35;break;case"chariot":case"carriage":case"coach":case"wagon":case"dray":case"hauler":g=new Ne(new Nn(.4,.4,d*1.2,6),s),g.rotation.z=Math.PI/2,g.position.set(0,1.9,h*.4);break;case"spinner":g=new Ne(new xn(.9,.18,6,12),s),g.position.set(0,1.6,h*.4);break;case"hopper":g=new Ne(new Cs(.7,8,6),s),g.position.set(0,1.7,h*.4);break;default:g=new Ne(new Ui(.6,1.2,6),s),g.position.set(0,1.7,h*.45),g.rotation.x=Math.PI/2}t.add(g);const v=new Nn(.55,.55,.4,10),c=[[-d/2,.55,h/2-.6],[d/2,.55,h/2-.6],[-d/2,.55,-h/2+.6],[d/2,.55,-h/2+.6]];for(const[u,b,M]of c){const E=new Ne(v,o);E.rotation.z=Math.PI/2,E.position.set(u,b,M),t.add(E)}return t.userData.length=h,t}const Ps=15,Vl=26,Wl=1.6,Xl=.9,Um=.06,ql=1.55,Sa=6,Yl=.5,Kl=2.4,$l=1.4,fs=70,jl=5,Zl=8,ps=6;function Is(i,e){return i+Math.random()*(e-i)}function fi(i,e,t){return Math.max(e,Math.min(t,i))}let Jl=0;function Nm({character:i,kart:e,isPlayer:t,startTheta:n,laneOffset:r}){const a=Gl(e,i),s=i.stats,o=e.stats,l=(s.speed+o.speed)/2,d=(s.acceleration+o.acceleration)/2,h=(s.handling+o.handling)/2;return{id:`racer_${Jl++}`,isPlayer:!!t,character:i,kart:e,aiStyle:i.aiStyle||"balanced",label:t?`${i.name}`:i.name,theta:n,laneOffset:r||0,speed:0,progress:n,lap:0,maxSpeed:Vl+l*Wl,accel:8+d*Xl,handling:.6+h*Um,luck:s.luck??6,alive:!0,rank:0,finishedAt:null,heldItem:null,effects:{boostUntil:0,shieldUntil:0,slowUntil:0,spinUntil:0},mesh:a}}function Fm({character:i,kart:e,isPlayer:t,start:n,stocks:r}){const a=Gl(e,i),s=i.stats,o=e.stats,l=(s.speed+o.speed)/2,d=(s.acceleration+o.acceleration)/2,h=(s.handling+o.handling)/2;return{id:`fighter_${Jl++}`,isPlayer:!!t,character:i,kart:e,aiStyle:i.aiStyle||"balanced",label:i.name,pos:{x:n.x,z:n.z},heading:n.heading||0,speed:0,maxSpeed:(Vl+l*Wl)*.7,accel:9+d*Xl,turn:1.4+h*.16,luck:s.luck??6,stocks:r??3,alive:!0,invulnUntil:0,kos:0,score:0,rank:0,heldItem:null,effects:{boostUntil:0,shieldUntil:0,slowUntil:0,spinUntil:0},mesh:a}}function Om(i,e){const t=new tn;t.name="environment";const n=e.visualTheme,r=320,a=new Float32Array(r*3),s=e.radius;for(let d=0;d<r;d++){const h=Math.random()*Math.PI*2,f=s*(1.2+Math.random()*1.6);a[d*3]=Math.cos(h)*f,a[d*3+1]=20+Math.random()*120,a[d*3+2]=Math.sin(h)*f}const o=new ht;o.setAttribute("position",new je(a,3));const l=new Nl({color:n.light,size:1.4,transparent:!0,opacity:.55,depthWrite:!1});return t.add(new Sm(o,l)),i.add(t),t}function Ql(i=13495038){const e=new tn,t=new pt({color:i,transparent:!0,opacity:.45,roughness:.1,metalness:.1,emissive:i,emissiveIntensity:.4}),n=new Ne(new Fn(1.6,0),t);e.add(n);const r=new Mm(new bm(new Fn(1.7,0)),new Ul({color:16777215,transparent:!0,opacity:.8}));e.add(r);const a=new wm(i,.6,16);return e.add(a),e.userData.spin=.9+Math.random()*.6,e.userData.bobPhase=Math.random()*Math.PI*2,e}function ec(i,e,t){i.rotation.y+=i.userData.spin*t,i.position.y=i.userData.baseY+Math.sin(e*2+i.userData.bobPhase)*.6}const gr=[{id:"glass_slipper_shard",name:"Glass Slipper Shard",icon:"💎",category:"offense",rarity:"common",effect:"homing_projectile",implemented:!0,weight:{front:5,middle:8,back:10}},{id:"spinning_wheel_curse",name:"Spinning Wheel Curse",icon:"🧵",category:"trap",rarity:"common",effect:"track_trap",implemented:!0,weight:{front:6,middle:8,back:9}},{id:"wolfs_charge",name:"Wolf's Charge",icon:"🐺",category:"offense",rarity:"uncommon",effect:"forward_dash",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"witchs_oven_blast",name:"Witch's Oven Blast",icon:"🔥",category:"offense",rarity:"uncommon",effect:"fire_burst",implemented:!1,weight:{front:3,middle:6,back:8}},{id:"raven_message_hex",name:"Raven Message Hex",icon:"🐦",category:"disruption",rarity:"rare",effect:"control_scramble",implemented:!1,weight:{front:2,middle:5,back:8}},{id:"thorn_vines",name:"Thorn Vines",icon:"🌿",category:"trap",rarity:"common",effect:"slow_zone",implemented:!0,weight:{front:6,middle:8,back:8}},{id:"magic_mirror_shield",name:"Magic Mirror Shield",icon:"🪞",category:"defense",rarity:"common",effect:"shield",implemented:!0,weight:{front:10,middle:7,back:4}},{id:"mother_holle_snow_veil",name:"Mother Holle Snow Veil",icon:"❄️",category:"disruption",rarity:"uncommon",effect:"visibility_fog",implemented:!1,weight:{front:4,middle:6,back:7}},{id:"white_swan_feather",name:"White Swan Feather",icon:"🪶",category:"defense",rarity:"uncommon",effect:"cleanse",implemented:!1,weight:{front:7,middle:6,back:5}},{id:"faithful_john_ward",name:"Faithful John Ward",icon:"🛡️",category:"defense",rarity:"rare",effect:"invulnerability",implemented:!1,weight:{front:8,middle:5,back:3}},{id:"gingerbread_rush",name:"Gingerbread Rush",icon:"🍪",category:"boost",rarity:"common",effect:"speed_boost",implemented:!0,weight:{front:7,middle:8,back:8}},{id:"seven_league_boots",name:"Seven-League Boots",icon:"👢",category:"boost",rarity:"rare",effect:"strong_boost",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"golden_goose_luck",name:"Golden Goose Luck",icon:"🦢",category:"utility",rarity:"rare",effect:"luck_buff",implemented:!1,weight:{front:4,middle:6,back:7}},{id:"rapunzel_hair_grapple",name:"Rapunzel Hair Grapple",icon:"🦳",category:"utility",rarity:"uncommon",effect:"slingshot_recovery",implemented:!1,weight:{front:3,middle:6,back:9}},{id:"frog_prince_leap",name:"Frog Prince Leap",icon:"🐸",category:"utility",rarity:"uncommon",effect:"hop_traps",implemented:!1,weight:{front:5,middle:6,back:7}},{id:"breadcrumb_trail",name:"Breadcrumb Trail",icon:"🍞",category:"utility",rarity:"common",effect:"steer_assist",implemented:!1,weight:{front:6,middle:6,back:6}}],Or=Object.fromEntries(gr.map(i=>[i.id,i]));function ti(i,e,t,n){i.effects.boostUntil=e+n,i.effects.boostMult=t}function tc(i,e,t,n){if(!t)return null;const r=i.time,a=e.mesh.position,s=i.fx,o=i.audio,l=(f,p=14)=>s&&s.burst(a,f,p),d=f=>s&&s.ring(a,f),h=f=>o&&o.play(f);switch(t.effect){case"speed_boost":ti(e,r,1.55,2.2),l(10217471),h("boost");break;case"strong_boost":ti(e,r,1.9,2),l(16765286,18),d(16765286),h("boost");break;case"forward_dash":ti(e,r,1.85,1),l(16739179,18),d(16739179),h("boost");break;case"slingshot_recovery":ti(e,r,1.7,1.6),l(16740502,16),h("boost");break;case"luck_buff":e.effects.luckUntil=r+6,ti(e,r,1.2,1),l(16766720,18),d(16766720),h("pickup");break;case"shield":e.effects.shieldUntil=r+Sa,d(9358054),h("shield");break;case"invulnerability":e.effects.invulnUntil=r+Sa,e.effects.shieldUntil=r+Sa,l(16769162,16),d(16766720),h("shield");break;case"cleanse":e.effects.slowUntil=0,e.effects.spinUntil=0,e.effects.scrambleUntil=0,l(15858414,16),h("shield");break;case"hop_traps":e.effects.trapImmuneUntil=r+3,e.effects.hopUntil=r+.5,l(5420936),h("ui");break;case"steer_assist":e.effects.steerAssistUntil=r+4,l(14263654),h("ui");break;case"homing_projectile":n.spawnProjectile(e),l(13495038),h("offense");break;case"track_trap":n.spawnTrap(e,"spin"),l(13214247),h("trap");break;case"fire_burst":n.spawnTrap(e,"fire"),l(15228164,18),h("trap");break;case"slow_zone":n.spawnTrap(e,"slow"),l(5613104),h("trap");break;case"visibility_fog":n.spawnTrap(e,"fog"),l(15267071,18),h("trap");break;case"control_scramble":n.scrambleEnemies(e),l(10309341,16),h("offense");break;default:ti(e,r,1.3,1),l(16777215),h("item")}return`${t.name}!`}function nc(i,e){const t=Math.max(1,e/3),n=i<=t?"front":i<=t*2?"middle":"back";let r=0;for(const s of gr)r+=s.weight[n];let a=Math.random()*r;for(const s of gr)if(a-=s.weight[n],a<=0)return s.id;return gr[0].id}function Ri(i,e){let t=(e-i)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t}function km(i,e){if(!e.heldItem)return null;const t=Or[e.heldItem];return e.heldItem=null,tc(i,e,t,{spawnProjectile:r=>Gm(i,r),spawnTrap:(r,a)=>Hm(i,r,a,r.theta,r.laneOffset),scrambleEnemies:r=>Bm(i,r)})}function Bm(i,e){for(const t of i.racers){if(t===e||!t.alive)continue;const n=Ri(e.theta,t.theta);n>0&&n<.9&&(t.effects.scrambleUntil=i.time+2.2)}}function zm(i){return i==="slow"?5613104:i==="fog"?15267071:i==="fire"?15228164:13214247}function Hm(i,e,t,n,r){const a=zm(t),s=t==="slow"||t==="fog"?new Nr(1.4,0):new xn(1.3,.35,6,10),o=new Ne(s,new pt({color:a,emissive:a,emissiveIntensity:.4})),l=i.track.toWorld(n,r);o.position.set(l.x,l.y+1,l.z),i.scene.add(o),i.traps.push({mesh:o,theta:n,laneOffset:r,kind:t,ownerId:e.id,life:12,armedAt:i.time+.4})}function Gm(i,e){let t=null,n=1/0;for(const o of i.racers){if(o===e||!o.alive)continue;const l=Ri(e.theta,o.theta);l>.02&&l<n&&(n=l,t=o)}const r=new Fn(.8,0),a=new Ne(r,new pt({color:13495038,emissive:13495038,emissiveIntensity:.7})),s=i.track.toWorld(e.theta,e.laneOffset);a.position.set(s.x,s.y+1.2,s.z),i.scene.add(a),i.projectiles.push({mesh:a,theta:e.theta,laneOffset:e.laneOffset,ownerId:e.id,targetId:t?t.id:null})}function ic(i,e){const t=i.time;return e.effects.invulnUntil>t?!1:e.effects.shieldUntil>t?(e.effects.shieldUntil=0,!1):(e.effects.spinUntil=t+$l,e.speed*=.4,i.audio&&i.audio.play("hit"),i.fx&&i.fx.burst(e.mesh.position,16765286,10),!0)}function Vm(i,e){const t=i.track.radius;for(let n=i.projectiles.length-1;n>=0;n--){const r=i.projectiles[n];r.theta+=fs/t*e;const a=r.targetId?i.racers.find(l=>l.id===r.targetId&&l.alive):null;a&&(r.laneOffset+=(a.laneOffset-r.laneOffset)*Math.min(1,e*3));const s=i.track.toWorld(r.theta,r.laneOffset);r.mesh.position.set(s.x,s.y+1.2,s.z);let o=!1;a&&Ri(r.theta,a.theta)<.05&&(ic(i,a)&&a.isPlayer&&i.fx&&i.fx.flash("#ff8aa0",.5),o=!0),r.life=(r.life??4)-e,(o||r.life<=0||!r.targetId)&&(r.targetId,(o||r.life<=0)&&(i.scene.remove(r.mesh),i.projectiles.splice(n,1)))}}function Wm(i,e){for(let t=i.traps.length-1;t>=0;t--){const n=i.traps[t];if(n.life-=e,n.mesh.rotation.y+=e*2,i.time>=n.armedAt)for(const r of i.racers){if(!r.alive)continue;const a=Ri(n.theta,r.theta)<.05||Ri(r.theta,n.theta)<.05,s=Math.abs(r.laneOffset-n.laneOffset)<4;if(a&&s){if(r.effects.trapImmuneUntil>i.time)continue;n.kind==="slow"||n.kind==="fog"?r.effects.slowUntil=Math.max(r.effects.slowUntil||0,i.time+Kl):ic(i,r)}}n.life<=0&&(i.scene.remove(n.mesh),i.traps.splice(t,1))}}function Xm(i,e){for(const t of i.track.pickupSpawns){const n=e(i.track.visualTheme.light),r=i.track.toWorld(t.theta,t.laneOffset);n.position.set(r.x,r.y+2.2,r.z),n.userData.baseY=r.y+2.2,i.scene.add(n),i.reliquaries.push({group:n,theta:t.theta,laneOffset:t.laneOffset,baseY:r.y+2.2,active:!0,respawnAt:0})}}function qm(i,e,t){const n=i.time;for(const r of i.reliquaries)if(r.active){t(r.group,n,e);for(const a of i.racers){if(!a.alive||a.heldItem)continue;const s=Math.abs((a.theta-r.theta+Math.PI)%(Math.PI*2)-Math.PI)<.06,o=Math.abs(a.laneOffset-r.laneOffset)<ps;if(s&&o){a.heldItem=nc(a.rank,i.aliveCount),r.active=!1,r.group.visible=!1,r.respawnAt=n+Is(jl,Zl),i.fx&&i.fx.burst(r.group.position,i.track.visualTheme.light,10),i.audio&&a.isPlayer&&i.audio.play("pickup");break}}}else n>=r.respawnAt&&(r.active=!0,r.group.visible=!0)}function Ym(){return{timer:Ps,lastEliminatedId:null}}function Km(i,e){const t=i.elimination,n=i.racers.filter(a=>a.alive);if(n.length<=1||(t.timer-=e,t.timer>0))return null;t.timer=Ps;let r=n[0];for(const a of n)a.progress<r.progress&&(r=a);return r.alive=!1,r.eliminatedAt=i.time,r.mesh&&(r.mesh.visible=!1),t.lastEliminatedId=r.id,i.aliveCount=i.racers.filter(a=>a.alive).length,r}const $o={aggressive:{throttle:1,useBias:1.4,wander:.6},reckless:{throttle:1,useBias:1.1,wander:1.2},balanced:{throttle:.93,useBias:1,wander:.7},cunning:{throttle:.95,useBias:1.2,wander:.5},defensive:{throttle:.88,useBias:.9,wander:.4},steady:{throttle:.9,useBias:.8,wander:.3}};function $m(i,e){let t=null,n=1/0;for(const r of i.reliquaries){if(!r.active)continue;let a=(r.theta-e.theta)%(Math.PI*2);a<0&&(a+=Math.PI*2),a<n&&a<.8&&(n=a,t=r)}return t?t.laneOffset:null}function jm(i,e,t){const n=$o[e.aiStyle]||$o.balanced;e._wander===void 0&&(e._wander=Math.random()*Math.PI*2),e._wander+=t*(.6+Math.random()*.4);let r;const a=e.heldItem?null:$m(i,e);a!==null?r=a:r=Math.sin(e._wander)*(i.track.width*.3)*n.wander;const s=fi((r-e.laneOffset)*.25,-1,1);let o=!1;if(e.heldItem){const d=t*.6*n.useBias;Math.random()<d&&(o=!0)}return{throttle:n.throttle*(e.effects.spinUntil>i.time?.3:1),steer:s,useItem:o}}function ms(i,e){const t=i.track.bounds.halfWidth*.88;e.laneOffset=fi(e.laneOffset,-t,t)}function Zm(i){const e=i.racers.filter(t=>t.alive);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){const r=e[t],a=e[n];let s=Math.abs(r.theta-a.theta)%(Math.PI*2);s>Math.PI&&(s=Math.PI*2-s),s<.025&&Math.abs(r.laneOffset-a.laneOffset)<2.6&&(r.laneOffset<=a.laneOffset?(r.laneOffset-=1.3,a.laneOffset+=1.3):(r.laneOffset+=1.3,a.laneOffset-=1.3),ms(i,r),ms(i,a))}}const jo=Math.PI*2;function Jm(i,e,t,n){const r=i.time;let a=e.maxSpeed*fi(t.throttle,0,1.2);e.effects.boostUntil>r&&(a*=e.effects.boostMult||ql),e.effects.slowUntil>r&&(a*=Yl);const s=e.effects.spinUntil>r;s&&(a*=.35),e.speed+=(a-e.speed)*Math.min(1,n*(e.accel*.22)),e.speed=Math.max(0,e.speed);let o=fi(t.steer,-1,1);e.effects.scrambleUntil>r&&(o=-o);const l=e.effects.steerAssistUntil>r,d=(8+e.handling*10)*(s?.2:1)*(l?1.4:1);if(e.laneOffset+=o*d*n,l&&(e.laneOffset+=(0-e.laneOffset)*Math.min(1,n*1.1)),ms(i,e),t.useItem&&e.heldItem){const h=km(i,e);h&&e.isPlayer&&(i.lastItemMsg={text:h,until:r+2})}}function Qm(i,e,t){const n=Math.max(8,i.track.radius+e.laneOffset),r=e.speed/n*t;e.theta=(e.theta+r)%jo,e.progress+=r,e.lap=Math.floor(e.progress/jo);const a=i.track.toWorld(e.theta,e.laneOffset),s=e.effects.hopUntil>i.time?Math.sin((e.effects.hopUntil-i.time)/.5*Math.PI)*2.2:0;e.mesh.position.set(a.x,a.y+Math.max(0,s),a.z);const o=i.track.headingAt(e.theta);e.mesh.rotation.y=Math.atan2(o.x,o.z),e.effects.spinUntil>i.time&&(e.mesh.rotation.y+=Math.sin(i.time*20)*.3)}function eg(i){const e=[...i.racers].sort((t,n)=>t.alive!==n.alive?t.alive?-1:1:n.progress-t.progress);e.forEach((t,n)=>{t.rank=n+1}),i.ranked=e}function tg(i,e,t){if(i.status!=="racing")return;i.time+=e;for(const a of i.racers){if(!a.alive)continue;const s=a.isPlayer?t:jm(i,a,e);Jm(i,a,s,e),Qm(i,a,e)}Zm(i),eg(i),qm(i,e,ec),Vm(i,e),Wm(i,e);const n=Km(i,e);n&&(i.elimNotice={text:`${n.label} eliminated`,until:i.time+2.5},i.audio&&i.audio.play(n.isPlayer?"lose":"eliminate"),i.fx&&i.fx.burst(n.mesh.position,14715498,16),n.isPlayer&&(i.status="lost",i.endRank=n.rank));const r=i.racers.filter(a=>a.alive);r.length===1&&i.status==="racing"&&(i.status=r[0].isPlayer?"won":"lost",i.endRank=1)}function ng(i){const e=i.state;return{throttle:e.accel?1:e.brake?0:.5,steer:(e.right?1:0)-(e.left?1:0),useItem:e.useItem}}function ig(i){const e=i.player,t=e.heldItem?Or[e.heldItem]:null,n=(i.ranked||i.racers).slice(0,6).map(s=>({name:s.label,rank:s.rank,alive:s.alive,isPlayer:s.isPlayer,lap:s.lap}));let r="";i.elimNotice&&i.time<i.elimNotice.until&&(r=i.elimNotice.text),i.lastItemMsg&&i.time<i.lastItemMsg.until&&(r=i.lastItemMsg.text);const a=Math.max(0,Math.ceil(i.elimination.timer));return{title:"GrimmKart.io",speed:Math.round(e.speed),pace:e.alive?`${e.rank} / ${i.racers.length}`:"OUT",timerText:`next out in ${a}s`,subline:`pos ${e.alive?e.rank:"OUT"} · lap ${e.lap}`,alive:i.aliveCount,total:i.racers.length,elimTimer:a,elimInterval:Ps,lap:e.lap,item:t?{name:t.name,icon:t.icon}:null,leaderboard:n,message:r,status:i.status}}function rg(i){const e=i.player,t=e.heldItem?Or[e.heldItem]:null,n=(i.ranked||i.fighters).slice(0,6).map(s=>({name:s.label,rank:s.rank,alive:s.alive,isPlayer:s.isPlayer,lap:s.stocks}));let r="";i.koNotice&&i.time<i.koNotice.until&&(r=i.koNotice.text),i.lastItemMsg&&i.time<i.lastItemMsg.until&&(r=i.lastItemMsg.text);const a=Math.max(0,e.stocks);return{title:"GrimmKart.io",speed:Math.round(e.speed),pace:e.alive?`${e.rank} / ${i.fighters.length}`:"OUT",timerText:`★ ${e.kos} KO${e.kos===1?"":"s"}`,subline:e.alive?`pos ${e.rank} · ♥ ${a}`:"OUT",alive:i.aliveCount,total:i.fighters.length,item:t?{name:t.name,icon:t.icon}:null,leaderboard:n,message:r,status:i.status}}function rc(i){const e=document.createElement("div");e.className="hud",e.innerHTML=`
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
      <button data-k="useItem" class="tc tc-item">✦</button>`;const n=(r,a)=>{r in this.state&&(this.state[r]=a)};t.querySelectorAll("button").forEach(r=>{const a=r.dataset.k,s=l=>{l.preventDefault(),n(a,!0)},o=l=>{l.preventDefault(),n(a,!1)};r.addEventListener("touchstart",s,{passive:!1}),r.addEventListener("touchend",o),r.addEventListener("touchcancel",o),r.addEventListener("mousedown",s),r.addEventListener("mouseup",o),r.addEventListener("mouseleave",o)}),e.appendChild(t),this._touch={el:t}}}class sc{constructor(e){this.camera=e,this._pos=new C,this._look=new C,this._tmp=new C,this._initialized=!1}update(e,t){if(!e)return;const n=this._tmp.copy(e.heading).multiplyScalar(-14),r=this._pos.copy(e.position).add(n);r.y=e.position.y+9;const a=this._initialized?Math.min(1,t*4.5):1;this.camera.position.lerp(r,a),this._look.copy(e.position).add(this._tmp.copy(e.heading).multiplyScalar(10)),this._look.y=e.position.y+2,this.camera.lookAt(this._look),this._initialized=!0}reset(){this._initialized=!1}}class oc{constructor(e,t){this.scene=e,this.particles=[],this.rings=[],this._geo=new Fn(.45,0),this.flashEl=document.createElement("div"),this.flashEl.className="fx-flash",t&&t.appendChild(this.flashEl),this._flash=0,this._flashColor="#ffffff"}burst(e,t=16777215,n=14,r=9){for(let a=0;a<n;a++){const s=new Ne(this._geo,new Er({color:t,transparent:!0,opacity:1}));s.position.set(e.x,(e.y??1)+1,e.z);const o=Math.random()*Math.PI*2,l=2+Math.random()*6;s.userData={vx:Math.cos(o)*r*(.4+Math.random()),vy:l,vz:Math.sin(o)*r*(.4+Math.random()),life:0,maxLife:.5+Math.random()*.4},this.scene.add(s),this.particles.push(s)}}ring(e,t=16777215){const n=new xn(1,.18,6,24),r=new Ne(n,new Er({color:t,transparent:!0,opacity:.9}));r.position.set(e.x,(e.y??1)+.6,e.z),r.rotation.x=Math.PI/2,r.userData={life:0,maxLife:.5},this.scene.add(r),this.rings.push(r)}flash(e="#ffffff",t=.5){this._flash=Math.max(this._flash,t),this._flashColor=e}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t],r=n.userData;r.life+=e,r.vy-=16*e,n.position.x+=r.vx*e,n.position.y+=r.vy*e,n.position.z+=r.vz*e;const a=1-r.life/r.maxLife;n.material.opacity=Math.max(0,a),n.scale.setScalar(Math.max(.05,a)),(r.life>=r.maxLife||n.position.y<0)&&(this.scene.remove(n),n.material.dispose(),this.particles.splice(t,1))}for(let t=this.rings.length-1;t>=0;t--){const n=this.rings[t],r=n.userData;r.life+=e;const a=r.life/r.maxLife;n.scale.setScalar(1+a*6),n.material.opacity=Math.max(0,.9*(1-a)),r.life>=r.maxLife&&(this.scene.remove(n),n.material.dispose(),n.geometry.dispose(),this.rings.splice(t,1))}this._flash>0&&(this._flash=Math.max(0,this._flash-e*2.2),this.flashEl.style.background=this._flashColor,this.flashEl.style.opacity=String(this._flash))}dispose(){this.particles.forEach(e=>{this.scene.remove(e),e.material.dispose()}),this.rings.forEach(e=>{this.scene.remove(e),e.material.dispose(),e.geometry.dispose()}),this.particles=[],this.rings=[],this._geo.dispose(),this.flashEl&&this.flashEl.parentNode&&this.flashEl.remove()}}class ag{constructor(){this.ctx=null,this.master=null,this.muted=!1,this._ready=!1}resume(){if(this._ready){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this._ready=!0}catch{}}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.5)}toggleMute(){return this.setMuted(!this.muted),this.muted}_tone(e,t,n="sine",r=.5,a=null,s=0){if(!this._ready||this.muted)return;const o=this.ctx.currentTime+s,l=this.ctx.createOscillator(),d=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(e,o),a&&l.frequency.exponentialRampToValueAtTime(a,o+t),d.gain.setValueAtTime(1e-4,o),d.gain.exponentialRampToValueAtTime(r,o+.012),d.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(d),d.connect(this.master),l.start(o),l.stop(o+t+.02)}_noise(e,t=.4,n=0){if(!this._ready||this.muted)return;const r=this.ctx.currentTime+n,a=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(1,a,this.ctx.sampleRate),o=s.getChannelData(0);for(let h=0;h<a;h++)o[h]=(Math.random()*2-1)*(1-h/a);const l=this.ctx.createBufferSource();l.buffer=s;const d=this.ctx.createGain();d.gain.value=t,l.connect(d),d.connect(this.master),l.start(r)}play(e){if(!(!this._ready||this.muted))switch(e){case"ui":this._tone(520,.06,"square",.2);break;case"start":this._tone(440,.12,"square",.3),this._tone(440,.12,"square",.3,null,.16),this._tone(660,.22,"square",.35,null,.32);break;case"pickup":this._tone(680,.1,"sine",.3,1100);break;case"boost":this._tone(300,.25,"sawtooth",.3,900);break;case"shield":this._tone(330,.18,"sine",.3),this._tone(495,.22,"sine",.25,null,.04);break;case"offense":case"item":this._tone(820,.1,"square",.25,280);break;case"trap":this._tone(180,.16,"square",.3,90);break;case"hit":this._noise(.18,.4),this._tone(160,.16,"square",.25,70);break;case"ko":this._tone(440,.3,"sawtooth",.35,110),this._noise(.2,.3);break;case"eliminate":this._tone(220,.35,"triangle",.3,80);break;case"win":[523,659,784,1047].forEach((t,n)=>this._tone(t,.25,"square",.3,null,n*.12));break;case"lose":[392,330,262].forEach((t,n)=>this._tone(t,.3,"sawtooth",.3,null,n*.16));break;default:this._tone(600,.06,"sine",.2)}}}const kt=new ag;function sg(i,{canvas:e,uiRoot:t,onRaceEnd:n}){const r=new Ll({canvas:e,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(window.innerWidth,window.innerHeight);const a=new Dl,s=new yt(62,window.innerWidth/window.innerHeight,.1,2e3),o=Ko[i.trackId]||Ko.black_forest_loop,l=Dm(a,o);Om(a,l);const d=Math.max(2,Math.min(16,i.racerCount||10)),h=Hl[i.playerCharacterId]||On[0],f=Ar[i.playerKartId]||nn[0],p=On.filter(x=>x.id!==h.id).sort(()=>Math.random()-.5),m=[],g=x=>(x%5-2)*l.width*.16;for(let x=0;x<d;x++){let F,D;x===0?(F=h,D=f):(F=p[(x-1)%p.length],D=Ar[F.signatureKartId]||nn[x*7%nn.length]);const z=Nm({character:F,kart:D,isPlayer:x===0,startTheta:x*.035,laneOffset:g(x)});z.progress=x*.035,m.push(z),a.add(z.mesh)}const v=m[0],c={scene:a,track:l,racers:m,player:v,time:0,status:"racing",aliveCount:d,elimination:Ym(),reliquaries:[],projectiles:[],traps:[],ranked:m.slice(),elimNotice:null,lastItemMsg:null,endRank:null};Xm(c,Ql),c.audio=kt,c.fx=new oc(a,t),kt.resume(),kt.play("start");const u=rc(t),b=new ac;b.attach(),b.attachTouch(t);const M=new sc(s),E=l.toWorld(v.theta,v.laneOffset);s.position.set(E.x,E.y+9,E.z-14);let U=!1,A=!1;const T=new zl;let P=0;function W(){r.setSize(window.innerWidth,window.innerHeight),s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()}window.addEventListener("resize",W);function _(){P=requestAnimationFrame(_);const x=Math.min(.05,T.getDelta()),F=ng(b);F.useItem=b.state.useItem&&!U,U=b.state.useItem,tg(c,x,F),c.fx.update(x);const D={position:v.mesh.position,heading:l.headingAt(v.theta)};M.update(D,x),u.update(ig(c)),r.render(a,s),c.status!=="racing"&&!A&&(A=!0,c.status==="won"&&kt.play("win"),setTimeout(()=>{typeof n=="function"&&n({won:c.status==="won",rank:c.endRank||v.rank,total:m.length,characterName:h.name})},900))}return _(),{dispose(){cancelAnimationFrame(P),window.removeEventListener("resize",W),b.detach(),u.destroy(),c.fx&&c.fx.dispose(),a.traverse(x=>{x.geometry&&x.geometry.dispose?.(),x.material&&(Array.isArray(x.material)?x.material.forEach(F=>F.dispose?.()):x.material.dispose?.())}),r.dispose()}}}const zt=i=>({enabled:!1,shrinkTo:0,note:i||"Battle-royale shrinking cursed zone — next batch."}),gs=[{id:"gingerbread_colosseum",name:"Gingerbread Colosseum",tale:"Hansel and Gretel",biome:"confection",bounds:{shape:"circle",radius:110},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"ring_and_center",decorationSet:"sweets",visualTheme:{sky:2757408,fog:3808299,ground:8014392,wall:14711391,light:16766629},hazards:["oven_vents","gumdrop_bumpers"],futureCursedZone:zt()},{id:"mirror_hall_arena",name:"Mirror Hall",tale:"Snow White",biome:"mirror",bounds:{shape:"rect",width:180,depth:140},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"grid",decorationSet:"mirror_glass",visualTheme:{sky:987680,fog:1778224,ground:3752271,wall:11868062,light:14744572},hazards:["glare_panels","shard_fields"],futureCursedZone:zt()},{id:"thorn_garden_arena",name:"Thorn Garden",tale:"Little Briar Rose",biome:"thornwood",bounds:{shape:"circle",radius:100},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"briar_thorns",visualTheme:{sky:1313567,fog:1905200,ground:3551306,wall:16740502,light:13154047},hazards:["thorn_walls","sleep_pollen"],futureCursedZone:zt()},{id:"ratcatcher_square",name:"Ratcatcher's Square",tale:"The Pied Piper",biome:"town",bounds:{shape:"rect",width:160,depth:160},stocks:4,matchType:"stock",pickupCount:11,scatterPattern:"perimeter",decorationSet:"old_town",visualTheme:{sky:1708832,fog:2300460,ground:4604494,wall:16556817,light:15325350},hazards:["rat_swarms","market_stalls"],futureCursedZone:zt()},{id:"iron_forest_pit",name:"Iron Forest Pit",tale:"Iron Hans",biome:"iron_forest",bounds:{shape:"circle",radius:120},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"ring_and_center",decorationSet:"iron_woods",visualTheme:{sky:1315084,fog:1906706,ground:4340272,wall:10914404,light:14524766},hazards:["iron_roots","cage_traps"],futureCursedZone:zt()},{id:"frozen_skyfall_arena",name:"Frozen Skyfall",tale:"Mother Holle",biome:"sky",bounds:{shape:"circle",radius:130},stocks:3,matchType:"stock",pickupCount:10,scatterPattern:"scatter",decorationSet:"sky_clouds",visualTheme:{sky:2241349,fog:3360858,ground:6978186,wall:9494767,light:16777215},hazards:["snow_drifts","pitch_patches"],futureCursedZone:zt()},{id:"ember_forge_arena",name:"Ember Forge",tale:"The Devil's Sooty Brother",biome:"mine",bounds:{shape:"rect",width:150,depth:120},stocks:2,matchType:"stock",pickupCount:9,scatterPattern:"grid",decorationSet:"ember_mine",visualTheme:{sky:1181704,fog:1903626,ground:3810336,wall:15228164,light:16752212},hazards:["fire_vents","soot_clouds"],futureCursedZone:zt()},{id:"swan_marsh_basin",name:"Swan Marsh Basin",tale:"The Six Swans",biome:"wetland",bounds:{shape:"circle",radius:115},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"swan_marsh",visualTheme:{sky:1186338,fog:1713712,ground:4345948,wall:9358054,light:15330543},hazards:["water_slicks","reed_walls"],futureCursedZone:zt()},{id:"juniper_graveyard_arena",name:"Juniper Graveyard",tale:"The Juniper Tree",biome:"graveyard",bounds:{shape:"circle",radius:105},stocks:3,matchType:"stock",pickupCount:9,scatterPattern:"scatter",decorationSet:"juniper_graves",visualTheme:{sky:790288,fog:1317146,ground:3423544,wall:13292229,light:11121836},hazards:["bone_walls","falling_apples"],futureCursedZone:zt()},{id:"grimm_castle_courtyard",name:"Grimm Castle Courtyard",tale:"General Grimm",biome:"castle",bounds:{shape:"rect",width:190,depth:190},stocks:4,matchType:"stock",pickupCount:12,scatterPattern:"ring_and_center",decorationSet:"grimm_castle",visualTheme:{sky:657170,fog:1183007,ground:3683408,wall:11868062,light:14723839},hazards:["portcullis_gates","fire_vents","fog_banks"],futureCursedZone:zt("Finale arena — prime candidate for the first shrinking cursed-zone battle royale.")}],Zo=Object.fromEntries(gs.map(i=>[i.id,i])),og="gingerbread_colosseum",Pn=7;function lg(i){if(i.shape==="rect"){const t=i.width/2,n=i.depth/2;return{shape:"rect",hw:t,hd:n,clamp(r,a){const s=Math.max(-t+Pn,Math.min(t-Pn,r)),o=Math.max(-n+Pn,Math.min(n-Pn,a));return{x:s,z:o,hit:s!==r||o!==a}},extent:Math.max(t,n)}}const e=i.radius;return{shape:"circle",radius:e,clamp(t,n){const r=Math.hypot(t,n),a=e-Pn;if(r>a){const s=a/(r||1);return{x:t*s,z:n*s,hit:!0}}return{x:t,z:n,hit:!1}},extent:e}}function cg(i,e,t){const n=[],r=e.extent-Pn-6;for(let a=0;a<t;a++){let s,o;const l=a/t*Math.PI*2;switch(i){case"ring_and_center":a%4===0?(s=a%8===0?r*.18:-r*.18,o=a%3===0?r*.18:-r*.18):(s=Math.cos(l)*r*.6,o=Math.sin(l)*r*.6);break;case"grid":{const h=Math.ceil(Math.sqrt(t)),f=a%h/(h-1||1)-.5,p=Math.floor(a/h)/(h-1||1)-.5;s=f*r*1.5,o=p*r*1.5;break}case"perimeter":s=Math.cos(l)*r*.82,o=Math.sin(l)*r*.82;break;default:s=Math.cos(l*1.7)*r*(.3+.55*(a*37%100/100)),o=Math.sin(l*1.3)*r*(.3+.55*(a*53%100/100))}const d=e.clamp(s,o);n.push({x:d.x,z:d.z})}return n}function dg(i,e){const t=e.visualTheme,n=lg(e.bounds);i.background=new Ie(t.sky),i.fog=new Lr(t.fog,.0035);const r=new tn;r.name=`arena:${e.id}`,r.add(new Fl(t.light,t.ground,.9));const a=new kl(t.light,.9);a.position.set(40,90,30),r.add(a),r.add(new Bl(t.sky,.4));const s=new pt({color:t.ground,roughness:.95});let o;n.shape==="circle"?(o=new Ne(new Dr(n.radius,64),s),o.rotation.x=-Math.PI/2):(o=new Ne(new mi(n.hw*2,n.hd*2),s),o.rotation.x=-Math.PI/2),r.add(o);const l=new pt({color:t.wall,emissive:t.wall,emissiveIntensity:.28,roughness:.6});if(n.shape==="circle"){const m=new Ne(new xn(n.radius,1.6,8,96),l);m.rotation.x=Math.PI/2,m.position.y=2,r.add(m)}else{const m=(g,v,c,u)=>{const b=new Ne(new Bt(g,5,v),l);b.position.set(c,2.5,u),r.add(b)};m(n.hw*2+4,3,0,-n.hd),m(n.hw*2+4,3,0,n.hd),m(3,n.hd*2+4,-n.hw,0),m(3,n.hd*2+4,n.hw,0)}const d=new pt({color:t.wall,roughness:.8}),h=22;for(let m=0;m<h;m++){const g=m/h*Math.PI*2,v=n.extent-Pn-2,c=4+m%4*3,u=m%3===0?new Ui(1.4,c,6):m%3===1?new Bt(2.4,c,2.4):new Nn(.8,1.1,c,6),b=new Ne(u,d);b.position.set(Math.cos(g)*v,c/2-.4,Math.sin(g)*v),r.add(b)}i.add(r);const f=cg(e.scatterPattern,n,e.pickupCount||9),p=m=>{const g=[],v=n.extent*.45;for(let c=0;c<m;c++){const u=c/m*Math.PI*2;g.push({x:Math.cos(u)*v,z:Math.sin(u)*v,heading:u+Math.PI})}return g};return{id:e.id,config:e,bounds:n,visualTheme:t,stocks:e.stocks??3,pickupSpawns:f,startPositions:p,group:r}}const hg=2,Rr=4.5;function Bn(i,e,t,n){const r=i-t,a=e-n;return r*r+a*a}function lc(i,e){let t=null,n=1/0;for(const r of i.fighters){if(r===e||!r.alive)continue;const a=Bn(e.pos.x,e.pos.z,r.pos.x,r.pos.z);a<n&&(n=a,t=r)}return t?{e:t,d:Math.sqrt(n)}:null}function ug(i,e){let t=null,n=1/0;for(const r of i.reliquaries){if(!r.active)continue;const a=Bn(e.pos.x,e.pos.z,r.x,r.z);a<n&&(n=a,t=r)}return t}function cc(i,e,t){return Math.atan2(e-i.pos.x,t-i.pos.z)}function fg(i,e){let t=(e-i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function Ls(i,e,t){const n=i.time;if(!e.alive||e.invulnUntil>n)return!1;if(e.effects.shieldUntil>n)return e.effects.shieldUntil=0,!1;if(e.stocks-=1,e.effects.spinUntil=n+$l,e.speed*=.2,t&&t!==e&&(t.kos+=1,t.score+=1),i.fx&&i.fx.burst(e.mesh.position,16765286,16),e.isPlayer&&i.fx&&i.fx.flash("#ff8aa0",.55),i.audio&&i.audio.play(e.stocks<=0?"ko":"hit"),e.stocks<=0)e.alive=!1,e.mesh.visible=!1,i.fx&&i.fx.ring(e.mesh.position,14715498),i.aliveCount=i.fighters.filter(r=>r.alive).length,i.koNotice={text:`${e.label} is out!`,until:n+2.4};else{const r=i.arena.startPositions(i.fighters.length)[Math.floor(Is(0,i.fighters.length))]||{x:0,z:0,heading:0};e.pos.x=r.x,e.pos.z=r.z,e.heading=r.heading,e.speed=0,e.invulnUntil=n+hg,e.isPlayer&&(i.koNotice={text:`KO! ${e.stocks} stock${e.stocks===1?"":"s"} left`,until:n+2})}return!0}function pg(i,e){const t=lc(i,e),n=new Fn(.8,0),r=new Ne(n,new pt({color:13495038,emissive:13495038,emissiveIntensity:.7}));r.position.set(e.pos.x,1.4,e.pos.z),i.scene.add(r),i.projectiles.push({mesh:r,x:e.pos.x,z:e.pos.z,heading:e.heading,ownerId:e.id,targetId:t?t.e.id:null,life:3.5})}function mg(i){return i==="slow"?5613104:i==="fog"?15267071:i==="fire"?15228164:13214247}function gg(i,e,t){const n=mg(t),r=t==="slow"||t==="fog"?new Nr(1.5,0):new xn(1.4,.35,6,10),a=new Ne(r,new pt({color:n,emissive:n,emissiveIntensity:.4}));a.position.set(e.pos.x,1,e.pos.z),i.scene.add(a),i.traps.push({mesh:a,x:e.pos.x,z:e.pos.z,kind:t,ownerId:e.id,life:12,armedAt:i.time+.4})}function _g(i,e){if(!e.heldItem)return null;const t=Or[e.heldItem];return e.heldItem=null,tc(i,e,t,{spawnProjectile:r=>pg(i,r),spawnTrap:(r,a)=>gg(i,r,a),scrambleEnemies:r=>xg(i,r)})}function xg(i,e){for(const t of i.fighters)t===e||!t.alive||Bn(e.pos.x,e.pos.z,t.pos.x,t.pos.z)<70*70&&(t.effects.scrambleUntil=i.time+2.2)}function vg(i,e,t,n){const r=i.time,a=e.effects.spinUntil>r;let s=fi(t.steer,-1,1);e.effects.scrambleUntil>r&&(s=-s);const o=e.effects.steerAssistUntil>r;e.heading+=s*e.turn*(a?.3:1)*(o?1.25:1)*n;let l=e.maxSpeed*t.throttle;e.effects.boostUntil>r&&(l*=e.effects.boostMult||ql),e.effects.slowUntil>r&&(l*=Yl),a&&(l*=.3),e.speed+=(l-e.speed)*Math.min(1,n*(e.accel*.25));const d=Math.sin(e.heading),h=Math.cos(e.heading);let f=e.pos.x+d*e.speed*n,p=e.pos.z+h*e.speed*n;const m=i.arena.bounds.clamp(f,p);if(m.hit&&(e.speed*=.4),e.pos.x=m.x,e.pos.z=m.z,t.useItem&&e.heldItem){const g=_g(i,e);g&&e.isPlayer&&(i.lastItemMsg={text:g,until:r+2})}if(e.effects.boostUntil>r&&e.alive)for(const g of i.fighters)g===e||!g.alive||Bn(e.pos.x,e.pos.z,g.pos.x,g.pos.z)<Rr*Rr&&Ls(i,g,e)}function yg(i,e,t){e._wander===void 0&&(e._wander=Math.random()*6.28),e._wander+=t;let n,r,a=!1;if(!e.heldItem){const d=ug(i,e);d&&(n=d.x,r=d.z)}const s=lc(i,e);n===void 0&&s&&(n=s.e.pos.x,r=s.e.pos.z,e.heldItem&&s.d<60&&Math.random()<t*.9&&(a=!0)),n===void 0&&(n=Math.cos(e._wander)*30,r=Math.sin(e._wander)*30);const o=cc(e,n,r);return{steer:fi(fg(e.heading,o)*1.6,-1,1),throttle:e.effects.spinUntil>i.time?.3:.95,useItem:a}}function Mg(i,e){for(let t=i.projectiles.length-1;t>=0;t--){const n=i.projectiles[t],r=n.targetId?i.fighters.find(o=>o.id===n.targetId&&o.alive):null;r&&(n.heading=cc({pos:{x:n.x,z:n.z}},r.pos.x,r.pos.z)),n.x+=Math.sin(n.heading)*fs*e,n.z+=Math.cos(n.heading)*fs*e,n.mesh.position.set(n.x,1.4,n.z),n.life-=e;let a=n.life<=0;r&&Bn(n.x,n.z,r.pos.x,r.pos.z)<Rr*Rr&&(Ls(i,r,i.fighters.find(o=>o.id===n.ownerId)),a=!0),i.arena.bounds.clamp(n.x,n.z).hit&&(a=!0),a&&(i.scene.remove(n.mesh),i.projectiles.splice(t,1))}}function Sg(i,e){for(let t=i.traps.length-1;t>=0;t--){const n=i.traps[t];if(n.life-=e,n.mesh.rotation.y+=e*2,i.time>=n.armedAt){for(const r of i.fighters)if(!(!r.alive||r.id===n.ownerId)&&Bn(n.x,n.z,r.pos.x,r.pos.z)<16){if(r.effects.trapImmuneUntil>i.time)continue;n.kind==="slow"||n.kind==="fog"?r.effects.slowUntil=Math.max(r.effects.slowUntil||0,i.time+Kl):(Ls(i,r,i.fighters.find(a=>a.id===n.ownerId)),n.life=0)}}n.life<=0&&(i.scene.remove(n.mesh),i.traps.splice(t,1))}}function bg(i,e){const t=i.time;for(const n of i.reliquaries)if(n.active){ec(n.group,t,e);for(const r of i.fighters)if(!(!r.alive||r.heldItem)&&Bn(n.x,n.z,r.pos.x,r.pos.z)<ps*ps){r.heldItem=nc(r.rank,i.aliveCount),n.active=!1,n.group.visible=!1,n.respawnAt=t+Is(jl,Zl),i.fx&&i.fx.burst(n.group.position,i.arena.visualTheme.light,10),i.audio&&r.isPlayer&&i.audio.play("pickup");break}}else t>=n.respawnAt&&(n.active=!0,n.group.visible=!0)}function Eg(i){const e=[...i.fighters].sort((t,n)=>t.alive!==n.alive?t.alive?-1:1:n.stocks!==t.stocks?n.stocks-t.stocks:n.score-t.score);e.forEach((t,n)=>{t.rank=n+1}),i.ranked=e}function wg(i,e,t){if(i.status!=="battle")return;i.time+=e;for(const a of i.fighters){if(!a.alive)continue;const s=a.isPlayer?t:yg(i,a,e);vg(i,a,s,e);const o=a.effects.hopUntil>i.time?Math.max(0,Math.sin((a.effects.hopUntil-i.time)/.5*Math.PI)*2.2):0;a.mesh.position.set(a.pos.x,o,a.pos.z),a.mesh.rotation.y=a.heading,a.invulnUntil>i.time?a.mesh.visible=Math.floor(i.time*12)%2===0:a.mesh.visible=!0}Mg(i,e),Sg(i,e),bg(i,e),Eg(i);const n=i.fighters.filter(a=>a.alive);i.aliveCount=n.length;const r=i.status;!i.player.alive&&i.status==="battle"?(i.status="lost",i.endRank=i.player.rank):n.length===1&&i.status==="battle"&&(i.status=n[0].isPlayer?"won":"lost",i.endRank=1),r==="battle"&&i.status!=="battle"&&i.audio&&i.audio.play(i.status==="won"?"win":"lose")}function Tg(i){const e=i.state;return{throttle:e.accel?1:e.brake?-.6:0,steer:(e.right?1:0)-(e.left?1:0),useItem:e.useItem}}function Ag(i,{canvas:e,uiRoot:t,onMatchEnd:n}){const r=new Ll({canvas:e,antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(window.innerWidth,window.innerHeight);const a=new Dl,s=new yt(64,window.innerWidth/window.innerHeight,.1,2e3),o=Zo[i.arenaId]||Zo.gingerbread_colosseum,l=dg(a,o),d=Math.max(2,Math.min(16,i.racerCount||8)),h=Hl[i.playerCharacterId]||On[0],f=Ar[i.playerKartId]||nn[0],p=On.filter(x=>x.id!==h.id).sort(()=>Math.random()-.5),m=l.startPositions(d),g=[];for(let x=0;x<d;x++){let F,D;x===0?(F=h,D=f):(F=p[(x-1)%p.length],D=Ar[F.signatureKartId]||nn[x*7%nn.length]);const z=Fm({character:F,kart:D,isPlayer:x===0,start:m[x],stocks:l.stocks});g.push(z),a.add(z.mesh)}const v=g[0],c={scene:a,arena:l,fighters:g,player:v,time:0,status:"battle",aliveCount:d,reliquaries:[],projectiles:[],traps:[],ranked:g.slice(),koNotice:null,lastItemMsg:null,endRank:null};for(const x of l.pickupSpawns){const F=Ql(l.visualTheme.light);F.position.set(x.x,2.2,x.z),F.userData.baseY=2.2,a.add(F),c.reliquaries.push({group:F,x:x.x,z:x.z,baseY:2.2,active:!0,respawnAt:0})}c.audio=kt,c.fx=new oc(a,t),kt.resume(),kt.play("start");const u=rc(t),b=new ac;b.attach(),b.attachTouch(t);const M=new sc(s);s.position.set(v.pos.x,12,v.pos.z-16);let E=!1,U=!1,A=0;const T=new zl,P=new C;function W(){r.setSize(window.innerWidth,window.innerHeight),s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()}window.addEventListener("resize",W);function _(){A=requestAnimationFrame(_);const x=Math.min(.05,T.getDelta()),F=Tg(b);F.useItem=b.state.useItem&&!E,E=b.state.useItem,wg(c,x,F),c.fx.update(x),P.set(Math.sin(v.heading),0,Math.cos(v.heading)),M.update({position:v.mesh.position,heading:P},x),u.update(rg(c)),r.render(a,s),c.status!=="battle"&&!U&&(U=!0,setTimeout(()=>{typeof n=="function"&&n({mode:"arena",won:c.status==="won",rank:c.endRank||v.rank,total:g.length,characterName:h.name,kos:v.kos,stocksLeft:Math.max(0,v.stocks),arenaId:o.id})},900))}return _(),{dispose(){cancelAnimationFrame(A),window.removeEventListener("resize",W),b.detach(),u.destroy(),c.fx&&c.fx.dispose(),a.traverse(x=>{x.geometry&&x.geometry.dispose?.(),x.material&&(Array.isArray(x.material)?x.material.forEach(F=>F.dispose?.()):x.material.dispose?.())}),r.dispose()}}}const lr={headline:"Back the tale",sub:"You're playing the free prototype. Premium content is on the way — no payment is taken yet.",note:"Presentation only — no checkout, no payment is processed in this build.",tiers:[{id:"free",name:"Free Prototype",price:"$0",period:"",blurb:"The full elimination prototype, free in your browser.",features:["All 32 tracks","All 32 characters & karts","Elimination Royale mode"],cta:"Playing now",ctaState:"active"},{id:"supporter",name:"Supporter",price:"$4.99",period:"one-time",blurb:"Support development + cosmetic extras when they land.",features:["Supporter cosmetic skins","Name in credits","Early access to new cups"],cta:"Coming soon",ctaState:"soon"},{id:"premium",name:"Full Game",price:"$9.99",period:"one-time",blurb:"The complete game: progression, leaderboards, all cups.",features:["Account + progression","Online leaderboards","Premium cups & unlocks"],cta:"Coming soon",ctaState:"soon"}]},Jo=i=>"#"+i.toString(16).padStart(6,"0");function Rg(i,e){const t={mode:"race",raceType:"elimination",playerCharacterId:Am,playerKartId:Rm,trackId:Cm,arenaId:og,racerCount:10},n=document.createElement("div");n.className="menu",n.innerHTML=`
    <div class="menu-inner">
      <div class="menu-topbar">
        <a class="btw-link" href="https://burntthumbworks.com/">↩ Burnt Thumb Works</a>
        <button class="mute-btn" data-mute aria-label="Toggle sound" aria-pressed="false">🔊</button>
      </div>
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
      <p class="byline">A <a href="https://burntthumbworks.com/"><b>Burnt Thumb Works</b></a> game · public-domain Grimm folklore · original storybook interpretation.</p>
    </div>
  `,i.appendChild(n);const r={char:n.querySelector('[data-list="char"]'),kart:n.querySelector('[data-list="kart"]'),track:n.querySelector('[data-list="track"]'),arena:n.querySelector('[data-list="arena"]')},a={char:n.querySelector('[data-pick="char"]'),kart:n.querySelector('[data-pick="kart"]'),track:n.querySelector('[data-pick="track"]'),arena:n.querySelector('[data-pick="arena"]')};function s(c,u,b,M,E,U){const A=document.createElement("button");return A.className="card",A.dataset.id=u,A.dataset.kind=c,A.innerHTML=`<span class="swatch" style="background:linear-gradient(135deg, ${Jo(E)}, ${Jo(U)})"></span>
      <span class="card-name">${b}</span><span class="card-sub">${M}</span>`,A.addEventListener("click",()=>d(c,u)),A}On.forEach(c=>r.char.appendChild(s("char",c.id,c.name,c.tale,c.palette.primary,c.palette.secondary))),nn.forEach(c=>r.kart.appendChild(s("kart",c.id,c.name,c.type,c.palette.primary,c.palette.secondary))),us.forEach(c=>r.track.appendChild(s("track",c.id,c.name,`${c.biome} · ${c.variation.replace(/_/g," ")}`,c.visualTheme.border,c.visualTheme.road))),gs.forEach(c=>r.arena.appendChild(s("arena",c.id,c.name,`${c.biome} · ${c.bounds.shape} · ${c.stocks} stocks`,c.visualTheme.wall,c.visualTheme.ground)));const o={char:On,kart:nn,track:us,arena:gs},l={char:"playerCharacterId",kart:"playerKartId",track:"trackId",arena:"arenaId"};function d(c,u){t[l[c]]=u,r[c].querySelectorAll(".card").forEach(M=>M.classList.toggle("on",M.dataset.id===u));const b=o[c].find(M=>M.id===u);a[c].textContent=b?`— ${b.name}`:""}["char","kart","track","arena"].forEach(c=>d(c,t[l[c]]));const h=n.querySelector("[data-mode-desc]"),f=n.querySelector("[data-foot]"),p=n.querySelector("[data-start]"),m=n.querySelector("[data-count-label]");function g(c){t.mode=c,n.querySelectorAll(".mode-btn").forEach(u=>u.classList.toggle("on",u.dataset.mode===c)),n.querySelectorAll("[data-show]").forEach(u=>{u.style.display=u.dataset.show===c?"":"none"}),c==="arena"?(h.textContent="Free-drive combat in a contained folklore arena. Grab reliquaries, sling items, knock rivals out of their stocks. Last fable standing wins.",p.textContent="Start Battle ⚔️",m.textContent="Fighters",f.innerHTML="Controls: <b>Arrows / WASD</b> drive & turn · <b>Space</b> use item/weapon · boost-ram or hit rivals to take a stock."):(h.textContent="Race varied circular Grimm tracks with items on the course. Elimination: don't be last when the cull comes.",p.textContent="Start Race ▶",m.textContent="Racers",f.innerHTML="Controls: <b>Arrows / WASD</b> steer · <b>Space</b> use item · avoid being last every 15s.")}n.querySelectorAll(".mode-btn").forEach(c=>c.addEventListener("click",()=>g(c.dataset.mode))),g("race"),n.querySelector("[data-racers]").addEventListener("change",c=>{t.racerCount=parseInt(c.target.value,10)}),p.addEventListener("click",()=>{kt.resume(),kt.play("ui"),e({...t})});const v=n.querySelector("[data-mute]");return v.addEventListener("click",()=>{kt.resume();const c=kt.toggleMute();v.textContent=c?"🔇":"🔊",v.classList.toggle("off",c),v.setAttribute("aria-pressed",String(c))}),n.querySelector("[data-pricing]").innerHTML=`
    <h2 class="pricing-head">${lr.headline}</h2>
    <p class="pricing-sub">${lr.sub}</p>
    <div class="tiers">
      ${lr.tiers.map(c=>`
        <div class="tier tier--${c.id}">
          <div class="tier-name">${c.name}</div>
          <div class="tier-price">${c.price}${c.period?`<span> / ${c.period}</span>`:""}</div>
          <div class="tier-blurb">${c.blurb}</div>
          <ul class="tier-feats">${c.features.map(u=>`<li>${u}</li>`).join("")}</ul>
          <button class="tier-cta ${c.ctaState==="soon"?"soon":"on"}" ${c.ctaState==="soon"?'disabled aria-disabled="true"':""}>${c.cta}</button>
        </div>`).join("")}
    </div>
    <p class="pricing-note">${lr.note}</p>`,{el:n,show(){n.style.display=""},hide(){n.style.display="none"},destroy(){n.remove()}}}function Cg(i,{mode:e,won:t,rank:n,total:r,characterName:a,kos:s,stocksLeft:o,onReplay:l,onMenu:d}){const h=e==="arena",f=t?h?"Last Fable Standing!":"Last Tale Standing!":h?"Knocked Out":"Eliminated";let p;h?p=t?`${a} outlasted ${r-1} rivals — ${s||0} KO${s===1?"":"s"}.`:`${a} fell at ${n} of ${r} · ${s||0} KO${s===1?"":"s"}.`:p=t?`${a} outlasted ${r-1} rivals.`:`${a} finished ${n} of ${r}.`;const m=document.createElement("div");return m.className=`end-screen ${t?"win":"lose"}`,m.innerHTML=`
    <div class="end-card">
      <h1>${f}</h1>
      <p class="end-sub">${p}</p>
      <div class="end-actions">
        <button data-replay>${h?"Battle Again ⚔️":"Race Again ▶"}</button>
        <button data-menu class="ghost">Change Selection</button>
      </div>
      <a class="end-btw" href="https://burntthumbworks.com/">A Burnt Thumb Works game — visit the studio ↗</a>
    </div>`,i.appendChild(m),m.querySelector("[data-replay]").addEventListener("click",()=>{m.remove(),l()}),m.querySelector("[data-menu]").addEventListener("click",()=>{m.remove(),d()}),{destroy(){m.remove()}}}const dc="grimmkart_stats_v2",Ds=2;function ba(){return{schemaVersion:Ds,matches:[],totals:{played:0,wins:0,races:0,arenas:0,kos:0,bestPlacement:null}}}function Pg(){try{const i=localStorage.getItem(dc);if(!i)return ba();const e=JSON.parse(i);return!e||e.schemaVersion!==Ds?ba():e}catch{return ba()}}let Ig=0;function Lg(i){const e={schemaVersion:Ds,id:`m_${Date.now()}_${Ig++}`,at:new Date().toISOString(),...i};let t;try{t=Pg(),t.matches.push(e),t.matches.length>200&&(t.matches=t.matches.slice(-200));const n=t.totals;n.played+=1,e.result?.won&&(n.wins+=1),e.mode==="race"?n.races+=1:e.mode==="arena"&&(n.arenas+=1),n.kos+=e.kos||0;const r=e.result?.placement;r&&(n.bestPlacement===null||r<n.bestPlacement)&&(n.bestPlacement=r),localStorage.setItem(dc,JSON.stringify(t))}catch{return e}return e}function Dg(i,e){const t={mode:i.mode||"race",characterId:e.playerCharacterId,kartId:e.playerKartId,result:{won:!!i.won,placement:i.rank,total:i.total}};return t.mode==="arena"?(t.arenaId=i.arenaId||e.arenaId,t.arenaType="stock",t.kos=i.kos||0,t.stocksLeft=i.stocksLeft??0):(t.trackId=e.trackId,t.raceType=e.raceType||"elimination"),t}const _r=document.getElementById("game-canvas"),si=document.getElementById("ui-root");let Ti=null,xr=null,_s=null;function hc(){Ti&&(Ti.dispose(),Ti=null),si.innerHTML=""}function uc(i){_s=i,xr&&(xr.destroy(),xr=null),si.innerHTML="",_r.style.display="",i.mode==="arena"?Ti=Ag(i,{canvas:_r,uiRoot:si,onMatchEnd:Qo}):Ti=sg(i,{canvas:_r,uiRoot:si,onRaceEnd:e=>Qo({mode:"race",...e})})}function Qo(i){try{Lg(Dg(i,_s))}catch{}hc(),Cg(si,{...i,onReplay:()=>uc(_s),onMenu:()=>fc()})}function fc(){hc(),_r.style.display="none",xr=Rg(si,i=>uc(i))}fc();
