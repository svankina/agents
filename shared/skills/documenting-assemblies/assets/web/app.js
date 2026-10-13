var d8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},c8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var nQ=0,sQ=1,_9=2;var p7=1000,oQ=1001,iQ=1002,n8=1003,aQ=1004;var rQ=1005;var bJ=1006,tQ=1007;var gJ=1008;var eQ=1015,pJ=1016;var J$=2300,uJ=2301;var Q$=0,u7=1,a9=2;var T8="srgb",X8="srgb-linear";class R8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){if(this._listeners===void 0)return!1;let $=this._listeners;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){if(this._listeners===void 0)return;let Z=this._listeners[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let $=this._listeners[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,X=Z.length;W<X;W++)Z[W].call(this,J);J.target=null}}}var w6=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],h5=1234567,c9=Math.PI/180,k9=180/Math.PI;function J8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(w6[J&255]+w6[J>>8&255]+w6[J>>16&255]+w6[J>>24&255]+"-"+w6[Q&255]+w6[Q>>8&255]+"-"+w6[Q>>16&15|64]+w6[Q>>24&255]+"-"+w6[$&63|128]+w6[$>>8&255]+"-"+w6[$>>16&255]+w6[$>>24&255]+w6[Z&255]+w6[Z>>8&255]+w6[Z>>16&255]+w6[Z>>24&255]).toLowerCase()}function O6(J,Q,$){return Math.max(Q,Math.min($,J))}function mJ(J,Q){return(J%Q+Q)%Q}function jZ(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function yZ(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function n9(J,Q,$){return(1-$)*J+$*Q}function fZ(J,Q,$,Z){return n9(J,Q,1-Math.exp(-$*Z))}function vZ(J,Q=1){return Q-Math.abs(mJ(J,Q*2)-Q)}function xZ(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function hZ(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function bZ(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function gZ(J,Q){return J+Math.random()*(Q-J)}function pZ(J){return J*(0.5-Math.random())}function uZ(J){if(J!==void 0)h5=J;let Q=h5+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function mZ(J){return J*c9}function lZ(J){return J*k9}function dZ(J){return(J&J-1)===0&&J!==0}function cZ(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function nZ(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function sZ(J,Q,$,Z,W){let{cos:X,sin:Y}=Math,H=X($/2),K=Y($/2),G=X((Q+Z)/2),q=Y((Q+Z)/2),U=X((Q-Z)/2),F=Y((Q-Z)/2),N=X((Z-Q)/2),B=Y((Z-Q)/2);switch(W){case"XYX":J.set(H*q,K*U,K*F,H*G);break;case"YZY":J.set(K*F,H*q,K*U,H*G);break;case"ZXZ":J.set(K*U,K*F,H*q,H*G);break;case"XZX":J.set(H*q,K*B,K*N,H*G);break;case"YXY":J.set(K*N,H*q,K*B,H*G);break;case"ZYZ":J.set(K*B,K*N,H*q,H*G);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function t6(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function t0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var Y8={DEG2RAD:c9,RAD2DEG:k9,generateUUID:J8,clamp:O6,euclideanModulo:mJ,mapLinear:jZ,inverseLerp:yZ,lerp:n9,damp:fZ,pingpong:vZ,smoothstep:xZ,smootherstep:hZ,randInt:bZ,randFloat:gZ,randFloatSpread:pZ,seededRandom:uZ,degToRad:mZ,radToDeg:lZ,isPowerOfTwo:dZ,ceilPowerOfTwo:cZ,floorPowerOfTwo:nZ,setQuaternionFromProperEuler:sZ,normalize:t0,denormalize:t6};class B0{constructor(J=0,Q=0){B0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(O6($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,X=this.y-J.y;return this.x=W*$-X*Z+J.x,this.y=W*Z+X*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class f0{constructor(J,Q,$,Z,W,X,Y,H,K){if(f0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,X,Y,H,K)}set(J,Q,$,Z,W,X,Y,H,K){let G=this.elements;return G[0]=J,G[1]=Z,G[2]=Y,G[3]=Q,G[4]=W,G[5]=H,G[6]=$,G[7]=X,G[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,X=$[0],Y=$[3],H=$[6],K=$[1],G=$[4],q=$[7],U=$[2],F=$[5],N=$[8],B=Z[0],O=Z[3],V=Z[6],E=Z[1],z=Z[4],D=Z[7],_=Z[2],f=Z[5],L=Z[8];return W[0]=X*B+Y*E+H*_,W[3]=X*O+Y*z+H*f,W[6]=X*V+Y*D+H*L,W[1]=K*B+G*E+q*_,W[4]=K*O+G*z+q*f,W[7]=K*V+G*D+q*L,W[2]=U*B+F*E+N*_,W[5]=U*O+F*z+N*f,W[8]=U*V+F*D+N*L,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],X=J[4],Y=J[5],H=J[6],K=J[7],G=J[8];return Q*X*G-Q*Y*K-$*W*G+$*Y*H+Z*W*K-Z*X*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],X=J[4],Y=J[5],H=J[6],K=J[7],G=J[8],q=G*X-Y*K,U=Y*H-G*W,F=K*W-X*H,N=Q*q+$*U+Z*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let B=1/N;return J[0]=q*B,J[1]=(Z*K-G*$)*B,J[2]=(Y*$-Z*X)*B,J[3]=U*B,J[4]=(G*Q-Z*H)*B,J[5]=(Z*W-Y*Q)*B,J[6]=F*B,J[7]=($*H-K*Q)*B,J[8]=(X*Q-$*W)*B,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,X,Y){let H=Math.cos(W),K=Math.sin(W);return this.set($*H,$*K,-$*(H*X+K*Y)+X+J,-Z*K,Z*H,-Z*(-K*X+H*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(HJ.makeScale(J,Q)),this}rotate(J){return this.premultiply(HJ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(HJ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var HJ=new f0;function $$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function o9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function oZ(){let J=o9("canvas");return J.style.display="block",J}var b5={};function lJ(J){if(J in b5)return;b5[J]=!0,console.warn(J)}function iZ(J,Q,$){return new Promise(function(Z,W){function X(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(X,$);break;default:Z()}}setTimeout(X,$)})}var g5=new f0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),p5=new f0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),K7={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(p5),fromReference:(J)=>J.applyMatrix3(g5)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(p5),fromReference:(J)=>J.applyMatrix3(g5).convertLinearToSRGB()}},aZ=new Set(["srgb-linear","display-p3-linear"]),s0={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!aZ.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,Q,$){if(this.enabled===!1||Q===$||!Q||!$)return J;let Z=K7[Q].toReference,W=K7[$].fromReference;return W(Z(J))},fromWorkingColorSpace:function(J,Q){return this.convert(J,this._workingColorSpace,Q)},toWorkingColorSpace:function(J,Q){return this.convert(J,Q,this._workingColorSpace)},getPrimaries:function(J){return K7[J].primaries},getTransfer:function(J){if(J==="")return"linear";return K7[J].transfer}};function C9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function KJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var W9;class Z${static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(W9===void 0)W9=o9("canvas");W9.width=J.width,W9.height=J.height;let $=W9.getContext("2d");if(J instanceof ImageData)$.putImageData(J,0,0);else $.drawImage(J,0,0,J.width,J.height);Q=W9}if(Q.width>2048||Q.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),Q.toDataURL("image/jpeg",0.6);else return Q.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=o9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let X=0;X<W.length;X++)W[X]=C9(W[X]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(C9(Q[$]/255)*255);else Q[$]=C9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var rZ=0;class dJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rZ++}),this.uuid=J8(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let X=0,Y=Z.length;X<Y;X++)if(Z[X].isDataTexture)W.push(GJ(Z[X].image));else W.push(GJ(Z[X]))}else W=GJ(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function GJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return Z$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var tZ=0;class F6 extends R8{constructor(J=F6.DEFAULT_IMAGE,Q=F6.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,X=1008,Y=1023,H=1009,K=F6.DEFAULT_ANISOTROPY,G=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:tZ++}),this.uuid=J8(),this.name="",this.source=new dJ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=X,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=H,this.offset=new B0(0,0),this.repeat=new B0(1,1),this.center=new B0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=G,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}F6.DEFAULT_IMAGE=null;F6.DEFAULT_MAPPING=300;F6.DEFAULT_ANISOTROPY=1;class c0{constructor(J=0,Q=0,$=0,Z=1){c0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,X=J.elements;return this.x=X[0]*Q+X[4]*$+X[8]*Z+X[12]*W,this.y=X[1]*Q+X[5]*$+X[9]*Z+X[13]*W,this.z=X[2]*Q+X[6]*$+X[10]*Z+X[14]*W,this.w=X[3]*Q+X[7]*$+X[11]*Z+X[15]*W,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,X=0.01,Y=0.1,H=J.elements,K=H[0],G=H[4],q=H[8],U=H[1],F=H[5],N=H[9],B=H[2],O=H[6],V=H[10];if(Math.abs(G-U)<0.01&&Math.abs(q-B)<0.01&&Math.abs(N-O)<0.01){if(Math.abs(G+U)<0.1&&Math.abs(q+B)<0.1&&Math.abs(N+O)<0.1&&Math.abs(K+F+V-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(K+1)/2,D=(F+1)/2,_=(V+1)/2,f=(G+U)/4,L=(q+B)/4,j=(N+O)/4;if(z>D&&z>_)if(z<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(z),Z=f/$,W=L/$;else if(D>_)if(D<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(D),$=f/Z,W=j/Z;else if(_<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(_),$=L/W,Z=j/W;return this.set($,Z,W,Q),this}let E=Math.sqrt((O-N)*(O-N)+(q-B)*(q-B)+(U-G)*(U-G));if(Math.abs(E)<0.001)E=1;return this.x=(O-N)/E,this.y=(q-B)/E,this.z=(U-G)/E,this.w=Math.acos((K+F+V-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this.w=Math.max(J.w,Math.min(Q.w,this.w)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this.w=Math.max(J,Math.min(Q,this.w)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W$ extends R8{constructor(J=1,Q=1,$={}){super();this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=1,this.scissor=new c0(0,0,J,Q),this.scissorTest=!1,this.viewport=new c0(0,0,J,Q);let Z={width:J,height:Q,depth:1};$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},$);let W=new F6(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace);W.flipY=!1,W.generateMipmaps=$.generateMipmaps,W.internalFormat=$.internalFormat,this.textures=[];let X=$.count;for(let Y=0;Y<X;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0;this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.depthTexture=$.depthTexture,this.samples=$.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Z=J.textures.length;$<Z;$++)this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0;let Q=Object.assign({},J.texture.image);if(this.texture.source=new dJ(Q),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d6 extends W${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class cJ extends F6{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class X$ extends F6{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g6{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,X,Y){let H=$[Z+0],K=$[Z+1],G=$[Z+2],q=$[Z+3],U=W[X+0],F=W[X+1],N=W[X+2],B=W[X+3];if(Y===0){J[Q+0]=H,J[Q+1]=K,J[Q+2]=G,J[Q+3]=q;return}if(Y===1){J[Q+0]=U,J[Q+1]=F,J[Q+2]=N,J[Q+3]=B;return}if(q!==B||H!==U||K!==F||G!==N){let O=1-Y,V=H*U+K*F+G*N+q*B,E=V>=0?1:-1,z=1-V*V;if(z>Number.EPSILON){let _=Math.sqrt(z),f=Math.atan2(_,V*E);O=Math.sin(O*f)/_,Y=Math.sin(Y*f)/_}let D=Y*E;if(H=H*O+U*D,K=K*O+F*D,G=G*O+N*D,q=q*O+B*D,O===1-Y){let _=1/Math.sqrt(H*H+K*K+G*G+q*q);H*=_,K*=_,G*=_,q*=_}}J[Q]=H,J[Q+1]=K,J[Q+2]=G,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,$,Z,W,X){let Y=$[Z],H=$[Z+1],K=$[Z+2],G=$[Z+3],q=W[X],U=W[X+1],F=W[X+2],N=W[X+3];return J[Q]=Y*N+G*q+H*F-K*U,J[Q+1]=H*N+G*U+K*q-Y*F,J[Q+2]=K*N+G*F+Y*U-H*q,J[Q+3]=G*N-Y*q-H*U-K*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:X}=J,Y=Math.cos,H=Math.sin,K=Y($/2),G=Y(Z/2),q=Y(W/2),U=H($/2),F=H(Z/2),N=H(W/2);switch(X){case"XYZ":this._x=U*G*q+K*F*N,this._y=K*F*q-U*G*N,this._z=K*G*N+U*F*q,this._w=K*G*q-U*F*N;break;case"YXZ":this._x=U*G*q+K*F*N,this._y=K*F*q-U*G*N,this._z=K*G*N-U*F*q,this._w=K*G*q+U*F*N;break;case"ZXY":this._x=U*G*q-K*F*N,this._y=K*F*q+U*G*N,this._z=K*G*N+U*F*q,this._w=K*G*q-U*F*N;break;case"ZYX":this._x=U*G*q-K*F*N,this._y=K*F*q+U*G*N,this._z=K*G*N-U*F*q,this._w=K*G*q+U*F*N;break;case"YZX":this._x=U*G*q+K*F*N,this._y=K*F*q+U*G*N,this._z=K*G*N-U*F*q,this._w=K*G*q-U*F*N;break;case"XZY":this._x=U*G*q-K*F*N,this._y=K*F*q-U*G*N,this._z=K*G*N+U*F*q,this._w=K*G*q+U*F*N;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+X)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],X=Q[1],Y=Q[5],H=Q[9],K=Q[2],G=Q[6],q=Q[10],U=$+Y+q;if(U>0){let F=0.5/Math.sqrt(U+1);this._w=0.25/F,this._x=(G-H)*F,this._y=(W-K)*F,this._z=(X-Z)*F}else if($>Y&&$>q){let F=2*Math.sqrt(1+$-Y-q);this._w=(G-H)/F,this._x=0.25*F,this._y=(Z+X)/F,this._z=(W+K)/F}else if(Y>q){let F=2*Math.sqrt(1+Y-$-q);this._w=(W-K)/F,this._x=(Z+X)/F,this._y=0.25*F,this._z=(H+G)/F}else{let F=2*Math.sqrt(1+q-$-Y);this._w=(X-Z)/F,this._x=(W+K)/F,this._y=(H+G)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<Number.EPSILON)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(O6(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:X}=J,Y=Q._x,H=Q._y,K=Q._z,G=Q._w;return this._x=$*G+X*Y+Z*K-W*H,this._y=Z*G+X*H+W*Y-$*K,this._z=W*G+X*K+$*H-Z*Y,this._w=X*G-$*Y-Z*H-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,X=this._w,Y=X*J._w+$*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=X,this._x=$,this._y=Z,this._z=W,this;let H=1-Y*Y;if(H<=Number.EPSILON){let F=1-Q;return this._w=F*X+Q*this._w,this._x=F*$+Q*this._x,this._y=F*Z+Q*this._y,this._z=F*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(H),G=Math.atan2(K,Y),q=Math.sin((1-Q)*G)/K,U=Math.sin(Q*G)/K;return this._w=X*q+this._w*U,this._x=$*q+this._x*U,this._y=Z*q+this._y*U,this._z=W*q+this._z*U,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(J=0,Q=0,$=0){A.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(u5.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(u5.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,X=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*X,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*X,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*X,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,X=J.y,Y=J.z,H=J.w,K=2*(X*Z-Y*$),G=2*(Y*Q-W*Z),q=2*(W*$-X*Q);return this.x=Q+H*K+X*q-Y*G,this.y=$+H*G+Y*K-W*q,this.z=Z+H*q+W*G-X*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(Math.max(J,Math.min(Q,$)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,X=Q.x,Y=Q.y,H=Q.z;return this.x=Z*H-W*Y,this.y=W*X-$*H,this.z=$*Y-Z*X,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return qJ.copy(this).projectOnVector(J),this.sub(qJ)}reflect(J){return this.sub(qJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(O6($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var qJ=new A,u5=new g6;class R6{constructor(J=new A(1/0,1/0,1/0),Q=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(i6.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(i6.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=i6.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let X=0,Y=W.count;X<Y;X++){if(J.isMesh===!0)J.getVertexPosition(X,i6);else i6.fromBufferAttribute(W,X);i6.applyMatrix4(J.matrixWorld),this.expandByPoint(i6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();G7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();G7.copy($.boundingBox)}G7.applyMatrix4(J.matrixWorld),this.union(G7)}}let Z=J.children;for(let W=0,X=Z.length;W<X;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,i6),i6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(x9),q7.subVectors(this.max,x9),X9.subVectors(J.a,x9),Y9.subVectors(J.b,x9),H9.subVectors(J.c,x9),L8.subVectors(Y9,X9),C8.subVectors(H9,Y9),x8.subVectors(X9,H9);let Q=[0,-L8.z,L8.y,0,-C8.z,C8.y,0,-x8.z,x8.y,L8.z,0,-L8.x,C8.z,0,-C8.x,x8.z,0,-x8.x,-L8.y,L8.x,0,-C8.y,C8.x,0,-x8.y,x8.x,0];if(!UJ(Q,X9,Y9,H9,q7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!UJ(Q,X9,Y9,H9,q7))return!1;return U7.crossVectors(L8,C8),Q=[U7.x,U7.y,U7.z],UJ(Q,X9,Y9,H9,q7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,i6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(i6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return F8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),F8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),F8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),F8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),F8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),F8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),F8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),F8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(F8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var F8=[new A,new A,new A,new A,new A,new A,new A,new A],i6=new A,G7=new R6,X9=new A,Y9=new A,H9=new A,L8=new A,C8=new A,x8=new A,x9=new A,q7=new A,U7=new A,h8=new A;function UJ(J,Q,$,Z,W){for(let X=0,Y=J.length-3;X<=Y;X+=3){h8.fromArray(J,X);let H=W.x*Math.abs(h8.x)+W.y*Math.abs(h8.y)+W.z*Math.abs(h8.z),K=Q.dot(h8),G=$.dot(h8),q=Z.dot(h8);if(Math.max(-Math.max(K,G,q),Math.min(K,G,q))>H)return!1}return!0}var eZ=new R6,h9=new A,FJ=new A;class P6{constructor(J=new A,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else eZ.setFromPoints(J).getCenter($);let Z=0;for(let W=0,X=J.length;W<X;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;h9.subVectors(J,this.center);let Q=h9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(h9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else FJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(h9.copy(J.center).add(FJ)),this.expandByPoint(h9.copy(J.center).sub(FJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var V8=new A,VJ=new A,F7=new A,k8=new A,EJ=new A,V7=new A,NJ=new A;class s8{constructor(J=new A,Q=new A(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,V8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=V8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return V8.copy(this.origin).addScaledVector(this.direction,Q),V8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){VJ.copy(J).add(Q).multiplyScalar(0.5),F7.copy(Q).sub(J).normalize(),k8.copy(this.origin).sub(VJ);let W=J.distanceTo(Q)*0.5,X=-this.direction.dot(F7),Y=k8.dot(this.direction),H=-k8.dot(F7),K=k8.lengthSq(),G=Math.abs(1-X*X),q,U,F,N;if(G>0)if(q=X*H-Y,U=X*Y-H,N=W*G,q>=0)if(U>=-N)if(U<=N){let B=1/G;q*=B,U*=B,F=q*(q+X*U+2*Y)+U*(X*q+U+2*H)+K}else U=W,q=Math.max(0,-(X*U+Y)),F=-q*q+U*(U+2*H)+K;else U=-W,q=Math.max(0,-(X*U+Y)),F=-q*q+U*(U+2*H)+K;else if(U<=-N)q=Math.max(0,-(-X*W+Y)),U=q>0?-W:Math.min(Math.max(-W,-H),W),F=-q*q+U*(U+2*H)+K;else if(U<=N)q=0,U=Math.min(Math.max(-W,-H),W),F=U*(U+2*H)+K;else q=Math.max(0,-(X*W+Y)),U=q>0?W:Math.min(Math.max(-W,-H),W),F=-q*q+U*(U+2*H)+K;else U=X>0?-W:W,q=Math.max(0,-(X*U+Y)),F=-q*q+U*(U+2*H)+K;if($)$.copy(this.origin).addScaledVector(this.direction,q);if(Z)Z.copy(VJ).addScaledVector(F7,U);return F}intersectSphere(J,Q){V8.subVectors(J.center,this.origin);let $=V8.dot(this.direction),Z=V8.dot(V8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let X=Math.sqrt(W-Z),Y=$-X,H=$+X;if(H<0)return null;if(Y<0)return this.at(H,Q);return this.at(Y,Q)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,X,Y,H,K=1/this.direction.x,G=1/this.direction.y,q=1/this.direction.z,U=this.origin;if(K>=0)$=(J.min.x-U.x)*K,Z=(J.max.x-U.x)*K;else $=(J.max.x-U.x)*K,Z=(J.min.x-U.x)*K;if(G>=0)W=(J.min.y-U.y)*G,X=(J.max.y-U.y)*G;else W=(J.max.y-U.y)*G,X=(J.min.y-U.y)*G;if($>X||W>Z)return null;if(W>$||isNaN($))$=W;if(X<Z||isNaN(Z))Z=X;if(q>=0)Y=(J.min.z-U.z)*q,H=(J.max.z-U.z)*q;else Y=(J.max.z-U.z)*q,H=(J.min.z-U.z)*q;if($>H||Y>Z)return null;if(Y>$||$!==$)$=Y;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,V8)!==null}intersectTriangle(J,Q,$,Z,W){EJ.subVectors(Q,J),V7.subVectors($,J),NJ.crossVectors(EJ,V7);let X=this.direction.dot(NJ),Y;if(X>0){if(Z)return null;Y=1}else if(X<0)Y=-1,X=-X;else return null;k8.subVectors(this.origin,J);let H=Y*this.direction.dot(V7.crossVectors(k8,V7));if(H<0)return null;let K=Y*this.direction.dot(EJ.cross(k8));if(K<0)return null;if(H+K>X)return null;let G=-Y*k8.dot(NJ);if(G<0)return null;return this.at(G/X,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j0{constructor(J,Q,$,Z,W,X,Y,H,K,G,q,U,F,N,B,O){if(j0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,X,Y,H,K,G,q,U,F,N,B,O)}set(J,Q,$,Z,W,X,Y,H,K,G,q,U,F,N,B,O){let V=this.elements;return V[0]=J,V[4]=Q,V[8]=$,V[12]=Z,V[1]=W,V[5]=X,V[9]=Y,V[13]=H,V[2]=K,V[6]=G,V[10]=q,V[14]=U,V[3]=F,V[7]=N,V[11]=B,V[15]=O,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new j0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/K9.setFromMatrixColumn(J,0).length(),W=1/K9.setFromMatrixColumn(J,1).length(),X=1/K9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*X,Q[9]=$[9]*X,Q[10]=$[10]*X,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,X=Math.cos($),Y=Math.sin($),H=Math.cos(Z),K=Math.sin(Z),G=Math.cos(W),q=Math.sin(W);if(J.order==="XYZ"){let U=X*G,F=X*q,N=Y*G,B=Y*q;Q[0]=H*G,Q[4]=-H*q,Q[8]=K,Q[1]=F+N*K,Q[5]=U-B*K,Q[9]=-Y*H,Q[2]=B-U*K,Q[6]=N+F*K,Q[10]=X*H}else if(J.order==="YXZ"){let U=H*G,F=H*q,N=K*G,B=K*q;Q[0]=U+B*Y,Q[4]=N*Y-F,Q[8]=X*K,Q[1]=X*q,Q[5]=X*G,Q[9]=-Y,Q[2]=F*Y-N,Q[6]=B+U*Y,Q[10]=X*H}else if(J.order==="ZXY"){let U=H*G,F=H*q,N=K*G,B=K*q;Q[0]=U-B*Y,Q[4]=-X*q,Q[8]=N+F*Y,Q[1]=F+N*Y,Q[5]=X*G,Q[9]=B-U*Y,Q[2]=-X*K,Q[6]=Y,Q[10]=X*H}else if(J.order==="ZYX"){let U=X*G,F=X*q,N=Y*G,B=Y*q;Q[0]=H*G,Q[4]=N*K-F,Q[8]=U*K+B,Q[1]=H*q,Q[5]=B*K+U,Q[9]=F*K-N,Q[2]=-K,Q[6]=Y*H,Q[10]=X*H}else if(J.order==="YZX"){let U=X*H,F=X*K,N=Y*H,B=Y*K;Q[0]=H*G,Q[4]=B-U*q,Q[8]=N*q+F,Q[1]=q,Q[5]=X*G,Q[9]=-Y*G,Q[2]=-K*G,Q[6]=F*q+N,Q[10]=U-B*q}else if(J.order==="XZY"){let U=X*H,F=X*K,N=Y*H,B=Y*K;Q[0]=H*G,Q[4]=-q,Q[8]=K*G,Q[1]=U*q+B,Q[5]=X*G,Q[9]=F*q-N,Q[2]=N*q-F,Q[6]=Y*G,Q[10]=B*q+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(J1,J,Q1)}lookAt(J,Q,$){let Z=this.elements;if(h6.subVectors(J,Q),h6.lengthSq()===0)h6.z=1;if(h6.normalize(),D8.crossVectors($,h6),D8.lengthSq()===0){if(Math.abs($.z)===1)h6.x+=0.0001;else h6.z+=0.0001;h6.normalize(),D8.crossVectors($,h6)}return D8.normalize(),E7.crossVectors(h6,D8),Z[0]=D8.x,Z[4]=E7.x,Z[8]=h6.x,Z[1]=D8.y,Z[5]=E7.y,Z[9]=h6.y,Z[2]=D8.z,Z[6]=E7.z,Z[10]=h6.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,X=$[0],Y=$[4],H=$[8],K=$[12],G=$[1],q=$[5],U=$[9],F=$[13],N=$[2],B=$[6],O=$[10],V=$[14],E=$[3],z=$[7],D=$[11],_=$[15],f=Z[0],L=Z[4],j=Z[8],d=Z[12],C=Z[1],k=Z[5],S=Z[9],p=Z[13],n=Z[2],c=Z[6],v=Z[10],h=Z[14],i=Z[3],b=Z[7],J0=Z[11],G0=Z[15];return W[0]=X*f+Y*C+H*n+K*i,W[4]=X*L+Y*k+H*c+K*b,W[8]=X*j+Y*S+H*v+K*J0,W[12]=X*d+Y*p+H*h+K*G0,W[1]=G*f+q*C+U*n+F*i,W[5]=G*L+q*k+U*c+F*b,W[9]=G*j+q*S+U*v+F*J0,W[13]=G*d+q*p+U*h+F*G0,W[2]=N*f+B*C+O*n+V*i,W[6]=N*L+B*k+O*c+V*b,W[10]=N*j+B*S+O*v+V*J0,W[14]=N*d+B*p+O*h+V*G0,W[3]=E*f+z*C+D*n+_*i,W[7]=E*L+z*k+D*c+_*b,W[11]=E*j+z*S+D*v+_*J0,W[15]=E*d+z*p+D*h+_*G0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],X=J[1],Y=J[5],H=J[9],K=J[13],G=J[2],q=J[6],U=J[10],F=J[14],N=J[3],B=J[7],O=J[11],V=J[15];return N*(+W*H*q-Z*K*q-W*Y*U+$*K*U+Z*Y*F-$*H*F)+B*(+Q*H*F-Q*K*U+W*X*U-Z*X*F+Z*K*G-W*H*G)+O*(+Q*K*q-Q*Y*F-W*X*q+$*X*F+W*Y*G-$*K*G)+V*(-Z*Y*G-Q*H*q+Q*Y*U+Z*X*q-$*X*U+$*H*G)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],X=J[4],Y=J[5],H=J[6],K=J[7],G=J[8],q=J[9],U=J[10],F=J[11],N=J[12],B=J[13],O=J[14],V=J[15],E=q*O*K-B*U*K+B*H*F-Y*O*F-q*H*V+Y*U*V,z=N*U*K-G*O*K-N*H*F+X*O*F+G*H*V-X*U*V,D=G*B*K-N*q*K+N*Y*F-X*B*F-G*Y*V+X*q*V,_=N*q*H-G*B*H-N*Y*U+X*B*U+G*Y*O-X*q*O,f=Q*E+$*z+Z*D+W*_;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/f;return J[0]=E*L,J[1]=(B*U*W-q*O*W-B*Z*F+$*O*F+q*Z*V-$*U*V)*L,J[2]=(Y*O*W-B*H*W+B*Z*K-$*O*K-Y*Z*V+$*H*V)*L,J[3]=(q*H*W-Y*U*W-q*Z*K+$*U*K+Y*Z*F-$*H*F)*L,J[4]=z*L,J[5]=(G*O*W-N*U*W+N*Z*F-Q*O*F-G*Z*V+Q*U*V)*L,J[6]=(N*H*W-X*O*W-N*Z*K+Q*O*K+X*Z*V-Q*H*V)*L,J[7]=(X*U*W-G*H*W+G*Z*K-Q*U*K-X*Z*F+Q*H*F)*L,J[8]=D*L,J[9]=(N*q*W-G*B*W-N*$*F+Q*B*F+G*$*V-Q*q*V)*L,J[10]=(X*B*W-N*Y*W+N*$*K-Q*B*K-X*$*V+Q*Y*V)*L,J[11]=(G*Y*W-X*q*W-G*$*K+Q*q*K+X*$*F-Q*Y*F)*L,J[12]=_*L,J[13]=(G*B*Z-N*q*Z+N*$*U-Q*B*U-G*$*O+Q*q*O)*L,J[14]=(N*Y*Z-X*B*Z-N*$*H+Q*B*H+X*$*O-Q*Y*O)*L,J[15]=(X*q*Z-G*Y*Z+G*$*H-Q*q*H-X*$*U+Q*Y*U)*L,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,X=J.x,Y=J.y,H=J.z,K=W*X,G=W*Y;return this.set(K*X+$,K*Y-Z*H,K*H+Z*Y,0,K*Y+Z*H,G*Y+$,G*H-Z*X,0,K*H-Z*Y,G*H+Z*X,W*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,X){return this.set(1,$,W,0,J,1,X,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,X=Q._y,Y=Q._z,H=Q._w,K=W+W,G=X+X,q=Y+Y,U=W*K,F=W*G,N=W*q,B=X*G,O=X*q,V=Y*q,E=H*K,z=H*G,D=H*q,_=$.x,f=$.y,L=$.z;return Z[0]=(1-(B+V))*_,Z[1]=(F+D)*_,Z[2]=(N-z)*_,Z[3]=0,Z[4]=(F-D)*f,Z[5]=(1-(U+V))*f,Z[6]=(O+E)*f,Z[7]=0,Z[8]=(N+z)*L,Z[9]=(O-E)*L,Z[10]=(1-(U+B))*L,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=K9.set(Z[0],Z[1],Z[2]).length(),X=K9.set(Z[4],Z[5],Z[6]).length(),Y=K9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],a6.copy(this);let K=1/W,G=1/X,q=1/Y;return a6.elements[0]*=K,a6.elements[1]*=K,a6.elements[2]*=K,a6.elements[4]*=G,a6.elements[5]*=G,a6.elements[6]*=G,a6.elements[8]*=q,a6.elements[9]*=q,a6.elements[10]*=q,Q.setFromRotationMatrix(a6),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,W,X,Y=2000){let H=this.elements,K=2*W/(Q-J),G=2*W/($-Z),q=(Q+J)/(Q-J),U=($+Z)/($-Z),F,N;if(Y===2000)F=-(X+W)/(X-W),N=-2*X*W/(X-W);else if(Y===2001)F=-X/(X-W),N=-X*W/(X-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=K,H[4]=0,H[8]=q,H[12]=0,H[1]=0,H[5]=G,H[9]=U,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=N,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,W,X,Y=2000){let H=this.elements,K=1/(Q-J),G=1/($-Z),q=1/(X-W),U=(Q+J)*K,F=($+Z)*G,N,B;if(Y===2000)N=(X+W)*q,B=-2*q;else if(Y===2001)N=W*q,B=-1*q;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=2*K,H[4]=0,H[8]=0,H[12]=-U,H[1]=0,H[5]=2*G,H[9]=0,H[13]=-F,H[2]=0,H[6]=0,H[10]=B,H[14]=-N,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var K9=new A,a6=new j0,J1=new A(0,0,0),Q1=new A(1,1,1),D8=new A,E7=new A,h6=new A,m5=new j0,l5=new g6;class W8{constructor(J=0,Q=0,$=0,Z=W8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[1],K=Z[5],G=Z[9],q=Z[2],U=Z[6],F=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(O6(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-G,F),this._z=Math.atan2(-X,W);else this._x=Math.atan2(U,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-O6(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(Y,F),this._z=Math.atan2(H,K);else this._y=Math.atan2(-q,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(O6(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-q,F),this._z=Math.atan2(-X,K);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-O6(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(U,F),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-X,K);break;case"YZX":if(this._z=Math.asin(O6(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-G,K),this._y=Math.atan2(-q,W);else this._x=0,this._y=Math.atan2(Y,F);break;case"XZY":if(this._z=Math.asin(-O6(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(U,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-G,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return m5.makeRotationFromQuaternion(J),this.setFromRotationMatrix(m5,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return l5.setFromEuler(this),this.setFromQuaternion(l5,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}W8.DEFAULT_ORDER="XYZ";class nJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var $1=0,d5=new A,G9=new g6,E8=new j0,N7=new A,b9=new A,Z1=new A,W1=new g6,c5=new A(1,0,0),n5=new A(0,1,0),s5=new A(0,0,1),o5={type:"added"},X1={type:"removed"},q9={type:"childadded",child:null},OJ={type:"childremoved",child:null};class $6 extends R8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=J8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$6.DEFAULT_UP.clone();let J=new A,Q=new W8,$=new g6,Z=new A(1,1,1);function W(){$.setFromEuler(Q,!1)}function X(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(X),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new j0},normalMatrix:{value:new f0}}),this.matrix=new j0,this.matrixWorld=new j0,this.matrixAutoUpdate=$6.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return G9.setFromAxisAngle(J,Q),this.quaternion.multiply(G9),this}rotateOnWorldAxis(J,Q){return G9.setFromAxisAngle(J,Q),this.quaternion.premultiply(G9),this}rotateX(J){return this.rotateOnAxis(c5,J)}rotateY(J){return this.rotateOnAxis(n5,J)}rotateZ(J){return this.rotateOnAxis(s5,J)}translateOnAxis(J,Q){return d5.copy(J).applyQuaternion(this.quaternion),this.position.add(d5.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(c5,J)}translateY(J){return this.translateOnAxis(n5,J)}translateZ(J){return this.translateOnAxis(s5,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(E8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)N7.copy(J);else N7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),b9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)E8.lookAt(b9,N7,this.up);else E8.lookAt(N7,b9,this.up);if(this.quaternion.setFromRotationMatrix(E8),Z)E8.extractRotation(Z.matrixWorld),G9.setFromRotationMatrix(E8),this.quaternion.premultiply(G9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(o5),q9.child=J,this.dispatchEvent(q9),q9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(X1),OJ.child=J,this.dispatchEvent(OJ),OJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),E8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),E8.multiply(J.parent.matrixWorld);return J.applyMatrix4(E8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(o5),q9.child=J,this.dispatchEvent(q9),q9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let X=this.children[$].getObjectByProperty(J,Q);if(X!==void 0)return X}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,X=Z.length;W<X;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(b9,J,Z1),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(b9,W1,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,X=Z.length;W<X;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.visibility=this._visibility,Z.active=this._active,Z.bounds=this._bounds.map((Y)=>({boxInitialized:Y.boxInitialized,boxMin:Y.box.min.toArray(),boxMax:Y.box.max.toArray(),sphereInitialized:Y.sphereInitialized,sphereRadius:Y.sphere.radius,sphereCenter:Y.sphere.center.toArray()})),Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.geometryCount=this._geometryCount,Z.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere={center:Z.boundingSphere.center.toArray(),radius:Z.boundingSphere.radius};if(this.boundingBox!==null)Z.boundingBox={min:Z.boundingBox.min.toArray(),max:Z.boundingBox.max.toArray()}}function W(Y,H){if(Y[H.uuid]===void 0)Y[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let H=Y.shapes;if(Array.isArray(H))for(let K=0,G=H.length;K<G;K++){let q=H[K];W(J.shapes,q)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let H=0,K=this.material.length;H<K;H++)Y.push(W(J.materials,this.material[H]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let H=this.animations[Y];Z.animations.push(W(J.animations,H))}}if(Q){let Y=X(J.geometries),H=X(J.materials),K=X(J.textures),G=X(J.images),q=X(J.shapes),U=X(J.skeletons),F=X(J.animations),N=X(J.nodes);if(Y.length>0)$.geometries=Y;if(H.length>0)$.materials=H;if(K.length>0)$.textures=K;if(G.length>0)$.images=G;if(q.length>0)$.shapes=q;if(U.length>0)$.skeletons=U;if(F.length>0)$.animations=F;if(N.length>0)$.nodes=N}return $.object=Z,$;function X(Y){let H=[];for(let K in Y){let G=Y[K];delete G.metadata,H.push(G)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}$6.DEFAULT_UP=new A(0,1,0);$6.DEFAULT_MATRIX_AUTO_UPDATE=!0;$6.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var r6=new A,N8=new A,BJ=new A,O8=new A,U9=new A,F9=new A,i5=new A,RJ=new A,zJ=new A,MJ=new A;class Z8{constructor(J=new A,Q=new A,$=new A){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),r6.subVectors(J,Q),Z.cross(r6);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){r6.subVectors(Z,Q),N8.subVectors($,Q),BJ.subVectors(J,Q);let X=r6.dot(r6),Y=r6.dot(N8),H=r6.dot(BJ),K=N8.dot(N8),G=N8.dot(BJ),q=X*K-Y*Y;if(q===0)return W.set(0,0,0),null;let U=1/q,F=(K*H-Y*G)*U,N=(X*G-Y*H)*U;return W.set(1-F-N,N,F)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,O8)===null)return!1;return O8.x>=0&&O8.y>=0&&O8.x+O8.y<=1}static getInterpolation(J,Q,$,Z,W,X,Y,H){if(this.getBarycoord(J,Q,$,Z,O8)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,O8.x),H.addScaledVector(X,O8.y),H.addScaledVector(Y,O8.z),H}static isFrontFacing(J,Q,$,Z){return r6.subVectors($,Q),N8.subVectors(J,Q),r6.cross(N8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return r6.subVectors(this.c,this.b),N8.subVectors(this.a,this.b),r6.cross(N8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return Z8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return Z8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return Z8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return Z8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return Z8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,X,Y;U9.subVectors(Z,$),F9.subVectors(W,$),RJ.subVectors(J,$);let H=U9.dot(RJ),K=F9.dot(RJ);if(H<=0&&K<=0)return Q.copy($);zJ.subVectors(J,Z);let G=U9.dot(zJ),q=F9.dot(zJ);if(G>=0&&q<=G)return Q.copy(Z);let U=H*q-G*K;if(U<=0&&H>=0&&G<=0)return X=H/(H-G),Q.copy($).addScaledVector(U9,X);MJ.subVectors(J,W);let F=U9.dot(MJ),N=F9.dot(MJ);if(N>=0&&F<=N)return Q.copy(W);let B=F*K-H*N;if(B<=0&&K>=0&&N<=0)return Y=K/(K-N),Q.copy($).addScaledVector(F9,Y);let O=G*N-F*q;if(O<=0&&q-G>=0&&F-N>=0)return i5.subVectors(W,Z),Y=(q-G)/(q-G+(F-N)),Q.copy(Z).addScaledVector(i5,Y);let V=1/(O+B+U);return X=B*V,Y=U*V,Q.copy($).addScaledVector(U9,X).addScaledVector(F9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var Y$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},w8={h:0,s:0,l:0},O7={h:0,s:0,l:0};function LJ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class D0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,s0.toWorkingColorSpace(this,Q),this}setRGB(J,Q,$,Z=s0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,s0.toWorkingColorSpace(this,Z),this}setHSL(J,Q,$,Z=s0.workingColorSpace){if(J=mJ(J,1),Q=O6(Q,0,1),$=O6($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,X=2*$-W;this.r=LJ(X,W,J+0.3333333333333333),this.g=LJ(X,W,J),this.b=LJ(X,W,J-0.3333333333333333)}return s0.toWorkingColorSpace(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,X=Z[1],Y=Z[2];switch(X){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],X=W.length;if(X===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(X===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=Y$[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=C9(J.r),this.g=C9(J.g),this.b=C9(J.b),this}copyLinearToSRGB(J){return this.r=KJ(J.r),this.g=KJ(J.g),this.b=KJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return s0.fromWorkingColorSpace(_6.copy(this),J),Math.round(O6(_6.r*255,0,255))*65536+Math.round(O6(_6.g*255,0,255))*256+Math.round(O6(_6.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=s0.workingColorSpace){s0.fromWorkingColorSpace(_6.copy(this),Q);let{r:$,g:Z,b:W}=_6,X=Math.max($,Z,W),Y=Math.min($,Z,W),H,K,G=(Y+X)/2;if(Y===X)H=0,K=0;else{let q=X-Y;switch(K=G<=0.5?q/(X+Y):q/(2-X-Y),X){case $:H=(Z-W)/q+(Z<W?6:0);break;case Z:H=(W-$)/q+2;break;case W:H=($-Z)/q+4;break}H/=6}return J.h=H,J.s=K,J.l=G,J}getRGB(J,Q=s0.workingColorSpace){return s0.fromWorkingColorSpace(_6.copy(this),Q),J.r=_6.r,J.g=_6.g,J.b=_6.b,J}getStyle(J="srgb"){s0.fromWorkingColorSpace(_6.copy(this),J);let{r:Q,g:$,b:Z}=_6;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(w8),this.setHSL(w8.h+J,w8.s+Q,w8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(w8),J.getHSL(O7);let $=n9(w8.h,O7.h,Q),Z=n9(w8.s,O7.s,Q),W=n9(w8.l,O7.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var _6=new D0;D0.NAMES=Y$;var Y1=0;class c6 extends R8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=J8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new D0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let X=[];for(let Y in W){let H=W[Y];delete H.metadata,X.push(H)}return X}if(Q){let W=Z(J.textures),X=Z(J.images);if(W.length>0)$.textures=W;if(X.length>0)$.images=X}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class p6 extends c6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new D0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new W8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var U6=new A,B7=new B0;class B6{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return lJ("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)B7.fromBufferAttribute(this,Q),B7.applyMatrix3(J),this.setXY(Q,B7.x,B7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.applyMatrix3(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.applyMatrix4(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.applyNormalMatrix(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)U6.fromBufferAttribute(this,Q),U6.transformDirection(J),this.setXYZ(Q,U6.x,U6.y,U6.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=t6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=t0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=t6(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=t6(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=t6(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=t6(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),$=t0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array),W=t0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class sJ extends B6{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class oJ extends B6{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class j6 extends B6{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var H1=0,l6=new j0,CJ=new $6,V9=new A,b6=new R6,g9=new R6,N6=new A;class f6 extends R8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=J8(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new(($$(J))?oJ:sJ)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new f0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return l6.makeRotationFromQuaternion(J),this.applyMatrix4(l6),this}rotateX(J){return l6.makeRotationX(J),this.applyMatrix4(l6),this}rotateY(J){return l6.makeRotationY(J),this.applyMatrix4(l6),this}rotateZ(J){return l6.makeRotationZ(J),this.applyMatrix4(l6),this}translate(J,Q,$){return l6.makeTranslation(J,Q,$),this.applyMatrix4(l6),this}scale(J,Q,$){return l6.makeScale(J,Q,$),this.applyMatrix4(l6),this}lookAt(J){return CJ.lookAt(J),CJ.updateMatrix(),this.applyMatrix4(CJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(V9).negate(),this.translate(V9.x,V9.y,V9.z),this}setFromPoints(J){let Q=[];for(let $=0,Z=J.length;$<Z;$++){let W=J[$];Q.push(W.x,W.y,W.z||0)}return this.setAttribute("position",new j6(Q,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new R6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(b6.setFromBufferAttribute(W),this.morphTargetsRelative)N6.addVectors(this.boundingBox.min,b6.min),this.boundingBox.expandByPoint(N6),N6.addVectors(this.boundingBox.max,b6.max),this.boundingBox.expandByPoint(N6);else this.boundingBox.expandByPoint(b6.min),this.boundingBox.expandByPoint(b6.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new P6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(J){let $=this.boundingSphere.center;if(b6.setFromBufferAttribute(J),Q)for(let W=0,X=Q.length;W<X;W++){let Y=Q[W];if(g9.setFromBufferAttribute(Y),this.morphTargetsRelative)N6.addVectors(b6.min,g9.min),b6.expandByPoint(N6),N6.addVectors(b6.max,g9.max),b6.expandByPoint(N6);else b6.expandByPoint(g9.min),b6.expandByPoint(g9.max)}b6.getCenter($);let Z=0;for(let W=0,X=J.count;W<X;W++)N6.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(N6));if(Q)for(let W=0,X=Q.length;W<X;W++){let Y=Q[W],H=this.morphTargetsRelative;for(let K=0,G=Y.count;K<G;K++){if(N6.fromBufferAttribute(Y,K),H)V9.fromBufferAttribute(J,K),N6.add(V9);Z=Math.max(Z,$.distanceToSquared(N6))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new B6(new Float32Array(4*$.count),4));let X=this.getAttribute("tangent"),Y=[],H=[];for(let j=0;j<$.count;j++)Y[j]=new A,H[j]=new A;let K=new A,G=new A,q=new A,U=new B0,F=new B0,N=new B0,B=new A,O=new A;function V(j,d,C){K.fromBufferAttribute($,j),G.fromBufferAttribute($,d),q.fromBufferAttribute($,C),U.fromBufferAttribute(W,j),F.fromBufferAttribute(W,d),N.fromBufferAttribute(W,C),G.sub(K),q.sub(K),F.sub(U),N.sub(U);let k=1/(F.x*N.y-N.x*F.y);if(!isFinite(k))return;B.copy(G).multiplyScalar(N.y).addScaledVector(q,-F.y).multiplyScalar(k),O.copy(q).multiplyScalar(F.x).addScaledVector(G,-N.x).multiplyScalar(k),Y[j].add(B),Y[d].add(B),Y[C].add(B),H[j].add(O),H[d].add(O),H[C].add(O)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let j=0,d=E.length;j<d;++j){let C=E[j],k=C.start,S=C.count;for(let p=k,n=k+S;p<n;p+=3)V(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let z=new A,D=new A,_=new A,f=new A;function L(j){_.fromBufferAttribute(Z,j),f.copy(_);let d=Y[j];z.copy(d),z.sub(_.multiplyScalar(_.dot(d))).normalize(),D.crossVectors(f,d);let k=D.dot(H[j])<0?-1:1;X.setXYZW(j,z.x,z.y,z.z,k)}for(let j=0,d=E.length;j<d;++j){let C=E[j],k=C.start,S=C.count;for(let p=k,n=k+S;p<n;p+=3)L(J.getX(p+0)),L(J.getX(p+1)),L(J.getX(p+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new B6(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let U=0,F=$.count;U<F;U++)$.setXYZ(U,0,0,0);let Z=new A,W=new A,X=new A,Y=new A,H=new A,K=new A,G=new A,q=new A;if(J)for(let U=0,F=J.count;U<F;U+=3){let N=J.getX(U+0),B=J.getX(U+1),O=J.getX(U+2);Z.fromBufferAttribute(Q,N),W.fromBufferAttribute(Q,B),X.fromBufferAttribute(Q,O),G.subVectors(X,W),q.subVectors(Z,W),G.cross(q),Y.fromBufferAttribute($,N),H.fromBufferAttribute($,B),K.fromBufferAttribute($,O),Y.add(G),H.add(G),K.add(G),$.setXYZ(N,Y.x,Y.y,Y.z),$.setXYZ(B,H.x,H.y,H.z),$.setXYZ(O,K.x,K.y,K.z)}else for(let U=0,F=Q.count;U<F;U+=3)Z.fromBufferAttribute(Q,U+0),W.fromBufferAttribute(Q,U+1),X.fromBufferAttribute(Q,U+2),G.subVectors(X,W),q.subVectors(Z,W),G.cross(q),$.setXYZ(U+0,G.x,G.y,G.z),$.setXYZ(U+1,G.x,G.y,G.z),$.setXYZ(U+2,G.x,G.y,G.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)N6.fromBufferAttribute(J,Q),N6.normalize(),J.setXYZ(Q,N6.x,N6.y,N6.z)}toNonIndexed(){function J(Y,H){let{array:K,itemSize:G,normalized:q}=Y,U=new K.constructor(H.length*G),F=0,N=0;for(let B=0,O=H.length;B<O;B++){if(Y.isInterleavedBufferAttribute)F=H[B]*Y.data.stride+Y.offset;else F=H[B]*G;for(let V=0;V<G;V++)U[N++]=K[F++]}return new B6(U,G,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new f6,$=this.index.array,Z=this.attributes;for(let Y in Z){let H=Z[Y],K=J(H,$);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let H=[],K=W[Y];for(let G=0,q=K.length;G<q;G++){let U=K[G],F=J(U,$);H.push(F)}Q.morphAttributes[Y]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;for(let Y=0,H=X.length;Y<H;Y++){let K=X[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let K in H)if(H[K]!==void 0)J[K]=H[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let K=$[H];J.data.attributes[H]=K.toJSON(J.data)}let Z={},W=!1;for(let H in this.morphAttributes){let K=this.morphAttributes[H],G=[];for(let q=0,U=K.length;q<U;q++){let F=K[q];G.push(F.toJSON(J.data))}if(G.length>0)Z[H]=G,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;if(X.length>0)J.data.groups=JSON.parse(JSON.stringify(X));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere={center:Y.center.toArray(),radius:Y.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone(Q));let Z=J.attributes;for(let K in Z){let G=Z[K];this.setAttribute(K,G.clone(Q))}let W=J.morphAttributes;for(let K in W){let G=[],q=W[K];for(let U=0,F=q.length;U<F;U++)G.push(q[U].clone(Q));this.morphAttributes[K]=G}this.morphTargetsRelative=J.morphTargetsRelative;let X=J.groups;for(let K=0,G=X.length;K<G;K++){let q=X[K];this.addGroup(q.start,q.count,q.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var a5=new j0,b8=new s8,R7=new P6,r5=new A,E9=new A,N9=new A,O9=new A,kJ=new A,z7=new A,M7=new B0,L7=new B0,C7=new B0,t5=new A,e5=new A,JQ=new A,k7=new A,D7=new A;class n0 extends $6{constructor(J=new f6,Q=new p6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,X=Z.length;W<X;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,X=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){z7.set(0,0,0);for(let H=0,K=W.length;H<K;H++){let G=Y[H],q=W[H];if(G===0)continue;if(kJ.fromBufferAttribute(q,J),X)z7.addScaledVector(kJ,G);else z7.addScaledVector(kJ.sub(Q),G)}Q.add(z7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(R7.copy($.boundingSphere),R7.applyMatrix4(W),b8.copy(J.ray).recast(J.near),R7.containsPoint(b8.origin)===!1){if(b8.intersectSphere(R7,r5)===null)return;if(b8.origin.distanceToSquared(r5)>(J.far-J.near)**2)return}if(a5.copy(W).invert(),b8.copy(J.ray).applyMatrix4(a5),$.boundingBox!==null){if(b8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,b8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,X=this.material,Y=W.index,H=W.attributes.position,K=W.attributes.uv,G=W.attributes.uv1,q=W.attributes.normal,U=W.groups,F=W.drawRange;if(Y!==null)if(Array.isArray(X))for(let N=0,B=U.length;N<B;N++){let O=U[N],V=X[O.materialIndex],E=Math.max(O.start,F.start),z=Math.min(Y.count,Math.min(O.start+O.count,F.start+F.count));for(let D=E,_=z;D<_;D+=3){let f=Y.getX(D),L=Y.getX(D+1),j=Y.getX(D+2);if(Z=w7(this,V,J,$,K,G,q,f,L,j),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=O.materialIndex,Q.push(Z)}}else{let N=Math.max(0,F.start),B=Math.min(Y.count,F.start+F.count);for(let O=N,V=B;O<V;O+=3){let E=Y.getX(O),z=Y.getX(O+1),D=Y.getX(O+2);if(Z=w7(this,X,J,$,K,G,q,E,z,D),Z)Z.faceIndex=Math.floor(O/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(X))for(let N=0,B=U.length;N<B;N++){let O=U[N],V=X[O.materialIndex],E=Math.max(O.start,F.start),z=Math.min(H.count,Math.min(O.start+O.count,F.start+F.count));for(let D=E,_=z;D<_;D+=3){let f=D,L=D+1,j=D+2;if(Z=w7(this,V,J,$,K,G,q,f,L,j),Z)Z.faceIndex=Math.floor(D/3),Z.face.materialIndex=O.materialIndex,Q.push(Z)}}else{let N=Math.max(0,F.start),B=Math.min(H.count,F.start+F.count);for(let O=N,V=B;O<V;O+=3){let E=O,z=O+1,D=O+2;if(Z=w7(this,X,J,$,K,G,q,E,z,D),Z)Z.faceIndex=Math.floor(O/3),Q.push(Z)}}}}function K1(J,Q,$,Z,W,X,Y,H){let K;if(Q.side===1)K=Z.intersectTriangle(Y,X,W,!0,H);else K=Z.intersectTriangle(W,X,Y,Q.side===0,H);if(K===null)return null;D7.copy(H),D7.applyMatrix4(J.matrixWorld);let G=$.ray.origin.distanceTo(D7);if(G<$.near||G>$.far)return null;return{distance:G,point:D7.clone(),object:J}}function w7(J,Q,$,Z,W,X,Y,H,K,G){J.getVertexPosition(H,E9),J.getVertexPosition(K,N9),J.getVertexPosition(G,O9);let q=K1(J,Q,$,Z,E9,N9,O9,k7);if(q){if(W)M7.fromBufferAttribute(W,H),L7.fromBufferAttribute(W,K),C7.fromBufferAttribute(W,G),q.uv=Z8.getInterpolation(k7,E9,N9,O9,M7,L7,C7,new B0);if(X)M7.fromBufferAttribute(X,H),L7.fromBufferAttribute(X,K),C7.fromBufferAttribute(X,G),q.uv1=Z8.getInterpolation(k7,E9,N9,O9,M7,L7,C7,new B0);if(Y){if(t5.fromBufferAttribute(Y,H),e5.fromBufferAttribute(Y,K),JQ.fromBufferAttribute(Y,G),q.normal=Z8.getInterpolation(k7,E9,N9,O9,t5,e5,JQ,new A),q.normal.dot(Z.direction)>0)q.normal.multiplyScalar(-1)}let U={a:H,b:K,c:G,normal:new A,materialIndex:0};Z8.getNormal(E9,N9,O9,U.normal),q.face=U}return q}class o8 extends f6{constructor(J=1,Q=1,$=1,Z=1,W=1,X=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:X};let Y=this;Z=Math.floor(Z),W=Math.floor(W),X=Math.floor(X);let H=[],K=[],G=[],q=[],U=0,F=0;N("z","y","x",-1,-1,$,Q,J,X,W,0),N("z","y","x",1,-1,$,Q,-J,X,W,1),N("x","z","y",1,1,J,$,Q,Z,X,2),N("x","z","y",1,-1,J,$,-Q,Z,X,3),N("x","y","z",1,-1,J,Q,$,Z,W,4),N("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(H),this.setAttribute("position",new j6(K,3)),this.setAttribute("normal",new j6(G,3)),this.setAttribute("uv",new j6(q,2));function N(B,O,V,E,z,D,_,f,L,j,d){let C=D/L,k=_/j,S=D/2,p=_/2,n=f/2,c=L+1,v=j+1,h=0,i=0,b=new A;for(let J0=0;J0<v;J0++){let G0=J0*k-p;for(let M0=0;M0<c;M0++){let y0=M0*C-S;b[B]=y0*E,b[O]=G0*z,b[V]=n,K.push(b.x,b.y,b.z),b[B]=0,b[O]=0,b[V]=f>0?1:-1,G.push(b.x,b.y,b.z),q.push(M0/L),q.push(1-J0/j),h+=1}}for(let J0=0;J0<j;J0++)for(let G0=0;G0<L;G0++){let M0=U+G0+c*J0,y0=U+G0+c*(J0+1),o=U+(G0+1)+c*(J0+1),W0=U+(G0+1)+c*J0;H.push(M0,y0,W0),H.push(y0,o,W0),i+=6}Y.addGroup(F,i,d),F+=i,U+=h}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function D9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function T6(J){let Q={};for(let $=0;$<J.length;$++){let Z=D9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function G1(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function H$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return s0.workingColorSpace}var m7={clone:D9,merge:T6},q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class y6 extends c6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=U1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=D9(J.uniforms),this.uniformsGroups=G1(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let X=this.uniforms[Z].value;if(X&&X.isTexture)Q.uniforms[Z]={type:"t",value:X.toJSON(J).uuid};else if(X&&X.isColor)Q.uniforms[Z]={type:"c",value:X.getHex()};else if(X&&X.isVector2)Q.uniforms[Z]={type:"v2",value:X.toArray()};else if(X&&X.isVector3)Q.uniforms[Z]={type:"v3",value:X.toArray()};else if(X&&X.isVector4)Q.uniforms[Z]={type:"v4",value:X.toArray()};else if(X&&X.isMatrix3)Q.uniforms[Z]={type:"m3",value:X.toArray()};else if(X&&X.isMatrix4)Q.uniforms[Z]={type:"m4",value:X.toArray()};else Q.uniforms[Z]={value:X}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class iJ extends $6{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new j0,this.projectionMatrix=new j0,this.projectionMatrixInverse=new j0,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var _8=new A,QQ=new B0,$Q=new B0;class I6 extends iJ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=k9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(c9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return k9*2*Math.atan(Math.tan(c9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){_8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(_8.x,_8.y).multiplyScalar(-J/_8.z),_8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(_8.x,_8.y).multiplyScalar(-J/_8.z)}getViewSize(J,Q){return this.getViewBounds(J,QQ,$Q),Q.subVectors($Q,QQ)}setViewOffset(J,Q,$,Z,W,X){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(c9*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,X=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:K}=X;W+=X.offsetX*Z/H,Q-=X.offsetY*$/K,Z*=X.width/H,$*=X.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var B9=-90,R9=1;class K$ extends $6{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new I6(B9,R9,J,Q);Z.layers=this.layers,this.add(Z);let W=new I6(B9,R9,J,Q);W.layers=this.layers,this.add(W);let X=new I6(B9,R9,J,Q);X.layers=this.layers,this.add(X);let Y=new I6(B9,R9,J,Q);Y.layers=this.layers,this.add(Y);let H=new I6(B9,R9,J,Q);H.layers=this.layers,this.add(H);let K=new I6(B9,R9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,X,Y,H]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),X.up.set(0,0,1),X.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),X.up.set(0,0,-1),X.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,X,Y,H,K,G]=this.children,q=J.getRenderTarget(),U=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),N=J.xr.enabled;J.xr.enabled=!1;let B=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,X),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,H),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=B,J.setRenderTarget($,5,Z),J.render(Q,G),J.setRenderTarget(q,U,F),J.xr.enabled=N,$.texture.needsPMREMUpdate=!0}}class aJ extends F6{constructor(J,Q,$,Z,W,X,Y,H,K,G){J=J!==void 0?J:[],Q=Q!==void 0?Q:301;super(J,Q,$,Z,W,X,Y,H,K,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class G$ extends d6{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new aJ(Z,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new o8(5,5,5),W=new y6({name:"CubemapFromEquirect",uniforms:D9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let X=new n0(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new K$(1,10,this).update(J,X),Q.minFilter=Y,X.geometry.dispose(),X.material.dispose(),this}clear(J,Q,$,Z){let W=J.getRenderTarget();for(let X=0;X<6;X++)J.setRenderTarget(this,X),J.clear(Q,$,Z);J.setRenderTarget(W)}}var DJ=new A,F1=new A,V1=new f0;class $8{constructor(J=new A(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=DJ.subVectors($,Q).cross(F1.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(DJ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||V1.getNormalMatrix(J),Z=this.coplanarPoint(DJ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var g8=new P6,_7=new A;class l7{constructor(J=new $8,Q=new $8,$=new $8,Z=new $8,W=new $8,X=new $8){this.planes=[J,Q,$,Z,W,X]}set(J,Q,$,Z,W,X){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(X),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000){let $=this.planes,Z=J.elements,W=Z[0],X=Z[1],Y=Z[2],H=Z[3],K=Z[4],G=Z[5],q=Z[6],U=Z[7],F=Z[8],N=Z[9],B=Z[10],O=Z[11],V=Z[12],E=Z[13],z=Z[14],D=Z[15];if($[0].setComponents(H-W,U-K,O-F,D-V).normalize(),$[1].setComponents(H+W,U+K,O+F,D+V).normalize(),$[2].setComponents(H+X,U+G,O+N,D+E).normalize(),$[3].setComponents(H-X,U-G,O-N,D-E).normalize(),$[4].setComponents(H-Y,U-q,O-B,D-z).normalize(),Q===2000)$[5].setComponents(H+Y,U+q,O+B,D+z).normalize();else if(Q===2001)$[5].setComponents(Y,q,B,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();g8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();g8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(g8)}intersectsSprite(J){return g8.center.set(0,0,0),g8.radius=0.7071067811865476,g8.applyMatrix4(J.matrixWorld),this.intersectsSphere(g8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(_7.x=Z.normal.x>0?J.max.x:J.min.x,_7.y=Z.normal.y>0?J.max.y:J.min.y,_7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(_7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function q$(){let J=null,Q=!1,$=null,Z=null;function W(X,Y){$(X,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(X){$=X},setContext:function(X){J=X}}}function E1(J){let Q=new WeakMap;function $(H,K){let{array:G,usage:q}=H,U=G.byteLength,F=J.createBuffer();J.bindBuffer(K,F),J.bufferData(K,G,q),H.onUploadCallback();let N;if(G instanceof Float32Array)N=J.FLOAT;else if(G instanceof Uint16Array)if(H.isFloat16BufferAttribute)N=J.HALF_FLOAT;else N=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)N=J.SHORT;else if(G instanceof Uint32Array)N=J.UNSIGNED_INT;else if(G instanceof Int32Array)N=J.INT;else if(G instanceof Int8Array)N=J.BYTE;else if(G instanceof Uint8Array)N=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)N=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:F,type:N,bytesPerElement:G.BYTES_PER_ELEMENT,version:H.version,size:U}}function Z(H,K,G){let{array:q,_updateRange:U,updateRanges:F}=K;if(J.bindBuffer(G,H),U.count===-1&&F.length===0)J.bufferSubData(G,0,q);if(F.length!==0){for(let N=0,B=F.length;N<B;N++){let O=F[N];J.bufferSubData(G,O.start*q.BYTES_PER_ELEMENT,q,O.start,O.count)}K.clearUpdateRanges()}if(U.count!==-1)J.bufferSubData(G,U.offset*q.BYTES_PER_ELEMENT,q,U.offset,U.count),U.count=-1;K.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function X(H){if(H.isInterleavedBufferAttribute)H=H.data;let K=Q.get(H);if(K)J.deleteBuffer(K.buffer),Q.delete(H)}function Y(H,K){if(H.isGLBufferAttribute){let q=Q.get(H);if(!q||q.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}if(H.isInterleavedBufferAttribute)H=H.data;let G=Q.get(H);if(G===void 0)Q.set(H,$(H,K));else if(G.version<H.version){if(G.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(G.buffer,H,K),G.version=H.version}}return{get:W,remove:X,update:Y}}class I9 extends f6{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,X=Q/2,Y=Math.floor($),H=Math.floor(Z),K=Y+1,G=H+1,q=J/Y,U=Q/H,F=[],N=[],B=[],O=[];for(let V=0;V<G;V++){let E=V*U-X;for(let z=0;z<K;z++){let D=z*q-W;N.push(D,-E,0),B.push(0,0,1),O.push(z/Y),O.push(1-V/H)}}for(let V=0;V<H;V++)for(let E=0;E<Y;E++){let z=E+K*V,D=E+K*(V+1),_=E+1+K*(V+1),f=E+1+K*V;F.push(z,D,f),F.push(D,_,f)}this.setIndex(F),this.setAttribute("position",new j6(N,3)),this.setAttribute("normal",new j6(B,3)),this.setAttribute("uv",new j6(O,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new I9(J.width,J.height,J.widthSegments,J.heightSegments)}}var N1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
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
#endif`,B1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
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
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b1=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$4=`#ifdef USE_GRADIENTMAP
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
}`,Z4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y4=`uniform bool receiveShadow;
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
#endif`,H4=`#ifdef USE_ENVMAP
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
#endif`,K4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F4=`PhysicalMaterial material;
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
#endif`,V4=`struct PhysicalMaterial {
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
}`,E4=`
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
#endif`,N4=`#if defined( RE_IndirectDiffuse )
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
#endif`,O4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D4=`#if defined( USE_POINTS_UV )
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
#endif`,w4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T4=`#ifdef USE_MORPHTARGETS
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
#endif`,S4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h4=`#ifdef USE_NORMALMAP
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
#endif`,b4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,d4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e4=`float getShadowMask() {
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
}`,JW=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QW=`#ifdef USE_SKINNING
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
#endif`,$W=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZW=`#ifdef USE_SKINNING
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
#endif`,WW=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XW=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YW=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HW=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KW=`#ifdef USE_TRANSMISSION
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
#endif`,GW=`#ifdef USE_TRANSMISSION
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
#endif`,qW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VW=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,EW=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NW=`uniform sampler2D t2D;
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
}`,OW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BW=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zW=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MW=`#include <common>
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
}`,LW=`#if DEPTH_PACKING == 3200
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
	#endif
}`,CW=`#define DISTANCE
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
}`,kW=`#define DISTANCE
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
}`,DW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wW=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_W=`uniform float scale;
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
}`,IW=`uniform vec3 diffuse;
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
}`,PW=`#include <common>
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
}`,AW=`uniform vec3 diffuse;
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
}`,TW=`#define LAMBERT
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
}`,SW=`#define LAMBERT
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
}`,jW=`#define MATCAP
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
}`,yW=`#define MATCAP
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
}`,fW=`#define NORMAL
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
}`,vW=`#define NORMAL
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
}`,xW=`#define PHONG
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
}`,hW=`#define PHONG
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
}`,bW=`#define STANDARD
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
}`,gW=`#define STANDARD
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
}`,pW=`#define TOON
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
}`,uW=`#define TOON
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
}`,mW=`uniform float size;
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
}`,lW=`uniform vec3 diffuse;
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
}`,dW=`#include <common>
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
}`,cW=`uniform vec3 color;
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
}`,nW=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sW=`uniform vec3 diffuse;
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
}`,x0={alphahash_fragment:N1,alphahash_pars_fragment:O1,alphamap_fragment:B1,alphamap_pars_fragment:R1,alphatest_fragment:z1,alphatest_pars_fragment:M1,aomap_fragment:L1,aomap_pars_fragment:C1,batching_pars_vertex:k1,batching_vertex:D1,begin_vertex:w1,beginnormal_vertex:_1,bsdfs:I1,iridescence_fragment:P1,bumpmap_pars_fragment:A1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:y1,color_fragment:f1,color_pars_fragment:v1,color_pars_vertex:x1,color_vertex:h1,common:b1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:p1,displacementmap_pars_vertex:u1,displacementmap_vertex:m1,emissivemap_fragment:l1,emissivemap_pars_fragment:d1,colorspace_fragment:c1,colorspace_pars_fragment:n1,envmap_fragment:s1,envmap_common_pars_fragment:o1,envmap_pars_fragment:i1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:H4,envmap_vertex:r1,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:J4,fog_pars_fragment:Q4,gradientmap_pars_fragment:$4,lightmap_pars_fragment:Z4,lights_lambert_fragment:W4,lights_lambert_pars_fragment:X4,lights_pars_begin:Y4,lights_toon_fragment:K4,lights_toon_pars_fragment:G4,lights_phong_fragment:q4,lights_phong_pars_fragment:U4,lights_physical_fragment:F4,lights_physical_pars_fragment:V4,lights_fragment_begin:E4,lights_fragment_maps:N4,lights_fragment_end:O4,logdepthbuf_fragment:B4,logdepthbuf_pars_fragment:R4,logdepthbuf_pars_vertex:z4,logdepthbuf_vertex:M4,map_fragment:L4,map_pars_fragment:C4,map_particle_fragment:k4,map_particle_pars_fragment:D4,metalnessmap_fragment:w4,metalnessmap_pars_fragment:_4,morphinstance_vertex:I4,morphcolor_vertex:P4,morphnormal_vertex:A4,morphtarget_pars_vertex:T4,morphtarget_vertex:S4,normal_fragment_begin:j4,normal_fragment_maps:y4,normal_pars_fragment:f4,normal_pars_vertex:v4,normal_vertex:x4,normalmap_pars_fragment:h4,clearcoat_normal_fragment_begin:b4,clearcoat_normal_fragment_maps:g4,clearcoat_pars_fragment:p4,iridescence_pars_fragment:u4,opaque_fragment:m4,packing:l4,premultiplied_alpha_fragment:d4,project_vertex:c4,dithering_fragment:n4,dithering_pars_fragment:s4,roughnessmap_fragment:o4,roughnessmap_pars_fragment:i4,shadowmap_pars_fragment:a4,shadowmap_pars_vertex:r4,shadowmap_vertex:t4,shadowmask_pars_fragment:e4,skinbase_vertex:JW,skinning_pars_vertex:QW,skinning_vertex:$W,skinnormal_vertex:ZW,specularmap_fragment:WW,specularmap_pars_fragment:XW,tonemapping_fragment:YW,tonemapping_pars_fragment:HW,transmission_fragment:KW,transmission_pars_fragment:GW,uv_pars_fragment:qW,uv_pars_vertex:UW,uv_vertex:FW,worldpos_vertex:VW,background_vert:EW,background_frag:NW,backgroundCube_vert:OW,backgroundCube_frag:BW,cube_vert:RW,cube_frag:zW,depth_vert:MW,depth_frag:LW,distanceRGBA_vert:CW,distanceRGBA_frag:kW,equirect_vert:DW,equirect_frag:wW,linedashed_vert:_W,linedashed_frag:IW,meshbasic_vert:PW,meshbasic_frag:AW,meshlambert_vert:TW,meshlambert_frag:SW,meshmatcap_vert:jW,meshmatcap_frag:yW,meshnormal_vert:fW,meshnormal_frag:vW,meshphong_vert:xW,meshphong_frag:hW,meshphysical_vert:bW,meshphysical_frag:gW,meshtoon_vert:pW,meshtoon_frag:uW,points_vert:mW,points_frag:lW,shadow_vert:dW,shadow_frag:cW,sprite_vert:nW,sprite_frag:sW},X0={common:{diffuse:{value:new D0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new B0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new D0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new D0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new D0(16777215)},opacity:{value:1},center:{value:new B0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},S6={basic:{uniforms:T6([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.fog]),vertexShader:x0.meshbasic_vert,fragmentShader:x0.meshbasic_frag},lambert:{uniforms:T6([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new D0(0)}}]),vertexShader:x0.meshlambert_vert,fragmentShader:x0.meshlambert_frag},phong:{uniforms:T6([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new D0(0)},specular:{value:new D0(1118481)},shininess:{value:30}}]),vertexShader:x0.meshphong_vert,fragmentShader:x0.meshphong_frag},standard:{uniforms:T6([X0.common,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.roughnessmap,X0.metalnessmap,X0.fog,X0.lights,{emissive:{value:new D0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag},toon:{uniforms:T6([X0.common,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.gradientmap,X0.fog,X0.lights,{emissive:{value:new D0(0)}}]),vertexShader:x0.meshtoon_vert,fragmentShader:x0.meshtoon_frag},matcap:{uniforms:T6([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,{matcap:{value:null}}]),vertexShader:x0.meshmatcap_vert,fragmentShader:x0.meshmatcap_frag},points:{uniforms:T6([X0.points,X0.fog]),vertexShader:x0.points_vert,fragmentShader:x0.points_frag},dashed:{uniforms:T6([X0.common,X0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:x0.linedashed_vert,fragmentShader:x0.linedashed_frag},depth:{uniforms:T6([X0.common,X0.displacementmap]),vertexShader:x0.depth_vert,fragmentShader:x0.depth_frag},normal:{uniforms:T6([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,{opacity:{value:1}}]),vertexShader:x0.meshnormal_vert,fragmentShader:x0.meshnormal_frag},sprite:{uniforms:T6([X0.sprite,X0.fog]),vertexShader:x0.sprite_vert,fragmentShader:x0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:x0.background_vert,fragmentShader:x0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:x0.backgroundCube_vert,fragmentShader:x0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:x0.cube_vert,fragmentShader:x0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:x0.equirect_vert,fragmentShader:x0.equirect_frag},distanceRGBA:{uniforms:T6([X0.common,X0.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:x0.distanceRGBA_vert,fragmentShader:x0.distanceRGBA_frag},shadow:{uniforms:T6([X0.lights,X0.fog,{color:{value:new D0(0)},opacity:{value:1}}]),vertexShader:x0.shadow_vert,fragmentShader:x0.shadow_frag}};S6.physical={uniforms:T6([S6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new B0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new D0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new B0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new D0(0)},specularColor:{value:new D0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new B0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag};var I7={r:0,b:0,g:0},p8=new W8,oW=new j0;function iW(J,Q,$,Z,W,X,Y){let H=new D0(0),K=X===!0?0:1,G,q,U=null,F=0,N=null;function B(z){let D=z.isScene===!0?z.background:null;if(D&&D.isTexture)D=(z.backgroundBlurriness>0?$:Q).get(D);return D}function O(z){let D=!1,_=B(z);if(_===null)E(H,K);else if(_&&_.isColor)E(_,1),D=!0;let f=J.xr.getEnvironmentBlendMode();if(f==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(f==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||D)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(z,D){let _=B(D);if(_&&(_.isCubeTexture||_.mapping===306)){if(q===void 0)q=new n0(new o8(1,1,1),new y6({name:"BackgroundCubeMaterial",uniforms:D9(S6.backgroundCube.uniforms),vertexShader:S6.backgroundCube.vertexShader,fragmentShader:S6.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(f,L,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(q);if(p8.copy(D.backgroundRotation),p8.x*=-1,p8.y*=-1,p8.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1)p8.y*=-1,p8.z*=-1;if(q.material.uniforms.envMap.value=_,q.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,q.material.uniforms.backgroundRotation.value.setFromMatrix4(oW.makeRotationFromEuler(p8)),q.material.toneMapped=s0.getTransfer(_.colorSpace)!=="srgb",U!==_||F!==_.version||N!==J.toneMapping)q.material.needsUpdate=!0,U=_,F=_.version,N=J.toneMapping;q.layers.enableAll(),z.unshift(q,q.geometry,q.material,0,0,null)}else if(_&&_.isTexture){if(G===void 0)G=new n0(new I9(2,2),new y6({name:"BackgroundMaterial",uniforms:D9(S6.background.uniforms),vertexShader:S6.background.vertexShader,fragmentShader:S6.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(G);if(G.material.uniforms.t2D.value=_,G.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,G.material.toneMapped=s0.getTransfer(_.colorSpace)!=="srgb",_.matrixAutoUpdate===!0)_.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(_.matrix),U!==_||F!==_.version||N!==J.toneMapping)G.material.needsUpdate=!0,U=_,F=_.version,N=J.toneMapping;G.layers.enableAll(),z.unshift(G,G.geometry,G.material,0,0,null)}}function E(z,D){z.getRGB(I7,H$(J)),Z.buffers.color.setClear(I7.r,I7.g,I7.b,D,Y)}return{getClearColor:function(){return H},setClearColor:function(z,D=1){H.set(z),K=D,E(H,K)},getClearAlpha:function(){return K},setClearAlpha:function(z){K=z,E(H,K)},render:O,addToRenderList:V}}function aW(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=F(null),X=W,Y=!1;function H(k,S,p,n,c){let v=!1,h=U(n,p,S);if(X!==h)X=h,G(X.object);if(v=N(k,n,p,c),v)B(k,n,p,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(v||Y){if(Y=!1,_(k,S,p,n),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function K(){return J.createVertexArray()}function G(k){return J.bindVertexArray(k)}function q(k){return J.deleteVertexArray(k)}function U(k,S,p){let n=p.wireframe===!0,c=Z[k.id];if(c===void 0)c={},Z[k.id]=c;let v=c[S.id];if(v===void 0)v={},c[S.id]=v;let h=v[n];if(h===void 0)h=F(K()),v[n]=h;return h}function F(k){let S=[],p=[],n=[];for(let c=0;c<$;c++)S[c]=0,p[c]=0,n[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:p,attributeDivisors:n,object:k,attributes:{},index:null}}function N(k,S,p,n){let c=X.attributes,v=S.attributes,h=0,i=p.getAttributes();for(let b in i)if(i[b].location>=0){let G0=c[b],M0=v[b];if(M0===void 0){if(b==="instanceMatrix"&&k.instanceMatrix)M0=k.instanceMatrix;if(b==="instanceColor"&&k.instanceColor)M0=k.instanceColor}if(G0===void 0)return!0;if(G0.attribute!==M0)return!0;if(M0&&G0.data!==M0.data)return!0;h++}if(X.attributesNum!==h)return!0;if(X.index!==n)return!0;return!1}function B(k,S,p,n){let c={},v=S.attributes,h=0,i=p.getAttributes();for(let b in i)if(i[b].location>=0){let G0=v[b];if(G0===void 0){if(b==="instanceMatrix"&&k.instanceMatrix)G0=k.instanceMatrix;if(b==="instanceColor"&&k.instanceColor)G0=k.instanceColor}let M0={};if(M0.attribute=G0,G0&&G0.data)M0.data=G0.data;c[b]=M0,h++}X.attributes=c,X.attributesNum=h,X.index=n}function O(){let k=X.newAttributes;for(let S=0,p=k.length;S<p;S++)k[S]=0}function V(k){E(k,0)}function E(k,S){let{newAttributes:p,enabledAttributes:n,attributeDivisors:c}=X;if(p[k]=1,n[k]===0)J.enableVertexAttribArray(k),n[k]=1;if(c[k]!==S)J.vertexAttribDivisor(k,S),c[k]=S}function z(){let{newAttributes:k,enabledAttributes:S}=X;for(let p=0,n=S.length;p<n;p++)if(S[p]!==k[p])J.disableVertexAttribArray(p),S[p]=0}function D(k,S,p,n,c,v,h){if(h===!0)J.vertexAttribIPointer(k,S,p,c,v);else J.vertexAttribPointer(k,S,p,n,c,v)}function _(k,S,p,n){O();let c=n.attributes,v=p.getAttributes(),h=S.defaultAttributeValues;for(let i in v){let b=v[i];if(b.location>=0){let J0=c[i];if(J0===void 0){if(i==="instanceMatrix"&&k.instanceMatrix)J0=k.instanceMatrix;if(i==="instanceColor"&&k.instanceColor)J0=k.instanceColor}if(J0!==void 0){let{normalized:G0,itemSize:M0}=J0,y0=Q.get(J0);if(y0===void 0)continue;let{buffer:o,type:W0,bytesPerElement:F0}=y0,L0=W0===J.INT||W0===J.UNSIGNED_INT||J0.gpuType===1013;if(J0.isInterleavedBufferAttribute){let U0=J0.data,A0=U0.stride,e0=J0.offset;if(U0.isInstancedInterleavedBuffer){for(let h0=0;h0<b.locationSize;h0++)E(b.location+h0,U0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let h0=0;h0<b.locationSize;h0++)V(b.location+h0);J.bindBuffer(J.ARRAY_BUFFER,o);for(let h0=0;h0<b.locationSize;h0++)D(b.location+h0,M0/b.locationSize,W0,G0,A0*F0,(e0+M0/b.locationSize*h0)*F0,L0)}else{if(J0.isInstancedBufferAttribute){for(let U0=0;U0<b.locationSize;U0++)E(b.location+U0,J0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=J0.meshPerAttribute*J0.count}else for(let U0=0;U0<b.locationSize;U0++)V(b.location+U0);J.bindBuffer(J.ARRAY_BUFFER,o);for(let U0=0;U0<b.locationSize;U0++)D(b.location+U0,M0/b.locationSize,W0,G0,M0*F0,M0/b.locationSize*U0*F0,L0)}}else if(h!==void 0){let G0=h[i];if(G0!==void 0)switch(G0.length){case 2:J.vertexAttrib2fv(b.location,G0);break;case 3:J.vertexAttrib3fv(b.location,G0);break;case 4:J.vertexAttrib4fv(b.location,G0);break;default:J.vertexAttrib1fv(b.location,G0)}}}}z()}function f(){d();for(let k in Z){let S=Z[k];for(let p in S){let n=S[p];for(let c in n)q(n[c].object),delete n[c];delete S[p]}delete Z[k]}}function L(k){if(Z[k.id]===void 0)return;let S=Z[k.id];for(let p in S){let n=S[p];for(let c in n)q(n[c].object),delete n[c];delete S[p]}delete Z[k.id]}function j(k){for(let S in Z){let p=Z[S];if(p[k.id]===void 0)continue;let n=p[k.id];for(let c in n)q(n[c].object),delete n[c];delete p[k.id]}}function d(){if(C(),Y=!0,X===W)return;X=W,G(X.object)}function C(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:d,resetDefaultState:C,dispose:f,releaseStatesOfGeometry:L,releaseStatesOfProgram:j,initAttributes:O,enableAttribute:V,disableUnusedAttributes:z}}function rW(J,Q,$){let Z;function W(G){Z=G}function X(G,q){J.drawArrays(Z,G,q),$.update(q,Z,1)}function Y(G,q,U){if(U===0)return;J.drawArraysInstanced(Z,G,q,U),$.update(q,Z,U)}function H(G,q,U){if(U===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,G,0,q,0,U);let N=0;for(let B=0;B<U;B++)N+=q[B];$.update(N,Z,1)}function K(G,q,U,F){if(U===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let B=0;B<G.length;B++)Y(G[B],q[B],F[B]);else{N.multiDrawArraysInstancedWEBGL(Z,G,0,q,0,F,0,U);let B=0;for(let O=0;O<U;O++)B+=q[O];for(let O=0;O<F.length;O++)$.update(B,Z,F[O])}}this.setMode=W,this.render=X,this.renderInstances=Y,this.renderMultiDraw=H,this.renderMultiDrawInstances=K}function tW(J,Q,$,Z){let W;function X(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let L=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(L){if(L!==1023&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(L){let j=L===1016&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(L!==1009&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==1015&&!j)return!1;return!0}function K(L){if(L==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=$.precision!==void 0?$.precision:"highp",q=K(G);if(q!==G)console.warn("THREE.WebGLRenderer:",G,"not supported, using",q,"instead."),G=q;let U=$.logarithmicDepthBuffer===!0,F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),V=J.getParameter(J.MAX_VERTEX_ATTRIBS),E=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),D=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=N>0,f=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:X,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:H,precision:G,logarithmicDepthBuffer:U,maxTextures:F,maxVertexTextures:N,maxTextureSize:B,maxCubemapSize:O,maxAttributes:V,maxVertexUniforms:E,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:_,maxSamples:f}}function eW(J){let Q=this,$=null,Z=0,W=!1,X=!1,Y=new $8,H=new f0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(U,F){let N=U.length!==0||F||Z!==0||W;return W=F,Z=U.length,N},this.beginShadows=function(){X=!0,q(null)},this.endShadows=function(){X=!1},this.setGlobalState=function(U,F){$=q(U,F,0)},this.setState=function(U,F,N){let{clippingPlanes:B,clipIntersection:O,clipShadows:V}=U,E=J.get(U);if(!W||B===null||B.length===0||X&&!V)if(X)q(null);else G();else{let z=X?0:Z,D=z*4,_=E.clippingState||null;K.value=_,_=q(B,F,D,N);for(let f=0;f!==D;++f)_[f]=$[f];E.clippingState=_,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=z}};function G(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function q(U,F,N,B){let O=U!==null?U.length:0,V=null;if(O!==0){if(V=K.value,B!==!0||V===null){let E=N+O*4,z=F.matrixWorldInverse;if(H.getNormalMatrix(z),V===null||V.length<E)V=new Float32Array(E);for(let D=0,_=N;D!==O;++D,_+=4)Y.copy(U[D]).applyMatrix4(z,H),Y.normal.toArray(V,_),V[_+3]=Y.constant}K.value=V,K.needsUpdate=!0}return Q.numPlanes=O,Q.numIntersection=0,V}}function JX(J){let Q=new WeakMap;function $(Y,H){if(H===303)Y.mapping=301;else if(H===304)Y.mapping=302;return Y}function Z(Y){if(Y&&Y.isTexture){let H=Y.mapping;if(H===303||H===304)if(Q.has(Y)){let K=Q.get(Y).texture;return $(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let G=new G$(K.height);return G.fromEquirectangularTexture(J,Y),Q.set(Y,G),Y.addEventListener("dispose",W),$(G.texture,Y.mapping)}else return null}}return Y}function W(Y){let H=Y.target;H.removeEventListener("dispose",W);let K=Q.get(H);if(K!==void 0)Q.delete(H),K.dispose()}function X(){Q=new WeakMap}return{get:Z,dispose:X}}class S8 extends iJ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,X=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=X,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,X){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,X=$+J,Y=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,X=W+K*this.view.width,Y-=G*this.view.offsetY,H=Y-G*this.view.height}this.projectionMatrix.makeOrthographic(W,X,Y,H,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var L9=4,ZQ=[0.125,0.215,0.35,0.446,0.526,0.582],l8=20,wJ=new S8,WQ=new D0,_J=null,IJ=0,PJ=0,AJ=!1,m8=(1+Math.sqrt(5))/2,z9=1/m8,XQ=[new A(-m8,z9,0),new A(m8,z9,0),new A(-z9,0,m8),new A(z9,0,m8),new A(0,m8,-z9),new A(0,m8,z9),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class i9{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100){_J=this._renderer.getRenderTarget(),IJ=this._renderer.getActiveCubeFace(),PJ=this._renderer.getActiveMipmapLevel(),AJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,W),Q>0)this._blur(W,0,0,Q);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=KQ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=HQ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(_J,IJ,PJ),this._renderer.xr.enabled=AJ,J.scissorTest=!1,P7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);_J=this._renderer.getRenderTarget(),IJ=this._renderer.getActiveCubeFace(),PJ=this._renderer.getActiveMipmapLevel(),AJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},Z=YQ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=YQ(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QX(W)),this._blurMaterial=$X(W,J,Q)}return Z}_compileMaterial(J){let Q=new n0(this._lodPlanes[0],J);this._renderer.compile(Q,wJ)}_sceneToCubeUV(J,Q,$,Z){let Y=new I6(90,1,Q,$),H=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],G=this._renderer,q=G.autoClear,U=G.toneMapping;G.getClearColor(WQ),G.toneMapping=0,G.autoClear=!1;let F=new p6({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),N=new n0(new o8,F),B=!1,O=J.background;if(O){if(O.isColor)F.color.copy(O),J.background=null,B=!0}else F.color.copy(WQ),B=!0;for(let V=0;V<6;V++){let E=V%3;if(E===0)Y.up.set(0,H[V],0),Y.lookAt(K[V],0,0);else if(E===1)Y.up.set(0,0,H[V]),Y.lookAt(0,K[V],0);else Y.up.set(0,H[V],0),Y.lookAt(0,0,K[V]);let z=this._cubeSize;if(P7(Z,E*z,V>2?z:0,z,z),G.setRenderTarget(Z),B)G.render(N,Y);G.render(J,Y)}N.geometry.dispose(),N.material.dispose(),G.toneMapping=U,G.autoClear=q,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===301||J.mapping===302;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=KQ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=HQ();let W=Z?this._cubemapMaterial:this._equirectMaterial,X=new n0(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let H=this._cubeSize;P7(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(X,wJ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let X=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=XQ[(Z-W-1)%XQ.length];this._blur(J,W-1,W,X,Y)}Q.autoClear=$}_blur(J,Q,$,Z,W){let X=this._pingPongRenderTarget;this._halfBlur(J,X,Q,$,Z,"latitudinal",W),this._halfBlur(X,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,X,Y){let H=this._renderer,K=this._blurMaterial;if(X!=="latitudinal"&&X!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let G=3,q=new n0(this._lodPlanes[Z],K),U=K.uniforms,F=this._sizeLods[$]-1,N=isFinite(W)?Math.PI/(2*F):2*Math.PI/(2*l8-1),B=W/N,O=isFinite(W)?1+Math.floor(G*B):l8;if(O>l8)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${O} samples when the maximum is set to ${l8}`);let V=[],E=0;for(let L=0;L<l8;++L){let j=L/B,d=Math.exp(-j*j/2);if(V.push(d),L===0)E+=d;else if(L<O)E+=2*d}for(let L=0;L<V.length;L++)V[L]=V[L]/E;if(U.envMap.value=J.texture,U.samples.value=O,U.weights.value=V,U.latitudinal.value=X==="latitudinal",Y)U.poleAxis.value=Y;let{_lodMax:z}=this;U.dTheta.value=N,U.mipInt.value=z-$;let D=this._sizeLods[Z],_=3*D*(Z>z-L9?Z-z+L9:0),f=4*(this._cubeSize-D);P7(Q,_,f,3*D,2*D),H.setRenderTarget(Q),H.render(q,wJ)}}function QX(J){let Q=[],$=[],Z=[],W=J,X=J-L9+1+ZQ.length;for(let Y=0;Y<X;Y++){let H=Math.pow(2,W);$.push(H);let K=1/H;if(Y>J-L9)K=ZQ[Y-J+L9-1];else if(Y===0)K=0;Z.push(K);let G=1/(H-2),q=-G,U=1+G,F=[q,q,U,q,U,U,q,q,U,U,q,U],N=6,B=6,O=3,V=2,E=1,z=new Float32Array(O*B*N),D=new Float32Array(V*B*N),_=new Float32Array(E*B*N);for(let L=0;L<N;L++){let j=L%3*2/3-1,d=L>2?0:-1,C=[j,d,0,j+0.6666666666666666,d,0,j+0.6666666666666666,d+1,0,j,d,0,j+0.6666666666666666,d+1,0,j,d+1,0];z.set(C,O*B*L),D.set(F,V*B*L);let k=[L,L,L,L,L,L];_.set(k,E*B*L)}let f=new f6;if(f.setAttribute("position",new B6(z,O)),f.setAttribute("uv",new B6(D,V)),f.setAttribute("faceIndex",new B6(_,E)),Q.push(f),W>L9)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function YQ(J,Q,$){let Z=new d6(J,Q,$);return Z.texture.mapping=306,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function P7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function $X(J,Q,$){let Z=new Float32Array(l8),W=new A(0,1,0);return new y6({name:"SphericalGaussianBlur",defines:{n:l8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:rJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function HQ(){return new y6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function KQ(){return new y6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rJ(){return`

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
	`}function ZX(J){let Q=new WeakMap,$=null;function Z(H){if(H&&H.isTexture){let K=H.mapping,G=K===303||K===304,q=K===301||K===302;if(G||q){let U=Q.get(H),F=U!==void 0?U.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==F){if($===null)$=new i9(J);return U=G?$.fromEquirectangular(H,U):$.fromCubemap(H,U),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),U.texture}else if(U!==void 0)return U.texture;else{let N=H.image;if(G&&N&&N.height>0||q&&N&&W(N)){if($===null)$=new i9(J);return U=G?$.fromEquirectangular(H):$.fromCubemap(H),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),H.addEventListener("dispose",X),U.texture}else return null}}}return H}function W(H){let K=0,G=6;for(let q=0;q<G;q++)if(H[q]!==void 0)K++;return K===G}function X(H){let K=H.target;K.removeEventListener("dispose",X);let G=Q.get(K);if(G!==void 0)Q.delete(K),G.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function WX(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)lJ("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function XX(J,Q,$,Z){let W={},X=new WeakMap;function Y(U){let F=U.target;if(F.index!==null)Q.remove(F.index);for(let B in F.attributes)Q.remove(F.attributes[B]);for(let B in F.morphAttributes){let O=F.morphAttributes[B];for(let V=0,E=O.length;V<E;V++)Q.remove(O[V])}F.removeEventListener("dispose",Y),delete W[F.id];let N=X.get(F);if(N)Q.remove(N),X.delete(F);if(Z.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;$.memory.geometries--}function H(U,F){if(W[F.id]===!0)return F;return F.addEventListener("dispose",Y),W[F.id]=!0,$.memory.geometries++,F}function K(U){let F=U.attributes;for(let B in F)Q.update(F[B],J.ARRAY_BUFFER);let N=U.morphAttributes;for(let B in N){let O=N[B];for(let V=0,E=O.length;V<E;V++)Q.update(O[V],J.ARRAY_BUFFER)}}function G(U){let F=[],N=U.index,B=U.attributes.position,O=0;if(N!==null){let z=N.array;O=N.version;for(let D=0,_=z.length;D<_;D+=3){let f=z[D+0],L=z[D+1],j=z[D+2];F.push(f,L,L,j,j,f)}}else if(B!==void 0){let z=B.array;O=B.version;for(let D=0,_=z.length/3-1;D<_;D+=3){let f=D+0,L=D+1,j=D+2;F.push(f,L,L,j,j,f)}}else return;let V=new(($$(F))?oJ:sJ)(F,1);V.version=O;let E=X.get(U);if(E)Q.remove(E);X.set(U,V)}function q(U){let F=X.get(U);if(F){let N=U.index;if(N!==null){if(F.version<N.version)G(U)}}else G(U);return X.get(U)}return{get:H,update:K,getWireframeAttribute:q}}function YX(J,Q,$){let Z;function W(F){Z=F}let X,Y;function H(F){X=F.type,Y=F.bytesPerElement}function K(F,N){J.drawElements(Z,N,X,F*Y),$.update(N,Z,1)}function G(F,N,B){if(B===0)return;J.drawElementsInstanced(Z,N,X,F*Y,B),$.update(N,Z,B)}function q(F,N,B){if(B===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,X,F,0,B);let V=0;for(let E=0;E<B;E++)V+=N[E];$.update(V,Z,1)}function U(F,N,B,O){if(B===0)return;let V=Q.get("WEBGL_multi_draw");if(V===null)for(let E=0;E<F.length;E++)G(F[E]/Y,N[E],O[E]);else{V.multiDrawElementsInstancedWEBGL(Z,N,0,X,F,0,O,0,B);let E=0;for(let z=0;z<B;z++)E+=N[z];for(let z=0;z<O.length;z++)$.update(E,Z,O[z])}}this.setMode=W,this.setIndex=H,this.render=K,this.renderInstances=G,this.renderMultiDraw=q,this.renderMultiDrawInstances=U}function HX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(X,Y,H){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=H*(X/3);break;case J.LINES:$.lines+=H*(X/2);break;case J.LINE_STRIP:$.lines+=H*(X-1);break;case J.LINE_LOOP:$.lines+=H*X;break;case J.POINTS:$.points+=H*X;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function KX(J,Q,$){let Z=new WeakMap,W=new c0;function X(Y,H,K){let G=Y.morphTargetInfluences,q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=q!==void 0?q.length:0,F=Z.get(H);if(F===void 0||F.count!==U){let C=function(){j.dispose(),Z.delete(H),H.removeEventListener("dispose",C)};if(F!==void 0)F.texture.dispose();let N=H.morphAttributes.position!==void 0,B=H.morphAttributes.normal!==void 0,O=H.morphAttributes.color!==void 0,V=H.morphAttributes.position||[],E=H.morphAttributes.normal||[],z=H.morphAttributes.color||[],D=0;if(N===!0)D=1;if(B===!0)D=2;if(O===!0)D=3;let _=H.attributes.position.count*D,f=1;if(_>Q.maxTextureSize)f=Math.ceil(_/Q.maxTextureSize),_=Q.maxTextureSize;let L=new Float32Array(_*f*4*U),j=new cJ(L,_,f,U);j.type=1015,j.needsUpdate=!0;let d=D*4;for(let k=0;k<U;k++){let S=V[k],p=E[k],n=z[k],c=_*f*4*k;for(let v=0;v<S.count;v++){let h=v*d;if(N===!0)W.fromBufferAttribute(S,v),L[c+h+0]=W.x,L[c+h+1]=W.y,L[c+h+2]=W.z,L[c+h+3]=0;if(B===!0)W.fromBufferAttribute(p,v),L[c+h+4]=W.x,L[c+h+5]=W.y,L[c+h+6]=W.z,L[c+h+7]=0;if(O===!0)W.fromBufferAttribute(n,v),L[c+h+8]=W.x,L[c+h+9]=W.y,L[c+h+10]=W.z,L[c+h+11]=n.itemSize===4?W.w:1}}F={count:U,texture:j,size:new B0(_,f)},Z.set(H,F),H.addEventListener("dispose",C)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let N=0;for(let O=0;O<G.length;O++)N+=G[O];let B=H.morphTargetsRelative?1:1-N;K.getUniforms().setValue(J,"morphTargetBaseInfluence",B),K.getUniforms().setValue(J,"morphTargetInfluences",G)}K.getUniforms().setValue(J,"morphTargetsTexture",F.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:X}}function GX(J,Q,$,Z){let W=new WeakMap;function X(K){let G=Z.render.frame,q=K.geometry,U=Q.get(K,q);if(W.get(U)!==G)Q.update(U),W.set(U,G);if(K.isInstancedMesh){if(K.hasEventListener("dispose",H)===!1)K.addEventListener("dispose",H);if(W.get(K)!==G){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,G)}}if(K.isSkinnedMesh){let F=K.skeleton;if(W.get(F)!==G)F.update(),W.set(F,G)}return U}function Y(){W=new WeakMap}function H(K){let G=K.target;if(G.removeEventListener("dispose",H),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:X,dispose:Y}}class r9 extends F6{constructor(J,Q,$,Z,W,X,Y,H,K,G=1026){if(G!==1026&&G!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if($===void 0&&G===1026)$=1014;if($===void 0&&G===1027)$=1020;super(null,Z,W,X,Y,H,G,$,K);this.isDepthTexture=!0,this.image={width:J,height:Q},this.magFilter=Y!==void 0?Y:1003,this.minFilter=H!==void 0?H:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}var U$=new F6,GQ=new r9(1,1),F$=new cJ,V$=new X$,E$=new aJ,qQ=[],UQ=[],FQ=new Float32Array(16),VQ=new Float32Array(9),EQ=new Float32Array(4);function P9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,X=qQ[W];if(X===void 0)X=new Float32Array(W),qQ[W]=X;if(Q!==0){Z.toArray(X,0);for(let Y=1,H=0;Y!==Q;++Y)H+=$,J[Y].toArray(X,H)}return X}function V6(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function E6(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function d7(J,Q){let $=UQ[Q];if($===void 0)$=new Int32Array(Q),UQ[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function qX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function UX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(V6($,Q))return;J.uniform2fv(this.addr,Q),E6($,Q)}}function FX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(V6($,Q))return;J.uniform3fv(this.addr,Q),E6($,Q)}}function VX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(V6($,Q))return;J.uniform4fv(this.addr,Q),E6($,Q)}}function EX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(V6($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),E6($,Q)}else{if(V6($,Z))return;EQ.set(Z),J.uniformMatrix2fv(this.addr,!1,EQ),E6($,Z)}}function NX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(V6($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),E6($,Q)}else{if(V6($,Z))return;VQ.set(Z),J.uniformMatrix3fv(this.addr,!1,VQ),E6($,Z)}}function OX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(V6($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),E6($,Q)}else{if(V6($,Z))return;FQ.set(Z),J.uniformMatrix4fv(this.addr,!1,FQ),E6($,Z)}}function BX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function RX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(V6($,Q))return;J.uniform2iv(this.addr,Q),E6($,Q)}}function zX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(V6($,Q))return;J.uniform3iv(this.addr,Q),E6($,Q)}}function MX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(V6($,Q))return;J.uniform4iv(this.addr,Q),E6($,Q)}}function LX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function CX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(V6($,Q))return;J.uniform2uiv(this.addr,Q),E6($,Q)}}function kX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(V6($,Q))return;J.uniform3uiv(this.addr,Q),E6($,Q)}}function DX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(V6($,Q))return;J.uniform4uiv(this.addr,Q),E6($,Q)}}function wX(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let X;if(this.type===J.SAMPLER_2D_SHADOW)GQ.compareFunction=515,X=GQ;else X=U$;$.setTexture2D(Q||X,W)}function _X(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||V$,W)}function IX(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||E$,W)}function PX(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||F$,W)}function AX(J){switch(J){case 5126:return qX;case 35664:return UX;case 35665:return FX;case 35666:return VX;case 35674:return EX;case 35675:return NX;case 35676:return OX;case 5124:case 35670:return BX;case 35667:case 35671:return RX;case 35668:case 35672:return zX;case 35669:case 35673:return MX;case 5125:return LX;case 36294:return CX;case 36295:return kX;case 36296:return DX;case 35678:case 36198:case 36298:case 36306:case 35682:return wX;case 35679:case 36299:case 36307:return _X;case 35680:case 36300:case 36308:case 36293:return IX;case 36289:case 36303:case 36311:case 36292:return PX}}function TX(J,Q){J.uniform1fv(this.addr,Q)}function SX(J,Q){let $=P9(Q,this.size,2);J.uniform2fv(this.addr,$)}function jX(J,Q){let $=P9(Q,this.size,3);J.uniform3fv(this.addr,$)}function yX(J,Q){let $=P9(Q,this.size,4);J.uniform4fv(this.addr,$)}function fX(J,Q){let $=P9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function vX(J,Q){let $=P9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function xX(J,Q){let $=P9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function hX(J,Q){J.uniform1iv(this.addr,Q)}function bX(J,Q){J.uniform2iv(this.addr,Q)}function gX(J,Q){J.uniform3iv(this.addr,Q)}function pX(J,Q){J.uniform4iv(this.addr,Q)}function uX(J,Q){J.uniform1uiv(this.addr,Q)}function mX(J,Q){J.uniform2uiv(this.addr,Q)}function lX(J,Q){J.uniform3uiv(this.addr,Q)}function dX(J,Q){J.uniform4uiv(this.addr,Q)}function cX(J,Q,$){let Z=this.cache,W=Q.length,X=d7($,W);if(!V6(Z,X))J.uniform1iv(this.addr,X),E6(Z,X);for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||U$,X[Y])}function nX(J,Q,$){let Z=this.cache,W=Q.length,X=d7($,W);if(!V6(Z,X))J.uniform1iv(this.addr,X),E6(Z,X);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||V$,X[Y])}function sX(J,Q,$){let Z=this.cache,W=Q.length,X=d7($,W);if(!V6(Z,X))J.uniform1iv(this.addr,X),E6(Z,X);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||E$,X[Y])}function oX(J,Q,$){let Z=this.cache,W=Q.length,X=d7($,W);if(!V6(Z,X))J.uniform1iv(this.addr,X),E6(Z,X);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||F$,X[Y])}function iX(J){switch(J){case 5126:return TX;case 35664:return SX;case 35665:return jX;case 35666:return yX;case 35674:return fX;case 35675:return vX;case 35676:return xX;case 5124:case 35670:return hX;case 35667:case 35671:return bX;case 35668:case 35672:return gX;case 35669:case 35673:return pX;case 5125:return uX;case 36294:return mX;case 36295:return lX;case 36296:return dX;case 35678:case 36198:case 36298:case 36306:case 35682:return cX;case 35679:case 36299:case 36307:return nX;case 35680:case 36300:case 36308:case 36293:return sX;case 36289:case 36303:case 36311:case 36292:return oX}}class N${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=AX(Q.type)}}class O${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=iX(Q.type)}}class B${constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,X=Z.length;W!==X;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var TJ=/(\w+)(\])?(\[|\.)?/g;function NQ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function aX(J,Q,$){let Z=J.name,W=Z.length;TJ.lastIndex=0;while(!0){let X=TJ.exec(Z),Y=TJ.lastIndex,H=X[1],K=X[2]==="]",G=X[3];if(K)H=H|0;if(G===void 0||G==="["&&Y+2===W){NQ($,G===void 0?new N$(H,J,Q):new O$(H,J,Q));break}else{let U=$.map[H];if(U===void 0)U=new B$(H),NQ($,U);$=U}}}class s9{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),X=J.getUniformLocation(Q,W.name);aX(W,X,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,X=Q.length;W!==X;++W){let Y=Q[W],H=$[Y.id];if(H.needsUpdate!==!1)Y.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let X=J[Z];if(X.id in Q)$.push(X)}return $}}function OQ(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var rX=37297,tX=0;function eX(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),X=Math.min(Q+6,$.length);for(let Y=W;Y<X;Y++){let H=Y+1;Z.push(`${H===Q?">":" "} ${H}: ${$[Y]}`)}return Z.join(`
`)}function JY(J){let Q=s0.getPrimaries(s0.workingColorSpace),$=s0.getPrimaries(J),Z;if(Q===$)Z="";else if(Q==="p3"&&$==="rec709")Z="LinearDisplayP3ToLinearSRGB";else if(Q==="rec709"&&$==="p3")Z="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[Z,"LinearTransferOETF"];case"srgb":case"display-p3":return[Z,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[Z,"LinearTransferOETF"]}}function BQ(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+eX(J.getShaderSource(Q),Y)}else return W}function QY(J,Q){let $=JY(Q);return`vec4 ${J}( vec4 value ) { return ${$[0]}( ${$[1]}( value ) ); }`}function $Y(J,Q){let $;switch(Q){case 1:$="Linear";break;case 2:$="Reinhard";break;case 3:$="OptimizedCineon";break;case 4:$="ACESFilmic";break;case 6:$="AgX";break;case 7:$="Neutral";break;case 5:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}function ZY(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(d9).join(`
`)}function WY(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function XY(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let X=J.getActiveAttrib(Q,W),Y=X.name,H=1;if(X.type===J.FLOAT_MAT2)H=2;if(X.type===J.FLOAT_MAT3)H=3;if(X.type===J.FLOAT_MAT4)H=4;$[Y]={type:X.type,location:J.getAttribLocation(Q,Y),locationSize:H}}return $}function d9(J){return J!==""}function RQ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function zQ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var YY=/^[ \t]*#include +<([\w\d./]+)>/gm;function xJ(J){return J.replace(YY,KY)}var HY=new Map;function KY(J,Q){let $=x0[Q];if($===void 0){let Z=HY.get(Q);if(Z!==void 0)$=x0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return xJ($)}var GY=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function MQ(J){return J.replace(GY,qY)}function qY(J,Q,$,Z){let W="";for(let X=parseInt(Q);X<parseInt($);X++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+X+" ]").replace(/UNROLLED_LOOP_INDEX/g,X);return W}function LQ(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function UY(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)Q="SHADOWMAP_TYPE_VSM";return Q}function FY(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:Q="ENVMAP_TYPE_CUBE";break;case 306:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function VY(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:Q="ENVMAP_MODE_REFRACTION";break}return Q}function EY(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:Q="ENVMAP_BLENDING_MULTIPLY";break;case 1:Q="ENVMAP_BLENDING_MIX";break;case 2:Q="ENVMAP_BLENDING_ADD";break}return Q}function NY(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function OY(J,Q,$,Z){let W=J.getContext(),X=$.defines,Y=$.vertexShader,H=$.fragmentShader,K=UY($),G=FY($),q=VY($),U=EY($),F=NY($),N=ZY($),B=WY(X),O=W.createProgram(),V,E,z=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(V=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B].filter(d9).join(`
`),V.length>0)V+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B].filter(d9).join(`
`),E.length>0)E+=`
`}else V=[LQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+q:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(d9).join(`
`),E=[LQ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,B,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.envMap?"#define "+q:"",$.envMap?"#define "+U:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==0?"#define TONE_MAPPING":"",$.toneMapping!==0?x0.tonemapping_pars_fragment:"",$.toneMapping!==0?$Y("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",x0.colorspace_pars_fragment,QY("linearToOutputTexel",$.outputColorSpace),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(d9).join(`
`);if(Y=xJ(Y),Y=RQ(Y,$),Y=zQ(Y,$),H=xJ(H),H=RQ(H,$),H=zQ(H,$),Y=MQ(Y),H=MQ(H),$.isRawShaderMaterial!==!0)z=`#version 300 es
`,V=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+V,E=["#define varying in",$.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let D=z+V+Y,_=z+E+H,f=OQ(W,W.VERTEX_SHADER,D),L=OQ(W,W.FRAGMENT_SHADER,_);if(W.attachShader(O,f),W.attachShader(O,L),$.index0AttributeName!==void 0)W.bindAttribLocation(O,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(O,0,"position");W.linkProgram(O);function j(S){if(J.debug.checkShaderErrors){let p=W.getProgramInfoLog(O).trim(),n=W.getShaderInfoLog(f).trim(),c=W.getShaderInfoLog(L).trim(),v=!0,h=!0;if(W.getProgramParameter(O,W.LINK_STATUS)===!1)if(v=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,O,f,L);else{let i=BQ(W,f,"vertex"),b=BQ(W,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(O,W.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+p+`
`+i+`
`+b)}else if(p!=="")console.warn("THREE.WebGLProgram: Program Info Log:",p);else if(n===""||c==="")h=!1;if(h)S.diagnostics={runnable:v,programLog:p,vertexShader:{log:n,prefix:V},fragmentShader:{log:c,prefix:E}}}W.deleteShader(f),W.deleteShader(L),d=new s9(W,O),C=XY(W,O)}let d;this.getUniforms=function(){if(d===void 0)j(this);return d};let C;this.getAttributes=function(){if(C===void 0)j(this);return C};let k=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(k===!1)k=W.getProgramParameter(O,rX);return k},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(O),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=tX++,this.cacheKey=Q,this.usedTimes=1,this.program=O,this.vertexShader=f,this.fragmentShader=L,this}var BY=0;class R${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),X=this._getShaderCacheForMaterial(J);if(X.has(Z)===!1)X.add(Z),Z.usedTimes++;if(X.has(W)===!1)X.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new z$(J),Q.set(J,$);return $}}class z${constructor(J){this.id=BY++,this.code=J,this.usedTimes=0}}function RY(J,Q,$,Z,W,X,Y){let H=new nJ,K=new R$,G=new Set,q=[],U=W.logarithmicDepthBuffer,F=W.vertexTextures,N=W.precision,B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(C){if(G.add(C),C===0)return"uv";return`uv${C}`}function V(C,k,S,p,n){let c=p.fog,v=n.geometry,h=C.isMeshStandardMaterial?p.environment:null,i=(C.isMeshStandardMaterial?$:Q).get(C.envMap||h),b=!!i&&i.mapping===306?i.image.height:null,J0=B[C.type];if(C.precision!==null){if(N=W.getMaxPrecision(C.precision),N!==C.precision)console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",N,"instead.")}let G0=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,M0=G0!==void 0?G0.length:0,y0=0;if(v.morphAttributes.position!==void 0)y0=1;if(v.morphAttributes.normal!==void 0)y0=2;if(v.morphAttributes.color!==void 0)y0=3;let o,W0,F0,L0;if(J0){let b0=S6[J0];o=b0.vertexShader,W0=b0.fragmentShader}else o=C.vertexShader,W0=C.fragmentShader,K.update(C),F0=K.getVertexShaderID(C),L0=K.getFragmentShaderID(C);let U0=J.getRenderTarget(),A0=n.isInstancedMesh===!0,e0=n.isBatchedMesh===!0,h0=!!C.map,T=!!C.matcap,W6=!!i,g0=!!C.aoMap,Q6=!!C.lightMap,C0=!!C.bumpMap,l0=!!C.normalMap,T0=!!C.displacementMap,S0=!!C.emissiveMap,Z6=!!C.metalnessMap,I=!!C.roughnessMap,R=C.anisotropy>0,m=C.clearcoat>0,r=C.dispersion>0,t=C.iridescence>0,e=C.sheen>0,z0=C.transmission>0,Y0=R&&!!C.anisotropyMap,H0=m&&!!C.clearcoatMap,v0=m&&!!C.clearcoatNormalMap,Q0=m&&!!C.clearcoatRoughnessMap,O0=t&&!!C.iridescenceMap,u0=t&&!!C.iridescenceThicknessMap,w0=e&&!!C.sheenColorMap,K0=e&&!!C.sheenRoughnessMap,I0=!!C.specularMap,m0=!!C.specularColorMap,P=!!C.specularIntensityMap,w=z0&&!!C.transmissionMap,a=z0&&!!C.thicknessMap,l=!!C.gradientMap,s=!!C.alphaMap,$0=C.alphaTest>0,N0=!!C.alphaHash,d0=!!C.extensions,X6=0;if(C.toneMapped){if(U0===null||U0.isXRRenderTarget===!0)X6=J.toneMapping}let K6={shaderID:J0,shaderType:C.type,shaderName:C.name,vertexShader:o,fragmentShader:W0,defines:C.defines,customVertexShaderID:F0,customFragmentShaderID:L0,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:N,batching:e0,batchingColor:e0&&n._colorsTexture!==null,instancing:A0,instancingColor:A0&&n.instanceColor!==null,instancingMorph:A0&&n.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:U0===null?J.outputColorSpace:U0.isXRRenderTarget===!0?U0.texture.colorSpace:"srgb-linear",alphaToCoverage:!!C.alphaToCoverage,map:h0,matcap:T,envMap:W6,envMapMode:W6&&i.mapping,envMapCubeUVHeight:b,aoMap:g0,lightMap:Q6,bumpMap:C0,normalMap:l0,displacementMap:F&&T0,emissiveMap:S0,normalMapObjectSpace:l0&&C.normalMapType===1,normalMapTangentSpace:l0&&C.normalMapType===0,metalnessMap:Z6,roughnessMap:I,anisotropy:R,anisotropyMap:Y0,clearcoat:m,clearcoatMap:H0,clearcoatNormalMap:v0,clearcoatRoughnessMap:Q0,dispersion:r,iridescence:t,iridescenceMap:O0,iridescenceThicknessMap:u0,sheen:e,sheenColorMap:w0,sheenRoughnessMap:K0,specularMap:I0,specularColorMap:m0,specularIntensityMap:P,transmission:z0,transmissionMap:w,thicknessMap:a,gradientMap:l,opaque:C.transparent===!1&&C.blending===1&&C.alphaToCoverage===!1,alphaMap:s,alphaTest:$0,alphaHash:N0,combine:C.combine,mapUv:h0&&O(C.map.channel),aoMapUv:g0&&O(C.aoMap.channel),lightMapUv:Q6&&O(C.lightMap.channel),bumpMapUv:C0&&O(C.bumpMap.channel),normalMapUv:l0&&O(C.normalMap.channel),displacementMapUv:T0&&O(C.displacementMap.channel),emissiveMapUv:S0&&O(C.emissiveMap.channel),metalnessMapUv:Z6&&O(C.metalnessMap.channel),roughnessMapUv:I&&O(C.roughnessMap.channel),anisotropyMapUv:Y0&&O(C.anisotropyMap.channel),clearcoatMapUv:H0&&O(C.clearcoatMap.channel),clearcoatNormalMapUv:v0&&O(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q0&&O(C.clearcoatRoughnessMap.channel),iridescenceMapUv:O0&&O(C.iridescenceMap.channel),iridescenceThicknessMapUv:u0&&O(C.iridescenceThicknessMap.channel),sheenColorMapUv:w0&&O(C.sheenColorMap.channel),sheenRoughnessMapUv:K0&&O(C.sheenRoughnessMap.channel),specularMapUv:I0&&O(C.specularMap.channel),specularColorMapUv:m0&&O(C.specularColorMap.channel),specularIntensityMapUv:P&&O(C.specularIntensityMap.channel),transmissionMapUv:w&&O(C.transmissionMap.channel),thicknessMapUv:a&&O(C.thicknessMap.channel),alphaMapUv:s&&O(C.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(l0||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!v.attributes.uv&&(h0||s),fog:!!c,useFog:C.fog===!0,fogExp2:!!c&&c.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:U,skinning:n.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:M0,morphTextureStride:y0,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:C.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:X6,decodeVideoTexture:h0&&C.map.isVideoTexture===!0&&s0.getTransfer(C.map.colorSpace)==="srgb",premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===2,flipSided:C.side===1,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:d0&&C.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(d0&&C.extensions.multiDraw===!0||e0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return K6.vertexUv1s=G.has(1),K6.vertexUv2s=G.has(2),K6.vertexUv3s=G.has(3),G.clear(),K6}function E(C){let k=[];if(C.shaderID)k.push(C.shaderID);else k.push(C.customVertexShaderID),k.push(C.customFragmentShaderID);if(C.defines!==void 0)for(let S in C.defines)k.push(S),k.push(C.defines[S]);if(C.isRawShaderMaterial===!1)z(k,C),D(k,C),k.push(J.outputColorSpace);return k.push(C.customProgramCacheKey),k.join()}function z(C,k){C.push(k.precision),C.push(k.outputColorSpace),C.push(k.envMapMode),C.push(k.envMapCubeUVHeight),C.push(k.mapUv),C.push(k.alphaMapUv),C.push(k.lightMapUv),C.push(k.aoMapUv),C.push(k.bumpMapUv),C.push(k.normalMapUv),C.push(k.displacementMapUv),C.push(k.emissiveMapUv),C.push(k.metalnessMapUv),C.push(k.roughnessMapUv),C.push(k.anisotropyMapUv),C.push(k.clearcoatMapUv),C.push(k.clearcoatNormalMapUv),C.push(k.clearcoatRoughnessMapUv),C.push(k.iridescenceMapUv),C.push(k.iridescenceThicknessMapUv),C.push(k.sheenColorMapUv),C.push(k.sheenRoughnessMapUv),C.push(k.specularMapUv),C.push(k.specularColorMapUv),C.push(k.specularIntensityMapUv),C.push(k.transmissionMapUv),C.push(k.thicknessMapUv),C.push(k.combine),C.push(k.fogExp2),C.push(k.sizeAttenuation),C.push(k.morphTargetsCount),C.push(k.morphAttributeCount),C.push(k.numDirLights),C.push(k.numPointLights),C.push(k.numSpotLights),C.push(k.numSpotLightMaps),C.push(k.numHemiLights),C.push(k.numRectAreaLights),C.push(k.numDirLightShadows),C.push(k.numPointLightShadows),C.push(k.numSpotLightShadows),C.push(k.numSpotLightShadowsWithMaps),C.push(k.numLightProbes),C.push(k.shadowMapType),C.push(k.toneMapping),C.push(k.numClippingPlanes),C.push(k.numClipIntersection),C.push(k.depthPacking)}function D(C,k){if(H.disableAll(),k.supportsVertexTextures)H.enable(0);if(k.instancing)H.enable(1);if(k.instancingColor)H.enable(2);if(k.instancingMorph)H.enable(3);if(k.matcap)H.enable(4);if(k.envMap)H.enable(5);if(k.normalMapObjectSpace)H.enable(6);if(k.normalMapTangentSpace)H.enable(7);if(k.clearcoat)H.enable(8);if(k.iridescence)H.enable(9);if(k.alphaTest)H.enable(10);if(k.vertexColors)H.enable(11);if(k.vertexAlphas)H.enable(12);if(k.vertexUv1s)H.enable(13);if(k.vertexUv2s)H.enable(14);if(k.vertexUv3s)H.enable(15);if(k.vertexTangents)H.enable(16);if(k.anisotropy)H.enable(17);if(k.alphaHash)H.enable(18);if(k.batching)H.enable(19);if(k.dispersion)H.enable(20);if(k.batchingColor)H.enable(21);if(C.push(H.mask),H.disableAll(),k.fog)H.enable(0);if(k.useFog)H.enable(1);if(k.flatShading)H.enable(2);if(k.logarithmicDepthBuffer)H.enable(3);if(k.skinning)H.enable(4);if(k.morphTargets)H.enable(5);if(k.morphNormals)H.enable(6);if(k.morphColors)H.enable(7);if(k.premultipliedAlpha)H.enable(8);if(k.shadowMapEnabled)H.enable(9);if(k.doubleSided)H.enable(10);if(k.flipSided)H.enable(11);if(k.useDepthPacking)H.enable(12);if(k.dithering)H.enable(13);if(k.transmission)H.enable(14);if(k.sheen)H.enable(15);if(k.opaque)H.enable(16);if(k.pointsUvs)H.enable(17);if(k.decodeVideoTexture)H.enable(18);if(k.alphaToCoverage)H.enable(19);C.push(H.mask)}function _(C){let k=B[C.type],S;if(k){let p=S6[k];S=m7.clone(p.uniforms)}else S=C.uniforms;return S}function f(C,k){let S;for(let p=0,n=q.length;p<n;p++){let c=q[p];if(c.cacheKey===k){S=c,++S.usedTimes;break}}if(S===void 0)S=new OY(J,k,C,X),q.push(S);return S}function L(C){if(--C.usedTimes===0){let k=q.indexOf(C);q[k]=q[q.length-1],q.pop(),C.destroy()}}function j(C){K.remove(C)}function d(){K.dispose()}return{getParameters:V,getProgramCacheKey:E,getUniforms:_,acquireProgram:f,releaseProgram:L,releaseShaderCache:j,programs:q,dispose:d}}function zY(){let J=new WeakMap;function Q(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function $(X){J.delete(X)}function Z(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{get:Q,remove:$,update:Z,dispose:W}}function MY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function CQ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function kQ(){let J=[],Q=0,$=[],Z=[],W=[];function X(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(U,F,N,B,O,V){let E=J[Q];if(E===void 0)E={id:U.id,object:U,geometry:F,material:N,groupOrder:B,renderOrder:U.renderOrder,z:O,group:V},J[Q]=E;else E.id=U.id,E.object=U,E.geometry=F,E.material=N,E.groupOrder=B,E.renderOrder=U.renderOrder,E.z=O,E.group=V;return Q++,E}function H(U,F,N,B,O,V){let E=Y(U,F,N,B,O,V);if(N.transmission>0)Z.push(E);else if(N.transparent===!0)W.push(E);else $.push(E)}function K(U,F,N,B,O,V){let E=Y(U,F,N,B,O,V);if(N.transmission>0)Z.unshift(E);else if(N.transparent===!0)W.unshift(E);else $.unshift(E)}function G(U,F){if($.length>1)$.sort(U||MY);if(Z.length>1)Z.sort(F||CQ);if(W.length>1)W.sort(F||CQ)}function q(){for(let U=Q,F=J.length;U<F;U++){let N=J[U];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:X,push:H,unshift:K,finish:q,sort:G}}function LY(){let J=new WeakMap;function Q(Z,W){let X=J.get(Z),Y;if(X===void 0)Y=new kQ,J.set(Z,[Y]);else if(W>=X.length)Y=new kQ,X.push(Y);else Y=X[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function CY(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new A,color:new D0};break;case"SpotLight":$={position:new A,direction:new A,color:new D0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new A,color:new D0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new A,skyColor:new D0,groundColor:new D0};break;case"RectAreaLight":$={color:new D0,position:new A,halfWidth:new A,halfHeight:new A};break}return J[Q.id]=$,$}}}function kY(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var DY=0;function wY(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function _Y(J){let Q=new CY,$=kY(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)Z.probe.push(new A);let W=new A,X=new j0,Y=new j0;function H(G){let q=0,U=0,F=0;for(let C=0;C<9;C++)Z.probe[C].set(0,0,0);let N=0,B=0,O=0,V=0,E=0,z=0,D=0,_=0,f=0,L=0,j=0;G.sort(wY);for(let C=0,k=G.length;C<k;C++){let S=G[C],p=S.color,n=S.intensity,c=S.distance,v=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)q+=p.r*n,U+=p.g*n,F+=p.b*n;else if(S.isLightProbe){for(let h=0;h<9;h++)Z.probe[h].addScaledVector(S.sh.coefficients[h],n);j++}else if(S.isDirectionalLight){let h=Q.get(S);if(h.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let i=S.shadow,b=$.get(S);b.shadowIntensity=i.intensity,b.shadowBias=i.bias,b.shadowNormalBias=i.normalBias,b.shadowRadius=i.radius,b.shadowMapSize=i.mapSize,Z.directionalShadow[N]=b,Z.directionalShadowMap[N]=v,Z.directionalShadowMatrix[N]=S.shadow.matrix,z++}Z.directional[N]=h,N++}else if(S.isSpotLight){let h=Q.get(S);h.position.setFromMatrixPosition(S.matrixWorld),h.color.copy(p).multiplyScalar(n),h.distance=c,h.coneCos=Math.cos(S.angle),h.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),h.decay=S.decay,Z.spot[O]=h;let i=S.shadow;if(S.map){if(Z.spotLightMap[f]=S.map,f++,i.updateMatrices(S),S.castShadow)L++}if(Z.spotLightMatrix[O]=i.matrix,S.castShadow){let b=$.get(S);b.shadowIntensity=i.intensity,b.shadowBias=i.bias,b.shadowNormalBias=i.normalBias,b.shadowRadius=i.radius,b.shadowMapSize=i.mapSize,Z.spotShadow[O]=b,Z.spotShadowMap[O]=v,_++}O++}else if(S.isRectAreaLight){let h=Q.get(S);h.color.copy(p).multiplyScalar(n),h.halfWidth.set(S.width*0.5,0,0),h.halfHeight.set(0,S.height*0.5,0),Z.rectArea[V]=h,V++}else if(S.isPointLight){let h=Q.get(S);if(h.color.copy(S.color).multiplyScalar(S.intensity),h.distance=S.distance,h.decay=S.decay,S.castShadow){let i=S.shadow,b=$.get(S);b.shadowIntensity=i.intensity,b.shadowBias=i.bias,b.shadowNormalBias=i.normalBias,b.shadowRadius=i.radius,b.shadowMapSize=i.mapSize,b.shadowCameraNear=i.camera.near,b.shadowCameraFar=i.camera.far,Z.pointShadow[B]=b,Z.pointShadowMap[B]=v,Z.pointShadowMatrix[B]=S.shadow.matrix,D++}Z.point[B]=h,B++}else if(S.isHemisphereLight){let h=Q.get(S);h.skyColor.copy(S.color).multiplyScalar(n),h.groundColor.copy(S.groundColor).multiplyScalar(n),Z.hemi[E]=h,E++}}if(V>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=X0.LTC_FLOAT_1,Z.rectAreaLTC2=X0.LTC_FLOAT_2;else Z.rectAreaLTC1=X0.LTC_HALF_1,Z.rectAreaLTC2=X0.LTC_HALF_2;Z.ambient[0]=q,Z.ambient[1]=U,Z.ambient[2]=F;let d=Z.hash;if(d.directionalLength!==N||d.pointLength!==B||d.spotLength!==O||d.rectAreaLength!==V||d.hemiLength!==E||d.numDirectionalShadows!==z||d.numPointShadows!==D||d.numSpotShadows!==_||d.numSpotMaps!==f||d.numLightProbes!==j)Z.directional.length=N,Z.spot.length=O,Z.rectArea.length=V,Z.point.length=B,Z.hemi.length=E,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.pointShadow.length=D,Z.pointShadowMap.length=D,Z.spotShadow.length=_,Z.spotShadowMap.length=_,Z.directionalShadowMatrix.length=z,Z.pointShadowMatrix.length=D,Z.spotLightMatrix.length=_+f-L,Z.spotLightMap.length=f,Z.numSpotLightShadowsWithMaps=L,Z.numLightProbes=j,d.directionalLength=N,d.pointLength=B,d.spotLength=O,d.rectAreaLength=V,d.hemiLength=E,d.numDirectionalShadows=z,d.numPointShadows=D,d.numSpotShadows=_,d.numSpotMaps=f,d.numLightProbes=j,Z.version=DY++}function K(G,q){let U=0,F=0,N=0,B=0,O=0,V=q.matrixWorldInverse;for(let E=0,z=G.length;E<z;E++){let D=G[E];if(D.isDirectionalLight){let _=Z.directional[U];_.direction.setFromMatrixPosition(D.matrixWorld),W.setFromMatrixPosition(D.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(V),U++}else if(D.isSpotLight){let _=Z.spot[N];_.position.setFromMatrixPosition(D.matrixWorld),_.position.applyMatrix4(V),_.direction.setFromMatrixPosition(D.matrixWorld),W.setFromMatrixPosition(D.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(V),N++}else if(D.isRectAreaLight){let _=Z.rectArea[B];_.position.setFromMatrixPosition(D.matrixWorld),_.position.applyMatrix4(V),Y.identity(),X.copy(D.matrixWorld),X.premultiply(V),Y.extractRotation(X),_.halfWidth.set(D.width*0.5,0,0),_.halfHeight.set(0,D.height*0.5,0),_.halfWidth.applyMatrix4(Y),_.halfHeight.applyMatrix4(Y),B++}else if(D.isPointLight){let _=Z.point[F];_.position.setFromMatrixPosition(D.matrixWorld),_.position.applyMatrix4(V),F++}else if(D.isHemisphereLight){let _=Z.hemi[O];_.direction.setFromMatrixPosition(D.matrixWorld),_.direction.transformDirection(V),O++}}}return{setup:H,setupView:K,state:Z}}function DQ(J){let Q=new _Y(J),$=[],Z=[];function W(q){G.camera=q,$.length=0,Z.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function H(){Q.setup($)}function K(q){Q.setupView($,q)}let G={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:G,setupLights:H,setupLightsView:K,pushLight:X,pushShadow:Y}}function IY(J){let Q=new WeakMap;function $(W,X=0){let Y=Q.get(W),H;if(Y===void 0)H=new DQ(J),Q.set(W,[H]);else if(X>=Y.length)H=new DQ(J),Y.push(H);else H=Y[X];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}class M$ extends c6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class L$ extends c6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var PY=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AY=`uniform sampler2D shadow_pass;
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
}`;function TY(J,Q,$){let Z=new l7,W=new B0,X=new B0,Y=new c0,H=new M$({depthPacking:3201}),K=new L$,G={},q=$.maxTextureSize,U={[0]:1,[1]:0,[2]:2},F=new y6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B0},radius:{value:4}},vertexShader:PY,fragmentShader:AY}),N=F.clone();N.defines.HORIZONTAL_PASS=1;let B=new f6;B.setAttribute("position",new B6(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let O=new n0(B,F),V=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let E=this.type;this.render=function(L,j,d){if(V.enabled===!1)return;if(V.autoUpdate===!1&&V.needsUpdate===!1)return;if(L.length===0)return;let C=J.getRenderTarget(),k=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),p=J.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let n=E!==3&&this.type===3,c=E===3&&this.type!==3;for(let v=0,h=L.length;v<h;v++){let i=L[v],b=i.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",i,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;W.copy(b.mapSize);let J0=b.getFrameExtents();if(W.multiply(J0),X.copy(b.mapSize),W.x>q||W.y>q){if(W.x>q)X.x=Math.floor(q/J0.x),W.x=X.x*J0.x,b.mapSize.x=X.x;if(W.y>q)X.y=Math.floor(q/J0.y),W.y=X.y*J0.y,b.mapSize.y=X.y}if(b.map===null||n===!0||c===!0){let M0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(b.map!==null)b.map.dispose();b.map=new d6(W.x,W.y,M0),b.map.texture.name=i.name+".shadowMap",b.camera.updateProjectionMatrix()}J.setRenderTarget(b.map),J.clear();let G0=b.getViewportCount();for(let M0=0;M0<G0;M0++){let y0=b.getViewport(M0);Y.set(X.x*y0.x,X.y*y0.y,X.x*y0.z,X.y*y0.w),p.viewport(Y),b.updateMatrices(i,M0),Z=b.getFrustum(),_(j,d,b.camera,i,this.type)}if(b.isPointLightShadow!==!0&&this.type===3)z(b,d);b.needsUpdate=!1}E=this.type,V.needsUpdate=!1,J.setRenderTarget(C,k,S)};function z(L,j){let d=Q.update(O);if(F.defines.VSM_SAMPLES!==L.blurSamples)F.defines.VSM_SAMPLES=L.blurSamples,N.defines.VSM_SAMPLES=L.blurSamples,F.needsUpdate=!0,N.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new d6(W.x,W.y);F.uniforms.shadow_pass.value=L.map.texture,F.uniforms.resolution.value=L.mapSize,F.uniforms.radius.value=L.radius,J.setRenderTarget(L.mapPass),J.clear(),J.renderBufferDirect(j,null,d,F,O,null),N.uniforms.shadow_pass.value=L.mapPass.texture,N.uniforms.resolution.value=L.mapSize,N.uniforms.radius.value=L.radius,J.setRenderTarget(L.map),J.clear(),J.renderBufferDirect(j,null,d,N,O,null)}function D(L,j,d,C){let k=null,S=d.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(S!==void 0)k=S;else if(k=d.isPointLight===!0?K:H,J.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0){let p=k.uuid,n=j.uuid,c=G[p];if(c===void 0)c={},G[p]=c;let v=c[n];if(v===void 0)v=k.clone(),c[n]=v,j.addEventListener("dispose",f);k=v}if(k.visible=j.visible,k.wireframe=j.wireframe,C===3)k.side=j.shadowSide!==null?j.shadowSide:j.side;else k.side=j.shadowSide!==null?j.shadowSide:U[j.side];if(k.alphaMap=j.alphaMap,k.alphaTest=j.alphaTest,k.map=j.map,k.clipShadows=j.clipShadows,k.clippingPlanes=j.clippingPlanes,k.clipIntersection=j.clipIntersection,k.displacementMap=j.displacementMap,k.displacementScale=j.displacementScale,k.displacementBias=j.displacementBias,k.wireframeLinewidth=j.wireframeLinewidth,k.linewidth=j.linewidth,d.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let p=J.properties.get(k);p.light=d}return k}function _(L,j,d,C,k){if(L.visible===!1)return;if(L.layers.test(j.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&k===3)&&(!L.frustumCulled||Z.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,L.matrixWorld);let n=Q.update(L),c=L.material;if(Array.isArray(c)){let v=n.groups;for(let h=0,i=v.length;h<i;h++){let b=v[h],J0=c[b.materialIndex];if(J0&&J0.visible){let G0=D(L,J0,C,k);L.onBeforeShadow(J,L,j,d,n,G0,b),J.renderBufferDirect(d,null,n,G0,L,b),L.onAfterShadow(J,L,j,d,n,G0,b)}}}else if(c.visible){let v=D(L,c,C,k);L.onBeforeShadow(J,L,j,d,n,v,null),J.renderBufferDirect(d,null,n,v,L,null),L.onAfterShadow(J,L,j,d,n,v,null)}}}let p=L.children;for(let n=0,c=p.length;n<c;n++)_(p[n],j,d,C,k)}function f(L){L.target.removeEventListener("dispose",f);for(let d in G){let C=G[d],k=L.target.uuid;if(k in C)C[k].dispose(),delete C[k]}}}function SY(J){function Q(){let w=!1,a=new c0,l=null,s=new c0(0,0,0,0);return{setMask:function($0){if(l!==$0&&!w)J.colorMask($0,$0,$0,$0),l=$0},setLocked:function($0){w=$0},setClear:function($0,N0,d0,X6,K6){if(K6===!0)$0*=X6,N0*=X6,d0*=X6;if(a.set($0,N0,d0,X6),s.equals(a)===!1)J.clearColor($0,N0,d0,X6),s.copy(a)},reset:function(){w=!1,l=null,s.set(-1,0,0,0)}}}function $(){let w=!1,a=null,l=null,s=null;return{setTest:function($0){if($0)L0(J.DEPTH_TEST);else U0(J.DEPTH_TEST)},setMask:function($0){if(a!==$0&&!w)J.depthMask($0),a=$0},setFunc:function($0){if(l!==$0){switch($0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}l=$0}},setLocked:function($0){w=$0},setClear:function($0){if(s!==$0)J.clearDepth($0),s=$0},reset:function(){w=!1,a=null,l=null,s=null}}}function Z(){let w=!1,a=null,l=null,s=null,$0=null,N0=null,d0=null,X6=null,K6=null;return{setTest:function(b0){if(!w)if(b0)L0(J.STENCIL_TEST);else U0(J.STENCIL_TEST)},setMask:function(b0){if(a!==b0&&!w)J.stencilMask(b0),a=b0},setFunc:function(b0,G6,D6){if(l!==b0||s!==G6||$0!==D6)J.stencilFunc(b0,G6,D6),l=b0,s=G6,$0=D6},setOp:function(b0,G6,D6){if(N0!==b0||d0!==G6||X6!==D6)J.stencilOp(b0,G6,D6),N0=b0,d0=G6,X6=D6},setLocked:function(b0){w=b0},setClear:function(b0){if(K6!==b0)J.clearStencil(b0),K6=b0},reset:function(){w=!1,a=null,l=null,s=null,$0=null,N0=null,d0=null,X6=null,K6=null}}}let W=new Q,X=new $,Y=new Z,H=new WeakMap,K=new WeakMap,G={},q={},U=new WeakMap,F=[],N=null,B=!1,O=null,V=null,E=null,z=null,D=null,_=null,f=null,L=new D0(0,0,0),j=0,d=!1,C=null,k=null,S=null,p=null,n=null,c=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,h=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)h=parseFloat(/^WebGL (\d)/.exec(i)[1]),v=h>=1;else if(i.indexOf("OpenGL ES")!==-1)h=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),v=h>=2;let b=null,J0={},G0=J.getParameter(J.SCISSOR_BOX),M0=J.getParameter(J.VIEWPORT),y0=new c0().fromArray(G0),o=new c0().fromArray(M0);function W0(w,a,l,s){let $0=new Uint8Array(4),N0=J.createTexture();J.bindTexture(w,N0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let d0=0;d0<l;d0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(a,0,J.RGBA,1,1,s,0,J.RGBA,J.UNSIGNED_BYTE,$0);else J.texImage2D(a+d0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,$0);return N0}let F0={};F0[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),F0[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),F0[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),F0[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),L0(J.DEPTH_TEST),X.setFunc(3),C0(!1),l0(1),L0(J.CULL_FACE),g0(0);function L0(w){if(G[w]!==!0)J.enable(w),G[w]=!0}function U0(w){if(G[w]!==!1)J.disable(w),G[w]=!1}function A0(w,a){if(q[w]!==a){if(J.bindFramebuffer(w,a),q[w]=a,w===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=a;if(w===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=a;return!0}return!1}function e0(w,a){let l=F,s=!1;if(w){if(l=U.get(a),l===void 0)l=[],U.set(a,l);let $0=w.textures;if(l.length!==$0.length||l[0]!==J.COLOR_ATTACHMENT0){for(let N0=0,d0=$0.length;N0<d0;N0++)l[N0]=J.COLOR_ATTACHMENT0+N0;l.length=$0.length,s=!0}}else if(l[0]!==J.BACK)l[0]=J.BACK,s=!0;if(s)J.drawBuffers(l)}function h0(w){if(N!==w)return J.useProgram(w),N=w,!0;return!1}let T={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};T[103]=J.MIN,T[104]=J.MAX;let W6={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(w,a,l,s,$0,N0,d0,X6,K6,b0){if(w===0){if(B===!0)U0(J.BLEND),B=!1;return}if(B===!1)L0(J.BLEND),B=!0;if(w!==5){if(w!==O||b0!==d){if(V!==100||D!==100)J.blendEquation(J.FUNC_ADD),V=100,D=100;if(b0)switch(w){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}E=null,z=null,_=null,f=null,L.set(0,0,0),j=0,O=w,d=b0}return}if($0=$0||a,N0=N0||l,d0=d0||s,a!==V||$0!==D)J.blendEquationSeparate(T[a],T[$0]),V=a,D=$0;if(l!==E||s!==z||N0!==_||d0!==f)J.blendFuncSeparate(W6[l],W6[s],W6[N0],W6[d0]),E=l,z=s,_=N0,f=d0;if(X6.equals(L)===!1||K6!==j)J.blendColor(X6.r,X6.g,X6.b,K6),L.copy(X6),j=K6;O=w,d=!1}function Q6(w,a){w.side===2?U0(J.CULL_FACE):L0(J.CULL_FACE);let l=w.side===1;if(a)l=!l;C0(l),w.blending===1&&w.transparent===!1?g0(0):g0(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),X.setFunc(w.depthFunc),X.setTest(w.depthTest),X.setMask(w.depthWrite),W.setMask(w.colorWrite);let s=w.stencilWrite;if(Y.setTest(s),s)Y.setMask(w.stencilWriteMask),Y.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),Y.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);S0(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?L0(J.SAMPLE_ALPHA_TO_COVERAGE):U0(J.SAMPLE_ALPHA_TO_COVERAGE)}function C0(w){if(C!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);C=w}}function l0(w){if(w!==0){if(L0(J.CULL_FACE),w!==k)if(w===1)J.cullFace(J.BACK);else if(w===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else U0(J.CULL_FACE);k=w}function T0(w){if(w!==S){if(v)J.lineWidth(w);S=w}}function S0(w,a,l){if(w){if(L0(J.POLYGON_OFFSET_FILL),p!==a||n!==l)J.polygonOffset(a,l),p=a,n=l}else U0(J.POLYGON_OFFSET_FILL)}function Z6(w){if(w)L0(J.SCISSOR_TEST);else U0(J.SCISSOR_TEST)}function I(w){if(w===void 0)w=J.TEXTURE0+c-1;if(b!==w)J.activeTexture(w),b=w}function R(w,a,l){if(l===void 0)if(b===null)l=J.TEXTURE0+c-1;else l=b;let s=J0[l];if(s===void 0)s={type:void 0,texture:void 0},J0[l]=s;if(s.type!==w||s.texture!==a){if(b!==l)J.activeTexture(l),b=l;J.bindTexture(w,a||F0[w]),s.type=w,s.texture=a}}function m(){let w=J0[b];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function r(){try{J.compressedTexImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function t(){try{J.compressedTexImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function e(){try{J.texSubImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function z0(){try{J.texSubImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function H0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function v0(){try{J.texStorage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q0(){try{J.texStorage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function O0(){try{J.texImage2D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function u0(){try{J.texImage3D.apply(J,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function w0(w){if(y0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),y0.copy(w)}function K0(w){if(o.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),o.copy(w)}function I0(w,a){let l=K.get(a);if(l===void 0)l=new WeakMap,K.set(a,l);let s=l.get(w);if(s===void 0)s=J.getUniformBlockIndex(a,w.name),l.set(w,s)}function m0(w,a){let s=K.get(a).get(w);if(H.get(a)!==s)J.uniformBlockBinding(a,s,w.__bindingPointIndex),H.set(a,s)}function P(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},b=null,J0={},q={},U=new WeakMap,F=[],N=null,B=!1,O=null,V=null,E=null,z=null,D=null,_=null,f=null,L=new D0(0,0,0),j=0,d=!1,C=null,k=null,S=null,p=null,n=null,y0.set(0,0,J.canvas.width,J.canvas.height),o.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:L0,disable:U0,bindFramebuffer:A0,drawBuffers:e0,useProgram:h0,setBlending:g0,setMaterial:Q6,setFlipSided:C0,setCullFace:l0,setLineWidth:T0,setPolygonOffset:S0,setScissorTest:Z6,activeTexture:I,bindTexture:R,unbindTexture:m,compressedTexImage2D:r,compressedTexImage3D:t,texImage2D:O0,texImage3D:u0,updateUBOMapping:I0,uniformBlockBinding:m0,texStorage2D:v0,texStorage3D:Q0,texSubImage2D:e,texSubImage3D:z0,compressedTexSubImage2D:Y0,compressedTexSubImage3D:H0,scissor:w0,viewport:K0,reset:P}}function wQ(J,Q,$,Z){let W=jY(Z);switch($){case 1021:return J*Q;case 1024:return J*Q;case 1025:return J*Q*2;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function jY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}function yY(J,Q,$,Z,W,X,Y){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new B0,q=new WeakMap,U,F=new WeakMap,N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function B(I,R){return N?new OffscreenCanvas(I,R):o9("canvas")}function O(I,R,m){let r=1,t=Z6(I);if(t.width>m||t.height>m)r=m/Math.max(t.width,t.height);if(r<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let e=Math.floor(r*t.width),z0=Math.floor(r*t.height);if(U===void 0)U=B(e,z0);let Y0=R?B(e,z0):U;return Y0.width=e,Y0.height=z0,Y0.getContext("2d").drawImage(I,0,0,e,z0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+e+"x"+z0+")."),Y0}else{if("data"in I)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return I}return I}function V(I){return I.generateMipmaps&&I.minFilter!==1003&&I.minFilter!==1006}function E(I){J.generateMipmap(I)}function z(I,R,m,r,t=!1){if(I!==null){if(J[I]!==void 0)return J[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let e=R;if(R===J.RED){if(m===J.FLOAT)e=J.R32F;if(m===J.HALF_FLOAT)e=J.R16F;if(m===J.UNSIGNED_BYTE)e=J.R8}if(R===J.RED_INTEGER){if(m===J.UNSIGNED_BYTE)e=J.R8UI;if(m===J.UNSIGNED_SHORT)e=J.R16UI;if(m===J.UNSIGNED_INT)e=J.R32UI;if(m===J.BYTE)e=J.R8I;if(m===J.SHORT)e=J.R16I;if(m===J.INT)e=J.R32I}if(R===J.RG){if(m===J.FLOAT)e=J.RG32F;if(m===J.HALF_FLOAT)e=J.RG16F;if(m===J.UNSIGNED_BYTE)e=J.RG8}if(R===J.RG_INTEGER){if(m===J.UNSIGNED_BYTE)e=J.RG8UI;if(m===J.UNSIGNED_SHORT)e=J.RG16UI;if(m===J.UNSIGNED_INT)e=J.RG32UI;if(m===J.BYTE)e=J.RG8I;if(m===J.SHORT)e=J.RG16I;if(m===J.INT)e=J.RG32I}if(R===J.RGB){if(m===J.UNSIGNED_INT_5_9_9_9_REV)e=J.RGB9_E5}if(R===J.RGBA){let z0=t?"linear":s0.getTransfer(r);if(m===J.FLOAT)e=J.RGBA32F;if(m===J.HALF_FLOAT)e=J.RGBA16F;if(m===J.UNSIGNED_BYTE)e=z0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(m===J.UNSIGNED_SHORT_4_4_4_4)e=J.RGBA4;if(m===J.UNSIGNED_SHORT_5_5_5_1)e=J.RGB5_A1}if(e===J.R16F||e===J.R32F||e===J.RG16F||e===J.RG32F||e===J.RGBA16F||e===J.RGBA32F)Q.get("EXT_color_buffer_float");return e}function D(I,R){let m;if(I){if(R===null||R===1014||R===1020)m=J.DEPTH24_STENCIL8;else if(R===1015)m=J.DEPTH32F_STENCIL8;else if(R===1012)m=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===1014||R===1020)m=J.DEPTH_COMPONENT24;else if(R===1015)m=J.DEPTH_COMPONENT32F;else if(R===1012)m=J.DEPTH_COMPONENT16;return m}function _(I,R){if(V(I)===!0||I.isFramebufferTexture&&I.minFilter!==1003&&I.minFilter!==1006)return Math.log2(Math.max(R.width,R.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return R.mipmaps.length;else return 1}function f(I){let R=I.target;if(R.removeEventListener("dispose",f),j(R),R.isVideoTexture)q.delete(R)}function L(I){let R=I.target;R.removeEventListener("dispose",L),C(R)}function j(I){let R=Z.get(I);if(R.__webglInit===void 0)return;let m=I.source,r=F.get(m);if(r){let t=r[R.__cacheKey];if(t.usedTimes--,t.usedTimes===0)d(I);if(Object.keys(r).length===0)F.delete(m)}Z.remove(I)}function d(I){let R=Z.get(I);J.deleteTexture(R.__webglTexture);let m=I.source,r=F.get(m);delete r[R.__cacheKey],Y.memory.textures--}function C(I){let R=Z.get(I);if(I.depthTexture)I.depthTexture.dispose();if(I.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(R.__webglFramebuffer[r]))for(let t=0;t<R.__webglFramebuffer[r].length;t++)J.deleteFramebuffer(R.__webglFramebuffer[r][t]);else J.deleteFramebuffer(R.__webglFramebuffer[r]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[r])}else{if(Array.isArray(R.__webglFramebuffer))for(let r=0;r<R.__webglFramebuffer.length;r++)J.deleteFramebuffer(R.__webglFramebuffer[r]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let r=0;r<R.__webglColorRenderbuffer.length;r++)if(R.__webglColorRenderbuffer[r])J.deleteRenderbuffer(R.__webglColorRenderbuffer[r])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let m=I.textures;for(let r=0,t=m.length;r<t;r++){let e=Z.get(m[r]);if(e.__webglTexture)J.deleteTexture(e.__webglTexture),Y.memory.textures--;Z.remove(m[r])}Z.remove(I)}let k=0;function S(){k=0}function p(){let I=k;if(I>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+W.maxTextures);return k+=1,I}function n(I){let R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function c(I,R){let m=Z.get(I);if(I.isVideoTexture)T0(I);if(I.isRenderTargetTexture===!1&&I.version>0&&m.__version!==I.version){let r=I.image;if(r===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(r.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{o(m,I,R);return}}$.bindTexture(J.TEXTURE_2D,m.__webglTexture,J.TEXTURE0+R)}function v(I,R){let m=Z.get(I);if(I.version>0&&m.__version!==I.version){o(m,I,R);return}$.bindTexture(J.TEXTURE_2D_ARRAY,m.__webglTexture,J.TEXTURE0+R)}function h(I,R){let m=Z.get(I);if(I.version>0&&m.__version!==I.version){o(m,I,R);return}$.bindTexture(J.TEXTURE_3D,m.__webglTexture,J.TEXTURE0+R)}function i(I,R){let m=Z.get(I);if(I.version>0&&m.__version!==I.version){W0(m,I,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture,J.TEXTURE0+R)}let b={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},J0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},G0={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function M0(I,R){if(R.type===1015&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===1006||R.magFilter===1007||R.magFilter===1005||R.magFilter===1008||R.minFilter===1006||R.minFilter===1007||R.minFilter===1005||R.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,b[R.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,b[R.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,b[R.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,J0[R.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,J0[R.minFilter]),R.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,G0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===1003)return;if(R.minFilter!==1005&&R.minFilter!==1008)return;if(R.type===1015&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let m=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(I,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function y0(I,R){let m=!1;if(I.__webglInit===void 0)I.__webglInit=!0,R.addEventListener("dispose",f);let r=R.source,t=F.get(r);if(t===void 0)t={},F.set(r,t);let e=n(R);if(e!==I.__cacheKey){if(t[e]===void 0)t[e]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,m=!0;t[e].usedTimes++;let z0=t[I.__cacheKey];if(z0!==void 0){if(t[I.__cacheKey].usedTimes--,z0.usedTimes===0)d(R)}I.__cacheKey=e,I.__webglTexture=t[e].texture}return m}function o(I,R,m){let r=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)r=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)r=J.TEXTURE_3D;let t=y0(I,R),e=R.source;$.bindTexture(r,I.__webglTexture,J.TEXTURE0+m);let z0=Z.get(e);if(e.version!==z0.__version||t===!0){$.activeTexture(J.TEXTURE0+m);let Y0=s0.getPrimaries(s0.workingColorSpace),H0=R.colorSpace===""?null:s0.getPrimaries(R.colorSpace),v0=R.colorSpace===""||Y0===H0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0);let Q0=O(R.image,!1,W.maxTextureSize);Q0=S0(R,Q0);let O0=X.convert(R.format,R.colorSpace),u0=X.convert(R.type),w0=z(R.internalFormat,O0,u0,R.colorSpace,R.isVideoTexture);M0(r,R);let K0,I0=R.mipmaps,m0=R.isVideoTexture!==!0,P=z0.__version===void 0||t===!0,w=e.dataReady,a=_(R,Q0);if(R.isDepthTexture){if(w0=D(R.format===1027,R.type),P)if(m0)$.texStorage2D(J.TEXTURE_2D,1,w0,Q0.width,Q0.height);else $.texImage2D(J.TEXTURE_2D,0,w0,Q0.width,Q0.height,0,O0,u0,null)}else if(R.isDataTexture)if(I0.length>0){if(m0&&P)$.texStorage2D(J.TEXTURE_2D,a,w0,I0[0].width,I0[0].height);for(let l=0,s=I0.length;l<s;l++)if(K0=I0[l],m0){if(w)$.texSubImage2D(J.TEXTURE_2D,l,0,0,K0.width,K0.height,O0,u0,K0.data)}else $.texImage2D(J.TEXTURE_2D,l,w0,K0.width,K0.height,0,O0,u0,K0.data);R.generateMipmaps=!1}else if(m0){if(P)$.texStorage2D(J.TEXTURE_2D,a,w0,Q0.width,Q0.height);if(w)$.texSubImage2D(J.TEXTURE_2D,0,0,0,Q0.width,Q0.height,O0,u0,Q0.data)}else $.texImage2D(J.TEXTURE_2D,0,w0,Q0.width,Q0.height,0,O0,u0,Q0.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(m0&&P)$.texStorage3D(J.TEXTURE_2D_ARRAY,a,w0,I0[0].width,I0[0].height,Q0.depth);for(let l=0,s=I0.length;l<s;l++)if(K0=I0[l],R.format!==1023)if(O0!==null)if(m0){if(w)if(R.layerUpdates.size>0){let $0=wQ(K0.width,K0.height,R.format,R.type);for(let N0 of R.layerUpdates){let d0=K0.data.subarray(N0*$0/K0.data.BYTES_PER_ELEMENT,(N0+1)*$0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,l,0,0,N0,K0.width,K0.height,1,O0,d0,0,0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,l,0,0,0,K0.width,K0.height,Q0.depth,O0,K0.data,0,0)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,l,w0,K0.width,K0.height,Q0.depth,0,K0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(w)$.texSubImage3D(J.TEXTURE_2D_ARRAY,l,0,0,0,K0.width,K0.height,Q0.depth,O0,u0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,l,w0,K0.width,K0.height,Q0.depth,0,O0,u0,K0.data)}else{if(m0&&P)$.texStorage2D(J.TEXTURE_2D,a,w0,I0[0].width,I0[0].height);for(let l=0,s=I0.length;l<s;l++)if(K0=I0[l],R.format!==1023)if(O0!==null)if(m0){if(w)$.compressedTexSubImage2D(J.TEXTURE_2D,l,0,0,K0.width,K0.height,O0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,l,w0,K0.width,K0.height,0,K0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(w)$.texSubImage2D(J.TEXTURE_2D,l,0,0,K0.width,K0.height,O0,u0,K0.data)}else $.texImage2D(J.TEXTURE_2D,l,w0,K0.width,K0.height,0,O0,u0,K0.data)}else if(R.isDataArrayTexture)if(m0){if(P)$.texStorage3D(J.TEXTURE_2D_ARRAY,a,w0,Q0.width,Q0.height,Q0.depth);if(w)if(R.layerUpdates.size>0){let l=wQ(Q0.width,Q0.height,R.format,R.type);for(let s of R.layerUpdates){let $0=Q0.data.subarray(s*l/Q0.data.BYTES_PER_ELEMENT,(s+1)*l/Q0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,Q0.width,Q0.height,1,O0,u0,$0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,Q0.width,Q0.height,Q0.depth,O0,u0,Q0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,w0,Q0.width,Q0.height,Q0.depth,0,O0,u0,Q0.data);else if(R.isData3DTexture)if(m0){if(P)$.texStorage3D(J.TEXTURE_3D,a,w0,Q0.width,Q0.height,Q0.depth);if(w)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,Q0.width,Q0.height,Q0.depth,O0,u0,Q0.data)}else $.texImage3D(J.TEXTURE_3D,0,w0,Q0.width,Q0.height,Q0.depth,0,O0,u0,Q0.data);else if(R.isFramebufferTexture){if(P)if(m0)$.texStorage2D(J.TEXTURE_2D,a,w0,Q0.width,Q0.height);else{let{width:l,height:s}=Q0;for(let $0=0;$0<a;$0++)$.texImage2D(J.TEXTURE_2D,$0,w0,l,s,0,O0,u0,null),l>>=1,s>>=1}}else if(I0.length>0){if(m0&&P){let l=Z6(I0[0]);$.texStorage2D(J.TEXTURE_2D,a,w0,l.width,l.height)}for(let l=0,s=I0.length;l<s;l++)if(K0=I0[l],m0){if(w)$.texSubImage2D(J.TEXTURE_2D,l,0,0,O0,u0,K0)}else $.texImage2D(J.TEXTURE_2D,l,w0,O0,u0,K0);R.generateMipmaps=!1}else if(m0){if(P){let l=Z6(Q0);$.texStorage2D(J.TEXTURE_2D,a,w0,l.width,l.height)}if(w)$.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,u0,Q0)}else $.texImage2D(J.TEXTURE_2D,0,w0,O0,u0,Q0);if(V(R))E(r);if(z0.__version=e.version,R.onUpdate)R.onUpdate(R)}I.__version=R.version}function W0(I,R,m){if(R.image.length!==6)return;let r=y0(I,R),t=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+m);let e=Z.get(t);if(t.version!==e.__version||r===!0){$.activeTexture(J.TEXTURE0+m);let z0=s0.getPrimaries(s0.workingColorSpace),Y0=R.colorSpace===""?null:s0.getPrimaries(R.colorSpace),H0=R.colorSpace===""||z0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,H0);let v0=R.isCompressedTexture||R.image[0].isCompressedTexture,Q0=R.image[0]&&R.image[0].isDataTexture,O0=[];for(let s=0;s<6;s++){if(!v0&&!Q0)O0[s]=O(R.image[s],!0,W.maxCubemapSize);else O0[s]=Q0?R.image[s].image:R.image[s];O0[s]=S0(R,O0[s])}let u0=O0[0],w0=X.convert(R.format,R.colorSpace),K0=X.convert(R.type),I0=z(R.internalFormat,w0,K0,R.colorSpace),m0=R.isVideoTexture!==!0,P=e.__version===void 0||r===!0,w=t.dataReady,a=_(R,u0);M0(J.TEXTURE_CUBE_MAP,R);let l;if(v0){if(m0&&P)$.texStorage2D(J.TEXTURE_CUBE_MAP,a,I0,u0.width,u0.height);for(let s=0;s<6;s++){l=O0[s].mipmaps;for(let $0=0;$0<l.length;$0++){let N0=l[$0];if(R.format!==1023)if(w0!==null)if(m0){if(w)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0,0,0,N0.width,N0.height,w0,N0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0,I0,N0.width,N0.height,0,N0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m0){if(w)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0,0,0,N0.width,N0.height,w0,K0,N0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0,I0,N0.width,N0.height,0,w0,K0,N0.data)}}}else{if(l=R.mipmaps,m0&&P){if(l.length>0)a++;let s=Z6(O0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,a,I0,s.width,s.height)}for(let s=0;s<6;s++)if(Q0){if(m0){if(w)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,O0[s].width,O0[s].height,w0,K0,O0[s].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,I0,O0[s].width,O0[s].height,0,w0,K0,O0[s].data);for(let $0=0;$0<l.length;$0++){let d0=l[$0].image[s].image;if(m0){if(w)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0+1,0,0,d0.width,d0.height,w0,K0,d0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0+1,I0,d0.width,d0.height,0,w0,K0,d0.data)}}else{if(m0){if(w)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,w0,K0,O0[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,I0,w0,K0,O0[s]);for(let $0=0;$0<l.length;$0++){let N0=l[$0];if(m0){if(w)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0+1,0,0,w0,K0,N0.image[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,$0+1,I0,w0,K0,N0.image[s])}}}if(V(R))E(J.TEXTURE_CUBE_MAP);if(e.__version=t.version,R.onUpdate)R.onUpdate(R)}I.__version=R.version}function F0(I,R,m,r,t,e){let z0=X.convert(m.format,m.colorSpace),Y0=X.convert(m.type),H0=z(m.internalFormat,z0,Y0,m.colorSpace);if(!Z.get(R).__hasExternalTextures){let Q0=Math.max(1,R.width>>e),O0=Math.max(1,R.height>>e);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)$.texImage3D(t,e,H0,Q0,O0,R.depth,0,z0,Y0,null);else $.texImage2D(t,e,H0,Q0,O0,0,z0,Y0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,I),l0(R))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,t,Z.get(m).__webglTexture,0,C0(R));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,r,t,Z.get(m).__webglTexture,e);$.bindFramebuffer(J.FRAMEBUFFER,null)}function L0(I,R,m){if(J.bindRenderbuffer(J.RENDERBUFFER,I),R.depthBuffer){let r=R.depthTexture,t=r&&r.isDepthTexture?r.type:null,e=D(R.stencilBuffer,t),z0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=C0(R);if(l0(R))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Y0,e,R.width,R.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,Y0,e,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,e,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,z0,J.RENDERBUFFER,I)}else{let r=R.textures;for(let t=0;t<r.length;t++){let e=r[t],z0=X.convert(e.format,e.colorSpace),Y0=X.convert(e.type),H0=z(e.internalFormat,z0,Y0,e.colorSpace),v0=C0(R);if(m&&l0(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,v0,H0,R.width,R.height);else if(l0(R))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,v0,H0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,H0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function U0(I,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!Z.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;c(R.depthTexture,0);let r=Z.get(R.depthTexture).__webglTexture,t=C0(R);if(R.depthTexture.format===1026)if(l0(R))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0,t);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0);else if(R.depthTexture.format===1027)if(l0(R))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0,t);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0);else throw Error("Unknown depthTexture format")}function A0(I){let R=Z.get(I),m=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(m)throw Error("target.depthTexture not supported in Cube render targets");U0(R.__webglFramebuffer,I)}else if(m){R.__webglDepthbuffer=[];for(let r=0;r<6;r++)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[r]),R.__webglDepthbuffer[r]=J.createRenderbuffer(),L0(R.__webglDepthbuffer[r],I,!1)}else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=J.createRenderbuffer(),L0(R.__webglDepthbuffer,I,!1);$.bindFramebuffer(J.FRAMEBUFFER,null)}function e0(I,R,m){let r=Z.get(I);if(R!==void 0)F0(r.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(m!==void 0)A0(I)}function h0(I){let R=I.texture,m=Z.get(I),r=Z.get(R);I.addEventListener("dispose",L);let t=I.textures,e=I.isWebGLCubeRenderTarget===!0,z0=t.length>1;if(!z0){if(r.__webglTexture===void 0)r.__webglTexture=J.createTexture();r.__version=R.version,Y.memory.textures++}if(e){m.__webglFramebuffer=[];for(let Y0=0;Y0<6;Y0++)if(R.mipmaps&&R.mipmaps.length>0){m.__webglFramebuffer[Y0]=[];for(let H0=0;H0<R.mipmaps.length;H0++)m.__webglFramebuffer[Y0][H0]=J.createFramebuffer()}else m.__webglFramebuffer[Y0]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){m.__webglFramebuffer=[];for(let Y0=0;Y0<R.mipmaps.length;Y0++)m.__webglFramebuffer[Y0]=J.createFramebuffer()}else m.__webglFramebuffer=J.createFramebuffer();if(z0)for(let Y0=0,H0=t.length;Y0<H0;Y0++){let v0=Z.get(t[Y0]);if(v0.__webglTexture===void 0)v0.__webglTexture=J.createTexture(),Y.memory.textures++}if(I.samples>0&&l0(I)===!1){m.__webglMultisampledFramebuffer=J.createFramebuffer(),m.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let Y0=0;Y0<t.length;Y0++){let H0=t[Y0];m.__webglColorRenderbuffer[Y0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,m.__webglColorRenderbuffer[Y0]);let v0=X.convert(H0.format,H0.colorSpace),Q0=X.convert(H0.type),O0=z(H0.internalFormat,v0,Q0,H0.colorSpace,I.isXRRenderTarget===!0),u0=C0(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,u0,O0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,m.__webglColorRenderbuffer[Y0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)m.__webglDepthRenderbuffer=J.createRenderbuffer(),L0(m.__webglDepthRenderbuffer,I,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(e){$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),M0(J.TEXTURE_CUBE_MAP,R);for(let Y0=0;Y0<6;Y0++)if(R.mipmaps&&R.mipmaps.length>0)for(let H0=0;H0<R.mipmaps.length;H0++)F0(m.__webglFramebuffer[Y0][H0],I,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,H0);else F0(m.__webglFramebuffer[Y0],I,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0);if(V(R))E(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(z0){for(let Y0=0,H0=t.length;Y0<H0;Y0++){let v0=t[Y0],Q0=Z.get(v0);if($.bindTexture(J.TEXTURE_2D,Q0.__webglTexture),M0(J.TEXTURE_2D,v0),F0(m.__webglFramebuffer,I,v0,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,0),V(v0))E(J.TEXTURE_2D)}$.unbindTexture()}else{let Y0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)Y0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Y0,r.__webglTexture),M0(Y0,R),R.mipmaps&&R.mipmaps.length>0)for(let H0=0;H0<R.mipmaps.length;H0++)F0(m.__webglFramebuffer[H0],I,R,J.COLOR_ATTACHMENT0,Y0,H0);else F0(m.__webglFramebuffer,I,R,J.COLOR_ATTACHMENT0,Y0,0);if(V(R))E(Y0);$.unbindTexture()}if(I.depthBuffer)A0(I)}function T(I){let R=I.textures;for(let m=0,r=R.length;m<r;m++){let t=R[m];if(V(t)){let e=I.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,z0=Z.get(t).__webglTexture;$.bindTexture(e,z0),E(e),$.unbindTexture()}}}let W6=[],g0=[];function Q6(I){if(I.samples>0){if(l0(I)===!1){let{textures:R,width:m,height:r}=I,t=J.COLOR_BUFFER_BIT,e=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=Z.get(I),Y0=R.length>1;if(Y0)for(let H0=0;H0<R.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,z0.__webglMultisampledFramebuffer),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer);for(let H0=0;H0<R.length;H0++){if(I.resolveDepthBuffer){if(I.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(Y0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[H0]);let v0=Z.get(R[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,v0,0)}if(J.blitFramebuffer(0,0,m,r,0,0,m,r,t,J.NEAREST),K===!0){if(W6.length=0,g0.length=0,W6.push(J.COLOR_ATTACHMENT0+H0),I.depthBuffer&&I.resolveDepthBuffer===!1)W6.push(e),g0.push(e),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,g0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,W6)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Y0)for(let H0=0;H0<R.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[H0]);let v0=Z.get(R[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,v0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&K){let R=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function C0(I){return Math.min(W.maxSamples,I.samples)}function l0(I){let R=Z.get(I);return I.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function T0(I){let R=Y.render.frame;if(q.get(I)!==R)q.set(I,R),I.update()}function S0(I,R){let{colorSpace:m,format:r,type:t}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return R;if(m!=="srgb-linear"&&m!=="")if(s0.getTransfer(m)==="srgb"){if(r!==1023||t!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",m);return R}function Z6(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)G.width=I.naturalWidth||I.width,G.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)G.width=I.displayWidth,G.height=I.displayHeight;else G.width=I.width,G.height=I.height;return G}this.allocateTextureUnit=p,this.resetTextureUnits=S,this.setTexture2D=c,this.setTexture2DArray=v,this.setTexture3D=h,this.setTextureCube=i,this.rebindTextures=e0,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Q6,this.setupDepthRenderbuffer=A0,this.setupFrameBufferTexture=F0,this.useMultisampledRTT=l0}function fY(J,Q){function $(Z,W=""){let X,Y=s0.getTransfer(W);if(Z===1009)return J.UNSIGNED_BYTE;if(Z===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===35902)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===1010)return J.BYTE;if(Z===1011)return J.SHORT;if(Z===1012)return J.UNSIGNED_SHORT;if(Z===1013)return J.INT;if(Z===1014)return J.UNSIGNED_INT;if(Z===1015)return J.FLOAT;if(Z===1016)return J.HALF_FLOAT;if(Z===1021)return J.ALPHA;if(Z===1022)return J.RGB;if(Z===1023)return J.RGBA;if(Z===1024)return J.LUMINANCE;if(Z===1025)return J.LUMINANCE_ALPHA;if(Z===1026)return J.DEPTH_COMPONENT;if(Z===1027)return J.DEPTH_STENCIL;if(Z===1028)return J.RED;if(Z===1029)return J.RED_INTEGER;if(Z===1030)return J.RG;if(Z===1031)return J.RG_INTEGER;if(Z===1033)return J.RGBA_INTEGER;if(Z===33776||Z===33777||Z===33778||Z===33779)if(Y==="srgb")if(X=Q.get("WEBGL_compressed_texture_s3tc_srgb"),X!==null){if(Z===33776)return X.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===33777)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===33778)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===33779)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(X=Q.get("WEBGL_compressed_texture_s3tc"),X!==null){if(Z===33776)return X.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===33777)return X.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===33778)return X.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===33779)return X.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===35840||Z===35841||Z===35842||Z===35843)if(X=Q.get("WEBGL_compressed_texture_pvrtc"),X!==null){if(Z===35840)return X.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===35841)return X.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===35842)return X.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===35843)return X.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===36196||Z===37492||Z===37496)if(X=Q.get("WEBGL_compressed_texture_etc"),X!==null){if(Z===36196||Z===37492)return Y==="srgb"?X.COMPRESSED_SRGB8_ETC2:X.COMPRESSED_RGB8_ETC2;if(Z===37496)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:X.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===37808||Z===37809||Z===37810||Z===37811||Z===37812||Z===37813||Z===37814||Z===37815||Z===37816||Z===37817||Z===37818||Z===37819||Z===37820||Z===37821)if(X=Q.get("WEBGL_compressed_texture_astc"),X!==null){if(Z===37808)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:X.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===37809)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:X.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===37810)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:X.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===37811)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:X.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===37812)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:X.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===37813)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:X.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===37814)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:X.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===37815)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:X.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===37816)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:X.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===37817)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:X.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===37818)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:X.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===37819)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:X.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===37820)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:X.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===37821)return Y==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:X.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===36492||Z===36494||Z===36495)if(X=Q.get("EXT_texture_compression_bptc"),X!==null){if(Z===36492)return Y==="srgb"?X.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:X.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===36494)return X.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===36495)return X.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===36283||Z===36284||Z===36285||Z===36286)if(X=Q.get("EXT_texture_compression_rgtc"),X!==null){if(Z===36492)return X.COMPRESSED_RED_RGTC1_EXT;if(Z===36284)return X.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===36285)return X.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===36286)return X.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===1020)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}class C$ extends I6{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class e6 extends $6{constructor(){super();this.isGroup=!0,this.type="Group"}}var vY={type:"move"};class h7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new e6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new e6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new e6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,X=null,Y=this._targetRay,H=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){X=!0;for(let B of J.hand.values()){let O=Q.getJointPose(B,$),V=this._getHandJoint(K,B);if(O!==null)V.matrix.fromArray(O.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,V.jointRadius=O.radius;V.visible=O!==null}let G=K.joints["index-finger-tip"],q=K.joints["thumb-tip"],U=G.position.distanceTo(q.position),F=0.02,N=0.005;if(K.inputState.pinching&&U>F+N)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&U<=F-N)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(vY)}}}if(Y!==null)Y.visible=Z!==null;if(H!==null)H.visible=W!==null;if(K!==null)K.visible=X!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new e6;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var xY=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hY=`
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

}`;class k${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,$){if(this.texture===null){let Z=new F6,W=J.properties.get(Z);if(W.__webglTexture=Q.texture,Q.depthNear!=$.depthNear||Q.depthFar!=$.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new y6({vertexShader:xY,fragmentShader:hY,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new n0(new I9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D$ extends R8{constructor(J,Q){super();let $=this,Z=null,W=1,X=null,Y="local-floor",H=1,K=null,G=null,q=null,U=null,F=null,N=null,B=new k$,O=Q.getContextAttributes(),V=null,E=null,z=[],D=[],_=new B0,f=null,L=new I6;L.layers.enable(1),L.viewport=new c0;let j=new I6;j.layers.enable(2),j.viewport=new c0;let d=[L,j],C=new C$;C.layers.enable(1),C.layers.enable(2);let k=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let W0=z[o];if(W0===void 0)W0=new h7,z[o]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(o){let W0=z[o];if(W0===void 0)W0=new h7,z[o]=W0;return W0.getGripSpace()},this.getHand=function(o){let W0=z[o];if(W0===void 0)W0=new h7,z[o]=W0;return W0.getHandSpace()};function p(o){let W0=D.indexOf(o.inputSource);if(W0===-1)return;let F0=z[W0];if(F0!==void 0)F0.update(o.inputSource,o.frame,K||X),F0.dispatchEvent({type:o.type,data:o.inputSource})}function n(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",c);for(let o=0;o<z.length;o++){let W0=D[o];if(W0===null)continue;D[o]=null,z[o].disconnect(W0)}k=null,S=null,B.reset(),J.setRenderTarget(V),F=null,U=null,q=null,Z=null,E=null,y0.stop(),$.isPresenting=!1,J.setPixelRatio(f),J.setSize(_.width,_.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(W=o,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(Y=o,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||X},this.setReferenceSpace=function(o){K=o},this.getBaseLayer=function(){return U!==null?U:F},this.getBinding=function(){return q},this.getFrame=function(){return N},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(V=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",c),O.xrCompatible!==!0)await Q.makeXRCompatible();if(f=J.getPixelRatio(),J.getSize(_),Z.renderState.layers===void 0){let W0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};F=new XRWebGLLayer(Z,Q,W0),Z.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),E=new d6(F.framebufferWidth,F.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil})}else{let W0=null,F0=null,L0=null;if(O.depth)L0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,W0=O.stencil?1027:1026,F0=O.stencil?1020:1014;let U0={colorFormat:Q.RGBA8,depthFormat:L0,scaleFactor:W};q=new XRWebGLBinding(Z,Q),U=q.createProjectionLayer(U0),Z.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),E=new d6(U.textureWidth,U.textureHeight,{format:1023,type:1009,depthTexture:new r9(U.textureWidth,U.textureHeight,F0,void 0,void 0,void 0,void 0,void 0,void 0,W0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(H),K=null,X=await Z.requestReferenceSpace(Y),y0.setContext(Z),y0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function c(o){for(let W0=0;W0<o.removed.length;W0++){let F0=o.removed[W0],L0=D.indexOf(F0);if(L0>=0)D[L0]=null,z[L0].disconnect(F0)}for(let W0=0;W0<o.added.length;W0++){let F0=o.added[W0],L0=D.indexOf(F0);if(L0===-1){for(let A0=0;A0<z.length;A0++)if(A0>=D.length){D.push(F0),L0=A0;break}else if(D[A0]===null){D[A0]=F0,L0=A0;break}if(L0===-1)break}let U0=z[L0];if(U0)U0.connect(F0)}}let v=new A,h=new A;function i(o,W0,F0){v.setFromMatrixPosition(W0.matrixWorld),h.setFromMatrixPosition(F0.matrixWorld);let L0=v.distanceTo(h),U0=W0.projectionMatrix.elements,A0=F0.projectionMatrix.elements,e0=U0[14]/(U0[10]-1),h0=U0[14]/(U0[10]+1),T=(U0[9]+1)/U0[5],W6=(U0[9]-1)/U0[5],g0=(U0[8]-1)/U0[0],Q6=(A0[8]+1)/A0[0],C0=e0*g0,l0=e0*Q6,T0=L0/(-g0+Q6),S0=T0*-g0;W0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(S0),o.translateZ(T0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert();let Z6=e0+T0,I=h0+T0,R=C0-S0,m=l0+(L0-S0),r=T*h0/I*Z6,t=W6*h0/I*Z6;o.projectionMatrix.makePerspective(R,m,r,t,Z6,I),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}function b(o,W0){if(W0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(W0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;if(B.texture!==null)o.near=B.depthNear,o.far=B.depthFar;if(C.near=j.near=L.near=o.near,C.far=j.far=L.far=o.far,k!==C.near||S!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,S=C.far,L.near=k,L.far=S,j.near=k,j.far=S,L.updateProjectionMatrix(),j.updateProjectionMatrix(),o.updateProjectionMatrix();let W0=o.parent,F0=C.cameras;b(C,W0);for(let L0=0;L0<F0.length;L0++)b(F0[L0],W0);if(F0.length===2)i(C,L,j);else C.projectionMatrix.copy(L.projectionMatrix);J0(o,C,W0)};function J0(o,W0,F0){if(F0===null)o.matrix.copy(W0.matrixWorld);else o.matrix.copy(F0.matrixWorld),o.matrix.invert(),o.matrix.multiply(W0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(W0.projectionMatrix),o.projectionMatrixInverse.copy(W0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=k9*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(U===null&&F===null)return;return H},this.setFoveation=function(o){if(H=o,U!==null)U.fixedFoveation=o;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=o},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(C)};let G0=null;function M0(o,W0){if(G=W0.getViewerPose(K||X),N=W0,G!==null){let F0=G.views;if(F!==null)J.setRenderTargetFramebuffer(E,F.framebuffer),J.setRenderTarget(E);let L0=!1;if(F0.length!==C.cameras.length)C.cameras.length=0,L0=!0;for(let A0=0;A0<F0.length;A0++){let e0=F0[A0],h0=null;if(F!==null)h0=F.getViewport(e0);else{let W6=q.getViewSubImage(U,e0);if(h0=W6.viewport,A0===0)J.setRenderTargetTextures(E,W6.colorTexture,U.ignoreDepthValues?void 0:W6.depthStencilTexture),J.setRenderTarget(E)}let T=d[A0];if(T===void 0)T=new I6,T.layers.enable(A0),T.viewport=new c0,d[A0]=T;if(T.matrix.fromArray(e0.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(e0.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(h0.x,h0.y,h0.width,h0.height),A0===0)C.matrix.copy(T.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(L0===!0)C.cameras.push(T)}let U0=Z.enabledFeatures;if(U0&&U0.includes("depth-sensing")){let A0=q.getDepthInformation(F0[0]);if(A0&&A0.isValid&&A0.texture)B.init(J,A0,Z.renderState)}}for(let F0=0;F0<z.length;F0++){let L0=D[F0],U0=z[F0];if(L0!==null&&U0!==void 0)U0.update(L0,W0,K||X)}if(G0)G0(o,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});N=null}let y0=new q$;y0.setAnimationLoop(M0),this.setAnimationLoop=function(o){G0=o},this.dispose=function(){}}}var u8=new W8,bY=new j0;function gY(J,Q){function $(V,E){if(V.matrixAutoUpdate===!0)V.updateMatrix();E.value.copy(V.matrix)}function Z(V,E){if(E.color.getRGB(V.fogColor.value,H$(J)),E.isFog)V.fogNear.value=E.near,V.fogFar.value=E.far;else if(E.isFogExp2)V.fogDensity.value=E.density}function W(V,E,z,D,_){if(E.isMeshBasicMaterial)X(V,E);else if(E.isMeshLambertMaterial)X(V,E);else if(E.isMeshToonMaterial)X(V,E),U(V,E);else if(E.isMeshPhongMaterial)X(V,E),q(V,E);else if(E.isMeshStandardMaterial){if(X(V,E),F(V,E),E.isMeshPhysicalMaterial)N(V,E,_)}else if(E.isMeshMatcapMaterial)X(V,E),B(V,E);else if(E.isMeshDepthMaterial)X(V,E);else if(E.isMeshDistanceMaterial)X(V,E),O(V,E);else if(E.isMeshNormalMaterial)X(V,E);else if(E.isLineBasicMaterial){if(Y(V,E),E.isLineDashedMaterial)H(V,E)}else if(E.isPointsMaterial)K(V,E,z,D);else if(E.isSpriteMaterial)G(V,E);else if(E.isShadowMaterial)V.color.value.copy(E.color),V.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function X(V,E){if(V.opacity.value=E.opacity,E.color)V.diffuse.value.copy(E.color);if(E.emissive)V.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)V.map.value=E.map,$(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.bumpMap){if(V.bumpMap.value=E.bumpMap,$(E.bumpMap,V.bumpMapTransform),V.bumpScale.value=E.bumpScale,E.side===1)V.bumpScale.value*=-1}if(E.normalMap){if(V.normalMap.value=E.normalMap,$(E.normalMap,V.normalMapTransform),V.normalScale.value.copy(E.normalScale),E.side===1)V.normalScale.value.negate()}if(E.displacementMap)V.displacementMap.value=E.displacementMap,$(E.displacementMap,V.displacementMapTransform),V.displacementScale.value=E.displacementScale,V.displacementBias.value=E.displacementBias;if(E.emissiveMap)V.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,V.emissiveMapTransform);if(E.specularMap)V.specularMap.value=E.specularMap,$(E.specularMap,V.specularMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest;let z=Q.get(E),D=z.envMap,_=z.envMapRotation;if(D){if(V.envMap.value=D,u8.copy(_),u8.x*=-1,u8.y*=-1,u8.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)u8.y*=-1,u8.z*=-1;V.envMapRotation.value.setFromMatrix4(bY.makeRotationFromEuler(u8)),V.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,V.reflectivity.value=E.reflectivity,V.ior.value=E.ior,V.refractionRatio.value=E.refractionRatio}if(E.lightMap)V.lightMap.value=E.lightMap,V.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,V.lightMapTransform);if(E.aoMap)V.aoMap.value=E.aoMap,V.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,V.aoMapTransform)}function Y(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,E.map)V.map.value=E.map,$(E.map,V.mapTransform)}function H(V,E){V.dashSize.value=E.dashSize,V.totalSize.value=E.dashSize+E.gapSize,V.scale.value=E.scale}function K(V,E,z,D){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.size.value=E.size*z,V.scale.value=D*0.5,E.map)V.map.value=E.map,$(E.map,V.uvTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function G(V,E){if(V.diffuse.value.copy(E.color),V.opacity.value=E.opacity,V.rotation.value=E.rotation,E.map)V.map.value=E.map,$(E.map,V.mapTransform);if(E.alphaMap)V.alphaMap.value=E.alphaMap,$(E.alphaMap,V.alphaMapTransform);if(E.alphaTest>0)V.alphaTest.value=E.alphaTest}function q(V,E){V.specular.value.copy(E.specular),V.shininess.value=Math.max(E.shininess,0.0001)}function U(V,E){if(E.gradientMap)V.gradientMap.value=E.gradientMap}function F(V,E){if(V.metalness.value=E.metalness,E.metalnessMap)V.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,V.metalnessMapTransform);if(V.roughness.value=E.roughness,E.roughnessMap)V.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,V.roughnessMapTransform);if(E.envMap)V.envMapIntensity.value=E.envMapIntensity}function N(V,E,z){if(V.ior.value=E.ior,E.sheen>0){if(V.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),V.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)V.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,V.sheenColorMapTransform);if(E.sheenRoughnessMap)V.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,V.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(V.clearcoat.value=E.clearcoat,V.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)V.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,V.clearcoatMapTransform);if(E.clearcoatRoughnessMap)V.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,V.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(V.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,V.clearcoatNormalMapTransform),V.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===1)V.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)V.dispersion.value=E.dispersion;if(E.iridescence>0){if(V.iridescence.value=E.iridescence,V.iridescenceIOR.value=E.iridescenceIOR,V.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],V.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)V.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,V.iridescenceMapTransform);if(E.iridescenceThicknessMap)V.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,V.iridescenceThicknessMapTransform)}if(E.transmission>0){if(V.transmission.value=E.transmission,V.transmissionSamplerMap.value=z.texture,V.transmissionSamplerSize.value.set(z.width,z.height),E.transmissionMap)V.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,V.transmissionMapTransform);if(V.thickness.value=E.thickness,E.thicknessMap)V.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,V.thicknessMapTransform);V.attenuationDistance.value=E.attenuationDistance,V.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(V.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)V.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,V.anisotropyMapTransform)}if(V.specularIntensity.value=E.specularIntensity,V.specularColor.value.copy(E.specularColor),E.specularColorMap)V.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,V.specularColorMapTransform);if(E.specularIntensityMap)V.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,V.specularIntensityMapTransform)}function B(V,E){if(E.matcap)V.matcap.value=E.matcap}function O(V,E){let z=Q.get(E).light;V.referencePosition.value.setFromMatrixPosition(z.matrixWorld),V.nearDistance.value=z.shadow.camera.near,V.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function pY(J,Q,$,Z){let W={},X={},Y=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(z,D){let _=D.program;Z.uniformBlockBinding(z,_)}function G(z,D){let _=W[z.id];if(_===void 0)B(z),_=q(z),W[z.id]=_,z.addEventListener("dispose",V);let f=D.program;Z.updateUBOMapping(z,f);let L=Q.render.frame;if(X[z.id]!==L)F(z),X[z.id]=L}function q(z){let D=U();z.__bindingPointIndex=D;let _=J.createBuffer(),f=z.__size,L=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,f,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,D,_),_}function U(){for(let z=0;z<H;z++)if(Y.indexOf(z)===-1)return Y.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(z){let D=W[z.id],_=z.uniforms,f=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,D);for(let L=0,j=_.length;L<j;L++){let d=Array.isArray(_[L])?_[L]:[_[L]];for(let C=0,k=d.length;C<k;C++){let S=d[C];if(N(S,L,C,f)===!0){let p=S.__offset,n=Array.isArray(S.value)?S.value:[S.value],c=0;for(let v=0;v<n.length;v++){let h=n[v],i=O(h);if(typeof h==="number"||typeof h==="boolean")S.__data[0]=h,J.bufferSubData(J.UNIFORM_BUFFER,p+c,S.__data);else if(h.isMatrix3)S.__data[0]=h.elements[0],S.__data[1]=h.elements[1],S.__data[2]=h.elements[2],S.__data[3]=0,S.__data[4]=h.elements[3],S.__data[5]=h.elements[4],S.__data[6]=h.elements[5],S.__data[7]=0,S.__data[8]=h.elements[6],S.__data[9]=h.elements[7],S.__data[10]=h.elements[8],S.__data[11]=0;else h.toArray(S.__data,c),c+=i.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,p,S.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(z,D,_,f){let L=z.value,j=D+"_"+_;if(f[j]===void 0){if(typeof L==="number"||typeof L==="boolean")f[j]=L;else f[j]=L.clone();return!0}else{let d=f[j];if(typeof L==="number"||typeof L==="boolean"){if(d!==L)return f[j]=L,!0}else if(d.equals(L)===!1)return d.copy(L),!0}return!1}function B(z){let D=z.uniforms,_=0,f=16;for(let j=0,d=D.length;j<d;j++){let C=Array.isArray(D[j])?D[j]:[D[j]];for(let k=0,S=C.length;k<S;k++){let p=C[k],n=Array.isArray(p.value)?p.value:[p.value];for(let c=0,v=n.length;c<v;c++){let h=n[c],i=O(h),b=_%f;if(b!==0&&f-b<i.boundary)_+=f-b;p.__data=new Float32Array(i.storage/Float32Array.BYTES_PER_ELEMENT),p.__offset=_,_+=i.storage}}}let L=_%f;if(L>0)_+=f-L;return z.__size=_,z.__cache={},this}function O(z){let D={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")D.boundary=4,D.storage=4;else if(z.isVector2)D.boundary=8,D.storage=8;else if(z.isVector3||z.isColor)D.boundary=16,D.storage=12;else if(z.isVector4)D.boundary=16,D.storage=16;else if(z.isMatrix3)D.boundary=48,D.storage=48;else if(z.isMatrix4)D.boundary=64,D.storage=64;else if(z.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z);return D}function V(z){let D=z.target;D.removeEventListener("dispose",V);let _=Y.indexOf(D.__bindingPointIndex);Y.splice(_,1),J.deleteBuffer(W[D.id]),delete W[D.id],delete X[D.id]}function E(){for(let z in W)J.deleteBuffer(W[z]);Y=[],W={},X={}}return{bind:K,update:G,dispose:E}}class tJ{constructor(J={}){let{canvas:Q=oZ(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:X=!1,antialias:Y=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:K=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:q=!1}=J;this.isWebGLRenderer=!0;let U;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=$.getContextAttributes().alpha}else U=X;let F=new Uint32Array(4),N=new Int32Array(4),B=null,O=null,V=[],E=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let z=this,D=!1,_=0,f=0,L=null,j=-1,d=null,C=new c0,k=new c0,S=null,p=new D0(0),n=0,c=Q.width,v=Q.height,h=1,i=null,b=null,J0=new c0(0,0,c,v),G0=new c0(0,0,c,v),M0=!1,y0=new l7,o=!1,W0=!1,F0=new j0,L0=new A,U0=new c0,A0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},e0=!1;function h0(){return L===null?h:1}let T=$;function W6(M,y){return Q.getContext(M,y)}try{let M={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:H,preserveDrawingBuffer:K,powerPreference:G,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine","three.js r166");if(Q.addEventListener("webglcontextlost",a,!1),Q.addEventListener("webglcontextrestored",l,!1),Q.addEventListener("webglcontextcreationerror",s,!1),T===null){if(T=W6("webgl2",M),T===null)if(W6("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let g0,Q6,C0,l0,T0,S0,Z6,I,R,m,r,t,e,z0,Y0,H0,v0,Q0,O0,u0,w0,K0,I0,m0;function P(){g0=new WX(T),g0.init(),K0=new fY(T,g0),Q6=new tW(T,g0,J,K0),C0=new SY(T),l0=new HX(T),T0=new zY,S0=new yY(T,g0,C0,T0,Q6,K0,l0),Z6=new JX(z),I=new ZX(z),R=new E1(T),I0=new aW(T,R),m=new XX(T,R,l0,I0),r=new GX(T,m,R,l0),O0=new KX(T,Q6,S0),H0=new eW(T0),t=new RY(z,Z6,I,g0,Q6,I0,H0),e=new gY(z,T0),z0=new LY,Y0=new IY(g0),Q0=new iW(z,Z6,I,C0,r,U,H),v0=new TY(z,r,Q6),m0=new pY(T,l0,Q6,C0),u0=new rW(T,g0,l0),w0=new YX(T,g0,l0),l0.programs=t.programs,z.capabilities=Q6,z.extensions=g0,z.properties=T0,z.renderLists=z0,z.shadowMap=v0,z.state=C0,z.info=l0}P();let w=new D$(z,T);this.xr=w,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=g0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=g0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return h},this.setPixelRatio=function(M){if(M===void 0)return;h=M,this.setSize(c,v,!1)},this.getSize=function(M){return M.set(c,v)},this.setSize=function(M,y,g=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(c=M,v=y,Q.width=Math.floor(M*h),Q.height=Math.floor(y*h),g===!0)Q.style.width=M+"px",Q.style.height=y+"px";this.setViewport(0,0,M,y)},this.getDrawingBufferSize=function(M){return M.set(c*h,v*h).floor()},this.setDrawingBufferSize=function(M,y,g){c=M,v=y,h=g,Q.width=Math.floor(M*g),Q.height=Math.floor(y*g),this.setViewport(0,0,M,y)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(J0)},this.setViewport=function(M,y,g,u){if(M.isVector4)J0.set(M.x,M.y,M.z,M.w);else J0.set(M,y,g,u);C0.viewport(C.copy(J0).multiplyScalar(h).round())},this.getScissor=function(M){return M.copy(G0)},this.setScissor=function(M,y,g,u){if(M.isVector4)G0.set(M.x,M.y,M.z,M.w);else G0.set(M,y,g,u);C0.scissor(k.copy(G0).multiplyScalar(h).round())},this.getScissorTest=function(){return M0},this.setScissorTest=function(M){C0.setScissorTest(M0=M)},this.setOpaqueSort=function(M){i=M},this.setTransparentSort=function(M){b=M},this.getClearColor=function(M){return M.copy(Q0.getClearColor())},this.setClearColor=function(){Q0.setClearColor.apply(Q0,arguments)},this.getClearAlpha=function(){return Q0.getClearAlpha()},this.setClearAlpha=function(){Q0.setClearAlpha.apply(Q0,arguments)},this.clear=function(M=!0,y=!0,g=!0){let u=0;if(M){let x=!1;if(L!==null){let Z0=L.texture.format;x=Z0===1033||Z0===1031||Z0===1029}if(x){let Z0=L.texture.type,q0=Z0===1009||Z0===1014||Z0===1012||Z0===1020||Z0===1017||Z0===1018,V0=Q0.getClearColor(),E0=Q0.getClearAlpha(),_0=V0.r,P0=V0.g,k0=V0.b;if(q0)F[0]=_0,F[1]=P0,F[2]=k0,F[3]=E0,T.clearBufferuiv(T.COLOR,0,F);else N[0]=_0,N[1]=P0,N[2]=k0,N[3]=E0,T.clearBufferiv(T.COLOR,0,N)}else u|=T.COLOR_BUFFER_BIT}if(y)u|=T.DEPTH_BUFFER_BIT;if(g)u|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(u)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",a,!1),Q.removeEventListener("webglcontextrestored",l,!1),Q.removeEventListener("webglcontextcreationerror",s,!1),z0.dispose(),Y0.dispose(),T0.dispose(),Z6.dispose(),I.dispose(),r.dispose(),I0.dispose(),m0.dispose(),t.dispose(),w.dispose(),w.removeEventListener("sessionstart",G6),w.removeEventListener("sessionend",D6),z6.stop()};function a(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function l(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let M=l0.autoReset,y=v0.enabled,g=v0.autoUpdate,u=v0.needsUpdate,x=v0.type;P(),l0.autoReset=M,v0.enabled=y,v0.autoUpdate=g,v0.needsUpdate=u,v0.type=x}function s(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $0(M){let y=M.target;y.removeEventListener("dispose",$0),N0(y)}function N0(M){d0(M),T0.remove(M)}function d0(M){let y=T0.get(M).programs;if(y!==void 0){if(y.forEach(function(g){t.releaseProgram(g)}),M.isShaderMaterial)t.releaseShaderCache(M)}}this.renderBufferDirect=function(M,y,g,u,x,Z0){if(y===null)y=A0;let q0=x.isMesh&&x.matrixWorld.determinant()<0,V0=PZ(M,y,g,u,x);C0.setMaterial(u,q0);let E0=g.index,_0=1;if(u.wireframe===!0){if(E0=m.getWireframeAttribute(g),E0===void 0)return;_0=2}let P0=g.drawRange,k0=g.attributes.position,o0=P0.start*_0,Y6=(P0.start+P0.count)*_0;if(Z0!==null)o0=Math.max(o0,Z0.start*_0),Y6=Math.min(Y6,(Z0.start+Z0.count)*_0);if(E0!==null)o0=Math.max(o0,0),Y6=Math.min(Y6,E0.count);else if(k0!==void 0&&k0!==null)o0=Math.max(o0,0),Y6=Math.min(Y6,k0.count);let H6=Y6-o0;if(H6<0||H6===1/0)return;I0.setup(x,u,V0,g,E0);let v6,i0=u0;if(E0!==null)v6=R.get(E0),i0=w0,i0.setIndex(v6);if(x.isMesh)if(u.wireframe===!0)C0.setLineWidth(u.wireframeLinewidth*h0()),i0.setMode(T.LINES);else i0.setMode(T.TRIANGLES);else if(x.isLine){let R0=u.linewidth;if(R0===void 0)R0=1;if(C0.setLineWidth(R0*h0()),x.isLineSegments)i0.setMode(T.LINES);else if(x.isLineLoop)i0.setMode(T.LINE_LOOP);else i0.setMode(T.LINE_STRIP)}else if(x.isPoints)i0.setMode(T.POINTS);else if(x.isSprite)i0.setMode(T.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)i0.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(!g0.get("WEBGL_multi_draw")){let{_multiDrawStarts:R0,_multiDrawCounts:M6,_multiDrawCount:a0}=x,o6=E0?R.get(E0).bytesPerElement:1,Z9=T0.get(u).currentProgram.getUniforms();for(let x6=0;x6<a0;x6++)Z9.setValue(T,"_gl_DrawID",x6),i0.render(R0[x6]/o6,M6[x6])}else i0.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)i0.renderInstances(o0,H6,x.count);else if(g.isInstancedBufferGeometry){let R0=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,M6=Math.min(g.instanceCount,R0);i0.renderInstances(o0,H6,M6)}else i0.render(o0,H6)};function X6(M,y,g){if(M.transparent===!0&&M.side===2&&M.forceSinglePass===!1)M.side=1,M.needsUpdate=!0,H7(M,y,g),M.side=0,M.needsUpdate=!0,H7(M,y,g),M.side=2;else H7(M,y,g)}this.compile=function(M,y,g=null){if(g===null)g=M;if(O=Y0.get(g),O.init(y),E.push(O),g.traverseVisible(function(x){if(x.isLight&&x.layers.test(y.layers)){if(O.pushLight(x),x.castShadow)O.pushShadow(x)}}),M!==g)M.traverseVisible(function(x){if(x.isLight&&x.layers.test(y.layers)){if(O.pushLight(x),x.castShadow)O.pushShadow(x)}});O.setupLights();let u=new Set;return M.traverse(function(x){let Z0=x.material;if(Z0)if(Array.isArray(Z0))for(let q0=0;q0<Z0.length;q0++){let V0=Z0[q0];X6(V0,g,x),u.add(V0)}else X6(Z0,g,x),u.add(Z0)}),E.pop(),O=null,u},this.compileAsync=function(M,y,g=null){let u=this.compile(M,y,g);return new Promise((x)=>{function Z0(){if(u.forEach(function(q0){if(T0.get(q0).currentProgram.isReady())u.delete(q0)}),u.size===0){x(M);return}setTimeout(Z0,10)}if(g0.get("KHR_parallel_shader_compile")!==null)Z0();else setTimeout(Z0,10)})};let K6=null;function b0(M){if(K6)K6(M)}function G6(){z6.stop()}function D6(){z6.start()}let z6=new q$;if(z6.setAnimationLoop(b0),typeof self<"u")z6.setContext(self);this.setAnimationLoop=function(M){K6=M,w.setAnimationLoop(M),M===null?z6.stop():z6.start()},w.addEventListener("sessionstart",G6),w.addEventListener("sessionend",D6),this.render=function(M,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(w.enabled===!0&&w.isPresenting===!0){if(w.cameraAutoUpdate===!0)w.updateCamera(y);y=w.getCamera()}if(M.isScene===!0)M.onBeforeRender(z,M,y,L);if(O=Y0.get(M,E.length),O.init(y),E.push(O),F0.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),y0.setFromProjectionMatrix(F0),W0=this.localClippingEnabled,o=H0.init(this.clippingPlanes,W0),B=z0.get(M,V.length),B.init(),V.push(B),w.enabled===!0&&w.isPresenting===!0){let Z0=z.xr.getDepthSensingMesh();if(Z0!==null)U8(Z0,y,-1/0,z.sortObjects)}if(U8(M,y,0,z.sortObjects),B.finish(),z.sortObjects===!0)B.sort(i,b);if(e0=w.enabled===!1||w.isPresenting===!1||w.hasDepthSensing()===!1,e0)Q0.addToRenderList(B,M);if(this.info.render.frame++,o===!0)H0.beginShadows();let g=O.state.shadowsArray;if(v0.render(g,M,y),o===!0)H0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:u,transmissive:x}=B;if(O.setupLights(),y.isArrayCamera){let Z0=y.cameras;if(x.length>0)for(let q0=0,V0=Z0.length;q0<V0;q0++){let E0=Z0[q0];v9(u,x,M,E0)}if(e0)Q0.render(M);for(let q0=0,V0=Z0.length;q0<V0;q0++){let E0=Z0[q0];v8(B,M,E0,E0.viewport)}}else{if(x.length>0)v9(u,x,M,y);if(e0)Q0.render(M);v8(B,M,y)}if(L!==null)S0.updateMultisampleRenderTarget(L),S0.updateRenderTargetMipmap(L);if(M.isScene===!0)M.onAfterRender(z,M,y);if(I0.resetDefaultState(),j=-1,d=null,E.pop(),E.length>0){if(O=E[E.length-1],o===!0)H0.setGlobalState(z.clippingPlanes,O.state.camera)}else O=null;if(V.pop(),V.length>0)B=V[V.length-1];else B=null};function U8(M,y,g,u){if(M.visible===!1)return;if(M.layers.test(y.layers)){if(M.isGroup)g=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(y)}else if(M.isLight){if(O.pushLight(M),M.castShadow)O.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||y0.intersectsSprite(M)){if(u)U0.setFromMatrixPosition(M.matrixWorld).applyMatrix4(F0);let q0=r.update(M),V0=M.material;if(V0.visible)B.push(M,q0,V0,g,U0.z,null)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||y0.intersectsObject(M)){let q0=r.update(M),V0=M.material;if(u){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();U0.copy(M.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();U0.copy(q0.boundingSphere.center)}U0.applyMatrix4(M.matrixWorld).applyMatrix4(F0)}if(Array.isArray(V0)){let E0=q0.groups;for(let _0=0,P0=E0.length;_0<P0;_0++){let k0=E0[_0],o0=V0[k0.materialIndex];if(o0&&o0.visible)B.push(M,q0,o0,g,U0.z,k0)}}else if(V0.visible)B.push(M,q0,V0,g,U0.z,null)}}}let Z0=M.children;for(let q0=0,V0=Z0.length;q0<V0;q0++)U8(Z0[q0],y,g,u)}function v8(M,y,g,u){let{opaque:x,transmissive:Z0,transparent:q0}=M;if(O.setupLightsView(g),o===!0)H0.setGlobalState(z.clippingPlanes,g);if(u)C0.viewport(C.copy(u));if(x.length>0)Y7(x,y,g);if(Z0.length>0)Y7(Z0,y,g);if(q0.length>0)Y7(q0,y,g);C0.buffers.depth.setTest(!0),C0.buffers.depth.setMask(!0),C0.buffers.color.setMask(!0),C0.setPolygonOffset(!1)}function v9(M,y,g,u){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[u.id]===void 0)O.state.transmissionRenderTarget[u.id]=new d6(1,1,{generateMipmaps:!0,type:g0.has("EXT_color_buffer_half_float")||g0.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:s0.workingColorSpace});let Z0=O.state.transmissionRenderTarget[u.id],q0=u.viewport||C;Z0.setSize(q0.z,q0.w);let V0=z.getRenderTarget();if(z.setRenderTarget(Z0),z.getClearColor(p),n=z.getClearAlpha(),n<1)z.setClearColor(16777215,0.5);if(e0)Q0.render(g);else z.clear();let E0=z.toneMapping;z.toneMapping=0;let _0=u.viewport;if(u.viewport!==void 0)u.viewport=void 0;if(O.setupLightsView(u),o===!0)H0.setGlobalState(z.clippingPlanes,u);if(Y7(M,g,u),S0.updateMultisampleRenderTarget(Z0),S0.updateRenderTargetMipmap(Z0),g0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let k0=0,o0=y.length;k0<o0;k0++){let Y6=y[k0],H6=Y6.object,v6=Y6.geometry,i0=Y6.material,R0=Y6.group;if(i0.side===2&&H6.layers.test(u.layers)){let M6=i0.side;i0.side=1,i0.needsUpdate=!0,y5(H6,g,u,v6,i0,R0),i0.side=M6,i0.needsUpdate=!0,P0=!0}}if(P0===!0)S0.updateMultisampleRenderTarget(Z0),S0.updateRenderTargetMipmap(Z0)}if(z.setRenderTarget(V0),z.setClearColor(p,n),_0!==void 0)u.viewport=_0;z.toneMapping=E0}function Y7(M,y,g){let u=y.isScene===!0?y.overrideMaterial:null;for(let x=0,Z0=M.length;x<Z0;x++){let q0=M[x],V0=q0.object,E0=q0.geometry,_0=u===null?q0.material:u,P0=q0.group;if(V0.layers.test(g.layers))y5(V0,y,g,E0,_0,P0)}}function y5(M,y,g,u,x,Z0){if(M.onBeforeRender(z,y,g,u,x,Z0),M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1)x.side=1,x.needsUpdate=!0,z.renderBufferDirect(g,y,u,x,M,Z0),x.side=0,x.needsUpdate=!0,z.renderBufferDirect(g,y,u,x,M,Z0),x.side=2;else z.renderBufferDirect(g,y,u,x,M,Z0);M.onAfterRender(z,y,g,u,x,Z0)}function H7(M,y,g){if(y.isScene!==!0)y=A0;let u=T0.get(M),x=O.state.lights,Z0=O.state.shadowsArray,q0=x.state.version,V0=t.getParameters(M,x.state,Z0,y,g),E0=t.getProgramCacheKey(V0),_0=u.programs;if(u.environment=M.isMeshStandardMaterial?y.environment:null,u.fog=y.fog,u.envMap=(M.isMeshStandardMaterial?I:Z6).get(M.envMap||u.environment),u.envMapRotation=u.environment!==null&&M.envMap===null?y.environmentRotation:M.envMapRotation,_0===void 0)M.addEventListener("dispose",$0),_0=new Map,u.programs=_0;let P0=_0.get(E0);if(P0!==void 0){if(u.currentProgram===P0&&u.lightsStateVersion===q0)return v5(M,V0),P0}else V0.uniforms=t.getUniforms(M),M.onBeforeCompile(V0,z),P0=t.acquireProgram(V0,E0),_0.set(E0,P0),u.uniforms=V0.uniforms;let k0=u.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)k0.clippingPlanes=H0.uniform;if(v5(M,V0),u.needsLights=TZ(M),u.lightsStateVersion=q0,u.needsLights)k0.ambientLightColor.value=x.state.ambient,k0.lightProbe.value=x.state.probe,k0.directionalLights.value=x.state.directional,k0.directionalLightShadows.value=x.state.directionalShadow,k0.spotLights.value=x.state.spot,k0.spotLightShadows.value=x.state.spotShadow,k0.rectAreaLights.value=x.state.rectArea,k0.ltc_1.value=x.state.rectAreaLTC1,k0.ltc_2.value=x.state.rectAreaLTC2,k0.pointLights.value=x.state.point,k0.pointLightShadows.value=x.state.pointShadow,k0.hemisphereLights.value=x.state.hemi,k0.directionalShadowMap.value=x.state.directionalShadowMap,k0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,k0.spotShadowMap.value=x.state.spotShadowMap,k0.spotLightMatrix.value=x.state.spotLightMatrix,k0.spotLightMap.value=x.state.spotLightMap,k0.pointShadowMap.value=x.state.pointShadowMap,k0.pointShadowMatrix.value=x.state.pointShadowMatrix;return u.currentProgram=P0,u.uniformsList=null,P0}function f5(M){if(M.uniformsList===null){let y=M.currentProgram.getUniforms();M.uniformsList=s9.seqWithValue(y.seq,M.uniforms)}return M.uniformsList}function v5(M,y){let g=T0.get(M);g.outputColorSpace=y.outputColorSpace,g.batching=y.batching,g.batchingColor=y.batchingColor,g.instancing=y.instancing,g.instancingColor=y.instancingColor,g.instancingMorph=y.instancingMorph,g.skinning=y.skinning,g.morphTargets=y.morphTargets,g.morphNormals=y.morphNormals,g.morphColors=y.morphColors,g.morphTargetsCount=y.morphTargetsCount,g.numClippingPlanes=y.numClippingPlanes,g.numIntersection=y.numClipIntersection,g.vertexAlphas=y.vertexAlphas,g.vertexTangents=y.vertexTangents,g.toneMapping=y.toneMapping}function PZ(M,y,g,u,x){if(y.isScene!==!0)y=A0;S0.resetTextureUnits();let Z0=y.fog,q0=u.isMeshStandardMaterial?y.environment:null,V0=L===null?z.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:"srgb-linear",E0=(u.isMeshStandardMaterial?I:Z6).get(u.envMap||q0),_0=u.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,P0=!!g.attributes.tangent&&(!!u.normalMap||u.anisotropy>0),k0=!!g.morphAttributes.position,o0=!!g.morphAttributes.normal,Y6=!!g.morphAttributes.color,H6=0;if(u.toneMapped){if(L===null||L.isXRRenderTarget===!0)H6=z.toneMapping}let v6=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,i0=v6!==void 0?v6.length:0,R0=T0.get(u),M6=O.state.lights;if(o===!0){if(W0===!0||M!==d){let m6=M===d&&u.id===j;H0.setState(u,M,m6)}}let a0=!1;if(u.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==M6.state.version)a0=!0;else if(R0.outputColorSpace!==V0)a0=!0;else if(x.isBatchedMesh&&R0.batching===!1)a0=!0;else if(!x.isBatchedMesh&&R0.batching===!0)a0=!0;else if(x.isBatchedMesh&&R0.batchingColor===!0&&x.colorTexture===null)a0=!0;else if(x.isBatchedMesh&&R0.batchingColor===!1&&x.colorTexture!==null)a0=!0;else if(x.isInstancedMesh&&R0.instancing===!1)a0=!0;else if(!x.isInstancedMesh&&R0.instancing===!0)a0=!0;else if(x.isSkinnedMesh&&R0.skinning===!1)a0=!0;else if(!x.isSkinnedMesh&&R0.skinning===!0)a0=!0;else if(x.isInstancedMesh&&R0.instancingColor===!0&&x.instanceColor===null)a0=!0;else if(x.isInstancedMesh&&R0.instancingColor===!1&&x.instanceColor!==null)a0=!0;else if(x.isInstancedMesh&&R0.instancingMorph===!0&&x.morphTexture===null)a0=!0;else if(x.isInstancedMesh&&R0.instancingMorph===!1&&x.morphTexture!==null)a0=!0;else if(R0.envMap!==E0)a0=!0;else if(u.fog===!0&&R0.fog!==Z0)a0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==H0.numPlanes||R0.numIntersection!==H0.numIntersection))a0=!0;else if(R0.vertexAlphas!==_0)a0=!0;else if(R0.vertexTangents!==P0)a0=!0;else if(R0.morphTargets!==k0)a0=!0;else if(R0.morphNormals!==o0)a0=!0;else if(R0.morphColors!==Y6)a0=!0;else if(R0.toneMapping!==H6)a0=!0;else if(R0.morphTargetsCount!==i0)a0=!0}else a0=!0,R0.__version=u.version;let o6=R0.currentProgram;if(a0===!0)o6=H7(u,y,x);let Z9=!1,x6=!1,WJ=!1,q6=o6.getUniforms(),M8=R0.uniforms;if(C0.useProgram(o6.program))Z9=!0,x6=!0,WJ=!0;if(u.id!==j)j=u.id,x6=!0;if(Z9||d!==M){q6.setValue(T,"projectionMatrix",M.projectionMatrix),q6.setValue(T,"viewMatrix",M.matrixWorldInverse);let m6=q6.map.cameraPosition;if(m6!==void 0)m6.setValue(T,L0.setFromMatrixPosition(M.matrixWorld));if(Q6.logarithmicDepthBuffer)q6.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(u.isMeshPhongMaterial||u.isMeshToonMaterial||u.isMeshLambertMaterial||u.isMeshBasicMaterial||u.isMeshStandardMaterial||u.isShaderMaterial)q6.setValue(T,"isOrthographic",M.isOrthographicCamera===!0);if(d!==M)d=M,x6=!0,WJ=!0}if(x.isSkinnedMesh){q6.setOptional(T,x,"bindMatrix"),q6.setOptional(T,x,"bindMatrixInverse");let m6=x.skeleton;if(m6){if(m6.boneTexture===null)m6.computeBoneTexture();q6.setValue(T,"boneTexture",m6.boneTexture,S0)}}if(x.isBatchedMesh){if(q6.setOptional(T,x,"batchingTexture"),q6.setValue(T,"batchingTexture",x._matricesTexture,S0),q6.setOptional(T,x,"batchingIdTexture"),q6.setValue(T,"batchingIdTexture",x._indirectTexture,S0),q6.setOptional(T,x,"batchingColorTexture"),x._colorsTexture!==null)q6.setValue(T,"batchingColorTexture",x._colorsTexture,S0)}let XJ=g.morphAttributes;if(XJ.position!==void 0||XJ.normal!==void 0||XJ.color!==void 0)O0.update(x,g,o6);if(x6||R0.receiveShadow!==x.receiveShadow)R0.receiveShadow=x.receiveShadow,q6.setValue(T,"receiveShadow",x.receiveShadow);if(u.isMeshGouraudMaterial&&u.envMap!==null)M8.envMap.value=E0,M8.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(u.isMeshStandardMaterial&&u.envMap===null&&y.environment!==null)M8.envMapIntensity.value=y.environmentIntensity;if(x6){if(q6.setValue(T,"toneMappingExposure",z.toneMappingExposure),R0.needsLights)AZ(M8,WJ);if(Z0&&u.fog===!0)e.refreshFogUniforms(M8,Z0);e.refreshMaterialUniforms(M8,u,h,v,O.state.transmissionRenderTarget[M.id]),s9.upload(T,f5(R0),M8,S0)}if(u.isShaderMaterial&&u.uniformsNeedUpdate===!0)s9.upload(T,f5(R0),M8,S0),u.uniformsNeedUpdate=!1;if(u.isSpriteMaterial)q6.setValue(T,"center",x.center);if(q6.setValue(T,"modelViewMatrix",x.modelViewMatrix),q6.setValue(T,"normalMatrix",x.normalMatrix),q6.setValue(T,"modelMatrix",x.matrixWorld),u.isShaderMaterial||u.isRawShaderMaterial){let m6=u.uniformsGroups;for(let YJ=0,SZ=m6.length;YJ<SZ;YJ++){let x5=m6[YJ];m0.update(x5,o6),m0.bind(x5,o6)}}return o6}function AZ(M,y){M.ambientLightColor.needsUpdate=y,M.lightProbe.needsUpdate=y,M.directionalLights.needsUpdate=y,M.directionalLightShadows.needsUpdate=y,M.pointLights.needsUpdate=y,M.pointLightShadows.needsUpdate=y,M.spotLights.needsUpdate=y,M.spotLightShadows.needsUpdate=y,M.rectAreaLights.needsUpdate=y,M.hemisphereLights.needsUpdate=y}function TZ(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}if(this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,y,g){T0.get(M.texture).__webglTexture=y,T0.get(M.depthTexture).__webglTexture=g;let u=T0.get(M);if(u.__hasExternalTextures=!0,u.__autoAllocateDepthBuffer=g===void 0,!u.__autoAllocateDepthBuffer){if(g0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),u.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(M,y){let g=T0.get(M);g.__webglFramebuffer=y,g.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(M,y=0,g=0){L=M,_=y,f=g;let u=!0,x=null,Z0=!1,q0=!1;if(M){let E0=T0.get(M);if(E0.__useDefaultFramebuffer!==void 0)C0.bindFramebuffer(T.FRAMEBUFFER,null),u=!1;else if(E0.__webglFramebuffer===void 0)S0.setupRenderTarget(M);else if(E0.__hasExternalTextures)S0.rebindTextures(M,T0.get(M.texture).__webglTexture,T0.get(M.depthTexture).__webglTexture);let _0=M.texture;if(_0.isData3DTexture||_0.isDataArrayTexture||_0.isCompressedArrayTexture)q0=!0;let P0=T0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(P0[y]))x=P0[y][g];else x=P0[y];Z0=!0}else if(M.samples>0&&S0.useMultisampledRTT(M)===!1)x=T0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(P0))x=P0[g];else x=P0;C.copy(M.viewport),k.copy(M.scissor),S=M.scissorTest}else C.copy(J0).multiplyScalar(h).floor(),k.copy(G0).multiplyScalar(h).floor(),S=M0;if(C0.bindFramebuffer(T.FRAMEBUFFER,x)&&u)C0.drawBuffers(M,x);if(C0.viewport(C),C0.scissor(k),C0.setScissorTest(S),Z0){let E0=T0.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+y,E0.__webglTexture,g)}else if(q0){let E0=T0.get(M.texture),_0=y||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,E0.__webglTexture,g||0,_0)}j=-1},this.readRenderTargetPixels=function(M,y,g,u,x,Z0,q0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=T0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&q0!==void 0)V0=V0[q0];if(V0){C0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=M.texture,_0=E0.format,P0=E0.type;if(!Q6.textureFormatReadable(_0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q6.textureTypeReadable(P0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=M.width-u&&(g>=0&&g<=M.height-x))T.readPixels(y,g,u,x,K0.convert(_0),K0.convert(P0),Z0)}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;C0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.readRenderTargetPixelsAsync=async function(M,y,g,u,x,Z0,q0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=T0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&q0!==void 0)V0=V0[q0];if(V0){C0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=M.texture,_0=E0.format,P0=E0.type;if(!Q6.textureFormatReadable(_0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q6.textureTypeReadable(P0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=M.width-u&&(g>=0&&g<=M.height-x)){let k0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,k0),T.bufferData(T.PIXEL_PACK_BUFFER,Z0.byteLength,T.STREAM_READ),T.readPixels(y,g,u,x,K0.convert(_0),K0.convert(P0),0),T.flush();let o0=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await iZ(T,o0,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,k0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Z0)}finally{T.deleteBuffer(k0),T.deleteSync(o0)}return Z0}}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;C0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.copyFramebufferToTexture=function(M,y=null,g=0){if(M.isTexture!==!0)console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,M=arguments[1];let u=Math.pow(2,-g),x=Math.floor(M.image.width*u),Z0=Math.floor(M.image.height*u),q0=y!==null?y.x:0,V0=y!==null?y.y:0;S0.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,g,0,0,q0,V0,x,Z0),C0.unbindTexture()},this.copyTextureToTexture=function(M,y,g=null,u=null,x=0){if(M.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),u=arguments[0]||null,M=arguments[1],y=arguments[2],x=arguments[3]||0,g=null;let Z0,q0,V0,E0,_0,P0;if(g!==null)Z0=g.max.x-g.min.x,q0=g.max.y-g.min.y,V0=g.min.x,E0=g.min.y;else Z0=M.image.width,q0=M.image.height,V0=0,E0=0;if(u!==null)_0=u.x,P0=u.y;else _0=0,P0=0;let k0=K0.convert(y.format),o0=K0.convert(y.type);S0.setTexture2D(y,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,y.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,y.unpackAlignment);let Y6=T.getParameter(T.UNPACK_ROW_LENGTH),H6=T.getParameter(T.UNPACK_IMAGE_HEIGHT),v6=T.getParameter(T.UNPACK_SKIP_PIXELS),i0=T.getParameter(T.UNPACK_SKIP_ROWS),R0=T.getParameter(T.UNPACK_SKIP_IMAGES),M6=M.isCompressedTexture?M.mipmaps[x]:M.image;if(T.pixelStorei(T.UNPACK_ROW_LENGTH,M6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,M6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,V0),T.pixelStorei(T.UNPACK_SKIP_ROWS,E0),M.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,x,_0,P0,Z0,q0,k0,o0,M6.data);else if(M.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,x,_0,P0,M6.width,M6.height,k0,M6.data);else T.texSubImage2D(T.TEXTURE_2D,x,_0,P0,Z0,q0,k0,o0,M6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,Y6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,H6),T.pixelStorei(T.UNPACK_SKIP_PIXELS,v6),T.pixelStorei(T.UNPACK_SKIP_ROWS,i0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,R0),x===0&&y.generateMipmaps)T.generateMipmap(T.TEXTURE_2D);C0.unbindTexture()},this.copyTextureToTexture3D=function(M,y,g=null,u=null,x=0){if(M.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),g=arguments[0]||null,u=arguments[1]||null,M=arguments[2],y=arguments[3],x=arguments[4]||0;let Z0,q0,V0,E0,_0,P0,k0,o0,Y6,H6=M.isCompressedTexture?M.mipmaps[x]:M.image;if(g!==null)Z0=g.max.x-g.min.x,q0=g.max.y-g.min.y,V0=g.max.z-g.min.z,E0=g.min.x,_0=g.min.y,P0=g.min.z;else Z0=H6.width,q0=H6.height,V0=H6.depth,E0=0,_0=0,P0=0;if(u!==null)k0=u.x,o0=u.y,Y6=u.z;else k0=0,o0=0,Y6=0;let v6=K0.convert(y.format),i0=K0.convert(y.type),R0;if(y.isData3DTexture)S0.setTexture3D(y,0),R0=T.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)S0.setTexture2DArray(y,0),R0=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,y.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,y.unpackAlignment);let M6=T.getParameter(T.UNPACK_ROW_LENGTH),a0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),o6=T.getParameter(T.UNPACK_SKIP_PIXELS),Z9=T.getParameter(T.UNPACK_SKIP_ROWS),x6=T.getParameter(T.UNPACK_SKIP_IMAGES);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,H6.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,H6.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,E0),T.pixelStorei(T.UNPACK_SKIP_ROWS,_0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,P0),M.isDataTexture||M.isData3DTexture)T.texSubImage3D(R0,x,k0,o0,Y6,Z0,q0,V0,v6,i0,H6.data);else if(y.isCompressedArrayTexture)T.compressedTexSubImage3D(R0,x,k0,o0,Y6,Z0,q0,V0,v6,H6.data);else T.texSubImage3D(R0,x,k0,o0,Y6,Z0,q0,V0,v6,i0,H6);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,M6),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,a0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,o6),T.pixelStorei(T.UNPACK_SKIP_ROWS,Z9),T.pixelStorei(T.UNPACK_SKIP_IMAGES,x6),x===0&&y.generateMipmaps)T.generateMipmap(R0);C0.unbindTexture()},this.initRenderTarget=function(M){if(T0.get(M).__webglFramebuffer===void 0)S0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)S0.setTextureCube(M,0);else if(M.isData3DTexture)S0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)S0.setTexture2DArray(M,0);else S0.setTexture2D(M,0);C0.unbindTexture()},this.resetState=function(){_=0,f=0,L=null,C0.reset(),I0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",Q.unpackColorSpace=s0.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}}class A9 extends $6{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new W8,this.environmentIntensity=1,this.environmentRotation=new W8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class t9{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=J8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return lJ("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var A6=new A;class u6{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)A6.fromBufferAttribute(this,Q),A6.applyMatrix4(J),this.setXYZ(Q,A6.x,A6.y,A6.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)A6.fromBufferAttribute(this,Q),A6.applyNormalMatrix(J),this.setXYZ(Q,A6.x,A6.y,A6.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)A6.fromBufferAttribute(this,Q),A6.transformDirection(J),this.setXYZ(Q,A6.x,A6.y,A6.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=t6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=t0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=t6(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=t6(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=t6(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=t6(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),$=t0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),$=t0($,this.array),Z=t0(Z,this.array),W=t0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new B6(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new u6(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var _Q=new A,IQ=new c0,PQ=new c0,uY=new A,AQ=new j0,A7=new A,SJ=new P6,TQ=new j0,jJ=new s8;class eJ extends n0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new j0,this.bindMatrixInverse=new j0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new R6;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,A7),this.boundingBox.expandByPoint(A7)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new P6;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,A7),this.boundingSphere.expandByPoint(A7)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(SJ.copy(this.boundingSphere),SJ.applyMatrix4(Z),J.ray.intersectsSphere(SJ)===!1)return;if(TQ.copy(Z).invert(),jJ.copy(J.ray).applyMatrix4(TQ),this.boundingBox!==null){if(jJ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,jJ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new c0,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;IQ.fromBufferAttribute(Z.attributes.skinIndex,J),PQ.fromBufferAttribute(Z.attributes.skinWeight,J),_Q.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let X=PQ.getComponent(W);if(X!==0){let Y=IQ.getComponent(W);AQ.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(uY.copy(_Q).applyMatrix4(AQ),X)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class c7 extends $6{constructor(){super();this.isBone=!0,this.type="Bone"}}class J5 extends F6{constructor(J=null,Q=1,$=1,Z,W,X,Y,H,K=1003,G=1003,q,U){super(null,X,Y,H,K,G,Z,W,q,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var SQ=new j0,mY=new j0;class n7{constructor(J=[],Q=[]){this.uuid=J8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new j0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new j0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,X=J.length;W<X;W++){let Y=J[W]?J[W].matrixWorld:mY;SQ.multiplyMatrices(Y,Q[W]),SQ.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new n7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new J5(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],X=Q[W];if(X===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),X=new c7;this.bones.push(X),this.boneInverses.push(new j0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let X=Q[Z];J.bones.push(X.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class w9 extends B6{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var M9=new j0,jQ=new j0,T7=[],yQ=new R6,lY=new j0,p9=new n0,u9=new P6;class Q5 extends n0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new w9(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,lY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new R6;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M9),yQ.copy(J.boundingBox).applyMatrix4(M9),this.boundingBox.union(yQ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new P6;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M9),u9.copy(J.boundingSphere).applyMatrix4(M9),this.boundingSphere.union(u9)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,X=J*W+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[X+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(p9.geometry=this.geometry,p9.material=this.material,p9.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(u9.copy(this.boundingSphere),u9.applyMatrix4($),J.ray.intersectsSphere(u9)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,M9),jQ.multiplyMatrices($,M9),p9.matrixWorld=jQ,p9.raycast(J,T7);for(let X=0,Y=T7.length;X<Y;X++){let H=T7[X];H.instanceId=W,H.object=this,Q.push(H)}T7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new w9(new Float32Array(this.instanceMatrix.count*3),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new J5(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,X=0;for(let K=0;K<$.length;K++)X+=$[K];let Y=this.geometry.morphTargetsRelative?1:1-X,H=Z*J;W[H]=Y,W.set($,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class s7 extends c6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new D0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var b7=new A,g7=new A,fQ=new j0,m9=new s8,S7=new P6,yJ=new A,vQ=new A;class e9 extends $6{constructor(J=new f6,Q=new s7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)b7.fromBufferAttribute(Q,Z-1),g7.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=b7.distanceTo(g7);J.setAttribute("lineDistance",new j6($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,X=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(S7.copy($.boundingSphere),S7.applyMatrix4(Z),S7.radius+=W,J.ray.intersectsSphere(S7)===!1)return;fQ.copy(Z).invert(),m9.copy(J.ray).applyMatrix4(fQ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=Y*Y,K=this.isLineSegments?2:1,G=$.index,U=$.attributes.position;if(G!==null){let F=Math.max(0,X.start),N=Math.min(G.count,X.start+X.count);for(let B=F,O=N-1;B<O;B+=K){let V=G.getX(B),E=G.getX(B+1),z=j7(this,J,m9,H,V,E);if(z)Q.push(z)}if(this.isLineLoop){let B=G.getX(N-1),O=G.getX(F),V=j7(this,J,m9,H,B,O);if(V)Q.push(V)}}else{let F=Math.max(0,X.start),N=Math.min(U.count,X.start+X.count);for(let B=F,O=N-1;B<O;B+=K){let V=j7(this,J,m9,H,B,B+1);if(V)Q.push(V)}if(this.isLineLoop){let B=j7(this,J,m9,H,N-1,F);if(B)Q.push(B)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,X=Z.length;W<X;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function j7(J,Q,$,Z,W,X){let Y=J.geometry.attributes.position;if(b7.fromBufferAttribute(Y,W),g7.fromBufferAttribute(Y,X),$.distanceSqToSegment(b7,g7,yJ,vQ)>Z)return;yJ.applyMatrix4(J.matrixWorld);let K=Q.ray.origin.distanceTo(yJ);if(K<Q.near||K>Q.far)return;return{distance:K,point:vQ.clone().applyMatrix4(J.matrixWorld),index:W,face:null,faceIndex:null,object:J}}var xQ=new A,hQ=new A;class $5 extends e9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)xQ.fromBufferAttribute(Q,Z),hQ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+xQ.distanceTo(hQ);J.setAttribute("lineDistance",new j6($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Z5 extends e9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class o7 extends c6{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new D0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var bQ=new j0,hJ=new s8,y7=new P6,f7=new A;class W5 extends $6{constructor(J=new f6,Q=new o7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,X=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(y7.copy($.boundingSphere),y7.applyMatrix4(Z),y7.radius+=W,J.ray.intersectsSphere(y7)===!1)return;bQ.copy(Z).invert(),hJ.copy(J.ray).applyMatrix4(bQ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=Y*Y,K=$.index,q=$.attributes.position;if(K!==null){let U=Math.max(0,X.start),F=Math.min(K.count,X.start+X.count);for(let N=U,B=F;N<B;N++){let O=K.getX(N);f7.fromBufferAttribute(q,O),gQ(f7,O,H,Z,J,Q,this)}}else{let U=Math.max(0,X.start),F=Math.min(q.count,X.start+X.count);for(let N=U,B=F;N<B;N++)f7.fromBufferAttribute(q,N),gQ(f7,N,H,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,X=Z.length;W<X;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function gQ(J,Q,$,Z,W,X,Y){let H=hJ.distanceSqToPoint(J);if(H<$){let K=new A;hJ.closestPointToPoint(J,K),K.applyMatrix4(Z);let G=W.ray.origin.distanceTo(K);if(G<W.near||G>W.far)return;X.push({distance:G,distanceToRay:Math.sqrt(H),point:K,index:Q,face:null,object:Y})}}class X5 extends f6{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],$=new Set,Z=new A,W=new A;if(J.index!==null){let X=J.attributes.position,Y=J.index,H=J.groups;if(H.length===0)H=[{start:0,count:Y.count,materialIndex:0}];for(let K=0,G=H.length;K<G;++K){let q=H[K],U=q.start,F=q.count;for(let N=U,B=U+F;N<B;N+=3)for(let O=0;O<3;O++){let V=Y.getX(N+O),E=Y.getX(N+(O+1)%3);if(Z.fromBufferAttribute(X,V),W.fromBufferAttribute(X,E),pQ(Z,W,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(W.x,W.y,W.z)}}}else{let X=J.attributes.position;for(let Y=0,H=X.count/3;Y<H;Y++)for(let K=0;K<3;K++){let G=3*Y+K,q=3*Y+(K+1)%3;if(Z.fromBufferAttribute(X,G),W.fromBufferAttribute(X,q),pQ(Z,W,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(W.x,W.y,W.z)}}this.setAttribute("position",new j6(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function pQ(J,Q,$){let Z=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,W=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if($.has(Z)===!0||$.has(W)===!0)return!1;else return $.add(Z),$.add(W),!0}class H8 extends c6{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new D0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new W8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class n6 extends H8{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return O6(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new D0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new D0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new D0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}function v7(J,Q,$){if(!J||!$&&J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function dY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function cY(J){function Q(W,X){return J[W]-J[X]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function uQ(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let X=0,Y=0;Y!==Z;++X){let H=$[X]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[H+K]}return W}function w$(J,Q,$,Z){let W=1,X=J[0];while(X!==void 0&&X[Z]===void 0)X=J[W++];if(X===void 0)return;let Y=X[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=X[Z],Y!==void 0)Q.push(X.time),$.push.apply($,Y);X=J[W++]}while(X!==void 0);else if(Y.toArray!==void 0)do{if(Y=X[Z],Y!==void 0)Q.push(X.time),Y.toArray($,$.length);X=J[W++]}while(X!==void 0);else do{if(Y=X[Z],Y!==void 0)Q.push(X.time),$.push(Y);X=J[W++]}while(X!==void 0)}class i8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];J:{Q:{let X;$:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break Q}X=Q.length;break $}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let H=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=W,W=Q[--$-1],J>=W)break Q}X=$,$=0;break $}break J}while($<X){let Y=$+X>>>1;if(J<Q[Y])X=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let X=0;X!==Z;++X)Q[X]=$[W+X];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class _$ extends i8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,X=J+1,Y=Z[W],H=Z[X];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:X=J,H=2*$-Q;break;case 2402:X=1,H=$+Z[1]-Z[0];break;default:X=J-1,H=Q}let K=($-Q)*0.5,G=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(H-$),this._offsetPrev=W*G,this._offsetNext=X*G}interpolate_(J,Q,$,Z){let W=this.resultBuffer,X=this.sampleValues,Y=this.valueSize,H=J*Y,K=H-Y,G=this._offsetPrev,q=this._offsetNext,U=this._weightPrev,F=this._weightNext,N=($-Q)/(Z-Q),B=N*N,O=B*N,V=-U*O+2*U*B-U*N,E=(1+U)*O+(-1.5-2*U)*B+(-0.5+U)*N+1,z=(-1-F)*O+(1.5+F)*B+0.5*N,D=F*O-F*B;for(let _=0;_!==Y;++_)W[_]=V*X[G+_]+E*X[K+_]+z*X[H+_]+D*X[q+_];return W}}class I$ extends i8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,X=this.sampleValues,Y=this.valueSize,H=J*Y,K=H-Y,G=($-Q)/(Z-Q),q=1-G;for(let U=0;U!==Y;++U)W[U]=X[K+U]*q+X[H+U]*G;return W}}class P$ extends i8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class Q8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=v7(Q,this.TimeBufferType),this.values=v7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:v7(J.times,Array),values:v7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new P$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new I$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new _$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,X=Z-1;while(W!==Z&&$[W]<J)++W;while(X!==-1&&$[X]>Q)--X;if(++X,W!==0||X!==Z){if(W>=X)X=Math.max(X,1),W=X-1;let Y=this.getValueSize();this.times=$.slice(W,X),this.values=this.values.slice(W*Y,X*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let X=null;for(let Y=0;Y!==W;Y++){let H=$[Y];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,H),J=!1;break}if(X!==null&&X>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,H,X),J=!1;break}X=H}if(Z!==void 0){if(dY(Z))for(let Y=0,H=Z.length;Y!==H;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,X=1;for(let Y=1;Y<W;++Y){let H=!1,K=J[Y],G=J[Y+1];if(K!==G&&(Y!==1||K!==J[0]))if(!Z){let q=Y*$,U=q-$,F=q+$;for(let N=0;N!==$;++N){let B=Q[q+N];if(B!==Q[U+N]||B!==Q[F+N]){H=!0;break}}}else H=!0;if(H){if(Y!==X){J[X]=J[Y];let q=Y*$,U=X*$;for(let F=0;F!==$;++F)Q[U+F]=Q[q+F]}++X}}if(W>0){J[X]=J[W];for(let Y=W*$,H=X*$,K=0;K!==$;++K)Q[H+K]=Q[Y+K];++X}if(X!==J.length)this.times=J.slice(0,X),this.values=Q.slice(0,X*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}Q8.prototype.TimeBufferType=Float32Array;Q8.prototype.ValueBufferType=Float32Array;Q8.prototype.DefaultInterpolation=2301;class a8 extends Q8{constructor(J,Q,$){super(J,Q,$)}}a8.prototype.ValueTypeName="bool";a8.prototype.ValueBufferType=Array;a8.prototype.DefaultInterpolation=2300;a8.prototype.InterpolantFactoryMethodLinear=void 0;a8.prototype.InterpolantFactoryMethodSmooth=void 0;class Y5 extends Q8{}Y5.prototype.ValueTypeName="color";class P8 extends Q8{}P8.prototype.ValueTypeName="number";class A$ extends i8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,X=this.sampleValues,Y=this.valueSize,H=($-Q)/(Z-Q),K=J*Y;for(let G=K+Y;K!==G;K+=4)g6.slerpFlat(W,0,X,K-Y,X,K,H);return W}}class j8 extends Q8{InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}}j8.prototype.ValueTypeName="quaternion";j8.prototype.InterpolantFactoryMethodSmooth=void 0;class r8 extends Q8{constructor(J,Q,$){super(J,Q,$)}}r8.prototype.ValueTypeName="string";r8.prototype.ValueBufferType=Array;r8.prototype.DefaultInterpolation=2300;r8.prototype.InterpolantFactoryMethodLinear=void 0;r8.prototype.InterpolantFactoryMethodSmooth=void 0;class A8 extends Q8{}A8.prototype.ValueTypeName="vector";class H5{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=J8(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let X=0,Y=$.length;X!==Y;++X)Q.push(sY($[X]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,X=$.length;W!==X;++W)Q.push(Q8.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,X=[];for(let Y=0;Y<W;Y++){let H=[],K=[];H.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let G=cY(H);if(H=uQ(H,1,G),K=uQ(K,1,G),!Z&&H[0]===0)H.push(W),K.push(K[0]);X.push(new P8(".morphTargetInfluences["+Q[Y].name+"]",H,K).scale(1/$))}return new this(J,-1,X)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,H=J.length;Y<H;Y++){let K=J[Y],G=K.name.match(W);if(G&&G.length>1){let q=G[1],U=Z[q];if(!U)Z[q]=U=[];U.push(K)}}let X=[];for(let Y in Z)X.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return X}static parseAnimation(J,Q){if(!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(q,U,F,N,B){if(F.length!==0){let O=[],V=[];if(w$(F,O,V,N),O.length!==0)B.push(new q(U,O,V))}},Z=[],W=J.name||"default",X=J.fps||30,Y=J.blendMode,H=J.length||-1,K=J.hierarchy||[];for(let q=0;q<K.length;q++){let U=K[q].keys;if(!U||U.length===0)continue;if(U[0].morphTargets){let F={},N;for(N=0;N<U.length;N++)if(U[N].morphTargets)for(let B=0;B<U[N].morphTargets.length;B++)F[U[N].morphTargets[B]]=-1;for(let B in F){let O=[],V=[];for(let E=0;E!==U[N].morphTargets.length;++E){let z=U[N];O.push(z.time),V.push(z.morphTarget===B?1:0)}Z.push(new P8(".morphTargetInfluence["+B+"]",O,V))}H=F.length*X}else{let F=".bones["+Q[q].name+"]";$(A8,F+".position",U,"pos",Z),$(j8,F+".quaternion",U,"rot",Z),$(A8,F+".scale",U,"scl",Z)}}if(Z.length===0)return null;return new this(W,H,Z,Y)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nY(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return P8;case"vector":case"vector2":case"vector3":case"vector4":return A8;case"color":return Y5;case"quaternion":return j8;case"bool":case"boolean":return a8;case"string":return r8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function sY(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=nY(J.type);if(J.times===void 0){let $=[],Z=[];w$(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var I8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class T${constructor(J,Q,$){let Z=this,W=!1,X=0,Y=0,H=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.itemStart=function(G){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(G,X,Y)}W=!0},this.itemEnd=function(G){if(X++,Z.onProgress!==void 0)Z.onProgress(G,X,Y);if(X===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(G){if(Z.onError!==void 0)Z.onError(G)},this.resolveURL=function(G){if(H)return H(G);return G},this.setURLModifier=function(G){return H=G,this},this.addHandler=function(G,q){return K.push(G,q),this},this.removeHandler=function(G){let q=K.indexOf(G);if(q!==-1)K.splice(q,2);return this},this.getHandler=function(G){for(let q=0,U=K.length;q<U;q+=2){let F=K[q],N=K[q+1];if(F.global)F.lastIndex=0;if(F.test(G))return N}return null}}}var oY=new T$;class y8{constructor(J){this.manager=J!==void 0?J:oY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}y8.DEFAULT_MATERIAL_NAME="__DEFAULT";var B8={};class S$ extends Error{constructor(J,Q){super(J);this.response=Q}}class i7 extends y8{constructor(J){super(J)}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=I8.get(J);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(B8[J]!==void 0){B8[J].push({onLoad:Q,onProgress:$,onError:Z});return}B8[J]=[],B8[J].push({onLoad:Q,onProgress:$,onError:Z});let X=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),Y=this.mimeType,H=this.responseType;fetch(X).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let G=B8[J],q=K.body.getReader(),U=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),F=U?parseInt(U):0,N=F!==0,B=0,O=new ReadableStream({start(V){E();function E(){q.read().then(({done:z,value:D})=>{if(z)V.close();else{B+=D.byteLength;let _=new ProgressEvent("progress",{lengthComputable:N,loaded:B,total:F});for(let f=0,L=G.length;f<L;f++){let j=G[f];if(j.onProgress)j.onProgress(_)}V.enqueue(D),E()}},(z)=>{V.error(z)})}}});return new Response(O)}else throw new S$(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(H){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((G)=>{return new DOMParser().parseFromString(G,Y)});case"json":return K.json();default:if(Y===void 0)return K.text();else{let q=/charset="?([^;"\s]*)"?/i.exec(Y),U=q&&q[1]?q[1].toLowerCase():void 0,F=new TextDecoder(U);return K.arrayBuffer().then((N)=>F.decode(N))}}}).then((K)=>{I8.add(J,K);let G=B8[J];delete B8[J];for(let q=0,U=G.length;q<U;q++){let F=G[q];if(F.onLoad)F.onLoad(K)}}).catch((K)=>{let G=B8[J];if(G===void 0)throw this.manager.itemError(J),K;delete B8[J];for(let q=0,U=G.length;q<U;q++){let F=G[q];if(F.onError)F.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class j$ extends y8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,X=I8.get(J);if(X!==void 0)return W.manager.itemStart(J),setTimeout(function(){if(Q)Q(X);W.manager.itemEnd(J)},0),X;let Y=o9("img");function H(){if(G(),I8.add(J,this),Q)Q(this);W.manager.itemEnd(J)}function K(q){if(G(),Z)Z(q);W.manager.itemError(J),W.manager.itemEnd(J)}function G(){Y.removeEventListener("load",H,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",H,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return W.manager.itemStart(J),Y.src=J,Y}}class K5 extends y8{constructor(J){super(J)}load(J,Q,$,Z){let W=new F6,X=new j$(this.manager);return X.setCrossOrigin(this.crossOrigin),X.setPath(this.path),X.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class J7 extends $6{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new D0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class G5 extends J7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($6.DEFAULT_UP),this.updateMatrix(),this.groundColor=new D0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var fJ=new j0,mQ=new A,lQ=new A;class a7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B0(512,512),this.map=null,this.mapPass=null,this.matrix=new j0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new l7,this._frameExtents=new B0(1,1),this._viewportCount=1,this._viewports=[new c0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;mQ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(mQ),lQ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(lQ),Q.updateMatrixWorld(),fJ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fJ),$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),$.multiply(fJ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class y$ extends a7{constructor(){super(new I6(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(J){let Q=this.camera,$=k9*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class q5 extends J7{constructor(J,Q,$=0,Z=Math.PI/3,W=0,X=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy($6.DEFAULT_UP),this.updateMatrix(),this.target=new $6,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=X,this.map=null,this.shadow=new y$}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var dQ=new j0,l9=new A,vJ=new A;class f$ extends a7{constructor(){super(new I6(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new B0(4,2),this._viewportCount=6,this._viewports=[new c0(2,1,1,1),new c0(0,1,1,1),new c0(3,1,1,1),new c0(1,1,1,1),new c0(3,0,1,1),new c0(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();l9.setFromMatrixPosition(J.matrixWorld),$.position.copy(l9),vJ.copy($.position),vJ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(vJ),$.updateMatrixWorld(),Z.makeTranslation(-l9.x,-l9.y,-l9.z),dQ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dQ)}}class Q7 extends J7{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new f$}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class v$ extends a7{constructor(){super(new S8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class T9 extends J7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($6.DEFAULT_UP),this.updateMatrix(),this.target=new $6,this.shadow=new v$}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class t8{static decodeText(J){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(J);let Q="";for(let $=0,Z=J.length;$<Z;$++)Q+=String.fromCharCode(J[$]);try{return decodeURIComponent(escape(Q))}catch($){return Q}}static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class U5 extends f6{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}class F5 extends y8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,X=I8.get(J);if(X!==void 0){if(W.manager.itemStart(J),X.then){X.then((K)=>{if(Q)Q(K);W.manager.itemEnd(J)}).catch((K)=>{if(Z)Z(K)});return}return setTimeout(function(){if(Q)Q(X);W.manager.itemEnd(J)},0),X}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader;let H=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(I8.add(J,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);I8.remove(J),W.manager.itemError(J),W.manager.itemEnd(J)});I8.add(J,H),W.manager.itemStart(J)}}var V5="\\[\\]\\.:\\/",iY=new RegExp("["+V5+"]","g"),E5="[^"+V5+"]",aY="[^"+V5.replace("\\.","")+"]",rY=/((?:WC+[\/:])*)/.source.replace("WC",E5),tY=/(WCOD+)?/.source.replace("WCOD",aY),eY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",E5),JH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",E5),QH=new RegExp("^"+rY+tY+eY+JH+"$"),$H=["material","materials","bones","map"];class x${constructor(J,Q,$){let Z=$||r0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class r0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||r0.parseTrackName(Q),this.node=r0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new r0(J,Q,$);else return new r0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iY,"")}static parseTrackName(J){let Q=QH.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if($H.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let X=0;X<W.length;X++){let Y=W[X];if(Y.name===Q||Y.uuid===Q)return Y;let H=$(Y.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=r0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===K){K=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let X=J[Z];if(X===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)Y=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)Y=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=X,this.propertyIndex=W}else if(X.fromArray!==void 0&&X.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=X;else if(Array.isArray(X))H=this.BindingType.EntireArray,this.resolvedProperty=X;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r0.Composite=x$;r0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r0.prototype.GetterByBindingType=[r0.prototype._getValue_direct,r0.prototype._getValue_array,r0.prototype._getValue_arrayElement,r0.prototype._getValue_toArray];r0.prototype.SetterByBindingTypeAndVersioning=[[r0.prototype._setValue_direct,r0.prototype._setValue_direct_setNeedsUpdate,r0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_array,r0.prototype._setValue_array_setNeedsUpdate,r0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_arrayElement,r0.prototype._setValue_arrayElement_setNeedsUpdate,r0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_fromArray,r0.prototype._setValue_fromArray_setNeedsUpdate,r0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AH=new Float32Array(1);class S9 extends t9{constructor(J,Q,$=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class r7{constructor(J=1,Q=0,$=0){return this.radius=J,this.phi=Q,this.theta=$,this}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(O6(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}var cQ=new A,x7=new A;class N5{constructor(J=new A,Q=new A){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){cQ.subVectors(J,this.start),x7.subVectors(this.end,this.start);let $=x7.dot(x7),W=x7.dot(cQ)/$;if(Q)W=O6(W,0,1);return W}closestPointToPoint(J,Q,$){let Z=this.closestPointToPointParameter(J,Q);return this.delta($).multiplyScalar(Z).add(this.start)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"166"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="166";var h$={type:"change"},O5={type:"start"},b$={type:"end"},t7=new s8,g$=new $8,WH=Math.cos(70*Y8.DEG2RAD);class B5 extends R8{constructor(J,Q){super();this.object=J,this.domElement=Q,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:d8.ROTATE,MIDDLE:d8.DOLLY,RIGHT:d8.PAN},this.touches={ONE:c8.ROTATE,TWO:c8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return Y.phi},this.getAzimuthalAngle=function(){return Y.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Y0),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Y0),this._domElementKeyEvents=null},this.saveState=function(){$.target0.copy($.target),$.position0.copy($.object.position),$.zoom0=$.object.zoom},this.reset=function(){$.target.copy($.target0),$.object.position.copy($.position0),$.object.zoom=$.zoom0,$.object.updateProjectionMatrix(),$.dispatchEvent(h$),$.update(),W=Z.NONE},this.update=function(){let P=new A,w=new g6().setFromUnitVectors(J.up,new A(0,1,0)),a=w.clone().invert(),l=new A,s=new g6,$0=new A,N0=2*Math.PI;return function(X6=null){let K6=$.object.position;if(P.copy(K6).sub($.target),P.applyQuaternion(w),Y.setFromVector3(P),$.autoRotate&&W===Z.NONE)S(C(X6));if($.enableDamping)Y.theta+=H.theta*$.dampingFactor,Y.phi+=H.phi*$.dampingFactor;else Y.theta+=H.theta,Y.phi+=H.phi;let{minAzimuthAngle:b0,maxAzimuthAngle:G6}=$;if(isFinite(b0)&&isFinite(G6)){if(b0<-Math.PI)b0+=N0;else if(b0>Math.PI)b0-=N0;if(G6<-Math.PI)G6+=N0;else if(G6>Math.PI)G6-=N0;if(b0<=G6)Y.theta=Math.max(b0,Math.min(G6,Y.theta));else Y.theta=Y.theta>(b0+G6)/2?Math.max(b0,Y.theta):Math.min(G6,Y.theta)}if(Y.phi=Math.max($.minPolarAngle,Math.min($.maxPolarAngle,Y.phi)),Y.makeSafe(),$.enableDamping===!0)$.target.addScaledVector(G,$.dampingFactor);else $.target.add(G);$.target.sub($.cursor),$.target.clampLength($.minTargetRadius,$.maxTargetRadius),$.target.add($.cursor);let D6=!1;if($.zoomToCursor&&f||$.object.isOrthographicCamera)Y.radius=J0(Y.radius);else{let z6=Y.radius;Y.radius=J0(Y.radius*K),D6=z6!=Y.radius}if(P.setFromSpherical(Y),P.applyQuaternion(a),K6.copy($.target).add(P),$.object.lookAt($.target),$.enableDamping===!0)H.theta*=1-$.dampingFactor,H.phi*=1-$.dampingFactor,G.multiplyScalar(1-$.dampingFactor);else H.set(0,0,0),G.set(0,0,0);if($.zoomToCursor&&f){let z6=null;if($.object.isPerspectiveCamera){let U8=P.length();z6=J0(U8*K);let v8=U8-z6;$.object.position.addScaledVector(D,v8),$.object.updateMatrixWorld(),D6=!!v8}else if($.object.isOrthographicCamera){let U8=new A(_.x,_.y,0);U8.unproject($.object);let v8=$.object.zoom;$.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/K)),$.object.updateProjectionMatrix(),D6=v8!==$.object.zoom;let v9=new A(_.x,_.y,0);v9.unproject($.object),$.object.position.sub(v9).add(U8),$.object.updateMatrixWorld(),z6=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),$.zoomToCursor=!1;if(z6!==null)if(this.screenSpacePanning)$.target.set(0,0,-1).transformDirection($.object.matrix).multiplyScalar(z6).add($.object.position);else if(t7.origin.copy($.object.position),t7.direction.set(0,0,-1).transformDirection($.object.matrix),Math.abs($.object.up.dot(t7.direction))<WH)J.lookAt($.target);else g$.setFromNormalAndCoplanarPoint($.object.up,$.target),t7.intersectPlane(g$,$.target)}else if($.object.isOrthographicCamera){let z6=$.object.zoom;if($.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/K)),z6!==$.object.zoom)$.object.updateProjectionMatrix(),D6=!0}if(K=1,f=!1,D6||l.distanceToSquared($.object.position)>X||8*(1-s.dot($.object.quaternion))>X||$0.distanceToSquared($.target)>X)return $.dispatchEvent(h$),l.copy($.object.position),s.copy($.object.quaternion),$0.copy($.target),!0;return!1}}(),this.dispose=function(){if($.domElement.removeEventListener("contextmenu",Q0),$.domElement.removeEventListener("pointerdown",S0),$.domElement.removeEventListener("pointercancel",I),$.domElement.removeEventListener("wheel",r),$.domElement.removeEventListener("pointermove",Z6),$.domElement.removeEventListener("pointerup",I),$.domElement.getRootNode().removeEventListener("keydown",e,{capture:!0}),$._domElementKeyEvents!==null)$._domElementKeyEvents.removeEventListener("keydown",Y0),$._domElementKeyEvents=null};let $=this,Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},W=Z.NONE,X=0.000001,Y=new r7,H=new r7,K=1,G=new A,q=new B0,U=new B0,F=new B0,N=new B0,B=new B0,O=new B0,V=new B0,E=new B0,z=new B0,D=new A,_=new B0,f=!1,L=[],j={},d=!1;function C(P){if(P!==null)return 2*Math.PI/60*$.autoRotateSpeed*P;else return 2*Math.PI/60/60*$.autoRotateSpeed}function k(P){let w=Math.abs(P*0.01);return Math.pow(0.95,$.zoomSpeed*w)}function S(P){H.theta-=P}function p(P){H.phi-=P}let n=function(){let P=new A;return function(a,l){P.setFromMatrixColumn(l,0),P.multiplyScalar(-a),G.add(P)}}(),c=function(){let P=new A;return function(a,l){if($.screenSpacePanning===!0)P.setFromMatrixColumn(l,1);else P.setFromMatrixColumn(l,0),P.crossVectors($.object.up,P);P.multiplyScalar(a),G.add(P)}}(),v=function(){let P=new A;return function(a,l){let s=$.domElement;if($.object.isPerspectiveCamera){let $0=$.object.position;P.copy($0).sub($.target);let N0=P.length();N0*=Math.tan($.object.fov/2*Math.PI/180),n(2*a*N0/s.clientHeight,$.object.matrix),c(2*l*N0/s.clientHeight,$.object.matrix)}else if($.object.isOrthographicCamera)n(a*($.object.right-$.object.left)/$.object.zoom/s.clientWidth,$.object.matrix),c(l*($.object.top-$.object.bottom)/$.object.zoom/s.clientHeight,$.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),$.enablePan=!1}}();function h(P){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera)K/=P;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),$.enableZoom=!1}function i(P){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera)K*=P;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),$.enableZoom=!1}function b(P,w){if(!$.zoomToCursor)return;f=!0;let a=$.domElement.getBoundingClientRect(),l=P-a.left,s=w-a.top,$0=a.width,N0=a.height;_.x=l/$0*2-1,_.y=-(s/N0)*2+1,D.set(_.x,_.y,1).unproject($.object).sub($.object.position).normalize()}function J0(P){return Math.max($.minDistance,Math.min($.maxDistance,P))}function G0(P){q.set(P.clientX,P.clientY)}function M0(P){b(P.clientX,P.clientX),V.set(P.clientX,P.clientY)}function y0(P){N.set(P.clientX,P.clientY)}function o(P){U.set(P.clientX,P.clientY),F.subVectors(U,q).multiplyScalar($.rotateSpeed);let w=$.domElement;S(2*Math.PI*F.x/w.clientHeight),p(2*Math.PI*F.y/w.clientHeight),q.copy(U),$.update()}function W0(P){if(E.set(P.clientX,P.clientY),z.subVectors(E,V),z.y>0)h(k(z.y));else if(z.y<0)i(k(z.y));V.copy(E),$.update()}function F0(P){B.set(P.clientX,P.clientY),O.subVectors(B,N).multiplyScalar($.panSpeed),v(O.x,O.y),N.copy(B),$.update()}function L0(P){if(b(P.clientX,P.clientY),P.deltaY<0)i(k(P.deltaY));else if(P.deltaY>0)h(k(P.deltaY));$.update()}function U0(P){let w=!1;switch(P.code){case $.keys.UP:if(P.ctrlKey||P.metaKey||P.shiftKey)p(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else v(0,$.keyPanSpeed);w=!0;break;case $.keys.BOTTOM:if(P.ctrlKey||P.metaKey||P.shiftKey)p(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else v(0,-$.keyPanSpeed);w=!0;break;case $.keys.LEFT:if(P.ctrlKey||P.metaKey||P.shiftKey)S(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else v($.keyPanSpeed,0);w=!0;break;case $.keys.RIGHT:if(P.ctrlKey||P.metaKey||P.shiftKey)S(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight);else v(-$.keyPanSpeed,0);w=!0;break}if(w)P.preventDefault(),$.update()}function A0(P){if(L.length===1)q.set(P.pageX,P.pageY);else{let w=I0(P),a=0.5*(P.pageX+w.x),l=0.5*(P.pageY+w.y);q.set(a,l)}}function e0(P){if(L.length===1)N.set(P.pageX,P.pageY);else{let w=I0(P),a=0.5*(P.pageX+w.x),l=0.5*(P.pageY+w.y);N.set(a,l)}}function h0(P){let w=I0(P),a=P.pageX-w.x,l=P.pageY-w.y,s=Math.sqrt(a*a+l*l);V.set(0,s)}function T(P){if($.enableZoom)h0(P);if($.enablePan)e0(P)}function W6(P){if($.enableZoom)h0(P);if($.enableRotate)A0(P)}function g0(P){if(L.length==1)U.set(P.pageX,P.pageY);else{let a=I0(P),l=0.5*(P.pageX+a.x),s=0.5*(P.pageY+a.y);U.set(l,s)}F.subVectors(U,q).multiplyScalar($.rotateSpeed);let w=$.domElement;S(2*Math.PI*F.x/w.clientHeight),p(2*Math.PI*F.y/w.clientHeight),q.copy(U)}function Q6(P){if(L.length===1)B.set(P.pageX,P.pageY);else{let w=I0(P),a=0.5*(P.pageX+w.x),l=0.5*(P.pageY+w.y);B.set(a,l)}O.subVectors(B,N).multiplyScalar($.panSpeed),v(O.x,O.y),N.copy(B)}function C0(P){let w=I0(P),a=P.pageX-w.x,l=P.pageY-w.y,s=Math.sqrt(a*a+l*l);E.set(0,s),z.set(0,Math.pow(E.y/V.y,$.zoomSpeed)),h(z.y),V.copy(E);let $0=(P.pageX+w.x)*0.5,N0=(P.pageY+w.y)*0.5;b($0,N0)}function l0(P){if($.enableZoom)C0(P);if($.enablePan)Q6(P)}function T0(P){if($.enableZoom)C0(P);if($.enableRotate)g0(P)}function S0(P){if($.enabled===!1)return;if(L.length===0)$.domElement.setPointerCapture(P.pointerId),$.domElement.addEventListener("pointermove",Z6),$.domElement.addEventListener("pointerup",I);if(w0(P))return;if(O0(P),P.pointerType==="touch")H0(P);else R(P)}function Z6(P){if($.enabled===!1)return;if(P.pointerType==="touch")v0(P);else m(P)}function I(P){switch(u0(P),L.length){case 0:$.domElement.releasePointerCapture(P.pointerId),$.domElement.removeEventListener("pointermove",Z6),$.domElement.removeEventListener("pointerup",I),$.dispatchEvent(b$),W=Z.NONE;break;case 1:let w=L[0],a=j[w];H0({pointerId:w,pageX:a.x,pageY:a.y});break}}function R(P){let w;switch(P.button){case 0:w=$.mouseButtons.LEFT;break;case 1:w=$.mouseButtons.MIDDLE;break;case 2:w=$.mouseButtons.RIGHT;break;default:w=-1}switch(w){case d8.DOLLY:if($.enableZoom===!1)return;M0(P),W=Z.DOLLY;break;case d8.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if($.enablePan===!1)return;y0(P),W=Z.PAN}else{if($.enableRotate===!1)return;G0(P),W=Z.ROTATE}break;case d8.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if($.enableRotate===!1)return;G0(P),W=Z.ROTATE}else{if($.enablePan===!1)return;y0(P),W=Z.PAN}break;default:W=Z.NONE}if(W!==Z.NONE)$.dispatchEvent(O5)}function m(P){switch(W){case Z.ROTATE:if($.enableRotate===!1)return;o(P);break;case Z.DOLLY:if($.enableZoom===!1)return;W0(P);break;case Z.PAN:if($.enablePan===!1)return;F0(P);break}}function r(P){if($.enabled===!1||$.enableZoom===!1||W!==Z.NONE)return;P.preventDefault(),$.dispatchEvent(O5),L0(t(P)),$.dispatchEvent(b$)}function t(P){let w=P.deltaMode,a={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(w){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}if(P.ctrlKey&&!d)a.deltaY*=10;return a}function e(P){if(P.key==="Control")d=!0,$.domElement.getRootNode().addEventListener("keyup",z0,{passive:!0,capture:!0})}function z0(P){if(P.key==="Control")d=!1,$.domElement.getRootNode().removeEventListener("keyup",z0,{passive:!0,capture:!0})}function Y0(P){if($.enabled===!1||$.enablePan===!1)return;U0(P)}function H0(P){switch(K0(P),L.length){case 1:switch($.touches.ONE){case c8.ROTATE:if($.enableRotate===!1)return;A0(P),W=Z.TOUCH_ROTATE;break;case c8.PAN:if($.enablePan===!1)return;e0(P),W=Z.TOUCH_PAN;break;default:W=Z.NONE}break;case 2:switch($.touches.TWO){case c8.DOLLY_PAN:if($.enableZoom===!1&&$.enablePan===!1)return;T(P),W=Z.TOUCH_DOLLY_PAN;break;case c8.DOLLY_ROTATE:if($.enableZoom===!1&&$.enableRotate===!1)return;W6(P),W=Z.TOUCH_DOLLY_ROTATE;break;default:W=Z.NONE}break;default:W=Z.NONE}if(W!==Z.NONE)$.dispatchEvent(O5)}function v0(P){switch(K0(P),W){case Z.TOUCH_ROTATE:if($.enableRotate===!1)return;g0(P),$.update();break;case Z.TOUCH_PAN:if($.enablePan===!1)return;Q6(P),$.update();break;case Z.TOUCH_DOLLY_PAN:if($.enableZoom===!1&&$.enablePan===!1)return;l0(P),$.update();break;case Z.TOUCH_DOLLY_ROTATE:if($.enableZoom===!1&&$.enableRotate===!1)return;T0(P),$.update();break;default:W=Z.NONE}}function Q0(P){if($.enabled===!1)return;P.preventDefault()}function O0(P){L.push(P.pointerId)}function u0(P){delete j[P.pointerId];for(let w=0;w<L.length;w++)if(L[w]==P.pointerId){L.splice(w,1);return}}function w0(P){for(let w=0;w<L.length;w++)if(L[w]==P.pointerId)return!0;return!1}function K0(P){let w=j[P.pointerId];if(w===void 0)w=new B0,j[P.pointerId]=w;w.set(P.pageX,P.pageY)}function I0(P){let w=P.pointerId===L[0]?L[1]:L[0];return j[w]}$.domElement.addEventListener("contextmenu",Q0),$.domElement.addEventListener("pointerdown",S0),$.domElement.addEventListener("pointercancel",I),$.domElement.addEventListener("wheel",r,{passive:!1}),$.domElement.getRootNode().addEventListener("keydown",e,{passive:!0,capture:!0}),this.update()}}function R5(J,Q){if(Q===Q$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===a9||Q===u7){let $=J.getIndex();if($===null){let Y=[],H=J.getAttribute("position");if(H!==void 0){for(let K=0;K<H.count;K++)Y.push(K);J.setIndex(Y),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===a9)for(let Y=1;Y<=Z;Y++)W.push($.getX(0)),W.push($.getX(Y)),W.push($.getX(Y+1));else for(let Y=0;Y<Z;Y++)if(Y%2===0)W.push($.getX(Y)),W.push($.getX(Y+1)),W.push($.getX(Y+2));else W.push($.getX(Y+2)),W.push($.getX(Y+1)),W.push($.getX(Y));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let X=J.clone();return X.setIndex(W),X.clearGroups(),X}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class D5 extends y8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new s$(Q)}),this.register(function(Q){return new o$(Q)}),this.register(function(Q){return new ZZ(Q)}),this.register(function(Q){return new WZ(Q)}),this.register(function(Q){return new XZ(Q)}),this.register(function(Q){return new a$(Q)}),this.register(function(Q){return new r$(Q)}),this.register(function(Q){return new t$(Q)}),this.register(function(Q){return new e$(Q)}),this.register(function(Q){return new n$(Q)}),this.register(function(Q){return new JZ(Q)}),this.register(function(Q){return new i$(Q)}),this.register(function(Q){return new $Z(Q)}),this.register(function(Q){return new QZ(Q)}),this.register(function(Q){return new d$(Q)}),this.register(function(Q){return new YZ(Q)}),this.register(function(Q){return new HZ(Q)})}load(J,Q,$,Z){let W=this,X;if(this.resourcePath!=="")X=this.resourcePath;else if(this.path!==""){let K=t8.extractUrlBase(J);X=t8.resolveURL(K,this.path)}else X=t8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},H=new i7(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(K){try{W.parse(K,X,function(G){Q(G),W.manager.itemEnd(J)},Y)}catch(G){Y(G)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,X={},Y={},H=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(H.decode(new Uint8Array(J,0,4))===KZ){try{X[p0.KHR_BINARY_GLTF]=new GZ(J)}catch(q){if(Z)Z(q);return}W=JSON.parse(X[p0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new EZ(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let G=0;G<this.pluginCallbacks.length;G++){let q=this.pluginCallbacks[G](K);if(!q.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[q.name]=q,X[q.name]=!0}if(W.extensionsUsed)for(let G=0;G<W.extensionsUsed.length;++G){let q=W.extensionsUsed[G],U=W.extensionsRequired||[];switch(q){case p0.KHR_MATERIALS_UNLIT:X[q]=new c$;break;case p0.KHR_DRACO_MESH_COMPRESSION:X[q]=new qZ(W,this.dracoLoader);break;case p0.KHR_TEXTURE_TRANSFORM:X[q]=new UZ;break;case p0.KHR_MESH_QUANTIZATION:X[q]=new FZ;break;default:if(U.indexOf(q)>=0&&Y[q]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+q+'".')}}K.setExtensions(X),K.setPlugins(Y),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function XH(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var p0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class d${constructor(J){this.parser=J,this.name=p0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,G=new D0(16777215);if(H.color!==void 0)G.setRGB(H.color[0],H.color[1],H.color[2],X8);let q=H.range!==void 0?H.range:0;switch(H.type){case"directional":K=new T9(G),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new Q7(G),K.distance=q;break;case"spot":K=new q5(G),K.distance=q,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,K.angle=H.spot.outerConeAngle,K.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(K.position.set(0,0,0),K.decay=2,z8(K,H),H.intensity!==void 0)K.intensity=H.intensity;return K.name=Q.createUniqueName(H.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(H){return $._getNodeRef(Q.cache,Y,H)})}}class c${constructor(){this.name=p0.KHR_MATERIALS_UNLIT}getMaterialType(){return p6}extendParams(J,Q,$){let Z=[];J.color=new D0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let X=W.baseColorFactor;J.color.setRGB(X[0],X[1],X[2],X8),J.opacity=X[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,T8))}return Promise.all(Z)}}class n${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class s${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(X.clearcoatFactor!==void 0)Q.clearcoat=X.clearcoatFactor;if(X.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",X.clearcoatTexture));if(X.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=X.clearcoatRoughnessFactor;if(X.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",X.clearcoatRoughnessTexture));if(X.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",X.clearcoatNormalTexture)),X.clearcoatNormalTexture.scale!==void 0){let Y=X.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new B0(Y,Y)}}return Promise.all(W)}}class o${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class i${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(X.iridescenceFactor!==void 0)Q.iridescence=X.iridescenceFactor;if(X.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",X.iridescenceTexture));if(X.iridescenceIor!==void 0)Q.iridescenceIOR=X.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(X.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=X.iridescenceThicknessMinimum;if(X.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=X.iridescenceThicknessMaximum;if(X.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",X.iridescenceThicknessTexture));return Promise.all(W)}}class a${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new D0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let X=Z.extensions[this.name];if(X.sheenColorFactor!==void 0){let Y=X.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],X8)}if(X.sheenRoughnessFactor!==void 0)Q.sheenRoughness=X.sheenRoughnessFactor;if(X.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",X.sheenColorTexture,T8));if(X.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",X.sheenRoughnessTexture));return Promise.all(W)}}class r${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(X.transmissionFactor!==void 0)Q.transmission=X.transmissionFactor;if(X.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",X.transmissionTexture));return Promise.all(W)}}class t${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(Q.thickness=X.thicknessFactor!==void 0?X.thicknessFactor:0,X.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",X.thicknessTexture));Q.attenuationDistance=X.attenuationDistance||1/0;let Y=X.attenuationColor||[1,1,1];return Q.attenuationColor=new D0().setRGB(Y[0],Y[1],Y[2],X8),Promise.all(W)}}class e${constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class JZ{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(Q.specularIntensity=X.specularFactor!==void 0?X.specularFactor:1,X.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",X.specularTexture));let Y=X.specularColorFactor||[1,1,1];if(Q.specularColor=new D0().setRGB(Y[0],Y[1],Y[2],X8),X.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",X.specularColorTexture,T8));return Promise.all(W)}}class QZ{constructor(J){this.parser=J,this.name=p0.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(Q.bumpScale=X.bumpFactor!==void 0?X.bumpFactor:1,X.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",X.bumpTexture));return Promise.all(W)}}class $Z{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return n6}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],X=Z.extensions[this.name];if(X.anisotropyStrength!==void 0)Q.anisotropy=X.anisotropyStrength;if(X.anisotropyRotation!==void 0)Q.anisotropyRotation=X.anisotropyRotation;if(X.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",X.anisotropyTexture));return Promise.all(W)}}class ZZ{constructor(J){this.parser=J,this.name=p0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],X=Q.options.ktx2Loader;if(!X)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,X)}}class WZ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let X=W.extensions[Q],Y=Z.images[X.source],H=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return $.loadTextureImage(J,X.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return $.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class XZ{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let X=W.extensions[Q],Y=Z.images[X.source],H=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)H=K}return this.detectSupport().then(function(K){if(K)return $.loadTextureImage(J,X.source,H);if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return $.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class YZ{constructor(J){this.name=p0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),X=this.parser.options.meshoptDecoder;if(!X||!X.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let H=Z.byteOffset||0,K=Z.byteLength||0,G=Z.count,q=Z.byteStride,U=new Uint8Array(Y,H,K);if(X.decodeGltfBufferAsync)return X.decodeGltfBufferAsync(G,q,U,Z.mode,Z.filter).then(function(F){return F.buffer});else return X.ready.then(function(){let F=new ArrayBuffer(G*q);return X.decodeGltfBuffer(new Uint8Array(F),G,q,U,Z.mode,Z.filter),F})})}else return null}}class HZ{constructor(J){this.name=p0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==s6.TRIANGLES&&K.mode!==s6.TRIANGLE_STRIP&&K.mode!==s6.TRIANGLE_FAN&&K.mode!==void 0)return null;let X=$.extensions[this.name].attributes,Y=[],H={};for(let K in X)Y.push(this.parser.getDependency("accessor",X[K]).then((G)=>{return H[K]=G,H[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let G=K.pop(),q=G.isGroup?G.children:[G],U=K[0].count,F=[];for(let N of q){let B=new j0,O=new A,V=new g6,E=new A(1,1,1),z=new Q5(N.geometry,N.material,U);for(let D=0;D<U;D++){if(H.TRANSLATION)O.fromBufferAttribute(H.TRANSLATION,D);if(H.ROTATION)V.fromBufferAttribute(H.ROTATION,D);if(H.SCALE)E.fromBufferAttribute(H.SCALE,D);z.setMatrixAt(D,B.compose(O,V,E))}for(let D in H)if(D==="_COLOR_0"){let _=H[D];z.instanceColor=new w9(_.array,_.itemSize,_.normalized)}else if(D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE")N.geometry.setAttribute(D,H[D]);$6.prototype.copy.call(z,N),this.parser.assignFinalMaterial(z),F.push(z)}if(G.isGroup)return G.clear(),G.add(...F),G;return F[0]})}}var KZ="glTF",$7=12,p$={JSON:1313821514,BIN:5130562};class GZ{constructor(J){this.name=p0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,$7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==KZ)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-$7,W=new DataView(J,$7),X=0;while(X<Z){let Y=W.getUint32(X,!0);X+=4;let H=W.getUint32(X,!0);if(X+=4,H===p$.JSON){let K=new Uint8Array(J,$7+X,Y);this.content=$.decode(K)}else if(H===p$.BIN){let K=$7+X;this.body=J.slice(K,K+Y)}X+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class qZ{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,X=J.extensions[this.name].attributes,Y={},H={},K={};for(let G in X){let q=C5[G]||G.toLowerCase();Y[q]=X[G]}for(let G in J.attributes){let q=C5[G]||G.toLowerCase();if(X[G]!==void 0){let U=$.accessors[J.attributes[G]],F=j9[U.componentType];K[q]=F.name,H[q]=U.normalized===!0}}return Q.getDependency("bufferView",W).then(function(G){return new Promise(function(q,U){Z.decodeDracoFile(G,function(F){for(let N in F.attributes){let B=F.attributes[N],O=H[N];if(O!==void 0)B.normalized=O}q(F)},Y,K,X8,U)})})}}class UZ{constructor(){this.name=p0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class FZ{constructor(){this.name=p0.KHR_MESH_QUANTIZATION}}class w5 extends i8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let X=0;X!==Z;X++)Q[X]=$[W+X];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,X=this.sampleValues,Y=this.valueSize,H=Y*2,K=Y*3,G=Z-Q,q=($-Q)/G,U=q*q,F=U*q,N=J*K,B=N-K,O=-2*F+3*U,V=F-U,E=1-O,z=V-U+q;for(let D=0;D!==Y;D++){let _=X[B+D+Y],f=X[B+D+H]*G,L=X[N+D+Y],j=X[N+D]*G;W[D]=E*_+z*f+O*L+V*j}return W}}var YH=new g6;class VZ extends w5{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return YH.fromArray(W).normalize().toArray(W),W}}var s6={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},j9={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},u$={9728:n8,9729:bJ,9984:aQ,9985:tQ,9986:rQ,9987:gJ},m$={33071:oQ,33648:iQ,10497:p7},z5={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},C5={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},f8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HH={CUBICSPLINE:void 0,LINEAR:uJ,STEP:J$},M5={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KH(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new H8({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:nQ});return J.DefaultMaterial}function e8(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function z8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function GH(J,Q,$){let Z=!1,W=!1,X=!1;for(let G=0,q=Q.length;G<q;G++){let U=Q[G];if(U.POSITION!==void 0)Z=!0;if(U.NORMAL!==void 0)W=!0;if(U.COLOR_0!==void 0)X=!0;if(Z&&W&&X)break}if(!Z&&!W&&!X)return Promise.resolve(J);let Y=[],H=[],K=[];for(let G=0,q=Q.length;G<q;G++){let U=Q[G];if(Z){let F=U.POSITION!==void 0?$.getDependency("accessor",U.POSITION):J.attributes.position;Y.push(F)}if(W){let F=U.NORMAL!==void 0?$.getDependency("accessor",U.NORMAL):J.attributes.normal;H.push(F)}if(X){let F=U.COLOR_0!==void 0?$.getDependency("accessor",U.COLOR_0):J.attributes.color;K.push(F)}}return Promise.all([Promise.all(Y),Promise.all(H),Promise.all(K)]).then(function(G){let q=G[0],U=G[1],F=G[2];if(Z)J.morphAttributes.position=q;if(W)J.morphAttributes.normal=U;if(X)J.morphAttributes.color=F;return J.morphTargetsRelative=!0,J})}function qH(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UH(J){let Q,$=J.extensions&&J.extensions[p0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+L5($.attributes);else Q=J.indices+":"+L5(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+L5(J.targets[Z]);return Q}function L5(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function k5(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FH(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";return"image/png"}var VH=new j0;class EZ{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new XH,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,X=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let H=Y.match(/Version\/(\d+)/);Z=$&&H?parseInt(H[1],10):-1,W=Y.indexOf("Firefox")>-1,X=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&X<98)this.textureLoader=new K5(this.options.manager);else this.textureLoader=new F5(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new i7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(X){return X._markDefs&&X._markDefs()}),Promise.all(this._invokeAll(function(X){return X.beforeRoot&&X.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(X){let Y={scene:X[0][Z.scene||0],scenes:X[0],animations:X[1],cameras:X[2],asset:Z.asset,parser:$,userData:{}};return e8(W,Y,Z),z8(Y,Z),Promise.all($._invokeAll(function(H){return H.afterRoot&&H.afterRoot(Y)})).then(function(){for(let H of Y.scenes)H.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let X=Q[Z].joints;for(let Y=0,H=X.length;Y<H;Y++)J[X[Y]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let X=J[Z];if(X.mesh!==void 0){if(this._addNodeRef(this.meshCache,X.mesh),X.skin!==void 0)$[X.mesh].isSkinnedMesh=!0}if(X.camera!==void 0)this._addNodeRef(this.cameraCache,X.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(X,Y)=>{let H=this.associations.get(X);if(H!=null)this.associations.set(Y,H);for(let[K,G]of X.children.entries())W(G,Y.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,X){return $.getDependency(J,X)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[p0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,X){$.load(t8.resolveURL(Q.uri,Z.path),W,void 0,function(){X(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let X=z5[Z.type],Y=j9[Z.componentType],H=Z.normalized===!0,K=new Y(Z.count*X);return Promise.resolve(new B6(K,X,H))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(X){let Y=X[0],H=z5[Z.type],K=j9[Z.componentType],G=K.BYTES_PER_ELEMENT,q=G*H,U=Z.byteOffset||0,F=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,N=Z.normalized===!0,B,O;if(F&&F!==q){let V=Math.floor(U/F),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+V+":"+Z.count,z=Q.cache.get(E);if(!z)B=new K(Y,V*F,Z.count*F/G),z=new t9(B,F/G),Q.cache.add(E,z);O=new u6(z,H,U%F/G,N)}else{if(Y===null)B=new K(Z.count*H);else B=new K(Y,U,Z.count*H);O=new B6(B,H,N)}if(Z.sparse!==void 0){let V=z5.SCALAR,E=j9[Z.sparse.indices.componentType],z=Z.sparse.indices.byteOffset||0,D=Z.sparse.values.byteOffset||0,_=new E(X[1],z,Z.sparse.count*V),f=new K(X[2],D,Z.sparse.count*H);if(Y!==null)O=new B6(O.array.slice(),O.itemSize,O.normalized);for(let L=0,j=_.length;L<j;L++){let d=_[L];if(O.setX(d,f[L*H]),H>=2)O.setY(d,f[L*H+1]);if(H>=3)O.setZ(d,f[L*H+2]);if(H>=4)O.setW(d,f[L*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return O})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,X=Q.images[W],Y=this.textureLoader;if(X.uri){let H=$.manager.getHandler(X.uri);if(H!==null)Y=H}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,$){let Z=this,W=this.json,X=W.textures[J],Y=W.images[Q],H=(Y.uri||Y.bufferView)+":"+X.sampler;if(this.textureCache[H])return this.textureCache[H];let K=this.loadImageSource(Q,$).then(function(G){if(G.flipY=!1,G.name=X.name||Y.name||"",G.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)G.name=Y.uri;let U=(W.samplers||{})[X.sampler]||{};return G.magFilter=u$[U.magFilter]||bJ,G.minFilter=u$[U.minFilter]||gJ,G.wrapS=m$[U.wrapS]||p7,G.wrapT=m$[U.wrapT]||p7,Z.associations.set(G,{textures:J}),G}).catch(function(){return null});return this.textureCache[H]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((q)=>q.clone());let X=Z.images[J],Y=self.URL||self.webkitURL,H=X.uri||"",K=!1;if(X.bufferView!==void 0)H=$.getDependency("bufferView",X.bufferView).then(function(q){K=!0;let U=new Blob([q],{type:X.mimeType});return H=Y.createObjectURL(U),H});else if(X.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let G=Promise.resolve(H).then(function(q){return new Promise(function(U,F){let N=U;if(Q.isImageBitmapLoader===!0)N=function(B){let O=new F6(B);O.needsUpdate=!0,U(O)};Q.load(t8.resolveURL(q,W.path),N,void 0,F)})}).then(function(q){if(K===!0)Y.revokeObjectURL(H);return z8(q,X),q.userData.mimeType=X.mimeType||FH(X.uri),q}).catch(function(q){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),q});return this.sourceCache[J]=G,G}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(X){if(!X)return null;if($.texCoord!==void 0&&$.texCoord>0)X=X.clone(),X.channel=$.texCoord;if(W.extensions[p0.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[p0.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let H=W.associations.get(X);X=W.extensions[p0.KHR_TEXTURE_TRANSFORM].extendTexture(X,Y),W.associations.set(X,H)}}if(Z!==void 0)X.colorSpace=Z;return J[Q]=X,X})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,X=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,H=this.cache.get(Y);if(!H)H=new o7,c6.prototype.copy.call(H,$),H.color.copy($.color),H.map=$.map,H.sizeAttenuation=!1,this.cache.add(Y,H);$=H}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,H=this.cache.get(Y);if(!H)H=new s7,c6.prototype.copy.call(H,$),H.color.copy($.color),H.map=$.map,this.cache.add(Y,H);$=H}if(Z||W||X){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(X)Y+="flat-shading:";let H=this.cache.get(Y);if(!H){if(H=$.clone(),W)H.vertexColors=!0;if(X)H.flatShading=!0;if(Z){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(Y,H),this.associations.set(H,this.associations.get($))}$=H}J.material=$}getMaterialType(){return H8}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],X,Y={},H=W.extensions||{},K=[];if(H[p0.KHR_MATERIALS_UNLIT]){let q=Z[p0.KHR_MATERIALS_UNLIT];X=q.getMaterialType(),K.push(q.extendParams(Y,W,Q))}else{let q=W.pbrMetallicRoughness||{};if(Y.color=new D0(1,1,1),Y.opacity=1,Array.isArray(q.baseColorFactor)){let U=q.baseColorFactor;Y.color.setRGB(U[0],U[1],U[2],X8),Y.opacity=U[3]}if(q.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",q.baseColorTexture,T8));if(Y.metalness=q.metallicFactor!==void 0?q.metallicFactor:1,Y.roughness=q.roughnessFactor!==void 0?q.roughnessFactor:1,q.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",q.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",q.metallicRoughnessTexture));X=this._invokeOne(function(U){return U.getMaterialType&&U.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(U){return U.extendMaterialParams&&U.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=_9;let G=W.alphaMode||M5.OPAQUE;if(G===M5.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,G===M5.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&X!==p6){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new B0(1,1),W.normalTexture.scale!==void 0){let q=W.normalTexture.scale;Y.normalScale.set(q,q)}}if(W.occlusionTexture!==void 0&&X!==p6){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&X!==p6){let q=W.emissiveFactor;Y.emissive=new D0().setRGB(q[0],q[1],q[2],X8)}if(W.emissiveTexture!==void 0&&X!==p6)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,T8));return Promise.all(K).then(function(){let q=new X(Y);if(W.name)q.name=W.name;if(z8(q,W),Q.associations.set(q,{materials:J}),W.extensions)e8(Z,q,W);return q})}createUniqueName(J){let Q=r0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(Y){return $[p0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(H){return l$(H,Y,Q)})}let X=[];for(let Y=0,H=J.length;Y<H;Y++){let K=J[Y],G=UH(K),q=Z[G];if(q)X.push(q.promise);else{let U;if(K.extensions&&K.extensions[p0.KHR_DRACO_MESH_COMPRESSION])U=W(K);else U=l$(new f6,K,Q);Z[G]={primitive:K,promise:U},X.push(U)}}return Promise.all(X)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],X=W.primitives,Y=[];for(let H=0,K=X.length;H<K;H++){let G=X[H].material===void 0?KH(this.cache):this.getDependency("material",X[H].material);Y.push(G)}return Y.push(Q.loadGeometries(X)),Promise.all(Y).then(function(H){let K=H.slice(0,H.length-1),G=H[H.length-1],q=[];for(let F=0,N=G.length;F<N;F++){let B=G[F],O=X[F],V,E=K[F];if(O.mode===s6.TRIANGLES||O.mode===s6.TRIANGLE_STRIP||O.mode===s6.TRIANGLE_FAN||O.mode===void 0){if(V=W.isSkinnedMesh===!0?new eJ(B,E):new n0(B,E),V.isSkinnedMesh===!0)V.normalizeSkinWeights();if(O.mode===s6.TRIANGLE_STRIP)V.geometry=R5(V.geometry,u7);else if(O.mode===s6.TRIANGLE_FAN)V.geometry=R5(V.geometry,a9)}else if(O.mode===s6.LINES)V=new $5(B,E);else if(O.mode===s6.LINE_STRIP)V=new e9(B,E);else if(O.mode===s6.LINE_LOOP)V=new Z5(B,E);else if(O.mode===s6.POINTS)V=new W5(B,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+O.mode);if(Object.keys(V.geometry.morphAttributes).length>0)qH(V,W);if(V.name=Q.createUniqueName(W.name||"mesh_"+J),z8(V,W),O.extensions)e8(Z,V,O);Q.assignFinalMaterial(V),q.push(V)}for(let F=0,N=q.length;F<N;F++)Q.associations.set(q[F],{meshes:J,primitives:F});if(q.length===1){if(W.extensions)e8(Z,q[0],W);return q[0]}let U=new e6;if(W.extensions)e8(Z,U,W);Q.associations.set(U,{meshes:J});for(let F=0,N=q.length;F<N;F++)U.add(q[F]);return U})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new I6(Y8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new S8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return z8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),X=Z,Y=[],H=[];for(let K=0,G=X.length;K<G;K++){let q=X[K];if(q){Y.push(q);let U=new j0;if(W!==null)U.fromArray(W.array,K*16);H.push(U)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new n7(Y,H)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,X=[],Y=[],H=[],K=[],G=[];for(let q=0,U=Z.channels.length;q<U;q++){let F=Z.channels[q],N=Z.samplers[F.sampler],B=F.target,O=B.node,V=Z.parameters!==void 0?Z.parameters[N.input]:N.input,E=Z.parameters!==void 0?Z.parameters[N.output]:N.output;if(B.node===void 0)continue;X.push(this.getDependency("node",O)),Y.push(this.getDependency("accessor",V)),H.push(this.getDependency("accessor",E)),K.push(N),G.push(B)}return Promise.all([Promise.all(X),Promise.all(Y),Promise.all(H),Promise.all(K),Promise.all(G)]).then(function(q){let U=q[0],F=q[1],N=q[2],B=q[3],O=q[4],V=[];for(let E=0,z=U.length;E<z;E++){let D=U[E],_=F[E],f=N[E],L=B[E],j=O[E];if(D===void 0)continue;if(D.updateMatrix)D.updateMatrix();let d=$._createAnimationTracks(D,_,f,L,j);if(d)for(let C=0;C<d.length;C++)V.push(d[C])}return new H5(W,void 0,V)})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let X=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)X.traverse(function(Y){if(!Y.isMesh)return;for(let H=0,K=Z.weights.length;H<K;H++)Y.morphTargetInfluences[H]=Z.weights[H]});return X})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),X=[],Y=Z.children||[];for(let K=0,G=Y.length;K<G;K++)X.push($.getDependency("node",Y[K]));let H=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(X),H]).then(function(K){let G=K[0],q=K[1],U=K[2];if(U!==null)G.traverse(function(F){if(!F.isSkinnedMesh)return;F.bind(U,VH)});for(let F=0,N=q.length;F<N;F++)G.add(q[F]);return G})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],X=W.name?Z.createUniqueName(W.name):"",Y=[],H=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(H)Y.push(H);if(W.camera!==void 0)Y.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let G;if(W.isBone===!0)G=new c7;else if(K.length>1)G=new e6;else if(K.length===1)G=K[0];else G=new $6;if(G!==K[0])for(let q=0,U=K.length;q<U;q++)G.add(K[q]);if(W.name)G.userData.name=W.name,G.name=X;if(z8(G,W),W.extensions)e8($,G,W);if(W.matrix!==void 0){let q=new j0;q.fromArray(W.matrix),G.applyMatrix4(q)}else{if(W.translation!==void 0)G.position.fromArray(W.translation);if(W.rotation!==void 0)G.quaternion.fromArray(W.rotation);if(W.scale!==void 0)G.scale.fromArray(W.scale)}if(!Z.associations.has(G))Z.associations.set(G,{});return Z.associations.get(G).nodes=J,G}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new e6;if($.name)W.name=Z.createUniqueName($.name);if(z8(W,$),$.extensions)e8(Q,W,$);let X=$.nodes||[],Y=[];for(let H=0,K=X.length;H<K;H++)Y.push(Z.getDependency("node",X[H]));return Promise.all(Y).then(function(H){for(let G=0,q=H.length;G<q;G++)W.add(H[G]);let K=(G)=>{let q=new Map;for(let[U,F]of Z.associations)if(U instanceof c6||U instanceof F6)q.set(U,F);return G.traverse((U)=>{let F=Z.associations.get(U);if(F!=null)q.set(U,F)}),q};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let X=[],Y=J.name?J.name:J.uuid,H=[];if(f8[W.path]===f8.weights)J.traverse(function(U){if(U.morphTargetInfluences)H.push(U.name?U.name:U.uuid)});else H.push(Y);let K;switch(f8[W.path]){case f8.weights:K=P8;break;case f8.rotation:K=j8;break;case f8.position:case f8.scale:K=A8;break;default:switch($.itemSize){case 1:K=P8;break;case 2:case 3:default:K=A8;break}break}let G=Z.interpolation!==void 0?HH[Z.interpolation]:uJ,q=this._getArrayFromAccessor($);for(let U=0,F=H.length;U<F;U++){let N=new K(H[U]+"."+f8[W.path],Q.array,q,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(N);X.push(N)}return X}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=k5(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,X=Q.length;W<X;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof j8?VZ:w5)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EH(J,Q,$){let Z=Q.attributes,W=new R6;if(Z.POSITION!==void 0){let H=$.json.accessors[Z.POSITION],K=H.min,G=H.max;if(K!==void 0&&G!==void 0){if(W.set(new A(K[0],K[1],K[2]),new A(G[0],G[1],G[2])),H.normalized){let q=k5(j9[H.componentType]);W.min.multiplyScalar(q),W.max.multiplyScalar(q)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let X=Q.targets;if(X!==void 0){let H=new A,K=new A;for(let G=0,q=X.length;G<q;G++){let U=X[G];if(U.POSITION!==void 0){let F=$.json.accessors[U.POSITION],N=F.min,B=F.max;if(N!==void 0&&B!==void 0){if(K.setX(Math.max(Math.abs(N[0]),Math.abs(B[0]))),K.setY(Math.max(Math.abs(N[1]),Math.abs(B[1]))),K.setZ(Math.max(Math.abs(N[2]),Math.abs(B[2]))),F.normalized){let O=k5(j9[F.componentType]);K.multiplyScalar(O)}H.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}J.boundingBox=W;let Y=new P6;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function l$(J,Q,$){let Z=Q.attributes,W=[];function X(Y,H){return $.getDependency("accessor",Y).then(function(K){J.setAttribute(H,K)})}for(let Y in Z){let H=C5[Y]||Y.toLowerCase();if(H in J.attributes)continue;W.push(X(Z[Y],H))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(H){J.setIndex(H)});W.push(Y)}if(s0.workingColorSpace!==X8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${s0.workingColorSpace}" not supported.`);return z8(J,Q),EH(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?GH(J,Q.targets,$):J})}class _5 extends A9{constructor(J=null){super();let Q=new o8;Q.deleteAttribute("uv");let $=new H8({side:sQ}),Z=new H8,W=new Q7(16777215,900,28,2);W.position.set(0.418,16.199,0.3),this.add(W);let X=new n0(Q,$);X.position.set(-0.757,13.219,0.717),X.scale.set(31.713,28.305,28.591),this.add(X);let Y=new n0(Q,Z);Y.position.set(-10.906,2.009,1.846),Y.rotation.set(0,-0.195,0),Y.scale.set(2.328,7.905,4.651),this.add(Y);let H=new n0(Q,Z);H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),this.add(H);let K=new n0(Q,Z);K.position.set(6.167,0.857,7.803),K.rotation.set(0,0.561,0),K.scale.set(3.927,6.285,3.687),this.add(K);let G=new n0(Q,Z);G.position.set(-2.017,0.018,6.124),G.rotation.set(0,0.333,0),G.scale.set(2.002,4.566,2.064),this.add(G);let q=new n0(Q,Z);q.position.set(2.291,-0.756,-2.621),q.rotation.set(0,-0.286,0),q.scale.set(1.546,1.552,1.496),this.add(q);let U=new n0(Q,Z);U.position.set(-2.193,-0.369,-5.547),U.rotation.set(0,0.516,0),U.scale.set(3.875,3.487,2.986),this.add(U);let F=new n0(Q,y9(50));F.position.set(-16.116,14.37,8.208),F.scale.set(0.1,2.428,2.739),this.add(F);let N=new n0(Q,y9(50));N.position.set(-16.109,18.021,-8.207),N.scale.set(0.1,2.425,2.751),this.add(N);let B=new n0(Q,y9(17));B.position.set(14.904,12.198,-1.832),B.scale.set(0.15,4.265,6.331),this.add(B);let O=new n0(Q,y9(43));O.position.set(-0.462,8.89,14.52),O.scale.set(4.38,5.441,0.088),this.add(O);let V=new n0(Q,y9(20));V.position.set(3.235,11.486,-12.541),V.scale.set(2.5,2,0.1),this.add(V);let E=new n0(Q,y9(100));E.position.set(0,20,0),E.scale.set(1,0.1,1),this.add(E)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function y9(J){let Q=new p6;return Q.color.setScalar(J),Q}var NZ=new R6,e7=new A;class Z7 extends U5{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let J=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],Q=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],$=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex($),this.setAttribute("position",new j6(J,3)),this.setAttribute("uv",new j6(Q,2))}applyMatrix4(J){let Q=this.attributes.instanceStart,$=this.attributes.instanceEnd;if(Q!==void 0)Q.applyMatrix4(J),$.applyMatrix4(J),Q.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}setPositions(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let $=new S9(Q,6,1);return this.setAttribute("instanceStart",new u6($,3,0)),this.setAttribute("instanceEnd",new u6($,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(J){let Q;if(J instanceof Float32Array)Q=J;else if(Array.isArray(J))Q=new Float32Array(J);let $=new S9(Q,6,1);return this.setAttribute("instanceColorStart",new u6($,3,0)),this.setAttribute("instanceColorEnd",new u6($,3,3)),this}fromWireframeGeometry(J){return this.setPositions(J.attributes.position.array),this}fromEdgesGeometry(J){return this.setPositions(J.attributes.position.array),this}fromMesh(J){return this.fromWireframeGeometry(new X5(J.geometry)),this}fromLineSegments(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new R6;let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0)this.boundingBox.setFromBufferAttribute(J),NZ.setFromBufferAttribute(Q),this.boundingBox.union(NZ)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new P6;if(this.boundingBox===null)this.computeBoundingBox();let J=this.attributes.instanceStart,Q=this.attributes.instanceEnd;if(J!==void 0&&Q!==void 0){let $=this.boundingSphere.center;this.boundingBox.getCenter($);let Z=0;for(let W=0,X=J.count;W<X;W++)e7.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(e7)),e7.fromBufferAttribute(Q,W),Z=Math.max(Z,$.distanceToSquared(e7));if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(J){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(J)}}X0.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new B0(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};S6.line={uniforms:m7.merge([X0.common,X0.fog,X0.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class J9 extends y6{constructor(J){super({type:"LineMaterial",uniforms:m7.clone(S6.line.uniforms),vertexShader:S6.line.vertexShader,fragmentShader:S6.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,this.setValues(J)}get color(){return this.uniforms.diffuse.value}set color(J){this.uniforms.diffuse.value=J}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(J){if(J===!0)this.defines.WORLD_UNITS="";else delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(J){if(!this.uniforms.linewidth)return;this.uniforms.linewidth.value=J}get dashed(){return"USE_DASH"in this.defines}set dashed(J){if(J===!0!==this.dashed)this.needsUpdate=!0;if(J===!0)this.defines.USE_DASH="";else delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(J){this.uniforms.dashScale.value=J}get dashSize(){return this.uniforms.dashSize.value}set dashSize(J){this.uniforms.dashSize.value=J}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(J){this.uniforms.dashOffset.value=J}get gapSize(){return this.uniforms.gapSize.value}set gapSize(J){this.uniforms.gapSize.value=J}get opacity(){return this.uniforms.opacity.value}set opacity(J){if(!this.uniforms)return;this.uniforms.opacity.value=J}get resolution(){return this.uniforms.resolution.value}set resolution(J){this.uniforms.resolution.value.copy(J)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(J){if(!this.defines)return;if(J===!0!==this.alphaToCoverage)this.needsUpdate=!0;if(J===!0)this.defines.USE_ALPHA_TO_COVERAGE="";else delete this.defines.USE_ALPHA_TO_COVERAGE}}var I5=new c0,OZ=new A,BZ=new A,L6=new c0,C6=new c0,K8=new c0,P5=new A,A5=new j0,k6=new N5,RZ=new A,JJ=new R6,QJ=new P6,G8=new c0,q8,Q9;function zZ(J,Q,$){return G8.set(0,0,-Q,1).applyMatrix4(J.projectionMatrix),G8.multiplyScalar(1/G8.w),G8.x=Q9/$.width,G8.y=Q9/$.height,G8.applyMatrix4(J.projectionMatrixInverse),G8.multiplyScalar(1/G8.w),Math.abs(Math.max(G8.x,G8.y))}function NH(J,Q){let{matrixWorld:$,geometry:Z}=J,W=Z.attributes.instanceStart,X=Z.attributes.instanceEnd,Y=Math.min(Z.instanceCount,W.count);for(let H=0,K=Y;H<K;H++){k6.start.fromBufferAttribute(W,H),k6.end.fromBufferAttribute(X,H),k6.applyMatrix4($);let G=new A,q=new A;if(q8.distanceSqToSegment(k6.start,k6.end,q,G),q.distanceTo(G)<Q9*0.5)Q.push({point:q,pointOnLine:G,distance:q8.origin.distanceTo(q),object:J,face:null,faceIndex:H,uv:null,uv1:null})}}function OH(J,Q,$){let Z=Q.projectionMatrix,X=J.material.resolution,Y=J.matrixWorld,H=J.geometry,K=H.attributes.instanceStart,G=H.attributes.instanceEnd,q=Math.min(H.instanceCount,K.count),U=-Q.near;q8.at(1,K8),K8.w=1,K8.applyMatrix4(Q.matrixWorldInverse),K8.applyMatrix4(Z),K8.multiplyScalar(1/K8.w),K8.x*=X.x/2,K8.y*=X.y/2,K8.z=0,P5.copy(K8),A5.multiplyMatrices(Q.matrixWorldInverse,Y);for(let F=0,N=q;F<N;F++){if(L6.fromBufferAttribute(K,F),C6.fromBufferAttribute(G,F),L6.w=1,C6.w=1,L6.applyMatrix4(A5),C6.applyMatrix4(A5),L6.z>U&&C6.z>U)continue;if(L6.z>U){let D=L6.z-C6.z,_=(L6.z-U)/D;L6.lerp(C6,_)}else if(C6.z>U){let D=C6.z-L6.z,_=(C6.z-U)/D;C6.lerp(L6,_)}L6.applyMatrix4(Z),C6.applyMatrix4(Z),L6.multiplyScalar(1/L6.w),C6.multiplyScalar(1/C6.w),L6.x*=X.x/2,L6.y*=X.y/2,C6.x*=X.x/2,C6.y*=X.y/2,k6.start.copy(L6),k6.start.z=0,k6.end.copy(C6),k6.end.z=0;let O=k6.closestPointToPointParameter(P5,!0);k6.at(O,RZ);let V=Y8.lerp(L6.z,C6.z,O),E=V>=-1&&V<=1,z=P5.distanceTo(RZ)<Q9*0.5;if(E&&z){k6.start.fromBufferAttribute(K,F),k6.end.fromBufferAttribute(G,F),k6.start.applyMatrix4(Y),k6.end.applyMatrix4(Y);let D=new A,_=new A;q8.distanceSqToSegment(k6.start,k6.end,_,D),$.push({point:_,pointOnLine:D,distance:q8.origin.distanceTo(_),object:J,face:null,faceIndex:F,uv:null,uv1:null})}}}class T5 extends n0{constructor(J=new Z7,Q=new J9({color:Math.random()*16777215})){super(J,Q);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let J=this.geometry,Q=J.attributes.instanceStart,$=J.attributes.instanceEnd,Z=new Float32Array(2*Q.count);for(let X=0,Y=0,H=Q.count;X<H;X++,Y+=2)OZ.fromBufferAttribute(Q,X),BZ.fromBufferAttribute($,X),Z[Y]=Y===0?0:Z[Y-1],Z[Y+1]=Z[Y]+OZ.distanceTo(BZ);let W=new S9(Z,2,1);return J.setAttribute("instanceDistanceStart",new u6(W,1,0)),J.setAttribute("instanceDistanceEnd",new u6(W,1,1)),this}raycast(J,Q){let $=this.material.worldUnits,Z=J.camera;if(Z===null&&!$)console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let W=J.params.Line2!==void 0?J.params.Line2.threshold||0:0;q8=J.ray;let X=this.matrixWorld,Y=this.geometry,H=this.material;if(Q9=H.linewidth+W,Y.boundingSphere===null)Y.computeBoundingSphere();QJ.copy(Y.boundingSphere).applyMatrix4(X);let K;if($)K=Q9*0.5;else{let q=Math.max(Z.near,QJ.distanceToPoint(q8.origin));K=zZ(Z,q,H.resolution)}if(QJ.radius+=K,q8.intersectsSphere(QJ)===!1)return;if(Y.boundingBox===null)Y.computeBoundingBox();JJ.copy(Y.boundingBox).applyMatrix4(X);let G;if($)G=Q9*0.5;else{let q=Math.max(Z.near,JJ.distanceToPoint(q8.origin));G=zZ(Z,q,H.resolution)}if(JJ.expandByScalar(G),q8.intersectsBox(JJ)===!1)return;if($)NH(this,Q);else OH(this,Z,Q)}onBeforeRender(J){let Q=this.material.uniforms;if(Q&&Q.resolution)J.getViewport(I5),this.material.uniforms.resolution.value.set(I5.z,I5.w)}}class W7 extends Z7{constructor(){super();this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(J){let Q=J.length-3,$=new Float32Array(2*Q);for(let Z=0;Z<Q;Z+=3)$[2*Z]=J[Z],$[2*Z+1]=J[Z+1],$[2*Z+2]=J[Z+2],$[2*Z+3]=J[Z+3],$[2*Z+4]=J[Z+4],$[2*Z+5]=J[Z+5];return super.setPositions($),this}setColors(J){let Q=J.length-3,$=new Float32Array(2*Q);for(let Z=0;Z<Q;Z+=3)$[2*Z]=J[Z],$[2*Z+1]=J[Z+1],$[2*Z+2]=J[Z+2],$[2*Z+3]=J[Z+3],$[2*Z+4]=J[Z+4],$[2*Z+5]=J[Z+5];return super.setColors($),this}fromLine(J){let Q=J.geometry;return this.setPositions(Q.attributes.position.array),this}}class S5 extends T5{constructor(J=new W7,Q=new J9({color:Math.random()*16777215})){super(J,Q);this.isLine2=!0,this.type="Line2"}}var $J=(J)=>new A(J[0],J[2],-J[1]),f9=1,MZ=2000,BH=`
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,RH=`
uniform float uId;
uniform float uHi;
uniform float uPick;
varying vec3 vN;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  if (uPick > 0.5) gl_FragColor = vec4(mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, 0.0, 1.0);
  else gl_FragColor = vec4(n.xy, uHi, uId);
}`,zH=`
uniform sampler2D tColor;
uniform sampler2D tInfo;
uniform sampler2D tDepth;
uniform vec2 uTexel;
uniform float uDepthThr;
uniform float uNormalCos;
uniform vec3 uLine;
uniform vec3 uLineHi;
uniform float uLineMix;
varying vec2 vUv;
vec4 info(vec2 o) { return texture2D(tInfo, vUv + o * uTexel); }
float depth(vec2 o) { return texture2D(tDepth, vUv + o * uTexel).r; }
vec3 nrm(vec4 i) { return vec3(i.xy, sqrt(max(0.0, 1.0 - dot(i.xy, i.xy)))); }
void main() {
  vec4 c = texture2D(tColor, vUv);
  vec4 i0 = info(vec2(0.0));
  vec4 iR = info(vec2(1.0, 0.0)), iL = info(vec2(-1.0, 0.0));
  vec4 iU = info(vec2(0.0, 1.0)), iD = info(vec2(0.0, -1.0));
  bool edge = abs(iR.a - i0.a) > 0.5 || abs(iL.a - i0.a) > 0.5
           || abs(iU.a - i0.a) > 0.5 || abs(iD.a - i0.a) > 0.5;
  float hi = i0.z;
  if (i0.a > 0.5) {
    vec3 n0 = nrm(i0);
    float m = min(min(dot(n0, nrm(iR)), dot(n0, nrm(iL))), min(dot(n0, nrm(iU)), dot(n0, nrm(iD))));
    float d0 = depth(vec2(0.0));
    float lap = abs(depth(vec2(1.0, 0.0)) + depth(vec2(-1.0, 0.0)) - 2.0 * d0)
              + abs(depth(vec2(0.0, 1.0)) + depth(vec2(0.0, -1.0)) - 2.0 * d0);
    edge = edge || m < uNormalCos || lap > uDepthThr;
  } else {
    hi = max(max(iR.z, iL.z), max(iU.z, iD.z));
  }
  vec4 outc = c;
  if (edge) {
    vec3 line = hi > 0.5 ? uLineHi : uLine;
    outc = c.a > 0.0 ? vec4(mix(c.rgb, line, uLineMix), 1.0) : vec4(line, uLineMix);
  }
  gl_FragColor = outc;
  #include <colorspace_fragment>
}`,MH={primary:"#3a3d42",accent:"#d42a30",hardware:"#a9aeb5",purchased:"#55595f",fill:"#ffffff",highlight:"#c9d8f4",line:"#232323",highlightLine:"#3d5c9e",guide:"#7d9cd6"},LZ=(J)=>new D0(J);class X7{constructor(J,Q,{pixelRatio:$=1,preserve:Z=!1}={}){this.canvas=J,this.timeline=Q,this.colors={...MH,...Q.style||{}},this.renderer=new tJ({canvas:J,antialias:!1,alpha:!0,preserveDrawingBuffer:Z}),this.renderer.setPixelRatio($),this.renderer.outputColorSpace=T8,this.renderer.setClearColor(0,0),this.scene=new A9;let W=new i9(this.renderer),X=new _5;this.scene.environment=W.fromScene(X,0.04).texture,X.dispose(),W.dispose(),this.scene.add(new G5(16777215,9081500,0.7)),this.key=new T9(16777215,1.7),this.fill=new T9(14674175,0.5),this.scene.add(this.key,this.key.target,this.fill,this.fill.target),this.camera=new S8(-1,1,1,-1,0.01,1000),this.camera.layers.enable(f9),this.guides=new e6,this.scene.add(this.guides),this.style="shaded",this.instances=new Map,this.pickUniform={value:0},this.quadCamera=new S8(-1,1,1,-1,0,1),this.composite=new y6({uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},uTexel:{value:new B0},uDepthThr:{value:0.001},uNormalCos:{value:Math.cos(Y8.degToRad(28))},uLine:{value:LZ(this.colors.line)},uLineHi:{value:LZ(this.colors.highlightLine)},uLineMix:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:zH,depthTest:!1,depthWrite:!1}),this.quad=new n0(new I9(2,2),this.composite),this.quad.frustumCulled=!1,this.quadScene=new A9,this.quadScene.add(this.quad),this.targets=null}async load(J){let Q=await fetch(J);if(!Q.ok)throw Error(`${Q.status} ${Q.statusText} for ${J}`);let $=await new D5().parseAsync(await Q.arrayBuffer(),"./");this.model=$.scene,this.scene.add(this.model),this.model.updateMatrixWorld(!0);let Z=new Map;for(let[X,Y]of $.parser.associations)if(Y&&Y.nodes!==void 0&&!Z.has(Y.nodes))Z.set(Y.nodes,X);let W=this.timeline.instances;if(W.length>MZ)throw Error(`more than ${MZ} instances`);W.forEach((X,Y)=>{let H=Z.get(X.node);if(!H)throw Error(`glTF node ${X.node} (${X.name}) not found`);let K=[];H.traverse((O)=>{if(O.isMesh)K.push(O)});let G=X.kind,q=new p6({color:this.colors.fill,side:_9}),U=new H8({color:X.color,side:_9,metalness:G==="hardware"?0.75:0.05,roughness:G==="hardware"?0.32:0.6,envMapIntensity:G==="hardware"?0.9:0.35}),F=new y6({uniforms:{uId:{value:Y+1},uHi:{value:0},uPick:this.pickUniform},vertexShader:BH,fragmentShader:RH,side:_9}),N=new f0().setFromMatrix4(H.parent.matrixWorld).invert(),B=new R6().setFromObject(H);this.instances.set(X.name,{...X,id:Y+1,object:H,meshes:K,flat:q,shaded:U,info:F,parentInv:N,restBox:B,rest:H.position.clone(),offset:null})}),this.setPoses(new Map)}setStyle(J){this.style=J}setPoses(J){for(let[Q,$]of this.instances){let Z=J.get(Q);if($.offset=Z||null,$.object.visible=!!Z,!Z)continue;let W=$J(Z).applyMatrix3($.parentInv);$.object.position.copy($.rest).add(W)}}setHighlight(J){let Q=new Set(J||[]);for(let[$,Z]of this.instances){let W=Q.has($);Z.flat.color.set(W?this.colors.highlight:this.colors.fill),Z.info.uniforms.uHi.value=W?1:0}}setGuides(J,Q=1.6){for(let $ of[...this.guides.children])$.geometry.dispose(),$.material.dispose(),this.guides.remove($);for(let $ of J||[])for(let Z of $.parts){let W=this.instances.get(Z);if(!W)continue;let X=W.restBox.getCenter(new A),Y=[];for(let q of $.path)Y.push(...X.clone().add($J(q)).toArray());let H=new W7;H.setPositions(Y);let K=new J9({color:this.colors.guide,linewidth:Q,worldUnits:!1}),G=new S5(H,K);G.layers.set(f9),G.computeLineDistances(),this.guides.add(G)}}boxAt(J,Q){return this.instances.get(J).restBox.clone().translate($J(Q||[0,0,0]))}boxesFor(J,Q){return(Q?Q.filter((Z)=>J.has(Z)):[...J.keys()]).map((Z)=>this.boxAt(Z,J.get(Z)))}fit(J,{az:Q=35,el:$=28,fill:Z=0.86,aspect:W}={}){if(!J.length)return null;let X=Y8.degToRad(Q),Y=Y8.degToRad(Math.max(-89,Math.min(89,$))),H=$J([Math.sin(X)*Math.cos(Y),-Math.cos(X)*Math.cos(Y),Math.sin(Y)]).normalize(),K=new A(0,1,0).cross(H).normalize(),G=H.clone().cross(K),q=[1/0,1/0,1/0],U=[-1/0,-1/0,-1/0],F=new A;for(let D of J)for(let _=0;_<8;_++){F.set(_&1?D.max.x:D.min.x,_&2?D.max.y:D.min.y,_&4?D.max.z:D.min.z);let f=[F.dot(K),F.dot(G),F.dot(H)];for(let L=0;L<3;L++)q[L]=Math.min(q[L],f[L]),U[L]=Math.max(U[L],f[L])}let N=W||this.canvas.clientWidth/Math.max(1,this.canvas.clientHeight),B=Math.max(0.001,(U[0]-q[0])/2)/Z,O=Math.max(0.001,(U[1]-q[1])/2)/Z;if(B/O<N)B=O*N;else O=B/N;let V=K.clone().multiplyScalar((q[0]+U[0])/2).addScaledVector(G,(q[1]+U[1])/2).addScaledVector(H,(q[2]+U[2])/2),E=Math.max(U[0]-q[0],U[1]-q[1],U[2]-q[2]),z=this.camera;return z.left=-B,z.right=B,z.top=O,z.bottom=-O,z.zoom=1,z.position.copy(V).addScaledVector(H,E*3+10),z.near=0.01,z.far=E*8+40,z.up.set(0,1,0),z.lookAt(V),z.updateProjectionMatrix(),V}_ensureTargets(J,Q){if(this.targets&&this.targets.w===J&&this.targets.h===Q)return this.targets;if(this.targets)for(let Z of["color","info","pick"])this.targets[Z].dispose();let $=new r9(J,Q);return $.type=eQ,this.targets={w:J,h:Q,color:new d6(J,Q,{type:pJ,samples:4}),info:new d6(J,Q,{type:pJ,depthTexture:$,minFilter:n8,magFilter:n8}),pick:new d6(J,Q,{minFilter:n8,magFilter:n8})},this.targets}_useMaterial(J){for(let Q of this.instances.values())for(let $ of Q.meshes)$.material=Q[J]}_aimLights(){let J=this.camera,Q=new A;J.getWorldDirection(Q);let $=new A().crossVectors(Q,J.up).normalize(),Z=new A().crossVectors($,Q).normalize(),W=J.position.clone().addScaledVector(Q,(J.far+J.near)/4);this.key.target.position.copy(W),this.key.position.copy(W).addScaledVector(Q,-100).addScaledVector(Z,70).addScaledVector($,-45),this.fill.target.position.copy(W),this.fill.position.copy(W).addScaledVector(Q,-100).addScaledVector(Z,-20).addScaledVector($,80)}render(){let J=this.renderer,Q=J.getDrawingBufferSize(new B0),$=this._ensureTargets(Q.x,Q.y),Z=this.camera;for(let H of this.guides.children)H.material.resolution.set(Q.x,Q.y);this._aimLights();let W=this.style==="line";this._useMaterial(W?"flat":"shaded"),J.setRenderTarget($.color),J.setClearColor(0,0),J.clear(),J.render(this.scene,Z),Z.layers.disable(f9),this._useMaterial("info"),this.pickUniform.value=0,J.setRenderTarget($.info),J.clear(),J.render(this.scene,Z),Z.layers.enable(f9);let X=this.composite.uniforms,Y=(Z.top-Z.bottom)/Z.zoom/Q.y;X.tColor.value=$.color.texture,X.tInfo.value=$.info.texture,X.tDepth.value=$.info.depthTexture,X.uTexel.value.set(1/Q.x,1/Q.y),X.uDepthThr.value=3*Y/(Z.far-Z.near),X.uLineMix.value=W?1:0.6,J.setRenderTarget(null),J.clear(),J.render(this.quadScene,this.quadCamera)}pick(){let J=this.renderer,Q=J.getDrawingBufferSize(new B0),$=this._ensureTargets(Q.x,Q.y);this.camera.layers.disable(f9),this._useMaterial("info"),this.pickUniform.value=1,J.setRenderTarget($.pick),J.setClearColor(0,0),J.clear(),J.render(this.scene,this.camera),this.pickUniform.value=0,this.camera.layers.enable(f9);let Z=new Uint8Array(Q.x*Q.y*4);J.readRenderTargetPixels($.pick,0,0,Q.x,Q.y,Z),J.setRenderTarget(null);let W=new Uint16Array(Q.x*Q.y);for(let X=0;X<Q.y;X++){let Y=(Q.y-1-X)*Q.x;for(let H=0;H<Q.x;H++){let K=(Y+H)*4;W[X*Q.x+H]=Z[K+3]?Z[K]+Z[K+1]*256:0}}return{width:Q.x,height:Q.y,ids:W}}setSize(J,Q){this.renderer.setSize(J,Q,!1)}}var j5=Object.freeze([0,0,0]),LH=(J)=>Math.min(1,Math.max(0,J)),CH=(J)=>J*J*(3-2*J);function kH(J){let Q=[];for(let $=1;$<J.length;$++){let[Z,W]=[J[$-1],J[$]];Q.push(Math.hypot(W[0]-Z[0],W[1]-Z[1],W[2]-Z[2]))}return Q}function DH(J,Q){let{path:$,lengths:Z,total:W}=J;if(!W)return $[$.length-1];let X=Q*W;for(let Y=0;Y<Z.length;Y++){if(X<=Z[Y]||Y===Z.length-1){let H=Z[Y]?Math.min(1,X/Z[Y]):1,[K,G]=[$[Y],$[Y+1]];return[K[0]+(G[0]-K[0])*H,K[1]+(G[1]-K[1])*H,K[2]+(G[2]-K[2])*H]}X-=Z[Y]}return $[$.length-1]}function ZJ(J){return J.intro=new Map,J.steps.forEach((Q,$)=>{if(Q.place)for(let Z of Q.place.parts)J.intro.set(Z,{si:$,t0:Q.place.t0,move:null});for(let Z of Q.moves){Z.lengths=kH(Z.path),Z.total=Z.lengths.reduce((W,X)=>W+X,0);for(let W of Z.parts)J.intro.set(W,{si:$,t0:Z.t0,move:Z})}}),J}function CZ(J,Q){let $=new Map;for(let[Z,W]of J.intro){if(Q<W.t0)continue;let X=W.move;if(!X){$.set(Z,j5);continue}let Y=X.t1>X.tm?LH((Q-X.tm)/(X.t1-X.tm)):1;$.set(Z,DH(X,CH(Y)))}return $}function $9(J,Q){let $=0;return J.steps.forEach((Z,W)=>{if(Q>=Z.t0)$=W}),$}function kZ(J,Q){return J.steps[$9(J,Q)].moves.filter((Z)=>Q>=Z.t0&&Q<Z.t1)}function DZ(J,Q){let $=new Map;for(let[Z,W]of J.intro)if(W.si<Q)$.set(Z,j5);else if(W.si===Q)$.set(Z,W.move?W.move.path[0]:j5);return $}var J6=(J)=>document.getElementById(J),wZ=(J)=>`${Math.floor(J/60)}:${String(Math.floor(J%60)).padStart(2,"0")}`;async function _Z(){let J=J6("status"),Q,$=new Promise((Z)=>{Q=Z});window.assemblyPlayer={ready:$};try{let Z=ZJ(await(await fetch("./timeline.json")).json());document.title=`${Z.title} — assembly animation`,J6("title").textContent=Z.title,J6("clearance").textContent=Z.clearance.text,J6("clearance").classList.toggle("draft",Z.clearance.status!=="verified");let W=J6("view"),X=new X7(W,Z,{pixelRatio:Math.min(window.devicePixelRatio||1,2)});await X.load(`./${Z.model}`);let Y=new B5(X.camera,W);Y.enableDamping=!0,Y.dampingFactor=0.1,Y.screenSpacePanning=!0;let H=0,K=!1,G=1,q=!1,U=!0,F="shaded",N=!0,B=-1,O=()=>{let v=[];for(let h of Z.steps){for(let i of h.place?h.place.parts:[])v.push(X.boxAt(i,[0,0,0]));for(let i of h.moves)for(let b of i.parts)for(let J0 of i.path)v.push(X.boxAt(b,J0))}return v},V=(v=Z.view)=>{let h=X.fit(O(),{az:v.az,el:v.el,fill:0.9});if(h)Y.target.copy(h);Y.update(),U=!0},E=J6("scrub");E.max=String(Z.duration);let z=J6("ticks");Z.steps.forEach((v,h)=>{let i=document.createElement("div");i.className="tick",i.style.left=`${v.t0/Z.duration*100}%`,i.title=`${h+1}. ${v.title}`,z.appendChild(i)});let D=J6("steps"),_=[];Z.sections.forEach((v)=>{let h=document.createElement("div");h.className="section",h.textContent=v.title,D.appendChild(h);for(let i of v.steps){let b=document.createElement("button");b.className="step",b.innerHTML=`<span class="n">${i+1}</span><span class="t"></span>`,b.querySelector(".t").textContent=Z.steps[i].title,b.addEventListener("click",()=>{j(Z.steps[i].t0)}),D.appendChild(b),_[i]=b}});let f=(v)=>{if(v===B)return;B=v,_.forEach((b,J0)=>b.classList.toggle("current",J0===v)),_[v].scrollIntoView({block:"nearest"});let h=Z.steps[v];J6("step-label").textContent=`Step ${v+1} of ${Z.steps.length} · ${h.title}`;let i=J6("notes");i.replaceChildren();for(let b of h.notes){let J0=document.createElement("div");J0.className=`note ${b.kind}`;let G0=document.createElement("h4");G0.textContent=b.title;let M0=document.createElement("p");M0.textContent=b.text,J0.append(G0,M0),i.appendChild(J0)}history.replaceState(null,"",`#step=${v+1}`)},L=()=>{X.setPoses(CZ(Z,H));let v=$9(Z,H),h=Z.steps[v];X.setHighlight(F==="line"?h.parts:[]),X.setGuides(N?kZ(Z,H):[]),f(v),E.value=String(H),J6("time").textContent=`${wZ(H)} / ${wZ(Z.duration)}`,J6("play").textContent=K?"Pause":"Play",J6("play").setAttribute("aria-pressed",String(K)),U=!0},j=(v)=>{H=Math.min(Z.duration,Math.max(0,v)),L()},d=()=>{if(H>=Z.duration)H=0;K=!0,L()},C=()=>{K=!1,L()},k=(v)=>j(Z.steps[Math.min(Z.steps.length-1,Math.max(0,v))].t0),S=()=>{let v=Z.steps[$9(Z,H)];V(v.view)};J6("play").addEventListener("click",()=>K?C():d()),J6("prev").addEventListener("click",()=>{let v=$9(Z,H);k(H-Z.steps[v].t0>0.5?v:v-1)}),J6("next").addEventListener("click",()=>k($9(Z,H)+1)),E.addEventListener("input",()=>j(Number(E.value))),J6("speed").addEventListener("change",(v)=>{G=Number(v.target.value)}),J6("loop").addEventListener("change",(v)=>{q=v.target.checked}),J6("guides").addEventListener("change",(v)=>{N=v.target.checked,L()}),J6("style").addEventListener("change",(v)=>{F=v.target.value,X.setStyle(F),document.body.classList.toggle("line-art",F==="line"),L()}),J6("fit").addEventListener("click",()=>V()),J6("stepview").addEventListener("click",S),J6("panel-toggle").addEventListener("click",()=>document.body.classList.toggle("panel-hidden")),window.addEventListener("keydown",(v)=>{if(v.target instanceof HTMLInputElement||v.target instanceof HTMLSelectElement)return;if(v.code==="Space")v.preventDefault(),K?C():d();else if(v.key==="ArrowRight")J6("next").click();else if(v.key==="ArrowLeft")J6("prev").click();else if(v.key==="f")V();else if(v.key==="v")S()}),Y.addEventListener("change",()=>{U=!0});let p=()=>{let{clientWidth:v,clientHeight:h}=W;X.setSize(v,h);let i=X.camera,b=(i.top-i.bottom)/2;i.left=-b*(v/Math.max(1,h)),i.right=-i.left,i.updateProjectionMatrix(),U=!0};window.addEventListener("resize",p),X.setSize(W.clientWidth,W.clientHeight),V();let n=/step=(\d+)/.exec(location.hash);if(n)k(Number(n[1])-1);else j(0);let c=performance.now();X.renderer.setAnimationLoop((v)=>{let h=Math.min(0.1,(v-c)/1000);if(c=v,K){if(H+=h*G,H>=Z.duration)if(q)H=0;else H=Z.duration,K=!1;L()}if(Y.update())U=!0;if(U)X.render(),U=!1}),J.textContent="",Object.assign(window.assemblyPlayer,{timeline:Z,view:X,controls:Y,get time(){return H},get playing(){return K},duration:Z.duration,play:d,pause:C,seek:j,gotoStep:k,fit:V,stepView:S,setStyle(v){J6("style").value=v,J6("style").dispatchEvent(new Event("change"))},state(){let v=[...X.instances.values()].filter((h)=>h.object.visible);return{time:H,playing:K,step:$9(Z,H),visible:v.map((h)=>h.name),offsets:Object.fromEntries(v.map((h)=>[h.name,h.offset])),positions:Object.fromEntries(v.map((h)=>[h.name,h.object.position.toArray()])),target:Y.target.toArray(),camera:X.camera.position.toArray()}}}),Q(!0)}catch(Z){throw J.textContent=`Failed to load: ${Z.message}`,J.classList.add("error"),Q(!1),Z}}var wH={az:35,el:28};function _H(J){let{width:Q,height:$,ids:Z}=J,W=new Map,X=0,Y=0,H=0;for(let K=0;K<$;K++)for(let G=0;G<Q;G++){let q=Z[K*Q+G];if(!q)continue;let U=W.get(q);if(!U)W.set(q,U={count:0,sx:0,sy:0});U.count++,U.sx+=G,U.sy+=K,X+=G,Y+=K,H++}return{stats:W,centroid:H?[X/H,Y/H]:[Q/2,$/2]}}function IH(J,Q,$){let{width:Z,height:W,ids:X}=J,Y=$.sx/$.count,H=$.sy/$.count,K=null,G=1/0,q=$.count>40000?2:1;for(let U=0;U<W;U+=q)for(let F=0;F<Z;F+=q){if(X[U*Z+F]!==Q)continue;let N=(F-Y)**2+(U-H)**2;if(N<G)G=N,K=[F,U]}return K}function PH(J,Q,$,Z,W){let X=J.width/Q,Y=J.height/Q,H=6,K=Math.ceil(X/6),G=Math.ceil(Y/6),q=new Uint8Array(K*G);for(let f=0;f<J.height;f++)for(let L=0;L<J.width;L++)if(J.ids[f*J.width+L])q[Math.floor(f/Q/6)*K+Math.floor(L/Q/6)]=1;let{stats:U,centroid:F}=_H(J),[N,B]=[F[0]/Q,F[1]/Q],O=document.createElement("canvas").getContext("2d");O.font=W.font;let V=[],E=[],z=[],D=8,_=(f)=>{if(f.x<D||f.y<D||f.x+f.w>X-D||f.y+f.h>Y-D)return 1/0;for(let S of V)if(f.x<S.x+S.w+8&&f.x+f.w+8>S.x&&f.y<S.y+S.h+6&&f.y+f.h+6>S.y)return 1/0;let L=0,j=Math.max(0,Math.floor((f.x-4)/6)),d=Math.min(K-1,Math.floor((f.x+f.w+4)/6)),C=Math.max(0,Math.floor((f.y-4)/6)),k=Math.min(G-1,Math.floor((f.y+f.h+4)/6));for(let S=C;S<=k;S++)for(let p=j;p<=d;p++)L+=q[S*K+p];return L};for(let f of Z){let L=Math.ceil(O.measureText(f.text).width)+2*W.padX,j=W.height,d=null,C=-1;for(let i of f.names){let b=$.instances.get(i),J0=b&&U.get(b.id);if(!J0||J0.count<12*Q*Q)continue;let G0=(J0.sx/J0.count/Q-N)**2+(J0.sy/J0.count/Q-B)**2;if(G0>C)C=G0,d=IH(J,b.id,J0)}if(!d){z.push(`${f.text}: not visible in this figure; choose another view or focus`),E.push({text:f.text,w:L,h:j,anchor:null});continue}let[k,S]=[d[0]/Q,d[1]/Q],p=k-N,n=S-B,c=Math.hypot(p,n);if(c<1)p=1,n=-0.6;else p/=c,n/=c;let v=null,h=1/0;J:for(let i=34;i<Math.max(X,Y);i+=12)for(let b of[0,15,-15,30,-30,45,-45,60,-60,90,-90,120,-120,150,-150,180]){let J0=b*Math.PI/180,G0=p*Math.cos(J0)-n*Math.sin(J0),M0=p*Math.sin(J0)+n*Math.cos(J0),y0={x:k+G0*i-L/2,y:S+M0*i-j/2,w:L,h:j},o=_(y0);if(o===0){v=y0;break J}if(o+i/200<h)h=o+i/200,v=y0}V.push(v),E.push({text:f.text,x:v.x,y:v.y,w:L,h:j,anchor:[k,S]})}return{labels:E,warnings:z}}async function IZ(){let J,Q=new Promise(($)=>{J=$});window.assemblyRender={ready:Q};try{let $=ZJ(await(await fetch("./timeline.json")).json()),Z=document.getElementById("view"),W=new X7(Z,$,{preserve:!0});await W.load(`./${$.model}`),await document.fonts.ready,window.assemblyRender.figure=(X)=>{let{width:Y,height:H,scale:K=2}=X;Z.style.width=`${Y}px`,Z.style.height=`${H}px`,W.renderer.setPixelRatio(K),W.setSize(Y,H);let G,q=null,U=$.view,F="shaded",N=[],B=[];if(X.kind==="step"){let D=$.steps[X.index];G=DZ($,X.index),q=D.focus,U=D.view,F="line",N=D.parts,B=D.moves}else if(X.kind==="part")G=new Map([[X.name,[0,0,0]]]),U=wH,F="line";else throw Error(`unknown figure kind ${X.kind}`);W.setPoses(G),W.setStyle(F),W.setHighlight(N),W.setGuides(B,1.4);let O=W.boxesFor(G,q);for(let D of B)for(let _ of D.parts)for(let f of D.path)O.push(W.boxAt(_,f));W.fit(O,{az:U.az,el:U.el,fill:X.fill||0.82,aspect:Y/H}),W.render();let V=Z.toDataURL("image/png"),E=[],z=[];if(X.labels&&X.labels.length)({labels:E,warnings:z}=PH(W.pick(),K,W,X.labels,X.pill));return{png:V,labels:E,warnings:z}},J(!0)}catch($){window.assemblyRender.error=String($&&$.stack||$),J(!1)}}if(document.body.dataset.mode==="render")IZ();else _Z();
