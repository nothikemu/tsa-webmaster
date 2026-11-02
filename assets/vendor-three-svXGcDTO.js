const rf="187",iu={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nu={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,af=1,of=2,lf=3,hf=0,ru=1,cf=2,su=3,au=0,ou=1,lu=2,uf=0,df=1,pf=2,mf=3,ff=4,gf=5,_f=6,Ki=100,hu=101,cu=102,vf=103,yf=104,uu=200,du=201,pu=202,mu=203,Ga=204,Va=205,fu=206,gu=207,_u=208,vu=209,yu=210,xu=211,Mu=212,Su=213,bu=214,Tu=0,wu=1,Eu=2,Au=3,Ru=4,Cu=5,Pu=6,Iu=7,Lu=0,Nu=1,Du=2,xf=0,zl=1,Gl=2,Vl=3,kl=4,Hl=5,Wl=6,Xl=7,ka="attached",jl="detached",$r=300,$i=301,Qi=302,qn=303,Yn=304,Zn=1e3,$t=1001,Jn=1002,Nt=1003,Ha=1004,Mf=1004,bn=1005,Sf=1005,gt=1006,Kn=1007,bf=1007,gi=1008,Tf=1008,Vt=1009,Wa=1010,Xa=1011,Tn=1012,Qr=1013,_i=1014,Dt=1015,oi=1016,es=1017,ts=1018,en=1020,ja=35902,qa=35899,Ya=1021,Za=1022,qt=1023,tn=1026,Ri=1027,is=1028,$n=1029,Bi=1030,ns=1031,wf=1032,rs=1033,Qn=33776,er=33777,tr=33778,ir=33779,ss=35840,as=35841,os=35842,ls=35843,hs=36196,cs=37492,us=37496,ds=37488,ps=37489,nr=37490,ms=37491,fs=37808,gs=37809,_s=37810,vs=37811,ys=37812,xs=37813,Ms=37814,Ss=37815,bs=37816,Ts=37817,ws=37818,Es=37819,As=37820,Rs=37821,Cs=36492,Ps=36494,Is=36495,Ls=36283,Ns=36284,rr=36285,Ds=36286,ql=2200,Yl=2201,Zl=2202,sr=2300,Us=2301,Os=2302,Ja=2303,nn=2400,rn=2401,ar=2402,Jl=2500,Ka=2501,Ef=0,Af=1,Rf=2,Kl=3200,Cf=3201,Pf=3202,If=3203,Lf=0,Nf=1,sn="",kt="srgb",or="srgb-linear",lr="linear",Qe="srgb",Df="",Uf="rg",Of="ga",Ff=0,Fs=7680,Bf=7681,zf=7682,Gf=7683,Vf=34055,kf=34056,Hf=5386,Wf=512,Xf=513,jf=514,qf=515,Yf=516,Zf=517,Jf=518,Kf=519,Uu=512,Ou=513,Fu=514,$a=515,Bu=516,zu=517,Qa=518,eo=519,Bs=35044,$f=35048,Qf=35040,eg=35045,tg=35049,ig=35041,ng=35046,rg=35050,sg=35042,ag="100",to="300 es",vi=2e3,an=2001,Gu={COMPUTE:"compute",RENDER:"render"},Vu={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},ku={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Hu={TEXTURE_COMPARE:"depthTextureCompare"},Wu={NONE:0,SHARED:1,FULL:2},og={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function hr(s,e){return new og[s](e)}function $l(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ql(){const s=zs("canvas");return s.style.display="block",s}const Xu={};let on=null;function ju(s){on=s}function qu(){return on}function cr(...s){const e="THREE."+s.shift();on?on("log",e,...s):console.log(e,...s)}function Yu(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function oe(...s){const e="THREE."+(s=Yu(s)).shift();if(on)on("warn",e,...s);else{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function we(...s){const e="THREE."+(s=Yu(s)).shift();if(on)on("error",e,...s);else{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ci(...s){const e=s.join(" ");e in Xu||(Xu[e]=!0,oe(...s))}function lg(){return typeof self<"u"&&self.scheduler!==void 0&&self.scheduler.yield!==void 0?self.scheduler.yield():new Promise(s=>{requestAnimationFrame(s)})}const Zu={[Tu]:0,[Eu]:6,[Ru]:4,[Au]:5,[wu]:1,[Pu]:2,[Iu]:7,[Cu]:3};class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const wn=Math.PI/180,En=180/Math.PI;function Qt(){const s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ut[255&s]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[255&e]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[63&t|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[255&i]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function De(s,e,t){return Math.max(e,Math.min(t,s))}function eh(s,e){return(s%e+e)%e}function Gs(s,e,t){return(1-t)*s+t*e}function th(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function io(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function An(s,e){if(e.constructor===Float32Array)return s;const t=io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ot(s,e){if(e.constructor===Float32Array)return s;const t=io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Ku={DEG2RAD:wn,RAD2DEG:En,generateUUID:Qt,clamp:De,euclideanModulo:eh,mapLinear:function(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:Gs,damp:function(s,e,t,i){return Gs(s,e,1-Math.exp(-t*i))},pingpong:function(s,e=1){return e-Math.abs(eh(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(Ju=s);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*wn},radToDeg:function(s){return s*En},isPowerOfTwo:function(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s},ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:th,setQuaternionFromProperEuler:function(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+i)/2),c=a((e+i)/2),u=r((e-i)/2),m=a((e-i)/2),p=r((i-e)/2),d=a((i-e)/2);switch(n){case"XYX":s.set(o*c,l*u,l*m,o*h);break;case"YZY":s.set(l*m,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*m,o*c,o*h);break;case"XZX":s.set(o*c,l*d,l*p,o*h);break;case"YXY":s.set(l*p,o*c,l*d,o*h);break;case"ZYZ":s.set(l*d,l*p,o*c,o*h);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Ot,denormalize:An};class ie{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(De(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(De(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],m=r[a+0],p=r[a+1],d=r[a+2],g=r[a+3];if(u!==g||l!==m||h!==p||c!==d){let _=l*m+h*p+c*d+u*g;_<0&&(m=-m,p=-p,d=-d,g=-g,_=-_);let f=1-o;if(_<.9995){const v=Math.acos(_),y=Math.sin(v);f=Math.sin(f*v)/y,l=l*f+m*(o=Math.sin(o*v)/y),h=h*f+p*o,c=c*f+d*o,u=u*f+g*o}else{l=l*f+m*o,h=h*f+p*o,c=c*f+d*o,u=u*f+g*o;const v=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=v,h*=v,c*=v,u*=v}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[a],m=r[a+1],p=r[a+2],d=r[a+3];return e[t]=o*d+c*u+l*p-h*m,e[t+1]=l*d+c*m+h*u-o*p,e[t+2]=h*d+c*p+o*m-l*u,e[t+3]=c*d-o*u-l*m-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(r/2),m=l(i/2),p=l(n/2),d=l(r/2);switch(a){case"XYZ":this._x=m*c*u+h*p*d,this._y=h*p*u-m*c*d,this._z=h*c*d+m*p*u,this._w=h*c*u-m*p*d;break;case"YXZ":this._x=m*c*u+h*p*d,this._y=h*p*u-m*c*d,this._z=h*c*d-m*p*u,this._w=h*c*u+m*p*d;break;case"ZXY":this._x=m*c*u-h*p*d,this._y=h*p*u+m*c*d,this._z=h*c*d+m*p*u,this._w=h*c*u-m*p*d;break;case"ZYX":this._x=m*c*u-h*p*d,this._y=h*p*u+m*c*d,this._z=h*c*d-m*p*u,this._w=h*c*u+m*p*d;break;case"YZX":this._x=m*c*u+h*p*d,this._y=h*p*u+m*c*d,this._z=h*c*d-m*p*u,this._w=h*c*u-m*p*d;break;case"XZY":this._x=m*c*u-h*p*d,this._y=h*p*u-m*c*d,this._z=h*c*d+m*p*u,this._w=h*c*u+m*p*d;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],m=i+o+u;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(De(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=n+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(De(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(De(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new E,$u=new Ft;class Oe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h)}set(e,t,i,n,r,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],m=i[2],p=i[5],d=i[8],g=n[0],_=n[3],f=n[6],v=n[1],y=n[4],b=n[7],S=n[2],w=n[5],A=n[8];return r[0]=a*g+o*v+l*S,r[3]=a*_+o*y+l*w,r[6]=a*f+o*b+l*A,r[1]=h*g+c*v+u*S,r[4]=h*_+c*y+u*w,r[7]=h*f+c*b+u*A,r[2]=m*g+p*v+d*S,r[5]=m*_+p*y+d*w,r[8]=m*f+p*b+d*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,m=o*l-c*r,p=h*r-a*l,d=t*u+i*m+n*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/d;return e[0]=u*g,e[1]=(n*h-c*i)*g,e[2]=(o*i-n*a)*g,e[3]=m*g,e[4]=(c*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=p*g,e[7]=(i*l-h*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new Oe,Qu=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){const s={enabled:!0,workingColorSpace:or,spaces:{},convert:function(n,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===Qe&&(n.r=zi(n.r),n.g=zi(n.g),n.b=zi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(n.r=ur(n.r),n.g=ur(n.g),n.b=ur(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===sn?lr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[or]:{primaries:e,whitePoint:i,transfer:lr,toXYZ:Qu,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Qu,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const He=hg();function zi(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function ur(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}let dr;class rh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{dr===void 0&&(dr=zs("canvas")),dr.width=e.width,dr.height=e.height;const n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=dr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*zi(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*zi(t[i]/255)):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cg=0;class yi{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Qt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(sh(n[a].image)):r.push(sh(n[a]))}else r=sh(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}class td extends yi{constructor(e=null){Ci('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}}let ug=0;const ah=new E;class ct extends li{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=Vt,h=ct.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Qt(),this.name="",this.source=new yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:oe(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$r)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Jn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Jn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ct.DEFAULT_IMAGE=null,ct.DEFAULT_MAPPING=$r,ct.DEFAULT_ANISOTROPY=1;class it{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,h=l[0],c=l[4],u=l[8],m=l[1],p=l[5],d=l[9],g=l[2],_=l[6],f=l[10];if(Math.abs(c-m)<.01&&Math.abs(u-g)<.01&&Math.abs(d-_)<.01){if(Math.abs(c+m)<.1&&Math.abs(u+g)<.1&&Math.abs(d+_)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,b=(p+1)/2,S=(f+1)/2,w=(c+m)/4,A=(u+g)/4,L=(d+_)/4;return y>b&&y>S?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=w/i,r=A/i):b>S?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=w/n,r=L/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=A/r,n=L/r),this.set(i,n,r,t),this}let v=Math.sqrt((_-d)*(_-d)+(u-g)*(u-g)+(m-c)*(m-c));return Math.abs(v)<.001&&(v=1),this.x=(_-d)/v,this.y=(u-g)/v,this.z=(m-c)/v,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this.w=De(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this.w=De(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(De(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class no extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new ct({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new yi(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends no{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vs extends ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends Yt{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Vs(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class ks extends ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class nd extends Yt{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ks(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class Ue{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,o,l,h,c,u,m,p,d,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h,c,u,m,p,d,g,_)}set(e,t,i,n,r,a,o,l,h,c,u,m,p,d,g,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=m,f[3]=p,f[7]=d,f[11]=g,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,n=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const m=a*c,p=a*u,d=o*c,g=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+d*h,t[5]=m-g*h,t[9]=-o*l,t[2]=g-m*h,t[6]=d+p*h,t[10]=a*l}else if(e.order==="YXZ"){const m=l*c,p=l*u,d=h*c,g=h*u;t[0]=m+g*o,t[4]=d*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-d,t[6]=g+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*c,p=l*u,d=h*c,g=h*u;t[0]=m-g*o,t[4]=-a*u,t[8]=d+p*o,t[1]=p+d*o,t[5]=a*c,t[9]=g-m*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*c,p=a*u,d=o*c,g=o*u;t[0]=l*c,t[4]=d*h-p,t[8]=m*h+g,t[1]=l*u,t[5]=g*h+m,t[9]=p*h-d,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,p=a*h,d=o*l,g=o*h;t[0]=l*c,t[4]=g-m*u,t[8]=d*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+d,t[10]=m-g*u}else if(e.order==="XZY"){const m=a*l,p=a*h,d=o*l,g=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=m*u+g,t[5]=a*c,t[9]=p*u-d,t[2]=d*u-p,t[6]=o*c,t[10]=g*u+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dg,e,pg)}lookAt(e,t,i){const n=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ln.crossVectors(i,ei),ln.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ln.crossVectors(i,ei)),ln.normalize(),ro.crossVectors(ei,ln),n[0]=ln.x,n[4]=ro.x,n[8]=ei.x,n[1]=ln.y,n[5]=ro.y,n[9]=ei.y,n[2]=ln.z,n[6]=ro.z,n[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],m=i[9],p=i[13],d=i[2],g=i[6],_=i[10],f=i[14],v=i[3],y=i[7],b=i[11],S=i[15],w=n[0],A=n[4],L=n[8],R=n[12],N=n[1],z=n[5],B=n[9],V=n[13],J=n[2],Y=n[6],k=n[10],D=n[14],K=n[3],ne=n[7],ve=n[11],Ee=n[15];return r[0]=a*w+o*N+l*J+h*K,r[4]=a*A+o*z+l*Y+h*ne,r[8]=a*L+o*B+l*k+h*ve,r[12]=a*R+o*V+l*D+h*Ee,r[1]=c*w+u*N+m*J+p*K,r[5]=c*A+u*z+m*Y+p*ne,r[9]=c*L+u*B+m*k+p*ve,r[13]=c*R+u*V+m*D+p*Ee,r[2]=d*w+g*N+_*J+f*K,r[6]=d*A+g*z+_*Y+f*ne,r[10]=d*L+g*B+_*k+f*ve,r[14]=d*R+g*V+_*D+f*Ee,r[3]=v*w+y*N+b*J+S*K,r[7]=v*A+y*z+b*Y+S*ne,r[11]=v*L+y*B+b*k+S*ve,r[15]=v*R+y*V+b*D+S*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],m=e[10],p=e[14],d=e[3],g=e[7],_=e[11],f=e[15],v=l*p-h*m,y=o*p-h*u,b=o*m-l*u,S=a*p-h*c,w=a*m-l*c,A=a*u-o*c;return t*(g*v-_*y+f*b)-i*(d*v-_*S+f*w)+n*(d*y-g*S+f*A)-r*(d*b-g*w+_*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return t*(a*c-o*h)-i*(r*c-o*l)+n*(r*h-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],m=e[10],p=e[11],d=e[12],g=e[13],_=e[14],f=e[15],v=t*o-i*a,y=t*l-n*a,b=t*h-r*a,S=i*l-n*o,w=i*h-r*o,A=n*h-r*l,L=c*g-u*d,R=c*_-m*d,N=c*f-p*d,z=u*_-m*g,B=u*f-p*g,V=m*f-p*_,J=v*V-y*B+b*z+S*N-w*R+A*L;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/J;return e[0]=(o*V-l*B+h*z)*Y,e[1]=(n*B-i*V-r*z)*Y,e[2]=(g*A-_*w+f*S)*Y,e[3]=(m*w-u*A-p*S)*Y,e[4]=(l*N-a*V-h*R)*Y,e[5]=(t*V-n*N+r*R)*Y,e[6]=(_*b-d*A-f*y)*Y,e[7]=(c*A-m*b+p*y)*Y,e[8]=(a*B-o*N+h*L)*Y,e[9]=(i*N-t*B-r*L)*Y,e[10]=(d*w-g*b+f*v)*Y,e[11]=(u*b-c*w-p*v)*Y,e[12]=(o*R-a*z-l*L)*Y,e[13]=(t*z-i*R+n*L)*Y,e[14]=(g*y-d*S-_*v)*Y,e[15]=(c*S-u*y+m*v)*Y,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,m=r*h,p=r*c,d=r*u,g=a*c,_=a*u,f=o*u,v=l*h,y=l*c,b=l*u,S=i.x,w=i.y,A=i.z;return n[0]=(1-(g+f))*S,n[1]=(p+b)*S,n[2]=(d-y)*S,n[3]=0,n[4]=(p-b)*w,n[5]=(1-(m+f))*w,n[6]=(_+v)*w,n[7]=0,n[8]=(d+y)*A,n[9]=(_-v)*A,n[10]=(1-(m+g))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=pr.set(n[0],n[1],n[2]).length();const o=pr.set(n[4],n[5],n[6]).length(),l=pr.set(n[8],n[9],n[10]).length();r<0&&(a=-a),xi.copy(this);const h=1/a,c=1/o,u=1/l;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=c,xi.elements[5]*=c,xi.elements[6]*=c,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,t.setFromRotationMatrix(xi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=2e3,l=!1){const h=this.elements,c=2*r/(t-e),u=2*r/(i-n),m=(t+e)/(t-e),p=(i+n)/(i-n);let d,g;if(l)d=r/(a-r),g=a*r/(a-r);else if(o===vi)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else{if(o!==an)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-r),g=-a*r/(a-r)}return h[0]=c,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=u,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3,l=!1){const h=this.elements,c=2/(t-e),u=2/(i-n),m=-(t+e)/(t-e),p=-(i+n)/(i-n);let d,g;if(l)d=1/(a-r),g=a/(a-r);else if(o===vi)d=-2/(a-r),g=-(a+r)/(a-r);else{if(o!==an)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);d=-1/(a-r),g=-r/(a-r)}return h[0]=c,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=u,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pr=new E,xi=new Ue,dg=new E(0,0,0),pg=new E(1,1,1),ln=new E,ro=new E,ei=new E,rd=new Ue,sd=new Ft;class ui{constructor(e=0,t=0,i=0,n=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],m=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Hs{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}}let mg=0;const ad=new E,mr=new Ft,Gi=new Ue,so=new E,Ws=new E,fg=new E,gg=new Ft,od=new E(1,0,0),ld=new E(0,1,0),hd=new E(0,0,1),cd={type:"added"},_g={type:"removed"},fr={type:"childadded",child:null},oh={type:"childremoved",child:null};class Ze extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new E,t=new ui,i=new Ft,n=new E(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Oe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ws,so,this.up):Gi.lookAt(so,Ws,this.up),this.quaternion.setFromRotationMatrix(Gi),n&&(Gi.extractRotation(n.matrixWorld),mr.setFromRotationMatrix(Gi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),fr.child=e,this.dispatchEvent(fr),fr.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_g),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),m=a(e.skeletons),p=a(e.animations),d=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),d.length>0&&(i.nodes=d)}return i.object=n,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ze.DEFAULT_UP=new E(0,1,0),Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rn extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,i),f=this._getHandJoint(h,g);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],m=c.position.distanceTo(u.position),p=.02,d=.005;h.inputState.pinching&&m>p+d?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=p-d&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},ao={h:0,s:0,l:0};function lh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=eh(e,1),t=De(t,0,1),i=De(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=lh(a,r,e+1/3),this.g=lh(a,r,e),this.b=lh(a,r,e-1/3)}return He.colorSpaceToWorking(this,n),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:oe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return He.workingToColorSpace(Bt.copy(this),e),65536*Math.round(De(255*Bt.r,0,255))+256*Math.round(De(255*Bt.g,0,255))+Math.round(De(255*Bt.b,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,n=Bt.g,r=Bt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=kt){He.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,n=Bt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(ao);const i=Gs(hn.h,ao.h,t),n=Gs(hn.s,ao.s,t),r=Gs(hn.l,ao.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ge;ge.NAMES=ud;class Ma{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sa{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=i}clone(){return new Sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hh extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new E,Vi=new E,ch=new E,ki=new E,gr=new E,_r=new E,dd=new E,uh=new E,dh=new E,ph=new E,mh=new it,fh=new it,gh=new it;class jt{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Mi.subVectors(e,t),n.cross(Mi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Mi.subVectors(n,t),Vi.subVectors(i,t),ch.subVectors(e,t);const a=Mi.dot(Mi),o=Mi.dot(Vi),l=Mi.dot(ch),h=Vi.dot(Vi),c=Vi.dot(ch),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const m=1/u,p=(h*l-o*c)*m,d=(a*c-o*l)*m;return r.set(1-p-d,d,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ki)!==null&&ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return mh.setScalar(0),fh.setScalar(0),gh.setScalar(0),mh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,i),gh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(mh,r.x),a.addScaledVector(fh,r.y),a.addScaledVector(gh,r.z),a}static isFrontFacing(e,t,i,n){return Mi.subVectors(i,t),Vi.subVectors(e,t),Mi.cross(Vi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),.5*Mi.cross(Vi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;gr.subVectors(n,i),_r.subVectors(r,i),uh.subVectors(e,i);const l=gr.dot(uh),h=_r.dot(uh);if(l<=0&&h<=0)return t.copy(i);dh.subVectors(e,n);const c=gr.dot(dh),u=_r.dot(dh);if(c>=0&&u<=c)return t.copy(n);const m=l*u-c*h;if(m<=0&&l>=0&&c<=0&&l-c>0)return a=l/(l-c),t.copy(i).addScaledVector(gr,a);ph.subVectors(e,r);const p=gr.dot(ph),d=_r.dot(ph);if(d>=0&&p<=d)return t.copy(r);const g=p*h-l*d;if(g<=0&&h>=0&&d<=0)return o=h/(h-d),t.copy(i).addScaledVector(_r,o);const _=c*d-p*u;if(_<=0&&u-c>=0&&p-d>=0)return dd.subVectors(r,n),o=(u-c)/(u-c+(p-d)),t.copy(n).addScaledVector(dd,o);const f=1/(_+g+m);return a=g*f,o=m*f,t.copy(i).addScaledVector(gr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),lo.subVectors(this.max,js),vr.subVectors(e.a,js),yr.subVectors(e.b,js),xr.subVectors(e.c,js),cn.subVectors(yr,vr),un.subVectors(xr,yr),Cn.subVectors(vr,xr);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-Cn.z,Cn.y,cn.z,0,-cn.x,un.z,0,-un.x,Cn.z,0,-Cn.x,-cn.y,cn.x,0,-un.y,un.x,0,-Cn.y,Cn.x,0];return!!_h(t,vr,yr,xr,lo)&&(t=[1,0,0,0,1,0,0,0,1],!!_h(t,vr,yr,xr,lo)&&(ho.crossVectors(cn,un),t=[ho.x,ho.y,ho.z],_h(t,vr,yr,xr,lo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Si).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new E,new E,new E,new E,new E,new E,new E,new E],Si=new E,oo=new Pt,vr=new E,yr=new E,xr=new E,cn=new E,un=new E,Cn=new E,js=new E,lo=new E,ho=new E,Pn=new E;function _h(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);const o=n.x*Math.abs(Pn.x)+n.y*Math.abs(Pn.y)+n.z*Math.abs(Pn.z),l=e.dot(Pn),h=t.dot(Pn),c=i.dot(Pn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Wi=yg();function yg(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,r[l]=h|c}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Zt(s){Math.abs(s)>65504&&oe("DataUtils.toHalfFloat(): Value out of range."),s=De(s,-65504,65504),Wi.floatView[0]=s;const e=Wi.uint32View[0],t=e>>23&511;return Wi.baseTable[t]+((8388607&e)>>Wi.shiftTable[t])}function qs(s){const e=s>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[e]+(1023&s)]+Wi.exponentTable[e],Wi.floatView[0]}class pd{static toHalfFloat(e){return Zt(e)}static fromHalfFloat(e){return qs(e)}}const yt=new E,co=new ie;let xg=0;class ot extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bs,this.updateRanges=[],this.gpuType=Dt,this.version=0,this._normalizationScale=e!==void 0?io(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):An(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ot(e,this.array)}}class md extends ot{constructor(e,t,i){super(new Int8Array(e),t,i)}}class fd extends ot{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class gd extends ot{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class _d extends ot{constructor(e,t,i){super(new Int16Array(e),t,i)}}class uo extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends ot{constructor(e,t,i){super(new Int32Array(e),t,i)}}class po extends ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yd extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=qs(this.array[e*this.itemSize]);return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=Zt(t),this}getY(e){let t=qs(this.array[e*this.itemSize+1]);return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=Zt(t),this}getZ(e){let t=qs(this.array[e*this.itemSize+2]);return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=Zt(t),this}getW(e){let t=qs(this.array[e*this.itemSize+3]);return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=Zt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=Zt(t),this.array[e+1]=Zt(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array)),this.array[e+0]=Zt(t),this.array[e+1]=Zt(i),this.array[e+2]=Zt(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=Zt(t),this.array[e+1]=Zt(i),this.array[e+2]=Zt(n),this.array[e+3]=Zt(r),this}}class ye extends ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Mg=new Pt,Ys=new E,vh=new E;class Et{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mg.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Ys,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(vh)),this.expandByPoint(Ys.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sg=0;const hi=new Ue,yh=new Ze,Mr=new E,ti=new Pt,Zs=new Pt,At=new E;class Be extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?po:uo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ti.min,Zs.min),ti.expandByPoint(At),At.addVectors(ti.max,Zs.max),ti.expandByPoint(At)):(ti.expandByPoint(Zs.min),ti.expandByPoint(Zs.max))}ti.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)At.fromBufferAttribute(o,h),l&&(Mr.fromBufferAttribute(e,h),At.add(Mr)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=t.position,n=t.normal,r=t.uv;let a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new ot(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],h=new Uint8Array(i.count);for(let R=0;R<i.count;R++)o[R]=new E,l[R]=new E;const c=new E,u=new E,m=new E,p=new ie,d=new ie,g=new ie,_=new E,f=new E;function v(R,N,z){h[R]=h[N]=h[z]=1,c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,N),m.fromBufferAttribute(i,z),p.fromBufferAttribute(r,R),d.fromBufferAttribute(r,N),g.fromBufferAttribute(r,z),u.sub(c),m.sub(c),d.sub(p),g.sub(p);const B=1/(d.x*g.y-g.x*d.y);isFinite(B)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(m,-d.y).multiplyScalar(B),f.copy(m).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(B),o[R].add(_),o[N].add(_),o[z].add(_),l[R].add(f),l[N].add(f),l[z].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,N=y.length;R<N;++R){const z=y[R],B=z.start;for(let V=B,J=B+z.count;V<J;V+=3)v(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new E,S=new E,w=new E,A=new E;function L(R){w.fromBufferAttribute(n,R),A.copy(w);const N=o[R];b.copy(N),b.sub(w.multiplyScalar(w.dot(N))).normalize(),S.crossVectors(A,N);const z=S.dot(l[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,z)}for(let R=0,N=i.count;R<N;++R)h[R]&&L(R);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ot(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const n=new E,r=new E,a=new E,o=new E,l=new E,h=new E,c=new E,u=new E;if(e)for(let m=0,p=e.count;m<p;m+=3){const d=e.getX(m+0),g=e.getX(m+1),_=e.getX(m+2);n.fromBufferAttribute(t,d),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(i,d),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,_),o.add(c),l.add(c),h.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let m=0,p=t.count;m<p;m+=3)n.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(m+0,c.x,c.y,c.z),i.setXYZ(m+1,c.x,c.y,c.z),i.setXYZ(m+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,m=new h.constructor(l.length*c);let p=0,d=0;for(let g=0,_=l.length;g<_;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*c;for(let f=0;f<c;f++)m[d++]=h[p++]}return new ot(m,c,u)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Be,i=this.index.array,n=this.attributes;for(const o in n){const l=e(n[o],i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const m=e(h[c],i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,m=h.length;u<m;u++){const p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],u=r[h];for(let m=0,p=u.length;m<p;m++)c.push(u[m].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bs,this.updateRanges=[],this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=xd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=xd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function xd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Qt()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Ht=new E;class yn{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?io(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):An(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ot(e,this.data.array)}}const xh=new E,bg=new E,Tg=new Oe;class Pi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=xh.subVectors(i,t).cross(bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(xh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tg.getNormalMatrix(e),n=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sr,wg=0;class Rt extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Va,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){oe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:oe(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Pi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mo extends Rt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ks=new E,br=new E,Tr=new E,wr=new ie,$s=new ie,Md=new Ue,fo=new E,Qs=new E,go=new E,Sd=new ie,Mh=new ie,bd=new ie;class Sh extends Ze{constructor(e=new mo){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Be;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Js(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new yn(i,3,0,!1)),Sr.setAttribute("uv",new yn(i,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&we('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Tr.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;_o(fo.set(-.5,-.5,0),Tr,a,br,n,r),_o(Qs.set(.5,-.5,0),Tr,a,br,n,r),_o(go.set(.5,.5,0),Tr,a,br,n,r),Sd.set(0,0),Mh.set(1,0),bd.set(1,1);let o=e.ray.intersectTriangle(fo,Qs,go,!1,Ks);if(o===null&&(_o(Qs.set(-.5,.5,0),Tr,a,br,n,r),Mh.set(0,1),o=e.ray.intersectTriangle(fo,go,Qs,!1,Ks),o===null))return;const l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||t.push({distance:l,point:Ks.clone(),uv:jt.getInterpolation(Ks,fo,Qs,go,Sd,Mh,bd,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function _o(s,e,t,i,n,r){wr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?($s.x=r*wr.x-n*wr.y,$s.y=n*wr.x+r*wr.y):$s.copy(wr),s.copy(e),s.x+=$s.x,s.y+=$s.y,s.applyMatrix4(Md)}const vo=new E,Td=new E;class bh extends Ze{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){vo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(vo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){vo.setFromMatrixPosition(e.matrixWorld),Td.setFromMatrixPosition(this.matrixWorld);const i=vo.distanceTo(Td)/e.zoom;let n,r;for(t[0].object.visible=!0,n=1,r=t.length;n<r;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),!(i>=a))break;t[n-1].object.visible=!1,t[n].object.visible=!0}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Xi=new E,Th=new E,yo=new E,xo=new E;class In{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Th.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),xo.copy(this.origin).sub(Th);const r=.5*e.distanceTo(t),a=-this.direction.dot(yo),o=xo.dot(this.direction),l=-xo.dot(yo),h=xo.lengthSq(),c=Math.abs(1-a*a);let u,m,p,d;if(c>0)if(u=a*l-o,m=a*o-l,d=r*c,u>=0)if(m>=-d)if(m<=d){const g=1/c;u*=g,m*=g,p=u*(u+a*m+2*o)+m*(a*u+m+2*l)+h}else m=r,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+h;else m=-r,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+h;else m<=-d?(u=Math.max(0,-(-a*r+o)),m=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+m*(m+2*l)+h):m<=d?(u=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+h):(u=Math.max(0,-(a*r+o)),m=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+m*(m+2*l)+h);else m=a>0?-r:r,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Th).addScaledVector(yo,m),p}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,n=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,n=(e.min.x-m.x)*h),c>=0?(r=(e.min.y-m.y)*c,a=(e.max.y-m.y)*c):(r=(e.max.y-m.y)*c,a=(e.min.y-m.y)*c),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-m.z)*u,l=(e.max.z-m.z)*u):(o=(e.max.z-m.z)*u,l=(e.min.z-m.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,i,n,r){const a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,u=e.x-a.x,m=e.y-a.y,p=e.z-a.z,d=t.x-a.x,g=t.y-a.y,_=t.z-a.z,f=i.x-a.x,v=i.y-a.y,y=i.z-a.z,b=Math.abs(l),S=Math.abs(h),w=Math.abs(c);let A,L,R,N,z,B,V,J,Y,k,D,K;if(b>=S&&b>=w?(R=l,B=u,Y=d,K=f,l>=0?(A=h,L=c,N=m,z=p,V=g,J=_,k=v,D=y):(A=c,L=h,N=p,z=m,V=_,J=g,k=y,D=v)):S>=w?(R=h,B=m,Y=g,K=v,h>=0?(A=c,L=l,N=p,z=u,V=_,J=d,k=y,D=f):(A=l,L=c,N=u,z=p,V=d,J=_,k=f,D=y)):(R=c,B=p,Y=_,K=y,c>=0?(A=l,L=h,N=u,z=m,V=d,J=g,k=f,D=v):(A=h,L=l,N=m,z=u,V=g,J=d,k=v,D=f)),R===0)return null;const ne=A/R,ve=L/R,Ee=N-ne*B,$=z-ve*B,le=V-ne*Y,he=J-ve*Y,se=k-ne*K,Me=D-ve*K,ae=se*he-Me*le,Pe=Ee*Me-$*se,Ie=le*$-he*Ee;if(n){if(ae<0||Pe<0||Ie<0)return null}else if((ae<0||Pe<0||Ie<0)&&(ae>0||Pe>0||Ie>0))return null;const Le=ae+Pe+Ie;if(Le===0)return null;const te=1/R*(ae*B+Pe*Y+Ie*K);return(Le>0?te<0:te>0)?null:this.at(te/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn extends Rt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wd=new Ue,Ln=new In,Mo=new Et,Ed=new E,So=new E,bo=new E,To=new E,wh=new E,wo=new E,Ad=new E,Eo=new E;class Mt extends Ze{constructor(e=new Be,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){wo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(wh.fromBufferAttribute(u,e),a?wo.addScaledVector(wh,c):wo.addScaledVector(wh.sub(t),c))}t.add(wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Ln.copy(e.ray).recast(e.near),Mo.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Mo,Ed)===null||Ln.origin.distanceToSquared(Ed)>(e.far-e.near)**2))return;wd.copy(r).invert(),Ln.copy(e.ray).applyMatrix4(wd),i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Ln)}}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,m=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,g=m.length;d<g;d++){const _=m[d],f=a[_.materialIndex];for(let v=Math.max(_.start,p.start),y=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));v<y;v+=3)n=Ao(this,f,e,i,h,c,u,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}else for(let d=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);d<g;d+=3)n=Ao(this,a,e,i,h,c,u,o.getX(d),o.getX(d+1),o.getX(d+2)),n&&(n.faceIndex=Math.floor(d/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let d=0,g=m.length;d<g;d++){const _=m[d],f=a[_.materialIndex];for(let v=Math.max(_.start,p.start),y=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));v<y;v+=3)n=Ao(this,f,e,i,h,c,u,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}else for(let d=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);d<g;d+=3)n=Ao(this,a,e,i,h,c,u,d,d+1,d+2),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}function Ao(s,e,t,i,n,r,a,o,l,h){s.getVertexPosition(o,So),s.getVertexPosition(l,bo),s.getVertexPosition(h,To);const c=(function(u,m,p,d,g,_,f,v){let y;if(y=m.side===1?d.intersectTriangle(f,_,g,!0,v):d.intersectTriangle(g,_,f,m.side===0,v),y===null)return null;Eo.copy(v),Eo.applyMatrix4(u.matrixWorld);const b=p.ray.origin.distanceTo(Eo);return b<p.near||b>p.far?null:{distance:b,point:Eo.clone(),object:u}})(s,e,t,i,So,bo,To,Ad);if(c){const u=new E;jt.getBarycoord(Ad,So,bo,To,u),n&&(c.uv=jt.getInterpolatedAttribute(n,o,l,h,u,new ie)),r&&(c.uv1=jt.getInterpolatedAttribute(r,o,l,h,u,new ie)),a&&(c.normal=jt.getInterpolatedAttribute(a,o,l,h,u,new E),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const m={a:o,b:l,c:h,normal:new E,materialIndex:0};jt.getNormal(So,bo,To,m.normal),c.face=m,c.barycoord=u}return c}const ea=new it,Rd=new it,Cd=new it,Eg=new it,Pd=new Ue,Ro=new E,Eh=new Et,Id=new Ue,Ah=new In;class Rh extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ka,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ro),this.boundingBox.expandByPoint(Ro)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Et),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ro),this.boundingSphere.expandByPoint(Ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eh.copy(this.boundingSphere),Eh.applyMatrix4(n),e.ray.intersectsSphere(Eh)!==!1&&(Id.copy(n).invert(),Ah.copy(e.ray).applyMatrix4(Id),this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ka?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jl?this.bindMatrixInverse.copy(this.bindMatrix).invert():oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Rd.fromBufferAttribute(n.attributes.skinIndex,e),Cd.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(ea.copy(t),t.set(0,0,0,0)):(ea.set(t.x,t.y,t.z,1),t.set(0,0,0)),ea.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Cd.getComponent(r);if(a!==0){const o=Rd.getComponent(r);Pd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Eg.copy(ea).applyMatrix4(Pd),a)}}return t.isVector4&&(t.w=ea.w),t.applyMatrix4(this.bindMatrixInverse)}}class Co extends Ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ii extends ct{constructor(e=null,t=1,i=1,n,r,a,o,l,h=1003,c=1003,u,m){super(null,a,o,l,h,c,n,r,u,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new Ue,Ag=new Ue;class ba{constructor(e=[],t=[]){this.uuid=Qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ag;Ld.multiplyMatrices(o,t[r]),Ld.toArray(i,16*r)}n!==null&&(n.needsUpdate=!0)}clone(){return new ba(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ii(t,e,e,qt,Dt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(oe("Skeleton: No bone found with UUID:",r),a=new Co),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Nn extends ot{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Er=new Ue,Nd=new Ue,Po=[],Dd=new Pt,Rg=new Ue,ta=new Mt,ia=new Et;class Ch extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nn(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Rg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Dd.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Dd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Et),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),ia.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=n[r+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(i),e.ray.intersectsSphere(ia)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Er),Nd.multiplyMatrices(i,Er),ta.matrixWorld=Nd,ta.raycast(e,Po);for(let a=0,o=Po.length;a<o;a++){const l=Po[a];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Nn(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(n*this.count),n,this.count,is,Dt));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dn=new Et,Cg=new ie(.5,.5),Io=new E;class pn{constructor(e=new Pi,t=new Pi,i=new Pi,n=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){const n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],u=r[5],m=r[6],p=r[7],d=r[8],g=r[9],_=r[10],f=r[11],v=r[12],y=r[13],b=r[14],S=r[15];if(n[0].setComponents(h-a,p-c,f-d,S-v).normalize(),n[1].setComponents(h+a,p+c,f+d,S+v).normalize(),n[2].setComponents(h+o,p+u,f+g,S+y).normalize(),n[3].setComponents(h-o,p-u,f-g,S-y).normalize(),i)n[4].setComponents(l,m,_,b).normalize(),n[5].setComponents(h-l,p-m,f-_,S-b).normalize();else if(n[4].setComponents(h-l,p-m,f-_,S-b).normalize(),t===vi)n[5].setComponents(h+l,p+m,f+_,S+b).normalize();else{if(t!==an)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(l,m,_,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){Dn.center.set(0,0,0);const t=Cg.distanceTo(e.center);return Dn.radius=.7071067811865476+t,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Io.x=n.normal.x>0?e.max.x:e.min.x,Io.y=n.normal.y>0?e.max.y:e.min.y,Io.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ud=new Ue;class Gr{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){const r=t[n];Ud.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new pn),i[n].setFromProjectionMatrix(Ud,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new pn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new Gr().copy(this)}}function Ph(s,e){return s-e}function Pg(s,e){return s.z-e.z}function Ig(s,e){return e.z-s.z}class Lg{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const Jt=new Ue,Ng=new ge(1,1,1),Dg=new pn,Ug=new Gr,Lo=new Pt,Un=new Et,Ih=new E,Od=new E,Fd=new E,Og=new E,Lh=new Lg,zt=new Mt,No=[];function Fg(s,e,t=0){const i=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const n=s.count;for(let r=0;r<n;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*i);e.needsUpdate=!0}function Ii(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let i=0;i<t;i++)e[i]=s[i]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Nh extends Mt{constructor(e,t,i=2*t,n){super(new Be,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(4*this._maxInstanceCount);e=4*Math.ceil(e/4),e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new ii(t,e,e,qt,Dt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new ii(t,e,e,$n,_i);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new ii(t,e,e,qt,Dt);i.colorSpace=He.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:h}=a,c=new o.constructor(i*l),u=new ot(c,l,h);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new ot(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${i}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Jt),this.getBoundingBoxAt(r,Lo).applyMatrix4(Jt),e.union(Lo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Et);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Jt),this.getBoundingSphereAt(r,Un).applyMatrix4(Jt),e.union(Un)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ph),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const n=this._matricesTexture;Jt.identity().toArray(n.image.data,16*i),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(Ng.toArray(r.image.data,4*i),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ph),o=this._availableGeometryIds.shift(),r[o]=n):(o=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(o,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,h=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const c in i.attributes){const u=t.getAttribute(c),m=i.getAttribute(c);Fg(u,m,l);const p=u.itemSize;for(let d=u.count,g=h;d<g;d++){const _=l+d;for(let f=0;f<p;f++)m.setComponent(_,f,0)}m.needsUpdate=!0,m.addUpdateRange(l*p,h*p)}if(n){const c=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let m=0;m<a.count;m++)r.setX(c+m,l+a.getX(m));for(let m=a.count,p=u;m<p;m++)r.setX(c+m,l);r.needsUpdate=!0,r.addUpdateRange(c,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],h=i[l];if(h.active!==!1){if(r.index!==null){if(h.indexStart!==t){const{indexStart:c,vertexStart:u,reservedIndexCount:m}=h,p=r.index,d=p.array,g=e-u;for(let _=c;_<c+m;_++)d[_]=d[_]+g;p.array.copyWithin(t,c,c+m),p.addUpdateRange(t,m),p.needsUpdate=!0,h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:c,reservedVertexCount:u}=h,m=r.attributes;for(const p in m){const d=m[p],{array:g,itemSize:_}=d;g.copyWithin(e*_,c*_,(c+u)*_),d.addUpdateRange(e*_,u*_),d.needsUpdate=!0}h.vertexStart=e}e+=h.reservedVertexCount,h.start=r.index?h.indexStart:h.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new Pt,a=i.index,o=i.attributes.position;for(let l=n.start,h=n.start+n.count;l<h;l++){let c=l;a&&(c=a.getX(c)),r.expandByPoint(Ih.fromBufferAttribute(o,c))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Et;this.getBoundingBoxAt(e,Lo),Lo.getCenter(r.center);const a=i.index,o=i.attributes.position;let l=0;for(let h=n.start,c=n.start+n.count;h<c;h++){let u=h;a&&(u=a.getX(u)),Ih.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Ih))}r.radius=Math.sqrt(l),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,16*e),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,16*e)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,4*e),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,4*e)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t||(this._instanceInfo[e].visible=t,this._visibilityChanged=!0),this}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Ph);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);Ii(this._multiDrawCounts,n),Ii(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r;const a=new Int32Array(e),o=new Int32Array(e),l=new Int32Array(e);Ii(this._mergedDrawCounts,a),Ii(this._mergedDrawStarts,o),Ii(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=a,this._mergedDrawStarts=o,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=e;const h=this._indirectTexture,c=this._matricesTexture,u=this._colorsTexture;h.dispose(),this._initIndirectTexture(),Ii(h.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),Ii(c.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Ii(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...i.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(a=>a.indexStart+a.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Be,this._initializeGeometry(n));const r=this.geometry;n.index&&Ii(n.index.array,r.index.array);for(const a in n.attributes)Ii(n.attributes[a].array,r.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,a=this.geometry;zt.material=this.material,zt.geometry.index=a.index,zt.geometry.attributes=a.attributes,zt.geometry.boundingBox===null&&(zt.geometry.boundingBox=new Pt),zt.geometry.boundingSphere===null&&(zt.geometry.boundingSphere=new Et);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const h=i[o].geometryIndex,c=n[h];zt.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(o,zt.matrixWorld).premultiply(r),this.getBoundingBoxAt(h,zt.geometry.boundingBox),this.getBoundingSphereAt(h,zt.geometry.boundingSphere),zt.raycast(e,No);for(let u=0,m=No.length;u<m;u++){const p=No[u];p.object=this,p.batchId=o,t.push(p)}No.length=0}zt.material=null,zt.geometry.index=null,zt.geometry.attributes={},zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,i,n="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const r=t.getIndex();let a=r===null?1:r.array.BYTES_PER_ELEMENT,o=1;i.wireframe&&(o=2,a=t.attributes.position.count>65535?4:2);const l=this._instanceInfo,h=this._multiDrawStarts,c=this._multiDrawCounts,u=this._mergedDrawStarts,m=this._mergedDrawCounts,p=this._mergedDrawInstanceCounts,d=this._geometryInfo,g=this.perObjectFrustumCulled,_=this._indirectTexture,f=_.image.data,v=e.isArrayCamera?Ug:Dg;g&&(e.isArrayCamera?v.setFromArrayCamera(e):(Jt.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),v.setFromProjectionMatrix(Jt,e.coordinateSystem,e.reversedDepth)));let y=0,b=0;if(this.sortObjects){Jt.copy(this.matrixWorld).invert(),Od.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Jt),Fd.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Jt);for(let A=0,L=l.length;A<L;A++)if(l[A].visible&&l[A].active){const R=l[A].geometryIndex;this.getMatrixAt(A,Jt),this.getBoundingSphereAt(R,Un).applyMatrix4(Jt);let N=!1;if(g&&(N=!v.intersectsSphere(Un)),!N){const z=d[R],B=Og.subVectors(Un.center,Od).dot(Fd);Lh.push(z.start,z.count,B,A)}}const S=Lh.list,w=this.customSort;w===null?S.sort(i.transparent?Ig:Pg):w.call(this,S,e);for(let A=0,L=S.length;A<L;A++){const R=S[A],N=R.start*a*o,z=R.count*o;n==="merged"?b>0&&u[b-1]===N&&m[b-1]===z?p[b-1]++:(u[b]=N,m[b]=z,p[b]=1,b++):(h[y]=N,c[y]=z),f[y]=R.index,y++}Lh.reset()}else for(let S=0,w=l.length;S<w;S++)if(l[S].visible&&l[S].active){const A=l[S].geometryIndex;let L=!1;if(g&&(this.getMatrixAt(S,Jt),this.getBoundingSphereAt(A,Un).applyMatrix4(Jt),L=!v.intersectsSphere(Un)),!L){const R=d[A],N=R.start*a*o,z=R.count*o;n==="merged"?b>0&&u[b-1]===N&&m[b-1]===z?p[b-1]++:(u[b]=N,m[b]=z,p[b]=1,b++):(h[y]=N,c[y]=z),f[y]=S,y++}}_.needsUpdate=!0,this._multiDrawCount=y,this._mergedDrawCount=b,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeRender(e,t,i,n,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(i,n,r)}onBeforeShadow(e,t,i,n,r,a){e.isWebGPURenderer!==!0&&this._updateDrawParameters(n,r,a)}}class Gt extends Rt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Do=new E,Uo=new E,Bd=new Ue,na=new In,Oo=new Et,Dh=new E,zd=new E;class ji extends Ze{constructor(e=new Be,t=new Gt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Do.fromBufferAttribute(t,n-1),Uo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Do.distanceTo(Uo);e.setAttribute("lineDistance",new ye(i,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(n),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;Bd.copy(n).invert(),na.copy(e.ray).applyMatrix4(Bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const m=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let d=m,g=p-1;d<g;d+=h){const _=c.getX(d),f=c.getX(d+1),v=Fo(this,e,na,l,_,f,d);v&&t.push(v)}if(this.isLineLoop){const d=c.getX(p-1),g=c.getX(m),_=Fo(this,e,na,l,d,g,p-1);_&&t.push(_)}}else{const m=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let d=m,g=p-1;d<g;d+=h){const _=Fo(this,e,na,l,d,d+1,d);_&&t.push(_)}if(this.isLineLoop){const d=Fo(this,e,na,l,p-1,m,p-1);d&&t.push(d)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Fo(s,e,t,i,n,r,a){const o=s.geometry.attributes.position;if(Do.fromBufferAttribute(o,n),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,Uo,Dh,zd)>i)return;Dh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Dh);return l<e.near||l>e.far?void 0:{distance:l,point:zd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Gd=new E,Vd=new E;class bi extends ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Gd.fromBufferAttribute(t,n),Vd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Gd.distanceTo(Vd);e.setAttribute("lineDistance",new ye(i,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uh extends ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bo extends Rt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kd=new Ue,Oh=new In,zo=new Et,Go=new E;class Fh extends Ze{constructor(e=new Be,t=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(n),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;kd.copy(n).invert(),Oh.copy(e.ray).applyMatrix4(kd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);u<m;u++){const p=h.getX(u);Go.fromBufferAttribute(c,p),Hd(Go,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);u<m;u++)Go.fromBufferAttribute(c,u),Hd(Go,u,l,n,e,t,this)}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Hd(s,e,t,i,n,r,a){const o=Oh.distanceSqToPoint(s);if(o<t){const l=new E;Oh.closestPointToPoint(s,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bh extends ct{constructor(e,t,i,n,r=1006,a=1006,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(function u(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Wd extends Bh{constructor(e,t,i,n,r,a,o,l){super({},e,t,i,n,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Xd extends ct{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Nt,this.minFilter=Nt,this.generateMipmaps=!1,this.needsUpdate=!0}copy(e){return super.copy(e),this.source=new yi(Object.assign({},e.image)),this}}class ra extends ct{constructor(e=[],t,i,n,r,a,o,l,h,c,u,m){super(null,a,o,l,h,c,n,r,u,m),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class jd extends ra{constructor(e,t,i,n,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=$t,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qd extends ra{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,$i),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ar extends ct{constructor(e=[],t=301,i,n,r,a,o,l,h,c){super(e,t,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yd extends ct{constructor(e,t,i,n,r,a,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zd extends ct{constructor(e,t,i,n,r,a,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const c=e?e.parentNode:null;c!==null&&"requestPaint"in c&&(c.onpaint=()=>{this.needsUpdate=!0},c.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class mn extends ct{constructor(e,t,i=1014,n,r,a,o=1003,l=1003,h,c=1026,u=1){if(c!==tn&&c!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Vo extends mn{constructor(e,t=1014,i=301,n,r,a=1003,o=1003,l,h=1026){const c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,n,r,a,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ko extends ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xn extends Be{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let m=0,p=0;function d(g,_,f,v,y,b,S,w,A,L,R){const N=b/A,z=S/L,B=b/2,V=S/2,J=w/2,Y=A+1,k=L+1;let D=0,K=0;const ne=new E;for(let ve=0;ve<k;ve++){const Ee=ve*z-V;for(let $=0;$<Y;$++){const le=$*N-B;ne[g]=le*v,ne[_]=Ee*y,ne[f]=J,h.push(ne.x,ne.y,ne.z),ne[g]=0,ne[_]=0,ne[f]=w>0?1:-1,c.push(ne.x,ne.y,ne.z),u.push($/A),u.push(1-ve/L),D+=1}}for(let ve=0;ve<L;ve++)for(let Ee=0;Ee<A;Ee++){const $=m+Ee+Y*ve,le=m+Ee+Y*(ve+1),he=m+(Ee+1)+Y*(ve+1),se=m+(Ee+1)+Y*ve;l.push($,le,se),l.push(le,he,se),K+=6}o.addGroup(p,K,R),p+=K,m+=D}d("z","y","x",-1,-1,i,t,e,a,r,0),d("z","y","x",1,-1,i,t,-e,a,r,1),d("x","z","y",1,1,e,i,t,n,a,2),d("x","z","y",1,-1,e,i,-t,n,a,3),d("x","y","z",1,-1,e,t,i,n,r,4),d("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ta extends Be{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],h=[],c=t/2,u=Math.PI/2*e,m=t,p=2*u+m,d=2*i+r,g=n+1,_=new E,f=new E;for(let v=0;v<=d;v++){let y=0,b=0,S=0,w=0;if(v<=i){const R=v/i,N=R*Math.PI/2;b=-c-e*Math.cos(N),S=e*Math.sin(N),w=-e*Math.cos(N),y=R*u}else if(v<=i+r){const R=(v-i)/r;b=R*t-c,S=e,w=0,y=u+R*m}else{const R=(v-i-r)/i,N=R*Math.PI/2;b=c+e*Math.sin(N),S=e*Math.cos(N),w=e*Math.sin(N),y=u+m+R*u}const A=Math.max(0,Math.min(1,y/p));let L=0;v===0?L=.5/n:v===d&&(L=-.5/n);for(let R=0;R<=n;R++){const N=R/n,z=N*Math.PI*2,B=Math.sin(z),V=Math.cos(z);f.x=-S*V,f.y=b,f.z=S*B,o.push(f.x,f.y,f.z),_.set(-S*V,w,S*B),_.normalize(),l.push(_.x,_.y,_.z),h.push(N+L,A)}if(v>0){const R=(v-1)*g;for(let N=0;N<n;N++){const z=R+N,B=R+N+1,V=v*g+N,J=v*g+N+1;a.push(z,B,V),a.push(B,J,V)}}}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class wa extends Be{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],o=[],l=[],h=new E,c=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,m=3;u<=t;u++,m+=3){const p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[m]/e+1)/2,c.y=(a[m+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vr extends Be{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;n=Math.floor(n),r=Math.floor(r);const c=[],u=[],m=[],p=[];let d=0;const g=[],_=i/2;let f=0;function v(y){const b=d,S=new ie,w=new E;let A=0;const L=y===!0?e:t,R=y===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,_*R,0),m.push(0,R,0),p.push(.5,.5),d++;const N=d;for(let z=0;z<=n;z++){const B=z/n*l+o,V=Math.cos(B),J=Math.sin(B);w.x=L*J,w.y=_*R,w.z=L*V,u.push(w.x,w.y,w.z),m.push(0,R,0),S.x=.5*V+.5,S.y=.5*J*R+.5,p.push(S.x,S.y),d++}for(let z=0;z<n;z++){const B=b+z,V=N+z;y===!0?c.push(V,V+1,B):c.push(V+1,V,B),A+=3}h.addGroup(f,A,y===!0?1:2),f+=A}(function(){const y=new E,b=new E;let S=0;const w=(t-e)/i;for(let A=0;A<=r;A++){const L=[],R=A/r,N=R*(t-e)+e;for(let z=0;z<=n;z++){const B=z/n,V=B*l+o,J=Math.sin(V),Y=Math.cos(V);b.x=N*J,b.y=-R*i+_,b.z=N*Y,u.push(b.x,b.y,b.z),y.set(J,w,Y).normalize(),m.push(y.x,y.y,y.z),p.push(B,1-R),L.push(d++)}g.push(L)}for(let A=0;A<n;A++)for(let L=0;L<r;L++){const R=g[L][A],N=g[L+1][A],z=g[L+1][A+1],B=g[L][A+1];(e>0||L!==0)&&(c.push(R,N,B),S+=3),(t>0||L!==r-1)&&(c.push(N,z,B),S+=3)}h.addGroup(f,S,0),f+=S})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends Vr{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new kr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi extends Be{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],a=[];function o(p,d,g,_){const f=_+1,v=[];for(let y=0;y<=f;y++){v[y]=[];const b=p.clone().lerp(g,y/f),S=d.clone().lerp(g,y/f),w=f-y;for(let A=0;A<=w;A++)v[y][A]=A===0&&y===f?b:b.clone().lerp(S,A/w)}for(let y=0;y<f;y++)for(let b=0;b<2*(f-y)-1;b++){const S=Math.floor(b/2);b%2==0?(l(v[y][S+1]),l(v[y+1][S]),l(v[y][S])):(l(v[y][S+1]),l(v[y+1][S+1]),l(v[y+1][S]))}}function l(p){r.push(p.x,p.y,p.z)}function h(p,d){const g=3*p;d.x=e[g+0],d.y=e[g+1],d.z=e[g+2]}function c(p,d,g,_){_<0&&p.x===1&&(a[d]=p.x-1),g.x===0&&g.z===0&&(a[d]=_/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){const d=new E,g=new E,_=new E;for(let f=0;f<t.length;f+=3)h(t[f+0],d),h(t[f+1],g),h(t[f+2],_),o(d,g,_,p)})(n),(function(p){const d=new E;for(let g=0;g<r.length;g+=3)d.x=r[g+0],d.y=r[g+1],d.z=r[g+2],d.normalize().multiplyScalar(p),r[g+0]=d.x,r[g+1]=d.y,r[g+2]=d.z})(i),(function(){const p=new E;for(let d=0;d<r.length;d+=3){p.x=r[d+0],p.y=r[d+1],p.z=r[d+2];const g=u(p)/2/Math.PI+.5,_=m(p)/Math.PI+.5;a.push(g,1-_)}(function(){const d=new E,g=new E,_=new E,f=new E,v=new ie,y=new ie,b=new ie;for(let S=0,w=0;S<r.length;S+=9,w+=6){d.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),v.set(a[w+0],a[w+1]),y.set(a[w+2],a[w+3]),b.set(a[w+4],a[w+5]),f.copy(d).add(g).add(_).divideScalar(3);const A=u(f);c(v,w+0,d,A),c(y,w+2,g,A),c(b,w+4,_,A)}})(),(function(){for(let d=0;d<a.length;d+=6){const g=a[d+0],_=a[d+2],f=a[d+4],v=Math.max(g,_,f),y=Math.min(g,_,f);v>.9&&y<.1&&(g<.2&&(a[d+0]+=1),_<.2&&(a[d+2]+=1),f<.2&&(a[d+4]+=1))}})()})(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.vertices,e.indices,e.radius,e.detail)}}class Ea extends Zi{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ea(e.radius,e.detail)}}const Ho=new E,Wo=new E,zh=new E,Xo=new jt;class Gh extends Be{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(wn*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),m=new Map,p=[];for(let d=0;d<l;d+=3){a?(h[0]=a.getX(d),h[1]=a.getX(d+1),h[2]=a.getX(d+2)):(h[0]=d,h[1]=d+1,h[2]=d+2);const{a:g,b:_,c:f}=Xo;if(g.fromBufferAttribute(o,h[0]),_.fromBufferAttribute(o,h[1]),f.fromBufferAttribute(o,h[2]),Xo.getNormal(zh),u[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[1]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,u[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){const y=(v+1)%3,b=u[v],S=u[y],w=Xo[c[v]],A=Xo[c[y]],L=`${b}_${S}`,R=`${S}_${b}`,N=m.get(R);N?(zh.dot(N.normal)<=r&&(p.push(w.x,w.y,w.z),p.push(A.x,A.y,A.z)),m.set(R,null)):m.has(L)||m.set(L,{index0:h[v],index1:h[y],normal:zh.clone()})}}for(const d of m.values())if(d){const{index0:g,index1:_}=d;Ho.fromBufferAttribute(o,g),Wo.fromBufferAttribute(o,_),p.push(Ho.x,Ho.y,Ho.z),p.push(Wo.x,Wo.y,Wo.z)}this.setAttribute("position",new ye(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let a;a=t||e*i[r-1];let o,l=0,h=r-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(r-1);const c=i[n];return(n+(a-c)/(i[n+1]-c))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new ie:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new E,n=[],r=[],a=[],o=new E,l=new Ue;for(let p=0;p<=e;p++){const d=p/e;n[p]=this.getTangentAt(d,new E)}r[0]=new E,a[0]=new E;let h=Number.MAX_VALUE;const c=Math.abs(n[0].x),u=Math.abs(n[0].y),m=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),m<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(De(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(De(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let d=1;d<=e;d++)r[d].applyMatrix4(l.makeRotationAxis(n[d],p*d)),a[d].crossVectors(n[d],r[d])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class sa extends ci{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){const i=t,n=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),m=l-this.aX,p=h-this.aY;l=m*c-p*u+this.aX,h=m*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vh extends sa{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function kh(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let m=(a-r)/h-(o-r)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;m*=c,p*=c,n(a,o,m,p)},calc:function(r){const a=r*r;return s+e*r+t*a+i*(a*r)}}}const Jd=new E,Kd=new E,Hh=new kh,Wh=new kh,Xh=new kh;class jh extends ci{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/r)+1)*r:c===0&&h===r-1&&(h=r-2,c=1),this.closed||h>0?o=n[(h-1)%r]:(Kd.subVectors(n[0],n[1]).add(n[0]),o=Kd);const u=n[h%r],m=n[(h+1)%r];if(this.closed||h+2<r?l=n[(h+2)%r]:(Jd.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=Jd),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let d=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(m),p),_=Math.pow(m.distanceToSquared(l),p);g<1e-4&&(g=1),d<1e-4&&(d=g),_<1e-4&&(_=g),Hh.initNonuniformCatmullRom(o.x,u.x,m.x,l.x,d,g,_),Wh.initNonuniformCatmullRom(o.y,u.y,m.y,l.y,d,g,_),Xh.initNonuniformCatmullRom(o.z,u.z,m.z,l.z,d,g,_)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(o.x,u.x,m.x,l.x,this.tension),Wh.initCatmullRom(o.y,u.y,m.y,l.y,this.tension),Xh.initCatmullRom(o.z,u.z,m.z,l.z,this.tension));return i.set(Hh.calc(c),Wh.calc(c),Xh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $d(s,e,t,i,n){const r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function aa(s,e,t,i){return(function(n,r){const a=1-n;return a*a*r})(s,e)+(function(n,r){return 2*(1-n)*n*r})(s,t)+(function(n,r){return n*n*r})(s,i)}function oa(s,e,t,i,n){return(function(r,a){const o=1-r;return o*o*o*a})(s,e)+(function(r,a){const o=1-r;return 3*o*o*r*a})(s,t)+(function(r,a){return 3*(1-r)*r*r*a})(s,i)+(function(r,a){return r*r*r*a})(s,n)}class jo extends ci{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(oa(e,n.x,r.x,a.x,o.x),oa(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qh extends ci{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(oa(e,n.x,r.x,a.x,o.x),oa(e,n.y,r.y,a.y,o.y),oa(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qo extends ci{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yh extends ci{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yo extends ci{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(aa(e,n.x,r.x,a.x),aa(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zo extends ci{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(aa(e,n.x,r.x,a.x),aa(e,n.y,r.y,a.y),aa(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jo extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set($d(o,l.x,h.x,c.x,u.x),$d(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ie().fromArray(n))}return this}}var Ko=Object.freeze({__proto__:null,ArcCurve:Vh,CatmullRomCurve3:jh,CubicBezierCurve:jo,CubicBezierCurve3:qh,EllipseCurve:sa,LineCurve:qo,LineCurve3:Yh,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Zo,SplineCurve:Jo});class Zh extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Ko[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class Rr extends Zh{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new qo(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new Yo(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new jo(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Jo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const h=new sa(e,t,i,n,r,a,o,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cr extends Rr{constructor(e){super(e),this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Rr().fromJSON(n))}return this}}function Qd(s,e,t,i,n){let r;if(n===(function(a,o,l,h){let c=0;for(let u=o,m=l-h;u<l;u+=h)c+=(a[m]-a[u])*(a[u+1]+a[m+1]),m=u;return c})(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=np(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=np(a/i|0,s[a],s[a+1],r);return r&&Pr(r,r.next)&&(ua(r),r=r.next),r}function On(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!Pr(i,i.next)&&pt(i.prev,i,i.next)!==0)i=i.next;else{if(ua(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function la(s,e,t,i,n,r,a){if(!s)return;!a&&r&&(function(l,h,c,u){let m=l;do m.z===0&&(m.z=Jh(m.x,m.y,h,c,u)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==l);m.prevZ.nextZ=null,m.prevZ=null,(function(p){let d,g=1;do{let _,f=p;p=null;let v=null;for(d=0;f;){d++;let y=f,b=0;for(let w=0;w<g&&(b++,y=y.nextZ,y);w++);let S=g;for(;b>0||S>0&&y;)b!==0&&(S===0||!y||f.z<=y.z)?(_=f,f=f.nextZ,b--):(_=y,y=y.nextZ,S--),v?v.nextZ=_:p=_,_.prevZ=v,v=_;f=y}v.nextZ=null,g*=2}while(d>1)})(m)})(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,h=s.next;if(r?zg(s,i,n,r):Bg(s))e.push(l.i,s.i,h.i),ua(s),s=h.next,o=h.next;else if((s=h)===o){a?a===1?la(s=Gg(On(s),e),e,t,i,n,r,2):a===2&&Vg(s,e,t,i,n,r):la(On(s),e,t,i,n,r,1);break}}}function Bg(s){const e=s.prev,t=s,i=s.next;if(pt(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=Math.min(n,r,a),u=Math.min(o,l,h),m=Math.max(n,r,a),p=Math.max(o,l,h);let d=i.next;for(;d!==e;){if(d.x>=c&&d.x<=m&&d.y>=u&&d.y<=p&&ha(n,o,r,l,a,h,d.x,d.y)&&pt(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function zg(s,e,t,i){const n=s.prev,r=s,a=s.next;if(pt(n,r,a)>=0)return!1;const o=n.x,l=r.x,h=a.x,c=n.y,u=r.y,m=a.y,p=Math.min(o,l,h),d=Math.min(c,u,m),g=Math.max(o,l,h),_=Math.max(c,u,m),f=Jh(p,d,e,t,i),v=Jh(g,_,e,t,i);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=f&&b&&b.z<=v;){if(y.x>=p&&y.x<=g&&y.y>=d&&y.y<=_&&y!==n&&y!==a&&ha(o,c,l,u,h,m,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=g&&b.y>=d&&b.y<=_&&b!==n&&b!==a&&ha(o,c,l,u,h,m,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=g&&y.y>=d&&y.y<=_&&y!==n&&y!==a&&ha(o,c,l,u,h,m,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=g&&b.y>=d&&b.y<=_&&b!==n&&b!==a&&ha(o,c,l,u,h,m,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Gg(s,e){let t=s;do{const i=t.prev,n=t.next.next;!Pr(i,n)&&tp(i,t,t.next,n)&&ca(i,n)&&ca(n,i)&&(e.push(i.i,t.i,n.i),ua(t),ua(t.next),t=s=n),t=t.next}while(t!==s);return On(t)}function Vg(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jg(a,o)){let l=ip(a,o);return a=On(a,a.next),l=On(l,l.next),la(a,e,t,i,n,r,0),void la(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function kg(s,e){let t=s.x-e.x;return t===0&&(t=s.y-e.y,t===0)&&(t=(s.next.y-s.y)/(s.next.x-s.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Hg(s,e){const t=(function(n,r){let a=r;const o=n.x,l=n.y;let h,c=-1/0;if(Pr(n,a))return a;do{if(Pr(n,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){const g=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(g<=o&&g>c&&(c=g,h=a.x<a.next.x?a:a.next,g===o))return h}a=a.next}while(a!==r);if(!h)return null;const u=h,m=h.x,p=h.y;let d=1/0;a=h;do{if(o>=a.x&&a.x>=m&&o!==a.x&&ep(l<p?o:c,l,m,p,l<p?c:o,l,a.x,a.y)){const g=Math.abs(l-a.y)/(o-a.x);ca(a,n)&&(g<d||g===d&&(a.x>h.x||a.x===h.x&&Wg(h,a)))&&(h=a,d=g)}a=a.next}while(a!==u);return h})(s,e);if(!t)return e;const i=ip(t,s);return On(i,i.next),On(t,t.next)}function Wg(s,e){return pt(s.prev,s,e.prev)<0&&pt(e.next,s,s.next)<0}function Jh(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Xg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ep(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function ha(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&ep(s,e,t,i,n,r,a,o)}function jg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&tp(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(s,e)&&(ca(s,e)&&ca(e,s)&&(function(t,i){let n=t,r=!1;const a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r})(s,e)&&(pt(s.prev,s,e.prev)||pt(s,e.prev,e))||Pr(s,e)&&pt(s.prev,s,s.next)>0&&pt(e.prev,e,e.next)>0)}function pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Pr(s,e){return s.x===e.x&&s.y===e.y}function tp(s,e,t,i){const n=Qo(pt(s,e,t)),r=Qo(pt(s,e,i)),a=Qo(pt(t,i,s)),o=Qo(pt(t,i,e));return n!==r&&a!==o||!(n!==0||!$o(s,t,e))||!(r!==0||!$o(s,i,e))||!(a!==0||!$o(t,s,i))||!(o!==0||!$o(t,e,i))}function $o(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qo(s){return s>0?1:s<0?-1:0}function ca(s,e){return pt(s.prev,s,s.next)<0?pt(s,e,s.next)>=0&&pt(s,s.prev,e)>=0:pt(s,e,s.prev)<0||pt(s,s.next,e)<0}function ip(s,e){const t=Kh(s.i,s.x,s.y),i=Kh(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function np(s,e,t,i){const n=Kh(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ua(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Kh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}class qg{static triangulate(e,t,i=2){return(function(n,r,a=2){const o=r&&r.length,l=o?r[0]*a:n.length;let h=Qd(n,0,l,a,!0);const c=[];if(!h||h.next===h.prev)return c;let u,m,p;if(o&&(h=(function(d,g,_,f){const v=[];for(let y=0,b=g.length;y<b;y++){const S=Qd(d,g[y]*f,y<b-1?g[y+1]*f:d.length,f,!1);S===S.next&&(S.steiner=!0),v.push(Xg(S))}v.sort(kg);for(let y=0;y<v.length;y++)_=Hg(v[y],_);return _})(n,r,h,a)),n.length>80*a){u=n[0],m=n[1];let d=u,g=m;for(let _=a;_<l;_+=a){const f=n[_],v=n[_+1];f<u&&(u=f),v<m&&(m=v),f>d&&(d=f),v>g&&(g=v)}p=Math.max(d-u,g-m),p=p!==0?32767/p:0}return la(h,c,a,u,m,p,0),c})(e,t,i)}}class di{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];rp(e),sp(i,e);let a=e.length;t.forEach(rp);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,sp(i,t[l]);const o=qg.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function rp(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function sp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Aa extends Be{constructor(e=new Cr([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Yg;let y,b,S,w,A,L=!1;if(f){y=f.getSpacedPoints(c),L=!0,m=!1;const te=!!f.isCatmullRomCurve3&&f.closed;b=f.computeFrenetFrames(c,te),S=new E,w=new E,A=new E}m||(_=0,p=0,d=0,g=0);const R=o.extractPoints(h);let N=R.shape;const z=R.holes;if(!di.isClockWise(N)){N=N.reverse();for(let te=0,re=z.length;te<re;te++){const P=z[te];di.isClockWise(P)&&(z[te]=P.reverse())}}function B(te){const re=10000000000000001e-36;let P=te[0];for(let Z=1;Z<=te.length;Z++){const M=Z%te.length,x=te[M],C=x.x-P.x,G=x.y-P.y,O=C*C+G*G,j=Math.max(Math.abs(x.x),Math.abs(x.y),Math.abs(P.x),Math.abs(P.y));O<=re*j*j?(te.splice(M,1),Z--):P=x}}B(N),z.forEach(B);const V=z.length,J=N;for(let te=0;te<V;te++){const re=z[te];N=N.concat(re)}function Y(te,re,P){return re||we("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(re,P)}const k=N.length;function D(te,re,P){let Z,M,x;const C=te.x-re.x,G=te.y-re.y,O=P.x-te.x,j=P.y-te.y,ee=C*C+G*G,I=C*j-G*O;if(Math.abs(I)>Number.EPSILON){const W=Math.sqrt(ee),fe=Math.sqrt(O*O+j*j),q=re.x-G/W,Re=re.y+C/W,pe=((P.x-j/fe-q)*j-(P.y+O/fe-Re)*O)/(C*j-G*O);Z=q+C*pe-te.x,M=Re+G*pe-te.y;const Se=Z*Z+M*M;if(Se<=2)return new ie(Z,M);x=Math.sqrt(Se/2)}else{let W=!1;C>Number.EPSILON?O>Number.EPSILON&&(W=!0):C<-Number.EPSILON?O<-Number.EPSILON&&(W=!0):Math.sign(G)===Math.sign(j)&&(W=!0),W?(Z=-G,M=C,x=Math.sqrt(ee)):(Z=C,M=G,x=Math.sqrt(ee/2))}return new ie(Z/x,M/x)}const K=[];for(let te=0,re=J.length,P=re-1,Z=te+1;te<re;te++,P++,Z++)P===re&&(P=0),Z===re&&(Z=0),K[te]=D(J[te],J[P],J[Z]);const ne=[];let ve,Ee,$=K.concat();for(let te=0,re=V;te<re;te++){const P=z[te];ve=[];for(let Z=0,M=P.length,x=M-1,C=Z+1;Z<M;Z++,x++,C++)x===M&&(x=0),C===M&&(C=0),ve[Z]=D(P[Z],P[x],P[C]);ne.push(ve),$=$.concat(ve)}if(_===0)Ee=di.triangulateShape(J,z);else{const te=[],re=[];for(let P=0;P<_;P++){const Z=P/_,M=p*Math.cos(Z*Math.PI/2),x=d*Math.sin(Z*Math.PI/2)+g;for(let C=0,G=J.length;C<G;C++){const O=Y(J[C],K[C],x);Me(O.x,O.y,-M),Z===0&&te.push(O)}for(let C=0,G=V;C<G;C++){const O=z[C];ve=ne[C];const j=[];for(let ee=0,I=O.length;ee<I;ee++){const W=Y(O[ee],ve[ee],x);Me(W.x,W.y,-M),Z===0&&j.push(W)}Z===0&&re.push(j)}}Ee=di.triangulateShape(te,re)}const le=Ee.length,he=d+g;for(let te=0;te<k;te++){const re=m?Y(N[te],$[te],he):N[te];L?(w.copy(b.normals[0]).multiplyScalar(re.x),S.copy(b.binormals[0]).multiplyScalar(re.y),A.copy(y[0]).add(w).add(S),Me(A.x,A.y,A.z)):Me(re.x,re.y,0)}for(let te=1;te<=c;te++)for(let re=0;re<k;re++){const P=m?Y(N[re],$[re],he):N[re];L?(w.copy(b.normals[te]).multiplyScalar(P.x),S.copy(b.binormals[te]).multiplyScalar(P.y),A.copy(y[te]).add(w).add(S),Me(A.x,A.y,A.z)):Me(P.x,P.y,u/c*te)}for(let te=_-1;te>=0;te--){const re=te/_,P=p*Math.cos(re*Math.PI/2),Z=d*Math.sin(re*Math.PI/2)+g;for(let M=0,x=J.length;M<x;M++){const C=Y(J[M],K[M],Z);Me(C.x,C.y,u+P)}for(let M=0,x=z.length;M<x;M++){const C=z[M];ve=ne[M];for(let G=0,O=C.length;G<O;G++){const j=Y(C[G],ve[G],Z);L?Me(j.x,j.y+y[c-1].y,y[c-1].x+P):Me(j.x,j.y,u+P)}}}function se(te,re){let P=te.length;for(;--P>=0;){const Z=P;let M=P-1;M<0&&(M=te.length-1);for(let x=0,C=c+2*_;x<C;x++){const G=k*x,O=k*(x+1);Pe(re+Z+G,re+M+G,re+M+O,re+Z+O)}}}function Me(te,re,P){l.push(te),l.push(re),l.push(P)}function ae(te,re,P){Ie(te),Ie(re),Ie(P);const Z=n.length/3,M=v.generateTopUV(i,n,Z-3,Z-2,Z-1);Le(M[0]),Le(M[1]),Le(M[2])}function Pe(te,re,P,Z){Ie(te),Ie(re),Ie(Z),Ie(re),Ie(P),Ie(Z);const M=n.length/3,x=v.generateSideWallUV(i,n,M-6,M-3,M-2,M-1);Le(x[0]),Le(x[1]),Le(x[3]),Le(x[1]),Le(x[2]),Le(x[3])}function Ie(te){n.push(l[3*te+0]),n.push(l[3*te+1]),n.push(l[3*te+2])}function Le(te){r.push(te.x),r.push(te.y)}(function(){const te=n.length/3;if(m){let re=0,P=k*re;for(let Z=0;Z<le;Z++){const M=Ee[Z];ae(M[2]+P,M[1]+P,M[0]+P)}re=c+2*_,P=k*re;for(let Z=0;Z<le;Z++){const M=Ee[Z];ae(M[0]+P,M[1]+P,M[2]+P)}}else{for(let re=0;re<le;re++){const P=Ee[re];ae(P[2],P[1],P[0])}for(let re=0;re<le;re++){const P=Ee[re];ae(P[0]+k*c,P[1]+k*c,P[2]+k*c)}}i.addGroup(te,n.length/3-te,0)})(),(function(){const te=n.length/3;let re=0;se(J,re),re+=J.length;for(let P=0,Z=z.length;P<Z;P++){const M=z[P];se(M,re),re+=M.length}i.addGroup(te,n.length/3-te,1)})()}this.setAttribute("position",new ye(n,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ko[n.type]().fromJSON(n)),new Aa(i,e.options)}}const Yg={generateTopUV:function(s,e,t,i,n){const r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new ie(r,a),new ie(o,l),new ie(h,c)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],m=e[3*n],p=e[3*n+1],d=e[3*n+2],g=e[3*r],_=e[3*r+1],f=e[3*r+2];return Math.abs(o-c)<Math.abs(a-h)?[new ie(a,1-l),new ie(h,1-u),new ie(m,1-d),new ie(g,1-f)]:[new ie(o,1-l),new ie(c,1-u),new ie(p,1-d),new ie(_,1-f)]}};class Ra extends Zi{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}class Ca extends Be{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=De(n,0,2*Math.PI);const r=[],a=[],o=[],l=[],h=[],c=1/t,u=new E,m=new ie,p=new E,d=new E,g=new E;let _=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=1*f,p.y=-_,p.z=0*f,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:_=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=1*f,p.y=-_,p.z=0*f,d.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(d)}for(let v=0;v<=t;v++){const y=i+v*c*n,b=Math.sin(y),S=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*b,u.y=e[w].y,u.z=e[w].x*S,a.push(u.x,u.y,u.z),m.x=v/t,m.y=w/(e.length-1),o.push(m.x,m.y);const A=l[3*w+0]*b,L=l[3*w+1],R=l[3*w+0]*S;h.push(A,L,R)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const b=y+v*e.length,S=b,w=b+e.length,A=b+e.length+1,L=b+1;r.push(S,w,L),r.push(A,L,w)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.points,e.segments,e.phiStart,e.phiLength)}}class Hr extends Zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hr(e.radius,e.detail)}}class Wn extends Be{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,m=t/l,p=[],d=[],g=[],_=[];for(let f=0;f<c;f++){const v=f*m-a;for(let y=0;y<h;y++){const b=y*u-r;d.push(b,-v,0),g.push(0,0,1),_.push(y/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+h*f,b=v+h*(f+1),S=v+1+h*(f+1),w=v+1+h*f;p.push(y,b,w),p.push(b,S,w)}this.setIndex(p),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends Be{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);const o=[],l=[],h=[],c=[];let u=e;const m=(t-e)/(n=Math.max(1,n)),p=new E,d=new ie;for(let g=0;g<=n;g++){for(let _=0;_<=i;_++){const f=r+_/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),d.x=(p.x/t+1)/2,d.y=(p.y/t+1)/2,c.push(d.x,d.y)}u+=m}for(let g=0;g<n;g++){const _=g*(i+1);for(let f=0;f<i;f++){const v=f+_,y=v,b=v+i+1,S=v+i+2,w=v+1;o.push(y,b,w),o.push(b,S,w)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ia extends Be{constructor(e=new Cr([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){const u=n.length/3,m=c.extractPoints(t);let p=m.shape;const d=m.holes;di.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,f=d.length;_<f;_++){const v=d[_];di.isClockWise(v)===!0&&(d[_]=v.reverse())}const g=di.triangulateShape(p,d);for(let _=0,f=d.length;_<f;_++){const v=d[_];p=p.concat(v)}for(let _=0,f=p.length;_<f;_++){const v=p[_];n.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let _=0,f=g.length;_<f;_++){const v=g[_],y=v[0]+u,b=v[1]+u,S=v[2]+u;i.push(y,b,S),l+=3}}this.setIndex(i),this.setAttribute("position",new ye(n,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){const a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const a=t[e.shapes[n]];i.push(a)}return new Ia(i,e.curveSegments)}}class Wr extends Be{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new E,m=new E,p=[],d=[],g=[],_=[];for(let f=0;f<=i;f++){const v=[],y=f/i,b=a+y*o,S=e*Math.cos(b),w=Math.sqrt(e*e-S*S);let A=0;f===0&&a===0?A=.5/t:f===i&&l===Math.PI&&(A=-.5/t);for(let L=0;L<=t;L++){const R=L/t,N=n+R*r;u.x=-w*Math.cos(N),u.y=S,u.z=w*Math.sin(N),d.push(u.x,u.y,u.z),m.copy(u).normalize(),g.push(m.x,m.y,m.z),_.push(R+A,1-y),v.push(h++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const y=c[f][v+1],b=c[f][v],S=c[f+1][v],w=c[f+1][v+1];(f!==0||a>0)&&p.push(y,b,w),(f!==i-1||l<Math.PI)&&p.push(b,S,w)}this.setIndex(p),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class La extends Zi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new La(e.radius,e.detail)}}class Na extends Be{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],h=[],c=[],u=[],m=new E,p=new E,d=new E;for(let g=0;g<=i;g++){const _=a+g/i*o;for(let f=0;f<=n;f++){const v=f/n*r;p.x=(e+t*Math.cos(_))*Math.cos(v),p.y=(e+t*Math.cos(_))*Math.sin(v),p.z=t*Math.sin(_),h.push(p.x,p.y,p.z),m.x=e*Math.cos(v),m.y=e*Math.sin(v),d.subVectors(p,m).normalize(),c.push(d.x,d.y,d.z),u.push(f/n),u.push(g/i)}}for(let g=1;g<=i;g++)for(let _=1;_<=n;_++){const f=(n+1)*g+_-1,v=(n+1)*(g-1)+_-1,y=(n+1)*(g-1)+_,b=(n+1)*g+_;l.push(f,v,b),l.push(v,y,b)}this.setIndex(l),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Da extends Be{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],h=[],c=[],u=new E,m=new E,p=new E,d=new E,g=new E,_=new E,f=new E;for(let y=0;y<=i;++y){const b=y/i*r*Math.PI*2;v(b,r,a,e,p),v(b+.01,r,a,e,d),_.subVectors(d,p),f.addVectors(d,p),g.crossVectors(_,f),f.crossVectors(g,_),g.normalize(),f.normalize();for(let S=0;S<=n;++S){const w=S/n*Math.PI*2,A=-t*Math.cos(w),L=t*Math.sin(w);u.x=p.x+(A*f.x+L*g.x),u.y=p.y+(A*f.y+L*g.y),u.z=p.z+(A*f.z+L*g.z),l.push(u.x,u.y,u.z),m.subVectors(u,p).normalize(),h.push(m.x,m.y,m.z),c.push(y/i),c.push(S/n)}}for(let y=1;y<=i;y++)for(let b=1;b<=n;b++){const S=(n+1)*(y-1)+(b-1),w=(n+1)*y+(b-1),A=(n+1)*y+b,L=(n+1)*(y-1)+b;o.push(S,w,L),o.push(w,A,L)}function v(y,b,S,w,A){const L=Math.cos(y),R=Math.sin(y),N=S/b*y,z=Math.cos(N);A.x=w*(2+z)*.5*L,A.y=w*(2+z)*R*.5,A.z=w*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ua extends Be{constructor(e=new Zo(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,h=new ie;let c=new E;const u=[],m=[],p=[],d=[];function g(_){c=e.getPointAt(_/t,c);const f=a.normals[_],v=a.binormals[_];for(let y=0;y<=n;y++){const b=y/n*Math.PI*2,S=Math.sin(b),w=-Math.cos(b);l.x=w*f.x+S*v.x,l.y=w*f.y+S*v.y,l.z=w*f.z+S*v.z,l.normalize(),m.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let f=0;f<=n;f++)h.x=_/t,h.y=f/n,p.push(h.x,h.y)})(),(function(){for(let _=1;_<=t;_++)for(let f=1;f<=n;f++){const v=(n+1)*(_-1)+(f-1),y=(n+1)*_+(f-1),b=(n+1)*_+f,S=(n+1)*(_-1)+f;d.push(v,y,S),d.push(y,b,S)}})()})(),this.setIndex(d),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ua(new Ko[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class $h extends Be{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new E,r=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){const u=l[h],m=u.start;for(let p=m,d=m+u.count;p<d;p+=3)for(let g=0;g<3;g++){const _=o.getX(p+g),f=o.getX(p+(g+1)%3);n.fromBufferAttribute(a,_),r.fromBufferAttribute(a,f),ap(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){const c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),r.fromBufferAttribute(a,u),ap(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ap(s,e,t){const i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var op=Object.freeze({__proto__:null,BoxGeometry:xn,CapsuleGeometry:Ta,CircleGeometry:wa,ConeGeometry:kr,CylinderGeometry:Vr,DodecahedronGeometry:Ea,EdgesGeometry:Gh,ExtrudeGeometry:Aa,IcosahedronGeometry:Ra,LatheGeometry:Ca,OctahedronGeometry:Hr,PlaneGeometry:Wn,PolyhedronGeometry:Zi,RingGeometry:Pa,ShapeGeometry:Ia,SphereGeometry:Wr,TetrahedronGeometry:La,TorusGeometry:Na,TorusKnotGeometry:Da,TubeGeometry:Ua,WireframeGeometry:$h});class Qh extends Rt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ir(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];if(lp(n))n.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(lp(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const i=Ir(s[t]);for(const n in i)e[n]=i[n]}return e}function lp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const cp={clone:Ir,merge:Wt};class Li extends Rt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=(function(t){const i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(n.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new E().fromArray(n.value);break;case"v4":this.uniforms[i].value=new it().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class el extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tl extends Rt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ec extends tl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tc extends Rt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ic extends Rt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class nc extends Rt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class rc extends Rt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class il extends Rt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nl extends Rt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sc extends Rt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ac extends Gt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ti(s,e){return s&&s.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s):s}function Lr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function up(s){const e=s.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,n){return s[i]-s[n]}),t}function oc(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function dp(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}class pp{static convertArray(e,t){return Ti(e,t)}static isTypedArray(e){return $l(e)}static hasTangents(e){return Lr(e)}static getKeyframeOrder(e){return up(e)}static sortedArray(e,t,i){return oc(e,t,i)}static flattenJSON(e,t,i,n){dp(e,t,i,n)}static subclip(e,t,i,n,r=30){return(function(a,o,l,h,c=30){const u=a.clone();u.name=o;const m=[];for(let d=0;d<u.tracks.length;++d){const g=u.tracks[d],_=g.getValueSize(),f=[],v=[];for(let y=0;y<g.times.length;++y){const b=g.times[y]*c;if(!(b<l||b>=h)){f.push(g.times[y]);for(let S=0;S<_;++S)v.push(g.values[y*_+S])}}f.length!==0&&(g.times=Ti(f,g.times.constructor),g.values=Ti(v,g.values.constructor),m.push(g))}u.tracks=m;let p=1/0;for(let d=0;d<u.tracks.length;++d)p>u.tracks[d].times[0]&&(p=u.tracks[d].times[0]);for(let d=0;d<u.tracks.length;++d)u.tracks[d].shift(-1*p);return u.resetDuration(),u})(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return(function(r,a=0,o=r,l=30){l<=0&&(l=30);const h=o.tracks.length,c=a/l;for(let u=0;u<h;++u){const m=o.tracks[u],p=m.ValueTypeName;if(p==="bool"||p==="string")continue;const d=r.tracks.find(function(w){return w.name===m.name&&w.ValueTypeName===p});if(d===void 0)continue;let g=0;const _=m.getValueSize();m.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(g=_/3);let f=0;const v=d.getValueSize();d.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=v/3);const y=m.times.length-1;let b;if(c<=m.times[0]){const w=g,A=_-g;b=m.values.slice(w,A)}else if(c>=m.times[y]){const w=y*_+g,A=w+_-g;b=m.values.slice(w,A)}else{const w=m.createInterpolant();w.evaluate(c),b=w.resultBuffer.slice()}p==="quaternion"&&new Ft().fromArray(b).normalize().conjugate().toArray(b);const S=d.times.length;for(let w=0;w<S;++w){const A=w*v+f;if(p==="quaternion")Ft.multiplyQuaternionsFlat(d.values,A,b,0,d.values,A);else{const L=v-2*f;for(let R=0;R<L;++R)d.values[A+R]-=b[R]}}}return r.blendMode=Ka,r})(e,t,i,n)}}class Fn{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class lc extends Fn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nn,endingEnd:nn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case rn:r=e,o=2*t-i;break;case ar:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rn:a=e,l=2*i-t;break;case ar:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,m=this._weightPrev,p=this._weightNext,d=(i-t)/(n-t),g=d*d,_=g*d,f=-m*_+2*m*g-m*d,v=(1+m)*_+(-1.5-2*m)*g+(-.5+m)*d+1,y=(-1-p)*_+(1.5+p)*g+.5*d,b=p*_-p*g;for(let S=0;S!==o;++S)r[S]=f*a[c+S]+v*a[h+S]+y*a[l+S]+b*a[u+S];return r}}class rl extends Fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let m=0;m!==o;++m)r[m]=a[h+m]*u+a[l+m]*c;return r}}class hc extends Fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class cc extends Fn{interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this.inTangents,u=this.outTangents;if(!c||!u){const d=(i-t)/(n-t),g=1-d;for(let _=0;_!==o;++_)r[_]=a[h+_]*g+a[l+_]*d;return r}const m=2*o,p=e-1;for(let d=0;d!==o;++d){const g=a[h+d],_=a[l+d],f=p*m+2*d,v=u[f],y=u[f+1],b=e*m+2*d,S=c[b],w=c[b+1],A=Jg(i,t,v,S,n);r[d]=mp(A,g,y,w,_)}return r}}function mp(s,e,t,i,n){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function Zg(s,e,t,i,n){const r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function Jg(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){const o=mp(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;const l=Zg(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class ni{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ti(t,this.TimeBufferType),this.values=Ti(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ti(e.times,Array),values:Ti(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Lr(e.settings)&&(i.settings={inTangents:Ti(e.settings.inTangents,Array),outTangents:Ti(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new cc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Os:t=this.InterpolantFactoryMethodSmooth;break;case Ja:t=this.InterpolantFactoryMethodBezier}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Os;case this.InterpolantFactoryMethodBezier:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Lr(this.settings)&&(fp(this.settings.inTangents,e),fp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Lr(this.settings)&&(gp(this.settings.inTangents,e),gp(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){we("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){we("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&$l(n))for(let o=0,l=n.length;o!==l;++o){const h=n[o];if(isNaN(h)){we("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Os,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{const c=o*i,u=c-i,m=c+i;for(let p=0;p!==i;++p){const d=t[c+p];if(d!==t[u+p]||d!==t[m+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[c+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,Lr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function fp(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function gp(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}ni.prototype.ValueTypeName="",ni.prototype.TimeBufferType=Float32Array,ni.prototype.ValueBufferType=Float32Array,ni.prototype.DefaultInterpolation=Us;class fn extends ni{constructor(e,t,i){super(e,t,i)}}fn.prototype.ValueTypeName="bool",fn.prototype.ValueBufferType=Array,fn.prototype.DefaultInterpolation=sr,fn.prototype.InterpolantFactoryMethodLinear=void 0,fn.prototype.InterpolantFactoryMethodSmooth=void 0;class sl extends ni{constructor(e,t,i,n){super(e,t,i,n)}}sl.prototype.ValueTypeName="color";class da extends ni{constructor(e,t,i,n){super(e,t,i,n)}}da.prototype.ValueTypeName="number";class uc extends Fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let h=e*o;for(let c=h+o;h!==c;h+=4)Ft.slerpFlat(r,0,a,h-o,a,h,l);return r}}class pa extends ni{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}}pa.prototype.ValueTypeName="quaternion",pa.prototype.InterpolantFactoryMethodSmooth=void 0;class gn extends ni{constructor(e,t,i){super(e,t,i)}}gn.prototype.ValueTypeName="string",gn.prototype.ValueBufferType=Array,gn.prototype.DefaultInterpolation=sr,gn.prototype.InterpolantFactoryMethodLinear=void 0,gn.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends ni{constructor(e,t,i,n){super(e,t,i,n)}}al.prototype.ValueTypeName="vector";class Nr{constructor(e="",t=-1,i=[],n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Qt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Kg(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(ni.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const c=up(l);l=oc(l,1,c),h=oc(h,1,c),n||l[0]!==0||(l.push(r),h.push(h[0])),a.push(new da(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],c=h.name.match(r);if(c&&c.length>1){const u=c[1];let m=n[u];m||(n[u]=m=[]),m.push(h)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){const n=this.tracks[t];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Kg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=(function(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return da;case"vector":case"vector2":case"vector3":case"vector4":return al;case"color":return sl;case"quaternion":return pa;case"bool":case"boolean":return fn;case"string":return gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)})(s.type);if(s.times===void 0){const i=[],n=[];dp(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return t=e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation),Lr(s.settings)&&(t.settings={inTangents:Ti(s.settings.inTangents,Float32Array),outTangents:Ti(s.settings.outTangents,Float32Array)}),t}const wi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(_p(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!_p(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function _p(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ol{constructor(e,t,i){const n=this;let r,a=!1,o=0,l=0;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,m=h.length;u<m;u+=2){const p=h[u],d=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dc=new ol;class Xt{constructor(e){this.manager=e!==void 0?e:dc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Xt.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class $g extends Error{constructor(e,t){super(e),this.response=t}}class Ni extends Xt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),void setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);if(qi[e]!==void 0)return void qi[e].push({onLoad:t,onProgress:i,onError:n});qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=qi[e],u=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=m?parseInt(m):0,d=p!==0;let g=0;const _=new ReadableStream({start(f){(function v(){u.read().then(({done:y,value:b})=>{if(y)f.close();else{g+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:d,loaded:g,total:p});for(let w=0,A=c.length;w<A;w++){const L=c[w];L.onProgress&&L.onProgress(S)}f.enqueue(b),v()}},y=>{f.error(y)})})()}});return new Response(_)}throw new $g(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o==="")return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),u=c&&c[1]?c[1].toLowerCase():void 0,m=new TextDecoder(u);return h.arrayBuffer().then(p=>m.decode(p))}}}).then(h=>{wi.add(`file:${e}`,h);const c=qi[e];delete qi[e];for(let u=0,m=c.length;u<m;u++){const p=c[u];p.onLoad&&p.onLoad(h)}}).catch(h=>{const c=qi[e];if(c===void 0)throw this.manager.itemError(e),h;delete qi[e];for(let u=0,m=c.length;u<m;u++){const p=c[u];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Ni(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):we(l),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=Nr.parse(e[i]);t.push(n)}return t}}class yp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,a=[],o=new ra,l=new Ni(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let h=0;function c(u){l.load(e[u],function(m){const p=r.parse(m,!0);a[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},h+=1,h===6&&(p.mipmapCount===1&&(o.minFilter=gt),o.image=a,o.format=p.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let u=0,m=e.length;u<m;++u)c(u);else l.load(e,function(u){const m=r.parse(u,!0);if(m.isCubemap){const p=m.mipmaps.length/m.mipmapCount;for(let d=0;d<p;d++){a[d]={mipmaps:[]};for(let g=0;g<m.mipmapCount;g++)a[d].mipmaps.push(m.mipmaps[d*m.mipmapCount+g]),a[d].format=m.format,a[d].width=m.width,a[d].height=m.height}o.image=a}else o.image.width=m.width,o.image.height=m.height,o.mipmaps=m.mipmaps;m.mipmapCount===1&&(o.minFilter=gt),o.format=m.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}}const Dr=new WeakMap;class Ur extends Xt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Dr.get(a);u===void 0&&(u=[],Dr.set(a,u)),u.push({onLoad:t,onError:n})}return a}const o=zs("img");function l(){c(),t&&t(this);const u=Dr.get(this)||[];for(let m=0;m<u.length;m++){const p=u[m];p.onLoad&&p.onLoad(this)}Dr.delete(this),r.manager.itemEnd(e)}function h(u){c(),n&&n(u),wi.remove(`image:${e}`);const m=Dr.get(this)||[];for(let p=0;p<m.length;p++){const d=m[p];d.onError&&d.onError(u)}Dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class xp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=new Ar;r.colorSpace=kt;const a=new Ur(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(h){a.load(e[h],function(c){r.images[h]=c,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let h=0;h<e.length;++h)l(h);return r}}class Mp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new ii,o=new Ni(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let h;try{h=r.parse(l)}catch(c){return void(n!==void 0?n(c):we(c))}r._applyTexData(a,h),t&&t(a,h)},i,n),a}createDataTexture(e){const t=new ii;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:$t,e.wrapT=t.wrapT!==void 0?t.wrapT:$t,e.magFilter=t.magFilter!==void 0?t.magFilter:gt,e.minFilter=t.minFilter!==void 0?t.minFilter:gt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=gi),t.mipmapCount===1&&(e.minFilter=gt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Sp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=new ct,a=new Ur(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Yi extends Ze{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pc extends Yi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mc=new Ue,bp=new E,Tp=new E;class ma{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(bp),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(mc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,h=n?n.y/r.y:0;e.coordinateSystem===an||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ll=new E,hl=new Ft,Di=new E;class fa extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ll,hl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,hl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ll,hl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,hl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _n=new E,wp=new ie,Ep=new ie;class It extends fa{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*En*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*wn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*En*Math.atan(Math.tan(.5*wn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,wp,Ep),t.subVectors(Ep,wp)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*wn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qg extends ma{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=2*En*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;i===t.fov&&n===t.aspect&&r===t.far||(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class fc extends Yi{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Qg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class e0 extends ma{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}}class gc extends Yi{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new e0}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ga extends fa{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class t0 extends ma{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _c extends Yi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new t0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vc extends Yi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yc extends Yi{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class cl{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],i*n*1.092548),t.addScaledVector(a[5],n*r*1.092548),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],i*r*1.092548),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*n),t.addScaledVector(a[2],1.023328*r),t.addScaledVector(a[3],1.023328*i),t.addScaledVector(a[4],.858086*i*n),t.addScaledVector(a[5],.858086*n*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],.858086*i*r),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+3*n);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+3*n);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}}class xc extends Yi{constructor(e=new cl,t=1){super(void 0,t),this.isLightProbe=!0,this.type="LightProbe",this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const Ap={};class Oa extends Xt{constructor(e){super(e),this.textures={}}load(e,t,i,n){const r=this,a=new Ni(r.manager);a.setPriority(r.priority),a.setCache(r.cache),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):we(l),r.manager.itemError(e)}},i,n)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Oa.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Qh,SpriteMaterial:mo,RawShaderMaterial:el,ShaderMaterial:Li,PointsMaterial:Bo,MeshPhysicalMaterial:ec,MeshStandardMaterial:tl,MeshPhongMaterial:tc,MeshToonMaterial:ic,MeshNormalMaterial:nc,MeshLambertMaterial:rc,MeshDepthMaterial:il,MeshDistanceMaterial:nl,MeshBasicMaterial:dn,MeshMatcapMaterial:sc,LineDashedMaterial:ac,LineBasicMaterial:Gt,Material:Rt,...Ap}[e];let i;return t===void 0?(Ci(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),i=new Rt):i=new t,i}static registerMaterial(e,t){Ap[e]=t}}class ul{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Mc extends Be{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Sc extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Ni(r.manager);a.setPriority(r.priority),a.setCache(r.cache),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):we(l),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(u,m){if(t[m]!==void 0)return t[m];const p=u.interleavedBuffers[m],d=(function(f,v){if(i[v]!==void 0)return i[v];const y=f.arrayBuffers[v],b=new Uint32Array(y).buffer;return i[v]=b,b})(u,p.buffer),g=hr(p.type,d),_=new Js(g,p.stride);return _.uuid=p.uuid,p.usage!==void 0&&_.setUsage(p.usage),t[m]=_,_}const r=e.isInstancedBufferGeometry?new Mc:new Be,a=e.data.index;if(a!==void 0){const u=hr(a.type,a.array);r.setIndex(new ot(u,1))}const o=e.data.attributes;for(const u in o){const m=o[u];let p;if(m.isInterleavedBufferAttribute){const d=n(e.data,m.data);p=new yn(d,m.itemSize,m.offset,m.normalized)}else{const d=hr(m.type,m.array);p=new(m.isInstancedBufferAttribute?Nn:ot)(d,m.itemSize,m.normalized)}m.name!==void 0&&(p.name=m.name),m.usage!==void 0&&p.setUsage(m.usage),m.gpuType!==void 0&&(p.gpuType=m.gpuType),r.setAttribute(u,p)}const l=e.data.morphAttributes;if(l)for(const u in l){const m=l[u],p=[];for(let d=0,g=m.length;d<g;d++){const _=m[d];let f;if(_.isInterleavedBufferAttribute){const v=n(e.data,_.data);f=new yn(v,_.itemSize,_.offset,_.normalized)}else{const v=hr(_.type,_.array);f=new ot(v,_.itemSize,_.normalized)}_.name!==void 0&&(f.name=_.name),_.usage!==void 0&&f.setUsage(_.usage),_.gpuType!==void 0&&(f.gpuType=_.gpuType),p.push(f)}r.morphAttributes[u]=p}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,m=h.length;u!==m;++u){const p=h[u];r.addGroup(p.start,p.count,p.materialIndex)}const c=e.data.boundingSphere;return c!==void 0&&(r.boundingSphere=new Et().fromJSON(c)),e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}}const bc={};class Rp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,a=this.path===""?ul.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Ni(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let h=null;try{h=JSON.parse(l)}catch(u){return n!==void 0&&n(u),void we("ObjectLoader: Can't parse "+e+".",u.message)}const c=h.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")return n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),void we("ObjectLoader: Can't load "+e);r.parse(h,t)},i,n)}async loadAsync(e,t){const i=this.path===""?ul.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const n=new Ni(this.manager);n.setPriority(this.priority),n.setCache(this.cache),n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const r=await n.loadAsync(e,t);let a;try{a=JSON.parse(r)}catch(l){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+l.message)}const o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await this.parseAsync(a)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),h=this.parseObject(e.object,r,l,o,i),c=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,c),this.bindLightTargets(h),t!==void 0){let u=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),h=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,h),this.bindLightTargets(l),l}static registerGeometry(e,t){bc[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new Cr().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new ba().fromJSON(e[r],n);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Sc;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in op?o=op[l.type].fromJSON(l,t):l.type in bc?o=bc[l.type].fromJSON(l,t):oe(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new Oa;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=Nr.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function a(o){if(typeof o=="string"){const l=o;return(function(h){return h=i.manager.resolveURL(h),i.manager.itemStart(h),r.load(h,function(){i.manager.itemEnd(h)},void 0,function(){i.manager.itemError(h),i.manager.itemEnd(h)})})(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}return o.data?{data:hr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){const o=new ol(t);r=new Ur(o),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const c=e[l],u=c.url;if(Array.isArray(u)){const m=[];for(let p=0,d=u.length;p<d;p++){const g=a(u[p]);g!==null&&(g instanceof HTMLImageElement?m.push(g):m.push(new ii(g.data,g.width,g.height)))}n[c.uuid]=new yi(m)}else{const m=a(c.url);n[c.uuid]=new yi(m)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await n.loadAsync(l)}return a.data?{data:hr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){n=new Ur(this.manager),n.setPriority(this.priority),n.setCache(this.cache),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],h=l.url;if(Array.isArray(h)){const c=[];for(let u=0,m=h.length;u<m;u++){const p=h[u],d=await r(p);d!==null&&(d instanceof HTMLImageElement?c.push(d):c.push(new ii(d.data,d.width,d.height)))}i[l.uuid]=new yi(c)}else{const c=await r(l.url);i[l.uuid]=new yi(c)}}}return i}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(oe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const n={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&oe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&oe("ObjectLoader: Undefined image",o.image);const l=t[o.image],h=l.data;let c;Array.isArray(h)?(c=new Ar,h.length===6&&(c.needsUpdate=!0)):(c=h&&h.data?new ii:new ct,h&&(c.needsUpdate=!0)),c.source=l,c.uuid=o.uuid,o.name!==void 0&&(c.name=o.name),o.mapping!==void 0&&(c.mapping=i(o.mapping,i0)),o.channel!==void 0&&(c.channel=o.channel),o.offset!==void 0&&c.offset.fromArray(o.offset),o.repeat!==void 0&&c.repeat.fromArray(o.repeat),o.center!==void 0&&c.center.fromArray(o.center),o.rotation!==void 0&&(c.rotation=o.rotation),o.wrap!==void 0&&(c.wrapS=i(o.wrap[0],Cp),c.wrapT=i(o.wrap[1],Cp)),o.format!==void 0&&(c.format=o.format),o.internalFormat!==void 0&&(c.internalFormat=o.internalFormat),o.type!==void 0&&(c.type=o.type),o.colorSpace!==void 0&&(c.colorSpace=o.colorSpace),o.minFilter!==void 0&&(c.minFilter=i(o.minFilter,Pp)),o.magFilter!==void 0&&(c.magFilter=i(o.magFilter,Pp)),o.anisotropy!==void 0&&(c.anisotropy=o.anisotropy),o.flipY!==void 0&&(c.flipY=o.flipY),o.generateMipmaps!==void 0&&(c.generateMipmaps=o.generateMipmaps),o.mipmapsAutoUpdate!==void 0&&(c.mipmapsAutoUpdate=o.mipmapsAutoUpdate),o.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(c.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(c.compareFunction=o.compareFunction),o.normalized!==void 0&&(c.normalized=o.normalized),o.userData!==void 0&&(c.userData=o.userData),n[o.uuid]=c}return n}parseObject(e,t,i,n,r){let a,o,l;function h(m){return t[m]===void 0&&oe("ObjectLoader: Undefined geometry",m),t[m]}function c(m){if(m!==void 0){if(Array.isArray(m)){const p=[];for(let d=0,g=m.length;d<g;d++){const _=m[d];i[_]===void 0&&oe("ObjectLoader: Undefined material",_),p.push(i[_])}return p}return i[m]===void 0&&oe("ObjectLoader: Undefined material",m),i[m]}}function u(m){return n[m]===void 0&&oe("ObjectLoader: Undefined texture",m),n[m]}switch(e.type){case"Scene":a=new hh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ge(e.background):a.background=u(e.background)),e.environment!==void 0&&(a.environment=u(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Sa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ma(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new It(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ga(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new vc(e.color,e.intensity);break;case"DirectionalLight":a=new _c(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new gc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new yc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new fc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"",e.map!==void 0&&(a.map=u(e.map));break;case"HemisphereLight":a=new pc(e.color,e.groundColor,e.intensity);break;case"LightProbe":const m=new cl().fromArray(e.sh);a=new xc(m,e.intensity);break;case"SkinnedMesh":o=h(e.geometry),l=c(e.material),a=new Rh(o,l),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":o=h(e.geometry),l=c(e.material),a=new Mt(o,l);break;case"InstancedMesh":o=h(e.geometry),l=c(e.material);const p=e.count,d=e.instanceMatrix,g=e.instanceColor;a=new Ch(o,l,p),a.instanceMatrix=new Nn(new Float32Array(d.array),16),g!==void 0&&(a.instanceColor=new Nn(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":o=h(e.geometry),l=c(e.material),a=new Nh(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,l),a.geometry=o,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(_=>{let f=null,v=null;return _.boundingBox!==void 0&&(f=new Pt().fromJSON(_.boundingBox)),_.boundingSphere!==void 0&&(v=new Et().fromJSON(_.boundingSphere)),{..._,boundingBox:f,boundingSphere:v}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e.availableInstanceIds,a._availableGeometryIds=e.availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=u(e.matricesTexture.uuid),a._indirectTexture=u(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=u(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Et().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Pt().fromJSON(e.boundingBox));break;case"LOD":a=new bh;break;case"Line":a=new ji(h(e.geometry),c(e.material));break;case"LineLoop":a=new Uh(h(e.geometry),c(e.material));break;case"LineSegments":a=new bi(h(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Fh(h(e.geometry),c(e.material));break;case"Sprite":a=new Sh(c(e.material)),e.center!==void 0&&a.center.fromArray(e.center);break;case"Group":a=new Rn;break;case"Bone":a=new Co;break;default:a=new Ze}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.pivot!==void 0&&(a.pivot=new E().fromArray(e.pivot)),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&(a.matrix.decompose(a.position,a.quaternion,a.scale),a.pivot!==null&&a.position.copy(a.pivot).applyMatrix4(a.matrix).sub(a.pivot))):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.mapType!==void 0&&(a.shadow.mapType=e.shadow.mapType),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let p=0;p<m.length;p++)a.add(this.parseObject(m[p],t,i,n,r))}if(e.animations!==void 0){const m=e.animations;for(let p=0;p<m.length;p++){const d=m[p];a.animations.push(r[d])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let p=0;p<m.length;p++){const d=m[p],g=a.getObjectByProperty("uuid",d.object);g!==void 0&&a.addLevel(g,d.distance,d.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?oe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);t.target=n!==void 0?n:new Ze}})}}const i0={UVMapping:$r,CubeReflectionMapping:$i,CubeRefractionMapping:Qi,EquirectangularReflectionMapping:qn,EquirectangularRefractionMapping:Yn},Cp={RepeatWrapping:Zn,ClampToEdgeWrapping:$t,MirroredRepeatWrapping:Jn},Pp={NearestFilter:Nt,NearestMipmapNearestFilter:Ha,NearestMipmapLinearFilter:bn,LinearFilter:gt,LinearMipmapNearestFilter:Kn,LinearMipmapLinearFilter:gi},Tc=new WeakMap;class Ip extends Xt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(`image-bitmap:${e}`);if(a!==void 0)return r.manager.itemStart(e),a.then?void a.then(h=>{Tc.has(a)===!0?(n&&n(Tc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(h),r.manager.itemEnd(e))}):void setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(h){return wi.add(`image-bitmap:${e}`,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){n&&n(h),Tc.set(l,h),wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let dl;class pl{static getContext(){return dl===void 0&&(dl=new(window.AudioContext||window.webkitAudioContext)),dl}static setContext(e){dl=e}}class Lp extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Ni(this.manager);function o(l){n?n(l):we(l),r.manager.itemError(e)}a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const h=l.slice(0),c=pl.getContext(),u=e+"#decode";r.manager.itemStart(u),c.decodeAudioData(h,function(m){t(m),r.manager.itemEnd(u)}).catch(function(m){o(m),r.manager.itemEnd(u)})}catch(h){o(h)}},i,n)}}const Np=new Ue,Dp=new Ue,Bn=new Ue;class Up{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new It,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new It,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Bn.copy(e.projectionMatrix);const i=t.eyeSep/2,n=i*t.near/t.focus,r=t.near*Math.tan(wn*t.fov*.5)/t.zoom;let a,o;Dp.elements[12]=-i,Np.elements[12]=i,a=-r*t.aspect+n,o=r*t.aspect+n,Bn.elements[0]=2*t.near/(o-a),Bn.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(Bn),a=-r*t.aspect-n,o=r*t.aspect-n,Bn.elements[0]=2*t.near/(o-a),Bn.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(Bn)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Dp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Np),this.cameraR.matrixWorldNeedsUpdate=!0}}const Or=-90;class _a extends Ze{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new It(Or,1,e,t);n.layers=this.layers,this.add(n);const r=new It(Or,1,e,t);r.layers=this.layers,this.add(r);const a=new It(Or,1,e,t);a.layers=this.layers,this.add(a);const o=new It(Or,1,e,t);o.layers=this.layers,this.add(o);const l=new It(Or,1,e,t);l.layers=this.layers,this.add(l);const h=new It(Or,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==an)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(u,m,p),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class wc extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Ec{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=n0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function n0(){this._document.hidden===!1&&this.reset()}const zn=new E,Ac=new Ft,r0=new E,Gn=new E,Vn=new E;class Op extends Ze{constructor(){super(),this.type="AudioListener",this.context=pl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ec}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(zn,Ac,r0),Gn.set(0,0,-1).applyQuaternion(Ac),Vn.set(0,1,0).applyQuaternion(Ac),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(zn.x,i),t.positionY.linearRampToValueAtTime(zn.y,i),t.positionZ.linearRampToValueAtTime(zn.z,i),t.forwardX.linearRampToValueAtTime(Gn.x,i),t.forwardY.linearRampToValueAtTime(Gn.y,i),t.forwardZ.linearRampToValueAtTime(Gn.z,i),t.upX.linearRampToValueAtTime(Vn.x,i),t.upY.linearRampToValueAtTime(Vn.y,i),t.upZ.linearRampToValueAtTime(Vn.z,i)}else t.setPosition(zn.x,zn.y,zn.z),t.setOrientation(Gn.x,Gn.y,Gn.z,Vn.x,Vn.y,Vn.z)}}class Rc extends Ze{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void oe("Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void oe("Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;oe("Audio: this Audio has no playback control.")}stop(e=0){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this;oe("Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;oe("Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(oe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;oe("Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(oe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const kn=new E,Fp=new Ft,s0=new E,Hn=new E;class Bp extends Rc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(kn,Fp,s0),Hn.set(0,0,1).applyQuaternion(Fp);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(kn.x,i),t.positionY.linearRampToValueAtTime(kn.y,i),t.positionZ.linearRampToValueAtTime(kn.z,i),t.orientationX.linearRampToValueAtTime(Hn.x,i),t.orientationY.linearRampToValueAtTime(Hn.y,i),t.orientationZ.linearRampToValueAtTime(Hn.z,i)}else t.setPosition(kn.x,kn.y,kn.z),t.setOrientation(Hn.x,Hn.y,Hn.z)}}class zp{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Cc{constructor(e,t,i){let n,r,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Ft.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const a=this._workIndex*r;Ft.multiplyQuaternionsFlat(e,a,e,t,e,i),Ft.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){const a=1-n;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const Pc="\\[\\]\\.:\\/",a0=new RegExp("["+Pc+"]","g"),Ic="[^"+Pc+"]",o0="[^"+Pc.replace("\\.","")+"]",l0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ic)+/(WCOD+)?/.source.replace("WCOD",o0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic)+"$"),h0=["material","materials","bones","map"];class Je{constructor(e,t,i){this.path=t,this.parsedPath=i||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,i):new Je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(e){const t=l0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);h0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void oe("PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void we("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void we("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void we("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}const a=e[n];if(a===void 0)return void we("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=class{constructor(s,e,t){const i=t||Je.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();const t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gp{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Qt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,h=this.nCachedObjects_;for(let c=0,u=arguments.length;c!==u;++c){const m=arguments[c],p=m.uuid;let d=t[p];if(d===void 0){d=l++,t[p]=d,e.push(m);for(let g=0,_=a;g!==_;++g)r[g].push(new Je(m,i[g],n[g]))}else if(d<h){o=e[d];const g=--h,_=e[g];t[_.uuid]=d,e[d]=_,t[p]=g,e[g]=m;for(let f=0,v=a;f!==v;++f){const y=r[f],b=y[g];let S=y[d];y[d]=b,S===void 0&&(S=new Je(m,i[f],n[f])),y[g]=S}}else e[d]!==o&&we("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],h=l.uuid,c=t[h];if(c!==void 0&&c>=r){const u=r++,m=e[u];t[m.uuid]=c,e[c]=m,t[h]=u,e[u]=l;for(let p=0,d=n;p!==d;++p){const g=i[p],_=g[u],f=g[c];g[c]=_,g[u]=f}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const h=arguments[o].uuid,c=t[h];if(c!==void 0)if(delete t[h],c<r){const u=--r,m=e[u],p=--a,d=e[p];c!==u&&(t[m.uuid]=c),e[c]=m,u!==p&&(t[d.uuid]=u),e[u]=d,e.pop();for(let g=0,_=n;g!==_;++g){const f=i[g],v=f[u],y=f[p];f[c]=v,f[u]=y,f.pop()}}else{const u=--a,m=e[u];c!==u&&(t[m.uuid]=c),e[c]=m,e.pop();for(let p=0,d=n;p!==d;++p){const g=i[p];g[c]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const a=this._paths,o=this._parsedPaths,l=this._objects,h=l.length,c=this.nCachedObjects_,u=new Array(h);n=r.length,i[e]=n,a.push(e),o.push(t),r.push(u);for(let m=c,p=l.length;m!==p;++m){const d=l[m];u[m]=new Je(d,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o];t[n[o]]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),n[i]=n[o],n.pop()}}}class Lc{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:nn,endingEnd:nn};for(let h=0;h!==a;++h){const c=r[h].createInterpolant(null);o[h]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Yl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,h=o.sampleValues;return l[0]=r,l[1]=r+i,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled)return void this._updateWeight(e);const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,h=this._propertyBindings;if(this.blendMode===Ka)for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),h[c].accumulateAdditive(o);else for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),h[c].accumulate(n,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping()))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const a=i===Zl;if(e===0)return r===-1||!a||1&~r?n:t-n;if(i===ql){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else{if(!(n<0)){this.time=n;break e}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=n;if(a&&!(1&~r))return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=rn,n.endingEnd=rn):(n.endingStart=e?this.zeroSlopeAtStart?rn:nn:ar,n.endingEnd=t?this.zeroSlopeAtEnd?rn:nn:ar)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const c0=new Float32Array(1);class Vp extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,h=this._bindingsByRootAndName;let c=h[l];c===void 0&&(c={},h[l]=c);for(let u=0;u!==r;++u){const m=n[u],p=m.name;let d=c[p];if(d!==void 0)++d.referenceCount,a[u]=d;else{if(d=a[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,l,p));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;d=new Cc(Je.create(i,p,g),m.ValueTypeName,m.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,l,p),a[u]=d}o[u].resultBuffer=d.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,h=l[l.length-1],c=e._byClipCacheIndex;h._byClipCacheIndex=c,l[c]=h,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],h=e._cacheIndex;l._cacheIndex=h,t[h]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new rl(new Float32Array(2),new Float32Array(2),1,c0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let a=typeof e=="string"?Nr.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let h=null;if(i===void 0&&(i=a!==null?a.blendMode:Jl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;h=l.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const c=new Lc(this,a,t,i);return this._bindAction(c,h),this._addInactiveAction(c,o,r),c}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?Nr.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==i;++h)t[h]._update(n,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)o[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const h=a[o];this._deactivateAction(h);const c=h._cacheIndex,u=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,u._cacheIndex=c,t[c]=u,t.pop(),this._removeInactiveBindingsForAction(h)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const a=i[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const n=this._bindingsByRootAndName[t];if(n!==void 0)for(const r in n){const a=n[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class kp extends no{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i;for(let r=0;r<this.textures.length;r++){const a=new ks(null,e,t,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(n)}}class Al{constructor(e){this.value=e}clone(){return new Al(this.value.clone===void 0?this.value:this.value.clone())}}let u0=0;class Hp extends li{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:u0++}),this.name="",this.usage=Bs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=t[i];Array.isArray(r)?this.uniforms.push(r.map(a=>a.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}}class Wp extends Js{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Xp{constructor(e,t,i,n,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const jp=new Ue;class qp{constructor(e,t,i=0,n=1/0){this.ray=new In(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):we("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jp),this}intersectObject(e,t=!0,i=[]){return Nc(e,this,i,t),i.sort(Yp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Nc(e[n],this,i,t);return i.sort(Yp),i}}function Yp(s,e){return s.distance-e.distance}function Nc(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Nc(r[a],e,t,!0)}}class Zp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Jp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=De(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(De(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kp{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class $p{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}const Qp=new ie;class Dc{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const em=new E,ml=new E,Fr=new E,Br=new E,Uc=new E,d0=new E,p0=new E;class tm{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){em.subVectors(e,this.start),ml.subVectors(this.end,this.start);const i=ml.dot(ml);if(i===0)return 0;let n=ml.dot(em)/i;return t&&(n=De(n,0,1)),n}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=d0,i=p0){const n=10000000000000001e-32;let r,a;const o=this.start,l=e.start,h=this.end,c=e.end;Fr.subVectors(h,o),Br.subVectors(c,l),Uc.subVectors(o,l);const u=Fr.dot(Fr),m=Br.dot(Br),p=Br.dot(Uc);if(u<=n&&m<=n)return t.copy(o),i.copy(l),t.distanceToSquared(i);if(u<=n)r=0,a=p/m,a=De(a,0,1);else{const d=Fr.dot(Uc);if(m<=n)a=0,r=De(-d/u,0,1);else{const g=Fr.dot(Br),_=u*m-g*g;r=_!==0?De((g*p-d*m)/_,0,1):0,a=(g*r+p)/m,a<0?(a=0,r=De(-d/u,0,1)):a>1&&(a=1,r=De((g-d)/u,0,1))}}return t.copy(o).addScaledVector(Fr,r),i.copy(l).addScaledVector(Br,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const im=new E;class nm extends Ze{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Be,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const h=a/l*Math.PI*2,c=o/l*Math.PI*2;n.push(Math.cos(h),Math.sin(h),1,Math.cos(c),Math.sin(c),1)}i.setAttribute("position",new ye(n,3));const r=new Gt({fog:!1,toneMapped:!1});this.cone=new bi(i,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),im.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(im),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const vn=new E,fl=new Ue,Oc=new Ue;class rm extends bi{constructor(e){const t=sm(e),i=new Be,n=[],r=[];for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new ye(n,3)),i.setAttribute("color",new ye(r,3)),super(i,new Gt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new ge(255),o=new ge(65280);this.setColors(a,o)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Oc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(fl.multiplyMatrices(Oc,o.matrixWorld),vn.setFromMatrixPosition(fl),n.setXYZ(a,vn.x,vn.y,vn.z),fl.multiplyMatrices(Oc,o.parent.matrixWorld),vn.setFromMatrixPosition(fl),n.setXYZ(a+1,vn.x,vn.y,vn.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let n=0;n<i.count;n+=2)i.setXYZ(n,e.r,e.g,e.b),i.setXYZ(n+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function sm(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...sm(s.children[t]));return e}class am extends Mt{constructor(e,t,i){super(new Wr(t,4,2),new dn({wireframe:!0,fog:!1,toneMapped:!1})),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const m0=new E,om=new ge,lm=new ge;class hm extends Ze{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new Hr(t);n.rotateY(.5*Math.PI),this.material=new dn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),a=new Float32Array(3*r.count);n.setAttribute("color",new ot(a,3)),this.add(new Mt(n,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");om.copy(this.light.color),lm.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?om:lm;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(m0.setFromMatrixPosition(this.light.matrixWorld).negate())}}class cm extends bi{constructor(e=10,t=10,i=4473924,n=8947848){i=new ge(i),n=new ge(n);const r=t/2,a=e/t,o=e/2,l=[],h=[];for(let u=0,m=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const d=u===r?i:n;d.toArray(h,m),m+=3,d.toArray(h,m),m+=3,d.toArray(h,m),m+=3,d.toArray(h,m),m+=3}const c=new Be;c.setAttribute("position",new ye(l,3)),c.setAttribute("color",new ye(h,3)),super(c,new Gt({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class um extends bi{constructor(e=10,t=16,i=8,n=64,r=4473924,a=8947848){r=new ge(r),a=new ge(a);const o=[],l=[];if(t>1)for(let c=0;c<t;c++){const u=c/t*(2*Math.PI),m=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(m,0,p);const d=1&c?r:a;l.push(d.r,d.g,d.b),l.push(d.r,d.g,d.b)}for(let c=0;c<i;c++){const u=1&c?r:a,m=e-e/i*c;for(let p=0;p<n;p++){let d=p/n*(2*Math.PI),g=Math.sin(d)*m,_=Math.cos(d)*m;o.push(g,0,_),l.push(u.r,u.g,u.b),d=(p+1)/n*(2*Math.PI),g=Math.sin(d)*m,_=Math.cos(d)*m,o.push(g,0,_),l.push(u.r,u.g,u.b)}}const h=new Be;h.setAttribute("position",new ye(o,3)),h.setAttribute("color",new ye(l,3)),super(h,new Gt({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const dm=new E,gl=new E,pm=new E;class mm extends Ze{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Be;n.setAttribute("position",new ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Gt({fog:!1,toneMapped:!1});this.lightPlane=new ji(n,r),this.add(this.lightPlane),n=new Be,n.setAttribute("position",new ye([0,0,0,0,0,1],3)),this.targetLine=new ji(n,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),dm.setFromMatrixPosition(this.light.matrixWorld),gl.setFromMatrixPosition(this.light.target.matrixWorld),pm.subVectors(gl,dm),this.lightPlane.lookAt(gl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(gl),this.targetLine.scale.z=pm.length()}}const _l=new E,mt=new fa;class fm extends bi{constructor(e){const t=new Be,i=new Gt({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],a={};function o(d,g){l(d),l(g)}function l(d){n.push(0,0,0),r.push(0,0,0),a[d]===void 0&&(a[d]=[]),a[d].push(n.length/3-1)}o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4"),t.setAttribute("position",new ye(n,3)),t.setAttribute("color",new ye(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new ge(16755200),c=new ge(16711680),u=new ge(43775),m=new ge(16777215),p=new ge(3355443);this.setColors(h,c,u,m,p)}setColors(e,t,i,n,r){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,i.r,i.g,i.b),a.setXYZ(33,i.r,i.g,i.b),a.setXYZ(34,i.r,i.g,i.b),a.setXYZ(35,i.r,i.g,i.b),a.setXYZ(36,i.r,i.g,i.b),a.setXYZ(37,i.r,i.g,i.b),a.setXYZ(38,n.r,n.g,n.b),a.setXYZ(39,n.r,n.g,n.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap;let i,n;if(mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)i=1,n=0;else if(this.camera.coordinateSystem===vi)i=-1,n=1;else{if(this.camera.coordinateSystem!==an)throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);i=0,n=1}_t("c",t,e,mt,0,0,i),_t("t",t,e,mt,0,0,n),_t("n1",t,e,mt,-1,-1,i),_t("n2",t,e,mt,1,-1,i),_t("n3",t,e,mt,-1,1,i),_t("n4",t,e,mt,1,1,i),_t("f1",t,e,mt,-1,-1,n),_t("f2",t,e,mt,1,-1,n),_t("f3",t,e,mt,-1,1,n),_t("f4",t,e,mt,1,1,n),_t("u1",t,e,mt,.7,1.1,i),_t("u2",t,e,mt,-.7,1.1,i),_t("u3",t,e,mt,0,2,i),_t("cf1",t,e,mt,-1,0,n),_t("cf2",t,e,mt,1,0,n),_t("cf3",t,e,mt,0,-1,n),_t("cf4",t,e,mt,0,1,n),_t("cn1",t,e,mt,-1,0,i),_t("cn2",t,e,mt,1,0,i),_t("cn3",t,e,mt,0,-1,i),_t("cn4",t,e,mt,0,1,i),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function _t(s,e,t,i,n,r,a){_l.set(n,r,a).unproject(i);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let h=0,c=o.length;h<c;h++)l.setXYZ(o[h],_l.x,_l.y,_l.z)}}const vl=new Pt;class gm extends bi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Be;r.setIndex(new ot(i,1)),r.setAttribute("position",new ot(n,3)),super(r,new Gt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&vl.setFromObject(this.object),vl.isEmpty())return;const e=vl.min,t=vl.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class _m extends bi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Be;n.setIndex(new ot(i,1)),n.setAttribute("position",new ye([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new Gt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class vm extends ji{constructor(e,t=1,i=16776960){const n=i,r=new Be;r.setAttribute("position",new ye([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computeBoundingSphere(),super(r,new Gt({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=new Be;a.setAttribute("position",new ye([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),a.computeBoundingSphere(),this.add(new Mt(a,new dn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ym=new E;let yl,Fc;class xm extends Ze{constructor(e=new E(0,0,1),t=new E(0,0,0),i=1,n=16776960,r=.2*i,a=.2*r){super(),this.type="ArrowHelper",yl===void 0&&(yl=new Be,yl.setAttribute("position",new ye([0,0,0,0,1,0],3)),Fc=new kr(.5,1,5,1),Fc.translate(0,-.5,0)),this.position.copy(t),this.line=new ji(yl,new Gt({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Mt(Fc,new dn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ym.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ym,t)}}setLength(e,t=.2*e,i=.2*t){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Mm extends bi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=new Be;i.setAttribute("position",new ye(t,3)),i.setAttribute("color",new ye([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(i,new Gt({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,i){const n=new ge,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Sm{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Rr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,h){let c=!1;const u=h.length;for(let m=0,p=u-1;m<u;p=m++){const d=h[m],g=h[p];d.y>l.y!=g.y>l.y&&l.x<(g.x-d.x)*(l.y-d.y)/(g.y-d.y)+d.x&&(c=!c)}return c}function t(l,h){const c=h.getCenter(new ie);if(e(c,l))return c;const u=c.y,m=[],p=l.length;for(let d=0;d<p;d++){const g=l[d],_=l[(d+1)%p];if(g.y>u!=_.y>u){const f=g.x+(u-g.y)*(_.x-g.x)/(_.y-g.y);m.push(f)}}return m.length>1&&(m.sort((d,g)=>d-g),c.x=(m[0]+m[1])/2),c}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(oe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?l=>l!==0:l=>!!(1&l),r=[];for(const l of this.subPaths){const h=l.getPoints();if(h.length<3)continue;const c=di.area(h);if(c===0)continue;const u=new Dc;for(let m=0;m<h.length;m++)u.expandByPoint(h[m]);r.push({subPath:l,points:h,boundingBox:u,interiorPoint:t(h,u),absArea:Math.abs(c),winding:c<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,h)=>h.absArea-l.absArea);for(let l=0;l<r.length;l++){const h=r[l];let c=0;for(let u=l-1;u>=0;u--){const m=r[u];if(m.boundingBox.containsBox(h.boundingBox)&&e(h.interiorPoint,m.points)){h.container=m.exclude?m.container:m,c=m.winding,h.winding+=c;break}}n(h.winding)===n(c)&&(h.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const h=new Cr;h.curves=l.subPath.curves,a.push(h),o.set(l,h)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const h=o.get(l.container);if(!h)continue;const c=new Rr;c.curves=l.subPath.curves,h.holes.push(c)}return a}}class bm extends li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xl(s,e,t,i){const n=(function(r){switch(r){case Vt:case Wa:return{byteLength:1,components:1};case Tn:case Xa:case oi:return{byteLength:2,components:1};case es:case ts:return{byteLength:2,components:4};case _i:case Qr:case Dt:return{byteLength:4,components:1};case ja:case qa:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)})(i);switch(t){case Ya:return s*e;case is:case $n:return s*e/n.components*n.byteLength;case Bi:case ns:return s*e*2/n.components*n.byteLength;case Za:return s*e*3/n.components*n.byteLength;case qt:case rs:return s*e*4/n.components*n.byteLength;case Qn:case er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tr:case ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case as:case ls:return Math.max(s,16)*Math.max(e,8)/4;case ss:case os:return Math.max(s,8)*Math.max(e,8)/2;case hs:case cs:case ds:case ps:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case us:case nr:case ms:case fs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gs:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _s:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vs:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ys:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xs:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ss:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case bs:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ws:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Es:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case As:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rs:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cs:case Ps:case Is:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ls:case Ns:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rr:case Ds:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}class Tm{static contain(e,t){return(function(i,n){const r=i.image&&i.image.width?i.image.width/i.image.height:1;return r>n?(i.repeat.x=1,i.repeat.y=r/n,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=n/r,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i})(e,t)}static cover(e,t){return(function(i,n){const r=i.image&&i.image.width?i.image.width/i.image.height:1;return r>n?(i.repeat.x=n/r,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=r/n,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i})(e,t)}static fill(e){return(function(t){return t.repeat.x=1,t.repeat.y=1,t.offset.x=0,t.offset.y=0,t})(e)}static getByteLength(e,t,i,n){return xl(e,t,i,n)}}function wm(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function f0(s){const e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);const i=e.get(t);i&&(s.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){const r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}const n=e.get(t);if(n===void 0)e.set(t,(function(r,a){const o=r.array,l=r.usage,h=o.byteLength,c=s.createBuffer();let u;if(s.bindBuffer(a,c),s.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=s.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=s.SHORT;else if(o instanceof Uint32Array)u=s.UNSIGNED_INT;else if(o instanceof Int32Array)u=s.INT;else if(o instanceof Int8Array)u=s.BYTE;else if(o instanceof Uint8Array)u=s.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=s.UNSIGNED_BYTE}return{buffer:c,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:h}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){const l=a.array,h=a.updateRanges;if(s.bindBuffer(o,r),h.length===0)s.bufferSubData(o,0,l);else{h.sort((u,m)=>u.start-m.start);let c=0;for(let u=1;u<h.length;u++){const m=h[c],p=h[u];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++c,h[c]=p)}h.length=c+1;for(let u=0,m=h.length;u<m;u++){const p=h[u];s.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");const Ge={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ue={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Ei={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Ei.physical={uniforms:Wt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ml={r:0,b:0,g:0},g0=new Ue,Em=new Oe;function _0(s,e,t,i,n,r){const a=new ge(0);let o,l,h=n===!0?0:1,c=null,u=0,m=null;function p(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const f=g.backgroundBlurriness>0;_=e.get(_,f)}return _}function d(g,_){g.getRGB(Ml,hp(s)),t.buffers.color.setClear(Ml.r,Ml.g,Ml.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),h=_,d(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,d(a,h)},render:function(g){let _=!1;const f=p(g);f===null?d(a,h):f&&f.isColor&&(d(f,1),_=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(g,_){const f=p(_);f&&f.isCubeTexture?(l===void 0&&(l=new Mt(new xn(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ir(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(_.backgroundRotation)).transpose(),f.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Em),l.material.toneMapped=He.getTransfer(f.colorSpace)!==Qe,c===f&&u===f.version&&m===s.toneMapping||(l.material.needsUpdate=!0,c=f,u=f.version,m=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Mt(new Wn(2,2),new Li({name:"BackgroundMaterial",uniforms:Ir(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=He.getTransfer(f.colorSpace)!==Qe,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),c===f&&u===f.version&&m===s.toneMapping||(o.material.needsUpdate=!0,c=f,u=f.version,m=s.toneMapping),o.layers.enableAll(),g.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function v0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null);let r=n,a=!1;function o(f){return s.bindVertexArray(f)}function l(f){return s.deleteVertexArray(f)}function h(f){const v=[],y=[],b=[];for(let S=0;S<t;S++)v[S]=0,y[S]=0,b[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:b,object:f,attributes:{},index:null}}function c(){const f=r.newAttributes;for(let v=0,y=f.length;v<y;v++)f[v]=0}function u(f){m(f,0)}function m(f,v){const y=r.newAttributes,b=r.enabledAttributes,S=r.attributeDivisors;y[f]=1,b[f]===0&&(s.enableVertexAttribArray(f),b[f]=1),S[f]!==v&&(s.vertexAttribDivisor(f,v),S[f]=v)}function p(){const f=r.newAttributes,v=r.enabledAttributes;for(let y=0,b=v.length;y<b;y++)v[y]!==f[y]&&(s.disableVertexAttribArray(y),v[y]=0)}function d(f,v,y,b,S,w,A){A===!0?s.vertexAttribIPointer(f,v,y,S,w):s.vertexAttribPointer(f,v,y,b,S,w)}function g(){_(),a=!0,r!==n&&(r=n,o(r.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,v,y,b,S){let w=!1;const A=(function(L,R,N,z){const B=z.wireframe===!0;let V=i[R.id];V===void 0&&(V={},i[R.id]=V);const J=L.isInstancedMesh===!0?L.id:0;let Y=V[J];Y===void 0&&(Y={},V[J]=Y);let k=Y[N.id];k===void 0&&(k={},Y[N.id]=k);let D=k[B];return D===void 0&&(D=h(s.createVertexArray()),k[B]=D),D})(f,b,y,v);r!==A&&(r=A,o(r.object)),w=(function(L,R,N,z){const B=r.attributes,V=R.attributes;let J=0;const Y=N.getAttributes();for(const k in Y)if(Y[k].location>=0){const D=B[k];let K=V[k];if(K===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;J++}return r.attributesNum!==J||r.index!==z})(f,b,y,S),w&&(function(L,R,N,z){const B={},V=R.attributes;let J=0;const Y=N.getAttributes();for(const k in Y)if(Y[k].location>=0){let D=V[k];D===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(D=L.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),B[k]=K,J++}r.attributes=B,r.attributesNum=J,r.index=z})(f,b,y,S),S!==null&&e.update(S,s.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(L,R,N,z){c();const B=z.attributes,V=N.getAttributes(),J=R.defaultAttributeValues;for(const Y in V){const k=V[Y];if(k.location>=0){let D=B[Y];if(D===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){const K=D.normalized,ne=D.itemSize,ve=e.get(D);if(ve===void 0)continue;const Ee=ve.buffer,$=ve.type,le=ve.bytesPerElement,he=$===s.INT||$===s.UNSIGNED_INT||D.gpuType===Qr;if(D.isInterleavedBufferAttribute){const se=D.data,Me=se.isInterleavedBuffer===!0?se.stride:se.itemSize,ae=D.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let Pe=0;Pe<k.locationSize;Pe++)m(k.location+Pe,se.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)u(k.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Pe=0;Pe<k.locationSize;Pe++)d(k.location+Pe,ne/k.locationSize,$,K,Me*le,(ae+ne/k.locationSize*Pe)*le,he)}else{if(D.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)m(k.location+se,D.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<k.locationSize;se++)u(k.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let se=0;se<k.locationSize;se++)d(k.location+se,ne/k.locationSize,$,K,ne*le,ne/k.locationSize*se*le,he)}}else if(J!==void 0){const K=J[Y];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(k.location,K);break;case 3:s.vertexAttrib3fv(k.location,K);break;case 4:s.vertexAttrib4fv(k.location,K);break;default:s.vertexAttrib1fv(k.location,K)}}}}p()})(f,v,y,b),S!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:g,resetDefaultState:_,dispose:function(){g();for(const f in i){const v=i[f];for(const y in v){const b=v[y];for(const S in b){const w=b[S];for(const A in w)l(w[A].object),delete w[A];delete b[S]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;const v=i[f.id];for(const y in v){const b=v[y];for(const S in b){const w=b[S];for(const A in w)l(w[A].object),delete w[A];delete b[S]}}delete i[f.id]},releaseStatesOfObject:function(f){for(const v in i){const y=i[v],b=f.isInstancedMesh===!0?f.id:0,S=y[b];if(S!==void 0){for(const w in S){const A=S[w];for(const L in A)l(A[L].object),delete A[L];delete S[w]}delete y[b],Object.keys(y).length===0&&delete i[v]}}},releaseStatesOfProgram:function(f){for(const v in i){const y=i[v];for(const b in y){const S=y[b];if(S[f.id]===void 0)continue;const w=S[f.id];for(const A in w)l(w[A].object),delete w[A];delete S[f.id]}}},initAttributes:c,enableAttribute:u,disableUnusedAttributes:p}}function y0(s,e,t){let i;this.setMode=function(n){i=n},this.render=function(n,r){s.drawArrays(i,n,r),t.update(r,i,1)},this.renderInstances=function(n,r,a){a!==0&&(s.drawArraysInstanced(i,n,r,a),t.update(r,i,a))},this.renderMultiDraw=function(n,r,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,n,0,r,0,a);let o=0;for(let l=0;l<a;l++)o+=r[l];t.update(o,i,1)}}function x0(s,e,t,i){let n;function r(c){if(c==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";c="mediump"}return c==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(oe("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&l===!1;return t.reversedDepthBuffer===!0&&l===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&l===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled."),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const c=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,textureFormatReadable:function(c){return c===qt||i.convert(c)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(c){const u=c===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(c!==Vt&&c!==Dt&&!u&&i.convert(c)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))},precision:a,logarithmicDepthBuffer:h,reversedDepthBuffer:l,maxTextures:s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:s.getParameter(s.MAX_SAMPLES),samples:s.getParameter(s.SAMPLES)}}function M0(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Pi,o=new Oe,l={value:null,needsUpdate:!1};function h(c,u,m,p){const d=c!==null?c.length:0;let g=null;if(d!==0){if(g=l.value,p!==!0||g===null){const _=m+4*d,f=u.matrixWorldInverse;o.getNormalMatrix(f),(g===null||g.length<_)&&(g=new Float32Array(_));for(let v=0,y=m;v!==d;++v,y+=4)a.copy(c[v]).applyMatrix4(f,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const m=c.length!==0||u||i!==0||n;return n=u,i=c.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){t=h(c,u,0)},this.setState=function(c,u,m){const p=c.clippingPlanes,d=c.clipIntersection,g=c.clipShadows,_=s.get(c);if(!n||p===null||p.length===0||r&&!g)r?h(null):(l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0);else{const f=r?0:i,v=4*f;let y=_.clippingState||null;l.value=y,y=h(p,u,v,m);for(let b=0;b!==v;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=f}}}Em.set(-1,0,0,0,1,0,0,0,1);class Sl extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ar(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={tEquirect:{value:null}},n=`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,r=`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,a=new xn(5,5,5),o=new Li({name:"CubemapFromEquirect",uniforms:Ir(i),vertexShader:n,fragmentShader:r,side:1,blending:0});o.uniforms.tEquirect.value=t;const l=new Mt(a,o),h=t.minFilter;return t.minFilter===gi&&(t.minFilter=gt),new _a(1,10,this).update(e,l),t.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const S0=new E,b0=new ge;class Fa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _a(1,10,null),this._boxMesh=new Mt(new xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:o=S0}=r,l=this._renderer;this._setSize(a);const h=this._allocateTarget(),c=this._getSourceTarget(!0);t>0&&(c.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,m=l.autoClearColor,p=l.autoClearDepth,d=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(b0));const _=new _a(i,n,c);return _.position.copy(o),_.update(l,e),l.autoClear=u,l.autoClearColor=m,l.autoClearDepth=p,l.autoClearStencil=d,e.background=g,t>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(256,th(e))}_fromTexture(e,t){e.mapping===$i||e.mapping===Qi?this._setSize(e.image.length===0?256:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Am(e,!1,!1),i=Math.log2(e)-3;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Am(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===$i||e.mapping===Qi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES 256u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`),this._integrationMaterial=va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:16}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`));const t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/16);for(let a=0;a<=i;a++){const o=Fa.lodToRoughness(a,i);if(a>i-3)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(256*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES 20
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`));const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}}function Am(s,e,t){return new Sl(s,{minFilter:gi,generateMipmaps:e,type:oi,colorSpace:or,depthBuffer:t})}function va(s,e,t){return new Li({name:s,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Rm(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cm(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function T0(s){let e=new WeakMap,t=new WeakMap,i=null;function n(o,l){return l===qn?o.mapping=$i:l===Yn&&(o.mapping=Qi),o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(o){const l=o.target;l.removeEventListener("dispose",a);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const c=h.mapping,u=c===qn||c===Yn,m=c===$i||c===Qi;if(u||m){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Fa(s)),p=u?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const g=h.image;return u&&g&&g.height>0||m&&g&&(function(_){let f=0;for(let v=0;v<6;v++)_[v]!==void 0&&f++;return f===6})(g)?(i===null&&(i=new Fa(s)),p=u?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",a),p.texture):null}}}return h})(o):(function(h){if(h&&h.isTexture){const c=h.mapping;if(c===qn||c===Yn){if(e.has(h))return n(e.get(h).texture,h.mapping);{const u=h.image;if(u&&u.height>0){const m=new Sl(u.height);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",r),n(m.texture,h.mapping)}return null}}}return h})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function w0(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Ci("WebGLRenderer: "+i+" extension not supported."),n}}}function E0(s,e,t,i){const n={},r=new WeakMap,a=new FinalizationRegistry(c=>delete n[c]);function o(c){l(c.target)}function l(c){c.index!==null&&e.remove(c.index);for(const m in c.attributes)e.remove(c.attributes[m]);c.removeEventListener("dispose",o),delete n[c.id],a.unregister(c);const u=r.get(c);u&&(e.remove(u),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function h(c){const u=c.index,m=c.attributes.position;let p=0;if(m===void 0)return;const d=u!==null?u.array.length:m.array.length/3-1,g=new(m.count>=65535?po:uo)(6*Math.ceil(d/3),1),_=g.array;if(u!==null){const v=u.array;p=u.version;for(let y=0,b=0;y<d;y+=3){const S=v[y+0],w=v[y+1],A=v[y+2];_[b++]=S,_[b++]=w,_[b++]=w,_[b++]=A,_[b++]=A,_[b++]=S}}else{p=m.version;for(let v=0,y=0;v<d;v+=3){const b=v+0,S=v+1,w=v+2;_[y++]=b,_[y++]=S,_[y++]=S,_[y++]=w,_[y++]=w,_[y++]=b}}g.version=p;const f=r.get(c);f&&e.remove(f),r.set(c,g)}return{get:function(c,u){return n[u.id]!==void 0||(u.addEventListener("dispose",o),n[u.id]=new WeakRef(u),a.register(u,u.id,u),t.memory.geometries++),u},update:function(c){const u=c.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER)},getWireframeAttribute:function(c){const u=r.get(c);if(u){const m=c.index;m!==null&&u.version<m.version&&h(c)}else h(c);return r.get(c)},dispose:function(){for(const c in n){const u=n[c].deref();u!==void 0&&l(u)}}}}function A0(s,e,t){let i,n,r;this.setMode=function(a){i=a},this.setIndex=function(a){n=a.type,r=a.bytesPerElement},this.render=function(a,o){s.drawElements(i,o,n,a*r),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(s.drawElementsInstanced(i,o,n,a*r,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,n,a,0,l);let h=0;for(let c=0;c<l;c++)h+=o[c];t.update(h,i,1)}}function R0(s){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:we("WebGLInfo: Unknown draw mode:",i)}}}}function C0(s,e,t){const i=new WeakMap,n=new it;return{update:function(r,a,o){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==c){let L=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],f=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),p===!0&&(v=2),d===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*b*4*c),w=new Vs(S,y,b,c);w.type=Dt,w.needsUpdate=!0;const A=4*v;for(let R=0;R<c;R++){const N=g[R],z=_[R],B=f[R],V=y*b*4*R;for(let J=0;J<N.count;J++){const Y=J*A;m===!0&&(n.fromBufferAttribute(N,J),S[V+Y+0]=n.x,S[V+Y+1]=n.y,S[V+Y+2]=n.z,S[V+Y+3]=0),p===!0&&(n.fromBufferAttribute(z,J),S[V+Y+4]=n.x,S[V+Y+5]=n.y,S[V+Y+6]=n.z,S[V+Y+7]=0),d===!0&&(n.fromBufferAttribute(B,J),S[V+Y+8]=n.x,S[V+Y+9]=n.y,S[V+Y+10]=n.z,S[V+Y+11]=B.itemSize===4?n.w:1)}}u={count:c,texture:w,size:new ie(y,b)},i.set(a,u),a.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let m=0;for(let d=0;d<l.length;d++)m+=l[d];const p=a.morphTargetsRelative?1:1-m;o.getUniforms().setValue(s,"morphTargetBaseInfluence",p),o.getUniforms().setValue(s,"morphTargetInfluences",l)}o.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}}}function P0(s,e,t,i,n){let r=new WeakMap;function a(o){const l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){const l=n.render.frame,h=o.geometry,c=e.get(o,h);if(r.get(c)!==l&&(e.update(c),r.set(c,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(t.update(o.instanceMatrix,s.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,s.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){const u=o.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return c},dispose:function(){r=new WeakMap}}}const I0={[zl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Vl]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Xl]:"NEUTRAL_TONE_MAPPING",[Hl]:"CUSTOM_TONE_MAPPING"};function L0(s,e,t,i,n,r){const a=new Yt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,h=null;const c=new Be;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));const u=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Mt(c,u),p=new ga(-1,1,1,-1,0,1);let d,g=null,_=null,f=!1,v=null,y=[],b=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let A=0;A<y.length;A++){const L=y[A];L.setSize&&L.setSize(S,w)}},this.setEffects=function(S){y=S,b=y.length>0&&y[0].isRenderPass===!0;const w=a.width,A=a.height;y.length>0&&o===null&&(o=new Yt(w,A,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(w,A,{type:oi,depthBuffer:!1,stencilBuffer:!1}));const L=n===!0&&y.some(R=>R.needsDepthTexture===!0);L!==(a.depthTexture!==null)&&(L===!0&&h===null&&(h=new mn(w,A),r===!0&&(h.format=Ri,h.type=en)),a.dispose(),a.depthTexture=L?h:null,a.resolveDepthBuffer=L,a.storeMultisampledDepthBuffer=L);for(let R=0;R<y.length;R++){const N=y[R];N.setSize&&N.setSize(w,A),L&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(h)}},this.begin=function(S,w){if(f||S.toneMapping===0&&y.length===0)return!1;if(v=w,w!==null){const A=w.width,L=w.height;a.width===A&&a.height===L||this.setSize(A,L)}return b===!1&&S.setRenderTarget(a),d=S.toneMapping,S.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(S,w){S.toneMapping=d,f=!0;let A=a,L=o;for(let R=0;R<y.length;R++){const N=y[R];N.enabled!==!1&&(N.render(S,L,A,w),N.needsSwap!==!1&&(A=L,L=L===o?l:o))}if(g!==S.outputColorSpace||_!==S.toneMapping){g=S.outputColorSpace,_=S.toneMapping,u.defines={},He.getTransfer(g)===Qe&&(u.defines.SRGB_TRANSFER="");const R=I0[_];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(v),S.render(m,p),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Pm=new ct,Im=new mn(1,1),Lm=new Vo(1),Nm=new Vs,Dm=new ks,Um=new Ar,Om=[],Fm=[],Bm=new Float32Array(16),zm=new Float32Array(9),Gm=new Float32Array(4);function zr(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Om[n];if(r===void 0&&(r=new Float32Array(n),Om[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function bl(s,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function N0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function D0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function O0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function F0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Gm.set(i),s.uniformMatrix2fv(this.addr,!1,Gm),bt(t,i)}}function B0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;zm.set(i),s.uniformMatrix3fv(this.addr,!1,zm),bt(t,i)}}function z0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Bm.set(i),s.uniformMatrix4fv(this.addr,!1,Bm),bt(t,i)}}function G0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function V0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function H0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function W0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function X0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function j0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function q0(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function Tl(s){return s.version===0&&(s.compareFunction=eo,s.needsUpdate=!0),s}function Y0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();let r;i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),r=this.type===s.SAMPLER_2D_SHADOW?Tl(Im):Pm,t.setTexture2D(e||r,n)}function Z0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Dm,n)}function J0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();let r;i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),r=this.type===s.SAMPLER_CUBE_SHADOW?Tl(Lm):Um,t.setTextureCube(e||r,n)}function K0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Nm,n)}function $0(s,e){s.uniform1fv(this.addr,e)}function Q0(s,e){const t=zr(e,this.size,2);s.uniform2fv(this.addr,t)}function e_(s,e){const t=zr(e,this.size,3);s.uniform3fv(this.addr,t)}function t_(s,e){const t=zr(e,this.size,4);s.uniform4fv(this.addr,t)}function i_(s,e){const t=zr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function n_(s,e){const t=zr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r_(s,e){const t=zr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function s_(s,e){s.uniform1iv(this.addr,e)}function a_(s,e){s.uniform2iv(this.addr,e)}function o_(s,e){s.uniform3iv(this.addr,e)}function l_(s,e){s.uniform4iv(this.addr,e)}function h_(s,e){s.uniform1uiv(this.addr,e)}function c_(s,e){s.uniform2uiv(this.addr,e)}function u_(s,e){s.uniform3uiv(this.addr,e)}function d_(s,e){s.uniform4uiv(this.addr,e)}function p_(s,e,t){const i=this.cache,n=e.length,r=bl(t,n);let a;St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r)),a=this.type===s.SAMPLER_2D_SHADOW?Tl(Im):Pm;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function m_(s,e,t){const i=this.cache,n=e.length,r=bl(t,n);St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Dm,r[a])}function f_(s,e,t){const i=this.cache,n=e.length,r=bl(t,n);let a;St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r)),a=this.type===s.SAMPLER_CUBE_SHADOW?Tl(Lm):Um;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,r[o])}function g_(s,e,t){const i=this.cache,n=e.length,r=bl(t,n);St(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Nm,r[a])}class __{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return N0;case 35664:return D0;case 35665:return U0;case 35666:return O0;case 35674:return F0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return G0;case 35667:case 35671:return V0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return W0;case 36294:return X0;case 36295:return j0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}})(t.type)}}class v_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return $0;case 35664:return Q0;case 35665:return e_;case 35666:return t_;case 35674:return i_;case 35675:return n_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return c_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return g_}})(t.type)}}class y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function x_(s,e,t){const i=s.name,n=i.length;for(Bc.lastIndex=0;;){const r=Bc.exec(i),a=Bc.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){Vm(t,h===void 0?new __(o,s,e):new v_(o,s,e));break}{let c=t.map[o];c===void 0&&(c=new y_(o),Vm(t,c)),t=c}}}class wl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a);x_(o,e.getUniformLocation(t,o.name),this)}const n=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function km(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let M_=0;const Hm=new Oe;function Wm(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=(s.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){const h=o.split(`
`),c=[],u=Math.max(l-6,0),m=Math.min(l+6,h.length);for(let p=u;p<m;p++){const d=p+1;c.push(`${d===l?">":" "} ${d}: ${h[p]}`)}return c.join(`
`)})(s.getShaderSource(e),a)}return n}function S_(s,e){const t=(function(i){He._getMatrix(Hm,He.workingColorSpace,i);const n=`mat3( ${Hm.elements.map(r=>r.toFixed(4))} )`;switch(He.getTransfer(i)){case lr:return[n,"LinearTransferOETF"];case Qe:return[n,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const b_={[zl]:"Linear",[Gl]:"Reinhard",[Vl]:"Cineon",[kl]:"ACESFilmic",[Wl]:"AgX",[Xl]:"Neutral",[Hl]:"Custom"};function T_(s,e){const t=b_[e];return t===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const El=new E;function ya(s){return s!==""}function Xm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(s){return s.replace(w_,E_)}function E_(s,e){const t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zc(t)}const A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(A_,R_)}function R_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ym(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const C_={[ru]:"SHADOWMAP_TYPE_PCF",[su]:"SHADOWMAP_TYPE_VSM"},P_={[Qi]:"ENVMAP_MODE_REFRACTION"},I_={[Lu]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function L_(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=(function(N){return C_[N.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=(function(N){return N.envMap===!1?"ENVMAP_MODE_REFLECTION":P_[N.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(N){return N.envMap===!1?"ENVMAP_BLENDING_NONE":I_[N.combine]||"ENVMAP_BLENDING_NONE"})(t),m=(function(N){return[N.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",N.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)})(t),p=(function(N){const z=[];for(const B in N){const V=N[B];V!==!1&&z.push("#define "+B+" "+V)}return z.join(`
`)})(r),d=n.createProgram();let g,_,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ya).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ya).join(`
`),_.length>0&&(_+=`
`)):(g=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),_=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ge.tonemapping_pars_fragment:"",t.toneMapping!==0?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,S_("linearToOutputTexel",t.outputColorSpace),(He.getLuminanceCoefficients(El),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${El.x.toFixed(4)}, ${El.y.toFixed(4)}, ${El.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=zc(a),a=Xm(a,t),a=jm(a,t),o=zc(o),o=Xm(o,t),o=jm(o,t),a=qm(a),o=qm(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=f+g+a,y=f+_+o,b=km(n,n.VERTEX_SHADER,v),S=km(n,n.FRAGMENT_SHADER,y);function w(N){if(s.debug.checkShaderErrors){const z=n.getProgramInfoLog(d)||"",B=n.getShaderInfoLog(b)||"",V=n.getShaderInfoLog(S)||"",J=z.trim(),Y=B.trim(),k=V.trim();let D=!0,K=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,d,b,S);else{const ne=Wm(n,b,"vertex"),ve=Wm(n,S,"fragment");we("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+J+`
`+ne+`
`+ve)}else J!==""?oe("WebGLProgram: Program Info Log:",J):Y!==""&&k!==""||(K=!1);K&&(N.diagnostics={runnable:D,programLog:J,vertexShader:{log:Y,prefix:g},fragmentShader:{log:k,prefix:_}})}n.deleteShader(b),n.deleteShader(S),A=new wl(n,d),L=(function(z,B){const V={},J=z.getProgramParameter(B,z.ACTIVE_ATTRIBUTES);for(let Y=0;Y<J;Y++){const k=z.getActiveAttrib(B,Y),D=k.name;let K=1;k.type===z.FLOAT_MAT2&&(K=2),k.type===z.FLOAT_MAT3&&(K=3),k.type===z.FLOAT_MAT4&&(K=4),V[D]={type:k.type,location:z.getAttribLocation(B,D),locationSize:K}}return V})(n,d)}let A,L;n.attachShader(d,b),n.attachShader(d,S),t.index0AttributeName!==void 0?n.bindAttribLocation(d,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),this.getUniforms=function(){return A===void 0&&w(this),A},this.getAttributes=function(){return L===void 0&&w(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(d,37297)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=S,this}let N_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U_(e),t.set(e,i)),i}}class U_{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}}function O_(s,e,t,i,n,r){const a=new Hs,o=new D_,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(d){return l.add(d),d===0?"uv":`uv${d}`}return{getParameters:function(d,g,_,f,v,y){const b=f.fog,S=v.geometry,w=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?f.environment:null,A=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,L=e.get(d.envMap||w,A),R=m[d.type];let N=i.precision;d.precision!==null&&(N=i.getMaxPrecision(d.precision),N!==d.precision&&oe("WebGLProgram.getParameters:",d.precision,"not supported, using",N,"instead."));const z=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,B=z!==void 0?z.length:0;let V,J,Y,k,D=0;if(S.morphAttributes.position!==void 0&&(D=1),S.morphAttributes.normal!==void 0&&(D=2),S.morphAttributes.color!==void 0&&(D=3),R){const Ct=Ei[R];V=Ct.vertexShader,J=Ct.fragmentShader}else{V=d.vertexShader,J=d.fragmentShader;const Ct=o.getVertexShaderStage(d),U=o.getFragmentShaderStage(d);o.update(d,Ct,U),Y=Ct.id,k=U.id}const K=s.getRenderTarget(),ne=s.state.buffers.depth.getReversed(),ve=v.isInstancedMesh===!0,Ee=v.isBatchedMesh===!0,$=!!d.map,le=!!d.matcap,he=!!L,se=he&&L.isPMREMTexture===!0,Me=!!d.aoMap,ae=!!d.lightMap,Pe=!!d.bumpMap&&d.wireframe===!1,Ie=!!d.normalMap,Le=!!d.displacementMap,te=!!d.emissiveMap,re=!!d.metalnessMap,P=!!d.roughnessMap,Z=d.anisotropy>0,M=d.clearcoat>0,x=d.diffuseRoughness>0,C=d.dispersion>0,G=d.retroreflectivity>0,O=d.iridescence>0,j=d.sheen>0,ee=d.transmission>0,I=Z&&!!d.anisotropyMap,W=M&&!!d.clearcoatMap,fe=M&&!!d.clearcoatNormalMap,q=M&&!!d.clearcoatRoughnessMap,Re=x&&!!d.diffuseRoughnessMap,pe=O&&!!d.iridescenceMap,Se=O&&!!d.iridescenceThicknessMap,Xe=j&&!!d.sheenColorMap,et=j&&!!d.sheenRoughnessMap,Ke=!!d.specularMap,de=!!d.specularColorMap,Ae=!!d.specularIntensityMap,je=ee&&!!d.transmissionMap,ut=ee&&!!d.thicknessMap,nt=!!d.gradientMap,qe=!!d.alphaMap,vt=d.alphaTest>0,be=!!d.alphaHash,rt=!!d.extensions;let Ve=0;d.toneMapped&&(K!==null&&K.isXRRenderTarget!==!0||(Ve=s.toneMapping));const Lt=se?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,lt={shaderID:R,shaderType:d.type,shaderName:d.name,vertexShader:V,fragmentShader:J,defines:d.defines,customVertexShaderID:Y,customFragmentShaderID:k,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:N,batching:Ee,batchingColor:Ee&&v._colorsTexture!==null,instancing:ve,instancingColor:ve&&v.instanceColor!==null,instancingMorph:ve&&v.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:$,matcap:le,envMap:he,envMapMode:he&&L.mapping,envMapPMREM:se,envMapMaxLod:se?Lt.length-1:null,envMapSize:se?Lt[0].width:null,aoMap:Me,lightMap:ae,bumpMap:Pe,normalMap:Ie,displacementMap:Le,emissiveMap:te,normalMapObjectSpace:Ie&&d.normalMapType===1,normalMapTangentSpace:Ie&&d.normalMapType===0,packedNormalMap:Ie&&d.normalMapType===0&&(Tt=d.normalMap.format,Tt===Bi||Tt===nr||Tt===rr),metalnessMap:re,roughnessMap:P,anisotropy:Z,anisotropyMap:I,clearcoat:M,clearcoatMap:W,clearcoatNormalMap:fe,clearcoatRoughnessMap:q,diffuseRoughness:x,diffuseRoughnessMap:Re,dispersion:C,retroreflection:G,iridescence:O,iridescenceMap:pe,iridescenceThicknessMap:Se,sheen:j,sheenColorMap:Xe,sheenRoughnessMap:et,specularMap:Ke,specularColorMap:de,specularIntensityMap:Ae,transmission:ee,transmissionMap:je,thicknessMap:ut,gradientMap:nt,opaque:d.transparent===!1&&d.blending===1&&d.alphaToCoverage===!1,alphaMap:qe,alphaTest:vt,alphaHash:be,combine:d.combine,mapUv:$&&p(d.map.channel),aoMapUv:Me&&p(d.aoMap.channel),lightMapUv:ae&&p(d.lightMap.channel),bumpMapUv:Pe&&p(d.bumpMap.channel),normalMapUv:Ie&&p(d.normalMap.channel),displacementMapUv:Le&&p(d.displacementMap.channel),emissiveMapUv:te&&p(d.emissiveMap.channel),metalnessMapUv:re&&p(d.metalnessMap.channel),roughnessMapUv:P&&p(d.roughnessMap.channel),anisotropyMapUv:I&&p(d.anisotropyMap.channel),clearcoatMapUv:W&&p(d.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&p(d.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&p(d.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(d.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&p(d.sheenColorMap.channel),sheenRoughnessMapUv:et&&p(d.sheenRoughnessMap.channel),specularMapUv:Ke&&p(d.specularMap.channel),specularColorMapUv:de&&p(d.specularColorMap.channel),specularIntensityMapUv:Ae&&p(d.specularIntensityMap.channel),transmissionMapUv:je&&p(d.transmissionMap.channel),thicknessMapUv:ut&&p(d.thicknessMap.channel),alphaMapUv:qe&&p(d.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(Ie||Z),vertexNormals:!!S.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!S.attributes.uv&&($||qe),fog:!!b,useFog:d.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||S.attributes.normal===void 0&&Ie===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ne,skinning:v.isSkinnedMesh===!0,hasPositionAttribute:S.attributes.position!==void 0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:D,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:y.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:s.shadowMap.enabled&&_.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:$&&d.map.isVideoTexture===!0&&He.getTransfer(d.map.colorSpace)===Qe,decodeVideoTextureEmissive:te&&d.emissiveMap.isVideoTexture===!0&&He.getTransfer(d.emissiveMap.colorSpace)===Qe,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===2,flipSided:d.side===1,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:rt&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&d.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};var Tt;return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt},getProgramCacheKey:function(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const _ in d.defines)g.push(_),g.push(d.defines[_]);return d.isRawShaderMaterial===!1&&((function(_,f){_.push(f.precision),_.push(f.outputColorSpace),_.push(f.envMapMode),_.push(f.envMapPMREM),_.push(f.envMapMaxLod),_.push(f.envMapSize),_.push(f.mapUv),_.push(f.alphaMapUv),_.push(f.lightMapUv),_.push(f.aoMapUv),_.push(f.bumpMapUv),_.push(f.normalMapUv),_.push(f.displacementMapUv),_.push(f.emissiveMapUv),_.push(f.metalnessMapUv),_.push(f.roughnessMapUv),_.push(f.anisotropyMapUv),_.push(f.clearcoatMapUv),_.push(f.clearcoatNormalMapUv),_.push(f.clearcoatRoughnessMapUv),_.push(f.diffuseRoughnessMapUv),_.push(f.iridescenceMapUv),_.push(f.iridescenceThicknessMapUv),_.push(f.sheenColorMapUv),_.push(f.sheenRoughnessMapUv),_.push(f.specularMapUv),_.push(f.specularColorMapUv),_.push(f.specularIntensityMapUv),_.push(f.transmissionMapUv),_.push(f.thicknessMapUv),_.push(f.combine),_.push(f.fogExp2),_.push(f.sizeAttenuation),_.push(f.morphTargetsCount),_.push(f.numSunLights),_.push(f.numDirLights),_.push(f.numPointLights),_.push(f.numSpotLights),_.push(f.numSpotLightMaps),_.push(f.numHemiLights),_.push(f.numRectAreaLights),_.push(f.numSunLightShadows),_.push(f.numDirLightShadows),_.push(f.numPointLightShadows),_.push(f.numSpotLightShadows),_.push(f.numSpotLightShadowsWithMaps),_.push(f.numLightProbes),_.push(f.numLightProbeGrids),_.push(f.shadowMapType),_.push(f.toneMapping),_.push(f.numClippingPlanes),_.push(f.numClipIntersection),_.push(f.depthPacking)})(g,d),(function(_,f){a.disableAll(),f.instancing&&a.enable(0),f.instancingColor&&a.enable(1),f.instancingMorph&&a.enable(2),f.matcap&&a.enable(3),f.envMap&&a.enable(4),f.normalMapObjectSpace&&a.enable(5),f.normalMapTangentSpace&&a.enable(6),f.clearcoat&&a.enable(7),f.iridescence&&a.enable(8),f.alphaTest&&a.enable(9),f.vertexColors&&a.enable(10),f.vertexAlphas&&a.enable(11),f.vertexUv1s&&a.enable(12),f.vertexUv2s&&a.enable(13),f.vertexUv3s&&a.enable(14),f.vertexTangents&&a.enable(15),f.anisotropy&&a.enable(16),f.alphaHash&&a.enable(17),f.batching&&a.enable(18),f.dispersion&&a.enable(19),f.retroreflection&&a.enable(24),f.diffuseRoughness&&a.enable(25),f.batchingColor&&a.enable(20),f.gradientMap&&a.enable(21),f.packedNormalMap&&a.enable(22),f.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),f.fog&&a.enable(0),f.useFog&&a.enable(1),f.flatShading&&a.enable(2),f.logarithmicDepthBuffer&&a.enable(3),f.reversedDepthBuffer&&a.enable(4),f.skinning&&a.enable(5),f.morphTargets&&a.enable(6),f.morphNormals&&a.enable(7),f.morphColors&&a.enable(8),f.premultipliedAlpha&&a.enable(9),f.shadowMapEnabled&&a.enable(10),f.doubleSided&&a.enable(11),f.flipSided&&a.enable(12),f.useDepthPacking&&a.enable(13),f.dithering&&a.enable(14),f.transmission&&a.enable(15),f.sheen&&a.enable(16),f.opaque&&a.enable(17),f.pointsUvs&&a.enable(18),f.decodeVideoTexture&&a.enable(19),f.decodeVideoTextureEmissive&&a.enable(20),f.alphaToCoverage&&a.enable(21),f.numLightProbeGrids>0&&a.enable(22),f.hasPositionAttribute&&a.enable(23),_.push(a.mask)})(g,d),g.push(s.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()},getUniforms:function(d){const g=m[d.type];let _;if(g){const f=Ei[g];_=cp.clone(f.uniforms)}else _=d.uniforms;return _},acquireProgram:function(d,g){let _=c.get(g);return _!==void 0?++_.usedTimes:(_=new L_(s,g,d,n),h.push(_),c.set(g,_)),_},releaseProgram:function(d){if(--d.usedTimes===0){const g=h.indexOf(d);h[g]=h[h.length-1],h.pop(),c.delete(d.cacheKey),d.destroy()}},releaseShaderCache:function(d){o.remove(d)},programs:h,dispose:function(){o.dispose()}}}function F_(){let s=new WeakMap;return{has:function(e){return s.has(e)},get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function B_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],i=[],n=[];function r(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,h,c,u,m){let p=s[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:h,materialVariant:r(o),groupOrder:c,renderOrder:o.renderOrder,z:u,group:m},s[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=h,p.materialVariant=r(o),p.groupOrder=c,p.renderOrder=o.renderOrder,p.z=u,p.group=m),e++,p}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,l,h,c,u,m,p){p.reversedDepth===!0&&(u=-u);const d=a(o,l,h,c,u,m);h.transmission>0?i.push(d):h.transparent===!0?n.push(d):t.push(d)},unshift:function(o,l,h,c,u,m){const p=a(o,l,h,c,u,m);h.transmission>0?i.unshift(p):h.transparent===!0?n.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=s.length;o<l;o++){const h=s[o];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}},sort:function(o,l){t.length>1&&t.sort(o||B_),i.length>1&&i.sort(l||Zm),n.length>1&&n.sort(l||Zm)}}}function z_(){let s=new WeakMap;return{get:function(e,t){const i=s.get(e);let n;return i===void 0?(n=new Jm,s.set(e,[n])):t>=i.length?(n=new Jm,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function G_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new E,color:new ge};break;case"SpotLight":t={position:new E,direction:new E,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new E,halfWidth:new E,halfHeight:new E}}return s[e.id]=t,t}}}let V_=0;function k_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H_(s){const e=new G_,t=(function(){const o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"SunLight":case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=h,h}}})(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new E);const n=new E,r=new Ue,a=new Ue;return{setup:function(o){let l=0,h=0,c=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let u=0,m=0,p=0,d=0,g=0,_=0,f=0,v=0,y=0,b=0,S=0,w=0,A=0,L=0;o.sort(k_);for(let N=0,z=o.length;N<z;N++){const B=o[N],V=B.color,J=B.intensity,Y=B.distance;let k=null;if(B.shadow&&B.shadow.map&&(k=B.shadow.map.texture.format===Bi?B.shadow.map.texture:B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)l+=V.r*J,h+=V.g*J,c+=V.b*J;else if(B.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(B.sh.coefficients[D],J);L++}else if(B.isSunLight){const D=e.get(B);if(D.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,ne=t.get(B);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[m]=ne,i.sunShadowMap[m]=k;const ve=K.getViewportCount();for(let Ee=0;Ee<ve;Ee++)i.sunShadowMatrix[p+Ee]=K.getMatrix(Ee),i.sunShadowCascade[p+Ee]=K._cascadeData[Ee];p+=ve,m++}i.sun[u]=D,u++}else if(B.isDirectionalLight){const D=e.get(B);if(D.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,ne=t.get(B);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,i.directionalShadow[d]=ne,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=B.shadow.matrix,y++}i.directional[d]=D,d++}else if(B.isSpotLight){const D=e.get(B);D.position.setFromMatrixPosition(B.matrixWorld),D.color.copy(V).multiplyScalar(J),D.distance=Y,D.coneCos=Math.cos(B.angle),D.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),D.decay=B.decay,i.spot[_]=D;const K=B.shadow;if(B.map&&(i.spotLightMap[w]=B.map,w++,K.updateMatrices(B),B.castShadow&&A++),i.spotLightMatrix[_]=K.matrix,B.castShadow){const ne=t.get(B);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,i.spotShadow[_]=ne,i.spotShadowMap[_]=k,S++}_++}else if(B.isRectAreaLight){const D=e.get(B);D.color.copy(V).multiplyScalar(J),D.halfWidth.set(.5*B.width,0,0),D.halfHeight.set(0,.5*B.height,0),i.rectArea[f]=D,f++}else if(B.isPointLight){const D=e.get(B);if(D.color.copy(B.color).multiplyScalar(B.intensity),D.distance=B.distance,D.decay=B.decay,B.castShadow){const K=B.shadow,ne=t.get(B);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=B.shadow.matrix,b++}i.point[g]=D,g++}else if(B.isHemisphereLight){const D=e.get(B);D.skyColor.copy(B.color).multiplyScalar(J),D.groundColor.copy(B.groundColor).multiplyScalar(J),i.hemi[v]=D,v++}}f>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=c;const R=i.hash;R.sunLength===u&&R.directionalLength===d&&R.pointLength===g&&R.spotLength===_&&R.rectAreaLength===f&&R.hemiLength===v&&R.numSunShadows===m&&R.numDirectionalShadows===y&&R.numPointShadows===b&&R.numSpotShadows===S&&R.numSpotMaps===w&&R.numLightProbes===L||(i.sun.length=u,i.directional.length=d,i.spot.length=_,i.rectArea.length=f,i.point.length=g,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=p,i.sunShadowCascade.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.spotLightMatrix.length=S+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,R.sunLength=u,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=f,R.hemiLength=v,R.numSunShadows=m,R.numDirectionalShadows=y,R.numPointShadows=b,R.numSpotShadows=S,R.numSpotMaps=w,R.numLightProbes=L,i.version=V_++)},setupView:function(o,l){let h=0,c=0,u=0,m=0,p=0,d=0;const g=l.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){const v=o[_];if(v.isSunLight){const y=i.sun[h];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),h++}else if(v.isDirectionalLight){const y=i.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),c++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(.5*v.width,0,0),y.halfHeight.set(0,.5*v.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),d++}}},state:i}}function Km(s){const e=new H_(s),t=[],i=[],n=[],r={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){r.camera=a,t.length=0,i.length=0,n.length=0},state:r,setupLights:function(){e.setup(t),n.sort((a,o)=>a.priority-o.priority||a.id-o.id)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){a.isLightProbeGrid?n.push(a):t.push(a)},pushShadow:function(a){i.push(a)}}}function W_(s){let e=new WeakMap;return{get:function(t,i=0){const n=e.get(t);let r;return n===void 0?(r=new Km(s),e.set(t,[r])):i>=n.length?(r=new Km(s),n.push(r)):r=n[i],r},dispose:function(){e=new WeakMap}}}const X_=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],j_=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],$m=new Ue,xa=new E,Gc=new E;function q_(s,e,t){let i=new pn;const n=new ie,r=new ie,a=new it,o=new il,l=new nl,h={},c=t.maxTextureSize,u={[au]:1,[ou]:0,[lu]:2},m=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const d=new Be;d.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(d,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;function v(w,A){const L=e.update(g);m.defines.VSM_SAMPLES!==w.blurSamples&&(m.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Yt(n.x,n.y,{format:Bi,type:oi}):w.mapPass.width===w.map.width&&w.mapPass.height===w.map.height||w.mapPass.setSize(w.map.width,w.map.height),m.uniforms.shadow_pass.value=w.map.depthTexture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,L,m,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,L,p,g,null)}function y(w,A,L,R){let N=null;const z=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)N=z;else if(N=L.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=N.uuid,V=A.uuid;let J=h[B];J===void 0&&(J={},h[B]=J);let Y=J[V];Y===void 0&&(Y=N.clone(),J[V]=Y,A.addEventListener("dispose",S)),N=Y}return N.visible=A.visible,N.wireframe=A.wireframe,N.side=R===3?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,L.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(s.properties.get(N).light=L),N}function b(w,A,L,R,N,z){if(w.visible===!1)return;if(w.layers.test(N)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===3)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const V=e.update(w),J=w.material;if(Array.isArray(J)){const Y=V.groups;for(let k=0,D=Y.length;k<D;k++){const K=Y[k],ne=J[K.materialIndex];if(ne&&ne.visible){const ve=y(w,ne,R,z);w.onBeforeShadow(s,w,A,L,V,ve,K),s.renderBufferDirect(L,null,V,ve,w,K),w.onAfterShadow(s,w,A,L,V,ve,K)}}}else if(J.visible){const Y=y(w,J,R,z);w.onBeforeShadow(s,w,A,L,V,Y,null),s.renderBufferDirect(L,null,V,Y,w,null),w.onAfterShadow(s,w,A,L,V,Y,null)}}const B=w.children;for(let V=0,J=B.length;V<J;V++)b(B[V],A,L,R,N,z)}function S(w){w.target.removeEventListener("dispose",S);for(const A in h){const L=h[A],R=w.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}this.render=function(w,A,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===2&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const R=s.getRenderTarget(),N=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),B=s.state;B.setBlending(0),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=f!==this.type;V&&A.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Y=>Y.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Y=w.length;J<Y;J++){const k=w[J],D=k.shadow;if(D===void 0){oe("WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);const K=D.getFrameExtents();n.multiply(K),r.copy(D.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/K.x),n.x=r.x*K.x,D.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/K.y),n.y=r.y*K.y,D.mapSize.y=r.y));const ne=s.state.buffers.depth.getReversed();if(D.camera._reversedDepth=ne,D.map===null||V===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===3){if(k.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Yt(n.x,n.y,{format:Bi,type:oi,minFilter:gt,magFilter:gt,generateMipmaps:!1}),D.map.texture.name=k.name+".shadowMap",D.map.depthTexture=new mn(n.x,n.y,Dt),D.map.depthTexture.name=k.name+".shadowMapDepth",D.map.depthTexture.format=tn,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Nt,D.map.depthTexture.magFilter=Nt}else k.isPointLight?(D.map=new Sl(n.x),D.map.depthTexture=new Vo(n.x,_i)):(D.map=new Yt(n.x,n.y),D.map.depthTexture=new mn(n.x,n.y,_i)),D.map.depthTexture.name=k.name+".shadowMap",D.map.depthTexture.format=tn,this.type===1?(D.map.depthTexture.compareFunction=ne?Qa:$a,D.map.depthTexture.minFilter=gt,D.map.depthTexture.magFilter=gt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Nt,D.map.depthTexture.magFilter=Nt);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget===!0||D.map.width===n.x&&D.map.height===n.y||D.map.setSize(n.x,n.y);const ve=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();k.isPointLight!==!0&&D.updateMatrices(k,L);const Ee=4294967294&D.camera.layers.mask?D.camera.layers:L.layers;for(let $=0;$<ve;$++){const le=D.getCamera($);if(k.isPointLight){const he=D.camera,se=D.matrix,Me=k.distance||he.far;Me!==he.far&&(he.far=Me,he.updateProjectionMatrix()),xa.setFromMatrixPosition(k.matrixWorld),he.position.copy(xa),Gc.copy(he.position),Gc.add(X_[$]),he.up.copy(j_[$]),he.lookAt(Gc),he.updateMatrixWorld(),se.makeTranslation(-xa.x,-xa.y,-xa.z),$m.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),D._frustum.setFromProjectionMatrix($m,he.coordinateSystem,he.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)s.setRenderTarget(D.map,$),s.clear();else{$===0&&(s.setRenderTarget(D.map),s.clear());const he=D.getViewport($);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),B.viewport(a)}i=D.getFrustum($),b(A,L,le,k,Ee,this.type)}D.isPointLightShadow!==!0&&this.type===3&&v(D,L),D.needsUpdate=!1}f=this.type,_.needsUpdate=!1,s.setRenderTarget(R,N,z)}}function Y_(s,e){const t=new function(){let P=!1;const Z=new it;let M=null;const x=new it(0,0,0,0);return{setMask:function(C){M===C||P||(s.colorMask(C,C,C,C),M=C)},setLocked:function(C){P=C},setClear:function(C,G,O,j,ee){ee===!0&&(C*=j,G*=j,O*=j),Z.set(C,G,O,j),x.equals(Z)===!1&&(s.clearColor(C,G,O,j),x.copy(Z))},reset:function(){P=!1,M=null,x.set(-1,0,0,0)}}},i=new function(){let P=!1,Z=!1,M=null,x=null,C=null;return{setReversed:function(G){if(Z!==G){const O=e.get("EXT_clip_control");G?O.clipControlEXT(O.LOWER_LEFT_EXT,O.ZERO_TO_ONE_EXT):O.clipControlEXT(O.LOWER_LEFT_EXT,O.NEGATIVE_ONE_TO_ONE_EXT),Z=G;const j=C;C=null,this.setClear(j)}},getReversed:function(){return Z},setTest:function(G){G?se(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(G){M===G||P||(s.depthMask(G),M=G)},setFunc:function(G){if(Z&&(G=Zu[G]),x!==G){switch(G){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}x=G}},setLocked:function(G){P=G},setClear:function(G){C!==G&&(C=G,Z&&(G=1-G),s.clearDepth(G))},reset:function(){P=!1,M=null,x=null,C=null,Z=!1}}},n=new function(){let P=!1,Z=null,M=null,x=null,C=null,G=null,O=null,j=null,ee=null;return{setTest:function(I){P||(I?se(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(I){Z===I||P||(s.stencilMask(I),Z=I)},setFunc:function(I,W,fe){M===I&&x===W&&C===fe||(s.stencilFunc(I,W,fe),M=I,x=W,C=fe)},setOp:function(I,W,fe){G===I&&O===W&&j===fe||(s.stencilOp(I,W,fe),G=I,O=W,j=fe)},setLocked:function(I){P=I},setClear:function(I){ee!==I&&(s.clearStencil(I),ee=I)},reset:function(){P=!1,Z=null,M=null,x=null,C=null,G=null,O=null,j=null,ee=null}}};let r={};const a=new WeakMap;let o={},l={},h={},c=new WeakMap,u=[],m=null,p=!1,d=null,g=null,_=null,f=null,v=null,y=null,b=null,S=new ge(0,0,0),w=0,A=!1,L=null,R=null,N=null,z=null,B=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=Y>=2);let D=null,K={};const ne=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Ee=new it().fromArray(ne),$=new it().fromArray(ve);function le(P,Z,M,x){const C=new Uint8Array(4),G=s.createTexture();s.bindTexture(P,G),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let O=0;O<M;O++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,x,0,s.RGBA,s.UNSIGNED_BYTE,C):s.texImage2D(Z+O,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,C);return G}const he={};function se(P){o[P]!==!0&&(s.enable(P),o[P]=!0)}function Me(P){o[P]!==!1&&(s.disable(P),o[P]=!1)}he[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),he[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),he[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),se(s.DEPTH_TEST),i.setFunc(3),Le(!1),te(1),se(s.CULL_FACE),Ie(0);const ae={[Ki]:s.FUNC_ADD,[hu]:s.FUNC_SUBTRACT,[cu]:s.FUNC_REVERSE_SUBTRACT};ae[103]=s.MIN,ae[104]=s.MAX;const Pe={[uu]:s.ZERO,[du]:s.ONE,[pu]:s.SRC_COLOR,[Ga]:s.SRC_ALPHA,[yu]:s.SRC_ALPHA_SATURATE,[_u]:s.DST_COLOR,[fu]:s.DST_ALPHA,[mu]:s.ONE_MINUS_SRC_COLOR,[Va]:s.ONE_MINUS_SRC_ALPHA,[vu]:s.ONE_MINUS_DST_COLOR,[gu]:s.ONE_MINUS_DST_ALPHA,[xu]:s.CONSTANT_COLOR,[Mu]:s.ONE_MINUS_CONSTANT_COLOR,[Su]:s.CONSTANT_ALPHA,[bu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ie(P,Z,M,x,C,G,O,j,ee,I){if(P!==0){if(p===!1&&(se(s.BLEND),p=!0),P===5)C=C||Z,G=G||M,O=O||x,Z===g&&C===v||(s.blendEquationSeparate(ae[Z],ae[C]),g=Z,v=C),M===_&&x===f&&G===y&&O===b||(s.blendFuncSeparate(Pe[M],Pe[x],Pe[G],Pe[O]),_=M,f=x,y=G,b=O),j.equals(S)!==!1&&ee===w||(s.blendColor(j.r,j.g,j.b,ee),S.copy(j),w=ee),d=P,A=!1;else if(P!==d||I!==A){if(g===Ki&&v===Ki||(s.blendEquation(s.FUNC_ADD),g=Ki,v=Ki),I)switch(P){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:we("WebGLState: Invalid blending: ",P)}else switch(P){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case 3:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",P)}_=null,f=null,y=null,b=null,S.set(0,0,0),w=0,d=P,A=I}}else p===!0&&(Me(s.BLEND),p=!1)}function Le(P){L!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),L=P)}function te(P){P!==0?(se(s.CULL_FACE),P!==R&&(P===1?s.cullFace(s.BACK):P===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),R=P}function re(P,Z,M){P?(se(s.POLYGON_OFFSET_FILL),z===Z&&B===M||(z=Z,B=M,i.getReversed()&&(Z=-Z,M=-M),s.polygonOffset(Z,M))):Me(s.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:se,disable:Me,bindFramebuffer:function(P,Z){return h[P]!==Z&&(s.bindFramebuffer(P,Z),h[P]=Z,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Z),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Z),!0)},drawBuffers:function(P,Z){let M=u,x=!1;if(P){M=c.get(Z),M===void 0&&(M=[],c.set(Z,M));const C=P.textures;if(M.length!==C.length||M[0]!==s.COLOR_ATTACHMENT0){for(let G=0,O=C.length;G<O;G++)M[G]=s.COLOR_ATTACHMENT0+G;M.length=C.length,x=!0}}else M[0]!==s.BACK&&(M[0]=s.BACK,x=!0);x&&s.drawBuffers(M)},useProgram:function(P){return m!==P&&(s.useProgram(P),m=P,!0)},setBlending:Ie,setMaterial:function(P,Z){P.side===2?Me(s.CULL_FACE):se(s.CULL_FACE);let M=P.side===1;Z&&(M=!M),Le(M),P.blending===1&&P.transparent===!1?Ie(0):Ie(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),i.setFunc(P.depthFunc),i.setTest(P.depthTest),i.setMask(P.depthWrite),t.setMask(P.colorWrite);const x=P.stencilWrite;n.setTest(x),x&&(n.setMask(P.stencilWriteMask),n.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),n.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Le,setCullFace:te,setLineWidth:function(P){P!==N&&(J&&s.lineWidth(P),N=P)},setPolygonOffset:re,setScissorTest:function(P){P?se(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)},activeTexture:function(P){P===void 0&&(P=s.TEXTURE0+V-1),D!==P&&(s.activeTexture(P),D=P)},bindTexture:function(P,Z,M){M===void 0&&(M=D===null?s.TEXTURE0+V-1:D);let x=K[M];x===void 0&&(x={type:void 0,texture:void 0},K[M]=x),x.type===P&&x.texture===Z||(D!==M&&(s.activeTexture(M),D=M),s.bindTexture(P,Z||he[P]),x.type=P,x.texture=Z)},unbindTexture:function(){const P=K[D];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D(...arguments)}catch(P){we("WebGLState:",P)}},compressedTexImage3D:function(){try{s.compressedTexImage3D(...arguments)}catch(P){we("WebGLState:",P)}},texImage2D:function(){try{s.texImage2D(...arguments)}catch(P){we("WebGLState:",P)}},texImage3D:function(){try{s.texImage3D(...arguments)}catch(P){we("WebGLState:",P)}},pixelStorei:function(P,Z){l[P]!==Z&&(s.pixelStorei(P,Z),l[P]=Z)},getParameter:function(P){return l[P]!==void 0?l[P]:s.getParameter(P)},updateUBOMapping:function(P,Z){let M=a.get(Z);M===void 0&&(M=new WeakMap,a.set(Z,M));let x=M.get(P);x===void 0&&(x=s.getUniformBlockIndex(Z,P.name),s.uniformBlockBinding(Z,x,x),M.set(P,x))},uniformBlockBinding:function(P,Z,M){const x=a.get(Z).get(P);r[x]!==M&&(s.bindBufferBase(s.UNIFORM_BUFFER,x,M),r[x]=M)},texStorage2D:function(){try{s.texStorage2D(...arguments)}catch(P){we("WebGLState:",P)}},texStorage3D:function(){try{s.texStorage3D(...arguments)}catch(P){we("WebGLState:",P)}},texSubImage2D:function(){try{s.texSubImage2D(...arguments)}catch(P){we("WebGLState:",P)}},texSubImage3D:function(){try{s.texSubImage3D(...arguments)}catch(P){we("WebGLState:",P)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D(...arguments)}catch(P){we("WebGLState:",P)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D(...arguments)}catch(P){we("WebGLState:",P)}},scissor:function(P){Ee.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Ee.copy(P))},viewport:function(P){$.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),$.copy(P))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),i.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),o={},l={},D=null,K={},h={},r={},c=new WeakMap,u=[],m=null,p=!1,d=null,g=null,_=null,f=null,v=null,y=null,b=null,S=new ge(0,0,0),w=0,A=!1,L=null,R=null,N=null,z=null,B=null,Ee.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),t.reset(),i.reset(),n.reset()}}}function Z_(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new ie,c=new WeakMap,u=new Set;let m;const p=new WeakMap,d=new Set,g=new FinalizationRegistry(M=>d.delete(M));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(M,x){return _?new OffscreenCanvas(M,x):zs("canvas")}function v(M,x,C){let G=1;const O=Z(M);if((O.width>C||O.height>C)&&(G=C/Math.max(O.width,O.height)),G<1){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const j=Math.floor(G*O.width),ee=Math.floor(G*O.height);m===void 0&&(m=f(j,ee));const I=x?f(j,ee):m;return I.width=j,I.height=ee,I.getContext("2d").drawImage(M,0,0,j,ee),oe("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+j+"x"+ee+")."),I}return"data"in M&&oe("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),M}return M}function y(M){return M.generateMipmaps}function b(M){s.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?s.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(M,x,C,G,O,j=!1){if(M!==null){if(s[M]!==void 0)return s[M];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee;G&&(ee=e.get("EXT_texture_norm16"),ee||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=x;if(x===s.RED&&(C===s.FLOAT&&(I=s.R32F),C===s.HALF_FLOAT&&(I=s.R16F),C===s.UNSIGNED_BYTE&&(I=s.R8),C===s.UNSIGNED_SHORT&&ee&&(I=ee.R16_EXT),C===s.SHORT&&ee&&(I=ee.R16_SNORM_EXT)),x===s.RED_INTEGER&&(C===s.UNSIGNED_BYTE&&(I=s.R8UI),C===s.UNSIGNED_SHORT&&(I=s.R16UI),C===s.UNSIGNED_INT&&(I=s.R32UI),C===s.BYTE&&(I=s.R8I),C===s.SHORT&&(I=s.R16I),C===s.INT&&(I=s.R32I)),x===s.RG&&(C===s.FLOAT&&(I=s.RG32F),C===s.HALF_FLOAT&&(I=s.RG16F),C===s.UNSIGNED_BYTE&&(I=s.RG8),C===s.UNSIGNED_SHORT&&ee&&(I=ee.RG16_EXT),C===s.SHORT&&ee&&(I=ee.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(C===s.UNSIGNED_BYTE&&(I=s.RG8UI),C===s.UNSIGNED_SHORT&&(I=s.RG16UI),C===s.UNSIGNED_INT&&(I=s.RG32UI),C===s.BYTE&&(I=s.RG8I),C===s.SHORT&&(I=s.RG16I),C===s.INT&&(I=s.RG32I)),x===s.RGB_INTEGER&&(C===s.UNSIGNED_BYTE&&(I=s.RGB8UI),C===s.UNSIGNED_SHORT&&(I=s.RGB16UI),C===s.UNSIGNED_INT&&(I=s.RGB32UI),C===s.BYTE&&(I=s.RGB8I),C===s.SHORT&&(I=s.RGB16I),C===s.INT&&(I=s.RGB32I)),x===s.RGBA_INTEGER&&(C===s.UNSIGNED_BYTE&&(I=s.RGBA8UI),C===s.UNSIGNED_SHORT&&(I=s.RGBA16UI),C===s.UNSIGNED_INT&&(I=s.RGBA32UI),C===s.BYTE&&(I=s.RGBA8I),C===s.SHORT&&(I=s.RGBA16I),C===s.INT&&(I=s.RGBA32I)),x===s.RGB&&(C===s.UNSIGNED_SHORT&&ee&&(I=ee.RGB16_EXT),C===s.SHORT&&ee&&(I=ee.RGB16_SNORM_EXT),C===s.UNSIGNED_INT_5_9_9_9_REV&&(I=s.RGB9_E5),C===s.UNSIGNED_INT_10F_11F_11F_REV&&(I=s.R11F_G11F_B10F)),x===s.RGBA){const W=j?lr:He.getTransfer(O);C===s.FLOAT&&(I=s.RGBA32F),C===s.HALF_FLOAT&&(I=s.RGBA16F),C===s.UNSIGNED_BYTE&&(I=W===Qe?s.SRGB8_ALPHA8:s.RGBA8),C===s.UNSIGNED_SHORT&&ee&&(I=ee.RGBA16_EXT),C===s.SHORT&&ee&&(I=ee.RGBA16_SNORM_EXT),C===s.UNSIGNED_SHORT_4_4_4_4&&(I=s.RGBA4),C===s.UNSIGNED_SHORT_5_5_5_1&&(I=s.RGB5_A1)}return I!==s.R16F&&I!==s.R32F&&I!==s.RG16F&&I!==s.RG32F&&I!==s.RGBA16F&&I!==s.RGBA32F||e.get("EXT_color_buffer_float"),I}function A(M,x){let C;return M?x===null||x===_i||x===en?C=s.DEPTH24_STENCIL8:x===Dt?C=s.DEPTH32F_STENCIL8:x===Tn&&(C=s.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_i||x===en?C=s.DEPTH_COMPONENT24:x===Dt?C=s.DEPTH_COMPONENT32F:x===Tn&&(C=s.DEPTH_COMPONENT16),C}function L(M,x){return y(M)===!0||M.isFramebufferTexture&&M.minFilter!==Nt&&M.minFilter!==gt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){const x=new WeakRef(M);i.get(M).__ref=x,d.add(x),g.register(M,x,x)}function N(M){const x=i.get(M).__ref;x!==void 0&&(d.delete(x),g.unregister(x))}function z(M){V(M.target)}function B(M){J(M.target)}function V(M){M.removeEventListener("dispose",z),N(M),(function(x){const C=i.get(x);if(C.__webglInit===void 0)return;const G=x.source,O=p.get(G);if(O){const j=O[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&Y(x),Object.keys(O).length===0&&p.delete(G)}i.remove(x)})(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&u.delete(M)}function J(M){M.removeEventListener("dispose",B),N(M),(function(x){const C=i.get(x);C.__depthDisposeCallback&&C.__depthDisposeCallback();const G=x.depthTexture;if(G&&G.renderTarget===x&&V(G),x.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(C.__webglFramebuffer[j]))for(let ee=0;ee<C.__webglFramebuffer[j].length;ee++)s.deleteFramebuffer(C.__webglFramebuffer[j][ee]);else s.deleteFramebuffer(C.__webglFramebuffer[j]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[j])}else{if(Array.isArray(C.__webglFramebuffer))for(let j=0;j<C.__webglFramebuffer.length;j++)s.deleteFramebuffer(C.__webglFramebuffer[j]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let j=0;j<C.__webglColorRenderbuffer.length;j++)C.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[j]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const O=x.textures;for(let j=0,ee=O.length;j<ee;j++){const I=i.get(O[j]);I.__webglTexture&&(s.deleteTexture(I.__webglTexture),a.memory.textures--),i.remove(O[j])}i.remove(x)})(M)}function Y(M){const x=i.get(M);s.deleteTexture(x.__webglTexture);const C=M.source;delete p.get(C)[x.__cacheKey],a.memory.textures--}let k=0;function D(M,x){const C=i.get(M);if(M.isVideoTexture&&(function(G){const O=a.render.frame;c.get(G)!==O&&(c.set(G,O),G.update())})(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&C.__version!==M.version){const G=M.image;if(G===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else{if(G.complete!==!1)return void se(C,M,x);oe("WebGLRenderer: Texture marked for update but image is incomplete")}}else M.isExternalTexture&&(C.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,C.__webglTexture,s.TEXTURE0+x)}function K(M,x){const C=i.get(M);M.version>0&&C.__version!==M.version?(function(G,O,j){if(O.image.length!==6)return;const ee=le(G,O),I=O.source;t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+j);const W=i.get(I);if(I.version!==W.__version||ee===!0){t.activeTexture(s.TEXTURE0+j);const fe=He.getPrimaries(He.workingColorSpace),q=O.colorSpace===sn?null:He.getPrimaries(O.colorSpace),Re=O.colorSpace===sn||fe===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,O.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,O.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const pe=O.isCompressedTexture||O.image[0].isCompressedTexture,Se=O.image[0]&&O.image[0].isDataTexture,Xe=[];for(let be=0;be<6;be++)Xe[be]=pe||Se?Se?O.image[be].image:O.image[be]:v(O.image[be],!0,n.maxCubemapSize),Xe[be]=P(O,Xe[be]);const et=Xe[0],Ke=r.convert(O.format,O.colorSpace),de=r.convert(O.type);let Ae=w(O.internalFormat,Ke,de,O.normalized,O.colorSpace);const je=O.isVideoTexture!==!0,ut=W.__version===void 0||ee===!0,nt=I.dataReady;let qe,vt=L(O,et);if($(s.TEXTURE_CUBE_MAP,O),O.isDepthTexture){if(Ae=A(O.format===Ri,O.type),ut)if(je)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ae,et.width,et.height);else for(let be=0;be<6;be++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ae,et.width,et.height,0,Ke,de,null)}else if(pe){je&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Ae,et.width,et.height);for(let be=0;be<6;be++){qe=Xe[be].mipmaps;for(let rt=0;rt<qe.length;rt++){const Ve=qe[rt];O.format!==qt?Ke!==null?je?nt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,Ve.width,Ve.height,Ke,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,Ae,Ve.width,Ve.height,0,Ve.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,0,0,Ve.width,Ve.height,Ke,de,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt,Ae,Ve.width,Ve.height,0,Ke,de,Ve.data)}}}else{if(qe=O.mipmaps,je&&ut){qe.length>0&&vt++;const be=Z(Xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Ae,be.width,be.height)}for(let be=0;be<6;be++)if(Se){je?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Xe[be].width,Xe[be].height,Ke,de,Xe[be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ae,Xe[be].width,Xe[be].height,0,Ke,de,Xe[be].data);for(let rt=0;rt<qe.length;rt++){const Ve=qe[rt].image[be].image;je?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,Ve.width,Ve.height,Ke,de,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,Ae,Ve.width,Ve.height,0,Ke,de,Ve.data)}}else{je?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ke,de,Xe[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ae,Ke,de,Xe[be]);for(let rt=0;rt<qe.length;rt++){const Ve=qe[rt];je?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,0,0,Ke,de,Ve.image[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,rt+1,Ae,Ke,de,Ve.image[be])}}}y(O)&&O.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),W.__version=I.version,O.onUpdate&&O.onUpdate(O)}G.__version=O.version})(C,M,x):t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+x)}const ne={[Zn]:s.REPEAT,[$t]:s.CLAMP_TO_EDGE,[Jn]:s.MIRRORED_REPEAT},ve={[Nt]:s.NEAREST,[Ha]:s.NEAREST_MIPMAP_NEAREST,[bn]:s.NEAREST_MIPMAP_LINEAR,[gt]:s.LINEAR,[Kn]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},Ee={[Uu]:s.NEVER,[eo]:s.ALWAYS,[Ou]:s.LESS,[$a]:s.LEQUAL,[Fu]:s.EQUAL,[Qa]:s.GEQUAL,[Bu]:s.GREATER,[zu]:s.NOTEQUAL};function $(M,x){if(x.type!==Dt||e.has("OES_texture_float_linear")!==!1||x.magFilter!==gt&&x.magFilter!==Kn&&x.magFilter!==bn&&x.magFilter!==gi&&x.minFilter!==gt&&x.minFilter!==Kn&&x.minFilter!==bn&&x.minFilter!==gi||oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(M,s.TEXTURE_WRAP_S,ne[x.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,ne[x.wrapT]),M!==s.TEXTURE_3D&&M!==s.TEXTURE_2D_ARRAY||s.texParameteri(M,s.TEXTURE_WRAP_R,ne[x.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,ve[x.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==bn&&x.minFilter!==gi||x.type===Dt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");s.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function le(M,x){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",z),R(x));const G=x.source;let O=p.get(G);O===void 0&&(O={},p.set(G,O));const j=(function(ee){const I=[];return I.push(ee.wrapS),I.push(ee.wrapT),I.push(ee.wrapR||0),I.push(ee.magFilter),I.push(ee.minFilter),I.push(ee.anisotropy),I.push(ee.internalFormat),I.push(ee.format),I.push(ee.type),I.push(ee.generateMipmaps),I.push(ee.mipmapsAutoUpdate),I.push(ee.premultiplyAlpha),I.push(ee.flipY),I.push(ee.unpackAlignment),I.push(ee.colorSpace),I.join()})(x);if(j!==M.__cacheKey){O[j]===void 0&&(O[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,C=!0),O[j].usedTimes++;const ee=O[M.__cacheKey];ee!==void 0&&(O[M.__cacheKey].usedTimes--,ee.usedTimes===0&&Y(x)),M.__cacheKey=j,M.__webglTexture=O[j].texture}return C}function he(M,x,C){return Math.floor(Math.floor(M/C)/x)}function se(M,x,C){let G=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=s.TEXTURE_3D);const O=le(M,x),j=x.source;t.bindTexture(G,M.__webglTexture,s.TEXTURE0+C);const ee=i.get(j);if(j.version!==ee.__version||O===!0){if(t.activeTexture(s.TEXTURE0+C),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){const de=He.getPrimaries(He.workingColorSpace),Ae=x.colorSpace===sn?null:He.getPrimaries(x.colorSpace),je=x.colorSpace===sn||de===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let I=v(x.image,!1,n.maxTextureSize);I=P(x,I);const W=r.convert(x.format,x.colorSpace),fe=r.convert(x.type);let q,Re=w(x.internalFormat,W,fe,x.normalized,x.colorSpace,x.isVideoTexture);$(G,x);const pe=x.mipmaps,Se=x.isVideoTexture!==!0,Xe=ee.__version===void 0||O===!0,et=j.dataReady,Ke=L(x,I);if(x.isDepthTexture)Re=A(x.format===Ri,x.type),Xe&&(Se?t.texStorage2D(s.TEXTURE_2D,1,Re,I.width,I.height):t.texImage2D(s.TEXTURE_2D,0,Re,I.width,I.height,0,W,fe,null));else if(x.isDataTexture)if(pe.length>0){Se&&Xe&&t.texStorage2D(s.TEXTURE_2D,Ke,Re,pe[0].width,pe[0].height);for(let de=0,Ae=pe.length;de<Ae;de++)q=pe[de],Se?et&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,q.width,q.height,W,fe,q.data):t.texImage2D(s.TEXTURE_2D,de,Re,q.width,q.height,0,W,fe,q.data);x.generateMipmaps=!1}else Se?(Xe&&t.texStorage2D(s.TEXTURE_2D,Ke,Re,I.width,I.height),et&&(function(de,Ae,je,ut){const nt=de.updateRanges;if(nt.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,je,ut,Ae.data);else{nt.sort((Ve,Lt)=>Ve.start-Lt.start);let qe=0;for(let Ve=1;Ve<nt.length;Ve++){const Lt=nt[qe],lt=nt[Ve],Tt=Lt.start+Lt.count,Ct=he(lt.start,Ae.width,4),U=he(Lt.start,Ae.width,4);lt.start<=Tt+1&&Ct===U&&he(lt.start+lt.count-1,Ae.width,4)===Ct?Lt.count=Math.max(Lt.count,lt.start+lt.count-Lt.start):(++qe,nt[qe]=lt)}nt.length=qe+1;const vt=t.getParameter(s.UNPACK_ROW_LENGTH),be=t.getParameter(s.UNPACK_SKIP_PIXELS),rt=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,Ae.width);for(let Ve=0,Lt=nt.length;Ve<Lt;Ve++){const lt=nt[Ve],Tt=Math.floor(lt.start/4),Ct=Math.ceil(lt.count/4),U=Tt%Ae.width,Xr=Math.floor(Tt/Ae.width),Ba=Ct;t.pixelStorei(s.UNPACK_SKIP_PIXELS,U),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xr),t.texSubImage2D(s.TEXTURE_2D,0,U,Xr,Ba,1,je,ut,Ae.data)}de.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,vt),t.pixelStorei(s.UNPACK_SKIP_PIXELS,be),t.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}})(x,I,W,fe)):t.texImage2D(s.TEXTURE_2D,0,Re,I.width,I.height,0,W,fe,I.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Se&&Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,Re,pe[0].width,pe[0].height,I.depth);for(let de=0,Ae=pe.length;de<Ae;de++)if(q=pe[de],x.format!==qt)if(W!==null)if(Se){if(et)if(x.layerUpdates.size>0){const je=xl(q.width,q.height,x.format,x.type);for(const ut of x.layerUpdates){const nt=q.data.subarray(ut*je/q.data.BYTES_PER_ELEMENT,(ut+1)*je/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,ut,q.width,q.height,1,W,nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,q.width,q.height,I.depth,W,q.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Re,q.width,q.height,I.depth,0,q.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?et&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,q.width,q.height,I.depth,W,fe,q.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Re,q.width,q.height,I.depth,0,W,fe,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Se&&Xe&&t.texStorage2D(s.TEXTURE_2D,Ke,Re,pe[0].width,pe[0].height);for(let de=0,Ae=pe.length;de<Ae;de++)q=pe[de],x.format!==qt?W!==null?Se?et&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,q.width,q.height,W,q.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Re,q.width,q.height,0,q.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?et&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,q.width,q.height,W,fe,q.data):t.texImage2D(s.TEXTURE_2D,de,Re,q.width,q.height,0,W,fe,q.data)}else if(x.isDataArrayTexture)if(Se){if(Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,Re,I.width,I.height,I.depth),et)if(x.layerUpdates.size>0){const de=xl(I.width,I.height,x.format,x.type);for(const Ae of x.layerUpdates){const je=I.data.subarray(Ae*de/I.data.BYTES_PER_ELEMENT,(Ae+1)*de/I.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,I.width,I.height,1,W,fe,je)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,W,fe,I.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,I.width,I.height,I.depth,0,W,fe,I.data);else if(x.isData3DTexture)Se?(Xe&&t.texStorage3D(s.TEXTURE_3D,Ke,Re,I.width,I.height,I.depth),et&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,W,fe,I.data)):t.texImage3D(s.TEXTURE_3D,0,Re,I.width,I.height,I.depth,0,W,fe,I.data);else if(x.isFramebufferTexture){if(Xe)if(Se)t.texStorage2D(s.TEXTURE_2D,Ke,Re,I.width,I.height);else{let de=I.width,Ae=I.height;for(let je=0;je<Ke;je++)t.texImage2D(s.TEXTURE_2D,je,Re,de,Ae,0,W,fe,null),de>>=1,Ae>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),I.parentNode!==de)return de.appendChild(I),u.add(x),de.onpaint=Ae=>{const je=Ae.changedElements;for(const ut of u)je.includes(ut.image)&&(ut.needsUpdate=!0)},void de.requestPaint();if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,I);else{const je=s.RGBA,ut=s.RGBA,nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,je,ut,nt,I)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pe.length>0){if(Se&&Xe){const de=Z(pe[0]);t.texStorage2D(s.TEXTURE_2D,Ke,Re,de.width,de.height)}for(let de=0,Ae=pe.length;de<Ae;de++)q=pe[de],Se?et&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,W,fe,q):t.texImage2D(s.TEXTURE_2D,de,Re,W,fe,q);x.generateMipmaps=!1}else if(Se){if(Xe){const de=Z(I);t.texStorage2D(s.TEXTURE_2D,Ke,Re,de.width,de.height)}et&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,W,fe,I)}else t.texImage2D(s.TEXTURE_2D,0,Re,W,fe,I);y(x)&&x.mipmapsAutoUpdate===!0&&b(G),ee.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Me(M,x,C,G,O,j){const ee=r.convert(C.format,C.colorSpace),I=r.convert(C.type),W=w(C.internalFormat,ee,I,C.normalized,C.colorSpace),fe=i.get(x),q=i.get(C);if(q.__renderTarget=x,!fe.__hasExternalTextures){const Re=Math.max(1,x.width>>j),pe=Math.max(1,x.height>>j);O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?t.texImage3D(O,j,W,Re,pe,x.depth,0,ee,I,null):t.texImage2D(O,j,W,Re,pe,0,ee,I,null)}t.bindFramebuffer(s.FRAMEBUFFER,M),re(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,O,q.__webglTexture,0,te(x)):(O===s.TEXTURE_2D||O>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,O,q.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(M,x,C){if(s.bindRenderbuffer(s.RENDERBUFFER,M),x.depthBuffer){const G=x.depthTexture,O=G&&G.isDepthTexture?G.type:null,j=A(x.stencilBuffer,O),ee=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;re(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te(x),j,x.width,x.height):C?s.renderbufferStorageMultisample(s.RENDERBUFFER,te(x),j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,M)}else{const G=x.textures;for(let O=0;O<G.length;O++){const j=G[O],ee=r.convert(j.format,j.colorSpace),I=r.convert(j.type),W=w(j.internalFormat,ee,I,j.normalized,j.colorSpace);re(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te(x),W,x.width,x.height):C?s.renderbufferStorageMultisample(s.RENDERBUFFER,te(x),W,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,W,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(M,x,C){const G=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,M),!x.depthTexture||!x.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const O=i.get(x.depthTexture);O.__renderTarget=x;const j=G?x.depthTexture.image[0]:x.depthTexture.image;O.__webglTexture&&j.width===x.width&&j.height===x.height||(j.width=x.width,j.height=x.height,x.depthTexture.needsUpdate=!0),G?K(x.depthTexture,0):D(x.depthTexture,0);const ee=O.__webglTexture,I=te(x),W=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+C:s.TEXTURE_2D,fe=x.depthTexture.format===Ri?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===tn)re(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,W,ee,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,fe,W,ee,0);else{if(x.depthTexture.format!==Ri)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");re(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,W,ee,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,fe,W,ee,0)}}function Ie(M){const x=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const O=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",O)};G.addEventListener("dispose",O),x.__depthDisposeCallback=O}x.__boundDepthTexture=G}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(C)for(let G=0;G<6;G++)Pe(x.__webglFramebuffer[G],M,G);else M.texture.mipmaps.length>0?Pe(x.__webglFramebuffer[0],M,0):Pe(x.__webglFramebuffer,M,0);else if(C){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=s.createRenderbuffer(),ae(x.__webglDepthbuffer[G],M,!1);else{const O=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,O,s.RENDERBUFFER,j)}}else if(M.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ae(x.__webglDepthbuffer,M,!1);else{const G=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,O)}t.bindFramebuffer(s.FRAMEBUFFER,null)}const Le=[];function te(M){return Math.min(n.maxSamples,M.samples)}function re(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(M,x){const C=M.colorSpace,G=M.format,O=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==or&&C!==sn&&(He.getTransfer(C)===Qe?G===qt&&O===Vt||oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",C)),x}function Z(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=function(){const M=k;return M>=n.maxTextures&&oe("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+n.maxTextures),k+=1,M},this.resetTextureUnits=function(){k=0},this.getTextureUnits=function(){return k},this.setTextureUnits=function(M){k=M},this.setTexture2D=D,this.setTexture2DArray=function(M,x){const C=i.get(M);M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version?se(C,M,x):(M.isExternalTexture&&(C.__webglTexture=M.sourceTexture?M.sourceTexture:null),t.bindTexture(s.TEXTURE_2D_ARRAY,C.__webglTexture,s.TEXTURE0+x))},this.setTexture3D=function(M,x){const C=i.get(M);M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version?se(C,M,x):t.bindTexture(s.TEXTURE_3D,C.__webglTexture,s.TEXTURE0+x)},this.setTextureCube=K,this.rebindTextures=function(M,x,C){const G=i.get(M);x!==void 0&&Me(G.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),C!==void 0&&Ie(M)},this.setupRenderTarget=function(M){const x=M.texture,C=i.get(M),G=i.get(x);M.addEventListener("dispose",B),R(M);const O=M.textures,j=M.isWebGLCubeRenderTarget===!0,ee=O.length>1;if(ee||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=x.version,a.memory.textures++),j){C.__webglFramebuffer=[];for(let I=0;I<6;I++)if(x.mipmaps.length>0){C.__webglFramebuffer[I]=[];for(let W=0;W<x.mipmaps.length;W++)C.__webglFramebuffer[I][W]=s.createFramebuffer()}else C.__webglFramebuffer[I]=s.createFramebuffer()}else{if(x.mipmaps.length>0){C.__webglFramebuffer=[];for(let I=0;I<x.mipmaps.length;I++)C.__webglFramebuffer[I]=s.createFramebuffer()}else C.__webglFramebuffer=s.createFramebuffer();if(ee)for(let I=0,W=O.length;I<W;I++){const fe=i.get(O[I]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}if(M.samples>0&&re(M)===!1){C.__webglMultisampledFramebuffer=s.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let I=0;I<O.length;I++){const W=O[I];C.__webglColorRenderbuffer[I]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,C.__webglColorRenderbuffer[I]);const fe=r.convert(W.format,W.colorSpace),q=r.convert(W.type),Re=w(W.internalFormat,fe,q,W.normalized,W.colorSpace,M.isXRRenderTarget===!0),pe=te(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,Re,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,C.__webglColorRenderbuffer[I])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),$(s.TEXTURE_CUBE_MAP,x);for(let I=0;I<6;I++)if(x.mipmaps.length>0)for(let W=0;W<x.mipmaps.length;W++)Me(C.__webglFramebuffer[I][W],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+I,W);else Me(C.__webglFramebuffer[I],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);y(x)?b(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ee){for(let I=0,W=O.length;I<W;I++){const fe=O[I],q=i.get(fe);let Re=s.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Re=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,q.__webglTexture),$(Re,fe),Me(C.__webglFramebuffer,M,fe,s.COLOR_ATTACHMENT0+I,Re,0),y(fe)&&b(Re)}t.unbindTexture()}else{let I=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(I=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(I,G.__webglTexture),$(I,x),x.mipmaps.length>0)for(let W=0;W<x.mipmaps.length;W++)Me(C.__webglFramebuffer[W],M,x,s.COLOR_ATTACHMENT0,I,W);else Me(C.__webglFramebuffer,M,x,s.COLOR_ATTACHMENT0,I,0);y(x)?b(I):x.mipmaps.length>0&&s.texParameteri(I,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}M.depthBuffer&&Ie(M)},this.updateRenderTargetMipmap=function(M){const x=M.textures;for(let C=0,G=x.length;C<G;C++){const O=x[C];if(y(O)&&O.mipmapsAutoUpdate===!0){const j=S(M),ee=i.get(O).__webglTexture;t.bindTexture(j,ee),b(j),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(M.samples>0){if(re(M)===!1){const x=M.textures,C=M.width,G=M.height;let O=s.COLOR_BUFFER_BIT;const j=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=i.get(M),I=x.length>1;if(I)for(let W=0;W<x.length;W++)t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let W=0;W<x.length;W++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(O|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(O|=s.STENCIL_BUFFER_BIT)),I){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ee.__webglColorRenderbuffer[W]);const fe=i.get(x[W]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,C,G,0,0,C,G,O,s.NEAREST),l===!0&&(Le.length=0,Le.push(s.COLOR_ATTACHMENT0+W),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&Le.push(j),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),I)for(let W=0;W<x.length;W++){t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,ee.__webglColorRenderbuffer[W]);const fe=i.get(x[W]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){const x=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}},this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=re,this.dispose=function(){for(const M of d){const x=M.deref();x!==void 0&&(x.isRenderTarget===!0?J(x):V(x))}d.clear(),u.clear()}}function Qm(s,e){return{convert:function(t,i=""){let n;const r=He.getTransfer(i);if(t===Vt)return s.UNSIGNED_BYTE;if(t===es)return s.UNSIGNED_SHORT_4_4_4_4;if(t===ts)return s.UNSIGNED_SHORT_5_5_5_1;if(t===ja)return s.UNSIGNED_INT_5_9_9_9_REV;if(t===qa)return s.UNSIGNED_INT_10F_11F_11F_REV;if(t===Wa)return s.BYTE;if(t===Xa)return s.SHORT;if(t===Tn)return s.UNSIGNED_SHORT;if(t===Qr)return s.INT;if(t===_i)return s.UNSIGNED_INT;if(t===Dt)return s.FLOAT;if(t===oi)return s.HALF_FLOAT;if(t===Ya)return s.ALPHA;if(t===Za)return s.RGB;if(t===qt)return s.RGBA;if(t===tn)return s.DEPTH_COMPONENT;if(t===Ri)return s.DEPTH_STENCIL;if(t===is)return s.RED;if(t===$n)return s.RED_INTEGER;if(t===Bi)return s.RG;if(t===ns)return s.RG_INTEGER;if(t===rs)return s.RGBA_INTEGER;if(t===Qn||t===er||t===tr||t===ir)if(r===Qe){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Qn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===er)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===tr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ir)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Qn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===er)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===tr)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ir)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===ss||t===as||t===os||t===ls){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===ss)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===as)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===os)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ls)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===hs||t===cs||t===us||t===ds||t===ps||t===nr||t===ms){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===hs||t===cs)return r===Qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===us)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===ds)return n.COMPRESSED_R11_EAC;if(t===ps)return n.COMPRESSED_SIGNED_R11_EAC;if(t===nr)return n.COMPRESSED_RG11_EAC;if(t===ms)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===fs||t===gs||t===_s||t===vs||t===ys||t===xs||t===Ms||t===Ss||t===bs||t===Ts||t===ws||t===Es||t===As||t===Rs){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===fs)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===gs)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===_s)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===vs)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ys)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===xs)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ms)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ss)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===bs)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Ts)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ws)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Es)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===As)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Rs)return r===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Cs||t===Ps||t===Is){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Cs)return r===Qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ps)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Is)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Ls||t===Ns||t===rr||t===Ds){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Ls)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Ns)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===rr)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ds)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===en?s.UNSIGNED_INT_24_8:s[t]!==void 0?s[t]:null}}}class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ko(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Li({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends li{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,m=null,p=null,d=null;const g=typeof XRWebGLBinding<"u",_=new J_,f={},v=t.getContextAttributes();let y=null,b=null;const S=[],w=[],A=new ie;let L=null,R=null;const N=new It;N.viewport=new it;const z=new It;z.viewport=new it;const B=[N,z],V=new wc;let J=null,Y=null;function k($){const le=w.indexOf($.inputSource);if(le===-1)return;const he=S[le];he!==void 0&&(he.update($.inputSource,$.frame,h||a),he.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",K);for(let $=0;$<S.length;$++){const le=w[$];le!==null&&(w[$]=null,S[$].disconnect(le))}J=null,Y=null,_.reset();for(const $ in f)delete f[$];if(e.setRenderTarget(y),p=null,m=null,u=null,n=null,b=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),R!==null){const $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}function K($){for(let le=0;le<$.removed.length;le++){const he=$.removed[le],se=w.indexOf(he);se>=0&&(w[se]=null,S[se].disconnect(he))}for(let le=0;le<$.added.length;le++){const he=$.added[le];let se=w.indexOf(he);if(se===-1){for(let ae=0;ae<S.length;ae++){if(ae>=w.length){w.push(he),se=ae;break}if(w[ae]===null){w[ae]=he,se=ae;break}}if(se===-1)break}const Me=S[se];Me&&Me.connect(he)}}function ne($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=S[$];return le===void 0&&(le=new Xs,S[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=S[$];return le===void 0&&(le=new Xs,S[$]=le),le.getGripSpace()},this.getHand=function($){let le=S[$];return le===void 0&&(le=new Xs,S[$]=le),le.getHandSpace()},this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",D),n.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,he=null,se=null;v.depth&&(se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?Ri:tn,he=v.stencil?en:_i);const Me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=this.getBinding(),m=u.createProjectionLayer(Me),n.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new Yt(m.textureWidth,m.textureHeight,{format:qt,type:Vt,depthTexture:new mn(m.textureWidth,m.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,le),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Yt(p.framebufferWidth,p.framebufferHeight,{format:qt,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),Ee.setContext(n),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()},this.updateCamera=function($){if(n===null)return;let le=$.near,he=$.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(he=_.depthFar)),V.near=z.near=N.near=le,V.far=z.far=N.far=he,J===V.near&&Y===V.far||(n.updateRenderState({depthNear:V.near,depthFar:V.far}),J=V.near,Y=V.far),V.layers.mask=6|$.layers.mask,N.layers.mask=-5&V.layers.mask,z.layers.mask=-3&V.layers.mask;const se=$.parent,Me=V.cameras;ne(V,se);for(let ae=0;ae<Me.length;ae++)ne(Me[ae],se);V.projectionMatrix.copy(N.projectionMatrix),V.projectionMatrixInverse.copy(N.projectionMatrixInverse),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),(function(ae,Pe,Ie){Ie===null?ae.matrix.copy(Pe.matrixWorld):(ae.matrix.copy(Ie.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Pe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=2*En*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)})($,V,se)},this.getCamera=function(){return V},this.getFoveation=function(){if(m!==null||p!==null)return l},this.setFoveation=function($){l=$,m!==null&&(m.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function($){return f[$]};let ve=null;const Ee=new wm;Ee.setAnimationLoop(function($,le){if(c=le.getViewerPose(h||a),d=le,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let se=!1;he.length!==V.cameras.length&&(V.cameras.length=0,se=!0);for(let ae=0;ae<he.length;ae++){const Pe=he[ae];let Ie=null;if(p!==null)Ie=p.getViewport(Pe);else{const te=u.getViewSubImage(m,Pe);Ie=te.viewport,ae===0&&(e.setRenderTargetTextures(b,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(b))}let Le=B[ae];Le===void 0&&(Le=new It,Le.layers.enable(ae),Le.viewport=new it,B[ae]=Le),Le.matrix.fromArray(Pe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Pe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ae===0&&(V.matrix.copy(Le.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),se===!0&&V.cameras.push(Le)}const Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();const ae=u.getDepthInformation(he[0]);ae&&ae.isValid&&ae.texture&&_.init(ae,n.renderState)}if(Me&&Me.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let ae=0;ae<he.length;ae++){const Pe=he[ae].camera;if(Pe){let Ie=f[Pe];Ie||(Ie=new ko,f[Pe]=Ie);const Le=u.getCameraImage(Pe);Ie.sourceTexture=Le}}}}for(let he=0;he<S.length;he++){const se=w[he],Me=S[he];se!==null&&Me!==void 0&&Me.update(se,le,h||a)}ve&&ve($,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),d=null}),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const $_=new Ue,ef=new Oe;function Q_(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===1&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===1&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);const a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,n.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&n.envMapRotation.value.premultiply(ef),n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap&&(n.lightMap.value=r.lightMap,n.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,n.lightMapTransform)),r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,hp(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isNodeMaterial?r.uniformsNeedUpdate=!1:r.isMeshBasicMaterial?i(n,r):r.isMeshLambertMaterial?(i(n,r),r.envMap&&(n.envMapIntensity.value=r.envMapIntensity)):r.isMeshToonMaterial?(i(n,r),(function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)})(n,r)):r.isMeshPhongMaterial?(i(n,r),(function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)})(n,r),r.envMap&&(n.envMapIntensity.value=r.envMapIntensity)):r.isMeshStandardMaterial?(i(n,r),(function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),c.envMap&&(h.envMapIntensity.value=c.envMapIntensity)})(n,r),r.isMeshPhysicalMaterial&&(function(h,c,u){h.ior.value=c.ior,c.diffuseRoughness>0&&(h.diffuseRoughness.value=c.diffuseRoughness,c.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=c.diffuseRoughnessMap,t(c.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===1&&h.clearcoatNormalScale.value.negate())),c.dispersion>0&&(h.dispersion.value=c.dispersion),c.retroreflectivity>0&&(h.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=c.iridescenceThicknessMaximum,c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))})(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),(function(h,c){c.matcap&&(h.matcap.value=c.matcap)})(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),(function(h,c){const u=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far})(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?((function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))})(n,r),r.isLineDashedMaterial&&(function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale})(n,r)):r.isPointsMaterial?(function(h,c,u,m){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*m,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)})(n,r,a,o):r.isSpriteMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)})(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function ev(s,e,t,i){let n={},r={};function a(u,m,p,d){if((function(g,_,f,v){const y=g.value,b=_+"_"+f;if(Array.isArray(y)){v[b]===void 0&&(v[b]=[]);const S=v[b];let w=!1;for(let A=0;A<y.length;A++)l(y[A],S,A)===!0&&(w=!0);return w}return l(y,v,b)})(u,m,p,d)===!0){const g=u.__offset,_=u.value;if(Array.isArray(_)){let f=0;for(let v=0;v<_.length;v++){const y=_[v],b=h(y,!0);o(y,u.__data,f),f+=b.storage/Float32Array.BYTES_PER_ELEMENT}}else o(_,u.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,g,u.__data)}}function o(u,m,p){typeof u=="number"||typeof u=="boolean"?m[p]=u:u.isMatrix3?(m[p]=u.elements[0],m[p+1]=u.elements[1],m[p+2]=u.elements[2],m[p+3]=0,m[p+4]=u.elements[3],m[p+5]=u.elements[4],m[p+6]=u.elements[5],m[p+7]=0,m[p+8]=u.elements[6],m[p+9]=u.elements[7],m[p+10]=u.elements[8],m[p+11]=0):ArrayBuffer.isView(u)?m.set(u.subarray(0,m.length-p),p):u.toArray(m,p)}function l(u,m,p){if(m[p]===void 0)return typeof u=="number"||typeof u=="boolean"?m[p]=u:ArrayBuffer.isView(u)?m[p]=u.slice():m[p]=u.clone(),!0;{const d=m[p];if(typeof u=="number"||typeof u=="boolean"){if(d!==u)return m[p]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(d.equals(u)===!1)return d.copy(u),!0}}return!1}function h(u,m){const p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=16,p.storage=48):u.isMatrix4?(p.boundary=16,p.storage=64):u.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(p.boundary=16,p.storage=u.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",u),m===!0&&(p.boundary=16,p.storage=16*Math.ceil(p.storage/16)),p}function c(u){const m=u.target;m.removeEventListener("dispose",c),s.deleteBuffer(n[m.id]),delete n[m.id],delete r[m.id]}return{bind:function(u,m){const p=m.program;i.uniformBlockBinding(u,p,n[u.id])},update:function(u,m){let p=n[u.id];p===void 0&&((function(_){const f=_.uniforms;let v=0;for(let b=0,S=f.length;b<S;b++){const w=Array.isArray(f[b])?f[b]:[f[b]];for(let A=0,L=w.length;A<L;A++){const R=w[A],N=Array.isArray(R.value)?R.value:[R.value],z=Array.isArray(f[b])||Array.isArray(R.value);let B=v;for(let J=0,Y=N.length;J<Y;J++){const k=h(N[J],z),D=v%16,K=D%k.boundary,ne=D+K;v+=K,ne!==0&&16-ne<k.storage&&(v+=16-ne),J===0&&(B=v),v+=k.storage}const V=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new V((v-B)/Float32Array.BYTES_PER_ELEMENT),R.__offset=B}}const y=v%16;y>0&&(v+=16-y),_.__size=v,_.__cache={}})(u),p=(function(_){const f=s.createBuffer(),v=_.__size,y=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,f),s.bufferData(s.UNIFORM_BUFFER,v,y),s.bindBuffer(s.UNIFORM_BUFFER,null),f})(u),n[u.id]=p,u.addEventListener("dispose",c));const d=m.program;i.updateUBOMapping(u,d);const g=e.render.frame;r[u.id]!==g&&((function(_){const f=n[_.id],v=_.uniforms,y=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,f);for(let b=0,S=v.length;b<S;b++){const w=v[b];if(Array.isArray(w))for(let A=0,L=w.length;A<L;A++)a(w[A],b,A,y);else a(w,b,0,y)}s.bindBuffer(s.UNIFORM_BUFFER,null)})(u),r[u.id]=g)},dispose:function(){for(const u in n)s.deleteBuffer(n[u]);n={},r={}}}}ef.set(-1,0,0,0,1,0,0,0,1);const tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;const iv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:4,AddEquation:Ki,AddOperation:2,AdditiveAnimationBlendMode:Ka,AdditiveBlending:2,AgXToneMapping:6,AlphaFormat:Ya,AlwaysCompare:eo,AlwaysDepth:1,AlwaysStencilFunc:519,AmbientLight:vc,AnimationAction:Lc,AnimationClip:Nr,AnimationLoader:vp,AnimationMixer:Vp,AnimationObjectGroup:Gp,AnimationUtils:pp,ArcCurve:Vh,ArrayCamera:wc,ArrowHelper:xm,AttachedBindMode:ka,Audio:Rc,AudioAnalyser:zp,AudioContext:pl,AudioListener:Op,AudioLoader:Lp,AxesHelper:Mm,BackSide:1,BasicDepthPacking:Kl,BasicShadowMap:0,BatchedMesh:Nh,BezierInterpolant:cc,Bone:Co,BooleanKeyframeTrack:fn,Box2:Dc,Box3:Pt,Box3Helper:_m,BoxGeometry:xn,BoxHelper:gm,BufferAttribute:ot,BufferGeometry:Be,BufferGeometryLoader:Sc,ByteType:Wa,Cache:wi,Camera:fa,CameraHelper:fm,CanvasTexture:Yd,CapsuleGeometry:Ta,CatmullRomCurve3:jh,CineonToneMapping:3,CircleGeometry:wa,ClampToEdgeWrapping:$t,Clock:Zp,Color:ge,ColorKeyframeTrack:sl,ColorManagement:He,Compatibility:Hu,CompressedArrayTexture:jd,CompressedCubeTexture:qd,CompressedTexture:ra,CompressedTextureLoader:yp,ConeGeometry:kr,ConstantAlphaFactor:213,ConstantColorFactor:211,Controls:bm,CubeCamera:_a,CubeDepthTexture:Vo,CubeReflectionMapping:$i,CubeRefractionMapping:Qi,CubeTexture:Ar,CubeTextureLoader:xp,CubicBezierCurve:jo,CubicBezierCurve3:qh,CubicInterpolant:lc,CullFaceBack:1,CullFaceFront:2,CullFaceFrontBack:3,CullFaceNone:0,Curve:ci,CurvePath:Zh,CustomBlending:5,CustomToneMapping:5,CylinderGeometry:Vr,Cylindrical:Kp,Data3DTexture:ks,DataArrayTexture:Vs,DataTexture:ii,DataTextureLoader:Mp,DataUtils:pd,DecrementStencilOp:7683,DecrementWrapStencilOp:34056,DefaultLoadingManager:dc,DepthFormat:tn,DepthStencilFormat:Ri,DepthTexture:mn,DetachedBindMode:jl,DirectionalLight:_c,DirectionalLightHelper:mm,DiscreteInterpolant:hc,DodecahedronGeometry:Ea,DoubleSide:2,DstAlphaFactor:206,DstColorFactor:208,DynamicCopyUsage:35050,DynamicDrawUsage:35048,DynamicReadUsage:35049,EdgesGeometry:Gh,EllipseCurve:sa,EqualCompare:514,EqualDepth:4,EqualStencilFunc:514,EquirectangularReflectionMapping:qn,EquirectangularRefractionMapping:Yn,Euler:ui,EventDispatcher:li,ExternalTexture:ko,ExtrudeGeometry:Aa,FileLoader:Ni,Float16BufferAttribute:yd,Float32BufferAttribute:ye,FloatType:Dt,Fog:Sa,FogExp2:Ma,FramebufferTexture:Xd,FrontSide:0,Frustum:pn,FrustumArray:Gr,GLBufferAttribute:Xp,GLSL1:"100",GLSL3:to,GreaterCompare:516,GreaterDepth:6,GreaterEqualCompare:Qa,GreaterEqualDepth:5,GreaterEqualStencilFunc:518,GreaterStencilFunc:516,GridHelper:cm,Group:Rn,HTMLTexture:Zd,HalfFloatType:oi,HemisphereLight:pc,HemisphereLightHelper:hm,IcosahedronGeometry:Ra,ImageBitmapLoader:Ip,ImageLoader:Ur,ImageUtils:rh,IncrementStencilOp:7682,IncrementWrapStencilOp:34055,InstancedBufferAttribute:Nn,InstancedBufferGeometry:Mc,InstancedInterleavedBuffer:Wp,InstancedMesh:Ch,Int16BufferAttribute:_d,Int32BufferAttribute:vd,Int8BufferAttribute:md,IntType:Qr,InterleavedBuffer:Js,InterleavedBufferAttribute:yn,Interpolant:Fn,InterpolateBezier:Ja,InterpolateDiscrete:sr,InterpolateLinear:Us,InterpolateSmooth:Os,InterpolationSamplingMode:ku,InterpolationSamplingType:Vu,InvertStencilOp:5386,KeepStencilOp:Fs,KeyframeTrack:ni,LOD:bh,LatheGeometry:Ca,Layers:Hs,LessCompare:513,LessDepth:2,LessEqualCompare:$a,LessEqualDepth:3,LessEqualStencilFunc:515,LessStencilFunc:513,Light:Yi,LightProbe:xc,LightShadow:ma,Line:ji,Line3:tm,LineBasicMaterial:Gt,LineCurve:qo,LineCurve3:Yh,LineDashedMaterial:ac,LineLoop:Uh,LineSegments:bi,LinearFilter:gt,LinearInterpolant:rl,LinearMipMapLinearFilter:1008,LinearMipMapNearestFilter:1007,LinearMipmapLinearFilter:gi,LinearMipmapNearestFilter:Kn,LinearSRGBColorSpace:or,LinearToneMapping:1,LinearTransfer:lr,Loader:Xt,LoaderUtils:ul,LoadingManager:ol,LoopOnce:ql,LoopPingPong:Zl,LoopRepeat:Yl,MOUSE:iu,Material:Rt,MaterialBlending:6,MaterialLoader:Oa,MathUtils:Ku,Matrix2:$p,Matrix3:Oe,Matrix4:Ue,MaxEquation:104,Mesh:Mt,MeshBasicMaterial:dn,MeshDepthMaterial:il,MeshDistanceMaterial:nl,MeshLambertMaterial:rc,MeshMatcapMaterial:sc,MeshNormalMaterial:nc,MeshPhongMaterial:tc,MeshPhysicalMaterial:ec,MeshStandardMaterial:tl,MeshToonMaterial:ic,MinEquation:103,MirroredRepeatWrapping:Jn,MixOperation:1,MultiplyBlending:4,MultiplyOperation:0,NearestFilter:Nt,NearestMipMapLinearFilter:1005,NearestMipMapNearestFilter:1004,NearestMipmapLinearFilter:bn,NearestMipmapNearestFilter:Ha,NeutralToneMapping:7,NeverCompare:512,NeverDepth:0,NeverStencilFunc:512,NoBlending:0,NoColorSpace:sn,NoNormalPacking:"",NoToneMapping:0,NormalAnimationBlendMode:Jl,NormalBlending:1,NormalGAPacking:"ga",NormalRGPacking:"rg",NotEqualCompare:517,NotEqualDepth:7,NotEqualStencilFunc:517,NumberKeyframeTrack:da,Object3D:Ze,ObjectLoader:Rp,ObjectSpaceNormalMap:1,OctahedronGeometry:Hr,OneFactor:201,OneMinusConstantAlphaFactor:214,OneMinusConstantColorFactor:212,OneMinusDstAlphaFactor:207,OneMinusDstColorFactor:209,OneMinusSrcAlphaFactor:Va,OneMinusSrcColorFactor:203,OrthographicCamera:ga,PCFShadowMap:1,PCFSoftShadowMap:2,PMREMGenerator:Fa,Path:Rr,PerspectiveCamera:It,Plane:Pi,PlaneGeometry:Wn,PlaneHelper:vm,PointLight:gc,PointLightHelper:am,Points:Fh,PointsMaterial:Bo,PolarGridHelper:um,PolyhedronGeometry:Zi,PositionalAudio:Bp,PropertyBinding:Je,PropertyMixer:Cc,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Zo,Quaternion:Ft,QuaternionKeyframeTrack:pa,QuaternionLinearInterpolant:uc,R11_EAC_Format:ds,RED_GREEN_RGTC2_Format:rr,RED_RGTC1_Format:Ls,REVISION:"187",RG11_EAC_Format:nr,RGBADepthPacking:3201,RGBAFormat:qt,RGBAIntegerFormat:rs,RGBA_ASTC_10x10_Format:Es,RGBA_ASTC_10x5_Format:bs,RGBA_ASTC_10x6_Format:Ts,RGBA_ASTC_10x8_Format:ws,RGBA_ASTC_12x10_Format:As,RGBA_ASTC_12x12_Format:Rs,RGBA_ASTC_4x4_Format:fs,RGBA_ASTC_5x4_Format:gs,RGBA_ASTC_5x5_Format:_s,RGBA_ASTC_6x5_Format:vs,RGBA_ASTC_6x6_Format:ys,RGBA_ASTC_8x5_Format:xs,RGBA_ASTC_8x6_Format:Ms,RGBA_ASTC_8x8_Format:Ss,RGBA_BPTC_Format:Cs,RGBA_ETC2_EAC_Format:us,RGBA_PVRTC_2BPPV1_Format:ls,RGBA_PVRTC_4BPPV1_Format:os,RGBA_S3TC_DXT1_Format:er,RGBA_S3TC_DXT3_Format:tr,RGBA_S3TC_DXT5_Format:ir,RGBDepthPacking:3202,RGBFormat:Za,RGBIntegerFormat:1032,RGB_BPTC_SIGNED_Format:Ps,RGB_BPTC_UNSIGNED_Format:Is,RGB_ETC1_Format:hs,RGB_ETC2_Format:cs,RGB_PVRTC_2BPPV1_Format:as,RGB_PVRTC_4BPPV1_Format:ss,RGB_S3TC_DXT1_Format:Qn,RGDepthPacking:3203,RGFormat:Bi,RGIntegerFormat:ns,RawShaderMaterial:el,Ray:In,Raycaster:qp,RectAreaLight:yc,RedFormat:is,RedIntegerFormat:$n,ReinhardToneMapping:2,RenderObjectRefreshType:Wu,RenderTarget:no,RenderTarget3D:kp,RepeatWrapping:Zn,ReplaceStencilOp:7681,ReverseSubtractEquation:102,RingGeometry:Pa,SIGNED_R11_EAC_Format:ps,SIGNED_RED_GREEN_RGTC2_Format:Ds,SIGNED_RED_RGTC1_Format:Ns,SIGNED_RG11_EAC_Format:ms,SRGBColorSpace:kt,SRGBTransfer:Qe,Scene:hh,ShaderChunk:Ge,ShaderLib:Ei,ShaderMaterial:Li,ShadowMaterial:Qh,Shape:Cr,ShapeGeometry:Ia,ShapePath:Sm,ShapeUtils:di,ShortType:Xa,Skeleton:ba,SkeletonHelper:rm,SkinnedMesh:Rh,Source:td,Sphere:Et,SphereGeometry:Wr,Spherical:Jp,SphericalHarmonics3:cl,SplineCurve:Jo,SpotLight:fc,SpotLightHelper:nm,Sprite:Sh,SpriteMaterial:mo,SrcAlphaFactor:Ga,SrcAlphaSaturateFactor:210,SrcColorFactor:202,StaticCopyUsage:35046,StaticDrawUsage:Bs,StaticReadUsage:35045,StereoCamera:Up,StreamCopyUsage:35042,StreamDrawUsage:35040,StreamReadUsage:35041,StringKeyframeTrack:gn,SubtractEquation:101,SubtractiveBlending:3,TOUCH:nu,TangentSpaceNormalMap:0,TetrahedronGeometry:La,Texture:ct,TextureLoader:Sp,TextureSource:yi,TextureUtils:Tm,Timer:Ec,TimestampQuery:Gu,TorusGeometry:Na,TorusKnotGeometry:Da,Triangle:jt,TriangleFanDrawMode:2,TriangleStripDrawMode:1,TrianglesDrawMode:0,TubeGeometry:Ua,UVMapping:$r,Uint16BufferAttribute:uo,Uint32BufferAttribute:po,Uint8BufferAttribute:fd,Uint8ClampedBufferAttribute:gd,Uniform:Al,UniformsGroup:Hp,UniformsLib:ue,UniformsUtils:cp,UnsignedByteType:Vt,UnsignedInt101111Type:qa,UnsignedInt248Type:en,UnsignedInt5999Type:ja,UnsignedIntType:_i,UnsignedShort4444Type:es,UnsignedShort5551Type:ts,UnsignedShortType:Tn,VSMShadowMap:3,Vector2:ie,Vector3:E,Vector4:it,VectorKeyframeTrack:al,VideoFrameTexture:Wd,VideoTexture:Bh,WebGL3DRenderTarget:nd,WebGLArrayRenderTarget:id,WebGLCoordinateSystem:vi,WebGLCubeRenderTarget:Sl,WebGLRenderTarget:Yt,WebGLRenderer:class{constructor(s={}){const{canvas:e=Ql(),context:t=null,depth:i=!0,stencil:n=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Vt}=s;let p;if(this.isWebGLRenderer=!0,t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=t.getContextAttributes().alpha}else p=r;const d=m,g=new Set([rs,ns,$n]),_=new Set([Vt,_i,Tn,en,es,ts]),f=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let b=null,S=null;const w=[],A=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,z=null,B=null,V=null,J=null;this._outputColorSpace=kt;let Y=0,k=0,D=null,K=-1,ne=null;const ve=new it,Ee=new it;let $=null;const le=new ge(0);let he=0,se=e.width,Me=e.height,ae=1,Pe=null,Ie=null;const Le=new it(0,0,se,Me),te=new it(0,0,se,Me);let re=!1;const P=new pn,Z=new Gr;let M=!1,x=!1;const C=new Ue,G=new E,O=new it,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function I(){return D===null?ae:1}let W,fe,q,Re,pe,Se,Xe,et,Ke,de,Ae,je,ut,nt,qe,vt,be,rt,Ve,Lt,lt,Tt,Ct,U=t;function Xr(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:n,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r187"),e.addEventListener("webglcontextlost",Rl,!1),e.addEventListener("webglcontextrestored",Cl,!1),e.addEventListener("webglcontextcreationerror",Pl,!1),U===null){const F="webgl2";if(U=Xr(F,T),U===null)throw Xr(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ba()}catch(T){throw e.removeEventListener("webglcontextlost",Rl,!1),e.removeEventListener("webglcontextrestored",Cl,!1),e.removeEventListener("webglcontextcreationerror",Pl,!1),we("WebGLRenderer: "+T.message),T}function Ba(){W=new w0(U),W.init(),lt=new Qm(U,W),fe=new x0(U,W,s,lt),q=new Y_(U,W),fe.reversedDepthBuffer&&u&&q.buffers.depth.setReversed(!0),B=U.createFramebuffer(),V=U.createFramebuffer(),J=U.createFramebuffer(),Re=new R0(U),pe=new F_,Se=new Z_(U,W,q,pe,fe,lt,Re),Xe=new T0(R),et=new f0(U),Tt=new v0(U,et),Ke=new E0(U,et,Re,Tt),de=new P0(U,Ke,et,Tt,Re),rt=new C0(U,fe,Se),qe=new M0(pe),Ae=new O_(R,Xe,W,fe,Tt,qe),je=new Q_(R,pe),ut=new z_,nt=new W_(W),be=new _0(R,Xe,q,de,p,o),vt=new q_(R,de,fe),Ct=new ev(U,Re,fe,q),Ve=new y0(U,W,Re),Lt=new A0(U,W,Re),Re.programs=Ae.programs,R.capabilities=fe,R.extensions=W,R.properties=pe,R.renderLists=ut,R.shadowMap=vt,R.state=q,R.info=Re}d!==Vt&&(L=new L0(d,e.width,e.height,a,i,n));const ft=new K_(R,U);function Rl(T){T.preventDefault(),cr("WebGLRenderer: Context Lost."),N=!0}function Cl(){cr("WebGLRenderer: Context Restored."),N=!1;const T=Re.autoReset,F=vt.enabled,H=vt.autoUpdate,Q=vt.needsUpdate,X=vt.type;Ba(),Re.autoReset=T,vt.enabled=F,vt.autoUpdate=H,vt.needsUpdate=Q,vt.type=X}function Pl(T){we("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vc(T){const F=T.target;F.removeEventListener("dispose",Vc),(function(H){(function(Q){const X=pe.get(Q).programs;X!==void 0&&(X.forEach(function(ce){Ae.releaseProgram(ce)}),Q.isShaderMaterial&&Ae.releaseShaderCache(Q))})(H),pe.remove(H)})(F)}function kc(T,F,H,Q){z!==null&&T.isNodeMaterial&&z.setObject(Q,T),M===!0&&qe.setState(T,H,!1),T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,jr(T,F,Q),T.side=0,T.needsUpdate=!0,jr(T,F,Q),T.side=2):jr(T,F,Q)}this.xr=ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=W.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=W.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(T){T!==void 0&&(ae=T,this.setSize(se,Me,!1))},this.getSize=function(T){return T.set(se,Me)},this.setSize=function(T,F,H=!0){ft.isPresenting?oe("WebGLRenderer: Can't change size while VR device is presenting."):(se=T,Me=F,e.width=Math.floor(T*ae),e.height=Math.floor(F*ae),H===!0&&(e.style.width=T+"px",e.style.height=F+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,T,F))},this.getDrawingBufferSize=function(T){return T.set(se*ae,Me*ae).floor()},this.setDrawingBufferSize=function(T,F,H){se=T,Me=F,ae=H,e.width=Math.floor(T*H),e.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(d!==Vt){if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])}else we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(ve)},this.getViewport=function(T){return T.copy(Le)},this.setViewport=function(T,F,H,Q){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,F,H,Q),q.viewport(ve.copy(Le).multiplyScalar(I()).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,F,H,Q){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,F,H,Q),q.scissor(Ee.copy(te).multiplyScalar(I()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){q.setScissorTest(re=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){Ie=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,H=!0){let Q=0;if(T){let X=!1;if(D!==null){const ce=D.texture.format;X=g.has(ce)}if(X){const ce=D.texture.type,me=_.has(ce),_e=be.getClearColor(),xe=be.getClearAlpha(),Ce=_e.r,Ye=_e.g,$e=_e.b;me?(f[0]=Ce,f[1]=Ye,f[2]=$e,f[3]=xe,U.clearBufferuiv(U.COLOR,0,f)):(v[0]=Ce,v[1]=Ye,v[2]=$e,v[3]=xe,U.clearBufferiv(U.COLOR,0,v))}else Q|=U.COLOR_BUFFER_BIT}F&&(Q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Rl,!1),e.removeEventListener("webglcontextrestored",Cl,!1),e.removeEventListener("webglcontextcreationerror",Pl,!1),be.dispose(),ut.dispose(),nt.dispose(),Se.dispose(),pe.dispose(),Xe.dispose(),de.dispose(),Ke.dispose(),Tt.dispose(),Ct.dispose(),Ae.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Hc),ft.removeEventListener("sessionend",Wc),Mn.stop()},this.renderBufferDirect=function(T,F,H,Q,X,ce){F===null&&(F=j);const me=X.isMesh&&X.matrixWorld.determinantAffine()<0,_e=(function(ke,st,xt,Ne,Fe){st.isScene!==!0&&(st=j),Se.resetTextureUnits();const pi=st.fog,Nl=Ne.isMeshStandardMaterial||Ne.isMeshLambertMaterial||Ne.isMeshPhongMaterial?st.environment:null,qr=D===null?R.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:He.workingColorSpace,Yr=Ne.isMeshStandardMaterial||Ne.isMeshLambertMaterial&&!Ne.envMap||Ne.isMeshPhongMaterial&&!Ne.envMap,Ai=Xe.get(Ne.envMap||Nl,Yr),Xn=Ne.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,Oi=!!xt.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),Dl=!!xt.morphAttributes.position,jn=!!xt.morphAttributes.normal,tf=!!xt.morphAttributes.color;let Ul=0;Ne.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(Ul=R.toneMapping));const $c=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,nf=$c!==void 0?$c.length:0,ze=pe.get(Ne),Fi=S.state.lights;if(M===!0&&(x===!0||ke!==ne)){const at=ke===ne&&Ne.id===K;qe.setState(Ne,ke,at)}let mi=!1,Ol=!1;Ne.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Fi.state.version||Fe.isBatchedMesh&&ze.batching===!1?mi=!0:Fe.isBatchedMesh||ze.batching!==!0?Fe.isBatchedMesh&&ze.batchingColor===!0&&Fe._colorsTexture===null||Fe.isBatchedMesh&&ze.batchingColor===!1&&Fe._colorsTexture!==null||Fe.isInstancedMesh&&ze.instancing===!1?mi=!0:Fe.isInstancedMesh||ze.instancing!==!0?Fe.isSkinnedMesh&&ze.skinning===!1?mi=!0:Fe.isSkinnedMesh||ze.skinning!==!0?Fe.isInstancedMesh&&ze.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&ze.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&ze.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&ze.instancingMorph===!1&&Fe.morphTexture!==null||ze.envMap!==Ai||Ne.fog===!0&&ze.fog!==pi?mi=!0:ze.numClippingPlanes===void 0||ze.numClippingPlanes===qe.numPlanes&&ze.numIntersection===qe.numIntersection?ze.vertexAlphas!==Xn||ze.vertexTangents!==Oi||ze.morphTargets!==Dl||ze.morphNormals!==jn||ze.morphColors!==tf||ze.morphTargetsCount!==nf||ze.numLightProbeGrids!==Yc(S.state.lightProbeGridArray)?mi=!0:ze.outputColorSpace===qr&&ze.toneMapping===Ul||(Ol=!0):mi=!0:mi=!0:mi=!0:mi=!0:(mi=!0,ze.__version=Ne.version);let Ji=ze.currentProgram;mi!==!0&&Ol!==!0||(Ji=Ol===!0?(function(at,ai,fi,Jr,eu){const Sn=pe.get(at),tu=Sn.currentProgram.id+","+Jr+","+eu;let Kr=Sn.programVariants.get(tu);return Kr===void 0?(Kr=jr(at,ai,fi),Sn.programVariants.set(tu,Kr)):(Sn.currentProgram=Kr,Sn.uniformsList=null,Sn.outputColorSpace=Jr,Sn.toneMapping=eu),Kr})(Ne,st,Fe,qr,Ul):jr(Ne,st,Fe),z&&Ne.isNodeMaterial&&z.onUpdateProgram(Ne,Ji,ze));let Qc=!1,Zr=!1,Fl=!1;const ht=Ji.getUniforms(),ri=ze.uniforms;if(q.useProgram(Ji.program)&&(Qc=!0,Zr=!0,Fl=!0),Ne.id!==K&&(K=Ne.id,Zr=!0),Qc||ne!==ke){q.buffers.depth.getReversed()&&ke.reversedDepth!==!0&&(ke._reversedDepth=!0,ke.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",ke.projectionMatrix),ht.setValue(U,"viewMatrix",ke.matrixWorldInverse);const at=ht.map.cameraPosition;at!==void 0&&at.setValue(U,G.setFromMatrixPosition(ke.matrixWorld)),fe.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&ht.setValue(U,"isOrthographic",ke.isOrthographicCamera===!0),ne!==ke&&(ne=ke,Zr=!0,Fl=!0)}if(ze.needsLights&&(Fi.state.sunShadowMap.length>0&&ht.setValue(U,"sunShadowMap",Fi.state.sunShadowMap,Se),Fi.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Fi.state.directionalShadowMap,Se),Fi.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Fi.state.spotShadowMap,Se),Fi.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Fi.state.pointShadowMap,Se)),Fe.isSkinnedMesh){ht.setOptional(U,Fe,"bindMatrix"),ht.setOptional(U,Fe,"bindMatrixInverse");const at=Fe.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),ht.setValue(U,"boneTexture",at.boneTexture,Se))}Fe.isBatchedMesh&&(ht.setOptional(U,Fe,"batchingTexture"),ht.setValue(U,"batchingTexture",Fe._matricesTexture,Se),ht.setOptional(U,Fe,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",Fe._indirectTexture,Se),ht.setOptional(U,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",Fe._colorsTexture,Se));const Bl=xt.morphAttributes;if(Bl.position===void 0&&Bl.normal===void 0&&Bl.color===void 0||rt.update(Fe,xt,Ji),(Zr||ze.receiveShadow!==Fe.receiveShadow)&&(ze.receiveShadow=Fe.receiveShadow,ht.setValue(U,"receiveShadow",Fe.receiveShadow)),(Ne.isMeshStandardMaterial||Ne.isMeshLambertMaterial||Ne.isMeshPhongMaterial)&&Ne.envMap===null&&st.environment!==null&&(ri.envMapIntensity.value=st.environmentIntensity),ri.dfgLUT!==void 0&&(ri.dfgLUT.value=(Ui===null&&(Ui=new ii(tv,16,16,Bi,oi),Ui.name="DFG_LUT",Ui.minFilter=gt,Ui.magFilter=gt,Ui.wrapS=$t,Ui.wrapT=$t,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui)),Zr){if(ht.setValue(U,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&(Kt=Fl,(si=ri).ambientLightColor.needsUpdate=Kt,si.lightProbe.needsUpdate=Kt,si.sunLights.needsUpdate=Kt,si.sunLightShadows.needsUpdate=Kt,si.directionalLights.needsUpdate=Kt,si.directionalLightShadows.needsUpdate=Kt,si.pointLights.needsUpdate=Kt,si.pointLightShadows.needsUpdate=Kt,si.spotLights.needsUpdate=Kt,si.spotLightShadows.needsUpdate=Kt,si.rectAreaLights.needsUpdate=Kt,si.hemisphereLights.needsUpdate=Kt),pi&&Ne.fog===!0&&je.refreshFogUniforms(ri,pi),je.refreshMaterialUniforms(ri,Ne,ae,Me,S.state.transmissionRenderTarget[ke.id]),ze.needsLights&&ze.numLightProbeGrids>0){const at=y;let ai=0;for(const fi of S.state.lightProbeGridArray)fi.texture!==null&&(at.textures[ai]=fi.texture,at.min[ai]=fi.boundingBox.min,at.max[ai]=fi.boundingBox.max,at.resolution[ai]=fi.resolution,ai++);for(const fi in at)at[fi].length=ai;ri.probesSH.value=at.textures,ri.probesMin.value=at.min,ri.probesMax.value=at.max,ri.probesResolution.value=at.resolution}wl.upload(U,Zc(ze),ri,Se)}var si,Kt;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(wl.upload(U,Zc(ze),ri,Se),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&ht.setValue(U,"center",Fe.center),ht.setValue(U,"modelViewMatrix",Fe.modelViewMatrix),ht.setValue(U,"normalMatrix",Fe.normalMatrix),ht.setValue(U,"modelMatrix",Fe.matrixWorld),Ne.uniformsGroups!==void 0){const at=Ne.uniformsGroups;for(let ai=0,fi=at.length;ai<fi;ai++){const Jr=at[ai];Ct.update(Jr,Ji),Ct.bind(Jr,Ji)}}return Ji})(T,F,H,Q,X);q.setMaterial(Q,me);let xe=H.index,Ce=1;if(Q.wireframe===!0){if(xe=Ke.getWireframeAttribute(H),xe===void 0)return;Ce=2}const Ye=H.drawRange,$e=H.attributes.position;let Te=Ye.start*Ce,We=(Ye.start+Ye.count)*Ce;ce!==null&&(Te=Math.max(Te,ce.start*Ce),We=Math.min(We,(ce.start+ce.count)*Ce)),xe!==null?(Te=Math.max(Te,0),We=Math.min(We,xe.count)):$e!=null&&(Te=Math.max(Te,0),We=Math.min(We,$e.count));const wt=We-Te;if(wt<0||wt===1/0)return;let dt;Tt.setup(X,Q,_e,H,xe);let tt=Ve;if(xe!==null&&(dt=et.get(xe),tt=Lt,tt.setIndex(dt)),X.isMesh)Q.wireframe===!0?(q.setLineWidth(Q.wireframeLinewidth*I()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(X.isLine){let ke=Q.linewidth;ke===void 0&&(ke=1),q.setLineWidth(ke*I()),X.isLineSegments?tt.setMode(U.LINES):X.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else X.isPoints?tt.setMode(U.POINTS):X.isSprite&&tt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(W.get("WEBGL_multi_draw"))tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ke=X._multiDrawStarts,st=X._multiDrawCounts,xt=X._multiDrawCount,Ne=xe?et.get(xe).bytesPerElement:1,Fe=pe.get(Q).currentProgram.getUniforms();for(let pi=0;pi<xt;pi++)Fe.setValue(U,"_gl_DrawID",pi),tt.render(ke[pi]/Ne,st[pi])}else if(X.isInstancedMesh)tt.renderInstances(Te,wt,X.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,st=Math.min(H.instanceCount,ke);tt.renderInstances(Te,wt,st)}else tt.render(Te,wt)},this.compile=function(T,F,H=null){H===null&&(H=T),z!==null&&z.renderStart(T,F,H),S=nt.get(H),S.init(F),A.push(S),H.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),T!==H&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),x=this.localClippingEnabled,M=qe.init(this.clippingPlanes,x),M===!0&&qe.setGlobalState(this.clippingPlanes,F),z!==null&&vt.render(S.state.shadowsArray,H,F);const Q=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ce=X.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const _e=ce[me];kc(_e,H,F,X),Q.add(_e)}else kc(ce,H,F,X),Q.add(ce)}),S=A.pop(),z!==null&&z.renderEnd(),Q},this.compileAsync=function(T,F,H=null){const Q=this.compile(T,F,H);return new Promise(X=>{function ce(){Q.forEach(function(me){const _e=pe.get(me).currentProgram;(_e===void 0||_e.isReady())&&Q.delete(me)}),Q.size!==0?setTimeout(ce,10):X(T)}W.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Il=null;function Hc(){Mn.stop()}function Wc(){Mn.start()}const Mn=new wm;function Ll(T,F,H,Q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){const ce=F.isArrayCamera?Z:P;if(!T.frustumCulled||T.intersectsFrustum(ce)){Q&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(C);const me=de.update(T),_e=T.material;_e.visible&&b.push(T,me,_e,H,O.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){const ce=F.isArrayCamera?Z:P;if(!T.frustumCulled||T.intersectsFrustum(ce)){const me=de.update(T),_e=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),O.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),O.copy(me.boundingSphere.center)),O.applyMatrix4(T.matrixWorld).applyMatrix4(C)),Array.isArray(_e)){const xe=me.groups;for(let Ce=0,Ye=xe.length;Ce<Ye;Ce++){const $e=xe[Ce],Te=_e[$e.materialIndex];Te&&Te.visible&&b.push(T,me,Te,H,O.z,$e,F)}}else _e.visible&&b.push(T,me,_e,H,O.z,null,F)}}}const X=T.children;for(let ce=0,me=X.length;ce<me;ce++)Ll(X[ce],F,H,Q)}function Xc(T,F,H,Q){const{opaque:X,transmissive:ce,transparent:me}=T;S.setupLightsView(H),M===!0&&qe.setGlobalState(R.clippingPlanes,H),Q&&q.viewport(ve.copy(Q)),X.length>0&&za(X,F,H),ce.length>0&&za(ce,F,H),me.length>0&&za(me,F,H),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function jc(T,F,H,Q){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Q.id]===void 0){const $e=W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Q.id]=new Yt(1,1,{generateMipmaps:!0,type:$e?oi:Vt,minFilter:gi,samples:Math.max(4,fe.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const X=S.state.transmissionRenderTarget[Q.id],ce=Q.viewport||ve;X.setSize(ce.z*R.transmissionResolutionScale,ce.w*R.transmissionResolutionScale);const me=R.getRenderTarget(),_e=R.getActiveCubeFace(),xe=R.getActiveMipmapLevel();R.setRenderTarget(X),R.getClearColor(le),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),ee&&be.render(H);const Ce=R.toneMapping;R.toneMapping=0;const Ye=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),S.setupLightsView(Q),M===!0&&qe.setGlobalState(R.clippingPlanes,Q),za(T,H,Q),Se.updateMultisampleRenderTarget(X),Se.updateRenderTargetMipmap(X),W.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Te=0,We=F.length;Te<We;Te++){const wt=F[Te],{object:dt,geometry:tt,material:ke,group:st}=wt;if(ke.side===2&&dt.layers.test(Q.layers)){const xt=ke.side;ke.side=1,ke.needsUpdate=!0,qc(dt,H,Q,tt,ke,st),ke.side=xt,ke.needsUpdate=!0,$e=!0}}$e===!0&&(Se.updateMultisampleRenderTarget(X),Se.updateRenderTargetMipmap(X))}R.setRenderTarget(me,_e,xe),R.setClearColor(le,he),Ye!==void 0&&(Q.viewport=Ye),R.toneMapping=Ce}function za(T,F,H){const Q=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ce=T.length;X<ce;X++){const me=T[X],{object:_e,geometry:xe,group:Ce}=me;let Ye=me.material;Ye.allowOverride===!0&&Q!==null&&(Ye=Q),_e.layers.test(H.layers)&&qc(_e,F,H,xe,Ye,Ce)}}function qc(T,F,H,Q,X,ce){z!==null&&X.isNodeMaterial&&z.setObject(T,X),T.onBeforeRender(R,F,H,Q,X,ce),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(R,F,H,Q,T,ce),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,R.renderBufferDirect(H,F,Q,X,T,ce),X.side=0,X.needsUpdate=!0,R.renderBufferDirect(H,F,Q,X,T,ce),X.side=2):R.renderBufferDirect(H,F,Q,X,T,ce),T.onAfterRender(R,F,H,Q,X,ce)}function Yc(T){let F=0;for(const H of T)H.texture!==null&&F++;return F}function jr(T,F,H){F.isScene!==!0&&(F=j);const Q=pe.get(T),X=S.state.lights,ce=S.state.shadowsArray,me=X.state.version,_e=Ae.getParameters(T,X.state,ce,F,H,S.state.lightProbeGridArray),xe=Ae.getProgramCacheKey(_e);let Ce=Q.programs;Q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,Q.fog=F.fog;const Ye=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Q.envMap=Xe.get(T.envMap||Q.environment,Ye),Q.envMapRotation=Q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",Vc),Ce=new Map,Q.programs=Ce,Q.programVariants=new Map);let $e=Ce.get(xe);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===me)return Jc(T,_e),$e}else _e.uniforms=Ae.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,H,_e),T.onBeforeCompile(_e,R),$e=Ae.acquireProgram(_e,xe),Ce.set(xe,$e),Q.uniforms=_e.uniforms;const Te=Q.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Te.clippingPlanes=qe.uniform),Jc(T,_e),Q.needsLights=(function(We){return We.isMeshLambertMaterial||We.isMeshToonMaterial||We.isMeshPhongMaterial||We.isMeshStandardMaterial||We.isShadowMaterial||We.isShaderMaterial&&We.lights===!0})(T),Q.lightsStateVersion=me,Q.needsLights&&(Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.sunLights.value=X.state.sun,Te.sunLightShadows.value=X.state.sunShadow,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.sunShadowMatrix.value=X.state.sunShadowMatrix,Te.sunShadowCascade.value=X.state.sunShadowCascade,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.numLightProbeGrids=Yc(S.state.lightProbeGridArray),Q.currentProgram=$e,Q.uniformsList=null,$e}function Zc(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=wl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Jc(T,F){const H=pe.get(T);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Kc(T){const F=pe.get(T);return F.__readFormat===T.format&&F.__readType===T.type||(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=fe.textureFormatReadable(T.format),F.__typeReadable=fe.textureTypeReadable(T.type)),F}Mn.setAnimationLoop(function(T){Il&&Il(T)}),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(T){Il=T,ft.setAnimationLoop(T),T===null?Mn.stop():Mn.start()},ft.addEventListener("sessionstart",Hc),ft.addEventListener("sessionend",Wc),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0)return void we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(N===!0)return;z!==null&&z.renderStart(T,F);const H=ft.enabled===!0&&ft.isPresenting===!0,Q=L!==null&&(D===null||H)&&L.begin(R,D);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.enabled!==!0||ft.isPresenting!==!0||L!==null&&L.isCompositing()!==!1||(ft.cameraAutoUpdate===!0&&ft.updateCamera(F),F=ft.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,D),S=nt.get(T,A.length),S.init(F),S.state.textureUnits=Se.getTextureUnits(),A.push(S),C.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Z.setFromArrayCamera(F):P.setFromProjectionMatrix(C,vi,F.reversedDepth),x=this.localClippingEnabled,M=qe.init(this.clippingPlanes,x),b=ut.get(T,w.length),b.init(),w.push(b),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){const ce=R.xr.getDepthSensingMesh();ce!==null&&Ll(ce,F,-1/0,R.sortObjects)}Ll(T,F,0,R.sortObjects),b.finish(),z!==null&&z.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(Pe,Ie),ee=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ee&&be.addToRenderList(b,T),this.info.autoReset===!0&&this.info.reset(),M===!0&&qe.beginShadows();const X=S.state.shadowsArray;if(vt.render(X,T,F),M===!0&&qe.endShadows(),(Q&&L.hasRenderPass())===!1){const ce=b.opaque,me=b.transmissive;if(S.setupLights(),F.isArrayCamera){const _e=F.cameras;if(me.length>0)for(let xe=0,Ce=_e.length;xe<Ce;xe++)jc(ce,me,T,_e[xe]);ee&&be.render(T);for(let xe=0,Ce=_e.length;xe<Ce;xe++){const Ye=_e[xe];Xc(b,T,Ye,Ye.viewport)}}else me.length>0&&jc(ce,me,T,F),ee&&be.render(T),Xc(b,T,F)}D!==null&&k===0&&(Se.updateMultisampleRenderTarget(D),Se.updateRenderTargetMipmap(D)),Q&&L.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),Tt.resetDefaultState(),K=-1,ne=null,A.pop(),A.length>0?(S=A[A.length-1],Se.setTextureUnits(S.state.textureUnits),M===!0&&qe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,w.pop(),b=w.length>0?w[w.length-1]:null,z!==null&&z.renderEnd()},this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,F,H){const Q=pe.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),pe.get(T.texture).__webglTexture=F,pe.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:H,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const H=pe.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){D=T,Y=F,k=H;let Q=null,X=!1,ce=!1;if(T){const me=pe.get(T);if(me.__useDefaultFramebuffer!==void 0)return q.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),ve.copy(T.viewport),Ee.copy(T.scissor),$=T.scissorTest,q.viewport(ve),q.scissor(Ee),q.setScissorTest($),void(K=-1);if(me.__webglFramebuffer===void 0)Se.setupRenderTarget(T);else if(me.__hasExternalTextures)Se.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ce=T.depthTexture;if(me.__boundDepthTexture!==Ce){if(Ce!==null&&pe.has(Ce)&&(T.width!==Ce.image.width||T.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(T)}}const _e=T.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ce=!0);const xe=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=Array.isArray(xe[F])?xe[F][H]:xe[F],X=!0):Q=T.samples>0&&Se.useMultisampledRTT(T)===!1?pe.get(T).__webglMultisampledFramebuffer:Array.isArray(xe)?xe[H]:xe,ve.copy(T.viewport),Ee.copy(T.scissor),$=T.scissorTest}else ve.copy(Le).multiplyScalar(ae).floor(),Ee.copy(te).multiplyScalar(ae).floor(),$=re;if(H!==0&&(Q=B),q.bindFramebuffer(U.FRAMEBUFFER,Q)&&q.drawBuffers(T,Q),q.viewport(ve),q.scissor(Ee),q.setScissorTest($),X){const me=pe.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,H)}else if(ce){const me=F;for(let _e=0;_e<T.textures.length;_e++){const xe=pe.get(T.textures[_e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+_e,xe.__webglTexture,H,me)}}else if(T!==null&&H!==0){const me=pe.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,H)}K=-1},this.readRenderTargetPixels=function(T,F,H,Q,X,ce,me,_e=0){if(!T||!T.isWebGLRenderTarget)return void we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me],Array.isArray(xe)&&(xe=xe[0])),xe){q.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Ce=T.textures[_e],Ye=Ce.format,$e=Ce.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);const Te=Kc(Ce);if(Te.__formatReadable===!1)return void we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)return void we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");F>=0&&F<=T.width-Q&&H>=0&&H<=T.height-X&&U.readPixels(F,H,Q,X,lt.convert(Ye),lt.convert($e),ce)}finally{const Ce=D!==null?pe.get(D).__webglFramebuffer:null;q.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,H,Q,X,ce,me,_e=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me],Array.isArray(xe)&&(xe=xe[0])),xe){if(F>=0&&F<=T.width-Q&&H>=0&&H<=T.height-X){q.bindFramebuffer(U.FRAMEBUFFER,xe);const Ce=T.textures[_e],Ye=Ce.format,$e=Ce.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);const Te=Kc(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(F,H,Q,X,lt.convert(Ye),lt.convert($e),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const wt=D!==null?pe.get(D).__webglFramebuffer:null;q.bindFramebuffer(U.FRAMEBUFFER,wt);const dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await(function(tt,ke){return new Promise(function(st,xt){setTimeout(function Ne(){switch(tt.clientWaitSync(ke,tt.SYNC_FLUSH_COMMANDS_BIT,0)){case tt.WAIT_FAILED:xt();break;case tt.TIMEOUT_EXPIRED:setTimeout(Ne,4);break;default:st()}},4)})})(U,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,We),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(We),U.deleteSync(dt),ce}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,H=0){const Q=Math.pow(2,-H),X=Math.floor(T.image.width*Q),ce=Math.floor(T.image.height*Q),me=F!==null?F.x:0,_e=F!==null?F.y:0;Se.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,me,_e,X,ce),q.unbindTexture()},this.copyTextureToTexture=function(T,F,H=null,Q=null,X=0,ce=0){let me,_e,xe,Ce,Ye,$e,Te,We,wt;const dt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(H!==null)me=H.max.x-H.min.x,_e=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Ye=H.min.y,$e=H.isBox3?H.min.z:0;else{const Ai=Math.pow(2,-X);me=Math.floor(dt.width*Ai),_e=Math.floor(dt.height*Ai),xe=T.isDataArrayTexture?dt.depth:T.isData3DTexture?Math.floor(dt.depth*Ai):1,Ce=0,Ye=0,$e=0}Q!==null?(Te=Q.x,We=Q.y,wt=Q.z):(Te=0,We=0,wt=0);const tt=lt.convert(F.format),ke=lt.convert(F.type);let st;F.isData3DTexture?(Se.setTexture3D(F,0),st=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Se.setTexture2DArray(F,0),st=U.TEXTURE_2D_ARRAY):(Se.setTexture2D(F,0),st=U.TEXTURE_2D),q.activeTexture(U.TEXTURE0),q.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),q.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),q.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const xt=q.getParameter(U.UNPACK_ROW_LENGTH),Ne=q.getParameter(U.UNPACK_IMAGE_HEIGHT),Fe=q.getParameter(U.UNPACK_SKIP_PIXELS),pi=q.getParameter(U.UNPACK_SKIP_ROWS),Nl=q.getParameter(U.UNPACK_SKIP_IMAGES);q.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),q.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),q.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),q.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),q.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const qr=T.isDataArrayTexture||T.isData3DTexture,Yr=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Ai=pe.get(T),Xn=pe.get(F),Oi=pe.get(Ai.__renderTarget),Dl=pe.get(Xn.__renderTarget);q.bindFramebuffer(U.READ_FRAMEBUFFER,Oi.__webglFramebuffer),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,Dl.__webglFramebuffer);for(let jn=0;jn<xe;jn++)qr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.get(T).__webglTexture,X,$e+jn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.get(F).__webglTexture,ce,wt+jn)),U.blitFramebuffer(Ce,Ye,Ce+me,Ye+_e,Te,We,Te+me,We+_e,U.DEPTH_BUFFER_BIT,U.NEAREST);q.bindFramebuffer(U.READ_FRAMEBUFFER,null),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||pe.has(T)){const Ai=pe.get(T),Xn=pe.get(F);q.bindFramebuffer(U.READ_FRAMEBUFFER,V),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,J);for(let Oi=0;Oi<xe;Oi++)qr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ai.__webglTexture,X,$e+Oi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ai.__webglTexture,X),Yr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xn.__webglTexture,ce,wt+Oi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xn.__webglTexture,ce),X!==0?U.blitFramebuffer(Ce,Ye,Ce+me,Ye+_e,Te,We,Te+me,We+_e,U.COLOR_BUFFER_BIT,U.NEAREST):Yr?U.copyTexSubImage3D(st,ce,Te,We,wt+Oi,Ce,Ye,me,_e):U.copyTexSubImage2D(st,ce,Te,We,Ce,Ye,me,_e);q.bindFramebuffer(U.READ_FRAMEBUFFER,null),q.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Yr?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(st,ce,Te,We,wt,me,_e,xe,tt,ke,dt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(st,ce,Te,We,wt,me,_e,xe,tt,dt.data):U.texSubImage3D(st,ce,Te,We,wt,me,_e,xe,tt,ke,dt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ce,Te,We,me,_e,tt,ke,dt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ce,Te,We,dt.width,dt.height,tt,dt.data):U.texSubImage2D(U.TEXTURE_2D,ce,Te,We,me,_e,tt,ke,dt);q.pixelStorei(U.UNPACK_ROW_LENGTH,xt),q.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne),q.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),q.pixelStorei(U.UNPACK_SKIP_ROWS,pi),q.pixelStorei(U.UNPACK_SKIP_IMAGES,Nl),ce===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(st),q.unbindTexture()},this.initRenderTarget=function(T){pe.get(T).__webglFramebuffer===void 0&&Se.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Se.setTextureCube(T,0):T.isData3DTexture?Se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Se.setTexture2DArray(T,0):Se.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){Y=0,k=0,D=null,q.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s;const e=this.getContext();e.drawingBufferColorSpace=He._getDrawingBufferColorSpace(s),e.unpackColorSpace=He._getUnpackColorSpace()}},WebGLUtils:Qm,WebGPUCoordinateSystem:an,WebXRController:Xs,WireframeGeometry:$h,WrapAroundEnding:ar,ZeroCurvatureEnding:nn,ZeroFactor:200,ZeroSlopeEnding:rn,ZeroStencilOp:0,createCanvasElement:Ql,error:we,getConsoleFunction:qu,log:cr,setConsoleFunction:ju,warn:oe,warnOnce:Ci},Symbol.toStringTag,{value:"Module"}));export{Uf as $,pf as A,Be as B,$t as C,ii as D,gt as E,Dt as F,Rn as G,_a as H,Nn as I,$i as J,Qi as K,bi as L,Mt as M,Nt as N,ga as O,Wn as P,an as Q,qt as R,hh as S,cr as T,li as U,E as V,Yt as W,Ci as X,Bi as Y,rr as Z,nr as _,Li as a,fc as a$,vi as a0,Qt as a1,Rt as a2,Wu as a3,Lf as a4,Df as a5,Of as a6,Nf as a7,Et as a8,th as a9,ye as aA,Ze as aB,Tf as aC,$r as aD,Vs as aE,is as aF,$n as aG,tn as aH,Ya as aI,ns as aJ,Za as aK,wf as aL,Gu as aM,Ql as aN,rf as aO,zl as aP,Gl as aQ,Vl as aR,kl as aS,Wl as aT,Xl as aU,qn as aV,Yn as aW,Vt as aX,Xa as aY,Wa as aZ,Tn as a_,oi as aa,mn as ab,Ri as ac,en as ad,it as ae,hf as af,Vo as ag,Qa as ah,$a as ai,Ue as aj,xf as ak,sn as al,Hu as am,ru as an,su as ao,ct as ap,Ou as aq,Bu as ar,_i as as,Qr as at,Xd as au,Js as av,$p as aw,_f as ax,lu as ay,or as az,It as b,Is as b$,ac as b0,Gt as b1,dn as b2,rc as b3,sc as b4,nc as b5,tc as b6,ec as b7,tl as b8,ic as b9,uu as bA,Vr as bB,Ft as bC,Xs as bD,Wr as bE,Zn as bF,Jn as bG,Rs as bH,As as bI,Es as bJ,ws as bK,Ts as bL,bs as bM,Ss as bN,Ms as bO,xs as bP,ys as bQ,vs as bR,_s as bS,gs as bT,fs as bU,ms as bV,ps as bW,ds as bX,us as bY,hs as bZ,cs as b_,Kn as ba,bn as bb,yd as bc,lg as bd,Xt as be,Ni as bf,Oa as bg,Rp as bh,Bo as bi,kt as bj,cf as bk,au as bl,Qh as bm,mo as bn,pn as bo,Gr as bp,gf as bq,rs as br,Du as bs,Nu as bt,Lu as bu,es as bv,ts as bw,ja as bx,qa as by,wc as bz,qp as c,Bf as c$,Ps as c0,Cs as c1,Ds as c2,Ns as c3,Ls as c4,ir as c5,tr as c6,er as c7,Qn as c8,$l as c9,ff as cA,mf as cB,Iu as cC,Pu as cD,Cu as cE,Ru as cF,Au as cG,Eu as cH,wu as cI,Tu as cJ,ss as cK,as as cL,os as cM,ls as cN,Zf as cO,Yf as cP,Jf as cQ,jf as cR,qf as cS,Xf as cT,Kf as cU,Wf as cV,kf as cW,Vf as cX,Gf as cY,zf as cZ,Hf as c_,Ha as ca,zu as cb,Fu as cc,eo as cd,Uu as ce,lr as cf,xl as cg,yf as ch,vf as ci,cu as cj,hu as ck,bu as cl,Su as cm,Mu as cn,xu as co,gu as cp,vu as cq,mu as cr,fu as cs,_u as ct,yu as cu,pu as cv,du as cw,sf as cx,af as cy,of as cz,Pi as d,ks as d$,Ff as d0,Fs as d1,Zu as d2,En as d3,po as d4,uo as d5,gc as d6,_c as d7,yc as d8,vc as d9,_m as dA,gm as dB,Sc as dC,wi as dD,fa as dE,fm as dF,Yd as dG,Ta as dH,jh as dI,wa as dJ,Zp as dK,sl as dL,jd as dM,qd as dN,ra as dO,yp as dP,kr as dQ,bm as dR,xp as dS,jo as dT,qh as dU,lc as dV,lf as dW,ci as dX,Zh as dY,Hl as dZ,Kp as d_,pc as da,xc as db,Ka as dc,Lc as dd,Nr as de,vp as df,Vp as dg,Gp as dh,pp as di,Vh as dj,xm as dk,ka as dl,Rc as dm,zp as dn,pl as dp,Op as dq,Lp as dr,Mm as ds,Kl as dt,Nh as du,cc as dv,Co as dw,fn as dx,Dc as dy,Pt as dz,ie as e,Jl as e$,Mp as e0,pd as e1,dc as e2,jl as e3,mm as e4,hc as e5,Ea as e6,rg as e7,tg as e8,Gh as e9,Os as eA,ku as eB,Vu as eC,ni as eD,bh as eE,Ca as eF,Hs as eG,Yi as eH,ma as eI,ji as eJ,tm as eK,qo as eL,Yh as eM,Uh as eN,rl as eO,bf as eP,ul as eQ,ol as eR,ql as eS,Zl as eT,Yl as eU,iu as eV,Ku as eW,il as eX,nl as eY,Sf as eZ,Mf as e_,sa as ea,ui as eb,ko as ec,Aa as ed,Sa as ee,Ma as ef,Xp as eg,ag as eh,to as ei,cm as ej,Zd as ek,hm as el,Ra as em,Ip as en,Ur as eo,rh as ep,Mc as eq,Wp as er,Ch as es,_d as et,vd as eu,md as ev,Fn as ew,Ja as ex,sr as ey,Us as ez,ot as f,$h as f$,da as f0,Hr as f1,Rr as f2,vm as f3,am as f4,um as f5,Zi as f6,Bp as f7,Je as f8,Cc as f9,Up as fA,sg as fB,Qf as fC,ig as fD,gn as fE,nu as fF,La as fG,Sp as fH,yi as fI,Tm as fJ,Ec as fK,Na as fL,Da as fM,jt as fN,Rf as fO,Af as fP,Ef as fQ,Ua as fR,fd as fS,gd as fT,Al as fU,Hp as fV,al as fW,Wd as fX,Bh as fY,nd as fZ,id as f_,Yo as fa,Zo as fb,pa as fc,uc as fd,Cf as fe,Pf as ff,If as fg,el as fh,In as fi,kp as fj,Pa as fk,Cr as fl,Ia as fm,Sm as fn,di as fo,ba as fp,rm as fq,Rh as fr,td as fs,Jp as ft,cl as fu,Jo as fv,nm as fw,Sh as fx,ng as fy,eg as fz,$f as g,ar as g0,nn as g1,rn as g2,qu as g3,ju as g4,iv as g5,Fh as h,ge as i,we as j,df as k,Ga as l,Va as m,Ki as n,Bs as o,yn as p,He as q,Qe as r,Oe as s,no as t,Ar as u,xn as v,oe as w,ou as x,uf as y,gi as z};
