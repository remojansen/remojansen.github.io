"use strict";(()=>{var ud=0,Nh=1,dd=2;var Us=1,fd=2,es=3,_n=0,ti=1,Ti=2,Ji=0,gn=1,Bh=2,kh=3,Fh=4,pd=5,Nn=100,md=101,_d=102,gd=103,vd=104,Sd=200,yd=201,xd=202,bd=203,Go=204,Xo=205,wd=206,Md=207,Cd=208,Ed=209,Td=210,Ad=211,Rd=212,Pd=213,Id=214,ga=0,va=1,Sa=2,cr=3,ya=4,xa=5,ba=6,wa=7,Oh=0,Ld=1,Dd=2,Fi=0,Uh=1,zh=2,Hh=3,Vh=4,Wh=5,Gh=6,Xh=7;var $h=300,Hn=301,mr=302,Ma=303,Ca=304,zs=306,ur=1e3,Xi=1001,$o=1002,At=1003,Nd=1004;var Hs=1005;var Qe=1006,Ea=1007;var Vn=1008;var qt=1009,qh=1010,Yh=1011,ts=1012,Ta=1013,Oi=1014,Ui=1015,ji=1016,Aa=1017,Ra=1018,is=1020,Kh=35902,Zh=35899,Jh=1021,jh=1022,Yt=1023,$i=1026,Wn=1027,Qh=1028,Pa=1029,_r=1030,Ia=1031;var La=1033,Vs=33776,Ws=33777,Gs=33778,Xs=33779,Da=35840,Na=35841,Ba=35842,ka=35843,Fa=36196,Oa=37492,Ua=37496,za=37488,Ha=37489,Va=37490,Wa=37491,Ga=37808,Xa=37809,$a=37810,qa=37811,Ya=37812,Ka=37813,Za=37814,Ja=37815,ja=37816,Qa=37817,el=37818,tl=37819,il=37820,nl=37821,rl=36492,sl=36494,ol=36495,al=36283,ll=36284,hl=36285,cl=36286;var Ss=2300,qo=2301,Wo=2302,Th=2400,Ah=2401,Rh=2402;var Bd=3200;var kd=0,Fd=1,Sn="",gi="srgb",dr="srgb-linear",ys="linear",it="srgb";var lr=7680;var Ph=519,Od=512,Ud=513,zd=514,ul=515,Hd=516,Vd=517,dl=518,Wd=519,Ih=35044;var ec="300 es",Bi=2e3,xs=2001;function tc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function d_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function $r(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Gd(){let t=$r("canvas");return t.style.display="block",t}var Yu={},qr=null;function ic(...t){let e="THREE."+t.shift();qr?qr("log",e,...t):console.log(e,...t)}function Te(...t){let e="THREE."+t.shift();qr?qr("warn",e,...t):console.warn(e,...t)}function De(...t){let e="THREE."+t.shift();qr?qr("error",e,...t):console.error(e,...t)}function Yr(...t){let e=t.join(" ");e in Yu||(Yu[e]=!0,Te(...t))}function Xd(t,e,i){return new Promise(function(n,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var vn=class{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(i)===-1&&n[e].push(i)}hasEventListener(e,i){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(i)!==-1}removeEventListener(e,i){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(i);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let i=this._listeners;if(i===void 0)return;let n=i[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nh=Math.PI/180,Yo=180/Math.PI;function $s(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[i&63|128]+Zt[i>>8&255]+"-"+Zt[i>>16&255]+Zt[i>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Ye(t,e,i){return Math.max(e,Math.min(i,t))}function f_(t,e){return(t%e+e)%e}function rh(t,e,i){return(1-i)*t+i*e}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var qe=class t{constructor(e=0,i=0){t.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,n=this.y,r=e.elements;return this.x=r[0]*i+r[3]*n+r[6],this.y=r[1]*i+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ye(this.x,e.x,i.x),this.y=Ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ye(this.x,e,i),this.y=Ye(this.y,e,i),this}clampLength(e,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(e)/i;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,n=this.y-e.y;return i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let n=Math.cos(i),r=Math.sin(i),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qi=class{constructor(e=0,i=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=n,this._w=r}static slerpFlat(e,i,n,r,s,o,a){let h=n[r+0],l=n[r+1],u=n[r+2],c=n[r+3],d=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a<=0){e[i+0]=h,e[i+1]=l,e[i+2]=u,e[i+3]=c;return}if(a>=1){e[i+0]=d,e[i+1]=f,e[i+2]=m,e[i+3]=g;return}if(c!==g||h!==d||l!==f||u!==m){let _=h*d+l*f+u*m+c*g;_<0&&(d=-d,f=-f,m=-m,g=-g,_=-_);let p=1-a;if(_<.9995){let b=Math.acos(_),w=Math.sin(b);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w,h=h*p+d*a,l=l*p+f*a,u=u*p+m*a,c=c*p+g*a}else{h=h*p+d*a,l=l*p+f*a,u=u*p+m*a,c=c*p+g*a;let b=1/Math.sqrt(h*h+l*l+u*u+c*c);h*=b,l*=b,u*=b,c*=b}}e[i]=h,e[i+1]=l,e[i+2]=u,e[i+3]=c}static multiplyQuaternionsFlat(e,i,n,r,s,o){let a=n[r],h=n[r+1],l=n[r+2],u=n[r+3],c=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[i]=a*m+u*c+h*f-l*d,e[i+1]=h*m+u*d+l*c-a*f,e[i+2]=l*m+u*f+a*d-h*c,e[i+3]=u*m-a*c-h*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,n,r){return this._x=e,this._y=i,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,h=Math.sin,l=a(n/2),u=a(r/2),c=a(s/2),d=h(n/2),f=h(r/2),m=h(s/2);switch(o){case"XYZ":this._x=d*u*c+l*f*m,this._y=l*f*c-d*u*m,this._z=l*u*m+d*f*c,this._w=l*u*c-d*f*m;break;case"YXZ":this._x=d*u*c+l*f*m,this._y=l*f*c-d*u*m,this._z=l*u*m-d*f*c,this._w=l*u*c+d*f*m;break;case"ZXY":this._x=d*u*c-l*f*m,this._y=l*f*c+d*u*m,this._z=l*u*m+d*f*c,this._w=l*u*c-d*f*m;break;case"ZYX":this._x=d*u*c-l*f*m,this._y=l*f*c+d*u*m,this._z=l*u*m-d*f*c,this._w=l*u*c+d*f*m;break;case"YZX":this._x=d*u*c+l*f*m,this._y=l*f*c+d*u*m,this._z=l*u*m-d*f*c,this._w=l*u*c-d*f*m;break;case"XZY":this._x=d*u*c-l*f*m,this._y=l*f*c-d*u*m,this._z=l*u*m+d*f*c,this._w=l*u*c+d*f*m;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){let n=i/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let i=e.elements,n=i[0],r=i[4],s=i[8],o=i[1],a=i[5],h=i[9],l=i[2],u=i[6],c=i[10],d=n+a+c;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-h)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>c){let f=2*Math.sqrt(1+n-a-c);this._w=(u-h)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>c){let f=2*Math.sqrt(1+a-n-c);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(h+u)/f}else{let f=2*Math.sqrt(1+c-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(h+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let n=e.dot(i)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,i){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,i/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){let n=e._x,r=e._y,s=e._z,o=e._w,a=i._x,h=i._y,l=i._z,u=i._w;return this._x=n*u+o*a+r*l-s*h,this._y=r*u+o*h+s*a-n*l,this._z=s*u+o*l+n*h-r*a,this._w=o*u-n*a-r*h-s*l,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let h=1-i;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);h=Math.sin(h*l)/u,i=Math.sin(i*l)/u,this._x=this._x*h+n*i,this._y=this._y*h+r*i,this._z=this._z*h+s*i,this._w=this._w*h+o*i,this._onChangeCallback()}else this._x=this._x*h+n*i,this._y=this._y*h+r*i,this._z=this._z*h+s*i,this._w=this._w*h+o*i,this.normalize();return this}slerpQuaternions(e,i,n){return this.copy(e).slerp(i,n)}random(){let e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(i),s*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class t{constructor(e=0,i=0,n=0){t.prototype.isVector3=!0,this.x=e,this.y=i,this.z=n}set(e,i,n){return n===void 0&&(n=this.z),this.x=e,this.y=i,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ku.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*i+s[3]*n+s[6]*r,this.y=s[1]*i+s[4]*n+s[7]*r,this.z=s[2]*i+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*i+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*i+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*i+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let i=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,h=e.w,l=2*(o*r-a*n),u=2*(a*i-s*r),c=2*(s*n-o*i);return this.x=i+h*l+o*c-a*u,this.y=n+h*u+a*l-s*c,this.z=r+h*c+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*i+s[4]*n+s[8]*r,this.y=s[1]*i+s[5]*n+s[9]*r,this.z=s[2]*i+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ye(this.x,e.x,i.x),this.y=Ye(this.y,e.y,i.y),this.z=Ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ye(this.x,e,i),this.y=Ye(this.y,e,i),this.z=Ye(this.z,e,i),this}clampLength(e,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let n=e.x,r=e.y,s=e.z,o=i.x,a=i.y,h=i.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let n=e.dot(this)/i;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(e)/i;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return i*i+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,n){let r=Math.sin(i)*e;return this.x=r*Math.sin(n),this.y=Math.cos(i)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,n){return this.x=e*Math.sin(i),this.y=n,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=n,this.z=r,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(e),this.y=i,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sh=new V,Ku=new qi,Ue=class t{constructor(e,i,n,r,s,o,a,h,l){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,n,r,s,o,a,h,l)}set(e,i,n,r,s,o,a,h,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=i,u[4]=s,u[5]=h,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(e,i,n){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let n=e.elements,r=i.elements,s=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],u=n[4],c=n[7],d=n[2],f=n[5],m=n[8],g=r[0],_=r[3],p=r[6],b=r[1],w=r[4],x=r[7],E=r[2],T=r[5],A=r[8];return s[0]=o*g+a*b+h*E,s[3]=o*_+a*w+h*T,s[6]=o*p+a*x+h*A,s[1]=l*g+u*b+c*E,s[4]=l*_+u*w+c*T,s[7]=l*p+u*x+c*A,s[2]=d*g+f*b+m*E,s[5]=d*_+f*w+m*T,s[8]=d*p+f*x+m*A,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8];return i*o*u-i*a*l-n*s*u+n*a*h+r*s*l-r*o*h}invert(){let e=this.elements,i=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],c=u*o-a*l,d=a*h-u*s,f=l*s-o*h,m=i*c+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=c*g,e[1]=(r*l-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*i-r*h)*g,e[5]=(r*s-a*i)*g,e[6]=f*g,e[7]=(n*h-l*i)*g,e[8]=(o*i-n*s)*g,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,n,r,s,o,a){let h=Math.cos(s),l=Math.sin(s);return this.set(n*h,n*l,-n*(h*o+l*a)+o+e,-r*l,r*h,-r*(-l*o+h*a)+a+i,0,0,1),this}scale(e,i){return this.premultiply(oh.makeScale(e,i)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,i){return this.premultiply(oh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,n=e.elements;for(let r=0;r<9;r++)if(i[r]!==n[r])return!1;return!0}fromArray(e,i=0){for(let n=0;n<9;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){let n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oh=new Ue,Zu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p_(){let t={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sn?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[dr]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),t}var Ze=p_();function mn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Ir,Ko=class{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=$r("canvas")),Ir.width=e.width,Ir.height=e.height;let r=Ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let i=$r("canvas");i.width=e.width,i.height=e.height;let n=i.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mn(s[o]/255)*255;return n.putImageData(r,0,0),i}else if(e.data){let i=e.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(mn(i[n]/255)*255):i[n]=mn(i[n]);return{data:i,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m_=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ah(r[o].image)):s.push(ah(r[o]))}else s=ah(r);n.url=s}return i||(e.images[this.uuid]=n),n}};function ah(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ko.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var __=0,lh=new V,Xt=class t extends vn{constructor(e=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,n=Xi,r=Xi,s=Qe,o=Vn,a=Yt,h=qt,l=t.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=$s(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let n=e[i];if(n===void 0){Te(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){Te(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=$h;Xt.DEFAULT_ANISOTROPY=1;var _t=class t{constructor(e=0,i=0,n=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,n,r){return this.x=e,this.y=i,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*i+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*i+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*i+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*i+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,n,r,s,h=e.elements,l=h[0],u=h[4],c=h[8],d=h[1],f=h[5],m=h[9],g=h[2],_=h[6],p=h[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(m+_)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let w=(l+1)/2,x=(f+1)/2,E=(p+1)/2,T=(u+d)/4,A=(c+g)/4,H=(m+_)/4;return w>x&&w>E?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=T/n,s=A/n):x>E?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=H/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=A/s,r=H/s),this.set(n,r,s,i),this}let b=Math.sqrt((_-m)*(_-m)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(_-m)/b,this.y=(c-g)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ye(this.x,e.x,i.x),this.y=Ye(this.y,e.y,i.y),this.z=Ye(this.z,e.z,i.z),this.w=Ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ye(this.x,e,i),this.y=Ye(this.y,e,i),this.z=Ye(this.z,e,i),this.w=Ye(this.w,e,i),this}clampLength(e,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this.w=e.w+(i.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends vn{constructor(e=1,i=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=n.depth,this.scissor=new _t(0,0,e,i),this.scissorTest=!1,this.viewport=new _t(0,0,e,i);let r={width:e,height:i,depth:n.depth},s=new Xt(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let i={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,n=1){if(this.width!==e||this.height!==i||this.depth!==n){this.width=e,this.height=i,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=i,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let r=Object.assign({},e.textures[i].image);this.textures[i].source=new Kr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Zo{constructor(e=1,i=1,n={}){super(e,i,n),this.isWebGLRenderTarget=!0}},bs=class extends Xt{constructor(e=null,i=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Xt{constructor(e=null,i=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(e=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,n=e.count;i<n;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){let n=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(i===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Li):Li.fromBufferAttribute(s,o),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,n;return e.normal.x>0?(i=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),i<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Co.subVectors(this.max,ms),Lr.subVectors(e.a,ms),Dr.subVectors(e.b,ms),Nr.subVectors(e.c,ms),Tn.subVectors(Dr,Lr),An.subVectors(Nr,Dr),tr.subVectors(Lr,Nr);let i=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-tr.z,tr.y,Tn.z,0,-Tn.x,An.z,0,-An.x,tr.z,0,-tr.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-tr.y,tr.x,0];return!hh(i,Lr,Dr,Nr,Co)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,Lr,Dr,Nr,Co))?!1:(Eo.crossVectors(Tn,An),i=[Eo.x,Eo.y,Eo.z],hh(i,Lr,Dr,Nr,Co))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hn=[new V,new V,new V,new V,new V,new V,new V,new V],Li=new V,Mo=new Bn,Lr=new V,Dr=new V,Nr=new V,Tn=new V,An=new V,tr=new V,ms=new V,Co=new V,Eo=new V,ir=new V;function hh(t,e,i,n,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);let a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),h=e.dot(ir),l=i.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>a)return!1}return!0}var g_=new Bn,_s=new V,ch=new V,Zr=class{constructor(e=new V,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){let n=this.center;i!==void 0?n.copy(i):g_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){let n=this.center.distanceToSquared(e);return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);let i=_s.lengthSq();if(i>this.radius*this.radius){let n=Math.sqrt(i),r=(n-this.radius)*.5;this.center.addScaledVector(_s,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(ch)),this.expandByPoint(_s.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cn=new V,uh=new V,To=new V,Rn=new V,dh=new V,Ao=new V,fh=new V,jo=class{constructor(e=new V,i=new V(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);let n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let i=cn.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,i),cn.distanceToSquared(e))}distanceSqToSegment(e,i,n,r){uh.copy(e).add(i).multiplyScalar(.5),To.copy(i).sub(e).normalize(),Rn.copy(this.origin).sub(uh);let s=e.distanceTo(i)*.5,o=-this.direction.dot(To),a=Rn.dot(this.direction),h=-Rn.dot(To),l=Rn.lengthSq(),u=Math.abs(1-o*o),c,d,f,m;if(u>0)if(c=o*h-a,d=o*a-h,m=s*u,c>=0)if(d>=-m)if(d<=m){let g=1/u;c*=g,d*=g,f=c*(c+o*d+2*a)+d*(o*c+d+2*h)+l}else d=s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*h)+l;else d=-s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*h)+l;else d<=-m?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-h),s),f=-c*c+d*(d+2*h)+l):d<=m?(c=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+l):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-h),s),f=-c*c+d*(d+2*h)+l);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(uh).addScaledVector(To,d),f}intersectSphere(e,i){cn.subVectors(e.center,this.origin);let n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,i):this.at(a,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?n:null}intersectPlane(e,i){let n=this.distanceToPlane(e);return n===null?null:this.at(n,i)}intersectsPlane(e){let i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let n,r,s,o,a,h,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-d.z)*c,h=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,h=(e.min.z-d.z)*c),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,i)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,i,n,r,s){dh.subVectors(i,e),Ao.subVectors(n,e),fh.crossVectors(dh,Ao);let o=this.direction.dot(fh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,e);let h=a*this.direction.dot(Ao.crossVectors(Rn,Ao));if(h<0)return null;let l=a*this.direction.dot(dh.cross(Rn));if(l<0||h+l>o)return null;let u=-a*Rn.dot(fh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class t{constructor(e,i,n,r,s,o,a,h,l,u,c,d,f,m,g,_){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,n,r,s,o,a,h,l,u,c,d,f,m,g,_)}set(e,i,n,r,s,o,a,h,l,u,c,d,f,m,g,_){let p=this.elements;return p[0]=e,p[4]=i,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(e){let i=this.elements,n=e.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,n){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,i,n){return this.set(e.x,i.x,n.x,0,e.y,i.y,n.y,0,e.z,i.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let i=this.elements,n=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*o,i[9]=n[9]*o,i[10]=n[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),l=Math.sin(r),u=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*c,m=a*u,g=a*c;i[0]=h*u,i[4]=-h*c,i[8]=l,i[1]=f+m*l,i[5]=d-g*l,i[9]=-a*h,i[2]=g-d*l,i[6]=m+f*l,i[10]=o*h}else if(e.order==="YXZ"){let d=h*u,f=h*c,m=l*u,g=l*c;i[0]=d+g*a,i[4]=m*a-f,i[8]=o*l,i[1]=o*c,i[5]=o*u,i[9]=-a,i[2]=f*a-m,i[6]=g+d*a,i[10]=o*h}else if(e.order==="ZXY"){let d=h*u,f=h*c,m=l*u,g=l*c;i[0]=d-g*a,i[4]=-o*c,i[8]=m+f*a,i[1]=f+m*a,i[5]=o*u,i[9]=g-d*a,i[2]=-o*l,i[6]=a,i[10]=o*h}else if(e.order==="ZYX"){let d=o*u,f=o*c,m=a*u,g=a*c;i[0]=h*u,i[4]=m*l-f,i[8]=d*l+g,i[1]=h*c,i[5]=g*l+d,i[9]=f*l-m,i[2]=-l,i[6]=a*h,i[10]=o*h}else if(e.order==="YZX"){let d=o*h,f=o*l,m=a*h,g=a*l;i[0]=h*u,i[4]=g-d*c,i[8]=m*c+f,i[1]=c,i[5]=o*u,i[9]=-a*u,i[2]=-l*u,i[6]=f*c+m,i[10]=d-g*c}else if(e.order==="XZY"){let d=o*h,f=o*l,m=a*h,g=a*l;i[0]=h*u,i[4]=-c,i[8]=l*u,i[1]=d*c+g,i[5]=o*u,i[9]=f*c-m,i[2]=m*c-f,i[6]=a*u,i[10]=g*c+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,S_)}lookAt(e,i,n){let r=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Pn.crossVectors(n,mi),Pn.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Pn.crossVectors(n,mi)),Pn.normalize(),Ro.crossVectors(mi,Pn),r[0]=Pn.x,r[4]=Ro.x,r[8]=mi.x,r[1]=Pn.y,r[5]=Ro.y,r[9]=mi.y,r[2]=Pn.z,r[6]=Ro.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let n=e.elements,r=i.elements,s=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],u=n[1],c=n[5],d=n[9],f=n[13],m=n[2],g=n[6],_=n[10],p=n[14],b=n[3],w=n[7],x=n[11],E=n[15],T=r[0],A=r[4],H=r[8],y=r[12],M=r[1],P=r[5],X=r[9],R=r[13],N=r[2],k=r[6],L=r[10],D=r[14],O=r[3],J=r[7],ee=r[11],ne=r[15];return s[0]=o*T+a*M+h*N+l*O,s[4]=o*A+a*P+h*k+l*J,s[8]=o*H+a*X+h*L+l*ee,s[12]=o*y+a*R+h*D+l*ne,s[1]=u*T+c*M+d*N+f*O,s[5]=u*A+c*P+d*k+f*J,s[9]=u*H+c*X+d*L+f*ee,s[13]=u*y+c*R+d*D+f*ne,s[2]=m*T+g*M+_*N+p*O,s[6]=m*A+g*P+_*k+p*J,s[10]=m*H+g*X+_*L+p*ee,s[14]=m*y+g*R+_*D+p*ne,s[3]=b*T+w*M+x*N+E*O,s[7]=b*A+w*P+x*k+E*J,s[11]=b*H+w*X+x*L+E*ee,s[15]=b*y+w*R+x*D+E*ne,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],h=e[9],l=e[13],u=e[2],c=e[6],d=e[10],f=e[14],m=e[3],g=e[7],_=e[11],p=e[15],b=h*f-l*d,w=a*f-l*c,x=a*d-h*c,E=o*f-l*u,T=o*d-h*u,A=o*c-a*u;return i*(g*b-_*w+p*x)-n*(m*b-_*E+p*T)+r*(m*w-g*E+p*A)-s*(m*x-g*T+_*A)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=i,r[14]=n),this}invert(){let e=this.elements,i=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],c=e[9],d=e[10],f=e[11],m=e[12],g=e[13],_=e[14],p=e[15],b=c*_*l-g*d*l+g*h*f-a*_*f-c*h*p+a*d*p,w=m*d*l-u*_*l-m*h*f+o*_*f+u*h*p-o*d*p,x=u*g*l-m*c*l+m*a*f-o*g*f-u*a*p+o*c*p,E=m*c*h-u*g*h-m*a*d+o*g*d+u*a*_-o*c*_,T=i*b+n*w+r*x+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(g*d*s-c*_*s-g*r*f+n*_*f+c*r*p-n*d*p)*A,e[2]=(a*_*s-g*h*s+g*r*l-n*_*l-a*r*p+n*h*p)*A,e[3]=(c*h*s-a*d*s-c*r*l+n*d*l+a*r*f-n*h*f)*A,e[4]=w*A,e[5]=(u*_*s-m*d*s+m*r*f-i*_*f-u*r*p+i*d*p)*A,e[6]=(m*h*s-o*_*s-m*r*l+i*_*l+o*r*p-i*h*p)*A,e[7]=(o*d*s-u*h*s+u*r*l-i*d*l-o*r*f+i*h*f)*A,e[8]=x*A,e[9]=(m*c*s-u*g*s-m*n*f+i*g*f+u*n*p-i*c*p)*A,e[10]=(o*g*s-m*a*s+m*n*l-i*g*l-o*n*p+i*a*p)*A,e[11]=(u*a*s-o*c*s-u*n*l+i*c*l+o*n*f-i*a*f)*A,e[12]=E*A,e[13]=(u*g*r-m*c*r+m*n*d-i*g*d-u*n*_+i*c*_)*A,e[14]=(m*a*r-o*g*r-m*n*h+i*g*h+o*n*_-i*a*_)*A,e[15]=(o*c*r-u*a*r+u*n*h-i*c*h-o*n*d+i*a*d)*A,this}scale(e){let i=this.elements,n=e.x,r=e.y,s=e.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(e,i,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),n=Math.sin(e);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let n=Math.cos(i),r=Math.sin(i),s=1-n,o=e.x,a=e.y,h=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*h,l*h+r*a,0,l*a+r*h,u*a+n,u*h-r*o,0,l*h-r*a,u*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(e,i,n){return this.set(e,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,i,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,i,r,1,0,0,0,0,1),this}compose(e,i,n){let r=this.elements,s=i._x,o=i._y,a=i._z,h=i._w,l=s+s,u=o+o,c=a+a,d=s*l,f=s*u,m=s*c,g=o*u,_=o*c,p=a*c,b=h*l,w=h*u,x=h*c,E=n.x,T=n.y,A=n.z;return r[0]=(1-(g+p))*E,r[1]=(f+x)*E,r[2]=(m-w)*E,r[3]=0,r[4]=(f-x)*T,r[5]=(1-(d+p))*T,r[6]=(_+b)*T,r[7]=0,r[8]=(m+w)*A,r[9]=(_-b)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,i,n){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),i.identity(),this;let s=Br.set(r[0],r[1],r[2]).length(),o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Di.copy(this);let l=1/s,u=1/o,c=1/a;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=c,Di.elements[9]*=c,Di.elements[10]*=c,i.setFromRotationMatrix(Di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,i,n,r,s,o,a=Bi,h=!1){let l=this.elements,u=2*s/(i-e),c=2*s/(n-r),d=(i+e)/(i-e),f=(n+r)/(n-r),m,g;if(h)m=s/(o-s),g=o*s/(o-s);else if(a===Bi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,i,n,r,s,o,a=Bi,h=!1){let l=this.elements,u=2/(i-e),c=2/(n-r),d=-(i+e)/(i-e),f=-(n+r)/(n-r),m,g;if(h)m=1/(o-s),g=o/(o-s);else if(a===Bi)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===xs)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=c,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let i=this.elements,n=e.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(e,i=0){for(let n=0;n<16;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){let n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e[i+9]=n[9],e[i+10]=n[10],e[i+11]=n[11],e[i+12]=n[12],e[i+13]=n[13],e[i+14]=n[14],e[i+15]=n[15],e}},Br=new V,Di=new Tt,v_=new V(0,0,0),S_=new V(1,1,1),Pn=new V,Ro=new V,mi=new V,ju=new Tt,Qu=new qi,Yi=class t{constructor(e=0,i=0,n=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,r=this._order){return this._x=e,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],h=r[1],l=r[5],u=r[9],c=r[2],d=r[6],f=r[10];switch(i){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},y_=0,ed=new V,kr=new qi,un=new Tt,Po=new V,gs=new V,x_=new V,b_=new qi,td=new V(1,0,0),id=new V(0,1,0),nd=new V(0,0,1),rd={type:"added"},w_={type:"removed"},Fr={type:"childadded",child:null},ph={type:"childremoved",child:null},ci=class t extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new V,i=new Yi,n=new qi,r=new V(1,1,1);function s(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ue}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return kr.setFromAxisAngle(e,i),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,i){return kr.setFromAxisAngle(e,i),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,i){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?Po.copy(e):Po.set(e,i,n);let r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(gs,Po,this.up):un.lookAt(Po,gs,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(un),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(w_),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,i);if(o!==void 0)return o}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){let c=h[l];s(e.shapes,c)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(s(e.materials,this.material[h]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];r.animations.push(s(e.animations,h))}}if(i){let a=o(e.geometries),h=o(e.materials),l=o(e.textures),u=o(e.images),c=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let h=[];for(let l in a){let u=a[l];delete u.metadata,h.push(u)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};ci.DEFAULT_UP=new V(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new V,dn=new V,mh=new V,fn=new V,Or=new V,Ur=new V,sd=new V,_h=new V,gh=new V,vh=new V,Sh=new _t,yh=new _t,xh=new _t,Dn=class t{constructor(e=new V,i=new V,n=new V){this.a=e,this.b=i,this.c=n}static getNormal(e,i,n,r){r.subVectors(n,i),Ni.subVectors(e,i),r.cross(Ni);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,i,n,r,s){Ni.subVectors(r,i),dn.subVectors(n,i),mh.subVectors(e,i);let o=Ni.dot(Ni),a=Ni.dot(dn),h=Ni.dot(mh),l=dn.dot(dn),u=dn.dot(mh),c=o*l-a*a;if(c===0)return s.set(0,0,0),null;let d=1/c,f=(l*h-a*u)*d,m=(o*u-a*h)*d;return s.set(1-f-m,m,f)}static containsPoint(e,i,n,r){return this.getBarycoord(e,i,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,i,n,r,s,o,a,h){return this.getBarycoord(e,i,n,r,fn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,fn.x),h.addScaledVector(o,fn.y),h.addScaledVector(a,fn.z),h)}static getInterpolatedAttribute(e,i,n,r,s,o){return Sh.setScalar(0),yh.setScalar(0),xh.setScalar(0),Sh.fromBufferAttribute(e,i),yh.fromBufferAttribute(e,n),xh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sh,s.x),o.addScaledVector(yh,s.y),o.addScaledVector(xh,s.z),o}static isFrontFacing(e,i,n,r){return Ni.subVectors(n,i),dn.subVectors(e,i),Ni.cross(dn).dot(r)<0}set(e,i,n){return this.a.copy(e),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(e,i,n,r){return this.a.copy(e[i]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,i,n,r){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ni.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return t.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,n,r,s){return t.getInterpolation(e,this.a,this.b,this.c,i,n,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let n=this.a,r=this.b,s=this.c,o,a;Or.subVectors(r,n),Ur.subVectors(s,n),_h.subVectors(e,n);let h=Or.dot(_h),l=Ur.dot(_h);if(h<=0&&l<=0)return i.copy(n);gh.subVectors(e,r);let u=Or.dot(gh),c=Ur.dot(gh);if(u>=0&&c<=u)return i.copy(r);let d=h*c-u*l;if(d<=0&&h>=0&&u<=0)return o=h/(h-u),i.copy(n).addScaledVector(Or,o);vh.subVectors(e,s);let f=Or.dot(vh),m=Ur.dot(vh);if(m>=0&&f<=m)return i.copy(s);let g=f*l-h*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),i.copy(n).addScaledVector(Ur,a);let _=u*m-f*c;if(_<=0&&c-u>=0&&f-m>=0)return sd.subVectors(s,r),a=(c-u)/(c-u+(f-m)),i.copy(r).addScaledVector(sd,a);let p=1/(_+g+d);return o=g*p,a=d*p,i.copy(n).addScaledVector(Or,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Io={h:0,s:0,l:0};function bh(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var et=class{constructor(e,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,n)}set(e,i,n){if(i===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,i,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,i),this}setRGB(e,i,n,r=Ze.workingColorSpace){return this.r=e,this.g=i,this.b=n,Ze.colorSpaceToWorking(this,r),this}setHSL(e,i,n,r=Ze.workingColorSpace){if(e=f_(e,1),i=Ye(i,0,1),n=Ye(n,0,1),i===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+i):n+i-n*i,o=2*n-s;this.r=bh(o,s,e+1/3),this.g=bh(o,s,e),this.b=bh(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,i=gi){function n(s){s!==void 0&&parseFloat(s)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:Te("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(o===6)return this.setHex(parseInt(s,16),i);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){let n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,i):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Ze.workingToColorSpace(Jt.copy(this),e),Math.round(Ye(Jt.r*255,0,255))*65536+Math.round(Ye(Jt.g*255,0,255))*256+Math.round(Ye(Jt.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ze.workingColorSpace){Ze.workingToColorSpace(Jt.copy(this),i);let n=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),h,l,u=(a+o)/2;if(a===o)h=0,l=0;else{let c=o-a;switch(l=u<=.5?c/(o+a):c/(2-o-a),o){case n:h=(r-s)/c+(r<s?6:0);break;case r:h=(s-n)/c+2;break;case s:h=(n-r)/c+4;break}h/=6}return e.h=h,e.s=l,e.l=u,e}getRGB(e,i=Ze.workingColorSpace){return Ze.workingToColorSpace(Jt.copy(this),i),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=gi){Ze.workingToColorSpace(Jt.copy(this),e);let i=Jt.r,n=Jt.g,r=Jt.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,i,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+i,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,n){return this.r=e.r+(i.r-e.r)*n,this.g=e.g+(i.g-e.g)*n,this.b=e.b+(i.b-e.b)*n,this}lerpHSL(e,i){this.getHSL(In),e.getHSL(Io);let n=rh(In.h,Io.h,i),r=rh(In.s,Io.s,i),s=rh(In.l,Io.l,i);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let i=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*i+s[3]*n+s[6]*r,this.g=s[1]*i+s[4]*n+s[7]*r,this.b=s[2]*i+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new et;et.NAMES=$d;var M_=0,fr=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=gn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Xo,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let i in e){let n=e[i];if(n===void 0){Te(`Material: parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){Te(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[i]=n}}toJSON(e){let i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let h=s[a];delete h.metadata,o.push(h)}return o}if(i){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let i=e.clippingPlanes,n=null;if(i!==null){let r=i.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=i[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ms=class extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new V,Lo=new qe,C_=0,vi=class{constructor(e,i,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C_++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,n){e*=this.itemSize,n*=i.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=i.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)Lo.fromBufferAttribute(this,i),Lo.applyMatrix3(e),this.setXY(i,Lo.x,Lo.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)Et.fromBufferAttribute(this,i),Et.applyMatrix3(e),this.setXYZ(i,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let i=0,n=this.count;i<n;i++)Et.fromBufferAttribute(this,i),Et.applyMatrix4(e),this.setXYZ(i,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let i=0,n=this.count;i<n;i++)Et.fromBufferAttribute(this,i),Et.applyNormalMatrix(e),this.setXYZ(i,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let i=0,n=this.count;i<n;i++)Et.fromBufferAttribute(this,i),Et.transformDirection(e),this.setXYZ(i,Et.x,Et.y,Et.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let n=this.array[e*this.itemSize+i];return this.normalized&&(n=ps(n,this.array)),n}setComponent(e,i,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+i]=n,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ps(i,this.array)),i}setX(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ps(i,this.array)),i}setY(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ps(i,this.array)),i}setZ(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ps(i,this.array)),i}setW(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,n){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),n=li(n,this.array)),this.array[e+0]=i,this.array[e+1]=n,this}setXYZ(e,i,n,r){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),n=li(n,this.array),r=li(r,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,i,n,r,s){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),n=li(n,this.array),r=li(r,this.array),s=li(s,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}};var Cs=class extends vi{constructor(e,i,n){super(new Uint16Array(e),i,n)}};var Es=class extends vi{constructor(e,i,n){super(new Uint32Array(e),i,n)}};var Ei=class extends vi{constructor(e,i,n){super(new Float32Array(e),i,n)}},E_=0,Ci=new Tt,wh=new ci,zr=new V,_i=new Bn,vs=new Bn,Ft=new V,Ki=class t extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?Es:Cs)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,n=0){this.groups.push({start:e,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,n){return Ci.makeTranslation(e,i,n),this.applyMatrix4(Ci),this}scale(e,i,n){return Ci.makeScale(e,i,n),this.applyMatrix4(Ci),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ei(n,3))}else{let n=Math.min(e.length,i.count);for(let r=0;r<n;r++){let s=e[r];i.setXYZ(r,s.x,s.y,s.z||0)}e.length>i.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let n=0,r=i.length;n<r;n++){let s=i[n];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let s=0,o=i.length;s<o;s++){let a=i[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(_i.min,vs.min),_i.expandByPoint(Ft),Ft.addVectors(_i.max,vs.max),_i.expandByPoint(Ft)):(_i.expandByPoint(vs.min),_i.expandByPoint(vs.max))}_i.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(i)for(let s=0,o=i.length;s<o;s++){let a=i[s],h=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ft.fromBufferAttribute(a,l),h&&(zr.fromBufferAttribute(e,l),Ft.add(zr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=i.position,r=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],h=[];for(let H=0;H<n.count;H++)a[H]=new V,h[H]=new V;let l=new V,u=new V,c=new V,d=new qe,f=new qe,m=new qe,g=new V,_=new V;function p(H,y,M){l.fromBufferAttribute(n,H),u.fromBufferAttribute(n,y),c.fromBufferAttribute(n,M),d.fromBufferAttribute(s,H),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,M),u.sub(l),c.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(c,-f.y).multiplyScalar(P),_.copy(c).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[H].add(g),a[y].add(g),a[M].add(g),h[H].add(_),h[y].add(_),h[M].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let H=0,y=b.length;H<y;++H){let M=b[H],P=M.start,X=M.count;for(let R=P,N=P+X;R<N;R+=3)p(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let w=new V,x=new V,E=new V,T=new V;function A(H){E.fromBufferAttribute(r,H),T.copy(E);let y=a[H];w.copy(y),w.sub(E.multiplyScalar(E.dot(y))).normalize(),x.crossVectors(T,y);let P=x.dot(h[H])<0?-1:1;o.setXYZW(H,w.x,w.y,w.z,P)}for(let H=0,y=b.length;H<y;++H){let M=b[H],P=M.start,X=M.count;for(let R=P,N=P+X;R<N;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new V,s=new V,o=new V,a=new V,h=new V,l=new V,u=new V,c=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(i,m),s.fromBufferAttribute(i,g),o.fromBufferAttribute(i,_),u.subVectors(o,s),c.subVectors(r,s),u.cross(c),a.fromBufferAttribute(n,m),h.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),a.add(u),h.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,f=i.count;d<f;d+=3)r.fromBufferAttribute(i,d+0),s.fromBufferAttribute(i,d+1),o.fromBufferAttribute(i,d+2),u.subVectors(o,s),c.subVectors(r,s),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,n=e.count;i<n;i++)Ft.fromBufferAttribute(e,i),Ft.normalize(),e.setXYZ(i,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,h){let l=a.array,u=a.itemSize,c=a.normalized,d=new l.constructor(h.length*u),f=0,m=0;for(let g=0,_=h.length;g<_;g++){a.isInterleavedBufferAttribute?f=h[g]*a.data.stride+a.offset:f=h[g]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new vi(d,u,c)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new t,n=this.index.array,r=this.attributes;for(let a in r){let h=r[a],l=e(h,n);i.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let h=[],l=s[a];for(let u=0,c=l.length;u<c;u++){let d=l[u],f=e(d,n);h.push(f)}i.morphAttributes[a]=h}i.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];i.addGroup(l.start,l.count,l.materialIndex)}return i}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let n=this.attributes;for(let h in n){let l=n[h];e.data.attributes[h]=l.toJSON(e.data)}let r={},s=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],u=[];for(let c=0,d=l.length;c<d;c++){let f=l[c];u.push(f.toJSON(e.data))}u.length>0&&(r[h]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(i))}let s=e.morphAttributes;for(let l in s){let u=[],c=s[l];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(i));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let c=o[l];this.addGroup(c.start,c.count,c.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},od=new Tt,nr=new jo,Do=new Zr,ad=new V,No=new V,Bo=new V,ko=new V,Mh=new V,Fo=new V,ld=new V,Oo=new V,Ot=class extends ci{constructor(e=new Ki,i=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let r=i[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,i){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;i.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let h=0,l=s.length;h<l;h++){let u=a[h],c=s[h];u!==0&&(Mh.fromBufferAttribute(c,e),o?Fo.addScaledVector(Mh,u):Fo.addScaledVector(Mh.sub(i),u))}i.add(Fo)}return i}raycast(e,i){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Do.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Do,ad)===null||nr.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(s).invert(),nr.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,i,nr)))}_computeIntersections(e,i,n){let r,s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){let _=d[m],p=o[_.materialIndex],b=Math.max(_.start,f.start),w=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let x=b,E=w;x<E;x+=3){let T=a.getX(x),A=a.getX(x+1),H=a.getX(x+2);r=Uo(this,p,e,n,l,u,c,T,A,H),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,i.push(r))}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){let b=a.getX(_),w=a.getX(_+1),x=a.getX(_+2);r=Uo(this,o,e,n,l,u,c,b,w,x),r&&(r.faceIndex=Math.floor(_/3),i.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){let _=d[m],p=o[_.materialIndex],b=Math.max(_.start,f.start),w=Math.min(h.count,Math.min(_.start+_.count,f.start+f.count));for(let x=b,E=w;x<E;x+=3){let T=x,A=x+1,H=x+2;r=Uo(this,p,e,n,l,u,c,T,A,H),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,i.push(r))}}else{let m=Math.max(0,f.start),g=Math.min(h.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){let b=_,w=_+1,x=_+2;r=Uo(this,o,e,n,l,u,c,b,w,x),r&&(r.faceIndex=Math.floor(_/3),i.push(r))}}}};function T_(t,e,i,n,r,s,o,a){let h;if(e.side===ti?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,e.side===_n,a),h===null)return null;Oo.copy(a),Oo.applyMatrix4(t.matrixWorld);let l=i.ray.origin.distanceTo(Oo);return l<i.near||l>i.far?null:{distance:l,point:Oo.clone(),object:t}}function Uo(t,e,i,n,r,s,o,a,h,l){t.getVertexPosition(a,No),t.getVertexPosition(h,Bo),t.getVertexPosition(l,ko);let u=T_(t,e,i,n,No,Bo,ko,ld);if(u){let c=new V;Dn.getBarycoord(ld,No,Bo,ko,c),r&&(u.uv=Dn.getInterpolatedAttribute(r,a,h,l,c,new qe)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,a,h,l,c,new qe)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,h,l,c,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:h,c:l,normal:new V,materialIndex:0};Dn.getNormal(No,Bo,ko,d.normal),u.face=d,u.barycoord=c}return u}var Jr=class t extends Ki{constructor(e=1,i=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let h=[],l=[],u=[],c=[],d=0,f=0;m("z","y","x",-1,-1,n,i,e,o,s,0),m("z","y","x",1,-1,n,i,-e,o,s,1),m("x","z","y",1,1,e,n,i,r,o,2),m("x","z","y",1,-1,e,n,-i,r,o,3),m("x","y","z",1,-1,e,i,n,r,s,4),m("x","y","z",-1,-1,e,i,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Ei(l,3)),this.setAttribute("normal",new Ei(u,3)),this.setAttribute("uv",new Ei(c,2));function m(g,_,p,b,w,x,E,T,A,H,y){let M=x/A,P=E/H,X=x/2,R=E/2,N=T/2,k=A+1,L=H+1,D=0,O=0,J=new V;for(let ee=0;ee<L;ee++){let ne=ee*P-R;for(let Ie=0;Ie<k;Ie++){let Le=Ie*M-X;J[g]=Le*b,J[_]=ne*w,J[p]=N,l.push(J.x,J.y,J.z),J[g]=0,J[_]=0,J[p]=T>0?1:-1,u.push(J.x,J.y,J.z),c.push(Ie/A),c.push(1-ee/H),D+=1}}for(let ee=0;ee<H;ee++)for(let ne=0;ne<A;ne++){let Ie=d+ne+k*ee,Le=d+ne+k*(ee+1),Oe=d+(ne+1)+k*(ee+1),Ke=d+(ne+1)+k*ee;h.push(Ie,Le,Ke),h.push(Le,Oe,Ke),O+=6}a.addGroup(f,O,y),f+=O,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(t){let e={};for(let i in t){e[i]={};for(let n in t[i]){let r=t[i][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][n]=null):e[i][n]=r.clone():Array.isArray(r)?e[i][n]=r.slice():e[i][n]=r}}return e}function jt(t){let e={};for(let i=0;i<t.length;i++){let n=gr(t[i]);for(let r in n)e[r]=n[r]}return e}function A_(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function nc(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var qd={clone:gr,merge:jt},R_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?i.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?i.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?i.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?i.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?i.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?i.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?i.uniforms[r]={type:"m4",value:o.toArray()}:i.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}},Ts=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ln=new V,hd=new qe,cd=new qe,hi=class extends Ts{constructor(e=50,i=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let i=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,i){return this.getViewBounds(e,hd,cd),i.subVectors(cd,hd)}setViewOffset(e,i,n,r,s,o){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,i=e*Math.tan(nh*.5*this.fov)/this.zoom,n=2*i,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/h,i-=o.offsetY*n/l,r*=o.width/h,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,i,i-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}},Hr=-90,Vr=1,Qo=class extends ci{constructor(e,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hi(Hr,Vr,e,i);r.layers=this.layers,this.add(r);let s=new hi(Hr,Vr,e,i);s.layers=this.layers,this.add(s);let o=new hi(Hr,Vr,e,i);o.layers=this.layers,this.add(o);let a=new hi(Hr,Vr,e,i);a.layers=this.layers,this.add(a);let h=new hi(Hr,Vr,e,i);h.layers=this.layers,this.add(h);let l=new hi(Hr,Vr,e,i);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,i=this.children.concat(),[n,r,s,o,a,h]=i;for(let l of i)this.remove(l);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of i)this.add(l),l.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,h,l,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(i,s),e.setRenderTarget(n,1,r),e.render(i,o),e.setRenderTarget(n,2,r),e.render(i,a),e.setRenderTarget(n,3,r),e.render(i,h),e.setRenderTarget(n,4,r),e.render(i,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(i,u),e.setRenderTarget(c,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},As=class extends Xt{constructor(e=[],i=Hn,n,r,s,o,a,h,l,u){super(e,i,n,r,s,o,a,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rs=class extends $t{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new As(r),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:Ji});s.uniforms.tEquirect.value=i;let o=new Ot(r,s),a=i.minFilter;return i.minFilter===Vn&&(i.minFilter=Qe),new Qo(1,10,this).update(e,o),i.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,i=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(i,n,r);e.setRenderTarget(s)}},hr=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},I_={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let i=this._hand;if(i)for(let n of e.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,n){let r=null,s=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let _=i.getJointPose(g,n),p=this._getHandJoint(l,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=i.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=i.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I_)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){let n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[i.jointName]=n,e.add(n)}return e.joints[i.jointName]}};var kn=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};var ea=class extends Xt{constructor(e=null,i=1,n=1,r,s,o,a,h,l=At,u=At,c,d){super(null,o,a,h,l,u,r,s,c,d),this.isDataTexture=!0,this.image={data:e,width:i,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ch=new V,L_=new V,D_=new Ue,Gi=class{constructor(e=new V(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,n,r){return this.normal.set(e,i,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,n){let r=Ch.subVectors(n,i).cross(L_.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){let n=e.delta(Ch),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:i.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let i=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return i<0&&n>0||n<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){let n=i||D_.getNormalMatrix(e),r=this.coplanarPoint(Ch).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new Zr,N_=new qe(.5,.5),zo=new V,Ps=class{constructor(e=new Gi,i=new Gi,n=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,i,n,r,s,o]}set(e,i,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(i),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let i=this.planes;for(let n=0;n<6;n++)i[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,i=Bi,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],h=s[2],l=s[3],u=s[4],c=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],b=s[12],w=s[13],x=s[14],E=s[15];if(r[0].setComponents(l-o,f-u,p-m,E-b).normalize(),r[1].setComponents(l+o,f+u,p+m,E+b).normalize(),r[2].setComponents(l+a,f+c,p+g,E+w).normalize(),r[3].setComponents(l-a,f-c,p-g,E-w).normalize(),n)r[4].setComponents(h,d,_,x).normalize(),r[5].setComponents(l-h,f-d,p-_,E-x).normalize();else if(r[4].setComponents(l-h,f-d,p-_,E-x).normalize(),i===Bi)r[5].setComponents(l+h,f+d,p+_,E+x).normalize();else if(i===xs)r[5].setComponents(h,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);let i=N_.distanceTo(e.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let i=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let i=this.planes;for(let n=0;n<6;n++){let r=i[n];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Is=class extends Xt{constructor(e,i,n,r,s=Qe,o=Qe,a,h,l){super(e,i,n,r,s,o,a,h,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function c(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(c)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(c))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Ls=class extends Xt{constructor(e,i,n,r,s,o,a,h,l){super(e,i,n,r,s,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class extends Xt{constructor(e,i,n=Oi,r,s,o,a=At,h=At,l,u=$i,c=1){if(u!==$i&&u!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:i,depth:c};super(d,r,s,o,a,h,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}},ta=class extends Fn{constructor(e,i=Oi,n=Hn,r,s,o=At,a=At,h,l=$i){let u={width:e,height:e,depth:1},c=[u,u,u,u,u,u];super(e,e,i,n,r,s,o,a,h,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ds=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ki=class t extends Ki{constructor(e=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:n,heightSegments:r};let s=e/2,o=i/2,a=Math.floor(n),h=Math.floor(r),l=a+1,u=h+1,c=e/a,d=i/h,f=[],m=[],g=[],_=[];for(let p=0;p<u;p++){let b=p*d-o;for(let w=0;w<l;w++){let x=w*c-s;m.push(x,-b,0),g.push(0,0,1),_.push(w/a),_.push(1-p/h)}}for(let p=0;p<h;p++)for(let b=0;b<a;b++){let w=b+l*p,x=b+l*(p+1),E=b+1+l*(p+1),T=b+1+l*p;f.push(w,x,T),f.push(x,E,T)}this.setIndex(f),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var ia=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var na=class extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ra=class extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ho(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var pr=class{constructor(e,i,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new i.constructor(n),this.sampleValues=i,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let i=this.parameterPositions,n=this._cachedIndex,r=i[n],s=i[n-1];i:{e:{let o;t:{n:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break n;return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=i[++n],e<r)break e}o=i.length;break t}if(!(e>=s)){let a=i[1];e<a&&(n=2,s=a);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=s,s=i[--n-1],e>=s)break e}o=n,n=0;break t}break i}for(;n<o;){let a=n+o>>>1;e<i[a]?o=a:n=a+1}if(r=i[n],s=i[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let i=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)i[o]=n[s+o];return i}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sa=class extends pr{constructor(e,i,n,r){super(e,i,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,i,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],h=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ah:s=e,a=2*i-n;break;case Rh:s=r.length-2,a=i+r[s]-r[s+1];break;default:s=e,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Ah:o=e,h=2*n-i;break;case Rh:o=1,h=n+r[1]-r[0];break;default:o=e-1,h=i}let l=(n-i)*.5,u=this.valueSize;this._weightPrev=l/(i-a),this._weightNext=l/(h-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,i,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-i)/(r-i),g=m*m,_=g*m,p=-d*_+2*d*g-d*m,b=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*m+1,w=(-1-f)*_+(1.5+f)*g+.5*m,x=f*_-f*g;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+b*o[l+E]+w*o[h+E]+x*o[c+E];return s}},oa=class extends pr{constructor(e,i,n,r){super(e,i,n,r)}interpolate_(e,i,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=e*a,l=h-a,u=(n-i)/(r-i),c=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*c+o[h+d]*u;return s}},aa=class extends pr{constructor(e,i,n,r){super(e,i,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Si=class{constructor(e,i,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(i,this.TimeBufferType),this.values=Ho(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let i=e.constructor,n;if(i.toJSON!==this.toJSON)n=i.toJSON(e);else{n={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let i;switch(e){case Ss:i=this.InterpolantFactoryMethodDiscrete;break;case qo:i=this.InterpolantFactoryMethodLinear;break;case Wo:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let i=this.times;for(let n=0,r=i.length;n!==r;++n)i[n]+=e}return this}scale(e){if(e!==1){let i=this.times;for(let n=0,r=i.length;n!==r;++n)i[n]*=e}return this}trim(e,i){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>i;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,i=this.getValueSize();i-Math.floor(i)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){De("KeyframeTrack: Time is not a valid number.",this,a,h),e=!1;break}if(o!==null&&o>h){De("KeyframeTrack: Out of order keys.",this,a,h,o),e=!1;break}o=h}if(r!==void 0&&d_(r))for(let a=0,h=r.length;a!==h;++a){let l=r[a];if(isNaN(l)){De("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),i=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Wo,s=e.length-1,o=1;for(let a=1;a<s;++a){let h=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)h=!0;else{let c=a*n,d=c-n,f=c+n;for(let m=0;m!==n;++m){let g=i[c+m];if(g!==i[d+m]||g!==i[f+m]){h=!0;break}}}if(h){if(a!==o){e[o]=e[a];let c=a*n,d=o*n;for(let f=0;f!==n;++f)i[d+f]=i[c+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,h=o*n,l=0;l!==n;++l)i[h+l]=i[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=i.slice(0,o*n)):(this.times=e,this.values=i),this}clone(){let e=this.times.slice(),i=this.values.slice(),n=this.constructor,r=new n(this.name,e,i);return r.createInterpolant=this.createInterpolant,r}};Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=qo;var On=class extends Si{constructor(e,i,n){super(e,i,n)}};On.prototype.ValueTypeName="bool";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=Ss;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Si{constructor(e,i,n,r){super(e,i,n,r)}};la.prototype.ValueTypeName="color";var ha=class extends Si{constructor(e,i,n,r){super(e,i,n,r)}};ha.prototype.ValueTypeName="number";var ca=class extends pr{constructor(e,i,n,r){super(e,i,n,r)}interpolate_(e,i,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-i)/(r-i),l=e*a;for(let u=l+a;l!==u;l+=4)qi.slerpFlat(s,0,o,l-a,o,l,h);return s}},Ns=class extends Si{constructor(e,i,n,r){super(e,i,n,r)}InterpolantFactoryMethodLinear(e){return new ca(this.times,this.values,this.getValueSize(),e)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Si{constructor(e,i,n){super(e,i,n)}};Un.prototype.ValueTypeName="string";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=Ss;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends Si{constructor(e,i,n,r){super(e,i,n,r)}};ua.prototype.ValueTypeName="vector";var Xr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},da=class{constructor(e,i,n){let r=this,s=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=l.length;c<d;c+=2){let f=l[c],m=l[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new da,zn=class{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){let n=this;return new Promise(function(r,s){n.load(e,r,i,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var pn={},Lh=class extends Error{constructor(e,i){super(e),this.response=i}},fa=class extends zn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,i,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Xr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(s),this.manager.itemEnd(e)},0),s;if(pn[e]!==void 0){pn[e].push({onLoad:i,onProgress:n,onError:r});return}pn[e]=[],pn[e].push({onLoad:i,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,h=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=pn[e],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,g=0,_=new ReadableStream({start(p){b();function b(){c.read().then(({done:w,value:x})=>{if(w)p.close();else{g+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let T=0,A=u.length;T<A;T++){let H=u[T];H.onProgress&&H.onProgress(E)}p.enqueue(x),b()}},w=>{p.error(w)})}}});return new Response(_)}else throw new Lh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(h){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Xr.add(`file:${e}`,l);let u=pn[e];delete pn[e];for(let c=0,d=u.length;c<d;c++){let f=u[c];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=pn[e];if(u===void 0)throw this.manager.itemError(e),l;delete pn[e];for(let c=0,d=u.length;c<d;c++){let f=u[c];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Wr=new WeakMap,pa=class extends zn{constructor(e){super(e)}load(e,i,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Xr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){i&&i(o),s.manager.itemEnd(e)},0);else{let c=Wr.get(o);c===void 0&&(c=[],Wr.set(o,c)),c.push({onLoad:i,onError:r})}return o}let a=$r("img");function h(){u(),i&&i(this);let c=Wr.get(this)||[];for(let d=0;d<c.length;d++){let f=c[d];f.onLoad&&f.onLoad(this)}Wr.delete(this),s.manager.itemEnd(e)}function l(c){u(),r&&r(c),Xr.remove(`image:${e}`);let d=Wr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(c)}Wr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",h,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Bs=class extends zn{constructor(e){super(e)}load(e,i,n,r){let s=new Xt,o=new pa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,i!==void 0&&i(s)},n,r),s}};var Zi=class extends Ts{constructor(e=-1,i=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+i,h=r-i;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}};var Vo,ks=class{static getContext(){return Vo===void 0&&(Vo=new(window.AudioContext||window.webkitAudioContext)),Vo}static setContext(e){Vo=e}},Fs=class extends zn{constructor(e){super(e)}load(e,i,n,r){let s=this,o=new fa(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(h){try{let l=h.slice(0);ks.getContext().decodeAudioData(l,function(c){i(c)}).catch(a)}catch(l){a(l)}},n,r);function a(h){r?r(h):De(h),s.manager.itemError(e)}}};var ma=class extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_a=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}},sr=new V,Eh=new qi,B_=new V,or=new V,ar=new V,Os=class extends ci{constructor(){super(),this.type="AudioListener",this.context=ks.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _a}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let i=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(sr,Eh,B_),or.set(0,0,-1).applyQuaternion(Eh),ar.set(0,1,0).applyQuaternion(Eh),i.positionX){let n=this.context.currentTime+this.timeDelta;i.positionX.linearRampToValueAtTime(sr.x,n),i.positionY.linearRampToValueAtTime(sr.y,n),i.positionZ.linearRampToValueAtTime(sr.z,n),i.forwardX.linearRampToValueAtTime(or.x,n),i.forwardY.linearRampToValueAtTime(or.y,n),i.forwardZ.linearRampToValueAtTime(or.z,n),i.upX.linearRampToValueAtTime(ar.x,n),i.upY.linearRampToValueAtTime(ar.y,n),i.upZ.linearRampToValueAtTime(ar.z,n)}else i.setPosition(sr.x,sr.y,sr.z),i.setOrientation(or.x,or.y,or.z,ar.x,ar.y,ar.z)}},Qr=class extends ci{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Te("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Te("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let i=this.context.createBufferSource();return i.buffer=this.buffer,i.loop=this.loop,i.loopStart=this.loopStart,i.loopEnd=this.loopEnd,i.onended=this.onEnded.bind(this),i.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=i,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Te("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Te("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,i=this.filters.length;e<i;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,i=this.filters.length;e<i;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Te("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Te("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Te("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,i){return super.copy(e,i),e.sourceType!=="buffer"?(Te("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};var rc="\\[\\]\\.:\\/",k_=new RegExp("["+rc+"]","g"),sc="[^"+rc+"]",F_="[^"+rc.replace("\\.","")+"]",O_=/((?:WC+[\/:])*)/.source.replace("WC",sc),U_=/(WCOD+)?/.source.replace("WCOD",F_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),H_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),V_=new RegExp("^"+O_+U_+z_+H_+"$"),W_=["material","materials","bones","map"],Dh=class{constructor(e,i,n){let r=n||ft.parseTrackName(i);this._targetGroup=e,this._bindings=e.subscribe_(i,r)}getValue(e,i){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,i)}setValue(e,i){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,i)}bind(){let e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].bind()}unbind(){let e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].unbind()}},ft=class t{constructor(e,i,n){this.path=i,this.parsedPath=n||t.parseTrackName(i),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,i,n):new t(e,i,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k_,"")}static parseTrackName(e){let i=V_.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);W_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(i);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===i||a.uuid===i)return a;let h=n(a.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[i++]=n[r]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,n=i.objectName,r=i.propertyName,s=i.propertyIndex;if(e||(e=t.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=i.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=i.nodeName;De("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Dh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);function oc(t,e,i,n){let r=G_(n);switch(i){case Jh:return t*e;case Qh:return t*e/r.components*r.byteLength;case Pa:return t*e/r.components*r.byteLength;case _r:return t*e*2/r.components*r.byteLength;case Ia:return t*e*2/r.components*r.byteLength;case jh:return t*e*3/r.components*r.byteLength;case Yt:return t*e*4/r.components*r.byteLength;case La:return t*e*4/r.components*r.byteLength;case Vs:case Ws:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Xs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Na:case ka:return Math.max(t,16)*Math.max(e,8)/4;case Da:case Ba:return Math.max(t,8)*Math.max(e,8)/2;case Fa:case Oa:case za:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Va:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rl:case sl:case ol:return Math.ceil(t/4)*Math.ceil(e/4)*16;case al:case ll:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hl:case cl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function G_(t){switch(t){case qt:case qh:return{byteLength:1,components:1};case ts:case Yh:case ji:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case Oi:case Ta:case Ui:return{byteLength:4,components:1};case Kh:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function vf(){let t=null,e=!1,i=null,n=null;function r(s,o){i(s,o),n=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&i!==null&&(n=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){t=s}}}function $_(t){let e=new WeakMap;function i(a,h){let l=a.array,u=a.usage,c=l.byteLength,d=t.createBuffer();t.bindBuffer(h,d),t.bufferData(h,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,h,l){let u=h.array,c=h.updateRanges;if(t.bindBuffer(l,a),c.length===0)t.bufferSubData(l,0,u);else{c.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<c.length;f++){let m=c[d],g=c[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,c[d]=g)}c.length=d+1;for(let f=0,m=c.length;f<m;f++){let g=c[f];t.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=e.get(a);h&&(t.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,i(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:r,remove:s,update:o}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_g=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vg=`vec3 transformedNormal = objectNormal;
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
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#endif`,Ug=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
#endif`,Xg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,$g=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
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
}`,cv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,_v=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,Sv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,xv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,wv=`uniform vec3 color;
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
}`,Mv=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:q_,alphahash_pars_fragment:Y_,alphamap_fragment:K_,alphamap_pars_fragment:Z_,alphatest_fragment:J_,alphatest_pars_fragment:j_,aomap_fragment:Q_,aomap_pars_fragment:eg,batching_pars_vertex:tg,batching_vertex:ig,begin_vertex:ng,beginnormal_vertex:rg,bsdfs:sg,iridescence_fragment:og,bumpmap_pars_fragment:ag,clipping_planes_fragment:lg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:ug,color_fragment:dg,color_pars_fragment:fg,color_pars_vertex:pg,color_vertex:mg,common:_g,cube_uv_reflection_fragment:gg,defaultnormal_vertex:vg,displacementmap_pars_vertex:Sg,displacementmap_vertex:yg,emissivemap_fragment:xg,emissivemap_pars_fragment:bg,colorspace_fragment:wg,colorspace_pars_fragment:Mg,envmap_fragment:Cg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Ug,envmap_vertex:Rg,fog_vertex:Pg,fog_pars_vertex:Ig,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ng,lightmap_pars_fragment:Bg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:zg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Xg,lights_fragment_begin:$g,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:Kg,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:jg,map_fragment:Qg,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:i0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:r0,morphinstance_vertex:s0,morphcolor_vertex:o0,morphnormal_vertex:a0,morphtarget_pars_vertex:l0,morphtarget_vertex:h0,normal_fragment_begin:c0,normal_fragment_maps:u0,normal_pars_fragment:d0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:S0,opaque_fragment:y0,packing:x0,premultiplied_alpha_fragment:b0,project_vertex:w0,dithering_fragment:M0,dithering_pars_fragment:C0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:P0,shadowmask_pars_fragment:I0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:N0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:U0,transmission_fragment:z0,transmission_pars_fragment:H0,uv_pars_fragment:V0,uv_pars_vertex:W0,uv_vertex:G0,worldpos_vertex:X0,background_vert:$0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:K0,cube_vert:Z0,cube_frag:J0,depth_vert:j0,depth_frag:Q0,distance_vert:ev,distance_frag:tv,equirect_vert:iv,equirect_frag:nv,linedashed_vert:rv,linedashed_frag:sv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:lv,meshlambert_frag:hv,meshmatcap_vert:cv,meshmatcap_frag:uv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:_v,meshphysical_frag:gv,meshtoon_vert:vv,meshtoon_frag:Sv,points_vert:yv,points_frag:xv,shadow_vert:bv,shadow_frag:wv,sprite_vert:Mv,sprite_frag:Cv},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},en={basic:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:jt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:jt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:jt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:jt([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:jt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};en.physical={uniforms:jt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var fl={r:0,b:0,g:0},vr=new Yi,Ev=new Tt;function Tv(t,e,i,n,r,s,o){let a=new et(0),h=s===!0?0:1,l,u,c=null,d=0,f=null;function m(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?i:e).get(x)),x}function g(w){let x=!1,E=m(w);E===null?p(a,h):E&&E.isColor&&(p(E,1),x=!0);let T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(w,x){let E=m(x);E&&(E.isCubeTexture||E.mapping===zs)?(u===void 0&&(u=new Ot(new Jr(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:gr(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vr.copy(x.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(vr)),u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==it,(c!==E||d!==E.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=E,d=E.version,f=t.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ot(new ki(2,2),new It({name:"BackgroundMaterial",uniforms:gr(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(c!==E||d!==E.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=E,d=E.version,f=t.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(fl,nc(t)),n.buffers.color.setClear(fl.r,fl.g,fl.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),h=x,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,p(a,h)},render:g,addToRenderList:_,dispose:b}}function Av(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,P,X,R,N){let k=!1,L=c(R,X,P);s!==L&&(s=L,l(s.object)),k=f(M,R,X,N),k&&m(M,R,X,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(M,P,X,R),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function h(){return t.createVertexArray()}function l(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function c(M,P,X){let R=X.wireframe===!0,N=n[M.id];N===void 0&&(N={},n[M.id]=N);let k=N[P.id];k===void 0&&(k={},N[P.id]=k);let L=k[R];return L===void 0&&(L=d(h()),k[R]=L),L}function d(M){let P=[],X=[],R=[];for(let N=0;N<i;N++)P[N]=0,X[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:R,object:M,attributes:{},index:null}}function f(M,P,X,R){let N=s.attributes,k=P.attributes,L=0,D=X.getAttributes();for(let O in D)if(D[O].location>=0){let ee=N[O],ne=k[O];if(ne===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ee===void 0||ee.attribute!==ne||ne&&ee.data!==ne.data)return!0;L++}return s.attributesNum!==L||s.index!==R}function m(M,P,X,R){let N={},k=P.attributes,L=0,D=X.getAttributes();for(let O in D)if(D[O].location>=0){let ee=k[O];ee===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));let ne={};ne.attribute=ee,ee&&ee.data&&(ne.data=ee.data),N[O]=ne,L++}s.attributes=N,s.attributesNum=L,s.index=R}function g(){let M=s.newAttributes;for(let P=0,X=M.length;P<X;P++)M[P]=0}function _(M){p(M,0)}function p(M,P){let X=s.newAttributes,R=s.enabledAttributes,N=s.attributeDivisors;X[M]=1,R[M]===0&&(t.enableVertexAttribArray(M),R[M]=1),N[M]!==P&&(t.vertexAttribDivisor(M,P),N[M]=P)}function b(){let M=s.newAttributes,P=s.enabledAttributes;for(let X=0,R=P.length;X<R;X++)P[X]!==M[X]&&(t.disableVertexAttribArray(X),P[X]=0)}function w(M,P,X,R,N,k,L){L===!0?t.vertexAttribIPointer(M,P,X,N,k):t.vertexAttribPointer(M,P,X,R,N,k)}function x(M,P,X,R){g();let N=R.attributes,k=X.getAttributes(),L=P.defaultAttributeValues;for(let D in k){let O=k[D];if(O.location>=0){let J=N[D];if(J===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){let ee=J.normalized,ne=J.itemSize,Ie=e.get(J);if(Ie===void 0)continue;let Le=Ie.buffer,Oe=Ie.type,Ke=Ie.bytesPerElement,$=Oe===t.INT||Oe===t.UNSIGNED_INT||J.gpuType===Ta;if(J.isInterleavedBufferAttribute){let j=J.data,me=j.stride,Pe=J.offset;if(j.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)p(O.location+ve,j.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<O.locationSize;ve++)_(O.location+ve);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let ve=0;ve<O.locationSize;ve++)w(O.location+ve,ne/O.locationSize,Oe,ee,me*Ke,(Pe+ne/O.locationSize*ve)*Ke,$)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<O.locationSize;j++)p(O.location+j,J.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<O.locationSize;j++)_(O.location+j);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let j=0;j<O.locationSize;j++)w(O.location+j,ne/O.locationSize,Oe,ee,ne*Ke,ne/O.locationSize*j*Ke,$)}}else if(L!==void 0){let ee=L[D];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(O.location,ee);break;case 3:t.vertexAttrib3fv(O.location,ee);break;case 4:t.vertexAttrib4fv(O.location,ee);break;default:t.vertexAttrib1fv(O.location,ee)}}}}b()}function E(){H();for(let M in n){let P=n[M];for(let X in P){let R=P[X];for(let N in R)u(R[N].object),delete R[N];delete P[X]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let X in P){let R=P[X];for(let N in R)u(R[N].object),delete R[N];delete P[X]}delete n[M.id]}function A(M){for(let P in n){let X=n[P];if(X[M.id]===void 0)continue;let R=X[M.id];for(let N in R)u(R[N].object),delete R[N];delete X[M.id]}}function H(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:H,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:b}}function Rv(t,e,i){let n;function r(l){n=l}function s(l,u){t.drawArrays(n,l,u),i.update(u,n,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(n,l,u,c),i.update(u,n,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,c);let f=0;for(let m=0;m<c;m++)f+=u[m];i.update(f,n,1)}function h(l,u,c,d){if(c===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,c);let m=0;for(let g=0;g<c;g++)m+=u[g]*d[g];i.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Pv(t,e,i,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Yt&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let H=A===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==qt&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ui&&!H)}function h(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=i.precision!==void 0?i.precision:"highp",u=h(l);u!==l&&(Te("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let c=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:E,samples:T}}function Iv(t){let e=this,i=null,n=0,r=!1,s=!1,o=new Gi,a=new Ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let f=c.length!==0||d||n!==0||r;return r=d,n=c.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){i=u(c,d,0)},this.setState=function(c,d,f){let m=c.clippingPlanes,g=c.clipIntersection,_=c.clipShadows,p=t.get(c);if(!r||m===null||m.length===0||s&&!_)s?u(null):l();else{let b=s?0:n,w=b*4,x=p.clippingState||null;h.value=x,x=u(m,d,w,f);for(let E=0;E!==w;++E)x[E]=i[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){h.value!==i&&(h.value=i,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,m){let g=c!==null?c.length:0,_=null;if(g!==0){if(_=h.value,m!==!0||_===null){let p=f+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,x=f;w!==g;++w,x+=4)o.copy(c[w]).applyMatrix4(b,a),o.normal.toArray(_,x),_[x+3]=o.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function Lv(t){let e=new WeakMap;function i(o,a){return a===Ma?o.mapping=Hn:a===Ca&&(o.mapping=mr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ma||a===Ca)if(e.has(o)){let h=e.get(o).texture;return i(h,o.mapping)}else{let h=o.image;if(h&&h.height>0){let l=new Rs(h.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",r),i(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Gn=4,Kd=[.125,.215,.35,.446,.526,.582],yr=20,Dv=256,qs=new Zi,Zd=new et,ac=null,lc=0,hc=0,cc=!1,Nv=new V,ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,n=.1,r=100,s={}){let{size:o=256,position:a=Nv}=s;ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,r,h,a),i>0&&this._blur(h,0,0,i),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,lc,hc),this._renderer.xr.enabled=cc,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hn||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=i||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:ji,format:Yt,colorSpace:dr,depthBuffer:!1},r=Jd(e,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,i,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bv(s)),this._blurMaterial=Fv(s,e,i),this._ggxMaterial=kv(s,e,i)}return r}_compileMaterial(e){let i=new Ot(new Ki,e);this._renderer.compile(i,qs)}_sceneToCubeUV(e,i,n,r,s){let h=new hi(90,1,i,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Zd),c.toneMapping=Fi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Jr,new Ms({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,_=g.material,p=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Zd),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(h.up.set(0,l[w],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+u[w],s.y,s.z)):x===1?(h.up.set(0,0,l[w]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+u[w],s.z)):(h.up.set(0,l[w],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+u[w]));let E=this._cubeSize;ns(r,x*E,w>2?E:0,E,E),c.setRenderTarget(r),p&&c.render(g,h),c.render(e,h)}c.toneMapping=f,c.autoClear=d,e.background=b}_textureToCubeUV(e,i){let n=this._renderer,r=e.mapping===Hn||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let h=this._cubeSize;ns(i,0,0,3*h,2*h),n.setRenderTarget(i),n.render(o,qs)}_applyPMREM(e){let i=this._renderer,n=i.autoClear;i.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);i.autoClear=n}_applyGGXFilter(e,i,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let h=o.uniforms,l=n/(this._lodMeshes.length-1),u=i/(this._lodMeshes.length-1),c=Math.sqrt(l*l-u*u),d=0+l*1.25,f=c*d,{_lodMax:m}=this,g=this._sizeLods[n],_=3*g*(n>m-Gn?n-m+Gn:0),p=4*(this._cubeSize-g);h.envMap.value=e.texture,h.roughness.value=f,h.mipInt.value=m-i,ns(s,_,p,3*g,2*g),r.setRenderTarget(s),r.render(a,qs),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=m-n,ns(e,_,p,3*g,2*g),r.setRenderTarget(e),r.render(a,qs)}_blur(e,i,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,i,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,i,n,r,s,o,a){let h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");let u=3,c=this._lodMeshes[r];c.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),g=s/m,_=isFinite(s)?1+Math.floor(u*g):yr;_>yr&&Te(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${yr}`);let p=[],b=0;for(let A=0;A<yr;++A){let H=A/g,y=Math.exp(-H*H/2);p.push(y),A===0?b+=y:A<_&&(b+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=m,d.mipInt.value=w-n;let x=this._sizeLods[r],E=3*x*(r>w-Gn?r-w+Gn:0),T=4*(this._cubeSize-x);ns(i,E,T,3*x,2*x),h.setRenderTarget(i),h.render(c,qs)}};function Bv(t){let e=[],i=[],n=[],r=t,s=t-Gn+1+Kd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let h=1/a;o>t-Gn?h=Kd[o-t+Gn-1]:o===0&&(h=0),i.push(h);let l=1/(a-2),u=-l,c=1+l,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,m=6,g=3,_=2,p=1,b=new Float32Array(g*m*f),w=new Float32Array(_*m*f),x=new Float32Array(p*m*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,H=T>2?0:-1,y=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];b.set(y,g*m*T),w.set(d,_*m*T);let M=[T,T,T,T,T,T];x.set(M,p*m*T)}let E=new Ki;E.setAttribute("position",new vi(b,g)),E.setAttribute("uv",new vi(w,_)),E.setAttribute("faceIndex",new vi(x,p)),n.push(new Ot(E,null)),r>Gn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:i}}function Jd(t,e,i){let n=new $t(t,e,i);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(t,e,i,n,r){t.viewport.set(e,i,n,r),t.scissor.set(e,i,n,r)}function kv(t,e,i){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fv(t,e,i){let n=new Float32Array(yr),r=new V(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function jd(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Qd(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function Ov(t){let e=new WeakMap,i=null;function n(a){if(a&&a.isTexture){let h=a.mapping,l=h===Ma||h===Ca,u=h===Hn||h===mr;if(l||u){let c=e.get(a),d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return i===null&&(i=new ml(t)),c=l?i.fromEquirectangular(a,c):i.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(i===null&&(i=new ml(t)),c=l?i.fromEquirectangular(a):i.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function r(a){let h=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&h++;return h===l}function s(a){let h=a.target;h.removeEventListener("dispose",s);let l=e.get(h);l!==void 0&&(e.delete(h),l.dispose())}function o(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:o}}function Uv(t){let e={};function i(n){if(e[n]!==void 0)return e[n];let r=t.getExtension(n);return e[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let r=i(n);return r===null&&Yr("WebGLRenderer: "+n+" extension not supported."),r}}}function zv(t,e,i,n){let r={},s=new WeakMap;function o(c){let d=c.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,i.memory.geometries++),d}function h(c){let d=c.attributes;for(let f in d)e.update(d[f],t.ARRAY_BUFFER)}function l(c){let d=[],f=c.index,m=c.attributes.position,g=0;if(f!==null){let b=f.array;g=f.version;for(let w=0,x=b.length;w<x;w+=3){let E=b[w+0],T=b[w+1],A=b[w+2];d.push(E,T,T,A,A,E)}}else if(m!==void 0){let b=m.array;g=m.version;for(let w=0,x=b.length/3-1;w<x;w+=3){let E=w+0,T=w+1,A=w+2;d.push(E,T,T,A,A,E)}}else return;let _=new(tc(d)?Es:Cs)(d,1);_.version=g;let p=s.get(c);p&&e.remove(p),s.set(c,_)}function u(c){let d=s.get(c);if(d){let f=c.index;f!==null&&d.version<f.version&&l(c)}else l(c);return s.get(c)}return{get:a,update:h,getWireframeAttribute:u}}function Hv(t,e,i){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function h(d,f){t.drawElements(n,f,s,d*o),i.update(f,n,1)}function l(d,f,m){m!==0&&(t.drawElementsInstanced(n,f,s,d*o,m),i.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];i.update(_,n,1)}function c(d,f,m,g){if(m===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*g[b];i.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function Vv(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(i.calls++,o){case t.TRIANGLES:i.triangles+=a*(s/3);break;case t.LINES:i.lines+=a*(s/2);break;case t.LINE_STRIP:i.lines+=a*(s-1);break;case t.LINE_LOOP:i.lines+=a*s;break;case t.POINTS:i.points+=a*s;break;default:De("WebGLInfo: Unknown draw mode:",o);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:r,update:n}}function Wv(t,e,i){let n=new WeakMap,r=new _t;function s(o,a,h){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==c){let M=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let E=a.attributes.position.count*x,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let A=new Float32Array(E*T*4*c),H=new bs(A,E,T,c);H.type=Ui,H.needsUpdate=!0;let y=x*4;for(let P=0;P<c;P++){let X=p[P],R=b[P],N=w[P],k=E*T*4*P;for(let L=0;L<X.count;L++){let D=L*y;m===!0&&(r.fromBufferAttribute(X,L),A[k+D+0]=r.x,A[k+D+1]=r.y,A[k+D+2]=r.z,A[k+D+3]=0),g===!0&&(r.fromBufferAttribute(R,L),A[k+D+4]=r.x,A[k+D+5]=r.y,A[k+D+6]=r.z,A[k+D+7]=0),_===!0&&(r.fromBufferAttribute(N,L),A[k+D+8]=r.x,A[k+D+9]=r.y,A[k+D+10]=r.z,A[k+D+11]=N.itemSize===4?r.w:1)}}d={count:c,texture:H,size:new qe(E,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",o.morphTexture,i);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",l)}h.getUniforms().setValue(t,"morphTargetsTexture",d.texture,i),h.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Gv(t,e,i,n){let r=new WeakMap;function s(h){let l=n.render.frame,u=h.geometry,c=e.get(h,u);if(r.get(c)!==l&&(e.update(c),r.set(c,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==l&&(i.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,t.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return c}function o(){r=new WeakMap}function a(h){let l=h.target;l.removeEventListener("dispose",a),i.remove(l.instanceMatrix),l.instanceColor!==null&&i.remove(l.instanceColor)}return{update:s,dispose:o}}var Xv={[Uh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[Hh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function $v(t,e,i,n,r){let s=new $t(e,i,{type:t,depthBuffer:n,stencilBuffer:r}),o=new $t(e,i,{type:ji,depthBuffer:!1,stencilBuffer:!1}),a=new Ki;a.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ei([0,2,0,0,2,0],2));let h=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ot(a,h),u=new Zi(-1,1,1,-1,0,1),c=null,d=null,f=!1,m,g=null,_=[],p=!1;this.setSize=function(b,w){s.setSize(b,w),o.setSize(b,w);for(let x=0;x<_.length;x++){let E=_[x];E.setSize&&E.setSize(b,w)}},this.setEffects=function(b){_=b,p=_.length>0&&_[0].isRenderPass===!0;let w=s.width,x=s.height;for(let E=0;E<_.length;E++){let T=_[E];T.setSize&&T.setSize(w,x)}},this.begin=function(b,w){if(f||b.toneMapping===Fi&&_.length===0)return!1;if(g=w,w!==null){let x=w.width,E=w.height;(s.width!==x||s.height!==E)&&this.setSize(x,E)}return p===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=Fi,!0},this.hasRenderPass=function(){return p},this.end=function(b,w){b.toneMapping=m,f=!0;let x=s,E=o;for(let T=0;T<_.length;T++){let A=_[T];if(A.enabled!==!1&&(A.render(b,E,x,w),A.needsSwap!==!1)){let H=x;x=E,E=H}}if(c!==b.outputColorSpace||d!==b.toneMapping){c=b.outputColorSpace,d=b.toneMapping,h.defines={},Ze.getTransfer(c)===it&&(h.defines.SRGB_TRANSFER="");let T=Xv[d];T&&(h.defines[T]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(g),b.render(l,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),h.dispose()}}var Sf=new Xt,fc=new Fn(1,1),yf=new bs,xf=new Jo,bf=new As,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function ss(t,e,i){let n=t[0];if(n<=0||n>0)return t;let r=e*i,s=ef[r];if(s===void 0&&(s=new Float32Array(r),ef[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=i,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Dt(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function vl(t,e){let i=tf[e];i===void 0&&(i=new Int32Array(e),tf[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function qv(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function Yv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Lt(i,e))return;t.uniform2fv(this.addr,e),Dt(i,e)}}function Kv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Lt(i,e))return;t.uniform3fv(this.addr,e),Dt(i,e)}}function Zv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Lt(i,e))return;t.uniform4fv(this.addr,e),Dt(i,e)}}function Jv(t,e){let i=this.cache,n=e.elements;if(n===void 0){if(Lt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(i,e)}else{if(Lt(i,n))return;sf.set(n),t.uniformMatrix2fv(this.addr,!1,sf),Dt(i,n)}}function jv(t,e){let i=this.cache,n=e.elements;if(n===void 0){if(Lt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(i,e)}else{if(Lt(i,n))return;rf.set(n),t.uniformMatrix3fv(this.addr,!1,rf),Dt(i,n)}}function Qv(t,e){let i=this.cache,n=e.elements;if(n===void 0){if(Lt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(i,e)}else{if(Lt(i,n))return;nf.set(n),t.uniformMatrix4fv(this.addr,!1,nf),Dt(i,n)}}function eS(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function tS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Lt(i,e))return;t.uniform2iv(this.addr,e),Dt(i,e)}}function iS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Lt(i,e))return;t.uniform3iv(this.addr,e),Dt(i,e)}}function nS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Lt(i,e))return;t.uniform4iv(this.addr,e),Dt(i,e)}}function rS(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function sS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Lt(i,e))return;t.uniform2uiv(this.addr,e),Dt(i,e)}}function oS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Lt(i,e))return;t.uniform3uiv(this.addr,e),Dt(i,e)}}function aS(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Lt(i,e))return;t.uniform4uiv(this.addr,e),Dt(i,e)}}function lS(t,e,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(fc.compareFunction=i.isReversedDepthBuffer()?dl:ul,s=fc):s=Sf,i.setTexture2D(e||s,r)}function hS(t,e,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(e||xf,r)}function cS(t,e,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(e||bf,r)}function uS(t,e,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(e||yf,r)}function dS(t){switch(t){case 5126:return qv;case 35664:return Yv;case 35665:return Kv;case 35666:return Zv;case 35674:return Jv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return iS;case 35669:case 35673:return nS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}function fS(t,e){t.uniform1fv(this.addr,e)}function pS(t,e){let i=ss(e,this.size,2);t.uniform2fv(this.addr,i)}function mS(t,e){let i=ss(e,this.size,3);t.uniform3fv(this.addr,i)}function _S(t,e){let i=ss(e,this.size,4);t.uniform4fv(this.addr,i)}function gS(t,e){let i=ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function vS(t,e){let i=ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function SS(t,e){let i=ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function yS(t,e){t.uniform1iv(this.addr,e)}function xS(t,e){t.uniform2iv(this.addr,e)}function bS(t,e){t.uniform3iv(this.addr,e)}function wS(t,e){t.uniform4iv(this.addr,e)}function MS(t,e){t.uniform1uiv(this.addr,e)}function CS(t,e){t.uniform2uiv(this.addr,e)}function ES(t,e){t.uniform3uiv(this.addr,e)}function TS(t,e){t.uniform4uiv(this.addr,e)}function AS(t,e,i){let n=this.cache,r=e.length,s=vl(i,r);Lt(n,s)||(t.uniform1iv(this.addr,s),Dt(n,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=fc:o=Sf;for(let a=0;a!==r;++a)i.setTexture2D(e[a]||o,s[a])}function RS(t,e,i){let n=this.cache,r=e.length,s=vl(i,r);Lt(n,s)||(t.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)i.setTexture3D(e[o]||xf,s[o])}function PS(t,e,i){let n=this.cache,r=e.length,s=vl(i,r);Lt(n,s)||(t.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)i.setTextureCube(e[o]||bf,s[o])}function IS(t,e,i){let n=this.cache,r=e.length,s=vl(i,r);Lt(n,s)||(t.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)i.setTexture2DArray(e[o]||yf,s[o])}function LS(t){switch(t){case 5126:return fS;case 35664:return pS;case 35665:return mS;case 35666:return _S;case 35674:return gS;case 35675:return vS;case 35676:return SS;case 5124:case 35670:return yS;case 35667:case 35671:return xS;case 35668:case 35672:return bS;case 35669:case 35673:return wS;case 5125:return MS;case 36294:return CS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return IS}}var pc=class{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.setValue=dS(i.type)}},mc=class{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LS(i.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,i[a.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function of(t,e){t.seq.push(e),t.map[e.id]=e}function DS(t,e,i){let n=t.name,r=n.length;for(uc.lastIndex=0;;){let s=uc.exec(n),o=uc.lastIndex,a=s[1],h=s[2]==="]",l=s[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===r){of(i,l===void 0?new pc(a,t,e):new mc(a,t,e));break}else{let c=i.map[a];c===void 0&&(c=new _c(a),of(i,c)),i=c}}}var rs=class{constructor(e,i){this.seq=[],this.map={};let n=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(i,o),h=e.getUniformLocation(i,a.name);DS(a,h,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,i,n,r){let s=this.map[i];s!==void 0&&s.setValue(e,n,r)}setOptional(e,i,n){let r=i[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,i,n,r){for(let s=0,o=i.length;s!==o;++s){let a=i[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,r)}}static seqWithValue(e,i){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in i&&n.push(o)}return n}};function af(t,e,i){let n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}var NS=37297,BS=0;function kS(t,e){let i=t.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}var lf=new Ue;function FS(t){Ze._getMatrix(lf,Ze.workingColorSpace,t);let e=`mat3( ${lf.elements.map(i=>i.toFixed(4))} )`;switch(Ze.getTransfer(t)){case ys:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hf(t,e,i){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+kS(t.getShaderSource(e),a)}else return s}function OS(t,e){let i=FS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var US={[Uh]:"Linear",[zh]:"Reinhard",[Hh]:"Cineon",[Vh]:"ACESFilmic",[Gh]:"AgX",[Xh]:"Neutral",[Wh]:"Custom"};function zS(t,e){let i=US[e];return i===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var pl=new V;function HS(){Ze.getLuminanceCoefficients(pl);let t=pl.x.toFixed(4),e=pl.y.toFixed(4),i=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function WS(t){let e=[];for(let i in t){let n=t[i];n!==!1&&e.push("#define "+i+" "+n)}return e.join(`
`)}function GS(t,e){let i={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),i[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return i}function Ks(t){return t!==""}function cf(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(t){return t.replace(XS,qS)}var $S=new Map;function qS(t,e){let i=He[e];if(i===void 0){let n=$S.get(e);if(n!==void 0)i=He[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(i)}var YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(t){return t.replace(YS,KS)}function KS(t,e,i,n){let r="";for(let s=parseInt(e);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var ZS={[Us]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function JS(t){return ZS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jS={[Hn]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function QS(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jS[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var ey={[mr]:"ENVMAP_MODE_REFRACTION"};function ty(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iy={[Oh]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};function ny(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":iy[t.combine]||"ENVMAP_BLENDING_NONE"}function ry(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function sy(t,e,i,n){let r=t.getContext(),s=i.defines,o=i.vertexShader,a=i.fragmentShader,h=JS(i),l=QS(i),u=ty(i),c=ny(i),d=ry(i),f=VS(i),m=WS(s),g=r.createProgram(),_,p,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Ks).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(_=[ff(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[ff(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.envMap?"#define "+u:"",i.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?He.tonemapping_pars_fragment:"",i.toneMapping!==Fi?zS("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,OS("linearToOutputTexel",i.outputColorSpace),HS(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ks).join(`
`)),o=gc(o),o=cf(o,i),o=uf(o,i),a=gc(a),a=cf(a,i),a=uf(a,i),o=df(o),a=df(a),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",i.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+_+o,x=b+p+a,E=af(r,r.VERTEX_SHADER,w),T=af(r,r.FRAGMENT_SHADER,x);r.attachShader(g,E),r.attachShader(g,T),i.index0AttributeName!==void 0?r.bindAttribLocation(g,0,i.index0AttributeName):i.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(t.debug.checkShaderErrors){let X=r.getProgramInfoLog(g)||"",R=r.getShaderInfoLog(E)||"",N=r.getShaderInfoLog(T)||"",k=X.trim(),L=R.trim(),D=N.trim(),O=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,E,T);else{let ee=hf(r,E,"vertex"),ne=hf(r,T,"fragment");De("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+ee+`
`+ne)}else k!==""?Te("WebGLProgram: Program Info Log:",k):(L===""||D==="")&&(J=!1);J&&(P.diagnostics={runnable:O,programLog:k,vertexShader:{log:L,prefix:_},fragmentShader:{log:D,prefix:p}})}r.deleteShader(E),r.deleteShader(T),H=new rs(r,g),y=GS(r,g)}let H;this.getUniforms=function(){return H===void 0&&A(this),H};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,NS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=T,this}var oy=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let i=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(i),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let i=this.materialCache.get(e);for(let n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let i=this.materialCache,n=i.get(e);return n===void 0&&(n=new Set,i.set(e,n)),n}_getShaderStage(e){let i=this.shaderCache,n=i.get(e);return n===void 0&&(n=new Sc(e),i.set(e,n)),n}},Sc=class{constructor(e){this.id=oy++,this.code=e,this.usedTimes=0}};function ay(t,e,i,n,r,s,o){let a=new ws,h=new vc,l=new Set,u=[],c=new Map,d=r.logarithmicDepthBuffer,f=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,M,P,X,R){let N=X.fog,k=R.geometry,L=y.isMeshStandardMaterial?X.environment:null,D=(y.isMeshStandardMaterial?i:e).get(y.envMap||L),O=D&&D.mapping===zs?D.image.height:null,J=m[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&Te("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=ee!==void 0?ee.length:0,Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let Le,Oe,Ke,$;if(J){let nt=en[J];Le=nt.vertexShader,Oe=nt.fragmentShader}else Le=y.vertexShader,Oe=y.fragmentShader,h.update(y),Ke=h.getVertexShaderID(y),$=h.getFragmentShaderID(y);let j=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Pe=R.isInstancedMesh===!0,ve=R.isBatchedMesh===!0,Xe=!!y.map,at=!!y.matcap,Se=!!D,Je=!!y.aoMap,lt=!!y.lightMap,Ve=!!y.bumpMap,Mt=!!y.normalMap,I=!!y.displacementMap,Ct=!!y.emissiveMap,tt=!!y.metalnessMap,ct=!!y.roughnessMap,we=y.anisotropy>0,C=y.clearcoat>0,v=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,Q=y.transmission>0,q=we&&!!y.anisotropyMap,Ce=C&&!!y.clearcoatMap,ae=C&&!!y.clearcoatNormalMap,be=C&&!!y.clearcoatRoughnessMap,Be=F&&!!y.iridescenceMap,ie=F&&!!y.iridescenceThicknessMap,he=Y&&!!y.sheenColorMap,xe=Y&&!!y.sheenRoughnessMap,Me=!!y.specularMap,le=!!y.specularColorMap,We=!!y.specularIntensityMap,B=Q&&!!y.transmissionMap,fe=Q&&!!y.thicknessMap,re=!!y.gradientMap,_e=!!y.alphaMap,te=y.alphaTest>0,Z=!!y.alphaHash,oe=!!y.extensions,Fe=Fi;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=t.toneMapping);let ut={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:Oe,defines:y.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ve,batchingColor:ve&&R._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&R.instanceColor!==null,instancingMorph:Pe&&R.morphTexture!==null,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:dr,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:at,envMap:Se,envMapMode:Se&&D.mapping,envMapCubeUVHeight:O,aoMap:Je,lightMap:lt,bumpMap:Ve,normalMap:Mt,displacementMap:I,emissiveMap:Ct,normalMapObjectSpace:Mt&&y.normalMapType===Fd,normalMapTangentSpace:Mt&&y.normalMapType===kd,metalnessMap:tt,roughnessMap:ct,anisotropy:we,anisotropyMap:q,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:v,iridescence:F,iridescenceMap:Be,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:he,sheenRoughnessMap:xe,specularMap:Me,specularColorMap:le,specularIntensityMap:We,transmission:Q,transmissionMap:B,thicknessMap:fe,gradientMap:re,opaque:y.transparent===!1&&y.blending===gn&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:Z,combine:y.combine,mapUv:Xe&&g(y.map.channel),aoMapUv:Je&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:Ve&&g(y.bumpMap.channel),normalMapUv:Mt&&g(y.normalMap.channel),displacementMapUv:I&&g(y.displacementMap.channel),emissiveMapUv:Ct&&g(y.emissiveMap.channel),metalnessMapUv:tt&&g(y.metalnessMap.channel),roughnessMapUv:ct&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:Ce&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(y.sheenRoughnessMap.channel),specularMapUv:Me&&g(y.specularMap.channel),specularColorMapUv:le&&g(y.specularColorMap.channel),specularIntensityMapUv:We&&g(y.specularIntensityMap.channel),transmissionMapUv:B&&g(y.transmissionMap.channel),thicknessMapUv:fe&&g(y.thicknessMap.channel),alphaMapUv:_e&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Mt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(Xe||_e),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:R.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:Ct&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ti,flipSided:y.side===ti,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(b(M,y),w(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function w(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let M=m[y.type],P;if(M){let X=en[M];P=qd.clone(X.uniforms)}else P=y.uniforms;return P}function E(y,M){let P=c.get(M);return P!==void 0?++P.usedTimes:(P=new sy(t,M,y,s),u.push(P),c.set(M,P)),P}function T(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function A(y){h.remove(y)}function H(){h.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:H}}function ly(){let t=new WeakMap;function e(o){return t.has(o)}function i(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function r(o,a,h){t.get(o)[a]=h}function s(){t=new WeakMap}return{has:e,get:i,remove:n,update:r,dispose:s}}function hy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mf(){let t=[],e=0,i=[],n=[],r=[];function s(){e=0,i.length=0,n.length=0,r.length=0}function o(c,d,f,m,g,_){let p=t[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:m,renderOrder:c.renderOrder,z:g,group:_},t[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=c.renderOrder,p.z=g,p.group=_),e++,p}function a(c,d,f,m,g,_){let p=o(c,d,f,m,g,_);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):i.push(p)}function h(c,d,f,m,g,_){let p=o(c,d,f,m,g,_);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):i.unshift(p)}function l(c,d){i.length>1&&i.sort(c||hy),n.length>1&&n.sort(d||pf),r.length>1&&r.sort(d||pf)}function u(){for(let c=e,d=t.length;c<d;c++){let f=t[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:a,unshift:h,finish:u,sort:l}}function cy(){let t=new WeakMap;function e(n,r){let s=t.get(n),o;return s===void 0?(o=new mf,t.set(n,[o])):r>=s.length?(o=new mf,s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function uy(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new V,color:new et};break;case"SpotLight":i={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":i={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=i,i}}}function dy(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var fy=0;function py(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function my(t){let e=new uy,i=dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let r=new V,s=new Tt,o=new Tt;function a(l){let u=0,c=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,g=0,_=0,p=0,b=0,w=0,x=0,E=0,T=0,A=0;l.sort(py);for(let y=0,M=l.length;y<M;y++){let P=l[y],X=P.color,R=P.intensity,N=P.distance,k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===_r?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=X.r*R,c+=X.g*R,d+=X.b*R;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],R);A++}else if(P.isDirectionalLight){let L=e.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let D=P.shadow,O=i.get(P);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=L,f++}else if(P.isSpotLight){let L=e.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(X).multiplyScalar(R),L.distance=N,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[g]=L;let D=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,D.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=D.matrix,P.castShadow){let O=i.get(P);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=k,x++}g++}else if(P.isRectAreaLight){let L=e.get(P);L.color.copy(X).multiplyScalar(R),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=L,_++}else if(P.isPointLight){let L=e.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){let D=P.shadow,O=i.get(P);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,O.shadowCameraNear=D.camera.near,O.shadowCameraFar=D.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=L,m++}else if(P.isHemisphereLight){let L=e.get(P);L.skyColor.copy(P.color).multiplyScalar(R),L.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[p]=L,p++}}_>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;let H=n.hash;(H.directionalLength!==f||H.pointLength!==m||H.spotLength!==g||H.rectAreaLength!==_||H.hemiLength!==p||H.numDirectionalShadows!==b||H.numPointShadows!==w||H.numSpotShadows!==x||H.numSpotMaps!==E||H.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,H.directionalLength=f,H.pointLength=m,H.spotLength=g,H.rectAreaLength=_,H.hemiLength=p,H.numDirectionalShadows=b,H.numPointShadows=w,H.numSpotShadows=x,H.numSpotMaps=E,H.numLightProbes=A,n.version=fy++)}function h(l,u){let c=0,d=0,f=0,m=0,g=0,_=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let w=l[p];if(w.isDirectionalLight){let x=n.directional[c];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),c++}else if(w.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(w.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),o.identity(),s.copy(w.matrixWorld),s.premultiply(_),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:h,state:n}}function _f(t){let e=new my(t),i=[],n=[];function r(u){l.camera=u,i.length=0,n.length=0}function s(u){i.push(u)}function o(u){n.push(u)}function a(){e.setup(i)}function h(u){e.setupView(i,u)}let l={lightsArray:i,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function _y(t){let e=new WeakMap;function i(r,s=0){let o=e.get(r),a;return o===void 0?(a=new _f(t),e.set(r,[a])):s>=o.length?(a=new _f(t),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:i,dispose:n}}var gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`,Sy=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],yy=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],gf=new Tt,Ys=new V,dc=new V;function xy(t,e,i){let n=new Ps,r=new qe,s=new qe,o=new _t,a=new na,h=new ra,l={},u=i.maxTextureSize,c={[_n]:ti,[ti]:_n,[Ti]:Ti},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:gy,fragmentShader:vy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ki;m.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ot(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let p=this.type;this.render=function(T,A,H){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;T.type===fd&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Us);let y=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Ji),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let R=p!==this.type;R&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=T.length;N<k;N++){let L=T[N],D=L.shadow;if(D===void 0){Te("WebGLShadowMap:",L,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||R===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===es){if(L.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new $t(r.x,r.y,{format:_r,type:ji,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),D.map.texture.name=L.name+".shadowMap",D.map.depthTexture=new Fn(r.x,r.y,Ui),D.map.depthTexture.name=L.name+".shadowMapDepth",D.map.depthTexture.format=$i,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=At,D.map.depthTexture.magFilter=At}else{L.isPointLight?(D.map=new Rs(r.x),D.map.depthTexture=new ta(r.x,Oi)):(D.map=new $t(r.x,r.y),D.map.depthTexture=new Fn(r.x,r.y,Oi)),D.map.depthTexture.name=L.name+".shadowMap",D.map.depthTexture.format=$i;let ee=t.state.buffers.depth.getReversed();this.type===Us?(D.map.depthTexture.compareFunction=ee?dl:ul,D.map.depthTexture.minFilter=Qe,D.map.depthTexture.magFilter=Qe):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=At,D.map.depthTexture.magFilter=At)}D.camera.updateProjectionMatrix()}let J=D.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<J;ee++){if(D.map.isWebGLCubeRenderTarget)t.setRenderTarget(D.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(D.map),t.clear());let ne=D.getViewport(ee);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),X.viewport(o)}if(L.isPointLight){let ne=D.camera,Ie=D.matrix,Le=L.distance||ne.far;Le!==ne.far&&(ne.far=Le,ne.updateProjectionMatrix()),Ys.setFromMatrixPosition(L.matrixWorld),ne.position.copy(Ys),dc.copy(ne.position),dc.add(Sy[ee]),ne.up.copy(yy[ee]),ne.lookAt(dc),ne.updateMatrixWorld(),Ie.makeTranslation(-Ys.x,-Ys.y,-Ys.z),gf.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),D._frustum.setFromProjectionMatrix(gf,ne.coordinateSystem,ne.reversedDepth)}else D.updateMatrices(L);n=D.getFrustum(),x(A,H,D.camera,L,this.type)}D.isPointLightShadow!==!0&&this.type===es&&b(D,H),D.needsUpdate=!1}p=this.type,_.needsUpdate=!1,t.setRenderTarget(y,M,P)};function b(T,A){let H=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(r.x,r.y,{format:_r,type:ji})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,H,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,H,f,g,null)}function w(T,A,H,y){let M=null,P=H.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=H.isPointLight===!0?h:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let X=M.uuid,R=A.uuid,N=l[X];N===void 0&&(N={},l[X]=N);let k=N[R];k===void 0&&(k=M.clone(),N[R]=k,A.addEventListener("dispose",E)),M=k}if(M.visible=A.visible,M.wireframe=A.wireframe,y===es?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:c[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,H.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let X=t.properties.get(M);X.light=H}return M}function x(T,A,H,y,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===es)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld);let R=e.update(T),N=T.material;if(Array.isArray(N)){let k=R.groups;for(let L=0,D=k.length;L<D;L++){let O=k[L],J=N[O.materialIndex];if(J&&J.visible){let ee=w(T,J,y,M);T.onBeforeShadow(t,T,A,H,R,ee,O),t.renderBufferDirect(H,null,R,ee,T,O),T.onAfterShadow(t,T,A,H,R,ee,O)}}}else if(N.visible){let k=w(T,N,y,M);T.onBeforeShadow(t,T,A,H,R,k,null),t.renderBufferDirect(H,null,R,k,T,null),T.onAfterShadow(t,T,A,H,R,k,null)}}let X=T.children;for(let R=0,N=X.length;R<N;R++)x(X[R],A,H,y,M)}function E(T){T.target.removeEventListener("dispose",E);for(let H in l){let y=l[H],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var by={[ga]:va,[Sa]:ba,[ya]:wa,[cr]:xa,[va]:ga,[ba]:Sa,[wa]:ya,[xa]:cr};function wy(t,e){function i(){let B=!1,fe=new _t,re=null,_e=new _t(0,0,0,0);return{setMask:function(te){re!==te&&!B&&(t.colorMask(te,te,te,te),re=te)},setLocked:function(te){B=te},setClear:function(te,Z,oe,Fe,ut){ut===!0&&(te*=Fe,Z*=Fe,oe*=Fe),fe.set(te,Z,oe,Fe),_e.equals(fe)===!1&&(t.clearColor(te,Z,oe,Fe),_e.copy(fe))},reset:function(){B=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let B=!1,fe=!1,re=null,_e=null,te=null;return{setReversed:function(Z){if(fe!==Z){let oe=e.get("EXT_clip_control");Z?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),fe=Z;let Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return fe},setTest:function(Z){Z?j(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(Z){re!==Z&&!B&&(t.depthMask(Z),re=Z)},setFunc:function(Z){if(fe&&(Z=by[Z]),_e!==Z){switch(Z){case ga:t.depthFunc(t.NEVER);break;case va:t.depthFunc(t.ALWAYS);break;case Sa:t.depthFunc(t.LESS);break;case cr:t.depthFunc(t.LEQUAL);break;case ya:t.depthFunc(t.EQUAL);break;case xa:t.depthFunc(t.GEQUAL);break;case ba:t.depthFunc(t.GREATER);break;case wa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Z}},setLocked:function(Z){B=Z},setClear:function(Z){te!==Z&&(fe&&(Z=1-Z),t.clearDepth(Z),te=Z)},reset:function(){B=!1,re=null,_e=null,te=null,fe=!1}}}function r(){let B=!1,fe=null,re=null,_e=null,te=null,Z=null,oe=null,Fe=null,ut=null;return{setTest:function(nt){B||(nt?j(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!B&&(t.stencilMask(nt),fe=nt)},setFunc:function(nt,Wi,ln){(re!==nt||_e!==Wi||te!==ln)&&(t.stencilFunc(nt,Wi,ln),re=nt,_e=Wi,te=ln)},setOp:function(nt,Wi,ln){(Z!==nt||oe!==Wi||Fe!==ln)&&(t.stencilOp(nt,Wi,ln),Z=nt,oe=Wi,Fe=ln)},setLocked:function(nt){B=nt},setClear:function(nt){ut!==nt&&(t.clearStencil(nt),ut=nt)},reset:function(){B=!1,fe=null,re=null,_e=null,te=null,Z=null,oe=null,Fe=null,ut=null}}}let s=new i,o=new n,a=new r,h=new WeakMap,l=new WeakMap,u={},c={},d=new WeakMap,f=[],m=null,g=!1,_=null,p=null,b=null,w=null,x=null,E=null,T=null,A=new et(0,0,0),H=0,y=!1,M=null,P=null,X=null,R=null,N=null,k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,D=0,O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=D>=1):O.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=D>=2);let J=null,ee={},ne=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),Le=new _t().fromArray(ne),Oe=new _t().fromArray(Ie);function Ke(B,fe,re,_e){let te=new Uint8Array(4),Z=t.createTexture();t.bindTexture(B,Z),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let oe=0;oe<re;oe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(fe+oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return Z}let $={};$[t.TEXTURE_2D]=Ke(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=Ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=Ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=Ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(t.DEPTH_TEST),o.setFunc(cr),Ve(!1),Mt(Nh),j(t.CULL_FACE),Je(Ji);function j(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function me(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function Pe(B,fe){return c[B]!==fe?(t.bindFramebuffer(B,fe),c[B]=fe,B===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=fe),B===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ve(B,fe){let re=f,_e=!1;if(B){re=d.get(fe),re===void 0&&(re=[],d.set(fe,re));let te=B.textures;if(re.length!==te.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,oe=te.length;Z<oe;Z++)re[Z]=t.COLOR_ATTACHMENT0+Z;re.length=te.length,_e=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,_e=!0);_e&&t.drawBuffers(re)}function Xe(B){return m!==B?(t.useProgram(B),m=B,!0):!1}let at={[Nn]:t.FUNC_ADD,[md]:t.FUNC_SUBTRACT,[_d]:t.FUNC_REVERSE_SUBTRACT};at[gd]=t.MIN,at[vd]=t.MAX;let Se={[Sd]:t.ZERO,[yd]:t.ONE,[xd]:t.SRC_COLOR,[Go]:t.SRC_ALPHA,[Td]:t.SRC_ALPHA_SATURATE,[Cd]:t.DST_COLOR,[wd]:t.DST_ALPHA,[bd]:t.ONE_MINUS_SRC_COLOR,[Xo]:t.ONE_MINUS_SRC_ALPHA,[Ed]:t.ONE_MINUS_DST_COLOR,[Md]:t.ONE_MINUS_DST_ALPHA,[Ad]:t.CONSTANT_COLOR,[Rd]:t.ONE_MINUS_CONSTANT_COLOR,[Pd]:t.CONSTANT_ALPHA,[Id]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(B,fe,re,_e,te,Z,oe,Fe,ut,nt){if(B===Ji){g===!0&&(me(t.BLEND),g=!1);return}if(g===!1&&(j(t.BLEND),g=!0),B!==pd){if(B!==_||nt!==y){if((p!==Nn||x!==Nn)&&(t.blendEquation(t.FUNC_ADD),p=Nn,x=Nn),nt)switch(B){case gn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bh:t.blendFunc(t.ONE,t.ONE);break;case kh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:De("WebGLState: Invalid blending: ",B);break}else switch(B){case gn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case kh:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",B);break}b=null,w=null,E=null,T=null,A.set(0,0,0),H=0,_=B,y=nt}return}te=te||fe,Z=Z||re,oe=oe||_e,(fe!==p||te!==x)&&(t.blendEquationSeparate(at[fe],at[te]),p=fe,x=te),(re!==b||_e!==w||Z!==E||oe!==T)&&(t.blendFuncSeparate(Se[re],Se[_e],Se[Z],Se[oe]),b=re,w=_e,E=Z,T=oe),(Fe.equals(A)===!1||ut!==H)&&(t.blendColor(Fe.r,Fe.g,Fe.b,ut),A.copy(Fe),H=ut),_=B,y=!1}function lt(B,fe){B.side===Ti?me(t.CULL_FACE):j(t.CULL_FACE);let re=B.side===ti;fe&&(re=!re),Ve(re),B.blending===gn&&B.transparent===!1?Je(Ji):Je(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let _e=B.stencilWrite;a.setTest(_e),_e&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?j(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(B){M!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),M=B)}function Mt(B){B!==ud?(j(t.CULL_FACE),B!==P&&(B===Nh?t.cullFace(t.BACK):B===dd?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),P=B}function I(B){B!==X&&(L&&t.lineWidth(B),X=B)}function Ct(B,fe,re){B?(j(t.POLYGON_OFFSET_FILL),(R!==fe||N!==re)&&(t.polygonOffset(fe,re),R=fe,N=re)):me(t.POLYGON_OFFSET_FILL)}function tt(B){B?j(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function ct(B){B===void 0&&(B=t.TEXTURE0+k-1),J!==B&&(t.activeTexture(B),J=B)}function we(B,fe,re){re===void 0&&(J===null?re=t.TEXTURE0+k-1:re=J);let _e=ee[re];_e===void 0&&(_e={type:void 0,texture:void 0},ee[re]=_e),(_e.type!==B||_e.texture!==fe)&&(J!==re&&(t.activeTexture(re),J=re),t.bindTexture(B,fe||$[B]),_e.type=B,_e.texture=fe)}function C(){let B=ee[J];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(B){De("WebGLState:",B)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(B){De("WebGLState:",B)}}function Y(){try{t.texSubImage2D(...arguments)}catch(B){De("WebGLState:",B)}}function Q(){try{t.texSubImage3D(...arguments)}catch(B){De("WebGLState:",B)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(B){De("WebGLState:",B)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(B){De("WebGLState:",B)}}function ae(){try{t.texStorage2D(...arguments)}catch(B){De("WebGLState:",B)}}function be(){try{t.texStorage3D(...arguments)}catch(B){De("WebGLState:",B)}}function Be(){try{t.texImage2D(...arguments)}catch(B){De("WebGLState:",B)}}function ie(){try{t.texImage3D(...arguments)}catch(B){De("WebGLState:",B)}}function he(B){Le.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Le.copy(B))}function xe(B){Oe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Oe.copy(B))}function Me(B,fe){let re=l.get(fe);re===void 0&&(re=new WeakMap,l.set(fe,re));let _e=re.get(B);_e===void 0&&(_e=t.getUniformBlockIndex(fe,B.name),re.set(B,_e))}function le(B,fe){let _e=l.get(fe).get(B);h.get(fe)!==_e&&(t.uniformBlockBinding(fe,_e,B.__bindingPointIndex),h.set(fe,_e))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},J=null,ee={},c={},d=new WeakMap,f=[],m=null,g=!1,_=null,p=null,b=null,w=null,x=null,E=null,T=null,A=new et(0,0,0),H=0,y=!1,M=null,P=null,X=null,R=null,N=null,Le.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:me,bindFramebuffer:Pe,drawBuffers:ve,useProgram:Xe,setBlending:Je,setMaterial:lt,setFlipSided:Ve,setCullFace:Mt,setLineWidth:I,setPolygonOffset:Ct,setScissorTest:tt,activeTexture:ct,bindTexture:we,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Be,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:ae,texStorage3D:be,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:he,viewport:xe,reset:We}}function My(t,e,i,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,c,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return f?new OffscreenCanvas(C,v):$r("canvas")}function g(C,v,F){let Y=1,Q=we(C);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(Y*Q.width),Ce=Math.floor(Y*Q.height);c===void 0&&(c=m(q,Ce));let ae=v?m(q,Ce):c;return ae.width=q,ae.height=Ce,ae.getContext("2d").drawImage(C,0,0,q,Ce),Te("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ce+")."),ae}else return"data"in C&&Te("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function _(C){return C.generateMipmaps}function p(C){t.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(C,v,F,Y,Q=!1){if(C!==null){if(t[C]!==void 0)return t[C];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=v;if(v===t.RED&&(F===t.FLOAT&&(q=t.R32F),F===t.HALF_FLOAT&&(q=t.R16F),F===t.UNSIGNED_BYTE&&(q=t.R8)),v===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.R8UI),F===t.UNSIGNED_SHORT&&(q=t.R16UI),F===t.UNSIGNED_INT&&(q=t.R32UI),F===t.BYTE&&(q=t.R8I),F===t.SHORT&&(q=t.R16I),F===t.INT&&(q=t.R32I)),v===t.RG&&(F===t.FLOAT&&(q=t.RG32F),F===t.HALF_FLOAT&&(q=t.RG16F),F===t.UNSIGNED_BYTE&&(q=t.RG8)),v===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RG8UI),F===t.UNSIGNED_SHORT&&(q=t.RG16UI),F===t.UNSIGNED_INT&&(q=t.RG32UI),F===t.BYTE&&(q=t.RG8I),F===t.SHORT&&(q=t.RG16I),F===t.INT&&(q=t.RG32I)),v===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(q=t.RGB16UI),F===t.UNSIGNED_INT&&(q=t.RGB32UI),F===t.BYTE&&(q=t.RGB8I),F===t.SHORT&&(q=t.RGB16I),F===t.INT&&(q=t.RGB32I)),v===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),F===t.UNSIGNED_INT&&(q=t.RGBA32UI),F===t.BYTE&&(q=t.RGBA8I),F===t.SHORT&&(q=t.RGBA16I),F===t.INT&&(q=t.RGBA32I)),v===t.RGB&&(F===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),v===t.RGBA){let Ce=Q?ys:Ze.getTransfer(Y);F===t.FLOAT&&(q=t.RGBA32F),F===t.HALF_FLOAT&&(q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(q=Ce===it?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(C,v){let F;return C?v===null||v===Oi||v===is?F=t.DEPTH24_STENCIL8:v===Ui?F=t.DEPTH32F_STENCIL8:v===ts&&(F=t.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===is?F=t.DEPTH_COMPONENT24:v===Ui?F=t.DEPTH_COMPONENT32F:v===ts&&(F=t.DEPTH_COMPONENT16),F}function E(C,v){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==At&&C.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function T(C){let v=C.target;v.removeEventListener("dispose",T),H(v),v.isVideoTexture&&u.delete(v)}function A(C){let v=C.target;v.removeEventListener("dispose",A),M(v)}function H(C){let v=n.get(C);if(v.__webglInit===void 0)return;let F=C.source,Y=d.get(F);if(Y){let Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(C),Object.keys(Y).length===0&&d.delete(F)}n.remove(C)}function y(C){let v=n.get(C);t.deleteTexture(v.__webglTexture);let F=C.source,Y=d.get(F);delete Y[v.__cacheKey],o.memory.textures--}function M(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else t.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[Y]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=C.textures;for(let Y=0,Q=F.length;Y<Q;Y++){let q=n.get(F[Y]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(C)}let P=0;function X(){P=0}function R(){let C=P;return C>=r.maxTextures&&Te("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function N(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function k(C,v){let F=n.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){let Y=C.image;if(Y===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,C,v);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+v)}function L(C,v){let F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,v);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+v)}function D(C,v){let F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,v);return}i.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+v)}function O(C,v){let F=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){j(F,C,v);return}i.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+v)}let J={[ur]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[$o]:t.MIRRORED_REPEAT},ee={[At]:t.NEAREST,[Nd]:t.NEAREST_MIPMAP_NEAREST,[Hs]:t.NEAREST_MIPMAP_LINEAR,[Qe]:t.LINEAR,[Ea]:t.LINEAR_MIPMAP_NEAREST,[Vn]:t.LINEAR_MIPMAP_LINEAR},ne={[Od]:t.NEVER,[Wd]:t.ALWAYS,[Ud]:t.LESS,[ul]:t.LEQUAL,[zd]:t.EQUAL,[dl]:t.GEQUAL,[Hd]:t.GREATER,[Vd]:t.NOTEQUAL};function Ie(C,v){if(v.type===Ui&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===Ea||v.magFilter===Hs||v.magFilter===Vn||v.minFilter===Qe||v.minFilter===Ea||v.minFilter===Hs||v.minFilter===Vn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,J[v.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,J[v.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,J[v.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ee[v.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===At||v.minFilter!==Hs&&v.minFilter!==Vn||v.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Le(C,v){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",T));let Y=v.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let q=N(v);if(q!==C.__cacheKey){Q[q]===void 0&&(Q[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;let Ce=Q[C.__cacheKey];Ce!==void 0&&(Q[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(v)),C.__cacheKey=q,C.__webglTexture=Q[q].texture}return F}function Oe(C,v,F){return Math.floor(Math.floor(C/F)/v)}function Ke(C,v,F,Y){let q=C.updateRanges;if(q.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,F,Y,v.data);else{q.sort((ie,he)=>ie.start-he.start);let Ce=0;for(let ie=1;ie<q.length;ie++){let he=q[Ce],xe=q[ie],Me=he.start+he.count,le=Oe(xe.start,v.width,4),We=Oe(he.start,v.width,4);xe.start<=Me+1&&le===We&&Oe(xe.start+xe.count-1,v.width,4)===le?he.count=Math.max(he.count,xe.start+xe.count-he.start):(++Ce,q[Ce]=xe)}q.length=Ce+1;let ae=t.getParameter(t.UNPACK_ROW_LENGTH),be=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ie=0,he=q.length;ie<he;ie++){let xe=q[ie],Me=Math.floor(xe.start/4),le=Math.ceil(xe.count/4),We=Me%v.width,B=Math.floor(Me/v.width),fe=le,re=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),i.texSubImage2D(t.TEXTURE_2D,0,We,B,fe,re,F,Y,v.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,be),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function $(C,v,F){let Y=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=t.TEXTURE_3D);let Q=Le(C,v),q=v.source;i.bindTexture(Y,C.__webglTexture,t.TEXTURE0+F);let Ce=n.get(q);if(q.version!==Ce.__version||Q===!0){i.activeTexture(t.TEXTURE0+F);let ae=Ze.getPrimaries(Ze.workingColorSpace),be=v.colorSpace===Sn?null:Ze.getPrimaries(v.colorSpace),Be=v.colorSpace===Sn||ae===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ie=g(v.image,!1,r.maxTextureSize);ie=ct(v,ie);let he=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),Me=w(v.internalFormat,he,xe,v.colorSpace,v.isVideoTexture);Ie(Y,v);let le,We=v.mipmaps,B=v.isVideoTexture!==!0,fe=Ce.__version===void 0||Q===!0,re=q.dataReady,_e=E(v,ie);if(v.isDepthTexture)Me=x(v.format===Wn,v.type),fe&&(B?i.texStorage2D(t.TEXTURE_2D,1,Me,ie.width,ie.height):i.texImage2D(t.TEXTURE_2D,0,Me,ie.width,ie.height,0,he,xe,null));else if(v.isDataTexture)if(We.length>0){B&&fe&&i.texStorage2D(t.TEXTURE_2D,_e,Me,We[0].width,We[0].height);for(let te=0,Z=We.length;te<Z;te++)le=We[te],B?re&&i.texSubImage2D(t.TEXTURE_2D,te,0,0,le.width,le.height,he,xe,le.data):i.texImage2D(t.TEXTURE_2D,te,Me,le.width,le.height,0,he,xe,le.data);v.generateMipmaps=!1}else B?(fe&&i.texStorage2D(t.TEXTURE_2D,_e,Me,ie.width,ie.height),re&&Ke(v,ie,he,xe)):i.texImage2D(t.TEXTURE_2D,0,Me,ie.width,ie.height,0,he,xe,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&fe&&i.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Me,We[0].width,We[0].height,ie.depth);for(let te=0,Z=We.length;te<Z;te++)if(le=We[te],v.format!==Yt)if(he!==null)if(B){if(re)if(v.layerUpdates.size>0){let oe=oc(le.width,le.height,v.format,v.type);for(let Fe of v.layerUpdates){let ut=le.data.subarray(Fe*oe/le.data.BYTES_PER_ELEMENT,(Fe+1)*oe/le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Fe,le.width,le.height,1,he,ut)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,ie.depth,he,le.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Me,le.width,le.height,ie.depth,0,le.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?re&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,ie.depth,he,xe,le.data):i.texImage3D(t.TEXTURE_2D_ARRAY,te,Me,le.width,le.height,ie.depth,0,he,xe,le.data)}else{B&&fe&&i.texStorage2D(t.TEXTURE_2D,_e,Me,We[0].width,We[0].height);for(let te=0,Z=We.length;te<Z;te++)le=We[te],v.format!==Yt?he!==null?B?re&&i.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,le.width,le.height,he,le.data):i.compressedTexImage2D(t.TEXTURE_2D,te,Me,le.width,le.height,0,le.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?re&&i.texSubImage2D(t.TEXTURE_2D,te,0,0,le.width,le.height,he,xe,le.data):i.texImage2D(t.TEXTURE_2D,te,Me,le.width,le.height,0,he,xe,le.data)}else if(v.isDataArrayTexture)if(B){if(fe&&i.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Me,ie.width,ie.height,ie.depth),re)if(v.layerUpdates.size>0){let te=oc(ie.width,ie.height,v.format,v.type);for(let Z of v.layerUpdates){let oe=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,he,xe,oe)}v.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,xe,ie.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,he,xe,ie.data);else if(v.isData3DTexture)B?(fe&&i.texStorage3D(t.TEXTURE_3D,_e,Me,ie.width,ie.height,ie.depth),re&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,xe,ie.data)):i.texImage3D(t.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,he,xe,ie.data);else if(v.isFramebufferTexture){if(fe)if(B)i.texStorage2D(t.TEXTURE_2D,_e,Me,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let oe=0;oe<_e;oe++)i.texImage2D(t.TEXTURE_2D,oe,Me,te,Z,0,he,xe,null),te>>=1,Z>>=1}}else if(We.length>0){if(B&&fe){let te=we(We[0]);i.texStorage2D(t.TEXTURE_2D,_e,Me,te.width,te.height)}for(let te=0,Z=We.length;te<Z;te++)le=We[te],B?re&&i.texSubImage2D(t.TEXTURE_2D,te,0,0,he,xe,le):i.texImage2D(t.TEXTURE_2D,te,Me,he,xe,le);v.generateMipmaps=!1}else if(B){if(fe){let te=we(ie);i.texStorage2D(t.TEXTURE_2D,_e,Me,te.width,te.height)}re&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,he,xe,ie)}else i.texImage2D(t.TEXTURE_2D,0,Me,he,xe,ie);_(v)&&p(Y),Ce.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function j(C,v,F){if(v.image.length!==6)return;let Y=Le(C,v),Q=v.source;i.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);let q=n.get(Q);if(Q.version!==q.__version||Y===!0){i.activeTexture(t.TEXTURE0+F);let Ce=Ze.getPrimaries(Ze.workingColorSpace),ae=v.colorSpace===Sn?null:Ze.getPrimaries(v.colorSpace),be=v.colorSpace===Sn||Ce===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Be=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!Be&&!ie?he[Z]=g(v.image[Z],!0,r.maxCubemapSize):he[Z]=ie?v.image[Z].image:v.image[Z],he[Z]=ct(v,he[Z]);let xe=he[0],Me=s.convert(v.format,v.colorSpace),le=s.convert(v.type),We=w(v.internalFormat,Me,le,v.colorSpace),B=v.isVideoTexture!==!0,fe=q.__version===void 0||Y===!0,re=Q.dataReady,_e=E(v,xe);Ie(t.TEXTURE_CUBE_MAP,v);let te;if(Be){B&&fe&&i.texStorage2D(t.TEXTURE_CUBE_MAP,_e,We,xe.width,xe.height);for(let Z=0;Z<6;Z++){te=he[Z].mipmaps;for(let oe=0;oe<te.length;oe++){let Fe=te[oe];v.format!==Yt?Me!==null?B?re&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Fe.width,Fe.height,Me,Fe.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,We,Fe.width,Fe.height,0,Fe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?re&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Fe.width,Fe.height,Me,le,Fe.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,We,Fe.width,Fe.height,0,Me,le,Fe.data)}}}else{if(te=v.mipmaps,B&&fe){te.length>0&&_e++;let Z=we(he[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,_e,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){B?re&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Me,le,he[Z].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,he[Z].width,he[Z].height,0,Me,le,he[Z].data);for(let oe=0;oe<te.length;oe++){let ut=te[oe].image[Z].image;B?re&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,ut.width,ut.height,Me,le,ut.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,We,ut.width,ut.height,0,Me,le,ut.data)}}else{B?re&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,le,he[Z]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Me,le,he[Z]);for(let oe=0;oe<te.length;oe++){let Fe=te[oe];B?re&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Me,le,Fe.image[Z]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,We,Me,le,Fe.image[Z])}}}_(v)&&p(t.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function me(C,v,F,Y,Q,q){let Ce=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),be=w(F.internalFormat,Ce,ae,F.colorSpace),Be=n.get(v),ie=n.get(F);if(ie.__renderTarget=v,!Be.__hasExternalTextures){let he=Math.max(1,v.width>>q),xe=Math.max(1,v.height>>q);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?i.texImage3D(Q,q,be,he,xe,v.depth,0,Ce,ae,null):i.texImage2D(Q,q,be,he,xe,0,Ce,ae,null)}i.bindFramebuffer(t.FRAMEBUFFER,C),Ct(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Q,ie.__webglTexture,0,I(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Q,ie.__webglTexture,q),i.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(C,v,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),v.depthBuffer){let Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(v.stencilBuffer,Q),Ce=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(v),q,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(v),q,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,q,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,C)}else{let Y=v.textures;for(let Q=0;Q<Y.length;Q++){let q=Y[Q],Ce=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),be=w(q.internalFormat,Ce,ae,q.colorSpace);Ct(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(v),be,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(v),be,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,be,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(C,v,F){let Y=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,v.depthTexture);let Be=s.convert(v.depthTexture.format),ie=s.convert(v.depthTexture.type),he;v.depthTexture.format===$i?he=t.DEPTH_COMPONENT24:v.depthTexture.format===Wn&&(he=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,v.width,v.height,0,Be,ie,null)}}else k(v.depthTexture,0);let q=Q.__webglTexture,Ce=I(v),ae=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,be=v.depthTexture.format===Wn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===$i)Ct(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,ae,q,0,Ce):t.framebufferTexture2D(t.FRAMEBUFFER,be,ae,q,0);else if(v.depthTexture.format===Wn)Ct(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,ae,q,0,Ce):t.framebufferTexture2D(t.FRAMEBUFFER,be,ae,q,0);else throw new Error("Unknown depthTexture format")}function Xe(C){let v=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)ve(v.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?ve(v.__webglFramebuffer[0],C,0):ve(v.__webglFramebuffer,C,0)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=t.createRenderbuffer(),Pe(v.__webglDepthbuffer[Y],C,!1);else{let Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,q)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Pe(v.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,q)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function at(C,v,F){let Y=n.get(C);v!==void 0&&me(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Xe(C)}function Se(C){let v=C.texture,F=n.get(C),Y=n.get(v);C.addEventListener("dispose",A);let Q=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=v.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let be=0;be<v.mipmaps.length;be++)F.__webglFramebuffer[ae][be]=t.createFramebuffer()}else F.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)F.__webglFramebuffer[ae]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let ae=0,be=Q.length;ae<be;ae++){let Be=n.get(Q[ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ct(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){let be=Q[ae];F.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);let Be=s.convert(be.format,be.colorSpace),ie=s.convert(be.type),he=w(be.internalFormat,Be,ie,be.colorSpace,C.isXRRenderTarget===!0),xe=I(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){i.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)me(F.__webglFramebuffer[ae][be],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be);else me(F.__webglFramebuffer[ae],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(v)&&p(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ce){for(let ae=0,be=Q.length;ae<be;ae++){let Be=Q[ae],ie=n.get(Be),he=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(he,ie.__webglTexture),Ie(he,Be),me(F.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+ae,he,0),_(Be)&&p(he)}i.unbindTexture()}else{let ae=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ae,Y.__webglTexture),Ie(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)me(F.__webglFramebuffer[be],C,v,t.COLOR_ATTACHMENT0,ae,be);else me(F.__webglFramebuffer,C,v,t.COLOR_ATTACHMENT0,ae,0);_(v)&&p(ae),i.unbindTexture()}C.depthBuffer&&Xe(C)}function Je(C){let v=C.textures;for(let F=0,Y=v.length;F<Y;F++){let Q=v[F];if(_(Q)){let q=b(C),Ce=n.get(Q).__webglTexture;i.bindTexture(q,Ce),p(q),i.unbindTexture()}}}let lt=[],Ve=[];function Mt(C){if(C.samples>0){if(Ct(C)===!1){let v=C.textures,F=C.width,Y=C.height,Q=t.COLOR_BUFFER_BIT,q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=n.get(C),ae=v.length>1;if(ae)for(let Be=0;Be<v.length;Be++)i.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let be=C.texture.mipmaps;be&&be.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Be=0;Be<v.length;Be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Be]);let ie=n.get(v[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,t.NEAREST),h===!0&&(lt.length=0,Ve.length=0,lt.push(t.COLOR_ATTACHMENT0+Be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(lt.push(q),Ve.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Be=0;Be<v.length;Be++){i.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Be]);let ie=n.get(v[Be]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,ie,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){let v=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(r.maxSamples,C.samples)}function Ct(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function tt(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function ct(C,v){let F=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==dr&&F!==Sn&&(Ze.getTransfer(F)===it?(Y!==Yt||Q!==qt)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",F)),v}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=L,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=at,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Cy(t,e){function i(n,r=Sn){let s,o=Ze.getTransfer(r);if(n===qt)return t.UNSIGNED_BYTE;if(n===Aa)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return t.BYTE;if(n===Yh)return t.SHORT;if(n===ts)return t.UNSIGNED_SHORT;if(n===Ta)return t.INT;if(n===Oi)return t.UNSIGNED_INT;if(n===Ui)return t.FLOAT;if(n===ji)return t.HALF_FLOAT;if(n===Jh)return t.ALPHA;if(n===jh)return t.RGB;if(n===Yt)return t.RGBA;if(n===$i)return t.DEPTH_COMPONENT;if(n===Wn)return t.DEPTH_STENCIL;if(n===Qh)return t.RED;if(n===Pa)return t.RED_INTEGER;if(n===_r)return t.RG;if(n===Ia)return t.RG_INTEGER;if(n===La)return t.RGBA_INTEGER;if(n===Vs||n===Ws||n===Gs||n===Xs)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Ba||n===ka)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ua||n===za||n===Ha||n===Va||n===Wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fa||n===Oa)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return s.COMPRESSED_R11_EAC;if(n===Ha)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Va)return s.COMPRESSED_RG11_EAC;if(n===Wa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Xa||n===$a||n===qa||n===Ya||n===Ka||n===Za||n===Ja||n===ja||n===Qa||n===el||n===tl||n===il||n===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===sl||n===ol)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rl)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ll||n===hl||n===cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===al)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:i}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let i=e.cameras[0].viewport,n=new It({vertexShader:Ey,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ot(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends vn{constructor(e,i){super();let n=this,r=null,s=1,o=null,a="local-floor",h=1,l=null,u=null,c=null,d=null,f=null,m=null,g=typeof XRWebGLBinding<"u",_=new yc,p={},b=i.getContextAttributes(),w=null,x=null,E=[],T=[],A=new qe,H=null,y=new hi;y.viewport=new _t;let M=new hi;M.viewport=new _t;let P=[y,M],X=new ma,R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=E[$];return j===void 0&&(j=new jr,E[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=E[$];return j===void 0&&(j=new jr,E[$]=j),j.getGripSpace()},this.getHand=function($){let j=E[$];return j===void 0&&(j=new jr,E[$]=j),j.getHandSpace()};function k($){let j=T.indexOf($.inputSource);if(j===-1)return;let me=E[j];me!==void 0&&(me.update($.inputSource,$.frame,l||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function L(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",D);for(let $=0;$<E.length;$++){let j=T[$];j!==null&&(T[$]=null,E[$].disconnect(j))}R=null,N=null,_.reset();for(let $ in p)delete p[$];e.setRenderTarget(w),f=null,d=null,c=null,r=null,x=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(r,i)),c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",L),r.addEventListener("inputsourceschange",D),b.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Pe=null,ve=null;b.depth&&(ve=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,me=b.stencil?Wn:$i,Pe=b.stencil?is:Oi);let Xe={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:s};c=this.getBinding(),d=c.createProjectionLayer(Xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $t(d.textureWidth,d.textureHeight,{format:Yt,type:qt,depthTexture:new Fn(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,i,me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $t(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D($){for(let j=0;j<$.removed.length;j++){let me=$.removed[j],Pe=T.indexOf(me);Pe>=0&&(T[Pe]=null,E[Pe].disconnect(me))}for(let j=0;j<$.added.length;j++){let me=$.added[j],Pe=T.indexOf(me);if(Pe===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=T.length){T.push(me),Pe=Xe;break}else if(T[Xe]===null){T[Xe]=me,Pe=Xe;break}if(Pe===-1)break}let ve=E[Pe];ve&&ve.connect(me)}}let O=new V,J=new V;function ee($,j,me){O.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);let Pe=O.distanceTo(J),ve=j.projectionMatrix.elements,Xe=me.projectionMatrix.elements,at=ve[14]/(ve[10]-1),Se=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],lt=(ve[9]-1)/ve[5],Ve=(ve[8]-1)/ve[0],Mt=(Xe[8]+1)/Xe[0],I=at*Ve,Ct=at*Mt,tt=Pe/(-Ve+Mt),ct=tt*-Ve;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let we=at+tt,C=Se+tt,v=I-ct,F=Ct+(Pe-ct),Y=Je*Se/C*we,Q=lt*Se/C*we;$.projectionMatrix.makePerspective(v,F,Y,Q,we,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let j=$.near,me=$.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(me=_.depthFar)),X.near=M.near=y.near=j,X.far=M.far=y.far=me,(R!==X.near||N!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),R=X.near,N=X.far),X.layers.mask=$.layers.mask|6,y.layers.mask=X.layers.mask&3,M.layers.mask=X.layers.mask&5;let Pe=$.parent,ve=X.cameras;ne(X,Pe);for(let Xe=0;Xe<ve.length;Xe++)ne(ve[Xe],Pe);ve.length===2?ee(X,y,M):X.projectionMatrix.copy(y.projectionMatrix),Ie($,X,Pe)};function Ie($,j,me){me===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Yo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function($){h=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(X)},this.getCameraTexture=function($){return p[$]};let Le=null;function Oe($,j){if(u=j.getViewerPose(l||o),m=j,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Pe=!1;me.length!==X.cameras.length&&(X.cameras.length=0,Pe=!0);for(let Se=0;Se<me.length;Se++){let Je=me[Se],lt=null;if(f!==null)lt=f.getViewport(Je);else{let Mt=c.getViewSubImage(d,Je);lt=Mt.viewport,Se===0&&(e.setRenderTargetTextures(x,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(x))}let Ve=P[Se];Ve===void 0&&(Ve=new hi,Ve.layers.enable(Se),Ve.viewport=new _t,P[Se]=Ve),Ve.matrix.fromArray(Je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(lt.x,lt.y,lt.width,lt.height),Se===0&&(X.matrix.copy(Ve.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Pe===!0&&X.cameras.push(Ve)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){c=n.getBinding();let Se=c.getDepthInformation(me[0]);Se&&Se.isValid&&Se.texture&&_.init(Se,r.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),c=n.getBinding();for(let Se=0;Se<me.length;Se++){let Je=me[Se].camera;if(Je){let lt=p[Je];lt||(lt=new Ds,p[Je]=lt);let Ve=c.getCameraImage(Je);lt.sourceTexture=Ve}}}}for(let me=0;me<E.length;me++){let Pe=T[me],ve=E[me];Pe!==null&&ve!==void 0&&ve.update(Pe,j,l||o)}Le&&Le($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let Ke=new vf;Ke.setAnimationLoop(Oe),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}},Sr=new Yi,Ay=new Tt;function Ry(t,e){function i(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,nc(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,b,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),c(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&f(_,p,x)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?h(_,p,b,w):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,i(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,i(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===ti&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,i(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===ti&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,i(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,i(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let b=e.get(p),w=b.envMap,x=b.envMapRotation;w&&(_.envMap.value=w,Sr.copy(x),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),_.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(Sr)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,i(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function h(_,p,b,w){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*b,_.scale.value=w*.5,p.map&&(_.map.value=p.map,i(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,i(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function c(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,b){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){let b=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Py(t,e,i,n){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,w){let x=w.program;n.uniformBlockBinding(b,x)}function l(b,w){let x=r[b.id];x===void 0&&(m(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",_));let E=w.program;n.updateUBOMapping(b,E);let T=e.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function u(b){let w=c();b.__bindingPointIndex=w;let x=t.createBuffer(),E=b.__size,T=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,x),x}function c(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=r[b.id],x=b.uniforms,E=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let T=0,A=x.length;T<A;T++){let H=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,M=H.length;y<M;y++){let P=H[y];if(f(P,T,y,E)===!0){let X=P.__offset,R=Array.isArray(P.value)?P.value:[P.value],N=0;for(let k=0;k<R.length;k++){let L=R[k],D=g(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,X+N,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(b,w,x,E){let T=b.value,A=w+"_"+x;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let H=E[A];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return E[A]=T,!0}else if(H.equals(T)===!1)return H.copy(T),!0}return!1}function m(b){let w=b.uniforms,x=0,E=16;for(let A=0,H=w.length;A<H;A++){let y=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,P=y.length;M<P;M++){let X=y[M],R=Array.isArray(X.value)?X.value:[X.value];for(let N=0,k=R.length;N<k;N++){let L=R[N],D=g(L),O=x%E,J=O%D.boundary,ee=O+J;x+=J,ee!==0&&E-ee<D.storage&&(x+=E-ee),X.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=D.storage}}}let T=x%E;return T>0&&(x+=E-T),b.__size=x,b.__cache={},this}function g(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Te("WebGLRenderer: Unsupported uniform value type.",b),w}function _(b){let w=b.target;w.removeEventListener("dispose",_);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let b in r)t.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:h,update:l,dispose:p}}var Iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function Ly(){return Qi===null&&(Qi=new ea(Iy,16,16,_r,ji),Qi.name="DFG_LUT",Qi.minFilter=Qe,Qi.magFilter=Qe,Qi.wrapS=Xi,Qi.wrapT=Xi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var _l=class{constructor(e={}){let{canvas:i=Gd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:f=qt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=f,_=new Set([La,Ia,Pa]),p=new Set([qt,Oi,ts,is,Aa,Ra]),b=new Uint32Array(4),w=new Int32Array(4),x=null,E=null,T=[],A=[],H=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,M=!1;this._outputColorSpace=gi;let P=0,X=0,R=null,N=-1,k=null,L=new _t,D=new _t,O=null,J=new et(0),ee=0,ne=i.width,Ie=i.height,Le=1,Oe=null,Ke=null,$=new _t(0,0,ne,Ie),j=new _t(0,0,ne,Ie),me=!1,Pe=new Ps,ve=!1,Xe=!1,at=new Tt,Se=new V,Je=new _t,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Mt(){return R===null?Le:1}let I=n;function Ct(S,U){return i.getContext(S,U)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${"182"}`),i.addEventListener("webglcontextlost",Fe,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",nt,!1),I===null){let U="webgl2";if(I=Ct(U,S),I===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw De("WebGLRenderer: "+S.message),S}let tt,ct,we,C,v,F,Y,Q,q,Ce,ae,be,Be,ie,he,xe,Me,le,We,B,fe,re,_e,te;function Z(){tt=new Uv(I),tt.init(),re=new Cy(I,tt),ct=new Pv(I,tt,e,re),we=new wy(I,tt),ct.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),C=new Vv(I),v=new ly,F=new My(I,tt,we,v,ct,re,C),Y=new Lv(y),Q=new Ov(y),q=new $_(I),_e=new Av(I,q),Ce=new zv(I,q,C,_e),ae=new Gv(I,Ce,q,C),We=new Wv(I,ct,F),xe=new Iv(v),be=new ay(y,Y,Q,tt,ct,_e,xe),Be=new Ry(y,v),ie=new cy,he=new _y(tt),le=new Tv(y,Y,Q,we,ae,m,h),Me=new xy(y,ae,ct),te=new Py(I,C,ct,we),B=new Rv(I,tt,C),fe=new Hv(I,tt,C),C.programs=be.programs,y.capabilities=ct,y.extensions=tt,y.properties=v,y.renderLists=ie,y.shadowMap=Me,y.state=we,y.info=C}Z(),g!==qt&&(H=new $v(g,i.width,i.height,r,s));let oe=new xc(y,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(S){S!==void 0&&(Le=S,this.setSize(ne,Ie,!1))},this.getSize=function(S){return S.set(ne,Ie)},this.setSize=function(S,U,G=!0){if(oe.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,Ie=U,i.width=Math.floor(S*Le),i.height=Math.floor(U*Le),G===!0&&(i.style.width=S+"px",i.style.height=U+"px"),H!==null&&H.setSize(i.width,i.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ne*Le,Ie*Le).floor()},this.setDrawingBufferSize=function(S,U,G){ne=S,Ie=U,Le=G,i.width=Math.floor(S*G),i.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(g===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,U,G,W){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,U,G,W),we.viewport(L.copy($).multiplyScalar(Le).round())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,U,G,W){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,U,G,W),we.scissor(D.copy(j).multiplyScalar(Le).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(S){we.setScissorTest(me=S)},this.setOpaqueSort=function(S){Oe=S},this.setTransparentSort=function(S){Ke=S},this.getClearColor=function(S){return S.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,G=!0){let W=0;if(S){let z=!1;if(R!==null){let ce=R.texture.format;z=_.has(ce)}if(z){let ce=R.texture.type,ge=p.has(ce),de=le.getClearColor(),ye=le.getClearAlpha(),Ee=de.r,Ne=de.g,Ae=de.b;ge?(b[0]=Ee,b[1]=Ne,b[2]=Ae,b[3]=ye,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=Ee,w[1]=Ne,w[2]=Ae,w[3]=ye,I.clearBufferiv(I.COLOR,0,w))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Fe,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",nt,!1),le.dispose(),ie.dispose(),he.dispose(),v.dispose(),Y.dispose(),Q.dispose(),ae.dispose(),_e.dispose(),te.dispose(),be.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Hu),oe.removeEventListener("sessionend",Vu),Qn.stop()};function Fe(S){S.preventDefault(),ic("WebGLRenderer: Context Lost."),M=!0}function ut(){ic("WebGLRenderer: Context Restored."),M=!1;let S=C.autoReset,U=Me.enabled,G=Me.autoUpdate,W=Me.needsUpdate,z=Me.type;Z(),C.autoReset=S,Me.enabled=U,Me.autoUpdate=G,Me.needsUpdate=W,Me.type=z}function nt(S){De("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wi(S){let U=S.target;U.removeEventListener("dispose",Wi),ln(U)}function ln(S){r_(S),v.remove(S)}function r_(S){let U=v.get(S).programs;U!==void 0&&(U.forEach(function(G){be.releaseProgram(G)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,W,z,ce){U===null&&(U=lt);let ge=z.isMesh&&z.matrixWorld.determinant()<0,de=o_(S,U,G,W,z);we.setMaterial(W,ge);let ye=G.index,Ee=1;if(W.wireframe===!0){if(ye=Ce.getWireframeAttribute(G),ye===void 0)return;Ee=2}let Ne=G.drawRange,Ae=G.attributes.position,$e=Ne.start*Ee,st=(Ne.start+Ne.count)*Ee;ce!==null&&($e=Math.max($e,ce.start*Ee),st=Math.min(st,(ce.start+ce.count)*Ee)),ye!==null?($e=Math.max($e,0),st=Math.min(st,ye.count)):Ae!=null&&($e=Math.max($e,0),st=Math.min(st,Ae.count));let St=st-$e;if(St<0||St===1/0)return;_e.setup(z,W,de,G,ye);let yt,ht=B;if(ye!==null&&(yt=q.get(ye),ht=fe,ht.setIndex(yt)),z.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*Mt()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(z.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),we.setLineWidth(Re*Mt()),z.isLineSegments?ht.setMode(I.LINES):z.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else z.isPoints?ht.setMode(I.POINTS):z.isSprite&&ht.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Yr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Re=z._multiDrawStarts,rt=z._multiDrawCounts,je=z._multiDrawCount,fi=ye?q.get(ye).bytesPerElement:1,Pr=v.get(W).currentProgram.getUniforms();for(let pi=0;pi<je;pi++)Pr.setValue(I,"_gl_DrawID",pi),ht.render(Re[pi]/fi,rt[pi])}else if(z.isInstancedMesh)ht.renderInstances($e,St,z.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rt=Math.min(G.instanceCount,Re);ht.renderInstances($e,St,rt)}else ht.render($e,St)};function zu(S,U,G){S.transparent===!0&&S.side===Ti&&S.forceSinglePass===!1?(S.side=ti,S.needsUpdate=!0,wo(S,U,G),S.side=_n,S.needsUpdate=!0,wo(S,U,G),S.side=Ti):wo(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),E=he.get(G),E.init(U),A.push(E),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==G&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let W=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ce=z.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let de=ce[ge];zu(de,G,z),W.add(de)}else zu(ce,G,z),W.add(ce)}),E=A.pop(),W},this.compileAsync=function(S,U,G=null){let W=this.compile(S,U,G);return new Promise(z=>{function ce(){if(W.forEach(function(ge){v.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){z(S);return}setTimeout(ce,10)}tt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let eh=null;function s_(S){eh&&eh(S)}function Hu(){Qn.stop()}function Vu(){Qn.start()}let Qn=new vf;Qn.setAnimationLoop(s_),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){eh=S,oe.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},oe.addEventListener("sessionstart",Hu),oe.addEventListener("sessionend",Vu),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;let G=oe.enabled===!0&&oe.isPresenting===!0,W=H!==null&&(R===null||G)&&H.begin(y,R);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,R),E=he.get(S,A.length),E.init(U),A.push(E),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(at,Bi,U.reversedDepth),Xe=this.localClippingEnabled,ve=xe.init(this.clippingPlanes,Xe),x=ie.get(S,T.length),x.init(),T.push(x),oe.enabled===!0&&oe.isPresenting===!0){let ge=y.xr.getDepthSensingMesh();ge!==null&&th(ge,U,-1/0,y.sortObjects)}th(S,U,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Oe,Ke),Ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ve&&le.addToRenderList(x,S),this.info.render.frame++,ve===!0&&xe.beginShadows();let z=E.state.shadowsArray;if(Me.render(z,S,U),ve===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&H.hasRenderPass())===!1){let ge=x.opaque,de=x.transmissive;if(E.setupLights(),U.isArrayCamera){let ye=U.cameras;if(de.length>0)for(let Ee=0,Ne=ye.length;Ee<Ne;Ee++){let Ae=ye[Ee];Gu(ge,de,S,Ae)}Ve&&le.render(S);for(let Ee=0,Ne=ye.length;Ee<Ne;Ee++){let Ae=ye[Ee];Wu(x,S,Ae,Ae.viewport)}}else de.length>0&&Gu(ge,de,S,U),Ve&&le.render(S),Wu(x,S,U)}R!==null&&X===0&&(F.updateMultisampleRenderTarget(R),F.updateRenderTargetMipmap(R)),W&&H.end(y),S.isScene===!0&&S.onAfterRender(y,S,U),_e.resetDefaultState(),N=-1,k=null,A.pop(),A.length>0?(E=A[A.length-1],ve===!0&&xe.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function th(S,U,G,W){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Pe.intersectsSprite(S)){W&&Je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);let ge=ae.update(S),de=S.material;de.visible&&x.push(S,ge,de,G,Je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Pe.intersectsObject(S))){let ge=ae.update(S),de=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Je.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Je.copy(ge.boundingSphere.center)),Je.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(de)){let ye=ge.groups;for(let Ee=0,Ne=ye.length;Ee<Ne;Ee++){let Ae=ye[Ee],$e=de[Ae.materialIndex];$e&&$e.visible&&x.push(S,ge,$e,G,Je.z,Ae)}}else de.visible&&x.push(S,ge,de,G,Je.z,null)}}let ce=S.children;for(let ge=0,de=ce.length;ge<de;ge++)th(ce[ge],U,G,W)}function Wu(S,U,G,W){let{opaque:z,transmissive:ce,transparent:ge}=S;E.setupLightsView(G),ve===!0&&xe.setGlobalState(y.clippingPlanes,G),W&&we.viewport(L.copy(W)),z.length>0&&bo(z,U,G),ce.length>0&&bo(ce,U,G),ge.length>0&&bo(ge,U,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Gu(S,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let $e=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new $t(1,1,{generateMipmaps:!0,type:$e?ji:qt,minFilter:Vn,samples:ct.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ce=E.state.transmissionRenderTarget[W.id],ge=W.viewport||L;ce.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);let de=y.getRenderTarget(),ye=y.getActiveCubeFace(),Ee=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(J),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&le.render(G);let Ne=y.toneMapping;y.toneMapping=Fi;let Ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ve===!0&&xe.setGlobalState(y.clippingPlanes,W),bo(S,G,W),F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce),tt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let st=0,St=U.length;st<St;st++){let yt=U[st],{object:ht,geometry:Re,material:rt,group:je}=yt;if(rt.side===Ti&&ht.layers.test(W.layers)){let fi=rt.side;rt.side=ti,rt.needsUpdate=!0,Xu(ht,G,W,Re,rt,je),rt.side=fi,rt.needsUpdate=!0,$e=!0}}$e===!0&&(F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce))}y.setRenderTarget(de,ye,Ee),y.setClearColor(J,ee),Ae!==void 0&&(W.viewport=Ae),y.toneMapping=Ne}function bo(S,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ce=S.length;z<ce;z++){let ge=S[z],{object:de,geometry:ye,group:Ee}=ge,Ne=ge.material;Ne.allowOverride===!0&&W!==null&&(Ne=W),de.layers.test(G.layers)&&Xu(de,U,G,ye,Ne,Ee)}}function Xu(S,U,G,W,z,ce){S.onBeforeRender(y,U,G,W,z,ce),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(y,U,G,W,S,ce),z.transparent===!0&&z.side===Ti&&z.forceSinglePass===!1?(z.side=ti,z.needsUpdate=!0,y.renderBufferDirect(G,U,W,z,S,ce),z.side=_n,z.needsUpdate=!0,y.renderBufferDirect(G,U,W,z,S,ce),z.side=Ti):y.renderBufferDirect(G,U,W,z,S,ce),S.onAfterRender(y,U,G,W,z,ce)}function wo(S,U,G){U.isScene!==!0&&(U=lt);let W=v.get(S),z=E.state.lights,ce=E.state.shadowsArray,ge=z.state.version,de=be.getParameters(S,z.state,ce,U,G),ye=be.getProgramCacheKey(de),Ee=W.programs;W.environment=S.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(S.isMeshStandardMaterial?Q:Y).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",Wi),Ee=new Map,W.programs=Ee);let Ne=Ee.get(ye);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===ge)return qu(S,de),Ne}else de.uniforms=be.getUniforms(S),S.onBeforeCompile(de,y),Ne=be.acquireProgram(de,ye),Ee.set(ye,Ne),W.uniforms=de.uniforms;let Ae=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=xe.uniform),qu(S,de),W.needsLights=l_(S),W.lightsStateVersion=ge,W.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMap.value=z.state.directionalShadowMap,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotShadowMap.value=z.state.spotShadowMap,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMap.value=z.state.pointShadowMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function $u(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=rs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function qu(S,U){let G=v.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function o_(S,U,G,W,z){U.isScene!==!0&&(U=lt),F.resetTextureUnits();let ce=U.fog,ge=W.isMeshStandardMaterial?U.environment:null,de=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:dr,ye=(W.isMeshStandardMaterial?Q:Y).get(W.envMap||ge),Ee=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,st=!!G.morphAttributes.color,St=Fi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=y.toneMapping);let yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=yt!==void 0?yt.length:0,Re=v.get(W),rt=E.state.lights;if(ve===!0&&(Xe===!0||S!==k)){let ei=S===k&&W.id===N;xe.setState(W,S,ei)}let je=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==rt.state.version||Re.outputColorSpace!==de||z.isBatchedMesh&&Re.batching===!1||!z.isBatchedMesh&&Re.batching===!0||z.isBatchedMesh&&Re.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Re.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Re.instancing===!1||!z.isInstancedMesh&&Re.instancing===!0||z.isSkinnedMesh&&Re.skinning===!1||!z.isSkinnedMesh&&Re.skinning===!0||z.isInstancedMesh&&Re.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Re.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Re.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Re.instancingMorph===!1&&z.morphTexture!==null||Re.envMap!==ye||W.fog===!0&&Re.fog!==ce||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==xe.numPlanes||Re.numIntersection!==xe.numIntersection)||Re.vertexAlphas!==Ee||Re.vertexTangents!==Ne||Re.morphTargets!==Ae||Re.morphNormals!==$e||Re.morphColors!==st||Re.toneMapping!==St||Re.morphTargetsCount!==ht)&&(je=!0):(je=!0,Re.__version=W.version);let fi=Re.currentProgram;je===!0&&(fi=wo(W,U,z));let Pr=!1,pi=!1,fs=!1,dt=fi.getUniforms(),oi=Re.uniforms;if(we.useProgram(fi.program)&&(Pr=!0,pi=!0,fs=!0),W.id!==N&&(N=W.id,pi=!0),Pr||k!==S){we.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",S.projectionMatrix),dt.setValue(I,"viewMatrix",S.matrixWorldInverse);let ai=dt.map.cameraPosition;ai!==void 0&&ai.setValue(I,Se.setFromMatrixPosition(S.matrixWorld)),ct.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,pi=!0,fs=!0)}if(Re.needsLights&&(rt.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",rt.state.directionalShadowMap,F),rt.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",rt.state.spotShadowMap,F),rt.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",rt.state.pointShadowMap,F)),z.isSkinnedMesh){dt.setOptional(I,z,"bindMatrix"),dt.setOptional(I,z,"bindMatrixInverse");let ei=z.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),dt.setValue(I,"boneTexture",ei.boneTexture,F))}z.isBatchedMesh&&(dt.setOptional(I,z,"batchingTexture"),dt.setValue(I,"batchingTexture",z._matricesTexture,F),dt.setOptional(I,z,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",z._indirectTexture,F),dt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",z._colorsTexture,F));let Mi=G.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&We.update(z,G,fi),(pi||Re.receiveShadow!==z.receiveShadow)&&(Re.receiveShadow=z.receiveShadow,dt.setValue(I,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(oi.envMap.value=ye,oi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),oi.dfgLUT!==void 0&&(oi.dfgLUT.value=Ly()),pi&&(dt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&a_(oi,fs),ce&&W.fog===!0&&Be.refreshFogUniforms(oi,ce),Be.refreshMaterialUniforms(oi,W,Le,Ie,E.state.transmissionRenderTarget[S.id]),rs.upload(I,$u(Re),oi,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rs.upload(I,$u(Re),oi,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(I,"center",z.center),dt.setValue(I,"modelViewMatrix",z.modelViewMatrix),dt.setValue(I,"normalMatrix",z.normalMatrix),dt.setValue(I,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ei=W.uniformsGroups;for(let ai=0,ih=ei.length;ai<ih;ai++){let er=ei[ai];te.update(er,fi),te.bind(er,fi)}}return fi}function a_(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function l_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,G){let W=v.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=U,v.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let G=v.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};let h_=I.createFramebuffer();this.setRenderTarget=function(S,U=0,G=0){R=S,P=U,X=G;let W=null,z=!1,ce=!1;if(S){let de=v.get(S);if(de.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(I.FRAMEBUFFER,de.__webglFramebuffer),L.copy(S.viewport),D.copy(S.scissor),O=S.scissorTest,we.viewport(L),we.scissor(D),we.setScissorTest(O),N=-1;return}else if(de.__webglFramebuffer===void 0)F.setupRenderTarget(S);else if(de.__hasExternalTextures)F.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ne=S.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&v.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(S)}}let ye=S.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ce=!0);let Ee=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?W=Ee[U][G]:W=Ee[U],z=!0):S.samples>0&&F.useMultisampledRTT(S)===!1?W=v.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?W=Ee[G]:W=Ee,L.copy(S.viewport),D.copy(S.scissor),O=S.scissorTest}else L.copy($).multiplyScalar(Le).floor(),D.copy(j).multiplyScalar(Le).floor(),O=me;if(G!==0&&(W=h_),we.bindFramebuffer(I.FRAMEBUFFER,W)&&we.drawBuffers(S,W),we.viewport(L),we.scissor(D),we.setScissorTest(O),z){let de=v.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,G)}else if(ce){let de=U;for(let ye=0;ye<S.textures.length;ye++){let Ee=v.get(S.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,Ee.__webglTexture,G,de)}}else if(S!==null&&G!==0){let de=v.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,de.__webglTexture,G)}N=-1},this.readRenderTargetPixels=function(S,U,G,W,z,ce,ge,de=0){if(!(S&&S.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){we.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Ee=S.textures[de],Ne=Ee.format,Ae=Ee.type;if(!ct.textureFormatReadable(Ne)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ae)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-W&&G>=0&&G<=S.height-z&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de),I.readPixels(U,G,W,z,re.convert(Ne),re.convert(Ae),ce))}finally{let Ee=R!==null?v.get(R).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,W,z,ce,ge,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(U>=0&&U<=S.width-W&&G>=0&&G<=S.height-z){we.bindFramebuffer(I.FRAMEBUFFER,ye);let Ee=S.textures[de],Ne=Ee.format,Ae=Ee.type;if(!ct.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de),I.readPixels(U,G,W,z,re.convert(Ne),re.convert(Ae),0);let st=R!==null?v.get(R).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,st);let St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xd(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer($e),I.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,G=0){let W=Math.pow(2,-G),z=Math.floor(S.image.width*W),ce=Math.floor(S.image.height*W),ge=U!==null?U.x:0,de=U!==null?U.y:0;F.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ge,de,z,ce),we.unbindTexture()};let c_=I.createFramebuffer(),u_=I.createFramebuffer();this.copyTextureToTexture=function(S,U,G=null,W=null,z=0,ce=null){ce===null&&(z!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=z,z=0):ce=0);let ge,de,ye,Ee,Ne,Ae,$e,st,St,yt=S.isCompressedTexture?S.mipmaps[ce]:S.image;if(G!==null)ge=G.max.x-G.min.x,de=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Ne=G.min.y,Ae=G.isBox3?G.min.z:0;else{let Mi=Math.pow(2,-z);ge=Math.floor(yt.width*Mi),de=Math.floor(yt.height*Mi),S.isDataArrayTexture?ye=yt.depth:S.isData3DTexture?ye=Math.floor(yt.depth*Mi):ye=1,Ee=0,Ne=0,Ae=0}W!==null?($e=W.x,st=W.y,St=W.z):($e=0,st=0,St=0);let ht=re.convert(U.format),Re=re.convert(U.type),rt;U.isData3DTexture?(F.setTexture3D(U,0),rt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(F.setTexture2DArray(U,0),rt=I.TEXTURE_2D_ARRAY):(F.setTexture2D(U,0),rt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let je=I.getParameter(I.UNPACK_ROW_LENGTH),fi=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pr=I.getParameter(I.UNPACK_SKIP_PIXELS),pi=I.getParameter(I.UNPACK_SKIP_ROWS),fs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);let dt=S.isDataArrayTexture||S.isData3DTexture,oi=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Mi=v.get(S),ei=v.get(U),ai=v.get(Mi.__renderTarget),ih=v.get(ei.__renderTarget);we.bindFramebuffer(I.READ_FRAMEBUFFER,ai.__webglFramebuffer),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,ih.__webglFramebuffer);for(let er=0;er<ye;er++)dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(S).__webglTexture,z,Ae+er),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ce,St+er)),I.blitFramebuffer(Ee,Ne,ge,de,$e,st,ge,de,I.DEPTH_BUFFER_BIT,I.NEAREST);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||v.has(S)){let Mi=v.get(S),ei=v.get(U);we.bindFramebuffer(I.READ_FRAMEBUFFER,c_),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,u_);for(let ai=0;ai<ye;ai++)dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mi.__webglTexture,z,Ae+ai):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mi.__webglTexture,z),oi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ei.__webglTexture,ce,St+ai):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ei.__webglTexture,ce),z!==0?I.blitFramebuffer(Ee,Ne,ge,de,$e,st,ge,de,I.COLOR_BUFFER_BIT,I.NEAREST):oi?I.copyTexSubImage3D(rt,ce,$e,st,St+ai,Ee,Ne,ge,de):I.copyTexSubImage2D(rt,ce,$e,st,Ee,Ne,ge,de);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else oi?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(rt,ce,$e,st,St,ge,de,ye,ht,Re,yt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(rt,ce,$e,st,St,ge,de,ye,ht,yt.data):I.texSubImage3D(rt,ce,$e,st,St,ge,de,ye,ht,Re,yt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ce,$e,st,ge,de,ht,Re,yt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ce,$e,st,yt.width,yt.height,ht,yt.data):I.texSubImage2D(I.TEXTURE_2D,ce,$e,st,ge,de,ht,Re,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fi),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pr),I.pixelStorei(I.UNPACK_SKIP_ROWS,pi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fs),ce===0&&U.generateMipmaps&&I.generateMipmap(rt),we.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&F.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?F.setTextureCube(S,0):S.isData3DTexture?F.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?F.setTexture2DArray(S,0):F.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){P=0,X=0,R=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let i=this.getContext();i.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ze._getUnpackColorSpace()}};var wf=`
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Mf=`
precision mediump float;

uniform float screenCurvature;
uniform float screenShadowCoeff;
uniform float frameShadowCoeff;
uniform vec4 frameColor;
uniform vec2 margin;
uniform vec2 resolution;

varying vec2 vUv;

// Utility functions from ShaderLibrary.qml
float max2(vec2 v) {
    return max(v.x, v.y);
}

float min2(vec2 v) {
    return min(v.x, v.y);
}

float prod2(vec2 v) {
    return v.x * v.y;
}

float sum2(vec2 v) {
    return v.x + v.y;
}

// Distort coordinates to simulate CRT screen curvature
// QML: return (coords + cc * (1.0 + dist) * dist)
// This is the INVERSE of barrel distortion - it expands outward
// With aspect ratio correction for proper circular distortion
vec2 distortCoordinates(vec2 coords) {
    vec2 cc = coords - vec2(0.5);
    
    // Apply aspect ratio correction for proper circular distortion
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        // Wide screen: reduce X contribution
        ccCorrected.x /= aspectRatio;
    } else {
        // Tall screen: reduce Y contribution  
        ccCorrected.y *= aspectRatio;
    }
    
    float dist = dot(ccCorrected, ccCorrected) * screenCurvature;
    return coords + cc * (1.0 + dist) * dist;
}

// Logarithm clamped to positive values
vec2 positiveLog(vec2 x) {
    return clamp(log(x), vec2(0.0), vec2(100.0));
}

void main() {
    vec2 staticCoords = vUv;
    
    // Apply distortion and margin scaling
    // QML: coords = distortCoordinates(staticCoords) * (vec2(1.0) + margin * 2.0) - margin
    vec2 coords = distortCoordinates(staticCoords) * (vec2(1.0) + margin * 2.0) - margin;

    // Vignette effect - darkens corners
    vec2 vignetteCoords = staticCoords * (1.0 - staticCoords.yx);
    float vignette = pow(prod2(vignetteCoords) * 15.0, 0.25);

    vec3 color = frameColor.rgb * vec3(1.0 - vignette);
    float alpha = 0.0;

    // Frame shadow using logarithmic curves
    float frameShadow = max2(
        positiveLog(-coords * frameShadowCoeff + vec2(1.0)) + 
        positiveLog(coords * frameShadowCoeff - (vec2(frameShadowCoeff) - vec2(1.0)))
    );
    frameShadow = max(sqrt(frameShadow), 0.0);
    color *= frameShadow;
    
    // Alpha calculation for frame edges
    // QML: alpha = sum2(1.0 - step(vec2(0.0), coords) + step(vec2(1.0), coords))
    alpha = sum2(1.0 - step(vec2(0.0), coords) + step(vec2(1.0), coords));
    alpha = clamp(alpha, 0.0, 1.0);
    alpha *= mix(1.0, 0.9, frameShadow);

    // Screen shadow effect
    float screenShadow = 1.0 - prod2(
        positiveLog(coords * screenShadowCoeff + vec2(1.0)) * 
        positiveLog(-coords * screenShadowCoeff + vec2(screenShadowCoeff + 1.0))
    );
    alpha = max(0.8 * screenShadow, alpha);

    gl_FragColor = vec4(color * alpha, alpha);
}
`;function Sl(t,e,i){return(1-i)*t+i*e}function os(t,e,i){return{r:t.r*i+e.r*(1-i),g:t.g*i+e.g*(1-i),b:t.b*i+e.b*(1-i),a:t.a*i+e.a*(1-i)}}function yn(t){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:Number.parseInt(e[1],16)/255,g:Number.parseInt(e[2],16)/255,b:Number.parseInt(e[3],16)/255,a:1}:{r:1,g:1,b:1,a:1}}function Cf(t){return[t.r,t.g,t.b,t.a]}var ii={staticFrameColor:"#ffffff",backgroundColor:"#000000",fontColor:"#0ccc68",ambientLight:.4,screenCurvature:.1,screenCurvatureSize:1,frameMargin:30,windowScaling:1},yl=class{mesh;material;devicePixelRatio;uniforms;constructor(e,i){this.width=e,this.height=i,this.devicePixelRatio=window.devicePixelRatio||1;let n=yn(ii.staticFrameColor),r=yn(ii.backgroundColor),s=yn(ii.fontColor),o=os(s,r,.2),a=Sl(.2,.8,ii.ambientLight),h=os(n,o,a),l=ii.screenCurvature*ii.screenCurvatureSize,u=Sl(20,10,a),c=Sl(20,10,a),d=new qe(ii.frameMargin/e*ii.windowScaling,ii.frameMargin/i*ii.windowScaling);this.uniforms={screenCurvature:{value:l},screenShadowCoeff:{value:u},frameShadowCoeff:{value:c},frameColor:{value:new _t(...Cf(h))},margin:{value:d},resolution:{value:new qe(e,i)}},this.material=new It({uniforms:this.uniforms,vertexShader:wf,fragmentShader:Mf,transparent:!0,side:Ti,blending:gn});let f=new ki(2,2);this.mesh=new Ot(f,this.material)}updateSize(e,i){this.width=e,this.height=i,this.devicePixelRatio=window.devicePixelRatio||1,this.uniforms.margin.value.set(ii.frameMargin/e*ii.windowScaling,ii.frameMargin/i*ii.windowScaling),this.uniforms.resolution.value.set(e,i)}setScreenCurvature(e){this.uniforms.screenCurvature.value=e*ii.screenCurvatureSize}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}};var Ef=`
/**
 * Multi-tap blur to approximate the pre-blurred bloom source texture
 * The original QML uses Qt's FastBlur with radius 32.
 * We use a larger kernel to better approximate this.
 *
 * @param tex - Source texture sampler
 * @param coords - Texture coordinates (already curved)
 * @param resolution - Screen resolution for proper texel sizing
 * @return Blurred color approximating bloomSource
 */
vec4 getBloomSourceSample(sampler2D tex, vec2 coords, vec2 resolution) {
    vec2 texelSize = 1.0 / resolution;
    vec4 bloom = vec4(0.0);
    float totalWeight = 0.0;
    
    // 13-tap blur pattern to approximate FastBlur radius 32
    // Using larger offsets with gaussian-like weights
    const float offsets[5] = float[5](0.0, 4.0, 8.0, 12.0, 16.0);
    const float weights[5] = float[5](0.20, 0.18, 0.14, 0.10, 0.06);
    
    for (int i = 0; i < 5; i++) {
        float offset = offsets[i];
        float weight = weights[i];
        
        // Sample in cross pattern
        vec2 offsetX = vec2(offset * texelSize.x, 0.0);
        vec2 offsetY = vec2(0.0, offset * texelSize.y);
        
        // Clamp coordinates to prevent sampling outside bounds
        vec2 sampleCoordsPX = clamp(coords + offsetX, 0.0, 1.0);
        vec2 sampleCoordsNX = clamp(coords - offsetX, 0.0, 1.0);
        vec2 sampleCoordsPY = clamp(coords + offsetY, 0.0, 1.0);
        vec2 sampleCoordsNY = clamp(coords - offsetY, 0.0, 1.0);
        
        if (i == 0) {
            bloom += texture2D(tex, coords) * weight;
            totalWeight += weight;
        } else {
            bloom += texture2D(tex, sampleCoordsPX) * weight;
            bloom += texture2D(tex, sampleCoordsNX) * weight;
            bloom += texture2D(tex, sampleCoordsPY) * weight;
            bloom += texture2D(tex, sampleCoordsNY) * weight;
            totalWeight += weight * 4.0;
        }
    }
    
    if (totalWeight > 0.0) {
        bloom /= totalWeight;
    }
    
    // Return with alpha = 1.0 (in QML the bloomSource has alpha from the original)
    return vec4(bloom.rgb, 1.0);
}

/**
 * Apply bloom effect to the final color
 * Matches QML exactly:
 *   vec4 bloomFullColor = texture2D(bloomSource, txt_coords);
 *   vec3 bloomColor = bloomFullColor.rgb;
 *   float bloomAlpha = bloomFullColor.a;
 *   bloomColor = convertWithChroma(bloomColor);
 *   finalColor += clamp(bloomColor * bloom * bloomAlpha, 0.0, 0.5);
 *
 * @param baseColor - The base terminal color
 * @param tex - Source texture for bloom sampling
 * @param coords - Texture coordinates (already curved via txt_coords)
 * @param resolution - Screen resolution
 * @param bloom - Bloom intensity (already multiplied by 2.5 in uniform)
 * @param fontColor - Font color for chroma conversion
 * @param chromaColor - Chroma color mixing amount
 * @return Color with bloom applied
 */
vec3 applyBloom(vec3 baseColor, sampler2D tex, vec2 coords, vec2 resolution, float bloom, vec3 fontColor, float chromaColor) {
    if (bloom <= 0.0) {
        return baseColor;
    }
    
    // Get blurred color (simulating bloomSource)
    vec4 bloomFullColor = getBloomSourceSample(tex, coords, resolution);
    vec3 bloomColor = bloomFullColor.rgb;
    float bloomAlpha = bloomFullColor.a;
    
    // Apply convertWithChroma to bloom color
    float grey = dot(bloomColor, vec3(0.21, 0.72, 0.04));
    vec3 convertedBloom;
    if (chromaColor > 0.0) {
        convertedBloom = fontColor * mix(vec3(grey), bloomColor, chromaColor);
    } else {
        convertedBloom = fontColor * grey;
    }
    
    // Add bloom contribution with clamping (exactly as QML)
    vec3 bloomContribution = clamp(convertedBloom * bloom * bloomAlpha, 0.0, 0.5);
    
    return baseColor + bloomContribution;
}
`;var Tf=`
/**
 * Apply brightness adjustment to color
 * @param color - Input color
 * @param brightness - Brightness value (0-1 maps to 0.5-1.5 multiplier)
 * @return Brightness-adjusted color
 */
vec3 applyBrightness(vec3 color, float brightness) {
    // Map 0-1 to 0.5-1.5 range (matches QML Utils.lint behavior)
    float brightnessMultiplier = mix(0.5, 1.5, brightness);
    return color * brightnessMultiplier;
}
`;var Af=`
precision mediump float;

uniform sampler2D currentSource;    // Current terminal content (static pass output)
uniform sampler2D burnInSource;     // Previous accumulated burn-in
uniform float burnInTime;           // Fade time factor (1/fadeTimeMs, higher = faster fade)
uniform float deltaTime;            // Time since last frame in seconds

varying vec2 vUv;

// Convert RGB to greyscale (matches QML rgb2grey)
float rgb2grey(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
    vec2 coords = vUv;
    
    // Sample current terminal content
    vec3 txtColor = texture2D(currentSource, coords).rgb;
    float currBrightness = rgb2grey(txtColor);
    
    // Sample accumulated burn-in from previous frame
    vec4 accColor = texture2D(burnInSource, coords);
    vec3 prevColor = accColor.rgb;
    
    // Calculate decay rate per frame
    // burnInTime is 1/fadeTimeMs (0.000625 to 0.00625)
    // deltaTime is in seconds (~0.016 at 60fps)
    // 
    // Lower multiplier = slower decay = more visible burn-in ghost
    // Using 0.3 multiplier for slower, more visible ghosting
    float decayRate = 0.3 * burnInTime * deltaTime * 1000.0;
    
    // Clamp to reasonable range (max 0.1 = 10% decay per frame)
    decayRate = clamp(decayRate, 0.0, 0.1);
    
    // Calculate retention factor (how much of the previous frame to keep)
    float retention = 1.0 - decayRate;
    
    // Decay the previous accumulated color
    vec3 decayedPrev = prevColor * retention;
    
    // The result is the maximum of:
    // 1. The current content (always shows through)
    // 2. The decayed ghost from previous frames
    vec3 result = max(decayedPrev, txtColor);
    
    // Store current brightness in alpha
    gl_FragColor = vec4(result, currBrightness);
}
`,Rf=`
/**
 * Apply burn-in effect by sampling from accumulated burn-in buffer
 * 
 * @param currentColor - Current frame color (from static pass)
 * @param burnInColor - Accumulated burn-in color (from burn-in buffer)
 * @param burnIn - Burn-in intensity (0-1)
 * @return Blended color with burn-in ghosting
 */
vec3 applyBurnIn(vec3 currentColor, vec3 burnInColor, float burnIn) {
    if (burnIn <= 0.0) {
        return currentColor;
    }
    // Use max blend to show burn-in ghosts (matching QML)
    // The burn-in buffer already contains the accumulated/decayed ghosts
    return max(currentColor, burnInColor * burnIn);
}
`;var wc=`
/**
 * Convert RGB to greyscale using luminance weights
 * MUST match QML ShaderLibrary.qml rgb2grey exactly:
 *   dot(v, vec3(0.21, 0.72, 0.04))
 * @param color - Input RGB color
 * @return Greyscale value
 */
float rgb2grey(vec3 v) {
    return dot(v, vec3(0.21, 0.72, 0.04));
}

/**
 * Apply chroma color conversion
 * Matches QML convertWithChroma function exactly:
 *   chromaColor != 0: fontColor.rgb * mix(vec3(rgb2grey(inColor)), inColor, chromaColor)
 *   chromaColor == 0: fontColor.rgb * rgb2grey(inColor)
 * @param inColor - Input color from text texture
 * @param fontColor - Terminal phosphor color (e.g., green)
 * @param chromaAmount - Color preservation amount (0 = mono, 1 = full color)
 * @return Converted color
 */
vec3 convertWithChroma(vec3 inColor, vec3 fontColor, float chromaAmount) {
    float grey = rgb2grey(inColor);
    if (chromaAmount > 0.0) {
        return fontColor * mix(vec3(grey), inColor, chromaAmount);
    } else {
        return fontColor * grey;
    }
}
`;var Pf=`
/**
 * Calculate flickering brightness based on noise texture and time
 * Ported from QML vertex shader:
 *   vec4 initialNoiseTexel = texture2D(noiseSource, coords);
 *   brightness = 1.0 + (initialNoiseTexel.g - 0.5) * flickering;
 *
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param flickeringAmount - Flickering intensity (0-1, typically ~0.1)
 * @return Brightness multiplier (1.0 = normal, varies based on noise)
 */
float calculateFlickeringBrightness(vec4 initialNoiseTexel, float flickeringAmount) {
    if (flickeringAmount <= 0.0) {
        return 1.0;
    }
    
    // Use the green channel of the noise texture for brightness variation
    // This creates brightness variations around 1.0
    // At flickering=0.1, brightness ranges from ~0.95 to ~1.05
    float brightness = 1.0 + (initialNoiseTexel.g - 0.5) * flickeringAmount;
    
    return brightness;
}

/**
 * Apply flickering effect to final color
 * Ported from QML fragment shader:
 *   finalColor *= brightness;
 *
 * @param color - The input color to apply flickering to
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param flickeringAmount - Flickering intensity (0-1)
 * @return Color with flickering applied
 */
vec3 applyFlickering(vec3 color, vec4 initialNoiseTexel, float flickeringAmount) {
    float brightness = calculateFlickeringBrightness(initialNoiseTexel, flickeringAmount);
    return color * brightness;
}
`;var If=`
/**
 * Calculate the glowing line (scanning beam) intensity
 * Exact port from QML:
 *   float randomPass(vec2 coords){
 *       return fract(smoothstep(-120.0, 0.0, coords.y - (virtualResolution.y + 120.0) * fract(time * 0.00015)));
 *   }
 *
 * @param coords - Already scaled coordinates (coords * virtualResolution from caller)
 * @param virtualResolutionY - Virtual screen height for line positioning
 * @param time - Current time value
 * @return Line intensity (0-1)
 */
float randomPass(vec2 coords, float virtualResolutionY, float time) {
    // Calculate the position of the scanning line
    float linePosition = (virtualResolutionY + 120.0) * fract(time * 0.00015);
    
    // Flip Y coordinate: WebGL has Y=0 at bottom, QML has Y=0 at top
    // This ensures the scan line moves top-to-bottom like in QML
    float flippedY = virtualResolutionY - coords.y;
    
    // Calculate distance from the line
    float distFromLine = flippedY - linePosition;
    
    // Use smoothstep to create a soft glow around the line
    float lineIntensity = smoothstep(-120.0, 0.0, distFromLine);
    
    // Wrap the result to create continuous scanning
    return fract(lineIntensity);
}

/**
 * Calculate glowing line contribution for the color accumulator
 * From QML: color += randomPass(coords * virtualResolution) * glowingLine;
 *
 * @param coords - Dynamic coordinates (after hsync distortion, before/same as jitter base)
 * @param virtualResolution - Virtual screen resolution
 * @param time - Current time value
 * @param glowingLine - Glowing line intensity (already multiplied by 0.2 in uniform)
 * @return Line contribution to add to color accumulator
 */
float calculateGlowingLineContribution(vec2 coords, vec2 virtualResolution, float time, float glowingLine) {
    if (glowingLine <= 0.0) {
        return 0.0;
    }
    vec2 scaledCoords = coords * virtualResolution;
    return randomPass(scaledCoords, virtualResolution.y, time) * glowingLine;
}
`;var Lf=`
/**
 * Linear interpolation (matches Utils.lint in QML)
 * @param a - Start value
 * @param b - End value
 * @param t - Interpolation factor (0-1)
 * @return Interpolated value
 */
float lint(float a, float b, float t) {
    return (1.0 - t) * a + t * b;
}

/**
 * Calculate horizontal sync distortion parameters from noise texture
 * Ported from QML vertex shader:
 *   vec4 initialNoiseTexel = texture2D(noiseSource, coords);
 *   float randval = horizontalSyncStrength - initialNoiseTexel.r;
 *   distortionScale = step(0.0, randval) * randval * horizontalSyncStrength;
 *   distortionFreq = mix(4.0, 40.0, initialNoiseTexel.g);
 *
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param horizontalSync - Horizontal sync amount (0-1)
 * @return vec2(distortionScale, distortionFreq)
 */
vec2 calculateHorizontalSyncParams(vec4 initialNoiseTexel, float horizontalSync) {
    if (horizontalSync <= 0.0) {
        return vec2(0.0, 0.0);
    }
    
    // Calculate strength from horizontalSync (maps 0-1 to 0.05-0.35)
    float horizontalSyncStrength = lint(0.05, 0.35, horizontalSync);
    
    // Use the red channel of the noise texture for distortion threshold
    float noiseR = initialNoiseTexel.r;
    // Use the green channel for distortion frequency
    float noiseG = initialNoiseTexel.g;
    
    // Calculate distortion scale
    // Only apply distortion when noise is below threshold (creates intermittent effect)
    float randval = horizontalSyncStrength - noiseR;
    float distortionScale = step(0.0, randval) * randval * horizontalSyncStrength;
    
    // Calculate distortion frequency (varies between 4 and 40 based on noise)
    float distortionFreq = mix(4.0, 40.0, noiseG);
    
    return vec2(distortionScale, distortionFreq);
}

/**
 * Apply horizontal sync distortion to texture coordinates
 * Ported from QML fragment shader:
 *   float dst = sin((coords.y + time * 0.001) * distortionFreq);
 *   coords.x += dst * distortionScale;
 *
 * @param coords - Input texture coordinates
 * @param time - Current time value
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param horizontalSync - Horizontal sync amount (0-1)
 * @return Distorted coordinates with horizontal sync effect applied
 */
vec2 applyHorizontalSync(vec2 coords, float time, vec4 initialNoiseTexel, float horizontalSync) {
    if (horizontalSync <= 0.0) {
        return coords;
    }
    
    // Get distortion parameters
    vec2 params = calculateHorizontalSyncParams(initialNoiseTexel, horizontalSync);
    float distortionScale = params.x;
    float distortionFreq = params.y;
    
    // Calculate sine wave distortion based on y-coordinate and time
    // This creates horizontal waves that scroll vertically
    float dst = sin((coords.y + time * 0.001) * distortionFreq);
    
    // Apply distortion to x-coordinate
    coords.x += dst * distortionScale;
    
    return coords;
}

/**
 * Get the distortion scale for use in other effects (like static noise boost)
 * From QML: noise += distortionScale * 7.0;
 *
 * @param initialNoiseTexel - Noise texel sampled with sampleInitialNoise(time)
 * @param horizontalSync - Horizontal sync amount (0-1)
 * @return The distortion scale value
 */
float getHorizontalSyncDistortionScale(vec4 initialNoiseTexel, float horizontalSync) {
    vec2 params = calculateHorizontalSyncParams(initialNoiseTexel, horizontalSync);
    return params.x;
}
`;var Df=`
/**
 * Calculate jitter displacement values from jitter amount
 * Matches QML: Qt.size(0.007 * jitter, 0.002 * jitter)
 * @param jitter - Jitter amount (0-1)
 * @return vec2 with x and y displacement factors
 */
vec2 getJitterDisplacement(float jitter) {
    return vec2(0.007 * jitter, 0.002 * jitter);
}

/**
 * Apply jitter effect to texture coordinates using real noise texture
 * Ported from QML fragment shader:
 *   vec4 noiseTexel = texture2D(noiseSource, scaleNoiseSize * coords + vec2(fract(time / 51.0), fract(time / 237.0)));
 *   vec2 offset = vec2(noiseTexel.b, noiseTexel.a) - vec2(0.5);
 *   vec2 txt_coords = coords + offset * jitterDisplacement;
 *
 * @param coords - Input texture coordinates
 * @param noiseTexel - Noise texel sampled with sampleScreenNoise(coords, time)
 * @param jitter - Jitter amount (0-1, default 0.2)
 * @return Displaced texture coordinates with jitter applied
 */
vec2 applyJitter(vec2 coords, vec4 noiseTexel, float jitter) {
    if (jitter <= 0.0) {
        return coords;
    }
    
    // Use the blue and alpha channels for X and Y offset
    // Convert to offset centered around 0 (range -0.5 to 0.5)
    vec2 offset = vec2(noiseTexel.b, noiseTexel.a) - vec2(0.5);
    
    // Get displacement factors
    vec2 jitterDisplacement = getJitterDisplacement(jitter);
    
    // Apply displacement to coordinates
    return coords + offset * jitterDisplacement;
}
`;var Nf=`
// Noise texture sampler - loaded from allNoise512.png
uniform sampler2D noiseSource;
uniform vec2 scaleNoiseSize;

/**
 * Sample initial noise for flickering and horizontal sync
 * Uses time-based coordinates that change slowly
 * From QML: vec2 coords = vec2(fract(time/(1024.0*2.0)), fract(time/(1024.0*1024.0)));
 *
 * @param time - Current time value
 * @return vec4 noise texel (use .r for sync, .g for flickering/freq)
 */
vec4 sampleInitialNoise(float time) {
    vec2 coords = vec2(
        fract(time / (1024.0 * 2.0)),
        fract(time / (1024.0 * 1024.0))
    );
    return texture2D(noiseSource, coords);
}

/**
 * Sample noise for jitter and static noise effects
 * Uses screen coordinates with time-varying offset
 * From QML: texture2D(noiseSource, scaleNoiseSize * coords + vec2(fract(time / 51.0), fract(time / 237.0)));
 *
 * @param coords - Screen texture coordinates
 * @param time - Current time value
 * @return vec4 noise texel (use .b/.a for jitter, .a for static noise)
 */
vec4 sampleScreenNoise(vec2 coords, float time) {
    vec2 timeOffset = vec2(
        fract(time / 51.0),
        fract(time / 237.0)
    );
    return texture2D(noiseSource, scaleNoiseSize * coords + timeOffset);
}
`;var Bf=`
#define RASTERIZATION_INTENSITY 0.30
#define RASTERIZATION_BRIGHTBOOST 0.30
#define SUBPIXELS 3.0

// Subpixel offsets for RGB pattern
const vec3 subpixelOffsets = vec3(3.141592654) * vec3(1.0/2.0, 1.0/2.0 - 2.0/3.0, 1.0/2.0 - 4.0/3.0);

/**
 * Apply scanline rasterization (horizontal lines)
 * Creates alternating bright/dark horizontal bands
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for line spacing
 * @param intensity - Effect intensity (0-1)
 * @return Rasterized color
 */
vec3 applyScanlineRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity) {
    // Calculate high and low brightness versions
    vec3 pixelHigh = ((1.0 + RASTERIZATION_BRIGHTBOOST) - (0.2 * texel)) * texel;
    vec3 pixelLow  = ((1.0 - RASTERIZATION_INTENSITY) + (0.1 * texel)) * texel;
    
    // Calculate position within virtual pixel (centered, -1 to 1)
    vec2 coords = fract(screenCoords * virtualResolution) * 2.0 - vec2(1.0);
    
    // Mask based on vertical position (creates horizontal lines)
    float mask = 1.0 - abs(coords.y);
    
    // Mix between low and high based on mask
    vec3 rasterizationColor = mix(pixelLow, pixelHigh, mask);
    
    // Blend with original based on intensity
    return mix(texel, rasterizationColor, intensity);
}

/**
 * Apply pixel rasterization (square grid)
 * Creates a grid of square pixels with darker edges
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for pixel spacing
 * @param intensity - Effect intensity (0-1)
 * @return Rasterized color
 */
vec3 applyPixelRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity) {
    // Calculate high and low brightness versions
    vec3 pixelHigh = ((1.0 + RASTERIZATION_BRIGHTBOOST) - (0.2 * texel)) * texel;
    vec3 pixelLow  = ((1.0 - RASTERIZATION_INTENSITY) + (0.1 * texel)) * texel;
    
    // Calculate position within virtual pixel (centered, -1 to 1)
    vec2 coords = fract(screenCoords * virtualResolution) * 2.0 - vec2(1.0);
    
    // Square the coordinates for rounded corners
    coords = coords * coords;
    
    // Mask based on both x and y (creates square pattern)
    float mask = 1.0 - coords.x - coords.y;
    
    // Mix between low and high based on mask
    vec3 rasterizationColor = mix(pixelLow, pixelHigh, mask);
    
    // Blend with original based on intensity
    return mix(texel, rasterizationColor, intensity);
}

/**
 * Apply subpixel rasterization (RGB subpixel pattern)
 * Creates visible RGB subpixels like an LCD display
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for subpixel spacing
 * @param intensity - Effect intensity (0-1)
 * @return Rasterized color
 */
vec3 applySubpixelRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity) {
    // Calculate angular frequency for subpixel pattern
    vec2 omega = vec2(3.141592654) * vec2(2.0) * virtualResolution;
    vec2 angle = screenCoords * omega;
    
    // Calculate RGB subpixel factors using phase-shifted sine waves
    vec3 xfactors = (SUBPIXELS + sin(angle.x + subpixelOffsets)) / (SUBPIXELS + 1.0);
    
    // Apply subpixel modulation
    vec3 result = texel * xfactors;
    
    // Calculate high and low brightness versions
    vec3 pixelHigh = ((1.0 + RASTERIZATION_BRIGHTBOOST) - (0.2 * result)) * result;
    vec3 pixelLow  = ((1.0 - RASTERIZATION_INTENSITY) + (0.1 * result)) * result;
    
    // Calculate position within virtual pixel for scanline effect
    vec2 coords = fract(screenCoords * virtualResolution) * 2.0 - vec2(1.0);
    float mask = 1.0 - abs(coords.y);
    
    // Mix between low and high based on mask
    vec3 rasterizationColor = mix(pixelLow, pixelHigh, mask);
    
    // Blend with original based on intensity
    return mix(texel, rasterizationColor, intensity);
}

/**
 * Apply rasterization effect based on mode
 *
 * @param screenCoords - Screen texture coordinates (0-1)
 * @param texel - Input color
 * @param virtualResolution - Virtual resolution for pattern spacing
 * @param intensity - Effect intensity (0-1, automatically reduced at high resolutions)
 * @param mode - Rasterization mode: 0=none, 1=scanline, 2=pixel, 3=subpixel
 * @return Rasterized color
 */
vec3 applyRasterization(vec2 screenCoords, vec3 texel, vec2 virtualResolution, float intensity, int mode) {
    if (mode == 0 || intensity <= 0.0) {
        return texel;
    }
    
    if (mode == 1) {
        return applyScanlineRasterization(screenCoords, texel, virtualResolution, intensity);
    } else if (mode == 2) {
        return applyPixelRasterization(screenCoords, texel, virtualResolution, intensity);
    } else if (mode == 3) {
        return applySubpixelRasterization(screenCoords, texel, virtualResolution, intensity);
    }
    
    return texel;
}
`;var kf=`
/**
 * Apply RGB shift (chromatic aberration) effect
 * @param tex - Source texture sampler
 * @param coords - Texture coordinates
 * @param shift - Shift amount (normalized, scaled by screen width)
 * @return Color with RGB channels shifted
 */
vec3 applyRgbShift(sampler2D tex, vec2 coords, float shift) {
    // Calculate horizontal displacement
    // The 12.0 multiplier matches the QML implementation
    vec2 displacement = vec2(12.0, 0.0) * shift;
    
    // Sample colors at shifted positions
    vec3 rightColor = texture2D(tex, coords + displacement).rgb;
    vec3 leftColor = texture2D(tex, coords - displacement).rgb;
    vec3 centerColor = texture2D(tex, coords).rgb;
    
    // Blend channels with asymmetric weights (from QML shader)
    // This creates a more natural chromatic aberration effect
    vec3 result;
    result.r = leftColor.r * 0.10 + rightColor.r * 0.30 + centerColor.r * 0.60;
    result.g = leftColor.g * 0.20 + rightColor.g * 0.20 + centerColor.g * 0.60;
    result.b = leftColor.b * 0.30 + rightColor.b * 0.10 + centerColor.b * 0.60;
    
    return result;
}
`;var Mc=`
// Utility functions from ShaderLibrary.qml
float sum2(vec2 v) {
    return v.x + v.y;
}

float min2(vec2 v) {
    return min(v.x, v.y);
}

/**
 * Check if coordinates are within screen bounds
 * From QML: min2(step(0.0, v) - step(1.0, v))
 * @param v - Texture coordinates
 * @return 1.0 if in screen, 0.0 if outside
 */
float isInScreen(vec2 v) {
    return min2(step(0.0, v) - step(1.0, v));
}

/**
 * Barrel distortion for dynamicShader with aspect ratio correction
 * From QML dynamicShader barrel() function:
 *   float distortion = dot(cc, cc) * screenCurvature;
 *   return (v - cc * (1.0 + distortion) * distortion);
 *
 * This returns raw distorted coordinates WITHOUT clamping.
 * Used for: burn-in sampling, rasterization coordinates
 * 
 * Aspect ratio correction: We normalize the cc vector by aspect ratio
 * when computing distortion magnitude, but apply the original cc for offset.
 * This maintains proper circular curvature on wide/tall screens.
 *
 * @param v - Input texture coordinates
 * @param cc - Center offset (vec2(0.5) - v)
 * @param curvature - Curvature amount (0 = flat, higher = more curved)
 * @return Distorted coordinates (may be outside 0-1 range)
 */
vec2 barrel(vec2 v, vec2 cc, float curvature) {
    if (curvature <= 0.0) {
        return v;
    }
    // Apply aspect ratio correction for proper circular distortion
    // When width > height, we need to reduce the X component's contribution
    // to get circular rather than elliptical curvature
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        // Wide screen: reduce X contribution
        ccCorrected.x /= aspectRatio;
    } else {
        // Tall screen: reduce Y contribution
        ccCorrected.y *= aspectRatio;
    }
    float distortion = dot(ccCorrected, ccCorrected) * curvature;
    return v - cc * (1.0 + distortion) * distortion;
}

/**
 * Static shader curvature with coordinate clamping and aspect ratio correction
 * From QML staticShader:
 *   float distortion = dot(cc, cc) * screenCurvature;
 *   vec2 curvatureCoords = (qt_TexCoord0 - cc * (1.0 + distortion) * distortion);
 *   vec2 txt_coords = -2.0 * curvatureCoords + 3.0 * step(vec2(0.0), curvatureCoords) * curvatureCoords 
 *                     - 3.0 * step(vec2(1.0), curvatureCoords) * curvatureCoords;
 *
 * The clamping formula ensures coordinates stay within bounds for texture sampling.
 * 
 * @param coords - Input texture coordinates  
 * @param cc - Center offset (vec2(0.5) - coords)
 * @param curvature - Curvature amount
 * @return Clamped distorted coordinates for texture sampling
 */
vec2 applyStaticCurvature(vec2 coords, vec2 cc, float curvature) {
    if (curvature <= 0.0) {
        return coords;
    }
    // Apply aspect ratio correction for proper circular distortion
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        ccCorrected.x /= aspectRatio;
    } else {
        ccCorrected.y *= aspectRatio;
    }
    float distortion = dot(ccCorrected, ccCorrected) * curvature;
    vec2 curvatureCoords = coords - cc * (1.0 + distortion) * distortion;
    // QML clamping formula - keeps coordinates in valid range
    return -2.0 * curvatureCoords + 3.0 * step(vec2(0.0), curvatureCoords) * curvatureCoords 
           - 3.0 * step(vec2(1.0), curvatureCoords) * curvatureCoords;
}

/**
 * Get raw curvature coordinates (before clamping) with aspect ratio correction
 * Used for calculating reflectionMask
 */
vec2 getRawCurvatureCoords(vec2 coords, vec2 cc, float curvature) {
    if (curvature <= 0.0) {
        return coords;
    }
    // Apply aspect ratio correction for proper circular distortion
    float aspectRatio = resolution.x / resolution.y;
    vec2 ccCorrected = cc;
    if (aspectRatio > 1.0) {
        ccCorrected.x /= aspectRatio;
    } else {
        ccCorrected.y *= aspectRatio;
    }
    float distortion = dot(ccCorrected, ccCorrected) * curvature;
    return coords - cc * (1.0 + distortion) * distortion;
}

/**
 * Calculate reflection mask for screen bounds
 * From QML staticShader:
 *   float reflectionMask = sum2(step(vec2(0.0), curvatureCoords) - step(vec2(1.0), curvatureCoords));
 *   reflectionMask = clamp(reflectionMask, 0.0, 1.0);
 *
 * @param curvatureCoords - Raw curvature coordinates (before clamping)
 * @return 1.0 inside screen, 0.0 outside, fractional at edges
 */
float calculateReflectionMask(vec2 curvatureCoords) {
    float mask = sum2(step(vec2(0.0), curvatureCoords) - step(vec2(1.0), curvatureCoords));
    return clamp(mask, 0.0, 1.0);
}
`;var Ff=`
/**
 * Apply static noise effect to add grain to the color
 * Ported from QML fragment shader:
 *   float noiseVal = noiseTexel.a;
 *   color += noiseVal * noise * (1.0 - distance * 1.3);
 *
 * The noise texture is sampled using sampleScreenNoise() and we use the .a channel
 *
 * @param noiseTexel - Noise texel sampled with sampleScreenNoise(coords, time)
 * @param staticNoise - Static noise intensity (0-1, default 0.12)
 * @param distanceFromCenter - Distance from screen center (0-0.5 range typically)
 * @param horizontalSyncBoost - Extra noise from horizontal sync distortion (distortionScale * 7.0)
 * @return Noise contribution to add to the color
 */
float calculateStaticNoise(vec4 noiseTexel, float staticNoise, float distanceFromCenter, float horizontalSyncBoost) {
    if (staticNoise <= 0.0 && horizontalSyncBoost <= 0.0) {
        return 0.0;
    }
    
    // Get noise value from alpha channel
    float noiseVal = noiseTexel.a;
    
    // Calculate total noise amount (can be boosted by horizontal sync)
    // From QML: noise += distortionScale * 7.0;
    float totalNoise = staticNoise + horizontalSyncBoost;
    
    // Apply distance falloff - noise is less intense at edges
    // The 1.3 multiplier makes the falloff more aggressive
    float distanceFalloff = 1.0 - distanceFromCenter * 1.3;
    distanceFalloff = max(distanceFalloff, 0.0);
    
    // Calculate noise contribution
    return noiseVal * totalNoise * distanceFalloff;
}

/**
 * Apply static noise to the final color
 * This adds the noise as additional brightness to the font color
 *
 * @param baseColor - The base terminal color
 * @param fontColor - The font color (noise is tinted with this)
 * @param noiseTexel - Noise texel sampled with sampleScreenNoise(coords, time)
 * @param staticNoise - Static noise intensity (0-1)
 * @param distanceFromCenter - Distance from screen center
 * @param horizontalSyncBoost - Extra noise from horizontal sync (distortionScale * 7.0)
 * @return Color with static noise applied
 */
vec3 applyStaticNoise(vec3 baseColor, vec3 fontColor, vec4 noiseTexel, float staticNoise, float distanceFromCenter, float horizontalSyncBoost) {
    float noiseContribution = calculateStaticNoise(noiseTexel, staticNoise, distanceFromCenter, horizontalSyncBoost);
    
    // Add noise as font-colored brightness
    return baseColor + fontColor * noiseContribution;
}
`;var ui={family:"Terminus",fallback:"monospace",pixelSize:12,baseScaling:3,baseFontScaling:.75,fontScaling:1,lineSpacing:1,fontWidth:1},as={fontColor:"#0ccc68",backgroundColor:"#000000",_margin:.5,_frameMargin:.5,contrast:.7959,saturationColor:0};function Of(t,e,i){return t+(e-t)*i}function Dy(t,e,i,n){let s=os({r:1,g:1,b:1,a:1},e,n*.5),o=.7+i*.3;return os(t,s,o)}var xl=class{mesh;staticMaterial;dynamicMaterial;texture;noiseTexture;canvas;ctx;staticRenderTarget;staticScene;staticCamera;staticMesh;burnInRenderTargets;burnInCurrentIndex=0;burnInMaterial;burnInScene;burnInCamera;burnInMesh;burnInAmount=.2517;lastFrameTime=0;minBurnInFadeTime=160;maxBurnInFadeTime=1600;text="guest@remojansen.com ~ $ ";fontColor;backgroundColor;charWidth=0;charHeight=0;cols=80;rows=24;fontLoaded=!1;cursorCol=26;cursorRow=0;cursorVisible=!0;cursorBlinking=!1;cursorBlinkState=!0;cursorBlinkInterval=null;CURSOR_BLINK_RATE=530;screenScaling;totalFontScaling;totalMargin;windowScaling=1;devicePixelRatio=1;logicalWidth=0;logicalHeight=0;onGridSizeChangeCallback=null;videoElement=null;videoTexture=null;isPlayingVideo=!1;originalTexture=null;constructor(e,i){this.logicalWidth=e,this.logicalHeight=i,this.fontColor=yn(as.fontColor);let n=yn(as.backgroundColor);this.totalFontScaling=ui.baseFontScaling*ui.fontScaling,this.screenScaling=ui.baseScaling*this.totalFontScaling,this.devicePixelRatio=window.devicePixelRatio||1,this.windowScaling=1;let r=Of(1,20,as._margin),s=Of(1,50,as._frameMargin);this.totalMargin=s+r,this.backgroundColor=Dy(n,this.fontColor,as.contrast,as.saturationColor),this.canvas=document.createElement("canvas"),this.canvas.width=e*this.devicePixelRatio,this.canvas.height=i*this.devicePixelRatio;let o=this.canvas.getContext("2d",{alpha:!1});if(!o)throw new Error("Could not get 2D context");this.ctx=o,this.ctx.setTransform(this.devicePixelRatio,0,0,this.devicePixelRatio,0,0),this.texture=new Ls(this.canvas),this.texture.minFilter=Qe,this.texture.magFilter=At;let a=new Bs;this.noiseTexture=a.load("/assets/images/allNoise512.png"),this.noiseTexture.wrapS=ur,this.noiseTexture.wrapT=ur,this.noiseTexture.minFilter=Qe,this.noiseTexture.magFilter=Qe;let h=new qe(e*.75/(512*this.windowScaling*this.totalFontScaling),i*.75/(512*this.windowScaling*this.totalFontScaling)),l=e*this.devicePixelRatio,u=i*this.devicePixelRatio;this.staticRenderTarget=new $t(l,u,{minFilter:Qe,magFilter:Qe,format:Yt,type:qt}),this.staticScene=new kn,this.staticCamera=new Zi(-1,1,1,-1,.1,10),this.staticCamera.position.z=1,this.staticMaterial=new It({uniforms:{textTexture:{value:this.texture},fontColor:{value:new V(this.fontColor.r,this.fontColor.g,this.fontColor.b)},backgroundColor:{value:new V(this.backgroundColor.r,this.backgroundColor.g,this.backgroundColor.b)},chromaColor:{value:0},screenCurvature:{value:.3},rgbShift:{value:0},bloom:{value:.5538*2.5},brightness:{value:.5},resolution:{value:new qe(l,u)}},vertexShader:Cc,fragmentShader:Ny,transparent:!1});let c=new ki(2,2);this.staticMesh=new Ot(c,this.staticMaterial),this.staticScene.add(this.staticMesh),this.burnInRenderTargets=[new $t(l,u,{minFilter:Qe,magFilter:Qe,format:Yt,type:qt}),new $t(l,u,{minFilter:Qe,magFilter:Qe,format:Yt,type:qt})],this.burnInScene=new kn,this.burnInCamera=new Zi(-1,1,1,-1,.1,10),this.burnInCamera.position.z=1,this.burnInMaterial=new It({uniforms:{currentSource:{value:this.staticRenderTarget.texture},burnInSource:{value:this.burnInRenderTargets[1].texture},burnInTime:{value:this.calculateBurnInFadeTime()},deltaTime:{value:.016}},vertexShader:Cc,fragmentShader:ky,transparent:!1});let d=new ki(2,2);this.burnInMesh=new Ot(d,this.burnInMaterial),this.burnInScene.add(this.burnInMesh),this.lastFrameTime=performance.now(),this.dynamicMaterial=new It({uniforms:{frameBuffer:{value:this.staticRenderTarget.texture},burnInSource:{value:this.burnInRenderTargets[0].texture},textTexture:{value:this.texture},noiseSource:{value:this.noiseTexture},scaleNoiseSize:{value:h},fontColor:{value:new V(this.fontColor.r,this.fontColor.g,this.fontColor.b)},backgroundColor:{value:new V(this.backgroundColor.r,this.backgroundColor.g,this.backgroundColor.b)},chromaColor:{value:0},screenCurvature:{value:.3},ambientLight:{value:.2},resolution:{value:new qe(l,u)},time:{value:0},flickering:{value:.1},horizontalSync:{value:.08},jitter:{value:.1997},staticNoise:{value:.1198},glowingLine:{value:.2*.2},burnIn:{value:this.burnInAmount},rasterizationMode:{value:1},rasterizationIntensity:{value:.5},virtualResolution:{value:new qe(80,24)}},vertexShader:Cc,fragmentShader:By,transparent:!1});let f=new ki(2,2);this.mesh=new Ot(f,this.dynamicMaterial),this.calculateFontMetrics(),this.render(),this.loadFont().then(()=>{this.calculateFontMetrics(),this.render()})}async loadFont(){try{let e=new FontFace("Terminus","url(/assets/fonts/modern-terminus/TerminusTTF-4.46.0.ttf)");await e.load(),document.fonts.add(e),this.fontLoaded=!0,console.log("Terminus font loaded successfully")}catch(e){console.warn("Could not load Terminus font, using fallback:",e),this.fontLoaded=!1}}calculateFontMetrics(){let e=ui.pixelSize,i=this.fontLoaded?`"${ui.family}", ${ui.fallback}`:ui.fallback;this.ctx.font=`${e}px ${i}`;let n=this.ctx.measureText("M");this.charWidth=n.width*ui.fontWidth,this.charHeight=e+ui.lineSpacing;let r=Math.floor(this.logicalWidth/(this.screenScaling*ui.fontWidth)),s=Math.floor(this.logicalHeight/this.screenScaling),o=Math.floor(this.totalMargin/this.screenScaling),a=r-2*o,h=s-2*o;this.cols=Math.floor(a/this.charWidth),this.rows=Math.floor(h/this.charHeight),this.dynamicMaterial.uniforms.virtualResolution.value.set(r,s),console.log(`Terminal: total=${r}x${s}, raw=${a}x${h}, grid=${this.cols}x${this.rows}, char=${this.charWidth.toFixed(2)}x${this.charHeight}, screenScaling=${this.screenScaling.toFixed(2)}, margin=${o}, dpr=${this.devicePixelRatio}`),this.onGridSizeChangeCallback&&this.onGridSizeChangeCallback(this.cols,this.rows)}setText(e){this.text=e,this.render()}setCursorPosition(e,i){this.cursorCol=e,this.cursorRow=i,this.render()}setCursorVisible(e){this.cursorVisible=e,this.render()}setCursorBlinking(e){this.cursorBlinking=e,e?this.startCursorBlink():(this.stopCursorBlink(),this.cursorBlinkState=!0,this.render())}startCursorBlink(){this.cursorBlinkInterval===null&&(this.cursorBlinkInterval=window.setInterval(()=>{this.cursorBlinking&&(this.cursorBlinkState=!this.cursorBlinkState,this.render())},this.CURSOR_BLINK_RATE))}stopCursorBlink(){this.cursorBlinkInterval!==null&&(window.clearInterval(this.cursorBlinkInterval),this.cursorBlinkInterval=null)}resetCursorBlink(){this.cursorBlinkState=!0,this.cursorBlinkInterval!==null&&(this.stopCursorBlink(),this.startCursorBlink()),this.render()}render(){let{ctx:e,canvas:i}=this,n=ui.pixelSize,r=this.fontLoaded?`"${ui.family}", ${ui.fallback}`:ui.fallback;e.fillStyle=`rgb(${Math.floor(this.backgroundColor.r*255)}, ${Math.floor(this.backgroundColor.g*255)}, ${Math.floor(this.backgroundColor.b*255)})`,e.fillRect(0,0,i.width,i.height),e.font=`${n}px ${r}`,e.textBaseline="top",e.imageSmoothingEnabled=!1,e.fillStyle="#ffffff";let s=this.text.split(`
`),o=this.totalMargin;for(let a=0;a<this.rows;a++){let h=a<s.length?s[a]:"",l=o+a*this.charHeight*this.screenScaling;for(let u=0;u<Math.min(h.length,this.cols);u++){let c=h[u],d=o+u*this.charWidth*this.screenScaling;e.save(),e.translate(d,l),e.scale(this.screenScaling,this.screenScaling),e.fillText(c,0,0),e.restore()}}if(this.cursorVisible&&this.cursorBlinkState&&this.cursorRow<this.rows){let a=o+this.cursorCol*this.charWidth*this.screenScaling,h=o+this.cursorRow*this.charHeight*this.screenScaling,l=this.charWidth*this.screenScaling,u=this.charHeight*this.screenScaling;if(e.fillStyle="#ffffff",e.fillRect(a,h,l,u),this.cursorRow<s.length){let c=s[this.cursorRow];if(this.cursorCol<c.length){let d=c[this.cursorCol];e.fillStyle=`rgb(${Math.floor(this.backgroundColor.r*255)}, ${Math.floor(this.backgroundColor.g*255)}, ${Math.floor(this.backgroundColor.b*255)})`,e.save(),e.translate(a,h),e.scale(this.screenScaling,this.screenScaling),e.fillText(d,0,0),e.restore()}}}this.texture.needsUpdate=!0}updateSize(e,i){this.logicalWidth=e,this.logicalHeight=i,this.devicePixelRatio=window.devicePixelRatio||1;let n=e*this.devicePixelRatio,r=i*this.devicePixelRatio;this.canvas.width=n,this.canvas.height=r,this.ctx.setTransform(this.devicePixelRatio,0,0,this.devicePixelRatio,0,0),this.staticRenderTarget.setSize(n,r),this.burnInRenderTargets[0].setSize(n,r),this.burnInRenderTargets[1].setSize(n,r),this.staticMaterial.uniforms.resolution.value.set(n,r),this.dynamicMaterial.uniforms.resolution.value.set(n,r),this.dynamicMaterial.uniforms.scaleNoiseSize.value.set(n*.75/(512*this.totalFontScaling),r*.75/(512*this.totalFontScaling)),this.calculateFontMetrics(),this.render()}setFontColor(e){this.fontColor=yn(e);let i=new V(this.fontColor.r,this.fontColor.g,this.fontColor.b);this.staticMaterial.uniforms.fontColor.value.copy(i),this.dynamicMaterial.uniforms.fontColor.value.copy(i)}setBackgroundColor(e){this.backgroundColor=yn(e);let i=new V(this.backgroundColor.r,this.backgroundColor.g,this.backgroundColor.b);this.staticMaterial.uniforms.backgroundColor.value.copy(i),this.dynamicMaterial.uniforms.backgroundColor.value.copy(i),this.render()}setScreenCurvature(e){this.staticMaterial.uniforms.screenCurvature.value=e,this.dynamicMaterial.uniforms.screenCurvature.value=e}setRgbShift(e){this.staticMaterial.uniforms.rgbShift.value=e}setBloom(e){this.staticMaterial.uniforms.bloom.value=e*2.5}setBrightness(e){this.staticMaterial.uniforms.brightness.value=e}setAmbientLight(e){this.dynamicMaterial.uniforms.ambientLight.value=e}setChromaColor(e){this.staticMaterial.uniforms.chromaColor.value=e,this.dynamicMaterial.uniforms.chromaColor.value=e}setFlickering(e){this.dynamicMaterial.uniforms.flickering.value=e}setHorizontalSync(e){this.dynamicMaterial.uniforms.horizontalSync.value=e}setJitter(e){this.dynamicMaterial.uniforms.jitter.value=e}setStaticNoise(e){this.dynamicMaterial.uniforms.staticNoise.value=e}setGlowingLine(e){this.dynamicMaterial.uniforms.glowingLine.value=e*.2}setBurnIn(e){this.burnInAmount=e,this.dynamicMaterial.uniforms.burnIn.value=e,this.burnInMaterial.uniforms.burnInTime.value=this.calculateBurnInFadeTime()}calculateBurnInFadeTime(){return 1/(this.minBurnInFadeTime+(this.maxBurnInFadeTime-this.minBurnInFadeTime)*this.burnInAmount)}setRasterizationMode(e){this.dynamicMaterial.uniforms.rasterizationMode.value=e}setRasterizationIntensity(e){this.dynamicMaterial.uniforms.rasterizationIntensity.value=e}setVirtualResolution(e,i){this.dynamicMaterial.uniforms.virtualResolution.value.set(e,i)}updateTime(e){this.dynamicMaterial.uniforms.time.value=e%1e5}renderStaticPass(e){let i=performance.now(),n=(i-this.lastFrameTime)/1e3;if(this.lastFrameTime=i,e.setRenderTarget(this.staticRenderTarget),e.render(this.staticScene,this.staticCamera),this.burnInAmount>0){this.burnInMaterial.uniforms.deltaTime.value=n;let r=this.burnInCurrentIndex,s=1-this.burnInCurrentIndex;this.burnInMaterial.uniforms.burnInSource.value=this.burnInRenderTargets[r].texture,this.burnInMaterial.uniforms.currentSource.value=this.staticRenderTarget.texture,e.setRenderTarget(this.burnInRenderTargets[s]),e.render(this.burnInScene,this.burnInCamera),this.dynamicMaterial.uniforms.burnInSource.value=this.burnInRenderTargets[s].texture,this.burnInCurrentIndex=s}e.setRenderTarget(null)}playVideo(e){return new Promise((i,n)=>{this.videoElement=document.createElement("video"),this.videoElement.src=e,this.videoElement.crossOrigin="anonymous",this.videoElement.playsInline=!0,this.videoElement.muted=!1,this.videoElement.onloadedmetadata=()=>{this.videoElement&&(this.videoTexture=new Is(this.videoElement),this.videoTexture.minFilter=Qe,this.videoTexture.magFilter=Qe,this.videoTexture.format=Yt,this.originalTexture=this.texture,this.staticMaterial.uniforms.textTexture.value=this.videoTexture,this.dynamicMaterial.uniforms.textTexture.value=this.videoTexture,this.cursorVisible=!1,this.isPlayingVideo=!0,this.videoElement.play().catch(n))},this.videoElement.onended=()=>{this.stopVideo(),i()},this.videoElement.onerror=()=>{this.stopVideo(),n(new Error("Failed to load video"))},this.videoElement.load()})}stopVideo(){this.videoElement&&(this.videoElement.pause(),this.videoElement.src="",this.videoElement=null),this.videoTexture&&(this.videoTexture.dispose(),this.videoTexture=null),this.originalTexture&&(this.staticMaterial.uniforms.textTexture.value=this.originalTexture,this.dynamicMaterial.uniforms.textTexture.value=this.originalTexture,this.originalTexture=null),this.cursorVisible=!0,this.isPlayingVideo=!1,this.render()}isVideoPlaying(){return this.isPlayingVideo}getVideoElement(){return this.videoElement}dispose(){this.stopCursorBlink(),this.stopVideo(),this.texture.dispose(),this.noiseTexture.dispose(),this.staticMaterial.dispose(),this.dynamicMaterial.dispose(),this.burnInMaterial.dispose(),this.staticRenderTarget.dispose(),this.burnInRenderTargets[0].dispose(),this.burnInRenderTargets[1].dispose(),this.mesh.geometry.dispose(),this.staticMesh.geometry.dispose(),this.burnInMesh.geometry.dispose()}getCursorPosition(){return{col:this.cursorCol,row:this.cursorRow}}getCols(){return this.cols}getRows(){return this.rows}getGridSize(){return{cols:this.cols,rows:this.rows}}onGridSizeChange(e){this.onGridSizeChangeCallback=e}},Cc=`
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ny=`
precision mediump float;

uniform sampler2D textTexture;
uniform vec3 fontColor;
uniform vec3 backgroundColor;
uniform float chromaColor;
uniform float screenCurvature;
uniform float rgbShift;
uniform float bloom;
uniform float brightness;
uniform vec2 resolution;

varying vec2 vUv;

// Include effect functions for static pass
${Mc}
${wc}
${kf}
${Ef}
${Tf}

void main() {
    vec2 cc = vec2(0.5) - vUv;
    
    // 1. Apply screen curvature
    vec2 curvatureCoords = getRawCurvatureCoords(vUv, cc, screenCurvature);
    vec2 txt_coords = screenCurvature > 0.0 ? applyStaticCurvature(vUv, cc, screenCurvature) : vUv;
    
    // 2. Sample terminal source texture
    vec3 txt_color = texture2D(textTexture, txt_coords).rgb;
    
    // 3. Apply RGB shift (chromatic aberration)
    if (rgbShift > 0.0) {
        txt_color = applyRgbShift(textTexture, txt_coords, rgbShift);
    }
    
    // 4. Add small value to prevent division by zero (from QML)
    txt_color += vec3(0.0001);
    float greyscale_color = rgb2grey(txt_color);
    
    // 5. Calculate reflection mask for screen bounds
    float reflectionMask = screenCurvature > 0.0 ? calculateReflectionMask(curvatureCoords) : 1.0;
    
    // 6. Apply chroma color and mix with background
    vec3 finalColor;
    if (chromaColor > 0.0) {
        vec3 foregroundColor = mix(fontColor, txt_color * fontColor / greyscale_color, chromaColor);
        finalColor = mix(backgroundColor, foregroundColor, greyscale_color * reflectionMask);
    } else {
        finalColor = mix(backgroundColor, fontColor, greyscale_color * reflectionMask);
    }
    
    // 7. Apply bloom effect
    if (bloom > 0.0) {
        finalColor = applyBloom(finalColor, textTexture, txt_coords, resolution, bloom, fontColor, chromaColor);
    }
    
    // 8. Apply brightness
    float screen_brightness = mix(0.5, 1.5, brightness);
    finalColor *= screen_brightness;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`,By=`
precision mediump float;

uniform sampler2D frameBuffer;
uniform sampler2D burnInSource;
uniform sampler2D textTexture;
uniform vec3 fontColor;
uniform vec3 backgroundColor;
uniform float chromaColor;
uniform float screenCurvature;
uniform float ambientLight;
uniform vec2 resolution;

// Dynamic effect uniforms
uniform float time;
uniform float flickering;
uniform float horizontalSync;
uniform float jitter;
uniform float staticNoise;
uniform float glowingLine;
uniform float burnIn;
uniform int rasterizationMode;
uniform float rasterizationIntensity;
uniform vec2 virtualResolution;

// Noise texture uniforms
${Nf}

varying vec2 vUv;

// Include effect functions for dynamic pass
${Mc}
${wc}
${Pf}
${Lf}
${Df}
${Ff}
${If}
${Rf}
${Bf}

void main() {
    vec2 cc = vec2(0.5) - vUv;
    float distance = length(cc);
    
    // 1. Calculate staticCoords for burn-in and rasterization
    vec2 staticCoords = screenCurvature > 0.0 ? barrel(vUv, cc, screenCurvature) : vUv;
    
    // 2. Sample initial noise for flickering and horizontal sync
    vec4 initialNoiseTexel = sampleInitialNoise(time);
    
    // 3. Calculate flickering brightness (applied at the end)
    float flickeringBrightness = calculateFlickeringBrightness(initialNoiseTexel, flickering);
    
    // 4. Calculate horizontal sync distortion parameters
    float distortionScale = getHorizontalSyncDistortionScale(initialNoiseTexel, horizontalSync);
    
    // 5. Initialize noise accumulator
    float noise = staticNoise;
    
    // 6. Start with base coordinates
    vec2 coords = vUv;
    
    // 7. Apply horizontal sync distortion
    coords = applyHorizontalSync(coords, time, initialNoiseTexel, horizontalSync);
    if (horizontalSync > 0.0) {
        noise += distortionScale * 7.0;
    }
    
    // 8. Sample screen noise for jitter and static noise
    vec4 screenNoiseTexel = sampleScreenNoise(coords, time);
    
    // 9. Apply jitter to get final sampling coordinates
    vec2 txt_coords = applyJitter(coords, screenNoiseTexel, jitter);
    
    // 10. Initialize color accumulator
    float colorAccum = 0.0001;
    
    // 11. Add static noise contribution
    if (staticNoise > 0.0 || distortionScale > 0.0) {
        float noiseVal = screenNoiseTexel.a;
        colorAccum += noiseVal * noise * (1.0 - distance * 1.3);
    }
    
    // 12. Add glowing line contribution
    if (glowingLine > 0.0) {
        colorAccum += calculateGlowingLineContribution(coords, virtualResolution, time, glowingLine);
    }
    
    // 13. Sample from frameBuffer (stable static pass output)
    // Apply jitter by sampling with jittered coordinates
    vec3 txt_color = texture2D(frameBuffer, txt_coords).rgb;
    
    // 14. Apply burn-in effect (sample from accumulated burn-in buffer)
    if (burnIn > 0.0) {
        vec3 burnInColor = texture2D(burnInSource, txt_coords).rgb;
        txt_color = applyBurnIn(txt_color, burnInColor, burnIn);
    }
    
    // 15. Add color accumulator (noise + glowing line)
    txt_color += fontColor * colorAccum;
    
    // 16. Apply rasterization
    txt_color = applyRasterization(staticCoords, txt_color, virtualResolution, rasterizationIntensity, rasterizationMode);
    
    vec3 finalColor = txt_color;
    
    // 17. Apply flickering (ONLY here at the end - this is the key difference!)
    // This ensures flickering doesn't affect the frameBuffer content
    if (flickering > 0.0) {
        finalColor *= flickeringBrightness;
    }
    
    // 18. Apply ambient light
    if (ambientLight > 0.0) {
        finalColor += vec3(ambientLight * 0.2) * (1.0 - distance) * (1.0 - distance);
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`,ky=`
${Af}
`;var Vp=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,Oy=(t,e)=>{for(var i in e)Vp(t,i,{get:e[i],enumerable:!0})},bt=(t,e,i,n)=>{for(var r=n>1?void 0:n?Fy(e,i):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(n?o(e,i,r):o(r))||r);return n&&r&&Vp(e,i,r),r},pe=(t,e)=>(i,n)=>e(i,n,t),Uf="Terminal input",Vc={get:()=>Uf,set:t=>Uf=t},zf="Too much output to announce, navigate to rows manually to read",Wc={get:()=>zf,set:t=>zf=t};function Uy(t){return t.replace(/\r?\n/g,"\r")}function zy(t,e){return e?"\x1B[200~"+t+"\x1B[201~":t}function Hy(t,e){t.clipboardData&&t.clipboardData.setData("text/plain",e.selectionText),t.preventDefault()}function Vy(t,e,i,n){if(t.stopPropagation(),t.clipboardData){let r=t.clipboardData.getData("text/plain");Wp(r,e,i,n)}}function Wp(t,e,i,n){t=Uy(t),t=zy(t,i.decPrivateModes.bracketedPasteMode&&n.rawOptions.ignoreBracketedPasteMode!==!0),i.triggerDataEvent(t,!0),e.value=""}function Gp(t,e,i){let n=i.getBoundingClientRect(),r=t.clientX-n.left-10,s=t.clientY-n.top-10;e.style.width="20px",e.style.height="20px",e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.zIndex="1000",e.focus()}function Hf(t,e,i,n,r){Gp(t,e,i),r&&n.rightClickSelect(t),e.value=n.selectionText,e.select()}function Kn(t){return t>65535?(t-=65536,String.fromCharCode((t>>10)+55296)+String.fromCharCode(t%1024+56320)):String.fromCharCode(t)}function $l(t,e=0,i=t.length){let n="";for(let r=e;r<i;++r){let s=t[r];s>65535?(s-=65536,n+=String.fromCharCode((s>>10)+55296)+String.fromCharCode(s%1024+56320)):n+=String.fromCharCode(s)}return n}var Wy=class{constructor(){this._interim=0}clear(){this._interim=0}decode(t,e){let i=t.length;if(!i)return 0;let n=0,r=0;if(this._interim){let s=t.charCodeAt(r++);56320<=s&&s<=57343?e[n++]=(this._interim-55296)*1024+s-56320+65536:(e[n++]=this._interim,e[n++]=s),this._interim=0}for(let s=r;s<i;++s){let o=t.charCodeAt(s);if(55296<=o&&o<=56319){if(++s>=i)return this._interim=o,n;let a=t.charCodeAt(s);56320<=a&&a<=57343?e[n++]=(o-55296)*1024+a-56320+65536:(e[n++]=o,e[n++]=a);continue}o!==65279&&(e[n++]=o)}return n}},Gy=class{constructor(){this.interim=new Uint8Array(3)}clear(){this.interim.fill(0)}decode(t,e){let i=t.length;if(!i)return 0;let n=0,r,s,o,a,h=0,l=0;if(this.interim[0]){let d=!1,f=this.interim[0];f&=(f&224)===192?31:(f&240)===224?15:7;let m=0,g;for(;(g=this.interim[++m]&63)&&m<4;)f<<=6,f|=g;let _=(this.interim[0]&224)===192?2:(this.interim[0]&240)===224?3:4,p=_-m;for(;l<p;){if(l>=i)return 0;if(g=t[l++],(g&192)!==128){l--,d=!0;break}else this.interim[m++]=g,f<<=6,f|=g&63}d||(_===2?f<128?l--:e[n++]=f:_===3?f<2048||f>=55296&&f<=57343||f===65279||(e[n++]=f):f<65536||f>1114111||(e[n++]=f)),this.interim.fill(0)}let u=i-4,c=l;for(;c<i;){for(;c<u&&!((r=t[c])&128)&&!((s=t[c+1])&128)&&!((o=t[c+2])&128)&&!((a=t[c+3])&128);)e[n++]=r,e[n++]=s,e[n++]=o,e[n++]=a,c+=4;if(r=t[c++],r<128)e[n++]=r;else if((r&224)===192){if(c>=i)return this.interim[0]=r,n;if(s=t[c++],(s&192)!==128){c--;continue}if(h=(r&31)<<6|s&63,h<128){c--;continue}e[n++]=h}else if((r&240)===224){if(c>=i)return this.interim[0]=r,n;if(s=t[c++],(s&192)!==128){c--;continue}if(c>=i)return this.interim[0]=r,this.interim[1]=s,n;if(o=t[c++],(o&192)!==128){c--;continue}if(h=(r&15)<<12|(s&63)<<6|o&63,h<2048||h>=55296&&h<=57343||h===65279)continue;e[n++]=h}else if((r&248)===240){if(c>=i)return this.interim[0]=r,n;if(s=t[c++],(s&192)!==128){c--;continue}if(c>=i)return this.interim[0]=r,this.interim[1]=s,n;if(o=t[c++],(o&192)!==128){c--;continue}if(c>=i)return this.interim[0]=r,this.interim[1]=s,this.interim[2]=o,n;if(a=t[c++],(a&192)!==128){c--;continue}if(h=(r&7)<<18|(s&63)<<12|(o&63)<<6|a&63,h<65536||h>1114111)continue;e[n++]=h}}return n}},Xp="",Zn=" ",_o=class $p{constructor(){this.fg=0,this.bg=0,this.extended=new Fl}static toColorRGB(e){return[e>>>16&255,e>>>8&255,e&255]}static fromColorRGB(e){return(e[0]&255)<<16|(e[1]&255)<<8|e[2]&255}clone(){let e=new $p;return e.fg=this.fg,e.bg=this.bg,e.extended=this.extended.clone(),e}isInverse(){return this.fg&67108864}isBold(){return this.fg&134217728}isUnderline(){return this.hasExtendedAttrs()&&this.extended.underlineStyle!==0?1:this.fg&268435456}isBlink(){return this.fg&536870912}isInvisible(){return this.fg&1073741824}isItalic(){return this.bg&67108864}isDim(){return this.bg&134217728}isStrikethrough(){return this.fg&2147483648}isProtected(){return this.bg&536870912}isOverline(){return this.bg&1073741824}getFgColorMode(){return this.fg&50331648}getBgColorMode(){return this.bg&50331648}isFgRGB(){return(this.fg&50331648)===50331648}isBgRGB(){return(this.bg&50331648)===50331648}isFgPalette(){return(this.fg&50331648)===16777216||(this.fg&50331648)===33554432}isBgPalette(){return(this.bg&50331648)===16777216||(this.bg&50331648)===33554432}isFgDefault(){return(this.fg&50331648)===0}isBgDefault(){return(this.bg&50331648)===0}isAttributeDefault(){return this.fg===0&&this.bg===0}getFgColor(){switch(this.fg&50331648){case 16777216:case 33554432:return this.fg&255;case 50331648:return this.fg&16777215;default:return-1}}getBgColor(){switch(this.bg&50331648){case 16777216:case 33554432:return this.bg&255;case 50331648:return this.bg&16777215;default:return-1}}hasExtendedAttrs(){return this.bg&268435456}updateExtended(){this.extended.isEmpty()?this.bg&=-268435457:this.bg|=268435456}getUnderlineColor(){if(this.bg&268435456&&~this.extended.underlineColor)switch(this.extended.underlineColor&50331648){case 16777216:case 33554432:return this.extended.underlineColor&255;case 50331648:return this.extended.underlineColor&16777215;default:return this.getFgColor()}return this.getFgColor()}getUnderlineColorMode(){return this.bg&268435456&&~this.extended.underlineColor?this.extended.underlineColor&50331648:this.getFgColorMode()}isUnderlineColorRGB(){return this.bg&268435456&&~this.extended.underlineColor?(this.extended.underlineColor&50331648)===50331648:this.isFgRGB()}isUnderlineColorPalette(){return this.bg&268435456&&~this.extended.underlineColor?(this.extended.underlineColor&50331648)===16777216||(this.extended.underlineColor&50331648)===33554432:this.isFgPalette()}isUnderlineColorDefault(){return this.bg&268435456&&~this.extended.underlineColor?(this.extended.underlineColor&50331648)===0:this.isFgDefault()}getUnderlineStyle(){return this.fg&268435456?this.bg&268435456?this.extended.underlineStyle:1:0}getUnderlineVariantOffset(){return this.extended.underlineVariantOffset}},Fl=class qp{constructor(e=0,i=0){this._ext=0,this._urlId=0,this._ext=e,this._urlId=i}get ext(){return this._urlId?this._ext&-469762049|this.underlineStyle<<26:this._ext}set ext(e){this._ext=e}get underlineStyle(){return this._urlId?5:(this._ext&469762048)>>26}set underlineStyle(e){this._ext&=-469762049,this._ext|=e<<26&469762048}get underlineColor(){return this._ext&67108863}set underlineColor(e){this._ext&=-67108864,this._ext|=e&67108863}get urlId(){return this._urlId}set urlId(e){this._urlId=e}get underlineVariantOffset(){let e=(this._ext&3758096384)>>29;return e<0?e^4294967288:e}set underlineVariantOffset(e){this._ext&=536870911,this._ext|=e<<29&3758096384}clone(){return new qp(this._ext,this._urlId)}isEmpty(){return this.underlineStyle===0&&this._urlId===0}},Ii=class Yp extends _o{constructor(){super(...arguments),this.content=0,this.fg=0,this.bg=0,this.extended=new Fl,this.combinedData=""}static fromCharData(e){let i=new Yp;return i.setFromCharData(e),i}isCombined(){return this.content&2097152}getWidth(){return this.content>>22}getChars(){return this.content&2097152?this.combinedData:this.content&2097151?Kn(this.content&2097151):""}getCode(){return this.isCombined()?this.combinedData.charCodeAt(this.combinedData.length-1):this.content&2097151}setFromCharData(e){this.fg=e[0],this.bg=0;let i=!1;if(e[1].length>2)i=!0;else if(e[1].length===2){let n=e[1].charCodeAt(0);if(55296<=n&&n<=56319){let r=e[1].charCodeAt(1);56320<=r&&r<=57343?this.content=(n-55296)*1024+r-56320+65536|e[2]<<22:i=!0}else i=!0}else this.content=e[1].charCodeAt(0)|e[2]<<22;i&&(this.combinedData=e[1],this.content=2097152|e[2]<<22)}getAsCharData(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]}},Vf="di$target",Gc="di$dependencies",Ec=new Map;function Xy(t){return t[Gc]||[]}function Wt(t){if(Ec.has(t))return Ec.get(t);let e=function(i,n,r){if(arguments.length!==3)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");$y(e,i,r)};return e._id=t,Ec.set(t,e),e}function $y(t,e,i){e[Vf]===e?e[Gc].push({id:t,index:i}):(e[Gc]=[{id:t,index:i}],e[Vf]=e)}var ri=Wt("BufferService"),Kp=Wt("CoreMouseService"),Ar=Wt("CoreService"),qy=Wt("CharsetService"),Eu=Wt("InstantiationService"),Zp=Wt("LogService"),si=Wt("OptionsService"),Jp=Wt("OscLinkService"),Yy=Wt("UnicodeService"),go=Wt("DecorationService"),Xc=class{constructor(t,e,i){this._bufferService=t,this._optionsService=e,this._oscLinkService=i}provideLinks(t,e){let i=this._bufferService.buffer.lines.get(t-1);if(!i){e(void 0);return}let n=[],r=this._optionsService.rawOptions.linkHandler,s=new Ii,o=i.getTrimmedLength(),a=-1,h=-1,l=!1;for(let u=0;u<o;u++)if(!(h===-1&&!i.hasContent(u))){if(i.loadCell(u,s),s.hasExtendedAttrs()&&s.extended.urlId)if(h===-1){h=u,a=s.extended.urlId;continue}else l=s.extended.urlId!==a;else h!==-1&&(l=!0);if(l||h!==-1&&u===o-1){let c=this._oscLinkService.getLinkData(a)?.uri;if(c){let d={start:{x:h+1,y:t},end:{x:u+(!l&&u===o-1?1:0),y:t}},f=!1;if(!r?.allowNonHttpProtocols)try{let m=new URL(c);["http:","https:"].includes(m.protocol)||(f=!0)}catch{f=!0}f||n.push({text:c,range:d,activate:(m,g)=>r?r.activate(m,g,d):Ky(m,g),hover:(m,g)=>r?.hover?.(m,g,d),leave:(m,g)=>r?.leave?.(m,g,d)})}l=!1,s.hasExtendedAttrs()&&s.extended.urlId?(h=u,a=s.extended.urlId):(h=-1,a=-1)}}e(n)}};Xc=bt([pe(0,ri),pe(1,si),pe(2,Jp)],Xc);function Ky(t,e){if(confirm(`Do you want to navigate to ${e}?

WARNING: This link could potentially be dangerous`)){let i=window.open();if(i){try{i.opener=null}catch{}i.location.href=e}else console.warn("Opening link blocked as opener could not be cleared")}}var ql=Wt("CharSizeService"),Cn=Wt("CoreBrowserService"),Tu=Wt("MouseService"),En=Wt("RenderService"),Zy=Wt("SelectionService"),jp=Wt("CharacterJoinerService"),us=Wt("ThemeService"),Qp=Wt("LinkProviderService"),Jy=class{constructor(){this.listeners=[],this.unexpectedErrorHandler=function(t){setTimeout(()=>{throw t.stack?Wf.isErrorNoTelemetry(t)?new Wf(t.message+`

`+t.stack):new Error(t.message+`

`+t.stack):t},0)}}addListener(t){return this.listeners.push(t),()=>{this._removeListener(t)}}emit(t){this.listeners.forEach(e=>{e(t)})}_removeListener(t){this.listeners.splice(this.listeners.indexOf(t),1)}setUnexpectedErrorHandler(t){this.unexpectedErrorHandler=t}getUnexpectedErrorHandler(){return this.unexpectedErrorHandler}onUnexpectedError(t){this.unexpectedErrorHandler(t),this.emit(t)}onUnexpectedExternalError(t){this.unexpectedErrorHandler(t)}},jy=new Jy;function Tl(t){Qy(t)||jy.onUnexpectedError(t)}var $c="Canceled";function Qy(t){return t instanceof ex?!0:t instanceof Error&&t.name===$c&&t.message===$c}var ex=class extends Error{constructor(){super($c),this.name=this.message}};function tx(t){return t?new Error(`Illegal argument: ${t}`):new Error("Illegal argument")}var Wf=class qc extends Error{constructor(e){super(e),this.name="CodeExpectedError"}static fromError(e){if(e instanceof qc)return e;let i=new qc;return i.message=e.message,i.stack=e.stack,i}static isErrorNoTelemetry(e){return e.name==="CodeExpectedError"}},Yc=class em extends Error{constructor(e){super(e||"An unexpected bug occurred."),Object.setPrototypeOf(this,em.prototype)}};function ix(t,e,i=0,n=t.length){let r=i,s=n;for(;r<s;){let o=Math.floor((r+s)/2);e(t[o])?r=o+1:s=o}return r-1}var nx=class tm{constructor(e){this._array=e,this._findLastMonotonousLastIdx=0}findLastMonotonous(e){if(tm.assertInvariants){if(this._prevFindLastPredicate){for(let n of this._array)if(this._prevFindLastPredicate(n)&&!e(n))throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.")}this._prevFindLastPredicate=e}let i=ix(this._array,e,this._findLastMonotonousLastIdx);return this._findLastMonotonousLastIdx=i+1,i===-1?void 0:this._array[i]}};nx.assertInvariants=!1;function yi(t,e=0){return t[t.length-(1+e)]}var im;(t=>{function e(s){return s<0}t.isLessThan=e;function i(s){return s<=0}t.isLessThanOrEqual=i;function n(s){return s>0}t.isGreaterThan=n;function r(s){return s===0}t.isNeitherLessOrGreaterThan=r,t.greaterThan=1,t.lessThan=-1,t.neitherLessOrGreaterThan=0})(im||={});function rx(t,e){return(i,n)=>e(t(i),t(n))}var sx=(t,e)=>t-e,Gf=class Kc{constructor(e){this.iterate=e}forEach(e){this.iterate(i=>(e(i),!0))}toArray(){let e=[];return this.iterate(i=>(e.push(i),!0)),e}filter(e){return new Kc(i=>this.iterate(n=>e(n)?i(n):!0))}map(e){return new Kc(i=>this.iterate(n=>i(e(n))))}some(e){let i=!1;return this.iterate(n=>(i=e(n),!i)),i}findFirst(e){let i;return this.iterate(n=>e(n)?(i=n,!1):!0),i}findLast(e){let i;return this.iterate(n=>(e(n)&&(i=n),!0)),i}findLastMaxBy(e){let i,n=!0;return this.iterate(r=>((n||im.isGreaterThan(e(r,i)))&&(n=!1,i=r),!0)),i}};Gf.empty=new Gf(t=>{});function ox(t,e){let i=Object.create(null);for(let n of t){let r=e(n),s=i[r];s||(s=i[r]=[]),s.push(n)}return i}var Xf,$f,qT=class{constructor(t,e){this.toKey=e,this._map=new Map,this[Xf]="SetWithKey";for(let i of t)this.add(i)}get size(){return this._map.size}add(t){let e=this.toKey(t);return this._map.set(e,t),this}delete(t){return this._map.delete(this.toKey(t))}has(t){return this._map.has(this.toKey(t))}*entries(){for(let t of this._map.values())yield[t,t]}keys(){return this.values()}*values(){for(let t of this._map.values())yield t}clear(){this._map.clear()}forEach(t,e){this._map.forEach(i=>t.call(e,i,i,this))}[($f=Symbol.iterator,Xf=Symbol.toStringTag,$f)](){return this.values()}},ax=class{constructor(){this.map=new Map}add(t,e){let i=this.map.get(t);i||(i=new Set,this.map.set(t,i)),i.add(e)}delete(t,e){let i=this.map.get(t);i&&(i.delete(e),i.size===0&&this.map.delete(t))}forEach(t,e){let i=this.map.get(t);i&&i.forEach(e)}get(t){return this.map.get(t)||new Set}};function lx(t,e){let i=this,n=!1,r;return function(){if(n)return r;if(n=!0,e)try{r=t.apply(i,arguments)}finally{e()}else r=t.apply(i,arguments);return r}}var nm;(t=>{function e(x){return x&&typeof x=="object"&&typeof x[Symbol.iterator]=="function"}t.is=e;let i=Object.freeze([]);function n(){return i}t.empty=n;function*r(x){yield x}t.single=r;function s(x){return e(x)?x:r(x)}t.wrap=s;function o(x){return x||i}t.from=o;function*a(x){for(let E=x.length-1;E>=0;E--)yield x[E]}t.reverse=a;function h(x){return!x||x[Symbol.iterator]().next().done===!0}t.isEmpty=h;function l(x){return x[Symbol.iterator]().next().value}t.first=l;function u(x,E){let T=0;for(let A of x)if(E(A,T++))return!0;return!1}t.some=u;function c(x,E){for(let T of x)if(E(T))return T}t.find=c;function*d(x,E){for(let T of x)E(T)&&(yield T)}t.filter=d;function*f(x,E){let T=0;for(let A of x)yield E(A,T++)}t.map=f;function*m(x,E){let T=0;for(let A of x)yield*E(A,T++)}t.flatMap=m;function*g(...x){for(let E of x)yield*E}t.concat=g;function _(x,E,T){let A=T;for(let H of x)A=E(A,H);return A}t.reduce=_;function*p(x,E,T=x.length){for(E<0&&(E+=x.length),T<0?T+=x.length:T>x.length&&(T=x.length);E<T;E++)yield x[E]}t.slice=p;function b(x,E=Number.POSITIVE_INFINITY){let T=[];if(E===0)return[T,x];let A=x[Symbol.iterator]();for(let H=0;H<E;H++){let y=A.next();if(y.done)return[T,t.empty()];T.push(y.value)}return[T,{[Symbol.iterator](){return A}}]}t.consume=b;async function w(x){let E=[];for await(let T of x)E.push(T);return Promise.resolve(E)}t.asyncToArray=w})(nm||={});var hx=!1,Cr=null,cx=class rm{constructor(){this.livingDisposables=new Map}getDisposableData(e){let i=this.livingDisposables.get(e);return i||(i={parent:null,source:null,isSingleton:!1,value:e,idx:rm.idx++},this.livingDisposables.set(e,i)),i}trackDisposable(e){let i=this.getDisposableData(e);i.source||(i.source=new Error().stack)}setParent(e,i){let n=this.getDisposableData(e);n.parent=i}markAsDisposed(e){this.livingDisposables.delete(e)}markAsSingleton(e){this.getDisposableData(e).isSingleton=!0}getRootParent(e,i){let n=i.get(e);if(n)return n;let r=e.parent?this.getRootParent(this.getDisposableData(e.parent),i):e;return i.set(e,r),r}getTrackedDisposables(){let e=new Map;return[...this.livingDisposables.entries()].filter(([,i])=>i.source!==null&&!this.getRootParent(i,e).isSingleton).flatMap(([i])=>i)}computeLeakingDisposables(e=10,i){let n;if(i)n=i;else{let h=new Map,l=[...this.livingDisposables.values()].filter(c=>c.source!==null&&!this.getRootParent(c,h).isSingleton);if(l.length===0)return;let u=new Set(l.map(c=>c.value));if(n=l.filter(c=>!(c.parent&&u.has(c.parent))),n.length===0)throw new Error("There are cyclic diposable chains!")}if(!n)return;function r(h){function l(c,d){for(;c.length>0&&d.some(f=>typeof f=="string"?f===c[0]:c[0].match(f));)c.shift()}let u=h.source.split(`
`).map(c=>c.trim().replace("at ","")).filter(c=>c!=="");return l(u,["Error",/^trackDisposable \(.*\)$/,/^DisposableTracker.trackDisposable \(.*\)$/]),u.reverse()}let s=new ax;for(let h of n){let l=r(h);for(let u=0;u<=l.length;u++)s.add(l.slice(0,u).join(`
`),h)}n.sort(rx(h=>h.idx,sx));let o="",a=0;for(let h of n.slice(0,e)){a++;let l=r(h),u=[];for(let c=0;c<l.length;c++){let d=l[c];d=`(shared with ${s.get(l.slice(0,c+1).join(`
`)).size}/${n.length} leaks) at ${d}`;let f=s.get(l.slice(0,c).join(`
`)),m=ox([...f].map(g=>r(g)[c]),g=>g);delete m[l[c]];for(let[g,_]of Object.entries(m))u.unshift(`    - stacktraces of ${_.length} other leaks continue with ${g}`);u.unshift(d)}o+=`


==================== Leaking disposable ${a}/${n.length}: ${h.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`}return n.length>e&&(o+=`


... and ${n.length-e} more leaking disposables

`),{leaks:n,details:o}}};cx.idx=0;function ux(t){Cr=t}if(hx){let t="__is_disposable_tracked__";ux(new class{trackDisposable(e){let i=new Error("Potentially leaked disposable").stack;setTimeout(()=>{e[t]||console.log(i)},3e3)}setParent(e,i){if(e&&e!==ze.None)try{e[t]=!0}catch{}}markAsDisposed(e){if(e&&e!==ze.None)try{e[t]=!0}catch{}}markAsSingleton(e){}})}function Yl(t){return Cr?.trackDisposable(t),t}function Kl(t){Cr?.markAsDisposed(t)}function uo(t,e){Cr?.setParent(t,e)}function dx(t,e){if(Cr)for(let i of t)Cr.setParent(i,e)}function qf(t){return Cr?.markAsSingleton(t),t}function Er(t){if(nm.is(t)){let e=[];for(let i of t)if(i)try{i.dispose()}catch(n){e.push(n)}if(e.length===1)throw e[0];if(e.length>1)throw new AggregateError(e,"Encountered errors while disposing of store");return Array.isArray(t)?[]:t}else if(t)return t.dispose(),t}function fx(...t){let e=mt(()=>Er(t));return dx(t,e),e}function mt(t){let e=Yl({dispose:lx(()=>{Kl(e),t()})});return e}var sm=class om{constructor(){this._toDispose=new Set,this._isDisposed=!1,Yl(this)}dispose(){this._isDisposed||(Kl(this),this._isDisposed=!0,this.clear())}get isDisposed(){return this._isDisposed}clear(){if(this._toDispose.size!==0)try{Er(this._toDispose)}finally{this._toDispose.clear()}}add(e){if(!e)return e;if(e===this)throw new Error("Cannot register a disposable on itself!");return uo(e,this),this._isDisposed?om.DISABLE_DISPOSED_WARNING||console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack):this._toDispose.add(e),e}delete(e){if(e){if(e===this)throw new Error("Cannot dispose a disposable on itself!");this._toDispose.delete(e),e.dispose()}}deleteAndLeak(e){e&&this._toDispose.has(e)&&(this._toDispose.delete(e),uo(e,null))}};sm.DISABLE_DISPOSED_WARNING=!1;var Jn=sm,ze=class{constructor(){this._store=new Jn,Yl(this),uo(this._store,this)}dispose(){Kl(this),this._store.dispose()}_register(t){if(t===this)throw new Error("Cannot register a disposable on itself!");return this._store.add(t)}};ze.None=Object.freeze({dispose(){}});var cs=class{constructor(){this._isDisposed=!1,Yl(this)}get value(){return this._isDisposed?void 0:this._value}set value(t){this._isDisposed||t===this._value||(this._value?.dispose(),t&&uo(t,this),this._value=t)}clear(){this.value=void 0}dispose(){this._isDisposed=!0,Kl(this),this._value?.dispose(),this._value=void 0}clearAndLeak(){let t=this._value;return this._value=void 0,t&&uo(t,null),t}},wi=typeof window=="object"?window:globalThis,Zc=class Jc{constructor(e){this.element=e,this.next=Jc.Undefined,this.prev=Jc.Undefined}};Zc.Undefined=new Zc(void 0);var gt=Zc,Yf=class{constructor(){this._first=gt.Undefined,this._last=gt.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===gt.Undefined}clear(){let t=this._first;for(;t!==gt.Undefined;){let e=t.next;t.prev=gt.Undefined,t.next=gt.Undefined,t=e}this._first=gt.Undefined,this._last=gt.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,e){let i=new gt(t);if(this._first===gt.Undefined)this._first=i,this._last=i;else if(e){let r=this._last;this._last=i,i.prev=r,r.next=i}else{let r=this._first;this._first=i,i.next=r,r.prev=i}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(i))}}shift(){if(this._first!==gt.Undefined){let t=this._first.element;return this._remove(this._first),t}}pop(){if(this._last!==gt.Undefined){let t=this._last.element;return this._remove(this._last),t}}_remove(t){if(t.prev!==gt.Undefined&&t.next!==gt.Undefined){let e=t.prev;e.next=t.next,t.next.prev=e}else t.prev===gt.Undefined&&t.next===gt.Undefined?(this._first=gt.Undefined,this._last=gt.Undefined):t.next===gt.Undefined?(this._last=this._last.prev,this._last.next=gt.Undefined):t.prev===gt.Undefined&&(this._first=this._first.next,this._first.prev=gt.Undefined);this._size-=1}*[Symbol.iterator](){let t=this._first;for(;t!==gt.Undefined;)yield t.element,t=t.next}},px=globalThis.performance&&typeof globalThis.performance.now=="function",mx=class am{static create(e){return new am(e)}constructor(e){this._now=px&&e===!1?Date.now:globalThis.performance.now.bind(globalThis.performance),this._startTime=this._now(),this._stopTime=-1}stop(){this._stopTime=this._now()}reset(){this._startTime=this._now(),this._stopTime=-1}elapsed(){return this._stopTime!==-1?this._stopTime-this._startTime:this._now()-this._startTime}},_x=!1,Kf=!1,gx=!1,Kt;(t=>{t.None=()=>ze.None;function e(R){if(gx){let{onDidAddListener:N}=R,k=eu.create(),L=0;R.onDidAddListener=()=>{++L===2&&(console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"),k.print()),N?.()}}}function i(R,N){return d(R,()=>{},0,void 0,!0,void 0,N)}t.defer=i;function n(R){return(N,k=null,L)=>{let D=!1,O;return O=R(J=>{if(!D)return O?O.dispose():D=!0,N.call(k,J)},null,L),D&&O.dispose(),O}}t.once=n;function r(R,N,k){return u((L,D=null,O)=>R(J=>L.call(D,N(J)),null,O),k)}t.map=r;function s(R,N,k){return u((L,D=null,O)=>R(J=>{N(J),L.call(D,J)},null,O),k)}t.forEach=s;function o(R,N,k){return u((L,D=null,O)=>R(J=>N(J)&&L.call(D,J),null,O),k)}t.filter=o;function a(R){return R}t.signal=a;function h(...R){return(N,k=null,L)=>{let D=fx(...R.map(O=>O(J=>N.call(k,J))));return c(D,L)}}t.any=h;function l(R,N,k,L){let D=k;return r(R,O=>(D=N(D,O),D),L)}t.reduce=l;function u(R,N){let k,L={onWillAddFirstListener(){k=R(D.fire,D)},onDidRemoveLastListener(){k?.dispose()}};N||e(L);let D=new se(L);return N?.add(D),D.event}function c(R,N){return N instanceof Array?N.push(R):N&&N.add(R),R}function d(R,N,k=100,L=!1,D=!1,O,J){let ee,ne,Ie,Le=0,Oe,Ke={leakWarningThreshold:O,onWillAddFirstListener(){ee=R(j=>{Le++,ne=N(ne,j),L&&!Ie&&($.fire(ne),ne=void 0),Oe=()=>{let me=ne;ne=void 0,Ie=void 0,(!L||Le>1)&&$.fire(me),Le=0},typeof k=="number"?(clearTimeout(Ie),Ie=setTimeout(Oe,k)):Ie===void 0&&(Ie=0,queueMicrotask(Oe))})},onWillRemoveListener(){D&&Le>0&&Oe?.()},onDidRemoveLastListener(){Oe=void 0,ee.dispose()}};J||e(Ke);let $=new se(Ke);return J?.add($),$.event}t.debounce=d;function f(R,N=0,k){return t.debounce(R,(L,D)=>L?(L.push(D),L):[D],N,void 0,!0,void 0,k)}t.accumulate=f;function m(R,N=(L,D)=>L===D,k){let L=!0,D;return o(R,O=>{let J=L||!N(O,D);return L=!1,D=O,J},k)}t.latch=m;function g(R,N,k){return[t.filter(R,N,k),t.filter(R,L=>!N(L),k)]}t.split=g;function _(R,N=!1,k=[],L){let D=k.slice(),O=R(ne=>{D?D.push(ne):ee.fire(ne)});L&&L.add(O);let J=()=>{D?.forEach(ne=>ee.fire(ne)),D=null},ee=new se({onWillAddFirstListener(){O||(O=R(ne=>ee.fire(ne)),L&&L.add(O))},onDidAddFirstListener(){D&&(N?setTimeout(J):J())},onDidRemoveLastListener(){O&&O.dispose(),O=null}});return L&&L.add(ee),ee.event}t.buffer=_;function p(R,N){return(k,L,D)=>{let O=N(new w);return R(function(J){let ee=O.evaluate(J);ee!==b&&k.call(L,ee)},void 0,D)}}t.chain=p;let b=Symbol("HaltChainable");class w{constructor(){this.steps=[]}map(N){return this.steps.push(N),this}forEach(N){return this.steps.push(k=>(N(k),k)),this}filter(N){return this.steps.push(k=>N(k)?k:b),this}reduce(N,k){let L=k;return this.steps.push(D=>(L=N(L,D),L)),this}latch(N=(k,L)=>k===L){let k=!0,L;return this.steps.push(D=>{let O=k||!N(D,L);return k=!1,L=D,O?D:b}),this}evaluate(N){for(let k of this.steps)if(N=k(N),N===b)break;return N}}function x(R,N,k=L=>L){let L=(...ee)=>J.fire(k(...ee)),D=()=>R.on(N,L),O=()=>R.removeListener(N,L),J=new se({onWillAddFirstListener:D,onDidRemoveLastListener:O});return J.event}t.fromNodeEventEmitter=x;function E(R,N,k=L=>L){let L=(...ee)=>J.fire(k(...ee)),D=()=>R.addEventListener(N,L),O=()=>R.removeEventListener(N,L),J=new se({onWillAddFirstListener:D,onDidRemoveLastListener:O});return J.event}t.fromDOMEventEmitter=E;function T(R){return new Promise(N=>n(R)(N))}t.toPromise=T;function A(R){let N=new se;return R.then(k=>{N.fire(k)},()=>{N.fire(void 0)}).finally(()=>{N.dispose()}),N.event}t.fromPromise=A;function H(R,N){return R(k=>N.fire(k))}t.forward=H;function y(R,N,k){return N(k),R(L=>N(L))}t.runAndSubscribe=y;class M{constructor(N,k){this._observable=N,this._counter=0,this._hasChanged=!1;let L={onWillAddFirstListener:()=>{N.addObserver(this)},onDidRemoveLastListener:()=>{N.removeObserver(this)}};k||e(L),this.emitter=new se(L),k&&k.add(this.emitter)}beginUpdate(N){this._counter++}handlePossibleChange(N){}handleChange(N,k){this._hasChanged=!0}endUpdate(N){this._counter--,this._counter===0&&(this._observable.reportChanges(),this._hasChanged&&(this._hasChanged=!1,this.emitter.fire(this._observable.get())))}}function P(R,N){return new M(R,N).emitter.event}t.fromObservable=P;function X(R){return(N,k,L)=>{let D=0,O=!1,J={beginUpdate(){D++},endUpdate(){D--,D===0&&(R.reportChanges(),O&&(O=!1,N.call(k)))},handlePossibleChange(){},handleChange(){O=!0}};R.addObserver(J),R.reportChanges();let ee={dispose(){R.removeObserver(J)}};return L instanceof Jn?L.add(ee):Array.isArray(L)&&L.push(ee),ee}}t.fromObservableLight=X})(Kt||={});var jc=class Qc{constructor(e){this.listenerCount=0,this.invocationCount=0,this.elapsedOverall=0,this.durations=[],this.name=`${e}_${Qc._idPool++}`,Qc.all.add(this)}start(e){this._stopWatch=new mx,this.listenerCount=e}stop(){if(this._stopWatch){let e=this._stopWatch.elapsed();this.durations.push(e),this.elapsedOverall+=e,this.invocationCount+=1,this._stopWatch=void 0}}};jc.all=new Set,jc._idPool=0;var vx=jc,Zf=-1,lm=class hm{constructor(e,i,n=(hm._idPool++).toString(16).padStart(3,"0")){this._errorHandler=e,this.threshold=i,this.name=n,this._warnCountdown=0}dispose(){this._stacks?.clear()}check(e,i){let n=this.threshold;if(n<=0||i<n)return;this._stacks||(this._stacks=new Map);let r=this._stacks.get(e.value)||0;if(this._stacks.set(e.value,r+1),this._warnCountdown-=1,this._warnCountdown<=0){this._warnCountdown=n*.5;let[s,o]=this.getMostFrequentStack(),a=`[${this.name}] potential listener LEAK detected, having ${i} listeners already. MOST frequent listener (${o}):`;console.warn(a),console.warn(s);let h=new yx(a,s);this._errorHandler(h)}return()=>{let s=this._stacks.get(e.value)||0;this._stacks.set(e.value,s-1)}}getMostFrequentStack(){if(!this._stacks)return;let e,i=0;for(let[n,r]of this._stacks)(!e||i<r)&&(e=[n,r],i=r);return e}};lm._idPool=1;var Sx=lm,eu=class cm{constructor(e){this.value=e}static create(){let e=new Error;return new cm(e.stack??"")}print(){console.warn(this.value.split(`
`).slice(2).join(`
`))}},yx=class extends Error{constructor(t,e){super(t),this.name="ListenerLeakError",this.stack=e}},xx=class extends Error{constructor(t,e){super(t),this.name="ListenerRefusalError",this.stack=e}},bx=0,Al=class{constructor(t){this.value=t,this.id=bx++}},wx=2,Mx=(t,e)=>{if(t instanceof Al)e(t);else for(let i=0;i<t.length;i++){let n=t[i];n&&e(n)}},Rl;if(_x){let t=[];setInterval(()=>{t.length!==0&&(console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),console.warn(t.join(`
`)),t.length=0)},3e3),Rl=new FinalizationRegistry(e=>{typeof e=="string"&&t.push(e)})}var se=class{constructor(t){this._size=0,this._options=t,this._leakageMon=Zf>0||this._options?.leakWarningThreshold?new Sx(t?.onListenerError??Tl,this._options?.leakWarningThreshold??Zf):void 0,this._perfMon=this._options?._profName?new vx(this._options._profName):void 0,this._deliveryQueue=this._options?.deliveryQueue}dispose(){if(!this._disposed){if(this._disposed=!0,this._deliveryQueue?.current===this&&this._deliveryQueue.reset(),this._listeners){if(Kf){let t=this._listeners;queueMicrotask(()=>{Mx(t,e=>e.stack?.print())})}this._listeners=void 0,this._size=0}this._options?.onDidRemoveLastListener?.(),this._leakageMon?.dispose()}}get event(){return this._event??=(t,e,i)=>{if(this._leakageMon&&this._size>this._leakageMon.threshold**2){let a=`[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;console.warn(a);let h=this._leakageMon.getMostFrequentStack()??["UNKNOWN stack",-1],l=new xx(`${a}. HINT: Stack shows most frequent listener (${h[1]}-times)`,h[0]);return(this._options?.onListenerError||Tl)(l),ze.None}if(this._disposed)return ze.None;e&&(t=t.bind(e));let n=new Al(t),r,s;this._leakageMon&&this._size>=Math.ceil(this._leakageMon.threshold*.2)&&(n.stack=eu.create(),r=this._leakageMon.check(n.stack,this._size+1)),Kf&&(n.stack=s??eu.create()),this._listeners?this._listeners instanceof Al?(this._deliveryQueue??=new Cx,this._listeners=[this._listeners,n]):this._listeners.push(n):(this._options?.onWillAddFirstListener?.(this),this._listeners=n,this._options?.onDidAddFirstListener?.(this)),this._size++;let o=mt(()=>{Rl?.unregister(o),r?.(),this._removeListener(n)});if(i instanceof Jn?i.add(o):Array.isArray(i)&&i.push(o),Rl){let a=new Error().stack.split(`
`).slice(2,3).join(`
`).trim(),h=/(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(a);Rl.register(o,h?.[2]??a,o)}return o},this._event}_removeListener(t){if(this._options?.onWillRemoveListener?.(this),!this._listeners)return;if(this._size===1){this._listeners=void 0,this._options?.onDidRemoveLastListener?.(this),this._size=0;return}let e=this._listeners,i=e.indexOf(t);if(i===-1)throw console.log("disposed?",this._disposed),console.log("size?",this._size),console.log("arr?",JSON.stringify(this._listeners)),new Error("Attempted to dispose unknown listener");this._size--,e[i]=void 0;let n=this._deliveryQueue.current===this;if(this._size*wx<=e.length){let r=0;for(let s=0;s<e.length;s++)e[s]?e[r++]=e[s]:n&&(this._deliveryQueue.end--,r<this._deliveryQueue.i&&this._deliveryQueue.i--);e.length=r}}_deliver(t,e){if(!t)return;let i=this._options?.onListenerError||Tl;if(!i){t.value(e);return}try{t.value(e)}catch(n){i(n)}}_deliverQueue(t){let e=t.current._listeners;for(;t.i<t.end;)this._deliver(e[t.i++],t.value);t.reset()}fire(t){if(this._deliveryQueue?.current&&(this._deliverQueue(this._deliveryQueue),this._perfMon?.stop()),this._perfMon?.start(this._size),this._listeners)if(this._listeners instanceof Al)this._deliver(this._listeners,t);else{let e=this._deliveryQueue;e.enqueue(this,t,this._listeners.length),this._deliverQueue(e)}this._perfMon?.stop()}hasListeners(){return this._size>0}},Cx=class{constructor(){this.i=-1,this.end=0}enqueue(t,e,i){this.i=0,this.end=i,this.current=t,this.value=e}reset(){this.i=this.end,this.current=void 0,this.value=void 0}},tu=class{constructor(){this.mapWindowIdToZoomLevel=new Map,this._onDidChangeZoomLevel=new se,this.onDidChangeZoomLevel=this._onDidChangeZoomLevel.event,this.mapWindowIdToZoomFactor=new Map,this._onDidChangeFullscreen=new se,this.onDidChangeFullscreen=this._onDidChangeFullscreen.event,this.mapWindowIdToFullScreen=new Map}getZoomLevel(e){return this.mapWindowIdToZoomLevel.get(this.getWindowId(e))??0}setZoomLevel(e,i){if(this.getZoomLevel(i)===e)return;let n=this.getWindowId(i);this.mapWindowIdToZoomLevel.set(n,e),this._onDidChangeZoomLevel.fire(n)}getZoomFactor(e){return this.mapWindowIdToZoomFactor.get(this.getWindowId(e))??1}setZoomFactor(e,i){this.mapWindowIdToZoomFactor.set(this.getWindowId(i),e)}setFullscreen(e,i){if(this.isFullscreen(i)===e)return;let n=this.getWindowId(i);this.mapWindowIdToFullScreen.set(n,e),this._onDidChangeFullscreen.fire(n)}isFullscreen(e){return!!this.mapWindowIdToFullScreen.get(this.getWindowId(e))}getWindowId(e){return e.vscodeWindowId}};tu.INSTANCE=new tu;var Au=tu;function Ex(t,e,i){typeof e=="string"&&(e=t.matchMedia(e)),e.addEventListener("change",i)}var KT=Au.INSTANCE.onDidChangeZoomLevel;function Tx(t){return Au.INSTANCE.getZoomFactor(t)}var ZT=Au.INSTANCE.onDidChangeFullscreen,ds=typeof navigator=="object"?navigator.userAgent:"",iu=ds.indexOf("Firefox")>=0,Pl=ds.indexOf("AppleWebKit")>=0,Ru=ds.indexOf("Chrome")>=0,um=!Ru&&ds.indexOf("Safari")>=0,JT=ds.indexOf("Electron/")>=0,jT=ds.indexOf("Android")>=0,Il=!1;if(typeof wi.matchMedia=="function"){let t=wi.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"),e=wi.matchMedia("(display-mode: fullscreen)");Il=t.matches,Ex(wi,t,({matches:i})=>{Il&&e.matches||(Il=i)})}function Ax(){return Il}var hs="en",Ol=!1,Ul=!1,ho=!1,Rx=!1,dm=!1,fm=!1,Px=!1,Ix=!1,Lx=!1,Dx=!1,bl,Ll=hs,Jf=hs,Nx,bn,Mn=globalThis,bi;typeof Mn.vscode<"u"&&typeof Mn.vscode.process<"u"?bi=Mn.vscode.process:typeof process<"u"&&typeof process?.versions?.node=="string"&&(bi=process);var pm=typeof bi?.versions?.electron=="string",Bx=pm&&bi?.type==="renderer";if(typeof bi=="object"){Ol=bi.platform==="win32",Ul=bi.platform==="darwin",ho=bi.platform==="linux",Rx=ho&&!!bi.env.SNAP&&!!bi.env.SNAP_REVISION,Px=pm,Lx=!!bi.env.CI||!!bi.env.BUILD_ARTIFACTSTAGINGDIRECTORY,bl=hs,Ll=hs;let t=bi.env.VSCODE_NLS_CONFIG;if(t)try{let e=JSON.parse(t);bl=e.userLocale,Jf=e.osLocale,Ll=e.resolvedLanguage||hs,Nx=e.languagePack?.translationsConfigFile}catch{}dm=!0}else typeof navigator=="object"&&!Bx?(bn=navigator.userAgent,Ol=bn.indexOf("Windows")>=0,Ul=bn.indexOf("Macintosh")>=0,Ix=(bn.indexOf("Macintosh")>=0||bn.indexOf("iPad")>=0||bn.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0,ho=bn.indexOf("Linux")>=0,Dx=bn?.indexOf("Mobi")>=0,fm=!0,Ll=globalThis._VSCODE_NLS_LANGUAGE||hs,bl=navigator.language.toLowerCase(),Jf=bl):console.error("Unable to resolve platform.");var Tc=0;Ul?Tc=1:Ol?Tc=3:ho&&(Tc=2);var mm=Ol,sn=Ul,kx=ho,Ac=dm,Fx=fm&&typeof Mn.importScripts=="function",QT=Fx?Mn.origin:void 0,on=bn,Xn=Ll,Ox;(t=>{function e(){return Xn}t.value=e;function i(){return Xn.length===2?Xn==="en":Xn.length>=3?Xn[0]==="e"&&Xn[1]==="n"&&Xn[2]==="-":!1}t.isDefaultVariant=i;function n(){return Xn==="en"}t.isDefault=n})(Ox||={});var Ux=typeof Mn.postMessage=="function"&&!Mn.importScripts,zx=(()=>{if(Ux){let t=[];Mn.addEventListener("message",i=>{if(i.data&&i.data.vscodeScheduleAsyncWork)for(let n=0,r=t.length;n<r;n++){let s=t[n];if(s.id===i.data.vscodeScheduleAsyncWork){t.splice(n,1),s.callback();return}}});let e=0;return i=>{let n=++e;t.push({id:n,callback:i}),Mn.postMessage({vscodeScheduleAsyncWork:n},"*")}}return t=>setTimeout(t)})(),Hx=!!(on&&on.indexOf("Chrome")>=0),eA=!!(on&&on.indexOf("Firefox")>=0),tA=!!(!Hx&&on&&on.indexOf("Safari")>=0),iA=!!(on&&on.indexOf("Edg/")>=0),nA=!!(on&&on.indexOf("Android")>=0),$n=typeof navigator=="object"?navigator:{},rA={clipboard:{writeText:Ac||document.queryCommandSupported&&document.queryCommandSupported("copy")||!!($n&&$n.clipboard&&$n.clipboard.writeText),readText:Ac||!!($n&&$n.clipboard&&$n.clipboard.readText)},keyboard:Ac||Ax()?0:$n.keyboard||um?1:2,touch:"ontouchstart"in wi||$n.maxTouchPoints>0,pointerEvents:wi.PointerEvent&&("ontouchstart"in wi||navigator.maxTouchPoints>0)},Pu=class{constructor(){this._keyCodeToStr=[],this._strToKeyCode=Object.create(null)}define(t,e){this._keyCodeToStr[t]=e,this._strToKeyCode[e.toLowerCase()]=t}keyCodeToStr(t){return this._keyCodeToStr[t]}strToKeyCode(t){return this._strToKeyCode[t.toLowerCase()]||0}},Rc=new Pu,jf=new Pu,Qf=new Pu,Vx=new Array(230),_m;(t=>{function e(a){return Rc.keyCodeToStr(a)}t.toString=e;function i(a){return Rc.strToKeyCode(a)}t.fromString=i;function n(a){return jf.keyCodeToStr(a)}t.toUserSettingsUS=n;function r(a){return Qf.keyCodeToStr(a)}t.toUserSettingsGeneral=r;function s(a){return jf.strToKeyCode(a)||Qf.strToKeyCode(a)}t.fromUserSettings=s;function o(a){if(a>=98&&a<=113)return null;switch(a){case 16:return"Up";case 18:return"Down";case 15:return"Left";case 17:return"Right"}return Rc.keyCodeToStr(a)}t.toElectronAccelerator=o})(_m||={});var Wx=class gm{constructor(e,i,n,r,s){this.ctrlKey=e,this.shiftKey=i,this.altKey=n,this.metaKey=r,this.keyCode=s}equals(e){return e instanceof gm&&this.ctrlKey===e.ctrlKey&&this.shiftKey===e.shiftKey&&this.altKey===e.altKey&&this.metaKey===e.metaKey&&this.keyCode===e.keyCode}getHashCode(){let e=this.ctrlKey?"1":"0",i=this.shiftKey?"1":"0",n=this.altKey?"1":"0",r=this.metaKey?"1":"0";return`K${e}${i}${n}${r}${this.keyCode}`}isModifierKey(){return this.keyCode===0||this.keyCode===5||this.keyCode===57||this.keyCode===6||this.keyCode===4}toKeybinding(){return new Gx([this])}isDuplicateModifierCase(){return this.ctrlKey&&this.keyCode===5||this.shiftKey&&this.keyCode===4||this.altKey&&this.keyCode===6||this.metaKey&&this.keyCode===57}},Gx=class{constructor(t){if(t.length===0)throw tx("chords");this.chords=t}getHashCode(){let t="";for(let e=0,i=this.chords.length;e<i;e++)e!==0&&(t+=";"),t+=this.chords[e].getHashCode();return t}equals(t){if(t===null||this.chords.length!==t.chords.length)return!1;for(let e=0;e<this.chords.length;e++)if(!this.chords[e].equals(t.chords[e]))return!1;return!0}};function Xx(t){if(t.charCode){let i=String.fromCharCode(t.charCode).toUpperCase();return _m.fromString(i)}let e=t.keyCode;if(e===3)return 7;if(iu)switch(e){case 59:return 85;case 60:if(kx)return 97;break;case 61:return 86;case 107:return 109;case 109:return 111;case 173:return 88;case 224:if(sn)return 57;break}else if(Pl&&(sn&&e===93||!sn&&e===92))return 57;return Vx[e]||0}var $x=sn?256:2048,qx=512,Yx=1024,Kx=sn?2048:256,nu=class{constructor(t){this._standardKeyboardEventBrand=!0;let e=t;this.browserEvent=e,this.target=e.target,this.ctrlKey=e.ctrlKey,this.shiftKey=e.shiftKey,this.altKey=e.altKey,this.metaKey=e.metaKey,this.altGraphKey=e.getModifierState?.("AltGraph"),this.keyCode=Xx(e),this.code=e.code,this.ctrlKey=this.ctrlKey||this.keyCode===5,this.altKey=this.altKey||this.keyCode===6,this.shiftKey=this.shiftKey||this.keyCode===4,this.metaKey=this.metaKey||this.keyCode===57,this._asKeybinding=this._computeKeybinding(),this._asKeyCodeChord=this._computeKeyCodeChord()}preventDefault(){this.browserEvent&&this.browserEvent.preventDefault&&this.browserEvent.preventDefault()}stopPropagation(){this.browserEvent&&this.browserEvent.stopPropagation&&this.browserEvent.stopPropagation()}toKeyCodeChord(){return this._asKeyCodeChord}equals(t){return this._asKeybinding===t}_computeKeybinding(){let t=0;this.keyCode!==5&&this.keyCode!==4&&this.keyCode!==6&&this.keyCode!==57&&(t=this.keyCode);let e=0;return this.ctrlKey&&(e|=$x),this.altKey&&(e|=qx),this.shiftKey&&(e|=Yx),this.metaKey&&(e|=Kx),e|=t,e}_computeKeyCodeChord(){let t=0;return this.keyCode!==5&&this.keyCode!==4&&this.keyCode!==6&&this.keyCode!==57&&(t=this.keyCode),new Wx(this.ctrlKey,this.shiftKey,this.altKey,this.metaKey,t)}},ep=new WeakMap;function Zx(t){if(!t.parent||t.parent===t)return null;try{let e=t.location,i=t.parent.location;if(e.origin!=="null"&&i.origin!=="null"&&e.origin!==i.origin)return null}catch{return null}return t.parent}var Jx=class{static getSameOriginWindowChain(t){let e=ep.get(t);if(!e){e=[],ep.set(t,e);let i=t,n;do n=Zx(i),n?e.push({window:new WeakRef(i),iframeElement:i.frameElement||null}):e.push({window:new WeakRef(i),iframeElement:null}),i=n;while(i)}return e.slice(0)}static getPositionOfChildWindowRelativeToAncestorWindow(t,e){if(!e||t===e)return{top:0,left:0};let i=0,n=0,r=this.getSameOriginWindowChain(t);for(let s of r){let o=s.window.deref();if(i+=o?.scrollY??0,n+=o?.scrollX??0,o===e||!s.iframeElement)break;let a=s.iframeElement.getBoundingClientRect();i+=a.top,n+=a.left}return{top:i,left:n}}},no=class{constructor(t,e){this.timestamp=Date.now(),this.browserEvent=e,this.leftButton=e.button===0,this.middleButton=e.button===1,this.rightButton=e.button===2,this.buttons=e.buttons,this.target=e.target,this.detail=e.detail||1,e.type==="dblclick"&&(this.detail=2),this.ctrlKey=e.ctrlKey,this.shiftKey=e.shiftKey,this.altKey=e.altKey,this.metaKey=e.metaKey,typeof e.pageX=="number"?(this.posx=e.pageX,this.posy=e.pageY):(this.posx=e.clientX+this.target.ownerDocument.body.scrollLeft+this.target.ownerDocument.documentElement.scrollLeft,this.posy=e.clientY+this.target.ownerDocument.body.scrollTop+this.target.ownerDocument.documentElement.scrollTop);let i=Jx.getPositionOfChildWindowRelativeToAncestorWindow(t,e.view);this.posx-=i.left,this.posy-=i.top}preventDefault(){this.browserEvent.preventDefault()}stopPropagation(){this.browserEvent.stopPropagation()}},tp=class{constructor(t,e=0,i=0){this.browserEvent=t||null,this.target=t?t.target||t.targetNode||t.srcElement:null,this.deltaY=i,this.deltaX=e;let n=!1;if(Ru){let r=navigator.userAgent.match(/Chrome\/(\d+)/);n=(r?parseInt(r[1]):123)<=122}if(t){let r=t,s=t,o=t.view?.devicePixelRatio||1;if(typeof r.wheelDeltaY<"u")n?this.deltaY=r.wheelDeltaY/(120*o):this.deltaY=r.wheelDeltaY/120;else if(typeof s.VERTICAL_AXIS<"u"&&s.axis===s.VERTICAL_AXIS)this.deltaY=-s.detail/3;else if(t.type==="wheel"){let a=t;a.deltaMode===a.DOM_DELTA_LINE?iu&&!sn?this.deltaY=-t.deltaY/3:this.deltaY=-t.deltaY:this.deltaY=-t.deltaY/40}if(typeof r.wheelDeltaX<"u")um&&mm?this.deltaX=-(r.wheelDeltaX/120):n?this.deltaX=r.wheelDeltaX/(120*o):this.deltaX=r.wheelDeltaX/120;else if(typeof s.HORIZONTAL_AXIS<"u"&&s.axis===s.HORIZONTAL_AXIS)this.deltaX=-t.detail/3;else if(t.type==="wheel"){let a=t;a.deltaMode===a.DOM_DELTA_LINE?iu&&!sn?this.deltaX=-t.deltaX/3:this.deltaX=-t.deltaX:this.deltaX=-t.deltaX/40}this.deltaY===0&&this.deltaX===0&&t.wheelDelta&&(n?this.deltaY=t.wheelDelta/(120*o):this.deltaY=t.wheelDelta/120)}}preventDefault(){this.browserEvent?.preventDefault()}stopPropagation(){this.browserEvent?.stopPropagation()}},vm=Object.freeze(function(t,e){let i=setTimeout(t.bind(e),0);return{dispose(){clearTimeout(i)}}}),jx;(t=>{function e(i){return i===t.None||i===t.Cancelled||i instanceof Qx?!0:!i||typeof i!="object"?!1:typeof i.isCancellationRequested=="boolean"&&typeof i.onCancellationRequested=="function"}t.isCancellationToken=e,t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Kt.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:vm})})(jx||={});var Qx=class{constructor(){this._isCancelled=!1,this._emitter=null}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?vm:(this._emitter||(this._emitter=new se),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=null)}};var Iu=class{constructor(t,e){this._isDisposed=!1,this._token=-1,typeof t=="function"&&typeof e=="number"&&this.setIfNotSet(t,e)}dispose(){this.cancel(),this._isDisposed=!0}cancel(){this._token!==-1&&(clearTimeout(this._token),this._token=-1)}cancelAndSet(t,e){if(this._isDisposed)throw new Yc("Calling 'cancelAndSet' on a disposed TimeoutTimer");this.cancel(),this._token=setTimeout(()=>{this._token=-1,t()},e)}setIfNotSet(t,e){if(this._isDisposed)throw new Yc("Calling 'setIfNotSet' on a disposed TimeoutTimer");this._token===-1&&(this._token=setTimeout(()=>{this._token=-1,t()},e))}},eb=class{constructor(){this.disposable=void 0,this.isDisposed=!1}cancel(){this.disposable?.dispose(),this.disposable=void 0}cancelAndSet(t,e,i=globalThis){if(this.isDisposed)throw new Yc("Calling 'cancelAndSet' on a disposed IntervalTimer");this.cancel();let n=i.setInterval(()=>{t()},e);this.disposable=mt(()=>{i.clearInterval(n),this.disposable=void 0})}dispose(){this.cancel(),this.isDisposed=!0}},tb,Pc;(function(){typeof globalThis.requestIdleCallback!="function"||typeof globalThis.cancelIdleCallback!="function"?Pc=(t,e)=>{zx(()=>{if(i)return;let n=Date.now()+15;e(Object.freeze({didTimeout:!0,timeRemaining(){return Math.max(0,n-Date.now())}}))});let i=!1;return{dispose(){i||(i=!0)}}}:Pc=(t,e,i)=>{let n=t.requestIdleCallback(e,typeof i=="number"?{timeout:i}:void 0),r=!1;return{dispose(){r||(r=!0,t.cancelIdleCallback(n))}}},tb=t=>Pc(globalThis,t)})();var ib;(t=>{async function e(n){let r,s=await Promise.all(n.map(o=>o.then(a=>a,a=>{r||(r=a)})));if(typeof r<"u")throw r;return s}t.settled=e;function i(n){return new Promise(async(r,s)=>{try{await n(r,s)}catch(o){s(o)}})}t.withAsyncBody=i})(ib||={});var ip=class Ri{static fromArray(e){return new Ri(i=>{i.emitMany(e)})}static fromPromise(e){return new Ri(async i=>{i.emitMany(await e)})}static fromPromises(e){return new Ri(async i=>{await Promise.all(e.map(async n=>i.emitOne(await n)))})}static merge(e){return new Ri(async i=>{await Promise.all(e.map(async n=>{for await(let r of n)i.emitOne(r)}))})}constructor(e,i){this._state=0,this._results=[],this._error=null,this._onReturn=i,this._onStateChanged=new se,queueMicrotask(async()=>{let n={emitOne:r=>this.emitOne(r),emitMany:r=>this.emitMany(r),reject:r=>this.reject(r)};try{await Promise.resolve(e(n)),this.resolve()}catch(r){this.reject(r)}finally{n.emitOne=void 0,n.emitMany=void 0,n.reject=void 0}})}[Symbol.asyncIterator](){let e=0;return{next:async()=>{do{if(this._state===2)throw this._error;if(e<this._results.length)return{done:!1,value:this._results[e++]};if(this._state===1)return{done:!0,value:void 0};await Kt.toPromise(this._onStateChanged.event)}while(!0)},return:async()=>(this._onReturn?.(),{done:!0,value:void 0})}}static map(e,i){return new Ri(async n=>{for await(let r of e)n.emitOne(i(r))})}map(e){return Ri.map(this,e)}static filter(e,i){return new Ri(async n=>{for await(let r of e)i(r)&&n.emitOne(r)})}filter(e){return Ri.filter(this,e)}static coalesce(e){return Ri.filter(e,i=>!!i)}coalesce(){return Ri.coalesce(this)}static async toPromise(e){let i=[];for await(let n of e)i.push(n);return i}toPromise(){return Ri.toPromise(this)}emitOne(e){this._state===0&&(this._results.push(e),this._onStateChanged.fire())}emitMany(e){this._state===0&&(this._results=this._results.concat(e),this._onStateChanged.fire())}resolve(){this._state===0&&(this._state=1,this._onStateChanged.fire())}reject(e){this._state===0&&(this._state=2,this._error=e,this._onStateChanged.fire())}};ip.EMPTY=ip.fromArray([]);function nb(t){return 55296<=t&&t<=56319}function np(t){return 56320<=t&&t<=57343}function rb(t,e){return(t-55296<<10)+(e-56320)+65536}function sb(t){return Lu(t,0)}function Lu(t,e){switch(typeof t){case"object":return t===null?wn(349,e):Array.isArray(t)?ab(t,e):lb(t,e);case"string":return Sm(t,e);case"boolean":return ob(t,e);case"number":return wn(t,e);case"undefined":return wn(937,e);default:return wn(617,e)}}function wn(t,e){return(e<<5)-e+t|0}function ob(t,e){return wn(t?433:863,e)}function Sm(t,e){e=wn(149417,e);for(let i=0,n=t.length;i<n;i++)e=wn(t.charCodeAt(i),e);return e}function ab(t,e){return e=wn(104579,e),t.reduce((i,n)=>Lu(n,i),e)}function lb(t,e){return e=wn(181387,e),Object.keys(t).sort().reduce((i,n)=>(i=Sm(n,i),Lu(t[n],i)),e)}function Ic(t,e,i=32){let n=i-e,r=~((1<<n)-1);return(t<<e|(r&t)>>>n)>>>0}function rp(t,e=0,i=t.byteLength,n=0){for(let r=0;r<i;r++)t[e+r]=n}function hb(t,e,i="0"){for(;t.length<e;)t=i+t;return t}function Zs(t,e=32){return t instanceof ArrayBuffer?Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join(""):hb((t>>>0).toString(16),e/4)}var cb=class ym{constructor(){this._h0=1732584193,this._h1=4023233417,this._h2=2562383102,this._h3=271733878,this._h4=3285377520,this._buff=new Uint8Array(67),this._buffDV=new DataView(this._buff.buffer),this._buffLen=0,this._totalLen=0,this._leftoverHighSurrogate=0,this._finished=!1}update(e){let i=e.length;if(i===0)return;let n=this._buff,r=this._buffLen,s=this._leftoverHighSurrogate,o,a;for(s!==0?(o=s,a=-1,s=0):(o=e.charCodeAt(0),a=0);;){let h=o;if(nb(o))if(a+1<i){let l=e.charCodeAt(a+1);np(l)?(a++,h=rb(o,l)):h=65533}else{s=o;break}else np(o)&&(h=65533);if(r=this._push(n,r,h),a++,a<i)o=e.charCodeAt(a);else break}this._buffLen=r,this._leftoverHighSurrogate=s}_push(e,i,n){return n<128?e[i++]=n:n<2048?(e[i++]=192|(n&1984)>>>6,e[i++]=128|(n&63)>>>0):n<65536?(e[i++]=224|(n&61440)>>>12,e[i++]=128|(n&4032)>>>6,e[i++]=128|(n&63)>>>0):(e[i++]=240|(n&1835008)>>>18,e[i++]=128|(n&258048)>>>12,e[i++]=128|(n&4032)>>>6,e[i++]=128|(n&63)>>>0),i>=64&&(this._step(),i-=64,this._totalLen+=64,e[0]=e[64],e[1]=e[65],e[2]=e[66]),i}digest(){return this._finished||(this._finished=!0,this._leftoverHighSurrogate&&(this._leftoverHighSurrogate=0,this._buffLen=this._push(this._buff,this._buffLen,65533)),this._totalLen+=this._buffLen,this._wrapUp()),Zs(this._h0)+Zs(this._h1)+Zs(this._h2)+Zs(this._h3)+Zs(this._h4)}_wrapUp(){this._buff[this._buffLen++]=128,rp(this._buff,this._buffLen),this._buffLen>56&&(this._step(),rp(this._buff));let e=8*this._totalLen;this._buffDV.setUint32(56,Math.floor(e/4294967296),!1),this._buffDV.setUint32(60,e%4294967296,!1),this._step()}_step(){let e=ym._bigBlock32,i=this._buffDV;for(let c=0;c<64;c+=4)e.setUint32(c,i.getUint32(c,!1),!1);for(let c=64;c<320;c+=4)e.setUint32(c,Ic(e.getUint32(c-12,!1)^e.getUint32(c-32,!1)^e.getUint32(c-56,!1)^e.getUint32(c-64,!1),1),!1);let n=this._h0,r=this._h1,s=this._h2,o=this._h3,a=this._h4,h,l,u;for(let c=0;c<80;c++)c<20?(h=r&s|~r&o,l=1518500249):c<40?(h=r^s^o,l=1859775393):c<60?(h=r&s|r&o|s&o,l=2400959708):(h=r^s^o,l=3395469782),u=Ic(n,5)+h+a+l+e.getUint32(c*4,!1)&4294967295,a=o,o=s,s=Ic(r,30),r=n,n=u;this._h0=this._h0+n&4294967295,this._h1=this._h1+r&4294967295,this._h2=this._h2+s&4294967295,this._h3=this._h3+o&4294967295,this._h4=this._h4+a&4294967295}};cb._bigBlock32=new DataView(new ArrayBuffer(320));var{registerWindow:sA,getWindow:zi,getDocument:oA,getWindows:aA,getWindowsCount:lA,getWindowId:sp,getWindowById:hA,hasWindow:cA,onDidRegisterWindow:ub,onWillUnregisterWindow:uA,onDidUnregisterWindow:dA}=(function(){let t=new Map,e={window:wi,disposables:new Jn};t.set(wi.vscodeWindowId,e);let i=new se,n=new se,r=new se;function s(o,a){return(typeof o=="number"?t.get(o):void 0)??(a?e:void 0)}return{onDidRegisterWindow:i.event,onWillUnregisterWindow:r.event,onDidUnregisterWindow:n.event,registerWindow(o){if(t.has(o.vscodeWindowId))return ze.None;let a=new Jn,h={window:o,disposables:a.add(new Jn)};return t.set(o.vscodeWindowId,h),a.add(mt(()=>{t.delete(o.vscodeWindowId),n.fire(o)})),a.add(ke(o,Ut.BEFORE_UNLOAD,()=>{r.fire(o)})),i.fire(h),a},getWindows(){return t.values()},getWindowsCount(){return t.size},getWindowId(o){return o.vscodeWindowId},hasWindow(o){return t.has(o)},getWindowById:s,getWindow(o){let a=o;if(a?.ownerDocument?.defaultView)return a.ownerDocument.defaultView.window;let h=o;return h?.view?h.view.window:wi},getDocument(o){return zi(o).document}}})(),db=class{constructor(t,e,i,n){this._node=t,this._type=e,this._handler=i,this._options=n||!1,this._node.addEventListener(this._type,this._handler,this._options)}dispose(){this._handler&&(this._node.removeEventListener(this._type,this._handler,this._options),this._node=null,this._handler=null)}};function ke(t,e,i,n){return new db(t,e,i,n)}function fb(t,e){return function(i){return e(new no(t,i))}}function pb(t){return function(e){return t(new nu(e))}}var op=function(t,e,i,n){let r=i;return e==="click"||e==="mousedown"||e==="contextmenu"?r=fb(zi(t),i):(e==="keydown"||e==="keypress"||e==="keyup")&&(r=pb(i)),ke(t,e,r,n)},mb,zl,_b=class extends eb{constructor(t){super(),this.defaultTarget=t&&zi(t)}cancelAndSet(t,e,i){return super.cancelAndSet(t,e,i??this.defaultTarget)}},Lc=class{constructor(t,e=0){this._runner=t,this.priority=e,this._canceled=!1}dispose(){this._canceled=!0}execute(){if(!this._canceled)try{this._runner()}catch(t){Tl(t)}}static sort(t,e){return e.priority-t.priority}};(function(){let t=new Map,e=new Map,i=new Map,n=new Map,r=s=>{i.set(s,!1);let o=t.get(s)??[];for(e.set(s,o),t.set(s,[]),n.set(s,!0);o.length>0;)o.sort(Lc.sort),o.shift().execute();n.set(s,!1)};zl=(s,o,a=0)=>{let h=sp(s),l=new Lc(o,a),u=t.get(h);return u||(u=[],t.set(h,u)),u.push(l),i.get(h)||(i.set(h,!0),s.requestAnimationFrame(()=>r(h))),l},mb=(s,o,a)=>{let h=sp(s);if(n.get(h)){let l=new Lc(o,a),u=e.get(h);return u||(u=[],e.set(h,u)),u.push(l),l}else return zl(s,o,a)}})();var ap=class Dl{constructor(e,i){this.width=e,this.height=i}with(e=this.width,i=this.height){return e!==this.width||i!==this.height?new Dl(e,i):this}static is(e){return typeof e=="object"&&typeof e.height=="number"&&typeof e.width=="number"}static lift(e){return e instanceof Dl?e:new Dl(e.width,e.height)}static equals(e,i){return e===i?!0:!e||!i?!1:e.width===i.width&&e.height===i.height}};ap.None=new ap(0,0);function gb(t){let e=t.getBoundingClientRect(),i=zi(t);return{left:e.left+i.scrollX,top:e.top+i.scrollY,width:e.width,height:e.height}}var fA=new class{constructor(){this.mutationObservers=new Map}observe(t,e,i){let n=this.mutationObservers.get(t);n||(n=new Map,this.mutationObservers.set(t,n));let r=sb(i),s=n.get(r);if(s)s.users+=1;else{let o=new se,a=new MutationObserver(l=>o.fire(l));a.observe(t,i);let h=s={users:1,observer:a,onDidMutate:o.event};e.add(mt(()=>{h.users-=1,h.users===0&&(o.dispose(),a.disconnect(),n?.delete(r),n?.size===0&&this.mutationObservers.delete(t))})),n.set(r,s)}return s.onDidMutate}},Ut={CLICK:"click",AUXCLICK:"auxclick",DBLCLICK:"dblclick",MOUSE_UP:"mouseup",MOUSE_DOWN:"mousedown",MOUSE_OVER:"mouseover",MOUSE_MOVE:"mousemove",MOUSE_OUT:"mouseout",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",MOUSE_WHEEL:"wheel",POINTER_UP:"pointerup",POINTER_DOWN:"pointerdown",POINTER_MOVE:"pointermove",POINTER_LEAVE:"pointerleave",CONTEXT_MENU:"contextmenu",WHEEL:"wheel",KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup",LOAD:"load",BEFORE_UNLOAD:"beforeunload",UNLOAD:"unload",PAGE_SHOW:"pageshow",PAGE_HIDE:"pagehide",PASTE:"paste",ABORT:"abort",ERROR:"error",RESIZE:"resize",SCROLL:"scroll",FULLSCREEN_CHANGE:"fullscreenchange",WK_FULLSCREEN_CHANGE:"webkitfullscreenchange",SELECT:"select",CHANGE:"change",SUBMIT:"submit",RESET:"reset",FOCUS:"focus",FOCUS_IN:"focusin",FOCUS_OUT:"focusout",BLUR:"blur",INPUT:"input",STORAGE:"storage",DRAG_START:"dragstart",DRAG:"drag",DRAG_ENTER:"dragenter",DRAG_LEAVE:"dragleave",DRAG_OVER:"dragover",DROP:"drop",DRAG_END:"dragend",ANIMATION_START:Pl?"webkitAnimationStart":"animationstart",ANIMATION_END:Pl?"webkitAnimationEnd":"animationend",ANIMATION_ITERATION:Pl?"webkitAnimationIteration":"animationiteration"},vb=/([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;function xm(t,e,i,...n){let r=vb.exec(e);if(!r)throw new Error("Bad use of emmet");let s=r[1]||"div",o;return t!=="http://www.w3.org/1999/xhtml"?o=document.createElementNS(t,s):o=document.createElement(s),r[3]&&(o.id=r[3]),r[4]&&(o.className=r[4].replace(/\./g," ").trim()),i&&Object.entries(i).forEach(([a,h])=>{typeof h>"u"||(/^on\w+$/.test(a)?o[a]=h:a==="selected"?h&&o.setAttribute(a,"true"):o.setAttribute(a,h))}),o.append(...n),o}function Sb(t,e,...i){return xm("http://www.w3.org/1999/xhtml",t,e,...i)}Sb.SVG=function(t,e,...i){return xm("http://www.w3.org/2000/svg",t,e,...i)};var yb=class{constructor(t){this.domNode=t,this._maxWidth="",this._width="",this._height="",this._top="",this._left="",this._bottom="",this._right="",this._paddingTop="",this._paddingLeft="",this._paddingBottom="",this._paddingRight="",this._fontFamily="",this._fontWeight="",this._fontSize="",this._fontStyle="",this._fontFeatureSettings="",this._fontVariationSettings="",this._textDecoration="",this._lineHeight="",this._letterSpacing="",this._className="",this._display="",this._position="",this._visibility="",this._color="",this._backgroundColor="",this._layerHint=!1,this._contain="none",this._boxShadow=""}setMaxWidth(t){let e=di(t);this._maxWidth!==e&&(this._maxWidth=e,this.domNode.style.maxWidth=this._maxWidth)}setWidth(t){let e=di(t);this._width!==e&&(this._width=e,this.domNode.style.width=this._width)}setHeight(t){let e=di(t);this._height!==e&&(this._height=e,this.domNode.style.height=this._height)}setTop(t){let e=di(t);this._top!==e&&(this._top=e,this.domNode.style.top=this._top)}setLeft(t){let e=di(t);this._left!==e&&(this._left=e,this.domNode.style.left=this._left)}setBottom(t){let e=di(t);this._bottom!==e&&(this._bottom=e,this.domNode.style.bottom=this._bottom)}setRight(t){let e=di(t);this._right!==e&&(this._right=e,this.domNode.style.right=this._right)}setPaddingTop(t){let e=di(t);this._paddingTop!==e&&(this._paddingTop=e,this.domNode.style.paddingTop=this._paddingTop)}setPaddingLeft(t){let e=di(t);this._paddingLeft!==e&&(this._paddingLeft=e,this.domNode.style.paddingLeft=this._paddingLeft)}setPaddingBottom(t){let e=di(t);this._paddingBottom!==e&&(this._paddingBottom=e,this.domNode.style.paddingBottom=this._paddingBottom)}setPaddingRight(t){let e=di(t);this._paddingRight!==e&&(this._paddingRight=e,this.domNode.style.paddingRight=this._paddingRight)}setFontFamily(t){this._fontFamily!==t&&(this._fontFamily=t,this.domNode.style.fontFamily=this._fontFamily)}setFontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.domNode.style.fontWeight=this._fontWeight)}setFontSize(t){let e=di(t);this._fontSize!==e&&(this._fontSize=e,this.domNode.style.fontSize=this._fontSize)}setFontStyle(t){this._fontStyle!==t&&(this._fontStyle=t,this.domNode.style.fontStyle=this._fontStyle)}setFontFeatureSettings(t){this._fontFeatureSettings!==t&&(this._fontFeatureSettings=t,this.domNode.style.fontFeatureSettings=this._fontFeatureSettings)}setFontVariationSettings(t){this._fontVariationSettings!==t&&(this._fontVariationSettings=t,this.domNode.style.fontVariationSettings=this._fontVariationSettings)}setTextDecoration(t){this._textDecoration!==t&&(this._textDecoration=t,this.domNode.style.textDecoration=this._textDecoration)}setLineHeight(t){let e=di(t);this._lineHeight!==e&&(this._lineHeight=e,this.domNode.style.lineHeight=this._lineHeight)}setLetterSpacing(t){let e=di(t);this._letterSpacing!==e&&(this._letterSpacing=e,this.domNode.style.letterSpacing=this._letterSpacing)}setClassName(t){this._className!==t&&(this._className=t,this.domNode.className=this._className)}toggleClassName(t,e){this.domNode.classList.toggle(t,e),this._className=this.domNode.className}setDisplay(t){this._display!==t&&(this._display=t,this.domNode.style.display=this._display)}setPosition(t){this._position!==t&&(this._position=t,this.domNode.style.position=this._position)}setVisibility(t){this._visibility!==t&&(this._visibility=t,this.domNode.style.visibility=this._visibility)}setColor(t){this._color!==t&&(this._color=t,this.domNode.style.color=this._color)}setBackgroundColor(t){this._backgroundColor!==t&&(this._backgroundColor=t,this.domNode.style.backgroundColor=this._backgroundColor)}setLayerHinting(t){this._layerHint!==t&&(this._layerHint=t,this.domNode.style.transform=this._layerHint?"translate3d(0px, 0px, 0px)":"")}setBoxShadow(t){this._boxShadow!==t&&(this._boxShadow=t,this.domNode.style.boxShadow=t)}setContain(t){this._contain!==t&&(this._contain=t,this.domNode.style.contain=this._contain)}setAttribute(t,e){this.domNode.setAttribute(t,e)}removeAttribute(t){this.domNode.removeAttribute(t)}appendChild(t){this.domNode.appendChild(t.domNode)}removeChild(t){this.domNode.removeChild(t.domNode)}};function di(t){return typeof t=="number"?`${t}px`:t}function co(t){return new yb(t)}var bm=class{constructor(){this._hooks=new Jn,this._pointerMoveCallback=null,this._onStopCallback=null}dispose(){this.stopMonitoring(!1),this._hooks.dispose()}stopMonitoring(t,e){if(!this.isMonitoring())return;this._hooks.clear(),this._pointerMoveCallback=null;let i=this._onStopCallback;this._onStopCallback=null,t&&i&&i(e)}isMonitoring(){return!!this._pointerMoveCallback}startMonitoring(t,e,i,n,r){this.isMonitoring()&&this.stopMonitoring(!1),this._pointerMoveCallback=n,this._onStopCallback=r;let s=t;try{t.setPointerCapture(e),this._hooks.add(mt(()=>{try{t.releasePointerCapture(e)}catch{}}))}catch{s=zi(t)}this._hooks.add(ke(s,Ut.POINTER_MOVE,o=>{if(o.buttons!==i){this.stopMonitoring(!0);return}o.preventDefault(),this._pointerMoveCallback(o)})),this._hooks.add(ke(s,Ut.POINTER_UP,o=>this.stopMonitoring(!0)))}};function xb(t,e,i){let n=null,r=null;if(typeof i.value=="function"?(n="value",r=i.value,r.length!==0&&console.warn("Memoize should only be used in functions with zero parameters")):typeof i.get=="function"&&(n="get",r=i.get),!r)throw new Error("not supported");let s=`$memoize$${e}`;i[n]=function(...o){return this.hasOwnProperty(s)||Object.defineProperty(this,s,{configurable:!1,enumerable:!1,writable:!1,value:r.apply(this,o)}),this[s]}}var rn;(t=>(t.Tap="-xterm-gesturetap",t.Change="-xterm-gesturechange",t.Start="-xterm-gesturestart",t.End="-xterm-gesturesend",t.Contextmenu="-xterm-gesturecontextmenu"))(rn||={});var ro=class Qt extends ze{constructor(){super(),this.dispatched=!1,this.targets=new Yf,this.ignoreTargets=new Yf,this.activeTouches={},this.handle=null,this._lastSetTapCountTime=0,this._register(Kt.runAndSubscribe(ub,({window:e,disposables:i})=>{i.add(ke(e.document,"touchstart",n=>this.onTouchStart(n),{passive:!1})),i.add(ke(e.document,"touchend",n=>this.onTouchEnd(e,n))),i.add(ke(e.document,"touchmove",n=>this.onTouchMove(n),{passive:!1}))},{window:wi,disposables:this._store}))}static addTarget(e){if(!Qt.isTouchDevice())return ze.None;Qt.INSTANCE||(Qt.INSTANCE=qf(new Qt));let i=Qt.INSTANCE.targets.push(e);return mt(i)}static ignoreTarget(e){if(!Qt.isTouchDevice())return ze.None;Qt.INSTANCE||(Qt.INSTANCE=qf(new Qt));let i=Qt.INSTANCE.ignoreTargets.push(e);return mt(i)}static isTouchDevice(){return"ontouchstart"in wi||navigator.maxTouchPoints>0}dispose(){this.handle&&(this.handle.dispose(),this.handle=null),super.dispose()}onTouchStart(e){let i=Date.now();this.handle&&(this.handle.dispose(),this.handle=null);for(let n=0,r=e.targetTouches.length;n<r;n++){let s=e.targetTouches.item(n);this.activeTouches[s.identifier]={id:s.identifier,initialTarget:s.target,initialTimeStamp:i,initialPageX:s.pageX,initialPageY:s.pageY,rollingTimestamps:[i],rollingPageX:[s.pageX],rollingPageY:[s.pageY]};let o=this.newGestureEvent(rn.Start,s.target);o.pageX=s.pageX,o.pageY=s.pageY,this.dispatchEvent(o)}this.dispatched&&(e.preventDefault(),e.stopPropagation(),this.dispatched=!1)}onTouchEnd(e,i){let n=Date.now(),r=Object.keys(this.activeTouches).length;for(let s=0,o=i.changedTouches.length;s<o;s++){let a=i.changedTouches.item(s);if(!this.activeTouches.hasOwnProperty(String(a.identifier))){console.warn("move of an UNKNOWN touch",a);continue}let h=this.activeTouches[a.identifier],l=Date.now()-h.initialTimeStamp;if(l<Qt.HOLD_DELAY&&Math.abs(h.initialPageX-yi(h.rollingPageX))<30&&Math.abs(h.initialPageY-yi(h.rollingPageY))<30){let u=this.newGestureEvent(rn.Tap,h.initialTarget);u.pageX=yi(h.rollingPageX),u.pageY=yi(h.rollingPageY),this.dispatchEvent(u)}else if(l>=Qt.HOLD_DELAY&&Math.abs(h.initialPageX-yi(h.rollingPageX))<30&&Math.abs(h.initialPageY-yi(h.rollingPageY))<30){let u=this.newGestureEvent(rn.Contextmenu,h.initialTarget);u.pageX=yi(h.rollingPageX),u.pageY=yi(h.rollingPageY),this.dispatchEvent(u)}else if(r===1){let u=yi(h.rollingPageX),c=yi(h.rollingPageY),d=yi(h.rollingTimestamps)-h.rollingTimestamps[0],f=u-h.rollingPageX[0],m=c-h.rollingPageY[0],g=[...this.targets].filter(_=>h.initialTarget instanceof Node&&_.contains(h.initialTarget));this.inertia(e,g,n,Math.abs(f)/d,f>0?1:-1,u,Math.abs(m)/d,m>0?1:-1,c)}this.dispatchEvent(this.newGestureEvent(rn.End,h.initialTarget)),delete this.activeTouches[a.identifier]}this.dispatched&&(i.preventDefault(),i.stopPropagation(),this.dispatched=!1)}newGestureEvent(e,i){let n=document.createEvent("CustomEvent");return n.initEvent(e,!1,!0),n.initialTarget=i,n.tapCount=0,n}dispatchEvent(e){if(e.type===rn.Tap){let i=new Date().getTime(),n=0;i-this._lastSetTapCountTime>Qt.CLEAR_TAP_COUNT_TIME?n=1:n=2,this._lastSetTapCountTime=i,e.tapCount=n}else(e.type===rn.Change||e.type===rn.Contextmenu)&&(this._lastSetTapCountTime=0);if(e.initialTarget instanceof Node){for(let n of this.ignoreTargets)if(n.contains(e.initialTarget))return;let i=[];for(let n of this.targets)if(n.contains(e.initialTarget)){let r=0,s=e.initialTarget;for(;s&&s!==n;)r++,s=s.parentElement;i.push([r,n])}i.sort((n,r)=>n[0]-r[0]);for(let[n,r]of i)r.dispatchEvent(e),this.dispatched=!0}}inertia(e,i,n,r,s,o,a,h,l){this.handle=zl(e,()=>{let u=Date.now(),c=u-n,d=0,f=0,m=!0;r+=Qt.SCROLL_FRICTION*c,a+=Qt.SCROLL_FRICTION*c,r>0&&(m=!1,d=s*r*c),a>0&&(m=!1,f=h*a*c);let g=this.newGestureEvent(rn.Change);g.translationX=d,g.translationY=f,i.forEach(_=>_.dispatchEvent(g)),m||this.inertia(e,i,u,r,s,o+d,a,h,l+f)})}onTouchMove(e){let i=Date.now();for(let n=0,r=e.changedTouches.length;n<r;n++){let s=e.changedTouches.item(n);if(!this.activeTouches.hasOwnProperty(String(s.identifier))){console.warn("end of an UNKNOWN touch",s);continue}let o=this.activeTouches[s.identifier],a=this.newGestureEvent(rn.Change,o.initialTarget);a.translationX=s.pageX-yi(o.rollingPageX),a.translationY=s.pageY-yi(o.rollingPageY),a.pageX=s.pageX,a.pageY=s.pageY,this.dispatchEvent(a),o.rollingPageX.length>3&&(o.rollingPageX.shift(),o.rollingPageY.shift(),o.rollingTimestamps.shift()),o.rollingPageX.push(s.pageX),o.rollingPageY.push(s.pageY),o.rollingTimestamps.push(i)}this.dispatched&&(e.preventDefault(),e.stopPropagation(),this.dispatched=!1)}};ro.SCROLL_FRICTION=-.005,ro.HOLD_DELAY=700,ro.CLEAR_TAP_COUNT_TIME=400,bt([xb],ro,"isTouchDevice",1);var bb=ro,Du=class extends ze{onclick(t,e){this._register(ke(t,Ut.CLICK,i=>e(new no(zi(t),i))))}onmousedown(t,e){this._register(ke(t,Ut.MOUSE_DOWN,i=>e(new no(zi(t),i))))}onmouseover(t,e){this._register(ke(t,Ut.MOUSE_OVER,i=>e(new no(zi(t),i))))}onmouseleave(t,e){this._register(ke(t,Ut.MOUSE_LEAVE,i=>e(new no(zi(t),i))))}onkeydown(t,e){this._register(ke(t,Ut.KEY_DOWN,i=>e(new nu(i))))}onkeyup(t,e){this._register(ke(t,Ut.KEY_UP,i=>e(new nu(i))))}oninput(t,e){this._register(ke(t,Ut.INPUT,e))}onblur(t,e){this._register(ke(t,Ut.BLUR,e))}onfocus(t,e){this._register(ke(t,Ut.FOCUS,e))}onchange(t,e){this._register(ke(t,Ut.CHANGE,e))}ignoreGesture(t){return bb.ignoreTarget(t)}},lp=11,wb=class extends Du{constructor(t){super(),this._onActivate=t.onActivate,this.bgDomNode=document.createElement("div"),this.bgDomNode.className="arrow-background",this.bgDomNode.style.position="absolute",this.bgDomNode.style.width=t.bgWidth+"px",this.bgDomNode.style.height=t.bgHeight+"px",typeof t.top<"u"&&(this.bgDomNode.style.top="0px"),typeof t.left<"u"&&(this.bgDomNode.style.left="0px"),typeof t.bottom<"u"&&(this.bgDomNode.style.bottom="0px"),typeof t.right<"u"&&(this.bgDomNode.style.right="0px"),this.domNode=document.createElement("div"),this.domNode.className=t.className,this.domNode.style.position="absolute",this.domNode.style.width=lp+"px",this.domNode.style.height=lp+"px",typeof t.top<"u"&&(this.domNode.style.top=t.top+"px"),typeof t.left<"u"&&(this.domNode.style.left=t.left+"px"),typeof t.bottom<"u"&&(this.domNode.style.bottom=t.bottom+"px"),typeof t.right<"u"&&(this.domNode.style.right=t.right+"px"),this._pointerMoveMonitor=this._register(new bm),this._register(op(this.bgDomNode,Ut.POINTER_DOWN,e=>this._arrowPointerDown(e))),this._register(op(this.domNode,Ut.POINTER_DOWN,e=>this._arrowPointerDown(e))),this._pointerdownRepeatTimer=this._register(new _b),this._pointerdownScheduleRepeatTimer=this._register(new Iu)}_arrowPointerDown(t){if(!t.target||!(t.target instanceof Element))return;let e=()=>{this._pointerdownRepeatTimer.cancelAndSet(()=>this._onActivate(),1e3/24,zi(t))};this._onActivate(),this._pointerdownRepeatTimer.cancel(),this._pointerdownScheduleRepeatTimer.cancelAndSet(e,200),this._pointerMoveMonitor.startMonitoring(t.target,t.pointerId,t.buttons,i=>{},()=>{this._pointerdownRepeatTimer.cancel(),this._pointerdownScheduleRepeatTimer.cancel()}),t.preventDefault()}},Mb=class ru{constructor(e,i,n,r,s,o,a){this._forceIntegerValues=e,this._scrollStateBrand=void 0,this._forceIntegerValues&&(i=i|0,n=n|0,r=r|0,s=s|0,o=o|0,a=a|0),this.rawScrollLeft=r,this.rawScrollTop=a,i<0&&(i=0),r+i>n&&(r=n-i),r<0&&(r=0),s<0&&(s=0),a+s>o&&(a=o-s),a<0&&(a=0),this.width=i,this.scrollWidth=n,this.scrollLeft=r,this.height=s,this.scrollHeight=o,this.scrollTop=a}equals(e){return this.rawScrollLeft===e.rawScrollLeft&&this.rawScrollTop===e.rawScrollTop&&this.width===e.width&&this.scrollWidth===e.scrollWidth&&this.scrollLeft===e.scrollLeft&&this.height===e.height&&this.scrollHeight===e.scrollHeight&&this.scrollTop===e.scrollTop}withScrollDimensions(e,i){return new ru(this._forceIntegerValues,typeof e.width<"u"?e.width:this.width,typeof e.scrollWidth<"u"?e.scrollWidth:this.scrollWidth,i?this.rawScrollLeft:this.scrollLeft,typeof e.height<"u"?e.height:this.height,typeof e.scrollHeight<"u"?e.scrollHeight:this.scrollHeight,i?this.rawScrollTop:this.scrollTop)}withScrollPosition(e){return new ru(this._forceIntegerValues,this.width,this.scrollWidth,typeof e.scrollLeft<"u"?e.scrollLeft:this.rawScrollLeft,this.height,this.scrollHeight,typeof e.scrollTop<"u"?e.scrollTop:this.rawScrollTop)}createScrollEvent(e,i){let n=this.width!==e.width,r=this.scrollWidth!==e.scrollWidth,s=this.scrollLeft!==e.scrollLeft,o=this.height!==e.height,a=this.scrollHeight!==e.scrollHeight,h=this.scrollTop!==e.scrollTop;return{inSmoothScrolling:i,oldWidth:e.width,oldScrollWidth:e.scrollWidth,oldScrollLeft:e.scrollLeft,width:this.width,scrollWidth:this.scrollWidth,scrollLeft:this.scrollLeft,oldHeight:e.height,oldScrollHeight:e.scrollHeight,oldScrollTop:e.scrollTop,height:this.height,scrollHeight:this.scrollHeight,scrollTop:this.scrollTop,widthChanged:n,scrollWidthChanged:r,scrollLeftChanged:s,heightChanged:o,scrollHeightChanged:a,scrollTopChanged:h}}},Cb=class extends ze{constructor(t){super(),this._scrollableBrand=void 0,this._onScroll=this._register(new se),this.onScroll=this._onScroll.event,this._smoothScrollDuration=t.smoothScrollDuration,this._scheduleAtNextAnimationFrame=t.scheduleAtNextAnimationFrame,this._state=new Mb(t.forceIntegerValues,0,0,0,0,0,0),this._smoothScrolling=null}dispose(){this._smoothScrolling&&(this._smoothScrolling.dispose(),this._smoothScrolling=null),super.dispose()}setSmoothScrollDuration(t){this._smoothScrollDuration=t}validateScrollPosition(t){return this._state.withScrollPosition(t)}getScrollDimensions(){return this._state}setScrollDimensions(t,e){let i=this._state.withScrollDimensions(t,e);this._setState(i,!!this._smoothScrolling),this._smoothScrolling?.acceptScrollDimensions(this._state)}getFutureScrollPosition(){return this._smoothScrolling?this._smoothScrolling.to:this._state}getCurrentScrollPosition(){return this._state}setScrollPositionNow(t){let e=this._state.withScrollPosition(t);this._smoothScrolling&&(this._smoothScrolling.dispose(),this._smoothScrolling=null),this._setState(e,!1)}setScrollPositionSmooth(t,e){if(this._smoothScrollDuration===0)return this.setScrollPositionNow(t);if(this._smoothScrolling){t={scrollLeft:typeof t.scrollLeft>"u"?this._smoothScrolling.to.scrollLeft:t.scrollLeft,scrollTop:typeof t.scrollTop>"u"?this._smoothScrolling.to.scrollTop:t.scrollTop};let i=this._state.withScrollPosition(t);if(this._smoothScrolling.to.scrollLeft===i.scrollLeft&&this._smoothScrolling.to.scrollTop===i.scrollTop)return;let n;e?n=new cp(this._smoothScrolling.from,i,this._smoothScrolling.startTime,this._smoothScrolling.duration):n=this._smoothScrolling.combine(this._state,i,this._smoothScrollDuration),this._smoothScrolling.dispose(),this._smoothScrolling=n}else{let i=this._state.withScrollPosition(t);this._smoothScrolling=cp.start(this._state,i,this._smoothScrollDuration)}this._smoothScrolling.animationFrameDisposable=this._scheduleAtNextAnimationFrame(()=>{this._smoothScrolling&&(this._smoothScrolling.animationFrameDisposable=null,this._performSmoothScrolling())})}hasPendingScrollAnimation(){return!!this._smoothScrolling}_performSmoothScrolling(){if(!this._smoothScrolling)return;let t=this._smoothScrolling.tick(),e=this._state.withScrollPosition(t);if(this._setState(e,!0),!!this._smoothScrolling){if(t.isDone){this._smoothScrolling.dispose(),this._smoothScrolling=null;return}this._smoothScrolling.animationFrameDisposable=this._scheduleAtNextAnimationFrame(()=>{this._smoothScrolling&&(this._smoothScrolling.animationFrameDisposable=null,this._performSmoothScrolling())})}}_setState(t,e){let i=this._state;i.equals(t)||(this._state=t,this._onScroll.fire(this._state.createScrollEvent(i,e)))}},hp=class{constructor(t,e,i){this.scrollLeft=t,this.scrollTop=e,this.isDone=i}};function Dc(t,e){let i=e-t;return function(n){return t+i*Ab(n)}}function Eb(t,e,i){return function(n){return n<i?t(n/i):e((n-i)/(1-i))}}var cp=class su{constructor(e,i,n,r){this.from=e,this.to=i,this.duration=r,this.startTime=n,this.animationFrameDisposable=null,this._initAnimations()}_initAnimations(){this.scrollLeft=this._initAnimation(this.from.scrollLeft,this.to.scrollLeft,this.to.width),this.scrollTop=this._initAnimation(this.from.scrollTop,this.to.scrollTop,this.to.height)}_initAnimation(e,i,n){if(Math.abs(e-i)>2.5*n){let r,s;return e<i?(r=e+.75*n,s=i-.75*n):(r=e-.75*n,s=i+.75*n),Eb(Dc(e,r),Dc(s,i),.33)}return Dc(e,i)}dispose(){this.animationFrameDisposable!==null&&(this.animationFrameDisposable.dispose(),this.animationFrameDisposable=null)}acceptScrollDimensions(e){this.to=e.withScrollPosition(this.to),this._initAnimations()}tick(){return this._tick(Date.now())}_tick(e){let i=(e-this.startTime)/this.duration;if(i<1){let n=this.scrollLeft(i),r=this.scrollTop(i);return new hp(n,r,!1)}return new hp(this.to.scrollLeft,this.to.scrollTop,!0)}combine(e,i,n){return su.start(e,i,n)}static start(e,i,n){n=n+10;let r=Date.now()-10;return new su(e,i,r,n)}};function Tb(t){return Math.pow(t,3)}function Ab(t){return 1-Tb(1-t)}var Rb=class extends ze{constructor(t,e,i){super(),this._visibility=t,this._visibleClassName=e,this._invisibleClassName=i,this._domNode=null,this._isVisible=!1,this._isNeeded=!1,this._rawShouldBeVisible=!1,this._shouldBeVisible=!1,this._revealTimer=this._register(new Iu)}setVisibility(t){this._visibility!==t&&(this._visibility=t,this._updateShouldBeVisible())}setShouldBeVisible(t){this._rawShouldBeVisible=t,this._updateShouldBeVisible()}_applyVisibilitySetting(){return this._visibility===2?!1:this._visibility===3?!0:this._rawShouldBeVisible}_updateShouldBeVisible(){let t=this._applyVisibilitySetting();this._shouldBeVisible!==t&&(this._shouldBeVisible=t,this.ensureVisibility())}setIsNeeded(t){this._isNeeded!==t&&(this._isNeeded=t,this.ensureVisibility())}setDomNode(t){this._domNode=t,this._domNode.setClassName(this._invisibleClassName),this.setShouldBeVisible(!1)}ensureVisibility(){if(!this._isNeeded){this._hide(!1);return}this._shouldBeVisible?this._reveal():this._hide(!0)}_reveal(){this._isVisible||(this._isVisible=!0,this._revealTimer.setIfNotSet(()=>{this._domNode?.setClassName(this._visibleClassName)},0))}_hide(t){this._revealTimer.cancel(),this._isVisible&&(this._isVisible=!1,this._domNode?.setClassName(this._invisibleClassName+(t?" fade":"")))}},Pb=140,wm=class extends Du{constructor(t){super(),this._lazyRender=t.lazyRender,this._host=t.host,this._scrollable=t.scrollable,this._scrollByPage=t.scrollByPage,this._scrollbarState=t.scrollbarState,this._visibilityController=this._register(new Rb(t.visibility,"visible scrollbar "+t.extraScrollbarClassName,"invisible scrollbar "+t.extraScrollbarClassName)),this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()),this._pointerMoveMonitor=this._register(new bm),this._shouldRender=!0,this.domNode=co(document.createElement("div")),this.domNode.setAttribute("role","presentation"),this.domNode.setAttribute("aria-hidden","true"),this._visibilityController.setDomNode(this.domNode),this.domNode.setPosition("absolute"),this._register(ke(this.domNode.domNode,Ut.POINTER_DOWN,e=>this._domNodePointerDown(e)))}_createArrow(t){let e=this._register(new wb(t));this.domNode.domNode.appendChild(e.bgDomNode),this.domNode.domNode.appendChild(e.domNode)}_createSlider(t,e,i,n){this.slider=co(document.createElement("div")),this.slider.setClassName("slider"),this.slider.setPosition("absolute"),this.slider.setTop(t),this.slider.setLeft(e),typeof i=="number"&&this.slider.setWidth(i),typeof n=="number"&&this.slider.setHeight(n),this.slider.setLayerHinting(!0),this.slider.setContain("strict"),this.domNode.domNode.appendChild(this.slider.domNode),this._register(ke(this.slider.domNode,Ut.POINTER_DOWN,r=>{r.button===0&&(r.preventDefault(),this._sliderPointerDown(r))})),this.onclick(this.slider.domNode,r=>{r.leftButton&&r.stopPropagation()})}_onElementSize(t){return this._scrollbarState.setVisibleSize(t)&&(this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()),this._shouldRender=!0,this._lazyRender||this.render()),this._shouldRender}_onElementScrollSize(t){return this._scrollbarState.setScrollSize(t)&&(this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()),this._shouldRender=!0,this._lazyRender||this.render()),this._shouldRender}_onElementScrollPosition(t){return this._scrollbarState.setScrollPosition(t)&&(this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()),this._shouldRender=!0,this._lazyRender||this.render()),this._shouldRender}beginReveal(){this._visibilityController.setShouldBeVisible(!0)}beginHide(){this._visibilityController.setShouldBeVisible(!1)}render(){this._shouldRender&&(this._shouldRender=!1,this._renderDomNode(this._scrollbarState.getRectangleLargeSize(),this._scrollbarState.getRectangleSmallSize()),this._updateSlider(this._scrollbarState.getSliderSize(),this._scrollbarState.getArrowSize()+this._scrollbarState.getSliderPosition()))}_domNodePointerDown(t){t.target===this.domNode.domNode&&this._onPointerDown(t)}delegatePointerDown(t){let e=this.domNode.domNode.getClientRects()[0].top,i=e+this._scrollbarState.getSliderPosition(),n=e+this._scrollbarState.getSliderPosition()+this._scrollbarState.getSliderSize(),r=this._sliderPointerPosition(t);i<=r&&r<=n?t.button===0&&(t.preventDefault(),this._sliderPointerDown(t)):this._onPointerDown(t)}_onPointerDown(t){let e,i;if(t.target===this.domNode.domNode&&typeof t.offsetX=="number"&&typeof t.offsetY=="number")e=t.offsetX,i=t.offsetY;else{let r=gb(this.domNode.domNode);e=t.pageX-r.left,i=t.pageY-r.top}let n=this._pointerDownRelativePosition(e,i);this._setDesiredScrollPositionNow(this._scrollByPage?this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(n):this._scrollbarState.getDesiredScrollPositionFromOffset(n)),t.button===0&&(t.preventDefault(),this._sliderPointerDown(t))}_sliderPointerDown(t){if(!t.target||!(t.target instanceof Element))return;let e=this._sliderPointerPosition(t),i=this._sliderOrthogonalPointerPosition(t),n=this._scrollbarState.clone();this.slider.toggleClassName("active",!0),this._pointerMoveMonitor.startMonitoring(t.target,t.pointerId,t.buttons,r=>{let s=this._sliderOrthogonalPointerPosition(r),o=Math.abs(s-i);if(mm&&o>Pb){this._setDesiredScrollPositionNow(n.getScrollPosition());return}let a=this._sliderPointerPosition(r)-e;this._setDesiredScrollPositionNow(n.getDesiredScrollPositionFromDelta(a))},()=>{this.slider.toggleClassName("active",!1),this._host.onDragEnd()}),this._host.onDragStart()}_setDesiredScrollPositionNow(t){let e={};this.writeScrollPosition(e,t),this._scrollable.setScrollPositionNow(e)}updateScrollbarSize(t){this._updateScrollbarSize(t),this._scrollbarState.setScrollbarSize(t),this._shouldRender=!0,this._lazyRender||this.render()}isNeeded(){return this._scrollbarState.isNeeded()}},Mm=class ou{constructor(e,i,n,r,s,o){this._scrollbarSize=Math.round(i),this._oppositeScrollbarSize=Math.round(n),this._arrowSize=Math.round(e),this._visibleSize=r,this._scrollSize=s,this._scrollPosition=o,this._computedAvailableSize=0,this._computedIsNeeded=!1,this._computedSliderSize=0,this._computedSliderRatio=0,this._computedSliderPosition=0,this._refreshComputedValues()}clone(){return new ou(this._arrowSize,this._scrollbarSize,this._oppositeScrollbarSize,this._visibleSize,this._scrollSize,this._scrollPosition)}setVisibleSize(e){let i=Math.round(e);return this._visibleSize!==i?(this._visibleSize=i,this._refreshComputedValues(),!0):!1}setScrollSize(e){let i=Math.round(e);return this._scrollSize!==i?(this._scrollSize=i,this._refreshComputedValues(),!0):!1}setScrollPosition(e){let i=Math.round(e);return this._scrollPosition!==i?(this._scrollPosition=i,this._refreshComputedValues(),!0):!1}setScrollbarSize(e){this._scrollbarSize=Math.round(e)}setOppositeScrollbarSize(e){this._oppositeScrollbarSize=Math.round(e)}static _computeValues(e,i,n,r,s){let o=Math.max(0,n-e),a=Math.max(0,o-2*i),h=r>0&&r>n;if(!h)return{computedAvailableSize:Math.round(o),computedIsNeeded:h,computedSliderSize:Math.round(a),computedSliderRatio:0,computedSliderPosition:0};let l=Math.round(Math.max(20,Math.floor(n*a/r))),u=(a-l)/(r-n),c=s*u;return{computedAvailableSize:Math.round(o),computedIsNeeded:h,computedSliderSize:Math.round(l),computedSliderRatio:u,computedSliderPosition:Math.round(c)}}_refreshComputedValues(){let e=ou._computeValues(this._oppositeScrollbarSize,this._arrowSize,this._visibleSize,this._scrollSize,this._scrollPosition);this._computedAvailableSize=e.computedAvailableSize,this._computedIsNeeded=e.computedIsNeeded,this._computedSliderSize=e.computedSliderSize,this._computedSliderRatio=e.computedSliderRatio,this._computedSliderPosition=e.computedSliderPosition}getArrowSize(){return this._arrowSize}getScrollPosition(){return this._scrollPosition}getRectangleLargeSize(){return this._computedAvailableSize}getRectangleSmallSize(){return this._scrollbarSize}isNeeded(){return this._computedIsNeeded}getSliderSize(){return this._computedSliderSize}getSliderPosition(){return this._computedSliderPosition}getDesiredScrollPositionFromOffset(e){if(!this._computedIsNeeded)return 0;let i=e-this._arrowSize-this._computedSliderSize/2;return Math.round(i/this._computedSliderRatio)}getDesiredScrollPositionFromOffsetPaged(e){if(!this._computedIsNeeded)return 0;let i=e-this._arrowSize,n=this._scrollPosition;return i<this._computedSliderPosition?n-=this._visibleSize:n+=this._visibleSize,n}getDesiredScrollPositionFromDelta(e){if(!this._computedIsNeeded)return 0;let i=this._computedSliderPosition+e;return Math.round(i/this._computedSliderRatio)}},Ib=class extends wm{constructor(t,e,i){let n=t.getScrollDimensions(),r=t.getCurrentScrollPosition();if(super({lazyRender:e.lazyRender,host:i,scrollbarState:new Mm(e.horizontalHasArrows?e.arrowSize:0,e.horizontal===2?0:e.horizontalScrollbarSize,e.vertical===2?0:e.verticalScrollbarSize,n.width,n.scrollWidth,r.scrollLeft),visibility:e.horizontal,extraScrollbarClassName:"horizontal",scrollable:t,scrollByPage:e.scrollByPage}),e.horizontalHasArrows)throw new Error("horizontalHasArrows is not supported in xterm.js");this._createSlider(Math.floor((e.horizontalScrollbarSize-e.horizontalSliderSize)/2),0,void 0,e.horizontalSliderSize)}_updateSlider(t,e){this.slider.setWidth(t),this.slider.setLeft(e)}_renderDomNode(t,e){this.domNode.setWidth(t),this.domNode.setHeight(e),this.domNode.setLeft(0),this.domNode.setBottom(0)}onDidScroll(t){return this._shouldRender=this._onElementScrollSize(t.scrollWidth)||this._shouldRender,this._shouldRender=this._onElementScrollPosition(t.scrollLeft)||this._shouldRender,this._shouldRender=this._onElementSize(t.width)||this._shouldRender,this._shouldRender}_pointerDownRelativePosition(t,e){return t}_sliderPointerPosition(t){return t.pageX}_sliderOrthogonalPointerPosition(t){return t.pageY}_updateScrollbarSize(t){this.slider.setHeight(t)}writeScrollPosition(t,e){t.scrollLeft=e}updateOptions(t){this.updateScrollbarSize(t.horizontal===2?0:t.horizontalScrollbarSize),this._scrollbarState.setOppositeScrollbarSize(t.vertical===2?0:t.verticalScrollbarSize),this._visibilityController.setVisibility(t.horizontal),this._scrollByPage=t.scrollByPage}},Lb=class extends wm{constructor(t,e,i){let n=t.getScrollDimensions(),r=t.getCurrentScrollPosition();if(super({lazyRender:e.lazyRender,host:i,scrollbarState:new Mm(e.verticalHasArrows?e.arrowSize:0,e.vertical===2?0:e.verticalScrollbarSize,0,n.height,n.scrollHeight,r.scrollTop),visibility:e.vertical,extraScrollbarClassName:"vertical",scrollable:t,scrollByPage:e.scrollByPage}),e.verticalHasArrows)throw new Error("horizontalHasArrows is not supported in xterm.js");this._createSlider(0,Math.floor((e.verticalScrollbarSize-e.verticalSliderSize)/2),e.verticalSliderSize,void 0)}_updateSlider(t,e){this.slider.setHeight(t),this.slider.setTop(e)}_renderDomNode(t,e){this.domNode.setWidth(e),this.domNode.setHeight(t),this.domNode.setRight(0),this.domNode.setTop(0)}onDidScroll(t){return this._shouldRender=this._onElementScrollSize(t.scrollHeight)||this._shouldRender,this._shouldRender=this._onElementScrollPosition(t.scrollTop)||this._shouldRender,this._shouldRender=this._onElementSize(t.height)||this._shouldRender,this._shouldRender}_pointerDownRelativePosition(t,e){return e}_sliderPointerPosition(t){return t.pageY}_sliderOrthogonalPointerPosition(t){return t.pageX}_updateScrollbarSize(t){this.slider.setWidth(t)}writeScrollPosition(t,e){t.scrollTop=e}updateOptions(t){this.updateScrollbarSize(t.vertical===2?0:t.verticalScrollbarSize),this._scrollbarState.setOppositeScrollbarSize(0),this._visibilityController.setVisibility(t.vertical),this._scrollByPage=t.scrollByPage}},Db=500,up=50,dp=!0,Nb=class{constructor(t,e,i){this.timestamp=t,this.deltaX=e,this.deltaY=i,this.score=0}},au=class{constructor(){this._capacity=5,this._memory=[],this._front=-1,this._rear=-1}isPhysicalMouseWheel(){if(this._front===-1&&this._rear===-1)return!1;let e=1,i=0,n=1,r=this._rear;do{let s=r===this._front?e:Math.pow(2,-n);if(e-=s,i+=this._memory[r].score*s,r===this._front)break;r=(this._capacity+r-1)%this._capacity,n++}while(!0);return i<=.5}acceptStandardWheelEvent(e){if(Ru){let i=zi(e.browserEvent),n=Tx(i);this.accept(Date.now(),e.deltaX*n,e.deltaY*n)}else this.accept(Date.now(),e.deltaX,e.deltaY)}accept(e,i,n){let r=null,s=new Nb(e,i,n);this._front===-1&&this._rear===-1?(this._memory[0]=s,this._front=0,this._rear=0):(r=this._memory[this._rear],this._rear=(this._rear+1)%this._capacity,this._rear===this._front&&(this._front=(this._front+1)%this._capacity),this._memory[this._rear]=s),s.score=this._computeScore(s,r)}_computeScore(e,i){if(Math.abs(e.deltaX)>0&&Math.abs(e.deltaY)>0)return 1;let n=.5;if((!this._isAlmostInt(e.deltaX)||!this._isAlmostInt(e.deltaY))&&(n+=.25),i){let r=Math.abs(e.deltaX),s=Math.abs(e.deltaY),o=Math.abs(i.deltaX),a=Math.abs(i.deltaY),h=Math.max(Math.min(r,o),1),l=Math.max(Math.min(s,a),1),u=Math.max(r,o),c=Math.max(s,a);u%h===0&&c%l===0&&(n-=.5)}return Math.min(Math.max(n,0),1)}_isAlmostInt(e){return Math.abs(Math.round(e)-e)<.01}};au.INSTANCE=new au;var Bb=au,kb=class extends Du{constructor(t,e,i){super(),this._onScroll=this._register(new se),this.onScroll=this._onScroll.event,this._onWillScroll=this._register(new se),this.onWillScroll=this._onWillScroll.event,this._options=Ob(e),this._scrollable=i,this._register(this._scrollable.onScroll(r=>{this._onWillScroll.fire(r),this._onDidScroll(r),this._onScroll.fire(r)}));let n={onMouseWheel:r=>this._onMouseWheel(r),onDragStart:()=>this._onDragStart(),onDragEnd:()=>this._onDragEnd()};this._verticalScrollbar=this._register(new Lb(this._scrollable,this._options,n)),this._horizontalScrollbar=this._register(new Ib(this._scrollable,this._options,n)),this._domNode=document.createElement("div"),this._domNode.className="xterm-scrollable-element "+this._options.className,this._domNode.setAttribute("role","presentation"),this._domNode.style.position="relative",this._domNode.appendChild(t),this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode),this._domNode.appendChild(this._verticalScrollbar.domNode.domNode),this._options.useShadows?(this._leftShadowDomNode=co(document.createElement("div")),this._leftShadowDomNode.setClassName("shadow"),this._domNode.appendChild(this._leftShadowDomNode.domNode),this._topShadowDomNode=co(document.createElement("div")),this._topShadowDomNode.setClassName("shadow"),this._domNode.appendChild(this._topShadowDomNode.domNode),this._topLeftShadowDomNode=co(document.createElement("div")),this._topLeftShadowDomNode.setClassName("shadow"),this._domNode.appendChild(this._topLeftShadowDomNode.domNode)):(this._leftShadowDomNode=null,this._topShadowDomNode=null,this._topLeftShadowDomNode=null),this._listenOnDomNode=this._options.listenOnDomNode||this._domNode,this._mouseWheelToDispose=[],this._setListeningToMouseWheel(this._options.handleMouseWheel),this.onmouseover(this._listenOnDomNode,r=>this._onMouseOver(r)),this.onmouseleave(this._listenOnDomNode,r=>this._onMouseLeave(r)),this._hideTimeout=this._register(new Iu),this._isDragging=!1,this._mouseIsOver=!1,this._shouldRender=!0,this._revealOnScroll=!0}get options(){return this._options}dispose(){this._mouseWheelToDispose=Er(this._mouseWheelToDispose),super.dispose()}getDomNode(){return this._domNode}getOverviewRulerLayoutInfo(){return{parent:this._domNode,insertBefore:this._verticalScrollbar.domNode.domNode}}delegateVerticalScrollbarPointerDown(t){this._verticalScrollbar.delegatePointerDown(t)}getScrollDimensions(){return this._scrollable.getScrollDimensions()}setScrollDimensions(t){this._scrollable.setScrollDimensions(t,!1)}updateClassName(t){this._options.className=t,sn&&(this._options.className+=" mac"),this._domNode.className="xterm-scrollable-element "+this._options.className}updateOptions(t){typeof t.handleMouseWheel<"u"&&(this._options.handleMouseWheel=t.handleMouseWheel,this._setListeningToMouseWheel(this._options.handleMouseWheel)),typeof t.mouseWheelScrollSensitivity<"u"&&(this._options.mouseWheelScrollSensitivity=t.mouseWheelScrollSensitivity),typeof t.fastScrollSensitivity<"u"&&(this._options.fastScrollSensitivity=t.fastScrollSensitivity),typeof t.scrollPredominantAxis<"u"&&(this._options.scrollPredominantAxis=t.scrollPredominantAxis),typeof t.horizontal<"u"&&(this._options.horizontal=t.horizontal),typeof t.vertical<"u"&&(this._options.vertical=t.vertical),typeof t.horizontalScrollbarSize<"u"&&(this._options.horizontalScrollbarSize=t.horizontalScrollbarSize),typeof t.verticalScrollbarSize<"u"&&(this._options.verticalScrollbarSize=t.verticalScrollbarSize),typeof t.scrollByPage<"u"&&(this._options.scrollByPage=t.scrollByPage),this._horizontalScrollbar.updateOptions(this._options),this._verticalScrollbar.updateOptions(this._options),this._options.lazyRender||this._render()}setRevealOnScroll(t){this._revealOnScroll=t}delegateScrollFromMouseWheelEvent(t){this._onMouseWheel(new tp(t))}_setListeningToMouseWheel(t){if(this._mouseWheelToDispose.length>0!==t&&(this._mouseWheelToDispose=Er(this._mouseWheelToDispose),t)){let e=i=>{this._onMouseWheel(new tp(i))};this._mouseWheelToDispose.push(ke(this._listenOnDomNode,Ut.MOUSE_WHEEL,e,{passive:!1}))}}_onMouseWheel(t){if(t.browserEvent?.defaultPrevented)return;let e=Bb.INSTANCE;dp&&e.acceptStandardWheelEvent(t);let i=!1;if(t.deltaY||t.deltaX){let r=t.deltaY*this._options.mouseWheelScrollSensitivity,s=t.deltaX*this._options.mouseWheelScrollSensitivity;this._options.scrollPredominantAxis&&(this._options.scrollYToX&&s+r===0?s=r=0:Math.abs(r)>=Math.abs(s)?s=0:r=0),this._options.flipAxes&&([r,s]=[s,r]);let o=!sn&&t.browserEvent&&t.browserEvent.shiftKey;(this._options.scrollYToX||o)&&!s&&(s=r,r=0),t.browserEvent&&t.browserEvent.altKey&&(s=s*this._options.fastScrollSensitivity,r=r*this._options.fastScrollSensitivity);let a=this._scrollable.getFutureScrollPosition(),h={};if(r){let l=up*r,u=a.scrollTop-(l<0?Math.floor(l):Math.ceil(l));this._verticalScrollbar.writeScrollPosition(h,u)}if(s){let l=up*s,u=a.scrollLeft-(l<0?Math.floor(l):Math.ceil(l));this._horizontalScrollbar.writeScrollPosition(h,u)}h=this._scrollable.validateScrollPosition(h),(a.scrollLeft!==h.scrollLeft||a.scrollTop!==h.scrollTop)&&(dp&&this._options.mouseWheelSmoothScroll&&e.isPhysicalMouseWheel()?this._scrollable.setScrollPositionSmooth(h):this._scrollable.setScrollPositionNow(h),i=!0)}let n=i;!n&&this._options.alwaysConsumeMouseWheel&&(n=!0),!n&&this._options.consumeMouseWheelIfScrollbarIsNeeded&&(this._verticalScrollbar.isNeeded()||this._horizontalScrollbar.isNeeded())&&(n=!0),n&&(t.preventDefault(),t.stopPropagation())}_onDidScroll(t){this._shouldRender=this._horizontalScrollbar.onDidScroll(t)||this._shouldRender,this._shouldRender=this._verticalScrollbar.onDidScroll(t)||this._shouldRender,this._options.useShadows&&(this._shouldRender=!0),this._revealOnScroll&&this._reveal(),this._options.lazyRender||this._render()}renderNow(){if(!this._options.lazyRender)throw new Error("Please use `lazyRender` together with `renderNow`!");this._render()}_render(){if(this._shouldRender&&(this._shouldRender=!1,this._horizontalScrollbar.render(),this._verticalScrollbar.render(),this._options.useShadows)){let t=this._scrollable.getCurrentScrollPosition(),e=t.scrollTop>0,i=t.scrollLeft>0,n=i?" left":"",r=e?" top":"",s=i||e?" top-left-corner":"";this._leftShadowDomNode.setClassName(`shadow${n}`),this._topShadowDomNode.setClassName(`shadow${r}`),this._topLeftShadowDomNode.setClassName(`shadow${s}${r}${n}`)}}_onDragStart(){this._isDragging=!0,this._reveal()}_onDragEnd(){this._isDragging=!1,this._hide()}_onMouseLeave(t){this._mouseIsOver=!1,this._hide()}_onMouseOver(t){this._mouseIsOver=!0,this._reveal()}_reveal(){this._verticalScrollbar.beginReveal(),this._horizontalScrollbar.beginReveal(),this._scheduleHide()}_hide(){!this._mouseIsOver&&!this._isDragging&&(this._verticalScrollbar.beginHide(),this._horizontalScrollbar.beginHide())}_scheduleHide(){!this._mouseIsOver&&!this._isDragging&&this._hideTimeout.cancelAndSet(()=>this._hide(),Db)}},Fb=class extends kb{constructor(t,e,i){super(t,e,i)}setScrollPosition(t){t.reuseAnimation?this._scrollable.setScrollPositionSmooth(t,t.reuseAnimation):this._scrollable.setScrollPositionNow(t)}getScrollPosition(){return this._scrollable.getCurrentScrollPosition()}};function Ob(t){let e={lazyRender:typeof t.lazyRender<"u"?t.lazyRender:!1,className:typeof t.className<"u"?t.className:"",useShadows:typeof t.useShadows<"u"?t.useShadows:!0,handleMouseWheel:typeof t.handleMouseWheel<"u"?t.handleMouseWheel:!0,flipAxes:typeof t.flipAxes<"u"?t.flipAxes:!1,consumeMouseWheelIfScrollbarIsNeeded:typeof t.consumeMouseWheelIfScrollbarIsNeeded<"u"?t.consumeMouseWheelIfScrollbarIsNeeded:!1,alwaysConsumeMouseWheel:typeof t.alwaysConsumeMouseWheel<"u"?t.alwaysConsumeMouseWheel:!1,scrollYToX:typeof t.scrollYToX<"u"?t.scrollYToX:!1,mouseWheelScrollSensitivity:typeof t.mouseWheelScrollSensitivity<"u"?t.mouseWheelScrollSensitivity:1,fastScrollSensitivity:typeof t.fastScrollSensitivity<"u"?t.fastScrollSensitivity:5,scrollPredominantAxis:typeof t.scrollPredominantAxis<"u"?t.scrollPredominantAxis:!0,mouseWheelSmoothScroll:typeof t.mouseWheelSmoothScroll<"u"?t.mouseWheelSmoothScroll:!0,arrowSize:typeof t.arrowSize<"u"?t.arrowSize:11,listenOnDomNode:typeof t.listenOnDomNode<"u"?t.listenOnDomNode:null,horizontal:typeof t.horizontal<"u"?t.horizontal:1,horizontalScrollbarSize:typeof t.horizontalScrollbarSize<"u"?t.horizontalScrollbarSize:10,horizontalSliderSize:typeof t.horizontalSliderSize<"u"?t.horizontalSliderSize:0,horizontalHasArrows:typeof t.horizontalHasArrows<"u"?t.horizontalHasArrows:!1,vertical:typeof t.vertical<"u"?t.vertical:1,verticalScrollbarSize:typeof t.verticalScrollbarSize<"u"?t.verticalScrollbarSize:10,verticalHasArrows:typeof t.verticalHasArrows<"u"?t.verticalHasArrows:!1,verticalSliderSize:typeof t.verticalSliderSize<"u"?t.verticalSliderSize:0,scrollByPage:typeof t.scrollByPage<"u"?t.scrollByPage:!1};return e.horizontalSliderSize=typeof t.horizontalSliderSize<"u"?t.horizontalSliderSize:e.horizontalScrollbarSize,e.verticalSliderSize=typeof t.verticalSliderSize<"u"?t.verticalSliderSize:e.verticalScrollbarSize,sn&&(e.className+=" mac"),e}var lu=class extends ze{constructor(t,e,i,n,r,s,o,a){super(),this._bufferService=i,this._optionsService=o,this._renderService=a,this._onRequestScrollLines=this._register(new se),this.onRequestScrollLines=this._onRequestScrollLines.event,this._isSyncing=!1,this._isHandlingScroll=!1,this._suppressOnScrollHandler=!1;let h=this._register(new Cb({forceIntegerValues:!1,smoothScrollDuration:this._optionsService.rawOptions.smoothScrollDuration,scheduleAtNextAnimationFrame:l=>zl(n.window,l)}));this._register(this._optionsService.onSpecificOptionChange("smoothScrollDuration",()=>{h.setSmoothScrollDuration(this._optionsService.rawOptions.smoothScrollDuration)})),this._scrollableElement=this._register(new Fb(e,{vertical:1,horizontal:2,useShadows:!1,mouseWheelSmoothScroll:!0,...this._getChangeOptions()},h)),this._register(this._optionsService.onMultipleOptionChange(["scrollSensitivity","fastScrollSensitivity","overviewRuler"],()=>this._scrollableElement.updateOptions(this._getChangeOptions()))),this._register(r.onProtocolChange(l=>{this._scrollableElement.updateOptions({handleMouseWheel:!(l&16)})})),this._scrollableElement.setScrollDimensions({height:0,scrollHeight:0}),this._register(Kt.runAndSubscribe(s.onChangeColors,()=>{this._scrollableElement.getDomNode().style.backgroundColor=s.colors.background.css})),t.appendChild(this._scrollableElement.getDomNode()),this._register(mt(()=>this._scrollableElement.getDomNode().remove())),this._styleElement=n.mainDocument.createElement("style"),e.appendChild(this._styleElement),this._register(mt(()=>this._styleElement.remove())),this._register(Kt.runAndSubscribe(s.onChangeColors,()=>{this._styleElement.textContent=[".xterm .xterm-scrollable-element > .scrollbar > .slider {",`  background: ${s.colors.scrollbarSliderBackground.css};`,"}",".xterm .xterm-scrollable-element > .scrollbar > .slider:hover {",`  background: ${s.colors.scrollbarSliderHoverBackground.css};`,"}",".xterm .xterm-scrollable-element > .scrollbar > .slider.active {",`  background: ${s.colors.scrollbarSliderActiveBackground.css};`,"}"].join(`
`)})),this._register(this._bufferService.onResize(()=>this.queueSync())),this._register(this._bufferService.buffers.onBufferActivate(()=>{this._latestYDisp=void 0,this.queueSync()})),this._register(this._bufferService.onScroll(()=>this._sync())),this._register(this._scrollableElement.onScroll(l=>this._handleScroll(l)))}scrollLines(t){let e=this._scrollableElement.getScrollPosition();this._scrollableElement.setScrollPosition({reuseAnimation:!0,scrollTop:e.scrollTop+t*this._renderService.dimensions.css.cell.height})}scrollToLine(t,e){e&&(this._latestYDisp=t),this._scrollableElement.setScrollPosition({reuseAnimation:!e,scrollTop:t*this._renderService.dimensions.css.cell.height})}_getChangeOptions(){return{mouseWheelScrollSensitivity:this._optionsService.rawOptions.scrollSensitivity,fastScrollSensitivity:this._optionsService.rawOptions.fastScrollSensitivity,verticalScrollbarSize:this._optionsService.rawOptions.overviewRuler?.width||14}}queueSync(t){t!==void 0&&(this._latestYDisp=t),this._queuedAnimationFrame===void 0&&(this._queuedAnimationFrame=this._renderService.addRefreshCallback(()=>{this._queuedAnimationFrame=void 0,this._sync(this._latestYDisp)}))}_sync(t=this._bufferService.buffer.ydisp){!this._renderService||this._isSyncing||(this._isSyncing=!0,this._suppressOnScrollHandler=!0,this._scrollableElement.setScrollDimensions({height:this._renderService.dimensions.css.canvas.height,scrollHeight:this._renderService.dimensions.css.cell.height*this._bufferService.buffer.lines.length}),this._suppressOnScrollHandler=!1,t!==this._latestYDisp&&this._scrollableElement.setScrollPosition({scrollTop:t*this._renderService.dimensions.css.cell.height}),this._isSyncing=!1)}_handleScroll(t){if(!this._renderService||this._isHandlingScroll||this._suppressOnScrollHandler)return;this._isHandlingScroll=!0;let e=Math.round(t.scrollTop/this._renderService.dimensions.css.cell.height),i=e-this._bufferService.buffer.ydisp;i!==0&&(this._latestYDisp=e,this._onRequestScrollLines.fire(i)),this._isHandlingScroll=!1}};lu=bt([pe(2,ri),pe(3,Cn),pe(4,Kp),pe(5,us),pe(6,si),pe(7,En)],lu);var hu=class extends ze{constructor(t,e,i,n,r){super(),this._screenElement=t,this._bufferService=e,this._coreBrowserService=i,this._decorationService=n,this._renderService=r,this._decorationElements=new Map,this._altBufferIsActive=!1,this._dimensionsChanged=!1,this._container=document.createElement("div"),this._container.classList.add("xterm-decoration-container"),this._screenElement.appendChild(this._container),this._register(this._renderService.onRenderedViewportChange(()=>this._doRefreshDecorations())),this._register(this._renderService.onDimensionsChange(()=>{this._dimensionsChanged=!0,this._queueRefresh()})),this._register(this._coreBrowserService.onDprChange(()=>this._queueRefresh())),this._register(this._bufferService.buffers.onBufferActivate(()=>{this._altBufferIsActive=this._bufferService.buffer===this._bufferService.buffers.alt})),this._register(this._decorationService.onDecorationRegistered(()=>this._queueRefresh())),this._register(this._decorationService.onDecorationRemoved(s=>this._removeDecoration(s))),this._register(mt(()=>{this._container.remove(),this._decorationElements.clear()}))}_queueRefresh(){this._animationFrame===void 0&&(this._animationFrame=this._renderService.addRefreshCallback(()=>{this._doRefreshDecorations(),this._animationFrame=void 0}))}_doRefreshDecorations(){for(let t of this._decorationService.decorations)this._renderDecoration(t);this._dimensionsChanged=!1}_renderDecoration(t){this._refreshStyle(t),this._dimensionsChanged&&this._refreshXPosition(t)}_createElement(t){let e=this._coreBrowserService.mainDocument.createElement("div");e.classList.add("xterm-decoration"),e.classList.toggle("xterm-decoration-top-layer",t?.options?.layer==="top"),e.style.width=`${Math.round((t.options.width||1)*this._renderService.dimensions.css.cell.width)}px`,e.style.height=`${(t.options.height||1)*this._renderService.dimensions.css.cell.height}px`,e.style.top=`${(t.marker.line-this._bufferService.buffers.active.ydisp)*this._renderService.dimensions.css.cell.height}px`,e.style.lineHeight=`${this._renderService.dimensions.css.cell.height}px`;let i=t.options.x??0;return i&&i>this._bufferService.cols&&(e.style.display="none"),this._refreshXPosition(t,e),e}_refreshStyle(t){let e=t.marker.line-this._bufferService.buffers.active.ydisp;if(e<0||e>=this._bufferService.rows)t.element&&(t.element.style.display="none",t.onRenderEmitter.fire(t.element));else{let i=this._decorationElements.get(t);i||(i=this._createElement(t),t.element=i,this._decorationElements.set(t,i),this._container.appendChild(i),t.onDispose(()=>{this._decorationElements.delete(t),i.remove()})),i.style.display=this._altBufferIsActive?"none":"block",this._altBufferIsActive||(i.style.width=`${Math.round((t.options.width||1)*this._renderService.dimensions.css.cell.width)}px`,i.style.height=`${(t.options.height||1)*this._renderService.dimensions.css.cell.height}px`,i.style.top=`${e*this._renderService.dimensions.css.cell.height}px`,i.style.lineHeight=`${this._renderService.dimensions.css.cell.height}px`),t.onRenderEmitter.fire(i)}}_refreshXPosition(t,e=t.element){if(!e)return;let i=t.options.x??0;(t.options.anchor||"left")==="right"?e.style.right=i?`${i*this._renderService.dimensions.css.cell.width}px`:"":e.style.left=i?`${i*this._renderService.dimensions.css.cell.width}px`:""}_removeDecoration(t){this._decorationElements.get(t)?.remove(),this._decorationElements.delete(t),t.dispose()}};hu=bt([pe(1,ri),pe(2,Cn),pe(3,go),pe(4,En)],hu);var Ub=class{constructor(){this._zones=[],this._zonePool=[],this._zonePoolIndex=0,this._linePadding={full:0,left:0,center:0,right:0}}get zones(){return this._zonePool.length=Math.min(this._zonePool.length,this._zones.length),this._zones}clear(){this._zones.length=0,this._zonePoolIndex=0}addDecoration(t){if(t.options.overviewRulerOptions){for(let e of this._zones)if(e.color===t.options.overviewRulerOptions.color&&e.position===t.options.overviewRulerOptions.position){if(this._lineIntersectsZone(e,t.marker.line))return;if(this._lineAdjacentToZone(e,t.marker.line,t.options.overviewRulerOptions.position)){this._addLineToZone(e,t.marker.line);return}}if(this._zonePoolIndex<this._zonePool.length){this._zonePool[this._zonePoolIndex].color=t.options.overviewRulerOptions.color,this._zonePool[this._zonePoolIndex].position=t.options.overviewRulerOptions.position,this._zonePool[this._zonePoolIndex].startBufferLine=t.marker.line,this._zonePool[this._zonePoolIndex].endBufferLine=t.marker.line,this._zones.push(this._zonePool[this._zonePoolIndex++]);return}this._zones.push({color:t.options.overviewRulerOptions.color,position:t.options.overviewRulerOptions.position,startBufferLine:t.marker.line,endBufferLine:t.marker.line}),this._zonePool.push(this._zones[this._zones.length-1]),this._zonePoolIndex++}}setPadding(t){this._linePadding=t}_lineIntersectsZone(t,e){return e>=t.startBufferLine&&e<=t.endBufferLine}_lineAdjacentToZone(t,e,i){return e>=t.startBufferLine-this._linePadding[i||"full"]&&e<=t.endBufferLine+this._linePadding[i||"full"]}_addLineToZone(t,e){t.startBufferLine=Math.min(t.startBufferLine,e),t.endBufferLine=Math.max(t.endBufferLine,e)}},tn={full:0,left:0,center:0,right:0},qn={full:0,left:0,center:0,right:0},Js={full:0,left:0,center:0,right:0},Hl=class extends ze{constructor(t,e,i,n,r,s,o,a){super(),this._viewportElement=t,this._screenElement=e,this._bufferService=i,this._decorationService=n,this._renderService=r,this._optionsService=s,this._themeService=o,this._coreBrowserService=a,this._colorZoneStore=new Ub,this._shouldUpdateDimensions=!0,this._shouldUpdateAnchor=!0,this._lastKnownBufferLength=0,this._canvas=this._coreBrowserService.mainDocument.createElement("canvas"),this._canvas.classList.add("xterm-decoration-overview-ruler"),this._refreshCanvasDimensions(),this._viewportElement.parentElement?.insertBefore(this._canvas,this._viewportElement),this._register(mt(()=>this._canvas?.remove()));let h=this._canvas.getContext("2d");if(h)this._ctx=h;else throw new Error("Ctx cannot be null");this._register(this._decorationService.onDecorationRegistered(()=>this._queueRefresh(void 0,!0))),this._register(this._decorationService.onDecorationRemoved(()=>this._queueRefresh(void 0,!0))),this._register(this._renderService.onRenderedViewportChange(()=>this._queueRefresh())),this._register(this._bufferService.buffers.onBufferActivate(()=>{this._canvas.style.display=this._bufferService.buffer===this._bufferService.buffers.alt?"none":"block"})),this._register(this._bufferService.onScroll(()=>{this._lastKnownBufferLength!==this._bufferService.buffers.normal.lines.length&&(this._refreshDrawHeightConstants(),this._refreshColorZonePadding())})),this._register(this._renderService.onRender(()=>{(!this._containerHeight||this._containerHeight!==this._screenElement.clientHeight)&&(this._queueRefresh(!0),this._containerHeight=this._screenElement.clientHeight)})),this._register(this._coreBrowserService.onDprChange(()=>this._queueRefresh(!0))),this._register(this._optionsService.onSpecificOptionChange("overviewRuler",()=>this._queueRefresh(!0))),this._register(this._themeService.onChangeColors(()=>this._queueRefresh())),this._queueRefresh(!0)}get _width(){return this._optionsService.options.overviewRuler?.width||0}_refreshDrawConstants(){let t=Math.floor((this._canvas.width-1)/3),e=Math.ceil((this._canvas.width-1)/3);qn.full=this._canvas.width,qn.left=t,qn.center=e,qn.right=t,this._refreshDrawHeightConstants(),Js.full=1,Js.left=1,Js.center=1+qn.left,Js.right=1+qn.left+qn.center}_refreshDrawHeightConstants(){tn.full=Math.round(2*this._coreBrowserService.dpr);let t=this._canvas.height/this._bufferService.buffer.lines.length,e=Math.round(Math.max(Math.min(t,12),6)*this._coreBrowserService.dpr);tn.left=e,tn.center=e,tn.right=e}_refreshColorZonePadding(){this._colorZoneStore.setPadding({full:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*tn.full),left:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*tn.left),center:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*tn.center),right:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*tn.right)}),this._lastKnownBufferLength=this._bufferService.buffers.normal.lines.length}_refreshCanvasDimensions(){this._canvas.style.width=`${this._width}px`,this._canvas.width=Math.round(this._width*this._coreBrowserService.dpr),this._canvas.style.height=`${this._screenElement.clientHeight}px`,this._canvas.height=Math.round(this._screenElement.clientHeight*this._coreBrowserService.dpr),this._refreshDrawConstants(),this._refreshColorZonePadding()}_refreshDecorations(){this._shouldUpdateDimensions&&this._refreshCanvasDimensions(),this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._colorZoneStore.clear();for(let e of this._decorationService.decorations)this._colorZoneStore.addDecoration(e);this._ctx.lineWidth=1,this._renderRulerOutline();let t=this._colorZoneStore.zones;for(let e of t)e.position!=="full"&&this._renderColorZone(e);for(let e of t)e.position==="full"&&this._renderColorZone(e);this._shouldUpdateDimensions=!1,this._shouldUpdateAnchor=!1}_renderRulerOutline(){this._ctx.fillStyle=this._themeService.colors.overviewRulerBorder.css,this._ctx.fillRect(0,0,1,this._canvas.height),this._optionsService.rawOptions.overviewRuler.showTopBorder&&this._ctx.fillRect(1,0,this._canvas.width-1,1),this._optionsService.rawOptions.overviewRuler.showBottomBorder&&this._ctx.fillRect(1,this._canvas.height-1,this._canvas.width-1,this._canvas.height)}_renderColorZone(t){this._ctx.fillStyle=t.color,this._ctx.fillRect(Js[t.position||"full"],Math.round((this._canvas.height-1)*(t.startBufferLine/this._bufferService.buffers.active.lines.length)-tn[t.position||"full"]/2),qn[t.position||"full"],Math.round((this._canvas.height-1)*((t.endBufferLine-t.startBufferLine)/this._bufferService.buffers.active.lines.length)+tn[t.position||"full"]))}_queueRefresh(t,e){this._shouldUpdateDimensions=t||this._shouldUpdateDimensions,this._shouldUpdateAnchor=e||this._shouldUpdateAnchor,this._animationFrame===void 0&&(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame(()=>{this._refreshDecorations(),this._animationFrame=void 0}))}};Hl=bt([pe(2,ri),pe(3,go),pe(4,En),pe(5,si),pe(6,us),pe(7,Cn)],Hl);var K;(t=>(t.NUL="\0",t.SOH="",t.STX="",t.ETX="",t.EOT="",t.ENQ="",t.ACK="",t.BEL="\x07",t.BS="\b",t.HT="	",t.LF=`
`,t.VT="\v",t.FF="\f",t.CR="\r",t.SO="",t.SI="",t.DLE="",t.DC1="",t.DC2="",t.DC3="",t.DC4="",t.NAK="",t.SYN="",t.ETB="",t.CAN="",t.EM="",t.SUB="",t.ESC="\x1B",t.FS="",t.GS="",t.RS="",t.US="",t.SP=" ",t.DEL="\x7F"))(K||={});var Nl;(t=>(t.PAD="\x80",t.HOP="\x81",t.BPH="\x82",t.NBH="\x83",t.IND="\x84",t.NEL="\x85",t.SSA="\x86",t.ESA="\x87",t.HTS="\x88",t.HTJ="\x89",t.VTS="\x8A",t.PLD="\x8B",t.PLU="\x8C",t.RI="\x8D",t.SS2="\x8E",t.SS3="\x8F",t.DCS="\x90",t.PU1="\x91",t.PU2="\x92",t.STS="\x93",t.CCH="\x94",t.MW="\x95",t.SPA="\x96",t.EPA="\x97",t.SOS="\x98",t.SGCI="\x99",t.SCI="\x9A",t.CSI="\x9B",t.ST="\x9C",t.OSC="\x9D",t.PM="\x9E",t.APC="\x9F"))(Nl||={});var Cm;(t=>t.ST=`${K.ESC}\\`)(Cm||={});var cu=class{constructor(t,e,i,n,r,s){this._textarea=t,this._compositionView=e,this._bufferService=i,this._optionsService=n,this._coreService=r,this._renderService=s,this._isComposing=!1,this._isSendingComposition=!1,this._compositionPosition={start:0,end:0},this._dataAlreadySent=""}get isComposing(){return this._isComposing}compositionstart(){this._isComposing=!0,this._compositionPosition.start=this._textarea.value.length,this._compositionView.textContent="",this._dataAlreadySent="",this._compositionView.classList.add("active")}compositionupdate(t){this._compositionView.textContent=t.data,this.updateCompositionElements(),setTimeout(()=>{this._compositionPosition.end=this._textarea.value.length},0)}compositionend(){this._finalizeComposition(!0)}keydown(t){if(this._isComposing||this._isSendingComposition){if(t.keyCode===20||t.keyCode===229||t.keyCode===16||t.keyCode===17||t.keyCode===18)return!1;this._finalizeComposition(!1)}return t.keyCode===229?(this._handleAnyTextareaChanges(),!1):!0}_finalizeComposition(t){if(this._compositionView.classList.remove("active"),this._isComposing=!1,t){let e={start:this._compositionPosition.start,end:this._compositionPosition.end};this._isSendingComposition=!0,setTimeout(()=>{if(this._isSendingComposition){this._isSendingComposition=!1;let i;e.start+=this._dataAlreadySent.length,this._isComposing?i=this._textarea.value.substring(e.start,this._compositionPosition.start):i=this._textarea.value.substring(e.start),i.length>0&&this._coreService.triggerDataEvent(i,!0)}},0)}else{this._isSendingComposition=!1;let e=this._textarea.value.substring(this._compositionPosition.start,this._compositionPosition.end);this._coreService.triggerDataEvent(e,!0)}}_handleAnyTextareaChanges(){let t=this._textarea.value;setTimeout(()=>{if(!this._isComposing){let e=this._textarea.value,i=e.replace(t,"");this._dataAlreadySent=i,e.length>t.length?this._coreService.triggerDataEvent(i,!0):e.length<t.length?this._coreService.triggerDataEvent(`${K.DEL}`,!0):e.length===t.length&&e!==t&&this._coreService.triggerDataEvent(e,!0)}},0)}updateCompositionElements(t){if(this._isComposing){if(this._bufferService.buffer.isCursorInViewport){let e=Math.min(this._bufferService.buffer.x,this._bufferService.cols-1),i=this._renderService.dimensions.css.cell.height,n=this._bufferService.buffer.y*this._renderService.dimensions.css.cell.height,r=e*this._renderService.dimensions.css.cell.width;this._compositionView.style.left=r+"px",this._compositionView.style.top=n+"px",this._compositionView.style.height=i+"px",this._compositionView.style.lineHeight=i+"px",this._compositionView.style.fontFamily=this._optionsService.rawOptions.fontFamily,this._compositionView.style.fontSize=this._optionsService.rawOptions.fontSize+"px";let s=this._compositionView.getBoundingClientRect();this._textarea.style.left=r+"px",this._textarea.style.top=n+"px",this._textarea.style.width=Math.max(s.width,1)+"px",this._textarea.style.height=Math.max(s.height,1)+"px",this._textarea.style.lineHeight=s.height+"px"}t||setTimeout(()=>this.updateCompositionElements(!0),0)}}};cu=bt([pe(2,ri),pe(3,si),pe(4,Ar),pe(5,En)],cu);var zt=0,Ht=0,Vt=0,xt=0,fp={css:"#00000000",rgba:0},Pt;(t=>{function e(r,s,o,a){return a!==void 0?`#${xr(r)}${xr(s)}${xr(o)}${xr(a)}`:`#${xr(r)}${xr(s)}${xr(o)}`}t.toCss=e;function i(r,s,o,a=255){return(r<<24|s<<16|o<<8|a)>>>0}t.toRgba=i;function n(r,s,o,a){return{css:t.toCss(r,s,o,a),rgba:t.toRgba(r,s,o,a)}}t.toColor=n})(Pt||={});var pt;(t=>{function e(h,l){if(xt=(l.rgba&255)/255,xt===1)return{css:l.css,rgba:l.rgba};let u=l.rgba>>24&255,c=l.rgba>>16&255,d=l.rgba>>8&255,f=h.rgba>>24&255,m=h.rgba>>16&255,g=h.rgba>>8&255;zt=f+Math.round((u-f)*xt),Ht=m+Math.round((c-m)*xt),Vt=g+Math.round((d-g)*xt);let _=Pt.toCss(zt,Ht,Vt),p=Pt.toRgba(zt,Ht,Vt);return{css:_,rgba:p}}t.blend=e;function i(h){return(h.rgba&255)===255}t.isOpaque=i;function n(h,l,u){let c=Bl.ensureContrastRatio(h.rgba,l.rgba,u);if(c)return Pt.toColor(c>>24&255,c>>16&255,c>>8&255)}t.ensureContrastRatio=n;function r(h){let l=(h.rgba|255)>>>0;return[zt,Ht,Vt]=Bl.toChannels(l),{css:Pt.toCss(zt,Ht,Vt),rgba:l}}t.opaque=r;function s(h,l){return xt=Math.round(l*255),[zt,Ht,Vt]=Bl.toChannels(h.rgba),{css:Pt.toCss(zt,Ht,Vt,xt),rgba:Pt.toRgba(zt,Ht,Vt,xt)}}t.opacity=s;function o(h,l){return xt=h.rgba&255,s(h,xt*l/255)}t.multiplyOpacity=o;function a(h){return[h.rgba>>24&255,h.rgba>>16&255,h.rgba>>8&255]}t.toColorRGB=a})(pt||={});var vt;(t=>{let e,i;try{let r=document.createElement("canvas");r.width=1,r.height=1;let s=r.getContext("2d",{willReadFrequently:!0});s&&(e=s,e.globalCompositeOperation="copy",i=e.createLinearGradient(0,0,1,1))}catch{}function n(r){if(r.match(/#[\da-f]{3,8}/i))switch(r.length){case 4:return zt=parseInt(r.slice(1,2).repeat(2),16),Ht=parseInt(r.slice(2,3).repeat(2),16),Vt=parseInt(r.slice(3,4).repeat(2),16),Pt.toColor(zt,Ht,Vt);case 5:return zt=parseInt(r.slice(1,2).repeat(2),16),Ht=parseInt(r.slice(2,3).repeat(2),16),Vt=parseInt(r.slice(3,4).repeat(2),16),xt=parseInt(r.slice(4,5).repeat(2),16),Pt.toColor(zt,Ht,Vt,xt);case 7:return{css:r,rgba:(parseInt(r.slice(1),16)<<8|255)>>>0};case 9:return{css:r,rgba:parseInt(r.slice(1),16)>>>0}}let s=r.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);if(s)return zt=parseInt(s[1]),Ht=parseInt(s[2]),Vt=parseInt(s[3]),xt=Math.round((s[5]===void 0?1:parseFloat(s[5]))*255),Pt.toColor(zt,Ht,Vt,xt);if(!e||!i)throw new Error("css.toColor: Unsupported css format");if(e.fillStyle=i,e.fillStyle=r,typeof e.fillStyle!="string")throw new Error("css.toColor: Unsupported css format");if(e.fillRect(0,0,1,1),[zt,Ht,Vt,xt]=e.getImageData(0,0,1,1).data,xt!==255)throw new Error("css.toColor: Unsupported css format");return{rgba:Pt.toRgba(zt,Ht,Vt,xt),css:r}}t.toColor=n})(vt||={});var ni;(t=>{function e(n){return i(n>>16&255,n>>8&255,n&255)}t.relativeLuminance=e;function i(n,r,s){let o=n/255,a=r/255,h=s/255,l=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),u=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),c=h<=.03928?h/12.92:Math.pow((h+.055)/1.055,2.4);return l*.2126+u*.7152+c*.0722}t.relativeLuminance2=i})(ni||={});var Bl;(t=>{function e(o,a){if(xt=(a&255)/255,xt===1)return a;let h=a>>24&255,l=a>>16&255,u=a>>8&255,c=o>>24&255,d=o>>16&255,f=o>>8&255;return zt=c+Math.round((h-c)*xt),Ht=d+Math.round((l-d)*xt),Vt=f+Math.round((u-f)*xt),Pt.toRgba(zt,Ht,Vt)}t.blend=e;function i(o,a,h){let l=ni.relativeLuminance(o>>8),u=ni.relativeLuminance(a>>8);if(xn(l,u)<h){if(u<l){let f=n(o,a,h),m=xn(l,ni.relativeLuminance(f>>8));if(m<h){let g=r(o,a,h),_=xn(l,ni.relativeLuminance(g>>8));return m>_?f:g}return f}let c=r(o,a,h),d=xn(l,ni.relativeLuminance(c>>8));if(d<h){let f=n(o,a,h),m=xn(l,ni.relativeLuminance(f>>8));return d>m?c:f}return c}}t.ensureContrastRatio=i;function n(o,a,h){let l=o>>24&255,u=o>>16&255,c=o>>8&255,d=a>>24&255,f=a>>16&255,m=a>>8&255,g=xn(ni.relativeLuminance2(d,f,m),ni.relativeLuminance2(l,u,c));for(;g<h&&(d>0||f>0||m>0);)d-=Math.max(0,Math.ceil(d*.1)),f-=Math.max(0,Math.ceil(f*.1)),m-=Math.max(0,Math.ceil(m*.1)),g=xn(ni.relativeLuminance2(d,f,m),ni.relativeLuminance2(l,u,c));return(d<<24|f<<16|m<<8|255)>>>0}t.reduceLuminance=n;function r(o,a,h){let l=o>>24&255,u=o>>16&255,c=o>>8&255,d=a>>24&255,f=a>>16&255,m=a>>8&255,g=xn(ni.relativeLuminance2(d,f,m),ni.relativeLuminance2(l,u,c));for(;g<h&&(d<255||f<255||m<255);)d=Math.min(255,d+Math.ceil((255-d)*.1)),f=Math.min(255,f+Math.ceil((255-f)*.1)),m=Math.min(255,m+Math.ceil((255-m)*.1)),g=xn(ni.relativeLuminance2(d,f,m),ni.relativeLuminance2(l,u,c));return(d<<24|f<<16|m<<8|255)>>>0}t.increaseLuminance=r;function s(o){return[o>>24&255,o>>16&255,o>>8&255,o&255]}t.toChannels=s})(Bl||={});function xr(t){let e=t.toString(16);return e.length<2?"0"+e:e}function xn(t,e){return t<e?(e+.05)/(t+.05):(t+.05)/(e+.05)}var zb=class extends _o{constructor(t,e,i){super(),this.content=0,this.combinedData="",this.fg=t.fg,this.bg=t.bg,this.combinedData=e,this._width=i}isCombined(){return 2097152}getWidth(){return this._width}getChars(){return this.combinedData}getCode(){return 2097151}setFromCharData(t){throw new Error("not implemented")}getAsCharData(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]}},Vl=class{constructor(t){this._bufferService=t,this._characterJoiners=[],this._nextCharacterJoinerId=0,this._workCell=new Ii}register(t){let e={id:this._nextCharacterJoinerId++,handler:t};return this._characterJoiners.push(e),e.id}deregister(t){for(let e=0;e<this._characterJoiners.length;e++)if(this._characterJoiners[e].id===t)return this._characterJoiners.splice(e,1),!0;return!1}getJoinedCharacters(t){if(this._characterJoiners.length===0)return[];let e=this._bufferService.buffer.lines.get(t);if(!e||e.length===0)return[];let i=[],n=e.translateToString(!0),r=0,s=0,o=0,a=e.getFg(0),h=e.getBg(0);for(let l=0;l<e.getTrimmedLength();l++)if(e.loadCell(l,this._workCell),this._workCell.getWidth()!==0){if(this._workCell.fg!==a||this._workCell.bg!==h){if(l-r>1){let u=this._getJoinedRanges(n,o,s,e,r);for(let c=0;c<u.length;c++)i.push(u[c])}r=l,o=s,a=this._workCell.fg,h=this._workCell.bg}s+=this._workCell.getChars().length||Zn.length}if(this._bufferService.cols-r>1){let l=this._getJoinedRanges(n,o,s,e,r);for(let u=0;u<l.length;u++)i.push(l[u])}return i}_getJoinedRanges(t,e,i,n,r){let s=t.substring(e,i),o=[];try{o=this._characterJoiners[0].handler(s)}catch(a){console.error(a)}for(let a=1;a<this._characterJoiners.length;a++)try{let h=this._characterJoiners[a].handler(s);for(let l=0;l<h.length;l++)Vl._mergeRanges(o,h[l])}catch(h){console.error(h)}return this._stringRangesToCellRanges(o,n,r),o}_stringRangesToCellRanges(t,e,i){let n=0,r=!1,s=0,o=t[n];if(o){for(let a=i;a<this._bufferService.cols;a++){let h=e.getWidth(a),l=e.getString(a).length||Zn.length;if(h!==0){if(!r&&o[0]<=s&&(o[0]=a,r=!0),o[1]<=s){if(o[1]=a,o=t[++n],!o)break;o[0]<=s?(o[0]=a,r=!0):r=!1}s+=l}}o&&(o[1]=this._bufferService.cols)}}static _mergeRanges(t,e){let i=!1;for(let n=0;n<t.length;n++){let r=t[n];if(i){if(e[1]<=r[0])return t[n-1][1]=e[1],t;if(e[1]<=r[1])return t[n-1][1]=Math.max(e[1],r[1]),t.splice(n,1),t;t.splice(n,1),n--}else{if(e[1]<=r[0])return t.splice(n,0,e),t;if(e[1]<=r[1])return r[0]=Math.min(e[0],r[0]),t;e[0]<r[1]&&(r[0]=Math.min(e[0],r[0]),i=!0);continue}}return i?t[t.length-1][1]=e[1]:t.push(e),t}};Vl=bt([pe(0,ri)],Vl);function Hb(t){return 57508<=t&&t<=57558}function Vb(t){return 9472<=t&&t<=9631}function Wb(t){return Hb(t)||Vb(t)}function Gb(){return{css:{canvas:wl(),cell:wl()},device:{canvas:wl(),cell:wl(),char:{width:0,height:0,left:0,top:0}}}}function wl(){return{width:0,height:0}}var uu=class{constructor(t,e,i,n,r,s,o){this._document=t,this._characterJoinerService=e,this._optionsService=i,this._coreBrowserService=n,this._coreService=r,this._decorationService=s,this._themeService=o,this._workCell=new Ii,this._columnSelectMode=!1,this.defaultSpacing=0}handleSelectionChanged(t,e,i){this._selectionStart=t,this._selectionEnd=e,this._columnSelectMode=i}createRow(t,e,i,n,r,s,o,a,h,l,u){let c=[],d=this._characterJoinerService.getJoinedCharacters(e),f=this._themeService.colors,m=t.getNoBgTrimmedLength();i&&m<s+1&&(m=s+1);let g,_=0,p="",b=0,w=0,x=0,E=0,T=!1,A=0,H=!1,y=0,M=0,P=[],X=l!==-1&&u!==-1;for(let R=0;R<m;R++){t.loadCell(R,this._workCell);let N=this._workCell.getWidth();if(N===0)continue;let k=!1,L=R>=M,D=R,O=this._workCell;if(d.length>0&&R===d[0][0]&&L){let Se=d.shift(),Je=this._isCellInSelection(Se[0],e);for(b=Se[0]+1;b<Se[1];b++)L&&=Je===this._isCellInSelection(b,e);L&&=!i||s<Se[0]||s>=Se[1],L?(k=!0,O=new zb(this._workCell,t.translateToString(!0,Se[0],Se[1]),Se[1]-Se[0]),D=Se[1]-1,N=O.getWidth()):M=Se[1]}let J=this._isCellInSelection(R,e),ee=i&&R===s,ne=X&&R>=l&&R<=u,Ie=!1;this._decorationService.forEachDecorationAtCell(R,e,void 0,Se=>{Ie=!0});let Le=O.getChars()||Zn;if(Le===" "&&(O.isUnderline()||O.isOverline())&&(Le="\xA0"),y=N*a-h.get(Le,O.isBold(),O.isItalic()),!g)g=this._document.createElement("span");else if(_&&(J&&H||!J&&!H&&O.bg===w)&&(J&&H&&f.selectionForeground||O.fg===x)&&O.extended.ext===E&&ne===T&&y===A&&!ee&&!k&&!Ie&&L){O.isInvisible()?p+=Zn:p+=Le,_++;continue}else _&&(g.textContent=p),g=this._document.createElement("span"),_=0,p="";if(w=O.bg,x=O.fg,E=O.extended.ext,T=ne,A=y,H=J,k&&s>=R&&s<=D&&(s=R),!this._coreService.isCursorHidden&&ee&&this._coreService.isCursorInitialized){if(P.push("xterm-cursor"),this._coreBrowserService.isFocused)o&&P.push("xterm-cursor-blink"),P.push(n==="bar"?"xterm-cursor-bar":n==="underline"?"xterm-cursor-underline":"xterm-cursor-block");else if(r)switch(r){case"outline":P.push("xterm-cursor-outline");break;case"block":P.push("xterm-cursor-block");break;case"bar":P.push("xterm-cursor-bar");break;case"underline":P.push("xterm-cursor-underline");break;default:break}}if(O.isBold()&&P.push("xterm-bold"),O.isItalic()&&P.push("xterm-italic"),O.isDim()&&P.push("xterm-dim"),O.isInvisible()?p=Zn:p=O.getChars()||Zn,O.isUnderline()&&(P.push(`xterm-underline-${O.extended.underlineStyle}`),p===" "&&(p="\xA0"),!O.isUnderlineColorDefault()))if(O.isUnderlineColorRGB())g.style.textDecorationColor=`rgb(${_o.toColorRGB(O.getUnderlineColor()).join(",")})`;else{let Se=O.getUnderlineColor();this._optionsService.rawOptions.drawBoldTextInBrightColors&&O.isBold()&&Se<8&&(Se+=8),g.style.textDecorationColor=f.ansi[Se].css}O.isOverline()&&(P.push("xterm-overline"),p===" "&&(p="\xA0")),O.isStrikethrough()&&P.push("xterm-strikethrough"),ne&&(g.style.textDecoration="underline");let Oe=O.getFgColor(),Ke=O.getFgColorMode(),$=O.getBgColor(),j=O.getBgColorMode(),me=!!O.isInverse();if(me){let Se=Oe;Oe=$,$=Se;let Je=Ke;Ke=j,j=Je}let Pe,ve,Xe=!1;this._decorationService.forEachDecorationAtCell(R,e,void 0,Se=>{Se.options.layer!=="top"&&Xe||(Se.backgroundColorRGB&&(j=50331648,$=Se.backgroundColorRGB.rgba>>8&16777215,Pe=Se.backgroundColorRGB),Se.foregroundColorRGB&&(Ke=50331648,Oe=Se.foregroundColorRGB.rgba>>8&16777215,ve=Se.foregroundColorRGB),Xe=Se.options.layer==="top")}),!Xe&&J&&(Pe=this._coreBrowserService.isFocused?f.selectionBackgroundOpaque:f.selectionInactiveBackgroundOpaque,$=Pe.rgba>>8&16777215,j=50331648,Xe=!0,f.selectionForeground&&(Ke=50331648,Oe=f.selectionForeground.rgba>>8&16777215,ve=f.selectionForeground)),Xe&&P.push("xterm-decoration-top");let at;switch(j){case 16777216:case 33554432:at=f.ansi[$],P.push(`xterm-bg-${$}`);break;case 50331648:at=Pt.toColor($>>16,$>>8&255,$&255),this._addStyle(g,`background-color:#${pp(($>>>0).toString(16),"0",6)}`);break;default:me?(at=f.foreground,P.push("xterm-bg-257")):at=f.background}switch(Pe||O.isDim()&&(Pe=pt.multiplyOpacity(at,.5)),Ke){case 16777216:case 33554432:O.isBold()&&Oe<8&&this._optionsService.rawOptions.drawBoldTextInBrightColors&&(Oe+=8),this._applyMinimumContrast(g,at,f.ansi[Oe],O,Pe,void 0)||P.push(`xterm-fg-${Oe}`);break;case 50331648:let Se=Pt.toColor(Oe>>16&255,Oe>>8&255,Oe&255);this._applyMinimumContrast(g,at,Se,O,Pe,ve)||this._addStyle(g,`color:#${pp(Oe.toString(16),"0",6)}`);break;default:this._applyMinimumContrast(g,at,f.foreground,O,Pe,ve)||me&&P.push("xterm-fg-257")}P.length&&(g.className=P.join(" "),P.length=0),!ee&&!k&&!Ie&&L?_++:g.textContent=p,y!==this.defaultSpacing&&(g.style.letterSpacing=`${y}px`),c.push(g),R=D}return g&&_&&(g.textContent=p),c}_applyMinimumContrast(t,e,i,n,r,s){if(this._optionsService.rawOptions.minimumContrastRatio===1||Wb(n.getCode()))return!1;let o=this._getContrastCache(n),a;if(!r&&!s&&(a=o.getColor(e.rgba,i.rgba)),a===void 0){let h=this._optionsService.rawOptions.minimumContrastRatio/(n.isDim()?2:1);a=pt.ensureContrastRatio(r||e,s||i,h),o.setColor((r||e).rgba,(s||i).rgba,a??null)}return a?(this._addStyle(t,`color:${a.css}`),!0):!1}_getContrastCache(t){return t.isDim()?this._themeService.colors.halfContrastCache:this._themeService.colors.contrastCache}_addStyle(t,e){t.setAttribute("style",`${t.getAttribute("style")||""}${e};`)}_isCellInSelection(t,e){let i=this._selectionStart,n=this._selectionEnd;return!i||!n?!1:this._columnSelectMode?i[0]<=n[0]?t>=i[0]&&e>=i[1]&&t<n[0]&&e<=n[1]:t<i[0]&&e>=i[1]&&t>=n[0]&&e<=n[1]:e>i[1]&&e<n[1]||i[1]===n[1]&&e===i[1]&&t>=i[0]&&t<n[0]||i[1]<n[1]&&e===n[1]&&t<n[0]||i[1]<n[1]&&e===i[1]&&t>=i[0]}};uu=bt([pe(1,jp),pe(2,si),pe(3,Cn),pe(4,Ar),pe(5,go),pe(6,us)],uu);function pp(t,e,i){for(;t.length<i;)t=e+t;return t}var Xb=class{constructor(t,e){this._flat=new Float32Array(256),this._font="",this._fontSize=0,this._weight="normal",this._weightBold="bold",this._measureElements=[],this._container=t.createElement("div"),this._container.classList.add("xterm-width-cache-measure-container"),this._container.setAttribute("aria-hidden","true"),this._container.style.whiteSpace="pre",this._container.style.fontKerning="none";let i=t.createElement("span");i.classList.add("xterm-char-measure-element");let n=t.createElement("span");n.classList.add("xterm-char-measure-element"),n.style.fontWeight="bold";let r=t.createElement("span");r.classList.add("xterm-char-measure-element"),r.style.fontStyle="italic";let s=t.createElement("span");s.classList.add("xterm-char-measure-element"),s.style.fontWeight="bold",s.style.fontStyle="italic",this._measureElements=[i,n,r,s],this._container.appendChild(i),this._container.appendChild(n),this._container.appendChild(r),this._container.appendChild(s),e.appendChild(this._container),this.clear()}dispose(){this._container.remove(),this._measureElements.length=0,this._holey=void 0}clear(){this._flat.fill(-9999),this._holey=new Map}setFont(t,e,i,n){t===this._font&&e===this._fontSize&&i===this._weight&&n===this._weightBold||(this._font=t,this._fontSize=e,this._weight=i,this._weightBold=n,this._container.style.fontFamily=this._font,this._container.style.fontSize=`${this._fontSize}px`,this._measureElements[0].style.fontWeight=`${i}`,this._measureElements[1].style.fontWeight=`${n}`,this._measureElements[2].style.fontWeight=`${i}`,this._measureElements[3].style.fontWeight=`${n}`,this.clear())}get(t,e,i){let n=0;if(!e&&!i&&t.length===1&&(n=t.charCodeAt(0))<256){if(this._flat[n]!==-9999)return this._flat[n];let o=this._measure(t,0);return o>0&&(this._flat[n]=o),o}let r=t;e&&(r+="B"),i&&(r+="I");let s=this._holey.get(r);if(s===void 0){let o=0;e&&(o|=1),i&&(o|=2),s=this._measure(t,o),s>0&&this._holey.set(r,s)}return s}_measure(t,e){let i=this._measureElements[e];return i.textContent=t.repeat(32),i.offsetWidth/32}},$b=class{constructor(){this.clear()}clear(){this.hasSelection=!1,this.columnSelectMode=!1,this.viewportStartRow=0,this.viewportEndRow=0,this.viewportCappedStartRow=0,this.viewportCappedEndRow=0,this.startCol=0,this.endCol=0,this.selectionStart=void 0,this.selectionEnd=void 0}update(t,e,i,n=!1){if(this.selectionStart=e,this.selectionEnd=i,!e||!i||e[0]===i[0]&&e[1]===i[1]){this.clear();return}let r=t.buffers.active.ydisp,s=e[1]-r,o=i[1]-r,a=Math.max(s,0),h=Math.min(o,t.rows-1);if(a>=t.rows||h<0){this.clear();return}this.hasSelection=!0,this.columnSelectMode=n,this.viewportStartRow=s,this.viewportEndRow=o,this.viewportCappedStartRow=a,this.viewportCappedEndRow=h,this.startCol=e[0],this.endCol=i[0]}isCellSelected(t,e,i){return this.hasSelection?(i-=t.buffer.active.viewportY,this.columnSelectMode?this.startCol<=this.endCol?e>=this.startCol&&i>=this.viewportCappedStartRow&&e<this.endCol&&i<=this.viewportCappedEndRow:e<this.startCol&&i>=this.viewportCappedStartRow&&e>=this.endCol&&i<=this.viewportCappedEndRow:i>this.viewportStartRow&&i<this.viewportEndRow||this.viewportStartRow===this.viewportEndRow&&i===this.viewportStartRow&&e>=this.startCol&&e<this.endCol||this.viewportStartRow<this.viewportEndRow&&i===this.viewportEndRow&&e<this.endCol||this.viewportStartRow<this.viewportEndRow&&i===this.viewportStartRow&&e>=this.startCol):!1}};function qb(){return new $b}var Nc="xterm-dom-renderer-owner-",Ai="xterm-rows",Ml="xterm-fg-",mp="xterm-bg-",js="xterm-focus",Cl="xterm-selection",Yb=1,du=class extends ze{constructor(t,e,i,n,r,s,o,a,h,l,u,c,d,f){super(),this._terminal=t,this._document=e,this._element=i,this._screenElement=n,this._viewportElement=r,this._helperContainer=s,this._linkifier2=o,this._charSizeService=h,this._optionsService=l,this._bufferService=u,this._coreService=c,this._coreBrowserService=d,this._themeService=f,this._terminalClass=Yb++,this._rowElements=[],this._selectionRenderModel=qb(),this.onRequestRedraw=this._register(new se).event,this._rowContainer=this._document.createElement("div"),this._rowContainer.classList.add(Ai),this._rowContainer.style.lineHeight="normal",this._rowContainer.setAttribute("aria-hidden","true"),this._refreshRowElements(this._bufferService.cols,this._bufferService.rows),this._selectionContainer=this._document.createElement("div"),this._selectionContainer.classList.add(Cl),this._selectionContainer.setAttribute("aria-hidden","true"),this.dimensions=Gb(),this._updateDimensions(),this._register(this._optionsService.onOptionChange(()=>this._handleOptionsChanged())),this._register(this._themeService.onChangeColors(m=>this._injectCss(m))),this._injectCss(this._themeService.colors),this._rowFactory=a.createInstance(uu,document),this._element.classList.add(Nc+this._terminalClass),this._screenElement.appendChild(this._rowContainer),this._screenElement.appendChild(this._selectionContainer),this._register(this._linkifier2.onShowLinkUnderline(m=>this._handleLinkHover(m))),this._register(this._linkifier2.onHideLinkUnderline(m=>this._handleLinkLeave(m))),this._register(mt(()=>{this._element.classList.remove(Nc+this._terminalClass),this._rowContainer.remove(),this._selectionContainer.remove(),this._widthCache.dispose(),this._themeStyleElement.remove(),this._dimensionsStyleElement.remove()})),this._widthCache=new Xb(this._document,this._helperContainer),this._widthCache.setFont(this._optionsService.rawOptions.fontFamily,this._optionsService.rawOptions.fontSize,this._optionsService.rawOptions.fontWeight,this._optionsService.rawOptions.fontWeightBold),this._setDefaultSpacing()}_updateDimensions(){let t=this._coreBrowserService.dpr;this.dimensions.device.char.width=this._charSizeService.width*t,this.dimensions.device.char.height=Math.ceil(this._charSizeService.height*t),this.dimensions.device.cell.width=this.dimensions.device.char.width+Math.round(this._optionsService.rawOptions.letterSpacing),this.dimensions.device.cell.height=Math.floor(this.dimensions.device.char.height*this._optionsService.rawOptions.lineHeight),this.dimensions.device.char.left=0,this.dimensions.device.char.top=0,this.dimensions.device.canvas.width=this.dimensions.device.cell.width*this._bufferService.cols,this.dimensions.device.canvas.height=this.dimensions.device.cell.height*this._bufferService.rows,this.dimensions.css.canvas.width=Math.round(this.dimensions.device.canvas.width/t),this.dimensions.css.canvas.height=Math.round(this.dimensions.device.canvas.height/t),this.dimensions.css.cell.width=this.dimensions.css.canvas.width/this._bufferService.cols,this.dimensions.css.cell.height=this.dimensions.css.canvas.height/this._bufferService.rows;for(let i of this._rowElements)i.style.width=`${this.dimensions.css.canvas.width}px`,i.style.height=`${this.dimensions.css.cell.height}px`,i.style.lineHeight=`${this.dimensions.css.cell.height}px`,i.style.overflow="hidden";this._dimensionsStyleElement||(this._dimensionsStyleElement=this._document.createElement("style"),this._screenElement.appendChild(this._dimensionsStyleElement));let e=`${this._terminalSelector} .${Ai} span { display: inline-block; height: 100%; vertical-align: top;}`;this._dimensionsStyleElement.textContent=e,this._selectionContainer.style.height=this._viewportElement.style.height,this._screenElement.style.width=`${this.dimensions.css.canvas.width}px`,this._screenElement.style.height=`${this.dimensions.css.canvas.height}px`}_injectCss(t){this._themeStyleElement||(this._themeStyleElement=this._document.createElement("style"),this._screenElement.appendChild(this._themeStyleElement));let e=`${this._terminalSelector} .${Ai} { pointer-events: none; color: ${t.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;e+=`${this._terminalSelector} .${Ai} .xterm-dim { color: ${pt.multiplyOpacity(t.foreground,.5).css};}`,e+=`${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;let i=`blink_underline_${this._terminalClass}`,n=`blink_bar_${this._terminalClass}`,r=`blink_block_${this._terminalClass}`;e+=`@keyframes ${i} { 50% {  border-bottom-style: hidden; }}`,e+=`@keyframes ${n} { 50% {  box-shadow: none; }}`,e+=`@keyframes ${r} { 0% {  background-color: ${t.cursor.css};  color: ${t.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${t.cursor.css}; }}`,e+=`${this._terminalSelector} .${Ai}.${js} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${i} 1s step-end infinite;}${this._terminalSelector} .${Ai}.${js} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${n} 1s step-end infinite;}${this._terminalSelector} .${Ai}.${js} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${r} 1s step-end infinite;}${this._terminalSelector} .${Ai} .xterm-cursor.xterm-cursor-block { background-color: ${t.cursor.css}; color: ${t.cursorAccent.css};}${this._terminalSelector} .${Ai} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${t.cursor.css} !important; color: ${t.cursorAccent.css} !important;}${this._terminalSelector} .${Ai} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${t.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${Ai} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${t.cursor.css} inset;}${this._terminalSelector} .${Ai} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${t.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`,e+=`${this._terminalSelector} .${Cl} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${Cl} div { position: absolute; background-color: ${t.selectionBackgroundOpaque.css};}${this._terminalSelector} .${Cl} div { position: absolute; background-color: ${t.selectionInactiveBackgroundOpaque.css};}`;for(let[s,o]of t.ansi.entries())e+=`${this._terminalSelector} .${Ml}${s} { color: ${o.css}; }${this._terminalSelector} .${Ml}${s}.xterm-dim { color: ${pt.multiplyOpacity(o,.5).css}; }${this._terminalSelector} .${mp}${s} { background-color: ${o.css}; }`;e+=`${this._terminalSelector} .${Ml}257 { color: ${pt.opaque(t.background).css}; }${this._terminalSelector} .${Ml}257.xterm-dim { color: ${pt.multiplyOpacity(pt.opaque(t.background),.5).css}; }${this._terminalSelector} .${mp}257 { background-color: ${t.foreground.css}; }`,this._themeStyleElement.textContent=e}_setDefaultSpacing(){let t=this.dimensions.css.cell.width-this._widthCache.get("W",!1,!1);this._rowContainer.style.letterSpacing=`${t}px`,this._rowFactory.defaultSpacing=t}handleDevicePixelRatioChange(){this._updateDimensions(),this._widthCache.clear(),this._setDefaultSpacing()}_refreshRowElements(t,e){for(let i=this._rowElements.length;i<=e;i++){let n=this._document.createElement("div");this._rowContainer.appendChild(n),this._rowElements.push(n)}for(;this._rowElements.length>e;)this._rowContainer.removeChild(this._rowElements.pop())}handleResize(t,e){this._refreshRowElements(t,e),this._updateDimensions(),this.handleSelectionChanged(this._selectionRenderModel.selectionStart,this._selectionRenderModel.selectionEnd,this._selectionRenderModel.columnSelectMode)}handleCharSizeChanged(){this._updateDimensions(),this._widthCache.clear(),this._setDefaultSpacing()}handleBlur(){this._rowContainer.classList.remove(js),this.renderRows(0,this._bufferService.rows-1)}handleFocus(){this._rowContainer.classList.add(js),this.renderRows(this._bufferService.buffer.y,this._bufferService.buffer.y)}handleSelectionChanged(t,e,i){if(this._selectionContainer.replaceChildren(),this._rowFactory.handleSelectionChanged(t,e,i),this.renderRows(0,this._bufferService.rows-1),!t||!e||(this._selectionRenderModel.update(this._terminal,t,e,i),!this._selectionRenderModel.hasSelection))return;let n=this._selectionRenderModel.viewportStartRow,r=this._selectionRenderModel.viewportEndRow,s=this._selectionRenderModel.viewportCappedStartRow,o=this._selectionRenderModel.viewportCappedEndRow,a=this._document.createDocumentFragment();if(i){let h=t[0]>e[0];a.appendChild(this._createSelectionElement(s,h?e[0]:t[0],h?t[0]:e[0],o-s+1))}else{let h=n===s?t[0]:0,l=s===r?e[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(s,h,l));let u=o-s-1;if(a.appendChild(this._createSelectionElement(s+1,0,this._bufferService.cols,u)),s!==o){let c=r===o?e[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(o,0,c))}}this._selectionContainer.appendChild(a)}_createSelectionElement(t,e,i,n=1){let r=this._document.createElement("div"),s=e*this.dimensions.css.cell.width,o=this.dimensions.css.cell.width*(i-e);return s+o>this.dimensions.css.canvas.width&&(o=this.dimensions.css.canvas.width-s),r.style.height=`${n*this.dimensions.css.cell.height}px`,r.style.top=`${t*this.dimensions.css.cell.height}px`,r.style.left=`${s}px`,r.style.width=`${o}px`,r}handleCursorMove(){}_handleOptionsChanged(){this._updateDimensions(),this._injectCss(this._themeService.colors),this._widthCache.setFont(this._optionsService.rawOptions.fontFamily,this._optionsService.rawOptions.fontSize,this._optionsService.rawOptions.fontWeight,this._optionsService.rawOptions.fontWeightBold),this._setDefaultSpacing()}clear(){for(let t of this._rowElements)t.replaceChildren()}renderRows(t,e){let i=this._bufferService.buffer,n=i.ybase+i.y,r=Math.min(i.x,this._bufferService.cols-1),s=this._coreService.decPrivateModes.cursorBlink??this._optionsService.rawOptions.cursorBlink,o=this._coreService.decPrivateModes.cursorStyle??this._optionsService.rawOptions.cursorStyle,a=this._optionsService.rawOptions.cursorInactiveStyle;for(let h=t;h<=e;h++){let l=h+i.ydisp,u=this._rowElements[h],c=i.lines.get(l);if(!u||!c)break;u.replaceChildren(...this._rowFactory.createRow(c,l,l===n,o,a,r,s,this.dimensions.css.cell.width,this._widthCache,-1,-1))}}get _terminalSelector(){return`.${Nc}${this._terminalClass}`}_handleLinkHover(t){this._setCellUnderline(t.x1,t.x2,t.y1,t.y2,t.cols,!0)}_handleLinkLeave(t){this._setCellUnderline(t.x1,t.x2,t.y1,t.y2,t.cols,!1)}_setCellUnderline(t,e,i,n,r,s){i<0&&(t=0),n<0&&(e=0);let o=this._bufferService.rows-1;i=Math.max(Math.min(i,o),0),n=Math.max(Math.min(n,o),0),r=Math.min(r,this._bufferService.cols);let a=this._bufferService.buffer,h=a.ybase+a.y,l=Math.min(a.x,r-1),u=this._optionsService.rawOptions.cursorBlink,c=this._optionsService.rawOptions.cursorStyle,d=this._optionsService.rawOptions.cursorInactiveStyle;for(let f=i;f<=n;++f){let m=f+a.ydisp,g=this._rowElements[f],_=a.lines.get(m);if(!g||!_)break;g.replaceChildren(...this._rowFactory.createRow(_,m,m===h,c,d,l,u,this.dimensions.css.cell.width,this._widthCache,s?f===i?t:0:-1,s?(f===n?e:r)-1:-1))}}};du=bt([pe(7,Eu),pe(8,ql),pe(9,si),pe(10,ri),pe(11,Ar),pe(12,Cn),pe(13,us)],du);var fu=class extends ze{constructor(t,e,i){super(),this._optionsService=i,this.width=0,this.height=0,this._onCharSizeChange=this._register(new se),this.onCharSizeChange=this._onCharSizeChange.event;try{this._measureStrategy=this._register(new Zb(this._optionsService))}catch{this._measureStrategy=this._register(new Kb(t,e,this._optionsService))}this._register(this._optionsService.onMultipleOptionChange(["fontFamily","fontSize"],()=>this.measure()))}get hasValidSize(){return this.width>0&&this.height>0}measure(){let t=this._measureStrategy.measure();(t.width!==this.width||t.height!==this.height)&&(this.width=t.width,this.height=t.height,this._onCharSizeChange.fire())}};fu=bt([pe(2,si)],fu);var Em=class extends ze{constructor(){super(...arguments),this._result={width:0,height:0}}_validateAndSet(t,e){t!==void 0&&t>0&&e!==void 0&&e>0&&(this._result.width=t,this._result.height=e)}},Kb=class extends Em{constructor(t,e,i){super(),this._document=t,this._parentElement=e,this._optionsService=i,this._measureElement=this._document.createElement("span"),this._measureElement.classList.add("xterm-char-measure-element"),this._measureElement.textContent="W".repeat(32),this._measureElement.setAttribute("aria-hidden","true"),this._measureElement.style.whiteSpace="pre",this._measureElement.style.fontKerning="none",this._parentElement.appendChild(this._measureElement)}measure(){return this._measureElement.style.fontFamily=this._optionsService.rawOptions.fontFamily,this._measureElement.style.fontSize=`${this._optionsService.rawOptions.fontSize}px`,this._validateAndSet(Number(this._measureElement.offsetWidth)/32,Number(this._measureElement.offsetHeight)),this._result}},Zb=class extends Em{constructor(t){super(),this._optionsService=t,this._canvas=new OffscreenCanvas(100,100),this._ctx=this._canvas.getContext("2d");let e=this._ctx.measureText("W");if(!("width"in e&&"fontBoundingBoxAscent"in e&&"fontBoundingBoxDescent"in e))throw new Error("Required font metrics not supported")}measure(){this._ctx.font=`${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;let t=this._ctx.measureText("W");return this._validateAndSet(t.width,t.fontBoundingBoxAscent+t.fontBoundingBoxDescent),this._result}},Jb=class extends ze{constructor(t,e,i){super(),this._textarea=t,this._window=e,this.mainDocument=i,this._isFocused=!1,this._cachedIsFocused=void 0,this._screenDprMonitor=this._register(new jb(this._window)),this._onDprChange=this._register(new se),this.onDprChange=this._onDprChange.event,this._onWindowChange=this._register(new se),this.onWindowChange=this._onWindowChange.event,this._register(this.onWindowChange(n=>this._screenDprMonitor.setWindow(n))),this._register(Kt.forward(this._screenDprMonitor.onDprChange,this._onDprChange)),this._register(ke(this._textarea,"focus",()=>this._isFocused=!0)),this._register(ke(this._textarea,"blur",()=>this._isFocused=!1))}get window(){return this._window}set window(t){this._window!==t&&(this._window=t,this._onWindowChange.fire(this._window))}get dpr(){return this.window.devicePixelRatio}get isFocused(){return this._cachedIsFocused===void 0&&(this._cachedIsFocused=this._isFocused&&this._textarea.ownerDocument.hasFocus(),queueMicrotask(()=>this._cachedIsFocused=void 0)),this._cachedIsFocused}},jb=class extends ze{constructor(t){super(),this._parentWindow=t,this._windowResizeListener=this._register(new cs),this._onDprChange=this._register(new se),this.onDprChange=this._onDprChange.event,this._outerListener=()=>this._setDprAndFireIfDiffers(),this._currentDevicePixelRatio=this._parentWindow.devicePixelRatio,this._updateDpr(),this._setWindowResizeListener(),this._register(mt(()=>this.clearListener()))}setWindow(t){this._parentWindow=t,this._setWindowResizeListener(),this._setDprAndFireIfDiffers()}_setWindowResizeListener(){this._windowResizeListener.value=ke(this._parentWindow,"resize",()=>this._setDprAndFireIfDiffers())}_setDprAndFireIfDiffers(){this._parentWindow.devicePixelRatio!==this._currentDevicePixelRatio&&this._onDprChange.fire(this._parentWindow.devicePixelRatio),this._updateDpr()}_updateDpr(){this._outerListener&&(this._resolutionMediaMatchList?.removeListener(this._outerListener),this._currentDevicePixelRatio=this._parentWindow.devicePixelRatio,this._resolutionMediaMatchList=this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`),this._resolutionMediaMatchList.addListener(this._outerListener))}clearListener(){!this._resolutionMediaMatchList||!this._outerListener||(this._resolutionMediaMatchList.removeListener(this._outerListener),this._resolutionMediaMatchList=void 0,this._outerListener=void 0)}},Qb=class extends ze{constructor(){super(),this.linkProviders=[],this._register(mt(()=>this.linkProviders.length=0))}registerLinkProvider(t){return this.linkProviders.push(t),{dispose:()=>{let e=this.linkProviders.indexOf(t);e!==-1&&this.linkProviders.splice(e,1)}}}};function Nu(t,e,i){let n=i.getBoundingClientRect(),r=t.getComputedStyle(i),s=parseInt(r.getPropertyValue("padding-left")),o=parseInt(r.getPropertyValue("padding-top"));return[e.clientX-n.left-s,e.clientY-n.top-o]}function ew(t,e,i,n,r,s,o,a,h){if(!s)return;let l=Nu(t,e,i);if(l)return l[0]=Math.ceil((l[0]+(h?o/2:0))/o),l[1]=Math.ceil(l[1]/a),l[0]=Math.min(Math.max(l[0],1),n+(h?1:0)),l[1]=Math.min(Math.max(l[1],1),r),l}var pu=class{constructor(t,e){this._renderService=t,this._charSizeService=e}getCoords(t,e,i,n,r){return ew(window,t,e,i,n,this._charSizeService.hasValidSize,this._renderService.dimensions.css.cell.width,this._renderService.dimensions.css.cell.height,r)}getMouseReportCoords(t,e){let i=Nu(window,t,e);if(this._charSizeService.hasValidSize)return i[0]=Math.min(Math.max(i[0],0),this._renderService.dimensions.css.canvas.width-1),i[1]=Math.min(Math.max(i[1],0),this._renderService.dimensions.css.canvas.height-1),{col:Math.floor(i[0]/this._renderService.dimensions.css.cell.width),row:Math.floor(i[1]/this._renderService.dimensions.css.cell.height),x:Math.floor(i[0]),y:Math.floor(i[1])}}};pu=bt([pe(0,En),pe(1,ql)],pu);var tw=class{constructor(t,e){this._renderCallback=t,this._coreBrowserService=e,this._refreshCallbacks=[]}dispose(){this._animationFrame&&(this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)}addRefreshCallback(t){return this._refreshCallbacks.push(t),this._animationFrame||(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame(()=>this._innerRefresh())),this._animationFrame}refresh(t,e,i){this._rowCount=i,t=t!==void 0?t:0,e=e!==void 0?e:this._rowCount-1,this._rowStart=this._rowStart!==void 0?Math.min(this._rowStart,t):t,this._rowEnd=this._rowEnd!==void 0?Math.max(this._rowEnd,e):e,!this._animationFrame&&(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame(()=>this._innerRefresh()))}_innerRefresh(){if(this._animationFrame=void 0,this._rowStart===void 0||this._rowEnd===void 0||this._rowCount===void 0){this._runRefreshCallbacks();return}let t=Math.max(this._rowStart,0),e=Math.min(this._rowEnd,this._rowCount-1);this._rowStart=void 0,this._rowEnd=void 0,this._renderCallback(t,e),this._runRefreshCallbacks()}_runRefreshCallbacks(){for(let t of this._refreshCallbacks)t(0);this._refreshCallbacks=[]}},Tm={};Oy(Tm,{getSafariVersion:()=>nw,isChromeOS:()=>Im,isFirefox:()=>Am,isIpad:()=>rw,isIphone:()=>sw,isLegacyEdge:()=>iw,isLinux:()=>Bu,isMac:()=>Wl,isNode:()=>Zl,isSafari:()=>Rm,isWindows:()=>Pm});var Zl=typeof process<"u"&&"title"in process,vo=Zl?"node":navigator.userAgent,So=Zl?"node":navigator.platform,Am=vo.includes("Firefox"),iw=vo.includes("Edge"),Rm=/^((?!chrome|android).)*safari/i.test(vo);function nw(){if(!Rm)return 0;let t=vo.match(/Version\/(\d+)/);return t===null||t.length<2?0:parseInt(t[1])}var Wl=["Macintosh","MacIntel","MacPPC","Mac68K"].includes(So),rw=So==="iPad",sw=So==="iPhone",Pm=["Windows","Win16","Win32","WinCE"].includes(So),Bu=So.indexOf("Linux")>=0,Im=/\bCrOS\b/.test(vo),Lm=class{constructor(){this._tasks=[],this._i=0}enqueue(t){this._tasks.push(t),this._start()}flush(){for(;this._i<this._tasks.length;)this._tasks[this._i]()||this._i++;this.clear()}clear(){this._idleCallback&&(this._cancelCallback(this._idleCallback),this._idleCallback=void 0),this._i=0,this._tasks.length=0}_start(){this._idleCallback||(this._idleCallback=this._requestCallback(this._process.bind(this)))}_process(t){this._idleCallback=void 0;let e=0,i=0,n=t.timeRemaining(),r=0;for(;this._i<this._tasks.length;){if(e=performance.now(),this._tasks[this._i]()||this._i++,e=Math.max(1,performance.now()-e),i=Math.max(e,i),r=t.timeRemaining(),i*1.5>r){n-e<-20&&console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(n-e))}ms`),this._start();return}n=r}this.clear()}},ow=class extends Lm{_requestCallback(t){return setTimeout(()=>t(this._createDeadline(16)))}_cancelCallback(t){clearTimeout(t)}_createDeadline(t){let e=performance.now()+t;return{timeRemaining:()=>Math.max(0,e-performance.now())}}},aw=class extends Lm{_requestCallback(t){return requestIdleCallback(t)}_cancelCallback(t){cancelIdleCallback(t)}},Gl=!Zl&&"requestIdleCallback"in window?aw:ow,lw=class{constructor(){this._queue=new Gl}set(t){this._queue.clear(),this._queue.enqueue(t)}flush(){this._queue.flush()}},mu=class extends ze{constructor(t,e,i,n,r,s,o,a,h){super(),this._rowCount=t,this._optionsService=i,this._charSizeService=n,this._coreService=r,this._coreBrowserService=a,this._renderer=this._register(new cs),this._pausedResizeTask=new lw,this._observerDisposable=this._register(new cs),this._isPaused=!1,this._needsFullRefresh=!1,this._isNextRenderRedrawOnly=!0,this._needsSelectionRefresh=!1,this._canvasWidth=0,this._canvasHeight=0,this._selectionState={start:void 0,end:void 0,columnSelectMode:!1},this._onDimensionsChange=this._register(new se),this.onDimensionsChange=this._onDimensionsChange.event,this._onRenderedViewportChange=this._register(new se),this.onRenderedViewportChange=this._onRenderedViewportChange.event,this._onRender=this._register(new se),this.onRender=this._onRender.event,this._onRefreshRequest=this._register(new se),this.onRefreshRequest=this._onRefreshRequest.event,this._renderDebouncer=new tw((l,u)=>this._renderRows(l,u),this._coreBrowserService),this._register(this._renderDebouncer),this._syncOutputHandler=new hw(this._coreBrowserService,this._coreService,()=>this._fullRefresh()),this._register(mt(()=>this._syncOutputHandler.dispose())),this._register(this._coreBrowserService.onDprChange(()=>this.handleDevicePixelRatioChange())),this._register(o.onResize(()=>this._fullRefresh())),this._register(o.buffers.onBufferActivate(()=>this._renderer.value?.clear())),this._register(this._optionsService.onOptionChange(()=>this._handleOptionsChanged())),this._register(this._charSizeService.onCharSizeChange(()=>this.handleCharSizeChanged())),this._register(s.onDecorationRegistered(()=>this._fullRefresh())),this._register(s.onDecorationRemoved(()=>this._fullRefresh())),this._register(this._optionsService.onMultipleOptionChange(["customGlyphs","drawBoldTextInBrightColors","letterSpacing","lineHeight","fontFamily","fontSize","fontWeight","fontWeightBold","minimumContrastRatio","rescaleOverlappingGlyphs"],()=>{this.clear(),this.handleResize(o.cols,o.rows),this._fullRefresh()})),this._register(this._optionsService.onMultipleOptionChange(["cursorBlink","cursorStyle"],()=>this.refreshRows(o.buffer.y,o.buffer.y,!0))),this._register(h.onChangeColors(()=>this._fullRefresh())),this._registerIntersectionObserver(this._coreBrowserService.window,e),this._register(this._coreBrowserService.onWindowChange(l=>this._registerIntersectionObserver(l,e)))}get dimensions(){return this._renderer.value.dimensions}_registerIntersectionObserver(t,e){if("IntersectionObserver"in t){let i=new t.IntersectionObserver(n=>this._handleIntersectionChange(n[n.length-1]),{threshold:0});i.observe(e),this._observerDisposable.value=mt(()=>i.disconnect())}}_handleIntersectionChange(t){this._isPaused=t.isIntersecting===void 0?t.intersectionRatio===0:!t.isIntersecting,!this._isPaused&&!this._charSizeService.hasValidSize&&this._charSizeService.measure(),!this._isPaused&&this._needsFullRefresh&&(this._pausedResizeTask.flush(),this.refreshRows(0,this._rowCount-1),this._needsFullRefresh=!1)}refreshRows(t,e,i=!1){if(this._isPaused){this._needsFullRefresh=!0;return}if(this._coreService.decPrivateModes.synchronizedOutput){this._syncOutputHandler.bufferRows(t,e);return}let n=this._syncOutputHandler.flush();n&&(t=Math.min(t,n.start),e=Math.max(e,n.end)),i||(this._isNextRenderRedrawOnly=!1),this._renderDebouncer.refresh(t,e,this._rowCount)}_renderRows(t,e){if(this._renderer.value){if(this._coreService.decPrivateModes.synchronizedOutput){this._syncOutputHandler.bufferRows(t,e);return}t=Math.min(t,this._rowCount-1),e=Math.min(e,this._rowCount-1),this._renderer.value.renderRows(t,e),this._needsSelectionRefresh&&(this._renderer.value.handleSelectionChanged(this._selectionState.start,this._selectionState.end,this._selectionState.columnSelectMode),this._needsSelectionRefresh=!1),this._isNextRenderRedrawOnly||this._onRenderedViewportChange.fire({start:t,end:e}),this._onRender.fire({start:t,end:e}),this._isNextRenderRedrawOnly=!0}}resize(t,e){this._rowCount=e,this._fireOnCanvasResize()}_handleOptionsChanged(){this._renderer.value&&(this.refreshRows(0,this._rowCount-1),this._fireOnCanvasResize())}_fireOnCanvasResize(){this._renderer.value&&(this._renderer.value.dimensions.css.canvas.width===this._canvasWidth&&this._renderer.value.dimensions.css.canvas.height===this._canvasHeight||this._onDimensionsChange.fire(this._renderer.value.dimensions))}hasRenderer(){return!!this._renderer.value}setRenderer(t){this._renderer.value=t,this._renderer.value&&(this._renderer.value.onRequestRedraw(e=>this.refreshRows(e.start,e.end,!0)),this._needsSelectionRefresh=!0,this._fullRefresh())}addRefreshCallback(t){return this._renderDebouncer.addRefreshCallback(t)}_fullRefresh(){this._isPaused?this._needsFullRefresh=!0:this.refreshRows(0,this._rowCount-1)}clearTextureAtlas(){this._renderer.value&&(this._renderer.value.clearTextureAtlas?.(),this._fullRefresh())}handleDevicePixelRatioChange(){this._charSizeService.measure(),this._renderer.value&&(this._renderer.value.handleDevicePixelRatioChange(),this.refreshRows(0,this._rowCount-1))}handleResize(t,e){this._renderer.value&&(this._isPaused?this._pausedResizeTask.set(()=>this._renderer.value?.handleResize(t,e)):this._renderer.value.handleResize(t,e),this._fullRefresh())}handleCharSizeChanged(){this._renderer.value?.handleCharSizeChanged()}handleBlur(){this._renderer.value?.handleBlur()}handleFocus(){this._renderer.value?.handleFocus()}handleSelectionChanged(t,e,i){this._selectionState.start=t,this._selectionState.end=e,this._selectionState.columnSelectMode=i,this._renderer.value?.handleSelectionChanged(t,e,i)}handleCursorMove(){this._renderer.value?.handleCursorMove()}clear(){this._renderer.value?.clear()}};mu=bt([pe(2,si),pe(3,ql),pe(4,Ar),pe(5,go),pe(6,ri),pe(7,Cn),pe(8,us)],mu);var hw=class{constructor(t,e,i){this._coreBrowserService=t,this._coreService=e,this._onTimeout=i,this._start=0,this._end=0,this._isBuffering=!1}bufferRows(t,e){this._isBuffering?(this._start=Math.min(this._start,t),this._end=Math.max(this._end,e)):(this._start=t,this._end=e,this._isBuffering=!0),this._timeout===void 0&&(this._timeout=this._coreBrowserService.window.setTimeout(()=>{this._timeout=void 0,this._coreService.decPrivateModes.synchronizedOutput=!1,this._onTimeout()},1e3))}flush(){if(this._timeout!==void 0&&(this._coreBrowserService.window.clearTimeout(this._timeout),this._timeout=void 0),!this._isBuffering)return;let t={start:this._start,end:this._end};return this._isBuffering=!1,t}dispose(){this._timeout!==void 0&&(this._coreBrowserService.window.clearTimeout(this._timeout),this._timeout=void 0)}};function cw(t,e,i,n){let r=i.buffer.x,s=i.buffer.y;if(!i.buffer.hasScrollback)return fw(r,s,t,e,i,n)+Jl(s,e,i,n)+pw(r,s,t,e,i,n);let o;if(s===e)return o=r>t?"D":"C",po(Math.abs(r-t),fo(o,n));o=s>e?"D":"C";let a=Math.abs(s-e),h=dw(s>e?t:r,i)+(a-1)*i.cols+1+uw(s>e?r:t,i);return po(h,fo(o,n))}function uw(t,e){return t-1}function dw(t,e){return e.cols-t}function fw(t,e,i,n,r,s){return Jl(e,n,r,s).length===0?"":po(Nm(t,e,t,e-Tr(e,r),!1,r).length,fo("D",s))}function Jl(t,e,i,n){let r=t-Tr(t,i),s=e-Tr(e,i),o=Math.abs(r-s)-mw(t,e,i);return po(o,fo(Dm(t,e),n))}function pw(t,e,i,n,r,s){let o;Jl(e,n,r,s).length>0?o=n-Tr(n,r):o=e;let a=n,h=_w(t,e,i,n,r,s);return po(Nm(t,o,i,a,h==="C",r).length,fo(h,s))}function mw(t,e,i){let n=0,r=t-Tr(t,i),s=e-Tr(e,i);for(let o=0;o<Math.abs(r-s);o++){let a=Dm(t,e)==="A"?-1:1;i.buffer.lines.get(r+a*o)?.isWrapped&&n++}return n}function Tr(t,e){let i=0,n=e.buffer.lines.get(t),r=n?.isWrapped;for(;r&&t>=0&&t<e.rows;)i++,n=e.buffer.lines.get(--t),r=n?.isWrapped;return i}function _w(t,e,i,n,r,s){let o;return Jl(i,n,r,s).length>0?o=n-Tr(n,r):o=e,t<i&&o<=n||t>=i&&o<n?"C":"D"}function Dm(t,e){return t>e?"A":"B"}function Nm(t,e,i,n,r,s){let o=t,a=e,h="";for(;(o!==i||a!==n)&&a>=0&&a<s.buffer.lines.length;)o+=r?1:-1,r&&o>s.cols-1?(h+=s.buffer.translateBufferLineToString(a,!1,t,o),o=0,t=0,a++):!r&&o<0&&(h+=s.buffer.translateBufferLineToString(a,!1,0,t+1),o=s.cols-1,t=o,a--);return h+s.buffer.translateBufferLineToString(a,!1,t,o)}function fo(t,e){let i=e?"O":"[";return K.ESC+i+t}function po(t,e){t=Math.floor(t);let i="";for(let n=0;n<t;n++)i+=e;return i}var gw=class{constructor(t){this._bufferService=t,this.isSelectAllActive=!1,this.selectionStartLength=0}clearSelection(){this.selectionStart=void 0,this.selectionEnd=void 0,this.isSelectAllActive=!1,this.selectionStartLength=0}get finalSelectionStart(){return this.isSelectAllActive?[0,0]:!this.selectionEnd||!this.selectionStart?this.selectionStart:this.areSelectionValuesReversed()?this.selectionEnd:this.selectionStart}get finalSelectionEnd(){if(this.isSelectAllActive)return[this._bufferService.cols,this._bufferService.buffer.ybase+this._bufferService.rows-1];if(this.selectionStart){if(!this.selectionEnd||this.areSelectionValuesReversed()){let t=this.selectionStart[0]+this.selectionStartLength;return t>this._bufferService.cols?t%this._bufferService.cols===0?[this._bufferService.cols,this.selectionStart[1]+Math.floor(t/this._bufferService.cols)-1]:[t%this._bufferService.cols,this.selectionStart[1]+Math.floor(t/this._bufferService.cols)]:[t,this.selectionStart[1]]}if(this.selectionStartLength&&this.selectionEnd[1]===this.selectionStart[1]){let t=this.selectionStart[0]+this.selectionStartLength;return t>this._bufferService.cols?[t%this._bufferService.cols,this.selectionStart[1]+Math.floor(t/this._bufferService.cols)]:[Math.max(t,this.selectionEnd[0]),this.selectionEnd[1]]}return this.selectionEnd}}areSelectionValuesReversed(){let t=this.selectionStart,e=this.selectionEnd;return!t||!e?!1:t[1]>e[1]||t[1]===e[1]&&t[0]>e[0]}handleTrim(t){return this.selectionStart&&(this.selectionStart[1]-=t),this.selectionEnd&&(this.selectionEnd[1]-=t),this.selectionEnd&&this.selectionEnd[1]<0?(this.clearSelection(),!0):(this.selectionStart&&this.selectionStart[1]<0&&(this.selectionStart[1]=0),!1)}};function _p(t,e){if(t.start.y>t.end.y)throw new Error(`Buffer range end (${t.end.x}, ${t.end.y}) cannot be before start (${t.start.x}, ${t.start.y})`);return e*(t.end.y-t.start.y)+(t.end.x-t.start.x+1)}var Bc=50,vw=15,Sw=50,yw=500,xw="\xA0",bw=new RegExp(xw,"g"),_u=class extends ze{constructor(t,e,i,n,r,s,o,a,h){super(),this._element=t,this._screenElement=e,this._linkifier=i,this._bufferService=n,this._coreService=r,this._mouseService=s,this._optionsService=o,this._renderService=a,this._coreBrowserService=h,this._dragScrollAmount=0,this._enabled=!0,this._workCell=new Ii,this._mouseDownTimeStamp=0,this._oldHasSelection=!1,this._oldSelectionStart=void 0,this._oldSelectionEnd=void 0,this._onLinuxMouseSelection=this._register(new se),this.onLinuxMouseSelection=this._onLinuxMouseSelection.event,this._onRedrawRequest=this._register(new se),this.onRequestRedraw=this._onRedrawRequest.event,this._onSelectionChange=this._register(new se),this.onSelectionChange=this._onSelectionChange.event,this._onRequestScrollLines=this._register(new se),this.onRequestScrollLines=this._onRequestScrollLines.event,this._mouseMoveListener=l=>this._handleMouseMove(l),this._mouseUpListener=l=>this._handleMouseUp(l),this._coreService.onUserInput(()=>{this.hasSelection&&this.clearSelection()}),this._trimListener=this._bufferService.buffer.lines.onTrim(l=>this._handleTrim(l)),this._register(this._bufferService.buffers.onBufferActivate(l=>this._handleBufferActivate(l))),this.enable(),this._model=new gw(this._bufferService),this._activeSelectionMode=0,this._register(mt(()=>{this._removeMouseDownListeners()})),this._register(this._bufferService.onResize(l=>{l.rowsChanged&&this.clearSelection()}))}reset(){this.clearSelection()}disable(){this.clearSelection(),this._enabled=!1}enable(){this._enabled=!0}get selectionStart(){return this._model.finalSelectionStart}get selectionEnd(){return this._model.finalSelectionEnd}get hasSelection(){let t=this._model.finalSelectionStart,e=this._model.finalSelectionEnd;return!t||!e?!1:t[0]!==e[0]||t[1]!==e[1]}get selectionText(){let t=this._model.finalSelectionStart,e=this._model.finalSelectionEnd;if(!t||!e)return"";let i=this._bufferService.buffer,n=[];if(this._activeSelectionMode===3){if(t[0]===e[0])return"";let r=t[0]<e[0]?t[0]:e[0],s=t[0]<e[0]?e[0]:t[0];for(let o=t[1];o<=e[1];o++){let a=i.translateBufferLineToString(o,!0,r,s);n.push(a)}}else{let r=t[1]===e[1]?e[0]:void 0;n.push(i.translateBufferLineToString(t[1],!0,t[0],r));for(let s=t[1]+1;s<=e[1]-1;s++){let o=i.lines.get(s),a=i.translateBufferLineToString(s,!0);o?.isWrapped?n[n.length-1]+=a:n.push(a)}if(t[1]!==e[1]){let s=i.lines.get(e[1]),o=i.translateBufferLineToString(e[1],!0,0,e[0]);s&&s.isWrapped?n[n.length-1]+=o:n.push(o)}}return n.map(r=>r.replace(bw," ")).join(Pm?`\r
`:`
`)}clearSelection(){this._model.clearSelection(),this._removeMouseDownListeners(),this.refresh(),this._onSelectionChange.fire()}refresh(t){this._refreshAnimationFrame||(this._refreshAnimationFrame=this._coreBrowserService.window.requestAnimationFrame(()=>this._refresh())),Bu&&t&&this.selectionText.length&&this._onLinuxMouseSelection.fire(this.selectionText)}_refresh(){this._refreshAnimationFrame=void 0,this._onRedrawRequest.fire({start:this._model.finalSelectionStart,end:this._model.finalSelectionEnd,columnSelectMode:this._activeSelectionMode===3})}_isClickInSelection(t){let e=this._getMouseBufferCoords(t),i=this._model.finalSelectionStart,n=this._model.finalSelectionEnd;return!i||!n||!e?!1:this._areCoordsInSelection(e,i,n)}isCellInSelection(t,e){let i=this._model.finalSelectionStart,n=this._model.finalSelectionEnd;return!i||!n?!1:this._areCoordsInSelection([t,e],i,n)}_areCoordsInSelection(t,e,i){return t[1]>e[1]&&t[1]<i[1]||e[1]===i[1]&&t[1]===e[1]&&t[0]>=e[0]&&t[0]<i[0]||e[1]<i[1]&&t[1]===i[1]&&t[0]<i[0]||e[1]<i[1]&&t[1]===e[1]&&t[0]>=e[0]}_selectWordAtCursor(t,e){let i=this._linkifier.currentLink?.link?.range;if(i)return this._model.selectionStart=[i.start.x-1,i.start.y-1],this._model.selectionStartLength=_p(i,this._bufferService.cols),this._model.selectionEnd=void 0,!0;let n=this._getMouseBufferCoords(t);return n?(this._selectWordAt(n,e),this._model.selectionEnd=void 0,!0):!1}selectAll(){this._model.isSelectAllActive=!0,this.refresh(),this._onSelectionChange.fire()}selectLines(t,e){this._model.clearSelection(),t=Math.max(t,0),e=Math.min(e,this._bufferService.buffer.lines.length-1),this._model.selectionStart=[0,t],this._model.selectionEnd=[this._bufferService.cols,e],this.refresh(),this._onSelectionChange.fire()}_handleTrim(t){this._model.handleTrim(t)&&this.refresh()}_getMouseBufferCoords(t){let e=this._mouseService.getCoords(t,this._screenElement,this._bufferService.cols,this._bufferService.rows,!0);if(e)return e[0]--,e[1]--,e[1]+=this._bufferService.buffer.ydisp,e}_getMouseEventScrollAmount(t){let e=Nu(this._coreBrowserService.window,t,this._screenElement)[1],i=this._renderService.dimensions.css.canvas.height;return e>=0&&e<=i?0:(e>i&&(e-=i),e=Math.min(Math.max(e,-Bc),Bc),e/=Bc,e/Math.abs(e)+Math.round(e*(vw-1)))}shouldForceSelection(t){return Wl?t.altKey&&this._optionsService.rawOptions.macOptionClickForcesSelection:t.shiftKey}handleMouseDown(t){if(this._mouseDownTimeStamp=t.timeStamp,!(t.button===2&&this.hasSelection)&&t.button===0){if(!this._enabled){if(!this.shouldForceSelection(t))return;t.stopPropagation()}t.preventDefault(),this._dragScrollAmount=0,this._enabled&&t.shiftKey?this._handleIncrementalClick(t):t.detail===1?this._handleSingleClick(t):t.detail===2?this._handleDoubleClick(t):t.detail===3&&this._handleTripleClick(t),this._addMouseDownListeners(),this.refresh(!0)}}_addMouseDownListeners(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.addEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.addEventListener("mouseup",this._mouseUpListener)),this._dragScrollIntervalTimer=this._coreBrowserService.window.setInterval(()=>this._dragScroll(),Sw)}_removeMouseDownListeners(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.removeEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.removeEventListener("mouseup",this._mouseUpListener)),this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer),this._dragScrollIntervalTimer=void 0}_handleIncrementalClick(t){this._model.selectionStart&&(this._model.selectionEnd=this._getMouseBufferCoords(t))}_handleSingleClick(t){if(this._model.selectionStartLength=0,this._model.isSelectAllActive=!1,this._activeSelectionMode=this.shouldColumnSelect(t)?3:0,this._model.selectionStart=this._getMouseBufferCoords(t),!this._model.selectionStart)return;this._model.selectionEnd=void 0;let e=this._bufferService.buffer.lines.get(this._model.selectionStart[1]);e&&e.length!==this._model.selectionStart[0]&&e.hasWidth(this._model.selectionStart[0])===0&&this._model.selectionStart[0]++}_handleDoubleClick(t){this._selectWordAtCursor(t,!0)&&(this._activeSelectionMode=1)}_handleTripleClick(t){let e=this._getMouseBufferCoords(t);e&&(this._activeSelectionMode=2,this._selectLineAt(e[1]))}shouldColumnSelect(t){return t.altKey&&!(Wl&&this._optionsService.rawOptions.macOptionClickForcesSelection)}_handleMouseMove(t){if(t.stopImmediatePropagation(),!this._model.selectionStart)return;let e=this._model.selectionEnd?[this._model.selectionEnd[0],this._model.selectionEnd[1]]:null;if(this._model.selectionEnd=this._getMouseBufferCoords(t),!this._model.selectionEnd){this.refresh(!0);return}this._activeSelectionMode===2?this._model.selectionEnd[1]<this._model.selectionStart[1]?this._model.selectionEnd[0]=0:this._model.selectionEnd[0]=this._bufferService.cols:this._activeSelectionMode===1&&this._selectToWordAt(this._model.selectionEnd),this._dragScrollAmount=this._getMouseEventScrollAmount(t),this._activeSelectionMode!==3&&(this._dragScrollAmount>0?this._model.selectionEnd[0]=this._bufferService.cols:this._dragScrollAmount<0&&(this._model.selectionEnd[0]=0));let i=this._bufferService.buffer;if(this._model.selectionEnd[1]<i.lines.length){let n=i.lines.get(this._model.selectionEnd[1]);n&&n.hasWidth(this._model.selectionEnd[0])===0&&this._model.selectionEnd[0]<this._bufferService.cols&&this._model.selectionEnd[0]++}(!e||e[0]!==this._model.selectionEnd[0]||e[1]!==this._model.selectionEnd[1])&&this.refresh(!0)}_dragScroll(){if(!(!this._model.selectionEnd||!this._model.selectionStart)&&this._dragScrollAmount){this._onRequestScrollLines.fire({amount:this._dragScrollAmount,suppressScrollEvent:!1});let t=this._bufferService.buffer;this._dragScrollAmount>0?(this._activeSelectionMode!==3&&(this._model.selectionEnd[0]=this._bufferService.cols),this._model.selectionEnd[1]=Math.min(t.ydisp+this._bufferService.rows,t.lines.length-1)):(this._activeSelectionMode!==3&&(this._model.selectionEnd[0]=0),this._model.selectionEnd[1]=t.ydisp),this.refresh()}}_handleMouseUp(t){let e=t.timeStamp-this._mouseDownTimeStamp;if(this._removeMouseDownListeners(),this.selectionText.length<=1&&e<yw&&t.altKey&&this._optionsService.rawOptions.altClickMovesCursor){if(this._bufferService.buffer.ybase===this._bufferService.buffer.ydisp){let i=this._mouseService.getCoords(t,this._element,this._bufferService.cols,this._bufferService.rows,!1);if(i&&i[0]!==void 0&&i[1]!==void 0){let n=cw(i[0]-1,i[1]-1,this._bufferService,this._coreService.decPrivateModes.applicationCursorKeys);this._coreService.triggerDataEvent(n,!0)}}}else this._fireEventIfSelectionChanged()}_fireEventIfSelectionChanged(){let t=this._model.finalSelectionStart,e=this._model.finalSelectionEnd,i=!!t&&!!e&&(t[0]!==e[0]||t[1]!==e[1]);if(!i){this._oldHasSelection&&this._fireOnSelectionChange(t,e,i);return}!t||!e||(!this._oldSelectionStart||!this._oldSelectionEnd||t[0]!==this._oldSelectionStart[0]||t[1]!==this._oldSelectionStart[1]||e[0]!==this._oldSelectionEnd[0]||e[1]!==this._oldSelectionEnd[1])&&this._fireOnSelectionChange(t,e,i)}_fireOnSelectionChange(t,e,i){this._oldSelectionStart=t,this._oldSelectionEnd=e,this._oldHasSelection=i,this._onSelectionChange.fire()}_handleBufferActivate(t){this.clearSelection(),this._trimListener.dispose(),this._trimListener=t.activeBuffer.lines.onTrim(e=>this._handleTrim(e))}_convertViewportColToCharacterIndex(t,e){let i=e;for(let n=0;e>=n;n++){let r=t.loadCell(n,this._workCell).getChars().length;this._workCell.getWidth()===0?i--:r>1&&e!==n&&(i+=r-1)}return i}setSelection(t,e,i){this._model.clearSelection(),this._removeMouseDownListeners(),this._model.selectionStart=[t,e],this._model.selectionStartLength=i,this.refresh(),this._fireEventIfSelectionChanged()}rightClickSelect(t){this._isClickInSelection(t)||(this._selectWordAtCursor(t,!1)&&this.refresh(!0),this._fireEventIfSelectionChanged())}_getWordAt(t,e,i=!0,n=!0){if(t[0]>=this._bufferService.cols)return;let r=this._bufferService.buffer,s=r.lines.get(t[1]);if(!s)return;let o=r.translateBufferLineToString(t[1],!1),a=this._convertViewportColToCharacterIndex(s,t[0]),h=a,l=t[0]-a,u=0,c=0,d=0,f=0;if(o.charAt(a)===" "){for(;a>0&&o.charAt(a-1)===" ";)a--;for(;h<o.length&&o.charAt(h+1)===" ";)h++}else{let _=t[0],p=t[0];s.getWidth(_)===0&&(u++,_--),s.getWidth(p)===2&&(c++,p++);let b=s.getString(p).length;for(b>1&&(f+=b-1,h+=b-1);_>0&&a>0&&!this._isCharWordSeparator(s.loadCell(_-1,this._workCell));){s.loadCell(_-1,this._workCell);let w=this._workCell.getChars().length;this._workCell.getWidth()===0?(u++,_--):w>1&&(d+=w-1,a-=w-1),a--,_--}for(;p<s.length&&h+1<o.length&&!this._isCharWordSeparator(s.loadCell(p+1,this._workCell));){s.loadCell(p+1,this._workCell);let w=this._workCell.getChars().length;this._workCell.getWidth()===2?(c++,p++):w>1&&(f+=w-1,h+=w-1),h++,p++}}h++;let m=a+l-u+d,g=Math.min(this._bufferService.cols,h-a+u+c-d-f);if(!(!e&&o.slice(a,h).trim()==="")){if(i&&m===0&&s.getCodePoint(0)!==32){let _=r.lines.get(t[1]-1);if(_&&s.isWrapped&&_.getCodePoint(this._bufferService.cols-1)!==32){let p=this._getWordAt([this._bufferService.cols-1,t[1]-1],!1,!0,!1);if(p){let b=this._bufferService.cols-p.start;m-=b,g+=b}}}if(n&&m+g===this._bufferService.cols&&s.getCodePoint(this._bufferService.cols-1)!==32){let _=r.lines.get(t[1]+1);if(_?.isWrapped&&_.getCodePoint(0)!==32){let p=this._getWordAt([0,t[1]+1],!1,!1,!0);p&&(g+=p.length)}}return{start:m,length:g}}}_selectWordAt(t,e){let i=this._getWordAt(t,e);if(i){for(;i.start<0;)i.start+=this._bufferService.cols,t[1]--;this._model.selectionStart=[i.start,t[1]],this._model.selectionStartLength=i.length}}_selectToWordAt(t){let e=this._getWordAt(t,!0);if(e){let i=t[1];for(;e.start<0;)e.start+=this._bufferService.cols,i--;if(!this._model.areSelectionValuesReversed())for(;e.start+e.length>this._bufferService.cols;)e.length-=this._bufferService.cols,i++;this._model.selectionEnd=[this._model.areSelectionValuesReversed()?e.start:e.start+e.length,i]}}_isCharWordSeparator(t){return t.getWidth()===0?!1:this._optionsService.rawOptions.wordSeparator.indexOf(t.getChars())>=0}_selectLineAt(t){let e=this._bufferService.buffer.getWrappedRangeForLine(t),i={start:{x:0,y:e.first},end:{x:this._bufferService.cols-1,y:e.last}};this._model.selectionStart=[0,e.first],this._model.selectionEnd=void 0,this._model.selectionStartLength=_p(i,this._bufferService.cols)}};_u=bt([pe(3,ri),pe(4,Ar),pe(5,Tu),pe(6,si),pe(7,En),pe(8,Cn)],_u);var gp=class{constructor(){this._data={}}set(t,e,i){this._data[t]||(this._data[t]={}),this._data[t][e]=i}get(t,e){return this._data[t]?this._data[t][e]:void 0}clear(){this._data={}}},vp=class{constructor(){this._color=new gp,this._css=new gp}setCss(t,e,i){this._css.set(t,e,i)}getCss(t,e){return this._css.get(t,e)}setColor(t,e,i){this._color.set(t,e,i)}getColor(t,e){return this._color.get(t,e)}clear(){this._color.clear(),this._css.clear()}},Nt=Object.freeze((()=>{let t=[vt.toColor("#2e3436"),vt.toColor("#cc0000"),vt.toColor("#4e9a06"),vt.toColor("#c4a000"),vt.toColor("#3465a4"),vt.toColor("#75507b"),vt.toColor("#06989a"),vt.toColor("#d3d7cf"),vt.toColor("#555753"),vt.toColor("#ef2929"),vt.toColor("#8ae234"),vt.toColor("#fce94f"),vt.toColor("#729fcf"),vt.toColor("#ad7fa8"),vt.toColor("#34e2e2"),vt.toColor("#eeeeec")],e=[0,95,135,175,215,255];for(let i=0;i<216;i++){let n=e[i/36%6|0],r=e[i/6%6|0],s=e[i%6];t.push({css:Pt.toCss(n,r,s),rgba:Pt.toRgba(n,r,s)})}for(let i=0;i<24;i++){let n=8+i*10;t.push({css:Pt.toCss(n,n,n),rgba:Pt.toRgba(n,n,n)})}return t})()),br=vt.toColor("#ffffff"),so=vt.toColor("#000000"),Sp=vt.toColor("#ffffff"),yp=so,Qs={css:"rgba(255, 255, 255, 0.3)",rgba:4294967117},ww=br,gu=class extends ze{constructor(t){super(),this._optionsService=t,this._contrastCache=new vp,this._halfContrastCache=new vp,this._onChangeColors=this._register(new se),this.onChangeColors=this._onChangeColors.event,this._colors={foreground:br,background:so,cursor:Sp,cursorAccent:yp,selectionForeground:void 0,selectionBackgroundTransparent:Qs,selectionBackgroundOpaque:pt.blend(so,Qs),selectionInactiveBackgroundTransparent:Qs,selectionInactiveBackgroundOpaque:pt.blend(so,Qs),scrollbarSliderBackground:pt.opacity(br,.2),scrollbarSliderHoverBackground:pt.opacity(br,.4),scrollbarSliderActiveBackground:pt.opacity(br,.5),overviewRulerBorder:br,ansi:Nt.slice(),contrastCache:this._contrastCache,halfContrastCache:this._halfContrastCache},this._updateRestoreColors(),this._setTheme(this._optionsService.rawOptions.theme),this._register(this._optionsService.onSpecificOptionChange("minimumContrastRatio",()=>this._contrastCache.clear())),this._register(this._optionsService.onSpecificOptionChange("theme",()=>this._setTheme(this._optionsService.rawOptions.theme)))}get colors(){return this._colors}_setTheme(t={}){let e=this._colors;if(e.foreground=ot(t.foreground,br),e.background=ot(t.background,so),e.cursor=pt.blend(e.background,ot(t.cursor,Sp)),e.cursorAccent=pt.blend(e.background,ot(t.cursorAccent,yp)),e.selectionBackgroundTransparent=ot(t.selectionBackground,Qs),e.selectionBackgroundOpaque=pt.blend(e.background,e.selectionBackgroundTransparent),e.selectionInactiveBackgroundTransparent=ot(t.selectionInactiveBackground,e.selectionBackgroundTransparent),e.selectionInactiveBackgroundOpaque=pt.blend(e.background,e.selectionInactiveBackgroundTransparent),e.selectionForeground=t.selectionForeground?ot(t.selectionForeground,fp):void 0,e.selectionForeground===fp&&(e.selectionForeground=void 0),pt.isOpaque(e.selectionBackgroundTransparent)&&(e.selectionBackgroundTransparent=pt.opacity(e.selectionBackgroundTransparent,.3)),pt.isOpaque(e.selectionInactiveBackgroundTransparent)&&(e.selectionInactiveBackgroundTransparent=pt.opacity(e.selectionInactiveBackgroundTransparent,.3)),e.scrollbarSliderBackground=ot(t.scrollbarSliderBackground,pt.opacity(e.foreground,.2)),e.scrollbarSliderHoverBackground=ot(t.scrollbarSliderHoverBackground,pt.opacity(e.foreground,.4)),e.scrollbarSliderActiveBackground=ot(t.scrollbarSliderActiveBackground,pt.opacity(e.foreground,.5)),e.overviewRulerBorder=ot(t.overviewRulerBorder,ww),e.ansi=Nt.slice(),e.ansi[0]=ot(t.black,Nt[0]),e.ansi[1]=ot(t.red,Nt[1]),e.ansi[2]=ot(t.green,Nt[2]),e.ansi[3]=ot(t.yellow,Nt[3]),e.ansi[4]=ot(t.blue,Nt[4]),e.ansi[5]=ot(t.magenta,Nt[5]),e.ansi[6]=ot(t.cyan,Nt[6]),e.ansi[7]=ot(t.white,Nt[7]),e.ansi[8]=ot(t.brightBlack,Nt[8]),e.ansi[9]=ot(t.brightRed,Nt[9]),e.ansi[10]=ot(t.brightGreen,Nt[10]),e.ansi[11]=ot(t.brightYellow,Nt[11]),e.ansi[12]=ot(t.brightBlue,Nt[12]),e.ansi[13]=ot(t.brightMagenta,Nt[13]),e.ansi[14]=ot(t.brightCyan,Nt[14]),e.ansi[15]=ot(t.brightWhite,Nt[15]),t.extendedAnsi){let i=Math.min(e.ansi.length-16,t.extendedAnsi.length);for(let n=0;n<i;n++)e.ansi[n+16]=ot(t.extendedAnsi[n],Nt[n+16])}this._contrastCache.clear(),this._halfContrastCache.clear(),this._updateRestoreColors(),this._onChangeColors.fire(this.colors)}restoreColor(t){this._restoreColor(t),this._onChangeColors.fire(this.colors)}_restoreColor(t){if(t===void 0){for(let e=0;e<this._restoreColors.ansi.length;++e)this._colors.ansi[e]=this._restoreColors.ansi[e];return}switch(t){case 256:this._colors.foreground=this._restoreColors.foreground;break;case 257:this._colors.background=this._restoreColors.background;break;case 258:this._colors.cursor=this._restoreColors.cursor;break;default:this._colors.ansi[t]=this._restoreColors.ansi[t]}}modifyColors(t){t(this._colors),this._onChangeColors.fire(this.colors)}_updateRestoreColors(){this._restoreColors={foreground:this._colors.foreground,background:this._colors.background,cursor:this._colors.cursor,ansi:this._colors.ansi.slice()}}};gu=bt([pe(0,si)],gu);function ot(t,e){if(t!==void 0)try{return vt.toColor(t)}catch{}return e}var Mw=class{constructor(...t){this._entries=new Map;for(let[e,i]of t)this.set(e,i)}set(t,e){let i=this._entries.get(t);return this._entries.set(t,e),i}forEach(t){for(let[e,i]of this._entries.entries())t(e,i)}has(t){return this._entries.has(t)}get(t){return this._entries.get(t)}},Cw=class{constructor(){this._services=new Mw,this._services.set(Eu,this)}setService(t,e){this._services.set(t,e)}getService(t){return this._services.get(t)}createInstance(t,...e){let i=Xy(t).sort((s,o)=>s.index-o.index),n=[];for(let s of i){let o=this._services.get(s.id);if(!o)throw new Error(`[createInstance] ${t.name} depends on UNKNOWN service ${s.id._id}.`);n.push(o)}let r=i.length>0?i[0].index:e.length;if(e.length!==r)throw new Error(`[createInstance] First service dependency of ${t.name} at position ${r+1} conflicts with ${e.length} static arguments`);return new t(...e,...n)}},Ew={trace:0,debug:1,info:2,warn:3,error:4,off:5},Tw="xterm.js: ",vu=class extends ze{constructor(t){super(),this._optionsService=t,this._logLevel=5,this._updateLogLevel(),this._register(this._optionsService.onSpecificOptionChange("logLevel",()=>this._updateLogLevel())),Aw=this}get logLevel(){return this._logLevel}_updateLogLevel(){this._logLevel=Ew[this._optionsService.rawOptions.logLevel]}_evalLazyOptionalParams(t){for(let e=0;e<t.length;e++)typeof t[e]=="function"&&(t[e]=t[e]())}_log(t,e,i){this._evalLazyOptionalParams(i),t.call(console,(this._optionsService.options.logger?"":Tw)+e,...i)}trace(t,...e){this._logLevel<=0&&this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger)??console.log,t,e)}debug(t,...e){this._logLevel<=1&&this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger)??console.log,t,e)}info(t,...e){this._logLevel<=2&&this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger)??console.info,t,e)}warn(t,...e){this._logLevel<=3&&this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger)??console.warn,t,e)}error(t,...e){this._logLevel<=4&&this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger)??console.error,t,e)}};vu=bt([pe(0,si)],vu);var Aw,xp=class extends ze{constructor(t){super(),this._maxLength=t,this.onDeleteEmitter=this._register(new se),this.onDelete=this.onDeleteEmitter.event,this.onInsertEmitter=this._register(new se),this.onInsert=this.onInsertEmitter.event,this.onTrimEmitter=this._register(new se),this.onTrim=this.onTrimEmitter.event,this._array=new Array(this._maxLength),this._startIndex=0,this._length=0}get maxLength(){return this._maxLength}set maxLength(t){if(this._maxLength===t)return;let e=new Array(t);for(let i=0;i<Math.min(t,this.length);i++)e[i]=this._array[this._getCyclicIndex(i)];this._array=e,this._maxLength=t,this._startIndex=0}get length(){return this._length}set length(t){if(t>this._length)for(let e=this._length;e<t;e++)this._array[e]=void 0;this._length=t}get(t){return this._array[this._getCyclicIndex(t)]}set(t,e){this._array[this._getCyclicIndex(t)]=e}push(t){this._array[this._getCyclicIndex(this._length)]=t,this._length===this._maxLength?(this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1)):this._length++}recycle(){if(this._length!==this._maxLength)throw new Error("Can only recycle when the buffer is full");return this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1),this._array[this._getCyclicIndex(this._length-1)]}get isFull(){return this._length===this._maxLength}pop(){return this._array[this._getCyclicIndex(this._length---1)]}splice(t,e,...i){if(e){for(let n=t;n<this._length-e;n++)this._array[this._getCyclicIndex(n)]=this._array[this._getCyclicIndex(n+e)];this._length-=e,this.onDeleteEmitter.fire({index:t,amount:e})}for(let n=this._length-1;n>=t;n--)this._array[this._getCyclicIndex(n+i.length)]=this._array[this._getCyclicIndex(n)];for(let n=0;n<i.length;n++)this._array[this._getCyclicIndex(t+n)]=i[n];if(i.length&&this.onInsertEmitter.fire({index:t,amount:i.length}),this._length+i.length>this._maxLength){let n=this._length+i.length-this._maxLength;this._startIndex+=n,this._length=this._maxLength,this.onTrimEmitter.fire(n)}else this._length+=i.length}trimStart(t){t>this._length&&(t=this._length),this._startIndex+=t,this._length-=t,this.onTrimEmitter.fire(t)}shiftElements(t,e,i){if(!(e<=0)){if(t<0||t>=this._length)throw new Error("start argument out of range");if(t+i<0)throw new Error("Cannot shift elements in list beyond index 0");if(i>0){for(let r=e-1;r>=0;r--)this.set(t+r+i,this.get(t+r));let n=t+e+i-this._length;if(n>0)for(this._length+=n;this._length>this._maxLength;)this._length--,this._startIndex++,this.onTrimEmitter.fire(1)}else for(let n=0;n<e;n++)this.set(t+n+i,this.get(t+n))}}_getCyclicIndex(t){return(this._startIndex+t)%this._maxLength}},Ge=3,Rt=Object.freeze(new _o),El=0,kc=2,oo=class Bm{constructor(e,i,n=!1){this.isWrapped=n,this._combined={},this._extendedAttrs={},this._data=new Uint32Array(e*Ge);let r=i||Ii.fromCharData([0,Xp,1,0]);for(let s=0;s<e;++s)this.setCell(s,r);this.length=e}get(e){let i=this._data[e*Ge+0],n=i&2097151;return[this._data[e*Ge+1],i&2097152?this._combined[e]:n?Kn(n):"",i>>22,i&2097152?this._combined[e].charCodeAt(this._combined[e].length-1):n]}set(e,i){this._data[e*Ge+1]=i[0],i[1].length>1?(this._combined[e]=i[1],this._data[e*Ge+0]=e|2097152|i[2]<<22):this._data[e*Ge+0]=i[1].charCodeAt(0)|i[2]<<22}getWidth(e){return this._data[e*Ge+0]>>22}hasWidth(e){return this._data[e*Ge+0]&12582912}getFg(e){return this._data[e*Ge+1]}getBg(e){return this._data[e*Ge+2]}hasContent(e){return this._data[e*Ge+0]&4194303}getCodePoint(e){let i=this._data[e*Ge+0];return i&2097152?this._combined[e].charCodeAt(this._combined[e].length-1):i&2097151}isCombined(e){return this._data[e*Ge+0]&2097152}getString(e){let i=this._data[e*Ge+0];return i&2097152?this._combined[e]:i&2097151?Kn(i&2097151):""}isProtected(e){return this._data[e*Ge+2]&536870912}loadCell(e,i){return El=e*Ge,i.content=this._data[El+0],i.fg=this._data[El+1],i.bg=this._data[El+2],i.content&2097152&&(i.combinedData=this._combined[e]),i.bg&268435456&&(i.extended=this._extendedAttrs[e]),i}setCell(e,i){i.content&2097152&&(this._combined[e]=i.combinedData),i.bg&268435456&&(this._extendedAttrs[e]=i.extended),this._data[e*Ge+0]=i.content,this._data[e*Ge+1]=i.fg,this._data[e*Ge+2]=i.bg}setCellFromCodepoint(e,i,n,r){r.bg&268435456&&(this._extendedAttrs[e]=r.extended),this._data[e*Ge+0]=i|n<<22,this._data[e*Ge+1]=r.fg,this._data[e*Ge+2]=r.bg}addCodepointToCell(e,i,n){let r=this._data[e*Ge+0];r&2097152?this._combined[e]+=Kn(i):r&2097151?(this._combined[e]=Kn(r&2097151)+Kn(i),r&=-2097152,r|=2097152):r=i|1<<22,n&&(r&=-12582913,r|=n<<22),this._data[e*Ge+0]=r}insertCells(e,i,n){if(e%=this.length,e&&this.getWidth(e-1)===2&&this.setCellFromCodepoint(e-1,0,1,n),i<this.length-e){let r=new Ii;for(let s=this.length-e-i-1;s>=0;--s)this.setCell(e+i+s,this.loadCell(e+s,r));for(let s=0;s<i;++s)this.setCell(e+s,n)}else for(let r=e;r<this.length;++r)this.setCell(r,n);this.getWidth(this.length-1)===2&&this.setCellFromCodepoint(this.length-1,0,1,n)}deleteCells(e,i,n){if(e%=this.length,i<this.length-e){let r=new Ii;for(let s=0;s<this.length-e-i;++s)this.setCell(e+s,this.loadCell(e+i+s,r));for(let s=this.length-i;s<this.length;++s)this.setCell(s,n)}else for(let r=e;r<this.length;++r)this.setCell(r,n);e&&this.getWidth(e-1)===2&&this.setCellFromCodepoint(e-1,0,1,n),this.getWidth(e)===0&&!this.hasContent(e)&&this.setCellFromCodepoint(e,0,1,n)}replaceCells(e,i,n,r=!1){if(r){for(e&&this.getWidth(e-1)===2&&!this.isProtected(e-1)&&this.setCellFromCodepoint(e-1,0,1,n),i<this.length&&this.getWidth(i-1)===2&&!this.isProtected(i)&&this.setCellFromCodepoint(i,0,1,n);e<i&&e<this.length;)this.isProtected(e)||this.setCell(e,n),e++;return}for(e&&this.getWidth(e-1)===2&&this.setCellFromCodepoint(e-1,0,1,n),i<this.length&&this.getWidth(i-1)===2&&this.setCellFromCodepoint(i,0,1,n);e<i&&e<this.length;)this.setCell(e++,n)}resize(e,i){if(e===this.length)return this._data.length*4*kc<this._data.buffer.byteLength;let n=e*Ge;if(e>this.length){if(this._data.buffer.byteLength>=n*4)this._data=new Uint32Array(this._data.buffer,0,n);else{let r=new Uint32Array(n);r.set(this._data),this._data=r}for(let r=this.length;r<e;++r)this.setCell(r,i)}else{this._data=this._data.subarray(0,n);let r=Object.keys(this._combined);for(let o=0;o<r.length;o++){let a=parseInt(r[o],10);a>=e&&delete this._combined[a]}let s=Object.keys(this._extendedAttrs);for(let o=0;o<s.length;o++){let a=parseInt(s[o],10);a>=e&&delete this._extendedAttrs[a]}}return this.length=e,n*4*kc<this._data.buffer.byteLength}cleanupMemory(){if(this._data.length*4*kc<this._data.buffer.byteLength){let e=new Uint32Array(this._data.length);return e.set(this._data),this._data=e,1}return 0}fill(e,i=!1){if(i){for(let n=0;n<this.length;++n)this.isProtected(n)||this.setCell(n,e);return}this._combined={},this._extendedAttrs={};for(let n=0;n<this.length;++n)this.setCell(n,e)}copyFrom(e){this.length!==e.length?this._data=new Uint32Array(e._data):this._data.set(e._data),this.length=e.length,this._combined={};for(let i in e._combined)this._combined[i]=e._combined[i];this._extendedAttrs={};for(let i in e._extendedAttrs)this._extendedAttrs[i]=e._extendedAttrs[i];this.isWrapped=e.isWrapped}clone(){let e=new Bm(0);e._data=new Uint32Array(this._data),e.length=this.length;for(let i in this._combined)e._combined[i]=this._combined[i];for(let i in this._extendedAttrs)e._extendedAttrs[i]=this._extendedAttrs[i];return e.isWrapped=this.isWrapped,e}getTrimmedLength(){for(let e=this.length-1;e>=0;--e)if(this._data[e*Ge+0]&4194303)return e+(this._data[e*Ge+0]>>22);return 0}getNoBgTrimmedLength(){for(let e=this.length-1;e>=0;--e)if(this._data[e*Ge+0]&4194303||this._data[e*Ge+2]&50331648)return e+(this._data[e*Ge+0]>>22);return 0}copyCellsFrom(e,i,n,r,s){let o=e._data;if(s)for(let h=r-1;h>=0;h--){for(let l=0;l<Ge;l++)this._data[(n+h)*Ge+l]=o[(i+h)*Ge+l];o[(i+h)*Ge+2]&268435456&&(this._extendedAttrs[n+h]=e._extendedAttrs[i+h])}else for(let h=0;h<r;h++){for(let l=0;l<Ge;l++)this._data[(n+h)*Ge+l]=o[(i+h)*Ge+l];o[(i+h)*Ge+2]&268435456&&(this._extendedAttrs[n+h]=e._extendedAttrs[i+h])}let a=Object.keys(e._combined);for(let h=0;h<a.length;h++){let l=parseInt(a[h],10);l>=i&&(this._combined[l-i+n]=e._combined[l])}}translateToString(e,i,n,r){i=i??0,n=n??this.length,e&&(n=Math.min(n,this.getTrimmedLength())),r&&(r.length=0);let s="";for(;i<n;){let o=this._data[i*Ge+0],a=o&2097151,h=o&2097152?this._combined[i]:a?Kn(a):Zn;if(s+=h,r)for(let l=0;l<h.length;++l)r.push(i);i+=o>>22||1}return r&&r.push(i),s}};function Rw(t,e,i,n,r,s){let o=[];for(let a=0;a<t.length-1;a++){let h=a,l=t.get(++h);if(!l.isWrapped)continue;let u=[t.get(a)];for(;h<t.length&&l.isWrapped;)u.push(l),l=t.get(++h);if(!s&&n>=a&&n<h){a+=u.length-1;continue}let c=0,d=mo(u,c,e),f=1,m=0;for(;f<u.length;){let _=mo(u,f,e),p=_-m,b=i-d,w=Math.min(p,b);u[c].copyCellsFrom(u[f],m,d,w,!1),d+=w,d===i&&(c++,d=0),m+=w,m===_&&(f++,m=0),d===0&&c!==0&&u[c-1].getWidth(i-1)===2&&(u[c].copyCellsFrom(u[c-1],i-1,d++,1,!1),u[c-1].setCell(i-1,r))}u[c].replaceCells(d,i,r);let g=0;for(let _=u.length-1;_>0&&(_>c||u[_].getTrimmedLength()===0);_--)g++;g>0&&(o.push(a+u.length-g),o.push(g)),a+=u.length-1}return o}function Pw(t,e){let i=[],n=0,r=e[n],s=0;for(let o=0;o<t.length;o++)if(r===o){let a=e[++n];t.onDeleteEmitter.fire({index:o-s,amount:a}),o+=a-1,s+=a,r=e[++n]}else i.push(o);return{layout:i,countRemoved:s}}function Iw(t,e){let i=[];for(let n=0;n<e.length;n++)i.push(t.get(e[n]));for(let n=0;n<i.length;n++)t.set(n,i[n]);t.length=e.length}function Lw(t,e,i){let n=[],r=t.map((h,l)=>mo(t,l,e)).reduce((h,l)=>h+l),s=0,o=0,a=0;for(;a<r;){if(r-a<i){n.push(r-a);break}s+=i;let h=mo(t,o,e);s>h&&(s-=h,o++);let l=t[o].getWidth(s-1)===2;l&&s--;let u=l?i-1:i;n.push(u),a+=u}return n}function mo(t,e,i){if(e===t.length-1)return t[e].getTrimmedLength();let n=!t[e].hasContent(i-1)&&t[e].getWidth(i-1)===1,r=t[e+1].getWidth(0)===2;return n&&r?i-1:i}var km=class Fm{constructor(e){this.line=e,this.isDisposed=!1,this._disposables=[],this._id=Fm._nextId++,this._onDispose=this.register(new se),this.onDispose=this._onDispose.event}get id(){return this._id}dispose(){this.isDisposed||(this.isDisposed=!0,this.line=-1,this._onDispose.fire(),Er(this._disposables),this._disposables.length=0)}register(e){return this._disposables.push(e),e}};km._nextId=1;var Dw=km,kt={},wr=kt.B;kt[0]={"`":"\u25C6",a:"\u2592",b:"\u2409",c:"\u240C",d:"\u240D",e:"\u240A",f:"\xB0",g:"\xB1",h:"\u2424",i:"\u240B",j:"\u2518",k:"\u2510",l:"\u250C",m:"\u2514",n:"\u253C",o:"\u23BA",p:"\u23BB",q:"\u2500",r:"\u23BC",s:"\u23BD",t:"\u251C",u:"\u2524",v:"\u2534",w:"\u252C",x:"\u2502",y:"\u2264",z:"\u2265","{":"\u03C0","|":"\u2260","}":"\xA3","~":"\xB7"};kt.A={"#":"\xA3"};kt.B=void 0;kt[4]={"#":"\xA3","@":"\xBE","[":"ij","\\":"\xBD","]":"|","{":"\xA8","|":"f","}":"\xBC","~":"\xB4"};kt.C=kt[5]={"[":"\xC4","\\":"\xD6","]":"\xC5","^":"\xDC","`":"\xE9","{":"\xE4","|":"\xF6","}":"\xE5","~":"\xFC"};kt.R={"#":"\xA3","@":"\xE0","[":"\xB0","\\":"\xE7","]":"\xA7","{":"\xE9","|":"\xF9","}":"\xE8","~":"\xA8"};kt.Q={"@":"\xE0","[":"\xE2","\\":"\xE7","]":"\xEA","^":"\xEE","`":"\xF4","{":"\xE9","|":"\xF9","}":"\xE8","~":"\xFB"};kt.K={"@":"\xA7","[":"\xC4","\\":"\xD6","]":"\xDC","{":"\xE4","|":"\xF6","}":"\xFC","~":"\xDF"};kt.Y={"#":"\xA3","@":"\xA7","[":"\xB0","\\":"\xE7","]":"\xE9","`":"\xF9","{":"\xE0","|":"\xF2","}":"\xE8","~":"\xEC"};kt.E=kt[6]={"@":"\xC4","[":"\xC6","\\":"\xD8","]":"\xC5","^":"\xDC","`":"\xE4","{":"\xE6","|":"\xF8","}":"\xE5","~":"\xFC"};kt.Z={"#":"\xA3","@":"\xA7","[":"\xA1","\\":"\xD1","]":"\xBF","{":"\xB0","|":"\xF1","}":"\xE7"};kt.H=kt[7]={"@":"\xC9","[":"\xC4","\\":"\xD6","]":"\xC5","^":"\xDC","`":"\xE9","{":"\xE4","|":"\xF6","}":"\xE5","~":"\xFC"};kt["="]={"#":"\xF9","@":"\xE0","[":"\xE9","\\":"\xE7","]":"\xEA","^":"\xEE",_:"\xE8","`":"\xF4","{":"\xE4","|":"\xF6","}":"\xFC","~":"\xFB"};var bp=4294967295,wp=class{constructor(t,e,i){this._hasScrollback=t,this._optionsService=e,this._bufferService=i,this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.tabs={},this.savedY=0,this.savedX=0,this.savedCurAttrData=Rt.clone(),this.savedCharset=wr,this.markers=[],this._nullCell=Ii.fromCharData([0,Xp,1,0]),this._whitespaceCell=Ii.fromCharData([0,Zn,1,32]),this._isClearing=!1,this._memoryCleanupQueue=new Gl,this._memoryCleanupPosition=0,this._cols=this._bufferService.cols,this._rows=this._bufferService.rows,this.lines=new xp(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}getNullCell(t){return t?(this._nullCell.fg=t.fg,this._nullCell.bg=t.bg,this._nullCell.extended=t.extended):(this._nullCell.fg=0,this._nullCell.bg=0,this._nullCell.extended=new Fl),this._nullCell}getWhitespaceCell(t){return t?(this._whitespaceCell.fg=t.fg,this._whitespaceCell.bg=t.bg,this._whitespaceCell.extended=t.extended):(this._whitespaceCell.fg=0,this._whitespaceCell.bg=0,this._whitespaceCell.extended=new Fl),this._whitespaceCell}getBlankLine(t,e){return new oo(this._bufferService.cols,this.getNullCell(t),e)}get hasScrollback(){return this._hasScrollback&&this.lines.maxLength>this._rows}get isCursorInViewport(){let t=this.ybase+this.y-this.ydisp;return t>=0&&t<this._rows}_getCorrectBufferLength(t){if(!this._hasScrollback)return t;let e=t+this._optionsService.rawOptions.scrollback;return e>bp?bp:e}fillViewportRows(t){if(this.lines.length===0){t===void 0&&(t=Rt);let e=this._rows;for(;e--;)this.lines.push(this.getBlankLine(t))}}clear(){this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.lines=new xp(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}resize(t,e){let i=this.getNullCell(Rt),n=0,r=this._getCorrectBufferLength(e);if(r>this.lines.maxLength&&(this.lines.maxLength=r),this.lines.length>0){if(this._cols<t)for(let o=0;o<this.lines.length;o++)n+=+this.lines.get(o).resize(t,i);let s=0;if(this._rows<e)for(let o=this._rows;o<e;o++)this.lines.length<e+this.ybase&&(this._optionsService.rawOptions.windowsMode||this._optionsService.rawOptions.windowsPty.backend!==void 0||this._optionsService.rawOptions.windowsPty.buildNumber!==void 0?this.lines.push(new oo(t,i)):this.ybase>0&&this.lines.length<=this.ybase+this.y+s+1?(this.ybase--,s++,this.ydisp>0&&this.ydisp--):this.lines.push(new oo(t,i)));else for(let o=this._rows;o>e;o--)this.lines.length>e+this.ybase&&(this.lines.length>this.ybase+this.y+1?this.lines.pop():(this.ybase++,this.ydisp++));if(r<this.lines.maxLength){let o=this.lines.length-r;o>0&&(this.lines.trimStart(o),this.ybase=Math.max(this.ybase-o,0),this.ydisp=Math.max(this.ydisp-o,0),this.savedY=Math.max(this.savedY-o,0)),this.lines.maxLength=r}this.x=Math.min(this.x,t-1),this.y=Math.min(this.y,e-1),s&&(this.y+=s),this.savedX=Math.min(this.savedX,t-1),this.scrollTop=0}if(this.scrollBottom=e-1,this._isReflowEnabled&&(this._reflow(t,e),this._cols>t))for(let s=0;s<this.lines.length;s++)n+=+this.lines.get(s).resize(t,i);this._cols=t,this._rows=e,this._memoryCleanupQueue.clear(),n>.1*this.lines.length&&(this._memoryCleanupPosition=0,this._memoryCleanupQueue.enqueue(()=>this._batchedMemoryCleanup()))}_batchedMemoryCleanup(){let t=!0;this._memoryCleanupPosition>=this.lines.length&&(this._memoryCleanupPosition=0,t=!1);let e=0;for(;this._memoryCleanupPosition<this.lines.length;)if(e+=this.lines.get(this._memoryCleanupPosition++).cleanupMemory(),e>100)return!0;return t}get _isReflowEnabled(){let t=this._optionsService.rawOptions.windowsPty;return t&&t.buildNumber?this._hasScrollback&&t.backend==="conpty"&&t.buildNumber>=21376:this._hasScrollback&&!this._optionsService.rawOptions.windowsMode}_reflow(t,e){this._cols!==t&&(t>this._cols?this._reflowLarger(t,e):this._reflowSmaller(t,e))}_reflowLarger(t,e){let i=this._optionsService.rawOptions.reflowCursorLine,n=Rw(this.lines,this._cols,t,this.ybase+this.y,this.getNullCell(Rt),i);if(n.length>0){let r=Pw(this.lines,n);Iw(this.lines,r.layout),this._reflowLargerAdjustViewport(t,e,r.countRemoved)}}_reflowLargerAdjustViewport(t,e,i){let n=this.getNullCell(Rt),r=i;for(;r-- >0;)this.ybase===0?(this.y>0&&this.y--,this.lines.length<e&&this.lines.push(new oo(t,n))):(this.ydisp===this.ybase&&this.ydisp--,this.ybase--);this.savedY=Math.max(this.savedY-i,0)}_reflowSmaller(t,e){let i=this._optionsService.rawOptions.reflowCursorLine,n=this.getNullCell(Rt),r=[],s=0;for(let o=this.lines.length-1;o>=0;o--){let a=this.lines.get(o);if(!a||!a.isWrapped&&a.getTrimmedLength()<=t)continue;let h=[a];for(;a.isWrapped&&o>0;)a=this.lines.get(--o),h.unshift(a);if(!i){let w=this.ybase+this.y;if(w>=o&&w<o+h.length)continue}let l=h[h.length-1].getTrimmedLength(),u=Lw(h,this._cols,t),c=u.length-h.length,d;this.ybase===0&&this.y!==this.lines.length-1?d=Math.max(0,this.y-this.lines.maxLength+c):d=Math.max(0,this.lines.length-this.lines.maxLength+c);let f=[];for(let w=0;w<c;w++){let x=this.getBlankLine(Rt,!0);f.push(x)}f.length>0&&(r.push({start:o+h.length+s,newLines:f}),s+=f.length),h.push(...f);let m=u.length-1,g=u[m];g===0&&(m--,g=u[m]);let _=h.length-c-1,p=l;for(;_>=0;){let w=Math.min(p,g);if(h[m]===void 0)break;if(h[m].copyCellsFrom(h[_],p-w,g-w,w,!0),g-=w,g===0&&(m--,g=u[m]),p-=w,p===0){_--;let x=Math.max(_,0);p=mo(h,x,this._cols)}}for(let w=0;w<h.length;w++)u[w]<t&&h[w].setCell(u[w],n);let b=c-d;for(;b-- >0;)this.ybase===0?this.y<e-1?(this.y++,this.lines.pop()):(this.ybase++,this.ydisp++):this.ybase<Math.min(this.lines.maxLength,this.lines.length+s)-e&&(this.ybase===this.ydisp&&this.ydisp++,this.ybase++);this.savedY=Math.min(this.savedY+c,this.ybase+e-1)}if(r.length>0){let o=[],a=[];for(let g=0;g<this.lines.length;g++)a.push(this.lines.get(g));let h=this.lines.length,l=h-1,u=0,c=r[u];this.lines.length=Math.min(this.lines.maxLength,this.lines.length+s);let d=0;for(let g=Math.min(this.lines.maxLength-1,h+s-1);g>=0;g--)if(c&&c.start>l+d){for(let _=c.newLines.length-1;_>=0;_--)this.lines.set(g--,c.newLines[_]);g++,o.push({index:l+1,amount:c.newLines.length}),d+=c.newLines.length,c=r[++u]}else this.lines.set(g,a[l--]);let f=0;for(let g=o.length-1;g>=0;g--)o[g].index+=f,this.lines.onInsertEmitter.fire(o[g]),f+=o[g].amount;let m=Math.max(0,h+s-this.lines.maxLength);m>0&&this.lines.onTrimEmitter.fire(m)}}translateBufferLineToString(t,e,i=0,n){let r=this.lines.get(t);return r?r.translateToString(e,i,n):""}getWrappedRangeForLine(t){let e=t,i=t;for(;e>0&&this.lines.get(e).isWrapped;)e--;for(;i+1<this.lines.length&&this.lines.get(i+1).isWrapped;)i++;return{first:e,last:i}}setupTabStops(t){for(t!=null?this.tabs[t]||(t=this.prevStop(t)):(this.tabs={},t=0);t<this._cols;t+=this._optionsService.rawOptions.tabStopWidth)this.tabs[t]=!0}prevStop(t){for(t==null&&(t=this.x);!this.tabs[--t]&&t>0;);return t>=this._cols?this._cols-1:t<0?0:t}nextStop(t){for(t==null&&(t=this.x);!this.tabs[++t]&&t<this._cols;);return t>=this._cols?this._cols-1:t<0?0:t}clearMarkers(t){this._isClearing=!0;for(let e=0;e<this.markers.length;e++)this.markers[e].line===t&&(this.markers[e].dispose(),this.markers.splice(e--,1));this._isClearing=!1}clearAllMarkers(){this._isClearing=!0;for(let t=0;t<this.markers.length;t++)this.markers[t].dispose();this.markers.length=0,this._isClearing=!1}addMarker(t){let e=new Dw(t);return this.markers.push(e),e.register(this.lines.onTrim(i=>{e.line-=i,e.line<0&&e.dispose()})),e.register(this.lines.onInsert(i=>{e.line>=i.index&&(e.line+=i.amount)})),e.register(this.lines.onDelete(i=>{e.line>=i.index&&e.line<i.index+i.amount&&e.dispose(),e.line>i.index&&(e.line-=i.amount)})),e.register(e.onDispose(()=>this._removeMarker(e))),e}_removeMarker(t){this._isClearing||this.markers.splice(this.markers.indexOf(t),1)}},Nw=class extends ze{constructor(t,e){super(),this._optionsService=t,this._bufferService=e,this._onBufferActivate=this._register(new se),this.onBufferActivate=this._onBufferActivate.event,this.reset(),this._register(this._optionsService.onSpecificOptionChange("scrollback",()=>this.resize(this._bufferService.cols,this._bufferService.rows))),this._register(this._optionsService.onSpecificOptionChange("tabStopWidth",()=>this.setupTabStops()))}reset(){this._normal=new wp(!0,this._optionsService,this._bufferService),this._normal.fillViewportRows(),this._alt=new wp(!1,this._optionsService,this._bufferService),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}),this.setupTabStops()}get alt(){return this._alt}get active(){return this._activeBuffer}get normal(){return this._normal}activateNormalBuffer(){this._activeBuffer!==this._normal&&(this._normal.x=this._alt.x,this._normal.y=this._alt.y,this._alt.clearAllMarkers(),this._alt.clear(),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}))}activateAltBuffer(t){this._activeBuffer!==this._alt&&(this._alt.fillViewportRows(t),this._alt.x=this._normal.x,this._alt.y=this._normal.y,this._activeBuffer=this._alt,this._onBufferActivate.fire({activeBuffer:this._alt,inactiveBuffer:this._normal}))}resize(t,e){this._normal.resize(t,e),this._alt.resize(t,e),this.setupTabStops(t)}setupTabStops(t){this._normal.setupTabStops(t),this._alt.setupTabStops(t)}},Om=2,Um=1,Su=class extends ze{constructor(t){super(),this.isUserScrolling=!1,this._onResize=this._register(new se),this.onResize=this._onResize.event,this._onScroll=this._register(new se),this.onScroll=this._onScroll.event,this.cols=Math.max(t.rawOptions.cols||0,Om),this.rows=Math.max(t.rawOptions.rows||0,Um),this.buffers=this._register(new Nw(t,this)),this._register(this.buffers.onBufferActivate(e=>{this._onScroll.fire(e.activeBuffer.ydisp)}))}get buffer(){return this.buffers.active}resize(t,e){let i=this.cols!==t,n=this.rows!==e;this.cols=t,this.rows=e,this.buffers.resize(t,e),this._onResize.fire({cols:t,rows:e,colsChanged:i,rowsChanged:n})}reset(){this.buffers.reset(),this.isUserScrolling=!1}scroll(t,e=!1){let i=this.buffer,n;n=this._cachedBlankLine,(!n||n.length!==this.cols||n.getFg(0)!==t.fg||n.getBg(0)!==t.bg)&&(n=i.getBlankLine(t,e),this._cachedBlankLine=n),n.isWrapped=e;let r=i.ybase+i.scrollTop,s=i.ybase+i.scrollBottom;if(i.scrollTop===0){let o=i.lines.isFull;s===i.lines.length-1?o?i.lines.recycle().copyFrom(n):i.lines.push(n.clone()):i.lines.splice(s+1,0,n.clone()),o?this.isUserScrolling&&(i.ydisp=Math.max(i.ydisp-1,0)):(i.ybase++,this.isUserScrolling||i.ydisp++)}else{let o=s-r+1;i.lines.shiftElements(r+1,o-1,-1),i.lines.set(s,n.clone())}this.isUserScrolling||(i.ydisp=i.ybase),this._onScroll.fire(i.ydisp)}scrollLines(t,e){let i=this.buffer;if(t<0){if(i.ydisp===0)return;this.isUserScrolling=!0}else t+i.ydisp>=i.ybase&&(this.isUserScrolling=!1);let n=i.ydisp;i.ydisp=Math.max(Math.min(i.ydisp+t,i.ybase),0),n!==i.ydisp&&(e||this._onScroll.fire(i.ydisp))}};Su=bt([pe(0,si)],Su);var ls={cols:80,rows:24,cursorBlink:!1,cursorStyle:"block",cursorWidth:1,cursorInactiveStyle:"outline",customGlyphs:!0,drawBoldTextInBrightColors:!0,documentOverride:null,fastScrollModifier:"alt",fastScrollSensitivity:5,fontFamily:"monospace",fontSize:15,fontWeight:"normal",fontWeightBold:"bold",ignoreBracketedPasteMode:!1,lineHeight:1,letterSpacing:0,linkHandler:null,logLevel:"info",logger:null,scrollback:1e3,scrollOnEraseInDisplay:!1,scrollOnUserInput:!0,scrollSensitivity:1,screenReaderMode:!1,smoothScrollDuration:0,macOptionIsMeta:!1,macOptionClickForcesSelection:!1,minimumContrastRatio:1,disableStdin:!1,allowProposedApi:!1,allowTransparency:!1,tabStopWidth:8,theme:{},reflowCursorLine:!1,rescaleOverlappingGlyphs:!1,rightClickSelectsWord:Wl,windowOptions:{},windowsMode:!1,windowsPty:{},wordSeparator:" ()[]{}',\"`",altClickMovesCursor:!0,convertEol:!1,termName:"xterm",cancelEvents:!1,overviewRuler:{}},Bw=["normal","bold","100","200","300","400","500","600","700","800","900"],kw=class extends ze{constructor(t){super(),this._onOptionChange=this._register(new se),this.onOptionChange=this._onOptionChange.event;let e={...ls};for(let i in t)if(i in e)try{let n=t[i];e[i]=this._sanitizeAndValidateOption(i,n)}catch(n){console.error(n)}this.rawOptions=e,this.options={...e},this._setupOptions(),this._register(mt(()=>{this.rawOptions.linkHandler=null,this.rawOptions.documentOverride=null}))}onSpecificOptionChange(t,e){return this.onOptionChange(i=>{i===t&&e(this.rawOptions[t])})}onMultipleOptionChange(t,e){return this.onOptionChange(i=>{t.indexOf(i)!==-1&&e()})}_setupOptions(){let t=i=>{if(!(i in ls))throw new Error(`No option with key "${i}"`);return this.rawOptions[i]},e=(i,n)=>{if(!(i in ls))throw new Error(`No option with key "${i}"`);n=this._sanitizeAndValidateOption(i,n),this.rawOptions[i]!==n&&(this.rawOptions[i]=n,this._onOptionChange.fire(i))};for(let i in this.rawOptions){let n={get:t.bind(this,i),set:e.bind(this,i)};Object.defineProperty(this.options,i,n)}}_sanitizeAndValidateOption(t,e){switch(t){case"cursorStyle":if(e||(e=ls[t]),!Fw(e))throw new Error(`"${e}" is not a valid value for ${t}`);break;case"wordSeparator":e||(e=ls[t]);break;case"fontWeight":case"fontWeightBold":if(typeof e=="number"&&1<=e&&e<=1e3)break;e=Bw.includes(e)?e:ls[t];break;case"cursorWidth":e=Math.floor(e);case"lineHeight":case"tabStopWidth":if(e<1)throw new Error(`${t} cannot be less than 1, value: ${e}`);break;case"minimumContrastRatio":e=Math.max(1,Math.min(21,Math.round(e*10)/10));break;case"scrollback":if(e=Math.min(e,4294967295),e<0)throw new Error(`${t} cannot be less than 0, value: ${e}`);break;case"fastScrollSensitivity":case"scrollSensitivity":if(e<=0)throw new Error(`${t} cannot be less than or equal to 0, value: ${e}`);break;case"rows":case"cols":if(!e&&e!==0)throw new Error(`${t} must be numeric, value: ${e}`);break;case"windowsPty":e=e??{};break}return e}};function Fw(t){return t==="block"||t==="underline"||t==="bar"}function ao(t,e=5){if(typeof t!="object")return t;let i=Array.isArray(t)?[]:{};for(let n in t)i[n]=e<=1?t[n]:t[n]&&ao(t[n],e-1);return i}var Mp=Object.freeze({insertMode:!1}),Cp=Object.freeze({applicationCursorKeys:!1,applicationKeypad:!1,bracketedPasteMode:!1,cursorBlink:void 0,cursorStyle:void 0,origin:!1,reverseWraparound:!1,sendFocus:!1,synchronizedOutput:!1,wraparound:!0}),yu=class extends ze{constructor(t,e,i){super(),this._bufferService=t,this._logService=e,this._optionsService=i,this.isCursorInitialized=!1,this.isCursorHidden=!1,this._onData=this._register(new se),this.onData=this._onData.event,this._onUserInput=this._register(new se),this.onUserInput=this._onUserInput.event,this._onBinary=this._register(new se),this.onBinary=this._onBinary.event,this._onRequestScrollToBottom=this._register(new se),this.onRequestScrollToBottom=this._onRequestScrollToBottom.event,this.modes=ao(Mp),this.decPrivateModes=ao(Cp)}reset(){this.modes=ao(Mp),this.decPrivateModes=ao(Cp)}triggerDataEvent(t,e=!1){if(this._optionsService.rawOptions.disableStdin)return;let i=this._bufferService.buffer;e&&this._optionsService.rawOptions.scrollOnUserInput&&i.ybase!==i.ydisp&&this._onRequestScrollToBottom.fire(),e&&this._onUserInput.fire(),this._logService.debug(`sending data "${t}"`),this._logService.trace("sending data (codes)",()=>t.split("").map(n=>n.charCodeAt(0))),this._onData.fire(t)}triggerBinaryEvent(t){this._optionsService.rawOptions.disableStdin||(this._logService.debug(`sending binary "${t}"`),this._logService.trace("sending binary (codes)",()=>t.split("").map(e=>e.charCodeAt(0))),this._onBinary.fire(t))}};yu=bt([pe(0,ri),pe(1,Zp),pe(2,si)],yu);var Ep={NONE:{events:0,restrict:()=>!1},X10:{events:1,restrict:t=>t.button===4||t.action!==1?!1:(t.ctrl=!1,t.alt=!1,t.shift=!1,!0)},VT200:{events:19,restrict:t=>t.action!==32},DRAG:{events:23,restrict:t=>!(t.action===32&&t.button===3)},ANY:{events:31,restrict:t=>!0}};function Fc(t,e){let i=(t.ctrl?16:0)|(t.shift?4:0)|(t.alt?8:0);return t.button===4?(i|=64,i|=t.action):(i|=t.button&3,t.button&4&&(i|=64),t.button&8&&(i|=128),t.action===32?i|=32:t.action===0&&!e&&(i|=3)),i}var Oc=String.fromCharCode,Tp={DEFAULT:t=>{let e=[Fc(t,!1)+32,t.col+32,t.row+32];return e[0]>255||e[1]>255||e[2]>255?"":`\x1B[M${Oc(e[0])}${Oc(e[1])}${Oc(e[2])}`},SGR:t=>{let e=t.action===0&&t.button!==4?"m":"M";return`\x1B[<${Fc(t,!0)};${t.col};${t.row}${e}`},SGR_PIXELS:t=>{let e=t.action===0&&t.button!==4?"m":"M";return`\x1B[<${Fc(t,!0)};${t.x};${t.y}${e}`}},xu=class extends ze{constructor(t,e,i){super(),this._bufferService=t,this._coreService=e,this._optionsService=i,this._protocols={},this._encodings={},this._activeProtocol="",this._activeEncoding="",this._lastEvent=null,this._wheelPartialScroll=0,this._onProtocolChange=this._register(new se),this.onProtocolChange=this._onProtocolChange.event;for(let n of Object.keys(Ep))this.addProtocol(n,Ep[n]);for(let n of Object.keys(Tp))this.addEncoding(n,Tp[n]);this.reset()}addProtocol(t,e){this._protocols[t]=e}addEncoding(t,e){this._encodings[t]=e}get activeProtocol(){return this._activeProtocol}get areMouseEventsActive(){return this._protocols[this._activeProtocol].events!==0}set activeProtocol(t){if(!this._protocols[t])throw new Error(`unknown protocol "${t}"`);this._activeProtocol=t,this._onProtocolChange.fire(this._protocols[t].events)}get activeEncoding(){return this._activeEncoding}set activeEncoding(t){if(!this._encodings[t])throw new Error(`unknown encoding "${t}"`);this._activeEncoding=t}reset(){this.activeProtocol="NONE",this.activeEncoding="DEFAULT",this._lastEvent=null,this._wheelPartialScroll=0}consumeWheelEvent(t,e,i){if(t.deltaY===0||t.shiftKey||e===void 0||i===void 0)return 0;let n=e/i,r=this._applyScrollModifier(t.deltaY,t);return t.deltaMode===WheelEvent.DOM_DELTA_PIXEL?(r/=n+0,Math.abs(t.deltaY)<50&&(r*=.3),this._wheelPartialScroll+=r,r=Math.floor(Math.abs(this._wheelPartialScroll))*(this._wheelPartialScroll>0?1:-1),this._wheelPartialScroll%=1):t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(r*=this._bufferService.rows),r}_applyScrollModifier(t,e){return e.altKey||e.ctrlKey||e.shiftKey?t*this._optionsService.rawOptions.fastScrollSensitivity*this._optionsService.rawOptions.scrollSensitivity:t*this._optionsService.rawOptions.scrollSensitivity}triggerMouseEvent(t){if(t.col<0||t.col>=this._bufferService.cols||t.row<0||t.row>=this._bufferService.rows||t.button===4&&t.action===32||t.button===3&&t.action!==32||t.button!==4&&(t.action===2||t.action===3)||(t.col++,t.row++,t.action===32&&this._lastEvent&&this._equalEvents(this._lastEvent,t,this._activeEncoding==="SGR_PIXELS"))||!this._protocols[this._activeProtocol].restrict(t))return!1;let e=this._encodings[this._activeEncoding](t);return e&&(this._activeEncoding==="DEFAULT"?this._coreService.triggerBinaryEvent(e):this._coreService.triggerDataEvent(e,!0)),this._lastEvent=t,!0}explainEvents(t){return{down:!!(t&1),up:!!(t&2),drag:!!(t&4),move:!!(t&8),wheel:!!(t&16)}}_equalEvents(t,e,i){if(i){if(t.x!==e.x||t.y!==e.y)return!1}else if(t.col!==e.col||t.row!==e.row)return!1;return!(t.button!==e.button||t.action!==e.action||t.ctrl!==e.ctrl||t.alt!==e.alt||t.shift!==e.shift)}};xu=bt([pe(0,ri),pe(1,Ar),pe(2,si)],xu);var Uc=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531]],Ow=[[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]],Bt;function Uw(t,e){let i=0,n=e.length-1,r;if(t<e[0][0]||t>e[n][1])return!1;for(;n>=i;)if(r=i+n>>1,t>e[r][1])i=r+1;else if(t<e[r][0])n=r-1;else return!0;return!1}var zw=class{constructor(){if(this.version="6",!Bt){Bt=new Uint8Array(65536),Bt.fill(1),Bt[0]=0,Bt.fill(0,1,32),Bt.fill(0,127,160),Bt.fill(2,4352,4448),Bt[9001]=2,Bt[9002]=2,Bt.fill(2,11904,42192),Bt[12351]=1,Bt.fill(2,44032,55204),Bt.fill(2,63744,64256),Bt.fill(2,65040,65050),Bt.fill(2,65072,65136),Bt.fill(2,65280,65377),Bt.fill(2,65504,65511);for(let t=0;t<Uc.length;++t)Bt.fill(0,Uc[t][0],Uc[t][1]+1)}}wcwidth(t){return t<32?0:t<127?1:t<65536?Bt[t]:Uw(t,Ow)?0:t>=131072&&t<=196605||t>=196608&&t<=262141?2:1}charProperties(t,e){let i=this.wcwidth(t),n=i===0&&e!==0;if(n){let r=Mr.extractWidth(e);r===0?n=!1:r>i&&(i=r)}return Mr.createPropertyValue(0,i,n)}},Mr=class kl{constructor(){this._providers=Object.create(null),this._active="",this._onChange=new se,this.onChange=this._onChange.event;let e=new zw;this.register(e),this._active=e.version,this._activeProvider=e}static extractShouldJoin(e){return(e&1)!==0}static extractWidth(e){return e>>1&3}static extractCharKind(e){return e>>3}static createPropertyValue(e,i,n=!1){return(e&16777215)<<3|(i&3)<<1|(n?1:0)}dispose(){this._onChange.dispose()}get versions(){return Object.keys(this._providers)}get activeVersion(){return this._active}set activeVersion(e){if(!this._providers[e])throw new Error(`unknown Unicode version "${e}"`);this._active=e,this._activeProvider=this._providers[e],this._onChange.fire(e)}register(e){this._providers[e.version]=e}wcwidth(e){return this._activeProvider.wcwidth(e)}getStringCellWidth(e){let i=0,n=0,r=e.length;for(let s=0;s<r;++s){let o=e.charCodeAt(s);if(55296<=o&&o<=56319){if(++s>=r)return i+this.wcwidth(o);let l=e.charCodeAt(s);56320<=l&&l<=57343?o=(o-55296)*1024+l-56320+65536:i+=this.wcwidth(l)}let a=this.charProperties(o,n),h=kl.extractWidth(a);kl.extractShouldJoin(a)&&(h-=kl.extractWidth(n)),i+=h,n=a}return i}charProperties(e,i){return this._activeProvider.charProperties(e,i)}},Hw=class{constructor(){this.glevel=0,this._charsets=[]}reset(){this.charset=void 0,this._charsets=[],this.glevel=0}setgLevel(t){this.glevel=t,this.charset=this._charsets[t]}setgCharset(t,e){this._charsets[t]=e,this.glevel===t&&(this.charset=e)}};function Ap(t){let e=t.buffer.lines.get(t.buffer.ybase+t.buffer.y-1)?.get(t.cols-1),i=t.buffer.lines.get(t.buffer.ybase+t.buffer.y);i&&e&&(i.isWrapped=e[3]!==0&&e[3]!==32)}var eo=2147483647,Vw=256,zm=class bu{constructor(e=32,i=32){if(this.maxLength=e,this.maxSubParamsLength=i,i>Vw)throw new Error("maxSubParamsLength must not be greater than 256");this.params=new Int32Array(e),this.length=0,this._subParams=new Int32Array(i),this._subParamsLength=0,this._subParamsIdx=new Uint16Array(e),this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}static fromArray(e){let i=new bu;if(!e.length)return i;for(let n=Array.isArray(e[0])?1:0;n<e.length;++n){let r=e[n];if(Array.isArray(r))for(let s=0;s<r.length;++s)i.addSubParam(r[s]);else i.addParam(r)}return i}clone(){let e=new bu(this.maxLength,this.maxSubParamsLength);return e.params.set(this.params),e.length=this.length,e._subParams.set(this._subParams),e._subParamsLength=this._subParamsLength,e._subParamsIdx.set(this._subParamsIdx),e._rejectDigits=this._rejectDigits,e._rejectSubDigits=this._rejectSubDigits,e._digitIsSub=this._digitIsSub,e}toArray(){let e=[];for(let i=0;i<this.length;++i){e.push(this.params[i]);let n=this._subParamsIdx[i]>>8,r=this._subParamsIdx[i]&255;r-n>0&&e.push(Array.prototype.slice.call(this._subParams,n,r))}return e}reset(){this.length=0,this._subParamsLength=0,this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}addParam(e){if(this._digitIsSub=!1,this.length>=this.maxLength){this._rejectDigits=!0;return}if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParamsIdx[this.length]=this._subParamsLength<<8|this._subParamsLength,this.params[this.length++]=e>eo?eo:e}addSubParam(e){if(this._digitIsSub=!0,!!this.length){if(this._rejectDigits||this._subParamsLength>=this.maxSubParamsLength){this._rejectSubDigits=!0;return}if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParams[this._subParamsLength++]=e>eo?eo:e,this._subParamsIdx[this.length-1]++}}hasSubParams(e){return(this._subParamsIdx[e]&255)-(this._subParamsIdx[e]>>8)>0}getSubParams(e){let i=this._subParamsIdx[e]>>8,n=this._subParamsIdx[e]&255;return n-i>0?this._subParams.subarray(i,n):null}getSubParamsAll(){let e={};for(let i=0;i<this.length;++i){let n=this._subParamsIdx[i]>>8,r=this._subParamsIdx[i]&255;r-n>0&&(e[i]=this._subParams.slice(n,r))}return e}addDigit(e){let i;if(this._rejectDigits||!(i=this._digitIsSub?this._subParamsLength:this.length)||this._digitIsSub&&this._rejectSubDigits)return;let n=this._digitIsSub?this._subParams:this.params,r=n[i-1];n[i-1]=~r?Math.min(r*10+e,eo):e}},to=[],Ww=class{constructor(){this._state=0,this._active=to,this._id=-1,this._handlers=Object.create(null),this._handlerFb=()=>{},this._stack={paused:!1,loopPosition:0,fallThrough:!1}}registerHandler(t,e){this._handlers[t]===void 0&&(this._handlers[t]=[]);let i=this._handlers[t];return i.push(e),{dispose:()=>{let n=i.indexOf(e);n!==-1&&i.splice(n,1)}}}clearHandler(t){this._handlers[t]&&delete this._handlers[t]}setHandlerFallback(t){this._handlerFb=t}dispose(){this._handlers=Object.create(null),this._handlerFb=()=>{},this._active=to}reset(){if(this._state===2)for(let t=this._stack.paused?this._stack.loopPosition-1:this._active.length-1;t>=0;--t)this._active[t].end(!1);this._stack.paused=!1,this._active=to,this._id=-1,this._state=0}_start(){if(this._active=this._handlers[this._id]||to,!this._active.length)this._handlerFb(this._id,"START");else for(let t=this._active.length-1;t>=0;t--)this._active[t].start()}_put(t,e,i){if(!this._active.length)this._handlerFb(this._id,"PUT",$l(t,e,i));else for(let n=this._active.length-1;n>=0;n--)this._active[n].put(t,e,i)}start(){this.reset(),this._state=1}put(t,e,i){if(this._state!==3){if(this._state===1)for(;e<i;){let n=t[e++];if(n===59){this._state=2,this._start();break}if(n<48||57<n){this._state=3;return}this._id===-1&&(this._id=0),this._id=this._id*10+n-48}this._state===2&&i-e>0&&this._put(t,e,i)}}end(t,e=!0){if(this._state!==0){if(this._state!==3)if(this._state===1&&this._start(),!this._active.length)this._handlerFb(this._id,"END",t);else{let i=!1,n=this._active.length-1,r=!1;if(this._stack.paused&&(n=this._stack.loopPosition-1,i=e,r=this._stack.fallThrough,this._stack.paused=!1),!r&&i===!1){for(;n>=0&&(i=this._active[n].end(t),i!==!0);n--)if(i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=n,this._stack.fallThrough=!1,i;n--}for(;n>=0;n--)if(i=this._active[n].end(!1),i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=n,this._stack.fallThrough=!0,i}this._active=to,this._id=-1,this._state=0}}},xi=class{constructor(t){this._handler=t,this._data="",this._hitLimit=!1}start(){this._data="",this._hitLimit=!1}put(t,e,i){this._hitLimit||(this._data+=$l(t,e,i),this._data.length>1e7&&(this._data="",this._hitLimit=!0))}end(t){let e=!1;if(this._hitLimit)e=!1;else if(t&&(e=this._handler(this._data),e instanceof Promise))return e.then(i=>(this._data="",this._hitLimit=!1,i));return this._data="",this._hitLimit=!1,e}},io=[],Gw=class{constructor(){this._handlers=Object.create(null),this._active=io,this._ident=0,this._handlerFb=()=>{},this._stack={paused:!1,loopPosition:0,fallThrough:!1}}dispose(){this._handlers=Object.create(null),this._handlerFb=()=>{},this._active=io}registerHandler(t,e){this._handlers[t]===void 0&&(this._handlers[t]=[]);let i=this._handlers[t];return i.push(e),{dispose:()=>{let n=i.indexOf(e);n!==-1&&i.splice(n,1)}}}clearHandler(t){this._handlers[t]&&delete this._handlers[t]}setHandlerFallback(t){this._handlerFb=t}reset(){if(this._active.length)for(let t=this._stack.paused?this._stack.loopPosition-1:this._active.length-1;t>=0;--t)this._active[t].unhook(!1);this._stack.paused=!1,this._active=io,this._ident=0}hook(t,e){if(this.reset(),this._ident=t,this._active=this._handlers[t]||io,!this._active.length)this._handlerFb(this._ident,"HOOK",e);else for(let i=this._active.length-1;i>=0;i--)this._active[i].hook(e)}put(t,e,i){if(!this._active.length)this._handlerFb(this._ident,"PUT",$l(t,e,i));else for(let n=this._active.length-1;n>=0;n--)this._active[n].put(t,e,i)}unhook(t,e=!0){if(!this._active.length)this._handlerFb(this._ident,"UNHOOK",t);else{let i=!1,n=this._active.length-1,r=!1;if(this._stack.paused&&(n=this._stack.loopPosition-1,i=e,r=this._stack.fallThrough,this._stack.paused=!1),!r&&i===!1){for(;n>=0&&(i=this._active[n].unhook(t),i!==!0);n--)if(i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=n,this._stack.fallThrough=!1,i;n--}for(;n>=0;n--)if(i=this._active[n].unhook(!1),i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=n,this._stack.fallThrough=!0,i}this._active=io,this._ident=0}},lo=new zm;lo.addParam(0);var Rp=class{constructor(t){this._handler=t,this._data="",this._params=lo,this._hitLimit=!1}hook(t){this._params=t.length>1||t.params[0]?t.clone():lo,this._data="",this._hitLimit=!1}put(t,e,i){this._hitLimit||(this._data+=$l(t,e,i),this._data.length>1e7&&(this._data="",this._hitLimit=!0))}unhook(t){let e=!1;if(this._hitLimit)e=!1;else if(t&&(e=this._handler(this._data,this._params),e instanceof Promise))return e.then(i=>(this._params=lo,this._data="",this._hitLimit=!1,i));return this._params=lo,this._data="",this._hitLimit=!1,e}},Xw=class{constructor(t){this.table=new Uint8Array(t)}setDefault(t,e){this.table.fill(t<<4|e)}add(t,e,i,n){this.table[e<<8|t]=i<<4|n}addMany(t,e,i,n){for(let r=0;r<t.length;r++)this.table[e<<8|t[r]]=i<<4|n}},Pi=160,$w=(function(){let t=new Xw(4095),e=Array.apply(null,Array(256)).map((a,h)=>h),i=(a,h)=>e.slice(a,h),n=i(32,127),r=i(0,24);r.push(25),r.push.apply(r,i(28,32));let s=i(0,14),o;t.setDefault(1,0),t.addMany(n,0,2,0);for(o in s)t.addMany([24,26,153,154],o,3,0),t.addMany(i(128,144),o,3,0),t.addMany(i(144,152),o,3,0),t.add(156,o,0,0),t.add(27,o,11,1),t.add(157,o,4,8),t.addMany([152,158,159],o,0,7),t.add(155,o,11,3),t.add(144,o,11,9);return t.addMany(r,0,3,0),t.addMany(r,1,3,1),t.add(127,1,0,1),t.addMany(r,8,0,8),t.addMany(r,3,3,3),t.add(127,3,0,3),t.addMany(r,4,3,4),t.add(127,4,0,4),t.addMany(r,6,3,6),t.addMany(r,5,3,5),t.add(127,5,0,5),t.addMany(r,2,3,2),t.add(127,2,0,2),t.add(93,1,4,8),t.addMany(n,8,5,8),t.add(127,8,5,8),t.addMany([156,27,24,26,7],8,6,0),t.addMany(i(28,32),8,0,8),t.addMany([88,94,95],1,0,7),t.addMany(n,7,0,7),t.addMany(r,7,0,7),t.add(156,7,0,0),t.add(127,7,0,7),t.add(91,1,11,3),t.addMany(i(64,127),3,7,0),t.addMany(i(48,60),3,8,4),t.addMany([60,61,62,63],3,9,4),t.addMany(i(48,60),4,8,4),t.addMany(i(64,127),4,7,0),t.addMany([60,61,62,63],4,0,6),t.addMany(i(32,64),6,0,6),t.add(127,6,0,6),t.addMany(i(64,127),6,0,0),t.addMany(i(32,48),3,9,5),t.addMany(i(32,48),5,9,5),t.addMany(i(48,64),5,0,6),t.addMany(i(64,127),5,7,0),t.addMany(i(32,48),4,9,5),t.addMany(i(32,48),1,9,2),t.addMany(i(32,48),2,9,2),t.addMany(i(48,127),2,10,0),t.addMany(i(48,80),1,10,0),t.addMany(i(81,88),1,10,0),t.addMany([89,90,92],1,10,0),t.addMany(i(96,127),1,10,0),t.add(80,1,11,9),t.addMany(r,9,0,9),t.add(127,9,0,9),t.addMany(i(28,32),9,0,9),t.addMany(i(32,48),9,9,12),t.addMany(i(48,60),9,8,10),t.addMany([60,61,62,63],9,9,10),t.addMany(r,11,0,11),t.addMany(i(32,128),11,0,11),t.addMany(i(28,32),11,0,11),t.addMany(r,10,0,10),t.add(127,10,0,10),t.addMany(i(28,32),10,0,10),t.addMany(i(48,60),10,8,10),t.addMany([60,61,62,63],10,0,11),t.addMany(i(32,48),10,9,12),t.addMany(r,12,0,12),t.add(127,12,0,12),t.addMany(i(28,32),12,0,12),t.addMany(i(32,48),12,9,12),t.addMany(i(48,64),12,0,11),t.addMany(i(64,127),12,12,13),t.addMany(i(64,127),10,12,13),t.addMany(i(64,127),9,12,13),t.addMany(r,13,13,13),t.addMany(n,13,13,13),t.add(127,13,0,13),t.addMany([27,156,24,26],13,14,0),t.add(Pi,0,2,0),t.add(Pi,8,5,8),t.add(Pi,6,0,6),t.add(Pi,11,0,11),t.add(Pi,13,13,13),t})(),qw=class extends ze{constructor(t=$w){super(),this._transitions=t,this._parseStack={state:0,handlers:[],handlerPos:0,transition:0,chunkPos:0},this.initialState=0,this.currentState=this.initialState,this._params=new zm,this._params.addParam(0),this._collect=0,this.precedingJoinState=0,this._printHandlerFb=(e,i,n)=>{},this._executeHandlerFb=e=>{},this._csiHandlerFb=(e,i)=>{},this._escHandlerFb=e=>{},this._errorHandlerFb=e=>e,this._printHandler=this._printHandlerFb,this._executeHandlers=Object.create(null),this._csiHandlers=Object.create(null),this._escHandlers=Object.create(null),this._register(mt(()=>{this._csiHandlers=Object.create(null),this._executeHandlers=Object.create(null),this._escHandlers=Object.create(null)})),this._oscParser=this._register(new Ww),this._dcsParser=this._register(new Gw),this._errorHandler=this._errorHandlerFb,this.registerEscHandler({final:"\\"},()=>!0)}_identifier(t,e=[64,126]){let i=0;if(t.prefix){if(t.prefix.length>1)throw new Error("only one byte as prefix supported");if(i=t.prefix.charCodeAt(0),i&&60>i||i>63)throw new Error("prefix must be in range 0x3c .. 0x3f")}if(t.intermediates){if(t.intermediates.length>2)throw new Error("only two bytes as intermediates are supported");for(let r=0;r<t.intermediates.length;++r){let s=t.intermediates.charCodeAt(r);if(32>s||s>47)throw new Error("intermediate must be in range 0x20 .. 0x2f");i<<=8,i|=s}}if(t.final.length!==1)throw new Error("final must be a single byte");let n=t.final.charCodeAt(0);if(e[0]>n||n>e[1])throw new Error(`final must be in range ${e[0]} .. ${e[1]}`);return i<<=8,i|=n,i}identToString(t){let e=[];for(;t;)e.push(String.fromCharCode(t&255)),t>>=8;return e.reverse().join("")}setPrintHandler(t){this._printHandler=t}clearPrintHandler(){this._printHandler=this._printHandlerFb}registerEscHandler(t,e){let i=this._identifier(t,[48,126]);this._escHandlers[i]===void 0&&(this._escHandlers[i]=[]);let n=this._escHandlers[i];return n.push(e),{dispose:()=>{let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}}clearEscHandler(t){this._escHandlers[this._identifier(t,[48,126])]&&delete this._escHandlers[this._identifier(t,[48,126])]}setEscHandlerFallback(t){this._escHandlerFb=t}setExecuteHandler(t,e){this._executeHandlers[t.charCodeAt(0)]=e}clearExecuteHandler(t){this._executeHandlers[t.charCodeAt(0)]&&delete this._executeHandlers[t.charCodeAt(0)]}setExecuteHandlerFallback(t){this._executeHandlerFb=t}registerCsiHandler(t,e){let i=this._identifier(t);this._csiHandlers[i]===void 0&&(this._csiHandlers[i]=[]);let n=this._csiHandlers[i];return n.push(e),{dispose:()=>{let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}}clearCsiHandler(t){this._csiHandlers[this._identifier(t)]&&delete this._csiHandlers[this._identifier(t)]}setCsiHandlerFallback(t){this._csiHandlerFb=t}registerDcsHandler(t,e){return this._dcsParser.registerHandler(this._identifier(t),e)}clearDcsHandler(t){this._dcsParser.clearHandler(this._identifier(t))}setDcsHandlerFallback(t){this._dcsParser.setHandlerFallback(t)}registerOscHandler(t,e){return this._oscParser.registerHandler(t,e)}clearOscHandler(t){this._oscParser.clearHandler(t)}setOscHandlerFallback(t){this._oscParser.setHandlerFallback(t)}setErrorHandler(t){this._errorHandler=t}clearErrorHandler(){this._errorHandler=this._errorHandlerFb}reset(){this.currentState=this.initialState,this._oscParser.reset(),this._dcsParser.reset(),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingJoinState=0,this._parseStack.state!==0&&(this._parseStack.state=2,this._parseStack.handlers=[])}_preserveStack(t,e,i,n,r){this._parseStack.state=t,this._parseStack.handlers=e,this._parseStack.handlerPos=i,this._parseStack.transition=n,this._parseStack.chunkPos=r}parse(t,e,i){let n=0,r=0,s=0,o;if(this._parseStack.state)if(this._parseStack.state===2)this._parseStack.state=0,s=this._parseStack.chunkPos+1;else{if(i===void 0||this._parseStack.state===1)throw this._parseStack.state=1,new Error("improper continuation due to previous async handler, giving up parsing");let a=this._parseStack.handlers,h=this._parseStack.handlerPos-1;switch(this._parseStack.state){case 3:if(i===!1&&h>-1){for(;h>=0&&(o=a[h](this._params),o!==!0);h--)if(o instanceof Promise)return this._parseStack.handlerPos=h,o}this._parseStack.handlers=[];break;case 4:if(i===!1&&h>-1){for(;h>=0&&(o=a[h](),o!==!0);h--)if(o instanceof Promise)return this._parseStack.handlerPos=h,o}this._parseStack.handlers=[];break;case 6:if(n=t[this._parseStack.chunkPos],o=this._dcsParser.unhook(n!==24&&n!==26,i),o)return o;n===27&&(this._parseStack.transition|=1),this._params.reset(),this._params.addParam(0),this._collect=0;break;case 5:if(n=t[this._parseStack.chunkPos],o=this._oscParser.end(n!==24&&n!==26,i),o)return o;n===27&&(this._parseStack.transition|=1),this._params.reset(),this._params.addParam(0),this._collect=0;break}this._parseStack.state=0,s=this._parseStack.chunkPos+1,this.precedingJoinState=0,this.currentState=this._parseStack.transition&15}for(let a=s;a<e;++a){switch(n=t[a],r=this._transitions.table[this.currentState<<8|(n<160?n:Pi)],r>>4){case 2:for(let d=a+1;;++d){if(d>=e||(n=t[d])<32||n>126&&n<Pi){this._printHandler(t,a,d),a=d-1;break}if(++d>=e||(n=t[d])<32||n>126&&n<Pi){this._printHandler(t,a,d),a=d-1;break}if(++d>=e||(n=t[d])<32||n>126&&n<Pi){this._printHandler(t,a,d),a=d-1;break}if(++d>=e||(n=t[d])<32||n>126&&n<Pi){this._printHandler(t,a,d),a=d-1;break}}break;case 3:this._executeHandlers[n]?this._executeHandlers[n]():this._executeHandlerFb(n),this.precedingJoinState=0;break;case 0:break;case 1:if(this._errorHandler({position:a,code:n,currentState:this.currentState,collect:this._collect,params:this._params,abort:!1}).abort)return;break;case 7:let h=this._csiHandlers[this._collect<<8|n],l=h?h.length-1:-1;for(;l>=0&&(o=h[l](this._params),o!==!0);l--)if(o instanceof Promise)return this._preserveStack(3,h,l,r,a),o;l<0&&this._csiHandlerFb(this._collect<<8|n,this._params),this.precedingJoinState=0;break;case 8:do switch(n){case 59:this._params.addParam(0);break;case 58:this._params.addSubParam(-1);break;default:this._params.addDigit(n-48)}while(++a<e&&(n=t[a])>47&&n<60);a--;break;case 9:this._collect<<=8,this._collect|=n;break;case 10:let u=this._escHandlers[this._collect<<8|n],c=u?u.length-1:-1;for(;c>=0&&(o=u[c](),o!==!0);c--)if(o instanceof Promise)return this._preserveStack(4,u,c,r,a),o;c<0&&this._escHandlerFb(this._collect<<8|n),this.precedingJoinState=0;break;case 11:this._params.reset(),this._params.addParam(0),this._collect=0;break;case 12:this._dcsParser.hook(this._collect<<8|n,this._params);break;case 13:for(let d=a+1;;++d)if(d>=e||(n=t[d])===24||n===26||n===27||n>127&&n<Pi){this._dcsParser.put(t,a,d),a=d-1;break}break;case 14:if(o=this._dcsParser.unhook(n!==24&&n!==26),o)return this._preserveStack(6,[],0,r,a),o;n===27&&(r|=1),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingJoinState=0;break;case 4:this._oscParser.start();break;case 5:for(let d=a+1;;d++)if(d>=e||(n=t[d])<32||n>127&&n<Pi){this._oscParser.put(t,a,d),a=d-1;break}break;case 6:if(o=this._oscParser.end(n!==24&&n!==26),o)return this._preserveStack(5,[],0,r,a),o;n===27&&(r|=1),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingJoinState=0;break}this.currentState=r&15}}},Yw=/^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/,Kw=/^[\da-f]+$/;function Pp(t){if(!t)return;let e=t.toLowerCase();if(e.indexOf("rgb:")===0){e=e.slice(4);let i=Yw.exec(e);if(i){let n=i[1]?15:i[4]?255:i[7]?4095:65535;return[Math.round(parseInt(i[1]||i[4]||i[7]||i[10],16)/n*255),Math.round(parseInt(i[2]||i[5]||i[8]||i[11],16)/n*255),Math.round(parseInt(i[3]||i[6]||i[9]||i[12],16)/n*255)]}}else if(e.indexOf("#")===0&&(e=e.slice(1),Kw.exec(e)&&[3,6,9,12].includes(e.length))){let i=e.length/3,n=[0,0,0];for(let r=0;r<3;++r){let s=parseInt(e.slice(i*r,i*r+i),16);n[r]=i===1?s<<4:i===2?s:i===3?s>>4:s>>8}return n}}function zc(t,e){let i=t.toString(16),n=i.length<2?"0"+i:i;switch(e){case 4:return i[0];case 8:return n;case 12:return(n+n).slice(0,3);default:return n+n}}function Zw(t,e=16){let[i,n,r]=t;return`rgb:${zc(i,e)}/${zc(n,e)}/${zc(r,e)}`}var Jw={"(":0,")":1,"*":2,"+":3,"-":1,".":2},Yn=131072,Ip=10;function Lp(t,e){if(t>24)return e.setWinLines||!1;switch(t){case 1:return!!e.restoreWin;case 2:return!!e.minimizeWin;case 3:return!!e.setWinPosition;case 4:return!!e.setWinSizePixels;case 5:return!!e.raiseWin;case 6:return!!e.lowerWin;case 7:return!!e.refreshWin;case 8:return!!e.setWinSizeChars;case 9:return!!e.maximizeWin;case 10:return!!e.fullscreenWin;case 11:return!!e.getWinState;case 13:return!!e.getWinPosition;case 14:return!!e.getWinSizePixels;case 15:return!!e.getScreenSizePixels;case 16:return!!e.getCellSizePixels;case 18:return!!e.getWinSizeChars;case 19:return!!e.getScreenSizeChars;case 20:return!!e.getIconTitle;case 21:return!!e.getWinTitle;case 22:return!!e.pushTitle;case 23:return!!e.popTitle;case 24:return!!e.setWinLines}return!1}var Dp=5e3,Np=0,jw=class extends ze{constructor(t,e,i,n,r,s,o,a,h=new qw){super(),this._bufferService=t,this._charsetService=e,this._coreService=i,this._logService=n,this._optionsService=r,this._oscLinkService=s,this._coreMouseService=o,this._unicodeService=a,this._parser=h,this._parseBuffer=new Uint32Array(4096),this._stringDecoder=new Wy,this._utf8Decoder=new Gy,this._windowTitle="",this._iconName="",this._windowTitleStack=[],this._iconNameStack=[],this._curAttrData=Rt.clone(),this._eraseAttrDataInternal=Rt.clone(),this._onRequestBell=this._register(new se),this.onRequestBell=this._onRequestBell.event,this._onRequestRefreshRows=this._register(new se),this.onRequestRefreshRows=this._onRequestRefreshRows.event,this._onRequestReset=this._register(new se),this.onRequestReset=this._onRequestReset.event,this._onRequestSendFocus=this._register(new se),this.onRequestSendFocus=this._onRequestSendFocus.event,this._onRequestSyncScrollBar=this._register(new se),this.onRequestSyncScrollBar=this._onRequestSyncScrollBar.event,this._onRequestWindowsOptionsReport=this._register(new se),this.onRequestWindowsOptionsReport=this._onRequestWindowsOptionsReport.event,this._onA11yChar=this._register(new se),this.onA11yChar=this._onA11yChar.event,this._onA11yTab=this._register(new se),this.onA11yTab=this._onA11yTab.event,this._onCursorMove=this._register(new se),this.onCursorMove=this._onCursorMove.event,this._onLineFeed=this._register(new se),this.onLineFeed=this._onLineFeed.event,this._onScroll=this._register(new se),this.onScroll=this._onScroll.event,this._onTitleChange=this._register(new se),this.onTitleChange=this._onTitleChange.event,this._onColor=this._register(new se),this.onColor=this._onColor.event,this._parseStack={paused:!1,cursorStartX:0,cursorStartY:0,decodedLength:0,position:0},this._specialColors=[256,257,258],this._register(this._parser),this._dirtyRowTracker=new wu(this._bufferService),this._activeBuffer=this._bufferService.buffer,this._register(this._bufferService.buffers.onBufferActivate(l=>this._activeBuffer=l.activeBuffer)),this._parser.setCsiHandlerFallback((l,u)=>{this._logService.debug("Unknown CSI code: ",{identifier:this._parser.identToString(l),params:u.toArray()})}),this._parser.setEscHandlerFallback(l=>{this._logService.debug("Unknown ESC code: ",{identifier:this._parser.identToString(l)})}),this._parser.setExecuteHandlerFallback(l=>{this._logService.debug("Unknown EXECUTE code: ",{code:l})}),this._parser.setOscHandlerFallback((l,u,c)=>{this._logService.debug("Unknown OSC code: ",{identifier:l,action:u,data:c})}),this._parser.setDcsHandlerFallback((l,u,c)=>{u==="HOOK"&&(c=c.toArray()),this._logService.debug("Unknown DCS code: ",{identifier:this._parser.identToString(l),action:u,payload:c})}),this._parser.setPrintHandler((l,u,c)=>this.print(l,u,c)),this._parser.registerCsiHandler({final:"@"},l=>this.insertChars(l)),this._parser.registerCsiHandler({intermediates:" ",final:"@"},l=>this.scrollLeft(l)),this._parser.registerCsiHandler({final:"A"},l=>this.cursorUp(l)),this._parser.registerCsiHandler({intermediates:" ",final:"A"},l=>this.scrollRight(l)),this._parser.registerCsiHandler({final:"B"},l=>this.cursorDown(l)),this._parser.registerCsiHandler({final:"C"},l=>this.cursorForward(l)),this._parser.registerCsiHandler({final:"D"},l=>this.cursorBackward(l)),this._parser.registerCsiHandler({final:"E"},l=>this.cursorNextLine(l)),this._parser.registerCsiHandler({final:"F"},l=>this.cursorPrecedingLine(l)),this._parser.registerCsiHandler({final:"G"},l=>this.cursorCharAbsolute(l)),this._parser.registerCsiHandler({final:"H"},l=>this.cursorPosition(l)),this._parser.registerCsiHandler({final:"I"},l=>this.cursorForwardTab(l)),this._parser.registerCsiHandler({final:"J"},l=>this.eraseInDisplay(l,!1)),this._parser.registerCsiHandler({prefix:"?",final:"J"},l=>this.eraseInDisplay(l,!0)),this._parser.registerCsiHandler({final:"K"},l=>this.eraseInLine(l,!1)),this._parser.registerCsiHandler({prefix:"?",final:"K"},l=>this.eraseInLine(l,!0)),this._parser.registerCsiHandler({final:"L"},l=>this.insertLines(l)),this._parser.registerCsiHandler({final:"M"},l=>this.deleteLines(l)),this._parser.registerCsiHandler({final:"P"},l=>this.deleteChars(l)),this._parser.registerCsiHandler({final:"S"},l=>this.scrollUp(l)),this._parser.registerCsiHandler({final:"T"},l=>this.scrollDown(l)),this._parser.registerCsiHandler({final:"X"},l=>this.eraseChars(l)),this._parser.registerCsiHandler({final:"Z"},l=>this.cursorBackwardTab(l)),this._parser.registerCsiHandler({final:"`"},l=>this.charPosAbsolute(l)),this._parser.registerCsiHandler({final:"a"},l=>this.hPositionRelative(l)),this._parser.registerCsiHandler({final:"b"},l=>this.repeatPrecedingCharacter(l)),this._parser.registerCsiHandler({final:"c"},l=>this.sendDeviceAttributesPrimary(l)),this._parser.registerCsiHandler({prefix:">",final:"c"},l=>this.sendDeviceAttributesSecondary(l)),this._parser.registerCsiHandler({final:"d"},l=>this.linePosAbsolute(l)),this._parser.registerCsiHandler({final:"e"},l=>this.vPositionRelative(l)),this._parser.registerCsiHandler({final:"f"},l=>this.hVPosition(l)),this._parser.registerCsiHandler({final:"g"},l=>this.tabClear(l)),this._parser.registerCsiHandler({final:"h"},l=>this.setMode(l)),this._parser.registerCsiHandler({prefix:"?",final:"h"},l=>this.setModePrivate(l)),this._parser.registerCsiHandler({final:"l"},l=>this.resetMode(l)),this._parser.registerCsiHandler({prefix:"?",final:"l"},l=>this.resetModePrivate(l)),this._parser.registerCsiHandler({final:"m"},l=>this.charAttributes(l)),this._parser.registerCsiHandler({final:"n"},l=>this.deviceStatus(l)),this._parser.registerCsiHandler({prefix:"?",final:"n"},l=>this.deviceStatusPrivate(l)),this._parser.registerCsiHandler({intermediates:"!",final:"p"},l=>this.softReset(l)),this._parser.registerCsiHandler({intermediates:" ",final:"q"},l=>this.setCursorStyle(l)),this._parser.registerCsiHandler({final:"r"},l=>this.setScrollRegion(l)),this._parser.registerCsiHandler({final:"s"},l=>this.saveCursor(l)),this._parser.registerCsiHandler({final:"t"},l=>this.windowOptions(l)),this._parser.registerCsiHandler({final:"u"},l=>this.restoreCursor(l)),this._parser.registerCsiHandler({intermediates:"'",final:"}"},l=>this.insertColumns(l)),this._parser.registerCsiHandler({intermediates:"'",final:"~"},l=>this.deleteColumns(l)),this._parser.registerCsiHandler({intermediates:'"',final:"q"},l=>this.selectProtected(l)),this._parser.registerCsiHandler({intermediates:"$",final:"p"},l=>this.requestMode(l,!0)),this._parser.registerCsiHandler({prefix:"?",intermediates:"$",final:"p"},l=>this.requestMode(l,!1)),this._parser.setExecuteHandler(K.BEL,()=>this.bell()),this._parser.setExecuteHandler(K.LF,()=>this.lineFeed()),this._parser.setExecuteHandler(K.VT,()=>this.lineFeed()),this._parser.setExecuteHandler(K.FF,()=>this.lineFeed()),this._parser.setExecuteHandler(K.CR,()=>this.carriageReturn()),this._parser.setExecuteHandler(K.BS,()=>this.backspace()),this._parser.setExecuteHandler(K.HT,()=>this.tab()),this._parser.setExecuteHandler(K.SO,()=>this.shiftOut()),this._parser.setExecuteHandler(K.SI,()=>this.shiftIn()),this._parser.setExecuteHandler(Nl.IND,()=>this.index()),this._parser.setExecuteHandler(Nl.NEL,()=>this.nextLine()),this._parser.setExecuteHandler(Nl.HTS,()=>this.tabSet()),this._parser.registerOscHandler(0,new xi(l=>(this.setTitle(l),this.setIconName(l),!0))),this._parser.registerOscHandler(1,new xi(l=>this.setIconName(l))),this._parser.registerOscHandler(2,new xi(l=>this.setTitle(l))),this._parser.registerOscHandler(4,new xi(l=>this.setOrReportIndexedColor(l))),this._parser.registerOscHandler(8,new xi(l=>this.setHyperlink(l))),this._parser.registerOscHandler(10,new xi(l=>this.setOrReportFgColor(l))),this._parser.registerOscHandler(11,new xi(l=>this.setOrReportBgColor(l))),this._parser.registerOscHandler(12,new xi(l=>this.setOrReportCursorColor(l))),this._parser.registerOscHandler(104,new xi(l=>this.restoreIndexedColor(l))),this._parser.registerOscHandler(110,new xi(l=>this.restoreFgColor(l))),this._parser.registerOscHandler(111,new xi(l=>this.restoreBgColor(l))),this._parser.registerOscHandler(112,new xi(l=>this.restoreCursorColor(l))),this._parser.registerEscHandler({final:"7"},()=>this.saveCursor()),this._parser.registerEscHandler({final:"8"},()=>this.restoreCursor()),this._parser.registerEscHandler({final:"D"},()=>this.index()),this._parser.registerEscHandler({final:"E"},()=>this.nextLine()),this._parser.registerEscHandler({final:"H"},()=>this.tabSet()),this._parser.registerEscHandler({final:"M"},()=>this.reverseIndex()),this._parser.registerEscHandler({final:"="},()=>this.keypadApplicationMode()),this._parser.registerEscHandler({final:">"},()=>this.keypadNumericMode()),this._parser.registerEscHandler({final:"c"},()=>this.fullReset()),this._parser.registerEscHandler({final:"n"},()=>this.setgLevel(2)),this._parser.registerEscHandler({final:"o"},()=>this.setgLevel(3)),this._parser.registerEscHandler({final:"|"},()=>this.setgLevel(3)),this._parser.registerEscHandler({final:"}"},()=>this.setgLevel(2)),this._parser.registerEscHandler({final:"~"},()=>this.setgLevel(1)),this._parser.registerEscHandler({intermediates:"%",final:"@"},()=>this.selectDefaultCharset()),this._parser.registerEscHandler({intermediates:"%",final:"G"},()=>this.selectDefaultCharset());for(let l in kt)this._parser.registerEscHandler({intermediates:"(",final:l},()=>this.selectCharset("("+l)),this._parser.registerEscHandler({intermediates:")",final:l},()=>this.selectCharset(")"+l)),this._parser.registerEscHandler({intermediates:"*",final:l},()=>this.selectCharset("*"+l)),this._parser.registerEscHandler({intermediates:"+",final:l},()=>this.selectCharset("+"+l)),this._parser.registerEscHandler({intermediates:"-",final:l},()=>this.selectCharset("-"+l)),this._parser.registerEscHandler({intermediates:".",final:l},()=>this.selectCharset("."+l)),this._parser.registerEscHandler({intermediates:"/",final:l},()=>this.selectCharset("/"+l));this._parser.registerEscHandler({intermediates:"#",final:"8"},()=>this.screenAlignmentPattern()),this._parser.setErrorHandler(l=>(this._logService.error("Parsing error: ",l),l)),this._parser.registerDcsHandler({intermediates:"$",final:"q"},new Rp((l,u)=>this.requestStatusString(l,u)))}getAttrData(){return this._curAttrData}_preserveStack(t,e,i,n){this._parseStack.paused=!0,this._parseStack.cursorStartX=t,this._parseStack.cursorStartY=e,this._parseStack.decodedLength=i,this._parseStack.position=n}_logSlowResolvingAsync(t){this._logService.logLevel<=3&&Promise.race([t,new Promise((e,i)=>setTimeout(()=>i("#SLOW_TIMEOUT"),Dp))]).catch(e=>{if(e!=="#SLOW_TIMEOUT")throw e;console.warn(`async parser handler taking longer than ${Dp} ms`)})}_getCurrentLinkId(){return this._curAttrData.extended.urlId}parse(t,e){let i,n=this._activeBuffer.x,r=this._activeBuffer.y,s=0,o=this._parseStack.paused;if(o){if(i=this._parser.parse(this._parseBuffer,this._parseStack.decodedLength,e))return this._logSlowResolvingAsync(i),i;n=this._parseStack.cursorStartX,r=this._parseStack.cursorStartY,this._parseStack.paused=!1,t.length>Yn&&(s=this._parseStack.position+Yn)}if(this._logService.logLevel<=1&&this._logService.debug(`parsing data ${typeof t=="string"?` "${t}"`:` "${Array.prototype.map.call(t,l=>String.fromCharCode(l)).join("")}"`}`),this._logService.logLevel===0&&this._logService.trace("parsing data (codes)",typeof t=="string"?t.split("").map(l=>l.charCodeAt(0)):t),this._parseBuffer.length<t.length&&this._parseBuffer.length<Yn&&(this._parseBuffer=new Uint32Array(Math.min(t.length,Yn))),o||this._dirtyRowTracker.clearRange(),t.length>Yn)for(let l=s;l<t.length;l+=Yn){let u=l+Yn<t.length?l+Yn:t.length,c=typeof t=="string"?this._stringDecoder.decode(t.substring(l,u),this._parseBuffer):this._utf8Decoder.decode(t.subarray(l,u),this._parseBuffer);if(i=this._parser.parse(this._parseBuffer,c))return this._preserveStack(n,r,c,l),this._logSlowResolvingAsync(i),i}else if(!o){let l=typeof t=="string"?this._stringDecoder.decode(t,this._parseBuffer):this._utf8Decoder.decode(t,this._parseBuffer);if(i=this._parser.parse(this._parseBuffer,l))return this._preserveStack(n,r,l,0),this._logSlowResolvingAsync(i),i}(this._activeBuffer.x!==n||this._activeBuffer.y!==r)&&this._onCursorMove.fire();let a=this._dirtyRowTracker.end+(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp),h=this._dirtyRowTracker.start+(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp);h<this._bufferService.rows&&this._onRequestRefreshRows.fire({start:Math.min(h,this._bufferService.rows-1),end:Math.min(a,this._bufferService.rows-1)})}print(t,e,i){let n,r,s=this._charsetService.charset,o=this._optionsService.rawOptions.screenReaderMode,a=this._bufferService.cols,h=this._coreService.decPrivateModes.wraparound,l=this._coreService.modes.insertMode,u=this._curAttrData,c=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._activeBuffer.x&&i-e>0&&c.getWidth(this._activeBuffer.x-1)===2&&c.setCellFromCodepoint(this._activeBuffer.x-1,0,1,u);let d=this._parser.precedingJoinState;for(let f=e;f<i;++f){if(n=t[f],n<127&&s){let p=s[String.fromCharCode(n)];p&&(n=p.charCodeAt(0))}let m=this._unicodeService.charProperties(n,d);r=Mr.extractWidth(m);let g=Mr.extractShouldJoin(m),_=g?Mr.extractWidth(d):0;if(d=m,o&&this._onA11yChar.fire(Kn(n)),this._getCurrentLinkId()&&this._oscLinkService.addLineToLink(this._getCurrentLinkId(),this._activeBuffer.ybase+this._activeBuffer.y),this._activeBuffer.x+r-_>a){if(h){let p=c,b=this._activeBuffer.x-_;for(this._activeBuffer.x=_,this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData(),!0)):(this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!0),c=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y),_>0&&c instanceof oo&&c.copyCellsFrom(p,b,0,_,!1);b<a;)p.setCellFromCodepoint(b++,0,1,u)}else if(this._activeBuffer.x=a-1,r===2)continue}if(g&&this._activeBuffer.x){let p=c.getWidth(this._activeBuffer.x-1)?1:2;c.addCodepointToCell(this._activeBuffer.x-p,n,r);for(let b=r-_;--b>=0;)c.setCellFromCodepoint(this._activeBuffer.x++,0,0,u);continue}if(l&&(c.insertCells(this._activeBuffer.x,r-_,this._activeBuffer.getNullCell(u)),c.getWidth(a-1)===2&&c.setCellFromCodepoint(a-1,0,1,u)),c.setCellFromCodepoint(this._activeBuffer.x++,n,r,u),r>0)for(;--r;)c.setCellFromCodepoint(this._activeBuffer.x++,0,0,u)}this._parser.precedingJoinState=d,this._activeBuffer.x<a&&i-e>0&&c.getWidth(this._activeBuffer.x)===0&&!c.hasContent(this._activeBuffer.x)&&c.setCellFromCodepoint(this._activeBuffer.x,0,1,u),this._dirtyRowTracker.markDirty(this._activeBuffer.y)}registerCsiHandler(t,e){return t.final==="t"&&!t.prefix&&!t.intermediates?this._parser.registerCsiHandler(t,i=>Lp(i.params[0],this._optionsService.rawOptions.windowOptions)?e(i):!0):this._parser.registerCsiHandler(t,e)}registerDcsHandler(t,e){return this._parser.registerDcsHandler(t,new Rp(e))}registerEscHandler(t,e){return this._parser.registerEscHandler(t,e)}registerOscHandler(t,e){return this._parser.registerOscHandler(t,new xi(e))}bell(){return this._onRequestBell.fire(),!0}lineFeed(){return this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._optionsService.rawOptions.convertEol&&(this._activeBuffer.x=0),this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData())):this._activeBuffer.y>=this._bufferService.rows?this._activeBuffer.y=this._bufferService.rows-1:this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!1,this._activeBuffer.x>=this._bufferService.cols&&this._activeBuffer.x--,this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._onLineFeed.fire(),!0}carriageReturn(){return this._activeBuffer.x=0,!0}backspace(){if(!this._coreService.decPrivateModes.reverseWraparound)return this._restrictCursor(),this._activeBuffer.x>0&&this._activeBuffer.x--,!0;if(this._restrictCursor(this._bufferService.cols),this._activeBuffer.x>0)this._activeBuffer.x--;else if(this._activeBuffer.x===0&&this._activeBuffer.y>this._activeBuffer.scrollTop&&this._activeBuffer.y<=this._activeBuffer.scrollBottom&&this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y)?.isWrapped){this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!1,this._activeBuffer.y--,this._activeBuffer.x=this._bufferService.cols-1;let t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);t.hasWidth(this._activeBuffer.x)&&!t.hasContent(this._activeBuffer.x)&&this._activeBuffer.x--}return this._restrictCursor(),!0}tab(){if(this._activeBuffer.x>=this._bufferService.cols)return!0;let t=this._activeBuffer.x;return this._activeBuffer.x=this._activeBuffer.nextStop(),this._optionsService.rawOptions.screenReaderMode&&this._onA11yTab.fire(this._activeBuffer.x-t),!0}shiftOut(){return this._charsetService.setgLevel(1),!0}shiftIn(){return this._charsetService.setgLevel(0),!0}_restrictCursor(t=this._bufferService.cols-1){this._activeBuffer.x=Math.min(t,Math.max(0,this._activeBuffer.x)),this._activeBuffer.y=this._coreService.decPrivateModes.origin?Math.min(this._activeBuffer.scrollBottom,Math.max(this._activeBuffer.scrollTop,this._activeBuffer.y)):Math.min(this._bufferService.rows-1,Math.max(0,this._activeBuffer.y)),this._dirtyRowTracker.markDirty(this._activeBuffer.y)}_setCursor(t,e){this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._coreService.decPrivateModes.origin?(this._activeBuffer.x=t,this._activeBuffer.y=this._activeBuffer.scrollTop+e):(this._activeBuffer.x=t,this._activeBuffer.y=e),this._restrictCursor(),this._dirtyRowTracker.markDirty(this._activeBuffer.y)}_moveCursor(t,e){this._restrictCursor(),this._setCursor(this._activeBuffer.x+t,this._activeBuffer.y+e)}cursorUp(t){let e=this._activeBuffer.y-this._activeBuffer.scrollTop;return e>=0?this._moveCursor(0,-Math.min(e,t.params[0]||1)):this._moveCursor(0,-(t.params[0]||1)),!0}cursorDown(t){let e=this._activeBuffer.scrollBottom-this._activeBuffer.y;return e>=0?this._moveCursor(0,Math.min(e,t.params[0]||1)):this._moveCursor(0,t.params[0]||1),!0}cursorForward(t){return this._moveCursor(t.params[0]||1,0),!0}cursorBackward(t){return this._moveCursor(-(t.params[0]||1),0),!0}cursorNextLine(t){return this.cursorDown(t),this._activeBuffer.x=0,!0}cursorPrecedingLine(t){return this.cursorUp(t),this._activeBuffer.x=0,!0}cursorCharAbsolute(t){return this._setCursor((t.params[0]||1)-1,this._activeBuffer.y),!0}cursorPosition(t){return this._setCursor(t.length>=2?(t.params[1]||1)-1:0,(t.params[0]||1)-1),!0}charPosAbsolute(t){return this._setCursor((t.params[0]||1)-1,this._activeBuffer.y),!0}hPositionRelative(t){return this._moveCursor(t.params[0]||1,0),!0}linePosAbsolute(t){return this._setCursor(this._activeBuffer.x,(t.params[0]||1)-1),!0}vPositionRelative(t){return this._moveCursor(0,t.params[0]||1),!0}hVPosition(t){return this.cursorPosition(t),!0}tabClear(t){let e=t.params[0];return e===0?delete this._activeBuffer.tabs[this._activeBuffer.x]:e===3&&(this._activeBuffer.tabs={}),!0}cursorForwardTab(t){if(this._activeBuffer.x>=this._bufferService.cols)return!0;let e=t.params[0]||1;for(;e--;)this._activeBuffer.x=this._activeBuffer.nextStop();return!0}cursorBackwardTab(t){if(this._activeBuffer.x>=this._bufferService.cols)return!0;let e=t.params[0]||1;for(;e--;)this._activeBuffer.x=this._activeBuffer.prevStop();return!0}selectProtected(t){let e=t.params[0];return e===1&&(this._curAttrData.bg|=536870912),(e===2||e===0)&&(this._curAttrData.bg&=-536870913),!0}_eraseInBufferLine(t,e,i,n=!1,r=!1){let s=this._activeBuffer.lines.get(this._activeBuffer.ybase+t);s.replaceCells(e,i,this._activeBuffer.getNullCell(this._eraseAttrData()),r),n&&(s.isWrapped=!1)}_resetBufferLine(t,e=!1){let i=this._activeBuffer.lines.get(this._activeBuffer.ybase+t);i&&(i.fill(this._activeBuffer.getNullCell(this._eraseAttrData()),e),this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase+t),i.isWrapped=!1)}eraseInDisplay(t,e=!1){this._restrictCursor(this._bufferService.cols);let i;switch(t.params[0]){case 0:for(i=this._activeBuffer.y,this._dirtyRowTracker.markDirty(i),this._eraseInBufferLine(i++,this._activeBuffer.x,this._bufferService.cols,this._activeBuffer.x===0,e);i<this._bufferService.rows;i++)this._resetBufferLine(i,e);this._dirtyRowTracker.markDirty(i);break;case 1:for(i=this._activeBuffer.y,this._dirtyRowTracker.markDirty(i),this._eraseInBufferLine(i,0,this._activeBuffer.x+1,!0,e),this._activeBuffer.x+1>=this._bufferService.cols&&(this._activeBuffer.lines.get(i+1).isWrapped=!1);i--;)this._resetBufferLine(i,e);this._dirtyRowTracker.markDirty(0);break;case 2:if(this._optionsService.rawOptions.scrollOnEraseInDisplay){for(i=this._bufferService.rows,this._dirtyRowTracker.markRangeDirty(0,i-1);i--&&!this._activeBuffer.lines.get(this._activeBuffer.ybase+i)?.getTrimmedLength(););for(;i>=0;i--)this._bufferService.scroll(this._eraseAttrData())}else{for(i=this._bufferService.rows,this._dirtyRowTracker.markDirty(i-1);i--;)this._resetBufferLine(i,e);this._dirtyRowTracker.markDirty(0)}break;case 3:let n=this._activeBuffer.lines.length-this._bufferService.rows;n>0&&(this._activeBuffer.lines.trimStart(n),this._activeBuffer.ybase=Math.max(this._activeBuffer.ybase-n,0),this._activeBuffer.ydisp=Math.max(this._activeBuffer.ydisp-n,0),this._onScroll.fire(0));break}return!0}eraseInLine(t,e=!1){switch(this._restrictCursor(this._bufferService.cols),t.params[0]){case 0:this._eraseInBufferLine(this._activeBuffer.y,this._activeBuffer.x,this._bufferService.cols,this._activeBuffer.x===0,e);break;case 1:this._eraseInBufferLine(this._activeBuffer.y,0,this._activeBuffer.x+1,!1,e);break;case 2:this._eraseInBufferLine(this._activeBuffer.y,0,this._bufferService.cols,!0,e);break}return this._dirtyRowTracker.markDirty(this._activeBuffer.y),!0}insertLines(t){this._restrictCursor();let e=t.params[0]||1;if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;let i=this._activeBuffer.ybase+this._activeBuffer.y,n=this._bufferService.rows-1-this._activeBuffer.scrollBottom,r=this._bufferService.rows-1+this._activeBuffer.ybase-n+1;for(;e--;)this._activeBuffer.lines.splice(r-1,1),this._activeBuffer.lines.splice(i,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y,this._activeBuffer.scrollBottom),this._activeBuffer.x=0,!0}deleteLines(t){this._restrictCursor();let e=t.params[0]||1;if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;let i=this._activeBuffer.ybase+this._activeBuffer.y,n;for(n=this._bufferService.rows-1-this._activeBuffer.scrollBottom,n=this._bufferService.rows-1+this._activeBuffer.ybase-n;e--;)this._activeBuffer.lines.splice(i,1),this._activeBuffer.lines.splice(n,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y,this._activeBuffer.scrollBottom),this._activeBuffer.x=0,!0}insertChars(t){this._restrictCursor();let e=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return e&&(e.insertCells(this._activeBuffer.x,t.params[0]||1,this._activeBuffer.getNullCell(this._eraseAttrData())),this._dirtyRowTracker.markDirty(this._activeBuffer.y)),!0}deleteChars(t){this._restrictCursor();let e=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return e&&(e.deleteCells(this._activeBuffer.x,t.params[0]||1,this._activeBuffer.getNullCell(this._eraseAttrData())),this._dirtyRowTracker.markDirty(this._activeBuffer.y)),!0}scrollUp(t){let e=t.params[0]||1;for(;e--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollTop,1),this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollBottom,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}scrollDown(t){let e=t.params[0]||1;for(;e--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollBottom,1),this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollTop,0,this._activeBuffer.getBlankLine(Rt));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}scrollLeft(t){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;let e=t.params[0]||1;for(let i=this._activeBuffer.scrollTop;i<=this._activeBuffer.scrollBottom;++i){let n=this._activeBuffer.lines.get(this._activeBuffer.ybase+i);n.deleteCells(0,e,this._activeBuffer.getNullCell(this._eraseAttrData())),n.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}scrollRight(t){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;let e=t.params[0]||1;for(let i=this._activeBuffer.scrollTop;i<=this._activeBuffer.scrollBottom;++i){let n=this._activeBuffer.lines.get(this._activeBuffer.ybase+i);n.insertCells(0,e,this._activeBuffer.getNullCell(this._eraseAttrData())),n.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}insertColumns(t){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;let e=t.params[0]||1;for(let i=this._activeBuffer.scrollTop;i<=this._activeBuffer.scrollBottom;++i){let n=this._activeBuffer.lines.get(this._activeBuffer.ybase+i);n.insertCells(this._activeBuffer.x,e,this._activeBuffer.getNullCell(this._eraseAttrData())),n.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}deleteColumns(t){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;let e=t.params[0]||1;for(let i=this._activeBuffer.scrollTop;i<=this._activeBuffer.scrollBottom;++i){let n=this._activeBuffer.lines.get(this._activeBuffer.ybase+i);n.deleteCells(this._activeBuffer.x,e,this._activeBuffer.getNullCell(this._eraseAttrData())),n.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}eraseChars(t){this._restrictCursor();let e=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return e&&(e.replaceCells(this._activeBuffer.x,this._activeBuffer.x+(t.params[0]||1),this._activeBuffer.getNullCell(this._eraseAttrData())),this._dirtyRowTracker.markDirty(this._activeBuffer.y)),!0}repeatPrecedingCharacter(t){let e=this._parser.precedingJoinState;if(!e)return!0;let i=t.params[0]||1,n=Mr.extractWidth(e),r=this._activeBuffer.x-n,s=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).getString(r),o=new Uint32Array(s.length*i),a=0;for(let l=0;l<s.length;){let u=s.codePointAt(l)||0;o[a++]=u,l+=u>65535?2:1}let h=a;for(let l=1;l<i;++l)o.copyWithin(h,0,a),h+=a;return this.print(o,0,h),!0}sendDeviceAttributesPrimary(t){return t.params[0]>0||(this._is("xterm")||this._is("rxvt-unicode")||this._is("screen")?this._coreService.triggerDataEvent(K.ESC+"[?1;2c"):this._is("linux")&&this._coreService.triggerDataEvent(K.ESC+"[?6c")),!0}sendDeviceAttributesSecondary(t){return t.params[0]>0||(this._is("xterm")?this._coreService.triggerDataEvent(K.ESC+"[>0;276;0c"):this._is("rxvt-unicode")?this._coreService.triggerDataEvent(K.ESC+"[>85;95;0c"):this._is("linux")?this._coreService.triggerDataEvent(t.params[0]+"c"):this._is("screen")&&this._coreService.triggerDataEvent(K.ESC+"[>83;40003;0c")),!0}_is(t){return(this._optionsService.rawOptions.termName+"").indexOf(t)===0}setMode(t){for(let e=0;e<t.length;e++)switch(t.params[e]){case 4:this._coreService.modes.insertMode=!0;break;case 20:this._optionsService.options.convertEol=!0;break}return!0}setModePrivate(t){for(let e=0;e<t.length;e++)switch(t.params[e]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!0;break;case 2:this._charsetService.setgCharset(0,wr),this._charsetService.setgCharset(1,wr),this._charsetService.setgCharset(2,wr),this._charsetService.setgCharset(3,wr);break;case 3:this._optionsService.rawOptions.windowOptions.setWinLines&&(this._bufferService.resize(132,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!0,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!0;break;case 12:this._optionsService.options.cursorBlink=!0;break;case 45:this._coreService.decPrivateModes.reverseWraparound=!0;break;case 66:this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,this._onRequestSyncScrollBar.fire();break;case 9:this._coreMouseService.activeProtocol="X10";break;case 1e3:this._coreMouseService.activeProtocol="VT200";break;case 1002:this._coreMouseService.activeProtocol="DRAG";break;case 1003:this._coreMouseService.activeProtocol="ANY";break;case 1004:this._coreService.decPrivateModes.sendFocus=!0,this._onRequestSendFocus.fire();break;case 1005:this._logService.debug("DECSET 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="SGR";break;case 1015:this._logService.debug("DECSET 1015 not supported (see #2507)");break;case 1016:this._coreMouseService.activeEncoding="SGR_PIXELS";break;case 25:this._coreService.isCursorHidden=!1;break;case 1048:this.saveCursor();break;case 1049:this.saveCursor();case 47:case 1047:this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()),this._coreService.isCursorInitialized=!0,this._onRequestRefreshRows.fire(void 0),this._onRequestSyncScrollBar.fire();break;case 2004:this._coreService.decPrivateModes.bracketedPasteMode=!0;break;case 2026:this._coreService.decPrivateModes.synchronizedOutput=!0;break}return!0}resetMode(t){for(let e=0;e<t.length;e++)switch(t.params[e]){case 4:this._coreService.modes.insertMode=!1;break;case 20:this._optionsService.options.convertEol=!1;break}return!0}resetModePrivate(t){for(let e=0;e<t.length;e++)switch(t.params[e]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!1;break;case 3:this._optionsService.rawOptions.windowOptions.setWinLines&&(this._bufferService.resize(80,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!1,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!1;break;case 12:this._optionsService.options.cursorBlink=!1;break;case 45:this._coreService.decPrivateModes.reverseWraparound=!1;break;case 66:this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,this._onRequestSyncScrollBar.fire();break;case 9:case 1e3:case 1002:case 1003:this._coreMouseService.activeProtocol="NONE";break;case 1004:this._coreService.decPrivateModes.sendFocus=!1;break;case 1005:this._logService.debug("DECRST 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="DEFAULT";break;case 1015:this._logService.debug("DECRST 1015 not supported (see #2507)");break;case 1016:this._coreMouseService.activeEncoding="DEFAULT";break;case 25:this._coreService.isCursorHidden=!0;break;case 1048:this.restoreCursor();break;case 1049:case 47:case 1047:this._bufferService.buffers.activateNormalBuffer(),t.params[e]===1049&&this.restoreCursor(),this._coreService.isCursorInitialized=!0,this._onRequestRefreshRows.fire(void 0),this._onRequestSyncScrollBar.fire();break;case 2004:this._coreService.decPrivateModes.bracketedPasteMode=!1;break;case 2026:this._coreService.decPrivateModes.synchronizedOutput=!1,this._onRequestRefreshRows.fire(void 0);break}return!0}requestMode(t,e){let i;(g=>(g[g.NOT_RECOGNIZED=0]="NOT_RECOGNIZED",g[g.SET=1]="SET",g[g.RESET=2]="RESET",g[g.PERMANENTLY_SET=3]="PERMANENTLY_SET",g[g.PERMANENTLY_RESET=4]="PERMANENTLY_RESET"))(i||={});let n=this._coreService.decPrivateModes,{activeProtocol:r,activeEncoding:s}=this._coreMouseService,o=this._coreService,{buffers:a,cols:h}=this._bufferService,{active:l,alt:u}=a,c=this._optionsService.rawOptions,d=(g,_)=>(o.triggerDataEvent(`${K.ESC}[${e?"":"?"}${g};${_}$y`),!0),f=g=>g?1:2,m=t.params[0];return e?m===2?d(m,4):m===4?d(m,f(o.modes.insertMode)):m===12?d(m,3):m===20?d(m,f(c.convertEol)):d(m,0):m===1?d(m,f(n.applicationCursorKeys)):m===3?d(m,c.windowOptions.setWinLines?h===80?2:h===132?1:0:0):m===6?d(m,f(n.origin)):m===7?d(m,f(n.wraparound)):m===8?d(m,3):m===9?d(m,f(r==="X10")):m===12?d(m,f(c.cursorBlink)):m===25?d(m,f(!o.isCursorHidden)):m===45?d(m,f(n.reverseWraparound)):m===66?d(m,f(n.applicationKeypad)):m===67?d(m,4):m===1e3?d(m,f(r==="VT200")):m===1002?d(m,f(r==="DRAG")):m===1003?d(m,f(r==="ANY")):m===1004?d(m,f(n.sendFocus)):m===1005?d(m,4):m===1006?d(m,f(s==="SGR")):m===1015?d(m,4):m===1016?d(m,f(s==="SGR_PIXELS")):m===1048?d(m,1):m===47||m===1047||m===1049?d(m,f(l===u)):m===2004?d(m,f(n.bracketedPasteMode)):m===2026?d(m,f(n.synchronizedOutput)):d(m,0)}_updateAttrColor(t,e,i,n,r){return e===2?(t|=50331648,t&=-16777216,t|=_o.fromColorRGB([i,n,r])):e===5&&(t&=-50331904,t|=33554432|i&255),t}_extractColor(t,e,i){let n=[0,0,-1,0,0,0],r=0,s=0;do{if(n[s+r]=t.params[e+s],t.hasSubParams(e+s)){let o=t.getSubParams(e+s),a=0;do n[1]===5&&(r=1),n[s+a+1+r]=o[a];while(++a<o.length&&a+s+1+r<n.length);break}if(n[1]===5&&s+r>=2||n[1]===2&&s+r>=5)break;n[1]&&(r=1)}while(++s+e<t.length&&s+r<n.length);for(let o=2;o<n.length;++o)n[o]===-1&&(n[o]=0);switch(n[0]){case 38:i.fg=this._updateAttrColor(i.fg,n[1],n[3],n[4],n[5]);break;case 48:i.bg=this._updateAttrColor(i.bg,n[1],n[3],n[4],n[5]);break;case 58:i.extended=i.extended.clone(),i.extended.underlineColor=this._updateAttrColor(i.extended.underlineColor,n[1],n[3],n[4],n[5])}return s}_processUnderline(t,e){e.extended=e.extended.clone(),(!~t||t>5)&&(t=1),e.extended.underlineStyle=t,e.fg|=268435456,t===0&&(e.fg&=-268435457),e.updateExtended()}_processSGR0(t){t.fg=Rt.fg,t.bg=Rt.bg,t.extended=t.extended.clone(),t.extended.underlineStyle=0,t.extended.underlineColor&=-67108864,t.updateExtended()}charAttributes(t){if(t.length===1&&t.params[0]===0)return this._processSGR0(this._curAttrData),!0;let e=t.length,i,n=this._curAttrData;for(let r=0;r<e;r++)i=t.params[r],i>=30&&i<=37?(n.fg&=-50331904,n.fg|=16777216|i-30):i>=40&&i<=47?(n.bg&=-50331904,n.bg|=16777216|i-40):i>=90&&i<=97?(n.fg&=-50331904,n.fg|=16777216|i-90|8):i>=100&&i<=107?(n.bg&=-50331904,n.bg|=16777216|i-100|8):i===0?this._processSGR0(n):i===1?n.fg|=134217728:i===3?n.bg|=67108864:i===4?(n.fg|=268435456,this._processUnderline(t.hasSubParams(r)?t.getSubParams(r)[0]:1,n)):i===5?n.fg|=536870912:i===7?n.fg|=67108864:i===8?n.fg|=1073741824:i===9?n.fg|=2147483648:i===2?n.bg|=134217728:i===21?this._processUnderline(2,n):i===22?(n.fg&=-134217729,n.bg&=-134217729):i===23?n.bg&=-67108865:i===24?(n.fg&=-268435457,this._processUnderline(0,n)):i===25?n.fg&=-536870913:i===27?n.fg&=-67108865:i===28?n.fg&=-1073741825:i===29?n.fg&=2147483647:i===39?(n.fg&=-67108864,n.fg|=Rt.fg&16777215):i===49?(n.bg&=-67108864,n.bg|=Rt.bg&16777215):i===38||i===48||i===58?r+=this._extractColor(t,r,n):i===53?n.bg|=1073741824:i===55?n.bg&=-1073741825:i===59?(n.extended=n.extended.clone(),n.extended.underlineColor=-1,n.updateExtended()):i===100?(n.fg&=-67108864,n.fg|=Rt.fg&16777215,n.bg&=-67108864,n.bg|=Rt.bg&16777215):this._logService.debug("Unknown SGR attribute: %d.",i);return!0}deviceStatus(t){switch(t.params[0]){case 5:this._coreService.triggerDataEvent(`${K.ESC}[0n`);break;case 6:let e=this._activeBuffer.y+1,i=this._activeBuffer.x+1;this._coreService.triggerDataEvent(`${K.ESC}[${e};${i}R`);break}return!0}deviceStatusPrivate(t){switch(t.params[0]){case 6:let e=this._activeBuffer.y+1,i=this._activeBuffer.x+1;this._coreService.triggerDataEvent(`${K.ESC}[?${e};${i}R`);break;case 15:break;case 25:break;case 26:break;case 53:break}return!0}softReset(t){return this._coreService.isCursorHidden=!1,this._onRequestSyncScrollBar.fire(),this._activeBuffer.scrollTop=0,this._activeBuffer.scrollBottom=this._bufferService.rows-1,this._curAttrData=Rt.clone(),this._coreService.reset(),this._charsetService.reset(),this._activeBuffer.savedX=0,this._activeBuffer.savedY=this._activeBuffer.ybase,this._activeBuffer.savedCurAttrData.fg=this._curAttrData.fg,this._activeBuffer.savedCurAttrData.bg=this._curAttrData.bg,this._activeBuffer.savedCharset=this._charsetService.charset,this._coreService.decPrivateModes.origin=!1,!0}setCursorStyle(t){let e=t.length===0?1:t.params[0];if(e===0)this._coreService.decPrivateModes.cursorStyle=void 0,this._coreService.decPrivateModes.cursorBlink=void 0;else{switch(e){case 1:case 2:this._coreService.decPrivateModes.cursorStyle="block";break;case 3:case 4:this._coreService.decPrivateModes.cursorStyle="underline";break;case 5:case 6:this._coreService.decPrivateModes.cursorStyle="bar";break}let i=e%2===1;this._coreService.decPrivateModes.cursorBlink=i}return!0}setScrollRegion(t){let e=t.params[0]||1,i;return(t.length<2||(i=t.params[1])>this._bufferService.rows||i===0)&&(i=this._bufferService.rows),i>e&&(this._activeBuffer.scrollTop=e-1,this._activeBuffer.scrollBottom=i-1,this._setCursor(0,0)),!0}windowOptions(t){if(!Lp(t.params[0],this._optionsService.rawOptions.windowOptions))return!0;let e=t.length>1?t.params[1]:0;switch(t.params[0]){case 14:e!==2&&this._onRequestWindowsOptionsReport.fire(0);break;case 16:this._onRequestWindowsOptionsReport.fire(1);break;case 18:this._bufferService&&this._coreService.triggerDataEvent(`${K.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);break;case 22:(e===0||e===2)&&(this._windowTitleStack.push(this._windowTitle),this._windowTitleStack.length>Ip&&this._windowTitleStack.shift()),(e===0||e===1)&&(this._iconNameStack.push(this._iconName),this._iconNameStack.length>Ip&&this._iconNameStack.shift());break;case 23:(e===0||e===2)&&this._windowTitleStack.length&&this.setTitle(this._windowTitleStack.pop()),(e===0||e===1)&&this._iconNameStack.length&&this.setIconName(this._iconNameStack.pop());break}return!0}saveCursor(t){return this._activeBuffer.savedX=this._activeBuffer.x,this._activeBuffer.savedY=this._activeBuffer.ybase+this._activeBuffer.y,this._activeBuffer.savedCurAttrData.fg=this._curAttrData.fg,this._activeBuffer.savedCurAttrData.bg=this._curAttrData.bg,this._activeBuffer.savedCharset=this._charsetService.charset,!0}restoreCursor(t){return this._activeBuffer.x=this._activeBuffer.savedX||0,this._activeBuffer.y=Math.max(this._activeBuffer.savedY-this._activeBuffer.ybase,0),this._curAttrData.fg=this._activeBuffer.savedCurAttrData.fg,this._curAttrData.bg=this._activeBuffer.savedCurAttrData.bg,this._charsetService.charset=this._savedCharset,this._activeBuffer.savedCharset&&(this._charsetService.charset=this._activeBuffer.savedCharset),this._restrictCursor(),!0}setTitle(t){return this._windowTitle=t,this._onTitleChange.fire(t),!0}setIconName(t){return this._iconName=t,!0}setOrReportIndexedColor(t){let e=[],i=t.split(";");for(;i.length>1;){let n=i.shift(),r=i.shift();if(/^\d+$/.exec(n)){let s=parseInt(n);if(Bp(s))if(r==="?")e.push({type:0,index:s});else{let o=Pp(r);o&&e.push({type:1,index:s,color:o})}}}return e.length&&this._onColor.fire(e),!0}setHyperlink(t){let e=t.indexOf(";");if(e===-1)return!0;let i=t.slice(0,e).trim(),n=t.slice(e+1);return n?this._createHyperlink(i,n):i.trim()?!1:this._finishHyperlink()}_createHyperlink(t,e){this._getCurrentLinkId()&&this._finishHyperlink();let i=t.split(":"),n,r=i.findIndex(s=>s.startsWith("id="));return r!==-1&&(n=i[r].slice(3)||void 0),this._curAttrData.extended=this._curAttrData.extended.clone(),this._curAttrData.extended.urlId=this._oscLinkService.registerLink({id:n,uri:e}),this._curAttrData.updateExtended(),!0}_finishHyperlink(){return this._curAttrData.extended=this._curAttrData.extended.clone(),this._curAttrData.extended.urlId=0,this._curAttrData.updateExtended(),!0}_setOrReportSpecialColor(t,e){let i=t.split(";");for(let n=0;n<i.length&&!(e>=this._specialColors.length);++n,++e)if(i[n]==="?")this._onColor.fire([{type:0,index:this._specialColors[e]}]);else{let r=Pp(i[n]);r&&this._onColor.fire([{type:1,index:this._specialColors[e],color:r}])}return!0}setOrReportFgColor(t){return this._setOrReportSpecialColor(t,0)}setOrReportBgColor(t){return this._setOrReportSpecialColor(t,1)}setOrReportCursorColor(t){return this._setOrReportSpecialColor(t,2)}restoreIndexedColor(t){if(!t)return this._onColor.fire([{type:2}]),!0;let e=[],i=t.split(";");for(let n=0;n<i.length;++n)if(/^\d+$/.exec(i[n])){let r=parseInt(i[n]);Bp(r)&&e.push({type:2,index:r})}return e.length&&this._onColor.fire(e),!0}restoreFgColor(t){return this._onColor.fire([{type:2,index:256}]),!0}restoreBgColor(t){return this._onColor.fire([{type:2,index:257}]),!0}restoreCursorColor(t){return this._onColor.fire([{type:2,index:258}]),!0}nextLine(){return this._activeBuffer.x=0,this.index(),!0}keypadApplicationMode(){return this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,this._onRequestSyncScrollBar.fire(),!0}keypadNumericMode(){return this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,this._onRequestSyncScrollBar.fire(),!0}selectDefaultCharset(){return this._charsetService.setgLevel(0),this._charsetService.setgCharset(0,wr),!0}selectCharset(t){return t.length!==2?(this.selectDefaultCharset(),!0):(t[0]==="/"||this._charsetService.setgCharset(Jw[t[0]],kt[t[1]]||wr),!0)}index(){return this._restrictCursor(),this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData())):this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._restrictCursor(),!0}tabSet(){return this._activeBuffer.tabs[this._activeBuffer.x]=!0,!0}reverseIndex(){if(this._restrictCursor(),this._activeBuffer.y===this._activeBuffer.scrollTop){let t=this._activeBuffer.scrollBottom-this._activeBuffer.scrollTop;this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase+this._activeBuffer.y,t,1),this._activeBuffer.lines.set(this._activeBuffer.ybase+this._activeBuffer.y,this._activeBuffer.getBlankLine(this._eraseAttrData())),this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom)}else this._activeBuffer.y--,this._restrictCursor();return!0}fullReset(){return this._parser.reset(),this._onRequestReset.fire(),!0}reset(){this._curAttrData=Rt.clone(),this._eraseAttrDataInternal=Rt.clone()}_eraseAttrData(){return this._eraseAttrDataInternal.bg&=-67108864,this._eraseAttrDataInternal.bg|=this._curAttrData.bg&67108863,this._eraseAttrDataInternal}setgLevel(t){return this._charsetService.setgLevel(t),!0}screenAlignmentPattern(){let t=new Ii;t.content=1<<22|69,t.fg=this._curAttrData.fg,t.bg=this._curAttrData.bg,this._setCursor(0,0);for(let e=0;e<this._bufferService.rows;++e){let i=this._activeBuffer.ybase+this._activeBuffer.y+e,n=this._activeBuffer.lines.get(i);n&&(n.fill(t),n.isWrapped=!1)}return this._dirtyRowTracker.markAllDirty(),this._setCursor(0,0),!0}requestStatusString(t,e){let i=o=>(this._coreService.triggerDataEvent(`${K.ESC}${o}${K.ESC}\\`),!0),n=this._bufferService.buffer,r=this._optionsService.rawOptions;return i(t==='"q'?`P1$r${this._curAttrData.isProtected()?1:0}"q`:t==='"p'?'P1$r61;1"p':t==="r"?`P1$r${n.scrollTop+1};${n.scrollBottom+1}r`:t==="m"?"P1$r0m":t===" q"?`P1$r${{block:2,underline:4,bar:6}[r.cursorStyle]-(r.cursorBlink?1:0)} q`:"P0$r")}markRangeDirty(t,e){this._dirtyRowTracker.markRangeDirty(t,e)}},wu=class{constructor(t){this._bufferService=t,this.clearRange()}clearRange(){this.start=this._bufferService.buffer.y,this.end=this._bufferService.buffer.y}markDirty(t){t<this.start?this.start=t:t>this.end&&(this.end=t)}markRangeDirty(t,e){t>e&&(Np=t,t=e,e=Np),t<this.start&&(this.start=t),e>this.end&&(this.end=e)}markAllDirty(){this.markRangeDirty(0,this._bufferService.rows-1)}};wu=bt([pe(0,ri)],wu);function Bp(t){return 0<=t&&t<256}var Qw=5e7,kp=12,e1=50,t1=class extends ze{constructor(t){super(),this._action=t,this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0,this._isSyncWriting=!1,this._syncCalls=0,this._didUserInput=!1,this._onWriteParsed=this._register(new se),this.onWriteParsed=this._onWriteParsed.event}handleUserInput(){this._didUserInput=!0}writeSync(t,e){if(e!==void 0&&this._syncCalls>e){this._syncCalls=0;return}if(this._pendingData+=t.length,this._writeBuffer.push(t),this._callbacks.push(void 0),this._syncCalls++,this._isSyncWriting)return;this._isSyncWriting=!0;let i;for(;i=this._writeBuffer.shift();){this._action(i);let n=this._callbacks.shift();n&&n()}this._pendingData=0,this._bufferOffset=2147483647,this._isSyncWriting=!1,this._syncCalls=0}write(t,e){if(this._pendingData>Qw)throw new Error("write data discarded, use flow control to avoid losing data");if(!this._writeBuffer.length){if(this._bufferOffset=0,this._didUserInput){this._didUserInput=!1,this._pendingData+=t.length,this._writeBuffer.push(t),this._callbacks.push(e),this._innerWrite();return}setTimeout(()=>this._innerWrite())}this._pendingData+=t.length,this._writeBuffer.push(t),this._callbacks.push(e)}_innerWrite(t=0,e=!0){let i=t||performance.now();for(;this._writeBuffer.length>this._bufferOffset;){let n=this._writeBuffer[this._bufferOffset],r=this._action(n,e);if(r){let o=a=>performance.now()-i>=kp?setTimeout(()=>this._innerWrite(0,a)):this._innerWrite(i,a);r.catch(a=>(queueMicrotask(()=>{throw a}),Promise.resolve(!1))).then(o);return}let s=this._callbacks[this._bufferOffset];if(s&&s(),this._bufferOffset++,this._pendingData-=n.length,performance.now()-i>=kp)break}this._writeBuffer.length>this._bufferOffset?(this._bufferOffset>e1&&(this._writeBuffer=this._writeBuffer.slice(this._bufferOffset),this._callbacks=this._callbacks.slice(this._bufferOffset),this._bufferOffset=0),setTimeout(()=>this._innerWrite())):(this._writeBuffer.length=0,this._callbacks.length=0,this._pendingData=0,this._bufferOffset=0),this._onWriteParsed.fire()}},Mu=class{constructor(t){this._bufferService=t,this._nextId=1,this._entriesWithId=new Map,this._dataByLinkId=new Map}registerLink(t){let e=this._bufferService.buffer;if(t.id===void 0){let a=e.addMarker(e.ybase+e.y),h={data:t,id:this._nextId++,lines:[a]};return a.onDispose(()=>this._removeMarkerFromLink(h,a)),this._dataByLinkId.set(h.id,h),h.id}let i=t,n=this._getEntryIdKey(i),r=this._entriesWithId.get(n);if(r)return this.addLineToLink(r.id,e.ybase+e.y),r.id;let s=e.addMarker(e.ybase+e.y),o={id:this._nextId++,key:this._getEntryIdKey(i),data:i,lines:[s]};return s.onDispose(()=>this._removeMarkerFromLink(o,s)),this._entriesWithId.set(o.key,o),this._dataByLinkId.set(o.id,o),o.id}addLineToLink(t,e){let i=this._dataByLinkId.get(t);if(i&&i.lines.every(n=>n.line!==e)){let n=this._bufferService.buffer.addMarker(e);i.lines.push(n),n.onDispose(()=>this._removeMarkerFromLink(i,n))}}getLinkData(t){return this._dataByLinkId.get(t)?.data}_getEntryIdKey(t){return`${t.id};;${t.uri}`}_removeMarkerFromLink(t,e){let i=t.lines.indexOf(e);i!==-1&&(t.lines.splice(i,1),t.lines.length===0&&(t.data.id!==void 0&&this._entriesWithId.delete(t.key),this._dataByLinkId.delete(t.id)))}};Mu=bt([pe(0,ri)],Mu);var Fp=!1,i1=class extends ze{constructor(t){super(),this._windowsWrappingHeuristics=this._register(new cs),this._onBinary=this._register(new se),this.onBinary=this._onBinary.event,this._onData=this._register(new se),this.onData=this._onData.event,this._onLineFeed=this._register(new se),this.onLineFeed=this._onLineFeed.event,this._onResize=this._register(new se),this.onResize=this._onResize.event,this._onWriteParsed=this._register(new se),this.onWriteParsed=this._onWriteParsed.event,this._onScroll=this._register(new se),this._instantiationService=new Cw,this.optionsService=this._register(new kw(t)),this._instantiationService.setService(si,this.optionsService),this._bufferService=this._register(this._instantiationService.createInstance(Su)),this._instantiationService.setService(ri,this._bufferService),this._logService=this._register(this._instantiationService.createInstance(vu)),this._instantiationService.setService(Zp,this._logService),this.coreService=this._register(this._instantiationService.createInstance(yu)),this._instantiationService.setService(Ar,this.coreService),this.coreMouseService=this._register(this._instantiationService.createInstance(xu)),this._instantiationService.setService(Kp,this.coreMouseService),this.unicodeService=this._register(this._instantiationService.createInstance(Mr)),this._instantiationService.setService(Yy,this.unicodeService),this._charsetService=this._instantiationService.createInstance(Hw),this._instantiationService.setService(qy,this._charsetService),this._oscLinkService=this._instantiationService.createInstance(Mu),this._instantiationService.setService(Jp,this._oscLinkService),this._inputHandler=this._register(new jw(this._bufferService,this._charsetService,this.coreService,this._logService,this.optionsService,this._oscLinkService,this.coreMouseService,this.unicodeService)),this._register(Kt.forward(this._inputHandler.onLineFeed,this._onLineFeed)),this._register(this._inputHandler),this._register(Kt.forward(this._bufferService.onResize,this._onResize)),this._register(Kt.forward(this.coreService.onData,this._onData)),this._register(Kt.forward(this.coreService.onBinary,this._onBinary)),this._register(this.coreService.onRequestScrollToBottom(()=>this.scrollToBottom(!0))),this._register(this.coreService.onUserInput(()=>this._writeBuffer.handleUserInput())),this._register(this.optionsService.onMultipleOptionChange(["windowsMode","windowsPty"],()=>this._handleWindowsPtyOptionChange())),this._register(this._bufferService.onScroll(()=>{this._onScroll.fire({position:this._bufferService.buffer.ydisp}),this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop,this._bufferService.buffer.scrollBottom)})),this._writeBuffer=this._register(new t1((e,i)=>this._inputHandler.parse(e,i))),this._register(Kt.forward(this._writeBuffer.onWriteParsed,this._onWriteParsed))}get onScroll(){return this._onScrollApi||(this._onScrollApi=this._register(new se),this._onScroll.event(t=>{this._onScrollApi?.fire(t.position)})),this._onScrollApi.event}get cols(){return this._bufferService.cols}get rows(){return this._bufferService.rows}get buffers(){return this._bufferService.buffers}get options(){return this.optionsService.options}set options(t){for(let e in t)this.optionsService.options[e]=t[e]}write(t,e){this._writeBuffer.write(t,e)}writeSync(t,e){this._logService.logLevel<=3&&!Fp&&(this._logService.warn("writeSync is unreliable and will be removed soon."),Fp=!0),this._writeBuffer.writeSync(t,e)}input(t,e=!0){this.coreService.triggerDataEvent(t,e)}resize(t,e){isNaN(t)||isNaN(e)||(t=Math.max(t,Om),e=Math.max(e,Um),this._bufferService.resize(t,e))}scroll(t,e=!1){this._bufferService.scroll(t,e)}scrollLines(t,e){this._bufferService.scrollLines(t,e)}scrollPages(t){this.scrollLines(t*(this.rows-1))}scrollToTop(){this.scrollLines(-this._bufferService.buffer.ydisp)}scrollToBottom(t){this.scrollLines(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp)}scrollToLine(t){let e=t-this._bufferService.buffer.ydisp;e!==0&&this.scrollLines(e)}registerEscHandler(t,e){return this._inputHandler.registerEscHandler(t,e)}registerDcsHandler(t,e){return this._inputHandler.registerDcsHandler(t,e)}registerCsiHandler(t,e){return this._inputHandler.registerCsiHandler(t,e)}registerOscHandler(t,e){return this._inputHandler.registerOscHandler(t,e)}_setup(){this._handleWindowsPtyOptionChange()}reset(){this._inputHandler.reset(),this._bufferService.reset(),this._charsetService.reset(),this.coreService.reset(),this.coreMouseService.reset()}_handleWindowsPtyOptionChange(){let t=!1,e=this.optionsService.rawOptions.windowsPty;e&&e.buildNumber!==void 0&&e.buildNumber!==void 0?t=e.backend==="conpty"&&e.buildNumber<21376:this.optionsService.rawOptions.windowsMode&&(t=!0),t?this._enableWindowsWrappingHeuristics():this._windowsWrappingHeuristics.clear()}_enableWindowsWrappingHeuristics(){if(!this._windowsWrappingHeuristics.value){let t=[];t.push(this.onLineFeed(Ap.bind(null,this._bufferService))),t.push(this.registerCsiHandler({final:"H"},()=>(Ap(this._bufferService),!1))),this._windowsWrappingHeuristics.value=mt(()=>{for(let e of t)e.dispose()})}}},n1={48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"']};function r1(t,e,i,n){let r={type:0,cancel:!1,key:void 0},s=(t.shiftKey?1:0)|(t.altKey?2:0)|(t.ctrlKey?4:0)|(t.metaKey?8:0);switch(t.keyCode){case 0:t.key==="UIKeyInputUpArrow"?e?r.key=K.ESC+"OA":r.key=K.ESC+"[A":t.key==="UIKeyInputLeftArrow"?e?r.key=K.ESC+"OD":r.key=K.ESC+"[D":t.key==="UIKeyInputRightArrow"?e?r.key=K.ESC+"OC":r.key=K.ESC+"[C":t.key==="UIKeyInputDownArrow"&&(e?r.key=K.ESC+"OB":r.key=K.ESC+"[B");break;case 8:r.key=t.ctrlKey?"\b":K.DEL,t.altKey&&(r.key=K.ESC+r.key);break;case 9:if(t.shiftKey){r.key=K.ESC+"[Z";break}r.key=K.HT,r.cancel=!0;break;case 13:r.key=t.altKey?K.ESC+K.CR:K.CR,r.cancel=!0;break;case 27:r.key=K.ESC,t.altKey&&(r.key=K.ESC+K.ESC),r.cancel=!0;break;case 37:if(t.metaKey)break;s?r.key=K.ESC+"[1;"+(s+1)+"D":e?r.key=K.ESC+"OD":r.key=K.ESC+"[D";break;case 39:if(t.metaKey)break;s?r.key=K.ESC+"[1;"+(s+1)+"C":e?r.key=K.ESC+"OC":r.key=K.ESC+"[C";break;case 38:if(t.metaKey)break;s?r.key=K.ESC+"[1;"+(s+1)+"A":e?r.key=K.ESC+"OA":r.key=K.ESC+"[A";break;case 40:if(t.metaKey)break;s?r.key=K.ESC+"[1;"+(s+1)+"B":e?r.key=K.ESC+"OB":r.key=K.ESC+"[B";break;case 45:!t.shiftKey&&!t.ctrlKey&&(r.key=K.ESC+"[2~");break;case 46:s?r.key=K.ESC+"[3;"+(s+1)+"~":r.key=K.ESC+"[3~";break;case 36:s?r.key=K.ESC+"[1;"+(s+1)+"H":e?r.key=K.ESC+"OH":r.key=K.ESC+"[H";break;case 35:s?r.key=K.ESC+"[1;"+(s+1)+"F":e?r.key=K.ESC+"OF":r.key=K.ESC+"[F";break;case 33:t.shiftKey?r.type=2:t.ctrlKey?r.key=K.ESC+"[5;"+(s+1)+"~":r.key=K.ESC+"[5~";break;case 34:t.shiftKey?r.type=3:t.ctrlKey?r.key=K.ESC+"[6;"+(s+1)+"~":r.key=K.ESC+"[6~";break;case 112:s?r.key=K.ESC+"[1;"+(s+1)+"P":r.key=K.ESC+"OP";break;case 113:s?r.key=K.ESC+"[1;"+(s+1)+"Q":r.key=K.ESC+"OQ";break;case 114:s?r.key=K.ESC+"[1;"+(s+1)+"R":r.key=K.ESC+"OR";break;case 115:s?r.key=K.ESC+"[1;"+(s+1)+"S":r.key=K.ESC+"OS";break;case 116:s?r.key=K.ESC+"[15;"+(s+1)+"~":r.key=K.ESC+"[15~";break;case 117:s?r.key=K.ESC+"[17;"+(s+1)+"~":r.key=K.ESC+"[17~";break;case 118:s?r.key=K.ESC+"[18;"+(s+1)+"~":r.key=K.ESC+"[18~";break;case 119:s?r.key=K.ESC+"[19;"+(s+1)+"~":r.key=K.ESC+"[19~";break;case 120:s?r.key=K.ESC+"[20;"+(s+1)+"~":r.key=K.ESC+"[20~";break;case 121:s?r.key=K.ESC+"[21;"+(s+1)+"~":r.key=K.ESC+"[21~";break;case 122:s?r.key=K.ESC+"[23;"+(s+1)+"~":r.key=K.ESC+"[23~";break;case 123:s?r.key=K.ESC+"[24;"+(s+1)+"~":r.key=K.ESC+"[24~";break;default:if(t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey)t.keyCode>=65&&t.keyCode<=90?r.key=String.fromCharCode(t.keyCode-64):t.keyCode===32?r.key=K.NUL:t.keyCode>=51&&t.keyCode<=55?r.key=String.fromCharCode(t.keyCode-51+27):t.keyCode===56?r.key=K.DEL:t.keyCode===219?r.key=K.ESC:t.keyCode===220?r.key=K.FS:t.keyCode===221&&(r.key=K.GS);else if((!i||n)&&t.altKey&&!t.metaKey){let o=n1[t.keyCode]?.[t.shiftKey?1:0];if(o)r.key=K.ESC+o;else if(t.keyCode>=65&&t.keyCode<=90){let a=t.ctrlKey?t.keyCode-64:t.keyCode+32,h=String.fromCharCode(a);t.shiftKey&&(h=h.toUpperCase()),r.key=K.ESC+h}else if(t.keyCode===32)r.key=K.ESC+(t.ctrlKey?K.NUL:" ");else if(t.key==="Dead"&&t.code.startsWith("Key")){let a=t.code.slice(3,4);t.shiftKey||(a=a.toLowerCase()),r.key=K.ESC+a,r.cancel=!0}}else i&&!t.altKey&&!t.ctrlKey&&!t.shiftKey&&t.metaKey?t.keyCode===65&&(r.type=1):t.key&&!t.ctrlKey&&!t.altKey&&!t.metaKey&&t.keyCode>=48&&t.key.length===1?r.key=t.key:t.key&&t.ctrlKey&&(t.key==="_"&&(r.key=K.US),t.key==="@"&&(r.key=K.NUL));break}return r}var wt=0,s1=class{constructor(t){this._getKey=t,this._array=[],this._insertedValues=[],this._flushInsertedTask=new Gl,this._isFlushingInserted=!1,this._deletedIndices=[],this._flushDeletedTask=new Gl,this._isFlushingDeleted=!1}clear(){this._array.length=0,this._insertedValues.length=0,this._flushInsertedTask.clear(),this._isFlushingInserted=!1,this._deletedIndices.length=0,this._flushDeletedTask.clear(),this._isFlushingDeleted=!1}insert(t){this._flushCleanupDeleted(),this._insertedValues.length===0&&this._flushInsertedTask.enqueue(()=>this._flushInserted()),this._insertedValues.push(t)}_flushInserted(){let t=this._insertedValues.sort((r,s)=>this._getKey(r)-this._getKey(s)),e=0,i=0,n=new Array(this._array.length+this._insertedValues.length);for(let r=0;r<n.length;r++)i>=this._array.length||this._getKey(t[e])<=this._getKey(this._array[i])?(n[r]=t[e],e++):n[r]=this._array[i++];this._array=n,this._insertedValues.length=0}_flushCleanupInserted(){!this._isFlushingInserted&&this._insertedValues.length>0&&this._flushInsertedTask.flush()}delete(t){if(this._flushCleanupInserted(),this._array.length===0)return!1;let e=this._getKey(t);if(e===void 0||(wt=this._search(e),wt===-1)||this._getKey(this._array[wt])!==e)return!1;do if(this._array[wt]===t)return this._deletedIndices.length===0&&this._flushDeletedTask.enqueue(()=>this._flushDeleted()),this._deletedIndices.push(wt),!0;while(++wt<this._array.length&&this._getKey(this._array[wt])===e);return!1}_flushDeleted(){this._isFlushingDeleted=!0;let t=this._deletedIndices.sort((r,s)=>r-s),e=0,i=new Array(this._array.length-t.length),n=0;for(let r=0;r<this._array.length;r++)t[e]===r?e++:i[n++]=this._array[r];this._array=i,this._deletedIndices.length=0,this._isFlushingDeleted=!1}_flushCleanupDeleted(){!this._isFlushingDeleted&&this._deletedIndices.length>0&&this._flushDeletedTask.flush()}*getKeyIterator(t){if(this._flushCleanupInserted(),this._flushCleanupDeleted(),this._array.length!==0&&(wt=this._search(t),!(wt<0||wt>=this._array.length)&&this._getKey(this._array[wt])===t))do yield this._array[wt];while(++wt<this._array.length&&this._getKey(this._array[wt])===t)}forEachByKey(t,e){if(this._flushCleanupInserted(),this._flushCleanupDeleted(),this._array.length!==0&&(wt=this._search(t),!(wt<0||wt>=this._array.length)&&this._getKey(this._array[wt])===t))do e(this._array[wt]);while(++wt<this._array.length&&this._getKey(this._array[wt])===t)}values(){return this._flushCleanupInserted(),this._flushCleanupDeleted(),[...this._array].values()}_search(t){let e=0,i=this._array.length-1;for(;i>=e;){let n=e+i>>1,r=this._getKey(this._array[n]);if(r>t)i=n-1;else if(r<t)e=n+1;else{for(;n>0&&this._getKey(this._array[n-1])===t;)n--;return n}}return e}},Hc=0,Op=0,o1=class extends ze{constructor(){super(),this._decorations=new s1(t=>t?.marker.line),this._onDecorationRegistered=this._register(new se),this.onDecorationRegistered=this._onDecorationRegistered.event,this._onDecorationRemoved=this._register(new se),this.onDecorationRemoved=this._onDecorationRemoved.event,this._register(mt(()=>this.reset()))}get decorations(){return this._decorations.values()}registerDecoration(t){if(t.marker.isDisposed)return;let e=new a1(t);if(e){let i=e.marker.onDispose(()=>e.dispose()),n=e.onDispose(()=>{n.dispose(),e&&(this._decorations.delete(e)&&this._onDecorationRemoved.fire(e),i.dispose())});this._decorations.insert(e),this._onDecorationRegistered.fire(e)}return e}reset(){for(let t of this._decorations.values())t.dispose();this._decorations.clear()}*getDecorationsAtCell(t,e,i){let n=0,r=0;for(let s of this._decorations.getKeyIterator(e))n=s.options.x??0,r=n+(s.options.width??1),t>=n&&t<r&&(!i||(s.options.layer??"bottom")===i)&&(yield s)}forEachDecorationAtCell(t,e,i,n){this._decorations.forEachByKey(e,r=>{Hc=r.options.x??0,Op=Hc+(r.options.width??1),t>=Hc&&t<Op&&(!i||(r.options.layer??"bottom")===i)&&n(r)})}},a1=class extends Jn{constructor(t){super(),this.options=t,this.onRenderEmitter=this.add(new se),this.onRender=this.onRenderEmitter.event,this._onDispose=this.add(new se),this.onDispose=this._onDispose.event,this._cachedBg=null,this._cachedFg=null,this.marker=t.marker,this.options.overviewRulerOptions&&!this.options.overviewRulerOptions.position&&(this.options.overviewRulerOptions.position="full")}get backgroundColorRGB(){return this._cachedBg===null&&(this.options.backgroundColor?this._cachedBg=vt.toColor(this.options.backgroundColor):this._cachedBg=void 0),this._cachedBg}get foregroundColorRGB(){return this._cachedFg===null&&(this.options.foregroundColor?this._cachedFg=vt.toColor(this.options.foregroundColor):this._cachedFg=void 0),this._cachedFg}dispose(){this._onDispose.fire(),super.dispose()}},l1=1e3,h1=class{constructor(t,e=l1){this._renderCallback=t,this._debounceThresholdMS=e,this._lastRefreshMs=0,this._additionalRefreshRequested=!1}dispose(){this._refreshTimeoutID&&clearTimeout(this._refreshTimeoutID)}refresh(t,e,i){this._rowCount=i,t=t!==void 0?t:0,e=e!==void 0?e:this._rowCount-1,this._rowStart=this._rowStart!==void 0?Math.min(this._rowStart,t):t,this._rowEnd=this._rowEnd!==void 0?Math.max(this._rowEnd,e):e;let n=performance.now();if(n-this._lastRefreshMs>=this._debounceThresholdMS)this._lastRefreshMs=n,this._innerRefresh();else if(!this._additionalRefreshRequested){let r=n-this._lastRefreshMs,s=this._debounceThresholdMS-r;this._additionalRefreshRequested=!0,this._refreshTimeoutID=window.setTimeout(()=>{this._lastRefreshMs=performance.now(),this._innerRefresh(),this._additionalRefreshRequested=!1,this._refreshTimeoutID=void 0},s)}}_innerRefresh(){if(this._rowStart===void 0||this._rowEnd===void 0||this._rowCount===void 0)return;let t=Math.max(this._rowStart,0),e=Math.min(this._rowEnd,this._rowCount-1);this._rowStart=void 0,this._rowEnd=void 0,this._renderCallback(t,e)}},Up=20,zp=!1,Xl=class extends ze{constructor(t,e,i,n){super(),this._terminal=t,this._coreBrowserService=i,this._renderService=n,this._rowColumns=new WeakMap,this._liveRegionLineCount=0,this._charsToConsume=[],this._charsToAnnounce="";let r=this._coreBrowserService.mainDocument;this._accessibilityContainer=r.createElement("div"),this._accessibilityContainer.classList.add("xterm-accessibility"),this._rowContainer=r.createElement("div"),this._rowContainer.setAttribute("role","list"),this._rowContainer.classList.add("xterm-accessibility-tree"),this._rowElements=[];for(let s=0;s<this._terminal.rows;s++)this._rowElements[s]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[s]);if(this._topBoundaryFocusListener=s=>this._handleBoundaryFocus(s,0),this._bottomBoundaryFocusListener=s=>this._handleBoundaryFocus(s,1),this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._accessibilityContainer.appendChild(this._rowContainer),this._liveRegion=r.createElement("div"),this._liveRegion.classList.add("live-region"),this._liveRegion.setAttribute("aria-live","assertive"),this._accessibilityContainer.appendChild(this._liveRegion),this._liveRegionDebouncer=this._register(new h1(this._renderRows.bind(this))),!this._terminal.element)throw new Error("Cannot enable accessibility before Terminal.open");zp?(this._accessibilityContainer.classList.add("debug"),this._rowContainer.classList.add("debug"),this._debugRootContainer=r.createElement("div"),this._debugRootContainer.classList.add("xterm"),this._debugRootContainer.appendChild(r.createTextNode("------start a11y------")),this._debugRootContainer.appendChild(this._accessibilityContainer),this._debugRootContainer.appendChild(r.createTextNode("------end a11y------")),this._terminal.element.insertAdjacentElement("afterend",this._debugRootContainer)):this._terminal.element.insertAdjacentElement("afterbegin",this._accessibilityContainer),this._register(this._terminal.onResize(s=>this._handleResize(s.rows))),this._register(this._terminal.onRender(s=>this._refreshRows(s.start,s.end))),this._register(this._terminal.onScroll(()=>this._refreshRows())),this._register(this._terminal.onA11yChar(s=>this._handleChar(s))),this._register(this._terminal.onLineFeed(()=>this._handleChar(`
`))),this._register(this._terminal.onA11yTab(s=>this._handleTab(s))),this._register(this._terminal.onKey(s=>this._handleKey(s.key))),this._register(this._terminal.onBlur(()=>this._clearLiveRegion())),this._register(this._renderService.onDimensionsChange(()=>this._refreshRowsDimensions())),this._register(ke(r,"selectionchange",()=>this._handleSelectionChange())),this._register(this._coreBrowserService.onDprChange(()=>this._refreshRowsDimensions())),this._refreshRowsDimensions(),this._refreshRows(),this._register(mt(()=>{zp?this._debugRootContainer.remove():this._accessibilityContainer.remove(),this._rowElements.length=0}))}_handleTab(t){for(let e=0;e<t;e++)this._handleChar(" ")}_handleChar(t){this._liveRegionLineCount<Up+1&&(this._charsToConsume.length>0?this._charsToConsume.shift()!==t&&(this._charsToAnnounce+=t):this._charsToAnnounce+=t,t===`
`&&(this._liveRegionLineCount++,this._liveRegionLineCount===Up+1&&(this._liveRegion.textContent+=Wc.get())))}_clearLiveRegion(){this._liveRegion.textContent="",this._liveRegionLineCount=0}_handleKey(t){this._clearLiveRegion(),/\p{Control}/u.test(t)||this._charsToConsume.push(t)}_refreshRows(t,e){this._liveRegionDebouncer.refresh(t,e,this._terminal.rows)}_renderRows(t,e){let i=this._terminal.buffer,n=i.lines.length.toString();for(let r=t;r<=e;r++){let s=i.lines.get(i.ydisp+r),o=[],a=s?.translateToString(!0,void 0,void 0,o)||"",h=(i.ydisp+r+1).toString(),l=this._rowElements[r];l&&(a.length===0?(l.textContent="\xA0",this._rowColumns.set(l,[0,1])):(l.textContent=a,this._rowColumns.set(l,o)),l.setAttribute("aria-posinset",h),l.setAttribute("aria-setsize",n),this._alignRowWidth(l))}this._announceCharacters()}_announceCharacters(){this._charsToAnnounce.length!==0&&(this._liveRegion.textContent+=this._charsToAnnounce,this._charsToAnnounce="")}_handleBoundaryFocus(t,e){let i=t.target,n=this._rowElements[e===0?1:this._rowElements.length-2],r=i.getAttribute("aria-posinset"),s=e===0?"1":`${this._terminal.buffer.lines.length}`;if(r===s||t.relatedTarget!==n)return;let o,a;if(e===0?(o=i,a=this._rowElements.pop(),this._rowContainer.removeChild(a)):(o=this._rowElements.shift(),a=i,this._rowContainer.removeChild(o)),o.removeEventListener("focus",this._topBoundaryFocusListener),a.removeEventListener("focus",this._bottomBoundaryFocusListener),e===0){let h=this._createAccessibilityTreeNode();this._rowElements.unshift(h),this._rowContainer.insertAdjacentElement("afterbegin",h)}else{let h=this._createAccessibilityTreeNode();this._rowElements.push(h),this._rowContainer.appendChild(h)}this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._terminal.scrollLines(e===0?-1:1),this._rowElements[e===0?1:this._rowElements.length-2].focus(),t.preventDefault(),t.stopImmediatePropagation()}_handleSelectionChange(){if(this._rowElements.length===0)return;let t=this._coreBrowserService.mainDocument.getSelection();if(!t)return;if(t.isCollapsed){this._rowContainer.contains(t.anchorNode)&&this._terminal.clearSelection();return}if(!t.anchorNode||!t.focusNode){console.error("anchorNode and/or focusNode are null");return}let e={node:t.anchorNode,offset:t.anchorOffset},i={node:t.focusNode,offset:t.focusOffset};if((e.node.compareDocumentPosition(i.node)&Node.DOCUMENT_POSITION_PRECEDING||e.node===i.node&&e.offset>i.offset)&&([e,i]=[i,e]),e.node.compareDocumentPosition(this._rowElements[0])&(Node.DOCUMENT_POSITION_CONTAINED_BY|Node.DOCUMENT_POSITION_FOLLOWING)&&(e={node:this._rowElements[0].childNodes[0],offset:0}),!this._rowContainer.contains(e.node))return;let n=this._rowElements.slice(-1)[0];if(i.node.compareDocumentPosition(n)&(Node.DOCUMENT_POSITION_CONTAINED_BY|Node.DOCUMENT_POSITION_PRECEDING)&&(i={node:n,offset:n.textContent?.length??0}),!this._rowContainer.contains(i.node))return;let r=({node:a,offset:h})=>{let l=a instanceof Text?a.parentNode:a,u=parseInt(l?.getAttribute("aria-posinset"),10)-1;if(isNaN(u))return console.warn("row is invalid. Race condition?"),null;let c=this._rowColumns.get(l);if(!c)return console.warn("columns is null. Race condition?"),null;let d=h<c.length?c[h]:c.slice(-1)[0]+1;return d>=this._terminal.cols&&(++u,d=0),{row:u,column:d}},s=r(e),o=r(i);if(!(!s||!o)){if(s.row>o.row||s.row===o.row&&s.column>=o.column)throw new Error("invalid range");this._terminal.select(s.column,s.row,(o.row-s.row)*this._terminal.cols-s.column+o.column)}}_handleResize(t){this._rowElements[this._rowElements.length-1].removeEventListener("focus",this._bottomBoundaryFocusListener);for(let e=this._rowContainer.children.length;e<this._terminal.rows;e++)this._rowElements[e]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[e]);for(;this._rowElements.length>t;)this._rowContainer.removeChild(this._rowElements.pop());this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._refreshRowsDimensions()}_createAccessibilityTreeNode(){let t=this._coreBrowserService.mainDocument.createElement("div");return t.setAttribute("role","listitem"),t.tabIndex=-1,this._refreshRowDimensions(t),t}_refreshRowsDimensions(){if(this._renderService.dimensions.css.cell.height){Object.assign(this._accessibilityContainer.style,{width:`${this._renderService.dimensions.css.canvas.width}px`,fontSize:`${this._terminal.options.fontSize}px`}),this._rowElements.length!==this._terminal.rows&&this._handleResize(this._terminal.rows);for(let t=0;t<this._terminal.rows;t++)this._refreshRowDimensions(this._rowElements[t]),this._alignRowWidth(this._rowElements[t])}}_refreshRowDimensions(t){t.style.height=`${this._renderService.dimensions.css.cell.height}px`}_alignRowWidth(t){t.style.transform="";let e=t.getBoundingClientRect().width,i=this._rowColumns.get(t)?.slice(-1)?.[0];if(!i)return;let n=i*this._renderService.dimensions.css.cell.width;t.style.transform=`scaleX(${n/e})`}};Xl=bt([pe(1,Eu),pe(2,Cn),pe(3,En)],Xl);var Cu=class extends ze{constructor(t,e,i,n,r){super(),this._element=t,this._mouseService=e,this._renderService=i,this._bufferService=n,this._linkProviderService=r,this._linkCacheDisposables=[],this._isMouseOut=!0,this._wasResized=!1,this._activeLine=-1,this._onShowLinkUnderline=this._register(new se),this.onShowLinkUnderline=this._onShowLinkUnderline.event,this._onHideLinkUnderline=this._register(new se),this.onHideLinkUnderline=this._onHideLinkUnderline.event,this._register(mt(()=>{Er(this._linkCacheDisposables),this._linkCacheDisposables.length=0,this._lastMouseEvent=void 0,this._activeProviderReplies?.clear()})),this._register(this._bufferService.onResize(()=>{this._clearCurrentLink(),this._wasResized=!0})),this._register(ke(this._element,"mouseleave",()=>{this._isMouseOut=!0,this._clearCurrentLink()})),this._register(ke(this._element,"mousemove",this._handleMouseMove.bind(this))),this._register(ke(this._element,"mousedown",this._handleMouseDown.bind(this))),this._register(ke(this._element,"mouseup",this._handleMouseUp.bind(this)))}get currentLink(){return this._currentLink}_handleMouseMove(t){this._lastMouseEvent=t;let e=this._positionFromMouseEvent(t,this._element,this._mouseService);if(!e)return;this._isMouseOut=!1;let i=t.composedPath();for(let n=0;n<i.length;n++){let r=i[n];if(r.classList.contains("xterm"))break;if(r.classList.contains("xterm-hover"))return}(!this._lastBufferCell||e.x!==this._lastBufferCell.x||e.y!==this._lastBufferCell.y)&&(this._handleHover(e),this._lastBufferCell=e)}_handleHover(t){if(this._activeLine!==t.y||this._wasResized){this._clearCurrentLink(),this._askForLink(t,!1),this._wasResized=!1;return}this._currentLink&&this._linkAtPosition(this._currentLink.link,t)||(this._clearCurrentLink(),this._askForLink(t,!0))}_askForLink(t,e){(!this._activeProviderReplies||!e)&&(this._activeProviderReplies?.forEach(n=>{n?.forEach(r=>{r.link.dispose&&r.link.dispose()})}),this._activeProviderReplies=new Map,this._activeLine=t.y);let i=!1;for(let[n,r]of this._linkProviderService.linkProviders.entries())e?this._activeProviderReplies?.get(n)&&(i=this._checkLinkProviderResult(n,t,i)):r.provideLinks(t.y,s=>{if(this._isMouseOut)return;let o=s?.map(a=>({link:a}));this._activeProviderReplies?.set(n,o),i=this._checkLinkProviderResult(n,t,i),this._activeProviderReplies?.size===this._linkProviderService.linkProviders.length&&this._removeIntersectingLinks(t.y,this._activeProviderReplies)})}_removeIntersectingLinks(t,e){let i=new Set;for(let n=0;n<e.size;n++){let r=e.get(n);if(r)for(let s=0;s<r.length;s++){let o=r[s],a=o.link.range.start.y<t?0:o.link.range.start.x,h=o.link.range.end.y>t?this._bufferService.cols:o.link.range.end.x;for(let l=a;l<=h;l++){if(i.has(l)){r.splice(s--,1);break}i.add(l)}}}}_checkLinkProviderResult(t,e,i){if(!this._activeProviderReplies)return i;let n=this._activeProviderReplies.get(t),r=!1;for(let s=0;s<t;s++)(!this._activeProviderReplies.has(s)||this._activeProviderReplies.get(s))&&(r=!0);if(!r&&n){let s=n.find(o=>this._linkAtPosition(o.link,e));s&&(i=!0,this._handleNewLink(s))}if(this._activeProviderReplies.size===this._linkProviderService.linkProviders.length&&!i)for(let s=0;s<this._activeProviderReplies.size;s++){let o=this._activeProviderReplies.get(s)?.find(a=>this._linkAtPosition(a.link,e));if(o){i=!0,this._handleNewLink(o);break}}return i}_handleMouseDown(){this._mouseDownLink=this._currentLink}_handleMouseUp(t){if(!this._currentLink)return;let e=this._positionFromMouseEvent(t,this._element,this._mouseService);e&&this._mouseDownLink&&c1(this._mouseDownLink.link,this._currentLink.link)&&this._linkAtPosition(this._currentLink.link,e)&&this._currentLink.link.activate(t,this._currentLink.link.text)}_clearCurrentLink(t,e){!this._currentLink||!this._lastMouseEvent||(!t||!e||this._currentLink.link.range.start.y>=t&&this._currentLink.link.range.end.y<=e)&&(this._linkLeave(this._element,this._currentLink.link,this._lastMouseEvent),this._currentLink=void 0,Er(this._linkCacheDisposables),this._linkCacheDisposables.length=0)}_handleNewLink(t){if(!this._lastMouseEvent)return;let e=this._positionFromMouseEvent(this._lastMouseEvent,this._element,this._mouseService);e&&this._linkAtPosition(t.link,e)&&(this._currentLink=t,this._currentLink.state={decorations:{underline:t.link.decorations===void 0?!0:t.link.decorations.underline,pointerCursor:t.link.decorations===void 0?!0:t.link.decorations.pointerCursor},isHovered:!0},this._linkHover(this._element,t.link,this._lastMouseEvent),t.link.decorations={},Object.defineProperties(t.link.decorations,{pointerCursor:{get:()=>this._currentLink?.state?.decorations.pointerCursor,set:i=>{this._currentLink?.state&&this._currentLink.state.decorations.pointerCursor!==i&&(this._currentLink.state.decorations.pointerCursor=i,this._currentLink.state.isHovered&&this._element.classList.toggle("xterm-cursor-pointer",i))}},underline:{get:()=>this._currentLink?.state?.decorations.underline,set:i=>{this._currentLink?.state&&this._currentLink?.state?.decorations.underline!==i&&(this._currentLink.state.decorations.underline=i,this._currentLink.state.isHovered&&this._fireUnderlineEvent(t.link,i))}}}),this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange(i=>{if(!this._currentLink)return;let n=i.start===0?0:i.start+1+this._bufferService.buffer.ydisp,r=this._bufferService.buffer.ydisp+1+i.end;if(this._currentLink.link.range.start.y>=n&&this._currentLink.link.range.end.y<=r&&(this._clearCurrentLink(n,r),this._lastMouseEvent)){let s=this._positionFromMouseEvent(this._lastMouseEvent,this._element,this._mouseService);s&&this._askForLink(s,!1)}})))}_linkHover(t,e,i){this._currentLink?.state&&(this._currentLink.state.isHovered=!0,this._currentLink.state.decorations.underline&&this._fireUnderlineEvent(e,!0),this._currentLink.state.decorations.pointerCursor&&t.classList.add("xterm-cursor-pointer")),e.hover&&e.hover(i,e.text)}_fireUnderlineEvent(t,e){let i=t.range,n=this._bufferService.buffer.ydisp,r=this._createLinkUnderlineEvent(i.start.x-1,i.start.y-n-1,i.end.x,i.end.y-n-1,void 0);(e?this._onShowLinkUnderline:this._onHideLinkUnderline).fire(r)}_linkLeave(t,e,i){this._currentLink?.state&&(this._currentLink.state.isHovered=!1,this._currentLink.state.decorations.underline&&this._fireUnderlineEvent(e,!1),this._currentLink.state.decorations.pointerCursor&&t.classList.remove("xterm-cursor-pointer")),e.leave&&e.leave(i,e.text)}_linkAtPosition(t,e){let i=t.range.start.y*this._bufferService.cols+t.range.start.x,n=t.range.end.y*this._bufferService.cols+t.range.end.x,r=e.y*this._bufferService.cols+e.x;return i<=r&&r<=n}_positionFromMouseEvent(t,e,i){let n=i.getCoords(t,e,this._bufferService.cols,this._bufferService.rows);if(n)return{x:n[0],y:n[1]+this._bufferService.buffer.ydisp}}_createLinkUnderlineEvent(t,e,i,n,r){return{x1:t,y1:e,x2:i,y2:n,cols:this._bufferService.cols,fg:r}}};Cu=bt([pe(1,Tu),pe(2,En),pe(3,ri),pe(4,Qp)],Cu);function c1(t,e){return t.text===e.text&&t.range.start.x===e.range.start.x&&t.range.start.y===e.range.start.y&&t.range.end.x===e.range.end.x&&t.range.end.y===e.range.end.y}var u1=class extends i1{constructor(t={}){super(t),this._linkifier=this._register(new cs),this.browser=Tm,this._keyDownHandled=!1,this._keyDownSeen=!1,this._keyPressHandled=!1,this._unprocessedDeadKey=!1,this._accessibilityManager=this._register(new cs),this._onCursorMove=this._register(new se),this.onCursorMove=this._onCursorMove.event,this._onKey=this._register(new se),this.onKey=this._onKey.event,this._onRender=this._register(new se),this.onRender=this._onRender.event,this._onSelectionChange=this._register(new se),this.onSelectionChange=this._onSelectionChange.event,this._onTitleChange=this._register(new se),this.onTitleChange=this._onTitleChange.event,this._onBell=this._register(new se),this.onBell=this._onBell.event,this._onFocus=this._register(new se),this._onBlur=this._register(new se),this._onA11yCharEmitter=this._register(new se),this._onA11yTabEmitter=this._register(new se),this._onWillOpen=this._register(new se),this._setup(),this._decorationService=this._instantiationService.createInstance(o1),this._instantiationService.setService(go,this._decorationService),this._linkProviderService=this._instantiationService.createInstance(Qb),this._instantiationService.setService(Qp,this._linkProviderService),this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(Xc)),this._register(this._inputHandler.onRequestBell(()=>this._onBell.fire())),this._register(this._inputHandler.onRequestRefreshRows(e=>this.refresh(e?.start??0,e?.end??this.rows-1))),this._register(this._inputHandler.onRequestSendFocus(()=>this._reportFocus())),this._register(this._inputHandler.onRequestReset(()=>this.reset())),this._register(this._inputHandler.onRequestWindowsOptionsReport(e=>this._reportWindowsOptions(e))),this._register(this._inputHandler.onColor(e=>this._handleColorEvent(e))),this._register(Kt.forward(this._inputHandler.onCursorMove,this._onCursorMove)),this._register(Kt.forward(this._inputHandler.onTitleChange,this._onTitleChange)),this._register(Kt.forward(this._inputHandler.onA11yChar,this._onA11yCharEmitter)),this._register(Kt.forward(this._inputHandler.onA11yTab,this._onA11yTabEmitter)),this._register(this._bufferService.onResize(e=>this._afterResize(e.cols,e.rows))),this._register(mt(()=>{this._customKeyEventHandler=void 0,this.element?.parentNode?.removeChild(this.element)}))}get linkifier(){return this._linkifier.value}get onFocus(){return this._onFocus.event}get onBlur(){return this._onBlur.event}get onA11yChar(){return this._onA11yCharEmitter.event}get onA11yTab(){return this._onA11yTabEmitter.event}get onWillOpen(){return this._onWillOpen.event}_handleColorEvent(t){if(this._themeService)for(let e of t){let i,n="";switch(e.index){case 256:i="foreground",n="10";break;case 257:i="background",n="11";break;case 258:i="cursor",n="12";break;default:i="ansi",n="4;"+e.index}switch(e.type){case 0:let r=pt.toColorRGB(i==="ansi"?this._themeService.colors.ansi[e.index]:this._themeService.colors[i]);this.coreService.triggerDataEvent(`${K.ESC}]${n};${Zw(r)}${Cm.ST}`);break;case 1:if(i==="ansi")this._themeService.modifyColors(s=>s.ansi[e.index]=Pt.toColor(...e.color));else{let s=i;this._themeService.modifyColors(o=>o[s]=Pt.toColor(...e.color))}break;case 2:this._themeService.restoreColor(e.index);break}}}_setup(){super._setup(),this._customKeyEventHandler=void 0}get buffer(){return this.buffers.active}focus(){this.textarea&&this.textarea.focus({preventScroll:!0})}_handleScreenReaderModeOptionChange(t){t?!this._accessibilityManager.value&&this._renderService&&(this._accessibilityManager.value=this._instantiationService.createInstance(Xl,this)):this._accessibilityManager.clear()}_handleTextAreaFocus(t){this.coreService.decPrivateModes.sendFocus&&this.coreService.triggerDataEvent(K.ESC+"[I"),this.element.classList.add("focus"),this._showCursor(),this._onFocus.fire()}blur(){return this.textarea?.blur()}_handleTextAreaBlur(){this.textarea.value="",this.refresh(this.buffer.y,this.buffer.y),this.coreService.decPrivateModes.sendFocus&&this.coreService.triggerDataEvent(K.ESC+"[O"),this.element.classList.remove("focus"),this._onBlur.fire()}_syncTextArea(){if(!this.textarea||!this.buffer.isCursorInViewport||this._compositionHelper.isComposing||!this._renderService)return;let t=this.buffer.ybase+this.buffer.y,e=this.buffer.lines.get(t);if(!e)return;let i=Math.min(this.buffer.x,this.cols-1),n=this._renderService.dimensions.css.cell.height,r=e.getWidth(i),s=this._renderService.dimensions.css.cell.width*r,o=this.buffer.y*this._renderService.dimensions.css.cell.height,a=i*this._renderService.dimensions.css.cell.width;this.textarea.style.left=a+"px",this.textarea.style.top=o+"px",this.textarea.style.width=s+"px",this.textarea.style.height=n+"px",this.textarea.style.lineHeight=n+"px",this.textarea.style.zIndex="-5"}_initGlobal(){this._bindKeys(),this._register(ke(this.element,"copy",e=>{this.hasSelection()&&Hy(e,this._selectionService)}));let t=e=>Vy(e,this.textarea,this.coreService,this.optionsService);this._register(ke(this.textarea,"paste",t)),this._register(ke(this.element,"paste",t)),Am?this._register(ke(this.element,"mousedown",e=>{e.button===2&&Hf(e,this.textarea,this.screenElement,this._selectionService,this.options.rightClickSelectsWord)})):this._register(ke(this.element,"contextmenu",e=>{Hf(e,this.textarea,this.screenElement,this._selectionService,this.options.rightClickSelectsWord)})),Bu&&this._register(ke(this.element,"auxclick",e=>{e.button===1&&Gp(e,this.textarea,this.screenElement)}))}_bindKeys(){this._register(ke(this.textarea,"keyup",t=>this._keyUp(t),!0)),this._register(ke(this.textarea,"keydown",t=>this._keyDown(t),!0)),this._register(ke(this.textarea,"keypress",t=>this._keyPress(t),!0)),this._register(ke(this.textarea,"compositionstart",()=>this._compositionHelper.compositionstart())),this._register(ke(this.textarea,"compositionupdate",t=>this._compositionHelper.compositionupdate(t))),this._register(ke(this.textarea,"compositionend",()=>this._compositionHelper.compositionend())),this._register(ke(this.textarea,"input",t=>this._inputEvent(t),!0)),this._register(this.onRender(()=>this._compositionHelper.updateCompositionElements()))}open(t){if(!t)throw new Error("Terminal requires a parent element.");if(t.isConnected||this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"),this.element?.ownerDocument.defaultView&&this._coreBrowserService){this.element.ownerDocument.defaultView!==this._coreBrowserService.window&&(this._coreBrowserService.window=this.element.ownerDocument.defaultView);return}this._document=t.ownerDocument,this.options.documentOverride&&this.options.documentOverride instanceof Document&&(this._document=this.optionsService.rawOptions.documentOverride),this.element=this._document.createElement("div"),this.element.dir="ltr",this.element.classList.add("terminal"),this.element.classList.add("xterm"),t.appendChild(this.element);let e=this._document.createDocumentFragment();this._viewportElement=this._document.createElement("div"),this._viewportElement.classList.add("xterm-viewport"),e.appendChild(this._viewportElement),this.screenElement=this._document.createElement("div"),this.screenElement.classList.add("xterm-screen"),this._register(ke(this.screenElement,"mousemove",r=>this.updateCursorStyle(r))),this._helperContainer=this._document.createElement("div"),this._helperContainer.classList.add("xterm-helpers"),this.screenElement.appendChild(this._helperContainer),e.appendChild(this.screenElement);let i=this.textarea=this._document.createElement("textarea");this.textarea.classList.add("xterm-helper-textarea"),this.textarea.setAttribute("aria-label",Vc.get()),Im||this.textarea.setAttribute("aria-multiline","false"),this.textarea.setAttribute("autocorrect","off"),this.textarea.setAttribute("autocapitalize","off"),this.textarea.setAttribute("spellcheck","false"),this.textarea.tabIndex=0,this._register(this.optionsService.onSpecificOptionChange("disableStdin",()=>i.readOnly=this.optionsService.rawOptions.disableStdin)),this.textarea.readOnly=this.optionsService.rawOptions.disableStdin,this._coreBrowserService=this._register(this._instantiationService.createInstance(Jb,this.textarea,t.ownerDocument.defaultView??window,this._document??typeof window<"u"?window.document:null)),this._instantiationService.setService(Cn,this._coreBrowserService),this._register(ke(this.textarea,"focus",r=>this._handleTextAreaFocus(r))),this._register(ke(this.textarea,"blur",()=>this._handleTextAreaBlur())),this._helperContainer.appendChild(this.textarea),this._charSizeService=this._instantiationService.createInstance(fu,this._document,this._helperContainer),this._instantiationService.setService(ql,this._charSizeService),this._themeService=this._instantiationService.createInstance(gu),this._instantiationService.setService(us,this._themeService),this._characterJoinerService=this._instantiationService.createInstance(Vl),this._instantiationService.setService(jp,this._characterJoinerService),this._renderService=this._register(this._instantiationService.createInstance(mu,this.rows,this.screenElement)),this._instantiationService.setService(En,this._renderService),this._register(this._renderService.onRenderedViewportChange(r=>this._onRender.fire(r))),this.onResize(r=>this._renderService.resize(r.cols,r.rows)),this._compositionView=this._document.createElement("div"),this._compositionView.classList.add("composition-view"),this._compositionHelper=this._instantiationService.createInstance(cu,this.textarea,this._compositionView),this._helperContainer.appendChild(this._compositionView),this._mouseService=this._instantiationService.createInstance(pu),this._instantiationService.setService(Tu,this._mouseService);let n=this._linkifier.value=this._register(this._instantiationService.createInstance(Cu,this.screenElement));this.element.appendChild(e);try{this._onWillOpen.fire(this.element)}catch{}this._renderService.hasRenderer()||this._renderService.setRenderer(this._createRenderer()),this._register(this.onCursorMove(()=>{this._renderService.handleCursorMove(),this._syncTextArea()})),this._register(this.onResize(()=>this._renderService.handleResize(this.cols,this.rows))),this._register(this.onBlur(()=>this._renderService.handleBlur())),this._register(this.onFocus(()=>this._renderService.handleFocus())),this._viewport=this._register(this._instantiationService.createInstance(lu,this.element,this.screenElement)),this._register(this._viewport.onRequestScrollLines(r=>{super.scrollLines(r,!1),this.refresh(0,this.rows-1)})),this._selectionService=this._register(this._instantiationService.createInstance(_u,this.element,this.screenElement,n)),this._instantiationService.setService(Zy,this._selectionService),this._register(this._selectionService.onRequestScrollLines(r=>this.scrollLines(r.amount,r.suppressScrollEvent))),this._register(this._selectionService.onSelectionChange(()=>this._onSelectionChange.fire())),this._register(this._selectionService.onRequestRedraw(r=>this._renderService.handleSelectionChanged(r.start,r.end,r.columnSelectMode))),this._register(this._selectionService.onLinuxMouseSelection(r=>{this.textarea.value=r,this.textarea.focus(),this.textarea.select()})),this._register(Kt.any(this._onScroll.event,this._inputHandler.onScroll)(()=>{this._selectionService.refresh(),this._viewport?.queueSync()})),this._register(this._instantiationService.createInstance(hu,this.screenElement)),this._register(ke(this.element,"mousedown",r=>this._selectionService.handleMouseDown(r))),this.coreMouseService.areMouseEventsActive?(this._selectionService.disable(),this.element.classList.add("enable-mouse-events")):this._selectionService.enable(),this.options.screenReaderMode&&(this._accessibilityManager.value=this._instantiationService.createInstance(Xl,this)),this._register(this.optionsService.onSpecificOptionChange("screenReaderMode",r=>this._handleScreenReaderModeOptionChange(r))),this.options.overviewRuler.width&&(this._overviewRulerRenderer=this._register(this._instantiationService.createInstance(Hl,this._viewportElement,this.screenElement))),this.optionsService.onSpecificOptionChange("overviewRuler",r=>{!this._overviewRulerRenderer&&r&&this._viewportElement&&this.screenElement&&(this._overviewRulerRenderer=this._register(this._instantiationService.createInstance(Hl,this._viewportElement,this.screenElement)))}),this._charSizeService.measure(),this.refresh(0,this.rows-1),this._initGlobal(),this.bindMouse()}_createRenderer(){return this._instantiationService.createInstance(du,this,this._document,this.element,this.screenElement,this._viewportElement,this._helperContainer,this.linkifier)}bindMouse(){let t=this,e=this.element;function i(s){let o=t._mouseService.getMouseReportCoords(s,t.screenElement);if(!o)return!1;let a,h;switch(s.overrideType||s.type){case"mousemove":h=32,s.buttons===void 0?(a=3,s.button!==void 0&&(a=s.button<3?s.button:3)):a=s.buttons&1?0:s.buttons&4?1:s.buttons&2?2:3;break;case"mouseup":h=0,a=s.button<3?s.button:3;break;case"mousedown":h=1,a=s.button<3?s.button:3;break;case"wheel":if(t._customWheelEventHandler&&t._customWheelEventHandler(s)===!1)return!1;let l=s.deltaY;if(l===0||t.coreMouseService.consumeWheelEvent(s,t._renderService?.dimensions?.device?.cell?.height,t._coreBrowserService?.dpr)===0)return!1;h=l<0?0:1,a=4;break;default:return!1}return h===void 0||a===void 0||a>4?!1:t.coreMouseService.triggerMouseEvent({col:o.col,row:o.row,x:o.x,y:o.y,button:a,action:h,ctrl:s.ctrlKey,alt:s.altKey,shift:s.shiftKey})}let n={mouseup:null,wheel:null,mousedrag:null,mousemove:null},r={mouseup:s=>(i(s),s.buttons||(this._document.removeEventListener("mouseup",n.mouseup),n.mousedrag&&this._document.removeEventListener("mousemove",n.mousedrag)),this.cancel(s)),wheel:s=>(i(s),this.cancel(s,!0)),mousedrag:s=>{s.buttons&&i(s)},mousemove:s=>{s.buttons||i(s)}};this._register(this.coreMouseService.onProtocolChange(s=>{s?(this.optionsService.rawOptions.logLevel==="debug"&&this._logService.debug("Binding to mouse events:",this.coreMouseService.explainEvents(s)),this.element.classList.add("enable-mouse-events"),this._selectionService.disable()):(this._logService.debug("Unbinding from mouse events."),this.element.classList.remove("enable-mouse-events"),this._selectionService.enable()),s&8?n.mousemove||(e.addEventListener("mousemove",r.mousemove),n.mousemove=r.mousemove):(e.removeEventListener("mousemove",n.mousemove),n.mousemove=null),s&16?n.wheel||(e.addEventListener("wheel",r.wheel,{passive:!1}),n.wheel=r.wheel):(e.removeEventListener("wheel",n.wheel),n.wheel=null),s&2?n.mouseup||(n.mouseup=r.mouseup):(this._document.removeEventListener("mouseup",n.mouseup),n.mouseup=null),s&4?n.mousedrag||(n.mousedrag=r.mousedrag):(this._document.removeEventListener("mousemove",n.mousedrag),n.mousedrag=null)})),this.coreMouseService.activeProtocol=this.coreMouseService.activeProtocol,this._register(ke(e,"mousedown",s=>{if(s.preventDefault(),this.focus(),!(!this.coreMouseService.areMouseEventsActive||this._selectionService.shouldForceSelection(s)))return i(s),n.mouseup&&this._document.addEventListener("mouseup",n.mouseup),n.mousedrag&&this._document.addEventListener("mousemove",n.mousedrag),this.cancel(s)})),this._register(ke(e,"wheel",s=>{if(!n.wheel){if(this._customWheelEventHandler&&this._customWheelEventHandler(s)===!1)return!1;if(!this.buffer.hasScrollback){if(s.deltaY===0)return!1;if(t.coreMouseService.consumeWheelEvent(s,t._renderService?.dimensions?.device?.cell?.height,t._coreBrowserService?.dpr)===0)return this.cancel(s,!0);let o=K.ESC+(this.coreService.decPrivateModes.applicationCursorKeys?"O":"[")+(s.deltaY<0?"A":"B");return this.coreService.triggerDataEvent(o,!0),this.cancel(s,!0)}}},{passive:!1}))}refresh(t,e){this._renderService?.refreshRows(t,e)}updateCursorStyle(t){this._selectionService?.shouldColumnSelect(t)?this.element.classList.add("column-select"):this.element.classList.remove("column-select")}_showCursor(){this.coreService.isCursorInitialized||(this.coreService.isCursorInitialized=!0,this.refresh(this.buffer.y,this.buffer.y))}scrollLines(t,e){this._viewport?this._viewport.scrollLines(t):super.scrollLines(t,e),this.refresh(0,this.rows-1)}scrollPages(t){this.scrollLines(t*(this.rows-1))}scrollToTop(){this.scrollLines(-this._bufferService.buffer.ydisp)}scrollToBottom(t){t&&this._viewport?this._viewport.scrollToLine(this.buffer.ybase,!0):this.scrollLines(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp)}scrollToLine(t){let e=t-this._bufferService.buffer.ydisp;e!==0&&this.scrollLines(e)}paste(t){Wp(t,this.textarea,this.coreService,this.optionsService)}attachCustomKeyEventHandler(t){this._customKeyEventHandler=t}attachCustomWheelEventHandler(t){this._customWheelEventHandler=t}registerLinkProvider(t){return this._linkProviderService.registerLinkProvider(t)}registerCharacterJoiner(t){if(!this._characterJoinerService)throw new Error("Terminal must be opened first");let e=this._characterJoinerService.register(t);return this.refresh(0,this.rows-1),e}deregisterCharacterJoiner(t){if(!this._characterJoinerService)throw new Error("Terminal must be opened first");this._characterJoinerService.deregister(t)&&this.refresh(0,this.rows-1)}get markers(){return this.buffer.markers}registerMarker(t){return this.buffer.addMarker(this.buffer.ybase+this.buffer.y+t)}registerDecoration(t){return this._decorationService.registerDecoration(t)}hasSelection(){return this._selectionService?this._selectionService.hasSelection:!1}select(t,e,i){this._selectionService.setSelection(t,e,i)}getSelection(){return this._selectionService?this._selectionService.selectionText:""}getSelectionPosition(){if(!(!this._selectionService||!this._selectionService.hasSelection))return{start:{x:this._selectionService.selectionStart[0],y:this._selectionService.selectionStart[1]},end:{x:this._selectionService.selectionEnd[0],y:this._selectionService.selectionEnd[1]}}}clearSelection(){this._selectionService?.clearSelection()}selectAll(){this._selectionService?.selectAll()}selectLines(t,e){this._selectionService?.selectLines(t,e)}_keyDown(t){if(this._keyDownHandled=!1,this._keyDownSeen=!0,this._customKeyEventHandler&&this._customKeyEventHandler(t)===!1)return!1;let e=this.browser.isMac&&this.options.macOptionIsMeta&&t.altKey;if(!e&&!this._compositionHelper.keydown(t))return this.options.scrollOnUserInput&&this.buffer.ybase!==this.buffer.ydisp&&this.scrollToBottom(!0),!1;!e&&(t.key==="Dead"||t.key==="AltGraph")&&(this._unprocessedDeadKey=!0);let i=r1(t,this.coreService.decPrivateModes.applicationCursorKeys,this.browser.isMac,this.options.macOptionIsMeta);if(this.updateCursorStyle(t),i.type===3||i.type===2){let n=this.rows-1;return this.scrollLines(i.type===2?-n:n),this.cancel(t,!0)}if(i.type===1&&this.selectAll(),this._isThirdLevelShift(this.browser,t)||(i.cancel&&this.cancel(t,!0),!i.key)||t.key&&!t.ctrlKey&&!t.altKey&&!t.metaKey&&t.key.length===1&&t.key.charCodeAt(0)>=65&&t.key.charCodeAt(0)<=90)return!0;if(this._unprocessedDeadKey)return this._unprocessedDeadKey=!1,!0;if((i.key===K.ETX||i.key===K.CR)&&(this.textarea.value=""),this._onKey.fire({key:i.key,domEvent:t}),this._showCursor(),this.coreService.triggerDataEvent(i.key,!0),!this.optionsService.rawOptions.screenReaderMode||t.altKey||t.ctrlKey)return this.cancel(t,!0);this._keyDownHandled=!0}_isThirdLevelShift(t,e){let i=t.isMac&&!this.options.macOptionIsMeta&&e.altKey&&!e.ctrlKey&&!e.metaKey||t.isWindows&&e.altKey&&e.ctrlKey&&!e.metaKey||t.isWindows&&e.getModifierState("AltGraph");return e.type==="keypress"?i:i&&(!e.keyCode||e.keyCode>47)}_keyUp(t){this._keyDownSeen=!1,!(this._customKeyEventHandler&&this._customKeyEventHandler(t)===!1)&&(d1(t)||this.focus(),this.updateCursorStyle(t),this._keyPressHandled=!1)}_keyPress(t){let e;if(this._keyPressHandled=!1,this._keyDownHandled||this._customKeyEventHandler&&this._customKeyEventHandler(t)===!1)return!1;if(this.cancel(t),t.charCode)e=t.charCode;else if(t.which===null||t.which===void 0)e=t.keyCode;else if(t.which!==0&&t.charCode!==0)e=t.which;else return!1;return!e||(t.altKey||t.ctrlKey||t.metaKey)&&!this._isThirdLevelShift(this.browser,t)?!1:(e=String.fromCharCode(e),this._onKey.fire({key:e,domEvent:t}),this._showCursor(),this.coreService.triggerDataEvent(e,!0),this._keyPressHandled=!0,this._unprocessedDeadKey=!1,!0)}_inputEvent(t){if(t.data&&t.inputType==="insertText"&&(!t.composed||!this._keyDownSeen)&&!this.optionsService.rawOptions.screenReaderMode){if(this._keyPressHandled)return!1;this._unprocessedDeadKey=!1;let e=t.data;return this.coreService.triggerDataEvent(e,!0),this.cancel(t),!0}return!1}resize(t,e){if(t===this.cols&&e===this.rows){this._charSizeService&&!this._charSizeService.hasValidSize&&this._charSizeService.measure();return}super.resize(t,e)}_afterResize(t,e){this._charSizeService?.measure()}clear(){if(!(this.buffer.ybase===0&&this.buffer.y===0)){this.buffer.clearAllMarkers(),this.buffer.lines.set(0,this.buffer.lines.get(this.buffer.ybase+this.buffer.y)),this.buffer.lines.length=1,this.buffer.ydisp=0,this.buffer.ybase=0,this.buffer.y=0;for(let t=1;t<this.rows;t++)this.buffer.lines.push(this.buffer.getBlankLine(Rt));this._onScroll.fire({position:this.buffer.ydisp}),this.refresh(0,this.rows-1)}}reset(){this.options.rows=this.rows,this.options.cols=this.cols;let t=this._customKeyEventHandler;this._setup(),super.reset(),this._selectionService?.reset(),this._decorationService.reset(),this._customKeyEventHandler=t,this.refresh(0,this.rows-1)}clearTextureAtlas(){this._renderService?.clearTextureAtlas()}_reportFocus(){this.element?.classList.contains("focus")?this.coreService.triggerDataEvent(K.ESC+"[I"):this.coreService.triggerDataEvent(K.ESC+"[O")}_reportWindowsOptions(t){if(this._renderService)switch(t){case 0:let e=this._renderService.dimensions.css.canvas.width.toFixed(0),i=this._renderService.dimensions.css.canvas.height.toFixed(0);this.coreService.triggerDataEvent(`${K.ESC}[4;${i};${e}t`);break;case 1:let n=this._renderService.dimensions.css.cell.width.toFixed(0),r=this._renderService.dimensions.css.cell.height.toFixed(0);this.coreService.triggerDataEvent(`${K.ESC}[6;${r};${n}t`);break}}cancel(t,e){if(!(!this.options.cancelEvents&&!e))return t.preventDefault(),t.stopPropagation(),!1}};function d1(t){return t.keyCode===16||t.keyCode===17||t.keyCode===18}var f1=class{constructor(){this._addons=[]}dispose(){for(let t=this._addons.length-1;t>=0;t--)this._addons[t].instance.dispose()}loadAddon(t,e){let i={instance:e,dispose:e.dispose,isDisposed:!1};this._addons.push(i),e.dispose=()=>this._wrappedAddonDispose(i),e.activate(t)}_wrappedAddonDispose(t){if(t.isDisposed)return;let e=-1;for(let i=0;i<this._addons.length;i++)if(this._addons[i]===t){e=i;break}if(e===-1)throw new Error("Could not dispose an addon that has not been loaded");t.isDisposed=!0,t.dispose.apply(t.instance),this._addons.splice(e,1)}},p1=class{constructor(t){this._line=t}get isWrapped(){return this._line.isWrapped}get length(){return this._line.length}getCell(t,e){if(!(t<0||t>=this._line.length))return e?(this._line.loadCell(t,e),e):this._line.loadCell(t,new Ii)}translateToString(t,e,i){return this._line.translateToString(t,e,i)}},Hp=class{constructor(t,e){this._buffer=t,this.type=e}init(t){return this._buffer=t,this}get cursorY(){return this._buffer.y}get cursorX(){return this._buffer.x}get viewportY(){return this._buffer.ydisp}get baseY(){return this._buffer.ybase}get length(){return this._buffer.lines.length}getLine(t){let e=this._buffer.lines.get(t);if(e)return new p1(e)}getNullCell(){return new Ii}},m1=class extends ze{constructor(t){super(),this._core=t,this._onBufferChange=this._register(new se),this.onBufferChange=this._onBufferChange.event,this._normal=new Hp(this._core.buffers.normal,"normal"),this._alternate=new Hp(this._core.buffers.alt,"alternate"),this._core.buffers.onBufferActivate(()=>this._onBufferChange.fire(this.active))}get active(){if(this._core.buffers.active===this._core.buffers.normal)return this.normal;if(this._core.buffers.active===this._core.buffers.alt)return this.alternate;throw new Error("Active buffer is neither normal nor alternate")}get normal(){return this._normal.init(this._core.buffers.normal)}get alternate(){return this._alternate.init(this._core.buffers.alt)}},_1=class{constructor(t){this._core=t}registerCsiHandler(t,e){return this._core.registerCsiHandler(t,i=>e(i.toArray()))}addCsiHandler(t,e){return this.registerCsiHandler(t,e)}registerDcsHandler(t,e){return this._core.registerDcsHandler(t,(i,n)=>e(i,n.toArray()))}addDcsHandler(t,e){return this.registerDcsHandler(t,e)}registerEscHandler(t,e){return this._core.registerEscHandler(t,e)}addEscHandler(t,e){return this.registerEscHandler(t,e)}registerOscHandler(t,e){return this._core.registerOscHandler(t,e)}addOscHandler(t,e){return this.registerOscHandler(t,e)}},g1=class{constructor(t){this._core=t}register(t){this._core.unicodeService.register(t)}get versions(){return this._core.unicodeService.versions}get activeVersion(){return this._core.unicodeService.activeVersion}set activeVersion(t){this._core.unicodeService.activeVersion=t}},v1=["cols","rows"],nn=0,Hm=class extends ze{constructor(t){super(),this._core=this._register(new u1(t)),this._addonManager=this._register(new f1),this._publicOptions={...this._core.options};let e=n=>this._core.options[n],i=(n,r)=>{this._checkReadonlyOptions(n),this._core.options[n]=r};for(let n in this._core.options){let r={get:e.bind(this,n),set:i.bind(this,n)};Object.defineProperty(this._publicOptions,n,r)}}_checkReadonlyOptions(t){if(v1.includes(t))throw new Error(`Option "${t}" can only be set in the constructor`)}_checkProposedApi(){if(!this._core.optionsService.rawOptions.allowProposedApi)throw new Error("You must set the allowProposedApi option to true to use proposed API")}get onBell(){return this._core.onBell}get onBinary(){return this._core.onBinary}get onCursorMove(){return this._core.onCursorMove}get onData(){return this._core.onData}get onKey(){return this._core.onKey}get onLineFeed(){return this._core.onLineFeed}get onRender(){return this._core.onRender}get onResize(){return this._core.onResize}get onScroll(){return this._core.onScroll}get onSelectionChange(){return this._core.onSelectionChange}get onTitleChange(){return this._core.onTitleChange}get onWriteParsed(){return this._core.onWriteParsed}get element(){return this._core.element}get parser(){return this._parser||(this._parser=new _1(this._core)),this._parser}get unicode(){return this._checkProposedApi(),new g1(this._core)}get textarea(){return this._core.textarea}get rows(){return this._core.rows}get cols(){return this._core.cols}get buffer(){return this._buffer||(this._buffer=this._register(new m1(this._core))),this._buffer}get markers(){return this._checkProposedApi(),this._core.markers}get modes(){let t=this._core.coreService.decPrivateModes,e="none";switch(this._core.coreMouseService.activeProtocol){case"X10":e="x10";break;case"VT200":e="vt200";break;case"DRAG":e="drag";break;case"ANY":e="any";break}return{applicationCursorKeysMode:t.applicationCursorKeys,applicationKeypadMode:t.applicationKeypad,bracketedPasteMode:t.bracketedPasteMode,insertMode:this._core.coreService.modes.insertMode,mouseTrackingMode:e,originMode:t.origin,reverseWraparoundMode:t.reverseWraparound,sendFocusMode:t.sendFocus,synchronizedOutputMode:t.synchronizedOutput,wraparoundMode:t.wraparound}}get options(){return this._publicOptions}set options(t){for(let e in t)this._publicOptions[e]=t[e]}blur(){this._core.blur()}focus(){this._core.focus()}input(t,e=!0){this._core.input(t,e)}resize(t,e){this._verifyIntegers(t,e),this._core.resize(t,e)}open(t){this._core.open(t)}attachCustomKeyEventHandler(t){this._core.attachCustomKeyEventHandler(t)}attachCustomWheelEventHandler(t){this._core.attachCustomWheelEventHandler(t)}registerLinkProvider(t){return this._core.registerLinkProvider(t)}registerCharacterJoiner(t){return this._checkProposedApi(),this._core.registerCharacterJoiner(t)}deregisterCharacterJoiner(t){this._checkProposedApi(),this._core.deregisterCharacterJoiner(t)}registerMarker(t=0){return this._verifyIntegers(t),this._core.registerMarker(t)}registerDecoration(t){return this._checkProposedApi(),this._verifyPositiveIntegers(t.x??0,t.width??0,t.height??0),this._core.registerDecoration(t)}hasSelection(){return this._core.hasSelection()}select(t,e,i){this._verifyIntegers(t,e,i),this._core.select(t,e,i)}getSelection(){return this._core.getSelection()}getSelectionPosition(){return this._core.getSelectionPosition()}clearSelection(){this._core.clearSelection()}selectAll(){this._core.selectAll()}selectLines(t,e){this._verifyIntegers(t,e),this._core.selectLines(t,e)}dispose(){super.dispose()}scrollLines(t){this._verifyIntegers(t),this._core.scrollLines(t)}scrollPages(t){this._verifyIntegers(t),this._core.scrollPages(t)}scrollToTop(){this._core.scrollToTop()}scrollToBottom(){this._core.scrollToBottom()}scrollToLine(t){this._verifyIntegers(t),this._core.scrollToLine(t)}clear(){this._core.clear()}write(t,e){this._core.write(t,e)}writeln(t,e){this._core.write(t),this._core.write(`\r
`,e)}paste(t){this._core.paste(t)}refresh(t,e){this._verifyIntegers(t,e),this._core.refresh(t,e)}reset(){this._core.reset()}clearTextureAtlas(){this._core.clearTextureAtlas()}loadAddon(t){this._addonManager.loadAddon(this,t)}static get strings(){return{get promptLabel(){return Vc.get()},set promptLabel(t){Vc.set(t)},get tooMuchOutput(){return Wc.get()},set tooMuchOutput(t){Wc.set(t)}}}_verifyIntegers(...t){for(nn of t)if(nn===1/0||isNaN(nn)||nn%1!==0)throw new Error("This API only accepts integers")}_verifyPositiveIntegers(...t){for(nn of t)if(nn&&(nn===1/0||isNaN(nn)||nn%1!==0||nn<0))throw new Error("This API only accepts positive integers")}};function S1(t,e){if(e.length===0){t.terminal.writeln("No work experience entries available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("            WORK EXPERIENCE"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)t.terminal.writeln(`  ${i.roles}`),t.terminal.writeln(`  ${i.organizations}`),t.terminal.writeln(`  ${i.period} | ${i.type}`),t.terminal.writeln(`  ${i.location}`),t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}function y1(t,e){if(e.length===0){t.terminal.writeln("No education entries available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("               EDUCATION"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)t.terminal.writeln(`  ${i.title}`),t.terminal.writeln(`  ${i.school}`),t.terminal.writeln(`  ${i.year}`),t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}function x1(t,e){if(e.length===0){t.terminal.writeln("No skills entries available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("                 SKILLS"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)if(typeof i=="string")t.terminal.writeln(`  \u2022 ${i}`);else{let n=i.level?` (${i.level})`:"";t.terminal.writeln(`  \u2022 ${i.name}${n}`)}t.terminal.writeln("")}function b1(t){let e=new Map;for(let[i,n]of Object.entries(t)){let r=i.substring(0,7),s=e.get(r)||0;e.set(r,s+n)}return e}function w1(t,e,i){let n=Array.from(e.entries()).sort((l,u)=>l[0].localeCompare(u[0]));if(n.length===0){t.terminal.writeln("  No stats data available.");return}let r=Math.max(...n.map(([,l])=>l)),s=30;t.terminal.writeln(""),t.terminal.writeln(`  Download Statistics (${i})`),t.terminal.writeln(`  ${"\u2500".repeat(42)}`);let o=n.slice(-24);for(let[l,u]of o){let c=Math.round(u/r*s),d="\u2588".repeat(c)+"\u2591".repeat(s-c),f;u>=1e6?f=`${(u/1e6).toFixed(1)}M`:u>=1e3?f=`${(u/1e3).toFixed(0)}K`:f=u.toString(),t.terminal.writeln(`  ${l} |${d}| ${f.padStart(6)}`)}t.terminal.writeln(`  ${"\u2500".repeat(42)}`);let a=n.reduce((l,[,u])=>l+u,0),h;a>=1e6?h=`${(a/1e6).toFixed(1)}M`:a>=1e3?h=`${(a/1e3).toFixed(0)}K`:h=a.toString(),t.terminal.writeln(`  Total downloads: ${h}`)}async function M1(t,e){if(e.length===0){t.terminal.writeln("No open source contributions available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("       OPEN SOURCE CONTRIBUTIONS"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e){if(t.terminal.writeln(`  ${i.project}`),i.role&&t.terminal.writeln(`  Role: ${i.role}`),i.description&&t.terminal.writeln(`  ${i.description}`),i.url&&t.terminal.writeln(`  URL: ${i.url}`),i.stats)try{let n=i.stats.startsWith("/")?i.stats.slice(1):i.stats,r=await fetch(n);if(r.ok){let s=await r.json(),o=Object.keys(s)[0];if(o&&s[o]){let a=b1(s[o]);w1(t,a,i.project)}}}catch{}t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}}function C1(t,e){if(e.length===0){t.terminal.writeln("No publications available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("              PUBLICATIONS"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)t.terminal.writeln(`  "${i.title}"`),t.terminal.writeln(`  Publisher: ${i.publisher}`),t.terminal.writeln(`  Year: ${i.year}`),t.terminal.writeln(`  Role: ${i.role}`),i.isbn&&i.isbn!=="TBD"&&t.terminal.writeln(`  ISBN: ${i.isbn}`),t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}function E1(t,e){if(e.length===0){t.terminal.writeln("No awards available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("                 AWARDS"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)t.terminal.writeln(`  ${i.title}`),t.terminal.writeln(`  Year: ${i.year}`),i.org&&t.terminal.writeln(`  Organization: ${i.org}`),i.description&&t.terminal.writeln(`  ${i.description}`),t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}function T1(t,e){if(!e||e.length===0){t.terminal.writeln("No hobbies available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("                 HOBBIES"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e){let n=typeof i=="string"?i:i.name;t.terminal.writeln(`  \u2022 ${n}`)}t.terminal.writeln("")}function A1(t,e){if(!e||e.length===0){t.terminal.writeln("No social links available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("                 SOCIAL"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)t.terminal.writeln(`  ${i.site}`),t.terminal.writeln(`  ${i.url}`),t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}function R1(t,e){if(!e||e.length===0){t.terminal.writeln("No bio available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("                   BIO"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");let i="  ",r=80-i.length;for(let s of e){let o=s.split(" "),a="";for(let h of o)a.length===0?a=h:a.length+1+h.length<=r?a+=` ${h}`:(t.terminal.writeln(`${i}${a}`),a=h);a.length>0&&t.terminal.writeln(`${i}${a}`),t.terminal.writeln("")}}function P1(t,e){if(!e||e.length===0){t.terminal.writeln("No languages available.");return}t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("                LANGUAGES"),t.terminal.writeln("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"),t.terminal.writeln("");for(let i of e)t.terminal.writeln(`  ${i.name}`),t.terminal.writeln(`  Level: ${i.level}`),t.terminal.writeln("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}async function Vm(t){let e=["--social","--bio","--work-experience","--education","--skills","--oss","--publications","--awards","--hobbies","--languages","--download","--help"];if(t.args.length<2){t.terminal.writeln("cv: missing argument"),t.terminal.writeln("Try './cv --help' for more information.");return}let i=t.args[1].toLowerCase();if(i==="help"||i==="--help"||i==="-h"){t.terminal.writeln("Usage: ./cv [OPTION]"),t.terminal.writeln(""),t.terminal.writeln("Display CV information sections."),t.terminal.writeln(""),t.terminal.writeln("Options:"),t.terminal.writeln("  --social             Display social media links"),t.terminal.writeln("  --bio                Display bio summary"),t.terminal.writeln("  --work-experience    Display work experience history"),t.terminal.writeln("  --education          Display education background"),t.terminal.writeln("  --skills             Display skills"),t.terminal.writeln("  --oss                Display open source contributions"),t.terminal.writeln("  --publications       Display publications"),t.terminal.writeln("  --awards             Display awards and recognitions"),t.terminal.writeln("  --hobbies            Display hobbies and interests"),t.terminal.writeln("  --languages          Display language proficiencies"),t.terminal.writeln("  --download           Download CV as PDF"),t.terminal.writeln("  --help               Display this help message");return}if(!e.includes(i)){t.terminal.writeln(`cv: invalid option '${i}'`),t.terminal.writeln("Try './cv --help' for more information.");return}let n;try{let r=await fetch("assets/content/cv.json");if(!r.ok)throw new Error("Could not load CV data");n=await r.json()}catch{t.terminal.writeln("cv: error loading CV data");return}switch(i){case"--social":A1(t,n.social);break;case"--bio":R1(t,n.bio);break;case"--work-experience":S1(t,n.workExperience);break;case"--education":y1(t,n.education);break;case"--skills":x1(t,n.skills);break;case"--oss":await M1(t,n.oss);break;case"--publications":C1(t,n.publications);break;case"--awards":E1(t,n.awards);break;case"--hobbies":T1(t,n.hobbies);break;case"--languages":P1(t,n.languages);break;case"--download":window.open("assets/content/cv.pdf","_blank"),t.terminal.writeln("Opening CV PDF for download...");break}}async function Wm(t){if(!t.terminal.setKeyHandler||!t.terminal.clearKeyHandler){t.terminal.writeln("matrix: error - terminal does not support input capture");return}t.terminal.hideCursor&&t.terminal.hideCursor();let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()[]{}|;:,.<>?",i=t.terminal.getSize?t.terminal.getSize():{cols:80,rows:24},n=i.cols,r=i.rows,o=1e3/15,a=!0,h=(d,f,m,g)=>{m==="keydown"&&((d==="q"||d==="Q"||f===81)&&(a=!1),(d==="c"||d==="C")&&g&&(a=!1),(d==="Escape"||f===27)&&(a=!1))};t.terminal.setKeyHandler(h),t.terminal.clear();let l=[];for(let d=0;d<r;d++){l[d]=[];for(let f=0;f<n;f++)l[d][f]=e[Math.floor(Math.random()*e.length)]}let u=0,c=!0;await new Promise(d=>{let f=m=>{if(!a){d();return}let g=m-u;if(g<o){requestAnimationFrame(f);return}u=m-g%o;for(let p=0;p<r;p++)for(let b=0;b<n;b++)Math.random()<.25&&(l[p][b]=e[Math.floor(Math.random()*e.length)]);c&&(t.terminal.clear(),c=!1),t.terminal.write("\x1B[H");let _="";for(let p=0;p<r;p++)_+=`${l[p].join("")}\r
`;t.terminal.write(_),requestAnimationFrame(f)};requestAnimationFrame(f)}),t.terminal.clearKeyHandler(),t.terminal.showCursor&&t.terminal.showCursor(),t.terminal.clear()}function ku(t){t.ballX=Math.floor(t.width/2),t.ballY=Math.floor(t.height/2),t.ballVX=Math.random()>.5?1:-1,t.ballVY=(Math.random()-.5)*1.5}function I1(t,e,i){let n=[],r=e.width,s="PONG",o=Math.floor((r-s.length)/2),a=r-s.length-o;n.push(`\u2554${"\u2550".repeat(r)}\u2557`),n.push(`\u2551${" ".repeat(o)}${s}${" ".repeat(a)}\u2551`),n.push(`\u255A${"\u2550".repeat(r)}\u255D`);let h=`CPU: ${e.leftScore}`,l=`Player: ${e.rightScore}`,u=e.width-h.length-l.length;n.push(`${h}${" ".repeat(Math.max(0,u))}${l}`),n.push(`\u250C${"\u2500".repeat(e.width)}\u2510`);for(let d=0;d<e.height;d++){let f="\u2502";for(let m=0;m<e.width;m++)m===1&&d>=e.leftPaddleY&&d<e.leftPaddleY+e.paddleHeight||m===e.width-2&&d>=e.rightPaddleY&&d<e.rightPaddleY+e.paddleHeight?f+="\u2588":Math.round(e.ballX)===m&&Math.round(e.ballY)===d?f+="\u25CF":m===Math.floor(e.width/2)&&d%2===0?f+="\u250A":f+=" ";f+="\u2502",n.push(f)}n.push(`\u2514${"\u2500".repeat(e.width)}\u2518`);let c;e.gameOver?c=`  GAME OVER! ${e.winner} WINS! Press SPACE to restart, Q to quit`:e.paused?c="  PAUSED - Press P to continue":c="  \u2191/\u2193 = Move paddle  |  P = Pause  |  Q = Quit",n.push(c.padEnd(e.width+2)),i&&t.terminal.clear(),t.terminal.write("\x1B[H");for(let d of n)t.terminal.writeln(d)}async function Gm(t){if(!t.terminal.setKeyHandler||!t.terminal.clearKeyHandler){t.terminal.writeln("pong: error - terminal does not support game input"),t.terminal.writeln("This game requires keyboard input capture.");return}t.terminal.startGameMusic&&t.terminal.startGameMusic(),t.terminal.hideCursor&&t.terminal.hideCursor();let e=60,i=20,n=4,r=5,s=80,o={width:e,height:i,leftPaddleY:Math.floor(i/2)-Math.floor(n/2),rightPaddleY:Math.floor(i/2)-Math.floor(n/2),paddleHeight:n,ballX:Math.floor(e/2),ballY:Math.floor(i/2),ballVX:1,ballVY:.5,leftScore:0,rightScore:0,running:!0,paused:!1,gameOver:!1,winner:""},a={arrowUp:!1,arrowDown:!1},h=(u,c,d)=>{let f=d==="keydown";(u==="ArrowUp"||c===38)&&(a.arrowUp=f),(u==="ArrowDown"||c===40)&&(a.arrowDown=f),f&&((u==="q"||u==="Q"||c===81)&&(o.running=!1),(u==="p"||u==="P"||c===80)&&(o.paused=!o.paused),(u===" "||c===32)&&o.gameOver&&(ku(o),o.leftScore=0,o.rightScore=0,o.gameOver=!1,o.winner=""))};t.terminal.setKeyHandler(h),t.terminal.clear();let l=!0;for(;o.running;){if(!o.paused&&!o.gameOver){let u=o.leftPaddleY+o.paddleHeight/2,c=o.ballY;if(o.ballVX<0)u<c-.5&&o.leftPaddleY<o.height-o.paddleHeight?o.leftPaddleY+=.8:u>c+.5&&o.leftPaddleY>0&&(o.leftPaddleY-=.8);else{let d=o.height/2-o.paddleHeight/2;o.leftPaddleY<d-1?o.leftPaddleY+=.3:o.leftPaddleY>d+1&&(o.leftPaddleY-=.3)}if(o.leftPaddleY=Math.max(0,Math.min(o.height-o.paddleHeight,o.leftPaddleY)),a.arrowUp&&o.rightPaddleY>0&&o.rightPaddleY--,a.arrowDown&&o.rightPaddleY<o.height-o.paddleHeight&&o.rightPaddleY++,o.ballX+=o.ballVX,o.ballY+=o.ballVY,(o.ballY<=0||o.ballY>=o.height-1)&&(o.ballVY=-o.ballVY,o.ballY=Math.max(0,Math.min(o.height-1,o.ballY))),o.ballX<=2&&o.ballX>=1&&o.ballY>=o.leftPaddleY&&o.ballY<o.leftPaddleY+o.paddleHeight){o.ballVX=Math.abs(o.ballVX);let d=(o.ballY-o.leftPaddleY)/o.paddleHeight;o.ballVY=(d-.5)*2}if(o.ballX>=o.width-3&&o.ballX<=o.width-2&&o.ballY>=o.rightPaddleY&&o.ballY<o.rightPaddleY+o.paddleHeight){o.ballVX=-Math.abs(o.ballVX);let d=(o.ballY-o.rightPaddleY)/o.paddleHeight;o.ballVY=(d-.5)*2}o.ballX<=0&&(o.rightScore++,o.rightScore>=r?(o.gameOver=!0,o.winner="PLAYER"):ku(o)),o.ballX>=o.width-1&&(o.leftScore++,o.leftScore>=r?(o.gameOver=!0,o.winner="CPU"):ku(o))}I1(t,o,l),l=!1,await Rr(s)}t.terminal.clearKeyHandler(),t.terminal.stopGameMusic&&t.terminal.stopGameMusic(),t.terminal.showCursor&&t.terminal.showCursor(),t.terminal.clear(),t.terminal.writeln("")}function Fu(t){let e,i,n=0,r=1e3;do e=Math.floor(Math.random()*t.width),i=Math.floor(Math.random()*t.height),n++;while(n<r&&t.snake.some(s=>s.x===e&&s.y===i));t.foodX=e,t.foodY=i}function L1(t,e,i,n){t.snake=[{x:Math.floor(e/2),y:Math.floor(i/2)},{x:Math.floor(e/2)-1,y:Math.floor(i/2)},{x:Math.floor(e/2)-2,y:Math.floor(i/2)}],t.direction="right",t.nextDirection="right",t.score=0,t.gameOver=!1,t.paused=!1,t.speed=n,t.frameCount=0,Fu(t)}function Xm(t){if(t.score>t.highScore){t.highScore=t.score;try{localStorage.setItem("snake_high_score",t.highScore.toString())}catch{}}}function D1(t,e,i){let n=[],r=e.width,s="SNAKE",o=Math.floor((r-s.length)/2),a=r-s.length-o;n.push(`\u2554${"\u2550".repeat(r)}\u2557`),n.push(`\u2551${" ".repeat(o)}${s}${" ".repeat(a)}\u2551`),n.push(`\u255A${"\u2550".repeat(r)}\u255D`);let h=`Score: ${e.score}`,l=`High: ${e.highScore}`,u=e.width-h.length-l.length;n.push(`${h}${" ".repeat(Math.max(2,u))}${l}`),n.push(`\u250C${"\u2500".repeat(e.width)}\u2510`);let c=[];for(let m=0;m<e.height;m++){c[m]=[];for(let g=0;g<e.width;g++)c[m][g]=" "}c[e.foodY][e.foodX]="\u25C6";for(let m=0;m<e.snake.length;m++){let g=e.snake[m];g.x>=0&&g.x<e.width&&g.y>=0&&g.y<e.height&&(m===0?c[g.y][g.x]="@":c[g.y][g.x]="\u2588")}for(let m=0;m<e.height;m++)n.push(`\u2502${c[m].join("")}\u2502`);n.push(`\u2514${"\u2500".repeat(e.width)}\u2518`);let d=50,f;e.gameOver?f="  GAME OVER! Press SPACE to restart, Q to quit":e.paused?f="  PAUSED - Press P to continue":f="  \u2191\u2193\u2190\u2192/WASD = Move  |  P = Pause  |  Q = Quit",n.push(f.padEnd(d)),i&&t.terminal.clear(),t.terminal.write("\x1B[H");for(let m of n)t.terminal.writeln(m)}async function $m(t){if(!t.terminal.setKeyHandler||!t.terminal.clearKeyHandler){t.terminal.writeln("snake: error - terminal does not support game input"),t.terminal.writeln("This game requires keyboard input capture.");return}t.terminal.startGameMusic&&t.terminal.startGameMusic(),t.terminal.hideCursor&&t.terminal.hideCursor();let e=40,i=20,n=6,r=2,s=50,o=0;try{let c=localStorage.getItem("snake_high_score");c&&(o=parseInt(c,10))}catch{}let a={width:e,height:i,snake:[{x:Math.floor(e/2),y:Math.floor(i/2)},{x:Math.floor(e/2)-1,y:Math.floor(i/2)},{x:Math.floor(e/2)-2,y:Math.floor(i/2)}],direction:"right",nextDirection:"right",foodX:0,foodY:0,score:0,highScore:o,running:!0,paused:!1,gameOver:!1,speed:n,frameCount:0};Fu(a);let h={arrowUp:!1,arrowDown:!1,arrowLeft:!1,arrowRight:!1},l=(c,d,f)=>{let m=f==="keydown";(c==="ArrowUp"||c==="w"||c==="W"||d===38||d===87)&&(h.arrowUp=m),(c==="ArrowDown"||c==="s"||c==="S"||d===40||d===83)&&(h.arrowDown=m),(c==="ArrowLeft"||c==="a"||c==="A"||d===37||d===65)&&(h.arrowLeft=m),(c==="ArrowRight"||c==="d"||c==="D"||d===39||d===68)&&(h.arrowRight=m),m&&((c==="ArrowUp"||c==="w"||c==="W"||d===38||d===87)&&a.direction!=="down"&&(a.nextDirection="up"),(c==="ArrowDown"||c==="s"||c==="S"||d===40||d===83)&&a.direction!=="up"&&(a.nextDirection="down"),(c==="ArrowLeft"||c==="a"||c==="A"||d===37||d===65)&&a.direction!=="right"&&(a.nextDirection="left"),(c==="ArrowRight"||c==="d"||c==="D"||d===39||d===68)&&a.direction!=="left"&&(a.nextDirection="right"),(c==="q"||c==="Q"||d===81)&&(a.running=!1),(c==="p"||c==="P"||d===80)&&(a.gameOver||(a.paused=!a.paused)),(c===" "||d===32)&&a.gameOver&&L1(a,e,i,n))};t.terminal.setKeyHandler(l),t.terminal.clear();let u=!0;for(;a.running;){if(!a.paused&&!a.gameOver&&(h.arrowUp&&a.direction!=="down"?a.nextDirection="up":h.arrowDown&&a.direction!=="up"?a.nextDirection="down":h.arrowLeft&&a.direction!=="right"?a.nextDirection="left":h.arrowRight&&a.direction!=="left"&&(a.nextDirection="right"),a.frameCount++,a.frameCount>=a.speed)){a.frameCount=0,a.direction=a.nextDirection;let c=a.snake[0],d=c.x,f=c.y;switch(a.direction){case"up":f--;break;case"down":f++;break;case"left":d--;break;case"right":d++;break}if(d<0||d>=a.width||f<0||f>=a.height)a.gameOver=!0,Xm(a);else{for(let m of a.snake)if(m.x===d&&m.y===f){a.gameOver=!0,Xm(a);break}a.gameOver||(a.snake.unshift({x:d,y:f}),d===a.foodX&&f===a.foodY?(a.score+=10,Fu(a),a.score%50===0&&a.speed>r&&a.speed--):a.snake.pop())}}D1(t,a,u),u=!1,await Rr(s)}t.terminal.clearKeyHandler(),t.terminal.stopGameMusic&&t.terminal.stopGameMusic(),t.terminal.showCursor&&t.terminal.showCursor(),t.terminal.clear(),t.terminal.writeln(`Final Score: ${a.score}`),a.score===a.highScore&&a.score>0&&t.terminal.writeln("\u{1F3C6} NEW HIGH SCORE!"),t.terminal.writeln("")}var jl={I:[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]],O:[[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],T:[[[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]]],S:[[[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]]],Z:[[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]]],J:[[[1,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]]],L:[[[0,0,1,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]]]},qm=["I","O","T","S","Z","J","L"];function Zm(t,e){return Array.from({length:e},()=>Array(t).fill(0))}function yo(){return qm[Math.floor(Math.random()*qm.length)]}function an(t,e,i,n){let r=jl[t.currentPiece][n];for(let s=0;s<4;s++)for(let o=0;o<4;o++)if(r[s][o]){let a=e+o,h=i+s;if(a<0||a>=t.width||h>=t.height||h>=0&&t.board[h][a]!==0)return!1}return!0}function Ym(t){let e=jl[t.currentPiece][t.currentRotation];for(let n=0;n<4;n++)for(let r=0;r<4;r++)if(e[n][r]){let s=t.currentX+r,o=t.currentY+n;o>=0&&o<t.height&&s>=0&&s<t.width&&(t.board[o][s]=t.currentPiece)}let i=0;for(let n=t.height-1;n>=0;n--)t.board[n].every(r=>r!==0)&&(t.board.splice(n,1),t.board.unshift(Array(t.width).fill(0)),i++,n++);if(i>0){let n=[0,100,300,500,800];t.score+=n[i]*t.level,t.lines+=i;let r=Math.floor(t.lines/10)+1;r>t.level&&(t.level=r,t.dropSpeed=Math.max(5,30-(t.level-1)*3))}if(t.score>t.highScore){t.highScore=t.score;try{localStorage.setItem("tetris_high_score",t.highScore.toString())}catch{}}t.lockDelay=0}function Km(t){t.currentPiece=t.nextPiece,t.nextPiece=yo(),t.currentRotation=0,t.currentX=Math.floor(t.width/2)-2,t.currentY=0,t.lockDelay=0,an(t,t.currentX,t.currentY,t.currentRotation)||(t.gameOver=!0)}function N1(t,e,i,n){t.board=Zm(e,i),t.currentPiece=yo(),t.nextPiece=yo(),t.currentRotation=0,t.currentX=Math.floor(e/2)-2,t.currentY=0,t.score=0,t.lines=0,t.level=1,t.gameOver=!1,t.paused=!1,t.dropSpeed=n,t.frameCount=0,t.lockDelay=0}function B1(t,e,i){let n=[],s=e.width*2;n.push("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557"),n.push("\u2551                      TETRIS                        \u2551"),n.push("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");let o="\xB7 ",a="\u2588\u2588",h="\u2591\u2591",l=e.board.map(_=>_.map(p=>p===0?o:a)),u=jl[e.currentPiece][e.currentRotation];for(let _=0;_<4;_++)for(let p=0;p<4;p++)if(u[_][p]){let b=e.currentX+p,w=e.currentY+_;w>=0&&w<e.height&&b>=0&&b<e.width&&(l[w][b]=a)}let c=e.currentY;for(;an(e,e.currentX,c+1,e.currentRotation);)c++;if(c>e.currentY){for(let _=0;_<4;_++)for(let p=0;p<4;p++)if(u[_][p]){let b=e.currentX+p,w=c+_;w>=0&&w<e.height&&b>=0&&b<e.width&&l[w][b]===o&&(l[w][b]=h)}}let d=[],f=jl[e.nextPiece][0];for(let _=0;_<4;_++){let p="";for(let b=0;b<4;b++)p+=f[_][b]?a:"  ";d.push(p)}n.push(`\u250C${"\u2500".repeat(s)}\u2510`);for(let _=0;_<e.height;_++){let p=`\u2502${l[_].join("")}\u2502`;_===0?p+="   NEXT:":_>=1&&_<=4?p+=`   ${d[_-1]}`:_===6?p+=`   Score: ${e.score}`:_===7?p+=`   High:  ${e.highScore}`:_===9?p+=`   Lines: ${e.lines}`:_===10&&(p+=`   Level: ${e.level}`),n.push(p)}n.push(`\u2514${"\u2500".repeat(s)}\u2518`);let m=65,g;e.gameOver?g="  GAME OVER! SPACE=Restart Q=Quit":e.paused?g="  PAUSED - Press P to continue":g="  \u2190\u2192/AD=Move  \u2191/W=Rotate  \u2193/S=Drop  SPACE=HardDrop  Q=Quit",n.push(g.padEnd(m)),i&&t.terminal.clear(),t.terminal.write("\x1B[H");for(let _ of n)t.terminal.writeln(_)}async function Jm(t){if(!t.terminal.setKeyHandler||!t.terminal.clearKeyHandler){t.terminal.writeln("tetris: error - terminal does not support game input"),t.terminal.writeln("This game requires keyboard input capture.");return}t.terminal.startGameMusic&&t.terminal.startGameMusic(),t.terminal.hideCursor&&t.terminal.hideCursor();let e=10,i=20,n=30,r=33,s=0;try{let m=localStorage.getItem("tetris_high_score");m&&(s=parseInt(m,10))}catch{}let o={width:e,height:i,board:Zm(e,i),currentPiece:yo(),currentRotation:0,currentX:Math.floor(e/2)-2,currentY:0,nextPiece:yo(),score:0,lines:0,level:1,highScore:s,running:!0,paused:!1,gameOver:!1,dropSpeed:n,frameCount:0,lockDelay:0},a={arrowLeft:!1,arrowRight:!1,arrowDown:!1,arrowUp:!1},h=0,l=150,u=50,c=!0,d=(m,g,_)=>{let p=_==="keydown";if((m==="ArrowLeft"||m==="a"||m==="A"||g===37||g===65)&&(p&&!a.arrowLeft&&(c=!0,h=0),a.arrowLeft=p),(m==="ArrowRight"||m==="d"||m==="D"||g===39||g===68)&&(p&&!a.arrowRight&&(c=!0,h=0),a.arrowRight=p),(m==="ArrowDown"||m==="s"||m==="S"||g===40||g===83)&&(p&&!a.arrowDown&&(c=!0,h=0),a.arrowDown=p),(m==="ArrowUp"||m==="w"||m==="W"||g===38||g===87)&&(a.arrowUp=p),p){if(o.gameOver){(m===" "||g===32)&&N1(o,e,i,n),(m==="q"||m==="Q"||g===81)&&(o.running=!1);return}if((m==="q"||m==="Q"||g===81)&&(o.running=!1),(m==="p"||m==="P"||g===80)&&(o.paused=!o.paused),o.paused)return;if(m===" "||g===32){let b=0;for(;an(o,o.currentX,o.currentY+1,o.currentRotation);)o.currentY++,b++;o.score+=b*2,Ym(o),Km(o)}if(m==="ArrowUp"||m==="w"||m==="W"||g===38||g===87){let b=(o.currentRotation+1)%4;an(o,o.currentX,o.currentY,b)?o.currentRotation=b:an(o,o.currentX-1,o.currentY,b)?(o.currentX--,o.currentRotation=b):an(o,o.currentX+1,o.currentY,b)&&(o.currentX++,o.currentRotation=b)}}};t.terminal.setKeyHandler(d),t.terminal.clear();let f=!0;for(;o.running;){if(!o.paused&&!o.gameOver){let m=Date.now();if(m-h>=(c?l:u)){let p=!1;a.arrowLeft&&!a.arrowRight&&an(o,o.currentX-1,o.currentY,o.currentRotation)&&(o.currentX--,p=!0),a.arrowRight&&!a.arrowLeft&&an(o,o.currentX+1,o.currentY,o.currentRotation)&&(o.currentX++,p=!0),a.arrowDown&&an(o,o.currentX,o.currentY+1,o.currentRotation)&&(o.currentY++,o.score+=1,p=!0),p&&(h=m,c=!1)}o.frameCount++,o.frameCount>=o.dropSpeed&&(o.frameCount=0,an(o,o.currentX,o.currentY+1,o.currentRotation)?o.currentY++:(o.lockDelay++,o.lockDelay>=2&&(Ym(o),Km(o))))}B1(t,o,f),f=!1,await Rr(r)}t.terminal.clearKeyHandler(),t.terminal.stopGameMusic&&t.terminal.stopGameMusic(),t.terminal.showCursor&&t.terminal.showCursor(),t.terminal.clear(),t.terminal.writeln(`Final Score: ${o.score} | Lines: ${o.lines} | Level: ${o.level}`),o.score===o.highScore&&o.score>0&&t.terminal.writeln("\u{1F3C6} NEW HIGH SCORE!"),t.terminal.writeln("")}var Uu=new Map,Gt=new Map,Hi="";function jn(t){if(!t||t===".")return Hi;if(t==="~"||t==="/")return"";let e,i;t.startsWith("~/")?(e="",i=t.slice(2)):t.startsWith("/")?(e="",i=t.slice(1)):(e=Hi,i=t);let n=e?e.split("/"):[],r=i.split("/").filter(s=>s.length>0);for(let s of r)s==="."||(s===".."?n.length>0&&n.pop():n.push(s));return n.join("/")}function Ou(t){let e=[];for(let[i,n]of Gt.entries())n.parent===t&&e.push(n);return e}function jm(t){return t===""?!0:Gt.has(t)&&(Gt.get(t)?.isDirectory??!1)}function k1(){Gt.set("Documents",{name:"Documents",isDirectory:!0,size:4096,permissions:"drwxr-xr-x",modified:"Dec 24 12:00",parent:""}),Gt.set("Videos",{name:"Videos",isDirectory:!0,size:4096,permissions:"drwxr-xr-x",modified:"Dec 21 14:20",parent:""}),Gt.set("Programs",{name:"Programs",isDirectory:!0,size:4096,permissions:"drwxr-xr-x",modified:"Dec 25 00:00",parent:""}),Gt.set("Documents/license.txt",{name:"license.txt",isDirectory:!1,size:35147,permissions:"-rw-r--r--",modified:"Dec 24 12:00",parent:"Documents",content:async()=>{let t=await fetch("assets/content/license.txt");if(!t.ok)throw new Error("Could not load license file");return await t.text()}}),Gt.set("Documents/mvp.txt",{name:"mvp.txt",isDirectory:!1,size:2048,permissions:"-rw-r--r--",modified:"Dec 25 00:00",parent:"Documents",content:async()=>{let t=await fetch("assets/content/mvp.txt");if(!t.ok)throw new Error("Could not load mvp file");return await t.text()}}),Gt.set("Videos/interview.mp4",{name:"interview.mp4",isDirectory:!1,size:15728640,permissions:"-rw-r--r--",modified:"Dec 25 00:00",parent:"Videos"}),Gt.set("Programs/cv",{name:"cv",isDirectory:!1,size:8192,permissions:"-rwxr-xr-x",modified:"Dec 25 00:00",parent:"Programs"}),Gt.set("Programs/pong",{name:"pong",isDirectory:!1,size:4096,permissions:"-rwxr-xr-x",modified:"Dec 25 00:00",parent:"Programs"}),Gt.set("Programs/snake",{name:"snake",isDirectory:!1,size:4096,permissions:"-rwxr-xr-x",modified:"Dec 25 00:00",parent:"Programs"}),Gt.set("Programs/tetris",{name:"tetris",isDirectory:!1,size:8192,permissions:"-rwxr-xr-x",modified:"Dec 25 00:00",parent:"Programs"}),Gt.set("Programs/matrix",{name:"matrix",isDirectory:!1,size:4096,permissions:"-rwxr-xr-x",modified:"Dec 25 00:00",parent:"Programs"})}k1();function xo(){return`guest@remojansen.com ${Hi?`~/${Hi}`:"~"} $ `}function Vi(t,e){Uu.set(t.toLowerCase(),e)}function Qm(t){let e=[],i="",n=!1,r="";for(let s of t)n?s===r?n=!1:i+=s:s==='"'||s==="'"?(n=!0,r=s):s===" "||s==="	"?i.length>0&&(e.push(i),i=""):i+=s;return i.length>0&&e.push(i),e}async function e_(t,e){let i=t.trim();if(i===""){e.write(xo());return}let n=Qm(i);if(n.length===0){e.write(xo());return}let r=n[0].toLowerCase();if(n[0].startsWith("./")){let o=n[0].slice(2),a=jn(o),h=Gt.get(a);if(!(h&&!h.isDirectory&&h.permissions.includes("x"))){e.writeln(`zsh: no such file or directory: ${n[0]}`),e.write(xo());return}r=`./${h.name}`}let s=Uu.get(r);if(s){let o={command:i,args:n,terminal:e};try{await s(o)}catch(a){let h=a instanceof Error?a.message:String(a);e.writeln(`Error: ${h}`)}}else e.writeln(`${r}: command not found`);e.write(xo())}function Rr(t){return new Promise(e=>setTimeout(e,t))}function t_(){return xo()}Vi("help",t=>{t.terminal.writeln("Available commands:"),t.terminal.writeln("  help     - Show this help message"),t.terminal.writeln("  clear    - Clear the terminal screen"),t.terminal.writeln("  cd       - Change directory"),t.terminal.writeln("  ls       - List directory contents"),t.terminal.writeln("  cat      - Display file contents"),t.terminal.writeln("  ffplay   - Play video files")});Vi("cd",t=>{if(t.args.length<2){Hi="";return}let e=t.args[1];if(e==="~"||e==="/"){Hi="";return}if(e==="-"){Hi="";return}let i=jn(e);if(!jm(i)){t.terminal.writeln(`cd: ${e}: No such file or directory`);return}Hi=i});Vi("clear",t=>{t.terminal.clear()});Vi("ls",t=>{let e=t.args.includes("-l")||t.args.includes("-la")||t.args.includes("-al"),i=Hi;for(let r=1;r<t.args.length;r++)if(!t.args[r].startsWith("-")){i=jn(t.args[r]);break}if(i!==""&&!jm(i)){let r=Gt.get(i);if(r&&!r.isDirectory){e?t.terminal.writeln(`${r.permissions}  1 ghost ghost ${r.size.toString().padStart(8)} ${r.modified} ${r.name}`):t.terminal.writeln(r.name);return}t.terminal.writeln(`ls: cannot access '${t.args[1]||i}': No such file or directory`);return}let n=Ou(i);if(n.length!==0)if(e){let r=n.reduce((s,o)=>s+(o.isDirectory?4:1),0)*4;t.terminal.writeln(`total ${r}`);for(let s of n){let o=s.isDirectory?`${s.name}/`:s.name;t.terminal.writeln(`${s.permissions}  1 ghost ghost ${s.size.toString().padStart(8)} ${s.modified} ${o}`)}}else{let r=n.map(s=>s.isDirectory?`${s.name}/`:s.name);t.terminal.writeln(r.join("  "))}});Vi("cat",async t=>{if(t.args.length<2){t.terminal.writeln("cat: missing file operand");return}let e=t.args[1],i=jn(e),n=Gt.get(i);if(!n){t.terminal.writeln(`cat: ${e}: No such file or directory`);return}if(n.isDirectory){t.terminal.writeln(`cat: ${e}: Is a directory`);return}if(n.content===void 0){t.terminal.writeln(`cat: ${e}: Unable to read file`);return}try{let s=(typeof n.content=="function"?await n.content():n.content).split(`
`);if(s.some(a=>a.trim()==="@@@")){let a=[],h=[];for(let l of s)l.trim()==="@@@"?h.length>0&&(a.push(h),h=[]):h.push(l);h.length>0&&a.push(h);for(let l=0;l<a.length;l++){let u=a[l];for(let c of u)t.terminal.writeln(c);l<a.length-1&&await Rr(500)}}else for(let a of s)t.terminal.writeln(a)}catch{t.terminal.writeln(`cat: ${e}: Error reading file`)}});Vi("./matrix",Wm);var F1=new Map([["Videos/interview.mp4","assets/video/interview.webm"],["interview.mp4","assets/video/interview.webm"]]);Vi("ffplay",async t=>{if(!t.terminal.playVideo||!t.terminal.stopVideo){t.terminal.writeln("ffplay: error - video playback not supported");return}if(t.args.length<2){t.terminal.writeln("ffplay: missing file operand"),t.terminal.writeln("Usage: ffplay <filename>");return}let e=t.args[1],i=jn(e);if(!Gt.get(i)){t.terminal.writeln(`ffplay: ${e}: No such file or directory`);return}let r=F1.get(i);if(!r){t.terminal.writeln(`ffplay: ${e}: Not a supported video format`);return}if(!t.terminal.setKeyHandler||!t.terminal.clearKeyHandler){t.terminal.writeln("ffplay: error - terminal does not support input capture");return}t.terminal.writeln(`Playing: ${e}`),t.terminal.writeln(""),t.terminal.writeln("Controls:"),t.terminal.writeln("  SPACE    - Pause/Resume"),t.terminal.writeln("  F        - Forward 10 seconds"),t.terminal.writeln("  B        - Backward 10 seconds"),t.terminal.writeln("  Q / ESC  - Stop playback"),t.terminal.writeln(""),t.terminal.writeln("Press ENTER to start playback...");let s=!1,o=!1,a=t.terminal.setKeyHandler;if(await new Promise(c=>{a((f,m,g)=>{g==="keydown"&&((f==="Enter"||m===13)&&(s=!0,t.terminal.clearKeyHandler?.(),c()),(f==="q"||f==="Q"||m===81||f==="Escape"||m===27)&&(o=!0,t.terminal.clearKeyHandler?.(),c()))})}),o){t.terminal.writeln(""),t.terminal.writeln("Playback cancelled.");return}t.terminal.hideCursor&&t.terminal.hideCursor(),t.terminal.clear();let l=!1,u=(c,d,f,m)=>{if(f==="keydown"){if((c==="q"||c==="Q"||d===81)&&(l=!0,t.terminal.stopVideo?.()),(c==="Escape"||d===27)&&(l=!0,t.terminal.stopVideo?.()),(c==="c"||c==="C")&&m&&(l=!0,t.terminal.stopVideo?.()),c===" "||d===32){let g=t.terminal.getVideoElement?.();g&&(g.paused?g.play():g.pause())}if(c==="f"||c==="F"||d===70){let g=t.terminal.getVideoElement?.();g&&(g.currentTime=Math.min(g.currentTime+10,g.duration))}if(c==="b"||c==="B"||d===66){let g=t.terminal.getVideoElement?.();g&&(g.currentTime=Math.max(g.currentTime-10,0))}}};t.terminal.setKeyHandler(u);try{await t.terminal.playVideo(r)}catch(c){if(!l){let d=c instanceof Error?c.message:String(c);t.terminal.writeln(`ffplay: error playing video: ${d}`)}}t.terminal.clearKeyHandler(),t.terminal.showCursor&&t.terminal.showCursor(),l||(t.terminal.writeln(""),t.terminal.writeln("Playback finished."))});Vi("./cv",Vm);Vi("./pong",Gm);Vi("./snake",$m);Vi("./tetris",Jm);function i_(t){let e=Qm(t);if(e.length===0)return{completions:[],prefix:"",isCommand:!0};let i=e[e.length-1];if(e.length===1&&!t.endsWith(" ")){if(i.startsWith("./")){let d=i.slice(2),f,m;if(d.includes("/")){let w=d.lastIndexOf("/"),x=d.slice(0,w);m=d.slice(w+1),f=jn(x)}else f=Hi,m=d;let _=Ou(f).filter(w=>w.name.toLowerCase().startsWith(m.toLowerCase())),p="./";if(d.includes("/")){let w=d.lastIndexOf("/");p=`./${d.slice(0,w+1)}`}return{completions:_.map(w=>w.isDirectory?`${p}${w.name}/`:`${p}${w.name}`).sort(),prefix:i,isCommand:!0}}let c=[];for(let d of Uu.keys())d.startsWith(i.toLowerCase())&&c.push(d);return{completions:c.sort(),prefix:i,isCommand:!0}}let r=t.endsWith(" ")?"":i,s,o;if(r.includes("/")){let c=r.lastIndexOf("/"),d=r.slice(0,c+1);o=r.slice(c+1),d==="/"||d==="~/"?s="":d.startsWith("~/")?s=d.slice(2,-1):(d.startsWith("./"),s=jn(d.slice(0,-1)))}else s=Hi,o=r;let h=Ou(s).filter(c=>c.name.startsWith(o)),l="";if(r.includes("/")){let c=r.lastIndexOf("/");l=r.slice(0,c+1)}return{completions:h.map(c=>c.isDirectory?`${l}${c.name}/`:`${l}${c.name}`).sort(),prefix:r,isCommand:!1}}var Ql=class{xterm;terminalText;currentLine="";hiddenContainer;isCommandRunning=!1;biosComplete=!1;bootComplete=!1;audioControls=null;commandHistory=[];historyIndex=-1;savedCurrentLine="";gameKeyHandler=null;boundGameKeyboardHandler=null;cursorExplicitlyHidden=!1;outputBuffer="";constructor(e,i=80,n=24,r){this.terminalText=e,this.audioControls=r||null,this.hiddenContainer=document.createElement("div"),this.hiddenContainer.style.position="absolute",this.hiddenContainer.style.left="-9999px",this.hiddenContainer.style.top="-9999px",this.hiddenContainer.style.width="800px",this.hiddenContainer.style.height="600px",document.body.appendChild(this.hiddenContainer);let s=e.getGridSize(),o=s.cols>0?s.cols:i,a=s.rows>0?s.rows:n;this.xterm=new Hm({cols:o,rows:a,cursorBlink:!1,cursorStyle:"block",scrollback:1e3,fontFamily:"Terminus, monospace",fontSize:12}),this.xterm.open(this.hiddenContainer),this.showBootPrompt(),this.xterm.attachCustomKeyEventHandler(l=>{if(this.gameKeyHandler){if(l.type==="keydown"&&l.repeat)return!1;let u=l.type;return this.gameKeyHandler(l.key,l.keyCode,u),!1}return l.key==="ArrowUp"||l.keyCode===38?(l.type==="keydown"&&this.handleArrowUp(),!1):l.key==="ArrowDown"||l.keyCode===40?(l.type==="keydown"&&this.handleArrowDown(),!1):l.key==="ArrowLeft"||l.keyCode===37||l.key==="ArrowRight"||l.keyCode===39||l.key==="Home"||l.keyCode===36||l.key==="End"||l.keyCode===35?!1:l.key==="Tab"||l.keyCode===9?(l.type==="keydown"&&this.handleTab(),l.preventDefault(),!1):l.key==="Backspace"||l.keyCode===8?(l.type==="keydown"&&this.handleBackspace(),l.preventDefault(),!1):l.key==="Enter"||l.keyCode===13?(l.type==="keydown"&&this.handleEnter(),l.preventDefault(),!1):!0}),this.xterm.onKey(({key:l,domEvent:u})=>{this.handleKey(l,u)}),this.xterm.onData(l=>{!this.isCommandRunning&&l.length>1&&!l.includes("\r")&&!l.includes(`
`)&&(this.currentLine+=l,this.xterm.write(l),this.updateTerminalText())}),this.xterm.onScroll(()=>{this.updateTerminalText()});let h=document.getElementById("container");h&&h.addEventListener("wheel",l=>{let u=Math.sign(l.deltaY)*Math.max(1,Math.floor(Math.abs(l.deltaY)/50));this.xterm.scrollLines(u),this.updateTerminalText(),l.preventDefault()},{passive:!1})}showBootPrompt(){this.xterm.write("Press ENTER to initiate the BIOS boot sequence... "),this.updateTerminalText()}async printBiosSequence(){try{let e=await fetch("./assets/content/bios.txt");if(!e.ok){console.warn("Could not load BIOS content:",e.statusText);return}let n=(await e.text()).split(`
`),r=[],s=[];for(let o of n)o.trim()==="@@@"?s.length>0&&(r.push(s),s=[]):s.push(o);s.length>0&&r.push(s);for(let o=0;o<r.length;o++){let a=r[o];for(let h of a)this.outputBuffer+=`${h}
`,this.xterm.write(`${h}\r
`);this.updateTerminalText(),o<r.length-1&&await this.sleep(500)}this.xterm.write(`\r
`),this.outputBuffer+=`
`,this.updateTerminalText()}catch(e){console.warn("Error loading BIOS content:",e)}}sleep(e){return new Promise(i=>setTimeout(i,e))}createTerminalIO(){return{write:e=>{this.outputBuffer+=e,this.xterm.write(e.replace(/\n/g,`\r
`),()=>{this.updateTerminalText()})},writeln:e=>{this.outputBuffer+=`${e}
`,this.xterm.write(`${e.replace(/\n/g,`\r
`)}\r
`,()=>{this.updateTerminalText()})},clear:()=>{this.xterm.clear(),this.outputBuffer="",this.updateTerminalText()},setKeyHandler:e=>{this.gameKeyHandler=e,this.boundGameKeyboardHandler=i=>{if(this.gameKeyHandler){if(i.type==="keydown"&&i.repeat){i.preventDefault(),i.stopPropagation();return}let n=i.type;this.gameKeyHandler(i.key,i.keyCode,n,i.ctrlKey),i.preventDefault(),i.stopPropagation()}},document.addEventListener("keydown",this.boundGameKeyboardHandler,!0),document.addEventListener("keyup",this.boundGameKeyboardHandler,!0)},clearKeyHandler:()=>{this.boundGameKeyboardHandler&&(document.removeEventListener("keydown",this.boundGameKeyboardHandler,!0),document.removeEventListener("keyup",this.boundGameKeyboardHandler,!0),this.boundGameKeyboardHandler=null),this.gameKeyHandler=null},hideCursor:()=>{this.cursorExplicitlyHidden=!0,this.terminalText.setCursorVisible(!1)},showCursor:()=>{this.cursorExplicitlyHidden=!1,this.terminalText.setCursorVisible(!0)},getSize:()=>this.terminalText.getGridSize(),playVideo:e=>this.terminalText.playVideo(e),stopVideo:()=>{this.terminalText.stopVideo()},getVideoElement:()=>this.terminalText.getVideoElement(),startGameMusic:()=>{this.audioControls&&this.audioControls.startGameMusic()},stopGameMusic:()=>{this.audioControls&&this.audioControls.stopGameMusic()}}}handleTab(){if(this.terminalText.resetCursorBlink(),!this.bootComplete||!this.biosComplete||this.isCommandRunning)return;let{completions:e,prefix:i}=i_(this.currentLine);if(e.length!==0)if(e.length===1){let n=e[0],r=n.slice(i.length),s=n.endsWith("/")?"":" ",o=r+s;this.currentLine+=o,this.xterm.write(o),this.updateTerminalText()}else{let n=this.findCommonPrefix(e);if(n.length>i.length){let r=n.slice(i.length);this.currentLine+=r,this.xterm.write(r),this.updateTerminalText()}else{this.xterm.write(`\r
`);let r=Math.max(...e.map(o=>o.length))+2,s=Math.floor(80/r)||1;for(let o=0;o<e.length;o+=s){let h=e.slice(o,o+s).map(l=>l.padEnd(r)).join("");this.xterm.write(`${h}\r
`)}this.xterm.write(this.getPromptString()+this.currentLine),this.updateTerminalText()}}}findCommonPrefix(e){if(e.length===0)return"";if(e.length===1)return e[0];let i=e[0];for(let n=1;n<e.length;n++)for(;!e[n].startsWith(i)&&i.length>0;)i=i.slice(0,-1);return i}getPromptString(){let e=this.xterm.buffer.active,i=e.getLine(e.cursorY);if(i){let n=i.translateToString(!0),r=n.indexOf(" $ ");if(r!==-1)return n.slice(0,r+3)}return"guest@remojansen.com ~ $ "}handleArrowUp(){this.gameKeyHandler||(this.terminalText.resetCursorBlink(),!(!this.bootComplete||!this.biosComplete||this.isCommandRunning)&&this.navigateHistoryUp())}handleArrowDown(){this.gameKeyHandler||(this.terminalText.resetCursorBlink(),!(!this.bootComplete||!this.biosComplete||this.isCommandRunning)&&this.navigateHistoryDown())}handleBackspace(){return this.terminalText.resetCursorBlink(),!this.bootComplete||!this.biosComplete||this.isCommandRunning||this.currentLine.length>0&&(this.currentLine=this.currentLine.slice(0,-1),this.xterm.write("\b \b",()=>{this.updateTerminalText()})),!1}handleEnter(){if(this.terminalText.resetCursorBlink(),!this.bootComplete){this.bootComplete=!0,this.audioControls&&this.audioControls.startBackgroundMusic(),this.xterm.write("\x1B[2J\x1B[H"),this.xterm.clear(),this.outputBuffer="",this.updateTerminalText(),this.printBiosSequence().then(()=>{this.biosComplete=!0;let e=t_();this.outputBuffer+=e,this.xterm.write(e,()=>{this.updateTerminalText()})});return}!this.biosComplete||this.isCommandRunning||this.executeCommand()}handleKey(e,i){let n=i.keyCode;if(this.terminalText.resetCursorBlink(),!!this.bootComplete&&this.biosComplete){if(this.gameKeyHandler){this.gameKeyHandler(e,n,"keydown");return}if(!this.isCommandRunning&&n!==8){if(n===33){this.scrollUp(this.xterm.rows),i.preventDefault();return}if(n===34){this.scrollDown(this.xterm.rows),i.preventDefault();return}e.length===1&&!i.ctrlKey&&!i.altKey&&!i.metaKey&&(this.currentLine+=e,this.xterm.write(e,()=>{this.updateTerminalText()}))}}}async executeCommand(){let e=this.currentLine;this.currentLine="",e.trim()!==""&&(this.commandHistory.length===0||this.commandHistory[this.commandHistory.length-1]!==e)&&this.commandHistory.push(e),this.historyIndex=-1,this.savedCurrentLine="",this.xterm.write(`\r
`),this.outputBuffer+=`
`,this.updateTerminalText(),this.isCommandRunning=!0;try{let i=this.createTerminalIO();await e_(e,i)}finally{this.isCommandRunning=!1,this.updateTerminalText()}}navigateHistoryUp(){if(this.commandHistory.length===0)return;this.historyIndex===-1&&(this.savedCurrentLine=this.currentLine),this.historyIndex<this.commandHistory.length-1&&this.historyIndex++;let e=this.commandHistory[this.commandHistory.length-1-this.historyIndex];this.replaceCurrentLine(e)}navigateHistoryDown(){if(this.historyIndex!==-1)if(this.historyIndex--,this.historyIndex===-1)this.replaceCurrentLine(this.savedCurrentLine),this.savedCurrentLine="";else{let e=this.commandHistory[this.commandHistory.length-1-this.historyIndex];this.replaceCurrentLine(e)}}replaceCurrentLine(e){let i=this.currentLine.length;i>0&&(this.xterm.write("\b".repeat(i)),this.xterm.write(" ".repeat(i)),this.xterm.write("\b".repeat(i))),this.currentLine=e,this.xterm.write(e,()=>{this.updateTerminalText()})}scrollUp(e=1){this.xterm.scrollLines(-e),this.updateTerminalText()}scrollDown(e=1){this.xterm.scrollLines(e),this.updateTerminalText()}updateTerminalText(){let e=this.xterm.buffer.active,i=[],n=e.length,r=e.viewportY,s=this.xterm.rows;for(let u=0;u<s;u++){let c=r+u;if(c<n){let d=e.getLine(c);d?i.push(d.translateToString(!0)):i.push("")}else i.push("")}let o=i.join(`
`);this.terminalText.setText(o);let a=e.baseY+e.cursorY,h=r+s-1,l=a<r||a>h;if(!this.cursorExplicitlyHidden)if(l)this.terminalText.setCursorVisible(!1);else{this.terminalText.setCursorVisible(!0);let u=e.cursorX,c=a-r;this.terminalText.setCursorPosition(u,c)}}focus(){this.xterm.focus()}resize(e,i){this.xterm.resize(e,i),this.updateTerminalText()}getXTerm(){return this.xterm}isRunning(){return this.isCommandRunning}dispose(){this.xterm.dispose(),this.hiddenContainer.parentNode&&this.hiddenContainer.parentNode.removeChild(this.hiddenContainer)}};function O1(t){let e=new Os;t.add(e);let i=new Fs,n=new Qr(e),r=!1,s=null,o=!1,a=()=>{e.context.state==="suspended"&&e.context.resume(),r&&s&&!n.isPlaying&&(n.play(),console.log("Background music started"))};i.load("assets/audio/background.mp3",c=>{s=c,n.setBuffer(s),n.setLoop(!0),n.setVolume(.5),r=!0,console.log("Background music loaded"),o&&a()});let h=new Qr(e),l=!1,u=null;return i.load("assets/audio/game.mp3",c=>{u=c,h.setBuffer(u),h.setLoop(!0),h.setVolume(.5),l=!0,console.log("Game music loaded")}),{startBackgroundMusic:()=>{o=!0,a()},startGameMusic:()=>{e.context.state==="suspended"&&e.context.resume(),l&&u&&!h.isPlaying&&(h.play(),console.log("Game music started"))},stopGameMusic:()=>{h.isPlaying&&(h.stop(),console.log("Game music stopped"))}}}async function n_(){let t=document.getElementById("container");if(!t)throw new Error("Container element not found");let e=new kn,i=new Zi(-1,1,1,-1,.1,10);i.position.z=1;let n=O1(i),r=new _l({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.setClearColor(0),t.appendChild(r.domElement);let s=new xl(window.innerWidth,window.innerHeight);s.mesh.position.z=0,e.add(s.mesh);let o=new yl(window.innerWidth,window.innerHeight);o.mesh.position.z=.1,e.add(o.mesh);let a=new Ql(s,80,24,n),h=s.getGridSize();console.log(`Initial grid size: ${h.cols}x${h.rows}`),h.cols>0&&h.rows>0&&a.resize(h.cols,h.rows),s.onGridSizeChange((u,c)=>{console.log(`Grid size changed: ${u}x${c}`),u>0&&c>0&&a.resize(u,c)}),a.focus(),t.addEventListener("click",()=>{a.focus()}),window.addEventListener("resize",()=>{r.setSize(window.innerWidth,window.innerHeight),o.updateSize(window.innerWidth,window.innerHeight),s.updateSize(window.innerWidth,window.innerHeight);let u=s.getGridSize();u.cols>0&&u.rows>0&&a.resize(u.cols,u.rows)});function l(){s.updateTime(performance.now()),s.renderStaticPass(r),requestAnimationFrame(l),r.render(e,i)}l(),console.log("Cool Retro Term Web initialized")}n_().catch(console.error);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@xterm/xterm/lib/xterm.mjs:
  (**
   * Copyright (c) 2014-2024 The xterm.js authors. All rights reserved.
   * @license MIT
   *
   * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
   * @license MIT
   *
   * Originally forked from (with the author's permission):
   *   Fabrice Bellard's javascript vt100 for jslinux:
   *   http://bellard.org/jslinux/
   *   Copyright (c) 2011 Fabrice Bellard
   *)
*/
