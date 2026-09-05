var X8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},H8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var TZ=3,SZ=0,jZ=1,yZ=2;var vZ=4;var H7=1000,fZ=1001,xZ=1002,hZ=1003,bZ=1004;var gZ=1005;var VJ=1006,pZ=1007;var EJ=1008;var uZ=2300,OJ=2301;var mZ=0,q7=1,V9=2;var c6="srgb",V6="srgb-linear";class I6{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){if(this._listeners===void 0)return!1;let Z=this._listeners;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){if(this._listeners===void 0)return;let $=this._listeners[J];if($!==void 0){let W=$.indexOf(Q);if(W!==-1)$.splice(W,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let Z=this._listeners[J.type];if(Z!==void 0){J.target=this;let $=Z.slice(0);for(let W=0,Y=$.length;W<Y;W++)$[W].call(this,J);J.target=null}}}var w5=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kQ=1234567,g8=Math.PI/180,u8=180/Math.PI;function X6(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,$=Math.random()*4294967295|0;return(w5[J&255]+w5[J>>8&255]+w5[J>>16&255]+w5[J>>24&255]+"-"+w5[Q&255]+w5[Q>>8&255]+"-"+w5[Q>>16&15|64]+w5[Q>>24&255]+"-"+w5[Z&63|128]+w5[Z>>8&255]+"-"+w5[Z>>16&255]+w5[Z>>24&255]+w5[$&255]+w5[$>>8&255]+w5[$>>16&255]+w5[$>>24&255]).toLowerCase()}function D5(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function NJ(J,Q){return(J%Q+Q)%Q}function bW(J,Q,Z,$,W){return $+(J-Q)*(W-$)/(Z-Q)}function gW(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function K9(J,Q,Z){return(1-Z)*J+Z*Q}function pW(J,Q,Z,$){return K9(J,Q,1-Math.exp(-Z*$))}function uW(J,Q=1){return Q-Math.abs(NJ(J,Q*2)-Q)}function mW(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function lW(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function dW(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function cW(J,Q){return J+Math.random()*(Q-J)}function nW(J){return J*(0.5-Math.random())}function sW(J){if(J!==void 0)kQ=J;let Q=kQ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function iW(J){return J*g8}function oW(J){return J*u8}function aW(J){return(J&J-1)===0&&J!==0}function rW(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function tW(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function eW(J,Q,Z,$,W){let{cos:Y,sin:X}=Math,H=Y(Z/2),q=X(Z/2),K=Y((Q+$)/2),G=X((Q+$)/2),U=Y((Q-$)/2),F=X((Q-$)/2),V=Y(($-Q)/2),N=X(($-Q)/2);switch(W){case"XYX":J.set(H*G,q*U,q*F,H*K);break;case"YZY":J.set(q*F,H*G,q*U,H*K);break;case"ZXZ":J.set(q*U,q*F,H*G,H*K);break;case"XZX":J.set(H*G,q*N,q*V,H*K);break;case"YXY":J.set(q*V,H*G,q*N,H*K);break;case"ZYZ":J.set(q*N,q*V,H*G,H*K);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function W6(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function t0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var E6={DEG2RAD:g8,RAD2DEG:u8,generateUUID:X6,clamp:D5,euclideanModulo:NJ,mapLinear:bW,inverseLerp:gW,lerp:K9,damp:pW,pingpong:uW,smoothstep:mW,smootherstep:lW,randInt:dW,randFloat:cW,randFloatSpread:nW,seededRandom:sW,degToRad:iW,radToDeg:oW,isPowerOfTwo:aW,ceilPowerOfTwo:rW,floorPowerOfTwo:tW,setQuaternionFromProperEuler:eW,normalize:t0,denormalize:W6};class M0{constructor(J=0,Q=0){M0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6],this.y=$[1]*Q+$[4]*Z+$[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(Math.max(J,Math.min(Q,Z)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(D5(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=this.x-J.x,Y=this.y-J.y;return this.x=W*Z-Y*$+J.x,this.y=W*$+Y*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class f0{constructor(J,Q,Z,$,W,Y,X,H,q){if(f0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,Y,X,H,q)}set(J,Q,Z,$,W,Y,X,H,q){let K=this.elements;return K[0]=J,K[1]=$,K[2]=X,K[3]=Q,K[4]=W,K[5]=H,K[6]=Z,K[7]=Y,K[8]=q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,Y=Z[0],X=Z[3],H=Z[6],q=Z[1],K=Z[4],G=Z[7],U=Z[2],F=Z[5],V=Z[8],N=$[0],R=$[3],E=$[6],O=$[1],M=$[4],C=$[7],I=$[2],y=$[5],L=$[8];return W[0]=Y*N+X*O+H*I,W[3]=Y*R+X*M+H*y,W[6]=Y*E+X*C+H*L,W[1]=q*N+K*O+G*I,W[4]=q*R+K*M+G*y,W[7]=q*E+K*C+G*L,W[2]=U*N+F*O+V*I,W[5]=U*R+F*M+V*y,W[8]=U*E+F*C+V*L,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],q=J[7],K=J[8];return Q*Y*K-Q*X*q-Z*W*K+Z*X*H+$*W*q-$*Y*H}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],q=J[7],K=J[8],G=K*Y-X*q,U=X*H-K*W,F=q*W-Y*H,V=Q*G+Z*U+$*F;if(V===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/V;return J[0]=G*N,J[1]=($*q-K*Z)*N,J[2]=(X*Z-$*Y)*N,J[3]=U*N,J[4]=(K*Q-$*H)*N,J[5]=($*W-X*Q)*N,J[6]=F*N,J[7]=(Z*H-q*Q)*N,J[8]=(Y*Q-Z*W)*N,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,$,W,Y,X){let H=Math.cos(W),q=Math.sin(W);return this.set(Z*H,Z*q,-Z*(H*Y+q*X)+Y+J,-$*q,$*H,-$*(-q*Y+H*X)+X+Q,0,0,1),this}scale(J,Q){return this.premultiply(v7.makeScale(J,Q)),this}rotate(J){return this.premultiply(v7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(v7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<9;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var v7=new f0;function lZ(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function U9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function J1(){let J=U9("canvas");return J.style.display="block",J}var LQ={};function RJ(J){if(J in LQ)return;LQ[J]=!0,console.warn(J)}function Q1(J,Q,Z){return new Promise(function($,W){function Y(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Y,Z);break;default:$()}}setTimeout(Y,Z)})}var DQ=new f0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),CQ=new f0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),I9={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(CQ),fromReference:(J)=>J.applyMatrix3(DQ)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(CQ),fromReference:(J)=>J.applyMatrix3(DQ).convertLinearToSRGB()}},Z1=new Set(["srgb-linear","display-p3-linear"]),s0={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!Z1.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,Q,Z){if(this.enabled===!1||Q===Z||!Q||!Z)return J;let $=I9[Q].toReference,W=I9[Z].fromReference;return W($(J))},fromWorkingColorSpace:function(J,Q){return this.convert(J,this._workingColorSpace,Q)},toWorkingColorSpace:function(J,Q){return this.convert(J,Q,this._workingColorSpace)},getPrimaries:function(J){return I9[J].primaries},getTransfer:function(J){if(J==="")return"linear";return I9[J].transfer}};function p8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function f7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var k8;class dZ{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(k8===void 0)k8=U9("canvas");k8.width=J.width,k8.height=J.height;let Z=k8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=k8}if(Q.width>2048||Q.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),Q.toDataURL("image/jpeg",0.6);else return Q.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=U9("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let $=Z.getImageData(0,0,J.width,J.height),W=$.data;for(let Y=0;Y<W.length;Y++)W[Y]=p8(W[Y]/255)*255;return Z.putImageData($,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(p8(Q[Z]/255)*255);else Q[Z]=p8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var $1=0;class BJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=X6(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},$=this.data;if($!==null){let W;if(Array.isArray($)){W=[];for(let Y=0,X=$.length;Y<X;Y++)if($[Y].isDataTexture)W.push(x7($[Y].image));else W.push(x7($[Y]))}else W=x7($);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function x7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return dZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var W1=0;class N5 extends I6{constructor(J=N5.DEFAULT_IMAGE,Q=N5.DEFAULT_MAPPING,Z=1001,$=1001,W=1006,Y=1008,X=1023,H=1009,q=N5.DEFAULT_ANISOTROPY,K=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=X6(),this.name="",this.source=new BJ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=$,this.magFilter=W,this.minFilter=Y,this.anisotropy=q,this.format=X,this.internalFormat=null,this.type=H,this.offset=new M0(0,0),this.repeat=new M0(1,1),this.center=new M0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=K,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}N5.DEFAULT_IMAGE=null;N5.DEFAULT_MAPPING=300;N5.DEFAULT_ANISOTROPY=1;class e0{constructor(J=0,Q=0,Z=0,$=1){e0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=Z,this.w=$}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,$){return this.x=J,this.y=Q,this.z=Z,this.w=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=this.w,Y=J.elements;return this.x=Y[0]*Q+Y[4]*Z+Y[8]*$+Y[12]*W,this.y=Y[1]*Q+Y[5]*Z+Y[9]*$+Y[13]*W,this.z=Y[2]*Q+Y[6]*Z+Y[10]*$+Y[14]*W,this.w=Y[3]*Q+Y[7]*Z+Y[11]*$+Y[15]*W,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,$,W,Y=0.01,X=0.1,H=J.elements,q=H[0],K=H[4],G=H[8],U=H[1],F=H[5],V=H[9],N=H[2],R=H[6],E=H[10];if(Math.abs(K-U)<0.01&&Math.abs(G-N)<0.01&&Math.abs(V-R)<0.01){if(Math.abs(K+U)<0.1&&Math.abs(G+N)<0.1&&Math.abs(V+R)<0.1&&Math.abs(q+F+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(q+1)/2,C=(F+1)/2,I=(E+1)/2,y=(K+U)/4,L=(G+N)/4,S=(V+R)/4;if(M>C&&M>I)if(M<0.01)Z=0,$=0.707106781,W=0.707106781;else Z=Math.sqrt(M),$=y/Z,W=L/Z;else if(C>I)if(C<0.01)Z=0.707106781,$=0,W=0.707106781;else $=Math.sqrt(C),Z=y/$,W=S/$;else if(I<0.01)Z=0.707106781,$=0.707106781,W=0;else W=Math.sqrt(I),Z=L/W,$=S/W;return this.set(Z,$,W,Q),this}let O=Math.sqrt((R-V)*(R-V)+(G-N)*(G-N)+(U-K)*(U-K));if(Math.abs(O)<0.001)O=1;return this.x=(R-V)/O,this.y=(G-N)/O,this.z=(U-K)/O,this.w=Math.acos((q+F+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this.w=Math.max(J.w,Math.min(Q.w,this.w)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this.w=Math.max(J,Math.min(Q,this.w)),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(Math.max(J,Math.min(Q,Z)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cZ extends I6{constructor(J=1,Q=1,Z={}){super();this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=1,this.scissor=new e0(0,0,J,Q),this.scissorTest=!1,this.viewport=new e0(0,0,J,Q);let $={width:J,height:Q,depth:1};Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},Z);let W=new N5($,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace);W.flipY=!1,W.generateMipmaps=Z.generateMipmaps,W.internalFormat=Z.internalFormat,this.textures=[];let Y=Z.count;for(let X=0;X<Y;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0;this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.depthTexture=Z.depthTexture,this.samples=Z.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let $=0,W=this.textures.length;$<W;$++)this.textures[$].image.width=J,this.textures[$].image.height=Q,this.textures[$].image.depth=Z;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Z=0,$=J.textures.length;Z<$;Z++)this.textures[Z]=J.textures[Z].clone(),this.textures[Z].isRenderTargetTexture=!0;let Q=Object.assign({},J.texture.image);if(this.texture.source=new BJ(Q),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m6 extends cZ{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class zJ extends N5{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class nZ extends N5{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g5{constructor(J=0,Q=0,Z=0,$=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=$}static slerpFlat(J,Q,Z,$,W,Y,X){let H=Z[$+0],q=Z[$+1],K=Z[$+2],G=Z[$+3],U=W[Y+0],F=W[Y+1],V=W[Y+2],N=W[Y+3];if(X===0){J[Q+0]=H,J[Q+1]=q,J[Q+2]=K,J[Q+3]=G;return}if(X===1){J[Q+0]=U,J[Q+1]=F,J[Q+2]=V,J[Q+3]=N;return}if(G!==N||H!==U||q!==F||K!==V){let R=1-X,E=H*U+q*F+K*V+G*N,O=E>=0?1:-1,M=1-E*E;if(M>Number.EPSILON){let I=Math.sqrt(M),y=Math.atan2(I,E*O);R=Math.sin(R*y)/I,X=Math.sin(X*y)/I}let C=X*O;if(H=H*R+U*C,q=q*R+F*C,K=K*R+V*C,G=G*R+N*C,R===1-X){let I=1/Math.sqrt(H*H+q*q+K*K+G*G);H*=I,q*=I,K*=I,G*=I}}J[Q]=H,J[Q+1]=q,J[Q+2]=K,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,Z,$,W,Y){let X=Z[$],H=Z[$+1],q=Z[$+2],K=Z[$+3],G=W[Y],U=W[Y+1],F=W[Y+2],V=W[Y+3];return J[Q]=X*V+K*G+H*F-q*U,J[Q+1]=H*V+K*U+q*G-X*F,J[Q+2]=q*V+K*F+X*U-H*G,J[Q+3]=K*V-X*G-H*U-q*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,$){return this._x=J,this._y=Q,this._z=Z,this._w=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:$,_z:W,_order:Y}=J,X=Math.cos,H=Math.sin,q=X(Z/2),K=X($/2),G=X(W/2),U=H(Z/2),F=H($/2),V=H(W/2);switch(Y){case"XYZ":this._x=U*K*G+q*F*V,this._y=q*F*G-U*K*V,this._z=q*K*V+U*F*G,this._w=q*K*G-U*F*V;break;case"YXZ":this._x=U*K*G+q*F*V,this._y=q*F*G-U*K*V,this._z=q*K*V-U*F*G,this._w=q*K*G+U*F*V;break;case"ZXY":this._x=U*K*G-q*F*V,this._y=q*F*G+U*K*V,this._z=q*K*V+U*F*G,this._w=q*K*G-U*F*V;break;case"ZYX":this._x=U*K*G-q*F*V,this._y=q*F*G+U*K*V,this._z=q*K*V-U*F*G,this._w=q*K*G+U*F*V;break;case"YZX":this._x=U*K*G+q*F*V,this._y=q*F*G+U*K*V,this._z=q*K*V-U*F*G,this._w=q*K*G-U*F*V;break;case"XZY":this._x=U*K*G-q*F*V,this._y=q*F*G-U*K*V,this._z=q*K*V+U*F*G,this._w=q*K*G+U*F*V;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Y)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,$=Math.sin(Z);return this._x=J.x*$,this._y=J.y*$,this._z=J.z*$,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],$=Q[4],W=Q[8],Y=Q[1],X=Q[5],H=Q[9],q=Q[2],K=Q[6],G=Q[10],U=Z+X+G;if(U>0){let F=0.5/Math.sqrt(U+1);this._w=0.25/F,this._x=(K-H)*F,this._y=(W-q)*F,this._z=(Y-$)*F}else if(Z>X&&Z>G){let F=2*Math.sqrt(1+Z-X-G);this._w=(K-H)/F,this._x=0.25*F,this._y=($+Y)/F,this._z=(W+q)/F}else if(X>G){let F=2*Math.sqrt(1+X-Z-G);this._w=(W-q)/F,this._x=($+Y)/F,this._y=0.25*F,this._z=(H+K)/F}else{let F=2*Math.sqrt(1+G-Z-X);this._w=(Y-$)/F,this._x=(W+q)/F,this._y=(H+K)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<Number.EPSILON)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(D5(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let $=Math.min(1,Q/Z);return this.slerp(J,$),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:$,_z:W,_w:Y}=J,X=Q._x,H=Q._y,q=Q._z,K=Q._w;return this._x=Z*K+Y*X+$*q-W*H,this._y=$*K+Y*H+W*X-Z*q,this._z=W*K+Y*q+Z*H-$*X,this._w=Y*K-Z*X-$*H-W*q,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let Z=this._x,$=this._y,W=this._z,Y=this._w,X=Y*J._w+Z*J._x+$*J._y+W*J._z;if(X<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,X=-X;else this.copy(J);if(X>=1)return this._w=Y,this._x=Z,this._y=$,this._z=W,this;let H=1-X*X;if(H<=Number.EPSILON){let F=1-Q;return this._w=F*Y+Q*this._w,this._x=F*Z+Q*this._x,this._y=F*$+Q*this._y,this._z=F*W+Q*this._z,this.normalize(),this}let q=Math.sqrt(H),K=Math.atan2(q,X),G=Math.sin((1-Q)*K)/q,U=Math.sin(Q*K)/q;return this._w=Y*G+this._w*U,this._x=Z*G+this._x*U,this._y=$*G+this._y*U,this._z=W*G+this._z*U,this._onChangeCallback(),this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),$=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set($*Math.sin(J),$*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(J=0,Q=0,Z=0){P.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(_Q.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(_Q.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*$,this.y=W[1]*Q+W[4]*Z+W[7]*$,this.z=W[2]*Q+W[5]*Z+W[8]*$,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements,Y=1/(W[3]*Q+W[7]*Z+W[11]*$+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*$+W[12])*Y,this.y=(W[1]*Q+W[5]*Z+W[9]*$+W[13])*Y,this.z=(W[2]*Q+W[6]*Z+W[10]*$+W[14])*Y,this}applyQuaternion(J){let Q=this.x,Z=this.y,$=this.z,W=J.x,Y=J.y,X=J.z,H=J.w,q=2*(Y*$-X*Z),K=2*(X*Q-W*$),G=2*(W*Z-Y*Q);return this.x=Q+H*q+Y*G-X*K,this.y=Z+H*K+X*q-W*G,this.z=$+H*G+W*K-Y*q,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*$,this.y=W[1]*Q+W[5]*Z+W[9]*$,this.z=W[2]*Q+W[6]*Z+W[10]*$,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=Math.max(J.x,Math.min(Q.x,this.x)),this.y=Math.max(J.y,Math.min(Q.y,this.y)),this.z=Math.max(J.z,Math.min(Q.z,this.z)),this}clampScalar(J,Q){return this.x=Math.max(J,Math.min(Q,this.x)),this.y=Math.max(J,Math.min(Q,this.y)),this.z=Math.max(J,Math.min(Q,this.z)),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(Math.max(J,Math.min(Q,Z)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:$,z:W}=J,Y=Q.x,X=Q.y,H=Q.z;return this.x=$*H-W*X,this.y=W*Y-Z*H,this.z=Z*X-$*Y,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return h7.copy(this).projectOnVector(J),this.sub(h7)}reflect(J){return this.sub(h7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(D5(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,$=this.z-J.z;return Q*Q+Z*Z+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let $=Math.sin(Q)*J;return this.x=$*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=$*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),$=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=$,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var h7=new P,_Q=new g5;class T5{constructor(J=new P(1/0,1/0,1/0),Q=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(Q6.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(Q6.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=Q6.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Y=0,X=W.count;Y<X;Y++){if(J.isMesh===!0)J.getVertexPosition(Y,Q6);else Q6.fromBufferAttribute(W,Y);Q6.applyMatrix4(J.matrixWorld),this.expandByPoint(Q6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();A9.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();A9.copy(Z.boundingBox)}A9.applyMatrix4(J.matrixWorld),this.union(A9)}}let $=J.children;for(let W=0,Y=$.length;W<Y;W++)this.expandByObject($[W],Q);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,Q6),Q6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(J9),P9.subVectors(this.max,J9),L8.subVectors(J.a,J9),D8.subVectors(J.b,J9),C8.subVectors(J.c,J9),f6.subVectors(D8,L8),x6.subVectors(C8,D8),t6.subVectors(L8,C8);let Q=[0,-f6.z,f6.y,0,-x6.z,x6.y,0,-t6.z,t6.y,f6.z,0,-f6.x,x6.z,0,-x6.x,t6.z,0,-t6.x,-f6.y,f6.x,0,-x6.y,x6.x,0,-t6.y,t6.x,0];if(!b7(Q,L8,D8,C8,P9))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!b7(Q,L8,D8,C8,P9))return!1;return T9.crossVectors(f6,x6),Q=[T9.x,T9.y,T9.z],b7(Q,L8,D8,C8,P9)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Q6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Q6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return M6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),M6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),M6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),M6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),M6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),M6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),M6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),M6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(M6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var M6=[new P,new P,new P,new P,new P,new P,new P,new P],Q6=new P,A9=new T5,L8=new P,D8=new P,C8=new P,f6=new P,x6=new P,t6=new P,J9=new P,P9=new P,T9=new P,e6=new P;function b7(J,Q,Z,$,W){for(let Y=0,X=J.length-3;Y<=X;Y+=3){e6.fromArray(J,Y);let H=W.x*Math.abs(e6.x)+W.y*Math.abs(e6.y)+W.z*Math.abs(e6.z),q=Q.dot(e6),K=Z.dot(e6),G=$.dot(e6);if(Math.max(-Math.max(q,K,G),Math.min(q,K,G))>H)return!1}return!0}var Y1=new T5,Q9=new P,g7=new P;class n5{constructor(J=new P,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else Y1.setFromPoints(J).getCenter(Z);let $=0;for(let W=0,Y=J.length;W<Y;W++)$=Math.max($,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt($),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Q9.subVectors(J,this.center);let Q=Q9.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),$=(Z-this.radius)*0.5;this.center.addScaledVector(Q9,$/Z),this.radius+=$}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else g7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Q9.copy(J.center).add(g7)),this.expandByPoint(Q9.copy(J.center).sub(g7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var k6=new P,p7=new P,S9=new P,h6=new P,u7=new P,j9=new P,m7=new P;class n6{constructor(J=new P,Q=new P(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,k6)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=k6.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return k6.copy(this.origin).addScaledVector(this.direction,Q),k6.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,$){p7.copy(J).add(Q).multiplyScalar(0.5),S9.copy(Q).sub(J).normalize(),h6.copy(this.origin).sub(p7);let W=J.distanceTo(Q)*0.5,Y=-this.direction.dot(S9),X=h6.dot(this.direction),H=-h6.dot(S9),q=h6.lengthSq(),K=Math.abs(1-Y*Y),G,U,F,V;if(K>0)if(G=Y*H-X,U=Y*X-H,V=W*K,G>=0)if(U>=-V)if(U<=V){let N=1/K;G*=N,U*=N,F=G*(G+Y*U+2*X)+U*(Y*G+U+2*H)+q}else U=W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+q;else U=-W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+q;else if(U<=-V)G=Math.max(0,-(-Y*W+X)),U=G>0?-W:Math.min(Math.max(-W,-H),W),F=-G*G+U*(U+2*H)+q;else if(U<=V)G=0,U=Math.min(Math.max(-W,-H),W),F=U*(U+2*H)+q;else G=Math.max(0,-(Y*W+X)),U=G>0?W:Math.min(Math.max(-W,-H),W),F=-G*G+U*(U+2*H)+q;else U=Y>0?-W:W,G=Math.max(0,-(Y*U+X)),F=-G*G+U*(U+2*H)+q;if(Z)Z.copy(this.origin).addScaledVector(this.direction,G);if($)$.copy(p7).addScaledVector(S9,U);return F}intersectSphere(J,Q){k6.subVectors(J.center,this.origin);let Z=k6.dot(this.direction),$=k6.dot(k6)-Z*Z,W=J.radius*J.radius;if($>W)return null;let Y=Math.sqrt(W-$),X=Z-Y,H=Z+Y;if(H<0)return null;if(X<0)return this.at(H,Q);return this.at(X,Q)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,$,W,Y,X,H,q=1/this.direction.x,K=1/this.direction.y,G=1/this.direction.z,U=this.origin;if(q>=0)Z=(J.min.x-U.x)*q,$=(J.max.x-U.x)*q;else Z=(J.max.x-U.x)*q,$=(J.min.x-U.x)*q;if(K>=0)W=(J.min.y-U.y)*K,Y=(J.max.y-U.y)*K;else W=(J.max.y-U.y)*K,Y=(J.min.y-U.y)*K;if(Z>Y||W>$)return null;if(W>Z||isNaN(Z))Z=W;if(Y<$||isNaN($))$=Y;if(G>=0)X=(J.min.z-U.z)*G,H=(J.max.z-U.z)*G;else X=(J.max.z-U.z)*G,H=(J.min.z-U.z)*G;if(Z>H||X>$)return null;if(X>Z||Z!==Z)Z=X;if(H<$||$!==$)$=H;if($<0)return null;return this.at(Z>=0?Z:$,Q)}intersectsBox(J){return this.intersectBox(J,k6)!==null}intersectTriangle(J,Q,Z,$,W){u7.subVectors(Q,J),j9.subVectors(Z,J),m7.crossVectors(u7,j9);let Y=this.direction.dot(m7),X;if(Y>0){if($)return null;X=1}else if(Y<0)X=-1,Y=-Y;else return null;h6.subVectors(this.origin,J);let H=X*this.direction.dot(j9.crossVectors(h6,j9));if(H<0)return null;let q=X*this.direction.dot(u7.cross(h6));if(q<0)return null;if(H+q>Y)return null;let K=-X*h6.dot(m7);if(K<0)return null;return this.at(K/Y,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j0{constructor(J,Q,Z,$,W,Y,X,H,q,K,G,U,F,V,N,R){if(j0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,Y,X,H,q,K,G,U,F,V,N,R)}set(J,Q,Z,$,W,Y,X,H,q,K,G,U,F,V,N,R){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=Z,E[12]=$,E[1]=W,E[5]=Y,E[9]=X,E[13]=H,E[2]=q,E[6]=K,E[10]=G,E[14]=U,E[3]=F,E[7]=V,E[11]=N,E[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new j0().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,Z=J.elements,$=1/_8.setFromMatrixColumn(J,0).length(),W=1/_8.setFromMatrixColumn(J,1).length(),Y=1/_8.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*$,Q[1]=Z[1]*$,Q[2]=Z[2]*$,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*Y,Q[9]=Z[9]*Y,Q[10]=Z[10]*Y,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z,Y=Math.cos(Z),X=Math.sin(Z),H=Math.cos($),q=Math.sin($),K=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let U=Y*K,F=Y*G,V=X*K,N=X*G;Q[0]=H*K,Q[4]=-H*G,Q[8]=q,Q[1]=F+V*q,Q[5]=U-N*q,Q[9]=-X*H,Q[2]=N-U*q,Q[6]=V+F*q,Q[10]=Y*H}else if(J.order==="YXZ"){let U=H*K,F=H*G,V=q*K,N=q*G;Q[0]=U+N*X,Q[4]=V*X-F,Q[8]=Y*q,Q[1]=Y*G,Q[5]=Y*K,Q[9]=-X,Q[2]=F*X-V,Q[6]=N+U*X,Q[10]=Y*H}else if(J.order==="ZXY"){let U=H*K,F=H*G,V=q*K,N=q*G;Q[0]=U-N*X,Q[4]=-Y*G,Q[8]=V+F*X,Q[1]=F+V*X,Q[5]=Y*K,Q[9]=N-U*X,Q[2]=-Y*q,Q[6]=X,Q[10]=Y*H}else if(J.order==="ZYX"){let U=Y*K,F=Y*G,V=X*K,N=X*G;Q[0]=H*K,Q[4]=V*q-F,Q[8]=U*q+N,Q[1]=H*G,Q[5]=N*q+U,Q[9]=F*q-V,Q[2]=-q,Q[6]=X*H,Q[10]=Y*H}else if(J.order==="YZX"){let U=Y*H,F=Y*q,V=X*H,N=X*q;Q[0]=H*K,Q[4]=N-U*G,Q[8]=V*G+F,Q[1]=G,Q[5]=Y*K,Q[9]=-X*K,Q[2]=-q*K,Q[6]=F*G+V,Q[10]=U-N*G}else if(J.order==="XZY"){let U=Y*H,F=Y*q,V=X*H,N=X*q;Q[0]=H*K,Q[4]=-G,Q[8]=q*K,Q[1]=U*G+N,Q[5]=Y*K,Q[9]=F*G-V,Q[2]=V*G-F,Q[6]=X*K,Q[10]=N*G+U}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(X1,J,H1)}lookAt(J,Q,Z){let $=this.elements;if(h5.subVectors(J,Q),h5.lengthSq()===0)h5.z=1;if(h5.normalize(),b6.crossVectors(Z,h5),b6.lengthSq()===0){if(Math.abs(Z.z)===1)h5.x+=0.0001;else h5.z+=0.0001;h5.normalize(),b6.crossVectors(Z,h5)}return b6.normalize(),y9.crossVectors(h5,b6),$[0]=b6.x,$[4]=y9.x,$[8]=h5.x,$[1]=b6.y,$[5]=y9.y,$[9]=h5.y,$[2]=b6.z,$[6]=y9.z,$[10]=h5.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,Y=Z[0],X=Z[4],H=Z[8],q=Z[12],K=Z[1],G=Z[5],U=Z[9],F=Z[13],V=Z[2],N=Z[6],R=Z[10],E=Z[14],O=Z[3],M=Z[7],C=Z[11],I=Z[15],y=$[0],L=$[4],S=$[8],b=$[12],D=$[1],k=$[5],j=$[9],u=$[13],n=$[2],d=$[6],s=$[10],l=$[14],e=$[3],m=$[7],K0=$[11],F0=$[15];return W[0]=Y*y+X*D+H*n+q*e,W[4]=Y*L+X*k+H*d+q*m,W[8]=Y*S+X*j+H*s+q*K0,W[12]=Y*b+X*u+H*l+q*F0,W[1]=K*y+G*D+U*n+F*e,W[5]=K*L+G*k+U*d+F*m,W[9]=K*S+G*j+U*s+F*K0,W[13]=K*b+G*u+U*l+F*F0,W[2]=V*y+N*D+R*n+E*e,W[6]=V*L+N*k+R*d+E*m,W[10]=V*S+N*j+R*s+E*K0,W[14]=V*b+N*u+R*l+E*F0,W[3]=O*y+M*D+C*n+I*e,W[7]=O*L+M*k+C*d+I*m,W[11]=O*S+M*j+C*s+I*K0,W[15]=O*b+M*u+C*l+I*F0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],$=J[8],W=J[12],Y=J[1],X=J[5],H=J[9],q=J[13],K=J[2],G=J[6],U=J[10],F=J[14],V=J[3],N=J[7],R=J[11],E=J[15];return V*(+W*H*G-$*q*G-W*X*U+Z*q*U+$*X*F-Z*H*F)+N*(+Q*H*F-Q*q*U+W*Y*U-$*Y*F+$*q*K-W*H*K)+R*(+Q*q*G-Q*X*F-W*Y*G+Z*Y*F+W*X*K-Z*q*K)+E*(-$*X*K-Q*H*G+Q*X*U+$*Y*G-Z*Y*U+Z*H*K)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let $=this.elements;if(J.isVector3)$[12]=J.x,$[13]=J.y,$[14]=J.z;else $[12]=J,$[13]=Q,$[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],Y=J[4],X=J[5],H=J[6],q=J[7],K=J[8],G=J[9],U=J[10],F=J[11],V=J[12],N=J[13],R=J[14],E=J[15],O=G*R*q-N*U*q+N*H*F-X*R*F-G*H*E+X*U*E,M=V*U*q-K*R*q-V*H*F+Y*R*F+K*H*E-Y*U*E,C=K*N*q-V*G*q+V*X*F-Y*N*F-K*X*E+Y*G*E,I=V*G*H-K*N*H-V*X*U+Y*N*U+K*X*R-Y*G*R,y=Q*O+Z*M+$*C+W*I;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/y;return J[0]=O*L,J[1]=(N*U*W-G*R*W-N*$*F+Z*R*F+G*$*E-Z*U*E)*L,J[2]=(X*R*W-N*H*W+N*$*q-Z*R*q-X*$*E+Z*H*E)*L,J[3]=(G*H*W-X*U*W-G*$*q+Z*U*q+X*$*F-Z*H*F)*L,J[4]=M*L,J[5]=(K*R*W-V*U*W+V*$*F-Q*R*F-K*$*E+Q*U*E)*L,J[6]=(V*H*W-Y*R*W-V*$*q+Q*R*q+Y*$*E-Q*H*E)*L,J[7]=(Y*U*W-K*H*W+K*$*q-Q*U*q-Y*$*F+Q*H*F)*L,J[8]=C*L,J[9]=(V*G*W-K*N*W-V*Z*F+Q*N*F+K*Z*E-Q*G*E)*L,J[10]=(Y*N*W-V*X*W+V*Z*q-Q*N*q-Y*Z*E+Q*X*E)*L,J[11]=(K*X*W-Y*G*W-K*Z*q+Q*G*q+Y*Z*F-Q*X*F)*L,J[12]=I*L,J[13]=(K*N*$-V*G*$+V*Z*U-Q*N*U-K*Z*R+Q*G*R)*L,J[14]=(V*X*$-Y*N*$-V*Z*H+Q*N*H+Y*Z*R-Q*X*R)*L,J[15]=(Y*G*$-K*X*$+K*Z*H-Q*G*H-Y*Z*U+Q*X*U)*L,this}scale(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z;return Q[0]*=Z,Q[4]*=$,Q[8]*=W,Q[1]*=Z,Q[5]*=$,Q[9]*=W,Q[2]*=Z,Q[6]*=$,Q[10]*=W,Q[3]*=Z,Q[7]*=$,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],$=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,$))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=1-Z,Y=J.x,X=J.y,H=J.z,q=W*Y,K=W*X;return this.set(q*Y+Z,q*X-$*H,q*H+$*X,0,q*X+$*H,K*X+Z,K*H-$*Y,0,q*H-$*X,K*H+$*Y,W*H*H+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,$,W,Y){return this.set(1,Z,W,0,J,1,Y,0,Q,$,1,0,0,0,0,1),this}compose(J,Q,Z){let $=this.elements,W=Q._x,Y=Q._y,X=Q._z,H=Q._w,q=W+W,K=Y+Y,G=X+X,U=W*q,F=W*K,V=W*G,N=Y*K,R=Y*G,E=X*G,O=H*q,M=H*K,C=H*G,I=Z.x,y=Z.y,L=Z.z;return $[0]=(1-(N+E))*I,$[1]=(F+C)*I,$[2]=(V-M)*I,$[3]=0,$[4]=(F-C)*y,$[5]=(1-(U+E))*y,$[6]=(R+O)*y,$[7]=0,$[8]=(V+M)*L,$[9]=(R-O)*L,$[10]=(1-(U+N))*L,$[11]=0,$[12]=J.x,$[13]=J.y,$[14]=J.z,$[15]=1,this}decompose(J,Q,Z){let $=this.elements,W=_8.set($[0],$[1],$[2]).length(),Y=_8.set($[4],$[5],$[6]).length(),X=_8.set($[8],$[9],$[10]).length();if(this.determinant()<0)W=-W;J.x=$[12],J.y=$[13],J.z=$[14],Z6.copy(this);let q=1/W,K=1/Y,G=1/X;return Z6.elements[0]*=q,Z6.elements[1]*=q,Z6.elements[2]*=q,Z6.elements[4]*=K,Z6.elements[5]*=K,Z6.elements[6]*=K,Z6.elements[8]*=G,Z6.elements[9]*=G,Z6.elements[10]*=G,Q.setFromRotationMatrix(Z6),Z.x=W,Z.y=Y,Z.z=X,this}makePerspective(J,Q,Z,$,W,Y,X=2000){let H=this.elements,q=2*W/(Q-J),K=2*W/(Z-$),G=(Q+J)/(Q-J),U=(Z+$)/(Z-$),F,V;if(X===2000)F=-(Y+W)/(Y-W),V=-2*Y*W/(Y-W);else if(X===2001)F=-Y/(Y-W),V=-Y*W/(Y-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=q,H[4]=0,H[8]=G,H[12]=0,H[1]=0,H[5]=K,H[9]=U,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=V,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,$,W,Y,X=2000){let H=this.elements,q=1/(Q-J),K=1/(Z-$),G=1/(Y-W),U=(Q+J)*q,F=(Z+$)*K,V,N;if(X===2000)V=(Y+W)*G,N=-2*G;else if(X===2001)V=W*G,N=-1*G;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=2*q,H[4]=0,H[8]=0,H[12]=-U,H[1]=0,H[5]=2*K,H[9]=0,H[13]=-F,H[2]=0,H[6]=0,H[10]=N,H[14]=-V,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<16;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var _8=new P,Z6=new j0,X1=new P(0,0,0),H1=new P(1,1,1),b6=new P,y9=new P,h5=new P,wQ=new j0,IQ=new g5;class H6{constructor(J=0,Q=0,Z=0,$=H6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=$}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,$=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let $=J.elements,W=$[0],Y=$[4],X=$[8],H=$[1],q=$[5],K=$[9],G=$[2],U=$[6],F=$[10];switch(Q){case"XYZ":if(this._y=Math.asin(D5(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-K,F),this._z=Math.atan2(-Y,W);else this._x=Math.atan2(U,q),this._z=0;break;case"YXZ":if(this._x=Math.asin(-D5(K,-1,1)),Math.abs(K)<0.9999999)this._y=Math.atan2(X,F),this._z=Math.atan2(H,q);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(D5(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-G,F),this._z=Math.atan2(-Y,q);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-D5(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(U,F),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-Y,q);break;case"YZX":if(this._z=Math.asin(D5(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-K,q),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,F);break;case"XZY":if(this._z=Math.asin(-D5(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(U,q),this._y=Math.atan2(X,W);else this._x=Math.atan2(-K,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return wQ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(wQ,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return IQ.setFromEuler(this),this.setFromQuaternion(IQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}H6.DEFAULT_ORDER="XYZ";class K7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var q1=0,AQ=new P,w8=new g5,L6=new j0,v9=new P,Z9=new P,K1=new P,G1=new g5,PQ=new P(1,0,0),TQ=new P(0,1,0),SQ=new P(0,0,1),jQ={type:"added"},U1={type:"removed"},I8={type:"childadded",child:null},l7={type:"childremoved",child:null};class Z5 extends I6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=X6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Z5.DEFAULT_UP.clone();let J=new P,Q=new H6,Z=new g5,$=new P(1,1,1);function W(){Z.setFromEuler(Q,!1)}function Y(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(Y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:$},modelViewMatrix:{value:new j0},normalMatrix:{value:new f0}}),this.matrix=new j0,this.matrixWorld=new j0,this.matrixAutoUpdate=Z5.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Z5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return w8.setFromAxisAngle(J,Q),this.quaternion.multiply(w8),this}rotateOnWorldAxis(J,Q){return w8.setFromAxisAngle(J,Q),this.quaternion.premultiply(w8),this}rotateX(J){return this.rotateOnAxis(PQ,J)}rotateY(J){return this.rotateOnAxis(TQ,J)}rotateZ(J){return this.rotateOnAxis(SQ,J)}translateOnAxis(J,Q){return AQ.copy(J).applyQuaternion(this.quaternion),this.position.add(AQ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(PQ,J)}translateY(J){return this.translateOnAxis(TQ,J)}translateZ(J){return this.translateOnAxis(SQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(L6.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)v9.copy(J);else v9.set(J,Q,Z);let $=this.parent;if(this.updateWorldMatrix(!0,!1),Z9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)L6.lookAt(Z9,v9,this.up);else L6.lookAt(v9,Z9,this.up);if(this.quaternion.setFromRotationMatrix(L6),$)L6.extractRotation($.matrixWorld),w8.setFromRotationMatrix(L6),this.quaternion.premultiply(w8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(jQ),I8.child=J,this.dispatchEvent(I8),I8.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(U1),l7.child=J,this.dispatchEvent(l7),l7.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),L6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),L6.multiply(J.parent.matrixWorld);return J.applyMatrix4(L6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(jQ),I8.child=J,this.dispatchEvent(I8),I8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,$=this.children.length;Z<$;Z++){let Y=this.children[Z].getObjectByProperty(J,Q);if(Y!==void 0)return Y}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let $=this.children;for(let W=0,Y=$.length;W<Y;W++)$[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Z9,J,K1),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Z9,G1,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let $=this.children;for(let W=0,Y=$.length;W<Y;W++)$[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let $={};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.castShadow===!0)$.castShadow=!0;if(this.receiveShadow===!0)$.receiveShadow=!0;if(this.visible===!1)$.visible=!1;if(this.frustumCulled===!1)$.frustumCulled=!1;if(this.renderOrder!==0)$.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)$.userData=this.userData;if($.layers=this.layers.mask,$.matrix=this.matrix.toArray(),$.up=this.up.toArray(),this.matrixAutoUpdate===!1)$.matrixAutoUpdate=!1;if(this.isInstancedMesh){if($.type="InstancedMesh",$.count=this.count,$.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)$.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if($.type="BatchedMesh",$.perObjectFrustumCulled=this.perObjectFrustumCulled,$.sortObjects=this.sortObjects,$.drawRanges=this._drawRanges,$.reservedRanges=this._reservedRanges,$.visibility=this._visibility,$.active=this._active,$.bounds=this._bounds.map((X)=>({boxInitialized:X.boxInitialized,boxMin:X.box.min.toArray(),boxMax:X.box.max.toArray(),sphereInitialized:X.sphereInitialized,sphereRadius:X.sphere.radius,sphereCenter:X.sphere.center.toArray()})),$.maxInstanceCount=this._maxInstanceCount,$.maxVertexCount=this._maxVertexCount,$.maxIndexCount=this._maxIndexCount,$.geometryInitialized=this._geometryInitialized,$.geometryCount=this._geometryCount,$.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)$.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)$.boundingSphere={center:$.boundingSphere.center.toArray(),radius:$.boundingSphere.radius};if(this.boundingBox!==null)$.boundingBox={min:$.boundingBox.min.toArray(),max:$.boundingBox.max.toArray()}}function W(X,H){if(X[H.uuid]===void 0)X[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)$.background=this.background.toJSON();else if(this.background.isTexture)$.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)$.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){$.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let H=X.shapes;if(Array.isArray(H))for(let q=0,K=H.length;q<K;q++){let G=H[q];W(J.shapes,G)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if($.bindMode=this.bindMode,$.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),$.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let H=0,q=this.material.length;H<q;H++)X.push(W(J.materials,this.material[H]));$.material=X}else $.material=W(J.materials,this.material);if(this.children.length>0){$.children=[];for(let X=0;X<this.children.length;X++)$.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){$.animations=[];for(let X=0;X<this.animations.length;X++){let H=this.animations[X];$.animations.push(W(J.animations,H))}}if(Q){let X=Y(J.geometries),H=Y(J.materials),q=Y(J.textures),K=Y(J.images),G=Y(J.shapes),U=Y(J.skeletons),F=Y(J.animations),V=Y(J.nodes);if(X.length>0)Z.geometries=X;if(H.length>0)Z.materials=H;if(q.length>0)Z.textures=q;if(K.length>0)Z.images=K;if(G.length>0)Z.shapes=G;if(U.length>0)Z.skeletons=U;if(F.length>0)Z.animations=F;if(V.length>0)Z.nodes=V}return Z.object=$,Z;function Y(X){let H=[];for(let q in X){let K=X[q];delete K.metadata,H.push(K)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let $=J.children[Z];this.add($.clone())}return this}}Z5.DEFAULT_UP=new P(0,1,0);Z5.DEFAULT_MATRIX_AUTO_UPDATE=!0;Z5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $6=new P,D6=new P,d7=new P,C6=new P,A8=new P,P8=new P,yQ=new P,c7=new P,n7=new P,s7=new P;class Y6{constructor(J=new P,Q=new P,Z=new P){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,$){$.subVectors(Z,Q),$6.subVectors(J,Q),$.cross($6);let W=$.lengthSq();if(W>0)return $.multiplyScalar(1/Math.sqrt(W));return $.set(0,0,0)}static getBarycoord(J,Q,Z,$,W){$6.subVectors($,Q),D6.subVectors(Z,Q),d7.subVectors(J,Q);let Y=$6.dot($6),X=$6.dot(D6),H=$6.dot(d7),q=D6.dot(D6),K=D6.dot(d7),G=Y*q-X*X;if(G===0)return W.set(0,0,0),null;let U=1/G,F=(q*H-X*K)*U,V=(Y*K-X*H)*U;return W.set(1-F-V,V,F)}static containsPoint(J,Q,Z,$){if(this.getBarycoord(J,Q,Z,$,C6)===null)return!1;return C6.x>=0&&C6.y>=0&&C6.x+C6.y<=1}static getInterpolation(J,Q,Z,$,W,Y,X,H){if(this.getBarycoord(J,Q,Z,$,C6)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,C6.x),H.addScaledVector(Y,C6.y),H.addScaledVector(X,C6.z),H}static isFrontFacing(J,Q,Z,$){return $6.subVectors(Z,Q),D6.subVectors(J,Q),$6.cross(D6).dot($)<0?!0:!1}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,$){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[$]),this}setFromAttributeAndIndices(J,Q,Z,$){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,$),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return $6.subVectors(this.c,this.b),D6.subVectors(this.a,this.b),$6.cross(D6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return Y6.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return Y6.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,$,W){return Y6.getInterpolation(J,this.a,this.b,this.c,Q,Z,$,W)}containsPoint(J){return Y6.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return Y6.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,$=this.b,W=this.c,Y,X;A8.subVectors($,Z),P8.subVectors(W,Z),c7.subVectors(J,Z);let H=A8.dot(c7),q=P8.dot(c7);if(H<=0&&q<=0)return Q.copy(Z);n7.subVectors(J,$);let K=A8.dot(n7),G=P8.dot(n7);if(K>=0&&G<=K)return Q.copy($);let U=H*G-K*q;if(U<=0&&H>=0&&K<=0)return Y=H/(H-K),Q.copy(Z).addScaledVector(A8,Y);s7.subVectors(J,W);let F=A8.dot(s7),V=P8.dot(s7);if(V>=0&&F<=V)return Q.copy(W);let N=F*q-H*V;if(N<=0&&q>=0&&V<=0)return X=q/(q-V),Q.copy(Z).addScaledVector(P8,X);let R=K*V-F*G;if(R<=0&&G-K>=0&&F-V>=0)return yQ.subVectors(W,$),X=(G-K)/(G-K+(F-V)),Q.copy($).addScaledVector(yQ,X);let E=1/(R+N+U);return Y=N*E,X=U*E,Q.copy(Z).addScaledVector(A8,Y).addScaledVector(P8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var sZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},g6={h:0,s:0,l:0},f9={h:0,s:0,l:0};function i7(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class N0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let $=J;if($&&$.isColor)this.copy($);else if(typeof $==="number")this.setHex($);else if(typeof $==="string")this.setStyle($)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,s0.toWorkingColorSpace(this,Q),this}setRGB(J,Q,Z,$=s0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,s0.toWorkingColorSpace(this,$),this}setHSL(J,Q,Z,$=s0.workingColorSpace){if(J=NJ(J,1),Q=D5(Q,0,1),Z=D5(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,Y=2*Z-W;this.r=i7(Y,W,J+0.3333333333333333),this.g=i7(Y,W,J),this.b=i7(Y,W,J-0.3333333333333333)}return s0.toWorkingColorSpace(this,$),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let $;if($=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Y=$[1],X=$[2];switch(Y){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if($=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=$[1],Y=W.length;if(Y===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Y===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=sZ[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=p8(J.r),this.g=p8(J.g),this.b=p8(J.b),this}copyLinearToSRGB(J){return this.r=f7(J.r),this.g=f7(J.g),this.b=f7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return s0.fromWorkingColorSpace(I5.copy(this),J),Math.round(D5(I5.r*255,0,255))*65536+Math.round(D5(I5.g*255,0,255))*256+Math.round(D5(I5.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=s0.workingColorSpace){s0.fromWorkingColorSpace(I5.copy(this),Q);let{r:Z,g:$,b:W}=I5,Y=Math.max(Z,$,W),X=Math.min(Z,$,W),H,q,K=(X+Y)/2;if(X===Y)H=0,q=0;else{let G=Y-X;switch(q=K<=0.5?G/(Y+X):G/(2-Y-X),Y){case Z:H=($-W)/G+($<W?6:0);break;case $:H=(W-Z)/G+2;break;case W:H=(Z-$)/G+4;break}H/=6}return J.h=H,J.s=q,J.l=K,J}getRGB(J,Q=s0.workingColorSpace){return s0.fromWorkingColorSpace(I5.copy(this),Q),J.r=I5.r,J.g=I5.g,J.b=I5.b,J}getStyle(J="srgb"){s0.fromWorkingColorSpace(I5.copy(this),J);let{r:Q,g:Z,b:$}=I5;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${$.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round($*255)})`}offsetHSL(J,Q,Z){return this.getHSL(g6),this.setHSL(g6.h+J,g6.s+Q,g6.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(g6),J.getHSL(f9);let Z=K9(g6.h,f9.h,Q),$=K9(g6.s,f9.s,Q),W=K9(g6.l,f9.l,Q);return this.setHSL(Z,$,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,$=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*$,this.g=W[1]*Q+W[4]*Z+W[7]*$,this.b=W[2]*Q+W[5]*Z+W[8]*$,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var I5=new N0;N0.NAMES=sZ;var F1=0;class C5 extends I6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=X6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new N0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if($&&$.isColor)$.set(Z);else if($&&$.isVector3&&(Z&&Z.isVector3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function $(W){let Y=[];for(let X in W){let H=W[X];delete H.metadata,Y.push(H)}return Y}if(Q){let W=$(J.textures),Y=$(J.images);if(W.length>0)Z.textures=W;if(Y.length>0)Z.images=Y}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let $=Q.length;Z=Array($);for(let W=0;W!==$;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class q6 extends C5{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new N0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new H6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var O5=new P,x9=new M0;class K5{constructor(J,Q,Z=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return RJ("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let $=0,W=this.itemSize;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)x9.fromBufferAttribute(this,Q),x9.applyMatrix3(J),this.setXY(Q,x9.x,x9.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)O5.fromBufferAttribute(this,Q),O5.applyMatrix3(J),this.setXYZ(Q,O5.x,O5.y,O5.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)O5.fromBufferAttribute(this,Q),O5.applyMatrix4(J),this.setXYZ(Q,O5.x,O5.y,O5.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)O5.fromBufferAttribute(this,Q),O5.applyNormalMatrix(J),this.setXYZ(Q,O5.x,O5.y,O5.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)O5.fromBufferAttribute(this,Q),O5.transformDirection(J),this.setXYZ(Q,O5.x,O5.y,O5.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=W6(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=t0(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=W6(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=W6(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=W6(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=W6(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),Z=t0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),Z=t0(Z,this.array),$=t0($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=t0(Q,this.array),Z=t0(Z,this.array),$=t0($,this.array),W=t0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class MJ extends K5{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class kJ extends K5{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class W5 extends K5{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var V1=0,c5=new j0,o7=new Z5,T8=new P,b5=new T5,$9=new T5,z5=new P;class G5 extends I6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=X6(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((lZ(J))?kJ:MJ)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new f0().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let $=this.attributes.tangent;if($!==void 0)$.transformDirection(J),$.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return c5.makeRotationFromQuaternion(J),this.applyMatrix4(c5),this}rotateX(J){return c5.makeRotationX(J),this.applyMatrix4(c5),this}rotateY(J){return c5.makeRotationY(J),this.applyMatrix4(c5),this}rotateZ(J){return c5.makeRotationZ(J),this.applyMatrix4(c5),this}translate(J,Q,Z){return c5.makeTranslation(J,Q,Z),this.applyMatrix4(c5),this}scale(J,Q,Z){return c5.makeScale(J,Q,Z),this.applyMatrix4(c5),this}lookAt(J){return o7.lookAt(J),o7.updateMatrix(),this.applyMatrix4(o7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(T8).negate(),this.translate(T8.x,T8.y,T8.z),this}setFromPoints(J){let Q=[];for(let Z=0,$=J.length;Z<$;Z++){let W=J[Z];Q.push(W.x,W.y,W.z||0)}return this.setAttribute("position",new W5(Q,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new T5;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(b5.setFromBufferAttribute(W),this.morphTargetsRelative)z5.addVectors(this.boundingBox.min,b5.min),this.boundingBox.expandByPoint(z5),z5.addVectors(this.boundingBox.max,b5.max),this.boundingBox.expandByPoint(z5);else this.boundingBox.expandByPoint(b5.min),this.boundingBox.expandByPoint(b5.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new n5;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(J){let Z=this.boundingSphere.center;if(b5.setFromBufferAttribute(J),Q)for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W];if($9.setFromBufferAttribute(X),this.morphTargetsRelative)z5.addVectors(b5.min,$9.min),b5.expandByPoint(z5),z5.addVectors(b5.max,$9.max),b5.expandByPoint(z5);else b5.expandByPoint($9.min),b5.expandByPoint($9.max)}b5.getCenter(Z);let $=0;for(let W=0,Y=J.count;W<Y;W++)z5.fromBufferAttribute(J,W),$=Math.max($,Z.distanceToSquared(z5));if(Q)for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W],H=this.morphTargetsRelative;for(let q=0,K=X.count;q<K;q++){if(z5.fromBufferAttribute(X,q),H)T8.fromBufferAttribute(J,q),z5.add(T8);$=Math.max($,Z.distanceToSquared(z5))}}if(this.boundingSphere.radius=Math.sqrt($),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:$,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new K5(new Float32Array(4*Z.count),4));let Y=this.getAttribute("tangent"),X=[],H=[];for(let S=0;S<Z.count;S++)X[S]=new P,H[S]=new P;let q=new P,K=new P,G=new P,U=new M0,F=new M0,V=new M0,N=new P,R=new P;function E(S,b,D){q.fromBufferAttribute(Z,S),K.fromBufferAttribute(Z,b),G.fromBufferAttribute(Z,D),U.fromBufferAttribute(W,S),F.fromBufferAttribute(W,b),V.fromBufferAttribute(W,D),K.sub(q),G.sub(q),F.sub(U),V.sub(U);let k=1/(F.x*V.y-V.x*F.y);if(!isFinite(k))return;N.copy(K).multiplyScalar(V.y).addScaledVector(G,-F.y).multiplyScalar(k),R.copy(G).multiplyScalar(F.x).addScaledVector(K,-V.x).multiplyScalar(k),X[S].add(N),X[b].add(N),X[D].add(N),H[S].add(R),H[b].add(R),H[D].add(R)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let S=0,b=O.length;S<b;++S){let D=O[S],k=D.start,j=D.count;for(let u=k,n=k+j;u<n;u+=3)E(J.getX(u+0),J.getX(u+1),J.getX(u+2))}let M=new P,C=new P,I=new P,y=new P;function L(S){I.fromBufferAttribute($,S),y.copy(I);let b=X[S];M.copy(b),M.sub(I.multiplyScalar(I.dot(b))).normalize(),C.crossVectors(y,b);let k=C.dot(H[S])<0?-1:1;Y.setXYZW(S,M.x,M.y,M.z,k)}for(let S=0,b=O.length;S<b;++S){let D=O[S],k=D.start,j=D.count;for(let u=k,n=k+j;u<n;u+=3)L(J.getX(u+0)),L(J.getX(u+1)),L(J.getX(u+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new K5(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let U=0,F=Z.count;U<F;U++)Z.setXYZ(U,0,0,0);let $=new P,W=new P,Y=new P,X=new P,H=new P,q=new P,K=new P,G=new P;if(J)for(let U=0,F=J.count;U<F;U+=3){let V=J.getX(U+0),N=J.getX(U+1),R=J.getX(U+2);$.fromBufferAttribute(Q,V),W.fromBufferAttribute(Q,N),Y.fromBufferAttribute(Q,R),K.subVectors(Y,W),G.subVectors($,W),K.cross(G),X.fromBufferAttribute(Z,V),H.fromBufferAttribute(Z,N),q.fromBufferAttribute(Z,R),X.add(K),H.add(K),q.add(K),Z.setXYZ(V,X.x,X.y,X.z),Z.setXYZ(N,H.x,H.y,H.z),Z.setXYZ(R,q.x,q.y,q.z)}else for(let U=0,F=Q.count;U<F;U+=3)$.fromBufferAttribute(Q,U+0),W.fromBufferAttribute(Q,U+1),Y.fromBufferAttribute(Q,U+2),K.subVectors(Y,W),G.subVectors($,W),K.cross(G),Z.setXYZ(U+0,K.x,K.y,K.z),Z.setXYZ(U+1,K.x,K.y,K.z),Z.setXYZ(U+2,K.x,K.y,K.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)z5.fromBufferAttribute(J,Q),z5.normalize(),J.setXYZ(Q,z5.x,z5.y,z5.z)}toNonIndexed(){function J(X,H){let{array:q,itemSize:K,normalized:G}=X,U=new q.constructor(H.length*K),F=0,V=0;for(let N=0,R=H.length;N<R;N++){if(X.isInterleavedBufferAttribute)F=H[N]*X.data.stride+X.offset;else F=H[N]*K;for(let E=0;E<K;E++)U[V++]=q[F++]}return new K5(U,K,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new G5,Z=this.index.array,$=this.attributes;for(let X in $){let H=$[X],q=J(H,Z);Q.setAttribute(X,q)}let W=this.morphAttributes;for(let X in W){let H=[],q=W[X];for(let K=0,G=q.length;K<G;K++){let U=q[K],F=J(U,Z);H.push(F)}Q.morphAttributes[X]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;for(let X=0,H=Y.length;X<H;X++){let q=Y[X];Q.addGroup(q.start,q.count,q.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let q in H)if(H[q]!==void 0)J[q]=H[q];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let H in Z){let q=Z[H];J.data.attributes[H]=q.toJSON(J.data)}let $={},W=!1;for(let H in this.morphAttributes){let q=this.morphAttributes[H],K=[];for(let G=0,U=q.length;G<U;G++){let F=q[G];K.push(F.toJSON(J.data))}if(K.length>0)$[H]=K,W=!0}if(W)J.data.morphAttributes=$,J.data.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;if(Y.length>0)J.data.groups=JSON.parse(JSON.stringify(Y));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere={center:X.center.toArray(),radius:X.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone(Q));let $=J.attributes;for(let q in $){let K=$[q];this.setAttribute(q,K.clone(Q))}let W=J.morphAttributes;for(let q in W){let K=[],G=W[q];for(let U=0,F=G.length;U<F;U++)K.push(G[U].clone(Q));this.morphAttributes[q]=K}this.morphTargetsRelative=J.morphTargetsRelative;let Y=J.groups;for(let q=0,K=Y.length;q<K;q++){let G=Y[q];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var vQ=new j0,J8=new n6,h9=new n5,fQ=new P,S8=new P,j8=new P,y8=new P,a7=new P,b9=new P,g9=new M0,p9=new M0,u9=new M0,xQ=new P,hQ=new P,bQ=new P,m9=new P,l9=new P;class d0 extends Z5{constructor(J=new G5,Q=new q6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=$.length;W<Y;W++){let X=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,$=Z.attributes.position,W=Z.morphAttributes.position,Y=Z.morphTargetsRelative;Q.fromBufferAttribute($,J);let X=this.morphTargetInfluences;if(W&&X){b9.set(0,0,0);for(let H=0,q=W.length;H<q;H++){let K=X[H],G=W[H];if(K===0)continue;if(a7.fromBufferAttribute(G,J),Y)b9.addScaledVector(a7,K);else b9.addScaledVector(a7.sub(Q),K)}Q.add(b9)}return Q}raycast(J,Q){let Z=this.geometry,$=this.material,W=this.matrixWorld;if($===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(h9.copy(Z.boundingSphere),h9.applyMatrix4(W),J8.copy(J.ray).recast(J.near),h9.containsPoint(J8.origin)===!1){if(J8.intersectSphere(h9,fQ)===null)return;if(J8.origin.distanceToSquared(fQ)>(J.far-J.near)**2)return}if(vQ.copy(W).invert(),J8.copy(J.ray).applyMatrix4(vQ),Z.boundingBox!==null){if(J8.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,J8)}_computeIntersections(J,Q,Z){let $,W=this.geometry,Y=this.material,X=W.index,H=W.attributes.position,q=W.attributes.uv,K=W.attributes.uv1,G=W.attributes.normal,U=W.groups,F=W.drawRange;if(X!==null)if(Array.isArray(Y))for(let V=0,N=U.length;V<N;V++){let R=U[V],E=Y[R.materialIndex],O=Math.max(R.start,F.start),M=Math.min(X.count,Math.min(R.start+R.count,F.start+F.count));for(let C=O,I=M;C<I;C+=3){let y=X.getX(C),L=X.getX(C+1),S=X.getX(C+2);if($=d9(this,E,J,Z,q,K,G,y,L,S),$)$.faceIndex=Math.floor(C/3),$.face.materialIndex=R.materialIndex,Q.push($)}}else{let V=Math.max(0,F.start),N=Math.min(X.count,F.start+F.count);for(let R=V,E=N;R<E;R+=3){let O=X.getX(R),M=X.getX(R+1),C=X.getX(R+2);if($=d9(this,Y,J,Z,q,K,G,O,M,C),$)$.faceIndex=Math.floor(R/3),Q.push($)}}else if(H!==void 0)if(Array.isArray(Y))for(let V=0,N=U.length;V<N;V++){let R=U[V],E=Y[R.materialIndex],O=Math.max(R.start,F.start),M=Math.min(H.count,Math.min(R.start+R.count,F.start+F.count));for(let C=O,I=M;C<I;C+=3){let y=C,L=C+1,S=C+2;if($=d9(this,E,J,Z,q,K,G,y,L,S),$)$.faceIndex=Math.floor(C/3),$.face.materialIndex=R.materialIndex,Q.push($)}}else{let V=Math.max(0,F.start),N=Math.min(H.count,F.start+F.count);for(let R=V,E=N;R<E;R+=3){let O=R,M=R+1,C=R+2;if($=d9(this,Y,J,Z,q,K,G,O,M,C),$)$.faceIndex=Math.floor(R/3),Q.push($)}}}}function E1(J,Q,Z,$,W,Y,X,H){let q;if(Q.side===1)q=$.intersectTriangle(X,Y,W,!0,H);else q=$.intersectTriangle(W,Y,X,Q.side===0,H);if(q===null)return null;l9.copy(H),l9.applyMatrix4(J.matrixWorld);let K=Z.ray.origin.distanceTo(l9);if(K<Z.near||K>Z.far)return null;return{distance:K,point:l9.clone(),object:J}}function d9(J,Q,Z,$,W,Y,X,H,q,K){J.getVertexPosition(H,S8),J.getVertexPosition(q,j8),J.getVertexPosition(K,y8);let G=E1(J,Q,Z,$,S8,j8,y8,m9);if(G){if(W)g9.fromBufferAttribute(W,H),p9.fromBufferAttribute(W,q),u9.fromBufferAttribute(W,K),G.uv=Y6.getInterpolation(m9,S8,j8,y8,g9,p9,u9,new M0);if(Y)g9.fromBufferAttribute(Y,H),p9.fromBufferAttribute(Y,q),u9.fromBufferAttribute(Y,K),G.uv1=Y6.getInterpolation(m9,S8,j8,y8,g9,p9,u9,new M0);if(X){if(xQ.fromBufferAttribute(X,H),hQ.fromBufferAttribute(X,q),bQ.fromBufferAttribute(X,K),G.normal=Y6.getInterpolation(m9,S8,j8,y8,xQ,hQ,bQ,new P),G.normal.dot($.direction)>0)G.normal.multiplyScalar(-1)}let U={a:H,b:q,c:K,normal:new P,materialIndex:0};Y6.getNormal(S8,j8,y8,U.normal),G.face=U}return G}class q8 extends G5{constructor(J=1,Q=1,Z=1,$=1,W=1,Y=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:$,heightSegments:W,depthSegments:Y};let X=this;$=Math.floor($),W=Math.floor(W),Y=Math.floor(Y);let H=[],q=[],K=[],G=[],U=0,F=0;V("z","y","x",-1,-1,Z,Q,J,Y,W,0),V("z","y","x",1,-1,Z,Q,-J,Y,W,1),V("x","z","y",1,1,J,Z,Q,$,Y,2),V("x","z","y",1,-1,J,Z,-Q,$,Y,3),V("x","y","z",1,-1,J,Q,Z,$,W,4),V("x","y","z",-1,-1,J,Q,-Z,$,W,5),this.setIndex(H),this.setAttribute("position",new W5(q,3)),this.setAttribute("normal",new W5(K,3)),this.setAttribute("uv",new W5(G,2));function V(N,R,E,O,M,C,I,y,L,S,b){let D=C/L,k=I/S,j=C/2,u=I/2,n=y/2,d=L+1,s=S+1,l=0,e=0,m=new P;for(let K0=0;K0<s;K0++){let F0=K0*k-u;for(let C0=0;C0<d;C0++){let x0=C0*D-j;m[N]=x0*O,m[R]=F0*M,m[E]=n,q.push(m.x,m.y,m.z),m[N]=0,m[R]=0,m[E]=y>0?1:-1,K.push(m.x,m.y,m.z),G.push(C0/L),G.push(1-K0/S),l+=1}}for(let K0=0;K0<S;K0++)for(let F0=0;F0<L;F0++){let C0=U+F0+d*K0,x0=U+F0+d*(K0+1),i=U+(F0+1)+d*(K0+1),$0=U+(F0+1)+d*K0;H.push(C0,x0,$0),H.push(x0,i,$0),e+=6}X.addGroup(F,e,b),F+=e,U+=l}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function m8(J){let Q={};for(let Z in J){Q[Z]={};for(let $ in J[Z]){let W=J[Z][$];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][$]=null;else Q[Z][$]=W.clone();else if(Array.isArray(W))Q[Z][$]=W.slice();else Q[Z][$]=W}}return Q}function v5(J){let Q={};for(let Z=0;Z<J.length;Z++){let $=m8(J[Z]);for(let W in $)Q[W]=$[W]}return Q}function O1(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function iZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return s0.workingColorSpace}var N1={clone:m8,merge:v5},R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class w6 extends C5{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=m8(J.uniforms),this.uniformsGroups=O1(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let $ in this.uniforms){let Y=this.uniforms[$].value;if(Y&&Y.isTexture)Q.uniforms[$]={type:"t",value:Y.toJSON(J).uuid};else if(Y&&Y.isColor)Q.uniforms[$]={type:"c",value:Y.getHex()};else if(Y&&Y.isVector2)Q.uniforms[$]={type:"v2",value:Y.toArray()};else if(Y&&Y.isVector3)Q.uniforms[$]={type:"v3",value:Y.toArray()};else if(Y&&Y.isVector4)Q.uniforms[$]={type:"v4",value:Y.toArray()};else if(Y&&Y.isMatrix3)Q.uniforms[$]={type:"m3",value:Y.toArray()};else if(Y&&Y.isMatrix4)Q.uniforms[$]={type:"m4",value:Y.toArray()};else Q.uniforms[$]={value:Y}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let $ in this.extensions)if(this.extensions[$]===!0)Z[$]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}}class LJ extends Z5{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new j0,this.projectionMatrix=new j0,this.projectionMatrixInverse=new j0,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var p6=new P,gQ=new M0,pQ=new M0;class A5 extends LJ{constructor(J=50,Q=1,Z=0.1,$=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=$,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=u8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(g8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return u8*2*Math.atan(Math.tan(g8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){p6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(p6.x,p6.y).multiplyScalar(-J/p6.z),p6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(p6.x,p6.y).multiplyScalar(-J/p6.z)}getViewSize(J,Q){return this.getViewBounds(J,gQ,pQ),Q.subVectors(pQ,gQ)}setViewOffset(J,Q,Z,$,W,Y){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(g8*0.5*this.fov)/this.zoom,Z=2*Q,$=this.aspect*Z,W=-0.5*$,Y=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:q}=Y;W+=Y.offsetX*$/H,Q-=Y.offsetY*Z/q,$*=Y.width/H,Z*=Y.height/q}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+$,Q,Q-Z,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var v8=-90,f8=1;class oZ extends Z5{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let $=new A5(v8,f8,J,Q);$.layers=this.layers,this.add($);let W=new A5(v8,f8,J,Q);W.layers=this.layers,this.add(W);let Y=new A5(v8,f8,J,Q);Y.layers=this.layers,this.add(Y);let X=new A5(v8,f8,J,Q);X.layers=this.layers,this.add(X);let H=new A5(v8,f8,J,Q);H.layers=this.layers,this.add(H);let q=new A5(v8,f8,J,Q);q.layers=this.layers,this.add(q)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,$,W,Y,X,H]=Q;for(let q of Q)this.remove(q);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),$.up.set(0,1,0),$.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Y.up.set(0,0,1),Y.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),$.up.set(0,-1,0),$.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Y.up.set(0,0,-1),Y.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let q of Q)this.add(q),q.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:$}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Y,X,H,q,K]=this.children,G=J.getRenderTarget(),U=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),V=J.xr.enabled;J.xr.enabled=!1;let N=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,$),J.render(Q,W),J.setRenderTarget(Z,1,$),J.render(Q,Y),J.setRenderTarget(Z,2,$),J.render(Q,X),J.setRenderTarget(Z,3,$),J.render(Q,H),J.setRenderTarget(Z,4,$),J.render(Q,q),Z.texture.generateMipmaps=N,J.setRenderTarget(Z,5,$),J.render(Q,K),J.setRenderTarget(G,U,F),J.xr.enabled=V,Z.texture.needsPMREMUpdate=!0}}class DJ extends N5{constructor(J,Q,Z,$,W,Y,X,H,q,K){J=J!==void 0?J:[],Q=Q!==void 0?Q:301;super(J,Q,Z,$,W,Y,X,H,q,K);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class aZ extends m6{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},$=[Z,Z,Z,Z,Z,Z];this.texture=new DJ($,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},$=new q8(5,5,5),W=new w6({name:"CubemapFromEquirect",uniforms:m8(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let Y=new d0($,W),X=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new oZ(1,10,this).update(J,Y),Q.minFilter=X,Y.geometry.dispose(),Y.material.dispose(),this}clear(J,Q,Z,$){let W=J.getRenderTarget();for(let Y=0;Y<6;Y++)J.setRenderTarget(this,Y),J.clear(Q,Z,$);J.setRenderTarget(W)}}var r7=new P,z1=new P,M1=new f0;class U6{constructor(J=new P(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,$){return this.normal.set(J,Q,Z),this.constant=$,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let $=r7.subVectors(Z,Q).cross(z1.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint($,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let Z=J.delta(r7),$=this.normal.dot(Z);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||M1.getNormalMatrix(J),$=this.coplanarPoint(r7).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-$.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Q8=new n5,c9=new P;class G7{constructor(J=new U6,Q=new U6,Z=new U6,$=new U6,W=new U6,Y=new U6){this.planes=[J,Q,Z,$,W,Y]}set(J,Q,Z,$,W,Y){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy($),X[4].copy(W),X[5].copy(Y),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000){let Z=this.planes,$=J.elements,W=$[0],Y=$[1],X=$[2],H=$[3],q=$[4],K=$[5],G=$[6],U=$[7],F=$[8],V=$[9],N=$[10],R=$[11],E=$[12],O=$[13],M=$[14],C=$[15];if(Z[0].setComponents(H-W,U-q,R-F,C-E).normalize(),Z[1].setComponents(H+W,U+q,R+F,C+E).normalize(),Z[2].setComponents(H+Y,U+K,R+V,C+O).normalize(),Z[3].setComponents(H-Y,U-K,R-V,C-O).normalize(),Z[4].setComponents(H-X,U-G,R-N,C-M).normalize(),Q===2000)Z[5].setComponents(H+X,U+G,R+N,C+M).normalize();else if(Q===2001)Z[5].setComponents(X,G,N,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();Q8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();Q8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(Q8)}intersectsSprite(J){return Q8.center.set(0,0,0),Q8.radius=0.7071067811865476,Q8.applyMatrix4(J.matrixWorld),this.intersectsSphere(Q8)}intersectsSphere(J){let Q=this.planes,Z=J.center,$=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<$)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let $=Q[Z];if(c9.x=$.normal.x>0?J.max.x:J.min.x,c9.y=$.normal.y>0?J.max.y:J.min.y,c9.z=$.normal.z>0?J.max.z:J.min.z,$.distanceToPoint(c9)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rZ(){let J=null,Q=!1,Z=null,$=null;function W(Y,X){Z(Y,X),$=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if(Z===null)return;$=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame($),Q=!1},setAnimationLoop:function(Y){Z=Y},setContext:function(Y){J=Y}}}function k1(J){let Q=new WeakMap;function Z(H,q){let{array:K,usage:G}=H,U=K.byteLength,F=J.createBuffer();J.bindBuffer(q,F),J.bufferData(q,K,G),H.onUploadCallback();let V;if(K instanceof Float32Array)V=J.FLOAT;else if(K instanceof Uint16Array)if(H.isFloat16BufferAttribute)V=J.HALF_FLOAT;else V=J.UNSIGNED_SHORT;else if(K instanceof Int16Array)V=J.SHORT;else if(K instanceof Uint32Array)V=J.UNSIGNED_INT;else if(K instanceof Int32Array)V=J.INT;else if(K instanceof Int8Array)V=J.BYTE;else if(K instanceof Uint8Array)V=J.UNSIGNED_BYTE;else if(K instanceof Uint8ClampedArray)V=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+K);return{buffer:F,type:V,bytesPerElement:K.BYTES_PER_ELEMENT,version:H.version,size:U}}function $(H,q,K){let{array:G,_updateRange:U,updateRanges:F}=q;if(J.bindBuffer(K,H),U.count===-1&&F.length===0)J.bufferSubData(K,0,G);if(F.length!==0){for(let V=0,N=F.length;V<N;V++){let R=F[V];J.bufferSubData(K,R.start*G.BYTES_PER_ELEMENT,G,R.start,R.count)}q.clearUpdateRanges()}if(U.count!==-1)J.bufferSubData(K,U.offset*G.BYTES_PER_ELEMENT,G,U.offset,U.count),U.count=-1;q.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function Y(H){if(H.isInterleavedBufferAttribute)H=H.data;let q=Q.get(H);if(q)J.deleteBuffer(q.buffer),Q.delete(H)}function X(H,q){if(H.isGLBufferAttribute){let G=Q.get(H);if(!G||G.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}if(H.isInterleavedBufferAttribute)H=H.data;let K=Q.get(H);if(K===void 0)Q.set(H,Z(H,q));else if(K.version<H.version){if(K.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(K.buffer,H,q),K.version=H.version}}return{get:W,remove:Y,update:X}}class d8 extends G5{constructor(J=1,Q=1,Z=1,$=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:$};let W=J/2,Y=Q/2,X=Math.floor(Z),H=Math.floor($),q=X+1,K=H+1,G=J/X,U=Q/H,F=[],V=[],N=[],R=[];for(let E=0;E<K;E++){let O=E*U-Y;for(let M=0;M<q;M++){let C=M*G-W;V.push(C,-O,0),N.push(0,0,1),R.push(M/X),R.push(1-E/H)}}for(let E=0;E<H;E++)for(let O=0;O<X;O++){let M=O+q*E,C=O+q*(E+1),I=O+1+q*(E+1),y=O+1+q*E;F.push(M,C,y),F.push(C,I,y)}this.setIndex(F),this.setAttribute("position",new W5(V,3)),this.setAttribute("normal",new W5(N,3)),this.setAttribute("uv",new W5(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new d8(J.width,J.height,J.widthSegments,J.heightSegments)}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
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
#endif`,P1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
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
#endif`,S1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f1=`#ifdef USE_IRIDESCENCE
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
#endif`,x1=`#ifdef USE_BUMPMAP
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s1=`vec3 transformedNormal = objectNormal;
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
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`
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
}`,J4=`#ifdef USE_ENVMAP
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
#endif`,Q4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z4=`#ifdef USE_ENVMAP
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
#endif`,$4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W4=`#ifdef USE_ENVMAP
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
#endif`,Y4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K4=`#ifdef USE_GRADIENTMAP
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
}`,G4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V4=`uniform bool receiveShadow;
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
#endif`,E4=`#ifdef USE_ENVMAP
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
#endif`,O4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z4=`PhysicalMaterial material;
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
#endif`,M4=`struct PhysicalMaterial {
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
}`,k4=`
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
#endif`,L4=`#if defined( RE_IndirectDiffuse )
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
#endif`,D4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S4=`#if defined( USE_POINTS_UV )
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
#endif`,j4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h4=`#ifdef USE_MORPHTARGETS
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
#endif`,b4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d4=`#ifdef USE_NORMALMAP
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
#endif`,c4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$Y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XY=`float getShadowMask() {
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
}`,HY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qY=`#ifdef USE_SKINNING
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
#endif`,KY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GY=`#ifdef USE_SKINNING
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
#endif`,UY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EY=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OY=`#ifdef USE_TRANSMISSION
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
#endif`,NY=`#ifdef USE_TRANSMISSION
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
#endif`,RY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LY=`uniform sampler2D t2D;
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
}`,DY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CY=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_Y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IY=`#include <common>
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
}`,AY=`#if DEPTH_PACKING == 3200
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
}`,PY=`#define DISTANCE
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
}`,TY=`#define DISTANCE
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
}`,SY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yY=`uniform float scale;
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
}`,vY=`uniform vec3 diffuse;
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
}`,fY=`#include <common>
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
}`,xY=`uniform vec3 diffuse;
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
}`,hY=`#define LAMBERT
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
}`,bY=`#define LAMBERT
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
}`,gY=`#define MATCAP
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
}`,pY=`#define MATCAP
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
}`,uY=`#define NORMAL
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
}`,mY=`#define NORMAL
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
}`,lY=`#define PHONG
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
}`,dY=`#define PHONG
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
}`,cY=`#define STANDARD
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
}`,nY=`#define STANDARD
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
}`,sY=`#define TOON
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
}`,iY=`#define TOON
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
}`,oY=`uniform float size;
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
}`,aY=`uniform vec3 diffuse;
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
}`,rY=`#include <common>
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
}`,tY=`uniform vec3 color;
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
}`,eY=`uniform float rotation;
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
}`,JX=`uniform vec3 diffuse;
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
}`,v0={alphahash_fragment:L1,alphahash_pars_fragment:D1,alphamap_fragment:C1,alphamap_pars_fragment:_1,alphatest_fragment:w1,alphatest_pars_fragment:I1,aomap_fragment:A1,aomap_pars_fragment:P1,batching_pars_vertex:T1,batching_vertex:S1,begin_vertex:j1,beginnormal_vertex:y1,bsdfs:v1,iridescence_fragment:f1,bumpmap_pars_fragment:x1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:p1,color_fragment:u1,color_pars_fragment:m1,color_pars_vertex:l1,color_vertex:d1,common:c1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:s1,displacementmap_pars_vertex:i1,displacementmap_vertex:o1,emissivemap_fragment:a1,emissivemap_pars_fragment:r1,colorspace_fragment:t1,colorspace_pars_fragment:e1,envmap_fragment:J4,envmap_common_pars_fragment:Q4,envmap_pars_fragment:Z4,envmap_pars_vertex:$4,envmap_physical_pars_fragment:E4,envmap_vertex:W4,fog_vertex:Y4,fog_pars_vertex:X4,fog_fragment:H4,fog_pars_fragment:q4,gradientmap_pars_fragment:K4,lightmap_pars_fragment:G4,lights_lambert_fragment:U4,lights_lambert_pars_fragment:F4,lights_pars_begin:V4,lights_toon_fragment:O4,lights_toon_pars_fragment:N4,lights_phong_fragment:R4,lights_phong_pars_fragment:B4,lights_physical_fragment:z4,lights_physical_pars_fragment:M4,lights_fragment_begin:k4,lights_fragment_maps:L4,lights_fragment_end:D4,logdepthbuf_fragment:C4,logdepthbuf_pars_fragment:_4,logdepthbuf_pars_vertex:w4,logdepthbuf_vertex:I4,map_fragment:A4,map_pars_fragment:P4,map_particle_fragment:T4,map_particle_pars_fragment:S4,metalnessmap_fragment:j4,metalnessmap_pars_fragment:y4,morphinstance_vertex:v4,morphcolor_vertex:f4,morphnormal_vertex:x4,morphtarget_pars_vertex:h4,morphtarget_vertex:b4,normal_fragment_begin:g4,normal_fragment_maps:p4,normal_pars_fragment:u4,normal_pars_vertex:m4,normal_vertex:l4,normalmap_pars_fragment:d4,clearcoat_normal_fragment_begin:c4,clearcoat_normal_fragment_maps:n4,clearcoat_pars_fragment:s4,iridescence_pars_fragment:i4,opaque_fragment:o4,packing:a4,premultiplied_alpha_fragment:r4,project_vertex:t4,dithering_fragment:e4,dithering_pars_fragment:JY,roughnessmap_fragment:QY,roughnessmap_pars_fragment:ZY,shadowmap_pars_fragment:$Y,shadowmap_pars_vertex:WY,shadowmap_vertex:YY,shadowmask_pars_fragment:XY,skinbase_vertex:HY,skinning_pars_vertex:qY,skinning_vertex:KY,skinnormal_vertex:GY,specularmap_fragment:UY,specularmap_pars_fragment:FY,tonemapping_fragment:VY,tonemapping_pars_fragment:EY,transmission_fragment:OY,transmission_pars_fragment:NY,uv_pars_fragment:RY,uv_pars_vertex:BY,uv_vertex:zY,worldpos_vertex:MY,background_vert:kY,background_frag:LY,backgroundCube_vert:DY,backgroundCube_frag:CY,cube_vert:_Y,cube_frag:wY,depth_vert:IY,depth_frag:AY,distanceRGBA_vert:PY,distanceRGBA_frag:TY,equirect_vert:SY,equirect_frag:jY,linedashed_vert:yY,linedashed_frag:vY,meshbasic_vert:fY,meshbasic_frag:xY,meshlambert_vert:hY,meshlambert_frag:bY,meshmatcap_vert:gY,meshmatcap_frag:pY,meshnormal_vert:uY,meshnormal_frag:mY,meshphong_vert:lY,meshphong_frag:dY,meshphysical_vert:cY,meshphysical_frag:nY,meshtoon_vert:sY,meshtoon_frag:iY,points_vert:oY,points_frag:aY,shadow_vert:rY,shadow_frag:tY,sprite_vert:eY,sprite_frag:JX},H0={common:{diffuse:{value:new N0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new M0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new N0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new N0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new N0(16777215)},opacity:{value:1},center:{value:new M0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},F6={basic:{uniforms:v5([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.fog]),vertexShader:v0.meshbasic_vert,fragmentShader:v0.meshbasic_frag},lambert:{uniforms:v5([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new N0(0)}}]),vertexShader:v0.meshlambert_vert,fragmentShader:v0.meshlambert_frag},phong:{uniforms:v5([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new N0(0)},specular:{value:new N0(1118481)},shininess:{value:30}}]),vertexShader:v0.meshphong_vert,fragmentShader:v0.meshphong_frag},standard:{uniforms:v5([H0.common,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.roughnessmap,H0.metalnessmap,H0.fog,H0.lights,{emissive:{value:new N0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag},toon:{uniforms:v5([H0.common,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.gradientmap,H0.fog,H0.lights,{emissive:{value:new N0(0)}}]),vertexShader:v0.meshtoon_vert,fragmentShader:v0.meshtoon_frag},matcap:{uniforms:v5([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,{matcap:{value:null}}]),vertexShader:v0.meshmatcap_vert,fragmentShader:v0.meshmatcap_frag},points:{uniforms:v5([H0.points,H0.fog]),vertexShader:v0.points_vert,fragmentShader:v0.points_frag},dashed:{uniforms:v5([H0.common,H0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:v0.linedashed_vert,fragmentShader:v0.linedashed_frag},depth:{uniforms:v5([H0.common,H0.displacementmap]),vertexShader:v0.depth_vert,fragmentShader:v0.depth_frag},normal:{uniforms:v5([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,{opacity:{value:1}}]),vertexShader:v0.meshnormal_vert,fragmentShader:v0.meshnormal_frag},sprite:{uniforms:v5([H0.sprite,H0.fog]),vertexShader:v0.sprite_vert,fragmentShader:v0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:v0.background_vert,fragmentShader:v0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:v0.backgroundCube_vert,fragmentShader:v0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:v0.cube_vert,fragmentShader:v0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:v0.equirect_vert,fragmentShader:v0.equirect_frag},distanceRGBA:{uniforms:v5([H0.common,H0.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:v0.distanceRGBA_vert,fragmentShader:v0.distanceRGBA_frag},shadow:{uniforms:v5([H0.lights,H0.fog,{color:{value:new N0(0)},opacity:{value:1}}]),vertexShader:v0.shadow_vert,fragmentShader:v0.shadow_frag}};F6.physical={uniforms:v5([F6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new M0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new N0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new M0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new N0(0)},specularColor:{value:new N0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new M0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag};var n9={r:0,b:0,g:0},Z8=new H6,QX=new j0;function ZX(J,Q,Z,$,W,Y,X){let H=new N0(0),q=Y===!0?0:1,K,G,U=null,F=0,V=null;function N(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture)C=(M.backgroundBlurriness>0?Z:Q).get(C);return C}function R(M){let C=!1,I=N(M);if(I===null)O(H,q);else if(I&&I.isColor)O(I,1),C=!0;let y=J.xr.getEnvironmentBlendMode();if(y==="additive")$.buffers.color.setClear(0,0,0,1,X);else if(y==="alpha-blend")$.buffers.color.setClear(0,0,0,0,X);if(J.autoClear||C)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function E(M,C){let I=N(C);if(I&&(I.isCubeTexture||I.mapping===306)){if(G===void 0)G=new d0(new q8(1,1,1),new w6({name:"BackgroundCubeMaterial",uniforms:m8(F6.backgroundCube.uniforms),vertexShader:F6.backgroundCube.vertexShader,fragmentShader:F6.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(y,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(Z8.copy(C.backgroundRotation),Z8.x*=-1,Z8.y*=-1,Z8.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1)Z8.y*=-1,Z8.z*=-1;if(G.material.uniforms.envMap.value=I,G.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(QX.makeRotationFromEuler(Z8)),G.material.toneMapped=s0.getTransfer(I.colorSpace)!=="srgb",U!==I||F!==I.version||V!==J.toneMapping)G.material.needsUpdate=!0,U=I,F=I.version,V=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}else if(I&&I.isTexture){if(K===void 0)K=new d0(new d8(2,2),new w6({name:"BackgroundMaterial",uniforms:m8(F6.background.uniforms),vertexShader:F6.background.vertexShader,fragmentShader:F6.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),K.geometry.deleteAttribute("normal"),Object.defineProperty(K.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(K);if(K.material.uniforms.t2D.value=I,K.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,K.material.toneMapped=s0.getTransfer(I.colorSpace)!=="srgb",I.matrixAutoUpdate===!0)I.updateMatrix();if(K.material.uniforms.uvTransform.value.copy(I.matrix),U!==I||F!==I.version||V!==J.toneMapping)K.material.needsUpdate=!0,U=I,F=I.version,V=J.toneMapping;K.layers.enableAll(),M.unshift(K,K.geometry,K.material,0,0,null)}}function O(M,C){M.getRGB(n9,iZ(J)),$.buffers.color.setClear(n9.r,n9.g,n9.b,C,X)}return{getClearColor:function(){return H},setClearColor:function(M,C=1){H.set(M),q=C,O(H,q)},getClearAlpha:function(){return q},setClearAlpha:function(M){q=M,O(H,q)},render:R,addToRenderList:E}}function $X(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),$={},W=F(null),Y=W,X=!1;function H(k,j,u,n,d){let s=!1,l=U(n,u,j);if(Y!==l)Y=l,K(Y.object);if(s=V(k,n,u,d),s)N(k,n,u,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(s||X){if(X=!1,I(k,j,u,n),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function q(){return J.createVertexArray()}function K(k){return J.bindVertexArray(k)}function G(k){return J.deleteVertexArray(k)}function U(k,j,u){let n=u.wireframe===!0,d=$[k.id];if(d===void 0)d={},$[k.id]=d;let s=d[j.id];if(s===void 0)s={},d[j.id]=s;let l=s[n];if(l===void 0)l=F(q()),s[n]=l;return l}function F(k){let j=[],u=[],n=[];for(let d=0;d<Z;d++)j[d]=0,u[d]=0,n[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:u,attributeDivisors:n,object:k,attributes:{},index:null}}function V(k,j,u,n){let d=Y.attributes,s=j.attributes,l=0,e=u.getAttributes();for(let m in e)if(e[m].location>=0){let F0=d[m],C0=s[m];if(C0===void 0){if(m==="instanceMatrix"&&k.instanceMatrix)C0=k.instanceMatrix;if(m==="instanceColor"&&k.instanceColor)C0=k.instanceColor}if(F0===void 0)return!0;if(F0.attribute!==C0)return!0;if(C0&&F0.data!==C0.data)return!0;l++}if(Y.attributesNum!==l)return!0;if(Y.index!==n)return!0;return!1}function N(k,j,u,n){let d={},s=j.attributes,l=0,e=u.getAttributes();for(let m in e)if(e[m].location>=0){let F0=s[m];if(F0===void 0){if(m==="instanceMatrix"&&k.instanceMatrix)F0=k.instanceMatrix;if(m==="instanceColor"&&k.instanceColor)F0=k.instanceColor}let C0={};if(C0.attribute=F0,F0&&F0.data)C0.data=F0.data;d[m]=C0,l++}Y.attributes=d,Y.attributesNum=l,Y.index=n}function R(){let k=Y.newAttributes;for(let j=0,u=k.length;j<u;j++)k[j]=0}function E(k){O(k,0)}function O(k,j){let{newAttributes:u,enabledAttributes:n,attributeDivisors:d}=Y;if(u[k]=1,n[k]===0)J.enableVertexAttribArray(k),n[k]=1;if(d[k]!==j)J.vertexAttribDivisor(k,j),d[k]=j}function M(){let{newAttributes:k,enabledAttributes:j}=Y;for(let u=0,n=j.length;u<n;u++)if(j[u]!==k[u])J.disableVertexAttribArray(u),j[u]=0}function C(k,j,u,n,d,s,l){if(l===!0)J.vertexAttribIPointer(k,j,u,d,s);else J.vertexAttribPointer(k,j,u,n,d,s)}function I(k,j,u,n){R();let d=n.attributes,s=u.getAttributes(),l=j.defaultAttributeValues;for(let e in s){let m=s[e];if(m.location>=0){let K0=d[e];if(K0===void 0){if(e==="instanceMatrix"&&k.instanceMatrix)K0=k.instanceMatrix;if(e==="instanceColor"&&k.instanceColor)K0=k.instanceColor}if(K0!==void 0){let{normalized:F0,itemSize:C0}=K0,x0=Q.get(K0);if(x0===void 0)continue;let{buffer:i,type:$0,bytesPerElement:U0}=x0,k0=$0===J.INT||$0===J.UNSIGNED_INT||K0.gpuType===1013;if(K0.isInterleavedBufferAttribute){let G0=K0.data,P0=G0.stride,J5=K0.offset;if(G0.isInstancedInterleavedBuffer){for(let h0=0;h0<m.locationSize;h0++)O(m.location+h0,G0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let h0=0;h0<m.locationSize;h0++)E(m.location+h0);J.bindBuffer(J.ARRAY_BUFFER,i);for(let h0=0;h0<m.locationSize;h0++)C(m.location+h0,C0/m.locationSize,$0,F0,P0*U0,(J5+C0/m.locationSize*h0)*U0,k0)}else{if(K0.isInstancedBufferAttribute){for(let G0=0;G0<m.locationSize;G0++)O(m.location+G0,K0.meshPerAttribute);if(k.isInstancedMesh!==!0&&n._maxInstanceCount===void 0)n._maxInstanceCount=K0.meshPerAttribute*K0.count}else for(let G0=0;G0<m.locationSize;G0++)E(m.location+G0);J.bindBuffer(J.ARRAY_BUFFER,i);for(let G0=0;G0<m.locationSize;G0++)C(m.location+G0,C0/m.locationSize,$0,F0,C0*U0,C0/m.locationSize*G0*U0,k0)}}else if(l!==void 0){let F0=l[e];if(F0!==void 0)switch(F0.length){case 2:J.vertexAttrib2fv(m.location,F0);break;case 3:J.vertexAttrib3fv(m.location,F0);break;case 4:J.vertexAttrib4fv(m.location,F0);break;default:J.vertexAttrib1fv(m.location,F0)}}}}M()}function y(){b();for(let k in $){let j=$[k];for(let u in j){let n=j[u];for(let d in n)G(n[d].object),delete n[d];delete j[u]}delete $[k]}}function L(k){if($[k.id]===void 0)return;let j=$[k.id];for(let u in j){let n=j[u];for(let d in n)G(n[d].object),delete n[d];delete j[u]}delete $[k.id]}function S(k){for(let j in $){let u=$[j];if(u[k.id]===void 0)continue;let n=u[k.id];for(let d in n)G(n[d].object),delete n[d];delete u[k.id]}}function b(){if(D(),X=!0,Y===W)return;Y=W,K(Y.object)}function D(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:b,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:L,releaseStatesOfProgram:S,initAttributes:R,enableAttribute:E,disableUnusedAttributes:M}}function WX(J,Q,Z){let $;function W(K){$=K}function Y(K,G){J.drawArrays($,K,G),Z.update(G,$,1)}function X(K,G,U){if(U===0)return;J.drawArraysInstanced($,K,G,U),Z.update(G,$,U)}function H(K,G,U){if(U===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,K,0,G,0,U);let V=0;for(let N=0;N<U;N++)V+=G[N];Z.update(V,$,1)}function q(K,G,U,F){if(U===0)return;let V=Q.get("WEBGL_multi_draw");if(V===null)for(let N=0;N<K.length;N++)X(K[N],G[N],F[N]);else{V.multiDrawArraysInstancedWEBGL($,K,0,G,0,F,0,U);let N=0;for(let R=0;R<U;R++)N+=G[R];for(let R=0;R<F.length;R++)Z.update(N,$,F[R])}}this.setMode=W,this.render=Y,this.renderInstances=X,this.renderMultiDraw=H,this.renderMultiDrawInstances=q}function YX(J,Q,Z,$){let W;function Y(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let L=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(L){if(L!==1023&&$.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(L){let S=L===1016&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(L!==1009&&$.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==1015&&!S)return!1;return!0}function q(L){if(L==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let K=Z.precision!==void 0?Z.precision:"highp",G=q(K);if(G!==K)console.warn("THREE.WebGLRenderer:",K,"not supported, using",G,"instead."),K=G;let U=Z.logarithmicDepthBuffer===!0,F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),O=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),C=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=V>0,y=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Y,getMaxPrecision:q,textureFormatReadable:X,textureTypeReadable:H,precision:K,logarithmicDepthBuffer:U,maxTextures:F,maxVertexTextures:V,maxTextureSize:N,maxCubemapSize:R,maxAttributes:E,maxVertexUniforms:O,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:I,maxSamples:y}}function XX(J){let Q=this,Z=null,$=0,W=!1,Y=!1,X=new U6,H=new f0,q={value:null,needsUpdate:!1};this.uniform=q,this.numPlanes=0,this.numIntersection=0,this.init=function(U,F){let V=U.length!==0||F||$!==0||W;return W=F,$=U.length,V},this.beginShadows=function(){Y=!0,G(null)},this.endShadows=function(){Y=!1},this.setGlobalState=function(U,F){Z=G(U,F,0)},this.setState=function(U,F,V){let{clippingPlanes:N,clipIntersection:R,clipShadows:E}=U,O=J.get(U);if(!W||N===null||N.length===0||Y&&!E)if(Y)G(null);else K();else{let M=Y?0:$,C=M*4,I=O.clippingState||null;q.value=I,I=G(N,F,C,V);for(let y=0;y!==C;++y)I[y]=Z[y];O.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=M}};function K(){if(q.value!==Z)q.value=Z,q.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function G(U,F,V,N){let R=U!==null?U.length:0,E=null;if(R!==0){if(E=q.value,N!==!0||E===null){let O=V+R*4,M=F.matrixWorldInverse;if(H.getNormalMatrix(M),E===null||E.length<O)E=new Float32Array(O);for(let C=0,I=V;C!==R;++C,I+=4)X.copy(U[C]).applyMatrix4(M,H),X.normal.toArray(E,I),E[I+3]=X.constant}q.value=E,q.needsUpdate=!0}return Q.numPlanes=R,Q.numIntersection=0,E}}function HX(J){let Q=new WeakMap;function Z(X,H){if(H===303)X.mapping=301;else if(H===304)X.mapping=302;return X}function $(X){if(X&&X.isTexture){let H=X.mapping;if(H===303||H===304)if(Q.has(X)){let q=Q.get(X).texture;return Z(q,X.mapping)}else{let q=X.image;if(q&&q.height>0){let K=new aZ(q.height);return K.fromEquirectangularTexture(J,X),Q.set(X,K),X.addEventListener("dispose",W),Z(K.texture,X.mapping)}else return null}}return X}function W(X){let H=X.target;H.removeEventListener("dispose",W);let q=Q.get(H);if(q!==void 0)Q.delete(H),q.dispose()}function Y(){Q=new WeakMap}return{get:$,dispose:Y}}class K8 extends LJ{constructor(J=-1,Q=1,Z=1,$=-1,W=0.1,Y=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=$,this.near=W,this.far=Y,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,$,W,Y){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,$=(this.top+this.bottom)/2,W=Z-J,Y=Z+J,X=$+Q,H=$-Q;if(this.view!==null&&this.view.enabled){let q=(this.right-this.left)/this.view.fullWidth/this.zoom,K=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=q*this.view.offsetX,Y=W+q*this.view.width,X-=K*this.view.offsetY,H=X-K*this.view.height}this.projectionMatrix.makeOrthographic(W,Y,X,H,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var b8=4,uQ=[0.125,0.215,0.35,0.446,0.526,0.582],Y8=20,t7=new K8,mQ=new N0,e7=null,JJ=0,QJ=0,ZJ=!1,W8=(1+Math.sqrt(5))/2,x8=1/W8,lQ=[new P(-W8,x8,0),new P(W8,x8,0),new P(-x8,0,W8),new P(x8,0,W8),new P(0,W8,-x8),new P(0,W8,x8),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class F9{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,Z=0.1,$=100){e7=this._renderer.getRenderTarget(),JJ=this._renderer.getActiveCubeFace(),QJ=this._renderer.getActiveMipmapLevel(),ZJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,Z,$,W),Q>0)this._blur(W,0,0,Q);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=nQ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=cQ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(e7,JJ,QJ),this._renderer.xr.enabled=ZJ,J.scissorTest=!1,s9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);e7=this._renderer.getRenderTarget(),JJ=this._renderer.getActiveCubeFace(),QJ=this._renderer.getActiveMipmapLevel(),ZJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},$=dQ(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=dQ(J,Q,Z);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qX(W)),this._blurMaterial=KX(W,J,Q)}return $}_compileMaterial(J){let Q=new d0(this._lodPlanes[0],J);this._renderer.compile(Q,t7)}_sceneToCubeUV(J,Q,Z,$){let X=new A5(90,1,Q,Z),H=[1,-1,1,1,1,1],q=[1,1,1,-1,-1,-1],K=this._renderer,G=K.autoClear,U=K.toneMapping;K.getClearColor(mQ),K.toneMapping=0,K.autoClear=!1;let F=new q6({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),V=new d0(new q8,F),N=!1,R=J.background;if(R){if(R.isColor)F.color.copy(R),J.background=null,N=!0}else F.color.copy(mQ),N=!0;for(let E=0;E<6;E++){let O=E%3;if(O===0)X.up.set(0,H[E],0),X.lookAt(q[E],0,0);else if(O===1)X.up.set(0,0,H[E]),X.lookAt(0,q[E],0);else X.up.set(0,H[E],0),X.lookAt(0,0,q[E]);let M=this._cubeSize;if(s9($,O*M,E>2?M:0,M,M),K.setRenderTarget($),N)K.render(V,X);K.render(J,X)}V.geometry.dispose(),V.material.dispose(),K.toneMapping=U,K.autoClear=G,J.background=R}_textureToCubeUV(J,Q){let Z=this._renderer,$=J.mapping===301||J.mapping===302;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=nQ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=cQ();let W=$?this._cubemapMaterial:this._equirectMaterial,Y=new d0(this._lodPlanes[0],W),X=W.uniforms;X.envMap.value=J;let H=this._cubeSize;s9(Q,0,0,3*H,2*H),Z.setRenderTarget(Q),Z.render(Y,t7)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let $=this._lodPlanes.length;for(let W=1;W<$;W++){let Y=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),X=lQ[($-W-1)%lQ.length];this._blur(J,W-1,W,Y,X)}Q.autoClear=Z}_blur(J,Q,Z,$,W){let Y=this._pingPongRenderTarget;this._halfBlur(J,Y,Q,Z,$,"latitudinal",W),this._halfBlur(Y,J,Z,Z,$,"longitudinal",W)}_halfBlur(J,Q,Z,$,W,Y,X){let H=this._renderer,q=this._blurMaterial;if(Y!=="latitudinal"&&Y!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let K=3,G=new d0(this._lodPlanes[$],q),U=q.uniforms,F=this._sizeLods[Z]-1,V=isFinite(W)?Math.PI/(2*F):2*Math.PI/(2*Y8-1),N=W/V,R=isFinite(W)?1+Math.floor(K*N):Y8;if(R>Y8)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${Y8}`);let E=[],O=0;for(let L=0;L<Y8;++L){let S=L/N,b=Math.exp(-S*S/2);if(E.push(b),L===0)O+=b;else if(L<R)O+=2*b}for(let L=0;L<E.length;L++)E[L]=E[L]/O;if(U.envMap.value=J.texture,U.samples.value=R,U.weights.value=E,U.latitudinal.value=Y==="latitudinal",X)U.poleAxis.value=X;let{_lodMax:M}=this;U.dTheta.value=V,U.mipInt.value=M-Z;let C=this._sizeLods[$],I=3*C*($>M-b8?$-M+b8:0),y=4*(this._cubeSize-C);s9(Q,I,y,3*C,2*C),H.setRenderTarget(Q),H.render(G,t7)}}function qX(J){let Q=[],Z=[],$=[],W=J,Y=J-b8+1+uQ.length;for(let X=0;X<Y;X++){let H=Math.pow(2,W);Z.push(H);let q=1/H;if(X>J-b8)q=uQ[X-J+b8-1];else if(X===0)q=0;$.push(q);let K=1/(H-2),G=-K,U=1+K,F=[G,G,U,G,U,U,G,G,U,U,G,U],V=6,N=6,R=3,E=2,O=1,M=new Float32Array(R*N*V),C=new Float32Array(E*N*V),I=new Float32Array(O*N*V);for(let L=0;L<V;L++){let S=L%3*2/3-1,b=L>2?0:-1,D=[S,b,0,S+0.6666666666666666,b,0,S+0.6666666666666666,b+1,0,S,b,0,S+0.6666666666666666,b+1,0,S,b+1,0];M.set(D,R*N*L),C.set(F,E*N*L);let k=[L,L,L,L,L,L];I.set(k,O*N*L)}let y=new G5;if(y.setAttribute("position",new K5(M,R)),y.setAttribute("uv",new K5(C,E)),y.setAttribute("faceIndex",new K5(I,O)),Q.push(y),W>b8)W--}return{lodPlanes:Q,sizeLods:Z,sigmas:$}}function dQ(J,Q,Z){let $=new m6(J,Q,Z);return $.texture.mapping=306,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function s9(J,Q,Z,$,W){J.viewport.set(Q,Z,$,W),J.scissor.set(Q,Z,$,W)}function KX(J,Q,Z){let $=new Float32Array(Y8),W=new P(0,1,0);return new w6({name:"SphericalGaussianBlur",defines:{n:Y8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:$},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:CJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function cQ(){return new w6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:CJ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function nQ(){return new w6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:CJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function CJ(){return`

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
	`}function GX(J){let Q=new WeakMap,Z=null;function $(H){if(H&&H.isTexture){let q=H.mapping,K=q===303||q===304,G=q===301||q===302;if(K||G){let U=Q.get(H),F=U!==void 0?U.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==F){if(Z===null)Z=new F9(J);return U=K?Z.fromEquirectangular(H,U):Z.fromCubemap(H,U),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),U.texture}else if(U!==void 0)return U.texture;else{let V=H.image;if(K&&V&&V.height>0||G&&V&&W(V)){if(Z===null)Z=new F9(J);return U=K?Z.fromEquirectangular(H):Z.fromCubemap(H),U.texture.pmremVersion=H.pmremVersion,Q.set(H,U),H.addEventListener("dispose",Y),U.texture}else return null}}}return H}function W(H){let q=0,K=6;for(let G=0;G<K;G++)if(H[G]!==void 0)q++;return q===K}function Y(H){let q=H.target;q.removeEventListener("dispose",Y);let K=Q.get(q);if(K!==void 0)Q.delete(q),K.dispose()}function X(){if(Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:$,dispose:X}}function UX(J){let Q={};function Z($){if(Q[$]!==void 0)return Q[$];let W;switch($){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension($)}return Q[$]=W,W}return{has:function($){return Z($)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function($){let W=Z($);if(W===null)RJ("THREE.WebGLRenderer: "+$+" extension not supported.");return W}}}function FX(J,Q,Z,$){let W={},Y=new WeakMap;function X(U){let F=U.target;if(F.index!==null)Q.remove(F.index);for(let N in F.attributes)Q.remove(F.attributes[N]);for(let N in F.morphAttributes){let R=F.morphAttributes[N];for(let E=0,O=R.length;E<O;E++)Q.remove(R[E])}F.removeEventListener("dispose",X),delete W[F.id];let V=Y.get(F);if(V)Q.remove(V),Y.delete(F);if($.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;Z.memory.geometries--}function H(U,F){if(W[F.id]===!0)return F;return F.addEventListener("dispose",X),W[F.id]=!0,Z.memory.geometries++,F}function q(U){let F=U.attributes;for(let N in F)Q.update(F[N],J.ARRAY_BUFFER);let V=U.morphAttributes;for(let N in V){let R=V[N];for(let E=0,O=R.length;E<O;E++)Q.update(R[E],J.ARRAY_BUFFER)}}function K(U){let F=[],V=U.index,N=U.attributes.position,R=0;if(V!==null){let M=V.array;R=V.version;for(let C=0,I=M.length;C<I;C+=3){let y=M[C+0],L=M[C+1],S=M[C+2];F.push(y,L,L,S,S,y)}}else if(N!==void 0){let M=N.array;R=N.version;for(let C=0,I=M.length/3-1;C<I;C+=3){let y=C+0,L=C+1,S=C+2;F.push(y,L,L,S,S,y)}}else return;let E=new((lZ(F))?kJ:MJ)(F,1);E.version=R;let O=Y.get(U);if(O)Q.remove(O);Y.set(U,E)}function G(U){let F=Y.get(U);if(F){let V=U.index;if(V!==null){if(F.version<V.version)K(U)}}else K(U);return Y.get(U)}return{get:H,update:q,getWireframeAttribute:G}}function VX(J,Q,Z){let $;function W(F){$=F}let Y,X;function H(F){Y=F.type,X=F.bytesPerElement}function q(F,V){J.drawElements($,V,Y,F*X),Z.update(V,$,1)}function K(F,V,N){if(N===0)return;J.drawElementsInstanced($,V,Y,F*X,N),Z.update(V,$,N)}function G(F,V,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,V,0,Y,F,0,N);let E=0;for(let O=0;O<N;O++)E+=V[O];Z.update(E,$,1)}function U(F,V,N,R){if(N===0)return;let E=Q.get("WEBGL_multi_draw");if(E===null)for(let O=0;O<F.length;O++)K(F[O]/X,V[O],R[O]);else{E.multiDrawElementsInstancedWEBGL($,V,0,Y,F,0,R,0,N);let O=0;for(let M=0;M<N;M++)O+=V[M];for(let M=0;M<R.length;M++)Z.update(O,$,R[M])}}this.setMode=W,this.setIndex=H,this.render=q,this.renderInstances=K,this.renderMultiDraw=G,this.renderMultiDrawInstances=U}function EX(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function $(Y,X,H){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=H*(Y/3);break;case J.LINES:Z.lines+=H*(Y/2);break;case J.LINE_STRIP:Z.lines+=H*(Y-1);break;case J.LINE_LOOP:Z.lines+=H*Y;break;case J.POINTS:Z.points+=H*Y;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",X);break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:$}}function OX(J,Q,Z){let $=new WeakMap,W=new e0;function Y(X,H,q){let K=X.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=G!==void 0?G.length:0,F=$.get(H);if(F===void 0||F.count!==U){let D=function(){S.dispose(),$.delete(H),H.removeEventListener("dispose",D)};if(F!==void 0)F.texture.dispose();let V=H.morphAttributes.position!==void 0,N=H.morphAttributes.normal!==void 0,R=H.morphAttributes.color!==void 0,E=H.morphAttributes.position||[],O=H.morphAttributes.normal||[],M=H.morphAttributes.color||[],C=0;if(V===!0)C=1;if(N===!0)C=2;if(R===!0)C=3;let I=H.attributes.position.count*C,y=1;if(I>Q.maxTextureSize)y=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let L=new Float32Array(I*y*4*U),S=new zJ(L,I,y,U);S.type=1015,S.needsUpdate=!0;let b=C*4;for(let k=0;k<U;k++){let j=E[k],u=O[k],n=M[k],d=I*y*4*k;for(let s=0;s<j.count;s++){let l=s*b;if(V===!0)W.fromBufferAttribute(j,s),L[d+l+0]=W.x,L[d+l+1]=W.y,L[d+l+2]=W.z,L[d+l+3]=0;if(N===!0)W.fromBufferAttribute(u,s),L[d+l+4]=W.x,L[d+l+5]=W.y,L[d+l+6]=W.z,L[d+l+7]=0;if(R===!0)W.fromBufferAttribute(n,s),L[d+l+8]=W.x,L[d+l+9]=W.y,L[d+l+10]=W.z,L[d+l+11]=n.itemSize===4?W.w:1}}F={count:U,texture:S,size:new M0(I,y)},$.set(H,F),H.addEventListener("dispose",D)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)q.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let V=0;for(let R=0;R<K.length;R++)V+=K[R];let N=H.morphTargetsRelative?1:1-V;q.getUniforms().setValue(J,"morphTargetBaseInfluence",N),q.getUniforms().setValue(J,"morphTargetInfluences",K)}q.getUniforms().setValue(J,"morphTargetsTexture",F.texture,Z),q.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:Y}}function NX(J,Q,Z,$){let W=new WeakMap;function Y(q){let K=$.render.frame,G=q.geometry,U=Q.get(q,G);if(W.get(U)!==K)Q.update(U),W.set(U,K);if(q.isInstancedMesh){if(q.hasEventListener("dispose",H)===!1)q.addEventListener("dispose",H);if(W.get(q)!==K){if(Z.update(q.instanceMatrix,J.ARRAY_BUFFER),q.instanceColor!==null)Z.update(q.instanceColor,J.ARRAY_BUFFER);W.set(q,K)}}if(q.isSkinnedMesh){let F=q.skeleton;if(W.get(F)!==K)F.update(),W.set(F,K)}return U}function X(){W=new WeakMap}function H(q){let K=q.target;if(K.removeEventListener("dispose",H),Z.remove(K.instanceMatrix),K.instanceColor!==null)Z.remove(K.instanceColor)}return{update:Y,dispose:X}}class _J extends N5{constructor(J,Q,Z,$,W,Y,X,H,q,K=1026){if(K!==1026&&K!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Z===void 0&&K===1026)Z=1014;if(Z===void 0&&K===1027)Z=1020;super(null,$,W,Y,X,H,K,Z,q);this.isDepthTexture=!0,this.image={width:J,height:Q},this.magFilter=X!==void 0?X:1003,this.minFilter=H!==void 0?H:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}var tZ=new N5,sQ=new _J(1,1),eZ=new zJ,J$=new nZ,Q$=new DJ,iQ=[],oQ=[],aQ=new Float32Array(16),rQ=new Float32Array(9),tQ=new Float32Array(4);function c8(J,Q,Z){let $=J[0];if($<=0||$>0)return J;let W=Q*Z,Y=iQ[W];if(Y===void 0)Y=new Float32Array(W),iQ[W]=Y;if(Q!==0){$.toArray(Y,0);for(let X=1,H=0;X!==Q;++X)H+=Z,J[X].toArray(Y,H)}return Y}function R5(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,$=J.length;Z<$;Z++)if(J[Z]!==Q[Z])return!1;return!0}function B5(J,Q){for(let Z=0,$=Q.length;Z<$;Z++)J[Z]=Q[Z]}function U7(J,Q){let Z=oQ[Q];if(Z===void 0)Z=new Int32Array(Q),oQ[Q]=Z;for(let $=0;$!==Q;++$)Z[$]=J.allocateTextureUnit();return Z}function RX(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function BX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(R5(Z,Q))return;J.uniform2fv(this.addr,Q),B5(Z,Q)}}function zX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(R5(Z,Q))return;J.uniform3fv(this.addr,Q),B5(Z,Q)}}function MX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(R5(Z,Q))return;J.uniform4fv(this.addr,Q),B5(Z,Q)}}function kX(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(R5(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),B5(Z,Q)}else{if(R5(Z,$))return;tQ.set($),J.uniformMatrix2fv(this.addr,!1,tQ),B5(Z,$)}}function LX(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(R5(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),B5(Z,Q)}else{if(R5(Z,$))return;rQ.set($),J.uniformMatrix3fv(this.addr,!1,rQ),B5(Z,$)}}function DX(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(R5(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),B5(Z,Q)}else{if(R5(Z,$))return;aQ.set($),J.uniformMatrix4fv(this.addr,!1,aQ),B5(Z,$)}}function CX(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function _X(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(R5(Z,Q))return;J.uniform2iv(this.addr,Q),B5(Z,Q)}}function wX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(R5(Z,Q))return;J.uniform3iv(this.addr,Q),B5(Z,Q)}}function IX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(R5(Z,Q))return;J.uniform4iv(this.addr,Q),B5(Z,Q)}}function AX(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function PX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(R5(Z,Q))return;J.uniform2uiv(this.addr,Q),B5(Z,Q)}}function TX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(R5(Z,Q))return;J.uniform3uiv(this.addr,Q),B5(Z,Q)}}function SX(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(R5(Z,Q))return;J.uniform4uiv(this.addr,Q),B5(Z,Q)}}function jX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;let Y;if(this.type===J.SAMPLER_2D_SHADOW)sQ.compareFunction=515,Y=sQ;else Y=tZ;Z.setTexture2D(Q||Y,W)}function yX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture3D(Q||J$,W)}function vX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTextureCube(Q||Q$,W)}function fX(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture2DArray(Q||eZ,W)}function xX(J){switch(J){case 5126:return RX;case 35664:return BX;case 35665:return zX;case 35666:return MX;case 35674:return kX;case 35675:return LX;case 35676:return DX;case 5124:case 35670:return CX;case 35667:case 35671:return _X;case 35668:case 35672:return wX;case 35669:case 35673:return IX;case 5125:return AX;case 36294:return PX;case 36295:return TX;case 36296:return SX;case 35678:case 36198:case 36298:case 36306:case 35682:return jX;case 35679:case 36299:case 36307:return yX;case 35680:case 36300:case 36308:case 36293:return vX;case 36289:case 36303:case 36311:case 36292:return fX}}function hX(J,Q){J.uniform1fv(this.addr,Q)}function bX(J,Q){let Z=c8(Q,this.size,2);J.uniform2fv(this.addr,Z)}function gX(J,Q){let Z=c8(Q,this.size,3);J.uniform3fv(this.addr,Z)}function pX(J,Q){let Z=c8(Q,this.size,4);J.uniform4fv(this.addr,Z)}function uX(J,Q){let Z=c8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function mX(J,Q){let Z=c8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function lX(J,Q){let Z=c8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function dX(J,Q){J.uniform1iv(this.addr,Q)}function cX(J,Q){J.uniform2iv(this.addr,Q)}function nX(J,Q){J.uniform3iv(this.addr,Q)}function sX(J,Q){J.uniform4iv(this.addr,Q)}function iX(J,Q){J.uniform1uiv(this.addr,Q)}function oX(J,Q){J.uniform2uiv(this.addr,Q)}function aX(J,Q){J.uniform3uiv(this.addr,Q)}function rX(J,Q){J.uniform4uiv(this.addr,Q)}function tX(J,Q,Z){let $=this.cache,W=Q.length,Y=U7(Z,W);if(!R5($,Y))J.uniform1iv(this.addr,Y),B5($,Y);for(let X=0;X!==W;++X)Z.setTexture2D(Q[X]||tZ,Y[X])}function eX(J,Q,Z){let $=this.cache,W=Q.length,Y=U7(Z,W);if(!R5($,Y))J.uniform1iv(this.addr,Y),B5($,Y);for(let X=0;X!==W;++X)Z.setTexture3D(Q[X]||J$,Y[X])}function JH(J,Q,Z){let $=this.cache,W=Q.length,Y=U7(Z,W);if(!R5($,Y))J.uniform1iv(this.addr,Y),B5($,Y);for(let X=0;X!==W;++X)Z.setTextureCube(Q[X]||Q$,Y[X])}function QH(J,Q,Z){let $=this.cache,W=Q.length,Y=U7(Z,W);if(!R5($,Y))J.uniform1iv(this.addr,Y),B5($,Y);for(let X=0;X!==W;++X)Z.setTexture2DArray(Q[X]||eZ,Y[X])}function ZH(J){switch(J){case 5126:return hX;case 35664:return bX;case 35665:return gX;case 35666:return pX;case 35674:return uX;case 35675:return mX;case 35676:return lX;case 5124:case 35670:return dX;case 35667:case 35671:return cX;case 35668:case 35672:return nX;case 35669:case 35673:return sX;case 5125:return iX;case 36294:return oX;case 36295:return aX;case 36296:return rX;case 35678:case 36198:case 36298:case 36306:case 35682:return tX;case 35679:case 36299:case 36307:return eX;case 35680:case 36300:case 36308:case 36293:return JH;case 36289:case 36303:case 36311:case 36292:return QH}}class Z${constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=xX(Q.type)}}class $${constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=ZH(Q.type)}}class W${constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let $=this.seq;for(let W=0,Y=$.length;W!==Y;++W){let X=$[W];X.setValue(J,Q[X.id],Z)}}}var $J=/(\w+)(\])?(\[|\.)?/g;function eQ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function $H(J,Q,Z){let $=J.name,W=$.length;$J.lastIndex=0;while(!0){let Y=$J.exec($),X=$J.lastIndex,H=Y[1],q=Y[2]==="]",K=Y[3];if(q)H=H|0;if(K===void 0||K==="["&&X+2===W){eQ(Z,K===void 0?new Z$(H,J,Q):new $$(H,J,Q));break}else{let U=Z.map[H];if(U===void 0)U=new W$(H),eQ(Z,U);Z=U}}}class G9{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let $=0;$<Z;++$){let W=J.getActiveUniform(Q,$),Y=J.getUniformLocation(Q,W.name);$H(W,Y,this)}}setValue(J,Q,Z,$){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,$)}setOptional(J,Q,Z){let $=Q[Z];if($!==void 0)this.setValue(J,Z,$)}static upload(J,Q,Z,$){for(let W=0,Y=Q.length;W!==Y;++W){let X=Q[W],H=Z[X.id];if(H.needsUpdate!==!1)X.setValue(J,H.value,$)}}static seqWithValue(J,Q){let Z=[];for(let $=0,W=J.length;$!==W;++$){let Y=J[$];if(Y.id in Q)Z.push(Y)}return Z}}function JZ(J,Q,Z){let $=J.createShader(Q);return J.shaderSource($,Z),J.compileShader($),$}var WH=37297,YH=0;function XH(J,Q){let Z=J.split(`
`),$=[],W=Math.max(Q-6,0),Y=Math.min(Q+6,Z.length);for(let X=W;X<Y;X++){let H=X+1;$.push(`${H===Q?">":" "} ${H}: ${Z[X]}`)}return $.join(`
`)}function HH(J){let Q=s0.getPrimaries(s0.workingColorSpace),Z=s0.getPrimaries(J),$;if(Q===Z)$="";else if(Q==="p3"&&Z==="rec709")$="LinearDisplayP3ToLinearSRGB";else if(Q==="rec709"&&Z==="p3")$="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[$,"LinearTransferOETF"];case"srgb":case"display-p3":return[$,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[$,"LinearTransferOETF"]}}function QZ(J,Q,Z){let $=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if($&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return Z.toUpperCase()+`

`+W+`

`+XH(J.getShaderSource(Q),X)}else return W}function qH(J,Q){let Z=HH(Q);return`vec4 ${J}( vec4 value ) { return ${Z[0]}( ${Z[1]}( value ) ); }`}function KH(J,Q){let Z;switch(Q){case 1:Z="Linear";break;case 2:Z="Reinhard";break;case 3:Z="OptimizedCineon";break;case 4:Z="ACESFilmic";break;case 6:Z="AgX";break;case 7:Z="Neutral";break;case 5:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}function GH(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(q9).join(`
`)}function UH(J){let Q=[];for(let Z in J){let $=J[Z];if($===!1)continue;Q.push("#define "+Z+" "+$)}return Q.join(`
`)}function FH(J,Q){let Z={},$=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<$;W++){let Y=J.getActiveAttrib(Q,W),X=Y.name,H=1;if(Y.type===J.FLOAT_MAT2)H=2;if(Y.type===J.FLOAT_MAT3)H=3;if(Y.type===J.FLOAT_MAT4)H=4;Z[X]={type:Y.type,location:J.getAttribLocation(Q,X),locationSize:H}}return Z}function q9(J){return J!==""}function ZZ(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function $Z(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var VH=/^[ \t]*#include +<([\w\d./]+)>/gm;function GJ(J){return J.replace(VH,OH)}var EH=new Map;function OH(J,Q){let Z=v0[Q];if(Z===void 0){let $=EH.get(Q);if($!==void 0)Z=v0[$],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,$);else throw Error("Can not resolve #include <"+Q+">")}return GJ(Z)}var NH=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function WZ(J){return J.replace(NH,RH)}function RH(J,Q,Z,$){let W="";for(let Y=parseInt(Q);Y<parseInt(Z);Y++)W+=$.replace(/\[\s*i\s*\]/g,"[ "+Y+" ]").replace(/UNROLLED_LOOP_INDEX/g,Y);return W}function YZ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}function BH(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)Q="SHADOWMAP_TYPE_VSM";return Q}function zH(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:Q="ENVMAP_TYPE_CUBE";break;case 306:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function MH(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:Q="ENVMAP_MODE_REFRACTION";break}return Q}function kH(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:Q="ENVMAP_BLENDING_MULTIPLY";break;case 1:Q="ENVMAP_BLENDING_MIX";break;case 2:Q="ENVMAP_BLENDING_ADD";break}return Q}function LH(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:$,maxMip:Z}}function DH(J,Q,Z,$){let W=J.getContext(),Y=Z.defines,X=Z.vertexShader,H=Z.fragmentShader,q=BH(Z),K=zH(Z),G=MH(Z),U=kH(Z),F=LH(Z),V=GH(Z),N=UH(Y),R=W.createProgram(),E,O,M=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N].filter(q9).join(`
`),E.length>0)E+=`
`;if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N].filter(q9).join(`
`),O.length>0)O+=`
`}else E=[YZ(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+q:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(q9).join(`
`),O=[YZ(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,N,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+K:"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+U:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+q:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==0?"#define TONE_MAPPING":"",Z.toneMapping!==0?v0.tonemapping_pars_fragment:"",Z.toneMapping!==0?KH("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",v0.colorspace_pars_fragment,qH("linearToOutputTexel",Z.outputColorSpace),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(q9).join(`
`);if(X=GJ(X),X=ZZ(X,Z),X=$Z(X,Z),H=GJ(H),H=ZZ(H,Z),H=$Z(H,Z),X=WZ(X),H=WZ(H),Z.isRawShaderMaterial!==!0)M=`#version 300 es
`,E=[V,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,O=["#define varying in",Z.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let C=M+E+X,I=M+O+H,y=JZ(W,W.VERTEX_SHADER,C),L=JZ(W,W.FRAGMENT_SHADER,I);if(W.attachShader(R,y),W.attachShader(R,L),Z.index0AttributeName!==void 0)W.bindAttribLocation(R,0,Z.index0AttributeName);else if(Z.morphTargets===!0)W.bindAttribLocation(R,0,"position");W.linkProgram(R);function S(j){if(J.debug.checkShaderErrors){let u=W.getProgramInfoLog(R).trim(),n=W.getShaderInfoLog(y).trim(),d=W.getShaderInfoLog(L).trim(),s=!0,l=!0;if(W.getProgramParameter(R,W.LINK_STATUS)===!1)if(s=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,R,y,L);else{let e=QZ(W,y,"vertex"),m=QZ(W,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(R,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+u+`
`+e+`
`+m)}else if(u!=="")console.warn("THREE.WebGLProgram: Program Info Log:",u);else if(n===""||d==="")l=!1;if(l)j.diagnostics={runnable:s,programLog:u,vertexShader:{log:n,prefix:E},fragmentShader:{log:d,prefix:O}}}W.deleteShader(y),W.deleteShader(L),b=new G9(W,R),D=FH(W,R)}let b;this.getUniforms=function(){if(b===void 0)S(this);return b};let D;this.getAttributes=function(){if(D===void 0)S(this);return D};let k=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(k===!1)k=W.getProgramParameter(R,WH);return k},this.destroy=function(){$.releaseStatesOfProgram(this),W.deleteProgram(R),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=YH++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=y,this.fragmentShader=L,this}var CH=0;class Y${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:Z}=J,$=this._getShaderStage(Q),W=this._getShaderStage(Z),Y=this._getShaderCacheForMaterial(J);if(Y.has($)===!1)Y.add($),$.usedTimes++;if(Y.has(W)===!1)Y.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new X$(J),Q.set(J,Z);return Z}}class X${constructor(J){this.id=CH++,this.code=J,this.usedTimes=0}}function _H(J,Q,Z,$,W,Y,X){let H=new K7,q=new Y$,K=new Set,G=[],U=W.logarithmicDepthBuffer,F=W.vertexTextures,V=W.precision,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(K.add(D),D===0)return"uv";return`uv${D}`}function E(D,k,j,u,n){let d=u.fog,s=n.geometry,l=D.isMeshStandardMaterial?u.environment:null,e=(D.isMeshStandardMaterial?Z:Q).get(D.envMap||l),m=!!e&&e.mapping===306?e.image.height:null,K0=N[D.type];if(D.precision!==null){if(V=W.getMaxPrecision(D.precision),V!==D.precision)console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",V,"instead.")}let F0=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,C0=F0!==void 0?F0.length:0,x0=0;if(s.morphAttributes.position!==void 0)x0=1;if(s.morphAttributes.normal!==void 0)x0=2;if(s.morphAttributes.color!==void 0)x0=3;let i,$0,U0,k0;if(K0){let b0=F6[K0];i=b0.vertexShader,$0=b0.fragmentShader}else i=D.vertexShader,$0=D.fragmentShader,q.update(D),U0=q.getVertexShaderID(D),k0=q.getFragmentShaderID(D);let G0=J.getRenderTarget(),P0=n.isInstancedMesh===!0,J5=n.isBatchedMesh===!0,h0=!!D.map,T=!!D.matcap,Y5=!!e,p0=!!D.aoMap,Q5=!!D.lightMap,L0=!!D.bumpMap,c0=!!D.normalMap,T0=!!D.displacementMap,S0=!!D.emissiveMap,$5=!!D.metalnessMap,w=!!D.roughnessMap,B=D.anisotropy>0,g=D.clearcoat>0,a=D.dispersion>0,r=D.iridescence>0,t=D.sheen>0,z0=D.transmission>0,W0=B&&!!D.anisotropyMap,Y0=g&&!!D.clearcoatMap,y0=g&&!!D.clearcoatNormalMap,J0=g&&!!D.clearcoatRoughnessMap,R0=r&&!!D.iridescenceMap,m0=r&&!!D.iridescenceThicknessMap,_0=t&&!!D.sheenColorMap,X0=t&&!!D.sheenRoughnessMap,I0=!!D.specularMap,l0=!!D.specularColorMap,A=!!D.specularIntensityMap,_=z0&&!!D.transmissionMap,o=z0&&!!D.thicknessMap,p=!!D.gradientMap,c=!!D.alphaMap,Q0=D.alphaTest>0,O0=!!D.alphaHash,n0=!!D.extensions,X5=0;if(D.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)X5=J.toneMapping}let U5={shaderID:K0,shaderType:D.type,shaderName:D.name,vertexShader:i,fragmentShader:$0,defines:D.defines,customVertexShaderID:U0,customFragmentShaderID:k0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:V,batching:J5,batchingColor:J5&&n._colorsTexture!==null,instancing:P0,instancingColor:P0&&n.instanceColor!==null,instancingMorph:P0&&n.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:"srgb-linear",alphaToCoverage:!!D.alphaToCoverage,map:h0,matcap:T,envMap:Y5,envMapMode:Y5&&e.mapping,envMapCubeUVHeight:m,aoMap:p0,lightMap:Q5,bumpMap:L0,normalMap:c0,displacementMap:F&&T0,emissiveMap:S0,normalMapObjectSpace:c0&&D.normalMapType===1,normalMapTangentSpace:c0&&D.normalMapType===0,metalnessMap:$5,roughnessMap:w,anisotropy:B,anisotropyMap:W0,clearcoat:g,clearcoatMap:Y0,clearcoatNormalMap:y0,clearcoatRoughnessMap:J0,dispersion:a,iridescence:r,iridescenceMap:R0,iridescenceThicknessMap:m0,sheen:t,sheenColorMap:_0,sheenRoughnessMap:X0,specularMap:I0,specularColorMap:l0,specularIntensityMap:A,transmission:z0,transmissionMap:_,thicknessMap:o,gradientMap:p,opaque:D.transparent===!1&&D.blending===1&&D.alphaToCoverage===!1,alphaMap:c,alphaTest:Q0,alphaHash:O0,combine:D.combine,mapUv:h0&&R(D.map.channel),aoMapUv:p0&&R(D.aoMap.channel),lightMapUv:Q5&&R(D.lightMap.channel),bumpMapUv:L0&&R(D.bumpMap.channel),normalMapUv:c0&&R(D.normalMap.channel),displacementMapUv:T0&&R(D.displacementMap.channel),emissiveMapUv:S0&&R(D.emissiveMap.channel),metalnessMapUv:$5&&R(D.metalnessMap.channel),roughnessMapUv:w&&R(D.roughnessMap.channel),anisotropyMapUv:W0&&R(D.anisotropyMap.channel),clearcoatMapUv:Y0&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:y0&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J0&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:R0&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:m0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:_0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:X0&&R(D.sheenRoughnessMap.channel),specularMapUv:I0&&R(D.specularMap.channel),specularColorMapUv:l0&&R(D.specularColorMap.channel),specularIntensityMapUv:A&&R(D.specularIntensityMap.channel),transmissionMapUv:_&&R(D.transmissionMap.channel),thicknessMapUv:o&&R(D.thicknessMap.channel),alphaMapUv:c&&R(D.alphaMap.channel),vertexTangents:!!s.attributes.tangent&&(c0||B),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!s.attributes.color&&s.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!s.attributes.uv&&(h0||c),fog:!!d,useFog:D.fog===!0,fogExp2:!!d&&d.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:U,skinning:n.isSkinnedMesh===!0,morphTargets:s.morphAttributes.position!==void 0,morphNormals:s.morphAttributes.normal!==void 0,morphColors:s.morphAttributes.color!==void 0,morphTargetsCount:C0,morphTextureStride:x0,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:X.numPlanes,numClipIntersection:X.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:X5,decodeVideoTexture:h0&&D.map.isVideoTexture===!0&&s0.getTransfer(D.map.colorSpace)==="srgb",premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===2,flipSided:D.side===1,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:n0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(n0&&D.extensions.multiDraw===!0||J5)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return U5.vertexUv1s=K.has(1),U5.vertexUv2s=K.has(2),U5.vertexUv3s=K.has(3),K.clear(),U5}function O(D){let k=[];if(D.shaderID)k.push(D.shaderID);else k.push(D.customVertexShaderID),k.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let j in D.defines)k.push(j),k.push(D.defines[j]);if(D.isRawShaderMaterial===!1)M(k,D),C(k,D),k.push(J.outputColorSpace);return k.push(D.customProgramCacheKey),k.join()}function M(D,k){D.push(k.precision),D.push(k.outputColorSpace),D.push(k.envMapMode),D.push(k.envMapCubeUVHeight),D.push(k.mapUv),D.push(k.alphaMapUv),D.push(k.lightMapUv),D.push(k.aoMapUv),D.push(k.bumpMapUv),D.push(k.normalMapUv),D.push(k.displacementMapUv),D.push(k.emissiveMapUv),D.push(k.metalnessMapUv),D.push(k.roughnessMapUv),D.push(k.anisotropyMapUv),D.push(k.clearcoatMapUv),D.push(k.clearcoatNormalMapUv),D.push(k.clearcoatRoughnessMapUv),D.push(k.iridescenceMapUv),D.push(k.iridescenceThicknessMapUv),D.push(k.sheenColorMapUv),D.push(k.sheenRoughnessMapUv),D.push(k.specularMapUv),D.push(k.specularColorMapUv),D.push(k.specularIntensityMapUv),D.push(k.transmissionMapUv),D.push(k.thicknessMapUv),D.push(k.combine),D.push(k.fogExp2),D.push(k.sizeAttenuation),D.push(k.morphTargetsCount),D.push(k.morphAttributeCount),D.push(k.numDirLights),D.push(k.numPointLights),D.push(k.numSpotLights),D.push(k.numSpotLightMaps),D.push(k.numHemiLights),D.push(k.numRectAreaLights),D.push(k.numDirLightShadows),D.push(k.numPointLightShadows),D.push(k.numSpotLightShadows),D.push(k.numSpotLightShadowsWithMaps),D.push(k.numLightProbes),D.push(k.shadowMapType),D.push(k.toneMapping),D.push(k.numClippingPlanes),D.push(k.numClipIntersection),D.push(k.depthPacking)}function C(D,k){if(H.disableAll(),k.supportsVertexTextures)H.enable(0);if(k.instancing)H.enable(1);if(k.instancingColor)H.enable(2);if(k.instancingMorph)H.enable(3);if(k.matcap)H.enable(4);if(k.envMap)H.enable(5);if(k.normalMapObjectSpace)H.enable(6);if(k.normalMapTangentSpace)H.enable(7);if(k.clearcoat)H.enable(8);if(k.iridescence)H.enable(9);if(k.alphaTest)H.enable(10);if(k.vertexColors)H.enable(11);if(k.vertexAlphas)H.enable(12);if(k.vertexUv1s)H.enable(13);if(k.vertexUv2s)H.enable(14);if(k.vertexUv3s)H.enable(15);if(k.vertexTangents)H.enable(16);if(k.anisotropy)H.enable(17);if(k.alphaHash)H.enable(18);if(k.batching)H.enable(19);if(k.dispersion)H.enable(20);if(k.batchingColor)H.enable(21);if(D.push(H.mask),H.disableAll(),k.fog)H.enable(0);if(k.useFog)H.enable(1);if(k.flatShading)H.enable(2);if(k.logarithmicDepthBuffer)H.enable(3);if(k.skinning)H.enable(4);if(k.morphTargets)H.enable(5);if(k.morphNormals)H.enable(6);if(k.morphColors)H.enable(7);if(k.premultipliedAlpha)H.enable(8);if(k.shadowMapEnabled)H.enable(9);if(k.doubleSided)H.enable(10);if(k.flipSided)H.enable(11);if(k.useDepthPacking)H.enable(12);if(k.dithering)H.enable(13);if(k.transmission)H.enable(14);if(k.sheen)H.enable(15);if(k.opaque)H.enable(16);if(k.pointsUvs)H.enable(17);if(k.decodeVideoTexture)H.enable(18);if(k.alphaToCoverage)H.enable(19);D.push(H.mask)}function I(D){let k=N[D.type],j;if(k){let u=F6[k];j=N1.clone(u.uniforms)}else j=D.uniforms;return j}function y(D,k){let j;for(let u=0,n=G.length;u<n;u++){let d=G[u];if(d.cacheKey===k){j=d,++j.usedTimes;break}}if(j===void 0)j=new DH(J,k,D,Y),G.push(j);return j}function L(D){if(--D.usedTimes===0){let k=G.indexOf(D);G[k]=G[G.length-1],G.pop(),D.destroy()}}function S(D){q.remove(D)}function b(){q.dispose()}return{getParameters:E,getProgramCacheKey:O,getUniforms:I,acquireProgram:y,releaseProgram:L,releaseShaderCache:S,programs:G,dispose:b}}function wH(){let J=new WeakMap;function Q(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function $(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{get:Q,remove:Z,update:$,dispose:W}}function IH(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function XZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function HZ(){let J=[],Q=0,Z=[],$=[],W=[];function Y(){Q=0,Z.length=0,$.length=0,W.length=0}function X(U,F,V,N,R,E){let O=J[Q];if(O===void 0)O={id:U.id,object:U,geometry:F,material:V,groupOrder:N,renderOrder:U.renderOrder,z:R,group:E},J[Q]=O;else O.id=U.id,O.object=U,O.geometry=F,O.material=V,O.groupOrder=N,O.renderOrder=U.renderOrder,O.z=R,O.group=E;return Q++,O}function H(U,F,V,N,R,E){let O=X(U,F,V,N,R,E);if(V.transmission>0)$.push(O);else if(V.transparent===!0)W.push(O);else Z.push(O)}function q(U,F,V,N,R,E){let O=X(U,F,V,N,R,E);if(V.transmission>0)$.unshift(O);else if(V.transparent===!0)W.unshift(O);else Z.unshift(O)}function K(U,F){if(Z.length>1)Z.sort(U||IH);if($.length>1)$.sort(F||XZ);if(W.length>1)W.sort(F||XZ)}function G(){for(let U=Q,F=J.length;U<F;U++){let V=J[U];if(V.id===null)break;V.id=null,V.object=null,V.geometry=null,V.material=null,V.group=null}}return{opaque:Z,transmissive:$,transparent:W,init:Y,push:H,unshift:q,finish:G,sort:K}}function AH(){let J=new WeakMap;function Q($,W){let Y=J.get($),X;if(Y===void 0)X=new HZ,J.set($,[X]);else if(W>=Y.length)X=new HZ,Y.push(X);else X=Y[W];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function PH(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={direction:new P,color:new N0};break;case"SpotLight":Z={position:new P,direction:new P,color:new N0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new P,color:new N0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new P,skyColor:new N0,groundColor:new N0};break;case"RectAreaLight":Z={color:new N0,position:new P,halfWidth:new P,halfHeight:new P};break}return J[Q.id]=Z,Z}}}function TH(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var SH=0;function jH(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function yH(J){let Q=new PH,Z=TH(),$={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let K=0;K<9;K++)$.probe.push(new P);let W=new P,Y=new j0,X=new j0;function H(K){let G=0,U=0,F=0;for(let D=0;D<9;D++)$.probe[D].set(0,0,0);let V=0,N=0,R=0,E=0,O=0,M=0,C=0,I=0,y=0,L=0,S=0;K.sort(jH);for(let D=0,k=K.length;D<k;D++){let j=K[D],u=j.color,n=j.intensity,d=j.distance,s=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)G+=u.r*n,U+=u.g*n,F+=u.b*n;else if(j.isLightProbe){for(let l=0;l<9;l++)$.probe[l].addScaledVector(j.sh.coefficients[l],n);S++}else if(j.isDirectionalLight){let l=Q.get(j);if(l.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let e=j.shadow,m=Z.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,$.directionalShadow[V]=m,$.directionalShadowMap[V]=s,$.directionalShadowMatrix[V]=j.shadow.matrix,M++}$.directional[V]=l,V++}else if(j.isSpotLight){let l=Q.get(j);l.position.setFromMatrixPosition(j.matrixWorld),l.color.copy(u).multiplyScalar(n),l.distance=d,l.coneCos=Math.cos(j.angle),l.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),l.decay=j.decay,$.spot[R]=l;let e=j.shadow;if(j.map){if($.spotLightMap[y]=j.map,y++,e.updateMatrices(j),j.castShadow)L++}if($.spotLightMatrix[R]=e.matrix,j.castShadow){let m=Z.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,$.spotShadow[R]=m,$.spotShadowMap[R]=s,I++}R++}else if(j.isRectAreaLight){let l=Q.get(j);l.color.copy(u).multiplyScalar(n),l.halfWidth.set(j.width*0.5,0,0),l.halfHeight.set(0,j.height*0.5,0),$.rectArea[E]=l,E++}else if(j.isPointLight){let l=Q.get(j);if(l.color.copy(j.color).multiplyScalar(j.intensity),l.distance=j.distance,l.decay=j.decay,j.castShadow){let e=j.shadow,m=Z.get(j);m.shadowIntensity=e.intensity,m.shadowBias=e.bias,m.shadowNormalBias=e.normalBias,m.shadowRadius=e.radius,m.shadowMapSize=e.mapSize,m.shadowCameraNear=e.camera.near,m.shadowCameraFar=e.camera.far,$.pointShadow[N]=m,$.pointShadowMap[N]=s,$.pointShadowMatrix[N]=j.shadow.matrix,C++}$.point[N]=l,N++}else if(j.isHemisphereLight){let l=Q.get(j);l.skyColor.copy(j.color).multiplyScalar(n),l.groundColor.copy(j.groundColor).multiplyScalar(n),$.hemi[O]=l,O++}}if(E>0)if(J.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=H0.LTC_FLOAT_1,$.rectAreaLTC2=H0.LTC_FLOAT_2;else $.rectAreaLTC1=H0.LTC_HALF_1,$.rectAreaLTC2=H0.LTC_HALF_2;$.ambient[0]=G,$.ambient[1]=U,$.ambient[2]=F;let b=$.hash;if(b.directionalLength!==V||b.pointLength!==N||b.spotLength!==R||b.rectAreaLength!==E||b.hemiLength!==O||b.numDirectionalShadows!==M||b.numPointShadows!==C||b.numSpotShadows!==I||b.numSpotMaps!==y||b.numLightProbes!==S)$.directional.length=V,$.spot.length=R,$.rectArea.length=E,$.point.length=N,$.hemi.length=O,$.directionalShadow.length=M,$.directionalShadowMap.length=M,$.pointShadow.length=C,$.pointShadowMap.length=C,$.spotShadow.length=I,$.spotShadowMap.length=I,$.directionalShadowMatrix.length=M,$.pointShadowMatrix.length=C,$.spotLightMatrix.length=I+y-L,$.spotLightMap.length=y,$.numSpotLightShadowsWithMaps=L,$.numLightProbes=S,b.directionalLength=V,b.pointLength=N,b.spotLength=R,b.rectAreaLength=E,b.hemiLength=O,b.numDirectionalShadows=M,b.numPointShadows=C,b.numSpotShadows=I,b.numSpotMaps=y,b.numLightProbes=S,$.version=SH++}function q(K,G){let U=0,F=0,V=0,N=0,R=0,E=G.matrixWorldInverse;for(let O=0,M=K.length;O<M;O++){let C=K[O];if(C.isDirectionalLight){let I=$.directional[U];I.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(E),U++}else if(C.isSpotLight){let I=$.spot[V];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(E),I.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(E),V++}else if(C.isRectAreaLight){let I=$.rectArea[N];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(E),X.identity(),Y.copy(C.matrixWorld),Y.premultiply(E),X.extractRotation(Y),I.halfWidth.set(C.width*0.5,0,0),I.halfHeight.set(0,C.height*0.5,0),I.halfWidth.applyMatrix4(X),I.halfHeight.applyMatrix4(X),N++}else if(C.isPointLight){let I=$.point[F];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(E),F++}else if(C.isHemisphereLight){let I=$.hemi[R];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(E),R++}}}return{setup:H,setupView:q,state:$}}function qZ(J){let Q=new yH(J),Z=[],$=[];function W(G){K.camera=G,Z.length=0,$.length=0}function Y(G){Z.push(G)}function X(G){$.push(G)}function H(){Q.setup(Z)}function q(G){Q.setupView(Z,G)}let K={lightsArray:Z,shadowsArray:$,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:K,setupLights:H,setupLightsView:q,pushLight:Y,pushShadow:X}}function vH(J){let Q=new WeakMap;function Z(W,Y=0){let X=Q.get(W),H;if(X===void 0)H=new qZ(J),Q.set(W,[H]);else if(Y>=X.length)H=new qZ(J),X.push(H);else H=X[Y];return H}function $(){Q=new WeakMap}return{get:Z,dispose:$}}class H$ extends C5{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class q$ extends C5{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var fH=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xH=`uniform sampler2D shadow_pass;
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
}`;function hH(J,Q,Z){let $=new G7,W=new M0,Y=new M0,X=new e0,H=new H$({depthPacking:3201}),q=new q$,K={},G=Z.maxTextureSize,U={[0]:1,[1]:0,[2]:2},F=new w6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new M0},radius:{value:4}},vertexShader:fH,fragmentShader:xH}),V=F.clone();V.defines.HORIZONTAL_PASS=1;let N=new G5;N.setAttribute("position",new K5(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let R=new d0(N,F),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let O=this.type;this.render=function(L,S,b){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(L.length===0)return;let D=J.getRenderTarget(),k=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),u=J.state;u.setBlending(0),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);let n=O!==3&&this.type===3,d=O===3&&this.type!==3;for(let s=0,l=L.length;s<l;s++){let e=L[s],m=e.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",e,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let K0=m.getFrameExtents();if(W.multiply(K0),Y.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)Y.x=Math.floor(G/K0.x),W.x=Y.x*K0.x,m.mapSize.x=Y.x;if(W.y>G)Y.y=Math.floor(G/K0.y),W.y=Y.y*K0.y,m.mapSize.y=Y.y}if(m.map===null||n===!0||d===!0){let C0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(m.map!==null)m.map.dispose();m.map=new m6(W.x,W.y,C0),m.map.texture.name=e.name+".shadowMap",m.camera.updateProjectionMatrix()}J.setRenderTarget(m.map),J.clear();let F0=m.getViewportCount();for(let C0=0;C0<F0;C0++){let x0=m.getViewport(C0);X.set(Y.x*x0.x,Y.y*x0.y,Y.x*x0.z,Y.y*x0.w),u.viewport(X),m.updateMatrices(e,C0),$=m.getFrustum(),I(S,b,m.camera,e,this.type)}if(m.isPointLightShadow!==!0&&this.type===3)M(m,b);m.needsUpdate=!1}O=this.type,E.needsUpdate=!1,J.setRenderTarget(D,k,j)};function M(L,S){let b=Q.update(R);if(F.defines.VSM_SAMPLES!==L.blurSamples)F.defines.VSM_SAMPLES=L.blurSamples,V.defines.VSM_SAMPLES=L.blurSamples,F.needsUpdate=!0,V.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new m6(W.x,W.y);F.uniforms.shadow_pass.value=L.map.texture,F.uniforms.resolution.value=L.mapSize,F.uniforms.radius.value=L.radius,J.setRenderTarget(L.mapPass),J.clear(),J.renderBufferDirect(S,null,b,F,R,null),V.uniforms.shadow_pass.value=L.mapPass.texture,V.uniforms.resolution.value=L.mapSize,V.uniforms.radius.value=L.radius,J.setRenderTarget(L.map),J.clear(),J.renderBufferDirect(S,null,b,V,R,null)}function C(L,S,b,D){let k=null,j=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)k=j;else if(k=b.isPointLight===!0?q:H,J.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let u=k.uuid,n=S.uuid,d=K[u];if(d===void 0)d={},K[u]=d;let s=d[n];if(s===void 0)s=k.clone(),d[n]=s,S.addEventListener("dispose",y);k=s}if(k.visible=S.visible,k.wireframe=S.wireframe,D===3)k.side=S.shadowSide!==null?S.shadowSide:S.side;else k.side=S.shadowSide!==null?S.shadowSide:U[S.side];if(k.alphaMap=S.alphaMap,k.alphaTest=S.alphaTest,k.map=S.map,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let u=J.properties.get(k);u.light=b}return k}function I(L,S,b,D,k){if(L.visible===!1)return;if(L.layers.test(S.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&k===3)&&(!L.frustumCulled||$.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);let n=Q.update(L),d=L.material;if(Array.isArray(d)){let s=n.groups;for(let l=0,e=s.length;l<e;l++){let m=s[l],K0=d[m.materialIndex];if(K0&&K0.visible){let F0=C(L,K0,D,k);L.onBeforeShadow(J,L,S,b,n,F0,m),J.renderBufferDirect(b,null,n,F0,L,m),L.onAfterShadow(J,L,S,b,n,F0,m)}}}else if(d.visible){let s=C(L,d,D,k);L.onBeforeShadow(J,L,S,b,n,s,null),J.renderBufferDirect(b,null,n,s,L,null),L.onAfterShadow(J,L,S,b,n,s,null)}}}let u=L.children;for(let n=0,d=u.length;n<d;n++)I(u[n],S,b,D,k)}function y(L){L.target.removeEventListener("dispose",y);for(let b in K){let D=K[b],k=L.target.uuid;if(k in D)D[k].dispose(),delete D[k]}}}function bH(J){function Q(){let _=!1,o=new e0,p=null,c=new e0(0,0,0,0);return{setMask:function(Q0){if(p!==Q0&&!_)J.colorMask(Q0,Q0,Q0,Q0),p=Q0},setLocked:function(Q0){_=Q0},setClear:function(Q0,O0,n0,X5,U5){if(U5===!0)Q0*=X5,O0*=X5,n0*=X5;if(o.set(Q0,O0,n0,X5),c.equals(o)===!1)J.clearColor(Q0,O0,n0,X5),c.copy(o)},reset:function(){_=!1,p=null,c.set(-1,0,0,0)}}}function Z(){let _=!1,o=null,p=null,c=null;return{setTest:function(Q0){if(Q0)k0(J.DEPTH_TEST);else G0(J.DEPTH_TEST)},setMask:function(Q0){if(o!==Q0&&!_)J.depthMask(Q0),o=Q0},setFunc:function(Q0){if(p!==Q0){switch(Q0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}p=Q0}},setLocked:function(Q0){_=Q0},setClear:function(Q0){if(c!==Q0)J.clearDepth(Q0),c=Q0},reset:function(){_=!1,o=null,p=null,c=null}}}function $(){let _=!1,o=null,p=null,c=null,Q0=null,O0=null,n0=null,X5=null,U5=null;return{setTest:function(b0){if(!_)if(b0)k0(J.STENCIL_TEST);else G0(J.STENCIL_TEST)},setMask:function(b0){if(o!==b0&&!_)J.stencilMask(b0),o=b0},setFunc:function(b0,V5,_5){if(p!==b0||c!==V5||Q0!==_5)J.stencilFunc(b0,V5,_5),p=b0,c=V5,Q0=_5},setOp:function(b0,V5,_5){if(O0!==b0||n0!==V5||X5!==_5)J.stencilOp(b0,V5,_5),O0=b0,n0=V5,X5=_5},setLocked:function(b0){_=b0},setClear:function(b0){if(U5!==b0)J.clearStencil(b0),U5=b0},reset:function(){_=!1,o=null,p=null,c=null,Q0=null,O0=null,n0=null,X5=null,U5=null}}}let W=new Q,Y=new Z,X=new $,H=new WeakMap,q=new WeakMap,K={},G={},U=new WeakMap,F=[],V=null,N=!1,R=null,E=null,O=null,M=null,C=null,I=null,y=null,L=new N0(0,0,0),S=0,b=!1,D=null,k=null,j=null,u=null,n=null,d=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),s=!1,l=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)l=parseFloat(/^WebGL (\d)/.exec(e)[1]),s=l>=1;else if(e.indexOf("OpenGL ES")!==-1)l=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),s=l>=2;let m=null,K0={},F0=J.getParameter(J.SCISSOR_BOX),C0=J.getParameter(J.VIEWPORT),x0=new e0().fromArray(F0),i=new e0().fromArray(C0);function $0(_,o,p,c){let Q0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(_,O0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let n0=0;n0<p;n0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(o,0,J.RGBA,1,1,c,0,J.RGBA,J.UNSIGNED_BYTE,Q0);else J.texImage2D(o+n0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,Q0);return O0}let U0={};U0[J.TEXTURE_2D]=$0(J.TEXTURE_2D,J.TEXTURE_2D,1),U0[J.TEXTURE_CUBE_MAP]=$0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),U0[J.TEXTURE_2D_ARRAY]=$0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),U0[J.TEXTURE_3D]=$0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),k0(J.DEPTH_TEST),Y.setFunc(3),L0(!1),c0(1),k0(J.CULL_FACE),p0(0);function k0(_){if(K[_]!==!0)J.enable(_),K[_]=!0}function G0(_){if(K[_]!==!1)J.disable(_),K[_]=!1}function P0(_,o){if(G[_]!==o){if(J.bindFramebuffer(_,o),G[_]=o,_===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=o;if(_===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=o;return!0}return!1}function J5(_,o){let p=F,c=!1;if(_){if(p=U.get(o),p===void 0)p=[],U.set(o,p);let Q0=_.textures;if(p.length!==Q0.length||p[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,n0=Q0.length;O0<n0;O0++)p[O0]=J.COLOR_ATTACHMENT0+O0;p.length=Q0.length,c=!0}}else if(p[0]!==J.BACK)p[0]=J.BACK,c=!0;if(c)J.drawBuffers(p)}function h0(_){if(V!==_)return J.useProgram(_),V=_,!0;return!1}let T={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};T[103]=J.MIN,T[104]=J.MAX;let Y5={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function p0(_,o,p,c,Q0,O0,n0,X5,U5,b0){if(_===0){if(N===!0)G0(J.BLEND),N=!1;return}if(N===!1)k0(J.BLEND),N=!0;if(_!==5){if(_!==R||b0!==b){if(E!==100||C!==100)J.blendEquation(J.FUNC_ADD),E=100,C=100;if(b0)switch(_){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}O=null,M=null,I=null,y=null,L.set(0,0,0),S=0,R=_,b=b0}return}if(Q0=Q0||o,O0=O0||p,n0=n0||c,o!==E||Q0!==C)J.blendEquationSeparate(T[o],T[Q0]),E=o,C=Q0;if(p!==O||c!==M||O0!==I||n0!==y)J.blendFuncSeparate(Y5[p],Y5[c],Y5[O0],Y5[n0]),O=p,M=c,I=O0,y=n0;if(X5.equals(L)===!1||U5!==S)J.blendColor(X5.r,X5.g,X5.b,U5),L.copy(X5),S=U5;R=_,b=!1}function Q5(_,o){_.side===2?G0(J.CULL_FACE):k0(J.CULL_FACE);let p=_.side===1;if(o)p=!p;L0(p),_.blending===1&&_.transparent===!1?p0(0):p0(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),Y.setFunc(_.depthFunc),Y.setTest(_.depthTest),Y.setMask(_.depthWrite),W.setMask(_.colorWrite);let c=_.stencilWrite;if(X.setTest(c),c)X.setMask(_.stencilWriteMask),X.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),X.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);S0(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?k0(J.SAMPLE_ALPHA_TO_COVERAGE):G0(J.SAMPLE_ALPHA_TO_COVERAGE)}function L0(_){if(D!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);D=_}}function c0(_){if(_!==0){if(k0(J.CULL_FACE),_!==k)if(_===1)J.cullFace(J.BACK);else if(_===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else G0(J.CULL_FACE);k=_}function T0(_){if(_!==j){if(s)J.lineWidth(_);j=_}}function S0(_,o,p){if(_){if(k0(J.POLYGON_OFFSET_FILL),u!==o||n!==p)J.polygonOffset(o,p),u=o,n=p}else G0(J.POLYGON_OFFSET_FILL)}function $5(_){if(_)k0(J.SCISSOR_TEST);else G0(J.SCISSOR_TEST)}function w(_){if(_===void 0)_=J.TEXTURE0+d-1;if(m!==_)J.activeTexture(_),m=_}function B(_,o,p){if(p===void 0)if(m===null)p=J.TEXTURE0+d-1;else p=m;let c=K0[p];if(c===void 0)c={type:void 0,texture:void 0},K0[p]=c;if(c.type!==_||c.texture!==o){if(m!==p)J.activeTexture(p),m=p;J.bindTexture(_,o||U0[_]),c.type=_,c.texture=o}}function g(){let _=K0[m];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function a(){try{J.compressedTexImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function r(){try{J.compressedTexImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function t(){try{J.texSubImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function z0(){try{J.texSubImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function W0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Y0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function y0(){try{J.texStorage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J0(){try{J.texStorage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function R0(){try{J.texImage2D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function m0(){try{J.texImage3D.apply(J,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _0(_){if(x0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),x0.copy(_)}function X0(_){if(i.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),i.copy(_)}function I0(_,o){let p=q.get(o);if(p===void 0)p=new WeakMap,q.set(o,p);let c=p.get(_);if(c===void 0)c=J.getUniformBlockIndex(o,_.name),p.set(_,c)}function l0(_,o){let c=q.get(o).get(_);if(H.get(o)!==c)J.uniformBlockBinding(o,c,_.__bindingPointIndex),H.set(o,c)}function A(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),K={},m=null,K0={},G={},U=new WeakMap,F=[],V=null,N=!1,R=null,E=null,O=null,M=null,C=null,I=null,y=null,L=new N0(0,0,0),S=0,b=!1,D=null,k=null,j=null,u=null,n=null,x0.set(0,0,J.canvas.width,J.canvas.height),i.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:k0,disable:G0,bindFramebuffer:P0,drawBuffers:J5,useProgram:h0,setBlending:p0,setMaterial:Q5,setFlipSided:L0,setCullFace:c0,setLineWidth:T0,setPolygonOffset:S0,setScissorTest:$5,activeTexture:w,bindTexture:B,unbindTexture:g,compressedTexImage2D:a,compressedTexImage3D:r,texImage2D:R0,texImage3D:m0,updateUBOMapping:I0,uniformBlockBinding:l0,texStorage2D:y0,texStorage3D:J0,texSubImage2D:t,texSubImage3D:z0,compressedTexSubImage2D:W0,compressedTexSubImage3D:Y0,scissor:_0,viewport:X0,reset:A}}function KZ(J,Q,Z,$){let W=gH($);switch(Z){case 1021:return J*Q;case 1024:return J*Q;case 1025:return J*Q*2;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function gH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}function pH(J,Q,Z,$,W,Y,X){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,q=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),K=new M0,G=new WeakMap,U,F=new WeakMap,V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function N(w,B){return V?new OffscreenCanvas(w,B):U9("canvas")}function R(w,B,g){let a=1,r=$5(w);if(r.width>g||r.height>g)a=g/Math.max(r.width,r.height);if(a<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let t=Math.floor(a*r.width),z0=Math.floor(a*r.height);if(U===void 0)U=N(t,z0);let W0=B?N(t,z0):U;return W0.width=t,W0.height=z0,W0.getContext("2d").drawImage(w,0,0,t,z0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+t+"x"+z0+")."),W0}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return w}return w}function E(w){return w.generateMipmaps&&w.minFilter!==1003&&w.minFilter!==1006}function O(w){J.generateMipmap(w)}function M(w,B,g,a,r=!1){if(w!==null){if(J[w]!==void 0)return J[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let t=B;if(B===J.RED){if(g===J.FLOAT)t=J.R32F;if(g===J.HALF_FLOAT)t=J.R16F;if(g===J.UNSIGNED_BYTE)t=J.R8}if(B===J.RED_INTEGER){if(g===J.UNSIGNED_BYTE)t=J.R8UI;if(g===J.UNSIGNED_SHORT)t=J.R16UI;if(g===J.UNSIGNED_INT)t=J.R32UI;if(g===J.BYTE)t=J.R8I;if(g===J.SHORT)t=J.R16I;if(g===J.INT)t=J.R32I}if(B===J.RG){if(g===J.FLOAT)t=J.RG32F;if(g===J.HALF_FLOAT)t=J.RG16F;if(g===J.UNSIGNED_BYTE)t=J.RG8}if(B===J.RG_INTEGER){if(g===J.UNSIGNED_BYTE)t=J.RG8UI;if(g===J.UNSIGNED_SHORT)t=J.RG16UI;if(g===J.UNSIGNED_INT)t=J.RG32UI;if(g===J.BYTE)t=J.RG8I;if(g===J.SHORT)t=J.RG16I;if(g===J.INT)t=J.RG32I}if(B===J.RGB){if(g===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5}if(B===J.RGBA){let z0=r?"linear":s0.getTransfer(a);if(g===J.FLOAT)t=J.RGBA32F;if(g===J.HALF_FLOAT)t=J.RGBA16F;if(g===J.UNSIGNED_BYTE)t=z0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(g===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(g===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function C(w,B){let g;if(w){if(B===null||B===1014||B===1020)g=J.DEPTH24_STENCIL8;else if(B===1015)g=J.DEPTH32F_STENCIL8;else if(B===1012)g=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(B===null||B===1014||B===1020)g=J.DEPTH_COMPONENT24;else if(B===1015)g=J.DEPTH_COMPONENT32F;else if(B===1012)g=J.DEPTH_COMPONENT16;return g}function I(w,B){if(E(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006)return Math.log2(Math.max(B.width,B.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return B.mipmaps.length;else return 1}function y(w){let B=w.target;if(B.removeEventListener("dispose",y),S(B),B.isVideoTexture)G.delete(B)}function L(w){let B=w.target;B.removeEventListener("dispose",L),D(B)}function S(w){let B=$.get(w);if(B.__webglInit===void 0)return;let g=w.source,a=F.get(g);if(a){let r=a[B.__cacheKey];if(r.usedTimes--,r.usedTimes===0)b(w);if(Object.keys(a).length===0)F.delete(g)}$.remove(w)}function b(w){let B=$.get(w);J.deleteTexture(B.__webglTexture);let g=w.source,a=F.get(g);delete a[B.__cacheKey],X.memory.textures--}function D(w){let B=$.get(w);if(w.depthTexture)w.depthTexture.dispose();if(w.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(B.__webglFramebuffer[a]))for(let r=0;r<B.__webglFramebuffer[a].length;r++)J.deleteFramebuffer(B.__webglFramebuffer[a][r]);else J.deleteFramebuffer(B.__webglFramebuffer[a]);if(B.__webglDepthbuffer)J.deleteRenderbuffer(B.__webglDepthbuffer[a])}else{if(Array.isArray(B.__webglFramebuffer))for(let a=0;a<B.__webglFramebuffer.length;a++)J.deleteFramebuffer(B.__webglFramebuffer[a]);else J.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer)J.deleteRenderbuffer(B.__webglDepthbuffer);if(B.__webglMultisampledFramebuffer)J.deleteFramebuffer(B.__webglMultisampledFramebuffer);if(B.__webglColorRenderbuffer){for(let a=0;a<B.__webglColorRenderbuffer.length;a++)if(B.__webglColorRenderbuffer[a])J.deleteRenderbuffer(B.__webglColorRenderbuffer[a])}if(B.__webglDepthRenderbuffer)J.deleteRenderbuffer(B.__webglDepthRenderbuffer)}let g=w.textures;for(let a=0,r=g.length;a<r;a++){let t=$.get(g[a]);if(t.__webglTexture)J.deleteTexture(t.__webglTexture),X.memory.textures--;$.remove(g[a])}$.remove(w)}let k=0;function j(){k=0}function u(){let w=k;if(w>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+W.maxTextures);return k+=1,w}function n(w){let B=[];return B.push(w.wrapS),B.push(w.wrapT),B.push(w.wrapR||0),B.push(w.magFilter),B.push(w.minFilter),B.push(w.anisotropy),B.push(w.internalFormat),B.push(w.format),B.push(w.type),B.push(w.generateMipmaps),B.push(w.premultiplyAlpha),B.push(w.flipY),B.push(w.unpackAlignment),B.push(w.colorSpace),B.join()}function d(w,B){let g=$.get(w);if(w.isVideoTexture)T0(w);if(w.isRenderTargetTexture===!1&&w.version>0&&g.__version!==w.version){let a=w.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{i(g,w,B);return}}Z.bindTexture(J.TEXTURE_2D,g.__webglTexture,J.TEXTURE0+B)}function s(w,B){let g=$.get(w);if(w.version>0&&g.__version!==w.version){i(g,w,B);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,g.__webglTexture,J.TEXTURE0+B)}function l(w,B){let g=$.get(w);if(w.version>0&&g.__version!==w.version){i(g,w,B);return}Z.bindTexture(J.TEXTURE_3D,g.__webglTexture,J.TEXTURE0+B)}function e(w,B){let g=$.get(w);if(w.version>0&&g.__version!==w.version){$0(g,w,B);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+B)}let m={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},K0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},F0={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function C0(w,B){if(B.type===1015&&Q.has("OES_texture_float_linear")===!1&&(B.magFilter===1006||B.magFilter===1007||B.magFilter===1005||B.magFilter===1008||B.minFilter===1006||B.minFilter===1007||B.minFilter===1005||B.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(w,J.TEXTURE_WRAP_S,m[B.wrapS]),J.texParameteri(w,J.TEXTURE_WRAP_T,m[B.wrapT]),w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texParameteri(w,J.TEXTURE_WRAP_R,m[B.wrapR]);if(J.texParameteri(w,J.TEXTURE_MAG_FILTER,K0[B.magFilter]),J.texParameteri(w,J.TEXTURE_MIN_FILTER,K0[B.minFilter]),B.compareFunction)J.texParameteri(w,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(w,J.TEXTURE_COMPARE_FUNC,F0[B.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===1003)return;if(B.minFilter!==1005&&B.minFilter!==1008)return;if(B.type===1015&&Q.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||$.get(B).__currentAnisotropy){let g=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(w,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,W.getMaxAnisotropy())),$.get(B).__currentAnisotropy=B.anisotropy}}}function x0(w,B){let g=!1;if(w.__webglInit===void 0)w.__webglInit=!0,B.addEventListener("dispose",y);let a=B.source,r=F.get(a);if(r===void 0)r={},F.set(a,r);let t=n(B);if(t!==w.__cacheKey){if(r[t]===void 0)r[t]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,g=!0;r[t].usedTimes++;let z0=r[w.__cacheKey];if(z0!==void 0){if(r[w.__cacheKey].usedTimes--,z0.usedTimes===0)b(B)}w.__cacheKey=t,w.__webglTexture=r[t].texture}return g}function i(w,B,g){let a=J.TEXTURE_2D;if(B.isDataArrayTexture||B.isCompressedArrayTexture)a=J.TEXTURE_2D_ARRAY;if(B.isData3DTexture)a=J.TEXTURE_3D;let r=x0(w,B),t=B.source;Z.bindTexture(a,w.__webglTexture,J.TEXTURE0+g);let z0=$.get(t);if(t.version!==z0.__version||r===!0){Z.activeTexture(J.TEXTURE0+g);let W0=s0.getPrimaries(s0.workingColorSpace),Y0=B.colorSpace===""?null:s0.getPrimaries(B.colorSpace),y0=B.colorSpace===""||W0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,B.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,B.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,y0);let J0=R(B.image,!1,W.maxTextureSize);J0=S0(B,J0);let R0=Y.convert(B.format,B.colorSpace),m0=Y.convert(B.type),_0=M(B.internalFormat,R0,m0,B.colorSpace,B.isVideoTexture);C0(a,B);let X0,I0=B.mipmaps,l0=B.isVideoTexture!==!0,A=z0.__version===void 0||r===!0,_=t.dataReady,o=I(B,J0);if(B.isDepthTexture){if(_0=C(B.format===1027,B.type),A)if(l0)Z.texStorage2D(J.TEXTURE_2D,1,_0,J0.width,J0.height);else Z.texImage2D(J.TEXTURE_2D,0,_0,J0.width,J0.height,0,R0,m0,null)}else if(B.isDataTexture)if(I0.length>0){if(l0&&A)Z.texStorage2D(J.TEXTURE_2D,o,_0,I0[0].width,I0[0].height);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],l0){if(_)Z.texSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,R0,m0,X0.data)}else Z.texImage2D(J.TEXTURE_2D,p,_0,X0.width,X0.height,0,R0,m0,X0.data);B.generateMipmaps=!1}else if(l0){if(A)Z.texStorage2D(J.TEXTURE_2D,o,_0,J0.width,J0.height);if(_)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,J0.width,J0.height,R0,m0,J0.data)}else Z.texImage2D(J.TEXTURE_2D,0,_0,J0.width,J0.height,0,R0,m0,J0.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){if(l0&&A)Z.texStorage3D(J.TEXTURE_2D_ARRAY,o,_0,I0[0].width,I0[0].height,J0.depth);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],B.format!==1023)if(R0!==null)if(l0){if(_)if(B.layerUpdates.size>0){let Q0=KZ(X0.width,X0.height,B.format,B.type);for(let O0 of B.layerUpdates){let n0=X0.data.subarray(O0*Q0/X0.data.BYTES_PER_ELEMENT,(O0+1)*Q0/X0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,O0,X0.width,X0.height,1,R0,n0,0,0)}B.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,0,X0.width,X0.height,J0.depth,R0,X0.data,0,0)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,p,_0,X0.width,X0.height,J0.depth,0,X0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(_)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,p,0,0,0,X0.width,X0.height,J0.depth,R0,m0,X0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,p,_0,X0.width,X0.height,J0.depth,0,R0,m0,X0.data)}else{if(l0&&A)Z.texStorage2D(J.TEXTURE_2D,o,_0,I0[0].width,I0[0].height);for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],B.format!==1023)if(R0!==null)if(l0){if(_)Z.compressedTexSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,R0,X0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,p,_0,X0.width,X0.height,0,X0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(_)Z.texSubImage2D(J.TEXTURE_2D,p,0,0,X0.width,X0.height,R0,m0,X0.data)}else Z.texImage2D(J.TEXTURE_2D,p,_0,X0.width,X0.height,0,R0,m0,X0.data)}else if(B.isDataArrayTexture)if(l0){if(A)Z.texStorage3D(J.TEXTURE_2D_ARRAY,o,_0,J0.width,J0.height,J0.depth);if(_)if(B.layerUpdates.size>0){let p=KZ(J0.width,J0.height,B.format,B.type);for(let c of B.layerUpdates){let Q0=J0.data.subarray(c*p/J0.data.BYTES_PER_ELEMENT,(c+1)*p/J0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,c,J0.width,J0.height,1,R0,m0,Q0)}B.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,R0,m0,J0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,_0,J0.width,J0.height,J0.depth,0,R0,m0,J0.data);else if(B.isData3DTexture)if(l0){if(A)Z.texStorage3D(J.TEXTURE_3D,o,_0,J0.width,J0.height,J0.depth);if(_)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,R0,m0,J0.data)}else Z.texImage3D(J.TEXTURE_3D,0,_0,J0.width,J0.height,J0.depth,0,R0,m0,J0.data);else if(B.isFramebufferTexture){if(A)if(l0)Z.texStorage2D(J.TEXTURE_2D,o,_0,J0.width,J0.height);else{let{width:p,height:c}=J0;for(let Q0=0;Q0<o;Q0++)Z.texImage2D(J.TEXTURE_2D,Q0,_0,p,c,0,R0,m0,null),p>>=1,c>>=1}}else if(I0.length>0){if(l0&&A){let p=$5(I0[0]);Z.texStorage2D(J.TEXTURE_2D,o,_0,p.width,p.height)}for(let p=0,c=I0.length;p<c;p++)if(X0=I0[p],l0){if(_)Z.texSubImage2D(J.TEXTURE_2D,p,0,0,R0,m0,X0)}else Z.texImage2D(J.TEXTURE_2D,p,_0,R0,m0,X0);B.generateMipmaps=!1}else if(l0){if(A){let p=$5(J0);Z.texStorage2D(J.TEXTURE_2D,o,_0,p.width,p.height)}if(_)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,R0,m0,J0)}else Z.texImage2D(J.TEXTURE_2D,0,_0,R0,m0,J0);if(E(B))O(a);if(z0.__version=t.version,B.onUpdate)B.onUpdate(B)}w.__version=B.version}function $0(w,B,g){if(B.image.length!==6)return;let a=x0(w,B),r=B.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,w.__webglTexture,J.TEXTURE0+g);let t=$.get(r);if(r.version!==t.__version||a===!0){Z.activeTexture(J.TEXTURE0+g);let z0=s0.getPrimaries(s0.workingColorSpace),W0=B.colorSpace===""?null:s0.getPrimaries(B.colorSpace),Y0=B.colorSpace===""||z0===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,B.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,B.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y0);let y0=B.isCompressedTexture||B.image[0].isCompressedTexture,J0=B.image[0]&&B.image[0].isDataTexture,R0=[];for(let c=0;c<6;c++){if(!y0&&!J0)R0[c]=R(B.image[c],!0,W.maxCubemapSize);else R0[c]=J0?B.image[c].image:B.image[c];R0[c]=S0(B,R0[c])}let m0=R0[0],_0=Y.convert(B.format,B.colorSpace),X0=Y.convert(B.type),I0=M(B.internalFormat,_0,X0,B.colorSpace),l0=B.isVideoTexture!==!0,A=t.__version===void 0||a===!0,_=r.dataReady,o=I(B,m0);C0(J.TEXTURE_CUBE_MAP,B);let p;if(y0){if(l0&&A)Z.texStorage2D(J.TEXTURE_CUBE_MAP,o,I0,m0.width,m0.height);for(let c=0;c<6;c++){p=R0[c].mipmaps;for(let Q0=0;Q0<p.length;Q0++){let O0=p[Q0];if(B.format!==1023)if(_0!==null)if(l0){if(_)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,0,0,O0.width,O0.height,_0,O0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,I0,O0.width,O0.height,0,O0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(l0){if(_)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,0,0,O0.width,O0.height,_0,X0,O0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0,I0,O0.width,O0.height,0,_0,X0,O0.data)}}}else{if(p=B.mipmaps,l0&&A){if(p.length>0)o++;let c=$5(R0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,o,I0,c.width,c.height)}for(let c=0;c<6;c++)if(J0){if(l0){if(_)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,R0[c].width,R0[c].height,_0,X0,R0[c].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,I0,R0[c].width,R0[c].height,0,_0,X0,R0[c].data);for(let Q0=0;Q0<p.length;Q0++){let n0=p[Q0].image[c].image;if(l0){if(_)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,0,0,n0.width,n0.height,_0,X0,n0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,I0,n0.width,n0.height,0,_0,X0,n0.data)}}else{if(l0){if(_)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,_0,X0,R0[c])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,I0,_0,X0,R0[c]);for(let Q0=0;Q0<p.length;Q0++){let O0=p[Q0];if(l0){if(_)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,0,0,_0,X0,O0.image[c])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+c,Q0+1,I0,_0,X0,O0.image[c])}}}if(E(B))O(J.TEXTURE_CUBE_MAP);if(t.__version=r.version,B.onUpdate)B.onUpdate(B)}w.__version=B.version}function U0(w,B,g,a,r,t){let z0=Y.convert(g.format,g.colorSpace),W0=Y.convert(g.type),Y0=M(g.internalFormat,z0,W0,g.colorSpace);if(!$.get(B).__hasExternalTextures){let J0=Math.max(1,B.width>>t),R0=Math.max(1,B.height>>t);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Z.texImage3D(r,t,Y0,J0,R0,B.depth,0,z0,W0,null);else Z.texImage2D(r,t,Y0,J0,R0,0,z0,W0,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,w),c0(B))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,r,$.get(g).__webglTexture,0,L0(B));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,a,r,$.get(g).__webglTexture,t);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function k0(w,B,g){if(J.bindRenderbuffer(J.RENDERBUFFER,w),B.depthBuffer){let a=B.depthTexture,r=a&&a.isDepthTexture?a.type:null,t=C(B.stencilBuffer,r),z0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=L0(B);if(c0(B))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,W0,t,B.width,B.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,t,B.width,B.height);else J.renderbufferStorage(J.RENDERBUFFER,t,B.width,B.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,z0,J.RENDERBUFFER,w)}else{let a=B.textures;for(let r=0;r<a.length;r++){let t=a[r],z0=Y.convert(t.format,t.colorSpace),W0=Y.convert(t.type),Y0=M(t.internalFormat,z0,W0,t.colorSpace),y0=L0(B);if(g&&c0(B)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,y0,Y0,B.width,B.height);else if(c0(B))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,y0,Y0,B.width,B.height);else J.renderbufferStorage(J.RENDERBUFFER,Y0,B.width,B.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function G0(w,B){if(B&&B.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,w),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!$.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0;d(B.depthTexture,0);let a=$.get(B.depthTexture).__webglTexture,r=L0(B);if(B.depthTexture.format===1026)if(c0(B))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0);else if(B.depthTexture.format===1027)if(c0(B))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0);else throw Error("Unknown depthTexture format")}function P0(w){let B=$.get(w),g=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!B.__autoAllocateDepthBuffer){if(g)throw Error("target.depthTexture not supported in Cube render targets");G0(B.__webglFramebuffer,w)}else if(g){B.__webglDepthbuffer=[];for(let a=0;a<6;a++)Z.bindFramebuffer(J.FRAMEBUFFER,B.__webglFramebuffer[a]),B.__webglDepthbuffer[a]=J.createRenderbuffer(),k0(B.__webglDepthbuffer[a],w,!1)}else Z.bindFramebuffer(J.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer=J.createRenderbuffer(),k0(B.__webglDepthbuffer,w,!1);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function J5(w,B,g){let a=$.get(w);if(B!==void 0)U0(a.__webglFramebuffer,w,w.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(g!==void 0)P0(w)}function h0(w){let B=w.texture,g=$.get(w),a=$.get(B);w.addEventListener("dispose",L);let r=w.textures,t=w.isWebGLCubeRenderTarget===!0,z0=r.length>1;if(!z0){if(a.__webglTexture===void 0)a.__webglTexture=J.createTexture();a.__version=B.version,X.memory.textures++}if(t){g.__webglFramebuffer=[];for(let W0=0;W0<6;W0++)if(B.mipmaps&&B.mipmaps.length>0){g.__webglFramebuffer[W0]=[];for(let Y0=0;Y0<B.mipmaps.length;Y0++)g.__webglFramebuffer[W0][Y0]=J.createFramebuffer()}else g.__webglFramebuffer[W0]=J.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){g.__webglFramebuffer=[];for(let W0=0;W0<B.mipmaps.length;W0++)g.__webglFramebuffer[W0]=J.createFramebuffer()}else g.__webglFramebuffer=J.createFramebuffer();if(z0)for(let W0=0,Y0=r.length;W0<Y0;W0++){let y0=$.get(r[W0]);if(y0.__webglTexture===void 0)y0.__webglTexture=J.createTexture(),X.memory.textures++}if(w.samples>0&&c0(w)===!1){g.__webglMultisampledFramebuffer=J.createFramebuffer(),g.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let W0=0;W0<r.length;W0++){let Y0=r[W0];g.__webglColorRenderbuffer[W0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,g.__webglColorRenderbuffer[W0]);let y0=Y.convert(Y0.format,Y0.colorSpace),J0=Y.convert(Y0.type),R0=M(Y0.internalFormat,y0,J0,Y0.colorSpace,w.isXRRenderTarget===!0),m0=L0(w);J.renderbufferStorageMultisample(J.RENDERBUFFER,m0,R0,w.width,w.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,g.__webglColorRenderbuffer[W0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),w.depthBuffer)g.__webglDepthRenderbuffer=J.createRenderbuffer(),k0(g.__webglDepthRenderbuffer,w,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(t){Z.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),C0(J.TEXTURE_CUBE_MAP,B);for(let W0=0;W0<6;W0++)if(B.mipmaps&&B.mipmaps.length>0)for(let Y0=0;Y0<B.mipmaps.length;Y0++)U0(g.__webglFramebuffer[W0][Y0],w,B,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,Y0);else U0(g.__webglFramebuffer[W0],w,B,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0);if(E(B))O(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(z0){for(let W0=0,Y0=r.length;W0<Y0;W0++){let y0=r[W0],J0=$.get(y0);if(Z.bindTexture(J.TEXTURE_2D,J0.__webglTexture),C0(J.TEXTURE_2D,y0),U0(g.__webglFramebuffer,w,y0,J.COLOR_ATTACHMENT0+W0,J.TEXTURE_2D,0),E(y0))O(J.TEXTURE_2D)}Z.unbindTexture()}else{let W0=J.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)W0=w.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(W0,a.__webglTexture),C0(W0,B),B.mipmaps&&B.mipmaps.length>0)for(let Y0=0;Y0<B.mipmaps.length;Y0++)U0(g.__webglFramebuffer[Y0],w,B,J.COLOR_ATTACHMENT0,W0,Y0);else U0(g.__webglFramebuffer,w,B,J.COLOR_ATTACHMENT0,W0,0);if(E(B))O(W0);Z.unbindTexture()}if(w.depthBuffer)P0(w)}function T(w){let B=w.textures;for(let g=0,a=B.length;g<a;g++){let r=B[g];if(E(r)){let t=w.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,z0=$.get(r).__webglTexture;Z.bindTexture(t,z0),O(t),Z.unbindTexture()}}}let Y5=[],p0=[];function Q5(w){if(w.samples>0){if(c0(w)===!1){let{textures:B,width:g,height:a}=w,r=J.COLOR_BUFFER_BIT,t=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=$.get(w),W0=B.length>1;if(W0)for(let Y0=0;Y0<B.length;Y0++)Z.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,z0.__webglMultisampledFramebuffer),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer);for(let Y0=0;Y0<B.length;Y0++){if(w.resolveDepthBuffer){if(w.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(W0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[Y0]);let y0=$.get(B[Y0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,y0,0)}if(J.blitFramebuffer(0,0,g,a,0,0,g,a,r,J.NEAREST),q===!0){if(Y5.length=0,p0.length=0,Y5.push(J.COLOR_ATTACHMENT0+Y0),w.depthBuffer&&w.resolveDepthBuffer===!1)Y5.push(t),p0.push(t),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,p0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,Y5)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),W0)for(let Y0=0;Y0<B.length;Y0++){Z.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[Y0]);let y0=$.get(B[Y0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.TEXTURE_2D,y0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&q){let B=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[B])}}}function L0(w){return Math.min(W.maxSamples,w.samples)}function c0(w){let B=$.get(w);return w.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function T0(w){let B=X.render.frame;if(G.get(w)!==B)G.set(w,B),w.update()}function S0(w,B){let{colorSpace:g,format:a,type:r}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return B;if(g!=="srgb-linear"&&g!=="")if(s0.getTransfer(g)==="srgb"){if(a!==1023||r!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",g);return B}function $5(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)K.width=w.naturalWidth||w.width,K.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)K.width=w.displayWidth,K.height=w.displayHeight;else K.width=w.width,K.height=w.height;return K}this.allocateTextureUnit=u,this.resetTextureUnits=j,this.setTexture2D=d,this.setTexture2DArray=s,this.setTexture3D=l,this.setTextureCube=e,this.rebindTextures=J5,this.setupRenderTarget=h0,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Q5,this.setupDepthRenderbuffer=P0,this.setupFrameBufferTexture=U0,this.useMultisampledRTT=c0}function uH(J,Q){function Z($,W=""){let Y,X=s0.getTransfer(W);if($===1009)return J.UNSIGNED_BYTE;if($===1017)return J.UNSIGNED_SHORT_4_4_4_4;if($===1018)return J.UNSIGNED_SHORT_5_5_5_1;if($===35902)return J.UNSIGNED_INT_5_9_9_9_REV;if($===1010)return J.BYTE;if($===1011)return J.SHORT;if($===1012)return J.UNSIGNED_SHORT;if($===1013)return J.INT;if($===1014)return J.UNSIGNED_INT;if($===1015)return J.FLOAT;if($===1016)return J.HALF_FLOAT;if($===1021)return J.ALPHA;if($===1022)return J.RGB;if($===1023)return J.RGBA;if($===1024)return J.LUMINANCE;if($===1025)return J.LUMINANCE_ALPHA;if($===1026)return J.DEPTH_COMPONENT;if($===1027)return J.DEPTH_STENCIL;if($===1028)return J.RED;if($===1029)return J.RED_INTEGER;if($===1030)return J.RG;if($===1031)return J.RG_INTEGER;if($===1033)return J.RGBA_INTEGER;if($===33776||$===33777||$===33778||$===33779)if(X==="srgb")if(Y=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Y!==null){if($===33776)return Y.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===33777)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===33778)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===33779)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Y=Q.get("WEBGL_compressed_texture_s3tc"),Y!==null){if($===33776)return Y.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===33777)return Y.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===33778)return Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===33779)return Y.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===35840||$===35841||$===35842||$===35843)if(Y=Q.get("WEBGL_compressed_texture_pvrtc"),Y!==null){if($===35840)return Y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===35841)return Y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===35842)return Y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===35843)return Y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===36196||$===37492||$===37496)if(Y=Q.get("WEBGL_compressed_texture_etc"),Y!==null){if($===36196||$===37492)return X==="srgb"?Y.COMPRESSED_SRGB8_ETC2:Y.COMPRESSED_RGB8_ETC2;if($===37496)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Y.COMPRESSED_RGBA8_ETC2_EAC}else return null;if($===37808||$===37809||$===37810||$===37811||$===37812||$===37813||$===37814||$===37815||$===37816||$===37817||$===37818||$===37819||$===37820||$===37821)if(Y=Q.get("WEBGL_compressed_texture_astc"),Y!==null){if($===37808)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Y.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===37809)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Y.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===37810)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Y.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===37811)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Y.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===37812)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Y.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===37813)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Y.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===37814)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Y.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===37815)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Y.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===37816)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Y.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===37817)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Y.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===37818)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Y.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===37819)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Y.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===37820)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Y.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===37821)return X==="srgb"?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Y.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===36492||$===36494||$===36495)if(Y=Q.get("EXT_texture_compression_bptc"),Y!==null){if($===36492)return X==="srgb"?Y.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Y.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===36494)return Y.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===36495)return Y.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===36283||$===36284||$===36285||$===36286)if(Y=Q.get("EXT_texture_compression_rgtc"),Y!==null){if($===36492)return Y.COMPRESSED_RED_RGTC1_EXT;if($===36284)return Y.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===36285)return Y.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===36286)return Y.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===1020)return J.UNSIGNED_INT_24_8;return J[$]!==void 0?J[$]:null}return{convert:Z}}class K$ extends A5{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class P5 extends Z5{constructor(){super();this.isGroup=!0,this.type="Group"}}var mH={type:"move"};class W7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new P5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new P5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new P5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let $=null,W=null,Y=null,X=this._targetRay,H=this._grip,q=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(q&&J.hand){Y=!0;for(let N of J.hand.values()){let R=Q.getJointPose(N,Z),E=this._getHandJoint(q,N);if(R!==null)E.matrix.fromArray(R.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=R.radius;E.visible=R!==null}let K=q.joints["index-finger-tip"],G=q.joints["thumb-tip"],U=K.position.distanceTo(G.position),F=0.02,V=0.005;if(q.inputState.pinching&&U>F+V)q.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!q.inputState.pinching&&U<=F-V)q.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(X!==null){if($=Q.getPose(J.targetRaySpace,Z),$===null&&W!==null)$=W;if($!==null){if(X.matrix.fromArray($.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,$.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy($.linearVelocity);else X.hasLinearVelocity=!1;if($.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy($.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(mH)}}}if(X!==null)X.visible=$!==null;if(H!==null)H.visible=W!==null;if(q!==null)q.visible=Y!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new P5;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var lH=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dH=`
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

}`;class G${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,Z){if(this.texture===null){let $=new N5,W=J.properties.get($);if(W.__webglTexture=Q.texture,Q.depthNear!=Z.depthNear||Q.depthFar!=Z.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new w6({vertexShader:lH,fragmentShader:dH,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new d0(new d8(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U$ extends I6{constructor(J,Q){super();let Z=this,$=null,W=1,Y=null,X="local-floor",H=1,q=null,K=null,G=null,U=null,F=null,V=null,N=new G$,R=Q.getContextAttributes(),E=null,O=null,M=[],C=[],I=new M0,y=null,L=new A5;L.layers.enable(1),L.viewport=new e0;let S=new A5;S.layers.enable(2),S.viewport=new e0;let b=[L,S],D=new K$;D.layers.enable(1),D.layers.enable(2);let k=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let $0=M[i];if($0===void 0)$0=new W7,M[i]=$0;return $0.getTargetRaySpace()},this.getControllerGrip=function(i){let $0=M[i];if($0===void 0)$0=new W7,M[i]=$0;return $0.getGripSpace()},this.getHand=function(i){let $0=M[i];if($0===void 0)$0=new W7,M[i]=$0;return $0.getHandSpace()};function u(i){let $0=C.indexOf(i.inputSource);if($0===-1)return;let U0=M[$0];if(U0!==void 0)U0.update(i.inputSource,i.frame,q||Y),U0.dispatchEvent({type:i.type,data:i.inputSource})}function n(){$.removeEventListener("select",u),$.removeEventListener("selectstart",u),$.removeEventListener("selectend",u),$.removeEventListener("squeeze",u),$.removeEventListener("squeezestart",u),$.removeEventListener("squeezeend",u),$.removeEventListener("end",n),$.removeEventListener("inputsourceschange",d);for(let i=0;i<M.length;i++){let $0=C[i];if($0===null)continue;C[i]=null,M[i].disconnect($0)}k=null,j=null,N.reset(),J.setRenderTarget(E),F=null,U=null,G=null,$=null,O=null,x0.stop(),Z.isPresenting=!1,J.setPixelRatio(y),J.setSize(I.width,I.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(W=i,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(X=i,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return q||Y},this.setReferenceSpace=function(i){q=i},this.getBaseLayer=function(){return U!==null?U:F},this.getBinding=function(){return G},this.getFrame=function(){return V},this.getSession=function(){return $},this.setSession=async function(i){if($=i,$!==null){if(E=J.getRenderTarget(),$.addEventListener("select",u),$.addEventListener("selectstart",u),$.addEventListener("selectend",u),$.addEventListener("squeeze",u),$.addEventListener("squeezestart",u),$.addEventListener("squeezeend",u),$.addEventListener("end",n),$.addEventListener("inputsourceschange",d),R.xrCompatible!==!0)await Q.makeXRCompatible();if(y=J.getPixelRatio(),J.getSize(I),$.renderState.layers===void 0){let $0={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:W};F=new XRWebGLLayer($,Q,$0),$.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),O=new m6(F.framebufferWidth,F.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:R.stencil})}else{let $0=null,U0=null,k0=null;if(R.depth)k0=R.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,$0=R.stencil?1027:1026,U0=R.stencil?1020:1014;let G0={colorFormat:Q.RGBA8,depthFormat:k0,scaleFactor:W};G=new XRWebGLBinding($,Q),U=G.createProjectionLayer(G0),$.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),O=new m6(U.textureWidth,U.textureHeight,{format:1023,type:1009,depthTexture:new _J(U.textureWidth,U.textureHeight,U0,void 0,void 0,void 0,void 0,void 0,void 0,$0),stencilBuffer:R.stencil,colorSpace:J.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(H),q=null,Y=await $.requestReferenceSpace(X),x0.setContext($),x0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return N.getDepthTexture()};function d(i){for(let $0=0;$0<i.removed.length;$0++){let U0=i.removed[$0],k0=C.indexOf(U0);if(k0>=0)C[k0]=null,M[k0].disconnect(U0)}for(let $0=0;$0<i.added.length;$0++){let U0=i.added[$0],k0=C.indexOf(U0);if(k0===-1){for(let P0=0;P0<M.length;P0++)if(P0>=C.length){C.push(U0),k0=P0;break}else if(C[P0]===null){C[P0]=U0,k0=P0;break}if(k0===-1)break}let G0=M[k0];if(G0)G0.connect(U0)}}let s=new P,l=new P;function e(i,$0,U0){s.setFromMatrixPosition($0.matrixWorld),l.setFromMatrixPosition(U0.matrixWorld);let k0=s.distanceTo(l),G0=$0.projectionMatrix.elements,P0=U0.projectionMatrix.elements,J5=G0[14]/(G0[10]-1),h0=G0[14]/(G0[10]+1),T=(G0[9]+1)/G0[5],Y5=(G0[9]-1)/G0[5],p0=(G0[8]-1)/G0[0],Q5=(P0[8]+1)/P0[0],L0=J5*p0,c0=J5*Q5,T0=k0/(-p0+Q5),S0=T0*-p0;$0.matrixWorld.decompose(i.position,i.quaternion,i.scale),i.translateX(S0),i.translateZ(T0),i.matrixWorld.compose(i.position,i.quaternion,i.scale),i.matrixWorldInverse.copy(i.matrixWorld).invert();let $5=J5+T0,w=h0+T0,B=L0-S0,g=c0+(k0-S0),a=T*h0/w*$5,r=Y5*h0/w*$5;i.projectionMatrix.makePerspective(B,g,a,r,$5,w),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}function m(i,$0){if($0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices($0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if($===null)return;if(N.texture!==null)i.near=N.depthNear,i.far=N.depthFar;if(D.near=S.near=L.near=i.near,D.far=S.far=L.far=i.far,k!==D.near||j!==D.far)$.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,j=D.far,L.near=k,L.far=j,S.near=k,S.far=j,L.updateProjectionMatrix(),S.updateProjectionMatrix(),i.updateProjectionMatrix();let $0=i.parent,U0=D.cameras;m(D,$0);for(let k0=0;k0<U0.length;k0++)m(U0[k0],$0);if(U0.length===2)e(D,L,S);else D.projectionMatrix.copy(L.projectionMatrix);K0(i,D,$0)};function K0(i,$0,U0){if(U0===null)i.matrix.copy($0.matrixWorld);else i.matrix.copy(U0.matrixWorld),i.matrix.invert(),i.matrix.multiply($0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy($0.projectionMatrix),i.projectionMatrixInverse.copy($0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=u8*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return D},this.getFoveation=function(){if(U===null&&F===null)return;return H},this.setFoveation=function(i){if(H=i,U!==null)U.fixedFoveation=i;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=i},this.hasDepthSensing=function(){return N.texture!==null},this.getDepthSensingMesh=function(){return N.getMesh(D)};let F0=null;function C0(i,$0){if(K=$0.getViewerPose(q||Y),V=$0,K!==null){let U0=K.views;if(F!==null)J.setRenderTargetFramebuffer(O,F.framebuffer),J.setRenderTarget(O);let k0=!1;if(U0.length!==D.cameras.length)D.cameras.length=0,k0=!0;for(let P0=0;P0<U0.length;P0++){let J5=U0[P0],h0=null;if(F!==null)h0=F.getViewport(J5);else{let Y5=G.getViewSubImage(U,J5);if(h0=Y5.viewport,P0===0)J.setRenderTargetTextures(O,Y5.colorTexture,U.ignoreDepthValues?void 0:Y5.depthStencilTexture),J.setRenderTarget(O)}let T=b[P0];if(T===void 0)T=new A5,T.layers.enable(P0),T.viewport=new e0,b[P0]=T;if(T.matrix.fromArray(J5.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(J5.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(h0.x,h0.y,h0.width,h0.height),P0===0)D.matrix.copy(T.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);if(k0===!0)D.cameras.push(T)}let G0=$.enabledFeatures;if(G0&&G0.includes("depth-sensing")){let P0=G.getDepthInformation(U0[0]);if(P0&&P0.isValid&&P0.texture)N.init(J,P0,$.renderState)}}for(let U0=0;U0<M.length;U0++){let k0=C[U0],G0=M[U0];if(k0!==null&&G0!==void 0)G0.update(k0,$0,q||Y)}if(F0)F0(i,$0);if($0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:$0});V=null}let x0=new rZ;x0.setAnimationLoop(C0),this.setAnimationLoop=function(i){F0=i},this.dispose=function(){}}}var $8=new H6,cH=new j0;function nH(J,Q){function Z(E,O){if(E.matrixAutoUpdate===!0)E.updateMatrix();O.value.copy(E.matrix)}function $(E,O){if(O.color.getRGB(E.fogColor.value,iZ(J)),O.isFog)E.fogNear.value=O.near,E.fogFar.value=O.far;else if(O.isFogExp2)E.fogDensity.value=O.density}function W(E,O,M,C,I){if(O.isMeshBasicMaterial)Y(E,O);else if(O.isMeshLambertMaterial)Y(E,O);else if(O.isMeshToonMaterial)Y(E,O),U(E,O);else if(O.isMeshPhongMaterial)Y(E,O),G(E,O);else if(O.isMeshStandardMaterial){if(Y(E,O),F(E,O),O.isMeshPhysicalMaterial)V(E,O,I)}else if(O.isMeshMatcapMaterial)Y(E,O),N(E,O);else if(O.isMeshDepthMaterial)Y(E,O);else if(O.isMeshDistanceMaterial)Y(E,O),R(E,O);else if(O.isMeshNormalMaterial)Y(E,O);else if(O.isLineBasicMaterial){if(X(E,O),O.isLineDashedMaterial)H(E,O)}else if(O.isPointsMaterial)q(E,O,M,C);else if(O.isSpriteMaterial)K(E,O);else if(O.isShadowMaterial)E.color.value.copy(O.color),E.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function Y(E,O){if(E.opacity.value=O.opacity,O.color)E.diffuse.value.copy(O.color);if(O.emissive)E.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)E.map.value=O.map,Z(O.map,E.mapTransform);if(O.alphaMap)E.alphaMap.value=O.alphaMap,Z(O.alphaMap,E.alphaMapTransform);if(O.bumpMap){if(E.bumpMap.value=O.bumpMap,Z(O.bumpMap,E.bumpMapTransform),E.bumpScale.value=O.bumpScale,O.side===1)E.bumpScale.value*=-1}if(O.normalMap){if(E.normalMap.value=O.normalMap,Z(O.normalMap,E.normalMapTransform),E.normalScale.value.copy(O.normalScale),O.side===1)E.normalScale.value.negate()}if(O.displacementMap)E.displacementMap.value=O.displacementMap,Z(O.displacementMap,E.displacementMapTransform),E.displacementScale.value=O.displacementScale,E.displacementBias.value=O.displacementBias;if(O.emissiveMap)E.emissiveMap.value=O.emissiveMap,Z(O.emissiveMap,E.emissiveMapTransform);if(O.specularMap)E.specularMap.value=O.specularMap,Z(O.specularMap,E.specularMapTransform);if(O.alphaTest>0)E.alphaTest.value=O.alphaTest;let M=Q.get(O),C=M.envMap,I=M.envMapRotation;if(C){if(E.envMap.value=C,$8.copy(I),$8.x*=-1,$8.y*=-1,$8.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1)$8.y*=-1,$8.z*=-1;E.envMapRotation.value.setFromMatrix4(cH.makeRotationFromEuler($8)),E.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=O.reflectivity,E.ior.value=O.ior,E.refractionRatio.value=O.refractionRatio}if(O.lightMap)E.lightMap.value=O.lightMap,E.lightMapIntensity.value=O.lightMapIntensity,Z(O.lightMap,E.lightMapTransform);if(O.aoMap)E.aoMap.value=O.aoMap,E.aoMapIntensity.value=O.aoMapIntensity,Z(O.aoMap,E.aoMapTransform)}function X(E,O){if(E.diffuse.value.copy(O.color),E.opacity.value=O.opacity,O.map)E.map.value=O.map,Z(O.map,E.mapTransform)}function H(E,O){E.dashSize.value=O.dashSize,E.totalSize.value=O.dashSize+O.gapSize,E.scale.value=O.scale}function q(E,O,M,C){if(E.diffuse.value.copy(O.color),E.opacity.value=O.opacity,E.size.value=O.size*M,E.scale.value=C*0.5,O.map)E.map.value=O.map,Z(O.map,E.uvTransform);if(O.alphaMap)E.alphaMap.value=O.alphaMap,Z(O.alphaMap,E.alphaMapTransform);if(O.alphaTest>0)E.alphaTest.value=O.alphaTest}function K(E,O){if(E.diffuse.value.copy(O.color),E.opacity.value=O.opacity,E.rotation.value=O.rotation,O.map)E.map.value=O.map,Z(O.map,E.mapTransform);if(O.alphaMap)E.alphaMap.value=O.alphaMap,Z(O.alphaMap,E.alphaMapTransform);if(O.alphaTest>0)E.alphaTest.value=O.alphaTest}function G(E,O){E.specular.value.copy(O.specular),E.shininess.value=Math.max(O.shininess,0.0001)}function U(E,O){if(O.gradientMap)E.gradientMap.value=O.gradientMap}function F(E,O){if(E.metalness.value=O.metalness,O.metalnessMap)E.metalnessMap.value=O.metalnessMap,Z(O.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=O.roughness,O.roughnessMap)E.roughnessMap.value=O.roughnessMap,Z(O.roughnessMap,E.roughnessMapTransform);if(O.envMap)E.envMapIntensity.value=O.envMapIntensity}function V(E,O,M){if(E.ior.value=O.ior,O.sheen>0){if(E.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),E.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)E.sheenColorMap.value=O.sheenColorMap,Z(O.sheenColorMap,E.sheenColorMapTransform);if(O.sheenRoughnessMap)E.sheenRoughnessMap.value=O.sheenRoughnessMap,Z(O.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(E.clearcoat.value=O.clearcoat,E.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)E.clearcoatMap.value=O.clearcoatMap,Z(O.clearcoatMap,E.clearcoatMapTransform);if(O.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,Z(O.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(E.clearcoatNormalMap.value=O.clearcoatNormalMap,Z(O.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===1)E.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)E.dispersion.value=O.dispersion;if(O.iridescence>0){if(E.iridescence.value=O.iridescence,E.iridescenceIOR.value=O.iridescenceIOR,E.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)E.iridescenceMap.value=O.iridescenceMap,Z(O.iridescenceMap,E.iridescenceMapTransform);if(O.iridescenceThicknessMap)E.iridescenceThicknessMap.value=O.iridescenceThicknessMap,Z(O.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(O.transmission>0){if(E.transmission.value=O.transmission,E.transmissionSamplerMap.value=M.texture,E.transmissionSamplerSize.value.set(M.width,M.height),O.transmissionMap)E.transmissionMap.value=O.transmissionMap,Z(O.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=O.thickness,O.thicknessMap)E.thicknessMap.value=O.thicknessMap,Z(O.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=O.attenuationDistance,E.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(E.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)E.anisotropyMap.value=O.anisotropyMap,Z(O.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=O.specularIntensity,E.specularColor.value.copy(O.specularColor),O.specularColorMap)E.specularColorMap.value=O.specularColorMap,Z(O.specularColorMap,E.specularColorMapTransform);if(O.specularIntensityMap)E.specularIntensityMap.value=O.specularIntensityMap,Z(O.specularIntensityMap,E.specularIntensityMapTransform)}function N(E,O){if(O.matcap)E.matcap.value=O.matcap}function R(E,O){let M=Q.get(O).light;E.referencePosition.value.setFromMatrixPosition(M.matrixWorld),E.nearDistance.value=M.shadow.camera.near,E.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:W}}function sH(J,Q,Z,$){let W={},Y={},X=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function q(M,C){let I=C.program;$.uniformBlockBinding(M,I)}function K(M,C){let I=W[M.id];if(I===void 0)N(M),I=G(M),W[M.id]=I,M.addEventListener("dispose",E);let y=C.program;$.updateUBOMapping(M,y);let L=Q.render.frame;if(Y[M.id]!==L)F(M),Y[M.id]=L}function G(M){let C=U();M.__bindingPointIndex=C;let I=J.createBuffer(),y=M.__size,L=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,y,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,C,I),I}function U(){for(let M=0;M<H;M++)if(X.indexOf(M)===-1)return X.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(M){let C=W[M.id],I=M.uniforms,y=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,C);for(let L=0,S=I.length;L<S;L++){let b=Array.isArray(I[L])?I[L]:[I[L]];for(let D=0,k=b.length;D<k;D++){let j=b[D];if(V(j,L,D,y)===!0){let u=j.__offset,n=Array.isArray(j.value)?j.value:[j.value],d=0;for(let s=0;s<n.length;s++){let l=n[s],e=R(l);if(typeof l==="number"||typeof l==="boolean")j.__data[0]=l,J.bufferSubData(J.UNIFORM_BUFFER,u+d,j.__data);else if(l.isMatrix3)j.__data[0]=l.elements[0],j.__data[1]=l.elements[1],j.__data[2]=l.elements[2],j.__data[3]=0,j.__data[4]=l.elements[3],j.__data[5]=l.elements[4],j.__data[6]=l.elements[5],j.__data[7]=0,j.__data[8]=l.elements[6],j.__data[9]=l.elements[7],j.__data[10]=l.elements[8],j.__data[11]=0;else l.toArray(j.__data,d),d+=e.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,u,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function V(M,C,I,y){let L=M.value,S=C+"_"+I;if(y[S]===void 0){if(typeof L==="number"||typeof L==="boolean")y[S]=L;else y[S]=L.clone();return!0}else{let b=y[S];if(typeof L==="number"||typeof L==="boolean"){if(b!==L)return y[S]=L,!0}else if(b.equals(L)===!1)return b.copy(L),!0}return!1}function N(M){let C=M.uniforms,I=0,y=16;for(let S=0,b=C.length;S<b;S++){let D=Array.isArray(C[S])?C[S]:[C[S]];for(let k=0,j=D.length;k<j;k++){let u=D[k],n=Array.isArray(u.value)?u.value:[u.value];for(let d=0,s=n.length;d<s;d++){let l=n[d],e=R(l),m=I%y;if(m!==0&&y-m<e.boundary)I+=y-m;u.__data=new Float32Array(e.storage/Float32Array.BYTES_PER_ELEMENT),u.__offset=I,I+=e.storage}}}let L=I%y;if(L>0)I+=y-L;return M.__size=I,M.__cache={},this}function R(M){let C={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")C.boundary=4,C.storage=4;else if(M.isVector2)C.boundary=8,C.storage=8;else if(M.isVector3||M.isColor)C.boundary=16,C.storage=12;else if(M.isVector4)C.boundary=16,C.storage=16;else if(M.isMatrix3)C.boundary=48,C.storage=48;else if(M.isMatrix4)C.boundary=64,C.storage=64;else if(M.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M);return C}function E(M){let C=M.target;C.removeEventListener("dispose",E);let I=X.indexOf(C.__bindingPointIndex);X.splice(I,1),J.deleteBuffer(W[C.id]),delete W[C.id],delete Y[C.id]}function O(){for(let M in W)J.deleteBuffer(W[M]);X=[],W={},Y={}}return{bind:q,update:K,dispose:O}}class wJ{constructor(J={}){let{canvas:Q=J1(),context:Z=null,depth:$=!0,stencil:W=!1,alpha:Y=!1,antialias:X=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:q=!1,powerPreference:K="default",failIfMajorPerformanceCaveat:G=!1}=J;this.isWebGLRenderer=!0;let U;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=Z.getContextAttributes().alpha}else U=Y;let F=new Uint32Array(4),V=new Int32Array(4),N=null,R=null,E=[],O=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let M=this,C=!1,I=0,y=0,L=null,S=-1,b=null,D=new e0,k=new e0,j=null,u=new N0(0),n=0,d=Q.width,s=Q.height,l=1,e=null,m=null,K0=new e0(0,0,d,s),F0=new e0(0,0,d,s),C0=!1,x0=new G7,i=!1,$0=!1,U0=new j0,k0=new P,G0=new e0,P0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J5=!1;function h0(){return L===null?l:1}let T=Z;function Y5(z,v){return Q.getContext(z,v)}try{let z={alpha:!0,depth:$,stencil:W,antialias:X,premultipliedAlpha:H,preserveDrawingBuffer:q,powerPreference:K,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine","three.js r166");if(Q.addEventListener("webglcontextlost",o,!1),Q.addEventListener("webglcontextrestored",p,!1),Q.addEventListener("webglcontextcreationerror",c,!1),T===null){if(T=Y5("webgl2",z),T===null)if(Y5("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let p0,Q5,L0,c0,T0,S0,$5,w,B,g,a,r,t,z0,W0,Y0,y0,J0,R0,m0,_0,X0,I0,l0;function A(){p0=new UX(T),p0.init(),X0=new uH(T,p0),Q5=new YX(T,p0,J,X0),L0=new bH(T),c0=new EX(T),T0=new wH,S0=new pH(T,p0,L0,T0,Q5,X0,c0),$5=new HX(M),w=new GX(M),B=new k1(T),I0=new $X(T,B),g=new FX(T,B,c0,I0),a=new NX(T,g,B,c0),R0=new OX(T,Q5,S0),Y0=new XX(T0),r=new _H(M,$5,w,p0,Q5,I0,Y0),t=new nH(M,T0),z0=new AH,W0=new vH(p0),J0=new ZX(M,$5,w,L0,a,U,H),y0=new hH(M,a,Q5),l0=new sH(T,c0,Q5,L0),m0=new WX(T,p0,c0),_0=new VX(T,p0,c0),c0.programs=r.programs,M.capabilities=Q5,M.extensions=p0,M.properties=T0,M.renderLists=z0,M.shadowMap=y0,M.state=L0,M.info=c0}A();let _=new U$(M,T);this.xr=_,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let z=p0.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=p0.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return l},this.setPixelRatio=function(z){if(z===void 0)return;l=z,this.setSize(d,s,!1)},this.getSize=function(z){return z.set(d,s)},this.setSize=function(z,v,x=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(d=z,s=v,Q.width=Math.floor(z*l),Q.height=Math.floor(v*l),x===!0)Q.style.width=z+"px",Q.style.height=v+"px";this.setViewport(0,0,z,v)},this.getDrawingBufferSize=function(z){return z.set(d*l,s*l).floor()},this.setDrawingBufferSize=function(z,v,x){d=z,s=v,l=x,Q.width=Math.floor(z*x),Q.height=Math.floor(v*x),this.setViewport(0,0,z,v)},this.getCurrentViewport=function(z){return z.copy(D)},this.getViewport=function(z){return z.copy(K0)},this.setViewport=function(z,v,x,h){if(z.isVector4)K0.set(z.x,z.y,z.z,z.w);else K0.set(z,v,x,h);L0.viewport(D.copy(K0).multiplyScalar(l).round())},this.getScissor=function(z){return z.copy(F0)},this.setScissor=function(z,v,x,h){if(z.isVector4)F0.set(z.x,z.y,z.z,z.w);else F0.set(z,v,x,h);L0.scissor(k.copy(F0).multiplyScalar(l).round())},this.getScissorTest=function(){return C0},this.setScissorTest=function(z){L0.setScissorTest(C0=z)},this.setOpaqueSort=function(z){e=z},this.setTransparentSort=function(z){m=z},this.getClearColor=function(z){return z.copy(J0.getClearColor())},this.setClearColor=function(){J0.setClearColor.apply(J0,arguments)},this.getClearAlpha=function(){return J0.getClearAlpha()},this.setClearAlpha=function(){J0.setClearAlpha.apply(J0,arguments)},this.clear=function(z=!0,v=!0,x=!0){let h=0;if(z){let f=!1;if(L!==null){let Z0=L.texture.format;f=Z0===1033||Z0===1031||Z0===1029}if(f){let Z0=L.texture.type,q0=Z0===1009||Z0===1014||Z0===1012||Z0===1020||Z0===1017||Z0===1018,V0=J0.getClearColor(),E0=J0.getClearAlpha(),w0=V0.r,A0=V0.g,D0=V0.b;if(q0)F[0]=w0,F[1]=A0,F[2]=D0,F[3]=E0,T.clearBufferuiv(T.COLOR,0,F);else V[0]=w0,V[1]=A0,V[2]=D0,V[3]=E0,T.clearBufferiv(T.COLOR,0,V)}else h|=T.COLOR_BUFFER_BIT}if(v)h|=T.DEPTH_BUFFER_BIT;if(x)h|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",o,!1),Q.removeEventListener("webglcontextrestored",p,!1),Q.removeEventListener("webglcontextcreationerror",c,!1),z0.dispose(),W0.dispose(),T0.dispose(),$5.dispose(),w.dispose(),a.dispose(),I0.dispose(),l0.dispose(),r.dispose(),_.dispose(),_.removeEventListener("sessionstart",V5),_.removeEventListener("sessionend",_5),k5.stop()};function o(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function p(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let z=c0.autoReset,v=y0.enabled,x=y0.autoUpdate,h=y0.needsUpdate,f=y0.type;A(),c0.autoReset=z,y0.enabled=v,y0.autoUpdate=x,y0.needsUpdate=h,y0.type=f}function c(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Q0(z){let v=z.target;v.removeEventListener("dispose",Q0),O0(v)}function O0(z){n0(z),T0.remove(z)}function n0(z){let v=T0.get(z).programs;if(v!==void 0){if(v.forEach(function(x){r.releaseProgram(x)}),z.isShaderMaterial)r.releaseShaderCache(z)}}this.renderBufferDirect=function(z,v,x,h,f,Z0){if(v===null)v=P0;let q0=f.isMesh&&f.matrixWorld.determinant()<0,V0=vW(z,v,x,h,f);L0.setMaterial(h,q0);let E0=x.index,w0=1;if(h.wireframe===!0){if(E0=g.getWireframeAttribute(x),E0===void 0)return;w0=2}let A0=x.drawRange,D0=x.attributes.position,i0=A0.start*w0,H5=(A0.start+A0.count)*w0;if(Z0!==null)i0=Math.max(i0,Z0.start*w0),H5=Math.min(H5,(Z0.start+Z0.count)*w0);if(E0!==null)i0=Math.max(i0,0),H5=Math.min(H5,E0.count);else if(D0!==void 0&&D0!==null)i0=Math.max(i0,0),H5=Math.min(H5,D0.count);let q5=H5-i0;if(q5<0||q5===1/0)return;I0.setup(f,h,V0,x,E0);let f5,o0=m0;if(E0!==null)f5=B.get(E0),o0=_0,o0.setIndex(f5);if(f.isMesh)if(h.wireframe===!0)L0.setLineWidth(h.wireframeLinewidth*h0()),o0.setMode(T.LINES);else o0.setMode(T.TRIANGLES);else if(f.isLine){let B0=h.linewidth;if(B0===void 0)B0=1;if(L0.setLineWidth(B0*h0()),f.isLineSegments)o0.setMode(T.LINES);else if(f.isLineLoop)o0.setMode(T.LINE_LOOP);else o0.setMode(T.LINE_STRIP)}else if(f.isPoints)o0.setMode(T.POINTS);else if(f.isSprite)o0.setMode(T.TRIANGLES);if(f.isBatchedMesh)if(f._multiDrawInstances!==null)o0.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances);else if(!p0.get("WEBGL_multi_draw")){let{_multiDrawStarts:B0,_multiDrawCounts:L5,_multiDrawCount:a0}=f,J6=E0?B.get(E0).bytesPerElement:1,M8=T0.get(h).currentProgram.getUniforms();for(let x5=0;x5<a0;x5++)M8.setValue(T,"_gl_DrawID",x5),o0.render(B0[x5]/J6,L5[x5])}else o0.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)o0.renderInstances(i0,q5,f.count);else if(x.isInstancedBufferGeometry){let B0=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,L5=Math.min(x.instanceCount,B0);o0.renderInstances(i0,q5,L5)}else o0.render(i0,q5)};function X5(z,v,x){if(z.transparent===!0&&z.side===2&&z.forceSinglePass===!1)z.side=1,z.needsUpdate=!0,w9(z,v,x),z.side=0,z.needsUpdate=!0,w9(z,v,x),z.side=2;else w9(z,v,x)}this.compile=function(z,v,x=null){if(x===null)x=z;if(R=W0.get(x),R.init(v),O.push(R),x.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(R.pushLight(f),f.castShadow)R.pushShadow(f)}}),z!==x)z.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(R.pushLight(f),f.castShadow)R.pushShadow(f)}});R.setupLights();let h=new Set;return z.traverse(function(f){let Z0=f.material;if(Z0)if(Array.isArray(Z0))for(let q0=0;q0<Z0.length;q0++){let V0=Z0[q0];X5(V0,x,f),h.add(V0)}else X5(Z0,x,f),h.add(Z0)}),O.pop(),R=null,h},this.compileAsync=function(z,v,x=null){let h=this.compile(z,v,x);return new Promise((f)=>{function Z0(){if(h.forEach(function(q0){if(T0.get(q0).currentProgram.isReady())h.delete(q0)}),h.size===0){f(z);return}setTimeout(Z0,10)}if(p0.get("KHR_parallel_shader_compile")!==null)Z0();else setTimeout(Z0,10)})};let U5=null;function b0(z){if(U5)U5(z)}function V5(){k5.stop()}function _5(){k5.start()}let k5=new rZ;if(k5.setAnimationLoop(b0),typeof self<"u")k5.setContext(self);this.setAnimationLoop=function(z){U5=z,_.setAnimationLoop(z),z===null?k5.stop():k5.start()},_.addEventListener("sessionstart",V5),_.addEventListener("sessionend",_5),this.render=function(z,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(_.enabled===!0&&_.isPresenting===!0){if(_.cameraAutoUpdate===!0)_.updateCamera(v);v=_.getCamera()}if(z.isScene===!0)z.onBeforeRender(M,z,v,L);if(R=W0.get(z,O.length),R.init(v),O.push(R),U0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),x0.setFromProjectionMatrix(U0),$0=this.localClippingEnabled,i=Y0.init(this.clippingPlanes,$0),N=z0.get(z,E.length),N.init(),E.push(N),_.enabled===!0&&_.isPresenting===!0){let Z0=M.xr.getDepthSensingMesh();if(Z0!==null)z6(Z0,v,-1/0,M.sortObjects)}if(z6(z,v,0,M.sortObjects),N.finish(),M.sortObjects===!0)N.sort(e,m);if(J5=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,J5)J0.addToRenderList(N,z);if(this.info.render.frame++,i===!0)Y0.beginShadows();let x=R.state.shadowsArray;if(y0.render(x,z,v),i===!0)Y0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:h,transmissive:f}=N;if(R.setupLights(),v.isArrayCamera){let Z0=v.cameras;if(f.length>0)for(let q0=0,V0=Z0.length;q0<V0;q0++){let E0=Z0[q0];e8(h,f,z,E0)}if(J5)J0.render(z);for(let q0=0,V0=Z0.length;q0<V0;q0++){let E0=Z0[q0];r6(N,z,E0,E0.viewport)}}else{if(f.length>0)e8(h,f,z,v);if(J5)J0.render(z);r6(N,z,v)}if(L!==null)S0.updateMultisampleRenderTarget(L),S0.updateRenderTargetMipmap(L);if(z.isScene===!0)z.onAfterRender(M,z,v);if(I0.resetDefaultState(),S=-1,b=null,O.pop(),O.length>0){if(R=O[O.length-1],i===!0)Y0.setGlobalState(M.clippingPlanes,R.state.camera)}else R=null;if(E.pop(),E.length>0)N=E[E.length-1];else N=null};function z6(z,v,x,h){if(z.visible===!1)return;if(z.layers.test(v.layers)){if(z.isGroup)x=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(v)}else if(z.isLight){if(R.pushLight(z),z.castShadow)R.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||x0.intersectsSprite(z)){if(h)G0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(U0);let q0=a.update(z),V0=z.material;if(V0.visible)N.push(z,q0,V0,x,G0.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||x0.intersectsObject(z)){let q0=a.update(z),V0=z.material;if(h){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();G0.copy(z.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();G0.copy(q0.boundingSphere.center)}G0.applyMatrix4(z.matrixWorld).applyMatrix4(U0)}if(Array.isArray(V0)){let E0=q0.groups;for(let w0=0,A0=E0.length;w0<A0;w0++){let D0=E0[w0],i0=V0[D0.materialIndex];if(i0&&i0.visible)N.push(z,q0,i0,x,G0.z,D0)}}else if(V0.visible)N.push(z,q0,V0,x,G0.z,null)}}}let Z0=z.children;for(let q0=0,V0=Z0.length;q0<V0;q0++)z6(Z0[q0],v,x,h)}function r6(z,v,x,h){let{opaque:f,transmissive:Z0,transparent:q0}=z;if(R.setupLightsView(x),i===!0)Y0.setGlobalState(M.clippingPlanes,x);if(h)L0.viewport(D.copy(h));if(f.length>0)_9(f,v,x);if(Z0.length>0)_9(Z0,v,x);if(q0.length>0)_9(q0,v,x);L0.buffers.depth.setTest(!0),L0.buffers.depth.setMask(!0),L0.buffers.color.setMask(!0),L0.setPolygonOffset(!1)}function e8(z,v,x,h){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[h.id]===void 0)R.state.transmissionRenderTarget[h.id]=new m6(1,1,{generateMipmaps:!0,type:p0.has("EXT_color_buffer_half_float")||p0.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:s0.workingColorSpace});let Z0=R.state.transmissionRenderTarget[h.id],q0=h.viewport||D;Z0.setSize(q0.z,q0.w);let V0=M.getRenderTarget();if(M.setRenderTarget(Z0),M.getClearColor(u),n=M.getClearAlpha(),n<1)M.setClearColor(16777215,0.5);if(J5)J0.render(x);else M.clear();let E0=M.toneMapping;M.toneMapping=0;let w0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(R.setupLightsView(h),i===!0)Y0.setGlobalState(M.clippingPlanes,h);if(_9(z,x,h),S0.updateMultisampleRenderTarget(Z0),S0.updateRenderTargetMipmap(Z0),p0.has("WEBGL_multisampled_render_to_texture")===!1){let A0=!1;for(let D0=0,i0=v.length;D0<i0;D0++){let H5=v[D0],q5=H5.object,f5=H5.geometry,o0=H5.material,B0=H5.group;if(o0.side===2&&q5.layers.test(h.layers)){let L5=o0.side;o0.side=1,o0.needsUpdate=!0,RQ(q5,x,h,f5,o0,B0),o0.side=L5,o0.needsUpdate=!0,A0=!0}}if(A0===!0)S0.updateMultisampleRenderTarget(Z0),S0.updateRenderTargetMipmap(Z0)}if(M.setRenderTarget(V0),M.setClearColor(u,n),w0!==void 0)h.viewport=w0;M.toneMapping=E0}function _9(z,v,x){let h=v.isScene===!0?v.overrideMaterial:null;for(let f=0,Z0=z.length;f<Z0;f++){let q0=z[f],V0=q0.object,E0=q0.geometry,w0=h===null?q0.material:h,A0=q0.group;if(V0.layers.test(x.layers))RQ(V0,v,x,E0,w0,A0)}}function RQ(z,v,x,h,f,Z0){if(z.onBeforeRender(M,v,x,h,f,Z0),z.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),f.transparent===!0&&f.side===2&&f.forceSinglePass===!1)f.side=1,f.needsUpdate=!0,M.renderBufferDirect(x,v,h,f,z,Z0),f.side=0,f.needsUpdate=!0,M.renderBufferDirect(x,v,h,f,z,Z0),f.side=2;else M.renderBufferDirect(x,v,h,f,z,Z0);z.onAfterRender(M,v,x,h,f,Z0)}function w9(z,v,x){if(v.isScene!==!0)v=P0;let h=T0.get(z),f=R.state.lights,Z0=R.state.shadowsArray,q0=f.state.version,V0=r.getParameters(z,f.state,Z0,v,x),E0=r.getProgramCacheKey(V0),w0=h.programs;if(h.environment=z.isMeshStandardMaterial?v.environment:null,h.fog=v.fog,h.envMap=(z.isMeshStandardMaterial?w:$5).get(z.envMap||h.environment),h.envMapRotation=h.environment!==null&&z.envMap===null?v.environmentRotation:z.envMapRotation,w0===void 0)z.addEventListener("dispose",Q0),w0=new Map,h.programs=w0;let A0=w0.get(E0);if(A0!==void 0){if(h.currentProgram===A0&&h.lightsStateVersion===q0)return zQ(z,V0),A0}else V0.uniforms=r.getUniforms(z),z.onBeforeCompile(V0,M),A0=r.acquireProgram(V0,E0),w0.set(E0,A0),h.uniforms=V0.uniforms;let D0=h.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)D0.clippingPlanes=Y0.uniform;if(zQ(z,V0),h.needsLights=xW(z),h.lightsStateVersion=q0,h.needsLights)D0.ambientLightColor.value=f.state.ambient,D0.lightProbe.value=f.state.probe,D0.directionalLights.value=f.state.directional,D0.directionalLightShadows.value=f.state.directionalShadow,D0.spotLights.value=f.state.spot,D0.spotLightShadows.value=f.state.spotShadow,D0.rectAreaLights.value=f.state.rectArea,D0.ltc_1.value=f.state.rectAreaLTC1,D0.ltc_2.value=f.state.rectAreaLTC2,D0.pointLights.value=f.state.point,D0.pointLightShadows.value=f.state.pointShadow,D0.hemisphereLights.value=f.state.hemi,D0.directionalShadowMap.value=f.state.directionalShadowMap,D0.directionalShadowMatrix.value=f.state.directionalShadowMatrix,D0.spotShadowMap.value=f.state.spotShadowMap,D0.spotLightMatrix.value=f.state.spotLightMatrix,D0.spotLightMap.value=f.state.spotLightMap,D0.pointShadowMap.value=f.state.pointShadowMap,D0.pointShadowMatrix.value=f.state.pointShadowMatrix;return h.currentProgram=A0,h.uniformsList=null,A0}function BQ(z){if(z.uniformsList===null){let v=z.currentProgram.getUniforms();z.uniformsList=G9.seqWithValue(v.seq,z.uniforms)}return z.uniformsList}function zQ(z,v){let x=T0.get(z);x.outputColorSpace=v.outputColorSpace,x.batching=v.batching,x.batchingColor=v.batchingColor,x.instancing=v.instancing,x.instancingColor=v.instancingColor,x.instancingMorph=v.instancingMorph,x.skinning=v.skinning,x.morphTargets=v.morphTargets,x.morphNormals=v.morphNormals,x.morphColors=v.morphColors,x.morphTargetsCount=v.morphTargetsCount,x.numClippingPlanes=v.numClippingPlanes,x.numIntersection=v.numClipIntersection,x.vertexAlphas=v.vertexAlphas,x.vertexTangents=v.vertexTangents,x.toneMapping=v.toneMapping}function vW(z,v,x,h,f){if(v.isScene!==!0)v=P0;S0.resetTextureUnits();let Z0=v.fog,q0=h.isMeshStandardMaterial?v.environment:null,V0=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:"srgb-linear",E0=(h.isMeshStandardMaterial?w:$5).get(h.envMap||q0),w0=h.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,A0=!!x.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),D0=!!x.morphAttributes.position,i0=!!x.morphAttributes.normal,H5=!!x.morphAttributes.color,q5=0;if(h.toneMapped){if(L===null||L.isXRRenderTarget===!0)q5=M.toneMapping}let f5=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,o0=f5!==void 0?f5.length:0,B0=T0.get(h),L5=R.state.lights;if(i===!0){if($0===!0||z!==b){let d5=z===b&&h.id===S;Y0.setState(h,z,d5)}}let a0=!1;if(h.version===B0.__version){if(B0.needsLights&&B0.lightsStateVersion!==L5.state.version)a0=!0;else if(B0.outputColorSpace!==V0)a0=!0;else if(f.isBatchedMesh&&B0.batching===!1)a0=!0;else if(!f.isBatchedMesh&&B0.batching===!0)a0=!0;else if(f.isBatchedMesh&&B0.batchingColor===!0&&f.colorTexture===null)a0=!0;else if(f.isBatchedMesh&&B0.batchingColor===!1&&f.colorTexture!==null)a0=!0;else if(f.isInstancedMesh&&B0.instancing===!1)a0=!0;else if(!f.isInstancedMesh&&B0.instancing===!0)a0=!0;else if(f.isSkinnedMesh&&B0.skinning===!1)a0=!0;else if(!f.isSkinnedMesh&&B0.skinning===!0)a0=!0;else if(f.isInstancedMesh&&B0.instancingColor===!0&&f.instanceColor===null)a0=!0;else if(f.isInstancedMesh&&B0.instancingColor===!1&&f.instanceColor!==null)a0=!0;else if(f.isInstancedMesh&&B0.instancingMorph===!0&&f.morphTexture===null)a0=!0;else if(f.isInstancedMesh&&B0.instancingMorph===!1&&f.morphTexture!==null)a0=!0;else if(B0.envMap!==E0)a0=!0;else if(h.fog===!0&&B0.fog!==Z0)a0=!0;else if(B0.numClippingPlanes!==void 0&&(B0.numClippingPlanes!==Y0.numPlanes||B0.numIntersection!==Y0.numIntersection))a0=!0;else if(B0.vertexAlphas!==w0)a0=!0;else if(B0.vertexTangents!==A0)a0=!0;else if(B0.morphTargets!==D0)a0=!0;else if(B0.morphNormals!==i0)a0=!0;else if(B0.morphColors!==H5)a0=!0;else if(B0.toneMapping!==q5)a0=!0;else if(B0.morphTargetsCount!==o0)a0=!0}else a0=!0,B0.__version=h.version;let J6=B0.currentProgram;if(a0===!0)J6=w9(h,v,f);let M8=!1,x5=!1,S7=!1,E5=J6.getUniforms(),v6=B0.uniforms;if(L0.useProgram(J6.program))M8=!0,x5=!0,S7=!0;if(h.id!==S)S=h.id,x5=!0;if(M8||b!==z){E5.setValue(T,"projectionMatrix",z.projectionMatrix),E5.setValue(T,"viewMatrix",z.matrixWorldInverse);let d5=E5.map.cameraPosition;if(d5!==void 0)d5.setValue(T,k0.setFromMatrixPosition(z.matrixWorld));if(Q5.logarithmicDepthBuffer)E5.setValue(T,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)E5.setValue(T,"isOrthographic",z.isOrthographicCamera===!0);if(b!==z)b=z,x5=!0,S7=!0}if(f.isSkinnedMesh){E5.setOptional(T,f,"bindMatrix"),E5.setOptional(T,f,"bindMatrixInverse");let d5=f.skeleton;if(d5){if(d5.boneTexture===null)d5.computeBoneTexture();E5.setValue(T,"boneTexture",d5.boneTexture,S0)}}if(f.isBatchedMesh){if(E5.setOptional(T,f,"batchingTexture"),E5.setValue(T,"batchingTexture",f._matricesTexture,S0),E5.setOptional(T,f,"batchingIdTexture"),E5.setValue(T,"batchingIdTexture",f._indirectTexture,S0),E5.setOptional(T,f,"batchingColorTexture"),f._colorsTexture!==null)E5.setValue(T,"batchingColorTexture",f._colorsTexture,S0)}let j7=x.morphAttributes;if(j7.position!==void 0||j7.normal!==void 0||j7.color!==void 0)R0.update(f,x,J6);if(x5||B0.receiveShadow!==f.receiveShadow)B0.receiveShadow=f.receiveShadow,E5.setValue(T,"receiveShadow",f.receiveShadow);if(h.isMeshGouraudMaterial&&h.envMap!==null)v6.envMap.value=E0,v6.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(h.isMeshStandardMaterial&&h.envMap===null&&v.environment!==null)v6.envMapIntensity.value=v.environmentIntensity;if(x5){if(E5.setValue(T,"toneMappingExposure",M.toneMappingExposure),B0.needsLights)fW(v6,S7);if(Z0&&h.fog===!0)t.refreshFogUniforms(v6,Z0);t.refreshMaterialUniforms(v6,h,l,s,R.state.transmissionRenderTarget[z.id]),G9.upload(T,BQ(B0),v6,S0)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)G9.upload(T,BQ(B0),v6,S0),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)E5.setValue(T,"center",f.center);if(E5.setValue(T,"modelViewMatrix",f.modelViewMatrix),E5.setValue(T,"normalMatrix",f.normalMatrix),E5.setValue(T,"modelMatrix",f.matrixWorld),h.isShaderMaterial||h.isRawShaderMaterial){let d5=h.uniformsGroups;for(let y7=0,hW=d5.length;y7<hW;y7++){let MQ=d5[y7];l0.update(MQ,J6),l0.bind(MQ,J6)}}return J6}function fW(z,v){z.ambientLightColor.needsUpdate=v,z.lightProbe.needsUpdate=v,z.directionalLights.needsUpdate=v,z.directionalLightShadows.needsUpdate=v,z.pointLights.needsUpdate=v,z.pointLightShadows.needsUpdate=v,z.spotLights.needsUpdate=v,z.spotLightShadows.needsUpdate=v,z.rectAreaLights.needsUpdate=v,z.hemisphereLights.needsUpdate=v}function xW(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}if(this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(z,v,x){T0.get(z.texture).__webglTexture=v,T0.get(z.depthTexture).__webglTexture=x;let h=T0.get(z);if(h.__hasExternalTextures=!0,h.__autoAllocateDepthBuffer=x===void 0,!h.__autoAllocateDepthBuffer){if(p0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),h.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(z,v){let x=T0.get(z);x.__webglFramebuffer=v,x.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(z,v=0,x=0){L=z,I=v,y=x;let h=!0,f=null,Z0=!1,q0=!1;if(z){let E0=T0.get(z);if(E0.__useDefaultFramebuffer!==void 0)L0.bindFramebuffer(T.FRAMEBUFFER,null),h=!1;else if(E0.__webglFramebuffer===void 0)S0.setupRenderTarget(z);else if(E0.__hasExternalTextures)S0.rebindTextures(z,T0.get(z.texture).__webglTexture,T0.get(z.depthTexture).__webglTexture);let w0=z.texture;if(w0.isData3DTexture||w0.isDataArrayTexture||w0.isCompressedArrayTexture)q0=!0;let A0=T0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(A0[v]))f=A0[v][x];else f=A0[v];Z0=!0}else if(z.samples>0&&S0.useMultisampledRTT(z)===!1)f=T0.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(A0))f=A0[x];else f=A0;D.copy(z.viewport),k.copy(z.scissor),j=z.scissorTest}else D.copy(K0).multiplyScalar(l).floor(),k.copy(F0).multiplyScalar(l).floor(),j=C0;if(L0.bindFramebuffer(T.FRAMEBUFFER,f)&&h)L0.drawBuffers(z,f);if(L0.viewport(D),L0.scissor(k),L0.setScissorTest(j),Z0){let E0=T0.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,E0.__webglTexture,x)}else if(q0){let E0=T0.get(z.texture),w0=v||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,E0.__webglTexture,x||0,w0)}S=-1},this.readRenderTargetPixels=function(z,v,x,h,f,Z0,q0){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=T0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&q0!==void 0)V0=V0[q0];if(V0){L0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=z.texture,w0=E0.format,A0=E0.type;if(!Q5.textureFormatReadable(w0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q5.textureTypeReadable(A0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=z.width-h&&(x>=0&&x<=z.height-f))T.readPixels(v,x,h,f,X0.convert(w0),X0.convert(A0),Z0)}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;L0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.readRenderTargetPixelsAsync=async function(z,v,x,h,f,Z0,q0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=T0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&q0!==void 0)V0=V0[q0];if(V0){L0.bindFramebuffer(T.FRAMEBUFFER,V0);try{let E0=z.texture,w0=E0.format,A0=E0.type;if(!Q5.textureFormatReadable(w0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q5.textureTypeReadable(A0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=z.width-h&&(x>=0&&x<=z.height-f)){let D0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.bufferData(T.PIXEL_PACK_BUFFER,Z0.byteLength,T.STREAM_READ),T.readPixels(v,x,h,f,X0.convert(w0),X0.convert(A0),0),T.flush();let i0=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await Q1(T,i0,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,D0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Z0)}finally{T.deleteBuffer(D0),T.deleteSync(i0)}return Z0}}finally{let E0=L!==null?T0.get(L).__webglFramebuffer:null;L0.bindFramebuffer(T.FRAMEBUFFER,E0)}}},this.copyFramebufferToTexture=function(z,v=null,x=0){if(z.isTexture!==!0)console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,z=arguments[1];let h=Math.pow(2,-x),f=Math.floor(z.image.width*h),Z0=Math.floor(z.image.height*h),q0=v!==null?v.x:0,V0=v!==null?v.y:0;S0.setTexture2D(z,0),T.copyTexSubImage2D(T.TEXTURE_2D,x,0,0,q0,V0,f,Z0),L0.unbindTexture()},this.copyTextureToTexture=function(z,v,x=null,h=null,f=0){if(z.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),h=arguments[0]||null,z=arguments[1],v=arguments[2],f=arguments[3]||0,x=null;let Z0,q0,V0,E0,w0,A0;if(x!==null)Z0=x.max.x-x.min.x,q0=x.max.y-x.min.y,V0=x.min.x,E0=x.min.y;else Z0=z.image.width,q0=z.image.height,V0=0,E0=0;if(h!==null)w0=h.x,A0=h.y;else w0=0,A0=0;let D0=X0.convert(v.format),i0=X0.convert(v.type);S0.setTexture2D(v,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let H5=T.getParameter(T.UNPACK_ROW_LENGTH),q5=T.getParameter(T.UNPACK_IMAGE_HEIGHT),f5=T.getParameter(T.UNPACK_SKIP_PIXELS),o0=T.getParameter(T.UNPACK_SKIP_ROWS),B0=T.getParameter(T.UNPACK_SKIP_IMAGES),L5=z.isCompressedTexture?z.mipmaps[f]:z.image;if(T.pixelStorei(T.UNPACK_ROW_LENGTH,L5.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,L5.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,V0),T.pixelStorei(T.UNPACK_SKIP_ROWS,E0),z.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,f,w0,A0,Z0,q0,D0,i0,L5.data);else if(z.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,f,w0,A0,L5.width,L5.height,D0,L5.data);else T.texSubImage2D(T.TEXTURE_2D,f,w0,A0,Z0,q0,D0,i0,L5);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,H5),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,q5),T.pixelStorei(T.UNPACK_SKIP_PIXELS,f5),T.pixelStorei(T.UNPACK_SKIP_ROWS,o0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,B0),f===0&&v.generateMipmaps)T.generateMipmap(T.TEXTURE_2D);L0.unbindTexture()},this.copyTextureToTexture3D=function(z,v,x=null,h=null,f=0){if(z.isTexture!==!0)console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,h=arguments[1]||null,z=arguments[2],v=arguments[3],f=arguments[4]||0;let Z0,q0,V0,E0,w0,A0,D0,i0,H5,q5=z.isCompressedTexture?z.mipmaps[f]:z.image;if(x!==null)Z0=x.max.x-x.min.x,q0=x.max.y-x.min.y,V0=x.max.z-x.min.z,E0=x.min.x,w0=x.min.y,A0=x.min.z;else Z0=q5.width,q0=q5.height,V0=q5.depth,E0=0,w0=0,A0=0;if(h!==null)D0=h.x,i0=h.y,H5=h.z;else D0=0,i0=0,H5=0;let f5=X0.convert(v.format),o0=X0.convert(v.type),B0;if(v.isData3DTexture)S0.setTexture3D(v,0),B0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)S0.setTexture2DArray(v,0),B0=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let L5=T.getParameter(T.UNPACK_ROW_LENGTH),a0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),J6=T.getParameter(T.UNPACK_SKIP_PIXELS),M8=T.getParameter(T.UNPACK_SKIP_ROWS),x5=T.getParameter(T.UNPACK_SKIP_IMAGES);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,q5.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,q5.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,E0),T.pixelStorei(T.UNPACK_SKIP_ROWS,w0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,A0),z.isDataTexture||z.isData3DTexture)T.texSubImage3D(B0,f,D0,i0,H5,Z0,q0,V0,f5,o0,q5.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(B0,f,D0,i0,H5,Z0,q0,V0,f5,q5.data);else T.texSubImage3D(B0,f,D0,i0,H5,Z0,q0,V0,f5,o0,q5);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,L5),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,a0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,J6),T.pixelStorei(T.UNPACK_SKIP_ROWS,M8),T.pixelStorei(T.UNPACK_SKIP_IMAGES,x5),f===0&&v.generateMipmaps)T.generateMipmap(B0);L0.unbindTexture()},this.initRenderTarget=function(z){if(T0.get(z).__webglFramebuffer===void 0)S0.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)S0.setTextureCube(z,0);else if(z.isData3DTexture)S0.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S0.setTexture2DArray(z,0);else S0.setTexture2D(z,0);L0.unbindTexture()},this.resetState=function(){I=0,y=0,L=null,L0.reset(),I0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",Q.unpackColorSpace=s0.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}}class E9 extends Z5{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new H6,this.environmentIntensity=1,this.environmentRotation=new H6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class F7{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=X6()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return RJ("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let $=0,W=this.stride;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=X6();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=X6();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var y5=new P;class O9{constructor(J,Q,Z,$=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=$}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)y5.fromBufferAttribute(this,Q),y5.applyMatrix4(J),this.setXYZ(Q,y5.x,y5.y,y5.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)y5.fromBufferAttribute(this,Q),y5.applyNormalMatrix(J),this.setXYZ(Q,y5.x,y5.y,y5.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)y5.fromBufferAttribute(this,Q),y5.transformDirection(J),this.setXYZ(Q,y5.x,y5.y,y5.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=W6(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=t0(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=t0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=W6(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=W6(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=W6(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=W6(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),Z=t0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),Z=t0(Z,this.array),$=t0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=t0(Q,this.array),Z=t0(Z,this.array),$=t0($,this.array),W=t0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return new K5(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new O9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var GZ=new P,UZ=new e0,FZ=new e0,iH=new P,VZ=new j0,i9=new P,WJ=new n5,EZ=new j0,YJ=new n6;class IJ extends d0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new j0,this.bindMatrixInverse=new j0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new T5;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,i9),this.boundingBox.expandByPoint(i9)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new n5;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,i9),this.boundingSphere.expandByPoint(i9)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let Z=this.material,$=this.matrixWorld;if(Z===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(WJ.copy(this.boundingSphere),WJ.applyMatrix4($),J.ray.intersectsSphere(WJ)===!1)return;if(EZ.copy($).invert(),YJ.copy(J.ray).applyMatrix4(EZ),this.boundingBox!==null){if(YJ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,YJ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new e0,Q=this.geometry.attributes.skinWeight;for(let Z=0,$=Q.count;Z<$;Z++){J.fromBufferAttribute(Q,Z);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW(Z,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let Z=this.skeleton,$=this.geometry;UZ.fromBufferAttribute($.attributes.skinIndex,J),FZ.fromBufferAttribute($.attributes.skinWeight,J),GZ.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let Y=FZ.getComponent(W);if(Y!==0){let X=UZ.getComponent(W);VZ.multiplyMatrices(Z.bones[X].matrixWorld,Z.boneInverses[X]),Q.addScaledVector(iH.copy(GZ).applyMatrix4(VZ),Y)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class V7 extends Z5{constructor(){super();this.isBone=!0,this.type="Bone"}}class AJ extends N5{constructor(J=null,Q=1,Z=1,$,W,Y,X,H,q=1003,K=1003,G,U){super(null,Y,X,H,q,K,$,W,G,U);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var OZ=new j0,oH=new j0;class E7{constructor(J=[],Q=[]){this.uuid=X6(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Z=0,$=this.bones.length;Z<$;Z++)this.boneInverses.push(new j0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let Z=new j0;if(this.bones[J])Z.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Z)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z)Z.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z){if(Z.parent&&Z.parent.isBone)Z.matrix.copy(Z.parent.matrixWorld).invert(),Z.matrix.multiply(Z.matrixWorld);else Z.matrix.copy(Z.matrixWorld);Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)}}}update(){let J=this.bones,Q=this.boneInverses,Z=this.boneMatrices,$=this.boneTexture;for(let W=0,Y=J.length;W<Y;W++){let X=J[W]?J[W].matrixWorld:oH;OZ.multiplyMatrices(X,Q[W]),OZ.toArray(Z,W*16)}if($!==null)$.needsUpdate=!0}clone(){return new E7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let Z=new AJ(Q,J,J,1023,1015);return Z.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=Z,this}getBoneByName(J){for(let Q=0,Z=this.bones.length;Q<Z;Q++){let $=this.bones[Q];if($.name===J)return $}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let Z=0,$=J.bones.length;Z<$;Z++){let W=J.bones[Z],Y=Q[W];if(Y===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),Y=new V7;this.bones.push(Y),this.boneInverses.push(new j0().fromArray(J.boneInverses[Z]))}return this.init(),this}toJSON(){let J={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,Z=this.boneInverses;for(let $=0,W=Q.length;$<W;$++){let Y=Q[$];J.bones.push(Y.uuid);let X=Z[$];J.boneInverses.push(X.toArray())}return J}}class l8 extends K5{constructor(J,Q,Z,$=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var h8=new j0,NZ=new j0,o9=[],RZ=new T5,aH=new j0,W9=new d0,Y9=new n5;class PJ extends d0{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new l8(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let $=0;$<Z;$++)this.setMatrixAt($,aH)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new T5;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,h8),RZ.copy(J.boundingBox).applyMatrix4(h8),this.boundingBox.union(RZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new n5;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,h8),Y9.copy(J.boundingSphere).applyMatrix4(h8),this.boundingSphere.union(Y9)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=this.morphTexture.source.data.data,W=Z.length+1,Y=J*W+1;for(let X=0;X<Z.length;X++)Z[X]=$[Y+X]}raycast(J,Q){let Z=this.matrixWorld,$=this.count;if(W9.geometry=this.geometry,W9.material=this.material,W9.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Y9.copy(this.boundingSphere),Y9.applyMatrix4(Z),J.ray.intersectsSphere(Y9)===!1)return;for(let W=0;W<$;W++){this.getMatrixAt(W,h8),NZ.multiplyMatrices(Z,h8),W9.matrixWorld=NZ,W9.raycast(J,o9);for(let Y=0,X=o9.length;Y<X;Y++){let H=o9[Y];H.instanceId=W,H.object=this,Q.push(H)}o9.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new l8(new Float32Array(this.instanceMatrix.count*3),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=Z.length+1;if(this.morphTexture===null)this.morphTexture=new AJ(new Float32Array($*this.count),$,this.count,1028,1015);let W=this.morphTexture.source.data.data,Y=0;for(let q=0;q<Z.length;q++)Y+=Z[q];let X=this.geometry.morphTargetsRelative?1:1-Y,H=$*J;W[H]=X,W.set(Z,H+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class s5 extends C5{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new N0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var Y7=new P,X7=new P,BZ=new j0,X9=new n6,a9=new n5,XJ=new P,zZ=new P;class G8 extends Z5{constructor(J=new G5,Q=new s5){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[0];for(let $=1,W=Q.count;$<W;$++)Y7.fromBufferAttribute(Q,$-1),X7.fromBufferAttribute(Q,$),Z[$]=Z[$-1],Z[$]+=Y7.distanceTo(X7);J.setAttribute("lineDistance",new W5(Z,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Line.threshold,Y=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(a9.copy(Z.boundingSphere),a9.applyMatrix4($),a9.radius+=W,J.ray.intersectsSphere(a9)===!1)return;BZ.copy($).invert(),X9.copy(J.ray).applyMatrix4(BZ);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,q=this.isLineSegments?2:1,K=Z.index,U=Z.attributes.position;if(K!==null){let F=Math.max(0,Y.start),V=Math.min(K.count,Y.start+Y.count);for(let N=F,R=V-1;N<R;N+=q){let E=K.getX(N),O=K.getX(N+1),M=r9(this,J,X9,H,E,O);if(M)Q.push(M)}if(this.isLineLoop){let N=K.getX(V-1),R=K.getX(F),E=r9(this,J,X9,H,N,R);if(E)Q.push(E)}}else{let F=Math.max(0,Y.start),V=Math.min(U.count,Y.start+Y.count);for(let N=F,R=V-1;N<R;N+=q){let E=r9(this,J,X9,H,N,N+1);if(E)Q.push(E)}if(this.isLineLoop){let N=r9(this,J,X9,H,V-1,F);if(N)Q.push(N)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=$.length;W<Y;W++){let X=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function r9(J,Q,Z,$,W,Y){let X=J.geometry.attributes.position;if(Y7.fromBufferAttribute(X,W),X7.fromBufferAttribute(X,Y),Z.distanceSqToSegment(Y7,X7,XJ,zZ)>$)return;XJ.applyMatrix4(J.matrixWorld);let q=Q.ray.origin.distanceTo(XJ);if(q<Q.near||q>Q.far)return;return{distance:q,point:zZ.clone().applyMatrix4(J.matrixWorld),index:W,face:null,faceIndex:null,object:J}}var MZ=new P,kZ=new P;class A6 extends G8{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[];for(let $=0,W=Q.count;$<W;$+=2)MZ.fromBufferAttribute(Q,$),kZ.fromBufferAttribute(Q,$+1),Z[$]=$===0?0:Z[$-1],Z[$+1]=Z[$]+MZ.distanceTo(kZ);J.setAttribute("lineDistance",new W5(Z,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class TJ extends G8{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class P6 extends C5{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new N0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var LZ=new j0,UJ=new n6,t9=new n5,e9=new P;class U8 extends Z5{constructor(J=new G5,Q=new P6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Points.threshold,Y=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(t9.copy(Z.boundingSphere),t9.applyMatrix4($),t9.radius+=W,J.ray.intersectsSphere(t9)===!1)return;LZ.copy($).invert(),UJ.copy(J.ray).applyMatrix4(LZ);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=X*X,q=Z.index,G=Z.attributes.position;if(q!==null){let U=Math.max(0,Y.start),F=Math.min(q.count,Y.start+Y.count);for(let V=U,N=F;V<N;V++){let R=q.getX(V);e9.fromBufferAttribute(G,R),DZ(e9,R,H,$,J,Q,this)}}else{let U=Math.max(0,Y.start),F=Math.min(G.count,Y.start+Y.count);for(let V=U,N=F;V<N;V++)e9.fromBufferAttribute(G,V),DZ(e9,V,H,$,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=$.length;W<Y;W++){let X=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function DZ(J,Q,Z,$,W,Y,X){let H=UJ.distanceSqToPoint(J);if(H<Z){let q=new P;UJ.closestPointToPoint(J,q),q.applyMatrix4($);let K=W.ray.origin.distanceTo(q);if(K<W.near||K>W.far)return;Y.push({distance:K,distanceToRay:Math.sqrt(H),point:q,index:Q,face:null,object:X})}}var J7=new P,Q7=new P,HJ=new P,Z7=new Y6;class SJ extends G5{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let $=Math.pow(10,4),W=Math.cos(g8*Q),Y=J.getIndex(),X=J.getAttribute("position"),H=Y?Y.count:X.count,q=[0,0,0],K=["a","b","c"],G=[,,,],U={},F=[];for(let V=0;V<H;V+=3){if(Y)q[0]=Y.getX(V),q[1]=Y.getX(V+1),q[2]=Y.getX(V+2);else q[0]=V,q[1]=V+1,q[2]=V+2;let{a:N,b:R,c:E}=Z7;if(N.fromBufferAttribute(X,q[0]),R.fromBufferAttribute(X,q[1]),E.fromBufferAttribute(X,q[2]),Z7.getNormal(HJ),G[0]=`${Math.round(N.x*$)},${Math.round(N.y*$)},${Math.round(N.z*$)}`,G[1]=`${Math.round(R.x*$)},${Math.round(R.y*$)},${Math.round(R.z*$)}`,G[2]=`${Math.round(E.x*$)},${Math.round(E.y*$)},${Math.round(E.z*$)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let O=0;O<3;O++){let M=(O+1)%3,C=G[O],I=G[M],y=Z7[K[O]],L=Z7[K[M]],S=`${C}_${I}`,b=`${I}_${C}`;if(b in U&&U[b]){if(HJ.dot(U[b].normal)<=W)F.push(y.x,y.y,y.z),F.push(L.x,L.y,L.z);U[b]=null}else if(!(S in U))U[S]={index0:q[O],index1:q[M],normal:HJ.clone()}}}for(let V in U)if(U[V]){let{index0:N,index1:R}=U[V];J7.fromBufferAttribute(X,N),Q7.fromBufferAttribute(X,R),F.push(J7.x,J7.y,J7.z),F.push(Q7.x,Q7.y,Q7.z)}this.setAttribute("position",new W5(F,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class jJ extends C5{constructor(J){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new N0(0),this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.fog=J.fog,this}}class K6 extends C5{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new N0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new N0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new H6,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class i5 extends K6{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new M0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return D5(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new N0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new N0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new N0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class yJ extends C5{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new N0(16777215),this.specular=new N0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new N0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new H6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}function $7(J,Q,Z){if(!J||!Z&&J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function rH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function tH(J){function Q(W,Y){return J[W]-J[Y]}let Z=J.length,$=Array(Z);for(let W=0;W!==Z;++W)$[W]=W;return $.sort(Q),$}function CZ(J,Q,Z){let $=J.length,W=new J.constructor($);for(let Y=0,X=0;X!==$;++Y){let H=Z[Y]*Q;for(let q=0;q!==Q;++q)W[X++]=J[H+q]}return W}function F$(J,Q,Z,$){let W=1,Y=J[0];while(Y!==void 0&&Y[$]===void 0)Y=J[W++];if(Y===void 0)return;let X=Y[$];if(X===void 0)return;if(Array.isArray(X))do{if(X=Y[$],X!==void 0)Q.push(Y.time),Z.push.apply(Z,X);Y=J[W++]}while(Y!==void 0);else if(X.toArray!==void 0)do{if(X=Y[$],X!==void 0)Q.push(Y.time),X.toArray(Z,Z.length);Y=J[W++]}while(Y!==void 0);else do{if(X=Y[$],X!==void 0)Q.push(Y.time),Z.push(X);Y=J[W++]}while(Y!==void 0)}class F8{constructor(J,Q,Z,$){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=$!==void 0?$:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,$=Q[Z],W=Q[Z-1];Z:{J:{let Y;Q:{$:if(!(J<$)){for(let X=Z+2;;){if($===void 0){if(J<W)break $;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if(W=$,$=Q[++Z],J<$)break J}Y=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)Z=2,W=X;for(let H=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===H)break;if($=W,W=Q[--Z-1],J>=W)break J}Y=Z,Z=0;break Q}break Z}while(Z<Y){let X=Z+Y>>>1;if(J<Q[X])Y=X;else Z=X+1}if($=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,$)}return this.interpolate_(Z,W,J,$)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$;for(let Y=0;Y!==$;++Y)Q[Y]=Z[W+Y];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class V$ extends F8{constructor(J,Q,Z,$){super(J,Q,Z,$);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let $=this.parameterPositions,W=J-2,Y=J+1,X=$[W],H=$[Y];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-Z;break;case 2402:W=$.length-2,X=Q+$[W]-$[W+1];break;default:W=J,X=Z}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:Y=J,H=2*Z-Q;break;case 2402:Y=1,H=Z+$[1]-$[0];break;default:Y=J-1,H=Q}let q=(Z-Q)*0.5,K=this.valueSize;this._weightPrev=q/(Q-X),this._weightNext=q/(H-Z),this._offsetPrev=W*K,this._offsetNext=Y*K}interpolate_(J,Q,Z,$){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=J*X,q=H-X,K=this._offsetPrev,G=this._offsetNext,U=this._weightPrev,F=this._weightNext,V=(Z-Q)/($-Q),N=V*V,R=N*V,E=-U*R+2*U*N-U*V,O=(1+U)*R+(-1.5-2*U)*N+(-0.5+U)*V+1,M=(-1-F)*R+(1.5+F)*N+0.5*V,C=F*R-F*N;for(let I=0;I!==X;++I)W[I]=E*Y[K+I]+O*Y[q+I]+M*Y[H+I]+C*Y[G+I];return W}}class E$ extends F8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=J*X,q=H-X,K=(Z-Q)/($-Q),G=1-K;for(let U=0;U!==X;++U)W[U]=Y[q+U]*G+Y[H+U]*K;return W}}class O$ extends F8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J){return this.copySampleValue_(J-1)}}class G6{constructor(J,Q,Z,$){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=$7(Q,this.TimeBufferType),this.values=$7(Z,this.ValueBufferType),this.setInterpolation($||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:$7(J.times,Array),values:$7(J.values,Array)};let $=J.getInterpolation();if($!==J.DefaultInterpolation)Z.interpolation=$}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new O$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new E$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new V$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]*=J}return this}trim(J,Q){let Z=this.times,$=Z.length,W=0,Y=$-1;while(W!==$&&Z[W]<J)++W;while(Y!==-1&&Z[Y]>Q)--Y;if(++Y,W!==0||Y!==$){if(W>=Y)Y=Math.max(Y,1),W=Y-1;let X=this.getValueSize();this.times=Z.slice(W,Y),this.values=this.values.slice(W*X,Y*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,$=this.values,W=Z.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let Y=null;for(let X=0;X!==W;X++){let H=Z[X];if(typeof H==="number"&&isNaN(H)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,X,H),J=!1;break}if(Y!==null&&Y>H){console.error("THREE.KeyframeTrack: Out of order keys.",this,X,H,Y),J=!1;break}Y=H}if($!==void 0){if(rH($))for(let X=0,H=$.length;X!==H;++X){let q=$[X];if(isNaN(q)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,X,q),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),$=this.getInterpolation()===2302,W=J.length-1,Y=1;for(let X=1;X<W;++X){let H=!1,q=J[X],K=J[X+1];if(q!==K&&(X!==1||q!==J[0]))if(!$){let G=X*Z,U=G-Z,F=G+Z;for(let V=0;V!==Z;++V){let N=Q[G+V];if(N!==Q[U+V]||N!==Q[F+V]){H=!0;break}}}else H=!0;if(H){if(X!==Y){J[Y]=J[X];let G=X*Z,U=Y*Z;for(let F=0;F!==Z;++F)Q[U+F]=Q[G+F]}++Y}}if(W>0){J[Y]=J[W];for(let X=W*Z,H=Y*Z,q=0;q!==Z;++q)Q[H+q]=Q[X+q];++Y}if(Y!==J.length)this.times=J.slice(0,Y),this.values=Q.slice(0,Y*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),$=new this.constructor(this.name,J,Q);return $.createInterpolant=this.createInterpolant,$}}G6.prototype.TimeBufferType=Float32Array;G6.prototype.ValueBufferType=Float32Array;G6.prototype.DefaultInterpolation=2301;class V8 extends G6{constructor(J,Q,Z){super(J,Q,Z)}}V8.prototype.ValueTypeName="bool";V8.prototype.ValueBufferType=Array;V8.prototype.DefaultInterpolation=2300;V8.prototype.InterpolantFactoryMethodLinear=void 0;V8.prototype.InterpolantFactoryMethodSmooth=void 0;class vJ extends G6{}vJ.prototype.ValueTypeName="color";class l6 extends G6{}l6.prototype.ValueTypeName="number";class N$ extends F8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=(Z-Q)/($-Q),q=J*X;for(let K=q+X;q!==K;q+=4)g5.slerpFlat(W,0,Y,q-X,Y,q,H);return W}}class s6 extends G6{InterpolantFactoryMethodLinear(J){return new N$(this.times,this.values,this.getValueSize(),J)}}s6.prototype.ValueTypeName="quaternion";s6.prototype.InterpolantFactoryMethodSmooth=void 0;class E8 extends G6{constructor(J,Q,Z){super(J,Q,Z)}}E8.prototype.ValueTypeName="string";E8.prototype.ValueBufferType=Array;E8.prototype.DefaultInterpolation=2300;E8.prototype.InterpolantFactoryMethodLinear=void 0;E8.prototype.InterpolantFactoryMethodSmooth=void 0;class d6 extends G6{}d6.prototype.ValueTypeName="vector";class fJ{constructor(J="",Q=-1,Z=[],$=2500){if(this.name=J,this.tracks=Z,this.duration=Q,this.blendMode=$,this.uuid=X6(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],Z=J.tracks,$=1/(J.fps||1);for(let Y=0,X=Z.length;Y!==X;++Y)Q.push(Jq(Z[Y]).scale($));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],Z=J.tracks,$={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,Y=Z.length;W!==Y;++W)Q.push(G6.toJSON(Z[W]));return $}static CreateFromMorphTargetSequence(J,Q,Z,$){let W=Q.length,Y=[];for(let X=0;X<W;X++){let H=[],q=[];H.push((X+W-1)%W,X,(X+1)%W),q.push(0,1,0);let K=tH(H);if(H=CZ(H,1,K),q=CZ(q,1,K),!$&&H[0]===0)H.push(W),q.push(q[0]);Y.push(new l6(".morphTargetInfluences["+Q[X].name+"]",H,q).scale(1/Z))}return new this(J,-1,Y)}static findByName(J,Q){let Z=J;if(!Array.isArray(J)){let $=J;Z=$.geometry&&$.geometry.animations||$.animations}for(let $=0;$<Z.length;$++)if(Z[$].name===Q)return Z[$];return null}static CreateClipsFromMorphTargetSequences(J,Q,Z){let $={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,H=J.length;X<H;X++){let q=J[X],K=q.name.match(W);if(K&&K.length>1){let G=K[1],U=$[G];if(!U)$[G]=U=[];U.push(q)}}let Y=[];for(let X in $)Y.push(this.CreateFromMorphTargetSequence(X,$[X],Q,Z));return Y}static parseAnimation(J,Q){if(!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Z=function(G,U,F,V,N){if(F.length!==0){let R=[],E=[];if(F$(F,R,E,V),R.length!==0)N.push(new G(U,R,E))}},$=[],W=J.name||"default",Y=J.fps||30,X=J.blendMode,H=J.length||-1,q=J.hierarchy||[];for(let G=0;G<q.length;G++){let U=q[G].keys;if(!U||U.length===0)continue;if(U[0].morphTargets){let F={},V;for(V=0;V<U.length;V++)if(U[V].morphTargets)for(let N=0;N<U[V].morphTargets.length;N++)F[U[V].morphTargets[N]]=-1;for(let N in F){let R=[],E=[];for(let O=0;O!==U[V].morphTargets.length;++O){let M=U[V];R.push(M.time),E.push(M.morphTarget===N?1:0)}$.push(new l6(".morphTargetInfluence["+N+"]",R,E))}H=F.length*Y}else{let F=".bones["+Q[G].name+"]";Z(d6,F+".position",U,"pos",$),Z(s6,F+".quaternion",U,"rot",$),Z(d6,F+".scale",U,"scl",$)}}if($.length===0)return null;return new this(W,H,$,X)}resetDuration(){let J=this.tracks,Q=0;for(let Z=0,$=J.length;Z!==$;++Z){let W=this.tracks[Z];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function eH(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return l6;case"vector":case"vector2":case"vector3":case"vector4":return d6;case"color":return vJ;case"quaternion":return s6;case"bool":case"boolean":return V8;case"string":return E8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function Jq(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=eH(J.type);if(J.times===void 0){let Z=[],$=[];F$(J.keys,Z,$,"value"),J.times=Z,J.values=$}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var u6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class R${constructor(J,Q,Z){let $=this,W=!1,Y=0,X=0,H=void 0,q=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this.itemStart=function(K){if(X++,W===!1){if($.onStart!==void 0)$.onStart(K,Y,X)}W=!0},this.itemEnd=function(K){if(Y++,$.onProgress!==void 0)$.onProgress(K,Y,X);if(Y===X){if(W=!1,$.onLoad!==void 0)$.onLoad()}},this.itemError=function(K){if($.onError!==void 0)$.onError(K)},this.resolveURL=function(K){if(H)return H(K);return K},this.setURLModifier=function(K){return H=K,this},this.addHandler=function(K,G){return q.push(K,G),this},this.removeHandler=function(K){let G=q.indexOf(K);if(G!==-1)q.splice(G,2);return this},this.getHandler=function(K){for(let G=0,U=q.length;G<U;G+=2){let F=q[G],V=q[G+1];if(F.global)F.lastIndex=0;if(F.test(K))return V}return null}}}var Qq=new R$;class o5{constructor(J){this.manager=J!==void 0?J:Qq,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let Z=this;return new Promise(function($,W){Z.load(J,$,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}o5.DEFAULT_MATERIAL_NAME="__DEFAULT";var _6={};class B$ extends Error{constructor(J,Q){super(J);this.response=Q}}class i6 extends o5{constructor(J){super(J)}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=u6.get(J);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(_6[J]!==void 0){_6[J].push({onLoad:Q,onProgress:Z,onError:$});return}_6[J]=[],_6[J].push({onLoad:Q,onProgress:Z,onError:$});let Y=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),X=this.mimeType,H=this.responseType;fetch(Y).then((q)=>{if(q.status===200||q.status===0){if(q.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||q.body===void 0||q.body.getReader===void 0)return q;let K=_6[J],G=q.body.getReader(),U=q.headers.get("X-File-Size")||q.headers.get("Content-Length"),F=U?parseInt(U):0,V=F!==0,N=0,R=new ReadableStream({start(E){O();function O(){G.read().then(({done:M,value:C})=>{if(M)E.close();else{N+=C.byteLength;let I=new ProgressEvent("progress",{lengthComputable:V,loaded:N,total:F});for(let y=0,L=K.length;y<L;y++){let S=K[y];if(S.onProgress)S.onProgress(I)}E.enqueue(C),O()}},(M)=>{E.error(M)})}}});return new Response(R)}else throw new B$(`fetch for "${q.url}" responded with ${q.status}: ${q.statusText}`,q)}).then((q)=>{switch(H){case"arraybuffer":return q.arrayBuffer();case"blob":return q.blob();case"document":return q.text().then((K)=>{return new DOMParser().parseFromString(K,X)});case"json":return q.json();default:if(X===void 0)return q.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),U=G&&G[1]?G[1].toLowerCase():void 0,F=new TextDecoder(U);return q.arrayBuffer().then((V)=>F.decode(V))}}}).then((q)=>{u6.add(J,q);let K=_6[J];delete _6[J];for(let G=0,U=K.length;G<U;G++){let F=K[G];if(F.onLoad)F.onLoad(q)}}).catch((q)=>{let K=_6[J];if(K===void 0)throw this.manager.itemError(J),q;delete _6[J];for(let G=0,U=K.length;G<U;G++){let F=K[G];if(F.onError)F.onError(q)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class z$ extends o5{constructor(J){super(J)}load(J,Q,Z,$){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=u6.get(J);if(Y!==void 0)return W.manager.itemStart(J),setTimeout(function(){if(Q)Q(Y);W.manager.itemEnd(J)},0),Y;let X=U9("img");function H(){if(K(),u6.add(J,this),Q)Q(this);W.manager.itemEnd(J)}function q(G){if(K(),$)$(G);W.manager.itemError(J),W.manager.itemEnd(J)}function K(){X.removeEventListener("load",H,!1),X.removeEventListener("error",q,!1)}if(X.addEventListener("load",H,!1),X.addEventListener("error",q,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return W.manager.itemStart(J),X.src=J,X}}class xJ extends o5{constructor(J){super(J)}load(J,Q,Z,$){let W=new N5,Y=new z$(this.manager);return Y.setCrossOrigin(this.crossOrigin),Y.setPath(this.path),Y.load(J,function(X){if(W.image=X,W.needsUpdate=!0,Q!==void 0)Q(W)},Z,$),W}}class N9 extends Z5{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new N0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class hJ extends N9{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Z5.DEFAULT_UP),this.updateMatrix(),this.groundColor=new N0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var qJ=new j0,_Z=new P,wZ=new P;class O7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new M0(512,512),this.map=null,this.mapPass=null,this.matrix=new j0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new G7,this._frameExtents=new M0(1,1),this._viewportCount=1,this._viewports=[new e0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,Z=this.matrix;_Z.setFromMatrixPosition(J.matrixWorld),Q.position.copy(_Z),wZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(wZ),Q.updateMatrixWorld(),qJ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qJ),Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Z.multiply(qJ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class M$ extends O7{constructor(){super(new A5(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(J){let Q=this.camera,Z=u8*2*J.angle*this.focus,$=this.mapSize.width/this.mapSize.height,W=J.distance||Q.far;if(Z!==Q.fov||$!==Q.aspect||W!==Q.far)Q.fov=Z,Q.aspect=$,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class bJ extends N9{constructor(J,Q,Z=0,$=Math.PI/3,W=0,Y=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Z5.DEFAULT_UP),this.updateMatrix(),this.target=new Z5,this.distance=Z,this.angle=$,this.penumbra=W,this.decay=Y,this.map=null,this.shadow=new M$}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var IZ=new j0,H9=new P,KJ=new P;class k$ extends O7{constructor(){super(new A5(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new M0(4,2),this._viewportCount=6,this._viewports=[new e0(2,1,1,1),new e0(0,1,1,1),new e0(3,1,1,1),new e0(1,1,1,1),new e0(3,0,1,1),new e0(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(J,Q=0){let Z=this.camera,$=this.matrix,W=J.distance||Z.far;if(W!==Z.far)Z.far=W,Z.updateProjectionMatrix();H9.setFromMatrixPosition(J.matrixWorld),Z.position.copy(H9),KJ.copy(Z.position),KJ.add(this._cubeDirections[Q]),Z.up.copy(this._cubeUps[Q]),Z.lookAt(KJ),Z.updateMatrixWorld(),$.makeTranslation(-H9.x,-H9.y,-H9.z),IZ.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(IZ)}}class R9 extends N9{constructor(J,Q,Z=0,$=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=$,this.shadow=new k$}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class L$ extends O7{constructor(){super(new K8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class o6 extends N9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Z5.DEFAULT_UP),this.updateMatrix(),this.target=new Z5,this.shadow=new L$}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class O8{static decodeText(J){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(J);let Q="";for(let Z=0,$=J.length;Z<$;Z++)Q+=String.fromCharCode(J[Z]);try{return decodeURIComponent(escape(Q))}catch(Z){return Q}}static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class gJ extends o5{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=u6.get(J);if(Y!==void 0){if(W.manager.itemStart(J),Y.then){Y.then((q)=>{if(Q)Q(q);W.manager.itemEnd(J)}).catch((q)=>{if($)$(q)});return}return setTimeout(function(){if(Q)Q(Y);W.manager.itemEnd(J)},0),Y}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader;let H=fetch(J,X).then(function(q){return q.blob()}).then(function(q){return createImageBitmap(q,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(q){if(u6.add(J,q),Q)Q(q);return W.manager.itemEnd(J),q}).catch(function(q){if($)$(q);u6.remove(J),W.manager.itemError(J),W.manager.itemEnd(J)});u6.add(J,H),W.manager.itemStart(J)}}var pJ="\\[\\]\\.:\\/",Zq=new RegExp("["+pJ+"]","g"),uJ="[^"+pJ+"]",$q="[^"+pJ.replace("\\.","")+"]",Wq=/((?:WC+[\/:])*)/.source.replace("WC",uJ),Yq=/(WCOD+)?/.source.replace("WCOD",$q),Xq=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uJ),Hq=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uJ),qq=new RegExp("^"+Wq+Yq+Xq+Hq+"$"),Kq=["material","materials","bones","map"];class D${constructor(J,Q,Z){let $=Z||r0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,$)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,$=this._bindings[Z];if($!==void 0)$.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let $=this._targetGroup.nCachedObjects_,W=Z.length;$!==W;++$)Z[$].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class r0{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||r0.parseTrackName(Q),this.node=r0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new r0(J,Q,Z);else return new r0.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(Zq,"")}static parseTrackName(J){let Q=qq.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},$=Z.nodeName&&Z.nodeName.lastIndexOf(".");if($!==void 0&&$!==-1){let W=Z.nodeName.substring($+1);if(Kq.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,$),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let Y=0;Y<W.length;Y++){let X=W[Y];if(X.name===Q||X.uuid===Q)return X;let H=Z(X.children);if(H)return H}return null},$=Z(J.children);if($)return $}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)J[Q++]=Z[$]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,$=Q.propertyName,W=Q.propertyIndex;if(!J)J=r0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let q=Q.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let K=0;K<J.length;K++)if(J[K].name===q){q=K;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(q!==void 0){if(J[q]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[q]}}let Y=J[$];if(Y===void 0){let q=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+q+"."+$+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)X=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)X=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if($==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=Y,this.propertyIndex=W}else if(Y.fromArray!==void 0&&Y.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=Y;else if(Array.isArray(Y))H=this.BindingType.EntireArray,this.resolvedProperty=Y;else this.propertyName=$;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r0.Composite=D$;r0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r0.prototype.GetterByBindingType=[r0.prototype._getValue_direct,r0.prototype._getValue_array,r0.prototype._getValue_arrayElement,r0.prototype._getValue_toArray];r0.prototype.SetterByBindingTypeAndVersioning=[[r0.prototype._setValue_direct,r0.prototype._setValue_direct_setNeedsUpdate,r0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_array,r0.prototype._setValue_array_setNeedsUpdate,r0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_arrayElement,r0.prototype._setValue_arrayElement_setNeedsUpdate,r0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_fromArray,r0.prototype._setValue_fromArray_setNeedsUpdate,r0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nq=new Float32Array(1);var AZ=new j0;class mJ{constructor(J,Q,Z=0,$=1/0){this.ray=new n6(J,Q),this.near=Z,this.far=$,this.camera=null,this.layers=new K7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else console.error("THREE.Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return AZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(AZ),this}intersectObject(J,Q=!0,Z=[]){return FJ(J,this,Z,Q),Z.sort(PZ),Z}intersectObjects(J,Q=!0,Z=[]){for(let $=0,W=J.length;$<W;$++)FJ(J[$],this,Z,Q);return Z.sort(PZ),Z}}function PZ(J,Q){return J.distance-Q.distance}function FJ(J,Q,Z,$){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)W=!1}if(W===!0&&$===!0){let Y=J.children;for(let X=0,H=Y.length;X<H;X++)FJ(Y[X],Q,Z,!0)}}class N7{constructor(J=1,Q=0,Z=0){return this.radius=J,this.phi=Q,this.theta=Z,this}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(D5(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class lJ extends A6{constructor(J=10,Q=10,Z=4473924,$=8947848){Z=new N0(Z),$=new N0($);let W=Q/2,Y=J/Q,X=J/2,H=[],q=[];for(let U=0,F=0,V=-X;U<=Q;U++,V+=Y){H.push(-X,0,V,X,0,V),H.push(V,0,-X,V,0,X);let N=U===W?Z:$;N.toArray(q,F),F+=3,N.toArray(q,F),F+=3,N.toArray(q,F),F+=3,N.toArray(q,F),F+=3}let K=new G5;K.setAttribute("position",new W5(H,3)),K.setAttribute("color",new W5(q,3));let G=new s5({vertexColors:!0,toneMapped:!1});super(K,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"166"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="166";var C$={type:"change"},dJ={type:"start"},_$={type:"end"},R7=new n6,w$=new U6,Uq=Math.cos(70*E6.DEG2RAD);class cJ extends I6{constructor(J,Q){super();this.object=J,this.domElement=Q,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:X8.ROTATE,MIDDLE:X8.DOLLY,RIGHT:X8.PAN},this.touches={ONE:H8.ROTATE,TWO:H8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return X.phi},this.getAzimuthalAngle=function(){return X.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",W0),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",W0),this._domElementKeyEvents=null},this.saveState=function(){Z.target0.copy(Z.target),Z.position0.copy(Z.object.position),Z.zoom0=Z.object.zoom},this.reset=function(){Z.target.copy(Z.target0),Z.object.position.copy(Z.position0),Z.object.zoom=Z.zoom0,Z.object.updateProjectionMatrix(),Z.dispatchEvent(C$),Z.update(),W=$.NONE},this.update=function(){let A=new P,_=new g5().setFromUnitVectors(J.up,new P(0,1,0)),o=_.clone().invert(),p=new P,c=new g5,Q0=new P,O0=2*Math.PI;return function(X5=null){let U5=Z.object.position;if(A.copy(U5).sub(Z.target),A.applyQuaternion(_),X.setFromVector3(A),Z.autoRotate&&W===$.NONE)j(D(X5));if(Z.enableDamping)X.theta+=H.theta*Z.dampingFactor,X.phi+=H.phi*Z.dampingFactor;else X.theta+=H.theta,X.phi+=H.phi;let{minAzimuthAngle:b0,maxAzimuthAngle:V5}=Z;if(isFinite(b0)&&isFinite(V5)){if(b0<-Math.PI)b0+=O0;else if(b0>Math.PI)b0-=O0;if(V5<-Math.PI)V5+=O0;else if(V5>Math.PI)V5-=O0;if(b0<=V5)X.theta=Math.max(b0,Math.min(V5,X.theta));else X.theta=X.theta>(b0+V5)/2?Math.max(b0,X.theta):Math.min(V5,X.theta)}if(X.phi=Math.max(Z.minPolarAngle,Math.min(Z.maxPolarAngle,X.phi)),X.makeSafe(),Z.enableDamping===!0)Z.target.addScaledVector(K,Z.dampingFactor);else Z.target.add(K);Z.target.sub(Z.cursor),Z.target.clampLength(Z.minTargetRadius,Z.maxTargetRadius),Z.target.add(Z.cursor);let _5=!1;if(Z.zoomToCursor&&y||Z.object.isOrthographicCamera)X.radius=K0(X.radius);else{let k5=X.radius;X.radius=K0(X.radius*q),_5=k5!=X.radius}if(A.setFromSpherical(X),A.applyQuaternion(o),U5.copy(Z.target).add(A),Z.object.lookAt(Z.target),Z.enableDamping===!0)H.theta*=1-Z.dampingFactor,H.phi*=1-Z.dampingFactor,K.multiplyScalar(1-Z.dampingFactor);else H.set(0,0,0),K.set(0,0,0);if(Z.zoomToCursor&&y){let k5=null;if(Z.object.isPerspectiveCamera){let z6=A.length();k5=K0(z6*q);let r6=z6-k5;Z.object.position.addScaledVector(C,r6),Z.object.updateMatrixWorld(),_5=!!r6}else if(Z.object.isOrthographicCamera){let z6=new P(I.x,I.y,0);z6.unproject(Z.object);let r6=Z.object.zoom;Z.object.zoom=Math.max(Z.minZoom,Math.min(Z.maxZoom,Z.object.zoom/q)),Z.object.updateProjectionMatrix(),_5=r6!==Z.object.zoom;let e8=new P(I.x,I.y,0);e8.unproject(Z.object),Z.object.position.sub(e8).add(z6),Z.object.updateMatrixWorld(),k5=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),Z.zoomToCursor=!1;if(k5!==null)if(this.screenSpacePanning)Z.target.set(0,0,-1).transformDirection(Z.object.matrix).multiplyScalar(k5).add(Z.object.position);else if(R7.origin.copy(Z.object.position),R7.direction.set(0,0,-1).transformDirection(Z.object.matrix),Math.abs(Z.object.up.dot(R7.direction))<Uq)J.lookAt(Z.target);else w$.setFromNormalAndCoplanarPoint(Z.object.up,Z.target),R7.intersectPlane(w$,Z.target)}else if(Z.object.isOrthographicCamera){let k5=Z.object.zoom;if(Z.object.zoom=Math.max(Z.minZoom,Math.min(Z.maxZoom,Z.object.zoom/q)),k5!==Z.object.zoom)Z.object.updateProjectionMatrix(),_5=!0}if(q=1,y=!1,_5||p.distanceToSquared(Z.object.position)>Y||8*(1-c.dot(Z.object.quaternion))>Y||Q0.distanceToSquared(Z.target)>Y)return Z.dispatchEvent(C$),p.copy(Z.object.position),c.copy(Z.object.quaternion),Q0.copy(Z.target),!0;return!1}}(),this.dispose=function(){if(Z.domElement.removeEventListener("contextmenu",J0),Z.domElement.removeEventListener("pointerdown",S0),Z.domElement.removeEventListener("pointercancel",w),Z.domElement.removeEventListener("wheel",a),Z.domElement.removeEventListener("pointermove",$5),Z.domElement.removeEventListener("pointerup",w),Z.domElement.getRootNode().removeEventListener("keydown",t,{capture:!0}),Z._domElementKeyEvents!==null)Z._domElementKeyEvents.removeEventListener("keydown",W0),Z._domElementKeyEvents=null};let Z=this,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},W=$.NONE,Y=0.000001,X=new N7,H=new N7,q=1,K=new P,G=new M0,U=new M0,F=new M0,V=new M0,N=new M0,R=new M0,E=new M0,O=new M0,M=new M0,C=new P,I=new M0,y=!1,L=[],S={},b=!1;function D(A){if(A!==null)return 2*Math.PI/60*Z.autoRotateSpeed*A;else return 2*Math.PI/60/60*Z.autoRotateSpeed}function k(A){let _=Math.abs(A*0.01);return Math.pow(0.95,Z.zoomSpeed*_)}function j(A){H.theta-=A}function u(A){H.phi-=A}let n=function(){let A=new P;return function(o,p){A.setFromMatrixColumn(p,0),A.multiplyScalar(-o),K.add(A)}}(),d=function(){let A=new P;return function(o,p){if(Z.screenSpacePanning===!0)A.setFromMatrixColumn(p,1);else A.setFromMatrixColumn(p,0),A.crossVectors(Z.object.up,A);A.multiplyScalar(o),K.add(A)}}(),s=function(){let A=new P;return function(o,p){let c=Z.domElement;if(Z.object.isPerspectiveCamera){let Q0=Z.object.position;A.copy(Q0).sub(Z.target);let O0=A.length();O0*=Math.tan(Z.object.fov/2*Math.PI/180),n(2*o*O0/c.clientHeight,Z.object.matrix),d(2*p*O0/c.clientHeight,Z.object.matrix)}else if(Z.object.isOrthographicCamera)n(o*(Z.object.right-Z.object.left)/Z.object.zoom/c.clientWidth,Z.object.matrix),d(p*(Z.object.top-Z.object.bottom)/Z.object.zoom/c.clientHeight,Z.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),Z.enablePan=!1}}();function l(A){if(Z.object.isPerspectiveCamera||Z.object.isOrthographicCamera)q/=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Z.enableZoom=!1}function e(A){if(Z.object.isPerspectiveCamera||Z.object.isOrthographicCamera)q*=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Z.enableZoom=!1}function m(A,_){if(!Z.zoomToCursor)return;y=!0;let o=Z.domElement.getBoundingClientRect(),p=A-o.left,c=_-o.top,Q0=o.width,O0=o.height;I.x=p/Q0*2-1,I.y=-(c/O0)*2+1,C.set(I.x,I.y,1).unproject(Z.object).sub(Z.object.position).normalize()}function K0(A){return Math.max(Z.minDistance,Math.min(Z.maxDistance,A))}function F0(A){G.set(A.clientX,A.clientY)}function C0(A){m(A.clientX,A.clientX),E.set(A.clientX,A.clientY)}function x0(A){V.set(A.clientX,A.clientY)}function i(A){U.set(A.clientX,A.clientY),F.subVectors(U,G).multiplyScalar(Z.rotateSpeed);let _=Z.domElement;j(2*Math.PI*F.x/_.clientHeight),u(2*Math.PI*F.y/_.clientHeight),G.copy(U),Z.update()}function $0(A){if(O.set(A.clientX,A.clientY),M.subVectors(O,E),M.y>0)l(k(M.y));else if(M.y<0)e(k(M.y));E.copy(O),Z.update()}function U0(A){N.set(A.clientX,A.clientY),R.subVectors(N,V).multiplyScalar(Z.panSpeed),s(R.x,R.y),V.copy(N),Z.update()}function k0(A){if(m(A.clientX,A.clientY),A.deltaY<0)e(k(A.deltaY));else if(A.deltaY>0)l(k(A.deltaY));Z.update()}function G0(A){let _=!1;switch(A.code){case Z.keys.UP:if(A.ctrlKey||A.metaKey||A.shiftKey)u(2*Math.PI*Z.rotateSpeed/Z.domElement.clientHeight);else s(0,Z.keyPanSpeed);_=!0;break;case Z.keys.BOTTOM:if(A.ctrlKey||A.metaKey||A.shiftKey)u(-2*Math.PI*Z.rotateSpeed/Z.domElement.clientHeight);else s(0,-Z.keyPanSpeed);_=!0;break;case Z.keys.LEFT:if(A.ctrlKey||A.metaKey||A.shiftKey)j(2*Math.PI*Z.rotateSpeed/Z.domElement.clientHeight);else s(Z.keyPanSpeed,0);_=!0;break;case Z.keys.RIGHT:if(A.ctrlKey||A.metaKey||A.shiftKey)j(-2*Math.PI*Z.rotateSpeed/Z.domElement.clientHeight);else s(-Z.keyPanSpeed,0);_=!0;break}if(_)A.preventDefault(),Z.update()}function P0(A){if(L.length===1)G.set(A.pageX,A.pageY);else{let _=I0(A),o=0.5*(A.pageX+_.x),p=0.5*(A.pageY+_.y);G.set(o,p)}}function J5(A){if(L.length===1)V.set(A.pageX,A.pageY);else{let _=I0(A),o=0.5*(A.pageX+_.x),p=0.5*(A.pageY+_.y);V.set(o,p)}}function h0(A){let _=I0(A),o=A.pageX-_.x,p=A.pageY-_.y,c=Math.sqrt(o*o+p*p);E.set(0,c)}function T(A){if(Z.enableZoom)h0(A);if(Z.enablePan)J5(A)}function Y5(A){if(Z.enableZoom)h0(A);if(Z.enableRotate)P0(A)}function p0(A){if(L.length==1)U.set(A.pageX,A.pageY);else{let o=I0(A),p=0.5*(A.pageX+o.x),c=0.5*(A.pageY+o.y);U.set(p,c)}F.subVectors(U,G).multiplyScalar(Z.rotateSpeed);let _=Z.domElement;j(2*Math.PI*F.x/_.clientHeight),u(2*Math.PI*F.y/_.clientHeight),G.copy(U)}function Q5(A){if(L.length===1)N.set(A.pageX,A.pageY);else{let _=I0(A),o=0.5*(A.pageX+_.x),p=0.5*(A.pageY+_.y);N.set(o,p)}R.subVectors(N,V).multiplyScalar(Z.panSpeed),s(R.x,R.y),V.copy(N)}function L0(A){let _=I0(A),o=A.pageX-_.x,p=A.pageY-_.y,c=Math.sqrt(o*o+p*p);O.set(0,c),M.set(0,Math.pow(O.y/E.y,Z.zoomSpeed)),l(M.y),E.copy(O);let Q0=(A.pageX+_.x)*0.5,O0=(A.pageY+_.y)*0.5;m(Q0,O0)}function c0(A){if(Z.enableZoom)L0(A);if(Z.enablePan)Q5(A)}function T0(A){if(Z.enableZoom)L0(A);if(Z.enableRotate)p0(A)}function S0(A){if(Z.enabled===!1)return;if(L.length===0)Z.domElement.setPointerCapture(A.pointerId),Z.domElement.addEventListener("pointermove",$5),Z.domElement.addEventListener("pointerup",w);if(_0(A))return;if(R0(A),A.pointerType==="touch")Y0(A);else B(A)}function $5(A){if(Z.enabled===!1)return;if(A.pointerType==="touch")y0(A);else g(A)}function w(A){switch(m0(A),L.length){case 0:Z.domElement.releasePointerCapture(A.pointerId),Z.domElement.removeEventListener("pointermove",$5),Z.domElement.removeEventListener("pointerup",w),Z.dispatchEvent(_$),W=$.NONE;break;case 1:let _=L[0],o=S[_];Y0({pointerId:_,pageX:o.x,pageY:o.y});break}}function B(A){let _;switch(A.button){case 0:_=Z.mouseButtons.LEFT;break;case 1:_=Z.mouseButtons.MIDDLE;break;case 2:_=Z.mouseButtons.RIGHT;break;default:_=-1}switch(_){case X8.DOLLY:if(Z.enableZoom===!1)return;C0(A),W=$.DOLLY;break;case X8.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(Z.enablePan===!1)return;x0(A),W=$.PAN}else{if(Z.enableRotate===!1)return;F0(A),W=$.ROTATE}break;case X8.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(Z.enableRotate===!1)return;F0(A),W=$.ROTATE}else{if(Z.enablePan===!1)return;x0(A),W=$.PAN}break;default:W=$.NONE}if(W!==$.NONE)Z.dispatchEvent(dJ)}function g(A){switch(W){case $.ROTATE:if(Z.enableRotate===!1)return;i(A);break;case $.DOLLY:if(Z.enableZoom===!1)return;$0(A);break;case $.PAN:if(Z.enablePan===!1)return;U0(A);break}}function a(A){if(Z.enabled===!1||Z.enableZoom===!1||W!==$.NONE)return;A.preventDefault(),Z.dispatchEvent(dJ),k0(r(A)),Z.dispatchEvent(_$)}function r(A){let _=A.deltaMode,o={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(_){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}if(A.ctrlKey&&!b)o.deltaY*=10;return o}function t(A){if(A.key==="Control")b=!0,Z.domElement.getRootNode().addEventListener("keyup",z0,{passive:!0,capture:!0})}function z0(A){if(A.key==="Control")b=!1,Z.domElement.getRootNode().removeEventListener("keyup",z0,{passive:!0,capture:!0})}function W0(A){if(Z.enabled===!1||Z.enablePan===!1)return;G0(A)}function Y0(A){switch(X0(A),L.length){case 1:switch(Z.touches.ONE){case H8.ROTATE:if(Z.enableRotate===!1)return;P0(A),W=$.TOUCH_ROTATE;break;case H8.PAN:if(Z.enablePan===!1)return;J5(A),W=$.TOUCH_PAN;break;default:W=$.NONE}break;case 2:switch(Z.touches.TWO){case H8.DOLLY_PAN:if(Z.enableZoom===!1&&Z.enablePan===!1)return;T(A),W=$.TOUCH_DOLLY_PAN;break;case H8.DOLLY_ROTATE:if(Z.enableZoom===!1&&Z.enableRotate===!1)return;Y5(A),W=$.TOUCH_DOLLY_ROTATE;break;default:W=$.NONE}break;default:W=$.NONE}if(W!==$.NONE)Z.dispatchEvent(dJ)}function y0(A){switch(X0(A),W){case $.TOUCH_ROTATE:if(Z.enableRotate===!1)return;p0(A),Z.update();break;case $.TOUCH_PAN:if(Z.enablePan===!1)return;Q5(A),Z.update();break;case $.TOUCH_DOLLY_PAN:if(Z.enableZoom===!1&&Z.enablePan===!1)return;c0(A),Z.update();break;case $.TOUCH_DOLLY_ROTATE:if(Z.enableZoom===!1&&Z.enableRotate===!1)return;T0(A),Z.update();break;default:W=$.NONE}}function J0(A){if(Z.enabled===!1)return;A.preventDefault()}function R0(A){L.push(A.pointerId)}function m0(A){delete S[A.pointerId];for(let _=0;_<L.length;_++)if(L[_]==A.pointerId){L.splice(_,1);return}}function _0(A){for(let _=0;_<L.length;_++)if(L[_]==A.pointerId)return!0;return!1}function X0(A){let _=S[A.pointerId];if(_===void 0)_=new M0,S[A.pointerId]=_;_.set(A.pageX,A.pageY)}function I0(A){let _=A.pointerId===L[0]?L[1]:L[0];return S[_]}Z.domElement.addEventListener("contextmenu",J0),Z.domElement.addEventListener("pointerdown",S0),Z.domElement.addEventListener("pointercancel",w),Z.domElement.addEventListener("wheel",a,{passive:!1}),Z.domElement.getRootNode().addEventListener("keydown",t,{passive:!0,capture:!0}),this.update()}}class nJ extends o5{constructor(J){super(J)}load(J,Q,Z,$){let W=this,Y=new i6(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Q(W.parse(X))}catch(H){if($)$(H);else console.error(H);W.manager.itemError(J)}},Z,$)}parse(J){function Q(q){let K=new DataView(q),G=50;if(84+K.getUint32(80,!0)*50===K.byteLength)return!0;let V=[115,111,108,105,100];for(let N=0;N<5;N++)if(Z(V,K,N))return!1;return!0}function Z(q,K,G){for(let U=0,F=q.length;U<F;U++)if(q[U]!==K.getUint8(G+U))return!1;return!0}function $(q){let K=new DataView(q),G=K.getUint32(80,!0),U,F,V,N=!1,R,E,O,M,C;for(let k=0;k<70;k++)if(K.getUint32(k,!1)==1129270351&&K.getUint8(k+4)==82&&K.getUint8(k+5)==61)N=!0,R=new Float32Array(G*3*3),E=K.getUint8(k+6)/255,O=K.getUint8(k+7)/255,M=K.getUint8(k+8)/255,C=K.getUint8(k+9)/255;let I=84,y=50,L=new G5,S=new Float32Array(G*3*3),b=new Float32Array(G*3*3),D=new N0;for(let k=0;k<G;k++){let j=I+k*y,u=K.getFloat32(j,!0),n=K.getFloat32(j+4,!0),d=K.getFloat32(j+8,!0);if(N){let s=K.getUint16(j+48,!0);if((s&32768)===0)U=(s&31)/31,F=(s>>5&31)/31,V=(s>>10&31)/31;else U=E,F=O,V=M}for(let s=1;s<=3;s++){let l=j+s*12,e=k*3*3+(s-1)*3;if(S[e]=K.getFloat32(l,!0),S[e+1]=K.getFloat32(l+4,!0),S[e+2]=K.getFloat32(l+8,!0),b[e]=u,b[e+1]=n,b[e+2]=d,N)D.set(U,F,V).convertSRGBToLinear(),R[e]=D.r,R[e+1]=D.g,R[e+2]=D.b}}if(L.setAttribute("position",new K5(S,3)),L.setAttribute("normal",new K5(b,3)),N)L.setAttribute("color",new K5(R,3)),L.hasColors=!0,L.alpha=C;return L}function W(q){let K=new G5,G=/solid([\s\S]*?)endsolid/g,U=/facet([\s\S]*?)endfacet/g,F=/solid\s(.+)/,V=0,N=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,R=new RegExp("vertex"+N+N+N,"g"),E=new RegExp("normal"+N+N+N,"g"),O=[],M=[],C=[],I=new P,y,L=0,S=0,b=0;while((y=G.exec(q))!==null){S=b;let D=y[0],k=(y=F.exec(D))!==null?y[1]:"";C.push(k);while((y=U.exec(D))!==null){let n=0,d=0,s=y[0];while((y=E.exec(s))!==null)I.x=parseFloat(y[1]),I.y=parseFloat(y[2]),I.z=parseFloat(y[3]),d++;while((y=R.exec(s))!==null)O.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),M.push(I.x,I.y,I.z),n++,b++;if(d!==1)console.error("THREE.STLLoader: Something isn't right with the normal of face number "+V);if(n!==3)console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+V);V++}let j=S,u=b-S;K.userData.groupNames=C,K.addGroup(j,u,L),L++}return K.setAttribute("position",new W5(O,3)),K.setAttribute("normal",new W5(M,3)),K}function Y(q){if(typeof q!=="string")return new TextDecoder().decode(q);return q}function X(q){if(typeof q==="string"){let K=new Uint8Array(q.length);for(let G=0;G<q.length;G++)K[G]=q.charCodeAt(G)&255;return K.buffer||K}else return q}let H=X(J);return Q(H)?$(H):W(Y(J))}}function sJ(J,Q){if(Q===mZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===V9||Q===q7){let Z=J.getIndex();if(Z===null){let X=[],H=J.getAttribute("position");if(H!==void 0){for(let q=0;q<H.count;q++)X.push(q);J.setIndex(X),Z=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let $=Z.count-2,W=[];if(Q===V9)for(let X=1;X<=$;X++)W.push(Z.getX(0)),W.push(Z.getX(X)),W.push(Z.getX(X+1));else for(let X=0;X<$;X++)if(X%2===0)W.push(Z.getX(X)),W.push(Z.getX(X+1)),W.push(Z.getX(X+2));else W.push(Z.getX(X+2)),W.push(Z.getX(X+1)),W.push(Z.getX(X));if(W.length/3!==$)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let Y=J.clone();return Y.setIndex(W),Y.clearGroups(),Y}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class eJ extends o5{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new v$(Q)}),this.register(function(Q){return new f$(Q)}),this.register(function(Q){return new d$(Q)}),this.register(function(Q){return new c$(Q)}),this.register(function(Q){return new n$(Q)}),this.register(function(Q){return new h$(Q)}),this.register(function(Q){return new b$(Q)}),this.register(function(Q){return new g$(Q)}),this.register(function(Q){return new p$(Q)}),this.register(function(Q){return new y$(Q)}),this.register(function(Q){return new u$(Q)}),this.register(function(Q){return new x$(Q)}),this.register(function(Q){return new l$(Q)}),this.register(function(Q){return new m$(Q)}),this.register(function(Q){return new S$(Q)}),this.register(function(Q){return new s$(Q)}),this.register(function(Q){return new i$(Q)})}load(J,Q,Z,$){let W=this,Y;if(this.resourcePath!=="")Y=this.resourcePath;else if(this.path!==""){let q=O8.extractUrlBase(J);Y=O8.resolveURL(q,this.path)}else Y=O8.extractUrlBase(J);this.manager.itemStart(J);let X=function(q){if($)$(q);else console.error(q);W.manager.itemError(J),W.manager.itemEnd(J)},H=new i6(this.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(q){try{W.parse(q,Y,function(K){Q(K),W.manager.itemEnd(J)},X)}catch(K){X(K)}},Z,X)}setDRACOLoader(J){return this.dracoLoader=J,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,Z,$){let W,Y={},X={},H=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(H.decode(new Uint8Array(J,0,4))===o$){try{Y[u0.KHR_BINARY_GLTF]=new a$(J)}catch(G){if($)$(G);return}W=JSON.parse(Y[u0.KHR_BINARY_GLTF].content)}else W=JSON.parse(H.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if($)$(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let q=new QW(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});q.fileLoader.setRequestHeader(this.requestHeader);for(let K=0;K<this.pluginCallbacks.length;K++){let G=this.pluginCallbacks[K](q);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,Y[G.name]=!0}if(W.extensionsUsed)for(let K=0;K<W.extensionsUsed.length;++K){let G=W.extensionsUsed[K],U=W.extensionsRequired||[];switch(G){case u0.KHR_MATERIALS_UNLIT:Y[G]=new j$;break;case u0.KHR_DRACO_MESH_COMPRESSION:Y[G]=new r$(W,this.dracoLoader);break;case u0.KHR_TEXTURE_TRANSFORM:Y[G]=new t$;break;case u0.KHR_MESH_QUANTIZATION:Y[G]=new e$;break;default:if(U.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}q.setExtensions(Y),q.setPlugins(X),q.parse(Z,$)}parseAsync(J,Q){let Z=this;return new Promise(function($,W){Z.parse(J,Q,$,W)})}}function Fq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,Z){J[Q]=Z},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var u0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class S${constructor(J){this.parser=J,this.name=u0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,Z="light:"+J,$=Q.cache.get(Z);if($)return $;let W=Q.json,H=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],q,K=new N0(16777215);if(H.color!==void 0)K.setRGB(H.color[0],H.color[1],H.color[2],V6);let G=H.range!==void 0?H.range:0;switch(H.type){case"directional":q=new o6(K),q.target.position.set(0,0,-1),q.add(q.target);break;case"point":q=new R9(K),q.distance=G;break;case"spot":q=new bJ(K),q.distance=G,H.spot=H.spot||{},H.spot.innerConeAngle=H.spot.innerConeAngle!==void 0?H.spot.innerConeAngle:0,H.spot.outerConeAngle=H.spot.outerConeAngle!==void 0?H.spot.outerConeAngle:Math.PI/4,q.angle=H.spot.outerConeAngle,q.penumbra=1-H.spot.innerConeAngle/H.spot.outerConeAngle,q.target.position.set(0,0,-1),q.add(q.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+H.type)}if(q.position.set(0,0,0),q.decay=2,T6(q,H),H.intensity!==void 0)q.intensity=H.intensity;return q.name=Q.createUniqueName(H.name||"light_"+J),$=Promise.resolve(q),Q.cache.add(Z,$),$}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,Z=this.parser,W=Z.json.nodes[J],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(H){return Z._getNodeRef(Q.cache,X,H)})}}class j${constructor(){this.name=u0.KHR_MATERIALS_UNLIT}getMaterialType(){return q6}extendParams(J,Q,Z){let $=[];J.color=new N0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let Y=W.baseColorFactor;J.color.setRGB(Y[0],Y[1],Y[2],V6),J.opacity=Y[3]}if(W.baseColorTexture!==void 0)$.push(Z.assignTexture(J,"map",W.baseColorTexture,c6))}return Promise.all($)}}class y${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class v${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Y.clearcoatFactor!==void 0)Q.clearcoat=Y.clearcoatFactor;if(Y.clearcoatTexture!==void 0)W.push(Z.assignTexture(Q,"clearcoatMap",Y.clearcoatTexture));if(Y.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=Y.clearcoatRoughnessFactor;if(Y.clearcoatRoughnessTexture!==void 0)W.push(Z.assignTexture(Q,"clearcoatRoughnessMap",Y.clearcoatRoughnessTexture));if(Y.clearcoatNormalTexture!==void 0){if(W.push(Z.assignTexture(Q,"clearcoatNormalMap",Y.clearcoatNormalTexture)),Y.clearcoatNormalTexture.scale!==void 0){let X=Y.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new M0(X,X)}}return Promise.all(W)}}class f${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class x${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Y.iridescenceFactor!==void 0)Q.iridescence=Y.iridescenceFactor;if(Y.iridescenceTexture!==void 0)W.push(Z.assignTexture(Q,"iridescenceMap",Y.iridescenceTexture));if(Y.iridescenceIor!==void 0)Q.iridescenceIOR=Y.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(Y.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=Y.iridescenceThicknessMinimum;if(Y.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=Y.iridescenceThicknessMaximum;if(Y.iridescenceThicknessTexture!==void 0)W.push(Z.assignTexture(Q,"iridescenceThicknessMap",Y.iridescenceThicknessTexture));return Promise.all(W)}}class h${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_SHEEN}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new N0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let Y=$.extensions[this.name];if(Y.sheenColorFactor!==void 0){let X=Y.sheenColorFactor;Q.sheenColor.setRGB(X[0],X[1],X[2],V6)}if(Y.sheenRoughnessFactor!==void 0)Q.sheenRoughness=Y.sheenRoughnessFactor;if(Y.sheenColorTexture!==void 0)W.push(Z.assignTexture(Q,"sheenColorMap",Y.sheenColorTexture,c6));if(Y.sheenRoughnessTexture!==void 0)W.push(Z.assignTexture(Q,"sheenRoughnessMap",Y.sheenRoughnessTexture));return Promise.all(W)}}class b${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Y.transmissionFactor!==void 0)Q.transmission=Y.transmissionFactor;if(Y.transmissionTexture!==void 0)W.push(Z.assignTexture(Q,"transmissionMap",Y.transmissionTexture));return Promise.all(W)}}class g${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_VOLUME}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Q.thickness=Y.thicknessFactor!==void 0?Y.thicknessFactor:0,Y.thicknessTexture!==void 0)W.push(Z.assignTexture(Q,"thicknessMap",Y.thicknessTexture));Q.attenuationDistance=Y.attenuationDistance||1/0;let X=Y.attenuationColor||[1,1,1];return Q.attenuationColor=new N0().setRGB(X[0],X[1],X[2],V6),Promise.all(W)}}class p${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_IOR}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class u${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Q.specularIntensity=Y.specularFactor!==void 0?Y.specularFactor:1,Y.specularTexture!==void 0)W.push(Z.assignTexture(Q,"specularIntensityMap",Y.specularTexture));let X=Y.specularColorFactor||[1,1,1];if(Q.specularColor=new N0().setRGB(X[0],X[1],X[2],V6),Y.specularColorTexture!==void 0)W.push(Z.assignTexture(Q,"specularColorMap",Y.specularColorTexture,c6));return Promise.all(W)}}class m${constructor(J){this.parser=J,this.name=u0.EXT_MATERIALS_BUMP}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Q.bumpScale=Y.bumpFactor!==void 0?Y.bumpFactor:1,Y.bumpTexture!==void 0)W.push(Z.assignTexture(Q,"bumpMap",Y.bumpTexture));return Promise.all(W)}}class l${constructor(J){this.parser=J,this.name=u0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return i5}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],Y=$.extensions[this.name];if(Y.anisotropyStrength!==void 0)Q.anisotropy=Y.anisotropyStrength;if(Y.anisotropyRotation!==void 0)Q.anisotropyRotation=Y.anisotropyRotation;if(Y.anisotropyTexture!==void 0)W.push(Z.assignTexture(Q,"anisotropyMap",Y.anisotropyTexture));return Promise.all(W)}}class d${constructor(J){this.parser=J,this.name=u0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,Z=Q.json,$=Z.textures[J];if(!$.extensions||!$.extensions[this.name])return null;let W=$.extensions[this.name],Y=Q.options.ktx2Loader;if(!Y)if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,Y)}}class c${constructor(J){this.parser=J,this.name=u0.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(J){let Q=this.name,Z=this.parser,$=Z.json,W=$.textures[J];if(!W.extensions||!W.extensions[Q])return null;let Y=W.extensions[Q],X=$.images[Y.source],H=Z.textureLoader;if(X.uri){let q=Z.options.manager.getHandler(X.uri);if(q!==null)H=q}return this.detectSupport().then(function(q){if(q)return Z.loadTextureImage(J,Y.source,H);if($.extensionsRequired&&$.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return Z.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class n${constructor(J){this.parser=J,this.name=u0.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(J){let Q=this.name,Z=this.parser,$=Z.json,W=$.textures[J];if(!W.extensions||!W.extensions[Q])return null;let Y=W.extensions[Q],X=$.images[Y.source],H=Z.textureLoader;if(X.uri){let q=Z.options.manager.getHandler(X.uri);if(q!==null)H=q}return this.detectSupport().then(function(q){if(q)return Z.loadTextureImage(J,Y.source,H);if($.extensionsRequired&&$.extensionsRequired.indexOf(Q)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return Z.loadTexture(J)})}detectSupport(){if(!this.isSupported)this.isSupported=new Promise(function(J){let Q=new Image;Q.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",Q.onload=Q.onerror=function(){J(Q.height===1)}});return this.isSupported}}class s${constructor(J){this.name=u0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,Z=Q.bufferViews[J];if(Z.extensions&&Z.extensions[this.name]){let $=Z.extensions[this.name],W=this.parser.getDependency("buffer",$.buffer),Y=this.parser.options.meshoptDecoder;if(!Y||!Y.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let H=$.byteOffset||0,q=$.byteLength||0,K=$.count,G=$.byteStride,U=new Uint8Array(X,H,q);if(Y.decodeGltfBufferAsync)return Y.decodeGltfBufferAsync(K,G,U,$.mode,$.filter).then(function(F){return F.buffer});else return Y.ready.then(function(){let F=new ArrayBuffer(K*G);return Y.decodeGltfBuffer(new Uint8Array(F),K,G,U,$.mode,$.filter),F})})}else return null}}class i${constructor(J){this.name=u0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,Z=Q.nodes[J];if(!Z.extensions||!Z.extensions[this.name]||Z.mesh===void 0)return null;let $=Q.meshes[Z.mesh];for(let q of $.primitives)if(q.mode!==a5.TRIANGLES&&q.mode!==a5.TRIANGLE_STRIP&&q.mode!==a5.TRIANGLE_FAN&&q.mode!==void 0)return null;let Y=Z.extensions[this.name].attributes,X=[],H={};for(let q in Y)X.push(this.parser.getDependency("accessor",Y[q]).then((K)=>{return H[q]=K,H[q]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh(J)),Promise.all(X).then((q)=>{let K=q.pop(),G=K.isGroup?K.children:[K],U=q[0].count,F=[];for(let V of G){let N=new j0,R=new P,E=new g5,O=new P(1,1,1),M=new PJ(V.geometry,V.material,U);for(let C=0;C<U;C++){if(H.TRANSLATION)R.fromBufferAttribute(H.TRANSLATION,C);if(H.ROTATION)E.fromBufferAttribute(H.ROTATION,C);if(H.SCALE)O.fromBufferAttribute(H.SCALE,C);M.setMatrixAt(C,N.compose(R,E,O))}for(let C in H)if(C==="_COLOR_0"){let I=H[C];M.instanceColor=new l8(I.array,I.itemSize,I.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE")V.geometry.setAttribute(C,H[C]);Z5.prototype.copy.call(M,V),this.parser.assignFinalMaterial(M),F.push(M)}if(K.isGroup)return K.clear(),K.add(...F),K;return F[0]})}}var o$="glTF",B9=12,I$={JSON:1313821514,BIN:5130562};class a${constructor(J){this.name=u0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,B9),Z=new TextDecoder;if(this.header={magic:Z.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==o$)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let $=this.header.length-B9,W=new DataView(J,B9),Y=0;while(Y<$){let X=W.getUint32(Y,!0);Y+=4;let H=W.getUint32(Y,!0);if(Y+=4,H===I$.JSON){let q=new Uint8Array(J,B9+Y,X);this.content=Z.decode(q)}else if(H===I$.BIN){let q=B9+Y;this.body=J.slice(q,q+X)}Y+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class r${constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=u0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let Z=this.json,$=this.dracoLoader,W=J.extensions[this.name].bufferView,Y=J.extensions[this.name].attributes,X={},H={},q={};for(let K in Y){let G=rJ[K]||K.toLowerCase();X[G]=Y[K]}for(let K in J.attributes){let G=rJ[K]||K.toLowerCase();if(Y[K]!==void 0){let U=Z.accessors[J.attributes[K]],F=n8[U.componentType];q[G]=F.name,H[G]=U.normalized===!0}}return Q.getDependency("bufferView",W).then(function(K){return new Promise(function(G,U){$.decodeDracoFile(K,function(F){for(let V in F.attributes){let N=F.attributes[V],R=H[V];if(R!==void 0)N.normalized=R}G(F)},X,q,V6,U)})})}}class t${constructor(){this.name=u0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class e${constructor(){this.name=u0.KHR_MESH_QUANTIZATION}}class JQ extends F8{constructor(J,Q,Z,$){super(J,Q,Z,$)}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$*3+$;for(let Y=0;Y!==$;Y++)Q[Y]=Z[W+Y];return Q}interpolate_(J,Q,Z,$){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,H=X*2,q=X*3,K=$-Q,G=(Z-Q)/K,U=G*G,F=U*G,V=J*q,N=V-q,R=-2*F+3*U,E=F-U,O=1-R,M=E-U+G;for(let C=0;C!==X;C++){let I=Y[N+C+X],y=Y[N+C+H]*K,L=Y[V+C+X],S=Y[V+C]*K;W[C]=O*I+M*y+R*L+E*S}return W}}var Vq=new g5;class JW extends JQ{interpolate_(J,Q,Z,$){let W=super.interpolate_(J,Q,Z,$);return Vq.fromArray(W).normalize().toArray(W),W}}var a5={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},n8={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},A$={9728:hZ,9729:VJ,9984:bZ,9985:pZ,9986:gZ,9987:EJ},P$={33071:fZ,33648:xZ,10497:H7},iJ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rJ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},a6={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Eq={CUBICSPLINE:void 0,LINEAR:OJ,STEP:uZ},oJ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Oq(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new K6({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:SZ});return J.DefaultMaterial}function N8(J,Q,Z){for(let $ in Z.extensions)if(J[$]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[$]=Z.extensions[$]}function T6(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function Nq(J,Q,Z){let $=!1,W=!1,Y=!1;for(let K=0,G=Q.length;K<G;K++){let U=Q[K];if(U.POSITION!==void 0)$=!0;if(U.NORMAL!==void 0)W=!0;if(U.COLOR_0!==void 0)Y=!0;if($&&W&&Y)break}if(!$&&!W&&!Y)return Promise.resolve(J);let X=[],H=[],q=[];for(let K=0,G=Q.length;K<G;K++){let U=Q[K];if($){let F=U.POSITION!==void 0?Z.getDependency("accessor",U.POSITION):J.attributes.position;X.push(F)}if(W){let F=U.NORMAL!==void 0?Z.getDependency("accessor",U.NORMAL):J.attributes.normal;H.push(F)}if(Y){let F=U.COLOR_0!==void 0?Z.getDependency("accessor",U.COLOR_0):J.attributes.color;q.push(F)}}return Promise.all([Promise.all(X),Promise.all(H),Promise.all(q)]).then(function(K){let G=K[0],U=K[1],F=K[2];if($)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=U;if(Y)J.morphAttributes.color=F;return J.morphTargetsRelative=!0,J})}function Rq(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let Z=0,$=Q.weights.length;Z<$;Z++)J.morphTargetInfluences[Z]=Q.weights[Z];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let Z=Q.extras.targetNames;if(J.morphTargetInfluences.length===Z.length){J.morphTargetDictionary={};for(let $=0,W=Z.length;$<W;$++)J.morphTargetDictionary[Z[$]]=$}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bq(J){let Q,Z=J.extensions&&J.extensions[u0.KHR_DRACO_MESH_COMPRESSION];if(Z)Q="draco:"+Z.bufferView+":"+Z.indices+":"+aJ(Z.attributes);else Q=J.indices+":"+aJ(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let $=0,W=J.targets.length;$<W;$++)Q+=":"+aJ(J.targets[$]);return Q}function aJ(J){let Q="",Z=Object.keys(J).sort();for(let $=0,W=Z.length;$<W;$++)Q+=Z[$]+":"+J[Z[$]]+";";return Q}function tJ(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zq(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";return"image/png"}var Mq=new j0;class QW{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new Fq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Z=!1,$=-1,W=!1,Y=-1;if(typeof navigator<"u"){let X=navigator.userAgent;Z=/^((?!chrome|android).)*safari/i.test(X)===!0;let H=X.match(/Version\/(\d+)/);$=Z&&H?parseInt(H[1],10):-1,W=X.indexOf("Firefox")>-1,Y=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Z&&$<17||W&&Y<98)this.textureLoader=new xJ(this.options.manager);else this.textureLoader=new gJ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new i6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let Z=this,$=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(Y){return Y._markDefs&&Y._markDefs()}),Promise.all(this._invokeAll(function(Y){return Y.beforeRoot&&Y.beforeRoot()})).then(function(){return Promise.all([Z.getDependencies("scene"),Z.getDependencies("animation"),Z.getDependencies("camera")])}).then(function(Y){let X={scene:Y[0][$.scene||0],scenes:Y[0],animations:Y[1],cameras:Y[2],asset:$.asset,parser:Z,userData:{}};return N8(W,X,$),T6(X,$),Promise.all(Z._invokeAll(function(H){return H.afterRoot&&H.afterRoot(X)})).then(function(){for(let H of X.scenes)H.updateMatrixWorld();J(X)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],Z=this.json.meshes||[];for(let $=0,W=Q.length;$<W;$++){let Y=Q[$].joints;for(let X=0,H=Y.length;X<H;X++)J[Y[X]].isBone=!0}for(let $=0,W=J.length;$<W;$++){let Y=J[$];if(Y.mesh!==void 0){if(this._addNodeRef(this.meshCache,Y.mesh),Y.skin!==void 0)Z[Y.mesh].isSkinnedMesh=!0}if(Y.camera!==void 0)this._addNodeRef(this.cameraCache,Y.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,Z){if(J.refs[Q]<=1)return Z;let $=Z.clone(),W=(Y,X)=>{let H=this.associations.get(Y);if(H!=null)this.associations.set(X,H);for(let[q,K]of Y.children.entries())W(K,X.children[q])};return W(Z,$),$.name+="_instance_"+J.uses[Q]++,$}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let Z=0;Z<Q.length;Z++){let $=J(Q[Z]);if($)return $}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let Z=[];for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)Z.push(W)}return Z}getDependency(J,Q){let Z=J+":"+Q,$=this.cache.get(Z);if(!$){switch(J){case"scene":$=this.loadScene(Q);break;case"node":$=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":$=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":$=this.loadAccessor(Q);break;case"bufferView":$=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":$=this.loadBuffer(Q);break;case"material":$=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":$=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":$=this.loadSkin(Q);break;case"animation":$=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":$=this.loadCamera(Q);break;default:if($=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!$)throw Error("Unknown type: "+J);break}this.cache.add(Z,$)}return $}getDependencies(J){let Q=this.cache.get(J);if(!Q){let Z=this,$=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all($.map(function(W,Y){return Z.getDependency(J,Y)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],Z=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[u0.KHR_BINARY_GLTF].body);let $=this.options;return new Promise(function(W,Y){Z.load(O8.resolveURL(Q.uri,$.path),W,void 0,function(){Y(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function(Z){let $=Q.byteLength||0,W=Q.byteOffset||0;return Z.slice(W,W+$)})}loadAccessor(J){let Q=this,Z=this.json,$=this.json.accessors[J];if($.bufferView===void 0&&$.sparse===void 0){let Y=iJ[$.type],X=n8[$.componentType],H=$.normalized===!0,q=new X($.count*Y);return Promise.resolve(new K5(q,Y,H))}let W=[];if($.bufferView!==void 0)W.push(this.getDependency("bufferView",$.bufferView));else W.push(null);if($.sparse!==void 0)W.push(this.getDependency("bufferView",$.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",$.sparse.values.bufferView));return Promise.all(W).then(function(Y){let X=Y[0],H=iJ[$.type],q=n8[$.componentType],K=q.BYTES_PER_ELEMENT,G=K*H,U=$.byteOffset||0,F=$.bufferView!==void 0?Z.bufferViews[$.bufferView].byteStride:void 0,V=$.normalized===!0,N,R;if(F&&F!==G){let E=Math.floor(U/F),O="InterleavedBuffer:"+$.bufferView+":"+$.componentType+":"+E+":"+$.count,M=Q.cache.get(O);if(!M)N=new q(X,E*F,$.count*F/K),M=new F7(N,F/K),Q.cache.add(O,M);R=new O9(M,H,U%F/K,V)}else{if(X===null)N=new q($.count*H);else N=new q(X,U,$.count*H);R=new K5(N,H,V)}if($.sparse!==void 0){let E=iJ.SCALAR,O=n8[$.sparse.indices.componentType],M=$.sparse.indices.byteOffset||0,C=$.sparse.values.byteOffset||0,I=new O(Y[1],M,$.sparse.count*E),y=new q(Y[2],C,$.sparse.count*H);if(X!==null)R=new K5(R.array.slice(),R.itemSize,R.normalized);for(let L=0,S=I.length;L<S;L++){let b=I[L];if(R.setX(b,y[L*H]),H>=2)R.setY(b,y[L*H+1]);if(H>=3)R.setZ(b,y[L*H+2]);if(H>=4)R.setW(b,y[L*H+3]);if(H>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return R})}loadTexture(J){let Q=this.json,Z=this.options,W=Q.textures[J].source,Y=Q.images[W],X=this.textureLoader;if(Y.uri){let H=Z.manager.getHandler(Y.uri);if(H!==null)X=H}return this.loadTextureImage(J,W,X)}loadTextureImage(J,Q,Z){let $=this,W=this.json,Y=W.textures[J],X=W.images[Q],H=(X.uri||X.bufferView)+":"+Y.sampler;if(this.textureCache[H])return this.textureCache[H];let q=this.loadImageSource(Q,Z).then(function(K){if(K.flipY=!1,K.name=Y.name||X.name||"",K.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)K.name=X.uri;let U=(W.samplers||{})[Y.sampler]||{};return K.magFilter=A$[U.magFilter]||VJ,K.minFilter=A$[U.minFilter]||EJ,K.wrapS=P$[U.wrapS]||H7,K.wrapT=P$[U.wrapT]||H7,$.associations.set(K,{textures:J}),K}).catch(function(){return null});return this.textureCache[H]=q,q}loadImageSource(J,Q){let Z=this,$=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let Y=$.images[J],X=self.URL||self.webkitURL,H=Y.uri||"",q=!1;if(Y.bufferView!==void 0)H=Z.getDependency("bufferView",Y.bufferView).then(function(G){q=!0;let U=new Blob([G],{type:Y.mimeType});return H=X.createObjectURL(U),H});else if(Y.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let K=Promise.resolve(H).then(function(G){return new Promise(function(U,F){let V=U;if(Q.isImageBitmapLoader===!0)V=function(N){let R=new N5(N);R.needsUpdate=!0,U(R)};Q.load(O8.resolveURL(G,W.path),V,void 0,F)})}).then(function(G){if(q===!0)X.revokeObjectURL(H);return T6(G,Y),G.userData.mimeType=Y.mimeType||zq(Y.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",H),G});return this.sourceCache[J]=K,K}assignTexture(J,Q,Z,$){let W=this;return this.getDependency("texture",Z.index).then(function(Y){if(!Y)return null;if(Z.texCoord!==void 0&&Z.texCoord>0)Y=Y.clone(),Y.channel=Z.texCoord;if(W.extensions[u0.KHR_TEXTURE_TRANSFORM]){let X=Z.extensions!==void 0?Z.extensions[u0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let H=W.associations.get(Y);Y=W.extensions[u0.KHR_TEXTURE_TRANSFORM].extendTexture(Y,X),W.associations.set(Y,H)}}if($!==void 0)Y.colorSpace=$;return J[Q]=Y,Y})}assignFinalMaterial(J){let{geometry:Q,material:Z}=J,$=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,Y=Q.attributes.normal===void 0;if(J.isPoints){let X="PointsMaterial:"+Z.uuid,H=this.cache.get(X);if(!H)H=new P6,C5.prototype.copy.call(H,Z),H.color.copy(Z.color),H.map=Z.map,H.sizeAttenuation=!1,this.cache.add(X,H);Z=H}else if(J.isLine){let X="LineBasicMaterial:"+Z.uuid,H=this.cache.get(X);if(!H)H=new s5,C5.prototype.copy.call(H,Z),H.color.copy(Z.color),H.map=Z.map,this.cache.add(X,H);Z=H}if($||W||Y){let X="ClonedMaterial:"+Z.uuid+":";if($)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(Y)X+="flat-shading:";let H=this.cache.get(X);if(!H){if(H=Z.clone(),W)H.vertexColors=!0;if(Y)H.flatShading=!0;if($){if(H.normalScale)H.normalScale.y*=-1;if(H.clearcoatNormalScale)H.clearcoatNormalScale.y*=-1}this.cache.add(X,H),this.associations.set(H,this.associations.get(Z))}Z=H}J.material=Z}getMaterialType(){return K6}loadMaterial(J){let Q=this,Z=this.json,$=this.extensions,W=Z.materials[J],Y,X={},H=W.extensions||{},q=[];if(H[u0.KHR_MATERIALS_UNLIT]){let G=$[u0.KHR_MATERIALS_UNLIT];Y=G.getMaterialType(),q.push(G.extendParams(X,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new N0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let U=G.baseColorFactor;X.color.setRGB(U[0],U[1],U[2],V6),X.opacity=U[3]}if(G.baseColorTexture!==void 0)q.push(Q.assignTexture(X,"map",G.baseColorTexture,c6));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)q.push(Q.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),q.push(Q.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));Y=this._invokeOne(function(U){return U.getMaterialType&&U.getMaterialType(J)}),q.push(Promise.all(this._invokeAll(function(U){return U.extendMaterialParams&&U.extendMaterialParams(J,X)})))}if(W.doubleSided===!0)X.side=yZ;let K=W.alphaMode||oJ.OPAQUE;if(K===oJ.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,K===oJ.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&Y!==q6){if(q.push(Q.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new M0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&Y!==q6){if(q.push(Q.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&Y!==q6){let G=W.emissiveFactor;X.emissive=new N0().setRGB(G[0],G[1],G[2],V6)}if(W.emissiveTexture!==void 0&&Y!==q6)q.push(Q.assignTexture(X,"emissiveMap",W.emissiveTexture,c6));return Promise.all(q).then(function(){let G=new Y(X);if(W.name)G.name=W.name;if(T6(G,W),Q.associations.set(G,{materials:J}),W.extensions)N8($,G,W);return G})}createUniqueName(J){let Q=r0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,Z=this.extensions,$=this.primitiveCache;function W(X){return Z[u0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,Q).then(function(H){return T$(H,X,Q)})}let Y=[];for(let X=0,H=J.length;X<H;X++){let q=J[X],K=Bq(q),G=$[K];if(G)Y.push(G.promise);else{let U;if(q.extensions&&q.extensions[u0.KHR_DRACO_MESH_COMPRESSION])U=W(q);else U=T$(new G5,q,Q);$[K]={primitive:q,promise:U},Y.push(U)}}return Promise.all(Y)}loadMesh(J){let Q=this,Z=this.json,$=this.extensions,W=Z.meshes[J],Y=W.primitives,X=[];for(let H=0,q=Y.length;H<q;H++){let K=Y[H].material===void 0?Oq(this.cache):this.getDependency("material",Y[H].material);X.push(K)}return X.push(Q.loadGeometries(Y)),Promise.all(X).then(function(H){let q=H.slice(0,H.length-1),K=H[H.length-1],G=[];for(let F=0,V=K.length;F<V;F++){let N=K[F],R=Y[F],E,O=q[F];if(R.mode===a5.TRIANGLES||R.mode===a5.TRIANGLE_STRIP||R.mode===a5.TRIANGLE_FAN||R.mode===void 0){if(E=W.isSkinnedMesh===!0?new IJ(N,O):new d0(N,O),E.isSkinnedMesh===!0)E.normalizeSkinWeights();if(R.mode===a5.TRIANGLE_STRIP)E.geometry=sJ(E.geometry,q7);else if(R.mode===a5.TRIANGLE_FAN)E.geometry=sJ(E.geometry,V9)}else if(R.mode===a5.LINES)E=new A6(N,O);else if(R.mode===a5.LINE_STRIP)E=new G8(N,O);else if(R.mode===a5.LINE_LOOP)E=new TJ(N,O);else if(R.mode===a5.POINTS)E=new U8(N,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+R.mode);if(Object.keys(E.geometry.morphAttributes).length>0)Rq(E,W);if(E.name=Q.createUniqueName(W.name||"mesh_"+J),T6(E,W),R.extensions)N8($,E,R);Q.assignFinalMaterial(E),G.push(E)}for(let F=0,V=G.length;F<V;F++)Q.associations.set(G[F],{meshes:J,primitives:F});if(G.length===1){if(W.extensions)N8($,G[0],W);return G[0]}let U=new P5;if(W.extensions)N8($,U,W);Q.associations.set(U,{meshes:J});for(let F=0,V=G.length;F<V;F++)U.add(G[F]);return U})}loadCamera(J){let Q,Z=this.json.cameras[J],$=Z[Z.type];if(!$){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Z.type==="perspective")Q=new A5(E6.radToDeg($.yfov),$.aspectRatio||1,$.znear||1,$.zfar||2000000);else if(Z.type==="orthographic")Q=new K8(-$.xmag,$.xmag,$.ymag,-$.ymag,$.znear,$.zfar);if(Z.name)Q.name=this.createUniqueName(Z.name);return T6(Q,Z),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],Z=[];for(let $=0,W=Q.joints.length;$<W;$++)Z.push(this._loadNodeShallow(Q.joints[$]));if(Q.inverseBindMatrices!==void 0)Z.push(this.getDependency("accessor",Q.inverseBindMatrices));else Z.push(null);return Promise.all(Z).then(function($){let W=$.pop(),Y=$,X=[],H=[];for(let q=0,K=Y.length;q<K;q++){let G=Y[q];if(G){X.push(G);let U=new j0;if(W!==null)U.fromArray(W.array,q*16);H.push(U)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[q])}return new E7(X,H)})}loadAnimation(J){let Q=this.json,Z=this,$=Q.animations[J],W=$.name?$.name:"animation_"+J,Y=[],X=[],H=[],q=[],K=[];for(let G=0,U=$.channels.length;G<U;G++){let F=$.channels[G],V=$.samplers[F.sampler],N=F.target,R=N.node,E=$.parameters!==void 0?$.parameters[V.input]:V.input,O=$.parameters!==void 0?$.parameters[V.output]:V.output;if(N.node===void 0)continue;Y.push(this.getDependency("node",R)),X.push(this.getDependency("accessor",E)),H.push(this.getDependency("accessor",O)),q.push(V),K.push(N)}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(q),Promise.all(K)]).then(function(G){let U=G[0],F=G[1],V=G[2],N=G[3],R=G[4],E=[];for(let O=0,M=U.length;O<M;O++){let C=U[O],I=F[O],y=V[O],L=N[O],S=R[O];if(C===void 0)continue;if(C.updateMatrix)C.updateMatrix();let b=Z._createAnimationTracks(C,I,y,L,S);if(b)for(let D=0;D<b.length;D++)E.push(b[D])}return new fJ(W,void 0,E)})}createNodeMesh(J){let Q=this.json,Z=this,$=Q.nodes[J];if($.mesh===void 0)return null;return Z.getDependency("mesh",$.mesh).then(function(W){let Y=Z._getNodeRef(Z.meshCache,$.mesh,W);if($.weights!==void 0)Y.traverse(function(X){if(!X.isMesh)return;for(let H=0,q=$.weights.length;H<q;H++)X.morphTargetInfluences[H]=$.weights[H]});return Y})}loadNode(J){let Q=this.json,Z=this,$=Q.nodes[J],W=Z._loadNodeShallow(J),Y=[],X=$.children||[];for(let q=0,K=X.length;q<K;q++)Y.push(Z.getDependency("node",X[q]));let H=$.skin===void 0?Promise.resolve(null):Z.getDependency("skin",$.skin);return Promise.all([W,Promise.all(Y),H]).then(function(q){let K=q[0],G=q[1],U=q[2];if(U!==null)K.traverse(function(F){if(!F.isSkinnedMesh)return;F.bind(U,Mq)});for(let F=0,V=G.length;F<V;F++)K.add(G[F]);return K})}_loadNodeShallow(J){let Q=this.json,Z=this.extensions,$=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],Y=W.name?$.createUniqueName(W.name):"",X=[],H=$._invokeOne(function(q){return q.createNodeMesh&&q.createNodeMesh(J)});if(H)X.push(H);if(W.camera!==void 0)X.push($.getDependency("camera",W.camera).then(function(q){return $._getNodeRef($.cameraCache,W.camera,q)}));return $._invokeAll(function(q){return q.createNodeAttachment&&q.createNodeAttachment(J)}).forEach(function(q){X.push(q)}),this.nodeCache[J]=Promise.all(X).then(function(q){let K;if(W.isBone===!0)K=new V7;else if(q.length>1)K=new P5;else if(q.length===1)K=q[0];else K=new Z5;if(K!==q[0])for(let G=0,U=q.length;G<U;G++)K.add(q[G]);if(W.name)K.userData.name=W.name,K.name=Y;if(T6(K,W),W.extensions)N8(Z,K,W);if(W.matrix!==void 0){let G=new j0;G.fromArray(W.matrix),K.applyMatrix4(G)}else{if(W.translation!==void 0)K.position.fromArray(W.translation);if(W.rotation!==void 0)K.quaternion.fromArray(W.rotation);if(W.scale!==void 0)K.scale.fromArray(W.scale)}if(!$.associations.has(K))$.associations.set(K,{});return $.associations.get(K).nodes=J,K}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,Z=this.json.scenes[J],$=this,W=new P5;if(Z.name)W.name=$.createUniqueName(Z.name);if(T6(W,Z),Z.extensions)N8(Q,W,Z);let Y=Z.nodes||[],X=[];for(let H=0,q=Y.length;H<q;H++)X.push($.getDependency("node",Y[H]));return Promise.all(X).then(function(H){for(let K=0,G=H.length;K<G;K++)W.add(H[K]);let q=(K)=>{let G=new Map;for(let[U,F]of $.associations)if(U instanceof C5||U instanceof N5)G.set(U,F);return K.traverse((U)=>{let F=$.associations.get(U);if(F!=null)G.set(U,F)}),G};return $.associations=q(W),W})}_createAnimationTracks(J,Q,Z,$,W){let Y=[],X=J.name?J.name:J.uuid,H=[];if(a6[W.path]===a6.weights)J.traverse(function(U){if(U.morphTargetInfluences)H.push(U.name?U.name:U.uuid)});else H.push(X);let q;switch(a6[W.path]){case a6.weights:q=l6;break;case a6.rotation:q=s6;break;case a6.position:case a6.scale:q=d6;break;default:switch(Z.itemSize){case 1:q=l6;break;case 2:case 3:default:q=d6;break}break}let K=$.interpolation!==void 0?Eq[$.interpolation]:OJ,G=this._getArrayFromAccessor(Z);for(let U=0,F=H.length;U<F;U++){let V=new q(H[U]+"."+a6[W.path],Q.array,G,K);if($.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(V);Y.push(V)}return Y}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let Z=tJ(Q.constructor),$=new Float32Array(Q.length);for(let W=0,Y=Q.length;W<Y;W++)$[W]=Q[W]*Z;Q=$}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Z){return new(this instanceof s6?JW:JQ)(this.times,this.values,this.getValueSize()/3,Z)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kq(J,Q,Z){let $=Q.attributes,W=new T5;if($.POSITION!==void 0){let H=Z.json.accessors[$.POSITION],q=H.min,K=H.max;if(q!==void 0&&K!==void 0){if(W.set(new P(q[0],q[1],q[2]),new P(K[0],K[1],K[2])),H.normalized){let G=tJ(n8[H.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let Y=Q.targets;if(Y!==void 0){let H=new P,q=new P;for(let K=0,G=Y.length;K<G;K++){let U=Y[K];if(U.POSITION!==void 0){let F=Z.json.accessors[U.POSITION],V=F.min,N=F.max;if(V!==void 0&&N!==void 0){if(q.setX(Math.max(Math.abs(V[0]),Math.abs(N[0]))),q.setY(Math.max(Math.abs(V[1]),Math.abs(N[1]))),q.setZ(Math.max(Math.abs(V[2]),Math.abs(N[2]))),F.normalized){let R=tJ(n8[F.componentType]);q.multiplyScalar(R)}H.max(q)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(H)}J.boundingBox=W;let X=new n5;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=X}function T$(J,Q,Z){let $=Q.attributes,W=[];function Y(X,H){return Z.getDependency("accessor",X).then(function(q){J.setAttribute(H,q)})}for(let X in $){let H=rJ[X]||X.toLowerCase();if(H in J.attributes)continue;W.push(Y($[X],H))}if(Q.indices!==void 0&&!J.index){let X=Z.getDependency("accessor",Q.indices).then(function(H){J.setIndex(H)});W.push(X)}if(s0.workingColorSpace!==V6&&"COLOR_0"in $)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${s0.workingColorSpace}" not supported.`);return T6(J,Q),kq(J,Q,Z),Promise.all(W).then(function(){return Q.targets!==void 0?Nq(J,Q.targets,Z):J})}var Lq=/^[og]\s*(.+)?/,Dq=/^mtllib /,Cq=/^usemtl /,_q=/^usemap /,ZW=/\s+/,$W=new P,QQ=new P,WW=new P,YW=new P,r5=new P,B7=new N0;function wq(){let J={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(Q,Z){if(this.object&&this.object.fromDeclaration===!1){this.object.name=Q,this.object.fromDeclaration=Z!==!1;return}let $=this.object&&typeof this.object.currentMaterial==="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0);if(this.object={name:Q||"",fromDeclaration:Z!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(W,Y){let X=this._finalize(!1);if(X&&(X.inherited||X.groupCount<=0))this.materials.splice(X.index,1);let H={index:this.materials.length,name:W||"",mtllib:Array.isArray(Y)&&Y.length>0?Y[Y.length-1]:"",smooth:X!==void 0?X.smooth:this.smooth,groupStart:X!==void 0?X.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(q){let K={index:typeof q==="number"?q:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return K.clone=this.clone.bind(K),K}};return this.materials.push(H),H},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1];return},_finalize:function(W){let Y=this.currentMaterial();if(Y&&Y.groupEnd===-1)Y.groupEnd=this.geometry.vertices.length/3,Y.groupCount=Y.groupEnd-Y.groupStart,Y.inherited=!1;if(W&&this.materials.length>1){for(let X=this.materials.length-1;X>=0;X--)if(this.materials[X].groupCount<=0)this.materials.splice(X,1)}if(W&&this.materials.length===0)this.materials.push({name:"",smooth:this.smooth});return Y}},$&&$.name&&typeof $.clone==="function"){let W=$.clone(0);W.inherited=!0,this.object.materials.push(W)}this.objects.push(this.object)},finalize:function(){if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0)},parseVertexIndex:function(Q,Z){let $=parseInt(Q,10);return($>=0?$-1:$+Z/3)*3},parseNormalIndex:function(Q,Z){let $=parseInt(Q,10);return($>=0?$-1:$+Z/3)*3},parseUVIndex:function(Q,Z){let $=parseInt(Q,10);return($>=0?$-1:$+Z/2)*2},addVertex:function(Q,Z,$){let W=this.vertices,Y=this.object.geometry.vertices;Y.push(W[Q+0],W[Q+1],W[Q+2]),Y.push(W[Z+0],W[Z+1],W[Z+2]),Y.push(W[$+0],W[$+1],W[$+2])},addVertexPoint:function(Q){let Z=this.vertices;this.object.geometry.vertices.push(Z[Q+0],Z[Q+1],Z[Q+2])},addVertexLine:function(Q){let Z=this.vertices;this.object.geometry.vertices.push(Z[Q+0],Z[Q+1],Z[Q+2])},addNormal:function(Q,Z,$){let W=this.normals,Y=this.object.geometry.normals;Y.push(W[Q+0],W[Q+1],W[Q+2]),Y.push(W[Z+0],W[Z+1],W[Z+2]),Y.push(W[$+0],W[$+1],W[$+2])},addFaceNormal:function(Q,Z,$){let W=this.vertices,Y=this.object.geometry.normals;$W.fromArray(W,Q),QQ.fromArray(W,Z),WW.fromArray(W,$),r5.subVectors(WW,QQ),YW.subVectors($W,QQ),r5.cross(YW),r5.normalize(),Y.push(r5.x,r5.y,r5.z),Y.push(r5.x,r5.y,r5.z),Y.push(r5.x,r5.y,r5.z)},addColor:function(Q,Z,$){let W=this.colors,Y=this.object.geometry.colors;if(W[Q]!==void 0)Y.push(W[Q+0],W[Q+1],W[Q+2]);if(W[Z]!==void 0)Y.push(W[Z+0],W[Z+1],W[Z+2]);if(W[$]!==void 0)Y.push(W[$+0],W[$+1],W[$+2])},addUV:function(Q,Z,$){let W=this.uvs,Y=this.object.geometry.uvs;Y.push(W[Q+0],W[Q+1]),Y.push(W[Z+0],W[Z+1]),Y.push(W[$+0],W[$+1])},addDefaultUV:function(){let Q=this.object.geometry.uvs;Q.push(0,0),Q.push(0,0),Q.push(0,0)},addUVLine:function(Q){let Z=this.uvs;this.object.geometry.uvs.push(Z[Q+0],Z[Q+1])},addFace:function(Q,Z,$,W,Y,X,H,q,K){let G=this.vertices.length,U=this.parseVertexIndex(Q,G),F=this.parseVertexIndex(Z,G),V=this.parseVertexIndex($,G);if(this.addVertex(U,F,V),this.addColor(U,F,V),H!==void 0&&H!==""){let N=this.normals.length;U=this.parseNormalIndex(H,N),F=this.parseNormalIndex(q,N),V=this.parseNormalIndex(K,N),this.addNormal(U,F,V)}else this.addFaceNormal(U,F,V);if(W!==void 0&&W!==""){let N=this.uvs.length;U=this.parseUVIndex(W,N),F=this.parseUVIndex(Y,N),V=this.parseUVIndex(X,N),this.addUV(U,F,V),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(Q){this.object.geometry.type="Points";let Z=this.vertices.length;for(let $=0,W=Q.length;$<W;$++){let Y=this.parseVertexIndex(Q[$],Z);this.addVertexPoint(Y),this.addColor(Y)}},addLineGeometry:function(Q,Z){this.object.geometry.type="Line";let $=this.vertices.length,W=this.uvs.length;for(let Y=0,X=Q.length;Y<X;Y++)this.addVertexLine(this.parseVertexIndex(Q[Y],$));for(let Y=0,X=Z.length;Y<X;Y++)this.addUVLine(this.parseUVIndex(Z[Y],W))}};return J.startObject("",!1),J}class ZQ extends o5{constructor(J){super(J);this.materials=null}load(J,Q,Z,$){let W=this,Y=new i6(this.manager);Y.setPath(this.path),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Q(W.parse(X))}catch(H){if($)$(H);else console.error(H);W.manager.itemError(J)}},Z,$)}setMaterials(J){return this.materials=J,this}parse(J){let Q=new wq;if(J.indexOf(`\r
`)!==-1)J=J.replace(/\r\n/g,`
`);if(J.indexOf("\\\n")!==-1)J=J.replace(/\\\n/g,"");let Z=J.split(`
`),$=[];for(let X=0,H=Z.length;X<H;X++){let q=Z[X].trimStart();if(q.length===0)continue;let K=q.charAt(0);if(K==="#")continue;if(K==="v"){let G=q.split(ZW);switch(G[0]){case"v":if(Q.vertices.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])),G.length>=7)B7.setRGB(parseFloat(G[4]),parseFloat(G[5]),parseFloat(G[6])).convertSRGBToLinear(),Q.colors.push(B7.r,B7.g,B7.b);else Q.colors.push(void 0,void 0,void 0);break;case"vn":Q.normals.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3]));break;case"vt":Q.uvs.push(parseFloat(G[1]),parseFloat(G[2]));break}}else if(K==="f"){let U=q.slice(1).trim().split(ZW),F=[];for(let N=0,R=U.length;N<R;N++){let E=U[N];if(E.length>0){let O=E.split("/");F.push(O)}}let V=F[0];for(let N=1,R=F.length-1;N<R;N++){let E=F[N],O=F[N+1];Q.addFace(V[0],E[0],O[0],V[1],E[1],O[1],V[2],E[2],O[2])}}else if(K==="l"){let G=q.substring(1).trim().split(" "),U=[],F=[];if(q.indexOf("/")===-1)U=G;else for(let V=0,N=G.length;V<N;V++){let R=G[V].split("/");if(R[0]!=="")U.push(R[0]);if(R[1]!=="")F.push(R[1])}Q.addLineGeometry(U,F)}else if(K==="p"){let U=q.slice(1).trim().split(" ");Q.addPointGeometry(U)}else if(($=Lq.exec(q))!==null){let G=(" "+$[0].slice(1).trim()).slice(1);Q.startObject(G)}else if(Cq.test(q))Q.object.startMaterial(q.substring(7).trim(),Q.materialLibraries);else if(Dq.test(q))Q.materialLibraries.push(q.substring(7).trim());else if(_q.test(q))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(K==="s"){if($=q.split(" "),$.length>1){let U=$[1].trim().toLowerCase();Q.object.smooth=U!=="0"&&U!=="off"}else Q.object.smooth=!0;let G=Q.object.currentMaterial();if(G)G.smooth=Q.object.smooth}else{if(q==="\x00")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+q+'"')}}Q.finalize();let W=new P5;if(W.materialLibraries=[].concat(Q.materialLibraries),!(Q.objects.length===1&&Q.objects[0].geometry.vertices.length===0)===!0)for(let X=0,H=Q.objects.length;X<H;X++){let q=Q.objects[X],K=q.geometry,G=q.materials,U=K.type==="Line",F=K.type==="Points",V=!1;if(K.vertices.length===0)continue;let N=new G5;if(N.setAttribute("position",new W5(K.vertices,3)),K.normals.length>0)N.setAttribute("normal",new W5(K.normals,3));if(K.colors.length>0)V=!0,N.setAttribute("color",new W5(K.colors,3));if(K.hasUVIndices===!0)N.setAttribute("uv",new W5(K.uvs,2));let R=[];for(let O=0,M=G.length;O<M;O++){let C=G[O],I=C.name+"_"+C.smooth+"_"+V,y=Q.materials[I];if(this.materials!==null){if(y=this.materials.create(C.name),U&&y&&!(y instanceof s5)){let L=new s5;C5.prototype.copy.call(L,y),L.color.copy(y.color),y=L}else if(F&&y&&!(y instanceof P6)){let L=new P6({size:10,sizeAttenuation:!1});C5.prototype.copy.call(L,y),L.color.copy(y.color),L.map=y.map,y=L}}if(y===void 0){if(U)y=new s5;else if(F)y=new P6({size:1,sizeAttenuation:!1});else y=new yJ;y.name=C.name,y.flatShading=C.smooth?!1:!0,y.vertexColors=V,Q.materials[I]=y}R.push(y)}let E;if(R.length>1){for(let O=0,M=G.length;O<M;O++){let C=G[O];N.addGroup(C.groupStart,C.groupCount,O)}if(U)E=new A6(N,R);else if(F)E=new U8(N,R);else E=new d0(N,R)}else if(U)E=new A6(N,R[0]);else if(F)E=new U8(N,R[0]);else E=new d0(N,R[0]);E.name=q.name,W.add(E)}else if(Q.vertices.length>0){let X=new P6({size:1,sizeAttenuation:!1}),H=new G5;if(H.setAttribute("position",new W5(Q.vertices,3)),Q.colors.length>0&&Q.colors[0]!==void 0)H.setAttribute("color",new W5(Q.colors,3)),X.vertexColors=!0;let q=new U8(H,X);W.add(q)}return W}}class $Q extends E9{constructor(J=null){super();let Q=new q8;Q.deleteAttribute("uv");let Z=new K6({side:jZ}),$=new K6,W=new R9(16777215,900,28,2);W.position.set(0.418,16.199,0.3),this.add(W);let Y=new d0(Q,Z);Y.position.set(-0.757,13.219,0.717),Y.scale.set(31.713,28.305,28.591),this.add(Y);let X=new d0(Q,$);X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),this.add(X);let H=new d0(Q,$);H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),this.add(H);let q=new d0(Q,$);q.position.set(6.167,0.857,7.803),q.rotation.set(0,0.561,0),q.scale.set(3.927,6.285,3.687),this.add(q);let K=new d0(Q,$);K.position.set(-2.017,0.018,6.124),K.rotation.set(0,0.333,0),K.scale.set(2.002,4.566,2.064),this.add(K);let G=new d0(Q,$);G.position.set(2.291,-0.756,-2.621),G.rotation.set(0,-0.286,0),G.scale.set(1.546,1.552,1.496),this.add(G);let U=new d0(Q,$);U.position.set(-2.193,-0.369,-5.547),U.rotation.set(0,0.516,0),U.scale.set(3.875,3.487,2.986),this.add(U);let F=new d0(Q,s8(50));F.position.set(-16.116,14.37,8.208),F.scale.set(0.1,2.428,2.739),this.add(F);let V=new d0(Q,s8(50));V.position.set(-16.109,18.021,-8.207),V.scale.set(0.1,2.425,2.751),this.add(V);let N=new d0(Q,s8(17));N.position.set(14.904,12.198,-1.832),N.scale.set(0.15,4.265,6.331),this.add(N);let R=new d0(Q,s8(43));R.position.set(-0.462,8.89,14.52),R.scale.set(4.38,5.441,0.088),this.add(R);let E=new d0(Q,s8(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,0.1),this.add(E);let O=new d0(Q,s8(100));O.position.set(0,20,0),O.scale.set(1,0.1,1),this.add(O)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function s8(J){let Q=new q6;return Q.color.setScalar(J),Q}var Iq=300000,g0=(J)=>document.getElementById(J),j5=g0("view"),N6=new wJ({canvas:j5,antialias:!0,preserveDrawingBuffer:!0});N6.setPixelRatio(Math.min(window.devicePixelRatio,2));N6.toneMapping=vZ;N6.outputColorSpace=c6;N6.shadowMap.enabled=!0;N6.shadowMap.type=TZ;var l5=new E9,EW=new F9(N6),OW=new $Q,Aq=EW.fromScene(OW,0.06);OW.dispose();EW.dispose();var M5=new K8(-1,1,1,-1,0.001,1000),i8=2,e5=new cJ(M5,j5);e5.enableDamping=!0;e5.dampingFactor=0.08;e5.screenSpacePanning=!0;l5.add(new hJ(16777215,8161172,0.55));var D7=new o6(16777215,1.5),C7=new o6(14674175,0.45);l5.add(D7,D7.target,C7,C7.target);var p5=new o6(16773852,2.2);p5.castShadow=!0;p5.shadow.mapSize.set(1024,1024);p5.shadow.radius=5;p5.shadow.blurSamples=8;p5.shadow.normalBias=0.02;var k9=new o6(14477567,1.1);l5.add(p5,p5.target,k9,k9.target);var z8=new d0(new d8(1,1),new jJ({color:4274736,opacity:0.12}));z8.rotation.x=-Math.PI/2;z8.receiveShadow=!0;l5.add(z8);var k7=[new P,new P,new P],XW=new P;function HW(J,Q,Z,$){let[W,Y,X]=k7;XW.copy(X).addScaledVector(Y,Q).addScaledVector(W,Z).setLength($),J.target.position.copy(e5.target),J.position.copy(e5.target).add(XW)}function NW(){M5.updateMatrixWorld(),M5.matrixWorld.extractBasis(k7[0],k7[1],k7[2]);let J=M5.position.distanceTo(e5.target)||1;HW(D7,0.55,0.45,J),HW(C7,-0.35,-0.7,J)}var O6=null,F5=null,u5=null,P7=[],R6=[],FQ=[],m5=null,T7="",S5={grid:!1,wire:!1,edges:!1},B6="studio",o8=0,t5=[],_7=new Map,w7=new Map,WQ=0,I7=[5672867,13407580,9280881,12024181,9274283,6662045,12430438,8558006];function YQ(J){return J>=100?J.toFixed(0):J>=10?J.toFixed(1):J.toFixed(2)}function UQ(J){J.traverse((Q)=>{if(Q.geometry)Q.geometry.dispose();if(Q.material)(Array.isArray(Q.material)?Q.material:[Q.material]).forEach(($)=>{Object.values($).forEach((W)=>W&&W.isTexture&&W.dispose()),$.dispose()})})}function qW(){y6(),PW();for(let[J,Q]of _7)J.material=Q;for(let J of w7.values())J.flat().forEach((Q)=>Q.dispose());if(_7.clear(),w7.clear(),t5=[],g0("callouts").replaceChildren(),m5=null,z8.visible=!1,g0("dims").textContent="",g0("meta").textContent="",g0("btn-edges").classList.remove("disabled"),F5)l5.remove(F5),UQ(F5),F5=null;if(u5)l5.remove(u5),UQ(u5),u5=null;P7=[],R6=[],FQ=[]}function Pq(J){let Q=[0.1,0.2,0.5,1,2,5,10,20,50,100,200,500,1000];for(let Z of Q)if(J/Z<=12)return Z;return 2000}function Tq(){u5=new P5;let{size:J}=m5,Q=Math.max(J.x,J.z,0.000001),Z=Pq(Q),$=Z*Math.max(2,Math.ceil(Q*1.6/Z/2)*2),W=new lJ($,Math.round($/Z),5597050,2898247);W.material.transparent=!0,W.material.opacity=0.6,u5.add(W);let Y=Math.max(J.x,J.y,J.z)*0.55,X=new P5;X.rotation.x=-Math.PI/2;let H=(K,G)=>{let U=new G5().setFromPoints([new P,K.multiplyScalar(Y)]);X.add(new G8(U,new s5({color:G})))};H(new P(1,0,0),15026253),H(new P(0,1,0),4630360),H(new P(0,0,1),3900150),u5.add(X);let q=g0("gridstep");if(q)q.textContent=`grid ${Z} mm`;u5.visible=S5.grid,l5.add(u5)}function RW(J){let Q=[];return J.traverse((Z)=>{if(Z.isMesh&&Z.geometry)Q.push(Z)}),Q}function BW(){let J=0;for(let Q of R6){let Z=Q.geometry;J+=(Z.index?Z.index.count:Z.attributes.position.count)/3}return Math.round(J)}function Sq(){if(BW()>Iq){g0("btn-edges").classList.add("disabled");return}for(let J of R6){let Q=new A6(new SJ(J.geometry,30),new s5({color:1186338,transparent:!0,opacity:0.5}));Q.visible=S5.edges,J.add(Q),P7.push(Q)}}var jq=5941734,KW=new mJ,zW=new M0,S6=g0("tooltip"),MW=0,kW=0,L9=!1,VQ=!1,D9=null,t8=new Map,yq=/^mesh_\d+(_\d+)?$/;function LW(J){if(!J.name||yq.test(J.name))return!1;let Q=J.parent,Z=Q&&Q.name&&J.name.startsWith(`${Q.name}_`)&&J.name.slice(Q.name.length+1);return!(Z&&/^\d+$/.test(Z))}function DW(J){for(let Q=J;Q&&Q!==F5;Q=Q.parent)if(LW(Q))return Q;return null}function GW(J){let Q=J.clone();if(Q.emissive)Q.emissive.setHex(jq),Q.emissiveIntensity=0.35;if("wireframe"in Q)Q.wireframe=S5.wire;return Q}function CW(J){D9=J;for(let Q of Array.isArray(J)?J:[J])for(let Z of RW(Q)){if(t8.has(Z))continue;t8.set(Z,Z.material),Z.material=Array.isArray(Z.material)?Z.material.map(GW):GW(Z.material)}}function y6(){for(let[J,Q]of t8){let Z=Array.isArray(J.material)?J.material:[J.material];J.material=Q,Z.forEach(($)=>$.dispose())}if(t8.clear(),D9=null,S6)S6.style.display="none"}function vq(J){S6.textContent=J,S6.style.display="block";let Q=Math.min(MW+12,window.innerWidth-S6.offsetWidth-4),Z=Math.min(kW+12,window.innerHeight-S6.offsetHeight-4);S6.style.left=`${Math.max(4,Q)}px`,S6.style.top=`${Math.max(4,Z)}px`}function fq(){if(!L9||VQ||!F5)return;L9=!1,KW.setFromCamera(zW,M5);let J=KW.intersectObjects(FQ,!1)[0],Q=J?DW(J.object):null,Z=Q||(J?J.object:null);if(Z!==D9){if(y6(),Z)CW(Z)}if(Z&&S6)vq(Q?Q.name.replace(/_/g," "):T7)}j5.addEventListener("pointermove",(J)=>{let Q=j5.getBoundingClientRect();zW.set((J.clientX-Q.left)/Q.width*2-1,-((J.clientY-Q.top)/Q.height)*2+1),MW=J.clientX,kW=J.clientY,L9=!0});j5.addEventListener("pointerdown",()=>{VQ=!0,y6()});window.addEventListener("pointerup",()=>{VQ=!1,L9=!0});j5.addEventListener("pointerleave",()=>{L9=!1,y6()});var _W=g0("legend"),B8=g0("legend-list"),a8=g0("legend-all"),XQ=g0("legend-toggle"),j6=[],xq=/(?:[\s_.-]*\d+)+$/,L7=(J)=>J.replace(/_/g," "),wW=(J)=>{for(let Q=J;Q;Q=Q.parent)if(!Q.visible)return!1;return!0};function z9(){FQ=R6.filter(wW)}function M9(J){let Q=[],Z=($)=>{for(let W of $.children)if(LW(W))Q.push(W);else Z(W)};return Z(J),Q}function IW(J){return M9(J).flatMap((Q)=>{let Z=IW(Q);return Z.length?Z:[Q]})}function AW(J,Q){let Z=[],$=new Map;for(let W of J){if(Q&&M9(W).length){Z.push({nodes:[W],label:L7(W.name),kids:AW(IW(W),!1)});continue}let Y=W.name.replace(xq,"")||W.name,X=$.get(Y);if(X){X.nodes.push(W);continue}let H={nodes:[W],label:L7(W.name),base:Y};$.set(Y,H),Z.push(H)}for(let W of Z)if(W.nodes.length>1)W.label=`${L7(W.base)} ×${W.nodes.length}`;return Z}function hq(){if(!F5)return[];let J=M9(F5);while(J.length===1&&M9(J[0]).length)J=M9(J[0]);return AW(J,!0)}function A7(J,Q){for(let Z of J.nodes)if(Z.visible=Q,Q)for(let $=Z.parent;$&&$!==F5;$=$.parent)$.visible=!0;J.input.checked=Q,J.input.indeterminate=!1;for(let Z of J.kids||[])A7(Z,Q)}function UW(J,Q=!0){let Z=J.kids.filter(($)=>$.input.checked).length;if(Q)J.nodes[0].visible=Z>0;J.input.checked=Z===J.kids.length&&J.nodes[0].visible,J.input.indeterminate=Z>0&&!J.input.checked}function HQ(){let J=j6.filter((Z)=>Z.input.checked).length,Q=j6.filter((Z)=>Z.input.checked||Z.input.indeterminate).length;a8.checked=j6.length>0&&J===j6.length,a8.indeterminate=Q>0&&!a8.checked}function FW(J){let Q=document.createElement("div");Q.className=J.kids?"lg-row lg-group":"lg-row";let Z=document.createElement("input");Z.type="checkbox",Z.checked=J.nodes.some((Y)=>Y.visible),J.input=Z;let $=document.createElement("span");if($.className="lg-name",$.textContent=J.label,J.color!==void 0)$.style.borderLeft=`8px solid #${J.color.toString(16).padStart(6,"0")}`,$.style.paddingLeft="6px";$.title=J.label;let W=document.createElement("label");return W.append(Z,$),Q.append(W),Q.addEventListener("pointerenter",()=>{if(D9===J.nodes)return;y6(),CW(J.nodes)}),Q.addEventListener("pointerleave",()=>{if(D9===J.nodes)y6()}),Q}function PW(){j6=[],B8.replaceChildren(),_W.style.display="none"}function EQ(){PW(),j6=B6==="assembly"?t5.map((J,Q)=>({nodes:J.meshes,label:`${Q+1}. ${J.label}`,color:I7[Q%I7.length]})):hq();for(let J of j6){let Q=FW(J);if(J.input.addEventListener("change",()=>{A7(J,J.input.checked),HQ(),z9()}),B8.append(Q),!J.kids)continue;let Z=document.createElement("div");Z.className="lg-kids",Z.hidden=J.kids.length>8;let $=document.createElement("button");$.className="lg-tri",$.textContent=Z.hidden?"▶":"▼",$.addEventListener("click",()=>{Z.hidden=!Z.hidden,$.textContent=Z.hidden?"▶":"▼"}),Q.prepend($);for(let W of J.kids)Z.append(FW(W)),W.input.addEventListener("change",()=>{A7(W,W.input.checked),UW(J),HQ(),z9()});B8.append(Z),UW(J,!1)}_W.style.display=j6.length?"flex":"none",HQ(),z9()}a8.addEventListener("change",()=>{for(let J of j6)A7(J,a8.checked);a8.indeterminate=!1,z9()});XQ.addEventListener("click",()=>{B8.hidden=!B8.hidden,XQ.textContent=B8.hidden?"+":"−",XQ.title=B8.hidden?"show components":"hide components"});function bq(){F5.updateMatrixWorld(!0);let J=new Map;for(let $ of R6){let W=DW($)||$;if(!J.has(W))J.set(W,[]);J.get(W).push($)}t5=[...J].map(([$,W],Y)=>{let X=new T5;W.forEach((G)=>X.union(new T5().setFromObject(G)));let H=X.getCenter(new P),q=H.clone().sub(new P(0,m5.height/2,0));if(q.length()<m5.radius*0.05){let G=Y*Math.PI*(3-Math.sqrt(5));q.set(Math.cos(G),0.35,Math.sin(G))}q.normalize().multiplyScalar(m5.radius*1.25);let K=W.map((G)=>({mesh:G,position:G.position.clone(),world:G.getWorldPosition(new P),anchor:G.worldToLocal(H.clone())}));for(let G of W){G.castShadow=!0,G.receiveShadow=!0,_7.set(G,G.material);let U=Array.isArray(G.material)?G.material:[G.material],F=(V)=>U.map((N)=>new K6({color:V,roughness:0.32,metalness:0.42,envMapIntensity:0.7,side:N.side,transparent:N.transparent,opacity:N.opacity,flatShading:N.flatShading||!1}));w7.set(G,[F(5534330),F(I7[Y%I7.length])])}return{meshes:W,poses:K,direction:q,label:L7($.name||T7)}});let Q=m5.radius;z8.scale.setScalar(Q*12),z8.position.y=-Q*0.003,p5.position.set(Q*1.5,Q*7,Q*1.5),p5.target.position.set(0,m5.height/2,0),k9.position.set(-Q*3,Q*2,-Q*2),k9.target.position.copy(p5.target.position);let Z=p5.shadow.camera;Z.left=Z.bottom=-Q*3,Z.right=Z.top=Q*3,Z.near=Q*0.01,Z.far=Q*12,Z.updateProjectionMatrix(),p5.shadow.normalBias=Q*0.002}function OQ(J,Q=!0){if(!["studio","inspection","assembly"].includes(J))throw Error(`Unknown presentation: ${J}`);y6(),B6=J;let Z=J==="inspection";document.body.dataset.preset=J,g0("preset").value=J,l5.background=new N0(Z?1252390:15394784),l5.environment=Z?null:Aq.texture,S5={grid:Z,wire:!1,edges:Z},D7.intensity=Z?1.5:0.65,C7.intensity=Z?0.45:0.3,p5.visible=k9.visible=!Z,z8.visible=!Z&&!!m5;for(let $ of R6){let W=w7.get($),Y=_7.get($),X=W[J==="assembly"?1:0];$.material=Z?Y:Array.isArray(Y)?X:X[0]}if(SW(),P7.forEach(($)=>{$.visible=S5.edges}),u5)u5.visible=S5.grid;g0("gridstep").hidden=!S5.grid;for(let $ of["grid","wire","edges"])g0("btn-"+$).classList.toggle("on",S5[$]);if(g0("assembly-controls").hidden=J!=="assembly",g0("explode").disabled=t5.length<2,g0("assembly-note").textContent=t5.length<2?"Single component: explosion is unavailable. Use a named multi-part GLB for assembly views.":"Explanatory separation only — not a motion or assembly simulation.",NQ(o8),EQ(),gq(),Q)C9()}function NQ(J){if(!Number.isFinite(J))throw Error("Explosion factor must be finite");o8=E6.clamp(J,0,1),g0("explode").value=String(o8),g0("explode-value").textContent=`${Math.round(o8*100)}%`;let Q=B6==="assembly"&&t5.length>1?o8:0;for(let Z of t5)for(let $ of Z.poses)$.mesh.position.copy($.position);if(F5)F5.updateMatrixWorld(!0);if(Q){let Z=new Map;for(let $ of t5)for(let W of $.poses)Z.set(W.mesh,W.world.clone().addScaledVector($.direction,Q));for(let $ of R6)$.position.copy($.parent.worldToLocal(Z.get($))),$.updateMatrixWorld(!0)}y6(),z9()}var z7="http://www.w3.org/2000/svg";function gq(){let J=g0("callouts");J.replaceChildren();for(let[Q,Z]of t5.entries()){let $=document.createElementNS(z7,"g"),W=document.createElementNS(z7,"path"),Y=document.createElementNS(z7,"circle"),X=document.createElementNS(z7,"text");Y.setAttribute("r","12"),X.textContent=String(Q+1),$.append(W,Y,X),J.append($),Z.callout={group:$,line:W,circle:Y,text:X}}}var M7=new P,qQ=[];function pq(){let J=g0("callouts");if(J.style.display=B6==="assembly"&&t5.length>1?"block":"none",B6!=="assembly"||t5.length<2)return;let{clientWidth:Q,clientHeight:Z}=j5;qQ.length=0;for(let[$,W]of t5.entries()){let{group:Y,line:X,circle:H,text:q}=W.callout,K=W.poses.find((N)=>wW(N.mesh));if(Y.style.display=K?"":"none",!K)continue;if(M7.copy(K.anchor).applyMatrix4(K.mesh.matrixWorld).project(M5),Math.abs(M7.z)>1){Y.style.display="none";continue}let G=(M7.x+1)*Q/2,U=(1-M7.y)*Z/2,F=Math.max(16,Math.min(Q-16,G+($%2?46:-46))),V=Math.max(16,Math.min(Z-80,U-34));for(let N of qQ)if(Math.abs(F-N[0])<28&&Math.abs(V-N[1])<28)V=N[1]+28;V=Math.min(Z-20,V),qQ.push([F,V]),X.setAttribute("d",`M ${G} ${U} L ${F} ${V}`),H.setAttribute("cx",F),H.setAttribute("cy",V),q.setAttribute("x",F),q.setAttribute("y",V)}}function uq(){if(!F5)return;y6(),NW(),N6.render(l5,M5),j5.toBlob((J)=>{if(!J){r8("PNG export failed",!0);return}let Q=URL.createObjectURL(J),Z=document.createElement("a");Z.href=Q,Z.download=`${T7}-${B6}.png`,Z.click(),setTimeout(()=>URL.revokeObjectURL(Q),1000)},"image/png")}function R8(J,Q){if(!m5)return;let Z=E6.degToRad(J),$=E6.degToRad(Q),W=new T5().setFromObject(F5),Y=W.getCenter(new P),X=Math.max(W.getSize(new P).length()/2,m5.radius),H=X*4;M5.position.set(Y.x+H*Math.sin(Z)*Math.cos($),Y.y+H*Math.sin($),Y.z+H*Math.cos(Z)*Math.cos($)),i8=X*2.5/Math.min(1,j5.clientWidth/j5.clientHeight),M5.zoom=1,M5.near=Math.max(X/1000,0.00001),M5.far=X*100,e5.target.copy(Y),jW(),e5.update()}var C9=()=>R8(B6==="inspection"?45:135,30);async function mq(J){let Q=await fetch(J);if(!Q.ok)throw Error(`${Q.status} ${Q.statusText} for ${J}`);let Z=+Q.headers.get("content-length")||0;if(!Q.body||!Z)return await Q.arrayBuffer();let $=Q.body.getReader(),W=new Uint8Array(Z),Y=0;for(;;){let{done:X,value:H}=await $.read();if(X)break;W.set(H,Y),Y+=H.length,r8(`loading… ${Math.round(Y/Z*100)}%`)}return W.buffer}var VW=()=>new K6({color:10335432,metalness:0.15,roughness:0.55,flatShading:!0});async function lq(J,Q){let Z=J.split(".").pop().toLowerCase();if(Z==="stl"){let $=new nJ().parse(Q);return{object:new d0($,VW()),zUp:!0}}if(Z==="obj"){let $=new ZQ().parse(new TextDecoder().decode(Q));return $.traverse((W)=>{if(!W.isMesh)return;(Array.isArray(W.material)?W.material:[W.material]).forEach((Y)=>Y.dispose()),W.material=VW()}),{object:$,zUp:!0}}if(Z==="glb"||Z==="gltf")return{object:(await new eJ().parseAsync(Q,"./")).scene,zUp:!1};throw Error(`unsupported format: .${Z}`)}async function TW(J){let Q=++WQ;r8("loading…"),qW(),T7=J.file.split("/").pop().replace(/\.[^.]*$/,"");try{let Z=await mq(`./${J.file}`),{object:$,zUp:W}=await lq(J.file,Z);if(Q!==WQ){UQ($);return}if(F5=new P5,W){let q=new P5;q.rotation.x=-Math.PI/2,q.add($),F5.add(q)}else F5.add($);l5.add(F5);let Y=new T5().setFromObject(F5),X=Y.getCenter(new P),H=Y.getSize(new P);F5.position.set(-X.x,-Y.min.y,-X.z),m5={size:H,radius:Math.max(H.length()/2,0.000001),height:H.y},R6=RW(F5),R6.forEach((q,K)=>{let G=Array.isArray(q.material)?q.material[0]:q.material;if(G&&G.transparent)q.renderOrder=1+K}),bq(),Sq(),EQ(),Tq(),OQ(B6,!1),C9(),g0("dims").textContent=`Assembled mesh ≈ X ${YQ(H.x)} × Y ${YQ(H.z)} × Z ${YQ(H.y)} mm`,g0("meta").textContent=`${BW().toLocaleString()} tris · ${J.file}`+(J.bytes?` · ${(J.bytes/1048576).toFixed(1)} MB`:""),r8("")}catch(Z){if(Q!==WQ)return;qW(),r8(`failed to load ${J.file}: ${Z.message}`,!0)}}function r8(J,Q=!1){let Z=g0("status");Z.textContent=J,Z.className=Q?"error":"",Z.style.display=J?"block":"none"}function SW(){let J=(Q)=>{if("wireframe"in Q)Q.wireframe=S5.wire};for(let Q of R6)(t8.has(Q)?[Q.material,t8.get(Q)]:[Q.material]).flat().forEach(J)}function KQ(J,Q,Z){let $=g0(J);$.classList.toggle("on",S5[Q]),$.addEventListener("click",()=>{S5[Q]=!S5[Q],$.classList.toggle("on",S5[Q]),Z()})}function dq(){g0("title").textContent=O6.title,document.title=`${O6.title} — CAD viewer`;let J=O6.presentation;if(B6=["studio","inspection","assembly"].includes(J)?J:"studio",g0("preset").addEventListener("change",(Z)=>OQ(Z.target.value)),g0("explode").addEventListener("input",(Z)=>{let $=E6.radToDeg(e5.getAzimuthalAngle()),W=90-E6.radToDeg(e5.getPolarAngle());NQ(Number(Z.target.value)),R8($,W)}),g0("btn-png").addEventListener("click",uq),O6.drawing){let Z=g0("drawing");Z.href=`./${O6.drawing}`,Z.hidden=!1}let Q=g0("model");if(O6.models.length>1)O6.models.forEach((Z,$)=>Q.add(new Option(Z.label,$))),Q.addEventListener("change",()=>TW(O6.models[+Q.value])),Q.style.display="block";g0("btn-fit").addEventListener("click",C9),g0("btn-iso").addEventListener("click",()=>R8(45,30)),g0("btn-top").addEventListener("click",()=>R8(0,88.5)),g0("btn-front").addEventListener("click",()=>R8(0,0)),g0("btn-right").addEventListener("click",()=>R8(90,0)),KQ("btn-grid","grid",()=>{if(u5)u5.visible=S5.grid;g0("gridstep").hidden=!S5.grid}),KQ("btn-wire","wire",SW),KQ("btn-edges","edges",()=>P7.forEach((Z)=>{Z.visible=S5.edges})),j5.addEventListener("dblclick",C9)}function jW(){let J=j5.clientWidth||window.innerWidth,Q=j5.clientHeight||window.innerHeight;N6.setSize(J,Q,!1);let Z=J/Q;M5.left=-i8*Z/2,M5.right=i8*Z/2,M5.top=i8/2,M5.bottom=-i8/2,M5.updateProjectionMatrix()}var GQ=0;function yW(){let J=j5.clientWidth/j5.clientHeight;if(m5&&GQ)i8*=Math.min(1,GQ)/Math.min(1,J);GQ=J,jW()}async function cq(){try{let J=await fetch("./manifest.json");if(!J.ok)throw Error(`${J.status} ${J.statusText}`);O6=await J.json()}catch(J){r8(`failed to load manifest.json: ${J.message}`,!0);return}dq(),await TW(O6.models[0])}window.addEventListener("resize",yW);yW();N6.setAnimationLoop(()=>{e5.update(),NW(),fq(),pq(),N6.render(l5,M5)});cq();window.cadviewer={setView:R8,fit:C9,scene:l5,camera:M5,controls:e5,legend:{refresh:EQ},setPreset:OQ,setExplode:NQ,get preset(){return B6},get explode(){return o8},get bounds(){return m5}};
